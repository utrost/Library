// @__NO_SIDE_EFFECTS__
function Oc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Be = {}, Ga = [], gn = () => {
}, rf = () => !1, Mo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $o = (e) => e.startsWith("onUpdate:"), ft = Object.assign, Nc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hp = Object.prototype.hasOwnProperty, Ge = (e, t) => Hp.call(e, t), _e = Array.isArray, Mi = (e) => ss(e) === "[object Map]", _a = (e) => ss(e) === "[object Set]", fu = (e) => ss(e) === "[object Date]", xe = (e) => typeof e == "function", et = (e) => typeof e == "string", xn = (e) => typeof e == "symbol", Ke = (e) => e !== null && typeof e == "object", sf = (e) => (Ke(e) || xe(e)) && xe(e.then) && xe(e.catch), of = Object.prototype.toString, ss = (e) => of.call(e), jp = (e) => ss(e).slice(8, -1), lf = (e) => ss(e) === "[object Object]", xc = (e) => et(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ar = /* @__PURE__ */ Oc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Vp = /-\w/g, $t = Fo(
  (e) => e.replace(Vp, (t) => t.slice(1).toUpperCase())
), Gp = /\B([A-Z])/g, Si = Fo(
  (e) => e.replace(Gp, "-$1").toLowerCase()
), zo = Fo((e) => e.charAt(0).toUpperCase() + e.slice(1)), dl = Fo(
  (e) => e ? `on${zo(e)}` : ""
), Et = (e, t) => !Object.is(e, t), Ns = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, cf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Uo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Kp = (e) => {
  const t = et(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let hu;
const Bo = () => hu || (hu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function rn(e) {
  if (_e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = et(i) ? Xp(i) : rn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (et(e) || Ke(e))
    return e;
}
const Wp = /;(?![^(]*\))/g, qp = /:([^]+)/, Yp = /\/\*[^]*?\*\//g;
function Xp(e) {
  const t = {};
  return e.replace(Yp, "").split(Wp).forEach((n) => {
    if (n) {
      const i = n.split(qp);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ce(e) {
  let t = "";
  if (et(e))
    t = e;
  else if (_e(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ce(e[n]);
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
  return t && !et(t) && (e.class = Ce(t)), n && (e.style = rn(n)), e;
}
const Zp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jp = /* @__PURE__ */ Oc(Zp);
function uf(e) {
  return !!e || e === "";
}
function Qp(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Ui(e[i], t[i]);
  return n;
}
function pu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && Ui(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Ui(e, t) {
  if (e === t) return !0;
  let n = fu(e), i = fu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = xn(e), i = xn(t), n || i)
    return e === t;
  if (n = _e(e), i = _e(t), n || i)
    return n && i ? Qp(e, t) : !1;
  if (n = Ke(e), i = Ke(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Mi(e), i = Mi(t), n || i || (n = _a(e), i = _a(t), n || i))
      return n && i ? pu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !Ui(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ev(e, t) {
  return e.findIndex((n) => Ui(n, t));
}
const df = (e) => !!(e && e.__v_isRef === !0), p = (e) => et(e) ? e : e == null ? "" : _e(e) || Ke(e) && (e.toString === of || !xe(e.toString)) ? df(e) ? p(e.value) : JSON.stringify(e, ff, 2) : String(e), ff = (e, t) => df(t) ? ff(e, t.value) : Mi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[fl(i, r) + " =>"] = a, n),
    {}
  )
} : _a(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => fl(n))
} : xn(t) ? fl(t) : Ke(t) && !_e(t) && !lf(t) ? String(t) : t, fl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function tv(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let St;
class nv {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && St && (St.active ? (this.parent = St, this.index = (St.scopes || (St.scopes = [])).push(
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
      const n = St;
      try {
        return St = this, t();
      } finally {
        St = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = St, St = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (St === this)
        St = this.prevScope;
      else {
        let t = St;
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
function iv() {
  return St;
}
let Qe;
const hl = /* @__PURE__ */ new WeakSet();
class hf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, St && (St.active ? St.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, hl.has(this) && (hl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || vf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, vu(this), gf(this);
    const t = Qe, n = On;
    Qe = this, On = !0;
    try {
      return this.fn();
    } finally {
      mf(this), Qe = t, On = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ic(t);
      this.deps = this.depsTail = void 0, vu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? hl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yl(this) && this.run();
  }
  get dirty() {
    return Yl(this);
  }
}
let pf = 0, kr, Or;
function vf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Or, Or = e;
    return;
  }
  e.next = kr, kr = e;
}
function Lc() {
  pf++;
}
function Rc() {
  if (--pf > 0)
    return;
  if (Or) {
    let t = Or;
    for (Or = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; kr; ) {
    let t = kr;
    for (kr = void 0; t; ) {
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
function gf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function mf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Ic(i), av(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Yl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (bf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function bf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Hr) || (e.globalVersion = Hr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Yl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Qe, i = On;
  Qe = e, On = !0;
  try {
    gf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Et(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Qe = n, On = i, mf(e), e.flags &= -3;
  }
}
function Ic(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ic(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function av(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let On = !0;
const yf = [];
function yi() {
  yf.push(On), On = !1;
}
function _i() {
  const e = yf.pop();
  On = e === void 0 ? !0 : e;
}
function vu(e) {
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
let Hr = 0;
class rv {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ho {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Qe || !On || Qe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Qe)
      n = this.activeLink = new rv(Qe, this), Qe.deps ? (n.prevDep = Qe.depsTail, Qe.depsTail.nextDep = n, Qe.depsTail = n) : Qe.deps = Qe.depsTail = n, _f(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Qe.depsTail, n.nextDep = void 0, Qe.depsTail.nextDep = n, Qe.depsTail = n, Qe.deps === n && (Qe.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Hr++, this.notify(t);
  }
  notify(t) {
    Lc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Rc();
    }
  }
}
function _f(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        _f(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Xl = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ Symbol(
  ""
), Zl = /* @__PURE__ */ Symbol(
  ""
), jr = /* @__PURE__ */ Symbol(
  ""
);
function Pt(e, t, n) {
  if (On && Qe) {
    let i = Xl.get(e);
    i || Xl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Ho()), a.map = i, a.key = n), a.track();
  }
}
function di(e, t, n, i, a, r) {
  const s = Xl.get(e);
  if (!s) {
    Hr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Lc(), t === "clear")
    s.forEach(o);
  else {
    const l = _e(e), d = l && xc(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, _) => {
        (_ === "length" || _ === jr || !xn(_) && _ >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(jr)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(ma)), Mi(e) && o(s.get(Zl)));
          break;
        case "delete":
          l || (o(s.get(ma)), Mi(e) && o(s.get(Zl)));
          break;
        case "set":
          Mi(e) && o(s.get(ma));
          break;
      }
  }
  Rc();
}
function $a(e) {
  const t = /* @__PURE__ */ je(e);
  return t === e ? t : (Pt(t, "iterate", jr), /* @__PURE__ */ mn(e) ? t : t.map(Ln));
}
function jo(e) {
  return Pt(e = /* @__PURE__ */ je(e), "iterate", jr), e;
}
function Kn(e, t) {
  return /* @__PURE__ */ wi(e) ? Qa(/* @__PURE__ */ ba(e) ? Ln(t) : t) : Ln(t);
}
const sv = {
  __proto__: null,
  [Symbol.iterator]() {
    return pl(this, Symbol.iterator, (e) => Kn(this, e));
  },
  concat(...e) {
    return $a(this).concat(
      ...e.map((t) => _e(t) ? $a(t) : t)
    );
  },
  entries() {
    return pl(this, "entries", (e) => (e[1] = Kn(this, e[1]), e));
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
      (n) => n.map((i) => Kn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ai(
      this,
      "find",
      e,
      t,
      (n) => Kn(this, n),
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
      (n) => Kn(this, n),
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
    return vl(this, "includes", e);
  },
  indexOf(...e) {
    return vl(this, "indexOf", e);
  },
  join(e) {
    return $a(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return vl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ai(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ur(this, "pop");
  },
  push(...e) {
    return ur(this, "push", e);
  },
  reduce(e, ...t) {
    return gu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return gu(this, "reduceRight", e, t);
  },
  shift() {
    return ur(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ai(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ur(this, "splice", e);
  },
  toReversed() {
    return $a(this).toReversed();
  },
  toSorted(e) {
    return $a(this).toSorted(e);
  },
  toSpliced(...e) {
    return $a(this).toSpliced(...e);
  },
  unshift(...e) {
    return ur(this, "unshift", e);
  },
  values() {
    return pl(this, "values", (e) => Kn(this, e));
  }
};
function pl(e, t, n) {
  const i = jo(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ mn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const ov = Array.prototype;
function ai(e, t, n, i, a, r) {
  const s = jo(e), o = s !== e && !/* @__PURE__ */ mn(e), l = s[t];
  if (l !== ov[t]) {
    const h = l.apply(e, r);
    return o ? Ln(h) : h;
  }
  let d = n;
  s !== e && (o ? d = function(h, _) {
    return n.call(this, Kn(e, h), _, e);
  } : n.length > 2 && (d = function(h, _) {
    return n.call(this, h, _, e);
  }));
  const u = l.call(s, d, i);
  return o && a ? a(u) : u;
}
function gu(e, t, n, i) {
  const a = jo(e), r = a !== e && !/* @__PURE__ */ mn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = Kn(e, d)), n.call(this, d, Kn(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Kn(e, l) : l;
}
function vl(e, t, n) {
  const i = /* @__PURE__ */ je(e);
  Pt(i, "iterate", jr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Mc(n[0]) ? (n[0] = /* @__PURE__ */ je(n[0]), i[t](...n)) : a;
}
function ur(e, t, n = []) {
  yi(), Lc();
  const i = (/* @__PURE__ */ je(e))[t].apply(e, n);
  return Rc(), _i(), i;
}
const lv = /* @__PURE__ */ Oc("__proto__,__v_isRef,__isVue"), wf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xn)
);
function cv(e) {
  xn(e) || (e = String(e));
  const t = /* @__PURE__ */ je(this);
  return Pt(t, "has", e), t.hasOwnProperty(e);
}
class Cf {
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
      return i === (a ? r ? yv : Af : r ? Tf : Ef).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = _e(t);
    if (!a) {
      let l;
      if (s && (l = sv[n]))
        return l;
      if (n === "hasOwnProperty")
        return cv;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ft(t) ? t : i
    );
    if ((xn(n) ? wf.has(n) : lv(n)) || (a || Pt(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ Ft(o)) {
      const l = s && xc(n) ? o : o.value;
      return a && Ke(l) ? /* @__PURE__ */ Vr(l) : l;
    }
    return Ke(o) ? a ? /* @__PURE__ */ Vr(o) : /* @__PURE__ */ It(o) : o;
  }
}
class Sf extends Cf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = _e(t) && xc(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ wi(r);
      if (!/* @__PURE__ */ mn(i) && !/* @__PURE__ */ wi(i) && (r = /* @__PURE__ */ je(r), i = /* @__PURE__ */ je(i)), !s && /* @__PURE__ */ Ft(r) && !/* @__PURE__ */ Ft(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ge(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Ft(t) ? t : a
    );
    return t === /* @__PURE__ */ je(a) && l && (o ? Et(i, r) && di(t, "set", n, i) : di(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ge(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && di(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!xn(n) || !wf.has(n)) && Pt(t, "has", n), i;
  }
  ownKeys(t) {
    return Pt(
      t,
      "iterate",
      _e(t) ? "length" : ma
    ), Reflect.ownKeys(t);
  }
}
class uv extends Cf {
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
const dv = /* @__PURE__ */ new Sf(), fv = /* @__PURE__ */ new uv(), hv = /* @__PURE__ */ new Sf(!0);
const Jl = (e) => e, vs = (e) => Reflect.getPrototypeOf(e);
function pv(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ je(a), s = Mi(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? Jl : t ? Qa : Ln;
    return !t && Pt(
      r,
      "iterate",
      l ? Zl : ma
    ), ft(
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
function gs(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function vv(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ je(r), o = /* @__PURE__ */ je(a);
      e || (Et(a, o) && Pt(s, "get", a), Pt(s, "get", o));
      const { has: l } = vs(s), d = t ? Jl : e ? Qa : Ln;
      if (l.call(s, a))
        return d(r.get(a));
      if (l.call(s, o))
        return d(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Pt(/* @__PURE__ */ je(a), "iterate", ma), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ je(r), o = /* @__PURE__ */ je(a);
      return e || (Et(a, o) && Pt(s, "has", a), Pt(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ je(o), d = t ? Jl : e ? Qa : Ln;
      return !e && Pt(l, "iterate", ma), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return ft(
    n,
    e ? {
      add: gs("add"),
      set: gs("set"),
      delete: gs("delete"),
      clear: gs("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ je(this), s = vs(r), o = /* @__PURE__ */ je(a), l = !t && !/* @__PURE__ */ mn(a) && !/* @__PURE__ */ wi(a) ? o : a;
        return s.has.call(r, l) || Et(a, l) && s.has.call(r, a) || Et(o, l) && s.has.call(r, o) || (r.add(l), di(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ mn(r) && !/* @__PURE__ */ wi(r) && (r = /* @__PURE__ */ je(r));
        const s = /* @__PURE__ */ je(this), { has: o, get: l } = vs(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ je(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? Et(r, u) && di(s, "set", a, r) : di(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ je(this), { has: s, get: o } = vs(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ je(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && di(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ je(this), r = a.size !== 0, s = a.clear();
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
    n[a] = pv(a, e, t);
  }), n;
}
function Pc(e, t) {
  const n = vv(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ge(n, a) && a in i ? n : i,
    a,
    r
  );
}
const gv = {
  get: /* @__PURE__ */ Pc(!1, !1)
}, mv = {
  get: /* @__PURE__ */ Pc(!1, !0)
}, bv = {
  get: /* @__PURE__ */ Pc(!0, !1)
};
const Ef = /* @__PURE__ */ new WeakMap(), Tf = /* @__PURE__ */ new WeakMap(), Af = /* @__PURE__ */ new WeakMap(), yv = /* @__PURE__ */ new WeakMap();
function _v(e) {
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
function It(e) {
  return /* @__PURE__ */ wi(e) ? e : Dc(
    e,
    !1,
    dv,
    gv,
    Ef
  );
}
// @__NO_SIDE_EFFECTS__
function wv(e) {
  return Dc(
    e,
    !1,
    hv,
    mv,
    Tf
  );
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  return Dc(
    e,
    !0,
    fv,
    bv,
    Af
  );
}
function Dc(e, t, n, i, a) {
  if (!Ke(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = _v(jp(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ba(e) {
  return /* @__PURE__ */ wi(e) ? /* @__PURE__ */ ba(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function wi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Mc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ je(t) : e;
}
function Cv(e) {
  return !Ge(e, "__v_skip") && Object.isExtensible(e) && cf(e, "__v_skip", !0), e;
}
const Ln = (e) => Ke(e) ? /* @__PURE__ */ It(e) : e, Qa = (e) => Ke(e) ? /* @__PURE__ */ Vr(e) : e;
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function st(e) {
  return Of(e, !1);
}
// @__NO_SIDE_EFFECTS__
function kf(e) {
  return Of(e, !0);
}
function Of(e, t) {
  return /* @__PURE__ */ Ft(e) ? e : new Sv(e, t);
}
class Sv {
  constructor(t, n) {
    this.dep = new Ho(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ je(t), this._value = n ? t : Ln(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ mn(t) || /* @__PURE__ */ wi(t);
    t = i ? t : /* @__PURE__ */ je(t), Et(t, n) && (this._rawValue = t, this._value = i ? t : Ln(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Ft(e) ? e.value : e;
}
function vi(e) {
  return xe(e) ? e() : g(e);
}
const Ev = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Ft(a) && !/* @__PURE__ */ Ft(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Nf(e) {
  return /* @__PURE__ */ ba(e) ? e : new Proxy(e, Ev);
}
class Tv {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ho(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Av(e) {
  return new Tv(e);
}
class kv {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ho(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Qe !== this)
      return vf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return bf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ov(e, t, n = !1) {
  let i, a;
  return xe(e) ? i = e : (i = e.get, a = e.set), new kv(i, a, n);
}
const ms = {}, Ds = /* @__PURE__ */ new WeakMap();
let la;
function Nv(e, t = !1, n = la) {
  if (n) {
    let i = Ds.get(n);
    i || Ds.set(n, i = []), i.push(e);
  }
}
function xv(e, t, n = Be) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = ($) => a ? $ : /* @__PURE__ */ mn($) || a === !1 || a === 0 ? fi($, 1) : fi($);
  let u, h, _, E, N = !1, A = !1;
  if (/* @__PURE__ */ Ft(e) ? (h = () => e.value, N = /* @__PURE__ */ mn(e)) : /* @__PURE__ */ ba(e) ? (h = () => d(e), N = !0) : _e(e) ? (A = !0, N = e.some(($) => /* @__PURE__ */ ba($) || /* @__PURE__ */ mn($)), h = () => e.map(($) => {
    if (/* @__PURE__ */ Ft($))
      return $.value;
    if (/* @__PURE__ */ ba($))
      return d($);
    if (xe($))
      return l ? l($, 2) : $();
  })) : xe(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (_) {
      yi();
      try {
        _();
      } finally {
        _i();
      }
    }
    const $ = la;
    la = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      la = $;
    }
  } : h = gn, t && a) {
    const $ = h, le = a === !0 ? 1 / 0 : a;
    h = () => fi($(), le);
  }
  const O = iv(), I = () => {
    u.stop(), O && O.active && Nc(O.effects, u);
  };
  if (r && t) {
    const $ = t;
    t = (...le) => {
      const ue = $(...le);
      return I(), ue;
    };
  }
  let M = A ? new Array(e.length).fill(ms) : ms;
  const K = ($) => {
    if (!(!(u.flags & 1) || !u.dirty && !$))
      if (t) {
        const le = u.run();
        if ($ || a || N || (A ? le.some((ue, B) => Et(ue, M[B])) : Et(le, M))) {
          _ && _();
          const ue = la;
          la = u;
          try {
            const B = [
              le,
              // pass undefined as the old value when it's changed for the first time
              M === ms ? void 0 : A && M[0] === ms ? [] : M,
              E
            ];
            M = le, l ? l(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            la = ue;
          }
        }
      } else
        u.run();
  };
  return o && o(K), u = new hf(h), u.scheduler = s ? () => s(K, !1) : K, E = ($) => Nv($, !1, u), _ = u.onStop = () => {
    const $ = Ds.get(u);
    if ($) {
      if (l)
        l($, 4);
      else
        for (const le of $) le();
      Ds.delete(u);
    }
  }, t ? i ? K(!0) : M = u.run() : s ? s(K.bind(null, !0), !0) : u.run(), I.pause = u.pause.bind(u), I.resume = u.resume.bind(u), I.stop = I, I;
}
function fi(e, t = 1 / 0, n) {
  if (t <= 0 || !Ke(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ft(e))
    fi(e.value, t, n);
  else if (_e(e))
    for (let i = 0; i < e.length; i++)
      fi(e[i], t, n);
  else if (_a(e) || Mi(e))
    e.forEach((i) => {
      fi(i, t, n);
    });
  else if (lf(e)) {
    for (const i in e)
      fi(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && fi(e[i], t, n);
  }
  return e;
}
function os(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Vo(a, t, n);
  }
}
function bn(e, t, n, i) {
  if (xe(e)) {
    const a = os(e, t, n, i);
    return a && sf(a) && a.catch((r) => {
      Vo(r, t, n);
    }), a;
  }
  if (_e(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(bn(e[r], t, n, i));
    return a;
  }
}
function Vo(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Be;
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
      yi(), os(r, null, 10, [
        e,
        l,
        d
      ]), _i();
      return;
    }
  }
  Lv(e, n, a, i, s);
}
function Lv(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Vt = [];
let jn = -1;
const Ka = [];
let Pi = null, Ha = 0;
const xf = /* @__PURE__ */ Promise.resolve();
let Ms = null;
function gi(e) {
  const t = Ms || xf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rv(e) {
  let t = jn + 1, n = Vt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Vt[i], r = Gr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function $c(e) {
  if (!(e.flags & 1)) {
    const t = Gr(e), n = Vt[Vt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Gr(n) ? Vt.push(e) : Vt.splice(Rv(t), 0, e), e.flags |= 1, Lf();
  }
}
function Lf() {
  Ms || (Ms = xf.then(Pf));
}
function Rf(e) {
  if (!_e(e))
    Pi && e.id === -1 ? Pi.splice(Ha + 1, 0, e) : e.flags & 1 || (Ka.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ka.push(e[t]);
  Lf();
}
function mu(e, t, n = jn + 1) {
  for (; n < Vt.length; n++) {
    const i = Vt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Vt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function If(e) {
  if (Ka.length) {
    const t = [...new Set(Ka)].sort(
      (n, i) => Gr(n) - Gr(i)
    );
    if (Ka.length = 0, Pi) {
      for (let n = 0; n < t.length; n++)
        Pi.push(t[n]);
      return;
    }
    for (Pi = t, Ha = 0; Ha < Pi.length; Ha++) {
      const n = Pi[Ha];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pi = null, Ha = 0;
  }
}
const Gr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pf(e) {
  try {
    for (jn = 0; jn < Vt.length; jn++) {
      const t = Vt[jn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), os(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jn < Vt.length; jn++) {
      const t = Vt[jn];
      t && (t.flags &= -2);
    }
    jn = -1, Vt.length = 0, If(), Ms = null, (Vt.length || Ka.length) && Pf();
  }
}
let At = null, Go = null;
function $s(e) {
  const t = At;
  return At = e, Go = e && e.type.__scopeId || null, t;
}
function Iv(e) {
  Go = e;
}
function Pv() {
  Go = null;
}
const Dv = (e) => Te;
function Te(e, t = At, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Hs(-1);
    const r = $s(t), s = mi.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = mi.length; l > s; l--) Vc();
      $s(r), i._d && Hs(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function qe(e, t) {
  if (At === null)
    return e;
  const n = Zo(At), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = Be] = t[a];
    r && (xe(r) && (r = {
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
function na(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (yi(), bn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), _i());
  }
}
function hn(e, t) {
  if (Mt) {
    let n = Mt.provides;
    const i = Mt.parent && Mt.parent.provides;
    i === n && (n = Mt.provides = Object.create(i)), n[e] = t;
  }
}
function Dt(e, t, n = !1) {
  const i = Ca();
  if (i || qa) {
    let a = qa ? qa._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && xe(t) ? t.call(i && i.proxy) : t;
  }
}
const Mv = /* @__PURE__ */ Symbol.for("v-scx"), $v = () => Dt(Mv);
function Fv(e, t) {
  return Ko(e, null, t);
}
function zv(e, t) {
  return Ko(
    e,
    null,
    { flush: "sync" }
  );
}
function Zt(e, t, n) {
  return Ko(e, t, n);
}
function Ko(e, t, n = Be) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = ft({}, n), l = t && i || !t && r !== "post";
  let d;
  if (Zr) {
    if (r === "sync") {
      const E = $v();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = gn, E.resume = gn, E.pause = gn, E;
    }
  }
  const u = Mt;
  o.call = (E, N, A) => bn(E, u, N, A);
  let h = !1;
  r === "post" ? o.scheduler = (E) => {
    jt(E, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (E, N) => {
    N ? E() : $c(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const _ = xv(e, t, o);
  return Zr && (d ? d.push(_) : l && _()), _;
}
function Uv(e, t, n) {
  const i = this.proxy, a = et(e) ? e.includes(".") ? Df(i, e) : () => i[e] : e.bind(i, i);
  let r;
  xe(t) ? r = t : (r = t.handler, n = t);
  const s = us(this), o = Ko(a, r.bind(i), n);
  return s(), o;
}
function Df(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const xi = /* @__PURE__ */ new WeakMap(), Mf = /* @__PURE__ */ Symbol("_vte"), Wo = (e) => e.__isTeleport, ua = (e) => e && (e.disabled || e.disabled === ""), Bv = (e) => e && (e.defer || e.defer === ""), bu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, yu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ql = (e, t) => {
  const n = e && e.to;
  return et(n) ? t ? t(n) : null : n;
}, Hv = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: _,
      o: { insert: E, querySelector: N, createText: A, createComment: O, parentNode: I }
    } = d, M = ua(t.props);
    let { dynamicChildren: K } = t;
    const $ = (B, j, Z) => {
      B.shapeFlag & 16 && u(
        B.children,
        j,
        Z,
        a,
        r,
        s,
        o,
        l
      );
    }, le = (B = t) => {
      const j = ua(B.props), Z = B.target = Ql(B.props, N), se = ec(Z, B, A, E);
      Z && (s !== "svg" && bu(Z) ? s = "svg" : s !== "mathml" && yu(Z) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Z), j || ($(B, Z, se), _r(B, !1)));
    }, ue = (B) => {
      const j = () => {
        if (xi.get(B) === j) {
          if (xi.delete(B), ua(B.props)) {
            const Z = I(B.el) || n;
            $(B, Z, B.anchor), _r(B, !0);
          }
          le(B);
        }
      };
      xi.set(B, j), jt(j, r);
    };
    if (e == null) {
      const B = t.el = A(""), j = t.anchor = A("");
      if (E(B, n, i), E(j, n, i), Bv(t.props) || r && r.pendingBranch) {
        ue(t);
        return;
      }
      M && ($(t, n, j), _r(t, !0)), le();
    } else {
      t.el = e.el;
      const B = t.anchor = e.anchor, j = xi.get(e);
      if (j) {
        j.flags |= 8, xi.delete(e), ue(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Z = t.target = e.target, se = t.targetAnchor = e.targetAnchor, de = ua(e.props), J = de ? n : Z, ne = de ? B : se;
      if (s === "svg" || bu(Z) ? s = "svg" : (s === "mathml" || yu(Z)) && (s = "mathml"), K ? (_(
        e.dynamicChildren,
        K,
        J,
        a,
        r,
        s,
        o
      ), jc(e, t, !0)) : l || h(
        e,
        t,
        J,
        ne,
        a,
        r,
        s,
        o,
        !1
      ), M)
        de ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : bs(
          t,
          n,
          B,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const P = Ql(t.props, N);
        P && (t.target = P, bs(
          t,
          P,
          null,
          d,
          0
        ));
      } else de && bs(
        t,
        Z,
        se,
        d,
        1
      );
      _r(t, M);
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
    } = e, E = ua(_), N = r || !E, A = xi.get(e);
    if (A && (A.flags |= 8, xi.delete(e)), h && (a(d), a(u)), r && a(l), !A && (E || h) && s & 16)
      for (let O = 0; O < o.length; O++) {
        const I = o[O];
        i(
          I,
          t,
          n,
          N,
          !!I.dynamicChildren
        );
      }
  },
  move: bs,
  hydrate: jv
};
function bs(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: d, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !xi.has(e) && (!h || ua(u)) && l & 16)
    for (let _ = 0; _ < d.length; _++)
      a(
        d[_],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function jv(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: d, createText: u }
}, h) {
  function _(O, I) {
    let M = I;
    for (; M; ) {
      if (M && M.nodeType === 8) {
        if (M.data === "teleport start anchor")
          t.targetStart = M;
        else if (M.data === "teleport anchor") {
          t.targetAnchor = M, O._lpa = t.targetAnchor && s(t.targetAnchor);
          break;
        }
      }
      M = s(M);
    }
  }
  function E(O, I) {
    I.anchor = h(
      s(O),
      I,
      o(O),
      n,
      i,
      a,
      r
    );
  }
  const N = t.target = Ql(
    t.props,
    l
  ), A = ua(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), _(N, O), t.targetAnchor || ec(
      N,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === N ? e : null
    )) : (t.anchor = s(e), _(N, O), t.targetAnchor || ec(N, t, u, d), h(
      O && s(O),
      t,
      N,
      n,
      i,
      a,
      r
    ))), _r(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const $f = Hv;
function _r(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function ec(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Mf] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const pn = /* @__PURE__ */ Symbol("_leaveCb"), dr = /* @__PURE__ */ Symbol("_enterCb");
function Vv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ji(() => {
    e.isMounted = !0;
  }), er(() => {
    e.isUnmounting = !0;
  }), e;
}
const cn = [Function, Array], Ff = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: cn,
  onEnter: cn,
  onAfterEnter: cn,
  onEnterCancelled: cn,
  // leave
  onBeforeLeave: cn,
  onLeave: cn,
  onAfterLeave: cn,
  onLeaveCancelled: cn,
  // appear
  onBeforeAppear: cn,
  onAppear: cn,
  onAfterAppear: cn,
  onAppearCancelled: cn
}, zf = (e) => {
  const t = e.subTree;
  return t.component ? zf(t.component) : t;
}, Gv = {
  name: "BaseTransition",
  props: Ff,
  setup(e, { slots: t }) {
    const n = Ca(), i = Vv();
    return () => {
      const a = t.default && Hf(t.default(), !0), r = a && a.length ? Uf(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? U() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ je(e), { mode: o } = s;
      if (i.isLeaving)
        return gl(r);
      const l = Fs(r);
      if (!l)
        return gl(r);
      let d = tc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== Tt && Kr(l, d);
      let u = n.subTree && Fs(n.subTree);
      if (u && u.type !== Tt && !da(u, l) && zf(n).type !== Tt) {
        let h = tc(
          u,
          s,
          i,
          n
        );
        if (Kr(u, h), o === "out-in" && l.type !== Tt)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, gl(r);
        o === "in-out" && l.type !== Tt ? h.delayLeave = (_, E, N) => {
          const A = Bf(
            i,
            u
          );
          A[String(u.key)] = u, _[pn] = () => {
            E(), _[pn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            N(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Uf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Tt) {
        t = n;
        break;
      }
  }
  return t;
}
const Kv = Gv;
function Bf(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function tc(e, t, n, i, a) {
  const {
    appear: r,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: _,
    onLeave: E,
    onAfterLeave: N,
    onLeaveCancelled: A,
    onBeforeAppear: O,
    onAppear: I,
    onAfterAppear: M,
    onAppearCancelled: K
  } = t, $ = String(e.key), le = Bf(n, e), ue = (Z, se) => {
    Z && bn(
      Z,
      i,
      9,
      se
    );
  }, B = (Z, se) => {
    const de = se[1];
    ue(Z, se), _e(Z) ? Z.every((J) => J.length <= 1) && de() : Z.length <= 1 && de();
  }, j = {
    mode: s,
    persisted: o,
    beforeEnter(Z) {
      let se = l;
      if (!n.isMounted)
        if (r)
          se = O || l;
        else
          return;
      Z[pn] && Z[pn](
        !0
        /* cancelled */
      );
      const de = le[$];
      de && da(e, de) && de.el[pn] && de.el[pn](), ue(se, [Z]);
    },
    enter(Z) {
      if (le[$] === e) return;
      let se = d, de = u, J = h;
      if (!n.isMounted)
        if (r)
          se = I || d, de = M || u, J = K || h;
        else
          return;
      let ne = !1;
      Z[dr] = (D) => {
        ne || (ne = !0, D ? ue(J, [Z]) : ue(de, [Z]), j.delayedLeave && j.delayedLeave(), Z[dr] = void 0);
      };
      const P = Z[dr].bind(null, !1);
      se ? B(se, [Z, P]) : P();
    },
    leave(Z, se) {
      const de = String(e.key);
      if (Z[dr] && Z[dr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      ue(_, [Z]);
      let J = !1;
      Z[pn] = (P) => {
        J || (J = !0, se(), P ? ue(A, [Z]) : ue(N, [Z]), Z[pn] = void 0, le[de] === e && delete le[de]);
      };
      const ne = Z[pn].bind(null, !1);
      le[de] = e, E ? B(E, [Z, ne]) : ne();
    },
    clone(Z) {
      const se = tc(
        Z,
        t,
        n,
        i,
        a
      );
      return a && a(se), se;
    }
  };
  return j;
}
function gl(e) {
  if (qo(e))
    return e = Bi(e), e.children = null, e;
}
function Fs(e) {
  if (!qo(e))
    return Wo(e.type) && e.children ? Uf(e.children) : e;
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
function Kr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Kr(
      Wo(n.type) && Fs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Hf(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === ce ? (s.patchFlag & 128 && a++, i = i.concat(
      Hf(s.children, t, o)
    )) : (t || s.type !== Tt) && i.push(o != null ? Bi(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function kt(e, t) {
  return xe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ft({ name: e.name }, t, { setup: e })
  ) : e;
}
function jf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Wv(e) {
  const t = Ca(), n = /* @__PURE__ */ kf(null);
  if (t) {
    const a = t.refs === Be ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function _u(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const zs = /* @__PURE__ */ new WeakMap();
function Nr(e, t, n, i, a = !1) {
  if (_e(e)) {
    e.forEach(
      (A, O) => Nr(
        A,
        t && (_e(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Wa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Nr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Zo(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === Be ? o.refs = {} : o.refs, h = o.setupState, _ = /* @__PURE__ */ je(h), E = h === Be ? rf : (A) => _u(u, A) ? !1 : Ge(_, A), N = (A, O) => !(O && _u(u, O));
  if (d != null && d !== l) {
    if (wu(t), et(d))
      u[d] = null, E(d) && (h[d] = null);
    else if (/* @__PURE__ */ Ft(d)) {
      const A = t;
      N(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (xe(l))
    os(l, o, 12, [s, u]);
  else {
    const A = et(l), O = /* @__PURE__ */ Ft(l);
    if (A || O) {
      const I = () => {
        if (e.f) {
          const M = A ? E(l) ? h[l] : u[l] : N() || !e.k ? l.value : u[e.k];
          if (a)
            _e(M) && Nc(M, r);
          else if (_e(M))
            M.includes(r) || M.push(r);
          else if (A)
            u[l] = [r], E(l) && (h[l] = u[l]);
          else {
            const K = [r];
            N(l, e.k) && (l.value = K), e.k && (u[e.k] = K);
          }
        } else A ? (u[l] = s, E(l) && (h[l] = s)) : O && (N(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const M = () => {
          I(), zs.delete(e);
        };
        M.id = -1, zs.set(e, M), jt(M, n);
      } else
        wu(e), I();
    }
  }
}
function wu(e) {
  const t = zs.get(e);
  t && (t.flags |= 8, zs.delete(e));
}
Bo().requestIdleCallback;
Bo().cancelIdleCallback;
const Wa = (e) => !!e.type.__asyncLoader, qo = (e) => e.type.__isKeepAlive;
function qv(e, t) {
  Vf(e, "a", t);
}
function Yv(e, t) {
  Vf(e, "da", t);
}
function Vf(e, t, n = Mt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Yo(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      qo(a.parent.vnode) && Xv(i, t, n, a), a = a.parent;
  }
}
function Xv(e, t, n, i) {
  const a = Yo(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  ls(() => {
    Nc(i[t], a);
  }, n);
}
function Yo(e, t, n = Mt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      yi();
      const o = us(n), l = bn(t, n, e, s);
      return o(), _i(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const Ei = (e) => (t, n = Mt) => {
  (!Zr || e === "sp") && Yo(e, (...i) => t(...i), n);
}, Gf = Ei("bm"), ji = Ei("m"), Kf = Ei(
  "bu"
), Zv = Ei("u"), er = Ei(
  "bum"
), ls = Ei("um"), Jv = Ei(
  "sp"
), Qv = Ei("rtg"), eg = Ei("rtc");
function tg(e, t = Mt) {
  Yo("ec", e, t);
}
const Fc = "components", ng = "directives";
function ze(e, t) {
  return Uc(Fc, e, !0, t) || e;
}
const Wf = /* @__PURE__ */ Symbol.for("v-ndc");
function zc(e) {
  return et(e) ? Uc(Fc, e, !1) || e : e || Wf;
}
function Cu(e) {
  return Uc(ng, e);
}
function Uc(e, t, n = !0, i = !1) {
  const a = At || Mt;
  if (a) {
    const r = a.type;
    if (e === Fc) {
      const o = Fg(
        r,
        !1
      );
      if (o && (o === t || o === $t(t) || o === zo($t(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Su(a[e] || r[e], t) || // global registration
      Su(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function Su(e, t) {
  return e && (e[t] || e[$t(t)] || e[zo($t(t))]);
}
function Me(e, t, n, i) {
  let a;
  const r = n, s = _e(e);
  if (s || et(e)) {
    const o = s && /* @__PURE__ */ ba(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ mn(e), d = /* @__PURE__ */ wi(e), e = jo(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? d ? Qa(Ln(e[u])) : Ln(e[u]) : e[u],
        u,
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
      for (let l = 0, d = o.length; l < d; l++) {
        const u = o[l];
        a[l] = t(e[u], u, l, r);
      }
    }
  else
    a = [];
  return a;
}
function Le(e, t, n, i, a, r) {
  if (n == null && (n = {}), At.ce || At.parent && Wa(At.parent) && At.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), b(), $e(
      ce,
      null,
      [ge("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = mi.length;
  b();
  let l;
  try {
    const d = s && qf(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = $e(
      ce,
      {
        key: (u && !xn(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = mi.length; u > o; u--) Vc();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function qf(e) {
  return e.some((t) => qr(t) ? !(t.type === Tt || t.type === ce && !qf(t.children)) : !0) ? e : null;
}
const nc = (e) => e ? gh(e) ? Zo(e) : nc(e.parent) : null, xr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ft(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => nc(e.parent),
    $root: (e) => nc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $c(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gi.bind(e.proxy)),
    $watch: (e) => Uv.bind(e)
  })
), ml = (e, t) => e !== Be && !e.__isScriptSetup && Ge(e, t), ig = {
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
        if (ml(i, t))
          return s[t] = 1, i[t];
        if (a !== Be && Ge(a, t))
          return s[t] = 2, a[t];
        if (Ge(r, t))
          return s[t] = 3, r[t];
        if (n !== Be && Ge(n, t))
          return s[t] = 4, n[t];
        ic && (s[t] = 0);
      }
    }
    const d = xr[t];
    let u, h;
    if (d)
      return t === "$attrs" && Pt(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Be && Ge(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Ge(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return ml(a, t) ? (a[t] = n, !0) : i !== Be && Ge(i, t) ? (i[t] = n, !0) : Ge(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Be && o[0] !== "$" && Ge(e, o) || ml(t, o) || Ge(r, o) || Ge(i, o) || Ge(xr, o) || Ge(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ag() {
  return Yf().slots;
}
function rg() {
  return Yf().attrs;
}
function Yf(e) {
  const t = Ca();
  return t.setupContext || (t.setupContext = bh(t));
}
function Us(e) {
  return _e(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function sg(e, t) {
  return !e || !t ? e || t : _e(e) && _e(t) ? e.concat(t) : ft({}, Us(e), Us(t));
}
let ic = !0;
function og(e) {
  const t = Zf(e), n = e.proxy, i = e.ctx;
  ic = !1, t.beforeCreate && Eu(t.beforeCreate, e, "bc");
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
    beforeUpdate: E,
    updated: N,
    activated: A,
    deactivated: O,
    beforeDestroy: I,
    beforeUnmount: M,
    destroyed: K,
    unmounted: $,
    render: le,
    renderTracked: ue,
    renderTriggered: B,
    errorCaptured: j,
    serverPrefetch: Z,
    // public API
    expose: se,
    inheritAttrs: de,
    // assets
    components: J,
    directives: ne,
    filters: P
  } = t;
  if (d && lg(d, i, null), s)
    for (const ae in s) {
      const ie = s[ae];
      xe(ie) && (i[ae] = ie.bind(n));
    }
  if (a) {
    const ae = a.call(n, n);
    Ke(ae) && (e.data = /* @__PURE__ */ It(ae));
  }
  if (ic = !0, r)
    for (const ae in r) {
      const ie = r[ae], fe = xe(ie) ? ie.bind(n, n) : xe(ie.get) ? ie.get.bind(n, n) : gn, pe = !xe(ie) && xe(ie.set) ? ie.set.bind(n) : gn, Se = Y({
        get: fe,
        set: pe
      });
      Object.defineProperty(i, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (me) => Se.value = me
      });
    }
  if (o)
    for (const ae in o)
      Xf(o[ae], i, n, ae);
  if (l) {
    const ae = xe(l) ? l.call(n) : l;
    Reflect.ownKeys(ae).forEach((ie) => {
      hn(ie, ae[ie]);
    });
  }
  u && Eu(u, e, "c");
  function X(ae, ie) {
    _e(ie) ? ie.forEach((fe) => ae(fe.bind(n))) : ie && ae(ie.bind(n));
  }
  if (X(Gf, h), X(ji, _), X(Kf, E), X(Zv, N), X(qv, A), X(Yv, O), X(tg, j), X(eg, ue), X(Qv, B), X(er, M), X(ls, $), X(Jv, Z), _e(se))
    if (se.length) {
      const ae = e.exposed || (e.exposed = {});
      se.forEach((ie) => {
        Object.defineProperty(ae, ie, {
          get: () => n[ie],
          set: (fe) => n[ie] = fe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  le && e.render === gn && (e.render = le), de != null && (e.inheritAttrs = de), J && (e.components = J), ne && (e.directives = ne), Z && jf(e);
}
function lg(e, t, n = gn) {
  _e(e) && (e = ac(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Ke(a) ? "default" in a ? r = Dt(
      a.from || i,
      a.default,
      !0
    ) : r = Dt(a.from || i) : r = Dt(a), /* @__PURE__ */ Ft(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function Eu(e, t, n) {
  bn(
    _e(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Xf(e, t, n, i) {
  let a = i.includes(".") ? Df(n, i) : () => n[i];
  if (et(e)) {
    const r = t[e];
    xe(r) && Zt(a, r);
  } else if (xe(e))
    Zt(a, e.bind(n));
  else if (Ke(e))
    if (_e(e))
      e.forEach((r) => Xf(r, t, n, i));
    else {
      const r = xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      xe(r) && Zt(a, r, e);
    }
}
function Zf(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => Bs(l, d, s, !0)
  ), Bs(l, t, s)), Ke(t) && r.set(t, l), l;
}
function Bs(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Bs(e, r, n, !0), a && a.forEach(
    (s) => Bs(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = cg[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const cg = {
  data: Tu,
  props: Au,
  emits: Au,
  // objects
  methods: wr,
  computed: wr,
  // lifecycle
  beforeCreate: Ht,
  created: Ht,
  beforeMount: Ht,
  mounted: Ht,
  beforeUpdate: Ht,
  updated: Ht,
  beforeDestroy: Ht,
  beforeUnmount: Ht,
  destroyed: Ht,
  unmounted: Ht,
  activated: Ht,
  deactivated: Ht,
  errorCaptured: Ht,
  serverPrefetch: Ht,
  // assets
  components: wr,
  directives: wr,
  // watch
  watch: dg,
  // provide / inject
  provide: Tu,
  inject: ug
};
function Tu(e, t) {
  return t ? e ? function() {
    return ft(
      xe(e) ? e.call(this, this) : e,
      xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ug(e, t) {
  return wr(ac(e), ac(t));
}
function ac(e) {
  if (_e(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ht(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function wr(e, t) {
  return e ? ft(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Au(e, t) {
  return e ? _e(e) && _e(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ft(
    /* @__PURE__ */ Object.create(null),
    Us(e),
    Us(t ?? {})
  ) : t;
}
function dg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ft(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Ht(e[i], t[i]);
  return n;
}
function Jf() {
  return {
    app: null,
    config: {
      isNativeTag: rf,
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
let fg = 0;
function hg(e, t) {
  return function(i, a = null) {
    xe(i) || (i = ft({}, i)), a != null && !Ke(a) && (a = null);
    const r = Jf(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: fg++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Ug,
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
          const E = d._ceVNode || ge(i, a);
          return E.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(E, u, _), l = !0, d._container = u, u.__vue_app__ = d, Zo(E.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (bn(
          o,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = qa;
        qa = d;
        try {
          return u();
        } finally {
          qa = h;
        }
      }
    };
    return d;
  };
}
let qa = null;
function Qf(e, t, n = Be) {
  const i = Ca(), a = $t(t), r = Si(t), s = eh(e, a), o = Av((l, d) => {
    let u, h = Be, _;
    return zv(() => {
      const E = e[a];
      Et(u, E) && (u = E, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const N = n.set ? n.set(E) : E;
        if (!Et(N, u) && !(h !== Be && Et(E, h)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (u = E, d()), i.emit(`update:${t}`, N), Et(E, h) && (Et(E, N) && !Et(N, _) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && h !== Be && !Et(N, u)) && d(), h = E, _ = N;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || Be : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const eh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${$t(t)}Modifiers`] || e[`${Si(t)}Modifiers`];
function pg(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Be;
  let a = n;
  const r = t.startsWith("update:"), s = r && eh(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => et(u) ? u.trim() : u)), s.number && (a = a.map(Uo)));
  let o, l = i[o = dl(t)] || // also try camelCase event handler (#2249)
  i[o = dl($t(t))];
  !l && r && (l = i[o = dl(Si(t))]), l && bn(
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
    e.emitted[o] = !0, bn(
      d,
      e,
      6,
      a
    );
  }
}
const vg = /* @__PURE__ */ new WeakMap();
function th(e, t, n = !1) {
  const i = n ? vg : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!xe(e)) {
    const l = (d) => {
      const u = th(d, t, !0);
      u && (o = !0, ft(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Ke(e) && i.set(e, null), null) : (_e(r) ? r.forEach((l) => s[l] = null) : ft(s, r), Ke(e) && i.set(e, s), s);
}
function Xo(e, t) {
  return !e || !Mo(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ge(e, t[0].toLowerCase() + t.slice(1)) || Ge(e, Si(t)) || Ge(e, t));
}
function ku(e) {
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
    setupState: E,
    ctx: N,
    inheritAttrs: A
  } = e, O = $s(e);
  let I, M;
  try {
    if (n.shapeFlag & 4) {
      const $ = a || i, le = $;
      I = Wn(
        d.call(
          le,
          $,
          u,
          h,
          E,
          _,
          N
        )
      ), M = o;
    } else {
      const $ = t;
      I = Wn(
        $.length > 1 ? $(
          h,
          { attrs: o, slots: s, emit: l }
        ) : $(
          h,
          null
        )
      ), M = t.props ? o : gg(o);
    }
  } catch ($) {
    mi.length = 0, Vo($, e, 1), I = ge(Tt);
  }
  let K = I;
  if (M && A !== !1) {
    const $ = Object.keys(M), { shapeFlag: le } = K;
    $.length && le & 7 && (r && $.some($o) && (M = mg(
      M,
      r
    )), K = Bi(K, M, !1, !0));
  }
  if (n.dirs && (K = Bi(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const $ = Wo(K.type) && Fs(K) || K;
    Kr($, n.transition);
  }
  return I = K, $s(O), I;
}
const gg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Mo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, mg = (e, t) => {
  const n = {};
  for (const i in e)
    (!$o(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function bg(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Ou(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const _ = u[h];
        if (nh(s, i, _) && !Xo(d, _))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? Ou(i, s, d) : !0 : !!s;
  return !1;
}
function Ou(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (nh(t, e, r) && !Xo(n, r))
      return !0;
  }
  return !1;
}
function nh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Ke(i) && Ke(a) ? !Ui(i, a) : i !== a;
}
function yg({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const ih = {}, ah = () => Object.create(ih), rh = (e) => Object.getPrototypeOf(e) === ih;
function _g(e, t, n, i = !1) {
  const a = {}, r = ah();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), sh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ wv(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function wg(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ je(a), [l] = e.propsOptions;
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
        if (Xo(e.emitsOptions, _))
          continue;
        const E = t[_];
        if (l)
          if (Ge(r, _))
            E !== r[_] && (r[_] = E, d = !0);
          else {
            const N = $t(_);
            a[N] = rc(
              l,
              o,
              N,
              E,
              e,
              !1
            );
          }
        else
          E !== r[_] && (r[_] = E, d = !0);
      }
    }
  } else {
    sh(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !Ge(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Si(h)) === h || !Ge(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = rc(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !Ge(t, h)) && (delete r[h], d = !0);
  }
  d && di(e.attrs, "set", "");
}
function sh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Ar(l))
        continue;
      const d = t[l];
      let u;
      a && Ge(a, u = $t(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : Xo(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ je(n), d = o || Be;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = rc(
        a,
        l,
        h,
        d[h],
        e,
        !Ge(d, h)
      );
    }
  }
  return s;
}
function rc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Ge(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && xe(l)) {
        const { propsDefaults: d } = a;
        if (n in d)
          i = d[n];
        else {
          const u = us(a);
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
const Cg = /* @__PURE__ */ new WeakMap();
function oh(e, t, n = !1) {
  const i = n ? Cg : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!xe(e)) {
    const u = (h) => {
      l = !0;
      const [_, E] = oh(h, t, !0);
      ft(s, _), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Ke(e) && i.set(e, Ga), Ga;
  if (_e(r))
    for (let u = 0; u < r.length; u++) {
      const h = $t(r[u]);
      Nu(h) && (s[h] = Be);
    }
  else if (r)
    for (const u in r) {
      const h = $t(u);
      if (Nu(h)) {
        const _ = r[u], E = s[h] = _e(_) || xe(_) ? { type: _ } : ft({}, _), N = E.type;
        let A = !1, O = !0;
        if (_e(N))
          for (let I = 0; I < N.length; ++I) {
            const M = N[I], K = xe(M) && M.name;
            if (K === "Boolean") {
              A = !0;
              break;
            } else K === "String" && (O = !1);
          }
        else
          A = xe(N) && N.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = A, E[
          1
          /* shouldCastTrue */
        ] = O, (A || Ge(E, "default")) && o.push(h);
      }
    }
  const d = [s, o];
  return Ke(e) && i.set(e, d), d;
}
function Nu(e) {
  return e[0] !== "$" && !Ar(e);
}
const Bc = (e) => e === "_" || e === "_ctx" || e === "$stable", Hc = (e) => _e(e) ? e.map(Wn) : [Wn(e)], Sg = (e, t, n) => {
  if (t._n)
    return t;
  const i = Te((...a) => Hc(t(...a)), n);
  return i._c = !1, i;
}, lh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Bc(a)) continue;
    const r = e[a];
    if (xe(r))
      t[a] = Sg(a, r, i);
    else if (r != null) {
      const s = Hc(r);
      t[a] = () => s;
    }
  }
}, ch = (e, t) => {
  const n = Hc(t);
  e.slots.default = () => n;
}, uh = (e, t, n) => {
  for (const i in t)
    (n || !Bc(i)) && (e[i] = t[i]);
}, Eg = (e, t, n) => {
  const i = e.slots = ah();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (uh(i, t, n), n && cf(i, "_", a, !0)) : lh(t, i);
  } else t && ch(e, t);
}, Tg = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Be;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : uh(a, t, n) : (r = !t.$stable, lh(t, a)), s = t;
  } else t && (ch(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !Bc(o) && s[o] == null && delete a[o];
}, jt = xg;
function Ag(e) {
  return kg(e);
}
function kg(e, t) {
  const n = Bo();
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
    setScopeId: E = gn,
    insertStaticContent: N
  } = e, A = (v, w, k, L = null, x = null, F = null, W = void 0, G = null, ee = !!w.dynamicChildren) => {
    if (v === w)
      return;
    v && !da(v, w) && (L = pt(v), me(v, x, F, !0), v = null), w.patchFlag === -2 && (ee = !1, w.dynamicChildren = null);
    const { type: V, ref: be, shapeFlag: re } = w;
    switch (V) {
      case cs:
        O(v, w, k, L);
        break;
      case Tt:
        I(v, w, k, L);
        break;
      case xs:
        v == null && M(w, k, L, W);
        break;
      case ce:
        J(
          v,
          w,
          k,
          L,
          x,
          F,
          W,
          G,
          ee
        );
        break;
      default:
        re & 1 ? le(
          v,
          w,
          k,
          L,
          x,
          F,
          W,
          G,
          ee
        ) : re & 6 ? ne(
          v,
          w,
          k,
          L,
          x,
          F,
          W,
          G,
          ee
        ) : (re & 64 || re & 128) && V.process(
          v,
          w,
          k,
          L,
          x,
          F,
          W,
          G,
          ee,
          yn
        );
    }
    be != null && x ? Nr(be, v && v.ref, F, w || v, !w) : be == null && v && v.ref != null && Nr(v.ref, null, F, v, !0);
  }, O = (v, w, k, L) => {
    if (v == null)
      i(
        w.el = o(w.children),
        k,
        L
      );
    else {
      const x = w.el = v.el;
      w.children !== v.children && d(x, w.children);
    }
  }, I = (v, w, k, L) => {
    v == null ? i(
      w.el = l(w.children || ""),
      k,
      L
    ) : w.el = v.el;
  }, M = (v, w, k, L) => {
    [v.el, v.anchor] = N(
      v.children,
      w,
      k,
      L,
      v.el,
      v.anchor
    );
  }, K = ({ el: v, anchor: w }, k, L) => {
    let x;
    for (; v && v !== w; )
      x = _(v), i(v, k, L), v = x;
    i(w, k, L);
  }, $ = ({ el: v, anchor: w }) => {
    let k;
    for (; v && v !== w; )
      k = _(v), a(v), v = k;
    a(w);
  }, le = (v, w, k, L, x, F, W, G, ee) => {
    if (w.type === "svg" ? W = "svg" : w.type === "math" && (W = "mathml"), v == null)
      ue(
        w,
        k,
        L,
        x,
        F,
        W,
        G,
        ee
      );
    else {
      const V = v.el && v.el._isVueCE ? v.el : null;
      try {
        V && V._beginPatch(), Z(
          v,
          w,
          x,
          F,
          W,
          G,
          ee
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, ue = (v, w, k, L, x, F, W, G) => {
    let ee, V;
    const { props: be, shapeFlag: re, transition: ve, dirs: we } = v;
    if (ee = v.el = s(
      v.type,
      F,
      be && be.is,
      be
    ), re & 8 ? u(ee, v.children) : re & 16 && j(
      v.children,
      ee,
      null,
      L,
      x,
      bl(v, F),
      W,
      G
    ), we && na(v, null, L, "created"), B(ee, v, v.scopeId, W, L), be) {
      for (const Pe in be)
        Pe !== "value" && !Ar(Pe) && r(ee, Pe, null, be[Pe], F, L);
      "value" in be && r(ee, "value", null, be.value, F), (V = be.onVnodeBeforeMount) && Bn(V, L, v);
    }
    we && na(v, null, L, "beforeMount");
    const Ne = Og(x, ve);
    Ne && ve.beforeEnter(ee), i(ee, w, k), ((V = be && be.onVnodeMounted) || Ne || we) && jt(() => {
      V && Bn(V, L, v), Ne && ve.enter(ee), we && na(v, null, L, "mounted");
    }, x);
  }, B = (v, w, k, L, x) => {
    if (k && E(v, k), L)
      for (let F = 0; F < L.length; F++)
        E(v, L[F]);
    if (x) {
      let F = x.subTree;
      if (w === F || hh(F.type) && (F.ssContent === w || F.ssFallback === w)) {
        const W = x.vnode;
        B(
          v,
          W,
          W.scopeId,
          W.slotScopeIds,
          x.parent
        );
      }
    }
  }, j = (v, w, k, L, x, F, W, G, ee = 0) => {
    for (let V = ee; V < v.length; V++) {
      const be = v[V] = G ? ui(v[V]) : Wn(v[V]);
      A(
        null,
        be,
        w,
        k,
        L,
        x,
        F,
        W,
        G
      );
    }
  }, Z = (v, w, k, L, x, F, W) => {
    const G = w.el = v.el;
    let { patchFlag: ee, dynamicChildren: V, dirs: be } = w;
    ee |= v.patchFlag & 16;
    const re = v.props || Be, ve = w.props || Be;
    let we;
    if (k && ia(k, !1), (we = ve.onVnodeBeforeUpdate) && Bn(we, k, w, v), be && na(w, v, k, "beforeUpdate"), k && ia(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!v.dynamicChildren || v.dynamicChildren.length !== V.length) && (ee = 0, W = !1, V = null), (re.innerHTML && ve.innerHTML == null || re.textContent && ve.textContent == null) && u(G, ""), V ? se(
      v.dynamicChildren,
      V,
      G,
      k,
      L,
      bl(w, x),
      F
    ) : W || ie(
      v,
      w,
      G,
      null,
      k,
      L,
      bl(w, x),
      F,
      !1
    ), ee > 0) {
      if (ee & 16)
        de(G, re, ve, k, x);
      else if (ee & 2 && re.class !== ve.class && r(G, "class", null, ve.class, x), ee & 4 && r(G, "style", re.style, ve.style, x), ee & 8) {
        const Ne = w.dynamicProps;
        for (let Pe = 0; Pe < Ne.length; Pe++) {
          const Re = Ne[Pe], Ze = re[Re], tt = ve[Re];
          (tt !== Ze || Re === "value") && r(G, Re, Ze, tt, x, k);
        }
      }
      ee & 1 && v.children !== w.children && u(G, w.children);
    } else !W && V == null && de(G, re, ve, k, x);
    ((we = ve.onVnodeUpdated) || be) && jt(() => {
      we && Bn(we, k, w, v), be && na(w, v, k, "updated");
    }, L);
  }, se = (v, w, k, L, x, F, W) => {
    for (let G = 0; G < w.length; G++) {
      const ee = v[G], V = w[G], be = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ee.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ee.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !da(ee, V) || // - In the case of a component, it could contain anything.
        ee.shapeFlag & 198) ? h(ee.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        ee,
        V,
        be,
        null,
        L,
        x,
        F,
        W,
        !0
      );
    }
  }, de = (v, w, k, L, x) => {
    if (w !== k) {
      if (w !== Be)
        for (const F in w)
          !Ar(F) && !(F in k) && r(
            v,
            F,
            w[F],
            null,
            x,
            L
          );
      for (const F in k) {
        if (Ar(F)) continue;
        const W = k[F], G = w[F];
        W !== G && F !== "value" && r(v, F, G, W, x, L);
      }
      "value" in k && r(v, "value", w.value, k.value, x);
    }
  }, J = (v, w, k, L, x, F, W, G, ee) => {
    const V = w.el = v ? v.el : o(""), be = w.anchor = v ? v.anchor : o("");
    let { patchFlag: re, dynamicChildren: ve, slotScopeIds: we } = w;
    we && (G = G ? G.concat(we) : we), v == null ? (i(V, k, L), i(be, k, L), j(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      k,
      be,
      x,
      F,
      W,
      G,
      ee
    )) : re > 0 && re & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === ve.length ? (se(
      v.dynamicChildren,
      ve,
      k,
      x,
      F,
      W,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || x && w === x.subTree) && jc(
      v,
      w,
      !0
      /* shallow */
    )) : ie(
      v,
      w,
      k,
      be,
      x,
      F,
      W,
      G,
      ee
    );
  }, ne = (v, w, k, L, x, F, W, G, ee) => {
    w.slotScopeIds = G, v == null ? w.shapeFlag & 512 ? x.ctx.activate(
      w,
      k,
      L,
      W,
      ee
    ) : P(
      w,
      k,
      L,
      x,
      F,
      W,
      ee
    ) : D(v, w, ee);
  }, P = (v, w, k, L, x, F, W) => {
    const G = v.component = Pg(
      v,
      L,
      x
    );
    if (qo(v) && (G.ctx.renderer = yn), Dg(G, !1, W), G.asyncDep) {
      if (x && x.registerDep(G, X, W), !v.el) {
        const ee = G.subTree = ge(Tt);
        I(null, ee, w, k), v.placeholder = ee.el;
      }
    } else
      X(
        G,
        v,
        w,
        k,
        x,
        F,
        W
      );
  }, D = (v, w, k) => {
    const L = w.component = v.component;
    if (bg(v, w, k))
      if (L.asyncDep && !L.asyncResolved) {
        ae(L, w, k);
        return;
      } else
        L.next = w, L.update();
    else
      w.el = v.el, L.vnode = w;
  }, X = (v, w, k, L, x, F, W) => {
    const G = () => {
      if (v.isMounted) {
        let { next: re, bu: ve, u: we, parent: Ne, vnode: Pe } = v;
        {
          const Ot = dh(v);
          if (Ot) {
            re && (re.el = Pe.el, ae(v, re, W)), Ot.asyncDep.then(() => {
              jt(() => {
                v.isUnmounted || V();
              }, x);
            });
            return;
          }
        }
        let Re = re, Ze;
        ia(v, !1), re ? (re.el = Pe.el, ae(v, re, W)) : re = Pe, ve && Ns(ve), (Ze = re.props && re.props.onVnodeBeforeUpdate) && Bn(Ze, Ne, re, Pe), ia(v, !0);
        const tt = ku(v), wt = v.subTree;
        v.subTree = tt, A(
          wt,
          tt,
          // parent may have changed if it's in a teleport
          h(wt.el),
          // anchor may have changed if it's in a fragment
          pt(wt),
          v,
          x,
          F
        ), re.el = tt.el, Re === null && yg(v, tt.el), we && jt(we, x), (Ze = re.props && re.props.onVnodeUpdated) && jt(
          () => Bn(Ze, Ne, re, Pe),
          x
        );
      } else {
        let re;
        const { el: ve, props: we } = w, { bm: Ne, m: Pe, parent: Re, root: Ze, type: tt } = v, wt = Wa(w);
        ia(v, !1), Ne && Ns(Ne), !wt && (re = we && we.onVnodeBeforeMount) && Bn(re, Re, w), ia(v, !0);
        {
          Ze.ce && Ze.ce._hasShadowRoot() && Ze.ce._injectChildStyle(
            tt,
            v.parent ? v.parent.type : void 0
          );
          const Ot = v.subTree = ku(v);
          A(
            null,
            Ot,
            k,
            L,
            v,
            x,
            F
          ), w.el = Ot.el;
        }
        if (Pe && jt(Pe, x), !wt && (re = we && we.onVnodeMounted)) {
          const Ot = w;
          jt(
            () => Bn(re, Re, Ot),
            x
          );
        }
        (w.shapeFlag & 256 || Re && Wa(Re.vnode) && Re.vnode.shapeFlag & 256) && v.a && jt(v.a, x), v.isMounted = !0, w = k = L = null;
      }
    };
    v.scope.on();
    const ee = v.effect = new hf(G);
    v.scope.off();
    const V = v.update = ee.run.bind(ee), be = v.job = ee.runIfDirty.bind(ee);
    be.i = v, be.id = v.uid, ee.scheduler = () => $c(be), ia(v, !0), V();
  }, ae = (v, w, k) => {
    w.component = v;
    const L = v.vnode.props;
    v.vnode = w, v.next = null, wg(v, w.props, L, k), Tg(v, w.children, k), yi(), mu(v), _i();
  }, ie = (v, w, k, L, x, F, W, G, ee = !1) => {
    const V = v && v.children, be = v ? v.shapeFlag : 0, re = w.children, { patchFlag: ve, shapeFlag: we } = w;
    if (ve > 0) {
      if (ve & 128) {
        pe(
          V,
          re,
          k,
          L,
          x,
          F,
          W,
          G,
          ee
        );
        return;
      } else if (ve & 256) {
        fe(
          V,
          re,
          k,
          L,
          x,
          F,
          W,
          G,
          ee
        );
        return;
      }
    }
    we & 8 ? (be & 16 && ot(V, x, F), re !== V && u(k, re)) : be & 16 ? we & 16 ? pe(
      V,
      re,
      k,
      L,
      x,
      F,
      W,
      G,
      ee
    ) : ot(V, x, F, !0) : (be & 8 && u(k, ""), we & 16 && j(
      re,
      k,
      L,
      x,
      F,
      W,
      G,
      ee
    ));
  }, fe = (v, w, k, L, x, F, W, G, ee) => {
    v = v || Ga, w = w || Ga;
    const V = v.length, be = w.length, re = Math.min(V, be);
    let ve;
    for (ve = 0; ve < re; ve++) {
      const we = w[ve] = ee ? ui(w[ve]) : Wn(w[ve]);
      A(
        v[ve],
        we,
        k,
        null,
        x,
        F,
        W,
        G,
        ee
      );
    }
    V > be ? ot(
      v,
      x,
      F,
      !0,
      !1,
      re
    ) : j(
      w,
      k,
      L,
      x,
      F,
      W,
      G,
      ee,
      re
    );
  }, pe = (v, w, k, L, x, F, W, G, ee) => {
    let V = 0;
    const be = w.length;
    let re = v.length - 1, ve = be - 1;
    for (; V <= re && V <= ve; ) {
      const we = v[V], Ne = w[V] = ee ? ui(w[V]) : Wn(w[V]);
      if (da(we, Ne))
        A(
          we,
          Ne,
          k,
          null,
          x,
          F,
          W,
          G,
          ee
        );
      else
        break;
      V++;
    }
    for (; V <= re && V <= ve; ) {
      const we = v[re], Ne = w[ve] = ee ? ui(w[ve]) : Wn(w[ve]);
      if (da(we, Ne))
        A(
          we,
          Ne,
          k,
          null,
          x,
          F,
          W,
          G,
          ee
        );
      else
        break;
      re--, ve--;
    }
    if (V > re) {
      if (V <= ve) {
        const we = ve + 1, Ne = we < be ? w[we].el : L;
        for (; V <= ve; )
          A(
            null,
            w[V] = ee ? ui(w[V]) : Wn(w[V]),
            k,
            Ne,
            x,
            F,
            W,
            G,
            ee
          ), V++;
      }
    } else if (V > ve)
      for (; V <= re; )
        me(v[V], x, F, !0), V++;
    else {
      const we = V, Ne = V, Pe = /* @__PURE__ */ new Map();
      for (V = Ne; V <= ve; V++) {
        const ct = w[V] = ee ? ui(w[V]) : Wn(w[V]);
        ct.key != null && Pe.set(ct.key, V);
      }
      let Re, Ze = 0;
      const tt = ve - Ne + 1;
      let wt = !1, Ot = 0;
      const Bt = new Array(tt);
      for (V = 0; V < tt; V++) Bt[V] = 0;
      for (V = we; V <= re; V++) {
        const ct = v[V];
        if (Ze >= tt) {
          me(ct, x, F, !0);
          continue;
        }
        let vt;
        if (ct.key != null)
          vt = Pe.get(ct.key);
        else
          for (Re = Ne; Re <= ve; Re++)
            if (Bt[Re - Ne] === 0 && da(ct, w[Re])) {
              vt = Re;
              break;
            }
        vt === void 0 ? me(ct, x, F, !0) : (Bt[vt - Ne] = V + 1, vt >= Ot ? Ot = vt : wt = !0, A(
          ct,
          w[vt],
          k,
          null,
          x,
          F,
          W,
          G,
          ee
        ), Ze++);
      }
      const lt = wt ? Ng(Bt) : Ga;
      for (Re = lt.length - 1, V = tt - 1; V >= 0; V--) {
        const ct = Ne + V, vt = w[ct], Ki = w[ct + 1], Rn = ct + 1 < be ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ki.el || fh(Ki)
        ) : L;
        Bt[V] === 0 ? A(
          null,
          vt,
          k,
          Rn,
          x,
          F,
          W,
          G,
          ee
        ) : wt && (Re < 0 || V !== lt[Re] ? Se(vt, k, Rn, 2) : Re--);
      }
    }
  }, Se = (v, w, k, L, x = null) => {
    const { el: F, type: W, transition: G, children: ee, shapeFlag: V } = v;
    if (V & 6) {
      Se(v.component.subTree, w, k, L);
      return;
    }
    if (V & 128) {
      v.suspense.move(w, k, L);
      return;
    }
    if (V & 64) {
      W.move(v, w, k, yn);
      return;
    }
    if (W === ce) {
      i(F, w, k);
      for (let re = 0; re < ee.length; re++)
        Se(ee[re], w, k, L);
      i(v.anchor, w, k);
      return;
    }
    if (W === xs) {
      K(v, w, k);
      return;
    }
    if (L !== 2 && V & 1 && G)
      if (L === 0)
        G.persisted && !F[pn] ? i(F, w, k) : (G.beforeEnter(F), i(F, w, k), jt(() => G.enter(F), x));
      else {
        const { leave: re, delayLeave: ve, afterLeave: we } = G, Ne = () => {
          v.ctx.isUnmounted ? a(F) : i(F, w, k);
        }, Pe = () => {
          const Re = F._isLeaving || !!F[pn];
          F._isLeaving && F[pn](
            !0
            /* cancelled */
          ), G.persisted && !Re ? Ne() : re(F, () => {
            Ne(), we && we();
          });
        };
        ve ? ve(F, Ne, Pe) : Pe();
      }
    else
      i(F, w, k);
  }, me = (v, w, k, L = !1, x = !1) => {
    const {
      type: F,
      props: W,
      ref: G,
      children: ee,
      dynamicChildren: V,
      shapeFlag: be,
      patchFlag: re,
      dirs: ve,
      cacheIndex: we,
      memo: Ne
    } = v;
    if (re === -2 && (x = !1), G != null && (yi(), Nr(G, null, k, v, !0), _i()), we != null && (w.renderCache[we] = void 0), be & 256) {
      w.ctx.deactivate(v);
      return;
    }
    const Pe = be & 1 && ve, Re = !Wa(v);
    let Ze;
    if (Re && (Ze = W && W.onVnodeBeforeUnmount) && Bn(Ze, w, v), be & 6)
      He(v.component, k, L);
    else {
      if (be & 128) {
        v.suspense.unmount(k, L);
        return;
      }
      Pe && na(v, null, w, "beforeUnmount"), be & 64 ? v.type.remove(
        v,
        w,
        k,
        yn,
        L
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ce || re > 0 && re & 64) ? ot(
        V,
        w,
        k,
        !1,
        !0
      ) : (F === ce && re & 384 || !x && be & 16) && ot(ee, w, k), L && Ye(v);
    }
    const tt = Ne != null && we == null;
    (Re && (Ze = W && W.onVnodeUnmounted) || Pe || tt) && jt(() => {
      Ze && Bn(Ze, w, v), Pe && na(v, null, w, "unmounted"), tt && (v.el = null);
    }, k);
  }, Ye = (v) => {
    const { type: w, el: k, anchor: L, transition: x } = v;
    if (w === ce) {
      ke(k, L);
      return;
    }
    if (w === xs) {
      $(v);
      return;
    }
    const F = () => {
      a(k), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (v.shapeFlag & 1 && x && !x.persisted) {
      const { leave: W, delayLeave: G } = x, ee = () => W(k, F);
      G ? G(v.el, F, ee) : ee();
    } else
      F();
  }, ke = (v, w) => {
    let k;
    for (; v !== w; )
      k = _(v), a(v), v = k;
    a(w);
  }, He = (v, w, k) => {
    const { bum: L, scope: x, job: F, subTree: W, um: G, m: ee, a: V } = v;
    xu(ee), xu(V), L && Ns(L), x.stop(), F && (F.flags |= 8, me(W, v, w, k)), G && jt(G, w), jt(() => {
      v.isUnmounted = !0;
    }, w);
  }, ot = (v, w, k, L = !1, x = !1, F = 0) => {
    for (let W = F; W < v.length; W++)
      me(v[W], w, k, L, x);
  }, pt = (v) => {
    if (v.shapeFlag & 6)
      return pt(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const w = _(v.anchor || v.el), k = w && w[Mf];
    return k ? _(k) : w;
  };
  let Ut = !1;
  const it = (v, w, k) => {
    let L;
    v == null ? w._vnode && (me(w._vnode, null, null, !0), L = w._vnode.component) : A(
      w._vnode || null,
      v,
      w,
      null,
      null,
      null,
      k
    ), w._vnode = v, Ut || (Ut = !0, mu(L), If(), Ut = !1);
  }, yn = {
    p: A,
    um: me,
    m: Se,
    r: Ye,
    mt: P,
    mc: j,
    pc: ie,
    pbc: se,
    n: pt,
    o: e
  };
  return {
    render: it,
    hydrate: void 0,
    createApp: hg(it)
  };
}
function bl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ia({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Og(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jc(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (_e(i) && _e(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = ui(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && jc(s, o)), o.type === cs && (o.patchFlag === -1 && (o = a[r] = ui(o)), o.el = s.el), o.type === Tt && !o.el && (o.el = s.el);
    }
}
function Ng(e) {
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
function dh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : dh(t);
}
function xu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function fh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? fh(t.subTree) : null;
}
const hh = (e) => e.__isSuspense;
function xg(e, t) {
  t && t.pendingBranch ? _e(e) ? t.effects.push(...e) : t.effects.push(e) : Rf(e);
}
const ce = /* @__PURE__ */ Symbol.for("v-fgt"), cs = /* @__PURE__ */ Symbol.for("v-txt"), Tt = /* @__PURE__ */ Symbol.for("v-cmt"), xs = /* @__PURE__ */ Symbol.for("v-stc"), mi = [];
let an = null;
function b(e = !1) {
  mi.push(an = e ? null : []);
}
function Vc() {
  mi.pop(), an = mi[mi.length - 1] || null;
}
let Wr = 1;
function Hs(e, t = !1) {
  Wr += e, e < 0 && an && t && (an.hasOnce = !0);
}
function ph(e) {
  return e.dynamicChildren = Wr > 0 ? an || Ga : null, Vc(), Wr > 0 && an && an.push(e), e;
}
function C(e, t, n, i, a, r) {
  return ph(
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
function $e(e, t, n, i, a) {
  return ph(
    ge(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function qr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function da(e, t) {
  return e.type === t.type && e.key === t.key;
}
const vh = ({ key: e }) => e ?? null, Ls = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? et(e) || /* @__PURE__ */ Ft(e) || xe(e) ? { i: At, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === ce ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vh(t),
    ref: t && Ls(t),
    scopeId: Go,
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
    ctx: At
  };
  return o ? (js(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= et(n) ? 8 : 16), Wr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  an && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && an.push(l), l;
}
const ge = Lg;
function Lg(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Wf) && (e = Tt), qr(e)) {
    const o = Bi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && js(o, n), Wr > 0 && !r && an && (o.shapeFlag & 6 ? an[an.indexOf(e)] = o : an.push(o)), o.patchFlag = -2, o;
  }
  if (zg(e) && (e = e.__vccOpts), t) {
    t = Yr(t);
    let { class: o, style: l } = t;
    o && !et(o) && (t.class = Ce(o)), Ke(l) && (/* @__PURE__ */ Mc(l) && !_e(l) && (l = ft({}, l)), t.style = rn(l));
  }
  const s = et(e) ? 1 : hh(e) ? 128 : Wo(e) ? 64 : Ke(e) ? 4 : xe(e) ? 2 : 0;
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
function Yr(e) {
  return e ? /* @__PURE__ */ Mc(e) || rh(e) ? ft({}, e) : e : null;
}
function Bi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? zt(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && vh(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? _e(r) ? r.concat(Ls(t)) : [r, Ls(t)] : Ls(t)
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
    patchFlag: t && e.type !== ce ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Bi(e.ssContent),
    ssFallback: e.ssFallback && Bi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && Kr(
    u,
    l.clone(u)
  ), u;
}
function Ae(e = " ", t = 0) {
  return ge(cs, null, e, t);
}
function U(e = "", t = !1) {
  return t ? (b(), $e(Tt, null, e)) : ge(Tt, null, e);
}
function Wn(e) {
  return e == null || typeof e == "boolean" ? ge(Tt) : _e(e) ? ge(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qr(e) ? ui(e) : ge(cs, null, String(e));
}
function ui(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bi(e);
}
function js(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (_e(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), js(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !rh(t) ? t._ctx = At : a === 3 && At && (At.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (xe(t)) {
    if (i & 65) {
      js(e, { default: t });
      return;
    }
    t = { default: t, _ctx: At }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Ae(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function zt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ce([t.class, i.class]));
      else if (a === "style")
        t.style = rn([t.style, i.style]);
      else if (Mo(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(_e(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !$o(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Bn(e, t, n, i = null) {
  bn(e, t, 7, [
    n,
    i
  ]);
}
const Rg = Jf();
let Ig = 0;
function Pg(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Rg, r = {
    uid: Ig++,
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
    scope: new nv(
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
    propsOptions: oh(i, a),
    emitsOptions: th(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Be,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Be,
    data: Be,
    props: Be,
    attrs: Be,
    slots: Be,
    refs: Be,
    setupState: Be,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = pg.bind(null, r), e.ce && e.ce(r), r;
}
let Mt = null;
const Ca = () => Mt || At;
let Vs, Xr;
{
  const e = Bo(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  Vs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Mt = n
  ), Xr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Zr = n
  );
}
const us = (e) => {
  const t = Mt;
  return Vs(e), e.scope.on(), () => {
    e.scope.off(), Vs(t);
  };
}, Lu = () => {
  Mt && Mt.scope.off(), Vs(null);
};
function gh(e) {
  return e.vnode.shapeFlag & 4;
}
let Zr = !1;
function Dg(e, t = !1, n = !1) {
  t && Xr(t);
  const { props: i, children: a } = e.vnode, r = gh(e);
  _g(e, i, r, t), Eg(e, a, n || t);
  const s = r ? Mg(e, t) : void 0;
  return t && Xr(!1), s;
}
function Mg(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ig);
  const { setup: i } = n;
  if (i) {
    yi();
    const a = e.setupContext = i.length > 1 ? bh(e) : null, r = us(e), s = os(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = sf(s);
    if (_i(), r(), (o || e.sp) && !Wa(e) && jf(e), o) {
      if (s.then(Lu, Lu), t)
        return s.then((l) => {
          Xr(!0);
          try {
            Ru(e, l, t);
          } finally {
            Xr(!1);
          }
        }).catch((l) => {
          Vo(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Ru(e, s);
  } else
    mh(e);
}
function Ru(e, t, n) {
  xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ke(t) && (e.setupState = Nf(t)), mh(e);
}
function mh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || gn);
  {
    const a = us(e);
    yi();
    try {
      og(e);
    } finally {
      _i(), a();
    }
  }
}
const $g = {
  get(e, t) {
    return Pt(e, "get", ""), e[t];
  }
};
function bh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, $g),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nf(Cv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in xr)
        return xr[n](e);
    },
    has(t, n) {
      return n in t || n in xr;
    }
  })) : e.proxy;
}
function Fg(e, t = !0) {
  return xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zg(e) {
  return xe(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ Ov(e, t, Zr);
function qt(e, t, n) {
  try {
    Hs(-1);
    const i = arguments.length;
    return i === 2 ? Ke(t) && !_e(t) ? qr(t) ? ge(e, null, [t]) : ge(e, t) : ge(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && qr(n) && (n = [n]), ge(e, t, n));
  } finally {
    Hs(1);
  }
}
const Ug = "3.5.42", Bg = gn;
let sc;
const Iu = typeof window < "u" && window.trustedTypes;
if (Iu)
  try {
    sc = /* @__PURE__ */ Iu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const yh = sc ? (e) => sc.createHTML(e) : (e) => e, Hg = "http://www.w3.org/2000/svg", jg = "http://www.w3.org/1998/Math/MathML", ci = typeof document < "u" ? document : null, Pu = ci && /* @__PURE__ */ ci.createElement("template"), Vg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ci.createElementNS(Hg, e) : t === "mathml" ? ci.createElementNS(jg, e) : n ? ci.createElement(e, { is: n }) : ci.createElement(e);
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
      Pu.innerHTML = yh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Pu.content;
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
}, ki = "transition", fr = "animation", Jr = /* @__PURE__ */ Symbol("_vtc"), _h = {
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
}, Gg = /* @__PURE__ */ ft(
  {},
  Ff,
  _h
), Kg = (e) => (e.displayName = "Transition", e.props = Gg, e), Wg = /* @__PURE__ */ Kg(
  (e, { slots: t }) => qt(Kv, qg(e), t)
), aa = (e, t = []) => {
  _e(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Du = (e) => e ? _e(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function qg(e) {
  const t = {};
  for (const J in e)
    J in _h || (t[J] = e[J]);
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
    leaveToClass: E = `${n}-leave-to`
  } = e, N = Yg(a), A = N && N[0], O = N && N[1], {
    onBeforeEnter: I,
    onEnter: M,
    onEnterCancelled: K,
    onLeave: $,
    onLeaveCancelled: le,
    onBeforeAppear: ue = I,
    onAppear: B = M,
    onAppearCancelled: j = K
  } = t, Z = (J, ne, P, D) => {
    J._enterCancelled = D, ra(J, ne ? u : o), ra(J, ne ? d : s), P && P();
  }, se = (J, ne) => {
    J._isLeaving = !1, ra(J, h), ra(J, E), ra(J, _), ne && ne();
  }, de = (J) => (ne, P) => {
    const D = J ? B : M, X = () => Z(ne, J, P);
    aa(D, [ne, X]), Mu(() => {
      ra(ne, J ? l : r), ri(ne, J ? u : o), Du(D) || $u(ne, i, A, X);
    });
  };
  return ft(t, {
    onBeforeEnter(J) {
      aa(I, [J]), ri(J, r), ri(J, s);
    },
    onBeforeAppear(J) {
      aa(ue, [J]), ri(J, l), ri(J, d);
    },
    onEnter: de(!1),
    onAppear: de(!0),
    onLeave(J, ne) {
      J._isLeaving = !0;
      const P = () => se(J, ne);
      ri(J, h), J._enterCancelled ? (ri(J, _), Uu(J)) : (Uu(J), ri(J, _)), Mu(() => {
        J._isLeaving && (ra(J, h), ri(J, E), Du($) || $u(J, i, O, P));
      }), aa($, [J, P]);
    },
    onEnterCancelled(J) {
      Z(J, !1, void 0, !0), aa(K, [J]);
    },
    onAppearCancelled(J) {
      Z(J, !0, void 0, !0), aa(j, [J]);
    },
    onLeaveCancelled(J) {
      se(J), aa(le, [J]);
    }
  });
}
function Yg(e) {
  if (e == null)
    return null;
  if (Ke(e))
    return [yl(e.enter), yl(e.leave)];
  {
    const t = yl(e);
    return [t, t];
  }
}
function yl(e) {
  return Kp(e);
}
function ri(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Jr] || (e[Jr] = /* @__PURE__ */ new Set())).add(t);
}
function ra(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Jr];
  n && (n.delete(t), n.size || (e[Jr] = void 0));
}
function Mu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Xg = 0;
function $u(e, t, n, i) {
  const a = e._endId = ++Xg, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = Zg(e, t);
  if (!s)
    return i();
  const d = s + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, _), r();
  }, _ = (E) => {
    E.target === e && ++u >= l && h();
  };
  setTimeout(() => {
    u < l && h();
  }, o + 1), e.addEventListener(d, _);
}
function Zg(e, t) {
  const n = window.getComputedStyle(e), i = (N) => (n[N] || "").split(", "), a = i(`${ki}Delay`), r = i(`${ki}Duration`), s = Fu(a, r), o = i(`${fr}Delay`), l = i(`${fr}Duration`), d = Fu(o, l);
  let u = null, h = 0, _ = 0;
  t === ki ? s > 0 && (u = ki, h = s, _ = r.length) : t === fr ? d > 0 && (u = fr, h = d, _ = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? ki : fr : null, _ = u ? u === ki ? r.length : l.length : 0);
  const E = u === ki && /\b(?:transform|all)(?:,|$)/.test(
    i(`${ki}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: _,
    hasTransform: E
  };
}
function Fu(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => zu(n) + zu(e[i])));
}
function zu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Uu(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Jg(e, t, n) {
  const i = e[Jr];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Gs = /* @__PURE__ */ Symbol("_vod"), wh = /* @__PURE__ */ Symbol("_vsh"), Ya = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Gs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : hr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), hr(e, !0), i.enter(e)) : i.leave(e, () => {
      hr(e, !1);
    }) : hr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    hr(e, t);
  }
};
function hr(e, t) {
  e.style.display = t ? e[Gs] : "none", e[wh] = !t;
}
const Ch = /* @__PURE__ */ Symbol("");
function Qg(e) {
  const t = Ca();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Ks(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Ks(t.ce, a) : oc(t.subTree, a), n(a);
  };
  Kf(() => {
    Rf(i);
  }), ji(() => {
    Zt(i, gn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), ls(() => a.disconnect());
  });
}
function oc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      oc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ks(e.el, t);
  else if (e.type === ce)
    e.children.forEach((n) => oc(n, t));
  else if (e.type === xs) {
    let { el: n, anchor: i } = e;
    for (; n && (Ks(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Ks(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = tv(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Ch] = i;
  }
}
const em = /(?:^|;)\s*display\s*:/;
function tm(e, t, n) {
  const i = e.style, a = et(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (et(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && Cr(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && Cr(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? im(
        e,
        s,
        !et(t) && t ? t[s] : void 0,
        o
      ) || Cr(i, s, o) : Cr(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[Ch];
      s && (n += ";" + s), i.cssText = n, r = em.test(n);
    }
  } else t && e.removeAttribute("style");
  Gs in e && (e[Gs] = r ? i.display : "", e[wh] && (i.display = "none"));
}
const ys = /\s*!important$/;
function Cr(e, t, n) {
  if (_e(n))
    n.forEach((i) => Cr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    ys.test(n) ? e.setProperty(t, n.replace(ys, ""), "important") : e.setProperty(t, n);
  else {
    const i = nm(e, t);
    ys.test(n) ? e.setProperty(
      Si(i),
      n.replace(ys, ""),
      "important"
    ) : e[i] = n;
  }
}
const Bu = ["Webkit", "Moz", "ms"], _l = {};
function nm(e, t) {
  const n = _l[t];
  if (n)
    return n;
  let i = $t(t);
  if (i !== "filter" && i in e)
    return _l[t] = i;
  i = zo(i);
  for (let a = 0; a < Bu.length; a++) {
    const r = Bu[a] + i;
    if (r in e)
      return _l[t] = r;
  }
  return t;
}
function im(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && et(i) && n === i;
}
const Hu = "http://www.w3.org/1999/xlink";
function ju(e, t, n, i, a, r = Jp(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hu, t.slice(6, t.length)) : e.setAttributeNS(Hu, t, n) : n == null || r && !uf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : xn(n) ? String(n) : n
  );
}
function Vu(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? yh(n) : n);
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
    o === "boolean" ? n = uf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function fa(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function am(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Gu = /* @__PURE__ */ Symbol("_vei");
function rm(e, t, n, i, a = null) {
  const r = e[Gu] || (e[Gu] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = lm(t);
    if (i) {
      const d = r[t] = dm(
        i,
        a
      );
      fa(e, o, d, l);
    } else s && (am(e, o, s, l), r[t] = void 0);
  }
}
const sm = /(Once|Passive|Capture)$/, om = /^on:?(?:Once|Passive|Capture)$/;
function lm(e) {
  let t, n;
  for (; (n = e.match(sm)) && !om.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Si(e.slice(2)), t];
}
let wl = 0;
const cm = /* @__PURE__ */ Promise.resolve(), um = () => wl || (cm.then(() => wl = 0), wl = Date.now());
function dm(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (_e(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const s = a.slice(), o = [i];
      for (let l = 0; l < s.length && !i._stopped; l++) {
        const d = s[l];
        d && bn(
          d,
          t,
          5,
          o
        );
      }
    } else
      bn(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = um(), n;
}
const Ku = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fm = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? Jg(e, i, s) : t === "style" ? tm(e, n, i) : Mo(t) ? $o(t) || rm(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hm(e, t, i, s)) ? (Vu(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ju(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (pm(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !et(i))) ? Vu(e, $t(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), ju(e, t, i, s));
};
function hm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ku(t) && xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Ku(t) && et(n) ? !1 : t in e;
}
function pm(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = $t(t);
  return Array.isArray(n) ? n.some((a) => $t(a) === i) : Object.keys(n).some((a) => $t(a) === i);
}
const Ws = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return _e(t) ? (n) => Ns(t, n) : t;
};
function vm(e) {
  e.target.composing = !0;
}
function Wu(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const pa = /* @__PURE__ */ Symbol("_assign"), _s = /* @__PURE__ */ Symbol("_initialValue");
function Cl(e, t, n) {
  return t && (e = e.trim()), n && (e = Uo(e)), e;
}
const Li = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[_s] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[_s] = e.defaultValue.replace(/\r\n?/g, `
`))), e[pa] = Ws(a);
    const r = i || a.props && a.props.type === "number";
    fa(e, t ? "change" : "input", (s) => {
      s.target.composing || e[pa](Cl(e.value, n, r));
    }), (n || r) && fa(e, "change", () => {
      e.value = Cl(e.value, n, r);
    }), t || (fa(e, "compositionstart", vm), fa(e, "compositionend", Wu), fa(e, "change", Wu));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[_s];
    delete e[_s], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[pa](Cl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[pa] = Ws(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? Uo(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, un = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, fa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Uo(qs(l)) : qs(l)
      ), r = e.multiple, s = r ? _a(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? _e(s) ? a.slice() : a : s
      ];
      try {
        e[pa](s);
      } finally {
        gi(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[pa] = Ws(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    qu(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[pa] = Ws(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !gm(t, n[1], n[0])) && qu(e, t);
  }
};
function gm(e, t, n) {
  if (!n || _e(e)) return Ui(e, t);
  if (_a(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function qu(e, t) {
  const n = e.multiple, i = _e(t);
  if (!(n && !i && !_a(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = qs(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = ev(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Ui(qs(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function qs(e) {
  return "_value" in e ? e._value : e.value;
}
const mm = ["ctrl", "shift", "alt", "meta"], bm = {
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
  exact: (e, t) => mm.some((n) => e[`${n}Key`] && !t.includes(n))
}, Je = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = bm[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, ym = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Xt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = Si(a.key);
    if (t.some(
      (s) => s === r || ym[s] === r
    ))
      return e(a);
  }));
}, _m = /* @__PURE__ */ ft({ patchProp: fm }, Vg);
let Yu;
function wm() {
  return Yu || (Yu = Ag(_m));
}
const Cm = ((...e) => {
  const t = wm().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Em(i);
    if (!a) return;
    const r = t._component;
    !xe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, Sm(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function Sm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Em(e) {
  return et(e) ? document.querySelector(e) : e;
}
function Gc(e, t, n) {
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
function Xu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Tm(e) {
  if (Array.isArray(e)) return e;
}
function Am(e, t) {
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
function km() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Om(e, t) {
  return Tm(e) || Am(e, t) || Nm(e, t) || km();
}
function Nm(e, t) {
  if (e) {
    if (typeof e == "string") return Xu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xu(e, t) : void 0;
  }
}
const Sh = Object.entries, Zu = Object.setPrototypeOf, xm = Object.isFrozen, Lm = Object.getPrototypeOf, Rm = Object.getOwnPropertyDescriptor;
let bt = Object.freeze, _t = Object.seal, ja = Object.create, Eh = typeof Reflect < "u" && Reflect, lc = Eh.apply, cc = Eh.construct;
bt || (bt = function(t) {
  return t;
});
_t || (_t = function(t) {
  return t;
});
lc || (lc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
cc || (cc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ca = ht(Array.prototype.forEach), Im = ht(Array.prototype.lastIndexOf), Ju = ht(Array.prototype.pop), pr = ht(Array.prototype.push), Pm = ht(Array.prototype.splice), Xa = Array.isArray, Sr = ht(String.prototype.toLowerCase), Sl = ht(String.prototype.toString), Qu = ht(String.prototype.match), vr = ht(String.prototype.replace), ed = ht(String.prototype.indexOf), Dm = ht(String.prototype.trim), Mm = ht(Number.prototype.toString), $m = ht(Boolean.prototype.toString), td = typeof BigInt > "u" ? null : ht(BigInt.prototype.toString), nd = typeof Symbol > "u" ? null : ht(Symbol.prototype.toString), Yt = ht(Object.prototype.hasOwnProperty), gr = ht(Object.prototype.toString), Lt = ht(RegExp.prototype.test), sa = Fm(TypeError);
function ht(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return lc(e, t, i);
  };
}
function Fm(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return cc(e, n);
  };
}
function Ue(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Sr;
  if (Zu && Zu(e, null), !Xa(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (xm(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function zm(e) {
  for (let t = 0; t < e.length; t++)
    Yt(e, t) || (e[t] = null);
  return e;
}
function tn(e) {
  const t = ja(null);
  for (const i of Sh(e)) {
    var n = Om(i, 2);
    const a = n[0], r = n[1];
    Yt(e, a) && (Xa(r) ? t[a] = zm(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = tn(r) : t[a] = r);
  }
  return t;
}
function Um(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Mm(e);
    case "boolean":
      return $m(e);
    case "bigint":
      return td ? td(e) : "0";
    case "symbol":
      return nd ? nd(e) : "Symbol()";
    case "undefined":
      return gr(e);
    case "function":
    case "object": {
      if (e === null)
        return gr(e);
      const t = e, n = An(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : gr(i);
      }
      return gr(e);
    }
    default:
      return gr(e);
  }
}
function An(e, t) {
  for (; e !== null; ) {
    const i = Rm(e, t);
    if (i) {
      if (i.get)
        return ht(i.get);
      if (typeof i.value == "function")
        return ht(i.value);
    }
    e = Lm(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Bm(e) {
  try {
    return Lt(e, ""), !0;
  } catch {
    return !1;
  }
}
const id = bt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), El = bt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Tl = bt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Hm = bt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Al = bt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), jm = bt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ad = bt(["#text"]), rd = bt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), kl = bt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), sd = bt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ws = bt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Vm = _t(/{{[\w\W]*|^[\w\W]*}}/g), Gm = _t(/<%[\w\W]*|^[\w\W]*%>/g), Km = _t(/\${[\w\W]*/g), Wm = _t(/^data-[\-\w.\u00B7-\uFFFF]+$/), qm = _t(/^aria-[\-\w]+$/), od = _t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ym = _t(/^(?:\w+script|data):/i), Xm = _t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Zm = _t(/^html$/i), Jm = _t(/^[a-z][.\w]*(-[.\w]+)+$/i), ld = _t(/<[/\w!]/g), cd = _t(/<[/\w]/g), Qm = _t(/<\/no(script|embed|frames)/i), eb = _t(/\/>/i), en = {
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
}, Th = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], tb = bt(Ue({}, Th)), nb = (function() {
  const e = {};
  return ca(Th, (t) => {
    e[t] = _t(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), bt(e);
})(), ib = function() {
  return typeof window > "u" ? null : window;
}, ab = function(t, n) {
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
}, ud = function() {
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
  return Yt(t, n) && Xa(t[n]) ? Ue(a.base ? tn(a.base) : {}, t[n], a.transform) : i;
}, Ol = function(t, n, i) {
  const a = Yt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? tn(a) : i();
};
function Ah() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ib();
  const t = (Q) => Ah(Q);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== en.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, _ = o.prototype, E = An(_, "cloneNode"), N = An(_, "remove"), A = An(_, "nextSibling"), O = An(_, "childNodes"), I = An(_, "parentNode"), M = An(_, "shadowRoot"), K = An(_, "attributes"), $ = s && s.prototype ? An(s.prototype, "nodeType") : null, le = s && s.prototype ? An(s.prototype, "nodeName") : null, ue = s && s.prototype ? An(s.prototype, "ownerDocument") : null, B = function(y) {
    return $ ? $(y) : y.nodeType;
  }, j = function(y) {
    return le ? le(y) : y.nodeName;
  };
  if (typeof r == "function") {
    const Q = n.createElement("template");
    Q.content && Q.content.ownerDocument && (n = Q.content.ownerDocument);
  }
  let Z, se = "", de, J = !1, ne = 0;
  const P = function() {
    if (ne > 0)
      throw sa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, D = function(y) {
    P(), ne++;
    try {
      return Z.createHTML(y);
    } finally {
      ne--;
    }
  }, X = function(y) {
    P(), ne++;
    try {
      return Z.createScriptURL(y);
    } finally {
      ne--;
    }
  }, ae = function() {
    return J || (de = ab(h, a), J = !0), de;
  }, ie = n, fe = ie.implementation, pe = ie.createNodeIterator, Se = ie.createDocumentFragment, me = ie.getElementsByTagName, Ye = i.importNode;
  let ke = ud();
  t.isSupported = typeof Sh == "function" && typeof I == "function" && fe && fe.createHTMLDocument !== void 0;
  const He = Vm, ot = Gm, pt = Km, Ut = Wm, it = qm, yn = Ym, z = Xm, v = Jm;
  let w = od, k = null;
  const L = Ue({}, [...id, ...El, ...Tl, ...Al, ...ad]);
  let x = null;
  const F = Ue({}, [...rd, ...kl, ...sd, ...ws]);
  let W = Object.seal(ja(null, {
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
  })), G = null, ee = null;
  const V = Object.seal(ja(null, {
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
  let be = !0, re = !0, ve = !1, we = !0, Ne = !1, Pe = !0, Re = !1, Ze = !1, tt = null, wt = null, Ot = !1, Bt = !1, lt = !1, ct = !1, vt = !0, Ki = !1;
  const Rn = "user-content-";
  let tr = !0, Wi = !1, _n = {}, Zn = null;
  const nr = Ue({}, [
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
  let Ea = null;
  const Gt = Ue({}, ["audio", "video", "img", "source", "image", "track"]);
  let qi = null;
  const ir = Ue({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ta = "http://www.w3.org/1998/Math/MathML", Aa = "http://www.w3.org/2000/svg", sn = "http://www.w3.org/1999/xhtml";
  let ye = sn, wn = !1, gt = null;
  const Jn = Ue({}, [Ta, Aa, sn], Sl), Kt = bt(["mi", "mo", "mn", "ms", "mtext"]);
  let ut = Ue({}, Kt);
  const ar = bt(["annotation-xml"]);
  let Cn = Ue({}, ar);
  const Qn = Ue({}, ["title", "style", "font", "a", "script"]);
  let ei = null;
  const Sn = ["application/xhtml+xml", "text/html"], ka = "text/html";
  let nt = null, on = null;
  const rr = n.createElement("form"), En = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, ti = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (on && on === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = tn(y), ei = // eslint-disable-next-line unicorn/prefer-includes
    Sn.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? ka : y.PARSER_MEDIA_TYPE, nt = ei === "application/xhtml+xml" ? Sl : Sr, k = Oi(y, "ALLOWED_TAGS", L, {
      transform: nt
    }), x = Oi(y, "ALLOWED_ATTR", F, {
      transform: nt
    }), gt = Oi(y, "ALLOWED_NAMESPACES", Jn, {
      transform: Sl
    }), qi = Oi(y, "ADD_URI_SAFE_ATTR", ir, {
      transform: nt,
      base: ir
    }), Ea = Oi(y, "ADD_DATA_URI_TAGS", Gt, {
      transform: nt,
      base: Gt
    }), Zn = Oi(y, "FORBID_CONTENTS", nr, {
      transform: nt
    }), G = Oi(y, "FORBID_TAGS", tn({}), {
      transform: nt
    }), ee = Oi(y, "FORBID_ATTR", tn({}), {
      transform: nt
    }), _n = Yt(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? tn(y.USE_PROFILES) : y.USE_PROFILES : !1, be = y.ALLOW_ARIA_ATTR !== !1, re = y.ALLOW_DATA_ATTR !== !1, ve = y.ALLOW_UNKNOWN_PROTOCOLS || !1, we = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ne = y.SAFE_FOR_TEMPLATES || !1, Pe = y.SAFE_FOR_XML !== !1, Re = y.WHOLE_DOCUMENT || !1, Bt = y.RETURN_DOM || !1, lt = y.RETURN_DOM_FRAGMENT || !1, ct = y.RETURN_TRUSTED_TYPE || !1, Ot = y.FORCE_BODY || !1, vt = y.SANITIZE_DOM !== !1, Ki = y.SANITIZE_NAMED_PROPS || !1, tr = y.KEEP_CONTENT !== !1, Wi = y.IN_PLACE || !1, w = Bm(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : od, ye = typeof y.NAMESPACE == "string" ? y.NAMESPACE : sn, ut = Ol(
      y,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ue({}, Kt)
      // Default built-in map
    ), Cn = Ol(
      y,
      "HTML_INTEGRATION_POINTS",
      () => Ue({}, ar)
      // Default built-in map
    );
    const R = Ol(y, "CUSTOM_ELEMENT_HANDLING", () => ja(null));
    if (W = ja(null), Yt(R, "tagNameCheck") && En(R.tagNameCheck) && (W.tagNameCheck = R.tagNameCheck), Yt(R, "attributeNameCheck") && En(R.attributeNameCheck) && (W.attributeNameCheck = R.attributeNameCheck), Yt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), _t(W), Ne && (re = !1), lt && (Bt = !0), _n && (k = Ue({}, ad), x = ja(null), _n.html === !0 && (Ue(k, id), Ue(x, rd)), _n.svg === !0 && (Ue(k, El), Ue(x, kl), Ue(x, ws)), _n.svgFilters === !0 && (Ue(k, Tl), Ue(x, kl), Ue(x, ws)), _n.mathMl === !0 && (Ue(k, Al), Ue(x, sd), Ue(x, ws))), V.tagCheck = null, V.attributeCheck = null, Yt(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? V.tagCheck = y.ADD_TAGS : Xa(y.ADD_TAGS) && (k === L && (k = tn(k)), Ue(k, y.ADD_TAGS, nt))), Yt(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? V.attributeCheck = y.ADD_ATTR : Xa(y.ADD_ATTR) && (x === F && (x = tn(x)), Ue(x, y.ADD_ATTR, nt))), Yt(y, "ADD_FORBID_CONTENTS") && Xa(y.ADD_FORBID_CONTENTS) && (Zn === nr && (Zn = tn(Zn)), Ue(Zn, y.ADD_FORBID_CONTENTS, nt)), tr && (k["#text"] = !0), Re && Ue(k, ["html", "head", "body"]), k.table && (Ue(k, ["tbody"]), delete G.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw sa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw sa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = Z;
      Z = y.TRUSTED_TYPES_POLICY;
      try {
        se = D("");
      } catch (oe) {
        throw Z = q, oe;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (Z = void 0, se = "") : (Z === void 0 && (Z = ae()), Z && typeof se == "string" && (se = D("")));
    bt && bt(y), on = y;
  }, Yi = Ue({}, [...El, ...Tl, ...Hm]), Xi = Ue({}, [...Al, ...jm]), rl = function(y, R, q) {
    return R.namespaceURI === sn ? y === "svg" : R.namespaceURI === Ta ? y === "svg" && (q === "annotation-xml" || ut[q]) : !!Yi[y];
  }, sl = function(y, R, q) {
    return R.namespaceURI === sn ? y === "math" : R.namespaceURI === Aa ? y === "math" && Cn[q] : !!Xi[y];
  }, Oa = function(y, R, q) {
    return R.namespaceURI === Aa && !Cn[q] || R.namespaceURI === Ta && !ut[q] ? !1 : !Xi[y] && (Qn[y] || !Yi[y]);
  }, fs = function(y) {
    let R = I(y);
    (!R || !R.tagName) && (R = {
      namespaceURI: ye,
      tagName: "template"
    });
    const q = Sr(y.tagName), oe = Sr(R.tagName);
    return gt[y.namespaceURI] ? y.namespaceURI === Aa ? rl(q, R, oe) : y.namespaceURI === Ta ? sl(q, R, oe) : y.namespaceURI === sn ? Oa(q, R, oe) : !!(ei === "application/xhtml+xml" && gt[y.namespaceURI]) : !1;
  }, Tn = function(y) {
    pr(t.removed, {
      element: y
    });
    try {
      I(y).removeChild(y);
    } catch {
      if (N(y), !I(y))
        throw sa("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, hs = function(y, R, q) {
    try {
      y.removeAttributeNode(R);
    } catch {
      try {
        y.removeAttribute(q);
      } catch {
      }
    }
  }, Na = function(y) {
    xa(y);
    const R = O(y);
    if (R) {
      const oe = [];
      ca(R, (he) => {
        pr(oe, he);
      }), ca(oe, (he) => {
        try {
          N(he);
        } catch {
        }
      });
    }
    const q = K(y);
    if (q)
      for (let oe = q.length - 1; oe >= 0; --oe) {
        const he = q[oe], Ee = he && he.name;
        typeof Ee == "string" && hs(y, he, Ee);
      }
  }, ni = function(y, R, q) {
    if (!q)
      try {
        q = R.getAttributeNode(y);
      } catch {
        q = null;
      }
    pr(t.removed, {
      attribute: q || null,
      from: R
    });
    try {
      q ? R.removeAttributeNode(q) : R.removeAttribute(y);
    } catch {
      try {
        R.removeAttribute(y);
      } catch {
      }
    }
    if (y === "is")
      if (Bt || lt)
        try {
          Tn(R);
        } catch {
        }
      else
        try {
          R.setAttribute(y, "");
        } catch {
        }
  }, In = function(y) {
    const R = K(y);
    if (R)
      for (let q = R.length - 1; q >= 0; --q) {
        const oe = R[q], he = oe && oe.name;
        typeof he != "string" || x[nt(he)] || hs(y, oe, he);
      }
  }, xa = function(y) {
    const R = [y];
    for (; R.length > 0; ) {
      const q = R.pop();
      B(q) === en.element && In(q);
      const he = O(q);
      if (he)
        for (let Ee = he.length - 1; Ee >= 0; --Ee)
          R.push(he[Ee]);
    }
  }, La = function(y, R) {
    return Pe ? y === "patchsrc" ? !0 : y === "for" && R !== "label" && R !== "output" : !1;
  }, Ra = function(y) {
    if (!Pe)
      return;
    const R = [y];
    for (; R.length > 0; ) {
      const q = R.pop(), oe = B(q);
      if (oe === en.processingInstruction || oe === en.comment && Lt(cd, q.data)) {
        try {
          N(q);
        } catch {
        }
        continue;
      }
      if (oe === en.element) {
        const Ee = q, Ve = nt(j(q));
        try {
          Ee.hasAttribute && Ee.hasAttribute("patchsrc") && Ee.removeAttribute("patchsrc"), Ee.hasAttribute && Ee.hasAttribute("for") && La("for", Ve) && Ee.removeAttribute("for");
        } catch {
        }
      }
      const he = O(q);
      if (he)
        for (let Ee = he.length - 1; Ee >= 0; --Ee)
          R.push(he[Ee]);
    }
  }, Pn = function(y) {
    let R = null, q = null;
    if (Ot)
      y = "<remove></remove>" + y;
    else {
      const Ee = Qu(y, /^[\r\n\t ]+/);
      q = Ee && Ee[0];
    }
    ei === "application/xhtml+xml" && ye === sn && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const oe = Z ? D(y) : y;
    if (ye === sn)
      try {
        R = new u().parseFromString(oe, ei);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = fe.createDocument(ye, "template", null);
      try {
        R.documentElement.innerHTML = wn ? se : oe;
      } catch {
      }
    }
    const he = R.body || R.documentElement;
    return y && q && he.insertBefore(n.createTextNode(q), he.childNodes[0] || null), ye === sn ? me.call(R, Re ? "html" : "body")[0] : Re ? R.documentElement : he;
  }, Dn = function(y) {
    const R = ue ? ue(y) : y.ownerDocument;
    return pe.call(
      R || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Zi = function(y) {
    return y = vr(y, He, " "), y = vr(y, ot, " "), y = vr(y, pt, " "), y;
  }, Ia = function(y) {
    var R;
    y.normalize();
    const q = ue ? ue(y) : y.ownerDocument, oe = pe.call(
      q || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let he = oe.nextNode();
    for (; he; )
      he.data = Zi(he.data), he = oe.nextNode();
    const Ee = (R = y.querySelectorAll) === null || R === void 0 ? void 0 : R.call(y, "template");
    Ee && ca(Ee, (Ve) => {
      Ct(Ve.content) && Ia(Ve.content);
    });
  }, Mn = function(y) {
    const R = le ? le(y) : null;
    return typeof R != "string" || nt(R) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    y.nodeType !== $(y) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    y.childNodes !== O(y);
  }, Ct = function(y) {
    if (!$ || typeof y != "object" || y === null)
      return !1;
    try {
      return $(y) === en.documentFragment;
    } catch {
      return !1;
    }
  }, $n = function(y) {
    if (!$ || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof $(y) == "number";
    } catch {
      return !1;
    }
  };
  function Jt(Q, y, R) {
    Q.length !== 0 && ca(Q, (q) => {
      q.call(t, y, R, on);
    });
  }
  const ol = function(y, R) {
    return !!(Pe && y.hasChildNodes() && !$n(y.firstElementChild) && Lt(ld, y.textContent) && Lt(ld, y.innerHTML) || Pe && y.namespaceURI === sn && tb[R] && ($n(y.firstElementChild) || typeof y.textContent == "string" && Lt(nb[R], y.textContent)) || y.nodeType === en.processingInstruction || Pe && y.nodeType === en.comment && Lt(cd, y.data));
  }, Ti = function(y, R) {
    if (y instanceof RegExp)
      return Lt(y, R);
    if (y instanceof Function) {
      for (var q = arguments.length, oe = new Array(q > 2 ? q - 2 : 0), he = 2; he < q; he++)
        oe[he - 2] = arguments[he];
      return !!y(R, ...oe);
    }
    return !1;
  }, Ji = function(y, R, q) {
    if (!G[R] && Wt(R) && Ti(W.tagNameCheck, R))
      return !1;
    if (tr && !Zn[R]) {
      const oe = I(y), he = O(y);
      if (he && oe) {
        const Ee = he.length;
        for (let Ve = Ee - 1; Ve >= 0; --Ve) {
          const Xe = y === q ? E(he[Ve], !0) : he[Ve];
          oe.insertBefore(Xe, A(y));
        }
      }
    }
    return Tn(y), !0;
  }, Qi = function(y, R, q, oe) {
    return y.length === 0 ? R : R === q || R === oe ? tn(R) : R;
  }, ii = function(y, R) {
    return y === R || I(y) !== null ? !1 : (Wi && xa(y), !0);
  }, ea = function(y, R) {
    if (Jt(ke.beforeSanitizeElements, y, null), ii(y, R))
      return !0;
    if (Mn(y))
      return Tn(y), !0;
    const q = nt(j(y));
    if (k = Qi(ke.uponSanitizeElement, k, L, tt), Jt(ke.uponSanitizeElement, y, {
      tagName: q,
      allowedTags: k
    }), ii(y, R))
      return !0;
    if (ol(y, q))
      return Tn(y), !0;
    if (G[q] || !(V.tagCheck instanceof Function && V.tagCheck(q)) && !k[q]) {
      const he = Ji(y, q, R);
      return he === !1 && Jt(ke.afterSanitizeElements, y, null), he;
    }
    if (B(y) === en.element && !fs(y) || (q === "noscript" || q === "noembed" || q === "noframes") && Lt(Qm, y.innerHTML))
      return Tn(y), !0;
    if (Ne && y.nodeType === en.text) {
      const he = Zi(y.textContent);
      y.textContent !== he && (pr(t.removed, {
        element: y.cloneNode()
      }), y.textContent = he);
    }
    return Jt(ke.afterSanitizeElements, y, null), !1;
  }, ln = function(y, R, q) {
    if (ee[R] || La(R, y) || vt && (R === "id" || R === "name") && (q in n || q in rr))
      return !1;
    const oe = x[R] || V.attributeCheck instanceof Function && V.attributeCheck(R, y);
    return re && Lt(Ut, R) || be && Lt(it, R) ? !0 : oe ? qi[R] || Lt(w, vr(q, z, "")) || (R === "src" || R === "xlink:href" || R === "href") && y !== "script" && ed(q, "data:") === 0 && Ea[y] || ve && !Lt(yn, vr(q, z, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Wt(y) && Ti(W.tagNameCheck, y) && Ti(W.attributeNameCheck, R, y) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      R === "is" && W.allowCustomizedBuiltInElements && Ti(W.tagNameCheck, q)
    );
  }, Fn = Ue({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Wt = function(y) {
    return !Fn[Sr(y)] && Lt(v, y);
  }, ps = function(y, R, q, oe) {
    if (Z && typeof h == "object" && typeof h.getAttributeType == "function" && !q)
      switch (h.getAttributeType(y, R)) {
        case "TrustedHTML":
          return D(oe);
        case "TrustedScriptURL":
          return X(oe);
      }
    return oe;
  }, ll = function(y, R, q, oe) {
    try {
      q ? y.setAttributeNS(q, R, oe) : y.setAttribute(R, oe), Mn(y) ? Tn(y) : Ju(t.removed);
    } catch {
      ni(R, y);
    }
  }, zn = function(y) {
    Jt(ke.beforeSanitizeAttributes, y, null);
    const R = y.attributes;
    if (!R || Mn(y))
      return;
    x = Qi(ke.uponSanitizeAttribute, x, F, wt);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let oe = R.length;
    const he = nt(y.nodeName);
    for (; oe--; ) {
      const Ee = R[oe], Ve = Ee.name, Xe = Ee.namespaceURI, Nt = Ee.value, xt = nt(Ve), sr = Nt;
      let rt = Ve === "value" ? sr : Dm(sr);
      if (q.attrName = xt, q.attrValue = rt, q.keepAttr = !0, q.forceKeepAttr = void 0, Jt(ke.uponSanitizeAttribute, y, q), rt = q.attrValue, Ki && (xt === "id" || xt === "name") && ed(rt, Rn) !== 0 && (ni(Ve, y, Ee), rt = Rn + rt), Pe && Lt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, rt)) {
        ni(Ve, y, Ee);
        continue;
      }
      if (xt === "attributename" && Qu(rt, "href")) {
        ni(Ve, y, Ee);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          ni(Ve, y, Ee);
          continue;
        }
        if (!we && Lt(eb, rt)) {
          ni(Ve, y, Ee);
          continue;
        }
        if (Ne && (rt = Zi(rt)), !ln(he, xt, rt)) {
          ni(Ve, y, Ee);
          continue;
        }
        rt = ps(he, xt, Xe, rt), rt !== sr && ll(y, Ve, Xe, rt);
      }
    }
    Jt(ke.afterSanitizeAttributes, y, null);
  }, ta = function(y) {
    let R = null;
    const q = Dn(y);
    for (Jt(ke.beforeSanitizeShadowDOM, y, null); R = q.nextNode(); )
      if (Jt(ke.uponSanitizeShadowNode, R, null), ea(R, y), zn(R), Ct(R.content) && ta(R.content), B(R) === en.element) {
        const oe = M(R);
        Ct(oe) && (Ai(oe), ta(oe));
      }
    Jt(ke.afterSanitizeShadowDOM, y, null);
  }, Ai = function(y) {
    const R = [{
      node: y,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const q = R.pop();
      if (q.shadow) {
        ta(q.shadow);
        continue;
      }
      const oe = q.node, Ee = B(oe) === en.element, Ve = O(oe);
      if (Ve)
        for (let Xe = Ve.length - 1; Xe >= 0; --Xe)
          R.push({
            node: Ve[Xe],
            shadow: null
          });
      if (Ee) {
        const Xe = le ? le(oe) : null;
        if (typeof Xe == "string" && nt(Xe) === "template") {
          const Nt = oe.content;
          Ct(Nt) && R.push({
            node: Nt,
            shadow: null
          });
        }
      }
      if (Ee) {
        const Xe = M(oe);
        Ct(Xe) && R.push({
          node: null,
          shadow: Xe
        }, {
          node: Xe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(Q) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, q = null, oe = null, he = null;
    if (wn = !Q, wn && (Q = "<!-->"), typeof Q != "string" && !$n(Q) && (Q = Um(Q), typeof Q != "string"))
      throw sa("dirty is not a string, aborting");
    if (!t.isSupported)
      return Q;
    Ze ? (k = tt, x = wt) : ti(y), (ke.uponSanitizeElement.length > 0 || ke.uponSanitizeAttribute.length > 0) && (k = tn(k)), ke.uponSanitizeAttribute.length > 0 && (x = tn(x)), t.removed = [];
    const Ee = Wi && typeof Q != "string" && $n(Q);
    if (Ee) {
      Ra(Q);
      const Nt = j(Q);
      if (typeof Nt == "string") {
        const xt = nt(Nt);
        if (!k[xt] || G[xt])
          throw Na(Q), sa("root node is forbidden and cannot be sanitized in-place");
      }
      if (Mn(Q))
        throw Na(Q), sa("root node is clobbered and cannot be sanitized in-place");
      try {
        Ai(Q);
      } catch (xt) {
        throw Na(Q), xt;
      }
    } else if ($n(Q))
      R = Pn("<!---->"), q = R.ownerDocument.importNode(Q, !0), q.nodeType === en.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? R = q : R.appendChild(q), Ai(q);
    else {
      if (!Bt && !Ne && !Re && // eslint-disable-next-line unicorn/prefer-includes
      Q.indexOf("<") === -1)
        return Z && ct ? D(Q) : Q;
      if (R = Pn(Q), !R)
        return Bt ? null : ct ? se : "";
    }
    R && Ot && Tn(R.firstChild);
    const Ve = Ee ? Q : R;
    try {
      const Nt = Dn(Ve);
      for (; oe = Nt.nextNode(); )
        ea(oe, Ve), zn(oe), Ct(oe.content) && ta(oe.content);
    } catch (Nt) {
      throw Ee && (Na(Q), ca(t.removed, (xt) => {
        xt.element && xa(xt.element);
      })), Nt;
    }
    if (Ee)
      return ca(t.removed, (Nt) => {
        Nt.element && xa(Nt.element);
      }), Ne && Ia(Q), Q;
    if (Bt) {
      if (Ne && Ia(R), lt)
        for (he = Se.call(R.ownerDocument); R.firstChild; )
          he.appendChild(R.firstChild);
      else
        he = R;
      return (x.shadowroot || x.shadowrootmode) && (he = Ye.call(i, he, !0)), he;
    }
    let Xe = Re ? R.outerHTML : R.innerHTML;
    return Re && k["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Lt(Zm, R.ownerDocument.doctype.name) && (Xe = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + Xe), Ne && (Xe = Zi(Xe)), Z && ct ? D(Xe) : Xe;
  }, t.setConfig = function() {
    let Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ti(Q), Ze = !0, tt = k, wt = x;
  }, t.clearConfig = function() {
    on = null, Ze = !1, tt = null, wt = null, Z = de, se = "";
  }, t.isValidAttribute = function(Q, y, R) {
    on || ti({});
    const q = nt(Q), oe = nt(y);
    return ln(q, oe, R);
  }, t.addHook = function(Q, y) {
    typeof y == "function" && Yt(ke, Q) && pr(ke[Q], y);
  }, t.removeHook = function(Q, y) {
    if (Yt(ke, Q)) {
      if (y !== void 0) {
        const R = Im(ke[Q], y);
        return R === -1 ? void 0 : Pm(ke[Q], R, 1)[0];
      }
      return Ju(ke[Q]);
    }
  }, t.removeHooks = function(Q) {
    Yt(ke, Q) && (ke[Q] = []);
  }, t.removeAllHooks = function() {
    ke = ud();
  }, t;
}
var kh = Ah();
function Kc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nl, dd;
function rb() {
  if (dd) return Nl;
  dd = 1;
  var e = /["'&<>]/;
  Nl = t;
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
  return Nl;
}
var sb = rb();
const Ys = /* @__PURE__ */ Kc(sb);
function ob() {
  return globalThis._nc_l10n_locale;
}
function lb() {
  return ob().replaceAll(/_/g, "-");
}
function Jo() {
  return globalThis._nc_l10n_language;
}
function cb(e) {
  const t = Jo();
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
function Oh(e) {
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
  }, l = (A) => A, d = (o.sanitize ? kh.sanitize : l) || l, u = o.escape ? Ys : l, h = (A) => typeof A == "string" || typeof A == "number", _ = (A, O, I) => A.replace(/%n/g, "" + I).replace(/{([^{}]*)}/g, (M, K) => {
    if (O === void 0 || !(K in O))
      return u(M);
    const $ = O[K];
    return h($) ? u(`${$}`) : typeof $ == "object" && h($.value) ? ($.escape !== !1 ? Ys : l)(`${$.value}`) : u(M);
  });
  let N = (a?.bundle ?? Oh(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, d(typeof r == "object" || s !== void 0 ? _(
    N,
    r,
    s
  ) : N);
}
function Hn(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? Oh(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return m(e, d[u], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function ub(e, t = Jo()) {
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
class Xs {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Xs.GLOBAL_SCOPE_PERSISTENT : Xs.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class db {
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
    return new Xs(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Nh(e) {
  return new db(e);
}
function fb() {
  try {
    return Gc("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var xl, fd;
function xh() {
  if (fd) return xl;
  fd = 1;
  var e = {};
  return xl = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, xl;
}
var Ll, hd;
function Lh() {
  if (hd) return Ll;
  hd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Ll = {
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
  }, Ll;
}
var Cs = { exports: {} }, pd;
function hb() {
  return pd || (pd = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = Lh(), r = xh();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], d = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const _ = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [_, i]
    ], N = (O) => {
      for (const [I, M] of E)
        O = O.split(`${I}*`).join(`${I}{0,${M}}`).split(`${I}+`).join(`${I}{1,${M}}`);
      return O;
    }, A = (O, I, M) => {
      const K = N(I), $ = h++;
      r(O, $, I), u[O] = $, l[$] = I, d[$] = K, s[$] = new RegExp(I, M ? "g" : void 0), o[$] = new RegExp(K, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${_}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${_}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Cs, Cs.exports)), Cs.exports;
}
var Rl, vd;
function pb() {
  if (vd) return Rl;
  vd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Rl = (i) => i ? typeof i != "object" ? e : i : t, Rl;
}
var Il, gd;
function vb() {
  if (gd) return Il;
  gd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return Il = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Il;
}
var Pl, md;
function Rh() {
  if (md) return Pl;
  md = 1;
  const e = xh(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = Lh(), { safeRe: i, t: a } = hb(), r = pb(), { compareIdentifiers: s } = vb(), o = (d, u) => {
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
      _[4] ? this.prerelease = _[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const N = +E;
          if (N >= 0 && N < n)
            return N;
        }
        return E;
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
        const _ = this.prerelease[h], E = u.prerelease[h];
        if (e("prerelease compare", h, _, E), _ === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (_ === void 0)
          return -1;
        if (_ === E)
          continue;
        return s(_, E);
      } while (++h);
    }
    compareBuild(u) {
      u instanceof l || (u = new l(u, this.options));
      let h = 0;
      do {
        const _ = this.build[h], E = u.build[h];
        if (e("build compare", h, _, E), _ === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (_ === void 0)
          return -1;
        if (_ === E)
          continue;
        return s(_, E);
      } while (++h);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(u, h, _) {
      if (u.startsWith("pre")) {
        if (!h && _ === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (h) {
          const E = `-${h}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!E || E[1] !== h)
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
          const E = Number(_) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [E];
          else {
            let N = this.prerelease.length;
            for (; --N >= 0; )
              typeof this.prerelease[N] == "number" && (this.prerelease[N]++, N = -2);
            if (N === -1) {
              if (h === this.prerelease.join(".") && _ === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (h) {
            let N = [h, E];
            if (_ === !1 && (N = [h]), o(this.prerelease, h)) {
              const A = this.prerelease[h.split(".").length];
              isNaN(A) && (this.prerelease = N);
            } else
              this.prerelease = N;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${u}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Pl = l, Pl;
}
var Dl, bd;
function gb() {
  if (bd) return Dl;
  bd = 1;
  const e = Rh();
  return Dl = (n, i) => new e(n, i).major, Dl;
}
var mb = gb();
const yd = /* @__PURE__ */ Kc(mb);
var Ml, _d;
function bb() {
  if (_d) return Ml;
  _d = 1;
  const e = Rh();
  return Ml = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Ml;
}
var $l, wd;
function yb() {
  if (wd) return $l;
  wd = 1;
  const e = bb();
  return $l = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, $l;
}
var _b = yb();
const wb = /* @__PURE__ */ Kc(_b);
class Cb {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !wb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : yd(t.getVersion()) !== yd(this.getVersion()) && console.warn(
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
class Sb {
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
let mr = null;
function Wc() {
  return mr !== null ? mr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? mr = new Cb(window._nc_event_bus) : mr = window._nc_event_bus = new Sb(), mr);
}
function Ih(e, t) {
  Wc().subscribe(e, t);
}
function Eb(e, t) {
  Wc().unsubscribe(e, t);
}
function bi(e, ...t) {
  Wc().emit(e, ...t);
}
const Ph = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Tb = Object.prototype.toString, Ab = (e) => Tb.call(e) === "[object Object]", Fa = () => {
}, kb = /* @__PURE__ */ Ob();
function Ob() {
  var e, t, n;
  return Ph && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Fl(e) {
  return Array.isArray(e) ? e : [e];
}
function Nb(e, t, n) {
  return Zt(e, t, {
    ...n,
    immediate: !0
  });
}
const Dh = Ph ? window : void 0;
function Er(e) {
  var t;
  const n = vi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Za(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = Y(() => {
    const i = Fl(vi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Nb(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Er(r))) !== null && i !== void 0 ? i : [Dh].filter((r) => r != null),
      Fl(vi(n.value ? e[1] : e[0])),
      Fl(g(n.value ? e[2] : e[1])),
      vi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = Ab(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((_) => r.map((E) => t(h, _, E, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let Cd = !1;
function Sd(e, t, n = {}) {
  const { window: i = Dh, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Fa,
    cancel: Fa,
    trigger: Fa
  } : Fa;
  if (kb && !Cd) {
    Cd = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((I) => I.addEventListener("click", Fa, O)), i.document.documentElement.addEventListener("click", Fa, O);
  }
  let l = !0;
  const d = (O) => vi(a).some((I) => {
    if (typeof I == "string") return Array.from(i.document.querySelectorAll(I)).some((M) => M === O.target || O.composedPath().includes(M));
    {
      const M = Er(I);
      return M && (O.target === M || O.composedPath().includes(M));
    }
  });
  function u(O) {
    const I = vi(O);
    return I && I.$.subTree.shapeFlag === 16;
  }
  function h(O, I) {
    const M = vi(O), K = M.$.subTree && M.$.subTree.children;
    return K == null || !Array.isArray(K) ? !1 : K.some(($) => $.el === I.target || I.composedPath().includes($.el));
  }
  const _ = (O) => {
    const I = Er(e);
    if (O.target != null && !(!(I instanceof Element) && u(e) && h(e, O)) && !(!I || I === O.target || O.composedPath().includes(I))) {
      if ("detail" in O && O.detail === 0 && (l = !d(O)), !l) {
        l = !0;
        return;
      }
      t(O);
    }
  };
  let E = !1;
  const N = [
    Za(i, "click", (O) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), _(O));
    }, {
      passive: !0,
      capture: r
    }),
    Za(i, "pointerdown", (O) => {
      const I = Er(e);
      l = !d(O) && !!(I && !O.composedPath().includes(I));
    }, { passive: !0 }),
    s && Za(i, "blur", (O) => {
      setTimeout(() => {
        const I = Er(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !I?.contains(i.document.activeElement) && t(O);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => N.forEach((O) => O());
  return o ? {
    stop: A,
    cancel: () => {
      l = !1;
    },
    trigger: (O) => {
      l = !0, _(O), l = !1;
    }
  } : A;
}
function xb(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ It({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ It({
    x: 0,
    y: 0
  }), d = Y(() => o.x - l.x), u = Y(() => o.y - l.y), { max: h, abs: _ } = Math, E = Y(() => h(_(d.value), _(u.value)) >= n), N = /* @__PURE__ */ kf(!1), A = Y(() => E.value ? _(d.value) > _(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), O = (B) => [B.touches[0].clientX, B.touches[0].clientY], I = (B, j) => {
    o.x = B, o.y = j;
  }, M = (B, j) => {
    l.x = B, l.y = j;
  }, K = {
    passive: s,
    capture: !s
  }, $ = (B) => {
    N.value && a?.(B, A.value), N.value = !1;
  }, le = [
    Za(e, "touchstart", (B) => {
      if (B.touches.length !== 1) return;
      const [j, Z] = O(B);
      I(j, Z), M(j, Z), r?.(B);
    }, K),
    Za(e, "touchmove", (B) => {
      if (B.touches.length !== 1) return;
      const [j, Z] = O(B);
      M(j, Z), K.capture && !K.passive && Math.abs(d.value) > Math.abs(u.value) && B.preventDefault(), !N.value && E.value && (N.value = !0), N.value && i?.(B);
    }, K),
    Za(e, ["touchend", "touchcancel"], $, K)
  ];
  return {
    isSwiping: N,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: d,
    lengthY: u,
    stop: () => le.forEach((B) => B())
  };
}
var Lb = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = rg(), r = ag(), s = /* @__PURE__ */ st([]), o = Y(() => s.value.reduce((z, v) => (z[~~v.id] = v) && z, {})), l = Y(() => s.value.length), d = /* @__PURE__ */ st(null), u = /* @__PURE__ */ st(!1), h = /* @__PURE__ */ st({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), _ = /* @__PURE__ */ st({
      splitter: null,
      timeoutId: null
    }), E = Y(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), N = () => {
      document.addEventListener("mousemove", I, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", I, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", I, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", I, { passive: !1 }), document.removeEventListener("touchend", M));
    }, O = (z, v) => {
      let w = z.target.closest(".splitpanes__splitter");
      if (w) {
        let { left: k, top: L } = w.getBoundingClientRect(), { clientX: x, clientY: F } = "ontouchstart" in window && z.touches ? z.touches[0] : z;
        h.value.cursorOffset = i.horizontal ? F - L : x - k;
      }
      N(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, I = (z) => {
      h.value.mouseDown && (z.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        Z(B(z)), it("resize", { event: z }, !0);
      }));
    }, M = (z) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), it("resized", { event: z }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, K = (z, v) => {
      "ontouchstart" in window && (z.preventDefault(), _.value.splitter === v ? (clearTimeout(_.value.timeoutId), _.value.timeoutId = null, $(z, v), _.value.splitter = null) : (_.value.splitter = v, _.value.timeoutId = setTimeout(() => _.value.splitter = null, 500))), h.value.dragging || it("splitter-click", {
        event: z,
        index: v
      }, !0);
    }, $ = (z, v) => {
      if (it("splitter-dblclick", {
        event: z,
        index: v
      }, !0), i.maximizePanes) {
        let w = 0;
        s.value = s.value.map((k, L) => (k.size = L === v ? k.max : k.min, L !== v && (w += k.min), k)), s.value[v].size -= w, it("pane-maximize", {
          event: z,
          index: v,
          pane: s.value[v]
        }), it("resized", {
          event: z,
          index: v
        }, !0);
      }
    }, le = (z, v) => {
      if (!i.keyboardStep) return;
      let w = i.horizontal ? z.key === "ArrowDown" : z.key === "ArrowRight", k = i.horizontal ? z.key === "ArrowUp" : z.key === "ArrowLeft";
      if (!w && !k) return;
      z.preventDefault(), h.value.activeSplitter = v;
      let L = (w ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), x = J(v) + s.value[v].size;
      se(Math.min(Math.max(x + L * i.keyboardStep, 0), 100)), it("resize", { event: z }, !0), it("resized", { event: z }, !0), h.value.activeSplitter = null;
    }, ue = (z, v) => {
      let w = o.value[v];
      w && it("pane-click", {
        event: z,
        index: w.index,
        pane: w
      });
    }, B = (z) => {
      let v = d.value.getBoundingClientRect(), { clientX: w, clientY: k } = "ontouchstart" in window && z.touches ? z.touches[0] : z;
      return {
        x: w - (i.horizontal ? 0 : h.value.cursorOffset) - v.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - v.top
      };
    }, j = (z) => {
      z = z[i.horizontal ? "y" : "x"];
      let v = d.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (z = v - z), z * 100 / v;
    }, Z = (z) => {
      se(j(z));
    }, se = (z) => {
      let v = h.value.activeSplitter;
      if (v === null || v >= s.value.length - 1) return;
      let w = {
        prevPanesSize: J(v),
        nextPanesSize: ne(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : w.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : w.nextPanesSize);
      z = Math.max(Math.min(z, L), k);
      let x = [v, v + 1], F = s.value[x[0]] || null, W = s.value[x[1]] || null, G = F !== null && F.max < 100 && z >= F.max + w.prevPanesSize, ee = W !== null && W.max < 100 && z <= 100 - (W.max + ne(v + 1));
      if (G || ee) {
        G ? (F.size = F.max, W.size = Math.min(Math.max(100 - F.max - w.prevPanesSize - w.nextPanesSize, W.min), W.max)) : (F.size = Math.min(Math.max(100 - W.max - w.prevPanesSize - ne(v + 1), F.min), F.max), W.size = W.max);
        return;
      }
      if (i.pushOtherPanes) {
        let V = de(w, z);
        if (!V) return;
        ({ sums: w, panesToResize: x } = V), F = s.value[x[0]] || null, W = s.value[x[1]] || null;
      }
      F !== null && (F.size = Math.min(Math.max(z - w.prevPanesSize - w.prevReachedMinPanes, F.min), F.max)), W !== null && (W.size = Math.min(Math.max(100 - z - w.nextPanesSize - w.nextReachedMinPanes, W.min), W.max));
    }, de = (z, v) => {
      let w = h.value.activeSplitter, k = [w, w + 1];
      if (v < z.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = P(w).index, z.prevReachedMinPanes = 0, k[0] < w && s.value.forEach((L, x) => {
          x > k[0] && x <= w && (L.size = L.min, z.prevReachedMinPanes += L.min);
        }), k[0] === void 0) return z.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((L, x) => {
          x > 0 && x <= w && (L.size = L.min, z.prevReachedMinPanes += L.min);
        }), s.value[k[1]].size = 100 - z.prevReachedMinPanes - s.value[0].min - z.prevPanesSize - z.nextPanesSize, null;
        z.prevPanesSize = J(k[0]);
      }
      return v > 100 - z.nextPanesSize - s.value[k[1]].min && (k[1] = D(w).index, z.nextReachedMinPanes = 0, k[1] > w + 1 && s.value.forEach((L, x) => {
        x > w && x < k[1] && (L.size = L.min, z.nextReachedMinPanes += L.min);
      }), z.nextPanesSize = k[1] === void 0 ? 0 : ne(k[1] - 1), k[1] === void 0) ? (z.nextReachedMinPanes = 0, s.value.forEach((L, x) => {
        x >= w + 1 && (L.size = L.min, z.nextReachedMinPanes += L.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - z.prevPanesSize - ne(k[0] - 1)), null) : {
        sums: z,
        panesToResize: k
      };
    }, J = (z) => s.value.reduce((v, w, k) => v + (k < z ? w.size : 0), 0), ne = (z) => s.value.reduce((v, w, k) => v + (k > z + 1 ? w.size : 0), 0), P = (z) => [...s.value].reverse().find((v) => v.index < z && v.size > v.min) || {}, D = (z) => s.value.find((v) => v.index > z + 1 && v.size > v.min) || {}, X = () => {
      let z = Array.from(d.value?.children || []);
      for (let v of z) {
        let w = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !w && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ae = (z, v, w = !1) => {
      let k = z - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), w || (L.onmousedown = (x) => O(x, k), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (x) => O(x, k)), L.onclick = (x) => K(x, k + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (x) => le(x, k))), L.ondblclick = (x) => $(x, k + 1), v.parentNode.insertBefore(L, v);
    }, ie = (z) => {
      z.onmousedown = null, z.onclick = null, z.ondblclick = null, z.onkeydown = null, z.remove();
    }, fe = () => {
      let z = Array.from(d.value?.children || []);
      for (let w of z) w.className.includes("splitpanes__splitter") && ie(w);
      let v = 0;
      for (let w of z) w.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? ae(v, w, !0) : v && ae(v, w), v++);
    }, pe = ({ uid: z, ...v }) => {
      let w = o.value[z];
      for (let [k, L] of Object.entries(v)) w[k] = L;
    }, Se = !1, me = (z) => {
      let v = -1;
      Array.from(d.value?.children || []).some((w) => (w.className.includes("splitpanes__pane") && v++, w.isSameNode(z.el))), s.value.splice(v, 0, {
        ...z,
        index: v
      }), s.value.forEach((w, k) => w.index = k), u.value && !Se && (Se = !0, gi(() => {
        fe(), ke({ addedPane: s.value[v] }), it("pane-add", { pane: s.value[v] }), Se = !1;
      }));
    }, Ye = (z) => {
      let v = s.value.findIndex((k) => k.id === z);
      s.value[v].el = null;
      let w = s.value.splice(v, 1)[0];
      s.value.forEach((k, L) => k.index = L), gi(() => {
        fe(), it("pane-remove", { pane: w }), ke({ removedPane: {
          ...w
        } });
      });
    }, ke = (z = {}) => {
      !z.addedPane && !z.removedPane ? ot() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? pt(z) : He(), u.value && it("resized");
    }, He = () => {
      let z = 100 / l.value, v = 100, w = [], k = [];
      for (let L of s.value) L.size = Math.max(Math.min(z, L.max), L.min), v -= L.size, L.size >= L.max && w.push(L.id), L.size <= L.min && k.push(L.id);
      Math.abs(v) > 0.1 && Ut(v, w, k);
    }, ot = () => {
      let z = 100, v = [], w = [], k = 0;
      for (let x of s.value) z -= x.size, x.givenSize !== null && k++, x.size >= x.max && v.push(x.id), x.size <= x.min && w.push(x.id);
      let L = 100;
      if (z > 0.1) {
        for (let x of s.value) x.givenSize === null && (x.size = Math.max(Math.min(z / (l.value - k), x.max), x.min)), L -= x.size;
        L > 0.1 && Ut(L, v, w);
      }
    }, pt = ({ addedPane: z, removedPane: v } = {}) => {
      let w = s.value.reduce((G, ee) => G + (ee.givenSize === null ? 0 : ee.givenSize), 0), k = s.value.filter((G) => G.givenSize === null).length, L = k > 0 ? (100 - w) / k : 0, x = 0, F = [], W = [];
      for (let G of s.value) x -= G.size, G.size >= G.max && F.push(G.id), G.size <= G.min && W.push(G.id);
      if (!(Math.abs(x) < 0.1)) {
        x = 100;
        for (let G of s.value) G.givenSize === null && (G.size = Math.max(Math.min(L, G.max), G.min)), x -= G.size, G.size >= G.max && F.push(G.id), G.size <= G.min && W.push(G.id);
        Math.abs(x) > 0.1 && Ut(x, F, W);
      }
    }, Ut = (z, v, w) => {
      let k;
      k = z > 0 ? z / (l.value - v.length) : z / (l.value - w.length), s.value.forEach((L, x) => {
        if (z > 0 && !v.includes(L.id)) {
          let F = Math.max(Math.min(L.size + k, L.max), L.min), W = F - L.size;
          z -= W, L.size = F;
        } else if (!w.includes(L.id)) {
          let F = Math.max(Math.min(L.size + k, L.max), L.min), W = F - L.size;
          z -= W, L.size = F;
        }
      }), Math.abs(z) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, it = (z, v = void 0, w = !1) => {
      let k = v?.index ?? h.value.activeSplitter ?? null;
      n(z, {
        ...v,
        ...k !== null && { index: k },
        ...w && k !== null && {
          prevPane: s.value[k - +!!i.firstSplitter],
          nextPane: s.value[k + +!i.firstSplitter]
        },
        panes: s.value.map((L) => ({
          min: L.min,
          max: L.max,
          size: L.size
        }))
      });
    };
    Zt(() => i.firstSplitter, () => fe()), Zt(() => i.horizontal, (z) => gi(() => {
      n("direction-changed", {
        horizontal: z,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), ji(() => {
      X(), fe(), ke(), it("ready"), u.value = !0;
    }), er(() => u.value = !1);
    let yn = () => {
      let { class: z, ...v } = a;
      return qt("div", {
        ref: d,
        class: [E.value, z],
        ...v
      }, r.default?.());
    };
    return hn("panes", s), hn("indexedPanes", o), hn("horizontal", Y(() => i.horizontal)), hn("requestUpdate", pe), hn("onPaneAdd", me), hn("onPaneRemove", Ye), hn("onPaneClick", ue), (z, v) => (b(), $e(zc(yn)));
  }
}), Rb = {
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
    let t = e, n = Dt("requestUpdate"), i = Dt("onPaneAdd"), a = Dt("horizontal"), r = Dt("onPaneRemove"), s = Dt("onPaneClick"), o = Ca()?.uid, l = Dt("indexedPanes"), d = Y(() => l.value[o]), u = /* @__PURE__ */ st(null), h = Y(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), _.value);
    }), _ = Y(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = Y(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), N = Y(() => {
      let A = d.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return Zt(() => h.value, (A) => n({
      uid: o,
      size: A
    })), Zt(() => _.value, (A) => n({
      uid: o,
      min: A
    })), Zt(() => E.value, (A) => n({
      uid: o,
      max: A
    })), ji(() => {
      i({
        id: o,
        el: u.value,
        min: _.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), er(() => r(o)), (A, O) => (b(), C("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: O[0] ||= (I) => g(s)(I, A._.uid),
      style: rn(N.value)
    }, [Le(A.$slots, "default")], 4));
  }
}, Ib = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Pb = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", Db = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Mb = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const qc = 1024, Mh = qc / 2, Zs = (e) => document.documentElement.clientWidth < e, $h = /* @__PURE__ */ st(Zs(qc)), Fh = /* @__PURE__ */ st(Zs(Mh));
window.addEventListener("resize", () => {
  $h.value = Zs(qc), Fh.value = Zs(Mh);
}, { passive: !0 });
function ds() {
  return /* @__PURE__ */ Vr($h);
}
function $b() {
  return /* @__PURE__ */ Vr(Fh);
}
class Fb {
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
    return Hn("", t, n, i, a, { bundle: this.bundle });
  }
}
class zb {
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
    return this.setLanguage(Jo().replace("-", "_"));
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
    const t = new Fb((n) => ub(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function Ub() {
  return new zb();
}
const zh = Ub().detectLanguage().build(), yt = (...e) => zh.gettext(...e);
function Vi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Jo() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        zh.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const Bb = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Hb = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], jb = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Vb = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Gb = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Kb = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Wb = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], qb = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], Yb = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const Xb = /* @__PURE__ */ Symbol(""), [Zb] = window.OC?.config?.version?.split(".") ?? [], Uh = Number.parseInt(Zb ?? "35"), Jb = Uh < 32, Gi = Uh < 34, Qb = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function ey() {
  return Dt(Qb, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const We = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, ty = { class: "button-vue__wrapper" }, ny = { class: "button-vue__icon" }, iy = { class: "button-vue__text" }, ay = /* @__PURE__ */ kt({
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
    const n = e, i = t, { formBoxItemClass: a } = ey(), r = Dt(Xb, null) !== null, s = Y(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = Y(() => s.value === "button" && typeof n.pressed == "boolean"), l = Y(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = Y(() => l.value.startsWith("tertiary")), u = Y(() => n.alignment.split("-")[0]), h = Y(() => n.alignment.includes("-")), _ = Dt("NcPopover:trigger:attrs", () => ({}), !1), E = Y(() => _()), N = Y(() => {
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
    function A(O) {
      o.value && i("update:pressed", !n.pressed), i("click", O);
    }
    return (O, I) => (b(), $e(zc(s.value), zt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(Jb),
          "button-vue--legacy34": g(Gi)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: A }), {
      default: Te(() => [
        c("span", ty, [
          c("span", ny, [
            Le(O.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", iy, [
            Le(O.$slots, "default", {}, () => [
              Ae(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), qn = /* @__PURE__ */ We(ay, [["__scopeId", "data-v-47ce59a3"]]), ry = ["aria-hidden", "aria-label"], sy = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, oy = ["d"], ly = ["innerHTML"], cy = /* @__PURE__ */ kt({
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
    Qg((a) => ({
      fb515064: n.value
    }));
    const t = e, n = Y(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = Y(() => {
      if (!t.svg || t.path)
        return;
      const a = kh.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (b(), C("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ce(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (b(), C("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, ly)) : (b(), C("svg", sy, [
        c("path", { d: e.path }, null, 8, oy)
      ]))
    ], 10, ry));
  }
}), Qo = /* @__PURE__ */ We(cy, [["__scopeId", "data-v-aaedb1c3"]]);
dy();
function uy(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), bi("csrf-token-update", { token: e, _internal: !0 }));
}
function dy() {
  Ih("csrf-token-update", ({ token: e, _internal: t }) => {
    t || uy(e);
  });
}
Nh("public").persist().build();
let za;
function Ed(e, t) {
  return e ? e.getAttribute(t) : null;
}
function fy() {
  if (za !== void 0)
    return za;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Ed(e, "data-user");
  return t === null ? (za = null, za) : (za = {
    uid: t,
    displayName: Ed(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, za);
}
var dt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(dt || {});
class hy {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + dt[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === dt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case dt.Debug:
          console.debug(this.formatMessage(n, dt.Debug, i), i);
          break;
        case dt.Info:
          console.info(this.formatMessage(n, dt.Info, i), i);
          break;
        case dt.Warn:
          console.warn(this.formatMessage(n, dt.Warn, i), i);
          break;
        case dt.Error:
          console.error(this.formatMessage(n, dt.Error, i), i);
          break;
        case dt.Fatal:
        default:
          console.error(this.formatMessage(n, dt.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(dt.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(dt.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(dt.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(dt.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(dt.Fatal, t, Object.assign({}, this.context, n));
  }
}
function py(e) {
  return new hy(e);
}
class vy {
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
    const t = fy();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? dt.Warn, window._oc_debug && (t.context.level = dt.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function gy() {
  return new vy(py);
}
const ya = gy().detectUser().setApp("@nextcloud/vue").build();
function my(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Bh = "missing-app-name";
try {
  Bh = "library";
} catch {
  ya.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const by = Bh;
let yy = "";
try {
  yy = "0.1.0-alpha.167";
} catch {
  ya.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Hh() {
  return Dt("appName", by);
}
const _y = my(() => {
  const e = Gc("core", "apps", []), t = Hh();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), uc = cb();
Vi(Wb);
const wy = /* @__PURE__ */ kt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = ds();
    Zt(t, n), ji(() => {
      n(t.value);
    }), er(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && bi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (b(), $e(g(qn), {
      "aria-label": g(yt)("Go back to the list"),
      class: Ce(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(yt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Te(() => [
        ge(g(Qo), {
          directional: "",
          path: g(Ib)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), Cy = /* @__PURE__ */ We(wy, [["__scopeId", "data-v-a28923a1"]]), Td = Nh("nextcloud").persist().build(), Sy = fb().theming?.name ?? "Nextcloud", Ey = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: Cy,
    Pane: Rb,
    Splitpanes: Lb
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
      appName: Hh(),
      localizedAppName: _y(),
      isMobile: ds(),
      isRtl: uc
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
        return ya.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(Sy), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = xb(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? bi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && bi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      Td.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ya.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Td.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ya.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, Ty = {
  key: 0,
  class: "hidden-visually"
}, Ay = { class: "app-content-wrapper__list" }, ky = {
  key: 1,
  class: "app-content-wrapper"
};
function Oy(e, t, n, i, a, r) {
  const s = ze("NcAppContentDetailsToggle"), o = ze("Pane"), l = ze("Splitpanes");
  return b(), C("main", {
    id: "app-content-vue",
    class: Ce(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (b(), C("h1", Ty, p(n.pageHeading), 1)) : U("", !0),
    e.$slots.list ? (b(), C(ce, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (b(), C("div", {
        key: 0,
        class: Ce(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (b(), $e(s, {
          key: 0,
          onClick: Je(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : U("", !0),
        qe(c("div", Ay, [
          Le(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Ya, !n.showDetails]
        ]),
        n.showDetails ? Le(e.$slots, "default", { key: 1 }, void 0, !0) : U("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (b(), C("div", ky, [
        ge(l, {
          horizontal: n.layout === "horizontal-split",
          class: Ce(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Te(() => [
            ge(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Te(() => [
                Le(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            ge(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Te(() => [
                Le(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : U("", !0)
    ], 64)) : U("", !0),
    e.$slots.list ? U("", !0) : Le(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const Ny = /* @__PURE__ */ We(Ey, [["render", Oy], ["__scopeId", "data-v-51427d61"]]);
var jh = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Js = /* @__PURE__ */ jh.join(","), Vh = typeof Element > "u", wa = Vh ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Qs = !Vh && Element.prototype.getRootNode ? function(e) {
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
}, xy = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Gh = function(t, n, i) {
  if (eo(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Js));
  return n && wa.call(t, Js) && a.unshift(t), a = a.filter(i), a;
}, to = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!eo(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, d = to(l, !0, i);
        i.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var u = wa.call(s, Js);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), _ = !eo(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && _) {
          var E = to(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: s,
            candidates: E
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Kh = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ha = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || xy(t)) && !Kh(t) ? 0 : t.tabIndex;
}, Ly = function(t, n) {
  var i = ha(t);
  return i < 0 && n && !Kh(t) ? 0 : i;
}, Ry = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Wh = function(t) {
  return t.tagName === "INPUT";
}, Iy = function(t) {
  return Wh(t) && t.type === "hidden";
}, Py = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, Dy = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, My = function(t) {
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
  var r = Dy(a, t.form);
  return !r || r === t;
}, $y = function(t) {
  return Wh(t) && t.type === "radio";
}, Fy = function(t) {
  return $y(t) && !My(t);
}, zy = function(t) {
  var n, i = t && Qs(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = Qs(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, Ad = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, Uy = function(t, n) {
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
  var l = wa.call(t, "details>summary:first-of-type"), d = l ? t.parentElement : t;
  if (wa.call(d, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, _ = Qs(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return Ad(t);
        t.assignedSlot ? t = t.assignedSlot : !h && _ !== t.ownerDocument ? t = _.host : t = h;
      }
      t = u;
    }
    if (zy(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Ad(t);
  return !1;
}, By = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return wa.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, no = function(t, n) {
  return !(n.disabled || Iy(n) || Uy(n, t) || // For a details element with a summary, the summary element gets the focus
  Py(n) || By(n));
}, dc = function(t, n) {
  return !(Fy(n) || ha(n) < 0 || !no(t, n));
}, Hy = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, qh = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = Ly(o, s), d = s ? qh(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(Ry).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, jy = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = to([t], n.includeContainer, {
    filter: dc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Hy
  }) : i = Gh(t, n.includeContainer, dc.bind(null, n)), qh(i);
}, Vy = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = to([t], n.includeContainer, {
    filter: no.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Gh(t, n.includeContainer, no.bind(null, n)), i;
}, Ua = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return wa.call(t, Js) === !1 ? !1 : dc(n, t);
}, Gy = /* @__PURE__ */ jh.concat("iframe:not([inert]):not([inert] *)").join(","), zl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return wa.call(t, Gy) === !1 ? !1 : no(n, t);
};
function fc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Ky(e) {
  if (Array.isArray(e)) return fc(e);
}
function kd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Yh(e)) || t) {
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
function Wy(e, t, n) {
  return (t = Jy(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function qy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Yy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Od(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Nd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Od(Object(n), !0).forEach(function(i) {
      Wy(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Od(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Xy(e) {
  return Ky(e) || qy(e) || Yh(e) || Yy();
}
function Zy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Jy(e) {
  var t = Zy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Yh(e, t) {
  if (e) {
    if (typeof e == "string") return fc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fc(e, t) : void 0;
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
}, Qy = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, e_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Lr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, t_ = function(t) {
  return Lr(t) && !t.shiftKey;
}, n_ = function(t) {
  return Lr(t) && t.shiftKey;
}, xd = function(t) {
  return setTimeout(t, 0);
}, br = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Ss = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, i_ = [], Yc = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || i_, r = Nd({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: t_,
    isKeyBackward: n_
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
  }, o, l = function(P, D, X) {
    return P && P[D] !== void 0 ? P[D] : r[X || D];
  }, d = function(P, D) {
    var X = typeof D?.composedPath == "function" ? D.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ae) {
      var ie = ae.container, fe = ae.tabbableNodes;
      return ie.contains(P) || X?.includes(ie) || fe.find(function(pe) {
        return pe === P;
      });
    });
  }, u = function(P) {
    var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = D.hasFallback, ae = X === void 0 ? !1 : X, ie = D.params, fe = ie === void 0 ? [] : ie, pe = r[P];
    if (typeof pe == "function" && (pe = pe.apply(void 0, Xy(fe))), pe === !0 && (pe = void 0), !pe) {
      if (pe === void 0 || pe === !1)
        return pe;
      throw new Error("`".concat(P, "` was specified but was not a node, or did not return a node"));
    }
    var Se = pe;
    if (typeof pe == "string") {
      try {
        Se = i.querySelector(pe);
      } catch (me) {
        throw new Error("`".concat(P, '` appears to be an invalid selector; error="').concat(me.message, '"'));
      }
      if (!Se && !ae)
        throw new Error("`".concat(P, "` as selector refers to no known node"));
    }
    return Se;
  }, h = function(P) {
    var D = P.activeElement;
    return D ? D.shadowRoot && D.shadowRoot.activeElement !== null ? h(D.shadowRoot) : D : null;
  }, _ = function() {
    var P = u("initialFocus", {
      hasFallback: !0
    });
    if (P === !1)
      return !1;
    if (P === void 0 || P && !zl(P, r.tabbableOptions)) {
      var D = h(i);
      if (d(D) >= 0)
        P = D;
      else {
        var X = s.tabbableGroups[0], ae = X && X.firstTabbableNode;
        P = ae || u("fallbackFocus");
      }
    } else P === null && (P = u("fallbackFocus"));
    if (!P)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return P;
  }, E = function() {
    if (s.containerGroups = s.containers.map(function(P) {
      var D = jy(P, r.tabbableOptions), X = Vy(P, r.tabbableOptions), ae = D.length > 0 ? D[0] : void 0, ie = D.length > 0 ? D[D.length - 1] : void 0, fe = X.find(function(me) {
        return Ua(me);
      }), pe = X.slice().reverse().find(function(me) {
        return Ua(me);
      }), Se = !!D.find(function(me) {
        return ha(me) > 0;
      });
      return {
        container: P,
        tabbableNodes: D,
        focusableNodes: X,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Se,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ae,
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
        firstDomTabbableNode: fe,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: pe,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ye) {
          var ke = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, He = D.indexOf(Ye);
          return He < 0 ? ke ? X.slice(X.indexOf(Ye) + 1).find(function(ot) {
            return Ua(ot);
          }) : X.slice(0, X.indexOf(Ye)).reverse().find(function(ot) {
            return Ua(ot);
          }) : D[He + (ke ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(P) {
      return P.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(P) {
      return P.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, N = function(P) {
    if (P !== !1 && P !== h(document)) {
      if (!P || !P.focus) {
        N(_());
        return;
      }
      P.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = P, Qy(P) && P.select();
    }
  }, A = function(P) {
    var D = u("setReturnFocus", {
      params: [P]
    });
    return D || (D === !1 ? !1 : P);
  }, O = function(P) {
    var D = P.target, X = P.event, ae = P.isBackward, ie = ae === void 0 ? !1 : ae;
    D = D || Ss(X), E();
    var fe = null;
    if (s.tabbableGroups.length > 0) {
      var pe = d(D, X), Se = pe >= 0 ? s.containerGroups[pe] : void 0;
      if (pe < 0)
        ie ? fe = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : fe = s.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var me = s.tabbableGroups.findIndex(function(Ut) {
          var it = Ut.firstTabbableNode;
          return D === it;
        });
        if (me < 0 && (Se.container === D || zl(D, r.tabbableOptions) && !Ua(D, r.tabbableOptions) && !Se.nextTabbableNode(D, !1)) && (me = pe), me >= 0) {
          var Ye = me === 0 ? s.tabbableGroups.length - 1 : me - 1, ke = s.tabbableGroups[Ye];
          fe = ha(D) >= 0 ? ke.lastTabbableNode : ke.lastDomTabbableNode;
        } else Lr(X) || (fe = Se.nextTabbableNode(D, !1));
      } else {
        var He = s.tabbableGroups.findIndex(function(Ut) {
          var it = Ut.lastTabbableNode;
          return D === it;
        });
        if (He < 0 && (Se.container === D || zl(D, r.tabbableOptions) && !Ua(D, r.tabbableOptions) && !Se.nextTabbableNode(D)) && (He = pe), He >= 0) {
          var ot = He === s.tabbableGroups.length - 1 ? 0 : He + 1, pt = s.tabbableGroups[ot];
          fe = ha(D) >= 0 ? pt.firstTabbableNode : pt.firstDomTabbableNode;
        } else Lr(X) || (fe = Se.nextTabbableNode(D));
      }
    } else
      fe = u("fallbackFocus");
    return fe;
  }, I = function(P) {
    var D = Ss(P);
    if (!(d(D, P) >= 0)) {
      if (br(r.clickOutsideDeactivates, P)) {
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
      br(r.allowOutsideClick, P) || P.preventDefault();
    }
  }, M = function(P) {
    var D = Ss(P), X = d(D, P) >= 0;
    if (X || D instanceof Document)
      X && (s.mostRecentlyFocusedNode = D);
    else {
      P.stopImmediatePropagation();
      var ae, ie = !0;
      if (s.mostRecentlyFocusedNode)
        if (ha(s.mostRecentlyFocusedNode) > 0) {
          var fe = d(s.mostRecentlyFocusedNode), pe = s.containerGroups[fe].tabbableNodes;
          if (pe.length > 0) {
            var Se = pe.findIndex(function(me) {
              return me === s.mostRecentlyFocusedNode;
            });
            Se >= 0 && (r.isKeyForward(s.recentNavEvent) ? Se + 1 < pe.length && (ae = pe[Se + 1], ie = !1) : Se - 1 >= 0 && (ae = pe[Se - 1], ie = !1));
          }
        } else
          s.containerGroups.some(function(me) {
            return me.tabbableNodes.some(function(Ye) {
              return ha(Ye) > 0;
            });
          }) || (ie = !1);
      else
        ie = !1;
      ie && (ae = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), N(ae || s.mostRecentlyFocusedNode || _());
    }
    s.recentNavEvent = void 0;
  }, K = function(P) {
    var D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = P;
    var X = O({
      event: P,
      isBackward: D
    });
    X && (Lr(P) && P.preventDefault(), N(X));
  }, $ = function(P) {
    (r.isKeyForward(P) || r.isKeyBackward(P)) && K(P, r.isKeyBackward(P));
  }, le = function(P) {
    e_(P) && br(r.escapeDeactivates, P) !== !1 && (P.preventDefault(), o.deactivate());
  }, ue = function(P) {
    var D = Ss(P);
    d(D, P) >= 0 || br(r.clickOutsideDeactivates, P) || br(r.allowOutsideClick, P) || (P.preventDefault(), P.stopImmediatePropagation());
  }, B = function() {
    if (s.active) {
      hi.activateTrap(a, o);
      var P;
      return r.delayInitialFocus ? P = new Promise(function(D) {
        s.delayInitialFocusTimer = xd(function() {
          N(_()), D();
        });
      }) : N(_()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", I, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", I, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", ue, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", $, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", le), P;
    }
  }, j = function(P) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var D = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), ae = kd(P), ie;
    try {
      for (ae.s(); !(ie = ae.n()).done; ) {
        var fe = ie.value;
        D.add(fe);
        for (var pe = typeof ShadowRoot < "u" && fe.getRootNode() instanceof ShadowRoot, Se = fe; Se; ) {
          D.add(Se);
          var me = Se.parentElement, Ye = [];
          me ? Ye = me.children : !me && pe && (Ye = Se.getRootNode().children, me = Se.getRootNode().host, pe = typeof ShadowRoot < "u" && me.getRootNode() instanceof ShadowRoot);
          var ke = kd(Ye), He;
          try {
            for (ke.s(); !(He = ke.n()).done; ) {
              var ot = He.value;
              X.add(ot);
            }
          } catch (pt) {
            ke.e(pt);
          } finally {
            ke.f();
          }
          Se = me;
        }
      }
    } catch (pt) {
      ae.e(pt);
    } finally {
      ae.f();
    }
    D.forEach(function(pt) {
      X.delete(pt);
    }), s.adjacentElements = X;
  }, Z = function() {
    if (s.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", I, !0), i.removeEventListener("touchstart", I, !0), i.removeEventListener("click", ue, !0), i.removeEventListener("keydown", $, !0), i.removeEventListener("keydown", le), o;
  }, se = function(P) {
    var D = s.mostRecentlyFocusedNode;
    if (D) {
      var X = P.some(function(ie) {
        var fe = Array.from(ie.removedNodes);
        return fe.some(function(pe) {
          return pe === D || typeof pe.contains == "function" && pe.contains(D);
        });
      });
      if (X && s.containers.some(function(ie) {
        return ie?.isConnected;
      })) {
        E();
        var ae = _();
        N(ae);
      }
    }
  }, de = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, J = function() {
    de && (de.disconnect(), s.active && !s.paused && s.containers.map(function(P) {
      de.observe(P, {
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
      var D = l(P, "onActivate"), X = l(P, "onPostActivate"), ae = l(P, "checkCanFocusTrap"), ie = hi.getActiveTrap(a), fe = !1;
      if (ie && !ie.paused) {
        var pe;
        (pe = ie._setSubtreeIsolation) === null || pe === void 0 || pe.call(ie, !1), fe = !0;
      }
      try {
        ae || E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), D?.({
          trap: o
        });
        var Se = function() {
          ae && E();
          var ke = function() {
            o._setSubtreeIsolation(!0), J(), X?.({
              trap: o
            });
          }, He = B();
          He ? He.then(ke) : ke();
        };
        if (ae)
          return ae(s.containers.concat()).then(Se, Se), this;
        Se();
      } catch (Ye) {
        if (ie === hi.getActiveTrap(a) && fe) {
          var me;
          (me = ie._setSubtreeIsolation) === null || me === void 0 || me.call(ie, !0);
        }
        throw Ye;
      }
      return this;
    },
    deactivate: function(P) {
      if (!s.active)
        return this;
      var D = Nd({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, P);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), Z(), s.active = !1, s.paused = !1, J(), hi.deactivateTrap(a, o);
      var X = l(D, "onDeactivate"), ae = l(D, "onPostDeactivate"), ie = l(D, "checkCanReturnFocus"), fe = l(D, "delayReturnFocus"), pe = l(D, "returnFocus", "returnFocusOnDeactivate");
      X?.({
        trap: o
      });
      var Se = function() {
        pe && N(A(s.nodeFocusedBeforeActivation)), ae?.({
          trap: o
        });
      }, me = function() {
        fe && pe ? xd(Se) : Se();
      };
      return pe && ie ? (ie(A(s.nodeFocusedBeforeActivation)).then(me, me), this) : (me(), this);
    },
    pause: function(P) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, P)) : this;
    },
    unpause: function(P) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, P)) : this;
    },
    updateContainerElements: function(P) {
      var D = [].concat(P).filter(Boolean);
      return s.containers = D.map(function(X) {
        return typeof X == "string" ? i.querySelector(X) : X;
      }), r.isolateSubtrees && j(s.containers), s.active && (E(), s.paused || o._setSubtreeIsolation(!0)), J(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(P, D) {
        if (s.paused === P)
          return this;
        if (s.paused = P, P) {
          var X = l(D, "onPause"), ae = l(D, "onPostPause");
          X?.({
            trap: o
          }), Z(), o._setSubtreeIsolation(!1), J(), ae?.({
            trap: o
          });
        } else {
          var ie = l(D, "onUnpause"), fe = l(D, "onPostUnpause");
          ie?.({
            trap: o
          });
          var pe = function() {
            E();
            var me = function() {
              o._setSubtreeIsolation(!0), J(), fe?.({
                trap: o
              });
            }, Ye = B();
            Ye ? Ye.then(me) : me();
          };
          pe();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(P) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(D) {
          var X;
          P ? r.isolateSubtrees === "aria-hidden" ? ((D.ariaHidden === "true" || ((X = D.getAttribute("aria-hidden")) === null || X === void 0 ? void 0 : X.toLowerCase()) === "true") && s.alreadySilent.add(D), D.setAttribute("aria-hidden", "true")) : ((D.inert || D.hasAttribute("inert")) && s.alreadySilent.add(D), D.setAttribute("inert", !0)) : s.alreadySilent.has(D) || (r.isolateSubtrees === "aria-hidden" ? D.removeAttribute("aria-hidden") : D.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const Xh = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), a_ = /* @__PURE__ */ kt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Xh]: {
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
function r_(e, t, n, i, a, r) {
  return b(), C("ul", {
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
      style: rn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Le(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Zh = /* @__PURE__ */ We(a_, [["render", r_], ["__scopeId", "data-v-3e73e246"]]);
function Qr() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function s_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Qr()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Qr().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Jh = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Qh = /* @__PURE__ */ Symbol.for("NcContent:selector");
Vi(Vb);
const o_ = { class: "app-navigation-toggle-wrapper" }, l_ = /* @__PURE__ */ kt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Qf(e, "open"), n = Y(() => t.value ? yt("Close navigation") : yt("Open navigation"));
    return (i, a) => (b(), C("div", o_, [
      ge(g(qn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Te(() => [
          ge(Qo, {
            path: g(Mb),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), c_ = /* @__PURE__ */ We(l_, [["__scopeId", "data-v-e8177cc7"]]), u_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], d_ = { class: "app-navigation__search" }, f_ = /* @__PURE__ */ kt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Dt(
      Jh,
      () => Bg(),
      !1
    ), a = Wv("appNavigationContainer"), r = ds(), s = /* @__PURE__ */ st(!r.value), o = Y(() => r.value && s.value);
    Fv(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Zt(r, () => {
      s.value = !r.value;
    }), Zt(o, () => {
      u();
    }), ji(() => {
      i(!0), Ih("toggle-navigation", d), bi("navigation-toggled", {
        open: s.value
      }), n = Yc(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Qr(),
        escapeDeactivates: !1
      }), u();
    }), ls(() => {
      i(!1), Eb("toggle-navigation", d), n.deactivate();
    });
    function l(_) {
      if (s.value === _) {
        bi("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = _ === void 0 ? !s.value : _;
      const E = getComputedStyle(document.body), N = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        bi("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * N);
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
    return (_, E) => (b(), C("div", {
      ref: "appNavigationContainer",
      class: Ce(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": g(Gi)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: Xt(h, ["esc"])
      }, [
        c("div", d_, [
          Le(_.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Ce(["app-navigation__body", { "app-navigation__body--no-list": !_.$slots.list }])
        }, [
          Le(_.$slots, "default", {}, void 0, !0)
        ], 2),
        _.$slots.list ? (b(), $e(Zh, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Te(() => [
            Le(_.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : U("", !0),
        Le(_.$slots, "footer", {}, void 0, !0)
      ], 40, u_),
      ge(c_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), h_ = /* @__PURE__ */ We(f_, [["__scopeId", "data-v-37908cd4"]]), p_ = {
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
}, v_ = ["aria-hidden", "aria-label"], g_ = ["fill", "width", "height"], m_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, b_ = { key: 0 };
function y_(e, t, n, i, a, r) {
  return b(), C("span", zt(e.$attrs, {
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
      c("path", m_, [
        n.title ? (b(), C("title", b_, p(n.title), 1)) : U("", !0)
      ])
    ], 8, g_))
  ], 16, v_);
}
const __ = /* @__PURE__ */ We(p_, [["render", y_]]), w_ = {
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
}, C_ = ["aria-hidden", "aria-label"], S_ = ["fill", "width", "height"], E_ = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, T_ = { key: 0 };
function A_(e, t, n, i, a, r) {
  return b(), C("span", zt(e.$attrs, {
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
      c("path", E_, [
        n.title ? (b(), C("title", T_, p(n.title), 1)) : U("", !0)
      ])
    ], 8, S_))
  ], 16, C_);
}
const k_ = /* @__PURE__ */ We(w_, [["render", A_]]), O_ = {
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
}, N_ = ["aria-hidden", "aria-label"], x_ = ["fill", "width", "height"], L_ = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, R_ = { key: 0 };
function I_(e, t, n, i, a, r) {
  return b(), C("span", zt(e.$attrs, {
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
      c("path", L_, [
        n.title ? (b(), C("title", R_, p(n.title), 1)) : U("", !0)
      ])
    ], 8, x_))
  ], 16, N_);
}
const ep = /* @__PURE__ */ We(O_, [["render", I_]]), P_ = {
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
}, D_ = ["aria-hidden", "aria-label"], M_ = ["fill", "width", "height"], $_ = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, F_ = { key: 0 };
function z_(e, t, n, i, a, r) {
  return b(), C("span", zt(e.$attrs, {
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
      c("path", $_, [
        n.title ? (b(), C("title", F_, p(n.title), 1)) : U("", !0)
      ])
    ], 8, M_))
  ], 16, D_);
}
const tp = /* @__PURE__ */ We(P_, [["render", z_]]);
Vi(Hb);
const U_ = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: ep,
    IconClose: tp,
    NcButton: qn
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
    return { isLegacy34: Gi };
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
}, B_ = ["placeholder"];
function H_(e, t, n, i, a, r) {
  const s = ze("IconArrowRight"), o = ze("NcButton"), l = ze("IconClose");
  return b(), C("div", {
    class: Ce(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = Je((...d) => r.confirm && r.confirm(...d), ["prevent"])),
      onKeydown: t[2] || (t[2] = Xt(Je((...d) => r.cancel && r.cancel(...d), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Je(() => {
      }, ["stop", "prevent"]))
    }, [
      qe(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.valueModel = d),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, B_), [
        [Li, r.valueModel]
      ]),
      ge(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Je(r.confirm, ["stop", "prevent"])
      }, {
        icon: Te(() => [
          ge(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      ge(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Je(r.cancel, ["stop", "prevent"])
      }, {
        icon: Te(() => [
          ge(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const j_ = /* @__PURE__ */ We(U_, [["render", H_], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function el() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Xc = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), np = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), V_ = {
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
}, ip = {
  mixins: [V_],
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
      from: np
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
}, G_ = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Qo
  },
  mixins: [ip],
  inject: {
    isInSemanticMenu: {
      from: Xc,
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
      mdiCheck: Pb,
      mdiChevronRight: Db
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
}, K_ = ["role"], W_ = ["aria-label", "disabled", "title", "type"], q_ = { class: "action-button__longtext-wrapper" }, Y_ = {
  key: 0,
  class: "action-button__name"
}, X_ = ["textContent"], Z_ = {
  key: 2,
  class: "action-button__text"
}, J_ = ["textContent"], Q_ = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function e1(e, t, n, i, a, r) {
  const s = ze("NcIconSvgWrapper");
  return b(), C("li", {
    class: Ce(["action", { "action--disabled": n.disabled }]),
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
      Le(e.$slots, "icon", {}, () => [
        c("span", {
          class: Ce([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: rn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", q_, [
        e.name ? (b(), C("strong", Y_, p(e.name), 1)) : U("", !0),
        e.isLongText ? (b(), C("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, X_)) : (b(), C("span", Z_, p(e.text), 1)),
        n.description ? (b(), C("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, J_)) : U("", !0)
      ]),
      n.isMenu ? (b(), $e(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (b(), $e(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (b(), C("span", Q_)) : U("", !0),
      U("", !0)
    ], 16, W_)
  ], 10, K_);
}
const t1 = /* @__PURE__ */ We(G_, [["render", e1], ["__scopeId", "data-v-6c2daf4e"]]);
function n1(e, t = {}) {
  const n = s_();
  Zt(e, () => {
    vi(t.disabled) || (vi(e) ? n.pause() : n.unpause());
  }), ls(() => {
    n.unpause();
  });
}
const i1 = ["top", "right", "bottom", "left"], Ld = ["start", "end"], Rd = /* @__PURE__ */ i1.reduce((e, t) => e.concat(t, t + "-" + Ld[0], t + "-" + Ld[1]), []), es = Math.min, hc = Math.max, a1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ap(e, t, n) {
  return hc(e, es(t, n));
}
function Sa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ci(e) {
  return e.split("-")[0];
}
function Nn(e) {
  return e.split("-")[1];
}
function rp(e) {
  return e === "x" ? "y" : "x";
}
function Zc(e) {
  return e === "y" ? "height" : "width";
}
function pi(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Jc(e) {
  return rp(pi(e));
}
function sp(e, t, n) {
  n === void 0 && (n = !1);
  const i = Nn(e), a = Jc(e), r = Zc(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = ao(s)), [s, ao(s)];
}
function r1(e) {
  const t = ao(e);
  return [io(e), t, io(t)];
}
function io(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Id = ["left", "right"], Pd = ["right", "left"], s1 = ["top", "bottom"], o1 = ["bottom", "top"];
function l1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Pd : Id : t ? Id : Pd;
    case "left":
    case "right":
      return t ? s1 : o1;
    default:
      return [];
  }
}
function c1(e, t, n, i) {
  const a = Nn(e);
  let r = l1(Ci(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(io)))), r;
}
function ao(e) {
  const t = Ci(e);
  return a1[t] + e.slice(t.length);
}
function u1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function op(e) {
  return typeof e != "number" ? u1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Rr(e) {
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
function Dd(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = pi(t), s = Jc(t), o = Zc(s), l = Ci(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, _ = i[o] / 2 - a[o] / 2;
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
  const N = Nn(t);
  return N && (E[s] += _ * (N === "end" ? 1 : -1) * (n && d ? -1 : 1)), E;
}
async function d1(e, t) {
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
    padding: E = 0
  } = Sa(t, e), N = op(E), O = o[_ ? h === "floating" ? "reference" : "floating" : h], I = Rr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), M = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, K = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(K)) && await (r.getScale == null ? void 0 : r.getScale(K)) || {
    x: 1,
    y: 1
  }, le = Rr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: M,
    offsetParent: K,
    strategy: l
  }) : M);
  return {
    top: (I.top - le.top + N.top) / $.y,
    bottom: (le.bottom - I.bottom + N.bottom) / $.y,
    left: (I.left - le.left + N.left) / $.x,
    right: (le.right - I.right + N.right) / $.x
  };
}
const f1 = 50, h1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: d1
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = Dd(d, i, l), _ = i, E = 0;
  const N = {};
  for (let A = 0; A < r.length; A++) {
    const O = r[A];
    if (!O)
      continue;
    const {
      name: I,
      fn: M
    } = O, {
      x: K,
      y: $,
      data: le,
      reset: ue
    } = await M({
      x: u,
      y: h,
      initialPlacement: i,
      placement: _,
      strategy: a,
      middlewareData: N,
      rects: d,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = K ?? u, h = $ ?? h, N[I] = {
      ...N[I],
      ...le
    }, ue && E < f1 && (E++, typeof ue == "object" && (ue.placement && (_ = ue.placement), ue.rects && (d = ue.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ue.rects), {
      x: u,
      y: h
    } = Dd(d, _, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: _,
    strategy: a,
    middlewareData: N
  };
}, p1 = (e) => ({
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
    const h = op(u), _ = {
      x: n,
      y: i
    }, E = Jc(a), N = Zc(E), A = await s.getDimensions(d), O = E === "y", I = O ? "top" : "left", M = O ? "bottom" : "right", K = O ? "clientHeight" : "clientWidth", $ = r.reference[N] + r.reference[E] - _[E] - r.floating[N], le = _[E] - r.reference[E], ue = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let B = ue ? ue[K] : 0;
    (!B || !await (s.isElement == null ? void 0 : s.isElement(ue))) && (B = o.floating[K] || r.floating[N]);
    const j = $ / 2 - le / 2, Z = B / 2 - A[N] / 2 - 1, se = es(h[I], Z), de = es(h[M], Z), J = B - A[N] - de, ne = B / 2 - A[N] / 2 + j, P = ap(se, ne, J), D = !l.arrow && Nn(a) != null && ne !== P && r.reference[N] / 2 - (ne < se ? se : de) - A[N] / 2 < 0, X = D ? ne < se ? ne - se : ne - J : 0;
    return {
      [E]: _[E] + X,
      data: {
        [E]: P,
        centerOffset: ne - P - X,
        ...D && {
          alignmentOffset: X
        }
      },
      reset: D
    };
  }
});
function v1(e, t, n) {
  return (e ? [...n.filter((a) => Nn(a) === e), ...n.filter((a) => Nn(a) !== e)] : n.filter((a) => Ci(a) === a)).filter((a) => e ? Nn(a) === e || (t ? io(a) !== a : !1) : !0);
}
const g1 = function(e) {
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
        allowedPlacements: _ = Rd,
        autoAlignment: E = !0,
        ...N
      } = Sa(e, t), A = h !== void 0 || _ === Rd ? v1(h || null, E, _) : _, O = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, I = A[O];
      if (I == null)
        return {};
      if (o !== I)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await l.detectOverflow(t, N), K = sp(I, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), $ = [M[Ci(I)], M[K[0]], M[K[1]]], le = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: I,
        overflows: $
      }], ue = A[O + 1];
      if (ue)
        return {
          data: {
            index: O + 1,
            overflows: le
          },
          reset: {
            placement: ue
          }
        };
      const B = le.map((se) => {
        const de = Nn(se.placement);
        return [se.placement, de && u ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((J, ne) => J + ne, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, de) => se[1] - de[1]), Z = ((a = B.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Nn(se[0]) ? 2 : 3
      ).every((de) => de <= 0))[0]) == null ? void 0 : a[0]) || B[0][0];
      return Z !== o ? {
        data: {
          index: O + 1,
          overflows: le
        },
        reset: {
          placement: Z
        }
      } : {};
    }
  };
}, m1 = function(e) {
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
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: N = "none",
        flipAlignment: A = !0,
        ...O
      } = Sa(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const I = Ci(a), M = pi(o), K = Ci(o) === o, $ = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), le = _ || (K || !A ? [ao(o)] : r1(o)), ue = N !== "none";
      !_ && ue && le.push(...c1(o, A, N, $));
      const B = [o, ...le], j = await l.detectOverflow(t, O), Z = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && Z.push(j[I]), h) {
        const P = sp(a, s, $);
        Z.push(j[P[0]], j[P[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: Z
      }], !Z.every((P) => P <= 0)) {
        var de, J;
        const P = (((de = r.flip) == null ? void 0 : de.index) || 0) + 1, D = B[P];
        if (D && (!(h === "alignment" ? M !== pi(D) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ie) => pi(ie.placement) === M ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: P,
              overflows: se
            },
            reset: {
              placement: D
            }
          };
        let X = (J = se.filter((ae) => ae.overflows[0] <= 0).sort((ae, ie) => ae.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!X)
          switch (E) {
            case "bestFit": {
              var ne;
              const ae = (ne = se.filter((ie) => {
                if (ue) {
                  const fe = pi(ie.placement);
                  return fe === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  fe === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((fe) => fe > 0).reduce((fe, pe) => fe + pe, 0)]).sort((ie, fe) => ie[1] - fe[1])[0]) == null ? void 0 : ne[0];
              ae && (X = ae);
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
}, b1 = /* @__PURE__ */ new Set(["left", "top"]);
async function y1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = Ci(n), o = Nn(n), l = pi(n) === "y", d = b1.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = Sa(t, e);
  let {
    mainAxis: _,
    crossAxis: E,
    alignmentAxis: N
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return o && typeof N == "number" && (E = o === "end" ? N * -1 : N), l ? {
    x: E * u,
    y: _ * d
  } : {
    x: _ * d,
    y: E * u
  };
}
const _1 = function(e) {
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
      } = t, l = await y1(t, e);
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
}, w1 = function(e) {
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
              y: $
            } = M;
            return {
              x: K,
              y: $
            };
          }
        },
        ...d
      } = Sa(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, d), _ = pi(a), E = rp(_);
      let N = u[E], A = u[_];
      const O = (M, K) => ap(K + h[M === "y" ? "top" : "left"], K, K - h[M === "y" ? "bottom" : "right"]);
      s && (N = O(E, N)), o && (A = O(_, A));
      const I = l.fn({
        ...t,
        [E]: N,
        [_]: A
      });
      return {
        ...I,
        data: {
          x: I.x - n,
          y: I.y - i,
          enabled: {
            [E]: s,
            [_]: o
          }
        }
      };
    }
  };
}, C1 = function(e) {
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
      } = Sa(e, t), l = await a.detectOverflow(t, o), d = Ci(n), u = Nn(n), h = pi(n) === "y", {
        width: _,
        height: E
      } = i.floating;
      let N, A;
      d === "top" || d === "bottom" ? (N = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, N = u === "end" ? "top" : "bottom");
      const O = E - l.top - l.bottom, I = _ - l.left - l.right, M = es(E - l[N], O), K = es(_ - l[A], I), $ = t.middlewareData.shift, le = !$;
      let ue = M, B = K;
      $ != null && $.enabled.x && (B = I), $ != null && $.enabled.y && (ue = O), le && !u && (h ? B = _ - 2 * hc(l.left, l.right) : ue = E - 2 * hc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: B,
        availableHeight: ue
      });
      const j = await a.getDimensions(r.floating);
      return _ !== j.width || E !== j.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function vn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yn(e) {
  return vn(e).getComputedStyle(e);
}
const Md = Math.min, Ir = Math.max, ro = Math.round;
function lp(e) {
  const t = Yn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = ro(n) !== a || ro(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function Hi(e) {
  return up(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Es;
function cp() {
  if (Es) return Es;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Es = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Es) : navigator.userAgent;
}
function Xn(e) {
  return e instanceof vn(e).HTMLElement;
}
function $i(e) {
  return e instanceof vn(e).Element;
}
function up(e) {
  return e instanceof vn(e).Node;
}
function $d(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof vn(e).ShadowRoot || e instanceof ShadowRoot;
}
function tl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Yn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function S1(e) {
  return ["table", "td", "th"].includes(Hi(e));
}
function pc(e) {
  const t = /firefox/i.test(cp()), n = Yn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function dp() {
  return !/^((?!chrome|android).)*safari/i.test(cp());
}
function Qc(e) {
  return ["html", "body", "#document"].includes(Hi(e));
}
function fp(e) {
  return $i(e) ? e : e.contextElement;
}
const hp = { x: 1, y: 1 };
function Ja(e) {
  const t = fp(e);
  if (!Xn(t)) return hp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = lp(t);
  let s = (r ? ro(n.width) : n.width) / i, o = (r ? ro(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function ts(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = fp(e);
  let l = hp;
  t && (i ? $i(i) && (l = Ja(i)) : l = Ja(e));
  const d = o ? vn(o) : window, u = !dp() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, _ = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, E = s.width / l.x, N = s.height / l.y;
  if (o) {
    const A = vn(o), O = i && $i(i) ? vn(i) : i;
    let I = A.frameElement;
    for (; I && i && O !== A; ) {
      const M = Ja(I), K = I.getBoundingClientRect(), $ = getComputedStyle(I);
      K.x += (I.clientLeft + parseFloat($.paddingLeft)) * M.x, K.y += (I.clientTop + parseFloat($.paddingTop)) * M.y, h *= M.x, _ *= M.y, E *= M.x, N *= M.y, h += K.x, _ += K.y, I = vn(I).frameElement;
    }
  }
  return { width: E, height: N, top: _, right: h + E, bottom: _ + N, left: h, x: h, y: _ };
}
function Fi(e) {
  return ((up(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function nl(e) {
  return $i(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function pp(e) {
  return ts(Fi(e)).left + nl(e).scrollLeft;
}
function ns(e) {
  if (Hi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || $d(e) && e.host || Fi(e);
  return $d(t) ? t.host : t;
}
function vp(e) {
  const t = ns(e);
  return Qc(t) ? t.ownerDocument.body : Xn(t) && tl(t) ? t : vp(t);
}
function so(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = vp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = vn(i);
  return a ? t.concat(r, r.visualViewport || [], tl(i) ? i : []) : t.concat(i, so(i));
}
function Fd(e, t, n) {
  return t === "viewport" ? Rr((function(i, a) {
    const r = vn(i), s = Fi(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const _ = dp();
      (_ || !_ && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : $i(t) ? Rr((function(i, a) {
    const r = ts(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Xn(i) ? Ja(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Rr((function(i) {
    const a = Fi(i), r = nl(i), s = i.ownerDocument.body, o = Ir(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Ir(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + pp(i);
    const u = -r.scrollTop;
    return Yn(s).direction === "rtl" && (d += Ir(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })(Fi(e)));
}
function zd(e) {
  return Xn(e) && Yn(e).position !== "fixed" ? e.offsetParent : null;
}
function Ud(e) {
  const t = vn(e);
  let n = zd(e);
  for (; n && S1(n) && Yn(n).position === "static"; ) n = zd(n);
  return n && (Hi(n) === "html" || Hi(n) === "body" && Yn(n).position === "static" && !pc(n)) ? t : n || (function(i) {
    let a = ns(i);
    for (; Xn(a) && !Qc(a); ) {
      if (pc(a)) return a;
      a = ns(a);
    }
    return null;
  })(e) || t;
}
function E1(e, t, n) {
  const i = Xn(t), a = Fi(t), r = ts(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Hi(t) !== "body" || tl(a)) && (s = nl(t)), Xn(t)) {
    const l = ts(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = pp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const T1 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let _ = so(d).filter(((O) => $i(O) && Hi(O) !== "body")), E = null;
    const N = Yn(d).position === "fixed";
    let A = N ? ns(d) : d;
    for (; $i(A) && !Qc(A); ) {
      const O = Yn(A), I = pc(A);
      (N ? I || E : I || O.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = O : _ = _.filter(((M) => M !== A)), A = ns(A);
    }
    return u.set(d, _), _;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = Fd(t, u, a);
    return d.top = Ir(h.top, d.top), d.right = Md(h.right, d.right), d.bottom = Md(h.bottom, d.bottom), d.left = Ir(h.left, d.left), d;
  }), Fd(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Xn(n), r = Fi(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Hi(n) !== "body" || tl(r)) && (s = nl(n)), Xn(n))) {
    const d = ts(n);
    o = Ja(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: $i, getDimensions: function(e) {
  return Xn(e) ? lp(e) : e.getBoundingClientRect();
}, getOffsetParent: Ud, getDocumentElement: Fi, getScale: Ja, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Ud, r = this.getDimensions;
  return { reference: E1(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Yn(e).direction === "rtl" }, A1 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: T1, ...n }, r = { ...a.platform, _c: i };
  return h1(e, t, { ...a, platform: r });
}, zi = {
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
function vc(e, t) {
  let n = zi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = zi.themes[n.$extend] || {} : (n = null, i = zi[t]) : n = null;
  while (n);
  return i;
}
function k1(e) {
  const t = [e];
  let n = zi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = zi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Bd(e) {
  const t = [e];
  let n = zi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = zi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let is = !1;
if (typeof window < "u") {
  is = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        is = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let gp = !1;
typeof window < "u" && typeof navigator < "u" && (gp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const O1 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Hd = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, jd = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Vd(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Ul() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const kn = [];
let oa = null;
const Gd = {};
function Kd(e) {
  let t = Gd[e];
  return t || (t = Gd[e] = []), t;
}
let gc = function() {
};
typeof window < "u" && (gc = window.Element);
function Fe(e) {
  return function(t) {
    return vc(t.theme, e);
  };
}
const Bl = "__floating-vue__popper", mp = () => /* @__PURE__ */ kt({
  name: "VPopper",
  provide() {
    return {
      [Bl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Bl]: { default: null }
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
      validator: (e) => O1.includes(e)
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
      type: [String, Object, gc, Boolean],
      default: Fe("container")
    },
    boundary: {
      type: [String, gc],
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
      return (e = this[Bl]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(_1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(g1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(w1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(m1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(p1({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(C1({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await A1(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), oa && this.instantMove && oa.instantMove && oa !== this.parentPopper) {
        oa.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (oa = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Ul(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
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
        for (let n = 0; n < kn.length; n++)
          t = kn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      kn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Bd(this.theme))
        Kd(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ul(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Vd(kn, this), kn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Bd(this.theme)) {
        const i = Kd(n);
        Vd(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      oa === this && (oa = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ul(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Hd, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Hd, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, jd, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], jd, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, is ? {
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
      if (Pr >= e.left && Pr <= e.right && Dr >= e.top && Dr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Pr - Ri, i = Dr - Ii, a = t.left + t.width / 2 - Ri + (t.top + t.height / 2) - Ii + t.width + t.height, r = Ri + n * a, s = Ii + i * a;
        return Ts(Ri, Ii, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Ts(Ri, Ii, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Ts(Ri, Ii, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Ts(Ri, Ii, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (gp) {
    const e = is ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Wd(t), e), document.addEventListener("touchend", (t) => qd(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Wd(e), !0), window.addEventListener("click", (e) => qd(e, !1), !0);
  window.addEventListener("resize", L1);
}
function Wd(e, t) {
  for (let n = 0; n < kn.length; n++) {
    const i = kn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function qd(e, t) {
  N1(e, t);
}
function N1(e, t) {
  const n = {};
  for (let i = kn.length - 1; i >= 0; i--) {
    const a = kn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Yd(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && Yd(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Yd(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || x1(e, n) && !t;
}
function x1(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function L1() {
  for (let e = 0; e < kn.length; e++)
    kn[e].$_computePosition();
}
let Ri = 0, Ii = 0, Pr = 0, Dr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ri = Pr, Ii = Dr, Pr = e.clientX, Dr = e.clientY;
}, is ? {
  passive: !0
} : void 0);
function Ts(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const R1 = {
  extends: mp()
}, eu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function I1(e, t, n, i, a, r) {
  return b(), C("div", {
    ref: "reference",
    class: Ce(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Le(e.$slots, "default", Ps(Yr(e.slotData)))
  ], 2);
}
const P1 = /* @__PURE__ */ eu(R1, [["render", I1]]);
function D1() {
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
let Rs;
function mc() {
  mc.init || (mc.init = !0, Rs = D1() !== -1);
}
var il = {
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
    mc(), gi(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Rs && this.$el.appendChild(e), e.data = "about:blank", Rs || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Rs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const M1 = /* @__PURE__ */ Dv();
Iv("data-v-b329ee4c");
const $1 = {
  class: "resize-observer",
  tabindex: "-1"
};
Pv();
const F1 = /* @__PURE__ */ M1((e, t, n, i, a, r) => (b(), $e("div", $1)));
il.render = F1;
il.__scopeId = "data-v-b329ee4c";
il.__file = "src/components/ResizeObserver.vue";
const bp = (e = "theme") => ({
  computed: {
    themeClass() {
      return k1(this[e]);
    }
  }
}), z1 = /* @__PURE__ */ kt({
  name: "VPopperContent",
  components: {
    ResizeObserver: il
  },
  mixins: [
    bp()
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
}), U1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], B1 = {
  ref: "inner",
  class: "v-popper__inner"
}, H1 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), j1 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), V1 = [
  H1,
  j1
];
function G1(e, t, n, i, a, r) {
  const s = ze("ResizeObserver");
  return b(), C("div", {
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
    style: rn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Xt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    c("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (o) => e.autoHide && e.$emit("hide"))
    }),
    c("div", {
      class: "v-popper__wrapper",
      style: rn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", B1, [
        e.mounted ? (b(), C(ce, { key: 0 }, [
          c("div", null, [
            Le(e.$slots, "default")
          ]),
          e.handleResize ? (b(), $e(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : U("", !0)
        ], 64)) : U("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: rn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, V1, 4)
    ], 4)
  ], 46, U1);
}
const yp = /* @__PURE__ */ eu(z1, [["render", G1]]), _p = {
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
let bc = function() {
};
typeof window < "u" && (bc = window.Element);
const K1 = /* @__PURE__ */ kt({
  name: "VPopperWrapper",
  components: {
    Popper: P1,
    PopperContent: yp
  },
  mixins: [
    _p,
    bp("finalTheme")
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
      type: [String, Object, bc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, bc],
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
function W1(e, t, n, i, a, r) {
  const s = ze("PopperContent"), o = ze("Popper");
  return b(), $e(o, zt({ ref: "popper" }, e.$props, {
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
    default: Te(({
      popperId: l,
      isShown: d,
      shouldMountContent: u,
      skipTransition: h,
      autoHide: _,
      show: E,
      hide: N,
      handleResize: A,
      onResize: O,
      classes: I,
      result: M
    }) => [
      Le(e.$slots, "default", {
        shown: d,
        show: E,
        hide: N
      }),
      ge(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: d,
        mounted: u,
        "skip-transition": h,
        "auto-hide": _,
        "handle-resize": A,
        classes: I,
        result: M,
        onHide: N,
        onResize: O
      }, {
        default: Te(() => [
          Le(e.$slots, "popper", {
            shown: d,
            hide: N
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const tu = /* @__PURE__ */ eu(K1, [["render", W1]]), q1 = {
  ...tu,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...tu
});
({
  ...tu
});
mp();
const Xd = zi, Y1 = q1, X1 = /* @__PURE__ */ kt({
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
}), Z1 = "_ncPopover_qgtYg", J1 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: Z1
}, wp = "nc-popover-9";
Xd.themes[wp] = structuredClone(Xd.themes.dropdown);
const Q1 = {
  name: "NcPopover",
  components: {
    Dropdown: Y1,
    NcPopoverTriggerProvider: X1
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
      theme: wp
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
      return this.placement === "start" ? uc ? "right" : "left" : this.placement === "end" ? uc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Yc(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Qr(),
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
        ya.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function e0(e, t, n, i, a, r) {
  const s = ze("NcPopoverTriggerProvider"), o = ze("Dropdown");
  return b(), $e(o, {
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
    popper: Te((l) => [
      Le(e.$slots, "default", Ps(Yr(l)))
    ]),
    default: Te(() => [
      ge(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Te((l) => [
          Le(e.$slots, "trigger", Ps(Yr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const t0 = {
  $style: J1
}, Zd = /* @__PURE__ */ We(Q1, [["render", e0], ["__cssModules", t0]]), n0 = {
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
}, i0 = ["aria-hidden", "aria-label"], a0 = ["fill", "width", "height"], r0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, s0 = { key: 0 };
function o0(e, t, n, i, a, r) {
  return b(), C("span", zt(e.$attrs, {
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
      c("path", r0, [
        n.title ? (b(), C("title", s0, p(n.title), 1)) : U("", !0)
      ])
    ], 8, a0))
  ], 16, i0);
}
const l0 = /* @__PURE__ */ We(n0, [["render", o0]]);
Vi(Bb);
function nu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Tt)
        return !1;
      if (n.type === ce && !nu(n.children))
        return !1;
      if (n.type === cs && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const c0 = ".focusable", u0 = {
  name: "NcActions",
  components: {
    NcButton: qn,
    NcPopover: Zd
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
      [Xc]: Y(() => this.actionsMenuSemanticType === "menu"),
      [np]: this.closeMenu
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
      randomId: el()
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
    n1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(c0);
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
    const e = [], t = (E, N) => {
      E.forEach((A) => {
        if (this.isAction(A)) {
          N.push(A);
          return;
        }
        A.type === ce && t(A.children, N);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((E) => s.includes(this.getActionName(E))), d = a.some((E) => r.includes(this.getActionName(E))), u = a.some((E) => o.includes(this.getActionName(E)));
    l ? this.actionsMenuSemanticType = "dialog" : d ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((N) => this.getActionName(N).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (E) => {
      const N = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(N) ? qt("img", { class: "action-item__menutoggle__icon", src: N, alt: "" }) : qt("span", { class: ["icon", N] })), O = E?.children?.default?.()?.[0]?.children?.trim(), I = this.forceName ? O : "";
      let M = E?.props?.title;
      this.forceName || M || (M = O);
      const K = { ...E?.props ?? {} }, $ = ["submit", "reset"].includes(K.type) ? K.modelValue : "button";
      return delete K.modelValue, delete K.type, qt(
        qn,
        zt(
          K,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": E?.props?.["aria-label"] || O,
            title: M,
            disabled: this.disabled || E?.props?.disabled,
            pressed: E?.props?.modelValue,
            size: this.size,
            type: $,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (I ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": E?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => I,
          icon: () => A
        }
      );
    }, _ = (E) => {
      const N = nu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? qt("span", { class: ["icon", this.defaultIcon] }) : qt(l0, { size: 20 }), A = `${this.randomId}-trigger`;
      return qt(
        Zd,
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
          trigger: () => qt(qn, {
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
            icon: () => N,
            default: () => this.menuName
          }),
          default: () => qt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            qt("ul", {
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
    }), i.length > 0 && this.inline > 0 ? qt(
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
        a.length > 0 ? qt(
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
    ) : qt(
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
}, oo = /* @__PURE__ */ We(u0, [["__scopeId", "data-v-7206c1f1"]]), d0 = ["aria-label"], f0 = ["width", "height"], h0 = ["fill"], p0 = ["fill"], v0 = { key: 0 }, g0 = /* @__PURE__ */ kt({
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
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, h0),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (b(), C("title", v0, p(e.name), 1)) : U("", !0)
        ], 8, p0)
      ], 8, f0))
    ], 8, d0));
  }
}), Cp = /* @__PURE__ */ We(g0, [["__scopeId", "data-v-cf399190"]]), yc = /* @__PURE__ */ kt({
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
}), m0 = {
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
}, b0 = ["aria-hidden", "aria-label"], y0 = ["fill", "width", "height"], _0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, w0 = { key: 0 };
function C0(e, t, n, i, a, r) {
  return b(), C("span", zt(e.$attrs, {
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
      c("path", _0, [
        n.title ? (b(), C("title", w0, p(n.title), 1)) : U("", !0)
      ])
    ], 8, y0))
  ], 16, b0);
}
const S0 = /* @__PURE__ */ We(m0, [["render", C0]]), E0 = {
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
}, T0 = ["aria-hidden", "aria-label"], A0 = ["fill", "width", "height"], k0 = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, O0 = { key: 0 };
function N0(e, t, n, i, a, r) {
  return b(), C("span", zt(e.$attrs, {
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
      c("path", k0, [
        n.title ? (b(), C("title", O0, p(n.title), 1)) : U("", !0)
      ])
    ], 8, A0))
  ], 16, T0);
}
const x0 = /* @__PURE__ */ We(E0, [["render", N0]]);
Vi(Gb);
const L0 = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: qn,
    ChevronDown: __,
    ChevronUp: k_
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
    return { isLegacy34: Gi };
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
function R0(e, t, n, i, a, r) {
  const s = ze("ChevronUp"), o = ze("ChevronDown"), l = ze("NcButton");
  return b(), $e(l, {
    class: Ce(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Te(() => [
      n.open ? (b(), $e(s, {
        key: 0,
        size: 20
      })) : (b(), $e(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const I0 = /* @__PURE__ */ We(L0, [["render", R0], ["__scopeId", "data-v-cfbd3794"]]);
Vi(Kb, Yb);
const P0 = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: oo,
    NcActionButton: t1,
    NcAppNavigationIconCollapsible: I0,
    NcInputConfirmCancel: j_,
    NcLoadingIcon: Cp,
    NcVNodes: yc,
    Pencil: S0,
    Undo: x0
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Xh, default: null }
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
      default: () => el(),
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
      isMobile: ds(),
      isLegacy34: Gi
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && bi("toggle-navigation", { open: !1 }));
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
}, D0 = ["id"], M0 = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], $0 = {
  key: 0,
  class: "editingContainer"
}, F0 = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, z0 = { class: "app-navigation-entry__deleted-description" }, U0 = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, B0 = {
  key: 0,
  class: "app-navigation-entry__children"
};
function H0(e, t, n, i, a, r) {
  const s = ze("NcLoadingIcon"), o = ze("NcInputConfirmCancel"), l = ze("Pencil"), d = ze("NcActionButton"), u = ze("Undo"), h = ze("NcActions"), _ = ze("NcAppNavigationIconCollapsible");
  return b(), C("li", {
    id: n.id,
    class: Ce([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (b(), $e(zc(r.isRouterLink ? "router-link" : "NcVNodes"), Ps(Yr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Te(({ href: E, navigate: N, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: Ce(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          n.undo ? U("", !0) : (b(), C("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && A ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || E || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...O) => r.handleBlur && r.handleBlur(...O)),
            onClick: (O) => r.onClick(O, N, E),
            onFocus: t[2] || (t[2] = (...O) => r.handleFocus && r.handleFocus(...O)),
            onKeydown: t[3] || (t[3] = Xt(Je((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Ce(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (b(), $e(s, { key: 0 })) : Le(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Ce(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (b(), C("div", $0, [
              ge(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : U("", !0)
          ], 40, M0)),
          n.undo ? (b(), C("div", F0, [
            c("div", z0, p(n.name), 1)
          ])) : U("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (b(), C("div", {
            key: 2,
            class: Ce(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (b(), C("div", U0, [
              Le(e.$slots, "counter", {}, void 0, !0)
            ])) : U("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (b(), $e(h, {
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
              icon: Te(() => [
                Le(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Te(() => [
                n.editable && !a.editingActive ? (b(), $e(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Te(() => [
                    ge(l, { size: 20 })
                  ]),
                  default: Te(() => [
                    Ae(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : U("", !0),
                n.undo ? (b(), $e(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Te(() => [
                    ge(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : U("", !0),
                Le(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : U("", !0)
          ], 2)) : U("", !0),
          n.allowCollapse && e.$slots.default ? (b(), $e(_, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Je(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : U("", !0),
          Le(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (b(), C("ul", B0, [
      Le(e.$slots, "default", {}, void 0, !0)
    ])) : U("", !0)
  ], 10, D0);
}
const Jd = /* @__PURE__ */ We(P0, [["render", H0], ["__scopeId", "data-v-01bef41b"]]), Hl = /* @__PURE__ */ new WeakMap(), j0 = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Sd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Sd(e, a, Object.assign({ capture: n }, r));
    }
    Hl.set(e, i);
  },
  unmounted(e) {
    const t = Hl.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Hl.delete(e);
  }
}, V0 = {
  mounted(e) {
    e.focus();
  }
}, G0 = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", K0 = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", _c = "numeric", wc = "ascii", Cc = "alpha", Mr = "asciinumeric", Tr = "alphanumeric", Sc = "domain", Sp = "emoji", W0 = "scheme", q0 = "slashscheme", jl = "whitespace";
function Y0(e, t) {
  return e in t || (t[e] = []), t[e];
}
function va(e, t, n) {
  t[_c] && (t[Mr] = !0, t[Tr] = !0), t[wc] && (t[Mr] = !0, t[Cc] = !0), t[Mr] && (t[Tr] = !0), t[Cc] && (t[Tr] = !0), t[Tr] && (t[Sc] = !0), t[Sp] && (t[Sc] = !0);
  for (const i in t) {
    const a = Y0(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function X0(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function nn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
nn.groups = {};
nn.prototype = {
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
    i = i || nn.groups;
    let a;
    return t && t.j ? a = t : (a = new nn(t), n && i && va(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || nn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new nn(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new nn(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(X0(s.t, i), n);
          va(r, l, i);
        } else n && va(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ie = (e, t, n, i, a) => e.ta(t, n, i, a), at = (e, t, n, i, a) => e.tr(t, n, i, a), Qd = (e, t, n, i, a) => e.ts(t, n, i, a), te = (e, t, n, i, a) => e.tt(t, n, i, a), li = "WORD", Ec = "UWORD", Ep = "ASCIINUMERICAL", Tp = "ALPHANUMERICAL", as = "LOCALHOST", Tc = "TLD", Ac = "UTLD", Is = "SCHEME", Va = "SLASH_SCHEME", iu = "NUM", kc = "WS", au = "NL", $r = "OPENBRACE", Fr = "CLOSEBRACE", lo = "OPENBRACKET", co = "CLOSEBRACKET", uo = "OPENPAREN", fo = "CLOSEPAREN", ho = "OPENANGLEBRACKET", po = "CLOSEANGLEBRACKET", vo = "FULLWIDTHLEFTPAREN", go = "FULLWIDTHRIGHTPAREN", mo = "LEFTCORNERBRACKET", bo = "RIGHTCORNERBRACKET", yo = "LEFTWHITECORNERBRACKET", _o = "RIGHTWHITECORNERBRACKET", wo = "FULLWIDTHLESSTHAN", Co = "FULLWIDTHGREATERTHAN", So = "AMPERSAND", Eo = "APOSTROPHE", To = "ASTERISK", Di = "AT", Ao = "BACKSLASH", ko = "BACKTICK", Oo = "CARET", ga = "COLON", ru = "COMMA", No = "DOLLAR", Vn = "DOT", xo = "EQUALS", su = "EXCLAMATION", fn = "HYPHEN", zr = "PERCENT", Lo = "PIPE", Ro = "PLUS", Io = "POUND", Ur = "QUERY", ou = "QUOTE", Ap = "FULLWIDTHMIDDLEDOT", lu = "SEMI", Gn = "SLASH", Br = "TILDE", Po = "UNDERSCORE", kp = "EMOJI", Do = "SYM";
var Op = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Tp,
  AMPERSAND: So,
  APOSTROPHE: Eo,
  ASCIINUMERICAL: Ep,
  ASTERISK: To,
  AT: Di,
  BACKSLASH: Ao,
  BACKTICK: ko,
  CARET: Oo,
  CLOSEANGLEBRACKET: po,
  CLOSEBRACE: Fr,
  CLOSEBRACKET: co,
  CLOSEPAREN: fo,
  COLON: ga,
  COMMA: ru,
  DOLLAR: No,
  DOT: Vn,
  EMOJI: kp,
  EQUALS: xo,
  EXCLAMATION: su,
  FULLWIDTHGREATERTHAN: Co,
  FULLWIDTHLEFTPAREN: vo,
  FULLWIDTHLESSTHAN: wo,
  FULLWIDTHMIDDLEDOT: Ap,
  FULLWIDTHRIGHTPAREN: go,
  HYPHEN: fn,
  LEFTCORNERBRACKET: mo,
  LEFTWHITECORNERBRACKET: yo,
  LOCALHOST: as,
  NL: au,
  NUM: iu,
  OPENANGLEBRACKET: ho,
  OPENBRACE: $r,
  OPENBRACKET: lo,
  OPENPAREN: uo,
  PERCENT: zr,
  PIPE: Lo,
  PLUS: Ro,
  POUND: Io,
  QUERY: Ur,
  QUOTE: ou,
  RIGHTCORNERBRACKET: bo,
  RIGHTWHITECORNERBRACKET: _o,
  SCHEME: Is,
  SEMI: lu,
  SLASH: Gn,
  SLASH_SCHEME: Va,
  SYM: Do,
  TILDE: Br,
  TLD: Tc,
  UNDERSCORE: Po,
  UTLD: Ac,
  UWORD: Ec,
  WORD: li,
  WS: kc
});
const si = /[a-z]/, yr = new RegExp("\\p{L}", "u"), Vl = new RegExp("\\p{Emoji}", "u"), oi = /\d/, Gl = /\s/, ef = "\r", Kl = `
`, Z0 = "️", J0 = "‍", Wl = "￼";
let As = null, ks = null;
function Q0(e = []) {
  const t = {};
  nn.groups = t;
  const n = new nn();
  As == null && (As = tf(G0)), ks == null && (ks = tf(K0)), te(n, "'", Eo), te(n, "{", $r), te(n, "}", Fr), te(n, "[", lo), te(n, "]", co), te(n, "(", uo), te(n, ")", fo), te(n, "<", ho), te(n, ">", po), te(n, "（", vo), te(n, "）", go), te(n, "「", mo), te(n, "」", bo), te(n, "『", yo), te(n, "』", _o), te(n, "＜", wo), te(n, "＞", Co), te(n, "&", So), te(n, "*", To), te(n, "@", Di), te(n, "`", ko), te(n, "^", Oo), te(n, ":", ga), te(n, ",", ru), te(n, "$", No), te(n, ".", Vn), te(n, "=", xo), te(n, "!", su), te(n, "-", fn), te(n, "%", zr), te(n, "|", Lo), te(n, "+", Ro), te(n, "#", Io), te(n, "?", Ur), te(n, '"', ou), te(n, "/", Gn), te(n, ";", lu), te(n, "~", Br), te(n, "_", Po), te(n, "\\", Ao), te(n, "・", Ap);
  const i = at(n, oi, iu, {
    [_c]: !0
  });
  at(i, oi, i);
  const a = at(i, si, Ep, {
    [Mr]: !0
  }), r = at(i, yr, Tp, {
    [Tr]: !0
  }), s = at(n, si, li, {
    [wc]: !0
  });
  at(s, oi, a), at(s, si, s), at(a, oi, a), at(a, si, a);
  const o = at(n, yr, Ec, {
    [Cc]: !0
  });
  at(o, si), at(o, oi, r), at(o, yr, o), at(r, oi, r), at(r, si), at(r, yr, r);
  const l = te(n, Kl, au, {
    [jl]: !0
  }), d = te(n, ef, kc, {
    [jl]: !0
  }), u = at(n, Gl, kc, {
    [jl]: !0
  });
  te(n, Wl, u), te(d, Kl, l), te(d, Wl, u), at(d, Gl, u), te(u, ef), te(u, Kl), at(u, Gl, u), te(u, Wl, u);
  const h = at(n, Vl, kp, {
    [Sp]: !0
  });
  te(h, "#"), at(h, Vl, h), te(h, Z0, h);
  const _ = te(h, J0);
  te(_, "#"), at(_, Vl, h);
  const E = [[si, s], [oi, a]], N = [[si, null], [yr, o], [oi, r]];
  for (let A = 0; A < As.length; A++)
    Ni(n, As[A], Tc, li, E);
  for (let A = 0; A < ks.length; A++)
    Ni(n, ks[A], Ac, Ec, N);
  va(Tc, {
    tld: !0,
    ascii: !0
  }, t), va(Ac, {
    utld: !0,
    alpha: !0
  }, t), Ni(n, "file", Is, li, E), Ni(n, "mailto", Is, li, E), Ni(n, "http", Va, li, E), Ni(n, "https", Va, li, E), Ni(n, "ftp", Va, li, E), Ni(n, "ftps", Va, li, E), va(Is, {
    scheme: !0,
    ascii: !0
  }, t), va(Va, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], M = e[A][1] ? {
      [W0]: !0
    } : {
      [q0]: !0
    };
    O.indexOf("-") >= 0 ? M[Sc] = !0 : si.test(O) ? oi.test(O) ? M[Mr] = !0 : M[wc] = !0 : M[_c] = !0, Qd(n, O, O, M);
  }
  return Qd(n, "localhost", as, {
    ascii: !0
  }), n.jd = new nn(Do), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Op)
  };
}
function Np(e, t) {
  const n = ew(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
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
function ew(e) {
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
    e.j[l] ? r = e.j[l] : (r = new nn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new nn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function tf(e) {
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
const rs = {
  defaultProtocol: "http",
  events: null,
  format: nf,
  formatHref: nf,
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
function cu(e, t = null) {
  let n = Object.assign({}, rs);
  e && (n = Object.assign(n, e instanceof cu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
cu.prototype = {
  o: rs,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : rs[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function nf(e) {
  return e;
}
function xp(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
xp.prototype = {
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
  toObject(e = rs.defaultProtocol) {
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
function al(e, t) {
  class n extends xp {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const tw = al("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), af = al("text"), nw = al("nl"), Os = al("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = rs.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== as && e[1].t === ga;
  }
}), dn = (e) => new nn(e);
function iw({
  groups: e
}) {
  const t = e.domain.concat([So, To, Di, Ao, ko, Oo, No, xo, fn, iu, zr, Lo, Ro, Io, Gn, Do, Br, Po]), n = [Eo, ga, ru, Vn, su, zr, Ur, ou, lu, ho, po, $r, Fr, co, lo, uo, fo, vo, go, mo, bo, yo, _o, wo, Co], i = [So, Eo, To, Ao, ko, Oo, No, xo, fn, $r, Fr, zr, Lo, Ro, Io, Ur, Gn, Do, Br, Po], a = dn(), r = te(a, Br);
  Ie(r, i, r), Ie(r, e.domain, r);
  const s = dn(), o = dn(), l = dn();
  Ie(a, e.domain, s), Ie(a, e.scheme, o), Ie(a, e.slashscheme, l), Ie(s, i, r), Ie(s, e.domain, s);
  const d = te(s, Di);
  te(r, Di, d), te(o, Di, d), te(l, Di, d);
  const u = te(r, Vn);
  Ie(u, i, r), Ie(u, e.domain, r);
  const h = dn();
  Ie(d, e.domain, h), Ie(h, e.domain, h);
  const _ = te(h, Vn);
  Ie(_, e.domain, h);
  const E = dn(tw);
  Ie(_, e.tld, E), Ie(_, e.utld, E), te(d, as, E);
  const N = te(h, fn);
  te(N, fn, N), Ie(N, e.domain, h), Ie(E, e.domain, h), te(E, Vn, _), te(E, fn, N);
  const A = te(s, fn), O = te(s, Vn);
  te(A, fn, A), Ie(A, e.domain, s), Ie(O, i, r), Ie(O, e.domain, s);
  const I = dn(Os);
  Ie(O, e.tld, I), Ie(O, e.utld, I), Ie(I, e.domain, s), Ie(I, i, r), te(I, Vn, O), te(I, fn, A), te(I, Di, d);
  const M = te(I, ga), K = dn(Os);
  Ie(M, e.numeric, K);
  const $ = dn(Os), le = dn();
  Ie($, t, $), Ie($, n, le), Ie(le, t, $), Ie(le, n, le), te(I, Gn, $), te(K, Gn, $);
  const ue = te(o, ga), B = te(l, ga), j = te(B, Gn), Z = te(j, Gn);
  Ie(o, e.domain, s), te(o, Vn, O), te(o, fn, A), Ie(l, e.domain, s), te(l, Vn, O), te(l, fn, A), Ie(ue, e.domain, $), te(ue, Gn, $), te(ue, Ur, $), Ie(Z, e.domain, $), Ie(Z, t, $), te(Z, Gn, $);
  const se = [
    [$r, Fr],
    // {}
    [lo, co],
    // []
    [uo, fo],
    // ()
    [ho, po],
    // <>
    [vo, go],
    // （）
    [mo, bo],
    // 「」
    [yo, _o],
    // 『』
    [wo, Co]
    // ＜＞
  ];
  for (let de = 0; de < se.length; de++) {
    const [J, ne] = se[de], P = te($, J);
    te(le, J, P);
    const D = dn(Os);
    Ie(P, t, D);
    const X = dn();
    Ie(P, n, X), te(P, ne, $), Ie(D, t, D), Ie(D, n, X), Ie(X, t, D), Ie(X, n, X), te(D, ne, $), te(X, ne, $);
  }
  return te(a, as, I), te(a, au, nw), {
    start: a,
    tokens: Op
  };
}
function aw(e, t, n) {
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
      s.length > 0 && (r.push(ql(af, t, s)), s = []), a -= _, u -= _;
      const E = h.t, N = n.slice(a - u, a);
      r.push(ql(E, t, N));
    }
  }
  return s.length > 0 && r.push(ql(af, t, s)), r;
}
function ql(e, t, n) {
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
function rw() {
  Rt.scanner = Q0(Rt.customSchemes);
  for (let e = 0; e < Rt.tokenQueue.length; e++)
    Rt.tokenQueue[e][1]({
      scanner: Rt.scanner
    });
  Rt.parser = iw(Rt.scanner.tokens);
  for (let e = 0; e < Rt.pluginQueue.length; e++)
    Rt.pluginQueue[e][1]({
      scanner: Rt.scanner,
      parser: Rt.parser
    });
  return Rt.initialized = !0, Rt;
}
function Lp(e) {
  return Rt.initialized || rw(), aw(Rt.parser.start, e, Np(Rt.scanner.start, e));
}
Lp.scan = Np;
function sw(e) {
  const t = new cu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, cw), n = Lp(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Ys(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function ow(e) {
  return e.replace(/"/g, "&quot;");
}
function lw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${ow(i)}"`);
  }
  return t.join(" ");
}
function cw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${lw(t)}>${Ys(n)}</${e}>`;
}
const uw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = sw(t.text));
}, dw = ["title"], fw = /* @__PURE__ */ kt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Dt("NcAppSidebar:header:ref");
    return (n, i) => qe((b(), C("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Ae(p(e.name), 1)
    ], 8, dw)), [
      [g(uw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), hw = ["aria-labelledby"], pw = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, vw = ["id"], gw = {
  key: 2,
  class: "empty-content__description"
}, mw = {
  key: 3,
  class: "empty-content__action"
}, bw = /* @__PURE__ */ kt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = el();
    return (n, i) => (b(), C("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (b(), C("div", pw, [
        Le(n.$slots, "icon", {}, void 0, !0)
      ])) : U("", !0),
      e.name !== "" || n.$slots.name ? (b(), C("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Le(n.$slots, "name", {}, () => [
          Ae(p(e.name), 1)
        ], !0)
      ], 8, vw)) : U("", !0),
      e.description !== "" || n.$slots.description ? (b(), C("p", gw, [
        Le(n.$slots, "description", {}, () => [
          Ae(p(e.description), 1)
        ], !0)
      ])) : U("", !0),
      n.$slots.action ? (b(), C("div", mw, [
        Le(n.$slots, "action", {}, void 0, !0)
      ])) : U("", !0)
    ], 8, hw));
  }
}), yw = /* @__PURE__ */ We(bw, [["__scopeId", "data-v-8609a4c1"]]), _w = {
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
}, ww = ["aria-hidden", "aria-label"], Cw = ["fill", "width", "height"], Sw = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, Ew = { key: 0 };
function Tw(e, t, n, i, a, r) {
  return b(), C("span", zt(e.$attrs, {
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
      c("path", Sw, [
        n.title ? (b(), C("title", Ew, p(n.title), 1)) : U("", !0)
      ])
    ], 8, Cw))
  ], 16, ww);
}
const Aw = /* @__PURE__ */ We(_w, [["render", Tw]]), kw = {
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
}, Ow = ["aria-hidden", "aria-label"], Nw = ["fill", "width", "height"], xw = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, Lw = { key: 0 };
function Rw(e, t, n, i, a, r) {
  return b(), C("span", zt(e.$attrs, {
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
      c("path", xw, [
        n.title ? (b(), C("title", Lw, p(n.title), 1)) : U("", !0)
      ])
    ], 8, Nw))
  ], 16, Ow);
}
const Iw = /* @__PURE__ */ We(kw, [["render", Rw]]), Pw = {
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
}, Dw = ["aria-hidden", "aria-label"], Mw = ["fill", "width", "height"], $w = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, Fw = { key: 0 };
function zw(e, t, n, i, a, r) {
  return b(), C("span", zt(e.$attrs, {
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
      c("path", $w, [
        n.title ? (b(), C("title", Fw, p(n.title), 1)) : U("", !0)
      ])
    ], 8, Mw))
  ], 16, Dw);
}
const Uw = /* @__PURE__ */ We(Pw, [["render", zw]]), Bw = ["aria-selected", "tabindex"], Hw = /* @__PURE__ */ kt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ sg({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Qf(e, "selected"), n = /* @__PURE__ */ st(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (b(), C("button", {
      class: Ce(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Gi),
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
          ge(yc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Te(() => [
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
          ge(yc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Te(() => [
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
    ], 10, Bw));
  }
}), jw = "_sidebarTabsButton_q3kBA", Vw = "_sidebarTabsButton_legacy_KQ4d1", Gw = "_sidebarTabsButton_selected_Pjayf", Kw = "_sidebarTabsButton_animatedHighlight_uvp-0", Ww = "_sidebarTabsButton__name_rlQsL", qw = "_sidebarTabsButton__icon_QzZg4", Yw = "_sidebarTabsButton__iconLayer_ZkZan", Xw = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", Zw = "_sidebarTabsButton__icon_pop_IA0By", Jw = "_sidebarTabsButton__legacyIcon_QhcNW", Qw = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: jw,
  sidebarTabsButton_legacy: Vw,
  sidebarTabsButton_selected: Gw,
  sidebarTabsButton_animatedHighlight: Kw,
  sidebarTabsButton__name: Ww,
  sidebarTabsButton__icon: qw,
  sidebarTabsButton__iconLayer: Yw,
  sidebarTabsButton__iconLayer_hidden: Xw,
  sidebarTabsButton__icon_pop: Zw,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: Jw
}, eC = {
  $style: Qw
}, tC = /* @__PURE__ */ We(Hw, [["__cssModules", eC]]), nC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: tC
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
      isLegacy34: Gi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [lb()]) : t.order - n.order), this.updateActive();
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
}, iC = { class: "app-sidebar-tabs" };
function aC(e, t, n, i, a, r) {
  const s = ze("NcAppSidebarTabsButton");
  return b(), C("div", iC, [
    r.hasMultipleTabs || r.showForSingleTab ? (b(), C("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ce(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = Xt(Je((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = Xt(Je((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = Xt(Je((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = Xt(Je((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = Xt(Je((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = Xt(Je((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = Xt(Je((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (b(), C("div", {
        key: 0,
        class: Ce(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: rn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : U("", !0),
      (b(!0), C(ce, null, Me(a.tabs, (o) => (b(), $e(s, {
        id: `tab-button-${o.id}`,
        key: o.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${o.id}`,
        selected: a.activeTab === o.id,
        animatedHighlight: a.highlightEnabled,
        tab: o,
        "onUpdate:selected": (l) => r.setActive(o.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : U("", !0),
    c("div", {
      class: Ce(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Le(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const rC = /* @__PURE__ */ We(nC, [["render", aC], ["__scopeId", "data-v-74190d2a"]]);
Vi(jb);
const sC = {
  name: "NcAppSidebar",
  components: {
    NcActions: oo,
    NcAppSidebarHeader: fw,
    NcAppSidebarTabs: rC,
    NcButton: qn,
    NcLoadingIcon: Cp,
    NcEmptyContent: yw,
    IconArrowRight: ep,
    IconClose: tp,
    IconDockRight: Aw,
    IconStar: Iw,
    IconStarOutline: Uw
  },
  directives: {
    Focus: V0,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: j0
  },
  inject: {
    ncContentSelector: {
      from: Qh,
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
    const e = /* @__PURE__ */ st(null);
    return hn("NcAppSidebar:header:ref", e), {
      uid: el(),
      isMobile: $b(),
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
    isSlotPopulated: nu,
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
      this.focusTrap || (this.focusTrap = Yc([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Qr(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ya.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, oC = ["aria-labelledby"], lC = { class: "app-sidebar-header__info" }, cC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, uC = { class: "app-sidebar-header__name-container" }, dC = { class: "app-sidebar-header__mainname-container" }, fC = ["placeholder", "value"], hC = ["title"], pC = {
  key: 2,
  class: "app-sidebar-header__description"
};
function vC(e, t, n, i, a, r) {
  const s = ze("IconDockRight"), o = ze("NcButton"), l = ze("NcLoadingIcon"), d = ze("IconStar"), u = ze("IconStarOutline"), h = ze("NcAppSidebarHeader"), _ = ze("IconArrowRight"), E = ze("NcActions"), N = ze("IconClose"), A = ze("NcAppSidebarTabs"), O = ze("NcEmptyContent"), I = Cu("focus"), M = Cu("click-outside");
  return b(), $e(Wg, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Te(() => [
      qe(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = Xt((...K) => r.onKeydownEsc && r.onKeydownEsc(...K), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (b(), $e($f, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ge(o, zt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (K) => e.$emit("update:open", !0))
          }), {
            icon: Te(() => [
              Le(e.$slots, "toggle-icon", {}, () => [
                ge(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : U("", !0),
        c("header", {
          class: Ce(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (b(), $e(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Le(e.$slots, "info", { key: 0 }, () => [
            c("div", lC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (b(), C("div", {
                key: 0,
                class: Ce(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: rn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...K) => r.onFigureClick && r.onFigureClick(...K)),
                onKeydown: t[2] || (t[2] = Xt((...K) => r.onFigureClick && r.onFigureClick(...K), ["enter"]))
              }, [
                Le(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : U("", !0),
              c("div", {
                class: Ce(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (b(), C("div", cC, [
                  Le(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (b(), $e(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Je(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Te(() => [
                        n.starLoading ? (b(), $e(l, { key: 0 })) : a.isStarred ? (b(), $e(d, {
                          key: 1,
                          size: 20
                        })) : (b(), $e(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : U("", !0)
                  ], !0)
                ])) : U("", !0),
                c("div", uC, [
                  c("div", dC, [
                    qe(ge(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Je(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Ya, !n.nameEditable]
                    ]),
                    n.nameEditable ? qe((b(), C("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Je((...K) => r.onSubmitName && r.onSubmitName(...K), ["prevent"]))
                    }, [
                      qe(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = Xt(Je((...K) => r.onDismissEditing && r.onDismissEditing(...K), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...K) => r.onNameInput && r.onNameInput(...K))
                      }, null, 40, fC), [
                        [I]
                      ]),
                      ge(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Te(() => [
                          ge(_, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : U("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (b(), $e(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Te(() => [
                        Le(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : U("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (b(), C("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Le(e.$slots, "subname", {}, () => [
                      Ae(p(n.subname), 1)
                    ], !0)
                  ], 8, hC)) : U("", !0)
                ])
              ], 2)
            ])
          ], !0),
          ge(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Je(r.closeSidebar, ["prevent"])
          }, {
            icon: Te(() => [
              ge(N, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (b(), C("div", pC, [
            Le(e.$slots, "description", {}, void 0, !0)
          ])) : U("", !0)
        ], 2),
        qe(ge(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Te(() => [
            Le(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Ya, !n.loading]
        ]),
        n.loading ? (b(), $e(O, { key: 1 }, {
          icon: Te(() => [
            ge(l, { size: 64 })
          ]),
          _: 1
        })) : U("", !0)
      ], 40, oC), [
        [Ya, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const gC = /* @__PURE__ */ We(sC, [["render", vC], ["__scopeId", "data-v-c2c6820b"]]), mC = {
  name: "NcActionLink",
  mixins: [ip],
  inject: {
    isInSemanticMenu: {
      from: Xc,
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
}, bC = ["role"], yC = ["download", "href", "aria-label", "target", "title", "role"], _C = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, wC = { class: "action-link__name" }, CC = ["textContent"], SC = ["textContent"], EC = {
  key: 2,
  class: "action-link__text"
};
function TC(e, t, n, i, a, r) {
  return b(), C("li", {
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
      Le(e.$slots, "icon", {}, () => [
        c("span", {
          "aria-hidden": "true",
          class: Ce(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: rn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (b(), C("span", _C, [
        c("strong", wC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, CC)
      ])) : e.isLongText ? (b(), C("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, SC)) : (b(), C("span", EC, p(e.text), 1)),
      U("", !0)
    ], 8, yC)
  ], 8, bC);
}
const Ba = /* @__PURE__ */ We(mC, [["render", TC], ["__scopeId", "data-v-32f01b7a"]]);
Vi(qb);
const AC = `<!--
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
`, kC = `<!--
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
`, OC = { class: "vue-skip-actions__container" }, NC = { class: "vue-skip-actions__headline" }, xC = { class: "vue-skip-actions__buttons" }, LC = /* @__PURE__ */ kt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    hn(Jh, o), hn(Qh, "#content-vue"), hn("appName", Y(() => t.appName));
    const n = ds(), i = /* @__PURE__ */ st(!1), a = /* @__PURE__ */ st(), r = Y(() => a.value === "navigation" ? kC : AC);
    Gf(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      bi("toggle-navigation", { open: !0 }), gi(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, d) => (b(), C("div", {
      id: "content-vue",
      class: Ce(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Gi) }]])
    }, [
      (b(), $e($f, { to: "#skip-actions" }, [
        c("div", OC, [
          c("div", NC, p(g(yt)("Keyboard navigation help")), 1),
          c("div", xC, [
            qe(ge(qn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Je(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: Te(() => [
                Ae(p(g(yt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Ya, i.value]
            ]),
            ge(qn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: Te(() => [
                Ae(p(g(yt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          qe(ge(Qo, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Ya, !g(n)]
          ])
        ])
      ])),
      Le(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), RC = /* @__PURE__ */ We(LC, [["__scopeId", "data-v-d13dcb98"]]), IC = ["href"], PC = ["lang", "dir"], DC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, MC = { class: "library-review-header" }, $C = { class: "library-muted library-catalogue-eyebrow" }, FC = { id: "library-review-heading" }, zC = ["aria-label"], UC = ["href", "aria-current"], BC = ["aria-label"], HC = ["name", "value"], jC = {
  type: "submit",
  class: "button secondary"
}, VC = ["aria-busy"], GC = { key: 0 }, KC = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, WC = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, qC = { class: "library-metadata-review-workbench-copy" }, YC = { class: "library-muted library-catalogue-eyebrow" }, XC = ["title"], ZC = {
  key: 0,
  class: "library-metadata-review-card"
}, JC = {
  class: "library-bidi-human",
  dir: "auto"
}, QC = { class: "library-muted" }, eS = {
  class: "library-bidi-machine",
  dir: "ltr"
}, tS = { class: "library-metadata-review-fields" }, nS = {
  class: "library-bidi-human",
  dir: "auto"
}, iS = {
  class: "library-bidi-human",
  dir: "auto"
}, aS = {
  class: "library-bidi-human",
  dir: "auto"
}, rS = {
  class: "library-bidi-machine",
  dir: "ltr"
}, sS = {
  class: "library-bidi-human",
  dir: "auto"
}, oS = {
  class: "library-bidi-human",
  dir: "auto"
}, lS = ["action"], cS = ["value"], uS = ["value"], dS = {
  type: "submit",
  class: "button secondary"
}, fS = { class: "library-metadata-review-actions" }, hS = ["href"], pS = ["href"], vS = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, gS = ["href"], mS = ["aria-label"], bS = ["onClick"], yS = {
  class: "library-bidi-human",
  dir: "auto"
}, _S = {
  key: 0,
  class: "library-muted"
}, wS = {
  class: "library-bidi-human",
  dir: "auto"
}, CS = {
  key: 1,
  class: "library-scan-error"
}, SS = {
  class: "library-bidi-human",
  dir: "auto"
}, ES = ["onClick"], TS = ["href"], AS = ["aria-label"], kS = ["href"], OS = {
  key: 1,
  class: "library-muted"
}, NS = { key: 0 }, xS = ["href"], LS = {
  key: 3,
  class: "library-muted"
}, RS = {
  key: 1,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, IS = { class: "library-home-header" }, PS = { class: "library-muted library-catalogue-eyebrow" }, DS = { id: "library-home-heading" }, MS = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, $S = { id: "library-continue-heading" }, FS = { class: "library-muted" }, zS = ["href"], US = {
  key: 0,
  class: "library-home-card-row"
}, BS = ["onClick"], HS = { class: "library-cover-frame" }, jS = ["src"], VS = { class: "library-cover-summary" }, GS = ["onClick"], KS = { dir: "auto" }, WS = {
  key: 0,
  class: "library-cover-creator"
}, qS = { dir: "auto" }, YS = ["href"], XS = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, ZS = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, JS = { id: "library-recent-heading" }, QS = { class: "library-muted" }, eE = ["href"], tE = {
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
  "aria-labelledby": "library-home-shelves-heading"
}, hE = { id: "library-home-shelves-heading" }, pE = { class: "library-muted" }, vE = ["href"], gE = ["aria-label"], mE = ["href"], bE = { dir: "auto" }, yE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, _E = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, wE = { id: "library-home-attention-heading" }, CE = { class: "library-muted" }, SE = ["href"], EE = {
  key: 2,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, TE = { class: "library-home-header" }, AE = { class: "library-muted library-catalogue-eyebrow" }, kE = { id: "library-shelves-landing-heading" }, OE = { class: "library-muted" }, NE = ["aria-label"], xE = ["href"], LE = { class: "library-shelf-summary-title" }, RE = { dir: "auto" }, IE = { class: "library-muted" }, PE = { dir: "auto" }, DE = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, ME = { class: "library-muted" }, $E = { class: "library-empty-actions" }, FE = ["href"], zE = ["href"], UE = {
  key: 3,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, BE = { class: "library-catalogue-header" }, HE = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, jE = { id: "library-catalogue-heading" }, VE = ["aria-label"], GE = ["aria-label"], KE = ["name", "value"], WE = { class: "library-quick-search-row" }, qE = ["title"], YE = ["placeholder"], XE = { "data-library-control": "sort" }, ZE = { value: "title" }, JE = { value: "recent" }, QE = { value: "publicationDate" }, eT = { value: "publication" }, tT = { value: "lastOpened" }, nT = { value: "format" }, iT = ["aria-label"], aT = ["aria-pressed"], rT = ["aria-pressed"], sT = ["aria-pressed"], oT = ["aria-pressed"], lT = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine",
  "data-library-control": "filter"
}, cT = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, uT = ["title", "aria-label"], dT = { class: "library-workspace-scope-badge" }, fT = ["aria-label"], hT = { value: "" }, pT = ["value"], vT = { value: "" }, gT = ["value"], mT = { value: "" }, bT = ["value"], yT = ["title"], _T = { value: "" }, wT = ["value"], CT = ["placeholder"], ST = { value: "" }, ET = ["value"], TT = { value: "" }, AT = ["value"], kT = { value: "" }, OT = ["value"], NT = { value: "" }, xT = ["value"], LT = { value: "" }, RT = ["value"], IT = { value: "" }, PT = ["value"], DT = { value: "" }, MT = { value: "1" }, $T = {
  type: "submit",
  class: "button primary"
}, FT = {
  href: "?",
  class: "button secondary"
}, zT = {
  id: "library-shelves",
  class: "library-navigation-section library-discovery-shortcuts",
  "aria-labelledby": "library-shelves-heading"
}, UT = { id: "library-shelves-heading" }, BT = { class: "library-shortcut-selectors" }, HT = ["title"], jT = { value: "" }, VT = ["value"], GT = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, KT = { value: "" }, WT = ["value"], qT = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, YT = { value: "" }, XT = ["value"], ZT = {
  id: "library-collections",
  class: "library-saved-collections"
}, JT = ["title"], QT = ["action", "title"], eA = ["value"], tA = ["value"], nA = ["placeholder", "disabled"], iA = ["disabled", "title"], aA = ["aria-label"], rA = ["href"], sA = ["action"], oA = ["value"], lA = {
  type: "submit",
  class: "button tertiary"
}, cA = ["aria-label"], uA = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, dA = ["title"], fA = { class: "library-workspace-panel-purpose" }, hA = { class: "library-workspace-scope-badge" }, pA = { "aria-live": "polite" }, vA = ["action"], gA = ["value"], mA = ["placeholder"], bA = ["title"], yA = ["action"], _A = ["value"], wA = ["placeholder"], CA = ["title"], SA = ["action"], EA = ["value"], TA = ["name", "value"], AA = ["title"], kA = ["action"], OA = ["value"], NA = ["name", "value"], xA = { name: "bulkEditField" }, LA = { value: "publicationType" }, RA = { value: "subtitle" }, IA = { value: "creators" }, PA = { value: "publication" }, DA = { value: "publicationDate" }, MA = { value: "language" }, $A = { value: "publisher" }, FA = { value: "genres" }, zA = { value: "classifications" }, UA = ["placeholder"], BA = ["title"], HA = ["action"], jA = ["value"], VA = ["name", "value"], GA = ["title"], KA = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, WA = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, qA = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, YA = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, XA = { class: "library-muted library-catalogue-eyebrow" }, ZA = ["title"], JA = ["aria-label"], QA = { key: 0 }, e2 = { key: 1 }, t2 = { key: 2 }, n2 = ["aria-label"], i2 = { key: 0 }, a2 = { key: 1 }, r2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, s2 = { class: "library-muted library-catalogue-eyebrow" }, o2 = ["title"], l2 = ["aria-label"], c2 = ["href"], u2 = {
  key: 0,
  class: "library-notice"
}, d2 = { class: "library-publication-issue-label" }, f2 = ["href"], h2 = { class: "library-muted" }, p2 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, v2 = ["title"], g2 = ["href"], m2 = { class: "library-catalogue-status-row" }, b2 = { class: "library-muted library-filter-result-summary" }, y2 = { key: 0 }, _2 = { href: "?" }, w2 = ["aria-label"], C2 = { class: "library-pagination-range" }, S2 = { key: 0 }, E2 = ["href"], T2 = {
  key: 1,
  class: "library-muted"
}, A2 = ["href"], k2 = {
  key: 3,
  class: "library-muted"
}, O2 = ["aria-label"], N2 = ["href", "aria-label"], x2 = ["title"], L2 = { class: "library-empty-actions" }, R2 = ["href"], I2 = { class: "library-muted" }, P2 = ["title"], D2 = { class: "library-empty-actions" }, M2 = ["href"], $2 = ["title"], F2 = { class: "library-empty-actions" }, z2 = ["href"], U2 = {
  href: "?",
  class: "button primary"
}, B2 = ["title"], H2 = { class: "library-empty-actions" }, j2 = ["href"], V2 = {
  key: 6,
  class: "library-select-visible"
}, G2 = ["checked"], K2 = {
  key: 7,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, W2 = { class: "library-item-selection" }, q2 = ["checked", "aria-label", "onChange"], Y2 = { class: "library-catalogue-list-main" }, X2 = ["onClick"], Z2 = {
  class: "library-bidi-human",
  dir: "auto"
}, J2 = {
  key: 0,
  class: "library-muted"
}, Q2 = {
  class: "library-bidi-human",
  dir: "auto"
}, ek = { class: "library-catalogue-list-metadata" }, tk = { key: 0 }, nk = {
  class: "library-bidi-human",
  dir: "auto"
}, ik = { key: 1 }, ak = { key: 2 }, rk = ["dir"], sk = { key: 3 }, ok = {
  class: "library-bidi-human",
  dir: "auto"
}, lk = { class: "library-catalogue-list-actions" }, ck = ["href"], uk = ["onClick"], dk = { class: "library-item-selection" }, fk = ["checked", "aria-label", "onChange"], hk = ["aria-labelledby", "aria-expanded", "onClick"], pk = ["id"], vk = { class: "library-cover-frame" }, gk = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, mk = ["src", "onLoad", "onError"], bk = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, yk = ["action", "onSubmit"], _k = ["value"], wk = ["value"], Ck = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], Sk = ["data-library-star-error"], Ek = { class: "library-cover-summary" }, Tk = { class: "library-cover-primary" }, Ak = ["id"], kk = ["onClick"], Ok = {
  class: "library-bidi-human",
  dir: "auto"
}, Nk = {
  key: 0,
  class: "library-cover-creator"
}, xk = {
  class: "library-bidi-human",
  dir: "auto"
}, Lk = {
  key: 1,
  class: "library-cover-badges"
}, Rk = {
  key: 0,
  class: "library-cover-badge"
}, Ik = {
  class: "library-bidi-machine",
  dir: "ltr"
}, Pk = {
  key: 1,
  class: "library-cover-context"
}, Dk = {
  class: "library-bidi-human",
  dir: "auto"
}, Mk = { class: "library-cover-primary-actions" }, $k = ["href"], Fk = ["aria-label"], zk = { class: "library-pagination-range" }, Uk = { key: 0 }, Bk = ["href"], Hk = {
  key: 1,
  class: "library-muted"
}, jk = ["href"], Vk = {
  key: 3,
  class: "library-muted"
}, Gk = { class: "library-sidebar-content" }, Kk = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, Wk = ["role"], qk = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, Yk = { class: "library-sidebar-publication-header" }, Xk = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, Zk = ["src"], Jk = { class: "library-sidebar-publication-summary" }, Qk = { class: "library-muted library-catalogue-eyebrow" }, eO = {
  class: "library-bidi-human",
  dir: "auto"
}, tO = { key: 0 }, nO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, iO = { class: "library-detail-drawer-actions" }, aO = ["href"], rO = ["aria-label"], sO = ["aria-current", "onClick"], oO = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, lO = { id: "library-sidebar-overview-heading" }, cO = {
  key: 0,
  class: "library-sidebar-description"
}, uO = {
  class: "library-bidi-human",
  dir: "auto"
}, dO = { class: "library-detail-drawer-facts" }, fO = { key: 0 }, hO = { key: 1 }, pO = { key: 2 }, vO = { key: 3 }, gO = { key: 4 }, mO = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, bO = { id: "library-sidebar-metadata-heading" }, yO = ["placeholder"], _O = ["onUpdate:modelValue", "aria-label", "placeholder"], wO = ["onUpdate:modelValue", "aria-label"], CO = ["onClick"], SO = { class: "library-muted" }, EO = {
  key: 0,
  role: "alert"
}, TO = {
  key: 1,
  role: "status"
}, AO = ["disabled"], kO = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, OO = { id: "library-sidebar-suggestions-heading" }, NO = { class: "library-muted" }, xO = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, LO = { id: "library-sidebar-activity-heading" }, RO = { class: "library-detail-drawer-facts" }, IO = { key: 0 }, PO = { key: 1 }, DO = { key: 2 }, MO = { dir: "ltr" }, $O = ["aria-label"], FO = ["disabled"], zO = ["disabled"], UO = "/apps/library", BO = 2147483647, HO = {
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
    function r(S, T) {
      return Object.prototype.hasOwnProperty.call(a, S) && String(T ?? "").trim() === a[S];
    }
    function s(S) {
      const T = new URLSearchParams(S);
      for (const f of Object.keys(a)) {
        const H = [...new Set([...T.keys()].filter((De) => De === f || De.startsWith(`${f}[`)))], Oe = H.reduce((De, mt) => De + T.getAll(mt).length, 0);
        if (Oe > 1 || H.some((De) => De !== f)) {
          for (const De of H) T.delete(De);
          continue;
        }
        f !== "status" && Oe === 1 && !r(f, T.get(f)) && T.delete(f);
      }
      return T;
    }
    function o(S) {
      return Object.keys(a).some((T) => S.getAll(T).length === 1 && r(T, S.get(T)));
    }
    function l(S) {
      return Object.fromEntries(Object.entries(S || {}).filter(([T, f]) => T === "status" || !Object.prototype.hasOwnProperty.call(a, T) || r(T, f)));
    }
    const d = /* @__PURE__ */ It({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ It((d.items || []).map((S) => ({ ...S }))), h = Y(() => u), _ = Y(() => d.shelves || []), E = Y(() => d.formats || []), N = Y(() => d.publications || []), A = Y(() => d.publicationSummaries || []), O = Y(() => d.publicationIssueContext || null), I = Y(() => d.publicationYears || []), M = Y(() => d.creators || []), K = Y(() => d.scanStatuses || []), $ = Y(() => d.workflowStatuses || []), le = Y(() => d.genres || []), ue = Y(() => d.classifications || []), B = Y(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), j = /* @__PURE__ */ It({
      q: d.activeFilters?.q || "",
      view: d.activeFilters?.view || "compact",
      type: d.activeFilters?.type || "",
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
    for (const S of Object.keys(a))
      S !== "status" && (r(S, j[S]) || (j[S] = ""));
    const Z = Object.fromEntries(Object.keys(j).map((S) => [S, S === "sort" ? "title" : S === "view" ? "compact" : ""])), se = window.location.pathname.indexOf(UO), de = se >= 0 ? window.location.pathname.slice(0, se) : "", J = {
      catalogue: `${de}/apps/library/`,
      review: `${de}/apps/library/?scannerConflicts=1`,
      settings: `${de}/settings/user/library`
    };
    function ne(S, T) {
      if (typeof S != "string" || S === "") return T;
      try {
        const f = de ? `${de}/` : "/";
        let H = S;
        for (let Oe = 0; Oe < 5; Oe += 1) {
          if (!H.startsWith("/") || H.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(H)) return T;
          const De = new URL(H, window.location.origin);
          if (De.origin !== window.location.origin || !De.pathname.startsWith(f)) return T;
          const mt = H.split(/[?#]/, 1)[0];
          for (const Pa of mt.split("/")) {
            let Da = Pa;
            for (let Ma = 0; Ma < 5; Ma += 1) {
              const Un = decodeURIComponent(Da);
              if (/[\\/\u0000-\u001f\u007f]/.test(Un) || Un === "." || Un === "..") return T;
              if (Un === Da) break;
              if (Da = Un, Ma === 4) return T;
            }
          }
          const Qt = decodeURI(H);
          if (Qt === H) return S;
          H = Qt;
        }
        return T;
      } catch {
        return T;
      }
    }
    const P = Y(() => ne(d.settingsUrl, J.settings)), D = Y(() => ne(d.catalogueRootUrl, J.catalogue)), X = Y(() => ne(d.homeUrl, `${J.catalogue}?home=1`)), ae = Y(() => ne(d.shelvesUrl, `${J.catalogue}?shelves=1`)), ie = Y(() => ne(d.reviewUrl || d.scannerConflictReviewUrl, J.review)), fe = Y(() => Object.entries(a).some(([S, T]) => j[S] === T)), pe = Y(() => i.reduce((S, T) => S + Number(oe.value[T.countKey] || 0), 0)), Se = Y(() => d.surface === "home"), me = Y(() => d.surface === "shelves"), Ye = Y(() => !Se.value && !me.value && !fe.value && !j.starred && j.sort !== "lastOpened" && !j.shelf), ke = Y(() => [
      { key: "home", name: m("library", "Home"), href: X.value, active: Se.value },
      { key: "all", name: m("library", "All publications"), href: D.value, active: Ye.value },
      { key: "starred", name: m("library", "Starred"), href: `${D.value}?starred=1`, active: j.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${D.value}?sort=lastOpened`, active: j.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: ae.value, active: me.value || !!j.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${D.value}#library-collections`, active: !1 }
    ]), He = Y(() => d.requestToken || ""), ot = Y(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), pt = Y(() => d.itemSidebarUrlTemplate || `${de}/apps/library/items/__ITEM_ID__/sidebar`), Ut = Y(() => d.batchTagUrl || "/apps/library/bulk/tags"), it = Y(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), yn = Y(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), z = Y(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), v = Y(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), w = Y(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const k = Y(() => d.discoveryPage === "publication"), L = Y(() => d.discoveryPage === "year"), x = Y(() => d.discoveryPage === "creator"), F = Y(() => k.value || L.value || x.value), W = Y(() => d.discoveryTitle || j.publication || j.year || j.creator || ""), G = Y(() => F.value ? W.value : m("library", "Library")), ee = Y(() => x.value ? m("library", "Creator") : L.value ? m("library", "Publication year") : m("library", "Publication / series")), V = Y(() => Number(d.rootCount || 0)), be = Y(() => Number(d.enabledRootCount || 0)), re = Y(() => V.value === 0), ve = Y(() => V.value > 0 && be.value === 0), we = Y(() => vt.value.length > 0), Ne = {
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
    }, Pe = Y(() => {
      if (typeof window > "u") return "";
      const S = new URLSearchParams(window.location.search);
      if (S.get("batchMetadataApplyResult") !== "1") return "";
      const T = S.get("batchMetadataField") || "field", f = S.get("batchMetadataApplied") || "0", H = S.get("batchMetadataUnchanged") || "0", Oe = S.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: T, unchanged: H, skipped: Oe });
    }), Re = Y(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Ze = Y(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), tt = Y(() => d.savedCollections || []), wt = Y(() => d.savedCollectionSaveUrl || "/apps/library/collections"), Ot = Y(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Bt = ["compact", "gallery", "list", "shelf"], lt = Y(() => Bt.includes(j.view) ? j.view : "compact"), ct = Y(() => ({
      "library-cover-gallery--compact": lt.value === "compact",
      "library-cover-gallery--gallery": lt.value === "gallery",
      "library-cover-gallery--shelf": lt.value === "shelf"
    })), vt = Y(() => Object.entries(Ne).map(([S, T]) => ({ key: S, label: m("library", T), value: j[S] || "" })).filter((S) => String(S.value).trim() !== "")), Ki = Y(() => Object.entries(j).filter(([S, T]) => !["q", "sort", "starred"].includes(S) && String(T || "").trim() !== "").map(([S, T]) => ({ key: S, value: T }))), Rn = Y(() => Object.entries(l(j)).filter(([S, T]) => String(T || "").trim() !== "").map(([S, T]) => ({ key: S, value: T }))), tr = Y(() => Rn.value.filter(({ key: S, value: T }) => S !== "q" && !(S === "sort" && T === "title"))), Wi = /* @__PURE__ */ It({}), _n = Y(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), Zn = Y(() => d.homeShelves || []), nr = Y(() => d.shelfSummaries || []), Ea = Y(() => d.needsAttention || { count: 0, url: `${D.value}?needsMetadata=1` }), Gt = /* @__PURE__ */ st([]), qi = Y(() => new Set(Gt.value));
    function ir(S, T) {
      const f = new Set(Gt.value);
      T ? f.add(Number(S)) : f.delete(Number(S)), Gt.value = [...f];
    }
    function Ta(S) {
      Gt.value = S.currentTarget.checked ? h.value.map((T) => Number(T.id)) : [];
    }
    function Aa() {
      const S = new Set(h.value.map((T) => Number(T.id)));
      Gt.value = Gt.value.filter((T) => S.has(T));
    }
    function sn(S) {
      const T = S.target;
      if (T instanceof HTMLFormElement) {
        T.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of Gt.value) {
          const H = document.createElement("input");
          H.type = "hidden", H.name = "itemIds[]", H.value = String(f), H.dataset.librarySelectedId = "1", T.appendChild(H);
        }
      }
    }
    const ye = /* @__PURE__ */ st(null), wn = /* @__PURE__ */ st(null), gt = /* @__PURE__ */ It({ loading: !1, error: "", missing: !1 }), Jn = /* @__PURE__ */ st("overview"), Kt = /* @__PURE__ */ It({ saving: !1, saved: !1, error: "" }), ut = /* @__PURE__ */ It({ title: "", publicationDate: "", identifiers: [] }), ar = /* @__PURE__ */ st(null), Cn = /* @__PURE__ */ st(null), Qn = /* @__PURE__ */ st(!1);
    let ei = null, Sn = null, ka = null, nt = !1, on = null, rr = 0;
    const En = Y(() => wn.value !== null), ti = Y(() => ye.value ? h.value.findIndex((S) => S.id === ye.value.id) : -1), Yi = Y(() => ti.value > 0 ? h.value[ti.value - 1] : null), Xi = Y(() => ti.value >= 0 && ti.value < h.value.length - 1 ? h.value[ti.value + 1] : null), rl = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], sl = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Oa(S) {
      const T = String(S ?? "").trim(), f = T.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : T;
    }
    function fs(S) {
      return { ...S, publicationDate: Oa(S?.publicationDate) };
    }
    function Tn(S) {
      ut.title = String(S?.title || ""), ut.publicationDate = Oa(S?.publicationDate), ut.identifiers = Array.isArray(S?.identifiers) ? S.identifiers.map((T) => ({ scheme: String(T?.scheme || ""), displayValue: String(T?.displayValue || T?.value || "") })) : [], Object.assign(Kt, { saving: !1, saved: !1, error: "" });
    }
    function hs() {
      ut.identifiers.push({ scheme: "", displayValue: "" });
    }
    function Na(S) {
      ut.identifiers.splice(S, 1);
    }
    async function ni() {
      const S = ye.value;
      if (!S?.updateUrl || Kt.saving) return;
      Object.assign(Kt, { saving: !0, saved: !1, error: "" });
      const T = new FormData();
      T.set("requesttoken", He.value), T.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "genres", "classifications", "personalRating"]) {
        const H = S[f];
        T.set(f, Array.isArray(H) ? H.join(", ") : String(H ?? ""));
      }
      T.set("title", ut.title), T.set("publicationDate", Oa(ut.publicationDate)), ut.identifiers.forEach((f, H) => {
        T.set(`identifiers[${H}][scheme]`, f.scheme), T.set(`identifiers[${H}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(S.updateUrl, { method: "POST", body: T, credentials: "same-origin", headers: { Accept: "application/json" } }), H = await f.json().catch(() => ({}));
        if (!f.ok || H.saved !== !0) throw new Error(H.error || m("library", "Metadata could not be saved."));
        S.title = ut.title.trim(), S.publicationDate = Oa(ut.publicationDate), S.identifiers = ut.identifiers.filter((De) => De.scheme.trim() || De.displayValue.trim()).map((De) => ({ ...De }));
        const Oe = h.value.find((De) => Number(De.id) === Number(S.id));
        Oe && (Oe.title = S.title, Oe.publicationDate = S.publicationDate), Kt.saved = !0;
      } catch (f) {
        Kt.error = f?.message || m("library", "Metadata could not be saved.");
      } finally {
        Kt.saving = !1;
      }
    }
    const In = Y(() => {
      const S = r("scannerConflicts", j.scannerConflicts) || r("weakMetadata", j.weakMetadata), T = S ? h.value.find((f) => Ra(f).length > 0) : null;
      return {
        enabled: S,
        item: T,
        fields: T ? Ra(T) : [],
        reviewNextUrl: w.value,
        skipUrl: B.value.nextUrl || w.value
      };
    }), xa = Y(() => i.map((S) => ({
      ...S,
      label: m("library", S.label),
      href: `${D.value}?${encodeURIComponent(S.key)}=${encodeURIComponent(S.value)}`,
      active: String(j[S.key] || "") === S.value
    })));
    function La(S) {
      return Array.isArray(S) ? JSON.stringify(S) : S == null ? "" : String(S);
    }
    function Ra(S) {
      const T = S.fieldValues || {}, f = S.fieldSources || {};
      return rl.filter((H) => Object.prototype.hasOwnProperty.call(T, H)).map((H) => {
        const Oe = La(S[H]), De = La(T[H]), mt = La(f[H] || S.metadataSource || "scanner"), Qt = mt.includes("filename") || mt.includes("path") ? De : "", Pa = mt.includes("sidecar") ? De : "";
        return { field: H, currentValue: Oe, scannerCandidate: De, pathTemplateCandidate: Qt, sidecarValue: Pa, sourceProvenance: mt, differs: Oe !== De };
      }).filter((H) => H.differs);
    }
    let Pn = 0, Dn = null;
    function Zi() {
      const S = new URLSearchParams(window.location.search).getAll("item");
      if (S.length !== 1 || !/^[1-9][0-9]*$/.test(S[0])) return null;
      const T = Number(S[0]);
      return Number.isSafeInteger(T) && T <= BO ? T : null;
    }
    function Ia(S, T = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), S !== null && f.searchParams.set("item", String(S)), history[`${T}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function Mn(S, { historyMode: T = "push", seed: f = null } = {}) {
      Dn?.abort();
      const H = ++Pn, Oe = new AbortController();
      Dn = Oe, wn.value = S, Jn.value = "overview", ye.value = f && Number(f.id) === S ? fs(f) : null, ye.value && Tn(ye.value), Object.assign(gt, { loading: !0, error: "", missing: !1 }), T !== "none" && Ia(S, T);
      try {
        const De = pt.value.replace("__ITEM_ID__", encodeURIComponent(String(S))), mt = await fetch(De, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: Oe.signal });
        if (H !== Pn) return;
        if (!mt.ok) {
          ye.value = null, gt.missing = mt.status === 404, gt.error = mt.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const Qt = await mt.json();
        if (H !== Pn) return;
        if (typeof Qt?.item?.id != "number" || !Number.isSafeInteger(Qt.item.id) || Qt.item.id !== S) {
          ye.value = null, gt.missing = !1, gt.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        ye.value = fs(Qt.item), Tn(ye.value), await gi();
      } catch (De) {
        H === Pn && De?.name !== "AbortError" && (ye.value = null, gt.missing = !1, gt.error = m("library", "Could not load publication details. Try again."));
      } finally {
        H === Pn && (gt.loading = !1, Dn = null);
      }
    }
    function Ct(S, T) {
      Ti(), ei = T?.currentTarget instanceof HTMLElement ? T.currentTarget : null, Mn(Number(S.id), { seed: S });
    }
    function $n({ historyMode: S = "push", restoreFocus: T = !0 } = {}) {
      ka = T ? ei : null, ei = null, Dn?.abort(), Dn = null, Pn += 1, wn.value = null, ye.value = null, Jn.value = "overview", Object.assign(gt, { loading: !1, error: "", missing: !1 }), S !== "none" && Ia(null, S);
    }
    function Jt() {
      Qn.value ? (Cn.value?.$refs?.sidebar || Cn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : ar.value?.focus();
    }
    function ol() {
      const S = ka;
      if (ka = null, Ti(), nt || !S?.isConnected) return;
      const T = rr;
      on = window.requestAnimationFrame(() => {
        on = null, !(T !== rr || nt || En.value || !S.isConnected) && S.focus();
      });
    }
    function Ti() {
      rr += 1, on !== null && (window.cancelAnimationFrame(on), on = null);
    }
    function Ji(S = Sn) {
      Qn.value = !!S?.matches, En.value && gi(Jt);
    }
    function Qi(S) {
      S && Mn(Number(S.id), { seed: S });
    }
    const ii = /* @__PURE__ */ st(null);
    let ea = null, ln = 0, Fn = null;
    const Wt = /* @__PURE__ */ It({ loading: !1, error: "" });
    function ps(S) {
      const T = s(new FormData(S));
      for (const f of Array.from(T.keys()))
        String(T.get(f) || "").trim() === "" && T.delete(f);
      return T.delete("page"), T.get("view") === "compact" && T.delete("view"), T;
    }
    function ll(S) {
      u.splice(0, u.length, ...(S.items || []).map((T) => ({ ...T }))), Aa();
      for (const T of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(S, T) && (d[T] = S[T]);
      Object.assign(j, Z, S.activeFilters || {});
    }
    async function zn(S, T = null) {
      const f = S?.currentTarget?.tagName === "FORM" ? S.currentTarget : S?.currentTarget?.form;
      if (!f && !T?.params) return;
      const H = s(T?.params ?? ps(f)), Oe = H.toString(), De = Oe ? `?${Oe}` : "", mt = T?.generation ?? ++ln, Qt = o(H), Pa = T?.historyMode ?? (Qt ? "push" : "replace"), Da = T?.historyTraversal === !0;
      if (mt !== ln) return;
      T === null && Fn?.abort();
      const Ma = new AbortController();
      Fn = Ma, Wt.loading = !0, Wt.error = "";
      try {
        const Un = await fetch(ot.value + De, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ma.signal
        });
        if (mt !== ln) return;
        if (!Un.ok) {
          Da ? Ai(H) : Qt ? Wt.error = m("library", "Could not load this review queue. Try again.") : Ai(H);
          return;
        }
        const Bp = await Un.json();
        if (mt !== ln) return;
        ll(Bp), Pa !== "none" && (history[Pa === "push" ? "pushState" : "replaceState"]({}, "", Oe ? `?${Oe}` : window.location.pathname), En.value && $n({ historyMode: "none" }));
      } catch (Un) {
        mt === ln && Un?.name !== "AbortError" && (Da ? Ai(H) : Qt ? Wt.error = m("library", "Could not load this review queue. Try again.") : Ai(H));
      } finally {
        mt === ln && (Fn = null, Wt.loading = !1);
      }
    }
    function ta() {
      Fn?.abort();
      const S = new URLSearchParams(window.location.search), T = Zi();
      S.has("item") && T === null && (S.delete("item"), history.replaceState({}, "", `${window.location.pathname}${S.toString() ? `?${S}` : ""}${window.location.hash}`)), T === null ? $n({ historyMode: "none" }) : Mn(T, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === T) || null }), S.delete("item"), zn(null, {
        params: s(S),
        generation: ++ln,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Ai(S) {
      const T = document.createElement("form");
      T.method = "get", T.action = window.location.pathname, T.hidden = !0;
      for (const [f, H] of S.entries()) {
        const Oe = document.createElement("input");
        Oe.type = "hidden", Oe.name = f, Oe.value = H, T.appendChild(Oe);
      }
      document.body.appendChild(T), T.submit(), T.remove();
    }
    function Q(S, T = null, f = null) {
      if (T === null) {
        zn(S);
        return;
      }
      zn({ currentTarget: S }, { params: T, generation: f });
    }
    function y(S) {
      const T = S?.currentTarget?.form;
      if (!T) return;
      window.clearTimeout(ea);
      const f = ++ln, H = ps(T);
      Fn?.abort(), Fn = null, ea = window.setTimeout(() => Q(T, H, f), 350);
    }
    function R(S) {
      const T = new URLSearchParams();
      for (const [H, Oe] of Object.entries(j)) {
        const De = String(Oe || "").trim();
        De !== "" && H !== S && !(H === "sort" && De === "title") && !(H === "view" && De === "compact") && T.set(H, De);
      }
      const f = T.toString();
      return f ? `?${f}` : "?";
    }
    function q() {
      return R("q");
    }
    const oe = Y(() => d.smartViewCounts || {}), he = Y(() => {
      const S = {};
      for (const [T, f] of Object.entries(j)) {
        const H = String(f || "").trim();
        H !== "" && !(T === "sort" && H === "title") && (S[T] = H);
      }
      return S;
    }), Ee = Y(() => JSON.stringify(he.value)), Ve = Y(() => Object.keys(he.value).length > 0);
    function Xe(S) {
      if (!Bt.includes(S)) return;
      j.view = S;
      const T = s(window.location.search);
      S === "compact" ? T.delete("view") : T.set("view", S), T.delete("page"), history.replaceState({}, "", T.toString() ? `?${T.toString()}` : window.location.pathname);
    }
    function Nt(S) {
      const T = s(window.location.search);
      for (const H of Object.keys(Ne))
        T.delete(H);
      T.delete("page");
      for (const [H, Oe] of Object.entries(S))
        String(Oe || "").trim() !== "" && T.set(H, String(Oe));
      const f = T.toString();
      return f ? `?${f}` : "?";
    }
    function xt(S) {
      return Nt(S || {});
    }
    function sr(S) {
      return Ot.value.replace("__COLLECTION_ID__", encodeURIComponent(String(S || "0")));
    }
    function rt(S) {
      return String(S || "").toUpperCase();
    }
    function Rp(S) {
      return A.value.find((f) => f.publication === S)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(S)}`;
    }
    function Ip(S) {
      return d.publicationYearLandingUrls?.[S] || `/apps/library/years/${encodeURIComponent(S)}`;
    }
    function Pp(S) {
      return d.creatorLandingUrls?.[S] || `/apps/library/creators/${encodeURIComponent(S)}`;
    }
    function cl(S) {
      const T = S?.target?.value || "";
      T && (window.location.href = T);
    }
    function or(S) {
      return Wi[S.id] || "loading";
    }
    function Dp(S) {
      Wi[S.id] = "loaded";
    }
    function Mp(S) {
      Wi[S.id] = "error";
    }
    function ul(S) {
      const T = String(S?.publication || "").trim(), f = String(S?.publicationDate || "").trim();
      return T && f ? `${T} · ${f}` : T || f ? T || f : [S?.publicationType, rt(S?.extension)].filter(Boolean).join(" · ");
    }
    function $p(S) {
      const T = String(S?.tagName || "").toLowerCase();
      return S?.isContentEditable || ["input", "select", "textarea", "button"].includes(T);
    }
    function Fp(S) {
      S.key !== "/" || S.metaKey || S.ctrlKey || S.altKey || S.shiftKey || $p(S.target) || (S.preventDefault(), ii.value?.focus(), ii.value?.select?.());
    }
    function zp(S) {
      S.key !== "Escape" || document.activeElement !== ii.value || j.q === "" || (S.preventDefault(), j.q = "", ii.value.value = "", window.clearTimeout(ea), Q({ currentTarget: ii.value }));
    }
    function Up(S) {
      if (!En.value || S.metaKey || S.ctrlKey || S.altKey)
        return !1;
      if (S.key === "Escape")
        return S.preventDefault(), $n(), !0;
      if (S.key === "Tab" && Qn.value) {
        if (Cn.value?.focusTrap) return !1;
        const T = Cn.value?.$refs?.sidebar || Cn.value?.$el || Cn.value, f = [...T?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((De) => !De.hidden && De.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const H = f[0], Oe = f[f.length - 1];
        if (S.shiftKey && (document.activeElement === H || !T.contains(document.activeElement)))
          return S.preventDefault(), Oe.focus(), !0;
        if (!S.shiftKey && (document.activeElement === Oe || !T.contains(document.activeElement)))
          return S.preventDefault(), H.focus(), !0;
      }
      return S.key === "ArrowLeft" && Yi.value ? (S.preventDefault(), Qi(Yi.value), !0) : S.key === "ArrowRight" && Xi.value ? (S.preventDefault(), Qi(Xi.value), !0) : !1;
    }
    function uu(S) {
      Up(S) || (Fp(S), zp(S));
    }
    ji(() => {
      window.addEventListener("keydown", uu), window.addEventListener("popstate", ta), Sn = window.matchMedia?.("(max-width: 1023px)") || null, Ji(), Sn?.addEventListener ? Sn.addEventListener("change", Ji) : Sn?.addListener?.(Ji);
      const S = new URLSearchParams(window.location.search), T = Zi();
      S.has("item") && T === null ? (S.delete("item"), history.replaceState({}, "", `${window.location.pathname}${S.toString() ? `?${S}` : ""}${window.location.hash}`)) : T !== null && Mn(T, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === T) || null });
    }), er(() => {
      nt = !0, Ti(), window.removeEventListener("keydown", uu), window.removeEventListener("popstate", ta), window.clearTimeout(ea), ln += 1, Fn?.abort(), Fn = null, Pn += 1, Dn?.abort(), Dn = null, Sn?.removeEventListener ? Sn.removeEventListener("change", Ji) : Sn?.removeListener?.(Ji), Sn = null, ka = null;
    });
    const lr = /* @__PURE__ */ It({}), cr = /* @__PURE__ */ It({});
    async function du(S, T) {
      const f = T?.currentTarget?.closest?.("form") || T?.currentTarget;
      if (!f || !S?.starUrl || lr[S.id]) return;
      const H = !!S.starred;
      lr[S.id] = !0, cr[S.id] = "", S.starred = !H;
      try {
        (await fetch(S.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (S.starred = H, cr[S.id] = m("library", "Could not update star. Try again."));
      } catch {
        S.starred = H, cr[S.id] = m("library", "Could not update star. Try again.");
      } finally {
        lr[S.id] = !1;
      }
    }
    return (S, T) => (b(), $e(g(RC), { "app-name": "library" }, {
      default: Te(() => [
        ge(g(h_), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: Te(() => [
            ge(g(Zh), null, {
              default: Te(() => [
                (b(!0), C(ce, null, Me(ke.value, (f) => (b(), $e(g(Jd), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                ge(g(Jd), {
                  active: fe.value,
                  href: ie.value,
                  name: pe.value > 0 ? `${g(m)("library", "Review")} (${pe.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Te(() => [
            c("a", {
              class: "library-navigation-settings-link",
              href: P.value
            }, [
              T[24] || (T[24] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(m)("library", "Settings")), 1)
            ], 8, IC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ge(g(Ny), null, {
          default: Te(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: d.language || "en",
              dir: d.direction || "ltr",
              tabindex: "-1"
            }, [
              fe.value ? (b(), C("section", DC, [
                c("header", MC, [
                  c("p", $C, p(g(m)("library", "Metadata cleanup")), 1),
                  c("h2", FC, p(g(m)("library", "Review")), 1),
                  c("p", null, p(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (b(!0), C(ce, null, Me(xa.value, (f) => (b(), C("a", {
                    key: f.key,
                    class: Ce(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(Number(oe.value[f.countKey] || 0)), 1)
                  ], 10, UC))), 128))
                ], 8, zC),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: Je(zn, ["prevent"])
                }, [
                  (b(!0), C(ce, null, Me(tr.value, (f) => (b(), C("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, HC))), 128)),
                  c("label", null, [
                    Ae(p(g(m)("library", "Search within this queue")), 1),
                    qe(c("input", {
                      "onUpdate:modelValue": T[0] || (T[0] = (f) => j.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [Li, j.q]
                    ])
                  ]),
                  c("button", jC, p(g(m)("library", "Apply")), 1)
                ], 40, BC),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Wt.loading ? "true" : "false"
                }, [
                  Wt.loading ? (b(), C("span", GC, p(g(m)("library", "Loading review queue…")), 1)) : U("", !0)
                ], 8, VC),
                Wt.error ? (b(), C("p", KC, p(Wt.error), 1)) : U("", !0),
                In.value.enabled ? (b(), C("section", WC, [
                  c("div", qC, [
                    c("p", YC, p(g(m)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(m)("library", "Review next suggestion")), 9, XC)
                  ]),
                  In.value.item ? (b(), C("article", ZC, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", JC, p(In.value.item.title), 1)
                      ]),
                      c("span", QC, [
                        c("bdi", eS, p(In.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", tS, [
                      (b(!0), C(ce, null, Me(In.value.fields, (f) => (b(), C("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", nS, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", iS, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", aS, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", rS, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", sS, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", oS, p(f.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: In.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: He.value
                          }, null, 8, cS),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, uS),
                          T[25] || (T[25] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", dS, p(g(m)("library", "Use suggested value")), 1)
                        ], 8, lS)
                      ]))), 128))
                    ]),
                    c("footer", fS, [
                      c("a", {
                        class: "button secondary",
                        href: In.value.item.detailsUrl
                      }, p(g(m)("library", "Maintenance")), 9, hS),
                      c("a", {
                        class: "button secondary",
                        href: In.value.skipUrl
                      }, p(g(m)("library", "Skip to next suggestion")), 9, pS)
                    ])
                  ])) : U("", !0)
                ])) : U("", !0),
                h.value.length === 0 && !Wt.loading && !Wt.error ? (b(), C("div", vS, [
                  c("h3", null, p(g(m)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: D.value
                  }, p(g(m)("library", "Back to Library")), 9, gS)
                ])) : (b(), C("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(m)("library", "Review results")
                }, [
                  (b(!0), C(ce, null, Me(h.value, (f) => (b(), C("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (H) => Ct(f, H)
                        }, [
                          c("bdi", yS, p(f.title), 1)
                        ], 8, bS)
                      ]),
                      f.creators ? (b(), C("p", _S, [
                        c("bdi", wS, p(f.creators), 1)
                      ])) : U("", !0),
                      f.scanError ? (b(), C("p", CS, [
                        c("bdi", SS, p(f.scanError), 1)
                      ])) : U("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (H) => Ct(f, H)
                      }, p(g(m)("library", "Details")), 9, ES),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, TS)
                    ])
                  ]))), 128))
                ], 8, mS)),
                h.value.length > 0 ? (b(), C("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  B.value.previousUrl ? (b(), C("a", {
                    key: 0,
                    href: B.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, kS)) : (b(), C("span", OS, p(g(m)("library", "Previous")), 1)),
                  c("span", null, [
                    Ae(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                    B.value.total > 0 ? (b(), C("span", NS, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : U("", !0)
                  ]),
                  B.value.nextUrl ? (b(), C("a", {
                    key: 2,
                    href: B.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, xS)) : (b(), C("span", LS, p(g(m)("library", "Next")), 1))
                ], 8, AS)) : U("", !0)
              ])) : Se.value ? (b(), C("main", RS, [
                c("header", IS, [
                  c("p", PS, p(g(m)("library", "Your library")), 1),
                  c("h2", DS, p(g(m)("library", "Home")), 1)
                ]),
                c("section", MS, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", $S, p(g(m)("library", "Continue reading")), 1),
                      c("p", FS, p(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${D.value}?sort=lastOpened`
                    }, p(g(m)("library", "View all")), 9, zS)
                  ]),
                  _n.value.continueReading.length ? (b(), C("div", US, [
                    (b(!0), C(ce, null, Me(_n.value.continueReading, (f) => (b(), C("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (H) => Ct(f, H)
                      }, [
                        c("span", HS, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, jS)
                        ])
                      ], 8, BS),
                      c("div", VS, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (H) => Ct(f, H)
                          }, [
                            c("bdi", KS, p(f.title), 1)
                          ], 8, GS)
                        ]),
                        f.creators ? (b(), C("p", WS, [
                          c("bdi", qS, p(f.creators), 1)
                        ])) : U("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, YS)
                      ])
                    ]))), 128))
                  ])) : (b(), C("p", XS, p(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", ZS, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", JS, p(g(m)("library", "Recently added")), 1),
                      c("p", QS, p(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${D.value}?sort=recent`
                    }, p(g(m)("library", "View all")), 9, eE)
                  ]),
                  _n.value.recentlyAdded.length ? (b(), C("div", tE, [
                    (b(!0), C(ce, null, Me(_n.value.recentlyAdded, (f) => (b(), C("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (H) => Ct(f, H)
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
                            onClick: (H) => Ct(f, H)
                          }, [
                            c("bdi", oE, p(f.title), 1)
                          ], 8, sE)
                        ]),
                        f.creators ? (b(), C("p", lE, [
                          c("bdi", cE, p(f.creators), 1)
                        ])) : U("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, uE)
                      ])
                    ]))), 128))
                  ])) : (b(), C("p", dE, p(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", fE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", hE, p(g(m)("library", "Shelves")), 1),
                      c("p", pE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: ae.value }, p(g(m)("library", "View all")), 9, vE)
                  ]),
                  Zn.value.length ? (b(), C("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (b(!0), C(ce, null, Me(Zn.value, (f) => (b(), C("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", bE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Hn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, mE))), 128))
                  ], 8, gE)) : (b(), C("p", yE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(Ea.value.count || 0) > 0 ? (b(), C("aside", _E, [
                  c("div", null, [
                    c("h3", wE, p(g(m)("library", "Needs attention")), 1),
                    c("p", CE, p(g(Hn)("library", "%n publication needs better details.", "%n publications need better details.", Number(Ea.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: Ea.value.url
                  }, p(g(m)("library", "Review")), 9, SE)
                ])) : U("", !0)
              ])) : me.value ? (b(), C("main", EE, [
                c("header", TE, [
                  c("p", AE, p(g(m)("library", "Your library")), 1),
                  c("h2", kE, p(g(m)("library", "Shelves")), 1),
                  c("p", OE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                nr.value.length ? (b(), C("nav", {
                  key: 0,
                  class: "library-shelf-summary-grid",
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  (b(!0), C(ce, null, Me(nr.value, (f) => (b(), C("a", {
                    key: f.id,
                    class: "library-shelf-summary-card",
                    href: f.url
                  }, [
                    c("span", LE, [
                      c("strong", null, [
                        c("bdi", RE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Hn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ]),
                    c("small", IE, [
                      c("bdi", PE, p(f.path), 1)
                    ])
                  ], 8, xE))), 128))
                ], 8, NE)) : (b(), C("section", DE, [
                  c("h3", null, p(g(m)("library", "Shelves")), 1),
                  c("p", ME, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", $E, [
                    c("a", {
                      class: "button primary",
                      href: P.value
                    }, p(g(m)("library", "Add a Library root")), 9, FE),
                    c("a", {
                      class: "button secondary",
                      href: D.value
                    }, p(g(m)("library", "All publications")), 9, zE)
                  ])
                ]))
              ])) : (b(), C("section", UE, [
                c("header", BE, [
                  F.value ? (b(), C("p", HE, p(ee.value), 1)) : U("", !0),
                  c("h2", jE, p(G.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: Je(zn, ["prevent"])
                  }, [
                    (b(!0), C(ce, null, Me(Ki.value, (f) => (b(), C("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, KE))), 128)),
                    c("div", WE, [
                      c("label", {
                        class: "library-quick-filter-search",
                        title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                      }, [
                        c("span", null, [
                          Ae(p(g(m)("library", "Search")) + " ", 1),
                          T[26] || (T[26] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                        ]),
                        qe(c("input", {
                          ref_key: "quickSearchInput",
                          ref: ii,
                          "onUpdate:modelValue": T[1] || (T[1] = (f) => j.q = f),
                          "data-library-quick-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder"),
                          onInput: y
                        }, null, 40, YE), [
                          [Li, j.q]
                        ])
                      ], 8, qE)
                    ]),
                    c("label", XE, [
                      Ae(p(g(m)("library", "Sort")), 1),
                      qe(c("select", {
                        "onUpdate:modelValue": T[2] || (T[2] = (f) => j.sort = f),
                        name: "sort",
                        onChange: zn
                      }, [
                        c("option", ZE, p(g(m)("library", "Title")), 1),
                        c("option", JE, p(g(m)("library", "Date added")), 1),
                        c("option", QE, p(g(m)("library", "Publication date")), 1),
                        c("option", eT, p(g(m)("library", "Series")), 1),
                        c("option", tT, p(g(m)("library", "Recently opened")), 1),
                        c("option", nT, p(g(m)("library", "Format")), 1)
                      ], 544), [
                        [un, j.sort]
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
                        class: Ce({ active: lt.value === "compact" }),
                        "aria-pressed": lt.value === "compact" ? "true" : "false",
                        onClick: T[3] || (T[3] = (f) => Xe("compact"))
                      }, p(g(m)("library", "Compact")), 11, aT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ce({ active: lt.value === "gallery" }),
                        "aria-pressed": lt.value === "gallery" ? "true" : "false",
                        onClick: T[4] || (T[4] = (f) => Xe("gallery"))
                      }, p(g(m)("library", "Gallery")), 11, rT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ce({ active: lt.value === "list" }),
                        "aria-pressed": lt.value === "list" ? "true" : "false",
                        onClick: T[5] || (T[5] = (f) => Xe("list"))
                      }, p(g(m)("library", "List")), 11, sT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ce({ active: lt.value === "shelf" }),
                        "aria-pressed": lt.value === "shelf" ? "true" : "false",
                        onClick: T[6] || (T[6] = (f) => Xe("shelf"))
                      }, p(g(m)("library", "Shelf")), 11, oT)
                    ], 8, iT)
                  ], 40, GE),
                  c("details", lT, [
                    c("summary", cT, [
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Facets narrow the current results"),
                        "aria-label": `${g(m)("library", "Filters")}: ${g(m)("library", "Facets narrow the current results")}`
                      }, p(g(m)("library", "Filters")), 9, uT),
                      c("b", dT, p(j.shelf ? g(m)("library", "this shelf") : vt.value.length > 0 ? g(m)("library", "current results") : g(m)("library", "whole catalogue")), 1)
                    ]),
                    c("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": g(m)("library", "Catalogue search and filters"),
                      onSubmit: Je(zn, ["prevent"])
                    }, [
                      c("label", null, [
                        Ae(p(g(m)("library", "Type")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[7] || (T[7] = (f) => j.type = f),
                          name: "type"
                        }, [
                          c("option", hT, p(g(m)("library", "All types")), 1),
                          (b(), C(ce, null, Me(n, (f) => c("option", {
                            key: f,
                            value: f
                          }, p(f), 9, pT)), 64))
                        ], 512), [
                          [un, j.type]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Series / periodical")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[8] || (T[8] = (f) => j.publication = f),
                          name: "publication"
                        }, [
                          c("option", vT, p(g(m)("library", "All series and periodicals")), 1),
                          (b(!0), C(ce, null, Me(N.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, gT))), 128))
                        ], 512), [
                          [un, j.publication]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Publication year")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[9] || (T[9] = (f) => j.year = f),
                          name: "year"
                        }, [
                          c("option", mT, p(g(m)("library", "All years")), 1),
                          (b(!0), C(ce, null, Me(I.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, bT))), 128))
                        ], 512), [
                          [un, j.year]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Creator")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[10] || (T[10] = (f) => j.creator = f),
                          name: "creator",
                          title: g(m)("library", "Exact full-field creator matches only")
                        }, [
                          c("option", _T, p(g(m)("library", "All creators")), 1),
                          (b(!0), C(ce, null, Me(M.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, wT))), 128))
                        ], 8, yT), [
                          [un, j.creator]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Nextcloud tag")), 1),
                        qe(c("input", {
                          "onUpdate:modelValue": T[11] || (T[11] = (f) => j.tag = f),
                          type: "text",
                          name: "tag",
                          placeholder: g(m)("library", "photography")
                        }, null, 8, CT), [
                          [Li, j.tag]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Format")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[12] || (T[12] = (f) => j.format = f),
                          name: "format"
                        }, [
                          c("option", ST, p(g(m)("library", "All formats")), 1),
                          (b(!0), C(ce, null, Me(E.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(rt(f)), 9, ET))), 128))
                        ], 512), [
                          [un, j.format]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Shelf")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[13] || (T[13] = (f) => j.shelf = f),
                          name: "shelf"
                        }, [
                          c("option", TT, p(g(m)("library", "All shelves")), 1),
                          (b(!0), C(ce, null, Me(_.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, AT))), 128))
                        ], 512), [
                          [un, j.shelf]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Scan status")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[14] || (T[14] = (f) => j.status = f),
                          name: "status"
                        }, [
                          c("option", kT, p(g(m)("library", "All scan statuses")), 1),
                          (b(!0), C(ce, null, Me(K.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, OT))), 128))
                        ], 512), [
                          [un, j.status]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Workflow status")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[15] || (T[15] = (f) => j.workflowStatus = f),
                          name: "workflowStatus"
                        }, [
                          c("option", NT, p(g(m)("library", "All workflow statuses")), 1),
                          (b(!0), C(ce, null, Me($.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, xT))), 128))
                        ], 512), [
                          [un, j.workflowStatus]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Genre")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[16] || (T[16] = (f) => j.genre = f),
                          name: "genre"
                        }, [
                          c("option", LT, p(g(m)("library", "All genres")), 1),
                          (b(!0), C(ce, null, Me(le.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, RT))), 128))
                        ], 512), [
                          [un, j.genre]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Classification")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[17] || (T[17] = (f) => j.classification = f),
                          name: "classification"
                        }, [
                          c("option", IT, p(g(m)("library", "All classifications")), 1),
                          (b(!0), C(ce, null, Me(ue.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, PT))), 128))
                        ], 512), [
                          [un, j.classification]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Suggested updates")), 1),
                        qe(c("select", {
                          "onUpdate:modelValue": T[18] || (T[18] = (f) => j.scannerConflicts = f),
                          name: "scannerConflicts"
                        }, [
                          c("option", DT, p(g(m)("library", "All metadata")), 1),
                          c("option", MT, p(g(m)("library", "Suggested updates")), 1)
                        ], 512), [
                          [un, j.scannerConflicts]
                        ])
                      ]),
                      c("button", $T, p(g(m)("library", "Apply filters")), 1),
                      c("a", FT, p(g(m)("library", "Clear")), 1)
                    ], 40, fT)
                  ]),
                  c("section", zT, [
                    c("h3", UT, p(g(m)("library", "Shelves")), 1),
                    c("div", BT, [
                      A.value.length > 0 ? (b(), C("label", {
                        key: 0,
                        class: "library-shortcut-select-card library-periodical-groups",
                        title: g(m)("library", "Jump into recurring publications with one click.")
                      }, [
                        c("span", null, p(g(m)("library", "Series / periodicals")), 1),
                        c("select", { onChange: cl }, [
                          c("option", jT, p(g(m)("library", "Choose series")), 1),
                          (b(!0), C(ce, null, Me(A.value, (f) => (b(), C("option", {
                            key: f.publication,
                            value: Rp(f.publication)
                          }, p(f.publication) + " · " + p(f.itemCount), 9, VT))), 128))
                        ], 32)
                      ], 8, HT)) : U("", !0),
                      I.value.length > 0 ? (b(), C("label", GT, [
                        c("span", null, p(g(m)("library", "Publication year")), 1),
                        c("select", { onChange: cl }, [
                          c("option", KT, p(g(m)("library", "Choose year")), 1),
                          (b(!0), C(ce, null, Me(I.value, (f) => (b(), C("option", {
                            key: f,
                            value: Ip(f)
                          }, p(f), 9, WT))), 128))
                        ], 32)
                      ])) : U("", !0),
                      M.value.length > 0 ? (b(), C("label", qT, [
                        c("span", null, p(g(m)("library", "Creator")), 1),
                        c("select", { onChange: cl }, [
                          c("option", YT, p(g(m)("library", "Choose creator")), 1),
                          (b(!0), C(ce, null, Me(M.value, (f) => (b(), C("option", {
                            key: f,
                            value: Pp(f)
                          }, p(f), 9, XT))), 128))
                        ], 32)
                      ])) : U("", !0)
                    ])
                  ]),
                  c("section", ZT, [
                    c("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(m)("library", "Collections")), 9, JT),
                    c("form", {
                      method: "post",
                      action: wt.value,
                      class: "library-saved-collection-save-form",
                      title: Ve.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: He.value
                      }, null, 8, eA),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Ee.value
                      }, null, 8, tA),
                      c("label", null, [
                        Ae(p(g(m)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !Ve.value,
                          autocomplete: "off"
                        }, null, 8, nA)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !Ve.value,
                        title: g(m)("library", "Save current view")
                      }, p(g(m)("library", "Save")), 9, iA)
                    ], 8, QT),
                    tt.value.length > 0 ? (b(), C("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (b(!0), C(ce, null, Me(tt.value, (f) => (b(), C("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: xt(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", null, p(g(Hn)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, rA),
                        c("form", {
                          method: "post",
                          action: sr(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: He.value
                          }, null, 8, oA),
                          c("button", lA, p(g(m)("library", "Delete")), 1)
                        ], 8, sA)
                      ]))), 128))
                    ], 8, aA)) : U("", !0)
                  ]),
                  Gt.value.length > 0 ? (b(), C("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", uA, [
                      T[27] || (T[27] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, p(g(m)("library", "Batch actions")), 9, dA),
                      c("small", fA, p(g(m)("library", "Batch actions for selected publications")), 1),
                      c("b", hA, p(g(Hn)("library", "%n publication selected", "%n publications selected", Gt.value.length)), 1)
                    ]),
                    c("p", pA, p(g(Hn)("library", "%n publication selected", "%n publications selected", Gt.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: sn
                    }, [
                      c("form", {
                        method: "post",
                        action: Ut.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: He.value
                        }, null, 8, gA),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, mA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, p(g(m)("library", "Apply")), 9, bA)
                      ], 8, vA),
                      c("form", {
                        method: "post",
                        action: it.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: He.value
                        }, null, 8, _A),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, wA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, p(g(m)("library", "Remove")), 9, CA)
                      ], 8, yA),
                      c("form", {
                        method: "post",
                        action: yn.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: He.value
                        }, null, 8, EA),
                        (b(!0), C(ce, null, Me(Rn.value, (f) => (b(), C("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, TA))), 128)),
                        T[28] || (T[28] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Reset metadata")), 9, AA)
                      ], 8, SA),
                      c("form", {
                        method: "post",
                        action: z.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: He.value
                        }, null, 8, OA),
                        (b(!0), C(ce, null, Me(Rn.value, (f) => (b(), C("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, NA))), 128)),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Field")), 1),
                          c("select", xA, [
                            c("option", LA, p(g(m)("library", "Publication type")), 1),
                            c("option", RA, p(g(m)("library", "Subtitle")), 1),
                            c("option", IA, p(g(m)("library", "Creators")), 1),
                            c("option", PA, p(g(m)("library", "Series / periodical")), 1),
                            c("option", DA, p(g(m)("library", "Publication date")), 1),
                            c("option", MA, p(g(m)("library", "Language")), 1),
                            c("option", $A, p(g(m)("library", "Publisher")), 1),
                            c("option", FA, p(g(m)("library", "Genres")), 1),
                            c("option", zA, p(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, UA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, p(g(m)("library", "Preview edit")), 9, BA)
                      ], 8, kA),
                      c("form", {
                        method: "post",
                        action: v.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: He.value
                        }, null, 8, jA),
                        (b(!0), C(ce, null, Me(Rn.value, (f) => (b(), C("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, VA))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Fresh covers")), 9, GA)
                      ], 8, HA)
                    ], 32)
                  ], 8, cA)) : U("", !0)
                ], 8, VE),
                Re.value ? (b(), C("p", KA, p(Re.value), 1)) : U("", !0),
                Ze.value ? (b(), C("p", WA, p(Ze.value), 1)) : U("", !0),
                Pe.value ? (b(), C("p", qA, p(Pe.value), 1)) : U("", !0),
                F.value ? (b(), C("section", YA, [
                  c("p", XA, p(ee.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: x.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : L.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(W.value), 9, ZA),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g(Hn)("library", "%n item", "%n items", B.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (b(), C("span", QA, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : U("", !0),
                    O.value?.datedCount ? (b(), C("span", e2, p(O.value.datedCount) + " " + p(g(m)("library", "dated")), 1)) : U("", !0),
                    O.value?.undatedCount > 0 ? (b(), C("span", t2, p(O.value.undatedCount) + " " + p(g(m)("library", "undated")), 1)) : U("", !0)
                  ], 8, JA),
                  k.value && O.value ? (b(), C("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(m)("library", "Publication contents")), 1),
                    c("span", null, p(g(Hn)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (b(), C("span", i2, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : U("", !0),
                    c("span", null, p(O.value.datedCount) + " " + p(g(m)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (b(), C("span", a2, p(O.value.undatedCount) + " " + p(g(m)("library", "without dates yet")), 1)) : U("", !0),
                    c("span", null, p(g(m)("library", "read-only grouping")), 1)
                  ], 8, n2)) : U("", !0),
                  k.value && O.value?.issueGroups?.length ? (b(), C("section", r2, [
                    c("div", null, [
                      c("p", s2, p(g(m)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(m)("library", "Read-only issue/date grouping")), 9, o2)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(m)("library", "Visual issue strip")
                    }, [
                      (b(!0), C(ce, null, Me(O.value.issueGroups, (f) => (b(), C("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        c("small", null, p(g(Hn)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, c2))), 128))
                    ], 8, l2),
                    O.value.gapRanges?.length ? (b(), C("p", u2, p(g(m)("library", "Gap")) + ": " + p(O.value.gapRanges.join(", ")), 1)) : U("", !0),
                    (b(!0), C(ce, null, Me(O.value.issueGroups, (f) => (b(), C("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (b(!0), C(ce, null, Me(f.items, (H, Oe) => (b(), C("li", {
                          key: H.itemId
                        }, [
                          c("span", d2, p(H.issueLabel), 1),
                          c("a", {
                            href: H.detailsUrl || "#"
                          }, p(H.title), 9, f2),
                          c("small", null, [
                            Ae(p(H.publicationType), 1),
                            H.publicationDate ? (b(), C(ce, { key: 0 }, [
                              Ae(" · " + p(H.publicationDate), 1)
                            ], 64)) : U("", !0)
                          ]),
                          c("small", h2, [
                            Oe > 0 ? (b(), C(ce, { key: 0 }, [
                              Ae(p(g(m)("library", "Previous issue")), 1)
                            ], 64)) : U("", !0),
                            Oe > 0 && Oe < f.items.length - 1 ? (b(), C(ce, { key: 1 }, [
                              Ae(" · ")
                            ], 64)) : U("", !0),
                            Oe < f.items.length - 1 ? (b(), C(ce, { key: 2 }, [
                              Ae(p(g(m)("library", "Next issue")), 1)
                            ], 64)) : U("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (b(), C("details", p2, [
                      c("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(m)("library", "Unknown issue/date")) + " · " + p(O.value.unknownIssueItems.length), 9, v2)
                    ])) : U("", !0)
                  ])) : U("", !0),
                  c("p", null, [
                    c("a", {
                      href: D.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(m)("library", "Back to full catalogue")), 9, g2)
                  ])
                ])) : U("", !0),
                c("div", m2, [
                  c("p", b2, [
                    Ae(p(g(m)("library", "Showing")) + " " + p(B.value.from) + "–" + p(B.value.to) + " " + p(g(m)("library", "of")) + " " + p(B.value.total) + " " + p(g(m)("library", "catalogue items")), 1),
                    vt.value.length > 0 ? (b(), C("span", y2, [
                      T[29] || (T[29] = Ae(" · ", -1)),
                      c("a", _2, p(g(m)("library", "Clear all filters")), 1)
                    ])) : U("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    c("span", C2, [
                      Ae(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                      B.value.total > 0 ? (b(), C("span", S2, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : U("", !0)
                    ]),
                    B.value.previousUrl ? (b(), C("a", {
                      key: 0,
                      href: B.value.previousUrl
                    }, p(g(m)("library", "Previous")), 9, E2)) : (b(), C("span", T2, p(g(m)("library", "Previous")), 1)),
                    B.value.nextUrl ? (b(), C("a", {
                      key: 2,
                      href: B.value.nextUrl
                    }, p(g(m)("library", "Next")), 9, A2)) : (b(), C("span", k2, p(g(m)("library", "Next")), 1))
                  ], 8, w2)
                ]),
                vt.value.length > 0 ? (b(), C("nav", {
                  key: 4,
                  class: "library-active-filter-chips",
                  "aria-label": g(m)("library", "Active filters")
                }, [
                  c("span", null, p(g(m)("library", "Active filters")), 1),
                  (b(!0), C(ce, null, Me(vt.value, (f) => (b(), C("a", {
                    key: f.key,
                    href: R(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${g(m)("library", "Remove filter")}: ${f.label}`
                  }, [
                    c("strong", null, p(f.label) + ":", 1),
                    Ae(" " + p(f.value) + " ", 1),
                    T[30] || (T[30] = c("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, N2))), 128))
                ], 8, O2)) : U("", !0),
                h.value.length === 0 ? (b(), C("div", {
                  key: 5,
                  class: Ce(["library-empty-content", { "library-first-run-guidance": re.value || ve.value, "library-filter-empty-state": we.value && !re.value && !ve.value }]),
                  role: "status"
                }, [
                  re.value ? (b(), C(ce, { key: 0 }, [
                    c("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(m)("library", "Start with one Library root")), 9, x2),
                    c("p", L2, [
                      c("a", {
                        href: P.value,
                        class: "button primary"
                      }, p(g(m)("library", "Add a Library root")), 9, R2),
                      c("span", I2, p(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : ve.value ? (b(), C(ce, { key: 1 }, [
                    c("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(m)("library", "No enabled Library roots")), 9, P2),
                    c("p", D2, [
                      c("a", {
                        href: P.value,
                        class: "button primary"
                      }, p(g(m)("library", "Open Library settings")), 9, M2)
                    ])
                  ], 64)) : we.value ? (b(), C(ce, { key: 2 }, [
                    c("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(m)("library", "No matches for the current filters")), 9, $2),
                    c("p", F2, [
                      c("a", {
                        href: q(),
                        class: "button secondary"
                      }, p(g(m)("library", "Clear search")), 9, z2),
                      c("a", U2, p(g(m)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (b(), C(ce, { key: 3 }, [
                    c("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(m)("library", "No catalogue items yet")), 9, B2),
                    c("p", H2, [
                      c("a", {
                        href: P.value,
                        class: "button primary"
                      }, p(g(m)("library", "Run a scan from settings")), 9, j2)
                    ])
                  ], 64))
                ], 2)) : U("", !0),
                h.value.length > 0 ? (b(), C("label", V2, [
                  c("input", {
                    type: "checkbox",
                    checked: Gt.value.length === h.value.length,
                    onChange: Ta
                  }, null, 40, G2),
                  Ae(" " + p(g(m)("library", "Select all publications on this page")), 1)
                ])) : U("", !0),
                h.value.length > 0 && lt.value === "list" ? (b(), C("ul", K2, [
                  (b(!0), C(ce, null, Me(h.value, (f) => (b(), C("li", {
                    key: f.id,
                    class: Ce(["library-catalogue-list-row", { "library-catalogue-list-row--selected": qi.value.has(Number(f.id)), "library-catalogue-list-row--open": En.value && Number(wn.value) === Number(f.id) }])
                  }, [
                    c("label", W2, [
                      c("input", {
                        type: "checkbox",
                        checked: qi.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (H) => ir(f.id, H.currentTarget.checked)
                      }, null, 40, q2)
                    ]),
                    c("div", Y2, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (H) => Ct(f, H)
                      }, [
                        c("bdi", Z2, p(f.title), 1)
                      ], 8, X2),
                      f.creators ? (b(), C("span", J2, [
                        c("bdi", Q2, p(f.creators), 1)
                      ])) : U("", !0)
                    ]),
                    c("dl", ek, [
                      f.publication ? (b(), C("div", tk, [
                        c("dt", null, p(g(m)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", nk, p(f.publication), 1)
                        ])
                      ])) : U("", !0),
                      f.publicationDate ? (b(), C("div", ik, [
                        c("dt", null, p(g(m)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : U("", !0),
                      f.extension || f.publicationType ? (b(), C("div", ak, [
                        c("dt", null, p(g(m)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Ce(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? rt(f.extension) : f.publicationType), 11, rk)
                        ])
                      ])) : U("", !0),
                      f.shelf ? (b(), C("div", sk, [
                        c("dt", null, p(g(m)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", ok, p(f.shelf), 1)
                        ])
                      ])) : U("", !0)
                    ]),
                    c("div", lk, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, ck),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (H) => Ct(f, H)
                      }, p(g(m)("library", "Details")), 9, uk)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (b(), C("div", {
                  key: 8,
                  class: Ce(["library-cover-gallery", ct.value])
                }, [
                  (b(!0), C(ce, null, Me(h.value, (f) => (b(), C("article", {
                    key: f.id,
                    class: Ce(["library-cover-card", { "library-cover-card--cover-loaded": or(f) === "loaded", "library-cover-card--cover-error": or(f) === "error", "library-cover-card--selected": qi.value.has(Number(f.id)), "library-cover-card--open": En.value && Number(wn.value) === Number(f.id) }])
                  }, [
                    c("label", dk, [
                      c("input", {
                        type: "checkbox",
                        checked: qi.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (H) => ir(f.id, H.currentTarget.checked)
                      }, null, 40, fk)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": En.value && Number(wn.value) === Number(f.id) ? "true" : "false",
                      onClick: (H) => Ct(f, H)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(m)("library", "Details")), 9, pk),
                      c("span", vk, [
                        or(f) === "loading" ? (b(), C("span", gk)) : U("", !0),
                        c("img", {
                          class: Ce(["library-cover-image", { "library-cover-image--loaded": or(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (H) => Dp(f),
                          onError: (H) => Mp(f)
                        }, null, 42, mk),
                        or(f) === "error" ? (b(), C("span", bk, p(g(m)("library", "Cover unavailable")), 1)) : U("", !0)
                      ])
                    ], 8, hk),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Je((H) => du(f, H), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: He.value
                      }, null, 8, _k),
                      T[31] || (T[31] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, wk),
                      c("button", {
                        type: "submit",
                        class: Ce(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": lr[f.id] ? "true" : void 0,
                        disabled: lr[f.id],
                        onClick: Je((H) => du(f, H), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, Ck),
                      cr[f.id] ? (b(), C("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(cr[f.id]), 9, Sk)) : U("", !0)
                    ], 40, yk),
                    c("div", Ek, [
                      c("div", Tk, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (H) => Ct(f, H)
                          }, [
                            c("bdi", Ok, p(f.title), 1)
                          ], 8, kk)
                        ], 8, Ak),
                        f.creators ? (b(), C("p", Nk, [
                          c("bdi", xk, p(f.creators), 1)
                        ])) : U("", !0),
                        ul(f) || f.extension ? (b(), C("div", Lk, [
                          f.extension ? (b(), C("span", Rk, [
                            c("bdi", Ik, p(rt(f.extension)), 1)
                          ])) : U("", !0),
                          ul(f) ? (b(), C("p", Pk, [
                            c("bdi", Dk, p(ul(f)), 1)
                          ])) : U("", !0)
                        ])) : U("", !0),
                        c("div", Mk, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(m)("library", "Open")), 9, $k),
                          ge(g(oo), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: Te(() => [
                              ge(g(Ba), {
                                href: f.filesUrl
                              }, {
                                default: Te(() => [
                                  Ae(p(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ge(g(Ba), {
                                href: f.downloadUrl
                              }, {
                                default: Te(() => [
                                  Ae(p(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ge(g(Ba), {
                                href: f.detailsUrl
                              }, {
                                default: Te(() => [
                                  Ae(p(g(m)("library", "Maintenance")), 1)
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
                ], 2)) : U("", !0),
                h.value.length > 0 ? (b(), C("nav", {
                  key: 9,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  c("span", zk, [
                    Ae(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                    B.value.total > 0 ? (b(), C("span", Uk, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : U("", !0)
                  ]),
                  B.value.previousUrl ? (b(), C("a", {
                    key: 0,
                    href: B.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, Bk)) : (b(), C("span", Hk, p(g(m)("library", "Previous")), 1)),
                  B.value.nextUrl ? (b(), C("a", {
                    key: 2,
                    href: B.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, jk)) : (b(), C("span", Vk, p(g(m)("library", "Next")), 1))
                ], 8, Fk)) : U("", !0)
              ]))
            ], 8, PC)
          ]),
          _: 1
        }),
        ge(g(gC), {
          ref_key: "sidebarComponent",
          ref: Cn,
          class: "library-native-item-sidebar",
          open: En.value,
          "no-toggle": "",
          loading: gt.loading,
          name: ye.value?.title || g(m)("library", "Publication details"),
          subname: ye.value?.creators || "",
          role: Qn.value ? "dialog" : void 0,
          "aria-modal": Qn.value ? "true" : void 0,
          "aria-labelledby": Qn.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Qn.value && ye.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Jt,
          onClosed: ol,
          onClose: $n
        }, {
          default: Te(() => [
            c("div", Gk, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: ar,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(ye.value?.title || g(m)("library", "Publication details")), 513),
              gt.loading && !ye.value ? (b(), C("p", Kk, p(g(m)("library", "Loading publication details…")), 1)) : gt.error ? (b(), C("div", {
                key: 1,
                class: "library-sidebar-state",
                role: gt.missing ? "status" : "alert"
              }, [
                c("p", null, p(gt.error), 1),
                gt.missing ? U("", !0) : (b(), C("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: T[19] || (T[19] = (f) => Mn(wn.value, { historyMode: "none" }))
                }, p(g(m)("library", "Try again")), 1))
              ], 8, Wk)) : ye.value ? (b(), C(ce, { key: 2 }, [
                c("p", qk, p(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", Yk, [
                  c("span", Xk, p(g(m)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: ye.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, Zk),
                  c("div", Jk, [
                    c("p", Qk, [
                      c("bdi", eO, p(ye.value.publicationType || g(m)("library", "Publication")), 1),
                      ye.value.extension ? (b(), C("span", tO, [
                        T[32] || (T[32] = Ae(" · ", -1)),
                        c("bdi", nO, p(rt(ye.value.extension)), 1)
                      ])) : U("", !0)
                    ]),
                    c("div", iO, [
                      c("a", {
                        class: "button primary",
                        href: ye.value.openUrl
                      }, p(g(m)("library", "Open")), 9, aO),
                      ge(g(oo), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: Te(() => [
                          ge(g(Ba), {
                            href: ye.value.filesUrl
                          }, {
                            default: Te(() => [
                              Ae(p(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ge(g(Ba), {
                            href: ye.value.downloadUrl
                          }, {
                            default: Te(() => [
                              Ae(p(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ge(g(Ba), {
                            href: ye.value.detailsUrl
                          }, {
                            default: Te(() => [
                              Ae(p(g(m)("library", "Maintenance (legacy)")), 1)
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
                  (b(), C(ce, null, Me(sl, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: Ce({ active: Jn.value === f.key }),
                    "aria-current": Jn.value === f.key ? "page" : void 0,
                    onClick: (H) => Jn.value = f.key
                  }, p(g(m)("library", f.label)), 11, sO)), 64))
                ], 8, rO),
                Jn.value === "overview" ? (b(), C("section", oO, [
                  c("h3", lO, p(g(m)("library", "Overview")), 1),
                  ye.value.description ? (b(), C("p", cO, [
                    c("bdi", uO, p(ye.value.description), 1)
                  ])) : U("", !0),
                  c("dl", dO, [
                    ye.value.publication ? (b(), C("div", fO, [
                      c("dt", null, p(g(m)("library", "Series")), 1),
                      c("dd", null, p(ye.value.publication), 1)
                    ])) : U("", !0),
                    ye.value.publicationDate ? (b(), C("div", hO, [
                      c("dt", null, p(g(m)("library", "Date")), 1),
                      c("dd", null, p(ye.value.publicationDate), 1)
                    ])) : U("", !0),
                    ye.value.publisher ? (b(), C("div", pO, [
                      c("dt", null, p(g(m)("library", "Publisher")), 1),
                      c("dd", null, p(ye.value.publisher), 1)
                    ])) : U("", !0),
                    ye.value.language ? (b(), C("div", vO, [
                      c("dt", null, p(g(m)("library", "Language")), 1),
                      c("dd", null, p(ye.value.language), 1)
                    ])) : U("", !0),
                    ye.value.shelf ? (b(), C("div", gO, [
                      c("dt", null, p(g(m)("library", "Shelf")), 1),
                      c("dd", null, p(ye.value.shelf), 1)
                    ])) : U("", !0)
                  ])
                ])) : Jn.value === "metadata" ? (b(), C("section", mO, [
                  c("h3", bO, p(g(m)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Je(ni, ["prevent"])
                  }, [
                    c("label", null, [
                      Ae(p(g(m)("library", "Title")), 1),
                      qe(c("input", {
                        "onUpdate:modelValue": T[20] || (T[20] = (f) => ut.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [Li, ut.title]
                      ])
                    ]),
                    c("label", null, [
                      Ae(p(g(m)("library", "Publication date")), 1),
                      qe(c("input", {
                        "onUpdate:modelValue": T[21] || (T[21] = (f) => ut.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, yO), [
                        [Li, ut.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(m)("library", "Identifiers")), 1),
                      (b(!0), C(ce, null, Me(ut.identifiers, (f, H) => (b(), C("div", {
                        key: H,
                        class: "library-sidebar-identifier"
                      }, [
                        qe(c("input", {
                          "onUpdate:modelValue": (Oe) => f.scheme = Oe,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, _O), [
                          [Li, f.scheme]
                        ]),
                        qe(c("input", {
                          "onUpdate:modelValue": (Oe) => f.displayValue = Oe,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, wO), [
                          [Li, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (Oe) => Na(H)
                        }, p(g(m)("library", "Remove")), 9, CO)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: hs
                      }, p(g(m)("library", "Add identifier")), 1)
                    ]),
                    c("p", SO, p(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Kt.error ? (b(), C("p", EO, p(Kt.error), 1)) : Kt.saved ? (b(), C("p", TO, p(g(m)("library", "Metadata saved.")), 1)) : U("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Kt.saving
                    }, p(Kt.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, AO)
                  ], 32),
                  Ra(ye.value).length ? (b(), C("section", kO, [
                    c("h4", OO, p(g(m)("library", "Scanner suggestions")), 1),
                    c("p", NO, p(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (b(!0), C(ce, null, Me(Ra(ye.value), (f) => (b(), C("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          Ae(p(g(m)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          T[33] || (T[33] = c("br", null, null, -1)),
                          Ae(p(g(m)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : U("", !0)
                ])) : (b(), C("section", xO, [
                  c("h3", LO, p(g(m)("library", "Activity")), 1),
                  c("dl", RO, [
                    c("div", null, [
                      c("dt", null, p(g(m)("library", "Scan status")), 1),
                      c("dd", null, p(ye.value.scanStatus || "—"), 1)
                    ]),
                    ye.value.workflowStatus ? (b(), C("div", IO, [
                      c("dt", null, p(g(m)("library", "Workflow")), 1),
                      c("dd", null, p(ye.value.workflowStatus), 1)
                    ])) : U("", !0),
                    ye.value.metadataSource ? (b(), C("div", PO, [
                      c("dt", null, p(g(m)("library", "Metadata source")), 1),
                      c("dd", null, p(ye.value.metadataSource), 1)
                    ])) : U("", !0),
                    ye.value.cachedPath ? (b(), C("div", DO, [
                      c("dt", null, p(g(m)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", MO, p(ye.value.cachedPath), 1)
                      ])
                    ])) : U("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(m)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Yi.value,
                    onClick: T[22] || (T[22] = (f) => Qi(Yi.value))
                  }, p(g(m)("library", "Previous item")), 9, FO),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Xi.value,
                    onClick: T[23] || (T[23] = (f) => Qi(Xi.value))
                  }, p(g(m)("library", "Next item")), 9, zO)
                ], 8, $O)
              ], 64)) : U("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function jO() {
  window.LibraryStartupWatchdog?.fail();
}
function VO(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Gc("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !VO(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Cm(HO, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  jO(), console.error("[library] Vue startup failed", e);
}
