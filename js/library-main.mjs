// @__NO_SIDE_EFFECTS__
function Du(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const qe = {}, Qa = [], Si = () => {
}, Wp = () => !1, Nl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ll = (e) => e.startsWith("onUpdate:"), wt = Object.assign, Mu = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, mb = Object.prototype.hasOwnProperty, Ze = (e, t) => mb.call(e, t), Ae = Array.isArray, qn = (e) => Ro(e) === "[object Map]", Da = (e) => Ro(e) === "[object Set]", tf = (e) => Ro(e) === "[object Date]", De = (e) => typeof e == "function", lt = (e) => typeof e == "string", Pi = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", Yp = (e) => (Je(e) || De(e)) && De(e.then) && De(e.catch), Xp = Object.prototype.toString, Ro = (e) => Xp.call(e), yb = (e) => Ro(e).slice(8, -1), Zp = (e) => Ro(e) === "[object Object]", zu = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zr = /* @__PURE__ */ Du(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((i) => t[i] || (t[i] = e(i)));
}, _b = /-\w/g, Wt = Rl(
  (e) => e.replace(_b, (t) => t.slice(1).toUpperCase())
), wb = /\B([A-Z])/g, wn = Rl(
  (e) => e.replace(wb, "-$1").toLowerCase()
), Il = Rl((e) => e.charAt(0).toUpperCase() + e.slice(1)), yc = Rl(
  (e) => e ? `on${Il(e)}` : ""
), $t = (e, t) => !Object.is(e, t), Ts = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, Jp = (e, t, i, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: i
  });
}, Pl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Sb = (e) => {
  const t = lt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let nf;
const $l = () => nf || (nf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
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
function Ns(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !lt(t) && (e.class = be(t)), i && (e.style = hi(i)), e;
}
const Ab = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xb = /* @__PURE__ */ Du(Ab);
function Qp(e) {
  return !!e || e === "";
}
function Ob(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let n = 0; i && n < e.length; n++)
    i = Zn(e[n], t[n]);
  return i;
}
function af(e, t) {
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
  let i = tf(e), n = tf(t);
  if (i || n)
    return i && n ? e.getTime() === t.getTime() : !1;
  if (i = Pi(e), n = Pi(t), i || n)
    return e === t;
  if (i = Ae(e), n = Ae(t), i || n)
    return i && n ? Ob(e, t) : !1;
  if (i = Je(e), n = Je(t), i || n) {
    if (!i || !n)
      return !1;
    if (i = qn(e), n = qn(t), i || n || (i = Da(e), n = Da(t), i || n))
      return i && n ? af(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), d = t.hasOwnProperty(o);
      if (c && !d || !c && d || !Zn(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Nb(e, t) {
  return e.findIndex((i) => Zn(i, t));
}
const eh = (e) => !!(e && e.__v_isRef === !0), h = (e) => lt(e) ? e : e == null ? "" : Ae(e) || Je(e) && (e.toString === Xp || !De(e.toString)) ? eh(e) ? h(e.value) : JSON.stringify(e, th, 2) : String(e), th = (e, t) => eh(t) ? th(e, t.value) : qn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [n, a], r) => (i[_c(n, r) + " =>"] = a, i),
    {}
  )
} : Da(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => _c(i))
} : Pi(t) ? _c(t) : Je(t) && !Ae(t) && !Zp(t) ? String(t) : t, _c = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pi(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function Lb(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let It;
class Rb {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && It && (It.active ? (this.parent = It, this.index = (It.scopes || (It.scopes = [])).push(
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
      const i = It;
      try {
        return It = this, t();
      } finally {
        It = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = It, It = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (It === this)
        It = this.prevScope;
      else {
        let t = It;
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
  return It;
}
let st;
const wc = /* @__PURE__ */ new WeakSet();
class ih {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, It && (It.active ? It.effects.push(this) : this.flags &= -2);
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
    this.flags |= 2, rf(this), rh(this);
    const t = st, i = Ri;
    st = this, Ri = !0;
    try {
      return this.fn();
    } finally {
      oh(this), st = t, Ri = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Bu(t);
      this.deps = this.depsTail = void 0, rf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? wc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    au(this) && this.run();
  }
  get dirty() {
    return au(this);
  }
}
let nh = 0, Jr, Qr;
function ah(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Qr, Qr = e;
    return;
  }
  e.next = Jr, Jr = e;
}
function Uu() {
  nh++;
}
function ju() {
  if (--nh > 0)
    return;
  if (Qr) {
    let t = Qr;
    for (Qr = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; Jr; ) {
    let t = Jr;
    for (Jr = void 0; t; ) {
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
    n.version === -1 ? (n === i && (i = a), Bu(n), Pb(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = i;
}
function au(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (sh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function sh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ho) || (e.globalVersion = ho, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !au(e))))
    return;
  e.flags |= 2;
  const t = e.dep, i = st, n = Ri;
  st = e, Ri = !0;
  try {
    rh(e);
    const a = e.fn(e._value);
    (t.version === 0 || $t(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    st = i, Ri = n, oh(e), e.flags &= -3;
  }
}
function Bu(e, t = !1) {
  const { dep: i, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), i.subs === e && (i.subs = n, !n && i.computed)) {
    i.computed.flags &= -5;
    for (let r = i.computed.deps; r; r = r.nextDep)
      Bu(r, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function Pb(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
let Ri = !0;
const lh = [];
function bn() {
  lh.push(Ri), Ri = !1;
}
function mn() {
  const e = lh.pop();
  Ri = e === void 0 ? !0 : e;
}
function rf(e) {
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
let ho = 0;
class $b {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!st || !Ri || st === this.computed)
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
    this.version++, ho++, this.notify(t);
  }
  notify(t) {
    Uu();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      ju();
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
const ru = /* @__PURE__ */ new WeakMap(), Pa = /* @__PURE__ */ Symbol(
  ""
), ou = /* @__PURE__ */ Symbol(
  ""
), vo = /* @__PURE__ */ Symbol(
  ""
);
function Kt(e, t, i) {
  if (Ri && st) {
    let n = ru.get(e);
    n || ru.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(i);
    a || (n.set(i, a = new Fl()), a.map = n, a.key = i), a.track();
  }
}
function un(e, t, i, n, a, r) {
  const o = ru.get(e);
  if (!o) {
    ho++;
    return;
  }
  const c = (d) => {
    d && d.trigger();
  };
  if (Uu(), t === "clear")
    o.forEach(c);
  else {
    const d = Ae(e), v = d && zu(i);
    if (d && i === "length") {
      const f = Number(n);
      o.forEach((y, C) => {
        (C === "length" || C === vo || !Pi(C) && C >= f) && c(y);
      });
    } else
      switch ((i !== void 0 || o.has(void 0)) && c(o.get(i)), v && c(o.get(vo)), t) {
        case "add":
          d ? v && c(o.get("length")) : (c(o.get(Pa)), qn(e) && c(o.get(ou)));
          break;
        case "delete":
          d || (c(o.get(Pa)), qn(e) && c(o.get(ou)));
          break;
        case "set":
          qn(e) && c(o.get(Pa));
          break;
      }
  }
  ju();
}
function Ga(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Kt(t, "iterate", vo), /* @__PURE__ */ Ci(e) ? t : t.map($i));
}
function Dl(e) {
  return Kt(e = /* @__PURE__ */ Ye(e), "iterate", vo), e;
}
function qi(e, t) {
  return /* @__PURE__ */ yn(e) ? sr(/* @__PURE__ */ $a(e) ? $i(t) : t) : $i(t);
}
const Fb = {
  __proto__: null,
  [Symbol.iterator]() {
    return Sc(this, Symbol.iterator, (e) => qi(this, e));
  },
  concat(...e) {
    return Ga(this).concat(
      ...e.map((t) => Ae(t) ? Ga(t) : t)
    );
  },
  entries() {
    return Sc(this, "entries", (e) => (e[1] = qi(this, e[1]), e));
  },
  every(e, t) {
    return nn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return nn(
      this,
      "filter",
      e,
      t,
      (i) => i.map((n) => qi(this, n)),
      arguments
    );
  },
  find(e, t) {
    return nn(
      this,
      "find",
      e,
      t,
      (i) => qi(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return nn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return nn(
      this,
      "findLast",
      e,
      t,
      (i) => qi(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return nn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return nn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Cc(this, "includes", e);
  },
  indexOf(...e) {
    return Cc(this, "indexOf", e);
  },
  join(e) {
    return Ga(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Cc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return nn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return $r(this, "pop");
  },
  push(...e) {
    return $r(this, "push", e);
  },
  reduce(e, ...t) {
    return of(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return of(this, "reduceRight", e, t);
  },
  shift() {
    return $r(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return nn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return $r(this, "splice", e);
  },
  toReversed() {
    return Ga(this).toReversed();
  },
  toSorted(e) {
    return Ga(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ga(this).toSpliced(...e);
  },
  unshift(...e) {
    return $r(this, "unshift", e);
  },
  values() {
    return Sc(this, "values", (e) => qi(this, e));
  }
};
function Sc(e, t, i) {
  const n = Dl(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Ci(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = i(r.value)), r;
  }), a;
}
const Db = Array.prototype;
function nn(e, t, i, n, a, r) {
  const o = Dl(e), c = o !== e && !/* @__PURE__ */ Ci(e), d = o[t];
  if (d !== Db[t]) {
    const y = d.apply(e, r);
    return c ? $i(y) : y;
  }
  let v = i;
  o !== e && (c ? v = function(y, C) {
    return i.call(this, qi(e, y), C, e);
  } : i.length > 2 && (v = function(y, C) {
    return i.call(this, y, C, e);
  }));
  const f = d.call(o, v, n);
  return c && a ? a(f) : f;
}
function of(e, t, i, n) {
  const a = Dl(e), r = a !== e && !/* @__PURE__ */ Ci(e);
  let o = i, c = !1;
  a !== e && (r ? (c = n.length === 0, o = function(v, f, y) {
    return c && (c = !1, v = qi(e, v)), i.call(this, v, qi(e, f), y, e);
  }) : i.length > 3 && (o = function(v, f, y) {
    return i.call(this, v, f, y, e);
  }));
  const d = a[t](o, ...n);
  return c ? qi(e, d) : d;
}
function Cc(e, t, i) {
  const n = /* @__PURE__ */ Ye(e);
  Kt(n, "iterate", vo);
  const a = n[t](...i);
  return (a === -1 || a === !1) && /* @__PURE__ */ Ku(i[0]) ? (i[0] = /* @__PURE__ */ Ye(i[0]), n[t](...i)) : a;
}
function $r(e, t, i = []) {
  bn(), Uu();
  const n = (/* @__PURE__ */ Ye(e))[t].apply(e, i);
  return ju(), mn(), n;
}
const Mb = /* @__PURE__ */ Du("__proto__,__v_isRef,__isVue"), uh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pi)
);
function zb(e) {
  Pi(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Kt(t, "has", e), t.hasOwnProperty(e);
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
      /* @__PURE__ */ Yt(t) ? t : n
    );
    if ((Pi(i) ? uh.has(i) : Mb(i)) || (a || Kt(t, "get", i), r))
      return c;
    if (/* @__PURE__ */ Yt(c)) {
      const d = o && zu(i) ? c : c.value;
      return a && Je(d) ? /* @__PURE__ */ go(d) : d;
    }
    return Je(c) ? a ? /* @__PURE__ */ go(c) : /* @__PURE__ */ Pt(c) : c;
  }
}
class fh extends dh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, n, a) {
    let r = t[i];
    const o = Ae(t) && zu(i);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ yn(r);
      if (!/* @__PURE__ */ Ci(n) && !/* @__PURE__ */ yn(n) && (r = /* @__PURE__ */ Ye(r), n = /* @__PURE__ */ Ye(n)), !o && /* @__PURE__ */ Yt(r) && !/* @__PURE__ */ Yt(n))
        return v || (r.value = n), !0;
    }
    const c = o ? Number(i) < t.length : Ze(t, i), d = Reflect.set(
      t,
      i,
      n,
      /* @__PURE__ */ Yt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && d && (c ? $t(n, r) && un(t, "set", i, n) : un(t, "add", i, n)), d;
  }
  deleteProperty(t, i) {
    const n = Ze(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && n && un(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const n = Reflect.has(t, i);
    return (!Pi(i) || !uh.has(i)) && Kt(t, "has", i), n;
  }
  ownKeys(t) {
    return Kt(
      t,
      "iterate",
      Ae(t) ? "length" : Pa
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
const su = (e) => e, ds = (e) => Reflect.getPrototypeOf(e);
function Vb(e, t, i) {
  return function(...n) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = qn(r), c = e === "entries" || e === Symbol.iterator && o, d = e === "keys" && o, v = a[e](...n), f = i ? su : t ? sr : $i;
    return !t && Kt(
      r,
      "iterate",
      d ? ou : Pa
    ), wt(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: y, done: C } = v.next();
          return C ? { value: y, done: C } : {
            value: c ? [f(y[0]), f(y[1])] : f(y),
            done: C
          };
        }
      }
    );
  };
}
function fs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Kb(e, t) {
  const i = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      e || ($t(a, c) && Kt(o, "get", a), Kt(o, "get", c));
      const { has: d } = ds(o), v = t ? su : e ? sr : $i;
      if (d.call(o, a))
        return v(r.get(a));
      if (d.call(o, c))
        return v(r.get(c));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Kt(/* @__PURE__ */ Ye(a), "iterate", Pa), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      return e || ($t(a, c) && Kt(o, "has", a), Kt(o, "has", c)), a === c ? r.has(a) : r.has(a) || r.has(c);
    },
    forEach(a, r) {
      const o = this, c = o.__v_raw, d = /* @__PURE__ */ Ye(c), v = t ? su : e ? sr : $i;
      return !e && Kt(d, "iterate", Pa), c.forEach((f, y) => a.call(r, v(f), v(y), o));
    }
  };
  return wt(
    i,
    e ? {
      add: fs("add"),
      set: fs("set"),
      delete: fs("delete"),
      clear: fs("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = ds(r), c = /* @__PURE__ */ Ye(a), d = !t && !/* @__PURE__ */ Ci(a) && !/* @__PURE__ */ yn(a) ? c : a;
        return o.has.call(r, d) || $t(a, d) && o.has.call(r, a) || $t(c, d) && o.has.call(r, c) || (r.add(d), un(r, "add", d, d)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Ci(r) && !/* @__PURE__ */ yn(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: c, get: d } = ds(o);
        let v = c.call(o, a);
        v || (a = /* @__PURE__ */ Ye(a), v = c.call(o, a));
        const f = d.call(o, a);
        return o.set(a, r), v ? $t(r, f) && un(o, "set", a, r) : un(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: c } = ds(r);
        let d = o.call(r, a);
        d || (a = /* @__PURE__ */ Ye(a), d = o.call(r, a)), c && c.call(r, a);
        const v = r.delete(a);
        return d && un(r, "delete", a, void 0), v;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && un(
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
function Hu(e, t) {
  const i = Kb(e, t);
  return (n, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Ze(i, a) && a in n ? i : n,
    a,
    r
  );
}
const Gb = {
  get: /* @__PURE__ */ Hu(!1, !1)
}, qb = {
  get: /* @__PURE__ */ Hu(!1, !0)
}, Wb = {
  get: /* @__PURE__ */ Hu(!0, !1)
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
function Pt(e) {
  return /* @__PURE__ */ yn(e) ? e : Vu(
    e,
    !1,
    jb,
    Gb,
    ph
  );
}
// @__NO_SIDE_EFFECTS__
function Zb(e) {
  return Vu(
    e,
    !1,
    Hb,
    qb,
    hh
  );
}
// @__NO_SIDE_EFFECTS__
function go(e) {
  return Vu(
    e,
    !0,
    Bb,
    Wb,
    vh
  );
}
function Vu(e, t, i, n, a) {
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
function $a(e) {
  return /* @__PURE__ */ yn(e) ? /* @__PURE__ */ $a(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ci(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ku(e) {
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
const $i = (e) => Je(e) ? /* @__PURE__ */ Pt(e) : e, sr = (e) => Je(e) ? /* @__PURE__ */ go(e) : e;
// @__NO_SIDE_EFFECTS__
function Yt(e) {
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
  return /* @__PURE__ */ Yt(e) ? e : new Qb(e, t);
}
class Qb {
  constructor(t, i) {
    this.dep = new Fl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ Ye(t), this._value = i ? t : $i(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ci(t) || /* @__PURE__ */ yn(t);
    t = n ? t : /* @__PURE__ */ Ye(t), $t(t, i) && (this._rawValue = t, this._value = n ? t : $i(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Yt(e) ? e.value : e;
}
function hn(e) {
  return De(e) ? e() : g(e);
}
const em = {
  get: (e, t, i) => t === "__v_raw" ? e : g(Reflect.get(e, t, i)),
  set: (e, t, i, n) => {
    const a = e[t];
    return /* @__PURE__ */ Yt(a) && !/* @__PURE__ */ Yt(i) ? (a.value = i, !0) : Reflect.set(e, t, i, n);
  }
};
function mh(e) {
  return /* @__PURE__ */ $a(e) ? e : new Proxy(e, em);
}
class tm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new Fl(), { get: n, set: a } = t(i.track.bind(i), i.trigger.bind(i));
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
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new Fl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ho - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = n;
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
const ps = {}, Ls = /* @__PURE__ */ new WeakMap();
let Ta;
function rm(e, t = !1, i = Ta) {
  if (i) {
    let n = Ls.get(i);
    n || Ls.set(i, n = []), n.push(e);
  }
}
function om(e, t, i = qe) {
  const { immediate: n, deep: a, once: r, scheduler: o, augmentJob: c, call: d } = i, v = (k) => a ? k : /* @__PURE__ */ Ci(k) || a === !1 || a === 0 ? dn(k, 1) : dn(k);
  let f, y, C, E, L = !1, A = !1;
  if (/* @__PURE__ */ Yt(e) ? (y = () => e.value, L = /* @__PURE__ */ Ci(e)) : /* @__PURE__ */ $a(e) ? (y = () => v(e), L = !0) : Ae(e) ? (A = !0, L = e.some((k) => /* @__PURE__ */ $a(k) || /* @__PURE__ */ Ci(k)), y = () => e.map((k) => {
    if (/* @__PURE__ */ Yt(k))
      return k.value;
    if (/* @__PURE__ */ $a(k))
      return v(k);
    if (De(k))
      return d ? d(k, 2) : k();
  })) : De(e) ? t ? y = d ? () => d(e, 2) : e : y = () => {
    if (C) {
      bn();
      try {
        C();
      } finally {
        mn();
      }
    }
    const k = Ta;
    Ta = f;
    try {
      return d ? d(e, 3, [E]) : e(E);
    } finally {
      Ta = k;
    }
  } : y = Si, t && a) {
    const k = y, oe = a === !0 ? 1 / 0 : a;
    y = () => dn(k(), oe);
  }
  const N = Ib(), D = () => {
    f.stop(), N && N.active && Mu(N.effects, f);
  };
  if (r && t) {
    const k = t;
    t = (...oe) => {
      const ue = k(...oe);
      return D(), ue;
    };
  }
  let M = A ? new Array(e.length).fill(ps) : ps;
  const z = (k) => {
    if (!(!(f.flags & 1) || !f.dirty && !k))
      if (t) {
        const oe = f.run();
        if (k || a || L || (A ? oe.some((ue, Z) => $t(ue, M[Z])) : $t(oe, M))) {
          C && C();
          const ue = Ta;
          Ta = f;
          try {
            const Z = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              M === ps ? void 0 : A && M[0] === ps ? [] : M,
              E
            ];
            M = oe, d ? d(t, 3, Z) : (
              // @ts-expect-error
              t(...Z)
            );
          } finally {
            Ta = ue;
          }
        }
      } else
        f.run();
  };
  return c && c(z), f = new ih(y), f.scheduler = o ? () => o(z, !1) : z, E = (k) => rm(k, !1, f), C = f.onStop = () => {
    const k = Ls.get(f);
    if (k) {
      if (d)
        d(k, 4);
      else
        for (const oe of k) oe();
      Ls.delete(f);
    }
  }, t ? n ? z(!0) : M = f.run() : o ? o(z.bind(null, !0), !0) : f.run(), D.pause = f.pause.bind(f), D.resume = f.resume.bind(f), D.stop = D, D;
}
function dn(e, t = 1 / 0, i) {
  if (t <= 0 || !Je(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ Yt(e))
    dn(e.value, t, i);
  else if (Ae(e))
    for (let n = 0; n < e.length; n++)
      dn(e[n], t, i);
  else if (Da(e) || qn(e))
    e.forEach((n) => {
      dn(n, t, i);
    });
  else if (Zp(e)) {
    for (const n in e)
      dn(e[n], t, i);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && dn(e[n], t, i);
  }
  return e;
}
function Io(e, t, i, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    Ml(a, t, i);
  }
}
function ki(e, t, i, n) {
  if (De(e)) {
    const a = Io(e, t, i, n);
    return a && Yp(a) && a.catch((r) => {
      Ml(r, t, i);
    }), a;
  }
  if (Ae(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(ki(e[r], t, i, n));
    return a;
  }
}
function Ml(e, t, i, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || qe;
  if (t) {
    let c = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; c; ) {
      const f = c.ec;
      if (f) {
        for (let y = 0; y < f.length; y++)
          if (f[y](e, d, v) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      bn(), Io(r, null, 10, [
        e,
        d,
        v
      ]), mn();
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
const ii = [];
let Vi = -1;
const er = [];
let Kn = null, Xa = 0;
const yh = /* @__PURE__ */ Promise.resolve();
let Rs = null;
function ti(e) {
  const t = Rs || yh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function lm(e) {
  let t = Vi + 1, i = ii.length;
  for (; t < i; ) {
    const n = t + i >>> 1, a = ii[n], r = bo(a);
    r < e || r === e && a.flags & 2 ? t = n + 1 : i = n;
  }
  return t;
}
function Gu(e) {
  if (!(e.flags & 1)) {
    const t = bo(e), i = ii[ii.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= bo(i) ? ii.push(e) : ii.splice(lm(t), 0, e), e.flags |= 1, _h();
  }
}
function _h() {
  Rs || (Rs = yh.then(Ch));
}
function wh(e) {
  if (!Ae(e))
    Kn && e.id === -1 ? Kn.splice(Xa + 1, 0, e) : e.flags & 1 || (er.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      er.push(e[t]);
  _h();
}
function sf(e, t, i = Vi + 1) {
  for (; i < ii.length; i++) {
    const n = ii[i];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ii.splice(i, 1), i--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Sh(e) {
  if (er.length) {
    const t = [...new Set(er)].sort(
      (i, n) => bo(i) - bo(n)
    );
    if (er.length = 0, Kn) {
      for (let i = 0; i < t.length; i++)
        Kn.push(t[i]);
      return;
    }
    for (Kn = t, Xa = 0; Xa < Kn.length; Xa++) {
      const i = Kn[Xa];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    Kn = null, Xa = 0;
  }
}
const bo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ch(e) {
  try {
    for (Vi = 0; Vi < ii.length; Vi++) {
      const t = ii[Vi];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Io(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Vi < ii.length; Vi++) {
      const t = ii[Vi];
      t && (t.flags &= -2);
    }
    Vi = -1, ii.length = 0, Sh(), Rs = null, (ii.length || er.length) && Ch();
  }
}
let Dt = null, zl = null;
function Is(e) {
  const t = Dt;
  return Dt = e, zl = e && e.type.__scopeId || null, t;
}
function cm(e) {
  zl = e;
}
function um() {
  zl = null;
}
const dm = (e) => Fe;
function Fe(e, t = Dt, i) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && Ms(-1);
    const r = Is(t), o = vn.length;
    let c;
    try {
      c = e(...a);
    } finally {
      for (let d = vn.length; d > o; d--) Qu();
      Is(r), n._d && Ms(1);
    }
    return c;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ie(e, t) {
  if (Dt === null)
    return e;
  const i = Kl(Dt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, c, d = qe] = t[a];
    r && (De(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && dn(o), n.push({
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
function ya(e, t, i, n) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const c = a[o];
    r && (c.oldValue = r[o].value);
    let d = c.dir[n];
    d && (bn(), ki(d, i, 8, [
      e.el,
      c,
      e,
      t
    ]), mn());
  }
}
function yi(e, t) {
  if (qt) {
    let i = qt.provides;
    const n = qt.parent && qt.parent.provides;
    n === i && (i = qt.provides = Object.create(n)), i[e] = t;
  }
}
function Gt(e, t, i = !1) {
  const n = za();
  if (n || ir) {
    let a = ir ? ir._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && De(t) ? t.call(n && n.proxy) : t;
  }
}
const fm = /* @__PURE__ */ Symbol.for("v-scx"), pm = () => Gt(fm);
function hm(e, t) {
  return Ul(e, null, t);
}
function vm(e, t) {
  return Ul(
    e,
    null,
    { flush: "sync" }
  );
}
function We(e, t, i) {
  return Ul(e, t, i);
}
function Ul(e, t, i = qe) {
  const { immediate: n, deep: a, flush: r, once: o } = i, c = wt({}, i), d = t && n || !t && r !== "post";
  let v;
  if (Co) {
    if (r === "sync") {
      const E = pm();
      v = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!d) {
      const E = () => {
      };
      return E.stop = Si, E.resume = Si, E.pause = Si, E;
    }
  }
  const f = qt;
  c.call = (E, L, A) => ki(E, f, L, A);
  let y = !1;
  r === "post" ? c.scheduler = (E) => {
    ei(E, f && f.suspense);
  } : r !== "sync" && (y = !0, c.scheduler = (E, L) => {
    L ? E() : Gu(E);
  }), c.augmentJob = (E) => {
    t && (E.flags |= 4), y && (E.flags |= 2, f && (E.id = f.uid, E.i = f));
  };
  const C = om(e, t, c);
  return Co && (v ? v.push(C) : d && C()), C;
}
function gm(e, t, i) {
  const n = this.proxy, a = lt(e) ? e.includes(".") ? kh(n, e) : () => n[e] : e.bind(n, n);
  let r;
  De(t) ? r = t : (r = t.handler, i = t);
  const o = Fo(this), c = Ul(a, r.bind(n), i);
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
const Bn = /* @__PURE__ */ new WeakMap(), Th = /* @__PURE__ */ Symbol("_vte"), jl = (e) => e.__isTeleport, Aa = (e) => e && (e.disabled || e.disabled === ""), bm = (e) => e && (e.defer || e.defer === ""), lf = (e) => typeof SVGElement < "u" && e instanceof SVGElement, cf = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, lu = (e, t) => {
  const i = e && e.to;
  return lt(i) ? t ? t(i) : null : i;
}, mm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, n, a, r, o, c, d, v) {
    const {
      mc: f,
      pc: y,
      pbc: C,
      o: { insert: E, querySelector: L, createText: A, createComment: N, parentNode: D }
    } = v, M = Aa(t.props);
    let { dynamicChildren: z } = t;
    const k = (Z, fe, X) => {
      Z.shapeFlag & 16 && f(
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
      const fe = Aa(Z.props), X = Z.target = lu(Z.props, L), le = cu(X, Z, A, E);
      X && (o !== "svg" && lf(X) ? o = "svg" : o !== "mathml" && cf(X) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(X), fe || (k(Z, X, le), Kr(Z, !1)));
    }, ue = (Z) => {
      const fe = () => {
        if (Bn.get(Z) === fe) {
          if (Bn.delete(Z), Aa(Z.props)) {
            const X = D(Z.el) || i;
            k(Z, X, Z.anchor), Kr(Z, !0);
          }
          oe(Z);
        }
      };
      Bn.set(Z, fe), ei(fe, r);
    };
    if (e == null) {
      const Z = t.el = A(""), fe = t.anchor = A("");
      if (E(Z, i, n), E(fe, i, n), bm(t.props) || r && r.pendingBranch) {
        ue(t);
        return;
      }
      M && (k(t, i, fe), Kr(t, !0)), oe();
    } else {
      t.el = e.el;
      const Z = t.anchor = e.anchor, fe = Bn.get(e);
      if (fe) {
        fe.flags |= 8, Bn.delete(e), ue(t);
        return;
      }
      t.targetStart = e.targetStart;
      const X = t.target = e.target, le = t.targetAnchor = e.targetAnchor, _e = Aa(e.props), ee = _e ? i : X, J = _e ? Z : le;
      if (o === "svg" || lf(X) ? o = "svg" : (o === "mathml" || cf(X)) && (o = "mathml"), z ? (C(
        e.dynamicChildren,
        z,
        ee,
        a,
        r,
        o,
        c
      ), Ju(e, t, !0)) : d || y(
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
        _e ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : hs(
          t,
          i,
          Z,
          v,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const F = lu(t.props, L);
        F && (t.target = F, hs(
          t,
          F,
          null,
          v,
          0
        ));
      } else _e && hs(
        t,
        X,
        le,
        v,
        1
      );
      Kr(t, M);
    }
  },
  remove(e, t, i, { um: n, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: c,
      anchor: d,
      targetStart: v,
      targetAnchor: f,
      target: y,
      props: C
    } = e, E = Aa(C), L = r || !E, A = Bn.get(e);
    if (A && (A.flags |= 8, Bn.delete(e)), y && (a(v), a(f)), r && a(d), !A && (E || y) && o & 16)
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
  move: hs,
  hydrate: ym
};
function hs(e, t, i, { o: { insert: n }, m: a }, r = 2) {
  r === 0 && n(e.targetAnchor, t, i);
  const { el: o, anchor: c, shapeFlag: d, children: v, props: f } = e, y = r === 2;
  if (y && n(o, t, i), !Bn.has(e) && (!y || Aa(f)) && d & 16)
    for (let C = 0; C < v.length; C++)
      a(
        v[C],
        t,
        i,
        2
      );
  y && n(c, t, i);
}
function ym(e, t, i, n, a, r, {
  o: { nextSibling: o, parentNode: c, querySelector: d, insert: v, createText: f }
}, y) {
  function C(N, D) {
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
  const L = t.target = lu(
    t.props,
    d
  ), A = Aa(t.props);
  if (L) {
    const N = L._lpa || L.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), C(L, N), t.targetAnchor || cu(
      L,
      t,
      f,
      v,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === L ? e : null
    )) : (t.anchor = o(e), C(L, N), t.targetAnchor || cu(L, t, f, v), y(
      N && o(N),
      t,
      L,
      i,
      n,
      a,
      r
    ))), Kr(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Eh = mm;
function Kr(e, t) {
  const i = e.ctx;
  if (i && i.ut) {
    let n, a;
    for (t ? (n = e.el, a = e.anchor) : (n = e.targetStart, a = e.targetAnchor); n && n !== a; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", i.uid), n = n.nextSibling;
    i.ut();
  }
}
function cu(e, t, i, n, a = null) {
  const r = t.targetStart = i(""), o = t.targetAnchor = i("");
  return r[Th] = o, e && (n(r, e, a), n(o, e, a)), o;
}
const _i = /* @__PURE__ */ Symbol("_leaveCb"), Fr = /* @__PURE__ */ Symbol("_enterCb");
function _m() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ea(() => {
    e.isMounted = !0;
  }), lr(() => {
    e.isUnmounting = !0;
  }), e;
}
const gi = [Function, Array], Ah = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: gi,
  onEnter: gi,
  onAfterEnter: gi,
  onEnterCancelled: gi,
  // leave
  onBeforeLeave: gi,
  onLeave: gi,
  onAfterLeave: gi,
  onLeaveCancelled: gi,
  // appear
  onBeforeAppear: gi,
  onAppear: gi,
  onAfterAppear: gi,
  onAppearCancelled: gi
}, xh = (e) => {
  const t = e.subTree;
  return t.component ? xh(t.component) : t;
}, wm = {
  name: "BaseTransition",
  props: Ah,
  setup(e, { slots: t }) {
    const i = za(), n = _m();
    return () => {
      const a = t.default && Lh(t.default(), !0), r = a && a.length ? Oh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        i.subTree ? P() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: c } = o;
      if (n.isLeaving)
        return kc(r);
      const d = Ps(r);
      if (!d)
        return kc(r);
      let v = uu(
        d,
        o,
        n,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (y) => v = y
      );
      d.type !== Ft && mo(d, v);
      let f = i.subTree && Ps(i.subTree);
      if (f && f.type !== Ft && !xa(f, d) && xh(i).type !== Ft) {
        let y = uu(
          f,
          o,
          n,
          i
        );
        if (mo(f, y), c === "out-in" && d.type !== Ft)
          return n.isLeaving = !0, y.afterLeave = () => {
            n.isLeaving = !1, i.job.flags & 8 || i.update(), delete y.afterLeave, f = void 0;
          }, kc(r);
        c === "in-out" && d.type !== Ft ? y.delayLeave = (C, E, L) => {
          const A = Nh(
            n,
            f
          );
          A[String(f.key)] = f, C[_i] = () => {
            E(), C[_i] = void 0, delete v.delayedLeave, f = void 0;
          }, v.delayedLeave = () => {
            L(), delete v.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function Oh(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const i of e)
      if (i.type !== Ft) {
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
function uu(e, t, i, n, a) {
  const {
    appear: r,
    mode: o,
    persisted: c = !1,
    onBeforeEnter: d,
    onEnter: v,
    onAfterEnter: f,
    onEnterCancelled: y,
    onBeforeLeave: C,
    onLeave: E,
    onAfterLeave: L,
    onLeaveCancelled: A,
    onBeforeAppear: N,
    onAppear: D,
    onAfterAppear: M,
    onAppearCancelled: z
  } = t, k = String(e.key), oe = Nh(i, e), ue = (X, le) => {
    X && ki(
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
      X[_i] && X[_i](
        !0
        /* cancelled */
      );
      const _e = oe[k];
      _e && xa(e, _e) && _e.el[_i] && _e.el[_i](), ue(le, [X]);
    },
    enter(X) {
      if (oe[k] === e) return;
      let le = v, _e = f, ee = y;
      if (!i.isMounted)
        if (r)
          le = D || v, _e = M || f, ee = z || y;
        else
          return;
      let J = !1;
      X[Fr] = (U) => {
        J || (J = !0, U ? ue(ee, [X]) : ue(_e, [X]), fe.delayedLeave && fe.delayedLeave(), X[Fr] = void 0);
      };
      const F = X[Fr].bind(null, !1);
      le ? Z(le, [X, F]) : F();
    },
    leave(X, le) {
      const _e = String(e.key);
      if (X[Fr] && X[Fr](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return le();
      ue(C, [X]);
      let ee = !1;
      X[_i] = (F) => {
        ee || (ee = !0, le(), F ? ue(A, [X]) : ue(L, [X]), X[_i] = void 0, oe[_e] === e && delete oe[_e]);
      };
      const J = X[_i].bind(null, !1);
      oe[_e] = e, E ? Z(E, [X, J]) : J();
    },
    clone(X) {
      const le = uu(
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
  if (Bl(e))
    return e = Jn(e), e.children = null, e;
}
function Ps(e) {
  if (!Bl(e))
    return jl(e.type) && e.children ? Oh(e.children) : e;
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
function mo(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const i = e.component.subTree;
    mo(
      jl(i.type) && Ps(i) || i,
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
    )) : (t || o.type !== Ft) && n.push(c != null ? Jn(o, { key: c }) : o);
  }
  if (a > 1)
    for (let r = 0; r < n.length; r++)
      n[r].patchFlag = -2;
  return n;
}
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return De(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    wt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Rh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Cm(e) {
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
function uf(e, t) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
}
const $s = /* @__PURE__ */ new WeakMap();
function eo(e, t, i, n, a = !1) {
  if (Ae(e)) {
    e.forEach(
      (A, N) => eo(
        A,
        t && (Ae(t) ? t[N] : t),
        i,
        n,
        a
      )
    );
    return;
  }
  if (tr(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && eo(e, t, i, n.component.subTree);
    return;
  }
  const r = n.shapeFlag & 4 ? Kl(n.component) : n.el, o = a ? null : r, { i: c, r: d } = e, v = t && t.r, f = c.refs === qe ? c.refs = {} : c.refs, y = c.setupState, C = /* @__PURE__ */ Ye(y), E = y === qe ? Wp : (A) => uf(f, A) ? !1 : Ze(C, A), L = (A, N) => !(N && uf(f, N));
  if (v != null && v !== d) {
    if (df(t), lt(v))
      f[v] = null, E(v) && (y[v] = null);
    else if (/* @__PURE__ */ Yt(v)) {
      const A = t;
      L(v, A.k) && (v.value = null), A.k && (f[A.k] = null);
    }
  }
  if (De(d))
    Io(d, c, 12, [o, f]);
  else {
    const A = lt(d), N = /* @__PURE__ */ Yt(d);
    if (A || N) {
      const D = () => {
        if (e.f) {
          const M = A ? E(d) ? y[d] : f[d] : L() || !e.k ? d.value : f[e.k];
          if (a)
            Ae(M) && Mu(M, r);
          else if (Ae(M))
            M.includes(r) || M.push(r);
          else if (A)
            f[d] = [r], E(d) && (y[d] = f[d]);
          else {
            const z = [r];
            L(d, e.k) && (d.value = z), e.k && (f[e.k] = z);
          }
        } else A ? (f[d] = o, E(d) && (y[d] = o)) : N && (L(d, e.k) && (d.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const M = () => {
          D(), $s.delete(e);
        };
        M.id = -1, $s.set(e, M), ei(M, i);
      } else
        df(e), D();
    }
  }
}
function df(e) {
  const t = $s.get(e);
  t && (t.flags |= 8, $s.delete(e));
}
$l().requestIdleCallback;
$l().cancelIdleCallback;
const tr = (e) => !!e.type.__asyncLoader, Bl = (e) => e.type.__isKeepAlive;
function km(e, t) {
  Ih(e, "a", t);
}
function Tm(e, t) {
  Ih(e, "da", t);
}
function Ih(e, t, i = qt) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Hl(t, n, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      Bl(a.parent.vnode) && Em(n, t, i, a), a = a.parent;
  }
}
function Em(e, t, i, n) {
  const a = Hl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Po(() => {
    Mu(n[t], a);
  }, i);
}
function Hl(e, t, i = qt, n = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), r = t.__weh || (t.__weh = (...o) => {
      bn();
      const c = Fo(i), d = ki(t, i, e, o);
      return c(), mn(), d;
    });
    return n ? a.unshift(r) : a.push(r), r;
  }
}
const Sn = (e) => (t, i = qt) => {
  (!Co || e === "sp") && Hl(e, (...n) => t(...n), i);
}, Ph = Sn("bm"), ea = Sn("m"), $h = Sn(
  "bu"
), Am = Sn("u"), lr = Sn(
  "bum"
), Po = Sn("um"), xm = Sn(
  "sp"
), Om = Sn("rtg"), Nm = Sn("rtc");
function Lm(e, t = qt) {
  Hl("ec", e, t);
}
const qu = "components", Rm = "directives";
function Be(e, t) {
  return Yu(qu, e, !0, t) || e;
}
const Fh = /* @__PURE__ */ Symbol.for("v-ndc");
function Wu(e) {
  return lt(e) ? Yu(qu, e, !1) || e : e || Fh;
}
function ff(e) {
  return Yu(Rm, e);
}
function Yu(e, t, i = !0, n = !1) {
  const a = Dt || qt;
  if (a) {
    const r = a.type;
    if (e === qu) {
      const c = hy(
        r,
        !1
      );
      if (c && (c === t || c === Wt(t) || c === Il(Wt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      pf(a[e] || r[e], t) || // global registration
      pf(a.appContext[e], t)
    );
    return !o && n ? r : o;
  }
}
function pf(e, t) {
  return e && (e[t] || e[Wt(t)] || e[Il(Wt(t))]);
}
function ke(e, t, i, n) {
  let a;
  const r = i, o = Ae(e);
  if (o || lt(e)) {
    const c = o && /* @__PURE__ */ $a(e);
    let d = !1, v = !1;
    c && (d = !/* @__PURE__ */ Ci(e), v = /* @__PURE__ */ yn(e), e = Dl(e)), a = new Array(e.length);
    for (let f = 0, y = e.length; f < y; f++)
      a[f] = t(
        d ? v ? sr($i(e[f])) : $i(e[f]) : e[f],
        f,
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
        const f = c[d];
        a[d] = t(e[f], f, d, r);
      }
    }
  else
    a = [];
  return a;
}
function Me(e, t, i, n, a, r) {
  if (i == null && (i = {}), Dt.ce || Dt.parent && tr(Dt.parent) && Dt.parent.ce) {
    const v = i, f = Object.keys(v).length > 0;
    return t !== "default" && (v.name = t), m(), je(
      ie,
      null,
      [xe("slot", v, n && n())],
      f ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const c = vn.length;
  m();
  let d;
  try {
    const v = o && Dh(o(i)), f = i.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    v && v.key;
    d = je(
      ie,
      {
        key: (f && !Pi(f) ? f : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!v && n ? "_fb" : "")
      },
      v || (n ? n() : []),
      v && e._ === 1 ? 64 : -2
    );
  } catch (v) {
    for (let f = vn.length; f > c; f--) Qu();
    throw v;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), d;
}
function Dh(e) {
  return e.some((t) => _o(t) ? !(t.type === Ft || t.type === ie && !Dh(t.children)) : !0) ? e : null;
}
const du = (e) => e ? rv(e) ? Kl(e) : du(e.parent) : null, to = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ wt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => du(e.parent),
    $root: (e) => du(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Uh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ti.bind(e.proxy)),
    $watch: (e) => gm.bind(e)
  })
), Tc = (e, t) => e !== qe && !e.__isScriptSetup && Ze(e, t), Im = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: n, data: a, props: r, accessCache: o, type: c, appContext: d } = e;
    if (t[0] !== "$") {
      const C = o[t];
      if (C !== void 0)
        switch (C) {
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
        fu && (o[t] = 0);
      }
    }
    const v = to[t];
    let f, y;
    if (v)
      return t === "$attrs" && Kt(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
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
    return !!(i[c] || e !== qe && c[0] !== "$" && Ze(e, c) || Tc(t, c) || Ze(r, c) || Ze(n, c) || Ze(to, c) || Ze(a.config.globalProperties, c) || (d = o.__cssModules) && d[c]);
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
  const t = za();
  return t.setupContext || (t.setupContext = sv(t));
}
function Fs(e) {
  return Ae(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function Fm(e, t) {
  return !e || !t ? e || t : Ae(e) && Ae(t) ? e.concat(t) : wt({}, Fs(e), Fs(t));
}
let fu = !0;
function Dm(e) {
  const t = Uh(e), i = e.proxy, n = e.ctx;
  fu = !1, t.beforeCreate && hf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: c,
    provide: d,
    inject: v,
    // lifecycle
    created: f,
    beforeMount: y,
    mounted: C,
    beforeUpdate: E,
    updated: L,
    activated: A,
    deactivated: N,
    beforeDestroy: D,
    beforeUnmount: M,
    destroyed: z,
    unmounted: k,
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
    Je(ce) && (e.data = /* @__PURE__ */ Pt(ce));
  }
  if (fu = !0, r)
    for (const ce in r) {
      const ae = r[ce], me = De(ae) ? ae.bind(i, i) : De(ae.get) ? ae.get.bind(i, i) : Si, de = !De(ae) && De(ae.set) ? ae.set.bind(i) : Si, Se = B({
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
      yi(ae, ce[ae]);
    });
  }
  f && hf(f, e, "c");
  function Y(ce, ae) {
    Ae(ae) ? ae.forEach((me) => ce(me.bind(i))) : ae && ce(ae.bind(i));
  }
  if (Y(Ph, y), Y(ea, C), Y($h, E), Y(Am, L), Y(km, A), Y(Tm, N), Y(Lm, fe), Y(Nm, ue), Y(Om, Z), Y(lr, M), Y(Po, k), Y(xm, X), Ae(le))
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
  oe && e.render === Si && (e.render = oe), _e != null && (e.inheritAttrs = _e), ee && (e.components = ee), J && (e.directives = J), X && Rh(e);
}
function Mm(e, t, i = Si) {
  Ae(e) && (e = pu(e));
  for (const n in e) {
    const a = e[n];
    let r;
    Je(a) ? "default" in a ? r = Gt(
      a.from || n,
      a.default,
      !0
    ) : r = Gt(a.from || n) : r = Gt(a), /* @__PURE__ */ Yt(r) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[n] = r;
  }
}
function hf(e, t, i) {
  ki(
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
    (v) => Ds(d, v, o, !0)
  ), Ds(d, t, o)), Je(t) && r.set(t, d), d;
}
function Ds(e, t, i, n = !1) {
  const { mixins: a, extends: r } = t;
  r && Ds(e, r, i, !0), a && a.forEach(
    (o) => Ds(e, o, i, !0)
  );
  for (const o in t)
    if (!(n && o === "expose")) {
      const c = zm[o] || i && i[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const zm = {
  data: vf,
  props: gf,
  emits: gf,
  // objects
  methods: Gr,
  computed: Gr,
  // lifecycle
  beforeCreate: Qt,
  created: Qt,
  beforeMount: Qt,
  mounted: Qt,
  beforeUpdate: Qt,
  updated: Qt,
  beforeDestroy: Qt,
  beforeUnmount: Qt,
  destroyed: Qt,
  unmounted: Qt,
  activated: Qt,
  deactivated: Qt,
  errorCaptured: Qt,
  serverPrefetch: Qt,
  // assets
  components: Gr,
  directives: Gr,
  // watch
  watch: jm,
  // provide / inject
  provide: vf,
  inject: Um
};
function vf(e, t) {
  return t ? e ? function() {
    return wt(
      De(e) ? e.call(this, this) : e,
      De(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Um(e, t) {
  return Gr(pu(e), pu(t));
}
function pu(e) {
  if (Ae(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function Qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gr(e, t) {
  return e ? wt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gf(e, t) {
  return e ? Ae(e) && Ae(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : wt(
    /* @__PURE__ */ Object.create(null),
    Fs(e),
    Fs(t ?? {})
  ) : t;
}
function jm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = wt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    i[n] = Qt(e[n], t[n]);
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
    De(n) || (n = wt({}, n)), a != null && !Je(a) && (a = null);
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
      set config(f) {
      },
      use(f, ...y) {
        return o.has(f) || (f && De(f.install) ? (o.add(f), f.install(v, ...y)) : De(f) && (o.add(f), f(v, ...y))), v;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), v;
      },
      component(f, y) {
        return y ? (r.components[f] = y, v) : r.components[f];
      },
      directive(f, y) {
        return y ? (r.directives[f] = y, v) : r.directives[f];
      },
      mount(f, y, C) {
        if (!d) {
          const E = v._ceVNode || xe(n, a);
          return E.appContext = r, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(E, f, C), d = !0, v._container = f, f.__vue_app__ = v, Kl(E.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        d && (ki(
          c,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(f, y) {
        return r.provides[f] = y, v;
      },
      runWithContext(f) {
        const y = ir;
        ir = v;
        try {
          return f();
        } finally {
          ir = y;
        }
      }
    };
    return v;
  };
}
let ir = null;
function Bh(e, t, i = qe) {
  const n = za(), a = Wt(t), r = wn(t), o = Hh(e, a), c = im((d, v) => {
    let f, y = qe, C;
    return vm(() => {
      const E = e[a];
      $t(f, E) && (f = E, v());
    }), {
      get() {
        return d(), i.get ? i.get(f) : f;
      },
      set(E) {
        const L = i.set ? i.set(E) : E;
        if (!$t(L, f) && !(y !== qe && $t(E, y)))
          return;
        const A = n.vnode.props, N = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        N || (f = E, v()), n.emit(`update:${t}`, L), $t(E, y) && ($t(E, L) && !$t(L, C) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        N && y !== qe && !$t(L, f)) && v(), y = E, C = L;
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
const Hh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Wt(t)}Modifiers`] || e[`${wn(t)}Modifiers`];
function Vm(e, t, ...i) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || qe;
  let a = i;
  const r = t.startsWith("update:"), o = r && Hh(n, t.slice(7));
  o && (o.trim && (a = i.map((f) => lt(f) ? f.trim() : f)), o.number && (a = a.map(Pl)));
  let c, d = n[c = yc(t)] || // also try camelCase event handler (#2249)
  n[c = yc(Wt(t))];
  !d && r && (d = n[c = yc(wn(t))]), d && ki(
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
    e.emitted[c] = !0, ki(
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
      const f = Vh(v, t, !0);
      f && (c = !0, wt(o, f));
    };
    !i && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !r && !c ? (Je(e) && n.set(e, null), null) : (Ae(r) ? r.forEach((d) => o[d] = null) : wt(o, r), Je(e) && n.set(e, o), o);
}
function Vl(e, t) {
  return !e || !Nl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, wn(t)) || Ze(e, t));
}
function bf(e) {
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
    renderCache: f,
    props: y,
    data: C,
    setupState: E,
    ctx: L,
    inheritAttrs: A
  } = e, N = Is(e);
  let D, M;
  try {
    if (i.shapeFlag & 4) {
      const k = a || n, oe = k;
      D = Wi(
        v.call(
          oe,
          k,
          f,
          y,
          E,
          C,
          L
        )
      ), M = c;
    } else {
      const k = t;
      D = Wi(
        k.length > 1 ? k(
          y,
          { attrs: c, slots: o, emit: d }
        ) : k(
          y,
          null
        )
      ), M = t.props ? c : Gm(c);
    }
  } catch (k) {
    vn.length = 0, Ml(k, e, 1), D = xe(Ft);
  }
  let z = D;
  if (M && A !== !1) {
    const k = Object.keys(M), { shapeFlag: oe } = z;
    k.length && oe & 7 && (r && k.some(Ll) && (M = qm(
      M,
      r
    )), z = Jn(z, M, !1, !0));
  }
  if (i.dirs && (z = Jn(z, null, !1, !0), z.dirs = z.dirs ? z.dirs.concat(i.dirs) : i.dirs), i.transition) {
    const k = jl(z.type) && Ps(z) || z;
    mo(k, i.transition);
  }
  return D = z, Is(N), D;
}
const Gm = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || Nl(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, qm = (e, t) => {
  const i = {};
  for (const n in e)
    (!Ll(n) || !(n.slice(9) in t)) && (i[n] = e[n]);
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
      return n ? mf(n, o, v) : !!o;
    if (d & 8) {
      const f = t.dynamicProps;
      for (let y = 0; y < f.length; y++) {
        const C = f[y];
        if (Kh(o, n, C) && !Vl(v, C))
          return !0;
      }
    }
  } else
    return (a || c) && (!c || !c.$stable) ? !0 : n === o ? !1 : n ? o ? mf(n, o, v) : !0 : !!o;
  return !1;
}
function mf(e, t, i) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const r = n[a];
    if (Kh(t, e, r) && !Vl(i, r))
      return !0;
  }
  return !1;
}
function Kh(e, t, i) {
  const n = e[i], a = t[i];
  return i === "style" && Je(n) && Je(a) ? !Zn(n, a) : n !== a;
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
      const f = e.vnode.dynamicProps;
      for (let y = 0; y < f.length; y++) {
        let C = f[y];
        if (Vl(e.emitsOptions, C))
          continue;
        const E = t[C];
        if (d)
          if (Ze(r, C))
            E !== r[C] && (r[C] = E, v = !0);
          else {
            const L = Wt(C);
            a[L] = hu(
              d,
              c,
              L,
              E,
              e,
              !1
            );
          }
        else
          E !== r[C] && (r[C] = E, v = !0);
      }
    }
  } else {
    Yh(e, t, a, r) && (v = !0);
    let f;
    for (const y in c)
      (!t || // for camelCase
      !Ze(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = wn(y)) === y || !Ze(t, f))) && (d ? i && // for camelCase
      (i[y] !== void 0 || // for kebab-case
      i[f] !== void 0) && (a[y] = hu(
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
  v && un(e.attrs, "set", "");
}
function Yh(e, t, i, n) {
  const [a, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let d in t) {
      if (Zr(d))
        continue;
      const v = t[d];
      let f;
      a && Ze(a, f = Wt(d)) ? !r || !r.includes(f) ? i[f] = v : (c || (c = {}))[f] = v : Vl(e.emitsOptions, d) || (!(d in n) || v !== n[d]) && (n[d] = v, o = !0);
    }
  if (r) {
    const d = /* @__PURE__ */ Ye(i), v = c || qe;
    for (let f = 0; f < r.length; f++) {
      const y = r[f];
      i[y] = hu(
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
function hu(e, t, i, n, a, r) {
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
          const f = Fo(a);
          n = v[i] = d.call(
            null,
            t
          ), f();
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
    ] && (n === "" || n === wn(i)) && (n = !0));
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
    const f = (y) => {
      d = !0;
      const [C, E] = Xh(y, t, !0);
      wt(o, C), E && c.push(...E);
    };
    !i && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !d)
    return Je(e) && n.set(e, Qa), Qa;
  if (Ae(r))
    for (let f = 0; f < r.length; f++) {
      const y = Wt(r[f]);
      yf(y) && (o[y] = qe);
    }
  else if (r)
    for (const f in r) {
      const y = Wt(f);
      if (yf(y)) {
        const C = r[f], E = o[y] = Ae(C) || De(C) ? { type: C } : wt({}, C), L = E.type;
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
function yf(e) {
  return e[0] !== "$" && !Zr(e);
}
const Xu = (e) => e === "_" || e === "_ctx" || e === "$stable", Zu = (e) => Ae(e) ? e.map(Wi) : [Wi(e)], Qm = (e, t, i) => {
  if (t._n)
    return t;
  const n = Fe((...a) => Zu(t(...a)), i);
  return n._c = !1, n;
}, Zh = (e, t, i) => {
  const n = e._ctx;
  for (const a in e) {
    if (Xu(a)) continue;
    const r = e[a];
    if (De(r))
      t[a] = Qm(a, r, n);
    else if (r != null) {
      const o = Zu(r);
      t[a] = () => o;
    }
  }
}, Jh = (e, t) => {
  const i = Zu(t);
  e.slots.default = () => i;
}, Qh = (e, t, i) => {
  for (const n in t)
    (i || !Xu(n)) && (e[n] = t[n]);
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
      !Xu(c) && o[c] == null && delete a[c];
}, ei = oy;
function iy(e) {
  return ny(e);
}
function ny(e, t) {
  const i = $l();
  i.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: c,
    createComment: d,
    setText: v,
    setElementText: f,
    parentNode: y,
    nextSibling: C,
    setScopeId: E = Si,
    insertStaticContent: L
  } = e, A = (w, T, x, R = null, I = null, j = null, G = void 0, K = null, Q = !!T.dynamicChildren) => {
    if (w === T)
      return;
    w && !xa(w, T) && (R = tt(w), Te(w, I, j, !0), w = null), T.patchFlag === -2 && (Q = !1, T.dynamicChildren = null);
    const { type: V, ref: pe, shapeFlag: se } = T;
    switch (V) {
      case $o:
        N(w, T, x, R);
        break;
      case Ft:
        D(w, T, x, R);
        break;
      case Es:
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
          zt
        );
    }
    pe != null && I ? eo(pe, w && w.ref, j, T || w, !T) : pe == null && w && w.ref != null && eo(w.ref, null, j, w, !0);
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
      I = C(w), n(w, x, R), w = I;
    n(T, x, R);
  }, k = ({ el: w, anchor: T }) => {
    let x;
    for (; w && w !== T; )
      x = C(w), a(w), w = x;
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
    ), se & 8 ? f(Q, w.children) : se & 16 && fe(
      w.children,
      Q,
      null,
      R,
      I,
      Ec(w, j),
      G,
      K
    ), Oe && ya(w, null, R, "created"), Z(Q, w, w.scopeId, G, R), pe) {
      for (const ze in pe)
        ze !== "value" && !Zr(ze) && r(Q, ze, null, pe[ze], j, R);
      "value" in pe && r(Q, "value", null, pe.value, j), (V = pe.onVnodeBeforeMount) && Hi(V, R, w);
    }
    Oe && ya(w, null, R, "beforeMount");
    const Pe = ay(I, he);
    Pe && he.beforeEnter(Q), n(Q, T, x), ((V = pe && pe.onVnodeMounted) || Pe || Oe) && ei(() => {
      V && Hi(V, R, w), Pe && he.enter(Q), Oe && ya(w, null, R, "mounted");
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
      const pe = w[V] = K ? cn(w[V]) : Wi(w[V]);
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
    if (x && _a(x, !1), (Oe = he.onVnodeBeforeUpdate) && Hi(Oe, x, T, w), pe && ya(T, w, x, "beforeUpdate"), x && _a(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!w.dynamicChildren || w.dynamicChildren.length !== V.length) && (Q = 0, G = !1, V = null), (se.innerHTML && he.innerHTML == null || se.textContent && he.textContent == null) && f(K, ""), V ? le(
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
      Q & 1 && w.children !== T.children && f(K, T.children);
    } else !G && V == null && _e(K, se, he, x, I);
    ((Oe = he.onVnodeUpdated) || pe) && ei(() => {
      Oe && Hi(Oe, x, T, w), pe && ya(T, w, x, "updated");
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
          !Zr(j) && !(j in x) && r(
            w,
            j,
            T[j],
            null,
            I,
            R
          );
      for (const j in x) {
        if (Zr(j)) continue;
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
    (T.key != null || I && T === I.subTree) && Ju(
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
    if (Bl(w) && (K.ctx.renderer = zt), dy(K, !1, G), K.asyncDep) {
      if (I && I.registerDep(K, Y, G), !w.el) {
        const Q = K.subTree = xe(Ft);
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
          const Et = ev(w);
          if (Et) {
            se && (se.el = ze.el, ce(w, se, G)), Et.asyncDep.then(() => {
              ei(() => {
                w.isUnmounted || V();
              }, I);
            });
            return;
          }
        }
        let $e = se, He;
        _a(w, !1), se ? (se.el = ze.el, ce(w, se, G)) : se = ze, he && Ts(he), (He = se.props && se.props.onVnodeBeforeUpdate) && Hi(He, Pe, se, ze), _a(w, !0);
        const ot = bf(w), vt = w.subTree;
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
        ), se.el = ot.el, $e === null && Ym(w, ot.el), Oe && ei(Oe, I), (He = se.props && se.props.onVnodeUpdated) && ei(
          () => Hi(He, Pe, se, ze),
          I
        );
      } else {
        let se;
        const { el: he, props: Oe } = T, { bm: Pe, m: ze, parent: $e, root: He, type: ot } = w, vt = tr(T);
        _a(w, !1), Pe && Ts(Pe), !vt && (se = Oe && Oe.onVnodeBeforeMount) && Hi(se, $e, T), _a(w, !0);
        {
          He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(
            ot,
            w.parent ? w.parent.type : void 0
          );
          const Et = w.subTree = bf(w);
          A(
            null,
            Et,
            x,
            R,
            w,
            I,
            j
          ), T.el = Et.el;
        }
        if (ze && ei(ze, I), !vt && (se = Oe && Oe.onVnodeMounted)) {
          const Et = T;
          ei(
            () => Hi(se, $e, Et),
            I
          );
        }
        (T.shapeFlag & 256 || $e && tr($e.vnode) && $e.vnode.shapeFlag & 256) && w.a && ei(w.a, I), w.isMounted = !0, T = x = R = null;
      }
    };
    w.scope.on();
    const Q = w.effect = new ih(K);
    w.scope.off();
    const V = w.update = Q.run.bind(Q), pe = w.job = Q.runIfDirty.bind(Q);
    pe.i = w, pe.id = w.uid, Q.scheduler = () => Gu(pe), _a(w, !0), V();
  }, ce = (w, T, x) => {
    T.component = w;
    const R = w.vnode.props;
    w.vnode = T, w.next = null, Zm(w, T.props, R, x), ty(w, T.children, x), bn(), sf(w), mn();
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
    Oe & 8 ? (pe & 16 && ht(V, I, j), se !== V && f(x, se)) : pe & 16 ? Oe & 16 ? de(
      V,
      se,
      x,
      R,
      I,
      j,
      G,
      K,
      Q
    ) : ht(V, I, j, !0) : (pe & 8 && f(x, ""), Oe & 16 && fe(
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
    w = w || Qa, T = T || Qa;
    const V = w.length, pe = T.length, se = Math.min(V, pe);
    let he;
    for (he = 0; he < se; he++) {
      const Oe = T[he] = Q ? cn(T[he]) : Wi(T[he]);
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
      const Oe = w[V], Pe = T[V] = Q ? cn(T[V]) : Wi(T[V]);
      if (xa(Oe, Pe))
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
      const Oe = w[se], Pe = T[he] = Q ? cn(T[he]) : Wi(T[he]);
      if (xa(Oe, Pe))
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
            T[V] = Q ? cn(T[V]) : Wi(T[V]),
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
        const et = T[V] = Q ? cn(T[V]) : Wi(T[V]);
        et.key != null && ze.set(et.key, V);
      }
      let $e, He = 0;
      const ot = he - Pe + 1;
      let vt = !1, Et = 0;
      const Ut = new Array(ot);
      for (V = 0; V < ot; V++) Ut[V] = 0;
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
            if (Ut[$e - Pe] === 0 && xa(et, T[$e])) {
              dt = $e;
              break;
            }
        dt === void 0 ? Te(et, I, j, !0) : (Ut[dt - Pe] = V + 1, dt >= Et ? Et = dt : vt = !0, A(
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
      const Ti = vt ? ry(Ut) : Qa;
      for ($e = Ti.length - 1, V = ot - 1; V >= 0; V--) {
        const et = Pe + V, dt = T[et], Fi = T[et + 1], vi = et + 1 < pe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Fi.el || tv(Fi)
        ) : R;
        Ut[V] === 0 ? A(
          null,
          dt,
          x,
          vi,
          I,
          j,
          G,
          K,
          Q
        ) : vt && ($e < 0 || V !== Ti[$e] ? Se(dt, x, vi, 2) : $e--);
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
      G.move(w, T, x, zt);
      return;
    }
    if (G === ie) {
      n(j, T, x);
      for (let se = 0; se < Q.length; se++)
        Se(Q[se], T, x, R);
      n(w.anchor, T, x);
      return;
    }
    if (G === Es) {
      z(w, T, x);
      return;
    }
    if (R !== 2 && V & 1 && K)
      if (R === 0)
        K.persisted && !j[_i] ? n(j, T, x) : (K.beforeEnter(j), n(j, T, x), ei(() => K.enter(j), I));
      else {
        const { leave: se, delayLeave: he, afterLeave: Oe } = K, Pe = () => {
          w.ctx.isUnmounted ? a(j) : n(j, T, x);
        }, ze = () => {
          const $e = j._isLeaving || !!j[_i];
          j._isLeaving && j[_i](
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
    if (se === -2 && (I = !1), K != null && (bn(), eo(K, null, x, w, !0), mn()), Oe != null && (T.renderCache[Oe] = void 0), pe & 256) {
      T.ctx.deactivate(w);
      return;
    }
    const ze = pe & 1 && he, $e = !tr(w);
    let He;
    if ($e && (He = G && G.onVnodeBeforeUnmount) && Hi(He, T, w), pe & 6)
      ct(w.component, x, R);
    else {
      if (pe & 128) {
        w.suspense.unmount(x, R);
        return;
      }
      ze && ya(w, null, T, "beforeUnmount"), pe & 64 ? w.type.remove(
        w,
        T,
        x,
        zt,
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
    ($e && (He = G && G.onVnodeUnmounted) || ze || ot) && ei(() => {
      He && Hi(He, T, w), ze && ya(w, null, T, "unmounted"), ot && (w.el = null);
    }, x);
  }, Ke = (w) => {
    const { type: T, el: x, anchor: R, transition: I } = w;
    if (T === ie) {
      Le(x, R);
      return;
    }
    if (T === Es) {
      k(w);
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
      x = C(w), a(w), w = x;
    a(T);
  }, ct = (w, T, x) => {
    const { bum: R, scope: I, job: j, subTree: G, um: K, m: Q, a: V } = w;
    _f(Q), _f(V), R && Ts(R), I.stop(), j && (j.flags |= 8, Te(G, w, T, x)), K && ei(K, T), ei(() => {
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
    const T = C(w.anchor || w.el), x = T && T[Th];
    return x ? C(x) : T;
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
    ), T._vnode = w, ut || (ut = !0, sf(R), Sh(), ut = !1);
  }, zt = {
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
function _a({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ay(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ju(e, t, i = !1) {
  const n = e.children, a = t.children;
  if (Ae(n) && Ae(a))
    for (let r = 0; r < n.length; r++) {
      const o = n[r];
      let c = a[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = a[r] = cn(a[r]), c.el = o.el), !i && c.patchFlag !== -2 && Ju(o, c)), c.type === $o && (c.patchFlag === -1 && (c = a[r] = cn(c)), c.el = o.el), c.type === Ft && !c.el && (c.el = o.el);
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
function _f(e) {
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
const ie = /* @__PURE__ */ Symbol.for("v-fgt"), $o = /* @__PURE__ */ Symbol.for("v-txt"), Ft = /* @__PURE__ */ Symbol.for("v-cmt"), Es = /* @__PURE__ */ Symbol.for("v-stc"), vn = [];
let pi = null;
function m(e = !1) {
  vn.push(pi = e ? null : []);
}
function Qu() {
  vn.pop(), pi = vn[vn.length - 1] || null;
}
let yo = 1;
function Ms(e, t = !1) {
  yo += e, e < 0 && pi && t && (pi.hasOnce = !0);
}
function nv(e) {
  return e.dynamicChildren = yo > 0 ? pi || Qa : null, Qu(), yo > 0 && pi && pi.push(e), e;
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
function _o(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function xa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const av = ({ key: e }) => e ?? null, As = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || /* @__PURE__ */ Yt(e) || De(e) ? { i: Dt, r: e, k: t, f: !!i } : e : null);
function l(e, t = null, i = null, n = 0, a = null, r = e === ie ? 0 : 1, o = !1, c = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && av(t),
    ref: t && As(t),
    scopeId: zl,
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
    ctx: Dt
  };
  return c ? (zs(d, i), r & 128 && e.normalize(d)) : i && (d.shapeFlag |= lt(i) ? 8 : 16), yo > 0 && // avoid a block node from tracking itself
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
  if ((!e || e === Fh) && (e = Ft), _o(e)) {
    const c = Jn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && zs(c, i), yo > 0 && !r && pi && (c.shapeFlag & 6 ? pi[pi.indexOf(e)] = c : pi.push(c)), c.patchFlag = -2, c;
  }
  if (vy(e) && (e = e.__vccOpts), t) {
    t = wo(t);
    let { class: c, style: d } = t;
    c && !lt(c) && (t.class = be(c)), Je(d) && (/* @__PURE__ */ Ku(d) && !Ae(d) && (d = wt({}, d)), t.style = hi(d));
  }
  const o = lt(e) ? 1 : iv(e) ? 128 : jl(e) ? 64 : Je(e) ? 4 : De(e) ? 2 : 0;
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
function wo(e) {
  return e ? /* @__PURE__ */ Ku(e) || Wh(e) ? wt({}, e) : e : null;
}
function Jn(e, t, i = !1, n = !1) {
  const { props: a, ref: r, patchFlag: o, children: c, transition: d } = e, v = t ? Xt(a || {}, t) : a, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && av(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && r ? Ae(r) ? r.concat(As(t)) : [r, As(t)] : As(t)
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
    ssContent: e.ssContent && Jn(e.ssContent),
    ssFallback: e.ssFallback && Jn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && n && mo(
    f,
    d.clone(f)
  ), f;
}
function ge(e = " ", t = 0) {
  return xe($o, null, e, t);
}
function P(e = "", t = !1) {
  return t ? (m(), je(Ft, null, e)) : xe(Ft, null, e);
}
function Wi(e) {
  return e == null || typeof e == "boolean" ? xe(Ft) : Ae(e) ? xe(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _o(e) ? cn(e) : xe($o, null, String(e));
}
function cn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Jn(e);
}
function zs(e, t) {
  let i = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Ae(t))
    i = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), zs(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !Wh(t) ? t._ctx = Dt : a === 3 && Dt && (Dt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (De(t)) {
    if (n & 65) {
      zs(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Dt }, i = 32;
  } else
    t = String(t), n & 64 ? (i = 16, t = [ge(t)]) : i = 8;
  e.children = t, e.shapeFlag |= i;
}
function Xt(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const n = e[i];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = be([t.class, n.class]));
      else if (a === "style")
        t.style = hi([t.style, n.style]);
      else if (Nl(a)) {
        const r = t[a], o = n[a];
        o && r !== o && !(Ae(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ll(a) && (t[a] = o);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Hi(e, t, i, n = null) {
  ki(e, t, 7, [
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
let qt = null;
const za = () => qt || Dt;
let Us, So;
{
  const e = $l(), t = (i, n) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(n), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  Us = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => qt = i
  ), So = t(
    "__VUE_SSR_SETTERS__",
    (i) => Co = i
  );
}
const Fo = (e) => {
  const t = qt;
  return Us(e), e.scope.on(), () => {
    e.scope.off(), Us(t);
  };
}, wf = () => {
  qt && qt.scope.off(), Us(null);
};
function rv(e) {
  return e.vnode.shapeFlag & 4;
}
let Co = !1;
function dy(e, t = !1, i = !1) {
  t && So(t);
  const { props: n, children: a } = e.vnode, r = rv(e);
  Xm(e, n, r, t), ey(e, a, i || t);
  const o = r ? fy(e, t) : void 0;
  return t && So(!1), o;
}
function fy(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Im);
  const { setup: n } = i;
  if (n) {
    bn();
    const a = e.setupContext = n.length > 1 ? sv(e) : null, r = Fo(e), o = Io(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), c = Yp(o);
    if (mn(), r(), (c || e.sp) && !tr(e) && Rh(e), c) {
      if (o.then(wf, wf), t)
        return o.then((d) => {
          So(!0);
          try {
            Sf(e, d, t);
          } finally {
            So(!1);
          }
        }).catch((d) => {
          Ml(d, e, 0);
        });
      e.asyncDep = o;
    } else
      Sf(e, o);
  } else
    ov(e);
}
function Sf(e, t, i) {
  De(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = mh(t)), ov(e);
}
function ov(e, t, i) {
  const n = e.type;
  e.render || (e.render = n.render || Si);
  {
    const a = Fo(e);
    bn();
    try {
      Dm(e);
    } finally {
      mn(), a();
    }
  }
}
const py = {
  get(e, t) {
    return Kt(e, "get", ""), e[t];
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
function Kl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mh(Jb(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in to)
        return to[i](e);
    },
    has(t, i) {
      return i in t || i in to;
    }
  })) : e.proxy;
}
function hy(e, t = !0) {
  return De(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function vy(e) {
  return De(e) && "__vccOpts" in e;
}
const B = (e, t) => /* @__PURE__ */ am(e, t, Co);
function ni(e, t, i) {
  try {
    Ms(-1);
    const n = arguments.length;
    return n === 2 ? Je(t) && !Ae(t) ? _o(t) ? xe(e, null, [t]) : xe(e, t) : xe(e, null, t) : (n > 3 ? i = Array.prototype.slice.call(arguments, 2) : n === 3 && _o(i) && (i = [i]), xe(e, t, i));
  } finally {
    Ms(1);
  }
}
const gy = "3.5.42", by = Si;
let vu;
const Cf = typeof window < "u" && window.trustedTypes;
if (Cf)
  try {
    vu = /* @__PURE__ */ Cf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lv = vu ? (e) => vu.createHTML(e) : (e) => e, my = "http://www.w3.org/2000/svg", yy = "http://www.w3.org/1998/Math/MathML", ln = typeof document < "u" ? document : null, kf = ln && /* @__PURE__ */ ln.createElement("template"), _y = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, n) => {
    const a = t === "svg" ? ln.createElementNS(my, e) : t === "mathml" ? ln.createElementNS(yy, e) : i ? ln.createElement(e, { is: i }) : ln.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => ln.createTextNode(e),
  createComment: (e) => ln.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ln.querySelector(e),
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
      kf.innerHTML = lv(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const c = kf.content;
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
}, zn = "transition", Dr = "animation", ko = /* @__PURE__ */ Symbol("_vtc"), cv = {
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
}, wy = /* @__PURE__ */ wt(
  {},
  Ah,
  cv
), Sy = (e) => (e.displayName = "Transition", e.props = wy, e), Cy = /* @__PURE__ */ Sy(
  (e, { slots: t }) => ni(Sm, ky(e), t)
), wa = (e, t = []) => {
  Ae(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, Tf = (e) => e ? Ae(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
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
    appearToClass: f = c,
    leaveFromClass: y = `${i}-leave-from`,
    leaveActiveClass: C = `${i}-leave-active`,
    leaveToClass: E = `${i}-leave-to`
  } = e, L = Ty(a), A = L && L[0], N = L && L[1], {
    onBeforeEnter: D,
    onEnter: M,
    onEnterCancelled: z,
    onLeave: k,
    onLeaveCancelled: oe,
    onBeforeAppear: ue = D,
    onAppear: Z = M,
    onAppearCancelled: fe = z
  } = t, X = (ee, J, F, U) => {
    ee._enterCancelled = U, Sa(ee, J ? f : c), Sa(ee, J ? v : o), F && F();
  }, le = (ee, J) => {
    ee._isLeaving = !1, Sa(ee, y), Sa(ee, E), Sa(ee, C), J && J();
  }, _e = (ee) => (J, F) => {
    const U = ee ? Z : M, Y = () => X(J, ee, F);
    wa(U, [J, Y]), Ef(() => {
      Sa(J, ee ? d : r), an(J, ee ? f : c), Tf(U) || Af(J, n, A, Y);
    });
  };
  return wt(t, {
    onBeforeEnter(ee) {
      wa(D, [ee]), an(ee, r), an(ee, o);
    },
    onBeforeAppear(ee) {
      wa(ue, [ee]), an(ee, d), an(ee, v);
    },
    onEnter: _e(!1),
    onAppear: _e(!0),
    onLeave(ee, J) {
      ee._isLeaving = !0;
      const F = () => le(ee, J);
      an(ee, y), ee._enterCancelled ? (an(ee, C), Nf(ee)) : (Nf(ee), an(ee, C)), Ef(() => {
        ee._isLeaving && (Sa(ee, y), an(ee, E), Tf(k) || Af(ee, n, N, F));
      }), wa(k, [ee, F]);
    },
    onEnterCancelled(ee) {
      X(ee, !1, void 0, !0), wa(z, [ee]);
    },
    onAppearCancelled(ee) {
      X(ee, !0, void 0, !0), wa(fe, [ee]);
    },
    onLeaveCancelled(ee) {
      le(ee), wa(oe, [ee]);
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
function an(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[ko] || (e[ko] = /* @__PURE__ */ new Set())).add(t);
}
function Sa(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n));
  const i = e[ko];
  i && (i.delete(t), i.size || (e[ko] = void 0));
}
function Ef(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ey = 0;
function Af(e, t, i, n) {
  const a = e._endId = ++Ey, r = () => {
    a === e._endId && n();
  };
  if (i != null)
    return setTimeout(r, i);
  const { type: o, timeout: c, propCount: d } = Ay(e, t);
  if (!o)
    return n();
  const v = o + "end";
  let f = 0;
  const y = () => {
    e.removeEventListener(v, C), r();
  }, C = (E) => {
    E.target === e && ++f >= d && y();
  };
  setTimeout(() => {
    f < d && y();
  }, c + 1), e.addEventListener(v, C);
}
function Ay(e, t) {
  const i = window.getComputedStyle(e), n = (L) => (i[L] || "").split(", "), a = n(`${zn}Delay`), r = n(`${zn}Duration`), o = xf(a, r), c = n(`${Dr}Delay`), d = n(`${Dr}Duration`), v = xf(c, d);
  let f = null, y = 0, C = 0;
  t === zn ? o > 0 && (f = zn, y = o, C = r.length) : t === Dr ? v > 0 && (f = Dr, y = v, C = d.length) : (y = Math.max(o, v), f = y > 0 ? o > v ? zn : Dr : null, C = f ? f === zn ? r.length : d.length : 0);
  const E = f === zn && /\b(?:transform|all)(?:,|$)/.test(
    n(`${zn}Property`).toString()
  );
  return {
    type: f,
    timeout: y,
    propCount: C,
    hasTransform: E
  };
}
function xf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((i, n) => Of(i) + Of(e[n])));
}
function Of(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Nf(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function xy(e, t, i) {
  const n = e[ko];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const js = /* @__PURE__ */ Symbol("_vod"), uv = /* @__PURE__ */ Symbol("_vsh"), nr = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: i }) {
    e[js] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : Mr(e, t);
  },
  mounted(e, { value: t }, { transition: i }) {
    i && t && i.enter(e);
  },
  updated(e, { value: t, oldValue: i }, { transition: n }) {
    !t != !i && (n ? t ? (n.beforeEnter(e), Mr(e, !0), n.enter(e)) : n.leave(e, () => {
      Mr(e, !1);
    }) : Mr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Mr(e, t);
  }
};
function Mr(e, t) {
  e.style.display = t ? e[js] : "none", e[uv] = !t;
}
const dv = /* @__PURE__ */ Symbol("");
function Oy(e) {
  const t = za();
  if (!t)
    return;
  const i = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Bs(r, a));
  }, n = () => {
    const a = e(t.proxy);
    t.ce ? Bs(t.ce, a) : gu(t.subTree, a), i(a);
  };
  $h(() => {
    wh(n);
  }), ea(() => {
    We(n, Si, { flush: "post" });
    const a = new MutationObserver(n);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), Po(() => a.disconnect());
  });
}
function gu(e, t) {
  if (e.shapeFlag & 128) {
    const i = e.suspense;
    e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      gu(i.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Bs(e.el, t);
  else if (e.type === ie)
    e.children.forEach((i) => gu(i, t));
  else if (e.type === Es) {
    let { el: i, anchor: n } = e;
    for (; i && (Bs(i, t), i !== n); )
      i = i.nextSibling;
  }
}
function Bs(e, t) {
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
          i[c] == null && qr(n, c, "");
        }
      else
        for (const o in t)
          i[o] == null && qr(n, o, "");
    for (const o in i) {
      o === "display" && (r = !0);
      const c = i[o];
      c != null ? Iy(
        e,
        o,
        !lt(t) && t ? t[o] : void 0,
        c
      ) || qr(n, o, c) : qr(n, o, "");
    }
  } else if (a) {
    if (t !== i) {
      const o = n[dv];
      o && (i += ";" + o), n.cssText = i, r = Ny.test(i);
    }
  } else t && e.removeAttribute("style");
  js in e && (e[js] = r ? n.display : "", e[uv] && (n.display = "none"));
}
const vs = /\s*!important$/;
function qr(e, t, i) {
  if (Ae(i))
    i.forEach((n) => qr(e, t, n));
  else if (i == null && (i = ""), t.startsWith("--"))
    vs.test(i) ? e.setProperty(t, i.replace(vs, ""), "important") : e.setProperty(t, i);
  else {
    const n = Ry(e, t);
    vs.test(i) ? e.setProperty(
      wn(n),
      i.replace(vs, ""),
      "important"
    ) : e[n] = i;
  }
}
const Lf = ["Webkit", "Moz", "ms"], xc = {};
function Ry(e, t) {
  const i = xc[t];
  if (i)
    return i;
  let n = Wt(t);
  if (n !== "filter" && n in e)
    return xc[t] = n;
  n = Il(n);
  for (let a = 0; a < Lf.length; a++) {
    const r = Lf[a] + n;
    if (r in e)
      return xc[t] = r;
  }
  return t;
}
function Iy(e, t, i, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && lt(n) && i === n;
}
const Rf = "http://www.w3.org/1999/xlink";
function If(e, t, i, n, a, r = xb(t)) {
  n && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(Rf, t.slice(6, t.length)) : e.setAttributeNS(Rf, t, i) : i == null || r && !Qp(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Pi(i) ? String(i) : i
  );
}
function Pf(e, t, i, n, a) {
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
function Oa(e, t, i, n) {
  e.addEventListener(t, i, n);
}
function Py(e, t, i, n) {
  e.removeEventListener(t, i, n);
}
const $f = /* @__PURE__ */ Symbol("_vei");
function $y(e, t, i, n, a = null) {
  const r = e[$f] || (e[$f] = {}), o = r[t];
  if (n && o)
    o.value = n;
  else {
    const [c, d] = My(t);
    if (n) {
      const v = r[t] = jy(
        n,
        a
      );
      Oa(e, c, v, d);
    } else o && (Py(e, c, o, d), r[t] = void 0);
  }
}
const Fy = /(Once|Passive|Capture)$/, Dy = /^on:?(?:Once|Passive|Capture)$/;
function My(e) {
  let t, i;
  for (; (i = e.match(Fy)) && !Dy.test(e); )
    t || (t = {}), e = e.slice(0, e.length - i[1].length), t[i[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : wn(e.slice(2)), t];
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
        v && ki(
          v,
          t,
          5,
          c
        );
      }
    } else
      ki(
        a,
        t,
        5,
        [n]
      );
  };
  return i.value = e, i.attached = Uy(), i;
}
const Ff = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, By = (e, t, i, n, a, r) => {
  const o = a === "svg";
  t === "class" ? xy(e, n, o) : t === "style" ? Ly(e, i, n) : Nl(t) ? Ll(t) || $y(e, t, i, n, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Hy(e, t, n, o)) ? (Pf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && If(e, t, n, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Vy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !lt(n))) ? Pf(e, Wt(t), n, r, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), If(e, t, n, o));
};
function Hy(e, t, i, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ff(t) && De(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Ff(t) && lt(i) ? !1 : t in e;
}
function Vy(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const n = Wt(t);
  return Array.isArray(i) ? i.some((a) => Wt(a) === n) : Object.keys(i).some((a) => Wt(a) === n);
}
const Hs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ae(t) ? (i) => Ts(t, i) : t;
};
function Ky(e) {
  e.target.composing = !0;
}
function Df(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const La = /* @__PURE__ */ Symbol("_assign"), gs = /* @__PURE__ */ Symbol("_initialValue");
function Nc(e, t, i) {
  return t && (e = e.trim()), i && (e = Pl(e)), e;
}
const ft = {
  created(e, { modifiers: { lazy: t, trim: i, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[gs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[gs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[La] = Hs(a);
    const r = n || a.props && a.props.type === "number";
    Oa(e, t ? "change" : "input", (o) => {
      o.target.composing || e[La](Nc(e.value, i, r));
    }), (i || r) && Oa(e, "change", () => {
      e.value = Nc(e.value, i, r);
    }), t || (Oa(e, "compositionstart", Ky), Oa(e, "compositionend", Df), Oa(e, "change", Df));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: i, number: n } }) {
    const a = t ?? "", r = e[gs];
    delete e[gs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[La](Nc(e.value, i, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: n, trim: a, number: r } }, o) {
    if (e[La] = Hs(o), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? Pl(e.value) : e.value, d = t ?? "";
    if (c === d)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === i || a && e.value.trim() === d) || (e.value = d);
  }
}, Jt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, n) {
    e._modelValue = t, Oa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => i ? Pl(Vs(d)) : Vs(d)
      ), r = e.multiple, o = r ? Da(e._modelValue) ? new Set(a) : a : a[0], c = e._pendingValue = [
        r,
        r ? Ae(o) ? a.slice() : a : o
      ];
      try {
        e[La](o);
      } finally {
        ti(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[La] = Hs(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Mf(e, t);
  },
  beforeUpdate(e, { value: t }, i) {
    e._modelValue = t, e[La] = Hs(i);
  },
  updated(e, { value: t }) {
    const i = e._pendingValue;
    e._pendingValue = void 0, (!i || i[0] !== e.multiple || !Gy(t, i[1], i[0])) && Mf(e, t);
  }
};
function Gy(e, t, i) {
  if (!i || Ae(e)) return Zn(e, t);
  if (Da(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function Mf(e, t) {
  const i = e.multiple, n = Ae(t);
  if (!(i && !n && !Da(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], c = Vs(o);
      if (i)
        if (n) {
          const d = typeof c;
          d === "string" || d === "number" ? o.selected = t.some((v) => String(v) === String(c)) : o.selected = Nb(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (Zn(Vs(o), t)) {
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
    const r = wn(a.key);
    if (t.some(
      (o) => o === r || Yy[o] === r
    ))
      return e(a);
  }));
}, Xy = /* @__PURE__ */ wt({ patchProp: By }, _y);
let zf;
function Zy() {
  return zf || (zf = iy(Xy));
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
function ed(e, t, i) {
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
function Uf(e, t) {
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
    } catch (f) {
      v = !0, a = f;
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
    if (typeof e == "string") return Uf(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Uf(e, t) : void 0;
  }
}
const fv = Object.entries, jf = Object.setPrototypeOf, o_ = Object.isFrozen, s_ = Object.getPrototypeOf, l_ = Object.getOwnPropertyDescriptor;
let Ct = Object.freeze, Tt = Object.seal, Za = Object.create, pv = typeof Reflect < "u" && Reflect, bu = pv.apply, mu = pv.construct;
Ct || (Ct = function(t) {
  return t;
});
Tt || (Tt = function(t) {
  return t;
});
bu || (bu = function(t, i) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  return t.apply(i, a);
});
mu || (mu = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Ea = St(Array.prototype.forEach), c_ = St(Array.prototype.lastIndexOf), Bf = St(Array.prototype.pop), zr = St(Array.prototype.push), u_ = St(Array.prototype.splice), ar = Array.isArray, Wr = St(String.prototype.toLowerCase), Lc = St(String.prototype.toString), Hf = St(String.prototype.match), Ur = St(String.prototype.replace), Vf = St(String.prototype.indexOf), d_ = St(String.prototype.trim), f_ = St(Number.prototype.toString), p_ = St(Boolean.prototype.toString), Kf = typeof BigInt > "u" ? null : St(BigInt.prototype.toString), Gf = typeof Symbol > "u" ? null : St(Symbol.prototype.toString), ai = St(Object.prototype.hasOwnProperty), jr = St(Object.prototype.toString), Ht = St(RegExp.prototype.test), Ca = h_(TypeError);
function St(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
      n[a - 1] = arguments[a];
    return bu(e, t, n);
  };
}
function h_(e) {
  return function() {
    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
      i[n] = arguments[n];
    return mu(e, i);
  };
}
function Ge(e, t) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wr;
  if (jf && jf(e, null), !ar(t))
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
    ai(e, t) || (e[t] = null);
  return e;
}
function di(e) {
  const t = Za(null);
  for (const n of fv(e)) {
    var i = a_(n, 2);
    const a = i[0], r = i[1];
    ai(e, a) && (ar(r) ? t[a] = v_(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = di(r) : t[a] = r);
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
      return Kf ? Kf(e) : "0";
    case "symbol":
      return Gf ? Gf(e) : "Symbol()";
    case "undefined":
      return jr(e);
    case "function":
    case "object": {
      if (e === null)
        return jr(e);
      const t = e, i = Ni(t, "toString");
      if (typeof i == "function") {
        const n = i(t);
        return typeof n == "string" ? n : jr(n);
      }
      return jr(e);
    }
    default:
      return jr(e);
  }
}
function Ni(e, t) {
  for (; e !== null; ) {
    const n = l_(e, t);
    if (n) {
      if (n.get)
        return St(n.get);
      if (typeof n.value == "function")
        return St(n.value);
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
    return Ht(e, ""), !0;
  } catch {
    return !1;
  }
}
const qf = Ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Rc = Ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ic = Ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), m_ = Ct(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pc = Ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), y_ = Ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Wf = Ct(["#text"]), Yf = Ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), $c = Ct(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xf = Ct(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), bs = Ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), __ = Tt(/{{[\w\W]*|^[\w\W]*}}/g), w_ = Tt(/<%[\w\W]*|^[\w\W]*%>/g), S_ = Tt(/\${[\w\W]*/g), C_ = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), k_ = Tt(/^aria-[\-\w]+$/), Zf = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), T_ = Tt(/^(?:\w+script|data):/i), E_ = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), A_ = Tt(/^html$/i), x_ = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), Jf = Tt(/<[/\w!]/g), Qf = Tt(/<[/\w]/g), O_ = Tt(/<\/no(script|embed|frames)/i), N_ = Tt(/\/>/i), ci = {
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
}, hv = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], L_ = Ct(Ge({}, hv)), R_ = (function() {
  const e = {};
  return Ea(hv, (t) => {
    e[t] = Tt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ct(e);
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
}, ep = function() {
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
  return ai(t, i) && ar(t[i]) ? Ge(a.base ? di(a.base) : {}, t[i], a.transform) : n;
}, Fc = function(t, i, n) {
  const a = ai(t, i) ? t[i] : void 0;
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
  const f = e.DOMParser, y = e.trustedTypes, C = c.prototype, E = Ni(C, "cloneNode"), L = Ni(C, "remove"), A = Ni(C, "nextSibling"), N = Ni(C, "childNodes"), D = Ni(C, "parentNode"), M = Ni(C, "shadowRoot"), z = Ni(C, "attributes"), k = o && o.prototype ? Ni(o.prototype, "nodeType") : null, oe = o && o.prototype ? Ni(o.prototype, "nodeName") : null, ue = o && o.prototype ? Ni(o.prototype, "ownerDocument") : null, Z = function(S) {
    return k ? k(S) : S.nodeType;
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
  }, ce = function() {
    return ee || (_e = P_(y, a), ee = !0), _e;
  }, ae = i, me = ae.implementation, de = ae.createNodeIterator, Se = ae.createDocumentFragment, Te = ae.getElementsByTagName, Ke = n.importNode;
  let Le = ep();
  t.isSupported = typeof fv == "function" && typeof D == "function" && me && me.createHTMLDocument !== void 0;
  const ct = __, ht = w_, tt = S_, ut = C_, rt = k_, zt = T_, H = E_, w = x_;
  let T = Zf, x = null;
  const R = Ge({}, [...qf, ...Rc, ...Ic, ...Pc, ...Wf]);
  let I = null;
  const j = Ge({}, [...Yf, ...$c, ...Xf, ...bs]);
  let G = Object.seal(Za(null, {
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
  const V = Object.seal(Za(null, {
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
  let pe = !0, se = !0, he = !1, Oe = !0, Pe = !1, ze = !0, $e = !1, He = !1, ot = null, vt = null, Et = !1, Ut = !1, Ti = !1, et = !1, dt = !0, Fi = !1;
  const vi = "user-content-";
  let na = !0, Cn = !1, Di = {}, Mi = null;
  const cr = Ge({}, [
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
  let Ji = null;
  const kn = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let Tn = null;
  const En = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gt = "http://www.w3.org/1998/Math/MathML", ja = "http://www.w3.org/2000/svg", ri = "http://www.w3.org/1999/xhtml";
  let An = ri, aa = !1, Ba = null;
  const ra = Ge({}, [gt, ja, ri], Lc), xn = Ct(["mi", "mo", "mn", "ms", "mtext"]);
  let ur = Ge({}, xn);
  const Mo = Ct(["annotation-xml"]);
  let At = Ge({}, Mo);
  const On = Ge({}, ["title", "style", "font", "a", "script"]);
  let Nn = null;
  const Ql = ["application/xhtml+xml", "text/html"], ec = "text/html";
  let pt = null, Ln = null;
  const tc = i.createElement("form"), zo = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, dr = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ln && Ln === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = di(S), Nn = // eslint-disable-next-line unicorn/prefer-includes
    Ql.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? ec : S.PARSER_MEDIA_TYPE, pt = Nn === "application/xhtml+xml" ? Lc : Wr, x = Un(S, "ALLOWED_TAGS", R, {
      transform: pt
    }), I = Un(S, "ALLOWED_ATTR", j, {
      transform: pt
    }), Ba = Un(S, "ALLOWED_NAMESPACES", ra, {
      transform: Lc
    }), Tn = Un(S, "ADD_URI_SAFE_ATTR", En, {
      transform: pt,
      base: En
    }), Ji = Un(S, "ADD_DATA_URI_TAGS", kn, {
      transform: pt,
      base: kn
    }), Mi = Un(S, "FORBID_CONTENTS", cr, {
      transform: pt
    }), K = Un(S, "FORBID_TAGS", di({}), {
      transform: pt
    }), Q = Un(S, "FORBID_ATTR", di({}), {
      transform: pt
    }), Di = ai(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? di(S.USE_PROFILES) : S.USE_PROFILES : !1, pe = S.ALLOW_ARIA_ATTR !== !1, se = S.ALLOW_DATA_ATTR !== !1, he = S.ALLOW_UNKNOWN_PROTOCOLS || !1, Oe = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Pe = S.SAFE_FOR_TEMPLATES || !1, ze = S.SAFE_FOR_XML !== !1, $e = S.WHOLE_DOCUMENT || !1, Ut = S.RETURN_DOM || !1, Ti = S.RETURN_DOM_FRAGMENT || !1, et = S.RETURN_TRUSTED_TYPE || !1, Et = S.FORCE_BODY || !1, dt = S.SANITIZE_DOM !== !1, Fi = S.SANITIZE_NAMED_PROPS || !1, na = S.KEEP_CONTENT !== !1, Cn = S.IN_PLACE || !1, T = b_(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Zf, An = typeof S.NAMESPACE == "string" ? S.NAMESPACE : ri, ur = Fc(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, xn)
      // Default built-in map
    ), At = Fc(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Mo)
      // Default built-in map
    );
    const $ = Fc(S, "CUSTOM_ELEMENT_HANDLING", () => Za(null));
    if (G = Za(null), ai($, "tagNameCheck") && zo($.tagNameCheck) && (G.tagNameCheck = $.tagNameCheck), ai($, "attributeNameCheck") && zo($.attributeNameCheck) && (G.attributeNameCheck = $.attributeNameCheck), ai($, "allowCustomizedBuiltInElements") && typeof $.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = $.allowCustomizedBuiltInElements), Tt(G), Pe && (se = !1), Ti && (Ut = !0), Di && (x = Ge({}, Wf), I = Za(null), Di.html === !0 && (Ge(x, qf), Ge(I, Yf)), Di.svg === !0 && (Ge(x, Rc), Ge(I, $c), Ge(I, bs)), Di.svgFilters === !0 && (Ge(x, Ic), Ge(I, $c), Ge(I, bs)), Di.mathMl === !0 && (Ge(x, Pc), Ge(I, Xf), Ge(I, bs))), V.tagCheck = null, V.attributeCheck = null, ai(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? V.tagCheck = S.ADD_TAGS : ar(S.ADD_TAGS) && (x === R && (x = di(x)), Ge(x, S.ADD_TAGS, pt))), ai(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? V.attributeCheck = S.ADD_ATTR : ar(S.ADD_ATTR) && (I === j && (I = di(I)), Ge(I, S.ADD_ATTR, pt))), ai(S, "ADD_FORBID_CONTENTS") && ar(S.ADD_FORBID_CONTENTS) && (Mi === cr && (Mi = di(Mi)), Ge(Mi, S.ADD_FORBID_CONTENTS, pt)), na && (x["#text"] = !0), $e && Ge(x, ["html", "head", "body"]), x.table && (Ge(x, ["tbody"]), delete K.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ca('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ca('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = X;
      X = S.TRUSTED_TYPES_POLICY;
      try {
        le = U("");
      } catch (re) {
        throw X = q, re;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (X = void 0, le = "") : (X === void 0 && (X = ce()), X && typeof le == "string" && (le = U("")));
    Ct && Ct(S), Ln = S;
  }, Uo = Ge({}, [...Rc, ...Ic, ...m_]), jo = Ge({}, [...Pc, ...y_]), ic = function(S, $, q) {
    return $.namespaceURI === ri ? S === "svg" : $.namespaceURI === gt ? S === "svg" && (q === "annotation-xml" || ur[q]) : !!Uo[S];
  }, nc = function(S, $, q) {
    return $.namespaceURI === ri ? S === "math" : $.namespaceURI === ja ? S === "math" && At[q] : !!jo[S];
  }, ac = function(S, $, q) {
    return $.namespaceURI === ja && !At[q] || $.namespaceURI === gt && !ur[q] ? !1 : !jo[S] && (On[S] || !Uo[S]);
  }, rc = function(S) {
    let $ = D(S);
    (!$ || !$.tagName) && ($ = {
      namespaceURI: An,
      tagName: "template"
    });
    const q = Wr(S.tagName), re = Wr($.tagName);
    return Ba[S.namespaceURI] ? S.namespaceURI === ja ? ic(q, $, re) : S.namespaceURI === gt ? nc(q, $, re) : S.namespaceURI === ri ? ac(q, $, re) : !!(Nn === "application/xhtml+xml" && Ba[S.namespaceURI]) : !1;
  }, zi = function(S) {
    zr(t.removed, {
      element: S
    });
    try {
      D(S).removeChild(S);
    } catch {
      if (L(S), !D(S))
        throw Ca("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Bo = function(S, $, q) {
    try {
      S.removeAttributeNode($);
    } catch {
      try {
        S.removeAttribute(q);
      } catch {
      }
    }
  }, oa = function(S) {
    Rn(S);
    const $ = N(S);
    if ($) {
      const re = [];
      Ea($, (ve) => {
        zr(re, ve);
      }), Ea(re, (ve) => {
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
        typeof Ne == "string" && Bo(S, ve, Ne);
      }
  }, Ei = function(S, $, q) {
    if (!q)
      try {
        q = $.getAttributeNode(S);
      } catch {
        q = null;
      }
    zr(t.removed, {
      attribute: q || null,
      from: $
    });
    try {
      q ? $.removeAttributeNode(q) : $.removeAttribute(S);
    } catch {
      try {
        $.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if (Ut || Ti)
        try {
          zi($);
        } catch {
        }
      else
        try {
          $.setAttribute(S, "");
        } catch {
        }
  }, fr = function(S) {
    const $ = z(S);
    if ($)
      for (let q = $.length - 1; q >= 0; --q) {
        const re = $[q], ve = re && re.name;
        typeof ve != "string" || I[pt(ve)] || Bo(S, re, ve);
      }
  }, Rn = function(S) {
    const $ = [S];
    for (; $.length > 0; ) {
      const q = $.pop();
      Z(q) === ci.element && fr(q);
      const ve = N(q);
      if (ve)
        for (let Ne = ve.length - 1; Ne >= 0; --Ne)
          $.push(ve[Ne]);
    }
  }, Ha = function(S, $) {
    return ze ? S === "patchsrc" ? !0 : S === "for" && $ !== "label" && $ !== "output" : !1;
  }, Ho = function(S) {
    if (!ze)
      return;
    const $ = [S];
    for (; $.length > 0; ) {
      const q = $.pop(), re = Z(q);
      if (re === ci.processingInstruction || re === ci.comment && Ht(Qf, q.data)) {
        try {
          L(q);
        } catch {
        }
        continue;
      }
      if (re === ci.element) {
        const Ne = q, it = pt(fe(q));
        try {
          Ne.hasAttribute && Ne.hasAttribute("patchsrc") && Ne.removeAttribute("patchsrc"), Ne.hasAttribute && Ne.hasAttribute("for") && Ha("for", it) && Ne.removeAttribute("for");
        } catch {
        }
      }
      const ve = N(q);
      if (ve)
        for (let Ne = ve.length - 1; Ne >= 0; --Ne)
          $.push(ve[Ne]);
    }
  }, Vo = function(S) {
    let $ = null, q = null;
    if (Et)
      S = "<remove></remove>" + S;
    else {
      const Ne = Hf(S, /^[\r\n\t ]+/);
      q = Ne && Ne[0];
    }
    Nn === "application/xhtml+xml" && An === ri && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const re = X ? U(S) : S;
    if (An === ri)
      try {
        $ = new f().parseFromString(re, Nn);
      } catch {
      }
    if (!$ || !$.documentElement) {
      $ = me.createDocument(An, "template", null);
      try {
        $.documentElement.innerHTML = aa ? le : re;
      } catch {
      }
    }
    const ve = $.body || $.documentElement;
    return S && q && ve.insertBefore(i.createTextNode(q), ve.childNodes[0] || null), An === ri ? Te.call($, $e ? "html" : "body")[0] : $e ? $.documentElement : ve;
  }, pr = function(S) {
    const $ = ue ? ue(S) : S.ownerDocument;
    return de.call(
      $ || S,
      S,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, sa = function(S) {
    return S = Ur(S, ct, " "), S = Ur(S, ht, " "), S = Ur(S, tt, " "), S;
  }, hr = function(S) {
    var $;
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
      ve.data = sa(ve.data), ve = re.nextNode();
    const Ne = ($ = S.querySelectorAll) === null || $ === void 0 ? void 0 : $.call(S, "template");
    Ne && Ea(Ne, (it) => {
      Ui(it.content) && hr(it.content);
    });
  }, In = function(S) {
    const $ = oe ? oe(S) : null;
    return typeof $ != "string" || pt($) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    S.nodeType !== k(S) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
  }, Ui = function(S) {
    if (!k || typeof S != "object" || S === null)
      return !1;
    try {
      return k(S) === ci.documentFragment;
    } catch {
      return !1;
    }
  }, Pn = function(S) {
    if (!k || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof k(S) == "number";
    } catch {
      return !1;
    }
  };
  function mt(te, S, $) {
    te.length !== 0 && Ea(te, (q) => {
      q.call(t, S, $, Ln);
    });
  }
  const Ko = function(S, $) {
    return !!(ze && S.hasChildNodes() && !Pn(S.firstElementChild) && Ht(Jf, S.textContent) && Ht(Jf, S.innerHTML) || ze && S.namespaceURI === ri && L_[$] && (Pn(S.firstElementChild) || typeof S.textContent == "string" && Ht(R_[$], S.textContent)) || S.nodeType === ci.processingInstruction || ze && S.nodeType === ci.comment && Ht(Qf, S.data));
  }, la = function(S, $) {
    if (S instanceof RegExp)
      return Ht(S, $);
    if (S instanceof Function) {
      for (var q = arguments.length, re = new Array(q > 2 ? q - 2 : 0), ve = 2; ve < q; ve++)
        re[ve - 2] = arguments[ve];
      return !!S($, ...re);
    }
    return !1;
  }, Go = function(S, $, q) {
    if (!K[$] && br($) && la(G.tagNameCheck, $))
      return !1;
    if (na && !Mi[$]) {
      const re = D(S), ve = N(S);
      if (ve && re) {
        const Ne = ve.length;
        for (let it = Ne - 1; it >= 0; --it) {
          const nt = S === q ? E(ve[it], !0) : ve[it];
          re.insertBefore(nt, A(S));
        }
      }
    }
    return zi(S), !0;
  }, qo = function(S, $, q, re) {
    return S.length === 0 ? $ : $ === q || $ === re ? di($) : $;
  }, Wo = function(S, $) {
    return S === $ || D(S) !== null ? !1 : (Cn && Rn(S), !0);
  }, vr = function(S, $) {
    if (mt(Le.beforeSanitizeElements, S, null), Wo(S, $))
      return !0;
    if (In(S))
      return zi(S), !0;
    const q = pt(fe(S));
    if (x = qo(Le.uponSanitizeElement, x, R, ot), mt(Le.uponSanitizeElement, S, {
      tagName: q,
      allowedTags: x
    }), Wo(S, $))
      return !0;
    if (Ko(S, q))
      return zi(S), !0;
    if (K[q] || !(V.tagCheck instanceof Function && V.tagCheck(q)) && !x[q]) {
      const ve = Go(S, q, $);
      return ve === !1 && mt(Le.afterSanitizeElements, S, null), ve;
    }
    if (Z(S) === ci.element && !rc(S) || (q === "noscript" || q === "noembed" || q === "noframes") && Ht(O_, S.innerHTML))
      return zi(S), !0;
    if (Pe && S.nodeType === ci.text) {
      const ve = sa(S.textContent);
      S.textContent !== ve && (zr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = ve);
    }
    return mt(Le.afterSanitizeElements, S, null), !1;
  }, gr = function(S, $, q) {
    if (Q[$] || Ha($, S) || dt && ($ === "id" || $ === "name") && (q in i || q in tc))
      return !1;
    const re = I[$] || V.attributeCheck instanceof Function && V.attributeCheck($, S);
    return se && Ht(ut, $) || pe && Ht(rt, $) ? !0 : re ? Tn[$] || Ht(T, Ur(q, H, "")) || ($ === "src" || $ === "xlink:href" || $ === "href") && S !== "script" && Vf(q, "data:") === 0 && Ji[S] || he && !Ht(zt, Ur(q, H, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      br(S) && la(G.tagNameCheck, S) && la(G.attributeNameCheck, $, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      $ === "is" && G.allowCustomizedBuiltInElements && la(G.tagNameCheck, q)
    );
  }, Yo = Ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), br = function(S) {
    return !Yo[Wr(S)] && Ht(w, S);
  }, oc = function(S, $, q, re) {
    if (X && typeof y == "object" && typeof y.getAttributeType == "function" && !q)
      switch (y.getAttributeType(S, $)) {
        case "TrustedHTML":
          return U(re);
        case "TrustedScriptURL":
          return Y(re);
      }
    return re;
  }, sc = function(S, $, q, re) {
    try {
      q ? S.setAttributeNS(q, $, re) : S.setAttribute($, re), In(S) ? zi(S) : Bf(t.removed);
    } catch {
      Ei($, S);
    }
  }, mr = function(S) {
    mt(Le.beforeSanitizeAttributes, S, null);
    const $ = S.attributes;
    if (!$ || In(S))
      return;
    I = qo(Le.uponSanitizeAttribute, I, j, vt);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: I,
      forceKeepAttr: void 0
    };
    let re = $.length;
    const ve = pt(S.nodeName);
    for (; re--; ) {
      const Ne = $[re], it = Ne.name, nt = Ne.namespaceURI, Ot = Ne.value, yt = pt(it), _r = Ot;
      let Nt = it === "value" ? _r : d_(_r);
      if (q.attrName = yt, q.attrValue = Nt, q.keepAttr = !0, q.forceKeepAttr = void 0, mt(Le.uponSanitizeAttribute, S, q), Nt = q.attrValue, Fi && (yt === "id" || yt === "name") && Vf(Nt, vi) !== 0 && (Ei(it, S, Ne), Nt = vi + Nt), ze && Ht(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Nt)) {
        Ei(it, S, Ne);
        continue;
      }
      if (yt === "attributename" && Hf(Nt, "href")) {
        Ei(it, S, Ne);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          Ei(it, S, Ne);
          continue;
        }
        if (!Oe && Ht(N_, Nt)) {
          Ei(it, S, Ne);
          continue;
        }
        if (Pe && (Nt = sa(Nt)), !gr(ve, yt, Nt)) {
          Ei(it, S, Ne);
          continue;
        }
        Nt = oc(ve, yt, nt, Nt), Nt !== _r && sc(S, it, nt, Nt);
      }
    }
    mt(Le.afterSanitizeAttributes, S, null);
  }, xt = function(S) {
    let $ = null;
    const q = pr(S);
    for (mt(Le.beforeSanitizeShadowDOM, S, null); $ = q.nextNode(); )
      if (mt(Le.uponSanitizeShadowNode, $, null), vr($, S), mr($), Ui($.content) && xt($.content), Z($) === ci.element) {
        const re = M($);
        Ui(re) && (yr(re), xt(re));
      }
    mt(Le.afterSanitizeShadowDOM, S, null);
  }, yr = function(S) {
    const $ = [{
      node: S,
      shadow: null
    }];
    for (; $.length > 0; ) {
      const q = $.pop();
      if (q.shadow) {
        xt(q.shadow);
        continue;
      }
      const re = q.node, Ne = Z(re) === ci.element, it = N(re);
      if (it)
        for (let nt = it.length - 1; nt >= 0; --nt)
          $.push({
            node: it[nt],
            shadow: null
          });
      if (Ne) {
        const nt = oe ? oe(re) : null;
        if (typeof nt == "string" && pt(nt) === "template") {
          const Ot = re.content;
          Ui(Ot) && $.push({
            node: Ot,
            shadow: null
          });
        }
      }
      if (Ne) {
        const nt = M(re);
        Ui(nt) && $.push({
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
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, $ = null, q = null, re = null, ve = null;
    if (aa = !te, aa && (te = "<!-->"), typeof te != "string" && !Pn(te) && (te = g_(te), typeof te != "string"))
      throw Ca("dirty is not a string, aborting");
    if (!t.isSupported)
      return te;
    He ? (x = ot, I = vt) : dr(S), (Le.uponSanitizeElement.length > 0 || Le.uponSanitizeAttribute.length > 0) && (x = di(x)), Le.uponSanitizeAttribute.length > 0 && (I = di(I)), t.removed = [];
    const Ne = Cn && typeof te != "string" && Pn(te);
    if (Ne) {
      Ho(te);
      const Ot = fe(te);
      if (typeof Ot == "string") {
        const yt = pt(Ot);
        if (!x[yt] || K[yt])
          throw oa(te), Ca("root node is forbidden and cannot be sanitized in-place");
      }
      if (In(te))
        throw oa(te), Ca("root node is clobbered and cannot be sanitized in-place");
      try {
        yr(te);
      } catch (yt) {
        throw oa(te), yt;
      }
    } else if (Pn(te))
      $ = Vo("<!---->"), q = $.ownerDocument.importNode(te, !0), q.nodeType === ci.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? $ = q : $.appendChild(q), yr(q);
    else {
      if (!Ut && !Pe && !$e && // eslint-disable-next-line unicorn/prefer-includes
      te.indexOf("<") === -1)
        return X && et ? U(te) : te;
      if ($ = Vo(te), !$)
        return Ut ? null : et ? le : "";
    }
    $ && Et && zi($.firstChild);
    const it = Ne ? te : $;
    try {
      const Ot = pr(it);
      for (; re = Ot.nextNode(); )
        vr(re, it), mr(re), Ui(re.content) && xt(re.content);
    } catch (Ot) {
      throw Ne && (oa(te), Ea(t.removed, (yt) => {
        yt.element && Rn(yt.element);
      })), Ot;
    }
    if (Ne)
      return Ea(t.removed, (Ot) => {
        Ot.element && Rn(Ot.element);
      }), Pe && hr(te), te;
    if (Ut) {
      if (Pe && hr($), Ti)
        for (ve = Se.call($.ownerDocument); $.firstChild; )
          ve.appendChild($.firstChild);
      else
        ve = $;
      return (I.shadowroot || I.shadowrootmode) && (ve = Ke.call(n, ve, !0)), ve;
    }
    let nt = $e ? $.outerHTML : $.innerHTML;
    return $e && x["!doctype"] && $.ownerDocument && $.ownerDocument.doctype && $.ownerDocument.doctype.name && Ht(A_, $.ownerDocument.doctype.name) && (nt = "<!DOCTYPE " + $.ownerDocument.doctype.name + `>
` + nt), Pe && (nt = sa(nt)), X && et ? U(nt) : nt;
  }, t.setConfig = function() {
    let te = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    dr(te), He = !0, ot = x, vt = I;
  }, t.clearConfig = function() {
    Ln = null, He = !1, ot = null, vt = null, X = _e, le = "";
  }, t.isValidAttribute = function(te, S, $) {
    Ln || dr({});
    const q = pt(te), re = pt(S);
    return gr(q, re, $);
  }, t.addHook = function(te, S) {
    typeof S == "function" && ai(Le, te) && zr(Le[te], S);
  }, t.removeHook = function(te, S) {
    if (ai(Le, te)) {
      if (S !== void 0) {
        const $ = c_(Le[te], S);
        return $ === -1 ? void 0 : u_(Le[te], $, 1)[0];
      }
      return Bf(Le[te]);
    }
  }, t.removeHooks = function(te) {
    ai(Le, te) && (Le[te] = []);
  }, t.removeAllHooks = function() {
    Le = ep();
  }, t;
}
var gv = vv();
function td(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dc, tp;
function $_() {
  if (tp) return Dc;
  tp = 1;
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
const Ks = /* @__PURE__ */ td(F_);
function D_() {
  return globalThis._nc_l10n_locale;
}
function M_() {
  return D_().replaceAll(/_/g, "-");
}
function Gl() {
  return globalThis._nc_l10n_language;
}
function z_(e) {
  const t = Gl();
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
  }, d = (A) => A, v = (c.sanitize ? gv.sanitize : d) || d, f = c.escape ? Ks : d, y = (A) => typeof A == "string" || typeof A == "number", C = (A, N, D) => A.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (M, z) => {
    if (N === void 0 || !(z in N))
      return f(M);
    const k = N[z];
    return y(k) ? f(`${k}`) : typeof k == "object" && y(k.value) ? (k.escape !== !1 ? Ks : d)(`${k.value}`) : f(M);
  });
  let L = (a?.bundle ?? bv(e)).translations[t] || t;
  return L = Array.isArray(L) ? L[0] : L, v(typeof r == "object" || o !== void 0 ? C(
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
      const f = c.pluralFunction(n);
      return b(e, v[f], a, n, r);
    }
  }
  return n === 1 ? b(e, t, a, n, r) : b(e, i, a, n, r);
}
function U_(e, t = Gl()) {
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
class Gs {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, i, n) {
    this.scope = `${n ? Gs.GLOBAL_SCOPE_PERSISTENT : Gs.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = i;
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
    return new Gs(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function mv(e) {
  return new j_(e);
}
function B_() {
  try {
    return ed("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Mc, ip;
function yv() {
  if (ip) return Mc;
  ip = 1;
  var e = {};
  return Mc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...i) => console.error("SEMVER", ...i) : () => {
  }, Mc;
}
var zc, np;
function _v() {
  if (np) return zc;
  np = 1;
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
var ms = { exports: {} }, ap;
function H_() {
  return ap || (ap = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: i,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: a
    } = _v(), r = yv();
    t = e.exports = {};
    const o = t.re = [], c = t.safeRe = [], d = t.src = [], v = t.safeSrc = [], f = t.t = {};
    let y = 0;
    const C = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [C, n]
    ], L = (N) => {
      for (const [D, M] of E)
        N = N.split(`${D}*`).join(`${D}{0,${M}}`).split(`${D}+`).join(`${D}{1,${M}}`);
      return N;
    }, A = (N, D, M) => {
      const z = L(D), k = y++;
      r(N, k, D), f[N] = k, d[k] = D, v[k] = z, o[k] = new RegExp(D, M ? "g" : void 0), c[k] = new RegExp(z, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${C}*`), A("MAINVERSION", `(${d[f.NUMERICIDENTIFIER]})\\.(${d[f.NUMERICIDENTIFIER]})\\.(${d[f.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${d[f.NUMERICIDENTIFIERLOOSE]})\\.(${d[f.NUMERICIDENTIFIERLOOSE]})\\.(${d[f.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${d[f.NONNUMERICIDENTIFIER]}|${d[f.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${d[f.NONNUMERICIDENTIFIER]}|${d[f.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${d[f.PRERELEASEIDENTIFIER]}(?:\\.${d[f.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${d[f.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[f.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${C}+`), A("BUILD", `(?:\\+(${d[f.BUILDIDENTIFIER]}(?:\\.${d[f.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${d[f.MAINVERSION]}${d[f.PRERELEASE]}?${d[f.BUILD]}?`), A("FULL", `^${d[f.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${d[f.MAINVERSIONLOOSE]}${d[f.PRERELEASELOOSE]}?${d[f.BUILD]}?`), A("LOOSE", `^${d[f.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${d[f.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${d[f.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${d[f.XRANGEIDENTIFIER]})(?:\\.(${d[f.XRANGEIDENTIFIER]})(?:\\.(${d[f.XRANGEIDENTIFIER]})(?:${d[f.PRERELEASE]})?${d[f.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${d[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[f.XRANGEIDENTIFIERLOOSE]})(?:${d[f.PRERELEASELOOSE]})?${d[f.BUILD]}?)?)?`), A("XRANGE", `^${d[f.GTLT]}\\s*${d[f.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${d[f.GTLT]}\\s*${d[f.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`), A("COERCE", `${d[f.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", d[f.COERCEPLAIN] + `(?:${d[f.PRERELEASE]})?(?:${d[f.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", d[f.COERCE], !0), A("COERCERTLFULL", d[f.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${d[f.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${d[f.LONETILDE]}${d[f.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${d[f.LONETILDE]}${d[f.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${d[f.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${d[f.LONECARET]}${d[f.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${d[f.LONECARET]}${d[f.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${d[f.GTLT]}\\s*(${d[f.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${d[f.GTLT]}\\s*(${d[f.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${d[f.GTLT]}\\s*(${d[f.LOOSEPLAIN]}|${d[f.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${d[f.XRANGEPLAIN]})\\s+-\\s+(${d[f.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${d[f.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[f.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(ms, ms.exports)), ms.exports;
}
var Uc, rp;
function V_() {
  if (rp) return Uc;
  rp = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Uc = (n) => n ? typeof n != "object" ? e : n : t, Uc;
}
var jc, op;
function K_() {
  if (op) return jc;
  op = 1;
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
var Bc, sp;
function wv() {
  if (sp) return Bc;
  sp = 1;
  const e = yv(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: i } = _v(), { safeRe: n, t: a } = H_(), r = V_(), { compareIdentifiers: o } = K_(), c = (v, f) => {
    const y = f.split(".");
    if (y.length > v.length)
      return !1;
    for (let C = 0; C < y.length; C++)
      if (o(v[C], y[C]) !== 0)
        return !1;
    return !0;
  };
  class d {
    constructor(f, y) {
      if (y = r(y), f instanceof d) {
        if (f.loose === !!y.loose && f.includePrerelease === !!y.includePrerelease)
          return f;
        f = f.version;
      } else if (typeof f != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);
      if (f.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", f, y), this.options = y, this.loose = !!y.loose, this.includePrerelease = !!y.includePrerelease;
      const C = f.trim().match(y.loose ? n[a.LOOSE] : n[a.FULL]);
      if (!C)
        throw new TypeError(`Invalid Version: ${f}`);
      if (this.raw = f, this.major = +C[1], this.minor = +C[2], this.patch = +C[3], this.major > i || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > i || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > i || this.patch < 0)
        throw new TypeError("Invalid patch version");
      C[4] ? this.prerelease = C[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const L = +E;
          if (L >= 0 && L < i)
            return L;
        }
        return E;
      }) : this.prerelease = [], this.build = C[5] ? C[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(f) {
      if (e("SemVer.compare", this.version, this.options, f), !(f instanceof d)) {
        if (typeof f == "string" && f === this.version)
          return 0;
        f = new d(f, this.options);
      }
      return f.version === this.version ? 0 : this.compareMain(f) || this.comparePre(f);
    }
    compareMain(f) {
      return f instanceof d || (f = new d(f, this.options)), this.major < f.major ? -1 : this.major > f.major ? 1 : this.minor < f.minor ? -1 : this.minor > f.minor ? 1 : this.patch < f.patch ? -1 : this.patch > f.patch ? 1 : 0;
    }
    comparePre(f) {
      if (f instanceof d || (f = new d(f, this.options)), this.prerelease.length && !f.prerelease.length)
        return -1;
      if (!this.prerelease.length && f.prerelease.length)
        return 1;
      if (!this.prerelease.length && !f.prerelease.length)
        return 0;
      let y = 0;
      do {
        const C = this.prerelease[y], E = f.prerelease[y];
        if (e("prerelease compare", y, C, E), C === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === E)
          continue;
        return o(C, E);
      } while (++y);
    }
    compareBuild(f) {
      f instanceof d || (f = new d(f, this.options));
      let y = 0;
      do {
        const C = this.build[y], E = f.build[y];
        if (e("build compare", y, C, E), C === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === E)
          continue;
        return o(C, E);
      } while (++y);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(f, y, C) {
      if (f.startsWith("pre")) {
        if (!y && C === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (y) {
          const E = `-${y}`.match(this.options.loose ? n[a.PRERELEASELOOSE] : n[a.PRERELEASE]);
          if (!E || E[1] !== y)
            throw new Error(`invalid identifier: ${y}`);
        }
      }
      switch (f) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", y, C);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", y, C);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", y, C), this.inc("pre", y, C);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", y, C), this.inc("pre", y, C);
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
          const E = Number(C) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [E];
          else {
            let L = this.prerelease.length;
            for (; --L >= 0; )
              typeof this.prerelease[L] == "number" && (this.prerelease[L]++, L = -2);
            if (L === -1) {
              if (y === this.prerelease.join(".") && C === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (y) {
            let L = [y, E];
            if (C === !1 && (L = [y]), c(this.prerelease, y)) {
              const A = this.prerelease[y.split(".").length];
              isNaN(A) && (this.prerelease = L);
            } else
              this.prerelease = L;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${f}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Bc = d, Bc;
}
var Hc, lp;
function G_() {
  if (lp) return Hc;
  lp = 1;
  const e = wv();
  return Hc = (i, n) => new e(i, n).major, Hc;
}
var q_ = G_();
const cp = /* @__PURE__ */ td(q_);
var Vc, up;
function W_() {
  if (up) return Vc;
  up = 1;
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
var Kc, dp;
function Y_() {
  if (dp) return Kc;
  dp = 1;
  const e = W_();
  return Kc = (i, n) => {
    const a = e(i, n);
    return a ? a.version : null;
  }, Kc;
}
var X_ = Y_();
const Z_ = /* @__PURE__ */ td(X_);
class J_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Z_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : cp(t.getVersion()) !== cp(this.getVersion()) && console.warn(
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
let Br = null;
function id() {
  return Br !== null ? Br : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Br = new J_(window._nc_event_bus) : Br = window._nc_event_bus = new Q_(), Br);
}
function Sv(e, t) {
  id().subscribe(e, t);
}
function e1(e, t) {
  id().unsubscribe(e, t);
}
function gn(e, ...t) {
  id().emit(e, ...t);
}
const Cv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const t1 = Object.prototype.toString, i1 = (e) => t1.call(e) === "[object Object]", qa = () => {
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
function Yr(e) {
  var t;
  const i = hn(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function rr(...e) {
  const t = (n, a, r, o) => (n.addEventListener(a, r, o), () => n.removeEventListener(a, r, o)), i = B(() => {
    const n = Gc(hn(e[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return r1(() => {
    var n, a;
    return [
      (n = (a = i.value) === null || a === void 0 ? void 0 : a.map((r) => Yr(r))) !== null && n !== void 0 ? n : [kv].filter((r) => r != null),
      Gc(hn(i.value ? e[1] : e[0])),
      Gc(g(i.value ? e[2] : e[1])),
      hn(i.value ? e[3] : e[2])
    ];
  }, ([n, a, r, o], c, d) => {
    if (!n?.length || !a?.length || !r?.length) return;
    const v = i1(o) ? { ...o } : o, f = n.flatMap((y) => a.flatMap((C) => r.map((E) => t(y, C, E, v))));
    d(() => {
      f.forEach((y) => y());
    });
  }, { flush: "post" });
}
let fp = !1;
function pp(e, t, i = {}) {
  const { window: n = kv, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: c = !1 } = i;
  if (!n) return c ? {
    stop: qa,
    cancel: qa,
    trigger: qa
  } : qa;
  if (n1 && !fp) {
    fp = !0;
    const N = { passive: !0 };
    Array.from(n.document.body.children).forEach((D) => D.addEventListener("click", qa, N)), n.document.documentElement.addEventListener("click", qa, N);
  }
  let d = !0;
  const v = (N) => hn(a).some((D) => {
    if (typeof D == "string") return Array.from(n.document.querySelectorAll(D)).some((M) => M === N.target || N.composedPath().includes(M));
    {
      const M = Yr(D);
      return M && (N.target === M || N.composedPath().includes(M));
    }
  });
  function f(N) {
    const D = hn(N);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function y(N, D) {
    const M = hn(N), z = M.$.subTree && M.$.subTree.children;
    return z == null || !Array.isArray(z) ? !1 : z.some((k) => k.el === D.target || D.composedPath().includes(k.el));
  }
  const C = (N) => {
    const D = Yr(e);
    if (N.target != null && !(!(D instanceof Element) && f(e) && y(e, N)) && !(!D || D === N.target || N.composedPath().includes(D))) {
      if ("detail" in N && N.detail === 0 && (d = !v(N)), !d) {
        d = !0;
        return;
      }
      t(N);
    }
  };
  let E = !1;
  const L = [
    rr(n, "click", (N) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), C(N));
    }, {
      passive: !0,
      capture: r
    }),
    rr(n, "pointerdown", (N) => {
      const D = Yr(e);
      d = !v(N) && !!(D && !N.composedPath().includes(D));
    }, { passive: !0 }),
    o && rr(n, "blur", (N) => {
      setTimeout(() => {
        const D = Yr(e);
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
      d = !0, C(N), d = !1;
    }
  } : A;
}
function o1(e, t = {}) {
  const { threshold: i = 50, onSwipe: n, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, c = /* @__PURE__ */ Pt({
    x: 0,
    y: 0
  }), d = /* @__PURE__ */ Pt({
    x: 0,
    y: 0
  }), v = B(() => c.x - d.x), f = B(() => c.y - d.y), { max: y, abs: C } = Math, E = B(() => y(C(v.value), C(f.value)) >= i), L = /* @__PURE__ */ gh(!1), A = B(() => E.value ? C(v.value) > C(f.value) ? v.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), N = (Z) => [Z.touches[0].clientX, Z.touches[0].clientY], D = (Z, fe) => {
    c.x = Z, c.y = fe;
  }, M = (Z, fe) => {
    d.x = Z, d.y = fe;
  }, z = {
    passive: o,
    capture: !o
  }, k = (Z) => {
    L.value && a?.(Z, A.value), L.value = !1;
  }, oe = [
    rr(e, "touchstart", (Z) => {
      if (Z.touches.length !== 1) return;
      const [fe, X] = N(Z);
      D(fe, X), M(fe, X), r?.(Z);
    }, z),
    rr(e, "touchmove", (Z) => {
      if (Z.touches.length !== 1) return;
      const [fe, X] = N(Z);
      M(fe, X), z.capture && !z.passive && Math.abs(v.value) > Math.abs(f.value) && Z.preventDefault(), !L.value && E.value && (L.value = !0), L.value && n?.(Z);
    }, z),
    rr(e, ["touchend", "touchcancel"], k, z)
  ];
  return {
    isSwiping: L,
    direction: A,
    coordsStart: c,
    coordsEnd: d,
    lengthX: v,
    lengthY: f,
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
    let i = t, n = e, a = $m(), r = Pm(), o = /* @__PURE__ */ Ee([]), c = B(() => o.value.reduce((H, w) => (H[~~w.id] = w) && H, {})), d = B(() => o.value.length), v = /* @__PURE__ */ Ee(null), f = /* @__PURE__ */ Ee(!1), y = /* @__PURE__ */ Ee({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), C = /* @__PURE__ */ Ee({
      splitter: null,
      timeoutId: null
    }), E = B(() => ({
      [`splitpanes splitpanes--${n.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": y.value.dragging,
      "splitpanes--ready": f.value
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
      "ontouchstart" in window && (H.preventDefault(), C.value.splitter === w ? (clearTimeout(C.value.timeoutId), C.value.timeoutId = null, k(H, w), C.value.splitter = null) : (C.value.splitter = w, C.value.timeoutId = setTimeout(() => C.value.splitter = null, 500))), y.value.dragging || rt("splitter-click", {
        event: H,
        index: w
      }, !0);
    }, k = (H, w) => {
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
      R.classList.add("splitpanes__splitter"), T || (R.onmousedown = (I) => N(I, x), typeof window < "u" && "ontouchstart" in window && (R.ontouchstart = (I) => N(I, x)), R.onclick = (I) => z(I, x + 1), n.keyboardStep && (R.setAttribute("tabindex", "0"), R.setAttribute("role", "separator"), R.setAttribute("aria-orientation", n.horizontal ? "horizontal" : "vertical"), R.onkeydown = (I) => oe(I, x))), R.ondblclick = (I) => k(I, x + 1), w.parentNode.insertBefore(R, w);
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
      }), o.value.forEach((T, x) => T.index = x), f.value && !Se && (Se = !0, ti(() => {
        me(), Le({ addedPane: o.value[w] }), rt("pane-add", { pane: o.value[w] }), Se = !1;
      }));
    }, Ke = (H) => {
      let w = o.value.findIndex((x) => x.id === H);
      o.value[w].el = null;
      let T = o.value.splice(w, 1)[0];
      o.value.forEach((x, R) => x.index = R), ti(() => {
        me(), rt("pane-remove", { pane: T }), Le({ removedPane: {
          ...T
        } });
      });
    }, Le = (H = {}) => {
      !H.addedPane && !H.removedPane ? ht() : o.value.some((w) => w.givenSize !== null || w.min || w.max < 100) ? tt(H) : ct(), f.value && rt("resized");
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
      }), Math.abs(H) > 0.1 && f.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
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
    We(() => n.firstSplitter, () => me()), We(() => n.horizontal, (H) => ti(() => {
      i("direction-changed", {
        horizontal: H,
        panes: o.value.map((w) => ({
          min: w.min,
          max: w.max,
          size: w.size
        }))
      });
    })), ea(() => {
      Y(), me(), Le(), rt("ready"), f.value = !0;
    }), lr(() => f.value = !1);
    let zt = () => {
      let { class: H, ...w } = a;
      return ni("div", {
        ref: v,
        class: [E.value, H],
        ...w
      }, r.default?.());
    };
    return yi("panes", o), yi("indexedPanes", c), yi("horizontal", B(() => n.horizontal)), yi("requestUpdate", de), yi("onPaneAdd", Te), yi("onPaneRemove", Ke), yi("onPaneClick", ue), (H, w) => (m(), je(Wu(zt)));
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
    let t = e, i = Gt("requestUpdate"), n = Gt("onPaneAdd"), a = Gt("horizontal"), r = Gt("onPaneRemove"), o = Gt("onPaneClick"), c = za()?.uid, d = Gt("indexedPanes"), v = B(() => d.value[c]), f = /* @__PURE__ */ Ee(null), y = B(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), C.value);
    }), C = B(() => {
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
    })), We(() => C.value, (A) => i({
      uid: c,
      min: A
    })), We(() => E.value, (A) => i({
      uid: c,
      max: A
    })), ea(() => {
      n({
        id: c,
        el: f.value,
        min: C.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : y.value,
        size: y.value
      });
    }), lr(() => r(c)), (A, N) => (m(), _("div", {
      ref_key: "paneEl",
      ref: f,
      class: "splitpanes__pane",
      onClick: N[0] ||= (D) => g(o)(D, A._.uid),
      style: hi(L.value)
    }, [Me(A.$slots, "default")], 4));
  }
}, c1 = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", u1 = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", d1 = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", f1 = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const nd = 1024, Tv = nd / 2, qs = (e) => document.documentElement.clientWidth < e, Ev = /* @__PURE__ */ Ee(qs(nd)), Av = /* @__PURE__ */ Ee(qs(Tv));
window.addEventListener("resize", () => {
  Ev.value = qs(nd), Av.value = qs(Tv);
}, { passive: !0 });
function Do() {
  return /* @__PURE__ */ go(Ev);
}
function p1() {
  return /* @__PURE__ */ go(Av);
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
    return this.setLanguage(Gl().replace("-", "_"));
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
const xv = g1().detectLanguage().build(), kt = (...e) => xv.gettext(...e);
function ta(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: i, t: n } of t) {
        if (i !== Gl() || !n)
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
const E1 = /* @__PURE__ */ Symbol(""), [A1] = window.OC?.config?.version?.split(".") ?? [], Ov = Number.parseInt(A1 ?? "35"), x1 = Ov < 32, ia = Ov < 34, O1 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function N1() {
  return Gt(O1, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Qe = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, a] of t)
    i[n] = a;
  return i;
}, L1 = { class: "button-vue__wrapper" }, R1 = { class: "button-vue__icon" }, I1 = { class: "button-vue__text" }, P1 = /* @__PURE__ */ Mt({
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
    const i = e, n = t, { formBoxItemClass: a } = N1(), r = Gt(E1, null) !== null, o = B(() => r && i.to ? "RouterLink" : i.href ? "a" : "button"), c = B(() => o.value === "button" && typeof i.pressed == "boolean"), d = B(() => i.pressed ? "primary" : i.pressed === !1 && i.variant === "primary" ? "secondary" : i.variant), v = B(() => d.value.startsWith("tertiary")), f = B(() => i.alignment.split("-")[0]), y = B(() => i.alignment.includes("-")), C = Gt("NcPopover:trigger:attrs", () => ({}), !1), E = B(() => C()), L = B(() => {
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
    return (N, D) => (m(), je(Wu(o.value), Xt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${d.value}`]: d.value,
          "button-vue--tertiary": v.value,
          "button-vue--wide": e.wide,
          [`button-vue--${f.value}`]: f.value !== "center",
          "button-vue--reverse": y.value,
          "button-vue--legacy": g(x1),
          "button-vue--legacy34": g(ia)
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
}), Yi = /* @__PURE__ */ Qe(P1, [["__scopeId", "data-v-47ce59a3"]]), $1 = ["aria-hidden", "aria-label"], F1 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, D1 = ["d"], M1 = ["innerHTML"], z1 = /* @__PURE__ */ Mt({
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
}), ql = /* @__PURE__ */ Qe(z1, [["__scopeId", "data-v-aaedb1c3"]]);
j1();
function U1(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), gn("csrf-token-update", { token: e, _internal: !0 }));
}
function j1() {
  Sv("csrf-token-update", ({ token: e, _internal: t }) => {
    t || U1(e);
  });
}
mv("public").persist().build();
let Wa;
function hp(e, t) {
  return e ? e.getAttribute(t) : null;
}
function B1() {
  if (Wa !== void 0)
    return Wa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = hp(e, "data-user");
  return t === null ? (Wa = null, Wa) : (Wa = {
    uid: t,
    displayName: hp(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Wa);
}
var _t = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(_t || {});
class H1 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, i, n) {
    let a = "[" + _t[i].toUpperCase() + "] ";
    return n && n.app && (a += n.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), i === _t.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, i, n) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof i == "object" && n?.error === void 0 && (n.error = i), t) {
        case _t.Debug:
          console.debug(this.formatMessage(i, _t.Debug, n), n);
          break;
        case _t.Info:
          console.info(this.formatMessage(i, _t.Info, n), n);
          break;
        case _t.Warn:
          console.warn(this.formatMessage(i, _t.Warn, n), n);
          break;
        case _t.Error:
          console.error(this.formatMessage(i, _t.Error, n), n);
          break;
        case _t.Fatal:
        default:
          console.error(this.formatMessage(i, _t.Fatal, n), n);
          break;
      }
  }
  debug(t, i) {
    this.log(_t.Debug, t, Object.assign({}, this.context, i));
  }
  info(t, i) {
    this.log(_t.Info, t, Object.assign({}, this.context, i));
  }
  warn(t, i) {
    this.log(_t.Warn, t, Object.assign({}, this.context, i));
  }
  error(t, i) {
    this.log(_t.Error, t, Object.assign({}, this.context, i));
  }
  fatal(t, i) {
    this.log(_t.Fatal, t, Object.assign({}, this.context, i));
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
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? _t.Warn, window._oc_debug && (t.context.level = _t.Debug), document.removeEventListener("readystatechange", i)) : document.addEventListener("readystatechange", i);
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
const Fa = G1().detectUser().setApp("@nextcloud/vue").build();
function q1(e) {
  let t = !1, i;
  return (...n) => (t || (t = !0, i = e(...n)), i);
}
let Nv = "missing-app-name";
try {
  Nv = "library";
} catch {
  Fa.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const W1 = Nv;
let Y1 = "";
try {
  Y1 = "0.1.0-alpha.171";
} catch {
  Fa.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Lv() {
  return Gt("appName", W1);
}
const X1 = q1(() => {
  const e = ed("core", "apps", []), t = Lv();
  return e.find(({ id: i }) => i === t)?.name ?? t;
}), yu = z_();
ta(C1);
const Z1 = /* @__PURE__ */ Mt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = Do();
    We(t, i), ea(() => {
      i(t.value);
    }), lr(() => {
      t.value && i(!1);
    });
    function i(n = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = n ? "none" : "", n === !0 && gn("toggle-navigation", { open: !1 }));
    }
    return (n, a) => (m(), je(g(Yi), {
      "aria-label": g(kt)("Go back to the list"),
      class: be(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(kt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Fe(() => [
        xe(g(ql), {
          directional: "",
          path: g(c1)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), J1 = /* @__PURE__ */ Qe(Z1, [["__scopeId", "data-v-a28923a1"]]), vp = mv("nextcloud").persist().build(), Q1 = B_().theming?.name ?? "Nextcloud", e0 = {
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
      isMobile: Do(),
      isRtl: yu
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? gn("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && gn("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      vp.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), Fa.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(vp.getItem(this.paneConfigID), 10);
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
    i.pageHeading ? (m(), _("h1", t0, h(i.pageHeading), 1)) : P("", !0),
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
        }, null, 8, ["onClick"])) : P("", !0),
        Ie(l("div", i0, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [nr, !i.showDetails]
        ]),
        i.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : P("", !0)
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
      ])) : P("", !0)
    ], 64)) : P("", !0),
    e.$slots.list ? P("", !0) : Me(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const r0 = /* @__PURE__ */ Qe(e0, [["render", a0], ["__scopeId", "data-v-51427d61"]]);
var Rv = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Ws = /* @__PURE__ */ Rv.join(","), Iv = typeof Element > "u", Ma = Iv ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Ys = !Iv && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Xs = function(t, i) {
  var n;
  i === void 0 && (i = !0);
  var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), r = a === "" || a === "true", o = r || i && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Xs(t.parentNode));
  return o;
}, o0 = function(t) {
  var i, n = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "contenteditable");
  return n === "" || n === "true";
}, Pv = function(t, i, n) {
  if (Xs(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Ws));
  return i && Ma.call(t, Ws) && a.unshift(t), a = a.filter(n), a;
}, Zs = function(t, i, n) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Xs(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), d = c.length ? c : o.children, v = Zs(d, !0, n);
        n.flatten ? a.push.apply(a, v) : a.push({
          scopeParent: o,
          candidates: v
        });
      } else {
        var f = Ma.call(o, Ws);
        f && n.filter(o) && (i || !t.includes(o)) && a.push(o);
        var y = o.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(o), C = !Xs(y, !1) && (!n.shadowRootFilter || n.shadowRootFilter(o));
        if (y && C) {
          var E = Zs(y === !0 ? o.children : y.children, !0, n);
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
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || o0(t)) && !$v(t) ? 0 : t.tabIndex;
}, s0 = function(t, i) {
  var n = Na(t);
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
  var i = t.form || Ys(t), n = function(c) {
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
  var i, n = t && Ys(t), a = (i = n) === null || i === void 0 ? void 0 : i.host, r = !1;
  if (n && n !== t) {
    var o, c, d;
    for (r = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !r && a; ) {
      var v, f, y;
      n = Ys(a), a = (v = n) === null || v === void 0 ? void 0 : v.host, r = !!((f = a) !== null && f !== void 0 && (y = f.ownerDocument) !== null && y !== void 0 && y.contains(a));
    }
  }
  return r;
}, gp = function(t) {
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
  var d = Ma.call(t, "details>summary:first-of-type"), v = d ? t.parentElement : t;
  if (Ma.call(v, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  n === "full-native" || n === "legacy-full") {
    if (typeof a == "function") {
      for (var f = t; t; ) {
        var y = t.parentElement, C = Ys(t);
        if (y && !y.shadowRoot && a(y) === !0)
          return gp(t);
        t.assignedSlot ? t = t.assignedSlot : !y && C !== t.ownerDocument ? t = C.host : t = y;
      }
      t = f;
    }
    if (v0(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return gp(t);
  return !1;
}, b0 = function(t) {
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
}, Js = function(t, i) {
  return !(i.disabled || c0(i) || g0(i, t) || // For a details element with a summary, the summary element gets the focus
  u0(i) || b0(i));
}, _u = function(t, i) {
  return !(h0(i) || Na(i) < 0 || !Js(t, i));
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
  return i.getShadowRoot ? n = Zs([t], i.includeContainer, {
    filter: _u.bind(null, i),
    flatten: !1,
    getShadowRoot: i.getShadowRoot,
    shadowRootFilter: m0
  }) : n = Pv(t, i.includeContainer, _u.bind(null, i)), Dv(n);
}, _0 = function(t, i) {
  i = i || {};
  var n;
  return i.getShadowRoot ? n = Zs([t], i.includeContainer, {
    filter: Js.bind(null, i),
    flatten: !0,
    getShadowRoot: i.getShadowRoot
  }) : n = Pv(t, i.includeContainer, Js.bind(null, i)), n;
}, Ya = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Ma.call(t, Ws) === !1 ? !1 : _u(i, t);
}, w0 = /* @__PURE__ */ Rv.concat("iframe:not([inert]):not([inert] *)").join(","), qc = function(t, i) {
  if (i = i || {}, !t)
    throw new Error("No node provided");
  return Ma.call(t, w0) === !1 ? !1 : Js(i, t);
};
function wu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, n = Array(t); i < t; i++) n[i] = e[i];
  return n;
}
function S0(e) {
  if (Array.isArray(e)) return wu(e);
}
function bp(e, t) {
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
function mp(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), i.push.apply(i, n);
  }
  return i;
}
function yp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mp(Object(i), !0).forEach(function(n) {
      C0(e, n, i[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : mp(Object(i)).forEach(function(n) {
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
    if (typeof e == "string") return wu(e, t);
    var i = {}.toString.call(e).slice(8, -1);
    return i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set" ? Array.from(e) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? wu(e, t) : void 0;
  }
}
var fn = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, i) {
    var n = fn.getActiveTrap(t);
    i !== n && fn.pauseTrap(t);
    var a = t.indexOf(i);
    a === -1 || t.splice(a, 1), t.push(i);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, i) {
    var n = t.indexOf(i);
    n !== -1 && t.splice(n, 1), fn.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var i = fn.getActiveTrap(t);
    i?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var i = fn.getActiveTrap(t);
    i && !i._isManuallyPaused() && i._setPausedState(!1);
  }
}, O0 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, N0 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, io = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, L0 = function(t) {
  return io(t) && !t.shiftKey;
}, R0 = function(t) {
  return io(t) && t.shiftKey;
}, _p = function(t) {
  return setTimeout(t, 0);
}, Hr = function(t) {
  for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
    n[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, n) : t;
}, ys = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, I0 = [], ad = function(t, i) {
  var n = i?.document || document, a = i?.trapStack || I0, r = yp({
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
  }, f = function(F) {
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
  }, C = function() {
    var F = f("initialFocus", {
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
        F = ce || f("fallbackFocus");
      }
    } else F === null && (F = f("fallbackFocus"));
    if (!F)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return F;
  }, E = function() {
    if (o.containerGroups = o.containers.map(function(F) {
      var U = y0(F, r.tabbableOptions), Y = _0(F, r.tabbableOptions), ce = U.length > 0 ? U[0] : void 0, ae = U.length > 0 ? U[U.length - 1] : void 0, me = Y.find(function(Te) {
        return Ya(Te);
      }), de = Y.slice().reverse().find(function(Te) {
        return Ya(Te);
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
            return Ya(ht);
          }) : Y.slice(0, Y.indexOf(Ke)).reverse().find(function(ht) {
            return Ya(ht);
          }) : U[ct + (Le ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(F) {
      return F.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !f("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(F) {
      return F.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, L = function(F) {
    if (F !== !1 && F !== y(document)) {
      if (!F || !F.focus) {
        L(C());
        return;
      }
      F.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = F, O0(F) && F.select();
    }
  }, A = function(F) {
    var U = f("setReturnFocus", {
      params: [F]
    });
    return U || (U === !1 ? !1 : F);
  }, N = function(F) {
    var U = F.target, Y = F.event, ce = F.isBackward, ae = ce === void 0 ? !1 : ce;
    U = U || ys(Y), E();
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
        if (Te < 0 && (Se.container === U || qc(U, r.tabbableOptions) && !Ya(U, r.tabbableOptions) && !Se.nextTabbableNode(U, !1)) && (Te = de), Te >= 0) {
          var Ke = Te === 0 ? o.tabbableGroups.length - 1 : Te - 1, Le = o.tabbableGroups[Ke];
          me = Na(U) >= 0 ? Le.lastTabbableNode : Le.lastDomTabbableNode;
        } else io(Y) || (me = Se.nextTabbableNode(U, !1));
      } else {
        var ct = o.tabbableGroups.findIndex(function(ut) {
          var rt = ut.lastTabbableNode;
          return U === rt;
        });
        if (ct < 0 && (Se.container === U || qc(U, r.tabbableOptions) && !Ya(U, r.tabbableOptions) && !Se.nextTabbableNode(U)) && (ct = de), ct >= 0) {
          var ht = ct === o.tabbableGroups.length - 1 ? 0 : ct + 1, tt = o.tabbableGroups[ht];
          me = Na(U) >= 0 ? tt.firstTabbableNode : tt.firstDomTabbableNode;
        } else io(Y) || (me = Se.nextTabbableNode(U));
      }
    } else
      me = f("fallbackFocus");
    return me;
  }, D = function(F) {
    var U = ys(F);
    if (!(v(U, F) >= 0)) {
      if (Hr(r.clickOutsideDeactivates, F)) {
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
      Hr(r.allowOutsideClick, F) || F.preventDefault();
    }
  }, M = function(F) {
    var U = ys(F), Y = v(U, F) >= 0;
    if (Y || U instanceof Document)
      Y && (o.mostRecentlyFocusedNode = U);
    else {
      F.stopImmediatePropagation();
      var ce, ae = !0;
      if (o.mostRecentlyFocusedNode)
        if (Na(o.mostRecentlyFocusedNode) > 0) {
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
              return Na(Ke) > 0;
            });
          }) || (ae = !1);
      else
        ae = !1;
      ae && (ce = N({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), L(ce || o.mostRecentlyFocusedNode || C());
    }
    o.recentNavEvent = void 0;
  }, z = function(F) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = F;
    var Y = N({
      event: F,
      isBackward: U
    });
    Y && (io(F) && F.preventDefault(), L(Y));
  }, k = function(F) {
    (r.isKeyForward(F) || r.isKeyBackward(F)) && z(F, r.isKeyBackward(F));
  }, oe = function(F) {
    N0(F) && Hr(r.escapeDeactivates, F) !== !1 && (F.preventDefault(), c.deactivate());
  }, ue = function(F) {
    var U = ys(F);
    v(U, F) >= 0 || Hr(r.clickOutsideDeactivates, F) || Hr(r.allowOutsideClick, F) || (F.preventDefault(), F.stopImmediatePropagation());
  }, Z = function() {
    if (o.active) {
      fn.activateTrap(a, c);
      var F;
      return r.delayInitialFocus ? F = new Promise(function(U) {
        o.delayInitialFocusTimer = _p(function() {
          L(C()), U();
        });
      }) : L(C()), n.addEventListener("focusin", M, !0), n.addEventListener("mousedown", D, {
        capture: !0,
        passive: !1
      }), n.addEventListener("touchstart", D, {
        capture: !0,
        passive: !1
      }), n.addEventListener("click", ue, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", k, {
        capture: !0,
        passive: !1
      }), n.addEventListener("keydown", oe), F;
    }
  }, fe = function(F) {
    o.active && !o.paused && c._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var U = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), ce = bp(F), ae;
    try {
      for (ce.s(); !(ae = ce.n()).done; ) {
        var me = ae.value;
        U.add(me);
        for (var de = typeof ShadowRoot < "u" && me.getRootNode() instanceof ShadowRoot, Se = me; Se; ) {
          U.add(Se);
          var Te = Se.parentElement, Ke = [];
          Te ? Ke = Te.children : !Te && de && (Ke = Se.getRootNode().children, Te = Se.getRootNode().host, de = typeof ShadowRoot < "u" && Te.getRootNode() instanceof ShadowRoot);
          var Le = bp(Ke), ct;
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
      return n.removeEventListener("focusin", M, !0), n.removeEventListener("mousedown", D, !0), n.removeEventListener("touchstart", D, !0), n.removeEventListener("click", ue, !0), n.removeEventListener("keydown", k, !0), n.removeEventListener("keydown", oe), c;
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
        var ce = C();
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
      var U = d(F, "onActivate"), Y = d(F, "onPostActivate"), ce = d(F, "checkCanFocusTrap"), ae = fn.getActiveTrap(a), me = !1;
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
        if (ae === fn.getActiveTrap(a) && me) {
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
      var U = yp({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, F);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || c._setSubtreeIsolation(!1), o.alreadySilent.clear(), X(), o.active = !1, o.paused = !1, ee(), fn.deactivateTrap(a, c);
      var Y = d(U, "onDeactivate"), ce = d(U, "onPostDeactivate"), ae = d(U, "checkCanReturnFocus"), me = d(U, "delayReturnFocus"), de = d(U, "returnFocus", "returnFocusOnDeactivate");
      Y?.({
        trap: c
      });
      var Se = function() {
        de && L(A(o.nodeFocusedBeforeActivation)), ce?.({
          trap: c
        });
      }, Te = function() {
        me && de ? _p(Se) : Se();
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
const zv = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), P0 = /* @__PURE__ */ Mt({
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
function To() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function F0() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...To()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === To().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const jv = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Bv = /* @__PURE__ */ Symbol.for("NcContent:selector");
ta(_1);
const D0 = { class: "app-navigation-toggle-wrapper" }, M0 = /* @__PURE__ */ Mt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Bh(e, "open"), i = B(() => t.value ? kt("Close navigation") : kt("Open navigation"));
    return (n, a) => (m(), _("div", D0, [
      xe(g(Yi), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": i.value,
        title: i.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Fe(() => [
          xe(ql, {
            path: g(f1),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), z0 = /* @__PURE__ */ Qe(M0, [["__scopeId", "data-v-e8177cc7"]]), U0 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], j0 = { class: "app-navigation__search" }, B0 = /* @__PURE__ */ Mt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let i;
    const n = Gt(
      jv,
      () => by(),
      !1
    ), a = Cm("appNavigationContainer"), r = Do(), o = /* @__PURE__ */ Ee(!r.value), c = B(() => r.value && o.value);
    hm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), We(r, () => {
      o.value = !r.value;
    }), We(c, () => {
      f();
    }), ea(() => {
      n(!0), Sv("toggle-navigation", v), gn("navigation-toggled", {
        open: o.value
      }), i = ad(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (i.deactivate({ returnFocus: !1 }), d(!1)), !1),
        fallbackFocus: a.value,
        trapStack: To(),
        escapeDeactivates: !1
      }), f();
    }), Po(() => {
      n(!1), e1("toggle-navigation", v), i.deactivate();
    });
    function d(C) {
      if (o.value === C) {
        gn("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = C === void 0 ? !o.value : C;
      const E = getComputedStyle(document.body), L = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        gn("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * L);
    }
    function v({ open: C }) {
      return d(C);
    }
    function f() {
      c.value ? i.activate() : i.deactivate();
    }
    function y() {
      r.value && d(!1);
    }
    return (C, E) => (m(), _("div", {
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
        onKeydown: at(y, ["esc"])
      }, [
        l("div", j0, [
          Me(C.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: be(["app-navigation__body", { "app-navigation__body--no-list": !C.$slots.list }])
        }, [
          Me(C.$slots, "default", {}, void 0, !0)
        ], 2),
        C.$slots.list ? (m(), je(Uv, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Fe(() => [
            Me(C.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : P("", !0),
        Me(C.$slots, "footer", {}, void 0, !0)
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
  return m(), _("span", Xt(e.$attrs, {
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
        i.title ? (m(), _("title", W0, h(i.title), 1)) : P("", !0)
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
  return m(), _("span", Xt(e.$attrs, {
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
        i.title ? (m(), _("title", tw, h(i.title), 1)) : P("", !0)
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
  return m(), _("span", Xt(e.$attrs, {
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
        i.title ? (m(), _("title", lw, h(i.title), 1)) : P("", !0)
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
  return m(), _("span", Xt(e.$attrs, {
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
        i.title ? (m(), _("title", hw, h(i.title), 1)) : P("", !0)
      ])
    ], 8, fw))
  ], 16, dw);
}
const Vv = /* @__PURE__ */ Qe(uw, [["render", vw]]);
ta(m1);
const gw = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Hv,
    IconClose: Vv,
    NcButton: Yi
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
      labelConfirm: kt("Confirm changes"),
      labelCancel: kt("Cancel changes")
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
function Wl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const rd = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Kv = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), _w = {
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
    NcIconSvgWrapper: ql
  },
  mixins: [Gv],
  inject: {
    isInSemanticMenu: {
      from: rd,
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
    l("button", Xt({
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
        e.name ? (m(), _("strong", Tw, h(e.name), 1)) : P("", !0),
        e.isLongText ? (m(), _("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: h(e.text)
        }, null, 8, Ew)) : (m(), _("span", Aw, h(e.text), 1)),
        i.description ? (m(), _("span", {
          key: 3,
          class: "action-button__description",
          textContent: h(i.description)
        }, null, 8, xw)) : P("", !0)
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
      }, null, 8, ["path"])) : r.isChecked === !1 ? (m(), _("span", Ow)) : P("", !0),
      P("", !0)
    ], 16, Cw)
  ], 10, Sw);
}
const Lw = /* @__PURE__ */ Qe(ww, [["render", Nw], ["__scopeId", "data-v-6c2daf4e"]]);
function Rw(e, t = {}) {
  const i = F0();
  We(e, () => {
    hn(t.disabled) || (hn(e) ? i.pause() : i.unpause());
  }), Po(() => {
    i.unpause();
  });
}
const Iw = ["top", "right", "bottom", "left"], wp = ["start", "end"], Sp = /* @__PURE__ */ Iw.reduce((e, t) => e.concat(t, t + "-" + wp[0], t + "-" + wp[1]), []), Eo = Math.min, Su = Math.max, Pw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qv(e, t, i) {
  return Su(e, Eo(t, i));
}
function Ua(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _n(e) {
  return e.split("-")[0];
}
function Ii(e) {
  return e.split("-")[1];
}
function Wv(e) {
  return e === "x" ? "y" : "x";
}
function od(e) {
  return e === "y" ? "height" : "width";
}
function pn(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function sd(e) {
  return Wv(pn(e));
}
function Yv(e, t, i) {
  i === void 0 && (i = !1);
  const n = Ii(e), a = sd(e), r = od(a);
  let o = a === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = el(o)), [o, el(o)];
}
function $w(e) {
  const t = el(e);
  return [Qs(e), t, Qs(t)];
}
function Qs(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Cp = ["left", "right"], kp = ["right", "left"], Fw = ["top", "bottom"], Dw = ["bottom", "top"];
function Mw(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? kp : Cp : t ? Cp : kp;
    case "left":
    case "right":
      return t ? Fw : Dw;
    default:
      return [];
  }
}
function zw(e, t, i, n) {
  const a = Ii(e);
  let r = Mw(_n(e), i === "start", n);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(Qs)))), r;
}
function el(e) {
  const t = _n(e);
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
function no(e) {
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
function Tp(e, t, i) {
  let {
    reference: n,
    floating: a
  } = e;
  const r = pn(t), o = sd(t), c = od(o), d = _n(t), v = r === "y", f = n.x + n.width / 2 - a.width / 2, y = n.y + n.height / 2 - a.height / 2, C = n[c] / 2 - a[c] / 2;
  let E;
  switch (d) {
    case "top":
      E = {
        x: f,
        y: n.y - a.height
      };
      break;
    case "bottom":
      E = {
        x: f,
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
  const L = Ii(t);
  return L && (E[o] += C * (L === "end" ? 1 : -1) * (i && v ? -1 : 1)), E;
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
    rootBoundary: f = "viewport",
    elementContext: y = "floating",
    altBoundary: C = !1,
    padding: E = 0
  } = Ua(t, e), L = Xv(E), N = c[C ? y === "floating" ? "reference" : "floating" : y], D = no(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement(N))) == null || i ? N : N.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: v,
    rootBoundary: f,
    strategy: d
  })), M = y === "floating" ? {
    x: n,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, z = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), k = await (r.isElement == null ? void 0 : r.isElement(z)) && await (r.getScale == null ? void 0 : r.getScale(z)) || {
    x: 1,
    y: 1
  }, oe = no(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: M,
    offsetParent: z,
    strategy: d
  }) : M);
  return {
    top: (D.top - oe.top + L.top) / k.y,
    bottom: (oe.bottom - D.bottom + L.bottom) / k.y,
    left: (D.left - oe.left + L.left) / k.x,
    right: (oe.right - D.right + L.right) / k.x
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
    x: f,
    y
  } = Tp(v, n, d), C = n, E = 0;
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
      y: k,
      data: oe,
      reset: ue
    } = await M({
      x: f,
      y,
      initialPlacement: n,
      placement: C,
      strategy: a,
      middlewareData: L,
      rects: v,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = z ?? f, y = k ?? y, L[D] = {
      ...L[D],
      ...oe
    }, ue && E < Bw && (E++, typeof ue == "object" && (ue.placement && (C = ue.placement), ue.rects && (v = ue.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ue.rects), {
      x: f,
      y
    } = Tp(v, C, d)), A = -1);
  }
  return {
    x: f,
    y,
    placement: C,
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
      padding: f = 0
    } = Ua(e, t) || {};
    if (v == null)
      return {};
    const y = Xv(f), C = {
      x: i,
      y: n
    }, E = sd(a), L = od(E), A = await o.getDimensions(v), N = E === "y", D = N ? "top" : "left", M = N ? "bottom" : "right", z = N ? "clientHeight" : "clientWidth", k = r.reference[L] + r.reference[E] - C[E] - r.floating[L], oe = C[E] - r.reference[E], ue = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(v));
    let Z = ue ? ue[z] : 0;
    (!Z || !await (o.isElement == null ? void 0 : o.isElement(ue))) && (Z = c.floating[z] || r.floating[L]);
    const fe = k / 2 - oe / 2, X = Z / 2 - A[L] / 2 - 1, le = Eo(y[D], X), _e = Eo(y[M], X), ee = Z - A[L] - _e, J = Z / 2 - A[L] / 2 + fe, F = qv(le, J, ee), U = !d.arrow && Ii(a) != null && J !== F && r.reference[L] / 2 - (J < le ? le : _e) - A[L] / 2 < 0, Y = U ? J < le ? J - le : J - ee : 0;
    return {
      [E]: C[E] + Y,
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
  return (e ? [...i.filter((a) => Ii(a) === e), ...i.filter((a) => Ii(a) !== e)] : i.filter((a) => _n(a) === a)).filter((a) => e ? Ii(a) === e || (t ? Qs(a) !== a : !1) : !0);
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
        crossAxis: f = !1,
        alignment: y,
        allowedPlacements: C = Sp,
        autoAlignment: E = !0,
        ...L
      } = Ua(e, t), A = y !== void 0 || C === Sp ? Kw(y || null, E, C) : C, N = ((i = o.autoPlacement) == null ? void 0 : i.index) || 0, D = A[N];
      if (D == null)
        return {};
      if (c !== D)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await d.detectOverflow(t, L), z = Yv(D, r, await (d.isRTL == null ? void 0 : d.isRTL(v.floating))), k = [M[_n(D)], M[z[0]], M[z[1]]], oe = [...((n = o.autoPlacement) == null ? void 0 : n.overflows) || [], {
        placement: D,
        overflows: k
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
        const _e = Ii(le.placement);
        return [le.placement, _e && f ? (
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
        Ii(le[0]) ? 2 : 3
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
        mainAxis: f = !0,
        crossAxis: y = !0,
        fallbackPlacements: C,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: L = "none",
        flipAlignment: A = !0,
        ...N
      } = Ua(e, t);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const D = _n(a), M = pn(c), z = _n(c) === c, k = await (d.isRTL == null ? void 0 : d.isRTL(v.floating)), oe = C || (z || !A ? [el(c)] : $w(c)), ue = L !== "none";
      !C && ue && oe.push(...zw(c, A, L, k));
      const Z = [c, ...oe], fe = await d.detectOverflow(t, N), X = [];
      let le = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (f && X.push(fe[D]), y) {
        const F = Yv(a, o, k);
        X.push(fe[F[0]], fe[F[1]]);
      }
      if (le = [...le, {
        placement: a,
        overflows: X
      }], !X.every((F) => F <= 0)) {
        var _e, ee;
        const F = (((_e = r.flip) == null ? void 0 : _e.index) || 0) + 1, U = Z[F];
        if (U && (!(y === "alignment" ? M !== pn(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        le.every((ae) => pn(ae.placement) === M ? ae.overflows[0] > 0 : !0)))
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
                  const me = pn(ae.placement);
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
  } = e, r = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), o = _n(i), c = Ii(i), d = pn(i) === "y", v = Ww.has(o) ? -1 : 1, f = r && d ? -1 : 1, y = Ua(t, e);
  let {
    mainAxis: C,
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
    x: E * f,
    y: C * v
  } : {
    x: C * v,
    y: E * f
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
              y: k
            } = M;
            return {
              x: z,
              y: k
            };
          }
        },
        ...v
      } = Ua(e, t), f = {
        x: i,
        y: n
      }, y = await r.detectOverflow(t, v), C = pn(a), E = Wv(C);
      let L = f[E], A = f[C];
      const N = (M, z) => qv(z + y[M === "y" ? "top" : "left"], z, z - y[M === "y" ? "bottom" : "right"]);
      o && (L = N(E, L)), c && (A = N(C, A));
      const D = d.fn({
        ...t,
        [E]: L,
        [C]: A
      });
      return {
        ...D,
        data: {
          x: D.x - i,
          y: D.y - n,
          enabled: {
            [E]: o,
            [C]: c
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
      } = Ua(e, t), d = await a.detectOverflow(t, c), v = _n(i), f = Ii(i), y = pn(i) === "y", {
        width: C,
        height: E
      } = n.floating;
      let L, A;
      v === "top" || v === "bottom" ? (L = v, A = f === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = v, L = f === "end" ? "top" : "bottom");
      const N = E - d.top - d.bottom, D = C - d.left - d.right, M = Eo(E - d[L], N), z = Eo(C - d[A], D), k = t.middlewareData.shift, oe = !k;
      let ue = M, Z = z;
      k != null && k.enabled.x && (Z = D), k != null && k.enabled.y && (ue = N), oe && !f && (y ? Z = C - 2 * Su(d.left, d.right) : ue = E - 2 * Su(d.top, d.bottom)), await o({
        ...t,
        availableWidth: Z,
        availableHeight: ue
      });
      const fe = await a.getDimensions(r.floating);
      return C !== fe.width || E !== fe.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function wi(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Xi(e) {
  return wi(e).getComputedStyle(e);
}
const Ep = Math.min, ao = Math.max, tl = Math.round;
function Zv(e) {
  const t = Xi(e);
  let i = parseFloat(t.width), n = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = tl(i) !== a || tl(n) !== r;
  return o && (i = a, n = r), { width: i, height: n, fallback: o };
}
function Qn(e) {
  return Qv(e) ? (e.nodeName || "").toLowerCase() : "";
}
let _s;
function Jv() {
  if (_s) return _s;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (_s = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), _s) : navigator.userAgent;
}
function Zi(e) {
  return e instanceof wi(e).HTMLElement;
}
function Wn(e) {
  return e instanceof wi(e).Element;
}
function Qv(e) {
  return e instanceof wi(e).Node;
}
function Ap(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof wi(e).ShadowRoot || e instanceof ShadowRoot;
}
function Yl(e) {
  const { overflow: t, overflowX: i, overflowY: n, display: a } = Xi(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + i) && !["inline", "contents"].includes(a);
}
function Qw(e) {
  return ["table", "td", "th"].includes(Qn(e));
}
function Cu(e) {
  const t = /firefox/i.test(Jv()), i = Xi(e), n = i.backdropFilter || i.WebkitBackdropFilter;
  return i.transform !== "none" || i.perspective !== "none" || !!n && n !== "none" || t && i.willChange === "filter" || t && !!i.filter && i.filter !== "none" || ["transform", "perspective"].some(((a) => i.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = i.contain;
    return r != null && r.includes(a);
  }));
}
function eg() {
  return !/^((?!chrome|android).)*safari/i.test(Jv());
}
function ld(e) {
  return ["html", "body", "#document"].includes(Qn(e));
}
function tg(e) {
  return Wn(e) ? e : e.contextElement;
}
const ig = { x: 1, y: 1 };
function or(e) {
  const t = tg(e);
  if (!Zi(t)) return ig;
  const i = t.getBoundingClientRect(), { width: n, height: a, fallback: r } = Zv(t);
  let o = (r ? tl(i.width) : i.width) / n, c = (r ? tl(i.height) : i.height) / a;
  return o && Number.isFinite(o) || (o = 1), c && Number.isFinite(c) || (c = 1), { x: o, y: c };
}
function Ao(e, t, i, n) {
  var a, r;
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const o = e.getBoundingClientRect(), c = tg(e);
  let d = ig;
  t && (n ? Wn(n) && (d = or(n)) : d = or(e));
  const v = c ? wi(c) : window, f = !eg() && i;
  let y = (o.left + (f && ((a = v.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / d.x, C = (o.top + (f && ((r = v.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / d.y, E = o.width / d.x, L = o.height / d.y;
  if (c) {
    const A = wi(c), N = n && Wn(n) ? wi(n) : n;
    let D = A.frameElement;
    for (; D && n && N !== A; ) {
      const M = or(D), z = D.getBoundingClientRect(), k = getComputedStyle(D);
      z.x += (D.clientLeft + parseFloat(k.paddingLeft)) * M.x, z.y += (D.clientTop + parseFloat(k.paddingTop)) * M.y, y *= M.x, C *= M.y, E *= M.x, L *= M.y, y += z.x, C += z.y, D = wi(D).frameElement;
    }
  }
  return { width: E, height: L, top: C, right: y + E, bottom: C + L, left: y, x: y, y: C };
}
function Yn(e) {
  return ((Qv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Xl(e) {
  return Wn(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function ng(e) {
  return Ao(Yn(e)).left + Xl(e).scrollLeft;
}
function xo(e) {
  if (Qn(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Ap(e) && e.host || Yn(e);
  return Ap(t) ? t.host : t;
}
function ag(e) {
  const t = xo(e);
  return ld(t) ? t.ownerDocument.body : Zi(t) && Yl(t) ? t : ag(t);
}
function il(e, t) {
  var i;
  t === void 0 && (t = []);
  const n = ag(e), a = n === ((i = e.ownerDocument) == null ? void 0 : i.body), r = wi(n);
  return a ? t.concat(r, r.visualViewport || [], Yl(n) ? n : []) : t.concat(n, il(n));
}
function xp(e, t, i) {
  return t === "viewport" ? no((function(n, a) {
    const r = wi(n), o = Yn(n), c = r.visualViewport;
    let d = o.clientWidth, v = o.clientHeight, f = 0, y = 0;
    if (c) {
      d = c.width, v = c.height;
      const C = eg();
      (C || !C && a === "fixed") && (f = c.offsetLeft, y = c.offsetTop);
    }
    return { width: d, height: v, x: f, y };
  })(e, i)) : Wn(t) ? no((function(n, a) {
    const r = Ao(n, !0, a === "fixed"), o = r.top + n.clientTop, c = r.left + n.clientLeft, d = Zi(n) ? or(n) : { x: 1, y: 1 };
    return { width: n.clientWidth * d.x, height: n.clientHeight * d.y, x: c * d.x, y: o * d.y };
  })(t, i)) : no((function(n) {
    const a = Yn(n), r = Xl(n), o = n.ownerDocument.body, c = ao(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), d = ao(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let v = -r.scrollLeft + ng(n);
    const f = -r.scrollTop;
    return Xi(o).direction === "rtl" && (v += ao(a.clientWidth, o.clientWidth) - c), { width: c, height: d, x: v, y: f };
  })(Yn(e)));
}
function Op(e) {
  return Zi(e) && Xi(e).position !== "fixed" ? e.offsetParent : null;
}
function Np(e) {
  const t = wi(e);
  let i = Op(e);
  for (; i && Qw(i) && Xi(i).position === "static"; ) i = Op(i);
  return i && (Qn(i) === "html" || Qn(i) === "body" && Xi(i).position === "static" && !Cu(i)) ? t : i || (function(n) {
    let a = xo(n);
    for (; Zi(a) && !ld(a); ) {
      if (Cu(a)) return a;
      a = xo(a);
    }
    return null;
  })(e) || t;
}
function eS(e, t, i) {
  const n = Zi(t), a = Yn(t), r = Ao(e, !0, i === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (n || !n && i !== "fixed") if ((Qn(t) !== "body" || Yl(a)) && (o = Xl(t)), Zi(t)) {
    const d = Ao(t, !0);
    c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
  } else a && (c.x = ng(a));
  return { x: r.left + o.scrollLeft - c.x, y: r.top + o.scrollTop - c.y, width: r.width, height: r.height };
}
const tS = { getClippingRect: function(e) {
  let { element: t, boundary: i, rootBoundary: n, strategy: a } = e;
  const r = i === "clippingAncestors" ? (function(v, f) {
    const y = f.get(v);
    if (y) return y;
    let C = il(v).filter(((N) => Wn(N) && Qn(N) !== "body")), E = null;
    const L = Xi(v).position === "fixed";
    let A = L ? xo(v) : v;
    for (; Wn(A) && !ld(A); ) {
      const N = Xi(A), D = Cu(A);
      (L ? D || E : D || N.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = N : C = C.filter(((M) => M !== A)), A = xo(A);
    }
    return f.set(v, C), C;
  })(t, this._c) : [].concat(i), o = [...r, n], c = o[0], d = o.reduce(((v, f) => {
    const y = xp(t, f, a);
    return v.top = ao(y.top, v.top), v.right = Ep(y.right, v.right), v.bottom = Ep(y.bottom, v.bottom), v.left = ao(y.left, v.left), v;
  }), xp(t, c, a));
  return { width: d.right - d.left, height: d.bottom - d.top, x: d.left, y: d.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: i, strategy: n } = e;
  const a = Zi(i), r = Yn(i);
  if (i === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const d = { x: 0, y: 0 };
  if ((a || !a && n !== "fixed") && ((Qn(i) !== "body" || Yl(r)) && (o = Xl(i)), Zi(i))) {
    const v = Ao(i);
    c = or(i), d.x = v.x + i.clientLeft, d.y = v.y + i.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - o.scrollLeft * c.x + d.x, y: t.y * c.y - o.scrollTop * c.y + d.y };
}, isElement: Wn, getDimensions: function(e) {
  return Zi(e) ? Zv(e) : e.getBoundingClientRect();
}, getOffsetParent: Np, getDocumentElement: Yn, getScale: or, async getElementRects(e) {
  let { reference: t, floating: i, strategy: n } = e;
  const a = this.getOffsetParent || Np, r = this.getDimensions;
  return { reference: eS(t, await a(i), n), floating: { x: 0, y: 0, ...await r(i) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Xi(e).direction === "rtl" }, iS = (e, t, i) => {
  const n = /* @__PURE__ */ new Map(), a = { platform: tS, ...i }, r = { ...a.platform, _c: n };
  return Hw(e, t, { ...a, platform: r });
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
function ku(e, t) {
  let i = Xn.themes[e] || {}, n;
  do
    n = i[t], typeof n > "u" ? i.$extend ? i = Xn.themes[i.$extend] || {} : (i = null, n = Xn[t]) : i = null;
  while (i);
  return n;
}
function nS(e) {
  const t = [e];
  let i = Xn.themes[e] || {};
  do
    i.$extend && !i.$resetCss ? (t.push(i.$extend), i = Xn.themes[i.$extend] || {}) : i = null;
  while (i);
  return t.map((n) => `v-popper--theme-${n}`);
}
function Lp(e) {
  const t = [e];
  let i = Xn.themes[e] || {};
  do
    i.$extend ? (t.push(i.$extend), i = Xn.themes[i.$extend] || {}) : i = null;
  while (i);
  return t;
}
let Oo = !1;
if (typeof window < "u") {
  Oo = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Oo = !0;
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
]), []), Rp = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Ip = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Pp(e, t) {
  const i = e.indexOf(t);
  i !== -1 && e.splice(i, 1);
}
function Wc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Li = [];
let ka = null;
const $p = {};
function Fp(e) {
  let t = $p[e];
  return t || (t = $p[e] = []), t;
}
let Tu = function() {
};
typeof window < "u" && (Tu = window.Element);
function Ve(e) {
  return function(t) {
    return ku(t.theme, e);
  };
}
const Yc = "__floating-vue__popper", og = () => /* @__PURE__ */ Mt({
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
      type: [String, Object, Tu, Boolean],
      default: Ve("container")
    },
    boundary: {
      type: [String, Tu],
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
        for (let i = 0; i < Li.length; i++)
          t = Li[i], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Li.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Lp(this.theme))
        Fp(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Wc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Pp(Li, this), Li.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const i of Lp(this.theme)) {
        const n = Fp(i);
        Pp(n, this), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${i}`);
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
      this.$_registerTriggerListeners(this.$_targetNodes, Rp, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Rp, this.popperTriggers, this.popperShowTriggers, e);
      const t = (i) => {
        i.usedByTooltip || this.hide({ event: i });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Ip, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Ip, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, i) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: i }), e.forEach((n) => n.addEventListener(t, i, Oo ? {
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
      if (ro >= e.left && ro <= e.right && oo >= e.top && oo <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), i = ro - Hn, n = oo - Vn, a = t.left + t.width / 2 - Hn + (t.top + t.height / 2) - Vn + t.width + t.height, r = Hn + i * a, o = Vn + n * a;
        return ws(Hn, Vn, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        ws(Hn, Vn, r, o, t.left, t.top, t.right, t.top) || // Top edge
        ws(Hn, Vn, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        ws(Hn, Vn, r, o, t.left, t.bottom, t.right, t.bottom);
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
    const e = Oo ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Dp(t), e), document.addEventListener("touchend", (t) => Mp(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Dp(e), !0), window.addEventListener("click", (e) => Mp(e, !1), !0);
  window.addEventListener("resize", sS);
}
function Dp(e, t) {
  for (let i = 0; i < Li.length; i++) {
    const n = Li[i];
    try {
      n.mouseDownContains = n.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Mp(e, t) {
  rS(e, t);
}
function rS(e, t) {
  const i = {};
  for (let n = Li.length - 1; n >= 0; n--) {
    const a = Li[n];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !i[a.randomId] && zp(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = a.parentPopper;
            for (; c; )
              i[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && zp(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function zp(e, t, i) {
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
  for (let e = 0; e < Li.length; e++)
    Li[e].$_computePosition();
}
let Hn = 0, Vn = 0, ro = 0, oo = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Hn = ro, Vn = oo, ro = e.clientX, oo = e.clientY;
}, Oo ? {
  passive: !0
} : void 0);
function ws(e, t, i, n, a, r, o, c) {
  const d = ((o - a) * (t - r) - (c - r) * (e - a)) / ((c - r) * (i - e) - (o - a) * (n - t)), v = ((i - e) * (t - r) - (n - t) * (e - a)) / ((c - r) * (i - e) - (o - a) * (n - t));
  return d >= 0 && d <= 1 && v >= 0 && v <= 1;
}
const lS = {
  extends: og()
}, cd = (e, t) => {
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
    Me(e.$slots, "default", Ns(wo(e.slotData)))
  ], 2);
}
const uS = /* @__PURE__ */ cd(lS, [["render", cS]]);
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
let xs;
function Eu() {
  Eu.init || (Eu.init = !0, xs = dS() !== -1);
}
var Zl = {
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
    Eu(), ti(() => {
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
const fS = /* @__PURE__ */ dm();
cm("data-v-b329ee4c");
const pS = {
  class: "resize-observer",
  tabindex: "-1"
};
um();
const hS = /* @__PURE__ */ fS((e, t, i, n, a, r) => (m(), je("div", pS)));
Zl.render = hS;
Zl.__scopeId = "data-v-b329ee4c";
Zl.__file = "src/components/ResizeObserver.vue";
const sg = (e = "theme") => ({
  computed: {
    themeClass() {
      return nS(this[e]);
    }
  }
}), vS = /* @__PURE__ */ Mt({
  name: "VPopperContent",
  components: {
    ResizeObserver: Zl
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
          })) : P("", !0)
        ], 64)) : P("", !0)
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
const lg = /* @__PURE__ */ cd(vS, [["render", wS]]), cg = {
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
let Au = function() {
};
typeof window < "u" && (Au = window.Element);
const SS = /* @__PURE__ */ Mt({
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
      type: [String, Object, Au, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Au],
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
  return m(), je(c, Xt({ ref: "popper" }, e.$props, {
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
      shouldMountContent: f,
      skipTransition: y,
      autoHide: C,
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
        mounted: f,
        "skip-transition": y,
        "auto-hide": C,
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
const ud = /* @__PURE__ */ cd(SS, [["render", CS]]), kS = {
  ...ud,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...ud
});
({
  ...ud
});
og();
const Up = Xn, TS = kS, ES = /* @__PURE__ */ Mt({
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
Up.themes[ug] = structuredClone(Up.themes.dropdown);
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
      return this.placement === "start" ? yu ? "right" : "left" : this.placement === "end" ? yu ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = ad(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: To(),
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
      Me(e.$slots, "default", Ns(wo(d)))
    ]),
    default: Fe(() => [
      xe(o, {
        shown: a.internalShown,
        popupRole: i.popupRole
      }, {
        default: Fe((d) => [
          Me(e.$slots, "trigger", Ns(wo(d)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const LS = {
  $style: xS
}, jp = /* @__PURE__ */ Qe(OS, [["render", NS], ["__cssModules", LS]]), RS = {
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
  return m(), _("span", Xt(e.$attrs, {
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
        i.title ? (m(), _("title", FS, h(i.title), 1)) : P("", !0)
      ])
    ], 8, PS))
  ], 16, IS);
}
const MS = /* @__PURE__ */ Qe(RS, [["render", DS]]);
ta(b1);
function dd(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const i = t;
      if (i.type === Ft)
        return !1;
      if (i.type === ie && !dd(i.children))
        return !1;
      if (i.type === $o && !i.children.trim())
        return !1;
    }
    return !0;
  });
}
const zS = ".focusable", US = {
  name: "NcActions",
  components: {
    NcButton: Yi,
    NcPopover: jp
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
      [rd]: B(() => this.actionsMenuSemanticType === "menu"),
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
      default: kt("Actions")
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
      randomId: Wl()
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
    const n = i.slice(0, this.inline), a = e.filter((E) => !n.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], d = a.some((E) => o.includes(this.getActionName(E))), v = a.some((E) => r.includes(this.getActionName(E))), f = a.some((E) => c.includes(this.getActionName(E)));
    d ? this.actionsMenuSemanticType = "dialog" : v ? this.actionsMenuSemanticType = "menu" : f ? this.actionsMenuSemanticType = "navigation" : e.filter((L) => this.getActionName(L).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const y = (E) => {
      const L = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(L) ? ni("img", { class: "action-item__menutoggle__icon", src: L, alt: "" }) : ni("span", { class: ["icon", L] })), N = E?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? N : "";
      let M = E?.props?.title;
      this.forceName || M || (M = N);
      const z = { ...E?.props ?? {} }, k = ["submit", "reset"].includes(z.type) ? z.modelValue : "button";
      return delete z.modelValue, delete z.type, ni(
        Yi,
        Xt(
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
            type: k,
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
    }, C = (E) => {
      const L = dd(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? ni("span", { class: ["icon", this.defaultIcon] }) : ni(MS, { size: 20 }), A = `${this.randomId}-trigger`;
      return ni(
        jp,
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
          trigger: () => ni(Yi, {
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
          default: () => ni("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            ni("ul", {
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
    }), n.length > 0 && this.inline > 0 ? ni(
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
        a.length > 0 ? ni(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [C(a)]
        ) : null
      ]
    ) : ni(
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
        C(e)
      ]
    ));
  }
}, fd = /* @__PURE__ */ Qe(US, [["__scopeId", "data-v-7206c1f1"]]), jS = ["aria-label"], BS = ["width", "height"], HS = ["fill"], VS = ["fill"], KS = { key: 0 }, GS = /* @__PURE__ */ Mt({
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
          e.name ? (m(), _("title", KS, h(e.name), 1)) : P("", !0)
        ], 8, VS)
      ], 8, BS))
    ], 8, jS));
  }
}), dg = /* @__PURE__ */ Qe(GS, [["__scopeId", "data-v-cf399190"]]), xu = /* @__PURE__ */ Mt({
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
  return m(), _("span", Xt(e.$attrs, {
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
        i.title ? (m(), _("title", ZS, h(i.title), 1)) : P("", !0)
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
  return m(), _("span", Xt(e.$attrs, {
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
        i.title ? (m(), _("title", aC, h(i.title), 1)) : P("", !0)
      ])
    ], 8, iC))
  ], 16, tC);
}
const oC = /* @__PURE__ */ Qe(eC, [["render", rC]]);
ta(w1);
const sC = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Yi,
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
    return { isLegacy34: ia };
  },
  computed: {
    labelButton() {
      return this.open ? kt("Collapse menu") : kt("Open menu");
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
ta(S1, T1);
const uC = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: fd,
    NcActionButton: Lw,
    NcAppNavigationIconCollapsible: cC,
    NcInputConfirmCancel: yw,
    NcLoadingIcon: dg,
    NcVNodes: xu,
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
      default: () => Wl(),
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
      isMobile: Do(),
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
      return this.editLabel ? this.editLabel : kt("Edit item");
    },
    undoButtonAriaLabel() {
      return kt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && i && (t?.(e), e.preventDefault(), this.isMobile && gn("toggle-navigation", { open: !1 }));
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
  const o = Be("NcLoadingIcon"), c = Be("NcInputConfirmCancel"), d = Be("Pencil"), v = Be("NcActionButton"), f = Be("Undo"), y = Be("NcActions"), C = Be("NcAppNavigationIconCollapsible");
  return m(), _("li", {
    id: i.id,
    class: be([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": i.pinned,
      "app-navigation-entry--collapsible": i.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (m(), je(Wu(r.isRouterLink ? "router-link" : "NcVNodes"), Ns(wo({ ...r.isRouterLink && { custom: !0, to: i.to } })), {
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
          i.undo ? P("", !0) : (m(), _("a", {
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
            ])) : P("", !0)
          ], 40, fC)),
          i.undo ? (m(), _("div", hC, [
            l("div", vC, h(i.name), 1)
          ])) : P("", !0),
          (e.$slots.actions || e.$slots.counter || i.editable || i.undo) && !a.editingActive ? (m(), _("div", {
            key: 2,
            class: be(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": i.forceDisplayActions || a.menuOpenLocalValue || i.menuOpen }])
          }, [
            e.$slots.counter ? (m(), _("div", gC, [
              Me(e.$slots, "counter", {}, void 0, !0)
            ])) : P("", !0),
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
                }, 8, ["aria-label", "onClick"])) : P("", !0),
                i.undo ? (m(), je(v, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Fe(() => [
                    xe(f, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : P("", !0),
                Me(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : P("", !0)
          ], 2)) : P("", !0),
          i.allowCollapse && e.$slots.default ? (m(), je(C, {
            key: 3,
            active: i.to && A || i.active,
            open: a.opened,
            onClick: ye(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : P("", !0),
          Me(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (m(), _("ul", bC, [
      Me(e.$slots, "default", {}, void 0, !0)
    ])) : P("", !0)
  ], 10, dC);
}
const Bp = /* @__PURE__ */ Qe(uC, [["render", mC], ["__scopeId", "data-v-01bef41b"]]), Xc = /* @__PURE__ */ new WeakMap(), yC = {
  mounted(e, t) {
    const i = !t.modifiers.bubble;
    let n;
    if (typeof t.value == "function") n = pp(e, t.value, { capture: i });
    else {
      const [a, r] = t.value;
      n = pp(e, a, Object.assign({ capture: i }, r));
    }
    Xc.set(e, n);
  },
  unmounted(e) {
    const t = Xc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Xc.delete(e);
  }
}, _C = {
  mounted(e) {
    e.focus();
  }
}, wC = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", SC = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Ou = "numeric", Nu = "ascii", Lu = "alpha", so = "asciinumeric", Xr = "alphanumeric", Ru = "domain", fg = "emoji", CC = "scheme", kC = "slashscheme", Zc = "whitespace";
function TC(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Ra(e, t, i) {
  t[Ou] && (t[so] = !0, t[Xr] = !0), t[Nu] && (t[so] = !0, t[Lu] = !0), t[so] && (t[Xr] = !0), t[Lu] && (t[Xr] = !0), t[Xr] && (t[Ru] = !0), t[fg] && (t[Ru] = !0);
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
    let o, c = a.go(e);
    if (c ? (o = new fi(), Object.assign(o.j, c.j), o.jr.push.apply(o.jr, c.jr), o.jd = c.jd, o.t = c.t) : o = new fi(), r) {
      if (n)
        if (o.t && typeof o.t == "string") {
          const d = Object.assign(EC(o.t, n), i);
          Ra(r, d, n);
        } else i && Ra(r, i, n);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, i, n, a) => e.ta(t, i, n, a), bt = (e, t, i, n, a) => e.tr(t, i, n, a), Hp = (e, t, i, n, a) => e.ts(t, i, n, a), ne = (e, t, i, n, a) => e.tt(t, i, n, a), sn = "WORD", Iu = "UWORD", pg = "ASCIINUMERICAL", hg = "ALPHANUMERICAL", No = "LOCALHOST", Pu = "TLD", $u = "UTLD", Os = "SCHEME", Ja = "SLASH_SCHEME", pd = "NUM", Fu = "WS", hd = "NL", lo = "OPENBRACE", co = "CLOSEBRACE", nl = "OPENBRACKET", al = "CLOSEBRACKET", rl = "OPENPAREN", ol = "CLOSEPAREN", sl = "OPENANGLEBRACKET", ll = "CLOSEANGLEBRACKET", cl = "FULLWIDTHLEFTPAREN", ul = "FULLWIDTHRIGHTPAREN", dl = "LEFTCORNERBRACKET", fl = "RIGHTCORNERBRACKET", pl = "LEFTWHITECORNERBRACKET", hl = "RIGHTWHITECORNERBRACKET", vl = "FULLWIDTHLESSTHAN", gl = "FULLWIDTHGREATERTHAN", bl = "AMPERSAND", ml = "APOSTROPHE", yl = "ASTERISK", Gn = "AT", _l = "BACKSLASH", wl = "BACKTICK", Sl = "CARET", Ia = "COLON", vd = "COMMA", Cl = "DOLLAR", Ki = "DOT", kl = "EQUALS", gd = "EXCLAMATION", mi = "HYPHEN", uo = "PERCENT", Tl = "PIPE", El = "PLUS", Al = "POUND", fo = "QUERY", bd = "QUOTE", vg = "FULLWIDTHMIDDLEDOT", md = "SEMI", Gi = "SLASH", po = "TILDE", xl = "UNDERSCORE", gg = "EMOJI", Ol = "SYM";
var bg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: hg,
  AMPERSAND: bl,
  APOSTROPHE: ml,
  ASCIINUMERICAL: pg,
  ASTERISK: yl,
  AT: Gn,
  BACKSLASH: _l,
  BACKTICK: wl,
  CARET: Sl,
  CLOSEANGLEBRACKET: ll,
  CLOSEBRACE: co,
  CLOSEBRACKET: al,
  CLOSEPAREN: ol,
  COLON: Ia,
  COMMA: vd,
  DOLLAR: Cl,
  DOT: Ki,
  EMOJI: gg,
  EQUALS: kl,
  EXCLAMATION: gd,
  FULLWIDTHGREATERTHAN: gl,
  FULLWIDTHLEFTPAREN: cl,
  FULLWIDTHLESSTHAN: vl,
  FULLWIDTHMIDDLEDOT: vg,
  FULLWIDTHRIGHTPAREN: ul,
  HYPHEN: mi,
  LEFTCORNERBRACKET: dl,
  LEFTWHITECORNERBRACKET: pl,
  LOCALHOST: No,
  NL: hd,
  NUM: pd,
  OPENANGLEBRACKET: sl,
  OPENBRACE: lo,
  OPENBRACKET: nl,
  OPENPAREN: rl,
  PERCENT: uo,
  PIPE: Tl,
  PLUS: El,
  POUND: Al,
  QUERY: fo,
  QUOTE: bd,
  RIGHTCORNERBRACKET: fl,
  RIGHTWHITECORNERBRACKET: hl,
  SCHEME: Os,
  SEMI: md,
  SLASH: Gi,
  SLASH_SCHEME: Ja,
  SYM: Ol,
  TILDE: po,
  TLD: Pu,
  UNDERSCORE: xl,
  UTLD: $u,
  UWORD: Iu,
  WORD: sn,
  WS: Fu
});
const rn = /[a-z]/, Vr = new RegExp("\\p{L}", "u"), Jc = new RegExp("\\p{Emoji}", "u"), on = /\d/, Qc = /\s/, Vp = "\r", eu = `
`, AC = "️", xC = "‍", tu = "￼";
let Ss = null, Cs = null;
function OC(e = []) {
  const t = {};
  fi.groups = t;
  const i = new fi();
  Ss == null && (Ss = Kp(wC)), Cs == null && (Cs = Kp(SC)), ne(i, "'", ml), ne(i, "{", lo), ne(i, "}", co), ne(i, "[", nl), ne(i, "]", al), ne(i, "(", rl), ne(i, ")", ol), ne(i, "<", sl), ne(i, ">", ll), ne(i, "（", cl), ne(i, "）", ul), ne(i, "「", dl), ne(i, "」", fl), ne(i, "『", pl), ne(i, "』", hl), ne(i, "＜", vl), ne(i, "＞", gl), ne(i, "&", bl), ne(i, "*", yl), ne(i, "@", Gn), ne(i, "`", wl), ne(i, "^", Sl), ne(i, ":", Ia), ne(i, ",", vd), ne(i, "$", Cl), ne(i, ".", Ki), ne(i, "=", kl), ne(i, "!", gd), ne(i, "-", mi), ne(i, "%", uo), ne(i, "|", Tl), ne(i, "+", El), ne(i, "#", Al), ne(i, "?", fo), ne(i, '"', bd), ne(i, "/", Gi), ne(i, ";", md), ne(i, "~", po), ne(i, "_", xl), ne(i, "\\", _l), ne(i, "・", vg);
  const n = bt(i, on, pd, {
    [Ou]: !0
  });
  bt(n, on, n);
  const a = bt(n, rn, pg, {
    [so]: !0
  }), r = bt(n, Vr, hg, {
    [Xr]: !0
  }), o = bt(i, rn, sn, {
    [Nu]: !0
  });
  bt(o, on, a), bt(o, rn, o), bt(a, on, a), bt(a, rn, a);
  const c = bt(i, Vr, Iu, {
    [Lu]: !0
  });
  bt(c, rn), bt(c, on, r), bt(c, Vr, c), bt(r, on, r), bt(r, rn), bt(r, Vr, r);
  const d = ne(i, eu, hd, {
    [Zc]: !0
  }), v = ne(i, Vp, Fu, {
    [Zc]: !0
  }), f = bt(i, Qc, Fu, {
    [Zc]: !0
  });
  ne(i, tu, f), ne(v, eu, d), ne(v, tu, f), bt(v, Qc, f), ne(f, Vp), ne(f, eu), bt(f, Qc, f), ne(f, tu, f);
  const y = bt(i, Jc, gg, {
    [fg]: !0
  });
  ne(y, "#"), bt(y, Jc, y), ne(y, AC, y);
  const C = ne(y, xC);
  ne(C, "#"), bt(C, Jc, y);
  const E = [[rn, o], [on, a]], L = [[rn, null], [Vr, c], [on, r]];
  for (let A = 0; A < Ss.length; A++)
    jn(i, Ss[A], Pu, sn, E);
  for (let A = 0; A < Cs.length; A++)
    jn(i, Cs[A], $u, Iu, L);
  Ra(Pu, {
    tld: !0,
    ascii: !0
  }, t), Ra($u, {
    utld: !0,
    alpha: !0
  }, t), jn(i, "file", Os, sn, E), jn(i, "mailto", Os, sn, E), jn(i, "http", Ja, sn, E), jn(i, "https", Ja, sn, E), jn(i, "ftp", Ja, sn, E), jn(i, "ftps", Ja, sn, E), Ra(Os, {
    scheme: !0,
    ascii: !0
  }, t), Ra(Ja, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, N) => A[0] > N[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const N = e[A][0], M = e[A][1] ? {
      [CC]: !0
    } : {
      [kC]: !0
    };
    N.indexOf("-") >= 0 ? M[Ru] = !0 : rn.test(N) ? on.test(N) ? M[so] = !0 : M[Nu] = !0 : M[Ou] = !0, Hp(i, N, N, M);
  }
  return Hp(i, "localhost", No, {
    ascii: !0
  }), i.jd = new fi(Ol), {
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
    let c = e, d = null, v = 0, f = null, y = -1, C = -1;
    for (; o < n && (d = c.go(i[o])); )
      c = d, c.accepts() ? (y = 0, C = 0, f = c) : y >= 0 && (y += i[o].length, C++), v += i[o].length, r += i[o].length, o++;
    r -= y, o -= C, v -= y, a.push({
      t: f.t,
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
function jn(e, t, i, n, a) {
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
const Lo = {
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
function yd(e, t = null) {
  let i = Object.assign({}, Lo);
  e && (i = Object.assign(i, e instanceof yd ? e.o : e));
  const n = i.ignoreTags, a = [];
  for (let r = 0; r < n.length; r++)
    a.push(n[r].toUpperCase());
  this.o = i, t && (this.defaultRender = t), this.ignoreTags = a;
}
yd.prototype = {
  o: Lo,
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
    return a && (typeof a == "object" ? (a = i.t in a ? a[i.t] : Lo[e], typeof a == "function" && n && (a = a(t, i))) : typeof a == "function" && n && (a = a(t, i.t, i)), a);
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
  toObject(e = Lo.defaultProtocol) {
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
    const t = this, i = this.toHref(e.get("defaultProtocol")), n = e.get("formatHref", i, this), a = e.get("tagName", i, t), r = this.toFormattedString(e), o = {}, c = e.get("className", i, t), d = e.get("target", i, t), v = e.get("rel", i, t), f = e.getObj("attributes", i, t), y = e.getObj("events", i, t);
    return o.href = n, c && (o.class = c), d && (o.target = d), v && (o.rel = v), f && Object.assign(o, f), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: y
    };
  }
};
function Jl(e, t) {
  class i extends yg {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const n in t)
    i.prototype[n] = t[n];
  return i.t = e, i;
}
const LC = Jl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), qp = Jl("text"), RC = Jl("nl"), ks = Jl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = Lo.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== No && e[1].t === Ia;
  }
}), bi = (e) => new fi(e);
function IC({
  groups: e
}) {
  const t = e.domain.concat([bl, yl, Gn, _l, wl, Sl, Cl, kl, mi, pd, uo, Tl, El, Al, Gi, Ol, po, xl]), i = [ml, Ia, vd, Ki, gd, uo, fo, bd, md, sl, ll, lo, co, al, nl, rl, ol, cl, ul, dl, fl, pl, hl, vl, gl], n = [bl, ml, yl, _l, wl, Sl, Cl, kl, mi, lo, co, uo, Tl, El, Al, fo, Gi, Ol, po, xl], a = bi(), r = ne(a, po);
  Ue(r, n, r), Ue(r, e.domain, r);
  const o = bi(), c = bi(), d = bi();
  Ue(a, e.domain, o), Ue(a, e.scheme, c), Ue(a, e.slashscheme, d), Ue(o, n, r), Ue(o, e.domain, o);
  const v = ne(o, Gn);
  ne(r, Gn, v), ne(c, Gn, v), ne(d, Gn, v);
  const f = ne(r, Ki);
  Ue(f, n, r), Ue(f, e.domain, r);
  const y = bi();
  Ue(v, e.domain, y), Ue(y, e.domain, y);
  const C = ne(y, Ki);
  Ue(C, e.domain, y);
  const E = bi(LC);
  Ue(C, e.tld, E), Ue(C, e.utld, E), ne(v, No, E);
  const L = ne(y, mi);
  ne(L, mi, L), Ue(L, e.domain, y), Ue(E, e.domain, y), ne(E, Ki, C), ne(E, mi, L);
  const A = ne(o, mi), N = ne(o, Ki);
  ne(A, mi, A), Ue(A, e.domain, o), Ue(N, n, r), Ue(N, e.domain, o);
  const D = bi(ks);
  Ue(N, e.tld, D), Ue(N, e.utld, D), Ue(D, e.domain, o), Ue(D, n, r), ne(D, Ki, N), ne(D, mi, A), ne(D, Gn, v);
  const M = ne(D, Ia), z = bi(ks);
  Ue(M, e.numeric, z);
  const k = bi(ks), oe = bi();
  Ue(k, t, k), Ue(k, i, oe), Ue(oe, t, k), Ue(oe, i, oe), ne(D, Gi, k), ne(z, Gi, k);
  const ue = ne(c, Ia), Z = ne(d, Ia), fe = ne(Z, Gi), X = ne(fe, Gi);
  Ue(c, e.domain, o), ne(c, Ki, N), ne(c, mi, A), Ue(d, e.domain, o), ne(d, Ki, N), ne(d, mi, A), Ue(ue, e.domain, k), ne(ue, Gi, k), ne(ue, fo, k), Ue(X, e.domain, k), Ue(X, t, k), ne(X, Gi, k);
  const le = [
    [lo, co],
    // {}
    [nl, al],
    // []
    [rl, ol],
    // ()
    [sl, ll],
    // <>
    [cl, ul],
    // （）
    [dl, fl],
    // 「」
    [pl, hl],
    // 『』
    [vl, gl]
    // ＜＞
  ];
  for (let _e = 0; _e < le.length; _e++) {
    const [ee, J] = le[_e], F = ne(k, ee);
    ne(oe, ee, F);
    const U = bi(ks);
    Ue(F, t, U);
    const Y = bi();
    Ue(F, i, Y), ne(F, J, k), Ue(U, t, U), Ue(U, i, Y), Ue(Y, t, U), Ue(Y, i, Y), ne(U, J, k), ne(Y, J, k);
  }
  return ne(a, No, D), ne(a, hd, RC), {
    start: a,
    tokens: bg
  };
}
function PC(e, t, i) {
  let n = i.length, a = 0, r = [], o = [];
  for (; a < n; ) {
    let c = e, d = null, v = null, f = 0, y = null, C = -1;
    for (; a < n && !(d = c.go(i[a].t)); )
      o.push(i[a++]);
    for (; a < n && (v = d || c.go(i[a].t)); )
      d = null, c = v, c.accepts() ? (C = 0, y = c) : C >= 0 && C++, a++, f++;
    if (C < 0)
      a -= f, a < n && (o.push(i[a]), a++);
    else {
      o.length > 0 && (r.push(iu(qp, t, o)), o = []), a -= C, f -= C;
      const E = y.t, L = i.slice(a - f, a);
      r.push(iu(E, t, L));
    }
  }
  return o.length > 0 && r.push(iu(qp, t, o)), r;
}
function iu(e, t, i) {
  const n = i[0].s, a = i[i.length - 1].e, r = t.slice(n, a);
  return new e(r, i);
}
const Vt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function $C() {
  Vt.scanner = OC(Vt.customSchemes);
  for (let e = 0; e < Vt.tokenQueue.length; e++)
    Vt.tokenQueue[e][1]({
      scanner: Vt.scanner
    });
  Vt.parser = IC(Vt.scanner.tokens);
  for (let e = 0; e < Vt.pluginQueue.length; e++)
    Vt.pluginQueue[e][1]({
      scanner: Vt.scanner,
      parser: Vt.parser
    });
  return Vt.initialized = !0, Vt;
}
function _g(e) {
  return Vt.initialized || $C(), PC(Vt.parser.start, e, mg(Vt.scanner.start, e));
}
_g.scan = mg;
function FC(e) {
  const t = new yd({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, zC), i = _g(e), n = [];
  for (const a of i)
    a.t === "nl" && t.get("nl2br") ? n.push(`<br>
`) : !a.isLink || !t.check(a) ? n.push(Ks(a.toString())) : n.push(t.render(a));
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
  return `<${e} ${MC(t)}>${Ks(i)}</${e}>`;
}
const UC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = FC(t.text));
}, jC = ["title"], BC = /* @__PURE__ */ Mt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Gt("NcAppSidebar:header:ref");
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
}, WC = /* @__PURE__ */ Mt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Wl();
    return (i, n) => (m(), _("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      i.$slots.icon ? (m(), _("div", VC, [
        Me(i.$slots, "icon", {}, void 0, !0)
      ])) : P("", !0),
      e.name !== "" || i.$slots.name ? (m(), _("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Me(i.$slots, "name", {}, () => [
          ge(h(e.name), 1)
        ], !0)
      ], 8, KC)) : P("", !0),
      e.description !== "" || i.$slots.description ? (m(), _("p", GC, [
        Me(i.$slots, "description", {}, () => [
          ge(h(e.description), 1)
        ], !0)
      ])) : P("", !0),
      i.$slots.action ? (m(), _("div", qC, [
        Me(i.$slots, "action", {}, void 0, !0)
      ])) : P("", !0)
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
  return m(), _("span", Xt(e.$attrs, {
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
        i.title ? (m(), _("title", ek, h(i.title), 1)) : P("", !0)
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
  return m(), _("span", Xt(e.$attrs, {
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
        i.title ? (m(), _("title", sk, h(i.title), 1)) : P("", !0)
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
  return m(), _("span", Xt(e.$attrs, {
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
        i.title ? (m(), _("title", hk, h(i.title), 1)) : P("", !0)
      ])
    ], 8, fk))
  ], 16, dk);
}
const gk = /* @__PURE__ */ Qe(uk, [["render", vk]]), bk = ["aria-selected", "tabindex"], mk = /* @__PURE__ */ Mt({
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
          xe(xu, {
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
          xe(xu, {
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
      }, null, 6)) : P("", !0),
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
    ], 34)) : P("", !0),
    l("div", {
      class: be(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Me(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const $k = /* @__PURE__ */ Qe(Rk, [["render", Pk], ["__scopeId", "data-v-74190d2a"]]);
ta(y1);
const Fk = {
  name: "NcAppSidebar",
  components: {
    NcActions: fd,
    NcAppSidebarHeader: BC,
    NcAppSidebarTabs: $k,
    NcButton: Yi,
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
    return yi("NcAppSidebar:header:ref", e), {
      uid: Wl(),
      isMobile: p1(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: kt("Change name"),
      closeTranslated: kt("Close sidebar"),
      favoriteTranslated: kt("Favorite"),
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
    isSlotPopulated: dd,
    t: kt,
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
      this.focusTrap || (this.focusTrap = ad([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: To(),
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
}, Dk = ["aria-labelledby"], Mk = { class: "app-sidebar-header__info" }, zk = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, Uk = { class: "app-sidebar-header__name-container" }, jk = { class: "app-sidebar-header__mainname-container" }, Bk = ["placeholder", "value"], Hk = ["title"], Vk = {
  key: 2,
  class: "app-sidebar-header__description"
};
function Kk(e, t, i, n, a, r) {
  const o = Be("IconDockRight"), c = Be("NcButton"), d = Be("NcLoadingIcon"), v = Be("IconStar"), f = Be("IconStarOutline"), y = Be("NcAppSidebarHeader"), C = Be("IconArrowRight"), E = Be("NcActions"), L = Be("IconClose"), A = Be("NcAppSidebarTabs"), N = Be("NcEmptyContent"), D = ff("focus"), M = ff("click-outside");
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
          xe(c, Xt({
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
        ], 8, ["to"])) : P("", !0),
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
              ], 38)) : P("", !0),
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
                        })) : (m(), je(f, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : P("", !0)
                  ], !0)
                ])) : P("", !0),
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
                      [nr, !i.nameEditable]
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
                          xe(C, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : P("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (m(), je(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: i.forceMenu
                    }, {
                      default: Fe(() => [
                        Me(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : P("", !0)
                  ]),
                  i.subname.trim() !== "" || e.$slots.subname ? (m(), _("p", {
                    key: 0,
                    title: i.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Me(e.$slots, "subname", {}, () => [
                      ge(h(i.subname), 1)
                    ], !0)
                  ], 8, Hk)) : P("", !0)
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
          ])) : P("", !0)
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
          [nr, !i.loading]
        ]),
        i.loading ? (m(), je(N, { key: 1 }, {
          icon: Fe(() => [
            xe(d, { size: 64 })
          ]),
          _: 1
        })) : P("", !0)
      ], 40, Dk), [
        [nr, i.open]
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
      from: rd,
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
      P("", !0)
    ], 8, Yk)
  ], 8, Wk);
}
const nu = /* @__PURE__ */ Qe(qk, [["render", tT], ["__scopeId", "data-v-32f01b7a"]]);
ta(k1);
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
`, aT = { class: "vue-skip-actions__container" }, rT = { class: "vue-skip-actions__headline" }, oT = { class: "vue-skip-actions__buttons" }, sT = /* @__PURE__ */ Mt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    yi(jv, c), yi(Bv, "#content-vue"), yi("appName", B(() => t.appName));
    const i = Do(), n = /* @__PURE__ */ Ee(!1), a = /* @__PURE__ */ Ee(), r = B(() => a.value === "navigation" ? nT : iT);
    Ph(() => {
      const d = document.getElementById("skip-actions");
      d && (d.innerHTML = "", d.classList.add("vue-skip-actions"));
    });
    function o() {
      gn("toggle-navigation", { open: !0 }), ti(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(d) {
      n.value = d, a.value || (a.value = "navigation");
    }
    return (d, v) => (m(), _("div", {
      id: "content-vue",
      class: be(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(ia) }]])
    }, [
      (m(), je(Eh, { to: "#skip-actions" }, [
        l("div", aT, [
          l("div", rT, h(g(kt)("Keyboard navigation help")), 1),
          l("div", oT, [
            Ie(xe(Yi, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: ye(o, ["prevent"]),
              onFocusin: v[0] || (v[0] = (f) => a.value = "navigation"),
              onMouseover: v[1] || (v[1] = (f) => a.value = "navigation")
            }, {
              default: Fe(() => [
                ge(h(g(kt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [nr, n.value]
            ]),
            xe(Yi, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: v[2] || (v[2] = (f) => a.value = "content"),
              onMouseover: v[3] || (v[3] = (f) => a.value = "content")
            }, {
              default: Fe(() => [
                ge(h(g(kt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Ie(xe(ql, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [nr, !g(i)]
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
      i.value = !i.value, !(!i.value || n.value || a.value) && await f();
    }
    async function f() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const y = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(d.value) }), C = await fetch(`${t.childrenUrl}?${y}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!C.ok) throw new Error("Shelf children request failed");
          const E = await C.json(), L = Array.isArray(E?.nodes) ? E.nodes : [];
          o.value.push(...L), c.value = E?.hasMore === !0, d.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : o.value.length, n.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (y, C) => {
      const E = Be("ShelfTreeNode", !0);
      return m(), _("li", cT, [
        e.node.hasChildren ? (m(), _("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(i.value),
          "aria-label": i.value ? g(b)("library", "Collapse {folder}", { folder: e.node.label }) : g(b)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: v
        }, h(i.value ? "−" : "+"), 9, uT)) : P("", !0),
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
        a.value ? (m(), _("small", gT, h(g(b)("library", "Loading folders…")), 1)) : r.value ? (m(), _("small", bT, h(g(b)("library", "Could not load folders.")), 1)) : P("", !0),
        i.value && o.value.length ? (m(), _("ul", mT, [
          (m(!0), _(ie, null, ke(o.value, (L) => (m(), je(E, {
            key: L.id,
            node: L,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : P("", !0),
        i.value && c.value ? (m(), _("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: f
        }, h(g(b)("library", "Load more folders")), 9, yT)) : P("", !0)
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
}, y3 = ["title"], _3 = ["action", "title"], w3 = ["value"], S3 = ["value"], C3 = ["placeholder", "disabled"], k3 = ["disabled", "title"], T3 = ["aria-label"], E3 = ["href"], A3 = { class: "library-saved-collection-count" }, x3 = ["action"], O3 = ["value"], N3 = {
  type: "submit",
  class: "button tertiary"
}, L3 = ["aria-label"], R3 = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, I3 = ["title"], P3 = { class: "library-workspace-panel-purpose" }, $3 = { class: "library-workspace-scope-badge" }, F3 = { "aria-live": "polite" }, D3 = ["action"], M3 = ["value"], z3 = ["placeholder"], U3 = ["title"], j3 = ["action"], B3 = ["value"], H3 = ["placeholder"], V3 = ["title"], K3 = ["action"], G3 = ["value"], q3 = ["name", "value"], W3 = ["title"], Y3 = ["action"], X3 = ["value"], Z3 = ["name", "value"], J3 = { name: "bulkEditField" }, Q3 = { value: "publicationType" }, eN = { value: "subtitle" }, tN = { value: "creators" }, iN = { value: "publication" }, nN = { value: "publicationDate" }, aN = { value: "language" }, rN = { value: "publisher" }, oN = { value: "subjects" }, sN = { value: "classifications" }, lN = ["placeholder"], cN = ["title"], uN = ["action"], dN = ["value"], fN = ["name", "value"], pN = ["title"], hN = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, vN = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, gN = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, bN = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, mN = { key: 0 }, yN = { key: 1 }, _N = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, wN = { class: "library-muted library-catalogue-eyebrow" }, SN = ["title"], CN = ["aria-label"], kN = { key: 0 }, TN = { key: 1 }, EN = { key: 2 }, AN = ["aria-label"], xN = { key: 0 }, ON = { key: 1 }, NN = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, LN = { class: "library-muted library-catalogue-eyebrow" }, RN = ["title"], IN = ["aria-label"], PN = ["href"], $N = {
  key: 0,
  class: "library-notice"
}, FN = { class: "library-publication-issue-label" }, DN = ["href"], MN = { class: "library-muted" }, zN = {
  key: 1,
  class: "library-publication-unknown-issues"
}, UN = ["title"], jN = ["href"], BN = { class: "library-catalogue-status-row" }, HN = { class: "library-muted library-filter-result-summary" }, VN = { key: 0 }, KN = ["href"], GN = ["aria-label"], qN = { class: "library-pagination-range" }, WN = { key: 0 }, YN = ["href"], XN = {
  key: 1,
  class: "library-muted"
}, ZN = ["href"], JN = {
  key: 3,
  class: "library-muted"
}, QN = ["title"], eL = { class: "library-empty-actions" }, tL = ["href"], iL = { class: "library-muted" }, nL = ["title"], aL = { class: "library-empty-actions" }, rL = ["href"], oL = ["title"], sL = ["aria-label"], lL = ["href", "aria-label", "onClick"], cL = ["title"], uL = {
  key: 1,
  class: "library-muted"
}, dL = { class: "library-empty-actions" }, fL = ["href"], pL = ["href"], hL = ["title"], vL = { class: "library-empty-actions" }, gL = ["href"], bL = {
  key: 5,
  class: "library-select-visible"
}, mL = ["checked"], yL = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, _L = { class: "library-item-selection" }, wL = ["checked", "aria-label", "onChange"], SL = { class: "library-catalogue-list-main" }, CL = ["onClick"], kL = {
  class: "library-bidi-human",
  dir: "auto"
}, TL = {
  key: 0,
  class: "library-muted"
}, EL = {
  class: "library-bidi-human",
  dir: "auto"
}, AL = { class: "library-catalogue-list-metadata" }, xL = { key: 0 }, OL = {
  class: "library-bidi-human",
  dir: "auto"
}, NL = { key: 1 }, LL = { key: 2 }, RL = ["dir"], IL = { key: 3 }, PL = {
  class: "library-bidi-human",
  dir: "auto"
}, $L = { class: "library-catalogue-list-actions" }, FL = ["href", "onClick"], DL = ["onClick"], ML = { class: "library-item-selection" }, zL = ["checked", "aria-label", "onChange"], UL = ["aria-labelledby", "aria-expanded", "onClick"], jL = ["id"], BL = { class: "library-cover-frame" }, HL = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, VL = ["src", "onLoad", "onError"], KL = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, GL = ["action", "onSubmit"], qL = ["value"], WL = ["value"], YL = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], XL = ["data-library-star-error"], ZL = { class: "library-cover-summary" }, JL = { class: "library-cover-primary" }, QL = ["id"], eR = ["onClick"], tR = {
  class: "library-bidi-human",
  dir: "auto"
}, iR = {
  key: 0,
  class: "library-cover-creator"
}, nR = {
  class: "library-bidi-human",
  dir: "auto"
}, aR = {
  key: 1,
  class: "library-cover-context"
}, rR = {
  class: "library-bidi-human",
  dir: "auto"
}, oR = ["aria-label"], sR = { class: "library-pagination-range" }, lR = { key: 0 }, cR = ["href"], uR = {
  key: 1,
  class: "library-muted"
}, dR = ["href"], fR = {
  key: 3,
  class: "library-muted"
}, pR = { class: "library-sidebar-content" }, hR = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, vR = ["role"], gR = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, bR = { class: "library-sidebar-publication-header" }, mR = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, yR = ["src"], _R = { class: "library-sidebar-publication-summary" }, wR = { class: "library-muted library-catalogue-eyebrow" }, SR = {
  class: "library-bidi-human",
  dir: "auto"
}, CR = { key: 0 }, kR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, TR = { class: "library-detail-drawer-actions" }, ER = ["href"], AR = ["aria-label"], xR = ["aria-current", "onClick"], OR = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, NR = { id: "library-sidebar-overview-heading" }, LR = {
  key: 0,
  class: "library-sidebar-description"
}, RR = {
  class: "library-bidi-human",
  dir: "auto"
}, IR = { class: "library-detail-drawer-facts" }, PR = { key: 0 }, $R = ["href", "title"], FR = {
  class: "library-bidi-human",
  dir: "auto"
}, DR = { key: 1 }, MR = ["href", "title"], zR = { key: 1 }, UR = { key: 2 }, jR = { key: 2 }, BR = ["href", "title"], HR = {
  class: "library-bidi-human",
  dir: "auto"
}, VR = { key: 3 }, KR = { class: "library-detail-facet-list" }, GR = ["href", "title", "onClick"], qR = {
  class: "library-bidi-machine",
  dir: "ltr"
}, WR = { key: 4 }, YR = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, XR = { id: "library-sidebar-metadata-heading" }, ZR = ["placeholder"], JR = ["onUpdate:modelValue", "aria-label", "placeholder"], QR = ["onUpdate:modelValue", "aria-label"], e4 = ["onClick"], t4 = { class: "library-muted" }, i4 = {
  key: 0,
  role: "alert"
}, n4 = {
  key: 1,
  role: "status"
}, a4 = ["disabled"], r4 = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, o4 = { id: "library-sidebar-suggestions-heading" }, s4 = { class: "library-muted" }, l4 = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, c4 = { id: "library-sidebar-activity-heading" }, u4 = { class: "library-detail-drawer-facts" }, d4 = { key: 0 }, f4 = { key: 1 }, p4 = { key: 2 }, h4 = { class: "library-detail-drawer-file" }, v4 = ["href"], g4 = { dir: "ltr" }, b4 = {
  key: 1,
  dir: "ltr"
}, m4 = ["aria-label"], y4 = ["disabled"], _4 = ["disabled"], w4 = 20, S4 = "/apps/library", C4 = 2147483647, k4 = {
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
    function r(p, u) {
      return Object.prototype.hasOwnProperty.call(a, p) && String(u ?? "").trim() === a[p];
    }
    function o(p) {
      const u = new URLSearchParams(p);
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
    function c(p) {
      return Object.keys(a).some((u) => p.getAll(u).length === 1 && r(u, p.get(u)));
    }
    function d(p) {
      return Object.fromEntries(Object.entries(p || {}).filter(([u, s]) => u === "status" || !Object.prototype.hasOwnProperty.call(a, u) || r(u, s)));
    }
    const v = /* @__PURE__ */ Pt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), f = /* @__PURE__ */ Pt((v.items || []).map((p) => ({ ...p }))), y = B(() => f), C = B(() => v.shelves || []), E = B(() => v.formats || []), L = B(() => v.publicationTypes?.length ? v.publicationTypes : i), A = B(() => v.publications || []), N = B(() => v.publicationIssueContext || null), D = B(() => v.scanStatuses || []), M = B(() => v.workflowStatuses || []), z = B(() => v.cataloguePagination || {
      page: 1,
      limit: 100,
      total: y.value.length,
      visible: y.value.length,
      from: y.value.length > 0 ? 1 : 0,
      to: y.value.length,
      previousUrl: "",
      nextUrl: ""
    }), k = /* @__PURE__ */ Pt({
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
    for (const p of Object.keys(a))
      p !== "status" && (r(p, k[p]) || (k[p] = ""));
    const oe = /* @__PURE__ */ Ee(k.publication), ue = /* @__PURE__ */ Ee(k.q), Z = /* @__PURE__ */ Ee(!1), fe = /* @__PURE__ */ Ee(null), X = B(() => {
      const p = oe.value.trim().toLocaleLowerCase();
      return (p !== "" && fe.value !== null ? fe.value : A.value).filter((s) => p === "" || s.toLocaleLowerCase().includes(p)).slice(0, w4);
    });
    We(() => k.publication, (p) => {
      oe.value = p || "";
    }), We(() => k.q, (p) => {
      ue.value = p || "";
    });
    let le = null, _e = null, ee = 0;
    We(oe, (p) => {
      window.clearTimeout(le), _e?.abort(), _e = null, fe.value = null;
      const u = String(p || "").trim();
      if (u.length < 3) return;
      const s = ++ee;
      le = window.setTimeout(() => {
        Xg(u, s);
      }, 200);
    });
    const J = /* @__PURE__ */ Ee(k.publisher), F = /* @__PURE__ */ Ee(!1), U = /* @__PURE__ */ Ee(null), Y = B(() => U.value || []);
    We(() => k.publisher, (p) => {
      J.value = p || "";
    });
    let ce = null, ae = null, me = 0;
    We(J, (p) => {
      window.clearTimeout(ce), ae?.abort(), ae = null, U.value = null;
      const u = String(p || "").trim();
      if (u.length < 3) return;
      const s = ++me;
      ce = window.setTimeout(() => {
        Vg(u, s);
      }, 200);
    });
    const de = /* @__PURE__ */ Ee(k.creator), Se = /* @__PURE__ */ Ee(!1), Te = /* @__PURE__ */ Ee(null), Ke = B(() => Te.value || []);
    We(() => k.creator, (p) => {
      de.value = p || "";
    });
    let Le = null, ct = null, ht = 0;
    We(de, (p) => {
      window.clearTimeout(Le), ct?.abort(), ct = null, Te.value = null;
      const u = String(p || "").trim();
      if (u.length < 3) return;
      const s = ++ht;
      Le = window.setTimeout(() => {
        Hg(u, s);
      }, 200);
    });
    const tt = /* @__PURE__ */ Ee(k.folder), ut = /* @__PURE__ */ Ee(!1), rt = /* @__PURE__ */ Ee(null), zt = B(() => rt.value || []);
    We(() => k.folder, (p) => {
      tt.value = p || "";
    });
    let H = null, w = null, T = 0;
    We(tt, (p) => {
      window.clearTimeout(H), w?.abort(), w = null, rt.value = null;
      const u = String(p || "").trim();
      if (u.length < 3) return;
      const s = ++T;
      H = window.setTimeout(() => {
        Wg(u, s);
      }, 200);
    });
    const x = /* @__PURE__ */ Ee(k.subject), R = /* @__PURE__ */ Ee(!1), I = /* @__PURE__ */ Ee(null), j = B(() => I.value || []);
    We(() => k.subject, (p) => {
      x.value = p || "";
    });
    let G = null, K = null, Q = 0;
    We(x, (p) => {
      window.clearTimeout(G), K?.abort(), K = null, I.value = null;
      const u = String(p || "").trim();
      if (u.length < 3) return;
      const s = ++Q;
      G = window.setTimeout(() => {
        Kg(u, s);
      }, 200);
    });
    const V = /* @__PURE__ */ Ee(k.classification), pe = /* @__PURE__ */ Ee(!1), se = /* @__PURE__ */ Ee(null), he = B(() => se.value || []);
    We(() => k.classification, (p) => {
      V.value = p || "";
    });
    let Oe = null, Pe = null, ze = 0;
    We(V, (p) => {
      window.clearTimeout(Oe), Pe?.abort(), Pe = null, se.value = null;
      const u = String(p || "").trim();
      if (u.length < 3) return;
      const s = ++ze;
      Oe = window.setTimeout(() => {
        Gg(u, s);
      }, 200);
    });
    const $e = /* @__PURE__ */ Ee(k.tag), He = /* @__PURE__ */ Ee(!1), ot = /* @__PURE__ */ Ee(null), vt = B(() => ot.value || []);
    We(() => k.tag, (p) => {
      $e.value = p || "";
    });
    let Et = null, Ut = null, Ti = 0;
    We($e, (p) => {
      window.clearTimeout(Et), Ut?.abort(), Ut = null, ot.value = null;
      const u = String(p || "").trim();
      if (u.length < 2) return;
      const s = ++Ti;
      Et = window.setTimeout(() => {
        qg(u, s);
      }, 200);
    });
    const et = /* @__PURE__ */ Ee(k.year), dt = /* @__PURE__ */ Ee(!1), Fi = /* @__PURE__ */ Ee(null), vi = B(() => Fi.value || []);
    We(() => k.year, (p) => {
      et.value = p || "";
    });
    let na = null, Cn = null, Di = 0;
    We(et, (p) => {
      window.clearTimeout(na), Cn?.abort(), Cn = null, Fi.value = null;
      const u = String(p || "").trim();
      if (u.length < 2) return;
      const s = ++Di;
      na = window.setTimeout(() => {
        Yg(u, s);
      }, 200);
    });
    const Mi = Object.fromEntries(Object.keys(k).map((p) => [p, p === "sort" ? "title" : p === "view" ? "compact" : ""])), cr = window.location.pathname.indexOf(S4), Ji = cr >= 0 ? window.location.pathname.slice(0, cr) : "", kn = {
      catalogue: `${Ji}/apps/library/`,
      review: `${Ji}/apps/library/?scannerConflicts=1`,
      settings: `${Ji}/settings/user/library`
    };
    function Tn(p, u) {
      if (typeof p != "string" || p === "") return u;
      try {
        const s = Ji ? `${Ji}/` : "/";
        let O = p;
        for (let W = 0; W < 5; W += 1) {
          if (!O.startsWith("/") || O.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(O)) return u;
          const we = new URL(O, window.location.origin);
          if (we.origin !== window.location.origin || !we.pathname.startsWith(s)) return u;
          const Re = O.split(/[?#]/, 1)[0];
          for (const li of Re.split("/")) {
            let Mn = li;
            for (let Ka = 0; Ka < 5; Ka += 1) {
              const Bi = decodeURIComponent(Mn);
              if (/[\\/\u0000-\u001f\u007f]/.test(Bi) || Bi === "." || Bi === "..") return u;
              if (Bi === Mn) break;
              if (Mn = Bi, Ka === 4) return u;
            }
          }
          const Xe = decodeURI(O);
          if (Xe === O) return p;
          O = Xe;
        }
        return u;
      } catch {
        return u;
      }
    }
    const En = B(() => Tn(v.settingsUrl, kn.settings)), gt = B(() => Tn(v.catalogueRootUrl, kn.catalogue)), ja = B(() => Tn(v.homeUrl, `${kn.catalogue}?home=1`)), ri = B(() => Tn(v.shelvesUrl, `${kn.catalogue}?shelves=1`)), An = B(() => Tn(v.reviewUrl || v.scannerConflictReviewUrl, kn.review)), aa = B(() => Object.entries(a).some(([p, u]) => k[p] === u)), Ba = B(() => n.reduce((p, u) => p + Number(bc.value[u.countKey] || 0), 0)), ra = B(() => v.surface === "home"), xn = B(() => v.surface === "shelves"), ur = B(() => !ra.value && !xn.value && !aa.value && !k.starred && k.sort !== "lastOpened" && !k.shelf), Mo = B(() => [
      { key: "home", name: b("library", "Home"), href: ja.value, active: ra.value },
      { key: "all", name: b("library", "All publications"), href: gt.value, active: ur.value },
      { key: "starred", name: b("library", "Starred"), href: `${gt.value}?starred=1`, active: k.starred === "1" },
      { key: "continue", name: b("library", "Continue reading"), href: `${gt.value}?sort=lastOpened`, active: k.sort === "lastOpened" },
      { key: "shelves", name: b("library", "Shelves"), href: ri.value, active: xn.value || !!k.shelf },
      { key: "collections", name: b("library", "Collections"), href: `${gt.value}#library-collections`, active: !1 }
    ]), At = B(() => v.requestToken || "");
    function On(p, u) {
      const s = String(p?.recordOpenUrl || "");
      if (!s || !At.value) return;
      const O = new URLSearchParams({ requesttoken: At.value });
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
        headers: { "Content-Type": "application/x-www-form-urlencoded", requesttoken: At.value },
        body: O,
        credentials: "same-origin",
        keepalive: !0
      }).catch(() => {
      });
    }
    const Nn = B(() => v.catalogueEndpointUrl || "/apps/library/catalogue"), Ql = B(() => v.shelfChildrenUrl || "/apps/library/shelves/children"), ec = B(() => v.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), pt = B(() => v.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), Ln = B(() => v.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), tc = B(() => v.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), zo = B(() => v.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), dr = B(() => v.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), Uo = B(() => v.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), jo = B(() => v.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), ic = B(() => v.itemSidebarUrlTemplate || `${Ji}/apps/library/items/__ITEM_ID__/sidebar`), nc = B(() => v.batchTagUrl || "/apps/library/bulk/tags"), ac = B(() => v.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), rc = B(() => v.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), zi = B(() => v.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Bo = B(() => v.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), oa = B(() => v.scannerConflictReviewUrl || "?scannerConflicts=1");
    v.importHealthSummary, v.importHealthSummary && Object.keys(v.importHealthSummary).length > 0;
    const Ei = B(() => v.discoveryPage === "publication"), fr = B(() => v.discoveryPage === "year"), Rn = B(() => v.discoveryPage === "creator"), Ha = B(() => Ei.value || fr.value || Rn.value), Ho = B(() => v.discoveryTitle || k.publication || k.year || k.creator || ""), Vo = B(() => Ha.value ? Ho.value : b("library", "Library")), pr = B(() => Rn.value ? b("library", "Creator") : fr.value ? b("library", "Publication year") : b("library", "Publication / series")), sa = B(() => Number(v.rootCount || 0)), hr = B(() => Number(v.enabledRootCount || 0)), In = B(() => sa.value === 0), Ui = B(() => sa.value > 0 && hr.value === 0), Pn = B(() => q.value.length > 0), mt = /* @__PURE__ */ Ee(!1), Ko = /* @__PURE__ */ Ee(null), la = /* @__PURE__ */ Ee(null), Go = {
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
    }, qo = {
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
    }, Wo = {
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
    }, vr = B(() => {
      if (typeof window > "u") return "";
      const p = new URLSearchParams(window.location.search);
      if (p.get("batchMetadataApplyResult") !== "1") return "";
      const u = p.get("batchMetadataField") || "field", s = p.get("batchMetadataApplied") || "0", O = p.get("batchMetadataUnchanged") || "0", W = p.get("batchMetadataSkipped") || "0";
      return b("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: u, unchanged: O, skipped: W });
    }), gr = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? b("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Yo = B(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? b("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), br = B(() => v.savedCollections || []), oc = B(() => v.savedCollectionSaveUrl || "/apps/library/collections"), sc = B(() => v.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), mr = ["compact", "gallery", "list", "shelf"], xt = B(() => mr.includes(k.view) ? k.view : "compact"), yr = B(() => ({
      "library-cover-gallery--compact": xt.value === "compact",
      "library-cover-gallery--gallery": xt.value === "gallery",
      "library-cover-gallery--shelf": xt.value === "shelf"
    }));
    function te(p) {
      const u = String(p || "").trim();
      if (u.length <= 32) return u;
      const s = u.split("/").filter(Boolean);
      return s.length > 0 ? `…/${s.at(-1)}` : u;
    }
    function S(p, u) {
      const s = String(u || "").trim();
      if (s === "" || qo[p] === s) return "";
      if (p === "format") return s.toUpperCase();
      if (p === "folder") return te(s);
      const O = Wo[p]?.[s];
      return O ? b("library", O) : s;
    }
    function $(p, u) {
      const s = String(k[p] || "").trim(), O = S(p, s), W = b("library", u);
      return {
        key: p,
        label: W,
        value: s,
        displayValue: O,
        title: O ? `${W}: ${s}` : W
      };
    }
    const q = B(() => Object.entries(Go).map(([p, u]) => $(p, u)).filter((p) => p.value !== "" && !(p.key === "sort" && p.value === "title") && !(p.key === "view" && p.value === "compact"))), re = B(() => q.value.filter((p) => !["sort", "view"].includes(p.key))), ve = B(() => q.value.length), Ne = Object.freeze([
      { key: "content", label: "Content", keys: ["q", "type", "publisher", "publication", "year", "language", "creator", "format", "subject", "classification", "tag"] },
      { key: "location", label: "Location", keys: ["shelf", "folder"] },
      { key: "review", label: "Review", keys: ["scannerConflicts", "needsMetadata", "coverReview", "noCreator", "noPublication", "noDate", "titleFromFilename", "noDescription", "unsupportedContainer", "weakMetadata", "unreviewedImports", "status"] },
      { key: "personal", label: "Personal / display", keys: ["starred", "workflowStatus"] }
    ]);
    function it(p) {
      const u = new Set(p.keys);
      return re.value.filter((s) => u.has(s.key));
    }
    const nt = B(() => Ne.map((p) => ({ ...p, chips: it(p) }))), Ot = B(() => {
      const p = new URLSearchParams();
      for (const s of re.value) p.set(s.key, s.value);
      const u = p.toString();
      return `${gt.value}${u ? `?${u}` : ""}`;
    }), yt = B(() => re.value[0] || null), _r = B(() => ue.value.trim() !== String(k.q || "").trim()), Nt = B(() => String(k.q || "").trim() !== "" || _r.value);
    function oi(p) {
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
      }[p]?.value ?? "").trim() !== String(k[p] || "").trim();
    }
    function Ai(p) {
      return oi(p) ? p === "q" ? b("library", "Not applied yet — press Enter or Apply.") : b("library", "Press Enter or Apply to use this value.") : "";
    }
    function Qi(p) {
      return { "library-filter-apply--pending": oi(p) };
    }
    const wg = B(() => ve.value > 0 ? b("library", "Filters ({count})", { count: ve.value }) : b("library", "Filters")), Sg = B(() => ve.value > 0 ? b("library", "Open filters panel; {count} active filters", { count: ve.value }) : b("library", "Open filters panel")), Cg = B(() => ui("library", "Show %n item", "Show %n items", Number(z.value.total || 0)));
    function kg(p) {
      mt.value = p.currentTarget?.open === !0, mt.value && ti(() => {
        Ko.value?.focus?.();
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
    ]), _d = B(() => Object.entries(d(k)).filter(([p, u]) => !Tg.has(p) && String(u || "").trim() !== "").map(([p, u]) => ({ key: p, value: u }))), Eg = B(() => Object.entries(k).filter(([p, u]) => !["q", "sort", "starred"].includes(p) && String(u || "").trim() !== "").map(([p, u]) => ({ key: p, value: u }))), Xo = B(() => Object.entries(d(k)).filter(([p, u]) => String(u || "").trim() !== "").map(([p, u]) => ({ key: p, value: u }))), Ag = B(() => Xo.value.filter(({ key: p, value: u }) => p !== "q" && !(p === "sort" && u === "title"))), lc = /* @__PURE__ */ Pt({}), Zo = B(() => v.homeRows || { continueReading: [], recentlyAdded: [] }), wd = B(() => v.homeShelves || []), Sd = B(() => v.shelfTree || []), cc = B(() => v.needsAttention || { count: 0, url: `${gt.value}?needsMetadata=1` }), xi = /* @__PURE__ */ Ee([]), Jo = B(() => new Set(xi.value));
    function Cd(p, u) {
      const s = new Set(xi.value);
      u ? s.add(Number(p)) : s.delete(Number(p)), xi.value = [...s];
    }
    function xg(p) {
      xi.value = p.currentTarget.checked ? y.value.map((u) => Number(u.id)) : [];
    }
    function Og() {
      const p = new Set(y.value.map((u) => Number(u.id)));
      xi.value = xi.value.filter((u) => p.has(u));
    }
    function Ng(p) {
      const u = p.target;
      if (u instanceof HTMLFormElement) {
        u.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of xi.value) {
          const O = document.createElement("input");
          O.type = "hidden", O.name = "itemIds[]", O.value = String(s), O.dataset.librarySelectedId = "1", u.appendChild(O);
        }
      }
    }
    const Ce = /* @__PURE__ */ Ee(null), ca = /* @__PURE__ */ Ee(null), Zt = /* @__PURE__ */ Pt({ loading: !1, error: "", missing: !1 }), ua = /* @__PURE__ */ Ee("overview"), Oi = /* @__PURE__ */ Pt({ saving: !1, saved: !1, error: "" }), jt = /* @__PURE__ */ Pt({ title: "", publicationDate: "", identifiers: [] }), kd = /* @__PURE__ */ Ee(null), da = /* @__PURE__ */ Ee(null), fa = /* @__PURE__ */ Ee(!1);
    let uc = null, en = null, Qo = null, dc = !1, wr = null, fc = 0;
    const $n = B(() => ca.value !== null), Sr = B(() => Ce.value ? y.value.findIndex((p) => p.id === Ce.value.id) : -1), es = B(() => Sr.value > 0 ? y.value[Sr.value - 1] : null), ts = B(() => Sr.value >= 0 && Sr.value < y.value.length - 1 ? y.value[Sr.value + 1] : null), Td = B(() => Fg(Ce.value?.description || "")), pa = B(() => Ig(Ce.value?.publicationDate || "")), Ed = B(() => Pg(Ce.value?.language || "")), Lg = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Rg = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Cr(p) {
      const u = String(p ?? "").trim(), s = u.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return s ? s[1] : u;
    }
    function Ig(p) {
      const s = Cr(p).match(/^(\d{4})/u);
      return s ? s[1] : "";
    }
    function Pg(p) {
      return String(p ?? "").split(/[;,\n]+/u).map((u) => u.trim()).filter(Boolean);
    }
    function Ad(p, u) {
      const s = new URLSearchParams();
      for (const [O, W] of Object.entries(k)) {
        const we = String(W || "").trim();
        we !== "" && !(O === "sort" && we === "title") && !(O === "view" && we === "compact") && s.set(O, we);
      }
      return s.set(p, String(u || "").trim()), s.delete("page"), o(s);
    }
    function is(p, u) {
      const O = Ad(p, u).toString();
      return `${gt.value}${O ? `?${O}` : ""}`;
    }
    function ns(p, u, s) {
      const O = String(s || "").trim();
      if (O === "") return;
      p?.preventDefault?.();
      const W = Ad(u, O);
      Tr({ historyMode: "none" }), Rt(null, {
        params: W,
        generation: ++Bt,
        historyMode: "push"
      });
    }
    function $g(p) {
      return String(p ?? "").replace(/&#x([0-9a-f]+);/giu, (u, s) => String.fromCodePoint(Number.parseInt(s, 16))).replace(/&#(\d+);/gu, (u, s) => String.fromCodePoint(Number.parseInt(s, 10))).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&#039;", "'").replaceAll("&apos;", "'").replaceAll("&nbsp;", " ").replaceAll("&amp;", "&");
    }
    function Fg(p) {
      let u = String(p ?? "").trim();
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
    function xd(p) {
      return { ...p, publicationDate: Cr(p?.publicationDate) };
    }
    function Od(p) {
      jt.title = String(p?.title || ""), jt.publicationDate = Cr(p?.publicationDate), jt.identifiers = Array.isArray(p?.identifiers) ? p.identifiers.map((u) => ({ scheme: String(u?.scheme || ""), displayValue: String(u?.displayValue || u?.value || "") })) : [], Object.assign(Oi, { saving: !1, saved: !1, error: "" });
    }
    function Dg() {
      jt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Mg(p) {
      jt.identifiers.splice(p, 1);
    }
    async function zg() {
      const p = Ce.value;
      if (!p?.updateUrl || Oi.saving) return;
      Object.assign(Oi, { saving: !0, saved: !1, error: "" });
      const u = new FormData();
      u.set("requesttoken", At.value), u.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const O = p[s];
        u.set(s, Array.isArray(O) ? O.join(", ") : String(O ?? ""));
      }
      u.set("title", jt.title), u.set("publicationDate", Cr(jt.publicationDate)), jt.identifiers.forEach((s, O) => {
        u.set(`identifiers[${O}][scheme]`, s.scheme), u.set(`identifiers[${O}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(p.updateUrl, { method: "POST", body: u, credentials: "same-origin", headers: { Accept: "application/json" } }), O = await s.json().catch(() => ({}));
        if (!s.ok || O.saved !== !0) throw new Error(O.error || b("library", "Metadata could not be saved."));
        p.title = jt.title.trim(), p.publicationDate = Cr(jt.publicationDate), p.identifiers = jt.identifiers.filter((we) => we.scheme.trim() || we.displayValue.trim()).map((we) => ({ ...we }));
        const W = y.value.find((we) => Number(we.id) === Number(p.id));
        W && (W.title = p.title, W.publicationDate = p.publicationDate), Oi.saved = !0;
      } catch (s) {
        Oi.error = s?.message || b("library", "Metadata could not be saved.");
      } finally {
        Oi.saving = !1;
      }
    }
    const Fn = B(() => {
      const p = r("scannerConflicts", k.scannerConflicts) || r("weakMetadata", k.weakMetadata), u = p ? y.value.find((s) => as(s).length > 0) : null;
      return {
        enabled: p,
        item: u,
        fields: u ? as(u) : [],
        reviewNextUrl: oa.value,
        skipUrl: z.value.nextUrl || oa.value
      };
    }), Ug = B(() => n.map((p) => ({
      ...p,
      label: b("library", p.label),
      href: `${gt.value}?${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`,
      active: String(k[p.key] || "") === p.value
    })));
    function pc(p) {
      return Array.isArray(p) ? JSON.stringify(p) : p == null ? "" : String(p);
    }
    function as(p) {
      const u = p.fieldValues || {}, s = p.fieldSources || {};
      return Lg.filter((O) => Object.prototype.hasOwnProperty.call(u, O)).map((O) => {
        const W = pc(p[O]), we = pc(u[O]), Re = pc(s[O] || p.metadataSource || "scanner"), Xe = Re.includes("filename") || Re.includes("path") ? we : "", li = Re.includes("sidecar") ? we : "";
        return { field: O, currentValue: W, scannerCandidate: we, pathTemplateCandidate: Xe, sidecarValue: li, sourceProvenance: Re, differs: W !== we };
      }).filter((O) => O.differs);
    }
    let ha = 0, va = null;
    function Nd() {
      const p = new URLSearchParams(window.location.search).getAll("item");
      if (p.length !== 1 || !/^[1-9][0-9]*$/.test(p[0])) return null;
      const u = Number(p[0]);
      return Number.isSafeInteger(u) && u <= C4 ? u : null;
    }
    function Ld(p, u = "push") {
      const s = new URL(window.location.href);
      s.searchParams.delete("item"), p !== null && s.searchParams.set("item", String(p)), history[`${u}State`]({}, "", `${s.pathname}${s.search}${s.hash}`);
    }
    async function kr(p, { historyMode: u = "push", seed: s = null } = {}) {
      va?.abort();
      const O = ++ha, W = new AbortController();
      va = W, ca.value = p, ua.value = "overview", Ce.value = s && Number(s.id) === p ? xd(s) : null, Ce.value && Od(Ce.value), Object.assign(Zt, { loading: !0, error: "", missing: !1 }), u !== "none" && Ld(p, u);
      try {
        const we = ic.value.replace("__ITEM_ID__", encodeURIComponent(String(p))), Re = await fetch(we, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: W.signal });
        if (O !== ha) return;
        if (!Re.ok) {
          Ce.value = null, Zt.missing = Re.status === 404, Zt.error = Re.status === 404 ? b("library", "This publication is unavailable or you do not have access.") : b("library", "Could not load publication details. Try again.");
          return;
        }
        const Xe = await Re.json();
        if (O !== ha) return;
        if (typeof Xe?.item?.id != "number" || !Number.isSafeInteger(Xe.item.id) || Xe.item.id !== p) {
          Ce.value = null, Zt.missing = !1, Zt.error = b("library", "Could not load publication details. Try again.");
          return;
        }
        Ce.value = xd(Xe.item), Od(Ce.value), await ti();
      } catch (we) {
        O === ha && we?.name !== "AbortError" && (Ce.value = null, Zt.missing = !1, Zt.error = b("library", "Could not load publication details. Try again."));
      } finally {
        O === ha && (Zt.loading = !1, va = null);
      }
    }
    function ji(p, u) {
      hc(), uc = u?.currentTarget instanceof HTMLElement ? u.currentTarget : null, kr(Number(p.id), { seed: p });
    }
    function Tr({ historyMode: p = "push", restoreFocus: u = !0 } = {}) {
      Qo = u ? uc : null, uc = null, va?.abort(), va = null, ha += 1, ca.value = null, Ce.value = null, ua.value = "overview", Object.assign(Zt, { loading: !1, error: "", missing: !1 }), p !== "none" && Ld(null, p);
    }
    function Rd() {
      fa.value ? (da.value?.$refs?.sidebar || da.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : kd.value?.focus();
    }
    function jg() {
      const p = Qo;
      if (Qo = null, hc(), dc || !p?.isConnected) return;
      const u = fc;
      wr = window.requestAnimationFrame(() => {
        wr = null, !(u !== fc || dc || $n.value || !p.isConnected) && p.focus();
      });
    }
    function hc() {
      fc += 1, wr !== null && (window.cancelAnimationFrame(wr), wr = null);
    }
    function Er(p = en) {
      fa.value = !!p?.matches, $n.value && ti(Rd);
    }
    function rs(p) {
      p && kr(Number(p.id), { seed: p });
    }
    const Ar = /* @__PURE__ */ Ee(null);
    let Bt = 0, Va = null, os = null, xr = null;
    const Lt = /* @__PURE__ */ Pt({ loading: !1, error: "", completed: !1 });
    function Bg(p) {
      const u = o(new FormData(p));
      u.delete("publicationSearch"), u.delete("creatorSearch"), u.delete("subjectSearch"), u.delete("publisherSearch"), u.delete("classificationSearch"), u.delete("tagSearch"), u.delete("folderSearch"), u.delete("yearSearch");
      for (const s of Array.from(u.keys()))
        String(u.get(s) || "").trim() === "" && u.delete(s);
      return u.delete("page"), u.get("view") === "compact" && u.delete("view"), u.get("sort") === "title" && u.delete("sort"), u;
    }
    async function ga(p, u, s) {
      const O = new URLSearchParams();
      for (const [Re, Xe] of Object.entries(k)) {
        const li = String(Xe || "").trim();
        Re !== p && li !== "" && !(Re === "sort" && li === "title") && !(Re === "view" && li === "compact") && O.set(Re, li);
      }
      O.set(`${p}Search`, u);
      const W = new AbortController();
      p === "creator" ? ct = W : p === "publisher" ? ae = W : p === "subject" ? K = W : p === "classification" ? Pe = W : p === "tag" ? Ut = W : p === "folder" ? w = W : Cn = W;
      const we = p === "creator" ? pt.value : p === "publisher" ? Ln.value : p === "subject" ? tc.value : p === "classification" ? zo.value : p === "tag" ? dr.value : p === "folder" ? Uo.value : jo.value;
      try {
        const Re = await fetch(`${we}?${O}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: W.signal });
        if (!Re.ok) throw new Error(`${p} suggestions request failed: ${Re.status}`);
        const Xe = await Re.json(), li = p === "creator" ? ht : p === "publisher" ? me : p === "subject" ? Q : p === "classification" ? ze : p === "tag" ? Ti : p === "folder" ? T : Di, Mn = p === "creator" ? de.value : p === "publisher" ? J.value : p === "subject" ? x.value : p === "classification" ? V.value : p === "tag" ? $e.value : p === "folder" ? tt.value : et.value;
        s === li && Mn.trim() === u && (p === "creator" ? Te.value = Array.isArray(Xe.creators) ? Xe.creators : [] : p === "publisher" ? U.value = Array.isArray(Xe.publishers) ? Xe.publishers : [] : p === "subject" ? I.value = Array.isArray(Xe.subjects) ? Xe.subjects : [] : p === "classification" ? se.value = Array.isArray(Xe.classifications) ? Xe.classifications : [] : p === "tag" ? ot.value = Array.isArray(Xe.tags) ? Xe.tags : [] : p === "folder" ? rt.value = Array.isArray(Xe.folders) ? Xe.folders : [] : Fi.value = Array.isArray(Xe.years) ? Xe.years : []);
      } catch (Re) {
        Re?.name !== "AbortError" && (p === "creator" && s === ht && (Te.value = null), p === "publisher" && s === me && (U.value = null), p === "subject" && s === Q && (I.value = null), p === "classification" && s === ze && (se.value = null), p === "tag" && s === Ti && (ot.value = null), p === "folder" && s === T && (rt.value = null), p === "year" && s === Di && (Fi.value = null));
      }
    }
    function Hg(p, u) {
      return ga("creator", p, u);
    }
    function Vg(p, u) {
      return ga("publisher", p, u);
    }
    function Kg(p, u) {
      return ga("subject", p, u);
    }
    function Gg(p, u) {
      return ga("classification", p, u);
    }
    function qg(p, u) {
      return ga("tag", p, u);
    }
    function Wg(p, u) {
      return ga("folder", p, u);
    }
    function Yg(p, u) {
      return ga("year", p, u);
    }
    async function Xg(p, u) {
      const s = new URLSearchParams();
      for (const [W, we] of Object.entries(k)) {
        const Re = String(we || "").trim();
        W !== "publication" && Re !== "" && !(W === "sort" && Re === "title") && !(W === "view" && Re === "compact") && s.set(W, Re);
      }
      s.set("publicationSearch", p);
      const O = new AbortController();
      _e = O;
      try {
        const W = await fetch(`${ec.value}?${s}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: O.signal
        });
        if (!W.ok) throw new Error(`Publication suggestions request failed: ${W.status}`);
        const we = await W.json();
        u === ee && oe.value.trim() === p && (fe.value = Array.isArray(we.publications) ? we.publications : []);
      } catch (W) {
        W?.name !== "AbortError" && u === ee && (fe.value = null);
      } finally {
        u === ee && (_e = null);
      }
    }
    function Zg(p) {
      f.splice(0, f.length, ...(p.items || []).map((s) => ({ ...s }))), Og();
      const u = new Set(p.facetsDeferred ? [
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
        !u.has(s) && Object.prototype.hasOwnProperty.call(p, s) && (v[s] = p[s]);
      Object.assign(k, Mi, p.activeFilters || {});
    }
    async function Jg() {
      if (v.surface !== "index") return;
      const p = Bt, u = JSON.stringify({ ...k }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [W, we] of Object.entries(k)) {
        const Re = String(we || "").trim();
        Re !== "" && !(W === "sort" && Re === "title") && !(W === "view" && Re === "compact") && s.set(W, Re);
      }
      const O = new AbortController();
      os = O;
      try {
        const W = await fetch(`${Nn.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: O.signal
        });
        if (!W.ok) return;
        const we = await W.json();
        if (p !== Bt || u !== JSON.stringify({ ...k })) return;
        for (const Re of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(we, Re) && (v[Re] = we[Re]);
      } catch (W) {
        if (W?.name !== "AbortError") return;
      } finally {
        os === O && (os = null);
      }
    }
    async function Rt(p, u = null) {
      const s = p?.currentTarget?.tagName === "FORM" ? p.currentTarget : p?.currentTarget?.form;
      if (!s && !u?.params) return;
      const O = o(u?.params ?? Bg(s));
      if (ra.value || xn.value) {
        Or(O, gt.value);
        return;
      }
      const W = O.toString(), we = W ? `?${W}` : "", Re = u?.generation ?? ++Bt, Xe = c(O), li = u?.historyMode ?? (Xe ? "push" : "replace"), Mn = u?.historyTraversal === !0;
      if (Re !== Bt) return;
      u === null && Va?.abort();
      const Ka = new AbortController();
      Va = Ka, Lt.loading = !0, Lt.error = "", Lt.completed = !1;
      try {
        const Bi = await fetch(Nn.value + we, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ka.signal
        });
        if (Re !== Bt) return;
        if (!Bi.ok) {
          Mn ? Or(O) : Xe ? Lt.error = b("library", "Could not load this review queue. Try again.") : Or(O);
          return;
        }
        const bb = await Bi.json();
        if (Re !== Bt) return;
        Zg(bb), Lt.completed = !0, li !== "none" && (history[li === "push" ? "pushState" : "replaceState"]({}, "", W ? `?${W}` : window.location.pathname), $n.value && Tr({ historyMode: "none" }));
      } catch (Bi) {
        Re === Bt && Bi?.name !== "AbortError" && (Mn ? Or(O) : Xe ? Lt.error = b("library", "Could not load this review queue. Try again.") : Or(O));
      } finally {
        Re === Bt && (Va = null, Lt.loading = !1);
      }
    }
    function Id() {
      Va?.abort();
      const p = new URLSearchParams(window.location.search), u = Nd();
      p.has("item") && u === null && (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)), u === null ? Tr({ historyMode: "none" }) : kr(u, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === u) || null }), p.delete("item"), Rt(null, {
        params: o(p),
        generation: ++Bt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Or(p, u = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = u, s.hidden = !0;
      for (const [O, W] of p.entries()) {
        const we = document.createElement("input");
        we.type = "hidden", we.name = O, we.value = W, s.appendChild(we);
      }
      document.body.appendChild(s), s.submit(), s.remove();
    }
    function si(p, u = null, s = null) {
      if (u === null) {
        Rt(p);
        return;
      }
      Rt({ currentTarget: p }, { params: u, generation: s });
    }
    async function Qg(p, u = oe.value) {
      k.publication = String(u || "").trim(), oe.value = k.publication, Z.value = !1, await ti(), Rt({ currentTarget: p });
    }
    function Pd(p, u) {
      Qg(u.currentTarget.form, p);
    }
    async function eb(p) {
      k.q = String(ue.value || "").trim(), k.publication = String(oe.value || "").trim(), k.publisher = String(J.value || "").trim(), k.creator = String(de.value || "").trim(), k.subject = String(x.value || "").trim(), k.folder = String(tt.value || "").trim(), k.year = String(et.value || "").trim(), Z.value = !1, F.value = !1, Se.value = !1, R.value = !1, ut.value = !1, dt.value = !1, await ti(), Rt({ currentTarget: p });
    }
    async function Dn(p, u, s) {
      k[u] = String(s || "").trim(), u === "creator" ? (de.value = k.creator, Se.value = !1) : u === "publisher" ? (J.value = k.publisher, F.value = !1) : u === "subject" ? (x.value = k.subject, R.value = !1) : u === "folder" ? (tt.value = k.folder, ut.value = !1) : u === "classification" ? (V.value = k.classification, pe.value = !1) : u === "tag" ? ($e.value = k.tag, He.value = !1) : (et.value = k.year, dt.value = !1), tn[u] = -1, await ti(), Rt({ currentTarget: p });
    }
    function $d(p) {
      eb(p.currentTarget);
    }
    function Fd(p, u) {
      Dn(u.currentTarget.form, "creator", p);
    }
    function Dd(p, u) {
      Dn(u.currentTarget.form, "publisher", p);
    }
    function Md(p, u) {
      Dn(u.currentTarget.form, "classification", p);
    }
    function zd(p, u) {
      Dn(u.currentTarget.form, "tag", p);
    }
    function Ud(p, u) {
      Dn(u.currentTarget.form, "folder", p);
    }
    function jd(p, u = x.value) {
      window.clearTimeout(G), K?.abort(), K = null, Dn(p, "subject", u);
    }
    function tb(p) {
      jd(p.currentTarget.form);
    }
    function Bd(p, u) {
      jd(u.currentTarget.form, p);
    }
    function Hd(p, u) {
      Dn(u.currentTarget.form, "year", p);
    }
    const tn = /* @__PURE__ */ Pt({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function ib(p) {
      return Y.value;
    }
    function vc(p, u, s) {
      return `library-${p}-${u}-suggestion-${s}`;
    }
    function Vd(p, u) {
      const s = tn[u];
      return s >= 0 ? vc(p, u, s) : void 0;
    }
    function gc(p, u) {
      F.value = u, u || (tn[p] = -1);
    }
    function Kd(p) {
      tn[p] = -1, gc(p, !0);
    }
    function nb(p, u, s) {
      Dn(s, p, u);
    }
    function Gd(p, u) {
      const s = ib();
      if (p.key === "Escape") {
        gc(u, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(p.key) || s.length === 0) return;
      if (p.key === "Enter") {
        const we = tn[u];
        if (we < 0) return;
        p.preventDefault(), nb(u, s[we], p.currentTarget.form);
        return;
      }
      p.preventDefault(), gc(u, !0);
      const O = tn[u], W = p.key === "ArrowDown" ? 1 : -1;
      tn[u] = O < 0 ? W > 0 ? 0 : s.length - 1 : (O + W + s.length) % s.length;
    }
    function qd(p) {
      const u = new URLSearchParams();
      for (const [s, O] of Object.entries(k)) {
        const W = String(O || "").trim();
        W !== "" && s !== p && !(s === "sort" && W === "title") && !(s === "view" && W === "compact") && u.set(s, W);
      }
      return u;
    }
    function Nr(p) {
      const u = qd(p).toString();
      return `${gt.value}${u ? `?${u}` : ""}`;
    }
    function Lr(p) {
      const u = qd(p);
      k[p] = p === "sort" ? "title" : p === "view" ? "compact" : "", Rt(null, {
        params: u,
        generation: ++Bt
      });
    }
    function Wd() {
      const p = new URLSearchParams();
      return k.sort && k.sort !== "title" && p.set("sort", k.sort), k.view && k.view !== "compact" && p.set("view", k.view), p;
    }
    function ba() {
      const p = Wd().toString();
      return `${gt.value}${p ? `?${p}` : ""}`;
    }
    function ma() {
      const p = Wd();
      for (const u of Object.keys(k))
        ["sort", "view"].includes(u) || (k[u] = Mi[u]);
      Rt(null, {
        params: p,
        generation: ++Bt
      }), !ra.value && !xn.value && ti(() => {
        la.value?.focus?.();
      });
    }
    function Yd(p) {
      const u = Ne.find((W) => W.key === p), s = new Set(u?.keys || []), O = new URLSearchParams();
      for (const [W, we] of Object.entries(k)) {
        const Re = String(we || "").trim();
        Re !== "" && !s.has(W) && !(W === "sort" && Re === "title") && !(W === "view" && Re === "compact") && O.set(W, Re);
      }
      return O.delete("page"), O;
    }
    function ss(p) {
      const s = Yd(p).toString();
      return `${gt.value}${s ? `?${s}` : ""}`;
    }
    function ls(p) {
      const u = Ne.find((O) => O.key === p);
      if (!u) return;
      const s = Yd(p);
      for (const O of u.keys) k[O] = Mi[O];
      Rt(null, {
        params: s,
        generation: ++Bt
      });
    }
    function ab(p) {
      const u = new URL(p.href, window.location.origin).searchParams;
      Rt(null, {
        params: u,
        generation: ++Bt
      });
    }
    function rb() {
      return Nr("q");
    }
    const bc = B(() => v.smartViewCounts || {}), ob = B(() => new Set(v.smartViewCountsPending || []));
    function sb(p) {
      return ob.value.has(p) || !Object.prototype.hasOwnProperty.call(bc.value, p) ? "—" : Number(bc.value[p] || 0);
    }
    const Xd = B(() => {
      const p = {};
      for (const [u, s] of Object.entries(k)) {
        const O = String(s || "").trim();
        O !== "" && !(u === "sort" && O === "title") && (p[u] = O);
      }
      return p;
    }), lb = B(() => JSON.stringify(Xd.value)), mc = B(() => Object.keys(Xd.value).length > 0);
    function cs(p) {
      if (!mr.includes(p)) return;
      k.view = p;
      const u = new URLSearchParams();
      for (const [s, O] of Object.entries(d(k))) {
        const W = String(O || "").trim();
        W !== "" && !(s === "sort" && W === "title") && !(s === "view" && W === "compact") && u.set(s, W);
      }
      u.delete("page"), Rt(null, {
        params: u,
        generation: ++Bt
      });
    }
    function cb(p) {
      const u = o(window.location.search);
      for (const O of Object.keys(Go))
        u.delete(O);
      u.delete("page");
      for (const [O, W] of Object.entries(p))
        String(W || "").trim() !== "" && u.set(O, String(W));
      const s = u.toString();
      return s ? `?${s}` : "?";
    }
    function ub(p) {
      return cb(p || {});
    }
    function db(p) {
      return sc.value.replace("__COLLECTION_ID__", encodeURIComponent(String(p || "0")));
    }
    function us(p) {
      return String(p || "").toUpperCase();
    }
    function Rr(p) {
      return lc[p.id] || "loading";
    }
    function fb(p) {
      lc[p.id] = "loaded";
    }
    function pb(p) {
      lc[p.id] = "error";
    }
    function Zd(p) {
      const u = String(p?.publication || "").trim(), s = String(p?.publicationDate || "").trim();
      return u && s ? `${u} · ${s}` : u || s;
    }
    function Jd(p) {
      const u = String(p?.tagName || "").toLowerCase();
      return p?.isContentEditable || ["input", "select", "textarea", "button"].includes(u);
    }
    function hb(p) {
      p.key !== "/" || p.metaKey || p.ctrlKey || p.altKey || p.shiftKey || Jd(p.target) || (p.preventDefault(), Ar.value?.focus(), Ar.value?.select?.());
    }
    async function vb(p) {
      p.key !== "Escape" || document.activeElement !== Ar.value || k.q === "" || (p.preventDefault(), ue.value = "", k.q = "", await ti(), si({ currentTarget: Ar.value }));
    }
    function gb(p) {
      if (!$n.value || p.metaKey || p.ctrlKey || p.altKey)
        return !1;
      if (p.key === "Escape")
        return p.preventDefault(), Tr(), !0;
      if (p.key === "Tab" && fa.value) {
        if (da.value?.focusTrap) return !1;
        const u = da.value?.$refs?.sidebar || da.value?.$el || da.value, s = [...u?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((we) => !we.hidden && we.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const O = s[0], W = s[s.length - 1];
        if (p.shiftKey && (document.activeElement === O || !u.contains(document.activeElement)))
          return p.preventDefault(), W.focus(), !0;
        if (!p.shiftKey && (document.activeElement === W || !u.contains(document.activeElement)))
          return p.preventDefault(), O.focus(), !0;
      }
      return Jd(p.target) ? !1 : p.key === "ArrowLeft" && es.value ? (p.preventDefault(), rs(es.value), !0) : p.key === "ArrowRight" && ts.value ? (p.preventDefault(), rs(ts.value), !0) : !1;
    }
    function Qd(p) {
      gb(p) || (hb(p), vb(p));
    }
    ea(() => {
      window.addEventListener("keydown", Qd), window.addEventListener("popstate", Id), en = window.matchMedia?.("(max-width: 1023px)") || null, Er(), en?.addEventListener ? en.addEventListener("change", Er) : en?.addListener?.(Er);
      const p = new URLSearchParams(window.location.search), u = Nd();
      p.has("item") && u === null ? (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)) : u !== null && kr(u, { historyMode: "none", seed: y.value.find((s) => Number(s.id) === u) || null }), xr = window.requestAnimationFrame(() => {
        xr = null, Jg();
      });
    }), lr(() => {
      dc = !0, hc(), window.removeEventListener("keydown", Qd), window.removeEventListener("popstate", Id), window.clearTimeout(le), window.clearTimeout(Le), window.clearTimeout(G), window.clearTimeout(na), _e?.abort(), ct?.abort(), K?.abort(), Cn?.abort(), Bt += 1, xr !== null && window.cancelAnimationFrame(xr), xr = null, os?.abort(), Va?.abort(), Va = null, ha += 1, va?.abort(), va = null, en?.removeEventListener ? en.removeEventListener("change", Er) : en?.removeListener?.(Er), en = null, Qo = null;
    });
    const Ir = /* @__PURE__ */ Pt({}), Pr = /* @__PURE__ */ Pt({});
    async function ef(p, u) {
      const s = u?.currentTarget?.closest?.("form") || u?.currentTarget;
      if (!s || !p?.starUrl || Ir[p.id]) return;
      const O = !!p.starred;
      Ir[p.id] = !0, Pr[p.id] = "", p.starred = !O;
      try {
        (await fetch(p.starUrl, {
          method: "POST",
          body: new FormData(s),
          credentials: "same-origin"
        })).ok || (p.starred = O, Pr[p.id] = b("library", "Could not update star. Try again."));
      } catch {
        p.starred = O, Pr[p.id] = b("library", "Could not update star. Try again.");
      } finally {
        Ir[p.id] = !1;
      }
    }
    return (p, u) => (m(), je(g(lT), { "app-name": "library" }, {
      default: Fe(() => [
        xe(g(H0), {
          "aria-label": g(b)("library", "Library navigation")
        }, {
          list: Fe(() => [
            xe(g(Uv), null, {
              default: Fe(() => [
                (m(!0), _(ie, null, ke(Mo.value, (s) => (m(), je(g(Bp), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                xe(g(Bp), {
                  active: aa.value,
                  href: An.value,
                  name: Ba.value > 0 ? `${g(b)("library", "Review")} (${Ba.value})` : g(b)("library", "Review")
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
                onSubmit: ye($d, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: k.folder
                }, null, 8, kT),
                (m(!0), _(ie, null, ke(_d.value, (s) => (m(), _("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, TT))), 128)),
                k.sort && k.sort !== "title" ? (m(), _("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: k.sort
                }, null, 8, ET)) : P("", !0),
                k.view && k.view !== "compact" ? (m(), _("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: k.view
                }, null, 8, AT)) : P("", !0),
                l("fieldset", xT, [
                  l("legend", null, h(g(b)("library", "Content")), 1),
                  nt.value.find((s) => s.key === "content")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ss("content"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: u[0] || (u[0] = ye((s) => ls("content"), ["prevent"]))
                  }, h(g(b)("library", "Clear Content")), 9, OT)) : P("", !0),
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
                      ref: Ar,
                      "onUpdate:modelValue": u[1] || (u[1] = (s) => ue.value = s),
                      "data-library-quick-search": "",
                      type: "search",
                      name: "q",
                      placeholder: g(b)("library", "Title, creator, description, filename or folder")
                    }, null, 8, LT), [
                      [ft, ue.value]
                    ]),
                    oi("q") ? (m(), _("small", RT, h(Ai("q")), 1)) : P("", !0)
                  ], 8, NT),
                  l("label", null, [
                    ge(h(g(b)("library", "Type")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[2] || (u[2] = (s) => k.type = s),
                      name: "type",
                      onChange: u[3] || (u[3] = (s) => si(s))
                    }, [
                      l("option", IT, h(g(b)("library", "All types")), 1),
                      (m(!0), _(ie, null, ke(L.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, PT))), 128))
                    ], 544), [
                      [Jt, k.type]
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
                      "aria-activedescendant": Vd("desktop", "publisher"),
                      "aria-expanded": F.value && Y.value.length > 0 ? "true" : "false",
                      onFocus: u[5] || (u[5] = (s) => Kd("publisher")),
                      onKeydown: u[6] || (u[6] = (s) => Gd(s, "publisher"))
                    }, null, 40, DT), [
                      [ft, J.value]
                    ]),
                    l("input", {
                      type: "hidden",
                      name: "publisher",
                      value: k.publisher
                    }, null, 8, MT),
                    oi("publisher") ? (m(), _("small", zT, h(Ai("publisher")), 1)) : P("", !0),
                    F.value && Y.value.length > 0 ? (m(), _("ul", UT, [
                      (m(!0), _(ie, null, ke(Y.value, (s, O) => (m(), _("li", {
                        id: vc("desktop", "publisher", O),
                        key: s,
                        role: "option",
                        "aria-selected": tn.publisher === O ? "true" : "false"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-publisher-suggestion",
                          onMousedown: u[7] || (u[7] = ye(() => {
                          }, ["prevent"])),
                          onClick: (W) => Dd(s, W)
                        }, h(s), 41, BT)
                      ], 8, jT))), 128))
                    ])) : P("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-publisher-apply", Qi("publisher")])
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
                      value: k.publication
                    }, null, 8, GT),
                    oi("publication") ? (m(), _("small", qT, h(Ai("publication")), 1)) : P("", !0),
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
                          onClick: (O) => Pd(s, O)
                        }, h(s), 41, YT)
                      ]))), 128))
                    ])) : P("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-publication-apply", Qi("publication")])
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
                      value: k.year
                    }, null, 8, QT),
                    oi("year") ? (m(), _("small", eE, h(Ai("year")), 1)) : P("", !0),
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
                          onClick: (O) => Hd(s, O)
                        }, h(s), 41, iE)
                      ]))), 128))
                    ])) : P("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-year-apply", Qi("year")])
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
                      value: k.creator
                    }, null, 8, oE),
                    oi("creator") ? (m(), _("small", sE, h(Ai("creator")), 1)) : P("", !0),
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
                          onClick: (O) => Fd(s, O)
                        }, h(s), 41, cE)
                      ]))), 128))
                    ])) : P("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-creator-apply", Qi("creator")])
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
                      value: k.tag
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
                          onClick: (O) => zd(s, O)
                        }, h(s), 41, vE)
                      ]))), 128))
                    ])) : P("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-tag-apply", Qi("tag")])
                    }, h(g(b)("library", "Apply tag")), 3)
                  ]),
                  l("label", null, [
                    ge(h(g(b)("library", "Format")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[24] || (u[24] = (s) => k.format = s),
                      name: "format",
                      onChange: u[25] || (u[25] = (s) => si(s))
                    }, [
                      l("option", gE, h(g(b)("library", "All formats")), 1),
                      (m(!0), _(ie, null, ke(E.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(us(s)), 9, bE))), 128))
                    ], 544), [
                      [Jt, k.format]
                    ])
                  ])
                ]),
                l("fieldset", mE, [
                  l("legend", null, h(g(b)("library", "Location")), 1),
                  nt.value.find((s) => s.key === "location")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ss("location"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: u[26] || (u[26] = ye((s) => ls("location"), ["prevent"]))
                  }, h(g(b)("library", "Clear Location")), 9, yE)) : P("", !0),
                  l("label", null, [
                    ge(h(g(b)("library", "Shelf")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[27] || (u[27] = (s) => k.shelf = s),
                      name: "shelf",
                      onChange: u[28] || (u[28] = (s) => si(s))
                    }, [
                      l("option", _E, h(g(b)("library", "All shelves")), 1),
                      (m(!0), _(ie, null, ke(C.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, wE))), 128))
                    ], 544), [
                      [Jt, k.shelf]
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
                      "aria-expanded": ut.value && zt.value.length > 0 ? "true" : "false",
                      onFocus: u[30] || (u[30] = (s) => ut.value = !0),
                      onKeydown: u[31] || (u[31] = at((s) => ut.value = !1, ["escape"]))
                    }, null, 40, kE), [
                      [ft, tt.value]
                    ]),
                    ut.value && zt.value.length > 0 ? (m(), _("ul", TE, [
                      (m(!0), _(ie, null, ke(zt.value, (s) => (m(), _("li", {
                        key: s,
                        role: "option"
                      }, [
                        l("button", {
                          type: "button",
                          class: "library-folder-suggestion",
                          onMousedown: u[32] || (u[32] = ye(() => {
                          }, ["prevent"])),
                          onClick: (O) => Ud(s, O)
                        }, h(s), 41, EE)
                      ]))), 128))
                    ])) : P("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-folder-apply", Qi("folder")])
                    }, h(g(b)("library", "Apply folder")), 3)
                  ])
                ]),
                l("fieldset", AE, [
                  l("legend", null, h(g(b)("library", "Review")), 1),
                  nt.value.find((s) => s.key === "review")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ss("review"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: u[33] || (u[33] = ye((s) => ls("review"), ["prevent"]))
                  }, h(g(b)("library", "Clear Review")), 9, xE)) : P("", !0),
                  l("label", null, [
                    ge(h(g(b)("library", "Scan status")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[34] || (u[34] = (s) => k.status = s),
                      name: "status",
                      onChange: u[35] || (u[35] = (s) => si(s))
                    }, [
                      l("option", OE, h(g(b)("library", "All scan statuses")), 1),
                      (m(!0), _(ie, null, ke(D.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, NE))), 128))
                    ], 544), [
                      [Jt, k.status]
                    ])
                  ]),
                  l("label", null, [
                    ge(h(g(b)("library", "Workflow status")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[36] || (u[36] = (s) => k.workflowStatus = s),
                      name: "workflowStatus",
                      onChange: u[37] || (u[37] = (s) => si(s))
                    }, [
                      l("option", LE, h(g(b)("library", "All workflow statuses")), 1),
                      (m(!0), _(ie, null, ke(M.value, (s) => (m(), _("option", {
                        key: s,
                        value: s
                      }, h(s), 9, RE))), 128))
                    ], 544), [
                      [Jt, k.workflowStatus]
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
                      value: k.subject
                    }, null, 8, FE),
                    oi("subject") ? (m(), _("small", DE, h(Ai("subject")), 1)) : P("", !0),
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
                          onClick: (O) => Bd(s, O)
                        }, h(s), 41, zE)
                      ]))), 128))
                    ])) : P("", !0),
                    l("button", {
                      type: "button",
                      class: be(["button secondary library-subject-apply", Qi("subject")]),
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
                      value: k.classification
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
                          onClick: (O) => Md(s, O)
                        }, h(s), 41, KE)
                      ]))), 128))
                    ])) : P("", !0),
                    l("button", {
                      type: "submit",
                      class: be(["button secondary library-classification-apply", Qi("classification")])
                    }, h(g(b)("library", "Apply classification")), 3)
                  ]),
                  l("label", null, [
                    ge(h(g(b)("library", "Suggested updates")), 1),
                    Ie(l("select", {
                      "onUpdate:modelValue": u[46] || (u[46] = (s) => k.scannerConflicts = s),
                      name: "scannerConflicts",
                      onChange: u[47] || (u[47] = (s) => si(s))
                    }, [
                      l("option", GE, h(g(b)("library", "All metadata")), 1),
                      l("option", qE, h(g(b)("library", "Suggested updates")), 1)
                    ], 544), [
                      [Jt, k.scannerConflicts]
                    ])
                  ])
                ]),
                l("fieldset", WE, [
                  l("legend", null, h(g(b)("library", "Personal / display")), 1),
                  nt.value.find((s) => s.key === "personal")?.chips.length ? (m(), _("a", {
                    key: 0,
                    href: ss("personal"),
                    class: "button tertiary library-filter-group-clear",
                    onClick: u[48] || (u[48] = ye((s) => ls("personal"), ["prevent"]))
                  }, h(g(b)("library", "Clear Personal / display")), 9, YE)) : P("", !0)
                ]),
                l("button", XE, h(g(b)("library", "Apply filters")), 1),
                re.value.length > 0 ? (m(), _("a", {
                  key: 2,
                  href: ba(),
                  class: "button secondary",
                  onClick: ye(ma, ["prevent"])
                }, h(g(b)("library", "Clear")), 9, ZE)) : P("", !0)
              ], 40, CT)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: En.value
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
                  href: Nr(s.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                  title: s.title,
                  onClick: ye((O) => Lr(s.key), ["prevent"])
                }, [
                  l("strong", null, [
                    ge(h(s.label), 1),
                    s.displayValue ? (m(), _(ie, { key: 0 }, [
                      ge(":")
                    ], 64)) : P("", !0)
                  ]),
                  s.displayValue ? (m(), _(ie, { key: 0 }, [
                    u[115] || (u[115] = ge(h(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, h(s.displayValue), 9, i2)
                  ], 64)) : P("", !0),
                  u[116] || (u[116] = ge()),
                  u[117] || (u[117] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, t2))), 128)),
                re.value.length > 0 ? (m(), _("a", {
                  key: 0,
                  href: ba(),
                  class: "library-active-filter-clear-all",
                  onClick: ye(ma, ["prevent"])
                }, h(g(b)("library", "Clear all")), 9, n2)) : P("", !0)
              ], 8, e2)) : P("", !0),
              aa.value ? (m(), _("section", a2, [
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
                  onSubmit: ye(Rt, ["prevent"])
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
                      "onUpdate:modelValue": u[49] || (u[49] = (s) => k.q = s),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ft, k.q]
                    ])
                  ]),
                  l("button", f2, h(g(b)("library", "Apply")), 1)
                ], 40, u2),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Lt.loading ? "true" : "false"
                }, [
                  Lt.loading ? (m(), _("span", h2, h(g(b)("library", "Loading review queue…")), 1)) : P("", !0)
                ], 8, p2),
                Lt.error ? (m(), _("p", v2, h(Lt.error), 1)) : P("", !0),
                Fn.value.enabled ? (m(), _("section", g2, [
                  l("div", b2, [
                    l("p", m2, h(g(b)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(b)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, h(g(b)("library", "Review next suggestion")), 9, y2)
                  ]),
                  Fn.value.item ? (m(), _("article", _2, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", w2, h(Fn.value.item.title), 1)
                      ]),
                      l("span", S2, [
                        l("bdi", C2, h(Fn.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", k2, [
                      (m(!0), _(ie, null, ke(Fn.value.fields, (s) => (m(), _("article", {
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
                          action: Fn.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: At.value
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
                        href: Fn.value.item.detailsUrl
                      }, h(g(b)("library", "Maintenance")), 9, F2),
                      l("a", {
                        class: "button secondary",
                        href: Fn.value.skipUrl
                      }, h(g(b)("library", "Skip to next suggestion")), 9, D2)
                    ])
                  ])) : P("", !0)
                ])) : P("", !0),
                y.value.length === 0 && !Lt.loading && !Lt.error ? (m(), _("div", M2, [
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
                          onClick: (O) => ji(s, O)
                        }, [
                          l("bdi", B2, h(s.title), 1)
                        ], 8, j2)
                      ]),
                      s.creators ? (m(), _("p", H2, [
                        l("bdi", V2, h(s.creators), 1)
                      ])) : P("", !0),
                      s.scanError ? (m(), _("p", K2, [
                        l("bdi", G2, h(s.scanError), 1)
                      ])) : P("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (O) => ji(s, O)
                      }, h(g(b)("library", "Details")), 9, q2),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (O) => On(s, O)
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
                    z.value.total > 0 ? (m(), _("span", J2, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : P("", !0)
                  ]),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, h(g(b)("library", "Next")), 9, Q2)) : (m(), _("span", eA, h(g(b)("library", "Next")), 1))
                ], 8, Y2)) : P("", !0)
              ])) : ra.value ? (m(), _("main", tA, [
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
                      href: Nr(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: ye((O) => Lr(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        ge(h(s.label), 1),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          ge(":")
                        ], 64)) : P("", !0)
                      ]),
                      s.displayValue ? (m(), _(ie, { key: 0 }, [
                        u[119] || (u[119] = ge(h(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, h(s.displayValue), 9, lA)
                      ], 64)) : P("", !0),
                      u[120] || (u[120] = ge()),
                      u[121] || (u[121] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, sA))), 128))
                  ], 8, oA),
                  l("p", cA, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: Ot.value
                    }, h(g(b)("library", "View filtered catalogue")), 9, uA),
                    l("a", {
                      class: "button secondary",
                      href: ba(),
                      onClick: ye(ma, ["prevent"])
                    }, h(g(b)("library", "Clear all")), 9, dA)
                  ])
                ], 8, rA)) : P("", !0),
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
                  Zo.value.continueReading.length ? (m(), _("div", gA, [
                    (m(!0), _(ie, null, ke(Zo.value.continueReading, (s) => (m(), _("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (O) => ji(s, O)
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
                            onClick: (O) => ji(s, O)
                          }, [
                            l("bdi", SA, h(s.title), 1)
                          ], 8, wA)
                        ]),
                        s.creators ? (m(), _("p", CA, [
                          l("bdi", kA, h(s.creators), 1)
                        ])) : P("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (O) => On(s, O)
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
                  Zo.value.recentlyAdded.length ? (m(), _("div", LA, [
                    (m(!0), _(ie, null, ke(Zo.value.recentlyAdded, (s) => (m(), _("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(b)("library", "Details")}: ${s.title}`,
                        onClick: (O) => ji(s, O)
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
                            onClick: (O) => ji(s, O)
                          }, [
                            l("bdi", DA, h(s.title), 1)
                          ], 8, FA)
                        ]),
                        s.creators ? (m(), _("p", MA, [
                          l("bdi", zA, h(s.creators), 1)
                        ])) : P("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl,
                          onClick: (O) => On(s, O)
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
                    l("a", { href: ri.value }, h(g(b)("library", "View all")), 9, KA)
                  ]),
                  wd.value.length ? (m(), _("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(b)("library", "Shelves")
                  }, [
                    (m(!0), _(ie, null, ke(wd.value, (s) => (m(), _("a", {
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
                ])) : P("", !0)
              ])) : xn.value ? (m(), _("main", ex, [
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
                      href: Nr(s.key),
                      class: "library-filter-chip",
                      "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                      onClick: ye((O) => Lr(s.key), ["prevent"])
                    }, [
                      l("strong", null, [
                        ge(h(s.label), 1),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          ge(":")
                        ], 64)) : P("", !0)
                      ]),
                      s.displayValue ? (m(), _(ie, { key: 0 }, [
                        u[122] || (u[122] = ge(h(" "), -1)),
                        l("span", {
                          class: "library-filter-chip-value",
                          title: s.value
                        }, h(s.displayValue), 9, lx)
                      ], 64)) : P("", !0),
                      u[123] || (u[123] = ge()),
                      u[124] || (u[124] = l("span", { "aria-hidden": "true" }, "×", -1))
                    ], 8, sx))), 128))
                  ], 8, ox),
                  l("p", cx, [
                    l("a", {
                      class: "button primary library-filter-callout-view",
                      href: Ot.value
                    }, h(g(b)("library", "View filtered catalogue")), 9, ux),
                    l("a", {
                      class: "button secondary",
                      href: ba(),
                      onClick: ye(ma, ["prevent"])
                    }, h(g(b)("library", "Clear all")), 9, dx)
                  ])
                ], 8, rx)) : P("", !0),
                Sd.value.length ? (m(), _("nav", {
                  key: 1,
                  "aria-label": g(b)("library", "Shelves")
                }, [
                  l("ul", px, [
                    (m(!0), _(ie, null, ke(Sd.value, (s) => (m(), je(_T, {
                      key: s.id,
                      node: s,
                      "children-url": Ql.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, fx)) : (m(), _("section", hx, [
                  l("h3", null, h(g(b)("library", "Shelves")), 1),
                  l("p", vx, h(g(b)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", gx, [
                    l("a", {
                      class: "button primary",
                      href: En.value
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
                class: be(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": Lt.loading }]),
                "aria-labelledby": "library-catalogue-heading",
                "aria-busy": Lt.loading ? "true" : "false"
              }, [
                l("header", _x, [
                  Ha.value ? (m(), _("p", wx, h(pr.value), 1)) : P("", !0),
                  l("h2", {
                    id: "library-catalogue-heading",
                    ref_key: "catalogueHeadingElement",
                    ref: la,
                    tabindex: "-1"
                  }, h(Vo.value), 513)
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
                    onSubmit: ye($d, ["prevent"])
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "folder",
                      value: k.folder
                    }, null, 8, Tx),
                    (m(!0), _(ie, null, ke(_d.value, (s) => (m(), _("input", {
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
                          ref: Ko,
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
                          "onUpdate:modelValue": u[51] || (u[51] = (s) => k.type = s),
                          name: "type",
                          onChange: u[52] || (u[52] = (s) => si(s))
                        }, [
                          l("option", Nx, h(g(b)("library", "All types")), 1),
                          (m(!0), _(ie, null, ke(L.value, (s) => (m(), _("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, h(s), 9, Lx))), 128))
                        ], 544), [
                          [Jt, k.type]
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
                          "aria-activedescendant": Vd("mobile", "publisher"),
                          "aria-expanded": F.value && Y.value.length > 0 ? "true" : "false",
                          onFocus: u[54] || (u[54] = (s) => Kd("publisher")),
                          onKeydown: u[55] || (u[55] = (s) => Gd(s, "publisher"))
                        }, null, 40, Px), [
                          [ft, J.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: k.publisher
                        }, null, 8, $x),
                        oi("publisher") ? (m(), _("small", Fx, h(Ai("publisher")), 1)) : P("", !0),
                        mt.value && F.value && Y.value.length > 0 ? (m(), _("ul", Dx, [
                          (m(!0), _(ie, null, ke(Y.value, (s, O) => (m(), _("li", {
                            id: vc("mobile", "publisher", O),
                            key: `mobile-publisher-${s}`,
                            role: "option",
                            "aria-selected": tn.publisher === O ? "true" : "false"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: u[56] || (u[56] = ye(() => {
                              }, ["prevent"])),
                              onClick: (W) => Dd(s, W)
                            }, h(s), 41, zx)
                          ], 8, Mx))), 128))
                        ])) : P("", !0)
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
                          value: k.publication
                        }, null, 8, Hx),
                        oi("publication") ? (m(), _("small", Vx, h(Ai("publication")), 1)) : P("", !0),
                        mt.value && Z.value && X.value.length > 0 ? (m(), _("ul", Kx, [
                          (m(!0), _(ie, null, ke(X.value, (s) => (m(), _("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: u[60] || (u[60] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Pd(s, O)
                            }, h(s), 41, Gx)
                          ]))), 128))
                        ])) : P("", !0)
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
                          value: k.year
                        }, null, 8, Xx),
                        oi("year") ? (m(), _("small", Zx, h(Ai("year")), 1)) : P("", !0),
                        mt.value && dt.value && vi.value.length > 0 ? (m(), _("ul", Jx, [
                          (m(!0), _(ie, null, ke(vi.value, (s) => (m(), _("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: u[64] || (u[64] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Hd(s, O)
                            }, h(s), 41, Qx)
                          ]))), 128))
                        ])) : P("", !0)
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
                          value: k.creator
                        }, null, 8, nO),
                        oi("creator") ? (m(), _("small", aO, h(Ai("creator")), 1)) : P("", !0),
                        mt.value && Se.value && Ke.value.length > 0 ? (m(), _("ul", rO, [
                          (m(!0), _(ie, null, ke(Ke.value, (s) => (m(), _("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: u[68] || (u[68] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Fd(s, O)
                            }, h(s), 41, oO)
                          ]))), 128))
                        ])) : P("", !0)
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Format")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[69] || (u[69] = (s) => k.format = s),
                          name: "format",
                          onChange: u[70] || (u[70] = (s) => si(s))
                        }, [
                          l("option", sO, h(g(b)("library", "All formats")), 1),
                          (m(!0), _(ie, null, ke(E.value, (s) => (m(), _("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, h(us(s)), 9, lO))), 128))
                        ], 544), [
                          [Jt, k.format]
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
                          value: k.subject
                        }, null, 8, fO),
                        oi("subject") ? (m(), _("small", pO, h(Ai("subject")), 1)) : P("", !0),
                        mt.value && R.value && j.value.length > 0 ? (m(), _("ul", hO, [
                          (m(!0), _(ie, null, ke(j.value, (s) => (m(), _("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: u[74] || (u[74] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Bd(s, O)
                            }, h(s), 41, vO)
                          ]))), 128))
                        ])) : P("", !0)
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
                          value: k.classification
                        }, null, 8, yO),
                        mt.value && pe.value && he.value.length > 0 ? (m(), _("ul", _O, [
                          (m(!0), _(ie, null, ke(he.value, (s) => (m(), _("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: u[78] || (u[78] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Md(s, O)
                            }, h(s), 41, wO)
                          ]))), 128))
                        ])) : P("", !0)
                      ])
                    ]),
                    l("fieldset", SO, [
                      l("legend", null, h(g(b)("library", "Location")), 1),
                      l("label", null, [
                        ge(h(g(b)("library", "Shelf")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[79] || (u[79] = (s) => k.shelf = s),
                          name: "shelf",
                          onChange: u[80] || (u[80] = (s) => si(s))
                        }, [
                          l("option", CO, h(g(b)("library", "All shelves")), 1),
                          (m(!0), _(ie, null, ke(C.value, (s) => (m(), _("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, h(s), 9, kO))), 128))
                        ], 544), [
                          [Jt, k.shelf]
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
                          "aria-expanded": ut.value && zt.value.length > 0 ? "true" : "false",
                          onFocus: u[82] || (u[82] = (s) => ut.value = !0),
                          onKeydown: u[83] || (u[83] = at((s) => ut.value = !1, ["escape"]))
                        }, null, 40, AO), [
                          [ft, tt.value]
                        ]),
                        mt.value && ut.value && zt.value.length > 0 ? (m(), _("ul", xO, [
                          (m(!0), _(ie, null, ke(zt.value, (s) => (m(), _("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: u[84] || (u[84] = ye(() => {
                              }, ["prevent"])),
                              onClick: (O) => Ud(s, O)
                            }, h(s), 41, OO)
                          ]))), 128))
                        ])) : P("", !0)
                      ])
                    ]),
                    l("fieldset", NO, [
                      l("legend", null, h(g(b)("library", "Review")), 1),
                      l("label", null, [
                        ge(h(g(b)("library", "Scan status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[85] || (u[85] = (s) => k.status = s),
                          name: "status",
                          onChange: u[86] || (u[86] = (s) => si(s))
                        }, [
                          l("option", LO, h(g(b)("library", "All scan statuses")), 1),
                          (m(!0), _(ie, null, ke(D.value, (s) => (m(), _("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, h(s), 9, RO))), 128))
                        ], 544), [
                          [Jt, k.status]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Workflow status")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[87] || (u[87] = (s) => k.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: u[88] || (u[88] = (s) => si(s))
                        }, [
                          l("option", IO, h(g(b)("library", "All workflow statuses")), 1),
                          (m(!0), _(ie, null, ke(M.value, (s) => (m(), _("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, h(s), 9, PO))), 128))
                        ], 544), [
                          [Jt, k.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Suggested updates")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[89] || (u[89] = (s) => k.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: u[90] || (u[90] = (s) => si(s))
                        }, [
                          l("option", $O, h(g(b)("library", "All metadata")), 1),
                          l("option", FO, h(g(b)("library", "Suggested updates")), 1)
                        ], 544), [
                          [Jt, k.scannerConflicts]
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
                          value: k.tag
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
                              onClick: (O) => zd(s, O)
                            }, h(s), 41, HO)
                          ]))), 128))
                        ])) : P("", !0),
                        l("button", {
                          type: "submit",
                          class: be(["button secondary library-tag-apply", Qi("tag")])
                        }, h(g(b)("library", "Apply tag")), 3)
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "Sort")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[95] || (u[95] = (s) => k.sort = s),
                          name: "sort",
                          onChange: Rt
                        }, [
                          l("option", VO, h(g(b)("library", "Title")), 1),
                          l("option", KO, h(g(b)("library", "Date added")), 1),
                          l("option", GO, h(g(b)("library", "Publication date")), 1),
                          l("option", qO, h(g(b)("library", "Series")), 1),
                          l("option", WO, h(g(b)("library", "Recently opened")), 1),
                          l("option", YO, h(g(b)("library", "Format")), 1)
                        ], 544), [
                          [Jt, k.sort]
                        ])
                      ]),
                      l("label", null, [
                        ge(h(g(b)("library", "View")), 1),
                        Ie(l("select", {
                          "onUpdate:modelValue": u[96] || (u[96] = (s) => k.view = s),
                          name: "view",
                          onChange: Rt
                        }, [
                          l("option", XO, h(g(b)("library", "Compact")), 1),
                          l("option", ZO, h(g(b)("library", "Gallery")), 1),
                          l("option", JO, h(g(b)("library", "List")), 1),
                          l("option", QO, h(g(b)("library", "Shelf")), 1)
                        ], 544), [
                          [Jt, k.view]
                        ])
                      ])
                    ]),
                    l("div", e3, [
                      re.value.length > 0 ? (m(), _("a", {
                        key: 0,
                        href: ba(),
                        class: "button secondary library-mobile-filter-clear",
                        onClick: ye(ma, ["prevent"])
                      }, h(g(b)("library", "Clear all")), 9, t3)) : P("", !0),
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
                    onSubmit: ye(Rt, ["prevent"])
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
                        "onUpdate:modelValue": u[97] || (u[97] = (s) => k.sort = s),
                        name: "sort",
                        onChange: Rt
                      }, [
                        l("option", s3, h(g(b)("library", "Title")), 1),
                        l("option", l3, h(g(b)("library", "Date added")), 1),
                        l("option", c3, h(g(b)("library", "Publication date")), 1),
                        l("option", u3, h(g(b)("library", "Series")), 1),
                        l("option", d3, h(g(b)("library", "Recently opened")), 1),
                        l("option", f3, h(g(b)("library", "Format")), 1)
                      ], 544), [
                        [Jt, k.sort]
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
                        class: be({ active: xt.value === "compact" }),
                        "aria-pressed": xt.value === "compact" ? "true" : "false",
                        onClick: u[98] || (u[98] = (s) => cs("compact"))
                      }, h(g(b)("library", "Compact")), 11, h3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: be({ active: xt.value === "gallery" }),
                        "aria-pressed": xt.value === "gallery" ? "true" : "false",
                        onClick: u[99] || (u[99] = (s) => cs("gallery"))
                      }, h(g(b)("library", "Gallery")), 11, v3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: be({ active: xt.value === "list" }),
                        "aria-pressed": xt.value === "list" ? "true" : "false",
                        onClick: u[100] || (u[100] = (s) => cs("list"))
                      }, h(g(b)("library", "List")), 11, g3),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: be({ active: xt.value === "shelf" }),
                        "aria-pressed": xt.value === "shelf" ? "true" : "false",
                        onClick: u[101] || (u[101] = (s) => cs("shelf"))
                      }, h(g(b)("library", "Shelf")), 11, b3)
                    ], 8, p3)
                  ], 40, a3),
                  l("section", m3, [
                    l("h3", {
                      title: g(b)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, h(g(b)("library", "Collections")), 9, y3),
                    l("form", {
                      method: "post",
                      action: oc.value,
                      class: "library-saved-collection-save-form",
                      title: mc.value ? "" : g(b)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: At.value
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
                    ], 8, _3),
                    br.value.length > 0 ? (m(), _("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(b)("library", "Saved custom collections")
                    }, [
                      (m(!0), _(ie, null, ke(br.value, (s) => (m(), _("article", {
                        key: s.id,
                        class: "library-saved-collection-card"
                      }, [
                        l("a", {
                          class: "library-saved-collection-link",
                          href: ub(s.filters)
                        }, [
                          l("strong", null, h(s.name), 1),
                          l("span", A3, h(s.countPending ? "—" : g(ui)("library", "%n item", "%n items", Number(s.count || 0))), 1)
                        ], 8, E3),
                        l("form", {
                          method: "post",
                          action: db(s.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: At.value
                          }, null, 8, O3),
                          l("button", N3, h(g(b)("library", "Delete")), 1)
                        ], 8, x3)
                      ]))), 128))
                    ], 8, T3)) : P("", !0)
                  ]),
                  xi.value.length > 0 ? (m(), _("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(b)("library", "Batch actions for selected publications")
                  }, [
                    l("summary", R3, [
                      u[125] || (u[125] = l("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      l("span", {
                        class: "library-workspace-panel-title",
                        title: g(b)("library", "Batch actions for selected publications")
                      }, h(g(b)("library", "Batch actions")), 9, I3),
                      l("small", P3, h(g(b)("library", "Batch actions for selected publications")), 1),
                      l("b", $3, h(g(ui)("library", "%n publication selected", "%n publications selected", xi.value.length)), 1)
                    ]),
                    l("p", F3, h(g(ui)("library", "%n publication selected", "%n publications selected", xi.value.length)), 1),
                    l("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Ng
                    }, [
                      l("form", {
                        method: "post",
                        action: nc.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: At.value
                        }, null, 8, M3),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, z3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(b)("library", "Applies only to the selected publications.")
                        }, h(g(b)("library", "Apply")), 9, U3)
                      ], 8, D3),
                      l("form", {
                        method: "post",
                        action: ac.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: At.value
                        }, null, 8, B3),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(b)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, H3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Removes the tag only from the selected publications.")
                        }, h(g(b)("library", "Remove")), 9, V3)
                      ], 8, j3),
                      l("form", {
                        method: "post",
                        action: rc.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: At.value
                        }, null, 8, G3),
                        (m(!0), _(ie, null, ke(Xo.value, (s) => (m(), _("input", {
                          key: `reset-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, q3))), 128)),
                        u[126] || (u[126] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, h(g(b)("library", "Reset metadata")), 9, W3)
                      ], 8, K3),
                      l("form", {
                        method: "post",
                        action: zi.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: At.value
                        }, null, 8, X3),
                        (m(!0), _(ie, null, ke(Xo.value, (s) => (m(), _("input", {
                          key: `edit-preview-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, Z3))), 128)),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Field")), 1),
                          l("select", J3, [
                            l("option", Q3, h(g(b)("library", "Publication type")), 1),
                            l("option", eN, h(g(b)("library", "Subtitle")), 1),
                            l("option", tN, h(g(b)("library", "Creators")), 1),
                            l("option", iN, h(g(b)("library", "Series / periodical")), 1),
                            l("option", nN, h(g(b)("library", "Publication date")), 1),
                            l("option", aN, h(g(b)("library", "Language")), 1),
                            l("option", rN, h(g(b)("library", "Publisher")), 1),
                            l("option", oN, h(g(b)("library", "Subjects")), 1),
                            l("option", sN, h(g(b)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, h(g(b)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(b)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, lN)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Preview first, then apply from the review page.")
                        }, h(g(b)("library", "Preview edit")), 9, cN)
                      ], 8, Y3),
                      l("form", {
                        method: "post",
                        action: Bo.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: At.value
                        }, null, 8, dN),
                        (m(!0), _(ie, null, ke(Xo.value, (s) => (m(), _("input", {
                          key: `cover-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, fN))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(b)("library", "Batch actions for selected publications")
                        }, h(g(b)("library", "Fresh covers")), 9, pN)
                      ], 8, uN)
                    ], 32)
                  ], 8, L3)) : P("", !0)
                ], 8, n3),
                gr.value ? (m(), _("p", hN, h(gr.value), 1)) : P("", !0),
                Yo.value ? (m(), _("p", vN, h(Yo.value), 1)) : P("", !0),
                vr.value ? (m(), _("p", gN, h(vr.value), 1)) : P("", !0),
                l("div", bN, [
                  Lt.loading ? (m(), _("span", mN, h(g(b)("library", "Updating catalogue…")), 1)) : Lt.completed ? (m(), _("span", yN, h(g(ui)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(z.value.total || 0))), 1)) : P("", !0)
                ]),
                Ha.value ? (m(), _("section", _N, [
                  l("p", wN, h(pr.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: Rn.value ? g(b)("library", "Items by this creator, sorted by publication context when available.") : fr.value ? g(b)("library", "Items from this publication year, sorted by publication date when available.") : g(b)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, h(Ho.value), 9, SN),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(b)("library", "Discovery summary")
                  }, [
                    l("span", null, h(g(ui)("library", "%n item", "%n items", z.value.total)), 1),
                    N.value?.earliestYear && N.value?.latestYear ? (m(), _("span", kN, h(N.value.earliestYear) + "–" + h(N.value.latestYear), 1)) : P("", !0),
                    N.value?.datedCount ? (m(), _("span", TN, h(N.value.datedCount) + " " + h(g(b)("library", "dated")), 1)) : P("", !0),
                    N.value?.undatedCount > 0 ? (m(), _("span", EN, h(N.value.undatedCount) + " " + h(g(b)("library", "undated")), 1)) : P("", !0)
                  ], 8, CN),
                  Ei.value && N.value ? (m(), _("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(b)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, h(g(b)("library", "Publication contents")), 1),
                    l("span", null, h(g(ui)("library", "%n item", "%n items", N.value.itemCount)), 1),
                    N.value.earliestYear && N.value.latestYear ? (m(), _("span", xN, h(N.value.earliestYear) + "–" + h(N.value.latestYear), 1)) : P("", !0),
                    l("span", null, h(N.value.datedCount) + " " + h(g(b)("library", "with issue/date coverage")), 1),
                    N.value.undatedCount > 0 ? (m(), _("span", ON, h(N.value.undatedCount) + " " + h(g(b)("library", "without dates yet")), 1)) : P("", !0),
                    l("span", null, h(g(b)("library", "read-only grouping")), 1)
                  ], 8, AN)) : P("", !0),
                  Ei.value && N.value?.issueGroups?.length ? (m(), _("section", NN, [
                    l("div", null, [
                      l("p", LN, h(g(b)("library", "Issue order")), 1),
                      l("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(b)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, h(g(b)("library", "Read-only issue/date grouping")), 9, RN)
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
                      ], 8, PN))), 128))
                    ], 8, IN),
                    N.value.gapRanges?.length ? (m(), _("p", $N, h(g(b)("library", "Gap")) + ": " + h(N.value.gapRanges.join(", ")), 1)) : P("", !0),
                    (m(!0), _(ie, null, ke(N.value.issueGroups, (s) => (m(), _("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, h(s.label), 1),
                      l("ol", null, [
                        (m(!0), _(ie, null, ke(s.items, (O, W) => (m(), _("li", {
                          key: O.itemId
                        }, [
                          l("span", FN, h(O.issueLabel), 1),
                          l("a", {
                            href: O.detailsUrl || "#"
                          }, h(O.title), 9, DN),
                          l("small", null, [
                            ge(h(O.publicationType), 1),
                            O.publicationDate ? (m(), _(ie, { key: 0 }, [
                              ge(" · " + h(O.publicationDate), 1)
                            ], 64)) : P("", !0)
                          ]),
                          l("small", MN, [
                            W > 0 ? (m(), _(ie, { key: 0 }, [
                              ge(h(g(b)("library", "Previous issue")), 1)
                            ], 64)) : P("", !0),
                            W > 0 && W < s.items.length - 1 ? (m(), _(ie, { key: 1 }, [
                              ge(" · ")
                            ], 64)) : P("", !0),
                            W < s.items.length - 1 ? (m(), _(ie, { key: 2 }, [
                              ge(h(g(b)("library", "Next issue")), 1)
                            ], 64)) : P("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    N.value.unknownIssueItems?.length ? (m(), _("details", zN, [
                      l("summary", {
                        title: g(b)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, h(g(b)("library", "Unknown issue/date")) + " · " + h(N.value.unknownIssueItems.length), 9, UN)
                    ])) : P("", !0)
                  ])) : P("", !0),
                  l("p", null, [
                    l("a", {
                      href: gt.value,
                      class: "button secondary library-discovery-back-link"
                    }, h(g(b)("library", "Back to full catalogue")), 9, jN)
                  ])
                ])) : P("", !0),
                l("div", BN, [
                  l("p", HN, [
                    ge(h(g(b)("library", "Showing")) + " " + h(z.value.from) + "–" + h(z.value.to) + " " + h(g(b)("library", "of")) + " " + h(z.value.total) + " " + h(g(b)("library", "catalogue items")), 1),
                    re.value.length > 0 ? (m(), _("span", VN, [
                      u[127] || (u[127] = ge(" · ", -1)),
                      l("a", {
                        href: ba(),
                        onClick: ye(ma, ["prevent"])
                      }, h(g(b)("library", "Clear all filters")), 9, KN)
                    ])) : P("", !0)
                  ]),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(b)("library", "Catalogue pagination")
                  }, [
                    l("span", qN, [
                      ge(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                      z.value.total > 0 ? (m(), _("span", WN, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : P("", !0)
                    ]),
                    z.value.previousUrl ? (m(), _("a", {
                      key: 0,
                      href: z.value.previousUrl
                    }, h(g(b)("library", "Previous")), 9, YN)) : (m(), _("span", XN, h(g(b)("library", "Previous")), 1)),
                    z.value.nextUrl ? (m(), _("a", {
                      key: 2,
                      href: z.value.nextUrl
                    }, h(g(b)("library", "Next")), 9, ZN)) : (m(), _("span", JN, h(g(b)("library", "Next")), 1))
                  ], 8, GN)
                ]),
                y.value.length === 0 ? (m(), _("div", {
                  key: 4,
                  class: be(["library-empty-content", { "library-first-run-guidance": In.value || Ui.value, "library-filter-empty-state": Pn.value && !In.value && !Ui.value }]),
                  role: "status"
                }, [
                  In.value ? (m(), _(ie, { key: 0 }, [
                    l("h3", {
                      title: g(b)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, h(g(b)("library", "Start with one Library root")), 9, QN),
                    l("p", eL, [
                      l("a", {
                        href: En.value,
                        class: "button primary"
                      }, h(g(b)("library", "Add a Library root")), 9, tL),
                      l("span", iL, h(g(b)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Ui.value ? (m(), _(ie, { key: 1 }, [
                    l("h3", {
                      title: g(b)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, h(g(b)("library", "No enabled Library roots")), 9, nL),
                    l("p", aL, [
                      l("a", {
                        href: En.value,
                        class: "button primary"
                      }, h(g(b)("library", "Open Library settings")), 9, rL)
                    ])
                  ], 64)) : Pn.value ? (m(), _(ie, { key: 2 }, [
                    l("h3", {
                      title: g(b)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, h(g(b)("library", "No items match these filters")), 9, oL),
                    re.value.length > 0 ? (m(), _("nav", {
                      key: 0,
                      class: "library-empty-filter-chips",
                      "aria-label": g(b)("library", "Remove active filters")
                    }, [
                      (m(!0), _(ie, null, ke(re.value, (s) => (m(), _("a", {
                        key: `empty-${s.key}`,
                        href: Nr(s.key),
                        class: "library-filter-chip",
                        "aria-label": `${g(b)("library", "Remove filter")}: ${s.label}`,
                        onClick: ye((O) => Lr(s.key), ["prevent"])
                      }, [
                        l("strong", null, [
                          ge(h(s.label), 1),
                          s.displayValue ? (m(), _(ie, { key: 0 }, [
                            ge(":")
                          ], 64)) : P("", !0)
                        ]),
                        s.displayValue ? (m(), _(ie, { key: 0 }, [
                          u[128] || (u[128] = ge(h(" "), -1)),
                          l("span", {
                            class: "library-filter-chip-value",
                            title: s.value
                          }, h(s.displayValue), 9, cL)
                        ], 64)) : P("", !0),
                        u[129] || (u[129] = ge()),
                        u[130] || (u[130] = l("span", { "aria-hidden": "true" }, "×", -1))
                      ], 8, lL))), 128))
                    ], 8, sL)) : P("", !0),
                    yt.value ? (m(), _("p", uL, h(g(b)("library", "Try removing {filter}.", { filter: yt.value.displayValue ? `${yt.value.label}: ${yt.value.displayValue}` : yt.value.label })), 1)) : P("", !0),
                    l("p", dL, [
                      Nt.value ? (m(), _("a", {
                        key: 0,
                        href: rb(),
                        class: "button secondary library-empty-clear-search",
                        onClick: u[102] || (u[102] = ye((s) => Lr("q"), ["prevent"]))
                      }, h(g(b)("library", "Clear search")), 9, fL)) : P("", !0),
                      re.value.length > 0 ? (m(), _("a", {
                        key: 1,
                        href: ba(),
                        class: "button primary",
                        onClick: ye(ma, ["prevent"])
                      }, h(g(b)("library", "Clear all filters")), 9, pL)) : P("", !0)
                    ])
                  ], 64)) : (m(), _(ie, { key: 3 }, [
                    l("h3", {
                      title: g(b)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, h(g(b)("library", "No catalogue items yet")), 9, hL),
                    l("p", vL, [
                      l("a", {
                        href: En.value,
                        class: "button primary"
                      }, h(g(b)("library", "Run a scan from settings")), 9, gL)
                    ])
                  ], 64))
                ], 2)) : P("", !0),
                y.value.length > 0 ? (m(), _("label", bL, [
                  l("input", {
                    type: "checkbox",
                    checked: xi.value.length === y.value.length,
                    onChange: xg
                  }, null, 40, mL),
                  ge(" " + h(g(b)("library", "Select all publications on this page")), 1)
                ])) : P("", !0),
                y.value.length > 0 && xt.value === "list" ? (m(), _("ul", yL, [
                  (m(!0), _(ie, null, ke(y.value, (s) => (m(), _("li", {
                    key: s.id,
                    class: be(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Jo.value.has(Number(s.id)), "library-catalogue-list-row--open": $n.value && Number(ca.value) === Number(s.id) }])
                  }, [
                    l("label", _L, [
                      l("input", {
                        type: "checkbox",
                        checked: Jo.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (O) => Cd(s.id, O.currentTarget.checked)
                      }, null, 40, wL)
                    ]),
                    l("div", SL, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (O) => ji(s, O)
                      }, [
                        l("bdi", kL, h(s.title), 1)
                      ], 8, CL),
                      s.creators ? (m(), _("span", TL, [
                        l("bdi", EL, h(s.creators), 1)
                      ])) : P("", !0)
                    ]),
                    l("dl", AL, [
                      s.publication ? (m(), _("div", xL, [
                        l("dt", null, h(g(b)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", OL, h(s.publication), 1)
                        ])
                      ])) : P("", !0),
                      s.publicationDate ? (m(), _("div", NL, [
                        l("dt", null, h(g(b)("library", "Publication date")), 1),
                        l("dd", null, h(s.publicationDate), 1)
                      ])) : P("", !0),
                      s.extension || s.publicationType ? (m(), _("div", LL, [
                        l("dt", null, h(g(b)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: be(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, h(s.extension ? us(s.extension) : s.publicationType), 11, RL)
                        ])
                      ])) : P("", !0),
                      s.shelf ? (m(), _("div", IL, [
                        l("dt", null, h(g(b)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", PL, h(s.shelf), 1)
                        ])
                      ])) : P("", !0)
                    ]),
                    l("div", $L, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl,
                        onClick: (O) => On(s, O)
                      }, h(g(b)("library", "Open")), 9, FL),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (O) => ji(s, O)
                      }, h(g(b)("library", "Details")), 9, DL)
                    ])
                  ], 2))), 128))
                ])) : y.value.length > 0 ? (m(), _("div", {
                  key: 7,
                  class: be(["library-cover-gallery", yr.value])
                }, [
                  (m(!0), _(ie, null, ke(y.value, (s) => (m(), _("article", {
                    key: s.id,
                    class: be(["library-cover-card", { "library-cover-card--cover-loaded": Rr(s) === "loaded", "library-cover-card--cover-error": Rr(s) === "error", "library-cover-card--selected": Jo.value.has(Number(s.id)), "library-cover-card--open": $n.value && Number(ca.value) === Number(s.id) }])
                  }, [
                    l("label", ML, [
                      l("input", {
                        type: "checkbox",
                        checked: Jo.value.has(Number(s.id)),
                        "aria-label": `${g(b)("library", "Select publication")}: ${s.title}`,
                        onChange: (O) => Cd(s.id, O.currentTarget.checked)
                      }, null, 40, zL)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": $n.value && Number(ca.value) === Number(s.id) ? "true" : "false",
                      onClick: (O) => ji(s, O)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, h(g(b)("library", "Details")), 9, jL),
                      l("span", BL, [
                        Rr(s) === "loading" ? (m(), _("span", HL)) : P("", !0),
                        l("img", {
                          class: be(["library-cover-image", { "library-cover-image--loaded": Rr(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (O) => fb(s),
                          onError: (O) => pb(s)
                        }, null, 42, VL),
                        Rr(s) === "error" ? (m(), _("span", KL, h(g(b)("library", "Cover unavailable")), 1)) : P("", !0)
                      ])
                    ], 8, UL),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: ye((O) => ef(s, O), ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: At.value
                      }, null, 8, qL),
                      u[131] || (u[131] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("input", {
                        type: "hidden",
                        name: "starred",
                        value: s.starred ? "0" : "1"
                      }, null, 8, WL),
                      l("button", {
                        type: "submit",
                        class: be(["library-cover-star-button", { "library-cover-star-button--starred": s.starred }]),
                        "aria-pressed": s.starred ? "true" : "false",
                        title: s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-label": s.starred ? g(b)("library", "Unstar this publication") : g(b)("library", "Star this publication"),
                        "aria-busy": Ir[s.id] ? "true" : void 0,
                        disabled: Ir[s.id],
                        onClick: ye((O) => ef(s, O), ["prevent"])
                      }, h(s.starred ? "★" : "☆"), 11, YL),
                      Pr[s.id] ? (m(), _("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, h(Pr[s.id]), 9, XL)) : P("", !0)
                    ], 40, GL),
                    l("div", ZL, [
                      l("div", JL, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (O) => ji(s, O)
                          }, [
                            l("bdi", tR, h(s.title), 1)
                          ], 8, eR)
                        ], 8, QL),
                        s.creators ? (m(), _("p", iR, [
                          l("bdi", nR, h(s.creators), 1)
                        ])) : P("", !0),
                        Zd(s) ? (m(), _("p", aR, [
                          l("bdi", rR, h(Zd(s)), 1)
                        ])) : P("", !0)
                      ])
                    ])
                  ], 2))), 128))
                ], 2)) : P("", !0),
                y.value.length > 0 ? (m(), _("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(b)("library", "Catalogue pagination")
                }, [
                  l("span", sR, [
                    ge(h(g(b)("library", "Page")) + " " + h(z.value.page), 1),
                    z.value.total > 0 ? (m(), _("span", lR, " · " + h(z.value.from) + "–" + h(z.value.to), 1)) : P("", !0)
                  ]),
                  z.value.previousUrl ? (m(), _("a", {
                    key: 0,
                    href: z.value.previousUrl
                  }, h(g(b)("library", "Previous")), 9, cR)) : (m(), _("span", uR, h(g(b)("library", "Previous")), 1)),
                  z.value.nextUrl ? (m(), _("a", {
                    key: 2,
                    href: z.value.nextUrl
                  }, h(g(b)("library", "Next")), 9, dR)) : (m(), _("span", fR, h(g(b)("library", "Next")), 1))
                ], 8, oR)) : P("", !0)
              ], 10, yx))
            ], 8, QE)
          ]),
          _: 1
        }),
        xe(g(Gk), {
          ref_key: "sidebarComponent",
          ref: da,
          class: "library-native-item-sidebar",
          open: $n.value,
          "no-toggle": "",
          loading: Zt.loading,
          name: Ce.value?.title || g(b)("library", "Publication details"),
          subname: Ce.value?.creators || "",
          role: fa.value ? "dialog" : void 0,
          "aria-modal": fa.value ? "true" : void 0,
          "aria-labelledby": fa.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": fa.value && Ce.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Rd,
          onClosed: jg,
          onClose: Tr
        }, {
          default: Fe(() => [
            l("div", pR, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: kd,
                class: "hidden-visually",
                tabindex: "-1"
              }, h(Ce.value?.title || g(b)("library", "Publication details")), 513),
              Zt.loading && !Ce.value ? (m(), _("p", hR, h(g(b)("library", "Loading publication details…")), 1)) : Zt.error ? (m(), _("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Zt.missing ? "status" : "alert"
              }, [
                l("p", null, h(Zt.error), 1),
                Zt.missing ? P("", !0) : (m(), _("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: u[103] || (u[103] = (s) => kr(ca.value, { historyMode: "none" }))
                }, h(g(b)("library", "Try again")), 1))
              ], 8, vR)) : Ce.value ? (m(), _(ie, { key: 2 }, [
                l("p", gR, h(g(b)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", bR, [
                  l("span", mR, h(g(b)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: Ce.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, yR),
                  l("div", _R, [
                    l("p", wR, [
                      l("bdi", SR, h(Ce.value.publicationType || g(b)("library", "Publication")), 1),
                      Ce.value.extension ? (m(), _("span", CR, [
                        u[132] || (u[132] = ge(" · ", -1)),
                        l("bdi", kR, h(us(Ce.value.extension)), 1)
                      ])) : P("", !0)
                    ]),
                    l("div", TR, [
                      l("a", {
                        class: "button primary",
                        href: Ce.value.openUrl,
                        onClick: u[104] || (u[104] = (s) => On(Ce.value, s))
                      }, h(g(b)("library", "Open")), 9, ER),
                      xe(g(fd), {
                        "aria-label": g(b)("library", "File and maintenance actions")
                      }, {
                        default: Fe(() => [
                          xe(g(nu), {
                            href: Ce.value.filesUrl
                          }, {
                            default: Fe(() => [
                              ge(h(g(b)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          xe(g(nu), {
                            href: Ce.value.downloadUrl
                          }, {
                            default: Fe(() => [
                              ge(h(g(b)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          xe(g(nu), {
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
                    class: be({ active: ua.value === s.key }),
                    "aria-current": ua.value === s.key ? "page" : void 0,
                    onClick: (O) => ua.value = s.key
                  }, h(g(b)("library", s.label)), 11, xR)), 64))
                ], 8, AR),
                ua.value === "overview" ? (m(), _("section", OR, [
                  l("h3", NR, h(g(b)("library", "Overview")), 1),
                  Td.value ? (m(), _("p", LR, [
                    l("bdi", RR, h(Td.value), 1)
                  ])) : P("", !0),
                  l("dl", IR, [
                    Ce.value.publication ? (m(), _("div", PR, [
                      l("dt", null, h(g(b)("library", "Series")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: is("publication", Ce.value.publication),
                          title: g(b)("library", "Filter catalogue by this series"),
                          onClick: u[105] || (u[105] = (s) => ns(s, "publication", Ce.value.publication))
                        }, [
                          l("bdi", FR, h(Ce.value.publication), 1)
                        ], 8, $R)
                      ])
                    ])) : P("", !0),
                    Ce.value.publicationDate ? (m(), _("div", DR, [
                      l("dt", null, h(g(b)("library", "Date")), 1),
                      l("dd", null, [
                        pa.value ? (m(), _("a", {
                          key: 0,
                          class: "library-detail-facet-link",
                          href: is("year", pa.value),
                          title: g(b)("library", "Filter catalogue by this publication year"),
                          onClick: u[106] || (u[106] = (s) => ns(s, "year", pa.value))
                        }, h(pa.value), 9, MR)) : P("", !0),
                        pa.value && Ce.value.publicationDate !== pa.value ? (m(), _("span", zR, " · ")) : P("", !0),
                        Ce.value.publicationDate !== pa.value ? (m(), _("span", UR, h(Ce.value.publicationDate), 1)) : P("", !0)
                      ])
                    ])) : P("", !0),
                    Ce.value.publisher ? (m(), _("div", jR, [
                      l("dt", null, h(g(b)("library", "Publisher")), 1),
                      l("dd", null, [
                        l("a", {
                          class: "library-detail-facet-link",
                          href: is("publisher", Ce.value.publisher),
                          title: g(b)("library", "Filter catalogue by this publisher"),
                          onClick: u[107] || (u[107] = (s) => ns(s, "publisher", Ce.value.publisher))
                        }, [
                          l("bdi", HR, h(Ce.value.publisher), 1)
                        ], 8, BR)
                      ])
                    ])) : P("", !0),
                    Ed.value.length ? (m(), _("div", VR, [
                      l("dt", null, h(g(b)("library", "Language")), 1),
                      l("dd", KR, [
                        (m(!0), _(ie, null, ke(Ed.value, (s) => (m(), _("a", {
                          key: s,
                          class: "library-detail-facet-link",
                          href: is("language", s),
                          title: g(b)("library", "Filter catalogue by this language"),
                          onClick: (O) => ns(O, "language", s)
                        }, [
                          l("bdi", qR, h(s), 1)
                        ], 8, GR))), 128))
                      ])
                    ])) : P("", !0),
                    Ce.value.shelf ? (m(), _("div", WR, [
                      l("dt", null, h(g(b)("library", "Shelf")), 1),
                      l("dd", null, h(Ce.value.shelf), 1)
                    ])) : P("", !0)
                  ])
                ])) : ua.value === "metadata" ? (m(), _("section", YR, [
                  l("h3", XR, h(g(b)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: ye(zg, ["prevent"])
                  }, [
                    l("label", null, [
                      ge(h(g(b)("library", "Title")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": u[108] || (u[108] = (s) => jt.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ft, jt.title]
                      ])
                    ]),
                    l("label", null, [
                      ge(h(g(b)("library", "Publication date")), 1),
                      Ie(l("input", {
                        "onUpdate:modelValue": u[109] || (u[109] = (s) => jt.publicationDate = s),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(b)("library", "e.g. 2026")
                      }, null, 8, ZR), [
                        [ft, jt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, h(g(b)("library", "Identifiers")), 1),
                      (m(!0), _(ie, null, ke(jt.identifiers, (s, O) => (m(), _("div", {
                        key: O,
                        class: "library-sidebar-identifier"
                      }, [
                        Ie(l("input", {
                          "onUpdate:modelValue": (W) => s.scheme = W,
                          "aria-label": g(b)("library", "Identifier type"),
                          placeholder: g(b)("library", "Identifier type")
                        }, null, 8, JR), [
                          [ft, s.scheme]
                        ]),
                        Ie(l("input", {
                          "onUpdate:modelValue": (W) => s.displayValue = W,
                          "aria-label": g(b)("library", "Identifier value")
                        }, null, 8, QR), [
                          [ft, s.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (W) => Mg(O)
                        }, h(g(b)("library", "Remove")), 9, e4)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Dg
                      }, h(g(b)("library", "Add identifier")), 1)
                    ]),
                    l("p", t4, h(g(b)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Oi.error ? (m(), _("p", i4, h(Oi.error), 1)) : Oi.saved ? (m(), _("p", n4, h(g(b)("library", "Metadata saved.")), 1)) : P("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Oi.saving
                    }, h(Oi.saving ? g(b)("library", "Saving…") : g(b)("library", "Save metadata")), 9, a4)
                  ], 32),
                  as(Ce.value).length ? (m(), _("section", r4, [
                    l("h4", o4, h(g(b)("library", "Scanner suggestions")), 1),
                    l("p", s4, h(g(b)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (m(!0), _(ie, null, ke(as(Ce.value), (s) => (m(), _("div", {
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
                  ])) : P("", !0)
                ])) : (m(), _("section", l4, [
                  l("h3", c4, h(g(b)("library", "Activity")), 1),
                  l("dl", u4, [
                    l("div", null, [
                      l("dt", null, h(g(b)("library", "Scan status")), 1),
                      l("dd", null, h(Ce.value.scanStatus || "—"), 1)
                    ]),
                    Ce.value.workflowStatus ? (m(), _("div", d4, [
                      l("dt", null, h(g(b)("library", "Workflow")), 1),
                      l("dd", null, h(Ce.value.workflowStatus), 1)
                    ])) : P("", !0),
                    Ce.value.metadataSource ? (m(), _("div", f4, [
                      l("dt", null, h(g(b)("library", "Metadata source")), 1),
                      l("dd", null, h(Ce.value.metadataSource), 1)
                    ])) : P("", !0),
                    Ce.value.cachedPath ? (m(), _("div", p4, [
                      l("dt", null, h(g(b)("library", "File")), 1),
                      l("dd", h4, [
                        Ce.value.openUrl ? (m(), _("a", {
                          key: 0,
                          href: Ce.value.openUrl,
                          onClick: u[110] || (u[110] = (s) => On(Ce.value, s))
                        }, [
                          l("bdi", g4, h(Ce.value.cachedPath), 1)
                        ], 8, v4)) : (m(), _("bdi", b4, h(Ce.value.cachedPath), 1))
                      ])
                    ])) : P("", !0)
                  ])
                ])),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(b)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !es.value,
                    onClick: u[111] || (u[111] = (s) => rs(es.value))
                  }, h(g(b)("library", "Previous item")), 9, y4),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !ts.value,
                    onClick: u[112] || (u[112] = (s) => rs(ts.value))
                  }, h(g(b)("library", "Next item")), 9, _4)
                ], 8, m4)
              ], 64)) : P("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function T4() {
  window.LibraryStartupWatchdog?.fail();
}
function E4(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = ed("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !E4(e))
    throw new Error("Library startup prerequisites are unavailable");
  const i = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Jy(k4, { state: i }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  T4(), console.error("[library] Vue startup failed", e);
}
