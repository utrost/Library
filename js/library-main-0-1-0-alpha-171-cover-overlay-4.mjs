// @__NO_SIDE_EFFECTS__
function Mu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const qe = {}, er = [], Ci = () => {
}, Wp = () => !1, Ll = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rl = (e) => e.startsWith("onUpdate:"), _t = Object.assign, zu = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, mb = Object.prototype.hasOwnProperty, Ze = (e, t) => mb.call(e, t), Ae = Array.isArray, Gn = (e) => Po(e) === "[object Map]", $a = (e) => Po(e) === "[object Set]", nf = (e) => Po(e) === "[object Date]", De = (e) => typeof e == "function", lt = (e) => typeof e == "string", $i = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", Yp = (e) => (Je(e) || De(e)) && De(e.then) && De(e.catch), Xp = Object.prototype.toString, Po = (e) => Xp.call(e), yb = (e) => Po(e).slice(8, -1), Zp = (e) => Po(e) === "[object Object]", Uu = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qr = /* @__PURE__ */ Mu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Il = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, _b = /-\w/g, Gt = Il(
  (e) => e.replace(_b, (t) => t.slice(1).toUpperCase())
), wb = /\B([A-Z])/g, kn = Il(
  (e) => e.replace(wb, "-$1").toLowerCase()
), Pl = Il((e) => e.charAt(0).toUpperCase() + e.slice(1)), yc = Il(
  (e) => e ? `on${Pl(e)}` : ""
), It = (e, t) => !Object.is(e, t), Es = (e, ...t) => {
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
}, Sb = (e) => {
  const t = lt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let af;
const Fl = () => af || (af = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hi(e) {
  if (Ae(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const n = e[i], a = lt(n) ? Eb(n) : hi(n);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (lt(e) || Je(e))
    return e;
}
const Cb = /;(?![^(]*\))/g, kb = /:([^]+)/, Tb = /\/\*[^]*?\*\//g;
function Eb(e) {
  const t = {};
  return e.replace(Tb, "").split(Cb).forEach((i) => {
    if (i) {
      const n = i.split(kb);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function be(e) {
  let t = "";
  if (lt(e))
    t = e;
  else if (Ae(e))
    for (let i = 0; i < e.length; i++) {
      const n = be(e[i]);
      n && (t += n + " ");
    }
  else if (Je(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function Ls(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !lt(t) && (e.class = be(t)), i && (e.style = hi(i)), e;
}
const Ab = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xb = /* @__PURE__ */ Mu(Ab);
function Qp(e) {
  return !!e || e === "";
}
function Ob(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let n = 0; i && n < e.length; n++)
    i = Xn(e[n], t[n]);
  return i;
}
function rf(e, t) {
  if (e.size !== t.size) return !1;
  const i = Array.from(t), n = new Uint8Array(i.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < i.length; o++)
      if (!n[o] && Xn(a, i[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    n[r] = 1;
  }
  return !0;
}
function Xn(e, t) {
  if (e === t) return !0;
  let i = nf(e), n = nf(t);
  if (i || n)
    return i && n ? e.getTime() === t.getTime() : !1;
  if (i = $i(e), n = $i(t), i || n)
    return e === t;
  if (i = Ae(e), n = Ae(t), i || n)
    return i && n ? Ob(e, t) : !1;
  if (i = Je(e), n = Je(t), i || n) {
    if (!i || !n)
      return !1;
    if (i = Gn(e), n = Gn(t), i || n || (i = $a(e), n = $a(t), i || n))
      return i && n ? rf(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), d = t.hasOwnProperty(o);
      if (c && !d || !c && d || !Xn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Nb(e, t) {
  return e.findIndex((i) => Xn(i, t));
}
const eh = (e) => !!(e && e.__v_isRef === !0), h = (e) => lt(e) ? e : e == null ? "" : Ae(e) || Je(e) && (e.toString === Xp || !De(e.toString)) ? eh(e) ? h(e.value) : JSON.stringify(e, th, 2) : String(e), th = (e, t) => eh(t) ? th(e, t.value) : Gn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [n, a], r) => (i[_c(n, r) + " =>"] = a, i),
    {}
  )
} : $a(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => _c(i))
} : $i(t) ? _c(t) : Je(t) && !Ae(t) && !Zp(t) ? String(t) : t, _c = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $i(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function Lb(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Lt;
class Rb {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Lt && (Lt.active ? (this.parent = Lt, this.index = (Lt.scopes || (Lt.scopes = [])).push(
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
      const i = Lt;
      try {
        return Lt = this, t();
      } finally {
        Lt = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Lt, Lt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Lt === this)
        Lt = this.prevScope;
      else {
        let t = Lt;
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
function Ib() {
  return Lt;
}
let st;
const wc = /* @__PURE__ */ new WeakSet();
class ih {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Lt && (Lt.active ? Lt.effects.push(this) : this.flags &= -2);
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
    const t = st, i = Ii;
    st = this, Ii = !0;
    try {
      return this.fn();
    } finally {
      oh(this), st = t, Ii = i, this.flags &= -3;
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
    n.version === -1 ? (n === i && (i = a), Hu(n), Pb(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
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
  const t = e.dep, i = st, n = Ii;
  st = e, Ii = !0;
  try {
    rh(e);
    const a = e.fn(e._value);
    (t.version === 0 || It(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    st = i, Ii = n, oh(e), e.flags &= -3;
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
function Pb(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let Ii = !0;
const lh = [];
function _n() {
  lh.push(Ii), Ii = !1;
}
function wn() {
  const e = lh.pop();
  Ii = e === void 0 ? !0 : e;
}
function of(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const i = st;
    st = void 0;
    try {
      t();
    } finally {
      st = i;
    }
  }
}
let go = 0;
class $b {
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
    if (!st || !Ii || st === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== st)
      i = this.activeLink = new $b(st, this), st.deps ? (i.prevDep = st.depsTail, st.depsTail.nextDep = i, st.depsTail = i) : st.deps = st.depsTail = i, ch(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const n = i.nextDep;
      n.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = n), i.prevDep = st.depsTail, i.nextDep = void 0, st.depsTail.nextDep = i, st.depsTail = i, st.deps === i && (st.deps = n);
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
const ou = /* @__PURE__ */ new WeakMap(), Ra = /* @__PURE__ */ Symbol(
  ""
), su = /* @__PURE__ */ Symbol(
  ""
), bo = /* @__PURE__ */ Symbol(
  ""
);
function Ht(e, t, i) {
  if (Ii && st) {
    let n = ou.get(e);
    n || ou.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(i);
    a || (n.set(i, a = new Dl()), a.map = n, a.key = i), a.track();
  }
}
function pn(e, t, i, n, a, r) {
  const o = ou.get(e);
  if (!o) {
    go++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (ju(), t === "clear")
    o.forEach(c);
  else {
    const d = Ae(e), v = d && Uu(i);
    if (d && i === "length") {
      const p = Number(n);
      o.forEach((y, k) => {
        (k === "length" || k === bo || !$i(k) && k >= p) && c(y);
      });
    } else
      switch ((i !== void 0 || o.has(void 0)) && c(o.get(i)), v && c(o.get(bo)), t) {
        case "add":
          d ? v && c(o.get("length")) : (c(o.get(Ra)), Gn(e) && c(o.get(su)));
          break;
        case "delete":
          d || (c(o.get(Ra)), Gn(e) && c(o.get(su)));
          break;
        case "set":
          Gn(e) && c(o.get(Ra));
          break;
      }
  }
  Bu();
}
function qa(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Ht(t, "iterate", bo), /* @__PURE__ */ ki(e) ? t : t.map(Fi));
}
function Ml(e) {
  return Ht(e = /* @__PURE__ */ Ye(e), "iterate", bo), e;
}
function Yi(e, t) {
  return /* @__PURE__ */ Sn(e) ? lr(/* @__PURE__ */ Ia(e) ? Fi(t) : t) : Fi(t);
}
const Fb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Sc(this, Symbol.iterator, (e) => Yi(this, e));
  },
  concat(...e) {
    return qa(this).concat(
      ...e.map((t) => Ae(t) ? qa(t) : t)
    );
  },
  entries() {
    return Sc(this, "entries", (e) => (e[1] = Yi(this, e[1]), e));
  },
  every(e, t) {
    return on(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return on(
      this,
      "filter",
      e,
      t,
      (i) => i.map((n) => Yi(this, n)),
      arguments
    );
  },
  find(e, t) {
    return on(
      this,
      "find",
      e,
      t,
      (i) => Yi(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return on(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return on(
      this,
      "findLast",
      e,
      t,
      (i) => Yi(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return on(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return on(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Cc(this, "includes", e);
  },
  indexOf(...e) {
    return Cc(this, "indexOf", e);
  },
  join(e) {
    return qa(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Cc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return on(this, "map", e, t, void 0, arguments);
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
    return on(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Dr(this, "splice", e);
  },
  toReversed() {
    return qa(this).toReversed();
  },
  toSorted(e) {
    return qa(this).toSorted(e);
  },
  toSpliced(...e) {
    return qa(this).toSpliced(...e);
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
const Db = Array.prototype;
function on(e, t, i, n, a, r) {
  const o = Ml(e), c = o !== e && !/* @__PURE__ */ ki(e), d = o[t];
  if (d !== Db[t]) {
    const y = d.apply(e, r);
    return c ? Fi(y) : y;
  }
  let v = i;
  o !== e && (c ? v = function(y, k) {
    return i.call(this, Yi(e, y), k, e);
  } : i.length > 2 && (v = function(y, k) {
    return i.call(this, y, k, e);
  }));
  const p = d.call(o, v, n);
  return c && a ? a(p) : p;
}
function sf(e, t, i, n) {
  const a = Ml(e), r = a !== e && !/* @__PURE__ */ ki(e);
  let o = i, c = !1;
  a !== e && (r ? (c = n.length === 0, o = function(v, p, y) {
    return c && (c = !1, v = Yi(e, v)), i.call(this, v, Yi(e, p), y, e);
  }) : i.length > 3 && (o = function(v, p, y) {
    return i.call(this, v, p, y, e);
  }));
  const d = a[t](o, ...n);
  return c ? Yi(e, d) : d;
}
function Cc(e, t, i) {
  const n = /* @__PURE__ */ Ye(e);
  Ht(n, "iterate", bo);
  const a = n[t](...i);
  return (a === -1 || a === !1) && /* @__PURE__ */ Gu(i[0]) ? (i[0] = /* @__PURE__ */ Ye(i[0]), n[t](...i)) : a;
}
function Dr(e, t, i = []) {
  _n(), ju();
  const n = (/* @__PURE__ */ Ye(e))[t].apply(e, i);
  return Bu(), wn(), n;
}
const Mb = /* @__PURE__ */ Mu("__proto__,__v_isRef,__isVue"), uh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($i)
);
function zb(e) {
  $i(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Ht(t, "has", e), t.hasOwnProperty(e);
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
      return n === (a ? r ? Yb : vh : r ? hh : ph).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const o = Ae(t);
    if (!a) {
      let d;
      if (o && (d = Fb[i]))
        return d;
      if (i === "hasOwnProperty")
        return zb;
    }
    const c = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ qt(t) ? t : n
    );
    if (($i(i) ? uh.has(i) : Mb(i)) || (a || Ht(t, "get", i), r))
      return c;
    if (/* @__PURE__ */ qt(c)) {
      const d = o && Uu(i) ? c : c.value;
      return a && Je(d) ? /* @__PURE__ */ mo(d) : d;
    }
    return Je(c) ? a ? /* @__PURE__ */ mo(c) : /* @__PURE__ */ Rt(c) : c;
  }
}
class fh extends dh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, n, a) {
    let r = t[i];
    const o = Ae(t) && Uu(i);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ Sn(r);
      if (!/* @__PURE__ */ ki(n) && !/* @__PURE__ */ Sn(n) && (r = /* @__PURE__ */ Ye(r), n = /* @__PURE__ */ Ye(n)), !o && /* @__PURE__ */ qt(r) && !/* @__PURE__ */ qt(n))
        return v || (r.value = n), !0;
    }
    const c = o ? Number(i) < t.length : Ze(t, i), d = Reflect.set(
      t,
      i,
      n,
      /* @__PURE__ */ qt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && d && (c ? It(n, r) && pn(t, "set", i, n) : pn(t, "add", i, n)), d;
  }
  deleteProperty(t, i) {
    const n = Ze(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && n && pn(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const n = Reflect.has(t, i);
    return (!$i(i) || !uh.has(i)) && Ht(t, "has", i), n;
  }
  ownKeys(t) {
    return Ht(
      t,
      "iterate",
      Ae(t) ? "length" : Ra
    ), Reflect.ownKeys(t);
  }
}
class Ub extends dh {
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
const jb = /* @__PURE__ */ new fh(), Bb = /* @__PURE__ */ new Ub(), Hb = /* @__PURE__ */ new fh(!0);
const lu = (e) => e, fs = (e) => Reflect.getPrototypeOf(e);
function Vb(e, t, i) {
  return function(...n) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = Gn(r), c = e === "entries" || e === Symbol.iterator && o, d = e === "keys" && o, v = a[e](...n), p = i ? lu : t ? lr : Fi;
    return !t && Ht(
      r,
      "iterate",
      d ? su : Ra
    ), _t(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: y, done: k } = v.next();
          return k ? { value: y, done: k } : {
            value: c ? [p(y[0]), p(y[1])] : p(y),
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
function Kb(e, t) {
  const i = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      e || (It(a, c) && Ht(o, "get", a), Ht(o, "get", c));
      const { has: d } = fs(o), v = t ? lu : e ? lr : Fi;
      if (d.call(o, a))
        return v(r.get(a));
      if (d.call(o, c))
        return v(r.get(c));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Ht(/* @__PURE__ */ Ye(a), "iterate", Ra), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      return e || (It(a, c) && Ht(o, "has", a), Ht(o, "has", c)), a === c ? r.has(a) : r.has(a) || r.has(c);
    },
    forEach(a, r) {
      const o = this, c = o.__v_raw, d = /* @__PURE__ */ Ye(c), v = t ? lu : e ? lr : Fi;
      return !e && Ht(d, "iterate", Ra), c.forEach((p, y) => a.call(r, v(p), v(y), o));
    }
  };
  return _t(
    i,
    e ? {
      add: ps("add"),
      set: ps("set"),
      delete: ps("delete"),
      clear: ps("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = fs(r), c = /* @__PURE__ */ Ye(a), d = !t && !/* @__PURE__ */ ki(a) && !/* @__PURE__ */ Sn(a) ? c : a;
        return o.has.call(r, d) || It(a, d) && o.has.call(r, a) || It(c, d) && o.has.call(r, c) || (r.add(d), pn(r, "add", d, d)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ ki(r) && !/* @__PURE__ */ Sn(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: c, get: d } = fs(o);
        let v = c.call(o, a);
        v || (a = /* @__PURE__ */ Ye(a), v = c.call(o, a));
        const p = d.call(o, a);
        return o.set(a, r), v ? It(r, p) && pn(o, "set", a, r) : pn(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: c } = fs(r);
        let d = o.call(r, a);
        d || (a = /* @__PURE__ */ Ye(a), d = o.call(r, a)), c && c.call(r, a);
        const v = r.delete(a);
        return d && pn(r, "delete", a, void 0), v;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && pn(
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
    i[a] = Vb(a, e, t);
  }), i;
}
function Vu(e, t) {
  const i = Kb(e, t);
  return (n, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Ze(i, a) && a in n ? i : n,
    a,
    r
  );
}
const Gb = {
  get: /* @__PURE__ */ Vu(!1, !1)
}, qb = {
  get: /* @__PURE__ */ Vu(!1, !0)
}, Wb = {
  get: /* @__PURE__ */ Vu(!0, !1)
};
const ph = /* @__PURE__ */ new WeakMap(), hh = /* @__PURE__ */ new WeakMap(), vh = /* @__PURE__ */ new WeakMap(), Yb = /* @__PURE__ */ new WeakMap();
function Xb(e) {
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
function Rt(e) {
  return /* @__PURE__ */ Sn(e) ? e : Ku(
    e,
    !1,
    jb,
    Gb,
    ph
  );
}
// @__NO_SIDE_EFFECTS__
function Zb(e) {
  return Ku(
    e,
    !1,
    Hb,
    qb,
    hh
  );
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  return Ku(
    e,
    !0,
    Bb,
    Wb,
    vh
  );
}
function Ku(e, t, i, n, a) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = Xb(yb(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? n : i
  );
  return a.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function Ia(e) {
  return /* @__PURE__ */ Sn(e) ? /* @__PURE__ */ Ia(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
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
function Jb(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && Jp(e, "__v_skip", !0), e;
}
const Fi = (e) => Je(e) ? /* @__PURE__ */ Rt(e) : e, lr = (e) => Je(e) ? /* @__PURE__ */ mo(e) : e;
// @__NO_SIDE_EFFECTS__
function qt(e) {
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
  return /* @__PURE__ */ qt(e) ? e : new Qb(e, t);
}
class Qb {
  constructor(t, i) {
    this.dep = new Dl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ Ye(t), this._value = i ? t : Fi(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ ki(t) || /* @__PURE__ */ Sn(t);
    t = n ? t : /* @__PURE__ */ Ye(t), It(t, i) && (this._rawValue = t, this._value = n ? t : Fi(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ qt(e) ? e.value : e;
}
function bn(e) {
  return De(e) ? e() : g(e);
}
const em = {
  get: (e, t, i) => t === "__v_raw" ? e : g(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const a = e[t];
    return /* @__PURE__ */ qt(a) && !/* @__PURE__ */ qt(i) ? (a.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function mh(e) {
  return /* @__PURE__ */ Ia(e) ? e : new Proxy(e, em);
}
class tm {
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
function im(e) {
  return new tm(e);
}
class nm {
  constructor(t, i, n) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new Dl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = go - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
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
function am(e, t, i = !1) {
  let n, a;
  return De(e) ? n = e : (n = e.get, a = e.set), new nm(n, a, i);
}
const hs = {}, Rs = /* @__PURE__ */ new WeakMap();
let Ca;
function rm(e, t = !1, i = Ca) {
  if (i) {
    let n = Rs.get(i);
    n || Rs.set(i, n = []), n.push(e);
  }
}
function om(e, t, i = qe) {
  const { immediate: n, deep: a, once: r, scheduler: o, augmentJob: c, call: d } = i, v = (C) => a ? C : /* @__PURE__ */ ki(C) || a === !1 || a === 0 ? hn(C, 1) : hn(C);
  let p, y, k, E, L = !1, A = !1;
  if (/* @__PURE__ */ qt(e) ? (y = () => e.value, L = /* @__PURE__ */ ki(e)) : /* @__PURE__ */ Ia(e) ? (y = () => v(e), L = !0) : Ae(e) ? (A = !0, L = e.some((C) => /* @__PURE__ */ Ia(C) || /* @__PURE__ */ ki(C)), y = () => e.map((C) => {
    if (/* @__PURE__ */ qt(C))
      return C.value;
    if (/* @__PURE__ */ Ia(C))
      return v(C);
    if (De(C))
      return d ? d(C, 2) : C();
  })) : De(e) ? t ? y = d ? () => d(e, 2) : e : y = () => {
    if (k) {
      _n();
      try {
        k();
      } finally {
        wn();
      }
    }
    const C = Ca;
    Ca = p;
    try {
      return d ? d(e, 3, [E]) : e(E);
    } finally {
      Ca = C;
    }
  } : y = Ci, t && a) {
    const C = y, oe = a === !0 ? 1 / 0 : a;
    y = () => hn(C(), oe);
  }
  const N = Ib(), D = () => {
    p.stop(), N && N.active && zu(N.effects, p);
  };
  if (r && t) {
    const C = t;
    t = (...oe) => {
      const ue = C(...oe);
      return D(), ue;
    };
  }
  let M = A ? new Array(e.length).fill(hs) : hs;
  const z = (C) => {
    if (!(!(p.flags & 1) || !p.dirty && !C))
      if (t) {
        const oe = p.run();
        if (C || a || L || (A ? oe.some((ue, Z) => It(ue, M[Z])) : It(oe, M))) {
          k && k();
          const ue = Ca;
          Ca = p;
          try {
            const Z = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              M === hs ? void 0 : A && M[0] === hs ? [] : M,
              E
            ];
            M = oe, d ? d(t, 3, Z) : (
              // @ts-expect-error
              t(...Z)
            );
          } finally {
            Ca = ue;
          }
        }
      } else
        p.run();
  };
  return c && c(z), p = new ih(y), p.scheduler = o ? () => o(z, !1) : z, E = (C) => rm(C, !1, p), k = p.onStop = () => {
    const C = Rs.get(p);
    if (C) {
      if (d)
        d(C, 4);
      else
        for (const oe of C) oe();
      Rs.delete(p);
    }
  }, t ? n ? z(!0) : M = p.run() : o ? o(z.bind(null, !0), !0) : p.run(), D.pause = p.pause.bind(p), D.resume = p.resume.bind(p), D.stop = D, D;
}
function hn(e, t = 1 / 0, i) {
  if (t <= 0 || !Je(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ qt(e))
    hn(e.value, t, i);
  else if (Ae(e))
    for (let n = 0; n < e.length; n++)
      hn(e[n], t, i);
  else if ($a(e) || Gn(e))
    e.forEach((n) => {
      hn(n, t, i);
    });
  else if (Zp(e)) {
    for (const n in e)
      hn(e[n], t, i);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && hn(e[n], t, i);
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
  if (Ae(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Ti(e[r], t, i, n));
    return a;
  }
}
function zl(e, t, i, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || qe;
  if (t) {
    let c = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let y = 0; y < p.length; y++)
          if (p[y](e, d, v) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      _n(), $o(r, null, 10, [
        e,
        d,
        v
      ]), wn();
      return;
    }
  }
  sm(e, i, a, n, o);
}
function sm(e, t, i, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ei = [];
let Gi = -1;
const tr = [];
let Vn = null, Za = 0;
const yh = /* @__PURE__ */ Promise.resolve();
let Is = null;
function Qt(e) {
  const t = Is || yh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function lm(e) {
  let t = Gi + 1, i = ei.length;
  for (; t < i; ) {
    const n = t + i >>> 1, a = ei[n], r = yo(a);
    r < e || r === e && a.flags & 2 ? t = n + 1 : i = n;
  }
  return t;
}
function qu(e) {
  if (!(e.flags & 1)) {
    const t = yo(e), i = ei[ei.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yo(i) ? ei.push(e) : ei.splice(lm(t), 0, e), e.flags |= 1, _h();
  }
}
function _h() {
  Is || (Is = yh.then(Ch));
}
function wh(e) {
  if (!Ae(e))
    Vn && e.id === -1 ? Vn.splice(Za + 1, 0, e) : e.flags & 1 || (tr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      tr.push(e[t]);
  _h();
}
function lf(e, t, i = Gi + 1) {
  for (; i < ei.length; i++) {
    const n = ei[i];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ei.splice(i, 1), i--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Sh(e) {
  if (tr.length) {
    const t = [...new Set(tr)].sort(
      (i, n) => yo(i) - yo(n)
    );
    if (tr.length = 0, Vn) {
      for (let i = 0; i < t.length; i++)
        Vn.push(t[i]);
      return;
    }
    for (Vn = t, Za = 0; Za < Vn.length; Za++) {
      const i = Vn[Za];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    Vn = null, Za = 0;
  }
}
const yo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ch(e) {
  try {
    for (Gi = 0; Gi < ei.length; Gi++) {
      const t = ei[Gi];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), $o(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Gi < ei.length; Gi++) {
      const t = ei[Gi];
      t && (t.flags &= -2);
    }
    Gi = -1, ei.length = 0, Sh(), Is = null, (ei.length || tr.length) && Ch();
  }
}
let $t = null, Ul = null;
function Ps(e) {
  const t = $t;
  return $t = e, Ul = e && e.type.__scopeId || null, t;
}
function cm(e) {
  Ul = e;
}
function um() {
  Ul = null;
}
const dm = (e) => Fe;
function Fe(e, t = $t, i) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && zs(-1);
    const r = Ps(t), o = mn.length;
    let c;
    try {
      c = e(...a);
    } finally {
      for (let d = mn.length; d > o; d--) ed();
      Ps(r), n._d && zs(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ie(e, t) {
  if ($t === null)
    return e;
  const i = Gl($t), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, c, d = qe] = t[a];
    r && (De(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && hn(o), n.push({
      dir: r,
      instance: i,
      value: o,
      oldValue: void 0,
      arg: c,
      modifiers: d
    }));
  }
  return e;
}
function ba(e, t, i, n) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const c = a[o];
    r && (c.oldValue = r[o].value);
    let d = c.dir[n];
    d && (_n(), Ti(d, i, 8, [
      e.el,
      c,
      e,
      t
    ]), wn());
  }
}
function _i(e, t) {
  if (Kt) {
    let i = Kt.provides;
    const n = Kt.parent && Kt.parent.provides;
    n === i && (i = Kt.provides = Object.create(n)), i[e] = t;
  }
}
function Vt(e, t, i = !1) {
  const n = Da();
  if (n || nr) {
    let a = nr ? nr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && De(t) ? t.call(n && n.proxy) : t;
  }
}
const fm = /* @__PURE__ */ Symbol.for("v-scx"), pm = () => Vt(fm);
function hm(e, t) {
  return jl(e, null, t);
}
function vm(e, t) {
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
  const { immediate: n, deep: a, flush: r, once: o } = i, c = _t({}, i), d = t && n || !t && r !== "post";
  let v;
  if (To) {
    if (r === "sync") {
      const E = pm();
      v = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!d) {
      const E = () => {
      };
      return E.stop = Ci, E.resume = Ci, E.pause = Ci, E;
    }
  }
  const p = Kt;
  c.call = (E, L, A) => Ti(E, p, L, A);
  let y = !1;
  r === "post" ? c.scheduler = (E) => {
    Jt(E, p && p.suspense);
  } : r !== "sync" && (y = !0, c.scheduler = (E, L) => {
    L ? E() : qu(E);
  }), c.augmentJob = (E) => {
    t && (E.flags |= 4), y && (E.flags |= 2, p && (E.id = p.uid, E.i = p));
  };
  const k = om(e, t, c);
  return To && (v ? v.push(k) : d && k()), k;
}
function gm(e, t, i) {
  const n = this.proxy, a = lt(e) ? e.includes(".") ? kh(n, e) : () => n[e] : e.bind(n, n);
  let r;
  De(t) ? r = t : (r = t.handler, i = t);
  const o = Mo(this), c = jl(a, r.bind(n), i);
  return o(), c;
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
const jn = /* @__PURE__ */ new WeakMap(), Th = /* @__PURE__ */ Symbol("_vte"), Bl = (e) => e.__isTeleport, Ta = (e) => e && (e.disabled || e.disabled === ""), bm = (e) => e && (e.defer || e.defer === ""), cf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, uf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, cu = (e, t) => {
  const i = e && e.to;
  return lt(i) ? t ? t(i) : null : i;
}, mm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, n, a, r, o, c, d, v) {
    const {
      mc: p,
      pc: y,
      pbc: k,
      o: { insert: E, querySelector: L, createText: A, createComment: N, parentNode: D }
    } = v, M = Ta(t.props);
    let { dynamicChildren: z } = t;
    const C = (Z, fe, X) => {
      Z.shapeFlag & 16 && p(
        Z.children,
        fe,
        X,
        a,
        r,
        o,
        c,
        d
      );
    }, oe = (Z = t) => {
      const fe = Ta(Z.props), X = Z.target = cu(Z.props, L), le = uu(X, Z, A, E);
      X && (o !== "svg" && cf(X) ? o = "svg" : o !== "mathml" && uf(X) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), fe || (C(Z, X, le), qr(Z, !1)));
    }, ue = (Z) => {
      const fe = () => {
        if (jn.get(Z) === fe) {
          if (jn.delete(Z), Ta(Z.props)) {
            const X = D(Z.el) || i;
            C(Z, X, Z.anchor), qr(Z, !0);
          }
          oe(Z);
        }
      };
      jn.set(Z, fe), Jt(fe, r);
    };
    if (e == null) {
      const Z = t.el = A(""), fe = t.anchor = A("");
      if (E(Z, i, n), E(fe, i, n), bm(t.props) || r && r.pendingBranch) {
        ue(t);
        return;
      }
      M && (C(t, i, fe), qr(t, !0)), oe();
    } else {
      t.el = e.el;
      const Z = t.anchor = e.anchor, fe = jn.get(e);
      if (fe) {
        fe.flags |= 8, jn.delete(e), ue(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, le = t.targetAnchor = e.targetAnchor, _e = Ta(e.props), ee = _e ? i : X, J = _e ? Z : le;
      if (o === "svg" || cf(X) ? o = "svg" : (o === "mathml" || uf(X)) && (o = "mathml"), z ? (k(
        e.dynamicChildren,
        z,
        ee,
        a,
        r,
        o,
        c
      ), Qu(e, t, !0)) : d || y(
        e,
        t,
        ee,
        J,
        a,
        r,
        o,
        c,
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
        le,
        v,
        1
      );
      qr(t, M);
    }
  },
  remove(e, t, i, { um: n, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: c,
      anchor: d,
      targetStart: v,
      targetAnchor: p,
      target: y,
      props: k
    } = e, E = Ta(k), L = r || !E, A = jn.get(e);
    if (A && (A.flags |= 8, jn.delete(e)), y && (a(v), a(p)), r && a(d), !A && (E || y) && o & 16)
      for (let N = 0; N < c.length; N++) {
        const D = c[N];
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
  hydrate: ym
};
function vs(e, t, i, { o: { insert: n }, m: a }, r = 2) {
  r === 0 && n(e.targetAnchor, t, i);
  const { el: o, anchor: c, shapeFlag: d, children: v, props: p } = e, y = r === 2;
  if (y && n(o, t, i), !jn.has(e) && (!y || Ta(p)) && d & 16)
    for (let k = 0; k < v.length; k++)
      a(
        v[k],
        t,
        i,
        2
      );
  y && n(c, t, i);
}
function ym(e, t, i, n, a, r, {
  o: { nextSibling: o, parentNode: c, querySelector: d, insert: v, createText: p }
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
      c(N),
      i,
      n,
      a,
      r
    );
  }
  const L = t.target = cu(
    t.props,
    d
  ), A = Ta(t.props);
  if (L) {
    const N = L._lpa || L.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), k(L, N), t.targetAnchor || uu(
      L,
      t,
      p,
      v,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === L ? e : null
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
const Eh = mm;
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
function _m() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Qn(() => {
    e.isMounted = !0;
  }), cr(() => {
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
}, wm = {
  name: "BaseTransition",
  props: Ah,
  setup(e, { slots: t }) {
    const i = Da(), n = _m();
    return () => {
      const a = t.default && Lh(t.default(), !0), r = a && a.length ? Oh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? $() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: c } = o;
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
      d.type !== Pt && _o(d, v);
      let p = i.subTree && $s(i.subTree);
      if (p && p.type !== Pt && !Ea(p, d) && xh(i).type !== Pt) {
        let y = du(
          p,
          o,
          n,
          i
        );
        if (_o(p, y), c === "out-in" && d.type !== Pt)
          return n.isLeaving = !0, y.afterLeave = () => {
            n.isLeaving = !1, i.job.flags & 8 || i.update(), delete y.afterLeave, p = void 0;
          }, kc(r);
        c === "in-out" && d.type !== Pt ? y.delayLeave = (k, E, L) => {
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
      if (i.type !== Pt) {
        t = i;
        break;
      }
  }
  return t;
}
const Sm = wm;
function Nh(e, t) {
  const { leavingVNodes: i } = e;
  let n = i.get(t.type);
  return n || (n = /* @__PURE__ */ Object.create(null), i.set(t.type, n)), n;
}
function du(e, t, i, n, a) {
  const {
    appear: r,
    mode: o,
    persisted: c = !1,
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
  } = t, C = String(e.key), oe = Nh(i, e), ue = (X, le) => {
    X && Ti(
      X,
      n,
      9,
      le
    );
  }, Z = (X, le) => {
    const _e = le[1];
    ue(X, le), Ae(X) ? X.every((ee) => ee.length <= 1) && _e() : X.length <= 1 && _e();
  }, fe = {
    mode: o,
    persisted: c,
    beforeEnter(X) {
      let le = d;
      if (!i.isMounted)
        if (r)
          le = N || d;
        else
          return;
      X[wi] && X[wi](
        !0
        /* cancelled */
      );
      const _e = oe[C];
      _e && Ea(e, _e) && _e.el[wi] && _e.el[wi](), ue(le, [X]);
    },
    enter(X) {
      if (oe[C] === e) return;
      let le = v, _e = p, ee = y;
      if (!i.isMounted)
        if (r)
          le = D || v, _e = M || p, ee = z || y;
        else
          return;
      let J = !1;
      X[Mr] = (U) => {
        J || (J = !0, U ? ue(ee, [X]) : ue(_e, [X]), fe.delayedLeave && fe.delayedLeave(), X[Mr] = void 0);
      };
      const F = X[Mr].bind(null, !1);
      le ? Z(le, [X, F]) : F();
    },
    leave(X, le) {
      const _e = String(e.key);
      if (X[Mr] && X[Mr](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return le();
      ue(k, [X]);
      let ee = !1;
      X[wi] = (F) => {
        ee || (ee = !0, le(), F ? ue(A, [X]) : ue(L, [X]), X[wi] = void 0, oe[_e] === e && delete oe[_e]);
      };
      const J = X[wi].bind(null, !1);
      oe[_e] = e, E ? Z(E, [X, J]) : J();
    },
    clone(X) {
      const le = du(
        X,
        t,
        i,
        n,
        a
      );
      return a && a(le), le;
    }
  };
  return fe;
}
function kc(e) {
  if (Hl(e))
    return e = Zn(e), e.children = null, e;
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
    const c = i == null ? o.key : String(i) + String(o.key != null ? o.key : r);
    o.type === ie ? (o.patchFlag & 128 && a++, n = n.concat(
      Lh(o.children, t, c)
    )) : (t || o.type !== Pt) && n.push(c != null ? Zn(o, { key: c }) : o);
  }
  if (a > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Ft(e, t) {
  return De(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    _t({ name: e.name }, t, { setup: e })
  ) : e;
}
function Rh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Cm(e) {
  const t = Da(), i = /* @__PURE__ */ gh(null);
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
  if (Ae(e)) {
    e.forEach(
      (A, N) => io(
        A,
        t && (Ae(t) ? t[N] : t),
        i,
        n,
        a
      )
    );
    return;
  }
  if (ir(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && io(e, t, i, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Gl(n.component) : n.el, o = a ? null : r, { i: c, r: d } = e, v = t && t.r, p = c.refs === qe ? c.refs = {} : c.refs, y = c.setupState, k = /* @__PURE__ */ Ye(y), E = y === qe ? Wp : (A) => df(p, A) ? !1 : Ze(k, A), L = (A, N) => !(N && df(p, N));
  if (v != null && v !== d) {
    if (ff(t), lt(v))
      p[v] = null, E(v) && (y[v] = null);
    else if (/* @__PURE__ */ qt(v)) {
      const A = t;
      L(v, A.k) && (v.value = null), A.k && (p[A.k] = null);
    }
  }
  if (De(d))
    $o(d, c, 12, [o, p]);
  else {
    const A = lt(d), N = /* @__PURE__ */ qt(d);
    if (A || N) {
      const D = () => {
        if (e.f) {
          const M = A ? E(d) ? y[d] : p[d] : L() || !e.k ? d.value : p[e.k];
          if (a)
            Ae(M) && zu(M, r);
          else if (Ae(M))
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
        M.id = -1, Fs.set(e, M), Jt(M, i);
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
const ir = (e) => !!e.type.__asyncLoader, Hl = (e) => e.type.__isKeepAlive;
function km(e, t) {
  Ih(e, "a", t);
}
function Tm(e, t) {
  Ih(e, "da", t);
}
function Ih(e, t, i = Kt) {
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
      Hl(a.parent.vnode) && Em(n, t, i, a), a = a.parent;
  }
}
function Em(e, t, i, n) {
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
function Vl(e, t, i = Kt, n = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...o) => {
      _n();
      const c = Mo(i), d = Ti(t, i, e, o);
      return c(), wn(), d;
    });
    return n ? a.unshift(r) : a.push(r), r;
  }
}
const Tn = (e) => (t, i = Kt) => {
  (!To || e === "sp") && Vl(e, (...n) => t(...n), i);
}, Ph = Tn("bm"), Qn = Tn("m"), $h = Tn(
  "bu"
), Am = Tn("u"), cr = Tn(
  "bum"
), Fo = Tn("um"), xm = Tn(
  "sp"
), Om = Tn("rtg"), Nm = Tn("rtc");
function Lm(e, t = Kt) {
  Vl("ec", e, t);
}
const Wu = "components", Rm = "directives";
function Be(e, t) {
  return Xu(Wu, e, !0, t) || e;
}
const Fh = /* @__PURE__ */ Symbol.for("v-ndc");
function Yu(e) {
  return lt(e) ? Xu(Wu, e, !1) || e : e || Fh;
}
function pf(e) {
  return Xu(Rm, e);
}
function Xu(e, t, i = !0, n = !1) {
  const a = $t || Kt;
  if (a) {
    const r = a.type;
    if (e === Wu) {
      const c = hy(
        r,
        !1
      );
      if (c && (c === t || c === Gt(t) || c === Pl(Gt(t))))
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
  return e && (e[t] || e[Gt(t)] || e[Pl(Gt(t))]);
}
function ke(e, t, i, n) {
  let a;
  const r = i, o = Ae(e);
  if (o || lt(e)) {
    const c = o && /* @__PURE__ */ Ia(e);
    let d = !1, v = !1;
    c && (d = !/* @__PURE__ */ ki(e), v = /* @__PURE__ */ Sn(e), e = Ml(e)), a = new Array(e.length);
    for (let p = 0, y = e.length; p < y; p++)
      a[p] = t(
        d ? v ? lr(Fi(e[p])) : Fi(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let c = 0; c < e; c++)
      a[c] = t(c + 1, c, void 0, r);
  } else if (Je(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (c, d) => t(c, d, void 0, r)
      );
    else {
      const c = Object.keys(e);
      a = new Array(c.length);
      for (let d = 0, v = c.length; d < v; d++) {
        const p = c[d];
        a[d] = t(e[p], p, d, r);
      }
    }
  else
    a = [];
  return a;
}
function Me(e, t, i, n, a, r) {
  if (i == null && (i = {}), $t.ce || $t.parent && ir($t.parent) && $t.parent.ce) {
    const v = i, p = Object.keys(v).length > 0;
    return t !== "default" && (v.name = t), m(), je(
      ie,
      null,
      [xe("slot", v, n && n())],
      p ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const c = mn.length;
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
    for (let p = mn.length; p > c; p--) ed();
    throw v;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), d;
}
function Dh(e) {
  return e.some((t) => So(t) ? !(t.type === Pt || t.type === ie && !Dh(t.children)) : !0) ? e : null;
}
const fu = (e) => e ? rv(e) ? Gl(e) : fu(e.parent) : null, no = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ _t(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Qt.bind(e.proxy)),
    $watch: (e) => gm.bind(e)
  })
), Tc = (e, t) => e !== qe && !e.__isScriptSetup && Ze(e, t), Im = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: n, data: a, props: r, accessCache: o, type: c, appContext: d } = e;
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
        if (a !== qe && Ze(a, t))
          return o[t] = 2, a[t];
        if (Ze(r, t))
          return o[t] = 3, r[t];
        if (i !== qe && Ze(i, t))
          return o[t] = 4, i[t];
        pu && (o[t] = 0);
      }
    }
    const v = no[t];
    let p, y;
    if (v)
      return t === "$attrs" && Ht(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (i !== qe && Ze(i, t))
      return o[t] = 4, i[t];
    if (
      // global properties
      y = d.config.globalProperties, Ze(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, i) {
    const { data: n, setupState: a, ctx: r } = e;
    return Tc(a, t) ? (a[t] = i, !0) : n !== qe && Ze(n, t) ? (n[t] = i, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: n, appContext: a, props: r, type: o }
  }, c) {
    let d;
    return !!(i[c] || e !== qe && c[0] !== "$" && Ze(e, c) || Tc(t, c) || Ze(r, c) || Ze(n, c) || Ze(no, c) || Ze(a.config.globalProperties, c) || (d = o.__cssModules) && d[c]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : Ze(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
};
function Pm() {
  return Mh().slots;
}
function $m() {
  return Mh().attrs;
}
function Mh(e) {
  const t = Da();
  return t.setupContext || (t.setupContext = sv(t));
}
function Ds(e) {
  return Ae(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function Fm(e, t) {
  return !e || !t ? e || t : Ae(e) && Ae(t) ? e.concat(t) : _t({}, Ds(e), Ds(t));
}
let pu = !0;
function Dm(e) {
  const t = Uh(e), i = e.proxy, n = e.ctx;
  pu = !1, t.beforeCreate && vf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: c,
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
    render: oe,
    renderTracked: ue,
    renderTriggered: Z,
    errorCaptured: fe,
    serverPrefetch: X,
    // public API
    expose: le,
    inheritAttrs: _e,
    // assets
    components: ee,
    directives: J,
    filters: F
  } = t;
  if (v && Mm(v, n, null), o)
    for (const ce in o) {
      const ae = o[ce];
      De(ae) && (n[ce] = ae.bind(i));
    }
  if (a) {
    const ce = a.call(i, i);
    Je(ce) && (e.data = /* @__PURE__ */ Rt(ce));
  }
  if (pu = !0, r)
    for (const ce in r) {
      const ae = r[ce], me = De(ae) ? ae.bind(i, i) : De(ae.get) ? ae.get.bind(i, i) : Ci, de = !De(ae) && De(ae.set) ? ae.set.bind(i) : Ci, Se = B({
        get: me,
        set: de
      });
      Object.defineProperty(n, ce, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (Te) => Se.value = Te
      });
    }
  if (c)
    for (const ce in c)
      zh(c[ce], n, i, ce);
  if (d) {
    const ce = De(d) ? d.call(i) : d;
    Reflect.ownKeys(ce).forEach((ae) => {
      _i(ae, ce[ae]);
    });
  }
  p && vf(p, e, "c");
  function Y(ce, ae) {
    Ae(ae) ? ae.forEach((me) => ce(me.bind(i))) : ae && ce(ae.bind(i));
  }
  if (Y(Ph, y), Y(Qn, k), Y($h, E), Y(Am, L), Y(km, A), Y(Tm, N), Y(Lm, fe), Y(Nm, ue), Y(Om, Z), Y(cr, M), Y(Fo, C), Y(xm, X), Ae(le))
    if (le.length) {
      const ce = e.exposed || (e.exposed = {});
      le.forEach((ae) => {
        Object.defineProperty(ce, ae, {
          get: () => i[ae],
          set: (me) => i[ae] = me,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === Ci && (e.render = oe), _e != null && (e.inheritAttrs = _e), ee && (e.components = ee), J && (e.directives = J), X && Rh(e);
}
function Mm(e, t, i = Ci) {
  Ae(e) && (e = hu(e));
  for (const n in e) {
    const a = e[n];
    let r;
    Je(a) ? "default" in a ? r = Vt(
      a.from || n,
      a.default,
      !0
    ) : r = Vt(a.from || n) : r = Vt(a), /* @__PURE__ */ qt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function vf(e, t, i) {
  Ti(
    Ae(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function zh(e, t, i, n) {
  let a = n.includes(".") ? kh(i, n) : () => i[n];
  if (lt(e)) {
    const r = t[e];
    De(r) && We(a, r);
  } else if (De(e))
    We(a, e.bind(i));
  else if (Je(e))
    if (Ae(e))
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
  } = e.appContext, c = r.get(t);
  let d;
  return c ? d = c : !a.length && !i && !n ? d = t : (d = {}, a.length && a.forEach(
    (v) => Ms(d, v, o, !0)
  ), Ms(d, t, o)), Je(t) && r.set(t, d), d;
}
function Ms(e, t, i, n = !1) {
  const { mixins: a, extends: r } = t;
  r && Ms(e, r, i, !0), a && a.forEach(
    (o) => Ms(e, o, i, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const c = zm[o] || i && i[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const zm = {
  data: gf,
  props: bf,
  emits: bf,
  // objects
  methods: Wr,
  computed: Wr,
  // lifecycle
  beforeCreate: Zt,
  created: Zt,
  beforeMount: Zt,
  mounted: Zt,
  beforeUpdate: Zt,
  updated: Zt,
  beforeDestroy: Zt,
  beforeUnmount: Zt,
  destroyed: Zt,
  unmounted: Zt,
  activated: Zt,
  deactivated: Zt,
  errorCaptured: Zt,
  serverPrefetch: Zt,
  // assets
  components: Wr,
  directives: Wr,
  // watch
  watch: jm,
  // provide / inject
  provide: gf,
  inject: Um
};
function gf(e, t) {
  return t ? e ? function() {
    return _t(
      De(e) ? e.call(this, this) : e,
      De(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Um(e, t) {
  return Wr(hu(e), hu(t));
}
function hu(e) {
  if (Ae(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function Zt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wr(e, t) {
  return e ? _t(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function bf(e, t) {
  return e ? Ae(e) && Ae(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _t(
    /* @__PURE__ */ Object.create(null),
    Ds(e),
    Ds(t ?? {})
  ) : t;
}
function jm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = _t(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = Zt(e[n], t[n]);
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
let Bm = 0;
function Hm(e, t) {
  return function(n, a = null) {
    De(n) || (n = _t({}, n)), a != null && !Je(a) && (a = null);
    const r = jh(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let d = !1;
    const v = r.app = {
      _uid: Bm++,
      _component: n,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: gy,
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
          const E = v._ceVNode || xe(n, a);
          return E.appContext = r, k === !0 ? k = "svg" : k === !1 && (k = void 0), e(E, p, k), d = !0, v._container = p, p.__vue_app__ = v, Gl(E.component);
        }
      },
      onUnmount(p) {
        c.push(p);
      },
      unmount() {
        d && (Ti(
          c,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(p, y) {
        return r.provides[p] = y, v;
      },
      runWithContext(p) {
        const y = nr;
        nr = v;
        try {
          return p();
        } finally {
          nr = y;
        }
      }
    };
    return v;
  };
}
let nr = null;
function Bh(e, t, i = qe) {
  const n = Da(), a = Gt(t), r = kn(t), o = Hh(e, a), c = im((d, v) => {
    let p, y = qe, k;
    return vm(() => {
      const E = e[a];
      It(p, E) && (p = E, v());
    }), {
      get() {
        return d(), i.get ? i.get(p) : p;
      },
      set(E) {
        const L = i.set ? i.set(E) : E;
        if (!It(L, p) && !(y !== qe && It(E, y)))
          return;
        const A = n.vnode.props, N = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        N || (p = E, v()), n.emit(`update:${t}`, L), It(E, y) && (It(E, L) && !It(L, k) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        N && y !== qe && !It(L, p)) && v(), y = E, k = L;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let d = 0;
    return {
      next() {
        return d < 2 ? { value: d++ ? o || qe : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const Hh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Gt(t)}Modifiers`] || e[`${kn(t)}Modifiers`];
function Vm(e, t, ...i) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || qe;
  let a = i;
  const r = t.startsWith("update:"), o = r && Hh(n, t.slice(7));
  o && (o.trim && (a = i.map((p) => lt(p) ? p.trim() : p)), o.number && (a = a.map($l)));
  let c, d = n[c = yc(t)] || // also try camelCase event handler (#2249)
  n[c = yc(Gt(t))];
  !d && r && (d = n[c = yc(kn(t))]), d && Ti(
    d,
    e,
    6,
    a
  );
  const v = n[c + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Ti(
      v,
      e,
      6,
      a
    );
  }
}
const Km = /* @__PURE__ */ new WeakMap();
function Vh(e, t, i = !1) {
  const n = i ? Km : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, c = !1;
  if (!De(e)) {
    const d = (v) => {
      const p = Vh(v, t, !0);
      p && (c = !0, _t(o, p));
    };
    !i && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (Je(e) && n.set(e, null), null) : (Ae(r) ? r.forEach((d) => o[d] = null) : _t(o, r), Je(e) && n.set(e, o), o);
}
function Kl(e, t) {
  return !e || !Ll(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, kn(t)) || Ze(e, t));
}
function mf(e) {
  const {
    type: t,
    vnode: i,
    proxy: n,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: c,
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
      const C = a || n, oe = C;
      D = Xi(
        v.call(
          oe,
          C,
          p,
          y,
          E,
          k,
          L
        )
      ), M = c;
    } else {
      const C = t;
      D = Xi(
        C.length > 1 ? C(
          y,
          { attrs: c, slots: o, emit: d }
        ) : C(
          y,
          null
        )
      ), M = t.props ? c : Gm(c);
    }
  } catch (C) {
    mn.length = 0, zl(C, e, 1), D = xe(Pt);
  }
  let z = D;
  if (M && A !== !1) {
    const C = Object.keys(M), { shapeFlag: oe } = z;
    C.length && oe & 7 && (r && C.some(Rl) && (M = qm(
      M,
      r
    )), z = Zn(z, M, !1, !0));
  }
  if (i.dirs && (z = Zn(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const C = Bl(z.type) && $s(z) || z;
    _o(C, i.transition);
  }
  return D = z, Ps(N), D;
}
const Gm = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || Ll(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, qm = (e, t) => {
  const i = {};
  for (const n in e)
    (!Rl(n) || !(n.slice(9) in t)) && (i[n] = e[n]);
  return i;
};
function Wm(e, t, i) {
  const { props: n, children: a, component: r } = e, { props: o, children: c, patchFlag: d } = t, v = r.emitsOptions;
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
    return (a || c) && (!c || !c.$stable) ? !0 : n === o ? !1 : n ? o ? yf(n, o, v) : !0 : !!o;
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
  return i === "style" && Je(n) && Je(a) ? !Xn(n, a) : n !== a;
}
function Ym({ vnode: e, parent: t, suspense: i }, n) {
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
function Xm(e, t, i, n = !1) {
  const a = {}, r = qh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yh(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  i ? e.props = n ? a : /* @__PURE__ */ Zb(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Zm(e, t, i, n) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, c = /* @__PURE__ */ Ye(a), [d] = e.propsOptions;
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
          if (Ze(r, k))
            E !== r[k] && (r[k] = E, v = !0);
          else {
            const L = Gt(k);
            a[L] = vu(
              d,
              c,
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
    for (const y in c)
      (!t || // for camelCase
      !Ze(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = kn(y)) === y || !Ze(t, p))) && (d ? i && // for camelCase
      (i[y] !== void 0 || // for kebab-case
      i[p] !== void 0) && (a[y] = vu(
        d,
        c,
        y,
        void 0,
        e,
        !0
      )) : delete a[y]);
    if (r !== c)
      for (const y in r)
        (!t || !Ze(t, y)) && (delete r[y], v = !0);
  }
  v && pn(e.attrs, "set", "");
}
function Yh(e, t, i, n) {
  const [a, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let d in t) {
      if (Qr(d))
        continue;
      const v = t[d];
      let p;
      a && Ze(a, p = Gt(d)) ? !r || !r.includes(p) ? i[p] = v : (c || (c = {}))[p] = v : Kl(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, o = !0);
    }
  if (r) {
    const d = /* @__PURE__ */ Ye(i), v = c || qe;
    for (let p = 0; p < r.length; p++) {
      const y = r[p];
      i[y] = vu(
        a,
        d,
        y,
        v[y],
        e,
        !Ze(v, y)
      );
    }
  }
  return o;
}
function vu(e, t, i, n, a, r) {
  const o = e[i];
  if (o != null) {
    const c = Ze(o, "default");
    if (c && n === void 0) {
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
    ] && (r && !c ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === kn(i)) && (n = !0));
  }
  return n;
}
const Jm = /* @__PURE__ */ new WeakMap();
function Xh(e, t, i = !1) {
  const n = i ? Jm : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, c = [];
  let d = !1;
  if (!De(e)) {
    const p = (y) => {
      d = !0;
      const [k, E] = Xh(y, t, !0);
      _t(o, k), E && c.push(...E);
    };
    !i && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !d)
    return Je(e) && n.set(e, er), er;
  if (Ae(r))
    for (let p = 0; p < r.length; p++) {
      const y = Gt(r[p]);
      _f(y) && (o[y] = qe);
    }
  else if (r)
    for (const p in r) {
      const y = Gt(p);
      if (_f(y)) {
        const k = r[p], E = o[y] = Ae(k) || De(k) ? { type: k } : _t({}, k), L = E.type;
        let A = !1, N = !0;
        if (Ae(L))
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
        ] = N, (A || Ze(E, "default")) && c.push(y);
      }
    }
  const v = [o, c];
  return Je(e) && n.set(e, v), v;
}
function _f(e) {
  return e[0] !== "$" && !Qr(e);
}
const Zu = (e) => e === "_" || e === "_ctx" || e === "$stable", Ju = (e) => Ae(e) ? e.map(Xi) : [Xi(e)], Qm = (e, t, i) => {
  if (t._n)
    return t;
  const n = Fe((...a) => Ju(t(...a)), i);
  return n._c = !1, n;
}, Zh = (e, t, i) => {
  const n = e._ctx;
  for (const a in e) {
    if (Zu(a)) continue;
    const r = e[a];
    if (De(r))
      t[a] = Qm(a, r, n);
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
}, ey = (e, t, i) => {
  const n = e.slots = qh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Qh(n, t, i), i && Jp(n, "_", a, !0)) : Zh(t, n);
  } else t && Jh(e, t);
}, ty = (e, t, i) => {
  const { vnode: n, slots: a } = e;
  let r = !0, o = qe;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? i && c === 1 ? r = !1 : Qh(a, t, i) : (r = !t.$stable, Zh(t, a)), o = t;
  } else t && (Jh(e, t), o = { default: 1 });
  if (r)
    for (const c in a)
      !Zu(c) && o[c] == null && delete a[c];
}, Jt = oy;
function iy(e) {
  return ny(e);
}
function ny(e, t) {
  const i = Fl();
  i.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: c,
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
    w && !Ea(w, T) && (R = tt(w), Te(w, I, j, !0), w = null), T.patchFlag === -2 && (Q = !1, T.dynamicChildren = null);
    const { type: V, ref: pe, shapeFlag: se } = T;
    switch (V) {
      case Do:
        N(w, T, x, R);
        break;
      case Pt:
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
        se & 1 ? oe(
          w,
          T,
          x,
          R,
          I,
          j,
          G,
          K,
          Q
        ) : se & 6 ? J(
          w,
          T,
          x,
          R,
          I,
          j,
          G,
          K,
          Q
        ) : (se & 64 || se & 128) && V.process(
          w,
          T,
          x,
          R,
          I,
          j,
          G,
          K,
          Q,
          Dt
        );
    }
    pe != null && I ? io(pe, w && w.ref, j, T || w, !T) : pe == null && w && w.ref != null && io(w.ref, null, j, w, !0);
  }, N = (w, T, x, R) => {
    if (w == null)
      n(
        T.el = c(T.children),
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
  }, oe = (w, T, x, R, I, j, G, K, Q) => {
    if (T.type === "svg" ? G = "svg" : T.type === "math" && (G = "mathml"), w == null)
      ue(
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
  }, ue = (w, T, x, R, I, j, G, K) => {
    let Q, V;
    const { props: pe, shapeFlag: se, transition: he, dirs: Oe } = w;
    if (Q = w.el = o(
      w.type,
      j,
      pe && pe.is,
      pe
    ), se & 8 ? p(Q, w.children) : se & 16 && fe(
      w.children,
      Q,
      null,
      R,
      I,
      Ec(w, j),
      G,
      K
    ), Oe && ba(w, null, R, "created"), Z(Q, w, w.scopeId, G, R), pe) {
      for (const ze in pe)
        ze !== "value" && !Qr(ze) && r(Q, ze, null, pe[ze], j, R);
      "value" in pe && r(Q, "value", null, pe.value, j), (V = pe.onVnodeBeforeMount) && Ki(V, R, w);
    }
    Oe && ba(w, null, R, "beforeMount");
    const Pe = ay(I, he);
    Pe && he.beforeEnter(Q), n(Q, T, x), ((V = pe && pe.onVnodeMounted) || Pe || Oe) && Jt(() => {
      V && Ki(V, R, w), Pe && he.enter(Q), Oe && ba(w, null, R, "mounted");
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
  }, fe = (w, T, x, R, I, j, G, K, Q = 0) => {
    for (let V = Q; V < w.length; V++) {
      const pe = w[V] = K ? fn(w[V]) : Xi(w[V]);
      A(
        null,
        pe,
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
    let { patchFlag: Q, dynamicChildren: V, dirs: pe } = T;
    Q |= w.patchFlag & 16;
    const se = w.props || qe, he = T.props || qe;
    let Oe;
    if (x && ma(x, !1), (Oe = he.onVnodeBeforeUpdate) && Ki(Oe, x, T, w), pe && ba(T, w, x, "beforeUpdate"), x && ma(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!w.dynamicChildren || w.dynamicChildren.length !== V.length) && (Q = 0, G = !1, V = null), (se.innerHTML && he.innerHTML == null || se.textContent && he.textContent == null) && p(K, ""), V ? le(
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
        _e(K, se, he, x, I);
      else if (Q & 2 && se.class !== he.class && r(K, "class", null, he.class, I), Q & 4 && r(K, "style", se.style, he.style, I), Q & 8) {
        const Pe = T.dynamicProps;
        for (let ze = 0; ze < Pe.length; ze++) {
          const $e = Pe[ze], He = se[$e], ot = he[$e];
          (ot !== He || $e === "value") && r(K, $e, He, ot, I, x);
        }
      }
      Q & 1 && w.children !== T.children && p(K, T.children);
    } else !G && V == null && _e(K, se, he, x, I);
    ((Oe = he.onVnodeUpdated) || pe) && Jt(() => {
      Oe && Ki(Oe, x, T, w), pe && ba(T, w, x, "updated");
    }, R);
  }, le = (w, T, x, R, I, j, G) => {
    for (let K = 0; K < T.length; K++) {
      const Q = w[K], V = T[K], pe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ea(Q, V) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? y(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      A(
        Q,
        V,
        pe,
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
    const V = T.el = w ? w.el : c(""), pe = T.anchor = w ? w.anchor : c("");
    let { patchFlag: se, dynamicChildren: he, slotScopeIds: Oe } = T;
    Oe && (K = K ? K.concat(Oe) : Oe), w == null ? (n(V, x, R), n(pe, x, R), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      x,
      pe,
      I,
      j,
      G,
      K,
      Q
    )) : se > 0 && se & 64 && he && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren && w.dynamicChildren.length === he.length ? (le(
      w.dynamicChildren,
      he,
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
      pe,
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
    const K = w.component = uy(
      w,
      R,
      I
    );
    if (Hl(w) && (K.ctx.renderer = Dt), dy(K, !1, G), K.asyncDep) {
      if (I && I.registerDep(K, Y, G), !w.el) {
        const Q = K.subTree = xe(Pt);
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
    if (Wm(w, T, x))
      if (R.asyncDep && !R.asyncResolved) {
        ce(R, T, x);
        return;
      } else
        R.next = T, R.update();
    else
      T.el = w.el, R.vnode = T;
  }, Y = (w, T, x, R, I, j, G) => {
    const K = () => {
      if (w.isMounted) {
        let { next: se, bu: he, u: Oe, parent: Pe, vnode: ze } = w;
        {
          const Tt = ev(w);
          if (Tt) {
            se && (se.el = ze.el, ce(w, se, G)), Tt.asyncDep.then(() => {
              Jt(() => {
                w.isUnmounted || V();
              }, I);
            });
            return;
          }
        }
        let $e = se, He;
        ma(w, !1), se ? (se.el = ze.el, ce(w, se, G)) : se = ze, he && Es(he), (He = se.props && se.props.onVnodeBeforeUpdate) && Ki(He, Pe, se, ze), ma(w, !0);
        const ot = mf(w), vt = w.subTree;
        w.subTree = ot, A(
          vt,
          ot,
          // parent may have changed if it's in a teleport
          y(vt.el),
          // anchor may have changed if it's in a fragment
          tt(vt),
          w,
          I,
          j
        ), se.el = ot.el, $e === null && Ym(w, ot.el), Oe && Jt(Oe, I), (He = se.props && se.props.onVnodeUpdated) && Jt(
          () => Ki(He, Pe, se, ze),
          I
        );
      } else {
        let se;
        const { el: he, props: Oe } = T, { bm: Pe, m: ze, parent: $e, root: He, type: ot } = w, vt = ir(T);
        ma(w, !1), Pe && Es(Pe), !vt && (se = Oe && Oe.onVnodeBeforeMount) && Ki(se, $e, T), ma(w, !0);
        {
          He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(
            ot,
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
        if (ze && Jt(ze, I), !vt && (se = Oe && Oe.onVnodeMounted)) {
          const Tt = T;
          Jt(
            () => Ki(se, $e, Tt),
            I
          );
        }
        (T.shapeFlag & 256 || $e && ir($e.vnode) && $e.vnode.shapeFlag & 256) && w.a && Jt(w.a, I), w.isMounted = !0, T = x = R = null;
      }
    };
    w.scope.on();
    const Q = w.effect = new ih(K);
    w.scope.off();
    const V = w.update = Q.run.bind(Q), pe = w.job = Q.runIfDirty.bind(Q);
    pe.i = w, pe.id = w.uid, Q.scheduler = () => qu(pe), ma(w, !0), V();
  }, ce = (w, T, x) => {
    T.component = w;
    const R = w.vnode.props;
    w.vnode = T, w.next = null, Zm(w, T.props, R, x), ty(w, T.children, x), _n(), lf(w), wn();
  }, ae = (w, T, x, R, I, j, G, K, Q = !1) => {
    const V = w && w.children, pe = w ? w.shapeFlag : 0, se = T.children, { patchFlag: he, shapeFlag: Oe } = T;
    if (he > 0) {
      if (he & 128) {
        de(
          V,
          se,
          x,
          R,
          I,
          j,
          G,
          K,
          Q
        );
        return;
      } else if (he & 256) {
        me(
          V,
          se,
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
    Oe & 8 ? (pe & 16 && ht(V, I, j), se !== V && p(x, se)) : pe & 16 ? Oe & 16 ? de(
      V,
      se,
      x,
      R,
      I,
      j,
      G,
      K,
      Q
    ) : ht(V, I, j, !0) : (pe & 8 && p(x, ""), Oe & 16 && fe(
      se,
      x,
      R,
      I,
      j,
      G,
      K,
      Q
    ));
  }, me = (w, T, x, R, I, j, G, K, Q) => {
    w = w || er, T = T || er;
    const V = w.length, pe = T.length, se = Math.min(V, pe);
    let he;
    for (he = 0; he < se; he++) {
      const Oe = T[he] = Q ? fn(T[he]) : Xi(T[he]);
      A(
        w[he],
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
    V > pe ? ht(
      w,
      I,
      j,
      !0,
      !1,
      se
    ) : fe(
      T,
      x,
      R,
      I,
      j,
      G,
      K,
      Q,
      se
    );
  }, de = (w, T, x, R, I, j, G, K, Q) => {
    let V = 0;
    const pe = T.length;
    let se = w.length - 1, he = pe - 1;
    for (; V <= se && V <= he; ) {
      const Oe = w[V], Pe = T[V] = Q ? fn(T[V]) : Xi(T[V]);
      if (Ea(Oe, Pe))
        A(
          Oe,
          Pe,
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
    for (; V <= se && V <= he; ) {
      const Oe = w[se], Pe = T[he] = Q ? fn(T[he]) : Xi(T[he]);
      if (Ea(Oe, Pe))
        A(
          Oe,
          Pe,
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
      se--, he--;
    }
    if (V > se) {
      if (V <= he) {
        const Oe = he + 1, Pe = Oe < pe ? T[Oe].el : R;
        for (; V <= he; )
          A(
            null,
            T[V] = Q ? fn(T[V]) : Xi(T[V]),
            x,
            Pe,
            I,
            j,
            G,
            K,
            Q
          ), V++;
      }
    } else if (V > he)
      for (; V <= se; )
        Te(w[V], I, j, !0), V++;
    else {
      const Oe = V, Pe = V, ze = /* @__PURE__ */ new Map();
      for (V = Pe; V <= he; V++) {
        const et = T[V] = Q ? fn(T[V]) : Xi(T[V]);
        et.key != null && ze.set(et.key, V);
      }
      let $e, He = 0;
      const ot = he - Pe + 1;
      let vt = !1, Tt = 0;
      const Mt = new Array(ot);
      for (V = 0; V < ot; V++) Mt[V] = 0;
      for (V = Oe; V <= se; V++) {
        const et = w[V];
        if (He >= ot) {
          Te(et, I, j, !0);
          continue;
        }
        let dt;
        if (et.key != null)
          dt = ze.get(et.key);
        else
          for ($e = Pe; $e <= he; $e++)
            if (Mt[$e - Pe] === 0 && Ea(et, T[$e])) {
              dt = $e;
              break;
            }
        dt === void 0 ? Te(et, I, j, !0) : (Mt[dt - Pe] = V + 1, dt >= Tt ? Tt = dt : vt = !0, A(
          et,
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
      const Ei = vt ? ry(Mt) : er;
      for ($e = Ei.length - 1, V = ot - 1; V >= 0; V--) {
        const et = Pe + V, dt = T[et], Di = T[et + 1], vi = et + 1 < pe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Di.el || tv(Di)
        ) : R;
        Mt[V] === 0 ? A(
          null,
          dt,
          x,
          vi,
          I,
          j,
          G,
          K,
          Q
        ) : vt && ($e < 0 || V !== Ei[$e] ? Se(dt, x, vi, 2) : $e--);
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
      G.move(w, T, x, Dt);
      return;
    }
    if (G === ie) {
      n(j, T, x);
      for (let se = 0; se < Q.length; se++)
        Se(Q[se], T, x, R);
      n(w.anchor, T, x);
      return;
    }
    if (G === As) {
      z(w, T, x);
      return;
    }
    if (R !== 2 && V & 1 && K)
      if (R === 0)
        K.persisted && !j[wi] ? n(j, T, x) : (K.beforeEnter(j), n(j, T, x), Jt(() => K.enter(j), I));
      else {
        const { leave: se, delayLeave: he, afterLeave: Oe } = K, Pe = () => {
          w.ctx.isUnmounted ? a(j) : n(j, T, x);
        }, ze = () => {
          const $e = j._isLeaving || !!j[wi];
          j._isLeaving && j[wi](
            !0
            /* cancelled */
          ), K.persisted && !$e ? Pe() : se(j, () => {
            Pe(), Oe && Oe();
          });
        };
        he ? he(j, Pe, ze) : ze();
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
      shapeFlag: pe,
      patchFlag: se,
      dirs: he,
      cacheIndex: Oe,
      memo: Pe
    } = w;
    if (se === -2 && (I = !1), K != null && (_n(), io(K, null, x, w, !0), wn()), Oe != null && (T.renderCache[Oe] = void 0), pe & 256) {
      T.ctx.deactivate(w);
      return;
    }
    const ze = pe & 1 && he, $e = !ir(w);
    let He;
    if ($e && (He = G && G.onVnodeBeforeUnmount) && Ki(He, T, w), pe & 6)
      ct(w.component, x, R);
    else {
      if (pe & 128) {
        w.suspense.unmount(x, R);
        return;
      }
      ze && ba(w, null, T, "beforeUnmount"), pe & 64 ? w.type.remove(
        w,
        T,
        x,
        Dt,
        R
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== ie || se > 0 && se & 64) ? ht(
        V,
        T,
        x,
        !1,
        !0
      ) : (j === ie && se & 384 || !I && pe & 16) && ht(Q, T, x), R && Ke(w);
    }
    const ot = Pe != null && Oe == null;
    ($e && (He = G && G.onVnodeUnmounted) || ze || ot) && Jt(() => {
      He && Ki(He, T, w), ze && ba(w, null, T, "unmounted"), ot && (w.el = null);
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
  }, ct = (w, T, x) => {
    const { bum: R, scope: I, job: j, subTree: G, um: K, m: Q, a: V } = w;
    wf(Q), wf(V), R && Es(R), I.stop(), j && (j.flags |= 8, Te(G, w, T, x)), K && Jt(K, T), Jt(() => {
      w.isUnmounted = !0;
    }, T);
  }, ht = (w, T, x, R = !1, I = !1, j = 0) => {
    for (let G = j; G < w.length; G++)
      Te(w[G], T, x, R, I);
  }, tt = (w) => {
    if (w.shapeFlag & 6)
      return tt(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const T = k(w.anchor || w.el), x = T && T[Th];
    return x ? k(x) : T;
  };
  let ut = !1;
  const rt = (w, T, x) => {
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
  }, Dt = {
    p: A,
    um: Te,
    m: Se,
    r: Ke,
    mt: F,
    mc: fe,
    pc: ae,
    pbc: le,
    n: tt,
    o: e
  };
  return {
    render: rt,
    hydrate: void 0,
    createApp: Hm(rt)
  };
}
function Ec({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function ma({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ay(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qu(e, t, i = !1) {
  const n = e.children, a = t.children;
  if (Ae(n) && Ae(a))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let c = a[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = a[r] = fn(a[r]), c.el = o.el), !i && c.patchFlag !== -2 && Qu(o, c)), c.type === Do && (c.patchFlag === -1 && (c = a[r] = fn(c)), c.el = o.el), c.type === Pt && !c.el && (c.el = o.el);
    }
}
function ry(e) {
  const t = e.slice(), i = [0];
  let n, a, r, o, c;
  const d = e.length;
  for (n = 0; n < d; n++) {
    const v = e[n];
    if (v !== 0) {
      if (a = i[i.length - 1], e[a] < v) {
        t[n] = a, i.push(n);
        continue;
      }
      for (r = 0, o = i.length - 1; r < o; )
        c = r + o >> 1, e[i[c]] < v ? r = c + 1 : o = c;
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
function oy(e, t) {
  t && t.pendingBranch ? Ae(e) ? t.effects.push(...e) : t.effects.push(e) : wh(e);
}
const ie = /* @__PURE__ */ Symbol.for("v-fgt"), Do = /* @__PURE__ */ Symbol.for("v-txt"), Pt = /* @__PURE__ */ Symbol.for("v-cmt"), As = /* @__PURE__ */ Symbol.for("v-stc"), mn = [];
let pi = null;
function m(e = !1) {
  mn.push(pi = e ? null : []);
}
function ed() {
  mn.pop(), pi = mn[mn.length - 1] || null;
}
let wo = 1;
function zs(e, t = !1) {
  wo += e, e < 0 && pi && t && (pi.hasOnce = !0);
}
function nv(e) {
  return e.dynamicChildren = wo > 0 ? pi || er : null, ed(), wo > 0 && pi && pi.push(e), e;
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
    xe(
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
function Ea(e, t) {
  return e.type === t.type && e.key === t.key;
}
const av = ({ key: e }) => e ?? null, xs = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || /* @__PURE__ */ qt(e) || De(e) ? { i: $t, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, n = 0, a = null, r = e === ie ? 0 : 1, o = !1, c = !1) {
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
    ctx: $t
  };
  return c ? (Us(d, i), r & 128 && e.normalize(d)) : i && (d.shapeFlag |= lt(i) ? 8 : 16), wo > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  pi && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && pi.push(d), d;
}
const xe = sy;
function sy(e, t = null, i = null, n = 0, a = null, r = !1) {
  if ((!e || e === Fh) && (e = Pt), So(e)) {
    const c = Zn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && Us(c, i), wo > 0 && !r && pi && (c.shapeFlag & 6 ? pi[pi.indexOf(e)] = c : pi.push(c)), c.patchFlag = -2, c;
  }
  if (vy(e) && (e = e.__vccOpts), t) {
    t = Co(t);
    let { class: c, style: d } = t;
    c && !lt(c) && (t.class = be(c)), Je(d) && (/* @__PURE__ */ Gu(d) && !Ae(d) && (d = _t({}, d)), t.style = hi(d));
  }
  const o = lt(e) ? 1 : iv(e) ? 128 : Bl(e) ? 64 : Je(e) ? 4 : De(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ Gu(e) || Wh(e) ? _t({}, e) : e : null;
}
function Zn(e, t, i = !1, n = !1) {
  const { props: a, ref: r, patchFlag: o, children: c, transition: d } = e, v = t ? Wt(a || {}, t) : a, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && av(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? Ae(r) ? r.concat(xs(t)) : [r, xs(t)] : xs(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
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
    ssContent: e.ssContent && Zn(e.ssContent),
    ssFallback: e.ssFallback && Zn(e.ssFallback),
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
  return xe(Do, null, e, t);
}
function $(e = "", t = !1) {
  return t ? (m(), je(Pt, null, e)) : xe(Pt, null, e);
}
function Xi(e) {
  return e == null || typeof e == "boolean" ? xe(Pt) : Ae(e) ? xe(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : So(e) ? fn(e) : xe(Do, null, String(e));
}
function fn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zn(e);
}
function Us(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Ae(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Us(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !Wh(t) ? t._ctx = $t : a === 3 && $t && ($t.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (De(t)) {
    if (n & 65) {
      Us(e, { default: t });
      return;
    }
    t = { default: t, _ctx: $t }, i = 32;
  } else
    t = String(t), n & 64 ? (i = 16, t = [ge(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function Wt(...e) {
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
        o && r !== o && !(Ae(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
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
const ly = jh();
let cy = 0;
function uy(e, t, i) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || ly, r = {
    uid: cy++,
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
    scope: new Rb(
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Vm.bind(null, r), e.ce && e.ce(r), r;
}
let Kt = null;
const Da = () => Kt || $t;
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
    (i) => Kt = i
  ), ko = t(
    "__VUE_SSR_SETTERS__",
    (i) => To = i
  );
}
const Mo = (e) => {
  const t = Kt;
  return js(e), e.scope.on(), () => {
    e.scope.off(), js(t);
  };
}, Sf = () => {
  Kt && Kt.scope.off(), js(null);
};
function rv(e) {
  return e.vnode.shapeFlag & 4;
}
let To = !1;
function dy(e, t = !1, i = !1) {
  t && ko(t);
  const { props: n, children: a } = e.vnode, r = rv(e);
  Xm(e, n, r, t), ey(e, a, i || t);
  const o = r ? fy(e, t) : void 0;
  return t && ko(!1), o;
}
function fy(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Im);
  const { setup: n } = i;
  if (n) {
    _n();
    const a = e.setupContext = n.length > 1 ? sv(e) : null, r = Mo(e), o = $o(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), c = Yp(o);
    if (wn(), r(), (c || e.sp) && !ir(e) && Rh(e), c) {
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
  De(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = mh(t)), ov(e);
}
function ov(e, t, i) {
  const n = e.type;
  e.render || (e.render = n.render || Ci);
  {
    const a = Mo(e);
    _n();
    try {
      Dm(e);
    } finally {
      wn(), a();
    }
  }
}
const py = {
  get(e, t) {
    return Ht(e, "get", ""), e[t];
  }
};
function sv(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, py),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Gl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mh(Jb(e.exposed)), {
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
function hy(e, t = !0) {
  return De(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function vy(e) {
  return De(e) && "__vccOpts" in e;
}
const B = (e, t) => /* @__PURE__ */ am(e, t, To);
function ii(e, t, i) {
  try {
    zs(-1);
    const n = arguments.length;
    return n === 2 ? Je(t) && !Ae(t) ? So(t) ? xe(e, null, [t]) : xe(e, t) : xe(e, null, t) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && So(i) && (i = [i]), xe(e, t, i));
  } finally {
    zs(1);
  }
}
const gy = "3.5.42", by = Ci;
let gu;
const kf = typeof window < "u" && window.trustedTypes;
if (kf)
  try {
    gu = /* @__PURE__ */ kf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lv = gu ? (e) => gu.createHTML(e) : (e) => e, my = "http://www.w3.org/2000/svg", yy = "http://www.w3.org/1998/Math/MathML", dn = typeof document < "u" ? document : null, Tf = dn && /* @__PURE__ */ dn.createElement("template"), _y = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, n) => {
    const a = t === "svg" ? dn.createElementNS(my, e) : t === "mathml" ? dn.createElementNS(yy, e) : i ? dn.createElement(e, { is: i }) : dn.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => dn.createTextNode(e),
  createComment: (e) => dn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => dn.querySelector(e),
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
      const c = Tf.content;
      if (n === "svg" || n === "mathml") {
        const d = c.firstChild;
        for (; d.firstChild; )
          c.appendChild(d.firstChild);
        c.removeChild(d);
      }
      t.insertBefore(c, i);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      i ? i.previousSibling : t.lastChild
    ];
  }
}, Mn = "transition", zr = "animation", Eo = /* @__PURE__ */ Symbol("_vtc"), cv = {
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
}, wy = /* @__PURE__ */ _t(
  {},
  Ah,
  cv
), Sy = (e) => (e.displayName = "Transition", e.props = wy, e), Cy = /* @__PURE__ */ Sy(
  (e, { slots: t }) => ii(Sm, ky(e), t)
), ya = (e, t = []) => {
  Ae(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, Ef = (e) => e ? Ae(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ky(e) {
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
    enterToClass: c = `${i}-enter-to`,
    appearFromClass: d = r,
    appearActiveClass: v = o,
    appearToClass: p = c,
    leaveFromClass: y = `${i}-leave-from`,
    leaveActiveClass: k = `${i}-leave-active`,
    leaveToClass: E = `${i}-leave-to`
  } = e, L = Ty(a), A = L && L[0], N = L && L[1], {
    onBeforeEnter: D,
    onEnter: M,
    onEnterCancelled: z,
    onLeave: C,
    onLeaveCancelled: oe,
    onBeforeAppear: ue = D,
    onAppear: Z = M,
    onAppearCancelled: fe = z
  } = t, X = (ee, J, F, U) => {
    ee._enterCancelled = U, _a(ee, J ? p : c), _a(ee, J ? v : o), F && F();
  }, le = (ee, J) => {
    ee._isLeaving = !1, _a(ee, y), _a(ee, E), _a(ee, k), J && J();
  }, _e = (ee) => (J, F) => {
    const U = ee ? Z : M, Y = () => X(J, ee, F);
    ya(U, [J, Y]), Af(() => {
      _a(J, ee ? d : r), sn(J, ee ? p : c), Ef(U) || xf(J, n, A, Y);
    });
  };
  return _t(t, {
    onBeforeEnter(ee) {
      ya(D, [ee]), sn(ee, r), sn(ee, o);
    },
    onBeforeAppear(ee) {
      ya(ue, [ee]), sn(ee, d), sn(ee, v);
    },
    onEnter: _e(!1),
    onAppear: _e(!0),
    onLeave(ee, J) {
      ee._isLeaving = !0;
      const F = () => le(ee, J);
      sn(ee, y), ee._enterCancelled ? (sn(ee, k), Lf(ee)) : (Lf(ee), sn(ee, k)), Af(() => {
        ee._isLeaving && (_a(ee, y), sn(ee, E), Ef(C) || xf(ee, n, N, F));
      }), ya(C, [ee, F]);
    },
    onEnterCancelled(ee) {
      X(ee, !1, void 0, !0), ya(z, [ee]);
    },
    onAppearCancelled(ee) {
      X(ee, !0, void 0, !0), ya(fe, [ee]);
    },
    onLeaveCancelled(ee) {
      le(ee), ya(oe, [ee]);
    }
  });
}
function Ty(e) {
  if (e == null)
    return null;
  if (Je(e))
    return [Ac(e.enter), Ac(e.leave)];
  {
    const t = Ac(e);
    return [t, t];
  }
}
function Ac(e) {
  return Sb(e);
}
function sn(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Eo] || (e[Eo] = /* @__PURE__ */ new Set())).add(t);
}
function _a(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const i = e[Eo];
  i && (i.delete(t), i.size || (e[Eo] = void 0));
}
function Af(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ey = 0;
function xf(e, t, i, n) {
  const a = e._endId = ++Ey, r = () => {
    a === e._endId && n();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: o, timeout: c, propCount: d } = Ay(e, t);
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
  }, c + 1), e.addEventListener(v, k);
}
function Ay(e, t) {
  const i = window.getComputedStyle(e), n = (L) => (i[L] || "").split(", "), a = n(`${Mn}Delay`), r = n(`${Mn}Duration`), o = Of(a, r), c = n(`${zr}Delay`), d = n(`${zr}Duration`), v = Of(c, d);
  let p = null, y = 0, k = 0;
  t === Mn ? o > 0 && (p = Mn, y = o, k = r.length) : t === zr ? v > 0 && (p = zr, y = v, k = d.length) : (y = Math.max(o, v), p = y > 0 ? o > v ? Mn : zr : null, k = p ? p === Mn ? r.length : d.length : 0);
  const E = p === Mn && /\b(?:transform|all)(?:,|$)/.test(
    n(`${Mn}Property`).toString()
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
function xy(e, t, i) {
  const n = e[Eo];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const Bs = /* @__PURE__ */ Symbol("_vod"), uv = /* @__PURE__ */ Symbol("_vsh"), ar = {
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
function Oy(e) {
  const t = Da();
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
  }), Qn(() => {
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
      const r = Lb(t[a]);
      i.setProperty(`--${a}`, r), n += `--${a}: ${r};`;
    }
    i[dv] = n;
  }
}
const Ny = /(?:^|;)\s*display\s*:/;
function Ly(e, t, i) {
  const n = e.style, a = lt(i);
  let r = !1;
  if (i && !a) {
    if (t)
      if (lt(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          i[c] == null && Yr(n, c, "");
        }
      else
        for (const o in t)
          i[o] == null && Yr(n, o, "");
    for (const o in i) {
      o === "display" && (r = !0);
      const c = i[o];
      c != null ? Iy(
        e,
        o,
        !lt(t) && t ? t[o] : void 0,
        c
      ) || Yr(n, o, c) : Yr(n, o, "");
    }
  } else if (a) {
    if (t !== i) {
      const o = n[dv];
      o && (i += ";" + o), n.cssText = i, r = Ny.test(i);
    }
  } else t && e.removeAttribute("style");
  Bs in e && (e[Bs] = r ? n.display : "", e[uv] && (n.display = "none"));
}
const gs = /\s*!important$/;
function Yr(e, t, i) {
  if (Ae(i))
    i.forEach((n) => Yr(e, t, n));
  else if (i == null && (i = ""), t.startsWith("--"))
    gs.test(i) ? e.setProperty(t, i.replace(gs, ""), "important") : e.setProperty(t, i);
  else {
    const n = Ry(e, t);
    gs.test(i) ? e.setProperty(
      kn(n),
      i.replace(gs, ""),
      "important"
    ) : e[n] = i;
  }
}
const Rf = ["Webkit", "Moz", "ms"], xc = {};
function Ry(e, t) {
  const i = xc[t];
  if (i)
    return i;
  let n = Gt(t);
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
function Iy(e, t, i, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && lt(n) && i === n;
}
const If = "http://www.w3.org/1999/xlink";
function Pf(e, t, i, n, a, r = xb(t)) {
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
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, d = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(i);
    (c !== d || !("_value" in e)) && (e.value = d), i == null && e.removeAttribute(t), e._value = i;
    return;
  }
  let o = !1;
  if (i === "" || i == null) {
    const c = typeof e[t];
    c === "boolean" ? i = Qp(i) : i == null && c === "string" ? (i = "", o = !0) : c === "number" && (i = 0, o = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Aa(e, t, i, n) {
  e.addEventListener(t, i, n);
}
function Py(e, t, i, n) {
  e.removeEventListener(t, i, n);
}
const Ff = /* @__PURE__ */ Symbol("_vei");
function $y(e, t, i, n, a = null) {
  const r = e[Ff] || (e[Ff] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [c, d] = My(t);
    if (n) {
      const v = r[t] = jy(
        n,
        a
      );
      Aa(e, c, v, d);
    } else o && (Py(e, c, o, d), r[t] = void 0);
  }
}
const Fy = /(Once|Passive|Capture)$/, Dy = /^on:?(?:Once|Passive|Capture)$/;
function My(e) {
  let t, i;
  for (; (i = e.match(Fy)) && !Dy.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : kn(e.slice(2)), t];
}
let Oc = 0;
const zy = /* @__PURE__ */ Promise.resolve(), Uy = () => Oc || (zy.then(() => Oc = 0), Oc = Date.now());
function jy(e, t) {
  const i = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= i.attached)
      return;
    const a = i.value;
    if (Ae(a)) {
      const r = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        r.call(n), n._stopped = !0;
      };
      const o = a.slice(), c = [n];
      for (let d = 0; d < o.length && !n._stopped; d++) {
        const v = o[d];
        v && Ti(
          v,
          t,
          5,
          c
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
  return i.value = e, i.attached = Uy(), i;
}
const Df = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, By = (e, t, i, n, a, r) => {
  const o = a === "svg";
  t === "class" ? xy(e, n, o) : t === "style" ? Ly(e, i, n) : Ll(t) ? Rl(t) || $y(e, t, i, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Hy(e, t, n, o)) ? ($f(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Pf(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Vy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !lt(n))) ? $f(e, Gt(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Pf(e, t, n, o));
};
function Hy(e, t, i, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Df(t) && De(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Df(t) && lt(i) ? !1 : t in e;
}
function Vy(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const n = Gt(t);
  return Array.isArray(i) ? i.some((a) => Gt(a) === n) : Object.keys(i).some((a) => Gt(a) === n);
}
const Vs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ae(t) ? (i) => Es(t, i) : t;
};
function Ky(e) {
  e.target.composing = !0;
}
function Mf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Oa = /* @__PURE__ */ Symbol("_assign"), bs = /* @__PURE__ */ Symbol("_initialValue");
function Nc(e, t, i) {
  return t && (e = e.trim()), i && (e = $l(e)), e;
}
const ft = {
  created(e, { modifiers: { lazy: t, trim: i, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[bs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[bs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Oa] = Vs(a);
    const r = n || a.props && a.props.type === "number";
    Aa(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Oa](Nc(e.value, i, r));
    }), (i || r) && Aa(e, "change", () => {
      e.value = Nc(e.value, i, r);
    }), t || (Aa(e, "compositionstart", Ky), Aa(e, "compositionend", Mf), Aa(e, "change", Mf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: n } }) {
    const a = t ?? "", r = e[bs];
    delete e[bs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Oa](Nc(e.value, i, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: n, trim: a, number: r } }, o) {
    if (e[Oa] = Vs(o), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? $l(e.value) : e.value, d = t ?? "";
    if (c === d)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === i || a && e.value.trim() === d) || (e.value = d);
  }
}, Xt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, n) {
    e._modelValue = t, Aa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => i ? $l(Ks(d)) : Ks(d)
      ), r = e.multiple, o = r ? $a(e._modelValue) ? new Set(a) : a : a[0], c = e._pendingValue = [
        r,
        r ? Ae(o) ? a.slice() : a : o
      ];
      try {
        e[Oa](o);
      } finally {
        Qt(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Oa] = Vs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zf(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[Oa] = Vs(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !Gy(t, i[1], i[0])) && zf(e, t);
  }
};
function Gy(e, t, i) {
  if (!i || Ae(e)) return Xn(e, t);
  if ($a(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function zf(e, t) {
  const i = e.multiple, n = Ae(t);
  if (!(i && !n && !$a(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], c = Ks(o);
      if (i)
        if (n) {
          const d = typeof c;
          d === "string" || d === "number" ? o.selected = t.some((v) => String(v) === String(c)) : o.selected = Nb(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (Xn(Ks(o), t)) {
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
const qy = ["ctrl", "shift", "alt", "meta"], Wy = {
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
  exact: (e, t) => qy.some((i) => e[`${i}Key`] && !t.includes(i))
}, ye = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), n = t.join(".");
  return i[n] || (i[n] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const c = Wy[t[o]];
      if (c && c(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Yy = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, at = (e, t) => {
  const i = e._withKeys || (e._withKeys = {}), n = t.join(".");
  return i[n] || (i[n] = ((a) => {
    if (!("key" in a))
      return;
    const r = kn(a.key);
    if (t.some(
      (o) => o === r || Yy[o] === r
    ))
      return e(a);
  }));
}, Xy = /* @__PURE__ */ _t({ patchProp: By }, _y);
let Uf;
function Zy() {
  return Uf || (Uf = iy(Xy));
}
const Jy = ((...e) => {
  const t = Zy().createApp(...e), { mount: i } = t;
  return t.mount = (n) => {
    const a = e_(n);
    if (!a) return;
    const r = t._component;
    !De(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = i(a, !1, Qy(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function Qy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function e_(e) {
  return lt(e) ? document.querySelector(e) : e;
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
function t_(e) {
  if (Array.isArray(e)) return e;
}
function i_(e, t) {
  var i = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (i != null) {
    var n, a, r, o, c = [], d = !0, v = !1;
    try {
      if (r = (i = i.call(e)).next, t !== 0) for (; !(d = (n = r.call(i)).done) && (c.push(n.value), c.length !== t); d = !0) ;
    } catch (p) {
      v = !0, a = p;
    } finally {
      try {
        if (!d && i.return != null && (o = i.return(), Object(o) !== o)) return;
      } finally {
        if (v) throw a;
      }
    }
    return c;
  }
}
function n_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function a_(e, t) {
  return t_(e) || i_(e, t) || r_(e, t) || n_();
}
function r_(e, t) {
  if (e) {
    if (typeof e == "string") return jf(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? jf(e, t) : void 0;
  }
}
const fv = Object.entries, Bf = Object.setPrototypeOf, o_ = Object.isFrozen, s_ = Object.getPrototypeOf, l_ = Object.getOwnPropertyDescriptor;
let St = Object.freeze, kt = Object.seal, Ja = Object.create, pv = typeof Reflect < "u" && Reflect, mu = pv.apply, yu = pv.construct;
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
const ka = wt(Array.prototype.forEach), c_ = wt(Array.prototype.lastIndexOf), Hf = wt(Array.prototype.pop), jr = wt(Array.prototype.push), u_ = wt(Array.prototype.splice), rr = Array.isArray, Xr = wt(String.prototype.toLowerCase), Lc = wt(String.prototype.toString), Vf = wt(String.prototype.match), Br = wt(String.prototype.replace), Kf = wt(String.prototype.indexOf), d_ = wt(String.prototype.trim), f_ = wt(Number.prototype.toString), p_ = wt(Boolean.prototype.toString), Gf = typeof BigInt > "u" ? null : wt(BigInt.prototype.toString), qf = typeof Symbol > "u" ? null : wt(Symbol.prototype.toString), ni = wt(Object.prototype.hasOwnProperty), Hr = wt(Object.prototype.toString), jt = wt(RegExp.prototype.test), wa = h_(TypeError);
function wt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
      n[a - 1] = arguments[a];
    return mu(e, t, n);
  };
}
function h_(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
      i[n] = arguments[n];
    return yu(e, i);
  };
}
function Ge(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xr;
  if (Bf && Bf(e, null), !rr(t))
    return e;
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
  for (let t = 0; t < e.length; t++)
    ni(e, t) || (e[t] = null);
  return e;
}
function di(e) {
  const t = Ja(null);
  for (const n of fv(e)) {
    var i = a_(n, 2);
    const a = i[0], r = i[1];
    ni(e, a) && (rr(r) ? t[a] = v_(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = di(r) : t[a] = r);
  }
  return t;
}
function g_(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return f_(e);
    case "boolean":
      return p_(e);
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
    const n = l_(e, t);
    if (n) {
      if (n.get)
        return wt(n.get);
      if (typeof n.value == "function")
        return wt(n.value);
    }
    e = s_(e);
  }
  function i() {
    return null;
  }
  return i;
}
function b_(e) {
  try {
    return jt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Wf = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Rc = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ic = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), m_ = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pc = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), y_ = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Yf = St(["#text"]), Xf = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $c = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Zf = St(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ms = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), __ = kt(/{{[\w\W]*|^[\w\W]*}}/g), w_ = kt(/<%[\w\W]*|^[\w\W]*%>/g), S_ = kt(/\${[\w\W]*/g), C_ = kt(/^data-[\-\w.\u00B7-\uFFFF]+$/), k_ = kt(/^aria-[\-\w]+$/), Jf = kt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), T_ = kt(/^(?:\w+script|data):/i), E_ = kt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), A_ = kt(/^html$/i), x_ = kt(/^[a-z][.\w]*(-[.\w]+)+$/i), Qf = kt(/<[/\w!]/g), ep = kt(/<[/\w]/g), O_ = kt(/<\/no(script|embed|frames)/i), N_ = kt(/\/>/i), ci = {
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
}, hv = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], L_ = St(Ge({}, hv)), R_ = (function() {
  const e = {};
  return ka(hv, (t) => {
    e[t] = kt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), I_ = function() {
  return typeof window > "u" ? null : window;
}, P_ = function(t, i) {
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
}, zn = function(t, i, n, a) {
  return ni(t, i) && rr(t[i]) ? Ge(a.base ? di(a.base) : {}, t[i], a.transform) : n;
}, Fc = function(t, i, n) {
  const a = ni(t, i) ? t[i] : void 0;
  return a && typeof a == "object" ? di(a) : n();
};
function vv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : I_();
  const t = (te) => vv(te);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== ci.document || !e.Element)
    return t.isSupported = !1, t;
  let i = e.document;
  const n = i, a = n.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, c = e.Element, d = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const p = e.DOMParser, y = e.trustedTypes, k = c.prototype, E = Li(k, "cloneNode"), L = Li(k, "remove"), A = Li(k, "nextSibling"), N = Li(k, "childNodes"), D = Li(k, "parentNode"), M = Li(k, "shadowRoot"), z = Li(k, "attributes"), C = o && o.prototype ? Li(o.prototype, "nodeType") : null, oe = o && o.prototype ? Li(o.prototype, "nodeName") : null, ue = o && o.prototype ? Li(o.prototype, "ownerDocument") : null, Z = function(S) {
    return C ? C(S) : S.nodeType;
  }, fe = function(S) {
    return oe ? oe(S) : S.nodeName;
  };
  if (typeof r == "function") {
    const te = i.createElement("template");
    te.content && te.content.ownerDocument && (i = te.content.ownerDocument);
  }
  let X, le = "", _e, ee = !1, J = 0;
  const F = function() {
    if (J > 0)
      throw wa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
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
  }, ce = function() {
    return ee || (_e = P_(y, a), ee = !0), _e;
  }, ae = i, me = ae.implementation, de = ae.createNodeIterator, Se = ae.createDocumentFragment, Te = ae.getElementsByTagName, Ke = n.importNode;
  let Le = tp();
  t.isSupported = typeof fv == "function" && typeof D == "function" && me && me.createHTMLDocument !== void 0;
  const ct = __, ht = w_, tt = S_, ut = C_, rt = k_, Dt = T_, H = E_, w = x_;
  let T = Jf, x = null;
  const R = Ge({}, [...Wf, ...Rc, ...Ic, ...Pc, ...Yf]);
  let I = null;
  const j = Ge({}, [...Xf, ...$c, ...Zf, ...ms]);
  let G = Object.seal(Ja(null, {
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
  const V = Object.seal(Ja(null, {
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
  let pe = !0, se = !0, he = !1, Oe = !0, Pe = !1, ze = !0, $e = !1, He = !1, ot = null, vt = null, Tt = !1, Mt = !1, Ei = !1, et = !1, dt = !0, Di = !1;
  const vi = "user-content-";
  let ia = !0, En = !1, Mi = {}, zi = null;
  const ur = Ge({}, [
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
  const An = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let xn = null;
  const On = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gt = "http://www.w3.org/1998/Math/MathML", za = "http://www.w3.org/2000/svg", ai = "http://www.w3.org/1999/xhtml";
  let Nn = ai, na = !1, Ua = null;
  const aa = Ge({}, [gt, za, ai], Lc), Ln = St(["mi", "mo", "mn", "ms", "mtext"]);
  let dr = Ge({}, Ln);
  const Uo = St(["annotation-xml"]);
  let fr = Ge({}, Uo);
  const ti = Ge({}, ["title", "style", "font", "a", "script"]);
  let gi = null;
  const jo = ["application/xhtml+xml", "text/html"], ec = "text/html";
  let pt = null, Rn = null;
  const tc = i.createElement("form"), Bo = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, pr = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Rn && Rn === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = di(S), gi = // eslint-disable-next-line unicorn/prefer-includes
    jo.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? ec : S.PARSER_MEDIA_TYPE, pt = gi === "application/xhtml+xml" ? Lc : Xr, x = zn(S, "ALLOWED_TAGS", R, {
      transform: pt
    }), I = zn(S, "ALLOWED_ATTR", j, {
      transform: pt
    }), Ua = zn(S, "ALLOWED_NAMESPACES", aa, {
      transform: Lc
    }), xn = zn(S, "ADD_URI_SAFE_ATTR", On, {
      transform: pt,
      base: On
    }), en = zn(S, "ADD_DATA_URI_TAGS", An, {
      transform: pt,
      base: An
    }), zi = zn(S, "FORBID_CONTENTS", ur, {
      transform: pt
    }), K = zn(S, "FORBID_TAGS", di({}), {
      transform: pt
    }), Q = zn(S, "FORBID_ATTR", di({}), {
      transform: pt
    }), Mi = ni(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? di(S.USE_PROFILES) : S.USE_PROFILES : !1, pe = S.ALLOW_ARIA_ATTR !== !1, se = S.ALLOW_DATA_ATTR !== !1, he = S.ALLOW_UNKNOWN_PROTOCOLS || !1, Oe = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Pe = S.SAFE_FOR_TEMPLATES || !1, ze = S.SAFE_FOR_XML !== !1, $e = S.WHOLE_DOCUMENT || !1, Mt = S.RETURN_DOM || !1, Ei = S.RETURN_DOM_FRAGMENT || !1, et = S.RETURN_TRUSTED_TYPE || !1, Tt = S.FORCE_BODY || !1, dt = S.SANITIZE_DOM !== !1, Di = S.SANITIZE_NAMED_PROPS || !1, ia = S.KEEP_CONTENT !== !1, En = S.IN_PLACE || !1, T = b_(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Jf, Nn = typeof S.NAMESPACE == "string" ? S.NAMESPACE : ai, dr = Fc(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, Ln)
      // Default built-in map
    ), fr = Fc(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Uo)
      // Default built-in map
    );
    const P = Fc(S, "CUSTOM_ELEMENT_HANDLING", () => Ja(null));
    if (G = Ja(null), ni(P, "tagNameCheck") && Bo(P.tagNameCheck) && (G.tagNameCheck = P.tagNameCheck), ni(P, "attributeNameCheck") && Bo(P.attributeNameCheck) && (G.attributeNameCheck = P.attributeNameCheck), ni(P, "allowCustomizedBuiltInElements") && typeof P.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = P.allowCustomizedBuiltInElements), kt(G), Pe && (se = !1), Ei && (Mt = !0), Mi && (x = Ge({}, Yf), I = Ja(null), Mi.html === !0 && (Ge(x, Wf), Ge(I, Xf)), Mi.svg === !0 && (Ge(x, Rc), Ge(I, $c), Ge(I, ms)), Mi.svgFilters === !0 && (Ge(x, Ic), Ge(I, $c), Ge(I, ms)), Mi.mathMl === !0 && (Ge(x, Pc), Ge(I, Zf), Ge(I, ms))), V.tagCheck = null, V.attributeCheck = null, ni(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? V.tagCheck = S.ADD_TAGS : rr(S.ADD_TAGS) && (x === R && (x = di(x)), Ge(x, S.ADD_TAGS, pt))), ni(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? V.attributeCheck = S.ADD_ATTR : rr(S.ADD_ATTR) && (I === j && (I = di(I)), Ge(I, S.ADD_ATTR, pt))), ni(S, "ADD_FORBID_CONTENTS") && rr(S.ADD_FORBID_CONTENTS) && (zi === ur && (zi = di(zi)), Ge(zi, S.ADD_FORBID_CONTENTS, pt)), ia && (x["#text"] = !0), $e && Ge(x, ["html", "head", "body"]), x.table && (Ge(x, ["tbody"]), delete K.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw wa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw wa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = X;
      X = S.TRUSTED_TYPES_POLICY;
      try {
        le = U("");
      } catch (re) {
        throw X = q, re;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (X = void 0, le = "") : (X === void 0 && (X = ce()), X && typeof le == "string" && (le = U("")));
    St && St(S), Rn = S;
  }, Ho = Ge({}, [...Rc, ...Ic, ...m_]), Vo = Ge({}, [...Pc, ...y_]), ic = function(S, P, q) {
    return P.namespaceURI === ai ? S === "svg" : P.namespaceURI === gt ? S === "svg" && (q === "annotation-xml" || dr[q]) : !!Ho[S];
  }, nc = function(S, P, q) {
    return P.namespaceURI === ai ? S === "math" : P.namespaceURI === za ? S === "math" && fr[q] : !!Vo[S];
  }, ac = function(S, P, q) {
    return P.namespaceURI === za && !fr[q] || P.namespaceURI === gt && !dr[q] ? !1 : !Vo[S] && (ti[S] || !Ho[S]);
  }, rc = function(S) {
    let P = D(S);
    (!P || !P.tagName) && (P = {
      namespaceURI: Nn,
      tagName: "template"
    });
    const q = Xr(S.tagName), re = Xr(P.tagName);
    return Ua[S.namespaceURI] ? S.namespaceURI === za ? ic(q, P, re) : S.namespaceURI === gt ? nc(q, P, re) : S.namespaceURI === ai ? ac(q, P, re) : !!(gi === "application/xhtml+xml" && Ua[S.namespaceURI]) : !1;
  }, Ui = function(S) {
    jr(t.removed, {
      element: S
    });
    try {
      D(S).removeChild(S);
    } catch {
      if (L(S), !D(S))
        throw wa("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
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
  }, ja = function(S) {
    In(S);
    const P = N(S);
    if (P) {
      const re = [];
      ka(P, (ve) => {
        jr(re, ve);
      }), ka(re, (ve) => {
        try {
          L(ve);
        } catch {
        }
      });
    }
    const q = z(S);
    if (q)
      for (let re = q.length - 1; re >= 0; --re) {
        const ve = q[re], Ne = ve && ve.name;
        typeof Ne == "string" && Ko(S, ve, Ne);
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
      if (Mt || Ei)
        try {
          Ui(P);
        } catch {
        }
      else
        try {
          P.setAttribute(S, "");
        } catch {
        }
  }, hr = function(S) {
    const P = z(S);
    if (P)
      for (let q = P.length - 1; q >= 0; --q) {
        const re = P[q], ve = re && re.name;
        typeof ve != "string" || I[pt(ve)] || Ko(S, re, ve);
      }
  }, In = function(S) {
    const P = [S];
    for (; P.length > 0; ) {
      const q = P.pop();
      Z(q) === ci.element && hr(q);
      const ve = N(q);
      if (ve)
        for (let Ne = ve.length - 1; Ne >= 0; --Ne)
          P.push(ve[Ne]);
    }
  }, Ba = function(S, P) {
    return ze ? S === "patchsrc" ? !0 : S === "for" && P !== "label" && P !== "output" : !1;
  }, vr = function(S) {
    if (!ze)
      return;
    const P = [S];
    for (; P.length > 0; ) {
      const q = P.pop(), re = Z(q);
      if (re === ci.processingInstruction || re === ci.comment && jt(ep, q.data)) {
        try {
          L(q);
        } catch {
        }
        continue;
      }
      if (re === ci.element) {
        const Ne = q, it = pt(fe(q));
        try {
          Ne.hasAttribute && Ne.hasAttribute("patchsrc") && Ne.removeAttribute("patchsrc"), Ne.hasAttribute && Ne.hasAttribute("for") && Ba("for", it) && Ne.removeAttribute("for");
        } catch {
        }
      }
      const ve = N(q);
      if (ve)
        for (let Ne = ve.length - 1; Ne >= 0; --Ne)
          P.push(ve[Ne]);
    }
  }, gr = function(S) {
    let P = null, q = null;
    if (Tt)
      S = "<remove></remove>" + S;
    else {
      const Ne = Vf(S, /^[\r\n\t ]+/);
      q = Ne && Ne[0];
    }
    gi === "application/xhtml+xml" && Nn === ai && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const re = X ? U(S) : S;
    if (Nn === ai)
      try {
        P = new p().parseFromString(re, gi);
      } catch {
      }
    if (!P || !P.documentElement) {
      P = me.createDocument(Nn, "template", null);
      try {
        P.documentElement.innerHTML = na ? le : re;
      } catch {
      }
    }
    const ve = P.body || P.documentElement;
    return S && q && ve.insertBefore(i.createTextNode(q), ve.childNodes[0] || null), Nn === ai ? Te.call(P, $e ? "html" : "body")[0] : $e ? P.documentElement : ve;
  }, Go = function(S) {
    const P = ue ? ue(S) : S.ownerDocument;
    return de.call(
      P || S,
      S,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, ra = function(S) {
    return S = Br(S, ct, " "), S = Br(S, ht, " "), S = Br(S, tt, " "), S;
  }, Ha = function(S) {
    var P;
    S.normalize();
    const q = ue ? ue(S) : S.ownerDocument, re = de.call(
      q || S,
      S,
      // eslint-disable-next-line no-bitwise
      d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ve = re.nextNode();
    for (; ve; )
      ve.data = ra(ve.data), ve = re.nextNode();
    const Ne = (P = S.querySelectorAll) === null || P === void 0 ? void 0 : P.call(S, "template");
    Ne && ka(Ne, (it) => {
      Bi(it.content) && Ha(it.content);
    });
  }, Va = function(S) {
    const P = oe ? oe(S) : null;
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
    te.length !== 0 && ka(te, (q) => {
      q.call(t, S, P, Rn);
    });
  }
  const Ai = function(S, P) {
    return !!(ze && S.hasChildNodes() && !tn(S.firstElementChild) && jt(Qf, S.textContent) && jt(Qf, S.innerHTML) || ze && S.namespaceURI === ai && L_[P] && (tn(S.firstElementChild) || typeof S.textContent == "string" && jt(R_[P], S.textContent)) || S.nodeType === ci.processingInstruction || ze && S.nodeType === ci.comment && jt(ep, S.data));
  }, oa = function(S, P) {
    if (S instanceof RegExp)
      return jt(S, P);
    if (S instanceof Function) {
      for (var q = arguments.length, re = new Array(q > 2 ? q - 2 : 0), ve = 2; ve < q; ve++)
        re[ve - 2] = arguments[ve];
      return !!S(P, ...re);
    }
    return !1;
  }, qo = function(S, P, q) {
    if (!K[P] && yr(P) && oa(G.tagNameCheck, P))
      return !1;
    if (ia && !zi[P]) {
      const re = D(S), ve = N(S);
      if (ve && re) {
        const Ne = ve.length;
        for (let it = Ne - 1; it >= 0; --it) {
          const nt = S === q ? E(ve[it], !0) : ve[it];
          re.insertBefore(nt, A(S));
        }
      }
    }
    return Ui(S), !0;
  }, br = function(S, P, q, re) {
    return S.length === 0 ? P : P === q || P === re ? di(P) : P;
  }, Wo = function(S, P) {
    return S === P || D(S) !== null ? !1 : (En && In(S), !0);
  }, Yo = function(S, P) {
    if (ri(Le.beforeSanitizeElements, S, null), Wo(S, P))
      return !0;
    if (Va(S))
      return Ui(S), !0;
    const q = pt(fe(S));
    if (x = br(Le.uponSanitizeElement, x, R, ot), ri(Le.uponSanitizeElement, S, {
      tagName: q,
      allowedTags: x
    }), Wo(S, P))
      return !0;
    if (Ai(S, q))
      return Ui(S), !0;
    if (K[q] || !(V.tagCheck instanceof Function && V.tagCheck(q)) && !x[q]) {
      const ve = qo(S, q, P);
      return ve === !1 && ri(Le.afterSanitizeElements, S, null), ve;
    }
    if (Z(S) === ci.element && !rc(S) || (q === "noscript" || q === "noembed" || q === "noframes") && jt(O_, S.innerHTML))
      return Ui(S), !0;
    if (Pe && S.nodeType === ci.text) {
      const ve = ra(S.textContent);
      S.textContent !== ve && (jr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = ve);
    }
    return ri(Le.afterSanitizeElements, S, null), !1;
  }, mr = function(S, P, q) {
    if (Q[P] || Ba(P, S) || dt && (P === "id" || P === "name") && (q in i || q in tc))
      return !1;
    const re = I[P] || V.attributeCheck instanceof Function && V.attributeCheck(P, S);
    return se && jt(ut, P) || pe && jt(rt, P) ? !0 : re ? xn[P] || jt(T, Br(q, H, "")) || (P === "src" || P === "xlink:href" || P === "href") && S !== "script" && Kf(q, "data:") === 0 && en[S] || he && !jt(Dt, Br(q, H, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      yr(S) && oa(G.tagNameCheck, S) && oa(G.attributeNameCheck, P, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      P === "is" && G.allowCustomizedBuiltInElements && oa(G.tagNameCheck, q)
    );
  }, Xo = Ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), yr = function(S) {
    return !Xo[Xr(S)] && jt(w, S);
  }, oc = function(S, P, q, re) {
    if (X && typeof y == "object" && typeof y.getAttributeType == "function" && !q)
      switch (y.getAttributeType(S, P)) {
        case "TrustedHTML":
          return U(re);
        case "TrustedScriptURL":
          return Y(re);
      }
    return re;
  }, sc = function(S, P, q, re) {
    try {
      q ? S.setAttributeNS(q, P, re) : S.setAttribute(P, re), Va(S) ? Ui(S) : Hf(t.removed);
    } catch {
      ji(P, S);
    }
  }, _r = function(S) {
    ri(Le.beforeSanitizeAttributes, S, null);
    const P = S.attributes;
    if (!P || Va(S))
      return;
    I = br(Le.uponSanitizeAttribute, I, j, vt);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let re = P.length;
    const ve = pt(S.nodeName);
    for (; re--; ) {
      const Ne = P[re], it = Ne.name, nt = Ne.namespaceURI, At = Ne.value, mt = pt(it), Sr = At;
      let xt = it === "value" ? Sr : d_(Sr);
      if (q.attrName = mt, q.attrValue = xt, q.keepAttr = !0, q.forceKeepAttr = void 0, ri(Le.uponSanitizeAttribute, S, q), xt = q.attrValue, Di && (mt === "id" || mt === "name") && Kf(xt, vi) !== 0 && (ji(it, S, Ne), xt = vi + xt), ze && jt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, xt)) {
        ji(it, S, Ne);
        continue;
      }
      if (mt === "attributename" && Vf(xt, "href")) {
        ji(it, S, Ne);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          ji(it, S, Ne);
          continue;
        }
        if (!Oe && jt(N_, xt)) {
          ji(it, S, Ne);
          continue;
        }
        if (Pe && (xt = ra(xt)), !mr(ve, mt, xt)) {
          ji(it, S, Ne);
          continue;
        }
        xt = oc(ve, mt, nt, xt), xt !== Sr && sc(S, it, nt, xt);
      }
    }
    ri(Le.afterSanitizeAttributes, S, null);
  }, Et = function(S) {
    let P = null;
    const q = Go(S);
    for (ri(Le.beforeSanitizeShadowDOM, S, null); P = q.nextNode(); )
      if (ri(Le.uponSanitizeShadowNode, P, null), Yo(P, S), _r(P), Bi(P.content) && Et(P.content), Z(P) === ci.element) {
        const re = M(P);
        Bi(re) && (wr(re), Et(re));
      }
    ri(Le.afterSanitizeShadowDOM, S, null);
  }, wr = function(S) {
    const P = [{
      node: S,
      shadow: null
    }];
    for (; P.length > 0; ) {
      const q = P.pop();
      if (q.shadow) {
        Et(q.shadow);
        continue;
      }
      const re = q.node, Ne = Z(re) === ci.element, it = N(re);
      if (it)
        for (let nt = it.length - 1; nt >= 0; --nt)
          P.push({
            node: it[nt],
            shadow: null
          });
      if (Ne) {
        const nt = oe ? oe(re) : null;
        if (typeof nt == "string" && pt(nt) === "template") {
          const At = re.content;
          Bi(At) && P.push({
            node: At,
            shadow: null
          });
        }
      }
      if (Ne) {
        const nt = M(re);
        Bi(nt) && P.push({
          node: null,
          shadow: nt
        }, {
          node: nt,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(te) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = null, q = null, re = null, ve = null;
    if (na = !te, na && (te = "<!-->"), typeof te != "string" && !tn(te) && (te = g_(te), typeof te != "string"))
      throw wa("dirty is not a string, aborting");
    if (!t.isSupported)
      return te;
    He ? (x = ot, I = vt) : pr(S), (Le.uponSanitizeElement.length > 0 || Le.uponSanitizeAttribute.length > 0) && (x = di(x)), Le.uponSanitizeAttribute.length > 0 && (I = di(I)), t.removed = [];
    const Ne = En && typeof te != "string" && tn(te);
    if (Ne) {
      vr(te);
      const At = fe(te);
      if (typeof At == "string") {
        const mt = pt(At);
        if (!x[mt] || K[mt])
          throw ja(te), wa("root node is forbidden and cannot be sanitized in-place");
      }
      if (Va(te))
        throw ja(te), wa("root node is clobbered and cannot be sanitized in-place");
      try {
        wr(te);
      } catch (mt) {
        throw ja(te), mt;
      }
    } else if (tn(te))
      P = gr("<!---->"), q = P.ownerDocument.importNode(te, !0), q.nodeType === ci.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? P = q : P.appendChild(q), wr(q);
    else {
      if (!Mt && !Pe && !$e && // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf("<") === -1)
        return X && et ? U(te) : te;
      if (P = gr(te), !P)
        return Mt ? null : et ? le : "";
    }
    P && Tt && Ui(P.firstChild);
    const it = Ne ? te : P;
    try {
      const At = Go(it);
      for (; re = At.nextNode(); )
        Yo(re, it), _r(re), Bi(re.content) && Et(re.content);
    } catch (At) {
      throw Ne && (ja(te), ka(t.removed, (mt) => {
        mt.element && In(mt.element);
      })), At;
    }
    if (Ne)
      return ka(t.removed, (At) => {
        At.element && In(At.element);
      }), Pe && Ha(te), te;
    if (Mt) {
      if (Pe && Ha(P), Ei)
        for (ve = Se.call(P.ownerDocument); P.firstChild; )
          ve.appendChild(P.firstChild);
      else
        ve = P;
      return (I.shadowroot || I.shadowrootmode) && (ve = Ke.call(n, ve, !0)), ve;
    }
    let nt = $e ? P.outerHTML : P.innerHTML;
    return $e && x["!doctype"] && P.ownerDocument && P.ownerDocument.doctype && P.ownerDocument.doctype.name && jt(A_, P.ownerDocument.doctype.name) && (nt = "<!DOCTYPE " + P.ownerDocument.doctype.name + `>
` + nt), Pe && (nt = ra(nt)), X && et ? U(nt) : nt;
  }, t.setConfig = function() {
    let te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    pr(te), He = !0, ot = x, vt = I;
  }, t.clearConfig = function() {
    Rn = null, He = !1, ot = null, vt = null, X = _e, le = "";
  }, t.isValidAttribute = function(te, S, P) {
    Rn || pr({});
    const q = pt(te), re = pt(S);
    return mr(q, re, P);
  }, t.addHook = function(te, S) {
    typeof S == "function" && ni(Le, te) && jr(Le[te], S);
  }, t.removeHook = function(te, S) {
    if (ni(Le, te)) {
      if (S !== void 0) {
        const P = c_(Le[te], S);
        return P === -1 ? void 0 : u_(Le[te], P, 1)[0];
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
function $_() {
  if (ip) return Dc;
  ip = 1;
  var e = /["'&<>]/;
  Dc = t;
  function t(i) {
    var n = "" + i, a = e.exec(n);
    if (!a)
      return n;
    var r, o = "", c = 0, d = 0;
    for (c = a.index; c < n.length; c++) {
      switch (n.charCodeAt(c)) {
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
      d !== c && (o += n.substring(d, c)), d = c + 1, o += r;
    }
    return d !== c ? o + n.substring(d, c) : o;
  }
  return Dc;
}
var F_ = $_();
const Gs = /* @__PURE__ */ id(F_);
function D_() {
  return globalThis._nc_l10n_locale;
}
function M_() {
  return D_().replaceAll(/_/g, "-");
}
function ql() {
  return globalThis._nc_l10n_language;
}
function z_(e) {
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
  const r = typeof i == "object" ? i : void 0, o = typeof n == "number" ? n : typeof i == "number" ? i : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, d = (A) => A, v = (c.sanitize ? gv.sanitize : d) || d, p = c.escape ? Gs : d, y = (A) => typeof A == "string" || typeof A == "number", k = (A, N, D) => A.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (M, z) => {
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
  const o = "_" + t + "_::_" + i + "_", c = r?.bundle ?? bv(e), d = c.translations[o];
  if (typeof d < "u") {
    const v = d;
    if (Array.isArray(v)) {
      const p = c.pluralFunction(n);
      return b(e, v[p], a, n, r);
    }
  }
  return n === 1 ? b(e, t, a, n, r) : b(e, i, a, n, r);
}
function U_(e, t = ql()) {
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
class j_ {
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
  return new j_(e);
}
function B_() {
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
function H_() {
  return rp || (rp = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: a
    } = _v(), r = yv();
    t = e.exports = {};
    const o = t.re = [], c = t.safeRe = [], d = t.src = [], v = t.safeSrc = [], p = t.t = {};
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
      r(N, C, D), p[N] = C, d[C] = D, v[C] = z, o[C] = new RegExp(D, M ? "g" : void 0), c[C] = new RegExp(z, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${k}*`), A("MAINVERSION", `(${d[p.NUMERICIDENTIFIER]})\\.(${d[p.NUMERICIDENTIFIER]})\\.(${d[p.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${d[p.NUMERICIDENTIFIERLOOSE]})\\.(${d[p.NUMERICIDENTIFIERLOOSE]})\\.(${d[p.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${d[p.NONNUMERICIDENTIFIER]}|${d[p.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${d[p.NONNUMERICIDENTIFIER]}|${d[p.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${d[p.PRERELEASEIDENTIFIER]}(?:\\.${d[p.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${d[p.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[p.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${k}+`), A("BUILD", `(?:\\+(${d[p.BUILDIDENTIFIER]}(?:\\.${d[p.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${d[p.MAINVERSION]}${d[p.PRERELEASE]}?${d[p.BUILD]}?`), A("FULL", `^${d[p.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${d[p.MAINVERSIONLOOSE]}${d[p.PRERELEASELOOSE]}?${d[p.BUILD]}?`), A("LOOSE", `^${d[p.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${d[p.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${d[p.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${d[p.XRANGEIDENTIFIER]})(?:\\.(${d[p.XRANGEIDENTIFIER]})(?:\\.(${d[p.XRANGEIDENTIFIER]})(?:${d[p.PRERELEASE]})?${d[p.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${d[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[p.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[p.XRANGEIDENTIFIERLOOSE]})(?:${d[p.PRERELEASELOOSE]})?${d[p.BUILD]}?)?)?`), A("XRANGE", `^${d[p.GTLT]}\\s*${d[p.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${d[p.GTLT]}\\s*${d[p.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), A("COERCE", `${d[p.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", d[p.COERCEPLAIN] + `(?:${d[p.PRERELEASE]})?(?:${d[p.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", d[p.COERCE], !0), A("COERCERTLFULL", d[p.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${d[p.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${d[p.LONETILDE]}${d[p.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${d[p.LONETILDE]}${d[p.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${d[p.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${d[p.LONECARET]}${d[p.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${d[p.LONECARET]}${d[p.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${d[p.GTLT]}\\s*(${d[p.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${d[p.GTLT]}\\s*(${d[p.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${d[p.GTLT]}\\s*(${d[p.LOOSEPLAIN]}|${d[p.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${d[p.XRANGEPLAIN]})\\s+-\\s+(${d[p.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${d[p.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[p.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(ys, ys.exports)), ys.exports;
}
var Uc, op;
function V_() {
  if (op) return Uc;
  op = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Uc = (n) => n ? typeof n != "object" ? e : n : t, Uc;
}
var jc, sp;
function K_() {
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
  const e = yv(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = _v(), { safeRe: n, t: a } = H_(), r = V_(), { compareIdentifiers: o } = K_(), c = (v, p) => {
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
            if (k === !1 && (L = [y]), c(this.prerelease, y)) {
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
function G_() {
  if (cp) return Hc;
  cp = 1;
  const e = wv();
  return Hc = (i, n) => new e(i, n).major, Hc;
}
var q_ = G_();
const up = /* @__PURE__ */ id(q_);
var Vc, dp;
function W_() {
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
function Y_() {
  if (fp) return Kc;
  fp = 1;
  const e = W_();
  return Kc = (i, n) => {
    const a = e(i, n);
    return a ? a.version : null;
  }, Kc;
}
var X_ = Y_();
const Z_ = /* @__PURE__ */ id(X_);
class J_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Z_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : up(t.getVersion()) !== up(this.getVersion()) && console.warn(
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
class Q_ {
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
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Vr = new J_(window._nc_event_bus) : Vr = window._nc_event_bus = new Q_(), Vr);
}
function Sv(e, t) {
  nd().subscribe(e, t);
}
function e1(e, t) {
  nd().unsubscribe(e, t);
}
function yn(e, ...t) {
  nd().emit(e, ...t);
}
const Cv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const t1 = Object.prototype.toString, i1 = (e) => t1.call(e) === "[object Object]", Wa = () => {
}, n1 = /* @__PURE__ */ a1();
function a1() {
  var e, t, i;
  return Cv && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function Gc(e) {
  return Array.isArray(e) ? e : [e];
}
function r1(e, t, i) {
  return We(e, t, {
    ...i,
    immediate: !0
  });
}
const kv = Cv ? window : void 0;
function Zr(e) {
  var t;
  const i = bn(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function or(...e) {
  const t = (n, a, r, o) => (n.addEventListener(a, r, o), () => n.removeEventListener(a, r, o)), i = B(() => {
    const n = Gc(bn(e[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return r1(() => {
    var n, a;
    return [
      (n = (a = i.value) === null || a === void 0 ? void 0 : a.map((r) => Zr(r))) !== null && n !== void 0 ? n : [kv].filter((r) => r != null),
      Gc(bn(i.value ? e[1] : e[0])),
      Gc(g(i.value ? e[2] : e[1])),
      bn(i.value ? e[3] : e[2])
    ];
  }, ([n, a, r, o], c, d) => {
    if (!n?.length || !a?.length || !r?.length) return;
    const v = i1(o) ? { ...o } : o, p = n.flatMap((y) => a.flatMap((k) => r.map((E) => t(y, k, E, v))));
    d(() => {
      p.forEach((y) => y());
    });
  }, { flush: "post" });
}
let pp = !1;
function hp(e, t, i = {}) {
  const { window: n = kv, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: c = !1 } = i;
  if (!n) return c ? {
    stop: Wa,
    cancel: Wa,
    trigger: Wa
  } : Wa;
  if (n1 && !pp) {
    pp = !0;
    const N = { passive: !0 };
    Array.from(n.document.body.children).forEach((D) => D.addEventListener("click", Wa, N)), n.document.documentElement.addEventListener("click", Wa, N);
  }
  let d = !0;
  const v = (N) => bn(a).some((D) => {
    if (typeof D == "string") return Array.from(n.document.querySelectorAll(D)).some((M) => M === N.target || N.composedPath().includes(M));
    {
      const M = Zr(D);
      return M && (N.target === M || N.composedPath().includes(M));
    }
  });
  function p(N) {
    const D = bn(N);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function y(N, D) {
    const M = bn(N), z = M.$.subTree && M.$.subTree.children;
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
    or(n, "click", (N) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), k(N));
    }, {
      passive: !0,
      capture: r
    }),
    or(n, "pointerdown", (N) => {
      const D = Zr(e);
      d = !v(N) && !!(D && !N.composedPath().includes(D));
    }, { passive: !0 }),
    o && or(n, "blur", (N) => {
      setTimeout(() => {
        const D = Zr(e);
        let M = n.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !D?.contains(n.document.activeElement) && t(N);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => L.forEach((N) => N());
  return c ? {
    stop: A,
    cancel: () => {
      d = !1;
    },
    trigger: (N) => {
      d = !0, k(N), d = !1;
    }
  } : A;
}
function o1(e, t = {}) {
  const { threshold: i = 50, onSwipe: n, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, c = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), d = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), v = B(() => c.x - d.x), p = B(() => c.y - d.y), { max: y, abs: k } = Math, E = B(() => y(k(v.value), k(p.value)) >= i), L = /* @__PURE__ */ gh(!1), A = B(() => E.value ? k(v.value) > k(p.value) ? v.value > 0 ? "left" : "right" : p.value > 0 ? "up" : "down" : "none"), N = (Z) => [Z.touches[0].clientX, Z.touches[0].clientY], D = (Z, fe) => {
    c.x = Z, c.y = fe;
  }, M = (Z, fe) => {
    d.x = Z, d.y = fe;
  }, z = {
    passive: o,
    capture: !o
  }, C = (Z) => {
    L.value && a?.(Z, A.value), L.value = !1;
  }, oe = [
    or(e, "touchstart", (Z) => {
      if (Z.touches.length !== 1) return;
      const [fe, X] = N(Z);
      D(fe, X), M(fe, X), r?.(Z);
    }, z),
    or(e, "touchmove", (Z) => {
      if (Z.touches.length !== 1) return;
      const [fe, X] = N(Z);
      M(fe, X), z.capture && !z.passive && Math.abs(v.value) > Math.abs(p.value) && Z.preventDefault(), !L.value && E.value && (L.value = !0), L.value && n?.(Z);
    }, z),
    or(e, ["touchend", "touchcancel"], C, z)
  ];
  return {
    isSwiping: L,
    direction: A,
    coordsStart: c,
    coordsEnd: d,
    lengthX: v,
    lengthY: p,
    stop: () => oe.forEach((Z) => Z())
  };
}
var s1 = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let i = t, n = e, a = $m(), r = Pm(), o = /* @__PURE__ */ Ee([]), c = B(() => o.value.reduce((H, w) => (H[~~w.id] = w) && H, {})), d = B(() => o.value.length), v = /* @__PURE__ */ Ee(null), p = /* @__PURE__ */ Ee(!1), y = /* @__PURE__ */ Ee({
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
        X(Z(H)), rt("resize", { event: H }, !0);
      }));
    }, M = (H) => {
      y.value.dragging && (window.getSelection()?.removeAllRanges(), rt("resized", { event: H }, !0)), y.value.mouseDown = !1, y.value.activeSplitter = null, setTimeout(() => {
        y.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, z = (H, w) => {
      "ontouchstart" in window && (H.preventDefault(), k.value.splitter === w ? (clearTimeout(k.value.timeoutId), k.value.timeoutId = null, C(H, w), k.value.splitter = null) : (k.value.splitter = w, k.value.timeoutId = setTimeout(() => k.value.splitter = null, 500))), y.value.dragging || rt("splitter-click", {
        event: H,
        index: w
      }, !0);
    }, C = (H, w) => {
      if (rt("splitter-dblclick", {
        event: H,
        index: w
      }, !0), n.maximizePanes) {
        let T = 0;
        o.value = o.value.map((x, R) => (x.size = R === w ? x.max : x.min, R !== w && (T += x.min), x)), o.value[w].size -= T, rt("pane-maximize", {
          event: H,
          index: w,
          pane: o.value[w]
        }), rt("resized", {
          event: H,
          index: w
        }, !0);
      }
    }, oe = (H, w) => {
      if (!n.keyboardStep) return;
      let T = n.horizontal ? H.key === "ArrowDown" : H.key === "ArrowRight", x = n.horizontal ? H.key === "ArrowUp" : H.key === "ArrowLeft";
      if (!T && !x) return;
      H.preventDefault(), y.value.activeSplitter = w;
      let R = (T ? 1 : -1) * (n.rtl && !n.horizontal ? -1 : 1), I = ee(w) + o.value[w].size;
      le(Math.min(Math.max(I + R * n.keyboardStep, 0), 100)), rt("resize", { event: H }, !0), rt("resized", { event: H }, !0), y.value.activeSplitter = null;
    }, ue = (H, w) => {
      let T = c.value[w];
      T && rt("pane-click", {
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
    }, fe = (H) => {
      H = H[n.horizontal ? "y" : "x"];
      let w = v.value[n.horizontal ? "clientHeight" : "clientWidth"];
      return n.rtl && !n.horizontal && (H = w - H), H * 100 / w;
    }, X = (H) => {
      le(fe(H));
    }, le = (H) => {
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
    }, ce = (H, w, T = !1) => {
      let x = H - 1, R = document.createElement("div");
      R.classList.add("splitpanes__splitter"), T || (R.onmousedown = (I) => N(I, x), typeof window < "u" && "ontouchstart" in window && (R.ontouchstart = (I) => N(I, x)), R.onclick = (I) => z(I, x + 1), n.keyboardStep && (R.setAttribute("tabindex", "0"), R.setAttribute("role", "separator"), R.setAttribute("aria-orientation", n.horizontal ? "horizontal" : "vertical"), R.onkeydown = (I) => oe(I, x))), R.ondblclick = (I) => C(I, x + 1), w.parentNode.insertBefore(R, w);
    }, ae = (H) => {
      H.onmousedown = null, H.onclick = null, H.ondblclick = null, H.onkeydown = null, H.remove();
    }, me = () => {
      let H = Array.from(v.value?.children || []);
      for (let T of H) T.className.includes("splitpanes__splitter") && ae(T);
      let w = 0;
      for (let T of H) T.className.includes("splitpanes__pane") && (!w && n.firstSplitter ? ce(w, T, !0) : w && ce(w, T), w++);
    }, de = ({ uid: H, ...w }) => {
      let T = c.value[H];
      for (let [x, R] of Object.entries(w)) T[x] = R;
    }, Se = !1, Te = (H) => {
      let w = -1;
      Array.from(v.value?.children || []).some((T) => (T.className.includes("splitpanes__pane") && w++, T.isSameNode(H.el))), o.value.splice(w, 0, {
        ...H,
        index: w
      }), o.value.forEach((T, x) => T.index = x), p.value && !Se && (Se = !0, Qt(() => {
        me(), Le({ addedPane: o.value[w] }), rt("pane-add", { pane: o.value[w] }), Se = !1;
      }));
    }, Ke = (H) => {
      let w = o.value.findIndex((x) => x.id === H);
      o.value[w].el = null;
      let T = o.value.splice(w, 1)[0];
      o.value.forEach((x, R) => x.index = R), Qt(() => {
        me(), rt("pane-remove", { pane: T }), Le({ removedPane: {
          ...T
        } });
      });
    }, Le = (H = {}) => {
      !H.addedPane && !H.removedPane ? ht() : o.value.some((w) => w.givenSize !== null || w.min || w.max < 100) ? tt(H) : ct(), p.value && rt("resized");
    }, ct = () => {
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
    }, tt = ({ addedPane: H, removedPane: w } = {}) => {
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
    }, rt = (H, w = void 0, T = !1) => {
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
    We(() => n.firstSplitter, () => me()), We(() => n.horizontal, (H) => Qt(() => {
      i("direction-changed", {
        horizontal: H,
        panes: o.value.map((w) => ({
          min: w.min,
          max: w.max,
          size: w.size
        }))
      });
    })), Qn(() => {
      Y(), me(), Le(), rt("ready"), p.value = !0;
    }), cr(() => p.value = !1);
    let Dt = () => {
      let { class: H, ...w } = a;
      return ii("div", {
        ref: v,
        class: [E.value, H],
        ...w
      }, r.default?.());
    };
    return _i("panes", o), _i("indexedPanes", c), _i("horizontal", B(() => n.horizontal)), _i("requestUpdate", de), _i("onPaneAdd", Te), _i("onPaneRemove", Ke), _i("onPaneClick", ue), (H, w) => (m(), je(Yu(Dt)));
  }
}), l1 = {
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
    let t = e, i = Vt("requestUpdate"), n = Vt("onPaneAdd"), a = Vt("horizontal"), r = Vt("onPaneRemove"), o = Vt("onPaneClick"), c = Da()?.uid, d = Vt("indexedPanes"), v = B(() => d.value[c]), p = /* @__PURE__ */ Ee(null), y = B(() => {
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
      uid: c,
      size: A
    })), We(() => k.value, (A) => i({
      uid: c,
      min: A
    })), We(() => E.value, (A) => i({
      uid: c,
      max: A
    })), Qn(() => {
      n({
        id: c,
        el: p.value,
        min: k.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : y.value,
        size: y.value
      });
    }), cr(() => r(c)), (A, N) => (m(), _("div", {
      ref_key: "paneEl",
      ref: p,
      class: "splitpanes__pane",
      onClick: N[0] ||= (D) => g(o)(D, A._.uid),
      style: hi(L.value)
    }, [Me(A.$slots, "default")], 4));
  }
}, c1 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", u1 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", d1 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", f1 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const ad = 1024, Tv = ad / 2, Ws = (e) => document.documentElement.clientWidth < e, Ev = /* @__PURE__ */ Ee(Ws(ad)), Av = /* @__PURE__ */ Ee(Ws(Tv));
window.addEventListener("resize", () => {
  Ev.value = Ws(ad), Av.value = Ws(Tv);
}, { passive: !0 });
function zo() {
  return /* @__PURE__ */ mo(Ev);
}
function p1() {
  return /* @__PURE__ */ mo(Av);
}
class h1 {
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
class v1 {
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
    const t = new h1((i) => U_(i, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function g1() {
  return new v1();
}
const xv = g1().detectLanguage().build(), Ct = (...e) => xv.gettext(...e);
function ea(...e) {
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
const b1 = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], m1 = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], y1 = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], _1 = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], w1 = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], S1 = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], C1 = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], k1 = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], T1 = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const E1 = /* @__PURE__ */ Symbol(""), [A1] = window.OC?.config?.version?.split(".") ?? [], Ov = Number.parseInt(A1 ?? "35"), x1 = Ov < 32, ta = Ov < 34, O1 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function N1() {
  return Vt(O1, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Qe = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, L1 = { class: "button-vue__wrapper" }, R1 = { class: "button-vue__icon" }, I1 = { class: "button-vue__text" }, P1 = /* @__PURE__ */ Ft({
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
    const i = e, n = t, { formBoxItemClass: a } = N1(), r = Vt(E1, null) !== null, o = B(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), c = B(() => o.value === "button" && typeof i.pressed == "boolean"), d = B(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), v = B(() => d.value.startsWith("tertiary")), p = B(() => i.alignment.split("-")[0]), y = B(() => i.alignment.includes("-")), k = Vt("NcPopover:trigger:attrs", () => ({}), !1), E = B(() => k()), L = B(() => {
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
      c.value && n("update:pressed", !i.pressed), n("click", N);
    }
    return (N, D) => (m(), je(Yu(o.value), Wt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${d.value}`]: d.value,
          "button-vue--tertiary": v.value,
          "button-vue--wide": e.wide,
          [`button-vue--${p.value}`]: p.value !== "center",
          "button-vue--reverse": y.value,
          "button-vue--legacy": g(x1),
          "button-vue--legacy34": g(ta)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, L.value, { onClick: A }), {
      default: Fe(() => [
        l("span", L1, [
          l("span", R1, [
            Me(N.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", I1, [
            Me(N.$slots, "default", {}, () => [
              ge(h(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Zi = /* @__PURE__ */ Qe(P1, [["__scopeId", "data-v-47ce59a3"]]), $1 = ["aria-hidden", "aria-label"], F1 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, D1 = ["d"], M1 = ["innerHTML"], z1 = /* @__PURE__ */ Ft({
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
    Oy((a) => ({
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
      }, null, 8, M1)) : (m(), _("svg", F1, [
        l("path", { d: e.path }, null, 8, D1)
      ]))
    ], 10, $1));
  }
}), Wl = /* @__PURE__ */ Qe(z1, [["__scopeId", "data-v-aaedb1c3"]]);
j1();
function U1(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), yn("csrf-token-update", { token: e, _internal: !0 }));
}
function j1() {
  Sv("csrf-token-update", ({ token: e, _internal: t }) => {
    t || U1(e);
  });
}
mv("public").persist().build();
let Ya;
function vp(e, t) {
  return e ? e.getAttribute(t) : null;
}
function B1() {
  if (Ya !== void 0)
    return Ya;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = vp(e, "data-user");
  return t === null ? (Ya = null, Ya) : (Ya = {
    uid: t,
    displayName: vp(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ya);
}
var yt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(yt || {});
class H1 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, n) {
    let a = "[" + yt[i].toUpperCase() + "] ";
    return n && n.app && (a += n.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), i === yt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, i, n) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && n?.error === void 0 && (n.error = i), t) {
        case yt.Debug:
          console.debug(this.formatMessage(i, yt.Debug, n), n);
          break;
        case yt.Info:
          console.info(this.formatMessage(i, yt.Info, n), n);
          break;
        case yt.Warn:
          console.warn(this.formatMessage(i, yt.Warn, n), n);
          break;
        case yt.Error:
          console.error(this.formatMessage(i, yt.Error, n), n);
          break;
        case yt.Fatal:
        default:
          console.error(this.formatMessage(i, yt.Fatal, n), n);
          break;
      }
  }
  debug(t, i) {
    this.log(yt.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log(yt.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log(yt.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log(yt.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log(yt.Fatal, t, Object.assign({}, this.context, i));
  }
}
function V1(e) {
  return new H1(e);
}
class K1 {
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
    const t = B1();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, i = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? yt.Warn, window._oc_debug && (t.context.level = yt.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
    };
    return i(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function G1() {
  return new K1(V1);
}
const Pa = G1().detectUser().setApp("@nextcloud/vue").build();
function q1(e) {
  let t = !1, i;
  return (...n) => (t || (t = !0, i = e(...n)), i);
}
let Nv = "missing-app-name";
try {
  Nv = "library";
} catch {
  Pa.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const W1 = Nv;
let Y1 = "";
try {
  Y1 = "0.1.0-alpha.171";
} catch {
  Pa.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Lv() {
  return Vt("appName", W1);
}
const X1 = q1(() => {
  const e = td("core", "apps", []), t = Lv();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), _u = z_();
ea(C1);
const Z1 = /* @__PURE__ */ Ft({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = zo();
    We(t, i), Qn(() => {
      i(t.value);
    }), cr(() => {
      t.value && i(!1);
    });
    function i(n = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = n ? "none" : "", n === !0 && yn("toggle-navigation", { open: !1 }));
    }
    return (n, a) => (m(), je(g(Zi), {
      "aria-label": g(Ct)("Go back to the list"),
      class: be(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(Ct)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Fe(() => [
        xe(g(Wl), {
          directional: "",
          path: g(c1)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), J1 = /* @__PURE__ */ Qe(Z1, [["__scopeId", "data-v-a28923a1"]]), gp = mv("nextcloud").persist().build(), Q1 = B_().theming?.name ?? "Nextcloud", e0 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: J1,
    Pane: l1,
    Splitpanes: s1
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
      localizedAppName: X1(),
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
        return Pa.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(Q1), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = o1(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? yn("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && yn("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      gp.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), Pa.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(gp.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return Pa.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, t0 = {
  key: 0,
  class: "hidden-visually"
}, i0 = { class: "app-content-wrapper__list" }, n0 = {
  key: 1,
  class: "app-content-wrapper"
};
function a0(e, t, i, n, a, r) {
  const o = Be("NcAppContentDetailsToggle"), c = Be("Pane"), d = Be("Splitpanes");
  return m(), _("main", {
    id: "app-content-vue",
    class: be(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    i.pageHeading ? (m(), _("h1", t0, h(i.pageHeading), 1)) : $("", !0),
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
        Ie(l("div", i0, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [ar, !i.showDetails]
        ]),
        i.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : $("", !0)
      ], 2)) : i.layout === "vertical-split" || i.layout === "horizontal-split" ? (m(), _("div", n0, [
        xe(d, {
          horizontal: i.layout === "horizontal-split",
          class: be(["default-theme", {
            "splitpanes--horizontal": i.layout === "horizontal-split",
            "splitpanes--vertical": i.layout === "vertical-split"
          }]),
          rtl: n.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Fe(() => [
            xe(c, {
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
            xe(c, {
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
      ])) : $("", !0)
    ], 64)) : $("", !0),
    e.$slots.list ? $("", !0) : Me(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const r0 = /* @__PURE__ */ Qe(e0, [["render", a0], ["__scopeId", "data-v-51427d61"]]);
var Rv = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Ys = /* @__PURE__ */ Rv.join(","), Iv = typeof Element > "u", Fa = Iv ? function() {
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
}, o0 = function(t) {
  var i, n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return n === "" || n === "true";
}, Pv = function(t, i, n) {
  if (Zs(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Ys));
  return i && Fa.call(t, Ys) && a.unshift(t), a = a.filter(n), a;
}, Js = function(t, i, n) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Zs(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), d = c.length ? c : o.children, v = Js(d, !0, n);
        n.flatten ? a.push.apply(a, v) : a.push({
          scopeParent: o,
          candidates: v
        });
      } else {
        var p = Fa.call(o, Ys);
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
}, xa = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || o0(t)) && !$v(t) ? 0 : t.tabIndex;
}, s0 = function(t, i) {
  var n = xa(t);
  return n < 0 && i && !$v(t) ? 0 : n;
}, l0 = function(t, i) {
  return t.tabIndex === i.tabIndex ? t.documentOrder - i.documentOrder : t.tabIndex - i.tabIndex;
}, Fv = function(t) {
  return t.tagName === "INPUT";
}, c0 = function(t) {
  return Fv(t) && t.type === "hidden";
}, u0 = function(t) {
  var i = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return i;
}, d0 = function(t, i) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === i)
      return t[n];
}, f0 = function(t) {
  if (!t.name)
    return !0;
  var i = t.form || Xs(t), n = function(c) {
    return i.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = n(window.CSS.escape(t.name));
  else
    try {
      a = n(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var r = d0(a, t.form);
  return !r || r === t;
}, p0 = function(t) {
  return Fv(t) && t.type === "radio";
}, h0 = function(t) {
  return p0(t) && !f0(t);
}, v0 = function(t) {
  var i, n = t && Xs(t), a = (i = n) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (n && n !== t) {
    var o, c, d;
    for (r = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !r && a; ) {
      var v, p, y;
      n = Xs(a), a = (v = n) === null || v === void 0 ? void 0 : v.host, r = !!((p = a) !== null && p !== void 0 && (y = p.ownerDocument) !== null && y !== void 0 && y.contains(a));
    }
  }
  return r;
}, bp = function(t) {
  var i = t.getBoundingClientRect(), n = i.width, a = i.height;
  return n === 0 && a === 0;
}, g0 = function(t, i) {
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
  var o = getComputedStyle(t), c = o.visibility;
  if (c === "hidden" || c === "collapse")
    return !0;
  var d = Fa.call(t, "details>summary:first-of-type"), v = d ? t.parentElement : t;
  if (Fa.call(v, "details:not([open]) *"))
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
    if (v0(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return bp(t);
  return !1;
}, b0 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var i = t.parentElement; i; ) {
      if (i.tagName === "FIELDSET" && i.disabled) {
        for (var n = 0; n < i.children.length; n++) {
          var a = i.children.item(n);
          if (a.tagName === "LEGEND")
            return Fa.call(i, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      i = i.parentElement;
    }
  return !1;
}, Qs = function(t, i) {
  return !(i.disabled || c0(i) || g0(i, t) || // For a details element with a summary, the summary element gets the focus
  u0(i) || b0(i));
}, wu = function(t, i) {
  return !(h0(i) || xa(i) < 0 || !Qs(t, i));
}, m0 = function(t) {
  var i = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(i) || i >= 0);
}, Dv = function(t) {
  var i = [], n = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, c = o ? a.scopeParent : a, d = s0(c, o), v = o ? Dv(a.candidates) : c;
    d === 0 ? o ? i.push.apply(i, v) : i.push(c) : n.push({
      documentOrder: r,
      tabIndex: d,
      item: a,
      isScope: o,
      content: v
    });
  }), n.sort(l0).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(i);
}, y0 = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = Js([t], i.includeContainer, {
    filter: wu.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: m0
  }) : n = Pv(t, i.includeContainer, wu.bind(null, i)), Dv(n);
}, _0 = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = Js([t], i.includeContainer, {
    filter: Qs.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : n = Pv(t, i.includeContainer, Qs.bind(null, i)), n;
}, Xa = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Fa.call(t, Ys) === !1 ? !1 : wu(i, t);
}, w0 = /* @__PURE__ */ Rv.concat("iframe:not([inert]):not([inert] *)").join(","), qc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Fa.call(t, w0) === !1 ? !1 : Qs(i, t);
};
function Su(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function S0(e) {
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
  var r, o = !0, c = !1;
  return {
    s: function() {
      i = i.call(e);
    },
    n: function() {
      var d = i.next();
      return o = d.done, d;
    },
    e: function(d) {
      c = !0, r = d;
    },
    f: function() {
      try {
        o || i.return == null || i.return();
      } finally {
        if (c) throw r;
      }
    }
  };
}
function C0(e, t, i) {
  return (t = x0(t)) in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function k0(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function T0() {
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
      C0(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : yp(Object(i)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
    });
  }
  return e;
}
function E0(e) {
  return S0(e) || k0(e) || Mv(e) || T0();
}
function A0(e, t) {
  if (typeof e != "object" || !e) return e;
  var i = e[Symbol.toPrimitive];
  if (i !== void 0) {
    var n = i.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function x0(e) {
  var t = A0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Mv(e, t) {
  if (e) {
    if (typeof e == "string") return Su(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Su(e, t) : void 0;
  }
}
var vn = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var n = vn.getActiveTrap(t);
    i !== n && vn.pauseTrap(t);
    var a = t.indexOf(i);
    a === -1 || t.splice(a, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var n = t.indexOf(i);
    n !== -1 && t.splice(n, 1), vn.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = vn.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = vn.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
  }
}, O0 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, N0 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, ao = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, L0 = function(t) {
  return ao(t) && !t.shiftKey;
}, R0 = function(t) {
  return ao(t) && t.shiftKey;
}, wp = function(t) {
  return setTimeout(t, 0);
}, Kr = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, n) : t;
}, _s = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, I0 = [], rd = function(t, i) {
  var n = i?.document || document, a = i?.trapStack || I0, r = _p({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: L0,
    isKeyBackward: R0
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
  }, c, d = function(F, U, Y) {
    return F && F[U] !== void 0 ? F[U] : r[Y || U];
  }, v = function(F, U) {
    var Y = typeof U?.composedPath == "function" ? U.composedPath() : void 0;
    return o.containerGroups.findIndex(function(ce) {
      var ae = ce.container, me = ce.tabbableNodes;
      return ae.contains(F) || Y?.includes(ae) || me.find(function(de) {
        return de === F;
      });
    });
  }, p = function(F) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Y = U.hasFallback, ce = Y === void 0 ? !1 : Y, ae = U.params, me = ae === void 0 ? [] : ae, de = r[F];
    if (typeof de == "function" && (de = de.apply(void 0, E0(me))), de === !0 && (de = void 0), !de) {
      if (de === void 0 || de === !1)
        return de;
      throw new Error("`".concat(F, "` was specified but was not a node, or did not return a node"));
    }
    var Se = de;
    if (typeof de == "string") {
      try {
        Se = n.querySelector(de);
      } catch (Te) {
        throw new Error("`".concat(F, '` appears to be an invalid selector; error="').concat(Te.message, '"'));
      }
      if (!Se && !ce)
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
        var Y = o.tabbableGroups[0], ce = Y && Y.firstTabbableNode;
        F = ce || p("fallbackFocus");
      }
    } else F === null && (F = p("fallbackFocus"));
    if (!F)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return F;
  }, E = function() {
    if (o.containerGroups = o.containers.map(function(F) {
      var U = y0(F, r.tabbableOptions), Y = _0(F, r.tabbableOptions), ce = U.length > 0 ? U[0] : void 0, ae = U.length > 0 ? U[U.length - 1] : void 0, me = Y.find(function(Te) {
        return Xa(Te);
      }), de = Y.slice().reverse().find(function(Te) {
        return Xa(Te);
      }), Se = !!U.find(function(Te) {
        return xa(Te) > 0;
      });
      return {
        container: F,
        tabbableNodes: U,
        focusableNodes: Y,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Se,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ce,
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
        lastDomTabbableNode: de,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ke) {
          var Le = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ct = U.indexOf(Ke);
          return ct < 0 ? Le ? Y.slice(Y.indexOf(Ke) + 1).find(function(ht) {
            return Xa(ht);
          }) : Y.slice(0, Y.indexOf(Ke)).reverse().find(function(ht) {
            return Xa(ht);
          }) : U[ct + (Le ? 1 : -1)];
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
      }), o.mostRecentlyFocusedNode = F, O0(F) && F.select();
    }
  }, A = function(F) {
    var U = p("setReturnFocus", {
      params: [F]
    });
    return U || (U === !1 ? !1 : F);
  }, N = function(F) {
    var U = F.target, Y = F.event, ce = F.isBackward, ae = ce === void 0 ? !1 : ce;
    U = U || _s(Y), E();
    var me = null;
    if (o.tabbableGroups.length > 0) {
      var de = v(U, Y), Se = de >= 0 ? o.containerGroups[de] : void 0;
      if (de < 0)
        ae ? me = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : me = o.tabbableGroups[0].firstTabbableNode;
      else if (ae) {
        var Te = o.tabbableGroups.findIndex(function(ut) {
          var rt = ut.firstTabbableNode;
          return U === rt;
        });
        if (Te < 0 && (Se.container === U || qc(U, r.tabbableOptions) && !Xa(U, r.tabbableOptions) && !Se.nextTabbableNode(U, !1)) && (Te = de), Te >= 0) {
          var Ke = Te === 0 ? o.tabbableGroups.length - 1 : Te - 1, Le = o.tabbableGroups[Ke];
          me = xa(U) >= 0 ? Le.lastTabbableNode : Le.lastDomTabbableNode;
        } else ao(Y) || (me = Se.nextTabbableNode(U, !1));
      } else {
        var ct = o.tabbableGroups.findIndex(function(ut) {
          var rt = ut.lastTabbableNode;
          return U === rt;
        });
        if (ct < 0 && (Se.container === U || qc(U, r.tabbableOptions) && !Xa(U, r.tabbableOptions) && !Se.nextTabbableNode(U)) && (ct = de), ct >= 0) {
          var ht = ct === o.tabbableGroups.length - 1 ? 0 : ct + 1, tt = o.tabbableGroups[ht];
          me = xa(U) >= 0 ? tt.firstTabbableNode : tt.firstDomTabbableNode;
        } else ao(Y) || (me = Se.nextTabbableNode(U));
      }
    } else
      me = p("fallbackFocus");
    return me;
  }, D = function(F) {
    var U = _s(F);
    if (!(v(U, F) >= 0)) {
      if (Kr(r.clickOutsideDeactivates, F)) {
        c.deactivate({
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
      var ce, ae = !0;
      if (o.mostRecentlyFocusedNode)
        if (xa(o.mostRecentlyFocusedNode) > 0) {
          var me = v(o.mostRecentlyFocusedNode), de = o.containerGroups[me].tabbableNodes;
          if (de.length > 0) {
            var Se = de.findIndex(function(Te) {
              return Te === o.mostRecentlyFocusedNode;
            });
            Se >= 0 && (r.isKeyForward(o.recentNavEvent) ? Se + 1 < de.length && (ce = de[Se + 1], ae = !1) : Se - 1 >= 0 && (ce = de[Se - 1], ae = !1));
          }
        } else
          o.containerGroups.some(function(Te) {
            return Te.tabbableNodes.some(function(Ke) {
              return xa(Ke) > 0;
            });
          }) || (ae = !1);
      else
        ae = !1;
      ae && (ce = N({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), L(ce || o.mostRecentlyFocusedNode || k());
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
  }, oe = function(F) {
    N0(F) && Kr(r.escapeDeactivates, F) !== !1 && (F.preventDefault(), c.deactivate());
  }, ue = function(F) {
    var U = _s(F);
    v(U, F) >= 0 || Kr(r.clickOutsideDeactivates, F) || Kr(r.allowOutsideClick, F) || (F.preventDefault(), F.stopImmediatePropagation());
  }, Z = function() {
    if (o.active) {
      vn.activateTrap(a, c);
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
      }), n.addEventListener("click", ue, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", C, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", oe), F;
    }
  }, fe = function(F) {
    o.active && !o.paused && c._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var U = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), ce = mp(F), ae;
    try {
      for (ce.s(); !(ae = ce.n()).done; ) {
        var me = ae.value;
        U.add(me);
        for (var de = typeof ShadowRoot < "u" && me.getRootNode() instanceof ShadowRoot, Se = me; Se; ) {
          U.add(Se);
          var Te = Se.parentElement, Ke = [];
          Te ? Ke = Te.children : !Te && de && (Ke = Se.getRootNode().children, Te = Se.getRootNode().host, de = typeof ShadowRoot < "u" && Te.getRootNode() instanceof ShadowRoot);
          var Le = mp(Ke), ct;
          try {
            for (Le.s(); !(ct = Le.n()).done; ) {
              var ht = ct.value;
              Y.add(ht);
            }
          } catch (tt) {
            Le.e(tt);
          } finally {
            Le.f();
          }
          Se = Te;
        }
      }
    } catch (tt) {
      ce.e(tt);
    } finally {
      ce.f();
    }
    U.forEach(function(tt) {
      Y.delete(tt);
    }), o.adjacentElements = Y;
  }, X = function() {
    if (o.active)
      return n.removeEventListener("focusin", M, !0), n.removeEventListener("mousedown", D, !0), n.removeEventListener("touchstart", D, !0), n.removeEventListener("click", ue, !0), n.removeEventListener("keydown", C, !0), n.removeEventListener("keydown", oe), c;
  }, le = function(F) {
    var U = o.mostRecentlyFocusedNode;
    if (U) {
      var Y = F.some(function(ae) {
        var me = Array.from(ae.removedNodes);
        return me.some(function(de) {
          return de === U || typeof de.contains == "function" && de.contains(U);
        });
      });
      if (Y && o.containers.some(function(ae) {
        return ae?.isConnected;
      })) {
        E();
        var ce = k();
        L(ce);
      }
    }
  }, _e = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(le) : void 0, ee = function() {
    _e && (_e.disconnect(), o.active && !o.paused && o.containers.map(function(F) {
      _e.observe(F, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return c = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(F) {
      if (o.active)
        return this;
      var U = d(F, "onActivate"), Y = d(F, "onPostActivate"), ce = d(F, "checkCanFocusTrap"), ae = vn.getActiveTrap(a), me = !1;
      if (ae && !ae.paused) {
        var de;
        (de = ae._setSubtreeIsolation) === null || de === void 0 || de.call(ae, !1), me = !0;
      }
      try {
        ce || E(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = y(n), U?.({
          trap: c
        });
        var Se = function() {
          ce && E();
          var Le = function() {
            c._setSubtreeIsolation(!0), ee(), Y?.({
              trap: c
            });
          }, ct = Z();
          ct ? ct.then(Le) : Le();
        };
        if (ce)
          return ce(o.containers.concat()).then(Se, Se), this;
        Se();
      } catch (Ke) {
        if (ae === vn.getActiveTrap(a) && me) {
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
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || c._setSubtreeIsolation(!1), o.alreadySilent.clear(), X(), o.active = !1, o.paused = !1, ee(), vn.deactivateTrap(a, c);
      var Y = d(U, "onDeactivate"), ce = d(U, "onPostDeactivate"), ae = d(U, "checkCanReturnFocus"), me = d(U, "delayReturnFocus"), de = d(U, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: c
      });
      var Se = function() {
        de && L(A(o.nodeFocusedBeforeActivation)), ce?.({
          trap: c
        });
      }, Te = function() {
        me && de ? wp(Se) : Se();
      };
      return de && ae ? (ae(A(o.nodeFocusedBeforeActivation)).then(Te, Te), this) : (Te(), this);
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
      }), r.isolateSubtrees && fe(o.containers), o.active && (E(), o.paused || c._setSubtreeIsolation(!0)), ee(), this;
    }
  }, Object.defineProperties(c, {
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
          var Y = d(U, "onPause"), ce = d(U, "onPostPause");
          Y?.({
            trap: c
          }), X(), c._setSubtreeIsolation(!1), ee(), ce?.({
            trap: c
          });
        } else {
          var ae = d(U, "onUnpause"), me = d(U, "onPostUnpause");
          ae?.({
            trap: c
          });
          var de = function() {
            E();
            var Te = function() {
              c._setSubtreeIsolation(!0), ee(), me?.({
                trap: c
              });
            }, Ke = Z();
            Ke ? Ke.then(Te) : Te();
          };
          de();
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
  }), c.updateContainerElements(t), c;
};
const zv = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), P0 = /* @__PURE__ */ Ft({
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
function $0(e, t, i, n, a, r) {
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
const Uv = /* @__PURE__ */ Qe(P0, [["render", $0], ["__scopeId", "data-v-3e73e246"]]);
function Ao() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function F0() {
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
ea(_1);
const D0 = { class: "app-navigation-toggle-wrapper" }, M0 = /* @__PURE__ */ Ft({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Bh(e, "open"), i = B(() => t.value ? Ct("Close navigation") : Ct("Open navigation"));
    return (n, a) => (m(), _("div", D0, [
      xe(g(Zi), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Fe(() => [
          xe(Wl, {
            path: g(f1),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), z0 = /* @__PURE__ */ Qe(M0, [["__scopeId", "data-v-e8177cc7"]]), U0 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], j0 = { class: "app-navigation__search" }, B0 = /* @__PURE__ */ Ft({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const n = Vt(
      jv,
      () => by(),
      !1
    ), a = Cm("appNavigationContainer"), r = zo(), o = /* @__PURE__ */ Ee(!r.value), c = B(() => r.value && o.value);
    hm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), We(r, () => {
      o.value = !r.value;
    }), We(c, () => {
      p();
    }), Qn(() => {
      n(!0), Sv("toggle-navigation", v), yn("navigation-toggled", {
        open: o.value
      }), i = rd(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), d(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Ao(),
        escapeDeactivates: !1
      }), p();
    }), Fo(() => {
      n(!1), e1("toggle-navigation", v), i.deactivate();
    });
    function d(k) {
      if (o.value === k) {
        yn("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = k === void 0 ? !o.value : k;
      const E = getComputedStyle(document.body), L = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        yn("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * L);
    }
    function v({ open: k }) {
      return d(k);
    }
    function p() {
      c.value ? i.activate() : i.deactivate();
    }
    function y() {
      r.value && d(!1);
    }
    return (k, E) => (m(), _("div", {
      ref: "appNavigationContainer",
      class: be(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": g(ta)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: at(y, ["esc"])
      }, [
        l("div", j0, [
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
          default: Fe(() => [
            Me(k.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : $("", !0),
        Me(k.$slots, "footer", {}, void 0, !0)
      ], 40, U0),
      xe(z0, {
        open: o.value,
        "onUpdate:open": d
      }, null, 8, ["open"])
    ], 2));
  }
}), H0 = /* @__PURE__ */ Qe(B0, [["__scopeId", "data-v-37908cd4"]]), V0 = {
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
}, K0 = ["aria-hidden", "aria-label"], G0 = ["fill", "width", "height"], q0 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, W0 = { key: 0 };
function Y0(e, t, i, n, a, r) {
  return m(), _("span", Wt(e.$attrs, {
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
      l("path", q0, [
        i.title ? (m(), _("title", W0, h(i.title), 1)) : $("", !0)
      ])
    ], 8, G0))
  ], 16, K0);
}
const X0 = /* @__PURE__ */ Qe(V0, [["render", Y0]]), Z0 = {
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
}, J0 = ["aria-hidden", "aria-label"], Q0 = ["fill", "width", "height"], ew = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, tw = { key: 0 };
function iw(e, t, i, n, a, r) {
  return m(), _("span", Wt(e.$attrs, {
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
      l("path", ew, [
        i.title ? (m(), _("title", tw, h(i.title), 1)) : $("", !0)
      ])
    ], 8, Q0))
  ], 16, J0);
}
const nw = /* @__PURE__ */ Qe(Z0, [["render", iw]]), aw = {
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
}, rw = ["aria-hidden", "aria-label"], ow = ["fill", "width", "height"], sw = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, lw = { key: 0 };
function cw(e, t, i, n, a, r) {
  return m(), _("span", Wt(e.$attrs, {
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
      l("path", sw, [
        i.title ? (m(), _("title", lw, h(i.title), 1)) : $("", !0)
      ])
    ], 8, ow))
  ], 16, rw);
}
const Hv = /* @__PURE__ */ Qe(aw, [["render", cw]]), uw = {
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
}, dw = ["aria-hidden", "aria-label"], fw = ["fill", "width", "height"], pw = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, hw = { key: 0 };
function vw(e, t, i, n, a, r) {
  return m(), _("span", Wt(e.$attrs, {
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
      l("path", pw, [
        i.title ? (m(), _("title", hw, h(i.title), 1)) : $("", !0)
      ])
    ], 8, fw))
  ], 16, dw);
}
const Vv = /* @__PURE__ */ Qe(uw, [["render", vw]]);
ea(m1);
const gw = {
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
    return { isLegacy34: ta };
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
}, bw = ["placeholder"];
function mw(e, t, i, n, a, r) {
  const o = Be("IconArrowRight"), c = Be("NcButton"), d = Be("IconClose");
  return m(), _("div", {
    class: be(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": n.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = ye((...v) => r.confirm && r.confirm(...v), ["prevent"])),
      onKeydown: t[2] || (t[2] = at(ye((...v) => r.cancel && r.cancel(...v), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = ye(() => {
      }, ["stop", "prevent"]))
    }, [
      Ie(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (v) => r.valueModel = v),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: i.placeholder
      }, null, 8, bw), [
        [ft, r.valueModel]
      ]),
      xe(c, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: ye(r.confirm, ["stop", "prevent"])
      }, {
        icon: Fe(() => [
          xe(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      xe(c, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: i.primary ? "primary" : "tertiary",
        onClick: ye(r.cancel, ["stop", "prevent"])
      }, {
        icon: Fe(() => [
          xe(d, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const yw = /* @__PURE__ */ Qe(gw, [["render", mw], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Yl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const od = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Kv = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), _w = {
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
  mixins: [_w],
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
}, ww = {
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
      mdiCheck: u1,
      mdiChevronRight: d1
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
}, Sw = ["role"], Cw = ["aria-label", "disabled", "title", "type"], kw = { class: "action-button__longtext-wrapper" }, Tw = {
  key: 0,
  class: "action-button__name"
}, Ew = ["textContent"], Aw = {
  key: 2,
  class: "action-button__text"
}, xw = ["textContent"], Ow = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function Nw(e, t, i, n, a, r) {
  const o = Be("NcIconSvgWrapper");
  return m(), _("li", {
    class: be(["action", { "action--disabled": i.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", Wt({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: i.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...c) => r.handleClick && r.handleClick(...c))
    }), [
      Me(e.$slots, "icon", {}, () => [
        l("span", {
          class: be([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: hi({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", kw, [
        e.name ? (m(), _("strong", Tw, h(e.name), 1)) : $("", !0),
        e.isLongText ? (m(), _("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: h(e.text)
        }, null, 8, Ew)) : (m(), _("span", Aw, h(e.text), 1)),
        i.description ? (m(), _("span", {
          key: 3,
          class: "action-button__description",
          textContent: h(i.description)
        }, null, 8, xw)) : $("", !0)
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
      }, null, 8, ["path"])) : r.isChecked === !1 ? (m(), _("span", Ow)) : $("", !0),
      $("", !0)
    ], 16, Cw)
  ], 10, Sw);
}
const Lw = /* @__PURE__ */ Qe(ww, [["render", Nw], ["__scopeId", "data-v-6c2daf4e"]]);
function Rw(e, t = {}) {
  const i = F0();
  We(e, () => {
    bn(t.disabled) || (bn(e) ? i.pause() : i.unpause());
  }), Fo(() => {
    i.unpause();
  });
}
const Iw = ["top", "right", "bottom", "left"], Sp = ["start", "end"], Cp = /* @__PURE__ */ Iw.reduce((e, t) => e.concat(t, t + "-" + Sp[0], t + "-" + Sp[1]), []), xo = Math.min, Cu = Math.max, Pw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qv(e, t, i) {
  return Cu(e, xo(t, i));
}
function Ma(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cn(e) {
  return e.split("-")[0];
}
function Pi(e) {
  return e.split("-")[1];
}
function Wv(e) {
  return e === "x" ? "y" : "x";
}
function sd(e) {
  return e === "y" ? "height" : "width";
}
function gn(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ld(e) {
  return Wv(gn(e));
}
function Yv(e, t, i) {
  i === void 0 && (i = !1);
  const n = Pi(e), a = ld(e), r = sd(a);
  let o = a === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = tl(o)), [o, tl(o)];
}
function $w(e) {
  const t = tl(e);
  return [el(e), t, el(t)];
}
function el(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const kp = ["left", "right"], Tp = ["right", "left"], Fw = ["top", "bottom"], Dw = ["bottom", "top"];
function Mw(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? Tp : kp : t ? kp : Tp;
    case "left":
    case "right":
      return t ? Fw : Dw;
    default:
      return [];
  }
}
function zw(e, t, i, n) {
  const a = Pi(e);
  let r = Mw(Cn(e), i === "start", n);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(el)))), r;
}
function tl(e) {
  const t = Cn(e);
  return Pw[t] + e.slice(t.length);
}
function Uw(e) {
  var t, i, n, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (i = e.right) != null ? i : 0,
    bottom: (n = e.bottom) != null ? n : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Xv(e) {
  return typeof e != "number" ? Uw(e) : {
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
  const r = gn(t), o = ld(t), c = sd(o), d = Cn(t), v = r === "y", p = n.x + n.width / 2 - a.width / 2, y = n.y + n.height / 2 - a.height / 2, k = n[c] / 2 - a[c] / 2;
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
async function jw(e, t) {
  var i;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: r,
    rects: o,
    elements: c,
    strategy: d
  } = e, {
    boundary: v = "clippingAncestors",
    rootBoundary: p = "viewport",
    elementContext: y = "floating",
    altBoundary: k = !1,
    padding: E = 0
  } = Ma(t, e), L = Xv(E), N = c[k ? y === "floating" ? "reference" : "floating" : y], D = ro(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement(N))) == null || i ? N : N.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: v,
    rootBoundary: p,
    strategy: d
  })), M = y === "floating" ? {
    x: n,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, z = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), C = await (r.isElement == null ? void 0 : r.isElement(z)) && await (r.getScale == null ? void 0 : r.getScale(z)) || {
    x: 1,
    y: 1
  }, oe = ro(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: M,
    offsetParent: z,
    strategy: d
  }) : M);
  return {
    top: (D.top - oe.top + L.top) / C.y,
    bottom: (oe.bottom - D.bottom + L.bottom) / C.y,
    left: (D.left - oe.left + L.left) / C.x,
    right: (oe.right - D.right + L.right) / C.x
  };
}
const Bw = 50, Hw = async (e, t, i) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = i, c = o.detectOverflow ? o : {
    ...o,
    detectOverflow: jw
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
      data: oe,
      reset: ue
    } = await M({
      x: p,
      y,
      initialPlacement: n,
      placement: k,
      strategy: a,
      middlewareData: L,
      rects: v,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    p = z ?? p, y = C ?? y, L[D] = {
      ...L[D],
      ...oe
    }, ue && E < Bw && (E++, typeof ue == "object" && (ue.placement && (k = ue.placement), ue.rects && (v = ue.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ue.rects), {
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
}, Vw = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: i,
      y: n,
      placement: a,
      rects: r,
      platform: o,
      elements: c,
      middlewareData: d
    } = t, {
      element: v,
      padding: p = 0
    } = Ma(e, t) || {};
    if (v == null)
      return {};
    const y = Xv(p), k = {
      x: i,
      y: n
    }, E = ld(a), L = sd(E), A = await o.getDimensions(v), N = E === "y", D = N ? "top" : "left", M = N ? "bottom" : "right", z = N ? "clientHeight" : "clientWidth", C = r.reference[L] + r.reference[E] - k[E] - r.floating[L], oe = k[E] - r.reference[E], ue = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(v));
    let Z = ue ? ue[z] : 0;
    (!Z || !await (o.isElement == null ? void 0 : o.isElement(ue))) && (Z = c.floating[z] || r.floating[L]);
    const fe = C / 2 - oe / 2, X = Z / 2 - A[L] / 2 - 1, le = xo(y[D], X), _e = xo(y[M], X), ee = Z - A[L] - _e, J = Z / 2 - A[L] / 2 + fe, F = qv(le, J, ee), U = !d.arrow && Pi(a) != null && J !== F && r.reference[L] / 2 - (J < le ? le : _e) - A[L] / 2 < 0, Y = U ? J < le ? J - le : J - ee : 0;
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
function Kw(e, t, i) {
  return (e ? [...i.filter((a) => Pi(a) === e), ...i.filter((a) => Pi(a) !== e)] : i.filter((a) => Cn(a) === a)).filter((a) => e ? Pi(a) === e || (t ? el(a) !== a : !1) : !0);
}
const Gw = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var i, n, a;
      const {
        rects: r,
        middlewareData: o,
        placement: c,
        platform: d,
        elements: v
      } = t, {
        crossAxis: p = !1,
        alignment: y,
        allowedPlacements: k = Cp,
        autoAlignment: E = !0,
        ...L
      } = Ma(e, t), A = y !== void 0 || k === Cp ? Kw(y || null, E, k) : k, N = ((i = o.autoPlacement) == null ? void 0 : i.index) || 0, D = A[N];
      if (D == null)
        return {};
      if (c !== D)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await d.detectOverflow(t, L), z = Yv(D, r, await (d.isRTL == null ? void 0 : d.isRTL(v.floating))), C = [M[Cn(D)], M[z[0]], M[z[1]]], oe = [...((n = o.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: D,
        overflows: C
      }], ue = A[N + 1];
      if (ue)
        return {
          data: {
            index: N + 1,
            overflows: oe
          },
          reset: {
            placement: ue
          }
        };
      const Z = oe.map((le) => {
        const _e = Pi(le.placement);
        return [le.placement, _e && p ? (
          // Check along the mainAxis and main crossAxis side.
          le.overflows.slice(0, 2).reduce((ee, J) => ee + J, 0)
        ) : (
          // Check only the mainAxis.
          le.overflows[0]
        ), le.overflows];
      }).sort((le, _e) => le[1] - _e[1]), X = ((a = Z.filter((le) => le[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Pi(le[0]) ? 2 : 3
      ).every((_e) => _e <= 0))[0]) == null ? void 0 : a[0]) || Z[0][0];
      return X !== c ? {
        data: {
          index: N + 1,
          overflows: oe
        },
        reset: {
          placement: X
        }
      } : {};
    }
  };
}, qw = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var i, n;
      const {
        placement: a,
        middlewareData: r,
        rects: o,
        initialPlacement: c,
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
      } = Ma(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const D = Cn(a), M = gn(c), z = Cn(c) === c, C = await (d.isRTL == null ? void 0 : d.isRTL(v.floating)), oe = k || (z || !A ? [tl(c)] : $w(c)), ue = L !== "none";
      !k && ue && oe.push(...zw(c, A, L, C));
      const Z = [c, ...oe], fe = await d.detectOverflow(t, N), X = [];
      let le = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (p && X.push(fe[D]), y) {
        const F = Yv(a, o, C);
        X.push(fe[F[0]], fe[F[1]]);
      }
      if (le = [...le, {
        placement: a,
        overflows: X
      }], !X.every((F) => F <= 0)) {
        var _e, ee;
        const F = (((_e = r.flip) == null ? void 0 : _e.index) || 0) + 1, U = Z[F];
        if (U && (!(y === "alignment" ? M !== gn(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        le.every((ae) => gn(ae.placement) === M ? ae.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: le
            },
            reset: {
              placement: U
            }
          };
        let Y = (ee = le.filter((ce) => ce.overflows[0] <= 0).sort((ce, ae) => ce.overflows[1] - ae.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!Y)
          switch (E) {
            case "bestFit": {
              var J;
              const ce = (J = le.filter((ae) => {
                if (ue) {
                  const me = gn(ae.placement);
                  return me === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  me === "y";
                }
                return !0;
              }).map((ae) => [ae.placement, ae.overflows.filter((me) => me > 0).reduce((me, de) => me + de, 0)]).sort((ae, me) => ae[1] - me[1])[0]) == null ? void 0 : J[0];
              ce && (Y = ce);
              break;
            }
            case "initialPlacement":
              Y = c;
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
}, Ww = /* @__PURE__ */ new Set(["left", "top"]);
async function Yw(e, t) {
  const {
    placement: i,
    platform: n,
    elements: a
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), o = Cn(i), c = Pi(i), d = gn(i) === "y", v = Ww.has(o) ? -1 : 1, p = r && d ? -1 : 1, y = Ma(t, e);
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
  return c && typeof L == "number" && (E = c === "end" ? L * -1 : L), d ? {
    x: E * p,
    y: k * v
  } : {
    x: k * v,
    y: E * p
  };
}
const Xw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var i, n;
      const {
        x: a,
        y: r,
        placement: o,
        middlewareData: c
      } = t, d = await Yw(t, e);
      return o === ((i = c.offset) == null ? void 0 : i.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
        x: a + d.x,
        y: r + d.y,
        data: {
          ...d,
          placement: o
        }
      };
    }
  };
}, Zw = function(e) {
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
        crossAxis: c = !1,
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
      } = Ma(e, t), p = {
        x: i,
        y: n
      }, y = await r.detectOverflow(t, v), k = gn(a), E = Wv(k);
      let L = p[E], A = p[k];
      const N = (M, z) => qv(z + y[M === "y" ? "top" : "left"], z, z - y[M === "y" ? "bottom" : "right"]);
      o && (L = N(E, L)), c && (A = N(k, A));
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
            [k]: c
          }
        }
      };
    }
  };
}, Jw = function(e) {
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
        ...c
      } = Ma(e, t), d = await a.detectOverflow(t, c), v = Cn(i), p = Pi(i), y = gn(i) === "y", {
        width: k,
        height: E
      } = n.floating;
      let L, A;
      v === "top" || v === "bottom" ? (L = v, A = p === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = v, L = p === "end" ? "top" : "bottom");
      const N = E - d.top - d.bottom, D = k - d.left - d.right, M = xo(E - d[L], N), z = xo(k - d[A], D), C = t.middlewareData.shift, oe = !C;
      let ue = M, Z = z;
      C != null && C.enabled.x && (Z = D), C != null && C.enabled.y && (ue = N), oe && !p && (y ? Z = k - 2 * Cu(d.left, d.right) : ue = E - 2 * Cu(d.top, d.bottom)), await o({
        ...t,
        availableWidth: Z,
        availableHeight: ue
      });
      const fe = await a.getDimensions(r.floating);
      return k !== fe.width || E !== fe.height ? {
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
function Zv(e) {
  const t = Ji(e);
  let i = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = il(i) !== a || il(n) !== r;
  return o && (i = a, n = r), { width: i, height: n, fallback: o };
}
function Jn(e) {
  return Qv(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ws;
function Jv() {
  if (ws) return ws;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ws = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), ws) : navigator.userAgent;
}
function Qi(e) {
  return e instanceof Si(e).HTMLElement;
}
function qn(e) {
  return e instanceof Si(e).Element;
}
function Qv(e) {
  return e instanceof Si(e).Node;
}
function xp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Si(e).ShadowRoot || e instanceof ShadowRoot;
}
function Xl(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: a } = Ji(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a);
}
function Qw(e) {
  return ["table", "td", "th"].includes(Jn(e));
}
function ku(e) {
  const t = /firefox/i.test(Jv()), i = Ji(e), n = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!n && n !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((a) => i.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = i.contain;
    return r != null && r.includes(a);
  }));
}
function eg() {
  return !/^((?!chrome|android).)*safari/i.test(Jv());
}
function cd(e) {
  return ["html", "body", "#document"].includes(Jn(e));
}
function tg(e) {
  return qn(e) ? e : e.contextElement;
}
const ig = { x: 1, y: 1 };
function sr(e) {
  const t = tg(e);
  if (!Qi(t)) return ig;
  const i = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = Zv(t);
  let o = (r ? il(i.width) : i.width) / n, c = (r ? il(i.height) : i.height) / a;
  return o && Number.isFinite(o) || (o = 1), c && Number.isFinite(c) || (c = 1), { x: o, y: c };
}
function Oo(e, t, i, n) {
  var a, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const o = e.getBoundingClientRect(), c = tg(e);
  let d = ig;
  t && (n ? qn(n) && (d = sr(n)) : d = sr(e));
  const v = c ? Si(c) : window, p = !eg() && i;
  let y = (o.left + (p && ((a = v.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / d.x, k = (o.top + (p && ((r = v.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / d.y, E = o.width / d.x, L = o.height / d.y;
  if (c) {
    const A = Si(c), N = n && qn(n) ? Si(n) : n;
    let D = A.frameElement;
    for (; D && n && N !== A; ) {
      const M = sr(D), z = D.getBoundingClientRect(), C = getComputedStyle(D);
      z.x += (D.clientLeft + parseFloat(C.paddingLeft)) * M.x, z.y += (D.clientTop + parseFloat(C.paddingTop)) * M.y, y *= M.x, k *= M.y, E *= M.x, L *= M.y, y += z.x, k += z.y, D = Si(D).frameElement;
    }
  }
  return { width: E, height: L, top: k, right: y + E, bottom: k + L, left: y, x: y, y: k };
}
function Wn(e) {
  return ((Qv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Zl(e) {
  return qn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ng(e) {
  return Oo(Wn(e)).left + Zl(e).scrollLeft;
}
function No(e) {
  if (Jn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || xp(e) && e.host || Wn(e);
  return xp(t) ? t.host : t;
}
function ag(e) {
  const t = No(e);
  return cd(t) ? t.ownerDocument.body : Qi(t) && Xl(t) ? t : ag(t);
}
function nl(e, t) {
  var i;
  t === void 0 && (t = []);
  const n = ag(e), a = n === ((i = e.ownerDocument) == null ? void 0 : i.body), r = Si(n);
  return a ? t.concat(r, r.visualViewport || [], Xl(n) ? n : []) : t.concat(n, nl(n));
}
function Op(e, t, i) {
  return t === "viewport" ? ro((function(n, a) {
    const r = Si(n), o = Wn(n), c = r.visualViewport;
    let d = o.clientWidth, v = o.clientHeight, p = 0, y = 0;
    if (c) {
      d = c.width, v = c.height;
      const k = eg();
      (k || !k && a === "fixed") && (p = c.offsetLeft, y = c.offsetTop);
    }
    return { width: d, height: v, x: p, y };
  })(e, i)) : qn(t) ? ro((function(n, a) {
    const r = Oo(n, !0, a === "fixed"), o = r.top + n.clientTop, c = r.left + n.clientLeft, d = Qi(n) ? sr(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * d.x, height: n.clientHeight * d.y, x: c * d.x, y: o * d.y };
  })(t, i)) : ro((function(n) {
    const a = Wn(n), r = Zl(n), o = n.ownerDocument.body, c = oo(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), d = oo(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let v = -r.scrollLeft + ng(n);
    const p = -r.scrollTop;
    return Ji(o).direction === "rtl" && (v += oo(a.clientWidth, o.clientWidth) - c), { width: c, height: d, x: v, y: p };
  })(Wn(e)));
}
function Np(e) {
  return Qi(e) && Ji(e).position !== "fixed" ? e.offsetParent : null;
}
function Lp(e) {
  const t = Si(e);
  let i = Np(e);
  for (; i && Qw(i) && Ji(i).position === "static"; ) i = Np(i);
  return i && (Jn(i) === "html" || Jn(i) === "body" && Ji(i).position === "static" && !ku(i)) ? t : i || (function(n) {
    let a = No(n);
    for (; Qi(a) && !cd(a); ) {
      if (ku(a)) return a;
      a = No(a);
    }
    return null;
  })(e) || t;
}
function eS(e, t, i) {
  const n = Qi(t), a = Wn(t), r = Oo(e, !0, i === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (n || !n && i !== "fixed") if ((Jn(t) !== "body" || Xl(a)) && (o = Zl(t)), Qi(t)) {
    const d = Oo(t, !0);
    c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
  } else a && (c.x = ng(a));
  return { x: r.left + o.scrollLeft - c.x, y: r.top + o.scrollTop - c.y, width: r.width, height: r.height };
}
const tS = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
  const r = i === "clippingAncestors" ? (function(v, p) {
    const y = p.get(v);
    if (y) return y;
    let k = nl(v).filter(((N) => qn(N) && Jn(N) !== "body")), E = null;
    const L = Ji(v).position === "fixed";
    let A = L ? No(v) : v;
    for (; qn(A) && !cd(A); ) {
      const N = Ji(A), D = ku(A);
      (L ? D || E : D || N.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = N : k = k.filter(((M) => M !== A)), A = No(A);
    }
    return p.set(v, k), k;
  })(t, this._c) : [].concat(i), o = [...r, n], c = o[0], d = o.reduce(((v, p) => {
    const y = Op(t, p, a);
    return v.top = oo(y.top, v.top), v.right = Ap(y.right, v.right), v.bottom = Ap(y.bottom, v.bottom), v.left = oo(y.left, v.left), v;
  }), Op(t, c, a));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: n } = e;
  const a = Qi(i), r = Wn(i);
  if (i === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((Jn(i) !== "body" || Xl(r)) && (o = Zl(i)), Qi(i))) {
    const v = Oo(i);
    c = sr(i), d.x = v.x + i.clientLeft, d.y = v.y + i.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - o.scrollLeft * c.x + d.x, y: t.y * c.y - o.scrollTop * c.y + d.y };
}, isElement: qn, getDimensions: function(e) {
  return Qi(e) ? Zv(e) : e.getBoundingClientRect();
}, getOffsetParent: Lp, getDocumentElement: Wn, getScale: sr, async getElementRects(e) {
  let { reference: t, floating: i, strategy: n } = e;
  const a = this.getOffsetParent || Lp, r = this.getDimensions;
  return { reference: eS(t, await a(i), n), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Ji(e).direction === "rtl" }, iS = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: tS, ...i }, r = { ...a.platform, _c: n };
  return Hw(e, t, { ...a, platform: r });
}, Yn = {
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
  let i = Yn.themes[e] || {}, n;
  do
    n = i[t], typeof n > "u" ? i.$extend ? i = Yn.themes[i.$extend] || {} : (i = null, n = Yn[t]) : i = null;
  while (i);
  return n;
}
function nS(e) {
  const t = [e];
  let i = Yn.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = Yn.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((n) => `v-popper--theme-${n}`);
}
function Rp(e) {
  const t = [e];
  let i = Yn.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = Yn.themes[i.$extend] || {}) : i = null;
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
let rg = !1;
typeof window < "u" && typeof navigator < "u" && (rg = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const aS = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
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
let Sa = null;
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
const Yc = "__floating-vue__popper", og = () => /* @__PURE__ */ Ft({
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
      validator: (e) => aS.includes(e)
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
      (this.distance || this.skidding) && e.middleware.push(Xw({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(Gw({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Zw({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(qw({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(Vw({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: n, rects: a, middlewareData: r }) => {
          let o;
          const { centerOffset: c } = r.arrow;
          return n.startsWith("top") || n.startsWith("bottom") ? o = Math.abs(c) > a.reference.width / 2 : o = Math.abs(c) > a.reference.height / 2, {
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
            var c;
            if ((c = o.autoSize) != null && c.skip)
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Jw({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: n, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = n != null ? `${n}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const i = await iS(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), Sa && this.instantMove && Sa.instantMove && Sa !== this.parentPopper) {
        Sa.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (Sa = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
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
      Sa === this && (Sa = null), this.isShown = !1, this.$_applyAttrsToTarget({
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
        const c = t[o];
        c && this.$_registerEventListeners(e, c, a);
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
        const t = this.$_popperNode.getBoundingClientRect(), i = so - Bn, n = lo - Hn, a = t.left + t.width / 2 - Bn + (t.top + t.height / 2) - Hn + t.width + t.height, r = Bn + i * a, o = Hn + n * a;
        return Ss(Bn, Hn, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        Ss(Bn, Hn, r, o, t.left, t.top, t.right, t.top) || // Top edge
        Ss(Bn, Hn, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        Ss(Bn, Hn, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (rg) {
    const e = Lo ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Mp(t), e), document.addEventListener("touchend", (t) => zp(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Mp(e), !0), window.addEventListener("click", (e) => zp(e, !1), !0);
  window.addEventListener("resize", sS);
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
  rS(e, t);
}
function rS(e, t) {
  const i = {};
  for (let n = Ri.length - 1; n >= 0; n--) {
    const a = Ri[n];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !i[a.randomId] && Up(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = a.parentPopper;
            for (; c; )
              i[c.randomId] = !0, c = c.parentPopper;
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
  return i.closeAllPopover || i.closePopover && t || oS(e, i) && !t;
}
function oS(e, t) {
  if (typeof e.autoHide == "function") {
    const i = e.autoHide(t);
    return e.lastAutoHide = i, i;
  }
  return e.autoHide;
}
function sS() {
  for (let e = 0; e < Ri.length; e++)
    Ri[e].$_computePosition();
}
let Bn = 0, Hn = 0, so = 0, lo = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Bn = so, Hn = lo, so = e.clientX, lo = e.clientY;
}, Lo ? {
  passive: !0
} : void 0);
function Ss(e, t, i, n, a, r, o, c) {
  const d = ((o - a) * (t - r) - (c - r) * (e - a)) / ((c - r) * (i - e) - (o - a) * (n - t)), v = ((i - e) * (t - r) - (n - t) * (e - a)) / ((c - r) * (i - e) - (o - a) * (n - t));
  return d >= 0 && d <= 1 && v >= 0 && v <= 1;
}
const lS = {
  extends: og()
}, ud = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
};
function cS(e, t, i, n, a, r) {
  return m(), _("div", {
    ref: "reference",
    class: be(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Me(e.$slots, "default", Ls(Co(e.slotData)))
  ], 2);
}
const uS = /* @__PURE__ */ ud(lS, [["render", cS]]);
function dS() {
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
  Au.init || (Au.init = !0, Os = dS() !== -1);
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
    Au(), Qt(() => {
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
const fS = /* @__PURE__ */ dm();
cm("data-v-b329ee4c");
const pS = {
  class: "resize-observer",
  tabindex: "-1"
};
um();
const hS = /* @__PURE__ */ fS((e, t, i, n, a, r) => (m(), je("div", pS)));
Jl.render = hS;
Jl.__scopeId = "data-v-b329ee4c";
Jl.__file = "src/components/ResizeObserver.vue";
const sg = (e = "theme") => ({
  computed: {
    themeClass() {
      return nS(this[e]);
    }
  }
}), vS = /* @__PURE__ */ Ft({
  name: "VPopperContent",
  components: {
    ResizeObserver: Jl
  },
  mixins: [
    sg()
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
}), gS = ["id", "aria-hidden", "tabindex", "data-popper-placement"], bS = {
  ref: "inner",
  class: "v-popper__inner"
}, mS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), yS = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), _S = [
  mS,
  yS
];
function wS(e, t, i, n, a, r) {
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
    onKeyup: t[2] || (t[2] = at((c) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    l("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (c) => e.autoHide && e.$emit("hide"))
    }),
    l("div", {
      class: "v-popper__wrapper",
      style: hi(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", bS, [
        e.mounted ? (m(), _(ie, { key: 0 }, [
          l("div", null, [
            Me(e.$slots, "default")
          ]),
          e.handleResize ? (m(), je(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
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
      }, _S, 4)
    ], 4)
  ], 46, gS);
}
const lg = /* @__PURE__ */ ud(vS, [["render", wS]]), cg = {
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
const SS = /* @__PURE__ */ Ft({
  name: "VPopperWrapper",
  components: {
    Popper: uS,
    PopperContent: lg
  },
  mixins: [
    cg,
    sg("finalTheme")
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
function CS(e, t, i, n, a, r) {
  const o = Be("PopperContent"), c = Be("Popper");
  return m(), je(c, Wt({ ref: "popper" }, e.$props, {
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
    default: Fe(({
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
      xe(o, {
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
        default: Fe(() => [
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
const dd = /* @__PURE__ */ ud(SS, [["render", CS]]), kS = {
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
og();
const jp = Yn, TS = kS, ES = /* @__PURE__ */ Ft({
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
}), AS = "_ncPopover_qgtYg", xS = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: AS
}, ug = "nc-popover-9";
jp.themes[ug] = structuredClone(jp.themes.dropdown);
const OS = {
  name: "NcPopover",
  components: {
    Dropdown: TS,
    NcPopoverTriggerProvider: ES
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
      theme: ug
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
        Pa.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function NS(e, t, i, n, a, r) {
  const o = Be("NcPopoverTriggerProvider"), c = Be("Dropdown");
  return m(), je(c, {
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
    popper: Fe((d) => [
      Me(e.$slots, "default", Ls(Co(d)))
    ]),
    default: Fe(() => [
      xe(o, {
        shown: a.internalShown,
        popupRole: i.popupRole
      }, {
        default: Fe((d) => [
          Me(e.$slots, "trigger", Ls(Co(d)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const LS = {
  $style: xS
}, Bp = /* @__PURE__ */ Qe(OS, [["render", NS], ["__cssModules", LS]]), RS = {
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
}, IS = ["aria-hidden", "aria-label"], PS = ["fill", "width", "height"], $S = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, FS = { key: 0 };
function DS(e, t, i, n, a, r) {
  return m(), _("span", Wt(e.$attrs, {
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
      l("path", $S, [
        i.title ? (m(), _("title", FS, h(i.title), 1)) : $("", !0)
      ])
    ], 8, PS))
  ], 16, IS);
}
const MS = /* @__PURE__ */ Qe(RS, [["render", DS]]);
ea(b1);
function fd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === Pt)
        return !1;
      if (i.type === ie && !fd(i.children))
        return !1;
      if (i.type === Do && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const zS = ".focusable", US = {
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
    Rw(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(zS);
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
    const n = i.slice(0, this.inline), a = e.filter((E) => !n.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], d = a.some((E) => o.includes(this.getActionName(E))), v = a.some((E) => r.includes(this.getActionName(E))), p = a.some((E) => c.includes(this.getActionName(E)));
    d ? this.actionsMenuSemanticType = "dialog" : v ? this.actionsMenuSemanticType = "menu" : p ? this.actionsMenuSemanticType = "navigation" : e.filter((L) => this.getActionName(L).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const y = (E) => {
      const L = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(L) ? ii("img", { class: "action-item__menutoggle__icon", src: L, alt: "" }) : ii("span", { class: ["icon", L] })), N = E?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? N : "";
      let M = E?.props?.title;
      this.forceName || M || (M = N);
      const z = { ...E?.props ?? {} }, C = ["submit", "reset"].includes(z.type) ? z.modelValue : "button";
      return delete z.modelValue, delete z.type, ii(
        Zi,
        Wt(
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
      const L = fd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? ii("span", { class: ["icon", this.defaultIcon] }) : ii(MS, { size: 20 }), A = `${this.randomId}-trigger`;
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
}, pd = /* @__PURE__ */ Qe(US, [["__scopeId", "data-v-7206c1f1"]]), jS = ["aria-label"], BS = ["width", "height"], HS = ["fill"], VS = ["fill"], KS = { key: 0 }, GS = /* @__PURE__ */ Ft({
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
        }, null, 8, HS),
        l("path", {
          fill: i.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (m(), _("title", KS, h(e.name), 1)) : $("", !0)
        ], 8, VS)
      ], 8, BS))
    ], 8, jS));
  }
}), dg = /* @__PURE__ */ Qe(GS, [["__scopeId", "data-v-cf399190"]]), Ou = /* @__PURE__ */ Ft({
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
}, WS = ["aria-hidden", "aria-label"], YS = ["fill", "width", "height"], XS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, ZS = { key: 0 };
function JS(e, t, i, n, a, r) {
  return m(), _("span", Wt(e.$attrs, {
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
      l("path", XS, [
        i.title ? (m(), _("title", ZS, h(i.title), 1)) : $("", !0)
      ])
    ], 8, YS))
  ], 16, WS);
}
const QS = /* @__PURE__ */ Qe(qS, [["render", JS]]), eC = {
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
}, tC = ["aria-hidden", "aria-label"], iC = ["fill", "width", "height"], nC = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, aC = { key: 0 };
function rC(e, t, i, n, a, r) {
  return m(), _("span", Wt(e.$attrs, {
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
      l("path", nC, [
        i.title ? (m(), _("title", aC, h(i.title), 1)) : $("", !0)
      ])
    ], 8, iC))
  ], 16, tC);
}
const oC = /* @__PURE__ */ Qe(eC, [["render", rC]]);
ea(w1);
const sC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Zi,
    ChevronDown: X0,
    ChevronUp: nw
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
    return { isLegacy34: ta };
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
function lC(e, t, i, n, a, r) {
  const o = Be("ChevronUp"), c = Be("ChevronDown"), d = Be("NcButton");
  return m(), je(d, {
    class: be(["icon-collapse", {
      "icon-collapse--active": i.active,
      "icon-collapse--open": i.open
    }]),
    "aria-label": r.labelButton,
    variant: i.active && n.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Fe(() => [
      i.open ? (m(), je(o, {
        key: 0,
        size: 20
      })) : (m(), je(c, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const cC = /* @__PURE__ */ Qe(sC, [["render", lC], ["__scopeId", "data-v-cfbd3794"]]);
ea(S1, T1);
const uC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: pd,
    NcActionButton: Lw,
    NcAppNavigationIconCollapsible: cC,
    NcInputConfirmCancel: yw,
    NcLoadingIcon: dg,
    NcVNodes: Ou,
    Pencil: QS,
    Undo: oC
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
      isLegacy34: ta
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && yn("toggle-navigation", { open: !1 }));
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
}, dC = ["id"], fC = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], pC = {
  key: 0,
  class: "editingContainer"
}, hC = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, vC = { class: "app-navigation-entry__deleted-description" }, gC = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, bC = {
  key: 0,
  class: "app-navigation-entry__children"
};
function mC(e, t, i, n, a, r) {
  const o = Be("NcLoadingIcon"), c = Be("NcInputConfirmCancel"), d = Be("Pencil"), v = Be("NcActionButton"), p = Be("Undo"), y = Be("NcActions"), k = Be("NcAppNavigationIconCollapsible");
  return m(), _("li", {
    id: i.id,
    class: be([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (m(), je(Yu(r.isRouterLink ? "router-link" : "NcVNodes"), Ls(Co({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
      default: Fe(({ href: E, navigate: L, isActive: A }) => [
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
            onKeydown: t[3] || (t[3] = at(ye((...N) => r.handleTab && r.handleTab(...N), ["exact"]), ["tab"]))
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
            a.editingActive ? (m(), _("div", pC, [
              xe(c, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (N) => a.editingValue = N),
                placeholder: i.editPlaceholder !== "" ? i.editPlaceholder : i.name,
                primary: i.to && A || i.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : $("", !0)
          ], 40, fC)),
          i.undo ? (m(), _("div", hC, [
            l("div", vC, h(i.name), 1)
          ])) : $("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !a.editingActive ? (m(), _("div", {
            key: 2,
            class: be(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || a.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (m(), _("div", gC, [
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
              icon: Fe(() => [
                Me(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Fe(() => [
                i.editable && !a.editingActive ? (m(), je(v, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Fe(() => [
                    xe(d, { size: 20 })
                  ]),
                  default: Fe(() => [
                    ge(" " + h(i.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : $("", !0),
                i.undo ? (m(), je(v, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Fe(() => [
                    xe(p, { size: 20 })
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
    r.canHaveChildren && e.$slots.default ? (m(), _("ul", bC, [
      Me(e.$slots, "default", {}, void 0, !0)
    ])) : $("", !0)
  ], 10, dC);
}
const Xc = /* @__PURE__ */ Qe(uC, [["render", mC], ["__scopeId", "data-v-01bef41b"]]), Zc = /* @__PURE__ */ new WeakMap(), yC = {
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
}, _C = {
  mounted(e) {
    e.focus();
  }
}, wC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", SC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Nu = "numeric", Lu = "ascii", Ru = "alpha", co = "asciinumeric", Jr = "alphanumeric", Iu = "domain", fg = "emoji", CC = "scheme", kC = "slashscheme", Jc = "whitespace";
function TC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Na(e, t, i) {
  t[Nu] && (t[co] = !0, t[Jr] = !0), t[Lu] && (t[co] = !0, t[Ru] = !0), t[co] && (t[Jr] = !0), t[Ru] && (t[Jr] = !0), t[Jr] && (t[Iu] = !0), t[fg] && (t[Iu] = !0);
  for (const n in t) {
    const a = TC(n, i);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function EC(e, t) {
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
    return t && t.j ? a = t : (a = new fi(t), i && n && Na(t, i, n)), this.jr.push([e, a]), a;
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
    let o, c = a.go(e);
    if (c ? (o = new fi(), Object.assign(o.j, c.j), o.jr.push.apply(o.jr, c.jr), o.jd = c.jd, o.t = c.t) : o = new fi(), r) {
      if (n)
        if (o.t && typeof o.t == "string") {
          const d = Object.assign(EC(o.t, n), i);
          Na(r, d, n);
        } else i && Na(r, i, n);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, i, n, a) => e.ta(t, i, n, a), bt = (e, t, i, n, a) => e.tr(t, i, n, a), Hp = (e, t, i, n, a) => e.ts(t, i, n, a), ne = (e, t, i, n, a) => e.tt(t, i, n, a), un = "WORD", Pu = "UWORD", pg = "ASCIINUMERICAL", hg = "ALPHANUMERICAL", Ro = "LOCALHOST", $u = "TLD", Fu = "UTLD", Ns = "SCHEME", Qa = "SLASH_SCHEME", hd = "NUM", Du = "WS", vd = "NL", uo = "OPENBRACE", fo = "CLOSEBRACE", al = "OPENBRACKET", rl = "CLOSEBRACKET", ol = "OPENPAREN", sl = "CLOSEPAREN", ll = "OPENANGLEBRACKET", cl = "CLOSEANGLEBRACKET", ul = "FULLWIDTHLEFTPAREN", dl = "FULLWIDTHRIGHTPAREN", fl = "LEFTCORNERBRACKET", pl = "RIGHTCORNERBRACKET", hl = "LEFTWHITECORNERBRACKET", vl = "RIGHTWHITECORNERBRACKET", gl = "FULLWIDTHLESSTHAN", bl = "FULLWIDTHGREATERTHAN", ml = "AMPERSAND", yl = "APOSTROPHE", _l = "ASTERISK", Kn = "AT", wl = "BACKSLASH", Sl = "BACKTICK", Cl = "CARET", La = "COLON", gd = "COMMA", kl = "DOLLAR", qi = "DOT", Tl = "EQUALS", bd = "EXCLAMATION", yi = "HYPHEN", po = "PERCENT", El = "PIPE", Al = "PLUS", xl = "POUND", ho = "QUERY", md = "QUOTE", vg = "FULLWIDTHMIDDLEDOT", yd = "SEMI", Wi = "SLASH", vo = "TILDE", Ol = "UNDERSCORE", gg = "EMOJI", Nl = "SYM";
var bg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: hg,
  AMPERSAND: ml,
  APOSTROPHE: yl,
  ASCIINUMERICAL: pg,
  ASTERISK: _l,
  AT: Kn,
  BACKSLASH: wl,
  BACKTICK: Sl,
  CARET: Cl,
  CLOSEANGLEBRACKET: cl,
  CLOSEBRACE: fo,
  CLOSEBRACKET: rl,
  CLOSEPAREN: sl,
  COLON: La,
  COMMA: gd,
  DOLLAR: kl,
  DOT: qi,
  EMOJI: gg,
  EQUALS: Tl,
  EXCLAMATION: bd,
  FULLWIDTHGREATERTHAN: bl,
  FULLWIDTHLEFTPAREN: ul,
  FULLWIDTHLESSTHAN: gl,
  FULLWIDTHMIDDLEDOT: vg,
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
  SLASH_SCHEME: Qa,
  SYM: Nl,
  TILDE: vo,
  TLD: $u,
  UNDERSCORE: Ol,
  UTLD: Fu,
  UWORD: Pu,
  WORD: un,
  WS: Du
});
const ln = /[a-z]/, Gr = new RegExp("\\p{L}", "u"), Qc = new RegExp("\\p{Emoji}", "u"), cn = /\d/, eu = /\s/, Vp = "\r", tu = `
`, AC = "️", xC = "‍", iu = "￼";
let Cs = null, ks = null;
function OC(e = []) {
  const t = {};
  fi.groups = t;
  const i = new fi();
  Cs == null && (Cs = Kp(wC)), ks == null && (ks = Kp(SC)), ne(i, "'", yl), ne(i, "{", uo), ne(i, "}", fo), ne(i, "[", al), ne(i, "]", rl), ne(i, "(", ol), ne(i, ")", sl), ne(i, "<", ll), ne(i, ">", cl), ne(i, "（", ul), ne(i, "）", dl), ne(i, "「", fl), ne(i, "」", pl), ne(i, "『", hl), ne(i, "』", vl), ne(i, "＜", gl), ne(i, "＞", bl), ne(i, "&", ml), ne(i, "*", _l), ne(i, "@", Kn), ne(i, "`", Sl), ne(i, "^", Cl), ne(i, ":", La), ne(i, ",", gd), ne(i, "$", kl), ne(i, ".", qi), ne(i, "=", Tl), ne(i, "!", bd), ne(i, "-", yi), ne(i, "%", po), ne(i, "|", El), ne(i, "+", Al), ne(i, "#", xl), ne(i, "?", ho), ne(i, '"', md), ne(i, "/", Wi), ne(i, ";", yd), ne(i, "~", vo), ne(i, "_", Ol), ne(i, "\\", wl), ne(i, "・", vg);
  const n = bt(i, cn, hd, {
    [Nu]: !0
  });
  bt(n, cn, n);
  const a = bt(n, ln, pg, {
    [co]: !0
  }), r = bt(n, Gr, hg, {
    [Jr]: !0
  }), o = bt(i, ln, un, {
    [Lu]: !0
  });
  bt(o, cn, a), bt(o, ln, o), bt(a, cn, a), bt(a, ln, a);
  const c = bt(i, Gr, Pu, {
    [Ru]: !0
  });
  bt(c, ln), bt(c, cn, r), bt(c, Gr, c), bt(r, cn, r), bt(r, ln), bt(r, Gr, r);
  const d = ne(i, tu, vd, {
    [Jc]: !0
  }), v = ne(i, Vp, Du, {
    [Jc]: !0
  }), p = bt(i, eu, Du, {
    [Jc]: !0
  });
  ne(i, iu, p), ne(v, tu, d), ne(v, iu, p), bt(v, eu, p), ne(p, Vp), ne(p, tu), bt(p, eu, p), ne(p, iu, p);
  const y = bt(i, Qc, gg, {
    [fg]: !0
  });
  ne(y, "#"), bt(y, Qc, y), ne(y, AC, y);
  const k = ne(y, xC);
  ne(k, "#"), bt(k, Qc, y);
  const E = [[ln, o], [cn, a]], L = [[ln, null], [Gr, c], [cn, r]];
  for (let A = 0; A < Cs.length; A++)
    Un(i, Cs[A], $u, un, E);
  for (let A = 0; A < ks.length; A++)
    Un(i, ks[A], Fu, Pu, L);
  Na($u, {
    tld: !0,
    ascii: !0
  }, t), Na(Fu, {
    utld: !0,
    alpha: !0
  }, t), Un(i, "file", Ns, un, E), Un(i, "mailto", Ns, un, E), Un(i, "http", Qa, un, E), Un(i, "https", Qa, un, E), Un(i, "ftp", Qa, un, E), Un(i, "ftps", Qa, un, E), Na(Ns, {
    scheme: !0,
    ascii: !0
  }, t), Na(Qa, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, N) => A[0] > N[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const N = e[A][0], M = e[A][1] ? {
      [CC]: !0
    } : {
      [kC]: !0
    };
    N.indexOf("-") >= 0 ? M[Iu] = !0 : ln.test(N) ? cn.test(N) ? M[co] = !0 : M[Lu] = !0 : M[Nu] = !0, Hp(i, N, N, M);
  }
  return Hp(i, "localhost", Ro, {
    ascii: !0
  }), i.jd = new fi(Nl), {
    start: i,
    tokens: Object.assign({
      groups: t
    }, bg)
  };
}
function mg(e, t) {
  const i = NC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), n = i.length, a = [];
  let r = 0, o = 0;
  for (; o < n; ) {
    let c = e, d = null, v = 0, p = null, y = -1, k = -1;
    for (; o < n && (d = c.go(i[o])); )
      c = d, c.accepts() ? (y = 0, k = 0, p = c) : y >= 0 && (y += i[o].length, k++), v += i[o].length, r += i[o].length, o++;
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
function NC(e) {
  const t = [], i = e.length;
  let n = 0;
  for (; n < i; ) {
    let a = e.charCodeAt(n), r, o = a < 55296 || a > 56319 || n + 1 === i || (r = e.charCodeAt(n + 1)) < 56320 || r > 57343 ? e[n] : e.slice(n, n + 2);
    t.push(o), n += o.length;
  }
  return t;
}
function Un(e, t, i, n, a) {
  let r;
  const o = t.length;
  for (let c = 0; c < o - 1; c++) {
    const d = t[c];
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
function yg(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
yg.prototype = {
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
    const t = this, i = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", i, this), a = e.get("tagName", i, t), r = this.toFormattedString(e), o = {}, c = e.get("className", i, t), d = e.get("target", i, t), v = e.get("rel", i, t), p = e.getObj("attributes", i, t), y = e.getObj("events", i, t);
    return o.href = n, c && (o.class = c), d && (o.target = d), v && (o.rel = v), p && Object.assign(o, p), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: y
    };
  }
};
function Ql(e, t) {
  class i extends yg {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const n in t)
    i.prototype[n] = t[n];
  return i.t = e, i;
}
const LC = Ql("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), qp = Ql("text"), RC = Ql("nl"), Ts = Ql("url", {
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
    return e.length >= 2 && e[0].t !== Ro && e[1].t === La;
  }
}), mi = (e) => new fi(e);
function IC({
  groups: e
}) {
  const t = e.domain.concat([ml, _l, Kn, wl, Sl, Cl, kl, Tl, yi, hd, po, El, Al, xl, Wi, Nl, vo, Ol]), i = [yl, La, gd, qi, bd, po, ho, md, yd, ll, cl, uo, fo, rl, al, ol, sl, ul, dl, fl, pl, hl, vl, gl, bl], n = [ml, yl, _l, wl, Sl, Cl, kl, Tl, yi, uo, fo, po, El, Al, xl, ho, Wi, Nl, vo, Ol], a = mi(), r = ne(a, vo);
  Ue(r, n, r), Ue(r, e.domain, r);
  const o = mi(), c = mi(), d = mi();
  Ue(a, e.domain, o), Ue(a, e.scheme, c), Ue(a, e.slashscheme, d), Ue(o, n, r), Ue(o, e.domain, o);
  const v = ne(o, Kn);
  ne(r, Kn, v), ne(c, Kn, v), ne(d, Kn, v);
  const p = ne(r, qi);
  Ue(p, n, r), Ue(p, e.domain, r);
  const y = mi();
  Ue(v, e.domain, y), Ue(y, e.domain, y);
  const k = ne(y, qi);
  Ue(k, e.domain, y);
  const E = mi(LC);
  Ue(k, e.tld, E), Ue(k, e.utld, E), ne(v, Ro, E);
  const L = ne(y, yi);
  ne(L, yi, L), Ue(L, e.domain, y), Ue(E, e.domain, y), ne(E, qi, k), ne(E, yi, L);
  const A = ne(o, yi), N = ne(o, qi);
  ne(A, yi, A), Ue(A, e.domain, o), Ue(N, n, r), Ue(N, e.domain, o);
  const D = mi(Ts);
  Ue(N, e.tld, D), Ue(N, e.utld, D), Ue(D, e.domain, o), Ue(D, n, r), ne(D, qi, N), ne(D, yi, A), ne(D, Kn, v);
  const M = ne(D, La), z = mi(Ts);
  Ue(M, e.numeric, z);
  const C = mi(Ts), oe = mi();
  Ue(C, t, C), Ue(C, i, oe), Ue(oe, t, C), Ue(oe, i, oe), ne(D, Wi, C), ne(z, Wi, C);
  const ue = ne(c, La), Z = ne(d, La), fe = ne(Z, Wi), X = ne(fe, Wi);
  Ue(c, e.domain, o), ne(c, qi, N), ne(c, yi, A), Ue(d, e.domain, o), ne(d, qi, N), ne(d, yi, A), Ue(ue, e.domain, C), ne(ue, Wi, C), ne(ue, ho, C), Ue(X, e.domain, C), Ue(X, t, C), ne(X, Wi, C);
  const le = [
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
  for (let _e = 0; _e < le.length; _e++) {
    const [ee, J] = le[_e], F = ne(C, ee);
    ne(oe, ee, F);
    const U = mi(Ts);
    Ue(F, t, U);
    const Y = mi();
    Ue(F, i, Y), ne(F, J, C), Ue(U, t, U), Ue(U, i, Y), Ue(Y, t, U), Ue(Y, i, Y), ne(U, J, C), ne(Y, J, C);
  }
  return ne(a, Ro, D), ne(a, vd, RC), {
    start: a,
    tokens: bg
  };
}
function PC(e, t, i) {
  let n = i.length, a = 0, r = [], o = [];
  for (; a < n; ) {
    let c = e, d = null, v = null, p = 0, y = null, k = -1;
    for (; a < n && !(d = c.go(i[a].t)); )
      o.push(i[a++]);
    for (; a < n && (v = d || c.go(i[a].t)); )
      d = null, c = v, c.accepts() ? (k = 0, y = c) : k >= 0 && k++, a++, p++;
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
const Bt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function $C() {
  Bt.scanner = OC(Bt.customSchemes);
  for (let e = 0; e < Bt.tokenQueue.length; e++)
    Bt.tokenQueue[e][1]({
      scanner: Bt.scanner
    });
  Bt.parser = IC(Bt.scanner.tokens);
  for (let e = 0; e < Bt.pluginQueue.length; e++)
    Bt.pluginQueue[e][1]({
      scanner: Bt.scanner,
      parser: Bt.parser
    });
  return Bt.initialized = !0, Bt;
}
function _g(e) {
  return Bt.initialized || $C(), PC(Bt.parser.start, e, mg(Bt.scanner.start, e));
}
_g.scan = mg;
function FC(e) {
  const t = new _d({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, zC), i = _g(e), n = [];
  for (const a of i)
    a.t === "nl" && t.get("nl2br") ? n.push(`<br>
`) : !a.isLink || !t.check(a) ? n.push(Gs(a.toString())) : n.push(t.render(a));
  return n.join("");
}
function DC(e) {
  return e.replace(/"/g, "&quot;");
}
function MC(e) {
  const t = [];
  for (const i in e) {
    const n = e[i] + "";
    t.push(`${i}="${DC(n)}"`);
  }
  return t.join(" ");
}
function zC({ tagName: e, attributes: t, content: i }) {
  return `<${e} ${MC(t)}>${Gs(i)}</${e}>`;
}
const UC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = FC(t.text));
}, jC = ["title"], BC = /* @__PURE__ */ Ft({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Vt("NcAppSidebar:header:ref");
    return (i, n) => Ie((m(), _("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ge(h(e.name), 1)
    ], 8, jC)), [
      [g(UC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), HC = ["aria-labelledby"], VC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, KC = ["id"], GC = {
  key: 2,
  class: "empty-content__description"
}, qC = {
  key: 3,
  class: "empty-content__action"
}, WC = /* @__PURE__ */ Ft({
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
      i.$slots.icon ? (m(), _("div", VC, [
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
      ], 8, KC)) : $("", !0),
      e.description !== "" || i.$slots.description ? (m(), _("p", GC, [
        Me(i.$slots, "description", {}, () => [
          ge(h(e.description), 1)
        ], !0)
      ])) : $("", !0),
      i.$slots.action ? (m(), _("div", qC, [
        Me(i.$slots, "action", {}, void 0, !0)
      ])) : $("", !0)
    ], 8, HC));
  }
}), YC = /* @__PURE__ */ Qe(WC, [["__scopeId", "data-v-8609a4c1"]]), XC = {
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
}, ZC = ["aria-hidden", "aria-label"], JC = ["fill", "width", "height"], QC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, ek = { key: 0 };
function tk(e, t, i, n, a, r) {
  return m(), _("span", Wt(e.$attrs, {
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
      l("path", QC, [
        i.title ? (m(), _("title", ek, h(i.title), 1)) : $("", !0)
      ])
    ], 8, JC))
  ], 16, ZC);
}
const ik = /* @__PURE__ */ Qe(XC, [["render", tk]]), nk = {
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
}, ak = ["aria-hidden", "aria-label"], rk = ["fill", "width", "height"], ok = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, sk = { key: 0 };
function lk(e, t, i, n, a, r) {
  return m(), _("span", Wt(e.$attrs, {
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
      l("path", ok, [
        i.title ? (m(), _("title", sk, h(i.title), 1)) : $("", !0)
      ])
    ], 8, rk))
  ], 16, ak);
}
const ck = /* @__PURE__ */ Qe(nk, [["render", lk]]), uk = {
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
}, dk = ["aria-hidden", "aria-label"], fk = ["fill", "width", "height"], pk = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, hk = { key: 0 };
function vk(e, t, i, n, a, r) {
  return m(), _("span", Wt(e.$attrs, {
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
      l("path", pk, [
        i.title ? (m(), _("title", hk, h(i.title), 1)) : $("", !0)
      ])
    ], 8, fk))
  ], 16, dk);
}
const gk = /* @__PURE__ */ Qe(uk, [["render", vk]]), bk = ["aria-selected", "tabindex"], mk = /* @__PURE__ */ Ft({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Fm({
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
        [a.$style.sidebarTabsButton_legacy]: g(ta),
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
          xe(Ou, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Fe(() => [
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
          xe(Ou, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Fe(() => [
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
    ], 10, bk));
  }
}), yk = "_sidebarTabsButton_q3kBA", _k = "_sidebarTabsButton_legacy_KQ4d1", wk = "_sidebarTabsButton_selected_Pjayf", Sk = "_sidebarTabsButton_animatedHighlight_uvp-0", Ck = "_sidebarTabsButton__name_rlQsL", kk = "_sidebarTabsButton__icon_QzZg4", Tk = "_sidebarTabsButton__iconLayer_ZkZan", Ek = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", Ak = "_sidebarTabsButton__icon_pop_IA0By", xk = "_sidebarTabsButton__legacyIcon_QhcNW", Ok = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: yk,
  sidebarTabsButton_legacy: _k,
  sidebarTabsButton_selected: wk,
  sidebarTabsButton_animatedHighlight: Sk,
  sidebarTabsButton__name: Ck,
  sidebarTabsButton__icon: kk,
  sidebarTabsButton__iconLayer: Tk,
  sidebarTabsButton__iconLayer_hidden: Ek,
  sidebarTabsButton__icon_pop: Ak,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: xk
}, Nk = {
  $style: Ok
}, Lk = /* @__PURE__ */ Qe(mk, [["__cssModules", Nk]]), Rk = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: Lk
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
      isLegacy34: ta,
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
      this.tabs.push(e), this.tabs.sort((t, i) => t.order === i.order ? t.name.localeCompare(i.name, [M_()]) : t.order - i.order), this.updateActive();
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
}, Ik = { class: "app-sidebar-tabs" };
function Pk(e, t, i, n, a, r) {
  const o = Be("NcAppSidebarTabsButton");
  return m(), _("div", Ik, [
    r.hasMultipleTabs || r.showForSingleTab ? (m(), _("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: be(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = at(ye((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = at(ye((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = at(ye((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = at(ye((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = at(ye((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = at(ye((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = at(ye((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onPointerleave: t[8] || (t[8] = (...c) => r.hideHighlight && r.hideHighlight(...c)),
      onFocusin: t[9] || (t[9] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onFocusout: t[10] || (t[10] = (...c) => r.onHighlightFocusOut && r.onHighlightFocusOut(...c))
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
      (m(!0), _(ie, null, ke(a.tabs, (c) => (m(), je(o, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: a.activeTab === c.id,
        animatedHighlight: a.highlightEnabled,
        tab: c,
        "onUpdate:selected": (d) => r.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : $("", !0),
    l("div", {
      class: be(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Me(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const $k = /* @__PURE__ */ Qe(Rk, [["render", Pk], ["__scopeId", "data-v-74190d2a"]]);
ea(y1);
const Fk = {
  name: "NcAppSidebar",
  components: {
    NcActions: pd,
    NcAppSidebarHeader: BC,
    NcAppSidebarTabs: $k,
    NcButton: Zi,
    NcLoadingIcon: dg,
    NcEmptyContent: YC,
    IconArrowRight: Hv,
    IconClose: Vv,
    IconDockRight: ik,
    IconStar: ck,
    IconStarOutline: gk
  },
  directives: {
    Focus: _C,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: yC
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
      isMobile: p1(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && Pa.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, Dk = ["aria-labelledby"], Mk = { class: "app-sidebar-header__info" }, zk = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, Uk = { class: "app-sidebar-header__name-container" }, jk = { class: "app-sidebar-header__mainname-container" }, Bk = ["placeholder", "value"], Hk = ["title"], Vk = {
  key: 2,
  class: "app-sidebar-header__description"
};
function Kk(e, t, i, n, a, r) {
  const o = Be("IconDockRight"), c = Be("NcButton"), d = Be("NcLoadingIcon"), v = Be("IconStar"), p = Be("IconStarOutline"), y = Be("NcAppSidebarHeader"), k = Be("IconArrowRight"), E = Be("NcActions"), L = Be("IconClose"), A = Be("NcAppSidebarTabs"), N = Be("NcEmptyContent"), D = pf("focus"), M = pf("click-outside");
  return m(), je(Cy, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Fe(() => [
      Ie(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${n.uid}__header`,
        onKeydown: t[6] || (t[6] = at((...z) => r.onKeydownEsc && r.onKeydownEsc(...z), ["esc"]))
      }, [
        r.ncContentSelector && !i.open && !i.noToggle ? (m(), je(Eh, {
          key: 0,
          to: r.ncContentSelector
        }, [
          xe(c, Wt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", i.toggleClasses],
            variant: "tertiary"
          }, i.toggleAttrs, {
            onClick: t[0] || (t[0] = (z) => e.$emit("update:open", !0))
          }), {
            icon: Fe(() => [
              Me(e.$slots, "toggle-icon", {}, () => [
                xe(o, { size: 20 })
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
            l("div", Mk, [
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
                onKeydown: t[2] || (t[2] = at((...z) => r.onFigureClick && r.onFigureClick(...z), ["enter"]))
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
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (m(), _("div", zk, [
                  Me(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (m(), je(c, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: ye(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Fe(() => [
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
                l("div", Uk, [
                  l("div", jk, [
                    Ie(xe(y, {
                      class: "app-sidebar-header__mainname",
                      name: i.name,
                      linkify: i.linkifyName,
                      title: i.title,
                      tabindex: i.nameEditable ? 0 : -1,
                      onClick: ye(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [ar, !i.nameEditable]
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
                        onKeydown: t[3] || (t[3] = at(ye((...z) => r.onDismissEditing && r.onDismissEditing(...z), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...z) => r.onNameInput && r.onNameInput(...z))
                      }, null, 40, Bk), [
                        [D]
                      ]),
                      xe(c, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Fe(() => [
                          xe(k, { size: 20 })
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
                      default: Fe(() => [
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
                  ], 8, Hk)) : $("", !0)
                ])
              ], 2)
            ])
          ], !0),
          xe(c, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: ye(r.closeSidebar, ["prevent"])
          }, {
            icon: Fe(() => [
              xe(L, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !i.empty ? (m(), _("div", Vk, [
            Me(e.$slots, "description", {}, void 0, !0)
          ])) : $("", !0)
        ], 2),
        Ie(xe(A, {
          ref: "tabs",
          active: i.active,
          forceTabs: i.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Fe(() => [
            Me(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [ar, !i.loading]
        ]),
        i.loading ? (m(), je(N, { key: 1 }, {
          icon: Fe(() => [
            xe(d, { size: 64 })
          ]),
          _: 1
        })) : $("", !0)
      ], 40, Dk), [
        [ar, i.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const Gk = /* @__PURE__ */ Qe(Fk, [["render", Kk], ["__scopeId", "data-v-c2c6820b"]]), qk = {
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
}, Wk = ["role"], Yk = ["download", "href", "aria-label", "target", "title", "role"], Xk = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, Zk = { class: "action-link__name" }, Jk = ["textContent"], Qk = ["textContent"], eT = {
  key: 2,
  class: "action-link__text"
};
function tT(e, t, i, n, a, r) {
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
      e.name ? (m(), _("span", Xk, [
        l("strong", Zk, h(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: h(e.text)
        }, null, 8, Jk)
      ])) : e.isLongText ? (m(), _("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: h(e.text)
      }, null, 8, Qk)) : (m(), _("span", eT, h(e.text), 1)),
      $("", !0)
    ], 8, Yk)
  ], 8, Wk);
}
const au = /* @__PURE__ */ Qe(qk, [["render", tT], ["__scopeId", "data-v-32f01b7a"]]);
ea(k1);
const iT = `<!--
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
`, nT = `<!--
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
`, aT = { class: "vue-skip-actions__container" }, rT = { class: "vue-skip-actions__headline" }, oT = { class: "vue-skip-actions__buttons" }, sT = /* @__PURE__ */ Ft({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    _i(jv, c), _i(Bv, "#content-vue"), _i("appName", B(() => t.appName));
    const i = zo(), n = /* @__PURE__ */ Ee(!1), a = /* @__PURE__ */ Ee(), r = B(() => a.value === "navigation" ? nT : iT);
    Ph(() => {
      const d = document.getElementById("skip-actions");
      d && (d.innerHTML = "", d.classList.add("vue-skip-actions"));
    });
    function o() {
      yn("toggle-navigation", { open: !0 }), Qt(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(d) {
      n.value = d, a.value || (a.value = "navigation");
    }
    return (d, v) => (m(), _("div", {
      id: "content-vue",
      class: be(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(ta) }]])
    }, [
      (m(), je(Eh, { to: "#skip-actions" }, [
        l("div", aT, [
          l("div", rT, h(g(Ct)("Keyboard navigation help")), 1),
          l("div", oT, [
            Ie(xe(Zi, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: ye(o, ["prevent"]),
              onFocusin: v[0] || (v[0] = (p) => a.value = "navigation"),
              onMouseover: v[1] || (v[1] = (p) => a.value = "navigation")
            }, {
              default: Fe(() => [
                ge(h(g(Ct)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [ar, n.value]
            ]),
            xe(Zi, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: v[2] || (v[2] = (p) => a.value = "content"),
              onMouseover: v[3] || (v[3] = (p) => a.value = "content")
            }, {
              default: Fe(() => [
                ge(h(g(Ct)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Ie(xe(Wl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [ar, !g(i)]
          ])
        ])
      ])),
      Me(d.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), lT = /* @__PURE__ */ Qe(sT, [["__scopeId", "data-v-d13dcb98"]]), cT = { class: "library-shelf-tree-node" }, uT = ["aria-expanded", "aria-label"], dT = ["href"], fT = { class: "library-shelf-summary-title" }, pT = { dir: "auto" }, hT = { class: "library-muted" }, vT = { dir: "auto" }, gT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, bT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, mT = {
  key: 3,
  class: "library-shelf-tree"
}, yT = ["disabled"], _T = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, i = /* @__PURE__ */ Ee(!1), n = /* @__PURE__ */ Ee(!1), a = /* @__PURE__ */ Ee(!1), r = /* @__PURE__ */ Ee(!1), o = /* @__PURE__ */ Ee([]), c = /* @__PURE__ */ Ee(!1), d = /* @__PURE__ */ Ee(0);
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
          o.value.push(...L), c.value = E?.hasMore === !0, d.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : o.value.length, n.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (y, k) => {
      const E = Be("ShelfTreeNode", !0);
      return m(), _("li", cT, [
        e.node.hasChildren ? (m(), _("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? g(b)("library", "Collapse {folder}", { folder: e.node.label }) : g(b)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: v
        }, h(i.value ? "−" : "+"), 9, uT)) : $("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", fT, [
            l("strong", null, [
              l("bdi", pT, h(e.node.label), 1)
            ]),
            l("span", null, h(g(ui)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", hT, [
            l("bdi", vT, h(e.node.path), 1)
          ])
        ], 8, dT),
        a.value ? (m(), _("small", gT, h(g(b)("library", "Loading folders…")), 1)) : r.value ? (m(), _("small", bT, h(g(b)("library", "Could not load folders.")), 1)) : $("", !0),
        i.value && o.value.length ? (m(), _("ul", mT, [
          (m(!0), _(ie, null, ke(o.value, (L) => (m(), je(E, {
            key: L.id,
            node: L,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : $("", !0),
        i.value && c.value ? (m(), _("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: p
        }, h(g(b)("library", "Load more folders")), 9, yT)) : $("", !0)
      ]);
    };
  }
}, wT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, ST = { id: "library-sidebar-filters-heading" }, CT = ["aria-label"], kT = ["value"], TT = ["name", "value"], ET = ["value"], AT = ["value"], xT = {
  class: "library-filter-group",
  "data-library-filter-group": "content"
}, OT = ["href"], NT = ["title"], LT = ["placeholder"], RT = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "q"
}, IT = { value: "" }, PT = ["value"], $T = { class: "library-publisher-filter" }, FT = { for: "library-publisher-search" }, DT = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], MT = ["value"], zT = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, UT = {
  key: 1,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, jT = ["id", "aria-selected"], BT = ["onClick"], HT = { class: "library-publication-filter" }, VT = { for: "library-publication-search" }, KT = ["placeholder", "aria-expanded"], GT = ["value"], qT = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, WT = {
  key: 1,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, YT = ["onClick"], XT = { class: "library-year-filter" }, ZT = { for: "library-year-search" }, JT = ["placeholder", "aria-expanded"], QT = ["value"], eE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, tE = {
  key: 1,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, iE = ["onClick"], nE = { class: "library-creator-filter" }, aE = { for: "library-creator-search" }, rE = ["placeholder", "title", "aria-expanded"], oE = ["value"], sE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, lE = {
  key: 1,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, cE = ["onClick"], uE = { class: "library-tag-filter" }, dE = { for: "library-tag-search" }, fE = ["placeholder", "aria-expanded"], pE = ["value"], hE = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, vE = ["onClick"], gE = { value: "" }, bE = ["value"], mE = {
  class: "library-filter-group",
  "data-library-filter-group": "location"
}, yE = ["href"], _E = { value: "" }, wE = ["value"], SE = { class: "library-folder-filter" }, CE = { for: "library-folder-search" }, kE = ["placeholder", "title", "aria-expanded"], TE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, EE = ["onClick"], AE = {
  class: "library-filter-group",
  "data-library-filter-group": "review"
}, xE = ["href"], OE = { value: "" }, NE = ["value"], LE = { value: "" }, RE = ["value"], IE = { class: "library-subject-filter" }, PE = { for: "library-subject-search" }, $E = ["placeholder", "title", "aria-expanded"], FE = ["value"], DE = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, ME = {
  key: 1,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, zE = ["onClick"], UE = { class: "library-classification-filter" }, jE = { for: "library-classification-search" }, BE = ["placeholder", "title", "aria-expanded"], HE = ["value"], VE = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, KE = ["onClick"], GE = { value: "" }, qE = { value: "1" }, WE = {
  class: "library-filter-group",
  "data-library-filter-group": "personal"
}, YE = ["href"], XE = {
  type: "submit",
  class: "button primary"
}, ZE = ["href"], JE = ["href"], QE = ["lang", "dir"], e2 = ["aria-label"], t2 = ["href", "aria-label", "title", "onClick"], i2 = ["title"], n2 = ["href"], a2 = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, r2 = { class: "library-review-header" }, o2 = { class: "library-muted library-catalogue-eyebrow" }, s2 = { id: "library-review-heading" }, l2 = ["aria-label"], c2 = ["href", "aria-current", "onClick"], u2 = ["aria-label"], d2 = ["name", "value"], f2 = {
  type: "submit",
  class: "button secondary"
}, p2 = ["aria-busy"], h2 = { key: 0 }, v2 = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, g2 = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, b2 = { class: "library-metadata-review-workbench-copy" }, m2 = { class: "library-muted library-catalogue-eyebrow" }, y2 = ["title"], _2 = {
  key: 0,
  class: "library-metadata-review-card"
}, w2 = {
  class: "library-bidi-human",
  dir: "auto"
}, S2 = { class: "library-muted" }, C2 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, k2 = { class: "library-metadata-review-fields" }, T2 = {
  class: "library-bidi-human",
  dir: "auto"
}, E2 = {
  class: "library-bidi-human",
  dir: "auto"
}, A2 = {
  class: "library-bidi-human",
  dir: "auto"
}, x2 = {
  class: "library-bidi-machine",
  dir: "ltr"
}, O2 = {
  class: "library-bidi-human",
  dir: "auto"
}, N2 = {
  class: "library-bidi-human",
  dir: "auto"
}, L2 = ["action"], R2 = ["value"], I2 = ["value"], P2 = {
  type: "submit",
  class: "button secondary"
}, $2 = { class: "library-metadata-review-actions" }, F2 = ["href"], D2 = ["href"], M2 = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, z2 = ["href"], U2 = ["aria-label"], j2 = ["onClick"], B2 = {
  class: "library-bidi-human",
  dir: "auto"
}, H2 = {
  key: 0,
  class: "library-muted"
}, V2 = {
  class: "library-bidi-human",
  dir: "auto"
}, K2 = {
  key: 1,
  class: "library-scan-error"
}, G2 = {
  class: "library-bidi-human",
  dir: "auto"
}, q2 = ["onClick"], W2 = ["href", "onClick"], Y2 = ["aria-label"], X2 = ["href"], Z2 = {
  key: 1,
  class: "library-muted"
}, J2 = { key: 0 }, Q2 = ["href"], eA = {
  key: 3,
  class: "library-muted"
}, tA = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, iA = { class: "library-home-header" }, nA = { class: "library-muted library-catalogue-eyebrow" }, aA = { id: "library-home-heading" }, rA = ["aria-label"], oA = ["aria-label"], sA = ["href", "aria-label", "onClick"], lA = ["title"], cA = { class: "library-empty-actions" }, uA = ["href"], dA = ["href"], fA = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, pA = { id: "library-continue-heading" }, hA = { class: "library-muted" }, vA = ["href"], gA = {
  key: 0,
  class: "library-home-card-row"
}, bA = ["aria-label", "onClick"], mA = { class: "library-cover-frame" }, yA = ["src"], _A = { class: "library-cover-summary" }, wA = ["onClick"], SA = { dir: "auto" }, CA = {
  key: 0,
  class: "library-cover-creator"
}, kA = { dir: "auto" }, TA = ["href", "onClick"], EA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, AA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, xA = { id: "library-recent-heading" }, OA = { class: "library-muted" }, NA = ["href"], LA = {
  key: 0,
  class: "library-home-card-row"
}, RA = ["aria-label", "onClick"], IA = { class: "library-cover-frame" }, PA = ["src"], $A = { class: "library-cover-summary" }, FA = ["onClick"], DA = { dir: "auto" }, MA = {
  key: 0,
  class: "library-cover-creator"
}, zA = { dir: "auto" }, UA = ["href", "onClick"], jA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, BA = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, HA = { id: "library-home-shelves-heading" }, VA = { class: "library-muted" }, KA = ["href"], GA = ["aria-label"], qA = ["href"], WA = { dir: "auto" }, YA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, XA = {
  key: 1,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, ZA = { id: "library-home-attention-heading" }, JA = { class: "library-muted" }, QA = ["href"], ex = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, tx = { class: "library-home-header" }, ix = { class: "library-muted library-catalogue-eyebrow" }, nx = { id: "library-shelves-landing-heading" }, ax = { class: "library-muted" }, rx = ["aria-label"], ox = ["aria-label"], sx = ["href", "aria-label", "onClick"], lx = ["title"], cx = { class: "library-empty-actions" }, ux = ["href"], dx = ["href"], fx = ["aria-label"], px = { class: "library-shelf-tree" }, hx = {
  key: 2,
  class: "library-shelves-empty",
  role: "status"
}, vx = { class: "library-muted" }, gx = { class: "library-empty-actions" }, bx = ["href"], mx = ["href"], yx = ["aria-busy"], _x = { class: "library-catalogue-header" }, wx = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, Sx = ["aria-label"], Cx = { class: "library-mobile-filter-count" }, kx = ["aria-label"], Tx = ["value"], Ex = ["name", "value"], Ax = { class: "library-mobile-filter-group" }, xx = { class: "library-quick-filter-search" }, Ox = ["placeholder"], Nx = { value: "" }, Lx = ["value"], Rx = { class: "library-publisher-filter" }, Ix = { for: "library-mobile-publisher-search" }, Px = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], $x = ["value"], Fx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publisher"
}, Dx = {
  key: 1,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, Mx = ["id", "aria-selected"], zx = ["onClick"], Ux = { class: "library-publication-filter" }, jx = { for: "library-mobile-publication-search" }, Bx = ["placeholder", "aria-expanded"], Hx = ["value"], Vx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "publication"
}, Kx = {
  key: 1,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, Gx = ["onClick"], qx = { class: "library-year-filter" }, Wx = { for: "library-mobile-year-search" }, Yx = ["placeholder", "aria-expanded"], Xx = ["value"], Zx = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "year"
}, Jx = {
  key: 1,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, Qx = ["onClick"], eO = { class: "library-creator-filter" }, tO = { for: "library-mobile-creator-search" }, iO = ["placeholder", "title", "aria-expanded"], nO = ["value"], aO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "creator"
}, rO = {
  key: 1,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, oO = ["onClick"], sO = { value: "" }, lO = ["value"], cO = { class: "library-subject-filter" }, uO = { for: "library-mobile-subject-search" }, dO = ["placeholder", "title", "aria-expanded"], fO = ["value"], pO = {
  key: 0,
  class: "library-filter-draft-state",
  "data-library-pending-draft": "subject"
}, hO = {
  key: 1,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, vO = ["onClick"], gO = { class: "library-classification-filter" }, bO = { for: "library-mobile-classification-search" }, mO = ["placeholder", "title", "aria-expanded"], yO = ["value"], _O = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, wO = ["onClick"], SO = { class: "library-mobile-filter-group" }, CO = { value: "" }, kO = ["value"], TO = { class: "library-folder-filter" }, EO = { for: "library-mobile-folder-search" }, AO = ["placeholder", "title", "aria-expanded"], xO = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, OO = ["onClick"], NO = { class: "library-mobile-filter-group" }, LO = { value: "" }, RO = ["value"], IO = { value: "" }, PO = ["value"], $O = { value: "" }, FO = { value: "1" }, DO = { class: "library-mobile-filter-group" }, MO = { class: "library-tag-filter" }, zO = { for: "library-tag-search" }, UO = ["placeholder", "aria-expanded"], jO = ["value"], BO = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, HO = ["onClick"], VO = { value: "title" }, KO = { value: "recent" }, GO = { value: "publicationDate" }, qO = { value: "publication" }, WO = { value: "lastOpened" }, YO = { value: "format" }, XO = { value: "compact" }, ZO = { value: "gallery" }, JO = { value: "list" }, QO = { value: "shelf" }, e3 = { class: "library-mobile-filter-actions" }, t3 = ["href"], i3 = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, n3 = ["aria-label"], a3 = ["aria-label"], r3 = ["name", "value"], o3 = { "data-library-control": "sort" }, s3 = { value: "title" }, l3 = { value: "recent" }, c3 = { value: "publicationDate" }, u3 = { value: "publication" }, d3 = { value: "lastOpened" }, f3 = { value: "format" }, p3 = ["aria-label"], h3 = ["aria-pressed"], v3 = ["aria-pressed"], g3 = ["aria-pressed"], b3 = ["aria-pressed"], m3 = {
  id: "library-collections",
  class: "library-saved-collections"
}, y3 = ["title"], _3 = ["action", "title"], w3 = ["value"], S3 = ["value"], C3 = ["placeholder", "disabled"], k3 = ["disabled", "title"], T3 = ["aria-label"], E3 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, A3 = ["title"], x3 = { class: "library-workspace-panel-purpose" }, O3 = { class: "library-workspace-scope-badge" }, N3 = { "aria-live": "polite" }, L3 = ["action"], R3 = ["value"], I3 = ["placeholder"], P3 = ["title"], $3 = ["action"], F3 = ["value"], D3 = ["placeholder"], M3 = ["title"], z3 = ["action"], U3 = ["value"], j3 = ["name", "value"], B3 = ["title"], H3 = ["action"], V3 = ["value"], K3 = ["name", "value"], G3 = { name: "bulkEditField" }, q3 = { value: "publicationType" }, W3 = { value: "subtitle" }, Y3 = { value: "creators" }, X3 = { value: "publication" }, Z3 = { value: "publicationDate" }, J3 = { value: "language" }, Q3 = { value: "publisher" }, eN = { value: "subjects" }, tN = { value: "classifications" }, iN = ["placeholder"], nN = ["title"], aN = ["action"], rN = ["value"], oN = ["name", "value"], sN = ["title"], lN = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, cN = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, uN = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, dN = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, fN = { key: 0 }, pN = { key: 1 }, hN = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, vN = { class: "library-muted library-catalogue-eyebrow" }, gN = ["title"], bN = ["aria-label"], mN = { key: 0 }, yN = { key: 1 }, _N = { key: 2 }, wN = ["aria-label"], SN = { key: 0 }, CN = { key: 1 }, kN = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, TN = { class: "library-muted library-catalogue-eyebrow" }, EN = ["title"], AN = ["aria-label"], xN = ["href"], ON = {
  key: 0,
  class: "library-notice"
}, NN = { class: "library-publication-issue-label" }, LN = ["href"], RN = { class: "library-muted" }, IN = {
  key: 1,
  class: "library-publication-unknown-issues"
}, PN = ["title"], $N = ["href"], FN = { class: "library-catalogue-status-row" }, DN = { class: "library-muted library-filter-result-summary" }, MN = { key: 0 }, zN = ["href"], UN = ["aria-label"], jN = { class: "library-pagination-range" }, BN = { key: 0 }, HN = ["href"], VN = {
  key: 1,
  class: "library-muted"
}, KN = ["href"], GN = {
  key: 3,
  class: "library-muted"
}, qN = ["title"], WN = { class: "library-empty-actions" }, YN = ["href"], XN = { class: "library-muted" }, ZN = ["title"], JN = { class: "library-empty-actions" }, QN = ["href"], eL = ["title"], tL = ["aria-label"], iL = ["href", "aria-label", "onClick"], nL = ["title"], aL = {
  key: 1,
  class: "library-muted"
}, rL = { class: "library-empty-actions" }, oL = ["href"], sL = ["href"], lL = ["title"], cL = { class: "library-empty-actions" }, uL = ["href"], dL = {
  key: 5,
  class: "library-select-visible"
}, fL = ["checked"], pL = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, hL = { class: "library-item-selection" }, vL = ["checked", "aria-label", "onChange"], gL = { class: "library-catalogue-list-main" }, bL = ["onClick"], mL = {
  class: "library-bidi-human",
  dir: "auto"
}, yL = {
  key: 0,
  class: "library-muted"
}, _L = {
  class: "library-bidi-human",
  dir: "auto"
}, wL = { class: "library-catalogue-list-metadata" }, SL = { key: 0 }, CL = {
  class: "library-bidi-human",
  dir: "auto"
}, kL = { key: 1 }, TL = { key: 2 }, EL = ["dir"], AL = { key: 3 }, xL = {
  class: "library-bidi-human",
  dir: "auto"
}, OL = { class: "library-catalogue-list-actions" }, NL = ["href", "onClick"], LL = ["onClick"], RL = { class: "library-item-selection" }, IL = ["checked", "aria-label", "onChange"], PL = ["aria-labelledby", "aria-expanded", "onClick"], $L = ["id"], FL = { class: "library-cover-frame" }, DL = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, ML = ["src", "onLoad", "onError"], zL = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, UL = ["action", "onSubmit"], jL = ["value"], BL = ["value"], HL = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], VL = ["data-library-star-error"], KL = { class: "library-cover-summary" }, GL = { class: "library-cover-primary" }, qL = ["id"], WL = ["onClick"], YL = {
  class: "library-bidi-human",
  dir: "auto"
}, XL = {
  key: 0,
  class: "library-cover-creator"
}, ZL = {
  class: "library-bidi-human",
  dir: "auto"
}, JL = {
  key: 1,
  class: "library-cover-context"
}, QL = {
  class: "library-bidi-human",
  dir: "auto"
}, eR = ["aria-label"], tR = { class: "library-pagination-range" }, iR = { key: 0 }, nR = ["href"], aR = {
  key: 1,
  class: "library-muted"
}, rR = ["href"], oR = {
  key: 3,
  class: "library-muted"
}, sR = { class: "library-sidebar-content" }, lR = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, cR = ["role"], uR = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, dR = { class: "library-sidebar-publication-header" }, fR = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, pR = ["src"], hR = { class: "library-sidebar-publication-summary" }, vR = { class: "library-muted library-catalogue-eyebrow" }, gR = {
  class: "library-bidi-human",
  dir: "auto"
}, bR = { key: 0 }, mR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, yR = { class: "library-detail-drawer-actions" }, _R = ["href"], wR = ["aria-label"], SR = ["aria-current", "onClick"], CR = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, kR = { id: "library-sidebar-overview-heading" }, TR = {
  key: 0,
  class: "library-sidebar-description"
}, ER = {
  class: "library-bidi-human",
  dir: "auto"
}, AR = { class: "library-detail-drawer-facts" }, xR = { key: 0 }, OR = ["href", "title"], NR = {
  class: "library-bidi-human",
  dir: "auto"
}, LR = { key: 1 }, RR = ["href", "title"], IR = { key: 1 }, PR = { key: 2 }, $R = { key: 2 }, FR = ["href", "title"], DR = {
  class: "library-bidi-human",
  dir: "auto"
}, MR = { key: 3 }, zR = { class: "library-detail-facet-list" }, UR = ["href", "title", "onClick"], jR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, BR = { key: 4 }, HR = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, VR = { id: "library-sidebar-metadata-heading" }, KR = ["placeholder"], GR = ["onUpdate:modelValue", "aria-label", "placeholder"], qR = ["onUpdate:modelValue", "aria-label"], WR = ["onClick"], YR = { class: "library-muted" }, XR = {
  key: 0,
  role: "alert"
}, ZR = {
  key: 1,
  role: "status"
}, JR = ["disabled"], QR = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, e4 = { id: "library-sidebar-suggestions-heading" }, t4 = { class: "library-muted" }, i4 = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, n4 = { id: "library-sidebar-activity-heading" }, a4 = { class: "library-detail-drawer-facts" }, r4 = { key: 0 }, o4 = { key: 1 }, s4 = { key: 2 }, l4 = { class: "library-detail-drawer-file" }, c4 = ["href"], u4 = { dir: "ltr" }, d4 = {
  key: 1,
  dir: "ltr"
}, f4 = ["aria-label"], p4 = ["disabled"], h4 = ["disabled"], v4 = 20, g4 = "/apps/library", b4 = 2147483647, m4 = {
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
    function r(f, u) {
      return Object.prototype.hasOwnProperty.call(a, f) && String(u ?? "").trim() === a[f];
    }
    function o(f) {
      const u = new URLSearchParams(f);
      for (const s of Object.keys(a)) {
        const O = [...new Set([...u.keys()].filter((we) => we === s || we.startsWith(`${s}[`)))], W = O.reduce((we, Re) => we + u.getAll(Re).length, 0);
        if (W > 1 || O.some((we) => we !== s)) {
          for (const we of O) u.delete(we);
          continue;
        }
        s !== "status" && W === 1 && !r(s, u.get(s)) && u.delete(s);
      }
      return u;
    }
    function c(f) {
      return Object.keys(a).some((u) => f.getAll(u).length === 1 && r(u, f.get(u)));
    }
    function d(f) {
      return Object.fromEntries(Object.entries(f || {}).filter(([u, s]) => u === "status" || !Object.prototype.hasOwnProperty.call(a, u) || r(u, s)));
    }
    const v = /* @__PURE__ */ Rt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), p = /* @__PURE__ */ Rt((v.items || []).map((f) => ({ ...f }))), y = B(() => p), k = B(() => v.shelves || []), E = B(() => v.formats || []), L = B(() => v.publicationTypes?.length ? v.publicationTypes : i), A = B(() => v.publications || []), N = B(() => v.publicationIssueContext || null), D = B(() => v.scanStatuses || []), M = B(() => v.workflowStatuses || []), z = B(() => v.cataloguePagination || {
      page: 1,
      limit: 100,
      total: y.value.length,
      visible: y.value.length,
      from: y.value.length > 0 ? 1 : 0,
      to: y.value.length,
      previousUrl: "",
      nextUrl: ""
    }), C = /* @__PURE__ */ Rt({
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
    const oe = /* @__PURE__ */ Ee(C.publication), ue = /* @__PURE__ */ Ee(C.q), Z = /* @__PURE__ */ Ee(!1), fe = /* @__PURE__ */ Ee(null), X = B(() => {
      const f = oe.value.trim().toLocaleLowerCase();
      return (f !== "" && fe.value !== null ? fe.value : A.value).filter((s) => f === "" || s.toLocaleLowerCase().includes(f)).slice(0, v4);
    });
    We(() => C.publication, (f) => {
      oe.value = f || "";
    }), We(() => C.q, (f) => {
      ue.value = f || "";
    });
    let le = null, _e = null, ee = 0;
    We(oe, (f) => {
      window.clearTimeout(le), _e?.abort(), _e = null, fe.value = null;
      const u = String(f || "").trim();
      if (u.length < 3) return;
      const s = ++ee;
      le = window.setTimeout(() => {
        Xg(u, s);
      }, 200);
    });
    const J = /* @__PURE__ */ Ee(C.publisher), F = /* @__PURE__ */ Ee(!1), U = /* @__PURE__ */ Ee(null), Y = B(() => U.value || []);
    We(() => C.publisher, (f) => {
      J.value = f || "";
    });
    let ce = null, ae = null, me = 0;
    We(J, (f) => {
      window.clearTimeout(ce), ae?.abort(), ae = null, U.value = null;
      const u = String(f || "").trim();
      if (u.length < 3) return;
      const s = ++me;
      ce = window.setTimeout(() => {
        Vg(u, s);
      }, 200);
    });
    const de = /* @__PURE__ */ Ee(C.creator), Se = /* @__PURE__ */ Ee(!1), Te = /* @__PURE__ */ Ee(null), Ke = B(() => Te.value || []);
    We(() => C.creator, (f) => {
      de.value = f || "";
    });
    let Le = null, ct = null, ht = 0;
    We(de, (f) => {
      window.clearTimeout(Le), ct?.abort(), ct = null, Te.value = null;
      const u = String(f || "").trim();
      if (u.length < 3) return;
      const s = ++ht;
      Le = window.setTimeout(() => {
        Hg(u, s);
      }, 200);
    });
    const tt = /* @__PURE__ */ Ee(C.folder), ut = /* @__PURE__ */ Ee(!1), rt = /* @__PURE__ */ Ee(null), Dt = B(() => rt.value || []);
    We(() => C.folder, (f) => {
      tt.value = f || "";
    });
    let H = null, w = null, T = 0;
    We(tt, (f) => {
      window.clearTimeout(H), w?.abort(), w = null, rt.value = null;
      const u = String(f || "").trim();
      if (u.length < 3) return;
      const s = ++T;
      H = window.setTimeout(() => {
        Wg(u, s);
      }, 200);
    });
    const x = /* @__PURE__ */ Ee(C.subject), R = /* @__PURE__ */ Ee(!1), I = /* @__PURE__ */ Ee(null), j = B(() => I.value || []);
    We(() => C.subject, (f) => {
      x.value = f || "";
    });
    let G = null, K = null, Q = 0;
    We(x, (f) => {
      window.clearTimeout(G), K?.abort(), K = null, I.value = null;
      const u = String(f || "").trim();
      if (u.length < 3) return;
      const s = ++Q;
      G = window.setTimeout(() => {
        Kg(u, s);
      }, 200);
    });
    const V = /* @__PURE__ */ Ee(C.classification), pe = /* @__PURE__ */ Ee(!1), se = /* @__PURE__ */ Ee(null), he = B(() => se.value || []);
    We(() => C.classification, (f) => {
      V.value = f || "";
    });
    let Oe = null, Pe = null, ze = 0;
    We(V, (f) => {
      window.clearTimeout(Oe), Pe?.abort(), Pe = null, se.value = null;
      const u = String(f || "").trim();
      if (u.length < 3) return;
      const s = ++ze;
      Oe = window.setTimeout(() => {
        Gg(u, s);
      }, 200);
    });
    const $e = /* @__PURE__ */ Ee(C.tag), He = /* @__PURE__ */ Ee(!1), ot = /* @__PURE__ */ Ee(null), vt = B(() => ot.value || []);
    We(() => C.tag, (f) => {
      $e.value = f || "";
    });
    let Tt = null, Mt = null, Ei = 0;
    We($e, (f) => {
      window.clearTimeout(Tt), Mt?.abort(), Mt = null, ot.value = null;
      const u = String(f || "").trim();
      if (u.length < 2) return;
      const s = ++Ei;
      Tt = window.setTimeout(() => {
        qg(u, s);
      }, 200);
    });
    const et = /* @__PURE__ */ Ee(C.year), dt = /* @__PURE__ */ Ee(!1), Di = /* @__PURE__ */ Ee(null), vi = B(() => Di.value || []);
    We(() => C.year, (f) => {
      et.value = f || "";
    });
    let ia = null, En = null, Mi = 0;
    We(et, (f) => {
      window.clearTimeout(ia), En?.abort(), En = null, Di.value = null;
      const u = String(f || "").trim();
      if (u.length < 2) return;
      const s = ++Mi;
      ia = window.setTimeout(() => {
        Yg(u, s);
      }, 200);
    });
    const zi = Object.fromEntries(Object.keys(C).map((f) => [f, f === "sort" ? "title" : f === "view" ? "compact" : ""])), ur = window.location.pathname.indexOf(g4), en = ur >= 0 ? window.location.pathname.slice(0, ur) : "", An = {
      catalogue: `${en}/apps/library/`,
      review: `${en}/apps/library/?scannerConflicts=1`,
      settings: `${en}/settings/user/library`
    };
    function xn(f, u) {
      if (typeof f != "string" || f === "") return u;
      try {
        const s = en ? `${en}/` : "/";
        let O = f;
        for (let W = 0; W < 5; W += 1) {
          if (!O.startsWith("/") || O.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(O)) return u;
          const we = new URL(O, window.location.origin);
          if (we.origin !== window.location.origin || !we.pathname.startsWith(s)) return u;
          const Re = O.split(/[?#]/, 1)[0];
          for (const li of Re.split("/")) {
            let Dn = li;
            for (let Ga = 0; Ga < 5; Ga += 1) {
              const Vi = decodeURIComponent(Dn);
              if (/[\\/\u0000-\u001f\u007f]/.test(Vi) || Vi === "." || Vi === "..") return u;
              if (Vi === Dn) break;
              if (Dn = Vi, Ga === 4) return u;
            }
          }
          const Xe = decodeURI(O);
          if (Xe === O) return f;
          O = Xe;
        }
        return u;
      } catch {
        return u;
      }
    }
    const On = B(() => xn(v.settingsUrl, An.settings)), gt = B(() => xn(v.catalogueRootUrl, An.catalogue)), za = B(() => xn(v.homeUrl, `${An.catalogue}?home=1`)), ai = B(() => xn(v.shelvesUrl, `${An.catalogue}?shelves=1`)), Nn = B(() => xn(v.reviewUrl || v.scannerConflictReviewUrl, An.review)), na = B(() => Object.entries(a).some(([f, u]) => C[f] === u)), Ua = B(() => n.reduce((f, u) => f + Number(bc.value[u.countKey] || 0), 0)), aa = B(() => v.surface === "home"), Ln = B(() => v.surface === "shelves"), dr = B(() => !aa.value && !Ln.value && !na.value && !C.starred && C.sort !== "lastOpened" && !C.shelf), Uo = B(() => [
      { key: "home", name: b("library", "Home"), href: za.value, active: aa.value },
      { key: "all", name: b("library", "All publications"), href: gt.value, active: dr.value },
      { key: "starred", name: b("library", "Starred"), href: `${gt.value}?starred=1`, active: C.starred === "1" },
      { key: "continue", name: b("library", "Continue reading"), href: `${gt.value}?sort=lastOpened`, active: C.sort === "lastOpened" },
      { key: "shelves", name: b("library", "Shelves"), href: ai.value, active: Ln.value || !!C.shelf },
      { key: "collections", name: b("library", "Collections"), href: `${gt.value}#library-collections`, active: !1 }
    ]), fr = B(() => oc.value.map((f) => ({
      key: `collection-${f.id}`,
      name: f.countPending ? f.name : `${f.name} (${ui("library", "%n item", "%n items", Number(f.count || 0))})`,
      href: ub(f.filters),
      active: db(f.filters)
    }))), ti = B(() => v.requestToken || "");
    function gi(f, u) {
      const s = String(f?.recordOpenUrl || "");
      if (!s || !ti.value) return;
      const O = new URLSearchParams({ requesttoken: ti.value });
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
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: ti.value },
        body: O,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const jo = B(() => v.catalogueEndpointUrl || "/apps/library/catalogue"), ec = B(() => v.shelfChildrenUrl || "/apps/library/shelves/children"), pt = B(() => v.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Rn = B(() => v.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), tc = B(() => v.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Bo = B(() => v.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), pr = B(() => v.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), Ho = B(() => v.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), Vo = B(() => v.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), ic = B(() => v.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), nc = B(() => v.itemSidebarUrlTemplate || `${en}/apps/library/items/__ITEM_ID__/sidebar`), ac = B(() => v.batchTagUrl || "/apps/library/bulk/tags"), rc = B(() => v.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Ui = B(() => v.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ko = B(() => v.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), ja = B(() => v.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), ji = B(() => v.scannerConflictReviewUrl || "?scannerConflicts=1");
    v.importHealthSummary, v.importHealthSummary && Object.keys(v.importHealthSummary).length > 0;
    const hr = B(() => v.discoveryPage === "publication"), In = B(() => v.discoveryPage === "year"), Ba = B(() => v.discoveryPage === "creator"), vr = B(() => hr.value || In.value || Ba.value), gr = B(() => v.discoveryTitle || C.publication || C.year || C.creator || ""), Go = B(() => vr.value ? gr.value : b("library", "Library")), ra = B(() => Ba.value ? b("library", "Creator") : In.value ? b("library", "Publication year") : b("library", "Publication / series")), Ha = B(() => Number(v.rootCount || 0)), Va = B(() => Number(v.enabledRootCount || 0)), Bi = B(() => Ha.value === 0), tn = B(() => Ha.value > 0 && Va.value === 0), ri = B(() => q.value.length > 0), Ai = /* @__PURE__ */ Ee(!1), oa = /* @__PURE__ */ Ee(null), qo = /* @__PURE__ */ Ee(null), br = {
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
    }, mr = B(() => {
      if (typeof window > "u") return "";
      const f = new URLSearchParams(window.location.search);
      if (f.get("batchMetadataApplyResult") !== "1") return "";
      const u = f.get("batchMetadataField") || "field", s = f.get("batchMetadataApplied") || "0", O = f.get("batchMetadataUnchanged") || "0", W = f.get("batchMetadataSkipped") || "0";
      return b("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: u, unchanged: O, skipped: W });
    }), Xo = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? b("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), yr = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? b("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), oc = B(() => v.savedCollections || []), sc = B(() => v.savedCollectionSaveUrl || "/apps/library/collections"), _r = ["compact", "gallery", "list", "shelf"], Et = B(() => _r.includes(C.view) ? C.view : "compact"), wr = B(() => ({
      "library-cover-gallery--compact": Et.value === "compact",
      "library-cover-gallery--gallery": Et.value === "gallery",
      "library-cover-gallery--shelf": Et.value === "shelf"
    }));
    function te(f) {
      const u = String(f || "").trim();
      if (u.length <= 32) return u;
      const s = u.split("/").filter(Boolean);
      return s.length > 0 ? `…/${s.at(-1)}` : u;
    }
    function S(f, u) {
      const s = String(u || "").trim();
      if (s === "" || Wo[f] === s) return "";
      if (f === "format") return s.toUpperCase();
      if (f === "folder") return te(s);
      const O = Yo[f]?.[s];
      return O ? b("library", O) : s;
    }
    function P(f, u) {
      const s = String(C[f] || "").trim(), O = S(f, s), W = b("library", u);
      return {
        key: f,
        label: W,
        value: s,
        displayValue: O,
        title: O ? `${W}: ${s}` : W
      };
    }
    const q = B(() => Object.entries(br).map(([f, u]) => P(f, u)).filter((f) => f.value !== "" && !(f.key === "sort" && f.value === "title") && !(f.key === "view" && f.value === "compact"))), re = B(() => q.value.filter((f) => !["sort", "view"].includes(f.key))), ve = B(() => q.value.length), Ne = Object.freeze([
      { key: "content", label: "Content", keys: ["q", "type", "publisher", "publication", "year", "language", "creator", "format", "subject", "classification", "tag"] },
      { key: "location", label: "Location", keys: ["shelf", "folder"] },
      { key: "review", label: "Review", keys: ["scannerConflicts", "needsMetadata", "coverReview", "noCreator", "noPublication", "noDate", "titleFromFilename", "noDescription", "unsupportedContainer", "weakMetadata", "unreviewedImports", "status"] },
      { key: "personal", label: "Personal / display", keys: ["starred", "workflowStatus"] }
    ]);
    function it(f) {
      const u = new Set(f.keys);
      return re.value.filter((s) => u.has(s.key));
    }
    const nt = B(() => Ne.map((f) => ({ ...f, chips: it(f) }))), At = B(() => {
      const f = new URLSearchParams();
      for (const s of re.value) f.set(s.key, s.value);
      const u = f.toString();
      return `${gt.value}${u ? `?${u}` : ""}`;
    }), mt = B(() => re.value[0] || null), Sr = B(() => ue.value.trim() !== String(C.q || "").trim()), xt = B(() => String(C.q || "").trim() !== "" || Sr.value);
    function oi(f) {
      return ({
        q: ue,
        publisher: J,
        publication: oe,
        creator: de,
        subject: x,
        year: et,
        folder: tt,
        classification: V,
        tag: $e
      }[f]?.value ?? "").trim() !== String(C[f] || "").trim();
    }
    function xi(f) {
      return oi(f) ? f === "q" ? b("library", "Not applied yet — press Enter or Apply.") : b("library", "Press Enter or Apply to use this value.") : "";
    }
    function nn(f) {
      return { "library-filter-apply--pending": oi(f) };
    }
    const wg = B(() => ve.value > 0 ? b("library", "Filters ({count})", { count: ve.value }) : b("library", "Filters")), Sg = B(() => ve.value > 0 ? b("library", "Open filters panel; {count} active filters", { count: ve.value }) : b("library", "Open filters panel")), Cg = B(() => ui("library", "Show %n item", "Show %n items", Number(z.value.total || 0)));
    function kg(f) {
      Ai.value = f.currentTarget?.open === !0, Ai.value && Qt(() => {
        oa.value?.focus?.();
      });
    }
    const Tg = /* @__PURE__ */ new Set([
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
    ]), wd = B(() => Object.entries(d(C)).filter(([f, u]) => !Tg.has(f) && String(u || "").trim() !== "").map(([f, u]) => ({ key: f, value: u }))), Eg = B(() => Object.entries(C).filter(([f, u]) => !["q", "sort", "starred"].includes(f) && String(u || "").trim() !== "").map(([f, u]) => ({ key: f, value: u }))), Zo = B(() => Object.entries(d(C)).filter(([f, u]) => String(u || "").trim() !== "").map(([f, u]) => ({ key: f, value: u }))), Ag = B(() => Zo.value.filter(({ key: f, value: u }) => f !== "q" && !(f === "sort" && u === "title"))), lc = /* @__PURE__ */ Rt({}), Jo = B(() => v.homeRows || { continueReading: [], recentlyAdded: [] }), Sd = B(() => v.homeShelves || []), Cd = B(() => v.shelfTree || []), cc = B(() => v.needsAttention || { count: 0, url: `${gt.value}?needsMetadata=1` }), Oi = /* @__PURE__ */ Ee([]), Qo = B(() => new Set(Oi.value));
    function kd(f, u) {
      const s = new Set(Oi.value);
      u ? s.add(Number(f)) : s.delete(Number(f)), Oi.value = [...s];
    }
    function xg(f) {
      Oi.value = f.currentTarget.checked ? y.value.map((u) => Number(u.id)) : [];
    }
    function Og() {
      const f = new Set(y.value.map((u) => Number(u.id)));
      Oi.value = Oi.value.filter((u) => f.has(u));
    }
    function Ng(f) {
      const u = f.target;
      if (u instanceof HTMLFormElement) {
        u.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of Oi.value) {
          const O = document.createElement("input");
          O.type = "hidden", O.name = "itemIds[]", O.value = String(s), O.dataset.librarySelectedId = "1", u.appendChild(O);
        }
      }
    }
    const Ce = /* @__PURE__ */ Ee(null), sa = /* @__PURE__ */ Ee(null), Yt = /* @__PURE__ */ Rt({ loading: !1, error: "", missing: !1 }), la = /* @__PURE__ */ Ee("overview"), Ni = /* @__PURE__ */ Rt({ saving: !1, saved: !1, error: "" }), zt = /* @__PURE__ */ Rt({ title: "", publicationDate: "", identifiers: [] }), Td = /* @__PURE__ */ Ee(null), ca = /* @__PURE__ */ Ee(null), ua = /* @__PURE__ */ Ee(!1);
    let uc = null, an = null, es = null, dc = !1, Cr = null, fc = 0;
    const Pn = B(() => sa.value !== null), kr = B(() => Ce.value ? y.value.findIndex((f) => f.id === Ce.value.id) : -1), ts = B(() => kr.value > 0 ? y.value[kr.value - 1] : null), is = B(() => kr.value >= 0 && kr.value < y.value.length - 1 ? y.value[kr.value + 1] : null), Ed = B(() => Fg(Ce.value?.description || "")), da = B(() => Ig(Ce.value?.publicationDate || "")), Ad = B(() => Pg(Ce.value?.language || "")), Lg = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Rg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Tr(f) {
      const u = String(f ?? "").trim(), s = u.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return s ? s[1] : u;
    }
    function Ig(f) {
      const s = Tr(f).match(/^(\d{4})/u);
      return s ? s[1] : "";
    }
    function Pg(f) {
      return String(f ?? "").split(/[;,\n]+/u).map((u) => u.trim()).filter(Boolean);
    }
    function xd(f, u) {
      const s = new URLSearchParams();
      for (const [O, W] of Object.entries(C)) {
        const we = String(W || "").trim();
        we !== "" && !(O === "sort" && we === "title") && !(O === "view" && we === "compact") && s.set(O, we);
      }
      return s.set(f, String(u || "").trim()), s.delete("page"), o(s);
    }
    function ns(f, u) {
      const O = xd(f, u).toString();
      return `${gt.value}${O ? `?${O}` : ""}`;
    }
    function as(f, u, s) {
      const O = String(s || "").trim();
      if (O === "") return;
      f?.preventDefault?.();
      const W = xd(u, O);
      Ar({ historyMode: "none" }), Nt(null, {
        params: W,
        generation: ++Ut,
        historyMode: "push"
      });
    }
    function $g(f) {
      return String(f ?? "").replace(/&#x([0-9a-f]+);/giu, (u, s) => String.fromCodePoint(Number.parseInt(s, 16))).replace(/&#(\d+);/gu, (u, s) => String.fromCodePoint(Number.parseInt(s, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Fg(f) {
      let u = String(f ?? "").trim();
      if (u === "") return "";
      for (let s = 0; s < 2; s += 1) {
        const O = $g(u);
        if (O === u) break;
        u = O;
      }
      return u = u.replace(/<\s*(script|style)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/giu, "").replace(/<\s*(br|hr)\b[^>]*\/?>/giu, `
`).replace(/<\s*\/\s*(p|div|section|article|blockquote|li|tr|h[1-6])\s*>/giu, `

`).replace(/<\s*(p|div|section|article|blockquote|ul|ol|li|table|tbody|thead|tr|td|th|h[1-6])\b[^>]*>/giu, "").replace(/<[^>]+>/gu, "").replace(/\u00a0/gu, " ").replace(/[^\S\r\n]+/gu, " ").replace(/[ \t]*\n[ \t]*/gu, `
`).replace(/\n{3,}/gu, `

`).trim(), u;
    }
    function Od(f) {
      return { ...f, publicationDate: Tr(f?.publicationDate) };
    }
    function Nd(f) {
      zt.title = String(f?.title || ""), zt.publicationDate = Tr(f?.publicationDate), zt.identifiers = Array.isArray(f?.identifiers) ? f.identifiers.map((u) => ({ scheme: String(u?.scheme || ""), displayValue: String(u?.displayValue || u?.value || "") })) : [], Object.assign(Ni, { saving: !1, saved: !1, error: "" });
    }
    function Dg() {
      zt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Mg(f) {
      zt.identifiers.splice(f, 1);
    }
    async function zg() {
      const f = Ce.value;
      if (!f?.updateUrl || Ni.saving) return;
      Object.assign(Ni, { saving: !0, saved: !1, error: "" });
      const u = new FormData();
      u.set("requesttoken", ti.value), u.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const O = f[s];
        u.set(s, Array.isArray(O) ? O.join(", ") : String(O ?? ""));
      }
      u.set("title", zt.title), u.set("publicationDate", Tr(zt.publicationDate)), zt.identifiers.forEach((s, O) => {
        u.set(`identifiers[${O}][scheme]`, s.scheme), u.set(`identifiers[${O}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(f.updateUrl, { method: "POST", body: u, credentials: "same-origin", headers: { Accept: "application/json" } }), O = await s.json().catch(() => ({}));
        if (!s.ok || O.saved !== !0) throw new Error(O.error || b("library", "Metadata could not be saved."));
        f.title = zt.title.trim(), f.publicationDate = Tr(zt.publicationDate), f.identifiers = zt.identifiers.filter((we) => we.scheme.trim() || we.displayValue.trim()).map((we) => ({ ...we }));
        const W = y.value.find((we) => Number(we.id) === Number(f.id));
        W && (W.title = f.title, W.publicationDate = f.publicationDate), Ni.saved = !0;
      } catch (s) {
        Ni.error = s?.message || b("library", "Metadata could not be saved.");
      } finally {
        Ni.saving = !1;
      }
    }
    const $n = B(() => {
      const f = r("scannerConflicts", C.scannerConflicts) || r("weakMetadata", C.weakMetadata), u = f ? y.value.find((s) => rs(s).length > 0) : null;
      return {
        enabled: f,
        item: u,
        fields: u ? rs(u) : [],
        reviewNextUrl: ji.value,
        skipUrl: z.value.nextUrl || ji.value
      };
    }), Ug = B(() => n.map((f) => ({
      ...f,
      label: b("library", f.label),
      href: `${gt.value}?${encodeURIComponent(f.key)}=${encodeURIComponent(f.value)}`,
      active: String(C[f.key] || "") === f.value
    })));
    function pc(f) {
      return Array.isArray(f) ? JSON.stringify(f) : f == null ? "" : String(f);
    }
    function rs(f) {
      const u = f.fieldValues || {}, s = f.fieldSources || {};
      return Lg.filter((O) => Object.prototype.hasOwnProperty.call(u, O)).map((O) => {
        const W = pc(f[O]), we = pc(u[O]), Re = pc(s[O] || f.metadataSource || "scanner"), Xe = Re.includes("filename") || Re.includes("path") ? we : "", li = Re.includes("sidecar") ? we : "";
        return { field: O, currentValue: W, scannerCandidate: we, pathTemplateCandidate: Xe, sidecarValue: li, sourceProvenance: Re, differs: W !== we };
      }).filter((O) => O.differs);
    }
    let fa = 0, pa = null;
    function Ld() {
      const f = new URLSearchParams(window.location.search).getAll("item");
      if (f.length !== 1 || !/^[1-9][0-9]*$/.test(f[0])) return null;
      const u = Number(f[0]);
      return Number.isSafeInteger(u) && u <= b4 ? u : null;
    }
    function Rd(f, u = "push") {
      const s = new URL(window.location.href);
      s.searchParams.delete("item"), f !== null && s.searchParams.set("item", String(f)), history[`${u}State`]({}, "", `${s.pathname}${s.search}${s.hash}`);
    }
    async function Er(f, { historyMode: u = "push", seed: s = null } = {}) {
      pa?.abort();
      const O = ++fa, W = new AbortController();
      pa = W, sa.value = f, la.value = "overview", Ce.value = s && Number(s.id) === f ? Od(s) : null, Ce.value && Nd(Ce.value), Object.assign(Yt, { loading: !0, error: "", missing: !1 }), u !== "none" && Rd(f, u);
      try {
        const we = nc.value.replace("__ITEM_ID__", encodeURIComponent(String(f))), Re = await fetch(we, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: W.signal });
        if (O !== fa) return;
        if (!Re.ok) {
          Ce.value = null, Yt.missing = Re.status === 404, Yt.error = Re.status === 404 ? b("library", "This publication is unavailable or you do not have access.") : b("library", "Could not load publication details. Try again.");
          return;
        }
        const Xe = await Re.json();
        if (O !== fa) return;
        if (typeof Xe?.item?.id != "number" || !Number.isSafeInteger(Xe.item.id) || Xe.item.id !== f) {
          Ce.value = null, Yt.missing = !1, Yt.error = b("library", "Could not load publication details. Try again.");
          return;
        }
        Ce.value = Od(Xe.item), Nd(Ce.value), await Qt();
      } catch (we) {
        O === fa && we?.name !== "AbortError" && (Ce.value = null, Yt.missing = !1, Yt.error = b("library", "Could not load publication details. Try again."));
      } finally {
        O === fa && (Yt.loading = !1, pa = null);
      }
    }
    function Hi(f, u) {
      hc(), uc = u?.currentTarget instanceof HTMLElement ? u.currentTarget : null, Er(Number(f.id), { seed: f });
    }
    function Ar({ historyMode: f = "push", restoreFocus: u = !0 } = {}) {
      es = u ? uc : null, uc = null, pa?.abort(), pa = null, fa += 1, sa.value = null, Ce.value = null, la.value = "overview", Object.assign(Yt, { loading: !1, error: "", missing: !1 }), f !== "none" && Rd(null, f);
    }
    function Id() {
      ua.value ? (ca.value?.$refs?.sidebar || ca.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Td.value?.focus();
    }
    function jg() {
      const f = es;
      if (es = null, hc(), dc || !f?.isConnected) return;
      const u = fc;
      Cr = window.requestAnimationFrame(() => {
        Cr = null, !(u !== fc || dc || Pn.value || !f.isConnected) && f.focus();
      });
    }
    function hc() {
      fc += 1, Cr !== null && (window.cancelAnimationFrame(Cr), Cr = null);
    }
    function xr(f = an) {
      ua.value = !!f?.matches, Pn.value && Qt(Id);
    }
    function os(f) {
      f && Er(Number(f.id), { seed: f });
    }
    const Or = /* @__PURE__ */ Ee(null);
    let Ut = 0, Ka = null, ss = null, Nr = null;
    const Ot = /* @__PURE__ */ Rt({ loading: !1, error: "", completed: !1 });
    function Bg(f) {
      const u = o(new FormData(f));
      u.delete("publicationSearch"), u.delete("creatorSearch"), u.delete("subjectSearch"), u.delete("publisherSearch"), u.delete("classificationSearch"), u.delete("tagSearch"), u.delete("folderSearch"), u.delete("yearSearch");
      for (const s of Array.from(u.keys()))
        String(u.get(s) || "").trim() === "" && u.delete(s);
      return u.delete("page"), u.get("view") === "compact" && u.delete("view"), u.get("sort") === "title" && u.delete("sort"), u;
    }
    async function ha(f, u, s) {
      const O = new URLSearchParams();
      for (const [Re, Xe] of Object.entries(C)) {
        const li = String(Xe || "").trim();
        Re !== f && li !== "" && !(Re === "sort" && li === "title") && !(Re === "view" && li === "compact") && O.set(Re, li);
      }
      O.set(`${f}Search`, u);
      const W = new AbortController();
      f === "creator" ? ct = W : f === "publisher" ? ae = W : f === "subject" ? K = W : f === "classification" ? Pe = W : f === "tag" ? Mt = W : f === "folder" ? w = W : En = W;
      const we = f === "creator" ? Rn.value : f === "publisher" ? tc.value : f === "subject" ? Bo.value : f === "classification" ? pr.value : f === "tag" ? Ho.value : f === "folder" ? Vo.value : ic.value;
      try {
        const Re = await fetch(`${we}?${O}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: W.signal });
        if (!Re.ok) throw new Error(`${f} suggestions request failed: ${Re.status}`);
        const Xe = await Re.json(), li = f === "creator" ? ht : f === "publisher" ? me : f === "subject" ? Q : f === "classification" ? ze : f === "tag" ? Ei : f === "folder" ? T : Mi, Dn = f === "creator" ? de.value : f === "publisher" ? J.value : f === "subject" ? x.value : f === "classification" ? V.value : f === "tag" ? $e.value : f === "folder" ? tt.value : et.value;
        s === li && Dn.trim() === u && (f === "creator" ? Te.value = Array.isArray(Xe.creators) ? Xe.creators : [] : f === "publisher" ? U.value = Array.isArray(Xe.publishers) ? Xe.publishers : [] : f === "subject" ? I.value = Array.isArray(Xe.subjects) ? Xe.subjects : [] : f === "classification" ? se.value = Array.isArray(Xe.classifications) ? Xe.classifications : [] : f === "tag" ? ot.value = Array.isArray(Xe.tags) ? Xe.tags : [] : f === "folder" ? rt.value = Array.isArray(Xe.folders) ? Xe.folders : [] : Di.value = Array.isArray(Xe.years) ? Xe.years : []);
      } catch (Re) {
        Re?.name !== "AbortError" && (f === "creator" && s === ht && (Te.value = null), f === "publisher" && s === me && (U.value = null), f === "subject" && s === Q && (I.value = null), f === "classification" && s === ze && (se.value = null), f === "tag" && s === Ei && (ot.value = null), f === "folder" && s === T && (rt.value = null), f === "year" && s === Mi && (Di.value = null));
      }
    }
    function Hg(f, u) {
      return ha("creator", f, u);
    }
    function Vg(f, u) {
      return ha("publisher", f, u);
    }
    function Kg(f, u) {
      return ha("subject", f, u);
    }
    function Gg(f, u) {
      return ha("classification", f, u);
    }
    function qg(f, u) {
      return ha("tag", f, u);
    }
    function Wg(f, u) {
      return ha("folder", f, u);
    }
    function Yg(f, u) {
      return ha("year", f, u);
    }
    async function Xg(f, u) {
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
        u === ee && oe.value.trim() === f && (fe.value = Array.isArray(we.publications) ? we.publications : []);
      } catch (W) {
        W?.name !== "AbortError" && u === ee && (fe.value = null);
      } finally {
        u === ee && (_e = null);
      }
    }
    function Zg(f) {
      p.splice(0, p.length, ...(f.items || []).map((s) => ({ ...s }))), Og();
      const u = new Set(f.facetsDeferred ? [
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
        !u.has(s) && Object.prototype.hasOwnProperty.call(f, s) && (v[s] = f[s]);
      Object.assign(C, zi, f.activeFilters || {});
    }
    async function Jg() {
      if (v.surface !== "index") return;
      const f = Ut, u = JSON.stringify({ ...C }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [W, we] of Object.entries(C)) {
        const Re = String(we || "").trim();
        Re !== "" && !(W === "sort" && Re === "title") && !(W === "view" && Re === "compact") && s.set(W, Re);
      }
      const O = new AbortController();
      ss = O;
      try {
        const W = await fetch(`${jo.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: O.signal
        });
        if (!W.ok) return;
        const we = await W.json();
        if (f !== Ut || u !== JSON.stringify({ ...C })) return;
        for (const Re of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(we, Re) && (v[Re] = we[Re]);
      } catch (W) {
        if (W?.name !== "AbortError") return;
      } finally {
        ss === O && (ss = null);
      }
    }
    async function Nt(f, u = null) {
      const s = f?.currentTarget?.tagName === "FORM" ? f.currentTarget : f?.currentTarget?.form;
      if (!s && !u?.params) return;
      const O = o(u?.params ?? Bg(s));
      if (aa.value || Ln.value) {
        Lr(O, gt.value);
        return;
      }
      const W = O.toString(), we = W ? `?${W}` : "", Re = u?.generation ?? ++Ut, Xe = c(O), li = u?.historyMode ?? (Xe ? "push" : "replace"), Dn = u?.historyTraversal === !0;
      if (Re !== Ut) return;
      u === null && Ka?.abort();
      const Ga = new AbortController();
      Ka = Ga, Ot.loading = !0, Ot.error = "", Ot.completed = !1;
      try {
        const Vi = await fetch(jo.value + we, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ga.signal
        });
        if (Re !== Ut) return;
        if (!Vi.ok) {
          Dn ? Lr(O) : Xe ? Ot.error = b("library", "Could not load this review queue. Try again.") : Lr(O);
          return;
        }
        const bb = await Vi.json();
        if (Re !== Ut) return;
        Zg(bb), Ot.completed = !0, li !== "none" && (history[li === "push" ? "pushState" : "replaceState"]({}, "", W ? `?${W}` : window.location.pathname), Pn.value && Ar({ historyMode: "none" }));
      } catch (Vi) {
        Re === Ut && Vi?.name !== "AbortError" && (Dn ? Lr(O) : Xe ? Ot.error = b("library", "Could not load this review queue. Try again.") : Lr(O));
      } finally {
        Re === Ut && (Ka = null, Ot.loading = !1);
      }
    }
    function Pd() {
      Ka?.abort();
      const f = new URLSearchParams(window.location.search), u = Ld();
      f.has("item") && u === null && (f.delete("item"), history.replaceState({}, "", `${window.location.pathname}${f.toString() ? `?${f}` : ""}${window.location.hash}`)), u === null ? Ar({ historyMode: "none" }) : Er(u, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === u) || null }), f.delete("item"), Nt(null, {
        params: o(f),
        generation: ++Ut,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Lr(f, u = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = u, s.hidden = !0;
      for (const [O, W] of f.entries()) {
        const we = document.createElement("input");
        we.type = "hidden", we.name = O, we.value = W, s.appendChild(we);
      }
      document.body.appendChild(s), s.submit(), s.remove();
    }
    function si(f, u = null, s = null) {
      if (u === null) {
        Nt(f);
        return;
      }
      Nt({ currentTarget: f }, { params: u, generation: s });
    }
    async function Qg(f, u = oe.value) {
      C.publication = String(u || "").trim(), oe.value = C.publication, Z.value = !1, await Qt(), Nt({ currentTarget: f });
    }
    function $d(f, u) {
      Qg(u.currentTarget.form, f);
    }
    async function eb(f) {
      C.q = String(ue.value || "").trim(), C.publication = String(oe.value || "").trim(), C.publisher = String(J.value || "").trim(), C.creator = String(de.value || "").trim(), C.subject = String(x.value || "").trim(), C.folder = String(tt.value || "").trim(), C.year = String(et.value || "").trim(), Z.value = !1, F.value = !1, Se.value = !1, R.value = !1, ut.value = !1, dt.value = !1, await Qt(), Nt({ currentTarget: f });
    }
    async function Fn(f, u, s) {
      C[u] = String(s || "").trim(), u === "creator" ? (de.value = C.creator, Se.value = !1) : u === "publisher" ? (J.value = C.publisher, F.value = !1) : u === "subject" ? (x.value = C.subject, R.value = !1) : u === "folder" ? (tt.value = C.folder, ut.value = !1) : u === "classification" ? (V.value = C.classification, pe.value = !1) : u === "tag" ? ($e.value = C.tag, He.value = !1) : (et.value = C.year, dt.value = !1), rn[u] = -1, await Qt(), Nt({ currentTarget: f });
    }
    function Fd(f) {
      eb(f.currentTarget);
    }
    function Dd(f, u) {
      Fn(u.currentTarget.form, "creator", f);
    }
    function Md(f, u) {
      Fn(u.currentTarget.form, "publisher", f);
    }
    function zd(f, u) {
      Fn(u.currentTarget.form, "classification", f);
    }
    function Ud(f, u) {
      Fn(u.currentTarget.form, "tag", f);
    }
    function jd(f, u) {
      Fn(u.currentTarget.form, "folder", f);
    }
    function Bd(f, u = x.value) {
      window.clearTimeout(G), K?.abort(), K = null, Fn(f, "subject", u);
    }
    function tb(f) {
      Bd(f.currentTarget.form);
    }
    function Hd(f, u) {
      Bd(u.currentTarget.form, f);
    }
    function Vd(f, u) {
      Fn(u.currentTarget.form, "year", f);
    }
    const rn = /* @__PURE__ */ Rt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function ib(f) {
      return Y.value;
    }
    function vc(f, u, s) {
      return `library-${f}-${u}-suggestion-${s}`;
    }
    function Kd(f, u) {
      const s = rn[u];
      return s >= 0 ? vc(f, u, s) : void 0;
    }
    function gc(f, u) {
      F.value = u, u || (rn[f] = -1);
    }
    function Gd(f) {
      rn[f] = -1, gc(f, !0);
    }
    function nb(f, u, s) {
      Fn(s, f, u);
    }
    function qd(f, u) {
      const s = ib();
      if (f.key === "Escape") {
        gc(u, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(f.key) || s.length === 0) return;
      if (f.key === "Enter") {
        const we = rn[u];
        if (we < 0) return;
        f.preventDefault(), nb(u, s[we], f.currentTarget.form);
        return;
      }
      f.preventDefault(), gc(u, !0);
      const O = rn[u], W = f.key === "ArrowDown" ? 1 : -1;
      rn[u] = O < 0 ? W > 0 ? 0 : s.length - 1 : (O + W + s.length) % s.length;
    }
    function Wd(f) {
      const u = new URLSearchParams();
      for (const [s, O] of Object.entries(C)) {
        const W = String(O || "").trim();
        W !== "" && s !== f && !(s === "sort" && W === "title") && !(s === "view" && W === "compact") && u.set(s, W);
      }
      return u;
    }
    function Rr(f) {
      const u = Wd(f).toString();
      return `${gt.value}${u ? `?${u}` : ""}`;
    }
    function Ir(f) {
      const u = Wd(f);
      C[f] = f === "sort" ? "title" : f === "view" ? "compact" : "", Nt(null, {
        params: u,
        generation: ++Ut
      });
    }
    function Yd() {
      const f = new URLSearchParams();
      return C.sort && C.sort !== "title" && f.set("sort", C.sort), C.view && C.view !== "compact" && f.set("view", C.view), f;
    }
    function va() {
      const f = Yd().toString();
      return `${gt.value}${f ? `?${f}` : ""}`;
    }
    function ga() {
      const f = Yd();
      for (const u of Object.keys(C))
        ["sort", "view"].includes(u) || (C[u] = zi[u]);
      Nt(null, {
        params: f,
        generation: ++Ut
      }), !aa.value && !Ln.value && Qt(() => {
        qo.value?.focus?.();
      });
    }
    function Xd(f) {
      const u = Ne.find((W) => W.key === f), s = new Set(u?.keys || []), O = new URLSearchParams();
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
      const u = Ne.find((O) => O.key === f);
      if (!u) return;
      const s = Xd(f);
      for (const O of u.keys) C[O] = zi[O];
      Nt(null, {
        params: s,
        generation: ++Ut
      });
    }
    function ab(f) {
      const u = new URL(f.href, window.location.origin).searchParams;
      Nt(null, {
        params: u,
        generation: ++Ut
      });
    }
    function rb() {
      return Rr("q");
    }
    const bc = B(() => v.smartViewCounts || {}), ob = B(() => new Set(v.smartViewCountsPending || []));
    function sb(f) {
      return ob.value.has(f) || !Object.prototype.hasOwnProperty.call(bc.value, f) ? "—" : Number(bc.value[f] || 0);
    }
    const Zd = B(() => {
      const f = {};
      for (const [u, s] of Object.entries(C)) {
        const O = String(s || "").trim();
        O !== "" && !(u === "sort" && O === "title") && (f[u] = O);
      }
      return f;
    }), lb = B(() => JSON.stringify(Zd.value)), mc = B(() => Object.keys(Zd.value).length > 0);
    function us(f) {
      if (!_r.includes(f)) return;
      C.view = f;
      const u = new URLSearchParams();
      for (const [s, O] of Object.entries(d(C))) {
        const W = String(O || "").trim();
        W !== "" && !(s === "sort" && W === "title") && !(s === "view" && W === "compact") && u.set(s, W);
      }
      u.delete("page"), Nt(null, {
        params: u,
        generation: ++Ut
      });
    }
    function cb(f) {
      const u = o(window.location.search);
      for (const O of Object.keys(br))
        u.delete(O);
      u.delete("page");
      for (const [O, W] of Object.entries(f))
        String(W || "").trim() !== "" && u.set(O, String(W));
      const s = u.toString();
      return s ? `?${s}` : "?";
    }
    function ub(f) {
      return cb(f || {});
    }
    function db(f) {
      const s = Object.entries(f && typeof f == "object" ? f : {}).filter(([, O]) => String(O ?? "").trim() !== "");
      return s.length === 0 ? !1 : s.every(([O, W]) => String(C[O] ?? "") === String(W ?? ""));
    }
    function ds(f) {
      return String(f || "").toUpperCase();
    }
    function Pr(f) {
      return lc[f.id] || "loading";
    }
    function fb(f) {
      lc[f.id] = "loaded";
    }
    function pb(f) {
      lc[f.id] = "error";
    }
    function Jd(f) {
      const u = String(f?.publication || "").trim(), s = String(f?.publicationDate || "").trim();
      return u && s ? `${u} · ${s}` : u || s;
    }
    function Qd(f) {
      const u = String(f?.tagName || "").toLowerCase();
      return f?.isContentEditable || ["input", "select", "textarea", "button"].includes(u);
    }
    function hb(f) {
      f.key !== "/" || f.metaKey || f.ctrlKey || f.altKey || f.shiftKey || Qd(f.target) || (f.preventDefault(), Or.value?.focus(), Or.value?.select?.());
    }
    async function vb(f) {
      f.key !== "Escape" || document.activeElement !== Or.value || C.q === "" || (f.preventDefault(), ue.value = "", C.q = "", await Qt(), si({ currentTarget: Or.value }));
    }
    function gb(f) {
      if (!Pn.value || f.metaKey || f.ctrlKey || f.altKey)
        return !1;
      if (f.key === "Escape")
        return f.preventDefault(), Ar(), !0;
      if (f.key === "Tab" && ua.value) {
        if (ca.value?.focusTrap) return !1;
        const u = ca.value?.$refs?.sidebar || ca.value?.$el || ca.value, s = [...u?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((we) => !we.hidden && we.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const O = s[0], W = s[s.length - 1];
        if (f.shiftKey && (document.activeElement === O || !u.contains(document.activeElement)))
          return f.preventDefault(), W.focus(), !0;
        if (!f.shiftKey && (document.activeElement === W || !u.contains(document.activeElement)))
          return f.preventDefault(), O.focus(), !0;
      }
      return Qd(f.target) ? !1 : f.key === "ArrowLeft" && ts.value ? (f.preventDefault(), os(ts.value), !0) : f.key === "ArrowRight" && is.value ? (f.preventDefault(), os(is.value), !0) : !1;
    }
    function ef(f) {
      gb(f) || (hb(f), vb(f));
    }
    Qn(() => {
      window.addEventListener("keydown", ef), window.addEventListener("popstate", Pd), an = window.matchMedia?.("(max-width: 1023px)") || null, xr(), an?.addEventListener ? an.addEventListener("change", xr) : an?.addListener?.(xr);
      const f = new URLSearchParams(window.location.search), u = Ld();
      f.has("item") && u === null ? (f.delete("item"), history.replaceState({}, "", `${window.location.pathname}${f.toString() ? `?${f}` : ""}${window.location.hash}`)) : u !== null && Er(u, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === u) || null }), Nr = window.requestAnimationFrame(() => {
        Nr = null, Jg();
      });
    }), cr(() => {
      dc = !0, hc(), window.removeEventListener("keydown", ef), window.removeEventListener("popstate", Pd), window.clearTimeout(le), window.clearTimeout(Le), window.clearTimeout(G), window.clearTimeout(ia), _e?.abort(), ct?.abort(), K?.abort(), En?.abort(), Ut += 1, Nr !== null && window.cancelAnimationFrame(Nr), Nr = null, ss?.abort(), Ka?.abort(), Ka = null, fa += 1, pa?.abort(), pa = null, an?.removeEventListener ? an.removeEventListener("change", xr) : an?.removeListener?.(xr), an = null, es = null;
    });
    const $r = /* @__PURE__ */ Rt({}), Fr = /* @__PURE__ */ Rt({});
    async function tf(f, u) {
      const s = u?.currentTarget?.closest?.("form") || u?.currentTarget;
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
    return (f, u) => (m(), je(g(lT), { "app-name": "library" }, {
      default: Fe(() => [
        xe(g(H0), {
          "aria-label": g(b)("library", "Library navigation")
        }, {
          list: Fe(() => [
            xe(g(Uv), null, {
              default: Fe(() => [
                (m(!0), _(ie, null, ke(Uo.value, (s) => (m(), je(g(Xc), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                (m(!0), _(ie, null, ke(fr.value, (s) => (m(), je(g(Xc), {
                  key: s.key,
                  class: "library-navigation-saved-collection",
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                xe(g(Xc), {
                  active: na.value,
                  href: Nn.value,
                  name: Ua.value > 0 ? `${g(b)("library", "Review")} (${Ua.value})` : g(b)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Fe(() => [
            l("section", wT, [
              l("h2", ST, h(g(b)("library", "Filters")), 1),
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
                }, null, 8, kT),
                (m(!0), _(ie, null, ke(wd.value, (s) => (m(), _("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, TT))), 128)),
                C.sort && C.sort !== "title" ? (m(), _("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: C.sort
                }, null, 8, ET)) : $("", !0),
                C.view && C.view !== "compact" ? (m(), _("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: C.view
                }, null, 8, AT)) : $("", !0),
                l("fieldset", xT, [
                  l("legend", null, h(g(b)("library", "Content")), 1),
                  nt.value.find((s) => s.key === "content")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("content"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: u[0] || (u[0] = ye((s) => cs("content"), ["prevent"]))
                  }, h(g(b)("library", "Clear Content")), 9, OT)) : $("", !0),
                  l("label", {
                    class: "library-quick-filter-search",
                    title: g(b)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                  }, [
                    l("span", null, [
                      ge(h(g(b)("library", "Search")) + " ", 1),
                      u[113] || (u[113] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                    ]),
                    Ie(l("input", {
                      ref_key: "quickSearchInput",
                      ref: Or,
                      "onUpdate:modelValue": u[1] || (u[1] = (s) => ue.value = s),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: g(b)("library", "Title, creator, description, filename or folder")
                    }, null, 8, LT), [
                      [ft, ue.value]
                    ]),
                    oi("q") ? (m(), _("small", RT, h(xi("q")), 1)) : $("", !0)
                  ], 8, NT),
                  l("label", null, [
                    ge(h(g(b)("library", "Type")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[2] || (u[2] = (s) => C.type = s),
                      name: "type",
                      onChange: u[3] || (u[3] = (s) => si(s))
                    }, [
                      l("option", IT, h(g(b)("library", "All types")), 1),
                      (m(!0), _(ie, null, ke(L.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, PT))), 128))
                    ], 544), [
                      [Xt, C.type]
                    ])
                  ]),
                  l("div", $T, [
                    l("label", FT, h(g(b)("library", "Publisher")), 1),
                    Ie(l("input", {
                      id: "library-publisher-search",
                      "onUpdate:modelValue": u[4] || (u[4] = (s) => J.value = s),
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
                      onFocus: u[5] || (u[5] = (s) => Gd("publisher")),
                      onKeydown: u[6] || (u[6] = (s) => qd(s, "publisher"))
                    }, null, 40, DT), [
                      [ft, J.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: C.publisher
                    }, null, 8, MT),
                    oi("publisher") ? (m(), _("small", zT, h(xi("publisher")), 1)) : $("", !0),
                    F.value && Y.value.length > 0 ? (m(), _("ul", UT, [
                      (m(!0), _(ie, null, ke(Y.value, (s, O) => (m(), _("li", {
                        id: vc("desktop", "publisher", O),
                        key: s,
                        role: "option",
                        "aria-selected": rn.publisher === O ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: u[7] || (u[7] = ye(() => {
                          }, ["prevent"])),
                          onClick: (W) => Md(s, W)
                        }, h(s), 41, BT)
                      ], 8, jT))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-publisher-apply", nn("publisher")])
                    }, h(g(b)("library", "Apply publisher")), 3)
                  ]),
                  l("div", HT, [
                    l("label", VT, h(g(b)("library", "Series / periodical")), 1),
                    Ie(l("input", {
                      id: "library-publication-search",
                      "onUpdate:modelValue": u[8] || (u[8] = (s) => oe.value = s),
                      type: "search",
                      name: "publicationSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search series and periodicals"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-publication-suggestions",
                      "aria-expanded": Z.value && X.value.length > 0 ? "true" : "false",
                      onFocus: u[9] || (u[9] = (s) => Z.value = !0),
                      onKeydown: u[10] || (u[10] = at((s) => Z.value = !1, ["escape"]))
                    }, null, 40, KT), [
                      [ft, oe.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publication",
                      value: C.publication
                    }, null, 8, GT),
                    oi("publication") ? (m(), _("small", qT, h(xi("publication")), 1)) : $("", !0),
                    Z.value && X.value.length > 0 ? (m(), _("ul", WT, [
                      (m(!0), _(ie, null, ke(X.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publication-suggestion",
                          onMousedown: u[11] || (u[11] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => $d(s, O)
                        }, h(s), 41, YT)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-publication-apply", nn("publication")])
                    }, h(g(b)("library", "Apply series")), 3)
                  ]),
                  l("div", XT, [
                    l("label", ZT, h(g(b)("library", "Publication year")), 1),
                    Ie(l("input", {
                      id: "library-year-search",
                      "onUpdate:modelValue": u[12] || (u[12] = (s) => et.value = s),
                      type: "search",
                      name: "yearSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search publication years"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-year-suggestions",
                      "aria-expanded": dt.value && vi.value.length > 0 ? "true" : "false",
                      onFocus: u[13] || (u[13] = (s) => dt.value = !0),
                      onKeydown: u[14] || (u[14] = at((s) => dt.value = !1, ["escape"]))
                    }, null, 40, JT), [
                      [ft, et.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "year",
                      value: C.year
                    }, null, 8, QT),
                    oi("year") ? (m(), _("small", eE, h(xi("year")), 1)) : $("", !0),
                    dt.value && vi.value.length > 0 ? (m(), _("ul", tE, [
                      (m(!0), _(ie, null, ke(vi.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-year-suggestion",
                          onMousedown: u[15] || (u[15] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => Vd(s, O)
                        }, h(s), 41, iE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-year-apply", nn("year")])
                    }, h(g(b)("library", "Apply year")), 3)
                  ]),
                  l("div", nE, [
                    l("label", aE, h(g(b)("library", "Creator")), 1),
                    Ie(l("input", {
                      id: "library-creator-search",
                      "onUpdate:modelValue": u[16] || (u[16] = (s) => de.value = s),
                      type: "search",
                      name: "creatorSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search creators"),
                      title: g(b)("library", "Exact full-field creator matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-creator-suggestions",
                      "aria-expanded": Se.value && Ke.value.length > 0 ? "true" : "false",
                      onFocus: u[17] || (u[17] = (s) => Se.value = !0),
                      onKeydown: u[18] || (u[18] = at((s) => Se.value = !1, ["escape"]))
                    }, null, 40, rE), [
                      [ft, de.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "creator",
                      value: C.creator
                    }, null, 8, oE),
                    oi("creator") ? (m(), _("small", sE, h(xi("creator")), 1)) : $("", !0),
                    Se.value && Ke.value.length > 0 ? (m(), _("ul", lE, [
                      (m(!0), _(ie, null, ke(Ke.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-creator-suggestion",
                          onMousedown: u[19] || (u[19] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => Dd(s, O)
                        }, h(s), 41, cE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-creator-apply", nn("creator")])
                    }, h(g(b)("library", "Apply creator")), 3)
                  ]),
                  l("div", uE, [
                    l("label", dE, h(g(b)("library", "Nextcloud tag")), 1),
                    Ie(l("input", {
                      id: "library-tag-search",
                      "onUpdate:modelValue": u[20] || (u[20] = (s) => $e.value = s),
                      type: "search",
                      name: "tagSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search tags"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-tag-suggestions",
                      "aria-expanded": He.value && vt.value.length > 0 ? "true" : "false",
                      onFocus: u[21] || (u[21] = (s) => He.value = !0),
                      onKeydown: u[22] || (u[22] = at((s) => He.value = !1, ["escape"]))
                    }, null, 40, fE), [
                      [ft, $e.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "tag",
                      value: C.tag
                    }, null, 8, pE),
                    He.value && vt.value.length > 0 ? (m(), _("ul", hE, [
                      (m(!0), _(ie, null, ke(vt.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-tag-suggestion",
                          onMousedown: u[23] || (u[23] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => Ud(s, O)
                        }, h(s), 41, vE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-tag-apply", nn("tag")])
                    }, h(g(b)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    ge(h(g(b)("library", "Format")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[24] || (u[24] = (s) => C.format = s),
                      name: "format",
                      onChange: u[25] || (u[25] = (s) => si(s))
                    }, [
                      l("option", gE, h(g(b)("library", "All formats")), 1),
                      (m(!0), _(ie, null, ke(E.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(ds(s)), 9, bE))), 128))
                    ], 544), [
                      [Xt, C.format]
                    ])
                  ])
                ]),
                l("fieldset", mE, [
                  l("legend", null, h(g(b)("library", "Location")), 1),
                  nt.value.find((s) => s.key === "location")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("location"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: u[26] || (u[26] = ye((s) => cs("location"), ["prevent"]))
                  }, h(g(b)("library", "Clear Location")), 9, yE)) : $("", !0),
                  l("label", null, [
                    ge(h(g(b)("library", "Shelf")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[27] || (u[27] = (s) => C.shelf = s),
                      name: "shelf",
                      onChange: u[28] || (u[28] = (s) => si(s))
                    }, [
                      l("option", _E, h(g(b)("library", "All shelves")), 1),
                      (m(!0), _(ie, null, ke(k.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, wE))), 128))
                    ], 544), [
                      [Xt, C.shelf]
                    ])
                  ]),
                  l("div", SE, [
                    l("label", CE, h(g(b)("library", "Folder")), 1),
                    Ie(l("input", {
                      id: "library-folder-search",
                      "onUpdate:modelValue": u[29] || (u[29] = (s) => tt.value = s),
                      type: "search",
                      name: "folderSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Type at least 3 path characters"),
                      title: g(b)("library", "Select an exact folder path"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-folder-suggestions",
                      "aria-expanded": ut.value && Dt.value.length > 0 ? "true" : "false",
                      onFocus: u[30] || (u[30] = (s) => ut.value = !0),
                      onKeydown: u[31] || (u[31] = at((s) => ut.value = !1, ["escape"]))
                    }, null, 40, kE), [
                      [ft, tt.value]
                    ]),
                    ut.value && Dt.value.length > 0 ? (m(), _("ul", TE, [
                      (m(!0), _(ie, null, ke(Dt.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: u[32] || (u[32] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => jd(s, O)
                        }, h(s), 41, EE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-folder-apply", nn("folder")])
                    }, h(g(b)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", AE, [
                  l("legend", null, h(g(b)("library", "Review")), 1),
                  nt.value.find((s) => s.key === "review")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("review"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: u[33] || (u[33] = ye((s) => cs("review"), ["prevent"]))
                  }, h(g(b)("library", "Clear Review")), 9, xE)) : $("", !0),
                  l("label", null, [
                    ge(h(g(b)("library", "Scan status")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[34] || (u[34] = (s) => C.status = s),
                      name: "status",
                      onChange: u[35] || (u[35] = (s) => si(s))
                    }, [
                      l("option", OE, h(g(b)("library", "All scan statuses")), 1),
                      (m(!0), _(ie, null, ke(D.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, NE))), 128))
                    ], 544), [
                      [Xt, C.status]
                    ])
                  ]),
                  l("label", null, [
                    ge(h(g(b)("library", "Workflow status")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[36] || (u[36] = (s) => C.workflowStatus = s),
                      name: "workflowStatus",
                      onChange: u[37] || (u[37] = (s) => si(s))
                    }, [
                      l("option", LE, h(g(b)("library", "All workflow statuses")), 1),
                      (m(!0), _(ie, null, ke(M.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, RE))), 128))
                    ], 544), [
                      [Xt, C.workflowStatus]
                    ])
                  ]),
                  l("div", IE, [
                    l("label", PE, h(g(b)("library", "Subject")), 1),
                    Ie(l("input", {
                      id: "library-subject-search",
                      "onUpdate:modelValue": u[38] || (u[38] = (s) => x.value = s),
                      type: "search",
                      name: "subjectSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search subjects"),
                      title: g(b)("library", "Exact subject matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-subject-suggestions",
                      "aria-expanded": R.value && j.value.length > 0 ? "true" : "false",
                      onFocus: u[39] || (u[39] = (s) => R.value = !0),
                      onKeydown: u[40] || (u[40] = at((s) => R.value = !1, ["escape"]))
                    }, null, 40, $E), [
                      [ft, x.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "subject",
                      value: C.subject
                    }, null, 8, FE),
                    oi("subject") ? (m(), _("small", DE, h(xi("subject")), 1)) : $("", !0),
                    R.value && j.value.length > 0 ? (m(), _("ul", ME, [
                      (m(!0), _(ie, null, ke(j.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-subject-suggestion",
                          onMousedown: u[41] || (u[41] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => Hd(s, O)
                        }, h(s), 41, zE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "button",
                      class: be(["button secondary library-subject-apply", nn("subject")]),
                      onClick: tb
                    }, h(g(b)("library", "Apply subject")), 3)
                  ]),
                  l("div", UE, [
                    l("label", jE, h(g(b)("library", "Classification")), 1),
                    Ie(l("input", {
                      id: "library-classification-search",
                      "onUpdate:modelValue": u[42] || (u[42] = (s) => V.value = s),
                      type: "search",
                      name: "classificationSearch",
                      autocomplete: "off",
                      placeholder: g(b)("library", "Search classifications"),
                      title: g(b)("library", "Exact classification matches only"),
                      role: "combobox",
                      "aria-autocomplete": "list",
                      "aria-controls": "library-classification-suggestions",
                      "aria-expanded": pe.value && he.value.length > 0 ? "true" : "false",
                      onFocus: u[43] || (u[43] = (s) => pe.value = !0),
                      onKeydown: u[44] || (u[44] = at((s) => pe.value = !1, ["escape"]))
                    }, null, 40, BE), [
                      [ft, V.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "classification",
                      value: C.classification
                    }, null, 8, HE),
                    pe.value && he.value.length > 0 ? (m(), _("ul", VE, [
                      (m(!0), _(ie, null, ke(he.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-classification-suggestion",
                          onMousedown: u[45] || (u[45] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => zd(s, O)
                        }, h(s), 41, KE)
                      ]))), 128))
                    ])) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-classification-apply", nn("classification")])
                    }, h(g(b)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    ge(h(g(b)("library", "Suggested updates")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[46] || (u[46] = (s) => C.scannerConflicts = s),
                      name: "scannerConflicts",
                      onChange: u[47] || (u[47] = (s) => si(s))
                    }, [
                      l("option", GE, h(g(b)("library", "All metadata")), 1),
                      l("option", qE, h(g(b)("library", "Suggested updates")), 1)
                    ], 544), [
                      [Xt, C.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", WE, [
                  l("legend", null, h(g(b)("library", "Personal / display")), 1),
                  nt.value.find((s) => s.key === "personal")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ls("personal"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: u[48] || (u[48] = ye((s) => cs("personal"), ["prevent"]))
                  }, h(g(b)("library", "Clear Personal / display")), 9, YE)) : $("", !0)
                ]),
                l("button", XE, h(g(b)("library", "Apply filters")), 1),
                re.value.length > 0 ? (m(), _("a", {
                  key: 2,
                  href: va(),
                  class: "button secondary",
                  onClick: ye(ga, ["prevent"])
                }, h(g(b)("library", "Clear")), 9, ZE)) : $("", !0)
              ], 40, CT)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: On.value
            }, [
              u[114] || (u[114] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, h(g(b)("library", "Settings")), 1)
            ], 8, JE)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        xe(g(r0), null, {
          default: Fe(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: v.language || "en",
              dir: v.direction || "ltr",
              tabindex: "-1"
            }, [
              q.value.length > 0 ? (m(), _("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(b)("library", "Active filters")
              }, [
                l("span", null, h(g(b)("library", "Active filters")), 1),
                (m(!0), _(ie, null, ke(q.value, (s) => (m(), _("a", {
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
                    u[115] || (u[115] = ge(h(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, h(s.displayValue), 9, i2)
                  ], 64)) : $("", !0),
                  u[116] || (u[116] = ge()),
                  u[117] || (u[117] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, t2))), 128)),
                re.value.length > 0 ? (m(), _("a", {
                  key: 0,
                  href: va(),
                  class: "library-active-filter-clear-all",
                  onClick: ye(ga, ["prevent"])
                }, h(g(b)("library", "Clear all")), 9, n2)) : $("", !0)
              ], 8, e2)) : $("", !0),
              na.value ? (m(), _("section", a2, [
                l("header", r2, [
                  l("p", o2, h(g(b)("library", "Metadata cleanup")), 1),
                  l("h2", s2, h(g(b)("library", "Review")), 1),
                  l("p", null, h(g(b)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                l("nav", {
                  class: "library-review-queues",
                  "aria-label": g(b)("library", "Review queues")
                }, [
                  (m(!0), _(ie, null, ke(Ug.value, (s) => (m(), _("a", {
                    key: s.key,
                    class: be(["library-review-queue-link", { active: s.active }]),
                    href: s.href,
                    "aria-current": s.active ? "page" : void 0,
                    onClick: ye((O) => ab(s), ["prevent"])
                  }, [
                    l("span", null, h(s.label), 1),
                    l("b", null, h(sb(s.countKey)), 1)
                  ], 10, c2))), 128))
                ], 8, l2),
                l("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(b)("library", "Filter current review queue"),
                  onSubmit: ye(Nt, ["prevent"])
                }, [
                  (m(!0), _(ie, null, ke(Ag.value, (s) => (m(), _("input", {
                    key: `review-${s.key}`,
                    type: "hidden",
                    name: s.key,
                    value: s.value
                  }, null, 8, d2))), 128)),
                  l("label", null, [
                    ge(h(g(b)("library", "Search within this queue")), 1),
                    Ie(l("input", {
                      "onUpdate:modelValue": u[49] || (u[49] = (s) => C.q = s),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ft, C.q]
                    ])
                  ]),
                  l("button", f2, h(g(b)("library", "Apply")), 1)
                ], 40, u2),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Ot.loading ? "true" : "false"
                }, [
                  Ot.loading ? (m(), _("span", h2, h(g(b)("library", "Loading review queue…")), 1)) : $("", !0)
                ], 8, p2),
                Ot.error ? (m(), _("p", v2, h(Ot.error), 1)) : $("", !0),
                $n.value.enabled ? (m(), _("section", g2, [
                  l("div", b2, [
                    l("p", m2, h(g(b)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(b)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, h(g(b)("library", "Review next suggestion")), 9, y2)
                  ]),
                  $n.value.item ? (m(), _("article", _2, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", w2, h($n.value.item.title), 1)
                      ]),
                      l("span", S2, [
                        l("bdi", C2, h($n.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", k2, [
                      (m(!0), _(ie, null, ke($n.value.fields, (s) => (m(), _("article", {
                        key: s.field,
                        class: "library-metadata-review-field"
                      }, [
                        l("h4", null, [
                          l("bdi", T2, h(s.field), 1)
                        ]),
                        l("dl", null, [
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Current value")), 1),
                            l("dd", null, [
                              l("bdi", E2, h(s.currentValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Suggested value")), 1),
                            l("dd", null, [
                              l("bdi", A2, h(s.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Path-based suggestion")), 1),
                            l("dd", null, [
                              l("bdi", x2, h(s.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Sidecar value")), 1),
                            l("dd", null, [
                              l("bdi", O2, h(s.sidecarValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, h(g(b)("library", "Source")), 1),
                            l("dd", null, [
                              l("bdi", N2, h(s.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        l("form", {
                          method: "post",
                          action: $n.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ti.value
                          }, null, 8, R2),
                          l("input", {
                            type: "hidden",
                            name: "field",
                            value: s.field
                          }, null, 8, I2),
                          u[118] || (u[118] = l("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          l("button", P2, h(g(b)("library", "Use suggested value")), 1)
                        ], 8, L2)
                      ]))), 128))
                    ]),
                    l("footer", $2, [
                      l("a", {
                        class: "button secondary",
                        href: $n.value.item.detailsUrl
                      }, h(g(b)("library", "Maintenance")), 9, F2),
                      l("a", {
                        class: "button secondary",
                        href: $n.value.skipUrl
                      }, h(g(b)("library", "Skip to next suggestion")), 9, D2)
                    ])
                  ])) : $("", !0)
                ])) : $("", !0),
                y.value.length === 0 && !Ot.loading && !Ot.error ? (m(), _("div", M2, [
                  l("h3", null, h(g(b)("library", "This review queue is clear")), 1),
                  l("p", null, h(g(b)("library", "Choose another queue or return to the catalogue.")), 1),
                  l("a", {
                    class: "button primary",
                    href: gt.value
                  }, h(g(b)("library", "Back to Library")), 9, z2)
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
                          l("bdi", B2, h(s.title), 1)
                        ], 8, j2)
                      ]),
                      s.creators ? (m(), _("p", H2, [
                        l("bdi", V2, h(s.creators), 1)
                      ])) : $("", !0),
                      s.scanError ? (m(), _("p", K2, [
                        l("bdi", G2, h(s.scanError), 1)
                      ])) : $("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (O) => Hi(s, O)
                      }, h(g(b)("library", "Details")), 9, q2),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (O) => gi(s, O)
                      }, h(g(b)("library", "Open")), 9, W2)
                    ])
                  ]))), 128))
                ], 8, U2)),
                y.value.length > 0 ? (m(), _("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(b)("library", "Review pagination")
                }, [
                  z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, h(g(b)("library", "Previous")), 9, X2)) : (m(), _("span", Z2, h(g(b)("library", "Previous")), 1)),
                  l("span", null, [
                    ge(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", J2, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : $("", !0)
                  ]),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, h(g(b)("library", "Next")), 9, Q2)) : (m(), _("span", eA, h(g(b)("library", "Next")), 1))
                ], 8, Y2)) : $("", !0)
              ])) : aa.value ? (m(), _("main", tA, [
                l("header", iA, [
                  l("p", nA, h(g(b)("library", "Your library")), 1),
                  l("h2", aA, h(g(b)("library", "Home")), 1)
                ]),
                re.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, h(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ie, null, ke(re.value, (s) => (m(), _("a", {
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
                        u[119] || (u[119] = ge(h(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, h(s.displayValue), 9, lA)
                      ], 64)) : $("", !0),
                      u[120] || (u[120] = ge()),
                      u[121] || (u[121] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, sA))), 128))
                  ], 8, oA),
                  l("p", cA, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: At.value
                    }, h(g(b)("library", "View filtered catalogue")), 9, uA),
                    l("a", {
                      class: "button secondary",
                      href: va(),
                      onClick: ye(ga, ["prevent"])
                    }, h(g(b)("library", "Clear all")), 9, dA)
                  ])
                ], 8, rA)) : $("", !0),
                l("section", fA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", pA, h(g(b)("library", "Continue reading")), 1),
                      l("p", hA, h(g(b)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    l("a", {
                      href: `${gt.value}?sort=lastOpened`
                    }, h(g(b)("library", "View all")), 9, vA)
                  ]),
                  Jo.value.continueReading.length ? (m(), _("div", gA, [
                    (m(!0), _(ie, null, ke(Jo.value.continueReading, (s) => (m(), _("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (O) => Hi(s, O)
                      }, [
                        l("span", mA, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, yA)
                        ])
                      ], 8, bA),
                      l("div", _A, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (O) => Hi(s, O)
                          }, [
                            l("bdi", SA, h(s.title), 1)
                          ], 8, wA)
                        ]),
                        s.creators ? (m(), _("p", CA, [
                          l("bdi", kA, h(s.creators), 1)
                        ])) : $("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (O) => gi(s, O)
                        }, h(g(b)("library", "Open")), 9, TA)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", EA, h(g(b)("library", "Publications you open will appear here.")), 1))
                ]),
                l("section", AA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", xA, h(g(b)("library", "Recently added")), 1),
                      l("p", OA, h(g(b)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    l("a", {
                      href: `${gt.value}?sort=recent`
                    }, h(g(b)("library", "View all")), 9, NA)
                  ]),
                  Jo.value.recentlyAdded.length ? (m(), _("div", LA, [
                    (m(!0), _(ie, null, ke(Jo.value.recentlyAdded, (s) => (m(), _("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (O) => Hi(s, O)
                      }, [
                        l("span", IA, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, PA)
                        ])
                      ], 8, RA),
                      l("div", $A, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (O) => Hi(s, O)
                          }, [
                            l("bdi", DA, h(s.title), 1)
                          ], 8, FA)
                        ]),
                        s.creators ? (m(), _("p", MA, [
                          l("bdi", zA, h(s.creators), 1)
                        ])) : $("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (O) => gi(s, O)
                        }, h(g(b)("library", "Open")), 9, UA)
                      ])
                    ]))), 128))
                  ])) : (m(), _("p", jA, h(g(b)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                l("section", BA, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", HA, h(g(b)("library", "Shelves")), 1),
                      l("p", VA, h(g(b)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    l("a", { href: ai.value }, h(g(b)("library", "View all")), 9, KA)
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
                        l("bdi", WA, h(s.shelf), 1)
                      ]),
                      l("span", null, h(g(ui)("library", "%n item", "%n items", Number(s.itemCount || 0))), 1)
                    ], 8, qA))), 128))
                  ], 8, GA)) : (m(), _("p", YA, h(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(cc.value.count || 0) > 0 ? (m(), _("aside", XA, [
                  l("div", null, [
                    l("h3", ZA, h(g(b)("library", "Needs attention")), 1),
                    l("p", JA, h(g(ui)("library", "%n publication needs better details.", "%n publications need better details.", Number(cc.value.count || 0))), 1)
                  ]),
                  l("a", {
                    class: "button tertiary",
                    href: cc.value.url
                  }, h(g(b)("library", "Review")), 9, QA)
                ])) : $("", !0)
              ])) : Ln.value ? (m(), _("main", ex, [
                l("header", tx, [
                  l("p", ix, h(g(b)("library", "Your library")), 1),
                  l("h2", nx, h(g(b)("library", "Shelves")), 1),
                  l("p", ax, h(g(b)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                re.value.length > 0 ? (m(), _("aside", {
                  key: 0,
                  class: "library-active-filter-callout",
                  "aria-label": g(b)("library", "Active catalogue filters")
                }, [
                  l("h3", null, h(g(b)("library", "Active catalogue filters")), 1),
                  l("nav", {
                    class: "library-active-filter-callout-chips",
                    "aria-label": g(b)("library", "Active catalogue filters")
                  }, [
                    (m(!0), _(ie, null, ke(re.value, (s) => (m(), _("a", {
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
                        u[122] || (u[122] = ge(h(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, h(s.displayValue), 9, lx)
                      ], 64)) : $("", !0),
                      u[123] || (u[123] = ge()),
                      u[124] || (u[124] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, sx))), 128))
                  ], 8, ox),
                  l("p", cx, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: At.value
                    }, h(g(b)("library", "View filtered catalogue")), 9, ux),
                    l("a", {
                      class: "button secondary",
                      href: va(),
                      onClick: ye(ga, ["prevent"])
                    }, h(g(b)("library", "Clear all")), 9, dx)
                  ])
                ], 8, rx)) : $("", !0),
                Cd.value.length ? (m(), _("nav", {
                  key: 1,
                  "aria-label": g(b)("library", "Shelves")
                }, [
                  l("ul", px, [
                    (m(!0), _(ie, null, ke(Cd.value, (s) => (m(), je(_T, {
                      key: s.id,
                      node: s,
                      "children-url": ec.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, fx)) : (m(), _("section", hx, [
                  l("h3", null, h(g(b)("library", "Shelves")), 1),
                  l("p", vx, h(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", gx, [
                    l("a", {
                      class: "button primary",
                      href: On.value
                    }, h(g(b)("library", "Add a Library root")), 9, bx),
                    l("a", {
                      class: "button secondary",
                      href: gt.value
                    }, h(g(b)("library", "All publications")), 9, mx)
                  ])
                ]))
              ])) : (m(), _("section", {
                key: 4,
                id: "library-catalogue",
                class: be(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Ot.loading }]),
                "aria-labelledby": "library-catalogue-heading",
                "aria-busy": Ot.loading ? "true" : "false"
              }, [
                l("header", _x, [
                  vr.value ? (m(), _("p", wx, h(ra.value), 1)) : $("", !0),
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
                  onToggle: kg
                }, [
                  l("summary", {
                    class: "library-mobile-filter-trigger",
                    "aria-label": Sg.value
                  }, [
                    l("span", Cx, h(g(ui)("library", "%n item", "%n items", Number(z.value.total || 0))), 1),
                    l("strong", null, h(wg.value), 1)
                  ], 8, Sx),
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
                    }, null, 8, Tx),
                    (m(!0), _(ie, null, ke(wd.value, (s) => (m(), _("input", {
                      key: `mobile-hidden-${s.key}`,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, Ex))), 128)),
                    l("fieldset", Ax, [
                      l("legend", null, h(g(b)("library", "Content")), 1),
                      l("label", xx, [
                        l("span", null, h(g(b)("library", "Search")), 1),
                        Ie(l("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: oa,
                          "onUpdate:modelValue": u[50] || (u[50] = (s) => ue.value = s),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(b)("library", "Title, creator, description, filename or folder")
                        }, null, 8, Ox), [
                          [ft, ue.value]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Type")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[51] || (u[51] = (s) => C.type = s),
                          name: "type",
                          onChange: u[52] || (u[52] = (s) => si(s))
                        }, [
                          l("option", Nx, h(g(b)("library", "All types")), 1),
                          (m(!0), _(ie, null, ke(L.value, (s) => (m(), _("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, h(s), 9, Lx))), 128))
                        ], 544), [
                          [Xt, C.type]
                        ])
                      ]),
                      l("div", Rx, [
                        l("label", Ix, h(g(b)("library", "Publisher")), 1),
                        Ie(l("input", {
                          id: "library-mobile-publisher-search",
                          "onUpdate:modelValue": u[53] || (u[53] = (s) => J.value = s),
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
                          onFocus: u[54] || (u[54] = (s) => Gd("publisher")),
                          onKeydown: u[55] || (u[55] = (s) => qd(s, "publisher"))
                        }, null, 40, Px), [
                          [ft, J.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: C.publisher
                        }, null, 8, $x),
                        oi("publisher") ? (m(), _("small", Fx, h(xi("publisher")), 1)) : $("", !0),
                        Ai.value && F.value && Y.value.length > 0 ? (m(), _("ul", Dx, [
                          (m(!0), _(ie, null, ke(Y.value, (s, O) => (m(), _("li", {
                            id: vc("mobile", "publisher", O),
                            key: `mobile-publisher-${s}`,
                            role: "option",
                            "aria-selected": rn.publisher === O ? "true" : "false"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: u[56] || (u[56] = ye(() => {
                              }, ["prevent"])),
                              onClick: (W) => Md(s, W)
                            }, h(s), 41, zx)
                          ], 8, Mx))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", Ux, [
                        l("label", jx, h(g(b)("library", "Series / periodical")), 1),
                        Ie(l("input", {
                          id: "library-mobile-publication-search",
                          "onUpdate:modelValue": u[57] || (u[57] = (s) => oe.value = s),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publication-suggestions",
                          "aria-expanded": Z.value && X.value.length > 0 ? "true" : "false",
                          onFocus: u[58] || (u[58] = (s) => Z.value = !0),
                          onKeydown: u[59] || (u[59] = at((s) => Z.value = !1, ["escape"]))
                        }, null, 40, Bx), [
                          [ft, oe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publication",
                          value: C.publication
                        }, null, 8, Hx),
                        oi("publication") ? (m(), _("small", Vx, h(xi("publication")), 1)) : $("", !0),
                        Ai.value && Z.value && X.value.length > 0 ? (m(), _("ul", Kx, [
                          (m(!0), _(ie, null, ke(X.value, (s) => (m(), _("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: u[60] || (u[60] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => $d(s, O)
                            }, h(s), 41, Gx)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", qx, [
                        l("label", Wx, h(g(b)("library", "Publication year")), 1),
                        Ie(l("input", {
                          id: "library-mobile-year-search",
                          "onUpdate:modelValue": u[61] || (u[61] = (s) => et.value = s),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-year-suggestions",
                          "aria-expanded": dt.value && vi.value.length > 0 ? "true" : "false",
                          onFocus: u[62] || (u[62] = (s) => dt.value = !0),
                          onKeydown: u[63] || (u[63] = at((s) => dt.value = !1, ["escape"]))
                        }, null, 40, Yx), [
                          [ft, et.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "year",
                          value: C.year
                        }, null, 8, Xx),
                        oi("year") ? (m(), _("small", Zx, h(xi("year")), 1)) : $("", !0),
                        Ai.value && dt.value && vi.value.length > 0 ? (m(), _("ul", Jx, [
                          (m(!0), _(ie, null, ke(vi.value, (s) => (m(), _("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: u[64] || (u[64] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Vd(s, O)
                            }, h(s), 41, Qx)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", eO, [
                        l("label", tO, h(g(b)("library", "Creator")), 1),
                        Ie(l("input", {
                          id: "library-mobile-creator-search",
                          "onUpdate:modelValue": u[65] || (u[65] = (s) => de.value = s),
                          type: "search",
                          name: "creatorSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search creators"),
                          title: g(b)("library", "Exact full-field creator matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-creator-suggestions",
                          "aria-expanded": Se.value && Ke.value.length > 0 ? "true" : "false",
                          onFocus: u[66] || (u[66] = (s) => Se.value = !0),
                          onKeydown: u[67] || (u[67] = at((s) => Se.value = !1, ["escape"]))
                        }, null, 40, iO), [
                          [ft, de.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "creator",
                          value: C.creator
                        }, null, 8, nO),
                        oi("creator") ? (m(), _("small", aO, h(xi("creator")), 1)) : $("", !0),
                        Ai.value && Se.value && Ke.value.length > 0 ? (m(), _("ul", rO, [
                          (m(!0), _(ie, null, ke(Ke.value, (s) => (m(), _("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: u[68] || (u[68] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Dd(s, O)
                            }, h(s), 41, oO)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Format")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[69] || (u[69] = (s) => C.format = s),
                          name: "format",
                          onChange: u[70] || (u[70] = (s) => si(s))
                        }, [
                          l("option", sO, h(g(b)("library", "All formats")), 1),
                          (m(!0), _(ie, null, ke(E.value, (s) => (m(), _("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, h(ds(s)), 9, lO))), 128))
                        ], 544), [
                          [Xt, C.format]
                        ])
                      ]),
                      l("div", cO, [
                        l("label", uO, h(g(b)("library", "Subject")), 1),
                        Ie(l("input", {
                          id: "library-mobile-subject-search",
                          "onUpdate:modelValue": u[71] || (u[71] = (s) => x.value = s),
                          type: "search",
                          name: "subjectSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search subjects"),
                          title: g(b)("library", "Exact subject matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-subject-suggestions",
                          "aria-expanded": R.value && j.value.length > 0 ? "true" : "false",
                          onFocus: u[72] || (u[72] = (s) => R.value = !0),
                          onKeydown: u[73] || (u[73] = at((s) => R.value = !1, ["escape"]))
                        }, null, 40, dO), [
                          [ft, x.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "subject",
                          value: C.subject
                        }, null, 8, fO),
                        oi("subject") ? (m(), _("small", pO, h(xi("subject")), 1)) : $("", !0),
                        Ai.value && R.value && j.value.length > 0 ? (m(), _("ul", hO, [
                          (m(!0), _(ie, null, ke(j.value, (s) => (m(), _("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: u[74] || (u[74] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Hd(s, O)
                            }, h(s), 41, vO)
                          ]))), 128))
                        ])) : $("", !0)
                      ]),
                      l("div", gO, [
                        l("label", bO, h(g(b)("library", "Classification")), 1),
                        Ie(l("input", {
                          id: "library-mobile-classification-search",
                          "onUpdate:modelValue": u[75] || (u[75] = (s) => V.value = s),
                          type: "search",
                          name: "classificationSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search classifications"),
                          title: g(b)("library", "Exact classification matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-classification-suggestions",
                          "aria-expanded": pe.value && he.value.length > 0 ? "true" : "false",
                          onFocus: u[76] || (u[76] = (s) => pe.value = !0),
                          onKeydown: u[77] || (u[77] = at((s) => pe.value = !1, ["escape"]))
                        }, null, 40, mO), [
                          [ft, V.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "classification",
                          value: C.classification
                        }, null, 8, yO),
                        Ai.value && pe.value && he.value.length > 0 ? (m(), _("ul", _O, [
                          (m(!0), _(ie, null, ke(he.value, (s) => (m(), _("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: u[78] || (u[78] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => zd(s, O)
                            }, h(s), 41, wO)
                          ]))), 128))
                        ])) : $("", !0)
                      ])
                    ]),
                    l("fieldset", SO, [
                      l("legend", null, h(g(b)("library", "Location")), 1),
                      l("label", null, [
                        ge(h(g(b)("library", "Shelf")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[79] || (u[79] = (s) => C.shelf = s),
                          name: "shelf",
                          onChange: u[80] || (u[80] = (s) => si(s))
                        }, [
                          l("option", CO, h(g(b)("library", "All shelves")), 1),
                          (m(!0), _(ie, null, ke(k.value, (s) => (m(), _("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, h(s), 9, kO))), 128))
                        ], 544), [
                          [Xt, C.shelf]
                        ])
                      ]),
                      l("div", TO, [
                        l("label", EO, h(g(b)("library", "Folder")), 1),
                        Ie(l("input", {
                          id: "library-mobile-folder-search",
                          "onUpdate:modelValue": u[81] || (u[81] = (s) => tt.value = s),
                          type: "search",
                          name: "folderSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Type at least 3 path characters"),
                          title: g(b)("library", "Select an exact folder path"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-folder-suggestions",
                          "aria-expanded": ut.value && Dt.value.length > 0 ? "true" : "false",
                          onFocus: u[82] || (u[82] = (s) => ut.value = !0),
                          onKeydown: u[83] || (u[83] = at((s) => ut.value = !1, ["escape"]))
                        }, null, 40, AO), [
                          [ft, tt.value]
                        ]),
                        Ai.value && ut.value && Dt.value.length > 0 ? (m(), _("ul", xO, [
                          (m(!0), _(ie, null, ke(Dt.value, (s) => (m(), _("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: u[84] || (u[84] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => jd(s, O)
                            }, h(s), 41, OO)
                          ]))), 128))
                        ])) : $("", !0)
                      ])
                    ]),
                    l("fieldset", NO, [
                      l("legend", null, h(g(b)("library", "Review")), 1),
                      l("label", null, [
                        ge(h(g(b)("library", "Scan status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[85] || (u[85] = (s) => C.status = s),
                          name: "status",
                          onChange: u[86] || (u[86] = (s) => si(s))
                        }, [
                          l("option", LO, h(g(b)("library", "All scan statuses")), 1),
                          (m(!0), _(ie, null, ke(D.value, (s) => (m(), _("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, h(s), 9, RO))), 128))
                        ], 544), [
                          [Xt, C.status]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Workflow status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[87] || (u[87] = (s) => C.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: u[88] || (u[88] = (s) => si(s))
                        }, [
                          l("option", IO, h(g(b)("library", "All workflow statuses")), 1),
                          (m(!0), _(ie, null, ke(M.value, (s) => (m(), _("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, h(s), 9, PO))), 128))
                        ], 544), [
                          [Xt, C.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Suggested updates")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[89] || (u[89] = (s) => C.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: u[90] || (u[90] = (s) => si(s))
                        }, [
                          l("option", $O, h(g(b)("library", "All metadata")), 1),
                          l("option", FO, h(g(b)("library", "Suggested updates")), 1)
                        ], 544), [
                          [Xt, C.scannerConflicts]
                        ])
                      ])
                    ]),
                    l("fieldset", DO, [
                      l("legend", null, h(g(b)("library", "Personal / display")), 1),
                      l("div", MO, [
                        l("label", zO, h(g(b)("library", "Nextcloud tag")), 1),
                        Ie(l("input", {
                          id: "library-tag-search",
                          "onUpdate:modelValue": u[91] || (u[91] = (s) => $e.value = s),
                          type: "search",
                          name: "tagSearch",
                          autocomplete: "off",
                          placeholder: g(b)("library", "Search tags"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-tag-suggestions",
                          "aria-expanded": He.value && vt.value.length > 0 ? "true" : "false",
                          onFocus: u[92] || (u[92] = (s) => He.value = !0),
                          onKeydown: u[93] || (u[93] = at((s) => He.value = !1, ["escape"]))
                        }, null, 40, UO), [
                          [ft, $e.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "tag",
                          value: C.tag
                        }, null, 8, jO),
                        He.value && vt.value.length > 0 ? (m(), _("ul", BO, [
                          (m(!0), _(ie, null, ke(vt.value, (s) => (m(), _("li", {
                            key: s,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-tag-suggestion",
                              onMousedown: u[94] || (u[94] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Ud(s, O)
                            }, h(s), 41, HO)
                          ]))), 128))
                        ])) : $("", !0),
                        l("button", {
                          type: "submit",
                          class: be(["button secondary library-tag-apply", nn("tag")])
                        }, h(g(b)("library", "Apply tag")), 3)
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Sort")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[95] || (u[95] = (s) => C.sort = s),
                          name: "sort",
                          onChange: Nt
                        }, [
                          l("option", VO, h(g(b)("library", "Title")), 1),
                          l("option", KO, h(g(b)("library", "Date added")), 1),
                          l("option", GO, h(g(b)("library", "Publication date")), 1),
                          l("option", qO, h(g(b)("library", "Series")), 1),
                          l("option", WO, h(g(b)("library", "Recently opened")), 1),
                          l("option", YO, h(g(b)("library", "Format")), 1)
                        ], 544), [
                          [Xt, C.sort]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "View")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[96] || (u[96] = (s) => C.view = s),
                          name: "view",
                          onChange: Nt
                        }, [
                          l("option", XO, h(g(b)("library", "Compact")), 1),
                          l("option", ZO, h(g(b)("library", "Gallery")), 1),
                          l("option", JO, h(g(b)("library", "List")), 1),
                          l("option", QO, h(g(b)("library", "Shelf")), 1)
                        ], 544), [
                          [Xt, C.view]
                        ])
                      ])
                    ]),
                    l("div", e3, [
                      re.value.length > 0 ? (m(), _("a", {
                        key: 0,
                        href: va(),
                        class: "button secondary library-mobile-filter-clear",
                        onClick: ye(ga, ["prevent"])
                      }, h(g(b)("library", "Clear all")), 9, t3)) : $("", !0),
                      l("button", i3, h(Cg.value), 1)
                    ])
                  ], 40, kx)
                ], 32),
                l("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(b)("library", "One catalogue workspace")
                }, [
                  l("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(b)("library", "Catalogue toolbar"),
                    onSubmit: ye(Nt, ["prevent"])
                  }, [
                    (m(!0), _(ie, null, ke(Eg.value, (s) => (m(), _("input", {
                      key: s.key,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, r3))), 128)),
                    l("label", o3, [
                      ge(h(g(b)("library", "Sort")), 1),
                      Ie(l("select", {
                        "onUpdate:modelValue": u[97] || (u[97] = (s) => C.sort = s),
                        name: "sort",
                        onChange: Nt
                      }, [
                        l("option", s3, h(g(b)("library", "Title")), 1),
                        l("option", l3, h(g(b)("library", "Date added")), 1),
                        l("option", c3, h(g(b)("library", "Publication date")), 1),
                        l("option", u3, h(g(b)("library", "Series")), 1),
                        l("option", d3, h(g(b)("library", "Recently opened")), 1),
                        l("option", f3, h(g(b)("library", "Format")), 1)
                      ], 544), [
                        [Xt, C.sort]
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
                        class: be({ active: Et.value === "compact" }),
                        "aria-pressed": Et.value === "compact" ? "true" : "false",
                        onClick: u[98] || (u[98] = (s) => us("compact"))
                      }, h(g(b)("library", "Compact")), 11, h3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: be({ active: Et.value === "gallery" }),
                        "aria-pressed": Et.value === "gallery" ? "true" : "false",
                        onClick: u[99] || (u[99] = (s) => us("gallery"))
                      }, h(g(b)("library", "Gallery")), 11, v3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: be({ active: Et.value === "list" }),
                        "aria-pressed": Et.value === "list" ? "true" : "false",
                        onClick: u[100] || (u[100] = (s) => us("list"))
                      }, h(g(b)("library", "List")), 11, g3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: be({ active: Et.value === "shelf" }),
                        "aria-pressed": Et.value === "shelf" ? "true" : "false",
                        onClick: u[101] || (u[101] = (s) => us("shelf"))
                      }, h(g(b)("library", "Shelf")), 11, b3)
                    ], 8, p3)
                  ], 40, a3),
                  l("section", m3, [
                    l("h3", {
                      title: g(b)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, h(g(b)("library", "Collections")), 9, y3),
                    l("form", {
                      method: "post",
                      action: sc.value,
                      class: "library-saved-collection-save-form",
                      title: mc.value ? "" : g(b)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ti.value
                      }, null, 8, w3),
                      l("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: lb.value
                      }, null, 8, S3),
                      l("label", null, [
                        ge(h(g(b)("library", "Collection name")), 1),
                        l("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(b)("library", "e.g. Bremen photo books"),
                          disabled: !mc.value,
                          autocomplete: "off"
                        }, null, 8, C3)
                      ]),
                      l("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !mc.value,
                        title: g(b)("library", "Save current view")
                      }, h(g(b)("library", "Save")), 9, k3)
                    ], 8, _3)
                  ]),
                  Oi.value.length > 0 ? (m(), _("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(b)("library", "Batch actions for selected publications")
                  }, [
                    l("summary", E3, [
                      u[125] || (u[125] = l("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      l("span", {
                        class: "library-workspace-panel-title",
                        title: g(b)("library", "Batch actions for selected publications")
                      }, h(g(b)("library", "Batch actions")), 9, A3),
                      l("small", x3, h(g(b)("library", "Batch actions for selected publications")), 1),
                      l("b", O3, h(g(ui)("library", "%n publication selected", "%n publications selected", Oi.value.length)), 1)
                    ]),
                    l("p", N3, h(g(ui)("library", "%n publication selected", "%n publications selected", Oi.value.length)), 1),
                    l("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Ng
                    }, [
                      l("form", {
                        method: "post",
                        action: ac.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ti.value
                        }, null, 8, R3),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, I3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(b)("library", "Applies only to the selected publications.")
                        }, h(g(b)("library", "Apply")), 9, P3)
                      ], 8, L3),
                      l("form", {
                        method: "post",
                        action: rc.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ti.value
                        }, null, 8, F3),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Remove tag")), 1),
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
                          class: "button secondary",
                          title: g(b)("library", "Removes the tag only from the selected publications.")
                        }, h(g(b)("library", "Remove")), 9, M3)
                      ], 8, $3),
                      l("form", {
                        method: "post",
                        action: Ui.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ti.value
                        }, null, 8, U3),
                        (m(!0), _(ie, null, ke(Zo.value, (s) => (m(), _("input", {
                          key: `reset-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, j3))), 128)),
                        u[126] || (u[126] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, h(g(b)("library", "Reset metadata")), 9, B3)
                      ], 8, z3),
                      l("form", {
                        method: "post",
                        action: Ko.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ti.value
                        }, null, 8, V3),
                        (m(!0), _(ie, null, ke(Zo.value, (s) => (m(), _("input", {
                          key: `edit-preview-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, K3))), 128)),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Field")), 1),
                          l("select", G3, [
                            l("option", q3, h(g(b)("library", "Publication type")), 1),
                            l("option", W3, h(g(b)("library", "Subtitle")), 1),
                            l("option", Y3, h(g(b)("library", "Creators")), 1),
                            l("option", X3, h(g(b)("library", "Series / periodical")), 1),
                            l("option", Z3, h(g(b)("library", "Publication date")), 1),
                            l("option", J3, h(g(b)("library", "Language")), 1),
                            l("option", Q3, h(g(b)("library", "Publisher")), 1),
                            l("option", eN, h(g(b)("library", "Subjects")), 1),
                            l("option", tN, h(g(b)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(b)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, iN)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Preview first, then apply from the review page.")
                        }, h(g(b)("library", "Preview edit")), 9, nN)
                      ], 8, H3),
                      l("form", {
                        method: "post",
                        action: ja.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ti.value
                        }, null, 8, rN),
                        (m(!0), _(ie, null, ke(Zo.value, (s) => (m(), _("input", {
                          key: `cover-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, oN))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, h(g(b)("library", "Fresh covers")), 9, sN)
                      ], 8, aN)
                    ], 32)
                  ], 8, T3)) : $("", !0)
                ], 8, n3),
                Xo.value ? (m(), _("p", lN, h(Xo.value), 1)) : $("", !0),
                yr.value ? (m(), _("p", cN, h(yr.value), 1)) : $("", !0),
                mr.value ? (m(), _("p", uN, h(mr.value), 1)) : $("", !0),
                l("div", dN, [
                  Ot.loading ? (m(), _("span", fN, h(g(b)("library", "Updating catalogue…")), 1)) : Ot.completed ? (m(), _("span", pN, h(g(ui)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(z.value.total || 0))), 1)) : $("", !0)
                ]),
                vr.value ? (m(), _("section", hN, [
                  l("p", vN, h(ra.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: Ba.value ? g(b)("library", "Items by this creator, sorted by publication context when available.") : In.value ? g(b)("library", "Items from this publication year, sorted by publication date when available.") : g(b)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, h(gr.value), 9, gN),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(b)("library", "Discovery summary")
                  }, [
                    l("span", null, h(g(ui)("library", "%n item", "%n items", z.value.total)), 1),
                    N.value?.earliestYear && N.value?.latestYear ? (m(), _("span", mN, h(N.value.earliestYear) + "–" + h(N.value.latestYear), 1)) : $("", !0),
                    N.value?.datedCount ? (m(), _("span", yN, h(N.value.datedCount) + " " + h(g(b)("library", "dated")), 1)) : $("", !0),
                    N.value?.undatedCount > 0 ? (m(), _("span", _N, h(N.value.undatedCount) + " " + h(g(b)("library", "undated")), 1)) : $("", !0)
                  ], 8, bN),
                  hr.value && N.value ? (m(), _("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(b)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, h(g(b)("library", "Publication contents")), 1),
                    l("span", null, h(g(ui)("library", "%n item", "%n items", N.value.itemCount)), 1),
                    N.value.earliestYear && N.value.latestYear ? (m(), _("span", SN, h(N.value.earliestYear) + "–" + h(N.value.latestYear), 1)) : $("", !0),
                    l("span", null, h(N.value.datedCount) + " " + h(g(b)("library", "with issue/date coverage")), 1),
                    N.value.undatedCount > 0 ? (m(), _("span", CN, h(N.value.undatedCount) + " " + h(g(b)("library", "without dates yet")), 1)) : $("", !0),
                    l("span", null, h(g(b)("library", "read-only grouping")), 1)
                  ], 8, wN)) : $("", !0),
                  hr.value && N.value?.issueGroups?.length ? (m(), _("section", kN, [
                    l("div", null, [
                      l("p", TN, h(g(b)("library", "Issue order")), 1),
                      l("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(b)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, h(g(b)("library", "Read-only issue/date grouping")), 9, EN)
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
                      ], 8, xN))), 128))
                    ], 8, AN),
                    N.value.gapRanges?.length ? (m(), _("p", ON, h(g(b)("library", "Gap")) + ": " + h(N.value.gapRanges.join(", ")), 1)) : $("", !0),
                    (m(!0), _(ie, null, ke(N.value.issueGroups, (s) => (m(), _("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, h(s.label), 1),
                      l("ol", null, [
                        (m(!0), _(ie, null, ke(s.items, (O, W) => (m(), _("li", {
                          key: O.itemId
                        }, [
                          l("span", NN, h(O.issueLabel), 1),
                          l("a", {
                            href: O.detailsUrl || "#"
                          }, h(O.title), 9, LN),
                          l("small", null, [
                            ge(h(O.publicationType), 1),
                            O.publicationDate ? (m(), _(ie, { key: 0 }, [
                              ge(" · " + h(O.publicationDate), 1)
                            ], 64)) : $("", !0)
                          ]),
                          l("small", RN, [
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
                    N.value.unknownIssueItems?.length ? (m(), _("details", IN, [
                      l("summary", {
                        title: g(b)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, h(g(b)("library", "Unknown issue/date")) + " · " + h(N.value.unknownIssueItems.length), 9, PN)
                    ])) : $("", !0)
                  ])) : $("", !0),
                  l("p", null, [
                    l("a", {
                      href: gt.value,
                      class: "button secondary library-discovery-back-link"
                    }, h(g(b)("library", "Back to full catalogue")), 9, $N)
                  ])
                ])) : $("", !0),
                l("div", FN, [
                  l("p", DN, [
                    ge(h(g(b)("library", "Showing")) + " " + h(z.value.from) + "–" + h(z.value.to) + " " + h(g(b)("library", "of")) + " " + h(z.value.total) + " " + h(g(b)("library", "catalogue items")), 1),
                    re.value.length > 0 ? (m(), _("span", MN, [
                      u[127] || (u[127] = ge(" · ", -1)),
                      l("a", {
                        href: va(),
                        onClick: ye(ga, ["prevent"])
                      }, h(g(b)("library", "Clear all filters")), 9, zN)
                    ])) : $("", !0)
                  ]),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(b)("library", "Catalogue pagination")
                  }, [
                    l("span", jN, [
                      ge(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                      z.value.total > 0 ? (m(), _("span", BN, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : $("", !0)
                    ]),
                    z.value.previousUrl ? (m(), _("a", {
                      key: 0,
                      href: z.value.previousUrl
                    }, h(g(b)("library", "Previous")), 9, HN)) : (m(), _("span", VN, h(g(b)("library", "Previous")), 1)),
                    z.value.nextUrl ? (m(), _("a", {
                      key: 2,
                      href: z.value.nextUrl
                    }, h(g(b)("library", "Next")), 9, KN)) : (m(), _("span", GN, h(g(b)("library", "Next")), 1))
                  ], 8, UN)
                ]),
                y.value.length === 0 ? (m(), _("div", {
                  key: 4,
                  class: be(["library-empty-content", { "library-first-run-guidance": Bi.value || tn.value, "library-filter-empty-state": ri.value && !Bi.value && !tn.value }]),
                  role: "status"
                }, [
                  Bi.value ? (m(), _(ie, { key: 0 }, [
                    l("h3", {
                      title: g(b)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, h(g(b)("library", "Start with one Library root")), 9, qN),
                    l("p", WN, [
                      l("a", {
                        href: On.value,
                        class: "button primary"
                      }, h(g(b)("library", "Add a Library root")), 9, YN),
                      l("span", XN, h(g(b)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : tn.value ? (m(), _(ie, { key: 1 }, [
                    l("h3", {
                      title: g(b)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, h(g(b)("library", "No enabled Library roots")), 9, ZN),
                    l("p", JN, [
                      l("a", {
                        href: On.value,
                        class: "button primary"
                      }, h(g(b)("library", "Open Library settings")), 9, QN)
                    ])
                  ], 64)) : ri.value ? (m(), _(ie, { key: 2 }, [
                    l("h3", {
                      title: g(b)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, h(g(b)("library", "No items match these filters")), 9, eL),
                    re.value.length > 0 ? (m(), _("nav", {
                      key: 0,
                      class: "library-empty-filter-chips",
                      "aria-label": g(b)("library", "Remove active filters")
                    }, [
                      (m(!0), _(ie, null, ke(re.value, (s) => (m(), _("a", {
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
                          u[128] || (u[128] = ge(h(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: s.value
                          }, h(s.displayValue), 9, nL)
                        ], 64)) : $("", !0),
                        u[129] || (u[129] = ge()),
                        u[130] || (u[130] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, iL))), 128))
                    ], 8, tL)) : $("", !0),
                    mt.value ? (m(), _("p", aL, h(g(b)("library", "Try removing {filter}.", { filter: mt.value.displayValue ? `${mt.value.label}: ${mt.value.displayValue}` : mt.value.label })), 1)) : $("", !0),
                    l("p", rL, [
                      xt.value ? (m(), _("a", {
                        key: 0,
                        href: rb(),
                        class: "button secondary library-empty-clear-search",
                        onClick: u[102] || (u[102] = ye((s) => Ir("q"), ["prevent"]))
                      }, h(g(b)("library", "Clear search")), 9, oL)) : $("", !0),
                      re.value.length > 0 ? (m(), _("a", {
                        key: 1,
                        href: va(),
                        class: "button primary",
                        onClick: ye(ga, ["prevent"])
                      }, h(g(b)("library", "Clear all filters")), 9, sL)) : $("", !0)
                    ])
                  ], 64)) : (m(), _(ie, { key: 3 }, [
                    l("h3", {
                      title: g(b)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, h(g(b)("library", "No catalogue items yet")), 9, lL),
                    l("p", cL, [
                      l("a", {
                        href: On.value,
                        class: "button primary"
                      }, h(g(b)("library", "Run a scan from settings")), 9, uL)
                    ])
                  ], 64))
                ], 2)) : $("", !0),
                y.value.length > 0 ? (m(), _("label", dL, [
                  l("input", {
                    type: "checkbox",
                    checked: Oi.value.length === y.value.length,
                    onChange: xg
                  }, null, 40, fL),
                  ge(" " + h(g(b)("library", "Select all publications on this page")), 1)
                ])) : $("", !0),
                y.value.length > 0 && Et.value === "list" ? (m(), _("ul", pL, [
                  (m(!0), _(ie, null, ke(y.value, (s) => (m(), _("li", {
                    key: s.id,
                    class: be(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Qo.value.has(Number(s.id)), "library-catalogue-list-row--open": Pn.value && Number(sa.value) === Number(s.id) }])
                  }, [
                    l("label", hL, [
                      l("input", {
                        type: "checkbox",
                        checked: Qo.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (O) => kd(s.id, O.currentTarget.checked)
                      }, null, 40, vL)
                    ]),
                    l("div", gL, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (O) => Hi(s, O)
                      }, [
                        l("bdi", mL, h(s.title), 1)
                      ], 8, bL),
                      s.creators ? (m(), _("span", yL, [
                        l("bdi", _L, h(s.creators), 1)
                      ])) : $("", !0)
                    ]),
                    l("dl", wL, [
                      s.publication ? (m(), _("div", SL, [
                        l("dt", null, h(g(b)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", CL, h(s.publication), 1)
                        ])
                      ])) : $("", !0),
                      s.publicationDate ? (m(), _("div", kL, [
                        l("dt", null, h(g(b)("library", "Publication date")), 1),
                        l("dd", null, h(s.publicationDate), 1)
                      ])) : $("", !0),
                      s.extension || s.publicationType ? (m(), _("div", TL, [
                        l("dt", null, h(g(b)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: be(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, h(s.extension ? ds(s.extension) : s.publicationType), 11, EL)
                        ])
                      ])) : $("", !0),
                      s.shelf ? (m(), _("div", AL, [
                        l("dt", null, h(g(b)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", xL, h(s.shelf), 1)
                        ])
                      ])) : $("", !0)
                    ]),
                    l("div", OL, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (O) => gi(s, O)
                      }, h(g(b)("library", "Open")), 9, NL),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (O) => Hi(s, O)
                      }, h(g(b)("library", "Details")), 9, LL)
                    ])
                  ], 2))), 128))
                ])) : y.value.length > 0 ? (m(), _("div", {
                  key: 7,
                  class: be(["library-cover-gallery", wr.value])
                }, [
                  (m(!0), _(ie, null, ke(y.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: be(["library-cover-card", { "library-cover-card--cover-loaded": Pr(s) === "loaded", "library-cover-card--cover-error": Pr(s) === "error", "library-cover-card--selected": Qo.value.has(Number(s.id)), "library-cover-card--open": Pn.value && Number(sa.value) === Number(s.id) }])
                  }, [
                    l("label", RL, [
                      l("input", {
                        type: "checkbox",
                        checked: Qo.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (O) => kd(s.id, O.currentTarget.checked)
                      }, null, 40, IL)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": Pn.value && Number(sa.value) === Number(s.id) ? "true" : "false",
                      onClick: (O) => Hi(s, O)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, h(g(b)("library", "Details")), 9, $L),
                      l("span", FL, [
                        Pr(s) === "loading" ? (m(), _("span", DL)) : $("", !0),
                        l("img", {
                          class: be(["library-cover-image", { "library-cover-image--loaded": Pr(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (O) => fb(s),
                          onError: (O) => pb(s)
                        }, null, 42, ML),
                        Pr(s) === "error" ? (m(), _("span", zL, h(g(b)("library", "Cover unavailable")), 1)) : $("", !0)
                      ])
                    ], 8, PL),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: ye((O) => tf(s, O), ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ti.value
                      }, null, 8, jL),
                      u[131] || (u[131] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("input", {
                        type: "hidden",
                        name: "starred",
                        value: s.starred ? "0" : "1"
                      }, null, 8, BL),
                      l("button", {
                        type: "submit",
                        class: be(["library-cover-star-button", { "library-cover-star-button--starred": s.starred }]),
                        "aria-pressed": s.starred ? "true" : "false",
                        title: s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-label": s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-busy": $r[s.id] ? "true" : void 0,
                        disabled: $r[s.id],
                        onClick: ye((O) => tf(s, O), ["prevent"])
                      }, h(s.starred ? "★" : "☆"), 11, HL),
                      Fr[s.id] ? (m(), _("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, h(Fr[s.id]), 9, VL)) : $("", !0)
                    ], 40, UL),
                    l("div", KL, [
                      l("div", GL, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (O) => Hi(s, O)
                          }, [
                            l("bdi", YL, h(s.title), 1)
                          ], 8, WL)
                        ], 8, qL),
                        s.creators ? (m(), _("p", XL, [
                          l("bdi", ZL, h(s.creators), 1)
                        ])) : $("", !0),
                        Jd(s) ? (m(), _("p", JL, [
                          l("bdi", QL, h(Jd(s)), 1)
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
                  l("span", tR, [
                    ge(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", iR, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : $("", !0)
                  ]),
                  z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, h(g(b)("library", "Previous")), 9, nR)) : (m(), _("span", aR, h(g(b)("library", "Previous")), 1)),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, h(g(b)("library", "Next")), 9, rR)) : (m(), _("span", oR, h(g(b)("library", "Next")), 1))
                ], 8, eR)) : $("", !0)
              ], 10, yx))
            ], 8, QE)
          ]),
          _: 1
        }),
        xe(g(Gk), {
          ref_key: "sidebarComponent",
          ref: ca,
          class: "library-native-item-sidebar",
          open: Pn.value,
          "no-toggle": "",
          loading: Yt.loading,
          name: Ce.value?.title || g(b)("library", "Publication details"),
          subname: Ce.value?.creators || "",
          role: ua.value ? "dialog" : void 0,
          "aria-modal": ua.value ? "true" : void 0,
          "aria-labelledby": ua.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": ua.value && Ce.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Id,
          onClosed: jg,
          onClose: Ar
        }, {
          default: Fe(() => [
            l("div", sR, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Td,
                class: "hidden-visually",
                tabindex: "-1"
              }, h(Ce.value?.title || g(b)("library", "Publication details")), 513),
              Yt.loading && !Ce.value ? (m(), _("p", lR, h(g(b)("library", "Loading publication details…")), 1)) : Yt.error ? (m(), _("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Yt.missing ? "status" : "alert"
              }, [
                l("p", null, h(Yt.error), 1),
                Yt.missing ? $("", !0) : (m(), _("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: u[103] || (u[103] = (s) => Er(sa.value, { historyMode: "none" }))
                }, h(g(b)("library", "Try again")), 1))
              ], 8, cR)) : Ce.value ? (m(), _(ie, { key: 2 }, [
                l("p", uR, h(g(b)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", dR, [
                  l("span", fR, h(g(b)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Ce.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, pR),
                  l("div", hR, [
                    l("p", vR, [
                      l("bdi", gR, h(Ce.value.publicationType || g(b)("library", "Publication")), 1),
                      Ce.value.extension ? (m(), _("span", bR, [
                        u[132] || (u[132] = ge(" · ", -1)),
                        l("bdi", mR, h(ds(Ce.value.extension)), 1)
                      ])) : $("", !0)
                    ]),
                    l("div", yR, [
                      l("a", {
                        class: "button primary",
                        href: Ce.value.openUrl,
                        onClick: u[104] || (u[104] = (s) => gi(Ce.value, s))
                      }, h(g(b)("library", "Open")), 9, _R),
                      xe(g(pd), {
                        "aria-label": g(b)("library", "File and maintenance actions")
                      }, {
                        default: Fe(() => [
                          xe(g(au), {
                            href: Ce.value.filesUrl
                          }, {
                            default: Fe(() => [
                              ge(h(g(b)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          xe(g(au), {
                            href: Ce.value.downloadUrl
                          }, {
                            default: Fe(() => [
                              ge(h(g(b)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          xe(g(au), {
                            href: Ce.value.detailsUrl
                          }, {
                            default: Fe(() => [
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
                  (m(), _(ie, null, ke(Rg, (s) => l("button", {
                    key: s.key,
                    type: "button",
                    class: be({ active: la.value === s.key }),
                    "aria-current": la.value === s.key ? "page" : void 0,
                    onClick: (O) => la.value = s.key
                  }, h(g(b)("library", s.label)), 11, SR)), 64))
                ], 8, wR),
                la.value === "overview" ? (m(), _("section", CR, [
                  l("h3", kR, h(g(b)("library", "Overview")), 1),
                  Ed.value ? (m(), _("p", TR, [
                    l("bdi", ER, h(Ed.value), 1)
                  ])) : $("", !0),
                  l("dl", AR, [
                    Ce.value.publication ? (m(), _("div", xR, [
                      l("dt", null, h(g(b)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: ns("publication", Ce.value.publication),
                          title: g(b)("library", "Filter catalogue by this series"),
                          onClick: u[105] || (u[105] = (s) => as(s, "publication", Ce.value.publication))
                        }, [
                          l("bdi", NR, h(Ce.value.publication), 1)
                        ], 8, OR)
                      ])
                    ])) : $("", !0),
                    Ce.value.publicationDate ? (m(), _("div", LR, [
                      l("dt", null, h(g(b)("library", "Date")), 1),
                      l("dd", null, [
                        da.value ? (m(), _("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: ns("year", da.value),
                          title: g(b)("library", "Filter catalogue by this publication year"),
                          onClick: u[106] || (u[106] = (s) => as(s, "year", da.value))
                        }, h(da.value), 9, RR)) : $("", !0),
                        da.value && Ce.value.publicationDate !== da.value ? (m(), _("span", IR, " · ")) : $("", !0),
                        Ce.value.publicationDate !== da.value ? (m(), _("span", PR, h(Ce.value.publicationDate), 1)) : $("", !0)
                      ])
                    ])) : $("", !0),
                    Ce.value.publisher ? (m(), _("div", $R, [
                      l("dt", null, h(g(b)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: ns("publisher", Ce.value.publisher),
                          title: g(b)("library", "Filter catalogue by this publisher"),
                          onClick: u[107] || (u[107] = (s) => as(s, "publisher", Ce.value.publisher))
                        }, [
                          l("bdi", DR, h(Ce.value.publisher), 1)
                        ], 8, FR)
                      ])
                    ])) : $("", !0),
                    Ad.value.length ? (m(), _("div", MR, [
                      l("dt", null, h(g(b)("library", "Language")), 1),
                      l("dd", zR, [
                        (m(!0), _(ie, null, ke(Ad.value, (s) => (m(), _("a", {
                          key: s,
                          class: "library-detail-facet-link",
                          href: ns("language", s),
                          title: g(b)("library", "Filter catalogue by this language"),
                          onClick: (O) => as(O, "language", s)
                        }, [
                          l("bdi", jR, h(s), 1)
                        ], 8, UR))), 128))
                      ])
                    ])) : $("", !0),
                    Ce.value.shelf ? (m(), _("div", BR, [
                      l("dt", null, h(g(b)("library", "Shelf")), 1),
                      l("dd", null, h(Ce.value.shelf), 1)
                    ])) : $("", !0)
                  ])
                ])) : la.value === "metadata" ? (m(), _("section", HR, [
                  l("h3", VR, h(g(b)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: ye(zg, ["prevent"])
                  }, [
                    l("label", null, [
                      ge(h(g(b)("library", "Title")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": u[108] || (u[108] = (s) => zt.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ft, zt.title]
                      ])
                    ]),
                    l("label", null, [
                      ge(h(g(b)("library", "Publication date")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": u[109] || (u[109] = (s) => zt.publicationDate = s),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(b)("library", "e.g. 2026")
                      }, null, 8, KR), [
                        [ft, zt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, h(g(b)("library", "Identifiers")), 1),
                      (m(!0), _(ie, null, ke(zt.identifiers, (s, O) => (m(), _("div", {
                        key: O,
                        class: "library-sidebar-identifier"
                      }, [
                        Ie(l("input", {
                          "onUpdate:modelValue": (W) => s.scheme = W,
                          "aria-label": g(b)("library", "Identifier type"),
                          placeholder: g(b)("library", "Identifier type")
                        }, null, 8, GR), [
                          [ft, s.scheme]
                        ]),
                        Ie(l("input", {
                          "onUpdate:modelValue": (W) => s.displayValue = W,
                          "aria-label": g(b)("library", "Identifier value")
                        }, null, 8, qR), [
                          [ft, s.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (W) => Mg(O)
                        }, h(g(b)("library", "Remove")), 9, WR)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Dg
                      }, h(g(b)("library", "Add identifier")), 1)
                    ]),
                    l("p", YR, h(g(b)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Ni.error ? (m(), _("p", XR, h(Ni.error), 1)) : Ni.saved ? (m(), _("p", ZR, h(g(b)("library", "Metadata saved.")), 1)) : $("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Ni.saving
                    }, h(Ni.saving ? g(b)("library", "Saving…") : g(b)("library", "Save metadata")), 9, JR)
                  ], 32),
                  rs(Ce.value).length ? (m(), _("section", QR, [
                    l("h4", e4, h(g(b)("library", "Scanner suggestions")), 1),
                    l("p", t4, h(g(b)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (m(!0), _(ie, null, ke(rs(Ce.value), (s) => (m(), _("div", {
                        key: s.field
                      }, [
                        l("dt", null, h(s.field) + " · " + h(s.sourceProvenance), 1),
                        l("dd", null, [
                          ge(h(g(b)("library", "Current")) + ": " + h(s.currentValue || "—"), 1),
                          u[133] || (u[133] = l("br", null, null, -1)),
                          ge(h(g(b)("library", "Suggestion")) + ": " + h(s.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : $("", !0)
                ])) : (m(), _("section", i4, [
                  l("h3", n4, h(g(b)("library", "Activity")), 1),
                  l("dl", a4, [
                    l("div", null, [
                      l("dt", null, h(g(b)("library", "Scan status")), 1),
                      l("dd", null, h(Ce.value.scanStatus || "—"), 1)
                    ]),
                    Ce.value.workflowStatus ? (m(), _("div", r4, [
                      l("dt", null, h(g(b)("library", "Workflow")), 1),
                      l("dd", null, h(Ce.value.workflowStatus), 1)
                    ])) : $("", !0),
                    Ce.value.metadataSource ? (m(), _("div", o4, [
                      l("dt", null, h(g(b)("library", "Metadata source")), 1),
                      l("dd", null, h(Ce.value.metadataSource), 1)
                    ])) : $("", !0),
                    Ce.value.cachedPath ? (m(), _("div", s4, [
                      l("dt", null, h(g(b)("library", "File")), 1),
                      l("dd", l4, [
                        Ce.value.openUrl ? (m(), _("a", {
                          key: 0,
                          href: Ce.value.openUrl,
                          onClick: u[110] || (u[110] = (s) => gi(Ce.value, s))
                        }, [
                          l("bdi", u4, h(Ce.value.cachedPath), 1)
                        ], 8, c4)) : (m(), _("bdi", d4, h(Ce.value.cachedPath), 1))
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
                    disabled: !ts.value,
                    onClick: u[111] || (u[111] = (s) => os(ts.value))
                  }, h(g(b)("library", "Previous item")), 9, p4),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !is.value,
                    onClick: u[112] || (u[112] = (s) => os(is.value))
                  }, h(g(b)("library", "Next item")), 9, h4)
                ], 8, f4)
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
function y4() {
  window.LibraryStartupWatchdog?.fail();
}
function _4(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = td("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !_4(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Jy(m4, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  y4(), console.error("[library] Vue startup failed", e);
}
