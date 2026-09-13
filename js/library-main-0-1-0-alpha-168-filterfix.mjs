// @__NO_SIDE_EFFECTS__
function Nc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Be = {}, Va = [], mn = () => {
}, sf = () => !1, Mo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), $o = (e) => e.startsWith("onUpdate:"), ht = Object.assign, xc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Gp = Object.prototype.hasOwnProperty, Ke = (e, t) => Gp.call(e, t), ye = Array.isArray, $i = (e) => ls(e) === "[object Map]", _a = (e) => ls(e) === "[object Set]", hu = (e) => ls(e) === "[object Date]", xe = (e) => typeof e == "function", nt = (e) => typeof e == "string", Rn = (e) => typeof e == "symbol", We = (e) => e !== null && typeof e == "object", of = (e) => (We(e) || xe(e)) && xe(e.then) && xe(e.catch), lf = Object.prototype.toString, ls = (e) => lf.call(e), Kp = (e) => ls(e).slice(8, -1), cf = (e) => ls(e) === "[object Object]", Lc = (e) => nt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Or = /* @__PURE__ */ Nc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Wp = /-\w/g, Mt = Fo(
  (e) => e.replace(Wp, (t) => t.slice(1).toUpperCase())
), qp = /\B([A-Z])/g, yi = Fo(
  (e) => e.replace(qp, "-$1").toLowerCase()
), zo = Fo((e) => e.charAt(0).toUpperCase() + e.slice(1)), fl = Fo(
  (e) => e ? `on${zo(e)}` : ""
), Tt = (e, t) => !Object.is(e, t), Ns = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, uf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Uo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Yp = (e) => {
  const t = nt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let pu;
const Bo = () => pu || (pu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function on(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = nt(i) ? Qp(i) : on(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (nt(e) || We(e))
    return e;
}
const Xp = /;(?![^(]*\))/g, Zp = /:([^]+)/, Jp = /\/\*[^]*?\*\//g;
function Qp(e) {
  const t = {};
  return e.replace(Jp, "").split(Xp).forEach((n) => {
    if (n) {
      const i = n.split(Zp);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function we(e) {
  let t = "";
  if (nt(e))
    t = e;
  else if (ye(e))
    for (let n = 0; n < e.length; n++) {
      const i = we(e[n]);
      i && (t += i + " ");
    }
  else if (We(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Ps(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !nt(t) && (e.class = we(t)), n && (e.style = on(n)), e;
}
const ev = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tv = /* @__PURE__ */ Nc(ev);
function df(e) {
  return !!e || e === "";
}
function nv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Bi(e[i], t[i]);
  return n;
}
function vu(e, t) {
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
  let n = hu(e), i = hu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Rn(e), i = Rn(t), n || i)
    return e === t;
  if (n = ye(e), i = ye(t), n || i)
    return n && i ? nv(e, t) : !1;
  if (n = We(e), i = We(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = $i(e), i = $i(t), n || i || (n = _a(e), i = _a(t), n || i))
      return n && i ? vu(e, t) : !1;
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
function iv(e, t) {
  return e.findIndex((n) => Bi(n, t));
}
const ff = (e) => !!(e && e.__v_isRef === !0), p = (e) => nt(e) ? e : e == null ? "" : ye(e) || We(e) && (e.toString === lf || !xe(e.toString)) ? ff(e) ? p(e.value) : JSON.stringify(e, hf, 2) : String(e), hf = (e, t) => ff(t) ? hf(e, t.value) : $i(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[hl(i, r) + " =>"] = a, n),
    {}
  )
} : _a(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => hl(n))
} : Rn(t) ? hl(t) : We(t) && !ye(t) && !cf(t) ? String(t) : t, hl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Rn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function av(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Et;
class rv {
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
function sv() {
  return Et;
}
let tt;
const pl = /* @__PURE__ */ new WeakSet();
class pf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Et && (Et.active ? Et.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, pl.has(this) && (pl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || gf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, gu(this), mf(this);
    const t = tt, n = xn;
    tt = this, xn = !0;
    try {
      return this.fn();
    } finally {
      bf(this), tt = t, xn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Pc(t);
      this.deps = this.depsTail = void 0, gu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? pl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xl(this) && this.run();
  }
  get dirty() {
    return Xl(this);
  }
}
let vf = 0, Nr, xr;
function gf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = xr, xr = e;
    return;
  }
  e.next = Nr, Nr = e;
}
function Rc() {
  vf++;
}
function Ic() {
  if (--vf > 0)
    return;
  if (xr) {
    let t = xr;
    for (xr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Nr; ) {
    let t = Nr;
    for (Nr = void 0; t; ) {
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
function mf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function bf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Pc(i), ov(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Xl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (yf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function yf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Vr) || (e.globalVersion = Vr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = tt, i = xn;
  tt = e, xn = !0;
  try {
    mf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Tt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    tt = n, xn = i, bf(e), e.flags &= -3;
  }
}
function Pc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Pc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ov(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let xn = !0;
const _f = [];
function vi() {
  _f.push(xn), xn = !1;
}
function gi() {
  const e = _f.pop();
  xn = e === void 0 ? !0 : e;
}
function gu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = tt;
    tt = void 0;
    try {
      t();
    } finally {
      tt = n;
    }
  }
}
let Vr = 0;
class lv {
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
    if (!tt || !xn || tt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== tt)
      n = this.activeLink = new lv(tt, this), tt.deps ? (n.prevDep = tt.depsTail, tt.depsTail.nextDep = n, tt.depsTail = n) : tt.deps = tt.depsTail = n, wf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = tt.depsTail, n.nextDep = void 0, tt.depsTail.nextDep = n, tt.depsTail = n, tt.deps === n && (tt.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Vr++, this.notify(t);
  }
  notify(t) {
    Rc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ic();
    }
  }
}
function wf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        wf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Zl = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ Symbol(
  ""
), Jl = /* @__PURE__ */ Symbol(
  ""
), Gr = /* @__PURE__ */ Symbol(
  ""
);
function It(e, t, n) {
  if (xn && tt) {
    let i = Zl.get(e);
    i || Zl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Ho()), a.map = i, a.key = n), a.track();
  }
}
function oi(e, t, n, i, a, r) {
  const s = Zl.get(e);
  if (!s) {
    Vr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Rc(), t === "clear")
    s.forEach(o);
  else {
    const l = ye(e), d = l && Lc(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, _) => {
        (_ === "length" || _ === Gr || !Rn(_) && _ >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(Gr)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(ma)), $i(e) && o(s.get(Jl)));
          break;
        case "delete":
          l || (o(s.get(ma)), $i(e) && o(s.get(Jl)));
          break;
        case "set":
          $i(e) && o(s.get(ma));
          break;
      }
  }
  Ic();
}
function Ma(e) {
  const t = /* @__PURE__ */ je(e);
  return t === e ? t : (It(t, "iterate", Gr), /* @__PURE__ */ bn(e) ? t : t.map(In));
}
function jo(e) {
  return It(e = /* @__PURE__ */ je(e), "iterate", Gr), e;
}
function Hn(e, t) {
  return /* @__PURE__ */ mi(e) ? Ja(/* @__PURE__ */ ba(e) ? In(t) : t) : In(t);
}
const cv = {
  __proto__: null,
  [Symbol.iterator]() {
    return vl(this, Symbol.iterator, (e) => Hn(this, e));
  },
  concat(...e) {
    return Ma(this).concat(
      ...e.map((t) => ye(t) ? Ma(t) : t)
    );
  },
  entries() {
    return vl(this, "entries", (e) => (e[1] = Hn(this, e[1]), e));
  },
  every(e, t) {
    return ei(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ei(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Hn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ei(
      this,
      "find",
      e,
      t,
      (n) => Hn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ei(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ei(
      this,
      "findLast",
      e,
      t,
      (n) => Hn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ei(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ei(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return gl(this, "includes", e);
  },
  indexOf(...e) {
    return gl(this, "indexOf", e);
  },
  join(e) {
    return Ma(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return gl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ei(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return fr(this, "pop");
  },
  push(...e) {
    return fr(this, "push", e);
  },
  reduce(e, ...t) {
    return mu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return mu(this, "reduceRight", e, t);
  },
  shift() {
    return fr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ei(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return fr(this, "splice", e);
  },
  toReversed() {
    return Ma(this).toReversed();
  },
  toSorted(e) {
    return Ma(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ma(this).toSpliced(...e);
  },
  unshift(...e) {
    return fr(this, "unshift", e);
  },
  values() {
    return vl(this, "values", (e) => Hn(this, e));
  }
};
function vl(e, t, n) {
  const i = jo(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ bn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const uv = Array.prototype;
function ei(e, t, n, i, a, r) {
  const s = jo(e), o = s !== e && !/* @__PURE__ */ bn(e), l = s[t];
  if (l !== uv[t]) {
    const h = l.apply(e, r);
    return o ? In(h) : h;
  }
  let d = n;
  s !== e && (o ? d = function(h, _) {
    return n.call(this, Hn(e, h), _, e);
  } : n.length > 2 && (d = function(h, _) {
    return n.call(this, h, _, e);
  }));
  const u = l.call(s, d, i);
  return o && a ? a(u) : u;
}
function mu(e, t, n, i) {
  const a = jo(e), r = a !== e && !/* @__PURE__ */ bn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = Hn(e, d)), n.call(this, d, Hn(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Hn(e, l) : l;
}
function gl(e, t, n) {
  const i = /* @__PURE__ */ je(e);
  It(i, "iterate", Gr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ $c(n[0]) ? (n[0] = /* @__PURE__ */ je(n[0]), i[t](...n)) : a;
}
function fr(e, t, n = []) {
  vi(), Rc();
  const i = (/* @__PURE__ */ je(e))[t].apply(e, n);
  return Ic(), gi(), i;
}
const dv = /* @__PURE__ */ Nc("__proto__,__v_isRef,__isVue"), Cf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Rn)
);
function fv(e) {
  Rn(e) || (e = String(e));
  const t = /* @__PURE__ */ je(this);
  return It(t, "has", e), t.hasOwnProperty(e);
}
class Sf {
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
      return i === (a ? r ? Cv : kf : r ? Af : Tf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = ye(t);
    if (!a) {
      let l;
      if (s && (l = cv[n]))
        return l;
      if (n === "hasOwnProperty")
        return fv;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ $t(t) ? t : i
    );
    if ((Rn(n) ? Cf.has(n) : dv(n)) || (a || It(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ $t(o)) {
      const l = s && Lc(n) ? o : o.value;
      return a && We(l) ? /* @__PURE__ */ Kr(l) : l;
    }
    return We(o) ? a ? /* @__PURE__ */ Kr(o) : /* @__PURE__ */ Rt(o) : o;
  }
}
class Ef extends Sf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = ye(t) && Lc(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ mi(r);
      if (!/* @__PURE__ */ bn(i) && !/* @__PURE__ */ mi(i) && (r = /* @__PURE__ */ je(r), i = /* @__PURE__ */ je(i)), !s && /* @__PURE__ */ $t(r) && !/* @__PURE__ */ $t(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ke(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ $t(t) ? t : a
    );
    return t === /* @__PURE__ */ je(a) && l && (o ? Tt(i, r) && oi(t, "set", n, i) : oi(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ke(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && oi(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Rn(n) || !Cf.has(n)) && It(t, "has", n), i;
  }
  ownKeys(t) {
    return It(
      t,
      "iterate",
      ye(t) ? "length" : ma
    ), Reflect.ownKeys(t);
  }
}
class hv extends Sf {
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
const pv = /* @__PURE__ */ new Ef(), vv = /* @__PURE__ */ new hv(), gv = /* @__PURE__ */ new Ef(!0);
const Ql = (e) => e, vs = (e) => Reflect.getPrototypeOf(e);
function mv(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ je(a), s = $i(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? Ql : t ? Ja : In;
    return !t && It(
      r,
      "iterate",
      l ? Jl : ma
    ), ht(
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
function bv(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ je(r), o = /* @__PURE__ */ je(a);
      e || (Tt(a, o) && It(s, "get", a), It(s, "get", o));
      const { has: l } = vs(s), d = t ? Ql : e ? Ja : In;
      if (l.call(s, a))
        return d(r.get(a));
      if (l.call(s, o))
        return d(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && It(/* @__PURE__ */ je(a), "iterate", ma), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ je(r), o = /* @__PURE__ */ je(a);
      return e || (Tt(a, o) && It(s, "has", a), It(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ je(o), d = t ? Ql : e ? Ja : In;
      return !e && It(l, "iterate", ma), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return ht(
    n,
    e ? {
      add: gs("add"),
      set: gs("set"),
      delete: gs("delete"),
      clear: gs("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ je(this), s = vs(r), o = /* @__PURE__ */ je(a), l = !t && !/* @__PURE__ */ bn(a) && !/* @__PURE__ */ mi(a) ? o : a;
        return s.has.call(r, l) || Tt(a, l) && s.has.call(r, a) || Tt(o, l) && s.has.call(r, o) || (r.add(l), oi(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ bn(r) && !/* @__PURE__ */ mi(r) && (r = /* @__PURE__ */ je(r));
        const s = /* @__PURE__ */ je(this), { has: o, get: l } = vs(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ je(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? Tt(r, u) && oi(s, "set", a, r) : oi(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ je(this), { has: s, get: o } = vs(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ je(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && oi(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ je(this), r = a.size !== 0, s = a.clear();
        return r && oi(
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
    n[a] = mv(a, e, t);
  }), n;
}
function Dc(e, t) {
  const n = bv(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ke(n, a) && a in i ? n : i,
    a,
    r
  );
}
const yv = {
  get: /* @__PURE__ */ Dc(!1, !1)
}, _v = {
  get: /* @__PURE__ */ Dc(!1, !0)
}, wv = {
  get: /* @__PURE__ */ Dc(!0, !1)
};
const Tf = /* @__PURE__ */ new WeakMap(), Af = /* @__PURE__ */ new WeakMap(), kf = /* @__PURE__ */ new WeakMap(), Cv = /* @__PURE__ */ new WeakMap();
function Sv(e) {
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
  return /* @__PURE__ */ mi(e) ? e : Mc(
    e,
    !1,
    pv,
    yv,
    Tf
  );
}
// @__NO_SIDE_EFFECTS__
function Ev(e) {
  return Mc(
    e,
    !1,
    gv,
    _v,
    Af
  );
}
// @__NO_SIDE_EFFECTS__
function Kr(e) {
  return Mc(
    e,
    !0,
    vv,
    wv,
    kf
  );
}
function Mc(e, t, n, i, a) {
  if (!We(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Sv(Kp(e));
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
  return /* @__PURE__ */ mi(e) ? /* @__PURE__ */ ba(e.__v_raw) : !!(e && e.__v_isReactive);
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
function $c(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ je(t) : e;
}
function Tv(e) {
  return !Ke(e, "__v_skip") && Object.isExtensible(e) && uf(e, "__v_skip", !0), e;
}
const In = (e) => We(e) ? /* @__PURE__ */ Rt(e) : e, Ja = (e) => We(e) ? /* @__PURE__ */ Kr(e) : e;
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ct(e) {
  return Nf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Of(e) {
  return Nf(e, !0);
}
function Nf(e, t) {
  return /* @__PURE__ */ $t(e) ? e : new Av(e, t);
}
class Av {
  constructor(t, n) {
    this.dep = new Ho(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ je(t), this._value = n ? t : In(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ bn(t) || /* @__PURE__ */ mi(t);
    t = i ? t : /* @__PURE__ */ je(t), Tt(t, n) && (this._rawValue = t, this._value = i ? t : In(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ $t(e) ? e.value : e;
}
function di(e) {
  return xe(e) ? e() : g(e);
}
const kv = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ $t(a) && !/* @__PURE__ */ $t(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function xf(e) {
  return /* @__PURE__ */ ba(e) ? e : new Proxy(e, kv);
}
class Ov {
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
function Nv(e) {
  return new Ov(e);
}
class xv {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ho(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Vr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    tt !== this)
      return gf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return yf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Lv(e, t, n = !1) {
  let i, a;
  return xe(e) ? i = e : (i = e.get, a = e.set), new xv(i, a, n);
}
const ms = {}, Ds = /* @__PURE__ */ new WeakMap();
let la;
function Rv(e, t = !1, n = la) {
  if (n) {
    let i = Ds.get(n);
    i || Ds.set(n, i = []), i.push(e);
  }
}
function Iv(e, t, n = Be) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = ($) => a ? $ : /* @__PURE__ */ bn($) || a === !1 || a === 0 ? li($, 1) : li($);
  let u, h, _, T, O = !1, A = !1;
  if (/* @__PURE__ */ $t(e) ? (h = () => e.value, O = /* @__PURE__ */ bn(e)) : /* @__PURE__ */ ba(e) ? (h = () => d(e), O = !0) : ye(e) ? (A = !0, O = e.some(($) => /* @__PURE__ */ ba($) || /* @__PURE__ */ bn($)), h = () => e.map(($) => {
    if (/* @__PURE__ */ $t($))
      return $.value;
    if (/* @__PURE__ */ ba($))
      return d($);
    if (xe($))
      return l ? l($, 2) : $();
  })) : xe(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (_) {
      vi();
      try {
        _();
      } finally {
        gi();
      }
    }
    const $ = la;
    la = u;
    try {
      return l ? l(e, 3, [T]) : e(T);
    } finally {
      la = $;
    }
  } : h = mn, t && a) {
    const $ = h, oe = a === !0 ? 1 / 0 : a;
    h = () => li($(), oe);
  }
  const x = sv(), P = () => {
    u.stop(), x && x.active && xc(x.effects, u);
  };
  if (r && t) {
    const $ = t;
    t = (...oe) => {
      const ce = $(...oe);
      return P(), ce;
    };
  }
  let I = A ? new Array(e.length).fill(ms) : ms;
  const K = ($) => {
    if (!(!(u.flags & 1) || !u.dirty && !$))
      if (t) {
        const oe = u.run();
        if ($ || a || O || (A ? oe.some((ce, te) => Tt(ce, I[te])) : Tt(oe, I))) {
          _ && _();
          const ce = la;
          la = u;
          try {
            const te = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              I === ms ? void 0 : A && I[0] === ms ? [] : I,
              T
            ];
            I = oe, l ? l(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            la = ce;
          }
        }
      } else
        u.run();
  };
  return o && o(K), u = new pf(h), u.scheduler = s ? () => s(K, !1) : K, T = ($) => Rv($, !1, u), _ = u.onStop = () => {
    const $ = Ds.get(u);
    if ($) {
      if (l)
        l($, 4);
      else
        for (const oe of $) oe();
      Ds.delete(u);
    }
  }, t ? i ? K(!0) : I = u.run() : s ? s(K.bind(null, !0), !0) : u.run(), P.pause = u.pause.bind(u), P.resume = u.resume.bind(u), P.stop = P, P;
}
function li(e, t = 1 / 0, n) {
  if (t <= 0 || !We(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ $t(e))
    li(e.value, t, n);
  else if (ye(e))
    for (let i = 0; i < e.length; i++)
      li(e[i], t, n);
  else if (_a(e) || $i(e))
    e.forEach((i) => {
      li(i, t, n);
    });
  else if (cf(e)) {
    for (const i in e)
      li(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && li(e[i], t, n);
  }
  return e;
}
function cs(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Vo(a, t, n);
  }
}
function yn(e, t, n, i) {
  if (xe(e)) {
    const a = cs(e, t, n, i);
    return a && of(a) && a.catch((r) => {
      Vo(r, t, n);
    }), a;
  }
  if (ye(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(yn(e[r], t, n, i));
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
      vi(), cs(r, null, 10, [
        e,
        l,
        d
      ]), gi();
      return;
    }
  }
  Pv(e, n, a, i, s);
}
function Pv(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Ht = [];
let zn = -1;
const Ga = [];
let Di = null, Ba = 0;
const Lf = /* @__PURE__ */ Promise.resolve();
let Ms = null;
function fi(e) {
  const t = Ms || Lf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dv(e) {
  let t = zn + 1, n = Ht.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Ht[i], r = Wr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Fc(e) {
  if (!(e.flags & 1)) {
    const t = Wr(e), n = Ht[Ht.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Wr(n) ? Ht.push(e) : Ht.splice(Dv(t), 0, e), e.flags |= 1, Rf();
  }
}
function Rf() {
  Ms || (Ms = Lf.then(Df));
}
function If(e) {
  if (!ye(e))
    Di && e.id === -1 ? Di.splice(Ba + 1, 0, e) : e.flags & 1 || (Ga.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ga.push(e[t]);
  Rf();
}
function bu(e, t, n = zn + 1) {
  for (; n < Ht.length; n++) {
    const i = Ht[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Ht.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Pf(e) {
  if (Ga.length) {
    const t = [...new Set(Ga)].sort(
      (n, i) => Wr(n) - Wr(i)
    );
    if (Ga.length = 0, Di) {
      for (let n = 0; n < t.length; n++)
        Di.push(t[n]);
      return;
    }
    for (Di = t, Ba = 0; Ba < Di.length; Ba++) {
      const n = Di[Ba];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Di = null, Ba = 0;
  }
}
const Wr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Df(e) {
  try {
    for (zn = 0; zn < Ht.length; zn++) {
      const t = Ht[zn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), cs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; zn < Ht.length; zn++) {
      const t = Ht[zn];
      t && (t.flags &= -2);
    }
    zn = -1, Ht.length = 0, Pf(), Ms = null, (Ht.length || Ga.length) && Df();
  }
}
let kt = null, Go = null;
function $s(e) {
  const t = kt;
  return kt = e, Go = e && e.type.__scopeId || null, t;
}
function Mv(e) {
  Go = e;
}
function $v() {
  Go = null;
}
const Fv = (e) => ke;
function ke(e, t = kt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Hs(-1);
    const r = $s(t), s = hi.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = hi.length; l > s; l--) Gc();
      $s(r), i._d && Hs(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ge(e, t) {
  if (kt === null)
    return e;
  const n = Zo(kt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = Be] = t[a];
    r && (xe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && li(s), i.push({
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
    l && (vi(), yn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), gi());
  }
}
function pn(e, t) {
  if (Dt) {
    let n = Dt.provides;
    const i = Dt.parent && Dt.parent.provides;
    i === n && (n = Dt.provides = Object.create(i)), n[e] = t;
  }
}
function Pt(e, t, n = !1) {
  const i = Ca();
  if (i || Wa) {
    let a = Wa ? Wa._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && xe(t) ? t.call(i && i.proxy) : t;
  }
}
const zv = /* @__PURE__ */ Symbol.for("v-scx"), Uv = () => Pt(zv);
function Bv(e, t) {
  return Ko(e, null, t);
}
function Hv(e, t) {
  return Ko(
    e,
    null,
    { flush: "sync" }
  );
}
function Yt(e, t, n) {
  return Ko(e, t, n);
}
function Ko(e, t, n = Be) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = ht({}, n), l = t && i || !t && r !== "post";
  let d;
  if (Qr) {
    if (r === "sync") {
      const T = Uv();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!l) {
      const T = () => {
      };
      return T.stop = mn, T.resume = mn, T.pause = mn, T;
    }
  }
  const u = Dt;
  o.call = (T, O, A) => yn(T, u, O, A);
  let h = !1;
  r === "post" ? o.scheduler = (T) => {
    Bt(T, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (T, O) => {
    O ? T() : Fc(T);
  }), o.augmentJob = (T) => {
    t && (T.flags |= 4), h && (T.flags |= 2, u && (T.id = u.uid, T.i = u));
  };
  const _ = Iv(e, t, o);
  return Qr && (d ? d.push(_) : l && _()), _;
}
function jv(e, t, n) {
  const i = this.proxy, a = nt(e) ? e.includes(".") ? Mf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  xe(t) ? r = t : (r = t.handler, n = t);
  const s = fs(this), o = Ko(a, r.bind(i), n);
  return s(), o;
}
function Mf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Li = /* @__PURE__ */ new WeakMap(), $f = /* @__PURE__ */ Symbol("_vte"), Wo = (e) => e.__isTeleport, ua = (e) => e && (e.disabled || e.disabled === ""), Vv = (e) => e && (e.defer || e.defer === ""), yu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, _u = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ec = (e, t) => {
  const n = e && e.to;
  return nt(n) ? t ? t(n) : null : n;
}, Gv = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: _,
      o: { insert: T, querySelector: O, createText: A, createComment: x, parentNode: P }
    } = d, I = ua(t.props);
    let { dynamicChildren: K } = t;
    const $ = (te, fe, B) => {
      te.shapeFlag & 16 && u(
        te.children,
        fe,
        B,
        a,
        r,
        s,
        o,
        l
      );
    }, oe = (te = t) => {
      const fe = ua(te.props), B = te.target = ec(te.props, O), z = tc(B, te, A, T);
      B && (s !== "svg" && yu(B) ? s = "svg" : s !== "mathml" && _u(B) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(B), fe || ($(te, B, z), Cr(te, !1)));
    }, ce = (te) => {
      const fe = () => {
        if (Li.get(te) === fe) {
          if (Li.delete(te), ua(te.props)) {
            const B = P(te.el) || n;
            $(te, B, te.anchor), Cr(te, !0);
          }
          oe(te);
        }
      };
      Li.set(te, fe), Bt(fe, r);
    };
    if (e == null) {
      const te = t.el = A(""), fe = t.anchor = A("");
      if (T(te, n, i), T(fe, n, i), Vv(t.props) || r && r.pendingBranch) {
        ce(t);
        return;
      }
      I && ($(t, n, fe), Cr(t, !0)), oe();
    } else {
      t.el = e.el;
      const te = t.anchor = e.anchor, fe = Li.get(e);
      if (fe) {
        fe.flags |= 8, Li.delete(e), ce(t);
        return;
      }
      t.targetStart = e.targetStart;
      const B = t.target = e.target, z = t.targetAnchor = e.targetAnchor, ge = ua(e.props), ee = ge ? n : B, ne = ge ? te : z;
      if (s === "svg" || yu(B) ? s = "svg" : (s === "mathml" || _u(B)) && (s = "mathml"), K ? (_(
        e.dynamicChildren,
        K,
        ee,
        a,
        r,
        s,
        o
      ), Vc(e, t, !0)) : l || h(
        e,
        t,
        ee,
        ne,
        a,
        r,
        s,
        o,
        !1
      ), I)
        ge ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : bs(
          t,
          n,
          te,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = ec(t.props, O);
        D && (t.target = D, bs(
          t,
          D,
          null,
          d,
          0
        ));
      } else ge && bs(
        t,
        B,
        z,
        d,
        1
      );
      Cr(t, I);
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
    } = e, T = ua(_), O = r || !T, A = Li.get(e);
    if (A && (A.flags |= 8, Li.delete(e)), h && (a(d), a(u)), r && a(l), !A && (T || h) && s & 16)
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
  move: bs,
  hydrate: Kv
};
function bs(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: d, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !Li.has(e) && (!h || ua(u)) && l & 16)
    for (let _ = 0; _ < d.length; _++)
      a(
        d[_],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function Kv(e, t, n, i, a, r, {
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
  const O = t.target = ec(
    t.props,
    l
  ), A = ua(t.props);
  if (O) {
    const x = O._lpa || O.firstChild;
    t.shapeFlag & 16 && (A ? (T(e, t), _(O, x), t.targetAnchor || tc(
      O,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === O ? e : null
    )) : (t.anchor = s(e), _(O, x), t.targetAnchor || tc(O, t, u, d), h(
      x && s(x),
      t,
      O,
      n,
      i,
      a,
      r
    ))), Cr(t, A);
  } else A && t.shapeFlag & 16 && (T(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Ff = Gv;
function Cr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function tc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[$f] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const vn = /* @__PURE__ */ Symbol("_leaveCb"), hr = /* @__PURE__ */ Symbol("_enterCb");
function Wv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Vi(() => {
    e.isMounted = !0;
  }), Qa(() => {
    e.isUnmounting = !0;
  }), e;
}
const dn = [Function, Array], zf = {
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
}, Uf = (e) => {
  const t = e.subTree;
  return t.component ? Uf(t.component) : t;
}, qv = {
  name: "BaseTransition",
  props: zf,
  setup(e, { slots: t }) {
    const n = Ca(), i = Wv();
    return () => {
      const a = t.default && jf(t.default(), !0), r = a && a.length ? Bf(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? H() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ je(e), { mode: o } = s;
      if (i.isLeaving)
        return ml(r);
      const l = Fs(r);
      if (!l)
        return ml(r);
      let d = nc(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== At && qr(l, d);
      let u = n.subTree && Fs(n.subTree);
      if (u && u.type !== At && !da(u, l) && Uf(n).type !== At) {
        let h = nc(
          u,
          s,
          i,
          n
        );
        if (qr(u, h), o === "out-in" && l.type !== At)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, ml(r);
        o === "in-out" && l.type !== At ? h.delayLeave = (_, T, O) => {
          const A = Hf(
            i,
            u
          );
          A[String(u.key)] = u, _[vn] = () => {
            T(), _[vn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            O(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Bf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== At) {
        t = n;
        break;
      }
  }
  return t;
}
const Yv = qv;
function Hf(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function nc(e, t, n, i, a) {
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
  } = t, $ = String(e.key), oe = Hf(n, e), ce = (B, z) => {
    B && yn(
      B,
      i,
      9,
      z
    );
  }, te = (B, z) => {
    const ge = z[1];
    ce(B, z), ye(B) ? B.every((ee) => ee.length <= 1) && ge() : B.length <= 1 && ge();
  }, fe = {
    mode: s,
    persisted: o,
    beforeEnter(B) {
      let z = l;
      if (!n.isMounted)
        if (r)
          z = x || l;
        else
          return;
      B[vn] && B[vn](
        !0
        /* cancelled */
      );
      const ge = oe[$];
      ge && da(e, ge) && ge.el[vn] && ge.el[vn](), ce(z, [B]);
    },
    enter(B) {
      if (oe[$] === e) return;
      let z = d, ge = u, ee = h;
      if (!n.isMounted)
        if (r)
          z = P || d, ge = I || u, ee = K || h;
        else
          return;
      let ne = !1;
      B[hr] = (M) => {
        ne || (ne = !0, M ? ce(ee, [B]) : ce(ge, [B]), fe.delayedLeave && fe.delayedLeave(), B[hr] = void 0);
      };
      const D = B[hr].bind(null, !1);
      z ? te(z, [B, D]) : D();
    },
    leave(B, z) {
      const ge = String(e.key);
      if (B[hr] && B[hr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return z();
      ce(_, [B]);
      let ee = !1;
      B[vn] = (D) => {
        ee || (ee = !0, z(), D ? ce(A, [B]) : ce(O, [B]), B[vn] = void 0, oe[ge] === e && delete oe[ge]);
      };
      const ne = B[vn].bind(null, !1);
      oe[ge] = e, T ? te(T, [B, ne]) : ne();
    },
    clone(B) {
      const z = nc(
        B,
        t,
        n,
        i,
        a
      );
      return a && a(z), z;
    }
  };
  return fe;
}
function ml(e) {
  if (qo(e))
    return e = Hi(e), e.children = null, e;
}
function Fs(e) {
  if (!qo(e))
    return Wo(e.type) && e.children ? Bf(e.children) : e;
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
function qr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    qr(
      Wo(n.type) && Fs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function jf(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === le ? (s.patchFlag & 128 && a++, i = i.concat(
      jf(s.children, t, o)
    )) : (t || s.type !== At) && i.push(o != null ? Hi(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Ot(e, t) {
  return xe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ht({ name: e.name }, t, { setup: e })
  ) : e;
}
function Vf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Xv(e) {
  const t = Ca(), n = /* @__PURE__ */ Of(null);
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
function wu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const zs = /* @__PURE__ */ new WeakMap();
function Lr(e, t, n, i, a = !1) {
  if (ye(e)) {
    e.forEach(
      (A, x) => Lr(
        A,
        t && (ye(t) ? t[x] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ka(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Lr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Zo(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === Be ? o.refs = {} : o.refs, h = o.setupState, _ = /* @__PURE__ */ je(h), T = h === Be ? sf : (A) => wu(u, A) ? !1 : Ke(_, A), O = (A, x) => !(x && wu(u, x));
  if (d != null && d !== l) {
    if (Cu(t), nt(d))
      u[d] = null, T(d) && (h[d] = null);
    else if (/* @__PURE__ */ $t(d)) {
      const A = t;
      O(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (xe(l))
    cs(l, o, 12, [s, u]);
  else {
    const A = nt(l), x = /* @__PURE__ */ $t(l);
    if (A || x) {
      const P = () => {
        if (e.f) {
          const I = A ? T(l) ? h[l] : u[l] : O() || !e.k ? l.value : u[e.k];
          if (a)
            ye(I) && xc(I, r);
          else if (ye(I))
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
          P(), zs.delete(e);
        };
        I.id = -1, zs.set(e, I), Bt(I, n);
      } else
        Cu(e), P();
    }
  }
}
function Cu(e) {
  const t = zs.get(e);
  t && (t.flags |= 8, zs.delete(e));
}
Bo().requestIdleCallback;
Bo().cancelIdleCallback;
const Ka = (e) => !!e.type.__asyncLoader, qo = (e) => e.type.__isKeepAlive;
function Zv(e, t) {
  Gf(e, "a", t);
}
function Jv(e, t) {
  Gf(e, "da", t);
}
function Gf(e, t, n = Dt) {
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
      qo(a.parent.vnode) && Qv(i, t, n, a), a = a.parent;
  }
}
function Qv(e, t, n, i) {
  const a = Yo(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  us(() => {
    xc(i[t], a);
  }, n);
}
function Yo(e, t, n = Dt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      vi();
      const o = fs(n), l = yn(t, n, e, s);
      return o(), gi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const _i = (e) => (t, n = Dt) => {
  (!Qr || e === "sp") && Yo(e, (...i) => t(...i), n);
}, Kf = _i("bm"), Vi = _i("m"), Wf = _i(
  "bu"
), eg = _i("u"), Qa = _i(
  "bum"
), us = _i("um"), tg = _i(
  "sp"
), ng = _i("rtg"), ig = _i("rtc");
function ag(e, t = Dt) {
  Yo("ec", e, t);
}
const zc = "components", rg = "directives";
function ze(e, t) {
  return Bc(zc, e, !0, t) || e;
}
const qf = /* @__PURE__ */ Symbol.for("v-ndc");
function Uc(e) {
  return nt(e) ? Bc(zc, e, !1) || e : e || qf;
}
function Su(e) {
  return Bc(rg, e);
}
function Bc(e, t, n = !0, i = !1) {
  const a = kt || Dt;
  if (a) {
    const r = a.type;
    if (e === zc) {
      const o = Bg(
        r,
        !1
      );
      if (o && (o === t || o === Mt(t) || o === zo(Mt(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Eu(a[e] || r[e], t) || // global registration
      Eu(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function Eu(e, t) {
  return e && (e[t] || e[Mt(t)] || e[zo(Mt(t))]);
}
function De(e, t, n, i) {
  let a;
  const r = n, s = ye(e);
  if (s || nt(e)) {
    const o = s && /* @__PURE__ */ ba(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ bn(e), d = /* @__PURE__ */ mi(e), e = jo(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? d ? Ja(In(e[u])) : In(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (We(e))
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
  if (n == null && (n = {}), kt.ce || kt.parent && Ka(kt.parent) && kt.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), b(), $e(
      le,
      null,
      [ve("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = hi.length;
  b();
  let l;
  try {
    const d = s && Yf(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = $e(
      le,
      {
        key: (u && !Rn(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = hi.length; u > o; u--) Gc();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Yf(e) {
  return e.some((t) => Xr(t) ? !(t.type === At || t.type === le && !Yf(t.children)) : !0) ? e : null;
}
const ic = (e) => e ? mh(e) ? Zo(e) : ic(e.parent) : null, Rr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ht(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ic(e.parent),
    $root: (e) => ic(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fi.bind(e.proxy)),
    $watch: (e) => jv.bind(e)
  })
), bl = (e, t) => e !== Be && !e.__isScriptSetup && Ke(e, t), sg = {
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
        if (bl(i, t))
          return s[t] = 1, i[t];
        if (a !== Be && Ke(a, t))
          return s[t] = 2, a[t];
        if (Ke(r, t))
          return s[t] = 3, r[t];
        if (n !== Be && Ke(n, t))
          return s[t] = 4, n[t];
        ac && (s[t] = 0);
      }
    }
    const d = Rr[t];
    let u, h;
    if (d)
      return t === "$attrs" && It(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Be && Ke(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Ke(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return bl(a, t) ? (a[t] = n, !0) : i !== Be && Ke(i, t) ? (i[t] = n, !0) : Ke(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Be && o[0] !== "$" && Ke(e, o) || bl(t, o) || Ke(r, o) || Ke(i, o) || Ke(Rr, o) || Ke(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ke(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function og() {
  return Xf().slots;
}
function lg() {
  return Xf().attrs;
}
function Xf(e) {
  const t = Ca();
  return t.setupContext || (t.setupContext = yh(t));
}
function Us(e) {
  return ye(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function cg(e, t) {
  return !e || !t ? e || t : ye(e) && ye(t) ? e.concat(t) : ht({}, Us(e), Us(t));
}
let ac = !0;
function ug(e) {
  const t = Jf(e), n = e.proxy, i = e.ctx;
  ac = !1, t.beforeCreate && Tu(t.beforeCreate, e, "bc");
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
    unmounted: $,
    render: oe,
    renderTracked: ce,
    renderTriggered: te,
    errorCaptured: fe,
    serverPrefetch: B,
    // public API
    expose: z,
    inheritAttrs: ge,
    // assets
    components: ee,
    directives: ne,
    filters: D
  } = t;
  if (d && dg(d, i, null), s)
    for (const ae in s) {
      const ie = s[ae];
      xe(ie) && (i[ae] = ie.bind(n));
    }
  if (a) {
    const ae = a.call(n, n);
    We(ae) && (e.data = /* @__PURE__ */ Rt(ae));
  }
  if (ac = !0, r)
    for (const ae in r) {
      const ie = r[ae], ue = xe(ie) ? ie.bind(n, n) : xe(ie.get) ? ie.get.bind(n, n) : mn, he = !xe(ie) && xe(ie.set) ? ie.set.bind(n) : mn, Ce = Y({
        get: ue,
        set: he
      });
      Object.defineProperty(i, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (be) => Ce.value = be
      });
    }
  if (o)
    for (const ae in o)
      Zf(o[ae], i, n, ae);
  if (l) {
    const ae = xe(l) ? l.call(n) : l;
    Reflect.ownKeys(ae).forEach((ie) => {
      pn(ie, ae[ie]);
    });
  }
  u && Tu(u, e, "c");
  function X(ae, ie) {
    ye(ie) ? ie.forEach((ue) => ae(ue.bind(n))) : ie && ae(ie.bind(n));
  }
  if (X(Kf, h), X(Vi, _), X(Wf, T), X(eg, O), X(Zv, A), X(Jv, x), X(ag, fe), X(ig, ce), X(ng, te), X(Qa, I), X(us, $), X(tg, B), ye(z))
    if (z.length) {
      const ae = e.exposed || (e.exposed = {});
      z.forEach((ie) => {
        Object.defineProperty(ae, ie, {
          get: () => n[ie],
          set: (ue) => n[ie] = ue,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === mn && (e.render = oe), ge != null && (e.inheritAttrs = ge), ee && (e.components = ee), ne && (e.directives = ne), B && Vf(e);
}
function dg(e, t, n = mn) {
  ye(e) && (e = rc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    We(a) ? "default" in a ? r = Pt(
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
function Tu(e, t, n) {
  yn(
    ye(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Zf(e, t, n, i) {
  let a = i.includes(".") ? Mf(n, i) : () => n[i];
  if (nt(e)) {
    const r = t[e];
    xe(r) && Yt(a, r);
  } else if (xe(e))
    Yt(a, e.bind(n));
  else if (We(e))
    if (ye(e))
      e.forEach((r) => Zf(r, t, n, i));
    else {
      const r = xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      xe(r) && Yt(a, r, e);
    }
}
function Jf(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => Bs(l, d, s, !0)
  ), Bs(l, t, s)), We(t) && r.set(t, l), l;
}
function Bs(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Bs(e, r, n, !0), a && a.forEach(
    (s) => Bs(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = fg[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const fg = {
  data: Au,
  props: ku,
  emits: ku,
  // objects
  methods: Sr,
  computed: Sr,
  // lifecycle
  beforeCreate: Ut,
  created: Ut,
  beforeMount: Ut,
  mounted: Ut,
  beforeUpdate: Ut,
  updated: Ut,
  beforeDestroy: Ut,
  beforeUnmount: Ut,
  destroyed: Ut,
  unmounted: Ut,
  activated: Ut,
  deactivated: Ut,
  errorCaptured: Ut,
  serverPrefetch: Ut,
  // assets
  components: Sr,
  directives: Sr,
  // watch
  watch: pg,
  // provide / inject
  provide: Au,
  inject: hg
};
function Au(e, t) {
  return t ? e ? function() {
    return ht(
      xe(e) ? e.call(this, this) : e,
      xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hg(e, t) {
  return Sr(rc(e), rc(t));
}
function rc(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ut(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Sr(e, t) {
  return e ? ht(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ku(e, t) {
  return e ? ye(e) && ye(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ht(
    /* @__PURE__ */ Object.create(null),
    Us(e),
    Us(t ?? {})
  ) : t;
}
function pg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ht(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Ut(e[i], t[i]);
  return n;
}
function Qf() {
  return {
    app: null,
    config: {
      isNativeTag: sf,
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
let vg = 0;
function gg(e, t) {
  return function(i, a = null) {
    xe(i) || (i = ht({}, i)), a != null && !We(a) && (a = null);
    const r = Qf(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: vg++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: jg,
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
          const T = d._ceVNode || ve(i, a);
          return T.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(T, u, _), l = !0, d._container = u, u.__vue_app__ = d, Zo(T.component);
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
        const h = Wa;
        Wa = d;
        try {
          return u();
        } finally {
          Wa = h;
        }
      }
    };
    return d;
  };
}
let Wa = null;
function eh(e, t, n = Be) {
  const i = Ca(), a = Mt(t), r = yi(t), s = th(e, a), o = Nv((l, d) => {
    let u, h = Be, _;
    return Hv(() => {
      const T = e[a];
      Tt(u, T) && (u = T, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(T) {
        const O = n.set ? n.set(T) : T;
        if (!Tt(O, u) && !(h !== Be && Tt(T, h)))
          return;
        const A = i.vnode.props, x = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        x || (u = T, d()), i.emit(`update:${t}`, O), Tt(T, h) && (Tt(T, O) && !Tt(O, _) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        x && h !== Be && !Tt(O, u)) && d(), h = T, _ = O;
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
const th = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Mt(t)}Modifiers`] || e[`${yi(t)}Modifiers`];
function mg(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Be;
  let a = n;
  const r = t.startsWith("update:"), s = r && th(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => nt(u) ? u.trim() : u)), s.number && (a = a.map(Uo)));
  let o, l = i[o = fl(t)] || // also try camelCase event handler (#2249)
  i[o = fl(Mt(t))];
  !l && r && (l = i[o = fl(yi(t))]), l && yn(
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
const bg = /* @__PURE__ */ new WeakMap();
function nh(e, t, n = !1) {
  const i = n ? bg : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!xe(e)) {
    const l = (d) => {
      const u = nh(d, t, !0);
      u && (o = !0, ht(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (We(e) && i.set(e, null), null) : (ye(r) ? r.forEach((l) => s[l] = null) : ht(s, r), We(e) && i.set(e, s), s);
}
function Xo(e, t) {
  return !e || !Mo(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ke(e, t[0].toLowerCase() + t.slice(1)) || Ke(e, yi(t)) || Ke(e, t));
}
function Ou(e) {
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
  } = e, x = $s(e);
  let P, I;
  try {
    if (n.shapeFlag & 4) {
      const $ = a || i, oe = $;
      P = jn(
        d.call(
          oe,
          $,
          u,
          h,
          T,
          _,
          O
        )
      ), I = o;
    } else {
      const $ = t;
      P = jn(
        $.length > 1 ? $(
          h,
          { attrs: o, slots: s, emit: l }
        ) : $(
          h,
          null
        )
      ), I = t.props ? o : yg(o);
    }
  } catch ($) {
    hi.length = 0, Vo($, e, 1), P = ve(At);
  }
  let K = P;
  if (I && A !== !1) {
    const $ = Object.keys(I), { shapeFlag: oe } = K;
    $.length && oe & 7 && (r && $.some($o) && (I = _g(
      I,
      r
    )), K = Hi(K, I, !1, !0));
  }
  if (n.dirs && (K = Hi(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const $ = Wo(K.type) && Fs(K) || K;
    qr($, n.transition);
  }
  return P = K, $s(x), P;
}
const yg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Mo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, _g = (e, t) => {
  const n = {};
  for (const i in e)
    (!$o(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function wg(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Nu(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const _ = u[h];
        if (ih(s, i, _) && !Xo(d, _))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? Nu(i, s, d) : !0 : !!s;
  return !1;
}
function Nu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (ih(t, e, r) && !Xo(n, r))
      return !0;
  }
  return !1;
}
function ih(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && We(i) && We(a) ? !Bi(i, a) : i !== a;
}
function Cg({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const ah = {}, rh = () => Object.create(ah), sh = (e) => Object.getPrototypeOf(e) === ah;
function Sg(e, t, n, i = !1) {
  const a = {}, r = rh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), oh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Ev(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Eg(e, t, n, i) {
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
        const T = t[_];
        if (l)
          if (Ke(r, _))
            T !== r[_] && (r[_] = T, d = !0);
          else {
            const O = Mt(_);
            a[O] = sc(
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
    oh(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !Ke(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = yi(h)) === h || !Ke(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = sc(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !Ke(t, h)) && (delete r[h], d = !0);
  }
  d && oi(e.attrs, "set", "");
}
function oh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Or(l))
        continue;
      const d = t[l];
      let u;
      a && Ke(a, u = Mt(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : Xo(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ je(n), d = o || Be;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = sc(
        a,
        l,
        h,
        d[h],
        e,
        !Ke(d, h)
      );
    }
  }
  return s;
}
function sc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Ke(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && xe(l)) {
        const { propsDefaults: d } = a;
        if (n in d)
          i = d[n];
        else {
          const u = fs(a);
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
const Tg = /* @__PURE__ */ new WeakMap();
function lh(e, t, n = !1) {
  const i = n ? Tg : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!xe(e)) {
    const u = (h) => {
      l = !0;
      const [_, T] = lh(h, t, !0);
      ht(s, _), T && o.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return We(e) && i.set(e, Va), Va;
  if (ye(r))
    for (let u = 0; u < r.length; u++) {
      const h = Mt(r[u]);
      xu(h) && (s[h] = Be);
    }
  else if (r)
    for (const u in r) {
      const h = Mt(u);
      if (xu(h)) {
        const _ = r[u], T = s[h] = ye(_) || xe(_) ? { type: _ } : ht({}, _), O = T.type;
        let A = !1, x = !0;
        if (ye(O))
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
        ] = x, (A || Ke(T, "default")) && o.push(h);
      }
    }
  const d = [s, o];
  return We(e) && i.set(e, d), d;
}
function xu(e) {
  return e[0] !== "$" && !Or(e);
}
const Hc = (e) => e === "_" || e === "_ctx" || e === "$stable", jc = (e) => ye(e) ? e.map(jn) : [jn(e)], Ag = (e, t, n) => {
  if (t._n)
    return t;
  const i = ke((...a) => jc(t(...a)), n);
  return i._c = !1, i;
}, ch = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Hc(a)) continue;
    const r = e[a];
    if (xe(r))
      t[a] = Ag(a, r, i);
    else if (r != null) {
      const s = jc(r);
      t[a] = () => s;
    }
  }
}, uh = (e, t) => {
  const n = jc(t);
  e.slots.default = () => n;
}, dh = (e, t, n) => {
  for (const i in t)
    (n || !Hc(i)) && (e[i] = t[i]);
}, kg = (e, t, n) => {
  const i = e.slots = rh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (dh(i, t, n), n && uf(i, "_", a, !0)) : ch(t, i);
  } else t && uh(e, t);
}, Og = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Be;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : dh(a, t, n) : (r = !t.$stable, ch(t, a)), s = t;
  } else t && (uh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !Hc(o) && s[o] == null && delete a[o];
}, Bt = Ig;
function Ng(e) {
  return xg(e);
}
function xg(e, t) {
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
    setScopeId: T = mn,
    insertStaticContent: O
  } = e, A = (v, w, k, L = null, N = null, F = null, W = void 0, V = null, J = !!w.dynamicChildren) => {
    if (v === w)
      return;
    v && !da(v, w) && (L = Xe(v), be(v, N, F, !0), v = null), w.patchFlag === -2 && (J = !1, w.dynamicChildren = null);
    const { type: G, ref: me, shapeFlag: re } = w;
    switch (G) {
      case ds:
        x(v, w, k, L);
        break;
      case At:
        P(v, w, k, L);
        break;
      case xs:
        v == null && I(w, k, L, W);
        break;
      case le:
        ee(
          v,
          w,
          k,
          L,
          N,
          F,
          W,
          V,
          J
        );
        break;
      default:
        re & 1 ? oe(
          v,
          w,
          k,
          L,
          N,
          F,
          W,
          V,
          J
        ) : re & 6 ? ne(
          v,
          w,
          k,
          L,
          N,
          F,
          W,
          V,
          J
        ) : (re & 64 || re & 128) && G.process(
          v,
          w,
          k,
          L,
          N,
          F,
          W,
          V,
          J,
          _n
        );
    }
    me != null && N ? Lr(me, v && v.ref, F, w || v, !w) : me == null && v && v.ref != null && Lr(v.ref, null, F, v, !0);
  }, x = (v, w, k, L) => {
    if (v == null)
      i(
        w.el = o(w.children),
        k,
        L
      );
    else {
      const N = w.el = v.el;
      w.children !== v.children && d(N, w.children);
    }
  }, P = (v, w, k, L) => {
    v == null ? i(
      w.el = l(w.children || ""),
      k,
      L
    ) : w.el = v.el;
  }, I = (v, w, k, L) => {
    [v.el, v.anchor] = O(
      v.children,
      w,
      k,
      L,
      v.el,
      v.anchor
    );
  }, K = ({ el: v, anchor: w }, k, L) => {
    let N;
    for (; v && v !== w; )
      N = _(v), i(v, k, L), v = N;
    i(w, k, L);
  }, $ = ({ el: v, anchor: w }) => {
    let k;
    for (; v && v !== w; )
      k = _(v), a(v), v = k;
    a(w);
  }, oe = (v, w, k, L, N, F, W, V, J) => {
    if (w.type === "svg" ? W = "svg" : w.type === "math" && (W = "mathml"), v == null)
      ce(
        w,
        k,
        L,
        N,
        F,
        W,
        V,
        J
      );
    else {
      const G = v.el && v.el._isVueCE ? v.el : null;
      try {
        G && G._beginPatch(), B(
          v,
          w,
          N,
          F,
          W,
          V,
          J
        );
      } finally {
        G && G._endPatch();
      }
    }
  }, ce = (v, w, k, L, N, F, W, V) => {
    let J, G;
    const { props: me, shapeFlag: re, transition: pe, dirs: _e } = v;
    if (J = v.el = s(
      v.type,
      F,
      me && me.is,
      me
    ), re & 8 ? u(J, v.children) : re & 16 && fe(
      v.children,
      J,
      null,
      L,
      N,
      yl(v, F),
      W,
      V
    ), _e && na(v, null, L, "created"), te(J, v, v.scopeId, W, L), me) {
      for (const Pe in me)
        Pe !== "value" && !Or(Pe) && r(J, Pe, null, me[Pe], F, L);
      "value" in me && r(J, "value", null, me.value, F), (G = me.onVnodeBeforeMount) && $n(G, L, v);
    }
    _e && na(v, null, L, "beforeMount");
    const Ne = Lg(N, pe);
    Ne && pe.beforeEnter(J), i(J, w, k), ((G = me && me.onVnodeMounted) || Ne || _e) && Bt(() => {
      G && $n(G, L, v), Ne && pe.enter(J), _e && na(v, null, L, "mounted");
    }, N);
  }, te = (v, w, k, L, N) => {
    if (k && T(v, k), L)
      for (let F = 0; F < L.length; F++)
        T(v, L[F]);
    if (N) {
      let F = N.subTree;
      if (w === F || ph(F.type) && (F.ssContent === w || F.ssFallback === w)) {
        const W = N.vnode;
        te(
          v,
          W,
          W.scopeId,
          W.slotScopeIds,
          N.parent
        );
      }
    }
  }, fe = (v, w, k, L, N, F, W, V, J = 0) => {
    for (let G = J; G < v.length; G++) {
      const me = v[G] = V ? si(v[G]) : jn(v[G]);
      A(
        null,
        me,
        w,
        k,
        L,
        N,
        F,
        W,
        V
      );
    }
  }, B = (v, w, k, L, N, F, W) => {
    const V = w.el = v.el;
    let { patchFlag: J, dynamicChildren: G, dirs: me } = w;
    J |= v.patchFlag & 16;
    const re = v.props || Be, pe = w.props || Be;
    let _e;
    if (k && ia(k, !1), (_e = pe.onVnodeBeforeUpdate) && $n(_e, k, w, v), me && na(w, v, k, "beforeUpdate"), k && ia(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    G && (!v.dynamicChildren || v.dynamicChildren.length !== G.length) && (J = 0, W = !1, G = null), (re.innerHTML && pe.innerHTML == null || re.textContent && pe.textContent == null) && u(V, ""), G ? z(
      v.dynamicChildren,
      G,
      V,
      k,
      L,
      yl(w, N),
      F
    ) : W || ie(
      v,
      w,
      V,
      null,
      k,
      L,
      yl(w, N),
      F,
      !1
    ), J > 0) {
      if (J & 16)
        ge(V, re, pe, k, N);
      else if (J & 2 && re.class !== pe.class && r(V, "class", null, pe.class, N), J & 4 && r(V, "style", re.style, pe.style, N), J & 8) {
        const Ne = w.dynamicProps;
        for (let Pe = 0; Pe < Ne.length; Pe++) {
          const Re = Ne[Pe], Je = re[Re], it = pe[Re];
          (it !== Je || Re === "value") && r(V, Re, Je, it, N, k);
        }
      }
      J & 1 && v.children !== w.children && u(V, w.children);
    } else !W && G == null && ge(V, re, pe, k, N);
    ((_e = pe.onVnodeUpdated) || me) && Bt(() => {
      _e && $n(_e, k, w, v), me && na(w, v, k, "updated");
    }, L);
  }, z = (v, w, k, L, N, F, W) => {
    for (let V = 0; V < w.length; V++) {
      const J = v[V], G = w[V], me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        J.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (J.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !da(J, G) || // - In the case of a component, it could contain anything.
        J.shapeFlag & 198) ? h(J.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        J,
        G,
        me,
        null,
        L,
        N,
        F,
        W,
        !0
      );
    }
  }, ge = (v, w, k, L, N) => {
    if (w !== k) {
      if (w !== Be)
        for (const F in w)
          !Or(F) && !(F in k) && r(
            v,
            F,
            w[F],
            null,
            N,
            L
          );
      for (const F in k) {
        if (Or(F)) continue;
        const W = k[F], V = w[F];
        W !== V && F !== "value" && r(v, F, V, W, N, L);
      }
      "value" in k && r(v, "value", w.value, k.value, N);
    }
  }, ee = (v, w, k, L, N, F, W, V, J) => {
    const G = w.el = v ? v.el : o(""), me = w.anchor = v ? v.anchor : o("");
    let { patchFlag: re, dynamicChildren: pe, slotScopeIds: _e } = w;
    _e && (V = V ? V.concat(_e) : _e), v == null ? (i(G, k, L), i(me, k, L), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      k,
      me,
      N,
      F,
      W,
      V,
      J
    )) : re > 0 && re & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === pe.length ? (z(
      v.dynamicChildren,
      pe,
      k,
      N,
      F,
      W,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || N && w === N.subTree) && Vc(
      v,
      w,
      !0
      /* shallow */
    )) : ie(
      v,
      w,
      k,
      me,
      N,
      F,
      W,
      V,
      J
    );
  }, ne = (v, w, k, L, N, F, W, V, J) => {
    w.slotScopeIds = V, v == null ? w.shapeFlag & 512 ? N.ctx.activate(
      w,
      k,
      L,
      W,
      J
    ) : D(
      w,
      k,
      L,
      N,
      F,
      W,
      J
    ) : M(v, w, J);
  }, D = (v, w, k, L, N, F, W) => {
    const V = v.component = $g(
      v,
      L,
      N
    );
    if (qo(v) && (V.ctx.renderer = _n), Fg(V, !1, W), V.asyncDep) {
      if (N && N.registerDep(V, X, W), !v.el) {
        const J = V.subTree = ve(At);
        P(null, J, w, k), v.placeholder = J.el;
      }
    } else
      X(
        V,
        v,
        w,
        k,
        N,
        F,
        W
      );
  }, M = (v, w, k) => {
    const L = w.component = v.component;
    if (wg(v, w, k))
      if (L.asyncDep && !L.asyncResolved) {
        ae(L, w, k);
        return;
      } else
        L.next = w, L.update();
    else
      w.el = v.el, L.vnode = w;
  }, X = (v, w, k, L, N, F, W) => {
    const V = () => {
      if (v.isMounted) {
        let { next: re, bu: pe, u: _e, parent: Ne, vnode: Pe } = v;
        {
          const Ct = fh(v);
          if (Ct) {
            re && (re.el = Pe.el, ae(v, re, W)), Ct.asyncDep.then(() => {
              Bt(() => {
                v.isUnmounted || G();
              }, N);
            });
            return;
          }
        }
        let Re = re, Je;
        ia(v, !1), re ? (re.el = Pe.el, ae(v, re, W)) : re = Pe, pe && Ns(pe), (Je = re.props && re.props.onVnodeBeforeUpdate) && $n(Je, Ne, re, Pe), ia(v, !0);
        const it = Ou(v), mt = v.subTree;
        v.subTree = it, A(
          mt,
          it,
          // parent may have changed if it's in a teleport
          h(mt.el),
          // anchor may have changed if it's in a fragment
          Xe(mt),
          v,
          N,
          F
        ), re.el = it.el, Re === null && Cg(v, it.el), _e && Bt(_e, N), (Je = re.props && re.props.onVnodeUpdated) && Bt(
          () => $n(Je, Ne, re, Pe),
          N
        );
      } else {
        let re;
        const { el: pe, props: _e } = w, { bm: Ne, m: Pe, parent: Re, root: Je, type: it } = v, mt = Ka(w);
        ia(v, !1), Ne && Ns(Ne), !mt && (re = _e && _e.onVnodeBeforeMount) && $n(re, Re, w), ia(v, !0);
        {
          Je.ce && Je.ce._hasShadowRoot() && Je.ce._injectChildStyle(
            it,
            v.parent ? v.parent.type : void 0
          );
          const Ct = v.subTree = Ou(v);
          A(
            null,
            Ct,
            k,
            L,
            v,
            N,
            F
          ), w.el = Ct.el;
        }
        if (Pe && Bt(Pe, N), !mt && (re = _e && _e.onVnodeMounted)) {
          const Ct = w;
          Bt(
            () => $n(re, Re, Ct),
            N
          );
        }
        (w.shapeFlag & 256 || Re && Ka(Re.vnode) && Re.vnode.shapeFlag & 256) && v.a && Bt(v.a, N), v.isMounted = !0, w = k = L = null;
      }
    };
    v.scope.on();
    const J = v.effect = new pf(V);
    v.scope.off();
    const G = v.update = J.run.bind(J), me = v.job = J.runIfDirty.bind(J);
    me.i = v, me.id = v.uid, J.scheduler = () => Fc(me), ia(v, !0), G();
  }, ae = (v, w, k) => {
    w.component = v;
    const L = v.vnode.props;
    v.vnode = w, v.next = null, Eg(v, w.props, L, k), Og(v, w.children, k), vi(), bu(v), gi();
  }, ie = (v, w, k, L, N, F, W, V, J = !1) => {
    const G = v && v.children, me = v ? v.shapeFlag : 0, re = w.children, { patchFlag: pe, shapeFlag: _e } = w;
    if (pe > 0) {
      if (pe & 128) {
        he(
          G,
          re,
          k,
          L,
          N,
          F,
          W,
          V,
          J
        );
        return;
      } else if (pe & 256) {
        ue(
          G,
          re,
          k,
          L,
          N,
          F,
          W,
          V,
          J
        );
        return;
      }
    }
    _e & 8 ? (me & 16 && ut(G, N, F), re !== G && u(k, re)) : me & 16 ? _e & 16 ? he(
      G,
      re,
      k,
      L,
      N,
      F,
      W,
      V,
      J
    ) : ut(G, N, F, !0) : (me & 8 && u(k, ""), _e & 16 && fe(
      re,
      k,
      L,
      N,
      F,
      W,
      V,
      J
    ));
  }, ue = (v, w, k, L, N, F, W, V, J) => {
    v = v || Va, w = w || Va;
    const G = v.length, me = w.length, re = Math.min(G, me);
    let pe;
    for (pe = 0; pe < re; pe++) {
      const _e = w[pe] = J ? si(w[pe]) : jn(w[pe]);
      A(
        v[pe],
        _e,
        k,
        null,
        N,
        F,
        W,
        V,
        J
      );
    }
    G > me ? ut(
      v,
      N,
      F,
      !0,
      !1,
      re
    ) : fe(
      w,
      k,
      L,
      N,
      F,
      W,
      V,
      J,
      re
    );
  }, he = (v, w, k, L, N, F, W, V, J) => {
    let G = 0;
    const me = w.length;
    let re = v.length - 1, pe = me - 1;
    for (; G <= re && G <= pe; ) {
      const _e = v[G], Ne = w[G] = J ? si(w[G]) : jn(w[G]);
      if (da(_e, Ne))
        A(
          _e,
          Ne,
          k,
          null,
          N,
          F,
          W,
          V,
          J
        );
      else
        break;
      G++;
    }
    for (; G <= re && G <= pe; ) {
      const _e = v[re], Ne = w[pe] = J ? si(w[pe]) : jn(w[pe]);
      if (da(_e, Ne))
        A(
          _e,
          Ne,
          k,
          null,
          N,
          F,
          W,
          V,
          J
        );
      else
        break;
      re--, pe--;
    }
    if (G > re) {
      if (G <= pe) {
        const _e = pe + 1, Ne = _e < me ? w[_e].el : L;
        for (; G <= pe; )
          A(
            null,
            w[G] = J ? si(w[G]) : jn(w[G]),
            k,
            Ne,
            N,
            F,
            W,
            V,
            J
          ), G++;
      }
    } else if (G > pe)
      for (; G <= re; )
        be(v[G], N, F, !0), G++;
    else {
      const _e = G, Ne = G, Pe = /* @__PURE__ */ new Map();
      for (G = Ne; G <= pe; G++) {
        const ot = w[G] = J ? si(w[G]) : jn(w[G]);
        ot.key != null && Pe.set(ot.key, G);
      }
      let Re, Je = 0;
      const it = pe - Ne + 1;
      let mt = !1, Ct = 0;
      const jt = new Array(it);
      for (G = 0; G < it; G++) jt[G] = 0;
      for (G = _e; G <= re; G++) {
        const ot = v[G];
        if (Je >= it) {
          be(ot, N, F, !0);
          continue;
        }
        let Qe;
        if (ot.key != null)
          Qe = Pe.get(ot.key);
        else
          for (Re = Ne; Re <= pe; Re++)
            if (jt[Re - Ne] === 0 && da(ot, w[Re])) {
              Qe = Re;
              break;
            }
        Qe === void 0 ? be(ot, N, F, !0) : (jt[Qe - Ne] = G + 1, Qe >= Ct ? Ct = Qe : mt = !0, A(
          ot,
          w[Qe],
          k,
          null,
          N,
          F,
          W,
          V,
          J
        ), Je++);
      }
      const Wn = mt ? Rg(jt) : Va;
      for (Re = Wn.length - 1, G = it - 1; G >= 0; G--) {
        const ot = Ne + G, Qe = w[ot], Wi = w[ot + 1], wn = ot + 1 < me ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Wi.el || hh(Wi)
        ) : L;
        jt[G] === 0 ? A(
          null,
          Qe,
          k,
          wn,
          N,
          F,
          W,
          V,
          J
        ) : mt && (Re < 0 || G !== Wn[Re] ? Ce(Qe, k, wn, 2) : Re--);
      }
    }
  }, Ce = (v, w, k, L, N = null) => {
    const { el: F, type: W, transition: V, children: J, shapeFlag: G } = v;
    if (G & 6) {
      Ce(v.component.subTree, w, k, L);
      return;
    }
    if (G & 128) {
      v.suspense.move(w, k, L);
      return;
    }
    if (G & 64) {
      W.move(v, w, k, _n);
      return;
    }
    if (W === le) {
      i(F, w, k);
      for (let re = 0; re < J.length; re++)
        Ce(J[re], w, k, L);
      i(v.anchor, w, k);
      return;
    }
    if (W === xs) {
      K(v, w, k);
      return;
    }
    if (L !== 2 && G & 1 && V)
      if (L === 0)
        V.persisted && !F[vn] ? i(F, w, k) : (V.beforeEnter(F), i(F, w, k), Bt(() => V.enter(F), N));
      else {
        const { leave: re, delayLeave: pe, afterLeave: _e } = V, Ne = () => {
          v.ctx.isUnmounted ? a(F) : i(F, w, k);
        }, Pe = () => {
          const Re = F._isLeaving || !!F[vn];
          F._isLeaving && F[vn](
            !0
            /* cancelled */
          ), V.persisted && !Re ? Ne() : re(F, () => {
            Ne(), _e && _e();
          });
        };
        pe ? pe(F, Ne, Pe) : Pe();
      }
    else
      i(F, w, k);
  }, be = (v, w, k, L = !1, N = !1) => {
    const {
      type: F,
      props: W,
      ref: V,
      children: J,
      dynamicChildren: G,
      shapeFlag: me,
      patchFlag: re,
      dirs: pe,
      cacheIndex: _e,
      memo: Ne
    } = v;
    if (re === -2 && (N = !1), V != null && (vi(), Lr(V, null, k, v, !0), gi()), _e != null && (w.renderCache[_e] = void 0), me & 256) {
      w.ctx.deactivate(v);
      return;
    }
    const Pe = me & 1 && pe, Re = !Ka(v);
    let Je;
    if (Re && (Je = W && W.onVnodeBeforeUnmount) && $n(Je, w, v), me & 6)
      rt(v.component, k, L);
    else {
      if (me & 128) {
        v.suspense.unmount(k, L);
        return;
      }
      Pe && na(v, null, w, "beforeUnmount"), me & 64 ? v.type.remove(
        v,
        w,
        k,
        _n,
        L
      ) : G && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !G.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== le || re > 0 && re & 64) ? ut(
        G,
        w,
        k,
        !1,
        !0
      ) : (F === le && re & 384 || !N && me & 16) && ut(J, w, k), L && Ve(v);
    }
    const it = Ne != null && _e == null;
    (Re && (Je = W && W.onVnodeUnmounted) || Pe || it) && Bt(() => {
      Je && $n(Je, w, v), Pe && na(v, null, w, "unmounted"), it && (v.el = null);
    }, k);
  }, Ve = (v) => {
    const { type: w, el: k, anchor: L, transition: N } = v;
    if (w === le) {
      Ee(k, L);
      return;
    }
    if (w === xs) {
      $(v);
      return;
    }
    const F = () => {
      a(k), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (v.shapeFlag & 1 && N && !N.persisted) {
      const { leave: W, delayLeave: V } = N, J = () => W(k, F);
      V ? V(v.el, F, J) : J();
    } else
      F();
  }, Ee = (v, w) => {
    let k;
    for (; v !== w; )
      k = _(v), a(v), v = k;
    a(w);
  }, rt = (v, w, k) => {
    const { bum: L, scope: N, job: F, subTree: W, um: V, m: J, a: G } = v;
    Lu(J), Lu(G), L && Ns(L), N.stop(), F && (F.flags |= 8, be(W, v, w, k)), V && Bt(V, w), Bt(() => {
      v.isUnmounted = !0;
    }, w);
  }, ut = (v, w, k, L = !1, N = !1, F = 0) => {
    for (let W = F; W < v.length; W++)
      be(v[W], w, k, L, N);
  }, Xe = (v) => {
    if (v.shapeFlag & 6)
      return Xe(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const w = _(v.anchor || v.el), k = w && w[$f];
    return k ? _(k) : w;
  };
  let zt = !1;
  const at = (v, w, k) => {
    let L;
    v == null ? w._vnode && (be(w._vnode, null, null, !0), L = w._vnode.component) : A(
      w._vnode || null,
      v,
      w,
      null,
      null,
      null,
      k
    ), w._vnode = v, zt || (zt = !0, bu(L), Pf(), zt = !1);
  }, _n = {
    p: A,
    um: be,
    m: Ce,
    r: Ve,
    mt: D,
    mc: fe,
    pc: ie,
    pbc: z,
    n: Xe,
    o: e
  };
  return {
    render: at,
    hydrate: void 0,
    createApp: gg(at)
  };
}
function yl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ia({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Lg(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Vc(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (ye(i) && ye(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = si(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && Vc(s, o)), o.type === ds && (o.patchFlag === -1 && (o = a[r] = si(o)), o.el = s.el), o.type === At && !o.el && (o.el = s.el);
    }
}
function Rg(e) {
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
function fh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fh(t);
}
function Lu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function hh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? hh(t.subTree) : null;
}
const ph = (e) => e.__isSuspense;
function Ig(e, t) {
  t && t.pendingBranch ? ye(e) ? t.effects.push(...e) : t.effects.push(e) : If(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), ds = /* @__PURE__ */ Symbol.for("v-txt"), At = /* @__PURE__ */ Symbol.for("v-cmt"), xs = /* @__PURE__ */ Symbol.for("v-stc"), hi = [];
let sn = null;
function b(e = !1) {
  hi.push(sn = e ? null : []);
}
function Gc() {
  hi.pop(), sn = hi[hi.length - 1] || null;
}
let Yr = 1;
function Hs(e, t = !1) {
  Yr += e, e < 0 && sn && t && (sn.hasOnce = !0);
}
function vh(e) {
  return e.dynamicChildren = Yr > 0 ? sn || Va : null, Gc(), Yr > 0 && sn && sn.push(e), e;
}
function C(e, t, n, i, a, r) {
  return vh(
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
  return vh(
    ve(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Xr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function da(e, t) {
  return e.type === t.type && e.key === t.key;
}
const gh = ({ key: e }) => e ?? null, Ls = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? nt(e) || /* @__PURE__ */ $t(e) || xe(e) ? { i: kt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === le ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gh(t),
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
    ctx: kt
  };
  return o ? (js(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= nt(n) ? 8 : 16), Yr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  sn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && sn.push(l), l;
}
const ve = Pg;
function Pg(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === qf) && (e = At), Xr(e)) {
    const o = Hi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && js(o, n), Yr > 0 && !r && sn && (o.shapeFlag & 6 ? sn[sn.indexOf(e)] = o : sn.push(o)), o.patchFlag = -2, o;
  }
  if (Hg(e) && (e = e.__vccOpts), t) {
    t = Zr(t);
    let { class: o, style: l } = t;
    o && !nt(o) && (t.class = we(o)), We(l) && (/* @__PURE__ */ $c(l) && !ye(l) && (l = ht({}, l)), t.style = on(l));
  }
  const s = nt(e) ? 1 : ph(e) ? 128 : Wo(e) ? 64 : We(e) ? 4 : xe(e) ? 2 : 0;
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
function Zr(e) {
  return e ? /* @__PURE__ */ $c(e) || sh(e) ? ht({}, e) : e : null;
}
function Hi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? Ft(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && gh(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? ye(r) ? r.concat(Ls(t)) : [r, Ls(t)] : Ls(t)
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
    ssContent: e.ssContent && Hi(e.ssContent),
    ssFallback: e.ssFallback && Hi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && qr(
    u,
    l.clone(u)
  ), u;
}
function Ae(e = " ", t = 0) {
  return ve(ds, null, e, t);
}
function H(e = "", t = !1) {
  return t ? (b(), $e(At, null, e)) : ve(At, null, e);
}
function jn(e) {
  return e == null || typeof e == "boolean" ? ve(At) : ye(e) ? ve(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Xr(e) ? si(e) : ve(ds, null, String(e));
}
function si(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hi(e);
}
function js(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (ye(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), js(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !sh(t) ? t._ctx = kt : a === 3 && kt && (kt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (xe(t)) {
    if (i & 65) {
      js(e, { default: t });
      return;
    }
    t = { default: t, _ctx: kt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Ae(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ft(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = we([t.class, i.class]));
      else if (a === "style")
        t.style = on([t.style, i.style]);
      else if (Mo(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(ye(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !$o(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function $n(e, t, n, i = null) {
  yn(e, t, 7, [
    n,
    i
  ]);
}
const Dg = Qf();
let Mg = 0;
function $g(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Dg, r = {
    uid: Mg++,
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
    scope: new rv(
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
    propsOptions: lh(i, a),
    emitsOptions: nh(i, a),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = mg.bind(null, r), e.ce && e.ce(r), r;
}
let Dt = null;
const Ca = () => Dt || kt;
let Vs, Jr;
{
  const e = Bo(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  Vs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Dt = n
  ), Jr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Qr = n
  );
}
const fs = (e) => {
  const t = Dt;
  return Vs(e), e.scope.on(), () => {
    e.scope.off(), Vs(t);
  };
}, Ru = () => {
  Dt && Dt.scope.off(), Vs(null);
};
function mh(e) {
  return e.vnode.shapeFlag & 4;
}
let Qr = !1;
function Fg(e, t = !1, n = !1) {
  t && Jr(t);
  const { props: i, children: a } = e.vnode, r = mh(e);
  Sg(e, i, r, t), kg(e, a, n || t);
  const s = r ? zg(e, t) : void 0;
  return t && Jr(!1), s;
}
function zg(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, sg);
  const { setup: i } = n;
  if (i) {
    vi();
    const a = e.setupContext = i.length > 1 ? yh(e) : null, r = fs(e), s = cs(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = of(s);
    if (gi(), r(), (o || e.sp) && !Ka(e) && Vf(e), o) {
      if (s.then(Ru, Ru), t)
        return s.then((l) => {
          Jr(!0);
          try {
            Iu(e, l, t);
          } finally {
            Jr(!1);
          }
        }).catch((l) => {
          Vo(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Iu(e, s);
  } else
    bh(e);
}
function Iu(e, t, n) {
  xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : We(t) && (e.setupState = xf(t)), bh(e);
}
function bh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || mn);
  {
    const a = fs(e);
    vi();
    try {
      ug(e);
    } finally {
      gi(), a();
    }
  }
}
const Ug = {
  get(e, t) {
    return It(e, "get", ""), e[t];
  }
};
function yh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ug),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Zo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(xf(Tv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Rr)
        return Rr[n](e);
    },
    has(t, n) {
      return n in t || n in Rr;
    }
  })) : e.proxy;
}
function Bg(e, t = !0) {
  return xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Hg(e) {
  return xe(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ Lv(e, t, Qr);
function Kt(e, t, n) {
  try {
    Hs(-1);
    const i = arguments.length;
    return i === 2 ? We(t) && !ye(t) ? Xr(t) ? ve(e, null, [t]) : ve(e, t) : ve(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Xr(n) && (n = [n]), ve(e, t, n));
  } finally {
    Hs(1);
  }
}
const jg = "3.5.42", Vg = mn;
let oc;
const Pu = typeof window < "u" && window.trustedTypes;
if (Pu)
  try {
    oc = /* @__PURE__ */ Pu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _h = oc ? (e) => oc.createHTML(e) : (e) => e, Gg = "http://www.w3.org/2000/svg", Kg = "http://www.w3.org/1998/Math/MathML", ri = typeof document < "u" ? document : null, Du = ri && /* @__PURE__ */ ri.createElement("template"), Wg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ri.createElementNS(Gg, e) : t === "mathml" ? ri.createElementNS(Kg, e) : n ? ri.createElement(e, { is: n }) : ri.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ri.createTextNode(e),
  createComment: (e) => ri.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ri.querySelector(e),
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
      Du.innerHTML = _h(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = Du.content;
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
}, Oi = "transition", pr = "animation", es = /* @__PURE__ */ Symbol("_vtc"), wh = {
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
}, qg = /* @__PURE__ */ ht(
  {},
  zf,
  wh
), Yg = (e) => (e.displayName = "Transition", e.props = qg, e), Xg = /* @__PURE__ */ Yg(
  (e, { slots: t }) => Kt(Yv, Zg(e), t)
), aa = (e, t = []) => {
  ye(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Mu = (e) => e ? ye(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Zg(e) {
  const t = {};
  for (const ee in e)
    ee in wh || (t[ee] = e[ee]);
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
  } = e, O = Jg(a), A = O && O[0], x = O && O[1], {
    onBeforeEnter: P,
    onEnter: I,
    onEnterCancelled: K,
    onLeave: $,
    onLeaveCancelled: oe,
    onBeforeAppear: ce = P,
    onAppear: te = I,
    onAppearCancelled: fe = K
  } = t, B = (ee, ne, D, M) => {
    ee._enterCancelled = M, ra(ee, ne ? u : o), ra(ee, ne ? d : s), D && D();
  }, z = (ee, ne) => {
    ee._isLeaving = !1, ra(ee, h), ra(ee, T), ra(ee, _), ne && ne();
  }, ge = (ee) => (ne, D) => {
    const M = ee ? te : I, X = () => B(ne, ee, D);
    aa(M, [ne, X]), $u(() => {
      ra(ne, ee ? l : r), ti(ne, ee ? u : o), Mu(M) || Fu(ne, i, A, X);
    });
  };
  return ht(t, {
    onBeforeEnter(ee) {
      aa(P, [ee]), ti(ee, r), ti(ee, s);
    },
    onBeforeAppear(ee) {
      aa(ce, [ee]), ti(ee, l), ti(ee, d);
    },
    onEnter: ge(!1),
    onAppear: ge(!0),
    onLeave(ee, ne) {
      ee._isLeaving = !0;
      const D = () => z(ee, ne);
      ti(ee, h), ee._enterCancelled ? (ti(ee, _), Bu(ee)) : (Bu(ee), ti(ee, _)), $u(() => {
        ee._isLeaving && (ra(ee, h), ti(ee, T), Mu($) || Fu(ee, i, x, D));
      }), aa($, [ee, D]);
    },
    onEnterCancelled(ee) {
      B(ee, !1, void 0, !0), aa(K, [ee]);
    },
    onAppearCancelled(ee) {
      B(ee, !0, void 0, !0), aa(fe, [ee]);
    },
    onLeaveCancelled(ee) {
      z(ee), aa(oe, [ee]);
    }
  });
}
function Jg(e) {
  if (e == null)
    return null;
  if (We(e))
    return [_l(e.enter), _l(e.leave)];
  {
    const t = _l(e);
    return [t, t];
  }
}
function _l(e) {
  return Yp(e);
}
function ti(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[es] || (e[es] = /* @__PURE__ */ new Set())).add(t);
}
function ra(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[es];
  n && (n.delete(t), n.size || (e[es] = void 0));
}
function $u(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Qg = 0;
function Fu(e, t, n, i) {
  const a = e._endId = ++Qg, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = em(e, t);
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
function em(e, t) {
  const n = window.getComputedStyle(e), i = (O) => (n[O] || "").split(", "), a = i(`${Oi}Delay`), r = i(`${Oi}Duration`), s = zu(a, r), o = i(`${pr}Delay`), l = i(`${pr}Duration`), d = zu(o, l);
  let u = null, h = 0, _ = 0;
  t === Oi ? s > 0 && (u = Oi, h = s, _ = r.length) : t === pr ? d > 0 && (u = pr, h = d, _ = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? Oi : pr : null, _ = u ? u === Oi ? r.length : l.length : 0);
  const T = u === Oi && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Oi}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: _,
    hasTransform: T
  };
}
function zu(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Uu(n) + Uu(e[i])));
}
function Uu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Bu(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function tm(e, t, n) {
  const i = e[es];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Gs = /* @__PURE__ */ Symbol("_vod"), Ch = /* @__PURE__ */ Symbol("_vsh"), qa = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Gs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : vr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), vr(e, !0), i.enter(e)) : i.leave(e, () => {
      vr(e, !1);
    }) : vr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    vr(e, t);
  }
};
function vr(e, t) {
  e.style.display = t ? e[Gs] : "none", e[Ch] = !t;
}
const Sh = /* @__PURE__ */ Symbol("");
function nm(e) {
  const t = Ca();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Ks(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Ks(t.ce, a) : lc(t.subTree, a), n(a);
  };
  Wf(() => {
    If(i);
  }), Vi(() => {
    Yt(i, mn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), us(() => a.disconnect());
  });
}
function lc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      lc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ks(e.el, t);
  else if (e.type === le)
    e.children.forEach((n) => lc(n, t));
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
      const r = av(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Sh] = i;
  }
}
const im = /(?:^|;)\s*display\s*:/;
function am(e, t, n) {
  const i = e.style, a = nt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (nt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && Er(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && Er(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? sm(
        e,
        s,
        !nt(t) && t ? t[s] : void 0,
        o
      ) || Er(i, s, o) : Er(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[Sh];
      s && (n += ";" + s), i.cssText = n, r = im.test(n);
    }
  } else t && e.removeAttribute("style");
  Gs in e && (e[Gs] = r ? i.display : "", e[Ch] && (i.display = "none"));
}
const ys = /\s*!important$/;
function Er(e, t, n) {
  if (ye(n))
    n.forEach((i) => Er(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    ys.test(n) ? e.setProperty(t, n.replace(ys, ""), "important") : e.setProperty(t, n);
  else {
    const i = rm(e, t);
    ys.test(n) ? e.setProperty(
      yi(i),
      n.replace(ys, ""),
      "important"
    ) : e[i] = n;
  }
}
const Hu = ["Webkit", "Moz", "ms"], wl = {};
function rm(e, t) {
  const n = wl[t];
  if (n)
    return n;
  let i = Mt(t);
  if (i !== "filter" && i in e)
    return wl[t] = i;
  i = zo(i);
  for (let a = 0; a < Hu.length; a++) {
    const r = Hu[a] + i;
    if (r in e)
      return wl[t] = r;
  }
  return t;
}
function sm(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && nt(i) && n === i;
}
const ju = "http://www.w3.org/1999/xlink";
function Vu(e, t, n, i, a, r = tv(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ju, t.slice(6, t.length)) : e.setAttributeNS(ju, t, n) : n == null || r && !df(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Rn(n) ? String(n) : n
  );
}
function Gu(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? _h(n) : n);
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
    o === "boolean" ? n = df(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
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
function om(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Ku = /* @__PURE__ */ Symbol("_vei");
function lm(e, t, n, i, a = null) {
  const r = e[Ku] || (e[Ku] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = dm(t);
    if (i) {
      const d = r[t] = pm(
        i,
        a
      );
      fa(e, o, d, l);
    } else s && (om(e, o, s, l), r[t] = void 0);
  }
}
const cm = /(Once|Passive|Capture)$/, um = /^on:?(?:Once|Passive|Capture)$/;
function dm(e) {
  let t, n;
  for (; (n = e.match(cm)) && !um.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : yi(e.slice(2)), t];
}
let Cl = 0;
const fm = /* @__PURE__ */ Promise.resolve(), hm = () => Cl || (fm.then(() => Cl = 0), Cl = Date.now());
function pm(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (ye(a)) {
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
  return n.value = e, n.attached = hm(), n;
}
const Wu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vm = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? tm(e, i, s) : t === "style" ? am(e, n, i) : Mo(t) ? $o(t) || lm(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gm(e, t, i, s)) ? (Gu(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Vu(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (mm(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !nt(i))) ? Gu(e, Mt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Vu(e, t, i, s));
};
function gm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wu(t) && xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Wu(t) && nt(n) ? !1 : t in e;
}
function mm(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Mt(t);
  return Array.isArray(n) ? n.some((a) => Mt(a) === i) : Object.keys(n).some((a) => Mt(a) === i);
}
const Ws = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ye(t) ? (n) => Ns(t, n) : t;
};
function bm(e) {
  e.target.composing = !0;
}
function qu(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const pa = /* @__PURE__ */ Symbol("_assign"), _s = /* @__PURE__ */ Symbol("_initialValue");
function Sl(e, t, n) {
  return t && (e = e.trim()), n && (e = Uo(e)), e;
}
const Ri = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[_s] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[_s] = e.defaultValue.replace(/\r\n?/g, `
`))), e[pa] = Ws(a);
    const r = i || a.props && a.props.type === "number";
    fa(e, t ? "change" : "input", (s) => {
      s.target.composing || e[pa](Sl(e.value, n, r));
    }), (n || r) && fa(e, "change", () => {
      e.value = Sl(e.value, n, r);
    }), t || (fa(e, "compositionstart", bm), fa(e, "compositionend", qu), fa(e, "change", qu));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[_s];
    delete e[_s], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[pa](Sl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[pa] = Ws(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? Uo(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, tn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, fa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Uo(qs(l)) : qs(l)
      ), r = e.multiple, s = r ? _a(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? ye(s) ? a.slice() : a : s
      ];
      try {
        e[pa](s);
      } finally {
        fi(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[pa] = Ws(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Yu(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[pa] = Ws(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !ym(t, n[1], n[0])) && Yu(e, t);
  }
};
function ym(e, t, n) {
  if (!n || ye(e)) return Bi(e, t);
  if (_a(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Yu(e, t) {
  const n = e.multiple, i = ye(t);
  if (!(n && !i && !_a(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = qs(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = iv(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (Bi(qs(s), t)) {
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
const _m = ["ctrl", "shift", "alt", "meta"], wm = {
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
  exact: (e, t) => _m.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ze = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = wm[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Cm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, qt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = yi(a.key);
    if (t.some(
      (s) => s === r || Cm[s] === r
    ))
      return e(a);
  }));
}, Sm = /* @__PURE__ */ ht({ patchProp: vm }, Wg);
let Xu;
function Em() {
  return Xu || (Xu = Ng(Sm));
}
const Tm = ((...e) => {
  const t = Em().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = km(i);
    if (!a) return;
    const r = t._component;
    !xe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, Am(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function Am(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function km(e) {
  return nt(e) ? document.querySelector(e) : e;
}
function Kc(e, t, n) {
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
function Zu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Om(e) {
  if (Array.isArray(e)) return e;
}
function Nm(e, t) {
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
function xm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lm(e, t) {
  return Om(e) || Nm(e, t) || Rm(e, t) || xm();
}
function Rm(e, t) {
  if (e) {
    if (typeof e == "string") return Zu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Zu(e, t) : void 0;
  }
}
const Eh = Object.entries, Ju = Object.setPrototypeOf, Im = Object.isFrozen, Pm = Object.getPrototypeOf, Dm = Object.getOwnPropertyDescriptor;
let gt = Object.freeze, wt = Object.seal, Ha = Object.create, Th = typeof Reflect < "u" && Reflect, cc = Th.apply, uc = Th.construct;
gt || (gt = function(t) {
  return t;
});
wt || (wt = function(t) {
  return t;
});
cc || (cc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
uc || (uc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ca = pt(Array.prototype.forEach), Mm = pt(Array.prototype.lastIndexOf), Qu = pt(Array.prototype.pop), gr = pt(Array.prototype.push), $m = pt(Array.prototype.splice), Ya = Array.isArray, Tr = pt(String.prototype.toLowerCase), El = pt(String.prototype.toString), ed = pt(String.prototype.match), mr = pt(String.prototype.replace), td = pt(String.prototype.indexOf), Fm = pt(String.prototype.trim), zm = pt(Number.prototype.toString), Um = pt(Boolean.prototype.toString), nd = typeof BigInt > "u" ? null : pt(BigInt.prototype.toString), id = typeof Symbol > "u" ? null : pt(Symbol.prototype.toString), Wt = pt(Object.prototype.hasOwnProperty), br = pt(Object.prototype.toString), xt = pt(RegExp.prototype.test), sa = Bm(TypeError);
function pt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return cc(e, t, i);
  };
}
function Bm(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return uc(e, n);
  };
}
function Ue(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Tr;
  if (Ju && Ju(e, null), !Ya(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Im(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function Hm(e) {
  for (let t = 0; t < e.length; t++)
    Wt(e, t) || (e[t] = null);
  return e;
}
function an(e) {
  const t = Ha(null);
  for (const i of Eh(e)) {
    var n = Lm(i, 2);
    const a = n[0], r = n[1];
    Wt(e, a) && (Ya(r) ? t[a] = Hm(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = an(r) : t[a] = r);
  }
  return t;
}
function jm(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return zm(e);
    case "boolean":
      return Um(e);
    case "bigint":
      return nd ? nd(e) : "0";
    case "symbol":
      return id ? id(e) : "Symbol()";
    case "undefined":
      return br(e);
    case "function":
    case "object": {
      if (e === null)
        return br(e);
      const t = e, n = On(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : br(i);
      }
      return br(e);
    }
    default:
      return br(e);
  }
}
function On(e, t) {
  for (; e !== null; ) {
    const i = Dm(e, t);
    if (i) {
      if (i.get)
        return pt(i.get);
      if (typeof i.value == "function")
        return pt(i.value);
    }
    e = Pm(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Vm(e) {
  try {
    return xt(e, ""), !0;
  } catch {
    return !1;
  }
}
const ad = gt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Tl = gt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Al = gt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Gm = gt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), kl = gt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Km = gt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), rd = gt(["#text"]), sd = gt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Ol = gt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), od = gt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ws = gt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Wm = wt(/{{[\w\W]*|^[\w\W]*}}/g), qm = wt(/<%[\w\W]*|^[\w\W]*%>/g), Ym = wt(/\${[\w\W]*/g), Xm = wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Zm = wt(/^aria-[\-\w]+$/), ld = wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Jm = wt(/^(?:\w+script|data):/i), Qm = wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), eb = wt(/^html$/i), tb = wt(/^[a-z][.\w]*(-[.\w]+)+$/i), cd = wt(/<[/\w!]/g), ud = wt(/<[/\w]/g), nb = wt(/<\/no(script|embed|frames)/i), ib = wt(/\/>/i), nn = {
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
}, Ah = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], ab = gt(Ue({}, Ah)), rb = (function() {
  const e = {};
  return ca(Ah, (t) => {
    e[t] = wt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), gt(e);
})(), sb = function() {
  return typeof window > "u" ? null : window;
}, ob = function(t, n) {
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
}, dd = function() {
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
}, Ni = function(t, n, i, a) {
  return Wt(t, n) && Ya(t[n]) ? Ue(a.base ? an(a.base) : {}, t[n], a.transform) : i;
}, Nl = function(t, n, i) {
  const a = Wt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? an(a) : i();
};
function kh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sb();
  const t = (Z) => kh(Z);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== nn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, _ = o.prototype, T = On(_, "cloneNode"), O = On(_, "remove"), A = On(_, "nextSibling"), x = On(_, "childNodes"), P = On(_, "parentNode"), I = On(_, "shadowRoot"), K = On(_, "attributes"), $ = s && s.prototype ? On(s.prototype, "nodeType") : null, oe = s && s.prototype ? On(s.prototype, "nodeName") : null, ce = s && s.prototype ? On(s.prototype, "ownerDocument") : null, te = function(y) {
    return $ ? $(y) : y.nodeType;
  }, fe = function(y) {
    return oe ? oe(y) : y.nodeName;
  };
  if (typeof r == "function") {
    const Z = n.createElement("template");
    Z.content && Z.content.ownerDocument && (n = Z.content.ownerDocument);
  }
  let B, z = "", ge, ee = !1, ne = 0;
  const D = function() {
    if (ne > 0)
      throw sa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, M = function(y) {
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
  }, ae = function() {
    return ee || (ge = ob(h, a), ee = !0), ge;
  }, ie = n, ue = ie.implementation, he = ie.createNodeIterator, Ce = ie.createDocumentFragment, be = ie.getElementsByTagName, Ve = i.importNode;
  let Ee = dd();
  t.isSupported = typeof Eh == "function" && typeof P == "function" && ue && ue.createHTMLDocument !== void 0;
  const rt = Wm, ut = qm, Xe = Ym, zt = Xm, at = Zm, _n = Jm, U = Qm, v = tb;
  let w = ld, k = null;
  const L = Ue({}, [...ad, ...Tl, ...Al, ...kl, ...rd]);
  let N = null;
  const F = Ue({}, [...sd, ...Ol, ...od, ...ws]);
  let W = Object.seal(Ha(null, {
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
  })), V = null, J = null;
  const G = Object.seal(Ha(null, {
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
  let me = !0, re = !0, pe = !1, _e = !0, Ne = !1, Pe = !0, Re = !1, Je = !1, it = null, mt = null, Ct = !1, jt = !1, Wn = !1, ot = !1, Qe = !0, Wi = !1;
  const wn = "user-content-";
  let er = !0, wi = !1, Ci = {}, Pn = null;
  const qi = Ue({}, [
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
  let tr = null;
  const nr = Ue({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ea = null;
  const Vt = Ue({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qn = "http://www.w3.org/1998/Math/MathML", Yi = "http://www.w3.org/2000/svg", ln = "http://www.w3.org/1999/xhtml";
  let Si = ln, ir = !1, Se = null;
  const Yn = Ue({}, [qn, Yi, ln], El), bt = gt(["mi", "mo", "mn", "ms", "mtext"]);
  let Cn = Ue({}, bt);
  const Gt = gt(["annotation-xml"]);
  let dt = Ue({}, Gt);
  const ps = Ue({}, ["title", "style", "font", "a", "script"]);
  let Xt = null;
  const Xn = ["application/xhtml+xml", "text/html"], ar = "text/html";
  let He = null, Sn = null;
  const rr = n.createElement("form"), Ei = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Xi = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Sn && Sn === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = an(y), Xt = // eslint-disable-next-line unicorn/prefer-includes
    Xn.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? ar : y.PARSER_MEDIA_TYPE, He = Xt === "application/xhtml+xml" ? El : Tr, k = Ni(y, "ALLOWED_TAGS", L, {
      transform: He
    }), N = Ni(y, "ALLOWED_ATTR", F, {
      transform: He
    }), Se = Ni(y, "ALLOWED_NAMESPACES", Yn, {
      transform: El
    }), Ea = Ni(y, "ADD_URI_SAFE_ATTR", Vt, {
      transform: He,
      base: Vt
    }), tr = Ni(y, "ADD_DATA_URI_TAGS", nr, {
      transform: He,
      base: nr
    }), Pn = Ni(y, "FORBID_CONTENTS", qi, {
      transform: He
    }), V = Ni(y, "FORBID_TAGS", an({}), {
      transform: He
    }), J = Ni(y, "FORBID_ATTR", an({}), {
      transform: He
    }), Ci = Wt(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? an(y.USE_PROFILES) : y.USE_PROFILES : !1, me = y.ALLOW_ARIA_ATTR !== !1, re = y.ALLOW_DATA_ATTR !== !1, pe = y.ALLOW_UNKNOWN_PROTOCOLS || !1, _e = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ne = y.SAFE_FOR_TEMPLATES || !1, Pe = y.SAFE_FOR_XML !== !1, Re = y.WHOLE_DOCUMENT || !1, jt = y.RETURN_DOM || !1, Wn = y.RETURN_DOM_FRAGMENT || !1, ot = y.RETURN_TRUSTED_TYPE || !1, Ct = y.FORCE_BODY || !1, Qe = y.SANITIZE_DOM !== !1, Wi = y.SANITIZE_NAMED_PROPS || !1, er = y.KEEP_CONTENT !== !1, wi = y.IN_PLACE || !1, w = Vm(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : ld, Si = typeof y.NAMESPACE == "string" ? y.NAMESPACE : ln, Cn = Nl(
      y,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ue({}, bt)
      // Default built-in map
    ), dt = Nl(
      y,
      "HTML_INTEGRATION_POINTS",
      () => Ue({}, Gt)
      // Default built-in map
    );
    const R = Nl(y, "CUSTOM_ELEMENT_HANDLING", () => Ha(null));
    if (W = Ha(null), Wt(R, "tagNameCheck") && Ei(R.tagNameCheck) && (W.tagNameCheck = R.tagNameCheck), Wt(R, "attributeNameCheck") && Ei(R.attributeNameCheck) && (W.attributeNameCheck = R.attributeNameCheck), Wt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), wt(W), Ne && (re = !1), Wn && (jt = !0), Ci && (k = Ue({}, rd), N = Ha(null), Ci.html === !0 && (Ue(k, ad), Ue(N, sd)), Ci.svg === !0 && (Ue(k, Tl), Ue(N, Ol), Ue(N, ws)), Ci.svgFilters === !0 && (Ue(k, Al), Ue(N, Ol), Ue(N, ws)), Ci.mathMl === !0 && (Ue(k, kl), Ue(N, od), Ue(N, ws))), G.tagCheck = null, G.attributeCheck = null, Wt(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? G.tagCheck = y.ADD_TAGS : Ya(y.ADD_TAGS) && (k === L && (k = an(k)), Ue(k, y.ADD_TAGS, He))), Wt(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? G.attributeCheck = y.ADD_ATTR : Ya(y.ADD_ATTR) && (N === F && (N = an(N)), Ue(N, y.ADD_ATTR, He))), Wt(y, "ADD_FORBID_CONTENTS") && Ya(y.ADD_FORBID_CONTENTS) && (Pn === qi && (Pn = an(Pn)), Ue(Pn, y.ADD_FORBID_CONTENTS, He)), er && (k["#text"] = !0), Re && Ue(k, ["html", "head", "body"]), k.table && (Ue(k, ["tbody"]), delete V.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw sa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw sa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = B;
      B = y.TRUSTED_TYPES_POLICY;
      try {
        z = M("");
      } catch (se) {
        throw B = q, se;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (B = void 0, z = "") : (B === void 0 && (B = ae()), B && typeof z == "string" && (z = M("")));
    gt && gt(y), Sn = y;
  }, En = Ue({}, [...Tl, ...Al, ...Gm]), Ti = Ue({}, [...kl, ...Km]), Ta = function(y, R, q) {
    return R.namespaceURI === ln ? y === "svg" : R.namespaceURI === qn ? y === "svg" && (q === "annotation-xml" || Cn[q]) : !!En[y];
  }, Aa = function(y, R, q) {
    return R.namespaceURI === ln ? y === "math" : R.namespaceURI === Yi ? y === "math" && dt[q] : !!Ti[y];
  }, rl = function(y, R, q) {
    return R.namespaceURI === Yi && !dt[q] || R.namespaceURI === qn && !Cn[q] ? !1 : !Ti[y] && (ps[y] || !En[y]);
  }, sl = function(y) {
    let R = P(y);
    (!R || !R.tagName) && (R = {
      namespaceURI: Si,
      tagName: "template"
    });
    const q = Tr(y.tagName), se = Tr(R.tagName);
    return Se[y.namespaceURI] ? y.namespaceURI === Yi ? Ta(q, R, se) : y.namespaceURI === qn ? Aa(q, R, se) : y.namespaceURI === ln ? rl(q, R, se) : !!(Xt === "application/xhtml+xml" && Se[y.namespaceURI]) : !1;
  }, Zt = function(y) {
    gr(t.removed, {
      element: y
    });
    try {
      P(y).removeChild(y);
    } catch {
      if (O(y), !P(y))
        throw sa("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, sr = function(y, R, q) {
    try {
      y.removeAttributeNode(R);
    } catch {
      try {
        y.removeAttribute(q);
      } catch {
      }
    }
  }, Zi = function(y) {
    ka(y);
    const R = x(y);
    if (R) {
      const se = [];
      ca(R, (de) => {
        gr(se, de);
      }), ca(se, (de) => {
        try {
          O(de);
        } catch {
        }
      });
    }
    const q = K(y);
    if (q)
      for (let se = q.length - 1; se >= 0; --se) {
        const de = q[se], Te = de && de.name;
        typeof Te == "string" && sr(y, de, Te);
      }
  }, Zn = function(y, R, q) {
    if (!q)
      try {
        q = R.getAttributeNode(y);
      } catch {
        q = null;
      }
    gr(t.removed, {
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
      if (jt || Wn)
        try {
          Zt(R);
        } catch {
        }
      else
        try {
          R.setAttribute(y, "");
        } catch {
        }
  }, ol = function(y) {
    const R = K(y);
    if (R)
      for (let q = R.length - 1; q >= 0; --q) {
        const se = R[q], de = se && se.name;
        typeof de != "string" || N[He(de)] || sr(y, se, de);
      }
  }, ka = function(y) {
    const R = [y];
    for (; R.length > 0; ) {
      const q = R.pop();
      te(q) === nn.element && ol(q);
      const de = x(q);
      if (de)
        for (let Te = de.length - 1; Te >= 0; --Te)
          R.push(de[Te]);
    }
  }, Tn = function(y, R) {
    return Pe ? y === "patchsrc" ? !0 : y === "for" && R !== "label" && R !== "output" : !1;
  }, ll = function(y) {
    if (!Pe)
      return;
    const R = [y];
    for (; R.length > 0; ) {
      const q = R.pop(), se = te(q);
      if (se === nn.processingInstruction || se === nn.comment && xt(ud, q.data)) {
        try {
          O(q);
        } catch {
        }
        continue;
      }
      if (se === nn.element) {
        const Te = q, Ye = He(fe(q));
        try {
          Te.hasAttribute && Te.hasAttribute("patchsrc") && Te.removeAttribute("patchsrc"), Te.hasAttribute && Te.hasAttribute("for") && Tn("for", Ye) && Te.removeAttribute("for");
        } catch {
        }
      }
      const de = x(q);
      if (de)
        for (let Te = de.length - 1; Te >= 0; --Te)
          R.push(de[Te]);
    }
  }, Oa = function(y) {
    let R = null, q = null;
    if (Ct)
      y = "<remove></remove>" + y;
    else {
      const Te = ed(y, /^[\r\n\t ]+/);
      q = Te && Te[0];
    }
    Xt === "application/xhtml+xml" && Si === ln && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const se = B ? M(y) : y;
    if (Si === ln)
      try {
        R = new u().parseFromString(se, Xt);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = ue.createDocument(Si, "template", null);
      try {
        R.documentElement.innerHTML = ir ? z : se;
      } catch {
      }
    }
    const de = R.body || R.documentElement;
    return y && q && de.insertBefore(n.createTextNode(q), de.childNodes[0] || null), Si === ln ? be.call(R, Re ? "html" : "body")[0] : Re ? R.documentElement : de;
  }, Ji = function(y) {
    const R = ce ? ce(y) : y.ownerDocument;
    return he.call(
      R || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, cn = function(y) {
    return y = mr(y, rt, " "), y = mr(y, ut, " "), y = mr(y, Xe, " "), y;
  }, An = function(y) {
    var R;
    y.normalize();
    const q = ce ? ce(y) : y.ownerDocument, se = he.call(
      q || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let de = se.nextNode();
    for (; de; )
      de.data = cn(de.data), de = se.nextNode();
    const Te = (R = y.querySelectorAll) === null || R === void 0 ? void 0 : R.call(y, "template");
    Te && ca(Te, (Ye) => {
      Jn(Ye.content) && An(Ye.content);
    });
  }, Qi = function(y) {
    const R = oe ? oe(y) : null;
    return typeof R != "string" || He(R) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
    y.childNodes !== x(y);
  }, Jn = function(y) {
    if (!$ || typeof y != "object" || y === null)
      return !1;
    try {
      return $(y) === nn.documentFragment;
    } catch {
      return !1;
    }
  }, kn = function(y) {
    if (!$ || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof $(y) == "number";
    } catch {
      return !1;
    }
  };
  function lt(Z, y, R) {
    Z.length !== 0 && ca(Z, (q) => {
      q.call(t, y, R, Sn);
    });
  }
  const Na = function(y, R) {
    return !!(Pe && y.hasChildNodes() && !kn(y.firstElementChild) && xt(cd, y.textContent) && xt(cd, y.innerHTML) || Pe && y.namespaceURI === ln && ab[R] && (kn(y.firstElementChild) || typeof y.textContent == "string" && xt(rb[R], y.textContent)) || y.nodeType === nn.processingInstruction || Pe && y.nodeType === nn.comment && xt(ud, y.data));
  }, ea = function(y, R) {
    if (y instanceof RegExp)
      return xt(y, R);
    if (y instanceof Function) {
      for (var q = arguments.length, se = new Array(q > 2 ? q - 2 : 0), de = 2; de < q; de++)
        se[de - 2] = arguments[de];
      return !!y(R, ...se);
    }
    return !1;
  }, cl = function(y, R, q) {
    if (!V[R] && Jt(R) && ea(W.tagNameCheck, R))
      return !1;
    if (er && !Pn[R]) {
      const se = P(y), de = x(y);
      if (de && se) {
        const Te = de.length;
        for (let Ye = Te - 1; Ye >= 0; --Ye) {
          const et = y === q ? T(de[Ye], !0) : de[Ye];
          se.insertBefore(et, A(y));
        }
      }
    }
    return Zt(y), !0;
  }, xa = function(y, R, q, se) {
    return y.length === 0 ? R : R === q || R === se ? an(R) : R;
  }, Ai = function(y, R) {
    return y === R || P(y) !== null ? !1 : (wi && ka(y), !0);
  }, ta = function(y, R) {
    if (lt(Ee.beforeSanitizeElements, y, null), Ai(y, R))
      return !0;
    if (Qi(y))
      return Zt(y), !0;
    const q = He(fe(y));
    if (k = xa(Ee.uponSanitizeElement, k, L, it), lt(Ee.uponSanitizeElement, y, {
      tagName: q,
      allowedTags: k
    }), Ai(y, R))
      return !0;
    if (Na(y, q))
      return Zt(y), !0;
    if (V[q] || !(G.tagCheck instanceof Function && G.tagCheck(q)) && !k[q]) {
      const de = cl(y, q, R);
      return de === !1 && lt(Ee.afterSanitizeElements, y, null), de;
    }
    if (te(y) === nn.element && !sl(y) || (q === "noscript" || q === "noembed" || q === "noframes") && xt(nb, y.innerHTML))
      return Zt(y), !0;
    if (Ne && y.nodeType === nn.text) {
      const de = cn(y.textContent);
      y.textContent !== de && (gr(t.removed, {
        element: y.cloneNode()
      }), y.textContent = de);
    }
    return lt(Ee.afterSanitizeElements, y, null), !1;
  }, Qn = function(y, R, q) {
    if (J[R] || Tn(R, y) || Qe && (R === "id" || R === "name") && (q in n || q in rr))
      return !1;
    const se = N[R] || G.attributeCheck instanceof Function && G.attributeCheck(R, y);
    return re && xt(zt, R) || me && xt(at, R) ? !0 : se ? Ea[R] || xt(w, mr(q, U, "")) || (R === "src" || R === "xlink:href" || R === "href") && y !== "script" && td(q, "data:") === 0 && tr[y] || pe && !xt(_n, mr(q, U, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Jt(y) && ea(W.tagNameCheck, y) && ea(W.attributeNameCheck, R, y) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      R === "is" && W.allowCustomizedBuiltInElements && ea(W.tagNameCheck, q)
    );
  }, La = Ue({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Jt = function(y) {
    return !La[Tr(y)] && xt(v, y);
  }, Dn = function(y, R, q, se) {
    if (B && typeof h == "object" && typeof h.getAttributeType == "function" && !q)
      switch (h.getAttributeType(y, R)) {
        case "TrustedHTML":
          return M(se);
        case "TrustedScriptURL":
          return X(se);
      }
    return se;
  }, Qt = function(y, R, q, se) {
    try {
      q ? y.setAttributeNS(q, R, se) : y.setAttribute(R, se), Qi(y) ? Zt(y) : Qu(t.removed);
    } catch {
      Zn(R, y);
    }
  }, or = function(y) {
    lt(Ee.beforeSanitizeAttributes, y, null);
    const R = y.attributes;
    if (!R || Qi(y))
      return;
    N = xa(Ee.uponSanitizeAttribute, N, F, mt);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let se = R.length;
    const de = He(y.nodeName);
    for (; se--; ) {
      const Te = R[se], Ye = Te.name, et = Te.namespaceURI, Nt = Te.value, yt = He(Ye), ki = Nt;
      let St = Ye === "value" ? ki : Fm(ki);
      if (q.attrName = yt, q.attrValue = St, q.keepAttr = !0, q.forceKeepAttr = void 0, lt(Ee.uponSanitizeAttribute, y, q), St = q.attrValue, Wi && (yt === "id" || yt === "name") && td(St, wn) !== 0 && (Zn(Ye, y, Te), St = wn + St), Pe && xt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, St)) {
        Zn(Ye, y, Te);
        continue;
      }
      if (yt === "attributename" && ed(St, "href")) {
        Zn(Ye, y, Te);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          Zn(Ye, y, Te);
          continue;
        }
        if (!_e && xt(ib, St)) {
          Zn(Ye, y, Te);
          continue;
        }
        if (Ne && (St = cn(St)), !Qn(de, yt, St)) {
          Zn(Ye, y, Te);
          continue;
        }
        St = Dn(de, yt, et, St), St !== ki && Qt(y, Ye, et, St);
      }
    }
    lt(Ee.afterSanitizeAttributes, y, null);
  }, Ra = function(y) {
    let R = null;
    const q = Ji(y);
    for (lt(Ee.beforeSanitizeShadowDOM, y, null); R = q.nextNode(); )
      if (lt(Ee.uponSanitizeShadowNode, R, null), ta(R, y), or(R), Jn(R.content) && Ra(R.content), te(R) === nn.element) {
        const se = I(R);
        Jn(se) && (un(se), Ra(se));
      }
    lt(Ee.afterSanitizeShadowDOM, y, null);
  }, un = function(y) {
    const R = [{
      node: y,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const q = R.pop();
      if (q.shadow) {
        Ra(q.shadow);
        continue;
      }
      const se = q.node, Te = te(se) === nn.element, Ye = x(se);
      if (Ye)
        for (let et = Ye.length - 1; et >= 0; --et)
          R.push({
            node: Ye[et],
            shadow: null
          });
      if (Te) {
        const et = oe ? oe(se) : null;
        if (typeof et == "string" && He(et) === "template") {
          const Nt = se.content;
          Jn(Nt) && R.push({
            node: Nt,
            shadow: null
          });
        }
      }
      if (Te) {
        const et = I(se);
        Jn(et) && R.push({
          node: null,
          shadow: et
        }, {
          node: et,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(Z) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, q = null, se = null, de = null;
    if (ir = !Z, ir && (Z = "<!-->"), typeof Z != "string" && !kn(Z) && (Z = jm(Z), typeof Z != "string"))
      throw sa("dirty is not a string, aborting");
    if (!t.isSupported)
      return Z;
    Je ? (k = it, N = mt) : Xi(y), (Ee.uponSanitizeElement.length > 0 || Ee.uponSanitizeAttribute.length > 0) && (k = an(k)), Ee.uponSanitizeAttribute.length > 0 && (N = an(N)), t.removed = [];
    const Te = wi && typeof Z != "string" && kn(Z);
    if (Te) {
      ll(Z);
      const Nt = fe(Z);
      if (typeof Nt == "string") {
        const yt = He(Nt);
        if (!k[yt] || V[yt])
          throw Zi(Z), sa("root node is forbidden and cannot be sanitized in-place");
      }
      if (Qi(Z))
        throw Zi(Z), sa("root node is clobbered and cannot be sanitized in-place");
      try {
        un(Z);
      } catch (yt) {
        throw Zi(Z), yt;
      }
    } else if (kn(Z))
      R = Oa("<!---->"), q = R.ownerDocument.importNode(Z, !0), q.nodeType === nn.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? R = q : R.appendChild(q), un(q);
    else {
      if (!jt && !Ne && !Re && // eslint-disable-next-line unicorn/prefer-includes
      Z.indexOf("<") === -1)
        return B && ot ? M(Z) : Z;
      if (R = Oa(Z), !R)
        return jt ? null : ot ? z : "";
    }
    R && Ct && Zt(R.firstChild);
    const Ye = Te ? Z : R;
    try {
      const Nt = Ji(Ye);
      for (; se = Nt.nextNode(); )
        ta(se, Ye), or(se), Jn(se.content) && Ra(se.content);
    } catch (Nt) {
      throw Te && (Zi(Z), ca(t.removed, (yt) => {
        yt.element && ka(yt.element);
      })), Nt;
    }
    if (Te)
      return ca(t.removed, (Nt) => {
        Nt.element && ka(Nt.element);
      }), Ne && An(Z), Z;
    if (jt) {
      if (Ne && An(R), Wn)
        for (de = Ce.call(R.ownerDocument); R.firstChild; )
          de.appendChild(R.firstChild);
      else
        de = R;
      return (N.shadowroot || N.shadowrootmode) && (de = Ve.call(i, de, !0)), de;
    }
    let et = Re ? R.outerHTML : R.innerHTML;
    return Re && k["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && xt(eb, R.ownerDocument.doctype.name) && (et = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + et), Ne && (et = cn(et)), B && ot ? M(et) : et;
  }, t.setConfig = function() {
    let Z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Xi(Z), Je = !0, it = k, mt = N;
  }, t.clearConfig = function() {
    Sn = null, Je = !1, it = null, mt = null, B = ge, z = "";
  }, t.isValidAttribute = function(Z, y, R) {
    Sn || Xi({});
    const q = He(Z), se = He(y);
    return Qn(q, se, R);
  }, t.addHook = function(Z, y) {
    typeof y == "function" && Wt(Ee, Z) && gr(Ee[Z], y);
  }, t.removeHook = function(Z, y) {
    if (Wt(Ee, Z)) {
      if (y !== void 0) {
        const R = Mm(Ee[Z], y);
        return R === -1 ? void 0 : $m(Ee[Z], R, 1)[0];
      }
      return Qu(Ee[Z]);
    }
  }, t.removeHooks = function(Z) {
    Wt(Ee, Z) && (Ee[Z] = []);
  }, t.removeAllHooks = function() {
    Ee = dd();
  }, t;
}
var Oh = kh();
function Wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xl, fd;
function lb() {
  if (fd) return xl;
  fd = 1;
  var e = /["'&<>]/;
  xl = t;
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
  return xl;
}
var cb = lb();
const Ys = /* @__PURE__ */ Wc(cb);
function ub() {
  return globalThis._nc_l10n_locale;
}
function db() {
  return ub().replaceAll(/_/g, "-");
}
function Jo() {
  return globalThis._nc_l10n_language;
}
function fb(e) {
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
function Nh(e) {
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
  }, l = (A) => A, d = (o.sanitize ? Oh.sanitize : l) || l, u = o.escape ? Ys : l, h = (A) => typeof A == "string" || typeof A == "number", _ = (A, x, P) => A.replace(/%n/g, "" + P).replace(/{([^{}]*)}/g, (I, K) => {
    if (x === void 0 || !(K in x))
      return u(I);
    const $ = x[K];
    return h($) ? u(`${$}`) : typeof $ == "object" && h($.value) ? ($.escape !== !1 ? Ys : l)(`${$.value}`) : u(I);
  });
  let O = (a?.bundle ?? Nh(e)).translations[t] || t;
  return O = Array.isArray(O) ? O[0] : O, d(typeof r == "object" || s !== void 0 ? _(
    O,
    r,
    s
  ) : O);
}
function Fn(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? Nh(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return m(e, d[u], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function hb(e, t = Jo()) {
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
class pb {
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
function xh(e) {
  return new pb(e);
}
function vb() {
  try {
    return Kc("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Ll, hd;
function Lh() {
  if (hd) return Ll;
  hd = 1;
  var e = {};
  return Ll = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Ll;
}
var Rl, pd;
function Rh() {
  if (pd) return Rl;
  pd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Rl = {
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
  }, Rl;
}
var Cs = { exports: {} }, vd;
function gb() {
  return vd || (vd = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = Rh(), r = Lh();
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
      const K = O(P), $ = h++;
      r(x, $, P), u[x] = $, l[$] = P, d[$] = K, s[$] = new RegExp(P, I ? "g" : void 0), o[$] = new RegExp(K, I ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${_}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${_}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Cs, Cs.exports)), Cs.exports;
}
var Il, gd;
function mb() {
  if (gd) return Il;
  gd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Il = (i) => i ? typeof i != "object" ? e : i : t, Il;
}
var Pl, md;
function bb() {
  if (md) return Pl;
  md = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return Pl = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Pl;
}
var Dl, bd;
function Ih() {
  if (bd) return Dl;
  bd = 1;
  const e = Lh(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = Rh(), { safeRe: i, t: a } = gb(), r = mb(), { compareIdentifiers: s } = bb(), o = (d, u) => {
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
  return Dl = l, Dl;
}
var Ml, yd;
function yb() {
  if (yd) return Ml;
  yd = 1;
  const e = Ih();
  return Ml = (n, i) => new e(n, i).major, Ml;
}
var _b = yb();
const _d = /* @__PURE__ */ Wc(_b);
var $l, wd;
function wb() {
  if (wd) return $l;
  wd = 1;
  const e = Ih();
  return $l = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, $l;
}
var Fl, Cd;
function Cb() {
  if (Cd) return Fl;
  Cd = 1;
  const e = wb();
  return Fl = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Fl;
}
var Sb = Cb();
const Eb = /* @__PURE__ */ Wc(Sb);
class Tb {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !Eb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : _d(t.getVersion()) !== _d(this.getVersion()) && console.warn(
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
class Ab {
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
let yr = null;
function qc() {
  return yr !== null ? yr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? yr = new Tb(window._nc_event_bus) : yr = window._nc_event_bus = new Ab(), yr);
}
function Ph(e, t) {
  qc().subscribe(e, t);
}
function kb(e, t) {
  qc().unsubscribe(e, t);
}
function pi(e, ...t) {
  qc().emit(e, ...t);
}
const Dh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ob = Object.prototype.toString, Nb = (e) => Ob.call(e) === "[object Object]", $a = () => {
}, xb = /* @__PURE__ */ Lb();
function Lb() {
  var e, t, n;
  return Dh && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function zl(e) {
  return Array.isArray(e) ? e : [e];
}
function Rb(e, t, n) {
  return Yt(e, t, {
    ...n,
    immediate: !0
  });
}
const Mh = Dh ? window : void 0;
function Ar(e) {
  var t;
  const n = di(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Xa(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = Y(() => {
    const i = zl(di(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Rb(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Ar(r))) !== null && i !== void 0 ? i : [Mh].filter((r) => r != null),
      zl(di(n.value ? e[1] : e[0])),
      zl(g(n.value ? e[2] : e[1])),
      di(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = Nb(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((_) => r.map((T) => t(h, _, T, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let Sd = !1;
function Ed(e, t, n = {}) {
  const { window: i = Mh, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: $a,
    cancel: $a,
    trigger: $a
  } : $a;
  if (xb && !Sd) {
    Sd = !0;
    const x = { passive: !0 };
    Array.from(i.document.body.children).forEach((P) => P.addEventListener("click", $a, x)), i.document.documentElement.addEventListener("click", $a, x);
  }
  let l = !0;
  const d = (x) => di(a).some((P) => {
    if (typeof P == "string") return Array.from(i.document.querySelectorAll(P)).some((I) => I === x.target || x.composedPath().includes(I));
    {
      const I = Ar(P);
      return I && (x.target === I || x.composedPath().includes(I));
    }
  });
  function u(x) {
    const P = di(x);
    return P && P.$.subTree.shapeFlag === 16;
  }
  function h(x, P) {
    const I = di(x), K = I.$.subTree && I.$.subTree.children;
    return K == null || !Array.isArray(K) ? !1 : K.some(($) => $.el === P.target || P.composedPath().includes($.el));
  }
  const _ = (x) => {
    const P = Ar(e);
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
    Xa(i, "click", (x) => {
      T || (T = !0, setTimeout(() => {
        T = !1;
      }, 0), _(x));
    }, {
      passive: !0,
      capture: r
    }),
    Xa(i, "pointerdown", (x) => {
      const P = Ar(e);
      l = !d(x) && !!(P && !x.composedPath().includes(P));
    }, { passive: !0 }),
    s && Xa(i, "blur", (x) => {
      setTimeout(() => {
        const P = Ar(e);
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
function Ib(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Rt({
    x: 0,
    y: 0
  }), d = Y(() => o.x - l.x), u = Y(() => o.y - l.y), { max: h, abs: _ } = Math, T = Y(() => h(_(d.value), _(u.value)) >= n), O = /* @__PURE__ */ Of(!1), A = Y(() => T.value ? _(d.value) > _(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), x = (te) => [te.touches[0].clientX, te.touches[0].clientY], P = (te, fe) => {
    o.x = te, o.y = fe;
  }, I = (te, fe) => {
    l.x = te, l.y = fe;
  }, K = {
    passive: s,
    capture: !s
  }, $ = (te) => {
    O.value && a?.(te, A.value), O.value = !1;
  }, oe = [
    Xa(e, "touchstart", (te) => {
      if (te.touches.length !== 1) return;
      const [fe, B] = x(te);
      P(fe, B), I(fe, B), r?.(te);
    }, K),
    Xa(e, "touchmove", (te) => {
      if (te.touches.length !== 1) return;
      const [fe, B] = x(te);
      I(fe, B), K.capture && !K.passive && Math.abs(d.value) > Math.abs(u.value) && te.preventDefault(), !O.value && T.value && (O.value = !0), O.value && i?.(te);
    }, K),
    Xa(e, ["touchend", "touchcancel"], $, K)
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
var Pb = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = lg(), r = og(), s = /* @__PURE__ */ ct([]), o = Y(() => s.value.reduce((U, v) => (U[~~v.id] = v) && U, {})), l = Y(() => s.value.length), d = /* @__PURE__ */ ct(null), u = /* @__PURE__ */ ct(!1), h = /* @__PURE__ */ ct({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), _ = /* @__PURE__ */ ct({
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
      let w = U.target.closest(".splitpanes__splitter");
      if (w) {
        let { left: k, top: L } = w.getBoundingClientRect(), { clientX: N, clientY: F } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        h.value.cursorOffset = i.horizontal ? F - L : N - k;
      }
      O(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, P = (U) => {
      h.value.mouseDown && (U.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        B(te(U)), at("resize", { event: U }, !0);
      }));
    }, I = (U) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), at("resized", { event: U }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, K = (U, v) => {
      "ontouchstart" in window && (U.preventDefault(), _.value.splitter === v ? (clearTimeout(_.value.timeoutId), _.value.timeoutId = null, $(U, v), _.value.splitter = null) : (_.value.splitter = v, _.value.timeoutId = setTimeout(() => _.value.splitter = null, 500))), h.value.dragging || at("splitter-click", {
        event: U,
        index: v
      }, !0);
    }, $ = (U, v) => {
      if (at("splitter-dblclick", {
        event: U,
        index: v
      }, !0), i.maximizePanes) {
        let w = 0;
        s.value = s.value.map((k, L) => (k.size = L === v ? k.max : k.min, L !== v && (w += k.min), k)), s.value[v].size -= w, at("pane-maximize", {
          event: U,
          index: v,
          pane: s.value[v]
        }), at("resized", {
          event: U,
          index: v
        }, !0);
      }
    }, oe = (U, v) => {
      if (!i.keyboardStep) return;
      let w = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", k = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!w && !k) return;
      U.preventDefault(), h.value.activeSplitter = v;
      let L = (w ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), N = ee(v) + s.value[v].size;
      z(Math.min(Math.max(N + L * i.keyboardStep, 0), 100)), at("resize", { event: U }, !0), at("resized", { event: U }, !0), h.value.activeSplitter = null;
    }, ce = (U, v) => {
      let w = o.value[v];
      w && at("pane-click", {
        event: U,
        index: w.index,
        pane: w
      });
    }, te = (U) => {
      let v = d.value.getBoundingClientRect(), { clientX: w, clientY: k } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: w - (i.horizontal ? 0 : h.value.cursorOffset) - v.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - v.top
      };
    }, fe = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let v = d.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = v - U), U * 100 / v;
    }, B = (U) => {
      z(fe(U));
    }, z = (U) => {
      let v = h.value.activeSplitter;
      if (v === null || v >= s.value.length - 1) return;
      let w = {
        prevPanesSize: ee(v),
        nextPanesSize: ne(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : w.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : w.nextPanesSize);
      U = Math.max(Math.min(U, L), k);
      let N = [v, v + 1], F = s.value[N[0]] || null, W = s.value[N[1]] || null, V = F !== null && F.max < 100 && U >= F.max + w.prevPanesSize, J = W !== null && W.max < 100 && U <= 100 - (W.max + ne(v + 1));
      if (V || J) {
        V ? (F.size = F.max, W.size = Math.min(Math.max(100 - F.max - w.prevPanesSize - w.nextPanesSize, W.min), W.max)) : (F.size = Math.min(Math.max(100 - W.max - w.prevPanesSize - ne(v + 1), F.min), F.max), W.size = W.max);
        return;
      }
      if (i.pushOtherPanes) {
        let G = ge(w, U);
        if (!G) return;
        ({ sums: w, panesToResize: N } = G), F = s.value[N[0]] || null, W = s.value[N[1]] || null;
      }
      F !== null && (F.size = Math.min(Math.max(U - w.prevPanesSize - w.prevReachedMinPanes, F.min), F.max)), W !== null && (W.size = Math.min(Math.max(100 - U - w.nextPanesSize - w.nextReachedMinPanes, W.min), W.max));
    }, ge = (U, v) => {
      let w = h.value.activeSplitter, k = [w, w + 1];
      if (v < U.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = D(w).index, U.prevReachedMinPanes = 0, k[0] < w && s.value.forEach((L, N) => {
          N > k[0] && N <= w && (L.size = L.min, U.prevReachedMinPanes += L.min);
        }), k[0] === void 0) return U.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((L, N) => {
          N > 0 && N <= w && (L.size = L.min, U.prevReachedMinPanes += L.min);
        }), s.value[k[1]].size = 100 - U.prevReachedMinPanes - s.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = ee(k[0]);
      }
      return v > 100 - U.nextPanesSize - s.value[k[1]].min && (k[1] = M(w).index, U.nextReachedMinPanes = 0, k[1] > w + 1 && s.value.forEach((L, N) => {
        N > w && N < k[1] && (L.size = L.min, U.nextReachedMinPanes += L.min);
      }), U.nextPanesSize = k[1] === void 0 ? 0 : ne(k[1] - 1), k[1] === void 0) ? (U.nextReachedMinPanes = 0, s.value.forEach((L, N) => {
        N >= w + 1 && (L.size = L.min, U.nextReachedMinPanes += L.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - U.prevPanesSize - ne(k[0] - 1)), null) : {
        sums: U,
        panesToResize: k
      };
    }, ee = (U) => s.value.reduce((v, w, k) => v + (k < U ? w.size : 0), 0), ne = (U) => s.value.reduce((v, w, k) => v + (k > U + 1 ? w.size : 0), 0), D = (U) => [...s.value].reverse().find((v) => v.index < U && v.size > v.min) || {}, M = (U) => s.value.find((v) => v.index > U + 1 && v.size > v.min) || {}, X = () => {
      let U = Array.from(d.value?.children || []);
      for (let v of U) {
        let w = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !w && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ae = (U, v, w = !1) => {
      let k = U - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), w || (L.onmousedown = (N) => x(N, k), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (N) => x(N, k)), L.onclick = (N) => K(N, k + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (N) => oe(N, k))), L.ondblclick = (N) => $(N, k + 1), v.parentNode.insertBefore(L, v);
    }, ie = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, ue = () => {
      let U = Array.from(d.value?.children || []);
      for (let w of U) w.className.includes("splitpanes__splitter") && ie(w);
      let v = 0;
      for (let w of U) w.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? ae(v, w, !0) : v && ae(v, w), v++);
    }, he = ({ uid: U, ...v }) => {
      let w = o.value[U];
      for (let [k, L] of Object.entries(v)) w[k] = L;
    }, Ce = !1, be = (U) => {
      let v = -1;
      Array.from(d.value?.children || []).some((w) => (w.className.includes("splitpanes__pane") && v++, w.isSameNode(U.el))), s.value.splice(v, 0, {
        ...U,
        index: v
      }), s.value.forEach((w, k) => w.index = k), u.value && !Ce && (Ce = !0, fi(() => {
        ue(), Ee({ addedPane: s.value[v] }), at("pane-add", { pane: s.value[v] }), Ce = !1;
      }));
    }, Ve = (U) => {
      let v = s.value.findIndex((k) => k.id === U);
      s.value[v].el = null;
      let w = s.value.splice(v, 1)[0];
      s.value.forEach((k, L) => k.index = L), fi(() => {
        ue(), at("pane-remove", { pane: w }), Ee({ removedPane: {
          ...w
        } });
      });
    }, Ee = (U = {}) => {
      !U.addedPane && !U.removedPane ? ut() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? Xe(U) : rt(), u.value && at("resized");
    }, rt = () => {
      let U = 100 / l.value, v = 100, w = [], k = [];
      for (let L of s.value) L.size = Math.max(Math.min(U, L.max), L.min), v -= L.size, L.size >= L.max && w.push(L.id), L.size <= L.min && k.push(L.id);
      Math.abs(v) > 0.1 && zt(v, w, k);
    }, ut = () => {
      let U = 100, v = [], w = [], k = 0;
      for (let N of s.value) U -= N.size, N.givenSize !== null && k++, N.size >= N.max && v.push(N.id), N.size <= N.min && w.push(N.id);
      let L = 100;
      if (U > 0.1) {
        for (let N of s.value) N.givenSize === null && (N.size = Math.max(Math.min(U / (l.value - k), N.max), N.min)), L -= N.size;
        L > 0.1 && zt(L, v, w);
      }
    }, Xe = ({ addedPane: U, removedPane: v } = {}) => {
      let w = s.value.reduce((V, J) => V + (J.givenSize === null ? 0 : J.givenSize), 0), k = s.value.filter((V) => V.givenSize === null).length, L = k > 0 ? (100 - w) / k : 0, N = 0, F = [], W = [];
      for (let V of s.value) N -= V.size, V.size >= V.max && F.push(V.id), V.size <= V.min && W.push(V.id);
      if (!(Math.abs(N) < 0.1)) {
        N = 100;
        for (let V of s.value) V.givenSize === null && (V.size = Math.max(Math.min(L, V.max), V.min)), N -= V.size, V.size >= V.max && F.push(V.id), V.size <= V.min && W.push(V.id);
        Math.abs(N) > 0.1 && zt(N, F, W);
      }
    }, zt = (U, v, w) => {
      let k;
      k = U > 0 ? U / (l.value - v.length) : U / (l.value - w.length), s.value.forEach((L, N) => {
        if (U > 0 && !v.includes(L.id)) {
          let F = Math.max(Math.min(L.size + k, L.max), L.min), W = F - L.size;
          U -= W, L.size = F;
        } else if (!w.includes(L.id)) {
          let F = Math.max(Math.min(L.size + k, L.max), L.min), W = F - L.size;
          U -= W, L.size = F;
        }
      }), Math.abs(U) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, at = (U, v = void 0, w = !1) => {
      let k = v?.index ?? h.value.activeSplitter ?? null;
      n(U, {
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
    Yt(() => i.firstSplitter, () => ue()), Yt(() => i.horizontal, (U) => fi(() => {
      n("direction-changed", {
        horizontal: U,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), Vi(() => {
      X(), ue(), Ee(), at("ready"), u.value = !0;
    }), Qa(() => u.value = !1);
    let _n = () => {
      let { class: U, ...v } = a;
      return Kt("div", {
        ref: d,
        class: [T.value, U],
        ...v
      }, r.default?.());
    };
    return pn("panes", s), pn("indexedPanes", o), pn("horizontal", Y(() => i.horizontal)), pn("requestUpdate", he), pn("onPaneAdd", be), pn("onPaneRemove", Ve), pn("onPaneClick", ce), (U, v) => (b(), $e(Uc(_n)));
  }
}), Db = {
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
    let t = e, n = Pt("requestUpdate"), i = Pt("onPaneAdd"), a = Pt("horizontal"), r = Pt("onPaneRemove"), s = Pt("onPaneClick"), o = Ca()?.uid, l = Pt("indexedPanes"), d = Y(() => l.value[o]), u = /* @__PURE__ */ ct(null), h = Y(() => {
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
    return Yt(() => h.value, (A) => n({
      uid: o,
      size: A
    })), Yt(() => _.value, (A) => n({
      uid: o,
      min: A
    })), Yt(() => T.value, (A) => n({
      uid: o,
      max: A
    })), Vi(() => {
      i({
        id: o,
        el: u.value,
        min: _.value,
        max: T.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Qa(() => r(o)), (A, x) => (b(), C("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: x[0] ||= (P) => g(s)(P, A._.uid),
      style: on(O.value)
    }, [Le(A.$slots, "default")], 4));
  }
}, Mb = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", $b = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", Fb = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", zb = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Yc = 1024, $h = Yc / 2, Zs = (e) => document.documentElement.clientWidth < e, Fh = /* @__PURE__ */ ct(Zs(Yc)), zh = /* @__PURE__ */ ct(Zs($h));
window.addEventListener("resize", () => {
  Fh.value = Zs(Yc), zh.value = Zs($h);
}, { passive: !0 });
function hs() {
  return /* @__PURE__ */ Kr(Fh);
}
function Ub() {
  return /* @__PURE__ */ Kr(zh);
}
class Bb {
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
    return Fn("", t, n, i, a, { bundle: this.bundle });
  }
}
class Hb {
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
    const t = new Bb((n) => hb(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function jb() {
  return new Hb();
}
const Uh = jb().detectLanguage().build(), _t = (...e) => Uh.gettext(...e);
function Gi(...e) {
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
        Uh.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const Vb = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Gb = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Kb = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Wb = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], qb = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Yb = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Xb = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Zb = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], Jb = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const Qb = /* @__PURE__ */ Symbol(""), [ey] = window.OC?.config?.version?.split(".") ?? [], Bh = Number.parseInt(ey ?? "35"), ty = Bh < 32, Ki = Bh < 34, ny = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function iy() {
  return Pt(ny, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, ay = { class: "button-vue__wrapper" }, ry = { class: "button-vue__icon" }, sy = { class: "button-vue__text" }, oy = /* @__PURE__ */ Ot({
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
    const n = e, i = t, { formBoxItemClass: a } = iy(), r = Pt(Qb, null) !== null, s = Y(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = Y(() => s.value === "button" && typeof n.pressed == "boolean"), l = Y(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = Y(() => l.value.startsWith("tertiary")), u = Y(() => n.alignment.split("-")[0]), h = Y(() => n.alignment.includes("-")), _ = Pt("NcPopover:trigger:attrs", () => ({}), !1), T = Y(() => _()), O = Y(() => {
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
    return (x, P) => (b(), $e(Uc(s.value), Ft({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(ty),
          "button-vue--legacy34": g(Ki)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, O.value, { onClick: A }), {
      default: ke(() => [
        c("span", ay, [
          c("span", ry, [
            Le(x.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", sy, [
            Le(x.$slots, "default", {}, () => [
              Ae(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Vn = /* @__PURE__ */ qe(oy, [["__scopeId", "data-v-47ce59a3"]]), ly = ["aria-hidden", "aria-label"], cy = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, uy = ["d"], dy = ["innerHTML"], fy = /* @__PURE__ */ Ot({
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
    nm((a) => ({
      fb515064: n.value
    }));
    const t = e, n = Y(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = Y(() => {
      if (!t.svg || t.path)
        return;
      const a = Oh.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (b(), C("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: we(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (b(), C("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, dy)) : (b(), C("svg", cy, [
        c("path", { d: e.path }, null, 8, uy)
      ]))
    ], 10, ly));
  }
}), Qo = /* @__PURE__ */ qe(fy, [["__scopeId", "data-v-aaedb1c3"]]);
py();
function hy(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), pi("csrf-token-update", { token: e, _internal: !0 }));
}
function py() {
  Ph("csrf-token-update", ({ token: e, _internal: t }) => {
    t || hy(e);
  });
}
xh("public").persist().build();
let Fa;
function Td(e, t) {
  return e ? e.getAttribute(t) : null;
}
function vy() {
  if (Fa !== void 0)
    return Fa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Td(e, "data-user");
  return t === null ? (Fa = null, Fa) : (Fa = {
    uid: t,
    displayName: Td(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Fa);
}
var ft = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(ft || {});
class gy {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + ft[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === ft.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case ft.Debug:
          console.debug(this.formatMessage(n, ft.Debug, i), i);
          break;
        case ft.Info:
          console.info(this.formatMessage(n, ft.Info, i), i);
          break;
        case ft.Warn:
          console.warn(this.formatMessage(n, ft.Warn, i), i);
          break;
        case ft.Error:
          console.error(this.formatMessage(n, ft.Error, i), i);
          break;
        case ft.Fatal:
        default:
          console.error(this.formatMessage(n, ft.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(ft.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(ft.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(ft.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(ft.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(ft.Fatal, t, Object.assign({}, this.context, n));
  }
}
function my(e) {
  return new gy(e);
}
class by {
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
    const t = vy();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? ft.Warn, window._oc_debug && (t.context.level = ft.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function yy() {
  return new by(my);
}
const ya = yy().detectUser().setApp("@nextcloud/vue").build();
function _y(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Hh = "missing-app-name";
try {
  Hh = "library";
} catch {
  ya.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const wy = Hh;
let Cy = "";
try {
  Cy = "0.1.0-alpha.167";
} catch {
  ya.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function jh() {
  return Pt("appName", wy);
}
const Sy = _y(() => {
  const e = Kc("core", "apps", []), t = jh();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), dc = fb();
Gi(Xb);
const Ey = /* @__PURE__ */ Ot({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = hs();
    Yt(t, n), Vi(() => {
      n(t.value);
    }), Qa(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && pi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (b(), $e(g(Vn), {
      "aria-label": g(_t)("Go back to the list"),
      class: we(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(_t)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: ke(() => [
        ve(g(Qo), {
          directional: "",
          path: g(Mb)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), Ty = /* @__PURE__ */ qe(Ey, [["__scopeId", "data-v-a28923a1"]]), Ad = xh("nextcloud").persist().build(), Ay = vb().theming?.name ?? "Nextcloud", ky = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: Ty,
    Pane: Db,
    Splitpanes: Pb
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
      appName: jh(),
      localizedAppName: Sy(),
      isMobile: hs(),
      isRtl: dc
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
      return e.add(Ay), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = Ib(this.$el, {
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
      Ad.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ya.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Ad.getItem(this.paneConfigID), 10);
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
}, Oy = {
  key: 0,
  class: "hidden-visually"
}, Ny = { class: "app-content-wrapper__list" }, xy = {
  key: 1,
  class: "app-content-wrapper"
};
function Ly(e, t, n, i, a, r) {
  const s = ze("NcAppContentDetailsToggle"), o = ze("Pane"), l = ze("Splitpanes");
  return b(), C("main", {
    id: "app-content-vue",
    class: we(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (b(), C("h1", Oy, p(n.pageHeading), 1)) : H("", !0),
    e.$slots.list ? (b(), C(le, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (b(), C("div", {
        key: 0,
        class: we(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (b(), $e(s, {
          key: 0,
          onClick: Ze(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : H("", !0),
        Ge(c("div", Ny, [
          Le(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [qa, !n.showDetails]
        ]),
        n.showDetails ? Le(e.$slots, "default", { key: 1 }, void 0, !0) : H("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (b(), C("div", xy, [
        ve(l, {
          horizontal: n.layout === "horizontal-split",
          class: we(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: ke(() => [
            ve(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: ke(() => [
                Le(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            ve(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: ke(() => [
                Le(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : H("", !0)
    ], 64)) : H("", !0),
    e.$slots.list ? H("", !0) : Le(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const Ry = /* @__PURE__ */ qe(ky, [["render", Ly], ["__scopeId", "data-v-51427d61"]]);
var Vh = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Js = /* @__PURE__ */ Vh.join(","), Gh = typeof Element > "u", wa = Gh ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Qs = !Gh && Element.prototype.getRootNode ? function(e) {
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
}, Iy = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Kh = function(t, n, i) {
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
          var T = to(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, T) : a.push({
            scopeParent: s,
            candidates: T
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Wh = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ha = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Iy(t)) && !Wh(t) ? 0 : t.tabIndex;
}, Py = function(t, n) {
  var i = ha(t);
  return i < 0 && n && !Wh(t) ? 0 : i;
}, Dy = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, qh = function(t) {
  return t.tagName === "INPUT";
}, My = function(t) {
  return qh(t) && t.type === "hidden";
}, $y = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, Fy = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, zy = function(t) {
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
  var r = Fy(a, t.form);
  return !r || r === t;
}, Uy = function(t) {
  return qh(t) && t.type === "radio";
}, By = function(t) {
  return Uy(t) && !zy(t);
}, Hy = function(t) {
  var n, i = t && Qs(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = Qs(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, kd = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, jy = function(t, n) {
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
          return kd(t);
        t.assignedSlot ? t = t.assignedSlot : !h && _ !== t.ownerDocument ? t = _.host : t = h;
      }
      t = u;
    }
    if (Hy(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return kd(t);
  return !1;
}, Vy = function(t) {
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
  return !(n.disabled || My(n) || jy(n, t) || // For a details element with a summary, the summary element gets the focus
  $y(n) || Vy(n));
}, fc = function(t, n) {
  return !(By(n) || ha(n) < 0 || !no(t, n));
}, Gy = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Yh = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = Py(o, s), d = s ? Yh(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(Dy).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, Ky = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = to([t], n.includeContainer, {
    filter: fc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Gy
  }) : i = Kh(t, n.includeContainer, fc.bind(null, n)), Yh(i);
}, Wy = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = to([t], n.includeContainer, {
    filter: no.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Kh(t, n.includeContainer, no.bind(null, n)), i;
}, za = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return wa.call(t, Js) === !1 ? !1 : fc(n, t);
}, qy = /* @__PURE__ */ Vh.concat("iframe:not([inert]):not([inert] *)").join(","), Ul = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return wa.call(t, qy) === !1 ? !1 : no(n, t);
};
function hc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Yy(e) {
  if (Array.isArray(e)) return hc(e);
}
function Od(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Xh(e)) || t) {
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
function Xy(e, t, n) {
  return (t = t_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Zy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Jy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function xd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nd(Object(n), !0).forEach(function(i) {
      Xy(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Qy(e) {
  return Yy(e) || Zy(e) || Xh(e) || Jy();
}
function e_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function t_(e) {
  var t = e_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Xh(e, t) {
  if (e) {
    if (typeof e == "string") return hc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hc(e, t) : void 0;
  }
}
var ci = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = ci.getActiveTrap(t);
    n !== i && ci.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), ci.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = ci.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = ci.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, n_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, i_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Ir = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, a_ = function(t) {
  return Ir(t) && !t.shiftKey;
}, r_ = function(t) {
  return Ir(t) && t.shiftKey;
}, Ld = function(t) {
  return setTimeout(t, 0);
}, _r = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Ss = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, s_ = [], Xc = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || s_, r = xd({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: a_,
    isKeyBackward: r_
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
  }, o, l = function(D, M, X) {
    return D && D[M] !== void 0 ? D[M] : r[X || M];
  }, d = function(D, M) {
    var X = typeof M?.composedPath == "function" ? M.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ae) {
      var ie = ae.container, ue = ae.tabbableNodes;
      return ie.contains(D) || X?.includes(ie) || ue.find(function(he) {
        return he === D;
      });
    });
  }, u = function(D) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = M.hasFallback, ae = X === void 0 ? !1 : X, ie = M.params, ue = ie === void 0 ? [] : ie, he = r[D];
    if (typeof he == "function" && (he = he.apply(void 0, Qy(ue))), he === !0 && (he = void 0), !he) {
      if (he === void 0 || he === !1)
        return he;
      throw new Error("`".concat(D, "` was specified but was not a node, or did not return a node"));
    }
    var Ce = he;
    if (typeof he == "string") {
      try {
        Ce = i.querySelector(he);
      } catch (be) {
        throw new Error("`".concat(D, '` appears to be an invalid selector; error="').concat(be.message, '"'));
      }
      if (!Ce && !ae)
        throw new Error("`".concat(D, "` as selector refers to no known node"));
    }
    return Ce;
  }, h = function(D) {
    var M = D.activeElement;
    return M ? M.shadowRoot && M.shadowRoot.activeElement !== null ? h(M.shadowRoot) : M : null;
  }, _ = function() {
    var D = u("initialFocus", {
      hasFallback: !0
    });
    if (D === !1)
      return !1;
    if (D === void 0 || D && !Ul(D, r.tabbableOptions)) {
      var M = h(i);
      if (d(M) >= 0)
        D = M;
      else {
        var X = s.tabbableGroups[0], ae = X && X.firstTabbableNode;
        D = ae || u("fallbackFocus");
      }
    } else D === null && (D = u("fallbackFocus"));
    if (!D)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return D;
  }, T = function() {
    if (s.containerGroups = s.containers.map(function(D) {
      var M = Ky(D, r.tabbableOptions), X = Wy(D, r.tabbableOptions), ae = M.length > 0 ? M[0] : void 0, ie = M.length > 0 ? M[M.length - 1] : void 0, ue = X.find(function(be) {
        return za(be);
      }), he = X.slice().reverse().find(function(be) {
        return za(be);
      }), Ce = !!M.find(function(be) {
        return ha(be) > 0;
      });
      return {
        container: D,
        tabbableNodes: M,
        focusableNodes: X,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Ce,
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
        firstDomTabbableNode: ue,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: he,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ve) {
          var Ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, rt = M.indexOf(Ve);
          return rt < 0 ? Ee ? X.slice(X.indexOf(Ve) + 1).find(function(ut) {
            return za(ut);
          }) : X.slice(0, X.indexOf(Ve)).reverse().find(function(ut) {
            return za(ut);
          }) : M[rt + (Ee ? 1 : -1)];
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
      }), s.mostRecentlyFocusedNode = D, n_(D) && D.select();
    }
  }, A = function(D) {
    var M = u("setReturnFocus", {
      params: [D]
    });
    return M || (M === !1 ? !1 : D);
  }, x = function(D) {
    var M = D.target, X = D.event, ae = D.isBackward, ie = ae === void 0 ? !1 : ae;
    M = M || Ss(X), T();
    var ue = null;
    if (s.tabbableGroups.length > 0) {
      var he = d(M, X), Ce = he >= 0 ? s.containerGroups[he] : void 0;
      if (he < 0)
        ie ? ue = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : ue = s.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var be = s.tabbableGroups.findIndex(function(zt) {
          var at = zt.firstTabbableNode;
          return M === at;
        });
        if (be < 0 && (Ce.container === M || Ul(M, r.tabbableOptions) && !za(M, r.tabbableOptions) && !Ce.nextTabbableNode(M, !1)) && (be = he), be >= 0) {
          var Ve = be === 0 ? s.tabbableGroups.length - 1 : be - 1, Ee = s.tabbableGroups[Ve];
          ue = ha(M) >= 0 ? Ee.lastTabbableNode : Ee.lastDomTabbableNode;
        } else Ir(X) || (ue = Ce.nextTabbableNode(M, !1));
      } else {
        var rt = s.tabbableGroups.findIndex(function(zt) {
          var at = zt.lastTabbableNode;
          return M === at;
        });
        if (rt < 0 && (Ce.container === M || Ul(M, r.tabbableOptions) && !za(M, r.tabbableOptions) && !Ce.nextTabbableNode(M)) && (rt = he), rt >= 0) {
          var ut = rt === s.tabbableGroups.length - 1 ? 0 : rt + 1, Xe = s.tabbableGroups[ut];
          ue = ha(M) >= 0 ? Xe.firstTabbableNode : Xe.firstDomTabbableNode;
        } else Ir(X) || (ue = Ce.nextTabbableNode(M));
      }
    } else
      ue = u("fallbackFocus");
    return ue;
  }, P = function(D) {
    var M = Ss(D);
    if (!(d(M, D) >= 0)) {
      if (_r(r.clickOutsideDeactivates, D)) {
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
      _r(r.allowOutsideClick, D) || D.preventDefault();
    }
  }, I = function(D) {
    var M = Ss(D), X = d(M, D) >= 0;
    if (X || M instanceof Document)
      X && (s.mostRecentlyFocusedNode = M);
    else {
      D.stopImmediatePropagation();
      var ae, ie = !0;
      if (s.mostRecentlyFocusedNode)
        if (ha(s.mostRecentlyFocusedNode) > 0) {
          var ue = d(s.mostRecentlyFocusedNode), he = s.containerGroups[ue].tabbableNodes;
          if (he.length > 0) {
            var Ce = he.findIndex(function(be) {
              return be === s.mostRecentlyFocusedNode;
            });
            Ce >= 0 && (r.isKeyForward(s.recentNavEvent) ? Ce + 1 < he.length && (ae = he[Ce + 1], ie = !1) : Ce - 1 >= 0 && (ae = he[Ce - 1], ie = !1));
          }
        } else
          s.containerGroups.some(function(be) {
            return be.tabbableNodes.some(function(Ve) {
              return ha(Ve) > 0;
            });
          }) || (ie = !1);
      else
        ie = !1;
      ie && (ae = x({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), O(ae || s.mostRecentlyFocusedNode || _());
    }
    s.recentNavEvent = void 0;
  }, K = function(D) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = D;
    var X = x({
      event: D,
      isBackward: M
    });
    X && (Ir(D) && D.preventDefault(), O(X));
  }, $ = function(D) {
    (r.isKeyForward(D) || r.isKeyBackward(D)) && K(D, r.isKeyBackward(D));
  }, oe = function(D) {
    i_(D) && _r(r.escapeDeactivates, D) !== !1 && (D.preventDefault(), o.deactivate());
  }, ce = function(D) {
    var M = Ss(D);
    d(M, D) >= 0 || _r(r.clickOutsideDeactivates, D) || _r(r.allowOutsideClick, D) || (D.preventDefault(), D.stopImmediatePropagation());
  }, te = function() {
    if (s.active) {
      ci.activateTrap(a, o);
      var D;
      return r.delayInitialFocus ? D = new Promise(function(M) {
        s.delayInitialFocusTimer = Ld(function() {
          O(_()), M();
        });
      }) : O(_()), i.addEventListener("focusin", I, !0), i.addEventListener("mousedown", P, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", P, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", ce, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", $, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", oe), D;
    }
  }, fe = function(D) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var M = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), ae = Od(D), ie;
    try {
      for (ae.s(); !(ie = ae.n()).done; ) {
        var ue = ie.value;
        M.add(ue);
        for (var he = typeof ShadowRoot < "u" && ue.getRootNode() instanceof ShadowRoot, Ce = ue; Ce; ) {
          M.add(Ce);
          var be = Ce.parentElement, Ve = [];
          be ? Ve = be.children : !be && he && (Ve = Ce.getRootNode().children, be = Ce.getRootNode().host, he = typeof ShadowRoot < "u" && be.getRootNode() instanceof ShadowRoot);
          var Ee = Od(Ve), rt;
          try {
            for (Ee.s(); !(rt = Ee.n()).done; ) {
              var ut = rt.value;
              X.add(ut);
            }
          } catch (Xe) {
            Ee.e(Xe);
          } finally {
            Ee.f();
          }
          Ce = be;
        }
      }
    } catch (Xe) {
      ae.e(Xe);
    } finally {
      ae.f();
    }
    M.forEach(function(Xe) {
      X.delete(Xe);
    }), s.adjacentElements = X;
  }, B = function() {
    if (s.active)
      return i.removeEventListener("focusin", I, !0), i.removeEventListener("mousedown", P, !0), i.removeEventListener("touchstart", P, !0), i.removeEventListener("click", ce, !0), i.removeEventListener("keydown", $, !0), i.removeEventListener("keydown", oe), o;
  }, z = function(D) {
    var M = s.mostRecentlyFocusedNode;
    if (M) {
      var X = D.some(function(ie) {
        var ue = Array.from(ie.removedNodes);
        return ue.some(function(he) {
          return he === M || typeof he.contains == "function" && he.contains(M);
        });
      });
      if (X && s.containers.some(function(ie) {
        return ie?.isConnected;
      })) {
        T();
        var ae = _();
        O(ae);
      }
    }
  }, ge = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(z) : void 0, ee = function() {
    ge && (ge.disconnect(), s.active && !s.paused && s.containers.map(function(D) {
      ge.observe(D, {
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
      var M = l(D, "onActivate"), X = l(D, "onPostActivate"), ae = l(D, "checkCanFocusTrap"), ie = ci.getActiveTrap(a), ue = !1;
      if (ie && !ie.paused) {
        var he;
        (he = ie._setSubtreeIsolation) === null || he === void 0 || he.call(ie, !1), ue = !0;
      }
      try {
        ae || T(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), M?.({
          trap: o
        });
        var Ce = function() {
          ae && T();
          var Ee = function() {
            o._setSubtreeIsolation(!0), ee(), X?.({
              trap: o
            });
          }, rt = te();
          rt ? rt.then(Ee) : Ee();
        };
        if (ae)
          return ae(s.containers.concat()).then(Ce, Ce), this;
        Ce();
      } catch (Ve) {
        if (ie === ci.getActiveTrap(a) && ue) {
          var be;
          (be = ie._setSubtreeIsolation) === null || be === void 0 || be.call(ie, !0);
        }
        throw Ve;
      }
      return this;
    },
    deactivate: function(D) {
      if (!s.active)
        return this;
      var M = xd({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, D);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), B(), s.active = !1, s.paused = !1, ee(), ci.deactivateTrap(a, o);
      var X = l(M, "onDeactivate"), ae = l(M, "onPostDeactivate"), ie = l(M, "checkCanReturnFocus"), ue = l(M, "delayReturnFocus"), he = l(M, "returnFocus", "returnFocusOnDeactivate");
      X?.({
        trap: o
      });
      var Ce = function() {
        he && O(A(s.nodeFocusedBeforeActivation)), ae?.({
          trap: o
        });
      }, be = function() {
        ue && he ? Ld(Ce) : Ce();
      };
      return he && ie ? (ie(A(s.nodeFocusedBeforeActivation)).then(be, be), this) : (be(), this);
    },
    pause: function(D) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, D)) : this;
    },
    unpause: function(D) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, D)) : this;
    },
    updateContainerElements: function(D) {
      var M = [].concat(D).filter(Boolean);
      return s.containers = M.map(function(X) {
        return typeof X == "string" ? i.querySelector(X) : X;
      }), r.isolateSubtrees && fe(s.containers), s.active && (T(), s.paused || o._setSubtreeIsolation(!0)), ee(), this;
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
          var X = l(M, "onPause"), ae = l(M, "onPostPause");
          X?.({
            trap: o
          }), B(), o._setSubtreeIsolation(!1), ee(), ae?.({
            trap: o
          });
        } else {
          var ie = l(M, "onUnpause"), ue = l(M, "onPostUnpause");
          ie?.({
            trap: o
          });
          var he = function() {
            T();
            var be = function() {
              o._setSubtreeIsolation(!0), ee(), ue?.({
                trap: o
              });
            }, Ve = te();
            Ve ? Ve.then(be) : be();
          };
          he();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(D) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(M) {
          var X;
          D ? r.isolateSubtrees === "aria-hidden" ? ((M.ariaHidden === "true" || ((X = M.getAttribute("aria-hidden")) === null || X === void 0 ? void 0 : X.toLowerCase()) === "true") && s.alreadySilent.add(M), M.setAttribute("aria-hidden", "true")) : ((M.inert || M.hasAttribute("inert")) && s.alreadySilent.add(M), M.setAttribute("inert", !0)) : s.alreadySilent.has(M) || (r.isolateSubtrees === "aria-hidden" ? M.removeAttribute("aria-hidden") : M.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const Zh = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), o_ = /* @__PURE__ */ Ot({
  name: "NcAppNavigationList",
  provide() {
    return {
      [Zh]: {
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
function l_(e, t, n, i, a, r) {
  return b(), C("ul", {
    ref: "list",
    class: we(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    c("div", {
      class: we(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: on(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Le(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Jh = /* @__PURE__ */ qe(o_, [["render", l_], ["__scopeId", "data-v-3e73e246"]]);
function ts() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function c_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...ts()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === ts().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Qh = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), ep = /* @__PURE__ */ Symbol.for("NcContent:selector");
Gi(Wb);
const u_ = { class: "app-navigation-toggle-wrapper" }, d_ = /* @__PURE__ */ Ot({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = eh(e, "open"), n = Y(() => t.value ? _t("Close navigation") : _t("Open navigation"));
    return (i, a) => (b(), C("div", u_, [
      ve(g(Vn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: ke(() => [
          ve(Qo, {
            path: g(zb),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), f_ = /* @__PURE__ */ qe(d_, [["__scopeId", "data-v-e8177cc7"]]), h_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], p_ = { class: "app-navigation__search" }, v_ = /* @__PURE__ */ Ot({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Pt(
      Qh,
      () => Vg(),
      !1
    ), a = Xv("appNavigationContainer"), r = hs(), s = /* @__PURE__ */ ct(!r.value), o = Y(() => r.value && s.value);
    Bv(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Yt(r, () => {
      s.value = !r.value;
    }), Yt(o, () => {
      u();
    }), Vi(() => {
      i(!0), Ph("toggle-navigation", d), pi("navigation-toggled", {
        open: s.value
      }), n = Xc(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: ts(),
        escapeDeactivates: !1
      }), u();
    }), us(() => {
      i(!1), kb("toggle-navigation", d), n.deactivate();
    });
    function l(_) {
      if (s.value === _) {
        pi("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = _ === void 0 ? !s.value : _;
      const T = getComputedStyle(document.body), O = parseInt(T.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        pi("navigation-toggled", {
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
    return (_, T) => (b(), C("div", {
      ref: "appNavigationContainer",
      class: we(["app-navigation", {
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
        onKeydown: qt(h, ["esc"])
      }, [
        c("div", p_, [
          Le(_.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: we(["app-navigation__body", { "app-navigation__body--no-list": !_.$slots.list }])
        }, [
          Le(_.$slots, "default", {}, void 0, !0)
        ], 2),
        _.$slots.list ? (b(), $e(Jh, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: ke(() => [
            Le(_.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : H("", !0),
        Le(_.$slots, "footer", {}, void 0, !0)
      ], 40, h_),
      ve(f_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), g_ = /* @__PURE__ */ qe(v_, [["__scopeId", "data-v-37908cd4"]]), m_ = {
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
}, b_ = ["aria-hidden", "aria-label"], y_ = ["fill", "width", "height"], __ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, w_ = { key: 0 };
function C_(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
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
      c("path", __, [
        n.title ? (b(), C("title", w_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, y_))
  ], 16, b_);
}
const S_ = /* @__PURE__ */ qe(m_, [["render", C_]]), E_ = {
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
}, T_ = ["aria-hidden", "aria-label"], A_ = ["fill", "width", "height"], k_ = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, O_ = { key: 0 };
function N_(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
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
      c("path", k_, [
        n.title ? (b(), C("title", O_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, A_))
  ], 16, T_);
}
const x_ = /* @__PURE__ */ qe(E_, [["render", N_]]), L_ = {
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
}, R_ = ["aria-hidden", "aria-label"], I_ = ["fill", "width", "height"], P_ = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, D_ = { key: 0 };
function M_(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
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
      c("path", P_, [
        n.title ? (b(), C("title", D_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, I_))
  ], 16, R_);
}
const tp = /* @__PURE__ */ qe(L_, [["render", M_]]), $_ = {
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
}, F_ = ["aria-hidden", "aria-label"], z_ = ["fill", "width", "height"], U_ = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, B_ = { key: 0 };
function H_(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
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
      c("path", U_, [
        n.title ? (b(), C("title", B_, p(n.title), 1)) : H("", !0)
      ])
    ], 8, z_))
  ], 16, F_);
}
const np = /* @__PURE__ */ qe($_, [["render", H_]]);
Gi(Gb);
const j_ = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: tp,
    IconClose: np,
    NcButton: Vn
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
      labelConfirm: _t("Confirm changes"),
      labelCancel: _t("Cancel changes")
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
}, V_ = ["placeholder"];
function G_(e, t, n, i, a, r) {
  const s = ze("IconArrowRight"), o = ze("NcButton"), l = ze("IconClose");
  return b(), C("div", {
    class: we(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = Ze((...d) => r.confirm && r.confirm(...d), ["prevent"])),
      onKeydown: t[2] || (t[2] = qt(Ze((...d) => r.cancel && r.cancel(...d), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ze(() => {
      }, ["stop", "prevent"]))
    }, [
      Ge(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.valueModel = d),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, V_), [
        [Ri, r.valueModel]
      ]),
      ve(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ze(r.confirm, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          ve(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      ve(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Ze(r.cancel, ["stop", "prevent"])
      }, {
        icon: ke(() => [
          ve(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const K_ = /* @__PURE__ */ qe(j_, [["render", G_], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function el() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Zc = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), ip = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), W_ = {
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
}, ap = {
  mixins: [W_],
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
      from: ip
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
}, q_ = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Qo
  },
  mixins: [ap],
  inject: {
    isInSemanticMenu: {
      from: Zc,
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
      mdiCheck: $b,
      mdiChevronRight: Fb
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
}, Y_ = ["role"], X_ = ["aria-label", "disabled", "title", "type"], Z_ = { class: "action-button__longtext-wrapper" }, J_ = {
  key: 0,
  class: "action-button__name"
}, Q_ = ["textContent"], e1 = {
  key: 2,
  class: "action-button__text"
}, t1 = ["textContent"], n1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function i1(e, t, n, i, a, r) {
  const s = ze("NcIconSvgWrapper");
  return b(), C("li", {
    class: we(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", Ft({
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
          class: we([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", Z_, [
        e.name ? (b(), C("strong", J_, p(e.name), 1)) : H("", !0),
        e.isLongText ? (b(), C("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, Q_)) : (b(), C("span", e1, p(e.text), 1)),
        n.description ? (b(), C("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, t1)) : H("", !0)
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
      }, null, 8, ["path"])) : r.isChecked === !1 ? (b(), C("span", n1)) : H("", !0),
      H("", !0)
    ], 16, X_)
  ], 10, Y_);
}
const a1 = /* @__PURE__ */ qe(q_, [["render", i1], ["__scopeId", "data-v-6c2daf4e"]]);
function r1(e, t = {}) {
  const n = c_();
  Yt(e, () => {
    di(t.disabled) || (di(e) ? n.pause() : n.unpause());
  }), us(() => {
    n.unpause();
  });
}
const s1 = ["top", "right", "bottom", "left"], Rd = ["start", "end"], Id = /* @__PURE__ */ s1.reduce((e, t) => e.concat(t, t + "-" + Rd[0], t + "-" + Rd[1]), []), ns = Math.min, pc = Math.max, o1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function rp(e, t, n) {
  return pc(e, ns(t, n));
}
function Sa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function bi(e) {
  return e.split("-")[0];
}
function Ln(e) {
  return e.split("-")[1];
}
function sp(e) {
  return e === "x" ? "y" : "x";
}
function Jc(e) {
  return e === "y" ? "height" : "width";
}
function ui(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Qc(e) {
  return sp(ui(e));
}
function op(e, t, n) {
  n === void 0 && (n = !1);
  const i = Ln(e), a = Qc(e), r = Jc(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = ao(s)), [s, ao(s)];
}
function l1(e) {
  const t = ao(e);
  return [io(e), t, io(t)];
}
function io(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Pd = ["left", "right"], Dd = ["right", "left"], c1 = ["top", "bottom"], u1 = ["bottom", "top"];
function d1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Dd : Pd : t ? Pd : Dd;
    case "left":
    case "right":
      return t ? c1 : u1;
    default:
      return [];
  }
}
function f1(e, t, n, i) {
  const a = Ln(e);
  let r = d1(bi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(io)))), r;
}
function ao(e) {
  const t = bi(e);
  return o1[t] + e.slice(t.length);
}
function h1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function lp(e) {
  return typeof e != "number" ? h1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Pr(e) {
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
function Md(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ui(t), s = Qc(t), o = Jc(s), l = bi(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, _ = i[o] / 2 - a[o] / 2;
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
  const O = Ln(t);
  return O && (T[s] += _ * (O === "end" ? 1 : -1) * (n && d ? -1 : 1)), T;
}
async function p1(e, t) {
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
  } = Sa(t, e), O = lp(T), x = o[_ ? h === "floating" ? "reference" : "floating" : h], P = Pr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(x))) == null || n ? x : x.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: l
  })), I = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, K = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(K)) && await (r.getScale == null ? void 0 : r.getScale(K)) || {
    x: 1,
    y: 1
  }, oe = Pr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: I,
    offsetParent: K,
    strategy: l
  }) : I);
  return {
    top: (P.top - oe.top + O.top) / $.y,
    bottom: (oe.bottom - P.bottom + O.bottom) / $.y,
    left: (P.left - oe.left + O.left) / $.x,
    right: (oe.right - P.right + O.right) / $.x
  };
}
const v1 = 50, g1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: p1
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = Md(d, i, l), _ = i, T = 0;
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
      y: $,
      data: oe,
      reset: ce
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
    u = K ?? u, h = $ ?? h, O[P] = {
      ...O[P],
      ...oe
    }, ce && T < v1 && (T++, typeof ce == "object" && (ce.placement && (_ = ce.placement), ce.rects && (d = ce.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ce.rects), {
      x: u,
      y: h
    } = Md(d, _, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: _,
    strategy: a,
    middlewareData: O
  };
}, m1 = (e) => ({
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
    const h = lp(u), _ = {
      x: n,
      y: i
    }, T = Qc(a), O = Jc(T), A = await s.getDimensions(d), x = T === "y", P = x ? "top" : "left", I = x ? "bottom" : "right", K = x ? "clientHeight" : "clientWidth", $ = r.reference[O] + r.reference[T] - _[T] - r.floating[O], oe = _[T] - r.reference[T], ce = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let te = ce ? ce[K] : 0;
    (!te || !await (s.isElement == null ? void 0 : s.isElement(ce))) && (te = o.floating[K] || r.floating[O]);
    const fe = $ / 2 - oe / 2, B = te / 2 - A[O] / 2 - 1, z = ns(h[P], B), ge = ns(h[I], B), ee = te - A[O] - ge, ne = te / 2 - A[O] / 2 + fe, D = rp(z, ne, ee), M = !l.arrow && Ln(a) != null && ne !== D && r.reference[O] / 2 - (ne < z ? z : ge) - A[O] / 2 < 0, X = M ? ne < z ? ne - z : ne - ee : 0;
    return {
      [T]: _[T] + X,
      data: {
        [T]: D,
        centerOffset: ne - D - X,
        ...M && {
          alignmentOffset: X
        }
      },
      reset: M
    };
  }
});
function b1(e, t, n) {
  return (e ? [...n.filter((a) => Ln(a) === e), ...n.filter((a) => Ln(a) !== e)] : n.filter((a) => bi(a) === a)).filter((a) => e ? Ln(a) === e || (t ? io(a) !== a : !1) : !0);
}
const y1 = function(e) {
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
        allowedPlacements: _ = Id,
        autoAlignment: T = !0,
        ...O
      } = Sa(e, t), A = h !== void 0 || _ === Id ? b1(h || null, T, _) : _, x = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, P = A[x];
      if (P == null)
        return {};
      if (o !== P)
        return {
          reset: {
            placement: A[0]
          }
        };
      const I = await l.detectOverflow(t, O), K = op(P, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), $ = [I[bi(P)], I[K[0]], I[K[1]]], oe = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: P,
        overflows: $
      }], ce = A[x + 1];
      if (ce)
        return {
          data: {
            index: x + 1,
            overflows: oe
          },
          reset: {
            placement: ce
          }
        };
      const te = oe.map((z) => {
        const ge = Ln(z.placement);
        return [z.placement, ge && u ? (
          // Check along the mainAxis and main crossAxis side.
          z.overflows.slice(0, 2).reduce((ee, ne) => ee + ne, 0)
        ) : (
          // Check only the mainAxis.
          z.overflows[0]
        ), z.overflows];
      }).sort((z, ge) => z[1] - ge[1]), B = ((a = te.filter((z) => z[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Ln(z[0]) ? 2 : 3
      ).every((ge) => ge <= 0))[0]) == null ? void 0 : a[0]) || te[0][0];
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
}, _1 = function(e) {
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
      } = Sa(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const P = bi(a), I = ui(o), K = bi(o) === o, $ = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), oe = _ || (K || !A ? [ao(o)] : l1(o)), ce = O !== "none";
      !_ && ce && oe.push(...f1(o, A, O, $));
      const te = [o, ...oe], fe = await l.detectOverflow(t, x), B = [];
      let z = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && B.push(fe[P]), h) {
        const D = op(a, s, $);
        B.push(fe[D[0]], fe[D[1]]);
      }
      if (z = [...z, {
        placement: a,
        overflows: B
      }], !B.every((D) => D <= 0)) {
        var ge, ee;
        const D = (((ge = r.flip) == null ? void 0 : ge.index) || 0) + 1, M = te[D];
        if (M && (!(h === "alignment" ? I !== ui(M) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        z.every((ie) => ui(ie.placement) === I ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: z
            },
            reset: {
              placement: M
            }
          };
        let X = (ee = z.filter((ae) => ae.overflows[0] <= 0).sort((ae, ie) => ae.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!X)
          switch (T) {
            case "bestFit": {
              var ne;
              const ae = (ne = z.filter((ie) => {
                if (ce) {
                  const ue = ui(ie.placement);
                  return ue === I || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ue === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((ue) => ue > 0).reduce((ue, he) => ue + he, 0)]).sort((ie, ue) => ie[1] - ue[1])[0]) == null ? void 0 : ne[0];
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
}, w1 = /* @__PURE__ */ new Set(["left", "top"]);
async function C1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = bi(n), o = Ln(n), l = ui(n) === "y", d = w1.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = Sa(t, e);
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
const S1 = function(e) {
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
      } = t, l = await C1(t, e);
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
}, E1 = function(e) {
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
              y: $
            } = I;
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
      }, h = await r.detectOverflow(t, d), _ = ui(a), T = sp(_);
      let O = u[T], A = u[_];
      const x = (I, K) => rp(K + h[I === "y" ? "top" : "left"], K, K - h[I === "y" ? "bottom" : "right"]);
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
}, T1 = function(e) {
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
      } = Sa(e, t), l = await a.detectOverflow(t, o), d = bi(n), u = Ln(n), h = ui(n) === "y", {
        width: _,
        height: T
      } = i.floating;
      let O, A;
      d === "top" || d === "bottom" ? (O = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, O = u === "end" ? "top" : "bottom");
      const x = T - l.top - l.bottom, P = _ - l.left - l.right, I = ns(T - l[O], x), K = ns(_ - l[A], P), $ = t.middlewareData.shift, oe = !$;
      let ce = I, te = K;
      $ != null && $.enabled.x && (te = P), $ != null && $.enabled.y && (ce = x), oe && !u && (h ? te = _ - 2 * pc(l.left, l.right) : ce = T - 2 * pc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: te,
        availableHeight: ce
      });
      const fe = await a.getDimensions(r.floating);
      return _ !== fe.width || T !== fe.height ? {
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
function Gn(e) {
  return gn(e).getComputedStyle(e);
}
const $d = Math.min, Dr = Math.max, ro = Math.round;
function cp(e) {
  const t = Gn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = ro(n) !== a || ro(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function ji(e) {
  return dp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Es;
function up() {
  if (Es) return Es;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Es = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Es) : navigator.userAgent;
}
function Kn(e) {
  return e instanceof gn(e).HTMLElement;
}
function Fi(e) {
  return e instanceof gn(e).Element;
}
function dp(e) {
  return e instanceof gn(e).Node;
}
function Fd(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof gn(e).ShadowRoot || e instanceof ShadowRoot;
}
function tl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Gn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function A1(e) {
  return ["table", "td", "th"].includes(ji(e));
}
function vc(e) {
  const t = /firefox/i.test(up()), n = Gn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function fp() {
  return !/^((?!chrome|android).)*safari/i.test(up());
}
function eu(e) {
  return ["html", "body", "#document"].includes(ji(e));
}
function hp(e) {
  return Fi(e) ? e : e.contextElement;
}
const pp = { x: 1, y: 1 };
function Za(e) {
  const t = hp(e);
  if (!Kn(t)) return pp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = cp(t);
  let s = (r ? ro(n.width) : n.width) / i, o = (r ? ro(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function is(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = hp(e);
  let l = pp;
  t && (i ? Fi(i) && (l = Za(i)) : l = Za(e));
  const d = o ? gn(o) : window, u = !fp() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, _ = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, T = s.width / l.x, O = s.height / l.y;
  if (o) {
    const A = gn(o), x = i && Fi(i) ? gn(i) : i;
    let P = A.frameElement;
    for (; P && i && x !== A; ) {
      const I = Za(P), K = P.getBoundingClientRect(), $ = getComputedStyle(P);
      K.x += (P.clientLeft + parseFloat($.paddingLeft)) * I.x, K.y += (P.clientTop + parseFloat($.paddingTop)) * I.y, h *= I.x, _ *= I.y, T *= I.x, O *= I.y, h += K.x, _ += K.y, P = gn(P).frameElement;
    }
  }
  return { width: T, height: O, top: _, right: h + T, bottom: _ + O, left: h, x: h, y: _ };
}
function zi(e) {
  return ((dp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function nl(e) {
  return Fi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function vp(e) {
  return is(zi(e)).left + nl(e).scrollLeft;
}
function as(e) {
  if (ji(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Fd(e) && e.host || zi(e);
  return Fd(t) ? t.host : t;
}
function gp(e) {
  const t = as(e);
  return eu(t) ? t.ownerDocument.body : Kn(t) && tl(t) ? t : gp(t);
}
function so(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = gp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = gn(i);
  return a ? t.concat(r, r.visualViewport || [], tl(i) ? i : []) : t.concat(i, so(i));
}
function zd(e, t, n) {
  return t === "viewport" ? Pr((function(i, a) {
    const r = gn(i), s = zi(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const _ = fp();
      (_ || !_ && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : Fi(t) ? Pr((function(i, a) {
    const r = is(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Kn(i) ? Za(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Pr((function(i) {
    const a = zi(i), r = nl(i), s = i.ownerDocument.body, o = Dr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Dr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + vp(i);
    const u = -r.scrollTop;
    return Gn(s).direction === "rtl" && (d += Dr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })(zi(e)));
}
function Ud(e) {
  return Kn(e) && Gn(e).position !== "fixed" ? e.offsetParent : null;
}
function Bd(e) {
  const t = gn(e);
  let n = Ud(e);
  for (; n && A1(n) && Gn(n).position === "static"; ) n = Ud(n);
  return n && (ji(n) === "html" || ji(n) === "body" && Gn(n).position === "static" && !vc(n)) ? t : n || (function(i) {
    let a = as(i);
    for (; Kn(a) && !eu(a); ) {
      if (vc(a)) return a;
      a = as(a);
    }
    return null;
  })(e) || t;
}
function k1(e, t, n) {
  const i = Kn(t), a = zi(t), r = is(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((ji(t) !== "body" || tl(a)) && (s = nl(t)), Kn(t)) {
    const l = is(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = vp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const O1 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let _ = so(d).filter(((x) => Fi(x) && ji(x) !== "body")), T = null;
    const O = Gn(d).position === "fixed";
    let A = O ? as(d) : d;
    for (; Fi(A) && !eu(A); ) {
      const x = Gn(A), P = vc(A);
      (O ? P || T : P || x.position !== "static" || !T || !["absolute", "fixed"].includes(T.position)) ? T = x : _ = _.filter(((I) => I !== A)), A = as(A);
    }
    return u.set(d, _), _;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = zd(t, u, a);
    return d.top = Dr(h.top, d.top), d.right = $d(h.right, d.right), d.bottom = $d(h.bottom, d.bottom), d.left = Dr(h.left, d.left), d;
  }), zd(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Kn(n), r = zi(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((ji(n) !== "body" || tl(r)) && (s = nl(n)), Kn(n))) {
    const d = is(n);
    o = Za(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Fi, getDimensions: function(e) {
  return Kn(e) ? cp(e) : e.getBoundingClientRect();
}, getOffsetParent: Bd, getDocumentElement: zi, getScale: Za, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Bd, r = this.getDimensions;
  return { reference: k1(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Gn(e).direction === "rtl" }, N1 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: O1, ...n }, r = { ...a.platform, _c: i };
  return g1(e, t, { ...a, platform: r });
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
function gc(e, t) {
  let n = Ui.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Ui.themes[n.$extend] || {} : (n = null, i = Ui[t]) : n = null;
  while (n);
  return i;
}
function x1(e) {
  const t = [e];
  let n = Ui.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Ui.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Hd(e) {
  const t = [e];
  let n = Ui.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Ui.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let rs = !1;
if (typeof window < "u") {
  rs = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        rs = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let mp = !1;
typeof window < "u" && typeof navigator < "u" && (mp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const L1 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), jd = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Vd = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Gd(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Bl() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Nn = [];
let oa = null;
const Kd = {};
function Wd(e) {
  let t = Kd[e];
  return t || (t = Kd[e] = []), t;
}
let mc = function() {
};
typeof window < "u" && (mc = window.Element);
function Fe(e) {
  return function(t) {
    return gc(t.theme, e);
  };
}
const Hl = "__floating-vue__popper", bp = () => /* @__PURE__ */ Ot({
  name: "VPopper",
  provide() {
    return {
      [Hl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Hl]: { default: null }
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
      validator: (e) => L1.includes(e)
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
      type: [String, Object, mc, Boolean],
      default: Fe("container")
    },
    boundary: {
      type: [String, mc],
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
      return (e = this[Hl]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(S1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(y1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(E1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(_1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(m1({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(T1({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await N1(this.$_referenceNode, this.$_popperNode, e);
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
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Bl(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
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
        for (let n = 0; n < Nn.length; n++)
          t = Nn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Nn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Hd(this.theme))
        Wd(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Bl(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Gd(Nn, this), Nn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Hd(this.theme)) {
        const i = Wd(n);
        Gd(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      oa === this && (oa = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Bl(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, jd, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], jd, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Vd, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Vd, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, rs ? {
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
      if (Mr >= e.left && Mr <= e.right && $r >= e.top && $r <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Mr - Ii, i = $r - Pi, a = t.left + t.width / 2 - Ii + (t.top + t.height / 2) - Pi + t.width + t.height, r = Ii + n * a, s = Pi + i * a;
        return Ts(Ii, Pi, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Ts(Ii, Pi, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Ts(Ii, Pi, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Ts(Ii, Pi, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (mp) {
    const e = rs ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => qd(t), e), document.addEventListener("touchend", (t) => Yd(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => qd(e), !0), window.addEventListener("click", (e) => Yd(e, !1), !0);
  window.addEventListener("resize", P1);
}
function qd(e, t) {
  for (let n = 0; n < Nn.length; n++) {
    const i = Nn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Yd(e, t) {
  R1(e, t);
}
function R1(e, t) {
  const n = {};
  for (let i = Nn.length - 1; i >= 0; i--) {
    const a = Nn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Xd(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && Xd(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Xd(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || I1(e, n) && !t;
}
function I1(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function P1() {
  for (let e = 0; e < Nn.length; e++)
    Nn[e].$_computePosition();
}
let Ii = 0, Pi = 0, Mr = 0, $r = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ii = Mr, Pi = $r, Mr = e.clientX, $r = e.clientY;
}, rs ? {
  passive: !0
} : void 0);
function Ts(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const D1 = {
  extends: bp()
}, tu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function M1(e, t, n, i, a, r) {
  return b(), C("div", {
    ref: "reference",
    class: we(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Le(e.$slots, "default", Ps(Zr(e.slotData)))
  ], 2);
}
const $1 = /* @__PURE__ */ tu(D1, [["render", M1]]);
function F1() {
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
function bc() {
  bc.init || (bc.init = !0, Rs = F1() !== -1);
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
    bc(), fi(() => {
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
const z1 = /* @__PURE__ */ Fv();
Mv("data-v-b329ee4c");
const U1 = {
  class: "resize-observer",
  tabindex: "-1"
};
$v();
const B1 = /* @__PURE__ */ z1((e, t, n, i, a, r) => (b(), $e("div", U1)));
il.render = B1;
il.__scopeId = "data-v-b329ee4c";
il.__file = "src/components/ResizeObserver.vue";
const yp = (e = "theme") => ({
  computed: {
    themeClass() {
      return x1(this[e]);
    }
  }
}), H1 = /* @__PURE__ */ Ot({
  name: "VPopperContent",
  components: {
    ResizeObserver: il
  },
  mixins: [
    yp()
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
}), j1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], V1 = {
  ref: "inner",
  class: "v-popper__inner"
}, G1 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), K1 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), W1 = [
  G1,
  K1
];
function q1(e, t, n, i, a, r) {
  const s = ze("ResizeObserver");
  return b(), C("div", {
    id: e.popperId,
    ref: "popover",
    class: we(["v-popper__popper", [
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
    onKeyup: t[2] || (t[2] = qt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
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
      c("div", V1, [
        e.mounted ? (b(), C(le, { key: 0 }, [
          c("div", null, [
            Le(e.$slots, "default")
          ]),
          e.handleResize ? (b(), $e(s, {
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
      }, W1, 4)
    ], 4)
  ], 46, j1);
}
const _p = /* @__PURE__ */ tu(H1, [["render", q1]]), wp = {
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
let yc = function() {
};
typeof window < "u" && (yc = window.Element);
const Y1 = /* @__PURE__ */ Ot({
  name: "VPopperWrapper",
  components: {
    Popper: $1,
    PopperContent: _p
  },
  mixins: [
    wp,
    yp("finalTheme")
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
      type: [String, Object, yc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, yc],
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
function X1(e, t, n, i, a, r) {
  const s = ze("PopperContent"), o = ze("Popper");
  return b(), $e(o, Ft({ ref: "popper" }, e.$props, {
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
      Le(e.$slots, "default", {
        shown: d,
        show: T,
        hide: O
      }),
      ve(s, {
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
          Le(e.$slots, "popper", {
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
const nu = /* @__PURE__ */ tu(Y1, [["render", X1]]), Z1 = {
  ...nu,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...nu
});
({
  ...nu
});
bp();
const Zd = Ui, J1 = Z1, Q1 = /* @__PURE__ */ Ot({
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
}), e0 = "_ncPopover_qgtYg", t0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: e0
}, Cp = "nc-popover-9";
Zd.themes[Cp] = structuredClone(Zd.themes.dropdown);
const n0 = {
  name: "NcPopover",
  components: {
    Dropdown: J1,
    NcPopoverTriggerProvider: Q1
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
      theme: Cp
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
      return this.placement === "start" ? dc ? "right" : "left" : this.placement === "end" ? dc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Xc(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: ts(),
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
function i0(e, t, n, i, a, r) {
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
    popper: ke((l) => [
      Le(e.$slots, "default", Ps(Zr(l)))
    ]),
    default: ke(() => [
      ve(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: ke((l) => [
          Le(e.$slots, "trigger", Ps(Zr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const a0 = {
  $style: t0
}, Jd = /* @__PURE__ */ qe(n0, [["render", i0], ["__cssModules", a0]]), r0 = {
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
}, s0 = ["aria-hidden", "aria-label"], o0 = ["fill", "width", "height"], l0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, c0 = { key: 0 };
function u0(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
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
      c("path", l0, [
        n.title ? (b(), C("title", c0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, o0))
  ], 16, s0);
}
const d0 = /* @__PURE__ */ qe(r0, [["render", u0]]);
Gi(Vb);
function iu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === At)
        return !1;
      if (n.type === le && !iu(n.children))
        return !1;
      if (n.type === ds && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const f0 = ".focusable", h0 = {
  name: "NcActions",
  components: {
    NcButton: Vn,
    NcPopover: Jd
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
      [Zc]: Y(() => this.actionsMenuSemanticType === "menu"),
      [ip]: this.closeMenu
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
      default: _t("Actions")
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
    r1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(f0);
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
      const O = T?.props?.icon, A = T?.children?.icon?.()?.[0] ?? (this.isIconUrl(O) ? Kt("img", { class: "action-item__menutoggle__icon", src: O, alt: "" }) : Kt("span", { class: ["icon", O] })), x = T?.children?.default?.()?.[0]?.children?.trim(), P = this.forceName ? x : "";
      let I = T?.props?.title;
      this.forceName || I || (I = x);
      const K = { ...T?.props ?? {} }, $ = ["submit", "reset"].includes(K.type) ? K.modelValue : "button";
      return delete K.modelValue, delete K.type, Kt(
        Vn,
        Ft(
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
            type: $,
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
      const O = iu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Kt("span", { class: ["icon", this.defaultIcon] }) : Kt(d0, { size: 20 }), A = `${this.randomId}-trigger`;
      return Kt(
        Jd,
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
          trigger: () => Kt(Vn, {
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
          default: () => Kt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Kt("ul", {
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
    }), i.length > 0 && this.inline > 0 ? Kt(
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
        a.length > 0 ? Kt(
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
    ) : Kt(
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
}, oo = /* @__PURE__ */ qe(h0, [["__scopeId", "data-v-7206c1f1"]]), p0 = ["aria-label"], v0 = ["width", "height"], g0 = ["fill"], m0 = ["fill"], b0 = { key: 0 }, y0 = /* @__PURE__ */ Ot({
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
        }, null, 8, g0),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (b(), C("title", b0, p(e.name), 1)) : H("", !0)
        ], 8, m0)
      ], 8, v0))
    ], 8, p0));
  }
}), Sp = /* @__PURE__ */ qe(y0, [["__scopeId", "data-v-cf399190"]]), _c = /* @__PURE__ */ Ot({
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
}), _0 = {
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
}, w0 = ["aria-hidden", "aria-label"], C0 = ["fill", "width", "height"], S0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, E0 = { key: 0 };
function T0(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
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
      c("path", S0, [
        n.title ? (b(), C("title", E0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, C0))
  ], 16, w0);
}
const A0 = /* @__PURE__ */ qe(_0, [["render", T0]]), k0 = {
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
}, O0 = ["aria-hidden", "aria-label"], N0 = ["fill", "width", "height"], x0 = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, L0 = { key: 0 };
function R0(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
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
      c("path", x0, [
        n.title ? (b(), C("title", L0, p(n.title), 1)) : H("", !0)
      ])
    ], 8, N0))
  ], 16, O0);
}
const I0 = /* @__PURE__ */ qe(k0, [["render", R0]]);
Gi(qb);
const P0 = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Vn,
    ChevronDown: S_,
    ChevronUp: x_
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
      return this.open ? _t("Collapse menu") : _t("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function D0(e, t, n, i, a, r) {
  const s = ze("ChevronUp"), o = ze("ChevronDown"), l = ze("NcButton");
  return b(), $e(l, {
    class: we(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: ke(() => [
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
const M0 = /* @__PURE__ */ qe(P0, [["render", D0], ["__scopeId", "data-v-cfbd3794"]]);
Gi(Yb, Jb);
const $0 = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: oo,
    NcActionButton: a1,
    NcAppNavigationIconCollapsible: M0,
    NcInputConfirmCancel: K_,
    NcLoadingIcon: Sp,
    NcVNodes: _c,
    Pencil: A0,
    Undo: I0
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: Zh, default: null }
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
      isMobile: hs(),
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
      return this.editLabel ? this.editLabel : _t("Edit item");
    },
    undoButtonAriaLabel() {
      return _t("Undo changes");
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
}, F0 = ["id"], z0 = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], U0 = {
  key: 0,
  class: "editingContainer"
}, B0 = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, H0 = { class: "app-navigation-entry__deleted-description" }, j0 = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, V0 = {
  key: 0,
  class: "app-navigation-entry__children"
};
function G0(e, t, n, i, a, r) {
  const s = ze("NcLoadingIcon"), o = ze("NcInputConfirmCancel"), l = ze("Pencil"), d = ze("NcActionButton"), u = ze("Undo"), h = ze("NcActions"), _ = ze("NcAppNavigationIconCollapsible");
  return b(), C("li", {
    id: n.id,
    class: we([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (b(), $e(Uc(r.isRouterLink ? "router-link" : "NcVNodes"), Ps(Zr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: ke(({ href: T, navigate: O, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: we(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...x) => r.requestHighlight && r.requestHighlight(...x)),
          onFocusin: t[5] || (t[5] = (...x) => r.requestHighlight && r.requestHighlight(...x))
        }, [
          n.undo ? H("", !0) : (b(), C("a", {
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
            onKeydown: t[3] || (t[3] = qt(Ze((...x) => r.handleTab && r.handleTab(...x), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: we(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (b(), $e(s, { key: 0 })) : Le(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: we(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (b(), C("div", U0, [
              ve(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (x) => a.editingValue = x),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : H("", !0)
          ], 40, z0)),
          n.undo ? (b(), C("div", B0, [
            c("div", H0, p(n.name), 1)
          ])) : H("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (b(), C("div", {
            key: 2,
            class: we(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (b(), C("div", j0, [
              Le(e.$slots, "counter", {}, void 0, !0)
            ])) : H("", !0),
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
              icon: ke(() => [
                Le(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: ke(() => [
                n.editable && !a.editingActive ? (b(), $e(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: ke(() => [
                    ve(l, { size: 20 })
                  ]),
                  default: ke(() => [
                    Ae(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                n.undo ? (b(), $e(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: ke(() => [
                    ve(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : H("", !0),
                Le(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : H("", !0)
          ], 2)) : H("", !0),
          n.allowCollapse && e.$slots.default ? (b(), $e(_, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Ze(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : H("", !0),
          Le(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (b(), C("ul", V0, [
      Le(e.$slots, "default", {}, void 0, !0)
    ])) : H("", !0)
  ], 10, F0);
}
const Qd = /* @__PURE__ */ qe($0, [["render", G0], ["__scopeId", "data-v-01bef41b"]]), jl = /* @__PURE__ */ new WeakMap(), K0 = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Ed(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Ed(e, a, Object.assign({ capture: n }, r));
    }
    jl.set(e, i);
  },
  unmounted(e) {
    const t = jl.get(e);
    t && typeof t == "function" ? t() : t?.stop(), jl.delete(e);
  }
}, W0 = {
  mounted(e) {
    e.focus();
  }
}, q0 = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Y0 = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", wc = "numeric", Cc = "ascii", Sc = "alpha", Fr = "asciinumeric", kr = "alphanumeric", Ec = "domain", Ep = "emoji", X0 = "scheme", Z0 = "slashscheme", Vl = "whitespace";
function J0(e, t) {
  return e in t || (t[e] = []), t[e];
}
function va(e, t, n) {
  t[wc] && (t[Fr] = !0, t[kr] = !0), t[Cc] && (t[Fr] = !0, t[Sc] = !0), t[Fr] && (t[kr] = !0), t[Sc] && (t[kr] = !0), t[kr] && (t[Ec] = !0), t[Ep] && (t[Ec] = !0);
  for (const i in t) {
    const a = J0(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function Q0(e, t) {
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
    return t && t.j ? a = t : (a = new rn(t), n && i && va(t, n, i)), this.jr.push([e, a]), a;
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
          const l = Object.assign(Q0(s.t, i), n);
          va(r, l, i);
        } else n && va(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ie = (e, t, n, i, a) => e.ta(t, n, i, a), st = (e, t, n, i, a) => e.tr(t, n, i, a), ef = (e, t, n, i, a) => e.ts(t, n, i, a), Q = (e, t, n, i, a) => e.tt(t, n, i, a), ai = "WORD", Tc = "UWORD", Tp = "ASCIINUMERICAL", Ap = "ALPHANUMERICAL", ss = "LOCALHOST", Ac = "TLD", kc = "UTLD", Is = "SCHEME", ja = "SLASH_SCHEME", au = "NUM", Oc = "WS", ru = "NL", zr = "OPENBRACE", Ur = "CLOSEBRACE", lo = "OPENBRACKET", co = "CLOSEBRACKET", uo = "OPENPAREN", fo = "CLOSEPAREN", ho = "OPENANGLEBRACKET", po = "CLOSEANGLEBRACKET", vo = "FULLWIDTHLEFTPAREN", go = "FULLWIDTHRIGHTPAREN", mo = "LEFTCORNERBRACKET", bo = "RIGHTCORNERBRACKET", yo = "LEFTWHITECORNERBRACKET", _o = "RIGHTWHITECORNERBRACKET", wo = "FULLWIDTHLESSTHAN", Co = "FULLWIDTHGREATERTHAN", So = "AMPERSAND", Eo = "APOSTROPHE", To = "ASTERISK", Mi = "AT", Ao = "BACKSLASH", ko = "BACKTICK", Oo = "CARET", ga = "COLON", su = "COMMA", No = "DOLLAR", Un = "DOT", xo = "EQUALS", ou = "EXCLAMATION", hn = "HYPHEN", Br = "PERCENT", Lo = "PIPE", Ro = "PLUS", Io = "POUND", Hr = "QUERY", lu = "QUOTE", kp = "FULLWIDTHMIDDLEDOT", cu = "SEMI", Bn = "SLASH", jr = "TILDE", Po = "UNDERSCORE", Op = "EMOJI", Do = "SYM";
var Np = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Ap,
  AMPERSAND: So,
  APOSTROPHE: Eo,
  ASCIINUMERICAL: Tp,
  ASTERISK: To,
  AT: Mi,
  BACKSLASH: Ao,
  BACKTICK: ko,
  CARET: Oo,
  CLOSEANGLEBRACKET: po,
  CLOSEBRACE: Ur,
  CLOSEBRACKET: co,
  CLOSEPAREN: fo,
  COLON: ga,
  COMMA: su,
  DOLLAR: No,
  DOT: Un,
  EMOJI: Op,
  EQUALS: xo,
  EXCLAMATION: ou,
  FULLWIDTHGREATERTHAN: Co,
  FULLWIDTHLEFTPAREN: vo,
  FULLWIDTHLESSTHAN: wo,
  FULLWIDTHMIDDLEDOT: kp,
  FULLWIDTHRIGHTPAREN: go,
  HYPHEN: hn,
  LEFTCORNERBRACKET: mo,
  LEFTWHITECORNERBRACKET: yo,
  LOCALHOST: ss,
  NL: ru,
  NUM: au,
  OPENANGLEBRACKET: ho,
  OPENBRACE: zr,
  OPENBRACKET: lo,
  OPENPAREN: uo,
  PERCENT: Br,
  PIPE: Lo,
  PLUS: Ro,
  POUND: Io,
  QUERY: Hr,
  QUOTE: lu,
  RIGHTCORNERBRACKET: bo,
  RIGHTWHITECORNERBRACKET: _o,
  SCHEME: Is,
  SEMI: cu,
  SLASH: Bn,
  SLASH_SCHEME: ja,
  SYM: Do,
  TILDE: jr,
  TLD: Ac,
  UNDERSCORE: Po,
  UTLD: kc,
  UWORD: Tc,
  WORD: ai,
  WS: Oc
});
const ni = /[a-z]/, wr = new RegExp("\\p{L}", "u"), Gl = new RegExp("\\p{Emoji}", "u"), ii = /\d/, Kl = /\s/, tf = "\r", Wl = `
`, ew = "️", tw = "‍", ql = "￼";
let As = null, ks = null;
function nw(e = []) {
  const t = {};
  rn.groups = t;
  const n = new rn();
  As == null && (As = nf(q0)), ks == null && (ks = nf(Y0)), Q(n, "'", Eo), Q(n, "{", zr), Q(n, "}", Ur), Q(n, "[", lo), Q(n, "]", co), Q(n, "(", uo), Q(n, ")", fo), Q(n, "<", ho), Q(n, ">", po), Q(n, "（", vo), Q(n, "）", go), Q(n, "「", mo), Q(n, "」", bo), Q(n, "『", yo), Q(n, "』", _o), Q(n, "＜", wo), Q(n, "＞", Co), Q(n, "&", So), Q(n, "*", To), Q(n, "@", Mi), Q(n, "`", ko), Q(n, "^", Oo), Q(n, ":", ga), Q(n, ",", su), Q(n, "$", No), Q(n, ".", Un), Q(n, "=", xo), Q(n, "!", ou), Q(n, "-", hn), Q(n, "%", Br), Q(n, "|", Lo), Q(n, "+", Ro), Q(n, "#", Io), Q(n, "?", Hr), Q(n, '"', lu), Q(n, "/", Bn), Q(n, ";", cu), Q(n, "~", jr), Q(n, "_", Po), Q(n, "\\", Ao), Q(n, "・", kp);
  const i = st(n, ii, au, {
    [wc]: !0
  });
  st(i, ii, i);
  const a = st(i, ni, Tp, {
    [Fr]: !0
  }), r = st(i, wr, Ap, {
    [kr]: !0
  }), s = st(n, ni, ai, {
    [Cc]: !0
  });
  st(s, ii, a), st(s, ni, s), st(a, ii, a), st(a, ni, a);
  const o = st(n, wr, Tc, {
    [Sc]: !0
  });
  st(o, ni), st(o, ii, r), st(o, wr, o), st(r, ii, r), st(r, ni), st(r, wr, r);
  const l = Q(n, Wl, ru, {
    [Vl]: !0
  }), d = Q(n, tf, Oc, {
    [Vl]: !0
  }), u = st(n, Kl, Oc, {
    [Vl]: !0
  });
  Q(n, ql, u), Q(d, Wl, l), Q(d, ql, u), st(d, Kl, u), Q(u, tf), Q(u, Wl), st(u, Kl, u), Q(u, ql, u);
  const h = st(n, Gl, Op, {
    [Ep]: !0
  });
  Q(h, "#"), st(h, Gl, h), Q(h, ew, h);
  const _ = Q(h, tw);
  Q(_, "#"), st(_, Gl, h);
  const T = [[ni, s], [ii, a]], O = [[ni, null], [wr, o], [ii, r]];
  for (let A = 0; A < As.length; A++)
    xi(n, As[A], Ac, ai, T);
  for (let A = 0; A < ks.length; A++)
    xi(n, ks[A], kc, Tc, O);
  va(Ac, {
    tld: !0,
    ascii: !0
  }, t), va(kc, {
    utld: !0,
    alpha: !0
  }, t), xi(n, "file", Is, ai, T), xi(n, "mailto", Is, ai, T), xi(n, "http", ja, ai, T), xi(n, "https", ja, ai, T), xi(n, "ftp", ja, ai, T), xi(n, "ftps", ja, ai, T), va(Is, {
    scheme: !0,
    ascii: !0
  }, t), va(ja, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, x) => A[0] > x[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const x = e[A][0], I = e[A][1] ? {
      [X0]: !0
    } : {
      [Z0]: !0
    };
    x.indexOf("-") >= 0 ? I[Ec] = !0 : ni.test(x) ? ii.test(x) ? I[Fr] = !0 : I[Cc] = !0 : I[wc] = !0, ef(n, x, x, I);
  }
  return ef(n, "localhost", ss, {
    ascii: !0
  }), n.jd = new rn(Do), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Np)
  };
}
function xp(e, t) {
  const n = iw(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
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
function iw(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function xi(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new rn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new rn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function nf(e) {
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
const os = {
  defaultProtocol: "http",
  events: null,
  format: af,
  formatHref: af,
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
function uu(e, t = null) {
  let n = Object.assign({}, os);
  e && (n = Object.assign(n, e instanceof uu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
uu.prototype = {
  o: os,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : os[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function af(e) {
  return e;
}
function Lp(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
Lp.prototype = {
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
  toObject(e = os.defaultProtocol) {
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
  class n extends Lp {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const aw = al("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), rf = al("text"), rw = al("nl"), Os = al("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = os.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== ss && e[1].t === ga;
  }
}), fn = (e) => new rn(e);
function sw({
  groups: e
}) {
  const t = e.domain.concat([So, To, Mi, Ao, ko, Oo, No, xo, hn, au, Br, Lo, Ro, Io, Bn, Do, jr, Po]), n = [Eo, ga, su, Un, ou, Br, Hr, lu, cu, ho, po, zr, Ur, co, lo, uo, fo, vo, go, mo, bo, yo, _o, wo, Co], i = [So, Eo, To, Ao, ko, Oo, No, xo, hn, zr, Ur, Br, Lo, Ro, Io, Hr, Bn, Do, jr, Po], a = fn(), r = Q(a, jr);
  Ie(r, i, r), Ie(r, e.domain, r);
  const s = fn(), o = fn(), l = fn();
  Ie(a, e.domain, s), Ie(a, e.scheme, o), Ie(a, e.slashscheme, l), Ie(s, i, r), Ie(s, e.domain, s);
  const d = Q(s, Mi);
  Q(r, Mi, d), Q(o, Mi, d), Q(l, Mi, d);
  const u = Q(r, Un);
  Ie(u, i, r), Ie(u, e.domain, r);
  const h = fn();
  Ie(d, e.domain, h), Ie(h, e.domain, h);
  const _ = Q(h, Un);
  Ie(_, e.domain, h);
  const T = fn(aw);
  Ie(_, e.tld, T), Ie(_, e.utld, T), Q(d, ss, T);
  const O = Q(h, hn);
  Q(O, hn, O), Ie(O, e.domain, h), Ie(T, e.domain, h), Q(T, Un, _), Q(T, hn, O);
  const A = Q(s, hn), x = Q(s, Un);
  Q(A, hn, A), Ie(A, e.domain, s), Ie(x, i, r), Ie(x, e.domain, s);
  const P = fn(Os);
  Ie(x, e.tld, P), Ie(x, e.utld, P), Ie(P, e.domain, s), Ie(P, i, r), Q(P, Un, x), Q(P, hn, A), Q(P, Mi, d);
  const I = Q(P, ga), K = fn(Os);
  Ie(I, e.numeric, K);
  const $ = fn(Os), oe = fn();
  Ie($, t, $), Ie($, n, oe), Ie(oe, t, $), Ie(oe, n, oe), Q(P, Bn, $), Q(K, Bn, $);
  const ce = Q(o, ga), te = Q(l, ga), fe = Q(te, Bn), B = Q(fe, Bn);
  Ie(o, e.domain, s), Q(o, Un, x), Q(o, hn, A), Ie(l, e.domain, s), Q(l, Un, x), Q(l, hn, A), Ie(ce, e.domain, $), Q(ce, Bn, $), Q(ce, Hr, $), Ie(B, e.domain, $), Ie(B, t, $), Q(B, Bn, $);
  const z = [
    [zr, Ur],
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
  for (let ge = 0; ge < z.length; ge++) {
    const [ee, ne] = z[ge], D = Q($, ee);
    Q(oe, ee, D);
    const M = fn(Os);
    Ie(D, t, M);
    const X = fn();
    Ie(D, n, X), Q(D, ne, $), Ie(M, t, M), Ie(M, n, X), Ie(X, t, M), Ie(X, n, X), Q(M, ne, $), Q(X, ne, $);
  }
  return Q(a, ss, P), Q(a, ru, rw), {
    start: a,
    tokens: Np
  };
}
function ow(e, t, n) {
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
      s.length > 0 && (r.push(Yl(rf, t, s)), s = []), a -= _, u -= _;
      const T = h.t, O = n.slice(a - u, a);
      r.push(Yl(T, t, O));
    }
  }
  return s.length > 0 && r.push(Yl(rf, t, s)), r;
}
function Yl(e, t, n) {
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
function lw() {
  Lt.scanner = nw(Lt.customSchemes);
  for (let e = 0; e < Lt.tokenQueue.length; e++)
    Lt.tokenQueue[e][1]({
      scanner: Lt.scanner
    });
  Lt.parser = sw(Lt.scanner.tokens);
  for (let e = 0; e < Lt.pluginQueue.length; e++)
    Lt.pluginQueue[e][1]({
      scanner: Lt.scanner,
      parser: Lt.parser
    });
  return Lt.initialized = !0, Lt;
}
function Rp(e) {
  return Lt.initialized || lw(), ow(Lt.parser.start, e, xp(Lt.scanner.start, e));
}
Rp.scan = xp;
function cw(e) {
  const t = new uu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, fw), n = Rp(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Ys(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function uw(e) {
  return e.replace(/"/g, "&quot;");
}
function dw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${uw(i)}"`);
  }
  return t.join(" ");
}
function fw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${dw(t)}>${Ys(n)}</${e}>`;
}
const hw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = cw(t.text));
}, pw = ["title"], vw = /* @__PURE__ */ Ot({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Pt("NcAppSidebar:header:ref");
    return (n, i) => Ge((b(), C("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Ae(p(e.name), 1)
    ], 8, pw)), [
      [g(hw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), gw = ["aria-labelledby"], mw = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, bw = ["id"], yw = {
  key: 2,
  class: "empty-content__description"
}, _w = {
  key: 3,
  class: "empty-content__action"
}, ww = /* @__PURE__ */ Ot({
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
      n.$slots.icon ? (b(), C("div", mw, [
        Le(n.$slots, "icon", {}, void 0, !0)
      ])) : H("", !0),
      e.name !== "" || n.$slots.name ? (b(), C("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Le(n.$slots, "name", {}, () => [
          Ae(p(e.name), 1)
        ], !0)
      ], 8, bw)) : H("", !0),
      e.description !== "" || n.$slots.description ? (b(), C("p", yw, [
        Le(n.$slots, "description", {}, () => [
          Ae(p(e.description), 1)
        ], !0)
      ])) : H("", !0),
      n.$slots.action ? (b(), C("div", _w, [
        Le(n.$slots, "action", {}, void 0, !0)
      ])) : H("", !0)
    ], 8, gw));
  }
}), Cw = /* @__PURE__ */ qe(ww, [["__scopeId", "data-v-8609a4c1"]]), Sw = {
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
}, Ew = ["aria-hidden", "aria-label"], Tw = ["fill", "width", "height"], Aw = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, kw = { key: 0 };
function Ow(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
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
      c("path", Aw, [
        n.title ? (b(), C("title", kw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, Tw))
  ], 16, Ew);
}
const Nw = /* @__PURE__ */ qe(Sw, [["render", Ow]]), xw = {
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
}, Lw = ["aria-hidden", "aria-label"], Rw = ["fill", "width", "height"], Iw = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, Pw = { key: 0 };
function Dw(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
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
      c("path", Iw, [
        n.title ? (b(), C("title", Pw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, Rw))
  ], 16, Lw);
}
const Mw = /* @__PURE__ */ qe(xw, [["render", Dw]]), $w = {
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
}, Fw = ["aria-hidden", "aria-label"], zw = ["fill", "width", "height"], Uw = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, Bw = { key: 0 };
function Hw(e, t, n, i, a, r) {
  return b(), C("span", Ft(e.$attrs, {
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
      c("path", Uw, [
        n.title ? (b(), C("title", Bw, p(n.title), 1)) : H("", !0)
      ])
    ], 8, zw))
  ], 16, Fw);
}
const jw = /* @__PURE__ */ qe($w, [["render", Hw]]), Vw = ["aria-selected", "tabindex"], Gw = /* @__PURE__ */ Ot({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ cg({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = eh(e, "selected"), n = /* @__PURE__ */ ct(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (b(), C("button", {
      class: we(["button-vue", [a.$style.sidebarTabsButton, {
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
        class: we([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        c("span", {
          class: we([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          ve(_c, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: ke(() => [
              c("span", {
                class: we([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        c("span", {
          class: we([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          ve(_c, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: ke(() => [
              c("span", {
                class: we([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      c("span", {
        class: we(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, Vw));
  }
}), Kw = "_sidebarTabsButton_q3kBA", Ww = "_sidebarTabsButton_legacy_KQ4d1", qw = "_sidebarTabsButton_selected_Pjayf", Yw = "_sidebarTabsButton_animatedHighlight_uvp-0", Xw = "_sidebarTabsButton__name_rlQsL", Zw = "_sidebarTabsButton__icon_QzZg4", Jw = "_sidebarTabsButton__iconLayer_ZkZan", Qw = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", eC = "_sidebarTabsButton__icon_pop_IA0By", tC = "_sidebarTabsButton__legacyIcon_QhcNW", nC = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: Kw,
  sidebarTabsButton_legacy: Ww,
  sidebarTabsButton_selected: qw,
  sidebarTabsButton_animatedHighlight: Yw,
  sidebarTabsButton__name: Xw,
  sidebarTabsButton__icon: Zw,
  sidebarTabsButton__iconLayer: Jw,
  sidebarTabsButton__iconLayer_hidden: Qw,
  sidebarTabsButton__icon_pop: eC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: tC
}, iC = {
  $style: nC
}, aC = /* @__PURE__ */ qe(Gw, [["__cssModules", iC]]), rC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: aC
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [db()]) : t.order - n.order), this.updateActive();
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
}, sC = { class: "app-sidebar-tabs" };
function oC(e, t, n, i, a, r) {
  const s = ze("NcAppSidebarTabsButton");
  return b(), C("div", sC, [
    r.hasMultipleTabs || r.showForSingleTab ? (b(), C("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: we(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = qt(Ze((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = qt(Ze((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = qt(Ze((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = qt(Ze((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = qt(Ze((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = qt(Ze((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = qt(Ze((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (b(), C("div", {
        key: 0,
        class: we(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: on(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : H("", !0),
      (b(!0), C(le, null, De(a.tabs, (o) => (b(), $e(s, {
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
      class: we(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Le(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const lC = /* @__PURE__ */ qe(rC, [["render", oC], ["__scopeId", "data-v-74190d2a"]]);
Gi(Kb);
const cC = {
  name: "NcAppSidebar",
  components: {
    NcActions: oo,
    NcAppSidebarHeader: vw,
    NcAppSidebarTabs: lC,
    NcButton: Vn,
    NcLoadingIcon: Sp,
    NcEmptyContent: Cw,
    IconArrowRight: tp,
    IconClose: np,
    IconDockRight: Nw,
    IconStar: Mw,
    IconStarOutline: jw
  },
  directives: {
    Focus: W0,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: K0
  },
  inject: {
    ncContentSelector: {
      from: ep,
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
    const e = /* @__PURE__ */ ct(null);
    return pn("NcAppSidebar:header:ref", e), {
      uid: el(),
      isMobile: Ub(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: _t("Change name"),
      closeTranslated: _t("Close sidebar"),
      favoriteTranslated: _t("Favorite"),
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
    isSlotPopulated: iu,
    t: _t,
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
      this.focusTrap || (this.focusTrap = Xc([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: ts(),
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
}, uC = ["aria-labelledby"], dC = { class: "app-sidebar-header__info" }, fC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, hC = { class: "app-sidebar-header__name-container" }, pC = { class: "app-sidebar-header__mainname-container" }, vC = ["placeholder", "value"], gC = ["title"], mC = {
  key: 2,
  class: "app-sidebar-header__description"
};
function bC(e, t, n, i, a, r) {
  const s = ze("IconDockRight"), o = ze("NcButton"), l = ze("NcLoadingIcon"), d = ze("IconStar"), u = ze("IconStarOutline"), h = ze("NcAppSidebarHeader"), _ = ze("IconArrowRight"), T = ze("NcActions"), O = ze("IconClose"), A = ze("NcAppSidebarTabs"), x = ze("NcEmptyContent"), P = Su("focus"), I = Su("click-outside");
  return b(), $e(Xg, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: ke(() => [
      Ge(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = qt((...K) => r.onKeydownEsc && r.onKeydownEsc(...K), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (b(), $e(Ff, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ve(o, Ft({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (K) => e.$emit("update:open", !0))
          }), {
            icon: ke(() => [
              Le(e.$slots, "toggle-icon", {}, () => [
                ve(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : H("", !0),
        c("header", {
          class: we(["app-sidebar-header", {
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
            c("div", dC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (b(), C("div", {
                key: 0,
                class: we(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: on({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...K) => r.onFigureClick && r.onFigureClick(...K)),
                onKeydown: t[2] || (t[2] = qt((...K) => r.onFigureClick && r.onFigureClick(...K), ["enter"]))
              }, [
                Le(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : H("", !0),
              c("div", {
                class: we(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (b(), C("div", fC, [
                  Le(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (b(), $e(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ze(r.toggleStarred, ["prevent"])
                    }, {
                      icon: ke(() => [
                        n.starLoading ? (b(), $e(l, { key: 0 })) : a.isStarred ? (b(), $e(d, {
                          key: 1,
                          size: 20
                        })) : (b(), $e(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : H("", !0)
                  ], !0)
                ])) : H("", !0),
                c("div", hC, [
                  c("div", pC, [
                    Ge(ve(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Ze(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [qa, !n.nameEditable]
                    ]),
                    n.nameEditable ? Ge((b(), C("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ze((...K) => r.onSubmitName && r.onSubmitName(...K), ["prevent"]))
                    }, [
                      Ge(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = qt(Ze((...K) => r.onDismissEditing && r.onDismissEditing(...K), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...K) => r.onNameInput && r.onNameInput(...K))
                      }, null, 40, vC), [
                        [P]
                      ]),
                      ve(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: ke(() => [
                          ve(_, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [I, () => r.onSubmitName()]
                    ]) : H("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (b(), $e(T, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: ke(() => [
                        Le(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : H("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (b(), C("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Le(e.$slots, "subname", {}, () => [
                      Ae(p(n.subname), 1)
                    ], !0)
                  ], 8, gC)) : H("", !0)
                ])
              ], 2)
            ])
          ], !0),
          ve(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ze(r.closeSidebar, ["prevent"])
          }, {
            icon: ke(() => [
              ve(O, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (b(), C("div", mC, [
            Le(e.$slots, "description", {}, void 0, !0)
          ])) : H("", !0)
        ], 2),
        Ge(ve(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: ke(() => [
            Le(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [qa, !n.loading]
        ]),
        n.loading ? (b(), $e(x, { key: 1 }, {
          icon: ke(() => [
            ve(l, { size: 64 })
          ]),
          _: 1
        })) : H("", !0)
      ], 40, uC), [
        [qa, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const yC = /* @__PURE__ */ qe(cC, [["render", bC], ["__scopeId", "data-v-c2c6820b"]]), _C = {
  name: "NcActionLink",
  mixins: [ap],
  inject: {
    isInSemanticMenu: {
      from: Zc,
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
}, wC = ["role"], CC = ["download", "href", "aria-label", "target", "title", "role"], SC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, EC = { class: "action-link__name" }, TC = ["textContent"], AC = ["textContent"], kC = {
  key: 2,
  class: "action-link__text"
};
function OC(e, t, n, i, a, r) {
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
          class: we(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: on({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (b(), C("span", SC, [
        c("strong", EC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, TC)
      ])) : e.isLongText ? (b(), C("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, AC)) : (b(), C("span", kC, p(e.text), 1)),
      H("", !0)
    ], 8, CC)
  ], 8, wC);
}
const Ua = /* @__PURE__ */ qe(_C, [["render", OC], ["__scopeId", "data-v-32f01b7a"]]);
Gi(Zb);
const NC = `<!--
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
`, xC = `<!--
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
`, LC = { class: "vue-skip-actions__container" }, RC = { class: "vue-skip-actions__headline" }, IC = { class: "vue-skip-actions__buttons" }, PC = /* @__PURE__ */ Ot({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    pn(Qh, o), pn(ep, "#content-vue"), pn("appName", Y(() => t.appName));
    const n = hs(), i = /* @__PURE__ */ ct(!1), a = /* @__PURE__ */ ct(), r = Y(() => a.value === "navigation" ? xC : NC);
    Kf(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      pi("toggle-navigation", { open: !0 }), fi(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, d) => (b(), C("div", {
      id: "content-vue",
      class: we(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Ki) }]])
    }, [
      (b(), $e(Ff, { to: "#skip-actions" }, [
        c("div", LC, [
          c("div", RC, p(g(_t)("Keyboard navigation help")), 1),
          c("div", IC, [
            Ge(ve(Vn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ze(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: ke(() => [
                Ae(p(g(_t)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [qa, i.value]
            ]),
            ve(Vn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: ke(() => [
                Ae(p(g(_t)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Ge(ve(Qo, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [qa, !g(n)]
          ])
        ])
      ])),
      Le(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), DC = /* @__PURE__ */ qe(PC, [["__scopeId", "data-v-d13dcb98"]]), MC = ["href"], $C = ["lang", "dir"], FC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, zC = { class: "library-review-header" }, UC = { class: "library-muted library-catalogue-eyebrow" }, BC = { id: "library-review-heading" }, HC = ["aria-label"], jC = ["href", "aria-current"], VC = ["aria-label"], GC = ["name", "value"], KC = {
  type: "submit",
  class: "button secondary"
}, WC = ["aria-busy"], qC = { key: 0 }, YC = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, XC = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, ZC = { class: "library-metadata-review-workbench-copy" }, JC = { class: "library-muted library-catalogue-eyebrow" }, QC = ["title"], eS = {
  key: 0,
  class: "library-metadata-review-card"
}, tS = {
  class: "library-bidi-human",
  dir: "auto"
}, nS = { class: "library-muted" }, iS = {
  class: "library-bidi-machine",
  dir: "ltr"
}, aS = { class: "library-metadata-review-fields" }, rS = {
  class: "library-bidi-human",
  dir: "auto"
}, sS = {
  class: "library-bidi-human",
  dir: "auto"
}, oS = {
  class: "library-bidi-human",
  dir: "auto"
}, lS = {
  class: "library-bidi-machine",
  dir: "ltr"
}, cS = {
  class: "library-bidi-human",
  dir: "auto"
}, uS = {
  class: "library-bidi-human",
  dir: "auto"
}, dS = ["action"], fS = ["value"], hS = ["value"], pS = {
  type: "submit",
  class: "button secondary"
}, vS = { class: "library-metadata-review-actions" }, gS = ["href"], mS = ["href"], bS = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, yS = ["href"], _S = ["aria-label"], wS = ["onClick"], CS = {
  class: "library-bidi-human",
  dir: "auto"
}, SS = {
  key: 0,
  class: "library-muted"
}, ES = {
  class: "library-bidi-human",
  dir: "auto"
}, TS = {
  key: 1,
  class: "library-scan-error"
}, AS = {
  class: "library-bidi-human",
  dir: "auto"
}, kS = ["onClick"], OS = ["href"], NS = ["aria-label"], xS = ["href"], LS = {
  key: 1,
  class: "library-muted"
}, RS = { key: 0 }, IS = ["href"], PS = {
  key: 3,
  class: "library-muted"
}, DS = {
  key: 1,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, MS = { class: "library-home-header" }, $S = { class: "library-muted library-catalogue-eyebrow" }, FS = { id: "library-home-heading" }, zS = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, US = { id: "library-continue-heading" }, BS = { class: "library-muted" }, HS = ["href"], jS = {
  key: 0,
  class: "library-home-card-row"
}, VS = ["onClick"], GS = { class: "library-cover-frame" }, KS = ["src"], WS = { class: "library-cover-summary" }, qS = ["onClick"], YS = { dir: "auto" }, XS = {
  key: 0,
  class: "library-cover-creator"
}, ZS = { dir: "auto" }, JS = ["href"], QS = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, eE = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, tE = { id: "library-recent-heading" }, nE = { class: "library-muted" }, iE = ["href"], aE = {
  key: 0,
  class: "library-home-card-row"
}, rE = ["onClick"], sE = { class: "library-cover-frame" }, oE = ["src"], lE = { class: "library-cover-summary" }, cE = ["onClick"], uE = { dir: "auto" }, dE = {
  key: 0,
  class: "library-cover-creator"
}, fE = { dir: "auto" }, hE = ["href"], pE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, vE = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, gE = { id: "library-home-shelves-heading" }, mE = { class: "library-muted" }, bE = ["href"], yE = ["aria-label"], _E = ["href"], wE = { dir: "auto" }, CE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, SE = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, EE = { id: "library-home-attention-heading" }, TE = { class: "library-muted" }, AE = ["href"], kE = {
  key: 2,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, OE = { class: "library-home-header" }, NE = { class: "library-muted library-catalogue-eyebrow" }, xE = { id: "library-shelves-landing-heading" }, LE = { class: "library-muted" }, RE = ["aria-label"], IE = ["href"], PE = { class: "library-shelf-summary-title" }, DE = { dir: "auto" }, ME = { class: "library-muted" }, $E = { dir: "auto" }, FE = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, zE = { class: "library-muted" }, UE = { class: "library-empty-actions" }, BE = ["href"], HE = ["href"], jE = {
  key: 3,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, VE = { class: "library-catalogue-header" }, GE = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, KE = { id: "library-catalogue-heading" }, WE = ["aria-label"], qE = ["aria-label"], YE = ["name", "value"], XE = { class: "library-quick-search-row" }, ZE = ["title"], JE = ["placeholder"], QE = { "data-library-control": "sort" }, eT = { value: "title" }, tT = { value: "recent" }, nT = { value: "publicationDate" }, iT = { value: "publication" }, aT = { value: "lastOpened" }, rT = { value: "format" }, sT = ["aria-label"], oT = ["aria-pressed"], lT = ["aria-pressed"], cT = ["aria-pressed"], uT = ["aria-pressed"], dT = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine",
  "data-library-control": "filter"
}, fT = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, hT = ["title", "aria-label"], pT = { class: "library-workspace-scope-badge" }, vT = ["aria-label"], gT = { value: "" }, mT = ["value"], bT = { value: "" }, yT = ["value"], _T = { value: "" }, wT = ["value"], CT = { value: "" }, ST = ["value"], ET = ["title"], TT = { value: "" }, AT = ["value"], kT = ["placeholder"], OT = { value: "" }, NT = ["value"], xT = { value: "" }, LT = ["value"], RT = { value: "" }, IT = ["value"], PT = { value: "" }, DT = ["value"], MT = { value: "" }, $T = ["value"], FT = { value: "" }, zT = ["value"], UT = { value: "" }, BT = { value: "1" }, HT = {
  type: "submit",
  class: "button primary"
}, jT = {
  href: "?",
  class: "button secondary"
}, VT = {
  id: "library-shelves",
  class: "library-navigation-section library-discovery-shortcuts",
  "aria-labelledby": "library-shelves-heading"
}, GT = { id: "library-shelves-heading" }, KT = { class: "library-shortcut-selectors" }, WT = ["title"], qT = { value: "" }, YT = ["value"], XT = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, ZT = { value: "" }, JT = ["value"], QT = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, eA = { value: "" }, tA = ["value"], nA = {
  id: "library-collections",
  class: "library-saved-collections"
}, iA = ["title"], aA = ["action", "title"], rA = ["value"], sA = ["value"], oA = ["placeholder", "disabled"], lA = ["disabled", "title"], cA = ["aria-label"], uA = ["href"], dA = ["action"], fA = ["value"], hA = {
  type: "submit",
  class: "button tertiary"
}, pA = ["aria-label"], vA = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, gA = ["title"], mA = { class: "library-workspace-panel-purpose" }, bA = { class: "library-workspace-scope-badge" }, yA = { "aria-live": "polite" }, _A = ["action"], wA = ["value"], CA = ["placeholder"], SA = ["title"], EA = ["action"], TA = ["value"], AA = ["placeholder"], kA = ["title"], OA = ["action"], NA = ["value"], xA = ["name", "value"], LA = ["title"], RA = ["action"], IA = ["value"], PA = ["name", "value"], DA = { name: "bulkEditField" }, MA = { value: "publicationType" }, $A = { value: "subtitle" }, FA = { value: "creators" }, zA = { value: "publication" }, UA = { value: "publicationDate" }, BA = { value: "language" }, HA = { value: "publisher" }, jA = { value: "genres" }, VA = { value: "classifications" }, GA = ["placeholder"], KA = ["title"], WA = ["action"], qA = ["value"], YA = ["name", "value"], XA = ["title"], ZA = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, JA = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, QA = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, e2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, t2 = { class: "library-muted library-catalogue-eyebrow" }, n2 = ["title"], i2 = ["aria-label"], a2 = { key: 0 }, r2 = { key: 1 }, s2 = { key: 2 }, o2 = ["aria-label"], l2 = { key: 0 }, c2 = { key: 1 }, u2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, d2 = { class: "library-muted library-catalogue-eyebrow" }, f2 = ["title"], h2 = ["aria-label"], p2 = ["href"], v2 = {
  key: 0,
  class: "library-notice"
}, g2 = { class: "library-publication-issue-label" }, m2 = ["href"], b2 = { class: "library-muted" }, y2 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, _2 = ["title"], w2 = ["href"], C2 = { class: "library-catalogue-status-row" }, S2 = { class: "library-muted library-filter-result-summary" }, E2 = { key: 0 }, T2 = { href: "?" }, A2 = ["aria-label"], k2 = { class: "library-pagination-range" }, O2 = { key: 0 }, N2 = ["href"], x2 = {
  key: 1,
  class: "library-muted"
}, L2 = ["href"], R2 = {
  key: 3,
  class: "library-muted"
}, I2 = ["aria-label"], P2 = ["href", "aria-label", "onClick"], D2 = ["title"], M2 = { class: "library-empty-actions" }, $2 = ["href"], F2 = { class: "library-muted" }, z2 = ["title"], U2 = { class: "library-empty-actions" }, B2 = ["href"], H2 = ["title"], j2 = { class: "library-empty-actions" }, V2 = ["href"], G2 = {
  href: "?",
  class: "button primary"
}, K2 = ["title"], W2 = { class: "library-empty-actions" }, q2 = ["href"], Y2 = {
  key: 6,
  class: "library-select-visible"
}, X2 = ["checked"], Z2 = {
  key: 7,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, J2 = { class: "library-item-selection" }, Q2 = ["checked", "aria-label", "onChange"], ek = { class: "library-catalogue-list-main" }, tk = ["onClick"], nk = {
  class: "library-bidi-human",
  dir: "auto"
}, ik = {
  key: 0,
  class: "library-muted"
}, ak = {
  class: "library-bidi-human",
  dir: "auto"
}, rk = { class: "library-catalogue-list-metadata" }, sk = { key: 0 }, ok = {
  class: "library-bidi-human",
  dir: "auto"
}, lk = { key: 1 }, ck = { key: 2 }, uk = ["dir"], dk = { key: 3 }, fk = {
  class: "library-bidi-human",
  dir: "auto"
}, hk = { class: "library-catalogue-list-actions" }, pk = ["href"], vk = ["onClick"], gk = { class: "library-item-selection" }, mk = ["checked", "aria-label", "onChange"], bk = ["aria-labelledby", "aria-expanded", "onClick"], yk = ["id"], _k = { class: "library-cover-frame" }, wk = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, Ck = ["src", "onLoad", "onError"], Sk = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, Ek = ["action", "onSubmit"], Tk = ["value"], Ak = ["value"], kk = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], Ok = ["data-library-star-error"], Nk = { class: "library-cover-summary" }, xk = { class: "library-cover-primary" }, Lk = ["id"], Rk = ["onClick"], Ik = {
  class: "library-bidi-human",
  dir: "auto"
}, Pk = {
  key: 0,
  class: "library-cover-creator"
}, Dk = {
  class: "library-bidi-human",
  dir: "auto"
}, Mk = {
  key: 1,
  class: "library-cover-badges"
}, $k = {
  key: 0,
  class: "library-cover-badge"
}, Fk = {
  class: "library-bidi-machine",
  dir: "ltr"
}, zk = {
  key: 1,
  class: "library-cover-context"
}, Uk = {
  class: "library-bidi-human",
  dir: "auto"
}, Bk = { class: "library-cover-primary-actions" }, Hk = ["href"], jk = ["aria-label"], Vk = { class: "library-pagination-range" }, Gk = { key: 0 }, Kk = ["href"], Wk = {
  key: 1,
  class: "library-muted"
}, qk = ["href"], Yk = {
  key: 3,
  class: "library-muted"
}, Xk = { class: "library-sidebar-content" }, Zk = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, Jk = ["role"], Qk = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, eO = { class: "library-sidebar-publication-header" }, tO = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, nO = ["src"], iO = { class: "library-sidebar-publication-summary" }, aO = { class: "library-muted library-catalogue-eyebrow" }, rO = {
  class: "library-bidi-human",
  dir: "auto"
}, sO = { key: 0 }, oO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, lO = { class: "library-detail-drawer-actions" }, cO = ["href"], uO = ["aria-label"], dO = ["aria-current", "onClick"], fO = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, hO = { id: "library-sidebar-overview-heading" }, pO = {
  key: 0,
  class: "library-sidebar-description"
}, vO = {
  class: "library-bidi-human",
  dir: "auto"
}, gO = { class: "library-detail-drawer-facts" }, mO = { key: 0 }, bO = { key: 1 }, yO = { key: 2 }, _O = { key: 3 }, wO = { key: 4 }, CO = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, SO = { id: "library-sidebar-metadata-heading" }, EO = ["placeholder"], TO = ["onUpdate:modelValue", "aria-label", "placeholder"], AO = ["onUpdate:modelValue", "aria-label"], kO = ["onClick"], OO = { class: "library-muted" }, NO = {
  key: 0,
  role: "alert"
}, xO = {
  key: 1,
  role: "status"
}, LO = ["disabled"], RO = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, IO = { id: "library-sidebar-suggestions-heading" }, PO = { class: "library-muted" }, DO = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, MO = { id: "library-sidebar-activity-heading" }, $O = { class: "library-detail-drawer-facts" }, FO = { key: 0 }, zO = { key: 1 }, UO = { key: 2 }, BO = { dir: "ltr" }, HO = ["aria-label"], jO = ["disabled"], VO = ["disabled"], GO = "/apps/library", KO = 2147483647, WO = {
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
    function r(S, E) {
      return Object.prototype.hasOwnProperty.call(a, S) && String(E ?? "").trim() === a[S];
    }
    function s(S) {
      const E = new URLSearchParams(S);
      for (const f of Object.keys(a)) {
        const j = [...new Set([...E.keys()].filter((Me) => Me === f || Me.startsWith(`${f}[`)))], Oe = j.reduce((Me, vt) => Me + E.getAll(vt).length, 0);
        if (Oe > 1 || j.some((Me) => Me !== f)) {
          for (const Me of j) E.delete(Me);
          continue;
        }
        f !== "status" && Oe === 1 && !r(f, E.get(f)) && E.delete(f);
      }
      return E;
    }
    function o(S) {
      return Object.keys(a).some((E) => S.getAll(E).length === 1 && r(E, S.get(E)));
    }
    function l(S) {
      return Object.fromEntries(Object.entries(S || {}).filter(([E, f]) => E === "status" || !Object.prototype.hasOwnProperty.call(a, E) || r(E, f)));
    }
    const d = /* @__PURE__ */ Rt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Rt((d.items || []).map((S) => ({ ...S }))), h = Y(() => u), _ = Y(() => d.shelves || []), T = Y(() => d.formats || []), O = Y(() => d.publicationTypes?.length ? d.publicationTypes : n), A = Y(() => d.publishers || []), x = Y(() => d.publications || []), P = Y(() => d.publicationSummaries || []), I = Y(() => d.publicationIssueContext || null), K = Y(() => d.publicationYears || []), $ = Y(() => d.creators || []), oe = Y(() => d.scanStatuses || []), ce = Y(() => d.workflowStatuses || []), te = Y(() => d.genres || []), fe = Y(() => d.classifications || []), B = Y(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), z = /* @__PURE__ */ Rt({
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
    for (const S of Object.keys(a))
      S !== "status" && (r(S, z[S]) || (z[S] = ""));
    const ge = Object.fromEntries(Object.keys(z).map((S) => [S, S === "sort" ? "title" : S === "view" ? "compact" : ""])), ee = window.location.pathname.indexOf(GO), ne = ee >= 0 ? window.location.pathname.slice(0, ee) : "", D = {
      catalogue: `${ne}/apps/library/`,
      review: `${ne}/apps/library/?scannerConflicts=1`,
      settings: `${ne}/settings/user/library`
    };
    function M(S, E) {
      if (typeof S != "string" || S === "") return E;
      try {
        const f = ne ? `${ne}/` : "/";
        let j = S;
        for (let Oe = 0; Oe < 5; Oe += 1) {
          if (!j.startsWith("/") || j.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(j)) return E;
          const Me = new URL(j, window.location.origin);
          if (Me.origin !== window.location.origin || !Me.pathname.startsWith(f)) return E;
          const vt = j.split(/[?#]/, 1)[0];
          for (const Ia of vt.split("/")) {
            let Pa = Ia;
            for (let Da = 0; Da < 5; Da += 1) {
              const Mn = decodeURIComponent(Pa);
              if (/[\\/\u0000-\u001f\u007f]/.test(Mn) || Mn === "." || Mn === "..") return E;
              if (Mn === Pa) break;
              if (Pa = Mn, Da === 4) return E;
            }
          }
          const en = decodeURI(j);
          if (en === j) return S;
          j = en;
        }
        return E;
      } catch {
        return E;
      }
    }
    const X = Y(() => M(d.settingsUrl, D.settings)), ae = Y(() => M(d.catalogueRootUrl, D.catalogue)), ie = Y(() => M(d.homeUrl, `${D.catalogue}?home=1`)), ue = Y(() => M(d.shelvesUrl, `${D.catalogue}?shelves=1`)), he = Y(() => M(d.reviewUrl || d.scannerConflictReviewUrl, D.review)), Ce = Y(() => Object.entries(a).some(([S, E]) => z[S] === E)), be = Y(() => i.reduce((S, E) => S + Number(Ye.value[E.countKey] || 0), 0)), Ve = Y(() => d.surface === "home"), Ee = Y(() => d.surface === "shelves"), rt = Y(() => !Ve.value && !Ee.value && !Ce.value && !z.starred && z.sort !== "lastOpened" && !z.shelf), ut = Y(() => [
      { key: "home", name: m("library", "Home"), href: ie.value, active: Ve.value },
      { key: "all", name: m("library", "All publications"), href: ae.value, active: rt.value },
      { key: "starred", name: m("library", "Starred"), href: `${ae.value}?starred=1`, active: z.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${ae.value}?sort=lastOpened`, active: z.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: ue.value, active: Ee.value || !!z.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${ae.value}#library-collections`, active: !1 }
    ]), Xe = Y(() => d.requestToken || ""), zt = Y(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), at = Y(() => d.itemSidebarUrlTemplate || `${ne}/apps/library/items/__ITEM_ID__/sidebar`), _n = Y(() => d.batchTagUrl || "/apps/library/bulk/tags"), U = Y(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), v = Y(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), w = Y(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), k = Y(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), L = Y(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const N = Y(() => d.discoveryPage === "publication"), F = Y(() => d.discoveryPage === "year"), W = Y(() => d.discoveryPage === "creator"), V = Y(() => N.value || F.value || W.value), J = Y(() => d.discoveryTitle || z.publication || z.year || z.creator || ""), G = Y(() => V.value ? J.value : m("library", "Library")), me = Y(() => W.value ? m("library", "Creator") : F.value ? m("library", "Publication year") : m("library", "Publication / series")), re = Y(() => Number(d.rootCount || 0)), pe = Y(() => Number(d.enabledRootCount || 0)), _e = Y(() => re.value === 0), Ne = Y(() => re.value > 0 && pe.value === 0), Pe = Y(() => wn.value.length > 0), Re = {
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
    }, Je = Y(() => {
      if (typeof window > "u") return "";
      const S = new URLSearchParams(window.location.search);
      if (S.get("batchMetadataApplyResult") !== "1") return "";
      const E = S.get("batchMetadataField") || "field", f = S.get("batchMetadataApplied") || "0", j = S.get("batchMetadataUnchanged") || "0", Oe = S.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: E, unchanged: j, skipped: Oe });
    }), it = Y(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), mt = Y(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), Ct = Y(() => d.savedCollections || []), jt = Y(() => d.savedCollectionSaveUrl || "/apps/library/collections"), Wn = Y(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), ot = ["compact", "gallery", "list", "shelf"], Qe = Y(() => ot.includes(z.view) ? z.view : "compact"), Wi = Y(() => ({
      "library-cover-gallery--compact": Qe.value === "compact",
      "library-cover-gallery--gallery": Qe.value === "gallery",
      "library-cover-gallery--shelf": Qe.value === "shelf"
    })), wn = Y(() => Object.entries(Re).map(([S, E]) => ({ key: S, label: m("library", E), value: z[S] || "" })).filter((S) => String(S.value).trim() !== "")), er = Y(() => Object.entries(z).filter(([S, E]) => !["q", "sort", "starred"].includes(S) && String(E || "").trim() !== "").map(([S, E]) => ({ key: S, value: E }))), wi = Y(() => Object.entries(l(z)).filter(([S, E]) => String(E || "").trim() !== "").map(([S, E]) => ({ key: S, value: E }))), Ci = Y(() => wi.value.filter(({ key: S, value: E }) => S !== "q" && !(S === "sort" && E === "title"))), Pn = /* @__PURE__ */ Rt({}), qi = Y(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), tr = Y(() => d.homeShelves || []), nr = Y(() => d.shelfSummaries || []), Ea = Y(() => d.needsAttention || { count: 0, url: `${ae.value}?needsMetadata=1` }), Vt = /* @__PURE__ */ ct([]), qn = Y(() => new Set(Vt.value));
    function Yi(S, E) {
      const f = new Set(Vt.value);
      E ? f.add(Number(S)) : f.delete(Number(S)), Vt.value = [...f];
    }
    function ln(S) {
      Vt.value = S.currentTarget.checked ? h.value.map((E) => Number(E.id)) : [];
    }
    function Si() {
      const S = new Set(h.value.map((E) => Number(E.id)));
      Vt.value = Vt.value.filter((E) => S.has(E));
    }
    function ir(S) {
      const E = S.target;
      if (E instanceof HTMLFormElement) {
        E.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of Vt.value) {
          const j = document.createElement("input");
          j.type = "hidden", j.name = "itemIds[]", j.value = String(f), j.dataset.librarySelectedId = "1", E.appendChild(j);
        }
      }
    }
    const Se = /* @__PURE__ */ ct(null), Yn = /* @__PURE__ */ ct(null), bt = /* @__PURE__ */ Rt({ loading: !1, error: "", missing: !1 }), Cn = /* @__PURE__ */ ct("overview"), Gt = /* @__PURE__ */ Rt({ saving: !1, saved: !1, error: "" }), dt = /* @__PURE__ */ Rt({ title: "", publicationDate: "", identifiers: [] }), ps = /* @__PURE__ */ ct(null), Xt = /* @__PURE__ */ ct(null), Xn = /* @__PURE__ */ ct(!1);
    let ar = null, He = null, Sn = null, rr = !1, Ei = null, Xi = 0;
    const En = Y(() => Yn.value !== null), Ti = Y(() => Se.value ? h.value.findIndex((S) => S.id === Se.value.id) : -1), Ta = Y(() => Ti.value > 0 ? h.value[Ti.value - 1] : null), Aa = Y(() => Ti.value >= 0 && Ti.value < h.value.length - 1 ? h.value[Ti.value + 1] : null), rl = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], sl = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Zt(S) {
      const E = String(S ?? "").trim(), f = E.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : E;
    }
    function sr(S) {
      return { ...S, publicationDate: Zt(S?.publicationDate) };
    }
    function Zi(S) {
      dt.title = String(S?.title || ""), dt.publicationDate = Zt(S?.publicationDate), dt.identifiers = Array.isArray(S?.identifiers) ? S.identifiers.map((E) => ({ scheme: String(E?.scheme || ""), displayValue: String(E?.displayValue || E?.value || "") })) : [], Object.assign(Gt, { saving: !1, saved: !1, error: "" });
    }
    function Zn() {
      dt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function ol(S) {
      dt.identifiers.splice(S, 1);
    }
    async function ka() {
      const S = Se.value;
      if (!S?.updateUrl || Gt.saving) return;
      Object.assign(Gt, { saving: !0, saved: !1, error: "" });
      const E = new FormData();
      E.set("requesttoken", Xe.value), E.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "genres", "classifications", "personalRating"]) {
        const j = S[f];
        E.set(f, Array.isArray(j) ? j.join(", ") : String(j ?? ""));
      }
      E.set("title", dt.title), E.set("publicationDate", Zt(dt.publicationDate)), dt.identifiers.forEach((f, j) => {
        E.set(`identifiers[${j}][scheme]`, f.scheme), E.set(`identifiers[${j}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(S.updateUrl, { method: "POST", body: E, credentials: "same-origin", headers: { Accept: "application/json" } }), j = await f.json().catch(() => ({}));
        if (!f.ok || j.saved !== !0) throw new Error(j.error || m("library", "Metadata could not be saved."));
        S.title = dt.title.trim(), S.publicationDate = Zt(dt.publicationDate), S.identifiers = dt.identifiers.filter((Me) => Me.scheme.trim() || Me.displayValue.trim()).map((Me) => ({ ...Me }));
        const Oe = h.value.find((Me) => Number(Me.id) === Number(S.id));
        Oe && (Oe.title = S.title, Oe.publicationDate = S.publicationDate), Gt.saved = !0;
      } catch (f) {
        Gt.error = f?.message || m("library", "Metadata could not be saved.");
      } finally {
        Gt.saving = !1;
      }
    }
    const Tn = Y(() => {
      const S = r("scannerConflicts", z.scannerConflicts) || r("weakMetadata", z.weakMetadata), E = S ? h.value.find((f) => Ji(f).length > 0) : null;
      return {
        enabled: S,
        item: E,
        fields: E ? Ji(E) : [],
        reviewNextUrl: L.value,
        skipUrl: B.value.nextUrl || L.value
      };
    }), ll = Y(() => i.map((S) => ({
      ...S,
      label: m("library", S.label),
      href: `${ae.value}?${encodeURIComponent(S.key)}=${encodeURIComponent(S.value)}`,
      active: String(z[S.key] || "") === S.value
    })));
    function Oa(S) {
      return Array.isArray(S) ? JSON.stringify(S) : S == null ? "" : String(S);
    }
    function Ji(S) {
      const E = S.fieldValues || {}, f = S.fieldSources || {};
      return rl.filter((j) => Object.prototype.hasOwnProperty.call(E, j)).map((j) => {
        const Oe = Oa(S[j]), Me = Oa(E[j]), vt = Oa(f[j] || S.metadataSource || "scanner"), en = vt.includes("filename") || vt.includes("path") ? Me : "", Ia = vt.includes("sidecar") ? Me : "";
        return { field: j, currentValue: Oe, scannerCandidate: Me, pathTemplateCandidate: en, sidecarValue: Ia, sourceProvenance: vt, differs: Oe !== Me };
      }).filter((j) => j.differs);
    }
    let cn = 0, An = null;
    function Qi() {
      const S = new URLSearchParams(window.location.search).getAll("item");
      if (S.length !== 1 || !/^[1-9][0-9]*$/.test(S[0])) return null;
      const E = Number(S[0]);
      return Number.isSafeInteger(E) && E <= KO ? E : null;
    }
    function Jn(S, E = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), S !== null && f.searchParams.set("item", String(S)), history[`${E}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function kn(S, { historyMode: E = "push", seed: f = null } = {}) {
      An?.abort();
      const j = ++cn, Oe = new AbortController();
      An = Oe, Yn.value = S, Cn.value = "overview", Se.value = f && Number(f.id) === S ? sr(f) : null, Se.value && Zi(Se.value), Object.assign(bt, { loading: !0, error: "", missing: !1 }), E !== "none" && Jn(S, E);
      try {
        const Me = at.value.replace("__ITEM_ID__", encodeURIComponent(String(S))), vt = await fetch(Me, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: Oe.signal });
        if (j !== cn) return;
        if (!vt.ok) {
          Se.value = null, bt.missing = vt.status === 404, bt.error = vt.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const en = await vt.json();
        if (j !== cn) return;
        if (typeof en?.item?.id != "number" || !Number.isSafeInteger(en.item.id) || en.item.id !== S) {
          Se.value = null, bt.missing = !1, bt.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        Se.value = sr(en.item), Zi(Se.value), await fi();
      } catch (Me) {
        j === cn && Me?.name !== "AbortError" && (Se.value = null, bt.missing = !1, bt.error = m("library", "Could not load publication details. Try again."));
      } finally {
        j === cn && (bt.loading = !1, An = null);
      }
    }
    function lt(S, E) {
      xa(), ar = E?.currentTarget instanceof HTMLElement ? E.currentTarget : null, kn(Number(S.id), { seed: S });
    }
    function Na({ historyMode: S = "push", restoreFocus: E = !0 } = {}) {
      Sn = E ? ar : null, ar = null, An?.abort(), An = null, cn += 1, Yn.value = null, Se.value = null, Cn.value = "overview", Object.assign(bt, { loading: !1, error: "", missing: !1 }), S !== "none" && Jn(null, S);
    }
    function ea() {
      Xn.value ? (Xt.value?.$refs?.sidebar || Xt.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : ps.value?.focus();
    }
    function cl() {
      const S = Sn;
      if (Sn = null, xa(), rr || !S?.isConnected) return;
      const E = Xi;
      Ei = window.requestAnimationFrame(() => {
        Ei = null, !(E !== Xi || rr || En.value || !S.isConnected) && S.focus();
      });
    }
    function xa() {
      Xi += 1, Ei !== null && (window.cancelAnimationFrame(Ei), Ei = null);
    }
    function Ai(S = He) {
      Xn.value = !!S?.matches, En.value && fi(ea);
    }
    function ta(S) {
      S && kn(Number(S.id), { seed: S });
    }
    const Qn = /* @__PURE__ */ ct(null);
    let La = null, Jt = 0, Dn = null;
    const Qt = /* @__PURE__ */ Rt({ loading: !1, error: "" });
    function or(S) {
      const E = s(new FormData(S));
      for (const f of Array.from(E.keys()))
        String(E.get(f) || "").trim() === "" && E.delete(f);
      return E.delete("page"), E.get("view") === "compact" && E.delete("view"), E;
    }
    function Ra(S) {
      u.splice(0, u.length, ...(S.items || []).map((E) => ({ ...E }))), Si();
      for (const E of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(S, E) && (d[E] = S[E]);
      Object.assign(z, ge, S.activeFilters || {});
    }
    async function un(S, E = null) {
      const f = S?.currentTarget?.tagName === "FORM" ? S.currentTarget : S?.currentTarget?.form;
      if (!f && !E?.params) return;
      const j = s(E?.params ?? or(f)), Oe = j.toString(), Me = Oe ? `?${Oe}` : "", vt = E?.generation ?? ++Jt, en = o(j), Ia = E?.historyMode ?? (en ? "push" : "replace"), Pa = E?.historyTraversal === !0;
      if (vt !== Jt) return;
      E === null && Dn?.abort();
      const Da = new AbortController();
      Dn = Da, Qt.loading = !0, Qt.error = "";
      try {
        const Mn = await fetch(zt.value + Me, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Da.signal
        });
        if (vt !== Jt) return;
        if (!Mn.ok) {
          Pa ? y(j) : en ? Qt.error = m("library", "Could not load this review queue. Try again.") : y(j);
          return;
        }
        const Vp = await Mn.json();
        if (vt !== Jt) return;
        Ra(Vp), Ia !== "none" && (history[Ia === "push" ? "pushState" : "replaceState"]({}, "", Oe ? `?${Oe}` : window.location.pathname), En.value && Na({ historyMode: "none" }));
      } catch (Mn) {
        vt === Jt && Mn?.name !== "AbortError" && (Pa ? y(j) : en ? Qt.error = m("library", "Could not load this review queue. Try again.") : y(j));
      } finally {
        vt === Jt && (Dn = null, Qt.loading = !1);
      }
    }
    function Z() {
      Dn?.abort();
      const S = new URLSearchParams(window.location.search), E = Qi();
      S.has("item") && E === null && (S.delete("item"), history.replaceState({}, "", `${window.location.pathname}${S.toString() ? `?${S}` : ""}${window.location.hash}`)), E === null ? Na({ historyMode: "none" }) : kn(E, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === E) || null }), S.delete("item"), un(null, {
        params: s(S),
        generation: ++Jt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function y(S) {
      const E = document.createElement("form");
      E.method = "get", E.action = window.location.pathname, E.hidden = !0;
      for (const [f, j] of S.entries()) {
        const Oe = document.createElement("input");
        Oe.type = "hidden", Oe.name = f, Oe.value = j, E.appendChild(Oe);
      }
      document.body.appendChild(E), E.submit(), E.remove();
    }
    function R(S, E = null, f = null) {
      if (E === null) {
        un(S);
        return;
      }
      un({ currentTarget: S }, { params: E, generation: f });
    }
    function q(S) {
      const E = S?.currentTarget?.form;
      if (!E) return;
      window.clearTimeout(La);
      const f = ++Jt, j = or(E);
      Dn?.abort(), Dn = null, La = window.setTimeout(() => R(E, j, f), 350);
    }
    function se(S) {
      const E = new URLSearchParams();
      for (const [j, Oe] of Object.entries(z)) {
        const Me = String(Oe || "").trim();
        Me !== "" && j !== S && !(j === "sort" && Me === "title") && !(j === "view" && Me === "compact") && E.set(j, Me);
      }
      const f = E.toString();
      return f ? `?${f}` : "?";
    }
    function de(S) {
      const E = new URLSearchParams(se(S));
      un(null, {
        params: E,
        generation: ++Jt
      });
    }
    function Te() {
      return se("q");
    }
    const Ye = Y(() => d.smartViewCounts || {}), et = Y(() => {
      const S = {};
      for (const [E, f] of Object.entries(z)) {
        const j = String(f || "").trim();
        j !== "" && !(E === "sort" && j === "title") && (S[E] = j);
      }
      return S;
    }), Nt = Y(() => JSON.stringify(et.value)), yt = Y(() => Object.keys(et.value).length > 0);
    function ki(S) {
      if (!ot.includes(S)) return;
      z.view = S;
      const E = s(window.location.search);
      S === "compact" ? E.delete("view") : E.set("view", S), E.delete("page"), history.replaceState({}, "", E.toString() ? `?${E.toString()}` : window.location.pathname);
    }
    function St(S) {
      const E = s(window.location.search);
      for (const j of Object.keys(Re))
        E.delete(j);
      E.delete("page");
      for (const [j, Oe] of Object.entries(S))
        String(Oe || "").trim() !== "" && E.set(j, String(Oe));
      const f = E.toString();
      return f ? `?${f}` : "?";
    }
    function Ip(S) {
      return St(S || {});
    }
    function Pp(S) {
      return Wn.value.replace("__COLLECTION_ID__", encodeURIComponent(String(S || "0")));
    }
    function lr(S) {
      return String(S || "").toUpperCase();
    }
    function Dp(S) {
      return P.value.find((f) => f.publication === S)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(S)}`;
    }
    function Mp(S) {
      return d.publicationYearLandingUrls?.[S] || `/apps/library/years/${encodeURIComponent(S)}`;
    }
    function $p(S) {
      return d.creatorLandingUrls?.[S] || `/apps/library/creators/${encodeURIComponent(S)}`;
    }
    function ul(S) {
      const E = S?.target?.value || "";
      E && (window.location.href = E);
    }
    function cr(S) {
      return Pn[S.id] || "loading";
    }
    function Fp(S) {
      Pn[S.id] = "loaded";
    }
    function zp(S) {
      Pn[S.id] = "error";
    }
    function dl(S) {
      const E = String(S?.publication || "").trim(), f = String(S?.publicationDate || "").trim();
      return E && f ? `${E} · ${f}` : E || f ? E || f : [S?.publicationType, lr(S?.extension)].filter(Boolean).join(" · ");
    }
    function Up(S) {
      const E = String(S?.tagName || "").toLowerCase();
      return S?.isContentEditable || ["input", "select", "textarea", "button"].includes(E);
    }
    function Bp(S) {
      S.key !== "/" || S.metaKey || S.ctrlKey || S.altKey || S.shiftKey || Up(S.target) || (S.preventDefault(), Qn.value?.focus(), Qn.value?.select?.());
    }
    function Hp(S) {
      S.key !== "Escape" || document.activeElement !== Qn.value || z.q === "" || (S.preventDefault(), z.q = "", Qn.value.value = "", window.clearTimeout(La), R({ currentTarget: Qn.value }));
    }
    function jp(S) {
      if (!En.value || S.metaKey || S.ctrlKey || S.altKey)
        return !1;
      if (S.key === "Escape")
        return S.preventDefault(), Na(), !0;
      if (S.key === "Tab" && Xn.value) {
        if (Xt.value?.focusTrap) return !1;
        const E = Xt.value?.$refs?.sidebar || Xt.value?.$el || Xt.value, f = [...E?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Me) => !Me.hidden && Me.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const j = f[0], Oe = f[f.length - 1];
        if (S.shiftKey && (document.activeElement === j || !E.contains(document.activeElement)))
          return S.preventDefault(), Oe.focus(), !0;
        if (!S.shiftKey && (document.activeElement === Oe || !E.contains(document.activeElement)))
          return S.preventDefault(), j.focus(), !0;
      }
      return S.key === "ArrowLeft" && Ta.value ? (S.preventDefault(), ta(Ta.value), !0) : S.key === "ArrowRight" && Aa.value ? (S.preventDefault(), ta(Aa.value), !0) : !1;
    }
    function du(S) {
      jp(S) || (Bp(S), Hp(S));
    }
    Vi(() => {
      window.addEventListener("keydown", du), window.addEventListener("popstate", Z), He = window.matchMedia?.("(max-width: 1023px)") || null, Ai(), He?.addEventListener ? He.addEventListener("change", Ai) : He?.addListener?.(Ai);
      const S = new URLSearchParams(window.location.search), E = Qi();
      S.has("item") && E === null ? (S.delete("item"), history.replaceState({}, "", `${window.location.pathname}${S.toString() ? `?${S}` : ""}${window.location.hash}`)) : E !== null && kn(E, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === E) || null });
    }), Qa(() => {
      rr = !0, xa(), window.removeEventListener("keydown", du), window.removeEventListener("popstate", Z), window.clearTimeout(La), Jt += 1, Dn?.abort(), Dn = null, cn += 1, An?.abort(), An = null, He?.removeEventListener ? He.removeEventListener("change", Ai) : He?.removeListener?.(Ai), He = null, Sn = null;
    });
    const ur = /* @__PURE__ */ Rt({}), dr = /* @__PURE__ */ Rt({});
    async function fu(S, E) {
      const f = E?.currentTarget?.closest?.("form") || E?.currentTarget;
      if (!f || !S?.starUrl || ur[S.id]) return;
      const j = !!S.starred;
      ur[S.id] = !0, dr[S.id] = "", S.starred = !j;
      try {
        (await fetch(S.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (S.starred = j, dr[S.id] = m("library", "Could not update star. Try again."));
      } catch {
        S.starred = j, dr[S.id] = m("library", "Could not update star. Try again.");
      } finally {
        ur[S.id] = !1;
      }
    }
    return (S, E) => (b(), $e(g(DC), { "app-name": "library" }, {
      default: ke(() => [
        ve(g(g_), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: ke(() => [
            ve(g(Jh), null, {
              default: ke(() => [
                (b(!0), C(le, null, De(ut.value, (f) => (b(), $e(g(Qd), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                ve(g(Qd), {
                  active: Ce.value,
                  href: he.value,
                  name: be.value > 0 ? `${g(m)("library", "Review")} (${be.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: ke(() => [
            c("a", {
              class: "library-navigation-settings-link",
              href: X.value
            }, [
              E[25] || (E[25] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(m)("library", "Settings")), 1)
            ], 8, MC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ve(g(Ry), null, {
          default: ke(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: d.language || "en",
              dir: d.direction || "ltr",
              tabindex: "-1"
            }, [
              Ce.value ? (b(), C("section", FC, [
                c("header", zC, [
                  c("p", UC, p(g(m)("library", "Metadata cleanup")), 1),
                  c("h2", BC, p(g(m)("library", "Review")), 1),
                  c("p", null, p(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (b(!0), C(le, null, De(ll.value, (f) => (b(), C("a", {
                    key: f.key,
                    class: we(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(Number(Ye.value[f.countKey] || 0)), 1)
                  ], 10, jC))), 128))
                ], 8, HC),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: Ze(un, ["prevent"])
                }, [
                  (b(!0), C(le, null, De(Ci.value, (f) => (b(), C("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, GC))), 128)),
                  c("label", null, [
                    Ae(p(g(m)("library", "Search within this queue")), 1),
                    Ge(c("input", {
                      "onUpdate:modelValue": E[0] || (E[0] = (f) => z.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [Ri, z.q]
                    ])
                  ]),
                  c("button", KC, p(g(m)("library", "Apply")), 1)
                ], 40, VC),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Qt.loading ? "true" : "false"
                }, [
                  Qt.loading ? (b(), C("span", qC, p(g(m)("library", "Loading review queue…")), 1)) : H("", !0)
                ], 8, WC),
                Qt.error ? (b(), C("p", YC, p(Qt.error), 1)) : H("", !0),
                Tn.value.enabled ? (b(), C("section", XC, [
                  c("div", ZC, [
                    c("p", JC, p(g(m)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(m)("library", "Review next suggestion")), 9, QC)
                  ]),
                  Tn.value.item ? (b(), C("article", eS, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", tS, p(Tn.value.item.title), 1)
                      ]),
                      c("span", nS, [
                        c("bdi", iS, p(Tn.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", aS, [
                      (b(!0), C(le, null, De(Tn.value.fields, (f) => (b(), C("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", rS, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", sS, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", oS, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", lS, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", cS, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", uS, p(f.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: Tn.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Xe.value
                          }, null, 8, fS),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, hS),
                          E[26] || (E[26] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", pS, p(g(m)("library", "Use suggested value")), 1)
                        ], 8, dS)
                      ]))), 128))
                    ]),
                    c("footer", vS, [
                      c("a", {
                        class: "button secondary",
                        href: Tn.value.item.detailsUrl
                      }, p(g(m)("library", "Maintenance")), 9, gS),
                      c("a", {
                        class: "button secondary",
                        href: Tn.value.skipUrl
                      }, p(g(m)("library", "Skip to next suggestion")), 9, mS)
                    ])
                  ])) : H("", !0)
                ])) : H("", !0),
                h.value.length === 0 && !Qt.loading && !Qt.error ? (b(), C("div", bS, [
                  c("h3", null, p(g(m)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: ae.value
                  }, p(g(m)("library", "Back to Library")), 9, yS)
                ])) : (b(), C("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(m)("library", "Review results")
                }, [
                  (b(!0), C(le, null, De(h.value, (f) => (b(), C("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (j) => lt(f, j)
                        }, [
                          c("bdi", CS, p(f.title), 1)
                        ], 8, wS)
                      ]),
                      f.creators ? (b(), C("p", SS, [
                        c("bdi", ES, p(f.creators), 1)
                      ])) : H("", !0),
                      f.scanError ? (b(), C("p", TS, [
                        c("bdi", AS, p(f.scanError), 1)
                      ])) : H("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (j) => lt(f, j)
                      }, p(g(m)("library", "Details")), 9, kS),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, OS)
                    ])
                  ]))), 128))
                ], 8, _S)),
                h.value.length > 0 ? (b(), C("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  B.value.previousUrl ? (b(), C("a", {
                    key: 0,
                    href: B.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, xS)) : (b(), C("span", LS, p(g(m)("library", "Previous")), 1)),
                  c("span", null, [
                    Ae(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                    B.value.total > 0 ? (b(), C("span", RS, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : H("", !0)
                  ]),
                  B.value.nextUrl ? (b(), C("a", {
                    key: 2,
                    href: B.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, IS)) : (b(), C("span", PS, p(g(m)("library", "Next")), 1))
                ], 8, NS)) : H("", !0)
              ])) : Ve.value ? (b(), C("main", DS, [
                c("header", MS, [
                  c("p", $S, p(g(m)("library", "Your library")), 1),
                  c("h2", FS, p(g(m)("library", "Home")), 1)
                ]),
                c("section", zS, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", US, p(g(m)("library", "Continue reading")), 1),
                      c("p", BS, p(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${ae.value}?sort=lastOpened`
                    }, p(g(m)("library", "View all")), 9, HS)
                  ]),
                  qi.value.continueReading.length ? (b(), C("div", jS, [
                    (b(!0), C(le, null, De(qi.value.continueReading, (f) => (b(), C("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (j) => lt(f, j)
                      }, [
                        c("span", GS, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, KS)
                        ])
                      ], 8, VS),
                      c("div", WS, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (j) => lt(f, j)
                          }, [
                            c("bdi", YS, p(f.title), 1)
                          ], 8, qS)
                        ]),
                        f.creators ? (b(), C("p", XS, [
                          c("bdi", ZS, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, JS)
                      ])
                    ]))), 128))
                  ])) : (b(), C("p", QS, p(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", eE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", tE, p(g(m)("library", "Recently added")), 1),
                      c("p", nE, p(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${ae.value}?sort=recent`
                    }, p(g(m)("library", "View all")), 9, iE)
                  ]),
                  qi.value.recentlyAdded.length ? (b(), C("div", aE, [
                    (b(!0), C(le, null, De(qi.value.recentlyAdded, (f) => (b(), C("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (j) => lt(f, j)
                      }, [
                        c("span", sE, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, oE)
                        ])
                      ], 8, rE),
                      c("div", lE, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (j) => lt(f, j)
                          }, [
                            c("bdi", uE, p(f.title), 1)
                          ], 8, cE)
                        ]),
                        f.creators ? (b(), C("p", dE, [
                          c("bdi", fE, p(f.creators), 1)
                        ])) : H("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, hE)
                      ])
                    ]))), 128))
                  ])) : (b(), C("p", pE, p(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", vE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", gE, p(g(m)("library", "Shelves")), 1),
                      c("p", mE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: ue.value }, p(g(m)("library", "View all")), 9, bE)
                  ]),
                  tr.value.length ? (b(), C("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (b(!0), C(le, null, De(tr.value, (f) => (b(), C("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", wE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Fn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, _E))), 128))
                  ], 8, yE)) : (b(), C("p", CE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(Ea.value.count || 0) > 0 ? (b(), C("aside", SE, [
                  c("div", null, [
                    c("h3", EE, p(g(m)("library", "Needs attention")), 1),
                    c("p", TE, p(g(Fn)("library", "%n publication needs better details.", "%n publications need better details.", Number(Ea.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: Ea.value.url
                  }, p(g(m)("library", "Review")), 9, AE)
                ])) : H("", !0)
              ])) : Ee.value ? (b(), C("main", kE, [
                c("header", OE, [
                  c("p", NE, p(g(m)("library", "Your library")), 1),
                  c("h2", xE, p(g(m)("library", "Shelves")), 1),
                  c("p", LE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                nr.value.length ? (b(), C("nav", {
                  key: 0,
                  class: "library-shelf-summary-grid",
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  (b(!0), C(le, null, De(nr.value, (f) => (b(), C("a", {
                    key: f.id,
                    class: "library-shelf-summary-card",
                    href: f.url
                  }, [
                    c("span", PE, [
                      c("strong", null, [
                        c("bdi", DE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Fn)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ]),
                    c("small", ME, [
                      c("bdi", $E, p(f.path), 1)
                    ])
                  ], 8, IE))), 128))
                ], 8, RE)) : (b(), C("section", FE, [
                  c("h3", null, p(g(m)("library", "Shelves")), 1),
                  c("p", zE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", UE, [
                    c("a", {
                      class: "button primary",
                      href: X.value
                    }, p(g(m)("library", "Add a Library root")), 9, BE),
                    c("a", {
                      class: "button secondary",
                      href: ae.value
                    }, p(g(m)("library", "All publications")), 9, HE)
                  ])
                ]))
              ])) : (b(), C("section", jE, [
                c("header", VE, [
                  V.value ? (b(), C("p", GE, p(me.value), 1)) : H("", !0),
                  c("h2", KE, p(G.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: Ze(un, ["prevent"])
                  }, [
                    (b(!0), C(le, null, De(er.value, (f) => (b(), C("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, YE))), 128)),
                    c("div", XE, [
                      c("label", {
                        class: "library-quick-filter-search",
                        title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                      }, [
                        c("span", null, [
                          Ae(p(g(m)("library", "Search")) + " ", 1),
                          E[27] || (E[27] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                        ]),
                        Ge(c("input", {
                          ref_key: "quickSearchInput",
                          ref: Qn,
                          "onUpdate:modelValue": E[1] || (E[1] = (f) => z.q = f),
                          "data-library-quick-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder"),
                          onInput: q
                        }, null, 40, JE), [
                          [Ri, z.q]
                        ])
                      ], 8, ZE)
                    ]),
                    c("label", QE, [
                      Ae(p(g(m)("library", "Sort")), 1),
                      Ge(c("select", {
                        "onUpdate:modelValue": E[2] || (E[2] = (f) => z.sort = f),
                        name: "sort",
                        onChange: un
                      }, [
                        c("option", eT, p(g(m)("library", "Title")), 1),
                        c("option", tT, p(g(m)("library", "Date added")), 1),
                        c("option", nT, p(g(m)("library", "Publication date")), 1),
                        c("option", iT, p(g(m)("library", "Series")), 1),
                        c("option", aT, p(g(m)("library", "Recently opened")), 1),
                        c("option", rT, p(g(m)("library", "Format")), 1)
                      ], 544), [
                        [tn, z.sort]
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
                        class: we({ active: Qe.value === "compact" }),
                        "aria-pressed": Qe.value === "compact" ? "true" : "false",
                        onClick: E[3] || (E[3] = (f) => ki("compact"))
                      }, p(g(m)("library", "Compact")), 11, oT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: we({ active: Qe.value === "gallery" }),
                        "aria-pressed": Qe.value === "gallery" ? "true" : "false",
                        onClick: E[4] || (E[4] = (f) => ki("gallery"))
                      }, p(g(m)("library", "Gallery")), 11, lT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: we({ active: Qe.value === "list" }),
                        "aria-pressed": Qe.value === "list" ? "true" : "false",
                        onClick: E[5] || (E[5] = (f) => ki("list"))
                      }, p(g(m)("library", "List")), 11, cT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: we({ active: Qe.value === "shelf" }),
                        "aria-pressed": Qe.value === "shelf" ? "true" : "false",
                        onClick: E[6] || (E[6] = (f) => ki("shelf"))
                      }, p(g(m)("library", "Shelf")), 11, uT)
                    ], 8, sT)
                  ], 40, qE),
                  c("details", dT, [
                    c("summary", fT, [
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Facets narrow the current results"),
                        "aria-label": `${g(m)("library", "Filters")}: ${g(m)("library", "Facets narrow the current results")}`
                      }, p(g(m)("library", "Filters")), 9, hT),
                      c("b", pT, p(z.shelf ? g(m)("library", "this shelf") : wn.value.length > 0 ? g(m)("library", "current results") : g(m)("library", "whole catalogue")), 1)
                    ]),
                    c("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": g(m)("library", "Catalogue search and filters"),
                      onSubmit: Ze(un, ["prevent"])
                    }, [
                      c("label", null, [
                        Ae(p(g(m)("library", "Type")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[7] || (E[7] = (f) => z.type = f),
                          name: "type"
                        }, [
                          c("option", gT, p(g(m)("library", "All types")), 1),
                          (b(!0), C(le, null, De(O.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, mT))), 128))
                        ], 512), [
                          [tn, z.type]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Publisher")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[8] || (E[8] = (f) => z.publisher = f),
                          name: "publisher"
                        }, [
                          c("option", bT, p(g(m)("library", "All publishers")), 1),
                          (b(!0), C(le, null, De(A.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, yT))), 128))
                        ], 512), [
                          [tn, z.publisher]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Series / periodical")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[9] || (E[9] = (f) => z.publication = f),
                          name: "publication"
                        }, [
                          c("option", _T, p(g(m)("library", "All series and periodicals")), 1),
                          (b(!0), C(le, null, De(x.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, wT))), 128))
                        ], 512), [
                          [tn, z.publication]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Publication year")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[10] || (E[10] = (f) => z.year = f),
                          name: "year"
                        }, [
                          c("option", CT, p(g(m)("library", "All years")), 1),
                          (b(!0), C(le, null, De(K.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, ST))), 128))
                        ], 512), [
                          [tn, z.year]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Creator")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[11] || (E[11] = (f) => z.creator = f),
                          name: "creator",
                          title: g(m)("library", "Exact full-field creator matches only")
                        }, [
                          c("option", TT, p(g(m)("library", "All creators")), 1),
                          (b(!0), C(le, null, De($.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, AT))), 128))
                        ], 8, ET), [
                          [tn, z.creator]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Nextcloud tag")), 1),
                        Ge(c("input", {
                          "onUpdate:modelValue": E[12] || (E[12] = (f) => z.tag = f),
                          type: "text",
                          name: "tag",
                          placeholder: g(m)("library", "photography")
                        }, null, 8, kT), [
                          [Ri, z.tag]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Format")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[13] || (E[13] = (f) => z.format = f),
                          name: "format"
                        }, [
                          c("option", OT, p(g(m)("library", "All formats")), 1),
                          (b(!0), C(le, null, De(T.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(lr(f)), 9, NT))), 128))
                        ], 512), [
                          [tn, z.format]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Shelf")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[14] || (E[14] = (f) => z.shelf = f),
                          name: "shelf"
                        }, [
                          c("option", xT, p(g(m)("library", "All shelves")), 1),
                          (b(!0), C(le, null, De(_.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, LT))), 128))
                        ], 512), [
                          [tn, z.shelf]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Scan status")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[15] || (E[15] = (f) => z.status = f),
                          name: "status"
                        }, [
                          c("option", RT, p(g(m)("library", "All scan statuses")), 1),
                          (b(!0), C(le, null, De(oe.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, IT))), 128))
                        ], 512), [
                          [tn, z.status]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Workflow status")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[16] || (E[16] = (f) => z.workflowStatus = f),
                          name: "workflowStatus"
                        }, [
                          c("option", PT, p(g(m)("library", "All workflow statuses")), 1),
                          (b(!0), C(le, null, De(ce.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, DT))), 128))
                        ], 512), [
                          [tn, z.workflowStatus]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Genre")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[17] || (E[17] = (f) => z.genre = f),
                          name: "genre"
                        }, [
                          c("option", MT, p(g(m)("library", "All genres")), 1),
                          (b(!0), C(le, null, De(te.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, $T))), 128))
                        ], 512), [
                          [tn, z.genre]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Classification")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[18] || (E[18] = (f) => z.classification = f),
                          name: "classification"
                        }, [
                          c("option", FT, p(g(m)("library", "All classifications")), 1),
                          (b(!0), C(le, null, De(fe.value, (f) => (b(), C("option", {
                            key: f,
                            value: f
                          }, p(f), 9, zT))), 128))
                        ], 512), [
                          [tn, z.classification]
                        ])
                      ]),
                      c("label", null, [
                        Ae(p(g(m)("library", "Suggested updates")), 1),
                        Ge(c("select", {
                          "onUpdate:modelValue": E[19] || (E[19] = (f) => z.scannerConflicts = f),
                          name: "scannerConflicts"
                        }, [
                          c("option", UT, p(g(m)("library", "All metadata")), 1),
                          c("option", BT, p(g(m)("library", "Suggested updates")), 1)
                        ], 512), [
                          [tn, z.scannerConflicts]
                        ])
                      ]),
                      c("button", HT, p(g(m)("library", "Apply filters")), 1),
                      c("a", jT, p(g(m)("library", "Clear")), 1)
                    ], 40, vT)
                  ]),
                  c("section", VT, [
                    c("h3", GT, p(g(m)("library", "Shelves")), 1),
                    c("div", KT, [
                      P.value.length > 0 ? (b(), C("label", {
                        key: 0,
                        class: "library-shortcut-select-card library-periodical-groups",
                        title: g(m)("library", "Jump into recurring publications with one click.")
                      }, [
                        c("span", null, p(g(m)("library", "Series / periodicals")), 1),
                        c("select", { onChange: ul }, [
                          c("option", qT, p(g(m)("library", "Choose series")), 1),
                          (b(!0), C(le, null, De(P.value, (f) => (b(), C("option", {
                            key: f.publication,
                            value: Dp(f.publication)
                          }, p(f.publication) + " · " + p(f.itemCount), 9, YT))), 128))
                        ], 32)
                      ], 8, WT)) : H("", !0),
                      K.value.length > 0 ? (b(), C("label", XT, [
                        c("span", null, p(g(m)("library", "Publication year")), 1),
                        c("select", { onChange: ul }, [
                          c("option", ZT, p(g(m)("library", "Choose year")), 1),
                          (b(!0), C(le, null, De(K.value, (f) => (b(), C("option", {
                            key: f,
                            value: Mp(f)
                          }, p(f), 9, JT))), 128))
                        ], 32)
                      ])) : H("", !0),
                      $.value.length > 0 ? (b(), C("label", QT, [
                        c("span", null, p(g(m)("library", "Creator")), 1),
                        c("select", { onChange: ul }, [
                          c("option", eA, p(g(m)("library", "Choose creator")), 1),
                          (b(!0), C(le, null, De($.value, (f) => (b(), C("option", {
                            key: f,
                            value: $p(f)
                          }, p(f), 9, tA))), 128))
                        ], 32)
                      ])) : H("", !0)
                    ])
                  ]),
                  c("section", nA, [
                    c("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(m)("library", "Collections")), 9, iA),
                    c("form", {
                      method: "post",
                      action: jt.value,
                      class: "library-saved-collection-save-form",
                      title: yt.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Xe.value
                      }, null, 8, rA),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Nt.value
                      }, null, 8, sA),
                      c("label", null, [
                        Ae(p(g(m)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !yt.value,
                          autocomplete: "off"
                        }, null, 8, oA)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !yt.value,
                        title: g(m)("library", "Save current view")
                      }, p(g(m)("library", "Save")), 9, lA)
                    ], 8, aA),
                    Ct.value.length > 0 ? (b(), C("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (b(!0), C(le, null, De(Ct.value, (f) => (b(), C("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: Ip(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", null, p(g(Fn)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, uA),
                        c("form", {
                          method: "post",
                          action: Pp(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Xe.value
                          }, null, 8, fA),
                          c("button", hA, p(g(m)("library", "Delete")), 1)
                        ], 8, dA)
                      ]))), 128))
                    ], 8, cA)) : H("", !0)
                  ]),
                  Vt.value.length > 0 ? (b(), C("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", vA, [
                      E[28] || (E[28] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, p(g(m)("library", "Batch actions")), 9, gA),
                      c("small", mA, p(g(m)("library", "Batch actions for selected publications")), 1),
                      c("b", bA, p(g(Fn)("library", "%n publication selected", "%n publications selected", Vt.value.length)), 1)
                    ]),
                    c("p", yA, p(g(Fn)("library", "%n publication selected", "%n publications selected", Vt.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: ir
                    }, [
                      c("form", {
                        method: "post",
                        action: _n.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Xe.value
                        }, null, 8, wA),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, CA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, p(g(m)("library", "Apply")), 9, SA)
                      ], 8, _A),
                      c("form", {
                        method: "post",
                        action: U.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Xe.value
                        }, null, 8, TA),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, AA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, p(g(m)("library", "Remove")), 9, kA)
                      ], 8, EA),
                      c("form", {
                        method: "post",
                        action: v.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Xe.value
                        }, null, 8, NA),
                        (b(!0), C(le, null, De(wi.value, (f) => (b(), C("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, xA))), 128)),
                        E[29] || (E[29] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Reset metadata")), 9, LA)
                      ], 8, OA),
                      c("form", {
                        method: "post",
                        action: w.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Xe.value
                        }, null, 8, IA),
                        (b(!0), C(le, null, De(wi.value, (f) => (b(), C("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, PA))), 128)),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Field")), 1),
                          c("select", DA, [
                            c("option", MA, p(g(m)("library", "Publication type")), 1),
                            c("option", $A, p(g(m)("library", "Subtitle")), 1),
                            c("option", FA, p(g(m)("library", "Creators")), 1),
                            c("option", zA, p(g(m)("library", "Series / periodical")), 1),
                            c("option", UA, p(g(m)("library", "Publication date")), 1),
                            c("option", BA, p(g(m)("library", "Language")), 1),
                            c("option", HA, p(g(m)("library", "Publisher")), 1),
                            c("option", jA, p(g(m)("library", "Genres")), 1),
                            c("option", VA, p(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, GA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, p(g(m)("library", "Preview edit")), 9, KA)
                      ], 8, RA),
                      c("form", {
                        method: "post",
                        action: k.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Xe.value
                        }, null, 8, qA),
                        (b(!0), C(le, null, De(wi.value, (f) => (b(), C("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, YA))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Fresh covers")), 9, XA)
                      ], 8, WA)
                    ], 32)
                  ], 8, pA)) : H("", !0)
                ], 8, WE),
                it.value ? (b(), C("p", ZA, p(it.value), 1)) : H("", !0),
                mt.value ? (b(), C("p", JA, p(mt.value), 1)) : H("", !0),
                Je.value ? (b(), C("p", QA, p(Je.value), 1)) : H("", !0),
                V.value ? (b(), C("section", e2, [
                  c("p", t2, p(me.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: W.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : F.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(J.value), 9, n2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g(Fn)("library", "%n item", "%n items", B.value.total)), 1),
                    I.value?.earliestYear && I.value?.latestYear ? (b(), C("span", a2, p(I.value.earliestYear) + "–" + p(I.value.latestYear), 1)) : H("", !0),
                    I.value?.datedCount ? (b(), C("span", r2, p(I.value.datedCount) + " " + p(g(m)("library", "dated")), 1)) : H("", !0),
                    I.value?.undatedCount > 0 ? (b(), C("span", s2, p(I.value.undatedCount) + " " + p(g(m)("library", "undated")), 1)) : H("", !0)
                  ], 8, i2),
                  N.value && I.value ? (b(), C("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(m)("library", "Publication contents")), 1),
                    c("span", null, p(g(Fn)("library", "%n item", "%n items", I.value.itemCount)), 1),
                    I.value.earliestYear && I.value.latestYear ? (b(), C("span", l2, p(I.value.earliestYear) + "–" + p(I.value.latestYear), 1)) : H("", !0),
                    c("span", null, p(I.value.datedCount) + " " + p(g(m)("library", "with issue/date coverage")), 1),
                    I.value.undatedCount > 0 ? (b(), C("span", c2, p(I.value.undatedCount) + " " + p(g(m)("library", "without dates yet")), 1)) : H("", !0),
                    c("span", null, p(g(m)("library", "read-only grouping")), 1)
                  ], 8, o2)) : H("", !0),
                  N.value && I.value?.issueGroups?.length ? (b(), C("section", u2, [
                    c("div", null, [
                      c("p", d2, p(g(m)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(m)("library", "Read-only issue/date grouping")), 9, f2)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(m)("library", "Visual issue strip")
                    }, [
                      (b(!0), C(le, null, De(I.value.issueGroups, (f) => (b(), C("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        c("small", null, p(g(Fn)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, p2))), 128))
                    ], 8, h2),
                    I.value.gapRanges?.length ? (b(), C("p", v2, p(g(m)("library", "Gap")) + ": " + p(I.value.gapRanges.join(", ")), 1)) : H("", !0),
                    (b(!0), C(le, null, De(I.value.issueGroups, (f) => (b(), C("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (b(!0), C(le, null, De(f.items, (j, Oe) => (b(), C("li", {
                          key: j.itemId
                        }, [
                          c("span", g2, p(j.issueLabel), 1),
                          c("a", {
                            href: j.detailsUrl || "#"
                          }, p(j.title), 9, m2),
                          c("small", null, [
                            Ae(p(j.publicationType), 1),
                            j.publicationDate ? (b(), C(le, { key: 0 }, [
                              Ae(" · " + p(j.publicationDate), 1)
                            ], 64)) : H("", !0)
                          ]),
                          c("small", b2, [
                            Oe > 0 ? (b(), C(le, { key: 0 }, [
                              Ae(p(g(m)("library", "Previous issue")), 1)
                            ], 64)) : H("", !0),
                            Oe > 0 && Oe < f.items.length - 1 ? (b(), C(le, { key: 1 }, [
                              Ae(" · ")
                            ], 64)) : H("", !0),
                            Oe < f.items.length - 1 ? (b(), C(le, { key: 2 }, [
                              Ae(p(g(m)("library", "Next issue")), 1)
                            ], 64)) : H("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    I.value.unknownIssueItems?.length ? (b(), C("details", y2, [
                      c("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(m)("library", "Unknown issue/date")) + " · " + p(I.value.unknownIssueItems.length), 9, _2)
                    ])) : H("", !0)
                  ])) : H("", !0),
                  c("p", null, [
                    c("a", {
                      href: ae.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(m)("library", "Back to full catalogue")), 9, w2)
                  ])
                ])) : H("", !0),
                c("div", C2, [
                  c("p", S2, [
                    Ae(p(g(m)("library", "Showing")) + " " + p(B.value.from) + "–" + p(B.value.to) + " " + p(g(m)("library", "of")) + " " + p(B.value.total) + " " + p(g(m)("library", "catalogue items")), 1),
                    wn.value.length > 0 ? (b(), C("span", E2, [
                      E[30] || (E[30] = Ae(" · ", -1)),
                      c("a", T2, p(g(m)("library", "Clear all filters")), 1)
                    ])) : H("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    c("span", k2, [
                      Ae(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                      B.value.total > 0 ? (b(), C("span", O2, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : H("", !0)
                    ]),
                    B.value.previousUrl ? (b(), C("a", {
                      key: 0,
                      href: B.value.previousUrl
                    }, p(g(m)("library", "Previous")), 9, N2)) : (b(), C("span", x2, p(g(m)("library", "Previous")), 1)),
                    B.value.nextUrl ? (b(), C("a", {
                      key: 2,
                      href: B.value.nextUrl
                    }, p(g(m)("library", "Next")), 9, L2)) : (b(), C("span", R2, p(g(m)("library", "Next")), 1))
                  ], 8, A2)
                ]),
                wn.value.length > 0 ? (b(), C("nav", {
                  key: 4,
                  class: "library-active-filter-chips",
                  "aria-label": g(m)("library", "Active filters")
                }, [
                  c("span", null, p(g(m)("library", "Active filters")), 1),
                  (b(!0), C(le, null, De(wn.value, (f) => (b(), C("a", {
                    key: f.key,
                    href: se(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${g(m)("library", "Remove filter")}: ${f.label}`,
                    onClick: Ze((j) => de(f.key), ["prevent"])
                  }, [
                    c("strong", null, p(f.label) + ":", 1),
                    Ae(" " + p(f.value) + " ", 1),
                    E[31] || (E[31] = c("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, P2))), 128))
                ], 8, I2)) : H("", !0),
                h.value.length === 0 ? (b(), C("div", {
                  key: 5,
                  class: we(["library-empty-content", { "library-first-run-guidance": _e.value || Ne.value, "library-filter-empty-state": Pe.value && !_e.value && !Ne.value }]),
                  role: "status"
                }, [
                  _e.value ? (b(), C(le, { key: 0 }, [
                    c("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(m)("library", "Start with one Library root")), 9, D2),
                    c("p", M2, [
                      c("a", {
                        href: X.value,
                        class: "button primary"
                      }, p(g(m)("library", "Add a Library root")), 9, $2),
                      c("span", F2, p(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Ne.value ? (b(), C(le, { key: 1 }, [
                    c("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(m)("library", "No enabled Library roots")), 9, z2),
                    c("p", U2, [
                      c("a", {
                        href: X.value,
                        class: "button primary"
                      }, p(g(m)("library", "Open Library settings")), 9, B2)
                    ])
                  ], 64)) : Pe.value ? (b(), C(le, { key: 2 }, [
                    c("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(m)("library", "No matches for the current filters")), 9, H2),
                    c("p", j2, [
                      c("a", {
                        href: Te(),
                        class: "button secondary"
                      }, p(g(m)("library", "Clear search")), 9, V2),
                      c("a", G2, p(g(m)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (b(), C(le, { key: 3 }, [
                    c("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(m)("library", "No catalogue items yet")), 9, K2),
                    c("p", W2, [
                      c("a", {
                        href: X.value,
                        class: "button primary"
                      }, p(g(m)("library", "Run a scan from settings")), 9, q2)
                    ])
                  ], 64))
                ], 2)) : H("", !0),
                h.value.length > 0 ? (b(), C("label", Y2, [
                  c("input", {
                    type: "checkbox",
                    checked: Vt.value.length === h.value.length,
                    onChange: ln
                  }, null, 40, X2),
                  Ae(" " + p(g(m)("library", "Select all publications on this page")), 1)
                ])) : H("", !0),
                h.value.length > 0 && Qe.value === "list" ? (b(), C("ul", Z2, [
                  (b(!0), C(le, null, De(h.value, (f) => (b(), C("li", {
                    key: f.id,
                    class: we(["library-catalogue-list-row", { "library-catalogue-list-row--selected": qn.value.has(Number(f.id)), "library-catalogue-list-row--open": En.value && Number(Yn.value) === Number(f.id) }])
                  }, [
                    c("label", J2, [
                      c("input", {
                        type: "checkbox",
                        checked: qn.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (j) => Yi(f.id, j.currentTarget.checked)
                      }, null, 40, Q2)
                    ]),
                    c("div", ek, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (j) => lt(f, j)
                      }, [
                        c("bdi", nk, p(f.title), 1)
                      ], 8, tk),
                      f.creators ? (b(), C("span", ik, [
                        c("bdi", ak, p(f.creators), 1)
                      ])) : H("", !0)
                    ]),
                    c("dl", rk, [
                      f.publication ? (b(), C("div", sk, [
                        c("dt", null, p(g(m)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", ok, p(f.publication), 1)
                        ])
                      ])) : H("", !0),
                      f.publicationDate ? (b(), C("div", lk, [
                        c("dt", null, p(g(m)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : H("", !0),
                      f.extension || f.publicationType ? (b(), C("div", ck, [
                        c("dt", null, p(g(m)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: we(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? lr(f.extension) : f.publicationType), 11, uk)
                        ])
                      ])) : H("", !0),
                      f.shelf ? (b(), C("div", dk, [
                        c("dt", null, p(g(m)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", fk, p(f.shelf), 1)
                        ])
                      ])) : H("", !0)
                    ]),
                    c("div", hk, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, pk),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (j) => lt(f, j)
                      }, p(g(m)("library", "Details")), 9, vk)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (b(), C("div", {
                  key: 8,
                  class: we(["library-cover-gallery", Wi.value])
                }, [
                  (b(!0), C(le, null, De(h.value, (f) => (b(), C("article", {
                    key: f.id,
                    class: we(["library-cover-card", { "library-cover-card--cover-loaded": cr(f) === "loaded", "library-cover-card--cover-error": cr(f) === "error", "library-cover-card--selected": qn.value.has(Number(f.id)), "library-cover-card--open": En.value && Number(Yn.value) === Number(f.id) }])
                  }, [
                    c("label", gk, [
                      c("input", {
                        type: "checkbox",
                        checked: qn.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (j) => Yi(f.id, j.currentTarget.checked)
                      }, null, 40, mk)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": En.value && Number(Yn.value) === Number(f.id) ? "true" : "false",
                      onClick: (j) => lt(f, j)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(m)("library", "Details")), 9, yk),
                      c("span", _k, [
                        cr(f) === "loading" ? (b(), C("span", wk)) : H("", !0),
                        c("img", {
                          class: we(["library-cover-image", { "library-cover-image--loaded": cr(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (j) => Fp(f),
                          onError: (j) => zp(f)
                        }, null, 42, Ck),
                        cr(f) === "error" ? (b(), C("span", Sk, p(g(m)("library", "Cover unavailable")), 1)) : H("", !0)
                      ])
                    ], 8, bk),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Ze((j) => fu(f, j), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Xe.value
                      }, null, 8, Tk),
                      E[32] || (E[32] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, Ak),
                      c("button", {
                        type: "submit",
                        class: we(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": ur[f.id] ? "true" : void 0,
                        disabled: ur[f.id],
                        onClick: Ze((j) => fu(f, j), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, kk),
                      dr[f.id] ? (b(), C("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(dr[f.id]), 9, Ok)) : H("", !0)
                    ], 40, Ek),
                    c("div", Nk, [
                      c("div", xk, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (j) => lt(f, j)
                          }, [
                            c("bdi", Ik, p(f.title), 1)
                          ], 8, Rk)
                        ], 8, Lk),
                        f.creators ? (b(), C("p", Pk, [
                          c("bdi", Dk, p(f.creators), 1)
                        ])) : H("", !0),
                        dl(f) || f.extension ? (b(), C("div", Mk, [
                          f.extension ? (b(), C("span", $k, [
                            c("bdi", Fk, p(lr(f.extension)), 1)
                          ])) : H("", !0),
                          dl(f) ? (b(), C("p", zk, [
                            c("bdi", Uk, p(dl(f)), 1)
                          ])) : H("", !0)
                        ])) : H("", !0),
                        c("div", Bk, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(m)("library", "Open")), 9, Hk),
                          ve(g(oo), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: ke(() => [
                              ve(g(Ua), {
                                href: f.filesUrl
                              }, {
                                default: ke(() => [
                                  Ae(p(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ve(g(Ua), {
                                href: f.downloadUrl
                              }, {
                                default: ke(() => [
                                  Ae(p(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ve(g(Ua), {
                                href: f.detailsUrl
                              }, {
                                default: ke(() => [
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
                ], 2)) : H("", !0),
                h.value.length > 0 ? (b(), C("nav", {
                  key: 9,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  c("span", Vk, [
                    Ae(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                    B.value.total > 0 ? (b(), C("span", Gk, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : H("", !0)
                  ]),
                  B.value.previousUrl ? (b(), C("a", {
                    key: 0,
                    href: B.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, Kk)) : (b(), C("span", Wk, p(g(m)("library", "Previous")), 1)),
                  B.value.nextUrl ? (b(), C("a", {
                    key: 2,
                    href: B.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, qk)) : (b(), C("span", Yk, p(g(m)("library", "Next")), 1))
                ], 8, jk)) : H("", !0)
              ]))
            ], 8, $C)
          ]),
          _: 1
        }),
        ve(g(yC), {
          ref_key: "sidebarComponent",
          ref: Xt,
          class: "library-native-item-sidebar",
          open: En.value,
          "no-toggle": "",
          loading: bt.loading,
          name: Se.value?.title || g(m)("library", "Publication details"),
          subname: Se.value?.creators || "",
          role: Xn.value ? "dialog" : void 0,
          "aria-modal": Xn.value ? "true" : void 0,
          "aria-labelledby": Xn.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Xn.value && Se.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: ea,
          onClosed: cl,
          onClose: Na
        }, {
          default: ke(() => [
            c("div", Xk, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: ps,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(Se.value?.title || g(m)("library", "Publication details")), 513),
              bt.loading && !Se.value ? (b(), C("p", Zk, p(g(m)("library", "Loading publication details…")), 1)) : bt.error ? (b(), C("div", {
                key: 1,
                class: "library-sidebar-state",
                role: bt.missing ? "status" : "alert"
              }, [
                c("p", null, p(bt.error), 1),
                bt.missing ? H("", !0) : (b(), C("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: E[20] || (E[20] = (f) => kn(Yn.value, { historyMode: "none" }))
                }, p(g(m)("library", "Try again")), 1))
              ], 8, Jk)) : Se.value ? (b(), C(le, { key: 2 }, [
                c("p", Qk, p(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", eO, [
                  c("span", tO, p(g(m)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: Se.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, nO),
                  c("div", iO, [
                    c("p", aO, [
                      c("bdi", rO, p(Se.value.publicationType || g(m)("library", "Publication")), 1),
                      Se.value.extension ? (b(), C("span", sO, [
                        E[33] || (E[33] = Ae(" · ", -1)),
                        c("bdi", oO, p(lr(Se.value.extension)), 1)
                      ])) : H("", !0)
                    ]),
                    c("div", lO, [
                      c("a", {
                        class: "button primary",
                        href: Se.value.openUrl
                      }, p(g(m)("library", "Open")), 9, cO),
                      ve(g(oo), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: ke(() => [
                          ve(g(Ua), {
                            href: Se.value.filesUrl
                          }, {
                            default: ke(() => [
                              Ae(p(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ve(g(Ua), {
                            href: Se.value.downloadUrl
                          }, {
                            default: ke(() => [
                              Ae(p(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ve(g(Ua), {
                            href: Se.value.detailsUrl
                          }, {
                            default: ke(() => [
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
                  (b(), C(le, null, De(sl, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: we({ active: Cn.value === f.key }),
                    "aria-current": Cn.value === f.key ? "page" : void 0,
                    onClick: (j) => Cn.value = f.key
                  }, p(g(m)("library", f.label)), 11, dO)), 64))
                ], 8, uO),
                Cn.value === "overview" ? (b(), C("section", fO, [
                  c("h3", hO, p(g(m)("library", "Overview")), 1),
                  Se.value.description ? (b(), C("p", pO, [
                    c("bdi", vO, p(Se.value.description), 1)
                  ])) : H("", !0),
                  c("dl", gO, [
                    Se.value.publication ? (b(), C("div", mO, [
                      c("dt", null, p(g(m)("library", "Series")), 1),
                      c("dd", null, p(Se.value.publication), 1)
                    ])) : H("", !0),
                    Se.value.publicationDate ? (b(), C("div", bO, [
                      c("dt", null, p(g(m)("library", "Date")), 1),
                      c("dd", null, p(Se.value.publicationDate), 1)
                    ])) : H("", !0),
                    Se.value.publisher ? (b(), C("div", yO, [
                      c("dt", null, p(g(m)("library", "Publisher")), 1),
                      c("dd", null, p(Se.value.publisher), 1)
                    ])) : H("", !0),
                    Se.value.language ? (b(), C("div", _O, [
                      c("dt", null, p(g(m)("library", "Language")), 1),
                      c("dd", null, p(Se.value.language), 1)
                    ])) : H("", !0),
                    Se.value.shelf ? (b(), C("div", wO, [
                      c("dt", null, p(g(m)("library", "Shelf")), 1),
                      c("dd", null, p(Se.value.shelf), 1)
                    ])) : H("", !0)
                  ])
                ])) : Cn.value === "metadata" ? (b(), C("section", CO, [
                  c("h3", SO, p(g(m)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ze(ka, ["prevent"])
                  }, [
                    c("label", null, [
                      Ae(p(g(m)("library", "Title")), 1),
                      Ge(c("input", {
                        "onUpdate:modelValue": E[21] || (E[21] = (f) => dt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [Ri, dt.title]
                      ])
                    ]),
                    c("label", null, [
                      Ae(p(g(m)("library", "Publication date")), 1),
                      Ge(c("input", {
                        "onUpdate:modelValue": E[22] || (E[22] = (f) => dt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, EO), [
                        [Ri, dt.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(m)("library", "Identifiers")), 1),
                      (b(!0), C(le, null, De(dt.identifiers, (f, j) => (b(), C("div", {
                        key: j,
                        class: "library-sidebar-identifier"
                      }, [
                        Ge(c("input", {
                          "onUpdate:modelValue": (Oe) => f.scheme = Oe,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, TO), [
                          [Ri, f.scheme]
                        ]),
                        Ge(c("input", {
                          "onUpdate:modelValue": (Oe) => f.displayValue = Oe,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, AO), [
                          [Ri, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (Oe) => ol(j)
                        }, p(g(m)("library", "Remove")), 9, kO)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: Zn
                      }, p(g(m)("library", "Add identifier")), 1)
                    ]),
                    c("p", OO, p(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Gt.error ? (b(), C("p", NO, p(Gt.error), 1)) : Gt.saved ? (b(), C("p", xO, p(g(m)("library", "Metadata saved.")), 1)) : H("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Gt.saving
                    }, p(Gt.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, LO)
                  ], 32),
                  Ji(Se.value).length ? (b(), C("section", RO, [
                    c("h4", IO, p(g(m)("library", "Scanner suggestions")), 1),
                    c("p", PO, p(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (b(!0), C(le, null, De(Ji(Se.value), (f) => (b(), C("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          Ae(p(g(m)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          E[34] || (E[34] = c("br", null, null, -1)),
                          Ae(p(g(m)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : H("", !0)
                ])) : (b(), C("section", DO, [
                  c("h3", MO, p(g(m)("library", "Activity")), 1),
                  c("dl", $O, [
                    c("div", null, [
                      c("dt", null, p(g(m)("library", "Scan status")), 1),
                      c("dd", null, p(Se.value.scanStatus || "—"), 1)
                    ]),
                    Se.value.workflowStatus ? (b(), C("div", FO, [
                      c("dt", null, p(g(m)("library", "Workflow")), 1),
                      c("dd", null, p(Se.value.workflowStatus), 1)
                    ])) : H("", !0),
                    Se.value.metadataSource ? (b(), C("div", zO, [
                      c("dt", null, p(g(m)("library", "Metadata source")), 1),
                      c("dd", null, p(Se.value.metadataSource), 1)
                    ])) : H("", !0),
                    Se.value.cachedPath ? (b(), C("div", UO, [
                      c("dt", null, p(g(m)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", BO, p(Se.value.cachedPath), 1)
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
                    disabled: !Ta.value,
                    onClick: E[23] || (E[23] = (f) => ta(Ta.value))
                  }, p(g(m)("library", "Previous item")), 9, jO),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Aa.value,
                    onClick: E[24] || (E[24] = (f) => ta(Aa.value))
                  }, p(g(m)("library", "Next item")), 9, VO)
                ], 8, HO)
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
function qO() {
  window.LibraryStartupWatchdog?.fail();
}
function YO(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Kc("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !YO(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Tm(WO, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  qO(), console.error("[library] Vue startup failed", e);
}
