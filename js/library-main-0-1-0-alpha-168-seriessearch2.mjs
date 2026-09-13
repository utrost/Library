// @__NO_SIDE_EFFECTS__
function Rc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const He = {}, Ua = [], bn = () => {
}, ff = () => !1, zo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Uo = (e) => e.startsWith("onUpdate:"), ut = Object.assign, Ic = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, iv = Object.prototype.hasOwnProperty, We = (e, t) => iv.call(e, t), we = Array.isArray, Di = (e) => os(e) === "[object Map]", ha = (e) => os(e) === "[object Set]", yu = (e) => os(e) === "[object Date]", xe = (e) => typeof e == "function", et = (e) => typeof e == "string", On = (e) => typeof e == "symbol", qe = (e) => e !== null && typeof e == "object", hf = (e) => (qe(e) || xe(e)) && xe(e.then) && xe(e.catch), pf = Object.prototype.toString, os = (e) => pf.call(e), av = (e) => os(e).slice(8, -1), vf = (e) => os(e) === "[object Object]", Pc = (e) => et(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, kr = /* @__PURE__ */ Rc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, rv = /-\w/g, Mt = Bo(
  (e) => e.replace(rv, (t) => t.slice(1).toUpperCase())
), sv = /\B([A-Z])/g, gi = Bo(
  (e) => e.replace(sv, "-$1").toLowerCase()
), Ho = Bo((e) => e.charAt(0).toUpperCase() + e.slice(1)), vl = Bo(
  (e) => e ? `on${Ho(e)}` : ""
), St = (e, t) => !Object.is(e, t), Rs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, gf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, jo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ov = (e) => {
  const t = et(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let _u;
const Vo = () => _u || (_u = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ln(e) {
  if (we(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = et(i) ? dv(i) : ln(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (et(e) || qe(e))
    return e;
}
const lv = /;(?![^(]*\))/g, cv = /:([^]+)/, uv = /\/\*[^]*?\*\//g;
function dv(e) {
  const t = {};
  return e.replace(uv, "").split(lv).forEach((n) => {
    if (n) {
      const i = n.split(cv);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ee(e) {
  let t = "";
  if (et(e))
    t = e;
  else if (we(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ee(e[n]);
      i && (t += i + " ");
    }
  else if (qe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function $s(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !et(t) && (e.class = Ee(t)), n && (e.style = ln(n)), e;
}
const fv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", hv = /* @__PURE__ */ Rc(fv);
function mf(e) {
  return !!e || e === "";
}
function pv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = zi(e[i], t[i]);
  return n;
}
function wu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && zi(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function zi(e, t) {
  if (e === t) return !0;
  let n = yu(e), i = yu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = On(e), i = On(t), n || i)
    return e === t;
  if (n = we(e), i = we(t), n || i)
    return n && i ? pv(e, t) : !1;
  if (n = qe(e), i = qe(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Di(e), i = Di(t), n || i || (n = ha(e), i = ha(t), n || i))
      return n && i ? wu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !zi(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function vv(e, t) {
  return e.findIndex((n) => zi(n, t));
}
const bf = (e) => !!(e && e.__v_isRef === !0), p = (e) => et(e) ? e : e == null ? "" : we(e) || qe(e) && (e.toString === pf || !xe(e.toString)) ? bf(e) ? p(e.value) : JSON.stringify(e, yf, 2) : String(e), yf = (e, t) => bf(t) ? yf(e, t.value) : Di(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[gl(i, r) + " =>"] = a, n),
    {}
  )
} : ha(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => gl(n))
} : On(t) ? gl(t) : qe(t) && !we(t) && !vf(t) ? String(t) : t, gl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    On(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function gv(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Ct;
class mv {
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
function bv() {
  return Ct;
}
let Qe;
const ml = /* @__PURE__ */ new WeakSet();
class _f {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ct && (Ct.active ? Ct.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ml.has(this) && (ml.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Cu(this), Sf(this);
    const t = Qe, n = An;
    Qe = this, An = !0;
    try {
      return this.fn();
    } finally {
      Ef(this), Qe = t, An = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $c(t);
      this.deps = this.depsTail = void 0, Cu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ml.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ql(this) && this.run();
  }
  get dirty() {
    return Ql(this);
  }
}
let wf = 0, Or, Nr;
function Cf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Nr, Nr = e;
    return;
  }
  e.next = Or, Or = e;
}
function Dc() {
  wf++;
}
function Mc() {
  if (--wf > 0)
    return;
  if (Nr) {
    let t = Nr;
    for (Nr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Or; ) {
    let t = Or;
    for (Or = void 0; t; ) {
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
function Sf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ef(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), $c(i), yv(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Ql(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Tf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Tf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === jr) || (e.globalVersion = jr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ql(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Qe, i = An;
  Qe = e, An = !0;
  try {
    Sf(e);
    const a = e.fn(e._value);
    (t.version === 0 || St(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Qe = n, An = i, Ef(e), e.flags &= -3;
  }
}
function $c(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      $c(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function yv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let An = !0;
const Af = [];
function fi() {
  Af.push(An), An = !1;
}
function hi() {
  const e = Af.pop();
  An = e === void 0 ? !0 : e;
}
function Cu(e) {
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
let jr = 0;
class _v {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Go {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Qe || !An || Qe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Qe)
      n = this.activeLink = new _v(Qe, this), Qe.deps ? (n.prevDep = Qe.depsTail, Qe.depsTail.nextDep = n, Qe.depsTail = n) : Qe.deps = Qe.depsTail = n, kf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Qe.depsTail, n.nextDep = void 0, Qe.depsTail.nextDep = n, Qe.depsTail = n, Qe.deps === n && (Qe.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, jr++, this.notify(t);
  }
  notify(t) {
    Dc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Mc();
    }
  }
}
function kf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        kf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ec = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ Symbol(
  ""
), tc = /* @__PURE__ */ Symbol(
  ""
), Vr = /* @__PURE__ */ Symbol(
  ""
);
function It(e, t, n) {
  if (An && Qe) {
    let i = ec.get(e);
    i || ec.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Go()), a.map = i, a.key = n), a.track();
  }
}
function ri(e, t, n, i, a, r) {
  const s = ec.get(e);
  if (!s) {
    jr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Dc(), t === "clear")
    s.forEach(o);
  else {
    const l = we(e), d = l && Pc(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, _) => {
        (_ === "length" || _ === Vr || !On(_) && _ >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(Vr)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(ua)), Di(e) && o(s.get(tc)));
          break;
        case "delete":
          l || (o(s.get(ua)), Di(e) && o(s.get(tc)));
          break;
        case "set":
          Di(e) && o(s.get(ua));
          break;
      }
  }
  Mc();
}
function Ra(e) {
  const t = /* @__PURE__ */ Ge(e);
  return t === e ? t : (It(t, "iterate", Vr), /* @__PURE__ */ yn(e) ? t : t.map(Nn));
}
function Ko(e) {
  return It(e = /* @__PURE__ */ Ge(e), "iterate", Vr), e;
}
function Un(e, t) {
  return /* @__PURE__ */ pi(e) ? qa(/* @__PURE__ */ da(e) ? Nn(t) : t) : Nn(t);
}
const wv = {
  __proto__: null,
  [Symbol.iterator]() {
    return bl(this, Symbol.iterator, (e) => Un(this, e));
  },
  concat(...e) {
    return Ra(this).concat(
      ...e.map((t) => we(t) ? Ra(t) : t)
    );
  },
  entries() {
    return bl(this, "entries", (e) => (e[1] = Un(this, e[1]), e));
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
    return yl(this, "includes", e);
  },
  indexOf(...e) {
    return yl(this, "indexOf", e);
  },
  join(e) {
    return Ra(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return yl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Zn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return dr(this, "pop");
  },
  push(...e) {
    return dr(this, "push", e);
  },
  reduce(e, ...t) {
    return Su(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Su(this, "reduceRight", e, t);
  },
  shift() {
    return dr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Zn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return dr(this, "splice", e);
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
    return dr(this, "unshift", e);
  },
  values() {
    return bl(this, "values", (e) => Un(this, e));
  }
};
function bl(e, t, n) {
  const i = Ko(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ yn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const Cv = Array.prototype;
function Zn(e, t, n, i, a, r) {
  const s = Ko(e), o = s !== e && !/* @__PURE__ */ yn(e), l = s[t];
  if (l !== Cv[t]) {
    const h = l.apply(e, r);
    return o ? Nn(h) : h;
  }
  let d = n;
  s !== e && (o ? d = function(h, _) {
    return n.call(this, Un(e, h), _, e);
  } : n.length > 2 && (d = function(h, _) {
    return n.call(this, h, _, e);
  }));
  const u = l.call(s, d, i);
  return o && a ? a(u) : u;
}
function Su(e, t, n, i) {
  const a = Ko(e), r = a !== e && !/* @__PURE__ */ yn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = Un(e, d)), n.call(this, d, Un(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Un(e, l) : l;
}
function yl(e, t, n) {
  const i = /* @__PURE__ */ Ge(e);
  It(i, "iterate", Vr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Uc(n[0]) ? (n[0] = /* @__PURE__ */ Ge(n[0]), i[t](...n)) : a;
}
function dr(e, t, n = []) {
  fi(), Dc();
  const i = (/* @__PURE__ */ Ge(e))[t].apply(e, n);
  return Mc(), hi(), i;
}
const Sv = /* @__PURE__ */ Rc("__proto__,__v_isRef,__isVue"), Of = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(On)
);
function Ev(e) {
  On(e) || (e = String(e));
  const t = /* @__PURE__ */ Ge(this);
  return It(t, "has", e), t.hasOwnProperty(e);
}
class Nf {
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
      return i === (a ? r ? Pv : If : r ? Rf : Lf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = we(t);
    if (!a) {
      let l;
      if (s && (l = wv[n]))
        return l;
      if (n === "hasOwnProperty")
        return Ev;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ $t(t) ? t : i
    );
    if ((On(n) ? Of.has(n) : Sv(n)) || (a || It(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ $t(o)) {
      const l = s && Pc(n) ? o : o.value;
      return a && qe(l) ? /* @__PURE__ */ Gr(l) : l;
    }
    return qe(o) ? a ? /* @__PURE__ */ Gr(o) : /* @__PURE__ */ Rt(o) : o;
  }
}
class xf extends Nf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = we(t) && Pc(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ pi(r);
      if (!/* @__PURE__ */ yn(i) && !/* @__PURE__ */ pi(i) && (r = /* @__PURE__ */ Ge(r), i = /* @__PURE__ */ Ge(i)), !s && /* @__PURE__ */ $t(r) && !/* @__PURE__ */ $t(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : We(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ $t(t) ? t : a
    );
    return t === /* @__PURE__ */ Ge(a) && l && (o ? St(i, r) && ri(t, "set", n, i) : ri(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = We(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ri(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!On(n) || !Of.has(n)) && It(t, "has", n), i;
  }
  ownKeys(t) {
    return It(
      t,
      "iterate",
      we(t) ? "length" : ua
    ), Reflect.ownKeys(t);
  }
}
class Tv extends Nf {
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
const Av = /* @__PURE__ */ new xf(), kv = /* @__PURE__ */ new Tv(), Ov = /* @__PURE__ */ new xf(!0);
const nc = (e) => e, bs = (e) => Reflect.getPrototypeOf(e);
function Nv(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ge(a), s = Di(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? nc : t ? qa : Nn;
    return !t && It(
      r,
      "iterate",
      l ? tc : ua
    ), ut(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: _ } = d.next();
          return _ ? { value: h, done: _ } : {
            value: o ? [u(h[0]), u(h[1])] : u(h),
            done: _
          };
        }
      }
    );
  };
}
function ys(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xv(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ge(r), o = /* @__PURE__ */ Ge(a);
      e || (St(a, o) && It(s, "get", a), It(s, "get", o));
      const { has: l } = bs(s), d = t ? nc : e ? qa : Nn;
      if (l.call(s, a))
        return d(r.get(a));
      if (l.call(s, o))
        return d(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && It(/* @__PURE__ */ Ge(a), "iterate", ua), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ge(r), o = /* @__PURE__ */ Ge(a);
      return e || (St(a, o) && It(s, "has", a), It(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ Ge(o), d = t ? nc : e ? qa : Nn;
      return !e && It(l, "iterate", ua), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return ut(
    n,
    e ? {
      add: ys("add"),
      set: ys("set"),
      delete: ys("delete"),
      clear: ys("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ge(this), s = bs(r), o = /* @__PURE__ */ Ge(a), l = !t && !/* @__PURE__ */ yn(a) && !/* @__PURE__ */ pi(a) ? o : a;
        return s.has.call(r, l) || St(a, l) && s.has.call(r, a) || St(o, l) && s.has.call(r, o) || (r.add(l), ri(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ yn(r) && !/* @__PURE__ */ pi(r) && (r = /* @__PURE__ */ Ge(r));
        const s = /* @__PURE__ */ Ge(this), { has: o, get: l } = bs(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ Ge(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? St(r, u) && ri(s, "set", a, r) : ri(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ge(this), { has: s, get: o } = bs(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ Ge(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && ri(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ Ge(this), r = a.size !== 0, s = a.clear();
        return r && ri(
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
    n[a] = Nv(a, e, t);
  }), n;
}
function Fc(e, t) {
  const n = xv(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    We(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Lv = {
  get: /* @__PURE__ */ Fc(!1, !1)
}, Rv = {
  get: /* @__PURE__ */ Fc(!1, !0)
}, Iv = {
  get: /* @__PURE__ */ Fc(!0, !1)
};
const Lf = /* @__PURE__ */ new WeakMap(), Rf = /* @__PURE__ */ new WeakMap(), If = /* @__PURE__ */ new WeakMap(), Pv = /* @__PURE__ */ new WeakMap();
function Dv(e) {
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
  return /* @__PURE__ */ pi(e) ? e : zc(
    e,
    !1,
    Av,
    Lv,
    Lf
  );
}
// @__NO_SIDE_EFFECTS__
function Mv(e) {
  return zc(
    e,
    !1,
    Ov,
    Rv,
    Rf
  );
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  return zc(
    e,
    !0,
    kv,
    Iv,
    If
  );
}
function zc(e, t, n, i, a) {
  if (!qe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Dv(av(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function da(e) {
  return /* @__PURE__ */ pi(e) ? /* @__PURE__ */ da(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function pi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Uc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ge(t) : e;
}
function $v(e) {
  return !We(e, "__v_skip") && Object.isExtensible(e) && gf(e, "__v_skip", !0), e;
}
const Nn = (e) => qe(e) ? /* @__PURE__ */ Rt(e) : e, qa = (e) => qe(e) ? /* @__PURE__ */ Gr(e) : e;
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return Df(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Pf(e) {
  return Df(e, !0);
}
function Df(e, t) {
  return /* @__PURE__ */ $t(e) ? e : new Fv(e, t);
}
class Fv {
  constructor(t, n) {
    this.dep = new Go(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ge(t), this._value = n ? t : Nn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ yn(t) || /* @__PURE__ */ pi(t);
    t = i ? t : /* @__PURE__ */ Ge(t), St(t, n) && (this._rawValue = t, this._value = i ? t : Nn(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ $t(e) ? e.value : e;
}
function ci(e) {
  return xe(e) ? e() : g(e);
}
const zv = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ $t(a) && !/* @__PURE__ */ $t(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Mf(e) {
  return /* @__PURE__ */ da(e) ? e : new Proxy(e, zv);
}
class Uv {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Go(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Bv(e) {
  return new Uv(e);
}
class Hv {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Go(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = jr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Qe !== this)
      return Cf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Tf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function jv(e, t, n = !1) {
  let i, a;
  return xe(e) ? i = e : (i = e.get, a = e.set), new Hv(i, a, n);
}
const _s = {}, Fs = /* @__PURE__ */ new WeakMap();
let ta;
function Vv(e, t = !1, n = ta) {
  if (n) {
    let i = Fs.get(n);
    i || Fs.set(n, i = []), i.push(e);
  }
}
function Gv(e, t, n = He) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = (M) => a ? M : /* @__PURE__ */ yn(M) || a === !1 || a === 0 ? si(M, 1) : si(M);
  let u, h, _, T, O = !1, A = !1;
  if (/* @__PURE__ */ $t(e) ? (h = () => e.value, O = /* @__PURE__ */ yn(e)) : /* @__PURE__ */ da(e) ? (h = () => d(e), O = !0) : we(e) ? (A = !0, O = e.some((M) => /* @__PURE__ */ da(M) || /* @__PURE__ */ yn(M)), h = () => e.map((M) => {
    if (/* @__PURE__ */ $t(M))
      return M.value;
    if (/* @__PURE__ */ da(M))
      return d(M);
    if (xe(M))
      return l ? l(M, 2) : M();
  })) : xe(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (_) {
      fi();
      try {
        _();
      } finally {
        hi();
      }
    }
    const M = ta;
    ta = u;
    try {
      return l ? l(e, 3, [T]) : e(T);
    } finally {
      ta = M;
    }
  } : h = bn, t && a) {
    const M = h, oe = a === !0 ? 1 / 0 : a;
    h = () => si(M(), oe);
  }
  const x = bv(), P = () => {
    u.stop(), x && x.active && Ic(x.effects, u);
  };
  if (r && t) {
    const M = t;
    t = (...oe) => {
      const de = M(...oe);
      return P(), de;
    };
  }
  let I = A ? new Array(e.length).fill(_s) : _s;
  const K = (M) => {
    if (!(!(u.flags & 1) || !u.dirty && !M))
      if (t) {
        const oe = u.run();
        if (M || a || O || (A ? oe.some((de, te) => St(de, I[te])) : St(oe, I))) {
          _ && _();
          const de = ta;
          ta = u;
          try {
            const te = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              I === _s ? void 0 : A && I[0] === _s ? [] : I,
              T
            ];
            I = oe, l ? l(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            ta = de;
          }
        }
      } else
        u.run();
  };
  return o && o(K), u = new _f(h), u.scheduler = s ? () => s(K, !1) : K, T = (M) => Vv(M, !1, u), _ = u.onStop = () => {
    const M = Fs.get(u);
    if (M) {
      if (l)
        l(M, 4);
      else
        for (const oe of M) oe();
      Fs.delete(u);
    }
  }, t ? i ? K(!0) : I = u.run() : s ? s(K.bind(null, !0), !0) : u.run(), P.pause = u.pause.bind(u), P.resume = u.resume.bind(u), P.stop = P, P;
}
function si(e, t = 1 / 0, n) {
  if (t <= 0 || !qe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ $t(e))
    si(e.value, t, n);
  else if (we(e))
    for (let i = 0; i < e.length; i++)
      si(e[i], t, n);
  else if (ha(e) || Di(e))
    e.forEach((i) => {
      si(i, t, n);
    });
  else if (vf(e)) {
    for (const i in e)
      si(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && si(e[i], t, n);
  }
  return e;
}
function ls(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Wo(a, t, n);
  }
}
function _n(e, t, n, i) {
  if (xe(e)) {
    const a = ls(e, t, n, i);
    return a && hf(a) && a.catch((r) => {
      Wo(r, t, n);
    }), a;
  }
  if (we(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(_n(e[r], t, n, i));
    return a;
  }
}
function Wo(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || He;
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
      fi(), ls(r, null, 10, [
        e,
        l,
        d
      ]), hi();
      return;
    }
  }
  Kv(e, n, a, i, s);
}
function Kv(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Vt = [];
let $n = -1;
const Ba = [];
let Ii = null, $a = 0;
const $f = /* @__PURE__ */ Promise.resolve();
let zs = null;
function Hn(e) {
  const t = zs || $f;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Wv(e) {
  let t = $n + 1, n = Vt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Vt[i], r = Kr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Bc(e) {
  if (!(e.flags & 1)) {
    const t = Kr(e), n = Vt[Vt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kr(n) ? Vt.push(e) : Vt.splice(Wv(t), 0, e), e.flags |= 1, Ff();
  }
}
function Ff() {
  zs || (zs = $f.then(Bf));
}
function zf(e) {
  if (!we(e))
    Ii && e.id === -1 ? Ii.splice($a + 1, 0, e) : e.flags & 1 || (Ba.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ba.push(e[t]);
  Ff();
}
function Eu(e, t, n = $n + 1) {
  for (; n < Vt.length; n++) {
    const i = Vt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Vt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Uf(e) {
  if (Ba.length) {
    const t = [...new Set(Ba)].sort(
      (n, i) => Kr(n) - Kr(i)
    );
    if (Ba.length = 0, Ii) {
      for (let n = 0; n < t.length; n++)
        Ii.push(t[n]);
      return;
    }
    for (Ii = t, $a = 0; $a < Ii.length; $a++) {
      const n = Ii[$a];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ii = null, $a = 0;
  }
}
const Kr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Bf(e) {
  try {
    for ($n = 0; $n < Vt.length; $n++) {
      const t = Vt[$n];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ls(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; $n < Vt.length; $n++) {
      const t = Vt[$n];
      t && (t.flags &= -2);
    }
    $n = -1, Vt.length = 0, Uf(), zs = null, (Vt.length || Ba.length) && Bf();
  }
}
let Tt = null, qo = null;
function Us(e) {
  const t = Tt;
  return Tt = e, qo = e && e.type.__scopeId || null, t;
}
function qv(e) {
  qo = e;
}
function Yv() {
  qo = null;
}
const Xv = (e) => ke;
function ke(e, t = Tt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Gs(-1);
    const r = Us(t), s = ui.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = ui.length; l > s; l--) qc();
      Us(r), i._d && Gs(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ke(e, t) {
  if (Tt === null)
    return e;
  const n = el(Tt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = He] = t[a];
    r && (xe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && si(s), i.push({
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
function Yi(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (fi(), _n(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), hi());
  }
}
function vn(e, t) {
  if (Dt) {
    let n = Dt.provides;
    const i = Dt.parent && Dt.parent.provides;
    i === n && (n = Dt.provides = Object.create(i)), n[e] = t;
  }
}
function Pt(e, t, n = !1) {
  const i = va();
  if (i || ja) {
    let a = ja ? ja._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && xe(t) ? t.call(i && i.proxy) : t;
  }
}
const Zv = /* @__PURE__ */ Symbol.for("v-scx"), Jv = () => Pt(Zv);
function Qv(e, t) {
  return Yo(e, null, t);
}
function eg(e, t) {
  return Yo(
    e,
    null,
    { flush: "sync" }
  );
}
function Ft(e, t, n) {
  return Yo(e, t, n);
}
function Yo(e, t, n = He) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = ut({}, n), l = t && i || !t && r !== "post";
  let d;
  if (Jr) {
    if (r === "sync") {
      const T = Jv();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!l) {
      const T = () => {
      };
      return T.stop = bn, T.resume = bn, T.pause = bn, T;
    }
  }
  const u = Dt;
  o.call = (T, O, A) => _n(T, u, O, A);
  let h = !1;
  r === "post" ? o.scheduler = (T) => {
    Ht(T, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (T, O) => {
    O ? T() : Bc(T);
  }), o.augmentJob = (T) => {
    t && (T.flags |= 4), h && (T.flags |= 2, u && (T.id = u.uid, T.i = u));
  };
  const _ = Gv(e, t, o);
  return Jr && (d ? d.push(_) : l && _()), _;
}
function tg(e, t, n) {
  const i = this.proxy, a = et(e) ? e.includes(".") ? Hf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  xe(t) ? r = t : (r = t.handler, n = t);
  const s = ds(this), o = Yo(a, r.bind(i), n);
  return s(), o;
}
function Hf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const xi = /* @__PURE__ */ new WeakMap(), jf = /* @__PURE__ */ Symbol("_vte"), Xo = (e) => e.__isTeleport, ia = (e) => e && (e.disabled || e.disabled === ""), ng = (e) => e && (e.defer || e.defer === ""), Tu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Au = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ic = (e, t) => {
  const n = e && e.to;
  return et(n) ? t ? t(n) : null : n;
}, ig = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: _,
      o: { insert: T, querySelector: O, createText: A, createComment: x, parentNode: P }
    } = d, I = ia(t.props);
    let { dynamicChildren: K } = t;
    const M = (te, ve, B) => {
      te.shapeFlag & 16 && u(
        te.children,
        ve,
        B,
        a,
        r,
        s,
        o,
        l
      );
    }, oe = (te = t) => {
      const ve = ia(te.props), B = te.target = ic(te.props, O), F = ac(B, te, A, T);
      B && (s !== "svg" && Tu(B) ? s = "svg" : s !== "mathml" && Au(B) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(B), ve || (M(te, B, F), wr(te, !1)));
    }, de = (te) => {
      const ve = () => {
        if (xi.get(te) === ve) {
          if (xi.delete(te), ia(te.props)) {
            const B = P(te.el) || n;
            M(te, B, te.anchor), wr(te, !0);
          }
          oe(te);
        }
      };
      xi.set(te, ve), Ht(ve, r);
    };
    if (e == null) {
      const te = t.el = A(""), ve = t.anchor = A("");
      if (T(te, n, i), T(ve, n, i), ng(t.props) || r && r.pendingBranch) {
        de(t);
        return;
      }
      I && (M(t, n, ve), wr(t, !0)), oe();
    } else {
      t.el = e.el;
      const te = t.anchor = e.anchor, ve = xi.get(e);
      if (ve) {
        ve.flags |= 8, xi.delete(e), de(t);
        return;
      }
      t.targetStart = e.targetStart;
      const B = t.target = e.target, F = t.targetAnchor = e.targetAnchor, ue = ia(e.props), J = ue ? n : B, ne = ue ? te : F;
      if (s === "svg" || Tu(B) ? s = "svg" : (s === "mathml" || Au(B)) && (s = "mathml"), K ? (_(
        e.dynamicChildren,
        K,
        J,
        a,
        r,
        s,
        o
      ), Wc(e, t, !0)) : l || h(
        e,
        t,
        J,
        ne,
        a,
        r,
        s,
        o,
        !1
      ), I)
        ue ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ws(
          t,
          n,
          te,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = ic(t.props, O);
        D && (t.target = D, ws(
          t,
          D,
          null,
          d,
          0
        ));
      } else ue && ws(
        t,
        B,
        F,
        d,
        1
      );
      wr(t, I);
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
      props: _
    } = e, T = ia(_), O = r || !T, A = xi.get(e);
    if (A && (A.flags |= 8, xi.delete(e)), h && (a(d), a(u)), r && a(l), !A && (T || h) && s & 16)
      for (let x = 0; x < o.length; x++) {
        const P = o[x];
        i(
          P,
          t,
          n,
          O,
          !!P.dynamicChildren
        );
      }
  },
  move: ws,
  hydrate: ag
};
function ws(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: d, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !xi.has(e) && (!h || ia(u)) && l & 16)
    for (let _ = 0; _ < d.length; _++)
      a(
        d[_],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function ag(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: d, createText: u }
}, h) {
  function _(x, P) {
    let I = P;
    for (; I; ) {
      if (I && I.nodeType === 8) {
        if (I.data === "teleport start anchor")
          t.targetStart = I;
        else if (I.data === "teleport anchor") {
          t.targetAnchor = I, x._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      I = s(I);
    }
  }
  function T(x, P) {
    P.anchor = h(
      s(x),
      P,
      o(x),
      n,
      i,
      a,
      r
    );
  }
  const O = t.target = ic(
    t.props,
    l
  ), A = ia(t.props);
  if (O) {
    const x = O._lpa || O.firstChild;
    t.shapeFlag & 16 && (A ? (T(e, t), _(O, x), t.targetAnchor || ac(
      O,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === O ? e : null
    )) : (t.anchor = s(e), _(O, x), t.targetAnchor || ac(O, t, u, d), h(
      x && s(x),
      t,
      O,
      n,
      i,
      a,
      r
    ))), wr(t, A);
  } else A && t.shapeFlag & 16 && (T(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Vf = ig;
function wr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function ac(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[jf] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const gn = /* @__PURE__ */ Symbol("_leaveCb"), fr = /* @__PURE__ */ Symbol("_enterCb");
function rg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Hi(() => {
    e.isMounted = !0;
  }), Ya(() => {
    e.isUnmounting = !0;
  }), e;
}
const dn = [Function, Array], Gf = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: dn,
  onEnter: dn,
  onAfterEnter: dn,
  onEnterCancelled: dn,
  // leave
  onBeforeLeave: dn,
  onLeave: dn,
  onAfterLeave: dn,
  onLeaveCancelled: dn,
  // appear
  onBeforeAppear: dn,
  onAppear: dn,
  onAfterAppear: dn,
  onAppearCancelled: dn
}, Kf = (e) => {
  const t = e.subTree;
  return t.component ? Kf(t.component) : t;
}, sg = {
  name: "BaseTransition",
  props: Gf,
  setup(e, { slots: t }) {
    const n = va(), i = rg();
    return () => {
      const a = t.default && Yf(t.default(), !0), r = a && a.length ? Wf(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? j() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ Ge(e), { mode: o } = s;
      if (i.isLeaving)
        return _l(r);
      const l = Bs(r);
      if (!l)
        return _l(r);
      let d = rc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== Et && Wr(l, d);
      let u = n.subTree && Bs(n.subTree);
      if (u && u.type !== Et && !aa(u, l) && Kf(n).type !== Et) {
        let h = rc(
          u,
          s,
          i,
          n
        );
        if (Wr(u, h), o === "out-in" && l.type !== Et)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, _l(r);
        o === "in-out" && l.type !== Et ? h.delayLeave = (_, T, O) => {
          const A = qf(
            i,
            u
          );
          A[String(u.key)] = u, _[gn] = () => {
            T(), _[gn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            O(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Wf(e) {
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
const og = sg;
function qf(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function rc(e, t, n, i, a) {
  const {
    appear: r,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: _,
    onLeave: T,
    onAfterLeave: O,
    onLeaveCancelled: A,
    onBeforeAppear: x,
    onAppear: P,
    onAfterAppear: I,
    onAppearCancelled: K
  } = t, M = String(e.key), oe = qf(n, e), de = (B, F) => {
    B && _n(
      B,
      i,
      9,
      F
    );
  }, te = (B, F) => {
    const ue = F[1];
    de(B, F), we(B) ? B.every((J) => J.length <= 1) && ue() : B.length <= 1 && ue();
  }, ve = {
    mode: s,
    persisted: o,
    beforeEnter(B) {
      let F = l;
      if (!n.isMounted)
        if (r)
          F = x || l;
        else
          return;
      B[gn] && B[gn](
        !0
        /* cancelled */
      );
      const ue = oe[M];
      ue && aa(e, ue) && ue.el[gn] && ue.el[gn](), de(F, [B]);
    },
    enter(B) {
      if (oe[M] === e) return;
      let F = d, ue = u, J = h;
      if (!n.isMounted)
        if (r)
          F = P || d, ue = I || u, J = K || h;
        else
          return;
      let ne = !1;
      B[fr] = ($) => {
        ne || (ne = !0, $ ? de(J, [B]) : de(ue, [B]), ve.delayedLeave && ve.delayedLeave(), B[fr] = void 0);
      };
      const D = B[fr].bind(null, !1);
      F ? te(F, [B, D]) : D();
    },
    leave(B, F) {
      const ue = String(e.key);
      if (B[fr] && B[fr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return F();
      de(_, [B]);
      let J = !1;
      B[gn] = (D) => {
        J || (J = !0, F(), D ? de(A, [B]) : de(O, [B]), B[gn] = void 0, oe[ue] === e && delete oe[ue]);
      };
      const ne = B[gn].bind(null, !1);
      oe[ue] = e, T ? te(T, [B, ne]) : ne();
    },
    clone(B) {
      const F = rc(
        B,
        t,
        n,
        i,
        a
      );
      return a && a(F), F;
    }
  };
  return ve;
}
function _l(e) {
  if (Zo(e))
    return e = Ui(e), e.children = null, e;
}
function Bs(e) {
  if (!Zo(e))
    return Xo(e.type) && e.children ? Wf(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && xe(n.default))
      return n.default();
  }
}
function Wr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Wr(
      Xo(n.type) && Bs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Yf(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === le ? (s.patchFlag & 128 && a++, i = i.concat(
      Yf(s.children, t, o)
    )) : (t || s.type !== Et) && i.push(o != null ? Ui(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function At(e, t) {
  return xe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ut({ name: e.name }, t, { setup: e })
  ) : e;
}
function Xf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function lg(e) {
  const t = va(), n = /* @__PURE__ */ Pf(null);
  if (t) {
    const a = t.refs === He ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function ku(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Hs = /* @__PURE__ */ new WeakMap();
function xr(e, t, n, i, a = !1) {
  if (we(e)) {
    e.forEach(
      (A, x) => xr(
        A,
        t && (we(t) ? t[x] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ha(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && xr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? el(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === He ? o.refs = {} : o.refs, h = o.setupState, _ = /* @__PURE__ */ Ge(h), T = h === He ? ff : (A) => ku(u, A) ? !1 : We(_, A), O = (A, x) => !(x && ku(u, x));
  if (d != null && d !== l) {
    if (Ou(t), et(d))
      u[d] = null, T(d) && (h[d] = null);
    else if (/* @__PURE__ */ $t(d)) {
      const A = t;
      O(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (xe(l))
    ls(l, o, 12, [s, u]);
  else {
    const A = et(l), x = /* @__PURE__ */ $t(l);
    if (A || x) {
      const P = () => {
        if (e.f) {
          const I = A ? T(l) ? h[l] : u[l] : O() || !e.k ? l.value : u[e.k];
          if (a)
            we(I) && Ic(I, r);
          else if (we(I))
            I.includes(r) || I.push(r);
          else if (A)
            u[l] = [r], T(l) && (h[l] = u[l]);
          else {
            const K = [r];
            O(l, e.k) && (l.value = K), e.k && (u[e.k] = K);
          }
        } else A ? (u[l] = s, T(l) && (h[l] = s)) : x && (O(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const I = () => {
          P(), Hs.delete(e);
        };
        I.id = -1, Hs.set(e, I), Ht(I, n);
      } else
        Ou(e), P();
    }
  }
}
function Ou(e) {
  const t = Hs.get(e);
  t && (t.flags |= 8, Hs.delete(e));
}
Vo().requestIdleCallback;
Vo().cancelIdleCallback;
const Ha = (e) => !!e.type.__asyncLoader, Zo = (e) => e.type.__isKeepAlive;
function cg(e, t) {
  Zf(e, "a", t);
}
function ug(e, t) {
  Zf(e, "da", t);
}
function Zf(e, t, n = Dt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Jo(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Zo(a.parent.vnode) && dg(i, t, n, a), a = a.parent;
  }
}
function dg(e, t, n, i) {
  const a = Jo(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  cs(() => {
    Ic(i[t], a);
  }, n);
}
function Jo(e, t, n = Dt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      fi();
      const o = ds(n), l = _n(t, n, e, s);
      return o(), hi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const mi = (e) => (t, n = Dt) => {
  (!Jr || e === "sp") && Jo(e, (...i) => t(...i), n);
}, Jf = mi("bm"), Hi = mi("m"), Qf = mi(
  "bu"
), fg = mi("u"), Ya = mi(
  "bum"
), cs = mi("um"), hg = mi(
  "sp"
), pg = mi("rtg"), vg = mi("rtc");
function gg(e, t = Dt) {
  Jo("ec", e, t);
}
const Hc = "components", mg = "directives";
function Ue(e, t) {
  return Vc(Hc, e, !0, t) || e;
}
const eh = /* @__PURE__ */ Symbol.for("v-ndc");
function jc(e) {
  return et(e) ? Vc(Hc, e, !1) || e : e || eh;
}
function Nu(e) {
  return Vc(mg, e);
}
function Vc(e, t, n = !0, i = !1) {
  const a = Tt || Dt;
  if (a) {
    const r = a.type;
    if (e === Hc) {
      const o = Qg(
        r,
        !1
      );
      if (o && (o === t || o === Mt(t) || o === Ho(Mt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      xu(a[e] || r[e], t) || // global registration
      xu(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function xu(e, t) {
  return e && (e[t] || e[Mt(t)] || e[Ho(Mt(t))]);
}
function Me(e, t, n, i) {
  let a;
  const r = n, s = we(e);
  if (s || et(e)) {
    const o = s && /* @__PURE__ */ da(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ yn(e), d = /* @__PURE__ */ pi(e), e = Ko(e)), a = new Array(e.length);
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
  } else if (qe(e))
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
  if (n == null && (n = {}), Tt.ce || Tt.parent && Ha(Tt.parent) && Tt.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), b(), Fe(
      le,
      null,
      [ye("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = ui.length;
  b();
  let l;
  try {
    const d = s && th(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = Fe(
      le,
      {
        key: (u && !On(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = ui.length; u > o; u--) qc();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function th(e) {
  return e.some((t) => Yr(t) ? !(t.type === Et || t.type === le && !th(t.children)) : !0) ? e : null;
}
const sc = (e) => e ? Sh(e) ? el(e) : sc(e.parent) : null, Lr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ut(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => sc(e.parent),
    $root: (e) => sc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ah(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Bc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Hn.bind(e.proxy)),
    $watch: (e) => tg.bind(e)
  })
), wl = (e, t) => e !== He && !e.__isScriptSetup && We(e, t), bg = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: s, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const _ = s[t];
      if (_ !== void 0)
        switch (_) {
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
        if (wl(i, t))
          return s[t] = 1, i[t];
        if (a !== He && We(a, t))
          return s[t] = 2, a[t];
        if (We(r, t))
          return s[t] = 3, r[t];
        if (n !== He && We(n, t))
          return s[t] = 4, n[t];
        oc && (s[t] = 0);
      }
    }
    const d = Lr[t];
    let u, h;
    if (d)
      return t === "$attrs" && It(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== He && We(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, We(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return wl(a, t) ? (a[t] = n, !0) : i !== He && We(i, t) ? (i[t] = n, !0) : We(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== He && o[0] !== "$" && We(e, o) || wl(t, o) || We(r, o) || We(i, o) || We(Lr, o) || We(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : We(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function yg() {
  return nh().slots;
}
function _g() {
  return nh().attrs;
}
function nh(e) {
  const t = va();
  return t.setupContext || (t.setupContext = Th(t));
}
function js(e) {
  return we(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function wg(e, t) {
  return !e || !t ? e || t : we(e) && we(t) ? e.concat(t) : ut({}, js(e), js(t));
}
let oc = !0;
function Cg(e) {
  const t = ah(e), n = e.proxy, i = e.ctx;
  oc = !1, t.beforeCreate && Lu(t.beforeCreate, e, "bc");
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
    mounted: _,
    beforeUpdate: T,
    updated: O,
    activated: A,
    deactivated: x,
    beforeDestroy: P,
    beforeUnmount: I,
    destroyed: K,
    unmounted: M,
    render: oe,
    renderTracked: de,
    renderTriggered: te,
    errorCaptured: ve,
    serverPrefetch: B,
    // public API
    expose: F,
    inheritAttrs: ue,
    // assets
    components: J,
    directives: ne,
    filters: D
  } = t;
  if (d && Sg(d, i, null), s)
    for (const re in s) {
      const ie = s[re];
      xe(ie) && (i[re] = ie.bind(n));
    }
  if (a) {
    const re = a.call(n, n);
    qe(re) && (e.data = /* @__PURE__ */ Rt(re));
  }
  if (oc = !0, r)
    for (const re in r) {
      const ie = r[re], he = xe(ie) ? ie.bind(n, n) : xe(ie.get) ? ie.get.bind(n, n) : bn, ce = !xe(ie) && xe(ie.set) ? ie.set.bind(n) : bn, Ce = Y({
        get: he,
        set: ce
      });
      Object.defineProperty(i, re, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (me) => Ce.value = me
      });
    }
  if (o)
    for (const re in o)
      ih(o[re], i, n, re);
  if (l) {
    const re = xe(l) ? l.call(n) : l;
    Reflect.ownKeys(re).forEach((ie) => {
      vn(ie, re[ie]);
    });
  }
  u && Lu(u, e, "c");
  function X(re, ie) {
    we(ie) ? ie.forEach((he) => re(he.bind(n))) : ie && re(ie.bind(n));
  }
  if (X(Jf, h), X(Hi, _), X(Qf, T), X(fg, O), X(cg, A), X(ug, x), X(gg, ve), X(vg, de), X(pg, te), X(Ya, I), X(cs, M), X(hg, B), we(F))
    if (F.length) {
      const re = e.exposed || (e.exposed = {});
      F.forEach((ie) => {
        Object.defineProperty(re, ie, {
          get: () => n[ie],
          set: (he) => n[ie] = he,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === bn && (e.render = oe), ue != null && (e.inheritAttrs = ue), J && (e.components = J), ne && (e.directives = ne), B && Xf(e);
}
function Sg(e, t, n = bn) {
  we(e) && (e = lc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    qe(a) ? "default" in a ? r = Pt(
      a.from || i,
      a.default,
      !0
    ) : r = Pt(a.from || i) : r = Pt(a), /* @__PURE__ */ $t(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function Lu(e, t, n) {
  _n(
    we(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ih(e, t, n, i) {
  let a = i.includes(".") ? Hf(n, i) : () => n[i];
  if (et(e)) {
    const r = t[e];
    xe(r) && Ft(a, r);
  } else if (xe(e))
    Ft(a, e.bind(n));
  else if (qe(e))
    if (we(e))
      e.forEach((r) => ih(r, t, n, i));
    else {
      const r = xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      xe(r) && Ft(a, r, e);
    }
}
function ah(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => Vs(l, d, s, !0)
  ), Vs(l, t, s)), qe(t) && r.set(t, l), l;
}
function Vs(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Vs(e, r, n, !0), a && a.forEach(
    (s) => Vs(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = Eg[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const Eg = {
  data: Ru,
  props: Iu,
  emits: Iu,
  // objects
  methods: Cr,
  computed: Cr,
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
  components: Cr,
  directives: Cr,
  // watch
  watch: Ag,
  // provide / inject
  provide: Ru,
  inject: Tg
};
function Ru(e, t) {
  return t ? e ? function() {
    return ut(
      xe(e) ? e.call(this, this) : e,
      xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Tg(e, t) {
  return Cr(lc(e), lc(t));
}
function lc(e) {
  if (we(e)) {
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
function Cr(e, t) {
  return e ? ut(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Iu(e, t) {
  return e ? we(e) && we(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ut(
    /* @__PURE__ */ Object.create(null),
    js(e),
    js(t ?? {})
  ) : t;
}
function Ag(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ut(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Bt(e[i], t[i]);
  return n;
}
function rh() {
  return {
    app: null,
    config: {
      isNativeTag: ff,
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
let kg = 0;
function Og(e, t) {
  return function(i, a = null) {
    xe(i) || (i = ut({}, i)), a != null && !qe(a) && (a = null);
    const r = rh(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: kg++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: tm,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return s.has(u) || (u && xe(u.install) ? (s.add(u), u.install(d, ...h)) : xe(u) && (s.add(u), u(d, ...h))), d;
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
      mount(u, h, _) {
        if (!l) {
          const T = d._ceVNode || ye(i, a);
          return T.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(T, u, _), l = !0, d._container = u, u.__vue_app__ = d, el(T.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (_n(
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
function sh(e, t, n = He) {
  const i = va(), a = Mt(t), r = gi(t), s = oh(e, a), o = Bv((l, d) => {
    let u, h = He, _;
    return eg(() => {
      const T = e[a];
      St(u, T) && (u = T, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(T) {
        const O = n.set ? n.set(T) : T;
        if (!St(O, u) && !(h !== He && St(T, h)))
          return;
        const A = i.vnode.props, x = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        x || (u = T, d()), i.emit(`update:${t}`, O), St(T, h) && (St(T, O) && !St(O, _) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        x && h !== He && !St(O, u)) && d(), h = T, _ = O;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || He : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const oh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Mt(t)}Modifiers`] || e[`${gi(t)}Modifiers`];
function Ng(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || He;
  let a = n;
  const r = t.startsWith("update:"), s = r && oh(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => et(u) ? u.trim() : u)), s.number && (a = a.map(jo)));
  let o, l = i[o = vl(t)] || // also try camelCase event handler (#2249)
  i[o = vl(Mt(t))];
  !l && r && (l = i[o = vl(gi(t))]), l && _n(
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
    e.emitted[o] = !0, _n(
      d,
      e,
      6,
      a
    );
  }
}
const xg = /* @__PURE__ */ new WeakMap();
function lh(e, t, n = !1) {
  const i = n ? xg : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!xe(e)) {
    const l = (d) => {
      const u = lh(d, t, !0);
      u && (o = !0, ut(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (qe(e) && i.set(e, null), null) : (we(r) ? r.forEach((l) => s[l] = null) : ut(s, r), qe(e) && i.set(e, s), s);
}
function Qo(e, t) {
  return !e || !zo(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), We(e, t[0].toLowerCase() + t.slice(1)) || We(e, gi(t)) || We(e, t));
}
function Pu(e) {
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
    data: _,
    setupState: T,
    ctx: O,
    inheritAttrs: A
  } = e, x = Us(e);
  let P, I;
  try {
    if (n.shapeFlag & 4) {
      const M = a || i, oe = M;
      P = Bn(
        d.call(
          oe,
          M,
          u,
          h,
          T,
          _,
          O
        )
      ), I = o;
    } else {
      const M = t;
      P = Bn(
        M.length > 1 ? M(
          h,
          { attrs: o, slots: s, emit: l }
        ) : M(
          h,
          null
        )
      ), I = t.props ? o : Lg(o);
    }
  } catch (M) {
    ui.length = 0, Wo(M, e, 1), P = ye(Et);
  }
  let K = P;
  if (I && A !== !1) {
    const M = Object.keys(I), { shapeFlag: oe } = K;
    M.length && oe & 7 && (r && M.some(Uo) && (I = Rg(
      I,
      r
    )), K = Ui(K, I, !1, !0));
  }
  if (n.dirs && (K = Ui(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const M = Xo(K.type) && Bs(K) || K;
    Wr(M, n.transition);
  }
  return P = K, Us(x), P;
}
const Lg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Rg = (e, t) => {
  const n = {};
  for (const i in e)
    (!Uo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Ig(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Du(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const _ = u[h];
        if (ch(s, i, _) && !Qo(d, _))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? Du(i, s, d) : !0 : !!s;
  return !1;
}
function Du(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (ch(t, e, r) && !Qo(n, r))
      return !0;
  }
  return !1;
}
function ch(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && qe(i) && qe(a) ? !zi(i, a) : i !== a;
}
function Pg({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const uh = {}, dh = () => Object.create(uh), fh = (e) => Object.getPrototypeOf(e) === uh;
function Dg(e, t, n, i = !1) {
  const a = {}, r = dh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), hh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Mv(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Mg(e, t, n, i) {
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
        let _ = u[h];
        if (Qo(e.emitsOptions, _))
          continue;
        const T = t[_];
        if (l)
          if (We(r, _))
            T !== r[_] && (r[_] = T, d = !0);
          else {
            const O = Mt(_);
            a[O] = cc(
              l,
              o,
              O,
              T,
              e,
              !1
            );
          }
        else
          T !== r[_] && (r[_] = T, d = !0);
      }
    }
  } else {
    hh(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !We(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = gi(h)) === h || !We(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = cc(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !We(t, h)) && (delete r[h], d = !0);
  }
  d && ri(e.attrs, "set", "");
}
function hh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (kr(l))
        continue;
      const d = t[l];
      let u;
      a && We(a, u = Mt(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : Qo(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Ge(n), d = o || He;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = cc(
        a,
        l,
        h,
        d[h],
        e,
        !We(d, h)
      );
    }
  }
  return s;
}
function cc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = We(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && xe(l)) {
        const { propsDefaults: d } = a;
        if (n in d)
          i = d[n];
        else {
          const u = ds(a);
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
    ] && (i === "" || i === gi(n)) && (i = !0));
  }
  return i;
}
const $g = /* @__PURE__ */ new WeakMap();
function ph(e, t, n = !1) {
  const i = n ? $g : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!xe(e)) {
    const u = (h) => {
      l = !0;
      const [_, T] = ph(h, t, !0);
      ut(s, _), T && o.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return qe(e) && i.set(e, Ua), Ua;
  if (we(r))
    for (let u = 0; u < r.length; u++) {
      const h = Mt(r[u]);
      Mu(h) && (s[h] = He);
    }
  else if (r)
    for (const u in r) {
      const h = Mt(u);
      if (Mu(h)) {
        const _ = r[u], T = s[h] = we(_) || xe(_) ? { type: _ } : ut({}, _), O = T.type;
        let A = !1, x = !0;
        if (we(O))
          for (let P = 0; P < O.length; ++P) {
            const I = O[P], K = xe(I) && I.name;
            if (K === "Boolean") {
              A = !0;
              break;
            } else K === "String" && (x = !1);
          }
        else
          A = xe(O) && O.name === "Boolean";
        T[
          0
          /* shouldCast */
        ] = A, T[
          1
          /* shouldCastTrue */
        ] = x, (A || We(T, "default")) && o.push(h);
      }
    }
  const d = [s, o];
  return qe(e) && i.set(e, d), d;
}
function Mu(e) {
  return e[0] !== "$" && !kr(e);
}
const Gc = (e) => e === "_" || e === "_ctx" || e === "$stable", Kc = (e) => we(e) ? e.map(Bn) : [Bn(e)], Fg = (e, t, n) => {
  if (t._n)
    return t;
  const i = ke((...a) => Kc(t(...a)), n);
  return i._c = !1, i;
}, vh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Gc(a)) continue;
    const r = e[a];
    if (xe(r))
      t[a] = Fg(a, r, i);
    else if (r != null) {
      const s = Kc(r);
      t[a] = () => s;
    }
  }
}, gh = (e, t) => {
  const n = Kc(t);
  e.slots.default = () => n;
}, mh = (e, t, n) => {
  for (const i in t)
    (n || !Gc(i)) && (e[i] = t[i]);
}, zg = (e, t, n) => {
  const i = e.slots = dh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (mh(i, t, n), n && gf(i, "_", a, !0)) : vh(t, i);
  } else t && gh(e, t);
}, Ug = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = He;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : mh(a, t, n) : (r = !t.$stable, vh(t, a)), s = t;
  } else t && (gh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !Gc(o) && s[o] == null && delete a[o];
}, Ht = Gg;
function Bg(e) {
  return Hg(e);
}
function Hg(e, t) {
  const n = Vo();
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
    nextSibling: _,
    setScopeId: T = bn,
    insertStaticContent: O
  } = e, A = (v, C, k, R = null, N = null, z = null, q = void 0, W = null, Q = !!C.dynamicChildren) => {
    if (v === C)
      return;
    v && !aa(v, C) && (R = ft(v), me(v, N, z, !0), v = null), C.patchFlag === -2 && (Q = !1, C.dynamicChildren = null);
    const { type: V, ref: _e, shapeFlag: se } = C;
    switch (V) {
      case us:
        x(v, C, k, R);
        break;
      case Et:
        P(v, C, k, R);
        break;
      case Is:
        v == null && I(C, k, R, q);
        break;
      case le:
        J(
          v,
          C,
          k,
          R,
          N,
          z,
          q,
          W,
          Q
        );
        break;
      default:
        se & 1 ? oe(
          v,
          C,
          k,
          R,
          N,
          z,
          q,
          W,
          Q
        ) : se & 6 ? ne(
          v,
          C,
          k,
          R,
          N,
          z,
          q,
          W,
          Q
        ) : (se & 64 || se & 128) && V.process(
          v,
          C,
          k,
          R,
          N,
          z,
          q,
          W,
          Q,
          Jt
        );
    }
    _e != null && N ? xr(_e, v && v.ref, z, C || v, !C) : _e == null && v && v.ref != null && xr(v.ref, null, z, v, !0);
  }, x = (v, C, k, R) => {
    if (v == null)
      i(
        C.el = o(C.children),
        k,
        R
      );
    else {
      const N = C.el = v.el;
      C.children !== v.children && d(N, C.children);
    }
  }, P = (v, C, k, R) => {
    v == null ? i(
      C.el = l(C.children || ""),
      k,
      R
    ) : C.el = v.el;
  }, I = (v, C, k, R) => {
    [v.el, v.anchor] = O(
      v.children,
      C,
      k,
      R,
      v.el,
      v.anchor
    );
  }, K = ({ el: v, anchor: C }, k, R) => {
    let N;
    for (; v && v !== C; )
      N = _(v), i(v, k, R), v = N;
    i(C, k, R);
  }, M = ({ el: v, anchor: C }) => {
    let k;
    for (; v && v !== C; )
      k = _(v), a(v), v = k;
    a(C);
  }, oe = (v, C, k, R, N, z, q, W, Q) => {
    if (C.type === "svg" ? q = "svg" : C.type === "math" && (q = "mathml"), v == null)
      de(
        C,
        k,
        R,
        N,
        z,
        q,
        W,
        Q
      );
    else {
      const V = v.el && v.el._isVueCE ? v.el : null;
      try {
        V && V._beginPatch(), B(
          v,
          C,
          N,
          z,
          q,
          W,
          Q
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, de = (v, C, k, R, N, z, q, W) => {
    let Q, V;
    const { props: _e, shapeFlag: se, transition: pe, dirs: Se } = v;
    if (Q = v.el = s(
      v.type,
      z,
      _e && _e.is,
      _e
    ), se & 8 ? u(Q, v.children) : se & 16 && ve(
      v.children,
      Q,
      null,
      R,
      N,
      Cl(v, z),
      q,
      W
    ), Se && Yi(v, null, R, "created"), te(Q, v, v.scopeId, q, R), _e) {
      for (const Ie in _e)
        Ie !== "value" && !kr(Ie) && r(Q, Ie, null, _e[Ie], z, R);
      "value" in _e && r(Q, "value", null, _e.value, z), (V = _e.onVnodeBeforeMount) && Dn(V, R, v);
    }
    Se && Yi(v, null, R, "beforeMount");
    const Ne = jg(N, pe);
    Ne && pe.beforeEnter(Q), i(Q, C, k), ((V = _e && _e.onVnodeMounted) || Ne || Se) && Ht(() => {
      V && Dn(V, R, v), Ne && pe.enter(Q), Se && Yi(v, null, R, "mounted");
    }, N);
  }, te = (v, C, k, R, N) => {
    if (k && T(v, k), R)
      for (let z = 0; z < R.length; z++)
        T(v, R[z]);
    if (N) {
      let z = N.subTree;
      if (C === z || _h(z.type) && (z.ssContent === C || z.ssFallback === C)) {
        const q = N.vnode;
        te(
          v,
          q,
          q.scopeId,
          q.slotScopeIds,
          N.parent
        );
      }
    }
  }, ve = (v, C, k, R, N, z, q, W, Q = 0) => {
    for (let V = Q; V < v.length; V++) {
      const _e = v[V] = W ? ai(v[V]) : Bn(v[V]);
      A(
        null,
        _e,
        C,
        k,
        R,
        N,
        z,
        q,
        W
      );
    }
  }, B = (v, C, k, R, N, z, q) => {
    const W = C.el = v.el;
    let { patchFlag: Q, dynamicChildren: V, dirs: _e } = C;
    Q |= v.patchFlag & 16;
    const se = v.props || He, pe = C.props || He;
    let Se;
    if (k && Xi(k, !1), (Se = pe.onVnodeBeforeUpdate) && Dn(Se, k, C, v), _e && Yi(C, v, k, "beforeUpdate"), k && Xi(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!v.dynamicChildren || v.dynamicChildren.length !== V.length) && (Q = 0, q = !1, V = null), (se.innerHTML && pe.innerHTML == null || se.textContent && pe.textContent == null) && u(W, ""), V ? F(
      v.dynamicChildren,
      V,
      W,
      k,
      R,
      Cl(C, N),
      z
    ) : q || ie(
      v,
      C,
      W,
      null,
      k,
      R,
      Cl(C, N),
      z,
      !1
    ), Q > 0) {
      if (Q & 16)
        ue(W, se, pe, k, N);
      else if (Q & 2 && se.class !== pe.class && r(W, "class", null, pe.class, N), Q & 4 && r(W, "style", se.style, pe.style, N), Q & 8) {
        const Ne = C.dynamicProps;
        for (let Ie = 0; Ie < Ne.length; Ie++) {
          const Pe = Ne[Ie], Je = se[Pe], nt = pe[Pe];
          (nt !== Je || Pe === "value") && r(W, Pe, Je, nt, N, k);
        }
      }
      Q & 1 && v.children !== C.children && u(W, C.children);
    } else !q && V == null && ue(W, se, pe, k, N);
    ((Se = pe.onVnodeUpdated) || _e) && Ht(() => {
      Se && Dn(Se, k, C, v), _e && Yi(C, v, k, "updated");
    }, R);
  }, F = (v, C, k, R, N, z, q) => {
    for (let W = 0; W < C.length; W++) {
      const Q = v[W], V = C[W], _e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !aa(Q, V) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? h(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        Q,
        V,
        _e,
        null,
        R,
        N,
        z,
        q,
        !0
      );
    }
  }, ue = (v, C, k, R, N) => {
    if (C !== k) {
      if (C !== He)
        for (const z in C)
          !kr(z) && !(z in k) && r(
            v,
            z,
            C[z],
            null,
            N,
            R
          );
      for (const z in k) {
        if (kr(z)) continue;
        const q = k[z], W = C[z];
        q !== W && z !== "value" && r(v, z, W, q, N, R);
      }
      "value" in k && r(v, "value", C.value, k.value, N);
    }
  }, J = (v, C, k, R, N, z, q, W, Q) => {
    const V = C.el = v ? v.el : o(""), _e = C.anchor = v ? v.anchor : o("");
    let { patchFlag: se, dynamicChildren: pe, slotScopeIds: Se } = C;
    Se && (W = W ? W.concat(Se) : Se), v == null ? (i(V, k, R), i(_e, k, R), ve(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      k,
      _e,
      N,
      z,
      q,
      W,
      Q
    )) : se > 0 && se & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === pe.length ? (F(
      v.dynamicChildren,
      pe,
      k,
      N,
      z,
      q,
      W
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || N && C === N.subTree) && Wc(
      v,
      C,
      !0
      /* shallow */
    )) : ie(
      v,
      C,
      k,
      _e,
      N,
      z,
      q,
      W,
      Q
    );
  }, ne = (v, C, k, R, N, z, q, W, Q) => {
    C.slotScopeIds = W, v == null ? C.shapeFlag & 512 ? N.ctx.activate(
      C,
      k,
      R,
      q,
      Q
    ) : D(
      C,
      k,
      R,
      N,
      z,
      q,
      Q
    ) : $(v, C, Q);
  }, D = (v, C, k, R, N, z, q) => {
    const W = v.component = Yg(
      v,
      R,
      N
    );
    if (Zo(v) && (W.ctx.renderer = Jt), Xg(W, !1, q), W.asyncDep) {
      if (N && N.registerDep(W, X, q), !v.el) {
        const Q = W.subTree = ye(Et);
        P(null, Q, C, k), v.placeholder = Q.el;
      }
    } else
      X(
        W,
        v,
        C,
        k,
        N,
        z,
        q
      );
  }, $ = (v, C, k) => {
    const R = C.component = v.component;
    if (Ig(v, C, k))
      if (R.asyncDep && !R.asyncResolved) {
        re(R, C, k);
        return;
      } else
        R.next = C, R.update();
    else
      C.el = v.el, R.vnode = C;
  }, X = (v, C, k, R, N, z, q) => {
    const W = () => {
      if (v.isMounted) {
        let { next: se, bu: pe, u: Se, parent: Ne, vnode: Ie } = v;
        {
          const kt = bh(v);
          if (kt) {
            se && (se.el = Ie.el, re(v, se, q)), kt.asyncDep.then(() => {
              Ht(() => {
                v.isUnmounted || V();
              }, N);
            });
            return;
          }
        }
        let Pe = se, Je;
        Xi(v, !1), se ? (se.el = Ie.el, re(v, se, q)) : se = Ie, pe && Rs(pe), (Je = se.props && se.props.onVnodeBeforeUpdate) && Dn(Je, Ne, se, Ie), Xi(v, !0);
        const nt = Pu(v), gt = v.subTree;
        v.subTree = nt, A(
          gt,
          nt,
          // parent may have changed if it's in a teleport
          h(gt.el),
          // anchor may have changed if it's in a fragment
          ft(gt),
          v,
          N,
          z
        ), se.el = nt.el, Pe === null && Pg(v, nt.el), Se && Ht(Se, N), (Je = se.props && se.props.onVnodeUpdated) && Ht(
          () => Dn(Je, Ne, se, Ie),
          N
        );
      } else {
        let se;
        const { el: pe, props: Se } = C, { bm: Ne, m: Ie, parent: Pe, root: Je, type: nt } = v, gt = Ha(C);
        Xi(v, !1), Ne && Rs(Ne), !gt && (se = Se && Se.onVnodeBeforeMount) && Dn(se, Pe, C), Xi(v, !0);
        {
          Je.ce && Je.ce._hasShadowRoot() && Je.ce._injectChildStyle(
            nt,
            v.parent ? v.parent.type : void 0
          );
          const kt = v.subTree = Pu(v);
          A(
            null,
            kt,
            k,
            R,
            v,
            N,
            z
          ), C.el = kt.el;
        }
        if (Ie && Ht(Ie, N), !gt && (se = Se && Se.onVnodeMounted)) {
          const kt = C;
          Ht(
            () => Dn(se, Pe, kt),
            N
          );
        }
        (C.shapeFlag & 256 || Pe && Ha(Pe.vnode) && Pe.vnode.shapeFlag & 256) && v.a && Ht(v.a, N), v.isMounted = !0, C = k = R = null;
      }
    };
    v.scope.on();
    const Q = v.effect = new _f(W);
    v.scope.off();
    const V = v.update = Q.run.bind(Q), _e = v.job = Q.runIfDirty.bind(Q);
    _e.i = v, _e.id = v.uid, Q.scheduler = () => Bc(_e), Xi(v, !0), V();
  }, re = (v, C, k) => {
    C.component = v;
    const R = v.vnode.props;
    v.vnode = C, v.next = null, Mg(v, C.props, R, k), Ug(v, C.children, k), fi(), Eu(v), hi();
  }, ie = (v, C, k, R, N, z, q, W, Q = !1) => {
    const V = v && v.children, _e = v ? v.shapeFlag : 0, se = C.children, { patchFlag: pe, shapeFlag: Se } = C;
    if (pe > 0) {
      if (pe & 128) {
        ce(
          V,
          se,
          k,
          R,
          N,
          z,
          q,
          W,
          Q
        );
        return;
      } else if (pe & 256) {
        he(
          V,
          se,
          k,
          R,
          N,
          z,
          q,
          W,
          Q
        );
        return;
      }
    }
    Se & 8 ? (_e & 16 && ot(V, N, z), se !== V && u(k, se)) : _e & 16 ? Se & 16 ? ce(
      V,
      se,
      k,
      R,
      N,
      z,
      q,
      W,
      Q
    ) : ot(V, N, z, !0) : (_e & 8 && u(k, ""), Se & 16 && ve(
      se,
      k,
      R,
      N,
      z,
      q,
      W,
      Q
    ));
  }, he = (v, C, k, R, N, z, q, W, Q) => {
    v = v || Ua, C = C || Ua;
    const V = v.length, _e = C.length, se = Math.min(V, _e);
    let pe;
    for (pe = 0; pe < se; pe++) {
      const Se = C[pe] = Q ? ai(C[pe]) : Bn(C[pe]);
      A(
        v[pe],
        Se,
        k,
        null,
        N,
        z,
        q,
        W,
        Q
      );
    }
    V > _e ? ot(
      v,
      N,
      z,
      !0,
      !1,
      se
    ) : ve(
      C,
      k,
      R,
      N,
      z,
      q,
      W,
      Q,
      se
    );
  }, ce = (v, C, k, R, N, z, q, W, Q) => {
    let V = 0;
    const _e = C.length;
    let se = v.length - 1, pe = _e - 1;
    for (; V <= se && V <= pe; ) {
      const Se = v[V], Ne = C[V] = Q ? ai(C[V]) : Bn(C[V]);
      if (aa(Se, Ne))
        A(
          Se,
          Ne,
          k,
          null,
          N,
          z,
          q,
          W,
          Q
        );
      else
        break;
      V++;
    }
    for (; V <= se && V <= pe; ) {
      const Se = v[se], Ne = C[pe] = Q ? ai(C[pe]) : Bn(C[pe]);
      if (aa(Se, Ne))
        A(
          Se,
          Ne,
          k,
          null,
          N,
          z,
          q,
          W,
          Q
        );
      else
        break;
      se--, pe--;
    }
    if (V > se) {
      if (V <= pe) {
        const Se = pe + 1, Ne = Se < _e ? C[Se].el : R;
        for (; V <= pe; )
          A(
            null,
            C[V] = Q ? ai(C[V]) : Bn(C[V]),
            k,
            Ne,
            N,
            z,
            q,
            W,
            Q
          ), V++;
      }
    } else if (V > pe)
      for (; V <= se; )
        me(v[V], N, z, !0), V++;
    else {
      const Se = V, Ne = V, Ie = /* @__PURE__ */ new Map();
      for (V = Ne; V <= pe; V++) {
        const lt = C[V] = Q ? ai(C[V]) : Bn(C[V]);
        lt.key != null && Ie.set(lt.key, V);
      }
      let Pe, Je = 0;
      const nt = pe - Ne + 1;
      let gt = !1, kt = 0;
      const Ot = new Array(nt);
      for (V = 0; V < nt; V++) Ot[V] = 0;
      for (V = Se; V <= se; V++) {
        const lt = v[V];
        if (Je >= nt) {
          me(lt, N, z, !0);
          continue;
        }
        let Nt;
        if (lt.key != null)
          Nt = Ie.get(lt.key);
        else
          for (Pe = Ne; Pe <= pe; Pe++)
            if (Ot[Pe - Ne] === 0 && aa(lt, C[Pe])) {
              Nt = Pe;
              break;
            }
        Nt === void 0 ? me(lt, N, z, !0) : (Ot[Nt - Ne] = V + 1, Nt >= kt ? kt = Nt : gt = !0, A(
          lt,
          C[Nt],
          k,
          null,
          N,
          z,
          q,
          W,
          Q
        ), Je++);
      }
      const wn = gt ? Vg(Ot) : Ua;
      for (Pe = wn.length - 1, V = nt - 1; V >= 0; V--) {
        const lt = Ne + V, Nt = C[lt], bi = C[lt + 1], yi = lt + 1 < _e ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          bi.el || yh(bi)
        ) : R;
        Ot[V] === 0 ? A(
          null,
          Nt,
          k,
          yi,
          N,
          z,
          q,
          W,
          Q
        ) : gt && (Pe < 0 || V !== wn[Pe] ? Ce(Nt, k, yi, 2) : Pe--);
      }
    }
  }, Ce = (v, C, k, R, N = null) => {
    const { el: z, type: q, transition: W, children: Q, shapeFlag: V } = v;
    if (V & 6) {
      Ce(v.component.subTree, C, k, R);
      return;
    }
    if (V & 128) {
      v.suspense.move(C, k, R);
      return;
    }
    if (V & 64) {
      q.move(v, C, k, Jt);
      return;
    }
    if (q === le) {
      i(z, C, k);
      for (let se = 0; se < Q.length; se++)
        Ce(Q[se], C, k, R);
      i(v.anchor, C, k);
      return;
    }
    if (q === Is) {
      K(v, C, k);
      return;
    }
    if (R !== 2 && V & 1 && W)
      if (R === 0)
        W.persisted && !z[gn] ? i(z, C, k) : (W.beforeEnter(z), i(z, C, k), Ht(() => W.enter(z), N));
      else {
        const { leave: se, delayLeave: pe, afterLeave: Se } = W, Ne = () => {
          v.ctx.isUnmounted ? a(z) : i(z, C, k);
        }, Ie = () => {
          const Pe = z._isLeaving || !!z[gn];
          z._isLeaving && z[gn](
            !0
            /* cancelled */
          ), W.persisted && !Pe ? Ne() : se(z, () => {
            Ne(), Se && Se();
          });
        };
        pe ? pe(z, Ne, Ie) : Ie();
      }
    else
      i(z, C, k);
  }, me = (v, C, k, R = !1, N = !1) => {
    const {
      type: z,
      props: q,
      ref: W,
      children: Q,
      dynamicChildren: V,
      shapeFlag: _e,
      patchFlag: se,
      dirs: pe,
      cacheIndex: Se,
      memo: Ne
    } = v;
    if (se === -2 && (N = !1), W != null && (fi(), xr(W, null, k, v, !0), hi()), Se != null && (C.renderCache[Se] = void 0), _e & 256) {
      C.ctx.deactivate(v);
      return;
    }
    const Ie = _e & 1 && pe, Pe = !Ha(v);
    let Je;
    if (Pe && (Je = q && q.onVnodeBeforeUnmount) && Dn(Je, C, v), _e & 6)
      rt(v.component, k, R);
    else {
      if (_e & 128) {
        v.suspense.unmount(k, R);
        return;
      }
      Ie && Yi(v, null, C, "beforeUnmount"), _e & 64 ? v.type.remove(
        v,
        C,
        k,
        Jt,
        R
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== le || se > 0 && se & 64) ? ot(
        V,
        C,
        k,
        !1,
        !0
      ) : (z === le && se & 384 || !N && _e & 16) && ot(Q, C, k), R && je(v);
    }
    const nt = Ne != null && Se == null;
    (Pe && (Je = q && q.onVnodeUnmounted) || Ie || nt) && Ht(() => {
      Je && Dn(Je, C, v), Ie && Yi(v, null, C, "unmounted"), nt && (v.el = null);
    }, k);
  }, je = (v) => {
    const { type: C, el: k, anchor: R, transition: N } = v;
    if (C === le) {
      be(k, R);
      return;
    }
    if (C === Is) {
      M(v);
      return;
    }
    const z = () => {
      a(k), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (v.shapeFlag & 1 && N && !N.persisted) {
      const { leave: q, delayLeave: W } = N, Q = () => q(k, z);
      W ? W(v.el, z, Q) : Q();
    } else
      z();
  }, be = (v, C) => {
    let k;
    for (; v !== C; )
      k = _(v), a(v), v = k;
    a(C);
  }, rt = (v, C, k) => {
    const { bum: R, scope: N, job: z, subTree: q, um: W, m: Q, a: V } = v;
    $u(Q), $u(V), R && Rs(R), N.stop(), z && (z.flags |= 8, me(q, v, C, k)), W && Ht(W, C), Ht(() => {
      v.isUnmounted = !0;
    }, C);
  }, ot = (v, C, k, R = !1, N = !1, z = 0) => {
    for (let q = z; q < v.length; q++)
      me(v[q], C, k, R, N);
  }, ft = (v) => {
    if (v.shapeFlag & 6)
      return ft(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const C = _(v.anchor || v.el), k = C && C[jf];
    return k ? _(k) : C;
  };
  let yt = !1;
  const tt = (v, C, k) => {
    let R;
    v == null ? C._vnode && (me(C._vnode, null, null, !0), R = C._vnode.component) : A(
      C._vnode || null,
      v,
      C,
      null,
      null,
      null,
      k
    ), C._vnode = v, yt || (yt = !0, Eu(R), Uf(), yt = !1);
  }, Jt = {
    p: A,
    um: me,
    m: Ce,
    r: je,
    mt: D,
    mc: ve,
    pc: ie,
    pbc: F,
    n: ft,
    o: e
  };
  return {
    render: tt,
    hydrate: void 0,
    createApp: Og(tt)
  };
}
function Cl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Xi({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function jg(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Wc(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (we(i) && we(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = ai(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && Wc(s, o)), o.type === us && (o.patchFlag === -1 && (o = a[r] = ai(o)), o.el = s.el), o.type === Et && !o.el && (o.el = s.el);
    }
}
function Vg(e) {
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
function bh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : bh(t);
}
function $u(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function yh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? yh(t.subTree) : null;
}
const _h = (e) => e.__isSuspense;
function Gg(e, t) {
  t && t.pendingBranch ? we(e) ? t.effects.push(...e) : t.effects.push(e) : zf(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), us = /* @__PURE__ */ Symbol.for("v-txt"), Et = /* @__PURE__ */ Symbol.for("v-cmt"), Is = /* @__PURE__ */ Symbol.for("v-stc"), ui = [];
let on = null;
function b(e = !1) {
  ui.push(on = e ? null : []);
}
function qc() {
  ui.pop(), on = ui[ui.length - 1] || null;
}
let qr = 1;
function Gs(e, t = !1) {
  qr += e, e < 0 && on && t && (on.hasOnce = !0);
}
function wh(e) {
  return e.dynamicChildren = qr > 0 ? on || Ua : null, qc(), qr > 0 && on && on.push(e), e;
}
function E(e, t, n, i, a, r) {
  return wh(
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
function Fe(e, t, n, i, a) {
  return wh(
    ye(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Yr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function aa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ch = ({ key: e }) => e ?? null, Ps = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? et(e) || /* @__PURE__ */ $t(e) || xe(e) ? { i: Tt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === le ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ch(t),
    ref: t && Ps(t),
    scopeId: qo,
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
  return o ? (Ks(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= et(n) ? 8 : 16), qr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  on && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && on.push(l), l;
}
const ye = Kg;
function Kg(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === eh) && (e = Et), Yr(e)) {
    const o = Ui(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ks(o, n), qr > 0 && !r && on && (o.shapeFlag & 6 ? on[on.indexOf(e)] = o : on.push(o)), o.patchFlag = -2, o;
  }
  if (em(e) && (e = e.__vccOpts), t) {
    t = Xr(t);
    let { class: o, style: l } = t;
    o && !et(o) && (t.class = Ee(o)), qe(l) && (/* @__PURE__ */ Uc(l) && !we(l) && (l = ut({}, l)), t.style = ln(l));
  }
  const s = et(e) ? 1 : _h(e) ? 128 : Xo(e) ? 64 : qe(e) ? 4 : xe(e) ? 2 : 0;
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
function Xr(e) {
  return e ? /* @__PURE__ */ Uc(e) || fh(e) ? ut({}, e) : e : null;
}
function Ui(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? zt(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ch(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? we(r) ? r.concat(Ps(t)) : [r, Ps(t)] : Ps(t)
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
    patchFlag: t && e.type !== le ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Ui(e.ssContent),
    ssFallback: e.ssFallback && Ui(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Wr(
    u,
    l.clone(u)
  ), u;
}
function Oe(e = " ", t = 0) {
  return ye(us, null, e, t);
}
function j(e = "", t = !1) {
  return t ? (b(), Fe(Et, null, e)) : ye(Et, null, e);
}
function Bn(e) {
  return e == null || typeof e == "boolean" ? ye(Et) : we(e) ? ye(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yr(e) ? ai(e) : ye(us, null, String(e));
}
function ai(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ui(e);
}
function Ks(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (we(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Ks(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !fh(t) ? t._ctx = Tt : a === 3 && Tt && (Tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (xe(t)) {
    if (i & 65) {
      Ks(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Tt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Oe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function zt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ee([t.class, i.class]));
      else if (a === "style")
        t.style = ln([t.style, i.style]);
      else if (zo(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(we(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Uo(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Dn(e, t, n, i = null) {
  _n(e, t, 7, [
    n,
    i
  ]);
}
const Wg = rh();
let qg = 0;
function Yg(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Wg, r = {
    uid: qg++,
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
    scope: new mv(
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
    propsOptions: ph(i, a),
    emitsOptions: lh(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: He,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: He,
    data: He,
    props: He,
    attrs: He,
    slots: He,
    refs: He,
    setupState: He,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Ng.bind(null, r), e.ce && e.ce(r), r;
}
let Dt = null;
const va = () => Dt || Tt;
let Ws, Zr;
{
  const e = Vo(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  Ws = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Dt = n
  ), Zr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Jr = n
  );
}
const ds = (e) => {
  const t = Dt;
  return Ws(e), e.scope.on(), () => {
    e.scope.off(), Ws(t);
  };
}, Fu = () => {
  Dt && Dt.scope.off(), Ws(null);
};
function Sh(e) {
  return e.vnode.shapeFlag & 4;
}
let Jr = !1;
function Xg(e, t = !1, n = !1) {
  t && Zr(t);
  const { props: i, children: a } = e.vnode, r = Sh(e);
  Dg(e, i, r, t), zg(e, a, n || t);
  const s = r ? Zg(e, t) : void 0;
  return t && Zr(!1), s;
}
function Zg(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bg);
  const { setup: i } = n;
  if (i) {
    fi();
    const a = e.setupContext = i.length > 1 ? Th(e) : null, r = ds(e), s = ls(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = hf(s);
    if (hi(), r(), (o || e.sp) && !Ha(e) && Xf(e), o) {
      if (s.then(Fu, Fu), t)
        return s.then((l) => {
          Zr(!0);
          try {
            zu(e, l, t);
          } finally {
            Zr(!1);
          }
        }).catch((l) => {
          Wo(l, e, 0);
        });
      e.asyncDep = s;
    } else
      zu(e, s);
  } else
    Eh(e);
}
function zu(e, t, n) {
  xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : qe(t) && (e.setupState = Mf(t)), Eh(e);
}
function Eh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || bn);
  {
    const a = ds(e);
    fi();
    try {
      Cg(e);
    } finally {
      hi(), a();
    }
  }
}
const Jg = {
  get(e, t) {
    return It(e, "get", ""), e[t];
  }
};
function Th(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Jg),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function el(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Mf($v(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Lr)
        return Lr[n](e);
    },
    has(t, n) {
      return n in t || n in Lr;
    }
  })) : e.proxy;
}
function Qg(e, t = !0) {
  return xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function em(e) {
  return xe(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ jv(e, t, Jr);
function Xt(e, t, n) {
  try {
    Gs(-1);
    const i = arguments.length;
    return i === 2 ? qe(t) && !we(t) ? Yr(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Yr(n) && (n = [n]), ye(e, t, n));
  } finally {
    Gs(1);
  }
}
const tm = "3.5.42", nm = bn;
let uc;
const Uu = typeof window < "u" && window.trustedTypes;
if (Uu)
  try {
    uc = /* @__PURE__ */ Uu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ah = uc ? (e) => uc.createHTML(e) : (e) => e, im = "http://www.w3.org/2000/svg", am = "http://www.w3.org/1998/Math/MathML", ii = typeof document < "u" ? document : null, Bu = ii && /* @__PURE__ */ ii.createElement("template"), rm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ii.createElementNS(im, e) : t === "mathml" ? ii.createElementNS(am, e) : n ? ii.createElement(e, { is: n }) : ii.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ii.createTextNode(e),
  createComment: (e) => ii.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ii.querySelector(e),
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
      Bu.innerHTML = Ah(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Bu.content;
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
}, ki = "transition", hr = "animation", Qr = /* @__PURE__ */ Symbol("_vtc"), kh = {
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
}, sm = /* @__PURE__ */ ut(
  {},
  Gf,
  kh
), om = (e) => (e.displayName = "Transition", e.props = sm, e), lm = /* @__PURE__ */ om(
  (e, { slots: t }) => Xt(og, cm(e), t)
), Zi = (e, t = []) => {
  we(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Hu = (e) => e ? we(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function cm(e) {
  const t = {};
  for (const J in e)
    J in kh || (t[J] = e[J]);
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
    leaveActiveClass: _ = `${n}-leave-active`,
    leaveToClass: T = `${n}-leave-to`
  } = e, O = um(a), A = O && O[0], x = O && O[1], {
    onBeforeEnter: P,
    onEnter: I,
    onEnterCancelled: K,
    onLeave: M,
    onLeaveCancelled: oe,
    onBeforeAppear: de = P,
    onAppear: te = I,
    onAppearCancelled: ve = K
  } = t, B = (J, ne, D, $) => {
    J._enterCancelled = $, Ji(J, ne ? u : o), Ji(J, ne ? d : s), D && D();
  }, F = (J, ne) => {
    J._isLeaving = !1, Ji(J, h), Ji(J, T), Ji(J, _), ne && ne();
  }, ue = (J) => (ne, D) => {
    const $ = J ? te : I, X = () => B(ne, J, D);
    Zi($, [ne, X]), ju(() => {
      Ji(ne, J ? l : r), Jn(ne, J ? u : o), Hu($) || Vu(ne, i, A, X);
    });
  };
  return ut(t, {
    onBeforeEnter(J) {
      Zi(P, [J]), Jn(J, r), Jn(J, s);
    },
    onBeforeAppear(J) {
      Zi(de, [J]), Jn(J, l), Jn(J, d);
    },
    onEnter: ue(!1),
    onAppear: ue(!0),
    onLeave(J, ne) {
      J._isLeaving = !0;
      const D = () => F(J, ne);
      Jn(J, h), J._enterCancelled ? (Jn(J, _), Wu(J)) : (Wu(J), Jn(J, _)), ju(() => {
        J._isLeaving && (Ji(J, h), Jn(J, T), Hu(M) || Vu(J, i, x, D));
      }), Zi(M, [J, D]);
    },
    onEnterCancelled(J) {
      B(J, !1, void 0, !0), Zi(K, [J]);
    },
    onAppearCancelled(J) {
      B(J, !0, void 0, !0), Zi(ve, [J]);
    },
    onLeaveCancelled(J) {
      F(J), Zi(oe, [J]);
    }
  });
}
function um(e) {
  if (e == null)
    return null;
  if (qe(e))
    return [Sl(e.enter), Sl(e.leave)];
  {
    const t = Sl(e);
    return [t, t];
  }
}
function Sl(e) {
  return ov(e);
}
function Jn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Qr] || (e[Qr] = /* @__PURE__ */ new Set())).add(t);
}
function Ji(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Qr];
  n && (n.delete(t), n.size || (e[Qr] = void 0));
}
function ju(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let dm = 0;
function Vu(e, t, n, i) {
  const a = e._endId = ++dm, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = fm(e, t);
  if (!s)
    return i();
  const d = s + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, _), r();
  }, _ = (T) => {
    T.target === e && ++u >= l && h();
  };
  setTimeout(() => {
    u < l && h();
  }, o + 1), e.addEventListener(d, _);
}
function fm(e, t) {
  const n = window.getComputedStyle(e), i = (O) => (n[O] || "").split(", "), a = i(`${ki}Delay`), r = i(`${ki}Duration`), s = Gu(a, r), o = i(`${hr}Delay`), l = i(`${hr}Duration`), d = Gu(o, l);
  let u = null, h = 0, _ = 0;
  t === ki ? s > 0 && (u = ki, h = s, _ = r.length) : t === hr ? d > 0 && (u = hr, h = d, _ = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? ki : hr : null, _ = u ? u === ki ? r.length : l.length : 0);
  const T = u === ki && /\b(?:transform|all)(?:,|$)/.test(
    i(`${ki}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: _,
    hasTransform: T
  };
}
function Gu(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Ku(n) + Ku(e[i])));
}
function Ku(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Wu(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function hm(e, t, n) {
  const i = e[Qr];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const qs = /* @__PURE__ */ Symbol("_vod"), Oh = /* @__PURE__ */ Symbol("_vsh"), Va = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[qs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : pr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), pr(e, !0), i.enter(e)) : i.leave(e, () => {
      pr(e, !1);
    }) : pr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    pr(e, t);
  }
};
function pr(e, t) {
  e.style.display = t ? e[qs] : "none", e[Oh] = !t;
}
const Nh = /* @__PURE__ */ Symbol("");
function pm(e) {
  const t = va();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Ys(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Ys(t.ce, a) : dc(t.subTree, a), n(a);
  };
  Qf(() => {
    zf(i);
  }), Hi(() => {
    Ft(i, bn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), cs(() => a.disconnect());
  });
}
function dc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      dc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ys(e.el, t);
  else if (e.type === le)
    e.children.forEach((n) => dc(n, t));
  else if (e.type === Is) {
    let { el: n, anchor: i } = e;
    for (; n && (Ys(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Ys(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = gv(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Nh] = i;
  }
}
const vm = /(?:^|;)\s*display\s*:/;
function gm(e, t, n) {
  const i = e.style, a = et(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (et(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && Sr(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && Sr(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? bm(
        e,
        s,
        !et(t) && t ? t[s] : void 0,
        o
      ) || Sr(i, s, o) : Sr(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[Nh];
      s && (n += ";" + s), i.cssText = n, r = vm.test(n);
    }
  } else t && e.removeAttribute("style");
  qs in e && (e[qs] = r ? i.display : "", e[Oh] && (i.display = "none"));
}
const Cs = /\s*!important$/;
function Sr(e, t, n) {
  if (we(n))
    n.forEach((i) => Sr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Cs.test(n) ? e.setProperty(t, n.replace(Cs, ""), "important") : e.setProperty(t, n);
  else {
    const i = mm(e, t);
    Cs.test(n) ? e.setProperty(
      gi(i),
      n.replace(Cs, ""),
      "important"
    ) : e[i] = n;
  }
}
const qu = ["Webkit", "Moz", "ms"], El = {};
function mm(e, t) {
  const n = El[t];
  if (n)
    return n;
  let i = Mt(t);
  if (i !== "filter" && i in e)
    return El[t] = i;
  i = Ho(i);
  for (let a = 0; a < qu.length; a++) {
    const r = qu[a] + i;
    if (r in e)
      return El[t] = r;
  }
  return t;
}
function bm(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && et(i) && n === i;
}
const Yu = "http://www.w3.org/1999/xlink";
function Xu(e, t, n, i, a, r = hv(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Yu, t.slice(6, t.length)) : e.setAttributeNS(Yu, t, n) : n == null || r && !mf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : On(n) ? String(n) : n
  );
}
function Zu(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ah(n) : n);
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
    o === "boolean" ? n = mf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function ra(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function ym(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Ju = /* @__PURE__ */ Symbol("_vei");
function _m(e, t, n, i, a = null) {
  const r = e[Ju] || (e[Ju] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = Sm(t);
    if (i) {
      const d = r[t] = Am(
        i,
        a
      );
      ra(e, o, d, l);
    } else s && (ym(e, o, s, l), r[t] = void 0);
  }
}
const wm = /(Once|Passive|Capture)$/, Cm = /^on:?(?:Once|Passive|Capture)$/;
function Sm(e) {
  let t, n;
  for (; (n = e.match(wm)) && !Cm.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : gi(e.slice(2)), t];
}
let Tl = 0;
const Em = /* @__PURE__ */ Promise.resolve(), Tm = () => Tl || (Em.then(() => Tl = 0), Tl = Date.now());
function Am(e, t) {
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
        d && _n(
          d,
          t,
          5,
          o
        );
      }
    } else
      _n(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = Tm(), n;
}
const Qu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, km = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? hm(e, i, s) : t === "style" ? gm(e, n, i) : zo(t) ? Uo(t) || _m(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Om(e, t, i, s)) ? (Zu(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xu(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Nm(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !et(i))) ? Zu(e, Mt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Xu(e, t, i, s));
};
function Om(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Qu(t) && xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Qu(t) && et(n) ? !1 : t in e;
}
function Nm(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Mt(t);
  return Array.isArray(n) ? n.some((a) => Mt(a) === i) : Object.keys(n).some((a) => Mt(a) === i);
}
const Xs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return we(t) ? (n) => Rs(t, n) : t;
};
function xm(e) {
  e.target.composing = !0;
}
function ed(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const oa = /* @__PURE__ */ Symbol("_assign"), Ss = /* @__PURE__ */ Symbol("_initialValue");
function Al(e, t, n) {
  return t && (e = e.trim()), n && (e = jo(e)), e;
}
const ti = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[Ss] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ss] = e.defaultValue.replace(/\r\n?/g, `
`))), e[oa] = Xs(a);
    const r = i || a.props && a.props.type === "number";
    ra(e, t ? "change" : "input", (s) => {
      s.target.composing || e[oa](Al(e.value, n, r));
    }), (n || r) && ra(e, "change", () => {
      e.value = Al(e.value, n, r);
    }), t || (ra(e, "compositionstart", xm), ra(e, "compositionend", ed), ra(e, "change", ed));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[Ss];
    delete e[Ss], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[oa](Al(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[oa] = Xs(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? jo(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, fn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, ra(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? jo(Zs(l)) : Zs(l)
      ), r = e.multiple, s = r ? ha(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? we(s) ? a.slice() : a : s
      ];
      try {
        e[oa](s);
      } finally {
        Hn(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[oa] = Xs(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    td(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[oa] = Xs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Lm(t, n[1], n[0])) && td(e, t);
  }
};
function Lm(e, t, n) {
  if (!n || we(e)) return zi(e, t);
  if (ha(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function td(e, t) {
  const n = e.multiple, i = we(t);
  if (!(n && !i && !ha(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = Zs(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = vv(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (zi(Zs(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Zs(e) {
  return "_value" in e ? e._value : e.value;
}
const Rm = ["ctrl", "shift", "alt", "meta"], Im = {
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
  exact: (e, t) => Rm.some((n) => e[`${n}Key`] && !t.includes(n))
}, Xe = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = Im[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Pm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, jt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = gi(a.key);
    if (t.some(
      (s) => s === r || Pm[s] === r
    ))
      return e(a);
  }));
}, Dm = /* @__PURE__ */ ut({ patchProp: km }, rm);
let nd;
function Mm() {
  return nd || (nd = Bg(Dm));
}
const $m = ((...e) => {
  const t = Mm().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = zm(i);
    if (!a) return;
    const r = t._component;
    !xe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, Fm(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function Fm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function zm(e) {
  return et(e) ? document.querySelector(e) : e;
}
function Yc(e, t, n) {
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
function id(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Um(e) {
  if (Array.isArray(e)) return e;
}
function Bm(e, t) {
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
function Hm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jm(e, t) {
  return Um(e) || Bm(e, t) || Vm(e, t) || Hm();
}
function Vm(e, t) {
  if (e) {
    if (typeof e == "string") return id(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? id(e, t) : void 0;
  }
}
const xh = Object.entries, ad = Object.setPrototypeOf, Gm = Object.isFrozen, Km = Object.getPrototypeOf, Wm = Object.getOwnPropertyDescriptor;
let vt = Object.freeze, bt = Object.seal, Fa = Object.create, Lh = typeof Reflect < "u" && Reflect, fc = Lh.apply, hc = Lh.construct;
vt || (vt = function(t) {
  return t;
});
bt || (bt = function(t) {
  return t;
});
fc || (fc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
hc || (hc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const na = dt(Array.prototype.forEach), qm = dt(Array.prototype.lastIndexOf), rd = dt(Array.prototype.pop), vr = dt(Array.prototype.push), Ym = dt(Array.prototype.splice), Ga = Array.isArray, Er = dt(String.prototype.toLowerCase), kl = dt(String.prototype.toString), sd = dt(String.prototype.match), gr = dt(String.prototype.replace), od = dt(String.prototype.indexOf), Xm = dt(String.prototype.trim), Zm = dt(Number.prototype.toString), Jm = dt(Boolean.prototype.toString), ld = typeof BigInt > "u" ? null : dt(BigInt.prototype.toString), cd = typeof Symbol > "u" ? null : dt(Symbol.prototype.toString), Zt = dt(Object.prototype.hasOwnProperty), mr = dt(Object.prototype.toString), xt = dt(RegExp.prototype.test), Qi = Qm(TypeError);
function dt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return fc(e, t, i);
  };
}
function Qm(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return hc(e, n);
  };
}
function Be(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Er;
  if (ad && ad(e, null), !Ga(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Gm(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function eb(e) {
  for (let t = 0; t < e.length; t++)
    Zt(e, t) || (e[t] = null);
  return e;
}
function rn(e) {
  const t = Fa(null);
  for (const i of xh(e)) {
    var n = jm(i, 2);
    const a = n[0], r = n[1];
    Zt(e, a) && (Ga(r) ? t[a] = eb(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = rn(r) : t[a] = r);
  }
  return t;
}
function tb(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Zm(e);
    case "boolean":
      return Jm(e);
    case "bigint":
      return ld ? ld(e) : "0";
    case "symbol":
      return cd ? cd(e) : "Symbol()";
    case "undefined":
      return mr(e);
    case "function":
    case "object": {
      if (e === null)
        return mr(e);
      const t = e, n = En(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : mr(i);
      }
      return mr(e);
    }
    default:
      return mr(e);
  }
}
function En(e, t) {
  for (; e !== null; ) {
    const i = Wm(e, t);
    if (i) {
      if (i.get)
        return dt(i.get);
      if (typeof i.value == "function")
        return dt(i.value);
    }
    e = Km(e);
  }
  function n() {
    return null;
  }
  return n;
}
function nb(e) {
  try {
    return xt(e, ""), !0;
  } catch {
    return !1;
  }
}
const ud = vt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ol = vt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Nl = vt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ib = vt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xl = vt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ab = vt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), dd = vt(["#text"]), fd = vt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ll = vt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), hd = vt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Es = vt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), rb = bt(/{{[\w\W]*|^[\w\W]*}}/g), sb = bt(/<%[\w\W]*|^[\w\W]*%>/g), ob = bt(/\${[\w\W]*/g), lb = bt(/^data-[\-\w.\u00B7-\uFFFF]+$/), cb = bt(/^aria-[\-\w]+$/), pd = bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ub = bt(/^(?:\w+script|data):/i), db = bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), fb = bt(/^html$/i), hb = bt(/^[a-z][.\w]*(-[.\w]+)+$/i), vd = bt(/<[/\w!]/g), gd = bt(/<[/\w]/g), pb = bt(/<\/no(script|embed|frames)/i), vb = bt(/\/>/i), an = {
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
}, Rh = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], gb = vt(Be({}, Rh)), mb = (function() {
  const e = {};
  return na(Rh, (t) => {
    e[t] = bt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), vt(e);
})(), bb = function() {
  return typeof window > "u" ? null : window;
}, yb = function(t, n) {
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
}, md = function() {
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
}, Oi = function(t, n, i, a) {
  return Zt(t, n) && Ga(t[n]) ? Be(a.base ? rn(a.base) : {}, t[n], a.transform) : i;
}, Rl = function(t, n, i) {
  const a = Zt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? rn(a) : i();
};
function Ih() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bb();
  const t = (Z) => Ih(Z);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== an.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, _ = o.prototype, T = En(_, "cloneNode"), O = En(_, "remove"), A = En(_, "nextSibling"), x = En(_, "childNodes"), P = En(_, "parentNode"), I = En(_, "shadowRoot"), K = En(_, "attributes"), M = s && s.prototype ? En(s.prototype, "nodeType") : null, oe = s && s.prototype ? En(s.prototype, "nodeName") : null, de = s && s.prototype ? En(s.prototype, "ownerDocument") : null, te = function(y) {
    return M ? M(y) : y.nodeType;
  }, ve = function(y) {
    return oe ? oe(y) : y.nodeName;
  };
  if (typeof r == "function") {
    const Z = n.createElement("template");
    Z.content && Z.content.ownerDocument && (n = Z.content.ownerDocument);
  }
  let B, F = "", ue, J = !1, ne = 0;
  const D = function() {
    if (ne > 0)
      throw Qi('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $ = function(y) {
    D(), ne++;
    try {
      return B.createHTML(y);
    } finally {
      ne--;
    }
  }, X = function(y) {
    D(), ne++;
    try {
      return B.createScriptURL(y);
    } finally {
      ne--;
    }
  }, re = function() {
    return J || (ue = yb(h, a), J = !0), ue;
  }, ie = n, he = ie.implementation, ce = ie.createNodeIterator, Ce = ie.createDocumentFragment, me = ie.getElementsByTagName, je = i.importNode;
  let be = md();
  t.isSupported = typeof xh == "function" && typeof P == "function" && he && he.createHTMLDocument !== void 0;
  const rt = rb, ot = sb, ft = ob, yt = lb, tt = cb, Jt = ub, U = db, v = hb;
  let C = pd, k = null;
  const R = Be({}, [...ud, ...Ol, ...Nl, ...xl, ...dd]);
  let N = null;
  const z = Be({}, [...fd, ...Ll, ...hd, ...Es]);
  let q = Object.seal(Fa(null, {
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
  })), W = null, Q = null;
  const V = Object.seal(Fa(null, {
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
  let _e = !0, se = !0, pe = !1, Se = !0, Ne = !1, Ie = !0, Pe = !1, Je = !1, nt = null, gt = null, kt = !1, Ot = !1, wn = !1, lt = !1, Nt = !0, bi = !1;
  const yi = "user-content-";
  let ma = !0, ba = !1, _i = {}, wi = null;
  const Xa = Be({}, [
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
  let Ut = null;
  const hs = Be({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ci = null;
  const ps = Be({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Kn = "http://www.w3.org/1998/Math/MathML", ya = "http://www.w3.org/2000/svg", Gt = "http://www.w3.org/1999/xhtml";
  let Cn = Gt, _a = !1, wa = null;
  const Za = Be({}, [Kn, ya, Gt], kl), Kt = vt(["mi", "mo", "mn", "ms", "mtext"]);
  let Si = Be({}, Kt);
  const Ja = vt(["annotation-xml"]);
  let Qa = Be({}, Ja);
  const ll = Be({}, ["title", "style", "font", "a", "script"]);
  let Gi = null;
  const Te = ["application/xhtml+xml", "text/html"], Wn = "text/html";
  let $e = null, Wt = null;
  const Qt = n.createElement("form"), ht = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Ca = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Wt && Wt === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = rn(y), Gi = // eslint-disable-next-line unicorn/prefer-includes
    Te.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? Wn : y.PARSER_MEDIA_TYPE, $e = Gi === "application/xhtml+xml" ? kl : Er, k = Oi(y, "ALLOWED_TAGS", R, {
      transform: $e
    }), N = Oi(y, "ALLOWED_ATTR", z, {
      transform: $e
    }), wa = Oi(y, "ALLOWED_NAMESPACES", Za, {
      transform: kl
    }), Ci = Oi(y, "ADD_URI_SAFE_ATTR", ps, {
      transform: $e,
      base: ps
    }), Ut = Oi(y, "ADD_DATA_URI_TAGS", hs, {
      transform: $e,
      base: hs
    }), wi = Oi(y, "FORBID_CONTENTS", Xa, {
      transform: $e
    }), W = Oi(y, "FORBID_TAGS", rn({}), {
      transform: $e
    }), Q = Oi(y, "FORBID_ATTR", rn({}), {
      transform: $e
    }), _i = Zt(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? rn(y.USE_PROFILES) : y.USE_PROFILES : !1, _e = y.ALLOW_ARIA_ATTR !== !1, se = y.ALLOW_DATA_ATTR !== !1, pe = y.ALLOW_UNKNOWN_PROTOCOLS || !1, Se = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ne = y.SAFE_FOR_TEMPLATES || !1, Ie = y.SAFE_FOR_XML !== !1, Pe = y.WHOLE_DOCUMENT || !1, Ot = y.RETURN_DOM || !1, wn = y.RETURN_DOM_FRAGMENT || !1, lt = y.RETURN_TRUSTED_TYPE || !1, kt = y.FORCE_BODY || !1, Nt = y.SANITIZE_DOM !== !1, bi = y.SANITIZE_NAMED_PROPS || !1, ma = y.KEEP_CONTENT !== !1, ba = y.IN_PLACE || !1, C = nb(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : pd, Cn = typeof y.NAMESPACE == "string" ? y.NAMESPACE : Gt, Si = Rl(
      y,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Be({}, Kt)
      // Default built-in map
    ), Qa = Rl(
      y,
      "HTML_INTEGRATION_POINTS",
      () => Be({}, Ja)
      // Default built-in map
    );
    const L = Rl(y, "CUSTOM_ELEMENT_HANDLING", () => Fa(null));
    if (q = Fa(null), Zt(L, "tagNameCheck") && ht(L.tagNameCheck) && (q.tagNameCheck = L.tagNameCheck), Zt(L, "attributeNameCheck") && ht(L.attributeNameCheck) && (q.attributeNameCheck = L.attributeNameCheck), Zt(L, "allowCustomizedBuiltInElements") && typeof L.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = L.allowCustomizedBuiltInElements), bt(q), Ne && (se = !1), wn && (Ot = !0), _i && (k = Be({}, dd), N = Fa(null), _i.html === !0 && (Be(k, ud), Be(N, fd)), _i.svg === !0 && (Be(k, Ol), Be(N, Ll), Be(N, Es)), _i.svgFilters === !0 && (Be(k, Nl), Be(N, Ll), Be(N, Es)), _i.mathMl === !0 && (Be(k, xl), Be(N, hd), Be(N, Es))), V.tagCheck = null, V.attributeCheck = null, Zt(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? V.tagCheck = y.ADD_TAGS : Ga(y.ADD_TAGS) && (k === R && (k = rn(k)), Be(k, y.ADD_TAGS, $e))), Zt(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? V.attributeCheck = y.ADD_ATTR : Ga(y.ADD_ATTR) && (N === z && (N = rn(N)), Be(N, y.ADD_ATTR, $e))), Zt(y, "ADD_FORBID_CONTENTS") && Ga(y.ADD_FORBID_CONTENTS) && (wi === Xa && (wi = rn(wi)), Be(wi, y.ADD_FORBID_CONTENTS, $e)), ma && (k["#text"] = !0), Pe && Be(k, ["html", "head", "body"]), k.table && (Be(k, ["tbody"]), delete W.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Qi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Qi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const G = B;
      B = y.TRUSTED_TYPES_POLICY;
      try {
        F = $("");
      } catch (ae) {
        throw B = G, ae;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (B = void 0, F = "") : (B === void 0 && (B = re()), B && typeof F == "string" && (F = $("")));
    vt && vt(y), Wt = y;
  }, xn = Be({}, [...Ol, ...Nl, ...ib]), Ln = Be({}, [...xl, ...ab]), er = function(y, L, G) {
    return L.namespaceURI === Gt ? y === "svg" : L.namespaceURI === Kn ? y === "svg" && (G === "annotation-xml" || Si[G]) : !!xn[y];
  }, Sn = function(y, L, G) {
    return L.namespaceURI === Gt ? y === "math" : L.namespaceURI === ya ? y === "math" && Qa[G] : !!Ln[y];
  }, Sa = function(y, L, G) {
    return L.namespaceURI === ya && !Qa[G] || L.namespaceURI === Kn && !Si[G] ? !1 : !Ln[y] && (ll[y] || !xn[y]);
  }, tr = function(y) {
    let L = P(y);
    (!L || !L.tagName) && (L = {
      namespaceURI: Cn,
      tagName: "template"
    });
    const G = Er(y.tagName), ae = Er(L.tagName);
    return wa[y.namespaceURI] ? y.namespaceURI === ya ? er(G, L, ae) : y.namespaceURI === Kn ? Sn(G, L, ae) : y.namespaceURI === Gt ? Sa(G, L, ae) : !!(Gi === "application/xhtml+xml" && wa[y.namespaceURI]) : !1;
  }, qt = function(y) {
    vr(t.removed, {
      element: y
    });
    try {
      P(y).removeChild(y);
    } catch {
      if (O(y), !P(y))
        throw Qi("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ea = function(y, L, G) {
    try {
      y.removeAttributeNode(L);
    } catch {
      try {
        y.removeAttribute(G);
      } catch {
      }
    }
  }, en = function(y) {
    qn(y);
    const L = x(y);
    if (L) {
      const ae = [];
      na(L, (fe) => {
        vr(ae, fe);
      }), na(ae, (fe) => {
        try {
          O(fe);
        } catch {
        }
      });
    }
    const G = K(y);
    if (G)
      for (let ae = G.length - 1; ae >= 0; --ae) {
        const fe = G[ae], Ae = fe && fe.name;
        typeof Ae == "string" && Ea(y, fe, Ae);
      }
  }, tn = function(y, L, G) {
    if (!G)
      try {
        G = L.getAttributeNode(y);
      } catch {
        G = null;
      }
    vr(t.removed, {
      attribute: G || null,
      from: L
    });
    try {
      G ? L.removeAttributeNode(G) : L.removeAttribute(y);
    } catch {
      try {
        L.removeAttribute(y);
      } catch {
      }
    }
    if (y === "is")
      if (Ot || wn)
        try {
          qt(L);
        } catch {
        }
      else
        try {
          L.setAttribute(y, "");
        } catch {
        }
  }, Ta = function(y) {
    const L = K(y);
    if (L)
      for (let G = L.length - 1; G >= 0; --G) {
        const ae = L[G], fe = ae && ae.name;
        typeof fe != "string" || N[$e(fe)] || Ea(y, ae, fe);
      }
  }, qn = function(y) {
    const L = [y];
    for (; L.length > 0; ) {
      const G = L.pop();
      te(G) === an.element && Ta(G);
      const fe = x(G);
      if (fe)
        for (let Ae = fe.length - 1; Ae >= 0; --Ae)
          L.push(fe[Ae]);
    }
  }, vs = function(y, L) {
    return Ie ? y === "patchsrc" ? !0 : y === "for" && L !== "label" && L !== "output" : !1;
  }, cl = function(y) {
    if (!Ie)
      return;
    const L = [y];
    for (; L.length > 0; ) {
      const G = L.pop(), ae = te(G);
      if (ae === an.processingInstruction || ae === an.comment && xt(gd, G.data)) {
        try {
          O(G);
        } catch {
        }
        continue;
      }
      if (ae === an.element) {
        const Ae = G, Ze = $e(ve(G));
        try {
          Ae.hasAttribute && Ae.hasAttribute("patchsrc") && Ae.removeAttribute("patchsrc"), Ae.hasAttribute && Ae.hasAttribute("for") && vs("for", Ze) && Ae.removeAttribute("for");
        } catch {
        }
      }
      const fe = x(G);
      if (fe)
        for (let Ae = fe.length - 1; Ae >= 0; --Ae)
          L.push(fe[Ae]);
    }
  }, Ki = function(y) {
    let L = null, G = null;
    if (kt)
      y = "<remove></remove>" + y;
    else {
      const Ae = sd(y, /^[\r\n\t ]+/);
      G = Ae && Ae[0];
    }
    Gi === "application/xhtml+xml" && Cn === Gt && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const ae = B ? $(y) : y;
    if (Cn === Gt)
      try {
        L = new u().parseFromString(ae, Gi);
      } catch {
      }
    if (!L || !L.documentElement) {
      L = he.createDocument(Cn, "template", null);
      try {
        L.documentElement.innerHTML = _a ? F : ae;
      } catch {
      }
    }
    const fe = L.body || L.documentElement;
    return y && G && fe.insertBefore(n.createTextNode(G), fe.childNodes[0] || null), Cn === Gt ? me.call(L, Pe ? "html" : "body")[0] : Pe ? L.documentElement : fe;
  }, nr = function(y) {
    const L = de ? de(y) : y.ownerDocument;
    return ce.call(
      L || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Wi = function(y) {
    return y = gr(y, rt, " "), y = gr(y, ot, " "), y = gr(y, ft, " "), y;
  }, ir = function(y) {
    var L;
    y.normalize();
    const G = de ? de(y) : y.ownerDocument, ae = ce.call(
      G || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let fe = ae.nextNode();
    for (; fe; )
      fe.data = Wi(fe.data), fe = ae.nextNode();
    const Ae = (L = y.querySelectorAll) === null || L === void 0 ? void 0 : L.call(y, "template");
    Ae && na(Ae, (Ze) => {
      Ei(Ze.content) && ir(Ze.content);
    });
  }, Aa = function(y) {
    const L = oe ? oe(y) : null;
    return typeof L != "string" || $e(L) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    y.attributes !== K(y) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    y.nodeType !== M(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    y.childNodes !== x(y);
  }, Ei = function(y) {
    if (!M || typeof y != "object" || y === null)
      return !1;
    try {
      return M(y) === an.documentFragment;
    } catch {
      return !1;
    }
  }, Yt = function(y) {
    if (!M || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof M(y) == "number";
    } catch {
      return !1;
    }
  };
  function cn(Z, y, L) {
    Z.length !== 0 && na(Z, (G) => {
      G.call(t, y, L, Wt);
    });
  }
  const ar = function(y, L) {
    return !!(Ie && y.hasChildNodes() && !Yt(y.firstElementChild) && xt(vd, y.textContent) && xt(vd, y.innerHTML) || Ie && y.namespaceURI === Gt && gb[L] && (Yt(y.firstElementChild) || typeof y.textContent == "string" && xt(mb[L], y.textContent)) || y.nodeType === an.processingInstruction || Ie && y.nodeType === an.comment && xt(gd, y.data));
  }, Yn = function(y, L) {
    if (y instanceof RegExp)
      return xt(y, L);
    if (y instanceof Function) {
      for (var G = arguments.length, ae = new Array(G > 2 ? G - 2 : 0), fe = 2; fe < G; fe++)
        ae[fe - 2] = arguments[fe];
      return !!y(L, ...ae);
    }
    return !1;
  }, Xn = function(y, L, G) {
    if (!W[L] && qi(L) && Yn(q.tagNameCheck, L))
      return !1;
    if (ma && !wi[L]) {
      const ae = P(y), fe = x(y);
      if (fe && ae) {
        const Ae = fe.length;
        for (let Ze = Ae - 1; Ze >= 0; --Ze) {
          const Ve = y === G ? T(fe[Ze], !0) : fe[Ze];
          ae.insertBefore(Ve, A(y));
        }
      }
    }
    return qt(y), !0;
  }, Rn = function(y, L, G, ae) {
    return y.length === 0 ? L : L === G || L === ae ? rn(L) : L;
  }, rr = function(y, L) {
    return y === L || P(y) !== null ? !1 : (ba && qn(y), !0);
  }, sr = function(y, L) {
    if (cn(be.beforeSanitizeElements, y, null), rr(y, L))
      return !0;
    if (Aa(y))
      return qt(y), !0;
    const G = $e(ve(y));
    if (k = Rn(be.uponSanitizeElement, k, R, nt), cn(be.uponSanitizeElement, y, {
      tagName: G,
      allowedTags: k
    }), rr(y, L))
      return !0;
    if (ar(y, G))
      return qt(y), !0;
    if (W[G] || !(V.tagCheck instanceof Function && V.tagCheck(G)) && !k[G]) {
      const fe = Xn(y, G, L);
      return fe === !1 && cn(be.afterSanitizeElements, y, null), fe;
    }
    if (te(y) === an.element && !tr(y) || (G === "noscript" || G === "noembed" || G === "noframes") && xt(pb, y.innerHTML))
      return qt(y), !0;
    if (Ne && y.nodeType === an.text) {
      const fe = Wi(y.textContent);
      y.textContent !== fe && (vr(t.removed, {
        element: y.cloneNode()
      }), y.textContent = fe);
    }
    return cn(be.afterSanitizeElements, y, null), !1;
  }, Ti = function(y, L, G) {
    if (Q[L] || vs(L, y) || Nt && (L === "id" || L === "name") && (G in n || G in Qt))
      return !1;
    const ae = N[L] || V.attributeCheck instanceof Function && V.attributeCheck(L, y);
    return se && xt(yt, L) || _e && xt(tt, L) ? !0 : ae ? Ci[L] || xt(C, gr(G, U, "")) || (L === "src" || L === "xlink:href" || L === "href") && y !== "script" && od(G, "data:") === 0 && Ut[y] || pe && !xt(Jt, gr(G, U, "")) ? !0 : !G : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      qi(y) && Yn(q.tagNameCheck, y) && Yn(q.attributeNameCheck, L, y) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      L === "is" && q.allowCustomizedBuiltInElements && Yn(q.tagNameCheck, G)
    );
  }, un = Be({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), qi = function(y) {
    return !un[Er(y)] && xt(v, y);
  }, gs = function(y, L, G, ae) {
    if (B && typeof h == "object" && typeof h.getAttributeType == "function" && !G)
      switch (h.getAttributeType(y, L)) {
        case "TrustedHTML":
          return $(ae);
        case "TrustedScriptURL":
          return X(ae);
      }
    return ae;
  }, ul = function(y, L, G, ae) {
    try {
      G ? y.setAttributeNS(G, L, ae) : y.setAttribute(L, ae), Aa(y) ? qt(y) : rd(t.removed);
    } catch {
      tn(L, y);
    }
  }, ka = function(y) {
    cn(be.beforeSanitizeAttributes, y, null);
    const L = y.attributes;
    if (!L || Aa(y))
      return;
    N = Rn(be.uponSanitizeAttribute, N, z, gt);
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let ae = L.length;
    const fe = $e(y.nodeName);
    for (; ae--; ) {
      const Ae = L[ae], Ze = Ae.name, Ve = Ae.namespaceURI, _t = Ae.value, pt = $e(Ze), Oa = _t;
      let wt = Ze === "value" ? Oa : Xm(Oa);
      if (G.attrName = pt, G.attrValue = wt, G.keepAttr = !0, G.forceKeepAttr = void 0, cn(be.uponSanitizeAttribute, y, G), wt = G.attrValue, bi && (pt === "id" || pt === "name") && od(wt, yi) !== 0 && (tn(Ze, y, Ae), wt = yi + wt), Ie && xt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, wt)) {
        tn(Ze, y, Ae);
        continue;
      }
      if (pt === "attributename" && sd(wt, "href")) {
        tn(Ze, y, Ae);
        continue;
      }
      if (!G.forceKeepAttr) {
        if (!G.keepAttr) {
          tn(Ze, y, Ae);
          continue;
        }
        if (!Se && xt(vb, wt)) {
          tn(Ze, y, Ae);
          continue;
        }
        if (Ne && (wt = Wi(wt)), !Ti(fe, pt, wt)) {
          tn(Ze, y, Ae);
          continue;
        }
        wt = gs(fe, pt, Ve, wt), wt !== Oa && ul(y, Ze, Ve, wt);
      }
    }
    cn(be.afterSanitizeAttributes, y, null);
  }, In = function(y) {
    let L = null;
    const G = nr(y);
    for (cn(be.beforeSanitizeShadowDOM, y, null); L = G.nextNode(); )
      if (cn(be.uponSanitizeShadowNode, L, null), sr(L, y), ka(L), Ei(L.content) && In(L.content), te(L) === an.element) {
        const ae = I(L);
        Ei(ae) && (Ai(ae), In(ae));
      }
    cn(be.afterSanitizeShadowDOM, y, null);
  }, Ai = function(y) {
    const L = [{
      node: y,
      shadow: null
    }];
    for (; L.length > 0; ) {
      const G = L.pop();
      if (G.shadow) {
        In(G.shadow);
        continue;
      }
      const ae = G.node, Ae = te(ae) === an.element, Ze = x(ae);
      if (Ze)
        for (let Ve = Ze.length - 1; Ve >= 0; --Ve)
          L.push({
            node: Ze[Ve],
            shadow: null
          });
      if (Ae) {
        const Ve = oe ? oe(ae) : null;
        if (typeof Ve == "string" && $e(Ve) === "template") {
          const _t = ae.content;
          Ei(_t) && L.push({
            node: _t,
            shadow: null
          });
        }
      }
      if (Ae) {
        const Ve = I(ae);
        Ei(Ve) && L.push({
          node: null,
          shadow: Ve
        }, {
          node: Ve,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(Z) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, L = null, G = null, ae = null, fe = null;
    if (_a = !Z, _a && (Z = "<!-->"), typeof Z != "string" && !Yt(Z) && (Z = tb(Z), typeof Z != "string"))
      throw Qi("dirty is not a string, aborting");
    if (!t.isSupported)
      return Z;
    Je ? (k = nt, N = gt) : Ca(y), (be.uponSanitizeElement.length > 0 || be.uponSanitizeAttribute.length > 0) && (k = rn(k)), be.uponSanitizeAttribute.length > 0 && (N = rn(N)), t.removed = [];
    const Ae = ba && typeof Z != "string" && Yt(Z);
    if (Ae) {
      cl(Z);
      const _t = ve(Z);
      if (typeof _t == "string") {
        const pt = $e(_t);
        if (!k[pt] || W[pt])
          throw en(Z), Qi("root node is forbidden and cannot be sanitized in-place");
      }
      if (Aa(Z))
        throw en(Z), Qi("root node is clobbered and cannot be sanitized in-place");
      try {
        Ai(Z);
      } catch (pt) {
        throw en(Z), pt;
      }
    } else if (Yt(Z))
      L = Ki("<!---->"), G = L.ownerDocument.importNode(Z, !0), G.nodeType === an.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? L = G : L.appendChild(G), Ai(G);
    else {
      if (!Ot && !Ne && !Pe && // eslint-disable-next-line unicorn/prefer-includes
      Z.indexOf("<") === -1)
        return B && lt ? $(Z) : Z;
      if (L = Ki(Z), !L)
        return Ot ? null : lt ? F : "";
    }
    L && kt && qt(L.firstChild);
    const Ze = Ae ? Z : L;
    try {
      const _t = nr(Ze);
      for (; ae = _t.nextNode(); )
        sr(ae, Ze), ka(ae), Ei(ae.content) && In(ae.content);
    } catch (_t) {
      throw Ae && (en(Z), na(t.removed, (pt) => {
        pt.element && qn(pt.element);
      })), _t;
    }
    if (Ae)
      return na(t.removed, (_t) => {
        _t.element && qn(_t.element);
      }), Ne && ir(Z), Z;
    if (Ot) {
      if (Ne && ir(L), wn)
        for (fe = Ce.call(L.ownerDocument); L.firstChild; )
          fe.appendChild(L.firstChild);
      else
        fe = L;
      return (N.shadowroot || N.shadowrootmode) && (fe = je.call(i, fe, !0)), fe;
    }
    let Ve = Pe ? L.outerHTML : L.innerHTML;
    return Pe && k["!doctype"] && L.ownerDocument && L.ownerDocument.doctype && L.ownerDocument.doctype.name && xt(fb, L.ownerDocument.doctype.name) && (Ve = "<!DOCTYPE " + L.ownerDocument.doctype.name + `>
` + Ve), Ne && (Ve = Wi(Ve)), B && lt ? $(Ve) : Ve;
  }, t.setConfig = function() {
    let Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ca(Z), Je = !0, nt = k, gt = N;
  }, t.clearConfig = function() {
    Wt = null, Je = !1, nt = null, gt = null, B = ue, F = "";
  }, t.isValidAttribute = function(Z, y, L) {
    Wt || Ca({});
    const G = $e(Z), ae = $e(y);
    return Ti(G, ae, L);
  }, t.addHook = function(Z, y) {
    typeof y == "function" && Zt(be, Z) && vr(be[Z], y);
  }, t.removeHook = function(Z, y) {
    if (Zt(be, Z)) {
      if (y !== void 0) {
        const L = qm(be[Z], y);
        return L === -1 ? void 0 : Ym(be[Z], L, 1)[0];
      }
      return rd(be[Z]);
    }
  }, t.removeHooks = function(Z) {
    Zt(be, Z) && (be[Z] = []);
  }, t.removeAllHooks = function() {
    be = md();
  }, t;
}
var Ph = Ih();
function Xc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Il, bd;
function _b() {
  if (bd) return Il;
  bd = 1;
  var e = /["'&<>]/;
  Il = t;
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
  return Il;
}
var wb = _b();
const Js = /* @__PURE__ */ Xc(wb);
function Cb() {
  return globalThis._nc_l10n_locale;
}
function Sb() {
  return Cb().replaceAll(/_/g, "-");
}
function tl() {
  return globalThis._nc_l10n_language;
}
function Eb(e) {
  const t = tl();
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
function Dh(e) {
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
  }, l = (A) => A, d = (o.sanitize ? Ph.sanitize : l) || l, u = o.escape ? Js : l, h = (A) => typeof A == "string" || typeof A == "number", _ = (A, x, P) => A.replace(/%n/g, "" + P).replace(/{([^{}]*)}/g, (I, K) => {
    if (x === void 0 || !(K in x))
      return u(I);
    const M = x[K];
    return h(M) ? u(`${M}`) : typeof M == "object" && h(M.value) ? (M.escape !== !1 ? Js : l)(`${M.value}`) : u(I);
  });
  let O = (a?.bundle ?? Dh(e)).translations[t] || t;
  return O = Array.isArray(O) ? O[0] : O, d(typeof r == "object" || s !== void 0 ? _(
    O,
    r,
    s
  ) : O);
}
function Mn(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? Dh(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return m(e, d[u], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function Tb(e, t = tl()) {
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
class Qs {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Qs.GLOBAL_SCOPE_PERSISTENT : Qs.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class Ab {
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
    return new Qs(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Mh(e) {
  return new Ab(e);
}
function kb() {
  try {
    return Yc("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Pl, yd;
function $h() {
  if (yd) return Pl;
  yd = 1;
  var e = {};
  return Pl = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Pl;
}
var Dl, _d;
function Fh() {
  if (_d) return Dl;
  _d = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Dl = {
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
  }, Dl;
}
var Ts = { exports: {} }, wd;
function Ob() {
  return wd || (wd = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = Fh(), r = $h();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], d = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const _ = "[a-zA-Z0-9-]", T = [
      ["\\s", 1],
      ["\\d", a],
      [_, i]
    ], O = (x) => {
      for (const [P, I] of T)
        x = x.split(`${P}*`).join(`${P}{0,${I}}`).split(`${P}+`).join(`${P}{1,${I}}`);
      return x;
    }, A = (x, P, I) => {
      const K = O(P), M = h++;
      r(x, M, P), u[x] = M, l[M] = P, d[M] = K, s[M] = new RegExp(P, I ? "g" : void 0), o[M] = new RegExp(K, I ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${_}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${_}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Ts, Ts.exports)), Ts.exports;
}
var Ml, Cd;
function Nb() {
  if (Cd) return Ml;
  Cd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Ml = (i) => i ? typeof i != "object" ? e : i : t, Ml;
}
var $l, Sd;
function xb() {
  if (Sd) return $l;
  Sd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return $l = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, $l;
}
var Fl, Ed;
function zh() {
  if (Ed) return Fl;
  Ed = 1;
  const e = $h(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = Fh(), { safeRe: i, t: a } = Ob(), r = Nb(), { compareIdentifiers: s } = xb(), o = (d, u) => {
    const h = u.split(".");
    if (h.length > d.length)
      return !1;
    for (let _ = 0; _ < h.length; _++)
      if (s(d[_], h[_]) !== 0)
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
      const _ = u.trim().match(h.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!_)
        throw new TypeError(`Invalid Version: ${u}`);
      if (this.raw = u, this.major = +_[1], this.minor = +_[2], this.patch = +_[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      _[4] ? this.prerelease = _[4].split(".").map((T) => {
        if (/^[0-9]+$/.test(T)) {
          const O = +T;
          if (O >= 0 && O < n)
            return O;
        }
        return T;
      }) : this.prerelease = [], this.build = _[5] ? _[5].split(".") : [], this.format();
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
        const _ = this.prerelease[h], T = u.prerelease[h];
        if (e("prerelease compare", h, _, T), _ === void 0 && T === void 0)
          return 0;
        if (T === void 0)
          return 1;
        if (_ === void 0)
          return -1;
        if (_ === T)
          continue;
        return s(_, T);
      } while (++h);
    }
    compareBuild(u) {
      u instanceof l || (u = new l(u, this.options));
      let h = 0;
      do {
        const _ = this.build[h], T = u.build[h];
        if (e("build compare", h, _, T), _ === void 0 && T === void 0)
          return 0;
        if (T === void 0)
          return 1;
        if (_ === void 0)
          return -1;
        if (_ === T)
          continue;
        return s(_, T);
      } while (++h);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(u, h, _) {
      if (u.startsWith("pre")) {
        if (!h && _ === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (h) {
          const T = `-${h}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!T || T[1] !== h)
            throw new Error(`invalid identifier: ${h}`);
        }
      }
      switch (u) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", h, _);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", h, _);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", h, _), this.inc("pre", h, _);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", h, _), this.inc("pre", h, _);
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
          const T = Number(_) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [T];
          else {
            let O = this.prerelease.length;
            for (; --O >= 0; )
              typeof this.prerelease[O] == "number" && (this.prerelease[O]++, O = -2);
            if (O === -1) {
              if (h === this.prerelease.join(".") && _ === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(T);
            }
          }
          if (h) {
            let O = [h, T];
            if (_ === !1 && (O = [h]), o(this.prerelease, h)) {
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
  return Fl = l, Fl;
}
var zl, Td;
function Lb() {
  if (Td) return zl;
  Td = 1;
  const e = zh();
  return zl = (n, i) => new e(n, i).major, zl;
}
var Rb = Lb();
const Ad = /* @__PURE__ */ Xc(Rb);
var Ul, kd;
function Ib() {
  if (kd) return Ul;
  kd = 1;
  const e = zh();
  return Ul = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Ul;
}
var Bl, Od;
function Pb() {
  if (Od) return Bl;
  Od = 1;
  const e = Ib();
  return Bl = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Bl;
}
var Db = Pb();
const Mb = /* @__PURE__ */ Xc(Db);
class $b {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Mb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Ad(t.getVersion()) !== Ad(this.getVersion()) && console.warn(
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
class Fb {
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
let br = null;
function Zc() {
  return br !== null ? br : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? br = new $b(window._nc_event_bus) : br = window._nc_event_bus = new Fb(), br);
}
function Uh(e, t) {
  Zc().subscribe(e, t);
}
function zb(e, t) {
  Zc().unsubscribe(e, t);
}
function di(e, ...t) {
  Zc().emit(e, ...t);
}
const Bh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ub = Object.prototype.toString, Bb = (e) => Ub.call(e) === "[object Object]", Ia = () => {
}, Hb = /* @__PURE__ */ jb();
function jb() {
  var e, t, n;
  return Bh && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Hl(e) {
  return Array.isArray(e) ? e : [e];
}
function Vb(e, t, n) {
  return Ft(e, t, {
    ...n,
    immediate: !0
  });
}
const Hh = Bh ? window : void 0;
function Tr(e) {
  var t;
  const n = ci(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ka(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = Y(() => {
    const i = Hl(ci(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Vb(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Tr(r))) !== null && i !== void 0 ? i : [Hh].filter((r) => r != null),
      Hl(ci(n.value ? e[1] : e[0])),
      Hl(g(n.value ? e[2] : e[1])),
      ci(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = Bb(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((_) => r.map((T) => t(h, _, T, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let Nd = !1;
function xd(e, t, n = {}) {
  const { window: i = Hh, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Ia,
    cancel: Ia,
    trigger: Ia
  } : Ia;
  if (Hb && !Nd) {
    Nd = !0;
    const x = { passive: !0 };
    Array.from(i.document.body.children).forEach((P) => P.addEventListener("click", Ia, x)), i.document.documentElement.addEventListener("click", Ia, x);
  }
  let l = !0;
  const d = (x) => ci(a).some((P) => {
    if (typeof P == "string") return Array.from(i.document.querySelectorAll(P)).some((I) => I === x.target || x.composedPath().includes(I));
    {
      const I = Tr(P);
      return I && (x.target === I || x.composedPath().includes(I));
    }
  });
  function u(x) {
    const P = ci(x);
    return P && P.$.subTree.shapeFlag === 16;
  }
  function h(x, P) {
    const I = ci(x), K = I.$.subTree && I.$.subTree.children;
    return K == null || !Array.isArray(K) ? !1 : K.some((M) => M.el === P.target || P.composedPath().includes(M.el));
  }
  const _ = (x) => {
    const P = Tr(e);
    if (x.target != null && !(!(P instanceof Element) && u(e) && h(e, x)) && !(!P || P === x.target || x.composedPath().includes(P))) {
      if ("detail" in x && x.detail === 0 && (l = !d(x)), !l) {
        l = !0;
        return;
      }
      t(x);
    }
  };
  let T = !1;
  const O = [
    Ka(i, "click", (x) => {
      T || (T = !0, setTimeout(() => {
        T = !1;
      }, 0), _(x));
    }, {
      passive: !0,
      capture: r
    }),
    Ka(i, "pointerdown", (x) => {
      const P = Tr(e);
      l = !d(x) && !!(P && !x.composedPath().includes(P));
    }, { passive: !0 }),
    s && Ka(i, "blur", (x) => {
      setTimeout(() => {
        const P = Tr(e);
        let I = i.document.activeElement;
        for (; I?.shadowRoot; ) I = I.shadowRoot.activeElement;
        I?.tagName === "IFRAME" && !P?.contains(i.document.activeElement) && t(x);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => O.forEach((x) => x());
  return o ? {
    stop: A,
    cancel: () => {
      l = !1;
    },
    trigger: (x) => {
      l = !0, _(x), l = !1;
    }
  } : A;
}
function Gb(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), d = Y(() => o.x - l.x), u = Y(() => o.y - l.y), { max: h, abs: _ } = Math, T = Y(() => h(_(d.value), _(u.value)) >= n), O = /* @__PURE__ */ Pf(!1), A = Y(() => T.value ? _(d.value) > _(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), x = (te) => [te.touches[0].clientX, te.touches[0].clientY], P = (te, ve) => {
    o.x = te, o.y = ve;
  }, I = (te, ve) => {
    l.x = te, l.y = ve;
  }, K = {
    passive: s,
    capture: !s
  }, M = (te) => {
    O.value && a?.(te, A.value), O.value = !1;
  }, oe = [
    Ka(e, "touchstart", (te) => {
      if (te.touches.length !== 1) return;
      const [ve, B] = x(te);
      P(ve, B), I(ve, B), r?.(te);
    }, K),
    Ka(e, "touchmove", (te) => {
      if (te.touches.length !== 1) return;
      const [ve, B] = x(te);
      I(ve, B), K.capture && !K.passive && Math.abs(d.value) > Math.abs(u.value) && te.preventDefault(), !O.value && T.value && (O.value = !0), O.value && i?.(te);
    }, K),
    Ka(e, ["touchend", "touchcancel"], M, K)
  ];
  return {
    isSwiping: O,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: d,
    lengthY: u,
    stop: () => oe.forEach((te) => te())
  };
}
var Kb = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = _g(), r = yg(), s = /* @__PURE__ */ at([]), o = Y(() => s.value.reduce((U, v) => (U[~~v.id] = v) && U, {})), l = Y(() => s.value.length), d = /* @__PURE__ */ at(null), u = /* @__PURE__ */ at(!1), h = /* @__PURE__ */ at({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), _ = /* @__PURE__ */ at({
      splitter: null,
      timeoutId: null
    }), T = Y(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), O = () => {
      document.addEventListener("mousemove", P, { passive: !1 }), document.addEventListener("mouseup", I), "ontouchstart" in window && (document.addEventListener("touchmove", P, { passive: !1 }), document.addEventListener("touchend", I));
    }, A = () => {
      document.removeEventListener("mousemove", P, { passive: !1 }), document.removeEventListener("mouseup", I), "ontouchstart" in window && (document.removeEventListener("touchmove", P, { passive: !1 }), document.removeEventListener("touchend", I));
    }, x = (U, v) => {
      let C = U.target.closest(".splitpanes__splitter");
      if (C) {
        let { left: k, top: R } = C.getBoundingClientRect(), { clientX: N, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        h.value.cursorOffset = i.horizontal ? z - R : N - k;
      }
      O(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, P = (U) => {
      h.value.mouseDown && (U.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        B(te(U)), tt("resize", { event: U }, !0);
      }));
    }, I = (U) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), tt("resized", { event: U }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, K = (U, v) => {
      "ontouchstart" in window && (U.preventDefault(), _.value.splitter === v ? (clearTimeout(_.value.timeoutId), _.value.timeoutId = null, M(U, v), _.value.splitter = null) : (_.value.splitter = v, _.value.timeoutId = setTimeout(() => _.value.splitter = null, 500))), h.value.dragging || tt("splitter-click", {
        event: U,
        index: v
      }, !0);
    }, M = (U, v) => {
      if (tt("splitter-dblclick", {
        event: U,
        index: v
      }, !0), i.maximizePanes) {
        let C = 0;
        s.value = s.value.map((k, R) => (k.size = R === v ? k.max : k.min, R !== v && (C += k.min), k)), s.value[v].size -= C, tt("pane-maximize", {
          event: U,
          index: v,
          pane: s.value[v]
        }), tt("resized", {
          event: U,
          index: v
        }, !0);
      }
    }, oe = (U, v) => {
      if (!i.keyboardStep) return;
      let C = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", k = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!C && !k) return;
      U.preventDefault(), h.value.activeSplitter = v;
      let R = (C ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), N = J(v) + s.value[v].size;
      F(Math.min(Math.max(N + R * i.keyboardStep, 0), 100)), tt("resize", { event: U }, !0), tt("resized", { event: U }, !0), h.value.activeSplitter = null;
    }, de = (U, v) => {
      let C = o.value[v];
      C && tt("pane-click", {
        event: U,
        index: C.index,
        pane: C
      });
    }, te = (U) => {
      let v = d.value.getBoundingClientRect(), { clientX: C, clientY: k } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: C - (i.horizontal ? 0 : h.value.cursorOffset) - v.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - v.top
      };
    }, ve = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let v = d.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = v - U), U * 100 / v;
    }, B = (U) => {
      F(ve(U));
    }, F = (U) => {
      let v = h.value.activeSplitter;
      if (v === null || v >= s.value.length - 1) return;
      let C = {
        prevPanesSize: J(v),
        nextPanesSize: ne(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : C.prevPanesSize), R = 100 - (i.pushOtherPanes ? 0 : C.nextPanesSize);
      U = Math.max(Math.min(U, R), k);
      let N = [v, v + 1], z = s.value[N[0]] || null, q = s.value[N[1]] || null, W = z !== null && z.max < 100 && U >= z.max + C.prevPanesSize, Q = q !== null && q.max < 100 && U <= 100 - (q.max + ne(v + 1));
      if (W || Q) {
        W ? (z.size = z.max, q.size = Math.min(Math.max(100 - z.max - C.prevPanesSize - C.nextPanesSize, q.min), q.max)) : (z.size = Math.min(Math.max(100 - q.max - C.prevPanesSize - ne(v + 1), z.min), z.max), q.size = q.max);
        return;
      }
      if (i.pushOtherPanes) {
        let V = ue(C, U);
        if (!V) return;
        ({ sums: C, panesToResize: N } = V), z = s.value[N[0]] || null, q = s.value[N[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - C.prevPanesSize - C.prevReachedMinPanes, z.min), z.max)), q !== null && (q.size = Math.min(Math.max(100 - U - C.nextPanesSize - C.nextReachedMinPanes, q.min), q.max));
    }, ue = (U, v) => {
      let C = h.value.activeSplitter, k = [C, C + 1];
      if (v < U.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = D(C).index, U.prevReachedMinPanes = 0, k[0] < C && s.value.forEach((R, N) => {
          N > k[0] && N <= C && (R.size = R.min, U.prevReachedMinPanes += R.min);
        }), k[0] === void 0) return U.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((R, N) => {
          N > 0 && N <= C && (R.size = R.min, U.prevReachedMinPanes += R.min);
        }), s.value[k[1]].size = 100 - U.prevReachedMinPanes - s.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = J(k[0]);
      }
      return v > 100 - U.nextPanesSize - s.value[k[1]].min && (k[1] = $(C).index, U.nextReachedMinPanes = 0, k[1] > C + 1 && s.value.forEach((R, N) => {
        N > C && N < k[1] && (R.size = R.min, U.nextReachedMinPanes += R.min);
      }), U.nextPanesSize = k[1] === void 0 ? 0 : ne(k[1] - 1), k[1] === void 0) ? (U.nextReachedMinPanes = 0, s.value.forEach((R, N) => {
        N >= C + 1 && (R.size = R.min, U.nextReachedMinPanes += R.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - U.prevPanesSize - ne(k[0] - 1)), null) : {
        sums: U,
        panesToResize: k
      };
    }, J = (U) => s.value.reduce((v, C, k) => v + (k < U ? C.size : 0), 0), ne = (U) => s.value.reduce((v, C, k) => v + (k > U + 1 ? C.size : 0), 0), D = (U) => [...s.value].reverse().find((v) => v.index < U && v.size > v.min) || {}, $ = (U) => s.value.find((v) => v.index > U + 1 && v.size > v.min) || {}, X = () => {
      let U = Array.from(d.value?.children || []);
      for (let v of U) {
        let C = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !C && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, re = (U, v, C = !1) => {
      let k = U - 1, R = document.createElement("div");
      R.classList.add("splitpanes__splitter"), C || (R.onmousedown = (N) => x(N, k), typeof window < "u" && "ontouchstart" in window && (R.ontouchstart = (N) => x(N, k)), R.onclick = (N) => K(N, k + 1), i.keyboardStep && (R.setAttribute("tabindex", "0"), R.setAttribute("role", "separator"), R.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), R.onkeydown = (N) => oe(N, k))), R.ondblclick = (N) => M(N, k + 1), v.parentNode.insertBefore(R, v);
    }, ie = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, he = () => {
      let U = Array.from(d.value?.children || []);
      for (let C of U) C.className.includes("splitpanes__splitter") && ie(C);
      let v = 0;
      for (let C of U) C.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? re(v, C, !0) : v && re(v, C), v++);
    }, ce = ({ uid: U, ...v }) => {
      let C = o.value[U];
      for (let [k, R] of Object.entries(v)) C[k] = R;
    }, Ce = !1, me = (U) => {
      let v = -1;
      Array.from(d.value?.children || []).some((C) => (C.className.includes("splitpanes__pane") && v++, C.isSameNode(U.el))), s.value.splice(v, 0, {
        ...U,
        index: v
      }), s.value.forEach((C, k) => C.index = k), u.value && !Ce && (Ce = !0, Hn(() => {
        he(), be({ addedPane: s.value[v] }), tt("pane-add", { pane: s.value[v] }), Ce = !1;
      }));
    }, je = (U) => {
      let v = s.value.findIndex((k) => k.id === U);
      s.value[v].el = null;
      let C = s.value.splice(v, 1)[0];
      s.value.forEach((k, R) => k.index = R), Hn(() => {
        he(), tt("pane-remove", { pane: C }), be({ removedPane: {
          ...C
        } });
      });
    }, be = (U = {}) => {
      !U.addedPane && !U.removedPane ? ot() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? ft(U) : rt(), u.value && tt("resized");
    }, rt = () => {
      let U = 100 / l.value, v = 100, C = [], k = [];
      for (let R of s.value) R.size = Math.max(Math.min(U, R.max), R.min), v -= R.size, R.size >= R.max && C.push(R.id), R.size <= R.min && k.push(R.id);
      Math.abs(v) > 0.1 && yt(v, C, k);
    }, ot = () => {
      let U = 100, v = [], C = [], k = 0;
      for (let N of s.value) U -= N.size, N.givenSize !== null && k++, N.size >= N.max && v.push(N.id), N.size <= N.min && C.push(N.id);
      let R = 100;
      if (U > 0.1) {
        for (let N of s.value) N.givenSize === null && (N.size = Math.max(Math.min(U / (l.value - k), N.max), N.min)), R -= N.size;
        R > 0.1 && yt(R, v, C);
      }
    }, ft = ({ addedPane: U, removedPane: v } = {}) => {
      let C = s.value.reduce((W, Q) => W + (Q.givenSize === null ? 0 : Q.givenSize), 0), k = s.value.filter((W) => W.givenSize === null).length, R = k > 0 ? (100 - C) / k : 0, N = 0, z = [], q = [];
      for (let W of s.value) N -= W.size, W.size >= W.max && z.push(W.id), W.size <= W.min && q.push(W.id);
      if (!(Math.abs(N) < 0.1)) {
        N = 100;
        for (let W of s.value) W.givenSize === null && (W.size = Math.max(Math.min(R, W.max), W.min)), N -= W.size, W.size >= W.max && z.push(W.id), W.size <= W.min && q.push(W.id);
        Math.abs(N) > 0.1 && yt(N, z, q);
      }
    }, yt = (U, v, C) => {
      let k;
      k = U > 0 ? U / (l.value - v.length) : U / (l.value - C.length), s.value.forEach((R, N) => {
        if (U > 0 && !v.includes(R.id)) {
          let z = Math.max(Math.min(R.size + k, R.max), R.min), q = z - R.size;
          U -= q, R.size = z;
        } else if (!C.includes(R.id)) {
          let z = Math.max(Math.min(R.size + k, R.max), R.min), q = z - R.size;
          U -= q, R.size = z;
        }
      }), Math.abs(U) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, tt = (U, v = void 0, C = !1) => {
      let k = v?.index ?? h.value.activeSplitter ?? null;
      n(U, {
        ...v,
        ...k !== null && { index: k },
        ...C && k !== null && {
          prevPane: s.value[k - +!!i.firstSplitter],
          nextPane: s.value[k + +!i.firstSplitter]
        },
        panes: s.value.map((R) => ({
          min: R.min,
          max: R.max,
          size: R.size
        }))
      });
    };
    Ft(() => i.firstSplitter, () => he()), Ft(() => i.horizontal, (U) => Hn(() => {
      n("direction-changed", {
        horizontal: U,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), Hi(() => {
      X(), he(), be(), tt("ready"), u.value = !0;
    }), Ya(() => u.value = !1);
    let Jt = () => {
      let { class: U, ...v } = a;
      return Xt("div", {
        ref: d,
        class: [T.value, U],
        ...v
      }, r.default?.());
    };
    return vn("panes", s), vn("indexedPanes", o), vn("horizontal", Y(() => i.horizontal)), vn("requestUpdate", ce), vn("onPaneAdd", me), vn("onPaneRemove", je), vn("onPaneClick", de), (U, v) => (b(), Fe(jc(Jt)));
  }
}), Wb = {
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
    let t = e, n = Pt("requestUpdate"), i = Pt("onPaneAdd"), a = Pt("horizontal"), r = Pt("onPaneRemove"), s = Pt("onPaneClick"), o = va()?.uid, l = Pt("indexedPanes"), d = Y(() => l.value[o]), u = /* @__PURE__ */ at(null), h = Y(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, T.value), _.value);
    }), _ = Y(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), T = Y(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), O = Y(() => {
      let A = d.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return Ft(() => h.value, (A) => n({
      uid: o,
      size: A
    })), Ft(() => _.value, (A) => n({
      uid: o,
      min: A
    })), Ft(() => T.value, (A) => n({
      uid: o,
      max: A
    })), Hi(() => {
      i({
        id: o,
        el: u.value,
        min: _.value,
        max: T.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Ya(() => r(o)), (A, x) => (b(), E("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: x[0] ||= (P) => g(s)(P, A._.uid),
      style: ln(O.value)
    }, [Re(A.$slots, "default")], 4));
  }
}, qb = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Yb = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", Xb = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Zb = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Jc = 1024, jh = Jc / 2, eo = (e) => document.documentElement.clientWidth < e, Vh = /* @__PURE__ */ at(eo(Jc)), Gh = /* @__PURE__ */ at(eo(jh));
window.addEventListener("resize", () => {
  Vh.value = eo(Jc), Gh.value = eo(jh);
}, { passive: !0 });
function fs() {
  return /* @__PURE__ */ Gr(Vh);
}
function Jb() {
  return /* @__PURE__ */ Gr(Gh);
}
class Qb {
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
    return Mn("", t, n, i, a, { bundle: this.bundle });
  }
}
class ey {
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
    return this.setLanguage(tl().replace("-", "_"));
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
    const t = new Qb((n) => Tb(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function ty() {
  return new ey();
}
const Kh = ty().detectLanguage().build(), mt = (...e) => Kh.gettext(...e);
function ji(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== tl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        Kh.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const ny = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], iy = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], ay = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], ry = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], sy = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], oy = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], ly = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], cy = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], uy = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const dy = /* @__PURE__ */ Symbol(""), [fy] = window.OC?.config?.version?.split(".") ?? [], Wh = Number.parseInt(fy ?? "35"), hy = Wh < 32, Vi = Wh < 34, py = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function vy() {
  return Pt(py, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, gy = { class: "button-vue__wrapper" }, my = { class: "button-vue__icon" }, by = { class: "button-vue__text" }, yy = /* @__PURE__ */ At({
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
    const n = e, i = t, { formBoxItemClass: a } = vy(), r = Pt(dy, null) !== null, s = Y(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = Y(() => s.value === "button" && typeof n.pressed == "boolean"), l = Y(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = Y(() => l.value.startsWith("tertiary")), u = Y(() => n.alignment.split("-")[0]), h = Y(() => n.alignment.includes("-")), _ = Pt("NcPopover:trigger:attrs", () => ({}), !1), T = Y(() => _()), O = Y(() => {
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
          ...T.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function A(x) {
      o.value && i("update:pressed", !n.pressed), i("click", x);
    }
    return (x, P) => (b(), Fe(jc(s.value), zt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(hy),
          "button-vue--legacy34": g(Vi)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, O.value, { onClick: A }), {
      default: ke(() => [
        c("span", gy, [
          c("span", my, [
            Re(x.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", by, [
            Re(x.$slots, "default", {}, () => [
              Oe(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), jn = /* @__PURE__ */ Ye(yy, [["__scopeId", "data-v-47ce59a3"]]), _y = ["aria-hidden", "aria-label"], wy = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Cy = ["d"], Sy = ["innerHTML"], Ey = /* @__PURE__ */ At({
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
    pm((a) => ({
      fb515064: n.value
    }));
    const t = e, n = Y(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = Y(() => {
      if (!t.svg || t.path)
        return;
      const a = Ph.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (b(), E("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ee(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (b(), E("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, Sy)) : (b(), E("svg", wy, [
        c("path", { d: e.path }, null, 8, Cy)
      ]))
    ], 10, _y));
  }
}), nl = /* @__PURE__ */ Ye(Ey, [["__scopeId", "data-v-aaedb1c3"]]);
Ay();
function Ty(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), di("csrf-token-update", { token: e, _internal: !0 }));
}
function Ay() {
  Uh("csrf-token-update", ({ token: e, _internal: t }) => {
    t || Ty(e);
  });
}
Mh("public").persist().build();
let Pa;
function Ld(e, t) {
  return e ? e.getAttribute(t) : null;
}
function ky() {
  if (Pa !== void 0)
    return Pa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Ld(e, "data-user");
  return t === null ? (Pa = null, Pa) : (Pa = {
    uid: t,
    displayName: Ld(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Pa);
}
var ct = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(ct || {});
class Oy {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + ct[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === ct.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case ct.Debug:
          console.debug(this.formatMessage(n, ct.Debug, i), i);
          break;
        case ct.Info:
          console.info(this.formatMessage(n, ct.Info, i), i);
          break;
        case ct.Warn:
          console.warn(this.formatMessage(n, ct.Warn, i), i);
          break;
        case ct.Error:
          console.error(this.formatMessage(n, ct.Error, i), i);
          break;
        case ct.Fatal:
        default:
          console.error(this.formatMessage(n, ct.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(ct.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(ct.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(ct.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(ct.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(ct.Fatal, t, Object.assign({}, this.context, n));
  }
}
function Ny(e) {
  return new Oy(e);
}
class xy {
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
    const t = ky();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? ct.Warn, window._oc_debug && (t.context.level = ct.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Ly() {
  return new xy(Ny);
}
const fa = Ly().detectUser().setApp("@nextcloud/vue").build();
function Ry(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let qh = "missing-app-name";
try {
  qh = "library";
} catch {
  fa.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Iy = qh;
let Py = "";
try {
  Py = "0.1.0-alpha.167";
} catch {
  fa.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Yh() {
  return Pt("appName", Iy);
}
const Dy = Ry(() => {
  const e = Yc("core", "apps", []), t = Yh();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), pc = Eb();
ji(ly);
const My = /* @__PURE__ */ At({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = fs();
    Ft(t, n), Hi(() => {
      n(t.value);
    }), Ya(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && di("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (b(), Fe(g(jn), {
      "aria-label": g(mt)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(mt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: ke(() => [
        ye(g(nl), {
          directional: "",
          path: g(qb)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), $y = /* @__PURE__ */ Ye(My, [["__scopeId", "data-v-a28923a1"]]), Rd = Mh("nextcloud").persist().build(), Fy = kb().theming?.name ?? "Nextcloud", zy = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: $y,
    Pane: Wb,
    Splitpanes: Kb
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
      appName: Yh(),
      localizedAppName: Dy(),
      isMobile: fs(),
      isRtl: pc
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
        return fa.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(Fy), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = Gb(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? di("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && di("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      Rd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), fa.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Rd.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return fa.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, Uy = {
  key: 0,
  class: "hidden-visually"
}, By = { class: "app-content-wrapper__list" }, Hy = {
  key: 1,
  class: "app-content-wrapper"
};
function jy(e, t, n, i, a, r) {
  const s = Ue("NcAppContentDetailsToggle"), o = Ue("Pane"), l = Ue("Splitpanes");
  return b(), E("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (b(), E("h1", Uy, p(n.pageHeading), 1)) : j("", !0),
    e.$slots.list ? (b(), E(le, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (b(), E("div", {
        key: 0,
        class: Ee(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (b(), Fe(s, {
          key: 0,
          onClick: Xe(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : j("", !0),
        Ke(c("div", By, [
          Re(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Va, !n.showDetails]
        ]),
        n.showDetails ? Re(e.$slots, "default", { key: 1 }, void 0, !0) : j("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (b(), E("div", Hy, [
        ye(l, {
          horizontal: n.layout === "horizontal-split",
          class: Ee(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: ke(() => [
            ye(o, {
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
            ye(o, {
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
      ])) : j("", !0)
    ], 64)) : j("", !0),
    e.$slots.list ? j("", !0) : Re(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const Vy = /* @__PURE__ */ Ye(zy, [["render", jy], ["__scopeId", "data-v-51427d61"]]);
var Xh = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], to = /* @__PURE__ */ Xh.join(","), Zh = typeof Element > "u", pa = Zh ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, no = !Zh && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, io = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : io(t.parentNode));
  return s;
}, Gy = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Jh = function(t, n, i) {
  if (io(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(to));
  return n && pa.call(t, to) && a.unshift(t), a = a.filter(i), a;
}, ao = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!io(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, d = ao(l, !0, i);
        i.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var u = pa.call(s, to);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), _ = !io(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && _) {
          var T = ao(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, T) : a.push({
            scopeParent: s,
            candidates: T
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Qh = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, sa = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Gy(t)) && !Qh(t) ? 0 : t.tabIndex;
}, Ky = function(t, n) {
  var i = sa(t);
  return i < 0 && n && !Qh(t) ? 0 : i;
}, Wy = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, ep = function(t) {
  return t.tagName === "INPUT";
}, qy = function(t) {
  return ep(t) && t.type === "hidden";
}, Yy = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, Xy = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, Zy = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || no(t), i = function(o) {
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
  var r = Xy(a, t.form);
  return !r || r === t;
}, Jy = function(t) {
  return ep(t) && t.type === "radio";
}, Qy = function(t) {
  return Jy(t) && !Zy(t);
}, e_ = function(t) {
  var n, i = t && no(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = no(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, Id = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, t_ = function(t, n) {
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
  var l = pa.call(t, "details>summary:first-of-type"), d = l ? t.parentElement : t;
  if (pa.call(d, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, _ = no(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return Id(t);
        t.assignedSlot ? t = t.assignedSlot : !h && _ !== t.ownerDocument ? t = _.host : t = h;
      }
      t = u;
    }
    if (e_(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Id(t);
  return !1;
}, n_ = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return pa.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, ro = function(t, n) {
  return !(n.disabled || qy(n) || t_(n, t) || // For a details element with a summary, the summary element gets the focus
  Yy(n) || n_(n));
}, vc = function(t, n) {
  return !(Qy(n) || sa(n) < 0 || !ro(t, n));
}, i_ = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, tp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = Ky(o, s), d = s ? tp(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(Wy).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, a_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = ao([t], n.includeContainer, {
    filter: vc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: i_
  }) : i = Jh(t, n.includeContainer, vc.bind(null, n)), tp(i);
}, r_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = ao([t], n.includeContainer, {
    filter: ro.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Jh(t, n.includeContainer, ro.bind(null, n)), i;
}, Da = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return pa.call(t, to) === !1 ? !1 : vc(n, t);
}, s_ = /* @__PURE__ */ Xh.concat("iframe:not([inert]):not([inert] *)").join(","), jl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return pa.call(t, s_) === !1 ? !1 : ro(n, t);
};
function gc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function o_(e) {
  if (Array.isArray(e)) return gc(e);
}
function Pd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = np(e)) || t) {
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
function l_(e, t, n) {
  return (t = h_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function c_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function u_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Md(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dd(Object(n), !0).forEach(function(i) {
      l_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function d_(e) {
  return o_(e) || c_(e) || np(e) || u_();
}
function f_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function h_(e) {
  var t = f_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function np(e, t) {
  if (e) {
    if (typeof e == "string") return gc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? gc(e, t) : void 0;
  }
}
var oi = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = oi.getActiveTrap(t);
    n !== i && oi.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), oi.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = oi.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = oi.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, p_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, v_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Rr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, g_ = function(t) {
  return Rr(t) && !t.shiftKey;
}, m_ = function(t) {
  return Rr(t) && t.shiftKey;
}, $d = function(t) {
  return setTimeout(t, 0);
}, yr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, As = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, b_ = [], Qc = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || b_, r = Md({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: g_,
    isKeyBackward: m_
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
  }, o, l = function(D, $, X) {
    return D && D[$] !== void 0 ? D[$] : r[X || $];
  }, d = function(D, $) {
    var X = typeof $?.composedPath == "function" ? $.composedPath() : void 0;
    return s.containerGroups.findIndex(function(re) {
      var ie = re.container, he = re.tabbableNodes;
      return ie.contains(D) || X?.includes(ie) || he.find(function(ce) {
        return ce === D;
      });
    });
  }, u = function(D) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = $.hasFallback, re = X === void 0 ? !1 : X, ie = $.params, he = ie === void 0 ? [] : ie, ce = r[D];
    if (typeof ce == "function" && (ce = ce.apply(void 0, d_(he))), ce === !0 && (ce = void 0), !ce) {
      if (ce === void 0 || ce === !1)
        return ce;
      throw new Error("`".concat(D, "` was specified but was not a node, or did not return a node"));
    }
    var Ce = ce;
    if (typeof ce == "string") {
      try {
        Ce = i.querySelector(ce);
      } catch (me) {
        throw new Error("`".concat(D, '` appears to be an invalid selector; error="').concat(me.message, '"'));
      }
      if (!Ce && !re)
        throw new Error("`".concat(D, "` as selector refers to no known node"));
    }
    return Ce;
  }, h = function(D) {
    var $ = D.activeElement;
    return $ ? $.shadowRoot && $.shadowRoot.activeElement !== null ? h($.shadowRoot) : $ : null;
  }, _ = function() {
    var D = u("initialFocus", {
      hasFallback: !0
    });
    if (D === !1)
      return !1;
    if (D === void 0 || D && !jl(D, r.tabbableOptions)) {
      var $ = h(i);
      if (d($) >= 0)
        D = $;
      else {
        var X = s.tabbableGroups[0], re = X && X.firstTabbableNode;
        D = re || u("fallbackFocus");
      }
    } else D === null && (D = u("fallbackFocus"));
    if (!D)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return D;
  }, T = function() {
    if (s.containerGroups = s.containers.map(function(D) {
      var $ = a_(D, r.tabbableOptions), X = r_(D, r.tabbableOptions), re = $.length > 0 ? $[0] : void 0, ie = $.length > 0 ? $[$.length - 1] : void 0, he = X.find(function(me) {
        return Da(me);
      }), ce = X.slice().reverse().find(function(me) {
        return Da(me);
      }), Ce = !!$.find(function(me) {
        return sa(me) > 0;
      });
      return {
        container: D,
        tabbableNodes: $,
        focusableNodes: X,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Ce,
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
        lastDomTabbableNode: ce,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(je) {
          var be = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, rt = $.indexOf(je);
          return rt < 0 ? be ? X.slice(X.indexOf(je) + 1).find(function(ot) {
            return Da(ot);
          }) : X.slice(0, X.indexOf(je)).reverse().find(function(ot) {
            return Da(ot);
          }) : $[rt + (be ? 1 : -1)];
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
        O(_());
        return;
      }
      D.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = D, p_(D) && D.select();
    }
  }, A = function(D) {
    var $ = u("setReturnFocus", {
      params: [D]
    });
    return $ || ($ === !1 ? !1 : D);
  }, x = function(D) {
    var $ = D.target, X = D.event, re = D.isBackward, ie = re === void 0 ? !1 : re;
    $ = $ || As(X), T();
    var he = null;
    if (s.tabbableGroups.length > 0) {
      var ce = d($, X), Ce = ce >= 0 ? s.containerGroups[ce] : void 0;
      if (ce < 0)
        ie ? he = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : he = s.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var me = s.tabbableGroups.findIndex(function(yt) {
          var tt = yt.firstTabbableNode;
          return $ === tt;
        });
        if (me < 0 && (Ce.container === $ || jl($, r.tabbableOptions) && !Da($, r.tabbableOptions) && !Ce.nextTabbableNode($, !1)) && (me = ce), me >= 0) {
          var je = me === 0 ? s.tabbableGroups.length - 1 : me - 1, be = s.tabbableGroups[je];
          he = sa($) >= 0 ? be.lastTabbableNode : be.lastDomTabbableNode;
        } else Rr(X) || (he = Ce.nextTabbableNode($, !1));
      } else {
        var rt = s.tabbableGroups.findIndex(function(yt) {
          var tt = yt.lastTabbableNode;
          return $ === tt;
        });
        if (rt < 0 && (Ce.container === $ || jl($, r.tabbableOptions) && !Da($, r.tabbableOptions) && !Ce.nextTabbableNode($)) && (rt = ce), rt >= 0) {
          var ot = rt === s.tabbableGroups.length - 1 ? 0 : rt + 1, ft = s.tabbableGroups[ot];
          he = sa($) >= 0 ? ft.firstTabbableNode : ft.firstDomTabbableNode;
        } else Rr(X) || (he = Ce.nextTabbableNode($));
      }
    } else
      he = u("fallbackFocus");
    return he;
  }, P = function(D) {
    var $ = As(D);
    if (!(d($, D) >= 0)) {
      if (yr(r.clickOutsideDeactivates, D)) {
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
      yr(r.allowOutsideClick, D) || D.preventDefault();
    }
  }, I = function(D) {
    var $ = As(D), X = d($, D) >= 0;
    if (X || $ instanceof Document)
      X && (s.mostRecentlyFocusedNode = $);
    else {
      D.stopImmediatePropagation();
      var re, ie = !0;
      if (s.mostRecentlyFocusedNode)
        if (sa(s.mostRecentlyFocusedNode) > 0) {
          var he = d(s.mostRecentlyFocusedNode), ce = s.containerGroups[he].tabbableNodes;
          if (ce.length > 0) {
            var Ce = ce.findIndex(function(me) {
              return me === s.mostRecentlyFocusedNode;
            });
            Ce >= 0 && (r.isKeyForward(s.recentNavEvent) ? Ce + 1 < ce.length && (re = ce[Ce + 1], ie = !1) : Ce - 1 >= 0 && (re = ce[Ce - 1], ie = !1));
          }
        } else
          s.containerGroups.some(function(me) {
            return me.tabbableNodes.some(function(je) {
              return sa(je) > 0;
            });
          }) || (ie = !1);
      else
        ie = !1;
      ie && (re = x({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), O(re || s.mostRecentlyFocusedNode || _());
    }
    s.recentNavEvent = void 0;
  }, K = function(D) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = D;
    var X = x({
      event: D,
      isBackward: $
    });
    X && (Rr(D) && D.preventDefault(), O(X));
  }, M = function(D) {
    (r.isKeyForward(D) || r.isKeyBackward(D)) && K(D, r.isKeyBackward(D));
  }, oe = function(D) {
    v_(D) && yr(r.escapeDeactivates, D) !== !1 && (D.preventDefault(), o.deactivate());
  }, de = function(D) {
    var $ = As(D);
    d($, D) >= 0 || yr(r.clickOutsideDeactivates, D) || yr(r.allowOutsideClick, D) || (D.preventDefault(), D.stopImmediatePropagation());
  }, te = function() {
    if (s.active) {
      oi.activateTrap(a, o);
      var D;
      return r.delayInitialFocus ? D = new Promise(function($) {
        s.delayInitialFocusTimer = $d(function() {
          O(_()), $();
        });
      }) : O(_()), i.addEventListener("focusin", I, !0), i.addEventListener("mousedown", P, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", P, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", de, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", M, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", oe), D;
    }
  }, ve = function(D) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var $ = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), re = Pd(D), ie;
    try {
      for (re.s(); !(ie = re.n()).done; ) {
        var he = ie.value;
        $.add(he);
        for (var ce = typeof ShadowRoot < "u" && he.getRootNode() instanceof ShadowRoot, Ce = he; Ce; ) {
          $.add(Ce);
          var me = Ce.parentElement, je = [];
          me ? je = me.children : !me && ce && (je = Ce.getRootNode().children, me = Ce.getRootNode().host, ce = typeof ShadowRoot < "u" && me.getRootNode() instanceof ShadowRoot);
          var be = Pd(je), rt;
          try {
            for (be.s(); !(rt = be.n()).done; ) {
              var ot = rt.value;
              X.add(ot);
            }
          } catch (ft) {
            be.e(ft);
          } finally {
            be.f();
          }
          Ce = me;
        }
      }
    } catch (ft) {
      re.e(ft);
    } finally {
      re.f();
    }
    $.forEach(function(ft) {
      X.delete(ft);
    }), s.adjacentElements = X;
  }, B = function() {
    if (s.active)
      return i.removeEventListener("focusin", I, !0), i.removeEventListener("mousedown", P, !0), i.removeEventListener("touchstart", P, !0), i.removeEventListener("click", de, !0), i.removeEventListener("keydown", M, !0), i.removeEventListener("keydown", oe), o;
  }, F = function(D) {
    var $ = s.mostRecentlyFocusedNode;
    if ($) {
      var X = D.some(function(ie) {
        var he = Array.from(ie.removedNodes);
        return he.some(function(ce) {
          return ce === $ || typeof ce.contains == "function" && ce.contains($);
        });
      });
      if (X && s.containers.some(function(ie) {
        return ie?.isConnected;
      })) {
        T();
        var re = _();
        O(re);
      }
    }
  }, ue = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(F) : void 0, J = function() {
    ue && (ue.disconnect(), s.active && !s.paused && s.containers.map(function(D) {
      ue.observe(D, {
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
      var $ = l(D, "onActivate"), X = l(D, "onPostActivate"), re = l(D, "checkCanFocusTrap"), ie = oi.getActiveTrap(a), he = !1;
      if (ie && !ie.paused) {
        var ce;
        (ce = ie._setSubtreeIsolation) === null || ce === void 0 || ce.call(ie, !1), he = !0;
      }
      try {
        re || T(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), $?.({
          trap: o
        });
        var Ce = function() {
          re && T();
          var be = function() {
            o._setSubtreeIsolation(!0), J(), X?.({
              trap: o
            });
          }, rt = te();
          rt ? rt.then(be) : be();
        };
        if (re)
          return re(s.containers.concat()).then(Ce, Ce), this;
        Ce();
      } catch (je) {
        if (ie === oi.getActiveTrap(a) && he) {
          var me;
          (me = ie._setSubtreeIsolation) === null || me === void 0 || me.call(ie, !0);
        }
        throw je;
      }
      return this;
    },
    deactivate: function(D) {
      if (!s.active)
        return this;
      var $ = Md({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, D);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), B(), s.active = !1, s.paused = !1, J(), oi.deactivateTrap(a, o);
      var X = l($, "onDeactivate"), re = l($, "onPostDeactivate"), ie = l($, "checkCanReturnFocus"), he = l($, "delayReturnFocus"), ce = l($, "returnFocus", "returnFocusOnDeactivate");
      X?.({
        trap: o
      });
      var Ce = function() {
        ce && O(A(s.nodeFocusedBeforeActivation)), re?.({
          trap: o
        });
      }, me = function() {
        he && ce ? $d(Ce) : Ce();
      };
      return ce && ie ? (ie(A(s.nodeFocusedBeforeActivation)).then(me, me), this) : (me(), this);
    },
    pause: function(D) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, D)) : this;
    },
    unpause: function(D) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, D)) : this;
    },
    updateContainerElements: function(D) {
      var $ = [].concat(D).filter(Boolean);
      return s.containers = $.map(function(X) {
        return typeof X == "string" ? i.querySelector(X) : X;
      }), r.isolateSubtrees && ve(s.containers), s.active && (T(), s.paused || o._setSubtreeIsolation(!0)), J(), this;
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
          var X = l($, "onPause"), re = l($, "onPostPause");
          X?.({
            trap: o
          }), B(), o._setSubtreeIsolation(!1), J(), re?.({
            trap: o
          });
        } else {
          var ie = l($, "onUnpause"), he = l($, "onPostUnpause");
          ie?.({
            trap: o
          });
          var ce = function() {
            T();
            var me = function() {
              o._setSubtreeIsolation(!0), J(), he?.({
                trap: o
              });
            }, je = te();
            je ? je.then(me) : me();
          };
          ce();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(D) {
        r.isolateSubtrees && s.adjacentElements.forEach(function($) {
          var X;
          D ? r.isolateSubtrees === "aria-hidden" ? (($.ariaHidden === "true" || ((X = $.getAttribute("aria-hidden")) === null || X === void 0 ? void 0 : X.toLowerCase()) === "true") && s.alreadySilent.add($), $.setAttribute("aria-hidden", "true")) : (($.inert || $.hasAttribute("inert")) && s.alreadySilent.add($), $.setAttribute("inert", !0)) : s.alreadySilent.has($) || (r.isolateSubtrees === "aria-hidden" ? $.removeAttribute("aria-hidden") : $.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const ip = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), y_ = /* @__PURE__ */ At({
  name: "NcAppNavigationList",
  provide() {
    return {
      [ip]: {
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
function __(e, t, n, i, a, r) {
  return b(), E("ul", {
    ref: "list",
    class: Ee(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    c("div", {
      class: Ee(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: ln(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Re(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const ap = /* @__PURE__ */ Ye(y_, [["render", __], ["__scopeId", "data-v-3e73e246"]]);
function es() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function w_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...es()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === es().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const rp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), sp = /* @__PURE__ */ Symbol.for("NcContent:selector");
ji(ry);
const C_ = { class: "app-navigation-toggle-wrapper" }, S_ = /* @__PURE__ */ At({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = sh(e, "open"), n = Y(() => t.value ? mt("Close navigation") : mt("Open navigation"));
    return (i, a) => (b(), E("div", C_, [
      ye(g(jn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: ke(() => [
          ye(nl, {
            path: g(Zb),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), E_ = /* @__PURE__ */ Ye(S_, [["__scopeId", "data-v-e8177cc7"]]), T_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], A_ = { class: "app-navigation__search" }, k_ = /* @__PURE__ */ At({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Pt(
      rp,
      () => nm(),
      !1
    ), a = lg("appNavigationContainer"), r = fs(), s = /* @__PURE__ */ at(!r.value), o = Y(() => r.value && s.value);
    Qv(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Ft(r, () => {
      s.value = !r.value;
    }), Ft(o, () => {
      u();
    }), Hi(() => {
      i(!0), Uh("toggle-navigation", d), di("navigation-toggled", {
        open: s.value
      }), n = Qc(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: es(),
        escapeDeactivates: !1
      }), u();
    }), cs(() => {
      i(!1), zb("toggle-navigation", d), n.deactivate();
    });
    function l(_) {
      if (s.value === _) {
        di("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = _ === void 0 ? !s.value : _;
      const T = getComputedStyle(document.body), O = parseInt(T.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        di("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * O);
    }
    function d({ open: _ }) {
      return l(_);
    }
    function u() {
      o.value ? n.activate() : n.deactivate();
    }
    function h() {
      r.value && l(!1);
    }
    return (_, T) => (b(), E("div", {
      ref: "appNavigationContainer",
      class: Ee(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": g(Vi)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: jt(h, ["esc"])
      }, [
        c("div", A_, [
          Re(_.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !_.$slots.list }])
        }, [
          Re(_.$slots, "default", {}, void 0, !0)
        ], 2),
        _.$slots.list ? (b(), Fe(ap, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: ke(() => [
            Re(_.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : j("", !0),
        Re(_.$slots, "footer", {}, void 0, !0)
      ], 40, T_),
      ye(E_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), O_ = /* @__PURE__ */ Ye(k_, [["__scopeId", "data-v-37908cd4"]]), N_ = {
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
}, x_ = ["aria-hidden", "aria-label"], L_ = ["fill", "width", "height"], R_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, I_ = { key: 0 };
function P_(e, t, n, i, a, r) {
  return b(), E("span", zt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", R_, [
        n.title ? (b(), E("title", I_, p(n.title), 1)) : j("", !0)
      ])
    ], 8, L_))
  ], 16, x_);
}
const D_ = /* @__PURE__ */ Ye(N_, [["render", P_]]), M_ = {
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
}, $_ = ["aria-hidden", "aria-label"], F_ = ["fill", "width", "height"], z_ = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, U_ = { key: 0 };
function B_(e, t, n, i, a, r) {
  return b(), E("span", zt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", z_, [
        n.title ? (b(), E("title", U_, p(n.title), 1)) : j("", !0)
      ])
    ], 8, F_))
  ], 16, $_);
}
const H_ = /* @__PURE__ */ Ye(M_, [["render", B_]]), j_ = {
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
}, V_ = ["aria-hidden", "aria-label"], G_ = ["fill", "width", "height"], K_ = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, W_ = { key: 0 };
function q_(e, t, n, i, a, r) {
  return b(), E("span", zt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", K_, [
        n.title ? (b(), E("title", W_, p(n.title), 1)) : j("", !0)
      ])
    ], 8, G_))
  ], 16, V_);
}
const op = /* @__PURE__ */ Ye(j_, [["render", q_]]), Y_ = {
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
}, X_ = ["aria-hidden", "aria-label"], Z_ = ["fill", "width", "height"], J_ = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, Q_ = { key: 0 };
function e1(e, t, n, i, a, r) {
  return b(), E("span", zt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", J_, [
        n.title ? (b(), E("title", Q_, p(n.title), 1)) : j("", !0)
      ])
    ], 8, Z_))
  ], 16, X_);
}
const lp = /* @__PURE__ */ Ye(Y_, [["render", e1]]);
ji(iy);
const t1 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: op,
    IconClose: lp,
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
    return { isLegacy34: Vi };
  },
  data() {
    return {
      labelConfirm: mt("Confirm changes"),
      labelCancel: mt("Cancel changes")
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
}, n1 = ["placeholder"];
function i1(e, t, n, i, a, r) {
  const s = Ue("IconArrowRight"), o = Ue("NcButton"), l = Ue("IconClose");
  return b(), E("div", {
    class: Ee(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = Xe((...d) => r.confirm && r.confirm(...d), ["prevent"])),
      onKeydown: t[2] || (t[2] = jt(Xe((...d) => r.cancel && r.cancel(...d), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Xe(() => {
      }, ["stop", "prevent"]))
    }, [
      Ke(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.valueModel = d),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, n1), [
        [ti, r.valueModel]
      ]),
      ye(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Xe(r.confirm, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          ye(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      ye(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Xe(r.cancel, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          ye(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const a1 = /* @__PURE__ */ Ye(t1, [["render", i1], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function il() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const eu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), cp = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), r1 = {
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
}, up = {
  mixins: [r1],
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
      from: cp
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
}, s1 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: nl
  },
  mixins: [up],
  inject: {
    isInSemanticMenu: {
      from: eu,
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
      mdiCheck: Yb,
      mdiChevronRight: Xb
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
}, o1 = ["role"], l1 = ["aria-label", "disabled", "title", "type"], c1 = { class: "action-button__longtext-wrapper" }, u1 = {
  key: 0,
  class: "action-button__name"
}, d1 = ["textContent"], f1 = {
  key: 2,
  class: "action-button__text"
}, h1 = ["textContent"], p1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function v1(e, t, n, i, a, r) {
  const s = Ue("NcIconSvgWrapper");
  return b(), E("li", {
    class: Ee(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", zt({
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
          class: Ee([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: ln({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", c1, [
        e.name ? (b(), E("strong", u1, p(e.name), 1)) : j("", !0),
        e.isLongText ? (b(), E("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, d1)) : (b(), E("span", f1, p(e.text), 1)),
        n.description ? (b(), E("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, h1)) : j("", !0)
      ]),
      n.isMenu ? (b(), Fe(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (b(), Fe(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (b(), E("span", p1)) : j("", !0),
      j("", !0)
    ], 16, l1)
  ], 10, o1);
}
const g1 = /* @__PURE__ */ Ye(s1, [["render", v1], ["__scopeId", "data-v-6c2daf4e"]]);
function m1(e, t = {}) {
  const n = w_();
  Ft(e, () => {
    ci(t.disabled) || (ci(e) ? n.pause() : n.unpause());
  }), cs(() => {
    n.unpause();
  });
}
const b1 = ["top", "right", "bottom", "left"], Fd = ["start", "end"], zd = /* @__PURE__ */ b1.reduce((e, t) => e.concat(t, t + "-" + Fd[0], t + "-" + Fd[1]), []), ts = Math.min, mc = Math.max, y1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function dp(e, t, n) {
  return mc(e, ts(t, n));
}
function ga(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function vi(e) {
  return e.split("-")[0];
}
function kn(e) {
  return e.split("-")[1];
}
function fp(e) {
  return e === "x" ? "y" : "x";
}
function tu(e) {
  return e === "y" ? "height" : "width";
}
function li(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function nu(e) {
  return fp(li(e));
}
function hp(e, t, n) {
  n === void 0 && (n = !1);
  const i = kn(e), a = nu(e), r = tu(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = oo(s)), [s, oo(s)];
}
function _1(e) {
  const t = oo(e);
  return [so(e), t, so(t)];
}
function so(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Ud = ["left", "right"], Bd = ["right", "left"], w1 = ["top", "bottom"], C1 = ["bottom", "top"];
function S1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Bd : Ud : t ? Ud : Bd;
    case "left":
    case "right":
      return t ? w1 : C1;
    default:
      return [];
  }
}
function E1(e, t, n, i) {
  const a = kn(e);
  let r = S1(vi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(so)))), r;
}
function oo(e) {
  const t = vi(e);
  return y1[t] + e.slice(t.length);
}
function T1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function pp(e) {
  return typeof e != "number" ? T1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ir(e) {
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
function Hd(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = li(t), s = nu(t), o = tu(s), l = vi(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, _ = i[o] / 2 - a[o] / 2;
  let T;
  switch (l) {
    case "top":
      T = {
        x: u,
        y: i.y - a.height
      };
      break;
    case "bottom":
      T = {
        x: u,
        y: i.y + i.height
      };
      break;
    case "right":
      T = {
        x: i.x + i.width,
        y: h
      };
      break;
    case "left":
      T = {
        x: i.x - a.width,
        y: h
      };
      break;
    default:
      T = {
        x: i.x,
        y: i.y
      };
  }
  const O = kn(t);
  return O && (T[s] += _ * (O === "end" ? 1 : -1) * (n && d ? -1 : 1)), T;
}
async function A1(e, t) {
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
    altBoundary: _ = !1,
    padding: T = 0
  } = ga(t, e), O = pp(T), x = o[_ ? h === "floating" ? "reference" : "floating" : h], P = Ir(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(x))) == null || n ? x : x.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), I = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, K = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), M = await (r.isElement == null ? void 0 : r.isElement(K)) && await (r.getScale == null ? void 0 : r.getScale(K)) || {
    x: 1,
    y: 1
  }, oe = Ir(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: I,
    offsetParent: K,
    strategy: l
  }) : I);
  return {
    top: (P.top - oe.top + O.top) / M.y,
    bottom: (oe.bottom - P.bottom + O.bottom) / M.y,
    left: (P.left - oe.left + O.left) / M.x,
    right: (oe.right - P.right + O.right) / M.x
  };
}
const k1 = 50, O1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: A1
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = Hd(d, i, l), _ = i, T = 0;
  const O = {};
  for (let A = 0; A < r.length; A++) {
    const x = r[A];
    if (!x)
      continue;
    const {
      name: P,
      fn: I
    } = x, {
      x: K,
      y: M,
      data: oe,
      reset: de
    } = await I({
      x: u,
      y: h,
      initialPlacement: i,
      placement: _,
      strategy: a,
      middlewareData: O,
      rects: d,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = K ?? u, h = M ?? h, O[P] = {
      ...O[P],
      ...oe
    }, de && T < k1 && (T++, typeof de == "object" && (de.placement && (_ = de.placement), de.rects && (d = de.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : de.rects), {
      x: u,
      y: h
    } = Hd(d, _, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: _,
    strategy: a,
    middlewareData: O
  };
}, N1 = (e) => ({
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
    } = ga(e, t) || {};
    if (d == null)
      return {};
    const h = pp(u), _ = {
      x: n,
      y: i
    }, T = nu(a), O = tu(T), A = await s.getDimensions(d), x = T === "y", P = x ? "top" : "left", I = x ? "bottom" : "right", K = x ? "clientHeight" : "clientWidth", M = r.reference[O] + r.reference[T] - _[T] - r.floating[O], oe = _[T] - r.reference[T], de = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let te = de ? de[K] : 0;
    (!te || !await (s.isElement == null ? void 0 : s.isElement(de))) && (te = o.floating[K] || r.floating[O]);
    const ve = M / 2 - oe / 2, B = te / 2 - A[O] / 2 - 1, F = ts(h[P], B), ue = ts(h[I], B), J = te - A[O] - ue, ne = te / 2 - A[O] / 2 + ve, D = dp(F, ne, J), $ = !l.arrow && kn(a) != null && ne !== D && r.reference[O] / 2 - (ne < F ? F : ue) - A[O] / 2 < 0, X = $ ? ne < F ? ne - F : ne - J : 0;
    return {
      [T]: _[T] + X,
      data: {
        [T]: D,
        centerOffset: ne - D - X,
        ...$ && {
          alignmentOffset: X
        }
      },
      reset: $
    };
  }
});
function x1(e, t, n) {
  return (e ? [...n.filter((a) => kn(a) === e), ...n.filter((a) => kn(a) !== e)] : n.filter((a) => vi(a) === a)).filter((a) => e ? kn(a) === e || (t ? so(a) !== a : !1) : !0);
}
const L1 = function(e) {
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
        allowedPlacements: _ = zd,
        autoAlignment: T = !0,
        ...O
      } = ga(e, t), A = h !== void 0 || _ === zd ? x1(h || null, T, _) : _, x = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, P = A[x];
      if (P == null)
        return {};
      if (o !== P)
        return {
          reset: {
            placement: A[0]
          }
        };
      const I = await l.detectOverflow(t, O), K = hp(P, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), M = [I[vi(P)], I[K[0]], I[K[1]]], oe = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: P,
        overflows: M
      }], de = A[x + 1];
      if (de)
        return {
          data: {
            index: x + 1,
            overflows: oe
          },
          reset: {
            placement: de
          }
        };
      const te = oe.map((F) => {
        const ue = kn(F.placement);
        return [F.placement, ue && u ? (
          // Check along the mainAxis and main crossAxis side.
          F.overflows.slice(0, 2).reduce((J, ne) => J + ne, 0)
        ) : (
          // Check only the mainAxis.
          F.overflows[0]
        ), F.overflows];
      }).sort((F, ue) => F[1] - ue[1]), B = ((a = te.filter((F) => F[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        kn(F[0]) ? 2 : 3
      ).every((ue) => ue <= 0))[0]) == null ? void 0 : a[0]) || te[0][0];
      return B !== o ? {
        data: {
          index: x + 1,
          overflows: oe
        },
        reset: {
          placement: B
        }
      } : {};
    }
  };
}, R1 = function(e) {
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
        fallbackPlacements: _,
        fallbackStrategy: T = "bestFit",
        fallbackAxisSideDirection: O = "none",
        flipAlignment: A = !0,
        ...x
      } = ga(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const P = vi(a), I = li(o), K = vi(o) === o, M = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), oe = _ || (K || !A ? [oo(o)] : _1(o)), de = O !== "none";
      !_ && de && oe.push(...E1(o, A, O, M));
      const te = [o, ...oe], ve = await l.detectOverflow(t, x), B = [];
      let F = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && B.push(ve[P]), h) {
        const D = hp(a, s, M);
        B.push(ve[D[0]], ve[D[1]]);
      }
      if (F = [...F, {
        placement: a,
        overflows: B
      }], !B.every((D) => D <= 0)) {
        var ue, J;
        const D = (((ue = r.flip) == null ? void 0 : ue.index) || 0) + 1, $ = te[D];
        if ($ && (!(h === "alignment" ? I !== li($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        F.every((ie) => li(ie.placement) === I ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: F
            },
            reset: {
              placement: $
            }
          };
        let X = (J = F.filter((re) => re.overflows[0] <= 0).sort((re, ie) => re.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!X)
          switch (T) {
            case "bestFit": {
              var ne;
              const re = (ne = F.filter((ie) => {
                if (de) {
                  const he = li(ie.placement);
                  return he === I || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  he === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((he) => he > 0).reduce((he, ce) => he + ce, 0)]).sort((ie, he) => ie[1] - he[1])[0]) == null ? void 0 : ne[0];
              re && (X = re);
              break;
            }
            case "initialPlacement":
              X = o;
              break;
          }
        if (a !== X)
          return {
            reset: {
              placement: X
            }
          };
      }
      return {};
    }
  };
}, I1 = /* @__PURE__ */ new Set(["left", "top"]);
async function P1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = vi(n), o = kn(n), l = li(n) === "y", d = I1.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = ga(t, e);
  let {
    mainAxis: _,
    crossAxis: T,
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
  return o && typeof O == "number" && (T = o === "end" ? O * -1 : O), l ? {
    x: T * u,
    y: _ * d
  } : {
    x: _ * d,
    y: T * u
  };
}
const D1 = function(e) {
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
      } = t, l = await P1(t, e);
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
}, M1 = function(e) {
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
          fn: (I) => {
            let {
              x: K,
              y: M
            } = I;
            return {
              x: K,
              y: M
            };
          }
        },
        ...d
      } = ga(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, d), _ = li(a), T = fp(_);
      let O = u[T], A = u[_];
      const x = (I, K) => dp(K + h[I === "y" ? "top" : "left"], K, K - h[I === "y" ? "bottom" : "right"]);
      s && (O = x(T, O)), o && (A = x(_, A));
      const P = l.fn({
        ...t,
        [T]: O,
        [_]: A
      });
      return {
        ...P,
        data: {
          x: P.x - n,
          y: P.y - i,
          enabled: {
            [T]: s,
            [_]: o
          }
        }
      };
    }
  };
}, $1 = function(e) {
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
      } = ga(e, t), l = await a.detectOverflow(t, o), d = vi(n), u = kn(n), h = li(n) === "y", {
        width: _,
        height: T
      } = i.floating;
      let O, A;
      d === "top" || d === "bottom" ? (O = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, O = u === "end" ? "top" : "bottom");
      const x = T - l.top - l.bottom, P = _ - l.left - l.right, I = ts(T - l[O], x), K = ts(_ - l[A], P), M = t.middlewareData.shift, oe = !M;
      let de = I, te = K;
      M != null && M.enabled.x && (te = P), M != null && M.enabled.y && (de = x), oe && !u && (h ? te = _ - 2 * mc(l.left, l.right) : de = T - 2 * mc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: te,
        availableHeight: de
      });
      const ve = await a.getDimensions(r.floating);
      return _ !== ve.width || T !== ve.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function mn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Vn(e) {
  return mn(e).getComputedStyle(e);
}
const jd = Math.min, Pr = Math.max, lo = Math.round;
function vp(e) {
  const t = Vn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = lo(n) !== a || lo(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function Bi(e) {
  return mp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ks;
function gp() {
  if (ks) return ks;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ks = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), ks) : navigator.userAgent;
}
function Gn(e) {
  return e instanceof mn(e).HTMLElement;
}
function Mi(e) {
  return e instanceof mn(e).Element;
}
function mp(e) {
  return e instanceof mn(e).Node;
}
function Vd(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof mn(e).ShadowRoot || e instanceof ShadowRoot;
}
function al(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Vn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function F1(e) {
  return ["table", "td", "th"].includes(Bi(e));
}
function bc(e) {
  const t = /firefox/i.test(gp()), n = Vn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function bp() {
  return !/^((?!chrome|android).)*safari/i.test(gp());
}
function iu(e) {
  return ["html", "body", "#document"].includes(Bi(e));
}
function yp(e) {
  return Mi(e) ? e : e.contextElement;
}
const _p = { x: 1, y: 1 };
function Wa(e) {
  const t = yp(e);
  if (!Gn(t)) return _p;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = vp(t);
  let s = (r ? lo(n.width) : n.width) / i, o = (r ? lo(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function ns(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = yp(e);
  let l = _p;
  t && (i ? Mi(i) && (l = Wa(i)) : l = Wa(e));
  const d = o ? mn(o) : window, u = !bp() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, _ = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, T = s.width / l.x, O = s.height / l.y;
  if (o) {
    const A = mn(o), x = i && Mi(i) ? mn(i) : i;
    let P = A.frameElement;
    for (; P && i && x !== A; ) {
      const I = Wa(P), K = P.getBoundingClientRect(), M = getComputedStyle(P);
      K.x += (P.clientLeft + parseFloat(M.paddingLeft)) * I.x, K.y += (P.clientTop + parseFloat(M.paddingTop)) * I.y, h *= I.x, _ *= I.y, T *= I.x, O *= I.y, h += K.x, _ += K.y, P = mn(P).frameElement;
    }
  }
  return { width: T, height: O, top: _, right: h + T, bottom: _ + O, left: h, x: h, y: _ };
}
function $i(e) {
  return ((mp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function rl(e) {
  return Mi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function wp(e) {
  return ns($i(e)).left + rl(e).scrollLeft;
}
function is(e) {
  if (Bi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Vd(e) && e.host || $i(e);
  return Vd(t) ? t.host : t;
}
function Cp(e) {
  const t = is(e);
  return iu(t) ? t.ownerDocument.body : Gn(t) && al(t) ? t : Cp(t);
}
function co(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Cp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = mn(i);
  return a ? t.concat(r, r.visualViewport || [], al(i) ? i : []) : t.concat(i, co(i));
}
function Gd(e, t, n) {
  return t === "viewport" ? Ir((function(i, a) {
    const r = mn(i), s = $i(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const _ = bp();
      (_ || !_ && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : Mi(t) ? Ir((function(i, a) {
    const r = ns(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Gn(i) ? Wa(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Ir((function(i) {
    const a = $i(i), r = rl(i), s = i.ownerDocument.body, o = Pr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Pr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + wp(i);
    const u = -r.scrollTop;
    return Vn(s).direction === "rtl" && (d += Pr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })($i(e)));
}
function Kd(e) {
  return Gn(e) && Vn(e).position !== "fixed" ? e.offsetParent : null;
}
function Wd(e) {
  const t = mn(e);
  let n = Kd(e);
  for (; n && F1(n) && Vn(n).position === "static"; ) n = Kd(n);
  return n && (Bi(n) === "html" || Bi(n) === "body" && Vn(n).position === "static" && !bc(n)) ? t : n || (function(i) {
    let a = is(i);
    for (; Gn(a) && !iu(a); ) {
      if (bc(a)) return a;
      a = is(a);
    }
    return null;
  })(e) || t;
}
function z1(e, t, n) {
  const i = Gn(t), a = $i(t), r = ns(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Bi(t) !== "body" || al(a)) && (s = rl(t)), Gn(t)) {
    const l = ns(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = wp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const U1 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let _ = co(d).filter(((x) => Mi(x) && Bi(x) !== "body")), T = null;
    const O = Vn(d).position === "fixed";
    let A = O ? is(d) : d;
    for (; Mi(A) && !iu(A); ) {
      const x = Vn(A), P = bc(A);
      (O ? P || T : P || x.position !== "static" || !T || !["absolute", "fixed"].includes(T.position)) ? T = x : _ = _.filter(((I) => I !== A)), A = is(A);
    }
    return u.set(d, _), _;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = Gd(t, u, a);
    return d.top = Pr(h.top, d.top), d.right = jd(h.right, d.right), d.bottom = jd(h.bottom, d.bottom), d.left = Pr(h.left, d.left), d;
  }), Gd(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Gn(n), r = $i(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Bi(n) !== "body" || al(r)) && (s = rl(n)), Gn(n))) {
    const d = ns(n);
    o = Wa(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Mi, getDimensions: function(e) {
  return Gn(e) ? vp(e) : e.getBoundingClientRect();
}, getOffsetParent: Wd, getDocumentElement: $i, getScale: Wa, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Wd, r = this.getDimensions;
  return { reference: z1(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Vn(e).direction === "rtl" }, B1 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: U1, ...n }, r = { ...a.platform, _c: i };
  return O1(e, t, { ...a, platform: r });
}, Fi = {
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
function yc(e, t) {
  let n = Fi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Fi.themes[n.$extend] || {} : (n = null, i = Fi[t]) : n = null;
  while (n);
  return i;
}
function H1(e) {
  const t = [e];
  let n = Fi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Fi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function qd(e) {
  const t = [e];
  let n = Fi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Fi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let as = !1;
if (typeof window < "u") {
  as = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        as = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Sp = !1;
typeof window < "u" && typeof navigator < "u" && (Sp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const j1 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Yd = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Xd = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Zd(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Vl() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Tn = [];
let ea = null;
const Jd = {};
function Qd(e) {
  let t = Jd[e];
  return t || (t = Jd[e] = []), t;
}
let _c = function() {
};
typeof window < "u" && (_c = window.Element);
function ze(e) {
  return function(t) {
    return yc(t.theme, e);
  };
}
const Gl = "__floating-vue__popper", Ep = () => /* @__PURE__ */ At({
  name: "VPopper",
  provide() {
    return {
      [Gl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Gl]: { default: null }
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
      validator: (e) => j1.includes(e)
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
      type: [String, Object, _c, Boolean],
      default: ze("container")
    },
    boundary: {
      type: [String, _c],
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
      return (e = this[Gl]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(D1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(L1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(M1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(R1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(N1({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push($1({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await B1(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ea && this.instantMove && ea.instantMove && ea !== this.parentPopper) {
        ea.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ea = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Vl(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...co(this.$_referenceNode),
        ...co(this.$_popperNode)
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
        for (let n = 0; n < Tn.length; n++)
          t = Tn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Tn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of qd(this.theme))
        Qd(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Vl(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Zd(Tn, this), Tn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of qd(this.theme)) {
        const i = Qd(n);
        Zd(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      ea === this && (ea = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Vl(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Yd, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Yd, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Xd, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Xd, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, as ? {
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
      if (Dr >= e.left && Dr <= e.right && Mr >= e.top && Mr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Dr - Li, i = Mr - Ri, a = t.left + t.width / 2 - Li + (t.top + t.height / 2) - Ri + t.width + t.height, r = Li + n * a, s = Ri + i * a;
        return Os(Li, Ri, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Os(Li, Ri, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Os(Li, Ri, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Os(Li, Ri, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Sp) {
    const e = as ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => ef(t), e), document.addEventListener("touchend", (t) => tf(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => ef(e), !0), window.addEventListener("click", (e) => tf(e, !1), !0);
  window.addEventListener("resize", K1);
}
function ef(e, t) {
  for (let n = 0; n < Tn.length; n++) {
    const i = Tn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function tf(e, t) {
  V1(e, t);
}
function V1(e, t) {
  const n = {};
  for (let i = Tn.length - 1; i >= 0; i--) {
    const a = Tn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && nf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && nf(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function nf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || G1(e, n) && !t;
}
function G1(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function K1() {
  for (let e = 0; e < Tn.length; e++)
    Tn[e].$_computePosition();
}
let Li = 0, Ri = 0, Dr = 0, Mr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Li = Dr, Ri = Mr, Dr = e.clientX, Mr = e.clientY;
}, as ? {
  passive: !0
} : void 0);
function Os(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const W1 = {
  extends: Ep()
}, au = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function q1(e, t, n, i, a, r) {
  return b(), E("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Re(e.$slots, "default", $s(Xr(e.slotData)))
  ], 2);
}
const Y1 = /* @__PURE__ */ au(W1, [["render", q1]]);
function X1() {
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
let Ds;
function wc() {
  wc.init || (wc.init = !0, Ds = X1() !== -1);
}
var sl = {
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
    wc(), Hn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ds && this.$el.appendChild(e), e.data = "about:blank", Ds || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Ds && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Z1 = /* @__PURE__ */ Xv();
qv("data-v-b329ee4c");
const J1 = {
  class: "resize-observer",
  tabindex: "-1"
};
Yv();
const Q1 = /* @__PURE__ */ Z1((e, t, n, i, a, r) => (b(), Fe("div", J1)));
sl.render = Q1;
sl.__scopeId = "data-v-b329ee4c";
sl.__file = "src/components/ResizeObserver.vue";
const Tp = (e = "theme") => ({
  computed: {
    themeClass() {
      return H1(this[e]);
    }
  }
}), e0 = /* @__PURE__ */ At({
  name: "VPopperContent",
  components: {
    ResizeObserver: sl
  },
  mixins: [
    Tp()
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
}), t0 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], n0 = {
  ref: "inner",
  class: "v-popper__inner"
}, i0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), a0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), r0 = [
  i0,
  a0
];
function s0(e, t, n, i, a, r) {
  const s = Ue("ResizeObserver");
  return b(), E("div", {
    id: e.popperId,
    ref: "popover",
    class: Ee(["v-popper__popper", [
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
    style: ln(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = jt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    c("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (o) => e.autoHide && e.$emit("hide"))
    }),
    c("div", {
      class: "v-popper__wrapper",
      style: ln(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", n0, [
        e.mounted ? (b(), E(le, { key: 0 }, [
          c("div", null, [
            Re(e.$slots, "default")
          ]),
          e.handleResize ? (b(), Fe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : j("", !0)
        ], 64)) : j("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: ln(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, r0, 4)
    ], 4)
  ], 46, t0);
}
const Ap = /* @__PURE__ */ au(e0, [["render", s0]]), kp = {
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
let Cc = function() {
};
typeof window < "u" && (Cc = window.Element);
const o0 = /* @__PURE__ */ At({
  name: "VPopperWrapper",
  components: {
    Popper: Y1,
    PopperContent: Ap
  },
  mixins: [
    kp,
    Tp("finalTheme")
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
      type: [String, Object, Cc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, Cc],
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
function l0(e, t, n, i, a, r) {
  const s = Ue("PopperContent"), o = Ue("Popper");
  return b(), Fe(o, zt({ ref: "popper" }, e.$props, {
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
      autoHide: _,
      show: T,
      hide: O,
      handleResize: A,
      onResize: x,
      classes: P,
      result: I
    }) => [
      Re(e.$slots, "default", {
        shown: d,
        show: T,
        hide: O
      }),
      ye(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: d,
        mounted: u,
        "skip-transition": h,
        "auto-hide": _,
        "handle-resize": A,
        classes: P,
        result: I,
        onHide: O,
        onResize: x
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
const ru = /* @__PURE__ */ au(o0, [["render", l0]]), c0 = {
  ...ru,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...ru
});
({
  ...ru
});
Ep();
const af = Fi, u0 = c0, d0 = /* @__PURE__ */ At({
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
}), f0 = "_ncPopover_qgtYg", h0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: f0
}, Op = "nc-popover-9";
af.themes[Op] = structuredClone(af.themes.dropdown);
const p0 = {
  name: "NcPopover",
  components: {
    Dropdown: u0,
    NcPopoverTriggerProvider: d0
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
      theme: Op
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
      return this.placement === "start" ? pc ? "right" : "left" : this.placement === "end" ? pc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Qc(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: es(),
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
        fa.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function v0(e, t, n, i, a, r) {
  const s = Ue("NcPopoverTriggerProvider"), o = Ue("Dropdown");
  return b(), Fe(o, {
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
      Re(e.$slots, "default", $s(Xr(l)))
    ]),
    default: ke(() => [
      ye(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: ke((l) => [
          Re(e.$slots, "trigger", $s(Xr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const g0 = {
  $style: h0
}, rf = /* @__PURE__ */ Ye(p0, [["render", v0], ["__cssModules", g0]]), m0 = {
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
}, b0 = ["aria-hidden", "aria-label"], y0 = ["fill", "width", "height"], _0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, w0 = { key: 0 };
function C0(e, t, n, i, a, r) {
  return b(), E("span", zt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", _0, [
        n.title ? (b(), E("title", w0, p(n.title), 1)) : j("", !0)
      ])
    ], 8, y0))
  ], 16, b0);
}
const S0 = /* @__PURE__ */ Ye(m0, [["render", C0]]);
ji(ny);
function su(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Et)
        return !1;
      if (n.type === le && !su(n.children))
        return !1;
      if (n.type === us && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const E0 = ".focusable", T0 = {
  name: "NcActions",
  components: {
    NcButton: jn,
    NcPopover: rf
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
      [eu]: Y(() => this.actionsMenuSemanticType === "menu"),
      [cp]: this.closeMenu
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
      default: mt("Actions")
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
      randomId: il()
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
    m1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(E0);
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
    const e = [], t = (T, O) => {
      T.forEach((A) => {
        if (this.isAction(A)) {
          O.push(A);
          return;
        }
        A.type === le && t(A.children, O);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((T) => !i.includes(T)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((T) => s.includes(this.getActionName(T))), d = a.some((T) => r.includes(this.getActionName(T))), u = a.some((T) => o.includes(this.getActionName(T)));
    l ? this.actionsMenuSemanticType = "dialog" : d ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((O) => this.getActionName(O).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (T) => {
      const O = T?.props?.icon, A = T?.children?.icon?.()?.[0] ?? (this.isIconUrl(O) ? Xt("img", { class: "action-item__menutoggle__icon", src: O, alt: "" }) : Xt("span", { class: ["icon", O] })), x = T?.children?.default?.()?.[0]?.children?.trim(), P = this.forceName ? x : "";
      let I = T?.props?.title;
      this.forceName || I || (I = x);
      const K = { ...T?.props ?? {} }, M = ["submit", "reset"].includes(K.type) ? K.modelValue : "button";
      return delete K.modelValue, delete K.type, Xt(
        jn,
        zt(
          K,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": T?.props?.["aria-label"] || x,
            title: I,
            disabled: this.disabled || T?.props?.disabled,
            pressed: T?.props?.modelValue,
            size: this.size,
            type: M,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (P ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": T?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => P,
          icon: () => A
        }
      );
    }, _ = (T) => {
      const O = su(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Xt("span", { class: ["icon", this.defaultIcon] }) : Xt(S0, { size: 20 }), A = `${this.randomId}-trigger`;
      return Xt(
        rf,
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
          trigger: () => Xt(jn, {
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
              T
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
          [_(a)]
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
        _(e)
      ]
    ));
  }
}, uo = /* @__PURE__ */ Ye(T0, [["__scopeId", "data-v-7206c1f1"]]), A0 = ["aria-label"], k0 = ["width", "height"], O0 = ["fill"], N0 = ["fill"], x0 = { key: 0 }, L0 = /* @__PURE__ */ At({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = Y(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (b(), E("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (b(), E("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, O0),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (b(), E("title", x0, p(e.name), 1)) : j("", !0)
        ], 8, N0)
      ], 8, k0))
    ], 8, A0));
  }
}), Np = /* @__PURE__ */ Ye(L0, [["__scopeId", "data-v-cf399190"]]), Sc = /* @__PURE__ */ At({
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
}), R0 = {
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
}, I0 = ["aria-hidden", "aria-label"], P0 = ["fill", "width", "height"], D0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, M0 = { key: 0 };
function $0(e, t, n, i, a, r) {
  return b(), E("span", zt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", D0, [
        n.title ? (b(), E("title", M0, p(n.title), 1)) : j("", !0)
      ])
    ], 8, P0))
  ], 16, I0);
}
const F0 = /* @__PURE__ */ Ye(R0, [["render", $0]]), z0 = {
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
}, U0 = ["aria-hidden", "aria-label"], B0 = ["fill", "width", "height"], H0 = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, j0 = { key: 0 };
function V0(e, t, n, i, a, r) {
  return b(), E("span", zt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", H0, [
        n.title ? (b(), E("title", j0, p(n.title), 1)) : j("", !0)
      ])
    ], 8, B0))
  ], 16, U0);
}
const G0 = /* @__PURE__ */ Ye(z0, [["render", V0]]);
ji(sy);
const K0 = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: jn,
    ChevronDown: D_,
    ChevronUp: H_
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
    return { isLegacy34: Vi };
  },
  computed: {
    labelButton() {
      return this.open ? mt("Collapse menu") : mt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function W0(e, t, n, i, a, r) {
  const s = Ue("ChevronUp"), o = Ue("ChevronDown"), l = Ue("NcButton");
  return b(), Fe(l, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: ke(() => [
      n.open ? (b(), Fe(s, {
        key: 0,
        size: 20
      })) : (b(), Fe(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const q0 = /* @__PURE__ */ Ye(K0, [["render", W0], ["__scopeId", "data-v-cfbd3794"]]);
ji(oy, uy);
const Y0 = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: uo,
    NcActionButton: g1,
    NcAppNavigationIconCollapsible: q0,
    NcInputConfirmCancel: a1,
    NcLoadingIcon: Np,
    NcVNodes: Sc,
    Pencil: F0,
    Undo: G0
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: ip, default: null }
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
      default: () => il(),
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
      isMobile: fs(),
      isLegacy34: Vi
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
      return this.editLabel ? this.editLabel : mt("Edit item");
    },
    undoButtonAriaLabel() {
      return mt("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && di("toggle-navigation", { open: !1 }));
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
}, X0 = ["id"], Z0 = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], J0 = {
  key: 0,
  class: "editingContainer"
}, Q0 = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, ew = { class: "app-navigation-entry__deleted-description" }, tw = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, nw = {
  key: 0,
  class: "app-navigation-entry__children"
};
function iw(e, t, n, i, a, r) {
  const s = Ue("NcLoadingIcon"), o = Ue("NcInputConfirmCancel"), l = Ue("Pencil"), d = Ue("NcActionButton"), u = Ue("Undo"), h = Ue("NcActions"), _ = Ue("NcAppNavigationIconCollapsible");
  return b(), E("li", {
    id: n.id,
    class: Ee([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (b(), Fe(jc(r.isRouterLink ? "router-link" : "NcVNodes"), $s(Xr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: ke(({ href: T, navigate: O, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: Ee(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...x) => r.requestHighlight && r.requestHighlight(...x)),
          onFocusin: t[5] || (t[5] = (...x) => r.requestHighlight && r.requestHighlight(...x))
        }, [
          n.undo ? j("", !0) : (b(), E("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && A ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || T || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...x) => r.handleBlur && r.handleBlur(...x)),
            onClick: (x) => r.onClick(x, O, T),
            onFocus: t[2] || (t[2] = (...x) => r.handleFocus && r.handleFocus(...x)),
            onKeydown: t[3] || (t[3] = jt(Xe((...x) => r.handleTab && r.handleTab(...x), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Ee(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (b(), Fe(s, { key: 0 })) : Re(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (b(), E("div", J0, [
              ye(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (x) => a.editingValue = x),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : j("", !0)
          ], 40, Z0)),
          n.undo ? (b(), E("div", Q0, [
            c("div", ew, p(n.name), 1)
          ])) : j("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (b(), E("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (b(), E("div", tw, [
              Re(e.$slots, "counter", {}, void 0, !0)
            ])) : j("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (b(), Fe(h, {
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
                n.editable && !a.editingActive ? (b(), Fe(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: ke(() => [
                    ye(l, { size: 20 })
                  ]),
                  default: ke(() => [
                    Oe(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                n.undo ? (b(), Fe(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: ke(() => [
                    ye(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                Re(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : j("", !0)
          ], 2)) : j("", !0),
          n.allowCollapse && e.$slots.default ? (b(), Fe(_, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Xe(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : j("", !0),
          Re(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (b(), E("ul", nw, [
      Re(e.$slots, "default", {}, void 0, !0)
    ])) : j("", !0)
  ], 10, X0);
}
const sf = /* @__PURE__ */ Ye(Y0, [["render", iw], ["__scopeId", "data-v-01bef41b"]]), Kl = /* @__PURE__ */ new WeakMap(), aw = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = xd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = xd(e, a, Object.assign({ capture: n }, r));
    }
    Kl.set(e, i);
  },
  unmounted(e) {
    const t = Kl.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Kl.delete(e);
  }
}, rw = {
  mounted(e) {
    e.focus();
  }
}, sw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", ow = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Ec = "numeric", Tc = "ascii", Ac = "alpha", $r = "asciinumeric", Ar = "alphanumeric", kc = "domain", xp = "emoji", lw = "scheme", cw = "slashscheme", Wl = "whitespace";
function uw(e, t) {
  return e in t || (t[e] = []), t[e];
}
function la(e, t, n) {
  t[Ec] && (t[$r] = !0, t[Ar] = !0), t[Tc] && (t[$r] = !0, t[Ac] = !0), t[$r] && (t[Ar] = !0), t[Ac] && (t[Ar] = !0), t[Ar] && (t[kc] = !0), t[xp] && (t[kc] = !0);
  for (const i in t) {
    const a = uw(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function dw(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function sn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
sn.groups = {};
sn.prototype = {
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
    i = i || sn.groups;
    let a;
    return t && t.j ? a = t : (a = new sn(t), n && i && la(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || sn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new sn(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new sn(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(dw(s.t, i), n);
          la(r, l, i);
        } else n && la(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const De = (e, t, n, i, a) => e.ta(t, n, i, a), st = (e, t, n, i, a) => e.tr(t, n, i, a), of = (e, t, n, i, a) => e.ts(t, n, i, a), ee = (e, t, n, i, a) => e.tt(t, n, i, a), ni = "WORD", Oc = "UWORD", Lp = "ASCIINUMERICAL", Rp = "ALPHANUMERICAL", rs = "LOCALHOST", Nc = "TLD", xc = "UTLD", Ms = "SCHEME", za = "SLASH_SCHEME", ou = "NUM", Lc = "WS", lu = "NL", Fr = "OPENBRACE", zr = "CLOSEBRACE", fo = "OPENBRACKET", ho = "CLOSEBRACKET", po = "OPENPAREN", vo = "CLOSEPAREN", go = "OPENANGLEBRACKET", mo = "CLOSEANGLEBRACKET", bo = "FULLWIDTHLEFTPAREN", yo = "FULLWIDTHRIGHTPAREN", _o = "LEFTCORNERBRACKET", wo = "RIGHTCORNERBRACKET", Co = "LEFTWHITECORNERBRACKET", So = "RIGHTWHITECORNERBRACKET", Eo = "FULLWIDTHLESSTHAN", To = "FULLWIDTHGREATERTHAN", Ao = "AMPERSAND", ko = "APOSTROPHE", Oo = "ASTERISK", Pi = "AT", No = "BACKSLASH", xo = "BACKTICK", Lo = "CARET", ca = "COLON", cu = "COMMA", Ro = "DOLLAR", Fn = "DOT", Io = "EQUALS", uu = "EXCLAMATION", pn = "HYPHEN", Ur = "PERCENT", Po = "PIPE", Do = "PLUS", Mo = "POUND", Br = "QUERY", du = "QUOTE", Ip = "FULLWIDTHMIDDLEDOT", fu = "SEMI", zn = "SLASH", Hr = "TILDE", $o = "UNDERSCORE", Pp = "EMOJI", Fo = "SYM";
var Dp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Rp,
  AMPERSAND: Ao,
  APOSTROPHE: ko,
  ASCIINUMERICAL: Lp,
  ASTERISK: Oo,
  AT: Pi,
  BACKSLASH: No,
  BACKTICK: xo,
  CARET: Lo,
  CLOSEANGLEBRACKET: mo,
  CLOSEBRACE: zr,
  CLOSEBRACKET: ho,
  CLOSEPAREN: vo,
  COLON: ca,
  COMMA: cu,
  DOLLAR: Ro,
  DOT: Fn,
  EMOJI: Pp,
  EQUALS: Io,
  EXCLAMATION: uu,
  FULLWIDTHGREATERTHAN: To,
  FULLWIDTHLEFTPAREN: bo,
  FULLWIDTHLESSTHAN: Eo,
  FULLWIDTHMIDDLEDOT: Ip,
  FULLWIDTHRIGHTPAREN: yo,
  HYPHEN: pn,
  LEFTCORNERBRACKET: _o,
  LEFTWHITECORNERBRACKET: Co,
  LOCALHOST: rs,
  NL: lu,
  NUM: ou,
  OPENANGLEBRACKET: go,
  OPENBRACE: Fr,
  OPENBRACKET: fo,
  OPENPAREN: po,
  PERCENT: Ur,
  PIPE: Po,
  PLUS: Do,
  POUND: Mo,
  QUERY: Br,
  QUOTE: du,
  RIGHTCORNERBRACKET: wo,
  RIGHTWHITECORNERBRACKET: So,
  SCHEME: Ms,
  SEMI: fu,
  SLASH: zn,
  SLASH_SCHEME: za,
  SYM: Fo,
  TILDE: Hr,
  TLD: Nc,
  UNDERSCORE: $o,
  UTLD: xc,
  UWORD: Oc,
  WORD: ni,
  WS: Lc
});
const Qn = /[a-z]/, _r = new RegExp("\\p{L}", "u"), ql = new RegExp("\\p{Emoji}", "u"), ei = /\d/, Yl = /\s/, lf = "\r", Xl = `
`, fw = "️", hw = "‍", Zl = "￼";
let Ns = null, xs = null;
function pw(e = []) {
  const t = {};
  sn.groups = t;
  const n = new sn();
  Ns == null && (Ns = cf(sw)), xs == null && (xs = cf(ow)), ee(n, "'", ko), ee(n, "{", Fr), ee(n, "}", zr), ee(n, "[", fo), ee(n, "]", ho), ee(n, "(", po), ee(n, ")", vo), ee(n, "<", go), ee(n, ">", mo), ee(n, "（", bo), ee(n, "）", yo), ee(n, "「", _o), ee(n, "」", wo), ee(n, "『", Co), ee(n, "』", So), ee(n, "＜", Eo), ee(n, "＞", To), ee(n, "&", Ao), ee(n, "*", Oo), ee(n, "@", Pi), ee(n, "`", xo), ee(n, "^", Lo), ee(n, ":", ca), ee(n, ",", cu), ee(n, "$", Ro), ee(n, ".", Fn), ee(n, "=", Io), ee(n, "!", uu), ee(n, "-", pn), ee(n, "%", Ur), ee(n, "|", Po), ee(n, "+", Do), ee(n, "#", Mo), ee(n, "?", Br), ee(n, '"', du), ee(n, "/", zn), ee(n, ";", fu), ee(n, "~", Hr), ee(n, "_", $o), ee(n, "\\", No), ee(n, "・", Ip);
  const i = st(n, ei, ou, {
    [Ec]: !0
  });
  st(i, ei, i);
  const a = st(i, Qn, Lp, {
    [$r]: !0
  }), r = st(i, _r, Rp, {
    [Ar]: !0
  }), s = st(n, Qn, ni, {
    [Tc]: !0
  });
  st(s, ei, a), st(s, Qn, s), st(a, ei, a), st(a, Qn, a);
  const o = st(n, _r, Oc, {
    [Ac]: !0
  });
  st(o, Qn), st(o, ei, r), st(o, _r, o), st(r, ei, r), st(r, Qn), st(r, _r, r);
  const l = ee(n, Xl, lu, {
    [Wl]: !0
  }), d = ee(n, lf, Lc, {
    [Wl]: !0
  }), u = st(n, Yl, Lc, {
    [Wl]: !0
  });
  ee(n, Zl, u), ee(d, Xl, l), ee(d, Zl, u), st(d, Yl, u), ee(u, lf), ee(u, Xl), st(u, Yl, u), ee(u, Zl, u);
  const h = st(n, ql, Pp, {
    [xp]: !0
  });
  ee(h, "#"), st(h, ql, h), ee(h, fw, h);
  const _ = ee(h, hw);
  ee(_, "#"), st(_, ql, h);
  const T = [[Qn, s], [ei, a]], O = [[Qn, null], [_r, o], [ei, r]];
  for (let A = 0; A < Ns.length; A++)
    Ni(n, Ns[A], Nc, ni, T);
  for (let A = 0; A < xs.length; A++)
    Ni(n, xs[A], xc, Oc, O);
  la(Nc, {
    tld: !0,
    ascii: !0
  }, t), la(xc, {
    utld: !0,
    alpha: !0
  }, t), Ni(n, "file", Ms, ni, T), Ni(n, "mailto", Ms, ni, T), Ni(n, "http", za, ni, T), Ni(n, "https", za, ni, T), Ni(n, "ftp", za, ni, T), Ni(n, "ftps", za, ni, T), la(Ms, {
    scheme: !0,
    ascii: !0
  }, t), la(za, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, x) => A[0] > x[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const x = e[A][0], I = e[A][1] ? {
      [lw]: !0
    } : {
      [cw]: !0
    };
    x.indexOf("-") >= 0 ? I[kc] = !0 : Qn.test(x) ? ei.test(x) ? I[$r] = !0 : I[Tc] = !0 : I[Ec] = !0, of(n, x, x, I);
  }
  return of(n, "localhost", rs, {
    ascii: !0
  }), n.jd = new sn(Fo), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Dp)
  };
}
function Mp(e, t) {
  const n = vw(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
  let r = 0, s = 0;
  for (; s < i; ) {
    let o = e, l = null, d = 0, u = null, h = -1, _ = -1;
    for (; s < i && (l = o.go(n[s])); )
      o = l, o.accepts() ? (h = 0, _ = 0, u = o) : h >= 0 && (h += n[s].length, _++), d += n[s].length, r += n[s].length, s++;
    r -= h, s -= _, d -= h, a.push({
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
function vw(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function Ni(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new sn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new sn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function cf(e) {
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
const ss = {
  defaultProtocol: "http",
  events: null,
  format: uf,
  formatHref: uf,
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
function hu(e, t = null) {
  let n = Object.assign({}, ss);
  e && (n = Object.assign(n, e instanceof hu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
hu.prototype = {
  o: ss,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : ss[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function uf(e) {
  return e;
}
function $p(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
$p.prototype = {
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
  toObject(e = ss.defaultProtocol) {
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
function ol(e, t) {
  class n extends $p {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const gw = ol("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), df = ol("text"), mw = ol("nl"), Ls = ol("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = ss.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== rs && e[1].t === ca;
  }
}), hn = (e) => new sn(e);
function bw({
  groups: e
}) {
  const t = e.domain.concat([Ao, Oo, Pi, No, xo, Lo, Ro, Io, pn, ou, Ur, Po, Do, Mo, zn, Fo, Hr, $o]), n = [ko, ca, cu, Fn, uu, Ur, Br, du, fu, go, mo, Fr, zr, ho, fo, po, vo, bo, yo, _o, wo, Co, So, Eo, To], i = [Ao, ko, Oo, No, xo, Lo, Ro, Io, pn, Fr, zr, Ur, Po, Do, Mo, Br, zn, Fo, Hr, $o], a = hn(), r = ee(a, Hr);
  De(r, i, r), De(r, e.domain, r);
  const s = hn(), o = hn(), l = hn();
  De(a, e.domain, s), De(a, e.scheme, o), De(a, e.slashscheme, l), De(s, i, r), De(s, e.domain, s);
  const d = ee(s, Pi);
  ee(r, Pi, d), ee(o, Pi, d), ee(l, Pi, d);
  const u = ee(r, Fn);
  De(u, i, r), De(u, e.domain, r);
  const h = hn();
  De(d, e.domain, h), De(h, e.domain, h);
  const _ = ee(h, Fn);
  De(_, e.domain, h);
  const T = hn(gw);
  De(_, e.tld, T), De(_, e.utld, T), ee(d, rs, T);
  const O = ee(h, pn);
  ee(O, pn, O), De(O, e.domain, h), De(T, e.domain, h), ee(T, Fn, _), ee(T, pn, O);
  const A = ee(s, pn), x = ee(s, Fn);
  ee(A, pn, A), De(A, e.domain, s), De(x, i, r), De(x, e.domain, s);
  const P = hn(Ls);
  De(x, e.tld, P), De(x, e.utld, P), De(P, e.domain, s), De(P, i, r), ee(P, Fn, x), ee(P, pn, A), ee(P, Pi, d);
  const I = ee(P, ca), K = hn(Ls);
  De(I, e.numeric, K);
  const M = hn(Ls), oe = hn();
  De(M, t, M), De(M, n, oe), De(oe, t, M), De(oe, n, oe), ee(P, zn, M), ee(K, zn, M);
  const de = ee(o, ca), te = ee(l, ca), ve = ee(te, zn), B = ee(ve, zn);
  De(o, e.domain, s), ee(o, Fn, x), ee(o, pn, A), De(l, e.domain, s), ee(l, Fn, x), ee(l, pn, A), De(de, e.domain, M), ee(de, zn, M), ee(de, Br, M), De(B, e.domain, M), De(B, t, M), ee(B, zn, M);
  const F = [
    [Fr, zr],
    // {}
    [fo, ho],
    // []
    [po, vo],
    // ()
    [go, mo],
    // <>
    [bo, yo],
    // （）
    [_o, wo],
    // 「」
    [Co, So],
    // 『』
    [Eo, To]
    // ＜＞
  ];
  for (let ue = 0; ue < F.length; ue++) {
    const [J, ne] = F[ue], D = ee(M, J);
    ee(oe, J, D);
    const $ = hn(Ls);
    De(D, t, $);
    const X = hn();
    De(D, n, X), ee(D, ne, M), De($, t, $), De($, n, X), De(X, t, $), De(X, n, X), ee($, ne, M), ee(X, ne, M);
  }
  return ee(a, rs, P), ee(a, lu, mw), {
    start: a,
    tokens: Dp
  };
}
function yw(e, t, n) {
  let i = n.length, a = 0, r = [], s = [];
  for (; a < i; ) {
    let o = e, l = null, d = null, u = 0, h = null, _ = -1;
    for (; a < i && !(l = o.go(n[a].t)); )
      s.push(n[a++]);
    for (; a < i && (d = l || o.go(n[a].t)); )
      l = null, o = d, o.accepts() ? (_ = 0, h = o) : _ >= 0 && _++, a++, u++;
    if (_ < 0)
      a -= u, a < i && (s.push(n[a]), a++);
    else {
      s.length > 0 && (r.push(Jl(df, t, s)), s = []), a -= _, u -= _;
      const T = h.t, O = n.slice(a - u, a);
      r.push(Jl(T, t, O));
    }
  }
  return s.length > 0 && r.push(Jl(df, t, s)), r;
}
function Jl(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const Lt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function _w() {
  Lt.scanner = pw(Lt.customSchemes);
  for (let e = 0; e < Lt.tokenQueue.length; e++)
    Lt.tokenQueue[e][1]({
      scanner: Lt.scanner
    });
  Lt.parser = bw(Lt.scanner.tokens);
  for (let e = 0; e < Lt.pluginQueue.length; e++)
    Lt.pluginQueue[e][1]({
      scanner: Lt.scanner,
      parser: Lt.parser
    });
  return Lt.initialized = !0, Lt;
}
function Fp(e) {
  return Lt.initialized || _w(), yw(Lt.parser.start, e, Mp(Lt.scanner.start, e));
}
Fp.scan = Mp;
function ww(e) {
  const t = new hu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, Ew), n = Fp(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Js(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function Cw(e) {
  return e.replace(/"/g, "&quot;");
}
function Sw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${Cw(i)}"`);
  }
  return t.join(" ");
}
function Ew({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${Sw(t)}>${Js(n)}</${e}>`;
}
const Tw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = ww(t.text));
}, Aw = ["title"], kw = /* @__PURE__ */ At({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Pt("NcAppSidebar:header:ref");
    return (n, i) => Ke((b(), E("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Oe(p(e.name), 1)
    ], 8, Aw)), [
      [g(Tw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), Ow = ["aria-labelledby"], Nw = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, xw = ["id"], Lw = {
  key: 2,
  class: "empty-content__description"
}, Rw = {
  key: 3,
  class: "empty-content__action"
}, Iw = /* @__PURE__ */ At({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = il();
    return (n, i) => (b(), E("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (b(), E("div", Nw, [
        Re(n.$slots, "icon", {}, void 0, !0)
      ])) : j("", !0),
      e.name !== "" || n.$slots.name ? (b(), E("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Re(n.$slots, "name", {}, () => [
          Oe(p(e.name), 1)
        ], !0)
      ], 8, xw)) : j("", !0),
      e.description !== "" || n.$slots.description ? (b(), E("p", Lw, [
        Re(n.$slots, "description", {}, () => [
          Oe(p(e.description), 1)
        ], !0)
      ])) : j("", !0),
      n.$slots.action ? (b(), E("div", Rw, [
        Re(n.$slots, "action", {}, void 0, !0)
      ])) : j("", !0)
    ], 8, Ow));
  }
}), Pw = /* @__PURE__ */ Ye(Iw, [["__scopeId", "data-v-8609a4c1"]]), Dw = {
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
}, Mw = ["aria-hidden", "aria-label"], $w = ["fill", "width", "height"], Fw = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, zw = { key: 0 };
function Uw(e, t, n, i, a, r) {
  return b(), E("span", zt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Fw, [
        n.title ? (b(), E("title", zw, p(n.title), 1)) : j("", !0)
      ])
    ], 8, $w))
  ], 16, Mw);
}
const Bw = /* @__PURE__ */ Ye(Dw, [["render", Uw]]), Hw = {
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
}, jw = ["aria-hidden", "aria-label"], Vw = ["fill", "width", "height"], Gw = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, Kw = { key: 0 };
function Ww(e, t, n, i, a, r) {
  return b(), E("span", zt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Gw, [
        n.title ? (b(), E("title", Kw, p(n.title), 1)) : j("", !0)
      ])
    ], 8, Vw))
  ], 16, jw);
}
const qw = /* @__PURE__ */ Ye(Hw, [["render", Ww]]), Yw = {
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
}, Xw = ["aria-hidden", "aria-label"], Zw = ["fill", "width", "height"], Jw = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, Qw = { key: 0 };
function eC(e, t, n, i, a, r) {
  return b(), E("span", zt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Jw, [
        n.title ? (b(), E("title", Qw, p(n.title), 1)) : j("", !0)
      ])
    ], 8, Zw))
  ], 16, Xw);
}
const tC = /* @__PURE__ */ Ye(Yw, [["render", eC]]), nC = ["aria-selected", "tabindex"], iC = /* @__PURE__ */ At({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ wg({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = sh(e, "selected"), n = /* @__PURE__ */ at(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (b(), E("button", {
      class: Ee(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Vi),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      c("span", {
        class: Ee([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        c("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          ye(Sc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: ke(() => [
              c("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        c("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          ye(Sc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: ke(() => [
              c("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      c("span", {
        class: Ee(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, nC));
  }
}), aC = "_sidebarTabsButton_q3kBA", rC = "_sidebarTabsButton_legacy_KQ4d1", sC = "_sidebarTabsButton_selected_Pjayf", oC = "_sidebarTabsButton_animatedHighlight_uvp-0", lC = "_sidebarTabsButton__name_rlQsL", cC = "_sidebarTabsButton__icon_QzZg4", uC = "_sidebarTabsButton__iconLayer_ZkZan", dC = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", fC = "_sidebarTabsButton__icon_pop_IA0By", hC = "_sidebarTabsButton__legacyIcon_QhcNW", pC = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: aC,
  sidebarTabsButton_legacy: rC,
  sidebarTabsButton_selected: sC,
  sidebarTabsButton_animatedHighlight: oC,
  sidebarTabsButton__name: lC,
  sidebarTabsButton__icon: cC,
  sidebarTabsButton__iconLayer: uC,
  sidebarTabsButton__iconLayer_hidden: dC,
  sidebarTabsButton__icon_pop: fC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: hC
}, vC = {
  $style: pC
}, gC = /* @__PURE__ */ Ye(iC, [["__cssModules", vC]]), mC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: gC
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
      isLegacy34: Vi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [Sb()]) : t.order - n.order), this.updateActive();
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
}, bC = { class: "app-sidebar-tabs" };
function yC(e, t, n, i, a, r) {
  const s = Ue("NcAppSidebarTabsButton");
  return b(), E("div", bC, [
    r.hasMultipleTabs || r.showForSingleTab ? (b(), E("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ee(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = jt(Xe((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = jt(Xe((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = jt(Xe((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = jt(Xe((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = jt(Xe((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = jt(Xe((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = jt(Xe((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (b(), E("div", {
        key: 0,
        class: Ee(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: ln(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : j("", !0),
      (b(!0), E(le, null, Me(a.tabs, (o) => (b(), Fe(s, {
        id: `tab-button-${o.id}`,
        key: o.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${o.id}`,
        selected: a.activeTab === o.id,
        animatedHighlight: a.highlightEnabled,
        tab: o,
        "onUpdate:selected": (l) => r.setActive(o.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : j("", !0),
    c("div", {
      class: Ee(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Re(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const _C = /* @__PURE__ */ Ye(mC, [["render", yC], ["__scopeId", "data-v-74190d2a"]]);
ji(ay);
const wC = {
  name: "NcAppSidebar",
  components: {
    NcActions: uo,
    NcAppSidebarHeader: kw,
    NcAppSidebarTabs: _C,
    NcButton: jn,
    NcLoadingIcon: Np,
    NcEmptyContent: Pw,
    IconArrowRight: op,
    IconClose: lp,
    IconDockRight: Bw,
    IconStar: qw,
    IconStarOutline: tC
  },
  directives: {
    Focus: rw,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: aw
  },
  inject: {
    ncContentSelector: {
      from: sp,
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
    const e = /* @__PURE__ */ at(null);
    return vn("NcAppSidebar:header:ref", e), {
      uid: il(),
      isMobile: Jb(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: mt("Change name"),
      closeTranslated: mt("Close sidebar"),
      favoriteTranslated: mt("Favorite"),
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
    isSlotPopulated: su,
    t: mt,
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
      this.focusTrap || (this.focusTrap = Qc([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: es(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && fa.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, CC = ["aria-labelledby"], SC = { class: "app-sidebar-header__info" }, EC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, TC = { class: "app-sidebar-header__name-container" }, AC = { class: "app-sidebar-header__mainname-container" }, kC = ["placeholder", "value"], OC = ["title"], NC = {
  key: 2,
  class: "app-sidebar-header__description"
};
function xC(e, t, n, i, a, r) {
  const s = Ue("IconDockRight"), o = Ue("NcButton"), l = Ue("NcLoadingIcon"), d = Ue("IconStar"), u = Ue("IconStarOutline"), h = Ue("NcAppSidebarHeader"), _ = Ue("IconArrowRight"), T = Ue("NcActions"), O = Ue("IconClose"), A = Ue("NcAppSidebarTabs"), x = Ue("NcEmptyContent"), P = Nu("focus"), I = Nu("click-outside");
  return b(), Fe(lm, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: ke(() => [
      Ke(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = jt((...K) => r.onKeydownEsc && r.onKeydownEsc(...K), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (b(), Fe(Vf, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ye(o, zt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (K) => e.$emit("update:open", !0))
          }), {
            icon: ke(() => [
              Re(e.$slots, "toggle-icon", {}, () => [
                ye(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : j("", !0),
        c("header", {
          class: Ee(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (b(), Fe(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Re(e.$slots, "info", { key: 0 }, () => [
            c("div", SC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (b(), E("div", {
                key: 0,
                class: Ee(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: ln({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...K) => r.onFigureClick && r.onFigureClick(...K)),
                onKeydown: t[2] || (t[2] = jt((...K) => r.onFigureClick && r.onFigureClick(...K), ["enter"]))
              }, [
                Re(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : j("", !0),
              c("div", {
                class: Ee(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (b(), E("div", EC, [
                  Re(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (b(), Fe(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Xe(r.toggleStarred, ["prevent"])
                    }, {
                      icon: ke(() => [
                        n.starLoading ? (b(), Fe(l, { key: 0 })) : a.isStarred ? (b(), Fe(d, {
                          key: 1,
                          size: 20
                        })) : (b(), Fe(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : j("", !0)
                  ], !0)
                ])) : j("", !0),
                c("div", TC, [
                  c("div", AC, [
                    Ke(ye(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Xe(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Va, !n.nameEditable]
                    ]),
                    n.nameEditable ? Ke((b(), E("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Xe((...K) => r.onSubmitName && r.onSubmitName(...K), ["prevent"]))
                    }, [
                      Ke(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = jt(Xe((...K) => r.onDismissEditing && r.onDismissEditing(...K), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...K) => r.onNameInput && r.onNameInput(...K))
                      }, null, 40, kC), [
                        [P]
                      ]),
                      ye(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: ke(() => [
                          ye(_, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [I, () => r.onSubmitName()]
                    ]) : j("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (b(), Fe(T, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: ke(() => [
                        Re(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : j("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (b(), E("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Re(e.$slots, "subname", {}, () => [
                      Oe(p(n.subname), 1)
                    ], !0)
                  ], 8, OC)) : j("", !0)
                ])
              ], 2)
            ])
          ], !0),
          ye(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Xe(r.closeSidebar, ["prevent"])
          }, {
            icon: ke(() => [
              ye(O, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (b(), E("div", NC, [
            Re(e.$slots, "description", {}, void 0, !0)
          ])) : j("", !0)
        ], 2),
        Ke(ye(A, {
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
        n.loading ? (b(), Fe(x, { key: 1 }, {
          icon: ke(() => [
            ye(l, { size: 64 })
          ]),
          _: 1
        })) : j("", !0)
      ], 40, CC), [
        [Va, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const LC = /* @__PURE__ */ Ye(wC, [["render", xC], ["__scopeId", "data-v-c2c6820b"]]), RC = {
  name: "NcActionLink",
  mixins: [up],
  inject: {
    isInSemanticMenu: {
      from: eu,
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
}, IC = ["role"], PC = ["download", "href", "aria-label", "target", "title", "role"], DC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, MC = { class: "action-link__name" }, $C = ["textContent"], FC = ["textContent"], zC = {
  key: 2,
  class: "action-link__text"
};
function UC(e, t, n, i, a, r) {
  return b(), E("li", {
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
          class: Ee(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: ln({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (b(), E("span", DC, [
        c("strong", MC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, $C)
      ])) : e.isLongText ? (b(), E("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, FC)) : (b(), E("span", zC, p(e.text), 1)),
      j("", !0)
    ], 8, PC)
  ], 8, IC);
}
const Ma = /* @__PURE__ */ Ye(RC, [["render", UC], ["__scopeId", "data-v-32f01b7a"]]);
ji(cy);
const BC = `<!--
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
`, HC = `<!--
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
`, jC = { class: "vue-skip-actions__container" }, VC = { class: "vue-skip-actions__headline" }, GC = { class: "vue-skip-actions__buttons" }, KC = /* @__PURE__ */ At({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    vn(rp, o), vn(sp, "#content-vue"), vn("appName", Y(() => t.appName));
    const n = fs(), i = /* @__PURE__ */ at(!1), a = /* @__PURE__ */ at(), r = Y(() => a.value === "navigation" ? HC : BC);
    Jf(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      di("toggle-navigation", { open: !0 }), Hn(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, d) => (b(), E("div", {
      id: "content-vue",
      class: Ee(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Vi) }]])
    }, [
      (b(), Fe(Vf, { to: "#skip-actions" }, [
        c("div", jC, [
          c("div", VC, p(g(mt)("Keyboard navigation help")), 1),
          c("div", GC, [
            Ke(ye(jn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Xe(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: ke(() => [
                Oe(p(g(mt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Va, i.value]
            ]),
            ye(jn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: ke(() => [
                Oe(p(g(mt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Ke(ye(nl, {
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
}), WC = /* @__PURE__ */ Ye(KC, [["__scopeId", "data-v-d13dcb98"]]), qC = ["href"], YC = ["lang", "dir"], XC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, ZC = { class: "library-review-header" }, JC = { class: "library-muted library-catalogue-eyebrow" }, QC = { id: "library-review-heading" }, eS = ["aria-label"], tS = ["href", "aria-current"], nS = ["aria-label"], iS = ["name", "value"], aS = {
  type: "submit",
  class: "button secondary"
}, rS = ["aria-busy"], sS = { key: 0 }, oS = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, lS = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, cS = { class: "library-metadata-review-workbench-copy" }, uS = { class: "library-muted library-catalogue-eyebrow" }, dS = ["title"], fS = {
  key: 0,
  class: "library-metadata-review-card"
}, hS = {
  class: "library-bidi-human",
  dir: "auto"
}, pS = { class: "library-muted" }, vS = {
  class: "library-bidi-machine",
  dir: "ltr"
}, gS = { class: "library-metadata-review-fields" }, mS = {
  class: "library-bidi-human",
  dir: "auto"
}, bS = {
  class: "library-bidi-human",
  dir: "auto"
}, yS = {
  class: "library-bidi-human",
  dir: "auto"
}, _S = {
  class: "library-bidi-machine",
  dir: "ltr"
}, wS = {
  class: "library-bidi-human",
  dir: "auto"
}, CS = {
  class: "library-bidi-human",
  dir: "auto"
}, SS = ["action"], ES = ["value"], TS = ["value"], AS = {
  type: "submit",
  class: "button secondary"
}, kS = { class: "library-metadata-review-actions" }, OS = ["href"], NS = ["href"], xS = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, LS = ["href"], RS = ["aria-label"], IS = ["onClick"], PS = {
  class: "library-bidi-human",
  dir: "auto"
}, DS = {
  key: 0,
  class: "library-muted"
}, MS = {
  class: "library-bidi-human",
  dir: "auto"
}, $S = {
  key: 1,
  class: "library-scan-error"
}, FS = {
  class: "library-bidi-human",
  dir: "auto"
}, zS = ["onClick"], US = ["href"], BS = ["aria-label"], HS = ["href"], jS = {
  key: 1,
  class: "library-muted"
}, VS = { key: 0 }, GS = ["href"], KS = {
  key: 3,
  class: "library-muted"
}, WS = {
  key: 1,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, qS = { class: "library-home-header" }, YS = { class: "library-muted library-catalogue-eyebrow" }, XS = { id: "library-home-heading" }, ZS = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, JS = { id: "library-continue-heading" }, QS = { class: "library-muted" }, eE = ["href"], tE = {
  key: 0,
  class: "library-home-card-row"
}, nE = ["onClick"], iE = { class: "library-cover-frame" }, aE = ["src"], rE = { class: "library-cover-summary" }, sE = ["onClick"], oE = { dir: "auto" }, lE = {
  key: 0,
  class: "library-cover-creator"
}, cE = { dir: "auto" }, uE = ["href"], dE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, fE = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, hE = { id: "library-recent-heading" }, pE = { class: "library-muted" }, vE = ["href"], gE = {
  key: 0,
  class: "library-home-card-row"
}, mE = ["onClick"], bE = { class: "library-cover-frame" }, yE = ["src"], _E = { class: "library-cover-summary" }, wE = ["onClick"], CE = { dir: "auto" }, SE = {
  key: 0,
  class: "library-cover-creator"
}, EE = { dir: "auto" }, TE = ["href"], AE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, kE = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, OE = { id: "library-home-shelves-heading" }, NE = { class: "library-muted" }, xE = ["href"], LE = ["aria-label"], RE = ["href"], IE = { dir: "auto" }, PE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, DE = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, ME = { id: "library-home-attention-heading" }, $E = { class: "library-muted" }, FE = ["href"], zE = {
  key: 2,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, UE = { class: "library-home-header" }, BE = { class: "library-muted library-catalogue-eyebrow" }, HE = { id: "library-shelves-landing-heading" }, jE = { class: "library-muted" }, VE = ["aria-label"], GE = ["href"], KE = { class: "library-shelf-summary-title" }, WE = { dir: "auto" }, qE = { class: "library-muted" }, YE = { dir: "auto" }, XE = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, ZE = { class: "library-muted" }, JE = { class: "library-empty-actions" }, QE = ["href"], eT = ["href"], tT = {
  key: 3,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, nT = { class: "library-catalogue-header" }, iT = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, aT = { id: "library-catalogue-heading" }, rT = ["aria-label"], sT = ["aria-label"], oT = ["name", "value"], lT = { class: "library-quick-search-row" }, cT = ["title"], uT = ["placeholder"], dT = { "data-library-control": "sort" }, fT = { value: "title" }, hT = { value: "recent" }, pT = { value: "publicationDate" }, vT = { value: "publication" }, gT = { value: "lastOpened" }, mT = { value: "format" }, bT = ["aria-label"], yT = ["aria-pressed"], _T = ["aria-pressed"], wT = ["aria-pressed"], CT = ["aria-pressed"], ST = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine",
  "data-library-control": "filter"
}, ET = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, TT = ["title", "aria-label"], AT = { class: "library-workspace-scope-badge" }, kT = ["aria-label"], OT = { value: "" }, NT = ["value"], xT = { value: "" }, LT = ["value"], RT = { class: "library-publication-filter" }, IT = { for: "library-publication-search" }, PT = ["placeholder", "aria-expanded"], DT = ["value"], MT = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, $T = ["onClick"], FT = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, zT = { value: "" }, UT = ["value"], BT = ["title"], HT = { value: "" }, jT = ["value"], VT = ["placeholder"], GT = { value: "" }, KT = ["value"], WT = { value: "" }, qT = ["value"], YT = { value: "" }, XT = ["value"], ZT = { value: "" }, JT = ["value"], QT = { value: "" }, eA = ["value"], tA = { value: "" }, nA = ["value"], iA = { value: "" }, aA = { value: "1" }, rA = {
  type: "submit",
  class: "button primary"
}, sA = {
  href: "?",
  class: "button secondary"
}, oA = {
  id: "library-shelves",
  class: "library-navigation-section library-discovery-shortcuts",
  "aria-labelledby": "library-shelves-heading"
}, lA = { id: "library-shelves-heading" }, cA = { class: "library-shortcut-selectors" }, uA = ["title"], dA = { value: "" }, fA = ["value"], hA = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, pA = { value: "" }, vA = ["value"], gA = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, mA = { value: "" }, bA = ["value"], yA = {
  id: "library-collections",
  class: "library-saved-collections"
}, _A = ["title"], wA = ["action", "title"], CA = ["value"], SA = ["value"], EA = ["placeholder", "disabled"], TA = ["disabled", "title"], AA = ["aria-label"], kA = ["href"], OA = ["action"], NA = ["value"], xA = {
  type: "submit",
  class: "button tertiary"
}, LA = ["aria-label"], RA = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, IA = ["title"], PA = { class: "library-workspace-panel-purpose" }, DA = { class: "library-workspace-scope-badge" }, MA = { "aria-live": "polite" }, $A = ["action"], FA = ["value"], zA = ["placeholder"], UA = ["title"], BA = ["action"], HA = ["value"], jA = ["placeholder"], VA = ["title"], GA = ["action"], KA = ["value"], WA = ["name", "value"], qA = ["title"], YA = ["action"], XA = ["value"], ZA = ["name", "value"], JA = { name: "bulkEditField" }, QA = { value: "publicationType" }, e2 = { value: "subtitle" }, t2 = { value: "creators" }, n2 = { value: "publication" }, i2 = { value: "publicationDate" }, a2 = { value: "language" }, r2 = { value: "publisher" }, s2 = { value: "genres" }, o2 = { value: "classifications" }, l2 = ["placeholder"], c2 = ["title"], u2 = ["action"], d2 = ["value"], f2 = ["name", "value"], h2 = ["title"], p2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, v2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, g2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, m2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, b2 = { class: "library-muted library-catalogue-eyebrow" }, y2 = ["title"], _2 = ["aria-label"], w2 = { key: 0 }, C2 = { key: 1 }, S2 = { key: 2 }, E2 = ["aria-label"], T2 = { key: 0 }, A2 = { key: 1 }, k2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, O2 = { class: "library-muted library-catalogue-eyebrow" }, N2 = ["title"], x2 = ["aria-label"], L2 = ["href"], R2 = {
  key: 0,
  class: "library-notice"
}, I2 = { class: "library-publication-issue-label" }, P2 = ["href"], D2 = { class: "library-muted" }, M2 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, $2 = ["title"], F2 = ["href"], z2 = { class: "library-catalogue-status-row" }, U2 = { class: "library-muted library-filter-result-summary" }, B2 = { key: 0 }, H2 = { href: "?" }, j2 = ["aria-label"], V2 = { class: "library-pagination-range" }, G2 = { key: 0 }, K2 = ["href"], W2 = {
  key: 1,
  class: "library-muted"
}, q2 = ["href"], Y2 = {
  key: 3,
  class: "library-muted"
}, X2 = ["aria-label"], Z2 = ["href", "aria-label", "onClick"], J2 = ["title"], Q2 = { class: "library-empty-actions" }, ek = ["href"], tk = { class: "library-muted" }, nk = ["title"], ik = { class: "library-empty-actions" }, ak = ["href"], rk = ["title"], sk = { class: "library-empty-actions" }, ok = ["href"], lk = {
  href: "?",
  class: "button primary"
}, ck = ["title"], uk = { class: "library-empty-actions" }, dk = ["href"], fk = {
  key: 6,
  class: "library-select-visible"
}, hk = ["checked"], pk = {
  key: 7,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, vk = { class: "library-item-selection" }, gk = ["checked", "aria-label", "onChange"], mk = { class: "library-catalogue-list-main" }, bk = ["onClick"], yk = {
  class: "library-bidi-human",
  dir: "auto"
}, _k = {
  key: 0,
  class: "library-muted"
}, wk = {
  class: "library-bidi-human",
  dir: "auto"
}, Ck = { class: "library-catalogue-list-metadata" }, Sk = { key: 0 }, Ek = {
  class: "library-bidi-human",
  dir: "auto"
}, Tk = { key: 1 }, Ak = { key: 2 }, kk = ["dir"], Ok = { key: 3 }, Nk = {
  class: "library-bidi-human",
  dir: "auto"
}, xk = { class: "library-catalogue-list-actions" }, Lk = ["href"], Rk = ["onClick"], Ik = { class: "library-item-selection" }, Pk = ["checked", "aria-label", "onChange"], Dk = ["aria-labelledby", "aria-expanded", "onClick"], Mk = ["id"], $k = { class: "library-cover-frame" }, Fk = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, zk = ["src", "onLoad", "onError"], Uk = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, Bk = ["action", "onSubmit"], Hk = ["value"], jk = ["value"], Vk = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], Gk = ["data-library-star-error"], Kk = { class: "library-cover-summary" }, Wk = { class: "library-cover-primary" }, qk = ["id"], Yk = ["onClick"], Xk = {
  class: "library-bidi-human",
  dir: "auto"
}, Zk = {
  key: 0,
  class: "library-cover-creator"
}, Jk = {
  class: "library-bidi-human",
  dir: "auto"
}, Qk = {
  key: 1,
  class: "library-cover-badges"
}, eO = {
  key: 0,
  class: "library-cover-badge"
}, tO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, nO = {
  key: 1,
  class: "library-cover-context"
}, iO = {
  class: "library-bidi-human",
  dir: "auto"
}, aO = { class: "library-cover-primary-actions" }, rO = ["href"], sO = ["aria-label"], oO = { class: "library-pagination-range" }, lO = { key: 0 }, cO = ["href"], uO = {
  key: 1,
  class: "library-muted"
}, dO = ["href"], fO = {
  key: 3,
  class: "library-muted"
}, hO = { class: "library-sidebar-content" }, pO = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, vO = ["role"], gO = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, mO = { class: "library-sidebar-publication-header" }, bO = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, yO = ["src"], _O = { class: "library-sidebar-publication-summary" }, wO = { class: "library-muted library-catalogue-eyebrow" }, CO = {
  class: "library-bidi-human",
  dir: "auto"
}, SO = { key: 0 }, EO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, TO = { class: "library-detail-drawer-actions" }, AO = ["href"], kO = ["aria-label"], OO = ["aria-current", "onClick"], NO = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, xO = { id: "library-sidebar-overview-heading" }, LO = {
  key: 0,
  class: "library-sidebar-description"
}, RO = {
  class: "library-bidi-human",
  dir: "auto"
}, IO = { class: "library-detail-drawer-facts" }, PO = { key: 0 }, DO = { key: 1 }, MO = { key: 2 }, $O = { key: 3 }, FO = { key: 4 }, zO = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, UO = { id: "library-sidebar-metadata-heading" }, BO = ["placeholder"], HO = ["onUpdate:modelValue", "aria-label", "placeholder"], jO = ["onUpdate:modelValue", "aria-label"], VO = ["onClick"], GO = { class: "library-muted" }, KO = {
  key: 0,
  role: "alert"
}, WO = {
  key: 1,
  role: "status"
}, qO = ["disabled"], YO = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, XO = { id: "library-sidebar-suggestions-heading" }, ZO = { class: "library-muted" }, JO = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, QO = { id: "library-sidebar-activity-heading" }, eN = { class: "library-detail-drawer-facts" }, tN = { key: 0 }, nN = { key: 1 }, iN = { key: 2 }, aN = { dir: "ltr" }, rN = ["aria-label"], sN = ["disabled"], oN = ["disabled"], lN = 20, cN = "/apps/library", uN = 2147483647, dN = {
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
    function r(w, S) {
      return Object.prototype.hasOwnProperty.call(a, w) && String(S ?? "").trim() === a[w];
    }
    function s(w) {
      const S = new URLSearchParams(w);
      for (const f of Object.keys(a)) {
        const H = [...new Set([...S.keys()].filter((Le) => Le === f || Le.startsWith(`${f}[`)))], ge = H.reduce((Le, it) => Le + S.getAll(it).length, 0);
        if (ge > 1 || H.some((Le) => Le !== f)) {
          for (const Le of H) S.delete(Le);
          continue;
        }
        f !== "status" && ge === 1 && !r(f, S.get(f)) && S.delete(f);
      }
      return S;
    }
    function o(w) {
      return Object.keys(a).some((S) => w.getAll(S).length === 1 && r(S, w.get(S)));
    }
    function l(w) {
      return Object.fromEntries(Object.entries(w || {}).filter(([S, f]) => S === "status" || !Object.prototype.hasOwnProperty.call(a, S) || r(S, f)));
    }
    const d = /* @__PURE__ */ Rt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Rt((d.items || []).map((w) => ({ ...w }))), h = Y(() => u), _ = Y(() => d.shelves || []), T = Y(() => d.formats || []), O = Y(() => d.publicationTypes?.length ? d.publicationTypes : n), A = Y(() => d.publishers || []), x = Y(() => d.publications || []), P = Y(() => d.publicationSummaries || []), I = Y(() => d.publicationIssueContext || null), K = Y(() => d.publicationYears || []), M = Y(() => d.creators || []), oe = Y(() => d.scanStatuses || []), de = Y(() => d.workflowStatuses || []), te = Y(() => d.genres || []), ve = Y(() => d.classifications || []), B = Y(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), F = /* @__PURE__ */ Rt({
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
    for (const w of Object.keys(a))
      w !== "status" && (r(w, F[w]) || (F[w] = ""));
    const ue = /* @__PURE__ */ at(F.publication), J = /* @__PURE__ */ at(!1), ne = /* @__PURE__ */ at(null), D = Y(() => {
      const w = ue.value.trim().toLocaleLowerCase();
      return (w !== "" && ne.value !== null ? ne.value : x.value).filter((f) => w === "" || f.toLocaleLowerCase().includes(w)).slice(0, lN);
    });
    Ft(() => F.publication, (w) => {
      ue.value = w || "";
    });
    let $ = null, X = null, re = 0;
    Ft(ue, (w) => {
      window.clearTimeout($), X?.abort(), X = null, ne.value = null;
      const S = String(w || "").trim();
      if (S === "") return;
      const f = ++re;
      $ = window.setTimeout(() => {
        Ae(S, f);
      }, 200);
    });
    const ie = Object.fromEntries(Object.keys(F).map((w) => [w, w === "sort" ? "title" : w === "view" ? "compact" : ""])), he = window.location.pathname.indexOf(cN), ce = he >= 0 ? window.location.pathname.slice(0, he) : "", Ce = {
      catalogue: `${ce}/apps/library/`,
      review: `${ce}/apps/library/?scannerConflicts=1`,
      settings: `${ce}/settings/user/library`
    };
    function me(w, S) {
      if (typeof w != "string" || w === "") return S;
      try {
        const f = ce ? `${ce}/` : "/";
        let H = w;
        for (let ge = 0; ge < 5; ge += 1) {
          if (!H.startsWith("/") || H.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(H)) return S;
          const Le = new URL(H, window.location.origin);
          if (Le.origin !== window.location.origin || !Le.pathname.startsWith(f)) return S;
          const it = H.split(/[?#]/, 1)[0];
          for (const Na of it.split("/")) {
            let xa = Na;
            for (let La = 0; La < 5; La += 1) {
              const Pn = decodeURIComponent(xa);
              if (/[\\/\u0000-\u001f\u007f]/.test(Pn) || Pn === "." || Pn === "..") return S;
              if (Pn === xa) break;
              if (xa = Pn, La === 4) return S;
            }
          }
          const nn = decodeURI(H);
          if (nn === H) return w;
          H = nn;
        }
        return S;
      } catch {
        return S;
      }
    }
    const je = Y(() => me(d.settingsUrl, Ce.settings)), be = Y(() => me(d.catalogueRootUrl, Ce.catalogue)), rt = Y(() => me(d.homeUrl, `${Ce.catalogue}?home=1`)), ot = Y(() => me(d.shelvesUrl, `${Ce.catalogue}?shelves=1`)), ft = Y(() => me(d.reviewUrl || d.scannerConflictReviewUrl, Ce.review)), yt = Y(() => Object.entries(a).some(([w, S]) => F[w] === S)), tt = Y(() => i.reduce((w, S) => w + Number(vu.value[S.countKey] || 0), 0)), Jt = Y(() => d.surface === "home"), U = Y(() => d.surface === "shelves"), v = Y(() => !Jt.value && !U.value && !yt.value && !F.starred && F.sort !== "lastOpened" && !F.shelf), C = Y(() => [
      { key: "home", name: m("library", "Home"), href: rt.value, active: Jt.value },
      { key: "all", name: m("library", "All publications"), href: be.value, active: v.value },
      { key: "starred", name: m("library", "Starred"), href: `${be.value}?starred=1`, active: F.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${be.value}?sort=lastOpened`, active: F.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: ot.value, active: U.value || !!F.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${be.value}#library-collections`, active: !1 }
    ]), k = Y(() => d.requestToken || ""), R = Y(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), N = Y(() => d.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), z = Y(() => d.itemSidebarUrlTemplate || `${ce}/apps/library/items/__ITEM_ID__/sidebar`), q = Y(() => d.batchTagUrl || "/apps/library/bulk/tags"), W = Y(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Q = Y(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), V = Y(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), _e = Y(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), se = Y(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const pe = Y(() => d.discoveryPage === "publication"), Se = Y(() => d.discoveryPage === "year"), Ne = Y(() => d.discoveryPage === "creator"), Ie = Y(() => pe.value || Se.value || Ne.value), Pe = Y(() => d.discoveryTitle || F.publication || F.year || F.creator || ""), Je = Y(() => Ie.value ? Pe.value : m("library", "Library")), nt = Y(() => Ne.value ? m("library", "Creator") : Se.value ? m("library", "Publication year") : m("library", "Publication / series")), gt = Y(() => Number(d.rootCount || 0)), kt = Y(() => Number(d.enabledRootCount || 0)), Ot = Y(() => gt.value === 0), wn = Y(() => gt.value > 0 && kt.value === 0), lt = Y(() => Ci.value.length > 0), Nt = {
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
    }, bi = Y(() => {
      if (typeof window > "u") return "";
      const w = new URLSearchParams(window.location.search);
      if (w.get("batchMetadataApplyResult") !== "1") return "";
      const S = w.get("batchMetadataField") || "field", f = w.get("batchMetadataApplied") || "0", H = w.get("batchMetadataUnchanged") || "0", ge = w.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: S, unchanged: H, skipped: ge });
    }), yi = Y(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), ma = Y(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), ba = Y(() => d.savedCollections || []), _i = Y(() => d.savedCollectionSaveUrl || "/apps/library/collections"), wi = Y(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Xa = ["compact", "gallery", "list", "shelf"], Ut = Y(() => Xa.includes(F.view) ? F.view : "compact"), hs = Y(() => ({
      "library-cover-gallery--compact": Ut.value === "compact",
      "library-cover-gallery--gallery": Ut.value === "gallery",
      "library-cover-gallery--shelf": Ut.value === "shelf"
    })), Ci = Y(() => Object.entries(Nt).map(([w, S]) => ({ key: w, label: m("library", S), value: F[w] || "" })).filter((w) => String(w.value).trim() !== "")), ps = Y(() => Object.entries(F).filter(([w, S]) => !["q", "sort", "starred"].includes(w) && String(S || "").trim() !== "").map(([w, S]) => ({ key: w, value: S }))), Kn = Y(() => Object.entries(l(F)).filter(([w, S]) => String(S || "").trim() !== "").map(([w, S]) => ({ key: w, value: S }))), ya = Y(() => Kn.value.filter(({ key: w, value: S }) => w !== "q" && !(w === "sort" && S === "title"))), Gt = /* @__PURE__ */ Rt({}), Cn = Y(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), _a = Y(() => d.homeShelves || []), wa = Y(() => d.shelfSummaries || []), Za = Y(() => d.needsAttention || { count: 0, url: `${be.value}?needsMetadata=1` }), Kt = /* @__PURE__ */ at([]), Si = Y(() => new Set(Kt.value));
    function Ja(w, S) {
      const f = new Set(Kt.value);
      S ? f.add(Number(w)) : f.delete(Number(w)), Kt.value = [...f];
    }
    function Qa(w) {
      Kt.value = w.currentTarget.checked ? h.value.map((S) => Number(S.id)) : [];
    }
    function ll() {
      const w = new Set(h.value.map((S) => Number(S.id)));
      Kt.value = Kt.value.filter((S) => w.has(S));
    }
    function Gi(w) {
      const S = w.target;
      if (S instanceof HTMLFormElement) {
        S.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of Kt.value) {
          const H = document.createElement("input");
          H.type = "hidden", H.name = "itemIds[]", H.value = String(f), H.dataset.librarySelectedId = "1", S.appendChild(H);
        }
      }
    }
    const Te = /* @__PURE__ */ at(null), Wn = /* @__PURE__ */ at(null), $e = /* @__PURE__ */ Rt({ loading: !1, error: "", missing: !1 }), Wt = /* @__PURE__ */ at("overview"), Qt = /* @__PURE__ */ Rt({ saving: !1, saved: !1, error: "" }), ht = /* @__PURE__ */ Rt({ title: "", publicationDate: "", identifiers: [] }), Ca = /* @__PURE__ */ at(null), xn = /* @__PURE__ */ at(null), Ln = /* @__PURE__ */ at(!1);
    let er = null, Sn = null, Sa = null, tr = !1, qt = null, Ea = 0;
    const en = Y(() => Wn.value !== null), tn = Y(() => Te.value ? h.value.findIndex((w) => w.id === Te.value.id) : -1), Ta = Y(() => tn.value > 0 ? h.value[tn.value - 1] : null), qn = Y(() => tn.value >= 0 && tn.value < h.value.length - 1 ? h.value[tn.value + 1] : null), vs = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], cl = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Ki(w) {
      const S = String(w ?? "").trim(), f = S.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : S;
    }
    function nr(w) {
      return { ...w, publicationDate: Ki(w?.publicationDate) };
    }
    function Wi(w) {
      ht.title = String(w?.title || ""), ht.publicationDate = Ki(w?.publicationDate), ht.identifiers = Array.isArray(w?.identifiers) ? w.identifiers.map((S) => ({ scheme: String(S?.scheme || ""), displayValue: String(S?.displayValue || S?.value || "") })) : [], Object.assign(Qt, { saving: !1, saved: !1, error: "" });
    }
    function ir() {
      ht.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Aa(w) {
      ht.identifiers.splice(w, 1);
    }
    async function Ei() {
      const w = Te.value;
      if (!w?.updateUrl || Qt.saving) return;
      Object.assign(Qt, { saving: !0, saved: !1, error: "" });
      const S = new FormData();
      S.set("requesttoken", k.value), S.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "genres", "classifications", "personalRating"]) {
        const H = w[f];
        S.set(f, Array.isArray(H) ? H.join(", ") : String(H ?? ""));
      }
      S.set("title", ht.title), S.set("publicationDate", Ki(ht.publicationDate)), ht.identifiers.forEach((f, H) => {
        S.set(`identifiers[${H}][scheme]`, f.scheme), S.set(`identifiers[${H}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(w.updateUrl, { method: "POST", body: S, credentials: "same-origin", headers: { Accept: "application/json" } }), H = await f.json().catch(() => ({}));
        if (!f.ok || H.saved !== !0) throw new Error(H.error || m("library", "Metadata could not be saved."));
        w.title = ht.title.trim(), w.publicationDate = Ki(ht.publicationDate), w.identifiers = ht.identifiers.filter((Le) => Le.scheme.trim() || Le.displayValue.trim()).map((Le) => ({ ...Le }));
        const ge = h.value.find((Le) => Number(Le.id) === Number(w.id));
        ge && (ge.title = w.title, ge.publicationDate = w.publicationDate), Qt.saved = !0;
      } catch (f) {
        Qt.error = f?.message || m("library", "Metadata could not be saved.");
      } finally {
        Qt.saving = !1;
      }
    }
    const Yt = Y(() => {
      const w = r("scannerConflicts", F.scannerConflicts) || r("weakMetadata", F.weakMetadata), S = w ? h.value.find((f) => Yn(f).length > 0) : null;
      return {
        enabled: w,
        item: S,
        fields: S ? Yn(S) : [],
        reviewNextUrl: se.value,
        skipUrl: B.value.nextUrl || se.value
      };
    }), cn = Y(() => i.map((w) => ({
      ...w,
      label: m("library", w.label),
      href: `${be.value}?${encodeURIComponent(w.key)}=${encodeURIComponent(w.value)}`,
      active: String(F[w.key] || "") === w.value
    })));
    function ar(w) {
      return Array.isArray(w) ? JSON.stringify(w) : w == null ? "" : String(w);
    }
    function Yn(w) {
      const S = w.fieldValues || {}, f = w.fieldSources || {};
      return vs.filter((H) => Object.prototype.hasOwnProperty.call(S, H)).map((H) => {
        const ge = ar(w[H]), Le = ar(S[H]), it = ar(f[H] || w.metadataSource || "scanner"), nn = it.includes("filename") || it.includes("path") ? Le : "", Na = it.includes("sidecar") ? Le : "";
        return { field: H, currentValue: ge, scannerCandidate: Le, pathTemplateCandidate: nn, sidecarValue: Na, sourceProvenance: it, differs: ge !== Le };
      }).filter((H) => H.differs);
    }
    let Xn = 0, Rn = null;
    function rr() {
      const w = new URLSearchParams(window.location.search).getAll("item");
      if (w.length !== 1 || !/^[1-9][0-9]*$/.test(w[0])) return null;
      const S = Number(w[0]);
      return Number.isSafeInteger(S) && S <= uN ? S : null;
    }
    function sr(w, S = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), w !== null && f.searchParams.set("item", String(w)), history[`${S}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Ti(w, { historyMode: S = "push", seed: f = null } = {}) {
      Rn?.abort();
      const H = ++Xn, ge = new AbortController();
      Rn = ge, Wn.value = w, Wt.value = "overview", Te.value = f && Number(f.id) === w ? nr(f) : null, Te.value && Wi(Te.value), Object.assign($e, { loading: !0, error: "", missing: !1 }), S !== "none" && sr(w, S);
      try {
        const Le = z.value.replace("__ITEM_ID__", encodeURIComponent(String(w))), it = await fetch(Le, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ge.signal });
        if (H !== Xn) return;
        if (!it.ok) {
          Te.value = null, $e.missing = it.status === 404, $e.error = it.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const nn = await it.json();
        if (H !== Xn) return;
        if (typeof nn?.item?.id != "number" || !Number.isSafeInteger(nn.item.id) || nn.item.id !== w) {
          Te.value = null, $e.missing = !1, $e.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        Te.value = nr(nn.item), Wi(Te.value), await Hn();
      } catch (Le) {
        H === Xn && Le?.name !== "AbortError" && (Te.value = null, $e.missing = !1, $e.error = m("library", "Could not load publication details. Try again."));
      } finally {
        H === Xn && ($e.loading = !1, Rn = null);
      }
    }
    function un(w, S) {
      ka(), er = S?.currentTarget instanceof HTMLElement ? S.currentTarget : null, Ti(Number(w.id), { seed: w });
    }
    function qi({ historyMode: w = "push", restoreFocus: S = !0 } = {}) {
      Sa = S ? er : null, er = null, Rn?.abort(), Rn = null, Xn += 1, Wn.value = null, Te.value = null, Wt.value = "overview", Object.assign($e, { loading: !1, error: "", missing: !1 }), w !== "none" && sr(null, w);
    }
    function gs() {
      Ln.value ? (xn.value?.$refs?.sidebar || xn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : Ca.value?.focus();
    }
    function ul() {
      const w = Sa;
      if (Sa = null, ka(), tr || !w?.isConnected) return;
      const S = Ea;
      qt = window.requestAnimationFrame(() => {
        qt = null, !(S !== Ea || tr || en.value || !w.isConnected) && w.focus();
      });
    }
    function ka() {
      Ea += 1, qt !== null && (window.cancelAnimationFrame(qt), qt = null);
    }
    function In(w = Sn) {
      Ln.value = !!w?.matches, en.value && Hn(gs);
    }
    function Ai(w) {
      w && Ti(Number(w.id), { seed: w });
    }
    const Z = /* @__PURE__ */ at(null);
    let y = null, L = 0, G = null;
    const ae = /* @__PURE__ */ Rt({ loading: !1, error: "" });
    function fe(w) {
      const S = s(new FormData(w));
      S.delete("publicationSearch");
      for (const f of Array.from(S.keys()))
        String(S.get(f) || "").trim() === "" && S.delete(f);
      return S.delete("page"), S.get("view") === "compact" && S.delete("view"), S;
    }
    async function Ae(w, S) {
      const f = new URLSearchParams();
      for (const [ge, Le] of Object.entries(F)) {
        const it = String(Le || "").trim();
        ge !== "publication" && it !== "" && !(ge === "sort" && it === "title") && !(ge === "view" && it === "compact") && f.set(ge, it);
      }
      f.set("publicationSearch", w);
      const H = new AbortController();
      X = H;
      try {
        const ge = await fetch(`${N.value}?${f}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: H.signal
        });
        if (!ge.ok) throw new Error(`Publication suggestions request failed: ${ge.status}`);
        const Le = await ge.json();
        S === re && ue.value.trim() === w && (ne.value = Array.isArray(Le.publications) ? Le.publications : []);
      } catch (ge) {
        ge?.name !== "AbortError" && S === re && (ne.value = null);
      } finally {
        S === re && (X = null);
      }
    }
    function Ze(w) {
      u.splice(0, u.length, ...(w.items || []).map((S) => ({ ...S }))), ll();
      for (const S of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(w, S) && (d[S] = w[S]);
      Object.assign(F, ie, w.activeFilters || {});
    }
    async function Ve(w, S = null) {
      const f = w?.currentTarget?.tagName === "FORM" ? w.currentTarget : w?.currentTarget?.form;
      if (!f && !S?.params) return;
      const H = s(S?.params ?? fe(f)), ge = H.toString(), Le = ge ? `?${ge}` : "", it = S?.generation ?? ++L, nn = o(H), Na = S?.historyMode ?? (nn ? "push" : "replace"), xa = S?.historyTraversal === !0;
      if (it !== L) return;
      S === null && G?.abort();
      const La = new AbortController();
      G = La, ae.loading = !0, ae.error = "";
      try {
        const Pn = await fetch(R.value + Le, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: La.signal
        });
        if (it !== L) return;
        if (!Pn.ok) {
          xa ? pt(H) : nn ? ae.error = m("library", "Could not load this review queue. Try again.") : pt(H);
          return;
        }
        const nv = await Pn.json();
        if (it !== L) return;
        Ze(nv), Na !== "none" && (history[Na === "push" ? "pushState" : "replaceState"]({}, "", ge ? `?${ge}` : window.location.pathname), en.value && qi({ historyMode: "none" }));
      } catch (Pn) {
        it === L && Pn?.name !== "AbortError" && (xa ? pt(H) : nn ? ae.error = m("library", "Could not load this review queue. Try again.") : pt(H));
      } finally {
        it === L && (G = null, ae.loading = !1);
      }
    }
    function _t() {
      G?.abort();
      const w = new URLSearchParams(window.location.search), S = rr();
      w.has("item") && S === null && (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)), S === null ? qi({ historyMode: "none" }) : Ti(S, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === S) || null }), w.delete("item"), Ve(null, {
        params: s(w),
        generation: ++L,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function pt(w) {
      const S = document.createElement("form");
      S.method = "get", S.action = window.location.pathname, S.hidden = !0;
      for (const [f, H] of w.entries()) {
        const ge = document.createElement("input");
        ge.type = "hidden", ge.name = f, ge.value = H, S.appendChild(ge);
      }
      document.body.appendChild(S), S.submit(), S.remove();
    }
    function Oa(w, S = null, f = null) {
      if (S === null) {
        Ve(w);
        return;
      }
      Ve({ currentTarget: w }, { params: S, generation: f });
    }
    function wt(w) {
      const S = w?.currentTarget?.form;
      if (!S) return;
      window.clearTimeout(y), window.clearTimeout($), re += 1, X?.abort(), X = null;
      const f = ++L, H = fe(S);
      G?.abort(), G = null, y = window.setTimeout(() => Oa(S, H, f), 350);
    }
    async function pu(w, S = ue.value) {
      F.publication = String(S || "").trim(), ue.value = F.publication, J.value = !1, await Hn(), Ve({ currentTarget: w });
    }
    function zp(w) {
      pu(w.currentTarget);
    }
    function Up(w, S) {
      pu(S.currentTarget.form, w);
    }
    function dl(w) {
      const S = new URLSearchParams();
      for (const [H, ge] of Object.entries(F)) {
        const Le = String(ge || "").trim();
        Le !== "" && H !== w && !(H === "sort" && Le === "title") && !(H === "view" && Le === "compact") && S.set(H, Le);
      }
      const f = S.toString();
      return f ? `?${f}` : "?";
    }
    function Bp(w) {
      const S = new URLSearchParams(dl(w));
      Ve(null, {
        params: S,
        generation: ++L
      });
    }
    function Hp() {
      return dl("q");
    }
    const vu = Y(() => d.smartViewCounts || {}), gu = Y(() => {
      const w = {};
      for (const [S, f] of Object.entries(F)) {
        const H = String(f || "").trim();
        H !== "" && !(S === "sort" && H === "title") && (w[S] = H);
      }
      return w;
    }), jp = Y(() => JSON.stringify(gu.value)), fl = Y(() => Object.keys(gu.value).length > 0);
    function ms(w) {
      if (!Xa.includes(w)) return;
      F.view = w;
      const S = s(window.location.search);
      w === "compact" ? S.delete("view") : S.set("view", w), S.delete("page"), history.replaceState({}, "", S.toString() ? `?${S.toString()}` : window.location.pathname);
    }
    function Vp(w) {
      const S = s(window.location.search);
      for (const H of Object.keys(Nt))
        S.delete(H);
      S.delete("page");
      for (const [H, ge] of Object.entries(w))
        String(ge || "").trim() !== "" && S.set(H, String(ge));
      const f = S.toString();
      return f ? `?${f}` : "?";
    }
    function Gp(w) {
      return Vp(w || {});
    }
    function Kp(w) {
      return wi.value.replace("__COLLECTION_ID__", encodeURIComponent(String(w || "0")));
    }
    function or(w) {
      return String(w || "").toUpperCase();
    }
    function Wp(w) {
      return P.value.find((f) => f.publication === w)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(w)}`;
    }
    function qp(w) {
      return d.publicationYearLandingUrls?.[w] || `/apps/library/years/${encodeURIComponent(w)}`;
    }
    function Yp(w) {
      return d.creatorLandingUrls?.[w] || `/apps/library/creators/${encodeURIComponent(w)}`;
    }
    function hl(w) {
      const S = w?.target?.value || "";
      S && (window.location.href = S);
    }
    function lr(w) {
      return Gt[w.id] || "loading";
    }
    function Xp(w) {
      Gt[w.id] = "loaded";
    }
    function Zp(w) {
      Gt[w.id] = "error";
    }
    function pl(w) {
      const S = String(w?.publication || "").trim(), f = String(w?.publicationDate || "").trim();
      return S && f ? `${S} · ${f}` : S || f ? S || f : [w?.publicationType, or(w?.extension)].filter(Boolean).join(" · ");
    }
    function Jp(w) {
      const S = String(w?.tagName || "").toLowerCase();
      return w?.isContentEditable || ["input", "select", "textarea", "button"].includes(S);
    }
    function Qp(w) {
      w.key !== "/" || w.metaKey || w.ctrlKey || w.altKey || w.shiftKey || Jp(w.target) || (w.preventDefault(), Z.value?.focus(), Z.value?.select?.());
    }
    function ev(w) {
      w.key !== "Escape" || document.activeElement !== Z.value || F.q === "" || (w.preventDefault(), F.q = "", Z.value.value = "", window.clearTimeout(y), Oa({ currentTarget: Z.value }));
    }
    function tv(w) {
      if (!en.value || w.metaKey || w.ctrlKey || w.altKey)
        return !1;
      if (w.key === "Escape")
        return w.preventDefault(), qi(), !0;
      if (w.key === "Tab" && Ln.value) {
        if (xn.value?.focusTrap) return !1;
        const S = xn.value?.$refs?.sidebar || xn.value?.$el || xn.value, f = [...S?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Le) => !Le.hidden && Le.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const H = f[0], ge = f[f.length - 1];
        if (w.shiftKey && (document.activeElement === H || !S.contains(document.activeElement)))
          return w.preventDefault(), ge.focus(), !0;
        if (!w.shiftKey && (document.activeElement === ge || !S.contains(document.activeElement)))
          return w.preventDefault(), H.focus(), !0;
      }
      return w.key === "ArrowLeft" && Ta.value ? (w.preventDefault(), Ai(Ta.value), !0) : w.key === "ArrowRight" && qn.value ? (w.preventDefault(), Ai(qn.value), !0) : !1;
    }
    function mu(w) {
      tv(w) || (Qp(w), ev(w));
    }
    Hi(() => {
      window.addEventListener("keydown", mu), window.addEventListener("popstate", _t), Sn = window.matchMedia?.("(max-width: 1023px)") || null, In(), Sn?.addEventListener ? Sn.addEventListener("change", In) : Sn?.addListener?.(In);
      const w = new URLSearchParams(window.location.search), S = rr();
      w.has("item") && S === null ? (w.delete("item"), history.replaceState({}, "", `${window.location.pathname}${w.toString() ? `?${w}` : ""}${window.location.hash}`)) : S !== null && Ti(S, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === S) || null });
    }), Ya(() => {
      tr = !0, ka(), window.removeEventListener("keydown", mu), window.removeEventListener("popstate", _t), window.clearTimeout(y), L += 1, G?.abort(), G = null, Xn += 1, Rn?.abort(), Rn = null, Sn?.removeEventListener ? Sn.removeEventListener("change", In) : Sn?.removeListener?.(In), Sn = null, Sa = null;
    });
    const cr = /* @__PURE__ */ Rt({}), ur = /* @__PURE__ */ Rt({});
    async function bu(w, S) {
      const f = S?.currentTarget?.closest?.("form") || S?.currentTarget;
      if (!f || !w?.starUrl || cr[w.id]) return;
      const H = !!w.starred;
      cr[w.id] = !0, ur[w.id] = "", w.starred = !H;
      try {
        (await fetch(w.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (w.starred = H, ur[w.id] = m("library", "Could not update star. Try again."));
      } catch {
        w.starred = H, ur[w.id] = m("library", "Could not update star. Try again.");
      } finally {
        cr[w.id] = !1;
      }
    }
    return (w, S) => (b(), Fe(g(WC), { "app-name": "library" }, {
      default: ke(() => [
        ye(g(O_), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: ke(() => [
            ye(g(ap), null, {
              default: ke(() => [
                (b(!0), E(le, null, Me(C.value, (f) => (b(), Fe(g(sf), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                ye(g(sf), {
                  active: yt.value,
                  href: ft.value,
                  name: tt.value > 0 ? `${g(m)("library", "Review")} (${tt.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: ke(() => [
            c("a", {
              class: "library-navigation-settings-link",
              href: je.value
            }, [
              S[28] || (S[28] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(m)("library", "Settings")), 1)
            ], 8, qC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ye(g(Vy), null, {
          default: ke(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: d.language || "en",
              dir: d.direction || "ltr",
              tabindex: "-1"
            }, [
              yt.value ? (b(), E("section", XC, [
                c("header", ZC, [
                  c("p", JC, p(g(m)("library", "Metadata cleanup")), 1),
                  c("h2", QC, p(g(m)("library", "Review")), 1),
                  c("p", null, p(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (b(!0), E(le, null, Me(cn.value, (f) => (b(), E("a", {
                    key: f.key,
                    class: Ee(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(Number(vu.value[f.countKey] || 0)), 1)
                  ], 10, tS))), 128))
                ], 8, eS),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: Xe(Ve, ["prevent"])
                }, [
                  (b(!0), E(le, null, Me(ya.value, (f) => (b(), E("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, iS))), 128)),
                  c("label", null, [
                    Oe(p(g(m)("library", "Search within this queue")), 1),
                    Ke(c("input", {
                      "onUpdate:modelValue": S[0] || (S[0] = (f) => F.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ti, F.q]
                    ])
                  ]),
                  c("button", aS, p(g(m)("library", "Apply")), 1)
                ], 40, nS),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": ae.loading ? "true" : "false"
                }, [
                  ae.loading ? (b(), E("span", sS, p(g(m)("library", "Loading review queue…")), 1)) : j("", !0)
                ], 8, rS),
                ae.error ? (b(), E("p", oS, p(ae.error), 1)) : j("", !0),
                Yt.value.enabled ? (b(), E("section", lS, [
                  c("div", cS, [
                    c("p", uS, p(g(m)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(m)("library", "Review next suggestion")), 9, dS)
                  ]),
                  Yt.value.item ? (b(), E("article", fS, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", hS, p(Yt.value.item.title), 1)
                      ]),
                      c("span", pS, [
                        c("bdi", vS, p(Yt.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", gS, [
                      (b(!0), E(le, null, Me(Yt.value.fields, (f) => (b(), E("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", mS, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", bS, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", yS, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", _S, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", wS, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", CS, p(f.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: Yt.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: k.value
                          }, null, 8, ES),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, TS),
                          S[29] || (S[29] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", AS, p(g(m)("library", "Use suggested value")), 1)
                        ], 8, SS)
                      ]))), 128))
                    ]),
                    c("footer", kS, [
                      c("a", {
                        class: "button secondary",
                        href: Yt.value.item.detailsUrl
                      }, p(g(m)("library", "Maintenance")), 9, OS),
                      c("a", {
                        class: "button secondary",
                        href: Yt.value.skipUrl
                      }, p(g(m)("library", "Skip to next suggestion")), 9, NS)
                    ])
                  ])) : j("", !0)
                ])) : j("", !0),
                h.value.length === 0 && !ae.loading && !ae.error ? (b(), E("div", xS, [
                  c("h3", null, p(g(m)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: be.value
                  }, p(g(m)("library", "Back to Library")), 9, LS)
                ])) : (b(), E("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(m)("library", "Review results")
                }, [
                  (b(!0), E(le, null, Me(h.value, (f) => (b(), E("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (H) => un(f, H)
                        }, [
                          c("bdi", PS, p(f.title), 1)
                        ], 8, IS)
                      ]),
                      f.creators ? (b(), E("p", DS, [
                        c("bdi", MS, p(f.creators), 1)
                      ])) : j("", !0),
                      f.scanError ? (b(), E("p", $S, [
                        c("bdi", FS, p(f.scanError), 1)
                      ])) : j("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (H) => un(f, H)
                      }, p(g(m)("library", "Details")), 9, zS),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, US)
                    ])
                  ]))), 128))
                ], 8, RS)),
                h.value.length > 0 ? (b(), E("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  B.value.previousUrl ? (b(), E("a", {
                    key: 0,
                    href: B.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, HS)) : (b(), E("span", jS, p(g(m)("library", "Previous")), 1)),
                  c("span", null, [
                    Oe(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                    B.value.total > 0 ? (b(), E("span", VS, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : j("", !0)
                  ]),
                  B.value.nextUrl ? (b(), E("a", {
                    key: 2,
                    href: B.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, GS)) : (b(), E("span", KS, p(g(m)("library", "Next")), 1))
                ], 8, BS)) : j("", !0)
              ])) : Jt.value ? (b(), E("main", WS, [
                c("header", qS, [
                  c("p", YS, p(g(m)("library", "Your library")), 1),
                  c("h2", XS, p(g(m)("library", "Home")), 1)
                ]),
                c("section", ZS, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", JS, p(g(m)("library", "Continue reading")), 1),
                      c("p", QS, p(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${be.value}?sort=lastOpened`
                    }, p(g(m)("library", "View all")), 9, eE)
                  ]),
                  Cn.value.continueReading.length ? (b(), E("div", tE, [
                    (b(!0), E(le, null, Me(Cn.value.continueReading, (f) => (b(), E("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (H) => un(f, H)
                      }, [
                        c("span", iE, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, aE)
                        ])
                      ], 8, nE),
                      c("div", rE, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (H) => un(f, H)
                          }, [
                            c("bdi", oE, p(f.title), 1)
                          ], 8, sE)
                        ]),
                        f.creators ? (b(), E("p", lE, [
                          c("bdi", cE, p(f.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, uE)
                      ])
                    ]))), 128))
                  ])) : (b(), E("p", dE, p(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", fE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", hE, p(g(m)("library", "Recently added")), 1),
                      c("p", pE, p(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${be.value}?sort=recent`
                    }, p(g(m)("library", "View all")), 9, vE)
                  ]),
                  Cn.value.recentlyAdded.length ? (b(), E("div", gE, [
                    (b(!0), E(le, null, Me(Cn.value.recentlyAdded, (f) => (b(), E("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (H) => un(f, H)
                      }, [
                        c("span", bE, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, yE)
                        ])
                      ], 8, mE),
                      c("div", _E, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (H) => un(f, H)
                          }, [
                            c("bdi", CE, p(f.title), 1)
                          ], 8, wE)
                        ]),
                        f.creators ? (b(), E("p", SE, [
                          c("bdi", EE, p(f.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, TE)
                      ])
                    ]))), 128))
                  ])) : (b(), E("p", AE, p(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", kE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", OE, p(g(m)("library", "Shelves")), 1),
                      c("p", NE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: ot.value }, p(g(m)("library", "View all")), 9, xE)
                  ]),
                  _a.value.length ? (b(), E("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (b(!0), E(le, null, Me(_a.value, (f) => (b(), E("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", IE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, RE))), 128))
                  ], 8, LE)) : (b(), E("p", PE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(Za.value.count || 0) > 0 ? (b(), E("aside", DE, [
                  c("div", null, [
                    c("h3", ME, p(g(m)("library", "Needs attention")), 1),
                    c("p", $E, p(g(Mn)("library", "%n publication needs better details.", "%n publications need better details.", Number(Za.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: Za.value.url
                  }, p(g(m)("library", "Review")), 9, FE)
                ])) : j("", !0)
              ])) : U.value ? (b(), E("main", zE, [
                c("header", UE, [
                  c("p", BE, p(g(m)("library", "Your library")), 1),
                  c("h2", HE, p(g(m)("library", "Shelves")), 1),
                  c("p", jE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                wa.value.length ? (b(), E("nav", {
                  key: 0,
                  class: "library-shelf-summary-grid",
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  (b(!0), E(le, null, Me(wa.value, (f) => (b(), E("a", {
                    key: f.id,
                    class: "library-shelf-summary-card",
                    href: f.url
                  }, [
                    c("span", KE, [
                      c("strong", null, [
                        c("bdi", WE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ]),
                    c("small", qE, [
                      c("bdi", YE, p(f.path), 1)
                    ])
                  ], 8, GE))), 128))
                ], 8, VE)) : (b(), E("section", XE, [
                  c("h3", null, p(g(m)("library", "Shelves")), 1),
                  c("p", ZE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", JE, [
                    c("a", {
                      class: "button primary",
                      href: je.value
                    }, p(g(m)("library", "Add a Library root")), 9, QE),
                    c("a", {
                      class: "button secondary",
                      href: be.value
                    }, p(g(m)("library", "All publications")), 9, eT)
                  ])
                ]))
              ])) : (b(), E("section", tT, [
                c("header", nT, [
                  Ie.value ? (b(), E("p", iT, p(nt.value), 1)) : j("", !0),
                  c("h2", aT, p(Je.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: Xe(Ve, ["prevent"])
                  }, [
                    (b(!0), E(le, null, Me(ps.value, (f) => (b(), E("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, oT))), 128)),
                    c("div", lT, [
                      c("label", {
                        class: "library-quick-filter-search",
                        title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                      }, [
                        c("span", null, [
                          Oe(p(g(m)("library", "Search")) + " ", 1),
                          S[30] || (S[30] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                        ]),
                        Ke(c("input", {
                          ref_key: "quickSearchInput",
                          ref: Z,
                          "onUpdate:modelValue": S[1] || (S[1] = (f) => F.q = f),
                          "data-library-quick-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder"),
                          onInput: wt
                        }, null, 40, uT), [
                          [ti, F.q]
                        ])
                      ], 8, cT)
                    ]),
                    c("label", dT, [
                      Oe(p(g(m)("library", "Sort")), 1),
                      Ke(c("select", {
                        "onUpdate:modelValue": S[2] || (S[2] = (f) => F.sort = f),
                        name: "sort",
                        onChange: Ve
                      }, [
                        c("option", fT, p(g(m)("library", "Title")), 1),
                        c("option", hT, p(g(m)("library", "Date added")), 1),
                        c("option", pT, p(g(m)("library", "Publication date")), 1),
                        c("option", vT, p(g(m)("library", "Series")), 1),
                        c("option", gT, p(g(m)("library", "Recently opened")), 1),
                        c("option", mT, p(g(m)("library", "Format")), 1)
                      ], 544), [
                        [fn, F.sort]
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
                        class: Ee({ active: Ut.value === "compact" }),
                        "aria-pressed": Ut.value === "compact" ? "true" : "false",
                        onClick: S[3] || (S[3] = (f) => ms("compact"))
                      }, p(g(m)("library", "Compact")), 11, yT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ee({ active: Ut.value === "gallery" }),
                        "aria-pressed": Ut.value === "gallery" ? "true" : "false",
                        onClick: S[4] || (S[4] = (f) => ms("gallery"))
                      }, p(g(m)("library", "Gallery")), 11, _T),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ee({ active: Ut.value === "list" }),
                        "aria-pressed": Ut.value === "list" ? "true" : "false",
                        onClick: S[5] || (S[5] = (f) => ms("list"))
                      }, p(g(m)("library", "List")), 11, wT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ee({ active: Ut.value === "shelf" }),
                        "aria-pressed": Ut.value === "shelf" ? "true" : "false",
                        onClick: S[6] || (S[6] = (f) => ms("shelf"))
                      }, p(g(m)("library", "Shelf")), 11, CT)
                    ], 8, bT)
                  ], 40, sT),
                  c("details", ST, [
                    c("summary", ET, [
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Facets narrow the current results"),
                        "aria-label": `${g(m)("library", "Filters")}: ${g(m)("library", "Facets narrow the current results")}`
                      }, p(g(m)("library", "Filters")), 9, TT),
                      c("b", AT, p(F.shelf ? g(m)("library", "this shelf") : Ci.value.length > 0 ? g(m)("library", "current results") : g(m)("library", "whole catalogue")), 1)
                    ]),
                    c("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": g(m)("library", "Catalogue search and filters"),
                      onSubmit: Xe(zp, ["prevent"])
                    }, [
                      c("label", null, [
                        Oe(p(g(m)("library", "Type")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[7] || (S[7] = (f) => F.type = f),
                          name: "type"
                        }, [
                          c("option", OT, p(g(m)("library", "All types")), 1),
                          (b(!0), E(le, null, Me(O.value, (f) => (b(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, NT))), 128))
                        ], 512), [
                          [fn, F.type]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Publisher")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[8] || (S[8] = (f) => F.publisher = f),
                          name: "publisher"
                        }, [
                          c("option", xT, p(g(m)("library", "All publishers")), 1),
                          (b(!0), E(le, null, Me(A.value, (f) => (b(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, LT))), 128))
                        ], 512), [
                          [fn, F.publisher]
                        ])
                      ]),
                      c("div", RT, [
                        c("label", IT, p(g(m)("library", "Series / periodical")), 1),
                        Ke(c("input", {
                          id: "library-publication-search",
                          "onUpdate:modelValue": S[9] || (S[9] = (f) => ue.value = f),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-publication-suggestions",
                          "aria-expanded": J.value && D.value.length > 0 ? "true" : "false",
                          onFocus: S[10] || (S[10] = (f) => J.value = !0),
                          onKeydown: S[11] || (S[11] = jt((f) => J.value = !1, ["escape"]))
                        }, null, 40, PT), [
                          [ti, ue.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "publication",
                          value: F.publication
                        }, null, 8, DT),
                        J.value && D.value.length > 0 ? (b(), E("ul", MT, [
                          (b(!0), E(le, null, Me(D.value, (f) => (b(), E("li", {
                            key: f,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: S[12] || (S[12] = Xe(() => {
                              }, ["prevent"])),
                              onClick: (H) => Up(f, H)
                            }, p(f), 41, $T)
                          ]))), 128))
                        ])) : j("", !0),
                        c("button", FT, p(g(m)("library", "Apply series")), 1)
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Publication year")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[13] || (S[13] = (f) => F.year = f),
                          name: "year"
                        }, [
                          c("option", zT, p(g(m)("library", "All years")), 1),
                          (b(!0), E(le, null, Me(K.value, (f) => (b(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, UT))), 128))
                        ], 512), [
                          [fn, F.year]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Creator")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[14] || (S[14] = (f) => F.creator = f),
                          name: "creator",
                          title: g(m)("library", "Exact full-field creator matches only")
                        }, [
                          c("option", HT, p(g(m)("library", "All creators")), 1),
                          (b(!0), E(le, null, Me(M.value, (f) => (b(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, jT))), 128))
                        ], 8, BT), [
                          [fn, F.creator]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Nextcloud tag")), 1),
                        Ke(c("input", {
                          "onUpdate:modelValue": S[15] || (S[15] = (f) => F.tag = f),
                          type: "text",
                          name: "tag",
                          placeholder: g(m)("library", "photography")
                        }, null, 8, VT), [
                          [ti, F.tag]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Format")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[16] || (S[16] = (f) => F.format = f),
                          name: "format"
                        }, [
                          c("option", GT, p(g(m)("library", "All formats")), 1),
                          (b(!0), E(le, null, Me(T.value, (f) => (b(), E("option", {
                            key: f,
                            value: f
                          }, p(or(f)), 9, KT))), 128))
                        ], 512), [
                          [fn, F.format]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Shelf")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[17] || (S[17] = (f) => F.shelf = f),
                          name: "shelf"
                        }, [
                          c("option", WT, p(g(m)("library", "All shelves")), 1),
                          (b(!0), E(le, null, Me(_.value, (f) => (b(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, qT))), 128))
                        ], 512), [
                          [fn, F.shelf]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Scan status")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[18] || (S[18] = (f) => F.status = f),
                          name: "status"
                        }, [
                          c("option", YT, p(g(m)("library", "All scan statuses")), 1),
                          (b(!0), E(le, null, Me(oe.value, (f) => (b(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, XT))), 128))
                        ], 512), [
                          [fn, F.status]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Workflow status")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[19] || (S[19] = (f) => F.workflowStatus = f),
                          name: "workflowStatus"
                        }, [
                          c("option", ZT, p(g(m)("library", "All workflow statuses")), 1),
                          (b(!0), E(le, null, Me(de.value, (f) => (b(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, JT))), 128))
                        ], 512), [
                          [fn, F.workflowStatus]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Genre")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[20] || (S[20] = (f) => F.genre = f),
                          name: "genre"
                        }, [
                          c("option", QT, p(g(m)("library", "All genres")), 1),
                          (b(!0), E(le, null, Me(te.value, (f) => (b(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, eA))), 128))
                        ], 512), [
                          [fn, F.genre]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Classification")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[21] || (S[21] = (f) => F.classification = f),
                          name: "classification"
                        }, [
                          c("option", tA, p(g(m)("library", "All classifications")), 1),
                          (b(!0), E(le, null, Me(ve.value, (f) => (b(), E("option", {
                            key: f,
                            value: f
                          }, p(f), 9, nA))), 128))
                        ], 512), [
                          [fn, F.classification]
                        ])
                      ]),
                      c("label", null, [
                        Oe(p(g(m)("library", "Suggested updates")), 1),
                        Ke(c("select", {
                          "onUpdate:modelValue": S[22] || (S[22] = (f) => F.scannerConflicts = f),
                          name: "scannerConflicts"
                        }, [
                          c("option", iA, p(g(m)("library", "All metadata")), 1),
                          c("option", aA, p(g(m)("library", "Suggested updates")), 1)
                        ], 512), [
                          [fn, F.scannerConflicts]
                        ])
                      ]),
                      c("button", rA, p(g(m)("library", "Apply filters")), 1),
                      c("a", sA, p(g(m)("library", "Clear")), 1)
                    ], 40, kT)
                  ]),
                  c("section", oA, [
                    c("h3", lA, p(g(m)("library", "Shelves")), 1),
                    c("div", cA, [
                      P.value.length > 0 ? (b(), E("label", {
                        key: 0,
                        class: "library-shortcut-select-card library-periodical-groups",
                        title: g(m)("library", "Jump into recurring publications with one click.")
                      }, [
                        c("span", null, p(g(m)("library", "Series / periodicals")), 1),
                        c("select", { onChange: hl }, [
                          c("option", dA, p(g(m)("library", "Choose series")), 1),
                          (b(!0), E(le, null, Me(P.value, (f) => (b(), E("option", {
                            key: f.publication,
                            value: Wp(f.publication)
                          }, p(f.publication) + " · " + p(f.itemCount), 9, fA))), 128))
                        ], 32)
                      ], 8, uA)) : j("", !0),
                      K.value.length > 0 ? (b(), E("label", hA, [
                        c("span", null, p(g(m)("library", "Publication year")), 1),
                        c("select", { onChange: hl }, [
                          c("option", pA, p(g(m)("library", "Choose year")), 1),
                          (b(!0), E(le, null, Me(K.value, (f) => (b(), E("option", {
                            key: f,
                            value: qp(f)
                          }, p(f), 9, vA))), 128))
                        ], 32)
                      ])) : j("", !0),
                      M.value.length > 0 ? (b(), E("label", gA, [
                        c("span", null, p(g(m)("library", "Creator")), 1),
                        c("select", { onChange: hl }, [
                          c("option", mA, p(g(m)("library", "Choose creator")), 1),
                          (b(!0), E(le, null, Me(M.value, (f) => (b(), E("option", {
                            key: f,
                            value: Yp(f)
                          }, p(f), 9, bA))), 128))
                        ], 32)
                      ])) : j("", !0)
                    ])
                  ]),
                  c("section", yA, [
                    c("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(m)("library", "Collections")), 9, _A),
                    c("form", {
                      method: "post",
                      action: _i.value,
                      class: "library-saved-collection-save-form",
                      title: fl.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: k.value
                      }, null, 8, CA),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: jp.value
                      }, null, 8, SA),
                      c("label", null, [
                        Oe(p(g(m)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !fl.value,
                          autocomplete: "off"
                        }, null, 8, EA)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !fl.value,
                        title: g(m)("library", "Save current view")
                      }, p(g(m)("library", "Save")), 9, TA)
                    ], 8, wA),
                    ba.value.length > 0 ? (b(), E("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (b(!0), E(le, null, Me(ba.value, (f) => (b(), E("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: Gp(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", null, p(g(Mn)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, kA),
                        c("form", {
                          method: "post",
                          action: Kp(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: k.value
                          }, null, 8, NA),
                          c("button", xA, p(g(m)("library", "Delete")), 1)
                        ], 8, OA)
                      ]))), 128))
                    ], 8, AA)) : j("", !0)
                  ]),
                  Kt.value.length > 0 ? (b(), E("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", RA, [
                      S[31] || (S[31] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, p(g(m)("library", "Batch actions")), 9, IA),
                      c("small", PA, p(g(m)("library", "Batch actions for selected publications")), 1),
                      c("b", DA, p(g(Mn)("library", "%n publication selected", "%n publications selected", Kt.value.length)), 1)
                    ]),
                    c("p", MA, p(g(Mn)("library", "%n publication selected", "%n publications selected", Kt.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Gi
                    }, [
                      c("form", {
                        method: "post",
                        action: q.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: k.value
                        }, null, 8, FA),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, zA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, p(g(m)("library", "Apply")), 9, UA)
                      ], 8, $A),
                      c("form", {
                        method: "post",
                        action: W.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: k.value
                        }, null, 8, HA),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, jA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, p(g(m)("library", "Remove")), 9, VA)
                      ], 8, BA),
                      c("form", {
                        method: "post",
                        action: Q.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: k.value
                        }, null, 8, KA),
                        (b(!0), E(le, null, Me(Kn.value, (f) => (b(), E("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, WA))), 128)),
                        S[32] || (S[32] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Reset metadata")), 9, qA)
                      ], 8, GA),
                      c("form", {
                        method: "post",
                        action: V.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: k.value
                        }, null, 8, XA),
                        (b(!0), E(le, null, Me(Kn.value, (f) => (b(), E("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, ZA))), 128)),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Field")), 1),
                          c("select", JA, [
                            c("option", QA, p(g(m)("library", "Publication type")), 1),
                            c("option", e2, p(g(m)("library", "Subtitle")), 1),
                            c("option", t2, p(g(m)("library", "Creators")), 1),
                            c("option", n2, p(g(m)("library", "Series / periodical")), 1),
                            c("option", i2, p(g(m)("library", "Publication date")), 1),
                            c("option", a2, p(g(m)("library", "Language")), 1),
                            c("option", r2, p(g(m)("library", "Publisher")), 1),
                            c("option", s2, p(g(m)("library", "Genres")), 1),
                            c("option", o2, p(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, l2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, p(g(m)("library", "Preview edit")), 9, c2)
                      ], 8, YA),
                      c("form", {
                        method: "post",
                        action: _e.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: k.value
                        }, null, 8, d2),
                        (b(!0), E(le, null, Me(Kn.value, (f) => (b(), E("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, f2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Fresh covers")), 9, h2)
                      ], 8, u2)
                    ], 32)
                  ], 8, LA)) : j("", !0)
                ], 8, rT),
                yi.value ? (b(), E("p", p2, p(yi.value), 1)) : j("", !0),
                ma.value ? (b(), E("p", v2, p(ma.value), 1)) : j("", !0),
                bi.value ? (b(), E("p", g2, p(bi.value), 1)) : j("", !0),
                Ie.value ? (b(), E("section", m2, [
                  c("p", b2, p(nt.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: Ne.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : Se.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(Pe.value), 9, y2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g(Mn)("library", "%n item", "%n items", B.value.total)), 1),
                    I.value?.earliestYear && I.value?.latestYear ? (b(), E("span", w2, p(I.value.earliestYear) + "–" + p(I.value.latestYear), 1)) : j("", !0),
                    I.value?.datedCount ? (b(), E("span", C2, p(I.value.datedCount) + " " + p(g(m)("library", "dated")), 1)) : j("", !0),
                    I.value?.undatedCount > 0 ? (b(), E("span", S2, p(I.value.undatedCount) + " " + p(g(m)("library", "undated")), 1)) : j("", !0)
                  ], 8, _2),
                  pe.value && I.value ? (b(), E("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(m)("library", "Publication contents")), 1),
                    c("span", null, p(g(Mn)("library", "%n item", "%n items", I.value.itemCount)), 1),
                    I.value.earliestYear && I.value.latestYear ? (b(), E("span", T2, p(I.value.earliestYear) + "–" + p(I.value.latestYear), 1)) : j("", !0),
                    c("span", null, p(I.value.datedCount) + " " + p(g(m)("library", "with issue/date coverage")), 1),
                    I.value.undatedCount > 0 ? (b(), E("span", A2, p(I.value.undatedCount) + " " + p(g(m)("library", "without dates yet")), 1)) : j("", !0),
                    c("span", null, p(g(m)("library", "read-only grouping")), 1)
                  ], 8, E2)) : j("", !0),
                  pe.value && I.value?.issueGroups?.length ? (b(), E("section", k2, [
                    c("div", null, [
                      c("p", O2, p(g(m)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(m)("library", "Read-only issue/date grouping")), 9, N2)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(m)("library", "Visual issue strip")
                    }, [
                      (b(!0), E(le, null, Me(I.value.issueGroups, (f) => (b(), E("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        c("small", null, p(g(Mn)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, L2))), 128))
                    ], 8, x2),
                    I.value.gapRanges?.length ? (b(), E("p", R2, p(g(m)("library", "Gap")) + ": " + p(I.value.gapRanges.join(", ")), 1)) : j("", !0),
                    (b(!0), E(le, null, Me(I.value.issueGroups, (f) => (b(), E("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (b(!0), E(le, null, Me(f.items, (H, ge) => (b(), E("li", {
                          key: H.itemId
                        }, [
                          c("span", I2, p(H.issueLabel), 1),
                          c("a", {
                            href: H.detailsUrl || "#"
                          }, p(H.title), 9, P2),
                          c("small", null, [
                            Oe(p(H.publicationType), 1),
                            H.publicationDate ? (b(), E(le, { key: 0 }, [
                              Oe(" · " + p(H.publicationDate), 1)
                            ], 64)) : j("", !0)
                          ]),
                          c("small", D2, [
                            ge > 0 ? (b(), E(le, { key: 0 }, [
                              Oe(p(g(m)("library", "Previous issue")), 1)
                            ], 64)) : j("", !0),
                            ge > 0 && ge < f.items.length - 1 ? (b(), E(le, { key: 1 }, [
                              Oe(" · ")
                            ], 64)) : j("", !0),
                            ge < f.items.length - 1 ? (b(), E(le, { key: 2 }, [
                              Oe(p(g(m)("library", "Next issue")), 1)
                            ], 64)) : j("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    I.value.unknownIssueItems?.length ? (b(), E("details", M2, [
                      c("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(m)("library", "Unknown issue/date")) + " · " + p(I.value.unknownIssueItems.length), 9, $2)
                    ])) : j("", !0)
                  ])) : j("", !0),
                  c("p", null, [
                    c("a", {
                      href: be.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(m)("library", "Back to full catalogue")), 9, F2)
                  ])
                ])) : j("", !0),
                c("div", z2, [
                  c("p", U2, [
                    Oe(p(g(m)("library", "Showing")) + " " + p(B.value.from) + "–" + p(B.value.to) + " " + p(g(m)("library", "of")) + " " + p(B.value.total) + " " + p(g(m)("library", "catalogue items")), 1),
                    Ci.value.length > 0 ? (b(), E("span", B2, [
                      S[33] || (S[33] = Oe(" · ", -1)),
                      c("a", H2, p(g(m)("library", "Clear all filters")), 1)
                    ])) : j("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    c("span", V2, [
                      Oe(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                      B.value.total > 0 ? (b(), E("span", G2, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : j("", !0)
                    ]),
                    B.value.previousUrl ? (b(), E("a", {
                      key: 0,
                      href: B.value.previousUrl
                    }, p(g(m)("library", "Previous")), 9, K2)) : (b(), E("span", W2, p(g(m)("library", "Previous")), 1)),
                    B.value.nextUrl ? (b(), E("a", {
                      key: 2,
                      href: B.value.nextUrl
                    }, p(g(m)("library", "Next")), 9, q2)) : (b(), E("span", Y2, p(g(m)("library", "Next")), 1))
                  ], 8, j2)
                ]),
                Ci.value.length > 0 ? (b(), E("nav", {
                  key: 4,
                  class: "library-active-filter-chips",
                  "aria-label": g(m)("library", "Active filters")
                }, [
                  c("span", null, p(g(m)("library", "Active filters")), 1),
                  (b(!0), E(le, null, Me(Ci.value, (f) => (b(), E("a", {
                    key: f.key,
                    href: dl(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${g(m)("library", "Remove filter")}: ${f.label}`,
                    onClick: Xe((H) => Bp(f.key), ["prevent"])
                  }, [
                    c("strong", null, p(f.label) + ":", 1),
                    Oe(" " + p(f.value) + " ", 1),
                    S[34] || (S[34] = c("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, Z2))), 128))
                ], 8, X2)) : j("", !0),
                h.value.length === 0 ? (b(), E("div", {
                  key: 5,
                  class: Ee(["library-empty-content", { "library-first-run-guidance": Ot.value || wn.value, "library-filter-empty-state": lt.value && !Ot.value && !wn.value }]),
                  role: "status"
                }, [
                  Ot.value ? (b(), E(le, { key: 0 }, [
                    c("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(m)("library", "Start with one Library root")), 9, J2),
                    c("p", Q2, [
                      c("a", {
                        href: je.value,
                        class: "button primary"
                      }, p(g(m)("library", "Add a Library root")), 9, ek),
                      c("span", tk, p(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : wn.value ? (b(), E(le, { key: 1 }, [
                    c("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(m)("library", "No enabled Library roots")), 9, nk),
                    c("p", ik, [
                      c("a", {
                        href: je.value,
                        class: "button primary"
                      }, p(g(m)("library", "Open Library settings")), 9, ak)
                    ])
                  ], 64)) : lt.value ? (b(), E(le, { key: 2 }, [
                    c("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(m)("library", "No matches for the current filters")), 9, rk),
                    c("p", sk, [
                      c("a", {
                        href: Hp(),
                        class: "button secondary"
                      }, p(g(m)("library", "Clear search")), 9, ok),
                      c("a", lk, p(g(m)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (b(), E(le, { key: 3 }, [
                    c("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(m)("library", "No catalogue items yet")), 9, ck),
                    c("p", uk, [
                      c("a", {
                        href: je.value,
                        class: "button primary"
                      }, p(g(m)("library", "Run a scan from settings")), 9, dk)
                    ])
                  ], 64))
                ], 2)) : j("", !0),
                h.value.length > 0 ? (b(), E("label", fk, [
                  c("input", {
                    type: "checkbox",
                    checked: Kt.value.length === h.value.length,
                    onChange: Qa
                  }, null, 40, hk),
                  Oe(" " + p(g(m)("library", "Select all publications on this page")), 1)
                ])) : j("", !0),
                h.value.length > 0 && Ut.value === "list" ? (b(), E("ul", pk, [
                  (b(!0), E(le, null, Me(h.value, (f) => (b(), E("li", {
                    key: f.id,
                    class: Ee(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Si.value.has(Number(f.id)), "library-catalogue-list-row--open": en.value && Number(Wn.value) === Number(f.id) }])
                  }, [
                    c("label", vk, [
                      c("input", {
                        type: "checkbox",
                        checked: Si.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (H) => Ja(f.id, H.currentTarget.checked)
                      }, null, 40, gk)
                    ]),
                    c("div", mk, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (H) => un(f, H)
                      }, [
                        c("bdi", yk, p(f.title), 1)
                      ], 8, bk),
                      f.creators ? (b(), E("span", _k, [
                        c("bdi", wk, p(f.creators), 1)
                      ])) : j("", !0)
                    ]),
                    c("dl", Ck, [
                      f.publication ? (b(), E("div", Sk, [
                        c("dt", null, p(g(m)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", Ek, p(f.publication), 1)
                        ])
                      ])) : j("", !0),
                      f.publicationDate ? (b(), E("div", Tk, [
                        c("dt", null, p(g(m)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : j("", !0),
                      f.extension || f.publicationType ? (b(), E("div", Ak, [
                        c("dt", null, p(g(m)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Ee(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? or(f.extension) : f.publicationType), 11, kk)
                        ])
                      ])) : j("", !0),
                      f.shelf ? (b(), E("div", Ok, [
                        c("dt", null, p(g(m)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", Nk, p(f.shelf), 1)
                        ])
                      ])) : j("", !0)
                    ]),
                    c("div", xk, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, Lk),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (H) => un(f, H)
                      }, p(g(m)("library", "Details")), 9, Rk)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (b(), E("div", {
                  key: 8,
                  class: Ee(["library-cover-gallery", hs.value])
                }, [
                  (b(!0), E(le, null, Me(h.value, (f) => (b(), E("article", {
                    key: f.id,
                    class: Ee(["library-cover-card", { "library-cover-card--cover-loaded": lr(f) === "loaded", "library-cover-card--cover-error": lr(f) === "error", "library-cover-card--selected": Si.value.has(Number(f.id)), "library-cover-card--open": en.value && Number(Wn.value) === Number(f.id) }])
                  }, [
                    c("label", Ik, [
                      c("input", {
                        type: "checkbox",
                        checked: Si.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (H) => Ja(f.id, H.currentTarget.checked)
                      }, null, 40, Pk)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": en.value && Number(Wn.value) === Number(f.id) ? "true" : "false",
                      onClick: (H) => un(f, H)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(m)("library", "Details")), 9, Mk),
                      c("span", $k, [
                        lr(f) === "loading" ? (b(), E("span", Fk)) : j("", !0),
                        c("img", {
                          class: Ee(["library-cover-image", { "library-cover-image--loaded": lr(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (H) => Xp(f),
                          onError: (H) => Zp(f)
                        }, null, 42, zk),
                        lr(f) === "error" ? (b(), E("span", Uk, p(g(m)("library", "Cover unavailable")), 1)) : j("", !0)
                      ])
                    ], 8, Dk),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Xe((H) => bu(f, H), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: k.value
                      }, null, 8, Hk),
                      S[35] || (S[35] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, jk),
                      c("button", {
                        type: "submit",
                        class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": cr[f.id] ? "true" : void 0,
                        disabled: cr[f.id],
                        onClick: Xe((H) => bu(f, H), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, Vk),
                      ur[f.id] ? (b(), E("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(ur[f.id]), 9, Gk)) : j("", !0)
                    ], 40, Bk),
                    c("div", Kk, [
                      c("div", Wk, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (H) => un(f, H)
                          }, [
                            c("bdi", Xk, p(f.title), 1)
                          ], 8, Yk)
                        ], 8, qk),
                        f.creators ? (b(), E("p", Zk, [
                          c("bdi", Jk, p(f.creators), 1)
                        ])) : j("", !0),
                        pl(f) || f.extension ? (b(), E("div", Qk, [
                          f.extension ? (b(), E("span", eO, [
                            c("bdi", tO, p(or(f.extension)), 1)
                          ])) : j("", !0),
                          pl(f) ? (b(), E("p", nO, [
                            c("bdi", iO, p(pl(f)), 1)
                          ])) : j("", !0)
                        ])) : j("", !0),
                        c("div", aO, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(m)("library", "Open")), 9, rO),
                          ye(g(uo), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: ke(() => [
                              ye(g(Ma), {
                                href: f.filesUrl
                              }, {
                                default: ke(() => [
                                  Oe(p(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(Ma), {
                                href: f.downloadUrl
                              }, {
                                default: ke(() => [
                                  Oe(p(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(Ma), {
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
                ], 2)) : j("", !0),
                h.value.length > 0 ? (b(), E("nav", {
                  key: 9,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  c("span", oO, [
                    Oe(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                    B.value.total > 0 ? (b(), E("span", lO, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : j("", !0)
                  ]),
                  B.value.previousUrl ? (b(), E("a", {
                    key: 0,
                    href: B.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, cO)) : (b(), E("span", uO, p(g(m)("library", "Previous")), 1)),
                  B.value.nextUrl ? (b(), E("a", {
                    key: 2,
                    href: B.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, dO)) : (b(), E("span", fO, p(g(m)("library", "Next")), 1))
                ], 8, sO)) : j("", !0)
              ]))
            ], 8, YC)
          ]),
          _: 1
        }),
        ye(g(LC), {
          ref_key: "sidebarComponent",
          ref: xn,
          class: "library-native-item-sidebar",
          open: en.value,
          "no-toggle": "",
          loading: $e.loading,
          name: Te.value?.title || g(m)("library", "Publication details"),
          subname: Te.value?.creators || "",
          role: Ln.value ? "dialog" : void 0,
          "aria-modal": Ln.value ? "true" : void 0,
          "aria-labelledby": Ln.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Ln.value && Te.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: gs,
          onClosed: ul,
          onClose: qi
        }, {
          default: ke(() => [
            c("div", hO, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: Ca,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(Te.value?.title || g(m)("library", "Publication details")), 513),
              $e.loading && !Te.value ? (b(), E("p", pO, p(g(m)("library", "Loading publication details…")), 1)) : $e.error ? (b(), E("div", {
                key: 1,
                class: "library-sidebar-state",
                role: $e.missing ? "status" : "alert"
              }, [
                c("p", null, p($e.error), 1),
                $e.missing ? j("", !0) : (b(), E("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: S[23] || (S[23] = (f) => Ti(Wn.value, { historyMode: "none" }))
                }, p(g(m)("library", "Try again")), 1))
              ], 8, vO)) : Te.value ? (b(), E(le, { key: 2 }, [
                c("p", gO, p(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", mO, [
                  c("span", bO, p(g(m)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: Te.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, yO),
                  c("div", _O, [
                    c("p", wO, [
                      c("bdi", CO, p(Te.value.publicationType || g(m)("library", "Publication")), 1),
                      Te.value.extension ? (b(), E("span", SO, [
                        S[36] || (S[36] = Oe(" · ", -1)),
                        c("bdi", EO, p(or(Te.value.extension)), 1)
                      ])) : j("", !0)
                    ]),
                    c("div", TO, [
                      c("a", {
                        class: "button primary",
                        href: Te.value.openUrl
                      }, p(g(m)("library", "Open")), 9, AO),
                      ye(g(uo), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: ke(() => [
                          ye(g(Ma), {
                            href: Te.value.filesUrl
                          }, {
                            default: ke(() => [
                              Oe(p(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(Ma), {
                            href: Te.value.downloadUrl
                          }, {
                            default: ke(() => [
                              Oe(p(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(Ma), {
                            href: Te.value.detailsUrl
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
                  (b(), E(le, null, Me(cl, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: Ee({ active: Wt.value === f.key }),
                    "aria-current": Wt.value === f.key ? "page" : void 0,
                    onClick: (H) => Wt.value = f.key
                  }, p(g(m)("library", f.label)), 11, OO)), 64))
                ], 8, kO),
                Wt.value === "overview" ? (b(), E("section", NO, [
                  c("h3", xO, p(g(m)("library", "Overview")), 1),
                  Te.value.description ? (b(), E("p", LO, [
                    c("bdi", RO, p(Te.value.description), 1)
                  ])) : j("", !0),
                  c("dl", IO, [
                    Te.value.publication ? (b(), E("div", PO, [
                      c("dt", null, p(g(m)("library", "Series")), 1),
                      c("dd", null, p(Te.value.publication), 1)
                    ])) : j("", !0),
                    Te.value.publicationDate ? (b(), E("div", DO, [
                      c("dt", null, p(g(m)("library", "Date")), 1),
                      c("dd", null, p(Te.value.publicationDate), 1)
                    ])) : j("", !0),
                    Te.value.publisher ? (b(), E("div", MO, [
                      c("dt", null, p(g(m)("library", "Publisher")), 1),
                      c("dd", null, p(Te.value.publisher), 1)
                    ])) : j("", !0),
                    Te.value.language ? (b(), E("div", $O, [
                      c("dt", null, p(g(m)("library", "Language")), 1),
                      c("dd", null, p(Te.value.language), 1)
                    ])) : j("", !0),
                    Te.value.shelf ? (b(), E("div", FO, [
                      c("dt", null, p(g(m)("library", "Shelf")), 1),
                      c("dd", null, p(Te.value.shelf), 1)
                    ])) : j("", !0)
                  ])
                ])) : Wt.value === "metadata" ? (b(), E("section", zO, [
                  c("h3", UO, p(g(m)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Xe(Ei, ["prevent"])
                  }, [
                    c("label", null, [
                      Oe(p(g(m)("library", "Title")), 1),
                      Ke(c("input", {
                        "onUpdate:modelValue": S[24] || (S[24] = (f) => ht.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ti, ht.title]
                      ])
                    ]),
                    c("label", null, [
                      Oe(p(g(m)("library", "Publication date")), 1),
                      Ke(c("input", {
                        "onUpdate:modelValue": S[25] || (S[25] = (f) => ht.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, BO), [
                        [ti, ht.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(m)("library", "Identifiers")), 1),
                      (b(!0), E(le, null, Me(ht.identifiers, (f, H) => (b(), E("div", {
                        key: H,
                        class: "library-sidebar-identifier"
                      }, [
                        Ke(c("input", {
                          "onUpdate:modelValue": (ge) => f.scheme = ge,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, HO), [
                          [ti, f.scheme]
                        ]),
                        Ke(c("input", {
                          "onUpdate:modelValue": (ge) => f.displayValue = ge,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, jO), [
                          [ti, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ge) => Aa(H)
                        }, p(g(m)("library", "Remove")), 9, VO)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: ir
                      }, p(g(m)("library", "Add identifier")), 1)
                    ]),
                    c("p", GO, p(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Qt.error ? (b(), E("p", KO, p(Qt.error), 1)) : Qt.saved ? (b(), E("p", WO, p(g(m)("library", "Metadata saved.")), 1)) : j("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Qt.saving
                    }, p(Qt.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, qO)
                  ], 32),
                  Yn(Te.value).length ? (b(), E("section", YO, [
                    c("h4", XO, p(g(m)("library", "Scanner suggestions")), 1),
                    c("p", ZO, p(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (b(!0), E(le, null, Me(Yn(Te.value), (f) => (b(), E("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          Oe(p(g(m)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          S[37] || (S[37] = c("br", null, null, -1)),
                          Oe(p(g(m)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : j("", !0)
                ])) : (b(), E("section", JO, [
                  c("h3", QO, p(g(m)("library", "Activity")), 1),
                  c("dl", eN, [
                    c("div", null, [
                      c("dt", null, p(g(m)("library", "Scan status")), 1),
                      c("dd", null, p(Te.value.scanStatus || "—"), 1)
                    ]),
                    Te.value.workflowStatus ? (b(), E("div", tN, [
                      c("dt", null, p(g(m)("library", "Workflow")), 1),
                      c("dd", null, p(Te.value.workflowStatus), 1)
                    ])) : j("", !0),
                    Te.value.metadataSource ? (b(), E("div", nN, [
                      c("dt", null, p(g(m)("library", "Metadata source")), 1),
                      c("dd", null, p(Te.value.metadataSource), 1)
                    ])) : j("", !0),
                    Te.value.cachedPath ? (b(), E("div", iN, [
                      c("dt", null, p(g(m)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", aN, p(Te.value.cachedPath), 1)
                      ])
                    ])) : j("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(m)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ta.value,
                    onClick: S[26] || (S[26] = (f) => Ai(Ta.value))
                  }, p(g(m)("library", "Previous item")), 9, sN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !qn.value,
                    onClick: S[27] || (S[27] = (f) => Ai(qn.value))
                  }, p(g(m)("library", "Next item")), 9, oN)
                ], 8, rN)
              ], 64)) : j("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function fN() {
  window.LibraryStartupWatchdog?.fail();
}
function hN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Yc("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !hN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  $m(dN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  fN(), console.error("[library] Vue startup failed", e);
}
