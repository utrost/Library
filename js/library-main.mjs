// @__NO_SIDE_EFFECTS__
function id(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const et = {}, gr = [], Oi = () => {
}, Th = () => !1, Yo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zo = (e) => e.startsWith("onUpdate:"), Ct = Object.assign, nd = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, fm = Object.prototype.hasOwnProperty, nt = (e, t) => fm.call(e, t), Le = Array.isArray, aa = (e) => Qs(e) === "[object Map]", Nn = (e) => Qs(e) === "[object Set]", Ef = (e) => Qs(e) === "[object Date]", je = (e) => typeof e == "function", vt = (e) => typeof e == "string", Vi = (e) => typeof e == "symbol", at = (e) => e !== null && typeof e == "object", Ah = (e) => (at(e) || je(e)) && je(e.then) && je(e.catch), Eh = Object.prototype.toString, Qs = (e) => Eh.call(e), pm = (e) => Qs(e).slice(8, -1), xh = (e) => Qs(e) === "[object Object]", ad = (e) => vt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gs = /* @__PURE__ */ id(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Xo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, hm = /-\w/g, Jt = Xo(
  (e) => e.replace(hm, (t) => t.slice(1).toUpperCase())
), vm = /\B([A-Z])/g, Fn = Xo(
  (e) => e.replace(vm, "-$1").toLowerCase()
), Jo = Xo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Pu = Xo(
  (e) => e ? `on${Jo(e)}` : ""
), Ut = (e, t) => !Object.is(e, t), Bl = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, $h = (e, t, i, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: i
  });
}, Qo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, bm = (e) => {
  const t = vt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xf;
const eu = () => xf || (xf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fi(e) {
  if (Le(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i], a = vt(n) ? _m(n) : fi(n);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (vt(e) || at(e))
    return e;
}
const gm = /;(?![^(]*\))/g, mm = /:([^]+)/, ym = /\/\*[^]*?\*\//g;
function _m(e) {
  const t = {};
  return e.replace(ym, "").split(gm).forEach((i) => {
    if (i) {
      const n = i.split(mm);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function ke(e) {
  let t = "";
  if (vt(e))
    t = e;
  else if (Le(e))
    for (let i = 0; i < e.length; i++) {
      const n = ke(e[i]);
      n && (t += n + " ");
    }
  else if (at(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function Gl(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !vt(t) && (e.class = ke(t)), i && (e.style = fi(i)), e;
}
const wm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", km = /* @__PURE__ */ id(wm);
function Oh(e) {
  return !!e || e === "";
}
function Sm(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let n = 0; i && n < e.length; n++)
    i = Rn(e[n], t[n]);
  return i;
}
function $f(e, t) {
  if (e.size !== t.size) return !1;
  const i = Array.from(t), n = new Uint8Array(i.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < i.length; s++)
      if (!n[s] && Rn(a, i[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    n[r] = 1;
  }
  return !0;
}
function Rn(e, t) {
  if (e === t) return !0;
  let i = Ef(e), n = Ef(t);
  if (i || n)
    return i && n ? e.getTime() === t.getTime() : !1;
  if (i = Vi(e), n = Vi(t), i || n)
    return e === t;
  if (i = Le(e), n = Le(t), i || n)
    return i && n ? Sm(e, t) : !1;
  if (i = at(e), n = at(t), i || n) {
    if (!i || !n)
      return !1;
    if (i = aa(e), n = aa(t), i || n || (i = Nn(e), n = Nn(t), i || n))
      return i && n ? $f(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const d = e.hasOwnProperty(s), c = t.hasOwnProperty(s);
      if (d && !c || !d && c || !Rn(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function rd(e, t) {
  return e.findIndex((i) => Rn(i, t));
}
const Nh = (e) => !!(e && e.__v_isRef === !0), o = (e) => vt(e) ? e : e == null ? "" : Le(e) || at(e) && (e.toString === Eh || !je(e.toString)) ? Nh(e) ? o(e.value) : JSON.stringify(e, Rh, 2) : String(e), Rh = (e, t) => Nh(t) ? Rh(e, t.value) : aa(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [n, a], r) => (i[Du(n, r) + " =>"] = a, i),
    {}
  )
} : Nn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => Du(i))
} : Vi(t) ? Du(t) : at(t) && !Le(t) && !xh(t) ? String(t) : t, Du = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Vi(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function Cm(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Ft;
class Tm {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ft && (Ft.active ? (this.parent = Ft, this.index = (Ft.scopes || (Ft.scopes = [])).push(
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
      const i = Ft;
      try {
        return Ft = this, t();
      } finally {
        Ft = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ft, Ft = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ft === this)
        Ft = this.prevScope;
      else {
        let t = Ft;
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
function Am() {
  return Ft;
}
let ht;
const Fu = /* @__PURE__ */ new WeakSet();
class Ih {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ft && (Ft.active ? Ft.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fu.has(this) && (Fu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ph(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Of(this), Dh(this);
    const t = ht, i = Bi;
    ht = this, Bi = !0;
    try {
      return this.fn();
    } finally {
      Fh(this), ht = t, Bi = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        od(t);
      this.deps = this.depsTail = void 0, Of(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Fu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    _c(this) && this.run();
  }
  get dirty() {
    return _c(this);
  }
}
let Lh = 0, ms, ys;
function Ph(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ys, ys = e;
    return;
  }
  e.next = ms, ms = e;
}
function sd() {
  Lh++;
}
function ld() {
  if (--Lh > 0)
    return;
  if (ys) {
    let t = ys;
    for (ys = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; ms; ) {
    let t = ms;
    for (ms = void 0; t; ) {
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
function Dh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fh(e) {
  let t, i = e.depsTail, n = i;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === i && (i = a), od(n), Em(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = i;
}
function _c(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Mh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Mh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Is) || (e.globalVersion = Is, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_c(e))))
    return;
  e.flags |= 2;
  const t = e.dep, i = ht, n = Bi;
  ht = e, Bi = !0;
  try {
    Dh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Ut(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ht = i, Bi = n, Fh(e), e.flags &= -3;
  }
}
function od(e, t = !1) {
  const { dep: i, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), i.subs === e && (i.subs = n, !n && i.computed)) {
    i.computed.flags &= -5;
    for (let r = i.computed.deps; r; r = r.nextDep)
      od(r, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function Em(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let Bi = !0;
const Uh = [];
function In() {
  Uh.push(Bi), Bi = !1;
}
function Ln() {
  const e = Uh.pop();
  Bi = e === void 0 ? !0 : e;
}
function Of(e) {
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
let Is = 0;
class xm {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class tu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ht || !Bi || ht === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== ht)
      i = this.activeLink = new xm(ht, this), ht.deps ? (i.prevDep = ht.depsTail, ht.depsTail.nextDep = i, ht.depsTail = i) : ht.deps = ht.depsTail = i, zh(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const n = i.nextDep;
      n.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = n), i.prevDep = ht.depsTail, i.nextDep = void 0, ht.depsTail.nextDep = i, ht.depsTail = i, ht.deps === i && (ht.deps = n);
    }
    return i;
  }
  trigger(t) {
    this.version++, Is++, this.notify(t);
  }
  notify(t) {
    sd();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      ld();
    }
  }
}
function zh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        zh(n);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const wc = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ Symbol(
  ""
), kc = /* @__PURE__ */ Symbol(
  ""
), Ls = /* @__PURE__ */ Symbol(
  ""
);
function Yt(e, t, i) {
  if (Bi && ht) {
    let n = wc.get(e);
    n || wc.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(i);
    a || (n.set(i, a = new tu()), a.map = n, a.key = i), a.track();
  }
}
function Cn(e, t, i, n, a, r) {
  const s = wc.get(e);
  if (!s) {
    Is++;
    return;
  }
  const d = (c) => {
    c && c.trigger();
  };
  if (sd(), t === "clear")
    s.forEach(d);
  else {
    const c = Le(e), m = c && ad(i);
    if (c && i === "length") {
      const v = Number(n);
      s.forEach((y, g) => {
        (g === "length" || g === Ls || !Vi(g) && g >= v) && d(y);
      });
    } else
      switch ((i !== void 0 || s.has(void 0)) && d(s.get(i)), m && d(s.get(Ls)), t) {
        case "add":
          c ? m && d(s.get("length")) : (d(s.get(ja)), aa(e) && d(s.get(kc)));
          break;
        case "delete":
          c || (d(s.get(ja)), aa(e) && d(s.get(kc)));
          break;
        case "set":
          aa(e) && d(s.get(ja));
          break;
      }
  }
  ld();
}
function ur(e) {
  const t = /* @__PURE__ */ tt(e);
  return t === e ? t : (Yt(t, "iterate", Ls), /* @__PURE__ */ Ni(e) ? t : t.map(qi));
}
function iu(e) {
  return Yt(e = /* @__PURE__ */ tt(e), "iterate", Ls), e;
}
function an(e, t) {
  return /* @__PURE__ */ Pn(e) ? Cr(/* @__PURE__ */ Ba(e) ? qi(t) : t) : qi(t);
}
const $m = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mu(this, Symbol.iterator, (e) => an(this, e));
  },
  concat(...e) {
    return ur(this).concat(
      ...e.map((t) => Le(t) ? ur(t) : t)
    );
  },
  entries() {
    return Mu(this, "entries", (e) => (e[1] = an(this, e[1]), e));
  },
  every(e, t) {
    return gn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return gn(
      this,
      "filter",
      e,
      t,
      (i) => i.map((n) => an(this, n)),
      arguments
    );
  },
  find(e, t) {
    return gn(
      this,
      "find",
      e,
      t,
      (i) => an(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return gn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return gn(
      this,
      "findLast",
      e,
      t,
      (i) => an(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return gn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return gn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Uu(this, "includes", e);
  },
  indexOf(...e) {
    return Uu(this, "indexOf", e);
  },
  join(e) {
    return ur(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Uu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return gn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return es(this, "pop");
  },
  push(...e) {
    return es(this, "push", e);
  },
  reduce(e, ...t) {
    return Nf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Nf(this, "reduceRight", e, t);
  },
  shift() {
    return es(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return gn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return es(this, "splice", e);
  },
  toReversed() {
    return ur(this).toReversed();
  },
  toSorted(e) {
    return ur(this).toSorted(e);
  },
  toSpliced(...e) {
    return ur(this).toSpliced(...e);
  },
  unshift(...e) {
    return es(this, "unshift", e);
  },
  values() {
    return Mu(this, "values", (e) => an(this, e));
  }
};
function Mu(e, t, i) {
  const n = iu(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Ni(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = i(r.value)), r;
  }), a;
}
const Om = Array.prototype;
function gn(e, t, i, n, a, r) {
  const s = iu(e), d = s !== e && !/* @__PURE__ */ Ni(e), c = s[t];
  if (c !== Om[t]) {
    const y = c.apply(e, r);
    return d ? qi(y) : y;
  }
  let m = i;
  s !== e && (d ? m = function(y, g) {
    return i.call(this, an(e, y), g, e);
  } : i.length > 2 && (m = function(y, g) {
    return i.call(this, y, g, e);
  }));
  const v = c.call(s, m, n);
  return d && a ? a(v) : v;
}
function Nf(e, t, i, n) {
  const a = iu(e), r = a !== e && !/* @__PURE__ */ Ni(e);
  let s = i, d = !1;
  a !== e && (r ? (d = n.length === 0, s = function(m, v, y) {
    return d && (d = !1, m = an(e, m)), i.call(this, m, an(e, v), y, e);
  }) : i.length > 3 && (s = function(m, v, y) {
    return i.call(this, m, v, y, e);
  }));
  const c = a[t](s, ...n);
  return d ? an(e, c) : c;
}
function Uu(e, t, i) {
  const n = /* @__PURE__ */ tt(e);
  Yt(n, "iterate", Ls);
  const a = n[t](...i);
  return (a === -1 || a === !1) && /* @__PURE__ */ dd(i[0]) ? (i[0] = /* @__PURE__ */ tt(i[0]), n[t](...i)) : a;
}
function es(e, t, i = []) {
  In(), sd();
  const n = (/* @__PURE__ */ tt(e))[t].apply(e, i);
  return ld(), Ln(), n;
}
const Nm = /* @__PURE__ */ id("__proto__,__v_isRef,__isVue"), jh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Vi)
);
function Rm(e) {
  Vi(e) || (e = String(e));
  const t = /* @__PURE__ */ tt(this);
  return Yt(t, "has", e), t.hasOwnProperty(e);
}
class Bh {
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
      return n === (a ? r ? Bm : Kh : r ? qh : Vh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = Le(t);
    if (!a) {
      let c;
      if (s && (c = $m[i]))
        return c;
      if (i === "hasOwnProperty")
        return Rm;
    }
    const d = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Qt(t) ? t : n
    );
    if ((Vi(i) ? jh.has(i) : Nm(i)) || (a || Yt(t, "get", i), r))
      return d;
    if (/* @__PURE__ */ Qt(d)) {
      const c = s && ad(i) ? d : d.value;
      return a && at(c) ? /* @__PURE__ */ Ps(c) : c;
    }
    return at(d) ? a ? /* @__PURE__ */ Ps(d) : /* @__PURE__ */ Mt(d) : d;
  }
}
class Hh extends Bh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, n, a) {
    let r = t[i];
    const s = Le(t) && ad(i);
    if (!this._isShallow) {
      const m = /* @__PURE__ */ Pn(r);
      if (!/* @__PURE__ */ Ni(n) && !/* @__PURE__ */ Pn(n) && (r = /* @__PURE__ */ tt(r), n = /* @__PURE__ */ tt(n)), !s && /* @__PURE__ */ Qt(r) && !/* @__PURE__ */ Qt(n))
        return m || (r.value = n), !0;
    }
    const d = s ? Number(i) < t.length : nt(t, i), c = Reflect.set(
      t,
      i,
      n,
      /* @__PURE__ */ Qt(t) ? t : a
    );
    return t === /* @__PURE__ */ tt(a) && c && (d ? Ut(n, r) && Cn(t, "set", i, n) : Cn(t, "add", i, n)), c;
  }
  deleteProperty(t, i) {
    const n = nt(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && n && Cn(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const n = Reflect.has(t, i);
    return (!Vi(i) || !jh.has(i)) && Yt(t, "has", i), n;
  }
  ownKeys(t) {
    return Yt(
      t,
      "iterate",
      Le(t) ? "length" : ja
    ), Reflect.ownKeys(t);
  }
}
class Im extends Bh {
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
const Lm = /* @__PURE__ */ new Hh(), Pm = /* @__PURE__ */ new Im(), Dm = /* @__PURE__ */ new Hh(!0);
const Sc = (e) => e, xl = (e) => Reflect.getPrototypeOf(e);
function Fm(e, t, i) {
  return function(...n) {
    const a = this.__v_raw, r = /* @__PURE__ */ tt(a), s = aa(r), d = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, m = a[e](...n), v = i ? Sc : t ? Cr : qi;
    return !t && Yt(
      r,
      "iterate",
      c ? kc : ja
    ), Ct(
      // inheriting all iterator properties
      Object.create(m),
      {
        // iterator protocol
        next() {
          const { value: y, done: g } = m.next();
          return g ? { value: y, done: g } : {
            value: d ? [v(y[0]), v(y[1])] : v(y),
            done: g
          };
        }
      }
    );
  };
}
function $l(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Mm(e, t) {
  const i = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ tt(r), d = /* @__PURE__ */ tt(a);
      e || (Ut(a, d) && Yt(s, "get", a), Yt(s, "get", d));
      const { has: c } = xl(s), m = t ? Sc : e ? Cr : qi;
      if (c.call(s, a))
        return m(r.get(a));
      if (c.call(s, d))
        return m(r.get(d));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Yt(/* @__PURE__ */ tt(a), "iterate", ja), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ tt(r), d = /* @__PURE__ */ tt(a);
      return e || (Ut(a, d) && Yt(s, "has", a), Yt(s, "has", d)), a === d ? r.has(a) : r.has(a) || r.has(d);
    },
    forEach(a, r) {
      const s = this, d = s.__v_raw, c = /* @__PURE__ */ tt(d), m = t ? Sc : e ? Cr : qi;
      return !e && Yt(c, "iterate", ja), d.forEach((v, y) => a.call(r, m(v), m(y), s));
    }
  };
  return Ct(
    i,
    e ? {
      add: $l("add"),
      set: $l("set"),
      delete: $l("delete"),
      clear: $l("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ tt(this), s = xl(r), d = /* @__PURE__ */ tt(a), c = !t && !/* @__PURE__ */ Ni(a) && !/* @__PURE__ */ Pn(a) ? d : a;
        return s.has.call(r, c) || Ut(a, c) && s.has.call(r, a) || Ut(d, c) && s.has.call(r, d) || (r.add(c), Cn(r, "add", c, c)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Ni(r) && !/* @__PURE__ */ Pn(r) && (r = /* @__PURE__ */ tt(r));
        const s = /* @__PURE__ */ tt(this), { has: d, get: c } = xl(s);
        let m = d.call(s, a);
        m || (a = /* @__PURE__ */ tt(a), m = d.call(s, a));
        const v = c.call(s, a);
        return s.set(a, r), m ? Ut(r, v) && Cn(s, "set", a, r) : Cn(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ tt(this), { has: s, get: d } = xl(r);
        let c = s.call(r, a);
        c || (a = /* @__PURE__ */ tt(a), c = s.call(r, a)), d && d.call(r, a);
        const m = r.delete(a);
        return c && Cn(r, "delete", a, void 0), m;
      },
      clear() {
        const a = /* @__PURE__ */ tt(this), r = a.size !== 0, s = a.clear();
        return r && Cn(
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
    i[a] = Fm(a, e, t);
  }), i;
}
function ud(e, t) {
  const i = Mm(e, t);
  return (n, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    nt(i, a) && a in n ? i : n,
    a,
    r
  );
}
const Um = {
  get: /* @__PURE__ */ ud(!1, !1)
}, zm = {
  get: /* @__PURE__ */ ud(!1, !0)
}, jm = {
  get: /* @__PURE__ */ ud(!0, !1)
};
const Vh = /* @__PURE__ */ new WeakMap(), qh = /* @__PURE__ */ new WeakMap(), Kh = /* @__PURE__ */ new WeakMap(), Bm = /* @__PURE__ */ new WeakMap();
function Hm(e) {
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
  return /* @__PURE__ */ Pn(e) ? e : cd(
    e,
    !1,
    Lm,
    Um,
    Vh
  );
}
// @__NO_SIDE_EFFECTS__
function Vm(e) {
  return cd(
    e,
    !1,
    Dm,
    zm,
    qh
  );
}
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  return cd(
    e,
    !0,
    Pm,
    jm,
    Kh
  );
}
function cd(e, t, i, n, a) {
  if (!at(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Hm(pm(e));
  if (s === 0)
    return e;
  const d = new Proxy(
    e,
    s === 2 ? n : i
  );
  return a.set(e, d), d;
}
// @__NO_SIDE_EFFECTS__
function Ba(e) {
  return /* @__PURE__ */ Pn(e) ? /* @__PURE__ */ Ba(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Pn(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ni(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function dd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ tt(t) : e;
}
function qm(e) {
  return !nt(e, "__v_skip") && Object.isExtensible(e) && $h(e, "__v_skip", !0), e;
}
const qi = (e) => at(e) ? /* @__PURE__ */ Mt(e) : e, Cr = (e) => at(e) ? /* @__PURE__ */ Ps(e) : e;
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function G(e) {
  return Wh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Gh(e) {
  return Wh(e, !0);
}
function Wh(e, t) {
  return /* @__PURE__ */ Qt(e) ? e : new Km(e, t);
}
class Km {
  constructor(t, i) {
    this.dep = new tu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ tt(t), this._value = i ? t : qi(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ni(t) || /* @__PURE__ */ Pn(t);
    t = n ? t : /* @__PURE__ */ tt(t), Ut(t, i) && (this._rawValue = t, this._value = n ? t : qi(t), this.dep.trigger());
  }
}
function u(e) {
  return /* @__PURE__ */ Qt(e) ? e.value : e;
}
function xn(e) {
  return je(e) ? e() : u(e);
}
const Gm = {
  get: (e, t, i) => t === "__v_raw" ? e : u(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const a = e[t];
    return /* @__PURE__ */ Qt(a) && !/* @__PURE__ */ Qt(i) ? (a.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function Yh(e) {
  return /* @__PURE__ */ Ba(e) ? e : new Proxy(e, Gm);
}
class Wm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new tu(), { get: n, set: a } = t(i.track.bind(i), i.trigger.bind(i));
    this._get = n, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Ym(e) {
  return new Wm(e);
}
class Zm {
  constructor(t, i, n) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new tu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Is - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ht !== this)
      return Ph(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Mh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Xm(e, t, i = !1) {
  let n, a;
  return je(e) ? n = e : (n = e.get, a = e.set), new Zm(n, a, i);
}
const Ol = {}, Wl = /* @__PURE__ */ new WeakMap();
let La;
function Jm(e, t = !1, i = La) {
  if (i) {
    let n = Wl.get(i);
    n || Wl.set(i, n = []), n.push(e);
  }
}
function Qm(e, t, i = et) {
  const { immediate: n, deep: a, once: r, scheduler: s, augmentJob: d, call: c } = i, m = (N) => a ? N : /* @__PURE__ */ Ni(N) || a === !1 || a === 0 ? Tn(N, 1) : Tn(N);
  let v, y, g, k, T = !1, C = !1;
  if (/* @__PURE__ */ Qt(e) ? (y = () => e.value, T = /* @__PURE__ */ Ni(e)) : /* @__PURE__ */ Ba(e) ? (y = () => m(e), T = !0) : Le(e) ? (C = !0, T = e.some((N) => /* @__PURE__ */ Ba(N) || /* @__PURE__ */ Ni(N)), y = () => e.map((N) => {
    if (/* @__PURE__ */ Qt(N))
      return N.value;
    if (/* @__PURE__ */ Ba(N))
      return m(N);
    if (je(N))
      return c ? c(N, 2) : N();
  })) : je(e) ? t ? y = c ? () => c(e, 2) : e : y = () => {
    if (g) {
      In();
      try {
        g();
      } finally {
        Ln();
      }
    }
    const N = La;
    La = v;
    try {
      return c ? c(e, 3, [k]) : e(k);
    } finally {
      La = N;
    }
  } : y = Oi, t && a) {
    const N = y, ce = a === !0 ? 1 / 0 : a;
    y = () => Tn(N(), ce);
  }
  const $ = Am(), I = () => {
    v.stop(), $ && $.active && nd($.effects, v);
  };
  if (r && t) {
    const N = t;
    t = (...ce) => {
      const J = N(...ce);
      return I(), J;
    };
  }
  let D = C ? new Array(e.length).fill(Ol) : Ol;
  const P = (N) => {
    if (!(!(v.flags & 1) || !v.dirty && !N))
      if (t) {
        const ce = v.run();
        if (N || a || T || (C ? ce.some((J, x) => Ut(J, D[x])) : Ut(ce, D))) {
          g && g();
          const J = La;
          La = v;
          try {
            const x = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              D === Ol ? void 0 : C && D[0] === Ol ? [] : D,
              k
            ];
            D = ce, c ? c(t, 3, x) : (
              // @ts-expect-error
              t(...x)
            );
          } finally {
            La = J;
          }
        }
      } else
        v.run();
  };
  return d && d(P), v = new Ih(y), v.scheduler = s ? () => s(P, !1) : P, k = (N) => Jm(N, !1, v), g = v.onStop = () => {
    const N = Wl.get(v);
    if (N) {
      if (c)
        c(N, 4);
      else
        for (const ce of N) ce();
      Wl.delete(v);
    }
  }, t ? n ? P(!0) : D = v.run() : s ? s(P.bind(null, !0), !0) : v.run(), I.pause = v.pause.bind(v), I.resume = v.resume.bind(v), I.stop = I, I;
}
function Tn(e, t = 1 / 0, i) {
  if (t <= 0 || !at(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ Qt(e))
    Tn(e.value, t, i);
  else if (Le(e))
    for (let n = 0; n < e.length; n++)
      Tn(e[n], t, i);
  else if (Nn(e) || aa(e))
    e.forEach((n) => {
      Tn(n, t, i);
    });
  else if (xh(e)) {
    for (const n in e)
      Tn(e[n], t, i);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Tn(e[n], t, i);
  }
  return e;
}
function el(e, t, i, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    nu(a, t, i);
  }
}
function Ri(e, t, i, n) {
  if (je(e)) {
    const a = el(e, t, i, n);
    return a && Ah(a) && a.catch((r) => {
      nu(r, t, i);
    }), a;
  }
  if (Le(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Ri(e[r], t, i, n));
    return a;
  }
}
function nu(e, t, i, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || et;
  if (t) {
    let d = t.parent;
    const c = t.proxy, m = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; d; ) {
      const v = d.ec;
      if (v) {
        for (let y = 0; y < v.length; y++)
          if (v[y](e, c, m) === !1)
            return;
      }
      d = d.parent;
    }
    if (r) {
      In(), el(r, null, 10, [
        e,
        c,
        m
      ]), Ln();
      return;
    }
  }
  ey(e, i, a, n, s);
}
function ey(e, t, i, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const li = [];
let en = -1;
const mr = [];
let ea = null, hr = 0;
const Zh = /* @__PURE__ */ Promise.resolve();
let Yl = null;
function xt(e) {
  const t = Yl || Zh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ty(e) {
  let t = en + 1, i = li.length;
  for (; t < i; ) {
    const n = t + i >>> 1, a = li[n], r = Ds(a);
    r < e || r === e && a.flags & 2 ? t = n + 1 : i = n;
  }
  return t;
}
function fd(e) {
  if (!(e.flags & 1)) {
    const t = Ds(e), i = li[li.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ds(i) ? li.push(e) : li.splice(ty(t), 0, e), e.flags |= 1, Xh();
  }
}
function Xh() {
  Yl || (Yl = Zh.then(ev));
}
function Jh(e) {
  if (!Le(e))
    ea && e.id === -1 ? ea.splice(hr + 1, 0, e) : e.flags & 1 || (mr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      mr.push(e[t]);
  Xh();
}
function Rf(e, t, i = en + 1) {
  for (; i < li.length; i++) {
    const n = li[i];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      li.splice(i, 1), i--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Qh(e) {
  if (mr.length) {
    const t = [...new Set(mr)].sort(
      (i, n) => Ds(i) - Ds(n)
    );
    if (mr.length = 0, ea) {
      for (let i = 0; i < t.length; i++)
        ea.push(t[i]);
      return;
    }
    for (ea = t, hr = 0; hr < ea.length; hr++) {
      const i = ea[hr];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    ea = null, hr = 0;
  }
}
const Ds = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ev(e) {
  try {
    for (en = 0; en < li.length; en++) {
      const t = li[en];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), el(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; en < li.length; en++) {
      const t = li[en];
      t && (t.flags &= -2);
    }
    en = -1, li.length = 0, Qh(), Yl = null, (li.length || mr.length) && ev();
  }
}
let jt = null, au = null;
function Zl(e) {
  const t = jt;
  return jt = e, au = e && e.type.__scopeId || null, t;
}
function iy(e) {
  au = e;
}
function ny() {
  au = null;
}
const ay = (e) => me;
function me(e, t = jt, i) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && to(-1);
    const r = Zl(t), s = $n.length;
    let d;
    try {
      d = e(...a);
    } finally {
      for (let c = $n.length; c > s; c--) _d();
      Zl(r), n._d && to(1);
    }
    return d;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ge(e, t) {
  if (jt === null)
    return e;
  const i = cu(jt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, d, c = et] = t[a];
    r && (je(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Tn(s), n.push({
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
function Ea(e, t, i, n) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const d = a[s];
    r && (d.oldValue = r[s].value);
    let c = d.dir[n];
    c && (In(), Ri(c, i, 8, [
      e.el,
      d,
      e,
      t
    ]), Ln());
  }
}
function Ei(e, t) {
  if (Xt) {
    let i = Xt.provides;
    const n = Xt.parent && Xt.parent.provides;
    n === i && (i = Xt.provides = Object.create(n)), i[e] = t;
  }
}
function Zt(e, t, i = !1) {
  const n = ca();
  if (n || _r) {
    let a = _r ? _r._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && je(t) ? t.call(n && n.proxy) : t;
  }
}
const ry = /* @__PURE__ */ Symbol.for("v-scx"), sy = () => Zt(ry);
function ly(e, t) {
  return ru(e, null, t);
}
function oy(e, t) {
  return ru(
    e,
    null,
    { flush: "sync" }
  );
}
function qe(e, t, i) {
  return ru(e, t, i);
}
function ru(e, t, i = et) {
  const { immediate: n, deep: a, flush: r, once: s } = i, d = Ct({}, i), c = t && n || !t && r !== "post";
  let m;
  if (Bs) {
    if (r === "sync") {
      const k = sy();
      m = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!c) {
      const k = () => {
      };
      return k.stop = Oi, k.resume = Oi, k.pause = Oi, k;
    }
  }
  const v = Xt;
  d.call = (k, T, C) => Ri(k, v, T, C);
  let y = !1;
  r === "post" ? d.scheduler = (k) => {
    si(k, v && v.suspense);
  } : r !== "sync" && (y = !0, d.scheduler = (k, T) => {
    T ? k() : fd(k);
  }), d.augmentJob = (k) => {
    t && (k.flags |= 4), y && (k.flags |= 2, v && (k.id = v.uid, k.i = v));
  };
  const g = Qm(e, t, d);
  return Bs && (m ? m.push(g) : c && g()), g;
}
function uy(e, t, i) {
  const n = this.proxy, a = vt(e) ? e.includes(".") ? tv(n, e) : () => n[e] : e.bind(n, n);
  let r;
  je(t) ? r = t : (r = t.handler, i = t);
  const s = nl(this), d = ru(a, r.bind(n), i);
  return s(), d;
}
function tv(e, t) {
  const i = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < i.length && n; a++)
      n = n[i[a]];
    return n;
  };
}
const Xn = /* @__PURE__ */ new WeakMap(), iv = /* @__PURE__ */ Symbol("_vte"), su = (e) => e.__isTeleport, Da = (e) => e && (e.disabled || e.disabled === ""), cy = (e) => e && (e.defer || e.defer === ""), If = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Lf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Cc = (e, t) => {
  const i = e && e.to;
  return vt(i) ? t ? t(i) : null : i;
}, dy = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, n, a, r, s, d, c, m) {
    const {
      mc: v,
      pc: y,
      pbc: g,
      o: { insert: k, querySelector: T, createText: C, createComment: $, parentNode: I }
    } = m, D = Da(t.props);
    let { dynamicChildren: P } = t;
    const N = (x, q, B) => {
      x.shapeFlag & 16 && v(
        x.children,
        q,
        B,
        a,
        r,
        s,
        d,
        c
      );
    }, ce = (x = t) => {
      const q = Da(x.props), B = x.target = Cc(x.props, T), Y = Tc(B, x, C, k);
      B && (s !== "svg" && If(B) ? s = "svg" : s !== "mathml" && Lf(B) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(B), q || (N(x, B, Y), cs(x, !1)));
    }, J = (x) => {
      const q = () => {
        if (Xn.get(x) === q) {
          if (Xn.delete(x), Da(x.props)) {
            const B = I(x.el) || i;
            N(x, B, x.anchor), cs(x, !0);
          }
          ce(x);
        }
      };
      Xn.set(x, q), si(q, r);
    };
    if (e == null) {
      const x = t.el = C(""), q = t.anchor = C("");
      if (k(x, i, n), k(q, i, n), cy(t.props) || r && r.pendingBranch) {
        J(t);
        return;
      }
      D && (N(t, i, q), cs(t, !0)), ce();
    } else {
      t.el = e.el;
      const x = t.anchor = e.anchor, q = Xn.get(e);
      if (q) {
        q.flags |= 8, Xn.delete(e), J(t);
        return;
      }
      t.targetStart = e.targetStart;
      const B = t.target = e.target, Y = t.targetAnchor = e.targetAnchor, se = Da(e.props), H = se ? i : B, K = se ? x : Y;
      if (s === "svg" || If(B) ? s = "svg" : (s === "mathml" || Lf(B)) && (s = "mathml"), P ? (g(
        e.dynamicChildren,
        P,
        H,
        a,
        r,
        s,
        d
      ), yd(e, t, !0)) : c || y(
        e,
        t,
        H,
        K,
        a,
        r,
        s,
        d,
        !1
      ), D)
        se ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Nl(
          t,
          i,
          x,
          m,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const R = Cc(t.props, T);
        R && (t.target = R, Nl(
          t,
          R,
          null,
          m,
          0
        ));
      } else se && Nl(
        t,
        B,
        Y,
        m,
        1
      );
      cs(t, D);
    }
  },
  remove(e, t, i, { um: n, o: { remove: a } }, r) {
    const {
      shapeFlag: s,
      children: d,
      anchor: c,
      targetStart: m,
      targetAnchor: v,
      target: y,
      props: g
    } = e, k = Da(g), T = r || !k, C = Xn.get(e);
    if (C && (C.flags |= 8, Xn.delete(e)), y && (a(m), a(v)), r && a(c), !C && (k || y) && s & 16)
      for (let $ = 0; $ < d.length; $++) {
        const I = d[$];
        n(
          I,
          t,
          i,
          T,
          !!I.dynamicChildren
        );
      }
  },
  move: Nl,
  hydrate: fy
};
function Nl(e, t, i, { o: { insert: n }, m: a }, r = 2) {
  r === 0 && n(e.targetAnchor, t, i);
  const { el: s, anchor: d, shapeFlag: c, children: m, props: v } = e, y = r === 2;
  if (y && n(s, t, i), !Xn.has(e) && (!y || Da(v)) && c & 16)
    for (let g = 0; g < m.length; g++)
      a(
        m[g],
        t,
        i,
        2
      );
  y && n(d, t, i);
}
function fy(e, t, i, n, a, r, {
  o: { nextSibling: s, parentNode: d, querySelector: c, insert: m, createText: v }
}, y) {
  function g($, I) {
    let D = I;
    for (; D; ) {
      if (D && D.nodeType === 8) {
        if (D.data === "teleport start anchor")
          t.targetStart = D;
        else if (D.data === "teleport anchor") {
          t.targetAnchor = D, $._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      D = s(D);
    }
  }
  function k($, I) {
    I.anchor = y(
      s($),
      I,
      d($),
      i,
      n,
      a,
      r
    );
  }
  const T = t.target = Cc(
    t.props,
    c
  ), C = Da(t.props);
  if (T) {
    const $ = T._lpa || T.firstChild;
    t.shapeFlag & 16 && (C ? (k(e, t), g(T, $), t.targetAnchor || Tc(
      T,
      t,
      v,
      m,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      d(e) === T ? e : null
    )) : (t.anchor = s(e), g(T, $), t.targetAnchor || Tc(T, t, v, m), y(
      $ && s($),
      t,
      T,
      i,
      n,
      a,
      r
    ))), cs(t, C);
  } else C && t.shapeFlag & 16 && (k(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const pd = dy;
function cs(e, t) {
  const i = e.ctx;
  if (i && i.ut) {
    let n, a;
    for (t ? (n = e.el, a = e.anchor) : (n = e.targetStart, a = e.targetAnchor); n && n !== a; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", i.uid), n = n.nextSibling;
    i.ut();
  }
}
function Tc(e, t, i, n, a = null) {
  const r = t.targetStart = i(""), s = t.targetAnchor = i("");
  return r[iv] = s, e && (n(r, e, a), n(s, e, a)), s;
}
const xi = /* @__PURE__ */ Symbol("_leaveCb"), ts = /* @__PURE__ */ Symbol("_enterCb");
function py() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Et(() => {
    e.isMounted = !0;
  }), wi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Si = [Function, Array], nv = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Si,
  onEnter: Si,
  onAfterEnter: Si,
  onEnterCancelled: Si,
  // leave
  onBeforeLeave: Si,
  onLeave: Si,
  onAfterLeave: Si,
  onLeaveCancelled: Si,
  // appear
  onBeforeAppear: Si,
  onAppear: Si,
  onAfterAppear: Si,
  onAppearCancelled: Si
}, av = (e) => {
  const t = e.subTree;
  return t.component ? av(t.component) : t;
}, hy = {
  name: "BaseTransition",
  props: nv,
  setup(e, { slots: t }) {
    const i = ca(), n = py();
    return () => {
      const a = t.default && lv(t.default(), !0), r = a && a.length ? rv(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? E() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ tt(e), { mode: d } = s;
      if (n.isLeaving)
        return zu(r);
      const c = Xl(r);
      if (!c)
        return zu(r);
      let m = Ac(
        c,
        s,
        n,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (y) => m = y
      );
      c.type !== zt && Fs(c, m);
      let v = i.subTree && Xl(i.subTree);
      if (v && v.type !== zt && !Fa(v, c) && av(i).type !== zt) {
        let y = Ac(
          v,
          s,
          n,
          i
        );
        if (Fs(v, y), d === "out-in" && c.type !== zt)
          return n.isLeaving = !0, y.afterLeave = () => {
            n.isLeaving = !1, i.job.flags & 8 || i.update(), delete y.afterLeave, v = void 0;
          }, zu(r);
        d === "in-out" && c.type !== zt ? y.delayLeave = (g, k, T) => {
          const C = sv(
            n,
            v
          );
          C[String(v.key)] = v, g[xi] = () => {
            k(), g[xi] = void 0, delete m.delayedLeave, v = void 0;
          }, m.delayedLeave = () => {
            T(), delete m.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return r;
    };
  }
};
function rv(e) {
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
const vy = hy;
function sv(e, t) {
  const { leavingVNodes: i } = e;
  let n = i.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), i.set(t.type, n)), n;
}
function Ac(e, t, i, n, a) {
  const {
    appear: r,
    mode: s,
    persisted: d = !1,
    onBeforeEnter: c,
    onEnter: m,
    onAfterEnter: v,
    onEnterCancelled: y,
    onBeforeLeave: g,
    onLeave: k,
    onAfterLeave: T,
    onLeaveCancelled: C,
    onBeforeAppear: $,
    onAppear: I,
    onAfterAppear: D,
    onAppearCancelled: P
  } = t, N = String(e.key), ce = sv(i, e), J = (B, Y) => {
    B && Ri(
      B,
      n,
      9,
      Y
    );
  }, x = (B, Y) => {
    const se = Y[1];
    J(B, Y), Le(B) ? B.every((H) => H.length <= 1) && se() : B.length <= 1 && se();
  }, q = {
    mode: s,
    persisted: d,
    beforeEnter(B) {
      let Y = c;
      if (!i.isMounted)
        if (r)
          Y = $ || c;
        else
          return;
      B[xi] && B[xi](
        !0
        /* cancelled */
      );
      const se = ce[N];
      se && Fa(e, se) && se.el[xi] && se.el[xi](), J(Y, [B]);
    },
    enter(B) {
      if (ce[N] === e) return;
      let Y = m, se = v, H = y;
      if (!i.isMounted)
        if (r)
          Y = I || m, se = D || v, H = P || y;
        else
          return;
      let K = !1;
      B[ts] = (V) => {
        K || (K = !0, V ? J(H, [B]) : J(se, [B]), q.delayedLeave && q.delayedLeave(), B[ts] = void 0);
      };
      const R = B[ts].bind(null, !1);
      Y ? x(Y, [B, R]) : R();
    },
    leave(B, Y) {
      const se = String(e.key);
      if (B[ts] && B[ts](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return Y();
      J(g, [B]);
      let H = !1;
      B[xi] = (R) => {
        H || (H = !0, Y(), R ? J(C, [B]) : J(T, [B]), B[xi] = void 0, ce[se] === e && delete ce[se]);
      };
      const K = B[xi].bind(null, !1);
      ce[se] = e, k ? x(k, [B, K]) : K();
    },
    clone(B) {
      const Y = Ac(
        B,
        t,
        i,
        n,
        a
      );
      return a && a(Y), Y;
    }
  };
  return q;
}
function zu(e) {
  if (lu(e))
    return e = oa(e), e.children = null, e;
}
function Xl(e) {
  if (!lu(e))
    return su(e.type) && e.children ? rv(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: i } = e;
  if (i) {
    if (t & 16)
      return i[0];
    if (t & 32 && je(i.default))
      return i.default();
  }
}
function Fs(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const i = e.component.subTree;
    Fs(
      su(i.type) && Xl(i) || i,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function lv(e, t = !1, i) {
  let n = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const d = i == null ? s.key : String(i) + String(s.key != null ? s.key : r);
    s.type === W ? (s.patchFlag & 128 && a++, n = n.concat(
      lv(s.children, t, d)
    )) : (t || s.type !== zt) && n.push(d != null ? oa(s, { key: d }) : s);
  }
  if (a > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Bt(e, t) {
  return je(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ct({ name: e.name }, t, { setup: e })
  ) : e;
}
function by() {
  const e = ca();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function ov(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gy(e) {
  const t = ca(), i = /* @__PURE__ */ Gh(null);
  if (t) {
    const a = t.refs === et ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    });
  }
  return i;
}
function Pf(e, t) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
}
const Jl = /* @__PURE__ */ new WeakMap();
function _s(e, t, i, n, a = !1) {
  if (Le(e)) {
    e.forEach(
      (C, $) => _s(
        C,
        t && (Le(t) ? t[$] : t),
        i,
        n,
        a
      )
    );
    return;
  }
  if (yr(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && _s(e, t, i, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? cu(n.component) : n.el, s = a ? null : r, { i: d, r: c } = e, m = t && t.r, v = d.refs === et ? d.refs = {} : d.refs, y = d.setupState, g = /* @__PURE__ */ tt(y), k = y === et ? Th : (C) => Pf(v, C) ? !1 : nt(g, C), T = (C, $) => !($ && Pf(v, $));
  if (m != null && m !== c) {
    if (Df(t), vt(m))
      v[m] = null, k(m) && (y[m] = null);
    else if (/* @__PURE__ */ Qt(m)) {
      const C = t;
      T(m, C.k) && (m.value = null), C.k && (v[C.k] = null);
    }
  }
  if (je(c))
    el(c, d, 12, [s, v]);
  else {
    const C = vt(c), $ = /* @__PURE__ */ Qt(c);
    if (C || $) {
      const I = () => {
        if (e.f) {
          const D = C ? k(c) ? y[c] : v[c] : T() || !e.k ? c.value : v[e.k];
          if (a)
            Le(D) && nd(D, r);
          else if (Le(D))
            D.includes(r) || D.push(r);
          else if (C)
            v[c] = [r], k(c) && (y[c] = v[c]);
          else {
            const P = [r];
            T(c, e.k) && (c.value = P), e.k && (v[e.k] = P);
          }
        } else C ? (v[c] = s, k(c) && (y[c] = s)) : $ && (T(c, e.k) && (c.value = s), e.k && (v[e.k] = s));
      };
      if (s) {
        const D = () => {
          I(), Jl.delete(e);
        };
        D.id = -1, Jl.set(e, D), si(D, i);
      } else
        Df(e), I();
    }
  }
}
function Df(e) {
  const t = Jl.get(e);
  t && (t.flags |= 8, Jl.delete(e));
}
eu().requestIdleCallback;
eu().cancelIdleCallback;
const yr = (e) => !!e.type.__asyncLoader, lu = (e) => e.type.__isKeepAlive;
function my(e, t) {
  uv(e, "a", t);
}
function yy(e, t) {
  uv(e, "da", t);
}
function uv(e, t, i = Xt) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ou(t, n, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      lu(a.parent.vnode) && _y(n, t, i, a), a = a.parent;
  }
}
function _y(e, t, i, n) {
  const a = ou(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  tl(() => {
    nd(n[t], a);
  }, i);
}
function ou(e, t, i = Xt, n = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...s) => {
      In();
      const d = nl(i), c = Ri(t, i, e, s);
      return d(), Ln(), c;
    });
    return n ? a.unshift(r) : a.push(r), r;
  }
}
const Mn = (e) => (t, i = Xt) => {
  (!Bs || e === "sp") && ou(e, (...n) => t(...n), i);
}, cv = Mn("bm"), Et = Mn("m"), dv = Mn(
  "bu"
), wy = Mn("u"), wi = Mn(
  "bum"
), tl = Mn("um"), ky = Mn(
  "sp"
), Sy = Mn("rtg"), Cy = Mn("rtc");
function Ty(e, t = Xt) {
  ou("ec", e, t);
}
const hd = "components", Ay = "directives";
function Ye(e, t) {
  return bd(hd, e, !0, t) || e;
}
const fv = /* @__PURE__ */ Symbol.for("v-ndc");
function vd(e) {
  return vt(e) ? bd(hd, e, !1) || e : e || fv;
}
function Ff(e) {
  return bd(Ay, e);
}
function bd(e, t, i = !0, n = !1) {
  const a = jt || Xt;
  if (a) {
    const r = a.type;
    if (e === hd) {
      const d = o1(
        r,
        !1
      );
      if (d && (d === t || d === Jt(t) || d === Jo(Jt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Mf(a[e] || r[e], t) || // global registration
      Mf(a.appContext[e], t)
    );
    return !s && n ? r : s;
  }
}
function Mf(e, t) {
  return e && (e[t] || e[Jt(t)] || e[Jo(Jt(t))]);
}
function de(e, t, i, n) {
  let a;
  const r = i, s = Le(e);
  if (s || vt(e)) {
    const d = s && /* @__PURE__ */ Ba(e);
    let c = !1, m = !1;
    d && (c = !/* @__PURE__ */ Ni(e), m = /* @__PURE__ */ Pn(e), e = iu(e)), a = new Array(e.length);
    for (let v = 0, y = e.length; v < y; v++)
      a[v] = t(
        c ? m ? Cr(qi(e[v])) : qi(e[v]) : e[v],
        v,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, r);
  } else if (at(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, c) => t(d, c, void 0, r)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let c = 0, m = d.length; c < m; c++) {
        const v = d[c];
        a[c] = t(e[v], v, c, r);
      }
    }
  else
    a = [];
  return a;
}
function He(e, t, i, n, a, r) {
  if (i == null && (i = {}), jt.ce || jt.parent && yr(jt.parent) && jt.parent.ce) {
    const m = i, v = Object.keys(m).length > 0;
    return t !== "default" && (m.name = t), p(), De(
      W,
      null,
      [fe("slot", m, n && n())],
      v ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const d = $n.length;
  p();
  let c;
  try {
    const m = s && pv(s(i)), v = i.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    m && m.key;
    c = De(
      W,
      {
        key: (v && !Vi(v) ? v : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!m && n ? "_fb" : "")
      },
      m || (n ? n() : []),
      m && e._ === 1 ? 64 : -2
    );
  } catch (m) {
    for (let v = $n.length; v > d; v--) _d();
    throw m;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), c;
}
function pv(e) {
  return e.some((t) => Us(t) ? !(t.type === zt || t.type === W && !pv(t.children)) : !0) ? e : null;
}
const Ec = (e) => e ? Pv(e) ? cu(e) : Ec(e.parent) : null, ws = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ct(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ec(e.parent),
    $root: (e) => Ec(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => bv(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      fd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xt.bind(e.proxy)),
    $watch: (e) => uy.bind(e)
  })
), ju = (e, t) => e !== et && !e.__isScriptSetup && nt(e, t), Ey = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: n, data: a, props: r, accessCache: s, type: d, appContext: c } = e;
    if (t[0] !== "$") {
      const g = s[t];
      if (g !== void 0)
        switch (g) {
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
        if (ju(n, t))
          return s[t] = 1, n[t];
        if (a !== et && nt(a, t))
          return s[t] = 2, a[t];
        if (nt(r, t))
          return s[t] = 3, r[t];
        if (i !== et && nt(i, t))
          return s[t] = 4, i[t];
        xc && (s[t] = 0);
      }
    }
    const m = ws[t];
    let v, y;
    if (m)
      return t === "$attrs" && Yt(e.attrs, "get", ""), m(e);
    if (
      // css module (injected by vue-loader)
      (v = d.__cssModules) && (v = v[t])
    )
      return v;
    if (i !== et && nt(i, t))
      return s[t] = 4, i[t];
    if (
      // global properties
      y = c.config.globalProperties, nt(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, i) {
    const { data: n, setupState: a, ctx: r } = e;
    return ju(a, t) ? (a[t] = i, !0) : n !== et && nt(n, t) ? (n[t] = i, !0) : nt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: n, appContext: a, props: r, type: s }
  }, d) {
    let c;
    return !!(i[d] || e !== et && d[0] !== "$" && nt(e, d) || ju(t, d) || nt(r, d) || nt(n, d) || nt(ws, d) || nt(a.config.globalProperties, d) || (c = s.__cssModules) && c[d]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : nt(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function xy() {
  return hv().slots;
}
function $y() {
  return hv().attrs;
}
function hv(e) {
  const t = ca();
  return t.setupContext || (t.setupContext = Fv(t));
}
function Ql(e) {
  return Le(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function Oy(e, t) {
  return !e || !t ? e || t : Le(e) && Le(t) ? e.concat(t) : Ct({}, Ql(e), Ql(t));
}
let xc = !0;
function Ny(e) {
  const t = bv(e), i = e.proxy, n = e.ctx;
  xc = !1, t.beforeCreate && Uf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: s,
    watch: d,
    provide: c,
    inject: m,
    // lifecycle
    created: v,
    beforeMount: y,
    mounted: g,
    beforeUpdate: k,
    updated: T,
    activated: C,
    deactivated: $,
    beforeDestroy: I,
    beforeUnmount: D,
    destroyed: P,
    unmounted: N,
    render: ce,
    renderTracked: J,
    renderTriggered: x,
    errorCaptured: q,
    serverPrefetch: B,
    // public API
    expose: Y,
    inheritAttrs: se,
    // assets
    components: H,
    directives: K,
    filters: R
  } = t;
  if (m && Ry(m, n, null), s)
    for (const ie in s) {
      const Z = s[ie];
      je(Z) && (n[ie] = Z.bind(i));
    }
  if (a) {
    const ie = a.call(i, i);
    at(ie) && (e.data = /* @__PURE__ */ Mt(ie));
  }
  if (xc = !0, r)
    for (const ie in r) {
      const Z = r[ie], ue = je(Z) ? Z.bind(i, i) : je(Z.get) ? Z.get.bind(i, i) : Oi, Te = !je(Z) && je(Z.set) ? Z.set.bind(i) : Oi, Pe = j({
        get: ue,
        set: Te
      });
      Object.defineProperty(n, ie, {
        enumerable: !0,
        configurable: !0,
        get: () => Pe.value,
        set: (Re) => Pe.value = Re
      });
    }
  if (d)
    for (const ie in d)
      vv(d[ie], n, i, ie);
  if (c) {
    const ie = je(c) ? c.call(i) : c;
    Reflect.ownKeys(ie).forEach((Z) => {
      Ei(Z, ie[Z]);
    });
  }
  v && Uf(v, e, "c");
  function Q(ie, Z) {
    Le(Z) ? Z.forEach((ue) => ie(ue.bind(i))) : Z && ie(Z.bind(i));
  }
  if (Q(cv, y), Q(Et, g), Q(dv, k), Q(wy, T), Q(my, C), Q(yy, $), Q(Ty, q), Q(Cy, J), Q(Sy, x), Q(wi, D), Q(tl, N), Q(ky, B), Le(Y))
    if (Y.length) {
      const ie = e.exposed || (e.exposed = {});
      Y.forEach((Z) => {
        Object.defineProperty(ie, Z, {
          get: () => i[Z],
          set: (ue) => i[Z] = ue,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Oi && (e.render = ce), se != null && (e.inheritAttrs = se), H && (e.components = H), K && (e.directives = K), B && ov(e);
}
function Ry(e, t, i = Oi) {
  Le(e) && (e = $c(e));
  for (const n in e) {
    const a = e[n];
    let r;
    at(a) ? "default" in a ? r = Zt(
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
function Uf(e, t, i) {
  Ri(
    Le(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function vv(e, t, i, n) {
  let a = n.includes(".") ? tv(i, n) : () => i[n];
  if (vt(e)) {
    const r = t[e];
    je(r) && qe(a, r);
  } else if (je(e))
    qe(a, e.bind(i));
  else if (at(e))
    if (Le(e))
      e.forEach((r) => vv(r, t, i, n));
    else {
      const r = je(e.handler) ? e.handler.bind(i) : t[e.handler];
      je(r) && qe(a, r, e);
    }
}
function bv(e) {
  const t = e.type, { mixins: i, extends: n } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, d = r.get(t);
  let c;
  return d ? c = d : !a.length && !i && !n ? c = t : (c = {}, a.length && a.forEach(
    (m) => eo(c, m, s, !0)
  ), eo(c, t, s)), at(t) && r.set(t, c), c;
}
function eo(e, t, i, n = !1) {
  const { mixins: a, extends: r } = t;
  r && eo(e, r, i, !0), a && a.forEach(
    (s) => eo(e, s, i, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const d = Iy[s] || i && i[s];
      e[s] = d ? d(e[s], t[s]) : t[s];
    }
  return e;
}
const Iy = {
  data: zf,
  props: jf,
  emits: jf,
  // objects
  methods: ds,
  computed: ds,
  // lifecycle
  beforeCreate: ri,
  created: ri,
  beforeMount: ri,
  mounted: ri,
  beforeUpdate: ri,
  updated: ri,
  beforeDestroy: ri,
  beforeUnmount: ri,
  destroyed: ri,
  unmounted: ri,
  activated: ri,
  deactivated: ri,
  errorCaptured: ri,
  serverPrefetch: ri,
  // assets
  components: ds,
  directives: ds,
  // watch
  watch: Py,
  // provide / inject
  provide: zf,
  inject: Ly
};
function zf(e, t) {
  return t ? e ? function() {
    return Ct(
      je(e) ? e.call(this, this) : e,
      je(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ly(e, t) {
  return ds($c(e), $c(t));
}
function $c(e) {
  if (Le(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function ri(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ds(e, t) {
  return e ? Ct(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function jf(e, t) {
  return e ? Le(e) && Le(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ct(
    /* @__PURE__ */ Object.create(null),
    Ql(e),
    Ql(t ?? {})
  ) : t;
}
function Py(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = Ct(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = ri(e[n], t[n]);
  return i;
}
function gv() {
  return {
    app: null,
    config: {
      isNativeTag: Th,
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
let Dy = 0;
function Fy(e, t) {
  return function(n, a = null) {
    je(n) || (n = Ct({}, n)), a != null && !at(a) && (a = null);
    const r = gv(), s = /* @__PURE__ */ new WeakSet(), d = [];
    let c = !1;
    const m = r.app = {
      _uid: Dy++,
      _component: n,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: c1,
      get config() {
        return r.config;
      },
      set config(v) {
      },
      use(v, ...y) {
        return s.has(v) || (v && je(v.install) ? (s.add(v), v.install(m, ...y)) : je(v) && (s.add(v), v(m, ...y))), m;
      },
      mixin(v) {
        return r.mixins.includes(v) || r.mixins.push(v), m;
      },
      component(v, y) {
        return y ? (r.components[v] = y, m) : r.components[v];
      },
      directive(v, y) {
        return y ? (r.directives[v] = y, m) : r.directives[v];
      },
      mount(v, y, g) {
        if (!c) {
          const k = m._ceVNode || fe(n, a);
          return k.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), e(k, v, g), c = !0, m._container = v, v.__vue_app__ = m, cu(k.component);
        }
      },
      onUnmount(v) {
        d.push(v);
      },
      unmount() {
        c && (Ri(
          d,
          m._instance,
          16
        ), e(null, m._container), delete m._container.__vue_app__);
      },
      provide(v, y) {
        return r.provides[v] = y, m;
      },
      runWithContext(v) {
        const y = _r;
        _r = m;
        try {
          return v();
        } finally {
          _r = y;
        }
      }
    };
    return m;
  };
}
let _r = null;
function mv(e, t, i = et) {
  const n = ca(), a = Jt(t), r = Fn(t), s = yv(e, a), d = Ym((c, m) => {
    let v, y = et, g;
    return oy(() => {
      const k = e[a];
      Ut(v, k) && (v = k, m());
    }), {
      get() {
        return c(), i.get ? i.get(v) : v;
      },
      set(k) {
        const T = i.set ? i.set(k) : k;
        if (!Ut(T, v) && !(y !== et && Ut(k, y)))
          return;
        const C = n.vnode.props, $ = !!(C && // check if parent has passed v-model
        (t in C || a in C || r in C) && (`onUpdate:${t}` in C || `onUpdate:${a}` in C || `onUpdate:${r}` in C));
        $ || (v = k, m()), n.emit(`update:${t}`, T), Ut(k, y) && (Ut(k, T) && !Ut(T, g) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        $ && y !== et && !Ut(T, v)) && m(), y = k, g = T;
      }
    };
  });
  return d[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? s || et : d, done: !1 } : { done: !0 };
      }
    };
  }, d;
}
const yv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Jt(t)}Modifiers`] || e[`${Fn(t)}Modifiers`];
function My(e, t, ...i) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || et;
  let a = i;
  const r = t.startsWith("update:"), s = r && yv(n, t.slice(7));
  s && (s.trim && (a = i.map((v) => vt(v) ? v.trim() : v)), s.number && (a = a.map(Qo)));
  let d, c = n[d = Pu(t)] || // also try camelCase event handler (#2249)
  n[d = Pu(Jt(t))];
  !c && r && (c = n[d = Pu(Fn(t))]), c && Ri(
    c,
    e,
    6,
    a
  );
  const m = n[d + "Once"];
  if (m) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, Ri(
      m,
      e,
      6,
      a
    );
  }
}
const Uy = /* @__PURE__ */ new WeakMap();
function _v(e, t, i = !1) {
  const n = i ? Uy : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, d = !1;
  if (!je(e)) {
    const c = (m) => {
      const v = _v(m, t, !0);
      v && (d = !0, Ct(s, v));
    };
    !i && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !d ? (at(e) && n.set(e, null), null) : (Le(r) ? r.forEach((c) => s[c] = null) : Ct(s, r), at(e) && n.set(e, s), s);
}
function uu(e, t) {
  return !e || !Yo(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), nt(e, t[0].toLowerCase() + t.slice(1)) || nt(e, Fn(t)) || nt(e, t));
}
function Bf(e) {
  const {
    type: t,
    vnode: i,
    proxy: n,
    withProxy: a,
    propsOptions: [r],
    slots: s,
    attrs: d,
    emit: c,
    render: m,
    renderCache: v,
    props: y,
    data: g,
    setupState: k,
    ctx: T,
    inheritAttrs: C
  } = e, $ = Zl(e);
  let I, D;
  try {
    if (i.shapeFlag & 4) {
      const N = a || n, ce = N;
      I = rn(
        m.call(
          ce,
          N,
          v,
          y,
          k,
          g,
          T
        )
      ), D = d;
    } else {
      const N = t;
      I = rn(
        N.length > 1 ? N(
          y,
          { attrs: d, slots: s, emit: c }
        ) : N(
          y,
          null
        )
      ), D = t.props ? d : zy(d);
    }
  } catch (N) {
    $n.length = 0, nu(N, e, 1), I = fe(zt);
  }
  let P = I;
  if (D && C !== !1) {
    const N = Object.keys(D), { shapeFlag: ce } = P;
    N.length && ce & 7 && (r && N.some(Zo) && (D = jy(
      D,
      r
    )), P = oa(P, D, !1, !0));
  }
  if (i.dirs && (P = oa(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const N = su(P.type) && Xl(P) || P;
    Fs(N, i.transition);
  }
  return I = P, Zl($), I;
}
const zy = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || Yo(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, jy = (e, t) => {
  const i = {};
  for (const n in e)
    (!Zo(n) || !(n.slice(9) in t)) && (i[n] = e[n]);
  return i;
};
function By(e, t, i) {
  const { props: n, children: a, component: r } = e, { props: s, children: d, patchFlag: c } = t, m = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return n ? Hf(n, s, m) : !!s;
    if (c & 8) {
      const v = t.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        const g = v[y];
        if (wv(s, n, g) && !uu(m, g))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : n === s ? !1 : n ? s ? Hf(n, s, m) : !0 : !!s;
  return !1;
}
function Hf(e, t, i) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const r = n[a];
    if (wv(t, e, r) && !uu(i, r))
      return !0;
  }
  return !1;
}
function wv(e, t, i) {
  const n = e[i], a = t[i];
  return i === "style" && at(n) && at(a) ? !Rn(n, a) : n !== a;
}
function Hy({ vnode: e, parent: t, suspense: i }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = n, e = a), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  i && i.activeBranch === e && (i.vnode.el = n);
}
const kv = {}, Sv = () => Object.create(kv), Cv = (e) => Object.getPrototypeOf(e) === kv;
function Vy(e, t, i, n = !1) {
  const a = {}, r = Sv();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Tv(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  i ? e.props = n ? a : /* @__PURE__ */ Vm(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function qy(e, t, i, n) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, d = /* @__PURE__ */ tt(a), [c] = e.propsOptions;
  let m = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const v = e.vnode.dynamicProps;
      for (let y = 0; y < v.length; y++) {
        let g = v[y];
        if (uu(e.emitsOptions, g))
          continue;
        const k = t[g];
        if (c)
          if (nt(r, g))
            k !== r[g] && (r[g] = k, m = !0);
          else {
            const T = Jt(g);
            a[T] = Oc(
              c,
              d,
              T,
              k,
              e,
              !1
            );
          }
        else
          k !== r[g] && (r[g] = k, m = !0);
      }
    }
  } else {
    Tv(e, t, a, r) && (m = !0);
    let v;
    for (const y in d)
      (!t || // for camelCase
      !nt(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Fn(y)) === y || !nt(t, v))) && (c ? i && // for camelCase
      (i[y] !== void 0 || // for kebab-case
      i[v] !== void 0) && (a[y] = Oc(
        c,
        d,
        y,
        void 0,
        e,
        !0
      )) : delete a[y]);
    if (r !== d)
      for (const y in r)
        (!t || !nt(t, y)) && (delete r[y], m = !0);
  }
  m && Cn(e.attrs, "set", "");
}
function Tv(e, t, i, n) {
  const [a, r] = e.propsOptions;
  let s = !1, d;
  if (t)
    for (let c in t) {
      if (gs(c))
        continue;
      const m = t[c];
      let v;
      a && nt(a, v = Jt(c)) ? !r || !r.includes(v) ? i[v] = m : (d || (d = {}))[v] = m : uu(e.emitsOptions, c) || (!(c in n) || m !== n[c]) && (n[c] = m, s = !0);
    }
  if (r) {
    const c = /* @__PURE__ */ tt(i), m = d || et;
    for (let v = 0; v < r.length; v++) {
      const y = r[v];
      i[y] = Oc(
        a,
        c,
        y,
        m[y],
        e,
        !nt(m, y)
      );
    }
  }
  return s;
}
function Oc(e, t, i, n, a, r) {
  const s = e[i];
  if (s != null) {
    const d = nt(s, "default");
    if (d && n === void 0) {
      const c = s.default;
      if (s.type !== Function && !s.skipFactory && je(c)) {
        const { propsDefaults: m } = a;
        if (i in m)
          n = m[i];
        else {
          const v = nl(a);
          n = m[i] = c.call(
            null,
            t
          ), v();
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
    ] && (n === "" || n === Fn(i)) && (n = !0));
  }
  return n;
}
const Ky = /* @__PURE__ */ new WeakMap();
function Av(e, t, i = !1) {
  const n = i ? Ky : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, d = [];
  let c = !1;
  if (!je(e)) {
    const v = (y) => {
      c = !0;
      const [g, k] = Av(y, t, !0);
      Ct(s, g), k && d.push(...k);
    };
    !i && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!r && !c)
    return at(e) && n.set(e, gr), gr;
  if (Le(r))
    for (let v = 0; v < r.length; v++) {
      const y = Jt(r[v]);
      Vf(y) && (s[y] = et);
    }
  else if (r)
    for (const v in r) {
      const y = Jt(v);
      if (Vf(y)) {
        const g = r[v], k = s[y] = Le(g) || je(g) ? { type: g } : Ct({}, g), T = k.type;
        let C = !1, $ = !0;
        if (Le(T))
          for (let I = 0; I < T.length; ++I) {
            const D = T[I], P = je(D) && D.name;
            if (P === "Boolean") {
              C = !0;
              break;
            } else P === "String" && ($ = !1);
          }
        else
          C = je(T) && T.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = C, k[
          1
          /* shouldCastTrue */
        ] = $, (C || nt(k, "default")) && d.push(y);
      }
    }
  const m = [s, d];
  return at(e) && n.set(e, m), m;
}
function Vf(e) {
  return e[0] !== "$" && !gs(e);
}
const gd = (e) => e === "_" || e === "_ctx" || e === "$stable", md = (e) => Le(e) ? e.map(rn) : [rn(e)], Gy = (e, t, i) => {
  if (t._n)
    return t;
  const n = me((...a) => md(t(...a)), i);
  return n._c = !1, n;
}, Ev = (e, t, i) => {
  const n = e._ctx;
  for (const a in e) {
    if (gd(a)) continue;
    const r = e[a];
    if (je(r))
      t[a] = Gy(a, r, n);
    else if (r != null) {
      const s = md(r);
      t[a] = () => s;
    }
  }
}, xv = (e, t) => {
  const i = md(t);
  e.slots.default = () => i;
}, $v = (e, t, i) => {
  for (const n in t)
    (i || !gd(n)) && (e[n] = t[n]);
}, Wy = (e, t, i) => {
  const n = e.slots = Sv();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? ($v(n, t, i), i && $h(n, "_", a, !0)) : Ev(t, n);
  } else t && xv(e, t);
}, Yy = (e, t, i) => {
  const { vnode: n, slots: a } = e;
  let r = !0, s = et;
  if (n.shapeFlag & 32) {
    const d = t._;
    d ? i && d === 1 ? r = !1 : $v(a, t, i) : (r = !t.$stable, Ev(t, a)), s = t;
  } else t && (xv(e, t), s = { default: 1 });
  if (r)
    for (const d in a)
      !gd(d) && s[d] == null && delete a[d];
}, si = e1;
function Zy(e) {
  return Xy(e);
}
function Xy(e, t) {
  const i = eu();
  i.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: r,
    createElement: s,
    createText: d,
    createComment: c,
    setText: m,
    setElementText: v,
    parentNode: y,
    nextSibling: g,
    setScopeId: k = Oi,
    insertStaticContent: T
  } = e, C = (S, O, L, z = null, M = null, X = null, ne = void 0, re = null, pe = !!O.dynamicChildren) => {
    if (S === O)
      return;
    S && !Fa(S, O) && (z = Ie(S), Re(S, M, X, !0), S = null), O.patchFlag === -2 && (pe = !1, O.dynamicChildren = null);
    const { type: ae, ref: xe, shapeFlag: ye } = O;
    switch (ae) {
      case il:
        $(S, O, L, z);
        break;
      case zt:
        I(S, O, L, z);
        break;
      case Hl:
        S == null && D(O, L, z, ne);
        break;
      case W:
        H(
          S,
          O,
          L,
          z,
          M,
          X,
          ne,
          re,
          pe
        );
        break;
      default:
        ye & 1 ? ce(
          S,
          O,
          L,
          z,
          M,
          X,
          ne,
          re,
          pe
        ) : ye & 6 ? K(
          S,
          O,
          L,
          z,
          M,
          X,
          ne,
          re,
          pe
        ) : (ye & 64 || ye & 128) && ae.process(
          S,
          O,
          L,
          z,
          M,
          X,
          ne,
          re,
          pe,
          st
        );
    }
    xe != null && M ? _s(xe, S && S.ref, X, O || S, !O) : xe == null && S && S.ref != null && _s(S.ref, null, X, S, !0);
  }, $ = (S, O, L, z) => {
    if (S == null)
      n(
        O.el = d(O.children),
        L,
        z
      );
    else {
      const M = O.el = S.el;
      O.children !== S.children && m(M, O.children);
    }
  }, I = (S, O, L, z) => {
    S == null ? n(
      O.el = c(O.children || ""),
      L,
      z
    ) : O.el = S.el;
  }, D = (S, O, L, z) => {
    [S.el, S.anchor] = T(
      S.children,
      O,
      L,
      z,
      S.el,
      S.anchor
    );
  }, P = ({ el: S, anchor: O }, L, z) => {
    let M;
    for (; S && S !== O; )
      M = g(S), n(S, L, z), S = M;
    n(O, L, z);
  }, N = ({ el: S, anchor: O }) => {
    let L;
    for (; S && S !== O; )
      L = g(S), a(S), S = L;
    a(O);
  }, ce = (S, O, L, z, M, X, ne, re, pe) => {
    if (O.type === "svg" ? ne = "svg" : O.type === "math" && (ne = "mathml"), S == null)
      J(
        O,
        L,
        z,
        M,
        X,
        ne,
        re,
        pe
      );
    else {
      const ae = S.el && S.el._isVueCE ? S.el : null;
      try {
        ae && ae._beginPatch(), B(
          S,
          O,
          M,
          X,
          ne,
          re,
          pe
        );
      } finally {
        ae && ae._endPatch();
      }
    }
  }, J = (S, O, L, z, M, X, ne, re) => {
    let pe, ae;
    const { props: xe, shapeFlag: ye, transition: we, dirs: Oe } = S;
    if (pe = S.el = s(
      S.type,
      X,
      xe && xe.is,
      xe
    ), ye & 8 ? v(pe, S.children) : ye & 16 && q(
      S.children,
      pe,
      null,
      z,
      M,
      Bu(S, X),
      ne,
      re
    ), Oe && Ea(S, null, z, "created"), x(pe, S, S.scopeId, ne, z), xe) {
      for (const Ve in xe)
        Ve !== "value" && !gs(Ve) && r(pe, Ve, null, xe[Ve], X, z);
      "value" in xe && r(pe, "value", null, xe.value, X), (ae = xe.onVnodeBeforeMount) && Qi(ae, z, S);
    }
    Oe && Ea(S, null, z, "beforeMount");
    const ze = Jy(M, we);
    ze && we.beforeEnter(pe), n(pe, O, L), ((ae = xe && xe.onVnodeMounted) || ze || Oe) && si(() => {
      ae && Qi(ae, z, S), ze && we.enter(pe), Oe && Ea(S, null, z, "mounted");
    }, M);
  }, x = (S, O, L, z, M) => {
    if (L && k(S, L), z)
      for (let X = 0; X < z.length; X++)
        k(S, z[X]);
    if (M) {
      let X = M.subTree;
      if (O === X || Rv(X.type) && (X.ssContent === O || X.ssFallback === O)) {
        const ne = M.vnode;
        x(
          S,
          ne,
          ne.scopeId,
          ne.slotScopeIds,
          M.parent
        );
      }
    }
  }, q = (S, O, L, z, M, X, ne, re, pe = 0) => {
    for (let ae = pe; ae < S.length; ae++) {
      const xe = S[ae] = re ? Sn(S[ae]) : rn(S[ae]);
      C(
        null,
        xe,
        O,
        L,
        z,
        M,
        X,
        ne,
        re
      );
    }
  }, B = (S, O, L, z, M, X, ne) => {
    const re = O.el = S.el;
    let { patchFlag: pe, dynamicChildren: ae, dirs: xe } = O;
    pe |= S.patchFlag & 16;
    const ye = S.props || et, we = O.props || et;
    let Oe;
    if (L && xa(L, !1), (Oe = we.onVnodeBeforeUpdate) && Qi(Oe, L, O, S), xe && Ea(O, S, L, "beforeUpdate"), L && xa(L, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    ae && (!S.dynamicChildren || S.dynamicChildren.length !== ae.length) && (pe = 0, ne = !1, ae = null), (ye.innerHTML && we.innerHTML == null || ye.textContent && we.textContent == null) && v(re, ""), ae ? Y(
      S.dynamicChildren,
      ae,
      re,
      L,
      z,
      Bu(O, M),
      X
    ) : ne || Z(
      S,
      O,
      re,
      null,
      L,
      z,
      Bu(O, M),
      X,
      !1
    ), pe > 0) {
      if (pe & 16)
        se(re, ye, we, L, M);
      else if (pe & 2 && ye.class !== we.class && r(re, "class", null, we.class, M), pe & 4 && r(re, "style", ye.style, we.style, M), pe & 8) {
        const ze = O.dynamicProps;
        for (let Ve = 0; Ve < ze.length; Ve++) {
          const Ke = ze[Ve], ut = ye[Ke], ft = we[Ke];
          (ft !== ut || Ke === "value") && r(re, Ke, ut, ft, M, L);
        }
      }
      pe & 1 && S.children !== O.children && v(re, O.children);
    } else !ne && ae == null && se(re, ye, we, L, M);
    ((Oe = we.onVnodeUpdated) || xe) && si(() => {
      Oe && Qi(Oe, L, O, S), xe && Ea(O, S, L, "updated");
    }, z);
  }, Y = (S, O, L, z, M, X, ne) => {
    for (let re = 0; re < O.length; re++) {
      const pe = S[re], ae = O[re], xe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        pe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (pe.type === W || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Fa(pe, ae) || // - In the case of a component, it could contain anything.
        pe.shapeFlag & 198) ? y(pe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      C(
        pe,
        ae,
        xe,
        null,
        z,
        M,
        X,
        ne,
        !0
      );
    }
  }, se = (S, O, L, z, M) => {
    if (O !== L) {
      if (O !== et)
        for (const X in O)
          !gs(X) && !(X in L) && r(
            S,
            X,
            O[X],
            null,
            M,
            z
          );
      for (const X in L) {
        if (gs(X)) continue;
        const ne = L[X], re = O[X];
        ne !== re && X !== "value" && r(S, X, re, ne, M, z);
      }
      "value" in L && r(S, "value", O.value, L.value, M);
    }
  }, H = (S, O, L, z, M, X, ne, re, pe) => {
    const ae = O.el = S ? S.el : d(""), xe = O.anchor = S ? S.anchor : d("");
    let { patchFlag: ye, dynamicChildren: we, slotScopeIds: Oe } = O;
    Oe && (re = re ? re.concat(Oe) : Oe), S == null ? (n(ae, L, z), n(xe, L, z), q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      O.children || [],
      L,
      xe,
      M,
      X,
      ne,
      re,
      pe
    )) : ye > 0 && ye & 64 && we && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren && S.dynamicChildren.length === we.length ? (Y(
      S.dynamicChildren,
      we,
      L,
      M,
      X,
      ne,
      re
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (O.key != null || M && O === M.subTree) && yd(
      S,
      O,
      !0
      /* shallow */
    )) : Z(
      S,
      O,
      L,
      xe,
      M,
      X,
      ne,
      re,
      pe
    );
  }, K = (S, O, L, z, M, X, ne, re, pe) => {
    O.slotScopeIds = re, S == null ? O.shapeFlag & 512 ? M.ctx.activate(
      O,
      L,
      z,
      ne,
      pe
    ) : R(
      O,
      L,
      z,
      M,
      X,
      ne,
      pe
    ) : V(S, O, pe);
  }, R = (S, O, L, z, M, X, ne) => {
    const re = S.component = a1(
      S,
      z,
      M
    );
    if (lu(S) && (re.ctx.renderer = st), r1(re, !1, ne), re.asyncDep) {
      if (M && M.registerDep(re, Q, ne), !S.el) {
        const pe = re.subTree = fe(zt);
        I(null, pe, O, L), S.placeholder = pe.el;
      }
    } else
      Q(
        re,
        S,
        O,
        L,
        M,
        X,
        ne
      );
  }, V = (S, O, L) => {
    const z = O.component = S.component;
    if (By(S, O, L))
      if (z.asyncDep && !z.asyncResolved) {
        ie(z, O, L);
        return;
      } else
        z.next = O, z.update();
    else
      O.el = S.el, z.vnode = O;
  }, Q = (S, O, L, z, M, X, ne) => {
    const re = () => {
      if (S.isMounted) {
        let { next: ye, bu: we, u: Oe, parent: ze, vnode: Ve } = S;
        {
          const mt = Ov(S);
          if (mt) {
            ye && (ye.el = Ve.el, ie(S, ye, ne)), mt.asyncDep.then(() => {
              si(() => {
                S.isUnmounted || ae();
              }, M);
            });
            return;
          }
        }
        let Ke = ye, ut;
        xa(S, !1), ye ? (ye.el = Ve.el, ie(S, ye, ne)) : ye = Ve, we && Bl(we), (ut = ye.props && ye.props.onVnodeBeforeUpdate) && Qi(ut, ze, ye, Ve), xa(S, !0);
        const ft = Bf(S), bt = S.subTree;
        S.subTree = ft, C(
          bt,
          ft,
          // parent may have changed if it's in a teleport
          y(bt.el),
          // anchor may have changed if it's in a fragment
          Ie(bt),
          S,
          M,
          X
        ), ye.el = ft.el, Ke === null && Hy(S, ft.el), Oe && si(Oe, M), (ut = ye.props && ye.props.onVnodeUpdated) && si(
          () => Qi(ut, ze, ye, Ve),
          M
        );
      } else {
        let ye;
        const { el: we, props: Oe } = O, { bm: ze, m: Ve, parent: Ke, root: ut, type: ft } = S, bt = yr(O);
        xa(S, !1), ze && Bl(ze), !bt && (ye = Oe && Oe.onVnodeBeforeMount) && Qi(ye, Ke, O), xa(S, !0);
        {
          ut.ce && ut.ce._hasShadowRoot() && ut.ce._injectChildStyle(
            ft,
            S.parent ? S.parent.type : void 0
          );
          const mt = S.subTree = Bf(S);
          C(
            null,
            mt,
            L,
            z,
            S,
            M,
            X
          ), O.el = mt.el;
        }
        if (Ve && si(Ve, M), !bt && (ye = Oe && Oe.onVnodeMounted)) {
          const mt = O;
          si(
            () => Qi(ye, Ke, mt),
            M
          );
        }
        (O.shapeFlag & 256 || Ke && yr(Ke.vnode) && Ke.vnode.shapeFlag & 256) && S.a && si(S.a, M), S.isMounted = !0, O = L = z = null;
      }
    };
    S.scope.on();
    const pe = S.effect = new Ih(re);
    S.scope.off();
    const ae = S.update = pe.run.bind(pe), xe = S.job = pe.runIfDirty.bind(pe);
    xe.i = S, xe.id = S.uid, pe.scheduler = () => fd(xe), xa(S, !0), ae();
  }, ie = (S, O, L) => {
    O.component = S;
    const z = S.vnode.props;
    S.vnode = O, S.next = null, qy(S, O.props, z, L), Yy(S, O.children, L), In(), Rf(S), Ln();
  }, Z = (S, O, L, z, M, X, ne, re, pe = !1) => {
    const ae = S && S.children, xe = S ? S.shapeFlag : 0, ye = O.children, { patchFlag: we, shapeFlag: Oe } = O;
    if (we > 0) {
      if (we & 128) {
        Te(
          ae,
          ye,
          L,
          z,
          M,
          X,
          ne,
          re,
          pe
        );
        return;
      } else if (we & 256) {
        ue(
          ae,
          ye,
          L,
          z,
          M,
          X,
          ne,
          re,
          pe
        );
        return;
      }
    }
    Oe & 8 ? (xe & 16 && $e(ae, M, X), ye !== ae && v(L, ye)) : xe & 16 ? Oe & 16 ? Te(
      ae,
      ye,
      L,
      z,
      M,
      X,
      ne,
      re,
      pe
    ) : $e(ae, M, X, !0) : (xe & 8 && v(L, ""), Oe & 16 && q(
      ye,
      L,
      z,
      M,
      X,
      ne,
      re,
      pe
    ));
  }, ue = (S, O, L, z, M, X, ne, re, pe) => {
    S = S || gr, O = O || gr;
    const ae = S.length, xe = O.length, ye = Math.min(ae, xe);
    let we;
    for (we = 0; we < ye; we++) {
      const Oe = O[we] = pe ? Sn(O[we]) : rn(O[we]);
      C(
        S[we],
        Oe,
        L,
        null,
        M,
        X,
        ne,
        re,
        pe
      );
    }
    ae > xe ? $e(
      S,
      M,
      X,
      !0,
      !1,
      ye
    ) : q(
      O,
      L,
      z,
      M,
      X,
      ne,
      re,
      pe,
      ye
    );
  }, Te = (S, O, L, z, M, X, ne, re, pe) => {
    let ae = 0;
    const xe = O.length;
    let ye = S.length - 1, we = xe - 1;
    for (; ae <= ye && ae <= we; ) {
      const Oe = S[ae], ze = O[ae] = pe ? Sn(O[ae]) : rn(O[ae]);
      if (Fa(Oe, ze))
        C(
          Oe,
          ze,
          L,
          null,
          M,
          X,
          ne,
          re,
          pe
        );
      else
        break;
      ae++;
    }
    for (; ae <= ye && ae <= we; ) {
      const Oe = S[ye], ze = O[we] = pe ? Sn(O[we]) : rn(O[we]);
      if (Fa(Oe, ze))
        C(
          Oe,
          ze,
          L,
          null,
          M,
          X,
          ne,
          re,
          pe
        );
      else
        break;
      ye--, we--;
    }
    if (ae > ye) {
      if (ae <= we) {
        const Oe = we + 1, ze = Oe < xe ? O[Oe].el : z;
        for (; ae <= we; )
          C(
            null,
            O[ae] = pe ? Sn(O[ae]) : rn(O[ae]),
            L,
            ze,
            M,
            X,
            ne,
            re,
            pe
          ), ae++;
      }
    } else if (ae > we)
      for (; ae <= ye; )
        Re(S[ae], M, X, !0), ae++;
    else {
      const Oe = ae, ze = ae, Ve = /* @__PURE__ */ new Map();
      for (ae = ze; ae <= we; ae++) {
        const kt = O[ae] = pe ? Sn(O[ae]) : rn(O[ae]);
        kt.key != null && Ve.set(kt.key, ae);
      }
      let Ke, ut = 0;
      const ft = we - ze + 1;
      let bt = !1, mt = 0;
      const Nt = new Array(ft);
      for (ae = 0; ae < ft; ae++) Nt[ae] = 0;
      for (ae = Oe; ae <= ye; ae++) {
        const kt = S[ae];
        if (ut >= ft) {
          Re(kt, M, X, !0);
          continue;
        }
        let Rt;
        if (kt.key != null)
          Rt = Ve.get(kt.key);
        else
          for (Ke = ze; Ke <= we; Ke++)
            if (Nt[Ke - ze] === 0 && Fa(kt, O[Ke])) {
              Rt = Ke;
              break;
            }
        Rt === void 0 ? Re(kt, M, X, !0) : (Nt[Rt - ze] = ae + 1, Rt >= mt ? mt = Rt : bt = !0, C(
          kt,
          O[Rt],
          L,
          null,
          M,
          X,
          ne,
          re,
          pe
        ), ut++);
      }
      const oi = bt ? Qy(Nt) : gr;
      for (Ke = oi.length - 1, ae = ft - 1; ae >= 0; ae--) {
        const kt = ze + ae, Rt = O[kt], cn = O[kt + 1], Ht = kt + 1 < xe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          cn.el || Nv(cn)
        ) : z;
        Nt[ae] === 0 ? C(
          null,
          Rt,
          L,
          Ht,
          M,
          X,
          ne,
          re,
          pe
        ) : bt && (Ke < 0 || ae !== oi[Ke] ? Pe(Rt, L, Ht, 2) : Ke--);
      }
    }
  }, Pe = (S, O, L, z, M = null) => {
    const { el: X, type: ne, transition: re, children: pe, shapeFlag: ae } = S;
    if (ae & 6) {
      Pe(S.component.subTree, O, L, z);
      return;
    }
    if (ae & 128) {
      S.suspense.move(O, L, z);
      return;
    }
    if (ae & 64) {
      ne.move(S, O, L, st);
      return;
    }
    if (ne === W) {
      n(X, O, L);
      for (let ye = 0; ye < pe.length; ye++)
        Pe(pe[ye], O, L, z);
      n(S.anchor, O, L);
      return;
    }
    if (ne === Hl) {
      P(S, O, L);
      return;
    }
    if (z !== 2 && ae & 1 && re)
      if (z === 0)
        re.persisted && !X[xi] ? n(X, O, L) : (re.beforeEnter(X), n(X, O, L), si(() => re.enter(X), M));
      else {
        const { leave: ye, delayLeave: we, afterLeave: Oe } = re, ze = () => {
          S.ctx.isUnmounted ? a(X) : n(X, O, L);
        }, Ve = () => {
          const Ke = X._isLeaving || !!X[xi];
          X._isLeaving && X[xi](
            !0
            /* cancelled */
          ), re.persisted && !Ke ? ze() : ye(X, () => {
            ze(), Oe && Oe();
          });
        };
        we ? we(X, ze, Ve) : Ve();
      }
    else
      n(X, O, L);
  }, Re = (S, O, L, z = !1, M = !1) => {
    const {
      type: X,
      props: ne,
      ref: re,
      children: pe,
      dynamicChildren: ae,
      shapeFlag: xe,
      patchFlag: ye,
      dirs: we,
      cacheIndex: Oe,
      memo: ze
    } = S;
    if (ye === -2 && (M = !1), re != null && (In(), _s(re, null, L, S, !0), Ln()), Oe != null && (O.renderCache[Oe] = void 0), xe & 256) {
      O.ctx.deactivate(S);
      return;
    }
    const Ve = xe & 1 && we, Ke = !yr(S);
    let ut;
    if (Ke && (ut = ne && ne.onVnodeBeforeUnmount) && Qi(ut, O, S), xe & 6)
      dt(S.component, L, z);
    else {
      if (xe & 128) {
        S.suspense.unmount(L, z);
        return;
      }
      Ve && Ea(S, null, O, "beforeUnmount"), xe & 64 ? S.type.remove(
        S,
        O,
        L,
        st,
        z
      ) : ae && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ae.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (X !== W || ye > 0 && ye & 64) ? $e(
        ae,
        O,
        L,
        !1,
        !0
      ) : (X === W && ye & 384 || !M && xe & 16) && $e(pe, O, L), z && Ue(S);
    }
    const ft = ze != null && Oe == null;
    (Ke && (ut = ne && ne.onVnodeUnmounted) || Ve || ft) && si(() => {
      ut && Qi(ut, O, S), Ve && Ea(S, null, O, "unmounted"), ft && (S.el = null);
    }, L);
  }, Ue = (S) => {
    const { type: O, el: L, anchor: z, transition: M } = S;
    if (O === W) {
      Ne(L, z);
      return;
    }
    if (O === Hl) {
      N(S);
      return;
    }
    const X = () => {
      a(L), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (S.shapeFlag & 1 && M && !M.persisted) {
      const { leave: ne, delayLeave: re } = M, pe = () => ne(L, X);
      re ? re(S.el, X, pe) : pe();
    } else
      X();
  }, Ne = (S, O) => {
    let L;
    for (; S !== O; )
      L = g(S), a(S), S = L;
    a(O);
  }, dt = (S, O, L) => {
    const { bum: z, scope: M, job: X, subTree: ne, um: re, m: pe, a: ae } = S;
    qf(pe), qf(ae), z && Bl(z), M.stop(), X && (X.flags |= 8, Re(ne, S, O, L)), re && si(re, O), si(() => {
      S.isUnmounted = !0;
    }, O);
  }, $e = (S, O, L, z = !1, M = !1, X = 0) => {
    for (let ne = X; ne < S.length; ne++)
      Re(S[ne], O, L, z, M);
  }, Ie = (S) => {
    if (S.shapeFlag & 6)
      return Ie(S.component.subTree);
    if (S.shapeFlag & 128)
      return S.suspense.next();
    const O = g(S.anchor || S.el), L = O && O[iv];
    return L ? g(L) : O;
  };
  let be = !1;
  const Fe = (S, O, L) => {
    let z;
    S == null ? O._vnode && (Re(O._vnode, null, null, !0), z = O._vnode.component) : C(
      O._vnode || null,
      S,
      O,
      null,
      null,
      null,
      L
    ), O._vnode = S, be || (be = !0, Rf(z), Qh(), be = !1);
  }, st = {
    p: C,
    um: Re,
    m: Pe,
    r: Ue,
    mt: R,
    mc: q,
    pc: Z,
    pbc: Y,
    n: Ie,
    o: e
  };
  return {
    render: Fe,
    hydrate: void 0,
    createApp: Fy(Fe)
  };
}
function Bu({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function xa({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Jy(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function yd(e, t, i = !1) {
  const n = e.children, a = t.children;
  if (Le(n) && Le(a))
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      let d = a[r];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[r] = Sn(a[r]), d.el = s.el), !i && d.patchFlag !== -2 && yd(s, d)), d.type === il && (d.patchFlag === -1 && (d = a[r] = Sn(d)), d.el = s.el), d.type === zt && !d.el && (d.el = s.el);
    }
}
function Qy(e) {
  const t = e.slice(), i = [0];
  let n, a, r, s, d;
  const c = e.length;
  for (n = 0; n < c; n++) {
    const m = e[n];
    if (m !== 0) {
      if (a = i[i.length - 1], e[a] < m) {
        t[n] = a, i.push(n);
        continue;
      }
      for (r = 0, s = i.length - 1; r < s; )
        d = r + s >> 1, e[i[d]] < m ? r = d + 1 : s = d;
      m < e[i[r]] && (r > 0 && (t[n] = i[r - 1]), i[r] = n);
    }
  }
  for (r = i.length, s = i[r - 1]; r-- > 0; )
    i[r] = s, s = t[s];
  return i;
}
function Ov(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ov(t);
}
function qf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Nv(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Nv(t.subTree) : null;
}
const Rv = (e) => e.__isSuspense;
function e1(e, t) {
  t && t.pendingBranch ? Le(e) ? t.effects.push(...e) : t.effects.push(e) : Jh(e);
}
const W = /* @__PURE__ */ Symbol.for("v-fgt"), il = /* @__PURE__ */ Symbol.for("v-txt"), zt = /* @__PURE__ */ Symbol.for("v-cmt"), Hl = /* @__PURE__ */ Symbol.for("v-stc"), $n = [];
let _i = null;
function p(e = !1) {
  $n.push(_i = e ? null : []);
}
function _d() {
  $n.pop(), _i = $n[$n.length - 1] || null;
}
let Ms = 1;
function to(e, t = !1) {
  Ms += e, e < 0 && _i && t && (_i.hasOnce = !0);
}
function Iv(e) {
  return e.dynamicChildren = Ms > 0 ? _i || gr : null, _d(), Ms > 0 && _i && _i.push(e), e;
}
function h(e, t, i, n, a, r) {
  return Iv(
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
function De(e, t, i, n, a) {
  return Iv(
    fe(
      e,
      t,
      i,
      n,
      a,
      !0
    )
  );
}
function Us(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Fa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Lv = ({ key: e }) => e ?? null, Vl = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? vt(e) || /* @__PURE__ */ Qt(e) || je(e) ? { i: jt, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, n = 0, a = null, r = e === W ? 0 : 1, s = !1, d = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Lv(t),
    ref: t && Vl(t),
    scopeId: au,
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
  return d ? (io(c, i), r & 128 && e.normalize(c)) : i && (c.shapeFlag |= vt(i) ? 8 : 16), Ms > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  _i && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && _i.push(c), c;
}
const fe = t1;
function t1(e, t = null, i = null, n = 0, a = null, r = !1) {
  if ((!e || e === fv) && (e = zt), Us(e)) {
    const d = oa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && io(d, i), Ms > 0 && !r && _i && (d.shapeFlag & 6 ? _i[_i.indexOf(e)] = d : _i.push(d)), d.patchFlag = -2, d;
  }
  if (u1(e) && (e = e.__vccOpts), t) {
    t = zs(t);
    let { class: d, style: c } = t;
    d && !vt(d) && (t.class = ke(d)), at(c) && (/* @__PURE__ */ dd(c) && !Le(c) && (c = Ct({}, c)), t.style = fi(c));
  }
  const s = vt(e) ? 1 : Rv(e) ? 128 : su(e) ? 64 : at(e) ? 4 : je(e) ? 2 : 0;
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
function zs(e) {
  return e ? /* @__PURE__ */ dd(e) || Cv(e) ? Ct({}, e) : e : null;
}
function oa(e, t, i = !1, n = !1) {
  const { props: a, ref: r, patchFlag: s, children: d, transition: c } = e, m = t ? ei(a || {}, t) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && Lv(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? Le(r) ? r.concat(Vl(t)) : [r, Vl(t)] : Vl(t)
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
    ssContent: e.ssContent && oa(e.ssContent),
    ssFallback: e.ssFallback && oa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && n && Fs(
    v,
    c.clone(v)
  ), v;
}
function te(e = " ", t = 0) {
  return fe(il, null, e, t);
}
function E(e = "", t = !1) {
  return t ? (p(), De(zt, null, e)) : fe(zt, null, e);
}
function rn(e) {
  return e == null || typeof e == "boolean" ? fe(zt) : Le(e) ? fe(
    W,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Us(e) ? Sn(e) : fe(il, null, String(e));
}
function Sn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : oa(e);
}
function io(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Le(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), io(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !Cv(t) ? t._ctx = jt : a === 3 && jt && (jt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (je(t)) {
    if (n & 65) {
      io(e, { default: t });
      return;
    }
    t = { default: t, _ctx: jt }, i = 32;
  } else
    t = String(t), n & 64 ? (i = 16, t = [te(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function ei(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = ke([t.class, n.class]));
      else if (a === "style")
        t.style = fi([t.style, n.style]);
      else if (Yo(a)) {
        const r = t[a], s = n[a];
        s && r !== s && !(Le(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Zo(a) && (t[a] = s);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Qi(e, t, i, n = null) {
  Ri(e, t, 7, [
    i,
    n
  ]);
}
const i1 = gv();
let n1 = 0;
function a1(e, t, i) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || i1, r = {
    uid: n1++,
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
    scope: new Tm(
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
    propsOptions: Av(n, a),
    emitsOptions: _v(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: et,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: et,
    data: et,
    props: et,
    attrs: et,
    slots: et,
    refs: et,
    setupState: et,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = My.bind(null, r), e.ce && e.ce(r), r;
}
let Xt = null;
const ca = () => Xt || jt;
let no, js;
{
  const e = eu(), t = (i, n) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(n), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  no = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Xt = i
  ), js = t(
    "__VUE_SSR_SETTERS__",
    (i) => Bs = i
  );
}
const nl = (e) => {
  const t = Xt;
  return no(e), e.scope.on(), () => {
    e.scope.off(), no(t);
  };
}, Kf = () => {
  Xt && Xt.scope.off(), no(null);
};
function Pv(e) {
  return e.vnode.shapeFlag & 4;
}
let Bs = !1;
function r1(e, t = !1, i = !1) {
  t && js(t);
  const { props: n, children: a } = e.vnode, r = Pv(e);
  Vy(e, n, r, t), Wy(e, a, i || t);
  const s = r ? s1(e, t) : void 0;
  return t && js(!1), s;
}
function s1(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ey);
  const { setup: n } = i;
  if (n) {
    In();
    const a = e.setupContext = n.length > 1 ? Fv(e) : null, r = nl(e), s = el(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = Ah(s);
    if (Ln(), r(), (d || e.sp) && !yr(e) && ov(e), d) {
      if (s.then(Kf, Kf), t)
        return s.then((c) => {
          js(!0);
          try {
            Gf(e, c, t);
          } finally {
            js(!1);
          }
        }).catch((c) => {
          nu(c, e, 0);
        });
      e.asyncDep = s;
    } else
      Gf(e, s);
  } else
    Dv(e);
}
function Gf(e, t, i) {
  je(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : at(t) && (e.setupState = Yh(t)), Dv(e);
}
function Dv(e, t, i) {
  const n = e.type;
  e.render || (e.render = n.render || Oi);
  {
    const a = nl(e);
    In();
    try {
      Ny(e);
    } finally {
      Ln(), a();
    }
  }
}
const l1 = {
  get(e, t) {
    return Yt(e, "get", ""), e[t];
  }
};
function Fv(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, l1),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function cu(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yh(qm(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in ws)
        return ws[i](e);
    },
    has(t, i) {
      return i in t || i in ws;
    }
  })) : e.proxy;
}
function o1(e, t = !0) {
  return je(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function u1(e) {
  return je(e) && "__vccOpts" in e;
}
const j = (e, t) => /* @__PURE__ */ Xm(e, t, Bs);
function ci(e, t, i) {
  try {
    to(-1);
    const n = arguments.length;
    return n === 2 ? at(t) && !Le(t) ? Us(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && Us(i) && (i = [i]), fe(e, t, i));
  } finally {
    to(1);
  }
}
const c1 = "3.5.42", d1 = Oi;
let Nc;
const Wf = typeof window < "u" && window.trustedTypes;
if (Wf)
  try {
    Nc = /* @__PURE__ */ Wf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Mv = Nc ? (e) => Nc.createHTML(e) : (e) => e, f1 = "http://www.w3.org/2000/svg", p1 = "http://www.w3.org/1998/Math/MathML", kn = typeof document < "u" ? document : null, Yf = kn && /* @__PURE__ */ kn.createElement("template"), h1 = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, n) => {
    const a = t === "svg" ? kn.createElementNS(f1, e) : t === "mathml" ? kn.createElementNS(p1, e) : i ? kn.createElement(e, { is: i }) : kn.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => kn.createTextNode(e),
  createComment: (e) => kn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => kn.querySelector(e),
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
      Yf.innerHTML = Mv(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const d = Yf.content;
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
}, Kn = "transition", is = "animation", Hs = /* @__PURE__ */ Symbol("_vtc"), Uv = {
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
}, v1 = /* @__PURE__ */ Ct(
  {},
  nv,
  Uv
), b1 = (e) => (e.displayName = "Transition", e.props = v1, e), g1 = /* @__PURE__ */ b1(
  (e, { slots: t }) => ci(vy, m1(e), t)
), $a = (e, t = []) => {
  Le(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, Zf = (e) => e ? Le(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function m1(e) {
  const t = {};
  for (const H in e)
    H in Uv || (t[H] = e[H]);
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
    appearActiveClass: m = s,
    appearToClass: v = d,
    leaveFromClass: y = `${i}-leave-from`,
    leaveActiveClass: g = `${i}-leave-active`,
    leaveToClass: k = `${i}-leave-to`
  } = e, T = y1(a), C = T && T[0], $ = T && T[1], {
    onBeforeEnter: I,
    onEnter: D,
    onEnterCancelled: P,
    onLeave: N,
    onLeaveCancelled: ce,
    onBeforeAppear: J = I,
    onAppear: x = D,
    onAppearCancelled: q = P
  } = t, B = (H, K, R, V) => {
    H._enterCancelled = V, Oa(H, K ? v : d), Oa(H, K ? m : s), R && R();
  }, Y = (H, K) => {
    H._isLeaving = !1, Oa(H, y), Oa(H, k), Oa(H, g), K && K();
  }, se = (H) => (K, R) => {
    const V = H ? x : D, Q = () => B(K, H, R);
    $a(V, [K, Q]), Xf(() => {
      Oa(K, H ? c : r), mn(K, H ? v : d), Zf(V) || Jf(K, n, C, Q);
    });
  };
  return Ct(t, {
    onBeforeEnter(H) {
      $a(I, [H]), mn(H, r), mn(H, s);
    },
    onBeforeAppear(H) {
      $a(J, [H]), mn(H, c), mn(H, m);
    },
    onEnter: se(!1),
    onAppear: se(!0),
    onLeave(H, K) {
      H._isLeaving = !0;
      const R = () => Y(H, K);
      mn(H, y), H._enterCancelled ? (mn(H, g), tp(H)) : (tp(H), mn(H, g)), Xf(() => {
        H._isLeaving && (Oa(H, y), mn(H, k), Zf(N) || Jf(H, n, $, R));
      }), $a(N, [H, R]);
    },
    onEnterCancelled(H) {
      B(H, !1, void 0, !0), $a(P, [H]);
    },
    onAppearCancelled(H) {
      B(H, !0, void 0, !0), $a(q, [H]);
    },
    onLeaveCancelled(H) {
      Y(H), $a(ce, [H]);
    }
  });
}
function y1(e) {
  if (e == null)
    return null;
  if (at(e))
    return [Hu(e.enter), Hu(e.leave)];
  {
    const t = Hu(e);
    return [t, t];
  }
}
function Hu(e) {
  return bm(e);
}
function mn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Hs] || (e[Hs] = /* @__PURE__ */ new Set())).add(t);
}
function Oa(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const i = e[Hs];
  i && (i.delete(t), i.size || (e[Hs] = void 0));
}
function Xf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let _1 = 0;
function Jf(e, t, i, n) {
  const a = e._endId = ++_1, r = () => {
    a === e._endId && n();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: s, timeout: d, propCount: c } = w1(e, t);
  if (!s)
    return n();
  const m = s + "end";
  let v = 0;
  const y = () => {
    e.removeEventListener(m, g), r();
  }, g = (k) => {
    k.target === e && ++v >= c && y();
  };
  setTimeout(() => {
    v < c && y();
  }, d + 1), e.addEventListener(m, g);
}
function w1(e, t) {
  const i = window.getComputedStyle(e), n = (T) => (i[T] || "").split(", "), a = n(`${Kn}Delay`), r = n(`${Kn}Duration`), s = Qf(a, r), d = n(`${is}Delay`), c = n(`${is}Duration`), m = Qf(d, c);
  let v = null, y = 0, g = 0;
  t === Kn ? s > 0 && (v = Kn, y = s, g = r.length) : t === is ? m > 0 && (v = is, y = m, g = c.length) : (y = Math.max(s, m), v = y > 0 ? s > m ? Kn : is : null, g = v ? v === Kn ? r.length : c.length : 0);
  const k = v === Kn && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Kn}Property`).toString()
  );
  return {
    type: v,
    timeout: y,
    propCount: g,
    hasTransform: k
  };
}
function Qf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((i, n) => ep(i) + ep(e[n])));
}
function ep(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function tp(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function k1(e, t, i) {
  const n = e[Hs];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const ao = /* @__PURE__ */ Symbol("_vod"), zv = /* @__PURE__ */ Symbol("_vsh"), Ha = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: i }) {
    e[ao] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : ns(e, t);
  },
  mounted(e, { value: t }, { transition: i }) {
    i && t && i.enter(e);
  },
  updated(e, { value: t, oldValue: i }, { transition: n }) {
    !t != !i && (n ? t ? (n.beforeEnter(e), ns(e, !0), n.enter(e)) : n.leave(e, () => {
      ns(e, !1);
    }) : ns(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ns(e, t);
  }
};
function ns(e, t) {
  e.style.display = t ? e[ao] : "none", e[zv] = !t;
}
const jv = /* @__PURE__ */ Symbol("");
function S1(e) {
  const t = ca();
  if (!t)
    return;
  const i = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => ro(r, a));
  }, n = () => {
    const a = e(t.proxy);
    t.ce ? ro(t.ce, a) : Rc(t.subTree, a), i(a);
  };
  dv(() => {
    Jh(n);
  }), Et(() => {
    qe(n, Oi, { flush: "post" });
    const a = new MutationObserver(n);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), tl(() => a.disconnect());
  });
}
function Rc(e, t) {
  if (e.shapeFlag & 128) {
    const i = e.suspense;
    e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      Rc(i.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    ro(e.el, t);
  else if (e.type === W)
    e.children.forEach((i) => Rc(i, t));
  else if (e.type === Hl) {
    let { el: i, anchor: n } = e;
    for (; i && (ro(i, t), i !== n); )
      i = i.nextSibling;
  }
}
function ro(e, t) {
  if (e.nodeType === 1) {
    const i = e.style;
    let n = "";
    for (const a in t) {
      const r = Cm(t[a]);
      i.setProperty(`--${a}`, r), n += `--${a}: ${r};`;
    }
    i[jv] = n;
  }
}
const C1 = /(?:^|;)\s*display\s*:/;
function T1(e, t, i) {
  const n = e.style, a = vt(i);
  let r = !1;
  if (i && !a) {
    if (t)
      if (vt(t))
        for (const s of t.split(";")) {
          const d = s.slice(0, s.indexOf(":")).trim();
          i[d] == null && fs(n, d, "");
        }
      else
        for (const s in t)
          i[s] == null && fs(n, s, "");
    for (const s in i) {
      s === "display" && (r = !0);
      const d = i[s];
      d != null ? E1(
        e,
        s,
        !vt(t) && t ? t[s] : void 0,
        d
      ) || fs(n, s, d) : fs(n, s, "");
    }
  } else if (a) {
    if (t !== i) {
      const s = n[jv];
      s && (i += ";" + s), n.cssText = i, r = C1.test(i);
    }
  } else t && e.removeAttribute("style");
  ao in e && (e[ao] = r ? n.display : "", e[zv] && (n.display = "none"));
}
const Rl = /\s*!important$/;
function fs(e, t, i) {
  if (Le(i))
    i.forEach((n) => fs(e, t, n));
  else if (i == null && (i = ""), t.startsWith("--"))
    Rl.test(i) ? e.setProperty(t, i.replace(Rl, ""), "important") : e.setProperty(t, i);
  else {
    const n = A1(e, t);
    Rl.test(i) ? e.setProperty(
      Fn(n),
      i.replace(Rl, ""),
      "important"
    ) : e[n] = i;
  }
}
const ip = ["Webkit", "Moz", "ms"], Vu = {};
function A1(e, t) {
  const i = Vu[t];
  if (i)
    return i;
  let n = Jt(t);
  if (n !== "filter" && n in e)
    return Vu[t] = n;
  n = Jo(n);
  for (let a = 0; a < ip.length; a++) {
    const r = ip[a] + n;
    if (r in e)
      return Vu[t] = r;
  }
  return t;
}
function E1(e, t, i, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && vt(n) && i === n;
}
const np = "http://www.w3.org/1999/xlink";
function ap(e, t, i, n, a, r = km(t)) {
  n && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(np, t.slice(6, t.length)) : e.setAttributeNS(np, t, i) : i == null || r && !Oh(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Vi(i) ? String(i) : i
  );
}
function rp(e, t, i, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    i != null && (e[t] = t === "innerHTML" ? Mv(i) : i);
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
    d === "boolean" ? i = Oh(i) : i == null && d === "string" ? (i = "", s = !0) : d === "number" && (i = 0, s = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function ia(e, t, i, n) {
  e.addEventListener(t, i, n);
}
function x1(e, t, i, n) {
  e.removeEventListener(t, i, n);
}
const sp = /* @__PURE__ */ Symbol("_vei");
function $1(e, t, i, n, a = null) {
  const r = e[sp] || (e[sp] = {}), s = r[t];
  if (n && s)
    s.value = n;
  else {
    const [d, c] = R1(t);
    if (n) {
      const m = r[t] = P1(
        n,
        a
      );
      ia(e, d, m, c);
    } else s && (x1(e, d, s, c), r[t] = void 0);
  }
}
const O1 = /(Once|Passive|Capture)$/, N1 = /^on:?(?:Once|Passive|Capture)$/;
function R1(e) {
  let t, i;
  for (; (i = e.match(O1)) && !N1.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Fn(e.slice(2)), t];
}
let qu = 0;
const I1 = /* @__PURE__ */ Promise.resolve(), L1 = () => qu || (I1.then(() => qu = 0), qu = Date.now());
function P1(e, t) {
  const i = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= i.attached)
      return;
    const a = i.value;
    if (Le(a)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const s = a.slice(), d = [n];
      for (let c = 0; c < s.length && !n._stopped; c++) {
        const m = s[c];
        m && Ri(
          m,
          t,
          5,
          d
        );
      }
    } else
      Ri(
        a,
        t,
        5,
        [n]
      );
  };
  return i.value = e, i.attached = L1(), i;
}
const lp = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, D1 = (e, t, i, n, a, r) => {
  const s = a === "svg";
  t === "class" ? k1(e, n, s) : t === "style" ? T1(e, i, n) : Yo(t) ? Zo(t) || $1(e, t, i, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : F1(e, t, n, s)) ? (rp(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ap(e, t, n, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (M1(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !vt(n))) ? rp(e, Jt(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), ap(e, t, n, s));
};
function F1(e, t, i, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && lp(t) && je(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return lp(t) && vt(i) ? !1 : t in e;
}
function M1(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const n = Jt(t);
  return Array.isArray(i) ? i.some((a) => Jt(a) === n) : Object.keys(i).some((a) => Jt(a) === n);
}
const Tr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Le(t) ? (i) => Bl(t, i) : t;
};
function U1(e) {
  e.target.composing = !0;
}
function op(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const sn = /* @__PURE__ */ Symbol("_assign"), Il = /* @__PURE__ */ Symbol("_initialValue");
function Ku(e, t, i) {
  return t && (e = e.trim()), i && (e = Qo(e)), e;
}
const We = {
  created(e, { modifiers: { lazy: t, trim: i, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[Il] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Il] = e.defaultValue.replace(/\r\n?/g, `
`))), e[sn] = Tr(a);
    const r = n || a.props && a.props.type === "number";
    ia(e, t ? "change" : "input", (s) => {
      s.target.composing || e[sn](Ku(e.value, i, r));
    }), (i || r) && ia(e, "change", () => {
      e.value = Ku(e.value, i, r);
    }), t || (ia(e, "compositionstart", U1), ia(e, "compositionend", op), ia(e, "change", op));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: n } }) {
    const a = t ?? "", r = e[Il];
    delete e[Il], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[sn](Ku(e.value, i, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: n, trim: a, number: r } }, s) {
    if (e[sn] = Tr(s), e.composing) return;
    const d = (r || e.type === "number") && !/^0\d/.test(e.value) ? Qo(e.value) : e.value, c = t ?? "";
    if (d === c)
      return;
    const m = e.getRootNode();
    (m instanceof Document || m instanceof ShadowRoot) && m.activeElement === e && e.type !== "range" && (n && t === i || a && e.value.trim() === c) || (e.value = c);
  }
}, qa = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, i) {
    e[sn] = Tr(i), ia(e, "change", () => {
      const n = e._modelValue, a = Vs(e), r = e.checked, s = e[sn];
      if (Le(n)) {
        const d = rd(n, a), c = d !== -1;
        if (r && !c)
          s(n.concat(a));
        else if (!r && c) {
          const m = [...n];
          m.splice(d, 1), s(m);
        }
      } else if (Nn(n)) {
        const d = new Set(n);
        r ? d.add(a) : d.delete(a), s(d);
      } else
        s(Bv(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: up,
  beforeUpdate(e, t, i) {
    e[sn] = Tr(i), up(e, t, i);
  }
};
function up(e, { value: t, oldValue: i }, n) {
  e._modelValue = t;
  let a;
  if (Le(t))
    a = rd(t, n.props.value) > -1;
  else if (Nn(t))
    a = t.has(n.props.value);
  else {
    if (t === i) return;
    a = Rn(t, Bv(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const it = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, n) {
    e._modelValue = t, ia(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => i ? Qo(Vs(c)) : Vs(c)
      ), r = e.multiple, s = r ? Nn(e._modelValue) ? new Set(a) : a : a[0], d = e._pendingValue = [
        r,
        r ? Le(s) ? a.slice() : a : s
      ];
      try {
        e[sn](s);
      } finally {
        xt(() => {
          e._pendingValue === d && (e._pendingValue = void 0);
        });
      }
    }), e[sn] = Tr(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    cp(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[sn] = Tr(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !z1(t, i[1], i[0])) && cp(e, t);
  }
};
function z1(e, t, i) {
  if (!i || Le(e)) return Rn(e, t);
  if (Nn(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function cp(e, t) {
  const i = e.multiple, n = Le(t);
  if (!(i && !n && !Nn(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], d = Vs(s);
      if (i)
        if (n) {
          const c = typeof d;
          c === "string" || c === "number" ? s.selected = t.some((m) => String(m) === String(d)) : s.selected = rd(t, d) > -1;
        } else
          s.selected = t.has(d);
      else if (Rn(Vs(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Vs(e) {
  return "_value" in e ? e._value : e.value;
}
function Bv(e, t) {
  const i = t ? "_trueValue" : "_falseValue";
  return i in e ? e[i] : t;
}
const j1 = ["ctrl", "shift", "alt", "meta"], B1 = {
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
  exact: (e, t) => j1.some((i) => e[`${i}Key`] && !t.includes(i))
}, Ce = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), n = t.join(".");
  return i[n] || (i[n] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const d = B1[t[s]];
      if (d && d(a, t)) return;
    }
    return e(a, ...r);
  }));
}, H1 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, ot = (e, t) => {
  const i = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return i[n] || (i[n] = ((a) => {
    if (!("key" in a))
      return;
    const r = Fn(a.key);
    if (t.some(
      (s) => s === r || H1[s] === r
    ))
      return e(a);
  }));
}, V1 = /* @__PURE__ */ Ct({ patchProp: D1 }, h1);
let dp;
function q1() {
  return dp || (dp = Zy(V1));
}
const K1 = ((...e) => {
  const t = q1().createApp(...e), { mount: i } = t;
  return t.mount = (n) => {
    const a = W1(n);
    if (!a) return;
    const r = t._component;
    !je(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = i(a, !1, G1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function G1(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function W1(e) {
  return vt(e) ? document.querySelector(e) : e;
}
function so(e, t, i) {
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
const fp = (e, t, i) => {
  const n = Object.assign({
    escape: !0
  }, {}), a = function(r, s) {
    return s = s || {}, r.replace(
      /{([^{}]*)}/g,
      function(d, c) {
        const m = s[c];
        return n.escape ? encodeURIComponent(typeof m == "string" || typeof m == "number" ? m.toString() : d) : typeof m == "string" || typeof m == "number" ? m.toString() : d;
      }
    );
  };
  return e.charAt(0) !== "/" && (e = "/" + e), a(e, {});
}, Ki = (e, t, i) => {
  const n = Object.assign({
    noRewrite: !1
  }, {}), a = Y1();
  return window?.OC?.config?.modRewriteWorking === !0 && !n.noRewrite ? a + fp(e) : a + "/index.php" + fp(e);
};
function Y1() {
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
function pp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function Z1(e) {
  if (Array.isArray(e)) return e;
}
function X1(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n, a, r, s, d = [], c = !0, m = !1;
    try {
      if (r = (i = i.call(e)).next, t !== 0) for (; !(c = (n = r.call(i)).done) && (d.push(n.value), d.length !== t); c = !0) ;
    } catch (v) {
      m = !0, a = v;
    } finally {
      try {
        if (!c && i.return != null && (s = i.return(), Object(s) !== s)) return;
      } finally {
        if (m) throw a;
      }
    }
    return d;
  }
}
function J1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q1(e, t) {
  return Z1(e) || X1(e, t) || e_(e, t) || J1();
}
function e_(e, t) {
  if (e) {
    if (typeof e == "string") return pp(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? pp(e, t) : void 0;
  }
}
const Hv = Object.entries, hp = Object.setPrototypeOf, t_ = Object.isFrozen, i_ = Object.getPrototypeOf, n_ = Object.getOwnPropertyDescriptor;
let At = Object.freeze, Ot = Object.seal, vr = Object.create, Vv = typeof Reflect < "u" && Reflect, Ic = Vv.apply, Lc = Vv.construct;
At || (At = function(t) {
  return t;
});
Ot || (Ot = function(t) {
  return t;
});
Ic || (Ic = function(t, i) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return t.apply(i, a);
});
Lc || (Lc = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Pa = Tt(Array.prototype.forEach), a_ = Tt(Array.prototype.lastIndexOf), vp = Tt(Array.prototype.pop), as = Tt(Array.prototype.push), r_ = Tt(Array.prototype.splice), wr = Array.isArray, ps = Tt(String.prototype.toLowerCase), Gu = Tt(String.prototype.toString), bp = Tt(String.prototype.match), rs = Tt(String.prototype.replace), gp = Tt(String.prototype.indexOf), s_ = Tt(String.prototype.trim), l_ = Tt(Number.prototype.toString), o_ = Tt(Boolean.prototype.toString), mp = typeof BigInt > "u" ? null : Tt(BigInt.prototype.toString), yp = typeof Symbol > "u" ? null : Tt(Symbol.prototype.toString), di = Tt(Object.prototype.hasOwnProperty), ss = Tt(Object.prototype.toString), Gt = Tt(RegExp.prototype.test), Na = u_(TypeError);
function Tt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
      n[a - 1] = arguments[a];
    return Ic(e, t, n);
  };
}
function u_(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
      i[n] = arguments[n];
    return Lc(e, i);
  };
}
function Qe(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ps;
  if (hp && hp(e, null), !wr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const r = i(a);
      r !== a && (t_(t) || (t[n] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function c_(e) {
  for (let t = 0; t < e.length; t++)
    di(e, t) || (e[t] = null);
  return e;
}
function mi(e) {
  const t = vr(null);
  for (const n of Hv(e)) {
    var i = Q1(n, 2);
    const a = i[0], r = i[1];
    di(e, a) && (wr(r) ? t[a] = c_(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = mi(r) : t[a] = r);
  }
  return t;
}
function d_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return l_(e);
    case "boolean":
      return o_(e);
    case "bigint":
      return mp ? mp(e) : "0";
    case "symbol":
      return yp ? yp(e) : "Symbol()";
    case "undefined":
      return ss(e);
    case "function":
    case "object": {
      if (e === null)
        return ss(e);
      const t = e, i = zi(t, "toString");
      if (typeof i == "function") {
        const n = i(t);
        return typeof n == "string" ? n : ss(n);
      }
      return ss(e);
    }
    default:
      return ss(e);
  }
}
function zi(e, t) {
  for (; e !== null; ) {
    const n = n_(e, t);
    if (n) {
      if (n.get)
        return Tt(n.get);
      if (typeof n.value == "function")
        return Tt(n.value);
    }
    e = i_(e);
  }
  function i() {
    return null;
  }
  return i;
}
function f_(e) {
  try {
    return Gt(e, ""), !0;
  } catch {
    return !1;
  }
}
const _p = At(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Wu = At(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Yu = At(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), p_ = At(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Zu = At(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), h_ = At(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), wp = At(["#text"]), kp = At(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Xu = At(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Sp = At(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ll = At(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), v_ = Ot(/{{[\w\W]*|^[\w\W]*}}/g), b_ = Ot(/<%[\w\W]*|^[\w\W]*%>/g), g_ = Ot(/\${[\w\W]*/g), m_ = Ot(/^data-[\-\w.\u00B7-\uFFFF]+$/), y_ = Ot(/^aria-[\-\w]+$/), Cp = Ot(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), __ = Ot(/^(?:\w+script|data):/i), w_ = Ot(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), k_ = Ot(/^html$/i), S_ = Ot(/^[a-z][.\w]*(-[.\w]+)+$/i), Tp = Ot(/<[/\w!]/g), Ap = Ot(/<[/\w]/g), C_ = Ot(/<\/no(script|embed|frames)/i), T_ = Ot(/\/>/i), gi = {
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
}, qv = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], A_ = At(Qe({}, qv)), E_ = (function() {
  const e = {};
  return Pa(qv, (t) => {
    e[t] = Ot(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), At(e);
})(), x_ = function() {
  return typeof window > "u" ? null : window;
}, $_ = function(t, i) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
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
}, Ep = function() {
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
}, Gn = function(t, i, n, a) {
  return di(t, i) && wr(t[i]) ? Qe(a.base ? mi(a.base) : {}, t[i], a.transform) : n;
}, Ju = function(t, i, n) {
  const a = di(t, i) ? t[i] : void 0;
  return a && typeof a == "object" ? mi(a) : n();
};
function Kv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x_();
  const t = (he) => Kv(he);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== gi.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const n = i, a = n.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, d = e.Element, c = e.NodeFilter, m = e.NamedNodeMap;
  m === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const v = e.DOMParser, y = e.trustedTypes, g = d.prototype, k = zi(g, "cloneNode"), T = zi(g, "remove"), C = zi(g, "nextSibling"), $ = zi(g, "childNodes"), I = zi(g, "parentNode"), D = zi(g, "shadowRoot"), P = zi(g, "attributes"), N = s && s.prototype ? zi(s.prototype, "nodeType") : null, ce = s && s.prototype ? zi(s.prototype, "nodeName") : null, J = s && s.prototype ? zi(s.prototype, "ownerDocument") : null, x = function(A) {
    return N ? N(A) : A.nodeType;
  }, q = function(A) {
    return ce ? ce(A) : A.nodeName;
  };
  if (typeof r == "function") {
    const he = i.createElement("template");
    he.content && he.content.ownerDocument && (i = he.content.ownerDocument);
  }
  let B, Y = "", se, H = !1, K = 0;
  const R = function() {
    if (K > 0)
      throw Na('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, V = function(A) {
    R(), K++;
    try {
      return B.createHTML(A);
    } finally {
      K--;
    }
  }, Q = function(A) {
    R(), K++;
    try {
      return B.createScriptURL(A);
    } finally {
      K--;
    }
  }, ie = function() {
    return H || (se = $_(y, a), H = !0), se;
  }, Z = i, ue = Z.implementation, Te = Z.createNodeIterator, Pe = Z.createDocumentFragment, Re = Z.getElementsByTagName, Ue = n.importNode;
  let Ne = Ep();
  t.isSupported = typeof Hv == "function" && typeof I == "function" && ue && ue.createHTMLDocument !== void 0;
  const dt = v_, $e = b_, Ie = g_, be = m_, Fe = y_, st = __, ee = w_, S = S_;
  let O = Cp, L = null;
  const z = Qe({}, [..._p, ...Wu, ...Yu, ...Zu, ...wp]);
  let M = null;
  const X = Qe({}, [...kp, ...Xu, ...Sp, ...Ll]);
  let ne = Object.seal(vr(null, {
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
  })), re = null, pe = null;
  const ae = Object.seal(vr(null, {
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
  let xe = !0, ye = !0, we = !1, Oe = !0, ze = !1, Ve = !0, Ke = !1, ut = !1, ft = null, bt = null, mt = !1, Nt = !1, oi = !1, kt = !1, Rt = !0, cn = !1;
  const Ht = "user-content-";
  let ui = !0, Un = !1, pi = {}, Gi = null;
  const pa = Qe({}, [
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
  let Wa = null;
  const Ar = Qe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Er = null;
  const dn = Qe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Wi = "http://www.w3.org/1998/Math/MathML", Yi = "http://www.w3.org/2000/svg", Vt = "http://www.w3.org/1999/xhtml";
  let lt = Vt, xr = !1, Ya = null;
  const sl = Qe({}, [Wi, Yi, Vt], Gu), ha = At(["mi", "mo", "mn", "ms", "mtext"]);
  let Za = Qe({}, ha);
  const zn = At(["annotation-xml"]);
  let fn = Qe({}, zn);
  const va = Qe({}, ["title", "style", "font", "a", "script"]);
  let Ii = null;
  const ba = ["application/xhtml+xml", "text/html"], jn = "text/html";
  let yt = null, pn = null;
  const Li = i.createElement("form"), $r = function(A) {
    return A instanceof RegExp || A instanceof Function;
  }, Or = function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (pn && pn === A)
      return;
    (!A || typeof A != "object") && (A = {}), A = mi(A), Ii = // eslint-disable-next-line unicorn/prefer-includes
    ba.indexOf(A.PARSER_MEDIA_TYPE) === -1 ? jn : A.PARSER_MEDIA_TYPE, yt = Ii === "application/xhtml+xml" ? Gu : ps, L = Gn(A, "ALLOWED_TAGS", z, {
      transform: yt
    }), M = Gn(A, "ALLOWED_ATTR", X, {
      transform: yt
    }), Ya = Gn(A, "ALLOWED_NAMESPACES", sl, {
      transform: Gu
    }), Er = Gn(A, "ADD_URI_SAFE_ATTR", dn, {
      transform: yt,
      base: dn
    }), Wa = Gn(A, "ADD_DATA_URI_TAGS", Ar, {
      transform: yt,
      base: Ar
    }), Gi = Gn(A, "FORBID_CONTENTS", pa, {
      transform: yt
    }), re = Gn(A, "FORBID_TAGS", mi({}), {
      transform: yt
    }), pe = Gn(A, "FORBID_ATTR", mi({}), {
      transform: yt
    }), pi = di(A, "USE_PROFILES") ? A.USE_PROFILES && typeof A.USE_PROFILES == "object" ? mi(A.USE_PROFILES) : A.USE_PROFILES : !1, xe = A.ALLOW_ARIA_ATTR !== !1, ye = A.ALLOW_DATA_ATTR !== !1, we = A.ALLOW_UNKNOWN_PROTOCOLS || !1, Oe = A.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ze = A.SAFE_FOR_TEMPLATES || !1, Ve = A.SAFE_FOR_XML !== !1, Ke = A.WHOLE_DOCUMENT || !1, Nt = A.RETURN_DOM || !1, oi = A.RETURN_DOM_FRAGMENT || !1, kt = A.RETURN_TRUSTED_TYPE || !1, mt = A.FORCE_BODY || !1, Rt = A.SANITIZE_DOM !== !1, cn = A.SANITIZE_NAMED_PROPS || !1, ui = A.KEEP_CONTENT !== !1, Un = A.IN_PLACE || !1, O = f_(A.ALLOWED_URI_REGEXP) ? A.ALLOWED_URI_REGEXP : Cp, lt = typeof A.NAMESPACE == "string" ? A.NAMESPACE : Vt, Za = Ju(
      A,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Qe({}, ha)
      // Default built-in map
    ), fn = Ju(
      A,
      "HTML_INTEGRATION_POINTS",
      () => Qe({}, zn)
      // Default built-in map
    );
    const U = Ju(A, "CUSTOM_ELEMENT_HANDLING", () => vr(null));
    if (ne = vr(null), di(U, "tagNameCheck") && $r(U.tagNameCheck) && (ne.tagNameCheck = U.tagNameCheck), di(U, "attributeNameCheck") && $r(U.attributeNameCheck) && (ne.attributeNameCheck = U.attributeNameCheck), di(U, "allowCustomizedBuiltInElements") && typeof U.allowCustomizedBuiltInElements == "boolean" && (ne.allowCustomizedBuiltInElements = U.allowCustomizedBuiltInElements), Ot(ne), ze && (ye = !1), oi && (Nt = !0), pi && (L = Qe({}, wp), M = vr(null), pi.html === !0 && (Qe(L, _p), Qe(M, kp)), pi.svg === !0 && (Qe(L, Wu), Qe(M, Xu), Qe(M, Ll)), pi.svgFilters === !0 && (Qe(L, Yu), Qe(M, Xu), Qe(M, Ll)), pi.mathMl === !0 && (Qe(L, Zu), Qe(M, Sp), Qe(M, Ll))), ae.tagCheck = null, ae.attributeCheck = null, di(A, "ADD_TAGS") && (typeof A.ADD_TAGS == "function" ? ae.tagCheck = A.ADD_TAGS : wr(A.ADD_TAGS) && (L === z && (L = mi(L)), Qe(L, A.ADD_TAGS, yt))), di(A, "ADD_ATTR") && (typeof A.ADD_ATTR == "function" ? ae.attributeCheck = A.ADD_ATTR : wr(A.ADD_ATTR) && (M === X && (M = mi(M)), Qe(M, A.ADD_ATTR, yt))), di(A, "ADD_FORBID_CONTENTS") && wr(A.ADD_FORBID_CONTENTS) && (Gi === pa && (Gi = mi(Gi)), Qe(Gi, A.ADD_FORBID_CONTENTS, yt)), ui && (L["#text"] = !0), Ke && Qe(L, ["html", "head", "body"]), L.table && (Qe(L, ["tbody"]), delete re.tbody), A.TRUSTED_TYPES_POLICY) {
      if (typeof A.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Na('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof A.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Na('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const le = B;
      B = A.TRUSTED_TYPES_POLICY;
      try {
        Y = V("");
      } catch (_e) {
        throw B = le, _e;
      }
    } else A.TRUSTED_TYPES_POLICY === null ? (B = void 0, Y = "") : (B === void 0 && (B = ie()), B && typeof Y == "string" && (Y = V("")));
    At && At(A), pn = A;
  }, ll = Qe({}, [...Wu, ...Yu, ...p_]), ol = Qe({}, [...Zu, ...h_]), _t = function(A, U, le) {
    return U.namespaceURI === Vt ? A === "svg" : U.namespaceURI === Wi ? A === "svg" && (le === "annotation-xml" || Za[le]) : !!ll[A];
  }, Nr = function(A, U, le) {
    return U.namespaceURI === Vt ? A === "math" : U.namespaceURI === Yi ? A === "math" && fn[le] : !!ol[A];
  }, mu = function(A, U, le) {
    return U.namespaceURI === Yi && !fn[le] || U.namespaceURI === Wi && !Za[le] ? !1 : !ol[A] && (va[A] || !ll[A]);
  }, yu = function(A) {
    let U = I(A);
    (!U || !U.tagName) && (U = {
      namespaceURI: lt,
      tagName: "template"
    });
    const le = ps(A.tagName), _e = ps(U.tagName);
    return Ya[A.namespaceURI] ? A.namespaceURI === Yi ? _t(le, U, _e) : A.namespaceURI === Wi ? Nr(le, U, _e) : A.namespaceURI === Vt ? mu(le, U, _e) : !!(Ii === "application/xhtml+xml" && Ya[A.namespaceURI]) : !1;
  }, qt = function(A) {
    as(t.removed, {
      element: A
    });
    try {
      I(A).removeChild(A);
    } catch {
      if (T(A), !I(A))
        throw Na("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ul = function(A, U, le) {
    try {
      A.removeAttributeNode(U);
    } catch {
      try {
        A.removeAttribute(le);
      } catch {
      }
    }
  }, Pi = function(A) {
    Xa(A);
    const U = $(A);
    if (U) {
      const _e = [];
      Pa(U, (Ee) => {
        as(_e, Ee);
      }), Pa(_e, (Ee) => {
        try {
          T(Ee);
        } catch {
        }
      });
    }
    const le = P(A);
    if (le)
      for (let _e = le.length - 1; _e >= 0; --_e) {
        const Ee = le[_e], Me = Ee && Ee.name;
        typeof Me == "string" && ul(A, Ee, Me);
      }
  }, Di = function(A, U, le) {
    if (!le)
      try {
        le = U.getAttributeNode(A);
      } catch {
        le = null;
      }
    as(t.removed, {
      attribute: le || null,
      from: U
    });
    try {
      le ? U.removeAttributeNode(le) : U.removeAttribute(A);
    } catch {
      try {
        U.removeAttribute(A);
      } catch {
      }
    }
    if (A === "is")
      if (Nt || oi)
        try {
          qt(U);
        } catch {
        }
      else
        try {
          U.setAttribute(A, "");
        } catch {
        }
  }, _u = function(A) {
    const U = P(A);
    if (U)
      for (let le = U.length - 1; le >= 0; --le) {
        const _e = U[le], Ee = _e && _e.name;
        typeof Ee != "string" || M[yt(Ee)] || ul(A, _e, Ee);
      }
  }, Xa = function(A) {
    const U = [A];
    for (; U.length > 0; ) {
      const le = U.pop();
      x(le) === gi.element && _u(le);
      const Ee = $(le);
      if (Ee)
        for (let Me = Ee.length - 1; Me >= 0; --Me)
          U.push(Ee[Me]);
    }
  }, cl = function(A, U) {
    return Ve ? A === "patchsrc" ? !0 : A === "for" && U !== "label" && U !== "output" : !1;
  }, wu = function(A) {
    if (!Ve)
      return;
    const U = [A];
    for (; U.length > 0; ) {
      const le = U.pop(), _e = x(le);
      if (_e === gi.processingInstruction || _e === gi.comment && Gt(Ap, le.data)) {
        try {
          T(le);
        } catch {
        }
        continue;
      }
      if (_e === gi.element) {
        const Me = le, ct = yt(q(le));
        try {
          Me.hasAttribute && Me.hasAttribute("patchsrc") && Me.removeAttribute("patchsrc"), Me.hasAttribute && Me.hasAttribute("for") && cl("for", ct) && Me.removeAttribute("for");
        } catch {
        }
      }
      const Ee = $(le);
      if (Ee)
        for (let Me = Ee.length - 1; Me >= 0; --Me)
          U.push(Ee[Me]);
    }
  }, dl = function(A) {
    let U = null, le = null;
    if (mt)
      A = "<remove></remove>" + A;
    else {
      const Me = bp(A, /^[\r\n\t ]+/);
      le = Me && Me[0];
    }
    Ii === "application/xhtml+xml" && lt === Vt && (A = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + A + "</body></html>");
    const _e = B ? V(A) : A;
    if (lt === Vt)
      try {
        U = new v().parseFromString(_e, Ii);
      } catch {
      }
    if (!U || !U.documentElement) {
      U = ue.createDocument(lt, "template", null);
      try {
        U.documentElement.innerHTML = xr ? Y : _e;
      } catch {
      }
    }
    const Ee = U.body || U.documentElement;
    return A && le && Ee.insertBefore(i.createTextNode(le), Ee.childNodes[0] || null), lt === Vt ? Re.call(U, Ke ? "html" : "body")[0] : Ke ? U.documentElement : Ee;
  }, fl = function(A) {
    const U = J ? J(A) : A.ownerDocument;
    return Te.call(
      U || A,
      A,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, Ja = function(A) {
    return A = rs(A, dt, " "), A = rs(A, $e, " "), A = rs(A, Ie, " "), A;
  }, Rr = function(A) {
    var U;
    A.normalize();
    const le = J ? J(A) : A.ownerDocument, _e = Te.call(
      le || A,
      A,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Ee = _e.nextNode();
    for (; Ee; )
      Ee.data = Ja(Ee.data), Ee = _e.nextNode();
    const Me = (U = A.querySelectorAll) === null || U === void 0 ? void 0 : U.call(A, "template");
    Me && Pa(Me, (ct) => {
      Bn(ct.content) && Rr(ct.content);
    });
  }, Qa = function(A) {
    const U = ce ? ce(A) : null;
    return typeof U != "string" || yt(U) !== "form" ? !1 : typeof A.nodeName != "string" || typeof A.textContent != "string" || typeof A.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    A.attributes !== P(A) || typeof A.removeAttribute != "function" || typeof A.setAttribute != "function" || typeof A.namespaceURI != "string" || typeof A.insertBefore != "function" || typeof A.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    A.nodeType !== N(A) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    A.childNodes !== $(A);
  }, Bn = function(A) {
    if (!N || typeof A != "object" || A === null)
      return !1;
    try {
      return N(A) === gi.documentFragment;
    } catch {
      return !1;
    }
  }, ga = function(A) {
    if (!N || typeof A != "object" || A === null)
      return !1;
    try {
      return typeof N(A) == "number";
    } catch {
      return !1;
    }
  };
  function ki(he, A, U) {
    he.length !== 0 && Pa(he, (le) => {
      le.call(t, A, U, pn);
    });
  }
  const ku = function(A, U) {
    return !!(Ve && A.hasChildNodes() && !ga(A.firstElementChild) && Gt(Tp, A.textContent) && Gt(Tp, A.innerHTML) || Ve && A.namespaceURI === Vt && A_[U] && (ga(A.firstElementChild) || typeof A.textContent == "string" && Gt(E_[U], A.textContent)) || A.nodeType === gi.processingInstruction || Ve && A.nodeType === gi.comment && Gt(Ap, A.data));
  }, er = function(A, U) {
    if (A instanceof RegExp)
      return Gt(A, U);
    if (A instanceof Function) {
      for (var le = arguments.length, _e = new Array(le > 2 ? le - 2 : 0), Ee = 2; Ee < le; Ee++)
        _e[Ee - 2] = arguments[Ee];
      return !!A(U, ..._e);
    }
    return !1;
  }, Su = function(A, U, le) {
    if (!re[U] && Pr(U) && er(ne.tagNameCheck, U))
      return !1;
    if (ui && !Gi[U]) {
      const _e = I(A), Ee = $(A);
      if (Ee && _e) {
        const Me = Ee.length;
        for (let ct = Me - 1; ct >= 0; --ct) {
          const pt = A === le ? k(Ee[ct], !0) : Ee[ct];
          _e.insertBefore(pt, C(A));
        }
      }
    }
    return qt(A), !0;
  }, Ir = function(A, U, le, _e) {
    return A.length === 0 ? U : U === le || U === _e ? mi(U) : U;
  }, tr = function(A, U) {
    return A === U || I(A) !== null ? !1 : (Un && Xa(A), !0);
  }, ir = function(A, U) {
    if (ki(Ne.beforeSanitizeElements, A, null), tr(A, U))
      return !0;
    if (Qa(A))
      return qt(A), !0;
    const le = yt(q(A));
    if (L = Ir(Ne.uponSanitizeElement, L, z, ft), ki(Ne.uponSanitizeElement, A, {
      tagName: le,
      allowedTags: L
    }), tr(A, U))
      return !0;
    if (ku(A, le))
      return qt(A), !0;
    if (re[le] || !(ae.tagCheck instanceof Function && ae.tagCheck(le)) && !L[le]) {
      const Ee = Su(A, le, U);
      return Ee === !1 && ki(Ne.afterSanitizeElements, A, null), Ee;
    }
    if (x(A) === gi.element && !yu(A) || (le === "noscript" || le === "noembed" || le === "noframes") && Gt(C_, A.innerHTML))
      return qt(A), !0;
    if (ze && A.nodeType === gi.text) {
      const Ee = Ja(A.textContent);
      A.textContent !== Ee && (as(t.removed, {
        element: A.cloneNode()
      }), A.textContent = Ee);
    }
    return ki(Ne.afterSanitizeElements, A, null), !1;
  }, nr = function(A, U, le) {
    if (pe[U] || cl(U, A) || Rt && (U === "id" || U === "name") && (le in i || le in Li))
      return !1;
    const _e = M[U] || ae.attributeCheck instanceof Function && ae.attributeCheck(U, A);
    return ye && Gt(be, U) || xe && Gt(Fe, U) ? !0 : _e ? Er[U] || Gt(O, rs(le, ee, "")) || (U === "src" || U === "xlink:href" || U === "href") && A !== "script" && gp(le, "data:") === 0 && Wa[A] || we && !Gt(st, rs(le, ee, "")) ? !0 : !le : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Pr(A) && er(ne.tagNameCheck, A) && er(ne.attributeNameCheck, U, A) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      U === "is" && ne.allowCustomizedBuiltInElements && er(ne.tagNameCheck, le)
    );
  }, Lr = Qe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Pr = function(A) {
    return !Lr[ps(A)] && Gt(S, A);
  }, Cu = function(A, U, le, _e) {
    if (B && typeof y == "object" && typeof y.getAttributeType == "function" && !le)
      switch (y.getAttributeType(A, U)) {
        case "TrustedHTML":
          return V(_e);
        case "TrustedScriptURL":
          return Q(_e);
      }
    return _e;
  }, pl = function(A, U, le, _e) {
    try {
      le ? A.setAttributeNS(le, U, _e) : A.setAttribute(U, _e), Qa(A) ? qt(A) : vp(t.removed);
    } catch {
      Di(U, A);
    }
  }, Dr = function(A) {
    ki(Ne.beforeSanitizeAttributes, A, null);
    const U = A.attributes;
    if (!U || Qa(A))
      return;
    M = Ir(Ne.uponSanitizeAttribute, M, X, bt);
    const le = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: M,
      forceKeepAttr: void 0
    };
    let _e = U.length;
    const Ee = yt(A.nodeName);
    for (; _e--; ) {
      const Me = U[_e], ct = Me.name, pt = Me.namespaceURI, It = Me.value, Lt = yt(ct), Fr = It;
      let Pt = ct === "value" ? Fr : s_(Fr);
      if (le.attrName = Lt, le.attrValue = Pt, le.keepAttr = !0, le.forceKeepAttr = void 0, ki(Ne.uponSanitizeAttribute, A, le), Pt = le.attrValue, cn && (Lt === "id" || Lt === "name") && gp(Pt, Ht) !== 0 && (Di(ct, A, Me), Pt = Ht + Pt), Ve && Gt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Pt)) {
        Di(ct, A, Me);
        continue;
      }
      if (Lt === "attributename" && bp(Pt, "href")) {
        Di(ct, A, Me);
        continue;
      }
      if (!le.forceKeepAttr) {
        if (!le.keepAttr) {
          Di(ct, A, Me);
          continue;
        }
        if (!Oe && Gt(T_, Pt)) {
          Di(ct, A, Me);
          continue;
        }
        if (ze && (Pt = Ja(Pt)), !nr(Ee, Lt, Pt)) {
          Di(ct, A, Me);
          continue;
        }
        Pt = Cu(Ee, Lt, pt, Pt), Pt !== Fr && pl(A, ct, pt, Pt);
      }
    }
    ki(Ne.afterSanitizeAttributes, A, null);
  }, ar = function(A) {
    let U = null;
    const le = fl(A);
    for (ki(Ne.beforeSanitizeShadowDOM, A, null); U = le.nextNode(); )
      if (ki(Ne.uponSanitizeShadowNode, U, null), ir(U, A), Dr(U), Bn(U.content) && ar(U.content), x(U) === gi.element) {
        const _e = D(U);
        Bn(_e) && (ma(_e), ar(_e));
      }
    ki(Ne.afterSanitizeShadowDOM, A, null);
  }, ma = function(A) {
    const U = [{
      node: A,
      shadow: null
    }];
    for (; U.length > 0; ) {
      const le = U.pop();
      if (le.shadow) {
        ar(le.shadow);
        continue;
      }
      const _e = le.node, Me = x(_e) === gi.element, ct = $(_e);
      if (ct)
        for (let pt = ct.length - 1; pt >= 0; --pt)
          U.push({
            node: ct[pt],
            shadow: null
          });
      if (Me) {
        const pt = ce ? ce(_e) : null;
        if (typeof pt == "string" && yt(pt) === "template") {
          const It = _e.content;
          Bn(It) && U.push({
            node: It,
            shadow: null
          });
        }
      }
      if (Me) {
        const pt = D(_e);
        Bn(pt) && U.push({
          node: null,
          shadow: pt
        }, {
          node: pt,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(he) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, U = null, le = null, _e = null, Ee = null;
    if (xr = !he, xr && (he = "<!-->"), typeof he != "string" && !ga(he) && (he = d_(he), typeof he != "string"))
      throw Na("dirty is not a string, aborting");
    if (!t.isSupported)
      return he;
    ut ? (L = ft, M = bt) : Or(A), (Ne.uponSanitizeElement.length > 0 || Ne.uponSanitizeAttribute.length > 0) && (L = mi(L)), Ne.uponSanitizeAttribute.length > 0 && (M = mi(M)), t.removed = [];
    const Me = Un && typeof he != "string" && ga(he);
    if (Me) {
      wu(he);
      const It = q(he);
      if (typeof It == "string") {
        const Lt = yt(It);
        if (!L[Lt] || re[Lt])
          throw Pi(he), Na("root node is forbidden and cannot be sanitized in-place");
      }
      if (Qa(he))
        throw Pi(he), Na("root node is clobbered and cannot be sanitized in-place");
      try {
        ma(he);
      } catch (Lt) {
        throw Pi(he), Lt;
      }
    } else if (ga(he))
      U = dl("<!---->"), le = U.ownerDocument.importNode(he, !0), le.nodeType === gi.element && le.nodeName === "BODY" || le.nodeName === "HTML" ? U = le : U.appendChild(le), ma(le);
    else {
      if (!Nt && !ze && !Ke && // eslint-disable-next-line unicorn/prefer-includes
      he.indexOf("<") === -1)
        return B && kt ? V(he) : he;
      if (U = dl(he), !U)
        return Nt ? null : kt ? Y : "";
    }
    U && mt && qt(U.firstChild);
    const ct = Me ? he : U;
    try {
      const It = fl(ct);
      for (; _e = It.nextNode(); )
        ir(_e, ct), Dr(_e), Bn(_e.content) && ar(_e.content);
    } catch (It) {
      throw Me && (Pi(he), Pa(t.removed, (Lt) => {
        Lt.element && Xa(Lt.element);
      })), It;
    }
    if (Me)
      return Pa(t.removed, (It) => {
        It.element && Xa(It.element);
      }), ze && Rr(he), he;
    if (Nt) {
      if (ze && Rr(U), oi)
        for (Ee = Pe.call(U.ownerDocument); U.firstChild; )
          Ee.appendChild(U.firstChild);
      else
        Ee = U;
      return (M.shadowroot || M.shadowrootmode) && (Ee = Ue.call(n, Ee, !0)), Ee;
    }
    let pt = Ke ? U.outerHTML : U.innerHTML;
    return Ke && L["!doctype"] && U.ownerDocument && U.ownerDocument.doctype && U.ownerDocument.doctype.name && Gt(k_, U.ownerDocument.doctype.name) && (pt = "<!DOCTYPE " + U.ownerDocument.doctype.name + `>
` + pt), ze && (pt = Ja(pt)), B && kt ? V(pt) : pt;
  }, t.setConfig = function() {
    let he = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Or(he), ut = !0, ft = L, bt = M;
  }, t.clearConfig = function() {
    pn = null, ut = !1, ft = null, bt = null, B = se, Y = "";
  }, t.isValidAttribute = function(he, A, U) {
    pn || Or({});
    const le = yt(he), _e = yt(A);
    return nr(le, _e, U);
  }, t.addHook = function(he, A) {
    typeof A == "function" && di(Ne, he) && as(Ne[he], A);
  }, t.removeHook = function(he, A) {
    if (di(Ne, he)) {
      if (A !== void 0) {
        const U = a_(Ne[he], A);
        return U === -1 ? void 0 : r_(Ne[he], U, 1)[0];
      }
      return vp(Ne[he]);
    }
  }, t.removeHooks = function(he) {
    di(Ne, he) && (Ne[he] = []);
  }, t.removeAllHooks = function() {
    Ne = Ep();
  }, t;
}
var Gv = Kv();
function wd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qu, xp;
function O_() {
  if (xp) return Qu;
  xp = 1;
  var e = /["'&<>]/;
  Qu = t;
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
  return Qu;
}
var N_ = O_();
const lo = /* @__PURE__ */ wd(N_);
function Wv() {
  return globalThis._nc_l10n_locale;
}
function R_() {
  return Wv().replaceAll(/_/g, "-");
}
function al() {
  return globalThis._nc_l10n_language;
}
function I_(e) {
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
function Yv(e) {
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
  }, c = (C) => C, m = (d.sanitize ? Gv.sanitize : c) || c, v = d.escape ? lo : c, y = (C) => typeof C == "string" || typeof C == "number", g = (C, $, I) => C.replace(/%n/g, "" + I).replace(/{([^{}]*)}/g, (D, P) => {
    if ($ === void 0 || !(P in $))
      return v(D);
    const N = $[P];
    return y(N) ? v(`${N}`) : typeof N == "object" && y(N.value) ? (N.escape !== !1 ? lo : c)(`${N.value}`) : v(D);
  });
  let T = (a?.bundle ?? Yv(e)).translations[t] || t;
  return T = Array.isArray(T) ? T[0] : T, m(typeof r == "object" || s !== void 0 ? g(
    T,
    r,
    s
  ) : T);
}
function Ti(e, t, i, n, a, r) {
  const s = "_" + t + "_::_" + i + "_", d = r?.bundle ?? Yv(e), c = d.translations[s];
  if (typeof c < "u") {
    const m = c;
    if (Array.isArray(m)) {
      const v = d.pluralFunction(n);
      return w(e, m[v], a, n, r);
    }
  }
  return n === 1 ? w(e, t, a, n, r) : w(e, i, a, n, r);
}
function L_(e, t = al()) {
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
function P_(e, t = () => "", i = 256) {
  const n = /* @__PURE__ */ new Map();
  let a;
  return (...r) => {
    if (r.length !== 2 || r.some((m) => typeof m != "string")) return e(...r);
    const s = t();
    s !== a && (n.clear(), a = s);
    const d = JSON.stringify(r);
    if (n.has(d)) return n.get(d);
    const c = e(...r);
    return n.size >= i && n.delete(n.keys().next().value), n.set(d, c), c;
  };
}
class oo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, i, n) {
    this.scope = `${n ? oo.GLOBAL_SCOPE_PERSISTENT : oo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = i;
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
class D_ {
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
    return new oo(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Zv(e) {
  return new D_(e);
}
function F_() {
  try {
    return so("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var ec, $p;
function Xv() {
  if ($p) return ec;
  $p = 1;
  var e = {};
  return ec = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...i) => console.error("SEMVER", ...i) : () => {
  }, ec;
}
var tc, Op;
function Jv() {
  if (Op) return tc;
  Op = 1;
  const e = "2.0.0", t = 256, i = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, n = 16, a = t - 6;
  return tc = {
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
  }, tc;
}
var Pl = { exports: {} }, Np;
function M_() {
  return Np || (Np = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: a
    } = Jv(), r = Xv();
    t = e.exports = {};
    const s = t.re = [], d = t.safeRe = [], c = t.src = [], m = t.safeSrc = [], v = t.t = {};
    let y = 0;
    const g = "[a-zA-Z0-9-]", k = [
      ["\\s", 1],
      ["\\d", a],
      [g, n]
    ], T = ($) => {
      for (const [I, D] of k)
        $ = $.split(`${I}*`).join(`${I}{0,${D}}`).split(`${I}+`).join(`${I}{1,${D}}`);
      return $;
    }, C = ($, I, D) => {
      const P = T(I), N = y++;
      r($, N, I), v[$] = N, c[N] = I, m[N] = P, s[N] = new RegExp(I, D ? "g" : void 0), d[N] = new RegExp(P, D ? "g" : void 0);
    };
    C("NUMERICIDENTIFIER", "0|[1-9]\\d*"), C("NUMERICIDENTIFIERLOOSE", "\\d+"), C("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${g}*`), C("MAINVERSION", `(${c[v.NUMERICIDENTIFIER]})\\.(${c[v.NUMERICIDENTIFIER]})\\.(${c[v.NUMERICIDENTIFIER]})`), C("MAINVERSIONLOOSE", `(${c[v.NUMERICIDENTIFIERLOOSE]})\\.(${c[v.NUMERICIDENTIFIERLOOSE]})\\.(${c[v.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASEIDENTIFIER", `(?:${c[v.NONNUMERICIDENTIFIER]}|${c[v.NUMERICIDENTIFIER]})`), C("PRERELEASEIDENTIFIERLOOSE", `(?:${c[v.NONNUMERICIDENTIFIER]}|${c[v.NUMERICIDENTIFIERLOOSE]})`), C("PRERELEASE", `(?:-(${c[v.PRERELEASEIDENTIFIER]}(?:\\.${c[v.PRERELEASEIDENTIFIER]})*))`), C("PRERELEASELOOSE", `(?:-?(${c[v.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[v.PRERELEASEIDENTIFIERLOOSE]})*))`), C("BUILDIDENTIFIER", `${g}+`), C("BUILD", `(?:\\+(${c[v.BUILDIDENTIFIER]}(?:\\.${c[v.BUILDIDENTIFIER]})*))`), C("FULLPLAIN", `v?${c[v.MAINVERSION]}${c[v.PRERELEASE]}?${c[v.BUILD]}?`), C("FULL", `^${c[v.FULLPLAIN]}$`), C("LOOSEPLAIN", `[v=\\s]*${c[v.MAINVERSIONLOOSE]}${c[v.PRERELEASELOOSE]}?${c[v.BUILD]}?`), C("LOOSE", `^${c[v.LOOSEPLAIN]}$`), C("GTLT", "((?:<|>)?=?)"), C("XRANGEIDENTIFIERLOOSE", `${c[v.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), C("XRANGEIDENTIFIER", `${c[v.NUMERICIDENTIFIER]}|x|X|\\*`), C("XRANGEPLAIN", `[v=\\s]*(${c[v.XRANGEIDENTIFIER]})(?:\\.(${c[v.XRANGEIDENTIFIER]})(?:\\.(${c[v.XRANGEIDENTIFIER]})(?:${c[v.PRERELEASE]})?${c[v.BUILD]}?)?)?`), C("XRANGEPLAINLOOSE", `[v=\\s]*(${c[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[v.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[v.XRANGEIDENTIFIERLOOSE]})(?:${c[v.PRERELEASELOOSE]})?${c[v.BUILD]}?)?)?`), C("XRANGE", `^${c[v.GTLT]}\\s*${c[v.XRANGEPLAIN]}$`), C("XRANGELOOSE", `^${c[v.GTLT]}\\s*${c[v.XRANGEPLAINLOOSE]}$`), C("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), C("COERCE", `${c[v.COERCEPLAIN]}(?:$|[^\\d])`), C("COERCEFULL", c[v.COERCEPLAIN] + `(?:${c[v.PRERELEASE]})?(?:${c[v.BUILD]})?(?:$|[^\\d])`), C("COERCERTL", c[v.COERCE], !0), C("COERCERTLFULL", c[v.COERCEFULL], !0), C("LONETILDE", "(?:~>?)"), C("TILDETRIM", `(\\s*)${c[v.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", C("TILDE", `^${c[v.LONETILDE]}${c[v.XRANGEPLAIN]}$`), C("TILDELOOSE", `^${c[v.LONETILDE]}${c[v.XRANGEPLAINLOOSE]}$`), C("LONECARET", "(?:\\^)"), C("CARETTRIM", `(\\s*)${c[v.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", C("CARET", `^${c[v.LONECARET]}${c[v.XRANGEPLAIN]}$`), C("CARETLOOSE", `^${c[v.LONECARET]}${c[v.XRANGEPLAINLOOSE]}$`), C("COMPARATORLOOSE", `^${c[v.GTLT]}\\s*(${c[v.LOOSEPLAIN]})$|^$`), C("COMPARATOR", `^${c[v.GTLT]}\\s*(${c[v.FULLPLAIN]})$|^$`), C("COMPARATORTRIM", `(\\s*)${c[v.GTLT]}\\s*(${c[v.LOOSEPLAIN]}|${c[v.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", C("HYPHENRANGE", `^\\s*(${c[v.XRANGEPLAIN]})\\s+-\\s+(${c[v.XRANGEPLAIN]})\\s*$`), C("HYPHENRANGELOOSE", `^\\s*(${c[v.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[v.XRANGEPLAINLOOSE]})\\s*$`), C("STAR", "(<|>)?=?\\s*\\*"), C("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), C("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Pl, Pl.exports)), Pl.exports;
}
var ic, Rp;
function U_() {
  if (Rp) return ic;
  Rp = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return ic = (n) => n ? typeof n != "object" ? e : n : t, ic;
}
var nc, Ip;
function z_() {
  if (Ip) return nc;
  Ip = 1;
  const e = /^[0-9]+$/, t = (n, a) => {
    if (typeof n == "number" && typeof a == "number")
      return n === a ? 0 : n < a ? -1 : 1;
    const r = e.test(n), s = e.test(a);
    return r && s && (n = +n, a = +a), n === a ? 0 : r && !s ? -1 : s && !r ? 1 : n < a ? -1 : 1;
  };
  return nc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (n, a) => t(a, n)
  }, nc;
}
var ac, Lp;
function Qv() {
  if (Lp) return ac;
  Lp = 1;
  const e = Xv(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = Jv(), { safeRe: n, t: a } = M_(), r = U_(), { compareIdentifiers: s } = z_(), d = (m, v) => {
    const y = v.split(".");
    if (y.length > m.length)
      return !1;
    for (let g = 0; g < y.length; g++)
      if (s(m[g], y[g]) !== 0)
        return !1;
    return !0;
  };
  class c {
    constructor(v, y) {
      if (y = r(y), v instanceof c) {
        if (v.loose === !!y.loose && v.includePrerelease === !!y.includePrerelease)
          return v;
        v = v.version;
      } else if (typeof v != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof v}".`);
      if (v.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", v, y), this.options = y, this.loose = !!y.loose, this.includePrerelease = !!y.includePrerelease;
      const g = v.trim().match(y.loose ? n[a.LOOSE] : n[a.FULL]);
      if (!g)
        throw new TypeError(`Invalid Version: ${v}`);
      if (this.raw = v, this.major = +g[1], this.minor = +g[2], this.patch = +g[3], this.major > i || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > i || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > i || this.patch < 0)
        throw new TypeError("Invalid patch version");
      g[4] ? this.prerelease = g[4].split(".").map((k) => {
        if (/^[0-9]+$/.test(k)) {
          const T = +k;
          if (T >= 0 && T < i)
            return T;
        }
        return k;
      }) : this.prerelease = [], this.build = g[5] ? g[5].split(".") : [], this.format();
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
      let y = 0;
      do {
        const g = this.prerelease[y], k = v.prerelease[y];
        if (e("prerelease compare", y, g, k), g === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (g === void 0)
          return -1;
        if (g === k)
          continue;
        return s(g, k);
      } while (++y);
    }
    compareBuild(v) {
      v instanceof c || (v = new c(v, this.options));
      let y = 0;
      do {
        const g = this.build[y], k = v.build[y];
        if (e("build compare", y, g, k), g === void 0 && k === void 0)
          return 0;
        if (k === void 0)
          return 1;
        if (g === void 0)
          return -1;
        if (g === k)
          continue;
        return s(g, k);
      } while (++y);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(v, y, g) {
      if (v.startsWith("pre")) {
        if (!y && g === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (y) {
          const k = `-${y}`.match(this.options.loose ? n[a.PRERELEASELOOSE] : n[a.PRERELEASE]);
          if (!k || k[1] !== y)
            throw new Error(`invalid identifier: ${y}`);
        }
      }
      switch (v) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", y, g);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", y, g);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", y, g), this.inc("pre", y, g);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", y, g), this.inc("pre", y, g);
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
          const k = Number(g) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [k];
          else {
            let T = this.prerelease.length;
            for (; --T >= 0; )
              typeof this.prerelease[T] == "number" && (this.prerelease[T]++, T = -2);
            if (T === -1) {
              if (y === this.prerelease.join(".") && g === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(k);
            }
          }
          if (y) {
            let T = [y, k];
            if (g === !1 && (T = [y]), d(this.prerelease, y)) {
              const C = this.prerelease[y.split(".").length];
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
  return ac = c, ac;
}
var rc, Pp;
function j_() {
  if (Pp) return rc;
  Pp = 1;
  const e = Qv();
  return rc = (i, n) => new e(i, n).major, rc;
}
var B_ = j_();
const Dp = /* @__PURE__ */ wd(B_);
var sc, Fp;
function H_() {
  if (Fp) return sc;
  Fp = 1;
  const e = Qv();
  return sc = (i, n, a = !1) => {
    if (i instanceof e)
      return i;
    try {
      return new e(i, n);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, sc;
}
var lc, Mp;
function V_() {
  if (Mp) return lc;
  Mp = 1;
  const e = H_();
  return lc = (i, n) => {
    const a = e(i, n);
    return a ? a.version : null;
  }, lc;
}
var q_ = V_();
const K_ = /* @__PURE__ */ wd(q_);
class G_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !K_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Dp(t.getVersion()) !== Dp(this.getVersion()) && console.warn(
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
class W_ {
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
let ls = null;
function kd() {
  return ls !== null ? ls : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? ls = new G_(window._nc_event_bus) : ls = window._nc_event_bus = new W_(), ls);
}
function eb(e, t) {
  kd().subscribe(e, t);
}
function Y_(e, t) {
  kd().unsubscribe(e, t);
}
function On(e, ...t) {
  kd().emit(e, ...t);
}
const tb = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Z_ = Object.prototype.toString, X_ = (e) => Z_.call(e) === "[object Object]", cr = () => {
}, J_ = /* @__PURE__ */ Q_();
function Q_() {
  var e, t, i;
  return tb && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function oc(e) {
  return Array.isArray(e) ? e : [e];
}
function e0(e, t, i) {
  return qe(e, t, {
    ...i,
    immediate: !0
  });
}
const ib = tb ? window : void 0;
function hs(e) {
  var t;
  const i = xn(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function kr(...e) {
  const t = (n, a, r, s) => (n.addEventListener(a, r, s), () => n.removeEventListener(a, r, s)), i = j(() => {
    const n = oc(xn(e[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return e0(() => {
    var n, a;
    return [
      (n = (a = i.value) === null || a === void 0 ? void 0 : a.map((r) => hs(r))) !== null && n !== void 0 ? n : [ib].filter((r) => r != null),
      oc(xn(i.value ? e[1] : e[0])),
      oc(u(i.value ? e[2] : e[1])),
      xn(i.value ? e[3] : e[2])
    ];
  }, ([n, a, r, s], d, c) => {
    if (!n?.length || !a?.length || !r?.length) return;
    const m = X_(s) ? { ...s } : s, v = n.flatMap((y) => a.flatMap((g) => r.map((k) => t(y, g, k, m))));
    c(() => {
      v.forEach((y) => y());
    });
  }, { flush: "post" });
}
let Up = !1;
function zp(e, t, i = {}) {
  const { window: n = ib, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: d = !1 } = i;
  if (!n) return d ? {
    stop: cr,
    cancel: cr,
    trigger: cr
  } : cr;
  if (J_ && !Up) {
    Up = !0;
    const $ = { passive: !0 };
    Array.from(n.document.body.children).forEach((I) => I.addEventListener("click", cr, $)), n.document.documentElement.addEventListener("click", cr, $);
  }
  let c = !0;
  const m = ($) => xn(a).some((I) => {
    if (typeof I == "string") return Array.from(n.document.querySelectorAll(I)).some((D) => D === $.target || $.composedPath().includes(D));
    {
      const D = hs(I);
      return D && ($.target === D || $.composedPath().includes(D));
    }
  });
  function v($) {
    const I = xn($);
    return I && I.$.subTree.shapeFlag === 16;
  }
  function y($, I) {
    const D = xn($), P = D.$.subTree && D.$.subTree.children;
    return P == null || !Array.isArray(P) ? !1 : P.some((N) => N.el === I.target || I.composedPath().includes(N.el));
  }
  const g = ($) => {
    const I = hs(e);
    if ($.target != null && !(!(I instanceof Element) && v(e) && y(e, $)) && !(!I || I === $.target || $.composedPath().includes(I))) {
      if ("detail" in $ && $.detail === 0 && (c = !m($)), !c) {
        c = !0;
        return;
      }
      t($);
    }
  };
  let k = !1;
  const T = [
    kr(n, "click", ($) => {
      k || (k = !0, setTimeout(() => {
        k = !1;
      }, 0), g($));
    }, {
      passive: !0,
      capture: r
    }),
    kr(n, "pointerdown", ($) => {
      const I = hs(e);
      c = !m($) && !!(I && !$.composedPath().includes(I));
    }, { passive: !0 }),
    s && kr(n, "blur", ($) => {
      setTimeout(() => {
        const I = hs(e);
        let D = n.document.activeElement;
        for (; D?.shadowRoot; ) D = D.shadowRoot.activeElement;
        D?.tagName === "IFRAME" && !I?.contains(n.document.activeElement) && t($);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), C = () => T.forEach(($) => $());
  return d ? {
    stop: C,
    cancel: () => {
      c = !1;
    },
    trigger: ($) => {
      c = !0, g($), c = !1;
    }
  } : C;
}
function t0(e, t = {}) {
  const { threshold: i = 50, onSwipe: n, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, d = /* @__PURE__ */ Mt({
    x: 0,
    y: 0
  }), c = /* @__PURE__ */ Mt({
    x: 0,
    y: 0
  }), m = j(() => d.x - c.x), v = j(() => d.y - c.y), { max: y, abs: g } = Math, k = j(() => y(g(m.value), g(v.value)) >= i), T = /* @__PURE__ */ Gh(!1), C = j(() => k.value ? g(m.value) > g(v.value) ? m.value > 0 ? "left" : "right" : v.value > 0 ? "up" : "down" : "none"), $ = (x) => [x.touches[0].clientX, x.touches[0].clientY], I = (x, q) => {
    d.x = x, d.y = q;
  }, D = (x, q) => {
    c.x = x, c.y = q;
  }, P = {
    passive: s,
    capture: !s
  }, N = (x) => {
    T.value && a?.(x, C.value), T.value = !1;
  }, ce = [
    kr(e, "touchstart", (x) => {
      if (x.touches.length !== 1) return;
      const [q, B] = $(x);
      I(q, B), D(q, B), r?.(x);
    }, P),
    kr(e, "touchmove", (x) => {
      if (x.touches.length !== 1) return;
      const [q, B] = $(x);
      D(q, B), P.capture && !P.passive && Math.abs(m.value) > Math.abs(v.value) && x.preventDefault(), !T.value && k.value && (T.value = !0), T.value && n?.(x);
    }, P),
    kr(e, ["touchend", "touchcancel"], N, P)
  ];
  return {
    isSwiping: T,
    direction: C,
    coordsStart: d,
    coordsEnd: c,
    lengthX: m,
    lengthY: v,
    stop: () => ce.forEach((x) => x())
  };
}
var i0 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let i = t, n = e, a = $y(), r = xy(), s = /* @__PURE__ */ G([]), d = j(() => s.value.reduce((ee, S) => (ee[~~S.id] = S) && ee, {})), c = j(() => s.value.length), m = /* @__PURE__ */ G(null), v = /* @__PURE__ */ G(!1), y = /* @__PURE__ */ G({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), g = /* @__PURE__ */ G({
      splitter: null,
      timeoutId: null
    }), k = j(() => ({
      [`splitpanes splitpanes--${n.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": y.value.dragging,
      "splitpanes--ready": v.value
    })), T = () => {
      document.addEventListener("mousemove", I, { passive: !1 }), document.addEventListener("mouseup", D), "ontouchstart" in window && (document.addEventListener("touchmove", I, { passive: !1 }), document.addEventListener("touchend", D));
    }, C = () => {
      document.removeEventListener("mousemove", I, { passive: !1 }), document.removeEventListener("mouseup", D), "ontouchstart" in window && (document.removeEventListener("touchmove", I, { passive: !1 }), document.removeEventListener("touchend", D));
    }, $ = (ee, S) => {
      let O = ee.target.closest(".splitpanes__splitter");
      if (O) {
        let { left: L, top: z } = O.getBoundingClientRect(), { clientX: M, clientY: X } = "ontouchstart" in window && ee.touches ? ee.touches[0] : ee;
        y.value.cursorOffset = n.horizontal ? X - z : M - L;
      }
      T(), y.value.mouseDown = !0, y.value.activeSplitter = S, document.documentElement.style.cursor = n.horizontal ? "row-resize" : "col-resize";
    }, I = (ee) => {
      y.value.mouseDown && (ee.preventDefault(), y.value.dragging || (window.getSelection()?.removeAllRanges(), y.value.dragging = !0), requestAnimationFrame(() => {
        B(x(ee)), Fe("resize", { event: ee }, !0);
      }));
    }, D = (ee) => {
      y.value.dragging && (window.getSelection()?.removeAllRanges(), Fe("resized", { event: ee }, !0)), y.value.mouseDown = !1, y.value.activeSplitter = null, setTimeout(() => {
        y.value.dragging = !1, C(), document.documentElement.style.cursor = "";
      }, 100);
    }, P = (ee, S) => {
      "ontouchstart" in window && (ee.preventDefault(), g.value.splitter === S ? (clearTimeout(g.value.timeoutId), g.value.timeoutId = null, N(ee, S), g.value.splitter = null) : (g.value.splitter = S, g.value.timeoutId = setTimeout(() => g.value.splitter = null, 500))), y.value.dragging || Fe("splitter-click", {
        event: ee,
        index: S
      }, !0);
    }, N = (ee, S) => {
      if (Fe("splitter-dblclick", {
        event: ee,
        index: S
      }, !0), n.maximizePanes) {
        let O = 0;
        s.value = s.value.map((L, z) => (L.size = z === S ? L.max : L.min, z !== S && (O += L.min), L)), s.value[S].size -= O, Fe("pane-maximize", {
          event: ee,
          index: S,
          pane: s.value[S]
        }), Fe("resized", {
          event: ee,
          index: S
        }, !0);
      }
    }, ce = (ee, S) => {
      if (!n.keyboardStep) return;
      let O = n.horizontal ? ee.key === "ArrowDown" : ee.key === "ArrowRight", L = n.horizontal ? ee.key === "ArrowUp" : ee.key === "ArrowLeft";
      if (!O && !L) return;
      ee.preventDefault(), y.value.activeSplitter = S;
      let z = (O ? 1 : -1) * (n.rtl && !n.horizontal ? -1 : 1), M = H(S) + s.value[S].size;
      Y(Math.min(Math.max(M + z * n.keyboardStep, 0), 100)), Fe("resize", { event: ee }, !0), Fe("resized", { event: ee }, !0), y.value.activeSplitter = null;
    }, J = (ee, S) => {
      let O = d.value[S];
      O && Fe("pane-click", {
        event: ee,
        index: O.index,
        pane: O
      });
    }, x = (ee) => {
      let S = m.value.getBoundingClientRect(), { clientX: O, clientY: L } = "ontouchstart" in window && ee.touches ? ee.touches[0] : ee;
      return {
        x: O - (n.horizontal ? 0 : y.value.cursorOffset) - S.left,
        y: L - (n.horizontal ? y.value.cursorOffset : 0) - S.top
      };
    }, q = (ee) => {
      ee = ee[n.horizontal ? "y" : "x"];
      let S = m.value[n.horizontal ? "clientHeight" : "clientWidth"];
      return n.rtl && !n.horizontal && (ee = S - ee), ee * 100 / S;
    }, B = (ee) => {
      Y(q(ee));
    }, Y = (ee) => {
      let S = y.value.activeSplitter;
      if (S === null || S >= s.value.length - 1) return;
      let O = {
        prevPanesSize: H(S),
        nextPanesSize: K(S),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, L = 0 + (n.pushOtherPanes ? 0 : O.prevPanesSize), z = 100 - (n.pushOtherPanes ? 0 : O.nextPanesSize);
      ee = Math.max(Math.min(ee, z), L);
      let M = [S, S + 1], X = s.value[M[0]] || null, ne = s.value[M[1]] || null, re = X !== null && X.max < 100 && ee >= X.max + O.prevPanesSize, pe = ne !== null && ne.max < 100 && ee <= 100 - (ne.max + K(S + 1));
      if (re || pe) {
        re ? (X.size = X.max, ne.size = Math.min(Math.max(100 - X.max - O.prevPanesSize - O.nextPanesSize, ne.min), ne.max)) : (X.size = Math.min(Math.max(100 - ne.max - O.prevPanesSize - K(S + 1), X.min), X.max), ne.size = ne.max);
        return;
      }
      if (n.pushOtherPanes) {
        let ae = se(O, ee);
        if (!ae) return;
        ({ sums: O, panesToResize: M } = ae), X = s.value[M[0]] || null, ne = s.value[M[1]] || null;
      }
      X !== null && (X.size = Math.min(Math.max(ee - O.prevPanesSize - O.prevReachedMinPanes, X.min), X.max)), ne !== null && (ne.size = Math.min(Math.max(100 - ee - O.nextPanesSize - O.nextReachedMinPanes, ne.min), ne.max));
    }, se = (ee, S) => {
      let O = y.value.activeSplitter, L = [O, O + 1];
      if (S < ee.prevPanesSize + s.value[L[0]].min) {
        if (L[0] = R(O).index, ee.prevReachedMinPanes = 0, L[0] < O && s.value.forEach((z, M) => {
          M > L[0] && M <= O && (z.size = z.min, ee.prevReachedMinPanes += z.min);
        }), L[0] === void 0) return ee.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((z, M) => {
          M > 0 && M <= O && (z.size = z.min, ee.prevReachedMinPanes += z.min);
        }), s.value[L[1]].size = 100 - ee.prevReachedMinPanes - s.value[0].min - ee.prevPanesSize - ee.nextPanesSize, null;
        ee.prevPanesSize = H(L[0]);
      }
      return S > 100 - ee.nextPanesSize - s.value[L[1]].min && (L[1] = V(O).index, ee.nextReachedMinPanes = 0, L[1] > O + 1 && s.value.forEach((z, M) => {
        M > O && M < L[1] && (z.size = z.min, ee.nextReachedMinPanes += z.min);
      }), ee.nextPanesSize = L[1] === void 0 ? 0 : K(L[1] - 1), L[1] === void 0) ? (ee.nextReachedMinPanes = 0, s.value.forEach((z, M) => {
        M >= O + 1 && (z.size = z.min, ee.nextReachedMinPanes += z.min);
      }), L[0] !== void 0 && (s.value[L[0]].size = 100 - ee.prevPanesSize - K(L[0] - 1)), null) : {
        sums: ee,
        panesToResize: L
      };
    }, H = (ee) => s.value.reduce((S, O, L) => S + (L < ee ? O.size : 0), 0), K = (ee) => s.value.reduce((S, O, L) => S + (L > ee + 1 ? O.size : 0), 0), R = (ee) => [...s.value].reverse().find((S) => S.index < ee && S.size > S.min) || {}, V = (ee) => s.value.find((S) => S.index > ee + 1 && S.size > S.min) || {}, Q = () => {
      let ee = Array.from(m.value?.children || []);
      for (let S of ee) {
        let O = S.classList.contains("splitpanes__pane"), L = S.classList.contains("splitpanes__splitter");
        !O && !L && (S.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ie = (ee, S, O = !1) => {
      let L = ee - 1, z = document.createElement("div");
      z.classList.add("splitpanes__splitter"), O || (z.onmousedown = (M) => $(M, L), typeof window < "u" && "ontouchstart" in window && (z.ontouchstart = (M) => $(M, L)), z.onclick = (M) => P(M, L + 1), n.keyboardStep && (z.setAttribute("tabindex", "0"), z.setAttribute("role", "separator"), z.setAttribute("aria-orientation", n.horizontal ? "horizontal" : "vertical"), z.onkeydown = (M) => ce(M, L))), z.ondblclick = (M) => N(M, L + 1), S.parentNode.insertBefore(z, S);
    }, Z = (ee) => {
      ee.onmousedown = null, ee.onclick = null, ee.ondblclick = null, ee.onkeydown = null, ee.remove();
    }, ue = () => {
      let ee = Array.from(m.value?.children || []);
      for (let O of ee) O.className.includes("splitpanes__splitter") && Z(O);
      let S = 0;
      for (let O of ee) O.className.includes("splitpanes__pane") && (!S && n.firstSplitter ? ie(S, O, !0) : S && ie(S, O), S++);
    }, Te = ({ uid: ee, ...S }) => {
      let O = d.value[ee];
      for (let [L, z] of Object.entries(S)) O[L] = z;
    }, Pe = !1, Re = (ee) => {
      let S = -1;
      Array.from(m.value?.children || []).some((O) => (O.className.includes("splitpanes__pane") && S++, O.isSameNode(ee.el))), s.value.splice(S, 0, {
        ...ee,
        index: S
      }), s.value.forEach((O, L) => O.index = L), v.value && !Pe && (Pe = !0, xt(() => {
        ue(), Ne({ addedPane: s.value[S] }), Fe("pane-add", { pane: s.value[S] }), Pe = !1;
      }));
    }, Ue = (ee) => {
      let S = s.value.findIndex((L) => L.id === ee);
      s.value[S].el = null;
      let O = s.value.splice(S, 1)[0];
      s.value.forEach((L, z) => L.index = z), xt(() => {
        ue(), Fe("pane-remove", { pane: O }), Ne({ removedPane: {
          ...O
        } });
      });
    }, Ne = (ee = {}) => {
      !ee.addedPane && !ee.removedPane ? $e() : s.value.some((S) => S.givenSize !== null || S.min || S.max < 100) ? Ie(ee) : dt(), v.value && Fe("resized");
    }, dt = () => {
      let ee = 100 / c.value, S = 100, O = [], L = [];
      for (let z of s.value) z.size = Math.max(Math.min(ee, z.max), z.min), S -= z.size, z.size >= z.max && O.push(z.id), z.size <= z.min && L.push(z.id);
      Math.abs(S) > 0.1 && be(S, O, L);
    }, $e = () => {
      let ee = 100, S = [], O = [], L = 0;
      for (let M of s.value) ee -= M.size, M.givenSize !== null && L++, M.size >= M.max && S.push(M.id), M.size <= M.min && O.push(M.id);
      let z = 100;
      if (ee > 0.1) {
        for (let M of s.value) M.givenSize === null && (M.size = Math.max(Math.min(ee / (c.value - L), M.max), M.min)), z -= M.size;
        z > 0.1 && be(z, S, O);
      }
    }, Ie = ({ addedPane: ee, removedPane: S } = {}) => {
      let O = s.value.reduce((re, pe) => re + (pe.givenSize === null ? 0 : pe.givenSize), 0), L = s.value.filter((re) => re.givenSize === null).length, z = L > 0 ? (100 - O) / L : 0, M = 0, X = [], ne = [];
      for (let re of s.value) M -= re.size, re.size >= re.max && X.push(re.id), re.size <= re.min && ne.push(re.id);
      if (!(Math.abs(M) < 0.1)) {
        M = 100;
        for (let re of s.value) re.givenSize === null && (re.size = Math.max(Math.min(z, re.max), re.min)), M -= re.size, re.size >= re.max && X.push(re.id), re.size <= re.min && ne.push(re.id);
        Math.abs(M) > 0.1 && be(M, X, ne);
      }
    }, be = (ee, S, O) => {
      let L;
      L = ee > 0 ? ee / (c.value - S.length) : ee / (c.value - O.length), s.value.forEach((z, M) => {
        if (ee > 0 && !S.includes(z.id)) {
          let X = Math.max(Math.min(z.size + L, z.max), z.min), ne = X - z.size;
          ee -= ne, z.size = X;
        } else if (!O.includes(z.id)) {
          let X = Math.max(Math.min(z.size + L, z.max), z.min), ne = X - z.size;
          ee -= ne, z.size = X;
        }
      }), Math.abs(ee) > 0.1 && v.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Fe = (ee, S = void 0, O = !1) => {
      let L = S?.index ?? y.value.activeSplitter ?? null;
      i(ee, {
        ...S,
        ...L !== null && { index: L },
        ...O && L !== null && {
          prevPane: s.value[L - +!!n.firstSplitter],
          nextPane: s.value[L + +!n.firstSplitter]
        },
        panes: s.value.map((z) => ({
          min: z.min,
          max: z.max,
          size: z.size
        }))
      });
    };
    qe(() => n.firstSplitter, () => ue()), qe(() => n.horizontal, (ee) => xt(() => {
      i("direction-changed", {
        horizontal: ee,
        panes: s.value.map((S) => ({
          min: S.min,
          max: S.max,
          size: S.size
        }))
      });
    })), Et(() => {
      Q(), ue(), Ne(), Fe("ready"), v.value = !0;
    }), wi(() => v.value = !1);
    let st = () => {
      let { class: ee, ...S } = a;
      return ci("div", {
        ref: m,
        class: [k.value, ee],
        ...S
      }, r.default?.());
    };
    return Ei("panes", s), Ei("indexedPanes", d), Ei("horizontal", j(() => n.horizontal)), Ei("requestUpdate", Te), Ei("onPaneAdd", Re), Ei("onPaneRemove", Ue), Ei("onPaneClick", J), (ee, S) => (p(), De(vd(st)));
  }
}), n0 = {
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
    let t = e, i = Zt("requestUpdate"), n = Zt("onPaneAdd"), a = Zt("horizontal"), r = Zt("onPaneRemove"), s = Zt("onPaneClick"), d = ca()?.uid, c = Zt("indexedPanes"), m = j(() => c.value[d]), v = /* @__PURE__ */ G(null), y = j(() => {
      let C = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(C, k.value), g.value);
    }), g = j(() => {
      let C = parseFloat(t.minSize);
      return isNaN(C) ? 0 : C;
    }), k = j(() => {
      let C = parseFloat(t.maxSize);
      return isNaN(C) ? 100 : C;
    }), T = j(() => {
      let C = m.value?.size ?? (t.size === void 0 ? void 0 : y.value);
      return C === void 0 ? "" : `${a.value ? "height" : "width"}: ${C}%`;
    });
    return qe(() => y.value, (C) => i({
      uid: d,
      size: C
    })), qe(() => g.value, (C) => i({
      uid: d,
      min: C
    })), qe(() => k.value, (C) => i({
      uid: d,
      max: C
    })), Et(() => {
      n({
        id: d,
        el: v.value,
        min: g.value,
        max: k.value,
        givenSize: t.size === void 0 ? null : y.value,
        size: y.value
      });
    }), wi(() => r(d)), (C, $) => (p(), h("div", {
      ref_key: "paneEl",
      ref: v,
      class: "splitpanes__pane",
      onClick: $[0] ||= (I) => u(s)(I, C._.uid),
      style: fi(T.value)
    }, [He(C.$slots, "default")], 4));
  }
}, a0 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", r0 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", s0 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", l0 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Sd = 1024, nb = Sd / 2, uo = (e) => document.documentElement.clientWidth < e, ab = /* @__PURE__ */ G(uo(Sd)), rb = /* @__PURE__ */ G(uo(nb));
window.addEventListener("resize", () => {
  ab.value = uo(Sd), rb.value = uo(nb);
}, { passive: !0 });
function rl() {
  return /* @__PURE__ */ Ps(ab);
}
function o0() {
  return /* @__PURE__ */ Ps(rb);
}
class u0 {
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
    return Ti("", t, i, n, a, { bundle: this.bundle });
  }
}
class c0 {
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
  addTranslation(t, i) {
    return this.translations[t] = i, this;
  }
  enableDebugMode() {
    return this.debug = !0, this;
  }
  build() {
    this.debug && console.debug(`Creating gettext instance for language ${this.language}`);
    const t = new u0((i) => L_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function d0() {
  return new c0();
}
const sb = d0().detectLanguage().build(), $t = (...e) => sb.gettext(...e);
function da(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: i, t: n } of t) {
        if (i !== al() || !n)
          continue;
        const a = Object.fromEntries(Object.entries(n).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        sb.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const f0 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], p0 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], h0 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], v0 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], b0 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], g0 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], m0 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], y0 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], _0 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const w0 = /* @__PURE__ */ Symbol(""), [k0] = window.OC?.config?.version?.split(".") ?? [], lb = Number.parseInt(k0 ?? "35"), S0 = lb < 32, fa = lb < 34, C0 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function T0() {
  return Zt(C0, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const rt = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, A0 = { class: "button-vue__wrapper" }, E0 = { class: "button-vue__icon" }, x0 = { class: "button-vue__text" }, $0 = /* @__PURE__ */ Bt({
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
    const i = e, n = t, { formBoxItemClass: a } = T0(), r = Zt(w0, null) !== null, s = j(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), d = j(() => s.value === "button" && typeof i.pressed == "boolean"), c = j(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), m = j(() => c.value.startsWith("tertiary")), v = j(() => i.alignment.split("-")[0]), y = j(() => i.alignment.includes("-")), g = Zt("NcPopover:trigger:attrs", () => ({}), !1), k = j(() => g()), T = j(() => {
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
    return ($, I) => (p(), De(vd(s.value), ei({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${c.value}`]: c.value,
          "button-vue--tertiary": m.value,
          "button-vue--wide": e.wide,
          [`button-vue--${v.value}`]: v.value !== "center",
          "button-vue--reverse": y.value,
          "button-vue--legacy": u(S0),
          "button-vue--legacy34": u(fa)
        },
        u(a)
      ]],
      "aria-label": e.ariaLabel
    }, T.value, { onClick: C }), {
      default: me(() => [
        l("span", A0, [
          l("span", E0, [
            He($.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", x0, [
            He($.$slots, "default", {}, () => [
              te(o(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), ln = /* @__PURE__ */ rt($0, [["__scopeId", "data-v-47ce59a3"]]), O0 = ["aria-hidden", "aria-label"], N0 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, R0 = ["d"], I0 = ["innerHTML"], L0 = /* @__PURE__ */ Bt({
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
    S1((a) => ({
      fb515064: i.value
    }));
    const t = e, i = j(() => typeof t.size == "number" ? `${t.size}px` : t.size), n = j(() => {
      if (!t.svg || t.path)
        return;
      const a = Gv.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (p(), h("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: ke(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      n.value ? (p(), h("span", {
        key: 1,
        innerHTML: n.value
      }, null, 8, I0)) : (p(), h("svg", N0, [
        l("path", { d: e.path }, null, 8, R0)
      ]))
    ], 10, O0));
  }
}), du = /* @__PURE__ */ rt(L0, [["__scopeId", "data-v-aaedb1c3"]]);
D0();
function P0(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), On("csrf-token-update", { token: e, _internal: !0 }));
}
function D0() {
  eb("csrf-token-update", ({ token: e, _internal: t }) => {
    t || P0(e);
  });
}
Zv("public").persist().build();
let dr;
function jp(e, t) {
  return e ? e.getAttribute(t) : null;
}
function F0() {
  if (dr !== void 0)
    return dr;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = jp(e, "data-user");
  return t === null ? (dr = null, dr) : (dr = {
    uid: t,
    displayName: jp(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, dr);
}
var St = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(St || {});
class M0 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, n) {
    let a = "[" + St[i].toUpperCase() + "] ";
    return n && n.app && (a += n.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), i === St.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, i, n) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && n?.error === void 0 && (n.error = i), t) {
        case St.Debug:
          console.debug(this.formatMessage(i, St.Debug, n), n);
          break;
        case St.Info:
          console.info(this.formatMessage(i, St.Info, n), n);
          break;
        case St.Warn:
          console.warn(this.formatMessage(i, St.Warn, n), n);
          break;
        case St.Error:
          console.error(this.formatMessage(i, St.Error, n), n);
          break;
        case St.Fatal:
        default:
          console.error(this.formatMessage(i, St.Fatal, n), n);
          break;
      }
  }
  debug(t, i) {
    this.log(St.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log(St.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log(St.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log(St.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log(St.Fatal, t, Object.assign({}, this.context, i));
  }
}
function U0(e) {
  return new M0(e);
}
class z0 {
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
    const t = F0();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, i = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? St.Warn, window._oc_debug && (t.context.level = St.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
    };
    return i(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function j0() {
  return new z0(U0);
}
const Va = j0().detectUser().setApp("@nextcloud/vue").build();
function B0(e) {
  let t = !1, i;
  return (...n) => (t || (t = !0, i = e(...n)), i);
}
let ob = "missing-app-name";
try {
  ob = "library";
} catch {
  Va.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const H0 = ob;
let V0 = "";
try {
  V0 = "0.2.0-beta.1";
} catch {
  Va.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function ub() {
  return Zt("appName", H0);
}
const q0 = B0(() => {
  const e = so("core", "apps", []), t = ub();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), Pc = I_();
da(m0);
const K0 = /* @__PURE__ */ Bt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = rl();
    qe(t, i), Et(() => {
      i(t.value);
    }), wi(() => {
      t.value && i(!1);
    });
    function i(n = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = n ? "none" : "", n === !0 && On("toggle-navigation", { open: !1 }));
    }
    return (n, a) => (p(), De(u(ln), {
      "aria-label": u($t)("Go back to the list"),
      class: ke(["app-details-toggle", { "app-details-toggle--mobile": u(t) }]),
      title: u($t)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: me(() => [
        fe(u(du), {
          directional: "",
          path: u(a0)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), G0 = /* @__PURE__ */ rt(K0, [["__scopeId", "data-v-a28923a1"]]), Bp = Zv("nextcloud").persist().build(), W0 = F_().theming?.name ?? "Nextcloud", Y0 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: G0,
    Pane: n0,
    Splitpanes: i0
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
      appName: ub(),
      localizedAppName: q0(),
      isMobile: rl(),
      isRtl: Pc
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
        return Va.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(W0), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = t0(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? On("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && On("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      Bp.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), Va.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Bp.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return Va.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, Z0 = {
  key: 0,
  class: "hidden-visually"
}, X0 = { class: "app-content-wrapper__list" }, J0 = {
  key: 1,
  class: "app-content-wrapper"
};
function Q0(e, t, i, n, a, r) {
  const s = Ye("NcAppContentDetailsToggle"), d = Ye("Pane"), c = Ye("Splitpanes");
  return p(), h("main", {
    id: "app-content-vue",
    class: ke(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (p(), h("h1", Z0, o(i.pageHeading), 1)) : E("", !0),
    e.$slots.list ? (p(), h(W, { key: 1 }, [
      n.isMobile || i.layout === "no-split" ? (p(), h("div", {
        key: 0,
        class: ke(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": i.showDetails,
          "app-content-wrapper--show-list": !i.showDetails,
          "app-content-wrapper--mobile": n.isMobile
        }])
      }, [
        i.showDetails ? (p(), De(s, {
          key: 0,
          onClick: Ce(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : E("", !0),
        ge(l("div", X0, [
          He(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Ha, !i.showDetails]
        ]),
        i.showDetails ? He(e.$slots, "default", { key: 1 }, void 0, !0) : E("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (p(), h("div", J0, [
        fe(c, {
          horizontal: i.layout === "horizontal-split",
          class: ke(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: n.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: me(() => [
            fe(d, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: me(() => [
                He(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            fe(d, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: me(() => [
                He(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : E("", !0)
    ], 64)) : E("", !0),
    e.$slots.list ? E("", !0) : He(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const ew = /* @__PURE__ */ rt(Y0, [["render", Q0], ["__scopeId", "data-v-51427d61"]]);
var cb = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], co = /* @__PURE__ */ cb.join(","), db = typeof Element > "u", Ka = db ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, fo = !db && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, po = function(t, i) {
  var n;
  i === void 0 && (i = !0);
  var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), r = a === "" || a === "true", s = r || i && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : po(t.parentNode));
  return s;
}, tw = function(t) {
  var i, n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return n === "" || n === "true";
}, fb = function(t, i, n) {
  if (po(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(co));
  return i && Ka.call(t, co) && a.unshift(t), a = a.filter(n), a;
}, ho = function(t, i, n) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!po(s, !1))
      if (s.tagName === "SLOT") {
        var d = s.assignedElements(), c = d.length ? d : s.children, m = ho(c, !0, n);
        n.flatten ? a.push.apply(a, m) : a.push({
          scopeParent: s,
          candidates: m
        });
      } else {
        var v = Ka.call(s, co);
        v && n.filter(s) && (i || !t.includes(s)) && a.push(s);
        var y = s.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(s), g = !po(y, !1) && (!n.shadowRootFilter || n.shadowRootFilter(s));
        if (y && g) {
          var k = ho(y === !0 ? s.children : y.children, !0, n);
          n.flatten ? a.push.apply(a, k) : a.push({
            scopeParent: s,
            candidates: k
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, pb = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Ma = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || tw(t)) && !pb(t) ? 0 : t.tabIndex;
}, iw = function(t, i) {
  var n = Ma(t);
  return n < 0 && i && !pb(t) ? 0 : n;
}, nw = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, hb = function(t) {
  return t.tagName === "INPUT";
}, aw = function(t) {
  return hb(t) && t.type === "hidden";
}, rw = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return i;
}, sw = function(t, i) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === i)
      return t[n];
}, lw = function(t) {
  if (!t.name)
    return !0;
  var i = t.form || fo(t), n = function(d) {
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
  var r = sw(a, t.form);
  return !r || r === t;
}, ow = function(t) {
  return hb(t) && t.type === "radio";
}, uw = function(t) {
  return ow(t) && !lw(t);
}, cw = function(t) {
  var i, n = t && fo(t), a = (i = n) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (n && n !== t) {
    var s, d, c;
    for (r = !!((s = a) !== null && s !== void 0 && (d = s.ownerDocument) !== null && d !== void 0 && d.contains(a) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !r && a; ) {
      var m, v, y;
      n = fo(a), a = (m = n) === null || m === void 0 ? void 0 : m.host, r = !!((v = a) !== null && v !== void 0 && (y = v.ownerDocument) !== null && y !== void 0 && y.contains(a));
    }
  }
  return r;
}, Hp = function(t) {
  var i = t.getBoundingClientRect(), n = i.width, a = i.height;
  return n === 0 && a === 0;
}, dw = function(t, i) {
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
  var c = Ka.call(t, "details>summary:first-of-type"), m = c ? t.parentElement : t;
  if (Ka.call(m, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof a == "function") {
      for (var v = t; t; ) {
        var y = t.parentElement, g = fo(t);
        if (y && !y.shadowRoot && a(y) === !0)
          return Hp(t);
        t.assignedSlot ? t = t.assignedSlot : !y && g !== t.ownerDocument ? t = g.host : t = y;
      }
      t = v;
    }
    if (cw(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return Hp(t);
  return !1;
}, fw = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var i = t.parentElement; i; ) {
      if (i.tagName === "FIELDSET" && i.disabled) {
        for (var n = 0; n < i.children.length; n++) {
          var a = i.children.item(n);
          if (a.tagName === "LEGEND")
            return Ka.call(i, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      i = i.parentElement;
    }
  return !1;
}, vo = function(t, i) {
  return !(i.disabled || aw(i) || dw(i, t) || // For a details element with a summary, the summary element gets the focus
  rw(i) || fw(i));
}, Dc = function(t, i) {
  return !(uw(i) || Ma(i) < 0 || !vo(t, i));
}, pw = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, vb = function(t) {
  var i = [], n = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, d = s ? a.scopeParent : a, c = iw(d, s), m = s ? vb(a.candidates) : d;
    c === 0 ? s ? i.push.apply(i, m) : i.push(d) : n.push({
      documentOrder: r,
      tabIndex: c,
      item: a,
      isScope: s,
      content: m
    });
  }), n.sort(nw).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(i);
}, hw = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = ho([t], i.includeContainer, {
    filter: Dc.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: pw
  }) : n = fb(t, i.includeContainer, Dc.bind(null, i)), vb(n);
}, vw = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = ho([t], i.includeContainer, {
    filter: vo.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : n = fb(t, i.includeContainer, vo.bind(null, i)), n;
}, fr = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Ka.call(t, co) === !1 ? !1 : Dc(i, t);
}, bw = /* @__PURE__ */ cb.concat("iframe:not([inert]):not([inert] *)").join(","), uc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Ka.call(t, bw) === !1 ? !1 : vo(i, t);
};
function Fc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function gw(e) {
  if (Array.isArray(e)) return Fc(e);
}
function Vp(e, t) {
  var i = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!i) {
    if (Array.isArray(e) || (i = bb(e)) || t) {
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
function mw(e, t, i) {
  return (t = Sw(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function yw(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _w() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qp(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function Kp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qp(Object(i), !0).forEach(function(n) {
      mw(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : qp(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function ww(e) {
  return gw(e) || yw(e) || bb(e) || _w();
}
function kw(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sw(e) {
  var t = kw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bb(e, t) {
  if (e) {
    if (typeof e == "string") return Fc(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Fc(e, t) : void 0;
  }
}
var An = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var n = An.getActiveTrap(t);
    i !== n && An.pauseTrap(t);
    var a = t.indexOf(i);
    a === -1 || t.splice(a, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var n = t.indexOf(i);
    n !== -1 && t.splice(n, 1), An.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = An.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = An.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
  }
}, Cw = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Tw = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, ks = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, Aw = function(t) {
  return ks(t) && !t.shiftKey;
}, Ew = function(t) {
  return ks(t) && t.shiftKey;
}, Gp = function(t) {
  return setTimeout(t, 0);
}, os = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, n) : t;
}, Dl = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, xw = [], Cd = function(t, i) {
  var n = i?.document || document, a = i?.trapStack || xw, r = Kp({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: Aw,
    isKeyBackward: Ew
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
  }, d, c = function(R, V, Q) {
    return R && R[V] !== void 0 ? R[V] : r[Q || V];
  }, m = function(R, V) {
    var Q = typeof V?.composedPath == "function" ? V.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ie) {
      var Z = ie.container, ue = ie.tabbableNodes;
      return Z.contains(R) || Q?.includes(Z) || ue.find(function(Te) {
        return Te === R;
      });
    });
  }, v = function(R) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Q = V.hasFallback, ie = Q === void 0 ? !1 : Q, Z = V.params, ue = Z === void 0 ? [] : Z, Te = r[R];
    if (typeof Te == "function" && (Te = Te.apply(void 0, ww(ue))), Te === !0 && (Te = void 0), !Te) {
      if (Te === void 0 || Te === !1)
        return Te;
      throw new Error("`".concat(R, "` was specified but was not a node, or did not return a node"));
    }
    var Pe = Te;
    if (typeof Te == "string") {
      try {
        Pe = n.querySelector(Te);
      } catch (Re) {
        throw new Error("`".concat(R, '` appears to be an invalid selector; error="').concat(Re.message, '"'));
      }
      if (!Pe && !ie)
        throw new Error("`".concat(R, "` as selector refers to no known node"));
    }
    return Pe;
  }, y = function(R) {
    var V = R.activeElement;
    return V ? V.shadowRoot && V.shadowRoot.activeElement !== null ? y(V.shadowRoot) : V : null;
  }, g = function() {
    var R = v("initialFocus", {
      hasFallback: !0
    });
    if (R === !1)
      return !1;
    if (R === void 0 || R && !uc(R, r.tabbableOptions)) {
      var V = y(n);
      if (m(V) >= 0)
        R = V;
      else {
        var Q = s.tabbableGroups[0], ie = Q && Q.firstTabbableNode;
        R = ie || v("fallbackFocus");
      }
    } else R === null && (R = v("fallbackFocus"));
    if (!R)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return R;
  }, k = function() {
    if (s.containerGroups = s.containers.map(function(R) {
      var V = hw(R, r.tabbableOptions), Q = vw(R, r.tabbableOptions), ie = V.length > 0 ? V[0] : void 0, Z = V.length > 0 ? V[V.length - 1] : void 0, ue = Q.find(function(Re) {
        return fr(Re);
      }), Te = Q.slice().reverse().find(function(Re) {
        return fr(Re);
      }), Pe = !!V.find(function(Re) {
        return Ma(Re) > 0;
      });
      return {
        container: R,
        tabbableNodes: V,
        focusableNodes: Q,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Pe,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ie,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: Z,
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
        lastDomTabbableNode: Te,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ue) {
          var Ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, dt = V.indexOf(Ue);
          return dt < 0 ? Ne ? Q.slice(Q.indexOf(Ue) + 1).find(function($e) {
            return fr($e);
          }) : Q.slice(0, Q.indexOf(Ue)).reverse().find(function($e) {
            return fr($e);
          }) : V[dt + (Ne ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(R) {
      return R.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !v("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(R) {
      return R.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, T = function(R) {
    if (R !== !1 && R !== y(document)) {
      if (!R || !R.focus) {
        T(g());
        return;
      }
      R.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = R, Cw(R) && R.select();
    }
  }, C = function(R) {
    var V = v("setReturnFocus", {
      params: [R]
    });
    return V || (V === !1 ? !1 : R);
  }, $ = function(R) {
    var V = R.target, Q = R.event, ie = R.isBackward, Z = ie === void 0 ? !1 : ie;
    V = V || Dl(Q), k();
    var ue = null;
    if (s.tabbableGroups.length > 0) {
      var Te = m(V, Q), Pe = Te >= 0 ? s.containerGroups[Te] : void 0;
      if (Te < 0)
        Z ? ue = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : ue = s.tabbableGroups[0].firstTabbableNode;
      else if (Z) {
        var Re = s.tabbableGroups.findIndex(function(be) {
          var Fe = be.firstTabbableNode;
          return V === Fe;
        });
        if (Re < 0 && (Pe.container === V || uc(V, r.tabbableOptions) && !fr(V, r.tabbableOptions) && !Pe.nextTabbableNode(V, !1)) && (Re = Te), Re >= 0) {
          var Ue = Re === 0 ? s.tabbableGroups.length - 1 : Re - 1, Ne = s.tabbableGroups[Ue];
          ue = Ma(V) >= 0 ? Ne.lastTabbableNode : Ne.lastDomTabbableNode;
        } else ks(Q) || (ue = Pe.nextTabbableNode(V, !1));
      } else {
        var dt = s.tabbableGroups.findIndex(function(be) {
          var Fe = be.lastTabbableNode;
          return V === Fe;
        });
        if (dt < 0 && (Pe.container === V || uc(V, r.tabbableOptions) && !fr(V, r.tabbableOptions) && !Pe.nextTabbableNode(V)) && (dt = Te), dt >= 0) {
          var $e = dt === s.tabbableGroups.length - 1 ? 0 : dt + 1, Ie = s.tabbableGroups[$e];
          ue = Ma(V) >= 0 ? Ie.firstTabbableNode : Ie.firstDomTabbableNode;
        } else ks(Q) || (ue = Pe.nextTabbableNode(V));
      }
    } else
      ue = v("fallbackFocus");
    return ue;
  }, I = function(R) {
    var V = Dl(R);
    if (!(m(V, R) >= 0)) {
      if (os(r.clickOutsideDeactivates, R)) {
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
      os(r.allowOutsideClick, R) || R.preventDefault();
    }
  }, D = function(R) {
    var V = Dl(R), Q = m(V, R) >= 0;
    if (Q || V instanceof Document)
      Q && (s.mostRecentlyFocusedNode = V);
    else {
      R.stopImmediatePropagation();
      var ie, Z = !0;
      if (s.mostRecentlyFocusedNode)
        if (Ma(s.mostRecentlyFocusedNode) > 0) {
          var ue = m(s.mostRecentlyFocusedNode), Te = s.containerGroups[ue].tabbableNodes;
          if (Te.length > 0) {
            var Pe = Te.findIndex(function(Re) {
              return Re === s.mostRecentlyFocusedNode;
            });
            Pe >= 0 && (r.isKeyForward(s.recentNavEvent) ? Pe + 1 < Te.length && (ie = Te[Pe + 1], Z = !1) : Pe - 1 >= 0 && (ie = Te[Pe - 1], Z = !1));
          }
        } else
          s.containerGroups.some(function(Re) {
            return Re.tabbableNodes.some(function(Ue) {
              return Ma(Ue) > 0;
            });
          }) || (Z = !1);
      else
        Z = !1;
      Z && (ie = $({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), T(ie || s.mostRecentlyFocusedNode || g());
    }
    s.recentNavEvent = void 0;
  }, P = function(R) {
    var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = R;
    var Q = $({
      event: R,
      isBackward: V
    });
    Q && (ks(R) && R.preventDefault(), T(Q));
  }, N = function(R) {
    (r.isKeyForward(R) || r.isKeyBackward(R)) && P(R, r.isKeyBackward(R));
  }, ce = function(R) {
    Tw(R) && os(r.escapeDeactivates, R) !== !1 && (R.preventDefault(), d.deactivate());
  }, J = function(R) {
    var V = Dl(R);
    m(V, R) >= 0 || os(r.clickOutsideDeactivates, R) || os(r.allowOutsideClick, R) || (R.preventDefault(), R.stopImmediatePropagation());
  }, x = function() {
    if (s.active) {
      An.activateTrap(a, d);
      var R;
      return r.delayInitialFocus ? R = new Promise(function(V) {
        s.delayInitialFocusTimer = Gp(function() {
          T(g()), V();
        });
      }) : T(g()), n.addEventListener("focusin", D, !0), n.addEventListener("mousedown", I, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", I, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", J, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", N, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", ce), R;
    }
  }, q = function(R) {
    s.active && !s.paused && d._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var V = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set(), ie = Vp(R), Z;
    try {
      for (ie.s(); !(Z = ie.n()).done; ) {
        var ue = Z.value;
        V.add(ue);
        for (var Te = typeof ShadowRoot < "u" && ue.getRootNode() instanceof ShadowRoot, Pe = ue; Pe; ) {
          V.add(Pe);
          var Re = Pe.parentElement, Ue = [];
          Re ? Ue = Re.children : !Re && Te && (Ue = Pe.getRootNode().children, Re = Pe.getRootNode().host, Te = typeof ShadowRoot < "u" && Re.getRootNode() instanceof ShadowRoot);
          var Ne = Vp(Ue), dt;
          try {
            for (Ne.s(); !(dt = Ne.n()).done; ) {
              var $e = dt.value;
              Q.add($e);
            }
          } catch (Ie) {
            Ne.e(Ie);
          } finally {
            Ne.f();
          }
          Pe = Re;
        }
      }
    } catch (Ie) {
      ie.e(Ie);
    } finally {
      ie.f();
    }
    V.forEach(function(Ie) {
      Q.delete(Ie);
    }), s.adjacentElements = Q;
  }, B = function() {
    if (s.active)
      return n.removeEventListener("focusin", D, !0), n.removeEventListener("mousedown", I, !0), n.removeEventListener("touchstart", I, !0), n.removeEventListener("click", J, !0), n.removeEventListener("keydown", N, !0), n.removeEventListener("keydown", ce), d;
  }, Y = function(R) {
    var V = s.mostRecentlyFocusedNode;
    if (V) {
      var Q = R.some(function(Z) {
        var ue = Array.from(Z.removedNodes);
        return ue.some(function(Te) {
          return Te === V || typeof Te.contains == "function" && Te.contains(V);
        });
      });
      if (Q && s.containers.some(function(Z) {
        return Z?.isConnected;
      })) {
        k();
        var ie = g();
        T(ie);
      }
    }
  }, se = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(Y) : void 0, H = function() {
    se && (se.disconnect(), s.active && !s.paused && s.containers.map(function(R) {
      se.observe(R, {
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
    activate: function(R) {
      if (s.active)
        return this;
      var V = c(R, "onActivate"), Q = c(R, "onPostActivate"), ie = c(R, "checkCanFocusTrap"), Z = An.getActiveTrap(a), ue = !1;
      if (Z && !Z.paused) {
        var Te;
        (Te = Z._setSubtreeIsolation) === null || Te === void 0 || Te.call(Z, !1), ue = !0;
      }
      try {
        ie || k(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = y(n), V?.({
          trap: d
        });
        var Pe = function() {
          ie && k();
          var Ne = function() {
            d._setSubtreeIsolation(!0), H(), Q?.({
              trap: d
            });
          }, dt = x();
          dt ? dt.then(Ne) : Ne();
        };
        if (ie)
          return ie(s.containers.concat()).then(Pe, Pe), this;
        Pe();
      } catch (Ue) {
        if (Z === An.getActiveTrap(a) && ue) {
          var Re;
          (Re = Z._setSubtreeIsolation) === null || Re === void 0 || Re.call(Z, !0);
        }
        throw Ue;
      }
      return this;
    },
    deactivate: function(R) {
      if (!s.active)
        return this;
      var V = Kp({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, R);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || d._setSubtreeIsolation(!1), s.alreadySilent.clear(), B(), s.active = !1, s.paused = !1, H(), An.deactivateTrap(a, d);
      var Q = c(V, "onDeactivate"), ie = c(V, "onPostDeactivate"), Z = c(V, "checkCanReturnFocus"), ue = c(V, "delayReturnFocus"), Te = c(V, "returnFocus", "returnFocusOnDeactivate");
      Q?.({
        trap: d
      });
      var Pe = function() {
        Te && T(C(s.nodeFocusedBeforeActivation)), ie?.({
          trap: d
        });
      }, Re = function() {
        ue && Te ? Gp(Pe) : Pe();
      };
      return Te && Z ? (Z(C(s.nodeFocusedBeforeActivation)).then(Re, Re), this) : (Re(), this);
    },
    pause: function(R) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, R)) : this;
    },
    unpause: function(R) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, R)) : this;
    },
    updateContainerElements: function(R) {
      var V = [].concat(R).filter(Boolean);
      return s.containers = V.map(function(Q) {
        return typeof Q == "string" ? n.querySelector(Q) : Q;
      }), r.isolateSubtrees && q(s.containers), s.active && (k(), s.paused || d._setSubtreeIsolation(!0)), H(), this;
    }
  }, Object.defineProperties(d, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(R, V) {
        if (s.paused === R)
          return this;
        if (s.paused = R, R) {
          var Q = c(V, "onPause"), ie = c(V, "onPostPause");
          Q?.({
            trap: d
          }), B(), d._setSubtreeIsolation(!1), H(), ie?.({
            trap: d
          });
        } else {
          var Z = c(V, "onUnpause"), ue = c(V, "onPostUnpause");
          Z?.({
            trap: d
          });
          var Te = function() {
            k();
            var Re = function() {
              d._setSubtreeIsolation(!0), H(), ue?.({
                trap: d
              });
            }, Ue = x();
            Ue ? Ue.then(Re) : Re();
          };
          Te();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(R) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(V) {
          var Q;
          R ? r.isolateSubtrees === "aria-hidden" ? ((V.ariaHidden === "true" || ((Q = V.getAttribute("aria-hidden")) === null || Q === void 0 ? void 0 : Q.toLowerCase()) === "true") && s.alreadySilent.add(V), V.setAttribute("aria-hidden", "true")) : ((V.inert || V.hasAttribute("inert")) && s.alreadySilent.add(V), V.setAttribute("inert", !0)) : s.alreadySilent.has(V) || (r.isolateSubtrees === "aria-hidden" ? V.removeAttribute("aria-hidden") : V.removeAttribute("inert"));
        });
      }
    }
  }), d.updateContainerElements(t), d;
};
const gb = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), $w = /* @__PURE__ */ Bt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [gb]: {
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
function Ow(e, t, i, n, a, r) {
  return p(), h("ul", {
    ref: "list",
    class: ke(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    l("div", {
      class: ke(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: fi(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    He(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const mb = /* @__PURE__ */ rt($w, [["render", Ow], ["__scopeId", "data-v-3e73e246"]]);
function qs() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Nw() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...qs()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === qs().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const yb = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), _b = /* @__PURE__ */ Symbol.for("NcContent:selector");
da(v0);
const Rw = { class: "app-navigation-toggle-wrapper" }, Iw = /* @__PURE__ */ Bt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = mv(e, "open"), i = j(() => t.value ? $t("Close navigation") : $t("Open navigation"));
    return (n, a) => (p(), h("div", Rw, [
      fe(u(ln), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: me(() => [
          fe(du, {
            path: u(l0),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), Lw = /* @__PURE__ */ rt(Iw, [["__scopeId", "data-v-e8177cc7"]]), Pw = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], Dw = { class: "app-navigation__search" }, Fw = /* @__PURE__ */ Bt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const n = Zt(
      yb,
      () => d1(),
      !1
    ), a = gy("appNavigationContainer"), r = rl(), s = /* @__PURE__ */ G(!r.value), d = j(() => r.value && s.value);
    ly(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), qe(r, () => {
      s.value = !r.value;
    }), qe(d, () => {
      v();
    }), Et(() => {
      n(!0), eb("toggle-navigation", m), On("navigation-toggled", {
        open: s.value
      }), i = Cd(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), c(!1)), !1),
        fallbackFocus: a.value,
        trapStack: qs(),
        escapeDeactivates: !1
      }), v();
    }), tl(() => {
      n(!1), Y_("toggle-navigation", m), i.deactivate();
    });
    function c(g) {
      if (s.value === g) {
        On("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = g === void 0 ? !s.value : g;
      const k = getComputedStyle(document.body), T = parseInt(k.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        On("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * T);
    }
    function m({ open: g }) {
      return c(g);
    }
    function v() {
      d.value ? i.activate() : i.deactivate();
    }
    function y() {
      r.value && c(!1);
    }
    return (g, k) => (p(), h("div", {
      ref: "appNavigationContainer",
      class: ke(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": u(fa)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: ot(y, ["esc"])
      }, [
        l("div", Dw, [
          He(g.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: ke(["app-navigation__body", { "app-navigation__body--no-list": !g.$slots.list }])
        }, [
          He(g.$slots, "default", {}, void 0, !0)
        ], 2),
        g.$slots.list ? (p(), De(mb, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: me(() => [
            He(g.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : E("", !0),
        He(g.$slots, "footer", {}, void 0, !0)
      ], 40, Pw),
      fe(Lw, {
        open: s.value,
        "onUpdate:open": c
      }, null, 8, ["open"])
    ], 2));
  }
}), Mw = /* @__PURE__ */ rt(Fw, [["__scopeId", "data-v-37908cd4"]]), Uw = {
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
}, zw = ["aria-hidden", "aria-label"], jw = ["fill", "width", "height"], Bw = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, Hw = { key: 0 };
function Vw(e, t, i, n, a, r) {
  return p(), h("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", Bw, [
        i.title ? (p(), h("title", Hw, o(i.title), 1)) : E("", !0)
      ])
    ], 8, jw))
  ], 16, zw);
}
const qw = /* @__PURE__ */ rt(Uw, [["render", Vw]]), Kw = {
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
}, Gw = ["aria-hidden", "aria-label"], Ww = ["fill", "width", "height"], Yw = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, Zw = { key: 0 };
function Xw(e, t, i, n, a, r) {
  return p(), h("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", Yw, [
        i.title ? (p(), h("title", Zw, o(i.title), 1)) : E("", !0)
      ])
    ], 8, Ww))
  ], 16, Gw);
}
const Jw = /* @__PURE__ */ rt(Kw, [["render", Xw]]), Qw = {
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
}, ek = ["aria-hidden", "aria-label"], tk = ["fill", "width", "height"], ik = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, nk = { key: 0 };
function ak(e, t, i, n, a, r) {
  return p(), h("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", ik, [
        i.title ? (p(), h("title", nk, o(i.title), 1)) : E("", !0)
      ])
    ], 8, tk))
  ], 16, ek);
}
const wb = /* @__PURE__ */ rt(Qw, [["render", ak]]), rk = {
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
}, sk = ["aria-hidden", "aria-label"], lk = ["fill", "width", "height"], ok = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, uk = { key: 0 };
function ck(e, t, i, n, a, r) {
  return p(), h("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", ok, [
        i.title ? (p(), h("title", uk, o(i.title), 1)) : E("", !0)
      ])
    ], 8, lk))
  ], 16, sk);
}
const kb = /* @__PURE__ */ rt(rk, [["render", ck]]);
da(p0);
const dk = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: wb,
    IconClose: kb,
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
    return { isLegacy34: fa };
  },
  data() {
    return {
      labelConfirm: $t("Confirm changes"),
      labelCancel: $t("Cancel changes")
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
}, fk = ["placeholder"];
function pk(e, t, i, n, a, r) {
  const s = Ye("IconArrowRight"), d = Ye("NcButton"), c = Ye("IconClose");
  return p(), h("div", {
    class: ke(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": n.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = Ce((...m) => r.confirm && r.confirm(...m), ["prevent"])),
      onKeydown: t[2] || (t[2] = ot(Ce((...m) => r.cancel && r.cancel(...m), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ce(() => {
      }, ["stop", "prevent"]))
    }, [
      ge(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (m) => r.valueModel = m),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: i.placeholder
      }, null, 8, fk), [
        [We, r.valueModel]
      ]),
      fe(d, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ce(r.confirm, ["stop", "prevent"])
      }, {
        icon: me(() => [
          fe(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      fe(d, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: i.primary ? "primary" : "tertiary",
        onClick: Ce(r.cancel, ["stop", "prevent"])
      }, {
        icon: me(() => [
          fe(c, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const hk = /* @__PURE__ */ rt(dk, [["render", pk], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function fu() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Td = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Sb = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), vk = {
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
}, Cb = {
  mixins: [vk],
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
      from: Sb
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
}, bk = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: du
  },
  mixins: [Cb],
  inject: {
    isInSemanticMenu: {
      from: Td,
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
      mdiCheck: r0,
      mdiChevronRight: s0
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
}, gk = ["role"], mk = ["aria-label", "disabled", "title", "type"], yk = { class: "action-button__longtext-wrapper" }, _k = {
  key: 0,
  class: "action-button__name"
}, wk = ["textContent"], kk = {
  key: 2,
  class: "action-button__text"
}, Sk = ["textContent"], Ck = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function Tk(e, t, i, n, a, r) {
  const s = Ye("NcIconSvgWrapper");
  return p(), h("li", {
    class: ke(["action", { "action--disabled": i.disabled }]),
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
      He(e.$slots, "icon", {}, () => [
        l("span", {
          class: ke([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: fi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", yk, [
        e.name ? (p(), h("strong", _k, o(e.name), 1)) : E("", !0),
        e.isLongText ? (p(), h("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: o(e.text)
        }, null, 8, wk)) : (p(), h("span", kk, o(e.text), 1)),
        i.description ? (p(), h("span", {
          key: 3,
          class: "action-button__description",
          textContent: o(i.description)
        }, null, 8, Sk)) : E("", !0)
      ]),
      i.isMenu ? (p(), De(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: n.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (p(), De(s, {
        key: 1,
        path: n.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (p(), h("span", Ck)) : E("", !0),
      E("", !0)
    ], 16, mk)
  ], 10, gk);
}
const Ak = /* @__PURE__ */ rt(bk, [["render", Tk], ["__scopeId", "data-v-6c2daf4e"]]);
function Ek(e, t = {}) {
  const i = Nw();
  qe(e, () => {
    xn(t.disabled) || (xn(e) ? i.pause() : i.unpause());
  }), tl(() => {
    i.unpause();
  });
}
const xk = ["top", "right", "bottom", "left"], Wp = ["start", "end"], Yp = /* @__PURE__ */ xk.reduce((e, t) => e.concat(t, t + "-" + Wp[0], t + "-" + Wp[1]), []), Ks = Math.min, Mc = Math.max, $k = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Tb(e, t, i) {
  return Mc(e, Ks(t, i));
}
function Ga(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Dn(e) {
  return e.split("-")[0];
}
function Hi(e) {
  return e.split("-")[1];
}
function Ab(e) {
  return e === "x" ? "y" : "x";
}
function Ad(e) {
  return e === "y" ? "height" : "width";
}
function En(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ed(e) {
  return Ab(En(e));
}
function Eb(e, t, i) {
  i === void 0 && (i = !1);
  const n = Hi(e), a = Ed(e), r = Ad(a);
  let s = a === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = go(s)), [s, go(s)];
}
function Ok(e) {
  const t = go(e);
  return [bo(e), t, bo(t)];
}
function bo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Zp = ["left", "right"], Xp = ["right", "left"], Nk = ["top", "bottom"], Rk = ["bottom", "top"];
function Ik(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? Xp : Zp : t ? Zp : Xp;
    case "left":
    case "right":
      return t ? Nk : Rk;
    default:
      return [];
  }
}
function Lk(e, t, i, n) {
  const a = Hi(e);
  let r = Ik(Dn(e), i === "start", n);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(bo)))), r;
}
function go(e) {
  const t = Dn(e);
  return $k[t] + e.slice(t.length);
}
function Pk(e) {
  var t, i, n, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (n = e.bottom) != null ? n : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function xb(e) {
  return typeof e != "number" ? Pk(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ss(e) {
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
function Jp(e, t, i) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = En(t), s = Ed(t), d = Ad(s), c = Dn(t), m = r === "y", v = n.x + n.width / 2 - a.width / 2, y = n.y + n.height / 2 - a.height / 2, g = n[d] / 2 - a[d] / 2;
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
  const T = Hi(t);
  return T && (k[s] += g * (T === "end" ? 1 : -1) * (i && m ? -1 : 1)), k;
}
async function Dk(e, t) {
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
    boundary: m = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: y = "floating",
    altBoundary: g = !1,
    padding: k = 0
  } = Ga(t, e), T = xb(k), $ = d[g ? y === "floating" ? "reference" : "floating" : y], I = Ss(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement($))) == null || i ? $ : $.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(d.floating)),
    boundary: m,
    rootBoundary: v,
    strategy: c
  })), D = y === "floating" ? {
    x: n,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, P = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(d.floating)), N = await (r.isElement == null ? void 0 : r.isElement(P)) && await (r.getScale == null ? void 0 : r.getScale(P)) || {
    x: 1,
    y: 1
  }, ce = Ss(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: d,
    rect: D,
    offsetParent: P,
    strategy: c
  }) : D);
  return {
    top: (I.top - ce.top + T.top) / N.y,
    bottom: (ce.bottom - I.bottom + T.bottom) / N.y,
    left: (I.left - ce.left + T.left) / N.x,
    right: (ce.right - I.right + T.right) / N.x
  };
}
const Fk = 50, Mk = async (e, t, i) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = i, d = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Dk
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let m = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: v,
    y
  } = Jp(m, n, c), g = n, k = 0;
  const T = {};
  for (let C = 0; C < r.length; C++) {
    const $ = r[C];
    if (!$)
      continue;
    const {
      name: I,
      fn: D
    } = $, {
      x: P,
      y: N,
      data: ce,
      reset: J
    } = await D({
      x: v,
      y,
      initialPlacement: n,
      placement: g,
      strategy: a,
      middlewareData: T,
      rects: m,
      platform: d,
      elements: {
        reference: e,
        floating: t
      }
    });
    v = P ?? v, y = N ?? y, T[I] = {
      ...T[I],
      ...ce
    }, J && k < Fk && (k++, typeof J == "object" && (J.placement && (g = J.placement), J.rects && (m = J.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : J.rects), {
      x: v,
      y
    } = Jp(m, g, c)), C = -1);
  }
  return {
    x: v,
    y,
    placement: g,
    strategy: a,
    middlewareData: T
  };
}, Uk = (e) => ({
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
      element: m,
      padding: v = 0
    } = Ga(e, t) || {};
    if (m == null)
      return {};
    const y = xb(v), g = {
      x: i,
      y: n
    }, k = Ed(a), T = Ad(k), C = await s.getDimensions(m), $ = k === "y", I = $ ? "top" : "left", D = $ ? "bottom" : "right", P = $ ? "clientHeight" : "clientWidth", N = r.reference[T] + r.reference[k] - g[k] - r.floating[T], ce = g[k] - r.reference[k], J = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(m));
    let x = J ? J[P] : 0;
    (!x || !await (s.isElement == null ? void 0 : s.isElement(J))) && (x = d.floating[P] || r.floating[T]);
    const q = N / 2 - ce / 2, B = x / 2 - C[T] / 2 - 1, Y = Ks(y[I], B), se = Ks(y[D], B), H = x - C[T] - se, K = x / 2 - C[T] / 2 + q, R = Tb(Y, K, H), V = !c.arrow && Hi(a) != null && K !== R && r.reference[T] / 2 - (K < Y ? Y : se) - C[T] / 2 < 0, Q = V ? K < Y ? K - Y : K - H : 0;
    return {
      [k]: g[k] + Q,
      data: {
        [k]: R,
        centerOffset: K - R - Q,
        ...V && {
          alignmentOffset: Q
        }
      },
      reset: V
    };
  }
});
function zk(e, t, i) {
  return (e ? [...i.filter((a) => Hi(a) === e), ...i.filter((a) => Hi(a) !== e)] : i.filter((a) => Dn(a) === a)).filter((a) => e ? Hi(a) === e || (t ? bo(a) !== a : !1) : !0);
}
const jk = function(e) {
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
        elements: m
      } = t, {
        crossAxis: v = !1,
        alignment: y,
        allowedPlacements: g = Yp,
        autoAlignment: k = !0,
        ...T
      } = Ga(e, t), C = y !== void 0 || g === Yp ? zk(y || null, k, g) : g, $ = ((i = s.autoPlacement) == null ? void 0 : i.index) || 0, I = C[$];
      if (I == null)
        return {};
      if (d !== I)
        return {
          reset: {
            placement: C[0]
          }
        };
      const D = await c.detectOverflow(t, T), P = Eb(I, r, await (c.isRTL == null ? void 0 : c.isRTL(m.floating))), N = [D[Dn(I)], D[P[0]], D[P[1]]], ce = [...((n = s.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: I,
        overflows: N
      }], J = C[$ + 1];
      if (J)
        return {
          data: {
            index: $ + 1,
            overflows: ce
          },
          reset: {
            placement: J
          }
        };
      const x = ce.map((Y) => {
        const se = Hi(Y.placement);
        return [Y.placement, se && v ? (
          // Check along the mainAxis and main crossAxis side.
          Y.overflows.slice(0, 2).reduce((H, K) => H + K, 0)
        ) : (
          // Check only the mainAxis.
          Y.overflows[0]
        ), Y.overflows];
      }).sort((Y, se) => Y[1] - se[1]), B = ((a = x.filter((Y) => Y[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Hi(Y[0]) ? 2 : 3
      ).every((se) => se <= 0))[0]) == null ? void 0 : a[0]) || x[0][0];
      return B !== d ? {
        data: {
          index: $ + 1,
          overflows: ce
        },
        reset: {
          placement: B
        }
      } : {};
    }
  };
}, Bk = function(e) {
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
        elements: m
      } = t, {
        mainAxis: v = !0,
        crossAxis: y = !0,
        fallbackPlacements: g,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: T = "none",
        flipAlignment: C = !0,
        ...$
      } = Ga(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const I = Dn(a), D = En(d), P = Dn(d) === d, N = await (c.isRTL == null ? void 0 : c.isRTL(m.floating)), ce = g || (P || !C ? [go(d)] : Ok(d)), J = T !== "none";
      !g && J && ce.push(...Lk(d, C, T, N));
      const x = [d, ...ce], q = await c.detectOverflow(t, $), B = [];
      let Y = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (v && B.push(q[I]), y) {
        const R = Eb(a, s, N);
        B.push(q[R[0]], q[R[1]]);
      }
      if (Y = [...Y, {
        placement: a,
        overflows: B
      }], !B.every((R) => R <= 0)) {
        var se, H;
        const R = (((se = r.flip) == null ? void 0 : se.index) || 0) + 1, V = x[R];
        if (V && (!(y === "alignment" ? D !== En(V) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((Z) => En(Z.placement) === D ? Z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: R,
              overflows: Y
            },
            reset: {
              placement: V
            }
          };
        let Q = (H = Y.filter((ie) => ie.overflows[0] <= 0).sort((ie, Z) => ie.overflows[1] - Z.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!Q)
          switch (k) {
            case "bestFit": {
              var K;
              const ie = (K = Y.filter((Z) => {
                if (J) {
                  const ue = En(Z.placement);
                  return ue === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ue === "y";
                }
                return !0;
              }).map((Z) => [Z.placement, Z.overflows.filter((ue) => ue > 0).reduce((ue, Te) => ue + Te, 0)]).sort((Z, ue) => Z[1] - ue[1])[0]) == null ? void 0 : K[0];
              ie && (Q = ie);
              break;
            }
            case "initialPlacement":
              Q = d;
              break;
          }
        if (a !== Q)
          return {
            reset: {
              placement: Q
            }
          };
      }
      return {};
    }
  };
}, Hk = /* @__PURE__ */ new Set(["left", "top"]);
async function Vk(e, t) {
  const {
    placement: i,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), s = Dn(i), d = Hi(i), c = En(i) === "y", m = Hk.has(s) ? -1 : 1, v = r && c ? -1 : 1, y = Ga(t, e);
  let {
    mainAxis: g,
    crossAxis: k,
    alignmentAxis: T
  } = typeof y == "number" ? {
    mainAxis: y,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: y.mainAxis || 0,
    crossAxis: y.crossAxis || 0,
    alignmentAxis: y.alignmentAxis
  };
  return d && typeof T == "number" && (k = d === "end" ? T * -1 : T), c ? {
    x: k * v,
    y: g * m
  } : {
    x: g * m,
    y: k * v
  };
}
const qk = function(e) {
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
      } = t, c = await Vk(t, e);
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
}, Kk = function(e) {
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
          fn: (D) => {
            let {
              x: P,
              y: N
            } = D;
            return {
              x: P,
              y: N
            };
          }
        },
        ...m
      } = Ga(e, t), v = {
        x: i,
        y: n
      }, y = await r.detectOverflow(t, m), g = En(a), k = Ab(g);
      let T = v[k], C = v[g];
      const $ = (D, P) => Tb(P + y[D === "y" ? "top" : "left"], P, P - y[D === "y" ? "bottom" : "right"]);
      s && (T = $(k, T)), d && (C = $(g, C));
      const I = c.fn({
        ...t,
        [k]: T,
        [g]: C
      });
      return {
        ...I,
        data: {
          x: I.x - i,
          y: I.y - n,
          enabled: {
            [k]: s,
            [g]: d
          }
        }
      };
    }
  };
}, Gk = function(e) {
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
      } = Ga(e, t), c = await a.detectOverflow(t, d), m = Dn(i), v = Hi(i), y = En(i) === "y", {
        width: g,
        height: k
      } = n.floating;
      let T, C;
      m === "top" || m === "bottom" ? (T = m, C = v === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (C = m, T = v === "end" ? "top" : "bottom");
      const $ = k - c.top - c.bottom, I = g - c.left - c.right, D = Ks(k - c[T], $), P = Ks(g - c[C], I), N = t.middlewareData.shift, ce = !N;
      let J = D, x = P;
      N != null && N.enabled.x && (x = I), N != null && N.enabled.y && (J = $), ce && !v && (y ? x = g - 2 * Mc(c.left, c.right) : J = k - 2 * Mc(c.top, c.bottom)), await s({
        ...t,
        availableWidth: x,
        availableHeight: J
      });
      const q = await a.getDimensions(r.floating);
      return g !== q.width || k !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function $i(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function on(e) {
  return $i(e).getComputedStyle(e);
}
const Qp = Math.min, Cs = Math.max, mo = Math.round;
function $b(e) {
  const t = on(e);
  let i = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = mo(i) !== a || mo(n) !== r;
  return s && (i = a, n = r), { width: i, height: n, fallback: s };
}
function ua(e) {
  return Nb(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Fl;
function Ob() {
  if (Fl) return Fl;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Fl = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Fl) : navigator.userAgent;
}
function un(e) {
  return e instanceof $i(e).HTMLElement;
}
function ra(e) {
  return e instanceof $i(e).Element;
}
function Nb(e) {
  return e instanceof $i(e).Node;
}
function eh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof $i(e).ShadowRoot || e instanceof ShadowRoot;
}
function pu(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: a } = on(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a);
}
function Wk(e) {
  return ["table", "td", "th"].includes(ua(e));
}
function Uc(e) {
  const t = /firefox/i.test(Ob()), i = on(e), n = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!n && n !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((a) => i.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = i.contain;
    return r != null && r.includes(a);
  }));
}
function Rb() {
  return !/^((?!chrome|android).)*safari/i.test(Ob());
}
function xd(e) {
  return ["html", "body", "#document"].includes(ua(e));
}
function Ib(e) {
  return ra(e) ? e : e.contextElement;
}
const Lb = { x: 1, y: 1 };
function Sr(e) {
  const t = Ib(e);
  if (!un(t)) return Lb;
  const i = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = $b(t);
  let s = (r ? mo(i.width) : i.width) / n, d = (r ? mo(i.height) : i.height) / a;
  return s && Number.isFinite(s) || (s = 1), d && Number.isFinite(d) || (d = 1), { x: s, y: d };
}
function Gs(e, t, i, n) {
  var a, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const s = e.getBoundingClientRect(), d = Ib(e);
  let c = Lb;
  t && (n ? ra(n) && (c = Sr(n)) : c = Sr(e));
  const m = d ? $i(d) : window, v = !Rb() && i;
  let y = (s.left + (v && ((a = m.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / c.x, g = (s.top + (v && ((r = m.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / c.y, k = s.width / c.x, T = s.height / c.y;
  if (d) {
    const C = $i(d), $ = n && ra(n) ? $i(n) : n;
    let I = C.frameElement;
    for (; I && n && $ !== C; ) {
      const D = Sr(I), P = I.getBoundingClientRect(), N = getComputedStyle(I);
      P.x += (I.clientLeft + parseFloat(N.paddingLeft)) * D.x, P.y += (I.clientTop + parseFloat(N.paddingTop)) * D.y, y *= D.x, g *= D.y, k *= D.x, T *= D.y, y += P.x, g += P.y, I = $i(I).frameElement;
    }
  }
  return { width: k, height: T, top: g, right: y + k, bottom: g + T, left: y, x: y, y: g };
}
function sa(e) {
  return ((Nb(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function hu(e) {
  return ra(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Pb(e) {
  return Gs(sa(e)).left + hu(e).scrollLeft;
}
function Ws(e) {
  if (ua(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || eh(e) && e.host || sa(e);
  return eh(t) ? t.host : t;
}
function Db(e) {
  const t = Ws(e);
  return xd(t) ? t.ownerDocument.body : un(t) && pu(t) ? t : Db(t);
}
function yo(e, t) {
  var i;
  t === void 0 && (t = []);
  const n = Db(e), a = n === ((i = e.ownerDocument) == null ? void 0 : i.body), r = $i(n);
  return a ? t.concat(r, r.visualViewport || [], pu(n) ? n : []) : t.concat(n, yo(n));
}
function th(e, t, i) {
  return t === "viewport" ? Ss((function(n, a) {
    const r = $i(n), s = sa(n), d = r.visualViewport;
    let c = s.clientWidth, m = s.clientHeight, v = 0, y = 0;
    if (d) {
      c = d.width, m = d.height;
      const g = Rb();
      (g || !g && a === "fixed") && (v = d.offsetLeft, y = d.offsetTop);
    }
    return { width: c, height: m, x: v, y };
  })(e, i)) : ra(t) ? Ss((function(n, a) {
    const r = Gs(n, !0, a === "fixed"), s = r.top + n.clientTop, d = r.left + n.clientLeft, c = un(n) ? Sr(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * c.x, height: n.clientHeight * c.y, x: d * c.x, y: s * c.y };
  })(t, i)) : Ss((function(n) {
    const a = sa(n), r = hu(n), s = n.ownerDocument.body, d = Cs(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), c = Cs(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let m = -r.scrollLeft + Pb(n);
    const v = -r.scrollTop;
    return on(s).direction === "rtl" && (m += Cs(a.clientWidth, s.clientWidth) - d), { width: d, height: c, x: m, y: v };
  })(sa(e)));
}
function ih(e) {
  return un(e) && on(e).position !== "fixed" ? e.offsetParent : null;
}
function nh(e) {
  const t = $i(e);
  let i = ih(e);
  for (; i && Wk(i) && on(i).position === "static"; ) i = ih(i);
  return i && (ua(i) === "html" || ua(i) === "body" && on(i).position === "static" && !Uc(i)) ? t : i || (function(n) {
    let a = Ws(n);
    for (; un(a) && !xd(a); ) {
      if (Uc(a)) return a;
      a = Ws(a);
    }
    return null;
  })(e) || t;
}
function Yk(e, t, i) {
  const n = un(t), a = sa(t), r = Gs(e, !0, i === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const d = { x: 0, y: 0 };
  if (n || !n && i !== "fixed") if ((ua(t) !== "body" || pu(a)) && (s = hu(t)), un(t)) {
    const c = Gs(t, !0);
    d.x = c.x + t.clientLeft, d.y = c.y + t.clientTop;
  } else a && (d.x = Pb(a));
  return { x: r.left + s.scrollLeft - d.x, y: r.top + s.scrollTop - d.y, width: r.width, height: r.height };
}
const Zk = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
  const r = i === "clippingAncestors" ? (function(m, v) {
    const y = v.get(m);
    if (y) return y;
    let g = yo(m).filter((($) => ra($) && ua($) !== "body")), k = null;
    const T = on(m).position === "fixed";
    let C = T ? Ws(m) : m;
    for (; ra(C) && !xd(C); ) {
      const $ = on(C), I = Uc(C);
      (T ? I || k : I || $.position !== "static" || !k || !["absolute", "fixed"].includes(k.position)) ? k = $ : g = g.filter(((D) => D !== C)), C = Ws(C);
    }
    return v.set(m, g), g;
  })(t, this._c) : [].concat(i), s = [...r, n], d = s[0], c = s.reduce(((m, v) => {
    const y = th(t, v, a);
    return m.top = Cs(y.top, m.top), m.right = Qp(y.right, m.right), m.bottom = Qp(y.bottom, m.bottom), m.left = Cs(y.left, m.left), m;
  }), th(t, d, a));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: n } = e;
  const a = un(i), r = sa(i);
  if (i === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, d = { x: 1, y: 1 };
  const c = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((ua(i) !== "body" || pu(r)) && (s = hu(i)), un(i))) {
    const m = Gs(i);
    d = Sr(i), c.x = m.x + i.clientLeft, c.y = m.y + i.clientTop;
  }
  return { width: t.width * d.x, height: t.height * d.y, x: t.x * d.x - s.scrollLeft * d.x + c.x, y: t.y * d.y - s.scrollTop * d.y + c.y };
}, isElement: ra, getDimensions: function(e) {
  return un(e) ? $b(e) : e.getBoundingClientRect();
}, getOffsetParent: nh, getDocumentElement: sa, getScale: Sr, async getElementRects(e) {
  let { reference: t, floating: i, strategy: n } = e;
  const a = this.getOffsetParent || nh, r = this.getDimensions;
  return { reference: Yk(t, await a(i), n), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => on(e).direction === "rtl" }, Xk = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: Zk, ...i }, r = { ...a.platform, _c: n };
  return Mk(e, t, { ...a, platform: r });
}, la = {
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
function zc(e, t) {
  let i = la.themes[e] || {}, n;
  do
    n = i[t], typeof n > "u" ? i.$extend ? i = la.themes[i.$extend] || {} : (i = null, n = la[t]) : i = null;
  while (i);
  return n;
}
function Jk(e) {
  const t = [e];
  let i = la.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = la.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((n) => `v-popper--theme-${n}`);
}
function ah(e) {
  const t = [e];
  let i = la.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = la.themes[i.$extend] || {}) : i = null;
  while (i);
  return t;
}
let Ys = !1;
if (typeof window < "u") {
  Ys = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Ys = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Fb = !1;
typeof window < "u" && typeof navigator < "u" && (Fb = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Qk = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), rh = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, sh = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function lh(e, t) {
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function cc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const ji = [];
let Ra = null;
const oh = {};
function uh(e) {
  let t = oh[e];
  return t || (t = oh[e] = []), t;
}
let jc = function() {
};
typeof window < "u" && (jc = window.Element);
function Ze(e) {
  return function(t) {
    return zc(t.theme, e);
  };
}
const dc = "__floating-vue__popper", Mb = () => /* @__PURE__ */ Bt({
  name: "VPopper",
  provide() {
    return {
      [dc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [dc]: { default: null }
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
      default: Ze("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Ze("positioningDisabled")
    },
    placement: {
      type: String,
      default: Ze("placement"),
      validator: (e) => Qk.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Ze("delay")
    },
    distance: {
      type: [Number, String],
      default: Ze("distance")
    },
    skidding: {
      type: [Number, String],
      default: Ze("skidding")
    },
    triggers: {
      type: Array,
      default: Ze("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Ze("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Ze("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Ze("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Ze("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Ze("popperHideTriggers")
    },
    container: {
      type: [String, Object, jc, Boolean],
      default: Ze("container")
    },
    boundary: {
      type: [String, jc],
      default: Ze("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Ze("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Ze("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Ze("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Ze("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Ze("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Ze("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Ze("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Ze("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Ze("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Ze("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Ze("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Ze("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Ze("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Ze("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Ze("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Ze("flip")
    },
    shift: {
      type: Boolean,
      default: Ze("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Ze("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Ze("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Ze("disposeTimeout")
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
      return (e = this[dc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(qk({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(jk({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Kk({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(Bk({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Uk({
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
            let c, m;
            return r.startsWith("top") || r.startsWith("bottom") ? c = a.reference.width : m = a.reference.height, this.$_innerNode.style[n === "min" ? "minWidth" : n === "max" ? "maxWidth" : "width"] = c != null ? `${c}px` : null, this.$_innerNode.style[n === "min" ? "minHeight" : n === "max" ? "maxHeight" : "height"] = m != null ? `${m}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Gk({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const i = await Xk(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Ra && this.instantMove && Ra.instantMove && Ra !== this.parentPopper) {
        Ra.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Ra = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await cc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...yo(this.$_referenceNode),
        ...yo(this.$_popperNode)
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
      for (const t of ah(this.theme))
        uh(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await cc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, lh(ji, this), ji.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const i of ah(this.theme)) {
        const n = uh(i);
        lh(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
      }
      Ra === this && (Ra = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await cc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, rh, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], rh, this.popperTriggers, this.popperShowTriggers, e);
      const t = (i) => {
        i.usedByTooltip || this.hide({ event: i });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, sh, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], sh, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, i) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((n) => n.addEventListener(t, i, Ys ? {
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
      if (Ts >= e.left && Ts <= e.right && As >= e.top && As <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), i = Ts - Jn, n = As - Qn, a = t.left + t.width / 2 - Jn + (t.top + t.height / 2) - Qn + t.width + t.height, r = Jn + i * a, s = Qn + n * a;
        return Ml(Jn, Qn, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Ml(Jn, Qn, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Ml(Jn, Qn, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Ml(Jn, Qn, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Fb) {
    const e = Ys ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => ch(t), e), document.addEventListener("touchend", (t) => dh(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => ch(e), !0), window.addEventListener("click", (e) => dh(e, !1), !0);
  window.addEventListener("resize", iS);
}
function ch(e, t) {
  for (let i = 0; i < ji.length; i++) {
    const n = ji[i];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function dh(e, t) {
  eS(e, t);
}
function eS(e, t) {
  const i = {};
  for (let n = ji.length - 1; n >= 0; n--) {
    const a = ji[n];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !i[a.randomId] && fh(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let d = a.parentPopper;
            for (; d; )
              i[d.randomId] = !0, d = d.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && fh(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function fh(e, t, i) {
  return i.closeAllPopover || i.closePopover && t || tS(e, i) && !t;
}
function tS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function iS() {
  for (let e = 0; e < ji.length; e++)
    ji[e].$_computePosition();
}
let Jn = 0, Qn = 0, Ts = 0, As = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Jn = Ts, Qn = As, Ts = e.clientX, As = e.clientY;
}, Ys ? {
  passive: !0
} : void 0);
function Ml(e, t, i, n, a, r, s, d) {
  const c = ((s - a) * (t - r) - (d - r) * (e - a)) / ((d - r) * (i - e) - (s - a) * (n - t)), m = ((i - e) * (t - r) - (n - t) * (e - a)) / ((d - r) * (i - e) - (s - a) * (n - t));
  return c >= 0 && c <= 1 && m >= 0 && m <= 1;
}
const nS = {
  extends: Mb()
}, $d = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
};
function aS(e, t, i, n, a, r) {
  return p(), h("div", {
    ref: "reference",
    class: ke(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    He(e.$slots, "default", Gl(zs(e.slotData)))
  ], 2);
}
const rS = /* @__PURE__ */ $d(nS, [["render", aS]]);
function sS() {
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
let ql;
function Bc() {
  Bc.init || (Bc.init = !0, ql = sS() !== -1);
}
var vu = {
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
    Bc(), xt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ql && this.$el.appendChild(e), e.data = "about:blank", ql || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!ql && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const lS = /* @__PURE__ */ ay();
iy("data-v-b329ee4c");
const oS = {
  class: "resize-observer",
  tabindex: "-1"
};
ny();
const uS = /* @__PURE__ */ lS((e, t, i, n, a, r) => (p(), De("div", oS)));
vu.render = uS;
vu.__scopeId = "data-v-b329ee4c";
vu.__file = "src/components/ResizeObserver.vue";
const Ub = (e = "theme") => ({
  computed: {
    themeClass() {
      return Jk(this[e]);
    }
  }
}), cS = /* @__PURE__ */ Bt({
  name: "VPopperContent",
  components: {
    ResizeObserver: vu
  },
  mixins: [
    Ub()
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
}), dS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], fS = {
  ref: "inner",
  class: "v-popper__inner"
}, pS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), hS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), vS = [
  pS,
  hS
];
function bS(e, t, i, n, a, r) {
  const s = Ye("ResizeObserver");
  return p(), h("div", {
    id: e.popperId,
    ref: "popover",
    class: ke(["v-popper__popper", [
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
    style: fi(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = ot((d) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    l("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (d) => e.autoHide && e.$emit("hide"))
    }),
    l("div", {
      class: "v-popper__wrapper",
      style: fi(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", fS, [
        e.mounted ? (p(), h(W, { key: 0 }, [
          l("div", null, [
            He(e.$slots, "default")
          ]),
          e.handleResize ? (p(), De(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (d) => e.$emit("resize", d))
          })) : E("", !0)
        ], 64)) : E("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: fi(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, vS, 4)
    ], 4)
  ], 46, dS);
}
const zb = /* @__PURE__ */ $d(cS, [["render", bS]]), jb = {
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
let Hc = function() {
};
typeof window < "u" && (Hc = window.Element);
const gS = /* @__PURE__ */ Bt({
  name: "VPopperWrapper",
  components: {
    Popper: rS,
    PopperContent: zb
  },
  mixins: [
    jb,
    Ub("finalTheme")
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
      type: [String, Object, Hc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Hc],
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
function mS(e, t, i, n, a, r) {
  const s = Ye("PopperContent"), d = Ye("Popper");
  return p(), De(d, ei({ ref: "popper" }, e.$props, {
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
    default: me(({
      popperId: c,
      isShown: m,
      shouldMountContent: v,
      skipTransition: y,
      autoHide: g,
      show: k,
      hide: T,
      handleResize: C,
      onResize: $,
      classes: I,
      result: D
    }) => [
      He(e.$slots, "default", {
        shown: m,
        show: k,
        hide: T
      }),
      fe(s, {
        ref: "popperContent",
        "popper-id": c,
        theme: e.finalTheme,
        shown: m,
        mounted: v,
        "skip-transition": y,
        "auto-hide": g,
        "handle-resize": C,
        classes: I,
        result: D,
        onHide: T,
        onResize: $
      }, {
        default: me(() => [
          He(e.$slots, "popper", {
            shown: m,
            hide: T
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Od = /* @__PURE__ */ $d(gS, [["render", mS]]), yS = {
  ...Od,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Od
});
({
  ...Od
});
Mb();
const ph = la, _S = yS, wS = /* @__PURE__ */ Bt({
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
}), kS = "_ncPopover_qgtYg", SS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: kS
}, Bb = "nc-popover-9";
ph.themes[Bb] = structuredClone(ph.themes.dropdown);
const CS = {
  name: "NcPopover",
  components: {
    Dropdown: _S,
    NcPopoverTriggerProvider: wS
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
      theme: Bb
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
      return this.placement === "start" ? Pc ? "right" : "left" : this.placement === "end" ? Pc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Cd(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: qs(),
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
        Va.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function TS(e, t, i, n, a, r) {
  const s = Ye("NcPopoverTriggerProvider"), d = Ye("Dropdown");
  return p(), De(d, {
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
    popper: me((c) => [
      He(e.$slots, "default", Gl(zs(c)))
    ]),
    default: me(() => [
      fe(s, {
        shown: a.internalShown,
        popupRole: i.popupRole
      }, {
        default: me((c) => [
          He(e.$slots, "trigger", Gl(zs(c)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const AS = {
  $style: SS
}, hh = /* @__PURE__ */ rt(CS, [["render", TS], ["__cssModules", AS]]), ES = {
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
}, xS = ["aria-hidden", "aria-label"], $S = ["fill", "width", "height"], OS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, NS = { key: 0 };
function RS(e, t, i, n, a, r) {
  return p(), h("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", OS, [
        i.title ? (p(), h("title", NS, o(i.title), 1)) : E("", !0)
      ])
    ], 8, $S))
  ], 16, xS);
}
const IS = /* @__PURE__ */ rt(ES, [["render", RS]]);
da(f0);
function Nd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === zt)
        return !1;
      if (i.type === W && !Nd(i.children))
        return !1;
      if (i.type === il && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const LS = ".focusable", PS = {
  name: "NcActions",
  components: {
    NcButton: ln,
    NcPopover: hh
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
      [Td]: j(() => this.actionsMenuSemanticType === "menu"),
      [Sb]: this.closeMenu
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
      default: $t("Actions")
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
      randomId: fu()
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
    Ek(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(LS);
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
    const n = i.slice(0, this.inline), a = e.filter((k) => !n.includes(k)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], d = ["NcActionLink", "NcActionRouter"], c = a.some((k) => s.includes(this.getActionName(k))), m = a.some((k) => r.includes(this.getActionName(k))), v = a.some((k) => d.includes(this.getActionName(k)));
    c ? this.actionsMenuSemanticType = "dialog" : m ? this.actionsMenuSemanticType = "menu" : v ? this.actionsMenuSemanticType = "navigation" : e.filter((T) => this.getActionName(T).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const y = (k) => {
      const T = k?.props?.icon, C = k?.children?.icon?.()?.[0] ?? (this.isIconUrl(T) ? ci("img", { class: "action-item__menutoggle__icon", src: T, alt: "" }) : ci("span", { class: ["icon", T] })), $ = k?.children?.default?.()?.[0]?.children?.trim(), I = this.forceName ? $ : "";
      let D = k?.props?.title;
      this.forceName || D || (D = $);
      const P = { ...k?.props ?? {} }, N = ["submit", "reset"].includes(P.type) ? P.modelValue : "button";
      return delete P.modelValue, delete P.type, ci(
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
            title: D,
            disabled: this.disabled || k?.props?.disabled,
            pressed: k?.props?.modelValue,
            size: this.size,
            type: N,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (I ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": k?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => I,
          icon: () => C
        }
      );
    }, g = (k) => {
      const T = Nd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? ci("span", { class: ["icon", this.defaultIcon] }) : ci(IS, { size: 20 }), C = `${this.randomId}-trigger`;
      return ci(
        hh,
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
          trigger: () => ci(ln, {
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
    return e.length === 1 && i.length === 1 && !this.forceMenu ? y(e[0]) : (this.$nextTick(() => {
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
        ...n.map(y),
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
          [g(a)]
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
        g(e)
      ]
    ));
  }
}, Rd = /* @__PURE__ */ rt(PS, [["__scopeId", "data-v-7206c1f1"]]), DS = ["aria-label"], FS = ["width", "height"], MS = ["fill"], US = ["fill"], zS = { key: 0 }, jS = /* @__PURE__ */ Bt({
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
        l("path", {
          fill: i.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, MS),
        l("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (p(), h("title", zS, o(e.name), 1)) : E("", !0)
        ], 8, US)
      ], 8, FS))
    ], 8, DS));
  }
}), Hb = /* @__PURE__ */ rt(jS, [["__scopeId", "data-v-cf399190"]]), Vc = /* @__PURE__ */ Bt({
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
}), BS = {
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
}, HS = ["aria-hidden", "aria-label"], VS = ["fill", "width", "height"], qS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, KS = { key: 0 };
function GS(e, t, i, n, a, r) {
  return p(), h("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", qS, [
        i.title ? (p(), h("title", KS, o(i.title), 1)) : E("", !0)
      ])
    ], 8, VS))
  ], 16, HS);
}
const WS = /* @__PURE__ */ rt(BS, [["render", GS]]), YS = {
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
}, ZS = ["aria-hidden", "aria-label"], XS = ["fill", "width", "height"], JS = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, QS = { key: 0 };
function eC(e, t, i, n, a, r) {
  return p(), h("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", JS, [
        i.title ? (p(), h("title", QS, o(i.title), 1)) : E("", !0)
      ])
    ], 8, XS))
  ], 16, ZS);
}
const tC = /* @__PURE__ */ rt(YS, [["render", eC]]);
da(b0);
const iC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: ln,
    ChevronDown: qw,
    ChevronUp: Jw
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
    return { isLegacy34: fa };
  },
  computed: {
    labelButton() {
      return this.open ? $t("Collapse menu") : $t("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function nC(e, t, i, n, a, r) {
  const s = Ye("ChevronUp"), d = Ye("ChevronDown"), c = Ye("NcButton");
  return p(), De(c, {
    class: ke(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && n.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: me(() => [
      i.open ? (p(), De(s, {
        key: 0,
        size: 20
      })) : (p(), De(d, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const aC = /* @__PURE__ */ rt(iC, [["render", nC], ["__scopeId", "data-v-cfbd3794"]]);
da(g0, _0);
const rC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Rd,
    NcActionButton: Ak,
    NcAppNavigationIconCollapsible: aC,
    NcInputConfirmCancel: hk,
    NcLoadingIcon: Hb,
    NcVNodes: Vc,
    Pencil: WS,
    Undo: tC
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: gb, default: null }
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
      default: () => fu(),
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
      isMobile: rl(),
      isLegacy34: fa
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
      return this.editLabel ? this.editLabel : $t("Edit item");
    },
    undoButtonAriaLabel() {
      return $t("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && On("toggle-navigation", { open: !1 }));
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
}, sC = ["id"], lC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], oC = {
  key: 0,
  class: "editingContainer"
}, uC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, cC = { class: "app-navigation-entry__deleted-description" }, dC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, fC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function pC(e, t, i, n, a, r) {
  const s = Ye("NcLoadingIcon"), d = Ye("NcInputConfirmCancel"), c = Ye("Pencil"), m = Ye("NcActionButton"), v = Ye("Undo"), y = Ye("NcActions"), g = Ye("NcAppNavigationIconCollapsible");
  return p(), h("li", {
    id: i.id,
    class: ke([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (p(), De(vd(r.isRouterLink ? "router-link" : "NcVNodes"), Gl(zs({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: me(({ href: k, navigate: T, isActive: C }) => [
        l("div", {
          ref: "entry",
          class: ke(["app-navigation-entry", {
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
            onKeydown: t[3] || (t[3] = ot(Ce((...$) => r.handleTab && r.handleTab(...$), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: ke(["app-navigation-entry-icon", { [i.icon]: i.icon }])
            }, [
              i.loading ? (p(), De(s, { key: 0 })) : He(e.$slots, "icon", {
                key: 1,
                active: i.active || i.to && C
              }, void 0, !0)
            ], 2),
            l("span", {
              class: ke(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, o(i.name), 3),
            a.editingActive ? (p(), h("div", oC, [
              fe(d, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = ($) => a.editingValue = $),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && C || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : E("", !0)
          ], 40, lC)),
          i.undo ? (p(), h("div", uC, [
            l("div", cC, o(i.name), 1)
          ])) : E("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !a.editingActive ? (p(), h("div", {
            key: 2,
            class: ke(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || a.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (p(), h("div", dC, [
              He(e.$slots, "counter", {}, void 0, !0)
            ])) : E("", !0),
            e.$slots.actions || i.editable && !a.editingActive || i.undo ? (p(), De(y, {
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
              icon: me(() => [
                He(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: me(() => [
                i.editable && !a.editingActive ? (p(), De(m, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: me(() => [
                    fe(c, { size: 20 })
                  ]),
                  default: me(() => [
                    te(" " + o(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : E("", !0),
                i.undo ? (p(), De(m, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: me(() => [
                    fe(v, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : E("", !0),
                He(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : E("", !0)
          ], 2)) : E("", !0),
          i.allowCollapse && e.$slots.default ? (p(), De(g, {
            key: 3,
            active: i.to && C || i.active,
            open: a.opened,
            onClick: Ce(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : E("", !0),
          He(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (p(), h("ul", fC, [
      He(e.$slots, "default", {}, void 0, !0)
    ])) : E("", !0)
  ], 10, sC);
}
const Wn = /* @__PURE__ */ rt(rC, [["render", pC], ["__scopeId", "data-v-01bef41b"]]), fc = /* @__PURE__ */ new WeakMap(), hC = {
  mounted(e, t) {
    const i = !t.modifiers.bubble;
    let n;
    if (typeof t.value == "function") n = zp(e, t.value, { capture: i });
    else {
      const [a, r] = t.value;
      n = zp(e, a, Object.assign({ capture: i }, r));
    }
    fc.set(e, n);
  },
  unmounted(e) {
    const t = fc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), fc.delete(e);
  }
}, vC = {
  mounted(e) {
    e.focus();
  }
}, bC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", gC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", qc = "numeric", Kc = "ascii", Gc = "alpha", Es = "asciinumeric", vs = "alphanumeric", Wc = "domain", Vb = "emoji", mC = "scheme", yC = "slashscheme", pc = "whitespace";
function _C(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Ua(e, t, i) {
  t[qc] && (t[Es] = !0, t[vs] = !0), t[Kc] && (t[Es] = !0, t[Gc] = !0), t[Es] && (t[vs] = !0), t[Gc] && (t[vs] = !0), t[vs] && (t[Wc] = !0), t[Vb] && (t[Wc] = !0);
  for (const n in t) {
    const a = _C(n, i);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function wC(e, t) {
  const i = {};
  for (const n in t)
    t[n].indexOf(e) >= 0 && (i[n] = !0);
  return i;
}
function yi(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
yi.groups = {};
yi.prototype = {
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
    n = n || yi.groups;
    let a;
    return t && t.j ? a = t : (a = new yi(t), i && n && Ua(t, i, n)), this.jr.push([e, a]), a;
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
    n = n || yi.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, d = a.go(e);
    if (d ? (s = new yi(), Object.assign(s.j, d.j), s.jr.push.apply(s.jr, d.jr), s.jd = d.jd, s.t = d.t) : s = new yi(), r) {
      if (n)
        if (s.t && typeof s.t == "string") {
          const c = Object.assign(wC(s.t, n), i);
          Ua(r, c, n);
        } else i && Ua(r, i, n);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ge = (e, t, i, n, a) => e.ta(t, i, n, a), wt = (e, t, i, n, a) => e.tr(t, i, n, a), vh = (e, t, i, n, a) => e.ts(t, i, n, a), ve = (e, t, i, n, a) => e.tt(t, i, n, a), wn = "WORD", Yc = "UWORD", qb = "ASCIINUMERICAL", Kb = "ALPHANUMERICAL", Zs = "LOCALHOST", Zc = "TLD", Xc = "UTLD", Kl = "SCHEME", br = "SLASH_SCHEME", Id = "NUM", Jc = "WS", Ld = "NL", xs = "OPENBRACE", $s = "CLOSEBRACE", _o = "OPENBRACKET", wo = "CLOSEBRACKET", ko = "OPENPAREN", So = "CLOSEPAREN", Co = "OPENANGLEBRACKET", To = "CLOSEANGLEBRACKET", Ao = "FULLWIDTHLEFTPAREN", Eo = "FULLWIDTHRIGHTPAREN", xo = "LEFTCORNERBRACKET", $o = "RIGHTCORNERBRACKET", Oo = "LEFTWHITECORNERBRACKET", No = "RIGHTWHITECORNERBRACKET", Ro = "FULLWIDTHLESSTHAN", Io = "FULLWIDTHGREATERTHAN", Lo = "AMPERSAND", Po = "APOSTROPHE", Do = "ASTERISK", ta = "AT", Fo = "BACKSLASH", Mo = "BACKTICK", Uo = "CARET", za = "COLON", Pd = "COMMA", zo = "DOLLAR", tn = "DOT", jo = "EQUALS", Dd = "EXCLAMATION", Ai = "HYPHEN", Os = "PERCENT", Bo = "PIPE", Ho = "PLUS", Vo = "POUND", Ns = "QUERY", Fd = "QUOTE", Gb = "FULLWIDTHMIDDLEDOT", Md = "SEMI", nn = "SLASH", Rs = "TILDE", qo = "UNDERSCORE", Wb = "EMOJI", Ko = "SYM";
var Yb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Kb,
  AMPERSAND: Lo,
  APOSTROPHE: Po,
  ASCIINUMERICAL: qb,
  ASTERISK: Do,
  AT: ta,
  BACKSLASH: Fo,
  BACKTICK: Mo,
  CARET: Uo,
  CLOSEANGLEBRACKET: To,
  CLOSEBRACE: $s,
  CLOSEBRACKET: wo,
  CLOSEPAREN: So,
  COLON: za,
  COMMA: Pd,
  DOLLAR: zo,
  DOT: tn,
  EMOJI: Wb,
  EQUALS: jo,
  EXCLAMATION: Dd,
  FULLWIDTHGREATERTHAN: Io,
  FULLWIDTHLEFTPAREN: Ao,
  FULLWIDTHLESSTHAN: Ro,
  FULLWIDTHMIDDLEDOT: Gb,
  FULLWIDTHRIGHTPAREN: Eo,
  HYPHEN: Ai,
  LEFTCORNERBRACKET: xo,
  LEFTWHITECORNERBRACKET: Oo,
  LOCALHOST: Zs,
  NL: Ld,
  NUM: Id,
  OPENANGLEBRACKET: Co,
  OPENBRACE: xs,
  OPENBRACKET: _o,
  OPENPAREN: ko,
  PERCENT: Os,
  PIPE: Bo,
  PLUS: Ho,
  POUND: Vo,
  QUERY: Ns,
  QUOTE: Fd,
  RIGHTCORNERBRACKET: $o,
  RIGHTWHITECORNERBRACKET: No,
  SCHEME: Kl,
  SEMI: Md,
  SLASH: nn,
  SLASH_SCHEME: br,
  SYM: Ko,
  TILDE: Rs,
  TLD: Zc,
  UNDERSCORE: qo,
  UTLD: Xc,
  UWORD: Yc,
  WORD: wn,
  WS: Jc
});
const yn = /[a-z]/, us = new RegExp("\\p{L}", "u"), hc = new RegExp("\\p{Emoji}", "u"), _n = /\d/, vc = /\s/, bh = "\r", bc = `
`, kC = "️", SC = "‍", gc = "￼";
let Ul = null, zl = null;
function CC(e = []) {
  const t = {};
  yi.groups = t;
  const i = new yi();
  Ul == null && (Ul = gh(bC)), zl == null && (zl = gh(gC)), ve(i, "'", Po), ve(i, "{", xs), ve(i, "}", $s), ve(i, "[", _o), ve(i, "]", wo), ve(i, "(", ko), ve(i, ")", So), ve(i, "<", Co), ve(i, ">", To), ve(i, "（", Ao), ve(i, "）", Eo), ve(i, "「", xo), ve(i, "」", $o), ve(i, "『", Oo), ve(i, "』", No), ve(i, "＜", Ro), ve(i, "＞", Io), ve(i, "&", Lo), ve(i, "*", Do), ve(i, "@", ta), ve(i, "`", Mo), ve(i, "^", Uo), ve(i, ":", za), ve(i, ",", Pd), ve(i, "$", zo), ve(i, ".", tn), ve(i, "=", jo), ve(i, "!", Dd), ve(i, "-", Ai), ve(i, "%", Os), ve(i, "|", Bo), ve(i, "+", Ho), ve(i, "#", Vo), ve(i, "?", Ns), ve(i, '"', Fd), ve(i, "/", nn), ve(i, ";", Md), ve(i, "~", Rs), ve(i, "_", qo), ve(i, "\\", Fo), ve(i, "・", Gb);
  const n = wt(i, _n, Id, {
    [qc]: !0
  });
  wt(n, _n, n);
  const a = wt(n, yn, qb, {
    [Es]: !0
  }), r = wt(n, us, Kb, {
    [vs]: !0
  }), s = wt(i, yn, wn, {
    [Kc]: !0
  });
  wt(s, _n, a), wt(s, yn, s), wt(a, _n, a), wt(a, yn, a);
  const d = wt(i, us, Yc, {
    [Gc]: !0
  });
  wt(d, yn), wt(d, _n, r), wt(d, us, d), wt(r, _n, r), wt(r, yn), wt(r, us, r);
  const c = ve(i, bc, Ld, {
    [pc]: !0
  }), m = ve(i, bh, Jc, {
    [pc]: !0
  }), v = wt(i, vc, Jc, {
    [pc]: !0
  });
  ve(i, gc, v), ve(m, bc, c), ve(m, gc, v), wt(m, vc, v), ve(v, bh), ve(v, bc), wt(v, vc, v), ve(v, gc, v);
  const y = wt(i, hc, Wb, {
    [Vb]: !0
  });
  ve(y, "#"), wt(y, hc, y), ve(y, kC, y);
  const g = ve(y, SC);
  ve(g, "#"), wt(g, hc, y);
  const k = [[yn, s], [_n, a]], T = [[yn, null], [us, d], [_n, r]];
  for (let C = 0; C < Ul.length; C++)
    Yn(i, Ul[C], Zc, wn, k);
  for (let C = 0; C < zl.length; C++)
    Yn(i, zl[C], Xc, Yc, T);
  Ua(Zc, {
    tld: !0,
    ascii: !0
  }, t), Ua(Xc, {
    utld: !0,
    alpha: !0
  }, t), Yn(i, "file", Kl, wn, k), Yn(i, "mailto", Kl, wn, k), Yn(i, "http", br, wn, k), Yn(i, "https", br, wn, k), Yn(i, "ftp", br, wn, k), Yn(i, "ftps", br, wn, k), Ua(Kl, {
    scheme: !0,
    ascii: !0
  }, t), Ua(br, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((C, $) => C[0] > $[0] ? 1 : -1);
  for (let C = 0; C < e.length; C++) {
    const $ = e[C][0], D = e[C][1] ? {
      [mC]: !0
    } : {
      [yC]: !0
    };
    $.indexOf("-") >= 0 ? D[Wc] = !0 : yn.test($) ? _n.test($) ? D[Es] = !0 : D[Kc] = !0 : D[qc] = !0, vh(i, $, $, D);
  }
  return vh(i, "localhost", Zs, {
    ascii: !0
  }), i.jd = new yi(Ko), {
    start: i,
    tokens: Object.assign({
      groups: t
    }, Yb)
  };
}
function Zb(e, t) {
  const i = TC(t.replace(/[A-Z]/g, (d) => d.toLowerCase())), n = i.length, a = [];
  let r = 0, s = 0;
  for (; s < n; ) {
    let d = e, c = null, m = 0, v = null, y = -1, g = -1;
    for (; s < n && (c = d.go(i[s])); )
      d = c, d.accepts() ? (y = 0, g = 0, v = d) : y >= 0 && (y += i[s].length, g++), m += i[s].length, r += i[s].length, s++;
    r -= y, s -= g, m -= y, a.push({
      t: v.t,
      // token type/name
      v: t.slice(r - m, r),
      // string value
      s: r - m,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function TC(e) {
  const t = [], i = e.length;
  let n = 0;
  for (; n < i; ) {
    let a = e.charCodeAt(n), r, s = a < 55296 || a > 56319 || n + 1 === i || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(s), n += s.length;
  }
  return t;
}
function Yn(e, t, i, n, a) {
  let r;
  const s = t.length;
  for (let d = 0; d < s - 1; d++) {
    const c = t[d];
    e.j[c] ? r = e.j[c] : (r = new yi(n), r.jr = a.slice(), e.j[c] = r), e = r;
  }
  return r = new yi(i), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function gh(e) {
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
const Xs = {
  defaultProtocol: "http",
  events: null,
  format: mh,
  formatHref: mh,
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
function Ud(e, t = null) {
  let i = Object.assign({}, Xs);
  e && (i = Object.assign(i, e instanceof Ud ? e.o : e));
  const n = i.ignoreTags, a = [];
  for (let r = 0; r < n.length; r++)
    a.push(n[r].toUpperCase());
  this.o = i, t && (this.defaultRender = t), this.ignoreTags = a;
}
Ud.prototype = {
  o: Xs,
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
    return a && (typeof a == "object" ? (a = i.t in a ? a[i.t] : Xs[e], typeof a == "function" && n && (a = a(t, i))) : typeof a == "function" && n && (a = a(t, i.t, i)), a);
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
function mh(e) {
  return e;
}
function Xb(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
Xb.prototype = {
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
  toObject(e = Xs.defaultProtocol) {
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
    const t = this, i = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", i, this), a = e.get("tagName", i, t), r = this.toFormattedString(e), s = {}, d = e.get("className", i, t), c = e.get("target", i, t), m = e.get("rel", i, t), v = e.getObj("attributes", i, t), y = e.getObj("events", i, t);
    return s.href = n, d && (s.class = d), c && (s.target = c), m && (s.rel = m), v && Object.assign(s, v), {
      tagName: a,
      attributes: s,
      content: r,
      eventListeners: y
    };
  }
};
function bu(e, t) {
  class i extends Xb {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const n in t)
    i.prototype[n] = t[n];
  return i.t = e, i;
}
const AC = bu("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), yh = bu("text"), EC = bu("nl"), jl = bu("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = Xs.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== Zs && e[1].t === za;
  }
}), Ci = (e) => new yi(e);
function xC({
  groups: e
}) {
  const t = e.domain.concat([Lo, Do, ta, Fo, Mo, Uo, zo, jo, Ai, Id, Os, Bo, Ho, Vo, nn, Ko, Rs, qo]), i = [Po, za, Pd, tn, Dd, Os, Ns, Fd, Md, Co, To, xs, $s, wo, _o, ko, So, Ao, Eo, xo, $o, Oo, No, Ro, Io], n = [Lo, Po, Do, Fo, Mo, Uo, zo, jo, Ai, xs, $s, Os, Bo, Ho, Vo, Ns, nn, Ko, Rs, qo], a = Ci(), r = ve(a, Rs);
  Ge(r, n, r), Ge(r, e.domain, r);
  const s = Ci(), d = Ci(), c = Ci();
  Ge(a, e.domain, s), Ge(a, e.scheme, d), Ge(a, e.slashscheme, c), Ge(s, n, r), Ge(s, e.domain, s);
  const m = ve(s, ta);
  ve(r, ta, m), ve(d, ta, m), ve(c, ta, m);
  const v = ve(r, tn);
  Ge(v, n, r), Ge(v, e.domain, r);
  const y = Ci();
  Ge(m, e.domain, y), Ge(y, e.domain, y);
  const g = ve(y, tn);
  Ge(g, e.domain, y);
  const k = Ci(AC);
  Ge(g, e.tld, k), Ge(g, e.utld, k), ve(m, Zs, k);
  const T = ve(y, Ai);
  ve(T, Ai, T), Ge(T, e.domain, y), Ge(k, e.domain, y), ve(k, tn, g), ve(k, Ai, T);
  const C = ve(s, Ai), $ = ve(s, tn);
  ve(C, Ai, C), Ge(C, e.domain, s), Ge($, n, r), Ge($, e.domain, s);
  const I = Ci(jl);
  Ge($, e.tld, I), Ge($, e.utld, I), Ge(I, e.domain, s), Ge(I, n, r), ve(I, tn, $), ve(I, Ai, C), ve(I, ta, m);
  const D = ve(I, za), P = Ci(jl);
  Ge(D, e.numeric, P);
  const N = Ci(jl), ce = Ci();
  Ge(N, t, N), Ge(N, i, ce), Ge(ce, t, N), Ge(ce, i, ce), ve(I, nn, N), ve(P, nn, N);
  const J = ve(d, za), x = ve(c, za), q = ve(x, nn), B = ve(q, nn);
  Ge(d, e.domain, s), ve(d, tn, $), ve(d, Ai, C), Ge(c, e.domain, s), ve(c, tn, $), ve(c, Ai, C), Ge(J, e.domain, N), ve(J, nn, N), ve(J, Ns, N), Ge(B, e.domain, N), Ge(B, t, N), ve(B, nn, N);
  const Y = [
    [xs, $s],
    // {}
    [_o, wo],
    // []
    [ko, So],
    // ()
    [Co, To],
    // <>
    [Ao, Eo],
    // （）
    [xo, $o],
    // 「」
    [Oo, No],
    // 『』
    [Ro, Io]
    // ＜＞
  ];
  for (let se = 0; se < Y.length; se++) {
    const [H, K] = Y[se], R = ve(N, H);
    ve(ce, H, R);
    const V = Ci(jl);
    Ge(R, t, V);
    const Q = Ci();
    Ge(R, i, Q), ve(R, K, N), Ge(V, t, V), Ge(V, i, Q), Ge(Q, t, V), Ge(Q, i, Q), ve(V, K, N), ve(Q, K, N);
  }
  return ve(a, Zs, I), ve(a, Ld, EC), {
    start: a,
    tokens: Yb
  };
}
function $C(e, t, i) {
  let n = i.length, a = 0, r = [], s = [];
  for (; a < n; ) {
    let d = e, c = null, m = null, v = 0, y = null, g = -1;
    for (; a < n && !(c = d.go(i[a].t)); )
      s.push(i[a++]);
    for (; a < n && (m = c || d.go(i[a].t)); )
      c = null, d = m, d.accepts() ? (g = 0, y = d) : g >= 0 && g++, a++, v++;
    if (g < 0)
      a -= v, a < n && (s.push(i[a]), a++);
    else {
      s.length > 0 && (r.push(mc(yh, t, s)), s = []), a -= g, v -= g;
      const k = y.t, T = i.slice(a - v, a);
      r.push(mc(k, t, T));
    }
  }
  return s.length > 0 && r.push(mc(yh, t, s)), r;
}
function mc(e, t, i) {
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
function OC() {
  Wt.scanner = CC(Wt.customSchemes);
  for (let e = 0; e < Wt.tokenQueue.length; e++)
    Wt.tokenQueue[e][1]({
      scanner: Wt.scanner
    });
  Wt.parser = xC(Wt.scanner.tokens);
  for (let e = 0; e < Wt.pluginQueue.length; e++)
    Wt.pluginQueue[e][1]({
      scanner: Wt.scanner,
      parser: Wt.parser
    });
  return Wt.initialized = !0, Wt;
}
function Jb(e) {
  return Wt.initialized || OC(), $C(Wt.parser.start, e, Zb(Wt.scanner.start, e));
}
Jb.scan = Zb;
function NC(e) {
  const t = new Ud({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, LC), i = Jb(e), n = [];
  for (const a of i)
    a.t === "nl" && t.get("nl2br") ? n.push(`<br>
`) : !a.isLink || !t.check(a) ? n.push(lo(a.toString())) : n.push(t.render(a));
  return n.join("");
}
function RC(e) {
  return e.replace(/"/g, "&quot;");
}
function IC(e) {
  const t = [];
  for (const i in e) {
    const n = e[i] + "";
    t.push(`${i}="${RC(n)}"`);
  }
  return t.join(" ");
}
function LC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${IC(t)}>${lo(i)}</${e}>`;
}
const PC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = NC(t.text));
}, DC = ["title"], FC = /* @__PURE__ */ Bt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Zt("NcAppSidebar:header:ref");
    return (i, n) => ge((p(), h("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      te(o(e.name), 1)
    ], 8, DC)), [
      [u(PC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), MC = ["aria-labelledby"], UC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, zC = ["id"], jC = {
  key: 2,
  class: "empty-content__description"
}, BC = {
  key: 3,
  class: "empty-content__action"
}, HC = /* @__PURE__ */ Bt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = fu();
    return (i, n) => (p(), h("div", {
      "aria-labelledby": u(t),
      class: "empty-content",
      role: "note"
    }, [
      i.$slots.icon ? (p(), h("div", UC, [
        He(i.$slots, "icon", {}, void 0, !0)
      ])) : E("", !0),
      e.name !== "" || i.$slots.name ? (p(), h("div", {
        key: 1,
        id: u(t),
        class: "empty-content__name"
      }, [
        He(i.$slots, "name", {}, () => [
          te(o(e.name), 1)
        ], !0)
      ], 8, zC)) : E("", !0),
      e.description !== "" || i.$slots.description ? (p(), h("p", jC, [
        He(i.$slots, "description", {}, () => [
          te(o(e.description), 1)
        ], !0)
      ])) : E("", !0),
      i.$slots.action ? (p(), h("div", BC, [
        He(i.$slots, "action", {}, void 0, !0)
      ])) : E("", !0)
    ], 8, MC));
  }
}), VC = /* @__PURE__ */ rt(HC, [["__scopeId", "data-v-8609a4c1"]]), qC = {
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
}, KC = ["aria-hidden", "aria-label"], GC = ["fill", "width", "height"], WC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, YC = { key: 0 };
function ZC(e, t, i, n, a, r) {
  return p(), h("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", WC, [
        i.title ? (p(), h("title", YC, o(i.title), 1)) : E("", !0)
      ])
    ], 8, GC))
  ], 16, KC);
}
const XC = /* @__PURE__ */ rt(qC, [["render", ZC]]), JC = {
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
}, QC = ["aria-hidden", "aria-label"], e2 = ["fill", "width", "height"], t2 = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, i2 = { key: 0 };
function n2(e, t, i, n, a, r) {
  return p(), h("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", t2, [
        i.title ? (p(), h("title", i2, o(i.title), 1)) : E("", !0)
      ])
    ], 8, e2))
  ], 16, QC);
}
const a2 = /* @__PURE__ */ rt(JC, [["render", n2]]), r2 = {
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
}, s2 = ["aria-hidden", "aria-label"], l2 = ["fill", "width", "height"], o2 = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, u2 = { key: 0 };
function c2(e, t, i, n, a, r) {
  return p(), h("span", ei(e.$attrs, {
    "aria-hidden": i.title ? null : "true",
    "aria-label": i.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (p(), h("svg", {
      fill: i.fillColor,
      class: "material-design-icon__svg",
      width: i.size,
      height: i.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", o2, [
        i.title ? (p(), h("title", u2, o(i.title), 1)) : E("", !0)
      ])
    ], 8, l2))
  ], 16, s2);
}
const d2 = /* @__PURE__ */ rt(r2, [["render", c2]]), f2 = ["aria-selected", "tabindex"], p2 = /* @__PURE__ */ Bt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Oy({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = mv(e, "selected"), i = /* @__PURE__ */ G(!1);
    function n() {
      t.value = !0, i.value = !1, requestAnimationFrame(() => {
        i.value = !0;
      });
    }
    return (a, r) => (p(), h("button", {
      class: ke(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: u(fa),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: n
    }, [
      l("span", {
        class: ke([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: i.value }]),
        onAnimationend: r[0] || (r[0] = (s) => i.value = !1)
      }, [
        l("span", {
          class: ke([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          fe(Vc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: me(() => [
              l("span", {
                class: ke([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: ke([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          fe(Vc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: me(() => [
              l("span", {
                class: ke([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: ke(a.$style.sidebarTabsButton__name)
      }, o(e.tab.name), 3)
    ], 10, f2));
  }
}), h2 = "_sidebarTabsButton_q3kBA", v2 = "_sidebarTabsButton_legacy_KQ4d1", b2 = "_sidebarTabsButton_selected_Pjayf", g2 = "_sidebarTabsButton_animatedHighlight_uvp-0", m2 = "_sidebarTabsButton__name_rlQsL", y2 = "_sidebarTabsButton__icon_QzZg4", _2 = "_sidebarTabsButton__iconLayer_ZkZan", w2 = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", k2 = "_sidebarTabsButton__icon_pop_IA0By", S2 = "_sidebarTabsButton__legacyIcon_QhcNW", C2 = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: h2,
  sidebarTabsButton_legacy: v2,
  sidebarTabsButton_selected: b2,
  sidebarTabsButton_animatedHighlight: g2,
  sidebarTabsButton__name: m2,
  sidebarTabsButton__icon: y2,
  sidebarTabsButton__iconLayer: _2,
  sidebarTabsButton__iconLayer_hidden: w2,
  sidebarTabsButton__icon_pop: k2,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: S2
}, T2 = {
  $style: C2
}, A2 = /* @__PURE__ */ rt(p2, [["__cssModules", T2]]), E2 = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: A2
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
      isLegacy34: fa,
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
      this.tabs.push(e), this.tabs.sort((t, i) => t.order === i.order ? t.name.localeCompare(i.name, [R_()]) : t.order - i.order), this.updateActive();
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
}, x2 = { class: "app-sidebar-tabs" };
function $2(e, t, i, n, a, r) {
  const s = Ye("NcAppSidebarTabsButton");
  return p(), h("div", x2, [
    r.hasMultipleTabs || r.showForSingleTab ? (p(), h("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: ke(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = ot(Ce((...d) => r.focusPreviousTab && r.focusPreviousTab(...d), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = ot(Ce((...d) => r.focusNextTab && r.focusNextTab(...d), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = ot(Ce((...d) => r.focusActiveTabContent && r.focusActiveTabContent(...d), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = ot(Ce((...d) => r.focusFirstTab && r.focusFirstTab(...d), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = ot(Ce((...d) => r.focusLastTab && r.focusLastTab(...d), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = ot(Ce((...d) => r.focusFirstTab && r.focusFirstTab(...d), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = ot(Ce((...d) => r.focusLastTab && r.focusLastTab(...d), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...d) => r.handleHighlight && r.handleHighlight(...d)),
      onPointerleave: t[8] || (t[8] = (...d) => r.hideHighlight && r.hideHighlight(...d)),
      onFocusin: t[9] || (t[9] = (...d) => r.handleHighlight && r.handleHighlight(...d)),
      onFocusout: t[10] || (t[10] = (...d) => r.onHighlightFocusOut && r.onHighlightFocusOut(...d))
    }, [
      a.highlightEnabled ? (p(), h("div", {
        key: 0,
        class: ke(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: fi(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : E("", !0),
      (p(!0), h(W, null, de(a.tabs, (d) => (p(), De(s, {
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
    l("div", {
      class: ke(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      He(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const O2 = /* @__PURE__ */ rt(E2, [["render", $2], ["__scopeId", "data-v-74190d2a"]]);
da(h0);
const N2 = {
  name: "NcAppSidebar",
  components: {
    NcActions: Rd,
    NcAppSidebarHeader: FC,
    NcAppSidebarTabs: O2,
    NcButton: ln,
    NcLoadingIcon: Hb,
    NcEmptyContent: VC,
    IconArrowRight: wb,
    IconClose: kb,
    IconDockRight: XC,
    IconStar: a2,
    IconStarOutline: d2
  },
  directives: {
    Focus: vC,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: hC
  },
  inject: {
    ncContentSelector: {
      from: _b,
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
    return Ei("NcAppSidebar:header:ref", e), {
      uid: fu(),
      isMobile: o0(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: $t("Change name"),
      closeTranslated: $t("Close sidebar"),
      favoriteTranslated: $t("Favorite"),
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
    isSlotPopulated: Nd,
    t: $t,
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
      this.focusTrap || (this.focusTrap = Cd([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: qs(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && Va.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, R2 = ["aria-labelledby"], I2 = { class: "app-sidebar-header__info" }, L2 = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, P2 = { class: "app-sidebar-header__name-container" }, D2 = { class: "app-sidebar-header__mainname-container" }, F2 = ["placeholder", "value"], M2 = ["title"], U2 = {
  key: 2,
  class: "app-sidebar-header__description"
};
function z2(e, t, i, n, a, r) {
  const s = Ye("IconDockRight"), d = Ye("NcButton"), c = Ye("NcLoadingIcon"), m = Ye("IconStar"), v = Ye("IconStarOutline"), y = Ye("NcAppSidebarHeader"), g = Ye("IconArrowRight"), k = Ye("NcActions"), T = Ye("IconClose"), C = Ye("NcAppSidebarTabs"), $ = Ye("NcEmptyContent"), I = Ff("focus"), D = Ff("click-outside");
  return p(), De(g1, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: me(() => [
      ge(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${n.uid}__header`,
        onKeydown: t[6] || (t[6] = ot((...P) => r.onKeydownEsc && r.onKeydownEsc(...P), ["esc"]))
      }, [
        r.ncContentSelector && !i.open && !i.noToggle ? (p(), De(pd, {
          key: 0,
          to: r.ncContentSelector
        }, [
          fe(d, ei({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
            onClick: t[0] || (t[0] = (P) => e.$emit("update:open", !0))
          }), {
            icon: me(() => [
              He(e.$slots, "toggle-icon", {}, () => [
                fe(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : E("", !0),
        l("header", {
          class: ke(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || i.background,
            "app-sidebar-header--compact": i.compact
          }])
        }, [
          i.empty ? (p(), De(y, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: i.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : He(e.$slots, "info", { key: 0 }, () => [
            l("div", I2, [
              r.isSlotPopulated(e.$slots.header?.()) || i.background ? (p(), h("div", {
                key: 0,
                class: ke(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: fi({
                  backgroundImage: `url(${i.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...P) => r.onFigureClick && r.onFigureClick(...P)),
                onKeydown: t[2] || (t[2] = ot((...P) => r.onFigureClick && r.onFigureClick(...P), ["enter"]))
              }, [
                He(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : E("", !0),
              l("div", {
                class: ke(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": i.nameEditable && !i.subname,
                  "app-sidebar-header__desc--with-subname--editable": i.nameEditable && i.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (p(), h("div", L2, [
                  He(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (p(), De(d, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ce(r.toggleStarred, ["prevent"])
                    }, {
                      icon: me(() => [
                        i.starLoading ? (p(), De(c, { key: 0 })) : a.isStarred ? (p(), De(m, {
                          key: 1,
                          size: 20
                        })) : (p(), De(v, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : E("", !0)
                  ], !0)
                ])) : E("", !0),
                l("div", P2, [
                  l("div", D2, [
                    ge(fe(y, {
                      class: "app-sidebar-header__mainname",
                      name: i.name,
                      linkify: i.linkifyName,
                      title: i.title,
                      tabindex: i.nameEditable ? 0 : -1,
                      onClick: Ce(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Ha, !i.nameEditable]
                    ]),
                    i.nameEditable ? ge((p(), h("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ce((...P) => r.onSubmitName && r.onSubmitName(...P), ["prevent"]))
                    }, [
                      ge(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: i.namePlaceholder,
                        value: i.name,
                        onKeydown: t[3] || (t[3] = ot(Ce((...P) => r.onDismissEditing && r.onDismissEditing(...P), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...P) => r.onNameInput && r.onNameInput(...P))
                      }, null, 40, F2), [
                        [I]
                      ]),
                      fe(d, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: me(() => [
                          fe(g, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [D, () => r.onSubmitName()]
                    ]) : E("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (p(), De(k, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: i.forceMenu
                    }, {
                      default: me(() => [
                        He(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : E("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (p(), h("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    He(e.$slots, "subname", {}, () => [
                      te(o(i.subname), 1)
                    ], !0)
                  ], 8, M2)) : E("", !0)
                ])
              ], 2)
            ])
          ], !0),
          fe(d, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ce(r.closeSidebar, ["prevent"])
          }, {
            icon: me(() => [
              fe(T, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (p(), h("div", U2, [
            He(e.$slots, "description", {}, void 0, !0)
          ])) : E("", !0)
        ], 2),
        ge(fe(C, {
          ref: "tabs",
          active: i.active,
          forceTabs: i.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: me(() => [
            He(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Ha, !i.loading]
        ]),
        i.loading ? (p(), De($, { key: 1 }, {
          icon: me(() => [
            fe(c, { size: 64 })
          ]),
          _: 1
        })) : E("", !0)
      ], 40, R2), [
        [Ha, i.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const j2 = /* @__PURE__ */ rt(N2, [["render", z2], ["__scopeId", "data-v-c2c6820b"]]), B2 = {
  name: "NcActionLink",
  mixins: [Cb],
  inject: {
    isInSemanticMenu: {
      from: Td,
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
}, H2 = ["role"], V2 = ["download", "href", "aria-label", "target", "title", "role"], q2 = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, K2 = { class: "action-link__name" }, G2 = ["textContent"], W2 = ["textContent"], Y2 = {
  key: 2,
  class: "action-link__text"
};
function Z2(e, t, i, n, a, r) {
  return p(), h("li", {
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
      He(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: ke(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: fi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (p(), h("span", q2, [
        l("strong", K2, o(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: o(e.text)
        }, null, 8, G2)
      ])) : e.isLongText ? (p(), h("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: o(e.text)
      }, null, 8, W2)) : (p(), h("span", Y2, o(e.text), 1)),
      E("", !0)
    ], 8, V2)
  ], 8, H2);
}
const yc = /* @__PURE__ */ rt(B2, [["render", Z2], ["__scopeId", "data-v-32f01b7a"]]);
da(y0);
const X2 = `<!--
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
`, J2 = `<!--
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
`, Q2 = { class: "vue-skip-actions__container" }, eT = { class: "vue-skip-actions__headline" }, tT = { class: "vue-skip-actions__buttons" }, iT = /* @__PURE__ */ Bt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    Ei(yb, d), Ei(_b, "#content-vue"), Ei("appName", j(() => t.appName));
    const i = rl(), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(), r = j(() => a.value === "navigation" ? J2 : X2);
    cv(() => {
      const c = document.getElementById("skip-actions");
      c && (c.innerHTML = "", c.classList.add("vue-skip-actions"));
    });
    function s() {
      On("toggle-navigation", { open: !0 }), xt(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function d(c) {
      n.value = c, a.value || (a.value = "navigation");
    }
    return (c, m) => (p(), h("div", {
      id: "content-vue",
      class: ke(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": u(fa) }]])
    }, [
      (p(), De(pd, { to: "#skip-actions" }, [
        l("div", Q2, [
          l("div", eT, o(u($t)("Keyboard navigation help")), 1),
          l("div", tT, [
            ge(fe(ln, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ce(s, ["prevent"]),
              onFocusin: m[0] || (m[0] = (v) => a.value = "navigation"),
              onMouseover: m[1] || (m[1] = (v) => a.value = "navigation")
            }, {
              default: me(() => [
                te(o(u($t)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Ha, n.value]
            ]),
            fe(ln, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: m[2] || (m[2] = (v) => a.value = "content"),
              onMouseover: m[3] || (m[3] = (v) => a.value = "content")
            }, {
              default: me(() => [
                te(o(u($t)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          ge(fe(du, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Ha, !u(i)]
          ])
        ])
      ])),
      He(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), nT = /* @__PURE__ */ rt(iT, [["__scopeId", "data-v-d13dcb98"]]), aT = { class: "library-shelf-tree-node" }, rT = ["aria-expanded", "aria-label"], sT = ["href"], lT = { class: "library-shelf-summary-title" }, oT = { dir: "auto" }, uT = { class: "library-muted" }, cT = { dir: "auto" }, dT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, fT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, pT = {
  key: 3,
  class: "library-shelf-tree"
}, hT = ["disabled"], vT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(!1), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G(!1), s = /* @__PURE__ */ G([]), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(0);
    async function m() {
      i.value = !i.value, !(!i.value || n.value || a.value) && await v();
    }
    async function v() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const y = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(c.value) }), g = await fetch(`${t.childrenUrl}?${y}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!g.ok) throw new Error("Shelf children request failed");
          const k = await g.json(), T = Array.isArray(k?.nodes) ? k.nodes : [];
          s.value.push(...T), d.value = k?.hasMore === !0, c.value = Number.isInteger(k?.nextOffset) ? k.nextOffset : s.value.length, n.value = !d.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (y, g) => {
      const k = Ye("ShelfTreeNode", !0);
      return p(), h("li", aT, [
        e.node.hasChildren ? (p(), h("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? u(w)("library", "Collapse {folder}", { folder: e.node.label }) : u(w)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: m
        }, o(i.value ? "−" : "+"), 9, rT)) : E("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", lT, [
            l("strong", null, [
              l("bdi", oT, o(e.node.label), 1)
            ]),
            l("span", null, o(u(Ti)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", uT, [
            l("bdi", cT, o(e.node.path), 1)
          ])
        ], 8, sT),
        a.value ? (p(), h("small", dT, o(u(w)("library", "Loading folders…")), 1)) : r.value ? (p(), h("small", fT, o(u(w)("library", "Could not load folders.")), 1)) : E("", !0),
        i.value && s.value.length ? (p(), h("ul", pT, [
          (p(!0), h(W, null, de(s.value, (T) => (p(), De(k, {
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
        }, o(u(w)("library", "Load more folders")), 9, hT)) : E("", !0)
      ]);
    };
  }
}, bT = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, gT = ["src"], mT = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, yT = {
  __name: "CatalogueCover",
  props: { src: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G(typeof IntersectionObserver > "u"), a = /* @__PURE__ */ G("loading");
    let r;
    return qe(() => t.src, () => {
      a.value = "loading";
    }), Et(() => {
      n.value || (r = new IntersectionObserver((s) => {
        s.some((d) => d.isIntersecting) && (n.value = !0, r.disconnect());
      }, { rootMargin: "240px" }), r.observe(i.value));
    }), wi(() => r?.disconnect()), (s, d) => (p(), h("span", {
      ref_key: "frame",
      ref: i,
      class: ke(["library-cover-frame", { "library-cover-frame--error": a.value === "error" }])
    }, [
      a.value === "loading" ? (p(), h("span", bT)) : E("", !0),
      (p(), h("img", {
        key: e.src,
        class: ke(["library-cover-image", { "library-cover-image--loaded": a.value === "loaded" }]),
        src: n.value ? e.src : void 0,
        alt: "",
        loading: "lazy",
        decoding: "async",
        onLoad: d[0] || (d[0] = (c) => a.value = "loaded"),
        onError: d[1] || (d[1] = (c) => a.value = "error")
      }, null, 42, gT)),
      a.value === "error" ? (p(), h("span", mT, o(u(w)("library", "Cover unavailable")), 1)) : E("", !0)
    ], 2));
  }
};
async function _h(e = "", t = "", i = null) {
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
const Ia = /* @__PURE__ */ new Map();
function na(e = "", t = "", i = null) {
  if (i !== null)
    return Ia.clear(), _h(e, t, i).finally(() => Ia.clear());
  if (Ia.has(e)) return Ia.get(e);
  const n = _h(e, t).finally(() => {
    Ia.get(e) === n && Ia.delete(e);
  });
  return Ia.set(e, n), n;
}
const _T = ["aria-busy"], wT = { class: "library-list-inline-actions" }, kT = ["disabled", "aria-label"], ST = ["value"], CT = ["disabled"], TT = ["href"], AT = ["href"], ET = {
  key: 0,
  role: "status"
}, xT = {
  key: 1,
  role: "alert"
}, $T = ["disabled"], OT = {
  key: 3,
  role: "status"
}, Qc = {
  __name: "AddToList",
  props: { preferredListId: { type: Number, default: null }, itemIds: { type: Array, required: !0 }, requestToken: { type: String, default: "" }, listsUrl: { type: String, required: !0 } },
  emits: ["added"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(""), s = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(""), c = /* @__PURE__ */ G("");
    async function m() {
      s.value = !0, d.value = "";
      try {
        const y = await na(i.itemIds.length === 1 ? `?itemId=${i.itemIds[0]}` : "");
        a.value = y.lists;
        const g = Number(r.value) || i.preferredListId || Number(new URLSearchParams(window.location.search).get("addToList"));
        r.value = String(a.value.find((k) => k.id === g)?.id || a.value[0]?.id || "");
      } catch (y) {
        d.value = y.message;
      } finally {
        s.value = !1;
      }
    }
    async function v() {
      const y = a.value.find((k) => k.id === Number(r.value));
      if (s.value || !y || i.itemIds.length === 0) return;
      const g = [...i.itemIds];
      s.value = !0, d.value = "", c.value = "";
      try {
        const k = await na(`/${y.id}/actions`, i.requestToken, { action: "add", revision: y.revision, itemIds: g });
        y.revision = k.revision, c.value = w("library", "Added: {added}. Already in list: {present}. Unavailable: {skipped}.", { added: k.added, present: k.alreadyPresent, skipped: k.skipped }), g.length === 1 && k.skipped === 0 && (y.containsItem = !0), n("added", k);
      } catch (k) {
        d.value = k.message;
      } finally {
        s.value = !1;
      }
    }
    return qe(() => i.itemIds.join(","), () => {
      c.value = "";
    }), Et(m), (y, g) => (p(), h("div", {
      class: "library-add-to-list",
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("div", wT, [
        a.value.length ? ge((p(), h("select", {
          key: 0,
          "onUpdate:modelValue": g[0] || (g[0] = (k) => r.value = k),
          disabled: s.value,
          "aria-label": u(w)("library", "Choose a list"),
          onChange: g[1] || (g[1] = (k) => c.value = "")
        }, [
          (p(!0), h(W, null, de(a.value, (k) => (p(), h("option", {
            key: k.id,
            value: String(k.id)
          }, o(k.name), 9, ST))), 128))
        ], 40, kT)), [
          [it, r.value]
        ]) : E("", !0),
        a.value.length ? (p(), h("button", {
          key: 1,
          type: "button",
          class: "button primary",
          disabled: s.value || e.itemIds.length === 0 || !r.value,
          onClick: v
        }, o(u(w)("library", "Add to list")), 9, CT)) : E("", !0),
        !s.value && !a.value.length && !d.value ? (p(), h("a", {
          key: 2,
          href: `${e.listsUrl}&new=1`
        }, o(u(w)("library", "Create a new list")), 9, TT)) : E("", !0),
        c.value && r.value ? (p(), h("a", {
          key: 3,
          href: `${e.listsUrl}&listId=${r.value}`
        }, o(u(w)("library", "Back to list")), 9, AT)) : E("", !0)
      ]),
      s.value ? (p(), h("p", ET, o(u(w)("library", "Loading or saving…")), 1)) : E("", !0),
      d.value ? (p(), h("p", xT, o(d.value), 1)) : E("", !0),
      d.value ? (p(), h("button", {
        key: 2,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: m
      }, o(u(w)("library", "Reload list")), 9, $T)) : E("", !0),
      c.value ? (p(), h("p", OT, o(c.value), 1)) : E("", !0)
    ], 8, _T));
  }
}, NT = ["onKeydown"], RT = ["aria-label", "aria-describedby"], IT = ["id"], Xe = {
  __name: "LabelHelp",
  props: { text: { type: String, required: !0 } },
  setup(e) {
    const t = by(), i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G(null), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G({});
    let s;
    const d = `${t}-label`;
    Et(() => {
      const $ = i.value?.closest("label"), I = $?.querySelector("input, select, textarea"), D = i.value?.closest("h1, h2, h3, h4");
      $ && I && !$.htmlFor && (I.id ||= `${t}-control`, $.htmlFor = I.id);
      for (const P of [I, D])
        P && !P.hasAttribute("aria-label") && !P.hasAttribute("aria-labelledby") && P.setAttribute("aria-labelledby", d);
    });
    async function c() {
      clearTimeout(s), a.value = !0, await xt(), m();
    }
    function m() {
      if (!i.value || !n.value) return;
      const $ = i.value.getBoundingClientRect(), I = n.value.offsetHeight;
      r.value = { left: `${Math.max(8, Math.min($.left, window.innerWidth - 336))}px`, top: `${Math.max(8, $.bottom + I + 12 < window.innerHeight ? $.bottom + 8 : $.top - I - 8)}px` };
    }
    function v() {
      clearTimeout(s);
    }
    function y() {
      clearTimeout(s), a.value = !1;
    }
    function g() {
      s = setTimeout(() => {
        i.value?.contains(document.activeElement) || y();
      }, 150);
    }
    function k($) {
      !i.value?.contains($.target) && !n.value?.contains($.target) && y();
    }
    function T($) {
      $.key === "Escape" && y();
    }
    function C($) {
      a.value && (!($.target instanceof Node) || !n.value?.contains($.target)) && m();
    }
    return document.addEventListener("keydown", T), document.addEventListener("pointerdown", k), window.addEventListener("scroll", C, !0), wi(() => {
      clearTimeout(s), document.removeEventListener("pointerdown", k), window.removeEventListener("scroll", C, !0), document.removeEventListener("keydown", T);
    }), ($, I) => (p(), h("span", {
      ref_key: "anchor",
      ref: i,
      class: "library-label-help",
      onPointerenter: I[0] || (I[0] = (D) => D.pointerType !== "touch" && c()),
      onPointerleave: g,
      onKeydown: ot(Ce(y, ["stop", "prevent"]), ["esc"])
    }, [
      l("span", { id: d }, [
        He($.$slots, "default")
      ]),
      l("button", {
        type: "button",
        class: "library-label-help-button",
        "aria-label": u(w)("library", "Help"),
        "aria-describedby": a.value ? u(t) : void 0,
        onFocus: c,
        onBlur: g,
        onClick: Ce(c, ["stop", "prevent"])
      }, "?", 40, RT),
      (p(), De(pd, { to: "body" }, [
        a.value ? (p(), h("span", {
          key: 0,
          id: u(t),
          ref_key: "popup",
          ref: n,
          class: "library-label-help-popup",
          role: "tooltip",
          style: fi(r.value),
          onPointerenter: v,
          onPointerleave: g
        }, o(e.text), 45, IT)) : E("", !0)
      ]))
    ], 40, NT));
  }
}, LT = ["aria-label", "aria-busy"], PT = { class: "library-lists-heading" }, DT = ["href"], FT = ["disabled"], MT = {
  key: 0,
  role: "alert"
}, UT = ["disabled"], zT = {
  key: 2,
  role: "status"
}, jT = {
  key: 3,
  role: "status"
}, BT = ["disabled"], HT = ["disabled"], VT = { class: "library-list-actions" }, qT = ["disabled"], KT = ["disabled"], GT = {
  key: 0,
  class: "library-list-description",
  dir: "auto"
}, WT = {
  key: 1,
  class: "library-list-actions"
}, YT = ["href"], ZT = ["disabled"], XT = ["disabled"], JT = ["aria-label"], QT = ["disabled"], eA = ["disabled"], tA = {
  key: 3,
  class: "library-lists-empty"
}, iA = ["start"], nA = ["id", "onDrop"], aA = { class: "library-list-entry-heading" }, rA = ["draggable", "title", "onDragstart"], sA = ["src"], lA = { class: "library-list-book" }, oA = { key: 0 }, uA = ["href"], cA = { key: 1 }, dA = {
  key: 2,
  dir: "auto"
}, fA = { key: 3 }, pA = ["href"], hA = {
  key: 0,
  class: "library-list-note",
  dir: "auto"
}, vA = ["onSubmit"], bA = ["disabled"], gA = { class: "library-list-actions" }, mA = ["disabled"], yA = ["disabled"], _A = {
  key: 2,
  class: "library-list-actions"
}, wA = ["disabled", "onClick"], kA = ["disabled", "onClick"], SA = ["disabled", "onClick"], CA = ["disabled", "onClick"], TA = {
  key: 3,
  class: "library-list-confirm"
}, AA = ["disabled", "onClick"], EA = ["disabled"], xA = ["aria-label"], $A = ["disabled"], OA = ["disabled"], NA = {
  key: 1,
  class: "library-lists-empty"
}, RA = { class: "library-list-cards" }, IA = ["href"], LA = { dir: "auto" }, PA = {
  key: 0,
  dir: "auto"
}, DA = {
  __name: "PersonalLists",
  props: { requestToken: { type: String, default: "" }, catalogueUrl: { type: String, required: !0 }, listsUrl: { type: String, required: !0 } },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(null), s = /* @__PURE__ */ G(!1), d = /* @__PURE__ */ G(""), c = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(!1), v = /* @__PURE__ */ Mt({ name: "", description: "" }), y = /* @__PURE__ */ G(null), g = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(!1), T = /* @__PURE__ */ G(null), C = /* @__PURE__ */ G(null), $ = /* @__PURE__ */ G(null), I = /* @__PURE__ */ G(Number(new URLSearchParams(window.location.search).get("listId")) || null), D = Number(new URLSearchParams(window.location.search).get("addItem")) || null, P = j(() => !s.value && y.value === null);
    async function N(H = 1, K = m.value) {
      s.value = !0, d.value = "";
      try {
        I.value ? r.value = await na(`/${I.value}?page=${H}`) : a.value = (await na()).lists, K || (y.value = null, m.value = !1);
      } catch (R) {
        d.value = R.message;
      } finally {
        s.value = !1;
      }
    }
    function ce() {
      v.name = r.value?.list.name || "", v.description = r.value?.list.description || "", m.value = !0, k.value = !1, d.value = "";
    }
    async function J() {
      s.value = !0, d.value = "", c.value = "";
      try {
        if (r.value)
          await na(`/${r.value.list.id}/actions`, i.requestToken, { action: "update", revision: r.value.list.revision, ...v });
        else {
          I.value = (await na("", i.requestToken, v)).list.id;
          const H = new URL(window.location.href);
          H.searchParams.set("listId", I.value), window.history.replaceState({}, "", H);
        }
        m.value = !1, await N(1, !0), n("changed"), c.value = w("library", "List saved."), await xt(), $.value?.focus();
      } catch (H) {
        d.value = H.message;
      } finally {
        s.value = !1;
      }
    }
    async function x(H, K) {
      s.value = !0, d.value = "", c.value = "";
      try {
        const R = await na(`/${r.value.list.id}/actions`, i.requestToken, { ...H, revision: r.value.list.revision });
        if (H.action === "delete") {
          r.value = null, I.value = null, k.value = !1;
          const V = new URL(window.location.href);
          V.searchParams.delete("listId"), window.history.replaceState({}, "", V);
        }
        if (y.value = null, T.value = null, H.action === "note") {
          const V = r.value.entries.find((Q) => Q.id === H.entryId);
          V && (V.note = H.note.trim()), r.value.list.revision = R.revision;
        } else await N(r.value?.page || 1);
        H.action === "delete" && n("changed"), c.value = K, await xt(), H.action === "move" ? document.getElementById(`library-list-entry-${H.entryId}`)?.focus() : $.value?.focus();
      } catch (R) {
        d.value = R.message;
      } finally {
        s.value = !1;
      }
    }
    function q(H) {
      y.value = H.id, g.value = H.note, T.value = null;
    }
    function B(H, K) {
      return x({ action: "move", entryId: H.id, direction: K }, w("library", "Reading order saved."));
    }
    function Y(H, K) {
      C.value = K.id, H.dataTransfer.setData("text/plain", String(K.id));
    }
    function se(H) {
      if (C.value === null || !P.value) return;
      const K = C.value;
      return C.value = null, x({ action: "move", entryId: K, beforeId: H }, w("library", "Reading order saved."));
    }
    return Et(async () => {
      await N(), !I.value && new URLSearchParams(window.location.search).get("new") === "1" && ce();
    }), (H, K) => (p(), h("section", {
      class: "library-personal-lists",
      "aria-label": u(w)("library", "Personal lists"),
      "aria-busy": s.value ? "true" : "false"
    }, [
      l("header", PT, [
        l("div", null, [
          I.value ? (p(), h("a", {
            key: 0,
            href: e.listsUrl
          }, "← " + o(u(w)("library", "All lists")), 9, DT)) : E("", !0),
          l("h1", {
            ref_key: "heading",
            ref: $,
            tabindex: "-1"
          }, [
            fe(Xe, {
              text: u(w)("library", "Private reading lists, in your own order, with your own notes.")
            }, {
              default: me(() => [
                te(o(r.value?.list.name || u(w)("library", "Lists")), 1)
              ]),
              _: 1
            }, 8, ["text"])
          ], 512)
        ]),
        !r.value && !I.value ? (p(), h("button", {
          key: 0,
          type: "button",
          class: "button primary",
          disabled: s.value || m.value,
          onClick: ce
        }, o(u(w)("library", "New list")), 9, FT)) : E("", !0)
      ]),
      d.value ? (p(), h("p", MT, o(d.value), 1)) : E("", !0),
      d.value ? (p(), h("button", {
        key: 1,
        type: "button",
        class: "button secondary",
        disabled: s.value,
        onClick: K[0] || (K[0] = (R) => N(r.value?.page || 1, !0))
      }, o(u(w)("library", "Reload list")), 9, UT)) : E("", !0),
      c.value ? (p(), h("p", zT, o(c.value), 1)) : E("", !0),
      s.value ? (p(), h("p", jT, o(u(w)("library", "Loading or saving…")), 1)) : E("", !0),
      m.value ? (p(), h("form", {
        key: 4,
        class: "library-list-editor",
        onSubmit: Ce(J, ["prevent"])
      }, [
        l("label", null, [
          te(o(u(w)("library", "List name")), 1),
          ge(l("input", {
            "onUpdate:modelValue": K[1] || (K[1] = (R) => v.name = R),
            required: "",
            maxlength: "120",
            disabled: s.value
          }, null, 8, BT), [
            [We, v.name]
          ])
        ]),
        l("label", null, [
          te(o(u(w)("library", "Description / list note")), 1),
          ge(l("textarea", {
            "onUpdate:modelValue": K[2] || (K[2] = (R) => v.description = R),
            rows: "3",
            maxlength: "10000",
            disabled: s.value
          }, null, 8, HT), [
            [We, v.description]
          ])
        ]),
        l("div", VT, [
          l("button", {
            type: "submit",
            class: "button primary",
            disabled: s.value || !v.name.trim()
          }, o(u(w)("library", "Save list")), 9, qT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: s.value,
            onClick: K[3] || (K[3] = (R) => m.value = !1)
          }, o(u(w)("library", "Cancel")), 9, KT)
        ])
      ], 32)) : E("", !0),
      r.value ? (p(), h(W, { key: 5 }, [
        r.value.list.description && !m.value ? (p(), h("p", GT, o(r.value.list.description), 1)) : E("", !0),
        m.value ? E("", !0) : (p(), h("div", WT, [
          l("a", {
            class: "button primary",
            href: `${e.catalogueUrl}?addToList=${r.value.list.id}`
          }, o(u(w)("library", "Add books from catalogue")), 9, YT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: ce
          }, o(u(w)("library", "Edit list")), 9, ZT),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value,
            onClick: K[4] || (K[4] = (R) => k.value = !k.value)
          }, o(u(w)("library", "Delete list")), 9, XT)
        ])),
        k.value ? (p(), h("div", {
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
            onClick: K[5] || (K[5] = (R) => x({ action: "delete" }, u(w)("library", "List deleted.")))
          }, o(u(w)("library", "Delete list and notes")), 9, QT),
          l("button", {
            class: "button secondary",
            type: "button",
            disabled: s.value,
            onClick: K[6] || (K[6] = (R) => k.value = !1)
          }, o(u(w)("library", "Cancel")), 9, eA)
        ], 8, JT)) : E("", !0),
        r.value.total === 0 && !s.value ? (p(), h("p", tA, o(u(w)("library", "This list is empty. Select books in the catalogue and choose Add to list.")), 1)) : E("", !0),
        l("ol", {
          class: "library-list-entries",
          start: (r.value.page - 1) * 25 + 1
        }, [
          (p(!0), h(W, null, de(r.value.entries, (R) => (p(), h("li", {
            id: `library-list-entry-${R.id}`,
            key: R.id,
            class: "library-list-entry",
            tabindex: "-1",
            onDragover: K[11] || (K[11] = Ce(() => {
            }, ["prevent"])),
            onDrop: Ce((V) => se(R.id), ["prevent"])
          }, [
            l("div", aA, [
              l("span", {
                class: "library-list-drag",
                draggable: P.value,
                title: u(w)("library", "Drag to reorder, or use Move up and Move down"),
                "aria-hidden": "true",
                onDragstart: (V) => Y(V, R),
                onDragend: K[7] || (K[7] = (V) => C.value = null)
              }, "⠿", 40, rA),
              R.book ? (p(), h("img", {
                key: 0,
                src: R.book.coverUrl,
                alt: "",
                width: "48",
                height: "64",
                loading: "lazy"
              }, null, 8, sA)) : E("", !0),
              l("div", lA, [
                R.book ? (p(), h("h2", oA, [
                  l("a", {
                    href: R.book.detailsUrl,
                    dir: "auto"
                  }, o(R.book.title), 9, uA)
                ])) : (p(), h("h2", cA, o(u(w)("library", "Unavailable book")), 1)),
                R.book?.creators ? (p(), h("p", dA, o(R.book.creators), 1)) : E("", !0),
                R.book ? E("", !0) : (p(), h("p", fA, o(u(w)("library", "The file is missing or access is unavailable. Your note and place in the list are kept.")), 1))
              ]),
              R.book ? (p(), h("a", {
                key: 1,
                class: "button secondary",
                href: R.book.openUrl
              }, o(u(w)("library", "Open")), 9, pA)) : E("", !0)
            ]),
            R.note && y.value !== R.id ? (p(), h("p", hA, o(R.note), 1)) : E("", !0),
            y.value === R.id ? (p(), h("form", {
              key: 1,
              class: "library-list-editor",
              onSubmit: Ce((V) => x({ action: "note", entryId: R.id, note: g.value }, u(w)("library", "Note saved.")), ["prevent"])
            }, [
              l("label", null, [
                te(o(u(w)("library", "Your note for this book in this list")), 1),
                ge(l("textarea", {
                  "onUpdate:modelValue": K[8] || (K[8] = (V) => g.value = V),
                  maxlength: "10000",
                  rows: "3",
                  disabled: s.value
                }, null, 8, bA), [
                  [We, g.value]
                ])
              ]),
              l("div", gA, [
                l("button", {
                  type: "submit",
                  class: "button primary",
                  disabled: s.value
                }, o(u(w)("library", "Save note")), 9, mA),
                l("button", {
                  type: "button",
                  class: "button secondary",
                  disabled: s.value,
                  onClick: K[9] || (K[9] = (V) => y.value = null)
                }, o(u(w)("library", "Cancel")), 9, yA)
              ])
            ], 40, vA)) : (p(), h("div", _A, [
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (V) => q(R)
              }, o(R.note ? u(w)("library", "Edit note") : u(w)("library", "Add note")), 9, wA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || R.number === 1,
                onClick: (V) => B(R, "up")
              }, o(u(w)("library", "Move up")), 9, kA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value || R.number === r.value.total,
                onClick: (V) => B(R, "down")
              }, o(u(w)("library", "Move down")), 9, SA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: !P.value,
                onClick: (V) => T.value = R.id
              }, o(u(w)("library", "Remove from list")), 9, CA)
            ])),
            T.value === R.id ? (p(), h("div", TA, [
              l("p", null, o(u(w)("library", "Remove this entry and its note? The book stays in your library.")), 1),
              l("button", {
                type: "button",
                class: "button",
                disabled: !P.value,
                onClick: (V) => x({ action: "remove", entryId: R.id }, u(w)("library", "Book removed from list."))
              }, o(u(w)("library", "Remove entry and note")), 9, AA),
              l("button", {
                type: "button",
                class: "button secondary",
                disabled: s.value,
                onClick: K[10] || (K[10] = (V) => T.value = null)
              }, o(u(w)("library", "Cancel")), 9, EA)
            ])) : E("", !0)
          ], 40, nA))), 128))
        ], 8, iA),
        r.value.pages > 1 ? (p(), h("nav", {
          key: 4,
          class: "library-list-actions",
          "aria-label": u(w)("library", "List pages")
        }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === 1,
            onClick: K[12] || (K[12] = (R) => N(r.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, $A),
          l("span", null, o(u(w)("library", "Page {page} of {pages}", { page: r.value.page, pages: r.value.pages })), 1),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: !P.value || r.value.page === r.value.pages,
            onClick: K[13] || (K[13] = (R) => N(r.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, OA)
        ], 8, xA)) : E("", !0)
      ], 64)) : I.value ? E("", !0) : (p(), h(W, { key: 6 }, [
        u(D) ? (p(), De(Qc, {
          key: 0,
          "item-ids": [u(D)],
          "request-token": e.requestToken,
          "lists-url": e.listsUrl,
          onAdded: K[14] || (K[14] = (R) => N())
        }, null, 8, ["item-ids", "request-token", "lists-url"])) : E("", !0),
        !a.value.length && !s.value && !m.value ? (p(), h("p", NA, o(u(w)("library", "Create your first list for a reading plan, a project or books to return to.")), 1)) : E("", !0),
        l("ul", RA, [
          (p(!0), h(W, null, de(a.value, (R) => (p(), h("li", {
            key: R.id
          }, [
            l("a", {
              href: `${e.listsUrl}&listId=${R.id}`
            }, [
              l("h2", LA, o(R.name), 1),
              l("p", null, o(u(w)("library", "Books: {count}", { count: R.count })), 1),
              R.description ? (p(), h("p", PA, o(R.description), 1)) : E("", !0)
            ], 8, IA)
          ]))), 128))
        ])
      ], 64))
    ], 8, LT));
  }
};
function Qb(e, t, i) {
  const n = /* @__PURE__ */ G({}), a = /* @__PURE__ */ G("idle");
  let r, s, d = 0;
  return qe([e, t], () => {
    clearTimeout(r), s?.abort();
    const c = ++d;
    n.value = {}, a.value = t.value ? "pending" : "disabled", !(!t.value || !e.value.length) && (r = setTimeout(async () => {
      s = new AbortController();
      try {
        const m = await fetch(Ki("/apps/library/api/duplicate-suggestions/lookup"), { method: "POST", credentials: "same-origin", cache: "no-store", signal: s.signal, headers: { "Content-Type": "application/json", requesttoken: i.value }, body: JSON.stringify({ itemIds: e.value.slice(0, 100) }) });
        if (!m.ok) throw new Error("lookup_failed");
        const v = await m.json();
        if (c !== d) return;
        n.value = v.items || {}, a.value = v.enabled ? v.status : "disabled";
      } catch (m) {
        c === d && m.name !== "AbortError" && (a.value = "error");
      }
    }, 250));
  }, { immediate: !0 }), wi(() => {
    d++, clearTimeout(r), s?.abort();
  }), { results: n, status: a };
}
const FA = ["aria-label", "aria-busy"], MA = {
  key: 0,
  role: "status"
}, UA = {
  key: 1,
  role: "alert"
}, zA = {
  key: 2,
  role: "status"
}, jA = { key: 3 }, BA = { key: 4 }, HA = {
  key: 5,
  role: "status"
}, VA = {
  key: 6,
  class: "library-suggestion-list"
}, qA = ["href"], KA = ["disabled", "onClick"], GA = {
  key: 0,
  role: "status"
}, WA = { class: "library-suggestion-list" }, YA = { class: "library-suggestion-comparison" }, ZA = ["src"], XA = { class: "library-duplicate-actions" }, JA = ["href"], QA = ["href"], eE = ["disabled", "onClick"], tE = { class: "library-duplicate-actions" }, iE = ["disabled"], nE = ["disabled"], aE = ["disabled"], eg = {
  __name: "DuplicateSuggestions",
  props: { itemId: Number, requestToken: String, enabled: { type: Boolean, default: !0 }, compareId: { type: Number, default: 0 }, full: { type: Boolean, default: !1 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(0), n = j(() => (i.value, t.itemId ? [t.itemId] : [])), a = j(() => t.enabled), r = j(() => t.requestToken), { results: s, status: d } = Qb(n, a, r), c = j(() => s.value[t.itemId]), m = /* @__PURE__ */ G(null), v = /* @__PURE__ */ G(!1), y = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(!1), k = { formats: w("library", "Alternative formats"), languages: w("library", "Different languages"), years: w("library", "Different publication years"), publishers: w("library", "Different publishers"), identifiers: w("library", "Different ISBNs") };
    let T = 0;
    async function C(D, P) {
      const N = await fetch(Ki("/apps/library/api/duplicate-suggestions" + D), { credentials: "same-origin", cache: "no-store", method: P ? "POST" : "GET", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...P ? { body: JSON.stringify(P) } : {} });
      if (!N.ok) throw new Error(N.status === 409 ? w("library", "These books changed after the scan. Run a new scan before reviewing this comparison.") : w("library", "Could not complete the duplicate review. Please try again."));
      return N.json();
    }
    async function $(D) {
      const P = ++T;
      v.value = !0, y.value = "", g.value = !1;
      try {
        const N = await C(`/compare/${t.itemId}/${D}`);
        P === T && (m.value = N);
      } catch (N) {
        P === T && (y.value = N.message);
      } finally {
        P === T && (v.value = !1);
      }
    }
    async function I(D, P = 0) {
      v.value = !0, y.value = "";
      try {
        await C(`/compare/${m.value.books[0].id}/${m.value.books[1].id}`, { signature: m.value.signature, decision: D, preferredId: P }), g.value = !0, i.value++, m.value = null;
      } catch (N) {
        y.value = N.message;
      } finally {
        v.value = !1;
      }
    }
    return qe(() => [t.itemId, t.compareId], () => {
      T++, m.value = null, t.full && t.compareId && $(t.compareId);
    }, { immediate: !0 }), (D, P) => (p(), h("section", {
      class: "library-duplicate-suggestions",
      "aria-label": u(w)("library", "Possible duplicates"),
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("h3", null, o(u(w)("library", "Possible duplicates")), 1),
      u(d) === "pending" ? (p(), h("p", MA, o(u(w)("library", "Checking possible duplicates")), 1)) : E("", !0),
      u(d) === "error" || y.value ? (p(), h("p", UA, o(y.value || u(w)("library", "Could not complete the duplicate review. Please try again.")), 1)) : E("", !0),
      u(d) === "building" || c.value?.status === "partial" ? (p(), h("p", zA, o(u(w)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : E("", !0),
      c.value?.status === "unavailable" ? (p(), h("p", jA, o(u(w)("library", "These books are no longer available. Start a new scan.")), 1)) : E("", !0),
      c.value?.status === "checked" && !c.value.count ? (p(), h("p", BA, o(u(w)("library", "No unreviewed suggestions found.")), 1)) : E("", !0),
      g.value ? (p(), h("p", HA, o(u(w)("library", "Review saved. Your files and catalogue metadata were not changed.")), 1)) : E("", !0),
      c.value?.count && !m.value ? (p(), h("ul", VA, [
        (p(!0), h(W, null, de(c.value.matches, (N) => (p(), h("li", {
          key: N.id
        }, [
          e.full ? (p(), h("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: (ce) => $(N.id)
          }, [
            l("bdi", null, o(N.title), 1),
            te(" · " + o(N.format.toUpperCase()), 1)
          ], 8, KA)) : (p(), h("a", {
            key: 0,
            href: N.url
          }, [
            l("bdi", null, o(N.title), 1),
            te(" · " + o(N.format.toUpperCase()), 1)
          ], 8, qA))
        ]))), 128))
      ])) : E("", !0),
      m.value ? (p(), h(W, { key: 7 }, [
        m.value.reasons.length ? E("", !0) : (p(), h("p", GA, o(u(w)("library", "These books no longer match the current metadata rules.")), 1)),
        l("ul", WA, [
          (p(!0), h(W, null, de(m.value.flags, (N) => (p(), h("li", { key: N }, o(k[N]), 1))), 128))
        ]),
        l("div", YA, [
          (p(!0), h(W, null, de(m.value.books, (N) => (p(), h("article", {
            key: N.id
          }, [
            l("img", {
              src: N.coverUrl,
              alt: "",
              width: "64",
              height: "88"
            }, null, 8, ZA),
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
            l("div", XA, [
              l("a", {
                class: "button secondary",
                href: N.detailsUrl
              }, o(u(w)("library", "Details")), 9, JA),
              l("a", {
                class: "button secondary",
                href: N.openUrl
              }, o(u(w)("library", "Open")), 9, QA),
              l("button", {
                class: "button primary",
                disabled: v.value,
                onClick: (ce) => I("preferred", N.id)
              }, o(u(w)("library", "Prefer this copy")), 9, eE)
            ])
          ]))), 128))
        ]),
        l("div", tE, [
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[0] || (P[0] = (N) => I("keep"))
          }, o(u(w)("library", "Keep both")), 9, iE),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[1] || (P[1] = (N) => I("dismissed"))
          }, o(u(w)("library", "Dismiss match")), 9, nE),
          l("button", {
            class: "button secondary",
            disabled: v.value,
            onClick: P[2] || (P[2] = (N) => I("unreviewed"))
          }, o(u(w)("library", "Reset review decision")), 9, aE)
        ])
      ], 64)) : E("", !0)
    ], 8, FA));
  }
}, rE = ["aria-busy"], sE = ["checked", "disabled"], lE = {
  key: 0,
  role: "alert"
}, oE = {
  key: 1,
  role: "status"
}, uE = {
  key: 2,
  role: "alert"
}, cE = {
  key: 3,
  role: "status"
}, dE = {
  __name: "DuplicateSuggestionSettings",
  props: { requestToken: String },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G({ enabled: !1, status: "disabled" }), n = /* @__PURE__ */ G(!1), a = /* @__PURE__ */ G("");
    let r = !0, s;
    async function d() {
      try {
        const m = await fetch(Ki("/apps/library/api/duplicate-suggestions"), { cache: "no-store", credentials: "same-origin" });
        if (!m.ok) throw new Error();
        const v = await m.json();
        r && (i.value = v, v.status === "building" && (s = setTimeout(d, 5e3)));
      } catch {
        r && (a.value = w("library", "Could not complete the duplicate review. Please try again."));
      }
    }
    async function c(m) {
      n.value = !0, a.value = "", clearTimeout(s);
      try {
        const v = await fetch(Ki("/apps/library/api/duplicate-suggestions"), { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, body: JSON.stringify({ enabled: m.target.checked }) });
        if (!v.ok) throw new Error();
        i.value = await v.json(), i.value.status === "building" && (s = setTimeout(d, 2e3));
      } catch {
        a.value = w("library", "Could not complete the duplicate review. Please try again.");
      } finally {
        n.value = !1;
      }
    }
    return Et(d), wi(() => {
      r = !1, clearTimeout(s);
    }), (m, v) => (p(), h("section", {
      class: "library-auto-duplicate-settings",
      "aria-busy": n.value ? "true" : "false"
    }, [
      l("label", null, [
        l("input", {
          type: "checkbox",
          checked: i.value.enabled,
          disabled: n.value,
          onChange: c
        }, null, 40, sE),
        fe(Xe, {
          text: u(w)("library", "Build a private metadata index in the background. Suggestions check the whole library without reading book contents.")
        }, {
          default: me(() => [
            te(o(u(w)("library", "Show possible duplicates while browsing")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      a.value ? (p(), h("p", lE, o(a.value), 1)) : E("", !0),
      i.value.status === "building" ? (p(), h("p", oE, o(u(w)("library", "Indexing metadata")) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1)) : E("", !0),
      i.value.status === "failed" ? (p(), h("p", uE, o(u(w)("library", "Duplicate scan failed")), 1)) : E("", !0),
      i.value.status === "ready" ? (p(), h("p", cE, o(u(w)("library", "Automatic duplicate suggestions are ready.")), 1)) : E("", !0)
    ], 8, rE));
  }
}, fE = ["aria-label", "aria-busy"], pE = ["href"], hE = {
  key: 1,
  role: "alert"
}, vE = {
  key: 2,
  role: "status"
}, bE = ["disabled"], gE = { value: "0" }, mE = ["value"], yE = { class: "library-duplicate-checkbox" }, _E = ["disabled"], wE = ["disabled"], kE = ["value", "disabled"], SE = { value: "" }, CE = ["value"], TE = ["aria-label"], AE = { role: "status" }, EE = ["value", "max", "aria-label"], xE = {
  key: 1,
  role: "status"
}, $E = {
  key: 2,
  role: "alert"
}, OE = {
  key: 3,
  role: "alert"
}, NE = { class: "library-duplicate-actions" }, RE = ["disabled"], IE = ["disabled"], LE = ["disabled"], PE = ["disabled"], DE = { value: "all" }, FE = ["value"], ME = {
  key: 0,
  role: "status"
}, UE = ["data-pair-id"], zE = {
  key: 0,
  role: "status"
}, jE = { class: "library-duplicate-decision" }, BE = ["aria-label"], HE = ["aria-label"], VE = {
  key: 1,
  role: "alert"
}, qE = { class: "library-duplicate-books" }, KE = { class: "library-duplicate-book-heading" }, GE = ["src"], WE = { dir: "auto" }, YE = { dir: "auto" }, ZE = { key: 0 }, XE = { dir: "auto" }, JE = { dir: "ltr" }, QE = { dir: "auto" }, ex = { class: "library-duplicate-actions" }, tx = ["href"], ix = ["href"], nx = ["disabled", "onClick"], ax = { class: "library-duplicate-actions" }, rx = ["disabled", "onClick"], sx = ["disabled", "onClick"], lx = ["disabled", "onClick"], ox = ["aria-label"], ux = ["disabled"], cx = ["disabled"], dx = {
  __name: "PossibleDuplicates",
  props: { requestToken: String, reviewUrl: String },
  setup(e) {
    const t = Number(new URLSearchParams(window.location.search).get("bookId")) || 0, i = Number(new URLSearchParams(window.location.search).get("compareId")) || 0, n = e, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G([]), s = /* @__PURE__ */ G("0"), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(null), m = /* @__PURE__ */ G(!1), v = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G("unreviewed");
    let k, T = !0, C = 0;
    const $ = j(() => c.value?.status === "running"), I = j(() => ({ running: w("library", "Finding possible duplicates"), completed: w("library", "Duplicate scan complete"), cancelled: w("library", "Duplicate scan cancelled"), failed: w("library", "Duplicate scan failed"), limited: w("library", "Duplicate scan reached its limit") })), D = j(() => ({ unreviewed: w("library", "To review"), preferred: w("library", "Preferred copy selected"), keep: w("library", "Keep both"), dismissed: w("library", "Dismissed") })), P = j(() => ({ identical: w("library", "Identical file contents"), isbn: w("library", "Same ISBN"), title_author: w("library", "Same normalized title and authors"), similar_title_author: w("library", "Similar title and matching authors") })), N = j(() => ({ formats: w("library", "Alternative formats"), languages: w("library", "Different languages"), years: w("library", "Different publication years"), publishers: w("library", "Different publishers"), identifiers: w("library", "Different ISBNs") })), ce = (Q) => Q < 1048576 ? new Intl.NumberFormat(document.documentElement.lang || "en", { style: "unit", unit: Q < 1e3 ? "byte" : "kilobyte", maximumFractionDigits: 2 }).format(Q < 1e3 ? Q : Q / 1e3) : new Intl.NumberFormat(document.documentElement.lang || "en", { maximumFractionDigits: 2 }).format(Q / 1048576) + " " + w("library", "MiB");
    async function J(Q = "", ie) {
      const Z = await fetch(Ki(`/apps/library/api/duplicates${Q}`), { credentials: "same-origin", cache: "no-store", method: ie === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: n.requestToken }, ...ie === void 0 ? {} : { body: JSON.stringify(ie) } }), ue = await Z.json().catch(() => ({}));
      if (!Z.ok)
        throw Z.status === 409 ? new Error(w("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")) : ue.error === "decision_limit" ? new Error(w("library", "This account has 10,000 saved review decisions. Reset an old decision before saving another.")) : ue.error === "history_limit" ? new Error(w("library", "Three duplicate scans are already saved. Discard an old scan before starting another.")) : ue.error === "scope_limit" ? new Error(w("library", "This scope is too large. Choose a smaller library root.")) : Z.status === 404 ? new Error(w("library", "This scan or these books are no longer available.")) : new Error(w("library", "Could not complete the duplicate review. Please try again."));
      return ue;
    }
    async function x() {
      const Q = await J();
      T && (a.value = Q.roots, r.value = Q.scans);
    }
    async function q(Q) {
      m.value = !0, v.value = "";
      try {
        await Q();
      } catch (ie) {
        T && (v.value = ie.message);
      } finally {
        T && (m.value = !1);
      }
    }
    function B() {
      if (clearTimeout(k), !T || !$.value) return;
      const Q = C, ie = c.value.id;
      k = setTimeout(async () => {
        try {
          if (await J(`/${ie}/advance`, {}), !T || Q !== C) return;
          const Z = await J(`/${ie}?page=${c.value.page}&filter=${g.value}`);
          if (!T || Q !== C) return;
          c.value = Z, $.value || await x(), B();
        } catch (Z) {
          T && Q === C && (v.value = Z.message);
        }
      }, 1500);
    }
    async function Y() {
      await q(async () => {
        c.value = await J("", { rootId: Number(s.value), contents: d.value }), C++, g.value = "unreviewed", y.value = "", await x(), B();
      });
    }
    async function se(Q, ie = 1) {
      const Z = ++C;
      clearTimeout(k), await q(async () => {
        const ue = await J(`/${Q}?page=${ie}&filter=${g.value}`);
        T && Z === C && (c.value = ue, s.value = String(ue.rootId), d.value = !!ue.contents, B());
      });
    }
    function H(Q) {
      g.value = "unreviewed", y.value = "", Q.target.value && se(Q.target.value);
    }
    async function K() {
      C++, clearTimeout(k), await q(async () => {
        await J(`/${c.value.id}/cancel`, {}), c.value = await J(`/${c.value.id}?filter=${g.value}`), await x();
      });
    }
    async function R() {
      C++, clearTimeout(k), await q(async () => {
        await J(`/${c.value.id}/discard`, {}), c.value = null, await x();
      });
    }
    async function V(Q, ie, Z = 0) {
      C++, clearTimeout(k), await q(async () => {
        await J(`/${c.value.id}/pairs/${Q.id}`, { signature: Q.signature, decision: ie, preferredId: Z }), y.value = w("library", "Review saved. Your files and catalogue metadata were not changed."), c.value = await J(`/${c.value.id}?page=${c.value.page}&filter=${g.value}`), B();
      });
    }
    return Et(() => q(x)), wi(() => {
      T = !1, C++, clearTimeout(k);
    }), (Q, ie) => (p(), h("section", {
      class: "library-duplicates",
      "aria-label": u(w)("library", "Possible duplicates"),
      "aria-busy": m.value ? "true" : "false"
    }, [
      l("a", { href: e.reviewUrl }, "← " + o(u(w)("library", "Review")), 9, pE),
      l("h1", null, [
        fe(Xe, {
          text: u(w)("library", "Find possible copies from titles, authors and valid ISBNs. Name order and punctuation are normalized for comparison only. Editions and translations can be different books. Review decisions are private and never delete, merge or hide publications.")
        }, {
          default: me(() => [
            te(o(u(w)("library", "Possible duplicates")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      fe(dE, { "request-token": e.requestToken }, null, 8, ["request-token"]),
      u(t) ? (p(), De(eg, {
        key: 0,
        "item-id": u(t),
        "compare-id": u(i),
        "request-token": e.requestToken,
        full: ""
      }, null, 8, ["item-id", "compare-id", "request-token"])) : E("", !0),
      v.value ? (p(), h("p", hE, o(v.value), 1)) : E("", !0),
      y.value ? (p(), h("p", vE, o(y.value), 1)) : E("", !0),
      l("form", {
        class: "library-duplicate-toolbar",
        onSubmit: Ce(Y, ["prevent"])
      }, [
        l("label", null, [
          te(o(u(w)("library", "Library root")), 1),
          ge(l("select", {
            "onUpdate:modelValue": ie[0] || (ie[0] = (Z) => s.value = Z),
            disabled: m.value || $.value
          }, [
            l("option", gE, o(u(w)("library", "All library roots")), 1),
            (p(!0), h(W, null, de(a.value, (Z) => (p(), h("option", {
              key: Z.id,
              value: String(Z.id)
            }, o(Z.label), 9, mE))), 128))
          ], 8, bE), [
            [it, s.value]
          ])
        ]),
        l("label", yE, [
          ge(l("input", {
            "onUpdate:modelValue": ie[1] || (ie[1] = (Z) => d.value = Z),
            type: "checkbox",
            disabled: m.value || $.value
          }, null, 8, _E), [
            [qa, d.value]
          ]),
          fe(Xe, {
            text: u(w)("library", "Read equal-size candidates to confirm identical contents, including renamed copies with different metadata. This can take longer on remote storage. Checks are limited to 64 MiB per file and 512 MiB per scan; skipped checks are reported.")
          }, {
            default: me(() => [
              te(o(u(w)("library", "Compare file contents")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("button", {
          class: "button primary",
          disabled: m.value || $.value || !a.value.length
        }, o(u(w)("library", "Find possible duplicates")), 9, wE)
      ], 32),
      l("label", null, [
        fe(Xe, {
          text: u(w)("library", "Scans continue through Nextcloud background jobs and can be reopened for seven days. Review decisions are reused when the same books have not changed. Each comparison is independent; choosing a preferred copy does not change catalogue ordering.")
        }, {
          default: me(() => [
            te(o(u(w)("library", "Saved duplicate scans")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        l("select", {
          value: c.value?.id || "",
          disabled: m.value,
          onChange: H
        }, [
          l("option", SE, o(u(w)("library", "Choose a scan")), 1),
          (p(!0), h(W, null, de(r.value, (Z) => (p(), h("option", {
            key: Z.id,
            value: Z.id
          }, o(new Date(Number(Z.created_at) * 1e3).toLocaleString()) + " · " + o(I.value[Z.status]), 9, CE))), 128))
        ], 40, kE)
      ]),
      c.value ? (p(), h(W, { key: 3 }, [
        l("section", {
          class: "library-duplicate-progress",
          "aria-label": u(w)("library", "Duplicate scan progress")
        }, [
          l("strong", null, o(c.value.rootId ? c.value.label : u(w)("library", "All library roots")), 1),
          l("p", AE, [
            te(o(I.value[c.value.status]), 1),
            $.value ? (p(), h(W, { key: 0 }, [
              te(" · " + o(c.value.phase === "index" ? u(w)("library", "Indexing metadata") : u(w)("library", "Comparing candidates")), 1)
            ], 64)) : E("", !0),
            te(" · " + o(c.value.processed) + "/" + o(c.value.total), 1)
          ]),
          $.value ? (p(), h("progress", {
            key: 0,
            value: c.value.phase === "index" ? c.value.processed : void 0,
            max: Math.max(c.value.total, 1),
            "aria-label": u(w)("library", "Duplicate scan progress")
          }, null, 8, EE)) : E("", !0),
          l("p", null, o(u(w)("library", "Possible matches")) + ": " + o(c.value.matches) + " · " + o(u(w)("library", "Comparisons checked")) + ": " + o(c.value.examined), 1),
          c.value.hashSkipped || c.value.unavailable ? (p(), h("p", xE, o(u(w)("library", "Content checks skipped")) + ": " + o(c.value.hashSkipped) + " · " + o(u(w)("library", "Unavailable books")) + ": " + o(c.value.unavailable), 1)) : E("", !0),
          c.value.status === "limited" ? (p(), h("p", $E, o(u(w)("library", "These results are partial. A large candidate group or scan limit was reached. Try a smaller root or improve the metadata before scanning again.")), 1)) : E("", !0),
          c.value.status === "failed" ? (p(), h("p", OE, o(u(w)("library", "The scan stopped before completion. Its results are partial. Refresh or start a new scan.")), 1)) : E("", !0),
          l("div", NE, [
            $.value ? (p(), h("button", {
              key: 0,
              class: "button secondary",
              disabled: m.value,
              onClick: K
            }, o(u(w)("library", "Cancel scan")), 9, RE)) : E("", !0),
            l("button", {
              class: "button secondary",
              disabled: m.value,
              onClick: ie[2] || (ie[2] = (Z) => se(c.value.id, c.value.page))
            }, o(u(w)("library", "Refresh results")), 9, IE),
            l("button", {
              class: "button secondary",
              disabled: m.value || $.value,
              onClick: R
            }, o(u(w)("library", "Discard scan")), 9, LE)
          ])
        ], 8, TE),
        l("label", null, [
          te(o(u(w)("library", "Show comparisons")), 1),
          ge(l("select", {
            "onUpdate:modelValue": ie[3] || (ie[3] = (Z) => g.value = Z),
            disabled: m.value,
            onChange: ie[4] || (ie[4] = (Z) => se(c.value.id))
          }, [
            l("option", DE, o(u(w)("library", "All")) + " (" + o(c.value.matches) + ")", 1),
            (p(!0), h(W, null, de(D.value, (Z, ue) => (p(), h("option", {
              key: ue,
              value: ue
            }, o(Z) + " (" + o(c.value.counts[ue] || 0) + ")", 9, FE))), 128))
          ], 40, PE), [
            [it, g.value]
          ])
        ]),
        !c.value.pairs.length && !$.value ? (p(), h("p", ME, o(u(w)("library", "No comparisons in this view.")), 1)) : E("", !0),
        (p(!0), h(W, null, de(c.value.pairs, (Z) => (p(), h("article", {
          key: Z.id,
          class: "library-duplicate-pair",
          "data-pair-id": Z.id
        }, [
          Z.unavailable ? (p(), h("p", zE, o(u(w)("library", "These books are no longer available. Start a new scan.")), 1)) : (p(), h(W, { key: 1 }, [
            l("header", null, [
              l("h2", null, o(Z.reasons.includes("identical") ? u(w)("library", "Identical file contents") : u(w)("library", "Possible duplicates")), 1),
              l("span", jE, o(D.value[Z.decision]), 1)
            ]),
            l("ul", {
              class: "library-duplicate-reasons",
              "aria-label": u(w)("library", "Why these books match")
            }, [
              (p(!0), h(W, null, de(Z.reasons, (ue) => (p(), h("li", { key: ue }, o(P.value[ue]), 1))), 128))
            ], 8, BE),
            Z.flags.length ? (p(), h("ul", {
              key: 0,
              class: "library-duplicate-flags",
              "aria-label": u(w)("library", "Differences to review")
            }, [
              (p(!0), h(W, null, de(Z.flags, (ue) => (p(), h("li", { key: ue }, o(N.value[ue]), 1))), 128))
            ], 8, HE)) : E("", !0),
            Z.stale ? (p(), h("p", VE, o(u(w)("library", "These books changed after the scan. Run a new scan before reviewing this comparison.")), 1)) : E("", !0),
            l("div", qE, [
              (p(!0), h(W, null, de(Z.books, (ue) => (p(), h("section", {
                key: ue.id,
                class: ke(["library-duplicate-book", { "library-duplicate-preferred": Z.preferredId === ue.id }])
              }, [
                l("div", KE, [
                  l("img", {
                    src: ue.coverUrl,
                    alt: "",
                    loading: "lazy"
                  }, null, 8, GE),
                  l("div", null, [
                    l("h3", WE, o(ue.title), 1),
                    l("p", YE, o(ue.authors.join("; ") || "—"), 1),
                    Z.preferredId === ue.id ? (p(), h("strong", ZE, o(u(w)("library", "Preferred copy")), 1)) : E("", !0)
                  ])
                ]),
                l("dl", null, [
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Format")), 1),
                    l("dd", null, o(ue.format.toUpperCase()) + " · " + o(ce(ue.size)), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Language")), 1),
                    l("dd", null, o(ue.language || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Publication date")), 1),
                    l("dd", null, o(ue.publicationDate || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Publisher")), 1),
                    l("dd", XE, o(ue.publisher || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "ISBN")), 1),
                    l("dd", JE, o(ue.isbn.join(", ") || "—"), 1)
                  ]),
                  l("div", null, [
                    l("dt", null, o(u(w)("library", "Location")), 1),
                    l("dd", QE, o(ue.path), 1)
                  ])
                ]),
                l("div", ex, [
                  l("a", {
                    class: "button secondary",
                    href: ue.openUrl
                  }, o(u(w)("library", "Open")), 9, tx),
                  l("a", {
                    class: "button secondary",
                    href: ue.detailsUrl
                  }, o(u(w)("library", "Details")), 9, ix),
                  l("button", {
                    class: "button primary",
                    disabled: m.value || $.value || Z.stale,
                    onClick: (Te) => V(Z, "preferred", ue.id)
                  }, o(u(w)("library", "Prefer this copy")), 9, nx)
                ])
              ], 2))), 128))
            ]),
            l("div", ax, [
              l("button", {
                class: "button secondary",
                disabled: m.value || $.value || Z.stale,
                onClick: (ue) => V(Z, "keep")
              }, o(u(w)("library", "Keep both")), 9, rx),
              l("button", {
                class: "button secondary",
                disabled: m.value || $.value || Z.stale,
                onClick: (ue) => V(Z, "dismissed")
              }, o(u(w)("library", "Dismiss match")), 9, sx),
              Z.decision !== "unreviewed" ? (p(), h("button", {
                key: 0,
                class: "button secondary",
                disabled: m.value || $.value || Z.stale,
                onClick: (ue) => V(Z, "unreviewed")
              }, o(u(w)("library", "Reset review decision")), 9, lx)) : E("", !0)
            ])
          ], 64))
        ], 8, UE))), 128)),
        l("nav", {
          class: "library-duplicate-actions",
          "aria-label": u(w)("library", "Duplicate comparison pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: m.value || c.value.page === 1,
            onClick: ie[5] || (ie[5] = (Z) => se(c.value.id, c.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, ux),
          l("span", null, o(c.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: m.value || !c.value.hasNext,
            onClick: ie[6] || (ie[6] = (Z) => se(c.value.id, c.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, cx)
        ], 8, ox)
      ], 64)) : E("", !0)
    ], 8, fE));
  }
}, zd = ["title", "subtitle", "author", "series", "seriesNumber", "language", "publisher", "subject", "year", "genre"], fx = /* @__PURE__ */ new Set([...zd, "ignore", "folder", "folders", "extension"]);
function tg(e, t, i = {}) {
  if (!t || t.length > 1e3 || e.length > 2e3) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%folders?%(?!\/)/.test(t)) return { status: "invalid", reason: "pattern", changes: [] };
  const n = (y) => y === "%folders%/" ? "folders" : y.slice(1, -1), a = t.split(/(%folders%\/|%[A-Za-z]+%)/).filter(Boolean);
  if (a.some((y) => y.includes("%") && !fx.has(n(y))) || a.filter((y) => y.startsWith("%")).length > 16) return { status: "invalid", reason: "pattern", changes: [] };
  if (/%[A-Za-z]+%%[A-Za-z]+%/.test(t)) return { status: "invalid", reason: "delimiter", changes: [] };
  let r = 0, s = !1;
  const d = [];
  function c(y, g, k) {
    if (++r > 5e3) {
      s = !0;
      return;
    }
    if (d.length > 1) return;
    if (y === a.length) {
      g === e.length && d.push(k);
      return;
    }
    const T = a[y];
    if (!T.startsWith("%")) {
      e.startsWith(T, g) && c(y + 1, g + T.length, k);
      return;
    }
    const C = n(T);
    if (C === "folders") {
      c(y + 1, g, k);
      for (let D = g; D < e.length && !s && d.length < 2; D++) e[D] === "/" && c(y + 1, D + 1, k);
      return;
    }
    const $ = e.indexOf("/", g), I = $ < 0 ? e.length : $;
    for (let D = g + 1; D <= I && !s && d.length < 2; D++) {
      const P = e.slice(g, D);
      C === "folder" && D !== I || C === "extension" && !/^[A-Za-z0-9]{1,12}$/.test(P) || c(y + 1, D, [...k, { key: C, raw: P }]);
    }
  }
  if (c(0, 0, []), s || d.length > 1) return { status: "ambiguous", changes: [] };
  if (!d.length) return { status: "unmatched", changes: [] };
  const m = /* @__PURE__ */ new Map(), v = [];
  for (const { key: y, raw: g } of d[0]) {
    if (!zd.includes(y)) continue;
    let k = g.trim();
    if (m.has(y) && m.get(y) !== k) return { status: "ambiguous", changes: [] };
    if (m.has(y)) continue;
    if (m.set(y, k), y === "year" && !/^\d{4}$/.test(k)) return { status: "invalid", reason: "year", changes: [] };
    if (y === "language" && (k = ig(k)), y === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(k)) return { status: "invalid", reason: "language", changes: [] };
    if (y === "author" && [...k].length > 255) return { status: "invalid", changes: [] };
    if (!ng(y, k)) return { status: "invalid", changes: [] };
    const T = String(i[y] || ""), C = y === "author" && Array.isArray(i.authors) ? JSON.stringify([k]) === JSON.stringify(i.authors) : T === k;
    v.push({ field: y, raw: g, value: k, ...y === "author" ? { values: [k] } : {}, before: T, previewOnly: !1, status: C ? "unchanged" : T.trim() ? "conflict" : "ready" });
  }
  return { status: v.some((y) => y.status === "conflict") ? "conflict" : v.some((y) => y.status === "ready") ? "ready" : "unchanged", changes: v };
}
function ig(e) {
  return ({ english: "en", german: "de", deutsch: "de", french: "fr", français: "fr", arabic: "ar" }[e.toLowerCase()] || e.toLowerCase()).replace(/^([a-z]{2,3})-([a-z]{2})$/, (i, n, a) => `${n}-${a.toUpperCase()}`);
}
function ng(e, t) {
  const i = { title: 512, subtitle: 512, author: 1024, series: 255, seriesNumber: 64, genre: 255, language: 64, publisher: 512, subject: 2048, year: 4 };
  return e in i ? !!t && [...t].length <= i[e] && !/[\x00-\x1f\x7f]/.test(t) && (e !== "year" || Number(t) > 0) : !0;
}
const px = [...zd];
function Js(e) {
  const t = e.split("/"), i = t.pop() || "", n = i.lastIndexOf(".");
  return [...t, n > 0 ? i.slice(0, n) : i];
}
function gu(e = "ignore") {
  return { field: e, split: null, prefix: "", suffix: "", underscores: !1, mapFrom: "", mapTo: "", authorSeparator: "", reverseName: !1 };
}
function ed(e, t, i) {
  if (!t) return [e];
  if (i === "every") return e.split(t);
  const n = i === "last" ? e.lastIndexOf(t) : e.indexOf(t);
  return n < 0 ? [e] : [e.slice(0, n), e.slice(n + t.length)];
}
function Go(e) {
  return { version: 1, combineAuthors: !1, parts: Js(e).map((t, i, n) => gu(i === n.length - 1 ? "title" : "ignore")) };
}
function Wo(e, t, i = {}) {
  const n = (y) => ({ status: y, changes: [] });
  if (!e || e.length > 2e3 || t?.version !== 1 || !Array.isArray(t.parts) || t.parts.length > 64) return n("invalid");
  const a = Js(e);
  if (a.length !== t.parts.length) return n("unmatched");
  const r = /* @__PURE__ */ new Map();
  let s = 0, d = "";
  function c(y, g, k = 0) {
    if (d) return;
    if (++s > 128 || k > 6 || !g) {
      d = "invalid";
      return;
    }
    if (g.split) {
      const { delimiter: I, occurrence: D, children: P } = g.split;
      if (typeof I != "string" || !I || I.length > 100 || !["first", "last", "every"].includes(D) || !Array.isArray(P)) {
        d = "invalid";
        return;
      }
      const N = ed(y, I, D);
      if (N.length !== P.length || N.length < 2) {
        d = "unmatched";
        return;
      }
      N.forEach((ce, J) => c(ce, P[J], k + 1));
      return;
    }
    if (g.field === "ignore") return;
    if (!px.includes(g.field)) {
      d = "invalid";
      return;
    }
    let T = y.trim();
    if (g.prefix) {
      if (!T.startsWith(g.prefix)) {
        d = "unmatched";
        return;
      }
      T = T.slice(g.prefix.length);
    }
    if (g.suffix) {
      if (!T.endsWith(g.suffix)) {
        d = "unmatched";
        return;
      }
      T = T.slice(0, -g.suffix.length);
    }
    if (g.underscores && (T = T.replaceAll("_", " ")), T = T.trim(), g.mapFrom && T === g.mapFrom && (T = g.mapTo.trim()), g.field === "language" && (T = ig(T)), !T || g.field === "year" && !/^\d{4}$/.test(T) || g.field === "language" && !/^[a-z]{2,3}(-[A-Z]{2})?$/.test(T)) {
      d = "invalid";
      return;
    }
    if (!ng(g.field, T)) {
      d = "invalid";
      return;
    }
    let C = [T];
    if (g.field === "author") {
      if (C = (g.authorSeparator ? T.split(g.authorSeparator) : C).map((I) => I.trim()), g.reverseName && (C = C.map((I) => {
        const D = I.split(",").map((P) => P.trim());
        return D.length !== 2 || D.some((P) => !P) ? (d = "invalid", I) : `${D[1]} ${D[0]}`;
      }), d))
        return;
      if (C.some((I) => !I || [...I].length > 255)) {
        d = "invalid";
        return;
      }
    }
    const $ = r.get(g.field);
    $ ? g.field === "author" && t.combineAuthors ? ($.values = [.../* @__PURE__ */ new Set([...$.values, ...C])], $.raw.push(y)) : JSON.stringify($.values) !== JSON.stringify(C) && (d = "ambiguous") : r.set(g.field, { raw: [y], values: [...new Set(C)] });
  }
  if (a.forEach((y, g) => c(y, t.parts[g])), d) return n(d);
  const m = r.get("author")?.values;
  if (m && (m.length > 32 || [...m.join("; ")].length > 1024)) return n("invalid");
  const v = [...r].map(([y, g]) => {
    const k = g.values.join("; "), T = String(i[y] || ""), C = y === "author" && Array.isArray(i.authors) ? JSON.stringify(g.values) === JSON.stringify(i.authors) : T === k;
    return {
      field: y,
      raw: g.raw.join(" / "),
      value: k,
      values: g.values,
      before: T,
      previewOnly: !1,
      status: C ? "unchanged" : T.trim() ? "conflict" : "ready"
    };
  });
  return { status: v.some((y) => y.status === "conflict") ? "conflict" : v.some((y) => y.status === "ready") ? "ready" : "unchanged", changes: v };
}
const hx = ["aria-label", "aria-busy"], vx = {
  key: 0,
  role: "alert"
}, bx = ["disabled"], gx = {
  key: 2,
  role: "status"
}, mx = ["disabled"], yx = { class: "library-inference-presets" }, _x = ["disabled"], wx = ["disabled"], kx = ["disabled"], Sx = ["aria-label"], Cx = ["value", "aria-label"], Tx = { class: "library-inference-before-after" }, Ax = { key: 0 }, Ex = ["aria-label"], xx = ["aria-label"], $x = { class: "library-inference-path" }, Ox = { class: "library-inference-presets" }, Nx = ["disabled"], Rx = ["disabled"], Ix = ["disabled"], Lx = ["disabled"], Px = ["disabled"], Dx = { class: "library-inference-history" }, Fx = ["disabled", "onClick"], ag = {
  __name: "InferenceApply",
  props: { results: { type: Array, required: !0 }, labels: { type: Object, required: !0 }, context: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, wholeFolder: Boolean },
  emits: ["changed"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G(null), s = /* @__PURE__ */ G([]), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(""), v = /* @__PURE__ */ G(""), y = /* @__PURE__ */ new Set(["author", "title", "subtitle", "series", "seriesNumber", "genre", "language", "publisher", "subject", "year"]), g = j(() => i.results.filter((se) => ["ready", "conflict"].includes(se.status) && se.revision).map((se) => ({ ...se, changes: se.changes.filter((H) => y.has(H.field) && ["ready", "conflict"].includes(H.status)) })).filter((se) => se.changes.length)), k = (se, H) => `${se.id}:${H.field}`, T = j(() => g.value.map((se) => ({ id: se.id, revision: se.revision, changes: Object.fromEntries(se.changes.filter((H) => a.value.includes(k(se, H))).map((H) => [H.field, H.field === "author" ? H.values || [H.value] : H.value])) })).filter((se) => Object.keys(se.changes).length)), C = j(() => ({ prepared: w("library", "Awaiting approval"), applied: w("library", "Applied"), undone: w("library", "Undone") }));
    let $ = 0;
    qe(() => JSON.stringify([i.results, i.context]), () => {
      a.value = [], r.value?.status === "prepared" && (r.value = null), v.value = "", $++;
    }), qe(() => JSON.stringify(a.value), () => {
      r.value?.status === "prepared" && (r.value = null), v.value = "", $++;
    });
    function I() {
      a.value = g.value.flatMap((se) => se.changes.filter((H) => H.status === "ready").map((H) => k(se, H)));
    }
    async function D(se = "", H) {
      const K = await fetch(Ki(`/apps/library/api/inference/batches${se}`), { credentials: "same-origin", cache: "no-store", method: H === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: i.requestToken }, ...H === void 0 ? {} : { body: JSON.stringify(H) } }), R = await K.json();
      if (!K.ok)
        throw K.status === 409 ? (r.value && (r.value = { ...r.value, blocked: !0 }), new Error(w("library", "This review is stale or expired. Reload the sample and review again. Undo cannot overwrite later metadata changes."))) : R.error === "history_limit" ? new Error(w("library", "Recent batch history is full. Discard unused reviews or wait for history to expire.")) : K.status === 404 ? new Error(w("library", "The batch or one of its books is no longer available.")) : new Error(w("library", "Could not save these changes. Check the selected values or use a smaller selection."));
      return R;
    }
    async function P() {
      s.value = (await D()).batches;
    }
    async function N(se) {
      d.value = !0, c.value = "", m.value = "";
      try {
        await se();
      } catch (H) {
        c.value = H.message;
      } finally {
        d.value = !1;
      }
    }
    function ce() {
      r.value = null, c.value = "", v.value = "", n("changed");
    }
    async function J() {
      const se = $;
      await N(async () => {
        const H = await D("", { proposals: T.value, context: i.context });
        se === $ && (r.value = H), await P();
      });
    }
    async function x(se) {
      await N(async () => {
        r.value = await D(`/${se}`), v.value = "";
      });
    }
    async function q() {
      if (!r.value || i.disabled) return;
      const se = r.value, H = se.id;
      await N(async () => {
        const K = await D(`/${H}/apply`, {});
        r.value = { ...se, ...K }, m.value = w("library", "Selected metadata changes were applied. Source files were not changed."), a.value = [], await P(), n("changed");
      });
    }
    async function B() {
      const se = r.value, H = se.id;
      await N(async () => {
        const K = await D(`/${H}/undo`, {});
        r.value = { ...se, ...K }, v.value = "", m.value = w("library", "The batch was undone. Previous metadata and provenance were restored."), await P(), n("changed");
      });
    }
    async function Y() {
      await N(async () => {
        await D(`/${r.value.id}/discard`, {}), r.value = null, await P();
      });
    }
    return Et(() => N(P)), (se, H) => (p(), h("section", {
      class: "library-inference-apply",
      "aria-label": u(w)("library", "Review and apply metadata"),
      "aria-busy": d.value ? "true" : "false"
    }, [
      l("h2", null, [
        fe(Xe, {
          text: e.wholeFolder ? u(w)("library", "Choose fields from this page only. Existing values require individual selection. Apply and Undo operate on this reviewed batch of at most 40 books.") : u(w)("library", "Choose fields from this sample only. Replacements require individual selection. Authors are stored in their preview order, with exact duplicates removed.")
        }, {
          default: me(() => [
            te(o(e.wholeFolder ? u(w)("library", "Review and apply metadata") : u(w)("library", "4. Review and apply metadata")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      c.value ? (p(), h("p", vx, o(c.value), 1)) : E("", !0),
      r.value?.blocked ? (p(), h("button", {
        key: 1,
        class: "button secondary",
        disabled: d.value,
        onClick: ce
      }, o(u(w)("library", "Load sample")), 9, bx)) : E("", !0),
      m.value ? (p(), h("p", gx, o(m.value), 1)) : E("", !0),
      l("fieldset", {
        disabled: d.value || e.disabled,
        class: "library-inference-approval-fields"
      }, [
        l("div", yx, [
          l("button", {
            class: "button secondary",
            disabled: !g.value.length,
            onClick: I
          }, o(u(w)("library", "Select empty fields")), 9, _x),
          l("button", {
            class: "button secondary",
            disabled: !a.value.length,
            onClick: H[0] || (H[0] = (K) => a.value = [])
          }, o(u(w)("library", "Clear selection")), 9, wx),
          l("button", {
            class: "button primary",
            disabled: !T.value.length || r.value?.status === "prepared",
            onClick: J
          }, o(u(w)("library", "Review selected changes")) + " (" + o(a.value.length) + ")", 9, kx)
        ]),
        l("div", {
          class: ke(["library-inference-approval-candidates", { "library-inference-approval-scroll": g.value.length > 8 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Select metadata fields")
        }, [
          (p(!0), h(W, null, de(g.value, (K) => (p(), h("details", {
            key: K.id,
            class: "library-inference-result"
          }, [
            l("summary", null, o(K.path), 1),
            (p(!0), h(W, null, de(K.changes, (R) => (p(), h("label", {
              key: R.field,
              class: "library-inference-approval-field"
            }, [
              ge(l("input", {
                "onUpdate:modelValue": H[1] || (H[1] = (V) => a.value = V),
                type: "checkbox",
                value: k(K, R),
                "aria-label": `${e.labels[R.field]}: ${K.path}`
              }, null, 8, Cx), [
                [qa, a.value]
              ]),
              l("span", null, [
                l("strong", null, o(e.labels[R.field]), 1),
                l("span", Tx, [
                  l("span", null, o(R.before || "—"), 1),
                  H[4] || (H[4] = l("span", { "aria-hidden": "true" }, " → ", -1)),
                  l("strong", null, o(R.value), 1)
                ]),
                R.status === "conflict" ? (p(), h("small", Ax, o(u(w)("library", "Replaces an existing value")), 1)) : E("", !0)
              ])
            ]))), 128))
          ]))), 128))
        ], 10, Sx)
      ], 8, mx),
      r.value ? (p(), h("section", {
        key: 3,
        class: "library-inference-confirm",
        "aria-label": u(w)("library", "Confirmed change review")
      }, [
        l("h3", null, o(C.value[r.value.status]), 1),
        l("p", null, [
          fe(Xe, {
            text: u(w)("library", "Reviews expire after 30 minutes. Applied batches can be undone for seven days, provided their metadata, source file and access have not changed. A stale item blocks the entire batch.")
          }, {
            default: me(() => [
              te(o(u(w)("library", "Available until")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          te(": " + o(new Date(r.value.expiresAt * 1e3).toLocaleString()), 1)
        ]),
        l("div", {
          class: ke(["library-inference-confirm-entries", { "library-inference-approval-scroll": r.value.entries.length > 4 }]),
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Reviewed metadata changes")
        }, [
          (p(!0), h(W, null, de(r.value.entries, (K) => (p(), h("article", {
            key: K.id
          }, [
            l("h4", $x, o(K.path), 1),
            l("dl", null, [
              (p(!0), h(W, null, de(K.changes, (R) => (p(), h("div", {
                key: R.field
              }, [
                l("dt", null, o(e.labels[R.field]), 1),
                l("dd", null, [
                  l("span", null, o(u(w)("library", "Before")) + ": " + o(R.before || "—"), 1),
                  l("strong", null, o(u(w)("library", "After")) + ": " + o(R.after), 1)
                ])
              ]))), 128))
            ])
          ]))), 128))
        ], 10, xx),
        l("div", Ox, [
          r.value.status === "prepared" ? (p(), h("button", {
            key: 0,
            class: "button primary",
            disabled: d.value || e.disabled || r.value.blocked,
            onClick: q
          }, o(u(w)("library", "Apply reviewed changes")), 9, Nx)) : E("", !0),
          r.value.status !== "applied" ? (p(), h("button", {
            key: 1,
            class: "button secondary",
            disabled: d.value,
            onClick: Y
          }, o(u(w)("library", "Discard review")), 9, Rx)) : E("", !0),
          r.value.status === "applied" && !v.value ? (p(), h("button", {
            key: 2,
            class: "button secondary",
            disabled: d.value || r.value.blocked,
            onClick: H[2] || (H[2] = (K) => v.value = r.value.id)
          }, o(u(w)("library", "Undo this batch")), 9, Ix)) : E("", !0),
          v.value ? (p(), h(W, { key: 3 }, [
            l("button", {
              class: "button primary",
              disabled: d.value || r.value.blocked,
              onClick: B
            }, o(u(w)("library", "Confirm undo")), 9, Lx),
            l("button", {
              class: "button secondary",
              disabled: d.value,
              onClick: H[3] || (H[3] = (K) => v.value = "")
            }, o(u(w)("library", "Cancel")), 9, Px)
          ], 64)) : E("", !0)
        ])
      ], 8, Ex)) : E("", !0),
      l("details", Dx, [
        l("summary", null, o(u(w)("library", "Recent metadata batches")) + " (" + o(s.value.length) + ")", 1),
        l("ul", null, [
          (p(!0), h(W, null, de(s.value, (K) => (p(), h("li", {
            key: K.id
          }, [
            l("button", {
              class: "button secondary",
              disabled: d.value,
              onClick: (R) => x(K.id)
            }, o(new Date(Number(K.created_at) * 1e3).toLocaleString()) + " · " + o(C.value[K.status]), 9, Fx)
          ]))), 128))
        ])
      ])
    ], 8, hx));
  }
}, Mx = { class: "library-inference-rule-trace" }, Ux = { key: 0 }, td = {
  __name: "InferenceRuleTrace",
  props: { result: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 } },
  setup(e) {
    return (t, i) => (p(), h("div", Mx, [
      (p(!0), h(W, null, de(e.result.conflicts || [], (n) => (p(), h("div", {
        key: n.field,
        class: "library-inference-rule-conflict"
      }, [
        l("strong", null, o(u(w)("library", "Conflicting rules")) + ": " + o(e.labels[n.field]), 1),
        l("ul", null, [
          (p(!0), h(W, null, de(n.proposals, (a, r) => (p(), h("li", { key: r }, [
            l("bdi", null, o(a.value), 1),
            l("small", null, o(a.sources.map((s) => s.name).join(", ")), 1)
          ]))), 128))
        ])
      ]))), 128)),
      e.result.attempts?.length ? (p(), h("details", Ux, [
        l("summary", null, [
          fe(Xe, {
            text: u(w)("library", "Evaluated from the deepest assigned folder upward. An ambiguous match stops fallback. Rules above a successful match are not used. Conflicting fields have no single proposed value.")
          }, {
            default: me(() => [
              te(o(u(w)("library", "Rule evaluation")), 1)
            ]),
            _: 1
          }, 8, ["text"])
        ]),
        l("ul", null, [
          (p(!0), h(W, null, de(e.result.attempts, (n) => (p(), h("li", {
            key: n.id
          }, [
            l("strong", null, o(n.name), 1),
            l("bdi", null, o(n.folder || "/"), 1),
            l("small", null, o(e.statuses[n.status]), 1)
          ]))), 128))
        ])
      ])) : E("", !0)
    ]));
  }
}, zx = ["aria-label", "aria-busy"], jx = {
  key: 0,
  role: "alert"
}, Bx = { class: "library-inference-presets" }, Hx = ["disabled"], Vx = ["value", "disabled"], qx = { value: "" }, Kx = ["value"], Gx = { class: "library-inference-path" }, Wx = { role: "status" }, Yx = ["value", "max", "aria-label"], Zx = { class: "library-inference-presets" }, Xx = ["disabled"], Jx = ["disabled"], Qx = ["disabled"], e$ = {
  key: 1,
  role: "alert"
}, t$ = {
  key: 2,
  role: "alert"
}, i$ = {
  key: 0,
  class: "library-analysis-definition",
  dir: "ltr"
}, n$ = { key: 1 }, a$ = { key: 2 }, r$ = ["disabled"], s$ = { value: "all" }, l$ = ["value"], o$ = ["aria-label"], u$ = { class: "library-inference-path" }, c$ = ["aria-label"], d$ = ["disabled"], f$ = ["disabled"], p$ = {
  __name: "InferenceAnalysis",
  props: { definition: { type: Object, required: !0 }, labels: { type: Object, required: !0 }, statuses: { type: Object, required: !0 }, requestToken: String, disabled: Boolean },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(null), n = /* @__PURE__ */ G([]), a = /* @__PURE__ */ G(!1), r = /* @__PURE__ */ G(""), s = /* @__PURE__ */ G("all");
    let d, c = 0, m = !0;
    const v = j(() => i.value?.status === "running"), y = j(() => ({ running: w("library", "Analysing"), completed: w("library", "Analysis complete"), cancelled: w("library", "Analysis cancelled"), failed: w("library", "Analysis failed"), limited: w("library", "Analysis limit reached") })), g = j(() => ({ ...t.statuses, unavailable: w("library", "Changed or unavailable books") }));
    async function k(J = "", x) {
      const q = await fetch(Ki(`/apps/library/api/inference/analyses${J}`), { credentials: "same-origin", cache: "no-store", method: x === void 0 ? "GET" : "POST", headers: { "Content-Type": "application/json", requesttoken: t.requestToken }, ...x === void 0 ? {} : { body: JSON.stringify(x) } }), B = await q.json();
      if (!q.ok)
        throw B.error === "analysis_history_limit" ? new Error(w("library", "Five folder analyses are already saved. Discard an old analysis before starting another.")) : B.error === "analysis_limit" ? new Error(w("library", "This folder exceeds the analysis limit. Choose a smaller subfolder.")) : q.status === 404 ? new Error(w("library", "This analysis or its folder is no longer available.")) : new Error(w("library", "Could not analyse this folder. Check the rule, folder and your access."));
      return B;
    }
    async function T() {
      const J = await k();
      m && (n.value = J.jobs);
    }
    async function C(J) {
      a.value = !0, r.value = "";
      try {
        await J();
      } catch (x) {
        m && (r.value = x.message);
      } finally {
        m && (a.value = !1);
      }
    }
    function $() {
      if (clearTimeout(d), !m || !v.value) return;
      const J = i.value.id, x = c;
      d = setTimeout(async () => {
        try {
          if (await k(`/${J}/advance`, {}), !m || c !== x) return;
          const q = await k(`/${J}?page=${i.value.page}&filter=${s.value}`);
          if (!m || c !== x) return;
          i.value = q, v.value || await T(), $();
        } catch (q) {
          m && c === x && (r.value = q.message);
        }
      }, 1500);
    }
    async function I() {
      await C(async () => {
        const J = await k("", { definition: t.definition });
        c++, s.value = "all", i.value = J, await T(), $();
      });
    }
    async function D(J, x = 1) {
      const q = ++c;
      clearTimeout(d), await C(async () => {
        const B = await k(`/${J}?page=${x}&filter=${s.value}`);
        m && q === c && (i.value = B, $());
      });
    }
    function P(J) {
      s.value = "all", J.target.value && D(J.target.value);
    }
    async function N() {
      const J = i.value.id;
      c++, clearTimeout(d), await C(async () => {
        await k(`/${J}/cancel`, {}), i.value = await k(`/${J}?filter=${s.value}`), await T();
      });
    }
    async function ce() {
      const J = i.value.id;
      c++, clearTimeout(d), await C(async () => {
        await k(`/${J}/discard`, {}), i.value = null, await T();
      });
    }
    return Et(() => C(T)), wi(() => {
      m = !1, c++, clearTimeout(d);
    }), (J, x) => (p(), h("section", {
      class: "library-inference-analysis library-inference-step",
      "aria-label": u(w)("library", "Whole-folder analysis"),
      "aria-busy": a.value ? "true" : "false"
    }, [
      l("h2", null, [
        fe(Xe, {
          text: u(w)("library", "Analyse all indexed books in the loaded folder using a snapshot of the current rule. Analysis continues through Nextcloud background jobs after you leave. Results are saved for seven days. New books require a new analysis; source files remain unchanged.")
        }, {
          default: me(() => [
            te(o(u(w)("library", "5. Analyse the whole folder")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      r.value ? (p(), h("p", jx, o(r.value), 1)) : E("", !0),
      l("div", Bx, [
        l("button", {
          class: "button primary",
          disabled: a.value || e.disabled || v.value,
          onClick: I
        }, o(u(w)("library", "Analyse whole folder")), 9, Hx),
        l("label", null, [
          fe(Xe, {
            text: u(w)("library", "Select a saved analysis to reopen its results. Each page contains at most 40 books. Changes and Undo remain separate for each approved batch.")
          }, {
            default: me(() => [
              te(o(u(w)("library", "Saved analyses")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          l("select", {
            value: i.value?.id || "",
            disabled: a.value,
            onChange: P
          }, [
            l("option", qx, o(u(w)("library", "Choose an analysis")), 1),
            (p(!0), h(W, null, de(n.value, (q) => (p(), h("option", {
              key: q.id,
              value: q.id
            }, o(new Date(Number(q.created_at) * 1e3).toLocaleString()) + " · " + o(y.value[q.status]) + " · " + o(q.processed) + "/" + o(q.total), 9, Kx))), 128))
          ], 40, Vx)
        ])
      ]),
      i.value ? (p(), h(W, { key: 1 }, [
        l("p", Gx, o(i.value.scope), 1),
        l("p", Wx, o(y.value[i.value.status]) + " · " + o(i.value.processed) + "/" + o(i.value.total), 1),
        v.value ? (p(), h("progress", {
          key: 0,
          value: i.value.processed,
          max: Math.max(i.value.total, 1),
          "aria-label": u(w)("library", "Analysis progress")
        }, null, 8, Yx)) : E("", !0),
        l("div", Zx, [
          v.value ? (p(), h("button", {
            key: 0,
            class: "button secondary",
            disabled: a.value,
            onClick: N
          }, o(u(w)("library", "Cancel analysis")), 9, Xx)) : E("", !0),
          l("button", {
            class: "button secondary",
            disabled: a.value,
            onClick: x[0] || (x[0] = (q) => D(i.value.id, i.value.page))
          }, o(u(w)("library", "Refresh results")), 9, Jx),
          l("button", {
            class: "button secondary",
            disabled: a.value || v.value,
            onClick: ce
          }, o(u(w)("library", "Discard analysis")), 9, Qx)
        ]),
        i.value.status === "limited" ? (p(), h("p", e$, o(u(w)("library", "Analysis stopped at its storage limit. These results are partial. Choose a smaller subfolder for a complete analysis.")), 1)) : E("", !0),
        i.value.status === "failed" ? (p(), h("p", t$, o(u(w)("library", "Analysis stopped before completion. Check folder access and start a new analysis. These results are partial.")), 1)) : E("", !0),
        l("details", null, [
          l("summary", null, o(u(w)("library", "Rule used for this analysis")), 1),
          i.value.definition.mode === "pattern" ? (p(), h("code", i$, o(i.value.definition.pattern), 1)) : i.value.definition.mode === "folders" ? (p(), h("ul", n$, [
            (p(!0), h(W, null, de(i.value.definition.assignments, (q) => (p(), h("li", {
              key: q.id
            }, o(q.folder || "/") + " · " + o(q.definition.name), 1))), 128))
          ])) : (p(), h("ul", a$, [
            (p(!0), h(W, null, de(i.value.definition.rule.parts, (q, B) => (p(), h("li", { key: B }, o(B + 1) + " · " + o(e.labels[q.field] || u(w)("library", "Ignore")), 1))), 128))
          ]))
        ]),
        l("label", null, [
          te(o(u(w)("library", "Show results")), 1),
          ge(l("select", {
            "onUpdate:modelValue": x[1] || (x[1] = (q) => s.value = q),
            disabled: a.value,
            onChange: x[2] || (x[2] = (q) => D(i.value.id))
          }, [
            l("option", s$, o(u(w)("library", "All")) + " (" + o(Object.values(i.value.counts).reduce((q, B) => q + B, 0)) + ")", 1),
            (p(!0), h(W, null, de(g.value, (q, B) => (p(), h("option", {
              key: B,
              value: B
            }, o(q) + " (" + o(i.value.counts[B] || 0) + ")", 9, l$))), 128))
          ], 40, r$), [
            [it, s.value]
          ])
        ]),
        l("div", {
          class: "library-analysis-results",
          role: "region",
          tabindex: "0",
          "aria-label": u(w)("library", "Analysis results")
        }, [
          (p(!0), h(W, null, de(i.value.items, (q) => (p(), h("details", {
            key: q.id,
            class: "library-inference-result"
          }, [
            l("summary", null, [
              l("span", u$, o(q.path || "—"), 1),
              l("strong", null, o(g.value[q.status]), 1)
            ]),
            i.value.definition.mode === "folders" ? (p(), De(td, {
              key: 0,
              result: q,
              labels: e.labels,
              statuses: g.value
            }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
            (p(!0), h(W, null, de(q.changes, (B) => (p(), h("dl", {
              key: B.field
            }, [
              l("dt", null, o(e.labels[B.field]), 1),
              l("dd", null, o(B.before || "—") + " → " + o(B.value), 1)
            ]))), 128))
          ]))), 128))
        ], 8, o$),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Analysis pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: a.value || i.value.page === 1,
            onClick: x[3] || (x[3] = (q) => D(i.value.id, i.value.page - 1))
          }, o(u(w)("library", "Previous page")), 9, d$),
          l("span", null, o(i.value.page), 1),
          l("button", {
            class: "button secondary",
            disabled: a.value || !i.value.hasNext,
            onClick: x[4] || (x[4] = (q) => D(i.value.id, i.value.page + 1))
          }, o(u(w)("library", "Next page")), 9, f$)
        ], 8, c$),
        fe(ag, {
          "whole-folder": "",
          results: i.value.items,
          labels: e.labels,
          "request-token": e.requestToken,
          context: JSON.stringify({ analysisId: i.value.id }),
          disabled: a.value || v.value,
          onChanged: x[5] || (x[5] = (q) => D(i.value.id, i.value.page))
        }, null, 8, ["results", "labels", "request-token", "context", "disabled"])
      ], 64)) : E("", !0)
    ], 8, zx));
  }
}, h$ = { class: "library-inference-part" }, v$ = { class: "library-inference-part-source" }, b$ = { class: "library-inference-part-options" }, g$ = { value: "first" }, m$ = { value: "last" }, y$ = { value: "every" }, _$ = {
  key: 0,
  role: "status"
}, w$ = ["aria-label"], k$ = { value: "ignore" }, S$ = ["value"], C$ = { key: 1 }, T$ = { class: "library-inference-part-options" }, A$ = { class: "library-inference-checkbox" }, E$ = {
  key: 2,
  class: "library-inference-part-options"
}, x$ = { value: "none" }, $$ = { value: "semicolon" }, O$ = { value: "and" }, N$ = { value: "custom" }, R$ = { key: 0 }, I$ = ["value"], L$ = { class: "library-inference-checkbox" }, wh = " and ", P$ = {
  __name: "InferencePart",
  props: { node: { type: Object, required: !0 }, value: { type: String, default: "" }, fields: { type: Array, required: !0 }, depth: { type: Number, default: 0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ G(t.node.split?.delimiter || " - "), n = /* @__PURE__ */ G(t.node.split?.occurrence || "first"), a = j(() => t.node.split ? ed(t.value, t.node.split.delimiter, t.node.split.occurrence) : []), r = j({
      get: () => t.node.authorSeparatorChoice || "none",
      set: (c) => {
        t.node.authorSeparatorChoice = c, t.node.authorSeparator = { none: "", semicolon: ";", ampersand: "&", and: wh, custom: t.node.customAuthorSeparator || "" }[c];
      }
    });
    function s(c) {
      t.node.customAuthorSeparator = c.target.value, t.node.authorSeparator = c.target.value;
    }
    function d() {
      const c = ed(t.value, i.value, n.value).length, m = t.node.split?.children || [];
      t.node.split = {
        delimiter: i.value,
        occurrence: n.value,
        children: Array.from({ length: Math.min(32, Math.max(2, c)) }, (v, y) => m[y] || gu(y === 0 ? t.node.field : "ignore"))
      };
    }
    return (c, m) => {
      const v = Ye("InferencePart", !0);
      return p(), h("div", h$, [
        l("bdi", v$, o(e.value || "—"), 1),
        e.node.split ? (p(), h(W, { key: 0 }, [
          l("div", b$, [
            l("label", null, [
              te(o(u(w)("library", "Separator")), 1),
              ge(l("input", {
                "onUpdate:modelValue": m[0] || (m[0] = (y) => i.value = y),
                maxlength: "100",
                onInput: d
              }, null, 544), [
                [We, i.value]
              ])
            ]),
            l("label", null, [
              te(o(u(w)("library", "Split at")), 1),
              ge(l("select", {
                "onUpdate:modelValue": m[1] || (m[1] = (y) => n.value = y),
                onChange: d
              }, [
                l("option", g$, o(u(w)("library", "First occurrence")), 1),
                l("option", m$, o(u(w)("library", "Last occurrence")), 1),
                l("option", y$, o(u(w)("library", "Every occurrence")), 1)
              ], 544), [
                [it, n.value]
              ])
            ])
          ]),
          a.value.length !== e.node.split.children.length || !e.node.split.delimiter ? (p(), h("p", _$, o(u(w)("library", "This example does not match the split. Adjust the separator or select another example.")), 1)) : E("", !0),
          l("button", {
            class: "button secondary",
            onClick: m[2] || (m[2] = (y) => e.node.split = null)
          }, o(u(w)("library", "Use whole part")), 1),
          (p(!0), h(W, null, de(e.node.split.children, (y, g) => (p(), De(v, {
            key: g,
            node: y,
            value: a.value[g] || "",
            fields: e.fields,
            depth: e.depth + 1
          }, null, 8, ["node", "value", "fields", "depth"]))), 128))
        ], 64)) : (p(), h(W, { key: 1 }, [
          l("label", null, [
            te(o(u(w)("library", "Field")), 1),
            ge(l("select", {
              "onUpdate:modelValue": m[3] || (m[3] = (y) => e.node.field = y),
              "aria-label": `${u(w)("library", "Field")}: ${e.value}`
            }, [
              l("option", k$, o(u(w)("library", "Ignore this part")), 1),
              (p(!0), h(W, null, de(e.fields, (y) => (p(), h("option", {
                key: y[0],
                value: y[0]
              }, o(y[1]), 9, S$))), 128))
            ], 8, w$), [
              [it, e.node.field]
            ])
          ]),
          e.depth < 6 ? (p(), h("button", {
            key: 0,
            class: "button secondary",
            onClick: d
          }, o(u(w)("library", "Split this part")), 1)) : E("", !0),
          e.node.field !== "ignore" ? (p(), h("details", C$, [
            l("summary", null, o(u(w)("library", "Transform this value")), 1),
            l("div", T$, [
              l("label", null, [
                te(o(u(w)("library", "Remove prefix")), 1),
                ge(l("input", {
                  "onUpdate:modelValue": m[4] || (m[4] = (y) => e.node.prefix = y),
                  maxlength: "100"
                }, null, 512), [
                  [We, e.node.prefix]
                ])
              ]),
              l("label", null, [
                te(o(u(w)("library", "Remove suffix")), 1),
                ge(l("input", {
                  "onUpdate:modelValue": m[5] || (m[5] = (y) => e.node.suffix = y),
                  maxlength: "100"
                }, null, 512), [
                  [We, e.node.suffix]
                ])
              ]),
              l("label", A$, [
                ge(l("input", {
                  "onUpdate:modelValue": m[6] || (m[6] = (y) => e.node.underscores = y),
                  type: "checkbox"
                }, null, 512), [
                  [qa, e.node.underscores]
                ]),
                te(o(u(w)("library", "Replace underscores with spaces")), 1)
              ]),
              l("label", null, [
                fe(Xe, {
                  text: u(w)("library", "Affixes must match. Value mapping follows affix removal and underscore replacement.")
                }, {
                  default: me(() => [
                    te(o(u(w)("library", "Map exact value")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                ge(l("input", {
                  "onUpdate:modelValue": m[7] || (m[7] = (y) => e.node.mapFrom = y),
                  maxlength: "200"
                }, null, 512), [
                  [We, e.node.mapFrom]
                ])
              ]),
              l("label", null, [
                te(o(u(w)("library", "Replacement value")), 1),
                ge(l("input", {
                  "onUpdate:modelValue": m[8] || (m[8] = (y) => e.node.mapTo = y),
                  maxlength: "200"
                }, null, 512), [
                  [We, e.node.mapTo]
                ])
              ])
            ])
          ])) : E("", !0),
          e.node.field === "author" ? (p(), h("div", E$, [
            l("label", null, [
              fe(Xe, {
                text: u(w)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + (r.value === "and" ? " " + u(w)("library", "Spaces around the word are required.") : "")
              }, {
                default: me(() => [
                  te(o(u(w)("library", "Separate authors by")), 1)
                ]),
                _: 1
              }, 8, ["text"]),
              ge(l("select", {
                "onUpdate:modelValue": m[9] || (m[9] = (y) => r.value = y)
              }, [
                l("option", x$, o(u(w)("library", "None (keep one name)")), 1),
                l("option", $$, o(u(w)("library", "Semicolon (;)")), 1),
                m[11] || (m[11] = l("option", { value: "ampersand" }, "&", -1)),
                l("option", O$, o(u(w)("library", "Word separator")) + ": " + o(wh.trim()), 1),
                l("option", N$, o(u(w)("library", "Custom separator")), 1)
              ], 512), [
                [it, r.value]
              ])
            ]),
            r.value === "custom" ? (p(), h("label", R$, [
              te(o(u(w)("library", "Custom separator")), 1),
              l("input", {
                value: e.node.customAuthorSeparator || "",
                maxlength: "100",
                onInput: s
              }, null, 40, I$)
            ])) : E("", !0),
            l("label", L$, [
              ge(l("input", {
                "onUpdate:modelValue": m[10] || (m[10] = (y) => e.node.reverseName = y),
                type: "checkbox"
              }, null, 512), [
                [qa, e.node.reverseName]
              ]),
              te(o(u(w)("library", "Convert Surname, Given name to Given name Surname")), 1)
            ])
          ])) : E("", !0)
        ], 64))
      ]);
    };
  }
}, D$ = ["aria-busy"], F$ = ["disabled"], M$ = {
  value: "",
  disabled: ""
}, U$ = ["value"], z$ = ["disabled"], j$ = ["disabled"], B$ = ["disabled"], H$ = ["disabled"], V$ = ["disabled"], q$ = {
  key: 0,
  role: "alert"
}, K$ = ["disabled"], G$ = {
  key: 1,
  role: "status"
}, kh = {
  __name: "InferencePatterns",
  props: { pattern: { type: String, default: "" }, mode: { type: String, default: "pattern" }, rule: { type: Object, default: null }, requestToken: { type: String, default: "" } },
  emits: ["choose", "choose-rule"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = j(() => i.mode === "guided"), r = j(() => a.value ? JSON.stringify(i.rule) : i.pattern), s = (q) => (q.kind || "pattern") === "guided" ? JSON.stringify(q.rule) : q.pattern, d = /* @__PURE__ */ G([]), c = /* @__PURE__ */ G(""), m = /* @__PURE__ */ G(""), v = /* @__PURE__ */ G(!1), y = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(""), T = /* @__PURE__ */ G([]), C = j(() => [
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
    ]), $ = j(() => [...a.value ? [] : C.value.map((q) => ({ ...q, id: `preset-${q.id}` })).filter((q) => !T.value.includes(q.id)), ...d.value.filter((q) => (q.kind || "pattern") === i.mode)].sort((q, B) => q.name.localeCompare(B.name))), I = j(() => $.value.find((q) => q.id === m.value));
    qe([r, $], () => {
      k.value = "", (!I.value || s(I.value) !== r.value) && (m.value = $.value.find((q) => s(q) === r.value)?.id || "");
    }, { immediate: !0 });
    const D = j(() => [w("library", "Patterns match paths relative to the selected folder. Adjust literal prefixes such as books/ when needed. Ambiguous names still need review."), I.value?.example ? `${w("library", "Example path")}: ${I.value.example}` : ""].filter(Boolean).join(`

`));
    function P(q) {
      const B = $.value.find((Y) => Y.id === q.target.value);
      B && (m.value = B.id, a.value ? n("choose-rule", JSON.parse(JSON.stringify(B.rule))) : n("choose", B.pattern), g.value = "", k.value = "");
    }
    async function N(q = "", B = null) {
      const Y = await fetch(`${Ki("/apps/library/api/inference/patterns")}${q}`, {
        method: B === null ? "GET" : "POST",
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "application/json", ...B === null ? {} : { "Content-Type": "application/json", requesttoken: i.requestToken } },
        ...B === null ? {} : { body: JSON.stringify(B) }
      });
      if (!Y.ok) throw new Error(Y.status === 409 ? w("library", "That name already exists. Choose a different name.") : Y.status === 422 ? w("library", "Check the definition and name. You can save up to 100 rules and patterns.") : w("library", "Could not load or save rules and patterns. Check your connection and try again."));
      return Y.json();
    }
    async function ce() {
      v.value = !0, y.value = "";
      try {
        const q = await N();
        d.value = q.patterns, T.value = q.hidden || [];
      } catch (q) {
        y.value = q.message;
      } finally {
        v.value = !1;
      }
    }
    async function J() {
      v.value = !0, y.value = "", g.value = "";
      try {
        const q = await N("", { name: c.value, ...a.value ? { kind: "guided", rule: i.rule } : { pattern: i.pattern } });
        d.value = [...d.value, q.saved].sort((B, Y) => B.name.localeCompare(Y.name)), m.value = q.saved.id, c.value = "", g.value = a.value ? w("library", "Rule saved to your account.") : w("library", "Pattern saved to your account.");
      } catch (q) {
        y.value = q.message;
      } finally {
        v.value = !1;
      }
    }
    async function x(q) {
      v.value = !0, y.value = "", g.value = "";
      try {
        await N(`/${q}/delete`, {}), d.value = d.value.filter((B) => B.id !== q), T.value = [...T.value, q], m.value = "", k.value = "", g.value = a.value ? w("library", "Saved rule deleted. The current preview is unchanged.") : w("library", "Saved pattern deleted. The current preview is unchanged.");
      } catch (B) {
        y.value = B.message;
      } finally {
        v.value = !1;
      }
    }
    return Et(ce), (q, B) => (p(), h("div", {
      class: "library-inference-templates",
      "aria-busy": v.value ? "true" : "false"
    }, [
      l("label", null, [
        fe(Xe, {
          text: a.value ? u(w)("library", "Select a rule to restore its assignments, splits, transformations and author options. Folder scope stays unchanged.") : D.value
        }, {
          default: me(() => [
            te(o(a.value ? u(w)("library", "Saved rule") : u(w)("library", "Pattern")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        ge(l("select", {
          "onUpdate:modelValue": B[0] || (B[0] = (Y) => m.value = Y),
          disabled: v.value,
          onChange: P
        }, [
          l("option", M$, o(a.value ? u(w)("library", "Custom rule") : u(w)("library", "Custom pattern")), 1),
          (p(!0), h(W, null, de($.value, (Y) => (p(), h("option", {
            key: Y.id,
            value: Y.id
          }, o(Y.name), 9, U$))), 128))
        ], 40, F$), [
          [it, m.value]
        ])
      ]),
      He(q.$slots, "default"),
      l("form", {
        onSubmit: Ce(J, ["prevent"])
      }, [
        l("label", null, [
          fe(Xe, {
            text: u(w)("library", "Saved privately to your account. Save changes under a new name; existing definitions are not overwritten. Folder scope and example paths are not saved.")
          }, {
            default: me(() => [
              te(o(a.value ? u(w)("library", "Rule name") : u(w)("library", "Pattern name")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ge(l("input", {
            "onUpdate:modelValue": B[1] || (B[1] = (Y) => c.value = Y),
            maxlength: "120",
            required: "",
            disabled: v.value
          }, null, 8, z$), [
            [We, c.value]
          ])
        ]),
        l("button", {
          class: "button secondary",
          disabled: v.value || !c.value.trim() || (a.value ? !e.rule : !e.pattern.trim())
        }, o(a.value ? u(w)("library", "Save current rule as new") : u(w)("library", "Save current pattern as new")), 9, j$),
        I.value && !k.value ? (p(), h("button", {
          key: 0,
          type: "button",
          class: "button secondary",
          disabled: v.value,
          onClick: B[2] || (B[2] = (Y) => k.value = I.value.id)
        }, o(a.value ? u(w)("library", "Delete rule") : u(w)("library", "Delete pattern")), 9, B$)) : E("", !0),
        k.value ? (p(), h(W, { key: 1 }, [
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: B[3] || (B[3] = (Y) => x(k.value))
          }, o(u(w)("library", "Confirm deletion")), 9, H$),
          l("button", {
            type: "button",
            class: "button secondary",
            disabled: v.value,
            onClick: B[4] || (B[4] = (Y) => k.value = "")
          }, o(u(w)("library", "Cancel")), 9, V$)
        ], 64)) : E("", !0)
      ], 32),
      y.value ? (p(), h("p", q$, [
        te(o(y.value) + " ", 1),
        l("button", {
          class: "button secondary",
          disabled: v.value,
          onClick: ce
        }, o(a.value ? u(w)("library", "Reload saved rules") : u(w)("library", "Reload saved patterns")), 9, K$)
      ])) : E("", !0),
      g.value ? (p(), h("p", G$, o(g.value), 1)) : E("", !0)
    ], 8, D$));
  }
}, W$ = ["aria-busy"], Y$ = ["disabled"], Z$ = {
  value: "",
  disabled: ""
}, X$ = ["value"], J$ = { class: "library-inference-path" }, Q$ = { class: "library-inference-checkbox" }, e3 = ["disabled"], t3 = ["disabled"], i3 = {
  key: 0,
  role: "status"
}, n3 = {
  key: 1,
  role: "alert"
}, a3 = ["disabled"], r3 = { key: 2 }, s3 = { class: "library-inference-folder-list" }, l3 = {
  key: 0,
  role: "status"
}, o3 = ["disabled", "onClick"], u3 = ["disabled", "onClick"], c3 = ["disabled"], d3 = {
  __name: "InferenceFolderRules",
  props: { rootId: { type: String, default: "" }, folder: { type: String, default: "" }, requestToken: { type: String, default: "" }, disabled: Boolean, scopePending: Boolean },
  emits: ["loaded"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G([]), r = /* @__PURE__ */ G([]), s = /* @__PURE__ */ G(""), d = /* @__PURE__ */ G(!0), c = /* @__PURE__ */ G(!1), m = /* @__PURE__ */ G(!1), v = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(""), g = j(() => i.disabled || c.value || m.value);
    let k = 0;
    async function T(D, P) {
      const N = await fetch(Ki(`/apps/library/api/inference/${D}`), {
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
      const D = ++k, P = i.rootId;
      if (r.value = [], y.value = "", v.value = "", n("loaded", { rootId: P, assignments: [] }), !!P) {
        c.value = !0;
        try {
          const [N, ce] = await Promise.all([T("patterns"), T(`folders?rootId=${encodeURIComponent(P)}`)]);
          if (D !== k) return;
          a.value = N.patterns, r.value = ce.assignments, a.value.some((J) => J.id === s.value) || (s.value = ""), n("loaded", { rootId: P, assignments: ce.assignments });
        } catch (N) {
          D === k && (v.value = N.message);
        } finally {
          D === k && (c.value = !1);
        }
      }
    }
    async function $() {
      if (!(g.value || i.scopePending || !s.value)) {
        m.value = !0, v.value = "";
        try {
          await T("folders", { rootId: i.rootId, folder: i.folder, recursive: d.value, definitionId: s.value }), await C();
        } catch (D) {
          v.value = D.message;
        } finally {
          m.value = !1;
        }
      }
    }
    async function I(D) {
      if (!g.value) {
        m.value = !0, v.value = "";
        try {
          await T(`folders/${D}/delete`, {}), await C();
        } catch (P) {
          v.value = P.message;
        } finally {
          m.value = !1;
        }
      }
    }
    return qe(() => i.rootId, C, { immediate: !0 }), wi(() => {
      k++;
    }), (D, P) => (p(), h("div", {
      class: "library-inference-folder-rules",
      "aria-busy": g.value ? "true" : "false"
    }, [
      l("form", {
        onSubmit: Ce($, ["prevent"])
      }, [
        l("label", null, [
          fe(Xe, {
            text: u(w)("library", "Save a guided rule or advanced pattern first. Assignments keep a fixed copy, even if the saved definition is later deleted. Rules only generate previews; they do not run on scans or change books.")
          }, {
            default: me(() => [
              te(o(u(w)("library", "Saved rule or pattern")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ge(l("select", {
            "onUpdate:modelValue": P[0] || (P[0] = (N) => s.value = N),
            disabled: g.value
          }, [
            l("option", Z$, o(u(w)("library", "Choose a saved definition")), 1),
            (p(!0), h(W, null, de(a.value, (N) => (p(), h("option", {
              key: N.id,
              value: N.id
            }, o(N.name), 9, X$))), 128))
          ], 8, Y$), [
            [it, s.value]
          ])
        ]),
        l("p", J$, [
          te(o(u(w)("library", "Assignment folder")) + ": ", 1),
          l("bdi", null, o(e.folder || "/"), 1)
        ]),
        l("label", Q$, [
          ge(l("input", {
            "onUpdate:modelValue": P[1] || (P[1] = (N) => d.value = N),
            type: "checkbox",
            disabled: g.value
          }, null, 8, e3), [
            [qa, d.value]
          ]),
          te(o(u(w)("library", "Use in subfolders")), 1)
        ]),
        l("button", {
          class: "button primary",
          disabled: g.value || e.scopePending || !s.value || !e.rootId
        }, o(u(w)("library", "Assign to this folder")), 9, t3)
      ], 32),
      e.scopePending ? (p(), h("p", i3, o(u(w)("library", "Load the folder before assigning a rule.")), 1)) : E("", !0),
      v.value ? (p(), h("p", n3, o(v.value), 1)) : E("", !0),
      l("button", {
        class: "button secondary",
        disabled: g.value,
        onClick: C
      }, o(u(w)("library", "Reload folder rules")), 9, a3),
      l("h3", null, [
        fe(Xe, {
          text: u(w)("library", "Rules match paths relative to their assigned folder. A deeper matching folder wins; if it does not match, an ancestor can be used. Equally specific conflicting rules require review. All assignments for this root are listed here.")
        }, {
          default: me(() => [
            te(o(u(w)("library", "Rules for this root")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      !r.value.length && !c.value ? (p(), h("p", r3, o(u(w)("library", "No folder rules assigned yet.")), 1)) : E("", !0),
      l("ul", s3, [
        (p(!0), h(W, null, de(r.value, (N) => (p(), h("li", {
          key: N.id,
          class: "library-inference-folder-entry"
        }, [
          l("strong", null, o(N.definition.name), 1),
          l("bdi", null, o(N.folder || "/"), 1),
          l("small", null, o(N.recursive ? u(w)("library", "Includes subfolders") : u(w)("library", "Direct children only")), 1),
          N.available ? E("", !0) : (p(), h("p", l3, o(u(w)("library", "Folder unavailable or replaced. Remove this assignment and assign again after checking the folder.")), 1)),
          y.value !== N.id ? (p(), h("button", {
            key: 1,
            type: "button",
            class: "button secondary",
            disabled: g.value,
            onClick: (ce) => y.value = N.id
          }, o(u(w)("library", "Remove assignment")), 9, o3)) : (p(), h(W, { key: 2 }, [
            l("button", {
              class: "button secondary",
              disabled: g.value,
              onClick: (ce) => I(N.id)
            }, o(u(w)("library", "Confirm removal")), 9, u3),
            l("button", {
              class: "button secondary",
              disabled: g.value,
              onClick: P[2] || (P[2] = (ce) => y.value = "")
            }, o(u(w)("library", "Cancel")), 9, c3)
          ], 64))
        ]))), 128))
      ])
    ], 8, W$));
  }
};
function f3(e, t, i, n = {}) {
  const a = [t, e].filter(Boolean).join("/"), r = i.filter((d) => d.available && (!d.folder || a.startsWith(`${d.folder}/`))).map((d) => ({ ...d, relative: d.folder ? a.slice(d.folder.length + 1) : a, depth: d.folder ? d.folder.split("/").length : 0 })).filter((d) => d.recursive || !d.relative.includes("/")).sort((d, c) => c.depth - d.depth || d.id.localeCompare(c.id)), s = [];
  for (const d of [...new Set(r.map((c) => c.depth))]) {
    const c = [];
    for (const g of r.filter((k) => k.depth === d)) {
      const k = g.definition, T = k.kind === "guided" ? Wo(g.relative, k.rule, n) : tg(g.relative, k.pattern, n), C = { id: g.id, name: k.name, folder: g.folder };
      s.push({ ...C, status: T.status }), ["ready", "conflict", "unchanged"].includes(T.status) && T.changes.length && c.push({ result: T, source: C });
    }
    if (s.some((g) => g.status === "ambiguous")) return { status: "ambiguous", changes: [], conflicts: [], attempts: s };
    if (!c.length) continue;
    const m = /* @__PURE__ */ new Map();
    for (const { result: g, source: k } of c) for (const T of g.changes) {
      const C = m.get(T.field) || /* @__PURE__ */ new Map(), $ = JSON.stringify(T.values || [T.value]), I = C.get($);
      I ? I.sources.push(k) : C.set($, { ...T, sources: [k] }), m.set(T.field, C);
    }
    const v = [], y = [];
    for (const [g, k] of m)
      k.size > 1 ? y.push({ field: g, proposals: [...k.values()] }) : v.push([...k.values()][0]);
    return { status: y.length ? "ambiguous" : v.some((g) => g.status === "conflict") ? "conflict" : v.some((g) => g.status === "ready") ? "ready" : "unchanged", changes: v, conflicts: y, attempts: s };
  }
  return { status: "unmatched", changes: [], conflicts: [], attempts: s };
}
const Sh = /* @__PURE__ */ new Set(["english", "en", "german", "deutsch", "de", "french", "français", "fr", "arabic", "ar"]), rg = /^[\p{L}\p{M}][\p{L}\p{M} .’'\-]*$/u;
function Ch(e) {
  const t = e.trim().split(/\s+/);
  return e.length <= 120 && t.length >= 2 && t.length <= 7 && rg.test(e);
}
function bs(e) {
  const t = e.split(",").map((i) => i.trim());
  return t.length === 2 && t.every((i) => i && rg.test(i)) && e.length <= 120;
}
function pr(e) {
  const t = e.split(",").map((i) => i.trim());
  return (bs(e) ? `${t[1]} ${t[0]}` : e).trim().replace(/\s+/g, " ").toLocaleLowerCase("en");
}
function ai(e, t = {}) {
  return { ...gu(e), ...t };
}
function Zn(e, t, ...i) {
  return { ...gu(), split: { delimiter: e, occurrence: t, children: i } };
}
function p3(e, t = []) {
  if (typeof e != "string" || !e || e.length > 2e3 || Js(e).length > 64) return [];
  const i = Js(e), n = i.length - 1, a = i[n], r = i.slice(0, -1), s = Go(e), d = [], c = [];
  let m = a, v = (Y) => Y, y = (Y) => Y, g = "", k = ai("title"), T = !1;
  const C = /^(.*\S) \(((?:18|19|20)\d{2})\)$/.exec(m), $ = !C && /^(.*\S) ((?:18|19|20)\d{2})$/.exec(m);
  C ? (m = C[1], v = (Y) => Zn(" (", "last", Y, ai("year", { suffix: ")" })), d.push("year-parentheses")) : $ && (m = $[1], v = (Y) => Zn(" ", "last", Y, ai("year")), d.push("year-trailing"), c.push("year-may-be-title"));
  const I = /^(.*\S) by (.+)$/.exec(m), D = /^(.*\S) - (.+)$/.exec(m), P = I || D, N = !I && D && (bs(D[1]) || Ch(D[1]) && r.some((Y) => pr(Y) === pr(D[1]))), ce = /^.+ #\d{1,3}(?:\.\d+)? - .+$/.test(m) && m.split(" - ").length === 2;
  N ? (g = D[1], m = D[2], y = (Y) => Zn(" - ", "first", ai("author"), Y), d.push("author-first"), c.push("author-needs-review")) : P && !ce && (Ch(P[2]) || bs(P[2])) && (g = P[2], m = P[1], y = (Y) => Zn(I ? " by " : " - ", "last", Y, ai("author")), d.push(I ? "author-by" : "author-dash"), r.some((Y) => pr(Y) === pr(g)) ? d.push("author-folder-agrees") : c.push("author-needs-review"));
  const J = /^(.*\S) #(\d{1,3}(?:\.\d+)?) - (.+)$/.exec(m), x = /^(\d{1,3}(?:\.\d+)?)\. (.+)$/.exec(m);
  if (J)
    k = Zn(" #", "first", ai("series"), Zn(" - ", "first", ai("seriesNumber"), ai("title"))), T = !0, d.push("series-inline");
  else if (x && r.length) {
    const Y = r.at(-1);
    !bs(Y) && !(g && pr(Y) === pr(g)) && !Sh.has(Y.toLowerCase()) && !Y.includes("_") && (k = Zn(". ", "first", ai("seriesNumber"), ai("title")), s.parts[n - 1] = ai("series"), T = !0, d.push("series-folder"), c.push("series-needs-review"));
  }
  if (s.parts[n] = v(y(k)), !g) {
    const Y = T ? n - 2 : n - 1;
    Y >= 0 && bs(i[Y]) && (s.parts[Y] = ai("author"), d.push("author-comma"), c.push("author-needs-review"));
  }
  for (let Y = r.length - 1; Y >= 0; Y--) {
    if (s.parts[Y].field !== "ignore") continue;
    const se = r[Y], H = se.indexOf("_"), K = H < 0 ? se : se.slice(0, H);
    if (Sh.has(K.toLowerCase())) {
      s.parts[Y] = H < 0 ? ai("language") : Zn("_", "first", ai("language"), ai("genre", { underscores: !0 })), d.push(H < 0 ? "language-folder" : "language-genre-folder");
      break;
    }
  }
  const q = [], B = (Y, se, H, K) => {
    const R = Wo(e, se);
    if (!["ready", "conflict", "unchanged"].includes(R.status)) return;
    const V = t.slice(0, 40).map((ie) => typeof ie == "string" ? ie : ie.path).filter((ie) => typeof ie == "string"), Q = V.filter((ie) => ["ready", "conflict", "unchanged"].includes(Wo(ie, se).status)).length;
    q.push({ id: Y, rule: se, clues: H, warnings: [...new Set(K)], preview: R.changes, matched: Q, total: V.length });
  };
  return d.length && B("detected", s, d, c), B("filename", Go(e), ["filename-title"], /(?:^|\D)(?:18|19|20)\d{2}(?:\D|$)/.test(a) ? ["year-may-be-title"] : []), q;
}
const h3 = { class: "library-inference-suggestions" }, v3 = ["disabled"], b3 = {
  value: "",
  disabled: ""
}, g3 = ["value"], m3 = {
  key: 0,
  "aria-live": "polite"
}, y3 = {
  __name: "InferenceSuggestions",
  props: { path: { type: String, default: "" }, sample: { type: Array, default: () => [] }, rule: { type: Object, default: null } },
  emits: ["choose"],
  setup(e, { emit: t }) {
    const i = e, n = t, a = /* @__PURE__ */ G(""), r = j(() => p3(i.path, i.sample)), s = j(() => r.value.find((v) => v.id === a.value)), d = j(() => ({
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
    }), qe(() => JSON.stringify(i.rule), (v) => {
      s.value && JSON.stringify(s.value.rule) !== v && (a.value = "");
    });
    function m(v) {
      a.value = v.target.value, s.value && n("choose", JSON.parse(JSON.stringify(s.value.rule)));
    }
    return (v, y) => (p(), h("div", h3, [
      l("label", null, [
        fe(Xe, {
          text: u(w)("library", "Suggest editable assignments from the selected example. Check the live preview and other books before applying. Matching counts describe this page and its structure, not verified metadata.") + (s.value ? `

` + s.value.clues.map((g) => d.value[g]).join(`
`) : "")
        }, {
          default: me(() => [
            te(o(u(w)("library", "Suggest fields")), 1)
          ]),
          _: 1
        }, 8, ["text"]),
        ge(l("select", {
          "onUpdate:modelValue": y[0] || (y[0] = (g) => a.value = g),
          disabled: !r.value.length,
          onChange: m
        }, [
          l("option", b3, o(u(w)("library", "Choose a suggestion")), 1),
          (p(!0), h(W, null, de(r.value, (g) => (p(), h("option", {
            key: g.id,
            value: g.id
          }, o(g.id === "filename" ? u(w)("library", "Title from filename") : u(w)("library", "Suggested assignments")), 9, g3))), 128))
        ], 40, v3), [
          [it, a.value]
        ])
      ]),
      s.value ? (p(), h("div", m3, [
        l("p", null, o(u(w)("library", "{matched} of {total} paths on this page match this structure.", { matched: s.value.matched, total: s.value.total })), 1),
        (p(!0), h(W, null, de(s.value.warnings, (g) => (p(), h("p", {
          key: g,
          class: "library-inference-suggestion-warning"
        }, o(c.value[g]), 1))), 128))
      ])) : E("", !0)
    ]));
  }
}, _3 = ["aria-label", "aria-busy"], w3 = {
  key: 0,
  role: "alert"
}, k3 = {
  key: 1,
  role: "status"
}, S3 = { class: "library-inference-step" }, C3 = ["disabled"], T3 = ["value"], A3 = ["disabled", "placeholder"], E3 = { class: "library-inference-checkbox" }, x3 = ["disabled"], $3 = ["disabled"], O3 = {
  key: 0,
  class: "library-inference-path"
}, N3 = ["aria-label"], R3 = ["disabled"], I3 = ["disabled", "onClick"], L3 = {
  key: 2,
  class: "library-inference-step"
}, P3 = { class: "library-inference-editor" }, D3 = { class: "library-inference-controls" }, F3 = { class: "library-inference-scope" }, M3 = ["value"], U3 = ["open"], z3 = { value: "guided" }, j3 = { value: "pattern" }, B3 = { value: "folders" }, H3 = {
  key: 0,
  role: "status"
}, V3 = { class: "library-inference-checkbox" }, q3 = {
  key: 2,
  class: "library-inference-pattern",
  open: ""
}, K3 = ["aria-label"], G3 = ["title"], W3 = {
  key: 0,
  "aria-live": "polite",
  "aria-atomic": "true"
}, Y3 = { class: "library-inference-live-status" }, Z3 = { key: 1 }, X3 = {
  key: 0,
  class: "library-inference-author-chips"
}, J3 = {
  key: 1,
  dir: "auto"
}, Q3 = { dir: "auto" }, eO = { key: 2 }, tO = { dir: "auto" }, iO = { key: 3 }, nO = { key: 2 }, aO = { key: 1 }, rO = {
  class: "library-inference-path",
  dir: "ltr"
}, sO = { class: "library-inference-step" }, lO = { value: "all" }, oO = ["value"], uO = { key: 0 }, cO = { class: "library-inference-path" }, dO = {
  key: 1,
  class: "library-inference-table-scroll"
}, fO = { key: 2 }, pO = ["aria-label"], hO = ["disabled"], vO = ["disabled"], bO = {
  __name: "PathInference",
  props: { requestToken: { type: String, default: "" } },
  setup(e) {
    const t = /* @__PURE__ */ G([]), i = /* @__PURE__ */ G(""), n = /* @__PURE__ */ G(""), a = /* @__PURE__ */ G(!0), r = /* @__PURE__ */ G([]), s = /* @__PURE__ */ G(1), d = /* @__PURE__ */ G(!1), c = /* @__PURE__ */ G(!1), m = /* @__PURE__ */ G(""), v = /* @__PURE__ */ G(""), y = /* @__PURE__ */ G(""), g = /* @__PURE__ */ G(""), k = /* @__PURE__ */ G(""), T = /* @__PURE__ */ G([]), C = /* @__PURE__ */ G(null), $ = /* @__PURE__ */ G("guided"), I = /* @__PURE__ */ G(0), D = /* @__PURE__ */ G("%folders%/%title%.%extension%"), P = /* @__PURE__ */ G("all"), N = /* @__PURE__ */ G(!0);
    let ce = 0;
    const J = j(() => [
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
    ]), x = j(() => Object.fromEntries(J.value)), q = j(() => ({
      ready: w("library", "Empty field suggestions"),
      conflict: w("library", "Existing values need review"),
      unmatched: w("library", "Unmatched paths"),
      ambiguous: w("library", "Ambiguous matches"),
      invalid: w("library", "Invalid pattern or value"),
      unchanged: w("library", "No changes")
    })), B = j(() => r.value.map(($e) => ({ ...$e, ...$.value === "folders" ? f3($e.path, k.value, T.value, $e.current) : $.value === "guided" ? Wo($e.path, C.value, $e.current) : tg($e.path, D.value, $e.current) }))), Y = j(() => B.value.find(($e) => $e.path === y.value)), se = j(() => B.value.filter(($e) => P.value === "all" || $e.status === P.value)), H = j(() => [...new Set(r.value.filter(($e) => $e.path.includes("/")).map(($e) => $e.path.split("/")[0]))]);
    function K($e) {
      n.value = [n.value.replace(/\/$/, ""), $e].filter(Boolean).join("/"), Ue();
    }
    function R() {
      n.value = n.value.replace(/\/$/, "").split("/").slice(0, -1).join("/"), Ue();
    }
    const V = j(() => B.value.reduce(($e, Ie) => ($e[Ie.status] = ($e[Ie.status] || 0) + 1, $e), {})), Q = j(() => i.value !== g.value || n.value.replace(/^\/+|\/+$/g, "") !== k.value), ie = j(() => Js(y.value));
    function Z() {
      !C.value && y.value && (C.value = Go(y.value));
    }
    function ue() {
      C.value = Go(y.value), I.value++, $.value = "guided";
    }
    function Te($e) {
      C.value = $e, I.value++, $.value = "guided";
    }
    function Pe($e) {
      Te($e), N.value = !1;
    }
    function Re($e) {
      D.value = $e, $.value = "pattern";
    }
    async function Ue($e = 1) {
      const Ie = ++ce;
      c.value = !0, m.value = "", r.value = [];
      try {
        const be = new URLSearchParams();
        i.value && (be.set("rootId", i.value), be.set("folder", n.value), be.set("recursive", a.value ? "1" : "0"), be.set("page", String($e)));
        const Fe = await fetch(`${Ki("/apps/library/api/inference/sample")}?${be}`, { credentials: "same-origin", cache: "no-store" });
        if (!Fe.ok) throw new Error(w("library", "Could not load this folder. Check its path and your access."));
        const st = await Fe.json();
        if (Ie !== ce) return;
        if (t.value = st.roots, !i.value && (i.value = String(st.roots[0]?.id || ""), i.value))
          return Ue();
        g.value !== i.value && (T.value = []), g.value = i.value;
        const ee = st.roots.find((S) => String(S.id) === i.value)?.path.replace(/\/$/, "") || "";
        k.value = st.scope.slice(ee.length).replace(/^\//, ""), r.value = st.items || [], s.value = st.page || 1, d.value = !!st.hasNext, v.value = st.scope || "", y.value = r.value[0]?.path || "", Z();
      } catch (be) {
        Ie === ce && (m.value = be.message);
      } finally {
        Ie === ce && (c.value = !1);
      }
    }
    function Ne($e) {
      $e.rootId === g.value && (T.value = $e.assignments);
    }
    function dt() {
      n.value = "", Ue();
    }
    return Et(() => Ue()), ($e, Ie) => (p(), h("section", {
      class: "library-inference",
      "aria-label": u(w)("library", "Extract metadata from paths"),
      "aria-busy": c.value ? "true" : "false"
    }, [
      l("h1", null, [
        fe(Xe, {
          text: u(w)("library", "Preview a naming rule, select fields and review before applying. Source files are never changed.")
        }, {
          default: me(() => [
            te(o(u(w)("library", "Extract metadata from paths")), 1)
          ]),
          _: 1
        }, 8, ["text"])
      ]),
      m.value ? (p(), h("p", w3, o(m.value), 1)) : E("", !0),
      c.value ? (p(), h("p", k3, o(u(w)("library", "Loading or saving…")), 1)) : E("", !0),
      l("section", S3, [
        l("h2", null, o(u(w)("library", "1. Choose a folder")), 1),
        l("form", {
          class: "library-inference-scope",
          onSubmit: Ie[3] || (Ie[3] = Ce((be) => Ue(), ["prevent"]))
        }, [
          l("label", null, [
            fe(Xe, {
              text: u(w)("library", "Up to 40 accessible indexed books per page. Counts below describe this sample, not the entire folder.")
            }, {
              default: me(() => [
                te(o(u(w)("library", "Library root")), 1)
              ]),
              _: 1
            }, 8, ["text"]),
            ge(l("select", {
              "onUpdate:modelValue": Ie[0] || (Ie[0] = (be) => i.value = be),
              disabled: c.value || !t.value.length,
              onChange: dt
            }, [
              (p(!0), h(W, null, de(t.value, (be) => (p(), h("option", {
                key: be.id,
                value: String(be.id)
              }, o(be.label), 9, T3))), 128))
            ], 40, C3), [
              [it, i.value]
            ])
          ]),
          l("label", null, [
            te(o(u(w)("library", "Subfolder relative to this root")), 1),
            ge(l("input", {
              "onUpdate:modelValue": Ie[1] || (Ie[1] = (be) => n.value = be),
              type: "text",
              disabled: c.value,
              placeholder: u(w)("library", "Leave empty for the whole root")
            }, null, 8, A3), [
              [We, n.value]
            ])
          ]),
          l("label", E3, [
            ge(l("input", {
              "onUpdate:modelValue": Ie[2] || (Ie[2] = (be) => a.value = be),
              type: "checkbox",
              disabled: c.value
            }, null, 8, x3), [
              [qa, a.value]
            ]),
            te(o(u(w)("library", "Include subfolders")), 1)
          ]),
          l("button", {
            class: "button primary",
            disabled: c.value || !i.value
          }, o(u(w)("library", "Load sample")), 9, $3)
        ], 32),
        v.value ? (p(), h("p", O3, o(v.value), 1)) : E("", !0),
        l("div", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Folders in this sample")
        }, [
          n.value ? (p(), h("button", {
            key: 0,
            class: "button secondary",
            disabled: c.value,
            onClick: R
          }, o(u(w)("library", "Parent folder")), 9, R3)) : E("", !0),
          (p(!0), h(W, null, de(H.value, (be) => (p(), h("button", {
            key: be,
            class: "button secondary",
            disabled: c.value,
            onClick: (Fe) => K(be)
          }, o(be) + "/", 9, I3))), 128))
        ], 8, N3)
      ]),
      r.value.length ? (p(), h("section", L3, [
        l("h2", null, o(u(w)("library", "2. Describe the structure")), 1),
        l("div", P3, [
          l("div", D3, [
            l("div", F3, [
              l("label", null, [
                fe(Xe, {
                  text: u(w)("library", "Assignments stay the same when you select another example. Reset them to use a different folder structure.")
                }, {
                  default: me(() => [
                    te(o(u(w)("library", "Example path")), 1)
                  ]),
                  _: 1
                }, 8, ["text"]),
                ge(l("select", {
                  "onUpdate:modelValue": Ie[4] || (Ie[4] = (be) => y.value = be),
                  onChange: Ie[5] || (Ie[5] = (be) => Z())
                }, [
                  (p(!0), h(W, null, de(r.value, (be) => (p(), h("option", {
                    key: be.id,
                    value: be.path
                  }, o(be.path), 9, M3))), 128))
                ], 544), [
                  [it, y.value]
                ])
              ])
            ]),
            fe(y3, {
              path: y.value,
              sample: r.value,
              rule: $.value === "guided" ? C.value : null,
              onChoose: Pe
            }, null, 8, ["path", "sample", "rule"]),
            l("details", {
              class: "library-inference-customize",
              open: N.value,
              onToggle: Ie[9] || (Ie[9] = (be) => N.value = be.target.open)
            }, [
              l("summary", null, o(u(w)("library", "Edit pattern")), 1),
              l("label", null, [
                te(o(u(w)("library", "Rule editor")), 1),
                ge(l("select", {
                  "onUpdate:modelValue": Ie[6] || (Ie[6] = (be) => $.value = be)
                }, [
                  l("option", z3, o(u(w)("library", "Guided assignments")), 1),
                  l("option", j3, o(u(w)("library", "Advanced pattern")), 1),
                  l("option", B3, o(u(w)("library", "Folder rules")), 1)
                ], 512), [
                  [it, $.value]
                ])
              ]),
              $.value === "folders" ? (p(), De(d3, {
                key: 0,
                "root-id": g.value,
                folder: k.value,
                "request-token": e.requestToken,
                disabled: c.value,
                "scope-pending": Q.value,
                onLoaded: Ne
              }, null, 8, ["root-id", "folder", "request-token", "disabled", "scope-pending"])) : E("", !0),
              $.value === "guided" && C.value ? (p(), h(W, { key: 1 }, [
                fe(kh, {
                  mode: "guided",
                  rule: C.value,
                  "request-token": e.requestToken,
                  onChooseRule: Te
                }, null, 8, ["rule", "request-token"]),
                l("button", {
                  class: "button secondary",
                  onClick: ue
                }, o(u(w)("library", "Reset assignments from this example")), 1),
                ie.value.length !== C.value.parts.length ? (p(), h("p", H3, o(u(w)("library", "This example has a different folder depth and does not match the rule.")), 1)) : E("", !0),
                (p(!0), h(W, null, de(C.value.parts, (be, Fe) => (p(), h("div", {
                  key: `${I.value}-${Fe}`
                }, [
                  l("h3", null, o(Fe === C.value.parts.length - 1 ? u(w)("library", "Filename") : u(w)("library", "Folder")) + " " + o(Fe + 1), 1),
                  fe(P$, {
                    node: be,
                    value: ie.value[Fe] || "",
                    fields: J.value
                  }, null, 8, ["node", "value", "fields"])
                ]))), 128)),
                l("label", V3, [
                  ge(l("input", {
                    "onUpdate:modelValue": Ie[7] || (Ie[7] = (be) => C.value.combineAuthors = be),
                    type: "checkbox"
                  }, null, 512), [
                    [qa, C.value.combineAuthors]
                  ]),
                  fe(Xe, {
                    text: u(w)("library", "Author order is preserved and exact duplicates are removed. Commas are only separators if you specify them.") + " " + u(w)("library", "Each author is stored separately and can be used to filter the catalogue.")
                  }, {
                    default: me(() => [
                      te(o(u(w)("library", "Combine authors from multiple parts")), 1)
                    ]),
                    _: 1
                  }, 8, ["text"])
                ])
              ], 64)) : E("", !0),
              $.value === "pattern" ? (p(), h("details", q3, [
                l("summary", null, o(u(w)("library", "Pattern and presets")), 1),
                fe(kh, {
                  pattern: D.value,
                  "request-token": e.requestToken,
                  onChoose: Re
                }, {
                  default: me(() => [
                    l("label", null, [
                      fe(Xe, {
                        text: u(w)("library", "Placeholders capture text. Separators must match exactly. %folder% ignores one folder; %folders%/ ignores any folder depth; %ignore% ignores one filename part.") + `

` + J.value.map((be) => `%${be[0]}%`).join(" · ")
                      }, {
                        default: me(() => [
                          te(o(u(w)("library", "Advanced pattern")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ge(l("input", {
                        "onUpdate:modelValue": Ie[8] || (Ie[8] = (be) => D.value = be),
                        maxlength: "1000",
                        spellcheck: "false",
                        dir: "ltr"
                      }, null, 512), [
                        [We, D.value]
                      ])
                    ])
                  ]),
                  _: 1
                }, 8, ["pattern", "request-token"])
              ])) : E("", !0)
            ], 40, U3)
          ]),
          l("aside", {
            class: "library-inference-live",
            "aria-label": u(w)("library", "Live preview")
          }, [
            l("h3", null, o(u(w)("library", "Live preview")), 1),
            l("p", {
              class: "library-inference-live-path",
              title: y.value
            }, o(y.value), 9, G3),
            Y.value ? (p(), h("div", W3, [
              l("p", Y3, o(q.value[Y.value.status]), 1),
              $.value === "folders" ? (p(), De(td, {
                key: 0,
                result: Y.value,
                labels: x.value,
                statuses: q.value
              }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
              Y.value.changes.length ? (p(), h("dl", Z3, [
                (p(!0), h(W, null, de(Y.value.changes, (be) => (p(), h("div", {
                  key: be.field,
                  class: ke(["library-inference-live-field", `library-inference-live-field--${be.status}`])
                }, [
                  l("dt", null, o(x.value[be.field]), 1),
                  l("dd", null, [
                    be.field === "author" && be.values ? (p(), h("span", X3, [
                      (p(!0), h(W, null, de(be.values, (Fe) => (p(), h("strong", {
                        key: Fe,
                        dir: "auto"
                      }, o(Fe), 1))), 128))
                    ])) : (p(), h("strong", J3, o(be.value || "—"), 1)),
                    l("small", null, [
                      te(o(u(w)("library", "Current value")) + ": ", 1),
                      l("span", Q3, o(be.before || "—"), 1)
                    ]),
                    be.raw !== be.value ? (p(), h("small", eO, [
                      te(o(u(w)("library", "Source text")) + ": ", 1),
                      l("span", tO, o(be.raw), 1)
                    ])) : E("", !0),
                    l("small", null, o(q.value[be.status]), 1),
                    be.sources ? (p(), h("small", iO, o(u(w)("library", "Matched rule")) + ": " + o(be.sources.map((Fe) => Fe.name).join(", ")), 1)) : E("", !0)
                  ])
                ], 2))), 128))
              ])) : Y.value.conflicts?.length ? E("", !0) : (p(), h("p", nO, o(u(w)("library", "No fields extracted from this example. Check the rule, separators and transformations.")), 1))
            ])) : E("", !0),
            $.value === "pattern" ? (p(), h("details", aO, [
              l("summary", null, o(u(w)("library", "Active pattern")), 1),
              l("code", rO, o(D.value), 1)
            ])) : E("", !0)
          ], 8, K3)
        ])
      ])) : E("", !0),
      l("section", sO, [
        l("h2", null, o(u(w)("library", "3. Review the sample")), 1),
        l("label", null, [
          fe(Xe, {
            text: u(w)("library", "Fill empty fields first. Existing values are flagged for review. No changes are applied in this preview.")
          }, {
            default: me(() => [
              te(o(u(w)("library", "Show results")), 1)
            ]),
            _: 1
          }, 8, ["text"]),
          ge(l("select", {
            "onUpdate:modelValue": Ie[10] || (Ie[10] = (be) => P.value = be)
          }, [
            l("option", lO, o(u(w)("library", "All")) + " (" + o(B.value.length) + ")", 1),
            (p(!0), h(W, null, de(q.value, (be, Fe) => (p(), h("option", {
              key: Fe,
              value: Fe
            }, o(be) + " (" + o(V.value[Fe] || 0) + ")", 9, oO))), 128))
          ], 512), [
            [it, P.value]
          ])
        ]),
        !se.value.length && !c.value ? (p(), h("p", uO, o(u(w)("library", "No sample results here. Try another folder, page or result filter.")), 1)) : E("", !0),
        (p(!0), h(W, null, de(se.value, (be) => (p(), h("details", {
          key: be.id,
          class: "library-inference-result"
        }, [
          l("summary", null, [
            l("span", cO, o(be.path), 1),
            l("strong", null, o(q.value[be.status]), 1)
          ]),
          $.value === "folders" ? (p(), De(td, {
            key: 0,
            result: be,
            labels: x.value,
            statuses: q.value
          }, null, 8, ["result", "labels", "statuses"])) : E("", !0),
          be.changes.length ? (p(), h("div", dO, [
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
                (p(!0), h(W, null, de(be.changes, (Fe) => (p(), h("tr", {
                  key: Fe.field
                }, [
                  l("th", null, o(x.value[Fe.field]), 1),
                  l("td", null, o(Fe.before || "—"), 1),
                  l("td", null, [
                    te(o(Fe.value), 1),
                    l("small", null, o(q.value[Fe.status]), 1)
                  ]),
                  l("td", null, o(Fe.raw), 1)
                ]))), 128))
              ])
            ])
          ])) : be.conflicts?.length ? E("", !0) : (p(), h("p", fO, o(u(w)("library", "Check separators, folder depth and field assignments. A unique interpretation is required.")), 1))
        ]))), 128)),
        l("nav", {
          class: "library-inference-presets",
          "aria-label": u(w)("library", "Sample pages")
        }, [
          l("button", {
            class: "button secondary",
            disabled: c.value || s.value === 1,
            onClick: Ie[11] || (Ie[11] = (be) => Ue(s.value - 1))
          }, o(u(w)("library", "Previous page")), 9, hO),
          l("span", null, o(s.value), 1),
          l("button", {
            class: "button secondary",
            disabled: c.value || !d.value,
            onClick: Ie[12] || (Ie[12] = (be) => Ue(s.value + 1))
          }, o(u(w)("library", "Next page")), 9, vO)
        ], 8, pO)
      ]),
      fe(ag, {
        class: "library-inference-step",
        results: B.value,
        labels: x.value,
        "request-token": e.requestToken,
        disabled: c.value || Q.value,
        context: JSON.stringify({ mode: $.value, pattern: $.value === "pattern" ? D.value : void 0, rule: $.value === "guided" ? C.value : void 0, folderRules: $.value === "folders" ? T.value : void 0, rootId: g.value, folder: k.value }),
        onChanged: Ie[13] || (Ie[13] = (be) => Ue(s.value))
      }, null, 8, ["results", "labels", "request-token", "disabled", "context"]),
      fe(p$, {
        definition: { mode: $.value, pattern: D.value, rule: C.value, rootId: g.value, folder: k.value, recursive: a.value },
        labels: x.value,
        statuses: q.value,
        "request-token": e.requestToken,
        disabled: c.value || Q.value || !g.value
      }, null, 8, ["definition", "labels", "statuses", "request-token", "disabled"])
    ], 8, _3));
  }
}, gO = ["aria-label", "title", "onClick"], mO = {
  key: 0,
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, yO = { id: "library-sidebar-filters-heading" }, _O = ["aria-label"], wO = ["value"], kO = ["name", "value"], SO = ["value"], CO = ["value"], TO = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, AO = ["title"], EO = ["placeholder"], xO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, $O = { value: "" }, OO = ["value"], NO = { class: "library-publisher-filter" }, RO = { for: "library-publisher-search" }, IO = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], LO = ["value"], PO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, DO = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, FO = ["id", "aria-selected"], MO = ["onClick"], UO = { class: "library-publication-filter" }, zO = { for: "library-publication-search" }, jO = ["placeholder", "aria-expanded"], BO = ["value"], HO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, VO = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, qO = ["onClick"], KO = { class: "library-year-filter" }, GO = { for: "library-year-search" }, WO = ["placeholder", "aria-expanded"], YO = ["value"], ZO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, XO = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, JO = ["onClick"], QO = { class: "library-creator-filter" }, e4 = { for: "library-creator-search" }, t4 = ["placeholder", "title", "aria-expanded"], i4 = ["value"], n4 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, a4 = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, r4 = ["onClick"], s4 = { class: "library-tag-filter" }, l4 = { for: "library-tag-search" }, o4 = ["placeholder", "aria-expanded"], u4 = ["value"], c4 = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, d4 = ["onClick"], f4 = { value: "" }, p4 = ["value"], h4 = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, v4 = { value: "" }, b4 = ["value"], g4 = { class: "library-folder-filter" }, m4 = { for: "library-folder-search" }, y4 = ["placeholder", "title", "aria-expanded"], _4 = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, w4 = ["onClick"], k4 = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, S4 = { value: "" }, C4 = ["value"], T4 = { value: "" }, A4 = ["value"], E4 = { class: "library-subject-filter" }, x4 = { for: "library-subject-search" }, $4 = ["placeholder", "title", "aria-expanded"], O4 = ["value"], N4 = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, R4 = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, I4 = ["onClick"], L4 = { class: "library-classification-filter" }, P4 = { for: "library-classification-search" }, D4 = ["placeholder", "title", "aria-expanded"], F4 = ["value"], M4 = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, U4 = ["onClick"], z4 = { value: "" }, j4 = { value: "1" }, B4 = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, H4 = {
  type: "submit",
  class: "button primary"
}, V4 = ["href"], q4 = ["lang", "dir"], K4 = ["aria-label"], G4 = ["href", "aria-label", "title", "onClick"], W4 = ["title"], Y4 = ["href"], Z4 = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, X4 = { class: "library-review-header" }, J4 = { class: "library-muted library-catalogue-eyebrow" }, Q4 = { id: "library-review-heading" }, eN = ["aria-label"], tN = ["href", "aria-current", "onClick"], iN = ["aria-label"], nN = ["name", "value"], aN = {
  type: "submit",
  class: "button secondary"
}, rN = ["aria-busy"], sN = { key: 0 }, lN = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, oN = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, uN = { class: "library-metadata-review-workbench-copy" }, cN = { class: "library-muted library-catalogue-eyebrow" }, dN = ["title"], fN = {
  key: 0,
  class: "library-metadata-review-card"
}, pN = {
  class: "library-bidi-human",
  dir: "auto"
}, hN = { class: "library-muted" }, vN = {
  class: "library-bidi-machine",
  dir: "ltr"
}, bN = { class: "library-metadata-review-fields" }, gN = {
  class: "library-bidi-human",
  dir: "auto"
}, mN = {
  class: "library-bidi-human",
  dir: "auto"
}, yN = {
  class: "library-bidi-human",
  dir: "auto"
}, _N = {
  class: "library-bidi-machine",
  dir: "ltr"
}, wN = {
  class: "library-bidi-human",
  dir: "auto"
}, kN = {
  class: "library-bidi-human",
  dir: "auto"
}, SN = ["action"], CN = ["value"], TN = ["value"], AN = ["disabled", "title"], EN = { class: "library-metadata-review-actions" }, xN = ["href"], $N = ["href"], ON = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, NN = ["href"], RN = ["aria-label"], IN = ["onClick"], LN = {
  class: "library-bidi-human",
  dir: "auto"
}, PN = {
  key: 0,
  class: "library-muted"
}, DN = {
  class: "library-bidi-human",
  dir: "auto"
}, FN = {
  key: 1,
  class: "library-scan-error"
}, MN = {
  class: "library-bidi-human",
  dir: "auto"
}, UN = ["onClick"], zN = ["href", "onClick"], jN = ["aria-label"], BN = ["href"], HN = {
  key: 1,
  class: "library-muted"
}, VN = { key: 0 }, qN = ["href"], KN = {
  key: 3,
  class: "library-muted"
}, GN = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, WN = { class: "library-home-header" }, YN = { class: "library-muted library-catalogue-eyebrow" }, ZN = { id: "library-home-heading" }, XN = ["aria-label"], JN = ["aria-label"], QN = ["href", "aria-label", "onClick"], eR = ["title"], tR = { class: "library-empty-actions" }, iR = ["href"], nR = ["href"], aR = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, rR = { id: "library-continue-heading" }, sR = ["href"], lR = {
  key: 0,
  class: "library-home-card-row"
}, oR = ["aria-label", "onClick"], uR = { class: "library-cover-frame" }, cR = ["src"], dR = { class: "library-cover-summary" }, fR = ["onClick"], pR = { dir: "auto" }, hR = {
  key: 0,
  class: "library-cover-creator"
}, vR = { dir: "auto" }, bR = ["href", "onClick"], gR = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, mR = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, yR = { id: "library-recent-heading" }, _R = ["href"], wR = {
  key: 0,
  class: "library-home-card-row"
}, kR = ["aria-label", "onClick"], SR = { class: "library-cover-frame" }, CR = ["src"], TR = { class: "library-cover-summary" }, AR = ["onClick"], ER = { dir: "auto" }, xR = {
  key: 0,
  class: "library-cover-creator"
}, $R = { dir: "auto" }, OR = ["href", "onClick"], NR = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, RR = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, IR = { id: "library-home-shelves-heading" }, LR = ["href"], PR = ["aria-label"], DR = ["href"], FR = { dir: "auto" }, MR = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, UR = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, zR = { id: "library-home-attention-heading" }, jR = { class: "library-muted" }, BR = ["href"], HR = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, VR = { class: "library-home-header" }, qR = { class: "library-muted library-catalogue-eyebrow" }, KR = { id: "library-shelves-landing-heading" }, GR = ["aria-label"], WR = ["aria-label"], YR = ["href", "aria-label", "onClick"], ZR = ["title"], XR = { class: "library-empty-actions" }, JR = ["href"], QR = ["href"], eI = ["aria-label"], tI = { class: "library-shelf-tree" }, iI = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, nI = { class: "library-muted" }, aI = { class: "library-empty-actions" }, rI = ["href"], sI = ["href"], lI = ["aria-busy"], oI = { class: "library-catalogue-header" }, uI = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, cI = ["aria-label"], dI = { class: "library-mobile-filter-count" }, fI = ["aria-label"], pI = ["value"], hI = ["name", "value"], vI = { class: "library-mobile-filter-group" }, bI = { class: "library-quick-filter-search" }, gI = ["placeholder"], mI = { value: "" }, yI = ["value"], _I = { class: "library-publisher-filter" }, wI = { for: "library-mobile-publisher-search" }, kI = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], SI = ["value"], CI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, TI = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, AI = ["id", "aria-selected"], EI = ["onClick"], xI = { class: "library-publication-filter" }, $I = { for: "library-mobile-publication-search" }, OI = ["placeholder", "aria-expanded"], NI = ["value"], RI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, II = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, LI = ["onClick"], PI = { class: "library-year-filter" }, DI = { for: "library-mobile-year-search" }, FI = ["placeholder", "aria-expanded"], MI = ["value"], UI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, zI = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, jI = ["onClick"], BI = { class: "library-creator-filter" }, HI = { for: "library-mobile-creator-search" }, VI = ["placeholder", "title", "aria-expanded"], qI = ["value"], KI = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, GI = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, WI = ["onClick"], YI = { value: "" }, ZI = ["value"], XI = { class: "library-subject-filter" }, JI = { for: "library-mobile-subject-search" }, QI = ["placeholder", "title", "aria-expanded"], eL = ["value"], tL = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, iL = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, nL = ["onClick"], aL = { class: "library-classification-filter" }, rL = { for: "library-mobile-classification-search" }, sL = ["placeholder", "title", "aria-expanded"], lL = ["value"], oL = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, uL = ["onClick"], cL = { class: "library-mobile-filter-group" }, dL = { value: "" }, fL = ["value"], pL = { class: "library-folder-filter" }, hL = { for: "library-mobile-folder-search" }, vL = ["placeholder", "title", "aria-expanded"], bL = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, gL = ["onClick"], mL = { class: "library-mobile-filter-group" }, yL = { value: "" }, _L = ["value"], wL = { value: "" }, kL = ["value"], SL = { value: "" }, CL = { value: "1" }, TL = { class: "library-mobile-filter-group" }, AL = { class: "library-tag-filter" }, EL = { for: "library-tag-search" }, xL = ["placeholder", "aria-expanded"], $L = ["value"], OL = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, NL = ["onClick"], RL = { value: "title" }, IL = { value: "recent" }, LL = { value: "publicationDate" }, PL = { value: "publication" }, DL = { value: "lastOpened" }, FL = { value: "format" }, ML = { value: "compact" }, UL = { value: "list" }, zL = { class: "library-mobile-filter-actions" }, jL = ["href"], BL = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, HL = ["aria-label"], VL = { class: "library-catalogue-control-band" }, qL = {
  id: "library-collections",
  class: "library-saved-collections"
}, KL = ["title"], GL = ["action", "title"], WL = ["value"], YL = ["value"], ZL = { class: "library-control-label" }, XL = ["placeholder", "disabled"], JL = ["disabled", "title"], QL = ["aria-label"], eP = ["name", "value"], tP = {
  class: "library-sort-control",
  "data-library-control": "sort"
}, iP = { value: "title" }, nP = { value: "recent" }, aP = { value: "publicationDate" }, rP = { value: "publication" }, sP = { value: "lastOpened" }, lP = { value: "format" }, oP = ["aria-label"], uP = ["aria-pressed"], cP = ["aria-pressed"], dP = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, fP = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, pP = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, hP = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, vP = { key: 0 }, bP = { key: 1 }, gP = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, mP = { class: "library-muted library-catalogue-eyebrow" }, yP = ["title"], _P = ["aria-label"], wP = { key: 0 }, kP = { key: 1 }, SP = { key: 2 }, CP = ["aria-label"], TP = { key: 0 }, AP = { key: 1 }, EP = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, xP = { class: "library-muted library-catalogue-eyebrow" }, $P = ["title"], OP = ["aria-label"], NP = ["href"], RP = {
  key: 0,
  class: "library-notice"
}, IP = { class: "library-publication-issue-label" }, LP = ["href"], PP = { class: "library-muted" }, DP = {
  key: 1,
  class: "library-publication-unknown-issues"
}, FP = ["title"], MP = ["href"], UP = { class: "library-catalogue-status-row" }, zP = { class: "library-muted library-filter-result-summary" }, jP = ["aria-label"], BP = { class: "library-pagination-range" }, HP = { key: 0 }, VP = ["href"], qP = {
  key: 1,
  class: "library-muted"
}, KP = ["href"], GP = {
  key: 3,
  class: "library-muted"
}, WP = ["title"], YP = { class: "library-empty-actions" }, ZP = ["href"], XP = { class: "library-muted" }, JP = ["title"], QP = { class: "library-empty-actions" }, e8 = ["href"], t8 = ["title"], i8 = ["aria-label"], n8 = ["href", "aria-label", "onClick"], a8 = ["title"], r8 = {
  key: 1,
  class: "library-muted"
}, s8 = { class: "library-empty-actions" }, l8 = ["href"], o8 = ["title"], u8 = { class: "library-empty-actions" }, c8 = ["href"], d8 = ["aria-label"], f8 = { class: "library-list-selection-actions" }, p8 = { class: "library-select-visible" }, h8 = ["checked"], v8 = ["title"], b8 = {
  key: 0,
  "aria-live": "polite"
}, g8 = ["aria-label"], m8 = { value: "" }, y8 = { value: "tag" }, _8 = { value: "untag" }, w8 = { value: "edit" }, k8 = { value: "covers" }, S8 = { value: "reset" }, C8 = ["action"], T8 = ["value"], A8 = ["placeholder"], E8 = ["title"], x8 = ["action"], $8 = ["value"], O8 = ["placeholder"], N8 = ["title"], R8 = ["action"], I8 = ["value"], L8 = ["name", "value"], P8 = ["title"], D8 = ["action"], F8 = ["value"], M8 = ["name", "value"], U8 = { name: "bulkEditField" }, z8 = { value: "publicationType" }, j8 = { value: "subtitle" }, B8 = { value: "creators" }, H8 = { value: "publication" }, V8 = { value: "series" }, q8 = { value: "seriesNumber" }, K8 = { value: "genre" }, G8 = { value: "publicationDate" }, W8 = { value: "language" }, Y8 = { value: "publisher" }, Z8 = { value: "subjects" }, X8 = { value: "classifications" }, J8 = ["placeholder"], Q8 = ["title"], e5 = ["action"], t5 = ["value"], i5 = ["name", "value"], n5 = ["title"], a5 = {
  key: 6,
  class: "library-duplicate-page-status",
  role: "status"
}, r5 = {
  key: 7,
  class: "library-catalogue-list-scroll",
  "data-library-catalogue-list-scroll": ""
}, s5 = {
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, l5 = { class: "hidden-visually" }, o5 = { class: "library-catalogue-list-selection" }, u5 = { class: "hidden-visually" }, c5 = { class: "library-catalogue-list-cover-heading" }, d5 = { class: "hidden-visually" }, f5 = { scope: "col" }, p5 = { scope: "col" }, h5 = { scope: "col" }, v5 = { scope: "col" }, b5 = { scope: "col" }, g5 = { scope: "col" }, m5 = { scope: "col" }, y5 = { class: "library-catalogue-list-selection" }, _5 = { class: "library-item-selection" }, w5 = ["checked", "aria-label", "onChange"], k5 = { class: "library-catalogue-list-cover-cell" }, S5 = ["aria-label", "onClick"], C5 = ["src"], T5 = {
  scope: "row",
  class: "library-catalogue-list-title-cell"
}, A5 = ["onClick"], E5 = {
  class: "library-bidi-human",
  dir: "auto"
}, x5 = ["href"], $5 = { class: "library-catalogue-list-creators" }, O5 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, N5 = ["aria-label"], R5 = ["datetime"], I5 = ["aria-label"], L5 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, P5 = ["aria-label"], D5 = ["dir"], F5 = ["aria-label"], M5 = {
  key: 0,
  class: "library-bidi-human",
  dir: "auto"
}, U5 = ["aria-label"], z5 = { class: "library-catalogue-list-actions" }, j5 = ["href", "onClick"], B5 = ["onClick"], H5 = { class: "library-item-selection" }, V5 = ["checked", "aria-label", "onChange"], q5 = ["aria-labelledby", "aria-expanded", "onClick"], K5 = ["id"], G5 = ["action", "onSubmit"], W5 = ["value"], Y5 = ["value"], Z5 = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], X5 = ["data-library-star-error"], J5 = { class: "library-cover-summary" }, Q5 = { class: "library-cover-primary" }, eD = ["href"], tD = ["id"], iD = ["onClick"], nD = {
  class: "library-bidi-human",
  dir: "auto"
}, aD = {
  key: 1,
  class: "library-cover-creator"
}, rD = {
  class: "library-bidi-human",
  dir: "auto"
}, sD = {
  key: 2,
  class: "library-cover-context"
}, lD = {
  class: "library-bidi-human",
  dir: "auto"
}, oD = ["aria-label"], uD = { class: "library-pagination-range" }, cD = { key: 0 }, dD = ["href"], fD = {
  key: 1,
  class: "library-muted"
}, pD = ["href"], hD = {
  key: 3,
  class: "library-muted"
}, vD = { class: "library-sidebar-content" }, bD = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, gD = ["role"], mD = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, yD = { class: "library-sidebar-publication-header" }, _D = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, wD = ["src"], kD = { class: "library-sidebar-publication-summary" }, SD = { class: "library-muted library-catalogue-eyebrow" }, CD = {
  class: "library-bidi-human",
  dir: "auto"
}, TD = { key: 0 }, AD = {
  class: "library-bidi-machine",
  dir: "ltr"
}, ED = { class: "library-detail-drawer-actions" }, xD = ["href"], $D = ["aria-label"], OD = ["aria-current", "onClick"], ND = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, RD = { id: "library-sidebar-overview-heading" }, ID = {
  key: 0,
  class: "library-sidebar-description"
}, LD = {
  class: "library-bidi-human",
  dir: "auto"
}, PD = { class: "library-detail-drawer-facts" }, DD = { key: 0 }, FD = ["href", "title"], MD = {
  class: "library-bidi-human",
  dir: "auto"
}, UD = { key: 1 }, zD = ["href", "title"], jD = { key: 1 }, BD = { key: 2 }, HD = { key: 2 }, VD = ["href", "title"], qD = {
  class: "library-bidi-human",
  dir: "auto"
}, KD = { key: 3 }, GD = { class: "library-detail-facet-list" }, WD = ["href", "title", "onClick"], YD = {
  class: "library-bidi-machine",
  dir: "ltr"
}, ZD = { key: 4 }, XD = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, JD = { id: "library-sidebar-metadata-heading" }, QD = ["placeholder"], eF = ["onUpdate:modelValue", "aria-label", "placeholder"], tF = ["onUpdate:modelValue", "aria-label"], iF = ["onClick"], nF = {
  key: 0,
  role: "alert"
}, aF = {
  key: 1,
  role: "status"
}, rF = ["disabled"], sF = {
  key: 1,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, lF = { id: "library-sidebar-suggestions-heading" }, oF = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, uF = { id: "library-sidebar-activity-heading" }, cF = { class: "library-detail-drawer-facts" }, dF = { key: 0 }, fF = { key: 1 }, pF = { key: 2 }, hF = { class: "library-detail-drawer-file" }, vF = ["href"], bF = { dir: "ltr" }, gF = {
  key: 1,
  dir: "ltr"
}, mF = ["aria-label"], yF = ["href"], _F = { dir: "auto" }, wF = ["aria-label"], kF = ["disabled"], SF = ["disabled"], CF = 20, TF = "/apps/library", AF = 2147483647, EF = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = P_(w, () => `${al()}:${Wv()}`), i = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], a = Object.freeze([
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
        const F = [...new Set([...b.keys()].filter((Ae) => Ae === f || Ae.startsWith(`${f}[`)))], oe = F.reduce((Ae, Be) => Ae + b.getAll(Be).length, 0);
        if (oe > 1 || F.some((Ae) => Ae !== f)) {
          for (const Ae of F) b.delete(Ae);
          continue;
        }
        f !== "status" && oe === 1 && !s(f, b.get(f)) && b.delete(f);
      }
      return b;
    }
    function c(_) {
      return Object.keys(r).some((b) => _.getAll(b).length === 1 && s(b, _.get(b)));
    }
    function m(_) {
      return Object.fromEntries(Object.entries(_ || {}).filter(([b, f]) => b === "status" || !Object.prototype.hasOwnProperty.call(r, b) || s(b, f)));
    }
    const v = Object.freeze(["compact", "list"]);
    function y(_) {
      return v.includes(_) ? _ : "compact";
    }
    const g = /* @__PURE__ */ Mt({
      ...i.state,
      items: i.state.items || [],
      activeFilters: i.state.activeFilters || {},
      cataloguePagination: i.state.cataloguePagination || {}
    }), k = /* @__PURE__ */ Mt((g.items || []).map((_) => ({ ..._ }))), T = j(() => k), C = j(() => g.shelves || []), $ = j(() => g.formats || []), I = j(() => g.publicationTypes?.length ? g.publicationTypes : n), D = j(() => g.publications || []), P = j(() => g.publicationIssueContext || null), N = j(() => g.scanStatuses || []), ce = j(() => g.workflowStatuses || []), J = j(() => g.cataloguePagination || {
      page: 1,
      limit: 100,
      total: T.value.length,
      visible: T.value.length,
      from: T.value.length > 0 ? 1 : 0,
      to: T.value.length,
      previousUrl: "",
      nextUrl: ""
    }), x = /* @__PURE__ */ Mt({
      q: g.activeFilters?.q || "",
      view: y(g.activeFilters?.view),
      type: g.activeFilters?.type || "",
      publisher: g.activeFilters?.publisher || "",
      publication: g.activeFilters?.publication || "",
      year: g.activeFilters?.year || "",
      language: g.activeFilters?.language || "",
      creator: g.activeFilters?.creator || "",
      format: g.activeFilters?.format || "",
      tag: g.activeFilters?.tag || "",
      shelf: g.activeFilters?.shelf || "",
      folder: g.activeFilters?.folder || "",
      status: g.activeFilters?.status || "",
      workflowStatus: g.activeFilters?.workflowStatus || "",
      subject: g.activeFilters?.subject || "",
      classification: g.activeFilters?.classification || "",
      scannerConflicts: g.activeFilters?.scannerConflicts || "",
      starred: g.activeFilters?.starred || "",
      recentlyOpened: g.activeFilters?.recentlyOpened || "",
      needsMetadata: g.activeFilters?.needsMetadata || "",
      coverReview: g.activeFilters?.coverReview || "",
      noCreator: g.activeFilters?.noCreator || "",
      noPublication: g.activeFilters?.noPublication || "",
      noDate: g.activeFilters?.noDate || "",
      titleFromFilename: g.activeFilters?.titleFromFilename || "",
      noDescription: g.activeFilters?.noDescription || "",
      unsupportedContainer: g.activeFilters?.unsupportedContainer || "",
      weakMetadata: g.activeFilters?.weakMetadata || "",
      unreviewedImports: g.activeFilters?.unreviewedImports || "",
      sort: g.activeFilters?.sort || "title"
    });
    for (const _ of Object.keys(r))
      _ !== "status" && (s(_, x[_]) || (x[_] = ""));
    const q = /* @__PURE__ */ G(x.publication), B = /* @__PURE__ */ G(x.q), Y = /* @__PURE__ */ G(!1), se = /* @__PURE__ */ G(null), H = j(() => {
      const _ = q.value.trim().toLocaleLowerCase();
      return (_ !== "" && se.value !== null ? se.value : D.value).filter((f) => _ === "" || f.toLocaleLowerCase().includes(_)).slice(0, CF);
    });
    qe(() => x.publication, (_) => {
      q.value = _ || "";
    }), qe(() => x.q, (_) => {
      B.value = _ || "";
    });
    let K = null, R = null, V = 0;
    qe(q, (_) => {
      window.clearTimeout(K), R?.abort(), R = null, se.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++V;
      K = window.setTimeout(() => {
        Bg(b, f);
      }, 200);
    });
    const Q = /* @__PURE__ */ G(x.publisher), ie = /* @__PURE__ */ G(!1), Z = /* @__PURE__ */ G(null), ue = j(() => Z.value || []);
    qe(() => x.publisher, (_) => {
      Q.value = _ || "";
    });
    let Te = null, Pe = null, Re = 0;
    qe(Q, (_) => {
      window.clearTimeout(Te), Pe?.abort(), Pe = null, Z.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++Re;
      Te = window.setTimeout(() => {
        Dg(b, f);
      }, 200);
    });
    const Ue = /* @__PURE__ */ G(x.creator), Ne = /* @__PURE__ */ G(!1), dt = /* @__PURE__ */ G(null), $e = j(() => dt.value || []);
    qe(() => x.creator, (_) => {
      Ue.value = _ || "";
    });
    let Ie = null, be = null, Fe = 0;
    qe(Ue, (_) => {
      window.clearTimeout(Ie), be?.abort(), be = null, dt.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++Fe;
      Ie = window.setTimeout(() => {
        Pg(b, f);
      }, 200);
    });
    const st = /* @__PURE__ */ G(x.folder), ee = /* @__PURE__ */ G(!1), S = /* @__PURE__ */ G(null), O = j(() => S.value || []);
    qe(() => x.folder, (_) => {
      st.value = _ || "";
    });
    let L = null, z = null, M = 0;
    qe(st, (_) => {
      window.clearTimeout(L), z?.abort(), z = null, S.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++M;
      L = window.setTimeout(() => {
        zg(b, f);
      }, 200);
    });
    const X = /* @__PURE__ */ G(x.subject), ne = /* @__PURE__ */ G(!1), re = /* @__PURE__ */ G(null), pe = j(() => re.value || []);
    qe(() => x.subject, (_) => {
      X.value = _ || "";
    });
    let ae = null, xe = null, ye = 0;
    qe(X, (_) => {
      window.clearTimeout(ae), xe?.abort(), xe = null, re.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++ye;
      ae = window.setTimeout(() => {
        Fg(b, f);
      }, 200);
    });
    const we = /* @__PURE__ */ G(x.classification), Oe = /* @__PURE__ */ G(!1), ze = /* @__PURE__ */ G(null), Ve = j(() => ze.value || []);
    qe(() => x.classification, (_) => {
      we.value = _ || "";
    });
    let Ke = null, ut = null, ft = 0;
    qe(we, (_) => {
      window.clearTimeout(Ke), ut?.abort(), ut = null, ze.value = null;
      const b = String(_ || "").trim();
      if (b.length < 3) return;
      const f = ++ft;
      Ke = window.setTimeout(() => {
        Mg(b, f);
      }, 200);
    });
    const bt = /* @__PURE__ */ G(x.tag), mt = /* @__PURE__ */ G(!1), Nt = /* @__PURE__ */ G(null), oi = j(() => Nt.value || []);
    qe(() => x.tag, (_) => {
      bt.value = _ || "";
    });
    let kt = null, Rt = null, cn = 0;
    qe(bt, (_) => {
      window.clearTimeout(kt), Rt?.abort(), Rt = null, Nt.value = null;
      const b = String(_ || "").trim();
      if (b.length < 2) return;
      const f = ++cn;
      kt = window.setTimeout(() => {
        Ug(b, f);
      }, 200);
    });
    const Ht = /* @__PURE__ */ G(x.year), ui = /* @__PURE__ */ G(!1), Un = /* @__PURE__ */ G(null), pi = j(() => Un.value || []);
    qe(() => x.year, (_) => {
      Ht.value = _ || "";
    });
    let Gi = null, pa = null, Wa = 0;
    qe(Ht, (_) => {
      window.clearTimeout(Gi), pa?.abort(), pa = null, Un.value = null;
      const b = String(_ || "").trim();
      if (b.length < 2) return;
      const f = ++Wa;
      Gi = window.setTimeout(() => {
        jg(b, f);
      }, 200);
    });
    const Ar = Object.fromEntries(Object.keys(x).map((_) => [_, _ === "sort" ? "title" : _ === "view" ? "compact" : ""])), Er = window.location.pathname.indexOf(TF), dn = Er >= 0 ? window.location.pathname.slice(0, Er) : "", Wi = {
      catalogue: `${dn}/apps/library/`,
      review: `${dn}/apps/library/?scannerConflicts=1`,
      settings: `${dn}/settings/user/library`
    };
    function Yi(_, b) {
      if (typeof _ != "string" || _ === "") return b;
      try {
        const f = dn ? `${dn}/` : "/";
        let F = _;
        for (let oe = 0; oe < 5; oe += 1) {
          if (!F.startsWith("/") || F.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(F)) return b;
          const Ae = new URL(F, window.location.origin);
          if (Ae.origin !== window.location.origin || !Ae.pathname.startsWith(f)) return b;
          const Be = F.split(/[?#]/, 1)[0];
          for (const bi of Be.split("/")) {
            let Xi = bi;
            for (let or = 0; or < 5; or += 1) {
              const Ji = decodeURIComponent(Xi);
              if (/[\\/\u0000-\u001f\u007f]/.test(Ji) || Ji === "." || Ji === "..") return b;
              if (Ji === Xi) break;
              if (Xi = Ji, or === 4) return b;
            }
          }
          const Je = decodeURI(F);
          if (Je === F) return _;
          F = Je;
        }
        return b;
      } catch {
        return b;
      }
    }
    const Vt = j(() => Yi(g.settingsUrl, Wi.settings)), lt = j(() => Yi(g.catalogueRootUrl, Wi.catalogue)), xr = j(() => Yi(g.homeUrl, `${Wi.catalogue}?home=1`)), Ya = j(() => Yi(g.shelvesUrl, `${Wi.catalogue}?shelves=1`)), sl = j(() => Yi(g.reviewUrl || g.scannerConflictReviewUrl, Wi.review)), ha = j(() => Object.entries(r).some(([_, b]) => x[_] === b)), Za = j(() => a.reduce((_, b) => _ + Number(Iu.value[b.countKey] || 0), 0)), zn = j(() => g.surface === "home"), fn = j(() => g.surface === "shelves"), va = j(() => g.surface === "duplicates"), Ii = j(() => g.surface === "inference"), ba = j(() => g.surface === "lists"), jn = j(() => `${lt.value}?lists=1`), yt = Number(new URLSearchParams(window.location.search).get("addToList")) || null, pn = /* @__PURE__ */ G([]), Li = /* @__PURE__ */ G("");
    async function $r() {
      try {
        pn.value = (await na()).lists;
      } catch {
      }
    }
    Et($r);
    const Or = j(() => !va.value && !Ii.value && !ba.value && !zn.value && !fn.value && !ha.value && !x.starred && x.recentlyOpened !== "1" && !x.shelf), ll = j(() => [
      { key: "home", name: t("library", "Home"), href: xr.value, active: zn.value },
      { key: "all", name: t("library", "All publications"), href: lt.value, active: Or.value },
      { key: "starred", name: t("library", "Starred"), href: `${lt.value}?starred=1`, active: x.starred === "1" },
      { key: "continue", name: t("library", "Continue reading"), href: `${lt.value}?recentlyOpened=1&sort=lastOpened`, active: x.recentlyOpened === "1" },
      { key: "shelves", name: t("library", "Shelves"), href: Ya.value, active: fn.value || !!x.shelf },
      { key: "collections", name: t("library", "Collections"), href: `${lt.value}#library-collections`, active: !1 }
    ]), ol = j(() => Fr.value.map((_) => ({
      key: `collection-${_.id}`,
      rawName: _.name,
      id: _.id,
      name: _.countPending ? _.name : `${_.name} (${Ti("library", "%n item", "%n items", Number(_.count || 0))})`,
      href: nm(_.filters),
      active: am(_.filters)
    }))), _t = j(() => g.requestToken || ""), Nr = j(() => !!g.duplicateSuggestions), mu = j(() => JSON.stringify(T.value.map((_) => [_.id, _.title, _.creators, _.publicationDate]))), yu = j(() => JSON.parse(mu.value).map((_) => Number(_[0]))), { results: qt, status: ul } = Qb(yu, Nr, _t);
    function Pi(_, b) {
      const f = String(_?.recordOpenUrl || "");
      if (!f || !_t.value) return;
      const F = new URLSearchParams({ requesttoken: _t.value });
      try {
        if (navigator.sendBeacon) {
          const oe = new Blob([F.toString()], { type: "application/x-www-form-urlencoded" });
          navigator.sendBeacon(f, oe);
          return;
        }
      } catch {
      }
      fetch(f, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: _t.value },
        body: F,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const Di = j(() => g.catalogueEndpointUrl || "/apps/library/catalogue"), _u = j(() => g.shelfChildrenUrl || "/apps/library/shelves/children"), Xa = j(() => g.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), cl = j(() => g.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), wu = j(() => g.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), dl = j(() => g.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), fl = j(() => g.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), Ja = j(() => g.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), Rr = j(() => g.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Qa = j(() => g.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Bn = j(() => g.itemSidebarUrlTemplate || `${dn}/apps/library/items/__ITEM_ID__/sidebar`), ga = j(() => g.batchTagUrl || "/apps/library/bulk/tags"), ki = j(() => g.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), ku = j(() => g.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), er = j(() => g.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Su = j(() => g.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Ir = j(() => g.scannerConflictReviewUrl || "?scannerConflicts=1");
    g.importHealthSummary, g.importHealthSummary && Object.keys(g.importHealthSummary).length > 0;
    const tr = j(() => g.discoveryPage === "publication"), ir = j(() => g.discoveryPage === "year"), nr = j(() => g.discoveryPage === "creator"), Lr = j(() => tr.value || ir.value || nr.value), Pr = j(() => g.discoveryTitle || x.publication || x.year || x.creator || ""), Cu = j(() => Lr.value ? Pr.value : t("library", "Library")), pl = j(() => nr.value ? t("library", "Creator") : ir.value ? t("library", "Publication year") : t("library", "Publication / series")), Dr = j(() => Number(g.rootCount || 0)), ar = j(() => Number(g.enabledRootCount || 0)), ma = j(() => Dr.value === 0), he = j(() => Dr.value > 0 && ar.value === 0), A = j(() => Mr.value.length > 0), U = /* @__PURE__ */ G(!1), le = /* @__PURE__ */ G(null), _e = /* @__PURE__ */ G(null), Ee = {
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
    }, Me = {
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
    }, ct = {
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
    }, pt = j(() => {
      if (typeof window > "u") return "";
      const _ = new URLSearchParams(window.location.search);
      if (_.get("batchMetadataApplyResult") !== "1") return "";
      const b = _.get("batchMetadataField") || "field", f = _.get("batchMetadataApplied") || "0", F = _.get("batchMetadataUnchanged") || "0", oe = _.get("batchMetadataSkipped") || "0";
      return t("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: b, unchanged: F, skipped: oe });
    }), It = j(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? t("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Lt = j(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? t("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Fr = j(() => g.savedCollections || []), Pt = j(() => g.savedCollectionSaveUrl || "/apps/library/collections"), sg = j(() => g.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), jd = v, rr = j(() => jd.includes(x.view) ? x.view : "compact"), lg = j(() => ({
      "library-cover-gallery--compact": rr.value === "compact"
    }));
    function og(_) {
      const b = String(_ || "").trim();
      if (b.length <= 32) return b;
      const f = b.split("/").filter(Boolean);
      return f.length > 0 ? `…/${f.at(-1)}` : b;
    }
    function ug(_, b) {
      const f = String(b || "").trim();
      if (f === "" || Me[_] === f) return "";
      if (_ === "format") return f.toUpperCase();
      if (_ === "folder") return og(f);
      const F = ct[_]?.[f];
      return F ? t("library", F) : f;
    }
    function cg(_, b) {
      const f = String(x[_] || "").trim(), F = ug(_, f), oe = t("library", b);
      return {
        key: _,
        label: oe,
        value: f,
        displayValue: F,
        title: F ? `${oe}: ${f}` : oe
      };
    }
    const Mr = j(() => Object.entries(Ee).map(([_, b]) => cg(_, b)).filter((_) => _.value !== "" && !(_.key === "sort" && _.value === "title") && !(_.key === "view" && _.value === "compact"))), Zi = j(() => Mr.value.filter((_) => !["sort", "view"].includes(_.key))), hl = j(() => Mr.value.length), Bd = j(() => {
      const _ = new URLSearchParams();
      for (const f of Zi.value) _.set(f.key, f.value);
      const b = _.toString();
      return `${lt.value}${b ? `?${b}` : ""}`;
    }), Ur = j(() => Zi.value[0] || null), dg = j(() => B.value.trim() !== String(x.q || "").trim()), fg = j(() => String(x.q || "").trim() !== "" || dg.value);
    function hi(_) {
      return ({
        q: B,
        publisher: Q,
        publication: q,
        creator: Ue,
        subject: X,
        year: Ht,
        folder: st,
        classification: we,
        tag: bt
      }[_]?.value ?? "").trim() !== String(x[_] || "").trim();
    }
    function Fi(_) {
      return hi(_) ? _ === "q" ? t("library", "Not applied yet — press Enter or Apply.") : t("library", "Press Enter or Apply to use this value.") : "";
    }
    function hn(_) {
      return { "library-filter-apply--pending": hi(_) };
    }
    const pg = j(() => hl.value > 0 ? t("library", "Filters ({count})", { count: hl.value }) : t("library", "Filters")), hg = j(() => hl.value > 0 ? t("library", "Open filters panel; {count} active filters", { count: hl.value }) : t("library", "Open filters panel")), vg = j(() => Ti("library", "Show %n item", "Show %n items", Number(J.value.total || 0)));
    function bg(_) {
      U.value = _.currentTarget?.open === !0, U.value && xt(() => {
        le.value?.focus?.();
      });
    }
    const gg = /* @__PURE__ */ new Set([
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
    ]), Hd = j(() => Object.entries(m(x)).filter(([_, b]) => !gg.has(_) && String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), mg = j(() => Object.entries(x).filter(([_, b]) => !["q", "sort", "starred"].includes(_) && String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), vl = j(() => Object.entries(m(x)).filter(([_, b]) => String(b || "").trim() !== "").map(([_, b]) => ({ key: _, value: b }))), yg = j(() => vl.value.filter(({ key: _, value: b }) => _ !== "q" && !(_ === "sort" && b === "title"))), bl = j(() => g.homeRows || { continueReading: [], recentlyAdded: [] }), Vd = j(() => g.homeShelves || []), qd = j(() => g.shelfTree || []), Tu = j(() => g.needsAttention || { count: 0, url: `${lt.value}?needsMetadata=1` }), ti = /* @__PURE__ */ G([]), gl = j(() => new Set(ti.value));
    function Kd(_, b) {
      const f = new Set(ti.value);
      b ? f.add(Number(_)) : f.delete(Number(_)), ti.value = [...f];
    }
    function _g(_) {
      ti.value = _.currentTarget.checked ? T.value.map((b) => Number(b.id)) : [];
    }
    function wg() {
      const _ = new Set(T.value.map((b) => Number(b.id)));
      ti.value = ti.value.filter((b) => _.has(b));
    }
    function kg(_) {
      const b = _.target;
      if (b instanceof HTMLFormElement) {
        b.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of ti.value) {
          const F = document.createElement("input");
          F.type = "hidden", F.name = "itemIds[]", F.value = String(f), F.dataset.librarySelectedId = "1", b.appendChild(F);
        }
      }
    }
    const Se = /* @__PURE__ */ G(null), ya = /* @__PURE__ */ G(null), ii = /* @__PURE__ */ Mt({ loading: !1, error: "", missing: !1 }), _a = /* @__PURE__ */ G("overview"), Mi = /* @__PURE__ */ Mt({ saving: !1, saved: !1, error: "" }), gt = /* @__PURE__ */ Mt({ title: "", publicationDate: "", series: "", seriesNumber: "", genre: "", identifiers: [] }), Gd = /* @__PURE__ */ G(null), wa = /* @__PURE__ */ G(null), ka = /* @__PURE__ */ G(!1);
    let Au = null, vn = null, ml = null, Eu = !1, zr = null, xu = 0;
    const Hn = j(() => ya.value !== null), jr = j(() => Se.value ? T.value.findIndex((_) => _.id === Se.value.id) : -1), yl = j(() => jr.value > 0 ? T.value[jr.value - 1] : null), _l = j(() => jr.value >= 0 && jr.value < T.value.length - 1 ? T.value[jr.value + 1] : null), Wd = j(() => xg(Se.value?.description || "")), Sa = j(() => Tg(Se.value?.publicationDate || "")), Yd = j(() => Ag(Se.value?.language || "")), Sg = ["publicationType", "title", "subtitle", "creators", "publication", "series", "seriesNumber", "genre", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Cg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Br(_) {
      const b = String(_ ?? "").trim(), f = b.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : b;
    }
    function Tg(_) {
      const f = Br(_).match(/^(\d{4})/u);
      return f ? f[1] : "";
    }
    function Ag(_) {
      return String(_ ?? "").split(/[;,\n]+/u).map((b) => b.trim()).filter(Boolean);
    }
    function Zd(_, b) {
      const f = new URLSearchParams();
      for (const [F, oe] of Object.entries(x)) {
        const Ae = String(oe || "").trim();
        Ae !== "" && !(F === "sort" && Ae === "title") && !(F === "view" && Ae === "compact") && f.set(F, Ae);
      }
      return f.set(_, String(b || "").trim()), f.delete("page"), d(f);
    }
    function wl(_, b) {
      const F = Zd(_, b).toString();
      return `${lt.value}${F ? `?${F}` : ""}`;
    }
    function kl(_, b, f) {
      const F = String(f || "").trim();
      if (F === "") return;
      _?.preventDefault?.();
      const oe = Zd(b, F);
      Vr({ historyMode: "none" }), Kt(null, {
        params: oe,
        generation: ++ni,
        historyMode: "push"
      });
    }
    function Eg(_) {
      return String(_ ?? "").replace(/&#x([0-9a-f]+);/giu, (b, f) => String.fromCodePoint(Number.parseInt(f, 16))).replace(/&#(\d+);/gu, (b, f) => String.fromCodePoint(Number.parseInt(f, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function xg(_) {
      let b = String(_ ?? "").trim();
      if (b === "") return "";
      for (let f = 0; f < 2; f += 1) {
        const F = Eg(b);
        if (F === b) break;
        b = F;
      }
      return b = b.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), b;
    }
    function Xd(_) {
      return { ..._, publicationDate: Br(_?.publicationDate) };
    }
    function Jd(_) {
      for (const b of ["series", "seriesNumber", "genre"]) gt[b] = String(_?.[b] || "");
      gt.title = String(_?.title || ""), gt.publicationDate = Br(_?.publicationDate), gt.identifiers = Array.isArray(_?.identifiers) ? _.identifiers.map((b) => ({ scheme: String(b?.scheme || ""), displayValue: String(b?.displayValue || b?.value || "") })) : [], Object.assign(Mi, { saving: !1, saved: !1, error: "" });
    }
    function $g() {
      gt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Og(_) {
      gt.identifiers.splice(_, 1);
    }
    async function Ng() {
      const _ = Se.value;
      if (!_?.updateUrl || Mi.saving) return;
      Object.assign(Mi, { saving: !0, saved: !1, error: "" });
      const b = new FormData();
      b.set("requesttoken", _t.value), b.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const F = _[f];
        b.set(f, Array.isArray(F) ? F.join(", ") : String(F ?? ""));
      }
      for (const f of ["series", "seriesNumber", "genre"]) b.set(f, gt[f]);
      b.set("title", gt.title), b.set("publicationDate", Br(gt.publicationDate)), gt.identifiers.forEach((f, F) => {
        b.set(`identifiers[${F}][scheme]`, f.scheme), b.set(`identifiers[${F}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(_.updateUrl, { method: "POST", body: b, credentials: "same-origin", headers: { Accept: "application/json" } }), F = await f.json().catch(() => ({}));
        if (!f.ok || F.saved !== !0) throw new Error(F.error || t("library", "Metadata could not be saved."));
        for (const Ae of ["series", "seriesNumber", "genre"]) _[Ae] = gt[Ae].trim();
        _.title = gt.title.trim(), _.publicationDate = Br(gt.publicationDate), _.identifiers = gt.identifiers.filter((Ae) => Ae.scheme.trim() || Ae.displayValue.trim()).map((Ae) => ({ ...Ae }));
        const oe = T.value.find((Ae) => Number(Ae.id) === Number(_.id));
        oe && (oe.title = _.title, oe.publicationDate = _.publicationDate), Mi.saved = !0;
      } catch (f) {
        Mi.error = f?.message || t("library", "Metadata could not be saved.");
      } finally {
        Mi.saving = !1;
      }
    }
    const Vn = j(() => {
      const _ = s("scannerConflicts", x.scannerConflicts) || s("weakMetadata", x.weakMetadata), b = _ ? T.value.find((f) => Sl(f).length > 0) : null;
      return {
        enabled: _,
        item: b,
        fields: b ? Sl(b) : [],
        reviewNextUrl: Ir.value,
        skipUrl: J.value.nextUrl || Ir.value
      };
    }), Rg = j(() => a.map((_) => ({
      ..._,
      label: t("library", _.label),
      href: `${lt.value}?${encodeURIComponent(_.key)}=${encodeURIComponent(_.value)}`,
      active: String(x[_.key] || "") === _.value
    })));
    function $u(_) {
      return Array.isArray(_) ? JSON.stringify(_) : _ == null ? "" : String(_);
    }
    function Sl(_) {
      const b = _.fieldValues || {};
      let f = [];
      try {
        f = JSON.parse(b.rejectedFields || "[]");
      } catch {
      }
      Array.isArray(f) || (f = []);
      const F = _.fieldSources || {};
      return Sg.filter((oe) => Object.prototype.hasOwnProperty.call(b, oe)).map((oe) => {
        const Ae = $u(_[oe]), Be = $u(b[oe]), Je = $u(F[oe] || _.metadataSource || "scanner"), bi = Je.includes("filename") || Je.includes("path") ? Be : "", Xi = Je.includes("sidecar") ? Be : "";
        return { field: oe, currentValue: Ae, scannerCandidate: Be, pathTemplateCandidate: bi, sidecarValue: Xi, sourceProvenance: Je, rejected: f.includes(oe), differs: Ae !== Be };
      }).filter((oe) => oe.differs);
    }
    let Ca = 0, Ta = null;
    function Qd() {
      const _ = new URLSearchParams(window.location.search).getAll("item");
      if (_.length !== 1 || !/^[1-9][0-9]*$/.test(_[0])) return null;
      const b = Number(_[0]);
      return Number.isSafeInteger(b) && b <= AF ? b : null;
    }
    function ef(_, b = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), _ !== null && f.searchParams.set("item", String(_)), history[`${b}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Hr(_, { historyMode: b = "push", seed: f = null } = {}) {
      Ta?.abort();
      const F = ++Ca, oe = new AbortController();
      Ta = oe, ya.value = _, _a.value = "overview", Se.value = f && Number(f.id) === _ ? Xd(f) : null, Se.value && Jd(Se.value), Object.assign(ii, { loading: !0, error: "", missing: !1 }), b !== "none" && ef(_, b);
      try {
        const Ae = Bn.value.replace("__ITEM_ID__", encodeURIComponent(String(_))), Be = await fetch(Ae, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: oe.signal });
        if (F !== Ca) return;
        if (!Be.ok) {
          Se.value = null, ii.missing = Be.status === 404, ii.error = Be.status === 404 ? t("library", "This publication is unavailable or you do not have access.") : t("library", "Could not load publication details. Try again.");
          return;
        }
        const Je = await Be.json();
        if (F !== Ca) return;
        if (typeof Je?.item?.id != "number" || !Number.isSafeInteger(Je.item.id) || Je.item.id !== _) {
          Se.value = null, ii.missing = !1, ii.error = t("library", "Could not load publication details. Try again.");
          return;
        }
        Se.value = Xd(Je.item), Jd(Se.value), await xt();
      } catch (Ae) {
        F === Ca && Ae?.name !== "AbortError" && (Se.value = null, ii.missing = !1, ii.error = t("library", "Could not load publication details. Try again."));
      } finally {
        F === Ca && (ii.loading = !1, Ta = null);
      }
    }
    function Ui(_, b) {
      Ou(), Au = b?.currentTarget instanceof HTMLElement ? b.currentTarget : null, Hr(Number(_.id), { seed: _ });
    }
    function Vr({ historyMode: _ = "push", restoreFocus: b = !0 } = {}) {
      ml = b ? Au : null, Au = null, Ta?.abort(), Ta = null, Ca += 1, ya.value = null, Se.value = null, _a.value = "overview", Object.assign(ii, { loading: !1, error: "", missing: !1 }), _ !== "none" && ef(null, _);
    }
    function tf() {
      ka.value ? (wa.value?.$refs?.sidebar || wa.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Gd.value?.focus();
    }
    function Ig() {
      const _ = ml;
      if (ml = null, Ou(), Eu || !_?.isConnected) return;
      const b = xu;
      zr = window.requestAnimationFrame(() => {
        zr = null, !(b !== xu || Eu || Hn.value || !_.isConnected) && _.focus();
      });
    }
    function Ou() {
      xu += 1, zr !== null && (window.cancelAnimationFrame(zr), zr = null);
    }
    function qr(_ = vn) {
      ka.value = !!_?.matches, Hn.value && xt(tf);
    }
    function Cl(_) {
      _ && Hr(Number(_.id), { seed: _ });
    }
    const Kr = /* @__PURE__ */ G(null);
    let ni = 0, sr = null, lr = null, Gr = null, nf = !1, Wr = null;
    const Dt = /* @__PURE__ */ Mt({ loading: !1, error: "", completed: !1 });
    function Lg(_) {
      const b = d(new FormData(_));
      b.delete("publicationSearch"), b.delete("creatorSearch"), b.delete("subjectSearch"), b.delete("publisherSearch"), b.delete("classificationSearch"), b.delete("tagSearch"), b.delete("folderSearch"), b.delete("yearSearch");
      for (const f of Array.from(b.keys()))
        String(b.get(f) || "").trim() === "" && b.delete(f);
      return b.delete("page"), b.get("view") === "compact" && b.delete("view"), b.get("sort") === "title" && b.delete("sort"), b;
    }
    async function Aa(_, b, f) {
      const F = new URLSearchParams();
      for (const [Be, Je] of Object.entries(x)) {
        const bi = String(Je || "").trim();
        Be !== _ && bi !== "" && !(Be === "sort" && bi === "title") && !(Be === "view" && bi === "compact") && F.set(Be, bi);
      }
      F.set(`${_}Search`, b);
      const oe = new AbortController();
      _ === "creator" ? be = oe : _ === "publisher" ? Pe = oe : _ === "subject" ? xe = oe : _ === "classification" ? ut = oe : _ === "tag" ? Rt = oe : _ === "folder" ? z = oe : pa = oe;
      const Ae = _ === "creator" ? cl.value : _ === "publisher" ? wu.value : _ === "subject" ? dl.value : _ === "classification" ? fl.value : _ === "tag" ? Ja.value : _ === "folder" ? Rr.value : Qa.value;
      try {
        const Be = await fetch(`${Ae}?${F}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: oe.signal });
        if (!Be.ok) throw new Error(`${_} suggestions request failed: ${Be.status}`);
        const Je = await Be.json(), bi = _ === "creator" ? Fe : _ === "publisher" ? Re : _ === "subject" ? ye : _ === "classification" ? ft : _ === "tag" ? cn : _ === "folder" ? M : Wa, Xi = _ === "creator" ? Ue.value : _ === "publisher" ? Q.value : _ === "subject" ? X.value : _ === "classification" ? we.value : _ === "tag" ? bt.value : _ === "folder" ? st.value : Ht.value;
        f === bi && Xi.trim() === b && (_ === "creator" ? dt.value = Array.isArray(Je.creators) ? Je.creators : [] : _ === "publisher" ? Z.value = Array.isArray(Je.publishers) ? Je.publishers : [] : _ === "subject" ? re.value = Array.isArray(Je.subjects) ? Je.subjects : [] : _ === "classification" ? ze.value = Array.isArray(Je.classifications) ? Je.classifications : [] : _ === "tag" ? Nt.value = Array.isArray(Je.tags) ? Je.tags : [] : _ === "folder" ? S.value = Array.isArray(Je.folders) ? Je.folders : [] : Un.value = Array.isArray(Je.years) ? Je.years : []);
      } catch (Be) {
        Be?.name !== "AbortError" && (_ === "creator" && f === Fe && (dt.value = null), _ === "publisher" && f === Re && (Z.value = null), _ === "subject" && f === ye && (re.value = null), _ === "classification" && f === ft && (ze.value = null), _ === "tag" && f === cn && (Nt.value = null), _ === "folder" && f === M && (S.value = null), _ === "year" && f === Wa && (Un.value = null));
      }
    }
    function Pg(_, b) {
      return Aa("creator", _, b);
    }
    function Dg(_, b) {
      return Aa("publisher", _, b);
    }
    function Fg(_, b) {
      return Aa("subject", _, b);
    }
    function Mg(_, b) {
      return Aa("classification", _, b);
    }
    function Ug(_, b) {
      return Aa("tag", _, b);
    }
    function zg(_, b) {
      return Aa("folder", _, b);
    }
    function jg(_, b) {
      return Aa("year", _, b);
    }
    async function Bg(_, b) {
      const f = new URLSearchParams();
      for (const [oe, Ae] of Object.entries(x)) {
        const Be = String(Ae || "").trim();
        oe !== "publication" && Be !== "" && !(oe === "sort" && Be === "title") && !(oe === "view" && Be === "compact") && f.set(oe, Be);
      }
      f.set("publicationSearch", _);
      const F = new AbortController();
      R = F;
      try {
        const oe = await fetch(`${Xa.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!oe.ok) throw new Error(`Publication suggestions request failed: ${oe.status}`);
        const Ae = await oe.json();
        b === V && q.value.trim() === _ && (se.value = Array.isArray(Ae.publications) ? Ae.publications : []);
      } catch (oe) {
        oe?.name !== "AbortError" && b === V && (se.value = null);
      } finally {
        b === V && (R = null);
      }
    }
    function Hg(_) {
      k.splice(0, k.length, ...(_.items || []).map((f) => ({ ...f }))), wg();
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
        !b.has(f) && Object.prototype.hasOwnProperty.call(_, f) && (g[f] = _[f]);
      Object.assign(x, Ar, _.activeFilters || {}), x.view = y(x.view);
    }
    async function Vg() {
      if (g.surface !== "index") return;
      const _ = ni, b = JSON.stringify({ ...x }), f = new URLSearchParams();
      f.set("hydrate", "1");
      for (const [oe, Ae] of Object.entries(x)) {
        const Be = String(Ae || "").trim();
        Be !== "" && !(oe === "sort" && Be === "title") && !(oe === "view" && Be === "compact") && f.set(oe, Be);
      }
      const F = new AbortController();
      lr = F;
      try {
        const oe = await fetch(`${Di.value}${f.size ? `?${f}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: F.signal
        });
        if (!oe.ok) return;
        const Ae = await oe.json();
        if (_ !== ni || b !== JSON.stringify({ ...x })) return;
        for (const Be of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Ae, Be) && (g[Be] = Ae[Be]);
      } catch (oe) {
        if (oe?.name !== "AbortError") return;
      } finally {
        lr === F && (lr = null), F.signal.aborted || af();
      }
    }
    async function af() {
      if (!ha.value || nf || Gr) return;
      const _ = new AbortController();
      Gr = _;
      try {
        const b = await fetch(`${Di.value}?hydrate=counts`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: _.signal });
        if (!b.ok || _.signal.aborted) return;
        const f = await b.json();
        f.smartViewCounts && (g.smartViewCounts = f.smartViewCounts), f.smartViewCountsPending && (g.smartViewCountsPending = f.smartViewCountsPending), nf = !0;
      } catch {
      } finally {
        Gr === _ && (Gr = null);
      }
    }
    function qg() {
      lr?.abort(), lr = null;
    }
    async function Kt(_, b = null) {
      const f = _?.currentTarget?.tagName === "FORM" ? _.currentTarget : _?.currentTarget?.form;
      if (!f && !b?.params) return;
      const F = d(b?.params ?? Lg(f));
      if (zn.value || fn.value) {
        Yr(F, lt.value);
        return;
      }
      const oe = F.toString(), Ae = oe ? `?${oe}` : "", Be = b?.generation ?? ++ni, Je = c(F), bi = b?.historyMode ?? (Je ? "push" : "replace"), Xi = b?.historyTraversal === !0;
      if (Be !== ni) return;
      qg(), b === null && sr?.abort();
      const or = new AbortController();
      sr = or, Dt.loading = !0, Dt.error = "", Dt.completed = !1;
      try {
        const Ji = await fetch(Di.value + Ae, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: or.signal
        });
        if (Be !== ni) return;
        if (!Ji.ok) {
          Xi ? Yr(F) : Je ? Dt.error = t("library", "Could not load this review queue. Try again.") : Yr(F);
          return;
        }
        const dm = await Ji.json();
        if (Be !== ni) return;
        Hg(dm), af(), Dt.completed = !0, bi !== "none" && (history[bi === "push" ? "pushState" : "replaceState"]({}, "", oe ? `?${oe}` : window.location.pathname), Hn.value && Vr({ historyMode: "none" }));
      } catch (Ji) {
        Be === ni && Ji?.name !== "AbortError" && (Xi ? Yr(F) : Je ? Dt.error = t("library", "Could not load this review queue. Try again.") : Yr(F));
      } finally {
        Be === ni && (sr = null, Dt.loading = !1);
      }
    }
    function rf() {
      sr?.abort();
      const _ = new URLSearchParams(window.location.search), b = Qd();
      _.has("item") && b === null && (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)), b === null ? Vr({ historyMode: "none" }) : Hr(b, { historyMode: "none", seed: T.value.find((f) => Number(f.id) === b) || null }), _.delete("item"), Kt(null, {
        params: d(_),
        generation: ++ni,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Yr(_, b = window.location.pathname) {
      const f = document.createElement("form");
      f.method = "get", f.action = b, f.hidden = !0;
      for (const [F, oe] of _.entries()) {
        const Ae = document.createElement("input");
        Ae.type = "hidden", Ae.name = F, Ae.value = oe, f.appendChild(Ae);
      }
      document.body.appendChild(f), f.submit(), f.remove();
    }
    function vi(_, b = null, f = null) {
      if (b === null) {
        Kt(_);
        return;
      }
      Kt({ currentTarget: _ }, { params: b, generation: f });
    }
    async function Kg(_, b = q.value) {
      x.publication = String(b || "").trim(), q.value = x.publication, Y.value = !1, await xt(), Kt({ currentTarget: _ });
    }
    function sf(_, b) {
      Kg(b.currentTarget.form, _);
    }
    async function Gg(_) {
      x.q = String(B.value || "").trim(), x.publication = String(q.value || "").trim(), x.publisher = String(Q.value || "").trim(), x.creator = String(Ue.value || "").trim(), x.subject = String(X.value || "").trim(), x.folder = String(st.value || "").trim(), x.year = String(Ht.value || "").trim(), Y.value = !1, ie.value = !1, Ne.value = !1, ne.value = !1, ee.value = !1, ui.value = !1, await xt(), Kt({ currentTarget: _ });
    }
    async function qn(_, b, f) {
      x[b] = String(f || "").trim(), b === "creator" ? (Ue.value = x.creator, Ne.value = !1) : b === "publisher" ? (Q.value = x.publisher, ie.value = !1) : b === "subject" ? (X.value = x.subject, ne.value = !1) : b === "folder" ? (st.value = x.folder, ee.value = !1) : b === "classification" ? (we.value = x.classification, Oe.value = !1) : b === "tag" ? (bt.value = x.tag, mt.value = !1) : (Ht.value = x.year, ui.value = !1), bn[b] = -1, await xt(), Kt({ currentTarget: _ });
    }
    function lf(_) {
      Gg(_.currentTarget);
    }
    function of(_, b) {
      qn(b.currentTarget.form, "creator", _);
    }
    function uf(_, b) {
      qn(b.currentTarget.form, "publisher", _);
    }
    function cf(_, b) {
      qn(b.currentTarget.form, "classification", _);
    }
    function df(_, b) {
      qn(b.currentTarget.form, "tag", _);
    }
    function ff(_, b) {
      qn(b.currentTarget.form, "folder", _);
    }
    function pf(_, b = X.value) {
      window.clearTimeout(ae), xe?.abort(), xe = null, qn(_, "subject", b);
    }
    function Wg(_) {
      pf(_.currentTarget.form);
    }
    function hf(_, b) {
      pf(b.currentTarget.form, _);
    }
    function vf(_, b) {
      qn(b.currentTarget.form, "year", _);
    }
    const bn = /* @__PURE__ */ Mt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function Yg(_) {
      return ue.value;
    }
    function Nu(_, b, f) {
      return `library-${_}-${b}-suggestion-${f}`;
    }
    function bf(_, b) {
      const f = bn[b];
      return f >= 0 ? Nu(_, b, f) : void 0;
    }
    function Ru(_, b) {
      ie.value = b, b || (bn[_] = -1);
    }
    function gf(_) {
      bn[_] = -1, Ru(_, !0);
    }
    function Zg(_, b, f) {
      qn(f, _, b);
    }
    function mf(_, b) {
      const f = Yg();
      if (_.key === "Escape") {
        Ru(b, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(_.key) || f.length === 0) return;
      if (_.key === "Enter") {
        const Ae = bn[b];
        if (Ae < 0) return;
        _.preventDefault(), Zg(b, f[Ae], _.currentTarget.form);
        return;
      }
      _.preventDefault(), Ru(b, !0);
      const F = bn[b], oe = _.key === "ArrowDown" ? 1 : -1;
      bn[b] = F < 0 ? oe > 0 ? 0 : f.length - 1 : (F + oe + f.length) % f.length;
    }
    function yf(_) {
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(x)) {
        const oe = String(F || "").trim();
        oe !== "" && f !== _ && !(f === "sort" && oe === "title") && !(f === "view" && oe === "compact") && b.set(f, oe);
      }
      return b;
    }
    function Zr(_) {
      const b = yf(_).toString();
      return `${lt.value}${b ? `?${b}` : ""}`;
    }
    function Xr(_) {
      const b = yf(_);
      x[_] = _ === "sort" ? "title" : _ === "view" ? "compact" : "", Kt(null, {
        params: b,
        generation: ++ni
      });
    }
    function _f() {
      const _ = new URLSearchParams();
      return x.sort && x.sort !== "title" && _.set("sort", x.sort), x.view && x.view !== "compact" && _.set("view", x.view), _;
    }
    function Tl() {
      const _ = _f().toString();
      return `${lt.value}${_ ? `?${_}` : ""}`;
    }
    function Al() {
      const _ = _f();
      for (const b of Object.keys(x))
        ["sort", "view"].includes(b) || (x[b] = Ar[b]);
      Kt(null, {
        params: _,
        generation: ++ni
      }), !zn.value && !fn.value && xt(() => {
        _e.value?.focus?.();
      });
    }
    function Xg(_) {
      const b = new URL(_.href, window.location.origin).searchParams;
      Kt(null, {
        params: b,
        generation: ++ni
      });
    }
    function Jg() {
      return Zr("q");
    }
    const Iu = j(() => g.smartViewCounts || {}), Qg = j(() => new Set(g.smartViewCountsPending || []));
    function em(_) {
      return Qg.value.has(_) || !Object.prototype.hasOwnProperty.call(Iu.value, _) ? "—" : Number(Iu.value[_] || 0);
    }
    const wf = j(() => {
      const _ = {};
      for (const [b, f] of Object.entries(x)) {
        const F = String(f || "").trim();
        F !== "" && !(b === "sort" && F === "title") && (_[b] = F);
      }
      return _;
    }), tm = j(() => JSON.stringify(wf.value)), Lu = j(() => Object.keys(wf.value).length > 0);
    function kf(_) {
      if (!jd.includes(_)) return;
      x.view = _;
      const b = new URLSearchParams();
      for (const [f, F] of Object.entries(m(x))) {
        const oe = String(F || "").trim();
        oe !== "" && !(f === "sort" && oe === "title") && !(f === "view" && oe === "compact") && b.set(f, oe);
      }
      b.delete("page"), Kt(null, {
        params: b,
        generation: ++ni
      });
    }
    function im(_) {
      const b = d(window.location.search);
      for (const F of Object.keys(Ee))
        b.delete(F);
      b.delete("page");
      for (const [F, oe] of Object.entries(_)) {
        const Ae = F === "view" ? y(oe) : String(oe || "").trim();
        Ae !== "" && !(F === "view" && Ae === "compact") && b.set(F, Ae);
      }
      const f = b.toString();
      return f ? `?${f}` : "?";
    }
    function nm(_) {
      return im(_ || {});
    }
    function am(_) {
      const f = Object.entries(_ && typeof _ == "object" ? _ : {}).filter(([, F]) => String(F ?? "").trim() !== "");
      return f.length === 0 ? !1 : f.every(([F, oe]) => String(x[F] ?? "") === String(oe ?? ""));
    }
    function rm(_) {
      return sg.value.replace("__COLLECTION_ID__", encodeURIComponent(String(_ || "0")));
    }
    function sm(_) {
      if (!_t.value) return;
      const b = document.createElement("form");
      b.method = "post", b.action = rm(_), b.className = "library-navigation-saved-collection-delete-form";
      const f = document.createElement("input");
      f.type = "hidden", f.name = "requesttoken", f.value = _t.value, b.appendChild(f), document.body.appendChild(b), b.submit();
    }
    function El(_) {
      return String(_ || "").toUpperCase();
    }
    function lm(_) {
      return g.creatorLandingUrls?.[_] || `/apps/library/creators/${encodeURIComponent(_)}`;
    }
    function Sf(_) {
      const b = String(_?.publication || "").trim(), f = String(_?.publicationDate || "").trim();
      return b && f ? `${b} · ${f}` : b || f;
    }
    function Cf(_) {
      const b = String(_?.tagName || "").toLowerCase();
      return _?.isContentEditable || ["input", "select", "textarea", "button"].includes(b);
    }
    function om(_) {
      _.key !== "/" || _.metaKey || _.ctrlKey || _.altKey || _.shiftKey || Cf(_.target) || (_.preventDefault(), Kr.value?.focus(), Kr.value?.select?.());
    }
    async function um(_) {
      _.key !== "Escape" || document.activeElement !== Kr.value || x.q === "" || (_.preventDefault(), B.value = "", x.q = "", await xt(), vi({ currentTarget: Kr.value }));
    }
    function cm(_) {
      if (!Hn.value || _.metaKey || _.ctrlKey || _.altKey)
        return !1;
      if (_.key === "Escape")
        return _.preventDefault(), Vr(), !0;
      if (_.key === "Tab" && ka.value) {
        if (wa.value?.focusTrap) return !1;
        const b = wa.value?.$refs?.sidebar || wa.value?.$el || wa.value, f = [...b?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ae) => !Ae.hidden && Ae.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const F = f[0], oe = f[f.length - 1];
        if (_.shiftKey && (document.activeElement === F || !b.contains(document.activeElement)))
          return _.preventDefault(), oe.focus(), !0;
        if (!_.shiftKey && (document.activeElement === oe || !b.contains(document.activeElement)))
          return _.preventDefault(), F.focus(), !0;
      }
      return Cf(_.target) ? !1 : _.key === "ArrowLeft" && yl.value ? (_.preventDefault(), Cl(yl.value), !0) : _.key === "ArrowRight" && _l.value ? (_.preventDefault(), Cl(_l.value), !0) : !1;
    }
    function Tf(_) {
      document.querySelector("dialog[open]") || cm(_) || (om(_), um(_));
    }
    Et(() => {
      if (ba.value || Ii.value || va.value) return;
      window.addEventListener("keydown", Tf), window.addEventListener("popstate", rf), vn = window.matchMedia?.("(max-width: 1023px)") || null, qr(), vn?.addEventListener ? vn.addEventListener("change", qr) : vn?.addListener?.(qr);
      const _ = new URLSearchParams(window.location.search), b = Qd();
      _.has("item") && b === null ? (_.delete("item"), history.replaceState({}, "", `${window.location.pathname}${_.toString() ? `?${_}` : ""}${window.location.hash}`)) : b !== null && Hr(b, { historyMode: "none", seed: T.value.find((f) => Number(f.id) === b) || null }), Wr = window.requestAnimationFrame(() => {
        Wr = null, Vg();
      });
    }), wi(() => {
      Eu = !0, Ou(), window.removeEventListener("keydown", Tf), window.removeEventListener("popstate", rf), window.clearTimeout(K), window.clearTimeout(Ie), window.clearTimeout(ae), window.clearTimeout(Gi), R?.abort(), be?.abort(), xe?.abort(), pa?.abort(), ni += 1, Wr !== null && window.cancelAnimationFrame(Wr), Wr = null, lr?.abort(), Gr?.abort(), sr?.abort(), sr = null, Ca += 1, Ta?.abort(), Ta = null, vn?.removeEventListener ? vn.removeEventListener("change", qr) : vn?.removeListener?.(qr), vn = null, ml = null;
    });
    const Jr = /* @__PURE__ */ Mt({}), Qr = /* @__PURE__ */ Mt({});
    async function Af(_, b) {
      const f = b?.currentTarget?.closest?.("form") || b?.currentTarget;
      if (!f || !_?.starUrl || Jr[_.id]) return;
      const F = !!_.starred;
      Jr[_.id] = !0, Qr[_.id] = "", _.starred = !F;
      try {
        (await fetch(_.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (_.starred = F, Qr[_.id] = t("library", "Could not update star. Try again."));
      } catch {
        _.starred = F, Qr[_.id] = t("library", "Could not update star. Try again.");
      } finally {
        Jr[_.id] = !1;
      }
    }
    return (_, b) => (p(), De(u(nT), { "app-name": "library" }, {
      default: me(() => [
        fe(u(Mw), {
          "aria-label": u(t)("library", "Library navigation")
        }, {
          list: me(() => [
            fe(u(mb), null, {
              default: me(() => [
                (p(!0), h(W, null, de(ll.value, (f) => (p(), De(u(Wn), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (p(!0), h(W, null, de(ol.value, (f) => (p(), h("div", {
                  key: f.key,
                  class: "library-navigation-saved-collection-row"
                }, [
                  fe(u(Wn), {
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
                    onClick: Ce((F) => sm(f.id), ["stop", "prevent"])
                  }, "✕", 8, gO)
                ]))), 128)),
                fe(u(Wn), {
                  active: ba.value,
                  href: jn.value,
                  name: u(t)("library", "Lists")
                }, null, 8, ["active", "href", "name"]),
                fe(u(Wn), {
                  class: "library-navigation-create-list",
                  href: `${jn.value}&new=1`,
                  name: u(t)("library", "Create a new list")
                }, null, 8, ["href", "name"]),
                (p(!0), h(W, null, de(pn.value, (f) => (p(), De(u(Wn), {
                  key: `personal-list-${f.id}`,
                  class: "library-navigation-personal-list",
                  href: `${jn.value}&listId=${f.id}`,
                  name: f.name
                }, null, 8, ["href", "name"]))), 128)),
                fe(u(Wn), {
                  active: Ii.value,
                  href: `${lt.value}?infer=1`,
                  name: u(t)("library", "Extract metadata")
                }, null, 8, ["active", "href", "name"]),
                fe(u(Wn), {
                  active: ha.value,
                  href: sl.value,
                  name: Za.value > 0 ? `${u(t)("library", "Review")} (${Za.value})` : u(t)("library", "Review")
                }, null, 8, ["active", "href", "name"]),
                fe(u(Wn), {
                  class: "library-navigation-personal-list",
                  active: va.value,
                  href: `${lt.value}?duplicates=1`,
                  name: u(t)("library", "Possible duplicates")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: me(() => [
            !ba.value && !Ii.value && !va.value ? (p(), h("section", mO, [
              l("h2", yO, o(u(t)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": u(t)("library", "Catalogue search and filters"),
                onSubmit: Ce(lf, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: x.folder
                }, null, 8, wO),
                (p(!0), h(W, null, de(Hd.value, (f) => (p(), h("input", {
                  key: `sidebar-${f.key}`,
                  type: "hidden",
                  name: f.key,
                  value: f.value
                }, null, 8, kO))), 128)),
                x.sort && x.sort !== "title" ? (p(), h("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: x.sort
                }, null, 8, SO)) : E("", !0),
                x.view && x.view !== "compact" ? (p(), h("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: x.view
                }, null, 8, CO)) : E("", !0),
                l("fieldset", TO, [
                  l("legend", null, o(u(t)("library", "Content")), 1),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: u(t)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      te(o(u(t)("library", "Search")) + " ", 1),
                      b[112] || (b[112] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    ge(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Kr,
                      "onUpdate:modelValue": b[0] || (b[0] = (f) => B.value = f),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: u(t)("library", "Title, creator, description, filename or folder")
                    }, null, 8, EO), [
                      [We, B.value]
                    ]),
                    hi("q") ? (p(), h("small", xO, o(Fi("q")), 1)) : E("", !0)
                  ], 8, AO),
                  l("label", null, [
                    te(o(u(t)("library", "Type")), 1),
                    ge(l("select", {
                      "onUpdate:modelValue": b[1] || (b[1] = (f) => x.type = f),
                      name: "type",
                      onChange: b[2] || (b[2] = (f) => vi(f))
                    }, [
                      l("option", $O, o(u(t)("library", "All types")), 1),
                      (p(!0), h(W, null, de(I.value, (f) => (p(), h("option", {
                        key: f,
                        value: f
                      }, o(f), 9, OO))), 128))
                    ], 544), [
                      [it, x.type]
                    ])
                  ]),
                  l("div", NO, [
                    l("label", RO, o(u(t)("library", "Publisher")), 1),
                    ge(l("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": b[3] || (b[3] = (f) => Q.value = f),
                      type: "search",
                      name: "publisherSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publishers"),
                      title: u(t)("library", "Exact publisher matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publisher-suggestions",
                      "aria-activedescendant": bf("desktop", "publisher"),
                      "aria-expanded": ie.value && ue.value.length > 0 ? "true" : "false",
                      onFocus: b[4] || (b[4] = (f) => gf("publisher")),
                      onKeydown: b[5] || (b[5] = (f) => mf(f, "publisher"))
                    }, null, 40, IO), [
                      [We, Q.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: x.publisher
                    }, null, 8, LO),
                    hi("publisher") ? (p(), h("small", PO, o(Fi("publisher")), 1)) : E("", !0),
                    ie.value && ue.value.length > 0 ? (p(), h("ul", DO, [
                      (p(!0), h(W, null, de(ue.value, (f, F) => (p(), h("li", {
                        id: Nu("desktop", "publisher", F),
                        key: f,
                        role: "option",
                        "aria-selected": bn.publisher === F ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: b[6] || (b[6] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (oe) => uf(f, oe)
                        }, o(f), 41, MO)
                      ], 8, FO))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: ke(["button secondary library-publisher-apply", hn("publisher")])
                    }, o(u(t)("library", "Apply publisher")), 3)
                  ]),
                  l("div", UO, [
                    l("label", zO, o(u(t)("library", "Series / periodical")), 1),
                    ge(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": b[7] || (b[7] = (f) => q.value = f),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Y.value && H.value.length > 0 ? "true" : "false",
                      onFocus: b[8] || (b[8] = (f) => Y.value = !0),
                      onKeydown: b[9] || (b[9] = ot((f) => Y.value = !1, ["escape"]))
                    }, null, 40, jO), [
                      [We, q.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: x.publication
                    }, null, 8, BO),
                    hi("publication") ? (p(), h("small", HO, o(Fi("publication")), 1)) : E("", !0),
                    Y.value && H.value.length > 0 ? (p(), h("ul", VO, [
                      (p(!0), h(W, null, de(H.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: b[10] || (b[10] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => sf(f, F)
                        }, o(f), 41, qO)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: ke(["button secondary library-publication-apply", hn("publication")])
                    }, o(u(t)("library", "Apply series")), 3)
                  ]),
                  l("div", KO, [
                    l("label", GO, o(u(t)("library", "Publication year")), 1),
                    ge(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": b[11] || (b[11] = (f) => Ht.value = f),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": ui.value && pi.value.length > 0 ? "true" : "false",
                      onFocus: b[12] || (b[12] = (f) => ui.value = !0),
                      onKeydown: b[13] || (b[13] = ot((f) => ui.value = !1, ["escape"]))
                    }, null, 40, WO), [
                      [We, Ht.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: x.year
                    }, null, 8, YO),
                    hi("year") ? (p(), h("small", ZO, o(Fi("year")), 1)) : E("", !0),
                    ui.value && pi.value.length > 0 ? (p(), h("ul", XO, [
                      (p(!0), h(W, null, de(pi.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: b[14] || (b[14] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => vf(f, F)
                        }, o(f), 41, JO)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: ke(["button secondary library-year-apply", hn("year")])
                    }, o(u(t)("library", "Apply year")), 3)
                  ]),
                  l("div", QO, [
                    l("label", e4, o(u(t)("library", "Creator")), 1),
                    ge(l("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": b[15] || (b[15] = (f) => Ue.value = f),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search creators"),
                      title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": Ne.value && $e.value.length > 0 ? "true" : "false",
                      onFocus: b[16] || (b[16] = (f) => Ne.value = !0),
                      onKeydown: b[17] || (b[17] = ot((f) => Ne.value = !1, ["escape"]))
                    }, null, 40, t4), [
                      [We, Ue.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: x.creator
                    }, null, 8, i4),
                    hi("creator") ? (p(), h("small", n4, o(Fi("creator")), 1)) : E("", !0),
                    Ne.value && $e.value.length > 0 ? (p(), h("ul", a4, [
                      (p(!0), h(W, null, de($e.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: b[18] || (b[18] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => of(f, F)
                        }, o(f), 41, r4)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: ke(["button secondary library-creator-apply", hn("creator")])
                    }, o(u(t)("library", "Apply creator")), 3)
                  ]),
                  l("div", s4, [
                    l("label", l4, o(u(t)("library", "Nextcloud tag")), 1),
                    ge(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": b[19] || (b[19] = (f) => bt.value = f),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": mt.value && oi.value.length > 0 ? "true" : "false",
                      onFocus: b[20] || (b[20] = (f) => mt.value = !0),
                      onKeydown: b[21] || (b[21] = ot((f) => mt.value = !1, ["escape"]))
                    }, null, 40, o4), [
                      [We, bt.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: x.tag
                    }, null, 8, u4),
                    mt.value && oi.value.length > 0 ? (p(), h("ul", c4, [
                      (p(!0), h(W, null, de(oi.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: b[22] || (b[22] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => df(f, F)
                        }, o(f), 41, d4)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: ke(["button secondary library-tag-apply", hn("tag")])
                    }, o(u(t)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    te(o(u(t)("library", "Format")), 1),
                    ge(l("select", {
                      "onUpdate:modelValue": b[23] || (b[23] = (f) => x.format = f),
                      name: "format",
                      onChange: b[24] || (b[24] = (f) => vi(f))
                    }, [
                      l("option", f4, o(u(t)("library", "All formats")), 1),
                      (p(!0), h(W, null, de($.value, (f) => (p(), h("option", {
                        key: f,
                        value: f
                      }, o(El(f)), 9, p4))), 128))
                    ], 544), [
                      [it, x.format]
                    ])
                  ])
                ]),
                l("fieldset", h4, [
                  l("legend", null, o(u(t)("library", "Location")), 1),
                  l("label", null, [
                    te(o(u(t)("library", "Shelf")), 1),
                    ge(l("select", {
                      "onUpdate:modelValue": b[25] || (b[25] = (f) => x.shelf = f),
                      name: "shelf",
                      onChange: b[26] || (b[26] = (f) => vi(f))
                    }, [
                      l("option", v4, o(u(t)("library", "All shelves")), 1),
                      (p(!0), h(W, null, de(C.value, (f) => (p(), h("option", {
                        key: f,
                        value: f
                      }, o(f), 9, b4))), 128))
                    ], 544), [
                      [it, x.shelf]
                    ])
                  ]),
                  l("div", g4, [
                    l("label", m4, o(u(t)("library", "Folder")), 1),
                    ge(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": b[27] || (b[27] = (f) => st.value = f),
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
                      onKeydown: b[29] || (b[29] = ot((f) => ee.value = !1, ["escape"]))
                    }, null, 40, y4), [
                      [We, st.value]
                    ]),
                    ee.value && O.value.length > 0 ? (p(), h("ul", _4, [
                      (p(!0), h(W, null, de(O.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: b[30] || (b[30] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => ff(f, F)
                        }, o(f), 41, w4)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: ke(["button secondary library-folder-apply", hn("folder")])
                    }, o(u(t)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", k4, [
                  l("legend", null, o(u(t)("library", "Review")), 1),
                  l("label", null, [
                    te(o(u(t)("library", "Scan status")), 1),
                    ge(l("select", {
                      "onUpdate:modelValue": b[31] || (b[31] = (f) => x.status = f),
                      name: "status",
                      onChange: b[32] || (b[32] = (f) => vi(f))
                    }, [
                      l("option", S4, o(u(t)("library", "All scan statuses")), 1),
                      (p(!0), h(W, null, de(N.value, (f) => (p(), h("option", {
                        key: f,
                        value: f
                      }, o(f), 9, C4))), 128))
                    ], 544), [
                      [it, x.status]
                    ])
                  ]),
                  l("label", null, [
                    te(o(u(t)("library", "Workflow status")), 1),
                    ge(l("select", {
                      "onUpdate:modelValue": b[33] || (b[33] = (f) => x.workflowStatus = f),
                      name: "workflowStatus",
                      onChange: b[34] || (b[34] = (f) => vi(f))
                    }, [
                      l("option", T4, o(u(t)("library", "All workflow statuses")), 1),
                      (p(!0), h(W, null, de(ce.value, (f) => (p(), h("option", {
                        key: f,
                        value: f
                      }, o(f), 9, A4))), 128))
                    ], 544), [
                      [it, x.workflowStatus]
                    ])
                  ]),
                  l("div", E4, [
                    l("label", x4, o(u(t)("library", "Subject")), 1),
                    ge(l("input", {
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
                      "aria-expanded": ne.value && pe.value.length > 0 ? "true" : "false",
                      onFocus: b[36] || (b[36] = (f) => ne.value = !0),
                      onKeydown: b[37] || (b[37] = ot((f) => ne.value = !1, ["escape"]))
                    }, null, 40, $4), [
                      [We, X.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: x.subject
                    }, null, 8, O4),
                    hi("subject") ? (p(), h("small", N4, o(Fi("subject")), 1)) : E("", !0),
                    ne.value && pe.value.length > 0 ? (p(), h("ul", R4, [
                      (p(!0), h(W, null, de(pe.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: b[38] || (b[38] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => hf(f, F)
                        }, o(f), 41, I4)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "button",
                      class: ke(["button secondary library-subject-apply", hn("subject")]),
                      onClick: Wg
                    }, o(u(t)("library", "Apply subject")), 3)
                  ]),
                  l("div", L4, [
                    l("label", P4, o(u(t)("library", "Classification")), 1),
                    ge(l("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": b[39] || (b[39] = (f) => we.value = f),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: u(t)("library", "Search classifications"),
                      title: u(t)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": Oe.value && Ve.value.length > 0 ? "true" : "false",
                      onFocus: b[40] || (b[40] = (f) => Oe.value = !0),
                      onKeydown: b[41] || (b[41] = ot((f) => Oe.value = !1, ["escape"]))
                    }, null, 40, D4), [
                      [We, we.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: x.classification
                    }, null, 8, F4),
                    Oe.value && Ve.value.length > 0 ? (p(), h("ul", M4, [
                      (p(!0), h(W, null, de(Ve.value, (f) => (p(), h("li", {
                        key: f,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: b[42] || (b[42] = Ce(() => {
                          }, ["prevent"])),
                          onClick: (F) => cf(f, F)
                        }, o(f), 41, U4)
                      ]))), 128))
                    ])) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: ke(["button secondary library-classification-apply", hn("classification")])
                    }, o(u(t)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    te(o(u(t)("library", "Suggested updates")), 1),
                    ge(l("select", {
                      "onUpdate:modelValue": b[43] || (b[43] = (f) => x.scannerConflicts = f),
                      name: "scannerConflicts",
                      onChange: b[44] || (b[44] = (f) => vi(f))
                    }, [
                      l("option", z4, o(u(t)("library", "All metadata")), 1),
                      l("option", j4, o(u(t)("library", "Suggested updates")), 1)
                    ], 544), [
                      [it, x.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", B4, [
                  l("legend", null, o(u(t)("library", "Personal / display")), 1)
                ]),
                l("button", H4, o(u(t)("library", "Apply filters")), 1)
              ], 40, _O)
            ])) : E("", !0),
            l("a", {
              class: "library-navigation-settings-link",
              href: Vt.value
            }, [
              b[113] || (b[113] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, o(u(t)("library", "Settings")), 1)
            ], 8, V4)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        fe(u(ew), null, {
          default: me(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: g.language || "en",
              dir: g.direction || "ltr",
              tabindex: "-1"
            }, [
              va.value ? (p(), De(dx, {
                key: 0,
                "request-token": _t.value,
                "review-url": sl.value
              }, null, 8, ["request-token", "review-url"])) : Ii.value ? (p(), De(bO, {
                key: 1,
                "request-token": _t.value
              }, null, 8, ["request-token"])) : ba.value ? (p(), De(DA, {
                key: 2,
                onChanged: $r,
                "request-token": _t.value,
                "catalogue-url": lt.value,
                "lists-url": jn.value
              }, null, 8, ["request-token", "catalogue-url", "lists-url"])) : (p(), h(W, { key: 3 }, [
                Mr.value.length > 0 ? (p(), h("nav", {
                  key: 0,
                  class: "library-active-filter-chips",
                  "aria-label": u(t)("library", "Active filters")
                }, [
                  l("span", null, o(u(t)("library", "Active filters")), 1),
                  (p(!0), h(W, null, de(Mr.value, (f) => (p(), h("a", {
                    key: f.key,
                    href: Zr(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                    title: f.title,
                    onClick: Ce((F) => Xr(f.key), ["prevent"])
                  }, [
                    l("strong", null, [
                      te(o(f.label), 1),
                      f.displayValue ? (p(), h(W, { key: 0 }, [
                        te(":")
                      ], 64)) : E("", !0)
                    ]),
                    f.displayValue ? (p(), h(W, { key: 0 }, [
                      b[114] || (b[114] = te(o(" "), -1)),
                      l("span", {
                        class: "library-filter-chip-value",
                        title: f.value
                      }, o(f.displayValue), 9, W4)
                    ], 64)) : E("", !0),
                    b[115] || (b[115] = te()),
                    b[116] || (b[116] = l("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, G4))), 128)),
                  Zi.value.length > 0 ? (p(), h("a", {
                    key: 0,
                    href: Tl(),
                    class: "library-active-filter-clear-all",
                    onClick: Ce(Al, ["prevent"])
                  }, o(u(t)("library", "Clear all")), 9, Y4)) : E("", !0)
                ], 8, K4)) : E("", !0),
                ha.value ? (p(), h("section", Z4, [
                  l("header", X4, [
                    l("p", J4, o(u(t)("library", "Metadata cleanup")), 1),
                    l("h2", Q4, o(u(t)("library", "Review")), 1),
                    fe(Xe, {
                      text: u(t)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")
                    }, {
                      default: me(() => [
                        te(o(u(t)("library", "Metadata cleanup")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"])
                  ]),
                  l("nav", {
                    class: "library-review-queues",
                    "aria-label": u(t)("library", "Review queues")
                  }, [
                    (p(!0), h(W, null, de(Rg.value, (f) => (p(), h("a", {
                      key: f.key,
                      class: ke(["library-review-queue-link", { active: f.active }]),
                      href: f.href,
                      "aria-current": f.active ? "page" : void 0,
                      onClick: Ce((F) => Xg(f), ["prevent"])
                    }, [
                      l("span", null, o(f.label), 1),
                      l("b", null, o(em(f.countKey)), 1)
                    ], 10, tN))), 128))
                  ], 8, eN),
                  l("form", {
                    method: "get",
                    class: "library-review-filter-form",
                    "aria-label": u(t)("library", "Filter current review queue"),
                    onSubmit: Ce(Kt, ["prevent"])
                  }, [
                    (p(!0), h(W, null, de(yg.value, (f) => (p(), h("input", {
                      key: `review-${f.key}`,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, nN))), 128)),
                    l("label", null, [
                      te(o(u(t)("library", "Search within this queue")), 1),
                      ge(l("input", {
                        "onUpdate:modelValue": b[45] || (b[45] = (f) => x.q = f),
                        type: "search",
                        name: "q"
                      }, null, 512), [
                        [We, x.q]
                      ])
                    ]),
                    l("button", aN, o(u(t)("library", "Apply")), 1)
                  ], 40, iN),
                  l("div", {
                    class: "library-review-request-status",
                    role: "status",
                    "aria-live": "polite",
                    "aria-busy": Dt.loading ? "true" : "false"
                  }, [
                    Dt.loading ? (p(), h("span", sN, o(u(t)("library", "Loading review queue…")), 1)) : E("", !0)
                  ], 8, rN),
                  Dt.error ? (p(), h("p", lN, o(Dt.error), 1)) : E("", !0),
                  Vn.value.enabled ? (p(), h("section", oN, [
                    l("div", uN, [
                      l("p", cN, o(u(t)("library", "Metadata review workbench")), 1),
                      l("h3", {
                        id: "library-metadata-review-workbench-heading",
                        title: u(t)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                      }, o(u(t)("library", "Review next suggestion")), 9, dN)
                    ]),
                    Vn.value.item ? (p(), h("article", fN, [
                      l("header", null, [
                        l("strong", null, [
                          l("bdi", pN, o(Vn.value.item.title), 1)
                        ]),
                        l("span", hN, [
                          l("bdi", vN, o(Vn.value.item.cachedPath), 1)
                        ])
                      ]),
                      l("div", bN, [
                        (p(!0), h(W, null, de(Vn.value.fields, (f) => (p(), h("article", {
                          key: f.field,
                          class: "library-metadata-review-field"
                        }, [
                          l("h4", null, [
                            l("bdi", gN, o(f.field), 1)
                          ]),
                          l("dl", null, [
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Current value")), 1),
                              l("dd", null, [
                                l("bdi", mN, o(f.currentValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Suggested value")), 1),
                              l("dd", null, [
                                l("bdi", yN, o(f.scannerCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Path-based suggestion")), 1),
                              l("dd", null, [
                                l("bdi", _N, o(f.pathTemplateCandidate || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Sidecar value")), 1),
                              l("dd", null, [
                                l("bdi", wN, o(f.sidecarValue || "—"), 1)
                              ])
                            ]),
                            l("div", null, [
                              l("dt", null, o(u(t)("library", "Source")), 1),
                              l("dd", null, [
                                l("bdi", kN, o(f.sourceProvenance || "—"), 1)
                              ])
                            ])
                          ]),
                          l("form", {
                            method: "post",
                            action: Vn.value.item.resetFieldUrl,
                            class: "library-metadata-review-accept-form"
                          }, [
                            l("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: _t.value
                            }, null, 8, CN),
                            l("input", {
                              type: "hidden",
                              name: "field",
                              value: f.field
                            }, null, 8, TN),
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
                            }, o(u(t)("library", "Use suggested value")), 9, AN)
                          ], 8, SN)
                        ]))), 128))
                      ]),
                      l("footer", EN, [
                        l("a", {
                          class: "button secondary",
                          href: Vn.value.item.detailsUrl
                        }, o(u(t)("library", "Maintenance")), 9, xN),
                        l("a", {
                          class: "button secondary",
                          href: Vn.value.skipUrl
                        }, o(u(t)("library", "Skip to next suggestion")), 9, $N)
                      ])
                    ])) : E("", !0)
                  ])) : E("", !0),
                  T.value.length === 0 && !Dt.loading && !Dt.error ? (p(), h("div", ON, [
                    l("h3", null, o(u(t)("library", "This review queue is clear")), 1),
                    l("p", null, o(u(t)("library", "Choose another queue or return to the catalogue.")), 1),
                    l("a", {
                      class: "button primary",
                      href: lt.value
                    }, o(u(t)("library", "Back to Library")), 9, NN)
                  ])) : (p(), h("div", {
                    key: 3,
                    class: "library-review-results",
                    role: "region",
                    "aria-label": u(t)("library", "Review results")
                  }, [
                    (p(!0), h(W, null, de(T.value, (f) => (p(), h("article", {
                      key: f.id,
                      class: "library-review-result-card"
                    }, [
                      l("div", null, [
                        l("h3", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (F) => Ui(f, F)
                          }, [
                            l("bdi", LN, o(f.title), 1)
                          ], 8, IN)
                        ]),
                        f.creators ? (p(), h("p", PN, [
                          l("bdi", DN, o(f.creators), 1)
                        ])) : E("", !0),
                        f.scanError ? (p(), h("p", FN, [
                          l("bdi", MN, o(f.scanError), 1)
                        ])) : E("", !0)
                      ]),
                      l("p", null, [
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (F) => Ui(f, F)
                        }, o(u(t)("library", "Details")), 9, UN),
                        l("a", {
                          class: "button primary",
                          href: f.openUrl,
                          onClick: (F) => Pi(f, F)
                        }, o(u(t)("library", "Open")), 9, zN)
                      ])
                    ]))), 128))
                  ], 8, RN)),
                  T.value.length > 0 ? (p(), h("nav", {
                    key: 4,
                    class: "library-pagination",
                    "aria-label": u(t)("library", "Review pagination")
                  }, [
                    J.value.previousUrl ? (p(), h("a", {
                      key: 0,
                      href: J.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, BN)) : (p(), h("span", HN, o(u(t)("library", "Previous")), 1)),
                    l("span", null, [
                      te(o(u(t)("library", "Page")) + " " + o(J.value.page), 1),
                      J.value.total > 0 ? (p(), h("span", VN, " · " + o(J.value.from) + "–" + o(J.value.to), 1)) : E("", !0)
                    ]),
                    J.value.nextUrl ? (p(), h("a", {
                      key: 2,
                      href: J.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, qN)) : (p(), h("span", KN, o(u(t)("library", "Next")), 1))
                  ], 8, jN)) : E("", !0)
                ])) : zn.value ? (p(), h("main", GN, [
                  l("header", WN, [
                    l("p", YN, o(u(t)("library", "Your library")), 1),
                    l("h2", ZN, o(u(t)("library", "Home")), 1)
                  ]),
                  Zi.value.length > 0 ? (p(), h("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    l("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    l("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (p(!0), h(W, null, de(Zi.value, (f) => (p(), h("a", {
                        key: `callout-${f.key}`,
                        href: Zr(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Ce((F) => Xr(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          te(o(f.label), 1),
                          f.displayValue ? (p(), h(W, { key: 0 }, [
                            te(":")
                          ], 64)) : E("", !0)
                        ]),
                        f.displayValue ? (p(), h(W, { key: 0 }, [
                          b[118] || (b[118] = te(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, eR)
                        ], 64)) : E("", !0),
                        b[119] || (b[119] = te()),
                        b[120] || (b[120] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, QN))), 128))
                    ], 8, JN),
                    l("p", tR, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: Bd.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, iR),
                      l("a", {
                        class: "button secondary",
                        href: Tl(),
                        onClick: Ce(Al, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, nR)
                    ])
                  ], 8, XN)) : E("", !0),
                  l("section", aR, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", rR, [
                          fe(Xe, {
                            text: u(t)("library", "Pick up publications you opened recently.")
                          }, {
                            default: me(() => [
                              te(o(u(t)("library", "Continue reading")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${lt.value}?recentlyOpened=1&sort=lastOpened`
                      }, o(u(t)("library", "View all")), 9, sR)
                    ]),
                    bl.value.continueReading.length ? (p(), h("div", lR, [
                      (p(!0), h(W, null, de(bl.value.continueReading, (f) => (p(), h("article", {
                        key: `continue-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => Ui(f, F)
                        }, [
                          l("span", uR, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, cR)
                          ])
                        ], 8, oR),
                        l("div", dR, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Ui(f, F)
                            }, [
                              l("bdi", pR, o(f.title), 1)
                            ], 8, fR)
                          ]),
                          f.creators ? (p(), h("p", hR, [
                            l("bdi", vR, o(f.creators), 1)
                          ])) : E("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => Pi(f, F)
                          }, o(u(t)("library", "Open")), 9, bR)
                        ])
                      ]))), 128))
                    ])) : (p(), h("p", gR, o(u(t)("library", "Publications you open will appear here.")), 1))
                  ]),
                  l("section", mR, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", yR, [
                          fe(Xe, {
                            text: u(t)("library", "The latest publications indexed from your Library roots.")
                          }, {
                            default: me(() => [
                              te(o(u(t)("library", "Recently added")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", {
                        href: `${lt.value}?sort=recent`
                      }, o(u(t)("library", "View all")), 9, _R)
                    ]),
                    bl.value.recentlyAdded.length ? (p(), h("div", wR, [
                      (p(!0), h(W, null, de(bl.value.recentlyAdded, (f) => (p(), h("article", {
                        key: `recent-${f.id}`,
                        class: "library-cover-card library-home-card"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-cover-link",
                          "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                          onClick: (F) => Ui(f, F)
                        }, [
                          l("span", SR, [
                            l("img", {
                              class: "library-cover-image",
                              src: f.coverUrl,
                              alt: "",
                              loading: "lazy",
                              decoding: "async"
                            }, null, 8, CR)
                          ])
                        ], 8, kR),
                        l("div", TR, [
                          l("h4", null, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Ui(f, F)
                            }, [
                              l("bdi", ER, o(f.title), 1)
                            ], 8, AR)
                          ]),
                          f.creators ? (p(), h("p", xR, [
                            l("bdi", $R, o(f.creators), 1)
                          ])) : E("", !0),
                          l("a", {
                            class: "library-cover-read",
                            href: f.openUrl,
                            onClick: (F) => Pi(f, F)
                          }, o(u(t)("library", "Open")), 9, OR)
                        ])
                      ]))), 128))
                    ])) : (p(), h("p", NR, o(u(t)("library", "Recently indexed publications will appear here.")), 1))
                  ]),
                  l("section", RR, [
                    l("header", null, [
                      l("div", null, [
                        l("h3", IR, [
                          fe(Xe, {
                            text: u(t)("library", "Browse the folders that organize your publications.")
                          }, {
                            default: me(() => [
                              te(o(u(t)("library", "Shelves")), 1)
                            ]),
                            _: 1
                          }, 8, ["text"])
                        ])
                      ]),
                      l("a", { href: Ya.value }, o(u(t)("library", "View all")), 9, LR)
                    ]),
                    Vd.value.length ? (p(), h("nav", {
                      key: 0,
                      class: "library-home-shelves",
                      "aria-label": u(t)("library", "Shelves")
                    }, [
                      (p(!0), h(W, null, de(Vd.value, (f) => (p(), h("a", {
                        key: f.shelf,
                        href: f.url
                      }, [
                        l("strong", null, [
                          l("bdi", FR, o(f.shelf), 1)
                        ]),
                        l("span", null, o(u(Ti)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                      ], 8, DR))), 128))
                    ], 8, PR)) : (p(), h("p", MR, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1))
                  ]),
                  Number(Tu.value.count || 0) > 0 ? (p(), h("aside", UR, [
                    l("div", null, [
                      l("h3", zR, o(u(t)("library", "Needs attention")), 1),
                      l("p", jR, o(u(Ti)("library", "%n publication needs better details.", "%n publications need better details.", Number(Tu.value.count || 0))), 1)
                    ]),
                    l("a", {
                      class: "button tertiary",
                      href: Tu.value.url
                    }, o(u(t)("library", "Review")), 9, BR)
                  ])) : E("", !0)
                ])) : fn.value ? (p(), h("main", HR, [
                  l("header", VR, [
                    l("p", qR, o(u(t)("library", "Your library")), 1),
                    l("h2", KR, [
                      fe(Xe, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: me(() => [
                          te(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ])
                  ]),
                  Zi.value.length > 0 ? (p(), h("aside", {
                    key: 0,
                    class: "library-active-filter-callout",
                    "aria-label": u(t)("library", "Active catalogue filters")
                  }, [
                    l("h3", null, o(u(t)("library", "Active catalogue filters")), 1),
                    l("nav", {
                      class: "library-active-filter-callout-chips",
                      "aria-label": u(t)("library", "Active catalogue filters")
                    }, [
                      (p(!0), h(W, null, de(Zi.value, (f) => (p(), h("a", {
                        key: `callout-${f.key}`,
                        href: Zr(f.key),
                        class: "library-filter-chip",
                        "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                        onClick: Ce((F) => Xr(f.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          te(o(f.label), 1),
                          f.displayValue ? (p(), h(W, { key: 0 }, [
                            te(":")
                          ], 64)) : E("", !0)
                        ]),
                        f.displayValue ? (p(), h(W, { key: 0 }, [
                          b[121] || (b[121] = te(o(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: f.value
                          }, o(f.displayValue), 9, ZR)
                        ], 64)) : E("", !0),
                        b[122] || (b[122] = te()),
                        b[123] || (b[123] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, YR))), 128))
                    ], 8, WR),
                    l("p", XR, [
                      l("a", {
                        class: "button primary library-filter-callout-view",
                        href: Bd.value
                      }, o(u(t)("library", "View filtered catalogue")), 9, JR),
                      l("a", {
                        class: "button secondary",
                        href: Tl(),
                        onClick: Ce(Al, ["prevent"])
                      }, o(u(t)("library", "Clear all")), 9, QR)
                    ])
                  ], 8, GR)) : E("", !0),
                  qd.value.length ? (p(), h("nav", {
                    key: 1,
                    "aria-label": u(t)("library", "Shelves")
                  }, [
                    l("ul", tI, [
                      (p(!0), h(W, null, de(qd.value, (f) => (p(), De(vT, {
                        key: f.id,
                        node: f,
                        "children-url": _u.value
                      }, null, 8, ["node", "children-url"]))), 128))
                    ])
                  ], 8, eI)) : (p(), h("section", iI, [
                    l("h3", null, [
                      fe(Xe, {
                        text: u(t)("library", "Browse the folders that organize your publications.")
                      }, {
                        default: me(() => [
                          te(o(u(t)("library", "Shelves")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("p", nI, o(u(t)("library", "Your enabled Library roots will appear as shelves.")), 1),
                    l("p", aI, [
                      l("a", {
                        class: "button primary",
                        href: Vt.value
                      }, o(u(t)("library", "Add a Library root")), 9, rI),
                      l("a", {
                        class: "button secondary",
                        href: lt.value
                      }, o(u(t)("library", "All publications")), 9, sI)
                    ])
                  ]))
                ])) : (p(), h("section", {
                  key: 4,
                  id: "library-catalogue",
                  class: ke(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Dt.loading }]),
                  "aria-labelledby": "library-catalogue-heading",
                  "aria-busy": Dt.loading ? "true" : "false"
                }, [
                  l("header", oI, [
                    Lr.value ? (p(), h("p", uI, o(pl.value), 1)) : E("", !0),
                    l("h2", {
                      id: "library-catalogue-heading",
                      ref_key: "catalogueHeadingElement",
                      ref: _e,
                      tabindex: "-1"
                    }, o(Cu.value), 513)
                  ]),
                  l("details", {
                    class: "library-mobile-filter-panel",
                    "data-library-control": "filter",
                    onToggle: bg
                  }, [
                    l("summary", {
                      class: "library-mobile-filter-trigger",
                      "aria-label": hg.value
                    }, [
                      l("span", dI, o(u(Ti)("library", "%n item", "%n items", Number(J.value.total || 0))), 1),
                      l("strong", null, o(pg.value), 1)
                    ], 8, cI),
                    l("form", {
                      method: "get",
                      class: "library-mobile-filter-form",
                      "aria-label": u(t)("library", "Mobile catalogue filters"),
                      onSubmit: Ce(lf, ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "folder",
                        value: x.folder
                      }, null, 8, pI),
                      (p(!0), h(W, null, de(Hd.value, (f) => (p(), h("input", {
                        key: `mobile-hidden-${f.key}`,
                        type: "hidden",
                        name: f.key,
                        value: f.value
                      }, null, 8, hI))), 128)),
                      l("fieldset", vI, [
                        l("legend", null, o(u(t)("library", "Content")), 1),
                        l("label", bI, [
                          l("span", null, o(u(t)("library", "Search")), 1),
                          ge(l("input", {
                            ref_key: "mobileFilterSearchInput",
                            ref: le,
                            "onUpdate:modelValue": b[46] || (b[46] = (f) => B.value = f),
                            "data-library-mobile-filter-search": "",
                            type: "search",
                            name: "q",
                            placeholder: u(t)("library", "Title, creator, description, filename or folder")
                          }, null, 8, gI), [
                            [We, B.value]
                          ])
                        ]),
                        l("label", null, [
                          te(o(u(t)("library", "Type")), 1),
                          ge(l("select", {
                            "onUpdate:modelValue": b[47] || (b[47] = (f) => x.type = f),
                            name: "type",
                            onChange: b[48] || (b[48] = (f) => vi(f))
                          }, [
                            l("option", mI, o(u(t)("library", "All types")), 1),
                            (p(!0), h(W, null, de(I.value, (f) => (p(), h("option", {
                              key: `mobile-type-${f}`,
                              value: f
                            }, o(f), 9, yI))), 128))
                          ], 544), [
                            [it, x.type]
                          ])
                        ]),
                        l("div", _I, [
                          l("label", wI, o(u(t)("library", "Publisher")), 1),
                          ge(l("input", {
                            id: "library-mobile-publisher-search",
                            "onUpdate:modelValue": b[49] || (b[49] = (f) => Q.value = f),
                            type: "search",
                            name: "publisherSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publishers"),
                            title: u(t)("library", "Exact publisher matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publisher-suggestions",
                            "aria-activedescendant": bf("mobile", "publisher"),
                            "aria-expanded": ie.value && ue.value.length > 0 ? "true" : "false",
                            onFocus: b[50] || (b[50] = (f) => gf("publisher")),
                            onKeydown: b[51] || (b[51] = (f) => mf(f, "publisher"))
                          }, null, 40, kI), [
                            [We, Q.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publisher",
                            value: x.publisher
                          }, null, 8, SI),
                          hi("publisher") ? (p(), h("small", CI, o(Fi("publisher")), 1)) : E("", !0),
                          U.value && ie.value && ue.value.length > 0 ? (p(), h("ul", TI, [
                            (p(!0), h(W, null, de(ue.value, (f, F) => (p(), h("li", {
                              id: Nu("mobile", "publisher", F),
                              key: `mobile-publisher-${f}`,
                              role: "option",
                              "aria-selected": bn.publisher === F ? "true" : "false"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publisher-suggestion",
                                onMousedown: b[52] || (b[52] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (oe) => uf(f, oe)
                              }, o(f), 41, EI)
                            ], 8, AI))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", xI, [
                          l("label", $I, o(u(t)("library", "Series / periodical")), 1),
                          ge(l("input", {
                            id: "library-mobile-publication-search",
                            "onUpdate:modelValue": b[53] || (b[53] = (f) => q.value = f),
                            type: "search",
                            name: "publicationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search series and periodicals"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-publication-suggestions",
                            "aria-expanded": Y.value && H.value.length > 0 ? "true" : "false",
                            onFocus: b[54] || (b[54] = (f) => Y.value = !0),
                            onKeydown: b[55] || (b[55] = ot((f) => Y.value = !1, ["escape"]))
                          }, null, 40, OI), [
                            [We, q.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "publication",
                            value: x.publication
                          }, null, 8, NI),
                          hi("publication") ? (p(), h("small", RI, o(Fi("publication")), 1)) : E("", !0),
                          U.value && Y.value && H.value.length > 0 ? (p(), h("ul", II, [
                            (p(!0), h(W, null, de(H.value, (f) => (p(), h("li", {
                              key: `mobile-publication-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-publication-suggestion",
                                onMousedown: b[56] || (b[56] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => sf(f, F)
                              }, o(f), 41, LI)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", PI, [
                          l("label", DI, o(u(t)("library", "Publication year")), 1),
                          ge(l("input", {
                            id: "library-mobile-year-search",
                            "onUpdate:modelValue": b[57] || (b[57] = (f) => Ht.value = f),
                            type: "search",
                            name: "yearSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search publication years"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-year-suggestions",
                            "aria-expanded": ui.value && pi.value.length > 0 ? "true" : "false",
                            onFocus: b[58] || (b[58] = (f) => ui.value = !0),
                            onKeydown: b[59] || (b[59] = ot((f) => ui.value = !1, ["escape"]))
                          }, null, 40, FI), [
                            [We, Ht.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "year",
                            value: x.year
                          }, null, 8, MI),
                          hi("year") ? (p(), h("small", UI, o(Fi("year")), 1)) : E("", !0),
                          U.value && ui.value && pi.value.length > 0 ? (p(), h("ul", zI, [
                            (p(!0), h(W, null, de(pi.value, (f) => (p(), h("li", {
                              key: `mobile-year-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-year-suggestion",
                                onMousedown: b[60] || (b[60] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => vf(f, F)
                              }, o(f), 41, jI)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", BI, [
                          l("label", HI, o(u(t)("library", "Creator")), 1),
                          ge(l("input", {
                            id: "library-mobile-creator-search",
                            "onUpdate:modelValue": b[61] || (b[61] = (f) => Ue.value = f),
                            type: "search",
                            name: "creatorSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search creators"),
                            title: u(t)("library", "Match an individual author; existing full-field filters remain usable"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-creator-suggestions",
                            "aria-expanded": Ne.value && $e.value.length > 0 ? "true" : "false",
                            onFocus: b[62] || (b[62] = (f) => Ne.value = !0),
                            onKeydown: b[63] || (b[63] = ot((f) => Ne.value = !1, ["escape"]))
                          }, null, 40, VI), [
                            [We, Ue.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "creator",
                            value: x.creator
                          }, null, 8, qI),
                          hi("creator") ? (p(), h("small", KI, o(Fi("creator")), 1)) : E("", !0),
                          U.value && Ne.value && $e.value.length > 0 ? (p(), h("ul", GI, [
                            (p(!0), h(W, null, de($e.value, (f) => (p(), h("li", {
                              key: `mobile-creator-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-creator-suggestion",
                                onMousedown: b[64] || (b[64] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => of(f, F)
                              }, o(f), 41, WI)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("label", null, [
                          te(o(u(t)("library", "Format")), 1),
                          ge(l("select", {
                            "onUpdate:modelValue": b[65] || (b[65] = (f) => x.format = f),
                            name: "format",
                            onChange: b[66] || (b[66] = (f) => vi(f))
                          }, [
                            l("option", YI, o(u(t)("library", "All formats")), 1),
                            (p(!0), h(W, null, de($.value, (f) => (p(), h("option", {
                              key: `mobile-format-${f}`,
                              value: f
                            }, o(El(f)), 9, ZI))), 128))
                          ], 544), [
                            [it, x.format]
                          ])
                        ]),
                        l("div", XI, [
                          l("label", JI, o(u(t)("library", "Subject")), 1),
                          ge(l("input", {
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
                            "aria-expanded": ne.value && pe.value.length > 0 ? "true" : "false",
                            onFocus: b[68] || (b[68] = (f) => ne.value = !0),
                            onKeydown: b[69] || (b[69] = ot((f) => ne.value = !1, ["escape"]))
                          }, null, 40, QI), [
                            [We, X.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "subject",
                            value: x.subject
                          }, null, 8, eL),
                          hi("subject") ? (p(), h("small", tL, o(Fi("subject")), 1)) : E("", !0),
                          U.value && ne.value && pe.value.length > 0 ? (p(), h("ul", iL, [
                            (p(!0), h(W, null, de(pe.value, (f) => (p(), h("li", {
                              key: `mobile-subject-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-subject-suggestion",
                                onMousedown: b[70] || (b[70] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => hf(f, F)
                              }, o(f), 41, nL)
                            ]))), 128))
                          ])) : E("", !0)
                        ]),
                        l("div", aL, [
                          l("label", rL, o(u(t)("library", "Classification")), 1),
                          ge(l("input", {
                            id: "library-mobile-classification-search",
                            "onUpdate:modelValue": b[71] || (b[71] = (f) => we.value = f),
                            type: "search",
                            name: "classificationSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search classifications"),
                            title: u(t)("library", "Exact classification matches only"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-mobile-classification-suggestions",
                            "aria-expanded": Oe.value && Ve.value.length > 0 ? "true" : "false",
                            onFocus: b[72] || (b[72] = (f) => Oe.value = !0),
                            onKeydown: b[73] || (b[73] = ot((f) => Oe.value = !1, ["escape"]))
                          }, null, 40, sL), [
                            [We, we.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "classification",
                            value: x.classification
                          }, null, 8, lL),
                          U.value && Oe.value && Ve.value.length > 0 ? (p(), h("ul", oL, [
                            (p(!0), h(W, null, de(Ve.value, (f) => (p(), h("li", {
                              key: `mobile-classification-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-classification-suggestion",
                                onMousedown: b[74] || (b[74] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => cf(f, F)
                              }, o(f), 41, uL)
                            ]))), 128))
                          ])) : E("", !0)
                        ])
                      ]),
                      l("fieldset", cL, [
                        l("legend", null, o(u(t)("library", "Location")), 1),
                        l("label", null, [
                          te(o(u(t)("library", "Shelf")), 1),
                          ge(l("select", {
                            "onUpdate:modelValue": b[75] || (b[75] = (f) => x.shelf = f),
                            name: "shelf",
                            onChange: b[76] || (b[76] = (f) => vi(f))
                          }, [
                            l("option", dL, o(u(t)("library", "All shelves")), 1),
                            (p(!0), h(W, null, de(C.value, (f) => (p(), h("option", {
                              key: `mobile-shelf-${f}`,
                              value: f
                            }, o(f), 9, fL))), 128))
                          ], 544), [
                            [it, x.shelf]
                          ])
                        ]),
                        l("div", pL, [
                          l("label", hL, o(u(t)("library", "Folder")), 1),
                          ge(l("input", {
                            id: "library-mobile-folder-search",
                            "onUpdate:modelValue": b[77] || (b[77] = (f) => st.value = f),
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
                            onKeydown: b[79] || (b[79] = ot((f) => ee.value = !1, ["escape"]))
                          }, null, 40, vL), [
                            [We, st.value]
                          ]),
                          U.value && ee.value && O.value.length > 0 ? (p(), h("ul", bL, [
                            (p(!0), h(W, null, de(O.value, (f) => (p(), h("li", {
                              key: `mobile-folder-${f}`,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-folder-suggestion",
                                onMousedown: b[80] || (b[80] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => ff(f, F)
                              }, o(f), 41, gL)
                            ]))), 128))
                          ])) : E("", !0)
                        ])
                      ]),
                      l("fieldset", mL, [
                        l("legend", null, o(u(t)("library", "Review")), 1),
                        l("label", null, [
                          te(o(u(t)("library", "Scan status")), 1),
                          ge(l("select", {
                            "onUpdate:modelValue": b[81] || (b[81] = (f) => x.status = f),
                            name: "status",
                            onChange: b[82] || (b[82] = (f) => vi(f))
                          }, [
                            l("option", yL, o(u(t)("library", "All scan statuses")), 1),
                            (p(!0), h(W, null, de(N.value, (f) => (p(), h("option", {
                              key: `mobile-scan-${f}`,
                              value: f
                            }, o(f), 9, _L))), 128))
                          ], 544), [
                            [it, x.status]
                          ])
                        ]),
                        l("label", null, [
                          te(o(u(t)("library", "Workflow status")), 1),
                          ge(l("select", {
                            "onUpdate:modelValue": b[83] || (b[83] = (f) => x.workflowStatus = f),
                            name: "workflowStatus",
                            onChange: b[84] || (b[84] = (f) => vi(f))
                          }, [
                            l("option", wL, o(u(t)("library", "All workflow statuses")), 1),
                            (p(!0), h(W, null, de(ce.value, (f) => (p(), h("option", {
                              key: `mobile-workflow-${f}`,
                              value: f
                            }, o(f), 9, kL))), 128))
                          ], 544), [
                            [it, x.workflowStatus]
                          ])
                        ]),
                        l("label", null, [
                          te(o(u(t)("library", "Suggested updates")), 1),
                          ge(l("select", {
                            "onUpdate:modelValue": b[85] || (b[85] = (f) => x.scannerConflicts = f),
                            name: "scannerConflicts",
                            onChange: b[86] || (b[86] = (f) => vi(f))
                          }, [
                            l("option", SL, o(u(t)("library", "All metadata")), 1),
                            l("option", CL, o(u(t)("library", "Suggested updates")), 1)
                          ], 544), [
                            [it, x.scannerConflicts]
                          ])
                        ])
                      ]),
                      l("fieldset", TL, [
                        l("legend", null, o(u(t)("library", "Personal / display")), 1),
                        l("div", AL, [
                          l("label", EL, o(u(t)("library", "Nextcloud tag")), 1),
                          ge(l("input", {
                            id: "library-tag-search",
                            "onUpdate:modelValue": b[87] || (b[87] = (f) => bt.value = f),
                            type: "search",
                            name: "tagSearch",
                            autocomplete: "off",
                            placeholder: u(t)("library", "Search tags"),
                            role: "combobox",
                            "aria-autocomplete": "list",
                            "aria-controls": "library-tag-suggestions",
                            "aria-expanded": mt.value && oi.value.length > 0 ? "true" : "false",
                            onFocus: b[88] || (b[88] = (f) => mt.value = !0),
                            onKeydown: b[89] || (b[89] = ot((f) => mt.value = !1, ["escape"]))
                          }, null, 40, xL), [
                            [We, bt.value]
                          ]),
                          l("input", {
                            type: "hidden",
                            name: "tag",
                            value: x.tag
                          }, null, 8, $L),
                          mt.value && oi.value.length > 0 ? (p(), h("ul", OL, [
                            (p(!0), h(W, null, de(oi.value, (f) => (p(), h("li", {
                              key: f,
                              role: "option"
                            }, [
                              l("button", {
                                type: "button",
                                class: "library-tag-suggestion",
                                onMousedown: b[90] || (b[90] = Ce(() => {
                                }, ["prevent"])),
                                onClick: (F) => df(f, F)
                              }, o(f), 41, NL)
                            ]))), 128))
                          ])) : E("", !0),
                          l("button", {
                            type: "submit",
                            class: ke(["button secondary library-tag-apply", hn("tag")])
                          }, o(u(t)("library", "Apply tag")), 3)
                        ]),
                        l("label", null, [
                          te(o(u(t)("library", "Sort")), 1),
                          ge(l("select", {
                            "onUpdate:modelValue": b[91] || (b[91] = (f) => x.sort = f),
                            name: "sort",
                            onChange: Kt
                          }, [
                            l("option", RL, o(u(t)("library", "Title")), 1),
                            l("option", IL, o(u(t)("library", "Date added")), 1),
                            l("option", LL, o(u(t)("library", "Publication date")), 1),
                            l("option", PL, o(u(t)("library", "Series")), 1),
                            l("option", DL, o(u(t)("library", "Recently opened")), 1),
                            l("option", FL, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [it, x.sort]
                          ])
                        ]),
                        l("label", null, [
                          te(o(u(t)("library", "View")), 1),
                          ge(l("select", {
                            "onUpdate:modelValue": b[92] || (b[92] = (f) => x.view = f),
                            name: "view",
                            onChange: Kt
                          }, [
                            l("option", ML, o(u(t)("library", "Compact")), 1),
                            l("option", UL, o(u(t)("library", "List")), 1)
                          ], 544), [
                            [it, x.view]
                          ])
                        ])
                      ]),
                      l("div", zL, [
                        Zi.value.length > 0 ? (p(), h("a", {
                          key: 0,
                          href: Tl(),
                          class: "button secondary library-mobile-filter-clear",
                          onClick: Ce(Al, ["prevent"])
                        }, o(u(t)("library", "Clear all")), 9, jL)) : E("", !0),
                        l("button", BL, o(vg.value), 1)
                      ])
                    ], 40, fI)
                  ], 32),
                  l("nav", {
                    class: "library-catalogue-workspace library-workspace-menubar",
                    "aria-label": u(t)("library", "One catalogue workspace")
                  }, [
                    l("div", VL, [
                      l("section", qL, [
                        l("h3", {
                          title: u(t)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                        }, o(u(t)("library", "Collections")), 9, KL),
                        l("form", {
                          method: "post",
                          action: Pt.value,
                          class: "library-saved-collection-save-form",
                          title: Lu.value ? "" : u(t)("library", "Choose search terms or filters first, then save them as a custom collection.")
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: _t.value
                          }, null, 8, WL),
                          l("input", {
                            type: "hidden",
                            name: "savedCollectionFilters",
                            value: tm.value
                          }, null, 8, YL),
                          l("label", null, [
                            l("span", ZL, o(u(t)("library", "Collection name")), 1),
                            l("input", {
                              type: "text",
                              name: "savedCollectionName",
                              placeholder: u(t)("library", "e.g. Bremen photo books"),
                              disabled: !Lu.value,
                              autocomplete: "off"
                            }, null, 8, XL)
                          ]),
                          l("button", {
                            type: "submit",
                            class: "button secondary",
                            disabled: !Lu.value,
                            title: u(t)("library", "Save current view")
                          }, o(u(t)("library", "Save")), 9, JL)
                        ], 8, GL)
                      ]),
                      l("form", {
                        method: "get",
                        class: "library-quick-filter-bar library-catalogue-toolbar",
                        "aria-label": u(t)("library", "Catalogue toolbar"),
                        onSubmit: Ce(Kt, ["prevent"])
                      }, [
                        (p(!0), h(W, null, de(mg.value, (f) => (p(), h("input", {
                          key: f.key,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, eP))), 128)),
                        l("label", tP, [
                          te(o(u(t)("library", "Sort")), 1),
                          ge(l("select", {
                            "onUpdate:modelValue": b[93] || (b[93] = (f) => x.sort = f),
                            name: "sort",
                            onChange: Kt
                          }, [
                            l("option", iP, o(u(t)("library", "Title")), 1),
                            l("option", nP, o(u(t)("library", "Date added")), 1),
                            l("option", aP, o(u(t)("library", "Publication date")), 1),
                            l("option", rP, o(u(t)("library", "Series")), 1),
                            l("option", sP, o(u(t)("library", "Recently opened")), 1),
                            l("option", lP, o(u(t)("library", "Format")), 1)
                          ], 544), [
                            [it, x.sort]
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
                            class: ke({ active: rr.value === "compact" }),
                            "aria-pressed": rr.value === "compact" ? "true" : "false",
                            onClick: b[94] || (b[94] = (f) => kf("compact"))
                          }, o(u(t)("library", "Compact")), 11, uP),
                          l("button", {
                            type: "button",
                            "data-library-view-mode": "list",
                            class: ke({ active: rr.value === "list" }),
                            "aria-pressed": rr.value === "list" ? "true" : "false",
                            onClick: b[95] || (b[95] = (f) => kf("list"))
                          }, o(u(t)("library", "List")), 11, cP)
                        ], 8, oP)
                      ], 40, QL)
                    ])
                  ], 8, HL),
                  It.value ? (p(), h("p", dP, o(It.value), 1)) : E("", !0),
                  Lt.value ? (p(), h("p", fP, o(Lt.value), 1)) : E("", !0),
                  pt.value ? (p(), h("p", pP, o(pt.value), 1)) : E("", !0),
                  l("div", hP, [
                    Dt.loading ? (p(), h("span", vP, o(u(t)("library", "Updating catalogue…")), 1)) : Dt.completed ? (p(), h("span", bP, o(u(Ti)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(J.value.total || 0))), 1)) : E("", !0)
                  ]),
                  Lr.value ? (p(), h("section", gP, [
                    l("p", mP, o(pl.value), 1),
                    l("h3", {
                      id: "library-discovery-heading",
                      title: nr.value ? u(t)("library", "Items by this creator, sorted by publication context when available.") : ir.value ? u(t)("library", "Items from this publication year, sorted by publication date when available.") : u(t)("library", "Items in this publication, sorted by issue/date context when available.")
                    }, o(Pr.value), 9, yP),
                    l("div", {
                      class: "library-discovery-hero-metrics",
                      "aria-label": u(t)("library", "Discovery summary")
                    }, [
                      l("span", null, o(u(Ti)("library", "%n item", "%n items", J.value.total)), 1),
                      P.value?.earliestYear && P.value?.latestYear ? (p(), h("span", wP, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : E("", !0),
                      P.value?.datedCount ? (p(), h("span", kP, o(P.value.datedCount) + " " + o(u(t)("library", "dated")), 1)) : E("", !0),
                      P.value?.undatedCount > 0 ? (p(), h("span", SP, o(P.value.undatedCount) + " " + o(u(t)("library", "undated")), 1)) : E("", !0)
                    ], 8, _P),
                    tr.value && P.value ? (p(), h("aside", {
                      key: 0,
                      class: "library-publication-issue-context",
                      "aria-label": u(t)("library", "Publication issue/date context")
                    }, [
                      l("strong", null, o(u(t)("library", "Publication contents")), 1),
                      l("span", null, o(u(Ti)("library", "%n item", "%n items", P.value.itemCount)), 1),
                      P.value.earliestYear && P.value.latestYear ? (p(), h("span", TP, o(P.value.earliestYear) + "–" + o(P.value.latestYear), 1)) : E("", !0),
                      l("span", null, o(P.value.datedCount) + " " + o(u(t)("library", "with issue/date coverage")), 1),
                      P.value.undatedCount > 0 ? (p(), h("span", AP, o(P.value.undatedCount) + " " + o(u(t)("library", "without dates yet")), 1)) : E("", !0),
                      l("span", null, o(u(t)("library", "read-only grouping")), 1)
                    ], 8, CP)) : E("", !0),
                    tr.value && P.value?.issueGroups?.length ? (p(), h("section", EP, [
                      l("div", null, [
                        l("p", xP, o(u(t)("library", "Issue order")), 1),
                        l("h4", {
                          id: "library-publication-issue-groups-heading",
                          title: u(t)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                        }, o(u(t)("library", "Read-only issue/date grouping")), 9, $P)
                      ]),
                      l("div", {
                        class: "library-publication-issue-strip",
                        "aria-label": u(t)("library", "Visual issue strip")
                      }, [
                        (p(!0), h(W, null, de(P.value.issueGroups, (f) => (p(), h("a", {
                          key: `strip-${f.label}`,
                          class: "library-issue-strip-card",
                          href: f.items?.[0]?.detailsUrl || "#"
                        }, [
                          l("span", null, o(f.label), 1),
                          l("strong", null, o(f.items?.[0]?.issueLabel || u(t)("library", "Issue")), 1),
                          l("small", null, o(u(Ti)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                        ], 8, NP))), 128))
                      ], 8, OP),
                      P.value.gapRanges?.length ? (p(), h("p", RP, o(u(t)("library", "Gap")) + ": " + o(P.value.gapRanges.join(", ")), 1)) : E("", !0),
                      (p(!0), h(W, null, de(P.value.issueGroups, (f) => (p(), h("div", {
                        key: f.label,
                        class: "library-publication-issue-group"
                      }, [
                        l("h5", null, o(f.label), 1),
                        l("ol", null, [
                          (p(!0), h(W, null, de(f.items, (F, oe) => (p(), h("li", {
                            key: F.itemId
                          }, [
                            l("span", IP, o(F.issueLabel), 1),
                            l("a", {
                              href: F.detailsUrl || "#"
                            }, o(F.title), 9, LP),
                            l("small", null, [
                              te(o(F.publicationType), 1),
                              F.publicationDate ? (p(), h(W, { key: 0 }, [
                                te(" · " + o(F.publicationDate), 1)
                              ], 64)) : E("", !0)
                            ]),
                            l("small", PP, [
                              oe > 0 ? (p(), h(W, { key: 0 }, [
                                te(o(u(t)("library", "Previous issue")), 1)
                              ], 64)) : E("", !0),
                              oe > 0 && oe < f.items.length - 1 ? (p(), h(W, { key: 1 }, [
                                te(" · ")
                              ], 64)) : E("", !0),
                              oe < f.items.length - 1 ? (p(), h(W, { key: 2 }, [
                                te(o(u(t)("library", "Next issue")), 1)
                              ], 64)) : E("", !0)
                            ])
                          ]))), 128))
                        ])
                      ]))), 128)),
                      P.value.unknownIssueItems?.length ? (p(), h("details", DP, [
                        l("summary", {
                          title: u(t)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                        }, o(u(t)("library", "Unknown issue/date")) + " · " + o(P.value.unknownIssueItems.length), 9, FP)
                      ])) : E("", !0)
                    ])) : E("", !0),
                    l("p", null, [
                      l("a", {
                        href: lt.value,
                        class: "button secondary library-discovery-back-link"
                      }, o(u(t)("library", "Back to full catalogue")), 9, MP)
                    ])
                  ])) : E("", !0),
                  l("div", UP, [
                    l("p", zP, o(u(t)("library", "Showing")) + " " + o(J.value.from) + "–" + o(J.value.to) + " " + o(u(t)("library", "of")) + " " + o(J.value.total) + " " + o(u(t)("library", "catalogue items")), 1),
                    l("nav", {
                      class: "library-pagination library-pagination--top",
                      "aria-label": u(t)("library", "Catalogue pagination")
                    }, [
                      l("span", BP, [
                        te(o(u(t)("library", "Page")) + " " + o(J.value.page), 1),
                        J.value.total > 0 ? (p(), h("span", HP, " · " + o(J.value.from) + "–" + o(J.value.to), 1)) : E("", !0)
                      ]),
                      J.value.previousUrl ? (p(), h("a", {
                        key: 0,
                        href: J.value.previousUrl
                      }, o(u(t)("library", "Previous")), 9, VP)) : (p(), h("span", qP, o(u(t)("library", "Previous")), 1)),
                      J.value.nextUrl ? (p(), h("a", {
                        key: 2,
                        href: J.value.nextUrl
                      }, o(u(t)("library", "Next")), 9, KP)) : (p(), h("span", GP, o(u(t)("library", "Next")), 1))
                    ], 8, jP)
                  ]),
                  T.value.length === 0 ? (p(), h("div", {
                    key: 4,
                    class: ke(["library-empty-content", { "library-first-run-guidance": ma.value || he.value, "library-filter-empty-state": A.value && !ma.value && !he.value }]),
                    role: "status"
                  }, [
                    ma.value ? (p(), h(W, { key: 0 }, [
                      l("h3", {
                        title: u(t)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                      }, o(u(t)("library", "Start with one Library root")), 9, WP),
                      l("p", YP, [
                        l("a", {
                          href: Vt.value,
                          class: "button primary"
                        }, o(u(t)("library", "Add a Library root")), 9, ZP),
                        l("span", XP, o(u(t)("library", "Run a scan after saving a root")), 1)
                      ])
                    ], 64)) : he.value ? (p(), h(W, { key: 1 }, [
                      l("h3", {
                        title: u(t)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                      }, o(u(t)("library", "No enabled Library roots")), 9, JP),
                      l("p", QP, [
                        l("a", {
                          href: Vt.value,
                          class: "button primary"
                        }, o(u(t)("library", "Open Library settings")), 9, e8)
                      ])
                    ], 64)) : A.value ? (p(), h(W, { key: 2 }, [
                      l("h3", {
                        title: u(t)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                      }, o(u(t)("library", "No items match these filters")), 9, t8),
                      Zi.value.length > 0 ? (p(), h("nav", {
                        key: 0,
                        class: "library-empty-filter-chips",
                        "aria-label": u(t)("library", "Remove active filters")
                      }, [
                        (p(!0), h(W, null, de(Zi.value, (f) => (p(), h("a", {
                          key: `empty-${f.key}`,
                          href: Zr(f.key),
                          class: "library-filter-chip",
                          "aria-label": `${u(t)("library", "Remove filter")}: ${f.label}`,
                          onClick: Ce((F) => Xr(f.key), ["prevent"])
                        }, [
                          l("strong", null, [
                            te(o(f.label), 1),
                            f.displayValue ? (p(), h(W, { key: 0 }, [
                              te(":")
                            ], 64)) : E("", !0)
                          ]),
                          f.displayValue ? (p(), h(W, { key: 0 }, [
                            b[124] || (b[124] = te(o(" "), -1)),
                            l("span", {
                              class: "library-filter-chip-value",
                              title: f.value
                            }, o(f.displayValue), 9, a8)
                          ], 64)) : E("", !0),
                          b[125] || (b[125] = te()),
                          b[126] || (b[126] = l("span", { "aria-hidden": "true" }, "×", -1))
                        ], 8, n8))), 128))
                      ], 8, i8)) : E("", !0),
                      Ur.value ? (p(), h("p", r8, o(u(t)("library", "Try removing {filter}.", { filter: Ur.value.displayValue ? `${Ur.value.label}: ${Ur.value.displayValue}` : Ur.value.label })), 1)) : E("", !0),
                      l("p", s8, [
                        fg.value ? (p(), h("a", {
                          key: 0,
                          href: Jg(),
                          class: "button secondary library-empty-clear-search",
                          onClick: b[96] || (b[96] = Ce((f) => Xr("q"), ["prevent"]))
                        }, o(u(t)("library", "Clear search")), 9, l8)) : E("", !0)
                      ])
                    ], 64)) : (p(), h(W, { key: 3 }, [
                      l("h3", {
                        title: u(t)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                      }, o(u(t)("library", "No catalogue items yet")), 9, o8),
                      l("p", u8, [
                        l("a", {
                          href: Vt.value,
                          class: "button primary"
                        }, o(u(t)("library", "Run a scan from settings")), 9, c8)
                      ])
                    ], 64))
                  ], 2)) : E("", !0),
                  T.value.length > 0 ? (p(), h("section", {
                    key: 5,
                    class: ke(["library-list-selection", { "library-list-selection--active": ti.value.length }]),
                    "aria-label": u(t)("library", "Selection")
                  }, [
                    l("div", f8, [
                      l("label", p8, [
                        l("input", {
                          type: "checkbox",
                          checked: ti.value.length === T.value.length,
                          onChange: _g
                        }, null, 40, h8),
                        l("span", {
                          title: u(t)("library", "Select all publications on this page")
                        }, o(u(t)("library", "Select all")), 9, v8)
                      ]),
                      ti.value.length ? (p(), h("span", b8, o(u(Ti)("library", "%n publication selected", "%n publications selected", ti.value.length)), 1)) : E("", !0),
                      ge(fe(Qc, {
                        "item-ids": ti.value,
                        "request-token": _t.value,
                        "lists-url": jn.value,
                        "preferred-list-id": u(yt)
                      }, null, 8, ["item-ids", "request-token", "lists-url", "preferred-list-id"]), [
                        [Ha, ti.value.length]
                      ]),
                      ti.value.length ? ge((p(), h("select", {
                        key: 1,
                        "onUpdate:modelValue": b[97] || (b[97] = (f) => Li.value = f),
                        "aria-label": u(t)("library", "More actions")
                      }, [
                        l("option", m8, o(u(t)("library", "More actions")), 1),
                        l("option", y8, o(u(t)("library", "Add tag")), 1),
                        l("option", _8, o(u(t)("library", "Remove tag")), 1),
                        l("option", w8, o(u(t)("library", "Preview edit")), 1),
                        l("option", k8, o(u(t)("library", "Fresh covers")), 1),
                        l("option", S8, o(u(t)("library", "Reset metadata")), 1)
                      ], 8, g8)), [
                        [it, Li.value]
                      ]) : E("", !0)
                    ]),
                    ti.value.length && Li.value ? (p(), h("div", {
                      key: 0,
                      class: "library-selection-action",
                      onSubmitCapture: kg
                    }, [
                      Li.value === "tag" ? (p(), h("form", {
                        key: 0,
                        method: "post",
                        action: ga.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _t.value
                        }, null, 8, T8),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, A8)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: u(t)("library", "Applies only to the selected publications.")
                        }, o(u(t)("library", "Apply")), 9, E8)
                      ], 8, C8)) : E("", !0),
                      Li.value === "untag" ? (p(), h("form", {
                        key: 1,
                        method: "post",
                        action: ki.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _t.value
                        }, null, 8, $8),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: u(t)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, O8)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Removes the tag only from the selected publications.")
                        }, o(u(t)("library", "Remove")), 9, N8)
                      ], 8, x8)) : E("", !0),
                      Li.value === "reset" ? (p(), h("form", {
                        key: 2,
                        method: "post",
                        action: ku.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _t.value
                        }, null, 8, I8),
                        (p(!0), h(W, null, de(vl.value, (f) => (p(), h("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, L8))), 128)),
                        b[127] || (b[127] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Reset metadata")), 9, P8)
                      ], 8, R8)) : E("", !0),
                      Li.value === "edit" ? (p(), h("form", {
                        key: 3,
                        method: "post",
                        action: er.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _t.value
                        }, null, 8, F8),
                        (p(!0), h(W, null, de(vl.value, (f) => (p(), h("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, M8))), 128)),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Field")), 1),
                          l("select", U8, [
                            l("option", z8, o(u(t)("library", "Publication type")), 1),
                            l("option", j8, o(u(t)("library", "Subtitle")), 1),
                            l("option", B8, o(u(t)("library", "Creators")), 1),
                            l("option", H8, o(u(t)("library", "Series / periodical")), 1),
                            l("option", V8, o(u(t)("library", "Series")), 1),
                            l("option", q8, o(u(t)("library", "Part in series")), 1),
                            l("option", K8, o(u(t)("library", "Genre")), 1),
                            l("option", G8, o(u(t)("library", "Publication date")), 1),
                            l("option", W8, o(u(t)("library", "Language")), 1),
                            l("option", Y8, o(u(t)("library", "Publisher")), 1),
                            l("option", Z8, o(u(t)("library", "Subjects")), 1),
                            l("option", X8, o(u(t)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, o(u(t)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: u(t)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, J8)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Preview first, then apply from the review page.")
                        }, o(u(t)("library", "Preview edit")), 9, Q8)
                      ], 8, D8)) : E("", !0),
                      Li.value === "covers" ? (p(), h("form", {
                        key: 4,
                        method: "post",
                        action: Su.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _t.value
                        }, null, 8, t5),
                        (p(!0), h(W, null, de(vl.value, (f) => (p(), h("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, i5))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: u(t)("library", "Batch actions for selected publications")
                        }, o(u(t)("library", "Fresh covers")), 9, n5)
                      ], 8, e5)) : E("", !0),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: b[98] || (b[98] = (f) => Li.value = "")
                      }, o(u(t)("library", "Cancel")), 1)
                    ], 32)) : E("", !0)
                  ], 10, d8)) : E("", !0),
                  Nr.value && (u(ul) === "building" || Object.values(u(qt)).some((f) => f.status === "partial")) ? (p(), h("p", a5, o(u(t)("library", "Suggestions are incomplete while indexing or when candidate limits are reached.")), 1)) : E("", !0),
                  T.value.length > 0 && rr.value === "list" ? (p(), h("div", r5, [
                    l("table", s5, [
                      l("caption", l5, o(u(t)("library", "Catalogue list")), 1),
                      l("thead", null, [
                        l("tr", null, [
                          l("th", o5, [
                            l("span", u5, o(u(t)("library", "Selection")), 1)
                          ]),
                          l("th", c5, [
                            l("span", d5, o(u(t)("library", "Cover")), 1)
                          ]),
                          l("th", f5, o(u(t)("library", "Title")), 1),
                          l("th", p5, o(u(t)("library", "Creators")), 1),
                          l("th", h5, o(u(t)("library", "Publication date")), 1),
                          l("th", v5, o(u(t)("library", "Series")), 1),
                          l("th", b5, o(u(t)("library", "Format")), 1),
                          l("th", g5, o(u(t)("library", "Shelf")), 1),
                          l("th", m5, o(u(t)("library", "Actions")), 1)
                        ])
                      ]),
                      l("tbody", null, [
                        (p(!0), h(W, null, de(T.value, (f) => (p(), h("tr", {
                          key: f.id,
                          class: ke(["library-catalogue-list-row", { "library-catalogue-list-row--selected": gl.value.has(Number(f.id)), "library-catalogue-list-row--open": Hn.value && Number(ya.value) === Number(f.id) }])
                        }, [
                          l("td", y5, [
                            l("label", _5, [
                              l("input", {
                                type: "checkbox",
                                checked: gl.value.has(Number(f.id)),
                                "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                                onChange: (F) => Kd(f.id, F.currentTarget.checked)
                              }, null, 40, w5)
                            ])
                          ]),
                          l("td", k5, [
                            l("button", {
                              type: "button",
                              class: "library-catalogue-list-cover",
                              "aria-label": `${u(t)("library", "Details")}: ${f.title}`,
                              onClick: (F) => Ui(f, F)
                            }, [
                              l("img", {
                                src: f.coverUrl,
                                alt: "",
                                loading: "lazy",
                                decoding: "async"
                              }, null, 8, C5)
                            ], 8, S5)
                          ]),
                          l("th", T5, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button library-catalogue-list-title",
                              onClick: (F) => Ui(f, F)
                            }, [
                              l("bdi", E5, o(f.title), 1)
                            ], 8, A5),
                            u(qt)[f.id]?.count ? (p(), h("a", {
                              key: 0,
                              class: "library-duplicate-badge",
                              href: `${lt.value}?duplicates=1&bookId=${f.id}`
                            }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(qt)[f.id].count) + o(u(qt)[f.id].status === "partial" ? "+" : ""), 9, x5)) : E("", !0)
                          ]),
                          l("td", $5, [
                            f.creators ? (p(), h("bdi", O5, o(f.creators), 1)) : (p(), h("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, N5))
                          ]),
                          l("td", null, [
                            f.publicationDate ? (p(), h("time", {
                              key: 0,
                              datetime: f.publicationDate
                            }, o(f.publicationDate), 9, R5)) : (p(), h("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, I5))
                          ]),
                          l("td", null, [
                            f.publication ? (p(), h("bdi", L5, o(f.publication), 1)) : (p(), h("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, P5))
                          ]),
                          l("td", null, [
                            f.extension || f.publicationType ? (p(), h("bdi", {
                              key: 0,
                              class: ke(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                              dir: f.extension ? "ltr" : "auto"
                            }, o(f.extension ? El(f.extension) : f.publicationType), 11, D5)) : (p(), h("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, F5))
                          ]),
                          l("td", null, [
                            f.shelf ? (p(), h("bdi", M5, o(f.shelf), 1)) : (p(), h("span", {
                              key: 1,
                              "aria-label": u(t)("library", "Unknown")
                            }, "—", 8, U5))
                          ]),
                          l("td", z5, [
                            l("a", {
                              class: "button primary",
                              href: f.openUrl,
                              onClick: (F) => Pi(f, F)
                            }, o(u(t)("library", "Open")), 9, j5),
                            l("button", {
                              type: "button",
                              class: "button secondary",
                              onClick: (F) => Ui(f, F)
                            }, o(u(t)("library", "Details")), 9, B5)
                          ])
                        ], 2))), 128))
                      ])
                    ])
                  ])) : T.value.length > 0 ? (p(), h("div", {
                    key: 8,
                    class: ke(["library-cover-gallery", lg.value])
                  }, [
                    (p(!0), h(W, null, de(T.value, (f) => (p(), h("article", {
                      key: f.id,
                      class: ke(["library-cover-card", { "library-cover-card--selected": gl.value.has(Number(f.id)), "library-cover-card--open": Hn.value && Number(ya.value) === Number(f.id) }])
                    }, [
                      l("label", H5, [
                        l("input", {
                          type: "checkbox",
                          checked: gl.value.has(Number(f.id)),
                          "aria-label": `${u(t)("library", "Select publication")}: ${f.title}`,
                          onChange: (F) => Kd(f.id, F.currentTarget.checked)
                        }, null, 40, V5)
                      ]),
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                        "aria-expanded": Hn.value && Number(ya.value) === Number(f.id) ? "true" : "false",
                        onClick: (F) => Ui(f, F)
                      }, [
                        l("span", {
                          id: `library-details-action-${f.id}`,
                          class: "hidden-visually"
                        }, o(u(t)("library", "Details")), 9, K5),
                        fe(yT, {
                          src: f.coverUrl
                        }, null, 8, ["src"])
                      ], 8, q5),
                      l("form", {
                        method: "post",
                        action: f.starUrl,
                        class: "library-cover-star-form",
                        onSubmit: Ce((F) => Af(f, F), ["prevent"])
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: _t.value
                        }, null, 8, W5),
                        b[128] || (b[128] = l("input", {
                          type: "hidden",
                          name: "returnTo",
                          value: "catalogue"
                        }, null, -1)),
                        l("input", {
                          type: "hidden",
                          name: "starred",
                          value: f.starred ? "0" : "1"
                        }, null, 8, Y5),
                        l("button", {
                          type: "submit",
                          class: ke(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                          "aria-pressed": f.starred ? "true" : "false",
                          title: f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-label": f.starred ? u(t)("library", "Unstar this publication") : u(t)("library", "Star this publication"),
                          "aria-busy": Jr[f.id] ? "true" : void 0,
                          disabled: Jr[f.id],
                          onClick: Ce((F) => Af(f, F), ["prevent"])
                        }, o(f.starred ? "★" : "☆"), 11, Z5),
                        Qr[f.id] ? (p(), h("span", {
                          key: 0,
                          "data-library-star-error": f.id,
                          class: "library-star-feedback",
                          role: "alert"
                        }, o(Qr[f.id]), 9, X5)) : E("", !0)
                      ], 40, G5),
                      l("div", J5, [
                        l("div", Q5, [
                          u(qt)[f.id]?.count ? (p(), h("a", {
                            key: 0,
                            class: "library-duplicate-badge",
                            href: `${lt.value}?duplicates=1&bookId=${f.id}`
                          }, o(u(t)("library", "Possible duplicates")) + " · " + o(u(qt)[f.id].count) + o(u(qt)[f.id].status === "partial" ? "+" : ""), 9, eD)) : E("", !0),
                          l("h3", {
                            id: `library-card-title-${f.id}`
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-cover-title-button",
                              onClick: (F) => Ui(f, F)
                            }, [
                              l("bdi", nD, o(f.title), 1)
                            ], 8, iD)
                          ], 8, tD),
                          f.creators ? (p(), h("p", aD, [
                            l("bdi", rD, o(f.creators), 1)
                          ])) : E("", !0),
                          Sf(f) ? (p(), h("p", sD, [
                            l("bdi", lD, o(Sf(f)), 1)
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
                    l("span", uD, [
                      te(o(u(t)("library", "Page")) + " " + o(J.value.page), 1),
                      J.value.total > 0 ? (p(), h("span", cD, " · " + o(J.value.from) + "–" + o(J.value.to), 1)) : E("", !0)
                    ]),
                    J.value.previousUrl ? (p(), h("a", {
                      key: 0,
                      href: J.value.previousUrl
                    }, o(u(t)("library", "Previous")), 9, dD)) : (p(), h("span", fD, o(u(t)("library", "Previous")), 1)),
                    J.value.nextUrl ? (p(), h("a", {
                      key: 2,
                      href: J.value.nextUrl
                    }, o(u(t)("library", "Next")), 9, pD)) : (p(), h("span", hD, o(u(t)("library", "Next")), 1))
                  ], 8, oD)) : E("", !0)
                ], 10, lI))
              ], 64))
            ], 8, q4)
          ]),
          _: 1
        }),
        fe(u(j2), {
          ref_key: "sidebarComponent",
          ref: wa,
          class: "library-native-item-sidebar",
          open: Hn.value,
          "no-toggle": "",
          loading: ii.loading,
          name: Se.value?.title || u(t)("library", "Publication details"),
          subname: Se.value?.creators || "",
          role: ka.value ? "dialog" : void 0,
          "aria-modal": ka.value ? "true" : void 0,
          "aria-labelledby": ka.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": ka.value && Se.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: tf,
          onClosed: Ig,
          onClose: Vr
        }, {
          default: me(() => [
            l("div", vD, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Gd,
                class: "hidden-visually",
                tabindex: "-1"
              }, o(Se.value?.title || u(t)("library", "Publication details")), 513),
              ii.loading && !Se.value ? (p(), h("p", bD, o(u(t)("library", "Loading publication details…")), 1)) : ii.error ? (p(), h("div", {
                key: 1,
                class: "library-sidebar-state",
                role: ii.missing ? "status" : "alert"
              }, [
                l("p", null, o(ii.error), 1),
                ii.missing ? E("", !0) : (p(), h("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: b[99] || (b[99] = (f) => Hr(ya.value, { historyMode: "none" }))
                }, o(u(t)("library", "Try again")), 1))
              ], 8, gD)) : Se.value ? (p(), h(W, { key: 2 }, [
                l("p", mD, o(u(t)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", yD, [
                  l("span", _D, o(u(t)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Se.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, wD),
                  l("div", kD, [
                    l("p", SD, [
                      l("bdi", CD, o(Se.value.publicationType || u(t)("library", "Publication")), 1),
                      Se.value.extension ? (p(), h("span", TD, [
                        b[129] || (b[129] = te(" · ", -1)),
                        l("bdi", AD, o(El(Se.value.extension)), 1)
                      ])) : E("", !0)
                    ]),
                    l("div", ED, [
                      l("a", {
                        class: "button primary",
                        href: Se.value.openUrl,
                        onClick: b[100] || (b[100] = (f) => Pi(Se.value, f))
                      }, o(u(t)("library", "Open")), 9, xD),
                      fe(u(Rd), {
                        "aria-label": u(t)("library", "File and maintenance actions")
                      }, {
                        default: me(() => [
                          fe(u(yc), {
                            href: Se.value.filesUrl
                          }, {
                            default: me(() => [
                              te(o(u(t)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          fe(u(yc), {
                            href: Se.value.downloadUrl
                          }, {
                            default: me(() => [
                              te(o(u(t)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          fe(u(yc), {
                            href: Se.value.detailsUrl
                          }, {
                            default: me(() => [
                              te(o(u(t)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                (p(), De(Qc, {
                  key: Se.value.id,
                  "item-ids": [Number(Se.value.id)],
                  "request-token": _t.value,
                  "lists-url": jn.value
                }, null, 8, ["item-ids", "request-token", "lists-url"])),
                l("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": u(t)("library", "Publication detail sections")
                }, [
                  (p(), h(W, null, de(Cg, (f) => l("button", {
                    key: f.key,
                    type: "button",
                    class: ke({ active: _a.value === f.key }),
                    "aria-current": _a.value === f.key ? "page" : void 0,
                    onClick: (F) => _a.value = f.key
                  }, o(u(t)("library", f.label)), 11, OD)), 64))
                ], 8, $D),
                _a.value === "overview" ? (p(), h("section", ND, [
                  l("h3", RD, o(u(t)("library", "Overview")), 1),
                  Wd.value ? (p(), h("p", ID, [
                    l("bdi", LD, o(Wd.value), 1)
                  ])) : E("", !0),
                  l("dl", PD, [
                    Se.value.publication ? (p(), h("div", DD, [
                      l("dt", null, o(u(t)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: wl("publication", Se.value.publication),
                          title: u(t)("library", "Filter catalogue by this series"),
                          onClick: b[101] || (b[101] = (f) => kl(f, "publication", Se.value.publication))
                        }, [
                          l("bdi", MD, o(Se.value.publication), 1)
                        ], 8, FD)
                      ])
                    ])) : E("", !0),
                    Se.value.publicationDate ? (p(), h("div", UD, [
                      l("dt", null, o(u(t)("library", "Date")), 1),
                      l("dd", null, [
                        Sa.value ? (p(), h("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: wl("year", Sa.value),
                          title: u(t)("library", "Filter catalogue by this publication year"),
                          onClick: b[102] || (b[102] = (f) => kl(f, "year", Sa.value))
                        }, o(Sa.value), 9, zD)) : E("", !0),
                        Sa.value && Se.value.publicationDate !== Sa.value ? (p(), h("span", jD, " · ")) : E("", !0),
                        Se.value.publicationDate !== Sa.value ? (p(), h("span", BD, o(Se.value.publicationDate), 1)) : E("", !0)
                      ])
                    ])) : E("", !0),
                    Se.value.publisher ? (p(), h("div", HD, [
                      l("dt", null, o(u(t)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: wl("publisher", Se.value.publisher),
                          title: u(t)("library", "Filter catalogue by this publisher"),
                          onClick: b[103] || (b[103] = (f) => kl(f, "publisher", Se.value.publisher))
                        }, [
                          l("bdi", qD, o(Se.value.publisher), 1)
                        ], 8, VD)
                      ])
                    ])) : E("", !0),
                    Yd.value.length ? (p(), h("div", KD, [
                      l("dt", null, o(u(t)("library", "Language")), 1),
                      l("dd", GD, [
                        (p(!0), h(W, null, de(Yd.value, (f) => (p(), h("a", {
                          key: f,
                          class: "library-detail-facet-link",
                          href: wl("language", f),
                          title: u(t)("library", "Filter catalogue by this language"),
                          onClick: (F) => kl(F, "language", f)
                        }, [
                          l("bdi", YD, o(f), 1)
                        ], 8, WD))), 128))
                      ])
                    ])) : E("", !0),
                    Se.value.shelf ? (p(), h("div", ZD, [
                      l("dt", null, o(u(t)("library", "Shelf")), 1),
                      l("dd", null, o(Se.value.shelf), 1)
                    ])) : E("", !0)
                  ])
                ])) : _a.value === "metadata" ? (p(), h("section", XD, [
                  Nr.value ? (p(), De(eg, {
                    key: `${Se.value.id}:${Se.value.title}:${Se.value.creators}`,
                    "item-id": Number(Se.value.id),
                    "request-token": _t.value
                  }, null, 8, ["item-id", "request-token"])) : E("", !0),
                  l("h3", JD, o(u(t)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ce(Ng, ["prevent"])
                  }, [
                    l("label", null, [
                      te(o(u(t)("library", "Title")), 1),
                      ge(l("input", {
                        "onUpdate:modelValue": b[104] || (b[104] = (f) => gt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [We, gt.title]
                      ])
                    ]),
                    l("label", null, [
                      fe(Xe, {
                        text: u(t)("library", "Book series name, stored separately from the existing Publication field.")
                      }, {
                        default: me(() => [
                          te(o(u(t)("library", "Series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ge(l("input", {
                        "onUpdate:modelValue": b[105] || (b[105] = (f) => gt.series = f),
                        name: "series",
                        maxlength: "255"
                      }, null, 512), [
                        [We, gt.series]
                      ])
                    ]),
                    l("label", null, [
                      fe(Xe, {
                        text: u(t)("library", "Text such as 01, 2.5 or Volume II. Leading zeros and labels are preserved.")
                      }, {
                        default: me(() => [
                          te(o(u(t)("library", "Part in series")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ge(l("input", {
                        "onUpdate:modelValue": b[106] || (b[106] = (f) => gt.seriesNumber = f),
                        name: "seriesNumber",
                        maxlength: "64"
                      }, null, 512), [
                        [We, gt.seriesNumber]
                      ])
                    ]),
                    l("label", null, [
                      fe(Xe, {
                        text: u(t)("library", "A genre label such as Science fiction. Separate from subjects, file format and publication type.")
                      }, {
                        default: me(() => [
                          te(o(u(t)("library", "Genre")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"]),
                      ge(l("input", {
                        "onUpdate:modelValue": b[107] || (b[107] = (f) => gt.genre = f),
                        name: "genre",
                        maxlength: "255"
                      }, null, 512), [
                        [We, gt.genre]
                      ])
                    ]),
                    l("label", null, [
                      te(o(u(t)("library", "Publication date")), 1),
                      ge(l("input", {
                        "onUpdate:modelValue": b[108] || (b[108] = (f) => gt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: u(t)("library", "e.g. 2026")
                      }, null, 8, QD), [
                        [We, gt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, o(u(t)("library", "Identifiers")), 1),
                      (p(!0), h(W, null, de(gt.identifiers, (f, F) => (p(), h("div", {
                        key: F,
                        class: "library-sidebar-identifier"
                      }, [
                        ge(l("input", {
                          "onUpdate:modelValue": (oe) => f.scheme = oe,
                          "aria-label": u(t)("library", "Identifier type"),
                          placeholder: u(t)("library", "Identifier type")
                        }, null, 8, eF), [
                          [We, f.scheme]
                        ]),
                        ge(l("input", {
                          "onUpdate:modelValue": (oe) => f.displayValue = oe,
                          "aria-label": u(t)("library", "Identifier value")
                        }, null, 8, tF), [
                          [We, f.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (oe) => Og(F)
                        }, o(u(t)("library", "Remove")), 9, iF)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: $g
                      }, o(u(t)("library", "Add identifier")), 1)
                    ]),
                    fe(Xe, {
                      text: u(t)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")
                    }, {
                      default: me(() => [
                        te(o(u(t)("library", "Maintenance")), 1)
                      ]),
                      _: 1
                    }, 8, ["text"]),
                    Mi.error ? (p(), h("p", nF, o(Mi.error), 1)) : Mi.saved ? (p(), h("p", aF, o(u(t)("library", "Metadata saved.")), 1)) : E("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Mi.saving
                    }, o(Mi.saving ? u(t)("library", "Saving…") : u(t)("library", "Save metadata")), 9, rF)
                  ], 32),
                  Sl(Se.value).length ? (p(), h("section", sF, [
                    l("h4", lF, [
                      fe(Xe, {
                        text: u(t)("library", "Suggestions are optional and never replace your edits automatically.")
                      }, {
                        default: me(() => [
                          te(o(u(t)("library", "Scanner suggestions")), 1)
                        ]),
                        _: 1
                      }, 8, ["text"])
                    ]),
                    l("dl", null, [
                      (p(!0), h(W, null, de(Sl(Se.value), (f) => (p(), h("div", {
                        key: f.field
                      }, [
                        l("dt", null, o(f.field) + " · " + o(f.sourceProvenance), 1),
                        l("dd", null, [
                          te(o(u(t)("library", "Current")) + ": " + o(f.currentValue || "—"), 1),
                          b[130] || (b[130] = l("br", null, null, -1)),
                          te(o(u(t)("library", "Suggestion")) + ": " + o(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : E("", !0)
                ])) : (p(), h("section", oF, [
                  l("h3", uF, o(u(t)("library", "Activity")), 1),
                  l("dl", cF, [
                    l("div", null, [
                      l("dt", null, o(u(t)("library", "Scan status")), 1),
                      l("dd", null, o(Se.value.scanStatus || "—"), 1)
                    ]),
                    Se.value.workflowStatus ? (p(), h("div", dF, [
                      l("dt", null, o(u(t)("library", "Workflow")), 1),
                      l("dd", null, o(Se.value.workflowStatus), 1)
                    ])) : E("", !0),
                    Se.value.metadataSource ? (p(), h("div", fF, [
                      l("dt", null, o(u(t)("library", "Metadata source")), 1),
                      l("dd", null, o(Se.value.metadataSource), 1)
                    ])) : E("", !0),
                    Se.value.cachedPath ? (p(), h("div", pF, [
                      l("dt", null, o(u(t)("library", "File")), 1),
                      l("dd", hF, [
                        Se.value.openUrl ? (p(), h("a", {
                          key: 0,
                          href: Se.value.openUrl,
                          onClick: b[109] || (b[109] = (f) => Pi(Se.value, f))
                        }, [
                          l("bdi", bF, o(Se.value.cachedPath), 1)
                        ], 8, vF)) : (p(), h("bdi", gF, o(Se.value.cachedPath), 1))
                      ])
                    ])) : E("", !0)
                  ])
                ])),
                Se.value.authors?.length ? (p(), h("nav", {
                  key: 3,
                  class: "library-author-links",
                  "aria-label": u(t)("library", "Creators")
                }, [
                  (p(!0), h(W, null, de(Se.value.authors, (f) => (p(), h("a", {
                    key: f,
                    class: "button secondary",
                    href: lm(f)
                  }, [
                    l("bdi", _F, o(f), 1)
                  ], 8, yF))), 128))
                ], 8, mF)) : E("", !0),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": u(t)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !yl.value,
                    onClick: b[110] || (b[110] = (f) => Cl(yl.value))
                  }, o(u(t)("library", "Previous item")), 9, kF),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !_l.value,
                    onClick: b[111] || (b[111] = (f) => Cl(_l.value))
                  }, o(u(t)("library", "Next item")), 9, SF)
                ], 8, wF)
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
function xF() {
  window.LibraryStartupWatchdog?.fail();
}
function $F(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = so("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !$F(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    duplicateSuggestions: so("library", "duplicateSuggestions", !1),
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  K1(EF, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  xF(), console.error("[library] Vue startup failed", e);
}
