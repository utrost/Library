// @__NO_SIDE_EFFECTS__
function vd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const tt = {}, Tr = [], Ri = () => {
}, Dh = () => !1, tu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), iu = (e) => e.startsWith("onUpdate:"), Et = Object.assign, bd = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, mm = Object.prototype.hasOwnProperty, st = (e, t) => mm.call(e, t), Re = Array.isArray, ga = (e) => al(e) === "[object Map]", Ln = (e) => al(e) === "[object Set]", Mf = (e) => al(e) === "[object Date]", Ue = (e) => typeof e == "function", vt = (e) => typeof e == "string", Vi = (e) => typeof e == "symbol", lt = (e) => e !== null && typeof e == "object", Fh = (e) => (lt(e) || Ue(e)) && Ue(e.then) && Ue(e.catch), Mh = Object.prototype.toString, al = (e) => Mh.call(e), ym = (e) => al(e).slice(8, -1), Uh = (e) => al(e) === "[object Object]", gd = (e) => vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ks = /* @__PURE__ */ vd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, _m = /-\w/g, Jt = nu(
  (e) => e.replace(_m, (t) => t.slice(1).toUpperCase())
), wm = /\B([A-Z])/g, zn = nu(
  (e) => e.replace(wm, "-$1").toLowerCase()
), au = nu((e) => e.charAt(0).toUpperCase() + e.slice(1)), qu = nu(
  (e) => e ? `on${au(e)}` : ""
), Mt = (e, t) => !Object.is(e, t), Wl = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, zh = (e, t, i, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: i
  });
}, ru = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, km = (e) => {
  const t = vt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Uf;
const su = () => Uf || (Uf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pi(e) {
  if (Re(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i], a = vt(n) ? Am(n) : pi(n);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (vt(e) || lt(e))
    return e;
}
const Sm = /;(?![^(]*\))/g, Cm = /:([^]+)/, Tm = /\/\*[^]*?\*\//g;
function Am(e) {
  const t = {};
  return e.replace(Tm, "").split(Sm).forEach((i) => {
    if (i) {
      const n = i.split(Cm);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ce(e) {
  let t = "";
  if (vt(e))
    t = e;
  else if (Re(e))
    for (let i = 0; i < e.length; i++) {
      const n = Ce(e[i]);
      n && (t += n + " ");
    }
  else if (lt(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function Ql(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !vt(t) && (e.class = Ce(t)), i && (e.style = pi(i)), e;
}
const Em = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xm = /* @__PURE__ */ vd(Em);
function jh(e) {
  return !!e || e === "";
}
function $m(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let n = 0; i && n < e.length; n++)
    i = Pn(e[n], t[n]);
  return i;
}
function zf(e, t) {
  if (e.size !== t.size) return !1;
  const i = Array.from(t), n = new Uint8Array(i.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < i.length; s++)
      if (!n[s] && Pn(a, i[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    n[r] = 1;
  }
  return !0;
}
function Pn(e, t) {
  if (e === t) return !0;
  let i = Mf(e), n = Mf(t);
  if (i || n)
    return i && n ? e.getTime() === t.getTime() : !1;
  if (i = Vi(e), n = Vi(t), i || n)
    return e === t;
  if (i = Re(e), n = Re(t), i || n)
    return i && n ? $m(e, t) : !1;
  if (i = lt(e), n = lt(t), i || n) {
    if (!i || !n)
      return !1;
    if (i = ga(e), n = ga(t), i || n || (i = Ln(e), n = Ln(t), i || n))
      return i && n ? zf(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const d = e.hasOwnProperty(s), c = t.hasOwnProperty(s);
      if (d && !c || !d && c || !Pn(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function md(e, t) {
  return e.findIndex((i) => Pn(i, t));
}
const Bh = (e) => !!(e && e.__v_isRef === !0), o = (e) => vt(e) ? e : e == null ? "" : Re(e) || lt(e) && (e.toString === Mh || !Ue(e.toString)) ? Bh(e) ? o(e.value) : JSON.stringify(e, Hh, 2) : String(e), Hh = (e, t) => Bh(t) ? Hh(e, t.value) : ga(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [n, a], r) => (i[Ku(n, r) + " =>"] = a, i),
    {}
  )
} : Ln(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => Ku(i))
} : Vi(t) ? Ku(t) : lt(t) && !Re(t) && !Uh(t) ? String(t) : t, Ku = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Vi(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function Om(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Dt;
class Nm {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Dt && (Dt.active ? (this.parent = Dt, this.index = (Dt.scopes || (Dt.scopes = [])).push(
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
      const i = Dt;
      try {
        return Dt = this, t();
      } finally {
        Dt = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Dt, Dt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Dt === this)
        Dt = this.prevScope;
      else {
        let t = Dt;
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
  return Dt;
}
let ht;
const Gu = /* @__PURE__ */ new WeakSet();
class Vh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dt && (Dt.active ? Dt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Gu.has(this) && (Gu.delete(this), this.trigger()));
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
    this.flags |= 2, jf(this), Gh(this);
    const t = ht, i = Bi;
    ht = this, Bi = !0;
    try {
      return this.fn();
    } finally {
      Wh(this), ht = t, Bi = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        wd(t);
      this.deps = this.depsTail = void 0, jf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Gu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Rc(this) && this.run();
  }
  get dirty() {
    return Rc(this);
  }
}
let qh = 0, Ss, Cs;
function Kh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Cs, Cs = e;
    return;
  }
  e.next = Ss, Ss = e;
}
function yd() {
  qh++;
}
function _d() {
  if (--qh > 0)
    return;
  if (Cs) {
    let t = Cs;
    for (Cs = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; Ss; ) {
    let t = Ss;
    for (Ss = void 0; t; ) {
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
function Gh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Wh(e) {
  let t, i = e.depsTail, n = i;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === i && (i = a), wd(n), Rm(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = i;
}
function Rc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Yh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Yh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ms) || (e.globalVersion = Ms, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Rc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, i = ht, n = Bi;
  ht = e, Bi = !0;
  try {
    Gh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Mt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ht = i, Bi = n, Wh(e), e.flags &= -3;
  }
}
function wd(e, t = !1) {
  const { dep: i, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), i.subs === e && (i.subs = n, !n && i.computed)) {
    i.computed.flags &= -5;
    for (let r = i.computed.deps; r; r = r.nextDep)
      wd(r, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function Rm(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let Bi = !0;
const Zh = [];
function Dn() {
  Zh.push(Bi), Bi = !1;
}
function Fn() {
  const e = Zh.pop();
  Bi = e === void 0 ? !0 : e;
}
function jf(e) {
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
let Ms = 0;
class Lm {
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
    if (!ht || !Bi || ht === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== ht)
      i = this.activeLink = new Lm(ht, this), ht.deps ? (i.prevDep = ht.depsTail, ht.depsTail.nextDep = i, ht.depsTail = i) : ht.deps = ht.depsTail = i, Xh(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const n = i.nextDep;
      n.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = n), i.prevDep = ht.depsTail, i.nextDep = void 0, ht.depsTail.nextDep = i, ht.depsTail = i, ht.deps === i && (ht.deps = n);
    }
    return i;
  }
  trigger(t) {
    this.version++, Ms++, this.notify(t);
  }
  notify(t) {
    yd();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      _d();
    }
  }
}
function Xh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Xh(n);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const Lc = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ Symbol(
  ""
), Pc = /* @__PURE__ */ Symbol(
  ""
), Us = /* @__PURE__ */ Symbol(
  ""
);
function Yt(e, t, i) {
  if (Bi && ht) {
    let n = Lc.get(e);
    n || Lc.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(i);
    a || (n.set(i, a = new lu()), a.map = n, a.key = i), a.track();
  }
}
function En(e, t, i, n, a, r) {
  const s = Lc.get(e);
  if (!s) {
    Ms++;
    return;
  }
  const d = (c) => {
    c && c.trigger();
  };
  if (yd(), t === "clear")
    s.forEach(d);
  else {
    const c = Re(e), g = c && gd(i);
    if (c && i === "length") {
      const h = Number(n);
      s.forEach((y, m) => {
        (m === "length" || m === Us || !Vi(m) && m >= h) && d(y);
      });
    } else
      switch ((i !== void 0 || s.has(void 0)) && d(s.get(i)), g && d(s.get(Us)), t) {
        case "add":
          c ? g && d(s.get("length")) : (d(s.get(tr)), ga(e) && d(s.get(Pc)));
          break;
        case "delete":
          c || (d(s.get(tr)), ga(e) && d(s.get(Pc)));
          break;
        case "set":
          ga(e) && d(s.get(tr));
          break;
      }
  }
  _d();
}
function gr(e) {
  const t = /* @__PURE__ */ nt(e);
  return t === e ? t : (Yt(t, "iterate", Us), /* @__PURE__ */ Li(e) ? t : t.map(qi));
}
function ou(e) {
  return Yt(e = /* @__PURE__ */ nt(e), "iterate", Us), e;
}
function an(e, t) {
  return /* @__PURE__ */ Mn(e) ? Ir(/* @__PURE__ */ ir(e) ? qi(t) : t) : qi(t);
}
const Pm = {
  __proto__: null,
  [Symbol.iterator]() {
    return Wu(this, Symbol.iterator, (e) => an(this, e));
  },
  concat(...e) {
    return gr(this).concat(
      ...e.map((t) => Re(t) ? gr(t) : t)
    );
  },
  entries() {
    return Wu(this, "entries", (e) => (e[1] = an(this, e[1]), e));
  },
  every(e, t) {
    return mn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return mn(
      this,
      "filter",
      e,
      t,
      (i) => i.map((n) => an(this, n)),
      arguments
    );
  },
  find(e, t) {
    return mn(
      this,
      "find",
      e,
      t,
      (i) => an(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return mn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return mn(
      this,
      "findLast",
      e,
      t,
      (i) => an(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return mn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return mn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Yu(this, "includes", e);
  },
  indexOf(...e) {
    return Yu(this, "indexOf", e);
  },
  join(e) {
    return gr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Yu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return mn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rs(this, "pop");
  },
  push(...e) {
    return rs(this, "push", e);
  },
  reduce(e, ...t) {
    return Bf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bf(this, "reduceRight", e, t);
  },
  shift() {
    return rs(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return mn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rs(this, "splice", e);
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
    return rs(this, "unshift", e);
  },
  values() {
    return Wu(this, "values", (e) => an(this, e));
  }
};
function Wu(e, t, i) {
  const n = ou(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Li(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = i(r.value)), r;
  }), a;
}
const Dm = Array.prototype;
function mn(e, t, i, n, a, r) {
  const s = ou(e), d = s !== e && !/* @__PURE__ */ Li(e), c = s[t];
  if (c !== Dm[t]) {
    const y = c.apply(e, r);
    return d ? qi(y) : y;
  }
  let g = i;
  s !== e && (d ? g = function(y, m) {
    return i.call(this, an(e, y), m, e);
  } : i.length > 2 && (g = function(y, m) {
    return i.call(this, y, m, e);
  }));
  const h = c.call(s, g, n);
  return d && a ? a(h) : h;
}
function Bf(e, t, i, n) {
  const a = ou(e), r = a !== e && !/* @__PURE__ */ Li(e);
  let s = i, d = !1;
  a !== e && (r ? (d = n.length === 0, s = function(g, h, y) {
    return d && (d = !1, g = an(e, g)), i.call(this, g, an(e, h), y, e);
  }) : i.length > 3 && (s = function(g, h, y) {
    return i.call(this, g, h, y, e);
  }));
  const c = a[t](s, ...n);
  return d ? an(e, c) : c;
}
function Yu(e, t, i) {
  const n = /* @__PURE__ */ nt(e);
  Yt(n, "iterate", Us);
  const a = n[t](...i);
  return (a === -1 || a === !1) && /* @__PURE__ */ Cd(i[0]) ? (i[0] = /* @__PURE__ */ nt(i[0]), n[t](...i)) : a;
}
function rs(e, t, i = []) {
  Dn(), yd();
  const n = (/* @__PURE__ */ nt(e))[t].apply(e, i);
  return _d(), Fn(), n;
}
const Fm = /* @__PURE__ */ vd("__proto__,__v_isRef,__isVue"), Jh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Vi)
);
function Mm(e) {
  Vi(e) || (e = String(e));
  const t = /* @__PURE__ */ nt(this);
  return Yt(t, "has", e), t.hasOwnProperty(e);
}
class Qh {
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
      return n === (a ? r ? Wm : nv : r ? iv : tv).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = Re(t);
    if (!a) {
      let c;
      if (s && (c = Pm[i]))
        return c;
      if (i === "hasOwnProperty")
        return Mm;
    }
    const d = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Qt(t) ? t : n
    );
    if ((Vi(i) ? Jh.has(i) : Fm(i)) || (a || Yt(t, "get", i), r))
      return d;
    if (/* @__PURE__ */ Qt(d)) {
      const c = s && gd(i) ? d : d.value;
      return a && lt(c) ? /* @__PURE__ */ zs(c) : c;
    }
    return lt(d) ? a ? /* @__PURE__ */ zs(d) : /* @__PURE__ */ Ft(d) : d;
  }
}
class ev extends Qh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, n, a) {
    let r = t[i];
    const s = Re(t) && gd(i);
    if (!this._isShallow) {
      const g = /* @__PURE__ */ Mn(r);
      if (!/* @__PURE__ */ Li(n) && !/* @__PURE__ */ Mn(n) && (r = /* @__PURE__ */ nt(r), n = /* @__PURE__ */ nt(n)), !s && /* @__PURE__ */ Qt(r) && !/* @__PURE__ */ Qt(n))
        return g || (r.value = n), !0;
    }
    const d = s ? Number(i) < t.length : st(t, i), c = Reflect.set(
      t,
      i,
      n,
      /* @__PURE__ */ Qt(t) ? t : a
    );
    return t === /* @__PURE__ */ nt(a) && c && (d ? Mt(n, r) && En(t, "set", i, n) : En(t, "add", i, n)), c;
  }
  deleteProperty(t, i) {
    const n = st(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && n && En(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const n = Reflect.has(t, i);
    return (!Vi(i) || !Jh.has(i)) && Yt(t, "has", i), n;
  }
  ownKeys(t) {
    return Yt(
      t,
      "iterate",
      Re(t) ? "length" : tr
    ), Reflect.ownKeys(t);
  }
}
class Um extends Qh {
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
const zm = /* @__PURE__ */ new ev(), jm = /* @__PURE__ */ new Um(), Bm = /* @__PURE__ */ new ev(!0);
const Dc = (e) => e, Ll = (e) => Reflect.getPrototypeOf(e);
function Hm(e, t, i) {
  return function(...n) {
    const a = this.__v_raw, r = /* @__PURE__ */ nt(a), s = ga(r), d = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, g = a[e](...n), h = i ? Dc : t ? Ir : qi;
    return !t && Yt(
      r,
      "iterate",
      c ? Pc : tr
    ), Et(
      // inheriting all iterator properties
      Object.create(g),
      {
        // iterator protocol
        next() {
          const { value: y, done: m } = g.next();
          return m ? { value: y, done: m } : {
            value: d ? [h(y[0]), h(y[1])] : h(y),
            done: m
          };
        }
      }
    );
  };
}
function Pl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vm(e, t) {
  const i = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ nt(r), d = /* @__PURE__ */ nt(a);
      e || (Mt(a, d) && Yt(s, "get", a), Yt(s, "get", d));
      const { has: c } = Ll(s), g = t ? Dc : e ? Ir : qi;
      if (c.call(s, a))
        return g(r.get(a));
      if (c.call(s, d))
        return g(r.get(d));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Yt(/* @__PURE__ */ nt(a), "iterate", tr), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ nt(r), d = /* @__PURE__ */ nt(a);
      return e || (Mt(a, d) && Yt(s, "has", a), Yt(s, "has", d)), a === d ? r.has(a) : r.has(a) || r.has(d);
    },
    forEach(a, r) {
      const s = this, d = s.__v_raw, c = /* @__PURE__ */ nt(d), g = t ? Dc : e ? Ir : qi;
      return !e && Yt(c, "iterate", tr), d.forEach((h, y) => a.call(r, g(h), g(y), s));
    }
  };
  return Et(
    i,
    e ? {
      add: Pl("add"),
      set: Pl("set"),
      delete: Pl("delete"),
      clear: Pl("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ nt(this), s = Ll(r), d = /* @__PURE__ */ nt(a), c = !t && !/* @__PURE__ */ Li(a) && !/* @__PURE__ */ Mn(a) ? d : a;
        return s.has.call(r, c) || Mt(a, c) && s.has.call(r, a) || Mt(d, c) && s.has.call(r, d) || (r.add(c), En(r, "add", c, c)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Li(r) && !/* @__PURE__ */ Mn(r) && (r = /* @__PURE__ */ nt(r));
        const s = /* @__PURE__ */ nt(this), { has: d, get: c } = Ll(s);
        let g = d.call(s, a);
        g || (a = /* @__PURE__ */ nt(a), g = d.call(s, a));
        const h = c.call(s, a);
        return s.set(a, r), g ? Mt(r, h) && En(s, "set", a, r) : En(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ nt(this), { has: s, get: d } = Ll(r);
        let c = s.call(r, a);
        c || (a = /* @__PURE__ */ nt(a), c = s.call(r, a)), d && d.call(r, a);
        const g = r.delete(a);
        return c && En(r, "delete", a, void 0), g;
      },
      clear() {
        const a = /* @__PURE__ */ nt(this), r = a.size !== 0, s = a.clear();
        return r && En(
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
    i[a] = Hm(a, e, t);
  }), i;
}
function kd(e, t) {
  const i = Vm(e, t);
  return (n, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    st(i, a) && a in n ? i : n,
    a,
    r
  );
}
const qm = {
  get: /* @__PURE__ */ kd(!1, !1)
}, Km = {
  get: /* @__PURE__ */ kd(!1, !0)
}, Gm = {
  get: /* @__PURE__ */ kd(!0, !1)
};
const tv = /* @__PURE__ */ new WeakMap(), iv = /* @__PURE__ */ new WeakMap(), nv = /* @__PURE__ */ new WeakMap(), Wm = /* @__PURE__ */ new WeakMap();
function Ym(e) {
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
function Ft(e) {
  return /* @__PURE__ */ Mn(e) ? e : Sd(
    e,
    !1,
    zm,
    qm,
    tv
  );
}
// @__NO_SIDE_EFFECTS__
function Zm(e) {
  return Sd(
    e,
    !1,
    Bm,
    Km,
    iv
  );
}
// @__NO_SIDE_EFFECTS__
function zs(e) {
  return Sd(
    e,
    !0,
    jm,
    Gm,
    nv
  );
}
function Sd(e, t, i, n, a) {
  if (!lt(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Ym(ym(e));
  if (s === 0)
    return e;
  const d = new Proxy(
    e,
    s === 2 ? n : i
  );
  return a.set(e, d), d;
}
// @__NO_SIDE_EFFECTS__
function ir(e) {
  return /* @__PURE__ */ Mn(e) ? /* @__PURE__ */ ir(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Li(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Cd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ nt(t) : e;
}
function Xm(e) {
  return !st(e, "__v_skip") && Object.isExtensible(e) && zh(e, "__v_skip", !0), e;
}
const qi = (e) => lt(e) ? /* @__PURE__ */ Ft(e) : e, Ir = (e) => lt(e) ? /* @__PURE__ */ zs(e) : e;
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function G(e) {
  return rv(e, !1);
}
// @__NO_SIDE_EFFECTS__
function av(e) {
  return rv(e, !0);
}
function rv(e, t) {
  return /* @__PURE__ */ Qt(e) ? e : new Jm(e, t);
}
class Jm {
  constructor(t, i) {
    this.dep = new lu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ nt(t), this._value = i ? t : qi(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Li(t) || /* @__PURE__ */ Mn(t);
    t = n ? t : /* @__PURE__ */ nt(t), Mt(t, i) && (this._rawValue = t, this._value = n ? t : qi(t), this.dep.trigger());
  }
}
function u(e) {
  return /* @__PURE__ */ Qt(e) ? e.value : e;
}
function Nn(e) {
  return Ue(e) ? e() : u(e);
}
const Qm = {
  get: (e, t, i) => t === "__v_raw" ? e : u(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const a = e[t];
    return /* @__PURE__ */ Qt(a) && !/* @__PURE__ */ Qt(i) ? (a.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function sv(e) {
  return /* @__PURE__ */ ir(e) ? e : new Proxy(e, Qm);
}
class ey {
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
function ty(e) {
  return new ey(e);
}
class iy {
  constructor(t, i, n) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new lu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ms - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = n;
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
    return Yh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ny(e, t, i = !1) {
  let n, a;
  return Ue(e) ? n = e : (n = e.get, a = e.set), new iy(n, a, i);
}
const Dl = {}, eo = /* @__PURE__ */ new WeakMap();
let Wa;
function ay(e, t = !1, i = Wa) {
  if (i) {
    let n = eo.get(i);
    n || eo.set(i, n = []), n.push(e);
  }
}
function ry(e, t, i = tt) {
  const { immediate: n, deep: a, once: r, scheduler: s, augmentJob: d, call: c } = i, g = (N) => a ? N : /* @__PURE__ */ Li(N) || a === !1 || a === 0 ? xn(N, 1) : xn(N);
  let h, y, m, k, A = !1, C = !1;
  if (/* @__PURE__ */ Qt(e) ? (y = () => e.value, A = /* @__PURE__ */ Li(e)) : /* @__PURE__ */ ir(e) ? (y = () => g(e), A = !0) : Re(e) ? (C = !0, A = e.some((N) => /* @__PURE__ */ ir(N) || /* @__PURE__ */ Li(N)), y = () => e.map((N) => {
    if (/* @__PURE__ */ Qt(N))
      return N.value;
    if (/* @__PURE__ */ ir(N))
      return g(N);
    if (Ue(N))
      return c ? c(N, 2) : N();
  })) : Ue(e) ? t ? y = c ? () => c(e, 2) : e : y = () => {
    if (m) {
      Dn();
      try {
        m();
      } finally {
        Fn();
      }
    }
    const N = Wa;
    Wa = h;
    try {
      return c ? c(e, 3, [k]) : e(k);
    } finally {
      Wa = N;
    }
  } : y = Ri, t && a) {
    const N = y, pe = a === !0 ? 1 / 0 : a;
    y = () => xn(N(), pe);
  }
  const $ = Im(), R = () => {
    h.stop(), $ && $.active && bd($.effects, h);
  };
  if (r && t) {
    const N = t;
    t = (...pe) => {
      const Q = N(...pe);
      return R(), Q;
    };
  }
  let L = C ? new Array(e.length).fill(Dl) : Dl;
  const P = (N) => {
    if (!(!(h.flags & 1) || !h.dirty && !N))
      if (t) {
        const pe = h.run();
        if (N || a || A || (C ? pe.some((Q, E) => Mt(Q, L[E])) : Mt(pe, L))) {
          m && m();
          const Q = Wa;
          Wa = h;
          try {
            const E = [
              pe,
              // pass undefined as the old value when it's changed for the first time
              L === Dl ? void 0 : C && L[0] === Dl ? [] : L,
              k
            ];
            L = pe, c ? c(t, 3, E) : (
              // @ts-expect-error
              t(...E)
            );
          } finally {
            Wa = Q;
          }
        }
      } else
        h.run();
  };
  return d && d(P), h = new Vh(y), h.scheduler = s ? () => s(P, !1) : P, k = (N) => ay(N, !1, h), m = h.onStop = () => {
    const N = eo.get(h);
    if (N) {
      if (c)
        c(N, 4);
      else
        for (const pe of N) pe();
      eo.delete(h);
    }
  }, t ? n ? P(!0) : L = h.run() : s ? s(P.bind(null, !0), !0) : h.run(), R.pause = h.pause.bind(h), R.resume = h.resume.bind(h), R.stop = R, R;
}
function xn(e, t = 1 / 0, i) {
  if (t <= 0 || !lt(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ Qt(e))
    xn(e.value, t, i);
  else if (Re(e))
    for (let n = 0; n < e.length; n++)
      xn(e[n], t, i);
  else if (Ln(e) || ga(e))
    e.forEach((n) => {
      xn(n, t, i);
    });
  else if (Uh(e)) {
    for (const n in e)
      xn(e[n], t, i);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && xn(e[n], t, i);
  }
  return e;
}
function rl(e, t, i, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    uu(a, t, i);
  }
}
function Pi(e, t, i, n) {
  if (Ue(e)) {
    const a = rl(e, t, i, n);
    return a && Fh(a) && a.catch((r) => {
      uu(r, t, i);
    }), a;
  }
  if (Re(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Pi(e[r], t, i, n));
    return a;
  }
}
function uu(e, t, i, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || tt;
  if (t) {
    let d = t.parent;
    const c = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; d; ) {
      const h = d.ec;
      if (h) {
        for (let y = 0; y < h.length; y++)
          if (h[y](e, c, g) === !1)
            return;
      }
      d = d.parent;
    }
    if (r) {
      Dn(), rl(r, null, 10, [
        e,
        c,
        g
      ]), Fn();
      return;
    }
  }
  sy(e, i, a, n, s);
}
function sy(e, t, i, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ui = [];
let en = -1;
const Ar = [];
let pa = null, kr = 0;
const lv = /* @__PURE__ */ Promise.resolve();
let to = null;
function Nt(e) {
  const t = to || lv;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ly(e) {
  let t = en + 1, i = ui.length;
  for (; t < i; ) {
    const n = t + i >>> 1, a = ui[n], r = js(a);
    r < e || r === e && a.flags & 2 ? t = n + 1 : i = n;
  }
  return t;
}
function Td(e) {
  if (!(e.flags & 1)) {
    const t = js(e), i = ui[ui.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= js(i) ? ui.push(e) : ui.splice(ly(t), 0, e), e.flags |= 1, ov();
  }
}
function ov() {
  to || (to = lv.then(dv));
}
function uv(e) {
  if (!Re(e))
    pa && e.id === -1 ? pa.splice(kr + 1, 0, e) : e.flags & 1 || (Ar.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ar.push(e[t]);
  ov();
}
function Hf(e, t, i = en + 1) {
  for (; i < ui.length; i++) {
    const n = ui[i];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ui.splice(i, 1), i--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function cv(e) {
  if (Ar.length) {
    const t = [...new Set(Ar)].sort(
      (i, n) => js(i) - js(n)
    );
    if (Ar.length = 0, pa) {
      for (let i = 0; i < t.length; i++)
        pa.push(t[i]);
      return;
    }
    for (pa = t, kr = 0; kr < pa.length; kr++) {
      const i = pa[kr];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    pa = null, kr = 0;
  }
}
const js = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function dv(e) {
  try {
    for (en = 0; en < ui.length; en++) {
      const t = ui[en];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), rl(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; en < ui.length; en++) {
      const t = ui[en];
      t && (t.flags &= -2);
    }
    en = -1, ui.length = 0, cv(), to = null, (ui.length || Ar.length) && dv();
  }
}
let zt = null, cu = null;
function io(e) {
  const t = zt;
  return zt = e, cu = e && e.type.__scopeId || null, t;
}
function oy(e) {
  cu = e;
}
function uy() {
  cu = null;
}
const cy = (e) => we;
function we(e, t = zt, i) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && lo(-1);
    const r = io(t), s = In.length;
    let d;
    try {
      d = e(...a);
    } finally {
      for (let c = In.length; c > s; c--) Rd();
      io(r), n._d && lo(1);
    }
    return d;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function me(e, t) {
  if (zt === null)
    return e;
  const i = bu(zt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, d, c = tt] = t[a];
    r && (Ue(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && xn(s), n.push({
      dir: r,
      instance: i,
      value: s,
      oldValue: void 0,
      arg: d,
      modifiers: c
    }));
  }
  return e;
}
function Ba(e, t, i, n) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const d = a[s];
    r && (d.oldValue = r[s].value);
    let c = d.dir[n];
    c && (Dn(), Pi(c, i, 8, [
      e.el,
      d,
      e,
      t
    ]), Fn());
  }
}
function Oi(e, t) {
  if (Xt) {
    let i = Xt.provides;
    const n = Xt.parent && Xt.parent.provides;
    n === i && (i = Xt.provides = Object.create(n)), i[e] = t;
  }
}
function Zt(e, t, i = !1) {
  const n = Sa();
  if (n || xr) {
    let a = xr ? xr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && Ue(t) ? t.call(n && n.proxy) : t;
  }
}
const dy = /* @__PURE__ */ Symbol.for("v-scx"), fy = () => Zt(dy);
function py(e, t) {
  return du(e, null, t);
}
function hy(e, t) {
  return du(
    e,
    null,
    { flush: "sync" }
  );
}
function qe(e, t, i) {
  return du(e, t, i);
}
function du(e, t, i = tt) {
  const { immediate: n, deep: a, flush: r, once: s } = i, d = Et({}, i), c = t && n || !t && r !== "post";
  let g;
  if (Gs) {
    if (r === "sync") {
      const k = fy();
      g = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!c) {
      const k = () => {
      };
      return k.stop = Ri, k.resume = Ri, k.pause = Ri, k;
    }
  }
  const h = Xt;
  d.call = (k, A, C) => Pi(k, h, A, C);
  let y = !1;
  r === "post" ? d.scheduler = (k) => {
    oi(k, h && h.suspense);
  } : r !== "sync" && (y = !0, d.scheduler = (k, A) => {
    A ? k() : Td(k);
  }), d.augmentJob = (k) => {
    t && (k.flags |= 4), y && (k.flags |= 2, h && (k.id = h.uid, k.i = h));
  };
  const m = ry(e, t, d);
  return Gs && (g ? g.push(m) : c && m()), m;
}
function vy(e, t, i) {
  const n = this.proxy, a = vt(e) ? e.includes(".") ? fv(n, e) : () => n[e] : e.bind(n, n);
  let r;
  Ue(t) ? r = t : (r = t.handler, i = t);
  const s = ol(this), d = du(a, r.bind(n), i);
  return s(), d;
}
function fv(e, t) {
  const i = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < i.length && n; a++)
      n = n[i[a]];
    return n;
  };
}
const ca = /* @__PURE__ */ new WeakMap(), pv = /* @__PURE__ */ Symbol("_vte"), fu = (e) => e.__isTeleport, Za = (e) => e && (e.disabled || e.disabled === ""), by = (e) => e && (e.defer || e.defer === ""), Vf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, qf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Fc = (e, t) => {
  const i = e && e.to;
  return vt(i) ? t ? t(i) : null : i;
}, gy = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, n, a, r, s, d, c, g) {
    const {
      mc: h,
      pc: y,
      pbc: m,
      o: { insert: k, querySelector: A, createText: C, createComment: $, parentNode: R }
    } = g, L = Za(t.props);
    let { dynamicChildren: P } = t;
    const N = (E, H, K) => {
      E.shapeFlag & 16 && h(
        E.children,
        H,
        K,
        a,
        r,
        s,
        d,
        c
      );
    }, pe = (E = t) => {
      const H = Za(E.props), K = E.target = Fc(E.props, A), Z = Mc(K, E, C, k);
      K && (s !== "svg" && Vf(K) ? s = "svg" : s !== "mathml" && qf(K) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(K), H || (N(E, K, Z), bs(E, !1)));
    }, Q = (E) => {
      const H = () => {
        if (ca.get(E) === H) {
          if (ca.delete(E), Za(E.props)) {
            const K = R(E.el) || i;
            N(E, K, E.anchor), bs(E, !0);
          }
          pe(E);
        }
      };
      ca.set(E, H), oi(H, r);
    };
    if (e == null) {
      const E = t.el = C(""), H = t.anchor = C("");
      if (k(E, i, n), k(H, i, n), by(t.props) || r && r.pendingBranch) {
        Q(t);
        return;
      }
      L && (N(t, i, H), bs(t, !0)), pe();
    } else {
      t.el = e.el;
      const E = t.anchor = e.anchor, H = ca.get(e);
      if (H) {
        H.flags |= 8, ca.delete(e), Q(t);
        return;
      }
      t.targetStart = e.targetStart;
      const K = t.target = e.target, Z = t.targetAnchor = e.targetAnchor, ne = Za(e.props), z = ne ? i : K, q = ne ? E : Z;
      if (s === "svg" || Vf(K) ? s = "svg" : (s === "mathml" || qf(K)) && (s = "mathml"), P ? (m(
        e.dynamicChildren,
        P,
        z,
        a,
        r,
        s,
        d
      ), Id(e, t, !0)) : c || y(
        e,
        t,
        z,
        q,
        a,
        r,
        s,
        d,
        !1
      ), L)
        ne ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Fl(
          t,
          i,
          E,
          g,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const I = Fc(t.props, A);
        I && (t.target = I, Fl(
          t,
          I,
          null,
          g,
          0
        ));
      } else ne && Fl(
        t,
        K,
        Z,
        g,
        1
      );
      bs(t, L);
    }
  },
  remove(e, t, i, { um: n, o: { remove: a } }, r) {
    const {
      shapeFlag: s,
      children: d,
      anchor: c,
      targetStart: g,
      targetAnchor: h,
      target: y,
      props: m
    } = e, k = Za(m), A = r || !k, C = ca.get(e);
    if (C && (C.flags |= 8, ca.delete(e)), y && (a(g), a(h)), r && a(c), !C && (k || y) && s & 16)
      for (let $ = 0; $ < d.length; $++) {
        const R = d[$];
        n(
          R,
          t,
          i,
          A,
          !!R.dynamicChildren
        );
      }
  },
  move: Fl,
  hydrate: my
};
function Fl(e, t, i, { o: { insert: n }, m: a }, r = 2) {
  r === 0 && n(e.targetAnchor, t, i);
  const { el: s, anchor: d, shapeFlag: c, children: g, props: h } = e, y = r === 2;
  if (y && n(s, t, i), !ca.has(e) && (!y || Za(h)) && c & 16)
    for (let m = 0; m < g.length; m++)
      a(
        g[m],
        t,
        i,
        2
      );
  y && n(d, t, i);
}
function my(e, t, i, n, a, r, {
  o: { nextSibling: s, parentNode: d, querySelector: c, insert: g, createText: h }
}, y) {
  function m($, R) {
    let L = R;
    for (; L; ) {
      if (L && L.nodeType === 8) {
        if (L.data === "teleport start anchor")
          t.targetStart = L;
        else if (L.data === "teleport anchor") {
          t.targetAnchor = L, $._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      L = s(L);
    }
  }
  function k($, R) {
    R.anchor = y(
      s($),
      R,
      d($),
      i,
      n,
      a,
      r
    );
  }
  const A = t.target = Fc(
    t.props,
    c
  ), C = Za(t.props);
  if (A) {
    const $ = A._lpa || A.firstChild;
    t.shapeFlag & 16 && (C ? (k(e, t), m(A, $), t.targetAnchor || Mc(
      A,
      t,
      h,
      g,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      d(e) === A ? e : null
    )) : (t.anchor = s(e), m(A, $), t.targetAnchor || Mc(A, t, h, g), y(
      $ && s($),
      t,
      A,
      i,
      n,
      a,
      r
    ))), bs(t, C);
  } else C && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Ad = gy;
function bs(e, t) {
  const i = e.ctx;
  if (i && i.ut) {
    let n, a;
    for (t ? (n = e.el, a = e.anchor) : (n = e.targetStart, a = e.targetAnchor); n && n !== a; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", i.uid), n = n.nextSibling;
    i.ut();
  }
}
function Mc(e, t, i, n, a = null) {
  const r = t.targetStart = i(""), s = t.targetAnchor = i("");
  return r[pv] = s, e && (n(r, e, a), n(s, e, a)), s;
}
const Ni = /* @__PURE__ */ Symbol("_leaveCb"), ss = /* @__PURE__ */ Symbol("_enterCb");
function yy() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return $t(() => {
    e.isMounted = !0;
  }), ki(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ti = [Function, Array], hv = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ti,
  onEnter: Ti,
  onAfterEnter: Ti,
  onEnterCancelled: Ti,
  // leave
  onBeforeLeave: Ti,
  onLeave: Ti,
  onAfterLeave: Ti,
  onLeaveCancelled: Ti,
  // appear
  onBeforeAppear: Ti,
  onAppear: Ti,
  onAfterAppear: Ti,
  onAppearCancelled: Ti
}, vv = (e) => {
  const t = e.subTree;
  return t.component ? vv(t.component) : t;
}, _y = {
  name: "BaseTransition",
  props: hv,
  setup(e, { slots: t }) {
    const i = Sa(), n = yy();
    return () => {
      const a = t.default && mv(t.default(), !0), r = a && a.length ? bv(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? x() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ nt(e), { mode: d } = s;
      if (n.isLeaving)
        return Zu(r);
      const c = no(r);
      if (!c)
        return Zu(r);
      let g = Uc(
        c,
        s,
        n,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (y) => g = y
      );
      c.type !== Ut && Bs(c, g);
      let h = i.subTree && no(i.subTree);
      if (h && h.type !== Ut && !Xa(h, c) && vv(i).type !== Ut) {
        let y = Uc(
          h,
          s,
          n,
          i
        );
        if (Bs(h, y), d === "out-in" && c.type !== Ut)
          return n.isLeaving = !0, y.afterLeave = () => {
            n.isLeaving = !1, i.job.flags & 8 || i.update(), delete y.afterLeave, h = void 0;
          }, Zu(r);
        d === "in-out" && c.type !== Ut ? y.delayLeave = (m, k, A) => {
          const C = gv(
            n,
            h
          );
          C[String(h.key)] = h, m[Ni] = () => {
            k(), m[Ni] = void 0, delete g.delayedLeave, h = void 0;
          }, g.delayedLeave = () => {
            A(), delete g.delayedLeave, h = void 0;
          };
        } : h = void 0;
      } else h && (h = void 0);
      return r;
    };
  }
};
function bv(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const i of e)
      if (i.type !== Ut) {
        t = i;
        break;
      }
  }
  return t;
}
const wy = _y;
function gv(e, t) {
  const { leavingVNodes: i } = e;
  let n = i.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), i.set(t.type, n)), n;
}
function Uc(e, t, i, n, a) {
  const {
    appear: r,
    mode: s,
    persisted: d = !1,
    onBeforeEnter: c,
    onEnter: g,
    onAfterEnter: h,
    onEnterCancelled: y,
    onBeforeLeave: m,
    onLeave: k,
    onAfterLeave: A,
    onLeaveCancelled: C,
    onBeforeAppear: $,
    onAppear: R,
    onAfterAppear: L,
    onAppearCancelled: P
  } = t, N = String(e.key), pe = gv(i, e), Q = (K, Z) => {
    K && Pi(
      K,
      n,
      9,
      Z
    );
  }, E = (K, Z) => {
    const ne = Z[1];
    Q(K, Z), Re(K) ? K.every((z) => z.length <= 1) && ne() : K.length <= 1 && ne();
  }, H = {
    mode: s,
    persisted: d,
    beforeEnter(K) {
      let Z = c;
      if (!i.isMounted)
        if (r)
          Z = $ || c;
        else
          return;
      K[Ni] && K[Ni](
        !0
        /* cancelled */
      );
      const ne = pe[N];
      ne && Xa(e, ne) && ne.el[Ni] && ne.el[Ni](), Q(Z, [K]);
    },
    enter(K) {
      if (pe[N] === e) return;
      let Z = g, ne = h, z = y;
      if (!i.isMounted)
        if (r)
          Z = R || g, ne = L || h, z = P || y;
        else
          return;
      let q = !1;
      K[ss] = (V) => {
        q || (q = !0, V ? Q(z, [K]) : Q(ne, [K]), H.delayedLeave && H.delayedLeave(), K[ss] = void 0);
      };
      const I = K[ss].bind(null, !1);
      Z ? E(Z, [K, I]) : I();
    },
    leave(K, Z) {
      const ne = String(e.key);
      if (K[ss] && K[ss](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return Z();
      Q(m, [K]);
      let z = !1;
      K[Ni] = (I) => {
        z || (z = !0, Z(), I ? Q(C, [K]) : Q(A, [K]), K[Ni] = void 0, pe[ne] === e && delete pe[ne]);
      };
      const q = K[Ni].bind(null, !1);
      pe[ne] = e, k ? E(k, [K, q]) : q();
    },
    clone(K) {
      const Z = Uc(
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
function Zu(e) {
  if (pu(e))
    return e = wa(e), e.children = null, e;
}
function no(e) {
  if (!pu(e))
    return fu(e.type) && e.children ? bv(e.children) : e;
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
function Bs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const i = e.component.subTree;
    Bs(
      fu(i.type) && no(i) || i,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function mv(e, t = !1, i) {
  let n = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const d = i == null ? s.key : String(i) + String(s.key != null ? s.key : r);
    s.type === W ? (s.patchFlag & 128 && a++, n = n.concat(
      mv(s.children, t, d)
    )) : (t || s.type !== Ut) && n.push(d != null ? wa(s, { key: d }) : s);
  }
  if (a > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Bt(e, t) {
  return Ue(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Et({ name: e.name }, t, { setup: e })
  ) : e;
}
function ky() {
  const e = Sa();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function yv(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Sy(e) {
  const t = Sa(), i = /* @__PURE__ */ av(null);
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
const ao = /* @__PURE__ */ new WeakMap();
function Ts(e, t, i, n, a = !1) {
  if (Re(e)) {
    e.forEach(
      (C, $) => Ts(
        C,
        t && (Re(t) ? t[$] : t),
        i,
        n,
        a
      )
    );
    return;
  }
  if (Er(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ts(e, t, i, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? bu(n.component) : n.el, s = a ? null : r, { i: d, r: c } = e, g = t && t.r, h = d.refs === tt ? d.refs = {} : d.refs, y = d.setupState, m = /* @__PURE__ */ nt(y), k = y === tt ? Dh : (C) => Kf(h, C) ? !1 : st(m, C), A = (C, $) => !($ && Kf(h, $));
  if (g != null && g !== c) {
    if (Gf(t), vt(g))
      h[g] = null, k(g) && (y[g] = null);
    else if (/* @__PURE__ */ Qt(g)) {
      const C = t;
      A(g, C.k) && (g.value = null), C.k && (h[C.k] = null);
    }
  }
  if (Ue(c))
    rl(c, d, 12, [s, h]);
  else {
    const C = vt(c), $ = /* @__PURE__ */ Qt(c);
    if (C || $) {
      const R = () => {
        if (e.f) {
          const L = C ? k(c) ? y[c] : h[c] : A() || !e.k ? c.value : h[e.k];
          if (a)
            Re(L) && bd(L, r);
          else if (Re(L))
            L.includes(r) || L.push(r);
          else if (C)
            h[c] = [r], k(c) && (y[c] = h[c]);
          else {
            const P = [r];
            A(c, e.k) && (c.value = P), e.k && (h[e.k] = P);
          }
        } else C ? (h[c] = s, k(c) && (y[c] = s)) : $ && (A(c, e.k) && (c.value = s), e.k && (h[e.k] = s));
      };
      if (s) {
        const L = () => {
          R(), ao.delete(e);
        };
        L.id = -1, ao.set(e, L), oi(L, i);
      } else
        Gf(e), R();
    }
  }
}
function Gf(e) {
  const t = ao.get(e);
  t && (t.flags |= 8, ao.delete(e));
}
su().requestIdleCallback;
su().cancelIdleCallback;
const Er = (e) => !!e.type.__asyncLoader, pu = (e) => e.type.__isKeepAlive;
function Cy(e, t) {
  _v(e, "a", t);
}
function Ty(e, t) {
  _v(e, "da", t);
}
function _v(e, t, i = Xt) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (hu(t, n, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      pu(a.parent.vnode) && Ay(n, t, i, a), a = a.parent;
  }
}
function Ay(e, t, i, n) {
  const a = hu(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  sl(() => {
    bd(n[t], a);
  }, i);
}
function hu(e, t, i = Xt, n = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...s) => {
      Dn();
      const d = ol(i), c = Pi(t, i, e, s);
      return d(), Fn(), c;
    });
    return n ? a.unshift(r) : a.push(r), r;
  }
}
const jn = (e) => (t, i = Xt) => {
  (!Gs || e === "sp") && hu(e, (...n) => t(...n), i);
}, wv = jn("bm"), $t = jn("m"), kv = jn(
  "bu"
), Ey = jn("u"), ki = jn(
  "bum"
), sl = jn("um"), xy = jn(
  "sp"
), $y = jn("rtg"), Oy = jn("rtc");
function Ny(e, t = Xt) {
  hu("ec", e, t);
}
const Ed = "components", Iy = "directives";
function Ye(e, t) {
  return $d(Ed, e, !0, t) || e;
}
const Sv = /* @__PURE__ */ Symbol.for("v-ndc");
function xd(e) {
  return vt(e) ? $d(Ed, e, !1) || e : e || Sv;
}
function Wf(e) {
  return $d(Iy, e);
}
function $d(e, t, i = !0, n = !1) {
  const a = zt || Xt;
  if (a) {
    const r = a.type;
    if (e === Ed) {
      const d = h1(
        r,
        !1
      );
      if (d && (d === t || d === Jt(t) || d === au(Jt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Yf(a[e] || r[e], t) || // global registration
      Yf(a.appContext[e], t)
    );
    return !s && n ? r : s;
  }
}
function Yf(e, t) {
  return e && (e[t] || e[Jt(t)] || e[au(Jt(t))]);
}
function he(e, t, i, n) {
  let a;
  const r = i, s = Re(e);
  if (s || vt(e)) {
    const d = s && /* @__PURE__ */ ir(e);
    let c = !1, g = !1;
    d && (c = !/* @__PURE__ */ Li(e), g = /* @__PURE__ */ Mn(e), e = ou(e)), a = new Array(e.length);
    for (let h = 0, y = e.length; h < y; h++)
      a[h] = t(
        c ? g ? Ir(qi(e[h])) : qi(e[h]) : e[h],
        h,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, r);
  } else if (lt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, c) => t(d, c, void 0, r)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let c = 0, g = d.length; c < g; c++) {
        const h = d[c];
        a[c] = t(e[h], h, c, r);
      }
    }
  else
    a = [];
  return a;
}
function Be(e, t, i, n, a, r) {
  if (i == null && (i = {}), zt.ce || zt.parent && Er(zt.parent) && zt.parent.ce) {
    const g = i, h = Object.keys(g).length > 0;
    return t !== "default" && (g.name = t), p(), Pe(
      W,
      null,
      [ve("slot", g, n && n())],
      h ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const d = In.length;
  p();
  let c;
  try {
    const g = s && Cv(s(i)), h = i.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    g && g.key;
    c = Pe(
      W,
      {
        key: (h && !Vi(h) ? h : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!g && n ? "_fb" : "")
      },
      g || (n ? n() : []),
      g && e._ === 1 ? 64 : -2
    );
  } catch (g) {
    for (let h = In.length; h > d; h--) Rd();
    throw g;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), c;
}
function Cv(e) {
  return e.some((t) => Vs(t) ? !(t.type === Ut || t.type === W && !Cv(t.children)) : !0) ? e : null;
}
const zc = (e) => e ? Kv(e) ? bu(e) : zc(e.parent) : null, As = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Et(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zc(e.parent),
    $root: (e) => zc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ev(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Td(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Nt.bind(e.proxy)),
    $watch: (e) => vy.bind(e)
  })
), Xu = (e, t) => e !== tt && !e.__isScriptSetup && st(e, t), Ry = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: n, data: a, props: r, accessCache: s, type: d, appContext: c } = e;
    if (t[0] !== "$") {
      const m = s[t];
      if (m !== void 0)
        switch (m) {
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
        if (Xu(n, t))
          return s[t] = 1, n[t];
        if (a !== tt && st(a, t))
          return s[t] = 2, a[t];
        if (st(r, t))
          return s[t] = 3, r[t];
        if (i !== tt && st(i, t))
          return s[t] = 4, i[t];
        jc && (s[t] = 0);
      }
    }
    const g = As[t];
    let h, y;
    if (g)
      return t === "$attrs" && Yt(e.attrs, "get", ""), g(e);
    if (
      // css module (injected by vue-loader)
      (h = d.__cssModules) && (h = h[t])
    )
      return h;
    if (i !== tt && st(i, t))
      return s[t] = 4, i[t];
    if (
      // global properties
      y = c.config.globalProperties, st(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, i) {
    const { data: n, setupState: a, ctx: r } = e;
    return Xu(a, t) ? (a[t] = i, !0) : n !== tt && st(n, t) ? (n[t] = i, !0) : st(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: n, appContext: a, props: r, type: s }
  }, d) {
    let c;
    return !!(i[d] || e !== tt && d[0] !== "$" && st(e, d) || Xu(t, d) || st(r, d) || st(n, d) || st(As, d) || st(a.config.globalProperties, d) || (c = s.__cssModules) && c[d]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : st(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function Ly() {
  return Tv().slots;
}
function Py() {
  return Tv().attrs;
}
function Tv(e) {
  const t = Sa();
  return t.setupContext || (t.setupContext = Wv(t));
}
function ro(e) {
  return Re(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function Dy(e, t) {
  return !e || !t ? e || t : Re(e) && Re(t) ? e.concat(t) : Et({}, ro(e), ro(t));
}
let jc = !0;
function Fy(e) {
  const t = Ev(e), i = e.proxy, n = e.ctx;
  jc = !1, t.beforeCreate && Zf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: s,
    watch: d,
    provide: c,
    inject: g,
    // lifecycle
    created: h,
    beforeMount: y,
    mounted: m,
    beforeUpdate: k,
    updated: A,
    activated: C,
    deactivated: $,
    beforeDestroy: R,
    beforeUnmount: L,
    destroyed: P,
    unmounted: N,
    render: pe,
    renderTracked: Q,
    renderTriggered: E,
    errorCaptured: H,
    serverPrefetch: K,
    // public API
    expose: Z,
    inheritAttrs: ne,
    // assets
    components: z,
    directives: q,
    filters: I
  } = t;
  if (g && My(g, n, null), s)
    for (const ie in s) {
      const Y = s[ie];
      Ue(Y) && (n[ie] = Y.bind(i));
    }
  if (a) {
    const ie = a.call(i, i);
    lt(ie) && (e.data = /* @__PURE__ */ Ft(ie));
  }
  if (jc = !0, r)
    for (const ie in r) {
      const Y = r[ie], fe = Ue(Y) ? Y.bind(i, i) : Ue(Y.get) ? Y.get.bind(i, i) : Ri, ke = !Ue(Y) && Ue(Y.set) ? Y.set.bind(i) : Ri, Le = j({
        get: fe,
        set: ke
      });
      Object.defineProperty(n, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Oe) => Le.value = Oe
      });
    }
  if (d)
    for (const ie in d)
      Av(d[ie], n, i, ie);
  if (c) {
    const ie = Ue(c) ? c.call(i) : c;
    Reflect.ownKeys(ie).forEach((Y) => {
      Oi(Y, ie[Y]);
    });
  }
  h && Zf(h, e, "c");
  function J(ie, Y) {
    Re(Y) ? Y.forEach((fe) => ie(fe.bind(i))) : Y && ie(Y.bind(i));
  }
  if (J(wv, y), J($t, m), J(kv, k), J(Ey, A), J(Cy, C), J(Ty, $), J(Ny, H), J(Oy, Q), J($y, E), J(ki, L), J(sl, N), J(xy, K), Re(Z))
    if (Z.length) {
      const ie = e.exposed || (e.exposed = {});
      Z.forEach((Y) => {
        Object.defineProperty(ie, Y, {
          get: () => i[Y],
          set: (fe) => i[Y] = fe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  pe && e.render === Ri && (e.render = pe), ne != null && (e.inheritAttrs = ne), z && (e.components = z), q && (e.directives = q), K && yv(e);
}
function My(e, t, i = Ri) {
  Re(e) && (e = Bc(e));
  for (const n in e) {
    const a = e[n];
    let r;
    lt(a) ? "default" in a ? r = Zt(
      a.from || n,
      a.default,
      !0
    ) : r = Zt(a.from || n) : r = Zt(a), /* @__PURE__ */ Qt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[n] = r;
  }
}
function Zf(e, t, i) {
  Pi(
    Re(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function Av(e, t, i, n) {
  let a = n.includes(".") ? fv(i, n) : () => i[n];
  if (vt(e)) {
    const r = t[e];
    Ue(r) && qe(a, r);
  } else if (Ue(e))
    qe(a, e.bind(i));
  else if (lt(e))
    if (Re(e))
      e.forEach((r) => Av(r, t, i, n));
    else {
      const r = Ue(e.handler) ? e.handler.bind(i) : t[e.handler];
      Ue(r) && qe(a, r, e);
    }
}
function Ev(e) {
  const t = e.type, { mixins: i, extends: n } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, d = r.get(t);
  let c;
  return d ? c = d : !a.length && !i && !n ? c = t : (c = {}, a.length && a.forEach(
    (g) => so(c, g, s, !0)
  ), so(c, t, s)), lt(t) && r.set(t, c), c;
}
function so(e, t, i, n = !1) {
  const { mixins: a, extends: r } = t;
  r && so(e, r, i, !0), a && a.forEach(
    (s) => so(e, s, i, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const d = Uy[s] || i && i[s];
      e[s] = d ? d(e[s], t[s]) : t[s];
    }
  return e;
}
const Uy = {
  data: Xf,
  props: Jf,
  emits: Jf,
  // objects
  methods: gs,
  computed: gs,
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
  components: gs,
  directives: gs,
  // watch
  watch: jy,
  // provide / inject
  provide: Xf,
  inject: zy
};
function Xf(e, t) {
  return t ? e ? function() {
    return Et(
      Ue(e) ? e.call(this, this) : e,
      Ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function zy(e, t) {
  return gs(Bc(e), Bc(t));
}
function Bc(e) {
  if (Re(e)) {
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
function gs(e, t) {
  return e ? Et(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Jf(e, t) {
  return e ? Re(e) && Re(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Et(
    /* @__PURE__ */ Object.create(null),
    ro(e),
    ro(t ?? {})
  ) : t;
}
function jy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = Et(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = li(e[n], t[n]);
  return i;
}
function xv() {
  return {
    app: null,
    config: {
      isNativeTag: Dh,
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
let By = 0;
function Hy(e, t) {
  return function(n, a = null) {
    Ue(n) || (n = Et({}, n)), a != null && !lt(a) && (a = null);
    const r = xv(), s = /* @__PURE__ */ new WeakSet(), d = [];
    let c = !1;
    const g = r.app = {
      _uid: By++,
      _component: n,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: b1,
      get config() {
        return r.config;
      },
      set config(h) {
      },
      use(h, ...y) {
        return s.has(h) || (h && Ue(h.install) ? (s.add(h), h.install(g, ...y)) : Ue(h) && (s.add(h), h(g, ...y))), g;
      },
      mixin(h) {
        return r.mixins.includes(h) || r.mixins.push(h), g;
      },
      component(h, y) {
        return y ? (r.components[h] = y, g) : r.components[h];
      },
      directive(h, y) {
        return y ? (r.directives[h] = y, g) : r.directives[h];
      },
      mount(h, y, m) {
        if (!c) {
          const k = g._ceVNode || ve(n, a);
          return k.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(k, h, m), c = !0, g._container = h, h.__vue_app__ = g, bu(k.component);
        }
      },
      onUnmount(h) {
        d.push(h);
      },
      unmount() {
        c && (Pi(
          d,
          g._instance,
          16
        ), e(null, g._container), delete g._container.__vue_app__);
      },
      provide(h, y) {
        return r.provides[h] = y, g;
      },
      runWithContext(h) {
        const y = xr;
        xr = g;
        try {
          return h();
        } finally {
          xr = y;
        }
      }
    };
    return g;
  };
}
let xr = null;
function $v(e, t, i = tt) {
  const n = Sa(), a = Jt(t), r = zn(t), s = Ov(e, a), d = ty((c, g) => {
    let h, y = tt, m;
    return hy(() => {
      const k = e[a];
      Mt(h, k) && (h = k, g());
    }), {
      get() {
        return c(), i.get ? i.get(h) : h;
      },
      set(k) {
        const A = i.set ? i.set(k) : k;
        if (!Mt(A, h) && !(y !== tt && Mt(k, y)))
          return;
        const C = n.vnode.props, $ = !!(C && // check if parent has passed v-model
        (t in C || a in C || r in C) && (`onUpdate:${t}` in C || `onUpdate:${a}` in C || `onUpdate:${r}` in C));
        $ || (h = k, g()), n.emit(`update:${t}`, A), Mt(k, y) && (Mt(k, A) && !Mt(A, m) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        $ && y !== tt && !Mt(A, h)) && g(), y = k, m = A;
      }
    };
  });
  return d[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? s || tt : d, done: !1 } : { done: !0 };
      }
    };
  }, d;
}
const Ov = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Jt(t)}Modifiers`] || e[`${zn(t)}Modifiers`];
function Vy(e, t, ...i) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || tt;
  let a = i;
  const r = t.startsWith("update:"), s = r && Ov(n, t.slice(7));
  s && (s.trim && (a = i.map((h) => vt(h) ? h.trim() : h)), s.number && (a = a.map(ru)));
  let d, c = n[d = qu(t)] || // also try camelCase event handler (#2249)
  n[d = qu(Jt(t))];
  !c && r && (c = n[d = qu(zn(t))]), c && Pi(
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
    e.emitted[d] = !0, Pi(
      g,
      e,
      6,
      a
    );
  }
}
const qy = /* @__PURE__ */ new WeakMap();
function Nv(e, t, i = !1) {
  const n = i ? qy : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, d = !1;
  if (!Ue(e)) {
    const c = (g) => {
      const h = Nv(g, t, !0);
      h && (d = !0, Et(s, h));
    };
    !i && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !d ? (lt(e) && n.set(e, null), null) : (Re(r) ? r.forEach((c) => s[c] = null) : Et(s, r), lt(e) && n.set(e, s), s);
}
function vu(e, t) {
  return !e || !tu(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), st(e, t[0].toLowerCase() + t.slice(1)) || st(e, zn(t)) || st(e, t));
}
function Qf(e) {
  const {
    type: t,
    vnode: i,
    proxy: n,
    withProxy: a,
    propsOptions: [r],
    slots: s,
    attrs: d,
    emit: c,
    render: g,
    renderCache: h,
    props: y,
    data: m,
    setupState: k,
    ctx: A,
    inheritAttrs: C
  } = e, $ = io(e);
  let R, L;
  try {
    if (i.shapeFlag & 4) {
      const N = a || n, pe = N;
      R = rn(
        g.call(
          pe,
          N,
          h,
          y,
          k,
          m,
          A
        )
      ), L = d;
    } else {
      const N = t;
      R = rn(
        N.length > 1 ? N(
          y,
          { attrs: d, slots: s, emit: c }
        ) : N(
          y,
          null
        )
      ), L = t.props ? d : Ky(d);
    }
  } catch (N) {
    In.length = 0, uu(N, e, 1), R = ve(Ut);
  }
  let P = R;
  if (L && C !== !1) {
    const N = Object.keys(L), { shapeFlag: pe } = P;
    N.length && pe & 7 && (r && N.some(iu) && (L = Gy(
      L,
      r
    )), P = wa(P, L, !1, !0));
  }
  if (i.dirs && (P = wa(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const N = fu(P.type) && no(P) || P;
    Bs(N, i.transition);
  }
  return R = P, io($), R;
}
const Ky = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || tu(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, Gy = (e, t) => {
  const i = {};
  for (const n in e)
    (!iu(n) || !(n.slice(9) in t)) && (i[n] = e[n]);
  return i;
};
function Wy(e, t, i) {
  const { props: n, children: a, component: r } = e, { props: s, children: d, patchFlag: c } = t, g = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? ep(n, s, g) : !!s;
    if (c & 8) {
      const h = t.dynamicProps;
      for (let y = 0; y < h.length; y++) {
        const m = h[y];
        if (Iv(s, n, m) && !vu(g, m))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : n === s ? !1 : n ? s ? ep(n, s, g) : !0 : !!s;
  return !1;
}
function ep(e, t, i) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const r = n[a];
    if (Iv(t, e, r) && !vu(i, r))
      return !0;
  }
  return !1;
}
function Iv(e, t, i) {
  const n = e[i], a = t[i];
  return i === "style" && lt(n) && lt(a) ? !Pn(n, a) : n !== a;
}
function Yy({ vnode: e, parent: t, suspense: i }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = n, e = a), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  i && i.activeBranch === e && (i.vnode.el = n);
}
const Rv = {}, Lv = () => Object.create(Rv), Pv = (e) => Object.getPrototypeOf(e) === Rv;
function Zy(e, t, i, n = !1) {
  const a = {}, r = Lv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Dv(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  i ? e.props = n ? a : /* @__PURE__ */ Zm(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Xy(e, t, i, n) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, d = /* @__PURE__ */ nt(a), [c] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const h = e.vnode.dynamicProps;
      for (let y = 0; y < h.length; y++) {
        let m = h[y];
        if (vu(e.emitsOptions, m))
          continue;
        const k = t[m];
        if (c)
          if (st(r, m))
            k !== r[m] && (r[m] = k, g = !0);
          else {
            const A = Jt(m);
            a[A] = Hc(
              c,
              d,
              A,
              k,
              e,
              !1
            );
          }
        else
          k !== r[m] && (r[m] = k, g = !0);
      }
    }
  } else {
    Dv(e, t, a, r) && (g = !0);
    let h;
    for (const y in d)
      (!t || // for camelCase
      !st(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = zn(y)) === y || !st(t, h))) && (c ? i && // for camelCase
      (i[y] !== void 0 || // for kebab-case
      i[h] !== void 0) && (a[y] = Hc(
        c,
        d,
        y,
        void 0,
        e,
        !0
      )) : delete a[y]);
    if (r !== d)
      for (const y in r)
        (!t || !st(t, y)) && (delete r[y], g = !0);
  }
  g && En(e.attrs, "set", "");
}
function Dv(e, t, i, n) {
  const [a, r] = e.propsOptions;
  let s = !1, d;
  if (t)
    for (let c in t) {
      if (ks(c))
        continue;
      const g = t[c];
      let h;
      a && st(a, h = Jt(c)) ? !r || !r.includes(h) ? i[h] = g : (d || (d = {}))[h] = g : vu(e.emitsOptions, c) || (!(c in n) || g !== n[c]) && (n[c] = g, s = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ nt(i), g = d || tt;
    for (let h = 0; h < r.length; h++) {
      const y = r[h];
      i[y] = Hc(
        a,
        c,
        y,
        g[y],
        e,
        !st(g, y)
      );
    }
  }
  return s;
}
function Hc(e, t, i, n, a, r) {
  const s = e[i];
  if (s != null) {
    const d = st(s, "default");
    if (d && n === void 0) {
      const c = s.default;
      if (s.type !== Function && !s.skipFactory && Ue(c)) {
        const { propsDefaults: g } = a;
        if (i in g)
          n = g[i];
        else {
          const h = ol(a);
          n = g[i] = c.call(
            null,
            t
          ), h();
        }
      } else
        n = c;
      a.ce && a.ce._setProp(i, n);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !d ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === zn(i)) && (n = !0));
  }
  return n;
}
const Jy = /* @__PURE__ */ new WeakMap();
function Fv(e, t, i = !1) {
  const n = i ? Jy : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, d = [];
  let c = !1;
  if (!Ue(e)) {
    const h = (y) => {
      c = !0;
      const [m, k] = Fv(y, t, !0);
      Et(s, m), k && d.push(...k);
    };
    !i && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!r && !c)
    return lt(e) && n.set(e, Tr), Tr;
  if (Re(r))
    for (let h = 0; h < r.length; h++) {
      const y = Jt(r[h]);
      tp(y) && (s[y] = tt);
    }
  else if (r)
    for (const h in r) {
      const y = Jt(h);
      if (tp(y)) {
        const m = r[h], k = s[y] = Re(m) || Ue(m) ? { type: m } : Et({}, m), A = k.type;
        let C = !1, $ = !0;
        if (Re(A))
          for (let R = 0; R < A.length; ++R) {
            const L = A[R], P = Ue(L) && L.name;
            if (P === "Boolean") {
              C = !0;
              break;
            } else P === "String" && ($ = !1);
          }
        else
          C = Ue(A) && A.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = C, k[
          1
          /* shouldCastTrue */
        ] = $, (C || st(k, "default")) && d.push(y);
      }
    }
  const g = [s, d];
  return lt(e) && n.set(e, g), g;
}
function tp(e) {
  return e[0] !== "$" && !ks(e);
}
const Od = (e) => e === "_" || e === "_ctx" || e === "$stable", Nd = (e) => Re(e) ? e.map(rn) : [rn(e)], Qy = (e, t, i) => {
  if (t._n)
    return t;
  const n = we((...a) => Nd(t(...a)), i);
  return n._c = !1, n;
}, Mv = (e, t, i) => {
  const n = e._ctx;
  for (const a in e) {
    if (Od(a)) continue;
    const r = e[a];
    if (Ue(r))
      t[a] = Qy(a, r, n);
    else if (r != null) {
      const s = Nd(r);
      t[a] = () => s;
    }
  }
}, Uv = (e, t) => {
  const i = Nd(t);
  e.slots.default = () => i;
}, zv = (e, t, i) => {
  for (const n in t)
    (i || !Od(n)) && (e[n] = t[n]);
}, e1 = (e, t, i) => {
  const n = e.slots = Lv();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (zv(n, t, i), i && zh(n, "_", a, !0)) : Mv(t, n);
  } else t && Uv(e, t);
}, t1 = (e, t, i) => {
  const { vnode: n, slots: a } = e;
  let r = !0, s = tt;
  if (n.shapeFlag & 32) {
    const d = t._;
    d ? i && d === 1 ? r = !1 : zv(a, t, i) : (r = !t.$stable, Mv(t, a)), s = t;
  } else t && (Uv(e, t), s = { default: 1 });
  if (r)
    for (const d in a)
      !Od(d) && s[d] == null && delete a[d];
}, oi = s1;
function i1(e) {
  return n1(e);
}
function n1(e, t) {
  const i = su();
  i.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: r,
    createElement: s,
    createText: d,
    createComment: c,
    setText: g,
    setElementText: h,
    parentNode: y,
    nextSibling: m,
    setScopeId: k = Ri,
    insertStaticContent: A
  } = e, C = (S, O, D, B = null, U = null, X = null, te = void 0, re = null, de = !!O.dynamicChildren) => {
    if (S === O)
      return;
    S && !Xa(S, O) && (B = Ie(S), Oe(S, U, X, !0), S = null), O.patchFlag === -2 && (de = !1, O.dynamicChildren = null);
    const { type: se, ref: xe, shapeFlag: _e } = O;
    switch (se) {
      case ll:
        $(S, O, D, B);
        break;
      case Ut:
        R(S, O, D, B);
        break;
      case Yl:
        S == null && L(O, D, B, te);
        break;
      case W:
        z(
          S,
          O,
          D,
          B,
          U,
          X,
          te,
          re,
          de
        );
        break;
      default:
        _e & 1 ? pe(
          S,
          O,
          D,
          B,
          U,
          X,
          te,
          re,
          de
        ) : _e & 6 ? q(
          S,
          O,
          D,
          B,
          U,
          X,
          te,
          re,
          de
        ) : (_e & 64 || _e & 128) && se.process(
          S,
          O,
          D,
          B,
          U,
          X,
          te,
          re,
          de,
          ut
        );
    }
    xe != null && U ? Ts(xe, S && S.ref, X, O || S, !O) : xe == null && S && S.ref != null && Ts(S.ref, null, X, S, !0);
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
  }, R = (S, O, D, B) => {
    S == null ? n(
      O.el = c(O.children || ""),
      D,
      B
    ) : O.el = S.el;
  }, L = (S, O, D, B) => {
    [S.el, S.anchor] = A(
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
      U = m(S), n(S, D, B), S = U;
    n(O, D, B);
  }, N = ({ el: S, anchor: O }) => {
    let D;
    for (; S && S !== O; )
      D = m(S), a(S), S = D;
    a(O);
  }, pe = (S, O, D, B, U, X, te, re, de) => {
    if (O.type === "svg" ? te = "svg" : O.type === "math" && (te = "mathml"), S == null)
      Q(
        O,
        D,
        B,
        U,
        X,
        te,
        re,
        de
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
          re,
          de
        );
      } finally {
        se && se._endPatch();
      }
    }
  }, Q = (S, O, D, B, U, X, te, re) => {
    let de, se;
    const { props: xe, shapeFlag: _e, transition: Se, dirs: $e } = S;
    if (de = S.el = s(
      S.type,
      X,
      xe && xe.is,
      xe
    ), _e & 8 ? h(de, S.children) : _e & 16 && H(
      S.children,
      de,
      null,
      B,
      U,
      Ju(S, X),
      te,
      re
    ), $e && Ba(S, null, B, "created"), E(de, S, S.scopeId, te, B), xe) {
      for (const Ge in xe)
        Ge !== "value" && !ks(Ge) && r(de, Ge, null, xe[Ge], X, B);
      "value" in xe && r(de, "value", null, xe.value, X), (se = xe.onVnodeBeforeMount) && Qi(se, B, S);
    }
    $e && Ba(S, null, B, "beforeMount");
    const He = a1(U, Se);
    He && Se.beforeEnter(de), n(de, O, D), ((se = xe && xe.onVnodeMounted) || He || $e) && oi(() => {
      se && Qi(se, B, S), He && Se.enter(de), $e && Ba(S, null, B, "mounted");
    }, U);
  }, E = (S, O, D, B, U) => {
    if (D && k(S, D), B)
      for (let X = 0; X < B.length; X++)
        k(S, B[X]);
    if (U) {
      let X = U.subTree;
      if (O === X || Hv(X.type) && (X.ssContent === O || X.ssFallback === O)) {
        const te = U.vnode;
        E(
          S,
          te,
          te.scopeId,
          te.slotScopeIds,
          U.parent
        );
      }
    }
  }, H = (S, O, D, B, U, X, te, re, de = 0) => {
    for (let se = de; se < S.length; se++) {
      const xe = S[se] = re ? An(S[se]) : rn(S[se]);
      C(
        null,
        xe,
        O,
        D,
        B,
        U,
        X,
        te,
        re
      );
    }
  }, K = (S, O, D, B, U, X, te) => {
    const re = O.el = S.el;
    let { patchFlag: de, dynamicChildren: se, dirs: xe } = O;
    de |= S.patchFlag & 16;
    const _e = S.props || tt, Se = O.props || tt;
    let $e;
    if (D && Ha(D, !1), ($e = Se.onVnodeBeforeUpdate) && Qi($e, D, O, S), xe && Ba(O, S, D, "beforeUpdate"), D && Ha(D, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    se && (!S.dynamicChildren || S.dynamicChildren.length !== se.length) && (de = 0, te = !1, se = null), (_e.innerHTML && Se.innerHTML == null || _e.textContent && Se.textContent == null) && h(re, ""), se ? Z(
      S.dynamicChildren,
      se,
      re,
      D,
      B,
      Ju(O, U),
      X
    ) : te || Y(
      S,
      O,
      re,
      null,
      D,
      B,
      Ju(O, U),
      X,
      !1
    ), de > 0) {
      if (de & 16)
        ne(re, _e, Se, D, U);
      else if (de & 2 && _e.class !== Se.class && r(re, "class", null, Se.class, U), de & 4 && r(re, "style", _e.style, Se.style, U), de & 8) {
        const He = O.dynamicProps;
        for (let Ge = 0; Ge < He.length; Ge++) {
          const Ve = He[Ge], it = _e[Ve], ct = Se[Ve];
          (ct !== it || Ve === "value") && r(re, Ve, it, ct, U, D);
        }
      }
      de & 1 && S.children !== O.children && h(re, O.children);
    } else !te && se == null && ne(re, _e, Se, D, U);
    (($e = Se.onVnodeUpdated) || xe) && oi(() => {
      $e && Qi($e, D, O, S), xe && Ba(O, S, D, "updated");
    }, B);
  }, Z = (S, O, D, B, U, X, te) => {
    for (let re = 0; re < O.length; re++) {
      const de = S[re], se = O[re], xe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        de.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (de.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xa(de, se) || // - In the case of a component, it could contain anything.
        de.shapeFlag & 198) ? y(de.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          D
        )
      );
      C(
        de,
        se,
        xe,
        null,
        B,
        U,
        X,
        te,
        !0
      );
    }
  }, ne = (S, O, D, B, U) => {
    if (O !== D) {
      if (O !== tt)
        for (const X in O)
          !ks(X) && !(X in D) && r(
            S,
            X,
            O[X],
            null,
            U,
            B
          );
      for (const X in D) {
        if (ks(X)) continue;
        const te = D[X], re = O[X];
        te !== re && X !== "value" && r(S, X, re, te, U, B);
      }
      "value" in D && r(S, "value", O.value, D.value, U);
    }
  }, z = (S, O, D, B, U, X, te, re, de) => {
    const se = O.el = S ? S.el : d(""), xe = O.anchor = S ? S.anchor : d("");
    let { patchFlag: _e, dynamicChildren: Se, slotScopeIds: $e } = O;
    $e && (re = re ? re.concat($e) : $e), S == null ? (n(se, D, B), n(xe, D, B), H(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      D,
      xe,
      U,
      X,
      te,
      re,
      de
    )) : _e > 0 && _e & 64 && Se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren && S.dynamicChildren.length === Se.length ? (Z(
      S.dynamicChildren,
      Se,
      D,
      U,
      X,
      te,
      re
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
      xe,
      U,
      X,
      te,
      re,
      de
    );
  }, q = (S, O, D, B, U, X, te, re, de) => {
    O.slotScopeIds = re, S == null ? O.shapeFlag & 512 ? U.ctx.activate(
      O,
      D,
      B,
      te,
      de
    ) : I(
      O,
      D,
      B,
      U,
      X,
      te,
      de
    ) : V(S, O, de);
  }, I = (S, O, D, B, U, X, te) => {
    const re = S.component = c1(
      S,
      B,
      U
    );
    if (pu(S) && (re.ctx.renderer = ut), d1(re, !1, te), re.asyncDep) {
      if (U && U.registerDep(re, J, te), !S.el) {
        const de = re.subTree = ve(Ut);
        R(null, de, O, D), S.placeholder = de.el;
      }
    } else
      J(
        re,
        S,
        O,
        D,
        U,
        X,
        te
      );
  }, V = (S, O, D) => {
    const B = O.component = S.component;
    if (Wy(S, O, D))
      if (B.asyncDep && !B.asyncResolved) {
        ie(B, O, D);
        return;
      } else
        B.next = O, B.update();
    else
      O.el = S.el, B.vnode = O;
  }, J = (S, O, D, B, U, X, te) => {
    const re = () => {
      if (S.isMounted) {
        let { next: _e, bu: Se, u: $e, parent: He, vnode: Ge } = S;
        {
          const bt = jv(S);
          if (bt) {
            _e && (_e.el = Ge.el, ie(S, _e, te)), bt.asyncDep.then(() => {
              oi(() => {
                S.isUnmounted || se();
              }, U);
            });
            return;
          }
        }
        let Ve = _e, it;
        Ha(S, !1), _e ? (_e.el = Ge.el, ie(S, _e, te)) : _e = Ge, Se && Wl(Se), (it = _e.props && _e.props.onVnodeBeforeUpdate) && Qi(it, He, _e, Ge), Ha(S, !0);
        const ct = Qf(S), yt = S.subTree;
        S.subTree = ct, C(
          yt,
          ct,
          // parent may have changed if it's in a teleport
          y(yt.el),
          // anchor may have changed if it's in a fragment
          Ie(yt),
          S,
          U,
          X
        ), _e.el = ct.el, Ve === null && Yy(S, ct.el), $e && oi($e, U), (it = _e.props && _e.props.onVnodeUpdated) && oi(
          () => Qi(it, He, _e, Ge),
          U
        );
      } else {
        let _e;
        const { el: Se, props: $e } = O, { bm: He, m: Ge, parent: Ve, root: it, type: ct } = S, yt = Er(O);
        Ha(S, !1), He && Wl(He), !yt && (_e = $e && $e.onVnodeBeforeMount) && Qi(_e, Ve, O), Ha(S, !0);
        {
          it.ce && it.ce._hasShadowRoot() && it.ce._injectChildStyle(
            ct,
            S.parent ? S.parent.type : void 0
          );
          const bt = S.subTree = Qf(S);
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
        if (Ge && oi(Ge, U), !yt && (_e = $e && $e.onVnodeMounted)) {
          const bt = O;
          oi(
            () => Qi(_e, Ve, bt),
            U
          );
        }
        (O.shapeFlag & 256 || Ve && Er(Ve.vnode) && Ve.vnode.shapeFlag & 256) && S.a && oi(S.a, U), S.isMounted = !0, O = D = B = null;
      }
    };
    S.scope.on();
    const de = S.effect = new Vh(re);
    S.scope.off();
    const se = S.update = de.run.bind(de), xe = S.job = de.runIfDirty.bind(de);
    xe.i = S, xe.id = S.uid, de.scheduler = () => Td(xe), Ha(S, !0), se();
  }, ie = (S, O, D) => {
    O.component = S;
    const B = S.vnode.props;
    S.vnode = O, S.next = null, Xy(S, O.props, B, D), t1(S, O.children, D), Dn(), Hf(S), Fn();
  }, Y = (S, O, D, B, U, X, te, re, de = !1) => {
    const se = S && S.children, xe = S ? S.shapeFlag : 0, _e = O.children, { patchFlag: Se, shapeFlag: $e } = O;
    if (Se > 0) {
      if (Se & 128) {
        ke(
          se,
          _e,
          D,
          B,
          U,
          X,
          te,
          re,
          de
        );
        return;
      } else if (Se & 256) {
        fe(
          se,
          _e,
          D,
          B,
          U,
          X,
          te,
          re,
          de
        );
        return;
      }
    }
    $e & 8 ? (xe & 16 && ye(se, U, X), _e !== se && h(D, _e)) : xe & 16 ? $e & 16 ? ke(
      se,
      _e,
      D,
      B,
      U,
      X,
      te,
      re,
      de
    ) : ye(se, U, X, !0) : (xe & 8 && h(D, ""), $e & 16 && H(
      _e,
      D,
      B,
      U,
      X,
      te,
      re,
      de
    ));
  }, fe = (S, O, D, B, U, X, te, re, de) => {
    S = S || Tr, O = O || Tr;
    const se = S.length, xe = O.length, _e = Math.min(se, xe);
    let Se;
    for (Se = 0; Se < _e; Se++) {
      const $e = O[Se] = de ? An(O[Se]) : rn(O[Se]);
      C(
        S[Se],
        $e,
        D,
        null,
        U,
        X,
        te,
        re,
        de
      );
    }
    se > xe ? ye(
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
      re,
      de,
      _e
    );
  }, ke = (S, O, D, B, U, X, te, re, de) => {
    let se = 0;
    const xe = O.length;
    let _e = S.length - 1, Se = xe - 1;
    for (; se <= _e && se <= Se; ) {
      const $e = S[se], He = O[se] = de ? An(O[se]) : rn(O[se]);
      if (Xa($e, He))
        C(
          $e,
          He,
          D,
          null,
          U,
          X,
          te,
          re,
          de
        );
      else
        break;
      se++;
    }
    for (; se <= _e && se <= Se; ) {
      const $e = S[_e], He = O[Se] = de ? An(O[Se]) : rn(O[Se]);
      if (Xa($e, He))
        C(
          $e,
          He,
          D,
          null,
          U,
          X,
          te,
          re,
          de
        );
      else
        break;
      _e--, Se--;
    }
    if (se > _e) {
      if (se <= Se) {
        const $e = Se + 1, He = $e < xe ? O[$e].el : B;
        for (; se <= Se; )
          C(
            null,
            O[se] = de ? An(O[se]) : rn(O[se]),
            D,
            He,
            U,
            X,
            te,
            re,
            de
          ), se++;
      }
    } else if (se > Se)
      for (; se <= _e; )
        Oe(S[se], U, X, !0), se++;
    else {
      const $e = se, He = se, Ge = /* @__PURE__ */ new Map();
      for (se = He; se <= Se; se++) {
        const kt = O[se] = de ? An(O[se]) : rn(O[se]);
        kt.key != null && Ge.set(kt.key, se);
      }
      let Ve, it = 0;
      const ct = Se - He + 1;
      let yt = !1, bt = 0;
      const ti = new Array(ct);
      for (se = 0; se < ct; se++) ti[se] = 0;
      for (se = $e; se <= _e; se++) {
        const kt = S[se];
        if (it >= ct) {
          Oe(kt, U, X, !0);
          continue;
        }
        let xt;
        if (kt.key != null)
          xt = Ge.get(kt.key);
        else
          for (Ve = He; Ve <= Se; Ve++)
            if (ti[Ve - He] === 0 && Xa(kt, O[Ve])) {
              xt = Ve;
              break;
            }
        xt === void 0 ? Oe(kt, U, X, !0) : (ti[xt - He] = se + 1, xt >= bt ? bt = xt : yt = !0, C(
          kt,
          O[xt],
          D,
          null,
          U,
          X,
          te,
          re,
          de
        ), it++);
      }
      const hi = yt ? r1(ti) : Tr;
      for (Ve = hi.length - 1, se = ct - 1; se >= 0; se--) {
        const kt = He + se, xt = O[kt], Di = O[kt + 1], Ht = kt + 1 < xe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Di.el || Bv(Di)
        ) : B;
        ti[se] === 0 ? C(
          null,
          xt,
          D,
          Ht,
          U,
          X,
          te,
          re,
          de
        ) : yt && (Ve < 0 || se !== hi[Ve] ? Le(xt, D, Ht, 2) : Ve--);
      }
    }
  }, Le = (S, O, D, B, U = null) => {
    const { el: X, type: te, transition: re, children: de, shapeFlag: se } = S;
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
      for (let _e = 0; _e < de.length; _e++)
        Le(de[_e], O, D, B);
      n(S.anchor, O, D);
      return;
    }
    if (te === Yl) {
      P(S, O, D);
      return;
    }
    if (B !== 2 && se & 1 && re)
      if (B === 0)
        re.persisted && !X[Ni] ? n(X, O, D) : (re.beforeEnter(X), n(X, O, D), oi(() => re.enter(X), U));
      else {
        const { leave: _e, delayLeave: Se, afterLeave: $e } = re, He = () => {
          S.ctx.isUnmounted ? a(X) : n(X, O, D);
        }, Ge = () => {
          const Ve = X._isLeaving || !!X[Ni];
          X._isLeaving && X[Ni](
            !0
            /* cancelled */
          ), re.persisted && !Ve ? He() : _e(X, () => {
            He(), $e && $e();
          });
        };
        Se ? Se(X, He, Ge) : Ge();
      }
    else
      n(X, O, D);
  }, Oe = (S, O, D, B = !1, U = !1) => {
    const {
      type: X,
      props: te,
      ref: re,
      children: de,
      dynamicChildren: se,
      shapeFlag: xe,
      patchFlag: _e,
      dirs: Se,
      cacheIndex: $e,
      memo: He
    } = S;
    if (_e === -2 && (U = !1), re != null && (Dn(), Ts(re, null, D, S, !0), Fn()), $e != null && (O.renderCache[$e] = void 0), xe & 256) {
      O.ctx.deactivate(S);
      return;
    }
    const Ge = xe & 1 && Se, Ve = !Er(S);
    let it;
    if (Ve && (it = te && te.onVnodeBeforeUnmount) && Qi(it, O, S), xe & 6)
      ft(S.component, D, B);
    else {
      if (xe & 128) {
        S.suspense.unmount(D, B);
        return;
      }
      Ge && Ba(S, null, O, "beforeUnmount"), xe & 64 ? S.type.remove(
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
      ) : (X === W && _e & 384 || !U && xe & 16) && ye(de, O, D), B && Me(S);
    }
    const ct = He != null && $e == null;
    (Ve && (it = te && te.onVnodeUnmounted) || Ge || ct) && oi(() => {
      it && Qi(it, O, S), Ge && Ba(S, null, O, "unmounted"), ct && (S.el = null);
    }, D);
  }, Me = (S) => {
    const { type: O, el: D, anchor: B, transition: U } = S;
    if (O === W) {
      Ze(D, B);
      return;
    }
    if (O === Yl) {
      N(S);
      return;
    }
    const X = () => {
      a(D), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (S.shapeFlag & 1 && U && !U.persisted) {
      const { leave: te, delayLeave: re } = U, de = () => te(D, X);
      re ? re(S.el, X, de) : de();
    } else
      X();
  }, Ze = (S, O) => {
    let D;
    for (; S !== O; )
      D = m(S), a(S), S = D;
    a(O);
  }, ft = (S, O, D) => {
    const { bum: B, scope: U, job: X, subTree: te, um: re, m: de, a: se } = S;
    ip(de), ip(se), B && Wl(B), U.stop(), X && (X.flags |= 8, Oe(te, S, O, D)), re && oi(re, O), oi(() => {
      S.isUnmounted = !0;
    }, O);
  }, ye = (S, O, D, B = !1, U = !1, X = 0) => {
    for (let te = X; te < S.length; te++)
      Oe(S[te], O, D, B, U);
  }, Ie = (S) => {
    if (S.shapeFlag & 6)
      return Ie(S.component.subTree);
    if (S.shapeFlag & 128)
      return S.suspense.next();
    const O = m(S.anchor || S.el), D = O && O[pv];
    return D ? m(D) : O;
  };
  let ge = !1;
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
    ), O._vnode = S, ge || (ge = !0, Hf(B), cv(), ge = !1);
  }, ut = {
    p: C,
    um: Oe,
    m: Le,
    r: Me,
    mt: I,
    mc: H,
    pc: Y,
    pbc: Z,
    n: Ie,
    o: e
  };
  return {
    render: De,
    hydrate: void 0,
    createApp: Hy(De)
  };
}
function Ju({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function Ha({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function a1(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Id(e, t, i = !1) {
  const n = e.children, a = t.children;
  if (Re(n) && Re(a))
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      let d = a[r];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[r] = An(a[r]), d.el = s.el), !i && d.patchFlag !== -2 && Id(s, d)), d.type === ll && (d.patchFlag === -1 && (d = a[r] = An(d)), d.el = s.el), d.type === Ut && !d.el && (d.el = s.el);
    }
}
function r1(e) {
  const t = e.slice(), i = [0];
  let n, a, r, s, d;
  const c = e.length;
  for (n = 0; n < c; n++) {
    const g = e[n];
    if (g !== 0) {
      if (a = i[i.length - 1], e[a] < g) {
        t[n] = a, i.push(n);
        continue;
      }
      for (r = 0, s = i.length - 1; r < s; )
        d = r + s >> 1, e[i[d]] < g ? r = d + 1 : s = d;
      g < e[i[r]] && (r > 0 && (t[n] = i[r - 1]), i[r] = n);
    }
  }
  for (r = i.length, s = i[r - 1]; r-- > 0; )
    i[r] = s, s = t[s];
  return i;
}
function jv(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : jv(t);
}
function ip(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Bv(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Bv(t.subTree) : null;
}
const Hv = (e) => e.__isSuspense;
function s1(e, t) {
  t && t.pendingBranch ? Re(e) ? t.effects.push(...e) : t.effects.push(e) : uv(e);
}
const W = /* @__PURE__ */ Symbol.for("v-fgt"), ll = /* @__PURE__ */ Symbol.for("v-txt"), Ut = /* @__PURE__ */ Symbol.for("v-cmt"), Yl = /* @__PURE__ */ Symbol.for("v-stc"), In = [];
let wi = null;
function p(e = !1) {
  In.push(wi = e ? null : []);
}
function Rd() {
  In.pop(), wi = In[In.length - 1] || null;
}
let Hs = 1;
function lo(e, t = !1) {
  Hs += e, e < 0 && wi && t && (wi.hasOnce = !0);
}
function Vv(e) {
  return e.dynamicChildren = Hs > 0 ? wi || Tr : null, Rd(), Hs > 0 && wi && wi.push(e), e;
}
function v(e, t, i, n, a, r) {
  return Vv(
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
function Pe(e, t, i, n, a) {
  return Vv(
    ve(
      e,
      t,
      i,
      n,
      a,
      !0
    )
  );
}
function Vs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const qv = ({ key: e }) => e ?? null, Zl = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? vt(e) || /* @__PURE__ */ Qt(e) || Ue(e) ? { i: zt, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, n = 0, a = null, r = e === W ? 0 : 1, s = !1, d = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qv(t),
    ref: t && Zl(t),
    scopeId: cu,
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
    ctx: zt
  };
  return d ? (oo(c, i), r & 128 && e.normalize(c)) : i && (c.shapeFlag |= vt(i) ? 8 : 16), Hs > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  wi && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && wi.push(c), c;
}
const ve = l1;
function l1(e, t = null, i = null, n = 0, a = null, r = !1) {
  if ((!e || e === Sv) && (e = Ut), Vs(e)) {
    const d = wa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && oo(d, i), Hs > 0 && !r && wi && (d.shapeFlag & 6 ? wi[wi.indexOf(e)] = d : wi.push(d)), d.patchFlag = -2, d;
  }
  if (v1(e) && (e = e.__vccOpts), t) {
    t = qs(t);
    let { class: d, style: c } = t;
    d && !vt(d) && (t.class = Ce(d)), lt(c) && (/* @__PURE__ */ Cd(c) && !Re(c) && (c = Et({}, c)), t.style = pi(c));
  }
  const s = vt(e) ? 1 : Hv(e) ? 128 : fu(e) ? 64 : lt(e) ? 4 : Ue(e) ? 2 : 0;
  return l(
    e,
    t,
    i,
    n,
    a,
    s,
    r,
    !0
  );
}
function qs(e) {
  return e ? /* @__PURE__ */ Cd(e) || Pv(e) ? Et({}, e) : e : null;
}
function wa(e, t, i = !1, n = !1) {
  const { props: a, ref: r, patchFlag: s, children: d, transition: c } = e, g = t ? ei(a || {}, t) : a, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && qv(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? Re(r) ? r.concat(Zl(t)) : [r, Zl(t)] : Zl(t)
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
    patchFlag: t && e.type !== W ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && wa(e.ssContent),
    ssFallback: e.ssFallback && wa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && n && Bs(
    h,
    c.clone(h)
  ), h;
}
function ae(e = " ", t = 0) {
  return ve(ll, null, e, t);
}
function x(e = "", t = !1) {
  return t ? (p(), Pe(Ut, null, e)) : ve(Ut, null, e);
}
function rn(e) {
  return e == null || typeof e == "boolean" ? ve(Ut) : Re(e) ? ve(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Vs(e) ? An(e) : ve(ll, null, String(e));
}
function An(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wa(e);
}
function oo(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Re(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), oo(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !Pv(t) ? t._ctx = zt : a === 3 && zt && (zt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Ue(t)) {
    if (n & 65) {
      oo(e, { default: t });
      return;
    }
    t = { default: t, _ctx: zt }, i = 32;
  } else
    t = String(t), n & 64 ? (i = 16, t = [ae(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function ei(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = Ce([t.class, n.class]));
      else if (a === "style")
        t.style = pi([t.style, n.style]);
      else if (tu(a)) {
        const r = t[a], s = n[a];
        s && r !== s && !(Re(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !iu(a) && (t[a] = s);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Qi(e, t, i, n = null) {
  Pi(e, t, 7, [
    i,
    n
  ]);
}
const o1 = xv();
let u1 = 0;
function c1(e, t, i) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || o1, r = {
    uid: u1++,
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
    scope: new Nm(
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
    propsOptions: Fv(n, a),
    emitsOptions: Nv(n, a),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Vy.bind(null, r), e.ce && e.ce(r), r;
}
let Xt = null;
const Sa = () => Xt || zt;
let uo, Ks;
{
  const e = su(), t = (i, n) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(n), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  uo = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Xt = i
  ), Ks = t(
    "__VUE_SSR_SETTERS__",
    (i) => Gs = i
  );
}
const ol = (e) => {
  const t = Xt;
  return uo(e), e.scope.on(), () => {
    e.scope.off(), uo(t);
  };
}, np = () => {
  Xt && Xt.scope.off(), uo(null);
};
function Kv(e) {
  return e.vnode.shapeFlag & 4;
}
let Gs = !1;
function d1(e, t = !1, i = !1) {
  t && Ks(t);
  const { props: n, children: a } = e.vnode, r = Kv(e);
  Zy(e, n, r, t), e1(e, a, i || t);
  const s = r ? f1(e, t) : void 0;
  return t && Ks(!1), s;
}
function f1(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ry);
  const { setup: n } = i;
  if (n) {
    Dn();
    const a = e.setupContext = n.length > 1 ? Wv(e) : null, r = ol(e), s = rl(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = Fh(s);
    if (Fn(), r(), (d || e.sp) && !Er(e) && yv(e), d) {
      if (s.then(np, np), t)
        return s.then((c) => {
          Ks(!0);
          try {
            ap(e, c, t);
          } finally {
            Ks(!1);
          }
        }).catch((c) => {
          uu(c, e, 0);
        });
      e.asyncDep = s;
    } else
      ap(e, s);
  } else
    Gv(e);
}
function ap(e, t, i) {
  Ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : lt(t) && (e.setupState = sv(t)), Gv(e);
}
function Gv(e, t, i) {
  const n = e.type;
  e.render || (e.render = n.render || Ri);
  {
    const a = ol(e);
    Dn();
    try {
      Fy(e);
    } finally {
      Fn(), a();
    }
  }
}
const p1 = {
  get(e, t) {
    return Yt(e, "get", ""), e[t];
  }
};
function Wv(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, p1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function bu(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(sv(Xm(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in As)
        return As[i](e);
    },
    has(t, i) {
      return i in t || i in As;
    }
  })) : e.proxy;
}
function h1(e, t = !0) {
  return Ue(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function v1(e) {
  return Ue(e) && "__vccOpts" in e;
}
const j = (e, t) => /* @__PURE__ */ ny(e, t, Gs);
function di(e, t, i) {
  try {
    lo(-1);
    const n = arguments.length;
    return n === 2 ? lt(t) && !Re(t) ? Vs(t) ? ve(e, null, [t]) : ve(e, t) : ve(e, null, t) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && Vs(i) && (i = [i]), ve(e, t, i));
  } finally {
    lo(1);
  }
}
const b1 = "3.5.42", g1 = Ri;
let Vc;
const rp = typeof window < "u" && window.trustedTypes;
if (rp)
  try {
    Vc = /* @__PURE__ */ rp.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Yv = Vc ? (e) => Vc.createHTML(e) : (e) => e, m1 = "http://www.w3.org/2000/svg", y1 = "http://www.w3.org/1998/Math/MathML", Tn = typeof document < "u" ? document : null, sp = Tn && /* @__PURE__ */ Tn.createElement("template"), _1 = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, n) => {
    const a = t === "svg" ? Tn.createElementNS(m1, e) : t === "mathml" ? Tn.createElementNS(y1, e) : i ? Tn.createElement(e, { is: i }) : Tn.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => Tn.createTextNode(e),
  createComment: (e) => Tn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Tn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, i, n, a, r) {
    const s = i ? i.previousSibling : t.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), i), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      sp.innerHTML = Yv(
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
      s ? s.nextSibling : t.firstChild,
      // last
      i ? i.previousSibling : t.lastChild
    ];
  }
}, ra = "transition", ls = "animation", Ws = /* @__PURE__ */ Symbol("_vtc"), Zv = {
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
}, w1 = /* @__PURE__ */ Et(
  {},
  hv,
  Zv
), k1 = (e) => (e.displayName = "Transition", e.props = w1, e), S1 = /* @__PURE__ */ k1(
  (e, { slots: t }) => di(wy, C1(e), t)
), Va = (e, t = []) => {
  Re(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, lp = (e) => e ? Re(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function C1(e) {
  const t = {};
  for (const z in e)
    z in Zv || (t[z] = e[z]);
  if (e.css === !1)
    return t;
  const {
    name: i = "v",
    type: n,
    duration: a,
    enterFromClass: r = `${i}-enter-from`,
    enterActiveClass: s = `${i}-enter-active`,
    enterToClass: d = `${i}-enter-to`,
    appearFromClass: c = r,
    appearActiveClass: g = s,
    appearToClass: h = d,
    leaveFromClass: y = `${i}-leave-from`,
    leaveActiveClass: m = `${i}-leave-active`,
    leaveToClass: k = `${i}-leave-to`
  } = e, A = T1(a), C = A && A[0], $ = A && A[1], {
    onBeforeEnter: R,
    onEnter: L,
    onEnterCancelled: P,
    onLeave: N,
    onLeaveCancelled: pe,
    onBeforeAppear: Q = R,
    onAppear: E = L,
    onAppearCancelled: H = P
  } = t, K = (z, q, I, V) => {
    z._enterCancelled = V, qa(z, q ? h : d), qa(z, q ? g : s), I && I();
  }, Z = (z, q) => {
    z._isLeaving = !1, qa(z, y), qa(z, k), qa(z, m), q && q();
  }, ne = (z) => (q, I) => {
    const V = z ? E : L, J = () => K(q, z, I);
    Va(V, [q, J]), op(() => {
      qa(q, z ? c : r), yn(q, z ? h : d), lp(V) || up(q, n, C, J);
    });
  };
  return Et(t, {
    onBeforeEnter(z) {
      Va(R, [z]), yn(z, r), yn(z, s);
    },
    onBeforeAppear(z) {
      Va(Q, [z]), yn(z, c), yn(z, g);
    },
    onEnter: ne(!1),
    onAppear: ne(!0),
    onLeave(z, q) {
      z._isLeaving = !0;
      const I = () => Z(z, q);
      yn(z, y), z._enterCancelled ? (yn(z, m), fp(z)) : (fp(z), yn(z, m)), op(() => {
        z._isLeaving && (qa(z, y), yn(z, k), lp(N) || up(z, n, $, I));
      }), Va(N, [z, I]);
    },
    onEnterCancelled(z) {
      K(z, !1, void 0, !0), Va(P, [z]);
    },
    onAppearCancelled(z) {
      K(z, !0, void 0, !0), Va(H, [z]);
    },
    onLeaveCancelled(z) {
      Z(z), Va(pe, [z]);
    }
  });
}
function T1(e) {
  if (e == null)
    return null;
  if (lt(e))
    return [Qu(e.enter), Qu(e.leave)];
  {
    const t = Qu(e);
    return [t, t];
  }
}
function Qu(e) {
  return km(e);
}
function yn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Ws] || (e[Ws] = /* @__PURE__ */ new Set())).add(t);
}
function qa(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const i = e[Ws];
  i && (i.delete(t), i.size || (e[Ws] = void 0));
}
function op(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let A1 = 0;
function up(e, t, i, n) {
  const a = e._endId = ++A1, r = () => {
    a === e._endId && n();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: s, timeout: d, propCount: c } = E1(e, t);
  if (!s)
    return n();
  const g = s + "end";
  let h = 0;
  const y = () => {
    e.removeEventListener(g, m), r();
  }, m = (k) => {
    k.target === e && ++h >= c && y();
  };
  setTimeout(() => {
    h < c && y();
  }, d + 1), e.addEventListener(g, m);
}
function E1(e, t) {
  const i = window.getComputedStyle(e), n = (A) => (i[A] || "").split(", "), a = n(`${ra}Delay`), r = n(`${ra}Duration`), s = cp(a, r), d = n(`${ls}Delay`), c = n(`${ls}Duration`), g = cp(d, c);
  let h = null, y = 0, m = 0;
  t === ra ? s > 0 && (h = ra, y = s, m = r.length) : t === ls ? g > 0 && (h = ls, y = g, m = c.length) : (y = Math.max(s, g), h = y > 0 ? s > g ? ra : ls : null, m = h ? h === ra ? r.length : c.length : 0);
  const k = h === ra && /\b(?:transform|all)(?:,|$)/.test(
    n(`${ra}Property`).toString()
  );
  return {
    type: h,
    timeout: y,
    propCount: m,
    hasTransform: k
  };
}
function cp(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((i, n) => dp(i) + dp(e[n])));
}
function dp(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function fp(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function x1(e, t, i) {
  const n = e[Ws];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const co = /* @__PURE__ */ Symbol("_vod"), Xv = /* @__PURE__ */ Symbol("_vsh"), nr = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: i }) {
    e[co] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : os(e, t);
  },
  mounted(e, { value: t }, { transition: i }) {
    i && t && i.enter(e);
  },
  updated(e, { value: t, oldValue: i }, { transition: n }) {
    !t != !i && (n ? t ? (n.beforeEnter(e), os(e, !0), n.enter(e)) : n.leave(e, () => {
      os(e, !1);
    }) : os(e, t));
  },
  beforeUnmount(e, { value: t }) {
    os(e, t);
  }
};
function os(e, t) {
  e.style.display = t ? e[co] : "none", e[Xv] = !t;
}
const Jv = /* @__PURE__ */ Symbol("");
function $1(e) {
  const t = Sa();
  if (!t)
    return;
  const i = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => fo(r, a));
  }, n = () => {
    const a = e(t.proxy);
    t.ce ? fo(t.ce, a) : qc(t.subTree, a), i(a);
  };
  kv(() => {
    uv(n);
  }), $t(() => {
    qe(n, Ri, { flush: "post" });
    const a = new MutationObserver(n);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), sl(() => a.disconnect());
  });
}
function qc(e, t) {
  if (e.shapeFlag & 128) {
    const i = e.suspense;
    e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      qc(i.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    fo(e.el, t);
  else if (e.type === W)
    e.children.forEach((i) => qc(i, t));
  else if (e.type === Yl) {
    let { el: i, anchor: n } = e;
    for (; i && (fo(i, t), i !== n); )
      i = i.nextSibling;
  }
}
function fo(e, t) {
  if (e.nodeType === 1) {
    const i = e.style;
    let n = "";
    for (const a in t) {
      const r = Om(t[a]);
      i.setProperty(`--${a}`, r), n += `--${a}: ${r};`;
    }
    i[Jv] = n;
  }
}
const O1 = /(?:^|;)\s*display\s*:/;
function N1(e, t, i) {
  const n = e.style, a = vt(i);
  let r = !1;
  if (i && !a) {
    if (t)
      if (vt(t))
        for (const s of t.split(";")) {
          const d = s.slice(0, s.indexOf(":")).trim();
          i[d] == null && ms(n, d, "");
        }
      else
        for (const s in t)
          i[s] == null && ms(n, s, "");
    for (const s in i) {
      s === "display" && (r = !0);
      const d = i[s];
      d != null ? R1(
        e,
        s,
        !vt(t) && t ? t[s] : void 0,
        d
      ) || ms(n, s, d) : ms(n, s, "");
    }
  } else if (a) {
    if (t !== i) {
      const s = n[Jv];
      s && (i += ";" + s), n.cssText = i, r = O1.test(i);
    }
  } else t && e.removeAttribute("style");
  co in e && (e[co] = r ? n.display : "", e[Xv] && (n.display = "none"));
}
const Ml = /\s*!important$/;
function ms(e, t, i) {
  if (Re(i))
    i.forEach((n) => ms(e, t, n));
  else if (i == null && (i = ""), t.startsWith("--"))
    Ml.test(i) ? e.setProperty(t, i.replace(Ml, ""), "important") : e.setProperty(t, i);
  else {
    const n = I1(e, t);
    Ml.test(i) ? e.setProperty(
      zn(n),
      i.replace(Ml, ""),
      "important"
    ) : e[n] = i;
  }
}
const pp = ["Webkit", "Moz", "ms"], ec = {};
function I1(e, t) {
  const i = ec[t];
  if (i)
    return i;
  let n = Jt(t);
  if (n !== "filter" && n in e)
    return ec[t] = n;
  n = au(n);
  for (let a = 0; a < pp.length; a++) {
    const r = pp[a] + n;
    if (r in e)
      return ec[t] = r;
  }
  return t;
}
function R1(e, t, i, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && vt(n) && i === n;
}
const hp = "http://www.w3.org/1999/xlink";
function vp(e, t, i, n, a, r = xm(t)) {
  n && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(hp, t.slice(6, t.length)) : e.setAttributeNS(hp, t, i) : i == null || r && !jh(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Vi(i) ? String(i) : i
  );
}
function bp(e, t, i, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    i != null && (e[t] = t === "innerHTML" ? Yv(i) : i);
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
  let s = !1;
  if (i === "" || i == null) {
    const d = typeof e[t];
    d === "boolean" ? i = jh(i) : i == null && d === "string" ? (i = "", s = !0) : d === "number" && (i = 0, s = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function va(e, t, i, n) {
  e.addEventListener(t, i, n);
}
function L1(e, t, i, n) {
  e.removeEventListener(t, i, n);
}
const gp = /* @__PURE__ */ Symbol("_vei");
function P1(e, t, i, n, a = null) {
  const r = e[gp] || (e[gp] = {}), s = r[t];
  if (n && s)
    s.value = n;
  else {
    const [d, c] = M1(t);
    if (n) {
      const g = r[t] = j1(
        n,
        a
      );
      va(e, d, g, c);
    } else s && (L1(e, d, s, c), r[t] = void 0);
  }
}
const D1 = /(Once|Passive|Capture)$/, F1 = /^on:?(?:Once|Passive|Capture)$/;
function M1(e) {
  let t, i;
  for (; (i = e.match(D1)) && !F1.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : zn(e.slice(2)), t];
}
let tc = 0;
const U1 = /* @__PURE__ */ Promise.resolve(), z1 = () => tc || (U1.then(() => tc = 0), tc = Date.now());
function j1(e, t) {
  const i = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= i.attached)
      return;
    const a = i.value;
    if (Re(a)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const s = a.slice(), d = [n];
      for (let c = 0; c < s.length && !n._stopped; c++) {
        const g = s[c];
        g && Pi(
          g,
          t,
          5,
          d
        );
      }
    } else
      Pi(
        a,
        t,
        5,
        [n]
      );
  };
  return i.value = e, i.attached = z1(), i;
}
const mp = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, B1 = (e, t, i, n, a, r) => {
  const s = a === "svg";
  t === "class" ? x1(e, n, s) : t === "style" ? N1(e, i, n) : tu(t) ? iu(t) || P1(e, t, i, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : H1(e, t, n, s)) ? (bp(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vp(e, t, n, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (V1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !vt(n))) ? bp(e, Jt(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), vp(e, t, n, s));
};
function H1(e, t, i, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mp(t) && Ue(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return mp(t) && vt(i) ? !1 : t in e;
}
function V1(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const n = Jt(t);
  return Array.isArray(i) ? i.some((a) => Jt(a) === n) : Object.keys(i).some((a) => Jt(a) === n);
}
const Rr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Re(t) ? (i) => Wl(t, i) : t;
};
function q1(e) {
  e.target.composing = !0;
}
function yp(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const sn = /* @__PURE__ */ Symbol("_assign"), Ul = /* @__PURE__ */ Symbol("_initialValue");
function ic(e, t, i) {
  return t && (e = e.trim()), i && (e = ru(e)), e;
}
const We = {
  created(e, { modifiers: { lazy: t, trim: i, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[Ul] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ul] = e.defaultValue.replace(/\r\n?/g, `
`))), e[sn] = Rr(a);
    const r = n || a.props && a.props.type === "number";
    va(e, t ? "change" : "input", (s) => {
      s.target.composing || e[sn](ic(e.value, i, r));
    }), (i || r) && va(e, "change", () => {
      e.value = ic(e.value, i, r);
    }), t || (va(e, "compositionstart", q1), va(e, "compositionend", yp), va(e, "change", yp));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: n } }) {
    const a = t ?? "", r = e[Ul];
    delete e[Ul], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[sn](ic(e.value, i, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: n, trim: a, number: r } }, s) {
    if (e[sn] = Rr(s), e.composing) return;
    const d = (r || e.type === "number") && !/^0\d/.test(e.value) ? ru(e.value) : e.value, c = t ?? "";
    if (d === c)
      return;
    const g = e.getRootNode();
    (g instanceof Document || g instanceof ShadowRoot) && g.activeElement === e && e.type !== "range" && (n && t === i || a && e.value.trim() === c) || (e.value = c);
  }
}, rr = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, i) {
    e[sn] = Rr(i), va(e, "change", () => {
      const n = e._modelValue, a = Ys(e), r = e.checked, s = e[sn];
      if (Re(n)) {
        const d = md(n, a), c = d !== -1;
        if (r && !c)
          s(n.concat(a));
        else if (!r && c) {
          const g = [...n];
          g.splice(d, 1), s(g);
        }
      } else if (Ln(n)) {
        const d = new Set(n);
        r ? d.add(a) : d.delete(a), s(d);
      } else
        s(Qv(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: _p,
  beforeUpdate(e, t, i) {
    e[sn] = Rr(i), _p(e, t, i);
  }
};
function _p(e, { value: t, oldValue: i }, n) {
  e._modelValue = t;
  let a;
  if (Re(t))
    a = md(t, n.props.value) > -1;
  else if (Ln(t))
    a = t.has(n.props.value);
  else {
    if (t === i) return;
    a = Pn(t, Qv(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const rt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, n) {
    e._modelValue = t, va(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => i ? ru(Ys(c)) : Ys(c)
      ), r = e.multiple, s = r ? Ln(e._modelValue) ? new Set(a) : a : a[0], d = e._pendingValue = [
        r,
        r ? Re(s) ? a.slice() : a : s
      ];
      try {
        e[sn](s);
      } finally {
        Nt(() => {
          e._pendingValue === d && (e._pendingValue = void 0);
        });
      }
    }), e[sn] = Rr(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    wp(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[sn] = Rr(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !K1(t, i[1], i[0])) && wp(e, t);
  }
};
function K1(e, t, i) {
  if (!i || Re(e)) return Pn(e, t);
  if (Ln(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function wp(e, t) {
  const i = e.multiple, n = Re(t);
  if (!(i && !n && !Ln(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], d = Ys(s);
      if (i)
        if (n) {
          const c = typeof d;
          c === "string" || c === "number" ? s.selected = t.some((g) => String(g) === String(d)) : s.selected = md(t, d) > -1;
        } else
          s.selected = t.has(d);
      else if (Pn(Ys(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ys(e) {
  return "_value" in e ? e._value : e.value;
}
function Qv(e, t) {
  const i = t ? "_trueValue" : "_falseValue";
  return i in e ? e[i] : t;
}
const G1 = ["ctrl", "shift", "alt", "meta"], W1 = {
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
  exact: (e, t) => G1.some((i) => e[`${i}Key`] && !t.includes(i))
}, Ae = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), n = t.join(".");
  return i[n] || (i[n] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const d = W1[t[s]];
      if (d && d(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Y1 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, dt = (e, t) => {
  const i = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return i[n] || (i[n] = ((a) => {
    if (!("key" in a))
      return;
    const r = zn(a.key);
    if (t.some(
      (s) => s === r || Y1[s] === r
    ))
      return e(a);
  }));
}, Z1 = /* @__PURE__ */ Et({ patchProp: B1 }, _1);
let kp;
function X1() {
  return kp || (kp = i1(Z1));
}
const J1 = ((...e) => {
  const t = X1().createApp(...e), { mount: i } = t;
  return t.mount = (n) => {
    const a = e_(n);
    if (!a) return;
    const r = t._component;
    !Ue(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = i(a, !1, Q1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function Q1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function e_(e) {
  return vt(e) ? document.querySelector(e) : e;
}
function po(e, t, i) {
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
const Sp = (e, t, i) => {
  const n = Object.assign({
    escape: !0
  }, {}), a = function(r, s) {
    return s = s || {}, r.replace(
      /{([^{}]*)}/g,
      function(d, c) {
        const g = s[c];
        return n.escape ? encodeURIComponent(typeof g == "string" || typeof g == "number" ? g.toString() : d) : typeof g == "string" || typeof g == "number" ? g.toString() : d;
      }
    );
  };
  return e.charAt(0) !== "/" && (e = "/" + e), a(e, {});
}, Ki = (e, t, i) => {
  const n = Object.assign({
    noRewrite: !1
  }, {}), a = t_();
  return window?.OC?.config?.modRewriteWorking === !0 && !n.noRewrite ? a + Sp(e) : a + "/index.php" + Sp(e);
};
function t_() {
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
function Cp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function i_(e) {
  if (Array.isArray(e)) return e;
}
function n_(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n, a, r, s, d = [], c = !0, g = !1;
    try {
      if (r = (i = i.call(e)).next, t !== 0) for (; !(c = (n = r.call(i)).done) && (d.push(n.value), d.length !== t); c = !0) ;
    } catch (h) {
      g = !0, a = h;
    } finally {
      try {
        if (!c && i.return != null && (s = i.return(), Object(s) !== s)) return;
      } finally {
        if (g) throw a;
      }
    }
    return d;
  }
}
function a_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function r_(e, t) {
  return i_(e) || n_(e, t) || s_(e, t) || a_();
}
function s_(e, t) {
  if (e) {
    if (typeof e == "string") return Cp(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Cp(e, t) : void 0;
  }
}
const eb = Object.entries, Tp = Object.setPrototypeOf, l_ = Object.isFrozen, tb = Object.getPrototypeOf, ib = Object.getOwnPropertyDescriptor;
let It = Object.freeze, jt = Object.seal, Sr = Object.create, nb = typeof Reflect < "u" && Reflect, Kc = nb.apply, Gc = nb.construct;
It || (It = function(t) {
  return t;
});
jt || (jt = function(t) {
  return t;
});
Kc || (Kc = function(t, i) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) a[r - 2] = arguments[r];
  return t.apply(i, a);
});
Gc || (Gc = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
  return new t(...n);
});
const _n = wt(Array.prototype.forEach), o_ = wt(Array.prototype.lastIndexOf), Ap = wt(Array.prototype.pop), us = wt(Array.prototype.push), u_ = wt(Array.prototype.slice), c_ = wt(Array.prototype.splice), $r = Array.isArray, nc = ab(Set), ac = wt(Set.prototype.add), cs = wt(Set.prototype.has), Ya = wt(String.prototype.toLowerCase), rc = wt(String.prototype.toString), Ep = wt(String.prototype.match), ds = wt(String.prototype.replace), xp = wt(String.prototype.indexOf), d_ = wt(String.prototype.trim), f_ = wt(Number.prototype.toString), p_ = wt(Boolean.prototype.toString), $p = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), Op = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), fi = wt(Object.prototype.hasOwnProperty), fs = wt(Object.prototype.toString), Pt = wt(RegExp.prototype.test), wn = ab(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
    return Kc(e, t, n);
  };
}
function ab(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
    return Gc(e, i);
  };
}
function et(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ya;
  if (Tp && Tp(e, null), !$r(t)) return e;
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const r = i(a);
      r !== a && (l_(t) || (t[n] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function h_(e) {
  for (let t = 0; t < e.length; t++) fi(e, t) || (e[t] = null);
  return e;
}
function yi(e) {
  const t = Sr(null);
  for (const n of eb(e)) {
    var i = r_(n, 2);
    const a = i[0], r = i[1];
    fi(e, a) && ($r(r) ? t[a] = h_(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = yi(r) : t[a] = r);
  }
  return t;
}
function v_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return f_(e);
    case "boolean":
      return p_(e);
    case "bigint":
      return $p ? $p(e) : "0";
    case "symbol":
      return Op ? Op(e) : "Symbol()";
    case "undefined":
      return fs(e);
    case "function":
    case "object": {
      if (e === null) return fs(e);
      const t = e, i = Ei(t, "toString");
      if (typeof i == "function") {
        const n = i(t);
        return typeof n == "string" ? n : fs(n);
      }
      return fs(e);
    }
    default:
      return fs(e);
  }
}
function Ei(e, t) {
  for (; e !== null; ) {
    const n = ib(e, t);
    if (n) {
      if (n.get) return wt(n.get);
      if (typeof n.value == "function") return wt(n.value);
    }
    e = tb(e);
  }
  function i() {
    return null;
  }
  return i;
}
function b_(e, t) {
  for (; e !== null; ) {
    const i = ib(e, t);
    if (i) return i.get ? wt(i.get) : null;
    e = tb(e);
  }
  return null;
}
function g_(e) {
  try {
    return Pt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Np = It([
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
]), lc = It([
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
]), m_ = It([
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
]), oc = It([
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
]), y_ = It([
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
]), Ip = It(["#text"]), Rp = It([
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
]), uc = It([
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
]), Lp = It([
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
]), zl = It([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), __ = jt(/{{[\w\W]*|^[\w\W]*}}/g), w_ = jt(/<%[\w\W]*|^[\w\W]*%>/g), k_ = jt(/\${[\w\W]*/g), S_ = jt(/^data-[\-\w.\u00B7-\uFFFF]+$/), C_ = jt(/^aria-[\-\w]+$/), Pp = jt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), T_ = jt(/^(?:\w+script|data):/i), A_ = jt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), E_ = jt(/^html$/i), x_ = jt(/^[a-z][.\w]*(-[.\w]+)+$/i), cc = jt(/<[/\w!]/g), Dp = jt(/<[/\w]/g), $_ = jt(/<\/no(script|embed|frames)/i), Fp = jt(/\/>/i), Tt = {
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
}, O_ = It(et({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), N_ = function() {
  return typeof window > "u" ? null : window;
}, I_ = function(t, i) {
  if (typeof t != "object" || typeof t.createPolicy != "function") return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  i && i.hasAttribute(a) && (n = i.getAttribute(a));
  const r = "dompurify" + (n ? "#" + n : "");
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
}, Mp = function() {
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
}, sa = function(t, i, n, a) {
  return fi(t, i) && $r(t[i]) ? et(a.base ? yi(a.base) : {}, t[i], a.transform) : n;
}, dc = function(t, i, n) {
  const a = fi(t, i) ? t[i] : void 0;
  return a && typeof a == "object" ? yi(a) : n();
};
function rb() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : N_();
  const t = (ce) => rb(ce);
  if (t.version = "3.4.17", t.removed = [], !e || !e.document || e.document.nodeType !== Tt.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const n = i, a = n.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, d = e.Element, c = e.NodeFilter;
  e.NamedNodeMap === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const g = e.DOMParser, h = e.trustedTypes, y = d.prototype, m = Ei(y, "cloneNode"), k = Ei(y, "remove"), A = Ei(y, "removeAttributeNode"), C = Ei(y, "nextSibling"), $ = Ei(y, "childNodes"), R = Ei(y, "parentNode"), L = Ei(y, "shadowRoot"), P = Ei(y, "attributes"), N = s && s.prototype ? Ei(s.prototype, "nodeType") : null, pe = s && s.prototype ? Ei(s.prototype, "nodeName") : null, Q = s && s.prototype ? Ei(s.prototype, "ownerDocument") : null, E = function(T) {
    return N ? N(T) : T.nodeType;
  }, H = function(T) {
    return pe ? pe(T) : T.nodeName;
  }, K = b_(y, "namespaceURI"), Z = function(T) {
    return K ? K(T) : T.namespaceURI;
  };
  if (typeof r == "function") {
    const ce = i.createElement("template");
    ce.content && ce.content.ownerDocument && (i = ce.content.ownerDocument);
  }
  let ne, z = "", q, I = !1, V = 0;
  const J = function() {
    if (V > 0) throw wn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ie = function(T) {
    J(), V++;
    try {
      return ne.createHTML(T);
    } finally {
      V--;
    }
  }, Y = function(T) {
    J(), V++;
    try {
      return ne.createScriptURL(T);
    } finally {
      V--;
    }
  }, fe = function() {
    return I || (q = I_(h, a), I = !0), q;
  }, ke = i, Le = ke.implementation, Oe = ke.createNodeIterator, Me = ke.createDocumentFragment, Ze = ke.getElementsByTagName, ft = n.importNode;
  let ye = Mp();
  t.isSupported = typeof eb == "function" && typeof R == "function" && Le && Le.createHTMLDocument !== void 0;
  const Ie = __, ge = w_, De = k_, ut = S_, ee = C_, S = T_, O = A_, D = x_;
  let B = Pp, U = null;
  const X = et({}, [
    ...Np,
    ...sc,
    ...lc,
    ...oc,
    ...Ip
  ]);
  let te = null;
  const re = et({}, [
    ...Rp,
    ...uc,
    ...Lp,
    ...zl
  ]);
  let de = Object.seal(Sr(null, {
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
  })), se = null, xe = null;
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
  let Se = !0, $e = !0, He = !1, Ge = !0, Ve = !1, it = !0, ct = !1, yt = !1, bt = null, ti = null, hi = !1, kt = !1, xt = !1, Di = !1, Ht = !0, vi = !1;
  const Aa = "user-content-";
  let Gi = !0, Ea = !1, Si = null, Wi = {}, Yi = null;
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
  let cn = null;
  const Bn = et({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Hn = null;
  const Vn = et({}, [
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
  ]), pt = "http://www.w3.org/1998/Math/MathML", or = "http://www.w3.org/2000/svg", bi = "http://www.w3.org/1999/xhtml";
  let dn = bi, qn = !1, ur = null;
  const xa = et({}, [
    pt,
    or,
    bi
  ], rc), Kn = It([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let fn = et({}, Kn);
  const Gn = It(["annotation-xml"]);
  let pn = et({}, Gn);
  const Wn = et({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let $a = null;
  const dl = ["application/xhtml+xml", "text/html"], Fi = "text/html";
  let _t = null, Yn = null;
  const Cu = i.createElement("form"), fl = function(T) {
    return T instanceof RegExp || T instanceof Function;
  }, gt = function() {
    let T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Yn && Yn === T) return;
    (!T || typeof T != "object") && (T = {}), T = yi(T), $a = dl.indexOf(T.PARSER_MEDIA_TYPE) === -1 ? Fi : T.PARSER_MEDIA_TYPE, _t = $a === "application/xhtml+xml" ? rc : Ya, U = sa(T, "ALLOWED_TAGS", X, { transform: _t }), te = sa(T, "ALLOWED_ATTR", re, { transform: _t }), ur = sa(T, "ALLOWED_NAMESPACES", xa, { transform: rc }), Hn = sa(T, "ADD_URI_SAFE_ATTR", Vn, {
      transform: _t,
      base: Vn
    }), cn = sa(T, "ADD_DATA_URI_TAGS", Bn, {
      transform: _t,
      base: Bn
    }), Yi = sa(T, "FORBID_CONTENTS", Lr, { transform: _t }), se = sa(T, "FORBID_TAGS", yi({}), { transform: _t }), xe = sa(T, "FORBID_ATTR", yi({}), { transform: _t }), Wi = fi(T, "USE_PROFILES") ? T.USE_PROFILES && typeof T.USE_PROFILES == "object" ? yi(T.USE_PROFILES) : T.USE_PROFILES : !1, Se = T.ALLOW_ARIA_ATTR !== !1, $e = T.ALLOW_DATA_ATTR !== !1, He = T.ALLOW_UNKNOWN_PROTOCOLS || !1, Ge = T.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ve = T.SAFE_FOR_TEMPLATES || !1, it = T.SAFE_FOR_XML !== !1, ct = T.WHOLE_DOCUMENT || !1, kt = T.RETURN_DOM || !1, xt = T.RETURN_DOM_FRAGMENT || !1, Di = T.RETURN_TRUSTED_TYPE || !1, hi = T.FORCE_BODY || !1, Ht = T.SANITIZE_DOM !== !1, vi = T.SANITIZE_NAMED_PROPS || !1, Gi = T.KEEP_CONTENT !== !1, Ea = T.IN_PLACE || !1, B = g_(T.ALLOWED_URI_REGEXP) ? T.ALLOWED_URI_REGEXP : Pp, dn = typeof T.NAMESPACE == "string" ? T.NAMESPACE : bi, fn = dc(T, "MATHML_TEXT_INTEGRATION_POINTS", () => et({}, Kn)), pn = dc(T, "HTML_INTEGRATION_POINTS", () => et({}, Gn));
    const M = dc(T, "CUSTOM_ELEMENT_HANDLING", () => Sr(null));
    if (de = Sr(null), fi(M, "tagNameCheck") && fl(M.tagNameCheck) && (de.tagNameCheck = M.tagNameCheck), fi(M, "attributeNameCheck") && fl(M.attributeNameCheck) && (de.attributeNameCheck = M.attributeNameCheck), fi(M, "allowCustomizedBuiltInElements") && typeof M.allowCustomizedBuiltInElements == "boolean" && (de.allowCustomizedBuiltInElements = M.allowCustomizedBuiltInElements), jt(de), Ve && ($e = !1), xt && (kt = !0), Wi && (U = et({}, Ip), te = Sr(null), Wi.html === !0 && (et(U, Np), et(te, Rp)), Wi.svg === !0 && (et(U, sc), et(te, uc), et(te, zl)), Wi.svgFilters === !0 && (et(U, lc), et(te, uc), et(te, zl)), Wi.mathMl === !0 && (et(U, oc), et(te, Lp), et(te, zl))), _e.tagCheck = null, _e.attributeCheck = null, fi(T, "ADD_TAGS") && (typeof T.ADD_TAGS == "function" ? _e.tagCheck = T.ADD_TAGS : $r(T.ADD_TAGS) && (U === X && (U = yi(U)), et(U, T.ADD_TAGS, _t))), fi(T, "ADD_ATTR") && (typeof T.ADD_ATTR == "function" ? _e.attributeCheck = T.ADD_ATTR : $r(T.ADD_ATTR) && (te === re && (te = yi(te)), et(te, T.ADD_ATTR, _t))), fi(T, "ADD_FORBID_CONTENTS") && $r(T.ADD_FORBID_CONTENTS) && (Yi === Lr && (Yi = yi(Yi)), et(Yi, T.ADD_FORBID_CONTENTS, _t)), Gi && (U["#text"] = !0), ct && et(U, [
      "html",
      "head",
      "body"
    ]), U.table && (et(U, ["tbody"]), delete se.tbody), T.TRUSTED_TYPES_POLICY) {
      if (typeof T.TRUSTED_TYPES_POLICY.createHTML != "function") throw wn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof T.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw wn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const le = ne;
      ne = T.TRUSTED_TYPES_POLICY;
      try {
        z = ie("");
      } catch (oe) {
        throw ne = le, oe;
      }
    } else T.TRUSTED_TYPES_POLICY === null ? (ne = void 0, z = "") : (ne === void 0 && (ne = fe()), ne && typeof z == "string" && (z = ie("")));
    It && It(T), Yn = T;
  }, cr = et({}, [
    ...sc,
    ...lc,
    ...m_
  ]), pl = et({}, [...oc, ...y_]), Tu = function(T, M, le) {
    return M.namespaceURI === bi ? T === "svg" : M.namespaceURI === pt ? T === "svg" && (le === "annotation-xml" || fn[le]) : !!cr[T];
  }, hn = function(T, M, le) {
    return M.namespaceURI === bi ? T === "math" : M.namespaceURI === or ? T === "math" && pn[le] : !!pl[T];
  }, Au = function(T, M, le) {
    return M.namespaceURI === or && !pn[le] || M.namespaceURI === pt && !fn[le] ? !1 : !pl[T] && (Wn[T] || !cr[T]);
  }, Zn = function(T) {
    const M = Z(T), le = Ya(H(T)), oe = R(T);
    let Ne, Fe;
    return oe && E(oe) === Tt.element ? (Ne = { namespaceURI: Z(oe) }, Fe = Ya(H(oe))) : (Ne = { namespaceURI: dn }, Fe = "template"), ur[M] ? M === or ? Tu(le, Ne, Fe) : M === pt ? hn(le, Ne, Fe) : M === bi ? Au(le, Ne, Fe) : !!($a === "application/xhtml+xml" && ur[M]) : !1;
  }, Ci = function(T) {
    us(t.removed, { element: T });
    try {
      R(T).removeChild(T);
    } catch {
      if (k(T), !R(T)) throw wn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, hl = function(T, M, le) {
    try {
      A(T, M);
    } catch {
      try {
        T.removeAttribute(le);
      } catch {
      }
    }
  }, Pr = function(T) {
    Fr(T);
    const M = $(T);
    M && _n(u_(M), (oe) => {
      try {
        k(oe);
      } catch {
      }
    });
    const le = E(T) === Tt.element ? P(T) : null;
    if (le) for (let oe = le.length - 1; oe >= 0; --oe) {
      const Ne = le[oe], Fe = Ne && Ne.name;
      typeof Fe == "string" && hl(T, Ne, Fe);
    }
  }, Xn = function(T, M, le) {
    if (!le) try {
      le = M.getAttributeNode(T);
    } catch {
      le = null;
    }
    us(t.removed, {
      attribute: le || null,
      from: M
    });
    try {
      le ? A(M, le) : M.removeAttribute(T);
    } catch {
      try {
        M.removeAttribute(T);
      } catch {
      }
    }
    if (T === "is")
      if (kt || xt) try {
        Ci(M);
      } catch {
      }
      else try {
        M.setAttribute(T, "");
      } catch {
      }
  }, vl = function(T) {
    const M = P(T);
    if (M)
      for (let le = M.length - 1; le >= 0; --le) {
        const oe = M[le], Ne = oe && oe.name;
        typeof Ne != "string" || te[_t(Ne)] || hl(T, oe, Ne);
      }
  }, Dr = function(T, M) {
    let le = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const oe = [T];
    for (; oe.length > 0; ) {
      const Ne = oe.pop();
      if (M(Ne) === !1) continue;
      if (le && E(Ne) === Tt.element) {
        const ze = L(Ne);
        Zi(ze) && oe.push(ze);
      }
      const Fe = $(Ne);
      if (Fe) for (let ze = Fe.length - 1; ze >= 0; --ze) oe.push(Fe[ze]);
    }
  }, Fr = function(T) {
    Dr(T, (M) => {
      E(M) === Tt.element && vl(M);
    });
  }, Mr = function(T) {
    const M = [];
    return Dr(T, (le) => {
      M.push(le);
    }, !0), M;
  }, Eu = function(T, M) {
    const le = nc();
    _n(Mr(T), (oe) => {
      E(oe) === Tt.element && ac(le, oe);
    }), _n(M, (oe) => {
      E(oe) === Tt.element && !cs(le, oe) && vl(oe);
    });
  }, bl = function(T, M) {
    let le = !1;
    return _n(t.removed, (oe) => {
      oe.element && (le = le || oe.element === T, Fr(oe.element));
    }), Eu(T, M), le;
  }, xu = 8, $u = function(T, M) {
    const le = Si;
    let oe = null;
    const Ne = () => (oe || (oe = nc(), _n(M, (Fe) => {
      ac(oe, Fe);
    })), oe);
    for (let Fe = 0; ; Fe++) {
      const ze = Mr(T), at = [T];
      let ii = !1;
      if (_n(ze, (Ot) => {
        E(Ot) === Tt.documentFragment ? us(at, Ot) : !ii && !cs(le, Ot) && (ii = cs(Ne(), Ot));
      }), !ii) return;
      if (Fe >= xu) throw wn("the tree kept changing during in-place sanitization; refusing to return it");
      _n(at, (Ot, Ct) => {
        Ou(Ot, Ct > 0, T, Ne());
      });
    }
  }, Ou = function(T, M, le, oe) {
    const Ne = Oa(T);
    let Fe;
    for (; Fe = Ne.nextNode(); )
      !cs(oe, Fe) || cs(Si, Fe) || (M && ci(ye.uponSanitizeShadowNode, Fe, null), fr(Fe, le), pr(Fe, le), Zi(Fe.content) && Ra(Fe.content));
  }, Nu = function(T) {
    Si && ac(Si, T);
  }, gl = function(T, M) {
    return it ? T === "patchsrc" ? !0 : T === "for" && M !== "label" && M !== "output" : !1;
  }, Iu = function(T) {
    it && Dr(T, (M) => {
      const le = E(M);
      if (le === Tt.processingInstruction || le === Tt.comment && Pt(Dp, M.data)) {
        try {
          k(M);
        } catch {
        }
        return !1;
      }
      if (le === Tt.element) {
        const oe = M, Ne = _t(H(M));
        try {
          oe.hasAttribute && oe.hasAttribute("patchsrc") && oe.removeAttribute("patchsrc"), oe.hasAttribute && oe.hasAttribute("for") && gl("for", Ne) && oe.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, Ur = function(T) {
    let M = null, le = null;
    if (hi) T = "<remove></remove>" + T;
    else {
      const Fe = Ep(T, /^[\r\n\t ]+/);
      le = Fe && Fe[0];
    }
    $a === "application/xhtml+xml" && dn === bi && (T = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + T + "</body></html>");
    const oe = ne ? ie(T) : T;
    if (dn === bi) try {
      M = new g().parseFromString(oe, $a);
    } catch {
    }
    if (!M || !M.documentElement) {
      M = Le.createDocument(dn, "template", null);
      try {
        M.documentElement.innerHTML = qn ? z : oe;
      } catch {
      }
    }
    const Ne = M.body || M.documentElement;
    return T && le && Ne.insertBefore(i.createTextNode(le), Ne.childNodes[0] || null), dn === bi ? Ze.call(M, ct ? "html" : "body")[0] : ct ? M.documentElement : Ne;
  }, Oa = function(T) {
    const M = Q ? Q(T) : T.ownerDocument;
    return Oe.call(M || T, T, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
  }, Jn = function(T) {
    return T = ds(T, Ie, " "), T = ds(T, ge, " "), T = ds(T, De, " "), T;
  }, Na = function(T) {
    var M;
    dr(T);
    const le = (M = T.querySelectorAll) === null || M === void 0 ? void 0 : M.call(T, "template");
    le && _n(le, (oe) => {
      Zi(oe.content) && Na(oe.content);
    });
  }, dr = function(T) {
    T.normalize();
    const M = Q ? Q(T) : T.ownerDocument, le = Oe.call(M || T, T, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null);
    let oe = le.nextNode();
    for (; oe; )
      oe.data = Jn(oe.data), oe = le.nextNode();
  }, Ia = function(T) {
    const M = pe ? pe(T) : null;
    return typeof M != "string" || _t(M) !== "form" ? !1 : typeof T.nodeName != "string" || typeof T.textContent != "string" || typeof T.removeChild != "function" || T.attributes !== P(T) || typeof T.removeAttribute != "function" || typeof T.removeAttributeNode != "function" || typeof T.getAttributeNode != "function" || typeof T.setAttribute != "function" || typeof T.namespaceURI != "string" || typeof T.insertBefore != "function" || typeof T.hasChildNodes != "function" || T.nodeType !== N(T) || T.childNodes !== $(T);
  }, Zi = function(T) {
    if (!N || typeof T != "object" || T === null) return !1;
    try {
      return N(T) === Tt.documentFragment;
    } catch {
      return !1;
    }
  }, Qn = function(T) {
    if (!N || typeof T != "object" || T === null) return !1;
    try {
      return typeof N(T) == "number";
    } catch {
      return !1;
    }
  };
  function ci(ce, T, M) {
    ce.length !== 0 && _n(ce, (le) => {
      le.call(t, T, M, Yn);
    });
  }
  const Ru = function(T, M) {
    return !!(it && T.hasChildNodes() && !Qn(T.firstElementChild) && Pt(cc, T.textContent) && Pt(cc, T.innerHTML) || it && O_[M] && E(T) === Tt.element && Z(T) === bi && (Qn(T.firstElementChild) || typeof T.textContent == "string" && Pt(cc, T.textContent)) || T.nodeType === Tt.processingInstruction || it && T.nodeType === Tt.comment && Pt(Dp, T.data));
  }, ea = function(T, M) {
    if (T instanceof RegExp) return Pt(T, M);
    if (T instanceof Function) {
      for (var le = arguments.length, oe = new Array(le > 2 ? le - 2 : 0), Ne = 2; Ne < le; Ne++) oe[Ne - 2] = arguments[Ne];
      return !!T(M, ...oe);
    }
    return !1;
  }, zr = function(T, M, le) {
    if (!se[M] && yl(M) && ea(de.tagNameCheck, M)) return !1;
    if (Gi && !Yi[M] && !Yi[Ya(M)]) {
      const oe = R(T), Ne = $(T);
      if (Ne && oe) {
        const Fe = Ne.length;
        for (let ze = Fe - 1; ze >= 0; --ze) {
          const at = T === le ? m(Ne[ze], !0) : Ne[ze];
          oe.insertBefore(at, C(T));
        }
      }
    }
    return Ci(T), !0;
  }, jr = function(T, M, le, oe) {
    return T.length === 0 ? M : M === le || M === oe ? yi(M) : M;
  }, Vt = function(T, M) {
    return T === M || R(T) !== null ? !1 : (Ea && Fr(T), !0);
  }, fr = function(T, M) {
    if (Nu(T), ci(ye.beforeSanitizeElements, T, null), Vt(T, M)) return !0;
    if (Ia(T))
      return Ci(T), !0;
    const le = _t(H(T));
    if (U = jr(ye.uponSanitizeElement, U, X, bt), ci(ye.uponSanitizeElement, T, {
      tagName: le,
      allowedTags: U
    }), Vt(T, M)) return !0;
    if (Ru(T, le))
      return Ci(T), !0;
    if (se[le] || !(_e.tagCheck instanceof Function && _e.tagCheck(le)) && !U[le]) {
      const oe = zr(T, le, M);
      return oe === !1 && (ci(ye.afterSanitizeElements, T, null), Vt(T, M)) ? !0 : oe;
    }
    if (E(T) === Tt.element && !Zn(T) || (le === "noscript" || le === "noembed" || le === "noframes") && Pt($_, T.innerHTML))
      return Ci(T), !0;
    if (Ve && T.nodeType === Tt.text) {
      const oe = Jn(T.textContent);
      T.textContent !== oe && (us(t.removed, { element: T.cloneNode() }), T.textContent = oe);
    }
    return ci(ye.afterSanitizeElements, T, null), Vt(T, M);
  }, Br = function(T, M, le) {
    if (xe[M] || gl(M, T) || Ht && (M === "id" || M === "name") && (le in i || le in Cu)) return !1;
    const oe = te[M] || _e.attributeCheck instanceof Function && _e.attributeCheck(M, T);
    return $e && Pt(ut, M) || Se && Pt(ee, M) ? !0 : oe ? Hn[M] || Pt(B, ds(le, O, "")) || (M === "src" || M === "xlink:href" || M === "href") && T !== "script" && xp(le, "data:") === 0 && cn[T] || He && !Pt(S, ds(le, O, "")) ? !0 : !le : yl(T) && ea(de.tagNameCheck, T) && ea(de.attributeNameCheck, M, T) || M === "is" && de.allowCustomizedBuiltInElements && ea(de.tagNameCheck, le);
  }, ml = et({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), yl = function(T) {
    return !ml[Ya(T)] && Pt(D, T);
  }, Lu = function(T, M, le, oe) {
    if (ne && typeof h == "object" && typeof h.getAttributeType == "function" && !le) switch (h.getAttributeType(T, M)) {
      case "TrustedHTML":
        return ie(oe);
      case "TrustedScriptURL":
        return Y(oe);
    }
    return oe;
  }, _l = function(T, M, le, oe) {
    try {
      return le ? T.setAttributeNS(le, M, oe) : T.setAttribute(M, oe), Ia(T) ? (Ci(T), !1) : !0;
    } catch {
      return Xn(M, T), !1;
    }
  }, Hr = function(T, M) {
    return it && Pt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, M) ? !0 : Ya(T) === "attributename" && Ep(M, "href") !== null;
  }, pr = function(T, M) {
    if (ci(ye.beforeSanitizeAttributes, T, null), Vt(T, M)) return;
    const le = T.attributes;
    if (!le || Ia(T)) return;
    te = jr(ye.uponSanitizeAttribute, te, re, ti);
    const oe = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: te,
      forceKeepAttr: void 0
    };
    let Ne = le.length;
    const Fe = _t(T.nodeName);
    for (; Ne--; ) {
      const ze = le[Ne], at = ze.name, ii = ze.namespaceURI, Ot = ze.value, Ct = _t(at), ta = Ot;
      let qt = at === "value" ? ta : d_(ta), Kt = !1;
      if (oe.attrName = Ct, oe.attrValue = qt, oe.keepAttr = !0, oe.forceKeepAttr = void 0, ci(ye.uponSanitizeAttribute, T, oe), qt = oe.attrValue, vi && (Ct === "id" || Ct === "name") && xp(qt, Aa) !== 0 && (Xn(at, T, ze), qt = Aa + qt, Kt = !0), Hr(at, qt)) {
        Xn(at, T, ze);
        continue;
      }
      if (!oe.forceKeepAttr) {
        if (!oe.keepAttr) {
          Xn(at, T, ze);
          continue;
        }
        if (!Ge && Pt(Fp, qt)) {
          Xn(at, T, ze);
          continue;
        }
        if (Ve && (qt = Jn(qt)), !Br(Fe, Ct, qt)) {
          Xn(at, T, ze);
          continue;
        }
        qt = Lu(Fe, Ct, ii, qt), qt !== ta && _l(T, at, ii, qt) && Kt && Ap(t.removed);
      }
    }
    ci(ye.afterSanitizeAttributes, T, null), Vt(T, M);
  }, Ra = function(T) {
    let M = null;
    const le = Oa(T);
    for (ci(ye.beforeSanitizeShadowDOM, T, null); M = le.nextNode(); )
      if (ci(ye.uponSanitizeShadowNode, M, null), fr(M, T), pr(M, T), Zi(M.content) && Ra(M.content), E(M) === Tt.element) {
        const oe = L(M);
        Zi(oe) && (Vr(oe), Ra(oe));
      }
    Ve && dr(T), ci(ye.afterSanitizeShadowDOM, T, null);
  }, Vr = function(T) {
    const M = [{
      node: T,
      shadow: null
    }];
    for (; M.length > 0; ) {
      const le = M.pop();
      if (le.shadow) {
        Ra(le.shadow);
        continue;
      }
      const oe = le.node, Ne = E(oe) === Tt.element, Fe = $(oe);
      if (Fe) for (let ze = Fe.length - 1; ze >= 0; --ze) M.push({
        node: Fe[ze],
        shadow: null
      });
      if (Ne) {
        const ze = pe ? pe(oe) : null;
        if (typeof ze == "string" && _t(ze) === "template") {
          const at = oe.content;
          Zi(at) && M.push({
            node: at,
            shadow: null
          });
        }
      }
      if (Ne) {
        const ze = L(oe);
        Zi(ze) && M.push({
          node: null,
          shadow: ze
        }, {
          node: ze,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ce) {
    let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, M = null, le = null, oe = null, Ne = null;
    if (qn = !ce, qn && (ce = "<!-->"), typeof ce != "string" && !Qn(ce) && (ce = v_(ce), typeof ce != "string"))
      throw wn("dirty is not a string, aborting");
    if (!t.isSupported) return ce;
    yt ? (U = bt, te = ti) : gt(T), (ye.uponSanitizeElement.length > 0 || ye.uponSanitizeAttribute.length > 0) && (U = yi(U)), ye.uponSanitizeAttribute.length > 0 && (te = yi(te)), t.removed = [];
    const Fe = Ea && typeof ce != "string" && Qn(ce);
    let ze = [];
    const at = Si;
    if (Fe) {
      Iu(ce);
      const Ct = H(ce);
      if (typeof Ct == "string") {
        const ta = _t(Ct);
        if (!U[ta] || se[ta])
          throw Pr(ce), wn("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ia(ce))
        throw Pr(ce), wn("root node is clobbered and cannot be sanitized in-place");
      ze = Mr(ce), Si = nc();
    } else if (Qn(ce))
      M = Ur("<!---->"), le = M.ownerDocument.importNode(ce, !0), le.nodeType === Tt.element && le.nodeName === "BODY" || le.nodeName === "HTML" ? M = le : M.appendChild(le), Vr(M);
    else {
      if (!kt && !Ve && !ct && ce.indexOf("<") === -1) return ne && Di ? ie(ce) : ce;
      if (M = Ur(ce), !M) return kt ? null : Di ? z : "";
    }
    M && hi && Ci(M.firstChild);
    const ii = Fe ? ce : M;
    try {
      Fe && Vr(ce);
      const Ct = Oa(ii);
      for (; oe = Ct.nextNode(); )
        fr(oe, ii), pr(oe, ii), Zi(oe.content) && Ra(oe.content);
      Fe && $u(ce, ze);
    } catch (Ct) {
      throw Fe && (Pr(ce), bl(ce, ze)), Ct;
    } finally {
      Si = at;
    }
    if (Fe) {
      if (bl(ce, ze)) throw wn("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return Ve && Na(ce), ce;
    }
    if (kt) {
      if (Ve && Na(M), xt)
        for (Ne = Me.call(M.ownerDocument); M.firstChild; ) Ne.appendChild(M.firstChild);
      else Ne = M;
      return (te.shadowroot || te.shadowrootmode) && (Ne = ft.call(n, Ne, !0)), Ne;
    }
    let Ot = ct ? M.outerHTML : M.innerHTML;
    return ct && U["!doctype"] && M.ownerDocument && M.ownerDocument.doctype && M.ownerDocument.doctype.name && Pt(E_, M.ownerDocument.doctype.name) && (Ot = "<!DOCTYPE " + M.ownerDocument.doctype.name + `>
` + Ot), Ve && (Ot = Jn(Ot)), ne && Di ? ie(Ot) : Ot;
  }, t.setConfig = function() {
    let ce = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    gt(ce), yt = !0, bt = U, ti = te;
  }, t.clearConfig = function() {
    Yn = null, yt = !1, bt = null, ti = null, ne = q, z = "";
  }, t.isValidAttribute = function(ce, T, M) {
    Yn || gt({});
    const le = _t(ce), oe = _t(T);
    return typeof M == "string" && (Hr(T, M) || !Ge && Pt(Fp, M)) ? !1 : Br(le, oe, M);
  }, t.addHook = function(ce, T) {
    typeof T == "function" && fi(ye, ce) && us(ye[ce], T);
  }, t.removeHook = function(ce, T) {
    if (fi(ye, ce)) {
      if (T !== void 0) {
        const M = o_(ye[ce], T);
        return M === -1 ? void 0 : c_(ye[ce], M, 1)[0];
      }
      return Ap(ye[ce]);
    }
  }, t.removeHooks = function(ce) {
    fi(ye, ce) && (ye[ce] = []);
  }, t.removeAllHooks = function() {
    ye = Mp();
  }, t;
}
var sb = rb();
function Ld(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fc, Up;
function R_() {
  if (Up) return fc;
  Up = 1;
  var e = /["'&<>]/;
  fc = t;
  function t(i) {
    var n = "" + i, a = e.exec(n);
    if (!a)
      return n;
    var r, s = "", d = 0, c = 0;
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
      c !== d && (s += n.substring(c, d)), c = d + 1, s += r;
    }
    return c !== d ? s + n.substring(c, d) : s;
  }
  return fc;
}
var L_ = R_();
const ho = /* @__PURE__ */ Ld(L_);
function lb() {
  return globalThis._nc_l10n_locale;
}
function P_() {
  return lb().replaceAll(/_/g, "-");
}
function ul() {
  return globalThis._nc_l10n_language;
}
function D_(e) {
  const t = ul();
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
function ob(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function w(e, t, i, n, a) {
  const r = typeof i == "object" ? i : void 0, s = typeof n == "number" ? n : typeof i == "number" ? i : void 0, d = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, c = (C) => C, g = (d.sanitize ? sb.sanitize : c) || c, h = d.escape ? ho : c, y = (C) => typeof C == "string" || typeof C == "number", m = (C, $, R) => C.replace(/%n/g, "" + R).replace(/{([^{}]*)}/g, (L, P) => {
    if ($ === void 0 || !(P in $))
      return h(L);
    const N = $[P];
    return y(N) ? h(`${N}`) : typeof N == "object" && y(N.value) ? (N.escape !== !1 ? ho : c)(`${N.value}`) : h(L);
  });
  let A = (a?.bundle ?? ob(e)).translations[t] || t;
  return A = Array.isArray(A) ? A[0] : A, g(typeof r == "object" || s !== void 0 ? m(
    A,
    r,
    s
  ) : A);
}
function xi(e, t, i, n, a, r) {
  const s = "_" + t + "_::_" + i + "_", d = r?.bundle ?? ob(e), c = d.translations[s];
  if (typeof c < "u") {
    const g = c;
    if (Array.isArray(g)) {
      const h = d.pluralFunction(n);
      return w(e, g[h], a, n, r);
    }
  }
  return n === 1 ? w(e, t, a, n, r) : w(e, i, a, n, r);
}
function F_(e, t = ul()) {
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
function M_(e, t = () => "", i = 256) {
  const n = /* @__PURE__ */ new Map();
  let a;
  return (...r) => {
    if (r.length !== 2 || r.some((g) => typeof g != "string")) return e(...r);
    const s = t();
    s !== a && (n.clear(), a = s);
    const d = JSON.stringify(r);
    if (n.has(d)) return n.get(d);
    const c = e(...r);
    return n.size >= i && n.delete(n.keys().next().value), n.set(d, c), c;
  };
}
class vo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, i, n) {
    this.scope = `${n ? vo.GLOBAL_SCOPE_PERSISTENT : vo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = i;
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
class U_ {
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
    return new vo(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function ub(e) {
  return new U_(e);
}
function z_() {
  try {
    return po("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var pc, zp;
function cb() {
  if (zp) return pc;
  zp = 1;
  var e = {};
  return pc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...i) => console.error("SEMVER", ...i) : () => {
  }, pc;
}
var hc, jp;
function db() {
  if (jp) return hc;
  jp = 1;
  const e = "2.0.0", t = 256, i = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, n = 16, a = t - 6;
  return hc = {
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
  }, hc;
}
var jl = { exports: {} }, Bp;
function j_() {
  return Bp || (Bp = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: a
    } = db(), r = cb();
    t = e.exports = {};
    const s = t.re = [], d = t.safeRe = [], c = t.src = [], g = t.safeSrc = [], h = t.t = {};
    let y = 0;
    const m = "[a-zA-Z0-9-]", k = [
      ["\\s", 1],
      ["\\d", a],
      [m, n]
    ], A = ($) => {
      for (const [R, L] of k)
        $ = $.split(`${R}*`).join(`${R}{0,${L}}`).split(`${R}+`).join(`${R}{1,${L}}`);
      return $;
    }, C = ($, R, L) => {
      const P = A(R), N = y++;
      r($, N, R), h[$] = N, c[N] = R, g[N] = P, s[N] = new RegExp(R, L ? "g" : void 0), d[N] = new RegExp(P, L ? "g" : void 0);
    };
    C("NUMERICIDENTIFIER", "0|[1-9]\\d*"), C("NUMERICIDENTIFIERLOOSE", "\\d+"), C("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${m}*`), C("MAINVERSION", `(${c[h.NUMERICIDENTIFIER]})\\.(${c[h.NUMERICIDENTIFIER]})\\.(${c[h.NUMERICIDENTIFIER]})`), C("MAINVERSIONLOOSE", `(${c[h.NUMERICIDENTIFIERLOOSE]})\\.(${c[h.NUMERICIDENTIFIERLOOSE]})\\.(${c[h.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASEIDENTIFIER", `(?:${c[h.NONNUMERICIDENTIFIER]}|${c[h.NUMERICIDENTIFIER]})`), C("PRERELEASEIDENTIFIERLOOSE", `(?:${c[h.NONNUMERICIDENTIFIER]}|${c[h.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASE", `(?:-(${c[h.PRERELEASEIDENTIFIER]}(?:\\.${c[h.PRERELEASEIDENTIFIER]})*))`), C("PRERELEASELOOSE", `(?:-?(${c[h.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[h.PRERELEASEIDENTIFIERLOOSE]})*))`), C("BUILDIDENTIFIER", `${m}+`), C("BUILD", `(?:\\+(${c[h.BUILDIDENTIFIER]}(?:\\.${c[h.BUILDIDENTIFIER]})*))`), C("FULLPLAIN", `v?${c[h.MAINVERSION]}${c[h.PRERELEASE]}?${c[h.BUILD]}?`), C("FULL", `^${c[h.FULLPLAIN]}$`), C("LOOSEPLAIN", `[v=\\s]*${c[h.MAINVERSIONLOOSE]}${c[h.PRERELEASELOOSE]}?${c[h.BUILD]}?`), C("LOOSE", `^${c[h.LOOSEPLAIN]}$`), C("GTLT", "((?:<|>)?=?)"), C("XRANGEIDENTIFIERLOOSE", `${c[h.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), C("XRANGEIDENTIFIER", `${c[h.NUMERICIDENTIFIER]}|x|X|\\*`), C("XRANGEPLAIN", `[v=\\s]*(${c[h.XRANGEIDENTIFIER]})(?:\\.(${c[h.XRANGEIDENTIFIER]})(?:\\.(${c[h.XRANGEIDENTIFIER]})(?:${c[h.PRERELEASE]})?${c[h.BUILD]}?)?)?`), C("XRANGEPLAINLOOSE", `[v=\\s]*(${c[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[h.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[h.XRANGEIDENTIFIERLOOSE]})(?:${c[h.PRERELEASELOOSE]})?${c[h.BUILD]}?)?)?`), C("XRANGE", `^${c[h.GTLT]}\\s*${c[h.XRANGEPLAIN]}$`), C("XRANGELOOSE", `^${c[h.GTLT]}\\s*${c[h.XRANGEPLAINLOOSE]}$`), C("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), C("COERCE", `${c[h.COERCEPLAIN]}(?:$|[^\\d])`), C("COERCEFULL", c[h.COERCEPLAIN] + `(?:${c[h.PRERELEASE]})?(?:${c[h.BUILD]})?(?:$|[^\\d])`), C("COERCERTL", c[h.COERCE], !0), C("COERCERTLFULL", c[h.COERCEFULL], !0), C("LONETILDE", "(?:~>?)"), C("TILDETRIM", `(\\s*)${c[h.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", C("TILDE", `^${c[h.LONETILDE]}${c[h.XRANGEPLAIN]}$`), C("TILDELOOSE", `^${c[h.LONETILDE]}${c[h.XRANGEPLAINLOOSE]}$`), C("LONECARET", "(?:\\^)"), C("CARETTRIM", `(\\s*)${c[h.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", C("CARET", `^${c[h.LONECARET]}${c[h.XRANGEPLAIN]}$`), C("CARETLOOSE", `^${c[h.LONECARET]}${c[h.XRANGEPLAINLOOSE]}$`), C("COMPARATORLOOSE", `^${c[h.GTLT]}\\s*(${c[h.LOOSEPLAIN]})$|^$`), C("COMPARATOR", `^${c[h.GTLT]}\\s*(${c[h.FULLPLAIN]})$|^$`), C("COMPARATORTRIM", `(\\s*)${c[h.GTLT]}\\s*(${c[h.LOOSEPLAIN]}|${c[h.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", C("HYPHENRANGE", `^\\s*(${c[h.XRANGEPLAIN]})\\s+-\\s+(${c[h.XRANGEPLAIN]})\\s*$`), C("HYPHENRANGELOOSE", `^\\s*(${c[h.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[h.XRANGEPLAINLOOSE]})\\s*$`), C("STAR", "(<|>)?=?\\s*\\*"), C("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), C("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(jl, jl.exports)), jl.exports;
}
var vc, Hp;
function B_() {
  if (Hp) return vc;
  Hp = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return vc = (n) => n ? typeof n != "object" ? e : n : t, vc;
}
var bc, Vp;
function H_() {
  if (Vp) return bc;
  Vp = 1;
  const e = /^[0-9]+$/, t = (n, a) => {
    if (typeof n == "number" && typeof a == "number")
      return n === a ? 0 : n < a ? -1 : 1;
    const r = e.test(n), s = e.test(a);
    return r && s && (n = +n, a = +a), n === a ? 0 : r && !s ? -1 : s && !r ? 1 : n < a ? -1 : 1;
  };
  return bc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (n, a) => t(a, n)
  }, bc;
}
var gc, qp;
function fb() {
  if (qp) return gc;
  qp = 1;
  const e = cb(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = db(), { safeRe: n, t: a } = j_(), r = B_(), { compareIdentifiers: s } = H_(), d = (g, h) => {
    const y = h.split(".");
    if (y.length > g.length)
      return !1;
    for (let m = 0; m < y.length; m++)
      if (s(g[m], y[m]) !== 0)
        return !1;
    return !0;
  };
  class c {
    constructor(h, y) {
      if (y = r(y), h instanceof c) {
        if (h.loose === !!y.loose && h.includePrerelease === !!y.includePrerelease)
          return h;
        h = h.version;
      } else if (typeof h != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof h}".`);
      if (h.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", h, y), this.options = y, this.loose = !!y.loose, this.includePrerelease = !!y.includePrerelease;
      const m = h.trim().match(y.loose ? n[a.LOOSE] : n[a.FULL]);
      if (!m)
        throw new TypeError(`Invalid Version: ${h}`);
      if (this.raw = h, this.major = +m[1], this.minor = +m[2], this.patch = +m[3], this.major > i || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > i || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > i || this.patch < 0)
        throw new TypeError("Invalid patch version");
      m[4] ? this.prerelease = m[4].split(".").map((k) => {
        if (/^[0-9]+$/.test(k)) {
          const A = +k;
          if (A >= 0 && A < i)
            return A;
        }
        return k;
      }) : this.prerelease = [], this.build = m[5] ? m[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(h) {
      if (e("SemVer.compare", this.version, this.options, h), !(h instanceof c)) {
        if (typeof h == "string" && h === this.version)
          return 0;
        h = new c(h, this.options);
      }
      return h.version === this.version ? 0 : this.compareMain(h) || this.comparePre(h);
    }
    compareMain(h) {
      return h instanceof c || (h = new c(h, this.options)), this.major < h.major ? -1 : this.major > h.major ? 1 : this.minor < h.minor ? -1 : this.minor > h.minor ? 1 : this.patch < h.patch ? -1 : this.patch > h.patch ? 1 : 0;
    }
    comparePre(h) {
      if (h instanceof c || (h = new c(h, this.options)), this.prerelease.length && !h.prerelease.length)
        return -1;
      if (!this.prerelease.length && h.prerelease.length)
        return 1;
      if (!this.prerelease.length && !h.prerelease.length)
        return 0;
      let y = 0;
      do {
        const m = this.prerelease[y], k = h.prerelease[y];
        if (e("prerelease compare", y, m, k), m === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (m === void 0)
          return -1;
        if (m === k)
          continue;
        return s(m, k);
      } while (++y);
    }
    compareBuild(h) {
      h instanceof c || (h = new c(h, this.options));
      let y = 0;
      do {
        const m = this.build[y], k = h.build[y];
        if (e("build compare", y, m, k), m === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (m === void 0)
          return -1;
        if (m === k)
          continue;
        return s(m, k);
      } while (++y);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(h, y, m) {
      if (h.startsWith("pre")) {
        if (!y && m === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (y) {
          const k = `-${y}`.match(this.options.loose ? n[a.PRERELEASELOOSE] : n[a.PRERELEASE]);
          if (!k || k[1] !== y)
            throw new Error(`invalid identifier: ${y}`);
        }
      }
      switch (h) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", y, m);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", y, m);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", y, m), this.inc("pre", y, m);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", y, m), this.inc("pre", y, m);
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
          const k = Number(m) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [k];
          else {
            let A = this.prerelease.length;
            for (; --A >= 0; )
              typeof this.prerelease[A] == "number" && (this.prerelease[A]++, A = -2);
            if (A === -1) {
              if (y === this.prerelease.join(".") && m === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(k);
            }
          }
          if (y) {
            let A = [y, k];
            if (m === !1 && (A = [y]), d(this.prerelease, y)) {
              const C = this.prerelease[y.split(".").length];
              isNaN(C) && (this.prerelease = A);
            } else
              this.prerelease = A;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${h}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return gc = c, gc;
}
var mc, Kp;
function V_() {
  if (Kp) return mc;
  Kp = 1;
  const e = fb();
  return mc = (i, n) => new e(i, n).major, mc;
}
var q_ = V_();
const Gp = /* @__PURE__ */ Ld(q_);
var yc, Wp;
function K_() {
  if (Wp) return yc;
  Wp = 1;
  const e = fb();
  return yc = (i, n, a = !1) => {
    if (i instanceof e)
      return i;
    try {
      return new e(i, n);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, yc;
}
var _c, Yp;
function G_() {
  if (Yp) return _c;
  Yp = 1;
  const e = K_();
  return _c = (i, n) => {
    const a = e(i, n);
    return a ? a.version : null;
  }, _c;
}
var W_ = G_();
const Y_ = /* @__PURE__ */ Ld(W_);
class Z_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Y_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Gp(t.getVersion()) !== Gp(this.getVersion()) && console.warn(
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
class X_ {
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
let ps = null;
function Pd() {
  return ps !== null ? ps : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? ps = new Z_(window._nc_event_bus) : ps = window._nc_event_bus = new X_(), ps);
}
function pb(e, t) {
  Pd().subscribe(e, t);
}
function J_(e, t) {
  Pd().unsubscribe(e, t);
}
function Rn(e, ...t) {
  Pd().emit(e, ...t);
}
const hb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Q_ = Object.prototype.toString, e0 = (e) => Q_.call(e) === "[object Object]", mr = () => {
}, t0 = /* @__PURE__ */ i0();
function i0() {
  var e, t, i;
  return hb && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function wc(e) {
  return Array.isArray(e) ? e : [e];
}
function n0(e, t, i) {
  return qe(e, t, {
    ...i,
    immediate: !0
  });
}
const vb = hb ? window : void 0;
function ys(e) {
  var t;
  const i = Nn(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function Or(...e) {
  const t = (n, a, r, s) => (n.addEventListener(a, r, s), () => n.removeEventListener(a, r, s)), i = j(() => {
    const n = wc(Nn(e[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return n0(() => {
    var n, a;
    return [
      (n = (a = i.value) === null || a === void 0 ? void 0 : a.map((r) => ys(r))) !== null && n !== void 0 ? n : [vb].filter((r) => r != null),
      wc(Nn(i.value ? e[1] : e[0])),
      wc(u(i.value ? e[2] : e[1])),
      Nn(i.value ? e[3] : e[2])
    ];
  }, ([n, a, r, s], d, c) => {
    if (!n?.length || !a?.length || !r?.length) return;
    const g = e0(s) ? { ...s } : s, h = n.flatMap((y) => a.flatMap((m) => r.map((k) => t(y, m, k, g))));
    c(() => {
      h.forEach((y) => y());
    });
  }, { flush: "post" });
}
let Zp = !1;
function Xp(e, t, i = {}) {
  const { window: n = vb, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: d = !1 } = i;
  if (!n) return d ? {
    stop: mr,
    cancel: mr,
    trigger: mr
  } : mr;
  if (t0 && !Zp) {
    Zp = !0;
    const $ = { passive: !0 };
    Array.from(n.document.body.children).forEach((R) => R.addEventListener("click", mr, $)), n.document.documentElement.addEventListener("click", mr, $);
  }
  let c = !0;
  const g = ($) => Nn(a).some((R) => {
    if (typeof R == "string") return Array.from(n.document.querySelectorAll(R)).some((L) => L === $.target || $.composedPath().includes(L));
    {
      const L = ys(R);
      return L && ($.target === L || $.composedPath().includes(L));
    }
  });
  function h($) {
    const R = Nn($);
    return R && R.$.subTree.shapeFlag === 16;
  }
  function y($, R) {
    const L = Nn($), P = L.$.subTree && L.$.subTree.children;
    return P == null || !Array.isArray(P) ? !1 : P.some((N) => N.el === R.target || R.composedPath().includes(N.el));
  }
  const m = ($) => {
    const R = ys(e);
    if ($.target != null && !(!(R instanceof Element) && h(e) && y(e, $)) && !(!R || R === $.target || $.composedPath().includes(R))) {
      if ("detail" in $ && $.detail === 0 && (c = !g($)), !c) {
        c = !0;
        return;
      }
      t($);
    }
  };
  let k = !1;
  const A = [
    Or(n, "click", ($) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), m($));
    }, {
      passive: !0,
      capture: r
    }),
    Or(n, "pointerdown", ($) => {
      const R = ys(e);
      c = !g($) && !!(R && !$.composedPath().includes(R));
    }, { passive: !0 }),
    s && Or(n, "blur", ($) => {
      setTimeout(() => {
        const R = ys(e);
        let L = n.document.activeElement;
        for (; L?.shadowRoot; ) L = L.shadowRoot.activeElement;
        L?.tagName === "IFRAME" && !R?.contains(n.document.activeElement) && t($);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), C = () => A.forEach(($) => $());
  return d ? {
    stop: C,
    cancel: () => {
      c = !1;
    },
    trigger: ($) => {
      c = !0, m($), c = !1;
    }
  } : C;
}
function a0(e, t = {}) {
  const { threshold: i = 50, onSwipe: n, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, d = /* @__PURE__ */ Ft({
    x: 0,
    y: 0
  }), c = /* @__PURE__ */ Ft({
    x: 0,
    y: 0
  }), g = j(() => d.x - c.x), h = j(() => d.y - c.y), { max: y, abs: m } = Math, k = j(() => y(m(g.value), m(h.value)) >= i), A = /* @__PURE__ */ av(!1), C = j(() => k.value ? m(g.value) > m(h.value) ? g.value > 0 ? "left" : "right" : h.value > 0 ? "up" : "down" : "none"), $ = (E) => [E.touches[0].clientX, E.touches[0].clientY], R = (E, H) => {
    d.x = E, d.y = H;
  }, L = (E, H) => {
    c.x = E, c.y = H;
  }, P = {
    passive: s,
    capture: !s
  }, N = (E) => {
    A.value && a?.(E, C.value), A.value = !1;
  }, pe = [
    Or(e, "touchstart", (E) => {
      if (E.touches.length !== 1) return;
      const [H, K] = $(E);
      R(H, K), L(H, K), r?.(E);
    }, P),
    Or(e, "touchmove", (E) => {
      if (E.touches.length !== 1) return;
      const [H, K] = $(E);
      L(H, K), P.capture && !P.passive && Math.abs(g.value) > Math.abs(h.value) && E.preventDefault(), !A.value && k.value && (A.value = !0), A.value && n?.(E);
    }, P),
    Or(e, ["touchend", "touchcancel"], N, P)
  ];
  return {
    isSwiping: A,
    direction: C,
    coordsStart: d,
    coordsEnd: c,
    lengthX: g,
    lengthY: h,
    stop: () => pe.forEach((E) => E())
  };
}
var r0 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let i = t, n = e, a = Py(), r = Ly(), s = /* @__PURE__ */ G([]), d = j(() => s.value.reduce((ee, S) => (ee[~~S.id] = S) && ee, {})), c = j(() => s.value.length), g = /* @__PURE__ */ G(null), h = /* @__PURE__ */ G(!1), y = /* @__PURE__ */ G({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), m = /* @__PURE__ */ G({
      splitter: null,
      timeoutId: null
    }), k = j(() => ({
      [`splitpanes splitpanes--${n.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": y.value.dragging,
      "splitpanes--ready": h.value
    })), A = () => {
      document.addEventListener("mousemove", R, { passive: !1 }), document.addEventListener("mouseup", L), "ontouchstart" in window && (document.addEventListener("touchmove", R, { passive: !1 }), document.addEventListener("touchend", L));
    }, C = () => {
      document.removeEventListener("mousemove", R, { passive: !1 }), document.removeEventListener("mouseup", L), "ontouchstart" in window && (document.removeEventListener("touchmove", R, { passive: !1 }), document.removeEventListener("touchend", L));
    }, $ = (ee, S) => {
      let O = ee.target.closest(".splitpanes__splitter");
      if (O) {
        let { left: D, top: B } = O.getBoundingClientRect(), { clientX: U, clientY: X } = "ontouchstart" in window && ee.touches ? ee.touches[0] : ee;
        y.value.cursorOffset = n.horizontal ? X - B : U - D;
      }
      A(), y.value.mouseDown = !0, y.value.activeSplitter = S, document.documentElement.style.cursor = n.horizontal ? "row-resize" : "col-resize";
    }, R = (ee) => {
      y.value.mouseDown && (ee.preventDefault(), y.value.dragging || (window.getSelection()?.removeAllRanges(), y.value.dragging = !0), requestAnimationFrame(() => {
        K(E(ee)), De("resize", { event: ee }, !0);
      }));
    }, L = (ee) => {
      y.value.dragging && (window.getSelection()?.removeAllRanges(), De("resized", { event: ee }, !0)), y.value.mouseDown = !1, y.value.activeSplitter = null, setTimeout(() => {
        y.value.dragging = !1, C(), document.documentElement.style.cursor = "";
      }, 100);
    }, P = (ee, S) => {
      "ontouchstart" in window && (ee.preventDefault(), m.value.splitter === S ? (clearTimeout(m.value.timeoutId), m.value.timeoutId = null, N(ee, S), m.value.splitter = null) : (m.value.splitter = S, m.value.timeoutId = setTimeout(() => m.value.splitter = null, 500))), y.value.dragging || De("splitter-click", {
        event: ee,
        index: S
      }, !0);
    }, N = (ee, S) => {
      if (De("splitter-dblclick", {
        event: ee,
        index: S
      }, !0), n.maximizePanes) {
        let O = 0;
        s.value = s.value.map((D, B) => (D.size = B === S ? D.max : D.min, B !== S && (O += D.min), D)), s.value[S].size -= O, De("pane-maximize", {
          event: ee,
          index: S,
          pane: s.value[S]
        }), De("resized", {
          event: ee,
          index: S
        }, !0);
      }
    }, pe = (ee, S) => {
      if (!n.keyboardStep) return;
      let O = n.horizontal ? ee.key === "ArrowDown" : ee.key === "ArrowRight", D = n.horizontal ? ee.key === "ArrowUp" : ee.key === "ArrowLeft";
      if (!O && !D) return;
      ee.preventDefault(), y.value.activeSplitter = S;
      let B = (O ? 1 : -1) * (n.rtl && !n.horizontal ? -1 : 1), U = z(S) + s.value[S].size;
      Z(Math.min(Math.max(U + B * n.keyboardStep, 0), 100)), De("resize", { event: ee }, !0), De("resized", { event: ee }, !0), y.value.activeSplitter = null;
    }, Q = (ee, S) => {
      let O = d.value[S];
      O && De("pane-click", {
        event: ee,
        index: O.index,
        pane: O
      });
    }, E = (ee) => {
      let S = g.value.getBoundingClientRect(), { clientX: O, clientY: D } = "ontouchstart" in window && ee.touches ? ee.touches[0] : ee;
      return {
        x: O - (n.horizontal ? 0 : y.value.cursorOffset) - S.left,
        y: D - (n.horizontal ? y.value.cursorOffset : 0) - S.top
      };
    }, H = (ee) => {
      ee = ee[n.horizontal ? "y" : "x"];
      let S = g.value[n.horizontal ? "clientHeight" : "clientWidth"];
      return n.rtl && !n.horizontal && (ee = S - ee), ee * 100 / S;
    }, K = (ee) => {
      Z(H(ee));
    }, Z = (ee) => {
      let S = y.value.activeSplitter;
      if (S === null || S >= s.value.length - 1) return;
      let O = {
        prevPanesSize: z(S),
        nextPanesSize: q(S),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, D = 0 + (n.pushOtherPanes ? 0 : O.prevPanesSize), B = 100 - (n.pushOtherPanes ? 0 : O.nextPanesSize);
      ee = Math.max(Math.min(ee, B), D);
      let U = [S, S + 1], X = s.value[U[0]] || null, te = s.value[U[1]] || null, re = X !== null && X.max < 100 && ee >= X.max + O.prevPanesSize, de = te !== null && te.max < 100 && ee <= 100 - (te.max + q(S + 1));
      if (re || de) {
        re ? (X.size = X.max, te.size = Math.min(Math.max(100 - X.max - O.prevPanesSize - O.nextPanesSize, te.min), te.max)) : (X.size = Math.min(Math.max(100 - te.max - O.prevPanesSize - q(S + 1), X.min), X.max), te.size = te.max);
        return;
      }
      if (n.pushOtherPanes) {
        let se = ne(O, ee);
        if (!se) return;
        ({ sums: O, panesToResize: U } = se), X = s.value[U[0]] || null, te = s.value[U[1]] || null;
      }
      X !== null && (X.size = Math.min(Math.max(ee - O.prevPanesSize - O.prevReachedMinPanes, X.min), X.max)), te !== null && (te.size = Math.min(Math.max(100 - ee - O.nextPanesSize - O.nextReachedMinPanes, te.min), te.max));
    }, ne = (ee, S) => {
      let O = y.value.activeSplitter, D = [O, O + 1];
      if (S < ee.prevPanesSize + s.value[D[0]].min) {
        if (D[0] = I(O).index, ee.prevReachedMinPanes = 0, D[0] < O && s.value.forEach((B, U) => {
          U > D[0] && U <= O && (B.size = B.min, ee.prevReachedMinPanes += B.min);
        }), D[0] === void 0) return ee.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((B, U) => {
          U > 0 && U <= O && (B.size = B.min, ee.prevReachedMinPanes += B.min);
        }), s.value[D[1]].size = 100 - ee.prevReachedMinPanes - s.value[0].min - ee.prevPanesSize - ee.nextPanesSize, null;
        ee.prevPanesSize = z(D[0]);
      }
      return S > 100 - ee.nextPanesSize - s.value[D[1]].min && (D[1] = V(O).index, ee.nextReachedMinPanes = 0, D[1] > O + 1 && s.value.forEach((B, U) => {
        U > O && U < D[1] && (B.size = B.min, ee.nextReachedMinPanes += B.min);
      }), ee.nextPanesSize = D[1] === void 0 ? 0 : q(D[1] - 1), D[1] === void 0) ? (ee.nextReachedMinPanes = 0, s.value.forEach((B, U) => {
        U >= O + 1 && (B.size = B.min, ee.nextReachedMinPanes += B.min);
      }), D[0] !== void 0 && (s.value[D[0]].size = 100 - ee.prevPanesSize - q(D[0] - 1)), null) : {
        sums: ee,
        panesToResize: D
      };
    }, z = (ee) => s.value.reduce((S, O, D) => S + (D < ee ? O.size : 0), 0), q = (ee) => s.value.reduce((S, O, D) => S + (D > ee + 1 ? O.size : 0), 0), I = (ee) => [...s.value].reverse().find((S) => S.index < ee && S.size > S.min) || {}, V = (ee) => s.value.find((S) => S.index > ee + 1 && S.size > S.min) || {}, J = () => {
      let ee = Array.from(g.value?.children || []);
      for (let S of ee) {
        let O = S.classList.contains("splitpanes__pane"), D = S.classList.contains("splitpanes__splitter");
        !O && !D && (S.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ie = (ee, S, O = !1) => {
      let D = ee - 1, B = document.createElement("div");
      B.classList.add("splitpanes__splitter"), O || (B.onmousedown = (U) => $(U, D), typeof window < "u" && "ontouchstart" in window && (B.ontouchstart = (U) => $(U, D)), B.onclick = (U) => P(U, D + 1), n.keyboardStep && (B.setAttribute("tabindex", "0"), B.setAttribute("role", "separator"), B.setAttribute("aria-orientation", n.horizontal ? "horizontal" : "vertical"), B.onkeydown = (U) => pe(U, D))), B.ondblclick = (U) => N(U, D + 1), S.parentNode.insertBefore(B, S);
    }, Y = (ee) => {
      ee.onmousedown = null, ee.onclick = null, ee.ondblclick = null, ee.onkeydown = null, ee.remove();
    }, fe = () => {
      let ee = Array.from(g.value?.children || []);
      for (let O of ee) O.className.includes("splitpanes__splitter") && Y(O);
      let S = 0;
      for (let O of ee) O.className.includes("splitpanes__pane") && (!S && n.firstSplitter ? ie(S, O, !0) : S && ie(S, O), S++);
    }, ke = ({ uid: ee, ...S }) => {
      let O = d.value[ee];
      for (let [D, B] of Object.entries(S)) O[D] = B;
    }, Le = !1, Oe = (ee) => {
      let S = -1;
      Array.from(g.value?.children || []).some((O) => (O.className.includes("splitpanes__pane") && S++, O.isSameNode(ee.el))), s.value.splice(S, 0, {
        ...ee,
        index: S
      }), s.value.forEach((O, D) => O.index = D), h.value && !Le && (Le = !0, Nt(() => {
        fe(), Ze({ addedPane: s.value[S] }), De("pane-add", { pane: s.value[S] }), Le = !1;
      }));
    }, Me = (ee) => {
      let S = s.value.findIndex((D) => D.id === ee);
      s.value[S].el = null;
      let O = s.value.splice(S, 1)[0];
      s.value.forEach((D, B) => D.index = B), Nt(() => {
        fe(), De("pane-remove", { pane: O }), Ze({ removedPane: {
          ...O
        } });
      });
    }, Ze = (ee = {}) => {
      !ee.addedPane && !ee.removedPane ? ye() : s.value.some((S) => S.givenSize !== null || S.min || S.max < 100) ? Ie(ee) : ft(), h.value && De("resized");
    }, ft = () => {
      let ee = 100 / c.value, S = 100, O = [], D = [];
      for (let B of s.value) B.size = Math.max(Math.min(ee, B.max), B.min), S -= B.size, B.size >= B.max && O.push(B.id), B.size <= B.min && D.push(B.id);
      Math.abs(S) > 0.1 && ge(S, O, D);
    }, ye = () => {
      let ee = 100, S = [], O = [], D = 0;
      for (let U of s.value) ee -= U.size, U.givenSize !== null && D++, U.size >= U.max && S.push(U.id), U.size <= U.min && O.push(U.id);
      let B = 100;
      if (ee > 0.1) {
        for (let U of s.value) U.givenSize === null && (U.size = Math.max(Math.min(ee / (c.value - D), U.max), U.min)), B -= U.size;
        B > 0.1 && ge(B, S, O);
      }
    }, Ie = ({ addedPane: ee, removedPane: S } = {}) => {
      let O = s.value.reduce((re, de) => re + (de.givenSize === null ? 0 : de.givenSize), 0), D = s.value.filter((re) => re.givenSize === null).length, B = D > 0 ? (100 - O) / D : 0, U = 0, X = [], te = [];
      for (let re of s.value) U -= re.size, re.size >= re.max && X.push(re.id), re.size <= re.min && te.push(re.id);
      if (!(Math.abs(U) < 0.1)) {
        U = 100;
        for (let re of s.value) re.givenSize === null && (re.size = Math.max(Math.min(B, re.max), re.min)), U -= re.size, re.size >= re.max && X.push(re.id), re.size <= re.min && te.push(re.id);
        Math.abs(U) > 0.1 && ge(U, X, te);
      }
    }, ge = (ee, S, O) => {
      let D;
      D = ee > 0 ? ee / (c.value - S.length) : ee / (c.value - O.length), s.value.forEach((B, U) => {
        if (ee > 0 && !S.includes(B.id)) {
          let X = Math.max(Math.min(B.size + D, B.max), B.min), te = X - B.size;
          ee -= te, B.size = X;
        } else if (!O.includes(B.id)) {
          let X = Math.max(Math.min(B.size + D, B.max), B.min), te = X - B.size;
          ee -= te, B.size = X;
        }
      }), Math.abs(ee) > 0.1 && h.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, De = (ee, S = void 0, O = !1) => {
      let D = S?.index ?? y.value.activeSplitter ?? null;
      i(ee, {
        ...S,
        ...D !== null && { index: D },
        ...O && D !== null && {
          prevPane: s.value[D - +!!n.firstSplitter],
          nextPane: s.value[D + +!n.firstSplitter]
        },
        panes: s.value.map((B) => ({
          min: B.min,
          max: B.max,
          size: B.size
        }))
      });
    };
    qe(() => n.firstSplitter, () => fe()), qe(() => n.horizontal, (ee) => Nt(() => {
      i("direction-changed", {
        horizontal: ee,
        panes: s.value.map((S) => ({
          min: S.min,
          max: S.max,
          size: S.size
        }))
      });
    })), $t(() => {
      J(), fe(), Ze(), De("ready"), h.value = !0;
    }), ki(() => h.value = !1);
    let ut = () => {
      let { class: ee, ...S } = a;
      return di("div", {
        ref: g,
        class: [k.value, ee],
        ...S
      }, r.default?.());
    };
    return Oi("panes", s), Oi("indexedPanes", d), Oi("horizontal", j(() => n.horizontal)), Oi("requestUpdate", ke), Oi("onPaneAdd", Oe), Oi("onPaneRemove", Me), Oi("onPaneClick", Q), (ee, S) => (p(), Pe(xd(ut)));
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
    let t = e, i = Zt("requestUpdate"), n = Zt("onPaneAdd"), a = Zt("horizontal"), r = Zt("onPaneRemove"), s = Zt("onPaneClick"), d = Sa()?.uid, c = Zt("indexedPanes"), g = j(() => c.value[d]), h = /* @__PURE__ */ G(null), y = j(() => {
      let C = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(C, k.value), m.value);
    }), m = j(() => {
      let C = parseFloat(t.minSize);
      return isNaN(C) ? 0 : C;
    }), k = j(() => {
      let C = parseFloat(t.maxSize);
      return isNaN(C) ? 100 : C;
    }), A = j(() => {
      let C = g.value?.size ?? (t.size === void 0 ? void 0 : y.value);
      return C === void 0 ? "" : `${a.value ? "height" : "width"}: ${C}%`;
    });
    return qe(() => y.value, (C) => i({
      uid: d,
      size: C
    })), qe(() => m.value, (C) => i({
      uid: d,
      min: C
    })), qe(() => k.value, (C) => i({
      uid: d,
      max: C
    })), $t(() => {
      n({
        id: d,
        el: h.value,
        min: m.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : y.value,
        size: y.value
      });
    }), ki(() => r(d)), (C, $) => (p(), v("div", {
      ref_key: "paneEl",
      ref: h,
      class: "splitpanes__pane",
      onClick: $[0] ||= (R) => u(s)(R, C._.uid),
      style: pi(A.value)
    }, [Be(C.$slots, "default")], 4));
  }
}, l0 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", o0 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", u0 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", c0 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Dd = 1024, bb = Dd / 2, bo = (e) => document.documentElement.clientWidth < e, gb = /* @__PURE__ */ G(bo(Dd)), mb = /* @__PURE__ */ G(bo(bb));
window.addEventListener("resize", () => {
  gb.value = bo(Dd), mb.value = bo(bb);
}, { passive: !0 });
function cl() {
  return /* @__PURE__ */ zs(gb);
}
function d0() {
  return /* @__PURE__ */ zs(mb);
}
class f0 {
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
    return xi("", t, i, n, a, { bundle: this.bundle });
  }
}
class p0 {
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
    return this.setLanguage(ul().replace("-", "_"));
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
    const t = new f0((i) => F_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function h0() {
  return new p0();
}
const yb = h0().detectLanguage().build(), Rt = (...e) => yb.gettext(...e);
function Ca(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: i, t: n } of t) {
        if (i !== ul() || !n)
          continue;
        const a = Object.fromEntries(Object.entries(n).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        yb.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const v0 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], b0 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], g0 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], m0 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], y0 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], _0 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], w0 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], k0 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], S0 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const C0 = /* @__PURE__ */ Symbol(""), [T0] = window.OC?.config?.version?.split(".") ?? [], _b = Number.parseInt(T0 ?? "35"), A0 = _b < 32, Ta = _b < 34, E0 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function x0() {
  return Zt(E0, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const ot = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, $0 = { class: "button-vue__wrapper" }, O0 = { class: "button-vue__icon" }, N0 = { class: "button-vue__text" }, I0 = /* @__PURE__ */ Bt({
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
    const i = e, n = t, { formBoxItemClass: a } = x0(), r = Zt(C0, null) !== null, s = j(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), d = j(() => s.value === "button" && typeof i.pressed == "boolean"), c = j(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), g = j(() => c.value.startsWith("tertiary")), h = j(() => i.alignment.split("-")[0]), y = j(() => i.alignment.includes("-")), m = Zt("NcPopover:trigger:attrs", () => ({}), !1), k = j(() => m()), A = j(() => {
      if (s.value === "RouterLink")
        return {
          to: i.to,
          activeClass: "active"
        };
      if (s.value === "a")
        return {
          href: i.href || "#",
          target: i.target,
          rel: "nofollow noreferrer noopener",
          download: i.download || void 0
        };
      if (s.value === "button")
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
    return ($, R) => (p(), Pe(xd(s.value), ei({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${c.value}`]: c.value,
          "button-vue--tertiary": g.value,
          "button-vue--wide": e.wide,
          [`button-vue--${h.value}`]: h.value !== "center",
          "button-vue--reverse": y.value,
          "button-vue--legacy": u(A0),
          "button-vue--legacy34": u(Ta)
        },
        u(a)
      ]],
      "aria-label": e.ariaLabel
    }, A.value, { onClick: C }), {
      default: we(() => [
        l("span", $0, [
          l("span", O0, [
            Be($.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", N0, [
            Be($.$slots, "default", {}, () => [
              ae(o(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), ln = /* @__PURE__ */ ot(I0, [["__scopeId", "data-v-47ce59a3"]]), R0 = ["aria-hidden", "aria-label"], L0 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, P0 = ["d"], D0 = ["innerHTML"], F0 = /* @__PURE__ */ Bt({
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
    $1((a) => ({
      fb515064: i.value
    }));
    const t = e, i = j(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = j(() => {
      if (!t.svg || t.path)
        return;
      const a = sb.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (p(), v("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ce(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      n.value ? (p(), v("span", {
        key: 1,
        innerHTML: n.value
      }, null, 8, D0)) : (p(), v("svg", L0, [
        l("path", { d: e.path }, null, 8, P0)
      ]))
    ], 10, R0));
  }
}), gu = /* @__PURE__ */ ot(F0, [["__scopeId", "data-v-aaedb1c3"]]);
U0();
function M0(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), Rn("csrf-token-update", { token: e, _internal: !0 }));
}
function U0() {
  pb("csrf-token-update", ({ token: e, _internal: t }) => {
    t || M0(e);
  });
}
ub("public").persist().build();
let yr;
function Jp(e, t) {
  return e ? e.getAttribute(t) : null;
}
function z0() {
  if (yr !== void 0)
    return yr;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Jp(e, "data-user");
  return t === null ? (yr = null, yr) : (yr = {
    uid: t,
    displayName: Jp(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, yr);
}
var At = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(At || {});
class j0 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, n) {
    let a = "[" + At[i].toUpperCase() + "] ";
    return n && n.app && (a += n.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), i === At.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, i, n) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && n?.error === void 0 && (n.error = i), t) {
        case At.Debug:
          console.debug(this.formatMessage(i, At.Debug, n), n);
          break;
        case At.Info:
          console.info(this.formatMessage(i, At.Info, n), n);
          break;
        case At.Warn:
          console.warn(this.formatMessage(i, At.Warn, n), n);
          break;
        case At.Error:
          console.error(this.formatMessage(i, At.Error, n), n);
          break;
        case At.Fatal:
        default:
          console.error(this.formatMessage(i, At.Fatal, n), n);
          break;
      }
  }
  debug(t, i) {
    this.log(At.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log(At.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log(At.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log(At.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log(At.Fatal, t, Object.assign({}, this.context, i));
  }
}
function B0(e) {
  return new j0(e);
}
class H0 {
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
    const t = z0();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, i = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? At.Warn, window._oc_debug && (t.context.level = At.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
    };
    return i(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function V0() {
  return new H0(B0);
}
const ar = V0().detectUser().setApp("@nextcloud/vue").build();
function q0(e) {
  let t = !1, i;
  return (...n) => (t || (t = !0, i = e(...n)), i);
}
let wb = "missing-app-name";
try {
  wb = "library";
} catch {
  ar.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const K0 = wb;
let G0 = "";
try {
  G0 = "0.2.0-beta.2";
} catch {
  ar.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function kb() {
  return Zt("appName", K0);
}
const W0 = q0(() => {
  const e = po("core", "apps", []), t = kb();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), Wc = D_();
Ca(w0);
const Y0 = /* @__PURE__ */ Bt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = cl();
    qe(t, i), $t(() => {
      i(t.value);
    }), ki(() => {
      t.value && i(!1);
    });
    function i(n = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = n ? "none" : "", n === !0 && Rn("toggle-navigation", { open: !1 }));
    }
    return (n, a) => (p(), Pe(u(ln), {
      "aria-label": u(Rt)("Go back to the list"),
      class: Ce(["app-details-toggle", { "app-details-toggle--mobile": u(t) }]),
      title: u(Rt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: we(() => [
        ve(u(gu), {
          directional: "",
          path: u(l0)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), Z0 = /* @__PURE__ */ ot(Y0, [["__scopeId", "data-v-a28923a1"]]), Qp = ub("nextcloud").persist().build(), X0 = z_().theming?.name ?? "Nextcloud", J0 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: Z0,
    Pane: s0,
    Splitpanes: r0
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
      appName: kb(),
      localizedAppName: W0(),
      isMobile: cl(),
      isRtl: Wc
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
        return ar.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(X0), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = a0(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? Rn("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && Rn("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      Qp.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ar.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Qp.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ar.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, Q0 = {
  key: 0,
  class: "hidden-visually"
}, ew = { class: "app-content-wrapper__list" }, tw = {
  key: 1,
  class: "app-content-wrapper"
};
function iw(e, t, i, n, a, r) {
  const s = Ye("NcAppContentDetailsToggle"), d = Ye("Pane"), c = Ye("Splitpanes");
  return p(), v("main", {
    id: "app-content-vue",
    class: Ce(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (p(), v("h1", Q0, o(i.pageHeading), 1)) : x("", !0),
    e.$slots.list ? (p(), v(W, { key: 1 }, [
      n.isMobile || i.layout === "no-split" ? (p(), v("div", {
        key: 0,
        class: Ce(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": i.showDetails,
          "app-content-wrapper--show-list": !i.showDetails,
          "app-content-wrapper--mobile": n.isMobile
        }])
      }, [
        i.showDetails ? (p(), Pe(s, {
          key: 0,
          onClick: Ae(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : x("", !0),
        me(l("div", ew, [
          Be(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [nr, !i.showDetails]
        ]),
        i.showDetails ? Be(e.$slots, "default", { key: 1 }, void 0, !0) : x("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (p(), v("div", tw, [
        ve(c, {
          horizontal: i.layout === "horizontal-split",
          class: Ce(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: n.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: we(() => [
            ve(d, {
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
            ve(d, {
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
      ])) : x("", !0)
    ], 64)) : x("", !0),
    e.$slots.list ? x("", !0) : Be(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const nw = /* @__PURE__ */ ot(J0, [["render", iw], ["__scopeId", "data-v-51427d61"]]);
var Sb = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], go = /* @__PURE__ */ Sb.join(","), Cb = typeof Element > "u", sr = Cb ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, mo = !Cb && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, yo = function(t, i) {
  var n;
  i === void 0 && (i = !0);
  var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), r = a === "" || a === "true", s = r || i && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : yo(t.parentNode));
  return s;
}, aw = function(t) {
  var i, n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return n === "" || n === "true";
}, Tb = function(t, i, n) {
  if (yo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(go));
  return i && sr.call(t, go) && a.unshift(t), a = a.filter(n), a;
}, _o = function(t, i, n) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!yo(s, !1))
      if (s.tagName === "SLOT") {
        var d = s.assignedElements(), c = d.length ? d : s.children, g = _o(c, !0, n);
        n.flatten ? a.push.apply(a, g) : a.push({
          scopeParent: s,
          candidates: g
        });
      } else {
        var h = sr.call(s, go);
        h && n.filter(s) && (i || !t.includes(s)) && a.push(s);
        var y = s.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(s), m = !yo(y, !1) && (!n.shadowRootFilter || n.shadowRootFilter(s));
        if (y && m) {
          var k = _o(y === !0 ? s.children : y.children, !0, n);
          n.flatten ? a.push.apply(a, k) : a.push({
            scopeParent: s,
            candidates: k
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Ab = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Ja = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || aw(t)) && !Ab(t) ? 0 : t.tabIndex;
}, rw = function(t, i) {
  var n = Ja(t);
  return n < 0 && i && !Ab(t) ? 0 : n;
}, sw = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, Eb = function(t) {
  return t.tagName === "INPUT";
}, lw = function(t) {
  return Eb(t) && t.type === "hidden";
}, ow = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return i;
}, uw = function(t, i) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === i)
      return t[n];
}, cw = function(t) {
  if (!t.name)
    return !0;
  var i = t.form || mo(t), n = function(d) {
    return i.querySelectorAll('input[type="radio"][name="' + d + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = n(window.CSS.escape(t.name));
  else
    try {
      a = n(t.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var r = uw(a, t.form);
  return !r || r === t;
}, dw = function(t) {
  return Eb(t) && t.type === "radio";
}, fw = function(t) {
  return dw(t) && !cw(t);
}, pw = function(t) {
  var i, n = t && mo(t), a = (i = n) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (n && n !== t) {
    var s, d, c;
    for (r = !!((s = a) !== null && s !== void 0 && (d = s.ownerDocument) !== null && d !== void 0 && d.contains(a) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !r && a; ) {
      var g, h, y;
      n = mo(a), a = (g = n) === null || g === void 0 ? void 0 : g.host, r = !!((h = a) !== null && h !== void 0 && (y = h.ownerDocument) !== null && y !== void 0 && y.contains(a));
    }
  }
  return r;
}, eh = function(t) {
  var i = t.getBoundingClientRect(), n = i.width, a = i.height;
  return n === 0 && a === 0;
}, hw = function(t, i) {
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
  var s = getComputedStyle(t), d = s.visibility;
  if (d === "hidden" || d === "collapse")
    return !0;
  var c = sr.call(t, "details>summary:first-of-type"), g = c ? t.parentElement : t;
  if (sr.call(g, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof a == "function") {
      for (var h = t; t; ) {
        var y = t.parentElement, m = mo(t);
        if (y && !y.shadowRoot && a(y) === !0)
          return eh(t);
        t.assignedSlot ? t = t.assignedSlot : !y && m !== t.ownerDocument ? t = m.host : t = y;
      }
      t = h;
    }
    if (pw(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return eh(t);
  return !1;
}, vw = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var i = t.parentElement; i; ) {
      if (i.tagName === "FIELDSET" && i.disabled) {
        for (var n = 0; n < i.children.length; n++) {
          var a = i.children.item(n);
          if (a.tagName === "LEGEND")
            return sr.call(i, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      i = i.parentElement;
    }
  return !1;
}, wo = function(t, i) {
  return !(i.disabled || lw(i) || hw(i, t) || // For a details element with a summary, the summary element gets the focus
  ow(i) || vw(i));
}, Yc = function(t, i) {
  return !(fw(i) || Ja(i) < 0 || !wo(t, i));
}, bw = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, xb = function(t) {
  var i = [], n = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, d = s ? a.scopeParent : a, c = rw(d, s), g = s ? xb(a.candidates) : d;
    c === 0 ? s ? i.push.apply(i, g) : i.push(d) : n.push({
      documentOrder: r,
      tabIndex: c,
      item: a,
      isScope: s,
      content: g
    });
  }), n.sort(sw).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(i);
}, gw = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = _o([t], i.includeContainer, {
    filter: Yc.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: bw
  }) : n = Tb(t, i.includeContainer, Yc.bind(null, i)), xb(n);
}, mw = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = _o([t], i.includeContainer, {
    filter: wo.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : n = Tb(t, i.includeContainer, wo.bind(null, i)), n;
}, _r = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return sr.call(t, go) === !1 ? !1 : Yc(i, t);
}, yw = /* @__PURE__ */ Sb.concat("iframe:not([inert]):not([inert] *)").join(","), kc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return sr.call(t, yw) === !1 ? !1 : wo(i, t);
};
function Zc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function _w(e) {
  if (Array.isArray(e)) return Zc(e);
}
function th(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!i) {
    if (Array.isArray(e) || (i = $b(e)) || t) {
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
  var r, s = !0, d = !1;
  return {
    s: function() {
      i = i.call(e);
    },
    n: function() {
      var c = i.next();
      return s = c.done, c;
    },
    e: function(c) {
      d = !0, r = c;
    },
    f: function() {
      try {
        s || i.return == null || i.return();
      } finally {
        if (d) throw r;
      }
    }
  };
}
function ww(e, t, i) {
  return (t = Aw(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function kw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Sw() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ih(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function nh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ih(Object(i), !0).forEach(function(n) {
      ww(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ih(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function Cw(e) {
  return _w(e) || kw(e) || $b(e) || Sw();
}
function Tw(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Aw(e) {
  var t = Tw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $b(e, t) {
  if (e) {
    if (typeof e == "string") return Zc(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Zc(e, t) : void 0;
  }
}
var $n = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var n = $n.getActiveTrap(t);
    i !== n && $n.pauseTrap(t);
    var a = t.indexOf(i);
    a === -1 || t.splice(a, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var n = t.indexOf(i);
    n !== -1 && t.splice(n, 1), $n.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = $n.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = $n.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
  }
}, Ew = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, xw = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Es = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, $w = function(t) {
  return Es(t) && !t.shiftKey;
}, Ow = function(t) {
  return Es(t) && t.shiftKey;
}, ah = function(t) {
  return setTimeout(t, 0);
}, hs = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, n) : t;
}, Bl = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Nw = [], Fd = function(t, i) {
  var n = i?.document || document, a = i?.trapStack || Nw, r = nh({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: $w,
    isKeyBackward: Ow
  }, i), s = {
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
  }, d, c = function(I, V, J) {
    return I && I[V] !== void 0 ? I[V] : r[J || V];
  }, g = function(I, V) {
    var J = typeof V?.composedPath == "function" ? V.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ie) {
      var Y = ie.container, fe = ie.tabbableNodes;
      return Y.contains(I) || J?.includes(Y) || fe.find(function(ke) {
        return ke === I;
      });
    });
  }, h = function(I) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, J = V.hasFallback, ie = J === void 0 ? !1 : J, Y = V.params, fe = Y === void 0 ? [] : Y, ke = r[I];
    if (typeof ke == "function" && (ke = ke.apply(void 0, Cw(fe))), ke === !0 && (ke = void 0), !ke) {
      if (ke === void 0 || ke === !1)
        return ke;
      throw new Error("`".concat(I, "` was specified but was not a node, or did not return a node"));
    }
    var Le = ke;
    if (typeof ke == "string") {
      try {
        Le = n.querySelector(ke);
      } catch (Oe) {
        throw new Error("`".concat(I, '` appears to be an invalid selector; error="').concat(Oe.message, '"'));
      }
      if (!Le && !ie)
        throw new Error("`".concat(I, "` as selector refers to no known node"));
    }
    return Le;
  }, y = function(I) {
    var V = I.activeElement;
    return V ? V.shadowRoot && V.shadowRoot.activeElement !== null ? y(V.shadowRoot) : V : null;
  }, m = function() {
    var I = h("initialFocus", {
      hasFallback: !0
    });
    if (I === !1)
      return !1;
    if (I === void 0 || I && !kc(I, r.tabbableOptions)) {
      var V = y(n);
      if (g(V) >= 0)
        I = V;
      else {
        var J = s.tabbableGroups[0], ie = J && J.firstTabbableNode;
        I = ie || h("fallbackFocus");
      }
    } else I === null && (I = h("fallbackFocus"));
    if (!I)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return I;
  }, k = function() {
    if (s.containerGroups = s.containers.map(function(I) {
      var V = gw(I, r.tabbableOptions), J = mw(I, r.tabbableOptions), ie = V.length > 0 ? V[0] : void 0, Y = V.length > 0 ? V[V.length - 1] : void 0, fe = J.find(function(Oe) {
        return _r(Oe);
      }), ke = J.slice().reverse().find(function(Oe) {
        return _r(Oe);
      }), Le = !!V.find(function(Oe) {
        return Ja(Oe) > 0;
      });
      return {
        container: I,
        tabbableNodes: V,
        focusableNodes: J,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Le,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ie,
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
        firstDomTabbableNode: fe,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: ke,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Me) {
          var Ze = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ft = V.indexOf(Me);
          return ft < 0 ? Ze ? J.slice(J.indexOf(Me) + 1).find(function(ye) {
            return _r(ye);
          }) : J.slice(0, J.indexOf(Me)).reverse().find(function(ye) {
            return _r(ye);
          }) : V[ft + (Ze ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(I) {
      return I.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !h("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(I) {
      return I.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, A = function(I) {
    if (I !== !1 && I !== y(document)) {
      if (!I || !I.focus) {
        A(m());
        return;
      }
      I.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = I, Ew(I) && I.select();
    }
  }, C = function(I) {
    var V = h("setReturnFocus", {
      params: [I]
    });
    return V || (V === !1 ? !1 : I);
  }, $ = function(I) {
    var V = I.target, J = I.event, ie = I.isBackward, Y = ie === void 0 ? !1 : ie;
    V = V || Bl(J), k();
    var fe = null;
    if (s.tabbableGroups.length > 0) {
      var ke = g(V, J), Le = ke >= 0 ? s.containerGroups[ke] : void 0;
      if (ke < 0)
        Y ? fe = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : fe = s.tabbableGroups[0].firstTabbableNode;
      else if (Y) {
        var Oe = s.tabbableGroups.findIndex(function(ge) {
          var De = ge.firstTabbableNode;
          return V === De;
        });
        if (Oe < 0 && (Le.container === V || kc(V, r.tabbableOptions) && !_r(V, r.tabbableOptions) && !Le.nextTabbableNode(V, !1)) && (Oe = ke), Oe >= 0) {
          var Me = Oe === 0 ? s.tabbableGroups.length - 1 : Oe - 1, Ze = s.tabbableGroups[Me];
          fe = Ja(V) >= 0 ? Ze.lastTabbableNode : Ze.lastDomTabbableNode;
        } else Es(J) || (fe = Le.nextTabbableNode(V, !1));
      } else {
        var ft = s.tabbableGroups.findIndex(function(ge) {
          var De = ge.lastTabbableNode;
          return V === De;
        });
        if (ft < 0 && (Le.container === V || kc(V, r.tabbableOptions) && !_r(V, r.tabbableOptions) && !Le.nextTabbableNode(V)) && (ft = ke), ft >= 0) {
          var ye = ft === s.tabbableGroups.length - 1 ? 0 : ft + 1, Ie = s.tabbableGroups[ye];
          fe = Ja(V) >= 0 ? Ie.firstTabbableNode : Ie.firstDomTabbableNode;
        } else Es(J) || (fe = Le.nextTabbableNode(V));
      }
    } else
      fe = h("fallbackFocus");
    return fe;
  }, R = function(I) {
    var V = Bl(I);
    if (!(g(V, I) >= 0)) {
      if (hs(r.clickOutsideDeactivates, I)) {
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
      hs(r.allowOutsideClick, I) || I.preventDefault();
    }
  }, L = function(I) {
    var V = Bl(I), J = g(V, I) >= 0;
    if (J || V instanceof Document)
      J && (s.mostRecentlyFocusedNode = V);
    else {
      I.stopImmediatePropagation();
      var ie, Y = !0;
      if (s.mostRecentlyFocusedNode)
        if (Ja(s.mostRecentlyFocusedNode) > 0) {
          var fe = g(s.mostRecentlyFocusedNode), ke = s.containerGroups[fe].tabbableNodes;
          if (ke.length > 0) {
            var Le = ke.findIndex(function(Oe) {
              return Oe === s.mostRecentlyFocusedNode;
            });
            Le >= 0 && (r.isKeyForward(s.recentNavEvent) ? Le + 1 < ke.length && (ie = ke[Le + 1], Y = !1) : Le - 1 >= 0 && (ie = ke[Le - 1], Y = !1));
          }
        } else
          s.containerGroups.some(function(Oe) {
            return Oe.tabbableNodes.some(function(Me) {
              return Ja(Me) > 0;
            });
          }) || (Y = !1);
      else
        Y = !1;
      Y && (ie = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), A(ie || s.mostRecentlyFocusedNode || m());
    }
    s.recentNavEvent = void 0;
  }, P = function(I) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = I;
    var J = $({
      event: I,
      isBackward: V
    });
    J && (Es(I) && I.preventDefault(), A(J));
  }, N = function(I) {
    (r.isKeyForward(I) || r.isKeyBackward(I)) && P(I, r.isKeyBackward(I));
  }, pe = function(I) {
    xw(I) && hs(r.escapeDeactivates, I) !== !1 && (I.preventDefault(), d.deactivate());
  }, Q = function(I) {
    var V = Bl(I);
    g(V, I) >= 0 || hs(r.clickOutsideDeactivates, I) || hs(r.allowOutsideClick, I) || (I.preventDefault(), I.stopImmediatePropagation());
  }, E = function() {
    if (s.active) {
      $n.activateTrap(a, d);
      var I;
      return r.delayInitialFocus ? I = new Promise(function(V) {
        s.delayInitialFocusTimer = ah(function() {
          A(m()), V();
        });
      }) : A(m()), n.addEventListener("focusin", L, !0), n.addEventListener("mousedown", R, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", R, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", Q, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", N, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", pe), I;
    }
  }, H = function(I) {
    s.active && !s.paused && d._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var V = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), ie = th(I), Y;
    try {
      for (ie.s(); !(Y = ie.n()).done; ) {
        var fe = Y.value;
        V.add(fe);
        for (var ke = typeof ShadowRoot < "u" && fe.getRootNode() instanceof ShadowRoot, Le = fe; Le; ) {
          V.add(Le);
          var Oe = Le.parentElement, Me = [];
          Oe ? Me = Oe.children : !Oe && ke && (Me = Le.getRootNode().children, Oe = Le.getRootNode().host, ke = typeof ShadowRoot < "u" && Oe.getRootNode() instanceof ShadowRoot);
          var Ze = th(Me), ft;
          try {
            for (Ze.s(); !(ft = Ze.n()).done; ) {
              var ye = ft.value;
              J.add(ye);
            }
          } catch (Ie) {
            Ze.e(Ie);
          } finally {
            Ze.f();
          }
          Le = Oe;
        }
      }
    } catch (Ie) {
      ie.e(Ie);
    } finally {
      ie.f();
    }
    V.forEach(function(Ie) {
      J.delete(Ie);
    }), s.adjacentElements = J;
  }, K = function() {
    if (s.active)
      return n.removeEventListener("focusin", L, !0), n.removeEventListener("mousedown", R, !0), n.removeEventListener("touchstart", R, !0), n.removeEventListener("click", Q, !0), n.removeEventListener("keydown", N, !0), n.removeEventListener("keydown", pe), d;
  }, Z = function(I) {
    var V = s.mostRecentlyFocusedNode;
    if (V) {
      var J = I.some(function(Y) {
        var fe = Array.from(Y.removedNodes);
        return fe.some(function(ke) {
          return ke === V || typeof ke.contains == "function" && ke.contains(V);
        });
      });
      if (J && s.containers.some(function(Y) {
        return Y?.isConnected;
      })) {
        k();
        var ie = m();
        A(ie);
      }
    }
  }, ne = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Z) : void 0, z = function() {
    ne && (ne.disconnect(), s.active && !s.paused && s.containers.map(function(I) {
      ne.observe(I, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return d = {
    get active() {
      return s.active;
    },
    get paused() {
      return s.paused;
    },
    activate: function(I) {
      if (s.active)
        return this;
      var V = c(I, "onActivate"), J = c(I, "onPostActivate"), ie = c(I, "checkCanFocusTrap"), Y = $n.getActiveTrap(a), fe = !1;
      if (Y && !Y.paused) {
        var ke;
        (ke = Y._setSubtreeIsolation) === null || ke === void 0 || ke.call(Y, !1), fe = !0;
      }
      try {
        ie || k(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = y(n), V?.({
          trap: d
        });
        var Le = function() {
          ie && k();
          var Ze = function() {
            d._setSubtreeIsolation(!0), z(), J?.({
              trap: d
            });
          }, ft = E();
          ft ? ft.then(Ze) : Ze();
        };
        if (ie)
          return ie(s.containers.concat()).then(Le, Le), this;
        Le();
      } catch (Me) {
        if (Y === $n.getActiveTrap(a) && fe) {
          var Oe;
          (Oe = Y._setSubtreeIsolation) === null || Oe === void 0 || Oe.call(Y, !0);
        }
        throw Me;
      }
      return this;
    },
    deactivate: function(I) {
      if (!s.active)
        return this;
      var V = nh({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, I);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || d._setSubtreeIsolation(!1), s.alreadySilent.clear(), K(), s.active = !1, s.paused = !1, z(), $n.deactivateTrap(a, d);
      var J = c(V, "onDeactivate"), ie = c(V, "onPostDeactivate"), Y = c(V, "checkCanReturnFocus"), fe = c(V, "delayReturnFocus"), ke = c(V, "returnFocus", "returnFocusOnDeactivate");
      J?.({
        trap: d
      });
      var Le = function() {
        ke && A(C(s.nodeFocusedBeforeActivation)), ie?.({
          trap: d
        });
      }, Oe = function() {
        fe && ke ? ah(Le) : Le();
      };
      return ke && Y ? (Y(C(s.nodeFocusedBeforeActivation)).then(Oe, Oe), this) : (Oe(), this);
    },
    pause: function(I) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, I)) : this;
    },
    unpause: function(I) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, I)) : this;
    },
    updateContainerElements: function(I) {
      var V = [].concat(I).filter(Boolean);
      return s.containers = V.map(function(J) {
        return typeof J == "string" ? n.querySelector(J) : J;
      }), r.isolateSubtrees && H(s.containers), s.active && (k(), s.paused || d._setSubtreeIsolation(!0)), z(), this;
    }
  }, Object.defineProperties(d, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(I, V) {
        if (s.paused === I)
          return this;
        if (s.paused = I, I) {
          var J = c(V, "onPause"), ie = c(V, "onPostPause");
          J?.({
            trap: d
          }), K(), d._setSubtreeIsolation(!1), z(), ie?.({
            trap: d
          });
        } else {
          var Y = c(V, "onUnpause"), fe = c(V, "onPostUnpause");
          Y?.({
            trap: d
          });
          var ke = function() {
            k();
            var Oe = function() {
              d._setSubtreeIsolation(!0), z(), fe?.({
                trap: d
              });
            }, Me = E();
            Me ? Me.then(Oe) : Oe();
          };
          ke();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(I) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(V) {
          var J;
          I ? r.isolateSubtrees === "aria-hidden" ? ((V.ariaHidden === "true" || ((J = V.getAttribute("aria-hidden")) === null || J === void 0 ? void 0 : J.toLowerCase()) === "true") && s.alreadySilent.add(V), V.setAttribute("aria-hidden", "true")) : ((V.inert || V.hasAttribute("inert")) && s.alreadySilent.add(V), V.setAttribute("inert", !0)) : s.alreadySilent.has(V) || (r.isolateSubtrees === "aria-hidden" ? V.removeAttribute("aria-hidden") : V.removeAttribute("inert"));
        });
      }
    }
  }), d.updateContainerElements(t), d;
};
const Ob = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), Iw = /* @__PURE__ */ Bt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Ob]: {
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
function Rw(e, t, i, n, a, r) {
  return p(), v("ul", {
    ref: "list",
    class: Ce(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    l("div", {
      class: Ce(["app-navigation-list__highlight", {
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
const Nb = /* @__PURE__ */ ot(Iw, [["render", Rw], ["__scopeId", "data-v-3e73e246"]]);
function Zs() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Lw() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Zs()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Zs().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Ib = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Rb = /* @__PURE__ */ Symbol.for("NcContent:selector");
Ca(m0);
const Pw = { class: "app-navigation-toggle-wrapper" }, Dw = /* @__PURE__ */ Bt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = $v(e, "open"), i = j(() => t.value ? Rt("Close navigation") : Rt("Open navigation"));
    return (n, a) => (p(), v("div", Pw, [
      ve(u(ln), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: we(() => [
          ve(gu, {
            path: u(c0),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), Fw = /* @__PURE__ */ ot(Dw, [["__scopeId", "data-v-e8177cc7"]]), Mw = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], Uw = { class: "app-navigation__search" }, zw = /* @__PURE__ */ Bt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const n = Zt(
      Ib,
      () => g1(),
      !1
    ), a = Sy("appNavigationContainer"), r = cl(), s = /* @__PURE__ */ G(!r.value), d = j(() => r.value && s.value);
    py(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), qe(r, () => {
      s.value = !r.value;
    }), qe(d, () => {
      h();
    }), $t(() => {
      n(!0), pb("toggle-navigation", g), Rn("navigation-toggled", {
        open: s.value
      }), i = Fd(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), c(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Zs(),
        escapeDeactivates: !1
      }), h();
    }), sl(() => {
      n(!1), J_("toggle-navigation", g), i.deactivate();
    });
    function c(m) {
      if (s.value === m) {
        Rn("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = m === void 0 ? !s.value : m;
      const k = getComputedStyle(document.body), A = parseInt(k.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        Rn("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * A);
    }
    function g({ open: m }) {
      return c(m);
    }
    function h() {
      d.value ? i.activate() : i.deactivate();
    }
    function y() {
      r.value && c(!1);
    }
    return (m, k) => (p(), v("div", {
      ref: "appNavigationContainer",
      class: Ce(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": u(Ta)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: dt(y, ["esc"])
      }, [
        l("div", Uw, [
          Be(m.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: Ce(["app-navigation__body", { "app-navigation__body--no-list": !m.$slots.list }])
        }, [
          Be(m.$slots, "default", {}, void 0, !0)
        ], 2),
        m.$slots.list ? (p(), Pe(Nb, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: we(() => [
            Be(m.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : x("", !0),
        Be(m.$slots, "footer", {}, void 0, !0)
      ], 40, Mw),
      ve(Fw, {
        open: s.value,
        "onUpdate:open": c
      }, null, 8, ["open"])
    ], 2));
  }
}), jw = /* @__PURE__ */ ot(zw, [["__scopeId", "data-v-37908cd4"]]), Bw = {
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
}, Hw = ["aria-hidden", "aria-label"], Vw = ["fill", "width", "height"], qw = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Kw = { key: 0 };
function Gw(e, t, i, n, a, r) {
  return p(), v("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), v("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", qw, [
        i.title ? (p(), v("title", Kw, o(i.title), 1)) : x("", !0)
      ])
    ], 8, Vw))
  ], 16, Hw);
}
const Ww = /* @__PURE__ */ ot(Bw, [["render", Gw]]), Yw = {
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
}, Zw = ["aria-hidden", "aria-label"], Xw = ["fill", "width", "height"], Jw = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, Qw = { key: 0 };
function ek(e, t, i, n, a, r) {
  return p(), v("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), v("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", Jw, [
        i.title ? (p(), v("title", Qw, o(i.title), 1)) : x("", !0)
      ])
    ], 8, Xw))
  ], 16, Zw);
}
const tk = /* @__PURE__ */ ot(Yw, [["render", ek]]), ik = {
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
}, nk = ["aria-hidden", "aria-label"], ak = ["fill", "width", "height"], rk = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, sk = { key: 0 };
function lk(e, t, i, n, a, r) {
  return p(), v("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), v("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", rk, [
        i.title ? (p(), v("title", sk, o(i.title), 1)) : x("", !0)
      ])
    ], 8, ak))
  ], 16, nk);
}
const Lb = /* @__PURE__ */ ot(ik, [["render", lk]]), ok = {
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
}, uk = ["aria-hidden", "aria-label"], ck = ["fill", "width", "height"], dk = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, fk = { key: 0 };
function pk(e, t, i, n, a, r) {
  return p(), v("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), v("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", dk, [
        i.title ? (p(), v("title", fk, o(i.title), 1)) : x("", !0)
      ])
    ], 8, ck))
  ], 16, uk);
}
const Pb = /* @__PURE__ */ ot(ok, [["render", pk]]);
Ca(b0);
const hk = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Lb,
    IconClose: Pb,
    NcButton: ln
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
      labelConfirm: Rt("Confirm changes"),
      labelCancel: Rt("Cancel changes")
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
}, vk = ["placeholder"];
function bk(e, t, i, n, a, r) {
  const s = Ye("IconArrowRight"), d = Ye("NcButton"), c = Ye("IconClose");
  return p(), v("div", {
    class: Ce(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": n.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = Ae((...g) => r.confirm && r.confirm(...g), ["prevent"])),
      onKeydown: t[2] || (t[2] = dt(Ae((...g) => r.cancel && r.cancel(...g), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ae(() => {
      }, ["stop", "prevent"]))
    }, [
      me(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (g) => r.valueModel = g),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: i.placeholder
      }, null, 8, vk), [
        [We, r.valueModel]
      ]),
      ve(d, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ae(r.confirm, ["stop", "prevent"])
      }, {
        icon: we(() => [
          ve(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      ve(d, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: i.primary ? "primary" : "tertiary",
        onClick: Ae(r.cancel, ["stop", "prevent"])
      }, {
        icon: we(() => [
          ve(c, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const gk = /* @__PURE__ */ ot(hk, [["render", bk], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function mu() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Md = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Db = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), mk = {
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
}, Fb = {
  mixins: [mk],
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
      from: Db
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
}, yk = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: gu
  },
  mixins: [Fb],
  inject: {
    isInSemanticMenu: {
      from: Md,
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
      mdiCheck: o0,
      mdiChevronRight: u0
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
}, _k = ["role"], wk = ["aria-label", "disabled", "title", "type"], kk = { class: "action-button__longtext-wrapper" }, Sk = {
  key: 0,
  class: "action-button__name"
}, Ck = ["textContent"], Tk = {
  key: 2,
  class: "action-button__text"
}, Ak = ["textContent"], Ek = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function xk(e, t, i, n, a, r) {
  const s = Ye("NcIconSvgWrapper");
  return p(), v("li", {
    class: Ce(["action", { "action--disabled": i.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", ei({
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
        l("span", {
          class: Ce([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: pi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", kk, [
        e.name ? (p(), v("strong", Sk, o(e.name), 1)) : x("", !0),
        e.isLongText ? (p(), v("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: o(e.text)
        }, null, 8, Ck)) : (p(), v("span", Tk, o(e.text), 1)),
        i.description ? (p(), v("span", {
          key: 3,
          class: "action-button__description",
          textContent: o(i.description)
        }, null, 8, Ak)) : x("", !0)
      ]),
      i.isMenu ? (p(), Pe(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: n.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (p(), Pe(s, {
        key: 1,
        path: n.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (p(), v("span", Ek)) : x("", !0),
      x("", !0)
    ], 16, wk)
  ], 10, _k);
}
const $k = /* @__PURE__ */ ot(yk, [["render", xk], ["__scopeId", "data-v-6c2daf4e"]]);
function Ok(e, t = {}) {
  const i = Lw();
  qe(e, () => {
    Nn(t.disabled) || (Nn(e) ? i.pause() : i.unpause());
  }), sl(() => {
    i.unpause();
  });
}
const Nk = ["top", "right", "bottom", "left"], rh = ["start", "end"], sh = /* @__PURE__ */ Nk.reduce((e, t) => e.concat(t, t + "-" + rh[0], t + "-" + rh[1]), []), Xs = Math.min, Xc = Math.max, Ik = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mb(e, t, i) {
  return Xc(e, Xs(t, i));
}
function lr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Un(e) {
  return e.split("-")[0];
}
function Hi(e) {
  return e.split("-")[1];
}
function Ub(e) {
  return e === "x" ? "y" : "x";
}
function Ud(e) {
  return e === "y" ? "height" : "width";
}
function On(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function zd(e) {
  return Ub(On(e));
}
function zb(e, t, i) {
  i === void 0 && (i = !1);
  const n = Hi(e), a = zd(e), r = Ud(a);
  let s = a === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = So(s)), [s, So(s)];
}
function Rk(e) {
  const t = So(e);
  return [ko(e), t, ko(t)];
}
function ko(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const lh = ["left", "right"], oh = ["right", "left"], Lk = ["top", "bottom"], Pk = ["bottom", "top"];
function Dk(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? oh : lh : t ? lh : oh;
    case "left":
    case "right":
      return t ? Lk : Pk;
    default:
      return [];
  }
}
function Fk(e, t, i, n) {
  const a = Hi(e);
  let r = Dk(Un(e), i === "start", n);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(ko)))), r;
}
function So(e) {
  const t = Un(e);
  return Ik[t] + e.slice(t.length);
}
function Mk(e) {
  var t, i, n, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (n = e.bottom) != null ? n : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function jb(e) {
  return typeof e != "number" ? Mk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function xs(e) {
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
function uh(e, t, i) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = On(t), s = zd(t), d = Ud(s), c = Un(t), g = r === "y", h = n.x + n.width / 2 - a.width / 2, y = n.y + n.height / 2 - a.height / 2, m = n[d] / 2 - a[d] / 2;
  let k;
  switch (c) {
    case "top":
      k = {
        x: h,
        y: n.y - a.height
      };
      break;
    case "bottom":
      k = {
        x: h,
        y: n.y + n.height
      };
      break;
    case "right":
      k = {
        x: n.x + n.width,
        y
      };
      break;
    case "left":
      k = {
        x: n.x - a.width,
        y
      };
      break;
    default:
      k = {
        x: n.x,
        y: n.y
      };
  }
  const A = Hi(t);
  return A && (k[s] += m * (A === "end" ? 1 : -1) * (i && g ? -1 : 1)), k;
}
async function Uk(e, t) {
  var i;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: r,
    rects: s,
    elements: d,
    strategy: c
  } = e, {
    boundary: g = "clippingAncestors",
    rootBoundary: h = "viewport",
    elementContext: y = "floating",
    altBoundary: m = !1,
    padding: k = 0
  } = lr(t, e), A = jb(k), $ = d[m ? y === "floating" ? "reference" : "floating" : y], R = xs(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement($))) == null || i ? $ : $.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(d.floating)),
    boundary: g,
    rootBoundary: h,
    strategy: c
  })), L = y === "floating" ? {
    x: n,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, P = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(d.floating)), N = await (r.isElement == null ? void 0 : r.isElement(P)) && await (r.getScale == null ? void 0 : r.getScale(P)) || {
    x: 1,
    y: 1
  }, pe = xs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: d,
    rect: L,
    offsetParent: P,
    strategy: c
  }) : L);
  return {
    top: (R.top - pe.top + A.top) / N.y,
    bottom: (pe.bottom - R.bottom + A.bottom) / N.y,
    left: (R.left - pe.left + A.left) / N.x,
    right: (pe.right - R.right + A.right) / N.x
  };
}
const zk = 50, jk = async (e, t, i) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = i, d = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Uk
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let g = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: h,
    y
  } = uh(g, n, c), m = n, k = 0;
  const A = {};
  for (let C = 0; C < r.length; C++) {
    const $ = r[C];
    if (!$)
      continue;
    const {
      name: R,
      fn: L
    } = $, {
      x: P,
      y: N,
      data: pe,
      reset: Q
    } = await L({
      x: h,
      y,
      initialPlacement: n,
      placement: m,
      strategy: a,
      middlewareData: A,
      rects: g,
      platform: d,
      elements: {
        reference: e,
        floating: t
      }
    });
    h = P ?? h, y = N ?? y, A[R] = {
      ...A[R],
      ...pe
    }, Q && k < zk && (k++, typeof Q == "object" && (Q.placement && (m = Q.placement), Q.rects && (g = Q.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : Q.rects), {
      x: h,
      y
    } = uh(g, m, c)), C = -1);
  }
  return {
    x: h,
    y,
    placement: m,
    strategy: a,
    middlewareData: A
  };
}, Bk = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: i,
      y: n,
      placement: a,
      rects: r,
      platform: s,
      elements: d,
      middlewareData: c
    } = t, {
      element: g,
      padding: h = 0
    } = lr(e, t) || {};
    if (g == null)
      return {};
    const y = jb(h), m = {
      x: i,
      y: n
    }, k = zd(a), A = Ud(k), C = await s.getDimensions(g), $ = k === "y", R = $ ? "top" : "left", L = $ ? "bottom" : "right", P = $ ? "clientHeight" : "clientWidth", N = r.reference[A] + r.reference[k] - m[k] - r.floating[A], pe = m[k] - r.reference[k], Q = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(g));
    let E = Q ? Q[P] : 0;
    (!E || !await (s.isElement == null ? void 0 : s.isElement(Q))) && (E = d.floating[P] || r.floating[A]);
    const H = N / 2 - pe / 2, K = E / 2 - C[A] / 2 - 1, Z = Xs(y[R], K), ne = Xs(y[L], K), z = E - C[A] - ne, q = E / 2 - C[A] / 2 + H, I = Mb(Z, q, z), V = !c.arrow && Hi(a) != null && q !== I && r.reference[A] / 2 - (q < Z ? Z : ne) - C[A] / 2 < 0, J = V ? q < Z ? q - Z : q - z : 0;
    return {
      [k]: m[k] + J,
      data: {
        [k]: I,
        centerOffset: q - I - J,
        ...V && {
          alignmentOffset: J
        }
      },
      reset: V
    };
  }
});
function Hk(e, t, i) {
  return (e ? [...i.filter((a) => Hi(a) === e), ...i.filter((a) => Hi(a) !== e)] : i.filter((a) => Un(a) === a)).filter((a) => e ? Hi(a) === e || (t ? ko(a) !== a : !1) : !0);
}
const Vk = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var i, n, a;
      const {
        rects: r,
        middlewareData: s,
        placement: d,
        platform: c,
        elements: g
      } = t, {
        crossAxis: h = !1,
        alignment: y,
        allowedPlacements: m = sh,
        autoAlignment: k = !0,
        ...A
      } = lr(e, t), C = y !== void 0 || m === sh ? Hk(y || null, k, m) : m, $ = ((i = s.autoPlacement) == null ? void 0 : i.index) || 0, R = C[$];
      if (R == null)
        return {};
      if (d !== R)
        return {
          reset: {
            placement: C[0]
          }
        };
      const L = await c.detectOverflow(t, A), P = zb(R, r, await (c.isRTL == null ? void 0 : c.isRTL(g.floating))), N = [L[Un(R)], L[P[0]], L[P[1]]], pe = [...((n = s.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: R,
        overflows: N
      }], Q = C[$ + 1];
      if (Q)
        return {
          data: {
            index: $ + 1,
            overflows: pe
          },
          reset: {
            placement: Q
          }
        };
      const E = pe.map((Z) => {
        const ne = Hi(Z.placement);
        return [Z.placement, ne && h ? (
          // Check along the mainAxis and main crossAxis side.
          Z.overflows.slice(0, 2).reduce((z, q) => z + q, 0)
        ) : (
          // Check only the mainAxis.
          Z.overflows[0]
        ), Z.overflows];
      }).sort((Z, ne) => Z[1] - ne[1]), K = ((a = E.filter((Z) => Z[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Hi(Z[0]) ? 2 : 3
      ).every((ne) => ne <= 0))[0]) == null ? void 0 : a[0]) || E[0][0];
      return K !== d ? {
        data: {
          index: $ + 1,
          overflows: pe
        },
        reset: {
          placement: K
        }
      } : {};
    }
  };
}, qk = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var i, n;
      const {
        placement: a,
        middlewareData: r,
        rects: s,
        initialPlacement: d,
        platform: c,
        elements: g
      } = t, {
        mainAxis: h = !0,
        crossAxis: y = !0,
        fallbackPlacements: m,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: A = "none",
        flipAlignment: C = !0,
        ...$
      } = lr(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const R = Un(a), L = On(d), P = Un(d) === d, N = await (c.isRTL == null ? void 0 : c.isRTL(g.floating)), pe = m || (P || !C ? [So(d)] : Rk(d)), Q = A !== "none";
      !m && Q && pe.push(...Fk(d, C, A, N));
      const E = [d, ...pe], H = await c.detectOverflow(t, $), K = [];
      let Z = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (h && K.push(H[R]), y) {
        const I = zb(a, s, N);
        K.push(H[I[0]], H[I[1]]);
      }
      if (Z = [...Z, {
        placement: a,
        overflows: K
      }], !K.every((I) => I <= 0)) {
        var ne, z;
        const I = (((ne = r.flip) == null ? void 0 : ne.index) || 0) + 1, V = E[I];
        if (V && (!(y === "alignment" ? L !== On(V) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Z.every((Y) => On(Y.placement) === L ? Y.overflows[0] > 0 : !0)))
          return {
            data: {
              index: I,
              overflows: Z
            },
            reset: {
              placement: V
            }
          };
        let J = (z = Z.filter((ie) => ie.overflows[0] <= 0).sort((ie, Y) => ie.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!J)
          switch (k) {
            case "bestFit": {
              var q;
              const ie = (q = Z.filter((Y) => {
                if (Q) {
                  const fe = On(Y.placement);
                  return fe === L || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  fe === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((fe) => fe > 0).reduce((fe, ke) => fe + ke, 0)]).sort((Y, fe) => Y[1] - fe[1])[0]) == null ? void 0 : q[0];
              ie && (J = ie);
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
async function Gk(e, t) {
  const {
    placement: i,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), s = Un(i), d = Hi(i), c = On(i) === "y", g = Kk.has(s) ? -1 : 1, h = r && c ? -1 : 1, y = lr(t, e);
  let {
    mainAxis: m,
    crossAxis: k,
    alignmentAxis: A
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return d && typeof A == "number" && (k = d === "end" ? A * -1 : A), c ? {
    x: k * h,
    y: m * g
  } : {
    x: m * g,
    y: k * h
  };
}
const Wk = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var i, n;
      const {
        x: a,
        y: r,
        placement: s,
        middlewareData: d
      } = t, c = await Gk(t, e);
      return s === ((i = d.offset) == null ? void 0 : i.placement) && (n = d.arrow) != null && n.alignmentOffset ? {} : {
        x: a + c.x,
        y: r + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Yk = function(e) {
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
        mainAxis: s = !0,
        crossAxis: d = !1,
        limiter: c = {
          fn: (L) => {
            let {
              x: P,
              y: N
            } = L;
            return {
              x: P,
              y: N
            };
          }
        },
        ...g
      } = lr(e, t), h = {
        x: i,
        y: n
      }, y = await r.detectOverflow(t, g), m = On(a), k = Ub(m);
      let A = h[k], C = h[m];
      const $ = (L, P) => Mb(P + y[L === "y" ? "top" : "left"], P, P - y[L === "y" ? "bottom" : "right"]);
      s && (A = $(k, A)), d && (C = $(m, C));
      const R = c.fn({
        ...t,
        [k]: A,
        [m]: C
      });
      return {
        ...R,
        data: {
          x: R.x - i,
          y: R.y - n,
          enabled: {
            [k]: s,
            [m]: d
          }
        }
      };
    }
  };
}, Zk = function(e) {
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
        apply: s = () => {
        },
        ...d
      } = lr(e, t), c = await a.detectOverflow(t, d), g = Un(i), h = Hi(i), y = On(i) === "y", {
        width: m,
        height: k
      } = n.floating;
      let A, C;
      g === "top" || g === "bottom" ? (A = g, C = h === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (C = g, A = h === "end" ? "top" : "bottom");
      const $ = k - c.top - c.bottom, R = m - c.left - c.right, L = Xs(k - c[A], $), P = Xs(m - c[C], R), N = t.middlewareData.shift, pe = !N;
      let Q = L, E = P;
      N != null && N.enabled.x && (E = R), N != null && N.enabled.y && (Q = $), pe && !h && (y ? E = m - 2 * Xc(c.left, c.right) : Q = k - 2 * Xc(c.top, c.bottom)), await s({
        ...t,
        availableWidth: E,
        availableHeight: Q
      });
      const H = await a.getDimensions(r.floating);
      return m !== H.width || k !== H.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ii(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function on(e) {
  return Ii(e).getComputedStyle(e);
}
const ch = Math.min, $s = Math.max, Co = Math.round;
function Bb(e) {
  const t = on(e);
  let i = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = Co(i) !== a || Co(n) !== r;
  return s && (i = a, n = r), { width: i, height: n, fallback: s };
}
function ka(e) {
  return Vb(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Hl;
function Hb() {
  if (Hl) return Hl;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Hl = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Hl) : navigator.userAgent;
}
function un(e) {
  return e instanceof Ii(e).HTMLElement;
}
function ma(e) {
  return e instanceof Ii(e).Element;
}
function Vb(e) {
  return e instanceof Ii(e).Node;
}
function dh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Ii(e).ShadowRoot || e instanceof ShadowRoot;
}
function yu(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: a } = on(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a);
}
function Xk(e) {
  return ["table", "td", "th"].includes(ka(e));
}
function Jc(e) {
  const t = /firefox/i.test(Hb()), i = on(e), n = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!n && n !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((a) => i.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = i.contain;
    return r != null && r.includes(a);
  }));
}
function qb() {
  return !/^((?!chrome|android).)*safari/i.test(Hb());
}
function jd(e) {
  return ["html", "body", "#document"].includes(ka(e));
}
function Kb(e) {
  return ma(e) ? e : e.contextElement;
}
const Gb = { x: 1, y: 1 };
function Nr(e) {
  const t = Kb(e);
  if (!un(t)) return Gb;
  const i = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = Bb(t);
  let s = (r ? Co(i.width) : i.width) / n, d = (r ? Co(i.height) : i.height) / a;
  return s && Number.isFinite(s) || (s = 1), d && Number.isFinite(d) || (d = 1), { x: s, y: d };
}
function Js(e, t, i, n) {
  var a, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const s = e.getBoundingClientRect(), d = Kb(e);
  let c = Gb;
  t && (n ? ma(n) && (c = Nr(n)) : c = Nr(e));
  const g = d ? Ii(d) : window, h = !qb() && i;
  let y = (s.left + (h && ((a = g.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / c.x, m = (s.top + (h && ((r = g.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, k = s.width / c.x, A = s.height / c.y;
  if (d) {
    const C = Ii(d), $ = n && ma(n) ? Ii(n) : n;
    let R = C.frameElement;
    for (; R && n && $ !== C; ) {
      const L = Nr(R), P = R.getBoundingClientRect(), N = getComputedStyle(R);
      P.x += (R.clientLeft + parseFloat(N.paddingLeft)) * L.x, P.y += (R.clientTop + parseFloat(N.paddingTop)) * L.y, y *= L.x, m *= L.y, k *= L.x, A *= L.y, y += P.x, m += P.y, R = Ii(R).frameElement;
    }
  }
  return { width: k, height: A, top: m, right: y + k, bottom: m + A, left: y, x: y, y: m };
}
function ya(e) {
  return ((Vb(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function _u(e) {
  return ma(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Wb(e) {
  return Js(ya(e)).left + _u(e).scrollLeft;
}
function Qs(e) {
  if (ka(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || dh(e) && e.host || ya(e);
  return dh(t) ? t.host : t;
}
function Yb(e) {
  const t = Qs(e);
  return jd(t) ? t.ownerDocument.body : un(t) && yu(t) ? t : Yb(t);
}
function To(e, t) {
  var i;
  t === void 0 && (t = []);
  const n = Yb(e), a = n === ((i = e.ownerDocument) == null ? void 0 : i.body), r = Ii(n);
  return a ? t.concat(r, r.visualViewport || [], yu(n) ? n : []) : t.concat(n, To(n));
}
function fh(e, t, i) {
  return t === "viewport" ? xs((function(n, a) {
    const r = Ii(n), s = ya(n), d = r.visualViewport;
    let c = s.clientWidth, g = s.clientHeight, h = 0, y = 0;
    if (d) {
      c = d.width, g = d.height;
      const m = qb();
      (m || !m && a === "fixed") && (h = d.offsetLeft, y = d.offsetTop);
    }
    return { width: c, height: g, x: h, y };
  })(e, i)) : ma(t) ? xs((function(n, a) {
    const r = Js(n, !0, a === "fixed"), s = r.top + n.clientTop, d = r.left + n.clientLeft, c = un(n) ? Nr(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * c.x, height: n.clientHeight * c.y, x: d * c.x, y: s * c.y };
  })(t, i)) : xs((function(n) {
    const a = ya(n), r = _u(n), s = n.ownerDocument.body, d = $s(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), c = $s(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let g = -r.scrollLeft + Wb(n);
    const h = -r.scrollTop;
    return on(s).direction === "rtl" && (g += $s(a.clientWidth, s.clientWidth) - d), { width: d, height: c, x: g, y: h };
  })(ya(e)));
}
function ph(e) {
  return un(e) && on(e).position !== "fixed" ? e.offsetParent : null;
}
function hh(e) {
  const t = Ii(e);
  let i = ph(e);
  for (; i && Xk(i) && on(i).position === "static"; ) i = ph(i);
  return i && (ka(i) === "html" || ka(i) === "body" && on(i).position === "static" && !Jc(i)) ? t : i || (function(n) {
    let a = Qs(n);
    for (; un(a) && !jd(a); ) {
      if (Jc(a)) return a;
      a = Qs(a);
    }
    return null;
  })(e) || t;
}
function Jk(e, t, i) {
  const n = un(t), a = ya(t), r = Js(e, !0, i === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const d = { x: 0, y: 0 };
  if (n || !n && i !== "fixed") if ((ka(t) !== "body" || yu(a)) && (s = _u(t)), un(t)) {
    const c = Js(t, !0);
    d.x = c.x + t.clientLeft, d.y = c.y + t.clientTop;
  } else a && (d.x = Wb(a));
  return { x: r.left + s.scrollLeft - d.x, y: r.top + s.scrollTop - d.y, width: r.width, height: r.height };
}
const Qk = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
  const r = i === "clippingAncestors" ? (function(g, h) {
    const y = h.get(g);
    if (y) return y;
    let m = To(g).filter((($) => ma($) && ka($) !== "body")), k = null;
    const A = on(g).position === "fixed";
    let C = A ? Qs(g) : g;
    for (; ma(C) && !jd(C); ) {
      const $ = on(C), R = Jc(C);
      (A ? R || k : R || $.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = $ : m = m.filter(((L) => L !== C)), C = Qs(C);
    }
    return h.set(g, m), m;
  })(t, this._c) : [].concat(i), s = [...r, n], d = s[0], c = s.reduce(((g, h) => {
    const y = fh(t, h, a);
    return g.top = $s(y.top, g.top), g.right = ch(y.right, g.right), g.bottom = ch(y.bottom, g.bottom), g.left = $s(y.left, g.left), g;
  }), fh(t, d, a));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: n } = e;
  const a = un(i), r = ya(i);
  if (i === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, d = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((ka(i) !== "body" || yu(r)) && (s = _u(i)), un(i))) {
    const g = Js(i);
    d = Nr(i), c.x = g.x + i.clientLeft, c.y = g.y + i.clientTop;
  }
  return { width: t.width * d.x, height: t.height * d.y, x: t.x * d.x - s.scrollLeft * d.x + c.x, y: t.y * d.y - s.scrollTop * d.y + c.y };
}, isElement: ma, getDimensions: function(e) {
  return un(e) ? Bb(e) : e.getBoundingClientRect();
}, getOffsetParent: hh, getDocumentElement: ya, getScale: Nr, async getElementRects(e) {
  let { reference: t, floating: i, strategy: n } = e;
  const a = this.getOffsetParent || hh, r = this.getDimensions;
  return { reference: Jk(t, await a(i), n), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => on(e).direction === "rtl" }, eS = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: Qk, ...i }, r = { ...a.platform, _c: n };
  return jk(e, t, { ...a, platform: r });
}, _a = {
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
function Qc(e, t) {
  let i = _a.themes[e] || {}, n;
  do
    n = i[t], typeof n > "u" ? i.$extend ? i = _a.themes[i.$extend] || {} : (i = null, n = _a[t]) : i = null;
  while (i);
  return n;
}
function tS(e) {
  const t = [e];
  let i = _a.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = _a.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((n) => `v-popper--theme-${n}`);
}
function vh(e) {
  const t = [e];
  let i = _a.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = _a.themes[i.$extend] || {}) : i = null;
  while (i);
  return t;
}
let el = !1;
if (typeof window < "u") {
  el = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        el = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Zb = !1;
typeof window < "u" && typeof navigator < "u" && (Zb = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const iS = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), bh = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, gh = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function mh(e, t) {
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function Sc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const ji = [];
let Ka = null;
const yh = {};
function _h(e) {
  let t = yh[e];
  return t || (t = yh[e] = []), t;
}
let ed = function() {
};
typeof window < "u" && (ed = window.Element);
function Xe(e) {
  return function(t) {
    return Qc(t.theme, e);
  };
}
const Cc = "__floating-vue__popper", Xb = () => /* @__PURE__ */ Bt({
  name: "VPopper",
  provide() {
    return {
      [Cc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Cc]: { default: null }
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
      default: Xe("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Xe("positioningDisabled")
    },
    placement: {
      type: String,
      default: Xe("placement"),
      validator: (e) => iS.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Xe("delay")
    },
    distance: {
      type: [Number, String],
      default: Xe("distance")
    },
    skidding: {
      type: [Number, String],
      default: Xe("skidding")
    },
    triggers: {
      type: Array,
      default: Xe("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Xe("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Xe("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Xe("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Xe("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Xe("popperHideTriggers")
    },
    container: {
      type: [String, Object, ed, Boolean],
      default: Xe("container")
    },
    boundary: {
      type: [String, ed],
      default: Xe("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Xe("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Xe("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Xe("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Xe("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Xe("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Xe("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Xe("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Xe("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Xe("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Xe("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Xe("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Xe("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Xe("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Xe("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Xe("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Xe("flip")
    },
    shift: {
      type: Boolean,
      default: Xe("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Xe("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Xe("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Xe("disposeTimeout")
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
      return (e = this[Cc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(Wk({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Vk({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Yk({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(qk({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Bk({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: n, rects: a, middlewareData: r }) => {
          let s;
          const { centerOffset: d } = r.arrow;
          return n.startsWith("top") || n.startsWith("bottom") ? s = Math.abs(d) > a.reference.width / 2 : s = Math.abs(d) > a.reference.height / 2, {
            data: {
              overflow: s
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const n = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: a, placement: r, middlewareData: s }) => {
            var d;
            if ((d = s.autoSize) != null && d.skip)
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Zk({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const i = await eS(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Ka && this.instantMove && Ka.instantMove && Ka !== this.parentPopper) {
        Ka.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Ka = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Sc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...To(this.$_referenceNode),
        ...To(this.$_popperNode)
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
        for (let i = 0; i < ji.length; i++)
          t = ji[i], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      ji.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of vh(this.theme))
        _h(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Sc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, mh(ji, this), ji.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const i of vh(this.theme)) {
        const n = _h(i);
        mh(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
      }
      Ka === this && (Ka = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Sc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, bh, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], bh, this.popperTriggers, this.popperShowTriggers, e);
      const t = (i) => {
        i.usedByTooltip || this.hide({ event: i });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, gh, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], gh, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, i) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((n) => n.addEventListener(t, i, el ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, i, n, a) {
      let r = i;
      n != null && (r = typeof n == "function" ? n(r) : n), r.forEach((s) => {
        const d = t[s];
        d && this.$_registerEventListeners(e, d, a);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((i) => {
        const { targetNodes: n, eventType: a, handler: r } = i;
        !e || e === a ? n.forEach((s) => s.removeEventListener(a, r)) : t.push(i);
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
      if (Os >= e.left && Os <= e.right && Ns >= e.top && Ns <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), i = Os - da, n = Ns - fa, a = t.left + t.width / 2 - da + (t.top + t.height / 2) - fa + t.width + t.height, r = da + i * a, s = fa + n * a;
        return Vl(da, fa, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Vl(da, fa, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Vl(da, fa, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Vl(da, fa, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Zb) {
    const e = el ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => wh(t), e), document.addEventListener("touchend", (t) => kh(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => wh(e), !0), window.addEventListener("click", (e) => kh(e, !1), !0);
  window.addEventListener("resize", rS);
}
function wh(e, t) {
  for (let i = 0; i < ji.length; i++) {
    const n = ji[i];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function kh(e, t) {
  nS(e, t);
}
function nS(e, t) {
  const i = {};
  for (let n = ji.length - 1; n >= 0; n--) {
    const a = ji[n];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !i[a.randomId] && Sh(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let d = a.parentPopper;
            for (; d; )
              i[d.randomId] = !0, d = d.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && Sh(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Sh(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || aS(e, i) && !t;
}
function aS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function rS() {
  for (let e = 0; e < ji.length; e++)
    ji[e].$_computePosition();
}
let da = 0, fa = 0, Os = 0, Ns = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  da = Os, fa = Ns, Os = e.clientX, Ns = e.clientY;
}, el ? {
  passive: !0
} : void 0);
function Vl(e, t, i, n, a, r, s, d) {
  const c = ((s - a) * (t - r) - (d - r) * (e - a)) / ((d - r) * (i - e) - (s - a) * (n - t)), g = ((i - e) * (t - r) - (n - t) * (e - a)) / ((d - r) * (i - e) - (s - a) * (n - t));
  return c >= 0 && c <= 1 && g >= 0 && g <= 1;
}
const sS = {
  extends: Xb()
}, Bd = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
};
function lS(e, t, i, n, a, r) {
  return p(), v("div", {
    ref: "reference",
    class: Ce(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Be(e.$slots, "default", Ql(qs(e.slotData)))
  ], 2);
}
const oS = /* @__PURE__ */ Bd(sS, [["render", lS]]);
function uS() {
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
let Xl;
function td() {
  td.init || (td.init = !0, Xl = uS() !== -1);
}
var wu = {
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
    td(), Nt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Xl && this.$el.appendChild(e), e.data = "about:blank", Xl || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Xl && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const cS = /* @__PURE__ */ cy();
oy("data-v-b329ee4c");
const dS = {
  class: "resize-observer",
  tabindex: "-1"
};
uy();
const fS = /* @__PURE__ */ cS((e, t, i, n, a, r) => (p(), Pe("div", dS)));
wu.render = fS;
wu.__scopeId = "data-v-b329ee4c";
wu.__file = "src/components/ResizeObserver.vue";
const Jb = (e = "theme") => ({
  computed: {
    themeClass() {
      return tS(this[e]);
    }
  }
}), pS = /* @__PURE__ */ Bt({
  name: "VPopperContent",
  components: {
    ResizeObserver: wu
  },
  mixins: [
    Jb()
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
}), hS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], vS = {
  ref: "inner",
  class: "v-popper__inner"
}, bS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), gS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), mS = [
  bS,
  gS
];
function yS(e, t, i, n, a, r) {
  const s = Ye("ResizeObserver");
  return p(), v("div", {
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
    style: pi(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = dt((d) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    l("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (d) => e.autoHide && e.$emit("hide"))
    }),
    l("div", {
      class: "v-popper__wrapper",
      style: pi(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", vS, [
        e.mounted ? (p(), v(W, { key: 0 }, [
          l("div", null, [
            Be(e.$slots, "default")
          ]),
          e.handleResize ? (p(), Pe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (d) => e.$emit("resize", d))
          })) : x("", !0)
        ], 64)) : x("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: pi(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, mS, 4)
    ], 4)
  ], 46, hS);
}
const Qb = /* @__PURE__ */ Bd(pS, [["render", yS]]), eg = {
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
let id = function() {
};
typeof window < "u" && (id = window.Element);
const _S = /* @__PURE__ */ Bt({
  name: "VPopperWrapper",
  components: {
    Popper: oS,
    PopperContent: Qb
  },
  mixins: [
    eg,
    Jb("finalTheme")
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
      type: [String, Object, id, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, id],
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
function wS(e, t, i, n, a, r) {
  const s = Ye("PopperContent"), d = Ye("Popper");
  return p(), Pe(d, ei({ ref: "popper" }, e.$props, {
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
      shouldMountContent: h,
      skipTransition: y,
      autoHide: m,
      show: k,
      hide: A,
      handleResize: C,
      onResize: $,
      classes: R,
      result: L
    }) => [
      Be(e.$slots, "default", {
        shown: g,
        show: k,
        hide: A
      }),
      ve(s, {
        ref: "popperContent",
        "popper-id": c,
        theme: e.finalTheme,
        shown: g,
        mounted: h,
        "skip-transition": y,
        "auto-hide": m,
        "handle-resize": C,
        classes: R,
        result: L,
        onHide: A,
        onResize: $
      }, {
        default: we(() => [
          Be(e.$slots, "popper", {
            shown: g,
            hide: A
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Hd = /* @__PURE__ */ Bd(_S, [["render", wS]]), kS = {
  ...Hd,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Hd
});
({
  ...Hd
});
Xb();
const Ch = _a, SS = kS, CS = /* @__PURE__ */ Bt({
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
}), TS = "_ncPopover_qgtYg", AS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: TS
}, tg = "nc-popover-9";
Ch.themes[tg] = structuredClone(Ch.themes.dropdown);
const ES = {
  name: "NcPopover",
  components: {
    Dropdown: SS,
    NcPopoverTriggerProvider: CS
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
      theme: tg
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
      return this.placement === "start" ? Wc ? "right" : "left" : this.placement === "end" ? Wc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Fd(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Zs(),
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
        ar.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
  const s = Ye("NcPopoverTriggerProvider"), d = Ye("Dropdown");
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
      Be(e.$slots, "default", Ql(qs(c)))
    ]),
    default: we(() => [
      ve(s, {
        shown: a.internalShown,
        popupRole: i.popupRole
      }, {
        default: we((c) => [
          Be(e.$slots, "trigger", Ql(qs(c)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const $S = {
  $style: AS
}, Th = /* @__PURE__ */ ot(ES, [["render", xS], ["__cssModules", $S]]), OS = {
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
}, NS = ["aria-hidden", "aria-label"], IS = ["fill", "width", "height"], RS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, LS = { key: 0 };
function PS(e, t, i, n, a, r) {
  return p(), v("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), v("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", RS, [
        i.title ? (p(), v("title", LS, o(i.title), 1)) : x("", !0)
      ])
    ], 8, IS))
  ], 16, NS);
}
const DS = /* @__PURE__ */ ot(OS, [["render", PS]]);
Ca(v0);
function Vd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === Ut)
        return !1;
      if (i.type === W && !Vd(i.children))
        return !1;
      if (i.type === ll && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const FS = ".focusable", MS = {
  name: "NcActions",
  components: {
    NcButton: ln,
    NcPopover: Th
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
      [Md]: j(() => this.actionsMenuSemanticType === "menu"),
      [Db]: this.closeMenu
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
      default: Rt("Actions")
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
      randomId: mu()
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
    Ok(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(FS);
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
    const e = [], t = (k, A) => {
      k.forEach((C) => {
        if (this.isAction(C)) {
          A.push(C);
          return;
        }
        C.type === W && t(C.children, A);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let i = e.filter(this.isValidSingleAction);
    this.forceMenu && i.length > 0 && this.inline > 0 && (i = []);
    const n = i.slice(0, this.inline), a = e.filter((k) => !n.includes(k)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], d = ["NcActionLink", "NcActionRouter"], c = a.some((k) => s.includes(this.getActionName(k))), g = a.some((k) => r.includes(this.getActionName(k))), h = a.some((k) => d.includes(this.getActionName(k)));
    c ? this.actionsMenuSemanticType = "dialog" : g ? this.actionsMenuSemanticType = "menu" : h ? this.actionsMenuSemanticType = "navigation" : e.filter((A) => this.getActionName(A).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const y = (k) => {
      const A = k?.props?.icon, C = k?.children?.icon?.()?.[0] ?? (this.isIconUrl(A) ? di("img", { class: "action-item__menutoggle__icon", src: A, alt: "" }) : di("span", { class: ["icon", A] })), $ = k?.children?.default?.()?.[0]?.children?.trim(), R = this.forceName ? $ : "";
      let L = k?.props?.title;
      this.forceName || L || (L = $);
      const P = { ...k?.props ?? {} }, N = ["submit", "reset"].includes(P.type) ? P.modelValue : "button";
      return delete P.modelValue, delete P.type, di(
        ln,
        ei(
          P,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": k?.props?.["aria-label"] || $,
            title: L,
            disabled: this.disabled || k?.props?.disabled,
            pressed: k?.props?.modelValue,
            size: this.size,
            type: N,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (R ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": k?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => R,
          icon: () => C
        }
      );
    }, m = (k) => {
      const A = Vd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? di("span", { class: ["icon", this.defaultIcon] }) : di(DS, { size: 20 }), C = `${this.randomId}-trigger`;
      return di(
        Th,
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
          trigger: () => di(ln, {
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
            icon: () => A,
            default: () => this.menuName
          }),
          default: () => di("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            di("ul", {
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
    return e.length === 1 && i.length === 1 && !this.forceMenu ? y(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), n.length > 0 && this.inline > 0 ? di(
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
        a.length > 0 ? di(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [m(a)]
        ) : null
      ]
    ) : di(
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
        m(e)
      ]
    ));
  }
}, qd = /* @__PURE__ */ ot(MS, [["__scopeId", "data-v-7206c1f1"]]), US = ["aria-label"], zS = ["width", "height"], jS = ["fill"], BS = ["fill"], HS = { key: 0 }, VS = /* @__PURE__ */ Bt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, i = j(() => {
      const n = ["#777", "#CCC"];
      return t.appearance === "light" ? n : t.appearance === "dark" ? n.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (n, a) => (p(), v("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (p(), v("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        l("path", {
          fill: i.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, jS),
        l("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (p(), v("title", HS, o(e.name), 1)) : x("", !0)
        ], 8, BS)
      ], 8, zS))
    ], 8, US));
  }
}), ig = /* @__PURE__ */ ot(VS, [["__scopeId", "data-v-cf399190"]]), nd = /* @__PURE__ */ Bt({
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
}), qS = {
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
}, KS = ["aria-hidden", "aria-label"], GS = ["fill", "width", "height"], WS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, YS = { key: 0 };
function ZS(e, t, i, n, a, r) {
  return p(), v("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), v("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", WS, [
        i.title ? (p(), v("title", YS, o(i.title), 1)) : x("", !0)
      ])
    ], 8, GS))
  ], 16, KS);
}
const XS = /* @__PURE__ */ ot(qS, [["render", ZS]]), JS = {
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
}, QS = ["aria-hidden", "aria-label"], eC = ["fill", "width", "height"], tC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, iC = { key: 0 };
function nC(e, t, i, n, a, r) {
  return p(), v("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), v("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", tC, [
        i.title ? (p(), v("title", iC, o(i.title), 1)) : x("", !0)
      ])
    ], 8, eC))
  ], 16, QS);
}
const aC = /* @__PURE__ */ ot(JS, [["render", nC]]);
Ca(y0);
const rC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: ln,
    ChevronDown: Ww,
    ChevronUp: tk
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
      return this.open ? Rt("Collapse menu") : Rt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function sC(e, t, i, n, a, r) {
  const s = Ye("ChevronUp"), d = Ye("ChevronDown"), c = Ye("NcButton");
  return p(), Pe(c, {
    class: Ce(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && n.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: we(() => [
      i.open ? (p(), Pe(s, {
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
const lC = /* @__PURE__ */ ot(rC, [["render", sC], ["__scopeId", "data-v-cfbd3794"]]);
Ca(_0, S0);
const oC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: qd,
    NcActionButton: $k,
    NcAppNavigationIconCollapsible: lC,
    NcInputConfirmCancel: gk,
    NcLoadingIcon: ig,
    NcVNodes: nd,
    Pencil: XS,
    Undo: aC
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Ob, default: null }
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
      default: () => mu(),
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
      isMobile: cl(),
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
      return this.editLabel ? this.editLabel : Rt("Edit item");
    },
    undoButtonAriaLabel() {
      return Rt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && Rn("toggle-navigation", { open: !1 }));
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
}, uC = ["id"], cC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], dC = {
  key: 0,
  class: "editingContainer"
}, fC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, pC = { class: "app-navigation-entry__deleted-description" }, hC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, vC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function bC(e, t, i, n, a, r) {
  const s = Ye("NcLoadingIcon"), d = Ye("NcInputConfirmCancel"), c = Ye("Pencil"), g = Ye("NcActionButton"), h = Ye("Undo"), y = Ye("NcActions"), m = Ye("NcAppNavigationIconCollapsible");
  return p(), v("li", {
    id: i.id,
    class: Ce([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (p(), Pe(xd(r.isRouterLink ? "router-link" : "NcVNodes"), Ql(qs({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: we(({ href: k, navigate: A, isActive: C }) => [
        l("div", {
          ref: "entry",
          class: Ce(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": i.undo,
            "app-navigation-entry--legacy": n.isLegacy34,
            active: i.to && C || i.active
          }]),
          onPointerenter: t[4] || (t[4] = (...$) => r.requestHighlight && r.requestHighlight(...$)),
          onFocusin: t[5] || (t[5] = (...$) => r.requestHighlight && r.requestHighlight(...$))
        }, [
          i.undo ? x("", !0) : (p(), v("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": i.active || i.to && C ? "page" : void 0,
            "aria-description": i.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: i.href || k || "#",
            target: r.isExternal(i.href) ? "_blank" : void 0,
            title: i.title || i.name,
            onBlur: t[1] || (t[1] = (...$) => r.handleBlur && r.handleBlur(...$)),
            onClick: ($) => r.onClick($, A, k),
            onFocus: t[2] || (t[2] = (...$) => r.handleFocus && r.handleFocus(...$)),
            onKeydown: t[3] || (t[3] = dt(Ae((...$) => r.handleTab && r.handleTab(...$), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: Ce(["app-navigation-entry-icon", { [i.icon]: i.icon }])
            }, [
              i.loading ? (p(), Pe(s, { key: 0 })) : Be(e.$slots, "icon", {
                key: 1,
                active: i.active || i.to && C
              }, void 0, !0)
            ], 2),
            l("span", {
              class: Ce(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, o(i.name), 3),
            a.editingActive ? (p(), v("div", dC, [
              ve(d, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = ($) => a.editingValue = $),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && C || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : x("", !0)
          ], 40, cC)),
          i.undo ? (p(), v("div", fC, [
            l("div", pC, o(i.name), 1)
          ])) : x("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !a.editingActive ? (p(), v("div", {
            key: 2,
            class: Ce(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || a.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (p(), v("div", hC, [
              Be(e.$slots, "counter", {}, void 0, !0)
            ])) : x("", !0),
            e.$slots.actions || i.editable && !a.editingActive || i.undo ? (p(), Pe(y, {
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
                    ve(c, { size: 20 })
                  ]),
                  default: we(() => [
                    ae(" " + o(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : x("", !0),
                i.undo ? (p(), Pe(g, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: we(() => [
                    ve(h, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : x("", !0),
                Be(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : x("", !0)
          ], 2)) : x("", !0),
          i.allowCollapse && e.$slots.default ? (p(), Pe(m, {
            key: 3,
            active: i.to && C || i.active,
            open: a.opened,
            onClick: Ae(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : x("", !0),
          Be(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (p(), v("ul", vC, [
      Be(e.$slots, "default", {}, void 0, !0)
    ])) : x("", !0)
  ], 10, uC);
}
const la = /* @__PURE__ */ ot(oC, [["render", bC], ["__scopeId", "data-v-01bef41b"]]), Tc = /* @__PURE__ */ new WeakMap(), gC = {
  mounted(e, t) {
    const i = !t.modifiers.bubble;
    let n;
    if (typeof t.value == "function") n = Xp(e, t.value, { capture: i });
    else {
      const [a, r] = t.value;
      n = Xp(e, a, Object.assign({ capture: i }, r));
    }
    Tc.set(e, n);
  },
  unmounted(e) {
    const t = Tc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Tc.delete(e);
  }
}, mC = {
  mounted(e) {
    e.focus();
  }
}, yC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", _C = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", ad = "numeric", rd = "ascii", sd = "alpha", Is = "asciinumeric", _s = "alphanumeric", ld = "domain", ng = "emoji", wC = "scheme", kC = "slashscheme", Ac = "whitespace";
function SC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Qa(e, t, i) {
  t[ad] && (t[Is] = !0, t[_s] = !0), t[rd] && (t[Is] = !0, t[sd] = !0), t[Is] && (t[_s] = !0), t[sd] && (t[_s] = !0), t[_s] && (t[ld] = !0), t[ng] && (t[ld] = !0);
  for (const n in t) {
    const a = SC(n, i);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function CC(e, t) {
  const i = {};
  for (const n in t)
    t[n].indexOf(e) >= 0 && (i[n] = !0);
  return i;
}
function _i(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
_i.groups = {};
_i.prototype = {
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
    n = n || _i.groups;
    let a;
    return t && t.j ? a = t : (a = new _i(t), i && n && Qa(t, i, n)), this.jr.push([e, a]), a;
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
    for (let s = 0; s < r - 1; s++)
      a = a.tt(e[s]);
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
    n = n || _i.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, d = a.go(e);
    if (d ? (s = new _i(), Object.assign(s.j, d.j), s.jr.push.apply(s.jr, d.jr), s.jd = d.jd, s.t = d.t) : s = new _i(), r) {
      if (n)
        if (s.t && typeof s.t == "string") {
          const c = Object.assign(CC(s.t, n), i);
          Qa(r, c, n);
        } else i && Qa(r, i, n);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ke = (e, t, i, n, a) => e.ta(t, i, n, a), St = (e, t, i, n, a) => e.tr(t, i, n, a), Ah = (e, t, i, n, a) => e.ts(t, i, n, a), be = (e, t, i, n, a) => e.tt(t, i, n, a), Cn = "WORD", od = "UWORD", ag = "ASCIINUMERICAL", rg = "ALPHANUMERICAL", tl = "LOCALHOST", ud = "TLD", cd = "UTLD", Jl = "SCHEME", Cr = "SLASH_SCHEME", Kd = "NUM", dd = "WS", Gd = "NL", Rs = "OPENBRACE", Ls = "CLOSEBRACE", Ao = "OPENBRACKET", Eo = "CLOSEBRACKET", xo = "OPENPAREN", $o = "CLOSEPAREN", Oo = "OPENANGLEBRACKET", No = "CLOSEANGLEBRACKET", Io = "FULLWIDTHLEFTPAREN", Ro = "FULLWIDTHRIGHTPAREN", Lo = "LEFTCORNERBRACKET", Po = "RIGHTCORNERBRACKET", Do = "LEFTWHITECORNERBRACKET", Fo = "RIGHTWHITECORNERBRACKET", Mo = "FULLWIDTHLESSTHAN", Uo = "FULLWIDTHGREATERTHAN", zo = "AMPERSAND", jo = "APOSTROPHE", Bo = "ASTERISK", ha = "AT", Ho = "BACKSLASH", Vo = "BACKTICK", qo = "CARET", er = "COLON", Wd = "COMMA", Ko = "DOLLAR", tn = "DOT", Go = "EQUALS", Yd = "EXCLAMATION", $i = "HYPHEN", Ps = "PERCENT", Wo = "PIPE", Yo = "PLUS", Zo = "POUND", Ds = "QUERY", Zd = "QUOTE", sg = "FULLWIDTHMIDDLEDOT", Xd = "SEMI", nn = "SLASH", Fs = "TILDE", Xo = "UNDERSCORE", lg = "EMOJI", Jo = "SYM";
var og = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: rg,
  AMPERSAND: zo,
  APOSTROPHE: jo,
  ASCIINUMERICAL: ag,
  ASTERISK: Bo,
  AT: ha,
  BACKSLASH: Ho,
  BACKTICK: Vo,
  CARET: qo,
  CLOSEANGLEBRACKET: No,
  CLOSEBRACE: Ls,
  CLOSEBRACKET: Eo,
  CLOSEPAREN: $o,
  COLON: er,
  COMMA: Wd,
  DOLLAR: Ko,
  DOT: tn,
  EMOJI: lg,
  EQUALS: Go,
  EXCLAMATION: Yd,
  FULLWIDTHGREATERTHAN: Uo,
  FULLWIDTHLEFTPAREN: Io,
  FULLWIDTHLESSTHAN: Mo,
  FULLWIDTHMIDDLEDOT: sg,
  FULLWIDTHRIGHTPAREN: Ro,
  HYPHEN: $i,
  LEFTCORNERBRACKET: Lo,
  LEFTWHITECORNERBRACKET: Do,
  LOCALHOST: tl,
  NL: Gd,
  NUM: Kd,
  OPENANGLEBRACKET: Oo,
  OPENBRACE: Rs,
  OPENBRACKET: Ao,
  OPENPAREN: xo,
  PERCENT: Ps,
  PIPE: Wo,
  PLUS: Yo,
  POUND: Zo,
  QUERY: Ds,
  QUOTE: Zd,
  RIGHTCORNERBRACKET: Po,
  RIGHTWHITECORNERBRACKET: Fo,
  SCHEME: Jl,
  SEMI: Xd,
  SLASH: nn,
  SLASH_SCHEME: Cr,
  SYM: Jo,
  TILDE: Fs,
  TLD: ud,
  UNDERSCORE: Xo,
  UTLD: cd,
  UWORD: od,
  WORD: Cn,
  WS: dd
});
const kn = /[a-z]/, vs = new RegExp("\\p{L}", "u"), Ec = new RegExp("\\p{Emoji}", "u"), Sn = /\d/, xc = /\s/, Eh = "\r", $c = `
`, TC = "️", AC = "‍", Oc = "￼";
let ql = null, Kl = null;
function EC(e = []) {
  const t = {};
  _i.groups = t;
  const i = new _i();
  ql == null && (ql = xh(yC)), Kl == null && (Kl = xh(_C)), be(i, "'", jo), be(i, "{", Rs), be(i, "}", Ls), be(i, "[", Ao), be(i, "]", Eo), be(i, "(", xo), be(i, ")", $o), be(i, "<", Oo), be(i, ">", No), be(i, "（", Io), be(i, "）", Ro), be(i, "「", Lo), be(i, "」", Po), be(i, "『", Do), be(i, "』", Fo), be(i, "＜", Mo), be(i, "＞", Uo), be(i, "&", zo), be(i, "*", Bo), be(i, "@", ha), be(i, "`", Vo), be(i, "^", qo), be(i, ":", er), be(i, ",", Wd), be(i, "$", Ko), be(i, ".", tn), be(i, "=", Go), be(i, "!", Yd), be(i, "-", $i), be(i, "%", Ps), be(i, "|", Wo), be(i, "+", Yo), be(i, "#", Zo), be(i, "?", Ds), be(i, '"', Zd), be(i, "/", nn), be(i, ";", Xd), be(i, "~", Fs), be(i, "_", Xo), be(i, "\\", Ho), be(i, "・", sg);
  const n = St(i, Sn, Kd, {
    [ad]: !0
  });
  St(n, Sn, n);
  const a = St(n, kn, ag, {
    [Is]: !0
  }), r = St(n, vs, rg, {
    [_s]: !0
  }), s = St(i, kn, Cn, {
    [rd]: !0
  });
  St(s, Sn, a), St(s, kn, s), St(a, Sn, a), St(a, kn, a);
  const d = St(i, vs, od, {
    [sd]: !0
  });
  St(d, kn), St(d, Sn, r), St(d, vs, d), St(r, Sn, r), St(r, kn), St(r, vs, r);
  const c = be(i, $c, Gd, {
    [Ac]: !0
  }), g = be(i, Eh, dd, {
    [Ac]: !0
  }), h = St(i, xc, dd, {
    [Ac]: !0
  });
  be(i, Oc, h), be(g, $c, c), be(g, Oc, h), St(g, xc, h), be(h, Eh), be(h, $c), St(h, xc, h), be(h, Oc, h);
  const y = St(i, Ec, lg, {
    [ng]: !0
  });
  be(y, "#"), St(y, Ec, y), be(y, TC, y);
  const m = be(y, AC);
  be(m, "#"), St(m, Ec, y);
  const k = [[kn, s], [Sn, a]], A = [[kn, null], [vs, d], [Sn, r]];
  for (let C = 0; C < ql.length; C++)
    oa(i, ql[C], ud, Cn, k);
  for (let C = 0; C < Kl.length; C++)
    oa(i, Kl[C], cd, od, A);
  Qa(ud, {
    tld: !0,
    ascii: !0
  }, t), Qa(cd, {
    utld: !0,
    alpha: !0
  }, t), oa(i, "file", Jl, Cn, k), oa(i, "mailto", Jl, Cn, k), oa(i, "http", Cr, Cn, k), oa(i, "https", Cr, Cn, k), oa(i, "ftp", Cr, Cn, k), oa(i, "ftps", Cr, Cn, k), Qa(Jl, {
    scheme: !0,
    ascii: !0
  }, t), Qa(Cr, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((C, $) => C[0] > $[0] ? 1 : -1);
  for (let C = 0; C < e.length; C++) {
    const $ = e[C][0], L = e[C][1] ? {
      [wC]: !0
    } : {
      [kC]: !0
    };
    $.indexOf("-") >= 0 ? L[ld] = !0 : kn.test($) ? Sn.test($) ? L[Is] = !0 : L[rd] = !0 : L[ad] = !0, Ah(i, $, $, L);
  }
  return Ah(i, "localhost", tl, {
    ascii: !0
  }), i.jd = new _i(Jo), {
    start: i,
    tokens: Object.assign({
      groups: t
    }, og)
  };
}
function ug(e, t) {
  const i = xC(t.replace(/[A-Z]/g, (d) => d.toLowerCase())), n = i.length, a = [];
  let r = 0, s = 0;
  for (; s < n; ) {
    let d = e, c = null, g = 0, h = null, y = -1, m = -1;
    for (; s < n && (c = d.go(i[s])); )
      d = c, d.accepts() ? (y = 0, m = 0, h = d) : y >= 0 && (y += i[s].length, m++), g += i[s].length, r += i[s].length, s++;
    r -= y, s -= m, g -= y, a.push({
      t: h.t,
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
    let a = e.charCodeAt(n), r, s = a < 55296 || a > 56319 || n + 1 === i || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(s), n += s.length;
  }
  return t;
}
function oa(e, t, i, n, a) {
  let r;
  const s = t.length;
  for (let d = 0; d < s - 1; d++) {
    const c = t[d];
    e.j[c] ? r = e.j[c] : (r = new _i(n), r.jr = a.slice(), e.j[c] = r), e = r;
  }
  return r = new _i(i), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
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
      for (let s = parseInt(e.substring(n, n + r), 10); s > 0; s--)
        i.pop();
      n += r;
    } else
      i.push(e[n]), n++;
  }
  return t;
}
const il = {
  defaultProtocol: "http",
  events: null,
  format: $h,
  formatHref: $h,
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
function Jd(e, t = null) {
  let i = Object.assign({}, il);
  e && (i = Object.assign(i, e instanceof Jd ? e.o : e));
  const n = i.ignoreTags, a = [];
  for (let r = 0; r < n.length; r++)
    a.push(n[r].toUpperCase());
  this.o = i, t && (this.defaultRender = t), this.ignoreTags = a;
}
Jd.prototype = {
  o: il,
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
    return a && (typeof a == "object" ? (a = i.t in a ? a[i.t] : il[e], typeof a == "function" && n && (a = a(t, i))) : typeof a == "function" && n && (a = a(t, i.t, i)), a);
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
function $h(e) {
  return e;
}
function cg(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
cg.prototype = {
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
  toObject(e = il.defaultProtocol) {
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
    const t = this, i = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", i, this), a = e.get("tagName", i, t), r = this.toFormattedString(e), s = {}, d = e.get("className", i, t), c = e.get("target", i, t), g = e.get("rel", i, t), h = e.getObj("attributes", i, t), y = e.getObj("events", i, t);
    return s.href = n, d && (s.class = d), c && (s.target = c), g && (s.rel = g), h && Object.assign(s, h), {
      tagName: a,
      attributes: s,
      content: r,
      eventListeners: y
    };
  }
};
function ku(e, t) {
  class i extends cg {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const n in t)
    i.prototype[n] = t[n];
  return i.t = e, i;
}
const $C = ku("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Oh = ku("text"), OC = ku("nl"), Gl = ku("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = il.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== tl && e[1].t === er;
  }
}), Ai = (e) => new _i(e);
function NC({
  groups: e
}) {
  const t = e.domain.concat([zo, Bo, ha, Ho, Vo, qo, Ko, Go, $i, Kd, Ps, Wo, Yo, Zo, nn, Jo, Fs, Xo]), i = [jo, er, Wd, tn, Yd, Ps, Ds, Zd, Xd, Oo, No, Rs, Ls, Eo, Ao, xo, $o, Io, Ro, Lo, Po, Do, Fo, Mo, Uo], n = [zo, jo, Bo, Ho, Vo, qo, Ko, Go, $i, Rs, Ls, Ps, Wo, Yo, Zo, Ds, nn, Jo, Fs, Xo], a = Ai(), r = be(a, Fs);
  Ke(r, n, r), Ke(r, e.domain, r);
  const s = Ai(), d = Ai(), c = Ai();
  Ke(a, e.domain, s), Ke(a, e.scheme, d), Ke(a, e.slashscheme, c), Ke(s, n, r), Ke(s, e.domain, s);
  const g = be(s, ha);
  be(r, ha, g), be(d, ha, g), be(c, ha, g);
  const h = be(r, tn);
  Ke(h, n, r), Ke(h, e.domain, r);
  const y = Ai();
  Ke(g, e.domain, y), Ke(y, e.domain, y);
  const m = be(y, tn);
  Ke(m, e.domain, y);
  const k = Ai($C);
  Ke(m, e.tld, k), Ke(m, e.utld, k), be(g, tl, k);
  const A = be(y, $i);
  be(A, $i, A), Ke(A, e.domain, y), Ke(k, e.domain, y), be(k, tn, m), be(k, $i, A);
  const C = be(s, $i), $ = be(s, tn);
  be(C, $i, C), Ke(C, e.domain, s), Ke($, n, r), Ke($, e.domain, s);
  const R = Ai(Gl);
  Ke($, e.tld, R), Ke($, e.utld, R), Ke(R, e.domain, s), Ke(R, n, r), be(R, tn, $), be(R, $i, C), be(R, ha, g);
  const L = be(R, er), P = Ai(Gl);
  Ke(L, e.numeric, P);
  const N = Ai(Gl), pe = Ai();
  Ke(N, t, N), Ke(N, i, pe), Ke(pe, t, N), Ke(pe, i, pe), be(R, nn, N), be(P, nn, N);
  const Q = be(d, er), E = be(c, er), H = be(E, nn), K = be(H, nn);
  Ke(d, e.domain, s), be(d, tn, $), be(d, $i, C), Ke(c, e.domain, s), be(c, tn, $), be(c, $i, C), Ke(Q, e.domain, N), be(Q, nn, N), be(Q, Ds, N), Ke(K, e.domain, N), Ke(K, t, N), be(K, nn, N);
  const Z = [
    [Rs, Ls],
    // {}
    [Ao, Eo],
    // []
    [xo, $o],
    // ()
    [Oo, No],
    // <>
    [Io, Ro],
    // （）
    [Lo, Po],
    // 「」
    [Do, Fo],
    // 『』
    [Mo, Uo]
    // ＜＞
  ];
  for (let ne = 0; ne < Z.length; ne++) {
    const [z, q] = Z[ne], I = be(N, z);
    be(pe, z, I);
    const V = Ai(Gl);
    Ke(I, t, V);
    const J = Ai();
    Ke(I, i, J), be(I, q, N), Ke(V, t, V), Ke(V, i, J), Ke(J, t, V), Ke(J, i, J), be(V, q, N), be(J, q, N);
  }
  return be(a, tl, R), be(a, Gd, OC), {
    start: a,
    tokens: og
  };
}
function IC(e, t, i) {
  let n = i.length, a = 0, r = [], s = [];
  for (; a < n; ) {
    let d = e, c = null, g = null, h = 0, y = null, m = -1;
    for (; a < n && !(c = d.go(i[a].t)); )
      s.push(i[a++]);
    for (; a < n && (g = c || d.go(i[a].t)); )
      c = null, d = g, d.accepts() ? (m = 0, y = d) : m >= 0 && m++, a++, h++;
    if (m < 0)
      a -= h, a < n && (s.push(i[a]), a++);
    else {
      s.length > 0 && (r.push(Nc(Oh, t, s)), s = []), a -= m, h -= m;
      const k = y.t, A = i.slice(a - h, a);
      r.push(Nc(k, t, A));
    }
  }
  return s.length > 0 && r.push(Nc(Oh, t, s)), r;
}
function Nc(e, t, i) {
  const n = i[0].s, a = i[i.length - 1].e, r = t.slice(n, a);
  return new e(r, i);
}
const Wt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function RC() {
  Wt.scanner = EC(Wt.customSchemes);
  for (let e = 0; e < Wt.tokenQueue.length; e++)
    Wt.tokenQueue[e][1]({
      scanner: Wt.scanner
    });
  Wt.parser = NC(Wt.scanner.tokens);
  for (let e = 0; e < Wt.pluginQueue.length; e++)
    Wt.pluginQueue[e][1]({
      scanner: Wt.scanner,
      parser: Wt.parser
    });
  return Wt.initialized = !0, Wt;
}
function dg(e) {
  return Wt.initialized || RC(), IC(Wt.parser.start, e, ug(Wt.scanner.start, e));
}
dg.scan = ug;
function LC(e) {
  const t = new Jd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, FC), i = dg(e), n = [];
  for (const a of i)
    a.t === "nl" && t.get("nl2br") ? n.push(`<br>
`) : !a.isLink || !t.check(a) ? n.push(ho(a.toString())) : n.push(t.render(a));
  return n.join("");
}
function PC(e) {
  return e.replace(/"/g, "&quot;");
}
function DC(e) {
  const t = [];
  for (const i in e) {
    const n = e[i] + "";
    t.push(`${i}="${PC(n)}"`);
  }
  return t.join(" ");
}
function FC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${DC(t)}>${ho(i)}</${e}>`;
}
const MC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = LC(t.text));
}, UC = ["title"], zC = /* @__PURE__ */ Bt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Zt("NcAppSidebar:header:ref");
    return (i, n) => me((p(), v("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ae(o(e.name), 1)
    ], 8, UC)), [
      [u(MC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), jC = ["aria-labelledby"], BC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, HC = ["id"], VC = {
  key: 2,
  class: "empty-content__description"
}, qC = {
  key: 3,
  class: "empty-content__action"
}, KC = /* @__PURE__ */ Bt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = mu();
    return (i, n) => (p(), v("div", {
      "aria-labelledby": u(t),
      class: "empty-content",
      role: "note"
    }, [
      i.$slots.icon ? (p(), v("div", BC, [
        Be(i.$slots, "icon", {}, void 0, !0)
      ])) : x("", !0),
      e.name !== "" || i.$slots.name ? (p(), v("div", {
        key: 1,
        id: u(t),
        class: "empty-content__name"
      }, [
        Be(i.$slots, "name", {}, () => [
          ae(o(e.name), 1)
        ], !0)
      ], 8, HC)) : x("", !0),
      e.description !== "" || i.$slots.description ? (p(), v("p", VC, [
        Be(i.$slots, "description", {}, () => [
          ae(o(e.description), 1)
        ], !0)
      ])) : x("", !0),
      i.$slots.action ? (p(), v("div", qC, [
        Be(i.$slots, "action", {}, void 0, !0)
      ])) : x("", !0)
    ], 8, jC));
  }
}), GC = /* @__PURE__ */ ot(KC, [["__scopeId", "data-v-8609a4c1"]]), WC = {
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
}, YC = ["aria-hidden", "aria-label"], ZC = ["fill", "width", "height"], XC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, JC = { key: 0 };
function QC(e, t, i, n, a, r) {
  return p(), v("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), v("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", XC, [
        i.title ? (p(), v("title", JC, o(i.title), 1)) : x("", !0)
      ])
    ], 8, ZC))
  ], 16, YC);
}
const e2 = /* @__PURE__ */ ot(WC, [["render", QC]]), t2 = {
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
}, i2 = ["aria-hidden", "aria-label"], n2 = ["fill", "width", "height"], a2 = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, r2 = { key: 0 };
function s2(e, t, i, n, a, r) {
  return p(), v("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), v("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", a2, [
        i.title ? (p(), v("title", r2, o(i.title), 1)) : x("", !0)
      ])
    ], 8, n2))
  ], 16, i2);
}
const l2 = /* @__PURE__ */ ot(t2, [["render", s2]]), o2 = {
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
}, u2 = ["aria-hidden", "aria-label"], c2 = ["fill", "width", "height"], d2 = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, f2 = { key: 0 };
function p2(e, t, i, n, a, r) {
  return p(), v("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), v("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", d2, [
        i.title ? (p(), v("title", f2, o(i.title), 1)) : x("", !0)
      ])
    ], 8, c2))
  ], 16, u2);
}
const h2 = /* @__PURE__ */ ot(o2, [["render", p2]]), v2 = ["aria-selected", "tabindex"], b2 = /* @__PURE__ */ Bt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Dy({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = $v(e, "selected"), i = /* @__PURE__ */ G(!1);
    function n() {
      t.value = !0, i.value = !1, requestAnimationFrame(() => {
        i.value = !0;
      });
    }
    return (a, r) => (p(), v("button", {
      class: Ce(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: u(Ta),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: n
    }, [
      l("span", {
        class: Ce([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: i.value }]),
        onAnimationend: r[0] || (r[0] = (s) => i.value = !1)
      }, [
        l("span", {
          class: Ce([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          ve(nd, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: we(() => [
              l("span", {
                class: Ce([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: Ce([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          ve(nd, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: we(() => [
              l("span", {
                class: Ce([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: Ce(a.$style.sidebarTabsButton__name)
      }, o(e.tab.name), 3)
    ], 10, v2));
  }
}), g2 = "_sidebarTabsButton_q3kBA", m2 = "_sidebarTabsButton_legacy_KQ4d1", y2 = "_sidebarTabsButton_selected_Pjayf", _2 = "_sidebarTabsButton_animatedHighlight_uvp-0", w2 = "_sidebarTabsButton__name_rlQsL", k2 = "_sidebarTabsButton__icon_QzZg4", S2 = "_sidebarTabsButton__iconLayer_ZkZan", C2 = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", T2 = "_sidebarTabsButton__icon_pop_IA0By", A2 = "_sidebarTabsButton__legacyIcon_QhcNW", E2 = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: g2,
  sidebarTabsButton_legacy: m2,
  sidebarTabsButton_selected: y2,
  sidebarTabsButton_animatedHighlight: _2,
  sidebarTabsButton__name: w2,
  sidebarTabsButton__icon: k2,
  sidebarTabsButton__iconLayer: S2,
  sidebarTabsButton__iconLayer_hidden: C2,
  sidebarTabsButton__icon_pop: T2,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: A2
}, x2 = {
  $style: E2
}, $2 = /* @__PURE__ */ ot(b2, [["__cssModules", x2]]), O2 = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: $2
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
      this.tabs.push(e), this.tabs.sort((t, i) => t.order === i.order ? t.name.localeCompare(i.name, [P_()]) : t.order - i.order), this.updateActive();
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
}, N2 = { class: "app-sidebar-tabs" };
function I2(e, t, i, n, a, r) {
  const s = Ye("NcAppSidebarTabsButton");
  return p(), v("div", N2, [
    r.hasMultipleTabs || r.showForSingleTab ? (p(), v("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ce(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = dt(Ae((...d) => r.focusPreviousTab && r.focusPreviousTab(...d), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = dt(Ae((...d) => r.focusNextTab && r.focusNextTab(...d), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = dt(Ae((...d) => r.focusActiveTabContent && r.focusActiveTabContent(...d), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = dt(Ae((...d) => r.focusFirstTab && r.focusFirstTab(...d), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = dt(Ae((...d) => r.focusLastTab && r.focusLastTab(...d), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = dt(Ae((...d) => r.focusFirstTab && r.focusFirstTab(...d), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = dt(Ae((...d) => r.focusLastTab && r.focusLastTab(...d), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...d) => r.handleHighlight && r.handleHighlight(...d)),
      onPointerleave: t[8] || (t[8] = (...d) => r.hideHighlight && r.hideHighlight(...d)),
      onFocusin: t[9] || (t[9] = (...d) => r.handleHighlight && r.handleHighlight(...d)),
      onFocusout: t[10] || (t[10] = (...d) => r.onHighlightFocusOut && r.onHighlightFocusOut(...d))
    }, [
      a.highlightEnabled ? (p(), v("div", {
        key: 0,
        class: Ce(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: pi(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : x("", !0),
      (p(!0), v(W, null, he(a.tabs, (d) => (p(), Pe(s, {
        id: `tab-button-${d.id}`,
        key: d.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${d.id}`,
        selected: a.activeTab === d.id,
        animatedHighlight: a.highlightEnabled,
        tab: d,
        "onUpdate:selected": (c) => r.setActive(d.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : x("", !0),
    l("div", {
      class: Ce(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Be(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const R2 = /* @__PURE__ */ ot(O2, [["render", I2], ["__scopeId", "data-v-74190d2a"]]);
Ca(g0);
const L2 = {
  name: "NcAppSidebar",
  components: {
    NcActions: qd,
    NcAppSidebarHeader: zC,
    NcAppSidebarTabs: R2,
    NcButton: ln,
    NcLoadingIcon: ig,
    NcEmptyContent: GC,
    IconArrowRight: Lb,
    IconClose: Pb,
    IconDockRight: e2,
    IconStar: l2,
    IconStarOutline: h2
  },
  directives: {
    Focus: mC,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: gC
  },
  inject: {
    ncContentSelector: {
      from: Rb,
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
    return Oi("NcAppSidebar:header:ref", e), {
      uid: mu(),
      isMobile: d0(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Rt("Change name"),
      closeTranslated: Rt("Close sidebar"),
      favoriteTranslated: Rt("Favorite"),
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
    isSlotPopulated: Vd,
    t: Rt,
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
      this.focusTrap || (this.focusTrap = Fd([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Zs(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ar.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, P2 = ["aria-labelledby"], D2 = { class: "app-sidebar-header__info" }, F2 = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, M2 = { class: "app-sidebar-header__name-container" }, U2 = { class: "app-sidebar-header__mainname-container" }, z2 = ["placeholder", "value"], j2 = ["title"], B2 = {
  key: 2,
  class: "app-sidebar-header__description"
};
function H2(e, t, i, n, a, r) {
  const s = Ye("IconDockRight"), d = Ye("NcButton"), c = Ye("NcLoadingIcon"), g = Ye("IconStar"), h = Ye("IconStarOutline"), y = Ye("NcAppSidebarHeader"), m = Ye("IconArrowRight"), k = Ye("NcActions"), A = Ye("IconClose"), C = Ye("NcAppSidebarTabs"), $ = Ye("NcEmptyContent"), R = Wf("focus"), L = Wf("click-outside");
  return p(), Pe(S1, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: we(() => [
      me(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${n.uid}__header`,
        onKeydown: t[6] || (t[6] = dt((...P) => r.onKeydownEsc && r.onKeydownEsc(...P), ["esc"]))
      }, [
        r.ncContentSelector && !i.open && !i.noToggle ? (p(), Pe(Ad, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ve(d, ei({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
            onClick: t[0] || (t[0] = (P) => e.$emit("update:open", !0))
          }), {
            icon: we(() => [
              Be(e.$slots, "toggle-icon", {}, () => [
                ve(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : x("", !0),
        l("header", {
          class: Ce(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || i.background,
            "app-sidebar-header--compact": i.compact
          }])
        }, [
          i.empty ? (p(), Pe(y, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: i.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Be(e.$slots, "info", { key: 0 }, () => [
            l("div", D2, [
              r.isSlotPopulated(e.$slots.header?.()) || i.background ? (p(), v("div", {
                key: 0,
                class: Ce(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: pi({
                  backgroundImage: `url(${i.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...P) => r.onFigureClick && r.onFigureClick(...P)),
                onKeydown: t[2] || (t[2] = dt((...P) => r.onFigureClick && r.onFigureClick(...P), ["enter"]))
              }, [
                Be(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : x("", !0),
              l("div", {
                class: Ce(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": i.nameEditable && !i.subname,
                  "app-sidebar-header__desc--with-subname--editable": i.nameEditable && i.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (p(), v("div", F2, [
                  Be(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (p(), Pe(d, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ae(r.toggleStarred, ["prevent"])
                    }, {
                      icon: we(() => [
                        i.starLoading ? (p(), Pe(c, { key: 0 })) : a.isStarred ? (p(), Pe(g, {
                          key: 1,
                          size: 20
                        })) : (p(), Pe(h, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : x("", !0)
                  ], !0)
                ])) : x("", !0),
                l("div", M2, [
                  l("div", U2, [
                    me(ve(y, {
                      class: "app-sidebar-header__mainname",
                      name: i.name,
                      linkify: i.linkifyName,
                      title: i.title,
                      tabindex: i.nameEditable ? 0 : -1,
                      onClick: Ae(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [nr, !i.nameEditable]
                    ]),
                    i.nameEditable ? me((p(), v("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ae((...P) => r.onSubmitName && r.onSubmitName(...P), ["prevent"]))
                    }, [
                      me(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: i.namePlaceholder,
                        value: i.name,
                        onKeydown: t[3] || (t[3] = dt(Ae((...P) => r.onDismissEditing && r.onDismissEditing(...P), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...P) => r.onNameInput && r.onNameInput(...P))
                      }, null, 40, z2), [
                        [R]
                      ]),
                      ve(d, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: we(() => [
                          ve(m, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [L, () => r.onSubmitName()]
                    ]) : x("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (p(), Pe(k, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: i.forceMenu
                    }, {
                      default: we(() => [
                        Be(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : x("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (p(), v("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Be(e.$slots, "subname", {}, () => [
                      ae(o(i.subname), 1)
                    ], !0)
                  ], 8, j2)) : x("", !0)
                ])
              ], 2)
            ])
          ], !0),
          ve(d, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ae(r.closeSidebar, ["prevent"])
          }, {
            icon: we(() => [
              ve(A, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (p(), v("div", B2, [
            Be(e.$slots, "description", {}, void 0, !0)
          ])) : x("", !0)
        ], 2),
        me(ve(C, {
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
          [nr, !i.loading]
        ]),
        i.loading ? (p(), Pe($, { key: 1 }, {
          icon: we(() => [
            ve(c, { size: 64 })
          ]),
          _: 1
        })) : x("", !0)
      ], 40, P2), [
        [nr, i.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const V2 = /* @__PURE__ */ ot(L2, [["render", H2], ["__scopeId", "data-v-c2c6820b"]]), q2 = {
  name: "NcActionLink",
  mixins: [Fb],
  inject: {
    isInSemanticMenu: {
      from: Md,
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
}, K2 = ["role"], G2 = ["download", "href", "aria-label", "target", "title", "role"], W2 = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, Y2 = { class: "action-link__name" }, Z2 = ["textContent"], X2 = ["textContent"], J2 = {
  key: 2,
  class: "action-link__text"
};
function Q2(e, t, i, n, a, r) {
  return p(), v("li", {
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
      onClick: t[0] || (t[0] = (...s) => e.onClick && e.onClick(...s))
    }, [
      Be(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: Ce(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: pi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (p(), v("span", W2, [
        l("strong", Y2, o(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: o(e.text)
        }, null, 8, Z2)
      ])) : e.isLongText ? (p(), v("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: o(e.text)
      }, null, 8, X2)) : (p(), v("span", J2, o(e.text), 1)),
      x("", !0)
    ], 8, G2)
  ], 8, K2);
}
const Ic = /* @__PURE__ */ ot(q2, [["render", Q2], ["__scopeId", "data-v-32f01b7a"]]);
Ca(k0);
const eT = `<!--
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
`, tT = `<!--
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
`, iT = { class: "vue-skip-actions__container" }, nT = { class: "vue-skip-actions__headline" }, aT = { class: "vue-skip-actions__buttons" }, rT = /* @__PURE__ */ Bt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    Oi(Ib, d), Oi(Rb, "#content-vue"), Oi("appName", j(() => t.appName));
    const i = cl(), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(), r = j(() => a.value === "navigation" ? tT : eT);
    wv(() => {
      const c = document.getElementById("skip-actions");
      c && (c.innerHTML = "", c.classList.add("vue-skip-actions"));
    });
    function s() {
      Rn("toggle-navigation", { open: !0 }), Nt(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function d(c) {
      n.value = c, a.value || (a.value = "navigation");
    }
    return (c, g) => (p(), v("div", {
      id: "content-vue",
      class: Ce(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": u(Ta) }]])
    }, [
      (p(), Pe(Ad, { to: "#skip-actions" }, [
        l("div", iT, [
          l("div", nT, o(u(Rt)("Keyboard navigation help")), 1),
          l("div", aT, [
            me(ve(ln, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ae(s, ["prevent"]),
              onFocusin: g[0] || (g[0] = (h) => a.value = "navigation"),
              onMouseover: g[1] || (g[1] = (h) => a.value = "navigation")
            }, {
              default: we(() => [
                ae(o(u(Rt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [nr, n.value]
            ]),
            ve(ln, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: g[2] || (g[2] = (h) => a.value = "content"),
              onMouseover: g[3] || (g[3] = (h) => a.value = "content")
            }, {
              default: we(() => [
                ae(o(u(Rt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          me(ve(gu, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [nr, !u(i)]
          ])
        ])
      ])),
      Be(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), sT = /* @__PURE__ */ ot(rT, [["__scopeId", "data-v-d13dcb98"]]), lT = { class: "library-shelf-tree-node" }, oT = ["aria-expanded", "aria-label"], uT = ["href"], cT = { class: "library-shelf-summary-title" }, dT = { dir: "auto" }, fT = { class: "library-muted" }, pT = { dir: "auto" }, hT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, vT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, bT = {
  key: 3,
  class: "library-shelf-tree"
}, gT = ["disabled"], mT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(!1), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G(!1), s = /* @__PURE__ */ G([]), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(0);
    async function g() {
      i.value = !i.value, !(!i.value || n.value || a.value) && await h();
    }
    async function h() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const y = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(c.value) }), m = await fetch(`${t.childrenUrl}?${y}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!m.ok) throw new Error("Shelf children request failed");
          const k = await m.json(), A = Array.isArray(k?.nodes) ? k.nodes : [];
          s.value.push(...A), d.value = k?.hasMore === !0, c.value = Number.isInteger(k?.nextOffset) ? k.nextOffset : s.value.length, n.value = !d.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (y, m) => {
      const k = Ye("ShelfTreeNode", !0);
      return p(), v("li", lT, [
        e.node.hasChildren ? (p(), v("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? u(w)("library", "Collapse {folder}", { folder: e.node.label }) : u(w)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: g
        }, o(i.value ? "−" : "+"), 9, oT)) : x("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", cT, [
            l("strong", null, [
              l("bdi", dT, o(e.node.label), 1)
            ]),
            l("span", null, o(u(xi)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", fT, [
            l("bdi", pT, o(e.node.path), 1)
          ])
        ], 8, uT),
        a.value ? (p(), v("small", hT, o(u(w)("library", "Loading folders…")), 1)) : r.value ? (p(), v("small", vT, o(u(w)("library", "Could not load folders.")), 1)) : x("", !0),
        i.value && s.value.length ? (p(), v("ul", bT, [
          (p(!0), v(W, null, he(s.value, (A) => (p(), Pe(k, {
            key: A.id,
            node: A,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : x("", !0),
        i.value && d.value ? (p(), v("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: h
        }, o(u(w)("library", "Load more folders")), 9, gT)) : x("", !0)
      ]);
    };
  }
}, yT = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, _T = ["src"], wT = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, kT = {
  __name: "CatalogueCover",
  props: { src: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G(typeof IntersectionObserver > "u"), a = /* @__PURE__ */ G("loading");
    let r;
    return qe(() => t.src, () => {
      a.value = "loading";
    }), $t(() => {
      n.value || (r = new IntersectionObserver((s) => {
        s.some((d) => d.isIntersecting) && (n.value = !0, r.disconnect());
      }, { rootMargin: "240px" }), r.observe(i.value));
    }), ki(() => r?.disconnect()), (s, d) => (p(), v("span", {
      ref_key: "frame",
      ref: i,
      class: Ce(["library-cover-frame", { "library-cover-frame--error": a.value === "error" }])
    }, [
      a.value === "loading" ? (p(), v("span", yT)) : x("", !0),
      (p(), v("img", {
        key: e.src,
        class: Ce(["library-cover-image", { "library-cover-image--loaded": a.value === "loaded" }]),
        src: n.value ? e.src : void 0,
        alt: "",
        loading: "lazy",
        decoding: "async",
        onLoad: d[0] || (d[0] = (c) => a.value = "loaded"),
        onError: d[1] || (d[1] = (c) => a.value = "error")
      }, null, 42, _T)),
      a.value === "error" ? (p(), v("span", wT, o(u(w)("library", "Cover unavailable")), 1)) : x("", !0)
    ], 2));
  }
};
async function Nh(e = "", t = "", i = null) {
  const n = await fetch(`${Ki("/apps/library/api/lists")}${e}`, {
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
const Ga = /* @__PURE__ */ new Map();
function ba(e = "", t = "", i = null) {
  if (i !== null)
    return Ga.clear(), Nh(e, t, i).finally(() => Ga.clear());
  if (Ga.has(e)) return Ga.get(e);
  const n = Nh(e, t).finally(() => {
    Ga.get(e) === n && Ga.delete(e);
  });
  return Ga.set(e, n), n;
}
const ST = ["aria-busy"], CT = { class: "library-list-inline-actions" }, TT = ["disabled", "aria-label"], AT = ["value"], ET = ["disabled"], xT = ["href"], $T = ["href"], OT = {
  key: 0,
  role: "status"
}, NT = {
  key: 1,
  role: "alert"
}, IT = ["disabled"], RT = {
  key: 3,
  role: "status"
}, fd = {
  __name: "AddToList",
  props: { preferredListId: { type: Number, default: null }, itemIds: { type: Array, required: !0 }, requestToken: { type: String, default: "" }, listsUrl: { type: String, required: !0 } },
  emits: ["added"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(""), s = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(""), c = /* @__PURE__ */ G("");
    async function g() {
      s.value = !0, d.value = "";
      try {
        const y = await ba(i.itemIds.length === 1 ? `?itemId=${i.itemIds[0]}` : "");
        a.value = y.lists;
        const m = Number(r.value) || i.preferredListId || Number(new URLSearchParams(window.location.search).get("addToList"));
        r.value = String(a.value.find((k) => k.id === m)?.id || a.value[0]?.id || "");
      } catch (y) {
        d.value = y.message;
      } finally {
        s.value = !1;
      }
    }
    async function h() {
      const y = a.value.find((k) => k.id === Number(r.value));
      if (s.value || !y || i.itemIds.length === 0) return;
      const m = [...i.itemIds];
      s.value = !0, d.value = "", c.value = "";
      try {
        const k = await ba(`/${y.id}/actions`, i.requestToken, { action: "add", revision: y.revision, itemIds: m });
        y.revision = k.revision, c.value = w("library", "Added: {added}. Already in list: {present}. Unavailable: {skipped}.", { added: k.added, present: k.alreadyPresent, skipped: k.skipped }), m.length === 1 && k.skipped === 0 && (y.containsItem = !0), n("added", k);
      } catch (k) {
        d.value = k.message;
      } finally {
        s.value = !1;
      }
    }
    return qe(() => i.itemIds.join(","), () => {
      c.value = "";
    }), $t(g), (y, m) => (p(), v("div", {
      class: "library-add-to-list",
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("div", CT, [
        a.value.length ? me((p(), v("select", {
          key: 0,
          "onUpdate:modelValue": m[0] || (m[0] = (k) => r.value = k),
          disabled: s.value,
          "aria-label": u(w)("library", "Choose a list"),
          onChange: m[1] || (m[1] = (k) => c.value = "")
        }, [
          (p(!0), v(W, null, he(a.value, (k) => (p(), v("option", {
            key: k.id,
            value: String(k.id)
          }, o(k.name), 9, AT))), 128))
        ], 40, TT)), [
          [rt, r.value]
        ]) : x("", !0),
        a.value.length ? (p(), v("button", {
          key: 1,
          type: "button",
          class: "button primary",
          disabled: s.value || e.itemIds.length === 0 || !r.value,
          onClick: h
        }, o(u(w)("library", "Add to list")), 9, ET)) : x("", !0),
        !s.value && !a.value.length && !d.value ? (p(), v("a", {
          key: 2,
          href: `${e.listsUrl}&new=1`
        }, o(u(w)("library", "Create a new list")), 9, xT)) : x("", !0),
        c.value && r.value ? (p(), v("a", {
          key: 3,
          href: `${e.listsUrl}&listId=${r.value}`
        }, o(u(w)("library", "Back to list")), 9, $T)) : x("", !0)
      ]),
      s.value ? (p(), v("p", OT, o(u(w)("library", "Loading or saving…")), 1)) : x("", !0),
      d.value ? (p(), v("p", NT, o(d.value), 1)) : x("", !0),
      d.value ? (p(), v("button", {
        key: 2,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: g
      }, o(u(w)("library", "Reload list")), 9, IT)) : x("", !0),
      c.value ? (p(), v("p", RT, o(c.value), 1)) : x("", !0)
    ], 8, ST));
  }
}, LT = ["onKeydown"], PT = ["aria-label", "aria-describedby"], DT = ["id"], Je = {
  __name: "LabelHelp",
  props: { text: { type: String, required: !0 } },
  setup(e) {
    const t = ky(), i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G(null), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G({});
    let s;
    const d = `${t}-label`;
    $t(() => {
      const $ = i.value?.closest("label"), R = $?.querySelector("input, select, textarea"), L = i.value?.closest("h1, h2, h3, h4");
      $ && R && !$.htmlFor && (R.id ||= `${t}-control`, $.htmlFor = R.id);
      for (const P of [R, L])
        P && !P.hasAttribute("aria-label") && !P.hasAttribute("aria-labelledby") && P.setAttribute("aria-labelledby", d);
    });
    async function c() {
      clearTimeout(s), a.value = !0, await Nt(), g();
    }
    function g() {
      if (!i.value || !n.value) return;
      const $ = i.value.getBoundingClientRect(), R = n.value.offsetHeight;
      r.value = { left: `${Math.max(8, Math.min($.left, window.innerWidth - 336))}px`, top: `${Math.max(8, $.bottom + R + 12 < window.innerHeight ? $.bottom + 8 : $.top - R - 8)}px` };
    }
    function h() {
      clearTimeout(s);
    }
    function y() {
      clearTimeout(s), a.value = !1;
    }
    function m() {
      s = setTimeout(() => {
        i.value?.contains(document.activeElement) || y();
      }, 150);
    }
    function k($) {
      !i.value?.contains($.target) && !n.value?.contains($.target) && y();
    }
    function A($) {
      $.key === "Escape" && y();
    }
    function C($) {
      a.value && (!($.target instanceof Node) || !n.value?.contains($.target)) && g();
    }
    return document.addEventListener("keydown", A), document.addEventListener("pointerdown", k), window.addEventListener("scroll", C, !0), ki(() => {
      clearTimeout(s), document.removeEventListener("pointerdown", k), window.removeEventListener("scroll", C, !0), document.removeEventListener("keydown", A);
    }), ($, R) => (p(), v("span", {
      ref_key: "anchor",
      ref: i,
      class: "library-label-help",
      onPointerenter: R[0] || (R[0] = (L) => L.pointerType !== "touch" && c()),
      onPointerleave: m,
      onKeydown: dt(Ae(y, ["stop", "prevent"]), ["esc"])
    }, [
      l("span", { id: d }, [
        Be($.$slots, "default")
      ]),
      l("button", {
        type: "button",
        class: "library-label-help-button",
        "aria-label": u(w)("library", "Help"),
        "aria-describedby": a.value ? u(t) : void 0,
        onFocus: c,
        onBlur: m,
        onClick: Ae(c, ["stop", "prevent"])
      }, "?", 40, PT),
      (p(), Pe(Ad, { to: "body" }, [
        a.value ? (p(), v("span", {
          key: 0,
          id: u(t),
          ref_key: "popup",
          ref: n,
          class: "library-label-help-popup",
          role: "tooltip",
          style: pi(r.value),
          onPointerenter: h,
          onPointerleave: m
        }, o(e.text), 45, DT)) : x("", !0)
      ]))
    ], 40, LT));
  }
}, FT = ["aria-label", "aria-busy"], MT = { class: "library-lists-heading" }, UT = ["href"], zT = ["disabled"], jT = {
  key: 0,
  role: "alert"
}, BT = ["disabled"], HT = {
  key: 2,
  role: "status"
}, VT = {
  key: 3,
  role: "status"
}, qT = ["disabled"], KT = ["disabled"], GT = { class: "library-list-actions" }, WT = ["disabled"], YT = ["disabled"], ZT = {
  key: 0,
  class: "library-list-description",
  dir: "auto"
}, XT = {
  key: 1,
  class: "library-list-actions"
}, JT = ["href"], QT = ["disabled"], eA = ["disabled"], tA = ["aria-label"], iA = ["disabled"], nA = ["disabled"], aA = {
  key: 3,
  class: "library-lists-empty"
}, rA = ["start"], sA = ["id", "onDrop"], lA = { class: "library-list-entry-heading" }, oA = ["draggable", "title", "onDragstart"], uA = ["src"], cA = { class: "library-list-book" }, dA = { key: 0 }, fA = ["href"], pA = { key: 1 }, hA = {
  key: 2,
  dir: "auto"
}, vA = { key: 3 }, bA = ["href"], gA = {
  key: 0,
  class: "library-list-note",
  dir: "auto"
}, mA = ["onSubmit"], yA = ["disabled"], _A = { class: "library-list-actions" }, wA = ["disabled"], kA = ["disabled"], SA = {
  key: 2,
  class: "library-list-actions"
}, CA = ["disabled", "onClick"], TA = ["disabled", "onClick"], AA = ["disabled", "onClick"], EA = ["disabled", "onClick"], xA = {
  key: 3,
  class: "library-list-confirm"
}, $A = ["disabled", "onClick"], OA = ["disabled"], NA = ["aria-label"], IA = ["disabled"], RA = ["disabled"], LA = {
  key: 1,
  class: "library-lists-empty"
}, PA = { class: "library-list-cards" }, DA = ["href"], FA = { dir: "auto" }, MA = {
  key: 0,
  dir: "auto"
}, UA = {
  __name: "PersonalLists",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 }, listsUrl: { type: String, required: !0 } },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(null), s = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(""), c = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(!1), h = /* @__PURE__ */ Ft({ name: "", description: "" }), y = /* @__PURE__ */ G(null), m = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(!1), A = /* @__PURE__ */ G(null), C = /* @__PURE__ */ G(null), $ = /* @__PURE__ */ G(null), R = /* @__PURE__ */ G(Number(new URLSearchParams(window.location.search).get("listId")) || null), L = Number(new URLSearchParams(window.location.search).get("addItem")) || null, P = j(() => !s.value && y.value === null);
    async function N(z = 1, q = g.value) {
      s.value = !0, d.value = "";
      try {
        R.value ? r.value = await ba(`/${R.value}?page=${z}`) : a.value = (await ba()).lists, q || (y.value = null, g.value = !1);
      } catch (I) {
        d.value = I.message;
      } finally {
        s.value = !1;
      }
    }
    function pe() {
      h.name = r.value?.list.name || "", h.description = r.value?.list.description || "", g.value = !0, k.value = !1, d.value = "";
    }
    async function Q() {
      s.value = !0, d.value = "", c.value = "";
      try {
        if (r.value)
          await ba(`/${r.value.list.id}/actions`, i.requestToken, { action: "update", revision: r.value.list.revision, ...h });
        else {
          R.value = (await ba("", i.requestToken, h)).list.id;
          const z = new URL(window.location.href);
          z.searchParams.set("listId", R.value), window.history.replaceState({}, "", z);
        }
        g.value = !1, await N(1, !0), n("changed"), c.value = w("library", "List saved."), await Nt(), $.value?.focus();
      } catch (z) {
        d.value = z.message;
      } finally {
        s.value = !1;
      }
    }
    async function E(z, q) {
      s.value = !0, d.value = "", c.value = "";
      try {
        const I = await ba(`/${r.value.list.id}/actions`, i.requestToken, { ...z, revision: r.value.list.revision });
        if (z.action === "delete") {
          r.value = null, R.value = null, k.value = !1;
          const V = new URL(window.location.href);
          V.searchParams.delete("listId"), window.history.replaceState({}, "", V);
        }
        if (y.value = null, A.value = null, z.action === "note") {
          const V = r.value.entries.find((J) => J.id === z.entryId);
          V && (V.note = z.note.trim()), r.value.list.revision = I.revision;
        } else await N(r.value?.page || 1);
        z.action === "delete" && n("changed"), c.value = q, await Nt(), z.action === "move" ? document.getElementById(`library-list-entry-${z.entryId}`)?.focus() : $.value?.focus();
      } catch (I) {
        d.value = I.message;
      } finally {
        s.value = !1;
      }
    }
    function H(z) {
      y.value = z.id, m.value = z.note, A.value = null;
    }
    function K(z, q) {
      return E({ action: "move", entryId: z.id, direction: q }, w("library", "Reading order saved."));
    }
    function Z(z, q) {
      C.value = q.id, z.dataTransfer.setData("text/plain", String(q.id));
    }
    function ne(z) {
      if (C.value === null || !P.value) return;
      const q = C.value;
      return C.value = null, E({ action: "move", entryId: q, beforeId: z }, w("library", "Reading order saved."));
    }
    return $t(async () => {
      await N(), !R.value && new URLSearchParams(window.location.search).get("new") === "1" && pe();
    }), (z, q) => (p(), v("section", {
      class: "library-personal-lists",
      "aria-label": u(w)("library", "Personal lists"),
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("header", MT, [
        l("div", null, [
          R.value ? (p(), v("a", {
            key: 0,
            href: e.listsUrl
          }, "← " + o(u(w)("library", "All lists")), 9, UT)) : x("", !0),
          l("h1", {
            ref_key: "heading",
            ref: $,
            tabindex: "-1"
          }, [
            ve(Je, {
              text: u(w)("library", "Private reading lists, in your own order, with your own notes.")
            }, {
              default: we(() => [
                ae(o(r.value?.list.name || u(w)("library", "Lists")), 1)
              ]),
              _: 1
            }, 8, ["text"])
          ], 512)
        ]),
        !r.value && !R.value ? (p(), v("button", {
          key: 0,
          type: "button",
          class: "button primary",
          disabled: s.value || g.value,
          onClick: pe
        }, o(u(w)("library", "New list")), 9, zT)) : x("", !0)
      ]),
      d.value ? (p(), v("p", jT, o(d.value), 1)) : x("", !0),
      d.value ? (p(), v("button", {
        key: 1,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: q[0] || (q[0] = (I) => N(r.value?.page || 1, !0))
      }, o(u(w)("library", "Reload list")), 9, BT)) : x("", !0),
      c.value ? (p(), v("p", HT, o(c.value), 1)) : x("", !0),
      s.value ? (p(), v("p", VT, o(u(w)("library", "Loading or saving…")), 1)) : x("", !0),
      g.value ? (p(), v("form", {
        key: 4,
        class: "library-list-editor",
        onSubmit: Ae(Q, ["prevent"])
      }, [
        l("label", null, [
          ae(o(u(w)("library", "List name")), 1),
          me(l("input", {
            "onUpdate:modelValue": q[1] || (q[1] = (I) => h.name = I),
            required: "",
            maxlength: "120",
            disabled: s.value
          }, null, 8, qT), [
            [We, h.name]
          ])
        ]),
        l("label", null, [
          ae(o(u(w)("library", "Description / list note")), 1),
          me(l("textarea", {
            "onUpdate:modelValue": q[2] || (q[2] = (I) => h.description = I),
            rows: "3",
            maxlength: "10000",
            disabled: s.value
          }, null, 8, KT), [
            [We, h.description]
          ])
        ]),
        l("div", GT, [
          l("button", {
            type: "submit",
            class: "button primary",
            disabled: s.value || !h.name.trim()
          }, o(u(w)("library", "Save list")), 9, WT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: s.value,
            onClick: q[3] || (q[3] = (I) => g.value = !1)
          }, o(u(w)("library", "Cancel")), 9, YT)
        ])
      ], 32)) : x("", !0),
      r.value ? (p(), v(W, { key: 5 }, [
        r.value.list.description && !g.value ? (p(), v("p", ZT, o(r.value.list.description), 1)) : x("", !0),
        g.value ? x("", !0) : (p(), v("div", XT, [
          l("a", {
            class: "button primary",
            href: `${e.catalogueUrl}?addToList=${r.value.list.id}`
          }, o(u(w)("library", "Add books from catalogue")), 9, JT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: pe
          }, o(u(w)("library", "Edit list")), 9, QT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: q[4] || (q[4] = (I) => k.value = !k.value)
          }, o(u(w)("library", "Delete list")), 9, eA)
        ])),
        k.value ? (p(), v("div", {
          key: 2,
          class: "library-list-confirm",
          role: "group",
          "aria-label": u(w)("library", "Confirm list deletion")
        }, [
          l("p", null, o(u(w)("library", "Delete this list and all its notes? Books stay in your library. This cannot be undone.")), 1),
          l("button", {
            class: "button",
            type: "button",
            disabled: !P.value,
            onClick: q[5] || (q[5] = (I) => E({ action: "delete" }, u(w)("library", "List deleted.")))
          }, o(u(w)("library", "Delete list and notes")), 9, iA),
          l("button", {
            class: "button secondary",
            type: "button",
            disabled: s.value,
            onClick: q[6] || (q[6] = (I) => k.value = !1)
          }, o(u(w)("library", "Cancel")), 9, nA)
        ], 8, tA)) : x("", !0),
        r.value.total === 0 && !s.value ? (p(), v("p", aA, o(u(w)("library", "This list is empty. Select books in the catalogue and choose Add to list.")), 1)) : x("", !0),
        l("ol", {
          class: "library-list-entries",
          start: (r.value.page - 1) * 25 + 1
        }, [
          (p(!0), v(W, null, he(r.value.entries, (I) => (p(), v("li", {
            id: `library-list-entry-${I.id}`,
            key: I.id,
            class: "library-list-entry",
            tabindex: "-1",
            onDragover: q[11] || (q[11] = Ae(() => {
            }, ["prevent"])),
            onDrop: Ae((V) => ne(I.id), ["prevent"])
          }, [
            l("div", lA, [
              l("span", {
                class: "library-list-drag",
                draggable: P.value,
                title: u(w)("library", "Drag to reorder, or use Move up and Move down"),
                "aria-hidden": "true",
                onDragstart: (V) => Z(V, I),
                onDragend: q[7] || (q[7] = (V) => C.value = null)
              }, "⠿", 40, oA),
              I.book ? (p(), v("img", {
                key: 0,
                src: I.book.coverUrl,
                alt: "",
                width: "48",
                height: "64",
                loading: "lazy"
              }, null, 8, uA)) : x("", !0),
              l("div", cA, [
                I.book ? (p(), v("h2", dA, [
                  l("a", {
                    href: I.book.detailsUrl,
                    dir: "auto"
                  }, o(I.book.title), 9, fA)
                ])) : (p(), v("h2", pA, o(u(w)("library", "Unavailable book")), 1)),
                I.book?.creators ? (p(), v("p", hA, o(I.book.creators), 1)) : x("", !0),
                I.book ? x("", !0) : (p(), v("p", vA, o(u(w)("library", "The file is missing or access is unavailable. Your note and place in the list are kept.")), 1))
              ]),
              I.book ? (p(), v("a", {
                key: 1,
                class: "button secondary",
                href: I.book.openUrl
              }, o(u(w)("library", "Open")), 9, bA)) : x("", !0)
            ]),
            I.note && y.value !== I.id ? (p(), v("p", gA, o(I.note), 1)) : x("", !0),
            y.value === I.id ? (p(), v("form", {
              key: 1,
              class: "library-list-editor",
              onSubmit: Ae((V) => E({ action: "note", entryId: I.id, note: m.value }, u(w)("library", "Note saved.")), ["prevent"])
            }, [
              l("label", null, [
                ae(o(u(w)("library", "Your note for this book in this list")), 1),
                me(l("textarea", {
                  "onUpdate:modelValue": q[8] || (q[8] = (V) => m.value = V),
                  maxlength: "10000",
                  rows: "3",
                  disabled: s.value
                }, null, 8, yA), [
                  [We, m.value]
                ])
              ]),
              l("div", _A, [
                l("button", {
                  type: "submit",
                  class: "button primary",
                  disabled: s.value
                }, o(u(w)("library", "Save note")), 9, wA),
                l("button", {
                  type: "button",
                  class: "button secondary",
                  disabled: s.value,
                  onClick: q[9] || (q[9] = (V) => y.value = null)
                }, o(u(w)("library", "Cancel")), 9, kA)
              ])
            ], 40, mA)) : (p(), v("div", SA, [
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (V) => H(I)
              }, o(I.note ? u(w)("library", "Edit note") : u(w)("library", "Add note")), 9, CA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || I.number === 1,
                onClick: (V) => K(I, "up")
              }, o(u(w)("library", "Move up")), 9, TA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || I.number === r.value.total,
                onClick: (V) => K(I, "down")
              }, o(u(w)("library", "Move down")), 9, AA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (V) => A.value = I.id
              }, o(u(w)("library", "Remove from list")), 9, EA)
            ])),
            A.value === I.id ? (p(), v("div", xA, [
              l("p", null, o(u(w)("library", "Remove this entry and its note? The book stays in your library.")), 1),
              l("button", {
                type: "button",
                class: "button",
                disabled: !P.value,
                onClick: (V) => E({ action: "remove", entryId: I.id }, u(w)("library", "Book removed from list."))
              }, o(u(w)("library", "Remove entry and note")), 9, $A),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: s.value,
                onClick: q[10] || (q[10] = (V) => A.value = null)
              }, o(u(w)("library", "Cancel")), 9, OA)
            ])) : x("", !0)
          ], 40, sA))), 128))
        ], 8, rA),
        r.value.pages > 1 ? (p(), v("nav", {
          key: 4,
          class: "library-list-actions",
          "aria-label": u(w)("library", "List pages")
        }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === 1,
            onClick: q[12] || (q[12] = (I) => N(r.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, IA),
          l("span", null, o(u(w)("library", "Page {page} of {pages}", { page: r.value.page, pages: r.value.pages })), 1),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === r.value.pages,
            onClick: q[13] || (q[13] = (I) => N(r.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, RA)
        ], 8, NA)) : x("", !0)
      ], 64)) : R.value ? x("", !0) : (p(), v(W, { key: 6 }, [
        u(L) ? (p(), Pe(fd, {
          key: 0,
          "item-ids": [u(L)],
          "request-token": e.requestToken,
          "lists-url": e.listsUrl,
          onAdded: q[14] || (q[14] = (I) => N())
        }, null, 8, ["item-ids", "request-token", "lists-url"])) : x("", !0),
        !a.value.length && !s.value && !g.value ? (p(), v("p", LA, o(u(w)("library", "Create your first list for a reading plan, a project or books to return to.")), 1)) : x("", !0),
        l("ul", PA, [
          (p(!0), v(W, null, he(a.value, (I) => (p(), v("li", {
            key: I.id
          }, [
            l("a", {
              href: `${e.listsUrl}&listId=${I.id}`
            }, [
              l("h2", FA, o(I.name), 1),
              l("p", null, o(u(w)("library", "Books: {count}", { count: I.count })), 1),
              I.description ? (p(), v("p", MA, o(I.description), 1)) : x("", !0)
            ], 8, DA)
          ]))), 128))
        ])
      ], 64))
    ], 8, FT));
  }
};
function fg(e, t, i) {
  const n = /* @__PURE__ */ G({}), a = /* @__PURE__ */ G("idle");
  let r, s, d = 0;
  return qe([e, t], () => {
    clearTimeout(r), s?.abort();
    const c = ++d;
    n.value = {}, a.value = t.value ? "pending" : "disabled", !(!t.value || !e.value.length) && (r = setTimeout(async () => {
      s = new AbortController();
      try {
        const g = await fetch(Ki("/apps/library/api/duplicate-suggestions/lookup"), { method: "POST", credentials: "same-origin", cache: "no-store", signal: s.signal, headers: { "Content-Type": "application/json", requesttoken: i.value }, body: JSON.stringify({ itemIds: e.value.slice(0, 100) }) });
        if (!g.ok) throw new Error("lookup_failed");
        const h = await g.json();
        if (c !== d) return;
        n.value = h.items || {}, a.value = h.enabled ? h.status : "disabled";
      } catch (g) {
        c === d && g.name !== "AbortError" && (a.value = "error");
      }
    }, 250));
  }, { immediate: !0 }), ki(() => {
    d++, clearTimeout(r), s?.abort();
  }), { results: n, status: a };
}
const zA = ["aria-label", "aria-busy"], jA = {
  key: 0,
  role: "status"
}, BA = {
  key: 1,
  role: "alert"
}, HA = {
  key: 2,
  role: "status"
}, VA = { key: 3 }, qA = { key: 4 }, KA = {
  key: 5,
  role: "status"
}, GA = {
  key: 6,
  class: "library-suggestion-list"
}, WA = ["href"], YA = ["disabled", "onClick"], ZA = {
  key: 0,
  role: "status"
}, XA = { class: "library-suggestion-list" }, JA = { class: "library-suggestion-comparison" }, QA = ["src"], eE = { class: "library-duplicate-actions" }, tE = ["href"], iE = ["href"], nE = ["disabled", "onClick"], aE = { class: "library-duplicate-actions" }, rE = ["disabled"], sE = ["disabled"], lE = ["disabled"], pg = {
  __name: "DuplicateSuggestions",
  props: { itemId: Number, requestToken: String, enabled: { type: Boolean, default: !0 }, compareId: { type: Number, default: 0 }, full: { type: Boolean, default: !1 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(0), n = j(() => (i.value, t.itemId ? [t.itemId] : [])), a = j(() => t.enabled), r = j(() => t.requestToken), { results: s, status: d } = fg(n, a, r), c = j(() => s.value[t.itemId]), g = /* @__PURE__ */ G(null), h = /* @__PURE__ */ G(!1), y = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(!1), k = { formats: w("library", "Alternative formats"), languages: w("library", "Different languages"), years: w("library", "Different publication years"), publishers: w("library", "Different publishers"), identifiers: w("library", "Different ISBNs") };
    let A = 0;
    async function C(L, P) {
      const N = await fetch(Ki("/apps/library/api/duplicate-suggestions" + L), { credentials: "same-origin", cache: "no-store", method: P ? "POST" : "GET", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...P ? { body: JSON.stringify(P) } : {} });
      if (!N.ok) throw new Error(N.status === 409 ? w("library", "These books changed after the scan. Run a new scan before reviewing this comparison.") : w("library", "Could not complete the duplicate review. Please try again."));
      return N.json();
    }
    async function $(L) {
      const P = ++A;
      h.value = !0, y.value = "", m.value = !1;
      try {
        const N = await C(`/compare/${t.itemId}/${L}`);
        P === A && (g.value = N);
      } catch (N) {
        P === A && (y.value = N.message);
      } finally {
        P === A && (h.value = !1);
      }
    }
    async function R(L, P = 0) {
      h.value = !0, y.value = "";
      try {
        await C(`/compare/${g.value.books[0].id}/${g.value.books[1].id}`, { signature: g.value.signature, decision: L, preferredId: P }), m.value = !0, i.value++, g.value = null;
      } catch (N) {
        y.value = N.message;
      } finally {
        h.value = !1;
      }
    }
    return qe(() => [t.itemId, t.compareId], () => {
      A++, g.value = null, t.full && t.compareId && $(t.compareId);
    }, { immediate: !0 }), (L, P) => (p(), v("section", {
      class: "library-duplicate-suggestions",
      "aria-label": u(w)("library", "Possible duplicates"),
      "aria-busy": h.value ? "true" : "false"
    }, [
      l("h3", null, o(u(w)("library", "Possible duplicates")), 1),
      u(d) === "pending" ? (p(), v("p", jA, o(u(w)("library", "Checking possible duplicates")), 1)) : x("", !0),
      u(d) === "error" || y.value ? (p(), v("p", BA, o(y.value || u(w)("library", "Could not complete the duplicate review. Please try again.")), 1)) : x("", !0),
      u(d) === "building" || c.value?.status === "partial" ? (p(), v("p", HA, o(u(w)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : x("", !0),
      c.value?.status === "unavailable" ? (p(), v("p", VA, o(u(w)("library", "These books are no longer available. Start a new scan.")), 1)) : x("", !0),
      c.value?.status === "checked" && !c.value.count ? (p(), v("p", qA, o(u(w)("library", "No unreviewed suggestions found.")), 1)) : x("", !0),
      m.value ? (p(), v("p", KA, o(u(w)("library", "Review saved. Your files and catalogue metadata were not changed.")), 1)) : x("", !0),
      c.value?.count && !g.value ? (p(), v("ul", GA, [
        (p(!0), v(W, null, he(c.value.matches, (N) => (p(), v("li", {
          key: N.id
        }, [
          e.full ? (p(), v("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: h.value,
            onClick: (pe) => $(N.id)
          }, [
            l("bdi", null, o(N.title), 1),
            ae(" · " + o(N.format.toUpperCase()), 1)
          ], 8, YA)) : (p(), v("a", {
            key: 0,
            href: N.url
          }, [
            l("bdi", null, o(N.title), 1),
            ae(" · " + o(N.format.toUpperCase()), 1)
          ], 8, WA))
        ]))), 128))
      ])) : x("", !0),
      g.value ? (p(), v(W, { key: 7 }, [
        g.value.reasons.length ? x("", !0) : (p(), v("p", ZA, o(u(w)("library", "These books no longer match the current metadata rules.")), 1)),
        l("ul", XA, [
          (p(!0), v(W, null, he(g.value.flags, (N) => (p(), v("li", { key: N }, o(k[N]), 1))), 128))
        ]),
        l("div", JA, [
          (p(!0), v(W, null, he(g.value.books, (N) => (p(), v("article", {
            key: N.id
          }, [
            l("img", {
              src: N.coverUrl,
              alt: "",
              width: "64",
              height: "88"
            }, null, 8, QA),
            l("h3", null, [
              l("bdi", null, o(N.title), 1)
            ]),
            l("p", null, [
              l("bdi", null, o(N.authors.join("; ")), 1)
            ]),
            l("p", null, o(N.format.toUpperCase()) + " · " + o(N.language || "—") + " · " + o(N.publicationDate || "—"), 1),
            l("p", null, [
              l("bdi", null, o(N.publisher), 1)
            ]),
            l("p", null, [
              l("bdi", null, o(N.path), 1)
            ]),
            l("div", eE, [
              l("a", {
                class: "button secondary",
                href: N.detailsUrl
              }, o(u(w)("library", "Details")), 9, tE),
              l("a", {
                class: "button secondary",
                href: N.openUrl
              }, o(u(w)("library", "Open")), 9, iE),
              l("button", {
                class: "button primary",
                disabled: h.value,
                onClick: (pe) => R("preferred", N.id)
              }, o(u(w)("library", "Prefer this copy")), 9, nE)
            ])
          ]))), 128))
        ]),
        l("div", aE, [
          l("button", {
            class: "button secondary",
            disabled: h.value,
            onClick: P[0] || (P[0] = (N) => R("keep"))
          }, o(u(w)("library", "Keep both")), 9, rE),
          l("button", {
            class: "button secondary",
            disabled: h.value,
            onClick: P[1] || (P[1] = (N) => R("dismissed"))
          }, o(u(w)("library", "Dismiss match")), 9, sE),
          l("button", {
            class: "button secondary",
            disabled: h.value,
            onClick: P[2] || (P[2] = (N) => R("unreviewed"))
          }, o(u(w)("library", "Reset review decision")), 9, lE)
        ])
      ], 64)) : x("", !0)
    ], 8, zA));
  }
}, oE = ["aria-busy"], uE = ["checked", "disabled"], cE = {
  key: 0,
  role: "alert"
}, dE = {
  key: 1,
  role: "status"
}, fE = {
  key: 2,
  role: "alert"
}, pE = {
  key: 3,
  role: "status"
}, hE = {
  __name: "DuplicateSuggestionSettings",
  props: { requestToken: String },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G({ enabled: !1, status: "disabled" }), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G("");
    let r = !0, s;
    async function d() {
      try {
        const g = await fetch(Ki("/apps/library/api/duplicate-suggestions"), { cache: "no-store", credentials: "same-origin" });
        if (!g.ok) throw new Error();
        const h = await g.json();
        r && (i.value = h, h.status === "building" && (s = setTimeout(d, 5e3)));
      } catch {
        r && (a.value = w("library", "Could not complete the duplicate review. Please try again."));
      }
    }
    async function c(g) {
      n.value = !0, a.value = "", clearTimeout(s);
      try {
        const h = await fetch(Ki("/apps/library/api/duplicate-suggestions"), { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, body: JSON.stringify({ enabled: g.target.checked }) });
        if (!h.ok) throw new Error();
        i.value = await h.json(), i.value.status === "building" && (s = setTimeout(d, 2e3));
      } catch {
        a.value = w("library", "Could not complete the duplicate review. Please try again.");
      } finally {
        n.value = !1;
      }
    }
    return $t(d), ki(() => {
      r = !1, clearTimeout(s);
    }), (g, h) => (p(), v("section", {
      class: "library-auto-duplicate-settings",
      "aria-busy": n.value ? "true" : "false"
    }, [
      l("label", null, [
        l("input", {
          type: "checkbox",
          checked: i.value.enabled,
          disabled: n.value,
          onChange: c
        }, null, 40, uE),
        ve(Je, {
          text: u(w)("library", "Build a private metadata index in the background. Suggestions check the whole library without reading book contents.")
        }, {
          default: we(() => [
            ae(o(u(w)("library", "Show possible duplicates while browsing")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      a.value ? (p(), v("p", cE, o(a.value), 1)) : x("", !0),
      i.value.status === "building" ? (p(), v("p", dE, o(u(w)("library", "Indexing metadata")) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1)) : x("", !0),
      i.value.status === "failed" ? (p(), v("p", fE, o(u(w)("library", "Duplicate scan failed")), 1)) : x("", !0),
      i.value.status === "ready" ? (p(), v("p", pE, o(u(w)("library", "Automatic duplicate suggestions are ready.")), 1)) : x("", !0)
    ], 8, oE));
  }
}, vE = ["aria-label", "aria-busy"], bE = ["href"], gE = {
  key: 1,
  role: "alert"
}, mE = {
  key: 2,
  role: "status"
}, yE = ["disabled"], _E = { value: "0" }, wE = ["value"], kE = { class: "library-duplicate-checkbox" }, SE = ["disabled"], CE = ["disabled"], TE = ["value", "disabled"], AE = { value: "" }, EE = ["value"], xE = ["aria-label"], $E = { role: "status" }, OE = ["value", "max", "aria-label"], NE = {
  key: 1,
  role: "status"
}, IE = {
  key: 2,
  role: "alert"
}, RE = {
  key: 3,
  role: "alert"
}, LE = { class: "library-duplicate-actions" }, PE = ["disabled"], DE = ["disabled"], FE = ["disabled"], ME = ["disabled"], UE = { value: "all" }, zE = ["value"], jE = {
  key: 0,
  role: "status"
}, BE = ["data-pair-id"], HE = {
  key: 0,
  role: "status"
}, VE = { class: "library-duplicate-decision" }, qE = ["aria-label"], KE = ["aria-label"], GE = {
  key: 1,
  role: "alert"
}, WE = { class: "library-duplicate-books" }, YE = { class: "library-duplicate-book-heading" }, ZE = ["src"], XE = { dir: "auto" }, JE = { dir: "auto" }, QE = { key: 0 }, ex = { dir: "auto" }, tx = { dir: "ltr" }, ix = { dir: "auto" }, nx = { class: "library-duplicate-actions" }, ax = ["href"], rx = ["href"], sx = ["disabled", "onClick"], lx = { class: "library-duplicate-actions" }, ox = ["disabled", "onClick"], ux = ["disabled", "onClick"], cx = ["disabled", "onClick"], dx = ["aria-label"], fx = ["disabled"], px = ["disabled"], hx = {
  __name: "PossibleDuplicates",
  props: { requestToken: String, reviewUrl: String },
  setup(e) {
    const t = Number(new URLSearchParams(window.location.search).get("bookId")) || 0, i = Number(new URLSearchParams(window.location.search).get("compareId")) || 0, n = e, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G([]), s = /* @__PURE__ */ G("0"), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(null), g = /* @__PURE__ */ G(!1), h = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G("unreviewed");
    let k, A = !0, C = 0;
    const $ = j(() => c.value?.status === "running"), R = j(() => ({ running: w("library", "Finding possible duplicates"), completed: w("library", "Duplicate scan complete"), cancelled: w("library", "Duplicate scan cancelled"), failed: w("library", "Duplicate scan failed"), limited: w("library", "Duplicate scan reached its limit") })), L = j(() => ({ unreviewed: w("library", "To review"), preferred: w("library", "Preferred copy selected"), keep: w("library", "Keep both"), dismissed: w("library", "Dismissed") })), P = j(() => ({ identical: w("library", "Identical file contents"), isbn: w("library", "Same ISBN"), title_author: w("library", "Same normalized title and authors"), similar_title_author: w("library", "Similar title and matching authors") })), N = j(() => ({ formats: w("library", "Alternative formats"), languages: w("library", "Different languages"), years: w("library", "Different publication years"), publishers: w("library", "Different publishers"), identifiers: w("library", "Different ISBNs") })), pe = (J) => J < 1048576 ? new Intl.NumberFormat(document.documentElement.lang || "en", { style: "unit", unit: J < 1e3 ? "byte" : "kilobyte", maximumFractionDigits: 2 }).format(J < 1e3 ? J : J / 1e3) : new Intl.NumberFormat(document.documentElement.lang || "en", { maximumFractionDigits: 2 }).format(J / 1048576) + " " + w("library", "MiB");
    async function Q(J = "", ie) {
      const Y = await fetch(Ki(`/apps/library/api/duplicates${J}`), { credentials: "same-origin", cache: "no-store", method: ie === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: n.requestToken }, ...ie === void 0 ? {} : { body: JSON.stringify(ie) } }), fe = await Y.json().catch(() => ({}));
      if (!Y.ok)
        throw Y.status === 409 ? new Error(w("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")) : fe.error === "decision_limit" ? new Error(w("library", "This account has 10,000 saved review decisions. Reset an old decision before saving another.")) : fe.error === "history_limit" ? new Error(w("library", "Three duplicate scans are already saved. Discard an old scan before starting another.")) : fe.error === "scope_limit" ? new Error(w("library", "This scope is too large. Choose a smaller library root.")) : Y.status === 404 ? new Error(w("library", "This scan or these books are no longer available.")) : new Error(w("library", "Could not complete the duplicate review. Please try again."));
      return fe;
    }
    async function E() {
      const J = await Q();
      A && (a.value = J.roots, r.value = J.scans);
    }
    async function H(J) {
      g.value = !0, h.value = "";
      try {
        await J();
      } catch (ie) {
        A && (h.value = ie.message);
      } finally {
        A && (g.value = !1);
      }
    }
    function K() {
      if (clearTimeout(k), !A || !$.value) return;
      const J = C, ie = c.value.id;
      k = setTimeout(async () => {
        try {
          if (await Q(`/${ie}/advance`, {}), !A || J !== C) return;
          const Y = await Q(`/${ie}?page=${c.value.page}&filter=${m.value}`);
          if (!A || J !== C) return;
          c.value = Y, $.value || await E(), K();
        } catch (Y) {
          A && J === C && (h.value = Y.message);
        }
      }, 1500);
    }
    async function Z() {
      await H(async () => {
        c.value = await Q("", { rootId: Number(s.value), contents: d.value }), C++, m.value = "unreviewed", y.value = "", await E(), K();
      });
    }
    async function ne(J, ie = 1) {
      const Y = ++C;
      clearTimeout(k), await H(async () => {
        const fe = await Q(`/${J}?page=${ie}&filter=${m.value}`);
        A && Y === C && (c.value = fe, s.value = String(fe.rootId), d.value = !!fe.contents, K());
      });
    }
    function z(J) {
      m.value = "unreviewed", y.value = "", J.target.value && ne(J.target.value);
    }
    async function q() {
      C++, clearTimeout(k), await H(async () => {
        await Q(`/${c.value.id}/cancel`, {}), c.value = await Q(`/${c.value.id}?filter=${m.value}`), await E();
      });
    }
    async function I() {
      C++, clearTimeout(k), await H(async () => {
        await Q(`/${c.value.id}/discard`, {}), c.value = null, await E();
      });
    }
    async function V(J, ie, Y = 0) {
      C++, clearTimeout(k), await H(async () => {
        await Q(`/${c.value.id}/pairs/${J.id}`, { signature: J.signature, decision: ie, preferredId: Y }), y.value = w("library", "Review saved. Your files and catalogue metadata were not changed."), c.value = await Q(`/${c.value.id}?page=${c.value.page}&filter=${m.value}`), K();
      });
    }
    return $t(() => H(E)), ki(() => {
      A = !1, C++, clearTimeout(k);
    }), (J, ie) => (p(), v("section", {
      class: "library-duplicates",
      "aria-label": u(w)("library", "Possible duplicates"),
      "aria-busy": g.value ? "true" : "false"
    }, [
      l("a", { href: e.reviewUrl }, "← " + o(u(w)("library", "Review")), 9, bE),
      l("h1", null, [
        ve(Je, {
          text: u(w)("library", "Find possible copies from titles, authors and valid ISBNs. Name order and punctuation are normalized for comparison only. Editions and translations can be different books. Review decisions are private and never delete, merge or hide publications.")
        }, {
          default: we(() => [
            ae(o(u(w)("library", "Possible duplicates")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      ve(hE, { "request-token": e.requestToken }, null, 8, ["request-token"]),
      u(t) ? (p(), Pe(pg, {
        key: 0,
        "item-id": u(t),
        "compare-id": u(i),
        "request-token": e.requestToken,
        full: ""
      }, null, 8, ["item-id", "compare-id", "request-token"])) : x("", !0),
      h.value ? (p(), v("p", gE, o(h.value), 1)) : x("", !0),
      y.value ? (p(), v("p", mE, o(y.value), 1)) : x("", !0),
      l("form", {
        class: "library-duplicate-toolbar",
        onSubmit: Ae(Z, ["prevent"])
      }, [
        l("label", null, [
          ae(o(u(w)("library", "Library root")), 1),
          me(l("select", {
            "onUpdate:modelValue": ie[0] || (ie[0] = (Y) => s.value = Y),
            disabled: g.value || $.value
          }, [
            l("option", _E, o(u(w)("library", "All library roots")), 1),
            (p(!0), v(W, null, he(a.value, (Y) => (p(), v("option", {
              key: Y.id,
              value: String(Y.id)
            }, o(Y.label), 9, wE))), 128))
          ], 8, yE), [
            [rt, s.value]
          ])
        ]),
        l("label", kE, [
          me(l("input", {
            "onUpdate:modelValue": ie[1] || (ie[1] = (Y) => d.value = Y),
            type: "checkbox",
            disabled: g.value || $.value
          }, null, 8, SE), [
            [rr, d.value]
          ]),
          ve(Je, {
            text: u(w)("library", "Read equal-size candidates to confirm identical contents, including renamed copies with different metadata. This can take longer on remote storage. Checks are limited to 64 MiB per file and 512 MiB per scan; skipped checks are reported.")
          }, {
            default: we(() => [
              ae(o(u(w)("library", "Compare file contents")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("button", {
          class: "button primary",
          disabled: g.value || $.value || !a.value.length
        }, o(u(w)("library", "Find possible duplicates")), 9, CE)
      ], 32),
      l("label", null, [
        ve(Je, {
          text: u(w)("library", "Scans continue through Nextcloud background jobs and can be reopened for seven days. Review decisions are reused when the same books have not changed. Each comparison is independent; choosing a preferred copy does not change catalogue ordering.")
        }, {
          default: we(() => [
            ae(o(u(w)("library", "Saved duplicate scans")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        l("select", {
          value: c.value?.id || "",
          disabled: g.value,
          onChange: z
        }, [
          l("option", AE, o(u(w)("library", "Choose a scan")), 1),
          (p(!0), v(W, null, he(r.value, (Y) => (p(), v("option", {
            key: Y.id,
            value: Y.id
          }, o(new Date(Number(Y.created_at) * 1e3).toLocaleString()) + " · " + o(R.value[Y.status]), 9, EE))), 128))
        ], 40, TE)
      ]),
      c.value ? (p(), v(W, { key: 3 }, [
        l("section", {
          class: "library-duplicate-progress",
          "aria-label": u(w)("library", "Duplicate scan progress")
        }, [
          l("strong", null, o(c.value.rootId ? c.value.label : u(w)("library", "All library roots")), 1),
          l("p", $E, [
            ae(o(R.value[c.value.status]), 1),
            $.value ? (p(), v(W, { key: 0 }, [
              ae(" · " + o(c.value.phase === "index" ? u(w)("library", "Indexing metadata") : u(w)("library", "Comparing candidates")), 1)
            ], 64)) : x("", !0),
            ae(" · " + o(c.value.processed) + "/" + o(c.value.total), 1)
          ]),
          $.value ? (p(), v("progress", {
            key: 0,
            value: c.value.phase === "index" ? c.value.processed : void 0,
            max: Math.max(c.value.total, 1),
            "aria-label": u(w)("library", "Duplicate scan progress")
          }, null, 8, OE)) : x("", !0),
          l("p", null, o(u(w)("library", "Possible matches")) + ": " + o(c.value.matches) + " · " + o(u(w)("library", "Comparisons checked")) + ": " + o(c.value.examined), 1),
          c.value.hashSkipped || c.value.unavailable ? (p(), v("p", NE, o(u(w)("library", "Content checks skipped")) + ": " + o(c.value.hashSkipped) + " · " + o(u(w)("library", "Unavailable books")) + ": " + o(c.value.unavailable), 1)) : x("", !0),
          c.value.status === "limited" ? (p(), v("p", IE, o(u(w)("library", "These results are partial. A large candidate group or scan limit was reached. Try a smaller root or improve the metadata before scanning again.")), 1)) : x("", !0),
          c.value.status === "failed" ? (p(), v("p", RE, o(u(w)("library", "The scan stopped before completion. Its results are partial. Refresh or start a new scan.")), 1)) : x("", !0),
          l("div", LE, [
            $.value ? (p(), v("button", {
              key: 0,
              class: "button secondary",
              disabled: g.value,
              onClick: q
            }, o(u(w)("library", "Cancel scan")), 9, PE)) : x("", !0),
            l("button", {
              class: "button secondary",
              disabled: g.value,
              onClick: ie[2] || (ie[2] = (Y) => ne(c.value.id, c.value.page))
            }, o(u(w)("library", "Refresh results")), 9, DE),
            l("button", {
              class: "button secondary",
              disabled: g.value || $.value,
              onClick: I
            }, o(u(w)("library", "Discard scan")), 9, FE)
          ])
        ], 8, xE),
        l("label", null, [
          ae(o(u(w)("library", "Show comparisons")), 1),
          me(l("select", {
            "onUpdate:modelValue": ie[3] || (ie[3] = (Y) => m.value = Y),
            disabled: g.value,
            onChange: ie[4] || (ie[4] = (Y) => ne(c.value.id))
          }, [
            l("option", UE, o(u(w)("library", "All")) + " (" + o(c.value.matches) + ")", 1),
            (p(!0), v(W, null, he(L.value, (Y, fe) => (p(), v("option", {
              key: fe,
              value: fe
            }, o(Y) + " (" + o(c.value.counts[fe] || 0) + ")", 9, zE))), 128))
          ], 40, ME), [
            [rt, m.value]
          ])
        ]),
        !c.value.pairs.length && !$.value ? (p(), v("p", jE, o(u(w)("library", "No comparisons in this view.")), 1)) : x("", !0),
        (p(!0), v(W, null, he(c.value.pairs, (Y) => (p(), v("article", {
          key: Y.id,
          class: "library-duplicate-pair",
          "data-pair-id": Y.id
        }, [
          Y.unavailable ? (p(), v("p", HE, o(u(w)("library", "These books are no longer available. Start a new scan.")), 1)) : (p(), v(W, { key: 1 }, [
            l("header", null, [
              l("h2", null, o(Y.reasons.includes("identical") ? u(w)("library", "Identical file contents") : u(w)("library", "Possible duplicates")), 1),
              l("span", VE, o(L.value[Y.decision]), 1)
            ]),
            l("ul", {
              class: "library-duplicate-reasons",
              "aria-label": u(w)("library", "Why these books match")
            }, [
              (p(!0), v(W, null, he(Y.reasons, (fe) => (p(), v("li", { key: fe }, o(P.value[fe]), 1))), 128))
            ], 8, qE),
            Y.flags.length ? (p(), v("ul", {
              key: 0,
              class: "library-duplicate-flags",
              "aria-label": u(w)("library", "Differences to review")
            }, [
              (p(!0), v(W, null, he(Y.flags, (fe) => (p(), v("li", { key: fe }, o(N.value[fe]), 1))), 128))
            ], 8, KE)) : x("", !0),
            Y.stale ? (p(), v("p", GE, o(u(w)("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")), 1)) : x("", !0),
            l("div", WE, [
              (p(!0), v(W, null, he(Y.books, (fe) => (p(), v("section", {
                key: fe.id,
                class: Ce(["library-duplicate-book", { "library-duplicate-preferred": Y.preferredId === fe.id }])
              }, [
                l("div", YE, [
                  l("img", {
                    src: fe.coverUrl,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, ZE),
                  l("div", null, [
                    l("h3", XE, o(fe.title), 1),
                    l("p", JE, o(fe.authors.join("; ") || "—"), 1),
                    Y.preferredId === fe.id ? (p(), v("strong", QE, o(u(w)("library", "Preferred copy")), 1)) : x("", !0)
                  ])
                ]),
                l("dl", null, [
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Format")), 1),
                    l("dd", null, o(fe.format.toUpperCase()) + " · " + o(pe(fe.size)), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Language")), 1),
                    l("dd", null, o(fe.language || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Publication date")), 1),
                    l("dd", null, o(fe.publicationDate || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Publisher")), 1),
                    l("dd", ex, o(fe.publisher || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "ISBN")), 1),
                    l("dd", tx, o(fe.isbn.join(", ") || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Location")), 1),
                    l("dd", ix, o(fe.path), 1)
                  ])
                ]),
                l("div", nx, [
                  l("a", {
                    class: "button secondary",
                    href: fe.openUrl
                  }, o(u(w)("library", "Open")), 9, ax),
                  l("a", {
                    class: "button secondary",
                    href: fe.detailsUrl
                  }, o(u(w)("library", "Details")), 9, rx),
                  l("button", {
                    class: "button primary",
                    disabled: g.value || $.value || Y.stale,
                    onClick: (ke) => V(Y, "preferred", fe.id)
                  }, o(u(w)("library", "Prefer this copy")), 9, sx)
                ])
              ], 2))), 128))
            ]),
            l("div", lx, [
              l("button", {
                class: "button secondary",
                disabled: g.value || $.value || Y.stale,
                onClick: (fe) => V(Y, "keep")
              }, o(u(w)("library", "Keep both")), 9, ox),
              l("button", {
                class: "button secondary",
                disabled: g.value || $.value || Y.stale,
                onClick: (fe) => V(Y, "dismissed")
              }, o(u(w)("library", "Dismiss match")), 9, ux),
              Y.decision !== "unreviewed" ? (p(), v("button", {
                key: 0,
                class: "button secondary",
                disabled: g.value || $.value || Y.stale,
                onClick: (fe) => V(Y, "unreviewed")
              }, o(u(w)("library", "Reset review decision")), 9, cx)) : x("", !0)
            ])
          ], 64))
        ], 8, BE))), 128)),
        l("nav", {
          class: "library-duplicate-actions",
          "aria-label": u(w)("library", "Duplicate comparison pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: g.value || c.value.page === 1,
            onClick: ie[5] || (ie[5] = (Y) => ne(c.value.id, c.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, fx),
          l("span", null, o(c.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: g.value || !c.value.hasNext,
            onClick: ie[6] || (ie[6] = (Y) => ne(c.value.id, c.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, px)
        ], 8, dx)
      ], 64)) : x("", !0)
    ], 8, vE));
  }
}, Qd = ["title", "subtitle", "author", "series", "seriesNumber", "language", "publisher", "subject", "year", "genre"], vx = /* @__PURE__ */ new Set([...Qd, "ignore", "folder", "folders", "extension"]);
function hg(e, t, i = {}) {
  if (!t || t.length > 1e3 || e.length > 2e3) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%folders?%(?!\/)/.test(t)) return { status: "invalid", reason: "pattern", changes: [] };
  const n = (y) => y === "%folders%/" ? "folders" : y.slice(1, -1), a = t.split(/(%folders%\/|%[A-Za-z]+%)/).filter(Boolean);
  if (a.some((y) => y.includes("%") && !vx.has(n(y))) || a.filter((y) => y.startsWith("%")).length > 16) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%[A-Za-z]+%%[A-Za-z]+%/.test(t)) return { status: "invalid", reason: "delimiter", changes: [] };
  let r = 0, s = !1;
  const d = [];
  function c(y, m, k) {
    if (++r > 5e3) {
      s = !0;
      return;
    }
    if (d.length > 1) return;
    if (y === a.length) {
      m === e.length && d.push(k);
      return;
    }
    const A = a[y];
    if (!A.startsWith("%")) {
      e.startsWith(A, m) && c(y + 1, m + A.length, k);
      return;
    }
    const C = n(A);
    if (C === "folders") {
      c(y + 1, m, k);
      for (let L = m; L < e.length && !s && d.length < 2; L++) e[L] === "/" && c(y + 1, L + 1, k);
      return;
    }
    const $ = e.indexOf("/", m), R = $ < 0 ? e.length : $;
    for (let L = m + 1; L <= R && !s && d.length < 2; L++) {
      const P = e.slice(m, L);
      C === "folder" && L !== R || C === "extension" && !/^[A-Za-z0-9]{1,12}$/.test(P) || c(y + 1, L, [...k, { key: C, raw: P }]);
    }
  }
  if (c(0, 0, []), s || d.length > 1) return { status: "ambiguous", changes: [] };
  if (!d.length) return { status: "unmatched", changes: [] };
  const g = /* @__PURE__ */ new Map(), h = [];
  for (const { key: y, raw: m } of d[0]) {
    if (!Qd.includes(y)) continue;
    let k = m.trim();
    if (g.has(y) && g.get(y) !== k) return { status: "ambiguous", changes: [] };
    if (g.has(y)) continue;
    if (g.set(y, k), y === "year" && !/^\d{4}$/.test(k)) return { status: "invalid", reason: "year", changes: [] };
    if (y === "language" && (k = vg(k)), y === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(k)) return { status: "invalid", reason: "language", changes: [] };
    if (y === "author" && [...k].length > 255) return { status: "invalid", changes: [] };
    if (!bg(y, k)) return { status: "invalid", changes: [] };
    const A = String(i[y] || ""), C = y === "author" && Array.isArray(i.authors) ? JSON.stringify([k]) === JSON.stringify(i.authors) : A === k;
    h.push({ field: y, raw: m, value: k, ...y === "author" ? { values: [k] } : {}, before: A, previewOnly: !1, status: C ? "unchanged" : A.trim() ? "conflict" : "ready" });
  }
  return { status: h.some((y) => y.status === "conflict") ? "conflict" : h.some((y) => y.status === "ready") ? "ready" : "unchanged", changes: h };
}
function vg(e) {
  return ({ english: "en", german: "de", deutsch: "de", french: "fr", français: "fr", arabic: "ar" }[e.toLowerCase()] || e.toLowerCase()).replace(/^([a-z]{2,3})-([a-z]{2})$/, (i, n, a) => `${n}-${a.toUpperCase()}`);
}
function bg(e, t) {
  const i = { title: 512, subtitle: 512, author: 1024, series: 255, seriesNumber: 64, genre: 255, language: 64, publisher: 512, subject: 2048, year: 4 };
  return e in i ? !!t && [...t].length <= i[e] && !/[\x00-\x1f\x7f]/.test(t) && (e !== "year" || Number(t) > 0) : !0;
}
const bx = [...Qd];
function nl(e) {
  const t = e.split("/"), i = t.pop() || "", n = i.lastIndexOf(".");
  return [...t, n > 0 ? i.slice(0, n) : i];
}
function Su(e = "ignore") {
  return { field: e, split: null, prefix: "", suffix: "", underscores: !1, mapFrom: "", mapTo: "", authorSeparator: "", reverseName: !1 };
}
function pd(e, t, i) {
  if (!t) return [e];
  if (i === "every") return e.split(t);
  const n = i === "last" ? e.lastIndexOf(t) : e.indexOf(t);
  return n < 0 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
}
function Qo(e) {
  return { version: 1, combineAuthors: !1, parts: nl(e).map((t, i, n) => Su(i === n.length - 1 ? "title" : "ignore")) };
}
function eu(e, t, i = {}) {
  const n = (y) => ({ status: y, changes: [] });
  if (!e || e.length > 2e3 || t?.version !== 1 || !Array.isArray(t.parts) || t.parts.length > 64) return n("invalid");
  const a = nl(e);
  if (a.length !== t.parts.length) return n("unmatched");
  const r = /* @__PURE__ */ new Map();
  let s = 0, d = "";
  function c(y, m, k = 0) {
    if (d) return;
    if (++s > 128 || k > 6 || !m) {
      d = "invalid";
      return;
    }
    if (m.split) {
      const { delimiter: R, occurrence: L, children: P } = m.split;
      if (typeof R != "string" || !R || R.length > 100 || !["first", "last", "every"].includes(L) || !Array.isArray(P)) {
        d = "invalid";
        return;
      }
      const N = pd(y, R, L);
      if (N.length !== P.length || N.length < 2) {
        d = "unmatched";
        return;
      }
      N.forEach((pe, Q) => c(pe, P[Q], k + 1));
      return;
    }
    if (m.field === "ignore") return;
    if (!bx.includes(m.field)) {
      d = "invalid";
      return;
    }
    let A = y.trim();
    if (m.prefix) {
      if (!A.startsWith(m.prefix)) {
        d = "unmatched";
        return;
      }
      A = A.slice(m.prefix.length);
    }
    if (m.suffix) {
      if (!A.endsWith(m.suffix)) {
        d = "unmatched";
        return;
      }
      A = A.slice(0, -m.suffix.length);
    }
    if (m.underscores && (A = A.replaceAll("_", " ")), A = A.trim(), m.mapFrom && A === m.mapFrom && (A = m.mapTo.trim()), m.field === "language" && (A = vg(A)), !A || m.field === "year" && !/^\d{4}$/.test(A) || m.field === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(A)) {
      d = "invalid";
      return;
    }
    if (!bg(m.field, A)) {
      d = "invalid";
      return;
    }
    let C = [A];
    if (m.field === "author") {
      if (C = (m.authorSeparator ? A.split(m.authorSeparator) : C).map((R) => R.trim()), m.reverseName && (C = C.map((R) => {
        const L = R.split(",").map((P) => P.trim());
        return L.length !== 2 || L.some((P) => !P) ? (d = "invalid", R) : `${L[1]} ${L[0]}`;
      }), d))
        return;
      if (C.some((R) => !R || [...R].length > 255)) {
        d = "invalid";
        return;
      }
    }
    const $ = r.get(m.field);
    $ ? m.field === "author" && t.combineAuthors ? ($.values = [.../* @__PURE__ */ new Set([...$.values, ...C])], $.raw.push(y)) : JSON.stringify($.values) !== JSON.stringify(C) && (d = "ambiguous") : r.set(m.field, { raw: [y], values: [...new Set(C)] });
  }
  if (a.forEach((y, m) => c(y, t.parts[m])), d) return n(d);
  const g = r.get("author")?.values;
  if (g && (g.length > 32 || [...g.join("; ")].length > 1024)) return n("invalid");
  const h = [...r].map(([y, m]) => {
    const k = m.values.join("; "), A = String(i[y] || ""), C = y === "author" && Array.isArray(i.authors) ? JSON.stringify(m.values) === JSON.stringify(i.authors) : A === k;
    return {
      field: y,
      raw: m.raw.join(" / "),
      value: k,
      values: m.values,
      before: A,
      previewOnly: !1,
      status: C ? "unchanged" : A.trim() ? "conflict" : "ready"
    };
  });
  return { status: h.some((y) => y.status === "conflict") ? "conflict" : h.some((y) => y.status === "ready") ? "ready" : "unchanged", changes: h };
}
const gx = ["aria-label", "aria-busy"], mx = {
  key: 0,
  role: "alert"
}, yx = ["disabled"], _x = {
  key: 2,
  role: "status"
}, wx = ["disabled"], kx = { class: "library-inference-presets" }, Sx = ["disabled"], Cx = ["disabled"], Tx = ["disabled"], Ax = ["aria-label"], Ex = ["value", "aria-label"], xx = { class: "library-inference-before-after" }, $x = { key: 0 }, Ox = ["aria-label"], Nx = ["aria-label"], Ix = { class: "library-inference-path" }, Rx = { class: "library-inference-presets" }, Lx = ["disabled"], Px = ["disabled"], Dx = ["disabled"], Fx = ["disabled"], Mx = ["disabled"], Ux = { class: "library-inference-history" }, zx = ["disabled", "onClick"], gg = {
  __name: "InferenceApply",
  props: { results: { type: Array, required: !0 }, labels: { type: Object, required: !0 }, context: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, wholeFolder: Boolean },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(null), s = /* @__PURE__ */ G([]), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(""), h = /* @__PURE__ */ G(""), y = /* @__PURE__ */ new Set(["author", "title", "subtitle", "series", "seriesNumber", "genre", "language", "publisher", "subject", "year"]), m = j(() => i.results.filter((ne) => ["ready", "conflict"].includes(ne.status) && ne.revision).map((ne) => ({ ...ne, changes: ne.changes.filter((z) => y.has(z.field) && ["ready", "conflict"].includes(z.status)) })).filter((ne) => ne.changes.length)), k = (ne, z) => `${ne.id}:${z.field}`, A = j(() => m.value.map((ne) => ({ id: ne.id, revision: ne.revision, changes: Object.fromEntries(ne.changes.filter((z) => a.value.includes(k(ne, z))).map((z) => [z.field, z.field === "author" ? z.values || [z.value] : z.value])) })).filter((ne) => Object.keys(ne.changes).length)), C = j(() => ({ prepared: w("library", "Awaiting approval"), applied: w("library", "Applied"), undone: w("library", "Undone") }));
    let $ = 0;
    qe(() => JSON.stringify([i.results, i.context]), () => {
      a.value = [], r.value?.status === "prepared" && (r.value = null), h.value = "", $++;
    }), qe(() => JSON.stringify(a.value), () => {
      r.value?.status === "prepared" && (r.value = null), h.value = "", $++;
    });
    function R() {
      a.value = m.value.flatMap((ne) => ne.changes.filter((z) => z.status === "ready").map((z) => k(ne, z)));
    }
    async function L(ne = "", z) {
      const q = await fetch(Ki(`/apps/library/api/inference/batches${ne}`), { credentials: "same-origin", cache: "no-store", method: z === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: i.requestToken }, ...z === void 0 ? {} : { body: JSON.stringify(z) } }), I = await q.json();
      if (!q.ok)
        throw q.status === 409 ? (r.value && (r.value = { ...r.value, blocked: !0 }), new Error(w("library", "This review is stale or expired. Reload the sample and review again. Undo cannot overwrite later metadata changes."))) : I.error === "history_limit" ? new Error(w("library", "Recent batch history is full. Discard unused reviews or wait for history to expire.")) : q.status === 404 ? new Error(w("library", "The batch or one of its books is no longer available.")) : new Error(w("library", "Could not save these changes. Check the selected values or use a smaller selection."));
      return I;
    }
    async function P() {
      s.value = (await L()).batches;
    }
    async function N(ne) {
      d.value = !0, c.value = "", g.value = "";
      try {
        await ne();
      } catch (z) {
        c.value = z.message;
      } finally {
        d.value = !1;
      }
    }
    function pe() {
      r.value = null, c.value = "", h.value = "", n("changed");
    }
    async function Q() {
      const ne = $;
      await N(async () => {
        const z = await L("", { proposals: A.value, context: i.context });
        ne === $ && (r.value = z), await P();
      });
    }
    async function E(ne) {
      await N(async () => {
        r.value = await L(`/${ne}`), h.value = "";
      });
    }
    async function H() {
      if (!r.value || i.disabled) return;
      const ne = r.value, z = ne.id;
      await N(async () => {
        const q = await L(`/${z}/apply`, {});
        r.value = { ...ne, ...q }, g.value = w("library", "Selected metadata changes were applied. Source files were not changed."), a.value = [], await P(), n("changed");
      });
    }
    async function K() {
      const ne = r.value, z = ne.id;
      await N(async () => {
        const q = await L(`/${z}/undo`, {});
        r.value = { ...ne, ...q }, h.value = "", g.value = w("library", "The batch was undone. Previous metadata and provenance were restored."), await P(), n("changed");
      });
    }
    async function Z() {
      await N(async () => {
        await L(`/${r.value.id}/discard`, {}), r.value = null, await P();
      });
    }
    return $t(() => N(P)), (ne, z) => (p(), v("section", {
      class: "library-inference-apply",
      "aria-label": u(w)("library", "Review and apply metadata"),
      "aria-busy": d.value ? "true" : "false"
    }, [
      l("h2", null, [
        ve(Je, {
          text: e.wholeFolder ? u(w)("library", "Choose fields from this page only. Existing values require individual selection. Apply and Undo operate on this reviewed batch of at most 40 books.") : u(w)("library", "Choose fields from this sample only. Replacements require individual selection. Authors are stored in their preview order, with exact duplicates removed.")
        }, {
          default: we(() => [
            ae(o(e.wholeFolder ? u(w)("library", "Review and apply metadata") : u(w)("library", "4. Review and apply metadata")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      c.value ? (p(), v("p", mx, o(c.value), 1)) : x("", !0),
      r.value?.blocked ? (p(), v("button", {
        key: 1,
        class: "button secondary",
        disabled: d.value,
        onClick: pe
      }, o(u(w)("library", "Load sample")), 9, yx)) : x("", !0),
      g.value ? (p(), v("p", _x, o(g.value), 1)) : x("", !0),
      l("fieldset", {
        disabled: d.value || e.disabled,
        class: "library-inference-approval-fields"
      }, [
        l("div", kx, [
          l("button", {
            class: "button secondary",
            disabled: !m.value.length,
            onClick: R
          }, o(u(w)("library", "Select empty fields")), 9, Sx),
          l("button", {
            class: "button secondary",
            disabled: !a.value.length,
            onClick: z[0] || (z[0] = (q) => a.value = [])
          }, o(u(w)("library", "Clear selection")), 9, Cx),
          l("button", {
            class: "button primary",
            disabled: !A.value.length || r.value?.status === "prepared",
            onClick: Q
          }, o(u(w)("library", "Review selected changes")) + " (" + o(a.value.length) + ")", 9, Tx)
        ]),
        l("div", {
          class: Ce(["library-inference-approval-candidates", { "library-inference-approval-scroll": m.value.length > 8 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Select metadata fields")
        }, [
          (p(!0), v(W, null, he(m.value, (q) => (p(), v("details", {
            key: q.id,
            class: "library-inference-result"
          }, [
            l("summary", null, o(q.path), 1),
            (p(!0), v(W, null, he(q.changes, (I) => (p(), v("label", {
              key: I.field,
              class: "library-inference-approval-field"
            }, [
              me(l("input", {
                "onUpdate:modelValue": z[1] || (z[1] = (V) => a.value = V),
                type: "checkbox",
                value: k(q, I),
                "aria-label": `${e.labels[I.field]}: ${q.path}`
              }, null, 8, Ex), [
                [rr, a.value]
              ]),
              l("span", null, [
                l("strong", null, o(e.labels[I.field]), 1),
                l("span", xx, [
                  l("span", null, o(I.before || "—"), 1),
                  z[4] || (z[4] = l("span", { "aria-hidden": "true" }, " → ", -1)),
                  l("strong", null, o(I.value), 1)
                ]),
                I.status === "conflict" ? (p(), v("small", $x, o(u(w)("library", "Replaces an existing value")), 1)) : x("", !0)
              ])
            ]))), 128))
          ]))), 128))
        ], 10, Ax)
      ], 8, wx),
      r.value ? (p(), v("section", {
        key: 3,
        class: "library-inference-confirm",
        "aria-label": u(w)("library", "Confirmed change review")
      }, [
        l("h3", null, o(C.value[r.value.status]), 1),
        l("p", null, [
          ve(Je, {
            text: u(w)("library", "Reviews expire after 30 minutes. Applied batches can be undone for seven days, provided their metadata, source file and access have not changed. A stale item blocks the entire batch.")
          }, {
            default: we(() => [
              ae(o(u(w)("library", "Available until")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ae(": " + o(new Date(r.value.expiresAt * 1e3).toLocaleString()), 1)
        ]),
        l("div", {
          class: Ce(["library-inference-confirm-entries", { "library-inference-approval-scroll": r.value.entries.length > 4 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Reviewed metadata changes")
        }, [
          (p(!0), v(W, null, he(r.value.entries, (q) => (p(), v("article", {
            key: q.id
          }, [
            l("h4", Ix, o(q.path), 1),
            l("dl", null, [
              (p(!0), v(W, null, he(q.changes, (I) => (p(), v("div", {
                key: I.field
              }, [
                l("dt", null, o(e.labels[I.field]), 1),
                l("dd", null, [
                  l("span", null, o(u(w)("library", "Before")) + ": " + o(I.before || "—"), 1),
                  l("strong", null, o(u(w)("library", "After")) + ": " + o(I.after), 1)
                ])
              ]))), 128))
            ])
          ]))), 128))
        ], 10, Nx),
        l("div", Rx, [
          r.value.status === "prepared" ? (p(), v("button", {
            key: 0,
            class: "button primary",
            disabled: d.value || e.disabled || r.value.blocked,
            onClick: H
          }, o(u(w)("library", "Apply reviewed changes")), 9, Lx)) : x("", !0),
          r.value.status !== "applied" ? (p(), v("button", {
            key: 1,
            class: "button secondary",
            disabled: d.value,
            onClick: Z
          }, o(u(w)("library", "Discard review")), 9, Px)) : x("", !0),
          r.value.status === "applied" && !h.value ? (p(), v("button", {
            key: 2,
            class: "button secondary",
            disabled: d.value || r.value.blocked,
            onClick: z[2] || (z[2] = (q) => h.value = r.value.id)
          }, o(u(w)("library", "Undo this batch")), 9, Dx)) : x("", !0),
          h.value ? (p(), v(W, { key: 3 }, [
            l("button", {
              class: "button primary",
              disabled: d.value || r.value.blocked,
              onClick: K
            }, o(u(w)("library", "Confirm undo")), 9, Fx),
            l("button", {
              class: "button secondary",
              disabled: d.value,
              onClick: z[3] || (z[3] = (q) => h.value = "")
            }, o(u(w)("library", "Cancel")), 9, Mx)
          ], 64)) : x("", !0)
        ])
      ], 8, Ox)) : x("", !0),
      l("details", Ux, [
        l("summary", null, o(u(w)("library", "Recent metadata batches")) + " (" + o(s.value.length) + ")", 1),
        l("ul", null, [
          (p(!0), v(W, null, he(s.value, (q) => (p(), v("li", {
            key: q.id
          }, [
            l("button", {
              class: "button secondary",
              disabled: d.value,
              onClick: (I) => E(q.id)
            }, o(new Date(Number(q.created_at) * 1e3).toLocaleString()) + " · " + o(C.value[q.status]), 9, zx)
          ]))), 128))
        ])
      ])
    ], 8, gx));
  }
}, jx = { class: "library-inference-rule-trace" }, Bx = { key: 0 }, hd = {
  __name: "InferenceRuleTrace",
  props: { result: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 } },
  setup(e) {
    return (t, i) => (p(), v("div", jx, [
      (p(!0), v(W, null, he(e.result.conflicts || [], (n) => (p(), v("div", {
        key: n.field,
        class: "library-inference-rule-conflict"
      }, [
        l("strong", null, o(u(w)("library", "Conflicting rules")) + ": " + o(e.labels[n.field]), 1),
        l("ul", null, [
          (p(!0), v(W, null, he(n.proposals, (a, r) => (p(), v("li", { key: r }, [
            l("bdi", null, o(a.value), 1),
            l("small", null, o(a.sources.map((s) => s.name).join(", ")), 1)
          ]))), 128))
        ])
      ]))), 128)),
      e.result.attempts?.length ? (p(), v("details", Bx, [
        l("summary", null, [
          ve(Je, {
            text: u(w)("library", "Evaluated from the deepest assigned folder upward. An ambiguous match stops fallback. Rules above a successful match are not used. Conflicting fields have no single proposed value.")
          }, {
            default: we(() => [
              ae(o(u(w)("library", "Rule evaluation")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("ul", null, [
          (p(!0), v(W, null, he(e.result.attempts, (n) => (p(), v("li", {
            key: n.id
          }, [
            l("strong", null, o(n.name), 1),
            l("bdi", null, o(n.folder || "/"), 1),
            l("small", null, o(e.statuses[n.status]), 1)
          ]))), 128))
        ])
      ])) : x("", !0)
    ]));
  }
}, Hx = ["aria-label", "aria-busy"], Vx = {
  key: 0,
  role: "alert"
}, qx = { class: "library-inference-presets" }, Kx = ["disabled"], Gx = ["value", "disabled"], Wx = { value: "" }, Yx = ["value"], Zx = { class: "library-inference-path" }, Xx = { role: "status" }, Jx = ["value", "max", "aria-label"], Qx = { class: "library-inference-presets" }, e$ = ["disabled"], t$ = ["disabled"], i$ = ["disabled"], n$ = {
  key: 1,
  role: "alert"
}, a$ = {
  key: 2,
  role: "alert"
}, r$ = {
  key: 0,
  class: "library-analysis-definition",
  dir: "ltr"
}, s$ = { key: 1 }, l$ = { key: 2 }, o$ = ["disabled"], u$ = { value: "all" }, c$ = ["value"], d$ = ["aria-label"], f$ = { class: "library-inference-path" }, p$ = ["aria-label"], h$ = ["disabled"], v$ = ["disabled"], b$ = {
  __name: "InferenceAnalysis",
  props: { definition: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 }, requestToken: String, disabled: Boolean },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G([]), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G(""), s = /* @__PURE__ */ G("all");
    let d, c = 0, g = !0;
    const h = j(() => i.value?.status === "running"), y = j(() => ({ running: w("library", "Analysing"), completed: w("library", "Analysis complete"), cancelled: w("library", "Analysis cancelled"), failed: w("library", "Analysis failed"), limited: w("library", "Analysis limit reached") })), m = j(() => ({ ...t.statuses, unavailable: w("library", "Changed or unavailable books") }));
    async function k(Q = "", E) {
      const H = await fetch(Ki(`/apps/library/api/inference/analyses${Q}`), { credentials: "same-origin", cache: "no-store", method: E === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...E === void 0 ? {} : { body: JSON.stringify(E) } }), K = await H.json();
      if (!H.ok)
        throw K.error === "analysis_history_limit" ? new Error(w("library", "Five folder analyses are already saved. Discard an old analysis before starting another.")) : K.error === "analysis_limit" ? new Error(w("library", "This folder exceeds the analysis limit. Choose a smaller subfolder.")) : H.status === 404 ? new Error(w("library", "This analysis or its folder is no longer available.")) : new Error(w("library", "Could not analyse this folder. Check the rule, folder and your access."));
      return K;
    }
    async function A() {
      const Q = await k();
      g && (n.value = Q.jobs);
    }
    async function C(Q) {
      a.value = !0, r.value = "";
      try {
        await Q();
      } catch (E) {
        g && (r.value = E.message);
      } finally {
        g && (a.value = !1);
      }
    }
    function $() {
      if (clearTimeout(d), !g || !h.value) return;
      const Q = i.value.id, E = c;
      d = setTimeout(async () => {
        try {
          if (await k(`/${Q}/advance`, {}), !g || c !== E) return;
          const H = await k(`/${Q}?page=${i.value.page}&filter=${s.value}`);
          if (!g || c !== E) return;
          i.value = H, h.value || await A(), $();
        } catch (H) {
          g && c === E && (r.value = H.message);
        }
      }, 1500);
    }
    async function R() {
      await C(async () => {
        const Q = await k("", { definition: t.definition });
        c++, s.value = "all", i.value = Q, await A(), $();
      });
    }
    async function L(Q, E = 1) {
      const H = ++c;
      clearTimeout(d), await C(async () => {
        const K = await k(`/${Q}?page=${E}&filter=${s.value}`);
        g && H === c && (i.value = K, $());
      });
    }
    function P(Q) {
      s.value = "all", Q.target.value && L(Q.target.value);
    }
    async function N() {
      const Q = i.value.id;
      c++, clearTimeout(d), await C(async () => {
        await k(`/${Q}/cancel`, {}), i.value = await k(`/${Q}?filter=${s.value}`), await A();
      });
    }
    async function pe() {
      const Q = i.value.id;
      c++, clearTimeout(d), await C(async () => {
        await k(`/${Q}/discard`, {}), i.value = null, await A();
      });
    }
    return $t(() => C(A)), ki(() => {
      g = !1, c++, clearTimeout(d);
    }), (Q, E) => (p(), v("section", {
      class: "library-inference-analysis library-inference-step",
      "aria-label": u(w)("library", "Whole-folder analysis"),
      "aria-busy": a.value ? "true" : "false"
    }, [
      l("h2", null, [
        ve(Je, {
          text: u(w)("library", "Analyse all indexed books in the loaded folder using a snapshot of the current rule. Analysis continues through Nextcloud background jobs after you leave. Results are saved for seven days. New books require a new analysis; source files remain unchanged.")
        }, {
          default: we(() => [
            ae(o(u(w)("library", "5. Analyse the whole folder")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      r.value ? (p(), v("p", Vx, o(r.value), 1)) : x("", !0),
      l("div", qx, [
        l("button", {
          class: "button primary",
          disabled: a.value || e.disabled || h.value,
          onClick: R
        }, o(u(w)("library", "Analyse whole folder")), 9, Kx),
        l("label", null, [
          ve(Je, {
            text: u(w)("library", "Select a saved analysis to reopen its results. Each page contains at most 40 books. Changes and Undo remain separate for each approved batch.")
          }, {
            default: we(() => [
              ae(o(u(w)("library", "Saved analyses")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          l("select", {
            value: i.value?.id || "",
            disabled: a.value,
            onChange: P
          }, [
            l("option", Wx, o(u(w)("library", "Choose an analysis")), 1),
            (p(!0), v(W, null, he(n.value, (H) => (p(), v("option", {
              key: H.id,
              value: H.id
            }, o(new Date(Number(H.created_at) * 1e3).toLocaleString()) + " · " + o(y.value[H.status]) + " · " + o(H.processed) + "/" + o(H.total), 9, Yx))), 128))
          ], 40, Gx)
        ])
      ]),
      i.value ? (p(), v(W, { key: 1 }, [
        l("p", Zx, o(i.value.scope), 1),
        l("p", Xx, o(y.value[i.value.status]) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1),
        h.value ? (p(), v("progress", {
          key: 0,
          value: i.value.processed,
          max: Math.max(i.value.total, 1),
          "aria-label": u(w)("library", "Analysis progress")
        }, null, 8, Jx)) : x("", !0),
        l("div", Qx, [
          h.value ? (p(), v("button", {
            key: 0,
            class: "button secondary",
            disabled: a.value,
            onClick: N
          }, o(u(w)("library", "Cancel analysis")), 9, e$)) : x("", !0),
          l("button", {
            class: "button secondary",
            disabled: a.value,
            onClick: E[0] || (E[0] = (H) => L(i.value.id, i.value.page))
          }, o(u(w)("library", "Refresh results")), 9, t$),
          l("button", {
            class: "button secondary",
            disabled: a.value || h.value,
            onClick: pe
          }, o(u(w)("library", "Discard analysis")), 9, i$)
        ]),
        i.value.status === "limited" ? (p(), v("p", n$, o(u(w)("library", "Analysis stopped at its storage limit. These results are partial. Choose a smaller subfolder for a complete analysis.")), 1)) : x("", !0),
        i.value.status === "failed" ? (p(), v("p", a$, o(u(w)("library", "Analysis stopped before completion. Check folder access and start a new analysis. These results are partial.")), 1)) : x("", !0),
        l("details", null, [
          l("summary", null, o(u(w)("library", "Rule used for this analysis")), 1),
          i.value.definition.mode === "pattern" ? (p(), v("code", r$, o(i.value.definition.pattern), 1)) : i.value.definition.mode === "folders" ? (p(), v("ul", s$, [
            (p(!0), v(W, null, he(i.value.definition.assignments, (H) => (p(), v("li", {
              key: H.id
            }, o(H.folder || "/") + " · " + o(H.definition.name), 1))), 128))
          ])) : (p(), v("ul", l$, [
            (p(!0), v(W, null, he(i.value.definition.rule.parts, (H, K) => (p(), v("li", { key: K }, o(K + 1) + " · " + o(e.labels[H.field] || u(w)("library", "Ignore")), 1))), 128))
          ]))
        ]),
        l("label", null, [
          ae(o(u(w)("library", "Show results")), 1),
          me(l("select", {
            "onUpdate:modelValue": E[1] || (E[1] = (H) => s.value = H),
            disabled: a.value,
            onChange: E[2] || (E[2] = (H) => L(i.value.id))
          }, [
            l("option", u$, o(u(w)("library", "All")) + " (" + o(Object.values(i.value.counts).reduce((H, K) => H + K, 0)) + ")", 1),
            (p(!0), v(W, null, he(m.value, (H, K) => (p(), v("option", {
              key: K,
              value: K
            }, o(H) + " (" + o(i.value.counts[K] || 0) + ")", 9, c$))), 128))
          ], 40, o$), [
            [rt, s.value]
          ])
        ]),
        l("div", {
          class: "library-analysis-results",
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Analysis results")
        }, [
          (p(!0), v(W, null, he(i.value.items, (H) => (p(), v("details", {
            key: H.id,
            class: "library-inference-result"
          }, [
            l("summary", null, [
              l("span", f$, o(H.path || "—"), 1),
              l("strong", null, o(m.value[H.status]), 1)
            ]),
            i.value.definition.mode === "folders" ? (p(), Pe(hd, {
              key: 0,
              result: H,
              labels: e.labels,
              statuses: m.value
            }, null, 8, ["result", "labels", "statuses"])) : x("", !0),
            (p(!0), v(W, null, he(H.changes, (K) => (p(), v("dl", {
              key: K.field
            }, [
              l("dt", null, o(e.labels[K.field]), 1),
              l("dd", null, o(K.before || "—") + " → " + o(K.value), 1)
            ]))), 128))
          ]))), 128))
        ], 8, d$),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Analysis pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: a.value || i.value.page === 1,
            onClick: E[3] || (E[3] = (H) => L(i.value.id, i.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, h$),
          l("span", null, o(i.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: a.value || !i.value.hasNext,
            onClick: E[4] || (E[4] = (H) => L(i.value.id, i.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, v$)
        ], 8, p$),
        ve(gg, {
          "whole-folder": "",
          results: i.value.items,
          labels: e.labels,
          "request-token": e.requestToken,
          context: JSON.stringify({ analysisId: i.value.id }),
          disabled: a.value || h.value,
          onChanged: E[5] || (E[5] = (H) => L(i.value.id, i.value.page))
        }, null, 8, ["results", "labels", "request-token", "context", "disabled"])
      ], 64)) : x("", !0)
    ], 8, Hx));
  }
}, g$ = { class: "library-inference-part" }, m$ = { class: "library-inference-part-source" }, y$ = { class: "library-inference-part-options" }, _$ = { value: "first" }, w$ = { value: "last" }, k$ = { value: "every" }, S$ = {
  key: 0,
  role: "status"
}, C$ = ["aria-label"], T$ = { value: "ignore" }, A$ = ["value"], E$ = { key: 1 }, x$ = { class: "library-inference-part-options" }, $$ = { class: "library-inference-checkbox" }, O$ = {
  key: 2,
  class: "library-inference-part-options"
}, N$ = { value: "none" }, I$ = { value: "semicolon" }, R$ = { value: "and" }, L$ = { value: "custom" }, P$ = { key: 0 }, D$ = ["value"], F$ = { class: "library-inference-checkbox" }, Ih = " and ", M$ = {
  __name: "InferencePart",
  props: { node: { type: Object, required: !0 }, value: { type: String, default: "" }, fields: { type: Array, required: !0 }, depth: { type: Number, default: 0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(t.node.split?.delimiter || " - "), n = /* @__PURE__ */ G(t.node.split?.occurrence || "first"), a = j(() => t.node.split ? pd(t.value, t.node.split.delimiter, t.node.split.occurrence) : []), r = j({
      get: () => t.node.authorSeparatorChoice || "none",
      set: (c) => {
        t.node.authorSeparatorChoice = c, t.node.authorSeparator = { none: "", semicolon: ";", ampersand: "&", and: Ih, custom: t.node.customAuthorSeparator || "" }[c];
      }
    });
    function s(c) {
      t.node.customAuthorSeparator = c.target.value, t.node.authorSeparator = c.target.value;
    }
    function d() {
      const c = pd(t.value, i.value, n.value).length, g = t.node.split?.children || [];
      t.node.split = {
        delimiter: i.value,
        occurrence: n.value,
        children: Array.from({ length: Math.min(32, Math.max(2, c)) }, (h, y) => g[y] || Su(y === 0 ? t.node.field : "ignore"))
      };
    }
    return (c, g) => {
      const h = Ye("InferencePart", !0);
      return p(), v("div", g$, [
        l("bdi", m$, o(e.value || "—"), 1),
        e.node.split ? (p(), v(W, { key: 0 }, [
          l("div", y$, [
            l("label", null, [
              ae(o(u(w)("library", "Separator")), 1),
              me(l("input", {
                "onUpdate:modelValue": g[0] || (g[0] = (y) => i.value = y),
                maxlength: "100",
                onInput: d
              }, null, 544), [
                [We, i.value]
              ])
            ]),
            l("label", null, [
              ae(o(u(w)("library", "Split at")), 1),
              me(l("select", {
                "onUpdate:modelValue": g[1] || (g[1] = (y) => n.value = y),
                onChange: d
              }, [
                l("option", _$, o(u(w)("library", "First occurrence")), 1),
                l("option", w$, o(u(w)("library", "Last occurrence")), 1),
                l("option", k$, o(u(w)("library", "Every occurrence")), 1)
              ], 544), [
                [rt, n.value]
              ])
            ])
          ]),
          a.value.length !== e.node.split.children.length || !e.node.split.delimiter ? (p(), v("p", S$, o(u(w)("library", "This example does not match the split. Adjust the separator or select another example.")), 1)) : x("", !0),
          l("button", {
            class: "button secondary",
            onClick: g[2] || (g[2] = (y) => e.node.split = null)
          }, o(u(w)("library", "Use whole part")), 1),
          (p(!0), v(W, null, he(e.node.split.children, (y, m) => (p(), Pe(h, {
            key: m,
            node: y,
            value: a.value[m] || "",
            fields: e.fields,
            depth: e.depth + 1
          }, null, 8, ["node", "value", "fields", "depth"]))), 128))
        ], 64)) : (p(), v(W, { key: 1 }, [
          l("label", null, [
            ae(o(u(w)("library", "Field")), 1),
            me(l("select", {
              "onUpdate:modelValue": g[3] || (g[3] = (y) => e.node.field = y),
              "aria-label": `${u(w)("library", "Field")}: ${e.value}`
            }, [
              l("option", T$, o(u(w)("library", "Ignore this part")), 1),
              (p(!0), v(W, null, he(e.fields, (y) => (p(), v("option", {
                key: y[0],
                value: y[0]
              }, o(y[1]), 9, A$))), 128))
            ], 8, C$), [
              [rt, e.node.field]
            ])
          ]),
          e.depth < 6 ? (p(), v("button", {
            key: 0,
            class: "button secondary",
            onClick: d
          }, o(u(w)("library", "Split this part")), 1)) : x("", !0),
          e.node.field !== "ignore" ? (p(), v("details", E$, [
            l("summary", null, o(u(w)("library", "Transform this value")), 1),
            l("div", x$, [
              l("label", null, [
                ae(o(u(w)("library", "Remove prefix")), 1),
                me(l("input", {
                  "onUpdate:modelValue": g[4] || (g[4] = (y) => e.node.prefix = y),
                  maxlength: "100"
                }, null, 512), [
                  [We, e.node.prefix]
                ])
              ]),
              l("label", null, [
                ae(o(u(w)("library", "Remove suffix")), 1),
                me(l("input", {
                  "onUpdate:modelValue": g[5] || (g[5] = (y) => e.node.suffix = y),
                  maxlength: "100"
                }, null, 512), [
                  [We, e.node.suffix]
                ])
              ]),
              l("label", $$, [
                me(l("input", {
                  "onUpdate:modelValue": g[6] || (g[6] = (y) => e.node.underscores = y),
                  type: "checkbox"
                }, null, 512), [
                  [rr, e.node.underscores]
                ]),
                ae(o(u(w)("library", "Replace underscores with spaces")), 1)
              ]),
              l("label", null, [
                ve(Je, {
                  text: u(w)("library", "Affixes must match. Value mapping follows affix removal and underscore replacement.")
                }, {
                  default: we(() => [
                    ae(o(u(w)("library", "Map exact value")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                me(l("input", {
                  "onUpdate:modelValue": g[7] || (g[7] = (y) => e.node.mapFrom = y),
                  maxlength: "200"
                }, null, 512), [
                  [We, e.node.mapFrom]
                ])
              ]),
              l("label", null, [
                ae(o(u(w)("library", "Replacement value")), 1),
                me(l("input", {
                  "onUpdate:modelValue": g[8] || (g[8] = (y) => e.node.mapTo = y),
                  maxlength: "200"
                }, null, 512), [
                  [We, e.node.mapTo]
                ])
              ])
            ])
          ])) : x("", !0),
          e.node.field === "author" ? (p(), v("div", O$, [
            l("label", null, [
              ve(Je, {
                text: u(w)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + (r.value === "and" ? " " + u(w)("library", "Spaces around the word are required.") : "")
              }, {
                default: we(() => [
                  ae(o(u(w)("library", "Separate authors by")), 1)
                ]),
                _: 1
              }, 8, ["text"]),
              me(l("select", {
                "onUpdate:modelValue": g[9] || (g[9] = (y) => r.value = y)
              }, [
                l("option", N$, o(u(w)("library", "None (keep one name)")), 1),
                l("option", I$, o(u(w)("library", "Semicolon (;)")), 1),
                g[11] || (g[11] = l("option", { value: "ampersand" }, "&", -1)),
                l("option", R$, o(u(w)("library", "Word separator")) + ": " + o(Ih.trim()), 1),
                l("option", L$, o(u(w)("library", "Custom separator")), 1)
              ], 512), [
                [rt, r.value]
              ])
            ]),
            r.value === "custom" ? (p(), v("label", P$, [
              ae(o(u(w)("library", "Custom separator")), 1),
              l("input", {
                value: e.node.customAuthorSeparator || "",
                maxlength: "100",
                onInput: s
              }, null, 40, D$)
            ])) : x("", !0),
            l("label", F$, [
              me(l("input", {
                "onUpdate:modelValue": g[10] || (g[10] = (y) => e.node.reverseName = y),
                type: "checkbox"
              }, null, 512), [
                [rr, e.node.reverseName]
              ]),
              ae(o(u(w)("library", "Convert Surname, Given name to Given name Surname")), 1)
            ])
          ])) : x("", !0)
        ], 64))
      ]);
    };
  }
}, U$ = ["aria-busy"], z$ = ["disabled"], j$ = {
  value: "",
  disabled: ""
}, B$ = ["value"], H$ = ["disabled"], V$ = ["disabled"], q$ = ["disabled"], K$ = ["disabled"], G$ = ["disabled"], W$ = {
  key: 0,
  role: "alert"
}, Y$ = ["disabled"], Z$ = {
  key: 1,
  role: "status"
}, Rh = {
  __name: "InferencePatterns",
  props: { pattern: { type: String, default: "" }, mode: { type: String, default: "pattern" }, rule: { type: Object, default: null }, requestToken: { type: String, default: "" } },
  emits: ["choose", "choose-rule"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = j(() => i.mode === "guided"), r = j(() => a.value ? JSON.stringify(i.rule) : i.pattern), s = (H) => (H.kind || "pattern") === "guided" ? JSON.stringify(H.rule) : H.pattern, d = /* @__PURE__ */ G([]), c = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(""), h = /* @__PURE__ */ G(!1), y = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(""), A = /* @__PURE__ */ G([]), C = j(() => [
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
    ]), $ = j(() => [...a.value ? [] : C.value.map((H) => ({ ...H, id: `preset-${H.id}` })).filter((H) => !A.value.includes(H.id)), ...d.value.filter((H) => (H.kind || "pattern") === i.mode)].sort((H, K) => H.name.localeCompare(K.name))), R = j(() => $.value.find((H) => H.id === g.value));
    qe([r, $], () => {
      k.value = "", (!R.value || s(R.value) !== r.value) && (g.value = $.value.find((H) => s(H) === r.value)?.id || "");
    }, { immediate: !0 });
    const L = j(() => [w("library", "Patterns match paths relative to the selected folder. Adjust literal prefixes such as books/ when needed. Ambiguous names still need review."), R.value?.example ? `${w("library", "Example path")}: ${R.value.example}` : ""].filter(Boolean).join(`

`));
    function P(H) {
      const K = $.value.find((Z) => Z.id === H.target.value);
      K && (g.value = K.id, a.value ? n("choose-rule", JSON.parse(JSON.stringify(K.rule))) : n("choose", K.pattern), m.value = "", k.value = "");
    }
    async function N(H = "", K = null) {
      const Z = await fetch(`${Ki("/apps/library/api/inference/patterns")}${H}`, {
        method: K === null ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...K === null ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...K === null ? {} : { body: JSON.stringify(K) }
      });
      if (!Z.ok) throw new Error(Z.status === 409 ? w("library", "That name already exists. Choose a different name.") : Z.status === 422 ? w("library", "Check the definition and name. You can save up to 100 rules and patterns.") : w("library", "Could not load or save rules and patterns. Check your connection and try again."));
      return Z.json();
    }
    async function pe() {
      h.value = !0, y.value = "";
      try {
        const H = await N();
        d.value = H.patterns, A.value = H.hidden || [];
      } catch (H) {
        y.value = H.message;
      } finally {
        h.value = !1;
      }
    }
    async function Q() {
      h.value = !0, y.value = "", m.value = "";
      try {
        const H = await N("", { name: c.value, ...a.value ? { kind: "guided", rule: i.rule } : { pattern: i.pattern } });
        d.value = [...d.value, H.saved].sort((K, Z) => K.name.localeCompare(Z.name)), g.value = H.saved.id, c.value = "", m.value = a.value ? w("library", "Rule saved to your account.") : w("library", "Pattern saved to your account.");
      } catch (H) {
        y.value = H.message;
      } finally {
        h.value = !1;
      }
    }
    async function E(H) {
      h.value = !0, y.value = "", m.value = "";
      try {
        await N(`/${H}/delete`, {}), d.value = d.value.filter((K) => K.id !== H), A.value = [...A.value, H], g.value = "", k.value = "", m.value = a.value ? w("library", "Saved rule deleted. The current preview is unchanged.") : w("library", "Saved pattern deleted. The current preview is unchanged.");
      } catch (K) {
        y.value = K.message;
      } finally {
        h.value = !1;
      }
    }
    return $t(pe), (H, K) => (p(), v("div", {
      class: "library-inference-templates",
      "aria-busy": h.value ? "true" : "false"
    }, [
      l("label", null, [
        ve(Je, {
          text: a.value ? u(w)("library", "Select a rule to restore its assignments, splits, transformations and author options. Folder scope stays unchanged.") : L.value
        }, {
          default: we(() => [
            ae(o(a.value ? u(w)("library", "Saved rule") : u(w)("library", "Pattern")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        me(l("select", {
          "onUpdate:modelValue": K[0] || (K[0] = (Z) => g.value = Z),
          disabled: h.value,
          onChange: P
        }, [
          l("option", j$, o(a.value ? u(w)("library", "Custom rule") : u(w)("library", "Custom pattern")), 1),
          (p(!0), v(W, null, he($.value, (Z) => (p(), v("option", {
            key: Z.id,
            value: Z.id
          }, o(Z.name), 9, B$))), 128))
        ], 40, z$), [
          [rt, g.value]
        ])
      ]),
      Be(H.$slots, "default"),
      l("form", {
        onSubmit: Ae(Q, ["prevent"])
      }, [
        l("label", null, [
          ve(Je, {
            text: u(w)("library", "Saved privately to your account. Save changes under a new name; existing definitions are not overwritten. Folder scope and example paths are not saved.")
          }, {
            default: we(() => [
              ae(o(a.value ? u(w)("library", "Rule name") : u(w)("library", "Pattern name")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          me(l("input", {
            "onUpdate:modelValue": K[1] || (K[1] = (Z) => c.value = Z),
            maxlength: "120",
            required: "",
            disabled: h.value
          }, null, 8, H$), [
            [We, c.value]
          ])
        ]),
        l("button", {
          class: "button secondary",
          disabled: h.value || !c.value.trim() || (a.value ? !e.rule : !e.pattern.trim())
        }, o(a.value ? u(w)("library", "Save current rule as new") : u(w)("library", "Save current pattern as new")), 9, V$),
        R.value && !k.value ? (p(), v("button", {
          key: 0,
          type: "button",
          class: "button secondary",
          disabled: h.value,
          onClick: K[2] || (K[2] = (Z) => k.value = R.value.id)
        }, o(a.value ? u(w)("library", "Delete rule") : u(w)("library", "Delete pattern")), 9, q$)) : x("", !0),
        k.value ? (p(), v(W, { key: 1 }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: h.value,
            onClick: K[3] || (K[3] = (Z) => E(k.value))
          }, o(u(w)("library", "Confirm deletion")), 9, K$),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: h.value,
            onClick: K[4] || (K[4] = (Z) => k.value = "")
          }, o(u(w)("library", "Cancel")), 9, G$)
        ], 64)) : x("", !0)
      ], 32),
      y.value ? (p(), v("p", W$, [
        ae(o(y.value) + " ", 1),
        l("button", {
          class: "button secondary",
          disabled: h.value,
          onClick: pe
        }, o(a.value ? u(w)("library", "Reload saved rules") : u(w)("library", "Reload saved patterns")), 9, Y$)
      ])) : x("", !0),
      m.value ? (p(), v("p", Z$, o(m.value), 1)) : x("", !0)
    ], 8, U$));
  }
}, X$ = ["aria-busy"], J$ = ["disabled"], Q$ = {
  value: "",
  disabled: ""
}, e3 = ["value"], t3 = { class: "library-inference-path" }, i3 = { class: "library-inference-checkbox" }, n3 = ["disabled"], a3 = ["disabled"], r3 = {
  key: 0,
  role: "status"
}, s3 = {
  key: 1,
  role: "alert"
}, l3 = ["disabled"], o3 = { key: 2 }, u3 = { class: "library-inference-folder-list" }, c3 = {
  key: 0,
  role: "status"
}, d3 = ["disabled", "onClick"], f3 = ["disabled", "onClick"], p3 = ["disabled"], h3 = {
  __name: "InferenceFolderRules",
  props: { rootId: { type: String, default: "" }, folder: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, scopePending: Boolean },
  emits: ["loaded"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G([]), s = /* @__PURE__ */ G(""), d = /* @__PURE__ */ G(!0), c = /* @__PURE__ */ G(!1), g = /* @__PURE__ */ G(!1), h = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(""), m = j(() => i.disabled || c.value || g.value);
    let k = 0;
    async function A(L, P) {
      const N = await fetch(Ki(`/apps/library/api/inference/${L}`), {
        method: P === void 0 ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...P === void 0 ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...P === void 0 ? {} : { body: JSON.stringify(P) }
      });
      if (!N.ok) throw new Error(N.status === 409 ? w("library", "This rule is already assigned to this folder.") : N.status === 422 ? w("library", "Check the folder and rule. You can save up to 100 folder assignments.") : N.status === 404 ? w("library", "The folder or saved rule is unavailable. Reload and check your access.") : w("library", "Could not load or save folder rules. Try again."));
      return N.json();
    }
    async function C() {
      const L = ++k, P = i.rootId;
      if (r.value = [], y.value = "", h.value = "", n("loaded", { rootId: P, assignments: [] }), !!P) {
        c.value = !0;
        try {
          const [N, pe] = await Promise.all([A("patterns"), A(`folders?rootId=${encodeURIComponent(P)}`)]);
          if (L !== k) return;
          a.value = N.patterns, r.value = pe.assignments, a.value.some((Q) => Q.id === s.value) || (s.value = ""), n("loaded", { rootId: P, assignments: pe.assignments });
        } catch (N) {
          L === k && (h.value = N.message);
        } finally {
          L === k && (c.value = !1);
        }
      }
    }
    async function $() {
      if (!(m.value || i.scopePending || !s.value)) {
        g.value = !0, h.value = "";
        try {
          await A("folders", { rootId: i.rootId, folder: i.folder, recursive: d.value, definitionId: s.value }), await C();
        } catch (L) {
          h.value = L.message;
        } finally {
          g.value = !1;
        }
      }
    }
    async function R(L) {
      if (!m.value) {
        g.value = !0, h.value = "";
        try {
          await A(`folders/${L}/delete`, {}), await C();
        } catch (P) {
          h.value = P.message;
        } finally {
          g.value = !1;
        }
      }
    }
    return qe(() => i.rootId, C, { immediate: !0 }), ki(() => {
      k++;
    }), (L, P) => (p(), v("div", {
      class: "library-inference-folder-rules",
      "aria-busy": m.value ? "true" : "false"
    }, [
      l("form", {
        onSubmit: Ae($, ["prevent"])
      }, [
        l("label", null, [
          ve(Je, {
            text: u(w)("library", "Save a guided rule or advanced pattern first. Assignments keep a fixed copy, even if the saved definition is later deleted. Rules only generate previews; they do not run on scans or change books.")
          }, {
            default: we(() => [
              ae(o(u(w)("library", "Saved rule or pattern")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          me(l("select", {
            "onUpdate:modelValue": P[0] || (P[0] = (N) => s.value = N),
            disabled: m.value
          }, [
            l("option", Q$, o(u(w)("library", "Choose a saved definition")), 1),
            (p(!0), v(W, null, he(a.value, (N) => (p(), v("option", {
              key: N.id,
              value: N.id
            }, o(N.name), 9, e3))), 128))
          ], 8, J$), [
            [rt, s.value]
          ])
        ]),
        l("p", t3, [
          ae(o(u(w)("library", "Assignment folder")) + ": ", 1),
          l("bdi", null, o(e.folder || "/"), 1)
        ]),
        l("label", i3, [
          me(l("input", {
            "onUpdate:modelValue": P[1] || (P[1] = (N) => d.value = N),
            type: "checkbox",
            disabled: m.value
          }, null, 8, n3), [
            [rr, d.value]
          ]),
          ae(o(u(w)("library", "Use in subfolders")), 1)
        ]),
        l("button", {
          class: "button primary",
          disabled: m.value || e.scopePending || !s.value || !e.rootId
        }, o(u(w)("library", "Assign to this folder")), 9, a3)
      ], 32),
      e.scopePending ? (p(), v("p", r3, o(u(w)("library", "Load the folder before assigning a rule.")), 1)) : x("", !0),
      h.value ? (p(), v("p", s3, o(h.value), 1)) : x("", !0),
      l("button", {
        class: "button secondary",
        disabled: m.value,
        onClick: C
      }, o(u(w)("library", "Reload folder rules")), 9, l3),
      l("h3", null, [
        ve(Je, {
          text: u(w)("library", "Rules match paths relative to their assigned folder. A deeper matching folder wins; if it does not match, an ancestor can be used. Equally specific conflicting rules require review. All assignments for this root are listed here.")
        }, {
          default: we(() => [
            ae(o(u(w)("library", "Rules for this root")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      !r.value.length && !c.value ? (p(), v("p", o3, o(u(w)("library", "No folder rules assigned yet.")), 1)) : x("", !0),
      l("ul", u3, [
        (p(!0), v(W, null, he(r.value, (N) => (p(), v("li", {
          key: N.id,
          class: "library-inference-folder-entry"
        }, [
          l("strong", null, o(N.definition.name), 1),
          l("bdi", null, o(N.folder || "/"), 1),
          l("small", null, o(N.recursive ? u(w)("library", "Includes subfolders") : u(w)("library", "Direct children only")), 1),
          N.available ? x("", !0) : (p(), v("p", c3, o(u(w)("library", "Folder unavailable or replaced. Remove this assignment and assign again after checking the folder.")), 1)),
          y.value !== N.id ? (p(), v("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: m.value,
            onClick: (pe) => y.value = N.id
          }, o(u(w)("library", "Remove assignment")), 9, d3)) : (p(), v(W, { key: 2 }, [
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: (pe) => R(N.id)
            }, o(u(w)("library", "Confirm removal")), 9, f3),
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: P[2] || (P[2] = (pe) => y.value = "")
            }, o(u(w)("library", "Cancel")), 9, p3)
          ], 64))
        ]))), 128))
      ])
    ], 8, X$));
  }
};
function v3(e, t, i, n = {}) {
  const a = [t, e].filter(Boolean).join("/"), r = i.filter((d) => d.available && (!d.folder || a.startsWith(`${d.folder}/`))).map((d) => ({ ...d, relative: d.folder ? a.slice(d.folder.length + 1) : a, depth: d.folder ? d.folder.split("/").length : 0 })).filter((d) => d.recursive || !d.relative.includes("/")).sort((d, c) => c.depth - d.depth || d.id.localeCompare(c.id)), s = [];
  for (const d of [...new Set(r.map((c) => c.depth))]) {
    const c = [];
    for (const m of r.filter((k) => k.depth === d)) {
      const k = m.definition, A = k.kind === "guided" ? eu(m.relative, k.rule, n) : hg(m.relative, k.pattern, n), C = { id: m.id, name: k.name, folder: m.folder };
      s.push({ ...C, status: A.status }), ["ready", "conflict", "unchanged"].includes(A.status) && A.changes.length && c.push({ result: A, source: C });
    }
    if (s.some((m) => m.status === "ambiguous")) return { status: "ambiguous", changes: [], conflicts: [], attempts: s };
    if (!c.length) continue;
    const g = /* @__PURE__ */ new Map();
    for (const { result: m, source: k } of c) for (const A of m.changes) {
      const C = g.get(A.field) || /* @__PURE__ */ new Map(), $ = JSON.stringify(A.values || [A.value]), R = C.get($);
      R ? R.sources.push(k) : C.set($, { ...A, sources: [k] }), g.set(A.field, C);
    }
    const h = [], y = [];
    for (const [m, k] of g)
      k.size > 1 ? y.push({ field: m, proposals: [...k.values()] }) : h.push([...k.values()][0]);
    return { status: y.length ? "ambiguous" : h.some((m) => m.status === "conflict") ? "conflict" : h.some((m) => m.status === "ready") ? "ready" : "unchanged", changes: h, conflicts: y, attempts: s };
  }
  return { status: "unmatched", changes: [], conflicts: [], attempts: s };
}
const Lh = /* @__PURE__ */ new Set(["english", "en", "german", "deutsch", "de", "french", "français", "fr", "arabic", "ar"]), mg = /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u;
function Ph(e) {
  const t = e.trim().split(/\s+/);
  return e.length <= 120 && t.length >= 2 && t.length <= 7 && mg.test(e);
}
function ws(e) {
  const t = e.split(",").map((i) => i.trim());
  return t.length === 2 && t.every((i) => i && mg.test(i)) && e.length <= 120;
}
function wr(e) {
  const t = e.split(",").map((i) => i.trim());
  return (ws(e) ? `${t[1]} ${t[0]}` : e).trim().replace(/\s+/g, " ").toLocaleLowerCase("en");
}
function si(e, t = {}) {
  return { ...Su(e), ...t };
}
function ua(e, t, ...i) {
  return { ...Su(), split: { delimiter: e, occurrence: t, children: i } };
}
function b3(e, t = []) {
  if (typeof e != "string" || !e || e.length > 2e3 || nl(e).length > 64) return [];
  const i = nl(e), n = i.length - 1, a = i[n], r = i.slice(0, -1), s = Qo(e), d = [], c = [];
  let g = a, h = (Z) => Z, y = (Z) => Z, m = "", k = si("title"), A = !1;
  const C = /^(.*\S) \(((?:18|19|20)\d{2})\)$/.exec(g), $ = !C && /^(.*\S) ((?:18|19|20)\d{2})$/.exec(g);
  C ? (g = C[1], h = (Z) => ua(" (", "last", Z, si("year", { suffix: ")" })), d.push("year-parentheses")) : $ && (g = $[1], h = (Z) => ua(" ", "last", Z, si("year")), d.push("year-trailing"), c.push("year-may-be-title"));
  const R = /^(.*\S) by (.+)$/.exec(g), L = /^(.*\S) - (.+)$/.exec(g), P = R || L, N = !R && L && (ws(L[1]) || Ph(L[1]) && r.some((Z) => wr(Z) === wr(L[1]))), pe = /^.+ #\d{1,3}(?:\.\d+)? - .+$/.test(g) && g.split(" - ").length === 2;
  N ? (m = L[1], g = L[2], y = (Z) => ua(" - ", "first", si("author"), Z), d.push("author-first"), c.push("author-needs-review")) : P && !pe && (Ph(P[2]) || ws(P[2])) && (m = P[2], g = P[1], y = (Z) => ua(R ? " by " : " - ", "last", Z, si("author")), d.push(R ? "author-by" : "author-dash"), r.some((Z) => wr(Z) === wr(m)) ? d.push("author-folder-agrees") : c.push("author-needs-review"));
  const Q = /^(.*\S) #(\d{1,3}(?:\.\d+)?) - (.+)$/.exec(g), E = /^(\d{1,3}(?:\.\d+)?)\. (.+)$/.exec(g);
  if (Q)
    k = ua(" #", "first", si("series"), ua(" - ", "first", si("seriesNumber"), si("title"))), A = !0, d.push("series-inline");
  else if (E && r.length) {
    const Z = r.at(-1);
    !ws(Z) && !(m && wr(Z) === wr(m)) && !Lh.has(Z.toLowerCase()) && !Z.includes("_") && (k = ua(". ", "first", si("seriesNumber"), si("title")), s.parts[n - 1] = si("series"), A = !0, d.push("series-folder"), c.push("series-needs-review"));
  }
  if (s.parts[n] = h(y(k)), !m) {
    const Z = A ? n - 2 : n - 1;
    Z >= 0 && ws(i[Z]) && (s.parts[Z] = si("author"), d.push("author-comma"), c.push("author-needs-review"));
  }
  for (let Z = r.length - 1; Z >= 0; Z--) {
    if (s.parts[Z].field !== "ignore") continue;
    const ne = r[Z], z = ne.indexOf("_"), q = z < 0 ? ne : ne.slice(0, z);
    if (Lh.has(q.toLowerCase())) {
      s.parts[Z] = z < 0 ? si("language") : ua("_", "first", si("language"), si("genre", { underscores: !0 })), d.push(z < 0 ? "language-folder" : "language-genre-folder");
      break;
    }
  }
  const H = [], K = (Z, ne, z, q) => {
    const I = eu(e, ne);
    if (!["ready", "conflict", "unchanged"].includes(I.status)) return;
    const V = t.slice(0, 40).map((ie) => typeof ie == "string" ? ie : ie.path).filter((ie) => typeof ie == "string"), J = V.filter((ie) => ["ready", "conflict", "unchanged"].includes(eu(ie, ne).status)).length;
    H.push({ id: Z, rule: ne, clues: z, warnings: [...new Set(q)], preview: I.changes, matched: J, total: V.length });
  };
  return d.length && K("detected", s, d, c), K("filename", Qo(e), ["filename-title"], /(?:^|\D)(?:18|19|20)\d{2}(?:\D|$)/.test(a) ? ["year-may-be-title"] : []), H;
}
const g3 = { class: "library-inference-suggestions" }, m3 = ["disabled"], y3 = {
  value: "",
  disabled: ""
}, _3 = ["value"], w3 = {
  key: 0,
  "aria-live": "polite"
}, k3 = {
  __name: "InferenceSuggestions",
  props: { path: { type: String, default: "" }, sample: { type: Array, default: () => [] }, rule: { type: Object, default: null } },
  emits: ["choose"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G(""), r = j(() => b3(i.path, i.sample)), s = j(() => r.value.find((h) => h.id === a.value)), d = j(() => ({
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
    })), c = j(() => ({
      "year-may-be-title": w("library", "A year-like number may belong to the title. Check before applying."),
      "author-needs-review": w("library", "A name-shaped phrase may be a title or several people. Check the author; commas are preserved."),
      "series-needs-review": w("library", "Check that the parent folder names a series and the number is its position.")
    }));
    qe(() => i.path, () => {
      a.value = "";
    }), qe(() => JSON.stringify(i.rule), (h) => {
      s.value && JSON.stringify(s.value.rule) !== h && (a.value = "");
    });
    function g(h) {
      a.value = h.target.value, s.value && n("choose", JSON.parse(JSON.stringify(s.value.rule)));
    }
    return (h, y) => (p(), v("div", g3, [
      l("label", null, [
        ve(Je, {
          text: u(w)("library", "Suggest editable assignments from the selected example. Check the live preview and other books before applying. Matching counts describe this page and its structure, not verified metadata.") + (s.value ? `

` + s.value.clues.map((m) => d.value[m]).join(`
`) : "")
        }, {
          default: we(() => [
            ae(o(u(w)("library", "Suggest fields")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        me(l("select", {
          "onUpdate:modelValue": y[0] || (y[0] = (m) => a.value = m),
          disabled: !r.value.length,
          onChange: g
        }, [
          l("option", y3, o(u(w)("library", "Choose a suggestion")), 1),
          (p(!0), v(W, null, he(r.value, (m) => (p(), v("option", {
            key: m.id,
            value: m.id
          }, o(m.id === "filename" ? u(w)("library", "Title from filename") : u(w)("library", "Suggested assignments")), 9, _3))), 128))
        ], 40, m3), [
          [rt, a.value]
        ])
      ]),
      s.value ? (p(), v("div", w3, [
        l("p", null, o(u(w)("library", "{matched} of {total} paths on this page match this structure.", { matched: s.value.matched, total: s.value.total })), 1),
        (p(!0), v(W, null, he(s.value.warnings, (m) => (p(), v("p", {
          key: m,
          class: "library-inference-suggestion-warning"
        }, o(c.value[m]), 1))), 128))
      ])) : x("", !0)
    ]));
  }
}, S3 = ["aria-label", "aria-busy"], C3 = {
  key: 0,
  role: "alert"
}, T3 = {
  key: 1,
  role: "status"
}, A3 = { class: "library-inference-step" }, E3 = ["disabled"], x3 = ["value"], $3 = ["disabled", "placeholder"], O3 = { class: "library-inference-checkbox" }, N3 = ["disabled"], I3 = ["disabled"], R3 = {
  key: 0,
  class: "library-inference-path"
}, L3 = ["aria-label"], P3 = ["disabled"], D3 = ["disabled", "onClick"], F3 = {
  key: 2,
  class: "library-inference-step"
}, M3 = { class: "library-inference-editor" }, U3 = { class: "library-inference-controls" }, z3 = { class: "library-inference-scope" }, j3 = ["value"], B3 = ["open"], H3 = { value: "guided" }, V3 = { value: "pattern" }, q3 = { value: "folders" }, K3 = {
  key: 0,
  role: "status"
}, G3 = { class: "library-inference-checkbox" }, W3 = {
  key: 2,
  class: "library-inference-pattern",
  open: ""
}, Y3 = ["aria-label"], Z3 = ["title"], X3 = {
  key: 0,
  "aria-live": "polite",
  "aria-atomic": "true"
}, J3 = { class: "library-inference-live-status" }, Q3 = { key: 1 }, eO = {
  key: 0,
  class: "library-inference-author-chips"
}, tO = {
  key: 1,
  dir: "auto"
}, iO = { dir: "auto" }, nO = { key: 2 }, aO = { dir: "auto" }, rO = { key: 3 }, sO = { key: 2 }, lO = { key: 1 }, oO = {
  class: "library-inference-path",
  dir: "ltr"
}, uO = { class: "library-inference-step" }, cO = { value: "all" }, dO = ["value"], fO = { key: 0 }, pO = { class: "library-inference-path" }, hO = {
  key: 1,
  class: "library-inference-table-scroll"
}, vO = { key: 2 }, bO = ["aria-label"], gO = ["disabled"], mO = ["disabled"], yO = {
  __name: "PathInference",
  props: { requestToken: { type: String, default: "" } },
  setup(e) {
    const t = /* @__PURE__ */ G([]), i = /* @__PURE__ */ G(""), n = /* @__PURE__ */ G(""), a = /* @__PURE__ */ G(!0), r = /* @__PURE__ */ G([]), s = /* @__PURE__ */ G(1), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(!1), g = /* @__PURE__ */ G(""), h = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(""), A = /* @__PURE__ */ G([]), C = /* @__PURE__ */ G(null), $ = /* @__PURE__ */ G("guided"), R = /* @__PURE__ */ G(0), L = /* @__PURE__ */ G("%folders%/%title%.%extension%"), P = /* @__PURE__ */ G("all"), N = /* @__PURE__ */ G(!0);
    let pe = 0;
    const Q = j(() => [
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
    ]), E = j(() => Object.fromEntries(Q.value)), H = j(() => ({
      ready: w("library", "Empty field suggestions"),
      conflict: w("library", "Existing values need review"),
      unmatched: w("library", "Unmatched paths"),
      ambiguous: w("library", "Ambiguous matches"),
      invalid: w("library", "Invalid pattern or value"),
      unchanged: w("library", "No changes")
    })), K = j(() => r.value.map((ye) => ({ ...ye, ...$.value === "folders" ? v3(ye.path, k.value, A.value, ye.current) : $.value === "guided" ? eu(ye.path, C.value, ye.current) : hg(ye.path, L.value, ye.current) }))), Z = j(() => K.value.find((ye) => ye.path === y.value)), ne = j(() => K.value.filter((ye) => P.value === "all" || ye.status === P.value)), z = j(() => [...new Set(r.value.filter((ye) => ye.path.includes("/")).map((ye) => ye.path.split("/")[0]))]);
    function q(ye) {
      n.value = [n.value.replace(/\/$/, ""), ye].filter(Boolean).join("/"), Me();
    }
    function I() {
      n.value = n.value.replace(/\/$/, "").split("/").slice(0, -1).join("/"), Me();
    }
    const V = j(() => K.value.reduce((ye, Ie) => (ye[Ie.status] = (ye[Ie.status] || 0) + 1, ye), {})), J = j(() => i.value !== m.value || n.value.replace(/^\/+|\/+$/g, "") !== k.value), ie = j(() => nl(y.value));
    function Y() {
      !C.value && y.value && (C.value = Qo(y.value));
    }
    function fe() {
      C.value = Qo(y.value), R.value++, $.value = "guided";
    }
    function ke(ye) {
      C.value = ye, R.value++, $.value = "guided";
    }
    function Le(ye) {
      ke(ye), N.value = !1;
    }
    function Oe(ye) {
      L.value = ye, $.value = "pattern";
    }
    async function Me(ye = 1) {
      const Ie = ++pe;
      c.value = !0, g.value = "", r.value = [];
      try {
        const ge = new URLSearchParams();
        i.value && (ge.set("rootId", i.value), ge.set("folder", n.value), ge.set("recursive", a.value ? "1" : "0"), ge.set("page", String(ye)));
        const De = await fetch(`${Ki("/apps/library/api/inference/sample")}?${ge}`, { credentials: "same-origin", cache: "no-store" });
        if (!De.ok) throw new Error(w("library", "Could not load this folder. Check its path and your access."));
        const ut = await De.json();
        if (Ie !== pe) return;
        if (t.value = ut.roots, !i.value && (i.value = String(ut.roots[0]?.id || ""), i.value))
          return Me();
        m.value !== i.value && (A.value = []), m.value = i.value;
        const ee = ut.roots.find((S) => String(S.id) === i.value)?.path.replace(/\/$/, "") || "";
        k.value = ut.scope.slice(ee.length).replace(/^\//, ""), r.value = ut.items || [], s.value = ut.page || 1, d.value = !!ut.hasNext, h.value = ut.scope || "", y.value = r.value[0]?.path || "", Y();
      } catch (ge) {
        Ie === pe && (g.value = ge.message);
      } finally {
        Ie === pe && (c.value = !1);
      }
    }
    function Ze(ye) {
      ye.rootId === m.value && (A.value = ye.assignments);
    }
    function ft() {
      n.value = "", Me();
    }
    return $t(() => Me()), (ye, Ie) => (p(), v("section", {
      class: "library-inference",
      "aria-label": u(w)("library", "Extract metadata from paths"),
      "aria-busy": c.value ? "true" : "false"
    }, [
      l("h1", null, [
        ve(Je, {
          text: u(w)("library", "Preview a naming rule, select fields and review before applying. Source files are never changed.")
        }, {
          default: we(() => [
            ae(o(u(w)("library", "Extract metadata from paths")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      g.value ? (p(), v("p", C3, o(g.value), 1)) : x("", !0),
      c.value ? (p(), v("p", T3, o(u(w)("library", "Loading or saving…")), 1)) : x("", !0),
      l("section", A3, [
        l("h2", null, o(u(w)("library", "1. Choose a folder")), 1),
        l("form", {
          class: "library-inference-scope",
          onSubmit: Ie[3] || (Ie[3] = Ae((ge) => Me(), ["prevent"]))
        }, [
          l("label", null, [
            ve(Je, {
              text: u(w)("library", "Up to 40 accessible indexed books per page. Counts below describe this sample, not the entire folder.")
            }, {
              default: we(() => [
                ae(o(u(w)("library", "Library root")), 1)
              ]),
              _: 1
            }, 8, ["text"]),
            me(l("select", {
              "onUpdate:modelValue": Ie[0] || (Ie[0] = (ge) => i.value = ge),
              disabled: c.value || !t.value.length,
              onChange: ft
            }, [
              (p(!0), v(W, null, he(t.value, (ge) => (p(), v("option", {
                key: ge.id,
                value: String(ge.id)
              }, o(ge.label), 9, x3))), 128))
            ], 40, E3), [
              [rt, i.value]
            ])
          ]),
          l("label", null, [
            ae(o(u(w)("library", "Subfolder relative to this root")), 1),
            me(l("input", {
              "onUpdate:modelValue": Ie[1] || (Ie[1] = (ge) => n.value = ge),
              type: "text",
              disabled: c.value,
              placeholder: u(w)("library", "Leave empty for the whole root")
            }, null, 8, $3), [
              [We, n.value]
            ])
          ]),
          l("label", O3, [
            me(l("input", {
              "onUpdate:modelValue": Ie[2] || (Ie[2] = (ge) => a.value = ge),
              type: "checkbox",
              disabled: c.value
            }, null, 8, N3), [
              [rr, a.value]
            ]),
            ae(o(u(w)("library", "Include subfolders")), 1)
          ]),
          l("button", {
            class: "button primary",
            disabled: c.value || !i.value
          }, o(u(w)("library", "Load sample")), 9, I3)
        ], 32),
        h.value ? (p(), v("p", R3, o(h.value), 1)) : x("", !0),
        l("div", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Folders in this sample")
        }, [
          n.value ? (p(), v("button", {
            key: 0,
            class: "button secondary",
            disabled: c.value,
            onClick: I
          }, o(u(w)("library", "Parent folder")), 9, P3)) : x("", !0),
          (p(!0), v(W, null, he(z.value, (ge) => (p(), v("button", {
            key: ge,
            class: "button secondary",
            disabled: c.value,
            onClick: (De) => q(ge)
          }, o(ge) + "/", 9, D3))), 128))
        ], 8, L3)
      ]),
      r.value.length ? (p(), v("section", F3, [
        l("h2", null, o(u(w)("library", "2. Describe the structure")), 1),
        l("div", M3, [
          l("div", U3, [
            l("div", z3, [
              l("label", null, [
                ve(Je, {
                  text: u(w)("library", "Assignments stay the same when you select another example. Reset them to use a different folder structure.")
                }, {
                  default: we(() => [
                    ae(o(u(w)("library", "Example path")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                me(l("select", {
                  "onUpdate:modelValue": Ie[4] || (Ie[4] = (ge) => y.value = ge),
                  onChange: Ie[5] || (Ie[5] = (ge) => Y())
                }, [
                  (p(!0), v(W, null, he(r.value, (ge) => (p(), v("option", {
                    key: ge.id,
                    value: ge.path
                  }, o(ge.path), 9, j3))), 128))
                ], 544), [
                  [rt, y.value]
                ])
              ])
            ]),
            ve(k3, {
              path: y.value,
              sample: r.value,
              rule: $.value === "guided" ? C.value : null,
              onChoose: Le
            }, null, 8, ["path", "sample", "rule"]),
            l("details", {
              class: "library-inference-customize",
              open: N.value,
              onToggle: Ie[9] || (Ie[9] = (ge) => N.value = ge.target.open)
            }, [
              l("summary", null, o(u(w)("library", "Edit pattern")), 1),
              l("label", null, [
                ae(o(u(w)("library", "Rule editor")), 1),
                me(l("select", {
                  "onUpdate:modelValue": Ie[6] || (Ie[6] = (ge) => $.value = ge)
                }, [
                  l("option", H3, o(u(w)("library", "Guided assignments")), 1),
                  l("option", V3, o(u(w)("library", "Advanced pattern")), 1),
                  l("option", q3, o(u(w)("library", "Folder rules")), 1)
                ], 512), [
                  [rt, $.value]
                ])
              ]),
              $.value === "folders" ? (p(), Pe(h3, {
                key: 0,
                "root-id": m.value,
                folder: k.value,
                "request-token": e.requestToken,
                disabled: c.value,
                "scope-pending": J.value,
                onLoaded: Ze
              }, null, 8, ["root-id", "folder", "request-token", "disabled", "scope-pending"])) : x("", !0),
              $.value === "guided" && C.value ? (p(), v(W, { key: 1 }, [
                ve(Rh, {
                  mode: "guided",
                  rule: C.value,
                  "request-token": e.requestToken,
                  onChooseRule: ke
                }, null, 8, ["rule", "request-token"]),
                l("button", {
                  class: "button secondary",
                  onClick: fe
                }, o(u(w)("library", "Reset assignments from this example")), 1),
                ie.value.length !== C.value.parts.length ? (p(), v("p", K3, o(u(w)("library", "This example has a different folder depth and does not match the rule.")), 1)) : x("", !0),
                (p(!0), v(W, null, he(C.value.parts, (ge, De) => (p(), v("div", {
                  key: `${R.value}-${De}`
                }, [
                  l("h3", null, o(De === C.value.parts.length - 1 ? u(w)("library", "Filename") : u(w)("library", "Folder")) + " " + o(De + 1), 1),
                  ve(M$, {
                    node: ge,
                    value: ie.value[De] || "",
                    fields: Q.value
                  }, null, 8, ["node", "value", "fields"])
                ]))), 128)),
                l("label", G3, [
                  me(l("input", {
                    "onUpdate:modelValue": Ie[7] || (Ie[7] = (ge) => C.value.combineAuthors = ge),
                    type: "checkbox"
                  }, null, 512), [
                    [rr, C.value.combineAuthors]
                  ]),
                  ve(Je, {
                    text: u(w)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + " " + u(w)("library", "Each author is stored separately and can be used to filter the catalogue.")
                  }, {
                    default: we(() => [
                      ae(o(u(w)("library", "Combine authors from multiple parts")), 1)
                    ]),
                    _: 1
                  }, 8, ["text"])
                ])
              ], 64)) : x("", !0),
              $.value === "pattern" ? (p(), v("details", W3, [
                l("summary", null, o(u(w)("library", "Pattern and presets")), 1),
                ve(Rh, {
                  pattern: L.value,
                  "request-token": e.requestToken,
                  onChoose: Oe
                }, {
                  default: we(() => [
                    l("label", null, [
                      ve(Je, {
                        text: u(w)("library", "Placeholders capture text. Separators must match exactly. %folder% ignores one folder; %folders%/ ignores any folder depth; %ignore% ignores one filename part.") + `

` + Q.value.map((ge) => `%${ge[0]}%`).join(" · ")
                      }, {
                        default: we(() => [
                          ae(o(u(w)("library", "Advanced pattern")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      me(l("input", {
                        "onUpdate:modelValue": Ie[8] || (Ie[8] = (ge) => L.value = ge),
                        maxlength: "1000",
                        spellcheck: "false",
                        dir: "ltr"
                      }, null, 512), [
                        [We, L.value]
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["pattern", "request-token"])
              ])) : x("", !0)
            ], 40, B3)
          ]),
          l("aside", {
            class: "library-inference-live",
            "aria-label": u(w)("library", "Live preview")
          }, [
            l("h3", null, o(u(w)("library", "Live preview")), 1),
            l("p", {
              class: "library-inference-live-path",
              title: y.value
            }, o(y.value), 9, Z3),
            Z.value ? (p(), v("div", X3, [
              l("p", J3, o(H.value[Z.value.status]), 1),
              $.value === "folders" ? (p(), Pe(hd, {
                key: 0,
                result: Z.value,
                labels: E.value,
                statuses: H.value
              }, null, 8, ["result", "labels", "statuses"])) : x("", !0),
              Z.value.changes.length ? (p(), v("dl", Q3, [
                (p(!0), v(W, null, he(Z.value.changes, (ge) => (p(), v("div", {
                  key: ge.field,
                  class: Ce(["library-inference-live-field", `library-inference-live-field--${ge.status}`])
                }, [
                  l("dt", null, o(E.value[ge.field]), 1),
                  l("dd", null, [
                    ge.field === "author" && ge.values ? (p(), v("span", eO, [
                      (p(!0), v(W, null, he(ge.values, (De) => (p(), v("strong", {
                        key: De,
                        dir: "auto"
                      }, o(De), 1))), 128))
                    ])) : (p(), v("strong", tO, o(ge.value || "—"), 1)),
                    l("small", null, [
                      ae(o(u(w)("library", "Current value")) + ": ", 1),
                      l("span", iO, o(ge.before || "—"), 1)
                    ]),
                    ge.raw !== ge.value ? (p(), v("small", nO, [
                      ae(o(u(w)("library", "Source text")) + ": ", 1),
                      l("span", aO, o(ge.raw), 1)
                    ])) : x("", !0),
                    l("small", null, o(H.value[ge.status]), 1),
                    ge.sources ? (p(), v("small", rO, o(u(w)("library", "Matched rule")) + ": " + o(ge.sources.map((De) => De.name).join(", ")), 1)) : x("", !0)
                  ])
                ], 2))), 128))
              ])) : Z.value.conflicts?.length ? x("", !0) : (p(), v("p", sO, o(u(w)("library", "No fields extracted from this example. Check the rule, separators and transformations.")), 1))
            ])) : x("", !0),
            $.value === "pattern" ? (p(), v("details", lO, [
              l("summary", null, o(u(w)("library", "Active pattern")), 1),
              l("code", oO, o(L.value), 1)
            ])) : x("", !0)
          ], 8, Y3)
        ])
      ])) : x("", !0),
      l("section", uO, [
        l("h2", null, o(u(w)("library", "3. Review the sample")), 1),
        l("label", null, [
          ve(Je, {
            text: u(w)("library", "Fill empty fields first. Existing values are flagged for review. No changes are applied in this preview.")
          }, {
            default: we(() => [
              ae(o(u(w)("library", "Show results")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          me(l("select", {
            "onUpdate:modelValue": Ie[10] || (Ie[10] = (ge) => P.value = ge)
          }, [
            l("option", cO, o(u(w)("library", "All")) + " (" + o(K.value.length) + ")", 1),
            (p(!0), v(W, null, he(H.value, (ge, De) => (p(), v("option", {
              key: De,
              value: De
            }, o(ge) + " (" + o(V.value[De] || 0) + ")", 9, dO))), 128))
          ], 512), [
            [rt, P.value]
          ])
        ]),
        !ne.value.length && !c.value ? (p(), v("p", fO, o(u(w)("library", "No sample results here. Try another folder, page or result filter.")), 1)) : x("", !0),
        (p(!0), v(W, null, he(ne.value, (ge) => (p(), v("details", {
          key: ge.id,
          class: "library-inference-result"
        }, [
          l("summary", null, [
            l("span", pO, o(ge.path), 1),
            l("strong", null, o(H.value[ge.status]), 1)
          ]),
          $.value === "folders" ? (p(), Pe(hd, {
            key: 0,
            result: ge,
            labels: E.value,
            statuses: H.value
          }, null, 8, ["result", "labels", "statuses"])) : x("", !0),
          ge.changes.length ? (p(), v("div", hO, [
            l("table", null, [
              l("thead", null, [
                l("tr", null, [
                  l("th", null, o(u(w)("library", "Field")), 1),
                  l("th", null, o(u(w)("library", "Current value")), 1),
                  l("th", null, o(u(w)("library", "Proposed value")), 1),
                  l("th", null, o(u(w)("library", "Source text")), 1)
                ])
              ]),
              l("tbody", null, [
                (p(!0), v(W, null, he(ge.changes, (De) => (p(), v("tr", {
                  key: De.field
                }, [
                  l("th", null, o(E.value[De.field]), 1),
                  l("td", null, o(De.before || "—"), 1),
                  l("td", null, [
                    ae(o(De.value), 1),
                    l("small", null, o(H.value[De.status]), 1)
                  ]),
                  l("td", null, o(De.raw), 1)
                ]))), 128))
              ])
            ])
          ])) : ge.conflicts?.length ? x("", !0) : (p(), v("p", vO, o(u(w)("library", "Check separators, folder depth and field assignments. A unique interpretation is required.")), 1))
        ]))), 128)),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Sample pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: c.value || s.value === 1,
            onClick: Ie[11] || (Ie[11] = (ge) => Me(s.value - 1))
          }, o(u(w)("library", "Previous page")), 9, gO),
          l("span", null, o(s.value), 1),
          l("button", {
            class: "button secondary",
            disabled: c.value || !d.value,
            onClick: Ie[12] || (Ie[12] = (ge) => Me(s.value + 1))
          }, o(u(w)("library", "Next page")), 9, mO)
        ], 8, bO)
      ]),
      ve(gg, {
        class: "library-inference-step",
        results: K.value,
        labels: E.value,
        "request-token": e.requestToken,
        disabled: c.value || J.value,
        context: JSON.stringify({ mode: $.value, pattern: $.value === "pattern" ? L.value : void 0, rule: $.value === "guided" ? C.value : void 0, folderRules: $.value === "folders" ? A.value : void 0, rootId: m.value, folder: k.value }),
        onChanged: Ie[13] || (Ie[13] = (ge) => Me(s.value))
      }, null, 8, ["results", "labels", "request-token", "disabled", "context"]),
      ve(b$, {
        definition: { mode: $.value, pattern: L.value, rule: C.value, rootId: m.value, folder: k.value, recursive: a.value },
        labels: E.value,
        statuses: H.value,
        "request-token": e.requestToken,
        disabled: c.value || J.value || !m.value
      }, null, 8, ["definition", "labels", "statuses", "request-token", "disabled"])
    ], 8, S3));
  }
}, _O = ["aria-label", "title", "onClick"], wO = {
  key: 0,
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, kO = { id: "library-sidebar-filters-heading" }, SO = ["aria-label"], CO = ["value"], TO = ["name", "value"], AO = ["value"], EO = ["value"], xO = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, $O = ["title"], OO = ["placeholder"], NO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, IO = { value: "" }, RO = ["value"], LO = { class: "library-publisher-filter" }, PO = { for: "library-publisher-search" }, DO = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], FO = ["value"], MO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, UO = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, zO = ["id", "aria-selected"], jO = ["onClick"], BO = { class: "library-publication-filter" }, HO = { for: "library-publication-search" }, VO = ["placeholder", "aria-expanded"], qO = ["value"], KO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, GO = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, WO = ["onClick"], YO = { class: "library-year-filter" }, ZO = { for: "library-year-search" }, XO = ["placeholder", "aria-expanded"], JO = ["value"], QO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, e4 = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, t4 = ["onClick"], i4 = { class: "library-creator-filter" }, n4 = { for: "library-creator-search" }, a4 = ["placeholder", "title", "aria-expanded"], r4 = ["value"], s4 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, l4 = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, o4 = ["onClick"], u4 = { class: "library-tag-filter" }, c4 = { for: "library-tag-search" }, d4 = ["placeholder", "aria-expanded"], f4 = ["value"], p4 = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, h4 = ["onClick"], v4 = { value: "" }, b4 = ["value"], g4 = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, m4 = { value: "" }, y4 = ["value"], _4 = { class: "library-folder-filter" }, w4 = { for: "library-folder-search" }, k4 = ["placeholder", "title", "aria-expanded"], S4 = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, C4 = ["onClick"], T4 = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, A4 = { value: "" }, E4 = ["value"], x4 = { value: "" }, $4 = ["value"], O4 = { class: "library-subject-filter" }, N4 = { for: "library-subject-search" }, I4 = ["placeholder", "title", "aria-expanded"], R4 = ["value"], L4 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, P4 = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, D4 = ["onClick"], F4 = { class: "library-classification-filter" }, M4 = { for: "library-classification-search" }, U4 = ["placeholder", "title", "aria-expanded"], z4 = ["value"], j4 = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, B4 = ["onClick"], H4 = { value: "" }, V4 = { value: "1" }, q4 = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, K4 = {
  type: "submit",
  class: "button primary"
}, G4 = ["href"], W4 = ["lang", "dir"], Y4 = ["aria-label"], Z4 = ["href", "aria-label", "title", "onClick"], X4 = ["title"], J4 = ["href"], Q4 = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, eN = { class: "library-review-header" }, tN = { class: "library-muted library-catalogue-eyebrow" }, iN = { id: "library-review-heading" }, nN = ["aria-label"], aN = ["href", "aria-current", "onClick"], rN = ["aria-label"], sN = ["name", "value"], lN = {
  type: "submit",
  class: "button secondary"
}, oN = ["aria-busy"], uN = { key: 0 }, cN = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, dN = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, fN = { class: "library-metadata-review-workbench-copy" }, pN = { class: "library-muted library-catalogue-eyebrow" }, hN = ["title"], vN = {
  key: 0,
  class: "library-metadata-review-card"
}, bN = {
  class: "library-bidi-human",
  dir: "auto"
}, gN = { class: "library-muted" }, mN = {
  class: "library-bidi-machine",
  dir: "ltr"
}, yN = { class: "library-metadata-review-fields" }, _N = {
  class: "library-bidi-human",
  dir: "auto"
}, wN = {
  class: "library-bidi-human",
  dir: "auto"
}, kN = {
  class: "library-bidi-human",
  dir: "auto"
}, SN = {
  class: "library-bidi-machine",
  dir: "ltr"
}, CN = {
  class: "library-bidi-human",
  dir: "auto"
}, TN = {
  class: "library-bidi-human",
  dir: "auto"
}, AN = ["action"], EN = ["value"], xN = ["value"], $N = ["disabled", "title"], ON = { class: "library-metadata-review-actions" }, NN = ["href"], IN = ["href"], RN = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, LN = ["href"], PN = ["aria-label"], DN = ["onClick"], FN = {
  class: "library-bidi-human",
  dir: "auto"
}, MN = {
  key: 0,
  class: "library-muted"
}, UN = {
  class: "library-bidi-human",
  dir: "auto"
}, zN = {
  key: 1,
  class: "library-scan-error"
}, jN = {
  class: "library-bidi-human",
  dir: "auto"
}, BN = ["onClick"], HN = ["href", "onClick"], VN = ["aria-label"], qN = ["href"], KN = {
  key: 1,
  class: "library-muted"
}, GN = { key: 0 }, WN = ["href"], YN = {
  key: 3,
  class: "library-muted"
}, ZN = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, XN = { class: "library-home-header" }, JN = { class: "library-muted library-catalogue-eyebrow" }, QN = { id: "library-home-heading" }, eI = ["aria-label"], tI = ["aria-label"], iI = ["href", "aria-label", "onClick"], nI = ["title"], aI = { class: "library-empty-actions" }, rI = ["href"], sI = ["href"], lI = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, oI = { id: "library-continue-heading" }, uI = ["href"], cI = {
  key: 0,
  class: "library-home-card-row"
}, dI = ["aria-label", "onClick"], fI = { class: "library-cover-frame" }, pI = ["src"], hI = { class: "library-cover-summary" }, vI = ["onClick"], bI = { dir: "auto" }, gI = {
  key: 0,
  class: "library-cover-creator"
}, mI = { dir: "auto" }, yI = ["href", "onClick"], _I = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, wI = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, kI = { id: "library-recent-heading" }, SI = ["href"], CI = {
  key: 0,
  class: "library-home-card-row"
}, TI = ["aria-label", "onClick"], AI = { class: "library-cover-frame" }, EI = ["src"], xI = { class: "library-cover-summary" }, $I = ["onClick"], OI = { dir: "auto" }, NI = {
  key: 0,
  class: "library-cover-creator"
}, II = { dir: "auto" }, RI = ["href", "onClick"], LI = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, PI = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, DI = { id: "library-home-shelves-heading" }, FI = ["href"], MI = ["aria-label"], UI = ["href"], zI = { dir: "auto" }, jI = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, BI = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, HI = { id: "library-home-attention-heading" }, VI = { class: "library-muted" }, qI = ["href"], KI = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, GI = { class: "library-home-header" }, WI = { class: "library-muted library-catalogue-eyebrow" }, YI = { id: "library-shelves-landing-heading" }, ZI = ["aria-label"], XI = ["aria-label"], JI = ["href", "aria-label", "onClick"], QI = ["title"], eR = { class: "library-empty-actions" }, tR = ["href"], iR = ["href"], nR = ["aria-label"], aR = { class: "library-shelf-tree" }, rR = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, sR = { class: "library-muted" }, lR = { class: "library-empty-actions" }, oR = ["href"], uR = ["href"], cR = ["aria-busy"], dR = { class: "library-catalogue-header" }, fR = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, pR = ["aria-label"], hR = { class: "library-mobile-filter-count" }, vR = ["aria-label"], bR = ["value"], gR = ["name", "value"], mR = { class: "library-mobile-filter-group" }, yR = { class: "library-quick-filter-search" }, _R = ["placeholder"], wR = { value: "" }, kR = ["value"], SR = { class: "library-publisher-filter" }, CR = { for: "library-mobile-publisher-search" }, TR = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], AR = ["value"], ER = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, xR = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, $R = ["id", "aria-selected"], OR = ["onClick"], NR = { class: "library-publication-filter" }, IR = { for: "library-mobile-publication-search" }, RR = ["placeholder", "aria-expanded"], LR = ["value"], PR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, DR = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, FR = ["onClick"], MR = { class: "library-year-filter" }, UR = { for: "library-mobile-year-search" }, zR = ["placeholder", "aria-expanded"], jR = ["value"], BR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, HR = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, VR = ["onClick"], qR = { class: "library-creator-filter" }, KR = { for: "library-mobile-creator-search" }, GR = ["placeholder", "title", "aria-expanded"], WR = ["value"], YR = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, ZR = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, XR = ["onClick"], JR = { value: "" }, QR = ["value"], eL = { class: "library-subject-filter" }, tL = { for: "library-mobile-subject-search" }, iL = ["placeholder", "title", "aria-expanded"], nL = ["value"], aL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, rL = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, sL = ["onClick"], lL = { class: "library-classification-filter" }, oL = { for: "library-mobile-classification-search" }, uL = ["placeholder", "title", "aria-expanded"], cL = ["value"], dL = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, fL = ["onClick"], pL = { class: "library-mobile-filter-group" }, hL = { value: "" }, vL = ["value"], bL = { class: "library-folder-filter" }, gL = { for: "library-mobile-folder-search" }, mL = ["placeholder", "title", "aria-expanded"], yL = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, _L = ["onClick"], wL = { class: "library-mobile-filter-group" }, kL = { value: "" }, SL = ["value"], CL = { value: "" }, TL = ["value"], AL = { value: "" }, EL = { value: "1" }, xL = { class: "library-mobile-filter-group" }, $L = { class: "library-tag-filter" }, OL = { for: "library-tag-search" }, NL = ["placeholder", "aria-expanded"], IL = ["value"], RL = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, LL = ["onClick"], PL = { value: "title" }, DL = { value: "recent" }, FL = { value: "publicationDate" }, ML = { value: "publication" }, UL = { value: "lastOpened" }, zL = { value: "format" }, jL = { value: "compact" }, BL = { value: "list" }, HL = { class: "library-mobile-filter-actions" }, VL = ["href"], qL = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, KL = ["aria-label"], GL = { class: "library-catalogue-control-band" }, WL = {
  id: "library-collections",
  class: "library-saved-collections"
}, YL = ["title"], ZL = ["action", "title"], XL = ["value"], JL = ["value"], QL = { class: "library-control-label" }, eP = ["placeholder", "disabled"], tP = ["disabled", "title"], iP = ["aria-label"], nP = ["name", "value"], aP = {
  class: "library-sort-control",
  "data-library-control": "sort"
}, rP = { value: "title" }, sP = { value: "recent" }, lP = { value: "publicationDate" }, oP = { value: "publication" }, uP = { value: "lastOpened" }, cP = { value: "format" }, dP = ["aria-label"], fP = ["aria-pressed"], pP = ["aria-pressed"], hP = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, vP = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, bP = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, gP = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, mP = { key: 0 }, yP = { key: 1 }, _P = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, wP = { class: "library-muted library-catalogue-eyebrow" }, kP = ["title"], SP = ["aria-label"], CP = { key: 0 }, TP = { key: 1 }, AP = { key: 2 }, EP = ["aria-label"], xP = { key: 0 }, $P = { key: 1 }, OP = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, NP = { class: "library-muted library-catalogue-eyebrow" }, IP = ["title"], RP = ["aria-label"], LP = ["href"], PP = {
  key: 0,
  class: "library-notice"
}, DP = { class: "library-publication-issue-label" }, FP = ["href"], MP = { class: "library-muted" }, UP = {
  key: 1,
  class: "library-publication-unknown-issues"
}, zP = ["title"], jP = ["href"], BP = { class: "library-catalogue-status-row" }, HP = { class: "library-muted library-filter-result-summary" }, VP = ["aria-label"], qP = { class: "library-pagination-range" }, KP = { key: 0 }, GP = ["href"], WP = {
  key: 1,
  class: "library-muted"
}, YP = ["href"], ZP = {
  key: 3,
  class: "library-muted"
}, XP = ["title"], JP = { class: "library-empty-actions" }, QP = ["href"], e8 = { class: "library-muted" }, t8 = ["title"], i8 = { class: "library-empty-actions" }, n8 = ["href"], a8 = ["title"], r8 = ["aria-label"], s8 = ["href", "aria-label", "onClick"], l8 = ["title"], o8 = {
  key: 1,
  class: "library-muted"
}, u8 = { class: "library-empty-actions" }, c8 = ["href"], d8 = ["title"], f8 = { class: "library-empty-actions" }, p8 = ["href"], h8 = ["aria-label"], v8 = { class: "library-list-selection-actions" }, b8 = { class: "library-select-visible" }, g8 = ["checked"], m8 = ["title"], y8 = {
  key: 0,
  "aria-live": "polite"
}, _8 = ["aria-label"], w8 = { value: "" }, k8 = { value: "tag" }, S8 = { value: "untag" }, C8 = { value: "edit" }, T8 = { value: "covers" }, A8 = { value: "reset" }, E8 = ["action"], x8 = ["value"], $8 = ["placeholder"], O8 = ["title"], N8 = ["action"], I8 = ["value"], R8 = ["placeholder"], L8 = ["title"], P8 = ["action"], D8 = ["value"], F8 = ["name", "value"], M8 = ["title"], U8 = ["action"], z8 = ["value"], j8 = ["name", "value"], B8 = { name: "bulkEditField" }, H8 = { value: "publicationType" }, V8 = { value: "subtitle" }, q8 = { value: "creators" }, K8 = { value: "publication" }, G8 = { value: "series" }, W8 = { value: "seriesNumber" }, Y8 = { value: "genre" }, Z8 = { value: "publicationDate" }, X8 = { value: "language" }, J8 = { value: "publisher" }, Q8 = { value: "subjects" }, e5 = { value: "classifications" }, t5 = ["placeholder"], i5 = ["title"], n5 = ["action"], a5 = ["value"], r5 = ["name", "value"], s5 = ["title"], l5 = {
  key: 6,
  class: "library-duplicate-page-status",
  role: "status"
}, o5 = {
  key: 7,
  class: "library-catalogue-list-scroll",
  "data-library-catalogue-list-scroll": ""
}, u5 = {
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, c5 = { class: "hidden-visually" }, d5 = { class: "library-catalogue-list-selection" }, f5 = { class: "hidden-visually" }, p5 = { class: "library-catalogue-list-cover-heading" }, h5 = { class: "hidden-visually" }, v5 = { scope: "col" }, b5 = { scope: "col" }, g5 = { scope: "col" }, m5 = { scope: "col" }, y5 = { scope: "col" }, _5 = { scope: "col" }, w5 = { scope: "col" }, k5 = { class: "library-catalogue-list-selection" }, S5 = { class: "library-item-selection" }, C5 = ["checked", "aria-label", "onChange"], T5 = { class: "library-catalogue-list-cover-cell" }, A5 = ["aria-label", "onClick"], E5 = ["src"], x5 = {
  scope: "row",
  class: "library-catalogue-list-title-cell"
}, $5 = ["onClick"], O5 = {
  class: "library-bidi-human",
  dir: "auto"
}, N5 = ["href"], I5 = { class: "library-catalogue-list-creators" }, R5 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, L5 = ["aria-label"], P5 = ["datetime"], D5 = ["aria-label"], F5 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, M5 = ["aria-label"], U5 = ["dir"], z5 = ["aria-label"], j5 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, B5 = ["aria-label"], H5 = { class: "library-catalogue-list-actions" }, V5 = ["href", "onClick"], q5 = ["onClick"], K5 = { class: "library-item-selection" }, G5 = ["checked", "aria-label", "onChange"], W5 = ["aria-labelledby", "aria-expanded", "onClick"], Y5 = ["id"], Z5 = ["action", "onSubmit"], X5 = ["value"], J5 = ["value"], Q5 = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], eD = ["data-library-star-error"], tD = { class: "library-cover-summary" }, iD = { class: "library-cover-primary" }, nD = ["href"], aD = ["id"], rD = ["onClick"], sD = {
  class: "library-bidi-human",
  dir: "auto"
}, lD = {
  key: 1,
  class: "library-cover-creator"
}, oD = {
  class: "library-bidi-human",
  dir: "auto"
}, uD = {
  key: 2,
  class: "library-cover-context"
}, cD = {
  class: "library-bidi-human",
  dir: "auto"
}, dD = ["aria-label"], fD = { class: "library-pagination-range" }, pD = { key: 0 }, hD = ["href"], vD = {
  key: 1,
  class: "library-muted"
}, bD = ["href"], gD = {
  key: 3,
  class: "library-muted"
}, mD = { class: "library-sidebar-content" }, yD = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, _D = ["role"], wD = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, kD = { class: "library-sidebar-publication-header" }, SD = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, CD = ["src"], TD = { class: "library-sidebar-publication-summary" }, AD = { class: "library-muted library-catalogue-eyebrow" }, ED = {
  class: "library-bidi-human",
  dir: "auto"
}, xD = { key: 0 }, $D = {
  class: "library-bidi-machine",
  dir: "ltr"
}, OD = { class: "library-detail-drawer-actions" }, ND = ["href"], ID = ["aria-label"], RD = ["aria-current", "onClick"], LD = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, PD = { id: "library-sidebar-overview-heading" }, DD = {
  key: 0,
  class: "library-sidebar-description"
}, FD = {
  class: "library-bidi-human",
  dir: "auto"
}, MD = { class: "library-detail-drawer-facts" }, UD = { key: 0 }, zD = ["href", "title"], jD = {
  class: "library-bidi-human",
  dir: "auto"
}, BD = { key: 1 }, HD = ["href", "title"], VD = { key: 1 }, qD = { key: 2 }, KD = { key: 2 }, GD = ["href", "title"], WD = {
  class: "library-bidi-human",
  dir: "auto"
}, YD = { key: 3 }, ZD = { class: "library-detail-facet-list" }, XD = ["href", "title", "onClick"], JD = {
  class: "library-bidi-machine",
  dir: "ltr"
}, QD = { key: 4 }, eF = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, tF = { id: "library-sidebar-metadata-heading" }, iF = ["placeholder"], nF = ["onUpdate:modelValue", "aria-label", "placeholder"], aF = ["onUpdate:modelValue", "aria-label"], rF = ["onClick"], sF = {
  key: 0,
  role: "alert"
}, lF = {
  key: 1,
  role: "status"
}, oF = ["disabled"], uF = {
  key: 1,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, cF = { id: "library-sidebar-suggestions-heading" }, dF = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, fF = { id: "library-sidebar-activity-heading" }, pF = { class: "library-detail-drawer-facts" }, hF = { key: 0 }, vF = { key: 1 }, bF = { key: 2 }, gF = { class: "library-detail-drawer-file" }, mF = ["href"], yF = { dir: "ltr" }, _F = {
  key: 1,
  dir: "ltr"
}, wF = ["aria-label"], kF = ["href"], SF = { dir: "auto" }, CF = ["aria-label"], TF = ["disabled"], AF = ["disabled"], EF = 20, xF = "/apps/library", $F = 2147483647, OF = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = M_(w, () => `${ul()}:${lb()}`), i = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], a = Object.freeze([
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
    function s(_, b) {
      return Object.prototype.hasOwnProperty.call(r, _) && String(b ?? "").trim() === r[_];
    }
    function d(_) {
      const b = new URLSearchParams(_);
      for (const f of Object.keys(r)) {
        const F = [...new Set([...b.keys()].filter((Ee) => Ee === f || Ee.startsWith(`${f}[`)))], ue = F.reduce((Ee, je) => Ee + b.getAll(je).length, 0);
        if (ue > 1 || F.some((Ee) => Ee !== f)) {
          for (const Ee of F) b.delete(Ee);
          continue;
        }
        f !== "status" && ue === 1 && !s(f, b.get(f)) && b.delete(f);
      }
      return b;
    }
    function c(_) {
      return Object.keys(r).some((b) => _.getAll(b).length === 1 && s(b, _.get(b)));
    }
    function g(_) {
      return Object.fromEntries(Object.entries(_ || {}).filter(([b, f]) => b === "status" || !Object.prototype.hasOwnProperty.call(r, b) || s(b, f)));
    }
    const h = Object.freeze(["compact", "list"]);
    function y(_) {
      return h.includes(_) ? _ : "compact";
    }
    const m = /* @__PURE__ */ Ft({
      ...i.state,
      items: i.state.items || [],
      activeFilters: i.state.activeFilters || {},
      cataloguePagination: i.state.cataloguePagination || {}
    }), k = /* @__PURE__ */ Ft((m.items || []).map((_) => ({ ..._ }))), A = j(() => k), C = j(() => m.shelves || []), $ = j(() => m.formats || []), R = j(() => m.publicationTypes?.length ? m.publicationTypes : n), L = j(() => m.publications || []), P = j(() => m.publicationIssueContext || null), N = j(() => m.scanStatuses || []), pe = j(() => m.workflowStatuses || []), Q = j(() => m.cataloguePagination || {
      page: 1,
      limit: 100,
      total: A.value.length,
      visible: A.value.length,
      from: A.value.length > 0 ? 1 : 0,
      to: A.value.length,
      previousUrl: "",
      nextUrl: ""
    }), E = /* @__PURE__ */ Ft({
      q: m.activeFilters?.q || "",
      view: y(m.activeFilters?.view),
      type: m.activeFilters?.type || "",
      publisher: m.activeFilters?.publisher || "",
      publication: m.activeFilters?.publication || "",
      year: m.activeFilters?.year || "",
      language: m.activeFilters?.language || "",
      creator: m.activeFilters?.creator || "",
      format: m.activeFilters?.format || "",
      tag: m.activeFilters?.tag || "",
      shelf: m.activeFilters?.shelf || "",
      folder: m.activeFilters?.folder || "",
      status: m.activeFilters?.status || "",
      workflowStatus: m.activeFilters?.workflowStatus || "",
      subject: m.activeFilters?.subject || "",
      classification: m.activeFilters?.classification || "",
      scannerConflicts: m.activeFilters?.scannerConflicts || "",
      starred: m.activeFilters?.starred || "",
      recentlyOpened: m.activeFilters?.recentlyOpened || "",
      needsMetadata: m.activeFilters?.needsMetadata || "",
      coverReview: m.activeFilters?.coverReview || "",
      noCreator: m.activeFilters?.noCreator || "",
      noPublication: m.activeFilters?.noPublication || "",
      noDate: m.activeFilters?.noDate || "",
      titleFromFilename: m.activeFilters?.titleFromFilename || "",
      noDescription: m.activeFilters?.noDescription || "",
      unsupportedContainer: m.activeFilters?.unsupportedContainer || "",
      weakMetadata: m.activeFilters?.weakMetadata || "",
      unreviewedImports: m.activeFilters?.unreviewedImports || "",
      sort: m.activeFilters?.sort || "title"
    });
    for (const _ of Object.keys(r))
      _ !== "status" && (s(_, E[_]) || (E[_] = ""));
    const H = /* @__PURE__ */ G(E.publication), K = /* @__PURE__ */ G(E.q), Z = /* @__PURE__ */ G(!1), ne = /* @__PURE__ */ G(null), z = j(() => {
      const _ = H.value.trim().toLocaleLowerCase();
      return (_ !== "" && ne.value !== null ? ne.value : L.value).filter((f) => _ === "" || f.toLocaleLowerCase().includes(_)).slice(0, EF);
    });
    qe(() => E.publication, (_) => {
      H.value = _ || "";
    }), qe(() => E.q, (_) => {
      K.value = _ || "";
    });
    let q = null, I = null, V = 0;
    qe(H, (_) => {
      window.clearTimeout(q), I?.abort(), I = null, ne.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++V;
      q = window.setTimeout(() => {
        Wg(b, f);
      }, 200);
    });
    const J = /* @__PURE__ */ G(E.publisher), ie = /* @__PURE__ */ G(!1), Y = /* @__PURE__ */ G(null), fe = j(() => Y.value || []);
    qe(() => E.publisher, (_) => {
      J.value = _ || "";
    });
    let ke = null, Le = null, Oe = 0;
    qe(J, (_) => {
      window.clearTimeout(ke), Le?.abort(), Le = null, Y.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++Oe;
      ke = window.setTimeout(() => {
        Bg(b, f);
      }, 200);
    });
    const Me = /* @__PURE__ */ G(E.creator), Ze = /* @__PURE__ */ G(!1), ft = /* @__PURE__ */ G(null), ye = j(() => ft.value || []);
    qe(() => E.creator, (_) => {
      Me.value = _ || "";
    });
    let Ie = null, ge = null, De = 0;
    qe(Me, (_) => {
      window.clearTimeout(Ie), ge?.abort(), ge = null, ft.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++De;
      Ie = window.setTimeout(() => {
        jg(b, f);
      }, 200);
    });
    const ut = /* @__PURE__ */ G(E.folder), ee = /* @__PURE__ */ G(!1), S = /* @__PURE__ */ G(null), O = j(() => S.value || []);
    qe(() => E.folder, (_) => {
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
    const X = /* @__PURE__ */ G(E.subject), te = /* @__PURE__ */ G(!1), re = /* @__PURE__ */ G(null), de = j(() => re.value || []);
    qe(() => E.subject, (_) => {
      X.value = _ || "";
    });
    let se = null, xe = null, _e = 0;
    qe(X, (_) => {
      window.clearTimeout(se), xe?.abort(), xe = null, re.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++_e;
      se = window.setTimeout(() => {
        Hg(b, f);
      }, 200);
    });
    const Se = /* @__PURE__ */ G(E.classification), $e = /* @__PURE__ */ G(!1), He = /* @__PURE__ */ G(null), Ge = j(() => He.value || []);
    qe(() => E.classification, (_) => {
      Se.value = _ || "";
    });
    let Ve = null, it = null, ct = 0;
    qe(Se, (_) => {
      window.clearTimeout(Ve), it?.abort(), it = null, He.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++ct;
      Ve = window.setTimeout(() => {
        Vg(b, f);
      }, 200);
    });
    const yt = /* @__PURE__ */ G(E.tag), bt = /* @__PURE__ */ G(!1), ti = /* @__PURE__ */ G(null), hi = j(() => ti.value || []);
    qe(() => E.tag, (_) => {
      yt.value = _ || "";
    });
    let kt = null, xt = null, Di = 0;
    qe(yt, (_) => {
      window.clearTimeout(kt), xt?.abort(), xt = null, ti.value = null;
      const b = String(_ || "").trim();
      if (b.length < 2) return;
      const f = ++Di;
      kt = window.setTimeout(() => {
        qg(b, f);
      }, 200);
    });
    const Ht = /* @__PURE__ */ G(E.year), vi = /* @__PURE__ */ G(!1), Aa = /* @__PURE__ */ G(null), Gi = j(() => Aa.value || []);
    qe(() => E.year, (_) => {
      Ht.value = _ || "";
    });
    let Ea = null, Si = null, Wi = 0;
    qe(Ht, (_) => {
      window.clearTimeout(Ea), Si?.abort(), Si = null, Aa.value = null;
      const b = String(_ || "").trim();
      if (b.length < 2) return;
      const f = ++Wi;
      Ea = window.setTimeout(() => {
        Gg(b, f);
      }, 200);
    });
    const Yi = Object.fromEntries(Object.keys(E).map((_) => [_, _ === "sort" ? "title" : _ === "view" ? "compact" : ""])), Lr = window.location.pathname.indexOf(xF), cn = Lr >= 0 ? window.location.pathname.slice(0, Lr) : "", Bn = {
      catalogue: `${cn}/apps/library/`,
      review: `${cn}/apps/library/?scannerConflicts=1`,
      settings: `${cn}/settings/user/library`
    };
    function Hn(_, b) {
      if (typeof _ != "string" || _ === "") return b;
      try {
        const f = cn ? `${cn}/` : "/";
        let F = _;
        for (let ue = 0; ue < 5; ue += 1) {
          if (!F.startsWith("/") || F.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(F)) return b;
          const Ee = new URL(F, window.location.origin);
          if (Ee.origin !== window.location.origin || !Ee.pathname.startsWith(f)) return b;
          const je = F.split(/[?#]/, 1)[0];
          for (const mi of je.split("/")) {
            let Xi = mi;
            for (let br = 0; br < 5; br += 1) {
              const Ji = decodeURIComponent(Xi);
              if (/[\\/\u0000-\u001f\u007f]/.test(Ji) || Ji === "." || Ji === "..") return b;
              if (Ji === Xi) break;
              if (Xi = Ji, br === 4) return b;
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
    const Vn = j(() => Hn(m.settingsUrl, Bn.settings)), pt = j(() => Hn(m.catalogueRootUrl, Bn.catalogue)), or = j(() => Hn(m.homeUrl, `${Bn.catalogue}?home=1`)), bi = j(() => Hn(m.shelvesUrl, `${Bn.catalogue}?shelves=1`)), dn = j(() => Hn(m.reviewUrl || m.scannerConflictReviewUrl, Bn.review)), qn = j(() => Object.entries(r).some(([_, b]) => E[_] === b)), ur = j(() => a.reduce((_, b) => _ + Number(Hu.value[b.countKey] || 0), 0)), xa = j(() => m.surface === "home"), Kn = j(() => m.surface === "shelves"), fn = j(() => m.surface === "duplicates"), Gn = j(() => m.surface === "inference"), pn = j(() => m.surface === "lists"), Wn = j(() => `${pt.value}?lists=1`), $a = Number(new URLSearchParams(window.location.search).get("addToList")) || null, dl = /* @__PURE__ */ G([]), Fi = /* @__PURE__ */ G("");
    async function _t() {
      try {
        dl.value = (await ba()).lists;
      } catch {
      }
    }
    $t(_t);
    const Yn = j(() => !fn.value && !Gn.value && !pn.value && !xa.value && !Kn.value && !qn.value && !E.starred && E.recentlyOpened !== "1" && !E.shelf), Cu = j(() => [
      { key: "home", name: t("library", "Home"), href: or.value, active: xa.value },
      { key: "all", name: t("library", "All publications"), href: pt.value, active: Yn.value },
      { key: "starred", name: t("library", "Starred"), href: `${pt.value}?starred=1`, active: E.starred === "1" },
      { key: "continue", name: t("library", "Continue reading"), href: `${pt.value}?recentlyOpened=1&sort=lastOpened`, active: E.recentlyOpened === "1" },
      { key: "shelves", name: t("library", "Shelves"), href: bi.value, active: Kn.value || !!E.shelf },
      { key: "collections", name: t("library", "Collections"), href: `${pt.value}#library-collections`, active: !1 }
    ]), fl = j(() => Ra.value.map((_) => ({
      key: `collection-${_.id}`,
      rawName: _.name,
      id: _.id,
      name: _.countPending ? _.name : `${_.name} (${xi("library", "%n item", "%n items", Number(_.count || 0))})`,
      href: um(_.filters),
      active: cm(_.filters)
    }))), gt = j(() => m.requestToken || ""), cr = j(() => !!m.duplicateSuggestions), pl = j(() => JSON.stringify(A.value.map((_) => [_.id, _.title, _.creators, _.publicationDate]))), Tu = j(() => JSON.parse(pl.value).map((_) => Number(_[0]))), { results: hn, status: Au } = fg(Tu, cr, gt);
    function Zn(_, b) {
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
    const Ci = j(() => m.catalogueEndpointUrl || "/apps/library/catalogue"), hl = j(() => m.shelfChildrenUrl || "/apps/library/shelves/children"), Pr = j(() => m.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Xn = j(() => m.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), vl = j(() => m.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Dr = j(() => m.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Fr = j(() => m.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), Mr = j(() => m.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), Eu = j(() => m.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), bl = j(() => m.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), xu = j(() => m.itemSidebarUrlTemplate || `${cn}/apps/library/items/__ITEM_ID__/sidebar`), $u = j(() => m.batchTagUrl || "/apps/library/bulk/tags"), Ou = j(() => m.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Nu = j(() => m.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), gl = j(() => m.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Iu = j(() => m.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Ur = j(() => m.scannerConflictReviewUrl || "?scannerConflicts=1");
    m.importHealthSummary, m.importHealthSummary && Object.keys(m.importHealthSummary).length > 0;
    const Oa = j(() => m.discoveryPage === "publication"), Jn = j(() => m.discoveryPage === "year"), Na = j(() => m.discoveryPage === "creator"), dr = j(() => Oa.value || Jn.value || Na.value), Ia = j(() => m.discoveryTitle || E.publication || E.year || E.creator || ""), Zi = j(() => dr.value ? Ia.value : t("library", "Library")), Qn = j(() => Na.value ? t("library", "Creator") : Jn.value ? t("library", "Publication year") : t("library", "Publication / series")), ci = j(() => Number(m.rootCount || 0)), Ru = j(() => Number(m.enabledRootCount || 0)), ea = j(() => ci.value === 0), zr = j(() => ci.value > 0 && Ru.value === 0), jr = j(() => ze.value.length > 0), Vt = /* @__PURE__ */ G(!1), fr = /* @__PURE__ */ G(null), Br = /* @__PURE__ */ G(null), ml = {
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
    }, yl = {
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
    }, Lu = {
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
    }, _l = j(() => {
      if (typeof window > "u") return "";
      const _ = new URLSearchParams(window.location.search);
      if (_.get("batchMetadataApplyResult") !== "1") return "";
      const b = _.get("batchMetadataField") || "field", f = _.get("batchMetadataApplied") || "0", F = _.get("batchMetadataUnchanged") || "0", ue = _.get("batchMetadataSkipped") || "0";
      return t("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: b, unchanged: F, skipped: ue });
    }), Hr = j(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? t("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), pr = j(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? t("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Ra = j(() => m.savedCollections || []), Vr = j(() => m.savedCollectionSaveUrl || "/apps/library/collections"), ce = j(() => m.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), T = h, M = j(() => T.includes(E.view) ? E.view : "compact"), le = j(() => ({
      "library-cover-gallery--compact": M.value === "compact"
    }));
    function oe(_) {
      const b = String(_ || "").trim();
      if (b.length <= 32) return b;
      const f = b.split("/").filter(Boolean);
      return f.length > 0 ? `…/${f.at(-1)}` : b;
    }
    function Ne(_, b) {
      const f = String(b || "").trim();
      if (f === "" || yl[_] === f) return "";
      if (_ === "format") return f.toUpperCase();
      if (_ === "folder") return oe(f);
      const F = Lu[_]?.[f];
      return F ? t("library", F) : f;
    }
    function Fe(_, b) {
      const f = String(E[_] || "").trim(), F = Ne(_, f), ue = t("library", b);
      return {
        key: _,
        label: ue,
        value: f,
        displayValue: F,
        title: F ? `${ue}: ${f}` : ue
      };
    }
    const ze = j(() => Object.entries(ml).map(([_, b]) => Fe(_, b)).filter((_) => _.value !== "" && !(_.key === "sort" && _.value === "title") && !(_.key === "view" && _.value === "compact"))), at = j(() => ze.value.filter((_) => !["sort", "view"].includes(_.key))), ii = j(() => ze.value.length), Ot = j(() => {
      const _ = new URLSearchParams();
      for (const f of at.value) _.set(f.key, f.value);
      const b = _.toString();
      return `${pt.value}${b ? `?${b}` : ""}`;
    }), Ct = j(() => at.value[0] || null), ta = j(() => K.value.trim() !== String(E.q || "").trim()), qt = j(() => String(E.q || "").trim() !== "" || ta.value);
    function Kt(_) {
      return ({
        q: K,
        publisher: J,
        publication: H,
        creator: Me,
        subject: X,
        year: Ht,
        folder: ut,
        classification: Se,
        tag: yt
      }[_]?.value ?? "").trim() !== String(E[_] || "").trim();
    }
    function Mi(_) {
      return Kt(_) ? _ === "q" ? t("library", "Not applied yet — press Enter or Apply.") : t("library", "Press Enter or Apply to use this value.") : "";
    }
    function vn(_) {
      return { "library-filter-apply--pending": Kt(_) };
    }
    const yg = j(() => ii.value > 0 ? t("library", "Filters ({count})", { count: ii.value }) : t("library", "Filters")), _g = j(() => ii.value > 0 ? t("library", "Open filters panel; {count} active filters", { count: ii.value }) : t("library", "Open filters panel")), wg = j(() => xi("library", "Show %n item", "Show %n items", Number(Q.value.total || 0)));
    function kg(_) {
      Vt.value = _.currentTarget?.open === !0, Vt.value && Nt(() => {
        fr.value?.focus?.();
      });
    }
    const Sg = /* @__PURE__ */ new Set([
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
    ]), ef = j(() => Object.entries(g(E)).filter(([_, b]) => !Sg.has(_) && String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), Cg = j(() => Object.entries(E).filter(([_, b]) => !["q", "sort", "starred"].includes(_) && String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), wl = j(() => Object.entries(g(E)).filter(([_, b]) => String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), Tg = j(() => wl.value.filter(({ key: _, value: b }) => _ !== "q" && !(_ === "sort" && b === "title"))), kl = j(() => m.homeRows || { continueReading: [], recentlyAdded: [] }), tf = j(() => m.homeShelves || []), nf = j(() => m.shelfTree || []), Pu = j(() => m.needsAttention || { count: 0, url: `${pt.value}?needsMetadata=1` }), ni = /* @__PURE__ */ G([]), Sl = j(() => new Set(ni.value));
    function af(_, b) {
      const f = new Set(ni.value);
      b ? f.add(Number(_)) : f.delete(Number(_)), ni.value = [...f];
    }
    function Ag(_) {
      ni.value = _.currentTarget.checked ? A.value.map((b) => Number(b.id)) : [];
    }
    function Eg() {
      const _ = new Set(A.value.map((b) => Number(b.id)));
      ni.value = ni.value.filter((b) => _.has(b));
    }
    function xg(_) {
      const b = _.target;
      if (b instanceof HTMLFormElement) {
        b.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of ni.value) {
          const F = document.createElement("input");
          F.type = "hidden", F.name = "itemIds[]", F.value = String(f), F.dataset.librarySelectedId = "1", b.appendChild(F);
        }
      }
    }
    const Te = /* @__PURE__ */ G(null), La = /* @__PURE__ */ G(null), ai = /* @__PURE__ */ Ft({ loading: !1, error: "", missing: !1 }), Pa = /* @__PURE__ */ G("overview"), Ui = /* @__PURE__ */ Ft({ saving: !1, saved: !1, error: "" }), mt = /* @__PURE__ */ Ft({ title: "", publicationDate: "", series: "", seriesNumber: "", genre: "", identifiers: [] }), rf = /* @__PURE__ */ G(null), Da = /* @__PURE__ */ G(null), Fa = /* @__PURE__ */ G(!1);
    let Du = null, bn = null, Cl = null, Fu = !1, qr = null, Mu = 0;
    const ia = j(() => La.value !== null), Kr = j(() => Te.value ? A.value.findIndex((_) => _.id === Te.value.id) : -1), Tl = j(() => Kr.value > 0 ? A.value[Kr.value - 1] : null), Al = j(() => Kr.value >= 0 && Kr.value < A.value.length - 1 ? A.value[Kr.value + 1] : null), sf = j(() => Lg(Te.value?.description || "")), Ma = j(() => Ng(Te.value?.publicationDate || "")), lf = j(() => Ig(Te.value?.language || "")), $g = ["publicationType", "title", "subtitle", "creators", "publication", "series", "seriesNumber", "genre", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Og = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Gr(_) {
      const b = String(_ ?? "").trim(), f = b.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : b;
    }
    function Ng(_) {
      const f = Gr(_).match(/^(\d{4})/u);
      return f ? f[1] : "";
    }
    function Ig(_) {
      return String(_ ?? "").split(/[;,\n]+/u).map((b) => b.trim()).filter(Boolean);
    }
    function of(_, b) {
      const f = new URLSearchParams();
      for (const [F, ue] of Object.entries(E)) {
        const Ee = String(ue || "").trim();
        Ee !== "" && !(F === "sort" && Ee === "title") && !(F === "view" && Ee === "compact") && f.set(F, Ee);
      }
      return f.set(_, String(b || "").trim()), f.delete("page"), d(f);
    }
    function El(_, b) {
      const F = of(_, b).toString();
      return `${pt.value}${F ? `?${F}` : ""}`;
    }
    function xl(_, b, f) {
      const F = String(f || "").trim();
      if (F === "") return;
      _?.preventDefault?.();
      const ue = of(b, F);
      Yr({ historyMode: "none" }), Gt(null, {
        params: ue,
        generation: ++ri,
        historyMode: "push"
      });
    }
    function Rg(_) {
      return String(_ ?? "").replace(/&#x([0-9a-f]+);/giu, (b, f) => String.fromCodePoint(Number.parseInt(f, 16))).replace(/&#(\d+);/gu, (b, f) => String.fromCodePoint(Number.parseInt(f, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Lg(_) {
      let b = String(_ ?? "").trim();
      if (b === "") return "";
      for (let f = 0; f < 2; f += 1) {
        const F = Rg(b);
        if (F === b) break;
        b = F;
      }
      return b = b.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), b;
    }
    function uf(_) {
      return { ..._, publicationDate: Gr(_?.publicationDate) };
    }
    function cf(_) {
      for (const b of ["series", "seriesNumber", "genre"]) mt[b] = String(_?.[b] || "");
      mt.title = String(_?.title || ""), mt.publicationDate = Gr(_?.publicationDate), mt.identifiers = Array.isArray(_?.identifiers) ? _.identifiers.map((b) => ({ scheme: String(b?.scheme || ""), displayValue: String(b?.displayValue || b?.value || "") })) : [], Object.assign(Ui, { saving: !1, saved: !1, error: "" });
    }
    function Pg() {
      mt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Dg(_) {
      mt.identifiers.splice(_, 1);
    }
    async function Fg() {
      const _ = Te.value;
      if (!_?.updateUrl || Ui.saving) return;
      Object.assign(Ui, { saving: !0, saved: !1, error: "" });
      const b = new FormData();
      b.set("requesttoken", gt.value), b.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const F = _[f];
        b.set(f, Array.isArray(F) ? F.join(", ") : String(F ?? ""));
      }
      for (const f of ["series", "seriesNumber", "genre"]) b.set(f, mt[f]);
      b.set("title", mt.title), b.set("publicationDate", Gr(mt.publicationDate)), mt.identifiers.forEach((f, F) => {
        b.set(`identifiers[${F}][scheme]`, f.scheme), b.set(`identifiers[${F}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(_.updateUrl, { method: "POST", body: b, credentials: "same-origin", headers: { Accept: "application/json" } }), F = await f.json().catch(() => ({}));
        if (!f.ok || F.saved !== !0) throw new Error(F.error || t("library", "Metadata could not be saved."));
        for (const Ee of ["series", "seriesNumber", "genre"]) _[Ee] = mt[Ee].trim();
        _.title = mt.title.trim(), _.publicationDate = Gr(mt.publicationDate), _.identifiers = mt.identifiers.filter((Ee) => Ee.scheme.trim() || Ee.displayValue.trim()).map((Ee) => ({ ...Ee }));
        const ue = A.value.find((Ee) => Number(Ee.id) === Number(_.id));
        ue && (ue.title = _.title, ue.publicationDate = _.publicationDate), Ui.saved = !0;
      } catch (f) {
        Ui.error = f?.message || t("library", "Metadata could not be saved.");
      } finally {
        Ui.saving = !1;
      }
    }
    const na = j(() => {
      const _ = s("scannerConflicts", E.scannerConflicts) || s("weakMetadata", E.weakMetadata), b = _ ? A.value.find((f) => $l(f).length > 0) : null;
      return {
        enabled: _,
        item: b,
        fields: b ? $l(b) : [],
        reviewNextUrl: Ur.value,
        skipUrl: Q.value.nextUrl || Ur.value
      };
    }), Mg = j(() => a.map((_) => ({
      ..._,
      label: t("library", _.label),
      href: `${pt.value}?${encodeURIComponent(_.key)}=${encodeURIComponent(_.value)}`,
      active: String(E[_.key] || "") === _.value
    })));
    function Uu(_) {
      return Array.isArray(_) ? JSON.stringify(_) : _ == null ? "" : String(_);
    }
    function $l(_) {
      const b = _.fieldValues || {};
      let f = [];
      try {
        f = JSON.parse(b.rejectedFields || "[]");
      } catch {
      }
      Array.isArray(f) || (f = []);
      const F = _.fieldSources || {};
      return $g.filter((ue) => Object.prototype.hasOwnProperty.call(b, ue)).map((ue) => {
        const Ee = Uu(_[ue]), je = Uu(b[ue]), Qe = Uu(F[ue] || _.metadataSource || "scanner"), mi = Qe.includes("filename") || Qe.includes("path") ? je : "", Xi = Qe.includes("sidecar") ? je : "";
        return { field: ue, currentValue: Ee, scannerCandidate: je, pathTemplateCandidate: mi, sidecarValue: Xi, sourceProvenance: Qe, rejected: f.includes(ue), differs: Ee !== je };
      }).filter((ue) => ue.differs);
    }
    let Ua = 0, za = null;
    function df() {
      const _ = new URLSearchParams(window.location.search).getAll("item");
      if (_.length !== 1 || !/^[1-9][0-9]*$/.test(_[0])) return null;
      const b = Number(_[0]);
      return Number.isSafeInteger(b) && b <= $F ? b : null;
    }
    function ff(_, b = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), _ !== null && f.searchParams.set("item", String(_)), history[`${b}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Wr(_, { historyMode: b = "push", seed: f = null } = {}) {
      za?.abort();
      const F = ++Ua, ue = new AbortController();
      za = ue, La.value = _, Pa.value = "overview", Te.value = f && Number(f.id) === _ ? uf(f) : null, Te.value && cf(Te.value), Object.assign(ai, { loading: !0, error: "", missing: !1 }), b !== "none" && ff(_, b);
      try {
        const Ee = xu.value.replace("__ITEM_ID__", encodeURIComponent(String(_))), je = await fetch(Ee, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ue.signal });
        if (F !== Ua) return;
        if (!je.ok) {
          Te.value = null, ai.missing = je.status === 404, ai.error = je.status === 404 ? t("library", "This publication is unavailable or you do not have access.") : t("library", "Could not load publication details. Try again.");
          return;
        }
        const Qe = await je.json();
        if (F !== Ua) return;
        if (typeof Qe?.item?.id != "number" || !Number.isSafeInteger(Qe.item.id) || Qe.item.id !== _) {
          Te.value = null, ai.missing = !1, ai.error = t("library", "Could not load publication details. Try again.");
          return;
        }
        Te.value = uf(Qe.item), cf(Te.value), await Nt();
      } catch (Ee) {
        F === Ua && Ee?.name !== "AbortError" && (Te.value = null, ai.missing = !1, ai.error = t("library", "Could not load publication details. Try again."));
      } finally {
        F === Ua && (ai.loading = !1, za = null);
      }
    }
    function zi(_, b) {
      zu(), Du = b?.currentTarget instanceof HTMLElement ? b.currentTarget : null, Wr(Number(_.id), { seed: _ });
    }
    function Yr({ historyMode: _ = "push", restoreFocus: b = !0 } = {}) {
      Cl = b ? Du : null, Du = null, za?.abort(), za = null, Ua += 1, La.value = null, Te.value = null, Pa.value = "overview", Object.assign(ai, { loading: !1, error: "", missing: !1 }), _ !== "none" && ff(null, _);
    }
    function pf() {
      Fa.value ? (Da.value?.$refs?.sidebar || Da.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : rf.value?.focus();
    }
    function Ug() {
      const _ = Cl;
      if (Cl = null, zu(), Fu || !_?.isConnected) return;
      const b = Mu;
      qr = window.requestAnimationFrame(() => {
        qr = null, !(b !== Mu || Fu || ia.value || !_.isConnected) && _.focus();
      });
    }
    function zu() {
      Mu += 1, qr !== null && (window.cancelAnimationFrame(qr), qr = null);
    }
    function Zr(_ = bn) {
      Fa.value = !!_?.matches, ia.value && Nt(pf);
    }
    function Ol(_) {
      _ && Wr(Number(_.id), { seed: _ });
    }
    const Xr = /* @__PURE__ */ G(null);
    let ri = 0, hr = null, vr = null, Jr = null, hf = !1, Qr = null;
    const Lt = /* @__PURE__ */ Ft({ loading: !1, error: "", completed: !1 });
    function zg(_) {
      const b = d(new FormData(_));
      b.delete("publicationSearch"), b.delete("creatorSearch"), b.delete("subjectSearch"), b.delete("publisherSearch"), b.delete("classificationSearch"), b.delete("tagSearch"), b.delete("folderSearch"), b.delete("yearSearch");
      for (const f of Array.from(b.keys()))
        String(b.get(f) || "").trim() === "" && b.delete(f);
      return b.delete("page"), b.get("view") === "compact" && b.delete("view"), b.get("sort") === "title" && b.delete("sort"), b;
    }
    async function ja(_, b, f) {
      const F = new URLSearchParams();
      for (const [je, Qe] of Object.entries(E)) {
        const mi = String(Qe || "").trim();
        je !== _ && mi !== "" && !(je === "sort" && mi === "title") && !(je === "view" && mi === "compact") && F.set(je, mi);
      }
      F.set(`${_}Search`, b);
      const ue = new AbortController();
      _ === "creator" ? ge = ue : _ === "publisher" ? Le = ue : _ === "subject" ? xe = ue : _ === "classification" ? it = ue : _ === "tag" ? xt = ue : _ === "folder" ? B = ue : Si = ue;
      const Ee = _ === "creator" ? Xn.value : _ === "publisher" ? vl.value : _ === "subject" ? Dr.value : _ === "classification" ? Fr.value : _ === "tag" ? Mr.value : _ === "folder" ? Eu.value : bl.value;
      try {
        const je = await fetch(`${Ee}?${F}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ue.signal });
        if (!je.ok) throw new Error(`${_} suggestions request failed: ${je.status}`);
        const Qe = await je.json(), mi = _ === "creator" ? De : _ === "publisher" ? Oe : _ === "subject" ? _e : _ === "classification" ? ct : _ === "tag" ? Di : _ === "folder" ? U : Wi, Xi = _ === "creator" ? Me.value : _ === "publisher" ? J.value : _ === "subject" ? X.value : _ === "classification" ? Se.value : _ === "tag" ? yt.value : _ === "folder" ? ut.value : Ht.value;
        f === mi && Xi.trim() === b && (_ === "creator" ? ft.value = Array.isArray(Qe.creators) ? Qe.creators : [] : _ === "publisher" ? Y.value = Array.isArray(Qe.publishers) ? Qe.publishers : [] : _ === "subject" ? re.value = Array.isArray(Qe.subjects) ? Qe.subjects : [] : _ === "classification" ? He.value = Array.isArray(Qe.classifications) ? Qe.classifications : [] : _ === "tag" ? ti.value = Array.isArray(Qe.tags) ? Qe.tags : [] : _ === "folder" ? S.value = Array.isArray(Qe.folders) ? Qe.folders : [] : Aa.value = Array.isArray(Qe.years) ? Qe.years : []);
      } catch (je) {
        je?.name !== "AbortError" && (_ === "creator" && f === De && (ft.value = null), _ === "publisher" && f === Oe && (Y.value = null), _ === "subject" && f === _e && (re.value = null), _ === "classification" && f === ct && (He.value = null), _ === "tag" && f === Di && (ti.value = null), _ === "folder" && f === U && (S.value = null), _ === "year" && f === Wi && (Aa.value = null));
      }
    }
    function jg(_, b) {
      return ja("creator", _, b);
    }
    function Bg(_, b) {
      return ja("publisher", _, b);
    }
    function Hg(_, b) {
      return ja("subject", _, b);
    }
    function Vg(_, b) {
      return ja("classification", _, b);
    }
    function qg(_, b) {
      return ja("tag", _, b);
    }
    function Kg(_, b) {
      return ja("folder", _, b);
    }
    function Gg(_, b) {
      return ja("year", _, b);
    }
    async function Wg(_, b) {
      const f = new URLSearchParams();
      for (const [ue, Ee] of Object.entries(E)) {
        const je = String(Ee || "").trim();
        ue !== "publication" && je !== "" && !(ue === "sort" && je === "title") && !(ue === "view" && je === "compact") && f.set(ue, je);
      }
      f.set("publicationSearch", _);
      const F = new AbortController();
      I = F;
      try {
        const ue = await fetch(`${Pr.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!ue.ok) throw new Error(`Publication suggestions request failed: ${ue.status}`);
        const Ee = await ue.json();
        b === V && H.value.trim() === _ && (ne.value = Array.isArray(Ee.publications) ? Ee.publications : []);
      } catch (ue) {
        ue?.name !== "AbortError" && b === V && (ne.value = null);
      } finally {
        b === V && (I = null);
      }
    }
    function Yg(_) {
      k.splice(0, k.length, ...(_.items || []).map((f) => ({ ...f }))), Eg();
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
        !b.has(f) && Object.prototype.hasOwnProperty.call(_, f) && (m[f] = _[f]);
      Object.assign(E, Yi, _.activeFilters || {}), E.view = y(E.view);
    }
    async function Zg() {
      if (m.surface !== "index") return;
      const _ = ri, b = JSON.stringify({ ...E }), f = new URLSearchParams();
      f.set("hydrate", "1");
      for (const [ue, Ee] of Object.entries(E)) {
        const je = String(Ee || "").trim();
        je !== "" && !(ue === "sort" && je === "title") && !(ue === "view" && je === "compact") && f.set(ue, je);
      }
      const F = new AbortController();
      vr = F;
      try {
        const ue = await fetch(`${Ci.value}${f.size ? `?${f}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!ue.ok) return;
        const Ee = await ue.json();
        if (_ !== ri || b !== JSON.stringify({ ...E })) return;
        for (const je of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Ee, je) && (m[je] = Ee[je]);
      } catch (ue) {
        if (ue?.name !== "AbortError") return;
      } finally {
        vr === F && (vr = null), F.signal.aborted || vf();
      }
    }
    async function vf() {
      if (!qn.value || hf || Jr) return;
      const _ = new AbortController();
      Jr = _;
      try {
        const b = await fetch(`${Ci.value}?hydrate=counts`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: _.signal });
        if (!b.ok || _.signal.aborted) return;
        const f = await b.json();
        f.smartViewCounts && (m.smartViewCounts = f.smartViewCounts), f.smartViewCountsPending && (m.smartViewCountsPending = f.smartViewCountsPending), hf = !0;
      } catch {
      } finally {
        Jr === _ && (Jr = null);
      }
    }
    function Xg() {
      vr?.abort(), vr = null;
    }
    async function Gt(_, b = null) {
      const f = _?.currentTarget?.tagName === "FORM" ? _.currentTarget : _?.currentTarget?.form;
      if (!f && !b?.params) return;
      const F = d(b?.params ?? zg(f));
      if (xa.value || Kn.value) {
        es(F, pt.value);
        return;
      }
      const ue = F.toString(), Ee = ue ? `?${ue}` : "", je = b?.generation ?? ++ri, Qe = c(F), mi = b?.historyMode ?? (Qe ? "push" : "replace"), Xi = b?.historyTraversal === !0;
      if (je !== ri) return;
      Xg(), b === null && hr?.abort();
      const br = new AbortController();
      hr = br, Lt.loading = !0, Lt.error = "", Lt.completed = !1;
      try {
        const Ji = await fetch(Ci.value + Ee, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: br.signal
        });
        if (je !== ri) return;
        if (!Ji.ok) {
          Xi ? es(F) : Qe ? Lt.error = t("library", "Could not load this review queue. Try again.") : es(F);
          return;
        }
        const gm = await Ji.json();
        if (je !== ri) return;
        Yg(gm), vf(), Lt.completed = !0, mi !== "none" && (history[mi === "push" ? "pushState" : "replaceState"]({}, "", ue ? `?${ue}` : window.location.pathname), ia.value && Yr({ historyMode: "none" }));
      } catch (Ji) {
        je === ri && Ji?.name !== "AbortError" && (Xi ? es(F) : Qe ? Lt.error = t("library", "Could not load this review queue. Try again.") : es(F));
      } finally {
        je === ri && (hr = null, Lt.loading = !1);
      }
    }
    function bf() {
      hr?.abort();
      const _ = new URLSearchParams(window.location.search), b = df();
      _.has("item") && b === null && (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)), b === null ? Yr({ historyMode: "none" }) : Wr(b, { historyMode: "none", seed: A.value.find((f) => Number(f.id) === b) || null }), _.delete("item"), Gt(null, {
        params: d(_),
        generation: ++ri,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function es(_, b = window.location.pathname) {
      const f = document.createElement("form");
      f.method = "get", f.action = b, f.hidden = !0;
      for (const [F, ue] of _.entries()) {
        const Ee = document.createElement("input");
        Ee.type = "hidden", Ee.name = F, Ee.value = ue, f.appendChild(Ee);
      }
      document.body.appendChild(f), f.submit(), f.remove();
    }
    function gi(_, b = null, f = null) {
      if (b === null) {
        Gt(_);
        return;
      }
      Gt({ currentTarget: _ }, { params: b, generation: f });
    }
    async function Jg(_, b = H.value) {
      E.publication = String(b || "").trim(), H.value = E.publication, Z.value = !1, await Nt(), Gt({ currentTarget: _ });
    }
    function gf(_, b) {
      Jg(b.currentTarget.form, _);
    }
    async function Qg(_) {
      E.q = String(K.value || "").trim(), E.publication = String(H.value || "").trim(), E.publisher = String(J.value || "").trim(), E.creator = String(Me.value || "").trim(), E.subject = String(X.value || "").trim(), E.folder = String(ut.value || "").trim(), E.year = String(Ht.value || "").trim(), Z.value = !1, ie.value = !1, Ze.value = !1, te.value = !1, ee.value = !1, vi.value = !1, await Nt(), Gt({ currentTarget: _ });
    }
    async function aa(_, b, f) {
      E[b] = String(f || "").trim(), b === "creator" ? (Me.value = E.creator, Ze.value = !1) : b === "publisher" ? (J.value = E.publisher, ie.value = !1) : b === "subject" ? (X.value = E.subject, te.value = !1) : b === "folder" ? (ut.value = E.folder, ee.value = !1) : b === "classification" ? (Se.value = E.classification, $e.value = !1) : b === "tag" ? (yt.value = E.tag, bt.value = !1) : (Ht.value = E.year, vi.value = !1), gn[b] = -1, await Nt(), Gt({ currentTarget: _ });
    }
    function mf(_) {
      Qg(_.currentTarget);
    }
    function yf(_, b) {
      aa(b.currentTarget.form, "creator", _);
    }
    function _f(_, b) {
      aa(b.currentTarget.form, "publisher", _);
    }
    function wf(_, b) {
      aa(b.currentTarget.form, "classification", _);
    }
    function kf(_, b) {
      aa(b.currentTarget.form, "tag", _);
    }
    function Sf(_, b) {
      aa(b.currentTarget.form, "folder", _);
    }
    function Cf(_, b = X.value) {
      window.clearTimeout(se), xe?.abort(), xe = null, aa(_, "subject", b);
    }
    function em(_) {
      Cf(_.currentTarget.form);
    }
    function Tf(_, b) {
      Cf(b.currentTarget.form, _);
    }
    function Af(_, b) {
      aa(b.currentTarget.form, "year", _);
    }
    const gn = /* @__PURE__ */ Ft({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function tm(_) {
      return fe.value;
    }
    function ju(_, b, f) {
      return `library-${_}-${b}-suggestion-${f}`;
    }
    function Ef(_, b) {
      const f = gn[b];
      return f >= 0 ? ju(_, b, f) : void 0;
    }
    function Bu(_, b) {
      ie.value = b, b || (gn[_] = -1);
    }
    function xf(_) {
      gn[_] = -1, Bu(_, !0);
    }
    function im(_, b, f) {
      aa(f, _, b);
    }
    function $f(_, b) {
      const f = tm();
      if (_.key === "Escape") {
        Bu(b, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(_.key) || f.length === 0) return;
      if (_.key === "Enter") {
        const Ee = gn[b];
        if (Ee < 0) return;
        _.preventDefault(), im(b, f[Ee], _.currentTarget.form);
        return;
      }
      _.preventDefault(), Bu(b, !0);
      const F = gn[b], ue = _.key === "ArrowDown" ? 1 : -1;
      gn[b] = F < 0 ? ue > 0 ? 0 : f.length - 1 : (F + ue + f.length) % f.length;
    }
    function Of(_) {
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(E)) {
        const ue = String(F || "").trim();
        ue !== "" && f !== _ && !(f === "sort" && ue === "title") && !(f === "view" && ue === "compact") && b.set(f, ue);
      }
      return b;
    }
    function ts(_) {
      const b = Of(_).toString();
      return `${pt.value}${b ? `?${b}` : ""}`;
    }
    function is(_) {
      const b = Of(_);
      E[_] = _ === "sort" ? "title" : _ === "view" ? "compact" : "", Gt(null, {
        params: b,
        generation: ++ri
      });
    }
    function Nf() {
      const _ = new URLSearchParams();
      return E.sort && E.sort !== "title" && _.set("sort", E.sort), E.view && E.view !== "compact" && _.set("view", E.view), _;
    }
    function Nl() {
      const _ = Nf().toString();
      return `${pt.value}${_ ? `?${_}` : ""}`;
    }
    function Il() {
      const _ = Nf();
      for (const b of Object.keys(E))
        ["sort", "view"].includes(b) || (E[b] = Yi[b]);
      Gt(null, {
        params: _,
        generation: ++ri
      }), !xa.value && !Kn.value && Nt(() => {
        Br.value?.focus?.();
      });
    }
    function nm(_) {
      const b = new URL(_.href, window.location.origin).searchParams;
      Gt(null, {
        params: b,
        generation: ++ri
      });
    }
    function am() {
      return ts("q");
    }
    const Hu = j(() => m.smartViewCounts || {}), rm = j(() => new Set(m.smartViewCountsPending || []));
    function sm(_) {
      return rm.value.has(_) || !Object.prototype.hasOwnProperty.call(Hu.value, _) ? "—" : Number(Hu.value[_] || 0);
    }
    const If = j(() => {
      const _ = {};
      for (const [b, f] of Object.entries(E)) {
        const F = String(f || "").trim();
        F !== "" && !(b === "sort" && F === "title") && (_[b] = F);
      }
      return _;
    }), lm = j(() => JSON.stringify(If.value)), Vu = j(() => Object.keys(If.value).length > 0);
    function Rf(_) {
      if (!T.includes(_)) return;
      E.view = _;
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(g(E))) {
        const ue = String(F || "").trim();
        ue !== "" && !(f === "sort" && ue === "title") && !(f === "view" && ue === "compact") && b.set(f, ue);
      }
      b.delete("page"), Gt(null, {
        params: b,
        generation: ++ri
      });
    }
    function om(_) {
      const b = d(window.location.search);
      for (const F of Object.keys(ml))
        b.delete(F);
      b.delete("page");
      for (const [F, ue] of Object.entries(_)) {
        const Ee = F === "view" ? y(ue) : String(ue || "").trim();
        Ee !== "" && !(F === "view" && Ee === "compact") && b.set(F, Ee);
      }
      const f = b.toString();
      return f ? `?${f}` : "?";
    }
    function um(_) {
      return om(_ || {});
    }
    function cm(_) {
      const f = Object.entries(_ && typeof _ == "object" ? _ : {}).filter(([, F]) => String(F ?? "").trim() !== "");
      return f.length === 0 ? !1 : f.every(([F, ue]) => String(E[F] ?? "") === String(ue ?? ""));
    }
    function dm(_) {
      return ce.value.replace("__COLLECTION_ID__", encodeURIComponent(String(_ || "0")));
    }
    function fm(_) {
      if (!gt.value) return;
      const b = document.createElement("form");
      b.method = "post", b.action = dm(_), b.className = "library-navigation-saved-collection-delete-form";
      const f = document.createElement("input");
      f.type = "hidden", f.name = "requesttoken", f.value = gt.value, b.appendChild(f), document.body.appendChild(b), b.submit();
    }
    function Rl(_) {
      return String(_ || "").toUpperCase();
    }
    function pm(_) {
      return m.creatorLandingUrls?.[_] || `/apps/library/creators/${encodeURIComponent(_)}`;
    }
    function Lf(_) {
      const b = String(_?.publication || "").trim(), f = String(_?.publicationDate || "").trim();
      return b && f ? `${b} · ${f}` : b || f;
    }
    function Pf(_) {
      const b = String(_?.tagName || "").toLowerCase();
      return _?.isContentEditable || ["input", "select", "textarea", "button"].includes(b);
    }
    function hm(_) {
      _.key !== "/" || _.metaKey || _.ctrlKey || _.altKey || _.shiftKey || Pf(_.target) || (_.preventDefault(), Xr.value?.focus(), Xr.value?.select?.());
    }
    async function vm(_) {
      _.key !== "Escape" || document.activeElement !== Xr.value || E.q === "" || (_.preventDefault(), K.value = "", E.q = "", await Nt(), gi({ currentTarget: Xr.value }));
    }
    function bm(_) {
      if (!ia.value || _.metaKey || _.ctrlKey || _.altKey)
        return !1;
      if (_.key === "Escape")
        return _.preventDefault(), Yr(), !0;
      if (_.key === "Tab" && Fa.value) {
        if (Da.value?.focusTrap) return !1;
        const b = Da.value?.$refs?.sidebar || Da.value?.$el || Da.value, f = [...b?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ee) => !Ee.hidden && Ee.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const F = f[0], ue = f[f.length - 1];
        if (_.shiftKey && (document.activeElement === F || !b.contains(document.activeElement)))
          return _.preventDefault(), ue.focus(), !0;
        if (!_.shiftKey && (document.activeElement === ue || !b.contains(document.activeElement)))
          return _.preventDefault(), F.focus(), !0;
      }
      return Pf(_.target) ? !1 : _.key === "ArrowLeft" && Tl.value ? (_.preventDefault(), Ol(Tl.value), !0) : _.key === "ArrowRight" && Al.value ? (_.preventDefault(), Ol(Al.value), !0) : !1;
    }
    function Df(_) {
      document.querySelector("dialog[open]") || bm(_) || (hm(_), vm(_));
    }
    $t(() => {
      if (pn.value || Gn.value || fn.value) return;
      window.addEventListener("keydown", Df), window.addEventListener("popstate", bf), bn = window.matchMedia?.("(max-width: 1023px)") || null, Zr(), bn?.addEventListener ? bn.addEventListener("change", Zr) : bn?.addListener?.(Zr);
      const _ = new URLSearchParams(window.location.search), b = df();
      _.has("item") && b === null ? (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)) : b !== null && Wr(b, { historyMode: "none", seed: A.value.find((f) => Number(f.id) === b) || null }), Qr = window.requestAnimationFrame(() => {
        Qr = null, Zg();
      });
    }), ki(() => {
      Fu = !0, zu(), window.removeEventListener("keydown", Df), window.removeEventListener("popstate", bf), window.clearTimeout(q), window.clearTimeout(Ie), window.clearTimeout(se), window.clearTimeout(Ea), I?.abort(), ge?.abort(), xe?.abort(), Si?.abort(), ri += 1, Qr !== null && window.cancelAnimationFrame(Qr), Qr = null, vr?.abort(), Jr?.abort(), hr?.abort(), hr = null, Ua += 1, za?.abort(), za = null, bn?.removeEventListener ? bn.removeEventListener("change", Zr) : bn?.removeListener?.(Zr), bn = null, Cl = null;
    });
    const ns = /* @__PURE__ */ Ft({}), as = /* @__PURE__ */ Ft({});
    async function Ff(_, b) {
      const f = b?.currentTarget?.closest?.("form") || b?.currentTarget;
      if (!f || !_?.starUrl || ns[_.id]) return;
      const F = !!_.starred;
      ns[_.id] = !0, as[_.id] = "", _.starred = !F;
      try {
        (await fetch(_.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (_.starred = F, as[_.id] = t("library", "Could not update star. Try again."));
      } catch {
        _.starred = F, as[_.id] = t("library", "Could not update star. Try again.");
      } finally {
        ns[_.id] = !1;
      }
    }
    return (_, b) => (p(), Pe(u(sT), { "app-name": "library" }, {
      default: we(() => [
        ve(u(jw), {
          "aria-label": u(t)("library", "Library navigation")
        }, {
          list: we(() => [
            ve(u(Nb), null, {
              default: we(() => [
                (p(!0), v(W, null, he(Cu.value, (f) => (p(), Pe(u(la), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (p(!0), v(W, null, he(fl.value, (f) => (p(), v("div", {
                  key: f.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  ve(u(la), {
                    class: "library-navigation-saved-collection",
                    active: f.active,
                    href: f.href,
                    name: f.name
                  }, null, 8, ["active", "href", "name"]),
                  l("button", {
                    type: "button",
                    class: "library-navigation-saved-collection-delete-action",
                    style: { background: "rgba(255,255,255,.22)", border: "1px solid rgba(255,255,255,.42)", color: "#fff" },
                    "aria-label": `${u(t)("library", "Delete collection")}: ${f.rawName}`,
                    title: `${u(t)("library", "Delete collection")}: ${f.rawName}`,
                    onClick: Ae((F) => fm(f.id), ["stop", "prevent"])
                  }, "✕", 8, _O)
                ]))), 128)),
                ve(u(la), {
                  active: pn.value,
                  href: Wn.value,
                  name: u(t)("library", "Lists")
                }, null, 8, ["active", "href", "name"]),
                ve(u(la), {
                  class: "library-navigation-create-list",
                  href: `${Wn.value}&new=1`,
                  name: u(t)("library", "Create a new list")
                }, null, 8, ["href", "name"]),
                (p(!0), v(W, null, he(dl.value, (f) => (p(), Pe(u(la), {
                  key: `personal-list-${f.id}`,
                  class: "library-navigation-personal-list",
                  href: `${Wn.value}&listId=${f.id}`,
                  name: f.name
                }, null, 8, ["href", "name"]))), 128)),
                ve(u(la), {
                  active: Gn.value,
                  href: `${pt.value}?infer=1`,
                  name: u(t)("library", "Extract metadata")
                }, null, 8, ["active", "href", "name"]),
                ve(u(la), {
                  active: qn.value,
                  href: dn.value,
                  name: ur.value > 0 ? `${u(t)("library", "Review")} (${ur.value})` : u(t)("library", "Review")
                }, null, 8, ["active", "href", "name"]),
                ve(u(la), {
                  class: "library-navigation-personal-list",
                  active: fn.value,
                  href: `${pt.value}?duplicates=1`,
                  name: u(t)("library", "Possible duplicates")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: we(() => [
            !pn.value && !Gn.value && !fn.value ? (p(), v("section", wO, [
              l("h2", kO, o(u(t)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": u(t)("library", "Catalogue search and filters"),
                onSubmit: Ae(mf, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: E.folder
                }, null, 8, CO),
                (p(!0), v(W, null, he(ef.value, (f) => (p(), v("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, TO))), 128)),
                E.sort && E.sort !== "title" ? (p(), v("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: E.sort
                }, null, 8, AO)) : x("", !0),
                E.view && E.view !== "compact" ? (p(), v("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: E.view
                }, null, 8, EO)) : x("", !0),
                l("fieldset", xO, [
                  l("legend", null, o(u(t)("library", "Content")), 1),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: u(t)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      ae(o(u(t)("library", "Search")) + " ", 1),
                      b[112] || (b[112] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    me(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Xr,
                      "onUpdate:modelValue": b[0] || (b[0] = (f) => K.value = f),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: u(t)("library", "Title, creator, description, filename or folder")
                    }, null, 8, OO), [
                      [We, K.value]
                    ]),
                    Kt("q") ? (p(), v("small", NO, o(Mi("q")), 1)) : x("", !0)
                  ], 8, $O),
                  l("label", null, [
                    ae(o(u(t)("library", "Type")), 1),
                    me(l("select", {
                      "onUpdate:modelValue": b[1] || (b[1] = (f) => E.type = f),
                      name: "type",
                      onChange: b[2] || (b[2] = (f) => gi(f))
                    }, [
                      l("option", IO, o(u(t)("library", "All types")), 1),
                      (p(!0), v(W, null, he(R.value, (f) => (p(), v("option", {
                        key: f,
                        value: f
                      }, o(f), 9, RO))), 128))
                    ], 544), [
                      [rt, E.type]
                    ])
                  ]),
                  l("div", LO, [
                    l("label", PO, o(u(t)("library", "Publisher")), 1),
                    me(l("input", {
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
                      "aria-activedescendant": Ef("desktop", "publisher"),
                      "aria-expanded": ie.value && fe.value.length > 0 ? "true" : "false",
                      onFocus: b[4] || (b[4] = (f) => xf("publisher")),
                      onKeydown: b[5] || (b[5] = (f) => $f(f, "publisher"))
                    }, null, 40, DO), [
                      [We, J.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: E.publisher
                    }, null, 8, FO),
                    Kt("publisher") ? (p(), v("small", MO, o(Mi("publisher")), 1)) : x("", !0),
                    ie.value && fe.value.length > 0 ? (p(), v("ul", UO, [
                      (p(!0), v(W, null, he(fe.value, (f, F) => (p(), v("li", {
                        id: ju("desktop", "publisher", F),
                        key: f,
                        role: "option",
                        "aria-selected": gn.publisher === F ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: b[6] || (b[6] = Ae(() => {
                          }, ["prevent"])),
                          onClick: (ue) => _f(f, ue)
                        }, o(f), 41, jO)
                      ], 8, zO))), 128))
                    ])) : x("", !0),
                    l("button", {
                      type: "submit",
                      class: Ce(["button secondary library-publisher-apply", vn("publisher")])
                    }, o(u(t)("library", "Apply publisher")), 3)
                  ]),
                  l("div", BO, [
                    l("label", HO, o(u(t)("library", "Series / periodical")), 1),
                    me(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": b[7] || (b[7] = (f) => H.value = f),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Z.value && z.value.length > 0 ? "true" : "false",
                      onFocus: b[8] || (b[8] = (f) => Z.value = !0),
                      onKeydown: b[9] || (b[9] = dt((f) => Z.value = !1, ["escape"]))
                    }, null, 40, VO), [
                      [We, H.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: E.publication
                    }, null, 8, qO),
                    Kt("publication") ? (p(), v("small", KO, o(Mi("publication")), 1)) : x("", !0),
                    Z.value && z.value.length > 0 ? (p(), v("ul", GO, [
                      (p(!0), v(W, null, he(z.value, (f) => (p(), v("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: b[10] || (b[10] = Ae(() => {
                          }, ["prevent"])),
                          onClick: (F) => gf(f, F)
                        }, o(f), 41, WO)
                      ]))), 128))
                    ])) : x("", !0),
                    l("button", {
                      type: "submit",
                      class: Ce(["button secondary library-publication-apply", vn("publication")])
                    }, o(u(t)("library", "Apply series")), 3)
                  ]),
                  l("div", YO, [
                    l("label", ZO, o(u(t)("library", "Publication year")), 1),
                    me(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": b[11] || (b[11] = (f) => Ht.value = f),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": vi.value && Gi.value.length > 0 ? "true" : "false",
                      onFocus: b[12] || (b[12] = (f) => vi.value = !0),
                      onKeydown: b[13] || (b[13] = dt((f) => vi.value = !1, ["escape"]))
                    }, null, 40, XO), [
                      [We, Ht.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: E.year
                    }, null, 8, JO),
                    Kt("year") ? (p(), v("small", QO, o(Mi("year")), 1)) : x("", !0),
                    vi.value && Gi.value.length > 0 ? (p(), v("ul", e4, [
                      (p(!0), v(W, null, he(Gi.value, (f) => (p(), v("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: b[14] || (b[14] = Ae(() => {
                          }, ["prevent"])),
                          onClick: (F) => Af(f, F)
                        }, o(f), 41, t4)
                      ]))), 128))
                    ])) : x("", !0),
                    l("button", {
                      type: "submit",
                      class: Ce(["button secondary library-year-apply", vn("year")])
                    }, o(u(t)("library", "Apply year")), 3)
                  ]),
                  l("div", i4, [
                    l("label", n4, o(u(t)("library", "Creator")), 1),
                    me(l("input", {
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
                      "aria-expanded": Ze.value && ye.value.length > 0 ? "true" : "false",
                      onFocus: b[16] || (b[16] = (f) => Ze.value = !0),
                      onKeydown: b[17] || (b[17] = dt((f) => Ze.value = !1, ["escape"]))
                    }, null, 40, a4), [
                      [We, Me.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: E.creator
                    }, null, 8, r4),
                    Kt("creator") ? (p(), v("small", s4, o(Mi("creator")), 1)) : x("", !0),
                    Ze.value && ye.value.length > 0 ? (p(), v("ul", l4, [
                      (p(!0), v(W, null, he(ye.value, (f) => (p(), v("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: b[18] || (b[18] = Ae(() => {
                          }, ["prevent"])),
                          onClick: (F) => yf(f, F)
                        }, o(f), 41, o4)
                      ]))), 128))
                    ])) : x("", !0),
                    l("button", {
                      type: "submit",
                      class: Ce(["button secondary library-creator-apply", vn("creator")])
                    }, o(u(t)("library", "Apply creator")), 3)
                  ]),
                  l("div", u4, [
                    l("label", c4, o(u(t)("library", "Nextcloud tag")), 1),
                    me(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": b[19] || (b[19] = (f) => yt.value = f),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": bt.value && hi.value.length > 0 ? "true" : "false",
                      onFocus: b[20] || (b[20] = (f) => bt.value = !0),
                      onKeydown: b[21] || (b[21] = dt((f) => bt.value = !1, ["escape"]))
                    }, null, 40, d4), [
                      [We, yt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: E.tag
                    }, null, 8, f4),
                    bt.value && hi.value.length > 0 ? (p(), v("ul", p4, [
                      (p(!0), v(W, null, he(hi.value, (f) => (p(), v("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: b[22] || (b[22] = Ae(() => {
                          }, ["prevent"])),
                          onClick: (F) => kf(f, F)
                        }, o(f), 41, h4)
                      ]))), 128))
                    ])) : x("", !0),
                    l("button", {
                      type: "submit",
                      class: Ce(["button secondary library-tag-apply", vn("tag")])
                    }, o(u(t)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    ae(o(u(t)("library", "Format")), 1),
                    me(l("select", {
                      "onUpdate:modelValue": b[23] || (b[23] = (f) => E.format = f),
                      name: "format",
                      onChange: b[24] || (b[24] = (f) => gi(f))
                    }, [
                      l("option", v4, o(u(t)("library", "All formats")), 1),
                      (p(!0), v(W, null, he($.value, (f) => (p(), v("option", {
                        key: f,
                        value: f
                      }, o(Rl(f)), 9, b4))), 128))
                    ], 544), [
                      [rt, E.format]
                    ])
                  ])
                ]),
                l("fieldset", g4, [
                  l("legend", null, o(u(t)("library", "Location")), 1),
                  l("label", null, [
                    ae(o(u(t)("library", "Shelf")), 1),
                    me(l("select", {
                      "onUpdate:modelValue": b[25] || (b[25] = (f) => E.shelf = f),
                      name: "shelf",
                      onChange: b[26] || (b[26] = (f) => gi(f))
                    }, [
                      l("option", m4, o(u(t)("library", "All shelves")), 1),
                      (p(!0), v(W, null, he(C.value, (f) => (p(), v("option", {
                        key: f,
                        value: f
                      }, o(f), 9, y4))), 128))
                    ], 544), [
                      [rt, E.shelf]
                    ])
                  ]),
                  l("div", _4, [
                    l("label", w4, o(u(t)("library", "Folder")), 1),
                    me(l("input", {
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
                      onKeydown: b[29] || (b[29] = dt((f) => ee.value = !1, ["escape"]))
                    }, null, 40, k4), [
                      [We, ut.value]
                    ]),
                    ee.value && O.value.length > 0 ? (p(), v("ul", S4, [
                      (p(!0), v(W, null, he(O.value, (f) => (p(), v("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: b[30] || (b[30] = Ae(() => {
                          }, ["prevent"])),
                          onClick: (F) => Sf(f, F)
                        }, o(f), 41, C4)
                      ]))), 128))
                    ])) : x("", !0),
                    l("button", {
                      type: "submit",
                      class: Ce(["button secondary library-folder-apply", vn("folder")])
                    }, o(u(t)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", T4, [
                  l("legend", null, o(u(t)("library", "Review")), 1),
                  l("label", null, [
                    ae(o(u(t)("library", "Scan status")), 1),
                    me(l("select", {
                      "onUpdate:modelValue": b[31] || (b[31] = (f) => E.status = f),
                      name: "status",
                      onChange: b[32] || (b[32] = (f) => gi(f))
                    }, [
                      l("option", A4, o(u(t)("library", "All scan statuses")), 1),
                      (p(!0), v(W, null, he(N.value, (f) => (p(), v("option", {
                        key: f,
                        value: f
                      }, o(f), 9, E4))), 128))
                    ], 544), [
                      [rt, E.status]
                    ])
                  ]),
                  l("label", null, [
                    ae(o(u(t)("library", "Workflow status")), 1),
                    me(l("select", {
                      "onUpdate:modelValue": b[33] || (b[33] = (f) => E.workflowStatus = f),
                      name: "workflowStatus",
                      onChange: b[34] || (b[34] = (f) => gi(f))
                    }, [
                      l("option", x4, o(u(t)("library", "All workflow statuses")), 1),
                      (p(!0), v(W, null, he(pe.value, (f) => (p(), v("option", {
                        key: f,
                        value: f
                      }, o(f), 9, $4))), 128))
                    ], 544), [
                      [rt, E.workflowStatus]
                    ])
                  ]),
                  l("div", O4, [
                    l("label", N4, o(u(t)("library", "Subject")), 1),
                    me(l("input", {
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
                      "aria-expanded": te.value && de.value.length > 0 ? "true" : "false",
                      onFocus: b[36] || (b[36] = (f) => te.value = !0),
                      onKeydown: b[37] || (b[37] = dt((f) => te.value = !1, ["escape"]))
                    }, null, 40, I4), [
                      [We, X.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: E.subject
                    }, null, 8, R4),
                    Kt("subject") ? (p(), v("small", L4, o(Mi("subject")), 1)) : x("", !0),
                    te.value && de.value.length > 0 ? (p(), v("ul", P4, [
                      (p(!0), v(W, null, he(de.value, (f) => (p(), v("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: b[38] || (b[38] = Ae(() => {
                          }, ["prevent"])),
                          onClick: (F) => Tf(f, F)
                        }, o(f), 41, D4)
                      ]))), 128))
                    ])) : x("", !0),
                    l("button", {
                      type: "button",
                      class: Ce(["button secondary library-subject-apply", vn("subject")]),
                      onClick: em
                    }, o(u(t)("library", "Apply subject")), 3)
                  ]),
                  l("div", F4, [
                    l("label", M4, o(u(t)("library", "Classification")), 1),
                    me(l("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": b[39] || (b[39] = (f) => Se.value = f),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search classifications"),
                      title: u(t)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": $e.value && Ge.value.length > 0 ? "true" : "false",
                      onFocus: b[40] || (b[40] = (f) => $e.value = !0),
                      onKeydown: b[41] || (b[41] = dt((f) => $e.value = !1, ["escape"]))
                    }, null, 40, U4), [
                      [We, Se.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: E.classification
                    }, null, 8, z4),
                    $e.value && Ge.value.length > 0 ? (p(), v("ul", j4, [
                      (p(!0), v(W, null, he(Ge.value, (f) => (p(), v("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: b[42] || (b[42] = Ae(() => {
                          }, ["prevent"])),
                          onClick: (F) => wf(f, F)
                        }, o(f), 41, B4)
                      ]))), 128))
                    ])) : x("", !0),
                    l("button", {
                      type: "submit",
                      class: Ce(["button secondary library-classification-apply", vn("classification")])
                    }, o(u(t)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    ae(o(u(t)("library", "Suggested updates")), 1),
                    me(l("select", {
                      "onUpdate:modelValue": b[43] || (b[43] = (f) => E.scannerConflicts = f),
                      name: "scannerConflicts",
                      onChange: b[44] || (b[44] = (f) => gi(f))
                    }, [
                      l("option", H4, o(u(t)("library", "All metadata")), 1),
                      l("option", V4, o(u(t)("library", "Suggested updates")), 1)
                    ], 544), [
                      [rt, E.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", q4, [
                  l("legend", null, o(u(t)("library", "Personal / display")), 1)
                ]),
                l("button", K4, o(u(t)("library", "Apply filters")), 1)
              ], 40, SO)
            ])) : x("", !0),
            l("a", {
              class: "library-navigation-settings-link",
              href: Vn.value
            }, [
              b[113] || (b[113] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, o(u(t)("library", "Settings")), 1)
            ], 8, G4)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ve(u(nw), null, {
          default: we(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: m.language || "en",
              dir: m.direction || "ltr",
              tabindex: "-1"
            }, [
              fn.value ? (p(), Pe(hx, {
                key: 0,
                "request-token": gt.value,
                "review-url": dn.value
              }, null, 8, ["request-token", "review-url"])) : Gn.value ? (p(), Pe(yO, {
                key: 1,
                "request-token": gt.value
              }, null, 8, ["request-token"])) : pn.value ? (p(), Pe(UA, {
                key: 2,
                onChanged: _t,
                "request-token": gt.value,
                "catalogue-url": pt.value,
                "lists-url": Wn.value
              }, null, 8, ["request-token", "catalogue-url", "lists-url"])) : (p(), v(W, { key: 3 }, [
                ze.value.length > 0 ? (p(), v("nav", {
                  key: 0,
                  class: "library-active-filter-chips",
                  "aria-label": u(t)("library", "Active filters")
                }, [
                  l("span", null, o(u(t)("library", "Active filters")), 1),
                  (p(!0), v(W, null, he(ze.value, (f) => (p(), v("a", {
                    key: f.key,
                    href: ts(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                    title: f.title,
                    onClick: Ae((F) => is(f.key), ["prevent"])
                  }, [
                    l("strong", null, [
                      ae(o(f.label), 1),
                      f.displayValue ? (p(), v(W, { key: 0 }, [
                        ae(":")
                      ], 64)) : x("", !0)
                    ]),
                    f.displayValue ? (p(), v(W, { key: 0 }, [
                      b[114] || (b[114] = ae(o(" "), -1)),
                      l("span", {
                        class: "library-filter-chip-value",
                        title: f.value
                      }, o(f.displayValue), 9, X4)
                    ], 64)) : x("", !0),
                    b[115] || (b[115] = ae()),
                    b[116] || (b[116] = l("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, Z4))), 128)),
                  at.value.length > 0 ? (p(), v("a", {
                    key: 0,
                    href: Nl(),
                    class: "library-active-filter-clear-all",
                    onClick: Ae(Il, ["prevent"])
                  }, o(u(t)("library", "Clear all")), 9, J4)) : x("", !0)
                ], 8, Y4)) : x("", !0),
                qn.value ? (p(), v("section", Q4, [
                  l("header", eN, [
                    l("p", tN, o(u(t)("library", "Metadata cleanup")), 1),
                    l("h2", iN, o(u(t)("library", "Review")), 1),
                    ve(Je, {
                      text: u(t)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")
                    }, {
                      default: we(() => [
                        ae(o(u(t)("library", "Metadata cleanup")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  l("nav", {
                    class: "library-review-queues",
                    "aria-label": u(t)("library", "Review queues")
                  }, [
                    (p(!0), v(W, null, he(Mg.value, (f) => (p(), v("a", {
                      key: f.key,
                      class: Ce(["library-review-queue-link", { active: f.active }]),
                      href: f.href,
                      "aria-current": f.active ? "page" : void 0,
                      onClick: Ae((F) => nm(f), ["prevent"])
                    }, [
                      l("span", null, o(f.label), 1),
                      l("b", null, o(sm(f.countKey)), 1)
                    ], 10, aN))), 128))
                  ], 8, nN),
                  l("form", {
                    method: "get",
                    class: "library-review-filter-form",
                    "aria-label": u(t)("library", "Filter current review queue"),
                    onSubmit: Ae(Gt, ["prevent"])
                  }, [
                    (p(!0), v(W, null, he(Tg.value, (f) => (p(), v("input", {
                      key: `review-${f.key}`,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, sN))), 128)),
                    l("label", null, [
                      ae(o(u(t)("library", "Search within this queue")), 1),
                      me(l("input", {
                        "onUpdate:modelValue": b[45] || (b[45] = (f) => E.q = f),
                        type: "search",
                        name: "q"
                      }, null, 512), [
                        [We, E.q]
                      ])
                    ]),
                    l("button", lN, o(u(t)("library", "Apply")), 1)
                  ], 40, rN),
                  l("div", {
                    class: "library-review-request-status",
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": Lt.loading ? "true" : "false"
                  }, [
                    Lt.loading ? (p(), v("span", uN, o(u(t)("library", "Loading review queue…")), 1)) : x("", !0)
                  ], 8, oN),
                  Lt.error ? (p(), v("p", cN, o(Lt.error), 1)) : x("", !0),
                  na.value.enabled ? (p(), v("section", dN, [
                    l("div", fN, [
                      l("p", pN, o(u(t)("library", "Metadata review workbench")), 1),
                      l("h3", {
                        id: "library-metadata-review-workbench-heading",
                        title: u(t)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                      }, o(u(t)("library", "Review next suggestion")), 9, hN)
                    ]),
                    na.value.item ? (p(), v("article", vN, [
                      l("header", null, [
                        l("strong", null, [
                          l("bdi", bN, o(na.value.item.title), 1)
                        ]),
                        l("span", gN, [
                          l("bdi", mN, o(na.value.item.cachedPath), 1)
                        ])
                      ]),
                      l("div", yN, [
                        (p(!0), v(W, null, he(na.value.fields, (f) => (p(), v("article", {
                          key: f.field,
                          class: "library-metadata-review-field"
                        }, [
                          l("h4", null, [
                            l("bdi", _N, o(f.field), 1)
                          ]),
                          l("dl", null, [
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Current value")), 1),
                              l("dd", null, [
                                l("bdi", wN, o(f.currentValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Suggested value")), 1),
                              l("dd", null, [
                                l("bdi", kN, o(f.scannerCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Path-based suggestion")), 1),
                              l("dd", null, [
                                l("bdi", SN, o(f.pathTemplateCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Sidecar value")), 1),
                              l("dd", null, [
                                l("bdi", CN, o(f.sidecarValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Source")), 1),
                              l("dd", null, [
                                l("bdi", TN, o(f.sourceProvenance || "—"), 1)
                              ])
                            ])
                          ]),
                          l("form", {
                            method: "post",
                            action: na.value.item.resetFieldUrl,
                            class: "library-metadata-review-accept-form"
                          }, [
                            l("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: gt.value
                            }, null, 8, EN),
                            l("input", {
                              type: "hidden",
                              name: "field",
                              value: f.field
                            }, null, 8, xN),
                            b[117] || (b[117] = l("input", {
                              type: "hidden",
                              name: "returnTo",
                              value: "catalogue"
                            }, null, -1)),
                            l("button", {
                              type: "submit",
                              class: "button secondary",
                              disabled: f.rejected,
                              title: f.rejected ? u(t)("library", "This source value exceeds field limits. Edit the field instead.") : void 0
                            }, o(u(t)("library", "Use suggested value")), 9, $N)
                          ], 8, AN)
                        ]))), 128))
                      ]),
                      l("footer", ON, [
                        l("a", {
                          class: "button secondary",
                          href: na.value.item.detailsUrl
                        }, o(u(t)("library", "Maintenance")), 9, NN),
                        l("a", {
                          class: "button secondary",
                          href: na.value.skipUrl
                        }, o(u(t)("library", "Skip to next suggestion")), 9, IN)
                      ])
                    ])) : x("", !0)
                  ])) : x("", !0),
                  A.value.length === 0 && !Lt.loading && !Lt.error ? (p(), v("div", RN, [
                    l("h3", null, o(u(t)("library", "This review queue is clear")), 1),
                    l("p", null, o(u(t)("library", "Choose another queue or return to the catalogue.")), 1),
                    l("a", {
                      class: "button primary",
                      href: pt.value
                    }, o(u(t)("library", "Back to Library")), 9, LN)
                  ])) : (p(), v("div", {
                    key: 3,
                    class: "library-review-results",
                    role: "region",
                    "aria-label": u(t)("library", "Review results")
                  }, [
                    (p(!0), v(W, null, he(A.value, (f) => (p(), v("article", {
                      key: f.id,
                      class: "library-review-result-card"
                    }, [
                      l("div", null, [
                        l("h3", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (F) => zi(f, F)
                          }, [
                            l("bdi", FN, o(f.title), 1)
                          ], 8, DN)
                        ]),
                        f.creators ? (p(), v("p", MN, [
                          l("bdi", UN, o(f.creators), 1)
                        ])) : x("", !0),
                        f.scanError ? (p(), v("p", zN, [
                          l("bdi", jN, o(f.scanError), 1)
                        ])) : x("", !0)
                      ]),
                      l("p", null, [
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (F) => zi(f, F)
                        }, o(u(t)("library", "Details")), 9, BN),
                        l("a", {
                          class: "button primary",
                          href: f.openUrl,
                          onClick: (F) => Zn(f, F)
                        }, o(u(t)("library", "Open")), 9, HN)
                      ])
                    ]))), 128))
                  ], 8, PN)),
                  A.value.length > 0 ? (p(), v("nav", {
                    key: 4,
                    class: "library-pagination",
                    "aria-label": u(t)("library", "Review pagination")
                  }, [
                    Q.value.previousUrl ? (p(), v("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, qN)) : (p(), v("span", KN, o(u(t)("library", "Previous")), 1)),
                    l("span", null, [
                      ae(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (p(), v("span", GN, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : x("", !0)
                    ]),
                    Q.value.nextUrl ? (p(), v("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, WN)) : (p(), v("span", YN, o(u(t)("library", "Next")), 1))
                  ], 8, VN)) : x("", !0)
                ])) : xa.value ? (p(), v("main", ZN, [
                  l("header", XN, [
                    l("p", JN, o(u(t)("library", "Your library")), 1),
                    l("h2", QN, o(u(t)("library", "Home")), 1)
                  ]),
                  at.value.length > 0 ? (p(), v("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    l("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    l("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (p(!0), v(W, null, he(at.value, (f) => (p(), v("a", {
                        key: `callout-${f.key}`,
                        href: ts(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Ae((F) => is(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ae(o(f.label), 1),
                          f.displayValue ? (p(), v(W, { key: 0 }, [
                            ae(":")
                          ], 64)) : x("", !0)
                        ]),
                        f.displayValue ? (p(), v(W, { key: 0 }, [
                          b[118] || (b[118] = ae(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, nI)
                        ], 64)) : x("", !0),
                        b[119] || (b[119] = ae()),
                        b[120] || (b[120] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, iI))), 128))
                    ], 8, tI),
                    l("p", aI, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: Ot.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, rI),
                      l("a", {
                        class: "button secondary",
                        href: Nl(),
                        onClick: Ae(Il, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, sI)
                    ])
                  ], 8, eI)) : x("", !0),
                  l("section", lI, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", oI, [
                          ve(Je, {
                            text: u(t)("library", "Pick up publications you opened recently.")
                          }, {
                            default: we(() => [
                              ae(o(u(t)("library", "Continue reading")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${pt.value}?recentlyOpened=1&sort=lastOpened`
                      }, o(u(t)("library", "View all")), 9, uI)
                    ]),
                    kl.value.continueReading.length ? (p(), v("div", cI, [
                      (p(!0), v(W, null, he(kl.value.continueReading, (f) => (p(), v("article", {
                        key: `continue-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => zi(f, F)
                        }, [
                          l("span", fI, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, pI)
                          ])
                        ], 8, dI),
                        l("div", hI, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => zi(f, F)
                            }, [
                              l("bdi", bI, o(f.title), 1)
                            ], 8, vI)
                          ]),
                          f.creators ? (p(), v("p", gI, [
                            l("bdi", mI, o(f.creators), 1)
                          ])) : x("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => Zn(f, F)
                          }, o(u(t)("library", "Open")), 9, yI)
                        ])
                      ]))), 128))
                    ])) : (p(), v("p", _I, o(u(t)("library", "Publications you open will appear here.")), 1))
                  ]),
                  l("section", wI, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", kI, [
                          ve(Je, {
                            text: u(t)("library", "The latest publications indexed from your Library roots.")
                          }, {
                            default: we(() => [
                              ae(o(u(t)("library", "Recently added")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${pt.value}?sort=recent`
                      }, o(u(t)("library", "View all")), 9, SI)
                    ]),
                    kl.value.recentlyAdded.length ? (p(), v("div", CI, [
                      (p(!0), v(W, null, he(kl.value.recentlyAdded, (f) => (p(), v("article", {
                        key: `recent-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => zi(f, F)
                        }, [
                          l("span", AI, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, EI)
                          ])
                        ], 8, TI),
                        l("div", xI, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => zi(f, F)
                            }, [
                              l("bdi", OI, o(f.title), 1)
                            ], 8, $I)
                          ]),
                          f.creators ? (p(), v("p", NI, [
                            l("bdi", II, o(f.creators), 1)
                          ])) : x("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => Zn(f, F)
                          }, o(u(t)("library", "Open")), 9, RI)
                        ])
                      ]))), 128))
                    ])) : (p(), v("p", LI, o(u(t)("library", "Recently indexed publications will appear here.")), 1))
                  ]),
                  l("section", PI, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", DI, [
                          ve(Je, {
                            text: u(t)("library", "Browse the folders that organize your publications.")
                          }, {
                            default: we(() => [
                              ae(o(u(t)("library", "Shelves")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", { href: bi.value }, o(u(t)("library", "View all")), 9, FI)
                    ]),
                    tf.value.length ? (p(), v("nav", {
                      key: 0,
                      class: "library-home-shelves",
                      "aria-label": u(t)("library", "Shelves")
                    }, [
                      (p(!0), v(W, null, he(tf.value, (f) => (p(), v("a", {
                        key: f.shelf,
                        href: f.url
                      }, [
                        l("strong", null, [
                          l("bdi", zI, o(f.shelf), 1)
                        ]),
                        l("span", null, o(u(xi)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                      ], 8, UI))), 128))
                    ], 8, MI)) : (p(), v("p", jI, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1))
                  ]),
                  Number(Pu.value.count || 0) > 0 ? (p(), v("aside", BI, [
                    l("div", null, [
                      l("h3", HI, o(u(t)("library", "Needs attention")), 1),
                      l("p", VI, o(u(xi)("library", "%n publication needs better details.", "%n publications need better details.", Number(Pu.value.count || 0))), 1)
                    ]),
                    l("a", {
                      class: "button tertiary",
                      href: Pu.value.url
                    }, o(u(t)("library", "Review")), 9, qI)
                  ])) : x("", !0)
                ])) : Kn.value ? (p(), v("main", KI, [
                  l("header", GI, [
                    l("p", WI, o(u(t)("library", "Your library")), 1),
                    l("h2", YI, [
                      ve(Je, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: we(() => [
                          ae(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ])
                  ]),
                  at.value.length > 0 ? (p(), v("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    l("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    l("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (p(!0), v(W, null, he(at.value, (f) => (p(), v("a", {
                        key: `callout-${f.key}`,
                        href: ts(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Ae((F) => is(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ae(o(f.label), 1),
                          f.displayValue ? (p(), v(W, { key: 0 }, [
                            ae(":")
                          ], 64)) : x("", !0)
                        ]),
                        f.displayValue ? (p(), v(W, { key: 0 }, [
                          b[121] || (b[121] = ae(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, QI)
                        ], 64)) : x("", !0),
                        b[122] || (b[122] = ae()),
                        b[123] || (b[123] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, JI))), 128))
                    ], 8, XI),
                    l("p", eR, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: Ot.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, tR),
                      l("a", {
                        class: "button secondary",
                        href: Nl(),
                        onClick: Ae(Il, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, iR)
                    ])
                  ], 8, ZI)) : x("", !0),
                  nf.value.length ? (p(), v("nav", {
                    key: 1,
                    "aria-label": u(t)("library", "Shelves")
                  }, [
                    l("ul", aR, [
                      (p(!0), v(W, null, he(nf.value, (f) => (p(), Pe(mT, {
                        key: f.id,
                        node: f,
                        "children-url": hl.value
                      }, null, 8, ["node", "children-url"]))), 128))
                    ])
                  ], 8, nR)) : (p(), v("section", rR, [
                    l("h3", null, [
                      ve(Je, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: we(() => [
                          ae(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("p", sR, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1),
                    l("p", lR, [
                      l("a", {
                        class: "button primary",
                        href: Vn.value
                      }, o(u(t)("library", "Add a Library root")), 9, oR),
                      l("a", {
                        class: "button secondary",
                        href: pt.value
                      }, o(u(t)("library", "All publications")), 9, uR)
                    ])
                  ]))
                ])) : (p(), v("section", {
                  key: 4,
                  id: "library-catalogue",
                  class: Ce(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Lt.loading }]),
                  "aria-labelledby": "library-catalogue-heading",
                  "aria-busy": Lt.loading ? "true" : "false"
                }, [
                  l("header", dR, [
                    dr.value ? (p(), v("p", fR, o(Qn.value), 1)) : x("", !0),
                    l("h2", {
                      id: "library-catalogue-heading",
                      ref_key: "catalogueHeadingElement",
                      ref: Br,
                      tabindex: "-1"
                    }, o(Zi.value), 513)
                  ]),
                  l("details", {
                    class: "library-mobile-filter-panel",
                    "data-library-control": "filter",
                    onToggle: kg
                  }, [
                    l("summary", {
                      class: "library-mobile-filter-trigger",
                      "aria-label": _g.value
                    }, [
                      l("span", hR, o(u(xi)("library", "%n item", "%n items", Number(Q.value.total || 0))), 1),
                      l("strong", null, o(yg.value), 1)
                    ], 8, pR),
                    l("form", {
                      method: "get",
                      class: "library-mobile-filter-form",
                      "aria-label": u(t)("library", "Mobile catalogue filters"),
                      onSubmit: Ae(mf, ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "folder",
                        value: E.folder
                      }, null, 8, bR),
                      (p(!0), v(W, null, he(ef.value, (f) => (p(), v("input", {
                        key: `mobile-hidden-${f.key}`,
                        type: "hidden",
                        name: f.key,
                        value: f.value
                      }, null, 8, gR))), 128)),
                      l("fieldset", mR, [
                        l("legend", null, o(u(t)("library", "Content")), 1),
                        l("label", yR, [
                          l("span", null, o(u(t)("library", "Search")), 1),
                          me(l("input", {
                            ref_key: "mobileFilterSearchInput",
                            ref: fr,
                            "onUpdate:modelValue": b[46] || (b[46] = (f) => K.value = f),
                            "data-library-mobile-filter-search": "",
                            type: "search",
                            name: "q",
                            placeholder: u(t)("library", "Title, creator, description, filename or folder")
                          }, null, 8, _R), [
                            [We, K.value]
                          ])
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "Type")), 1),
                          me(l("select", {
                            "onUpdate:modelValue": b[47] || (b[47] = (f) => E.type = f),
                            name: "type",
                            onChange: b[48] || (b[48] = (f) => gi(f))
                          }, [
                            l("option", wR, o(u(t)("library", "All types")), 1),
                            (p(!0), v(W, null, he(R.value, (f) => (p(), v("option", {
                              key: `mobile-type-${f}`,
                              value: f
                            }, o(f), 9, kR))), 128))
                          ], 544), [
                            [rt, E.type]
                          ])
                        ]),
                        l("div", SR, [
                          l("label", CR, o(u(t)("library", "Publisher")), 1),
                          me(l("input", {
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
                            "aria-activedescendant": Ef("mobile", "publisher"),
                            "aria-expanded": ie.value && fe.value.length > 0 ? "true" : "false",
                            onFocus: b[50] || (b[50] = (f) => xf("publisher")),
                            onKeydown: b[51] || (b[51] = (f) => $f(f, "publisher"))
                          }, null, 40, TR), [
                            [We, J.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publisher",
                            value: E.publisher
                          }, null, 8, AR),
                          Kt("publisher") ? (p(), v("small", ER, o(Mi("publisher")), 1)) : x("", !0),
                          Vt.value && ie.value && fe.value.length > 0 ? (p(), v("ul", xR, [
                            (p(!0), v(W, null, he(fe.value, (f, F) => (p(), v("li", {
                              id: ju("mobile", "publisher", F),
                              key: `mobile-publisher-${f}`,
                              role: "option",
                              "aria-selected": gn.publisher === F ? "true" : "false"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publisher-suggestion",
                                onMousedown: b[52] || (b[52] = Ae(() => {
                                }, ["prevent"])),
                                onClick: (ue) => _f(f, ue)
                              }, o(f), 41, OR)
                            ], 8, $R))), 128))
                          ])) : x("", !0)
                        ]),
                        l("div", NR, [
                          l("label", IR, o(u(t)("library", "Series / periodical")), 1),
                          me(l("input", {
                            id: "library-mobile-publication-search",
                            "onUpdate:modelValue": b[53] || (b[53] = (f) => H.value = f),
                            type: "search",
                            name: "publicationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search series and periodicals"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publication-suggestions",
                            "aria-expanded": Z.value && z.value.length > 0 ? "true" : "false",
                            onFocus: b[54] || (b[54] = (f) => Z.value = !0),
                            onKeydown: b[55] || (b[55] = dt((f) => Z.value = !1, ["escape"]))
                          }, null, 40, RR), [
                            [We, H.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publication",
                            value: E.publication
                          }, null, 8, LR),
                          Kt("publication") ? (p(), v("small", PR, o(Mi("publication")), 1)) : x("", !0),
                          Vt.value && Z.value && z.value.length > 0 ? (p(), v("ul", DR, [
                            (p(!0), v(W, null, he(z.value, (f) => (p(), v("li", {
                              key: `mobile-publication-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publication-suggestion",
                                onMousedown: b[56] || (b[56] = Ae(() => {
                                }, ["prevent"])),
                                onClick: (F) => gf(f, F)
                              }, o(f), 41, FR)
                            ]))), 128))
                          ])) : x("", !0)
                        ]),
                        l("div", MR, [
                          l("label", UR, o(u(t)("library", "Publication year")), 1),
                          me(l("input", {
                            id: "library-mobile-year-search",
                            "onUpdate:modelValue": b[57] || (b[57] = (f) => Ht.value = f),
                            type: "search",
                            name: "yearSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publication years"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-year-suggestions",
                            "aria-expanded": vi.value && Gi.value.length > 0 ? "true" : "false",
                            onFocus: b[58] || (b[58] = (f) => vi.value = !0),
                            onKeydown: b[59] || (b[59] = dt((f) => vi.value = !1, ["escape"]))
                          }, null, 40, zR), [
                            [We, Ht.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "year",
                            value: E.year
                          }, null, 8, jR),
                          Kt("year") ? (p(), v("small", BR, o(Mi("year")), 1)) : x("", !0),
                          Vt.value && vi.value && Gi.value.length > 0 ? (p(), v("ul", HR, [
                            (p(!0), v(W, null, he(Gi.value, (f) => (p(), v("li", {
                              key: `mobile-year-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-year-suggestion",
                                onMousedown: b[60] || (b[60] = Ae(() => {
                                }, ["prevent"])),
                                onClick: (F) => Af(f, F)
                              }, o(f), 41, VR)
                            ]))), 128))
                          ])) : x("", !0)
                        ]),
                        l("div", qR, [
                          l("label", KR, o(u(t)("library", "Creator")), 1),
                          me(l("input", {
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
                            "aria-expanded": Ze.value && ye.value.length > 0 ? "true" : "false",
                            onFocus: b[62] || (b[62] = (f) => Ze.value = !0),
                            onKeydown: b[63] || (b[63] = dt((f) => Ze.value = !1, ["escape"]))
                          }, null, 40, GR), [
                            [We, Me.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "creator",
                            value: E.creator
                          }, null, 8, WR),
                          Kt("creator") ? (p(), v("small", YR, o(Mi("creator")), 1)) : x("", !0),
                          Vt.value && Ze.value && ye.value.length > 0 ? (p(), v("ul", ZR, [
                            (p(!0), v(W, null, he(ye.value, (f) => (p(), v("li", {
                              key: `mobile-creator-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-creator-suggestion",
                                onMousedown: b[64] || (b[64] = Ae(() => {
                                }, ["prevent"])),
                                onClick: (F) => yf(f, F)
                              }, o(f), 41, XR)
                            ]))), 128))
                          ])) : x("", !0)
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "Format")), 1),
                          me(l("select", {
                            "onUpdate:modelValue": b[65] || (b[65] = (f) => E.format = f),
                            name: "format",
                            onChange: b[66] || (b[66] = (f) => gi(f))
                          }, [
                            l("option", JR, o(u(t)("library", "All formats")), 1),
                            (p(!0), v(W, null, he($.value, (f) => (p(), v("option", {
                              key: `mobile-format-${f}`,
                              value: f
                            }, o(Rl(f)), 9, QR))), 128))
                          ], 544), [
                            [rt, E.format]
                          ])
                        ]),
                        l("div", eL, [
                          l("label", tL, o(u(t)("library", "Subject")), 1),
                          me(l("input", {
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
                            "aria-expanded": te.value && de.value.length > 0 ? "true" : "false",
                            onFocus: b[68] || (b[68] = (f) => te.value = !0),
                            onKeydown: b[69] || (b[69] = dt((f) => te.value = !1, ["escape"]))
                          }, null, 40, iL), [
                            [We, X.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "subject",
                            value: E.subject
                          }, null, 8, nL),
                          Kt("subject") ? (p(), v("small", aL, o(Mi("subject")), 1)) : x("", !0),
                          Vt.value && te.value && de.value.length > 0 ? (p(), v("ul", rL, [
                            (p(!0), v(W, null, he(de.value, (f) => (p(), v("li", {
                              key: `mobile-subject-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-subject-suggestion",
                                onMousedown: b[70] || (b[70] = Ae(() => {
                                }, ["prevent"])),
                                onClick: (F) => Tf(f, F)
                              }, o(f), 41, sL)
                            ]))), 128))
                          ])) : x("", !0)
                        ]),
                        l("div", lL, [
                          l("label", oL, o(u(t)("library", "Classification")), 1),
                          me(l("input", {
                            id: "library-mobile-classification-search",
                            "onUpdate:modelValue": b[71] || (b[71] = (f) => Se.value = f),
                            type: "search",
                            name: "classificationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search classifications"),
                            title: u(t)("library", "Exact classification matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-classification-suggestions",
                            "aria-expanded": $e.value && Ge.value.length > 0 ? "true" : "false",
                            onFocus: b[72] || (b[72] = (f) => $e.value = !0),
                            onKeydown: b[73] || (b[73] = dt((f) => $e.value = !1, ["escape"]))
                          }, null, 40, uL), [
                            [We, Se.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "classification",
                            value: E.classification
                          }, null, 8, cL),
                          Vt.value && $e.value && Ge.value.length > 0 ? (p(), v("ul", dL, [
                            (p(!0), v(W, null, he(Ge.value, (f) => (p(), v("li", {
                              key: `mobile-classification-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-classification-suggestion",
                                onMousedown: b[74] || (b[74] = Ae(() => {
                                }, ["prevent"])),
                                onClick: (F) => wf(f, F)
                              }, o(f), 41, fL)
                            ]))), 128))
                          ])) : x("", !0)
                        ])
                      ]),
                      l("fieldset", pL, [
                        l("legend", null, o(u(t)("library", "Location")), 1),
                        l("label", null, [
                          ae(o(u(t)("library", "Shelf")), 1),
                          me(l("select", {
                            "onUpdate:modelValue": b[75] || (b[75] = (f) => E.shelf = f),
                            name: "shelf",
                            onChange: b[76] || (b[76] = (f) => gi(f))
                          }, [
                            l("option", hL, o(u(t)("library", "All shelves")), 1),
                            (p(!0), v(W, null, he(C.value, (f) => (p(), v("option", {
                              key: `mobile-shelf-${f}`,
                              value: f
                            }, o(f), 9, vL))), 128))
                          ], 544), [
                            [rt, E.shelf]
                          ])
                        ]),
                        l("div", bL, [
                          l("label", gL, o(u(t)("library", "Folder")), 1),
                          me(l("input", {
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
                            onKeydown: b[79] || (b[79] = dt((f) => ee.value = !1, ["escape"]))
                          }, null, 40, mL), [
                            [We, ut.value]
                          ]),
                          Vt.value && ee.value && O.value.length > 0 ? (p(), v("ul", yL, [
                            (p(!0), v(W, null, he(O.value, (f) => (p(), v("li", {
                              key: `mobile-folder-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-folder-suggestion",
                                onMousedown: b[80] || (b[80] = Ae(() => {
                                }, ["prevent"])),
                                onClick: (F) => Sf(f, F)
                              }, o(f), 41, _L)
                            ]))), 128))
                          ])) : x("", !0)
                        ])
                      ]),
                      l("fieldset", wL, [
                        l("legend", null, o(u(t)("library", "Review")), 1),
                        l("label", null, [
                          ae(o(u(t)("library", "Scan status")), 1),
                          me(l("select", {
                            "onUpdate:modelValue": b[81] || (b[81] = (f) => E.status = f),
                            name: "status",
                            onChange: b[82] || (b[82] = (f) => gi(f))
                          }, [
                            l("option", kL, o(u(t)("library", "All scan statuses")), 1),
                            (p(!0), v(W, null, he(N.value, (f) => (p(), v("option", {
                              key: `mobile-scan-${f}`,
                              value: f
                            }, o(f), 9, SL))), 128))
                          ], 544), [
                            [rt, E.status]
                          ])
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "Workflow status")), 1),
                          me(l("select", {
                            "onUpdate:modelValue": b[83] || (b[83] = (f) => E.workflowStatus = f),
                            name: "workflowStatus",
                            onChange: b[84] || (b[84] = (f) => gi(f))
                          }, [
                            l("option", CL, o(u(t)("library", "All workflow statuses")), 1),
                            (p(!0), v(W, null, he(pe.value, (f) => (p(), v("option", {
                              key: `mobile-workflow-${f}`,
                              value: f
                            }, o(f), 9, TL))), 128))
                          ], 544), [
                            [rt, E.workflowStatus]
                          ])
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "Suggested updates")), 1),
                          me(l("select", {
                            "onUpdate:modelValue": b[85] || (b[85] = (f) => E.scannerConflicts = f),
                            name: "scannerConflicts",
                            onChange: b[86] || (b[86] = (f) => gi(f))
                          }, [
                            l("option", AL, o(u(t)("library", "All metadata")), 1),
                            l("option", EL, o(u(t)("library", "Suggested updates")), 1)
                          ], 544), [
                            [rt, E.scannerConflicts]
                          ])
                        ])
                      ]),
                      l("fieldset", xL, [
                        l("legend", null, o(u(t)("library", "Personal / display")), 1),
                        l("div", $L, [
                          l("label", OL, o(u(t)("library", "Nextcloud tag")), 1),
                          me(l("input", {
                            id: "library-tag-search",
                            "onUpdate:modelValue": b[87] || (b[87] = (f) => yt.value = f),
                            type: "search",
                            name: "tagSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search tags"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-tag-suggestions",
                            "aria-expanded": bt.value && hi.value.length > 0 ? "true" : "false",
                            onFocus: b[88] || (b[88] = (f) => bt.value = !0),
                            onKeydown: b[89] || (b[89] = dt((f) => bt.value = !1, ["escape"]))
                          }, null, 40, NL), [
                            [We, yt.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "tag",
                            value: E.tag
                          }, null, 8, IL),
                          bt.value && hi.value.length > 0 ? (p(), v("ul", RL, [
                            (p(!0), v(W, null, he(hi.value, (f) => (p(), v("li", {
                              key: f,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-tag-suggestion",
                                onMousedown: b[90] || (b[90] = Ae(() => {
                                }, ["prevent"])),
                                onClick: (F) => kf(f, F)
                              }, o(f), 41, LL)
                            ]))), 128))
                          ])) : x("", !0),
                          l("button", {
                            type: "submit",
                            class: Ce(["button secondary library-tag-apply", vn("tag")])
                          }, o(u(t)("library", "Apply tag")), 3)
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "Sort")), 1),
                          me(l("select", {
                            "onUpdate:modelValue": b[91] || (b[91] = (f) => E.sort = f),
                            name: "sort",
                            onChange: Gt
                          }, [
                            l("option", PL, o(u(t)("library", "Title")), 1),
                            l("option", DL, o(u(t)("library", "Date added")), 1),
                            l("option", FL, o(u(t)("library", "Publication date")), 1),
                            l("option", ML, o(u(t)("library", "Series")), 1),
                            l("option", UL, o(u(t)("library", "Recently opened")), 1),
                            l("option", zL, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [rt, E.sort]
                          ])
                        ]),
                        l("label", null, [
                          ae(o(u(t)("library", "View")), 1),
                          me(l("select", {
                            "onUpdate:modelValue": b[92] || (b[92] = (f) => E.view = f),
                            name: "view",
                            onChange: Gt
                          }, [
                            l("option", jL, o(u(t)("library", "Compact")), 1),
                            l("option", BL, o(u(t)("library", "List")), 1)
                          ], 544), [
                            [rt, E.view]
                          ])
                        ])
                      ]),
                      l("div", HL, [
                        at.value.length > 0 ? (p(), v("a", {
                          key: 0,
                          href: Nl(),
                          class: "button secondary library-mobile-filter-clear",
                          onClick: Ae(Il, ["prevent"])
                        }, o(u(t)("library", "Clear all")), 9, VL)) : x("", !0),
                        l("button", qL, o(wg.value), 1)
                      ])
                    ], 40, vR)
                  ], 32),
                  l("nav", {
                    class: "library-catalogue-workspace library-workspace-menubar",
                    "aria-label": u(t)("library", "One catalogue workspace")
                  }, [
                    l("div", GL, [
                      l("section", WL, [
                        l("h3", {
                          title: u(t)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                        }, o(u(t)("library", "Collections")), 9, YL),
                        l("form", {
                          method: "post",
                          action: Vr.value,
                          class: "library-saved-collection-save-form",
                          title: Vu.value ? "" : u(t)("library", "Choose search terms or filters first, then save them as a custom collection.")
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: gt.value
                          }, null, 8, XL),
                          l("input", {
                            type: "hidden",
                            name: "savedCollectionFilters",
                            value: lm.value
                          }, null, 8, JL),
                          l("label", null, [
                            l("span", QL, o(u(t)("library", "Collection name")), 1),
                            l("input", {
                              type: "text",
                              name: "savedCollectionName",
                              placeholder: u(t)("library", "e.g. Bremen photo books"),
                              disabled: !Vu.value,
                              autocomplete: "off"
                            }, null, 8, eP)
                          ]),
                          l("button", {
                            type: "submit",
                            class: "button secondary",
                            disabled: !Vu.value,
                            title: u(t)("library", "Save current view")
                          }, o(u(t)("library", "Save")), 9, tP)
                        ], 8, ZL)
                      ]),
                      l("form", {
                        method: "get",
                        class: "library-quick-filter-bar library-catalogue-toolbar",
                        "aria-label": u(t)("library", "Catalogue toolbar"),
                        onSubmit: Ae(Gt, ["prevent"])
                      }, [
                        (p(!0), v(W, null, he(Cg.value, (f) => (p(), v("input", {
                          key: f.key,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, nP))), 128)),
                        l("label", aP, [
                          ae(o(u(t)("library", "Sort")), 1),
                          me(l("select", {
                            "onUpdate:modelValue": b[93] || (b[93] = (f) => E.sort = f),
                            name: "sort",
                            onChange: Gt
                          }, [
                            l("option", rP, o(u(t)("library", "Title")), 1),
                            l("option", sP, o(u(t)("library", "Date added")), 1),
                            l("option", lP, o(u(t)("library", "Publication date")), 1),
                            l("option", oP, o(u(t)("library", "Series")), 1),
                            l("option", uP, o(u(t)("library", "Recently opened")), 1),
                            l("option", cP, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [rt, E.sort]
                          ])
                        ]),
                        l("nav", {
                          class: "library-view-mode-toggle",
                          "data-library-control": "view",
                          "aria-label": u(t)("library", "View")
                        }, [
                          l("button", {
                            type: "button",
                            "data-library-view-mode": "compact",
                            class: Ce({ active: M.value === "compact" }),
                            "aria-pressed": M.value === "compact" ? "true" : "false",
                            onClick: b[94] || (b[94] = (f) => Rf("compact"))
                          }, o(u(t)("library", "Compact")), 11, fP),
                          l("button", {
                            type: "button",
                            "data-library-view-mode": "list",
                            class: Ce({ active: M.value === "list" }),
                            "aria-pressed": M.value === "list" ? "true" : "false",
                            onClick: b[95] || (b[95] = (f) => Rf("list"))
                          }, o(u(t)("library", "List")), 11, pP)
                        ], 8, dP)
                      ], 40, iP)
                    ])
                  ], 8, KL),
                  Hr.value ? (p(), v("p", hP, o(Hr.value), 1)) : x("", !0),
                  pr.value ? (p(), v("p", vP, o(pr.value), 1)) : x("", !0),
                  _l.value ? (p(), v("p", bP, o(_l.value), 1)) : x("", !0),
                  l("div", gP, [
                    Lt.loading ? (p(), v("span", mP, o(u(t)("library", "Updating catalogue…")), 1)) : Lt.completed ? (p(), v("span", yP, o(u(xi)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(Q.value.total || 0))), 1)) : x("", !0)
                  ]),
                  dr.value ? (p(), v("section", _P, [
                    l("p", wP, o(Qn.value), 1),
                    l("h3", {
                      id: "library-discovery-heading",
                      title: Na.value ? u(t)("library", "Items by this creator, sorted by publication context when available.") : Jn.value ? u(t)("library", "Items from this publication year, sorted by publication date when available.") : u(t)("library", "Items in this publication, sorted by issue/date context when available.")
                    }, o(Ia.value), 9, kP),
                    l("div", {
                      class: "library-discovery-hero-metrics",
                      "aria-label": u(t)("library", "Discovery summary")
                    }, [
                      l("span", null, o(u(xi)("library", "%n item", "%n items", Q.value.total)), 1),
                      P.value?.earliestYear && P.value?.latestYear ? (p(), v("span", CP, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : x("", !0),
                      P.value?.datedCount ? (p(), v("span", TP, o(P.value.datedCount) + " " + o(u(t)("library", "dated")), 1)) : x("", !0),
                      P.value?.undatedCount > 0 ? (p(), v("span", AP, o(P.value.undatedCount) + " " + o(u(t)("library", "undated")), 1)) : x("", !0)
                    ], 8, SP),
                    Oa.value && P.value ? (p(), v("aside", {
                      key: 0,
                      class: "library-publication-issue-context",
                      "aria-label": u(t)("library", "Publication issue/date context")
                    }, [
                      l("strong", null, o(u(t)("library", "Publication contents")), 1),
                      l("span", null, o(u(xi)("library", "%n item", "%n items", P.value.itemCount)), 1),
                      P.value.earliestYear && P.value.latestYear ? (p(), v("span", xP, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : x("", !0),
                      l("span", null, o(P.value.datedCount) + " " + o(u(t)("library", "with issue/date coverage")), 1),
                      P.value.undatedCount > 0 ? (p(), v("span", $P, o(P.value.undatedCount) + " " + o(u(t)("library", "without dates yet")), 1)) : x("", !0),
                      l("span", null, o(u(t)("library", "read-only grouping")), 1)
                    ], 8, EP)) : x("", !0),
                    Oa.value && P.value?.issueGroups?.length ? (p(), v("section", OP, [
                      l("div", null, [
                        l("p", NP, o(u(t)("library", "Issue order")), 1),
                        l("h4", {
                          id: "library-publication-issue-groups-heading",
                          title: u(t)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                        }, o(u(t)("library", "Read-only issue/date grouping")), 9, IP)
                      ]),
                      l("div", {
                        class: "library-publication-issue-strip",
                        "aria-label": u(t)("library", "Visual issue strip")
                      }, [
                        (p(!0), v(W, null, he(P.value.issueGroups, (f) => (p(), v("a", {
                          key: `strip-${f.label}`,
                          class: "library-issue-strip-card",
                          href: f.items?.[0]?.detailsUrl || "#"
                        }, [
                          l("span", null, o(f.label), 1),
                          l("strong", null, o(f.items?.[0]?.issueLabel || u(t)("library", "Issue")), 1),
                          l("small", null, o(u(xi)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                        ], 8, LP))), 128))
                      ], 8, RP),
                      P.value.gapRanges?.length ? (p(), v("p", PP, o(u(t)("library", "Gap")) + ": " + o(P.value.gapRanges.join(", ")), 1)) : x("", !0),
                      (p(!0), v(W, null, he(P.value.issueGroups, (f) => (p(), v("div", {
                        key: f.label,
                        class: "library-publication-issue-group"
                      }, [
                        l("h5", null, o(f.label), 1),
                        l("ol", null, [
                          (p(!0), v(W, null, he(f.items, (F, ue) => (p(), v("li", {
                            key: F.itemId
                          }, [
                            l("span", DP, o(F.issueLabel), 1),
                            l("a", {
                              href: F.detailsUrl || "#"
                            }, o(F.title), 9, FP),
                            l("small", null, [
                              ae(o(F.publicationType), 1),
                              F.publicationDate ? (p(), v(W, { key: 0 }, [
                                ae(" · " + o(F.publicationDate), 1)
                              ], 64)) : x("", !0)
                            ]),
                            l("small", MP, [
                              ue > 0 ? (p(), v(W, { key: 0 }, [
                                ae(o(u(t)("library", "Previous issue")), 1)
                              ], 64)) : x("", !0),
                              ue > 0 && ue < f.items.length - 1 ? (p(), v(W, { key: 1 }, [
                                ae(" · ")
                              ], 64)) : x("", !0),
                              ue < f.items.length - 1 ? (p(), v(W, { key: 2 }, [
                                ae(o(u(t)("library", "Next issue")), 1)
                              ], 64)) : x("", !0)
                            ])
                          ]))), 128))
                        ])
                      ]))), 128)),
                      P.value.unknownIssueItems?.length ? (p(), v("details", UP, [
                        l("summary", {
                          title: u(t)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                        }, o(u(t)("library", "Unknown issue/date")) + " · " + o(P.value.unknownIssueItems.length), 9, zP)
                      ])) : x("", !0)
                    ])) : x("", !0),
                    l("p", null, [
                      l("a", {
                        href: pt.value,
                        class: "button secondary library-discovery-back-link"
                      }, o(u(t)("library", "Back to full catalogue")), 9, jP)
                    ])
                  ])) : x("", !0),
                  l("div", BP, [
                    l("p", HP, o(u(t)("library", "Showing")) + " " + o(Q.value.from) + "–" + o(Q.value.to) + " " + o(u(t)("library", "of")) + " " + o(Q.value.total) + " " + o(u(t)("library", "catalogue items")), 1),
                    l("nav", {
                      class: "library-pagination library-pagination--top",
                      "aria-label": u(t)("library", "Catalogue pagination")
                    }, [
                      l("span", qP, [
                        ae(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                        Q.value.total > 0 ? (p(), v("span", KP, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : x("", !0)
                      ]),
                      Q.value.previousUrl ? (p(), v("a", {
                        key: 0,
                        href: Q.value.previousUrl
                      }, o(u(t)("library", "Previous")), 9, GP)) : (p(), v("span", WP, o(u(t)("library", "Previous")), 1)),
                      Q.value.nextUrl ? (p(), v("a", {
                        key: 2,
                        href: Q.value.nextUrl
                      }, o(u(t)("library", "Next")), 9, YP)) : (p(), v("span", ZP, o(u(t)("library", "Next")), 1))
                    ], 8, VP)
                  ]),
                  A.value.length === 0 ? (p(), v("div", {
                    key: 4,
                    class: Ce(["library-empty-content", { "library-first-run-guidance": ea.value || zr.value, "library-filter-empty-state": jr.value && !ea.value && !zr.value }]),
                    role: "status"
                  }, [
                    ea.value ? (p(), v(W, { key: 0 }, [
                      l("h3", {
                        title: u(t)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                      }, o(u(t)("library", "Start with one Library root")), 9, XP),
                      l("p", JP, [
                        l("a", {
                          href: Vn.value,
                          class: "button primary"
                        }, o(u(t)("library", "Add a Library root")), 9, QP),
                        l("span", e8, o(u(t)("library", "Run a scan after saving a root")), 1)
                      ])
                    ], 64)) : zr.value ? (p(), v(W, { key: 1 }, [
                      l("h3", {
                        title: u(t)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                      }, o(u(t)("library", "No enabled Library roots")), 9, t8),
                      l("p", i8, [
                        l("a", {
                          href: Vn.value,
                          class: "button primary"
                        }, o(u(t)("library", "Open Library settings")), 9, n8)
                      ])
                    ], 64)) : jr.value ? (p(), v(W, { key: 2 }, [
                      l("h3", {
                        title: u(t)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                      }, o(u(t)("library", "No items match these filters")), 9, a8),
                      at.value.length > 0 ? (p(), v("nav", {
                        key: 0,
                        class: "library-empty-filter-chips",
                        "aria-label": u(t)("library", "Remove active filters")
                      }, [
                        (p(!0), v(W, null, he(at.value, (f) => (p(), v("a", {
                          key: `empty-${f.key}`,
                          href: ts(f.key),
                          class: "library-filter-chip",
                          "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                          onClick: Ae((F) => is(f.key), ["prevent"])
                        }, [
                          l("strong", null, [
                            ae(o(f.label), 1),
                            f.displayValue ? (p(), v(W, { key: 0 }, [
                              ae(":")
                            ], 64)) : x("", !0)
                          ]),
                          f.displayValue ? (p(), v(W, { key: 0 }, [
                            b[124] || (b[124] = ae(o(" "), -1)),
                            l("span", {
                              class: "library-filter-chip-value",
                              title: f.value
                            }, o(f.displayValue), 9, l8)
                          ], 64)) : x("", !0),
                          b[125] || (b[125] = ae()),
                          b[126] || (b[126] = l("span", { "aria-hidden": "true" }, "×", -1))
                        ], 8, s8))), 128))
                      ], 8, r8)) : x("", !0),
                      Ct.value ? (p(), v("p", o8, o(u(t)("library", "Try removing {filter}.", { filter: Ct.value.displayValue ? `${Ct.value.label}: ${Ct.value.displayValue}` : Ct.value.label })), 1)) : x("", !0),
                      l("p", u8, [
                        qt.value ? (p(), v("a", {
                          key: 0,
                          href: am(),
                          class: "button secondary library-empty-clear-search",
                          onClick: b[96] || (b[96] = Ae((f) => is("q"), ["prevent"]))
                        }, o(u(t)("library", "Clear search")), 9, c8)) : x("", !0)
                      ])
                    ], 64)) : (p(), v(W, { key: 3 }, [
                      l("h3", {
                        title: u(t)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                      }, o(u(t)("library", "No catalogue items yet")), 9, d8),
                      l("p", f8, [
                        l("a", {
                          href: Vn.value,
                          class: "button primary"
                        }, o(u(t)("library", "Run a scan from settings")), 9, p8)
                      ])
                    ], 64))
                  ], 2)) : x("", !0),
                  A.value.length > 0 ? (p(), v("section", {
                    key: 5,
                    class: Ce(["library-list-selection", { "library-list-selection--active": ni.value.length }]),
                    "aria-label": u(t)("library", "Selection")
                  }, [
                    l("div", v8, [
                      l("label", b8, [
                        l("input", {
                          type: "checkbox",
                          checked: ni.value.length === A.value.length,
                          onChange: Ag
                        }, null, 40, g8),
                        l("span", {
                          title: u(t)("library", "Select all publications on this page")
                        }, o(u(t)("library", "Select all")), 9, m8)
                      ]),
                      ni.value.length ? (p(), v("span", y8, o(u(xi)("library", "%n publication selected", "%n publications selected", ni.value.length)), 1)) : x("", !0),
                      me(ve(fd, {
                        "item-ids": ni.value,
                        "request-token": gt.value,
                        "lists-url": Wn.value,
                        "preferred-list-id": u($a)
                      }, null, 8, ["item-ids", "request-token", "lists-url", "preferred-list-id"]), [
                        [nr, ni.value.length]
                      ]),
                      ni.value.length ? me((p(), v("select", {
                        key: 1,
                        "onUpdate:modelValue": b[97] || (b[97] = (f) => Fi.value = f),
                        "aria-label": u(t)("library", "More actions")
                      }, [
                        l("option", w8, o(u(t)("library", "More actions")), 1),
                        l("option", k8, o(u(t)("library", "Add tag")), 1),
                        l("option", S8, o(u(t)("library", "Remove tag")), 1),
                        l("option", C8, o(u(t)("library", "Preview edit")), 1),
                        l("option", T8, o(u(t)("library", "Fresh covers")), 1),
                        l("option", A8, o(u(t)("library", "Reset metadata")), 1)
                      ], 8, _8)), [
                        [rt, Fi.value]
                      ]) : x("", !0)
                    ]),
                    ni.value.length && Fi.value ? (p(), v("div", {
                      key: 0,
                      class: "library-selection-action",
                      onSubmitCapture: xg
                    }, [
                      Fi.value === "tag" ? (p(), v("form", {
                        key: 0,
                        method: "post",
                        action: $u.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, x8),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, $8)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: u(t)("library", "Applies only to the selected publications.")
                        }, o(u(t)("library", "Apply")), 9, O8)
                      ], 8, E8)) : x("", !0),
                      Fi.value === "untag" ? (p(), v("form", {
                        key: 1,
                        method: "post",
                        action: Ou.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, I8),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, R8)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Removes the tag only from the selected publications.")
                        }, o(u(t)("library", "Remove")), 9, L8)
                      ], 8, N8)) : x("", !0),
                      Fi.value === "reset" ? (p(), v("form", {
                        key: 2,
                        method: "post",
                        action: Nu.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, D8),
                        (p(!0), v(W, null, he(wl.value, (f) => (p(), v("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, F8))), 128)),
                        b[127] || (b[127] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Reset metadata")), 9, M8)
                      ], 8, P8)) : x("", !0),
                      Fi.value === "edit" ? (p(), v("form", {
                        key: 3,
                        method: "post",
                        action: gl.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, z8),
                        (p(!0), v(W, null, he(wl.value, (f) => (p(), v("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, j8))), 128)),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Field")), 1),
                          l("select", B8, [
                            l("option", H8, o(u(t)("library", "Publication type")), 1),
                            l("option", V8, o(u(t)("library", "Subtitle")), 1),
                            l("option", q8, o(u(t)("library", "Creators")), 1),
                            l("option", K8, o(u(t)("library", "Series / periodical")), 1),
                            l("option", G8, o(u(t)("library", "Series")), 1),
                            l("option", W8, o(u(t)("library", "Part in series")), 1),
                            l("option", Y8, o(u(t)("library", "Genre")), 1),
                            l("option", Z8, o(u(t)("library", "Publication date")), 1),
                            l("option", X8, o(u(t)("library", "Language")), 1),
                            l("option", J8, o(u(t)("library", "Publisher")), 1),
                            l("option", Q8, o(u(t)("library", "Subjects")), 1),
                            l("option", e5, o(u(t)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: u(t)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, t5)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Preview first, then apply from the review page.")
                        }, o(u(t)("library", "Preview edit")), 9, i5)
                      ], 8, U8)) : x("", !0),
                      Fi.value === "covers" ? (p(), v("form", {
                        key: 4,
                        method: "post",
                        action: Iu.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, a5),
                        (p(!0), v(W, null, he(wl.value, (f) => (p(), v("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, r5))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Fresh covers")), 9, s5)
                      ], 8, n5)) : x("", !0),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: b[98] || (b[98] = (f) => Fi.value = "")
                      }, o(u(t)("library", "Cancel")), 1)
                    ], 32)) : x("", !0)
                  ], 10, h8)) : x("", !0),
                  cr.value && (u(Au) === "building" || Object.values(u(hn)).some((f) => f.status === "partial")) ? (p(), v("p", l5, o(u(t)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : x("", !0),
                  A.value.length > 0 && M.value === "list" ? (p(), v("div", o5, [
                    l("table", u5, [
                      l("caption", c5, o(u(t)("library", "Catalogue list")), 1),
                      l("thead", null, [
                        l("tr", null, [
                          l("th", d5, [
                            l("span", f5, o(u(t)("library", "Selection")), 1)
                          ]),
                          l("th", p5, [
                            l("span", h5, o(u(t)("library", "Cover")), 1)
                          ]),
                          l("th", v5, o(u(t)("library", "Title")), 1),
                          l("th", b5, o(u(t)("library", "Creators")), 1),
                          l("th", g5, o(u(t)("library", "Publication date")), 1),
                          l("th", m5, o(u(t)("library", "Series")), 1),
                          l("th", y5, o(u(t)("library", "Format")), 1),
                          l("th", _5, o(u(t)("library", "Shelf")), 1),
                          l("th", w5, o(u(t)("library", "Actions")), 1)
                        ])
                      ]),
                      l("tbody", null, [
                        (p(!0), v(W, null, he(A.value, (f) => (p(), v("tr", {
                          key: f.id,
                          class: Ce(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Sl.value.has(Number(f.id)), "library-catalogue-list-row--open": ia.value && Number(La.value) === Number(f.id) }])
                        }, [
                          l("td", k5, [
                            l("label", S5, [
                              l("input", {
                                type: "checkbox",
                                checked: Sl.value.has(Number(f.id)),
                                "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                                onChange: (F) => af(f.id, F.currentTarget.checked)
                              }, null, 40, C5)
                            ])
                          ]),
                          l("td", T5, [
                            l("button", {
                              type: "button",
                              class: "library-catalogue-list-cover",
                              "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                              onClick: (F) => zi(f, F)
                            }, [
                              l("img", {
                                src: f.coverUrl,
                                alt: "",
                                loading: "lazy",
                                decoding: "async"
                              }, null, 8, E5)
                            ], 8, A5)
                          ]),
                          l("th", x5, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button library-catalogue-list-title",
                              onClick: (F) => zi(f, F)
                            }, [
                              l("bdi", O5, o(f.title), 1)
                            ], 8, $5),
                            u(hn)[f.id]?.count ? (p(), v("a", {
                              key: 0,
                              class: "library-duplicate-badge",
                              href: `${pt.value}?duplicates=1&bookId=${f.id}`
                            }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(hn)[f.id].count) + o(u(hn)[f.id].status === "partial" ? "+" : ""), 9, N5)) : x("", !0)
                          ]),
                          l("td", I5, [
                            f.creators ? (p(), v("bdi", R5, o(f.creators), 1)) : (p(), v("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, L5))
                          ]),
                          l("td", null, [
                            f.publicationDate ? (p(), v("time", {
                              key: 0,
                              datetime: f.publicationDate
                            }, o(f.publicationDate), 9, P5)) : (p(), v("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, D5))
                          ]),
                          l("td", null, [
                            f.publication ? (p(), v("bdi", F5, o(f.publication), 1)) : (p(), v("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, M5))
                          ]),
                          l("td", null, [
                            f.extension || f.publicationType ? (p(), v("bdi", {
                              key: 0,
                              class: Ce(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                              dir: f.extension ? "ltr" : "auto"
                            }, o(f.extension ? Rl(f.extension) : f.publicationType), 11, U5)) : (p(), v("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, z5))
                          ]),
                          l("td", null, [
                            f.shelf ? (p(), v("bdi", j5, o(f.shelf), 1)) : (p(), v("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, B5))
                          ]),
                          l("td", H5, [
                            l("a", {
                              class: "button primary",
                              href: f.openUrl,
                              onClick: (F) => Zn(f, F)
                            }, o(u(t)("library", "Open")), 9, V5),
                            l("button", {
                              type: "button",
                              class: "button secondary",
                              onClick: (F) => zi(f, F)
                            }, o(u(t)("library", "Details")), 9, q5)
                          ])
                        ], 2))), 128))
                      ])
                    ])
                  ])) : A.value.length > 0 ? (p(), v("div", {
                    key: 8,
                    class: Ce(["library-cover-gallery", le.value])
                  }, [
                    (p(!0), v(W, null, he(A.value, (f) => (p(), v("article", {
                      key: f.id,
                      class: Ce(["library-cover-card", { "library-cover-card--selected": Sl.value.has(Number(f.id)), "library-cover-card--open": ia.value && Number(La.value) === Number(f.id) }])
                    }, [
                      l("label", K5, [
                        l("input", {
                          type: "checkbox",
                          checked: Sl.value.has(Number(f.id)),
                          "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                          onChange: (F) => af(f.id, F.currentTarget.checked)
                        }, null, 40, G5)
                      ]),
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                        "aria-expanded": ia.value && Number(La.value) === Number(f.id) ? "true" : "false",
                        onClick: (F) => zi(f, F)
                      }, [
                        l("span", {
                          id: `library-details-action-${f.id}`,
                          class: "hidden-visually"
                        }, o(u(t)("library", "Details")), 9, Y5),
                        ve(kT, {
                          src: f.coverUrl
                        }, null, 8, ["src"])
                      ], 8, W5),
                      l("form", {
                        method: "post",
                        action: f.starUrl,
                        class: "library-cover-star-form",
                        onSubmit: Ae((F) => Ff(f, F), ["prevent"])
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: gt.value
                        }, null, 8, X5),
                        b[128] || (b[128] = l("input", {
                          type: "hidden",
                          name: "returnTo",
                          value: "catalogue"
                        }, null, -1)),
                        l("input", {
                          type: "hidden",
                          name: "starred",
                          value: f.starred ? "0" : "1"
                        }, null, 8, J5),
                        l("button", {
                          type: "submit",
                          class: Ce(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                          "aria-pressed": f.starred ? "true" : "false",
                          title: f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-label": f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-busy": ns[f.id] ? "true" : void 0,
                          disabled: ns[f.id],
                          onClick: Ae((F) => Ff(f, F), ["prevent"])
                        }, o(f.starred ? "★" : "☆"), 11, Q5),
                        as[f.id] ? (p(), v("span", {
                          key: 0,
                          "data-library-star-error": f.id,
                          class: "library-star-feedback",
                          role: "alert"
                        }, o(as[f.id]), 9, eD)) : x("", !0)
                      ], 40, Z5),
                      l("div", tD, [
                        l("div", iD, [
                          u(hn)[f.id]?.count ? (p(), v("a", {
                            key: 0,
                            class: "library-duplicate-badge",
                            href: `${pt.value}?duplicates=1&bookId=${f.id}`
                          }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(hn)[f.id].count) + o(u(hn)[f.id].status === "partial" ? "+" : ""), 9, nD)) : x("", !0),
                          l("h3", {
                            id: `library-card-title-${f.id}`
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => zi(f, F)
                            }, [
                              l("bdi", sD, o(f.title), 1)
                            ], 8, rD)
                          ], 8, aD),
                          f.creators ? (p(), v("p", lD, [
                            l("bdi", oD, o(f.creators), 1)
                          ])) : x("", !0),
                          Lf(f) ? (p(), v("p", uD, [
                            l("bdi", cD, o(Lf(f)), 1)
                          ])) : x("", !0)
                        ])
                      ])
                    ], 2))), 128))
                  ], 2)) : x("", !0),
                  A.value.length > 0 ? (p(), v("nav", {
                    key: 9,
                    class: "library-pagination library-pagination--bottom",
                    "aria-label": u(t)("library", "Catalogue pagination")
                  }, [
                    l("span", fD, [
                      ae(o(u(t)("library", "Page")) + " " + o(Q.value.page), 1),
                      Q.value.total > 0 ? (p(), v("span", pD, " · " + o(Q.value.from) + "–" + o(Q.value.to), 1)) : x("", !0)
                    ]),
                    Q.value.previousUrl ? (p(), v("a", {
                      key: 0,
                      href: Q.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, hD)) : (p(), v("span", vD, o(u(t)("library", "Previous")), 1)),
                    Q.value.nextUrl ? (p(), v("a", {
                      key: 2,
                      href: Q.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, bD)) : (p(), v("span", gD, o(u(t)("library", "Next")), 1))
                  ], 8, dD)) : x("", !0)
                ], 10, cR))
              ], 64))
            ], 8, W4)
          ]),
          _: 1
        }),
        ve(u(V2), {
          ref_key: "sidebarComponent",
          ref: Da,
          class: "library-native-item-sidebar",
          open: ia.value,
          "no-toggle": "",
          loading: ai.loading,
          name: Te.value?.title || u(t)("library", "Publication details"),
          subname: Te.value?.creators || "",
          role: Fa.value ? "dialog" : void 0,
          "aria-modal": Fa.value ? "true" : void 0,
          "aria-labelledby": Fa.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Fa.value && Te.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: pf,
          onClosed: Ug,
          onClose: Yr
        }, {
          default: we(() => [
            l("div", mD, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: rf,
                class: "hidden-visually",
                tabindex: "-1"
              }, o(Te.value?.title || u(t)("library", "Publication details")), 513),
              ai.loading && !Te.value ? (p(), v("p", yD, o(u(t)("library", "Loading publication details…")), 1)) : ai.error ? (p(), v("div", {
                key: 1,
                class: "library-sidebar-state",
                role: ai.missing ? "status" : "alert"
              }, [
                l("p", null, o(ai.error), 1),
                ai.missing ? x("", !0) : (p(), v("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: b[99] || (b[99] = (f) => Wr(La.value, { historyMode: "none" }))
                }, o(u(t)("library", "Try again")), 1))
              ], 8, _D)) : Te.value ? (p(), v(W, { key: 2 }, [
                l("p", wD, o(u(t)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", kD, [
                  l("span", SD, o(u(t)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Te.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, CD),
                  l("div", TD, [
                    l("p", AD, [
                      l("bdi", ED, o(Te.value.publicationType || u(t)("library", "Publication")), 1),
                      Te.value.extension ? (p(), v("span", xD, [
                        b[129] || (b[129] = ae(" · ", -1)),
                        l("bdi", $D, o(Rl(Te.value.extension)), 1)
                      ])) : x("", !0)
                    ]),
                    l("div", OD, [
                      l("a", {
                        class: "button primary",
                        href: Te.value.openUrl,
                        onClick: b[100] || (b[100] = (f) => Zn(Te.value, f))
                      }, o(u(t)("library", "Open")), 9, ND),
                      ve(u(qd), {
                        "aria-label": u(t)("library", "File and maintenance actions")
                      }, {
                        default: we(() => [
                          ve(u(Ic), {
                            href: Te.value.filesUrl
                          }, {
                            default: we(() => [
                              ae(o(u(t)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ve(u(Ic), {
                            href: Te.value.downloadUrl
                          }, {
                            default: we(() => [
                              ae(o(u(t)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ve(u(Ic), {
                            href: Te.value.detailsUrl
                          }, {
                            default: we(() => [
                              ae(o(u(t)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                (p(), Pe(fd, {
                  key: Te.value.id,
                  "item-ids": [Number(Te.value.id)],
                  "request-token": gt.value,
                  "lists-url": Wn.value
                }, null, 8, ["item-ids", "request-token", "lists-url"])),
                l("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": u(t)("library", "Publication detail sections")
                }, [
                  (p(), v(W, null, he(Og, (f) => l("button", {
                    key: f.key,
                    type: "button",
                    class: Ce({ active: Pa.value === f.key }),
                    "aria-current": Pa.value === f.key ? "page" : void 0,
                    onClick: (F) => Pa.value = f.key
                  }, o(u(t)("library", f.label)), 11, RD)), 64))
                ], 8, ID),
                Pa.value === "overview" ? (p(), v("section", LD, [
                  l("h3", PD, o(u(t)("library", "Overview")), 1),
                  sf.value ? (p(), v("p", DD, [
                    l("bdi", FD, o(sf.value), 1)
                  ])) : x("", !0),
                  l("dl", MD, [
                    Te.value.publication ? (p(), v("div", UD, [
                      l("dt", null, o(u(t)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: El("publication", Te.value.publication),
                          title: u(t)("library", "Filter catalogue by this series"),
                          onClick: b[101] || (b[101] = (f) => xl(f, "publication", Te.value.publication))
                        }, [
                          l("bdi", jD, o(Te.value.publication), 1)
                        ], 8, zD)
                      ])
                    ])) : x("", !0),
                    Te.value.publicationDate ? (p(), v("div", BD, [
                      l("dt", null, o(u(t)("library", "Date")), 1),
                      l("dd", null, [
                        Ma.value ? (p(), v("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: El("year", Ma.value),
                          title: u(t)("library", "Filter catalogue by this publication year"),
                          onClick: b[102] || (b[102] = (f) => xl(f, "year", Ma.value))
                        }, o(Ma.value), 9, HD)) : x("", !0),
                        Ma.value && Te.value.publicationDate !== Ma.value ? (p(), v("span", VD, " · ")) : x("", !0),
                        Te.value.publicationDate !== Ma.value ? (p(), v("span", qD, o(Te.value.publicationDate), 1)) : x("", !0)
                      ])
                    ])) : x("", !0),
                    Te.value.publisher ? (p(), v("div", KD, [
                      l("dt", null, o(u(t)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: El("publisher", Te.value.publisher),
                          title: u(t)("library", "Filter catalogue by this publisher"),
                          onClick: b[103] || (b[103] = (f) => xl(f, "publisher", Te.value.publisher))
                        }, [
                          l("bdi", WD, o(Te.value.publisher), 1)
                        ], 8, GD)
                      ])
                    ])) : x("", !0),
                    lf.value.length ? (p(), v("div", YD, [
                      l("dt", null, o(u(t)("library", "Language")), 1),
                      l("dd", ZD, [
                        (p(!0), v(W, null, he(lf.value, (f) => (p(), v("a", {
                          key: f,
                          class: "library-detail-facet-link",
                          href: El("language", f),
                          title: u(t)("library", "Filter catalogue by this language"),
                          onClick: (F) => xl(F, "language", f)
                        }, [
                          l("bdi", JD, o(f), 1)
                        ], 8, XD))), 128))
                      ])
                    ])) : x("", !0),
                    Te.value.shelf ? (p(), v("div", QD, [
                      l("dt", null, o(u(t)("library", "Shelf")), 1),
                      l("dd", null, o(Te.value.shelf), 1)
                    ])) : x("", !0)
                  ])
                ])) : Pa.value === "metadata" ? (p(), v("section", eF, [
                  cr.value ? (p(), Pe(pg, {
                    key: `${Te.value.id}:${Te.value.title}:${Te.value.creators}`,
                    "item-id": Number(Te.value.id),
                    "request-token": gt.value
                  }, null, 8, ["item-id", "request-token"])) : x("", !0),
                  l("h3", tF, o(u(t)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ae(Fg, ["prevent"])
                  }, [
                    l("label", null, [
                      ae(o(u(t)("library", "Title")), 1),
                      me(l("input", {
                        "onUpdate:modelValue": b[104] || (b[104] = (f) => mt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [We, mt.title]
                      ])
                    ]),
                    l("label", null, [
                      ve(Je, {
                        text: u(t)("library", "Book series name, stored separately from the existing Publication field.")
                      }, {
                        default: we(() => [
                          ae(o(u(t)("library", "Series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      me(l("input", {
                        "onUpdate:modelValue": b[105] || (b[105] = (f) => mt.series = f),
                        name: "series",
                        maxlength: "255"
                      }, null, 512), [
                        [We, mt.series]
                      ])
                    ]),
                    l("label", null, [
                      ve(Je, {
                        text: u(t)("library", "Text such as 01, 2.5 or Volume II. Leading zeros and labels are preserved.")
                      }, {
                        default: we(() => [
                          ae(o(u(t)("library", "Part in series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      me(l("input", {
                        "onUpdate:modelValue": b[106] || (b[106] = (f) => mt.seriesNumber = f),
                        name: "seriesNumber",
                        maxlength: "64"
                      }, null, 512), [
                        [We, mt.seriesNumber]
                      ])
                    ]),
                    l("label", null, [
                      ve(Je, {
                        text: u(t)("library", "A genre label such as Science fiction. Separate from subjects, file format and publication type.")
                      }, {
                        default: we(() => [
                          ae(o(u(t)("library", "Genre")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      me(l("input", {
                        "onUpdate:modelValue": b[107] || (b[107] = (f) => mt.genre = f),
                        name: "genre",
                        maxlength: "255"
                      }, null, 512), [
                        [We, mt.genre]
                      ])
                    ]),
                    l("label", null, [
                      ae(o(u(t)("library", "Publication date")), 1),
                      me(l("input", {
                        "onUpdate:modelValue": b[108] || (b[108] = (f) => mt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: u(t)("library", "e.g. 2026")
                      }, null, 8, iF), [
                        [We, mt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, o(u(t)("library", "Identifiers")), 1),
                      (p(!0), v(W, null, he(mt.identifiers, (f, F) => (p(), v("div", {
                        key: F,
                        class: "library-sidebar-identifier"
                      }, [
                        me(l("input", {
                          "onUpdate:modelValue": (ue) => f.scheme = ue,
                          "aria-label": u(t)("library", "Identifier type"),
                          placeholder: u(t)("library", "Identifier type")
                        }, null, 8, nF), [
                          [We, f.scheme]
                        ]),
                        me(l("input", {
                          "onUpdate:modelValue": (ue) => f.displayValue = ue,
                          "aria-label": u(t)("library", "Identifier value")
                        }, null, 8, aF), [
                          [We, f.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ue) => Dg(F)
                        }, o(u(t)("library", "Remove")), 9, rF)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Pg
                      }, o(u(t)("library", "Add identifier")), 1)
                    ]),
                    ve(Je, {
                      text: u(t)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")
                    }, {
                      default: we(() => [
                        ae(o(u(t)("library", "Maintenance")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"]),
                    Ui.error ? (p(), v("p", sF, o(Ui.error), 1)) : Ui.saved ? (p(), v("p", lF, o(u(t)("library", "Metadata saved.")), 1)) : x("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Ui.saving
                    }, o(Ui.saving ? u(t)("library", "Saving…") : u(t)("library", "Save metadata")), 9, oF)
                  ], 32),
                  $l(Te.value).length ? (p(), v("section", uF, [
                    l("h4", cF, [
                      ve(Je, {
                        text: u(t)("library", "Suggestions are optional and never replace your edits automatically.")
                      }, {
                        default: we(() => [
                          ae(o(u(t)("library", "Scanner suggestions")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("dl", null, [
                      (p(!0), v(W, null, he($l(Te.value), (f) => (p(), v("div", {
                        key: f.field
                      }, [
                        l("dt", null, o(f.field) + " · " + o(f.sourceProvenance), 1),
                        l("dd", null, [
                          ae(o(u(t)("library", "Current")) + ": " + o(f.currentValue || "—"), 1),
                          b[130] || (b[130] = l("br", null, null, -1)),
                          ae(o(u(t)("library", "Suggestion")) + ": " + o(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : x("", !0)
                ])) : (p(), v("section", dF, [
                  l("h3", fF, o(u(t)("library", "Activity")), 1),
                  l("dl", pF, [
                    l("div", null, [
                      l("dt", null, o(u(t)("library", "Scan status")), 1),
                      l("dd", null, o(Te.value.scanStatus || "—"), 1)
                    ]),
                    Te.value.workflowStatus ? (p(), v("div", hF, [
                      l("dt", null, o(u(t)("library", "Workflow")), 1),
                      l("dd", null, o(Te.value.workflowStatus), 1)
                    ])) : x("", !0),
                    Te.value.metadataSource ? (p(), v("div", vF, [
                      l("dt", null, o(u(t)("library", "Metadata source")), 1),
                      l("dd", null, o(Te.value.metadataSource), 1)
                    ])) : x("", !0),
                    Te.value.cachedPath ? (p(), v("div", bF, [
                      l("dt", null, o(u(t)("library", "File")), 1),
                      l("dd", gF, [
                        Te.value.openUrl ? (p(), v("a", {
                          key: 0,
                          href: Te.value.openUrl,
                          onClick: b[109] || (b[109] = (f) => Zn(Te.value, f))
                        }, [
                          l("bdi", yF, o(Te.value.cachedPath), 1)
                        ], 8, mF)) : (p(), v("bdi", _F, o(Te.value.cachedPath), 1))
                      ])
                    ])) : x("", !0)
                  ])
                ])),
                Te.value.authors?.length ? (p(), v("nav", {
                  key: 3,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Creators")
                }, [
                  (p(!0), v(W, null, he(Te.value.authors, (f) => (p(), v("a", {
                    key: f,
                    class: "button secondary",
                    href: pm(f)
                  }, [
                    l("bdi", SF, o(f), 1)
                  ], 8, kF))), 128))
                ], 8, wF)) : x("", !0),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": u(t)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Tl.value,
                    onClick: b[110] || (b[110] = (f) => Ol(Tl.value))
                  }, o(u(t)("library", "Previous item")), 9, TF),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Al.value,
                    onClick: b[111] || (b[111] = (f) => Ol(Al.value))
                  }, o(u(t)("library", "Next item")), 9, AF)
                ], 8, CF)
              ], 64)) : x("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function NF() {
  window.LibraryStartupWatchdog?.fail();
}
function IF(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = po("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !IF(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    duplicateSuggestions: po("library", "duplicateSuggestions", !1),
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  J1(OF, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  NF(), console.error("[library] Vue startup failed", e);
}
