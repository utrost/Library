// @__NO_SIDE_EFFECTS__
function Lc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Be = {}, Ua = [], Sn = () => {
}, uf = () => !1, Uo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bo = (e) => e.startsWith("onUpdate:"), ft = Object.assign, Rc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zp = Object.prototype.hasOwnProperty, Ve = (e, t) => Zp.call(e, t), ye = Array.isArray, Ii = (e) => is(e) === "[object Map]", ma = (e) => is(e) === "[object Set]", mu = (e) => is(e) === "[object Date]", xe = (e) => typeof e == "function", Qe = (e) => typeof e == "string", Rn = (e) => typeof e == "symbol", Ge = (e) => e !== null && typeof e == "object", df = (e) => (Ge(e) || xe(e)) && xe(e.then) && xe(e.catch), ff = Object.prototype.toString, is = (e) => ff.call(e), Jp = (e) => is(e).slice(8, -1), hf = (e) => is(e) === "[object Object]", Ic = (e) => Qe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Sr = /* @__PURE__ */ Lc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ho = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Qp = /-\w/g, Ft = Ho(
  (e) => e.replace(Qp, (t) => t.slice(1).toUpperCase())
), ev = /\B([A-Z])/g, mi = Ho(
  (e) => e.replace(ev, "-$1").toLowerCase()
), jo = Ho((e) => e.charAt(0).toUpperCase() + e.slice(1)), pl = Ho(
  (e) => e ? `on${jo(e)}` : ""
), At = (e, t) => !Object.is(e, t), Is = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, pf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Vo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, tv = (e) => {
  const t = Qe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let bu;
const Go = () => bu || (bu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function dn(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = Qe(i) ? rv(i) : dn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (Qe(e) || Ge(e))
    return e;
}
const nv = /;(?![^(]*\))/g, iv = /:([^]+)/, av = /\/\*[^]*?\*\//g;
function rv(e) {
  const t = {};
  return e.replace(av, "").split(nv).forEach((n) => {
    if (n) {
      const i = n.split(iv);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function we(e) {
  let t = "";
  if (Qe(e))
    t = e;
  else if (ye(e))
    for (let n = 0; n < e.length; n++) {
      const i = we(e[n]);
      i && (t += i + " ");
    }
  else if (Ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Fs(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Qe(t) && (e.class = we(t)), n && (e.style = dn(n)), e;
}
const sv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ov = /* @__PURE__ */ Lc(sv);
function vf(e) {
  return !!e || e === "";
}
function lv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = $i(e[i], t[i]);
  return n;
}
function yu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (!i[s] && $i(a, n[s])) {
        r = s;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function $i(e, t) {
  if (e === t) return !0;
  let n = mu(e), i = mu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Rn(e), i = Rn(t), n || i)
    return e === t;
  if (n = ye(e), i = ye(t), n || i)
    return n && i ? lv(e, t) : !1;
  if (n = Ge(e), i = Ge(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Ii(e), i = Ii(t), n || i || (n = ma(e), i = ma(t), n || i))
      return n && i ? yu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const s in e) {
      const o = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (o && !l || !o && l || !$i(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function cv(e, t) {
  return e.findIndex((n) => $i(n, t));
}
const gf = (e) => !!(e && e.__v_isRef === !0), p = (e) => Qe(e) ? e : e == null ? "" : ye(e) || Ge(e) && (e.toString === ff || !xe(e.toString)) ? gf(e) ? p(e.value) : JSON.stringify(e, mf, 2) : String(e), mf = (e, t) => gf(t) ? mf(e, t.value) : Ii(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[vl(i, r) + " =>"] = a, n),
    {}
  )
} : ma(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => vl(n))
} : Rn(t) ? vl(t) : Ge(t) && !ye(t) && !hf(t) ? String(t) : t, vl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Rn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function uv(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let Tt;
class dv {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Tt && (Tt.active ? (this.parent = Tt, this.index = (Tt.scopes || (Tt.scopes = [])).push(
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
      const n = Tt;
      try {
        return Tt = this, t();
      } finally {
        Tt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Tt, Tt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Tt === this)
        Tt = this.prevScope;
      else {
        let t = Tt;
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
function fv() {
  return Tt;
}
let Je;
const gl = /* @__PURE__ */ new WeakSet();
class bf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Tt && (Tt.active ? Tt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, gl.has(this) && (gl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _f(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _u(this), wf(this);
    const t = Je, n = xn;
    Je = this, xn = !0;
    try {
      return this.fn();
    } finally {
      Cf(this), Je = t, xn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mc(t);
      this.deps = this.depsTail = void 0, _u(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? gl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Jl(this) && this.run();
  }
  get dirty() {
    return Jl(this);
  }
}
let yf = 0, Er, Tr;
function _f(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Tr, Tr = e;
    return;
  }
  e.next = Er, Er = e;
}
function Pc() {
  yf++;
}
function Dc() {
  if (--yf > 0)
    return;
  if (Tr) {
    let t = Tr;
    for (Tr = void 0; t; ) {
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
function wf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Cf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Mc(i), hv(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Jl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Sf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Sf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === zr) || (e.globalVersion = zr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Jl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Je, i = xn;
  Je = e, xn = !0;
  try {
    wf(e);
    const a = e.fn(e._value);
    (t.version === 0 || At(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Je = n, xn = i, Cf(e), e.flags &= -3;
  }
}
function Mc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Mc(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function hv(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let xn = !0;
const Ef = [];
function hi() {
  Ef.push(xn), xn = !1;
}
function pi() {
  const e = Ef.pop();
  xn = e === void 0 ? !0 : e;
}
function _u(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Je;
    Je = void 0;
    try {
      t();
    } finally {
      Je = n;
    }
  }
}
let zr = 0;
class pv {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ko {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Je || !xn || Je === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Je)
      n = this.activeLink = new pv(Je, this), Je.deps ? (n.prevDep = Je.depsTail, Je.depsTail.nextDep = n, Je.depsTail = n) : Je.deps = Je.depsTail = n, Tf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = Je.depsTail, n.nextDep = void 0, Je.depsTail.nextDep = n, Je.depsTail = n, Je.deps === n && (Je.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, zr++, this.notify(t);
  }
  notify(t) {
    Pc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Dc();
    }
  }
}
function Tf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Tf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Ql = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ Symbol(
  ""
), ec = /* @__PURE__ */ Symbol(
  ""
), Ur = /* @__PURE__ */ Symbol(
  ""
);
function Dt(e, t, n) {
  if (xn && Je) {
    let i = Ql.get(e);
    i || Ql.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Ko()), a.map = i, a.key = n), a.track();
  }
}
function si(e, t, n, i, a, r) {
  const s = Ql.get(e);
  if (!s) {
    zr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (Pc(), t === "clear")
    s.forEach(o);
  else {
    const l = ye(e), d = l && Ic(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, _) => {
        (_ === "length" || _ === Ur || !Rn(_) && _ >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), d && o(s.get(Ur)), t) {
        case "add":
          l ? d && o(s.get("length")) : (o(s.get(pa)), Ii(e) && o(s.get(ec)));
          break;
        case "delete":
          l || (o(s.get(pa)), Ii(e) && o(s.get(ec)));
          break;
        case "set":
          Ii(e) && o(s.get(pa));
          break;
      }
  }
  Dc();
}
function Ra(e) {
  const t = /* @__PURE__ */ He(e);
  return t === e ? t : (Dt(t, "iterate", Ur), /* @__PURE__ */ En(e) ? t : t.map(In));
}
function Wo(e) {
  return Dt(e = /* @__PURE__ */ He(e), "iterate", Ur), e;
}
function Vn(e, t) {
  return /* @__PURE__ */ vi(e) ? qa(/* @__PURE__ */ va(e) ? In(t) : t) : In(t);
}
const vv = {
  __proto__: null,
  [Symbol.iterator]() {
    return ml(this, Symbol.iterator, (e) => Vn(this, e));
  },
  concat(...e) {
    return Ra(this).concat(
      ...e.map((t) => ye(t) ? Ra(t) : t)
    );
  },
  entries() {
    return ml(this, "entries", (e) => (e[1] = Vn(this, e[1]), e));
  },
  every(e, t) {
    return Jn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Jn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Vn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Jn(
      this,
      "find",
      e,
      t,
      (n) => Vn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Jn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Jn(
      this,
      "findLast",
      e,
      t,
      (n) => Vn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Jn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Jn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return bl(this, "includes", e);
  },
  indexOf(...e) {
    return bl(this, "indexOf", e);
  },
  join(e) {
    return Ra(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return bl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Jn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return or(this, "pop");
  },
  push(...e) {
    return or(this, "push", e);
  },
  reduce(e, ...t) {
    return wu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return wu(this, "reduceRight", e, t);
  },
  shift() {
    return or(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Jn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return or(this, "splice", e);
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
    return or(this, "unshift", e);
  },
  values() {
    return ml(this, "values", (e) => Vn(this, e));
  }
};
function ml(e, t, n) {
  const i = Wo(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ En(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const gv = Array.prototype;
function Jn(e, t, n, i, a, r) {
  const s = Wo(e), o = s !== e && !/* @__PURE__ */ En(e), l = s[t];
  if (l !== gv[t]) {
    const h = l.apply(e, r);
    return o ? In(h) : h;
  }
  let d = n;
  s !== e && (o ? d = function(h, _) {
    return n.call(this, Vn(e, h), _, e);
  } : n.length > 2 && (d = function(h, _) {
    return n.call(this, h, _, e);
  }));
  const u = l.call(s, d, i);
  return o && a ? a(u) : u;
}
function wu(e, t, n, i) {
  const a = Wo(e), r = a !== e && !/* @__PURE__ */ En(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(d, u, h) {
    return o && (o = !1, d = Vn(e, d)), n.call(this, d, Vn(e, u), h, e);
  }) : n.length > 3 && (s = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Vn(e, l) : l;
}
function bl(e, t, n) {
  const i = /* @__PURE__ */ He(e);
  Dt(i, "iterate", Ur);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ zc(n[0]) ? (n[0] = /* @__PURE__ */ He(n[0]), i[t](...n)) : a;
}
function or(e, t, n = []) {
  hi(), Pc();
  const i = (/* @__PURE__ */ He(e))[t].apply(e, n);
  return Dc(), pi(), i;
}
const mv = /* @__PURE__ */ Lc("__proto__,__v_isRef,__isVue"), Af = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Rn)
);
function bv(e) {
  Rn(e) || (e = String(e));
  const t = /* @__PURE__ */ He(this);
  return Dt(t, "has", e), t.hasOwnProperty(e);
}
class kf {
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
      return i === (a ? r ? Ov : Lf : r ? xf : Nf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = ye(t);
    if (!a) {
      let l;
      if (s && (l = vv[n]))
        return l;
      if (n === "hasOwnProperty")
        return bv;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ zt(t) ? t : i
    );
    if ((Rn(n) ? Af.has(n) : mv(n)) || (a || Dt(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ zt(o)) {
      const l = s && Ic(n) ? o : o.value;
      return a && Ge(l) ? /* @__PURE__ */ Br(l) : l;
    }
    return Ge(o) ? a ? /* @__PURE__ */ Br(o) : /* @__PURE__ */ Pt(o) : o;
  }
}
class Of extends kf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = ye(t) && Ic(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ vi(r);
      if (!/* @__PURE__ */ En(i) && !/* @__PURE__ */ vi(i) && (r = /* @__PURE__ */ He(r), i = /* @__PURE__ */ He(i)), !s && /* @__PURE__ */ zt(r) && !/* @__PURE__ */ zt(i))
        return d || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : Ve(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ zt(t) ? t : a
    );
    return t === /* @__PURE__ */ He(a) && l && (o ? At(i, r) && si(t, "set", n, i) : si(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Ve(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && si(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Rn(n) || !Af.has(n)) && Dt(t, "has", n), i;
  }
  ownKeys(t) {
    return Dt(
      t,
      "iterate",
      ye(t) ? "length" : pa
    ), Reflect.ownKeys(t);
  }
}
class yv extends kf {
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
const _v = /* @__PURE__ */ new Of(), wv = /* @__PURE__ */ new yv(), Cv = /* @__PURE__ */ new Of(!0);
const tc = (e) => e, ys = (e) => Reflect.getPrototypeOf(e);
function Sv(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ He(a), s = Ii(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, d = a[e](...i), u = n ? tc : t ? qa : In;
    return !t && Dt(
      r,
      "iterate",
      l ? ec : pa
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
function _s(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ev(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ He(r), o = /* @__PURE__ */ He(a);
      e || (At(a, o) && Dt(s, "get", a), Dt(s, "get", o));
      const { has: l } = ys(s), d = t ? tc : e ? qa : In;
      if (l.call(s, a))
        return d(r.get(a));
      if (l.call(s, o))
        return d(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Dt(/* @__PURE__ */ He(a), "iterate", pa), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ He(r), o = /* @__PURE__ */ He(a);
      return e || (At(a, o) && Dt(s, "has", a), Dt(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ He(o), d = t ? tc : e ? qa : In;
      return !e && Dt(l, "iterate", pa), o.forEach((u, h) => a.call(r, d(u), d(h), s));
    }
  };
  return ft(
    n,
    e ? {
      add: _s("add"),
      set: _s("set"),
      delete: _s("delete"),
      clear: _s("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ He(this), s = ys(r), o = /* @__PURE__ */ He(a), l = !t && !/* @__PURE__ */ En(a) && !/* @__PURE__ */ vi(a) ? o : a;
        return s.has.call(r, l) || At(a, l) && s.has.call(r, a) || At(o, l) && s.has.call(r, o) || (r.add(l), si(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ En(r) && !/* @__PURE__ */ vi(r) && (r = /* @__PURE__ */ He(r));
        const s = /* @__PURE__ */ He(this), { has: o, get: l } = ys(s);
        let d = o.call(s, a);
        d || (a = /* @__PURE__ */ He(a), d = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), d ? At(r, u) && si(s, "set", a, r) : si(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ He(this), { has: s, get: o } = ys(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ He(a), l = s.call(r, a)), o && o.call(r, a);
        const d = r.delete(a);
        return l && si(r, "delete", a, void 0), d;
      },
      clear() {
        const a = /* @__PURE__ */ He(this), r = a.size !== 0, s = a.clear();
        return r && si(
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
    n[a] = Sv(a, e, t);
  }), n;
}
function $c(e, t) {
  const n = Ev(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ve(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Tv = {
  get: /* @__PURE__ */ $c(!1, !1)
}, Av = {
  get: /* @__PURE__ */ $c(!1, !0)
}, kv = {
  get: /* @__PURE__ */ $c(!0, !1)
};
const Nf = /* @__PURE__ */ new WeakMap(), xf = /* @__PURE__ */ new WeakMap(), Lf = /* @__PURE__ */ new WeakMap(), Ov = /* @__PURE__ */ new WeakMap();
function Nv(e) {
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
  return /* @__PURE__ */ vi(e) ? e : Fc(
    e,
    !1,
    _v,
    Tv,
    Nf
  );
}
// @__NO_SIDE_EFFECTS__
function xv(e) {
  return Fc(
    e,
    !1,
    Cv,
    Av,
    xf
  );
}
// @__NO_SIDE_EFFECTS__
function Br(e) {
  return Fc(
    e,
    !0,
    wv,
    kv,
    Lf
  );
}
function Fc(e, t, n, i, a) {
  if (!Ge(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Nv(Jp(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return /* @__PURE__ */ vi(e) ? /* @__PURE__ */ va(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function vi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function zc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ He(t) : e;
}
function Lv(e) {
  return !Ve(e, "__v_skip") && Object.isExtensible(e) && pf(e, "__v_skip", !0), e;
}
const In = (e) => Ge(e) ? /* @__PURE__ */ Pt(e) : e, qa = (e) => Ge(e) ? /* @__PURE__ */ Br(e) : e;
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  return If(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Rf(e) {
  return If(e, !0);
}
function If(e, t) {
  return /* @__PURE__ */ zt(e) ? e : new Rv(e, t);
}
class Rv {
  constructor(t, n) {
    this.dep = new Ko(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ He(t), this._value = n ? t : In(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ En(t) || /* @__PURE__ */ vi(t);
    t = i ? t : /* @__PURE__ */ He(t), At(t, n) && (this._rawValue = t, this._value = i ? t : In(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ zt(e) ? e.value : e;
}
function ui(e) {
  return xe(e) ? e() : g(e);
}
const Iv = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ zt(a) && !/* @__PURE__ */ zt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Pf(e) {
  return /* @__PURE__ */ va(e) ? e : new Proxy(e, Iv);
}
class Pv {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ko(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Dv(e) {
  return new Pv(e);
}
class Mv {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ko(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = zr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Je !== this)
      return _f(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Sf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function $v(e, t, n = !1) {
  let i, a;
  return xe(e) ? i = e : (i = e.get, a = e.set), new Mv(i, a, n);
}
const ws = {}, zs = /* @__PURE__ */ new WeakMap();
let ra;
function Fv(e, t = !1, n = ra) {
  if (n) {
    let i = zs.get(n);
    i || zs.set(n, i = []), i.push(e);
  }
}
function zv(e, t, n = Be) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, d = (M) => a ? M : /* @__PURE__ */ En(M) || a === !1 || a === 0 ? oi(M, 1) : oi(M);
  let u, h, _, T, O = !1, A = !1;
  if (/* @__PURE__ */ zt(e) ? (h = () => e.value, O = /* @__PURE__ */ En(e)) : /* @__PURE__ */ va(e) ? (h = () => d(e), O = !0) : ye(e) ? (A = !0, O = e.some((M) => /* @__PURE__ */ va(M) || /* @__PURE__ */ En(M)), h = () => e.map((M) => {
    if (/* @__PURE__ */ zt(M))
      return M.value;
    if (/* @__PURE__ */ va(M))
      return d(M);
    if (xe(M))
      return l ? l(M, 2) : M();
  })) : xe(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (_) {
      hi();
      try {
        _();
      } finally {
        pi();
      }
    }
    const M = ra;
    ra = u;
    try {
      return l ? l(e, 3, [T]) : e(T);
    } finally {
      ra = M;
    }
  } : h = Sn, t && a) {
    const M = h, oe = a === !0 ? 1 / 0 : a;
    h = () => oi(M(), oe);
  }
  const x = fv(), P = () => {
    u.stop(), x && x.active && Rc(x.effects, u);
  };
  if (r && t) {
    const M = t;
    t = (...oe) => {
      const de = M(...oe);
      return P(), de;
    };
  }
  let I = A ? new Array(e.length).fill(ws) : ws;
  const K = (M) => {
    if (!(!(u.flags & 1) || !u.dirty && !M))
      if (t) {
        const oe = u.run();
        if (M || a || O || (A ? oe.some((de, ne) => At(de, I[ne])) : At(oe, I))) {
          _ && _();
          const de = ra;
          ra = u;
          try {
            const ne = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              I === ws ? void 0 : A && I[0] === ws ? [] : I,
              T
            ];
            I = oe, l ? l(t, 3, ne) : (
              // @ts-expect-error
              t(...ne)
            );
          } finally {
            ra = de;
          }
        }
      } else
        u.run();
  };
  return o && o(K), u = new bf(h), u.scheduler = s ? () => s(K, !1) : K, T = (M) => Fv(M, !1, u), _ = u.onStop = () => {
    const M = zs.get(u);
    if (M) {
      if (l)
        l(M, 4);
      else
        for (const oe of M) oe();
      zs.delete(u);
    }
  }, t ? i ? K(!0) : I = u.run() : s ? s(K.bind(null, !0), !0) : u.run(), P.pause = u.pause.bind(u), P.resume = u.resume.bind(u), P.stop = P, P;
}
function oi(e, t = 1 / 0, n) {
  if (t <= 0 || !Ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ zt(e))
    oi(e.value, t, n);
  else if (ye(e))
    for (let i = 0; i < e.length; i++)
      oi(e[i], t, n);
  else if (ma(e) || Ii(e))
    e.forEach((i) => {
      oi(i, t, n);
    });
  else if (hf(e)) {
    for (const i in e)
      oi(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && oi(e[i], t, n);
  }
  return e;
}
function as(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    qo(a, t, n);
  }
}
function Tn(e, t, n, i) {
  if (xe(e)) {
    const a = as(e, t, n, i);
    return a && df(a) && a.catch((r) => {
      qo(r, t, n);
    }), a;
  }
  if (ye(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Tn(e[r], t, n, i));
    return a;
  }
}
function qo(e, t, n, i = !0) {
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
      hi(), as(r, null, 10, [
        e,
        l,
        d
      ]), pi();
      return;
    }
  }
  Uv(e, n, a, i, s);
}
function Uv(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const qt = [];
let Bn = -1;
const Ba = [];
let Li = null, $a = 0;
const Df = /* @__PURE__ */ Promise.resolve();
let Us = null;
function Kn(e) {
  const t = Us || Df;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Bv(e) {
  let t = Bn + 1, n = qt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = qt[i], r = Hr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Uc(e) {
  if (!(e.flags & 1)) {
    const t = Hr(e), n = qt[qt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Hr(n) ? qt.push(e) : qt.splice(Bv(t), 0, e), e.flags |= 1, Mf();
  }
}
function Mf() {
  Us || (Us = Df.then(zf));
}
function $f(e) {
  if (!ye(e))
    Li && e.id === -1 ? Li.splice($a + 1, 0, e) : e.flags & 1 || (Ba.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ba.push(e[t]);
  Mf();
}
function Cu(e, t, n = Bn + 1) {
  for (; n < qt.length; n++) {
    const i = qt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      qt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Ff(e) {
  if (Ba.length) {
    const t = [...new Set(Ba)].sort(
      (n, i) => Hr(n) - Hr(i)
    );
    if (Ba.length = 0, Li) {
      for (let n = 0; n < t.length; n++)
        Li.push(t[n]);
      return;
    }
    for (Li = t, $a = 0; $a < Li.length; $a++) {
      const n = Li[$a];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Li = null, $a = 0;
  }
}
const Hr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zf(e) {
  try {
    for (Bn = 0; Bn < qt.length; Bn++) {
      const t = qt[Bn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), as(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Bn < qt.length; Bn++) {
      const t = qt[Bn];
      t && (t.flags &= -2);
    }
    Bn = -1, qt.length = 0, Ff(), Us = null, (qt.length || Ba.length) && zf();
  }
}
let Ot = null, Yo = null;
function Bs(e) {
  const t = Ot;
  return Ot = e, Yo = e && e.type.__scopeId || null, t;
}
function Hv(e) {
  Yo = e;
}
function jv() {
  Yo = null;
}
const Vv = (e) => Ae;
function Ae(e, t = Ot, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Ks(-1);
    const r = Bs(t), s = di.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = di.length; l > s; l--) Wc();
      Bs(r), i._d && Ks(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function je(e, t) {
  if (Ot === null)
    return e;
  const n = tl(Ot), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = Be] = t[a];
    r && (xe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && oi(s), i.push({
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
function Qi(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (hi(), Tn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), pi());
  }
}
function _n(e, t) {
  if ($t) {
    let n = $t.provides;
    const i = $t.parent && $t.parent.provides;
    i === n && (n = $t.provides = Object.create(i)), n[e] = t;
  }
}
function Mt(e, t, n = !1) {
  const i = ya();
  if (i || ja) {
    let a = ja ? ja._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && xe(t) ? t.call(i && i.proxy) : t;
  }
}
const Gv = /* @__PURE__ */ Symbol.for("v-scx"), Kv = () => Mt(Gv);
function Wv(e, t) {
  return Xo(e, null, t);
}
function qv(e, t) {
  return Xo(
    e,
    null,
    { flush: "sync" }
  );
}
function Yt(e, t, n) {
  return Xo(e, t, n);
}
function Xo(e, t, n = Be) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = ft({}, n), l = t && i || !t && r !== "post";
  let d;
  if (qr) {
    if (r === "sync") {
      const T = Kv();
      d = T.__watcherHandles || (T.__watcherHandles = []);
    } else if (!l) {
      const T = () => {
      };
      return T.stop = Sn, T.resume = Sn, T.pause = Sn, T;
    }
  }
  const u = $t;
  o.call = (T, O, A) => Tn(T, u, O, A);
  let h = !1;
  r === "post" ? o.scheduler = (T) => {
    Kt(T, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (T, O) => {
    O ? T() : Uc(T);
  }), o.augmentJob = (T) => {
    t && (T.flags |= 4), h && (T.flags |= 2, u && (T.id = u.uid, T.i = u));
  };
  const _ = zv(e, t, o);
  return qr && (d ? d.push(_) : l && _()), _;
}
function Yv(e, t, n) {
  const i = this.proxy, a = Qe(e) ? e.includes(".") ? Uf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  xe(t) ? r = t : (r = t.handler, n = t);
  const s = os(this), o = Xo(a, r.bind(i), n);
  return s(), o;
}
function Uf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Oi = /* @__PURE__ */ new WeakMap(), Bf = /* @__PURE__ */ Symbol("_vte"), Zo = (e) => e.__isTeleport, oa = (e) => e && (e.disabled || e.disabled === ""), Xv = (e) => e && (e.defer || e.defer === ""), Su = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Eu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, nc = (e, t) => {
  const n = e && e.to;
  return Qe(n) ? t ? t(n) : null : n;
}, Zv = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, d) {
    const {
      mc: u,
      pc: h,
      pbc: _,
      o: { insert: T, querySelector: O, createText: A, createComment: x, parentNode: P }
    } = d, I = oa(t.props);
    let { dynamicChildren: K } = t;
    const M = (ne, pe, B) => {
      ne.shapeFlag & 16 && u(
        ne.children,
        pe,
        B,
        a,
        r,
        s,
        o,
        l
      );
    }, oe = (ne = t) => {
      const pe = oa(ne.props), B = ne.target = nc(ne.props, O), F = ic(B, ne, A, T);
      B && (s !== "svg" && Su(B) ? s = "svg" : s !== "mathml" && Eu(B) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(B), pe || (M(ne, B, F), mr(ne, !1)));
    }, de = (ne) => {
      const pe = () => {
        if (Oi.get(ne) === pe) {
          if (Oi.delete(ne), oa(ne.props)) {
            const B = P(ne.el) || n;
            M(ne, B, ne.anchor), mr(ne, !0);
          }
          oe(ne);
        }
      };
      Oi.set(ne, pe), Kt(pe, r);
    };
    if (e == null) {
      const ne = t.el = A(""), pe = t.anchor = A("");
      if (T(ne, n, i), T(pe, n, i), Xv(t.props) || r && r.pendingBranch) {
        de(t);
        return;
      }
      I && (M(t, n, pe), mr(t, !0)), oe();
    } else {
      t.el = e.el;
      const ne = t.anchor = e.anchor, pe = Oi.get(e);
      if (pe) {
        pe.flags |= 8, Oi.delete(e), de(t);
        return;
      }
      t.targetStart = e.targetStart;
      const B = t.target = e.target, F = t.targetAnchor = e.targetAnchor, fe = oa(e.props), Z = fe ? n : B, ie = fe ? ne : F;
      if (s === "svg" || Su(B) ? s = "svg" : (s === "mathml" || Eu(B)) && (s = "mathml"), K ? (_(
        e.dynamicChildren,
        K,
        Z,
        a,
        r,
        s,
        o
      ), Kc(e, t, !0)) : l || h(
        e,
        t,
        Z,
        ie,
        a,
        r,
        s,
        o,
        !1
      ), I)
        fe ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Cs(
          t,
          n,
          ne,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const D = nc(t.props, O);
        D && (t.target = D, Cs(
          t,
          D,
          null,
          d,
          0
        ));
      } else fe && Cs(
        t,
        B,
        F,
        d,
        1
      );
      mr(t, I);
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
    } = e, T = oa(_), O = r || !T, A = Oi.get(e);
    if (A && (A.flags |= 8, Oi.delete(e)), h && (a(d), a(u)), r && a(l), !A && (T || h) && s & 16)
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
  move: Cs,
  hydrate: Jv
};
function Cs(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: d, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !Oi.has(e) && (!h || oa(u)) && l & 16)
    for (let _ = 0; _ < d.length; _++)
      a(
        d[_],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function Jv(e, t, n, i, a, r, {
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
  const O = t.target = nc(
    t.props,
    l
  ), A = oa(t.props);
  if (O) {
    const x = O._lpa || O.firstChild;
    t.shapeFlag & 16 && (A ? (T(e, t), _(O, x), t.targetAnchor || ic(
      O,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === O ? e : null
    )) : (t.anchor = s(e), _(O, x), t.targetAnchor || ic(O, t, u, d), h(
      x && s(x),
      t,
      O,
      n,
      i,
      a,
      r
    ))), mr(t, A);
  } else A && t.shapeFlag & 16 && (T(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const Hf = Zv;
function mr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function ic(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[Bf] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const wn = /* @__PURE__ */ Symbol("_leaveCb"), lr = /* @__PURE__ */ Symbol("_enterCb");
function Qv() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ui(() => {
    e.isMounted = !0;
  }), Ya(() => {
    e.isUnmounting = !0;
  }), e;
}
const gn = [Function, Array], jf = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: gn,
  onEnter: gn,
  onAfterEnter: gn,
  onEnterCancelled: gn,
  // leave
  onBeforeLeave: gn,
  onLeave: gn,
  onAfterLeave: gn,
  onLeaveCancelled: gn,
  // appear
  onBeforeAppear: gn,
  onAppear: gn,
  onAfterAppear: gn,
  onAppearCancelled: gn
}, Vf = (e) => {
  const t = e.subTree;
  return t.component ? Vf(t.component) : t;
}, eg = {
  name: "BaseTransition",
  props: jf,
  setup(e, { slots: t }) {
    const n = ya(), i = Qv();
    return () => {
      const a = t.default && Wf(t.default(), !0), r = a && a.length ? Gf(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? j() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ He(e), { mode: o } = s;
      if (i.isLeaving)
        return yl(r);
      const l = Hs(r);
      if (!l)
        return yl(r);
      let d = ac(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      l.type !== kt && jr(l, d);
      let u = n.subTree && Hs(n.subTree);
      if (u && u.type !== kt && !la(u, l) && Vf(n).type !== kt) {
        let h = ac(
          u,
          s,
          i,
          n
        );
        if (jr(u, h), o === "out-in" && l.type !== kt)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, yl(r);
        o === "in-out" && l.type !== kt ? h.delayLeave = (_, T, O) => {
          const A = Kf(
            i,
            u
          );
          A[String(u.key)] = u, _[wn] = () => {
            T(), _[wn] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            O(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function Gf(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== kt) {
        t = n;
        break;
      }
  }
  return t;
}
const tg = eg;
function Kf(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function ac(e, t, n, i, a) {
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
  } = t, M = String(e.key), oe = Kf(n, e), de = (B, F) => {
    B && Tn(
      B,
      i,
      9,
      F
    );
  }, ne = (B, F) => {
    const fe = F[1];
    de(B, F), ye(B) ? B.every((Z) => Z.length <= 1) && fe() : B.length <= 1 && fe();
  }, pe = {
    mode: s,
    persisted: o,
    beforeEnter(B) {
      let F = l;
      if (!n.isMounted)
        if (r)
          F = x || l;
        else
          return;
      B[wn] && B[wn](
        !0
        /* cancelled */
      );
      const fe = oe[M];
      fe && la(e, fe) && fe.el[wn] && fe.el[wn](), de(F, [B]);
    },
    enter(B) {
      if (oe[M] === e) return;
      let F = d, fe = u, Z = h;
      if (!n.isMounted)
        if (r)
          F = P || d, fe = I || u, Z = K || h;
        else
          return;
      let ie = !1;
      B[lr] = ($) => {
        ie || (ie = !0, $ ? de(Z, [B]) : de(fe, [B]), pe.delayedLeave && pe.delayedLeave(), B[lr] = void 0);
      };
      const D = B[lr].bind(null, !1);
      F ? ne(F, [B, D]) : D();
    },
    leave(B, F) {
      const fe = String(e.key);
      if (B[lr] && B[lr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return F();
      de(_, [B]);
      let Z = !1;
      B[wn] = (D) => {
        Z || (Z = !0, F(), D ? de(A, [B]) : de(O, [B]), B[wn] = void 0, oe[fe] === e && delete oe[fe]);
      };
      const ie = B[wn].bind(null, !1);
      oe[fe] = e, T ? ne(T, [B, ie]) : ie();
    },
    clone(B) {
      const F = ac(
        B,
        t,
        n,
        i,
        a
      );
      return a && a(F), F;
    }
  };
  return pe;
}
function yl(e) {
  if (Jo(e))
    return e = Fi(e), e.children = null, e;
}
function Hs(e) {
  if (!Jo(e))
    return Zo(e.type) && e.children ? Gf(e.children) : e;
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
function jr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    jr(
      Zo(n.type) && Hs(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Wf(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === ce ? (s.patchFlag & 128 && a++, i = i.concat(
      Wf(s.children, t, o)
    )) : (t || s.type !== kt) && i.push(o != null ? Fi(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Nt(e, t) {
  return xe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ft({ name: e.name }, t, { setup: e })
  ) : e;
}
function qf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ng(e) {
  const t = ya(), n = /* @__PURE__ */ Rf(null);
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
function Tu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const js = /* @__PURE__ */ new WeakMap();
function Ar(e, t, n, i, a = !1) {
  if (ye(e)) {
    e.forEach(
      (A, x) => Ar(
        A,
        t && (ye(t) ? t[x] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Ha(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Ar(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? tl(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, d = t && t.r, u = o.refs === Be ? o.refs = {} : o.refs, h = o.setupState, _ = /* @__PURE__ */ He(h), T = h === Be ? uf : (A) => Tu(u, A) ? !1 : Ve(_, A), O = (A, x) => !(x && Tu(u, x));
  if (d != null && d !== l) {
    if (Au(t), Qe(d))
      u[d] = null, T(d) && (h[d] = null);
    else if (/* @__PURE__ */ zt(d)) {
      const A = t;
      O(d, A.k) && (d.value = null), A.k && (u[A.k] = null);
    }
  }
  if (xe(l))
    as(l, o, 12, [s, u]);
  else {
    const A = Qe(l), x = /* @__PURE__ */ zt(l);
    if (A || x) {
      const P = () => {
        if (e.f) {
          const I = A ? T(l) ? h[l] : u[l] : O() || !e.k ? l.value : u[e.k];
          if (a)
            ye(I) && Rc(I, r);
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
          P(), js.delete(e);
        };
        I.id = -1, js.set(e, I), Kt(I, n);
      } else
        Au(e), P();
    }
  }
}
function Au(e) {
  const t = js.get(e);
  t && (t.flags |= 8, js.delete(e));
}
Go().requestIdleCallback;
Go().cancelIdleCallback;
const Ha = (e) => !!e.type.__asyncLoader, Jo = (e) => e.type.__isKeepAlive;
function ig(e, t) {
  Yf(e, "a", t);
}
function ag(e, t) {
  Yf(e, "da", t);
}
function Yf(e, t, n = $t) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Qo(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Jo(a.parent.vnode) && rg(i, t, n, a), a = a.parent;
  }
}
function rg(e, t, n, i) {
  const a = Qo(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  rs(() => {
    Rc(i[t], a);
  }, n);
}
function Qo(e, t, n = $t, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      hi();
      const o = os(n), l = Tn(t, n, e, s);
      return o(), pi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const bi = (e) => (t, n = $t) => {
  (!qr || e === "sp") && Qo(e, (...i) => t(...i), n);
}, Xf = bi("bm"), Ui = bi("m"), Zf = bi(
  "bu"
), sg = bi("u"), Ya = bi(
  "bum"
), rs = bi("um"), og = bi(
  "sp"
), lg = bi("rtg"), cg = bi("rtc");
function ug(e, t = $t) {
  Qo("ec", e, t);
}
const Bc = "components", dg = "directives";
function ze(e, t) {
  return jc(Bc, e, !0, t) || e;
}
const Jf = /* @__PURE__ */ Symbol.for("v-ndc");
function Hc(e) {
  return Qe(e) ? jc(Bc, e, !1) || e : e || Jf;
}
function ku(e) {
  return jc(dg, e);
}
function jc(e, t, n = !0, i = !1) {
  const a = Ot || $t;
  if (a) {
    const r = a.type;
    if (e === Bc) {
      const o = Wg(
        r,
        !1
      );
      if (o && (o === t || o === Ft(t) || o === jo(Ft(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ou(a[e] || r[e], t) || // global registration
      Ou(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function Ou(e, t) {
  return e && (e[t] || e[Ft(t)] || e[jo(Ft(t))]);
}
function Pe(e, t, n, i) {
  let a;
  const r = n, s = ye(e);
  if (s || Qe(e)) {
    const o = s && /* @__PURE__ */ va(e);
    let l = !1, d = !1;
    o && (l = !/* @__PURE__ */ En(e), d = /* @__PURE__ */ vi(e), e = Wo(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? d ? qa(In(e[u])) : In(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (Ge(e))
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
  if (n == null && (n = {}), Ot.ce || Ot.parent && Ha(Ot.parent) && Ot.parent.ce) {
    const d = n, u = Object.keys(d).length > 0;
    return t !== "default" && (d.name = t), b(), $e(
      ce,
      null,
      [me("slot", d, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = di.length;
  b();
  let l;
  try {
    const d = s && Qf(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    d && d.key;
    l = $e(
      ce,
      {
        key: (u && !Rn(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!d && i ? "_fb" : "")
      },
      d || (i ? i() : []),
      d && e._ === 1 ? 64 : -2
    );
  } catch (d) {
    for (let u = di.length; u > o; u--) Wc();
    throw d;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Qf(e) {
  return e.some((t) => Gr(t) ? !(t.type === kt || t.type === ce && !Qf(t.children)) : !0) ? e : null;
}
const rc = (e) => e ? wh(e) ? tl(e) : rc(e.parent) : null, kr = (
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
    $parent: (e) => rc(e.parent),
    $root: (e) => rc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => nh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Uc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Kn.bind(e.proxy)),
    $watch: (e) => Yv.bind(e)
  })
), _l = (e, t) => e !== Be && !e.__isScriptSetup && Ve(e, t), fg = {
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
        if (_l(i, t))
          return s[t] = 1, i[t];
        if (a !== Be && Ve(a, t))
          return s[t] = 2, a[t];
        if (Ve(r, t))
          return s[t] = 3, r[t];
        if (n !== Be && Ve(n, t))
          return s[t] = 4, n[t];
        sc && (s[t] = 0);
      }
    }
    const d = kr[t];
    let u, h;
    if (d)
      return t === "$attrs" && Dt(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Be && Ve(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Ve(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return _l(a, t) ? (a[t] = n, !0) : i !== Be && Ve(i, t) ? (i[t] = n, !0) : Ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Be && o[0] !== "$" && Ve(e, o) || _l(t, o) || Ve(r, o) || Ve(i, o) || Ve(kr, o) || Ve(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ve(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function hg() {
  return eh().slots;
}
function pg() {
  return eh().attrs;
}
function eh(e) {
  const t = ya();
  return t.setupContext || (t.setupContext = Sh(t));
}
function Vs(e) {
  return ye(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function vg(e, t) {
  return !e || !t ? e || t : ye(e) && ye(t) ? e.concat(t) : ft({}, Vs(e), Vs(t));
}
let sc = !0;
function gg(e) {
  const t = nh(e), n = e.proxy, i = e.ctx;
  sc = !1, t.beforeCreate && Nu(t.beforeCreate, e, "bc");
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
    renderTriggered: ne,
    errorCaptured: pe,
    serverPrefetch: B,
    // public API
    expose: F,
    inheritAttrs: fe,
    // assets
    components: Z,
    directives: ie,
    filters: D
  } = t;
  if (d && mg(d, i, null), s)
    for (const ae in s) {
      const ee = s[ae];
      xe(ee) && (i[ae] = ee.bind(n));
    }
  if (a) {
    const ae = a.call(n, n);
    Ge(ae) && (e.data = /* @__PURE__ */ Pt(ae));
  }
  if (sc = !0, r)
    for (const ae in r) {
      const ee = r[ae], ue = xe(ee) ? ee.bind(n, n) : xe(ee.get) ? ee.get.bind(n, n) : Sn, le = !xe(ee) && xe(ee.set) ? ee.set.bind(n) : Sn, Se = Y({
        get: ue,
        set: le
      });
      Object.defineProperty(i, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => Se.value,
        set: (be) => Se.value = be
      });
    }
  if (o)
    for (const ae in o)
      th(o[ae], i, n, ae);
  if (l) {
    const ae = xe(l) ? l.call(n) : l;
    Reflect.ownKeys(ae).forEach((ee) => {
      _n(ee, ae[ee]);
    });
  }
  u && Nu(u, e, "c");
  function X(ae, ee) {
    ye(ee) ? ee.forEach((ue) => ae(ue.bind(n))) : ee && ae(ee.bind(n));
  }
  if (X(Xf, h), X(Ui, _), X(Zf, T), X(sg, O), X(ig, A), X(ag, x), X(ug, pe), X(cg, de), X(lg, ne), X(Ya, I), X(rs, M), X(og, B), ye(F))
    if (F.length) {
      const ae = e.exposed || (e.exposed = {});
      F.forEach((ee) => {
        Object.defineProperty(ae, ee, {
          get: () => n[ee],
          set: (ue) => n[ee] = ue,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === Sn && (e.render = oe), fe != null && (e.inheritAttrs = fe), Z && (e.components = Z), ie && (e.directives = ie), B && qf(e);
}
function mg(e, t, n = Sn) {
  ye(e) && (e = oc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Ge(a) ? "default" in a ? r = Mt(
      a.from || i,
      a.default,
      !0
    ) : r = Mt(a.from || i) : r = Mt(a), /* @__PURE__ */ zt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function Nu(e, t, n) {
  Tn(
    ye(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function th(e, t, n, i) {
  let a = i.includes(".") ? Uf(n, i) : () => n[i];
  if (Qe(e)) {
    const r = t[e];
    xe(r) && Yt(a, r);
  } else if (xe(e))
    Yt(a, e.bind(n));
  else if (Ge(e))
    if (ye(e))
      e.forEach((r) => th(r, t, n, i));
    else {
      const r = xe(e.handler) ? e.handler.bind(n) : t[e.handler];
      xe(r) && Yt(a, r, e);
    }
}
function nh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (d) => Gs(l, d, s, !0)
  ), Gs(l, t, s)), Ge(t) && r.set(t, l), l;
}
function Gs(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Gs(e, r, n, !0), a && a.forEach(
    (s) => Gs(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = bg[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const bg = {
  data: xu,
  props: Lu,
  emits: Lu,
  // objects
  methods: br,
  computed: br,
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
  components: br,
  directives: br,
  // watch
  watch: _g,
  // provide / inject
  provide: xu,
  inject: yg
};
function xu(e, t) {
  return t ? e ? function() {
    return ft(
      xe(e) ? e.call(this, this) : e,
      xe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function yg(e, t) {
  return br(oc(e), oc(t));
}
function oc(e) {
  if (ye(e)) {
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
function br(e, t) {
  return e ? ft(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Lu(e, t) {
  return e ? ye(e) && ye(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ft(
    /* @__PURE__ */ Object.create(null),
    Vs(e),
    Vs(t ?? {})
  ) : t;
}
function _g(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ft(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Gt(e[i], t[i]);
  return n;
}
function ih() {
  return {
    app: null,
    config: {
      isNativeTag: uf,
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
let wg = 0;
function Cg(e, t) {
  return function(i, a = null) {
    xe(i) || (i = ft({}, i)), a != null && !Ge(a) && (a = null);
    const r = ih(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const d = r.app = {
      _uid: wg++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Yg,
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
          const T = d._ceVNode || me(i, a);
          return T.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(T, u, _), l = !0, d._container = u, u.__vue_app__ = d, tl(T.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (Tn(
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
function ah(e, t, n = Be) {
  const i = ya(), a = Ft(t), r = mi(t), s = rh(e, a), o = Dv((l, d) => {
    let u, h = Be, _;
    return qv(() => {
      const T = e[a];
      At(u, T) && (u = T, d());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(T) {
        const O = n.set ? n.set(T) : T;
        if (!At(O, u) && !(h !== Be && At(T, h)))
          return;
        const A = i.vnode.props, x = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        x || (u = T, d()), i.emit(`update:${t}`, O), At(T, h) && (At(T, O) && !At(O, _) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        x && h !== Be && !At(O, u)) && d(), h = T, _ = O;
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
const rh = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ft(t)}Modifiers`] || e[`${mi(t)}Modifiers`];
function Sg(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Be;
  let a = n;
  const r = t.startsWith("update:"), s = r && rh(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => Qe(u) ? u.trim() : u)), s.number && (a = a.map(Vo)));
  let o, l = i[o = pl(t)] || // also try camelCase event handler (#2249)
  i[o = pl(Ft(t))];
  !l && r && (l = i[o = pl(mi(t))]), l && Tn(
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
    e.emitted[o] = !0, Tn(
      d,
      e,
      6,
      a
    );
  }
}
const Eg = /* @__PURE__ */ new WeakMap();
function sh(e, t, n = !1) {
  const i = n ? Eg : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!xe(e)) {
    const l = (d) => {
      const u = sh(d, t, !0);
      u && (o = !0, ft(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Ge(e) && i.set(e, null), null) : (ye(r) ? r.forEach((l) => s[l] = null) : ft(s, r), Ge(e) && i.set(e, s), s);
}
function el(e, t) {
  return !e || !Uo(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ve(e, t[0].toLowerCase() + t.slice(1)) || Ve(e, mi(t)) || Ve(e, t));
}
function Ru(e) {
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
  } = e, x = Bs(e);
  let P, I;
  try {
    if (n.shapeFlag & 4) {
      const M = a || i, oe = M;
      P = Gn(
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
      P = Gn(
        M.length > 1 ? M(
          h,
          { attrs: o, slots: s, emit: l }
        ) : M(
          h,
          null
        )
      ), I = t.props ? o : Tg(o);
    }
  } catch (M) {
    di.length = 0, qo(M, e, 1), P = me(kt);
  }
  let K = P;
  if (I && A !== !1) {
    const M = Object.keys(I), { shapeFlag: oe } = K;
    M.length && oe & 7 && (r && M.some(Bo) && (I = Ag(
      I,
      r
    )), K = Fi(K, I, !1, !0));
  }
  if (n.dirs && (K = Fi(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const M = Zo(K.type) && Hs(K) || K;
    jr(M, n.transition);
  }
  return P = K, Bs(x), P;
}
const Tg = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Uo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ag = (e, t) => {
  const n = {};
  for (const i in e)
    (!Bo(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function kg(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, d = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Iu(i, s, d) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const _ = u[h];
        if (oh(s, i, _) && !el(d, _))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? Iu(i, s, d) : !0 : !!s;
  return !1;
}
function Iu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (oh(t, e, r) && !el(n, r))
      return !0;
  }
  return !1;
}
function oh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Ge(i) && Ge(a) ? !$i(i, a) : i !== a;
}
function Og({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const lh = {}, ch = () => Object.create(lh), uh = (e) => Object.getPrototypeOf(e) === lh;
function Ng(e, t, n, i = !1) {
  const a = {}, r = ch();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), dh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ xv(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function xg(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ He(a), [l] = e.propsOptions;
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
        if (el(e.emitsOptions, _))
          continue;
        const T = t[_];
        if (l)
          if (Ve(r, _))
            T !== r[_] && (r[_] = T, d = !0);
          else {
            const O = Ft(_);
            a[O] = lc(
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
    dh(e, t, a, r) && (d = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !Ve(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = mi(h)) === h || !Ve(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = lc(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !Ve(t, h)) && (delete r[h], d = !0);
  }
  d && si(e.attrs, "set", "");
}
function dh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Sr(l))
        continue;
      const d = t[l];
      let u;
      a && Ve(a, u = Ft(l)) ? !r || !r.includes(u) ? n[u] = d : (o || (o = {}))[u] = d : el(e.emitsOptions, l) || (!(l in i) || d !== i[l]) && (i[l] = d, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ He(n), d = o || Be;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = lc(
        a,
        l,
        h,
        d[h],
        e,
        !Ve(d, h)
      );
    }
  }
  return s;
}
function lc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = Ve(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && xe(l)) {
        const { propsDefaults: d } = a;
        if (n in d)
          i = d[n];
        else {
          const u = os(a);
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
    ] && (i === "" || i === mi(n)) && (i = !0));
  }
  return i;
}
const Lg = /* @__PURE__ */ new WeakMap();
function fh(e, t, n = !1) {
  const i = n ? Lg : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!xe(e)) {
    const u = (h) => {
      l = !0;
      const [_, T] = fh(h, t, !0);
      ft(s, _), T && o.push(...T);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Ge(e) && i.set(e, Ua), Ua;
  if (ye(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ft(r[u]);
      Pu(h) && (s[h] = Be);
    }
  else if (r)
    for (const u in r) {
      const h = Ft(u);
      if (Pu(h)) {
        const _ = r[u], T = s[h] = ye(_) || xe(_) ? { type: _ } : ft({}, _), O = T.type;
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
        ] = x, (A || Ve(T, "default")) && o.push(h);
      }
    }
  const d = [s, o];
  return Ge(e) && i.set(e, d), d;
}
function Pu(e) {
  return e[0] !== "$" && !Sr(e);
}
const Vc = (e) => e === "_" || e === "_ctx" || e === "$stable", Gc = (e) => ye(e) ? e.map(Gn) : [Gn(e)], Rg = (e, t, n) => {
  if (t._n)
    return t;
  const i = Ae((...a) => Gc(t(...a)), n);
  return i._c = !1, i;
}, hh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Vc(a)) continue;
    const r = e[a];
    if (xe(r))
      t[a] = Rg(a, r, i);
    else if (r != null) {
      const s = Gc(r);
      t[a] = () => s;
    }
  }
}, ph = (e, t) => {
  const n = Gc(t);
  e.slots.default = () => n;
}, vh = (e, t, n) => {
  for (const i in t)
    (n || !Vc(i)) && (e[i] = t[i]);
}, Ig = (e, t, n) => {
  const i = e.slots = ch();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (vh(i, t, n), n && pf(i, "_", a, !0)) : hh(t, i);
  } else t && ph(e, t);
}, Pg = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Be;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : vh(a, t, n) : (r = !t.$stable, hh(t, a)), s = t;
  } else t && (ph(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !Vc(o) && s[o] == null && delete a[o];
}, Kt = zg;
function Dg(e) {
  return Mg(e);
}
function Mg(e, t) {
  const n = Go();
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
    setScopeId: T = Sn,
    insertStaticContent: O
  } = e, A = (v, w, k, R = null, N = null, z = null, W = void 0, G = null, J = !!w.dynamicChildren) => {
    if (v === w)
      return;
    v && !la(v, w) && (R = lt(v), be(v, N, z, !0), v = null), w.patchFlag === -2 && (J = !1, w.dynamicChildren = null);
    const { type: V, ref: ge, shapeFlag: re } = w;
    switch (V) {
      case ss:
        x(v, w, k, R);
        break;
      case kt:
        P(v, w, k, R);
        break;
      case Ps:
        v == null && I(w, k, R, W);
        break;
      case ce:
        Z(
          v,
          w,
          k,
          R,
          N,
          z,
          W,
          G,
          J
        );
        break;
      default:
        re & 1 ? oe(
          v,
          w,
          k,
          R,
          N,
          z,
          W,
          G,
          J
        ) : re & 6 ? ie(
          v,
          w,
          k,
          R,
          N,
          z,
          W,
          G,
          J
        ) : (re & 64 || re & 128) && V.process(
          v,
          w,
          k,
          R,
          N,
          z,
          W,
          G,
          J,
          ut
        );
    }
    ge != null && N ? Ar(ge, v && v.ref, z, w || v, !w) : ge == null && v && v.ref != null && Ar(v.ref, null, z, v, !0);
  }, x = (v, w, k, R) => {
    if (v == null)
      i(
        w.el = o(w.children),
        k,
        R
      );
    else {
      const N = w.el = v.el;
      w.children !== v.children && d(N, w.children);
    }
  }, P = (v, w, k, R) => {
    v == null ? i(
      w.el = l(w.children || ""),
      k,
      R
    ) : w.el = v.el;
  }, I = (v, w, k, R) => {
    [v.el, v.anchor] = O(
      v.children,
      w,
      k,
      R,
      v.el,
      v.anchor
    );
  }, K = ({ el: v, anchor: w }, k, R) => {
    let N;
    for (; v && v !== w; )
      N = _(v), i(v, k, R), v = N;
    i(w, k, R);
  }, M = ({ el: v, anchor: w }) => {
    let k;
    for (; v && v !== w; )
      k = _(v), a(v), v = k;
    a(w);
  }, oe = (v, w, k, R, N, z, W, G, J) => {
    if (w.type === "svg" ? W = "svg" : w.type === "math" && (W = "mathml"), v == null)
      de(
        w,
        k,
        R,
        N,
        z,
        W,
        G,
        J
      );
    else {
      const V = v.el && v.el._isVueCE ? v.el : null;
      try {
        V && V._beginPatch(), B(
          v,
          w,
          N,
          z,
          W,
          G,
          J
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, de = (v, w, k, R, N, z, W, G) => {
    let J, V;
    const { props: ge, shapeFlag: re, transition: ve, dirs: _e } = v;
    if (J = v.el = s(
      v.type,
      z,
      ge && ge.is,
      ge
    ), re & 8 ? u(J, v.children) : re & 16 && pe(
      v.children,
      J,
      null,
      R,
      N,
      wl(v, z),
      W,
      G
    ), _e && Qi(v, null, R, "created"), ne(J, v, v.scopeId, W, R), ge) {
      for (const De in ge)
        De !== "value" && !Sr(De) && r(J, De, null, ge[De], z, R);
      "value" in ge && r(J, "value", null, ge.value, z), (V = ge.onVnodeBeforeMount) && zn(V, R, v);
    }
    _e && Qi(v, null, R, "beforeMount");
    const Ne = $g(N, ve);
    Ne && ve.beforeEnter(J), i(J, w, k), ((V = ge && ge.onVnodeMounted) || Ne || _e) && Kt(() => {
      V && zn(V, R, v), Ne && ve.enter(J), _e && Qi(v, null, R, "mounted");
    }, N);
  }, ne = (v, w, k, R, N) => {
    if (k && T(v, k), R)
      for (let z = 0; z < R.length; z++)
        T(v, R[z]);
    if (N) {
      let z = N.subTree;
      if (w === z || bh(z.type) && (z.ssContent === w || z.ssFallback === w)) {
        const W = N.vnode;
        ne(
          v,
          W,
          W.scopeId,
          W.slotScopeIds,
          N.parent
        );
      }
    }
  }, pe = (v, w, k, R, N, z, W, G, J = 0) => {
    for (let V = J; V < v.length; V++) {
      const ge = v[V] = G ? ri(v[V]) : Gn(v[V]);
      A(
        null,
        ge,
        w,
        k,
        R,
        N,
        z,
        W,
        G
      );
    }
  }, B = (v, w, k, R, N, z, W) => {
    const G = w.el = v.el;
    let { patchFlag: J, dynamicChildren: V, dirs: ge } = w;
    J |= v.patchFlag & 16;
    const re = v.props || Be, ve = w.props || Be;
    let _e;
    if (k && ea(k, !1), (_e = ve.onVnodeBeforeUpdate) && zn(_e, k, w, v), ge && Qi(w, v, k, "beforeUpdate"), k && ea(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!v.dynamicChildren || v.dynamicChildren.length !== V.length) && (J = 0, W = !1, V = null), (re.innerHTML && ve.innerHTML == null || re.textContent && ve.textContent == null) && u(G, ""), V ? F(
      v.dynamicChildren,
      V,
      G,
      k,
      R,
      wl(w, N),
      z
    ) : W || ee(
      v,
      w,
      G,
      null,
      k,
      R,
      wl(w, N),
      z,
      !1
    ), J > 0) {
      if (J & 16)
        fe(G, re, ve, k, N);
      else if (J & 2 && re.class !== ve.class && r(G, "class", null, ve.class, N), J & 4 && r(G, "style", re.style, ve.style, N), J & 8) {
        const Ne = w.dynamicProps;
        for (let De = 0; De < Ne.length; De++) {
          const Re = Ne[De], Ze = re[Re], et = ve[Re];
          (et !== Ze || Re === "value") && r(G, Re, Ze, et, N, k);
        }
      }
      J & 1 && v.children !== w.children && u(G, w.children);
    } else !W && V == null && fe(G, re, ve, k, N);
    ((_e = ve.onVnodeUpdated) || ge) && Kt(() => {
      _e && zn(_e, k, w, v), ge && Qi(w, v, k, "updated");
    }, R);
  }, F = (v, w, k, R, N, z, W) => {
    for (let G = 0; G < w.length; G++) {
      const J = v[G], V = w[G], ge = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        J.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (J.type === ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !la(J, V) || // - In the case of a component, it could contain anything.
        J.shapeFlag & 198) ? h(J.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        J,
        V,
        ge,
        null,
        R,
        N,
        z,
        W,
        !0
      );
    }
  }, fe = (v, w, k, R, N) => {
    if (w !== k) {
      if (w !== Be)
        for (const z in w)
          !Sr(z) && !(z in k) && r(
            v,
            z,
            w[z],
            null,
            N,
            R
          );
      for (const z in k) {
        if (Sr(z)) continue;
        const W = k[z], G = w[z];
        W !== G && z !== "value" && r(v, z, G, W, N, R);
      }
      "value" in k && r(v, "value", w.value, k.value, N);
    }
  }, Z = (v, w, k, R, N, z, W, G, J) => {
    const V = w.el = v ? v.el : o(""), ge = w.anchor = v ? v.anchor : o("");
    let { patchFlag: re, dynamicChildren: ve, slotScopeIds: _e } = w;
    _e && (G = G ? G.concat(_e) : _e), v == null ? (i(V, k, R), i(ge, k, R), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      k,
      ge,
      N,
      z,
      W,
      G,
      J
    )) : re > 0 && re & 64 && ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren && v.dynamicChildren.length === ve.length ? (F(
      v.dynamicChildren,
      ve,
      k,
      N,
      z,
      W,
      G
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || N && w === N.subTree) && Kc(
      v,
      w,
      !0
      /* shallow */
    )) : ee(
      v,
      w,
      k,
      ge,
      N,
      z,
      W,
      G,
      J
    );
  }, ie = (v, w, k, R, N, z, W, G, J) => {
    w.slotScopeIds = G, v == null ? w.shapeFlag & 512 ? N.ctx.activate(
      w,
      k,
      R,
      W,
      J
    ) : D(
      w,
      k,
      R,
      N,
      z,
      W,
      J
    ) : $(v, w, J);
  }, D = (v, w, k, R, N, z, W) => {
    const G = v.component = jg(
      v,
      R,
      N
    );
    if (Jo(v) && (G.ctx.renderer = ut), Vg(G, !1, W), G.asyncDep) {
      if (N && N.registerDep(G, X, W), !v.el) {
        const J = G.subTree = me(kt);
        P(null, J, w, k), v.placeholder = J.el;
      }
    } else
      X(
        G,
        v,
        w,
        k,
        N,
        z,
        W
      );
  }, $ = (v, w, k) => {
    const R = w.component = v.component;
    if (kg(v, w, k))
      if (R.asyncDep && !R.asyncResolved) {
        ae(R, w, k);
        return;
      } else
        R.next = w, R.update();
    else
      w.el = v.el, R.vnode = w;
  }, X = (v, w, k, R, N, z, W) => {
    const G = () => {
      if (v.isMounted) {
        let { next: re, bu: ve, u: _e, parent: Ne, vnode: De } = v;
        {
          const Ct = gh(v);
          if (Ct) {
            re && (re.el = De.el, ae(v, re, W)), Ct.asyncDep.then(() => {
              Kt(() => {
                v.isUnmounted || V();
              }, N);
            });
            return;
          }
        }
        let Re = re, Ze;
        ea(v, !1), re ? (re.el = De.el, ae(v, re, W)) : re = De, ve && Is(ve), (Ze = re.props && re.props.onVnodeBeforeUpdate) && zn(Ze, Ne, re, De), ea(v, !0);
        const et = Ru(v), mt = v.subTree;
        v.subTree = et, A(
          mt,
          et,
          // parent may have changed if it's in a teleport
          h(mt.el),
          // anchor may have changed if it's in a fragment
          lt(mt),
          v,
          N,
          z
        ), re.el = et.el, Re === null && Og(v, et.el), _e && Kt(_e, N), (Ze = re.props && re.props.onVnodeUpdated) && Kt(
          () => zn(Ze, Ne, re, De),
          N
        );
      } else {
        let re;
        const { el: ve, props: _e } = w, { bm: Ne, m: De, parent: Re, root: Ze, type: et } = v, mt = Ha(w);
        ea(v, !1), Ne && Is(Ne), !mt && (re = _e && _e.onVnodeBeforeMount) && zn(re, Re, w), ea(v, !0);
        {
          Ze.ce && Ze.ce._hasShadowRoot() && Ze.ce._injectChildStyle(
            et,
            v.parent ? v.parent.type : void 0
          );
          const Ct = v.subTree = Ru(v);
          A(
            null,
            Ct,
            k,
            R,
            v,
            N,
            z
          ), w.el = Ct.el;
        }
        if (De && Kt(De, N), !mt && (re = _e && _e.onVnodeMounted)) {
          const Ct = w;
          Kt(
            () => zn(re, Re, Ct),
            N
          );
        }
        (w.shapeFlag & 256 || Re && Ha(Re.vnode) && Re.vnode.shapeFlag & 256) && v.a && Kt(v.a, N), v.isMounted = !0, w = k = R = null;
      }
    };
    v.scope.on();
    const J = v.effect = new bf(G);
    v.scope.off();
    const V = v.update = J.run.bind(J), ge = v.job = J.runIfDirty.bind(J);
    ge.i = v, ge.id = v.uid, J.scheduler = () => Uc(ge), ea(v, !0), V();
  }, ae = (v, w, k) => {
    w.component = v;
    const R = v.vnode.props;
    v.vnode = w, v.next = null, xg(v, w.props, R, k), Pg(v, w.children, k), hi(), Cu(v), pi();
  }, ee = (v, w, k, R, N, z, W, G, J = !1) => {
    const V = v && v.children, ge = v ? v.shapeFlag : 0, re = w.children, { patchFlag: ve, shapeFlag: _e } = w;
    if (ve > 0) {
      if (ve & 128) {
        le(
          V,
          re,
          k,
          R,
          N,
          z,
          W,
          G,
          J
        );
        return;
      } else if (ve & 256) {
        ue(
          V,
          re,
          k,
          R,
          N,
          z,
          W,
          G,
          J
        );
        return;
      }
    }
    _e & 8 ? (ge & 16 && rt(V, N, z), re !== V && u(k, re)) : ge & 16 ? _e & 16 ? le(
      V,
      re,
      k,
      R,
      N,
      z,
      W,
      G,
      J
    ) : rt(V, N, z, !0) : (ge & 8 && u(k, ""), _e & 16 && pe(
      re,
      k,
      R,
      N,
      z,
      W,
      G,
      J
    ));
  }, ue = (v, w, k, R, N, z, W, G, J) => {
    v = v || Ua, w = w || Ua;
    const V = v.length, ge = w.length, re = Math.min(V, ge);
    let ve;
    for (ve = 0; ve < re; ve++) {
      const _e = w[ve] = J ? ri(w[ve]) : Gn(w[ve]);
      A(
        v[ve],
        _e,
        k,
        null,
        N,
        z,
        W,
        G,
        J
      );
    }
    V > ge ? rt(
      v,
      N,
      z,
      !0,
      !1,
      re
    ) : pe(
      w,
      k,
      R,
      N,
      z,
      W,
      G,
      J,
      re
    );
  }, le = (v, w, k, R, N, z, W, G, J) => {
    let V = 0;
    const ge = w.length;
    let re = v.length - 1, ve = ge - 1;
    for (; V <= re && V <= ve; ) {
      const _e = v[V], Ne = w[V] = J ? ri(w[V]) : Gn(w[V]);
      if (la(_e, Ne))
        A(
          _e,
          Ne,
          k,
          null,
          N,
          z,
          W,
          G,
          J
        );
      else
        break;
      V++;
    }
    for (; V <= re && V <= ve; ) {
      const _e = v[re], Ne = w[ve] = J ? ri(w[ve]) : Gn(w[ve]);
      if (la(_e, Ne))
        A(
          _e,
          Ne,
          k,
          null,
          N,
          z,
          W,
          G,
          J
        );
      else
        break;
      re--, ve--;
    }
    if (V > re) {
      if (V <= ve) {
        const _e = ve + 1, Ne = _e < ge ? w[_e].el : R;
        for (; V <= ve; )
          A(
            null,
            w[V] = J ? ri(w[V]) : Gn(w[V]),
            k,
            Ne,
            N,
            z,
            W,
            G,
            J
          ), V++;
      }
    } else if (V > ve)
      for (; V <= re; )
        be(v[V], N, z, !0), V++;
    else {
      const _e = V, Ne = V, De = /* @__PURE__ */ new Map();
      for (V = Ne; V <= ve; V++) {
        const ct = w[V] = J ? ri(w[V]) : Gn(w[V]);
        ct.key != null && De.set(ct.key, V);
      }
      let Re, Ze = 0;
      const et = ve - Ne + 1;
      let mt = !1, Ct = 0;
      const Ht = new Array(et);
      for (V = 0; V < et; V++) Ht[V] = 0;
      for (V = _e; V <= re; V++) {
        const ct = v[V];
        if (Ze >= et) {
          be(ct, N, z, !0);
          continue;
        }
        let jt;
        if (ct.key != null)
          jt = De.get(ct.key);
        else
          for (Re = Ne; Re <= ve; Re++)
            if (Ht[Re - Ne] === 0 && la(ct, w[Re])) {
              jt = Re;
              break;
            }
        jt === void 0 ? be(ct, N, z, !0) : (Ht[jt - Ne] = V + 1, jt >= Ct ? Ct = jt : mt = !0, A(
          ct,
          w[jt],
          k,
          null,
          N,
          z,
          W,
          G,
          J
        ), Ze++);
      }
      const Pn = mt ? Fg(Ht) : Ua;
      for (Re = Pn.length - 1, V = et - 1; V >= 0; V--) {
        const ct = Ne + V, jt = w[ct], ji = w[ct + 1], yi = ct + 1 < ge ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ji.el || mh(ji)
        ) : R;
        Ht[V] === 0 ? A(
          null,
          jt,
          k,
          yi,
          N,
          z,
          W,
          G,
          J
        ) : mt && (Re < 0 || V !== Pn[Re] ? Se(jt, k, yi, 2) : Re--);
      }
    }
  }, Se = (v, w, k, R, N = null) => {
    const { el: z, type: W, transition: G, children: J, shapeFlag: V } = v;
    if (V & 6) {
      Se(v.component.subTree, w, k, R);
      return;
    }
    if (V & 128) {
      v.suspense.move(w, k, R);
      return;
    }
    if (V & 64) {
      W.move(v, w, k, ut);
      return;
    }
    if (W === ce) {
      i(z, w, k);
      for (let re = 0; re < J.length; re++)
        Se(J[re], w, k, R);
      i(v.anchor, w, k);
      return;
    }
    if (W === Ps) {
      K(v, w, k);
      return;
    }
    if (R !== 2 && V & 1 && G)
      if (R === 0)
        G.persisted && !z[wn] ? i(z, w, k) : (G.beforeEnter(z), i(z, w, k), Kt(() => G.enter(z), N));
      else {
        const { leave: re, delayLeave: ve, afterLeave: _e } = G, Ne = () => {
          v.ctx.isUnmounted ? a(z) : i(z, w, k);
        }, De = () => {
          const Re = z._isLeaving || !!z[wn];
          z._isLeaving && z[wn](
            !0
            /* cancelled */
          ), G.persisted && !Re ? Ne() : re(z, () => {
            Ne(), _e && _e();
          });
        };
        ve ? ve(z, Ne, De) : De();
      }
    else
      i(z, w, k);
  }, be = (v, w, k, R = !1, N = !1) => {
    const {
      type: z,
      props: W,
      ref: G,
      children: J,
      dynamicChildren: V,
      shapeFlag: ge,
      patchFlag: re,
      dirs: ve,
      cacheIndex: _e,
      memo: Ne
    } = v;
    if (re === -2 && (N = !1), G != null && (hi(), Ar(G, null, k, v, !0), pi()), _e != null && (w.renderCache[_e] = void 0), ge & 256) {
      w.ctx.deactivate(v);
      return;
    }
    const De = ge & 1 && ve, Re = !Ha(v);
    let Ze;
    if (Re && (Ze = W && W.onVnodeBeforeUnmount) && zn(Ze, w, v), ge & 6)
      it(v.component, k, R);
    else {
      if (ge & 128) {
        v.suspense.unmount(k, R);
        return;
      }
      De && Qi(v, null, w, "beforeUnmount"), ge & 64 ? v.type.remove(
        v,
        w,
        k,
        ut,
        R
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== ce || re > 0 && re & 64) ? rt(
        V,
        w,
        k,
        !1,
        !0
      ) : (z === ce && re & 384 || !N && ge & 16) && rt(J, w, k), R && Xe(v);
    }
    const et = Ne != null && _e == null;
    (Re && (Ze = W && W.onVnodeUnmounted) || De || et) && Kt(() => {
      Ze && zn(Ze, w, v), De && Qi(v, null, w, "unmounted"), et && (v.el = null);
    }, k);
  }, Xe = (v) => {
    const { type: w, el: k, anchor: R, transition: N } = v;
    if (w === ce) {
      Ee(k, R);
      return;
    }
    if (w === Ps) {
      M(v);
      return;
    }
    const z = () => {
      a(k), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (v.shapeFlag & 1 && N && !N.persisted) {
      const { leave: W, delayLeave: G } = N, J = () => W(k, z);
      G ? G(v.el, z, J) : J();
    } else
      z();
  }, Ee = (v, w) => {
    let k;
    for (; v !== w; )
      k = _(v), a(v), v = k;
    a(w);
  }, it = (v, w, k) => {
    const { bum: R, scope: N, job: z, subTree: W, um: G, m: J, a: V } = v;
    Du(J), Du(V), R && Is(R), N.stop(), z && (z.flags |= 8, be(W, v, w, k)), G && Kt(G, w), Kt(() => {
      v.isUnmounted = !0;
    }, w);
  }, rt = (v, w, k, R = !1, N = !1, z = 0) => {
    for (let W = z; W < v.length; W++)
      be(v[W], w, k, R, N);
  }, lt = (v) => {
    if (v.shapeFlag & 6)
      return lt(v.component.subTree);
    if (v.shapeFlag & 128)
      return v.suspense.next();
    const w = _(v.anchor || v.el), k = w && w[Bf];
    return k ? _(k) : w;
  };
  let Bt = !1;
  const nt = (v, w, k) => {
    let R;
    v == null ? w._vnode && (be(w._vnode, null, null, !0), R = w._vnode.component) : A(
      w._vnode || null,
      v,
      w,
      null,
      null,
      null,
      k
    ), w._vnode = v, Bt || (Bt = !0, Cu(R), Ff(), Bt = !1);
  }, ut = {
    p: A,
    um: be,
    m: Se,
    r: Xe,
    mt: D,
    mc: pe,
    pc: ee,
    pbc: F,
    n: lt,
    o: e
  };
  return {
    render: nt,
    hydrate: void 0,
    createApp: Cg(nt)
  };
}
function wl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ea({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $g(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Kc(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (ye(i) && ye(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = ri(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && Kc(s, o)), o.type === ss && (o.patchFlag === -1 && (o = a[r] = ri(o)), o.el = s.el), o.type === kt && !o.el && (o.el = s.el);
    }
}
function Fg(e) {
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
function gh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : gh(t);
}
function Du(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function mh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? mh(t.subTree) : null;
}
const bh = (e) => e.__isSuspense;
function zg(e, t) {
  t && t.pendingBranch ? ye(e) ? t.effects.push(...e) : t.effects.push(e) : $f(e);
}
const ce = /* @__PURE__ */ Symbol.for("v-fgt"), ss = /* @__PURE__ */ Symbol.for("v-txt"), kt = /* @__PURE__ */ Symbol.for("v-cmt"), Ps = /* @__PURE__ */ Symbol.for("v-stc"), di = [];
let un = null;
function b(e = !1) {
  di.push(un = e ? null : []);
}
function Wc() {
  di.pop(), un = di[di.length - 1] || null;
}
let Vr = 1;
function Ks(e, t = !1) {
  Vr += e, e < 0 && un && t && (un.hasOnce = !0);
}
function yh(e) {
  return e.dynamicChildren = Vr > 0 ? un || Ua : null, Wc(), Vr > 0 && un && un.push(e), e;
}
function S(e, t, n, i, a, r) {
  return yh(
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
  return yh(
    me(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Gr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function la(e, t) {
  return e.type === t.type && e.key === t.key;
}
const _h = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Qe(e) || /* @__PURE__ */ zt(e) || xe(e) ? { i: Ot, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === ce ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _h(t),
    ref: t && Ds(t),
    scopeId: Yo,
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
    ctx: Ot
  };
  return o ? (Ws(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= Qe(n) ? 8 : 16), Vr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  un && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && un.push(l), l;
}
const me = Ug;
function Ug(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Jf) && (e = kt), Gr(e)) {
    const o = Fi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ws(o, n), Vr > 0 && !r && un && (o.shapeFlag & 6 ? un[un.indexOf(e)] = o : un.push(o)), o.patchFlag = -2, o;
  }
  if (qg(e) && (e = e.__vccOpts), t) {
    t = Kr(t);
    let { class: o, style: l } = t;
    o && !Qe(o) && (t.class = we(o)), Ge(l) && (/* @__PURE__ */ zc(l) && !ye(l) && (l = ft({}, l)), t.style = dn(l));
  }
  const s = Qe(e) ? 1 : bh(e) ? 128 : Zo(e) ? 64 : Ge(e) ? 4 : xe(e) ? 2 : 0;
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
function Kr(e) {
  return e ? /* @__PURE__ */ zc(e) || uh(e) ? ft({}, e) : e : null;
}
function Fi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, d = t ? Ut(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && _h(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? ye(r) ? r.concat(Ds(t)) : [r, Ds(t)] : Ds(t)
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
    ssContent: e.ssContent && Fi(e.ssContent),
    ssFallback: e.ssFallback && Fi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && i && jr(
    u,
    l.clone(u)
  ), u;
}
function ke(e = " ", t = 0) {
  return me(ss, null, e, t);
}
function j(e = "", t = !1) {
  return t ? (b(), $e(kt, null, e)) : me(kt, null, e);
}
function Gn(e) {
  return e == null || typeof e == "boolean" ? me(kt) : ye(e) ? me(
    ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gr(e) ? ri(e) : me(ss, null, String(e));
}
function ri(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Fi(e);
}
function Ws(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (ye(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Ws(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !uh(t) ? t._ctx = Ot : a === 3 && Ot && (Ot.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (xe(t)) {
    if (i & 65) {
      Ws(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ot }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [ke(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Ut(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = we([t.class, i.class]));
      else if (a === "style")
        t.style = dn([t.style, i.style]);
      else if (Uo(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(ye(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Bo(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function zn(e, t, n, i = null) {
  Tn(e, t, 7, [
    n,
    i
  ]);
}
const Bg = ih();
let Hg = 0;
function jg(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Bg, r = {
    uid: Hg++,
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
    scope: new dv(
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
    propsOptions: fh(i, a),
    emitsOptions: sh(i, a),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Sg.bind(null, r), e.ce && e.ce(r), r;
}
let $t = null;
const ya = () => $t || Ot;
let qs, Wr;
{
  const e = Go(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  qs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => $t = n
  ), Wr = t(
    "__VUE_SSR_SETTERS__",
    (n) => qr = n
  );
}
const os = (e) => {
  const t = $t;
  return qs(e), e.scope.on(), () => {
    e.scope.off(), qs(t);
  };
}, Mu = () => {
  $t && $t.scope.off(), qs(null);
};
function wh(e) {
  return e.vnode.shapeFlag & 4;
}
let qr = !1;
function Vg(e, t = !1, n = !1) {
  t && Wr(t);
  const { props: i, children: a } = e.vnode, r = wh(e);
  Ng(e, i, r, t), Ig(e, a, n || t);
  const s = r ? Gg(e, t) : void 0;
  return t && Wr(!1), s;
}
function Gg(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fg);
  const { setup: i } = n;
  if (i) {
    hi();
    const a = e.setupContext = i.length > 1 ? Sh(e) : null, r = os(e), s = as(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = df(s);
    if (pi(), r(), (o || e.sp) && !Ha(e) && qf(e), o) {
      if (s.then(Mu, Mu), t)
        return s.then((l) => {
          Wr(!0);
          try {
            $u(e, l, t);
          } finally {
            Wr(!1);
          }
        }).catch((l) => {
          qo(l, e, 0);
        });
      e.asyncDep = s;
    } else
      $u(e, s);
  } else
    Ch(e);
}
function $u(e, t, n) {
  xe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ge(t) && (e.setupState = Pf(t)), Ch(e);
}
function Ch(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Sn);
  {
    const a = os(e);
    hi();
    try {
      gg(e);
    } finally {
      pi(), a();
    }
  }
}
const Kg = {
  get(e, t) {
    return Dt(e, "get", ""), e[t];
  }
};
function Sh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Kg),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function tl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Pf(Lv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in kr)
        return kr[n](e);
    },
    has(t, n) {
      return n in t || n in kr;
    }
  })) : e.proxy;
}
function Wg(e, t = !0) {
  return xe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function qg(e) {
  return xe(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ $v(e, t, qr);
function Jt(e, t, n) {
  try {
    Ks(-1);
    const i = arguments.length;
    return i === 2 ? Ge(t) && !ye(t) ? Gr(t) ? me(e, null, [t]) : me(e, t) : me(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Gr(n) && (n = [n]), me(e, t, n));
  } finally {
    Ks(1);
  }
}
const Yg = "3.5.42", Xg = Sn;
let cc;
const Fu = typeof window < "u" && window.trustedTypes;
if (Fu)
  try {
    cc = /* @__PURE__ */ Fu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Eh = cc ? (e) => cc.createHTML(e) : (e) => e, Zg = "http://www.w3.org/2000/svg", Jg = "http://www.w3.org/1998/Math/MathML", ai = typeof document < "u" ? document : null, zu = ai && /* @__PURE__ */ ai.createElement("template"), Qg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ai.createElementNS(Zg, e) : t === "mathml" ? ai.createElementNS(Jg, e) : n ? ai.createElement(e, { is: n }) : ai.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ai.createTextNode(e),
  createComment: (e) => ai.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ai.querySelector(e),
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
      zu.innerHTML = Eh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = zu.content;
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
}, Ti = "transition", cr = "animation", Yr = /* @__PURE__ */ Symbol("_vtc"), Th = {
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
}, em = /* @__PURE__ */ ft(
  {},
  jf,
  Th
), tm = (e) => (e.displayName = "Transition", e.props = em, e), nm = /* @__PURE__ */ tm(
  (e, { slots: t }) => Jt(tg, im(e), t)
), ta = (e, t = []) => {
  ye(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Uu = (e) => e ? ye(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function im(e) {
  const t = {};
  for (const Z in e)
    Z in Th || (t[Z] = e[Z]);
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
  } = e, O = am(a), A = O && O[0], x = O && O[1], {
    onBeforeEnter: P,
    onEnter: I,
    onEnterCancelled: K,
    onLeave: M,
    onLeaveCancelled: oe,
    onBeforeAppear: de = P,
    onAppear: ne = I,
    onAppearCancelled: pe = K
  } = t, B = (Z, ie, D, $) => {
    Z._enterCancelled = $, na(Z, ie ? u : o), na(Z, ie ? d : s), D && D();
  }, F = (Z, ie) => {
    Z._isLeaving = !1, na(Z, h), na(Z, T), na(Z, _), ie && ie();
  }, fe = (Z) => (ie, D) => {
    const $ = Z ? ne : I, X = () => B(ie, Z, D);
    ta($, [ie, X]), Bu(() => {
      na(ie, Z ? l : r), Qn(ie, Z ? u : o), Uu($) || Hu(ie, i, A, X);
    });
  };
  return ft(t, {
    onBeforeEnter(Z) {
      ta(P, [Z]), Qn(Z, r), Qn(Z, s);
    },
    onBeforeAppear(Z) {
      ta(de, [Z]), Qn(Z, l), Qn(Z, d);
    },
    onEnter: fe(!1),
    onAppear: fe(!0),
    onLeave(Z, ie) {
      Z._isLeaving = !0;
      const D = () => F(Z, ie);
      Qn(Z, h), Z._enterCancelled ? (Qn(Z, _), Gu(Z)) : (Gu(Z), Qn(Z, _)), Bu(() => {
        Z._isLeaving && (na(Z, h), Qn(Z, T), Uu(M) || Hu(Z, i, x, D));
      }), ta(M, [Z, D]);
    },
    onEnterCancelled(Z) {
      B(Z, !1, void 0, !0), ta(K, [Z]);
    },
    onAppearCancelled(Z) {
      B(Z, !0, void 0, !0), ta(pe, [Z]);
    },
    onLeaveCancelled(Z) {
      F(Z), ta(oe, [Z]);
    }
  });
}
function am(e) {
  if (e == null)
    return null;
  if (Ge(e))
    return [Cl(e.enter), Cl(e.leave)];
  {
    const t = Cl(e);
    return [t, t];
  }
}
function Cl(e) {
  return tv(e);
}
function Qn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Yr] || (e[Yr] = /* @__PURE__ */ new Set())).add(t);
}
function na(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Yr];
  n && (n.delete(t), n.size || (e[Yr] = void 0));
}
function Bu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let rm = 0;
function Hu(e, t, n, i) {
  const a = e._endId = ++rm, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = sm(e, t);
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
function sm(e, t) {
  const n = window.getComputedStyle(e), i = (O) => (n[O] || "").split(", "), a = i(`${Ti}Delay`), r = i(`${Ti}Duration`), s = ju(a, r), o = i(`${cr}Delay`), l = i(`${cr}Duration`), d = ju(o, l);
  let u = null, h = 0, _ = 0;
  t === Ti ? s > 0 && (u = Ti, h = s, _ = r.length) : t === cr ? d > 0 && (u = cr, h = d, _ = l.length) : (h = Math.max(s, d), u = h > 0 ? s > d ? Ti : cr : null, _ = u ? u === Ti ? r.length : l.length : 0);
  const T = u === Ti && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Ti}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: _,
    hasTransform: T
  };
}
function ju(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => Vu(n) + Vu(e[i])));
}
function Vu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Gu(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function om(e, t, n) {
  const i = e[Yr];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ys = /* @__PURE__ */ Symbol("_vod"), Ah = /* @__PURE__ */ Symbol("_vsh"), Va = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ys] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ur(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), ur(e, !0), i.enter(e)) : i.leave(e, () => {
      ur(e, !1);
    }) : ur(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ur(e, t);
  }
};
function ur(e, t) {
  e.style.display = t ? e[Ys] : "none", e[Ah] = !t;
}
const kh = /* @__PURE__ */ Symbol("");
function lm(e) {
  const t = ya();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Xs(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Xs(t.ce, a) : uc(t.subTree, a), n(a);
  };
  Zf(() => {
    $f(i);
  }), Ui(() => {
    Yt(i, Sn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), rs(() => a.disconnect());
  });
}
function uc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      uc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Xs(e.el, t);
  else if (e.type === ce)
    e.children.forEach((n) => uc(n, t));
  else if (e.type === Ps) {
    let { el: n, anchor: i } = e;
    for (; n && (Xs(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Xs(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = uv(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[kh] = i;
  }
}
const cm = /(?:^|;)\s*display\s*:/;
function um(e, t, n) {
  const i = e.style, a = Qe(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (Qe(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && yr(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && yr(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? fm(
        e,
        s,
        !Qe(t) && t ? t[s] : void 0,
        o
      ) || yr(i, s, o) : yr(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[kh];
      s && (n += ";" + s), i.cssText = n, r = cm.test(n);
    }
  } else t && e.removeAttribute("style");
  Ys in e && (e[Ys] = r ? i.display : "", e[Ah] && (i.display = "none"));
}
const Ss = /\s*!important$/;
function yr(e, t, n) {
  if (ye(n))
    n.forEach((i) => yr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Ss.test(n) ? e.setProperty(t, n.replace(Ss, ""), "important") : e.setProperty(t, n);
  else {
    const i = dm(e, t);
    Ss.test(n) ? e.setProperty(
      mi(i),
      n.replace(Ss, ""),
      "important"
    ) : e[i] = n;
  }
}
const Ku = ["Webkit", "Moz", "ms"], Sl = {};
function dm(e, t) {
  const n = Sl[t];
  if (n)
    return n;
  let i = Ft(t);
  if (i !== "filter" && i in e)
    return Sl[t] = i;
  i = jo(i);
  for (let a = 0; a < Ku.length; a++) {
    const r = Ku[a] + i;
    if (r in e)
      return Sl[t] = r;
  }
  return t;
}
function fm(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Qe(i) && n === i;
}
const Wu = "http://www.w3.org/1999/xlink";
function qu(e, t, n, i, a, r = ov(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Wu, t.slice(6, t.length)) : e.setAttributeNS(Wu, t, n) : n == null || r && !vf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Rn(n) ? String(n) : n
  );
}
function Yu(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Eh(n) : n);
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
    o === "boolean" ? n = vf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function ca(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function hm(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Xu = /* @__PURE__ */ Symbol("_vei");
function pm(e, t, n, i, a = null) {
  const r = e[Xu] || (e[Xu] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = mm(t);
    if (i) {
      const d = r[t] = _m(
        i,
        a
      );
      ca(e, o, d, l);
    } else s && (hm(e, o, s, l), r[t] = void 0);
  }
}
const vm = /(Once|Passive|Capture)$/, gm = /^on:?(?:Once|Passive|Capture)$/;
function mm(e) {
  let t, n;
  for (; (n = e.match(vm)) && !gm.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : mi(e.slice(2)), t];
}
let El = 0;
const bm = /* @__PURE__ */ Promise.resolve(), ym = () => El || (bm.then(() => El = 0), El = Date.now());
function _m(e, t) {
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
        d && Tn(
          d,
          t,
          5,
          o
        );
      }
    } else
      Tn(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = ym(), n;
}
const Zu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, wm = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? om(e, i, s) : t === "style" ? um(e, n, i) : Uo(t) ? Bo(t) || pm(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cm(e, t, i, s)) ? (Yu(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qu(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Sm(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Qe(i))) ? Yu(e, Ft(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), qu(e, t, i, s));
};
function Cm(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Zu(t) && xe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Zu(t) && Qe(n) ? !1 : t in e;
}
function Sm(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ft(t);
  return Array.isArray(n) ? n.some((a) => Ft(a) === i) : Object.keys(n).some((a) => Ft(a) === i);
}
const Zs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ye(t) ? (n) => Is(t, n) : t;
};
function Em(e) {
  e.target.composing = !0;
}
function Ju(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const da = /* @__PURE__ */ Symbol("_assign"), Es = /* @__PURE__ */ Symbol("_initialValue");
function Tl(e, t, n) {
  return t && (e = e.trim()), n && (e = Vo(e)), e;
}
const ni = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[Es] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Es] = e.defaultValue.replace(/\r\n?/g, `
`))), e[da] = Zs(a);
    const r = i || a.props && a.props.type === "number";
    ca(e, t ? "change" : "input", (s) => {
      s.target.composing || e[da](Tl(e.value, n, r));
    }), (n || r) && ca(e, "change", () => {
      e.value = Tl(e.value, n, r);
    }), t || (ca(e, "compositionstart", Em), ca(e, "compositionend", Ju), ca(e, "change", Ju));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[Es];
    delete e[Es], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[da](Tl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[da] = Zs(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? Vo(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const d = e.getRootNode();
    (d instanceof Document || d instanceof ShadowRoot) && d.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, mn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, ca(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? Vo(Js(l)) : Js(l)
      ), r = e.multiple, s = r ? ma(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? ye(s) ? a.slice() : a : s
      ];
      try {
        e[da](s);
      } finally {
        Kn(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[da] = Zs(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Qu(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[da] = Zs(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Tm(t, n[1], n[0])) && Qu(e, t);
  }
};
function Tm(e, t, n) {
  if (!n || ye(e)) return $i(e, t);
  if (ma(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Qu(e, t) {
  const n = e.multiple, i = ye(t);
  if (!(n && !i && !ma(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = Js(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((d) => String(d) === String(o)) : s.selected = cv(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if ($i(Js(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Js(e) {
  return "_value" in e ? e._value : e.value;
}
const Am = ["ctrl", "shift", "alt", "meta"], km = {
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
  exact: (e, t) => Am.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ye = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = km[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Om = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Wt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = mi(a.key);
    if (t.some(
      (s) => s === r || Om[s] === r
    ))
      return e(a);
  }));
}, Nm = /* @__PURE__ */ ft({ patchProp: wm }, Qg);
let ed;
function xm() {
  return ed || (ed = Dg(Nm));
}
const Lm = ((...e) => {
  const t = xm().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Im(i);
    if (!a) return;
    const r = t._component;
    !xe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, Rm(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function Rm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Im(e) {
  return Qe(e) ? document.querySelector(e) : e;
}
function qc(e, t, n) {
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
function td(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Pm(e) {
  if (Array.isArray(e)) return e;
}
function Dm(e, t) {
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
function Mm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $m(e, t) {
  return Pm(e) || Dm(e, t) || Fm(e, t) || Mm();
}
function Fm(e, t) {
  if (e) {
    if (typeof e == "string") return td(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? td(e, t) : void 0;
  }
}
const Oh = Object.entries, nd = Object.setPrototypeOf, zm = Object.isFrozen, Um = Object.getPrototypeOf, Bm = Object.getOwnPropertyDescriptor;
let gt = Object.freeze, wt = Object.seal, Fa = Object.create, Nh = typeof Reflect < "u" && Reflect, dc = Nh.apply, fc = Nh.construct;
gt || (gt = function(t) {
  return t;
});
wt || (wt = function(t) {
  return t;
});
dc || (dc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
fc || (fc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const sa = ht(Array.prototype.forEach), Hm = ht(Array.prototype.lastIndexOf), id = ht(Array.prototype.pop), dr = ht(Array.prototype.push), jm = ht(Array.prototype.splice), Ga = Array.isArray, _r = ht(String.prototype.toLowerCase), Al = ht(String.prototype.toString), ad = ht(String.prototype.match), fr = ht(String.prototype.replace), rd = ht(String.prototype.indexOf), Vm = ht(String.prototype.trim), Gm = ht(Number.prototype.toString), Km = ht(Boolean.prototype.toString), sd = typeof BigInt > "u" ? null : ht(BigInt.prototype.toString), od = typeof Symbol > "u" ? null : ht(Symbol.prototype.toString), Qt = ht(Object.prototype.hasOwnProperty), hr = ht(Object.prototype.toString), Rt = ht(RegExp.prototype.test), ia = Wm(TypeError);
function ht(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return dc(e, t, i);
  };
}
function Wm(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return fc(e, n);
  };
}
function Ue(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _r;
  if (nd && nd(e, null), !Ga(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (zm(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function qm(e) {
  for (let t = 0; t < e.length; t++)
    Qt(e, t) || (e[t] = null);
  return e;
}
function ln(e) {
  const t = Fa(null);
  for (const i of Oh(e)) {
    var n = $m(i, 2);
    const a = n[0], r = n[1];
    Qt(e, a) && (Ga(r) ? t[a] = qm(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = ln(r) : t[a] = r);
  }
  return t;
}
function Ym(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Gm(e);
    case "boolean":
      return Km(e);
    case "bigint":
      return sd ? sd(e) : "0";
    case "symbol":
      return od ? od(e) : "Symbol()";
    case "undefined":
      return hr(e);
    case "function":
    case "object": {
      if (e === null)
        return hr(e);
      const t = e, n = On(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : hr(i);
      }
      return hr(e);
    }
    default:
      return hr(e);
  }
}
function On(e, t) {
  for (; e !== null; ) {
    const i = Bm(e, t);
    if (i) {
      if (i.get)
        return ht(i.get);
      if (typeof i.value == "function")
        return ht(i.value);
    }
    e = Um(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Xm(e) {
  try {
    return Rt(e, ""), !0;
  } catch {
    return !1;
  }
}
const ld = gt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), kl = gt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Ol = gt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Zm = gt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Nl = gt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Jm = gt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), cd = gt(["#text"]), ud = gt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), xl = gt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), dd = gt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ts = gt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Qm = wt(/{{[\w\W]*|^[\w\W]*}}/g), eb = wt(/<%[\w\W]*|^[\w\W]*%>/g), tb = wt(/\${[\w\W]*/g), nb = wt(/^data-[\-\w.\u00B7-\uFFFF]+$/), ib = wt(/^aria-[\-\w]+$/), fd = wt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ab = wt(/^(?:\w+script|data):/i), rb = wt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), sb = wt(/^html$/i), ob = wt(/^[a-z][.\w]*(-[.\w]+)+$/i), hd = wt(/<[/\w!]/g), pd = wt(/<[/\w]/g), lb = wt(/<\/no(script|embed|frames)/i), cb = wt(/\/>/i), on = {
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
}, xh = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], ub = gt(Ue({}, xh)), db = (function() {
  const e = {};
  return sa(xh, (t) => {
    e[t] = wt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), gt(e);
})(), fb = function() {
  return typeof window > "u" ? null : window;
}, hb = function(t, n) {
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
}, vd = function() {
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
}, Ai = function(t, n, i, a) {
  return Qt(t, n) && Ga(t[n]) ? Ue(a.base ? ln(a.base) : {}, t[n], a.transform) : i;
}, Ll = function(t, n, i) {
  const a = Qt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? ln(a) : i();
};
function Lh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fb();
  const t = (Q) => Lh(Q);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== on.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, d = e.NamedNodeMap;
  d === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, _ = o.prototype, T = On(_, "cloneNode"), O = On(_, "remove"), A = On(_, "nextSibling"), x = On(_, "childNodes"), P = On(_, "parentNode"), I = On(_, "shadowRoot"), K = On(_, "attributes"), M = s && s.prototype ? On(s.prototype, "nodeType") : null, oe = s && s.prototype ? On(s.prototype, "nodeName") : null, de = s && s.prototype ? On(s.prototype, "ownerDocument") : null, ne = function(y) {
    return M ? M(y) : y.nodeType;
  }, pe = function(y) {
    return oe ? oe(y) : y.nodeName;
  };
  if (typeof r == "function") {
    const Q = n.createElement("template");
    Q.content && Q.content.ownerDocument && (n = Q.content.ownerDocument);
  }
  let B, F = "", fe, Z = !1, ie = 0;
  const D = function() {
    if (ie > 0)
      throw ia('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, $ = function(y) {
    D(), ie++;
    try {
      return B.createHTML(y);
    } finally {
      ie--;
    }
  }, X = function(y) {
    D(), ie++;
    try {
      return B.createScriptURL(y);
    } finally {
      ie--;
    }
  }, ae = function() {
    return Z || (fe = hb(h, a), Z = !0), fe;
  }, ee = n, ue = ee.implementation, le = ee.createNodeIterator, Se = ee.createDocumentFragment, be = ee.getElementsByTagName, Xe = i.importNode;
  let Ee = vd();
  t.isSupported = typeof Oh == "function" && typeof P == "function" && ue && ue.createHTMLDocument !== void 0;
  const it = Qm, rt = eb, lt = tb, Bt = nb, nt = ib, ut = ab, U = rb, v = ob;
  let w = fd, k = null;
  const R = Ue({}, [...ld, ...kl, ...Ol, ...Nl, ...cd]);
  let N = null;
  const z = Ue({}, [...ud, ...xl, ...dd, ...Ts]);
  let W = Object.seal(Fa(null, {
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
  })), G = null, J = null;
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
  let ge = !0, re = !0, ve = !1, _e = !0, Ne = !1, De = !0, Re = !1, Ze = !1, et = null, mt = null, Ct = !1, Ht = !1, Pn = !1, ct = !1, jt = !0, ji = !1;
  const yi = "user-content-";
  let xt = !0, Xa = !1, fn = {}, _i = null;
  const Vi = Ue({}, [
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
  let cs = null;
  const wa = Ue({}, ["audio", "video", "img", "source", "image", "track"]);
  let Gi = null;
  const Za = Ue({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ki = "http://www.w3.org/1998/Math/MathML", wi = "http://www.w3.org/2000/svg", st = "http://www.w3.org/1999/xhtml";
  let An = st, Ca = !1, Ja = null;
  const cl = Ue({}, [Ki, wi, st], Al), us = gt(["mi", "mo", "mn", "ms", "mtext"]);
  let Ce = Ue({}, us);
  const Dn = gt(["annotation-xml"]);
  let pt = Ue({}, Dn);
  const Xn = Ue({}, ["title", "style", "font", "a", "script"]);
  let St = null;
  const bt = ["application/xhtml+xml", "text/html"], ds = "text/html";
  let We = null, Xt = null;
  const Qa = n.createElement("form"), hn = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, Ci = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Xt && Xt === y)
      return;
    (!y || typeof y != "object") && (y = {}), y = ln(y), St = // eslint-disable-next-line unicorn/prefer-includes
    bt.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? ds : y.PARSER_MEDIA_TYPE, We = St === "application/xhtml+xml" ? Al : _r, k = Ai(y, "ALLOWED_TAGS", R, {
      transform: We
    }), N = Ai(y, "ALLOWED_ATTR", z, {
      transform: We
    }), Ja = Ai(y, "ALLOWED_NAMESPACES", cl, {
      transform: Al
    }), Gi = Ai(y, "ADD_URI_SAFE_ATTR", Za, {
      transform: We,
      base: Za
    }), cs = Ai(y, "ADD_DATA_URI_TAGS", wa, {
      transform: We,
      base: wa
    }), _i = Ai(y, "FORBID_CONTENTS", Vi, {
      transform: We
    }), G = Ai(y, "FORBID_TAGS", ln({}), {
      transform: We
    }), J = Ai(y, "FORBID_ATTR", ln({}), {
      transform: We
    }), fn = Qt(y, "USE_PROFILES") ? y.USE_PROFILES && typeof y.USE_PROFILES == "object" ? ln(y.USE_PROFILES) : y.USE_PROFILES : !1, ge = y.ALLOW_ARIA_ATTR !== !1, re = y.ALLOW_DATA_ATTR !== !1, ve = y.ALLOW_UNKNOWN_PROTOCOLS || !1, _e = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ne = y.SAFE_FOR_TEMPLATES || !1, De = y.SAFE_FOR_XML !== !1, Re = y.WHOLE_DOCUMENT || !1, Ht = y.RETURN_DOM || !1, Pn = y.RETURN_DOM_FRAGMENT || !1, ct = y.RETURN_TRUSTED_TYPE || !1, Ct = y.FORCE_BODY || !1, jt = y.SANITIZE_DOM !== !1, ji = y.SANITIZE_NAMED_PROPS || !1, xt = y.KEEP_CONTENT !== !1, Xa = y.IN_PLACE || !1, w = Xm(y.ALLOWED_URI_REGEXP) ? y.ALLOWED_URI_REGEXP : fd, An = typeof y.NAMESPACE == "string" ? y.NAMESPACE : st, Ce = Ll(
      y,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ue({}, us)
      // Default built-in map
    ), pt = Ll(
      y,
      "HTML_INTEGRATION_POINTS",
      () => Ue({}, Dn)
      // Default built-in map
    );
    const L = Ll(y, "CUSTOM_ELEMENT_HANDLING", () => Fa(null));
    if (W = Fa(null), Qt(L, "tagNameCheck") && hn(L.tagNameCheck) && (W.tagNameCheck = L.tagNameCheck), Qt(L, "attributeNameCheck") && hn(L.attributeNameCheck) && (W.attributeNameCheck = L.attributeNameCheck), Qt(L, "allowCustomizedBuiltInElements") && typeof L.allowCustomizedBuiltInElements == "boolean" && (W.allowCustomizedBuiltInElements = L.allowCustomizedBuiltInElements), wt(W), Ne && (re = !1), Pn && (Ht = !0), fn && (k = Ue({}, cd), N = Fa(null), fn.html === !0 && (Ue(k, ld), Ue(N, ud)), fn.svg === !0 && (Ue(k, kl), Ue(N, xl), Ue(N, Ts)), fn.svgFilters === !0 && (Ue(k, Ol), Ue(N, xl), Ue(N, Ts)), fn.mathMl === !0 && (Ue(k, Nl), Ue(N, dd), Ue(N, Ts))), V.tagCheck = null, V.attributeCheck = null, Qt(y, "ADD_TAGS") && (typeof y.ADD_TAGS == "function" ? V.tagCheck = y.ADD_TAGS : Ga(y.ADD_TAGS) && (k === R && (k = ln(k)), Ue(k, y.ADD_TAGS, We))), Qt(y, "ADD_ATTR") && (typeof y.ADD_ATTR == "function" ? V.attributeCheck = y.ADD_ATTR : Ga(y.ADD_ATTR) && (N === z && (N = ln(N)), Ue(N, y.ADD_ATTR, We))), Qt(y, "ADD_FORBID_CONTENTS") && Ga(y.ADD_FORBID_CONTENTS) && (_i === Vi && (_i = ln(_i)), Ue(_i, y.ADD_FORBID_CONTENTS, We)), xt && (k["#text"] = !0), Re && Ue(k, ["html", "head", "body"]), k.table && (Ue(k, ["tbody"]), delete G.tbody), y.TRUSTED_TYPES_POLICY) {
      if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ia('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ia('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const q = B;
      B = y.TRUSTED_TYPES_POLICY;
      try {
        F = $("");
      } catch (se) {
        throw B = q, se;
      }
    } else y.TRUSTED_TYPES_POLICY === null ? (B = void 0, F = "") : (B === void 0 && (B = ae()), B && typeof F == "string" && (F = $("")));
    gt && gt(y), Xt = y;
  }, Sa = Ue({}, [...kl, ...Ol, ...Zm]), Si = Ue({}, [...Nl, ...Jm]), er = function(y, L, q) {
    return L.namespaceURI === st ? y === "svg" : L.namespaceURI === Ki ? y === "svg" && (q === "annotation-xml" || Ce[q]) : !!Sa[y];
  }, Mn = function(y, L, q) {
    return L.namespaceURI === st ? y === "math" : L.namespaceURI === wi ? y === "math" && pt[q] : !!Si[y];
  }, Wi = function(y, L, q) {
    return L.namespaceURI === wi && !pt[q] || L.namespaceURI === Ki && !Ce[q] ? !1 : !Si[y] && (Xn[y] || !Sa[y]);
  }, Ea = function(y) {
    let L = P(y);
    (!L || !L.tagName) && (L = {
      namespaceURI: An,
      tagName: "template"
    });
    const q = _r(y.tagName), se = _r(L.tagName);
    return Ja[y.namespaceURI] ? y.namespaceURI === wi ? er(q, L, se) : y.namespaceURI === Ki ? Mn(q, L, se) : y.namespaceURI === st ? Wi(q, L, se) : !!(St === "application/xhtml+xml" && Ja[y.namespaceURI]) : !1;
  }, en = function(y) {
    dr(t.removed, {
      element: y
    });
    try {
      P(y).removeChild(y);
    } catch {
      if (O(y), !P(y))
        throw ia("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, fs = function(y, L, q) {
    try {
      y.removeAttributeNode(L);
    } catch {
      try {
        y.removeAttribute(q);
      } catch {
      }
    }
  }, Ta = function(y) {
    qi(y);
    const L = x(y);
    if (L) {
      const se = [];
      sa(L, (he) => {
        dr(se, he);
      }), sa(se, (he) => {
        try {
          O(he);
        } catch {
        }
      });
    }
    const q = K(y);
    if (q)
      for (let se = q.length - 1; se >= 0; --se) {
        const he = q[se], Te = he && he.name;
        typeof Te == "string" && fs(y, he, Te);
      }
  }, pn = function(y, L, q) {
    if (!q)
      try {
        q = L.getAttributeNode(y);
      } catch {
        q = null;
      }
    dr(t.removed, {
      attribute: q || null,
      from: L
    });
    try {
      q ? L.removeAttributeNode(q) : L.removeAttribute(y);
    } catch {
      try {
        L.removeAttribute(y);
      } catch {
      }
    }
    if (y === "is")
      if (Ht || Pn)
        try {
          en(L);
        } catch {
        }
      else
        try {
          L.setAttribute(y, "");
        } catch {
        }
  }, hs = function(y) {
    const L = K(y);
    if (L)
      for (let q = L.length - 1; q >= 0; --q) {
        const se = L[q], he = se && se.name;
        typeof he != "string" || N[We(he)] || fs(y, se, he);
      }
  }, qi = function(y) {
    const L = [y];
    for (; L.length > 0; ) {
      const q = L.pop();
      ne(q) === on.element && hs(q);
      const he = x(q);
      if (he)
        for (let Te = he.length - 1; Te >= 0; --Te)
          L.push(he[Te]);
    }
  }, ps = function(y, L) {
    return De ? y === "patchsrc" ? !0 : y === "for" && L !== "label" && L !== "output" : !1;
  }, ul = function(y) {
    if (!De)
      return;
    const L = [y];
    for (; L.length > 0; ) {
      const q = L.pop(), se = ne(q);
      if (se === on.processingInstruction || se === on.comment && Rt(pd, q.data)) {
        try {
          O(q);
        } catch {
        }
        continue;
      }
      if (se === on.element) {
        const Te = q, qe = We(pe(q));
        try {
          Te.hasAttribute && Te.hasAttribute("patchsrc") && Te.removeAttribute("patchsrc"), Te.hasAttribute && Te.hasAttribute("for") && ps("for", qe) && Te.removeAttribute("for");
        } catch {
        }
      }
      const he = x(q);
      if (he)
        for (let Te = he.length - 1; Te >= 0; --Te)
          L.push(he[Te]);
    }
  }, vs = function(y) {
    let L = null, q = null;
    if (Ct)
      y = "<remove></remove>" + y;
    else {
      const Te = ad(y, /^[\r\n\t ]+/);
      q = Te && Te[0];
    }
    St === "application/xhtml+xml" && An === st && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const se = B ? $(y) : y;
    if (An === st)
      try {
        L = new u().parseFromString(se, St);
      } catch {
      }
    if (!L || !L.documentElement) {
      L = ue.createDocument(An, "template", null);
      try {
        L.documentElement.innerHTML = Ca ? F : se;
      } catch {
      }
    }
    const he = L.body || L.documentElement;
    return y && q && he.insertBefore(n.createTextNode(q), he.childNodes[0] || null), An === st ? be.call(L, Re ? "html" : "body")[0] : Re ? L.documentElement : he;
  }, kn = function(y) {
    const L = de ? de(y) : y.ownerDocument;
    return le.call(
      L || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Aa = function(y) {
    return y = fr(y, it, " "), y = fr(y, rt, " "), y = fr(y, lt, " "), y;
  }, Yi = function(y) {
    var L;
    y.normalize();
    const q = de ? de(y) : y.ownerDocument, se = le.call(
      q || y,
      y,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let he = se.nextNode();
    for (; he; )
      he.data = Aa(he.data), he = se.nextNode();
    const Te = (L = y.querySelectorAll) === null || L === void 0 ? void 0 : L.call(y, "template");
    Te && sa(Te, (qe) => {
      Zt(qe.content) && Yi(qe.content);
    });
  }, Zn = function(y) {
    const L = oe ? oe(y) : null;
    return typeof L != "string" || We(L) !== "form" ? !1 : typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
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
  }, Zt = function(y) {
    if (!M || typeof y != "object" || y === null)
      return !1;
    try {
      return M(y) === on.documentFragment;
    } catch {
      return !1;
    }
  }, tn = function(y) {
    if (!M || typeof y != "object" || y === null)
      return !1;
    try {
      return typeof M(y) == "number";
    } catch {
      return !1;
    }
  };
  function nn(Q, y, L) {
    Q.length !== 0 && sa(Q, (q) => {
      q.call(t, y, L, Xt);
    });
  }
  const gs = function(y, L) {
    return !!(De && y.hasChildNodes() && !tn(y.firstElementChild) && Rt(hd, y.textContent) && Rt(hd, y.innerHTML) || De && y.namespaceURI === st && ub[L] && (tn(y.firstElementChild) || typeof y.textContent == "string" && Rt(db[L], y.textContent)) || y.nodeType === on.processingInstruction || De && y.nodeType === on.comment && Rt(pd, y.data));
  }, $n = function(y, L) {
    if (y instanceof RegExp)
      return Rt(y, L);
    if (y instanceof Function) {
      for (var q = arguments.length, se = new Array(q > 2 ? q - 2 : 0), he = 2; he < q; he++)
        se[he - 2] = arguments[he];
      return !!y(L, ...se);
    }
    return !1;
  }, vn = function(y, L, q) {
    if (!G[L] && Ji(L) && $n(W.tagNameCheck, L))
      return !1;
    if (xt && !_i[L]) {
      const se = P(y), he = x(y);
      if (he && se) {
        const Te = he.length;
        for (let qe = Te - 1; qe >= 0; --qe) {
          const tt = y === q ? T(he[qe], !0) : he[qe];
          se.insertBefore(tt, A(y));
        }
      }
    }
    return en(y), !0;
  }, Xi = function(y, L, q, se) {
    return y.length === 0 ? L : L === q || L === se ? ln(L) : L;
  }, tr = function(y, L) {
    return y === L || P(y) !== null ? !1 : (Xa && qi(y), !0);
  }, ms = function(y, L) {
    if (nn(Ee.beforeSanitizeElements, y, null), tr(y, L))
      return !0;
    if (Zn(y))
      return en(y), !0;
    const q = We(pe(y));
    if (k = Xi(Ee.uponSanitizeElement, k, R, et), nn(Ee.uponSanitizeElement, y, {
      tagName: q,
      allowedTags: k
    }), tr(y, L))
      return !0;
    if (gs(y, q))
      return en(y), !0;
    if (G[q] || !(V.tagCheck instanceof Function && V.tagCheck(q)) && !k[q]) {
      const he = vn(y, q, L);
      return he === !1 && nn(Ee.afterSanitizeElements, y, null), he;
    }
    if (ne(y) === on.element && !Ea(y) || (q === "noscript" || q === "noembed" || q === "noframes") && Rt(lb, y.innerHTML))
      return en(y), !0;
    if (Ne && y.nodeType === on.text) {
      const he = Aa(y.textContent);
      y.textContent !== he && (dr(t.removed, {
        element: y.cloneNode()
      }), y.textContent = he);
    }
    return nn(Ee.afterSanitizeElements, y, null), !1;
  }, ka = function(y, L, q) {
    if (J[L] || ps(L, y) || jt && (L === "id" || L === "name") && (q in n || q in Qa))
      return !1;
    const se = N[L] || V.attributeCheck instanceof Function && V.attributeCheck(L, y);
    return re && Rt(Bt, L) || ge && Rt(nt, L) ? !0 : se ? Gi[L] || Rt(w, fr(q, U, "")) || (L === "src" || L === "xlink:href" || L === "href") && y !== "script" && rd(q, "data:") === 0 && cs[y] || ve && !Rt(ut, fr(q, U, "")) ? !0 : !q : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ji(y) && $n(W.tagNameCheck, y) && $n(W.attributeNameCheck, L, y) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      L === "is" && W.allowCustomizedBuiltInElements && $n(W.tagNameCheck, q)
    );
  }, Zi = Ue({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ji = function(y) {
    return !Zi[_r(y)] && Rt(v, y);
  }, Ei = function(y, L, q, se) {
    if (B && typeof h == "object" && typeof h.getAttributeType == "function" && !q)
      switch (h.getAttributeType(y, L)) {
        case "TrustedHTML":
          return $(se);
        case "TrustedScriptURL":
          return X(se);
      }
    return se;
  }, Oa = function(y, L, q, se) {
    try {
      q ? y.setAttributeNS(q, L, se) : y.setAttribute(L, se), Zn(y) ? en(y) : id(t.removed);
    } catch {
      pn(L, y);
    }
  }, an = function(y) {
    nn(Ee.beforeSanitizeAttributes, y, null);
    const L = y.attributes;
    if (!L || Zn(y))
      return;
    N = Xi(Ee.uponSanitizeAttribute, N, z, mt);
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let se = L.length;
    const he = We(y.nodeName);
    for (; se--; ) {
      const Te = L[se], qe = Te.name, tt = Te.namespaceURI, Lt = Te.value, yt = We(qe), nr = Lt;
      let Et = qe === "value" ? nr : Vm(nr);
      if (q.attrName = yt, q.attrValue = Et, q.keepAttr = !0, q.forceKeepAttr = void 0, nn(Ee.uponSanitizeAttribute, y, q), Et = q.attrValue, ji && (yt === "id" || yt === "name") && rd(Et, yi) !== 0 && (pn(qe, y, Te), Et = yi + Et), De && Rt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Et)) {
        pn(qe, y, Te);
        continue;
      }
      if (yt === "attributename" && ad(Et, "href")) {
        pn(qe, y, Te);
        continue;
      }
      if (!q.forceKeepAttr) {
        if (!q.keepAttr) {
          pn(qe, y, Te);
          continue;
        }
        if (!_e && Rt(cb, Et)) {
          pn(qe, y, Te);
          continue;
        }
        if (Ne && (Et = Aa(Et)), !ka(he, yt, Et)) {
          pn(qe, y, Te);
          continue;
        }
        Et = Ei(he, yt, tt, Et), Et !== nr && Oa(y, qe, tt, Et);
      }
    }
    nn(Ee.afterSanitizeAttributes, y, null);
  }, rn = function(y) {
    let L = null;
    const q = kn(y);
    for (nn(Ee.beforeSanitizeShadowDOM, y, null); L = q.nextNode(); )
      if (nn(Ee.uponSanitizeShadowNode, L, null), ms(L, y), an(L), Zt(L.content) && rn(L.content), ne(L) === on.element) {
        const se = I(L);
        Zt(se) && (Vt(se), rn(se));
      }
    nn(Ee.afterSanitizeShadowDOM, y, null);
  }, Vt = function(y) {
    const L = [{
      node: y,
      shadow: null
    }];
    for (; L.length > 0; ) {
      const q = L.pop();
      if (q.shadow) {
        rn(q.shadow);
        continue;
      }
      const se = q.node, Te = ne(se) === on.element, qe = x(se);
      if (qe)
        for (let tt = qe.length - 1; tt >= 0; --tt)
          L.push({
            node: qe[tt],
            shadow: null
          });
      if (Te) {
        const tt = oe ? oe(se) : null;
        if (typeof tt == "string" && We(tt) === "template") {
          const Lt = se.content;
          Zt(Lt) && L.push({
            node: Lt,
            shadow: null
          });
        }
      }
      if (Te) {
        const tt = I(se);
        Zt(tt) && L.push({
          node: null,
          shadow: tt
        }, {
          node: tt,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(Q) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, L = null, q = null, se = null, he = null;
    if (Ca = !Q, Ca && (Q = "<!-->"), typeof Q != "string" && !tn(Q) && (Q = Ym(Q), typeof Q != "string"))
      throw ia("dirty is not a string, aborting");
    if (!t.isSupported)
      return Q;
    Ze ? (k = et, N = mt) : Ci(y), (Ee.uponSanitizeElement.length > 0 || Ee.uponSanitizeAttribute.length > 0) && (k = ln(k)), Ee.uponSanitizeAttribute.length > 0 && (N = ln(N)), t.removed = [];
    const Te = Xa && typeof Q != "string" && tn(Q);
    if (Te) {
      ul(Q);
      const Lt = pe(Q);
      if (typeof Lt == "string") {
        const yt = We(Lt);
        if (!k[yt] || G[yt])
          throw Ta(Q), ia("root node is forbidden and cannot be sanitized in-place");
      }
      if (Zn(Q))
        throw Ta(Q), ia("root node is clobbered and cannot be sanitized in-place");
      try {
        Vt(Q);
      } catch (yt) {
        throw Ta(Q), yt;
      }
    } else if (tn(Q))
      L = vs("<!---->"), q = L.ownerDocument.importNode(Q, !0), q.nodeType === on.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? L = q : L.appendChild(q), Vt(q);
    else {
      if (!Ht && !Ne && !Re && // eslint-disable-next-line unicorn/prefer-includes
      Q.indexOf("<") === -1)
        return B && ct ? $(Q) : Q;
      if (L = vs(Q), !L)
        return Ht ? null : ct ? F : "";
    }
    L && Ct && en(L.firstChild);
    const qe = Te ? Q : L;
    try {
      const Lt = kn(qe);
      for (; se = Lt.nextNode(); )
        ms(se, qe), an(se), Zt(se.content) && rn(se.content);
    } catch (Lt) {
      throw Te && (Ta(Q), sa(t.removed, (yt) => {
        yt.element && qi(yt.element);
      })), Lt;
    }
    if (Te)
      return sa(t.removed, (Lt) => {
        Lt.element && qi(Lt.element);
      }), Ne && Yi(Q), Q;
    if (Ht) {
      if (Ne && Yi(L), Pn)
        for (he = Se.call(L.ownerDocument); L.firstChild; )
          he.appendChild(L.firstChild);
      else
        he = L;
      return (N.shadowroot || N.shadowrootmode) && (he = Xe.call(i, he, !0)), he;
    }
    let tt = Re ? L.outerHTML : L.innerHTML;
    return Re && k["!doctype"] && L.ownerDocument && L.ownerDocument.doctype && L.ownerDocument.doctype.name && Rt(sb, L.ownerDocument.doctype.name) && (tt = "<!DOCTYPE " + L.ownerDocument.doctype.name + `>
` + tt), Ne && (tt = Aa(tt)), B && ct ? $(tt) : tt;
  }, t.setConfig = function() {
    let Q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ci(Q), Ze = !0, et = k, mt = N;
  }, t.clearConfig = function() {
    Xt = null, Ze = !1, et = null, mt = null, B = fe, F = "";
  }, t.isValidAttribute = function(Q, y, L) {
    Xt || Ci({});
    const q = We(Q), se = We(y);
    return ka(q, se, L);
  }, t.addHook = function(Q, y) {
    typeof y == "function" && Qt(Ee, Q) && dr(Ee[Q], y);
  }, t.removeHook = function(Q, y) {
    if (Qt(Ee, Q)) {
      if (y !== void 0) {
        const L = Hm(Ee[Q], y);
        return L === -1 ? void 0 : jm(Ee[Q], L, 1)[0];
      }
      return id(Ee[Q]);
    }
  }, t.removeHooks = function(Q) {
    Qt(Ee, Q) && (Ee[Q] = []);
  }, t.removeAllHooks = function() {
    Ee = vd();
  }, t;
}
var Rh = Lh();
function Yc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rl, gd;
function pb() {
  if (gd) return Rl;
  gd = 1;
  var e = /["'&<>]/;
  Rl = t;
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
  return Rl;
}
var vb = pb();
const Qs = /* @__PURE__ */ Yc(vb);
function gb() {
  return globalThis._nc_l10n_locale;
}
function mb() {
  return gb().replaceAll(/_/g, "-");
}
function nl() {
  return globalThis._nc_l10n_language;
}
function bb(e) {
  const t = nl();
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
function Ih(e) {
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
  }, l = (A) => A, d = (o.sanitize ? Rh.sanitize : l) || l, u = o.escape ? Qs : l, h = (A) => typeof A == "string" || typeof A == "number", _ = (A, x, P) => A.replace(/%n/g, "" + P).replace(/{([^{}]*)}/g, (I, K) => {
    if (x === void 0 || !(K in x))
      return u(I);
    const M = x[K];
    return h(M) ? u(`${M}`) : typeof M == "object" && h(M.value) ? (M.escape !== !1 ? Qs : l)(`${M.value}`) : u(I);
  });
  let O = (a?.bundle ?? Ih(e)).translations[t] || t;
  return O = Array.isArray(O) ? O[0] : O, d(typeof r == "object" || s !== void 0 ? _(
    O,
    r,
    s
  ) : O);
}
function Un(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? Ih(e), l = o.translations[s];
  if (typeof l < "u") {
    const d = l;
    if (Array.isArray(d)) {
      const u = o.pluralFunction(i);
      return m(e, d[u], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function yb(e, t = nl()) {
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
class eo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? eo.GLOBAL_SCOPE_PERSISTENT : eo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class _b {
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
    return new eo(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Ph(e) {
  return new _b(e);
}
function wb() {
  try {
    return qc("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Il, md;
function Dh() {
  if (md) return Il;
  md = 1;
  var e = {};
  return Il = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Il;
}
var Pl, bd;
function Mh() {
  if (bd) return Pl;
  bd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Pl = {
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
  }, Pl;
}
var As = { exports: {} }, yd;
function Cb() {
  return yd || (yd = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = Mh(), r = Dh();
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
  })(As, As.exports)), As.exports;
}
var Dl, _d;
function Sb() {
  if (_d) return Dl;
  _d = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Dl = (i) => i ? typeof i != "object" ? e : i : t, Dl;
}
var Ml, wd;
function Eb() {
  if (wd) return Ml;
  wd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return Ml = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Ml;
}
var $l, Cd;
function $h() {
  if (Cd) return $l;
  Cd = 1;
  const e = Dh(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = Mh(), { safeRe: i, t: a } = Cb(), r = Sb(), { compareIdentifiers: s } = Eb(), o = (d, u) => {
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
  return $l = l, $l;
}
var Fl, Sd;
function Tb() {
  if (Sd) return Fl;
  Sd = 1;
  const e = $h();
  return Fl = (n, i) => new e(n, i).major, Fl;
}
var Ab = Tb();
const Ed = /* @__PURE__ */ Yc(Ab);
var zl, Td;
function kb() {
  if (Td) return zl;
  Td = 1;
  const e = $h();
  return zl = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, zl;
}
var Ul, Ad;
function Ob() {
  if (Ad) return Ul;
  Ad = 1;
  const e = kb();
  return Ul = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Ul;
}
var Nb = Ob();
const xb = /* @__PURE__ */ Yc(Nb);
class Lb {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !xb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Ed(t.getVersion()) !== Ed(this.getVersion()) && console.warn(
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
class Rb {
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
let pr = null;
function Xc() {
  return pr !== null ? pr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? pr = new Lb(window._nc_event_bus) : pr = window._nc_event_bus = new Rb(), pr);
}
function Fh(e, t) {
  Xc().subscribe(e, t);
}
function Ib(e, t) {
  Xc().unsubscribe(e, t);
}
function fi(e, ...t) {
  Xc().emit(e, ...t);
}
const zh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Pb = Object.prototype.toString, Db = (e) => Pb.call(e) === "[object Object]", Ia = () => {
}, Mb = /* @__PURE__ */ $b();
function $b() {
  var e, t, n;
  return zh && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Bl(e) {
  return Array.isArray(e) ? e : [e];
}
function Fb(e, t, n) {
  return Yt(e, t, {
    ...n,
    immediate: !0
  });
}
const Uh = zh ? window : void 0;
function wr(e) {
  var t;
  const n = ui(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ka(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = Y(() => {
    const i = Bl(ui(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Fb(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => wr(r))) !== null && i !== void 0 ? i : [Uh].filter((r) => r != null),
      Bl(ui(n.value ? e[1] : e[0])),
      Bl(g(n.value ? e[2] : e[1])),
      ui(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const d = Db(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((_) => r.map((T) => t(h, _, T, d))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let kd = !1;
function Od(e, t, n = {}) {
  const { window: i = Uh, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: Ia,
    cancel: Ia,
    trigger: Ia
  } : Ia;
  if (Mb && !kd) {
    kd = !0;
    const x = { passive: !0 };
    Array.from(i.document.body.children).forEach((P) => P.addEventListener("click", Ia, x)), i.document.documentElement.addEventListener("click", Ia, x);
  }
  let l = !0;
  const d = (x) => ui(a).some((P) => {
    if (typeof P == "string") return Array.from(i.document.querySelectorAll(P)).some((I) => I === x.target || x.composedPath().includes(I));
    {
      const I = wr(P);
      return I && (x.target === I || x.composedPath().includes(I));
    }
  });
  function u(x) {
    const P = ui(x);
    return P && P.$.subTree.shapeFlag === 16;
  }
  function h(x, P) {
    const I = ui(x), K = I.$.subTree && I.$.subTree.children;
    return K == null || !Array.isArray(K) ? !1 : K.some((M) => M.el === P.target || P.composedPath().includes(M.el));
  }
  const _ = (x) => {
    const P = wr(e);
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
      const P = wr(e);
      l = !d(x) && !!(P && !x.composedPath().includes(P));
    }, { passive: !0 }),
    s && Ka(i, "blur", (x) => {
      setTimeout(() => {
        const P = wr(e);
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
function zb(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Pt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Pt({
    x: 0,
    y: 0
  }), d = Y(() => o.x - l.x), u = Y(() => o.y - l.y), { max: h, abs: _ } = Math, T = Y(() => h(_(d.value), _(u.value)) >= n), O = /* @__PURE__ */ Rf(!1), A = Y(() => T.value ? _(d.value) > _(u.value) ? d.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), x = (ne) => [ne.touches[0].clientX, ne.touches[0].clientY], P = (ne, pe) => {
    o.x = ne, o.y = pe;
  }, I = (ne, pe) => {
    l.x = ne, l.y = pe;
  }, K = {
    passive: s,
    capture: !s
  }, M = (ne) => {
    O.value && a?.(ne, A.value), O.value = !1;
  }, oe = [
    Ka(e, "touchstart", (ne) => {
      if (ne.touches.length !== 1) return;
      const [pe, B] = x(ne);
      P(pe, B), I(pe, B), r?.(ne);
    }, K),
    Ka(e, "touchmove", (ne) => {
      if (ne.touches.length !== 1) return;
      const [pe, B] = x(ne);
      I(pe, B), K.capture && !K.passive && Math.abs(d.value) > Math.abs(u.value) && ne.preventDefault(), !O.value && T.value && (O.value = !0), O.value && i?.(ne);
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
    stop: () => oe.forEach((ne) => ne())
  };
}
var Ub = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = pg(), r = hg(), s = /* @__PURE__ */ at([]), o = Y(() => s.value.reduce((U, v) => (U[~~v.id] = v) && U, {})), l = Y(() => s.value.length), d = /* @__PURE__ */ at(null), u = /* @__PURE__ */ at(!1), h = /* @__PURE__ */ at({
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
      let w = U.target.closest(".splitpanes__splitter");
      if (w) {
        let { left: k, top: R } = w.getBoundingClientRect(), { clientX: N, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        h.value.cursorOffset = i.horizontal ? z - R : N - k;
      }
      O(), h.value.mouseDown = !0, h.value.activeSplitter = v, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, P = (U) => {
      h.value.mouseDown && (U.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        B(ne(U)), nt("resize", { event: U }, !0);
      }));
    }, I = (U) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), nt("resized", { event: U }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, K = (U, v) => {
      "ontouchstart" in window && (U.preventDefault(), _.value.splitter === v ? (clearTimeout(_.value.timeoutId), _.value.timeoutId = null, M(U, v), _.value.splitter = null) : (_.value.splitter = v, _.value.timeoutId = setTimeout(() => _.value.splitter = null, 500))), h.value.dragging || nt("splitter-click", {
        event: U,
        index: v
      }, !0);
    }, M = (U, v) => {
      if (nt("splitter-dblclick", {
        event: U,
        index: v
      }, !0), i.maximizePanes) {
        let w = 0;
        s.value = s.value.map((k, R) => (k.size = R === v ? k.max : k.min, R !== v && (w += k.min), k)), s.value[v].size -= w, nt("pane-maximize", {
          event: U,
          index: v,
          pane: s.value[v]
        }), nt("resized", {
          event: U,
          index: v
        }, !0);
      }
    }, oe = (U, v) => {
      if (!i.keyboardStep) return;
      let w = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", k = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!w && !k) return;
      U.preventDefault(), h.value.activeSplitter = v;
      let R = (w ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), N = Z(v) + s.value[v].size;
      F(Math.min(Math.max(N + R * i.keyboardStep, 0), 100)), nt("resize", { event: U }, !0), nt("resized", { event: U }, !0), h.value.activeSplitter = null;
    }, de = (U, v) => {
      let w = o.value[v];
      w && nt("pane-click", {
        event: U,
        index: w.index,
        pane: w
      });
    }, ne = (U) => {
      let v = d.value.getBoundingClientRect(), { clientX: w, clientY: k } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: w - (i.horizontal ? 0 : h.value.cursorOffset) - v.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - v.top
      };
    }, pe = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let v = d.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = v - U), U * 100 / v;
    }, B = (U) => {
      F(pe(U));
    }, F = (U) => {
      let v = h.value.activeSplitter;
      if (v === null || v >= s.value.length - 1) return;
      let w = {
        prevPanesSize: Z(v),
        nextPanesSize: ie(v),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : w.prevPanesSize), R = 100 - (i.pushOtherPanes ? 0 : w.nextPanesSize);
      U = Math.max(Math.min(U, R), k);
      let N = [v, v + 1], z = s.value[N[0]] || null, W = s.value[N[1]] || null, G = z !== null && z.max < 100 && U >= z.max + w.prevPanesSize, J = W !== null && W.max < 100 && U <= 100 - (W.max + ie(v + 1));
      if (G || J) {
        G ? (z.size = z.max, W.size = Math.min(Math.max(100 - z.max - w.prevPanesSize - w.nextPanesSize, W.min), W.max)) : (z.size = Math.min(Math.max(100 - W.max - w.prevPanesSize - ie(v + 1), z.min), z.max), W.size = W.max);
        return;
      }
      if (i.pushOtherPanes) {
        let V = fe(w, U);
        if (!V) return;
        ({ sums: w, panesToResize: N } = V), z = s.value[N[0]] || null, W = s.value[N[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - w.prevPanesSize - w.prevReachedMinPanes, z.min), z.max)), W !== null && (W.size = Math.min(Math.max(100 - U - w.nextPanesSize - w.nextReachedMinPanes, W.min), W.max));
    }, fe = (U, v) => {
      let w = h.value.activeSplitter, k = [w, w + 1];
      if (v < U.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = D(w).index, U.prevReachedMinPanes = 0, k[0] < w && s.value.forEach((R, N) => {
          N > k[0] && N <= w && (R.size = R.min, U.prevReachedMinPanes += R.min);
        }), k[0] === void 0) return U.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((R, N) => {
          N > 0 && N <= w && (R.size = R.min, U.prevReachedMinPanes += R.min);
        }), s.value[k[1]].size = 100 - U.prevReachedMinPanes - s.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = Z(k[0]);
      }
      return v > 100 - U.nextPanesSize - s.value[k[1]].min && (k[1] = $(w).index, U.nextReachedMinPanes = 0, k[1] > w + 1 && s.value.forEach((R, N) => {
        N > w && N < k[1] && (R.size = R.min, U.nextReachedMinPanes += R.min);
      }), U.nextPanesSize = k[1] === void 0 ? 0 : ie(k[1] - 1), k[1] === void 0) ? (U.nextReachedMinPanes = 0, s.value.forEach((R, N) => {
        N >= w + 1 && (R.size = R.min, U.nextReachedMinPanes += R.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - U.prevPanesSize - ie(k[0] - 1)), null) : {
        sums: U,
        panesToResize: k
      };
    }, Z = (U) => s.value.reduce((v, w, k) => v + (k < U ? w.size : 0), 0), ie = (U) => s.value.reduce((v, w, k) => v + (k > U + 1 ? w.size : 0), 0), D = (U) => [...s.value].reverse().find((v) => v.index < U && v.size > v.min) || {}, $ = (U) => s.value.find((v) => v.index > U + 1 && v.size > v.min) || {}, X = () => {
      let U = Array.from(d.value?.children || []);
      for (let v of U) {
        let w = v.classList.contains("splitpanes__pane"), k = v.classList.contains("splitpanes__splitter");
        !w && !k && (v.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ae = (U, v, w = !1) => {
      let k = U - 1, R = document.createElement("div");
      R.classList.add("splitpanes__splitter"), w || (R.onmousedown = (N) => x(N, k), typeof window < "u" && "ontouchstart" in window && (R.ontouchstart = (N) => x(N, k)), R.onclick = (N) => K(N, k + 1), i.keyboardStep && (R.setAttribute("tabindex", "0"), R.setAttribute("role", "separator"), R.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), R.onkeydown = (N) => oe(N, k))), R.ondblclick = (N) => M(N, k + 1), v.parentNode.insertBefore(R, v);
    }, ee = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, ue = () => {
      let U = Array.from(d.value?.children || []);
      for (let w of U) w.className.includes("splitpanes__splitter") && ee(w);
      let v = 0;
      for (let w of U) w.className.includes("splitpanes__pane") && (!v && i.firstSplitter ? ae(v, w, !0) : v && ae(v, w), v++);
    }, le = ({ uid: U, ...v }) => {
      let w = o.value[U];
      for (let [k, R] of Object.entries(v)) w[k] = R;
    }, Se = !1, be = (U) => {
      let v = -1;
      Array.from(d.value?.children || []).some((w) => (w.className.includes("splitpanes__pane") && v++, w.isSameNode(U.el))), s.value.splice(v, 0, {
        ...U,
        index: v
      }), s.value.forEach((w, k) => w.index = k), u.value && !Se && (Se = !0, Kn(() => {
        ue(), Ee({ addedPane: s.value[v] }), nt("pane-add", { pane: s.value[v] }), Se = !1;
      }));
    }, Xe = (U) => {
      let v = s.value.findIndex((k) => k.id === U);
      s.value[v].el = null;
      let w = s.value.splice(v, 1)[0];
      s.value.forEach((k, R) => k.index = R), Kn(() => {
        ue(), nt("pane-remove", { pane: w }), Ee({ removedPane: {
          ...w
        } });
      });
    }, Ee = (U = {}) => {
      !U.addedPane && !U.removedPane ? rt() : s.value.some((v) => v.givenSize !== null || v.min || v.max < 100) ? lt(U) : it(), u.value && nt("resized");
    }, it = () => {
      let U = 100 / l.value, v = 100, w = [], k = [];
      for (let R of s.value) R.size = Math.max(Math.min(U, R.max), R.min), v -= R.size, R.size >= R.max && w.push(R.id), R.size <= R.min && k.push(R.id);
      Math.abs(v) > 0.1 && Bt(v, w, k);
    }, rt = () => {
      let U = 100, v = [], w = [], k = 0;
      for (let N of s.value) U -= N.size, N.givenSize !== null && k++, N.size >= N.max && v.push(N.id), N.size <= N.min && w.push(N.id);
      let R = 100;
      if (U > 0.1) {
        for (let N of s.value) N.givenSize === null && (N.size = Math.max(Math.min(U / (l.value - k), N.max), N.min)), R -= N.size;
        R > 0.1 && Bt(R, v, w);
      }
    }, lt = ({ addedPane: U, removedPane: v } = {}) => {
      let w = s.value.reduce((G, J) => G + (J.givenSize === null ? 0 : J.givenSize), 0), k = s.value.filter((G) => G.givenSize === null).length, R = k > 0 ? (100 - w) / k : 0, N = 0, z = [], W = [];
      for (let G of s.value) N -= G.size, G.size >= G.max && z.push(G.id), G.size <= G.min && W.push(G.id);
      if (!(Math.abs(N) < 0.1)) {
        N = 100;
        for (let G of s.value) G.givenSize === null && (G.size = Math.max(Math.min(R, G.max), G.min)), N -= G.size, G.size >= G.max && z.push(G.id), G.size <= G.min && W.push(G.id);
        Math.abs(N) > 0.1 && Bt(N, z, W);
      }
    }, Bt = (U, v, w) => {
      let k;
      k = U > 0 ? U / (l.value - v.length) : U / (l.value - w.length), s.value.forEach((R, N) => {
        if (U > 0 && !v.includes(R.id)) {
          let z = Math.max(Math.min(R.size + k, R.max), R.min), W = z - R.size;
          U -= W, R.size = z;
        } else if (!w.includes(R.id)) {
          let z = Math.max(Math.min(R.size + k, R.max), R.min), W = z - R.size;
          U -= W, R.size = z;
        }
      }), Math.abs(U) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, nt = (U, v = void 0, w = !1) => {
      let k = v?.index ?? h.value.activeSplitter ?? null;
      n(U, {
        ...v,
        ...k !== null && { index: k },
        ...w && k !== null && {
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
    Yt(() => i.firstSplitter, () => ue()), Yt(() => i.horizontal, (U) => Kn(() => {
      n("direction-changed", {
        horizontal: U,
        panes: s.value.map((v) => ({
          min: v.min,
          max: v.max,
          size: v.size
        }))
      });
    })), Ui(() => {
      X(), ue(), Ee(), nt("ready"), u.value = !0;
    }), Ya(() => u.value = !1);
    let ut = () => {
      let { class: U, ...v } = a;
      return Jt("div", {
        ref: d,
        class: [T.value, U],
        ...v
      }, r.default?.());
    };
    return _n("panes", s), _n("indexedPanes", o), _n("horizontal", Y(() => i.horizontal)), _n("requestUpdate", le), _n("onPaneAdd", be), _n("onPaneRemove", Xe), _n("onPaneClick", de), (U, v) => (b(), $e(Hc(ut)));
  }
}), Bb = {
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
    let t = e, n = Mt("requestUpdate"), i = Mt("onPaneAdd"), a = Mt("horizontal"), r = Mt("onPaneRemove"), s = Mt("onPaneClick"), o = ya()?.uid, l = Mt("indexedPanes"), d = Y(() => l.value[o]), u = /* @__PURE__ */ at(null), h = Y(() => {
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
    })), Ui(() => {
      i({
        id: o,
        el: u.value,
        min: _.value,
        max: T.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Ya(() => r(o)), (A, x) => (b(), S("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: x[0] ||= (P) => g(s)(P, A._.uid),
      style: dn(O.value)
    }, [Le(A.$slots, "default")], 4));
  }
}, Hb = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", jb = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", Vb = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Gb = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Zc = 1024, Bh = Zc / 2, to = (e) => document.documentElement.clientWidth < e, Hh = /* @__PURE__ */ at(to(Zc)), jh = /* @__PURE__ */ at(to(Bh));
window.addEventListener("resize", () => {
  Hh.value = to(Zc), jh.value = to(Bh);
}, { passive: !0 });
function ls() {
  return /* @__PURE__ */ Br(Hh);
}
function Kb() {
  return /* @__PURE__ */ Br(jh);
}
class Wb {
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
    return Un("", t, n, i, a, { bundle: this.bundle });
  }
}
class qb {
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
    return this.setLanguage(nl().replace("-", "_"));
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
    const t = new Wb((n) => yb(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function Yb() {
  return new qb();
}
const Vh = Yb().detectLanguage().build(), _t = (...e) => Vh.gettext(...e);
function Bi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== nl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        Vh.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const Xb = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], Zb = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Jb = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Qb = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], ey = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], ty = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], ny = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], iy = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], ay = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const ry = /* @__PURE__ */ Symbol(""), [sy] = window.OC?.config?.version?.split(".") ?? [], Gh = Number.parseInt(sy ?? "35"), oy = Gh < 32, Hi = Gh < 34, ly = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function cy() {
  return Mt(ly, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Ke = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, uy = { class: "button-vue__wrapper" }, dy = { class: "button-vue__icon" }, fy = { class: "button-vue__text" }, hy = /* @__PURE__ */ Nt({
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
    const n = e, i = t, { formBoxItemClass: a } = cy(), r = Mt(ry, null) !== null, s = Y(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = Y(() => s.value === "button" && typeof n.pressed == "boolean"), l = Y(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), d = Y(() => l.value.startsWith("tertiary")), u = Y(() => n.alignment.split("-")[0]), h = Y(() => n.alignment.includes("-")), _ = Mt("NcPopover:trigger:attrs", () => ({}), !1), T = Y(() => _()), O = Y(() => {
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
    return (x, P) => (b(), $e(Hc(s.value), Ut({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": d.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": g(oy),
          "button-vue--legacy34": g(Hi)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, O.value, { onClick: A }), {
      default: Ae(() => [
        c("span", uy, [
          c("span", dy, [
            Le(x.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", fy, [
            Le(x.$slots, "default", {}, () => [
              ke(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Wn = /* @__PURE__ */ Ke(hy, [["__scopeId", "data-v-47ce59a3"]]), py = ["aria-hidden", "aria-label"], vy = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, gy = ["d"], my = ["innerHTML"], by = /* @__PURE__ */ Nt({
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
    lm((a) => ({
      fb515064: n.value
    }));
    const t = e, n = Y(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = Y(() => {
      if (!t.svg || t.path)
        return;
      const a = Rh.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (b(), S("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: we(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (b(), S("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, my)) : (b(), S("svg", vy, [
        c("path", { d: e.path }, null, 8, gy)
      ]))
    ], 10, py));
  }
}), il = /* @__PURE__ */ Ke(by, [["__scopeId", "data-v-aaedb1c3"]]);
_y();
function yy(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), fi("csrf-token-update", { token: e, _internal: !0 }));
}
function _y() {
  Fh("csrf-token-update", ({ token: e, _internal: t }) => {
    t || yy(e);
  });
}
Ph("public").persist().build();
let Pa;
function Nd(e, t) {
  return e ? e.getAttribute(t) : null;
}
function wy() {
  if (Pa !== void 0)
    return Pa;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Nd(e, "data-user");
  return t === null ? (Pa = null, Pa) : (Pa = {
    uid: t,
    displayName: Nd(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Pa);
}
var dt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(dt || {});
class Cy {
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
function Sy(e) {
  return new Cy(e);
}
class Ey {
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
    const t = wy();
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
function Ty() {
  return new Ey(Sy);
}
const ga = Ty().detectUser().setApp("@nextcloud/vue").build();
function Ay(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Kh = "missing-app-name";
try {
  Kh = "library";
} catch {
  ga.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const ky = Kh;
let Oy = "";
try {
  Oy = "0.1.0-alpha.167";
} catch {
  ga.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Wh() {
  return Mt("appName", ky);
}
const Ny = Ay(() => {
  const e = qc("core", "apps", []), t = Wh();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), hc = bb();
Bi(ny);
const xy = /* @__PURE__ */ Nt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = ls();
    Yt(t, n), Ui(() => {
      n(t.value);
    }), Ya(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && fi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (b(), $e(g(Wn), {
      "aria-label": g(_t)("Go back to the list"),
      class: we(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(_t)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Ae(() => [
        me(g(il), {
          directional: "",
          path: g(Hb)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), Ly = /* @__PURE__ */ Ke(xy, [["__scopeId", "data-v-a28923a1"]]), xd = Ph("nextcloud").persist().build(), Ry = wb().theming?.name ?? "Nextcloud", Iy = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: Ly,
    Pane: Bb,
    Splitpanes: Ub
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
      appName: Wh(),
      localizedAppName: Ny(),
      isMobile: ls(),
      isRtl: hc
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
        return ga.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(Ry), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = zb(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? fi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && fi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      xd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ga.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(xd.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ga.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, Py = {
  key: 0,
  class: "hidden-visually"
}, Dy = { class: "app-content-wrapper__list" }, My = {
  key: 1,
  class: "app-content-wrapper"
};
function $y(e, t, n, i, a, r) {
  const s = ze("NcAppContentDetailsToggle"), o = ze("Pane"), l = ze("Splitpanes");
  return b(), S("main", {
    id: "app-content-vue",
    class: we(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (b(), S("h1", Py, p(n.pageHeading), 1)) : j("", !0),
    e.$slots.list ? (b(), S(ce, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (b(), S("div", {
        key: 0,
        class: we(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (b(), $e(s, {
          key: 0,
          onClick: Ye(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : j("", !0),
        je(c("div", Dy, [
          Le(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Va, !n.showDetails]
        ]),
        n.showDetails ? Le(e.$slots, "default", { key: 1 }, void 0, !0) : j("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (b(), S("div", My, [
        me(l, {
          horizontal: n.layout === "horizontal-split",
          class: we(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Ae(() => [
            me(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Ae(() => [
                Le(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            me(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Ae(() => [
                Le(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : j("", !0)
    ], 64)) : j("", !0),
    e.$slots.list ? j("", !0) : Le(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const Fy = /* @__PURE__ */ Ke(Iy, [["render", $y], ["__scopeId", "data-v-51427d61"]]);
var qh = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], no = /* @__PURE__ */ qh.join(","), Yh = typeof Element > "u", ba = Yh ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, io = !Yh && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, ao = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : ao(t.parentNode));
  return s;
}, zy = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Xh = function(t, n, i) {
  if (ao(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(no));
  return n && ba.call(t, no) && a.unshift(t), a = a.filter(i), a;
}, ro = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!ao(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, d = ro(l, !0, i);
        i.flatten ? a.push.apply(a, d) : a.push({
          scopeParent: s,
          candidates: d
        });
      } else {
        var u = ba.call(s, no);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), _ = !ao(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && _) {
          var T = ro(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, T) : a.push({
            scopeParent: s,
            candidates: T
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Zh = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, ua = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || zy(t)) && !Zh(t) ? 0 : t.tabIndex;
}, Uy = function(t, n) {
  var i = ua(t);
  return i < 0 && n && !Zh(t) ? 0 : i;
}, By = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Jh = function(t) {
  return t.tagName === "INPUT";
}, Hy = function(t) {
  return Jh(t) && t.type === "hidden";
}, jy = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, Vy = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, Gy = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || io(t), i = function(o) {
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
  var r = Vy(a, t.form);
  return !r || r === t;
}, Ky = function(t) {
  return Jh(t) && t.type === "radio";
}, Wy = function(t) {
  return Ky(t) && !Gy(t);
}, qy = function(t) {
  var n, i = t && io(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var d, u, h;
      i = io(a), a = (d = i) === null || d === void 0 ? void 0 : d.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, Ld = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, Yy = function(t, n) {
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
  var l = ba.call(t, "details>summary:first-of-type"), d = l ? t.parentElement : t;
  if (ba.call(d, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, _ = io(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return Ld(t);
        t.assignedSlot ? t = t.assignedSlot : !h && _ !== t.ownerDocument ? t = _.host : t = h;
      }
      t = u;
    }
    if (qy(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Ld(t);
  return !1;
}, Xy = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return ba.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, so = function(t, n) {
  return !(n.disabled || Hy(n) || Yy(n, t) || // For a details element with a summary, the summary element gets the focus
  jy(n) || Xy(n));
}, pc = function(t, n) {
  return !(Wy(n) || ua(n) < 0 || !so(t, n));
}, Zy = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Qh = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = Uy(o, s), d = s ? Qh(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, d) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: d
    });
  }), i.sort(By).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, Jy = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = ro([t], n.includeContainer, {
    filter: pc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Zy
  }) : i = Xh(t, n.includeContainer, pc.bind(null, n)), Qh(i);
}, Qy = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = ro([t], n.includeContainer, {
    filter: so.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Xh(t, n.includeContainer, so.bind(null, n)), i;
}, Da = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ba.call(t, no) === !1 ? !1 : pc(n, t);
}, e_ = /* @__PURE__ */ qh.concat("iframe:not([inert]):not([inert] *)").join(","), Hl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ba.call(t, e_) === !1 ? !1 : so(n, t);
};
function vc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function t_(e) {
  if (Array.isArray(e)) return vc(e);
}
function Rd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = ep(e)) || t) {
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
function n_(e, t, n) {
  return (t = o_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function i_(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function a_() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Id(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Pd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Id(Object(n), !0).forEach(function(i) {
      n_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Id(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function r_(e) {
  return t_(e) || i_(e) || ep(e) || a_();
}
function s_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function o_(e) {
  var t = s_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ep(e, t) {
  if (e) {
    if (typeof e == "string") return vc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vc(e, t) : void 0;
  }
}
var li = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = li.getActiveTrap(t);
    n !== i && li.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), li.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = li.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = li.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, l_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, c_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Or = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, u_ = function(t) {
  return Or(t) && !t.shiftKey;
}, d_ = function(t) {
  return Or(t) && t.shiftKey;
}, Dd = function(t) {
  return setTimeout(t, 0);
}, vr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, ks = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, f_ = [], Jc = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || f_, r = Pd({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: u_,
    isKeyBackward: d_
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
    return s.containerGroups.findIndex(function(ae) {
      var ee = ae.container, ue = ae.tabbableNodes;
      return ee.contains(D) || X?.includes(ee) || ue.find(function(le) {
        return le === D;
      });
    });
  }, u = function(D) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = $.hasFallback, ae = X === void 0 ? !1 : X, ee = $.params, ue = ee === void 0 ? [] : ee, le = r[D];
    if (typeof le == "function" && (le = le.apply(void 0, r_(ue))), le === !0 && (le = void 0), !le) {
      if (le === void 0 || le === !1)
        return le;
      throw new Error("`".concat(D, "` was specified but was not a node, or did not return a node"));
    }
    var Se = le;
    if (typeof le == "string") {
      try {
        Se = i.querySelector(le);
      } catch (be) {
        throw new Error("`".concat(D, '` appears to be an invalid selector; error="').concat(be.message, '"'));
      }
      if (!Se && !ae)
        throw new Error("`".concat(D, "` as selector refers to no known node"));
    }
    return Se;
  }, h = function(D) {
    var $ = D.activeElement;
    return $ ? $.shadowRoot && $.shadowRoot.activeElement !== null ? h($.shadowRoot) : $ : null;
  }, _ = function() {
    var D = u("initialFocus", {
      hasFallback: !0
    });
    if (D === !1)
      return !1;
    if (D === void 0 || D && !Hl(D, r.tabbableOptions)) {
      var $ = h(i);
      if (d($) >= 0)
        D = $;
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
      var $ = Jy(D, r.tabbableOptions), X = Qy(D, r.tabbableOptions), ae = $.length > 0 ? $[0] : void 0, ee = $.length > 0 ? $[$.length - 1] : void 0, ue = X.find(function(be) {
        return Da(be);
      }), le = X.slice().reverse().find(function(be) {
        return Da(be);
      }), Se = !!$.find(function(be) {
        return ua(be) > 0;
      });
      return {
        container: D,
        tabbableNodes: $,
        focusableNodes: X,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Se,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ae,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: ee,
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
        lastDomTabbableNode: le,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Xe) {
          var Ee = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, it = $.indexOf(Xe);
          return it < 0 ? Ee ? X.slice(X.indexOf(Xe) + 1).find(function(rt) {
            return Da(rt);
          }) : X.slice(0, X.indexOf(Xe)).reverse().find(function(rt) {
            return Da(rt);
          }) : $[it + (Ee ? 1 : -1)];
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
      }), s.mostRecentlyFocusedNode = D, l_(D) && D.select();
    }
  }, A = function(D) {
    var $ = u("setReturnFocus", {
      params: [D]
    });
    return $ || ($ === !1 ? !1 : D);
  }, x = function(D) {
    var $ = D.target, X = D.event, ae = D.isBackward, ee = ae === void 0 ? !1 : ae;
    $ = $ || ks(X), T();
    var ue = null;
    if (s.tabbableGroups.length > 0) {
      var le = d($, X), Se = le >= 0 ? s.containerGroups[le] : void 0;
      if (le < 0)
        ee ? ue = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : ue = s.tabbableGroups[0].firstTabbableNode;
      else if (ee) {
        var be = s.tabbableGroups.findIndex(function(Bt) {
          var nt = Bt.firstTabbableNode;
          return $ === nt;
        });
        if (be < 0 && (Se.container === $ || Hl($, r.tabbableOptions) && !Da($, r.tabbableOptions) && !Se.nextTabbableNode($, !1)) && (be = le), be >= 0) {
          var Xe = be === 0 ? s.tabbableGroups.length - 1 : be - 1, Ee = s.tabbableGroups[Xe];
          ue = ua($) >= 0 ? Ee.lastTabbableNode : Ee.lastDomTabbableNode;
        } else Or(X) || (ue = Se.nextTabbableNode($, !1));
      } else {
        var it = s.tabbableGroups.findIndex(function(Bt) {
          var nt = Bt.lastTabbableNode;
          return $ === nt;
        });
        if (it < 0 && (Se.container === $ || Hl($, r.tabbableOptions) && !Da($, r.tabbableOptions) && !Se.nextTabbableNode($)) && (it = le), it >= 0) {
          var rt = it === s.tabbableGroups.length - 1 ? 0 : it + 1, lt = s.tabbableGroups[rt];
          ue = ua($) >= 0 ? lt.firstTabbableNode : lt.firstDomTabbableNode;
        } else Or(X) || (ue = Se.nextTabbableNode($));
      }
    } else
      ue = u("fallbackFocus");
    return ue;
  }, P = function(D) {
    var $ = ks(D);
    if (!(d($, D) >= 0)) {
      if (vr(r.clickOutsideDeactivates, D)) {
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
      vr(r.allowOutsideClick, D) || D.preventDefault();
    }
  }, I = function(D) {
    var $ = ks(D), X = d($, D) >= 0;
    if (X || $ instanceof Document)
      X && (s.mostRecentlyFocusedNode = $);
    else {
      D.stopImmediatePropagation();
      var ae, ee = !0;
      if (s.mostRecentlyFocusedNode)
        if (ua(s.mostRecentlyFocusedNode) > 0) {
          var ue = d(s.mostRecentlyFocusedNode), le = s.containerGroups[ue].tabbableNodes;
          if (le.length > 0) {
            var Se = le.findIndex(function(be) {
              return be === s.mostRecentlyFocusedNode;
            });
            Se >= 0 && (r.isKeyForward(s.recentNavEvent) ? Se + 1 < le.length && (ae = le[Se + 1], ee = !1) : Se - 1 >= 0 && (ae = le[Se - 1], ee = !1));
          }
        } else
          s.containerGroups.some(function(be) {
            return be.tabbableNodes.some(function(Xe) {
              return ua(Xe) > 0;
            });
          }) || (ee = !1);
      else
        ee = !1;
      ee && (ae = x({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), O(ae || s.mostRecentlyFocusedNode || _());
    }
    s.recentNavEvent = void 0;
  }, K = function(D) {
    var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = D;
    var X = x({
      event: D,
      isBackward: $
    });
    X && (Or(D) && D.preventDefault(), O(X));
  }, M = function(D) {
    (r.isKeyForward(D) || r.isKeyBackward(D)) && K(D, r.isKeyBackward(D));
  }, oe = function(D) {
    c_(D) && vr(r.escapeDeactivates, D) !== !1 && (D.preventDefault(), o.deactivate());
  }, de = function(D) {
    var $ = ks(D);
    d($, D) >= 0 || vr(r.clickOutsideDeactivates, D) || vr(r.allowOutsideClick, D) || (D.preventDefault(), D.stopImmediatePropagation());
  }, ne = function() {
    if (s.active) {
      li.activateTrap(a, o);
      var D;
      return r.delayInitialFocus ? D = new Promise(function($) {
        s.delayInitialFocusTimer = Dd(function() {
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
  }, pe = function(D) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var $ = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), ae = Rd(D), ee;
    try {
      for (ae.s(); !(ee = ae.n()).done; ) {
        var ue = ee.value;
        $.add(ue);
        for (var le = typeof ShadowRoot < "u" && ue.getRootNode() instanceof ShadowRoot, Se = ue; Se; ) {
          $.add(Se);
          var be = Se.parentElement, Xe = [];
          be ? Xe = be.children : !be && le && (Xe = Se.getRootNode().children, be = Se.getRootNode().host, le = typeof ShadowRoot < "u" && be.getRootNode() instanceof ShadowRoot);
          var Ee = Rd(Xe), it;
          try {
            for (Ee.s(); !(it = Ee.n()).done; ) {
              var rt = it.value;
              X.add(rt);
            }
          } catch (lt) {
            Ee.e(lt);
          } finally {
            Ee.f();
          }
          Se = be;
        }
      }
    } catch (lt) {
      ae.e(lt);
    } finally {
      ae.f();
    }
    $.forEach(function(lt) {
      X.delete(lt);
    }), s.adjacentElements = X;
  }, B = function() {
    if (s.active)
      return i.removeEventListener("focusin", I, !0), i.removeEventListener("mousedown", P, !0), i.removeEventListener("touchstart", P, !0), i.removeEventListener("click", de, !0), i.removeEventListener("keydown", M, !0), i.removeEventListener("keydown", oe), o;
  }, F = function(D) {
    var $ = s.mostRecentlyFocusedNode;
    if ($) {
      var X = D.some(function(ee) {
        var ue = Array.from(ee.removedNodes);
        return ue.some(function(le) {
          return le === $ || typeof le.contains == "function" && le.contains($);
        });
      });
      if (X && s.containers.some(function(ee) {
        return ee?.isConnected;
      })) {
        T();
        var ae = _();
        O(ae);
      }
    }
  }, fe = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(F) : void 0, Z = function() {
    fe && (fe.disconnect(), s.active && !s.paused && s.containers.map(function(D) {
      fe.observe(D, {
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
      var $ = l(D, "onActivate"), X = l(D, "onPostActivate"), ae = l(D, "checkCanFocusTrap"), ee = li.getActiveTrap(a), ue = !1;
      if (ee && !ee.paused) {
        var le;
        (le = ee._setSubtreeIsolation) === null || le === void 0 || le.call(ee, !1), ue = !0;
      }
      try {
        ae || T(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), $?.({
          trap: o
        });
        var Se = function() {
          ae && T();
          var Ee = function() {
            o._setSubtreeIsolation(!0), Z(), X?.({
              trap: o
            });
          }, it = ne();
          it ? it.then(Ee) : Ee();
        };
        if (ae)
          return ae(s.containers.concat()).then(Se, Se), this;
        Se();
      } catch (Xe) {
        if (ee === li.getActiveTrap(a) && ue) {
          var be;
          (be = ee._setSubtreeIsolation) === null || be === void 0 || be.call(ee, !0);
        }
        throw Xe;
      }
      return this;
    },
    deactivate: function(D) {
      if (!s.active)
        return this;
      var $ = Pd({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, D);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), B(), s.active = !1, s.paused = !1, Z(), li.deactivateTrap(a, o);
      var X = l($, "onDeactivate"), ae = l($, "onPostDeactivate"), ee = l($, "checkCanReturnFocus"), ue = l($, "delayReturnFocus"), le = l($, "returnFocus", "returnFocusOnDeactivate");
      X?.({
        trap: o
      });
      var Se = function() {
        le && O(A(s.nodeFocusedBeforeActivation)), ae?.({
          trap: o
        });
      }, be = function() {
        ue && le ? Dd(Se) : Se();
      };
      return le && ee ? (ee(A(s.nodeFocusedBeforeActivation)).then(be, be), this) : (be(), this);
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
      }), r.isolateSubtrees && pe(s.containers), s.active && (T(), s.paused || o._setSubtreeIsolation(!0)), Z(), this;
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
          var X = l($, "onPause"), ae = l($, "onPostPause");
          X?.({
            trap: o
          }), B(), o._setSubtreeIsolation(!1), Z(), ae?.({
            trap: o
          });
        } else {
          var ee = l($, "onUnpause"), ue = l($, "onPostUnpause");
          ee?.({
            trap: o
          });
          var le = function() {
            T();
            var be = function() {
              o._setSubtreeIsolation(!0), Z(), ue?.({
                trap: o
              });
            }, Xe = ne();
            Xe ? Xe.then(be) : be();
          };
          le();
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
const tp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), h_ = /* @__PURE__ */ Nt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [tp]: {
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
function p_(e, t, n, i, a, r) {
  return b(), S("ul", {
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
      style: dn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Le(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const np = /* @__PURE__ */ Ke(h_, [["render", p_], ["__scopeId", "data-v-3e73e246"]]);
function Xr() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function v_() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...Xr()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === Xr().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const ip = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), ap = /* @__PURE__ */ Symbol.for("NcContent:selector");
Bi(Qb);
const g_ = { class: "app-navigation-toggle-wrapper" }, m_ = /* @__PURE__ */ Nt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = ah(e, "open"), n = Y(() => t.value ? _t("Close navigation") : _t("Open navigation"));
    return (i, a) => (b(), S("div", g_, [
      me(g(Wn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Ae(() => [
          me(il, {
            path: g(Gb),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), b_ = /* @__PURE__ */ Ke(m_, [["__scopeId", "data-v-e8177cc7"]]), y_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], __ = { class: "app-navigation__search" }, w_ = /* @__PURE__ */ Nt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Mt(
      ip,
      () => Xg(),
      !1
    ), a = ng("appNavigationContainer"), r = ls(), s = /* @__PURE__ */ at(!r.value), o = Y(() => r.value && s.value);
    Wv(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), Yt(r, () => {
      s.value = !r.value;
    }), Yt(o, () => {
      u();
    }), Ui(() => {
      i(!0), Fh("toggle-navigation", d), fi("navigation-toggled", {
        open: s.value
      }), n = Jc(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Xr(),
        escapeDeactivates: !1
      }), u();
    }), rs(() => {
      i(!1), Ib("toggle-navigation", d), n.deactivate();
    });
    function l(_) {
      if (s.value === _) {
        fi("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = _ === void 0 ? !s.value : _;
      const T = getComputedStyle(document.body), O = parseInt(T.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        fi("navigation-toggled", {
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
    return (_, T) => (b(), S("div", {
      ref: "appNavigationContainer",
      class: we(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": g(Hi)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: Wt(h, ["esc"])
      }, [
        c("div", __, [
          Le(_.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: we(["app-navigation__body", { "app-navigation__body--no-list": !_.$slots.list }])
        }, [
          Le(_.$slots, "default", {}, void 0, !0)
        ], 2),
        _.$slots.list ? (b(), $e(np, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Ae(() => [
            Le(_.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : j("", !0),
        Le(_.$slots, "footer", {}, void 0, !0)
      ], 40, y_),
      me(b_, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), C_ = /* @__PURE__ */ Ke(w_, [["__scopeId", "data-v-37908cd4"]]), S_ = {
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
}, E_ = ["aria-hidden", "aria-label"], T_ = ["fill", "width", "height"], A_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, k_ = { key: 0 };
function O_(e, t, n, i, a, r) {
  return b(), S("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), S("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", A_, [
        n.title ? (b(), S("title", k_, p(n.title), 1)) : j("", !0)
      ])
    ], 8, T_))
  ], 16, E_);
}
const N_ = /* @__PURE__ */ Ke(S_, [["render", O_]]), x_ = {
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
}, L_ = ["aria-hidden", "aria-label"], R_ = ["fill", "width", "height"], I_ = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, P_ = { key: 0 };
function D_(e, t, n, i, a, r) {
  return b(), S("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), S("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", I_, [
        n.title ? (b(), S("title", P_, p(n.title), 1)) : j("", !0)
      ])
    ], 8, R_))
  ], 16, L_);
}
const M_ = /* @__PURE__ */ Ke(x_, [["render", D_]]), $_ = {
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
}, F_ = ["aria-hidden", "aria-label"], z_ = ["fill", "width", "height"], U_ = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, B_ = { key: 0 };
function H_(e, t, n, i, a, r) {
  return b(), S("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), S("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", U_, [
        n.title ? (b(), S("title", B_, p(n.title), 1)) : j("", !0)
      ])
    ], 8, z_))
  ], 16, F_);
}
const rp = /* @__PURE__ */ Ke($_, [["render", H_]]), j_ = {
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
}, V_ = ["aria-hidden", "aria-label"], G_ = ["fill", "width", "height"], K_ = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, W_ = { key: 0 };
function q_(e, t, n, i, a, r) {
  return b(), S("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), S("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", K_, [
        n.title ? (b(), S("title", W_, p(n.title), 1)) : j("", !0)
      ])
    ], 8, G_))
  ], 16, V_);
}
const sp = /* @__PURE__ */ Ke(j_, [["render", q_]]);
Bi(Zb);
const Y_ = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: rp,
    IconClose: sp,
    NcButton: Wn
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
    return { isLegacy34: Hi };
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
}, X_ = ["placeholder"];
function Z_(e, t, n, i, a, r) {
  const s = ze("IconArrowRight"), o = ze("NcButton"), l = ze("IconClose");
  return b(), S("div", {
    class: we(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = Ye((...d) => r.confirm && r.confirm(...d), ["prevent"])),
      onKeydown: t[2] || (t[2] = Wt(Ye((...d) => r.cancel && r.cancel(...d), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Ye(() => {
      }, ["stop", "prevent"]))
    }, [
      je(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (d) => r.valueModel = d),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, X_), [
        [ni, r.valueModel]
      ]),
      me(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Ye(r.confirm, ["stop", "prevent"])
      }, {
        icon: Ae(() => [
          me(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      me(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Ye(r.cancel, ["stop", "prevent"])
      }, {
        icon: Ae(() => [
          me(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const J_ = /* @__PURE__ */ Ke(Y_, [["render", Z_], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function al() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Qc = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), op = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), Q_ = {
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
}, lp = {
  mixins: [Q_],
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
      from: op
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
}, e1 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: il
  },
  mixins: [lp],
  inject: {
    isInSemanticMenu: {
      from: Qc,
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
      mdiCheck: jb,
      mdiChevronRight: Vb
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
}, t1 = ["role"], n1 = ["aria-label", "disabled", "title", "type"], i1 = { class: "action-button__longtext-wrapper" }, a1 = {
  key: 0,
  class: "action-button__name"
}, r1 = ["textContent"], s1 = {
  key: 2,
  class: "action-button__text"
}, o1 = ["textContent"], l1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function c1(e, t, n, i, a, r) {
  const s = ze("NcIconSvgWrapper");
  return b(), S("li", {
    class: we(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", Ut({
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
          style: dn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", i1, [
        e.name ? (b(), S("strong", a1, p(e.name), 1)) : j("", !0),
        e.isLongText ? (b(), S("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, r1)) : (b(), S("span", s1, p(e.text), 1)),
        n.description ? (b(), S("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, o1)) : j("", !0)
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
      }, null, 8, ["path"])) : r.isChecked === !1 ? (b(), S("span", l1)) : j("", !0),
      j("", !0)
    ], 16, n1)
  ], 10, t1);
}
const u1 = /* @__PURE__ */ Ke(e1, [["render", c1], ["__scopeId", "data-v-6c2daf4e"]]);
function d1(e, t = {}) {
  const n = v_();
  Yt(e, () => {
    ui(t.disabled) || (ui(e) ? n.pause() : n.unpause());
  }), rs(() => {
    n.unpause();
  });
}
const f1 = ["top", "right", "bottom", "left"], Md = ["start", "end"], $d = /* @__PURE__ */ f1.reduce((e, t) => e.concat(t, t + "-" + Md[0], t + "-" + Md[1]), []), Zr = Math.min, gc = Math.max, h1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function cp(e, t, n) {
  return gc(e, Zr(t, n));
}
function _a(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gi(e) {
  return e.split("-")[0];
}
function Ln(e) {
  return e.split("-")[1];
}
function up(e) {
  return e === "x" ? "y" : "x";
}
function eu(e) {
  return e === "y" ? "height" : "width";
}
function ci(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function tu(e) {
  return up(ci(e));
}
function dp(e, t, n) {
  n === void 0 && (n = !1);
  const i = Ln(e), a = tu(e), r = eu(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = lo(s)), [s, lo(s)];
}
function p1(e) {
  const t = lo(e);
  return [oo(e), t, oo(t)];
}
function oo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Fd = ["left", "right"], zd = ["right", "left"], v1 = ["top", "bottom"], g1 = ["bottom", "top"];
function m1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? zd : Fd : t ? Fd : zd;
    case "left":
    case "right":
      return t ? v1 : g1;
    default:
      return [];
  }
}
function b1(e, t, n, i) {
  const a = Ln(e);
  let r = m1(gi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(oo)))), r;
}
function lo(e) {
  const t = gi(e);
  return h1[t] + e.slice(t.length);
}
function y1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function fp(e) {
  return typeof e != "number" ? y1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Nr(e) {
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
function Ud(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ci(t), s = tu(t), o = eu(s), l = gi(t), d = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, _ = i[o] / 2 - a[o] / 2;
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
async function _1(e, t) {
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
  } = _a(t, e), O = fp(T), x = o[_ ? h === "floating" ? "reference" : "floating" : h], P = Nr(await r.getClippingRect({
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
  }, oe = Nr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const w1 = 50, C1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: _1
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let d = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = Ud(d, i, l), _ = i, T = 0;
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
    }, de && T < w1 && (T++, typeof de == "object" && (de.placement && (_ = de.placement), de.rects && (d = de.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : de.rects), {
      x: u,
      y: h
    } = Ud(d, _, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: _,
    strategy: a,
    middlewareData: O
  };
}, S1 = (e) => ({
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
    } = _a(e, t) || {};
    if (d == null)
      return {};
    const h = fp(u), _ = {
      x: n,
      y: i
    }, T = tu(a), O = eu(T), A = await s.getDimensions(d), x = T === "y", P = x ? "top" : "left", I = x ? "bottom" : "right", K = x ? "clientHeight" : "clientWidth", M = r.reference[O] + r.reference[T] - _[T] - r.floating[O], oe = _[T] - r.reference[T], de = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(d));
    let ne = de ? de[K] : 0;
    (!ne || !await (s.isElement == null ? void 0 : s.isElement(de))) && (ne = o.floating[K] || r.floating[O]);
    const pe = M / 2 - oe / 2, B = ne / 2 - A[O] / 2 - 1, F = Zr(h[P], B), fe = Zr(h[I], B), Z = ne - A[O] - fe, ie = ne / 2 - A[O] / 2 + pe, D = cp(F, ie, Z), $ = !l.arrow && Ln(a) != null && ie !== D && r.reference[O] / 2 - (ie < F ? F : fe) - A[O] / 2 < 0, X = $ ? ie < F ? ie - F : ie - Z : 0;
    return {
      [T]: _[T] + X,
      data: {
        [T]: D,
        centerOffset: ie - D - X,
        ...$ && {
          alignmentOffset: X
        }
      },
      reset: $
    };
  }
});
function E1(e, t, n) {
  return (e ? [...n.filter((a) => Ln(a) === e), ...n.filter((a) => Ln(a) !== e)] : n.filter((a) => gi(a) === a)).filter((a) => e ? Ln(a) === e || (t ? oo(a) !== a : !1) : !0);
}
const T1 = function(e) {
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
        allowedPlacements: _ = $d,
        autoAlignment: T = !0,
        ...O
      } = _a(e, t), A = h !== void 0 || _ === $d ? E1(h || null, T, _) : _, x = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, P = A[x];
      if (P == null)
        return {};
      if (o !== P)
        return {
          reset: {
            placement: A[0]
          }
        };
      const I = await l.detectOverflow(t, O), K = dp(P, r, await (l.isRTL == null ? void 0 : l.isRTL(d.floating))), M = [I[gi(P)], I[K[0]], I[K[1]]], oe = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
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
      const ne = oe.map((F) => {
        const fe = Ln(F.placement);
        return [F.placement, fe && u ? (
          // Check along the mainAxis and main crossAxis side.
          F.overflows.slice(0, 2).reduce((Z, ie) => Z + ie, 0)
        ) : (
          // Check only the mainAxis.
          F.overflows[0]
        ), F.overflows];
      }).sort((F, fe) => F[1] - fe[1]), B = ((a = ne.filter((F) => F[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Ln(F[0]) ? 2 : 3
      ).every((fe) => fe <= 0))[0]) == null ? void 0 : a[0]) || ne[0][0];
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
}, A1 = function(e) {
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
      } = _a(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const P = gi(a), I = ci(o), K = gi(o) === o, M = await (l.isRTL == null ? void 0 : l.isRTL(d.floating)), oe = _ || (K || !A ? [lo(o)] : p1(o)), de = O !== "none";
      !_ && de && oe.push(...b1(o, A, O, M));
      const ne = [o, ...oe], pe = await l.detectOverflow(t, x), B = [];
      let F = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && B.push(pe[P]), h) {
        const D = dp(a, s, M);
        B.push(pe[D[0]], pe[D[1]]);
      }
      if (F = [...F, {
        placement: a,
        overflows: B
      }], !B.every((D) => D <= 0)) {
        var fe, Z;
        const D = (((fe = r.flip) == null ? void 0 : fe.index) || 0) + 1, $ = ne[D];
        if ($ && (!(h === "alignment" ? I !== ci($) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        F.every((ee) => ci(ee.placement) === I ? ee.overflows[0] > 0 : !0)))
          return {
            data: {
              index: D,
              overflows: F
            },
            reset: {
              placement: $
            }
          };
        let X = (Z = F.filter((ae) => ae.overflows[0] <= 0).sort((ae, ee) => ae.overflows[1] - ee.overflows[1])[0]) == null ? void 0 : Z.placement;
        if (!X)
          switch (T) {
            case "bestFit": {
              var ie;
              const ae = (ie = F.filter((ee) => {
                if (de) {
                  const ue = ci(ee.placement);
                  return ue === I || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ue === "y";
                }
                return !0;
              }).map((ee) => [ee.placement, ee.overflows.filter((ue) => ue > 0).reduce((ue, le) => ue + le, 0)]).sort((ee, ue) => ee[1] - ue[1])[0]) == null ? void 0 : ie[0];
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
}, k1 = /* @__PURE__ */ new Set(["left", "top"]);
async function O1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = gi(n), o = Ln(n), l = ci(n) === "y", d = k1.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = _a(t, e);
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
const N1 = function(e) {
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
      } = t, l = await O1(t, e);
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
}, x1 = function(e) {
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
      } = _a(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, d), _ = ci(a), T = up(_);
      let O = u[T], A = u[_];
      const x = (I, K) => cp(K + h[I === "y" ? "top" : "left"], K, K - h[I === "y" ? "bottom" : "right"]);
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
}, L1 = function(e) {
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
      } = _a(e, t), l = await a.detectOverflow(t, o), d = gi(n), u = Ln(n), h = ci(n) === "y", {
        width: _,
        height: T
      } = i.floating;
      let O, A;
      d === "top" || d === "bottom" ? (O = d, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = d, O = u === "end" ? "top" : "bottom");
      const x = T - l.top - l.bottom, P = _ - l.left - l.right, I = Zr(T - l[O], x), K = Zr(_ - l[A], P), M = t.middlewareData.shift, oe = !M;
      let de = I, ne = K;
      M != null && M.enabled.x && (ne = P), M != null && M.enabled.y && (de = x), oe && !u && (h ? ne = _ - 2 * gc(l.left, l.right) : de = T - 2 * gc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: ne,
        availableHeight: de
      });
      const pe = await a.getDimensions(r.floating);
      return _ !== pe.width || T !== pe.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Cn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qn(e) {
  return Cn(e).getComputedStyle(e);
}
const Bd = Math.min, xr = Math.max, co = Math.round;
function hp(e) {
  const t = qn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = co(n) !== a || co(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function zi(e) {
  return vp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Os;
function pp() {
  if (Os) return Os;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Os = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Os) : navigator.userAgent;
}
function Yn(e) {
  return e instanceof Cn(e).HTMLElement;
}
function Pi(e) {
  return e instanceof Cn(e).Element;
}
function vp(e) {
  return e instanceof Cn(e).Node;
}
function Hd(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Cn(e).ShadowRoot || e instanceof ShadowRoot;
}
function rl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = qn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function R1(e) {
  return ["table", "td", "th"].includes(zi(e));
}
function mc(e) {
  const t = /firefox/i.test(pp()), n = qn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function gp() {
  return !/^((?!chrome|android).)*safari/i.test(pp());
}
function nu(e) {
  return ["html", "body", "#document"].includes(zi(e));
}
function mp(e) {
  return Pi(e) ? e : e.contextElement;
}
const bp = { x: 1, y: 1 };
function Wa(e) {
  const t = mp(e);
  if (!Yn(t)) return bp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = hp(t);
  let s = (r ? co(n.width) : n.width) / i, o = (r ? co(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function Jr(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = mp(e);
  let l = bp;
  t && (i ? Pi(i) && (l = Wa(i)) : l = Wa(e));
  const d = o ? Cn(o) : window, u = !gp() && n;
  let h = (s.left + (u && ((a = d.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, _ = (s.top + (u && ((r = d.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, T = s.width / l.x, O = s.height / l.y;
  if (o) {
    const A = Cn(o), x = i && Pi(i) ? Cn(i) : i;
    let P = A.frameElement;
    for (; P && i && x !== A; ) {
      const I = Wa(P), K = P.getBoundingClientRect(), M = getComputedStyle(P);
      K.x += (P.clientLeft + parseFloat(M.paddingLeft)) * I.x, K.y += (P.clientTop + parseFloat(M.paddingTop)) * I.y, h *= I.x, _ *= I.y, T *= I.x, O *= I.y, h += K.x, _ += K.y, P = Cn(P).frameElement;
    }
  }
  return { width: T, height: O, top: _, right: h + T, bottom: _ + O, left: h, x: h, y: _ };
}
function Di(e) {
  return ((vp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function sl(e) {
  return Pi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function yp(e) {
  return Jr(Di(e)).left + sl(e).scrollLeft;
}
function Qr(e) {
  if (zi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || Hd(e) && e.host || Di(e);
  return Hd(t) ? t.host : t;
}
function _p(e) {
  const t = Qr(e);
  return nu(t) ? t.ownerDocument.body : Yn(t) && rl(t) ? t : _p(t);
}
function uo(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = _p(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Cn(i);
  return a ? t.concat(r, r.visualViewport || [], rl(i) ? i : []) : t.concat(i, uo(i));
}
function jd(e, t, n) {
  return t === "viewport" ? Nr((function(i, a) {
    const r = Cn(i), s = Di(i), o = r.visualViewport;
    let l = s.clientWidth, d = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, d = o.height;
      const _ = gp();
      (_ || !_ && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: d, x: u, y: h };
  })(e, n)) : Pi(t) ? Nr((function(i, a) {
    const r = Jr(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Yn(i) ? Wa(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Nr((function(i) {
    const a = Di(i), r = sl(i), s = i.ownerDocument.body, o = xr(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = xr(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -r.scrollLeft + yp(i);
    const u = -r.scrollTop;
    return qn(s).direction === "rtl" && (d += xr(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: d, y: u };
  })(Di(e)));
}
function Vd(e) {
  return Yn(e) && qn(e).position !== "fixed" ? e.offsetParent : null;
}
function Gd(e) {
  const t = Cn(e);
  let n = Vd(e);
  for (; n && R1(n) && qn(n).position === "static"; ) n = Vd(n);
  return n && (zi(n) === "html" || zi(n) === "body" && qn(n).position === "static" && !mc(n)) ? t : n || (function(i) {
    let a = Qr(i);
    for (; Yn(a) && !nu(a); ) {
      if (mc(a)) return a;
      a = Qr(a);
    }
    return null;
  })(e) || t;
}
function I1(e, t, n) {
  const i = Yn(t), a = Di(t), r = Jr(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((zi(t) !== "body" || rl(a)) && (s = sl(t)), Yn(t)) {
    const l = Jr(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = yp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const P1 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(d, u) {
    const h = u.get(d);
    if (h) return h;
    let _ = uo(d).filter(((x) => Pi(x) && zi(x) !== "body")), T = null;
    const O = qn(d).position === "fixed";
    let A = O ? Qr(d) : d;
    for (; Pi(A) && !nu(A); ) {
      const x = qn(A), P = mc(A);
      (O ? P || T : P || x.position !== "static" || !T || !["absolute", "fixed"].includes(T.position)) ? T = x : _ = _.filter(((I) => I !== A)), A = Qr(A);
    }
    return u.set(d, _), _;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((d, u) => {
    const h = jd(t, u, a);
    return d.top = xr(h.top, d.top), d.right = Bd(h.right, d.right), d.bottom = Bd(h.bottom, d.bottom), d.left = xr(h.left, d.left), d;
  }), jd(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Yn(n), r = Di(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((zi(n) !== "body" || rl(r)) && (s = sl(n)), Yn(n))) {
    const d = Jr(n);
    o = Wa(n), l.x = d.x + n.clientLeft, l.y = d.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Pi, getDimensions: function(e) {
  return Yn(e) ? hp(e) : e.getBoundingClientRect();
}, getOffsetParent: Gd, getDocumentElement: Di, getScale: Wa, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Gd, r = this.getDimensions;
  return { reference: I1(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => qn(e).direction === "rtl" }, D1 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: P1, ...n }, r = { ...a.platform, _c: i };
  return C1(e, t, { ...a, platform: r });
}, Mi = {
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
function bc(e, t) {
  let n = Mi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Mi.themes[n.$extend] || {} : (n = null, i = Mi[t]) : n = null;
  while (n);
  return i;
}
function M1(e) {
  const t = [e];
  let n = Mi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Mi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function Kd(e) {
  const t = [e];
  let n = Mi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Mi.themes[n.$extend] || {}) : n = null;
  while (n);
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
let wp = !1;
typeof window < "u" && typeof navigator < "u" && (wp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const $1 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Wd = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, qd = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Yd(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function jl() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Nn = [];
let aa = null;
const Xd = {};
function Zd(e) {
  let t = Xd[e];
  return t || (t = Xd[e] = []), t;
}
let yc = function() {
};
typeof window < "u" && (yc = window.Element);
function Fe(e) {
  return function(t) {
    return bc(t.theme, e);
  };
}
const Vl = "__floating-vue__popper", Cp = () => /* @__PURE__ */ Nt({
  name: "VPopper",
  provide() {
    return {
      [Vl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Vl]: { default: null }
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
      validator: (e) => $1.includes(e)
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
      type: [String, Object, yc, Boolean],
      default: Fe("container")
    },
    boundary: {
      type: [String, yc],
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
      return (e = this[Vl]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(N1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(T1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(x1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(A1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(S1({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(L1({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await D1(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), aa && this.instantMove && aa.instantMove && aa !== this.parentPopper) {
        aa.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (aa = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await jl(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...uo(this.$_referenceNode),
        ...uo(this.$_popperNode)
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
      for (const t of Kd(this.theme))
        Zd(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await jl(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Yd(Nn, this), Nn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Kd(this.theme)) {
        const i = Zd(n);
        Yd(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      aa === this && (aa = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await jl(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Wd, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Wd, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, qd, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], qd, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, es ? {
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
      if (Lr >= e.left && Lr <= e.right && Rr >= e.top && Rr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Lr - Ni, i = Rr - xi, a = t.left + t.width / 2 - Ni + (t.top + t.height / 2) - xi + t.width + t.height, r = Ni + n * a, s = xi + i * a;
        return Ns(Ni, xi, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Ns(Ni, xi, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Ns(Ni, xi, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Ns(Ni, xi, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (wp) {
    const e = es ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Jd(t), e), document.addEventListener("touchend", (t) => Qd(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Jd(e), !0), window.addEventListener("click", (e) => Qd(e, !1), !0);
  window.addEventListener("resize", U1);
}
function Jd(e, t) {
  for (let n = 0; n < Nn.length; n++) {
    const i = Nn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Qd(e, t) {
  F1(e, t);
}
function F1(e, t) {
  const n = {};
  for (let i = Nn.length - 1; i >= 0; i--) {
    const a = Nn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && ef(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && ef(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function ef(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || z1(e, n) && !t;
}
function z1(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function U1() {
  for (let e = 0; e < Nn.length; e++)
    Nn[e].$_computePosition();
}
let Ni = 0, xi = 0, Lr = 0, Rr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ni = Lr, xi = Rr, Lr = e.clientX, Rr = e.clientY;
}, es ? {
  passive: !0
} : void 0);
function Ns(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), d = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && d >= 0 && d <= 1;
}
const B1 = {
  extends: Cp()
}, iu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function H1(e, t, n, i, a, r) {
  return b(), S("div", {
    ref: "reference",
    class: we(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Le(e.$slots, "default", Fs(Kr(e.slotData)))
  ], 2);
}
const j1 = /* @__PURE__ */ iu(B1, [["render", H1]]);
function V1() {
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
let Ms;
function _c() {
  _c.init || (_c.init = !0, Ms = V1() !== -1);
}
var ol = {
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
    _c(), Kn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ms && this.$el.appendChild(e), e.data = "about:blank", Ms || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Ms && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const G1 = /* @__PURE__ */ Vv();
Hv("data-v-b329ee4c");
const K1 = {
  class: "resize-observer",
  tabindex: "-1"
};
jv();
const W1 = /* @__PURE__ */ G1((e, t, n, i, a, r) => (b(), $e("div", K1)));
ol.render = W1;
ol.__scopeId = "data-v-b329ee4c";
ol.__file = "src/components/ResizeObserver.vue";
const Sp = (e = "theme") => ({
  computed: {
    themeClass() {
      return M1(this[e]);
    }
  }
}), q1 = /* @__PURE__ */ Nt({
  name: "VPopperContent",
  components: {
    ResizeObserver: ol
  },
  mixins: [
    Sp()
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
}), Y1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], X1 = {
  ref: "inner",
  class: "v-popper__inner"
}, Z1 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), J1 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), Q1 = [
  Z1,
  J1
];
function e0(e, t, n, i, a, r) {
  const s = ze("ResizeObserver");
  return b(), S("div", {
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
    style: dn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Wt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    c("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (o) => e.autoHide && e.$emit("hide"))
    }),
    c("div", {
      class: "v-popper__wrapper",
      style: dn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", X1, [
        e.mounted ? (b(), S(ce, { key: 0 }, [
          c("div", null, [
            Le(e.$slots, "default")
          ]),
          e.handleResize ? (b(), $e(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : j("", !0)
        ], 64)) : j("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: dn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Q1, 4)
    ], 4)
  ], 46, Y1);
}
const Ep = /* @__PURE__ */ iu(q1, [["render", e0]]), Tp = {
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
let wc = function() {
};
typeof window < "u" && (wc = window.Element);
const t0 = /* @__PURE__ */ Nt({
  name: "VPopperWrapper",
  components: {
    Popper: j1,
    PopperContent: Ep
  },
  mixins: [
    Tp,
    Sp("finalTheme")
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
      type: [String, Object, wc, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, wc],
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
function n0(e, t, n, i, a, r) {
  const s = ze("PopperContent"), o = ze("Popper");
  return b(), $e(o, Ut({ ref: "popper" }, e.$props, {
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
    default: Ae(({
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
      me(s, {
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
        default: Ae(() => [
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
const au = /* @__PURE__ */ iu(t0, [["render", n0]]), i0 = {
  ...au,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...au
});
({
  ...au
});
Cp();
const tf = Mi, a0 = i0, r0 = /* @__PURE__ */ Nt({
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
}), s0 = "_ncPopover_qgtYg", o0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: s0
}, Ap = "nc-popover-9";
tf.themes[Ap] = structuredClone(tf.themes.dropdown);
const l0 = {
  name: "NcPopover",
  components: {
    Dropdown: a0,
    NcPopoverTriggerProvider: r0
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
      theme: Ap
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
      return this.placement === "start" ? hc ? "right" : "left" : this.placement === "end" ? hc ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Jc(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: Xr(),
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
        ga.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function c0(e, t, n, i, a, r) {
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
    popper: Ae((l) => [
      Le(e.$slots, "default", Fs(Kr(l)))
    ]),
    default: Ae(() => [
      me(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Ae((l) => [
          Le(e.$slots, "trigger", Fs(Kr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const u0 = {
  $style: o0
}, nf = /* @__PURE__ */ Ke(l0, [["render", c0], ["__cssModules", u0]]), d0 = {
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
}, f0 = ["aria-hidden", "aria-label"], h0 = ["fill", "width", "height"], p0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, v0 = { key: 0 };
function g0(e, t, n, i, a, r) {
  return b(), S("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), S("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", p0, [
        n.title ? (b(), S("title", v0, p(n.title), 1)) : j("", !0)
      ])
    ], 8, h0))
  ], 16, f0);
}
const m0 = /* @__PURE__ */ Ke(d0, [["render", g0]]);
Bi(Xb);
function ru(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === kt)
        return !1;
      if (n.type === ce && !ru(n.children))
        return !1;
      if (n.type === ss && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const b0 = ".focusable", y0 = {
  name: "NcActions",
  components: {
    NcButton: Wn,
    NcPopover: nf
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
      [Qc]: Y(() => this.actionsMenuSemanticType === "menu"),
      [op]: this.closeMenu
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
      randomId: al()
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
    d1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(b0);
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
        A.type === ce && t(A.children, O);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((T) => !i.includes(T)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((T) => s.includes(this.getActionName(T))), d = a.some((T) => r.includes(this.getActionName(T))), u = a.some((T) => o.includes(this.getActionName(T)));
    l ? this.actionsMenuSemanticType = "dialog" : d ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((O) => this.getActionName(O).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (T) => {
      const O = T?.props?.icon, A = T?.children?.icon?.()?.[0] ?? (this.isIconUrl(O) ? Jt("img", { class: "action-item__menutoggle__icon", src: O, alt: "" }) : Jt("span", { class: ["icon", O] })), x = T?.children?.default?.()?.[0]?.children?.trim(), P = this.forceName ? x : "";
      let I = T?.props?.title;
      this.forceName || I || (I = x);
      const K = { ...T?.props ?? {} }, M = ["submit", "reset"].includes(K.type) ? K.modelValue : "button";
      return delete K.modelValue, delete K.type, Jt(
        Wn,
        Ut(
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
      const O = ru(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Jt("span", { class: ["icon", this.defaultIcon] }) : Jt(m0, { size: 20 }), A = `${this.randomId}-trigger`;
      return Jt(
        nf,
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
          trigger: () => Jt(Wn, {
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
          default: () => Jt("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            Jt("ul", {
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
    }), i.length > 0 && this.inline > 0 ? Jt(
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
        a.length > 0 ? Jt(
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
    ) : Jt(
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
}, fo = /* @__PURE__ */ Ke(y0, [["__scopeId", "data-v-7206c1f1"]]), _0 = ["aria-label"], w0 = ["width", "height"], C0 = ["fill"], S0 = ["fill"], E0 = { key: 0 }, T0 = /* @__PURE__ */ Nt({
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
    return (i, a) => (b(), S("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (b(), S("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, C0),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (b(), S("title", E0, p(e.name), 1)) : j("", !0)
        ], 8, S0)
      ], 8, w0))
    ], 8, _0));
  }
}), kp = /* @__PURE__ */ Ke(T0, [["__scopeId", "data-v-cf399190"]]), Cc = /* @__PURE__ */ Nt({
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
}), A0 = {
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
}, k0 = ["aria-hidden", "aria-label"], O0 = ["fill", "width", "height"], N0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, x0 = { key: 0 };
function L0(e, t, n, i, a, r) {
  return b(), S("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), S("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", N0, [
        n.title ? (b(), S("title", x0, p(n.title), 1)) : j("", !0)
      ])
    ], 8, O0))
  ], 16, k0);
}
const R0 = /* @__PURE__ */ Ke(A0, [["render", L0]]), I0 = {
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
}, P0 = ["aria-hidden", "aria-label"], D0 = ["fill", "width", "height"], M0 = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, $0 = { key: 0 };
function F0(e, t, n, i, a, r) {
  return b(), S("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), S("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", M0, [
        n.title ? (b(), S("title", $0, p(n.title), 1)) : j("", !0)
      ])
    ], 8, D0))
  ], 16, P0);
}
const z0 = /* @__PURE__ */ Ke(I0, [["render", F0]]);
Bi(ey);
const U0 = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Wn,
    ChevronDown: N_,
    ChevronUp: M_
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
    return { isLegacy34: Hi };
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
function B0(e, t, n, i, a, r) {
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
    icon: Ae(() => [
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
const H0 = /* @__PURE__ */ Ke(U0, [["render", B0], ["__scopeId", "data-v-cfbd3794"]]);
Bi(ty, ay);
const j0 = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: fo,
    NcActionButton: u1,
    NcAppNavigationIconCollapsible: H0,
    NcInputConfirmCancel: J_,
    NcLoadingIcon: kp,
    NcVNodes: Cc,
    Pencil: R0,
    Undo: z0
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: tp, default: null }
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
      default: () => al(),
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
      isMobile: ls(),
      isLegacy34: Hi
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && fi("toggle-navigation", { open: !1 }));
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
}, V0 = ["id"], G0 = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], K0 = {
  key: 0,
  class: "editingContainer"
}, W0 = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, q0 = { class: "app-navigation-entry__deleted-description" }, Y0 = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, X0 = {
  key: 0,
  class: "app-navigation-entry__children"
};
function Z0(e, t, n, i, a, r) {
  const s = ze("NcLoadingIcon"), o = ze("NcInputConfirmCancel"), l = ze("Pencil"), d = ze("NcActionButton"), u = ze("Undo"), h = ze("NcActions"), _ = ze("NcAppNavigationIconCollapsible");
  return b(), S("li", {
    id: n.id,
    class: we([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (b(), $e(Hc(r.isRouterLink ? "router-link" : "NcVNodes"), Fs(Kr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Ae(({ href: T, navigate: O, isActive: A }) => [
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
          n.undo ? j("", !0) : (b(), S("a", {
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
            onKeydown: t[3] || (t[3] = Wt(Ye((...x) => r.handleTab && r.handleTab(...x), ["exact"]), ["tab"]))
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
            a.editingActive ? (b(), S("div", K0, [
              me(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (x) => a.editingValue = x),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : j("", !0)
          ], 40, G0)),
          n.undo ? (b(), S("div", W0, [
            c("div", q0, p(n.name), 1)
          ])) : j("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (b(), S("div", {
            key: 2,
            class: we(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (b(), S("div", Y0, [
              Le(e.$slots, "counter", {}, void 0, !0)
            ])) : j("", !0),
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
              icon: Ae(() => [
                Le(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Ae(() => [
                n.editable && !a.editingActive ? (b(), $e(d, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Ae(() => [
                    me(l, { size: 20 })
                  ]),
                  default: Ae(() => [
                    ke(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                n.undo ? (b(), $e(d, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Ae(() => [
                    me(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                Le(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : j("", !0)
          ], 2)) : j("", !0),
          n.allowCollapse && e.$slots.default ? (b(), $e(_, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: Ye(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : j("", !0),
          Le(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (b(), S("ul", X0, [
      Le(e.$slots, "default", {}, void 0, !0)
    ])) : j("", !0)
  ], 10, V0);
}
const af = /* @__PURE__ */ Ke(j0, [["render", Z0], ["__scopeId", "data-v-01bef41b"]]), Gl = /* @__PURE__ */ new WeakMap(), J0 = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Od(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Od(e, a, Object.assign({ capture: n }, r));
    }
    Gl.set(e, i);
  },
  unmounted(e) {
    const t = Gl.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Gl.delete(e);
  }
}, Q0 = {
  mounted(e) {
    e.focus();
  }
}, ew = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", tw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Sc = "numeric", Ec = "ascii", Tc = "alpha", Ir = "asciinumeric", Cr = "alphanumeric", Ac = "domain", Op = "emoji", nw = "scheme", iw = "slashscheme", Kl = "whitespace";
function aw(e, t) {
  return e in t || (t[e] = []), t[e];
}
function fa(e, t, n) {
  t[Sc] && (t[Ir] = !0, t[Cr] = !0), t[Ec] && (t[Ir] = !0, t[Tc] = !0), t[Ir] && (t[Cr] = !0), t[Tc] && (t[Cr] = !0), t[Cr] && (t[Ac] = !0), t[Op] && (t[Ac] = !0);
  for (const i in t) {
    const a = aw(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function rw(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function cn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
cn.groups = {};
cn.prototype = {
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
    i = i || cn.groups;
    let a;
    return t && t.j ? a = t : (a = new cn(t), n && i && fa(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || cn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new cn(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new cn(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(rw(s.t, i), n);
          fa(r, l, i);
        } else n && fa(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Ie = (e, t, n, i, a) => e.ta(t, n, i, a), ot = (e, t, n, i, a) => e.tr(t, n, i, a), rf = (e, t, n, i, a) => e.ts(t, n, i, a), te = (e, t, n, i, a) => e.tt(t, n, i, a), ii = "WORD", kc = "UWORD", Np = "ASCIINUMERICAL", xp = "ALPHANUMERICAL", ts = "LOCALHOST", Oc = "TLD", Nc = "UTLD", $s = "SCHEME", za = "SLASH_SCHEME", su = "NUM", xc = "WS", ou = "NL", Pr = "OPENBRACE", Dr = "CLOSEBRACE", ho = "OPENBRACKET", po = "CLOSEBRACKET", vo = "OPENPAREN", go = "CLOSEPAREN", mo = "OPENANGLEBRACKET", bo = "CLOSEANGLEBRACKET", yo = "FULLWIDTHLEFTPAREN", _o = "FULLWIDTHRIGHTPAREN", wo = "LEFTCORNERBRACKET", Co = "RIGHTCORNERBRACKET", So = "LEFTWHITECORNERBRACKET", Eo = "RIGHTWHITECORNERBRACKET", To = "FULLWIDTHLESSTHAN", Ao = "FULLWIDTHGREATERTHAN", ko = "AMPERSAND", Oo = "APOSTROPHE", No = "ASTERISK", Ri = "AT", xo = "BACKSLASH", Lo = "BACKTICK", Ro = "CARET", ha = "COLON", lu = "COMMA", Io = "DOLLAR", Hn = "DOT", Po = "EQUALS", cu = "EXCLAMATION", yn = "HYPHEN", Mr = "PERCENT", Do = "PIPE", Mo = "PLUS", $o = "POUND", $r = "QUERY", uu = "QUOTE", Lp = "FULLWIDTHMIDDLEDOT", du = "SEMI", jn = "SLASH", Fr = "TILDE", Fo = "UNDERSCORE", Rp = "EMOJI", zo = "SYM";
var Ip = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: xp,
  AMPERSAND: ko,
  APOSTROPHE: Oo,
  ASCIINUMERICAL: Np,
  ASTERISK: No,
  AT: Ri,
  BACKSLASH: xo,
  BACKTICK: Lo,
  CARET: Ro,
  CLOSEANGLEBRACKET: bo,
  CLOSEBRACE: Dr,
  CLOSEBRACKET: po,
  CLOSEPAREN: go,
  COLON: ha,
  COMMA: lu,
  DOLLAR: Io,
  DOT: Hn,
  EMOJI: Rp,
  EQUALS: Po,
  EXCLAMATION: cu,
  FULLWIDTHGREATERTHAN: Ao,
  FULLWIDTHLEFTPAREN: yo,
  FULLWIDTHLESSTHAN: To,
  FULLWIDTHMIDDLEDOT: Lp,
  FULLWIDTHRIGHTPAREN: _o,
  HYPHEN: yn,
  LEFTCORNERBRACKET: wo,
  LEFTWHITECORNERBRACKET: So,
  LOCALHOST: ts,
  NL: ou,
  NUM: su,
  OPENANGLEBRACKET: mo,
  OPENBRACE: Pr,
  OPENBRACKET: ho,
  OPENPAREN: vo,
  PERCENT: Mr,
  PIPE: Do,
  PLUS: Mo,
  POUND: $o,
  QUERY: $r,
  QUOTE: uu,
  RIGHTCORNERBRACKET: Co,
  RIGHTWHITECORNERBRACKET: Eo,
  SCHEME: $s,
  SEMI: du,
  SLASH: jn,
  SLASH_SCHEME: za,
  SYM: zo,
  TILDE: Fr,
  TLD: Oc,
  UNDERSCORE: Fo,
  UTLD: Nc,
  UWORD: kc,
  WORD: ii,
  WS: xc
});
const ei = /[a-z]/, gr = new RegExp("\\p{L}", "u"), Wl = new RegExp("\\p{Emoji}", "u"), ti = /\d/, ql = /\s/, sf = "\r", Yl = `
`, sw = "️", ow = "‍", Xl = "￼";
let xs = null, Ls = null;
function lw(e = []) {
  const t = {};
  cn.groups = t;
  const n = new cn();
  xs == null && (xs = of(ew)), Ls == null && (Ls = of(tw)), te(n, "'", Oo), te(n, "{", Pr), te(n, "}", Dr), te(n, "[", ho), te(n, "]", po), te(n, "(", vo), te(n, ")", go), te(n, "<", mo), te(n, ">", bo), te(n, "（", yo), te(n, "）", _o), te(n, "「", wo), te(n, "」", Co), te(n, "『", So), te(n, "』", Eo), te(n, "＜", To), te(n, "＞", Ao), te(n, "&", ko), te(n, "*", No), te(n, "@", Ri), te(n, "`", Lo), te(n, "^", Ro), te(n, ":", ha), te(n, ",", lu), te(n, "$", Io), te(n, ".", Hn), te(n, "=", Po), te(n, "!", cu), te(n, "-", yn), te(n, "%", Mr), te(n, "|", Do), te(n, "+", Mo), te(n, "#", $o), te(n, "?", $r), te(n, '"', uu), te(n, "/", jn), te(n, ";", du), te(n, "~", Fr), te(n, "_", Fo), te(n, "\\", xo), te(n, "・", Lp);
  const i = ot(n, ti, su, {
    [Sc]: !0
  });
  ot(i, ti, i);
  const a = ot(i, ei, Np, {
    [Ir]: !0
  }), r = ot(i, gr, xp, {
    [Cr]: !0
  }), s = ot(n, ei, ii, {
    [Ec]: !0
  });
  ot(s, ti, a), ot(s, ei, s), ot(a, ti, a), ot(a, ei, a);
  const o = ot(n, gr, kc, {
    [Tc]: !0
  });
  ot(o, ei), ot(o, ti, r), ot(o, gr, o), ot(r, ti, r), ot(r, ei), ot(r, gr, r);
  const l = te(n, Yl, ou, {
    [Kl]: !0
  }), d = te(n, sf, xc, {
    [Kl]: !0
  }), u = ot(n, ql, xc, {
    [Kl]: !0
  });
  te(n, Xl, u), te(d, Yl, l), te(d, Xl, u), ot(d, ql, u), te(u, sf), te(u, Yl), ot(u, ql, u), te(u, Xl, u);
  const h = ot(n, Wl, Rp, {
    [Op]: !0
  });
  te(h, "#"), ot(h, Wl, h), te(h, sw, h);
  const _ = te(h, ow);
  te(_, "#"), ot(_, Wl, h);
  const T = [[ei, s], [ti, a]], O = [[ei, null], [gr, o], [ti, r]];
  for (let A = 0; A < xs.length; A++)
    ki(n, xs[A], Oc, ii, T);
  for (let A = 0; A < Ls.length; A++)
    ki(n, Ls[A], Nc, kc, O);
  fa(Oc, {
    tld: !0,
    ascii: !0
  }, t), fa(Nc, {
    utld: !0,
    alpha: !0
  }, t), ki(n, "file", $s, ii, T), ki(n, "mailto", $s, ii, T), ki(n, "http", za, ii, T), ki(n, "https", za, ii, T), ki(n, "ftp", za, ii, T), ki(n, "ftps", za, ii, T), fa($s, {
    scheme: !0,
    ascii: !0
  }, t), fa(za, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, x) => A[0] > x[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const x = e[A][0], I = e[A][1] ? {
      [nw]: !0
    } : {
      [iw]: !0
    };
    x.indexOf("-") >= 0 ? I[Ac] = !0 : ei.test(x) ? ti.test(x) ? I[Ir] = !0 : I[Ec] = !0 : I[Sc] = !0, rf(n, x, x, I);
  }
  return rf(n, "localhost", ts, {
    ascii: !0
  }), n.jd = new cn(zo), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Ip)
  };
}
function Pp(e, t) {
  const n = cw(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
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
function cw(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, s = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(s), i += s.length;
  }
  return t;
}
function ki(e, t, n, i, a) {
  let r;
  const s = t.length;
  for (let o = 0; o < s - 1; o++) {
    const l = t[o];
    e.j[l] ? r = e.j[l] : (r = new cn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new cn(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function of(e) {
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
const ns = {
  defaultProtocol: "http",
  events: null,
  format: lf,
  formatHref: lf,
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
function fu(e, t = null) {
  let n = Object.assign({}, ns);
  e && (n = Object.assign(n, e instanceof fu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
fu.prototype = {
  o: ns,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : ns[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function lf(e) {
  return e;
}
function Dp(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
Dp.prototype = {
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
  toObject(e = ns.defaultProtocol) {
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
function ll(e, t) {
  class n extends Dp {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const uw = ll("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), cf = ll("text"), dw = ll("nl"), Rs = ll("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = ns.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== ts && e[1].t === ha;
  }
}), bn = (e) => new cn(e);
function fw({
  groups: e
}) {
  const t = e.domain.concat([ko, No, Ri, xo, Lo, Ro, Io, Po, yn, su, Mr, Do, Mo, $o, jn, zo, Fr, Fo]), n = [Oo, ha, lu, Hn, cu, Mr, $r, uu, du, mo, bo, Pr, Dr, po, ho, vo, go, yo, _o, wo, Co, So, Eo, To, Ao], i = [ko, Oo, No, xo, Lo, Ro, Io, Po, yn, Pr, Dr, Mr, Do, Mo, $o, $r, jn, zo, Fr, Fo], a = bn(), r = te(a, Fr);
  Ie(r, i, r), Ie(r, e.domain, r);
  const s = bn(), o = bn(), l = bn();
  Ie(a, e.domain, s), Ie(a, e.scheme, o), Ie(a, e.slashscheme, l), Ie(s, i, r), Ie(s, e.domain, s);
  const d = te(s, Ri);
  te(r, Ri, d), te(o, Ri, d), te(l, Ri, d);
  const u = te(r, Hn);
  Ie(u, i, r), Ie(u, e.domain, r);
  const h = bn();
  Ie(d, e.domain, h), Ie(h, e.domain, h);
  const _ = te(h, Hn);
  Ie(_, e.domain, h);
  const T = bn(uw);
  Ie(_, e.tld, T), Ie(_, e.utld, T), te(d, ts, T);
  const O = te(h, yn);
  te(O, yn, O), Ie(O, e.domain, h), Ie(T, e.domain, h), te(T, Hn, _), te(T, yn, O);
  const A = te(s, yn), x = te(s, Hn);
  te(A, yn, A), Ie(A, e.domain, s), Ie(x, i, r), Ie(x, e.domain, s);
  const P = bn(Rs);
  Ie(x, e.tld, P), Ie(x, e.utld, P), Ie(P, e.domain, s), Ie(P, i, r), te(P, Hn, x), te(P, yn, A), te(P, Ri, d);
  const I = te(P, ha), K = bn(Rs);
  Ie(I, e.numeric, K);
  const M = bn(Rs), oe = bn();
  Ie(M, t, M), Ie(M, n, oe), Ie(oe, t, M), Ie(oe, n, oe), te(P, jn, M), te(K, jn, M);
  const de = te(o, ha), ne = te(l, ha), pe = te(ne, jn), B = te(pe, jn);
  Ie(o, e.domain, s), te(o, Hn, x), te(o, yn, A), Ie(l, e.domain, s), te(l, Hn, x), te(l, yn, A), Ie(de, e.domain, M), te(de, jn, M), te(de, $r, M), Ie(B, e.domain, M), Ie(B, t, M), te(B, jn, M);
  const F = [
    [Pr, Dr],
    // {}
    [ho, po],
    // []
    [vo, go],
    // ()
    [mo, bo],
    // <>
    [yo, _o],
    // （）
    [wo, Co],
    // 「」
    [So, Eo],
    // 『』
    [To, Ao]
    // ＜＞
  ];
  for (let fe = 0; fe < F.length; fe++) {
    const [Z, ie] = F[fe], D = te(M, Z);
    te(oe, Z, D);
    const $ = bn(Rs);
    Ie(D, t, $);
    const X = bn();
    Ie(D, n, X), te(D, ie, M), Ie($, t, $), Ie($, n, X), Ie(X, t, $), Ie(X, n, X), te($, ie, M), te(X, ie, M);
  }
  return te(a, ts, P), te(a, ou, dw), {
    start: a,
    tokens: Ip
  };
}
function hw(e, t, n) {
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
      s.length > 0 && (r.push(Zl(cf, t, s)), s = []), a -= _, u -= _;
      const T = h.t, O = n.slice(a - u, a);
      r.push(Zl(T, t, O));
    }
  }
  return s.length > 0 && r.push(Zl(cf, t, s)), r;
}
function Zl(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const It = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function pw() {
  It.scanner = lw(It.customSchemes);
  for (let e = 0; e < It.tokenQueue.length; e++)
    It.tokenQueue[e][1]({
      scanner: It.scanner
    });
  It.parser = fw(It.scanner.tokens);
  for (let e = 0; e < It.pluginQueue.length; e++)
    It.pluginQueue[e][1]({
      scanner: It.scanner,
      parser: It.parser
    });
  return It.initialized = !0, It;
}
function Mp(e) {
  return It.initialized || pw(), hw(It.parser.start, e, Pp(It.scanner.start, e));
}
Mp.scan = Pp;
function vw(e) {
  const t = new fu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, bw), n = Mp(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Qs(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function gw(e) {
  return e.replace(/"/g, "&quot;");
}
function mw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${gw(i)}"`);
  }
  return t.join(" ");
}
function bw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${mw(t)}>${Qs(n)}</${e}>`;
}
const yw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = vw(t.text));
}, _w = ["title"], ww = /* @__PURE__ */ Nt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Mt("NcAppSidebar:header:ref");
    return (n, i) => je((b(), S("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      ke(p(e.name), 1)
    ], 8, _w)), [
      [g(yw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), Cw = ["aria-labelledby"], Sw = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, Ew = ["id"], Tw = {
  key: 2,
  class: "empty-content__description"
}, Aw = {
  key: 3,
  class: "empty-content__action"
}, kw = /* @__PURE__ */ Nt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = al();
    return (n, i) => (b(), S("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (b(), S("div", Sw, [
        Le(n.$slots, "icon", {}, void 0, !0)
      ])) : j("", !0),
      e.name !== "" || n.$slots.name ? (b(), S("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Le(n.$slots, "name", {}, () => [
          ke(p(e.name), 1)
        ], !0)
      ], 8, Ew)) : j("", !0),
      e.description !== "" || n.$slots.description ? (b(), S("p", Tw, [
        Le(n.$slots, "description", {}, () => [
          ke(p(e.description), 1)
        ], !0)
      ])) : j("", !0),
      n.$slots.action ? (b(), S("div", Aw, [
        Le(n.$slots, "action", {}, void 0, !0)
      ])) : j("", !0)
    ], 8, Cw));
  }
}), Ow = /* @__PURE__ */ Ke(kw, [["__scopeId", "data-v-8609a4c1"]]), Nw = {
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
}, xw = ["aria-hidden", "aria-label"], Lw = ["fill", "width", "height"], Rw = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, Iw = { key: 0 };
function Pw(e, t, n, i, a, r) {
  return b(), S("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), S("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Rw, [
        n.title ? (b(), S("title", Iw, p(n.title), 1)) : j("", !0)
      ])
    ], 8, Lw))
  ], 16, xw);
}
const Dw = /* @__PURE__ */ Ke(Nw, [["render", Pw]]), Mw = {
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
}, $w = ["aria-hidden", "aria-label"], Fw = ["fill", "width", "height"], zw = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, Uw = { key: 0 };
function Bw(e, t, n, i, a, r) {
  return b(), S("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), S("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", zw, [
        n.title ? (b(), S("title", Uw, p(n.title), 1)) : j("", !0)
      ])
    ], 8, Fw))
  ], 16, $w);
}
const Hw = /* @__PURE__ */ Ke(Mw, [["render", Bw]]), jw = {
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
}, Vw = ["aria-hidden", "aria-label"], Gw = ["fill", "width", "height"], Kw = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, Ww = { key: 0 };
function qw(e, t, n, i, a, r) {
  return b(), S("span", Ut(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (b(), S("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Kw, [
        n.title ? (b(), S("title", Ww, p(n.title), 1)) : j("", !0)
      ])
    ], 8, Gw))
  ], 16, Vw);
}
const Yw = /* @__PURE__ */ Ke(jw, [["render", qw]]), Xw = ["aria-selected", "tabindex"], Zw = /* @__PURE__ */ Nt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ vg({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = ah(e, "selected"), n = /* @__PURE__ */ at(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (b(), S("button", {
      class: we(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Hi),
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
          me(Cc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Ae(() => [
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
          me(Cc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Ae(() => [
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
    ], 10, Xw));
  }
}), Jw = "_sidebarTabsButton_q3kBA", Qw = "_sidebarTabsButton_legacy_KQ4d1", eC = "_sidebarTabsButton_selected_Pjayf", tC = "_sidebarTabsButton_animatedHighlight_uvp-0", nC = "_sidebarTabsButton__name_rlQsL", iC = "_sidebarTabsButton__icon_QzZg4", aC = "_sidebarTabsButton__iconLayer_ZkZan", rC = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", sC = "_sidebarTabsButton__icon_pop_IA0By", oC = "_sidebarTabsButton__legacyIcon_QhcNW", lC = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: Jw,
  sidebarTabsButton_legacy: Qw,
  sidebarTabsButton_selected: eC,
  sidebarTabsButton_animatedHighlight: tC,
  sidebarTabsButton__name: nC,
  sidebarTabsButton__icon: iC,
  sidebarTabsButton__iconLayer: aC,
  sidebarTabsButton__iconLayer_hidden: rC,
  sidebarTabsButton__icon_pop: sC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: oC
}, cC = {
  $style: lC
}, uC = /* @__PURE__ */ Ke(Zw, [["__cssModules", cC]]), dC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: uC
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
      isLegacy34: Hi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [mb()]) : t.order - n.order), this.updateActive();
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
}, fC = { class: "app-sidebar-tabs" };
function hC(e, t, n, i, a, r) {
  const s = ze("NcAppSidebarTabsButton");
  return b(), S("div", fC, [
    r.hasMultipleTabs || r.showForSingleTab ? (b(), S("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: we(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = Wt(Ye((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = Wt(Ye((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = Wt(Ye((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = Wt(Ye((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = Wt(Ye((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = Wt(Ye((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = Wt(Ye((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (b(), S("div", {
        key: 0,
        class: we(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: dn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : j("", !0),
      (b(!0), S(ce, null, Pe(a.tabs, (o) => (b(), $e(s, {
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
      class: we(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Le(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const pC = /* @__PURE__ */ Ke(dC, [["render", hC], ["__scopeId", "data-v-74190d2a"]]);
Bi(Jb);
const vC = {
  name: "NcAppSidebar",
  components: {
    NcActions: fo,
    NcAppSidebarHeader: ww,
    NcAppSidebarTabs: pC,
    NcButton: Wn,
    NcLoadingIcon: kp,
    NcEmptyContent: Ow,
    IconArrowRight: rp,
    IconClose: sp,
    IconDockRight: Dw,
    IconStar: Hw,
    IconStarOutline: Yw
  },
  directives: {
    Focus: Q0,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: J0
  },
  inject: {
    ncContentSelector: {
      from: ap,
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
    return _n("NcAppSidebar:header:ref", e), {
      uid: al(),
      isMobile: Kb(),
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
    isSlotPopulated: ru,
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
      this.focusTrap || (this.focusTrap = Jc([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: Xr(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ga.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, gC = ["aria-labelledby"], mC = { class: "app-sidebar-header__info" }, bC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, yC = { class: "app-sidebar-header__name-container" }, _C = { class: "app-sidebar-header__mainname-container" }, wC = ["placeholder", "value"], CC = ["title"], SC = {
  key: 2,
  class: "app-sidebar-header__description"
};
function EC(e, t, n, i, a, r) {
  const s = ze("IconDockRight"), o = ze("NcButton"), l = ze("NcLoadingIcon"), d = ze("IconStar"), u = ze("IconStarOutline"), h = ze("NcAppSidebarHeader"), _ = ze("IconArrowRight"), T = ze("NcActions"), O = ze("IconClose"), A = ze("NcAppSidebarTabs"), x = ze("NcEmptyContent"), P = ku("focus"), I = ku("click-outside");
  return b(), $e(nm, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Ae(() => [
      je(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = Wt((...K) => r.onKeydownEsc && r.onKeydownEsc(...K), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (b(), $e(Hf, {
          key: 0,
          to: r.ncContentSelector
        }, [
          me(o, Ut({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (K) => e.$emit("update:open", !0))
          }), {
            icon: Ae(() => [
              Le(e.$slots, "toggle-icon", {}, () => [
                me(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : j("", !0),
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
            c("div", mC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (b(), S("div", {
                key: 0,
                class: we(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: dn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...K) => r.onFigureClick && r.onFigureClick(...K)),
                onKeydown: t[2] || (t[2] = Wt((...K) => r.onFigureClick && r.onFigureClick(...K), ["enter"]))
              }, [
                Le(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : j("", !0),
              c("div", {
                class: we(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (b(), S("div", bC, [
                  Le(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (b(), $e(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Ye(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Ae(() => [
                        n.starLoading ? (b(), $e(l, { key: 0 })) : a.isStarred ? (b(), $e(d, {
                          key: 1,
                          size: 20
                        })) : (b(), $e(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : j("", !0)
                  ], !0)
                ])) : j("", !0),
                c("div", yC, [
                  c("div", _C, [
                    je(me(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Ye(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Va, !n.nameEditable]
                    ]),
                    n.nameEditable ? je((b(), S("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Ye((...K) => r.onSubmitName && r.onSubmitName(...K), ["prevent"]))
                    }, [
                      je(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = Wt(Ye((...K) => r.onDismissEditing && r.onDismissEditing(...K), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...K) => r.onNameInput && r.onNameInput(...K))
                      }, null, 40, wC), [
                        [P]
                      ]),
                      me(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Ae(() => [
                          me(_, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [I, () => r.onSubmitName()]
                    ]) : j("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (b(), $e(T, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Ae(() => [
                        Le(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : j("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (b(), S("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Le(e.$slots, "subname", {}, () => [
                      ke(p(n.subname), 1)
                    ], !0)
                  ], 8, CC)) : j("", !0)
                ])
              ], 2)
            ])
          ], !0),
          me(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Ye(r.closeSidebar, ["prevent"])
          }, {
            icon: Ae(() => [
              me(O, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (b(), S("div", SC, [
            Le(e.$slots, "description", {}, void 0, !0)
          ])) : j("", !0)
        ], 2),
        je(me(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Ae(() => [
            Le(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Va, !n.loading]
        ]),
        n.loading ? (b(), $e(x, { key: 1 }, {
          icon: Ae(() => [
            me(l, { size: 64 })
          ]),
          _: 1
        })) : j("", !0)
      ], 40, gC), [
        [Va, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const TC = /* @__PURE__ */ Ke(vC, [["render", EC], ["__scopeId", "data-v-c2c6820b"]]), AC = {
  name: "NcActionLink",
  mixins: [lp],
  inject: {
    isInSemanticMenu: {
      from: Qc,
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
}, kC = ["role"], OC = ["download", "href", "aria-label", "target", "title", "role"], NC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, xC = { class: "action-link__name" }, LC = ["textContent"], RC = ["textContent"], IC = {
  key: 2,
  class: "action-link__text"
};
function PC(e, t, n, i, a, r) {
  return b(), S("li", {
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
          style: dn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (b(), S("span", NC, [
        c("strong", xC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, LC)
      ])) : e.isLongText ? (b(), S("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, RC)) : (b(), S("span", IC, p(e.text), 1)),
      j("", !0)
    ], 8, OC)
  ], 8, kC);
}
const Ma = /* @__PURE__ */ Ke(AC, [["render", PC], ["__scopeId", "data-v-32f01b7a"]]);
Bi(iy);
const DC = `<!--
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
`, MC = `<!--
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
`, $C = { class: "vue-skip-actions__container" }, FC = { class: "vue-skip-actions__headline" }, zC = { class: "vue-skip-actions__buttons" }, UC = /* @__PURE__ */ Nt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    _n(ip, o), _n(ap, "#content-vue"), _n("appName", Y(() => t.appName));
    const n = ls(), i = /* @__PURE__ */ at(!1), a = /* @__PURE__ */ at(), r = Y(() => a.value === "navigation" ? MC : DC);
    Xf(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      fi("toggle-navigation", { open: !0 }), Kn(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, d) => (b(), S("div", {
      id: "content-vue",
      class: we(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Hi) }]])
    }, [
      (b(), $e(Hf, { to: "#skip-actions" }, [
        c("div", $C, [
          c("div", FC, p(g(_t)("Keyboard navigation help")), 1),
          c("div", zC, [
            je(me(Wn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Ye(s, ["prevent"]),
              onFocusin: d[0] || (d[0] = (u) => a.value = "navigation"),
              onMouseover: d[1] || (d[1] = (u) => a.value = "navigation")
            }, {
              default: Ae(() => [
                ke(p(g(_t)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Va, i.value]
            ]),
            me(Wn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: d[2] || (d[2] = (u) => a.value = "content"),
              onMouseover: d[3] || (d[3] = (u) => a.value = "content")
            }, {
              default: Ae(() => [
                ke(p(g(_t)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          je(me(il, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Va, !g(n)]
          ])
        ])
      ])),
      Le(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), BC = /* @__PURE__ */ Ke(UC, [["__scopeId", "data-v-d13dcb98"]]), HC = ["href"], jC = ["lang", "dir"], VC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, GC = { class: "library-review-header" }, KC = { class: "library-muted library-catalogue-eyebrow" }, WC = { id: "library-review-heading" }, qC = ["aria-label"], YC = ["href", "aria-current"], XC = ["aria-label"], ZC = ["name", "value"], JC = {
  type: "submit",
  class: "button secondary"
}, QC = ["aria-busy"], eS = { key: 0 }, tS = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, nS = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, iS = { class: "library-metadata-review-workbench-copy" }, aS = { class: "library-muted library-catalogue-eyebrow" }, rS = ["title"], sS = {
  key: 0,
  class: "library-metadata-review-card"
}, oS = {
  class: "library-bidi-human",
  dir: "auto"
}, lS = { class: "library-muted" }, cS = {
  class: "library-bidi-machine",
  dir: "ltr"
}, uS = { class: "library-metadata-review-fields" }, dS = {
  class: "library-bidi-human",
  dir: "auto"
}, fS = {
  class: "library-bidi-human",
  dir: "auto"
}, hS = {
  class: "library-bidi-human",
  dir: "auto"
}, pS = {
  class: "library-bidi-machine",
  dir: "ltr"
}, vS = {
  class: "library-bidi-human",
  dir: "auto"
}, gS = {
  class: "library-bidi-human",
  dir: "auto"
}, mS = ["action"], bS = ["value"], yS = ["value"], _S = {
  type: "submit",
  class: "button secondary"
}, wS = { class: "library-metadata-review-actions" }, CS = ["href"], SS = ["href"], ES = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, TS = ["href"], AS = ["aria-label"], kS = ["onClick"], OS = {
  class: "library-bidi-human",
  dir: "auto"
}, NS = {
  key: 0,
  class: "library-muted"
}, xS = {
  class: "library-bidi-human",
  dir: "auto"
}, LS = {
  key: 1,
  class: "library-scan-error"
}, RS = {
  class: "library-bidi-human",
  dir: "auto"
}, IS = ["onClick"], PS = ["href"], DS = ["aria-label"], MS = ["href"], $S = {
  key: 1,
  class: "library-muted"
}, FS = { key: 0 }, zS = ["href"], US = {
  key: 3,
  class: "library-muted"
}, BS = {
  key: 1,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, HS = { class: "library-home-header" }, jS = { class: "library-muted library-catalogue-eyebrow" }, VS = { id: "library-home-heading" }, GS = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, KS = { id: "library-continue-heading" }, WS = { class: "library-muted" }, qS = ["href"], YS = {
  key: 0,
  class: "library-home-card-row"
}, XS = ["onClick"], ZS = { class: "library-cover-frame" }, JS = ["src"], QS = { class: "library-cover-summary" }, eE = ["onClick"], tE = { dir: "auto" }, nE = {
  key: 0,
  class: "library-cover-creator"
}, iE = { dir: "auto" }, aE = ["href"], rE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, sE = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, oE = { id: "library-recent-heading" }, lE = { class: "library-muted" }, cE = ["href"], uE = {
  key: 0,
  class: "library-home-card-row"
}, dE = ["onClick"], fE = { class: "library-cover-frame" }, hE = ["src"], pE = { class: "library-cover-summary" }, vE = ["onClick"], gE = { dir: "auto" }, mE = {
  key: 0,
  class: "library-cover-creator"
}, bE = { dir: "auto" }, yE = ["href"], _E = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, wE = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, CE = { id: "library-home-shelves-heading" }, SE = { class: "library-muted" }, EE = ["href"], TE = ["aria-label"], AE = ["href"], kE = { dir: "auto" }, OE = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, NE = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, xE = { id: "library-home-attention-heading" }, LE = { class: "library-muted" }, RE = ["href"], IE = {
  key: 2,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, PE = { class: "library-home-header" }, DE = { class: "library-muted library-catalogue-eyebrow" }, ME = { id: "library-shelves-landing-heading" }, $E = { class: "library-muted" }, FE = ["aria-label"], zE = ["href"], UE = { class: "library-shelf-summary-title" }, BE = { dir: "auto" }, HE = { class: "library-muted" }, jE = { dir: "auto" }, VE = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, GE = { class: "library-muted" }, KE = { class: "library-empty-actions" }, WE = ["href"], qE = ["href"], YE = {
  key: 3,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, XE = { class: "library-catalogue-header" }, ZE = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, JE = { id: "library-catalogue-heading" }, QE = ["aria-label"], eT = ["aria-label"], tT = ["name", "value"], nT = { class: "library-quick-search-row" }, iT = ["title"], aT = ["placeholder"], rT = { "data-library-control": "sort" }, sT = { value: "title" }, oT = { value: "recent" }, lT = { value: "publicationDate" }, cT = { value: "publication" }, uT = { value: "lastOpened" }, dT = { value: "format" }, fT = ["aria-label"], hT = ["aria-pressed"], pT = ["aria-pressed"], vT = ["aria-pressed"], gT = ["aria-pressed"], mT = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine",
  "data-library-control": "filter"
}, bT = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, yT = ["title", "aria-label"], _T = { class: "library-workspace-scope-badge" }, wT = ["aria-label"], CT = { value: "" }, ST = ["value"], ET = { value: "" }, TT = ["value"], AT = { class: "library-publication-filter" }, kT = { for: "library-publication-search" }, OT = ["placeholder", "aria-expanded"], NT = ["value"], xT = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, LT = ["onClick"], RT = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, IT = { value: "" }, PT = ["value"], DT = ["title"], MT = { value: "" }, $T = ["value"], FT = ["placeholder"], zT = { value: "" }, UT = ["value"], BT = { value: "" }, HT = ["value"], jT = { value: "" }, VT = ["value"], GT = { value: "" }, KT = ["value"], WT = { value: "" }, qT = ["value"], YT = { value: "" }, XT = ["value"], ZT = { value: "" }, JT = { value: "1" }, QT = {
  type: "submit",
  class: "button primary"
}, eA = {
  href: "?",
  class: "button secondary"
}, tA = {
  id: "library-shelves",
  class: "library-navigation-section library-discovery-shortcuts",
  "aria-labelledby": "library-shelves-heading"
}, nA = { id: "library-shelves-heading" }, iA = { class: "library-shortcut-selectors" }, aA = ["title"], rA = { value: "" }, sA = ["value"], oA = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, lA = { value: "" }, cA = ["value"], uA = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, dA = { value: "" }, fA = ["value"], hA = {
  id: "library-collections",
  class: "library-saved-collections"
}, pA = ["title"], vA = ["action", "title"], gA = ["value"], mA = ["value"], bA = ["placeholder", "disabled"], yA = ["disabled", "title"], _A = ["aria-label"], wA = ["href"], CA = ["action"], SA = ["value"], EA = {
  type: "submit",
  class: "button tertiary"
}, TA = ["aria-label"], AA = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, kA = ["title"], OA = { class: "library-workspace-panel-purpose" }, NA = { class: "library-workspace-scope-badge" }, xA = { "aria-live": "polite" }, LA = ["action"], RA = ["value"], IA = ["placeholder"], PA = ["title"], DA = ["action"], MA = ["value"], $A = ["placeholder"], FA = ["title"], zA = ["action"], UA = ["value"], BA = ["name", "value"], HA = ["title"], jA = ["action"], VA = ["value"], GA = ["name", "value"], KA = { name: "bulkEditField" }, WA = { value: "publicationType" }, qA = { value: "subtitle" }, YA = { value: "creators" }, XA = { value: "publication" }, ZA = { value: "publicationDate" }, JA = { value: "language" }, QA = { value: "publisher" }, e2 = { value: "genres" }, t2 = { value: "classifications" }, n2 = ["placeholder"], i2 = ["title"], a2 = ["action"], r2 = ["value"], s2 = ["name", "value"], o2 = ["title"], l2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, c2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, u2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, d2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, f2 = { class: "library-muted library-catalogue-eyebrow" }, h2 = ["title"], p2 = ["aria-label"], v2 = { key: 0 }, g2 = { key: 1 }, m2 = { key: 2 }, b2 = ["aria-label"], y2 = { key: 0 }, _2 = { key: 1 }, w2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, C2 = { class: "library-muted library-catalogue-eyebrow" }, S2 = ["title"], E2 = ["aria-label"], T2 = ["href"], A2 = {
  key: 0,
  class: "library-notice"
}, k2 = { class: "library-publication-issue-label" }, O2 = ["href"], N2 = { class: "library-muted" }, x2 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, L2 = ["title"], R2 = ["href"], I2 = { class: "library-catalogue-status-row" }, P2 = { class: "library-muted library-filter-result-summary" }, D2 = { key: 0 }, M2 = { href: "?" }, $2 = ["aria-label"], F2 = { class: "library-pagination-range" }, z2 = { key: 0 }, U2 = ["href"], B2 = {
  key: 1,
  class: "library-muted"
}, H2 = ["href"], j2 = {
  key: 3,
  class: "library-muted"
}, V2 = ["aria-label"], G2 = ["href", "aria-label", "onClick"], K2 = ["title"], W2 = { class: "library-empty-actions" }, q2 = ["href"], Y2 = { class: "library-muted" }, X2 = ["title"], Z2 = { class: "library-empty-actions" }, J2 = ["href"], Q2 = ["title"], ek = { class: "library-empty-actions" }, tk = ["href"], nk = {
  href: "?",
  class: "button primary"
}, ik = ["title"], ak = { class: "library-empty-actions" }, rk = ["href"], sk = {
  key: 6,
  class: "library-select-visible"
}, ok = ["checked"], lk = {
  key: 7,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, ck = { class: "library-item-selection" }, uk = ["checked", "aria-label", "onChange"], dk = { class: "library-catalogue-list-main" }, fk = ["onClick"], hk = {
  class: "library-bidi-human",
  dir: "auto"
}, pk = {
  key: 0,
  class: "library-muted"
}, vk = {
  class: "library-bidi-human",
  dir: "auto"
}, gk = { class: "library-catalogue-list-metadata" }, mk = { key: 0 }, bk = {
  class: "library-bidi-human",
  dir: "auto"
}, yk = { key: 1 }, _k = { key: 2 }, wk = ["dir"], Ck = { key: 3 }, Sk = {
  class: "library-bidi-human",
  dir: "auto"
}, Ek = { class: "library-catalogue-list-actions" }, Tk = ["href"], Ak = ["onClick"], kk = { class: "library-item-selection" }, Ok = ["checked", "aria-label", "onChange"], Nk = ["aria-labelledby", "aria-expanded", "onClick"], xk = ["id"], Lk = { class: "library-cover-frame" }, Rk = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, Ik = ["src", "onLoad", "onError"], Pk = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, Dk = ["action", "onSubmit"], Mk = ["value"], $k = ["value"], Fk = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], zk = ["data-library-star-error"], Uk = { class: "library-cover-summary" }, Bk = { class: "library-cover-primary" }, Hk = ["id"], jk = ["onClick"], Vk = {
  class: "library-bidi-human",
  dir: "auto"
}, Gk = {
  key: 0,
  class: "library-cover-creator"
}, Kk = {
  class: "library-bidi-human",
  dir: "auto"
}, Wk = {
  key: 1,
  class: "library-cover-badges"
}, qk = {
  key: 0,
  class: "library-cover-badge"
}, Yk = {
  class: "library-bidi-machine",
  dir: "ltr"
}, Xk = {
  key: 1,
  class: "library-cover-context"
}, Zk = {
  class: "library-bidi-human",
  dir: "auto"
}, Jk = { class: "library-cover-primary-actions" }, Qk = ["href"], eO = ["aria-label"], tO = { class: "library-pagination-range" }, nO = { key: 0 }, iO = ["href"], aO = {
  key: 1,
  class: "library-muted"
}, rO = ["href"], sO = {
  key: 3,
  class: "library-muted"
}, oO = { class: "library-sidebar-content" }, lO = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, cO = ["role"], uO = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, dO = { class: "library-sidebar-publication-header" }, fO = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, hO = ["src"], pO = { class: "library-sidebar-publication-summary" }, vO = { class: "library-muted library-catalogue-eyebrow" }, gO = {
  class: "library-bidi-human",
  dir: "auto"
}, mO = { key: 0 }, bO = {
  class: "library-bidi-machine",
  dir: "ltr"
}, yO = { class: "library-detail-drawer-actions" }, _O = ["href"], wO = ["aria-label"], CO = ["aria-current", "onClick"], SO = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, EO = { id: "library-sidebar-overview-heading" }, TO = {
  key: 0,
  class: "library-sidebar-description"
}, AO = {
  class: "library-bidi-human",
  dir: "auto"
}, kO = { class: "library-detail-drawer-facts" }, OO = { key: 0 }, NO = { key: 1 }, xO = { key: 2 }, LO = { key: 3 }, RO = { key: 4 }, IO = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, PO = { id: "library-sidebar-metadata-heading" }, DO = ["placeholder"], MO = ["onUpdate:modelValue", "aria-label", "placeholder"], $O = ["onUpdate:modelValue", "aria-label"], FO = ["onClick"], zO = { class: "library-muted" }, UO = {
  key: 0,
  role: "alert"
}, BO = {
  key: 1,
  role: "status"
}, HO = ["disabled"], jO = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, VO = { id: "library-sidebar-suggestions-heading" }, GO = { class: "library-muted" }, KO = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, WO = { id: "library-sidebar-activity-heading" }, qO = { class: "library-detail-drawer-facts" }, YO = { key: 0 }, XO = { key: 1 }, ZO = { key: 2 }, JO = { dir: "ltr" }, QO = ["aria-label"], eN = ["disabled"], tN = ["disabled"], nN = 20, iN = "/apps/library", aN = 2147483647, rN = {
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
    function r(C, E) {
      return Object.prototype.hasOwnProperty.call(a, C) && String(E ?? "").trim() === a[C];
    }
    function s(C) {
      const E = new URLSearchParams(C);
      for (const f of Object.keys(a)) {
        const H = [...new Set([...E.keys()].filter((Me) => Me === f || Me.startsWith(`${f}[`)))], Oe = H.reduce((Me, vt) => Me + E.getAll(vt).length, 0);
        if (Oe > 1 || H.some((Me) => Me !== f)) {
          for (const Me of H) E.delete(Me);
          continue;
        }
        f !== "status" && Oe === 1 && !r(f, E.get(f)) && E.delete(f);
      }
      return E;
    }
    function o(C) {
      return Object.keys(a).some((E) => C.getAll(E).length === 1 && r(E, C.get(E)));
    }
    function l(C) {
      return Object.fromEntries(Object.entries(C || {}).filter(([E, f]) => E === "status" || !Object.prototype.hasOwnProperty.call(a, E) || r(E, f)));
    }
    const d = /* @__PURE__ */ Pt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Pt((d.items || []).map((C) => ({ ...C }))), h = Y(() => u), _ = Y(() => d.shelves || []), T = Y(() => d.formats || []), O = Y(() => d.publicationTypes?.length ? d.publicationTypes : n), A = Y(() => d.publishers || []), x = Y(() => d.publications || []), P = Y(() => d.publicationSummaries || []), I = Y(() => d.publicationIssueContext || null), K = Y(() => d.publicationYears || []), M = Y(() => d.creators || []), oe = Y(() => d.scanStatuses || []), de = Y(() => d.workflowStatuses || []), ne = Y(() => d.genres || []), pe = Y(() => d.classifications || []), B = Y(() => d.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), F = /* @__PURE__ */ Pt({
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
    for (const C of Object.keys(a))
      C !== "status" && (r(C, F[C]) || (F[C] = ""));
    const fe = /* @__PURE__ */ at(F.publication), Z = /* @__PURE__ */ at(!1), ie = Y(() => {
      const C = fe.value.trim().toLocaleLowerCase();
      return x.value.filter((E) => C === "" || E.toLocaleLowerCase().includes(C)).slice(0, nN);
    });
    Yt(() => F.publication, (C) => {
      fe.value = C || "";
    });
    const D = Object.fromEntries(Object.keys(F).map((C) => [C, C === "sort" ? "title" : C === "view" ? "compact" : ""])), $ = window.location.pathname.indexOf(iN), X = $ >= 0 ? window.location.pathname.slice(0, $) : "", ae = {
      catalogue: `${X}/apps/library/`,
      review: `${X}/apps/library/?scannerConflicts=1`,
      settings: `${X}/settings/user/library`
    };
    function ee(C, E) {
      if (typeof C != "string" || C === "") return E;
      try {
        const f = X ? `${X}/` : "/";
        let H = C;
        for (let Oe = 0; Oe < 5; Oe += 1) {
          if (!H.startsWith("/") || H.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(H)) return E;
          const Me = new URL(H, window.location.origin);
          if (Me.origin !== window.location.origin || !Me.pathname.startsWith(f)) return E;
          const vt = H.split(/[?#]/, 1)[0];
          for (const Na of vt.split("/")) {
            let xa = Na;
            for (let La = 0; La < 5; La += 1) {
              const Fn = decodeURIComponent(xa);
              if (/[\\/\u0000-\u001f\u007f]/.test(Fn) || Fn === "." || Fn === "..") return E;
              if (Fn === xa) break;
              if (xa = Fn, La === 4) return E;
            }
          }
          const sn = decodeURI(H);
          if (sn === H) return C;
          H = sn;
        }
        return E;
      } catch {
        return E;
      }
    }
    const ue = Y(() => ee(d.settingsUrl, ae.settings)), le = Y(() => ee(d.catalogueRootUrl, ae.catalogue)), Se = Y(() => ee(d.homeUrl, `${ae.catalogue}?home=1`)), be = Y(() => ee(d.shelvesUrl, `${ae.catalogue}?shelves=1`)), Xe = Y(() => ee(d.reviewUrl || d.scannerConflictReviewUrl, ae.review)), Ee = Y(() => Object.entries(a).some(([C, E]) => F[C] === E)), it = Y(() => i.reduce((C, E) => C + Number(hu.value[E.countKey] || 0), 0)), rt = Y(() => d.surface === "home"), lt = Y(() => d.surface === "shelves"), Bt = Y(() => !rt.value && !lt.value && !Ee.value && !F.starred && F.sort !== "lastOpened" && !F.shelf), nt = Y(() => [
      { key: "home", name: m("library", "Home"), href: Se.value, active: rt.value },
      { key: "all", name: m("library", "All publications"), href: le.value, active: Bt.value },
      { key: "starred", name: m("library", "Starred"), href: `${le.value}?starred=1`, active: F.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${le.value}?sort=lastOpened`, active: F.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: be.value, active: lt.value || !!F.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${le.value}#library-collections`, active: !1 }
    ]), ut = Y(() => d.requestToken || ""), U = Y(() => d.catalogueEndpointUrl || "/apps/library/catalogue"), v = Y(() => d.itemSidebarUrlTemplate || `${X}/apps/library/items/__ITEM_ID__/sidebar`), w = Y(() => d.batchTagUrl || "/apps/library/bulk/tags"), k = Y(() => d.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), R = Y(() => d.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), N = Y(() => d.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), z = Y(() => d.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), W = Y(() => d.scannerConflictReviewUrl || "?scannerConflicts=1");
    d.importHealthSummary, d.importHealthSummary && Object.keys(d.importHealthSummary).length > 0;
    const G = Y(() => d.discoveryPage === "publication"), J = Y(() => d.discoveryPage === "year"), V = Y(() => d.discoveryPage === "creator"), ge = Y(() => G.value || J.value || V.value), re = Y(() => d.discoveryTitle || F.publication || F.year || F.creator || ""), ve = Y(() => ge.value ? re.value : m("library", "Library")), _e = Y(() => V.value ? m("library", "Creator") : J.value ? m("library", "Publication year") : m("library", "Publication / series")), Ne = Y(() => Number(d.rootCount || 0)), De = Y(() => Number(d.enabledRootCount || 0)), Re = Y(() => Ne.value === 0), Ze = Y(() => Ne.value > 0 && De.value === 0), et = Y(() => fn.value.length > 0), mt = {
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
    }, Ct = Y(() => {
      if (typeof window > "u") return "";
      const C = new URLSearchParams(window.location.search);
      if (C.get("batchMetadataApplyResult") !== "1") return "";
      const E = C.get("batchMetadataField") || "field", f = C.get("batchMetadataApplied") || "0", H = C.get("batchMetadataUnchanged") || "0", Oe = C.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: f, field: E, unchanged: H, skipped: Oe });
    }), Ht = Y(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), Pn = Y(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), ct = Y(() => d.savedCollections || []), jt = Y(() => d.savedCollectionSaveUrl || "/apps/library/collections"), ji = Y(() => d.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), yi = ["compact", "gallery", "list", "shelf"], xt = Y(() => yi.includes(F.view) ? F.view : "compact"), Xa = Y(() => ({
      "library-cover-gallery--compact": xt.value === "compact",
      "library-cover-gallery--gallery": xt.value === "gallery",
      "library-cover-gallery--shelf": xt.value === "shelf"
    })), fn = Y(() => Object.entries(mt).map(([C, E]) => ({ key: C, label: m("library", E), value: F[C] || "" })).filter((C) => String(C.value).trim() !== "")), _i = Y(() => Object.entries(F).filter(([C, E]) => !["q", "sort", "starred"].includes(C) && String(E || "").trim() !== "").map(([C, E]) => ({ key: C, value: E }))), Vi = Y(() => Object.entries(l(F)).filter(([C, E]) => String(E || "").trim() !== "").map(([C, E]) => ({ key: C, value: E }))), cs = Y(() => Vi.value.filter(({ key: C, value: E }) => C !== "q" && !(C === "sort" && E === "title"))), wa = /* @__PURE__ */ Pt({}), Gi = Y(() => d.homeRows || { continueReading: [], recentlyAdded: [] }), Za = Y(() => d.homeShelves || []), Ki = Y(() => d.shelfSummaries || []), wi = Y(() => d.needsAttention || { count: 0, url: `${le.value}?needsMetadata=1` }), st = /* @__PURE__ */ at([]), An = Y(() => new Set(st.value));
    function Ca(C, E) {
      const f = new Set(st.value);
      E ? f.add(Number(C)) : f.delete(Number(C)), st.value = [...f];
    }
    function Ja(C) {
      st.value = C.currentTarget.checked ? h.value.map((E) => Number(E.id)) : [];
    }
    function cl() {
      const C = new Set(h.value.map((E) => Number(E.id)));
      st.value = st.value.filter((E) => C.has(E));
    }
    function us(C) {
      const E = C.target;
      if (E instanceof HTMLFormElement) {
        E.querySelectorAll("input[data-library-selected-id]").forEach((f) => f.remove());
        for (const f of st.value) {
          const H = document.createElement("input");
          H.type = "hidden", H.name = "itemIds[]", H.value = String(f), H.dataset.librarySelectedId = "1", E.appendChild(H);
        }
      }
    }
    const Ce = /* @__PURE__ */ at(null), Dn = /* @__PURE__ */ at(null), pt = /* @__PURE__ */ Pt({ loading: !1, error: "", missing: !1 }), Xn = /* @__PURE__ */ at("overview"), St = /* @__PURE__ */ Pt({ saving: !1, saved: !1, error: "" }), bt = /* @__PURE__ */ Pt({ title: "", publicationDate: "", identifiers: [] }), ds = /* @__PURE__ */ at(null), We = /* @__PURE__ */ at(null), Xt = /* @__PURE__ */ at(!1);
    let Qa = null, hn = null, Ci = null, Sa = !1, Si = null, er = 0;
    const Mn = Y(() => Dn.value !== null), Wi = Y(() => Ce.value ? h.value.findIndex((C) => C.id === Ce.value.id) : -1), Ea = Y(() => Wi.value > 0 ? h.value[Wi.value - 1] : null), en = Y(() => Wi.value >= 0 && Wi.value < h.value.length - 1 ? h.value[Wi.value + 1] : null), fs = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], Ta = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function pn(C) {
      const E = String(C ?? "").trim(), f = E.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return f ? f[1] : E;
    }
    function hs(C) {
      return { ...C, publicationDate: pn(C?.publicationDate) };
    }
    function qi(C) {
      bt.title = String(C?.title || ""), bt.publicationDate = pn(C?.publicationDate), bt.identifiers = Array.isArray(C?.identifiers) ? C.identifiers.map((E) => ({ scheme: String(E?.scheme || ""), displayValue: String(E?.displayValue || E?.value || "") })) : [], Object.assign(St, { saving: !1, saved: !1, error: "" });
    }
    function ps() {
      bt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function ul(C) {
      bt.identifiers.splice(C, 1);
    }
    async function vs() {
      const C = Ce.value;
      if (!C?.updateUrl || St.saving) return;
      Object.assign(St, { saving: !0, saved: !1, error: "" });
      const E = new FormData();
      E.set("requesttoken", ut.value), E.set("metadataAutosave", "1");
      for (const f of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "genres", "classifications", "personalRating"]) {
        const H = C[f];
        E.set(f, Array.isArray(H) ? H.join(", ") : String(H ?? ""));
      }
      E.set("title", bt.title), E.set("publicationDate", pn(bt.publicationDate)), bt.identifiers.forEach((f, H) => {
        E.set(`identifiers[${H}][scheme]`, f.scheme), E.set(`identifiers[${H}][displayValue]`, f.displayValue);
      });
      try {
        const f = await fetch(C.updateUrl, { method: "POST", body: E, credentials: "same-origin", headers: { Accept: "application/json" } }), H = await f.json().catch(() => ({}));
        if (!f.ok || H.saved !== !0) throw new Error(H.error || m("library", "Metadata could not be saved."));
        C.title = bt.title.trim(), C.publicationDate = pn(bt.publicationDate), C.identifiers = bt.identifiers.filter((Me) => Me.scheme.trim() || Me.displayValue.trim()).map((Me) => ({ ...Me }));
        const Oe = h.value.find((Me) => Number(Me.id) === Number(C.id));
        Oe && (Oe.title = C.title, Oe.publicationDate = C.publicationDate), St.saved = !0;
      } catch (f) {
        St.error = f?.message || m("library", "Metadata could not be saved.");
      } finally {
        St.saving = !1;
      }
    }
    const kn = Y(() => {
      const C = r("scannerConflicts", F.scannerConflicts) || r("weakMetadata", F.weakMetadata), E = C ? h.value.find((f) => Zn(f).length > 0) : null;
      return {
        enabled: C,
        item: E,
        fields: E ? Zn(E) : [],
        reviewNextUrl: W.value,
        skipUrl: B.value.nextUrl || W.value
      };
    }), Aa = Y(() => i.map((C) => ({
      ...C,
      label: m("library", C.label),
      href: `${le.value}?${encodeURIComponent(C.key)}=${encodeURIComponent(C.value)}`,
      active: String(F[C.key] || "") === C.value
    })));
    function Yi(C) {
      return Array.isArray(C) ? JSON.stringify(C) : C == null ? "" : String(C);
    }
    function Zn(C) {
      const E = C.fieldValues || {}, f = C.fieldSources || {};
      return fs.filter((H) => Object.prototype.hasOwnProperty.call(E, H)).map((H) => {
        const Oe = Yi(C[H]), Me = Yi(E[H]), vt = Yi(f[H] || C.metadataSource || "scanner"), sn = vt.includes("filename") || vt.includes("path") ? Me : "", Na = vt.includes("sidecar") ? Me : "";
        return { field: H, currentValue: Oe, scannerCandidate: Me, pathTemplateCandidate: sn, sidecarValue: Na, sourceProvenance: vt, differs: Oe !== Me };
      }).filter((H) => H.differs);
    }
    let Zt = 0, tn = null;
    function nn() {
      const C = new URLSearchParams(window.location.search).getAll("item");
      if (C.length !== 1 || !/^[1-9][0-9]*$/.test(C[0])) return null;
      const E = Number(C[0]);
      return Number.isSafeInteger(E) && E <= aN ? E : null;
    }
    function gs(C, E = "push") {
      const f = new URL(window.location.href);
      f.searchParams.delete("item"), C !== null && f.searchParams.set("item", String(C)), history[`${E}State`]({}, "", `${f.pathname}${f.search}${f.hash}`);
    }
    async function $n(C, { historyMode: E = "push", seed: f = null } = {}) {
      tn?.abort();
      const H = ++Zt, Oe = new AbortController();
      tn = Oe, Dn.value = C, Xn.value = "overview", Ce.value = f && Number(f.id) === C ? hs(f) : null, Ce.value && qi(Ce.value), Object.assign(pt, { loading: !0, error: "", missing: !1 }), E !== "none" && gs(C, E);
      try {
        const Me = v.value.replace("__ITEM_ID__", encodeURIComponent(String(C))), vt = await fetch(Me, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: Oe.signal });
        if (H !== Zt) return;
        if (!vt.ok) {
          Ce.value = null, pt.missing = vt.status === 404, pt.error = vt.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const sn = await vt.json();
        if (H !== Zt) return;
        if (typeof sn?.item?.id != "number" || !Number.isSafeInteger(sn.item.id) || sn.item.id !== C) {
          Ce.value = null, pt.missing = !1, pt.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        Ce.value = hs(sn.item), qi(Ce.value), await Kn();
      } catch (Me) {
        H === Zt && Me?.name !== "AbortError" && (Ce.value = null, pt.missing = !1, pt.error = m("library", "Could not load publication details. Try again."));
      } finally {
        H === Zt && (pt.loading = !1, tn = null);
      }
    }
    function vn(C, E) {
      ka(), Qa = E?.currentTarget instanceof HTMLElement ? E.currentTarget : null, $n(Number(C.id), { seed: C });
    }
    function Xi({ historyMode: C = "push", restoreFocus: E = !0 } = {}) {
      Ci = E ? Qa : null, Qa = null, tn?.abort(), tn = null, Zt += 1, Dn.value = null, Ce.value = null, Xn.value = "overview", Object.assign(pt, { loading: !1, error: "", missing: !1 }), C !== "none" && gs(null, C);
    }
    function tr() {
      Xt.value ? (We.value?.$refs?.sidebar || We.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : ds.value?.focus();
    }
    function ms() {
      const C = Ci;
      if (Ci = null, ka(), Sa || !C?.isConnected) return;
      const E = er;
      Si = window.requestAnimationFrame(() => {
        Si = null, !(E !== er || Sa || Mn.value || !C.isConnected) && C.focus();
      });
    }
    function ka() {
      er += 1, Si !== null && (window.cancelAnimationFrame(Si), Si = null);
    }
    function Zi(C = hn) {
      Xt.value = !!C?.matches, Mn.value && Kn(tr);
    }
    function Ji(C) {
      C && $n(Number(C.id), { seed: C });
    }
    const Ei = /* @__PURE__ */ at(null);
    let Oa = null, an = 0, rn = null;
    const Vt = /* @__PURE__ */ Pt({ loading: !1, error: "" });
    function Q(C) {
      const E = s(new FormData(C));
      E.delete("publicationSearch");
      for (const f of Array.from(E.keys()))
        String(E.get(f) || "").trim() === "" && E.delete(f);
      return E.delete("page"), E.get("view") === "compact" && E.delete("view"), E;
    }
    function y(C) {
      u.splice(0, u.length, ...(C.items || []).map((E) => ({ ...E }))), cl();
      for (const E of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(C, E) && (d[E] = C[E]);
      Object.assign(F, D, C.activeFilters || {});
    }
    async function L(C, E = null) {
      const f = C?.currentTarget?.tagName === "FORM" ? C.currentTarget : C?.currentTarget?.form;
      if (!f && !E?.params) return;
      const H = s(E?.params ?? Q(f)), Oe = H.toString(), Me = Oe ? `?${Oe}` : "", vt = E?.generation ?? ++an, sn = o(H), Na = E?.historyMode ?? (sn ? "push" : "replace"), xa = E?.historyTraversal === !0;
      if (vt !== an) return;
      E === null && rn?.abort();
      const La = new AbortController();
      rn = La, Vt.loading = !0, Vt.error = "";
      try {
        const Fn = await fetch(U.value + Me, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: La.signal
        });
        if (vt !== an) return;
        if (!Fn.ok) {
          xa ? se(H) : sn ? Vt.error = m("library", "Could not load this review queue. Try again.") : se(H);
          return;
        }
        const Xp = await Fn.json();
        if (vt !== an) return;
        y(Xp), Na !== "none" && (history[Na === "push" ? "pushState" : "replaceState"]({}, "", Oe ? `?${Oe}` : window.location.pathname), Mn.value && Xi({ historyMode: "none" }));
      } catch (Fn) {
        vt === an && Fn?.name !== "AbortError" && (xa ? se(H) : sn ? Vt.error = m("library", "Could not load this review queue. Try again.") : se(H));
      } finally {
        vt === an && (rn = null, Vt.loading = !1);
      }
    }
    function q() {
      rn?.abort();
      const C = new URLSearchParams(window.location.search), E = nn();
      C.has("item") && E === null && (C.delete("item"), history.replaceState({}, "", `${window.location.pathname}${C.toString() ? `?${C}` : ""}${window.location.hash}`)), E === null ? Xi({ historyMode: "none" }) : $n(E, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === E) || null }), C.delete("item"), L(null, {
        params: s(C),
        generation: ++an,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function se(C) {
      const E = document.createElement("form");
      E.method = "get", E.action = window.location.pathname, E.hidden = !0;
      for (const [f, H] of C.entries()) {
        const Oe = document.createElement("input");
        Oe.type = "hidden", Oe.name = f, Oe.value = H, E.appendChild(Oe);
      }
      document.body.appendChild(E), E.submit(), E.remove();
    }
    function he(C, E = null, f = null) {
      if (E === null) {
        L(C);
        return;
      }
      L({ currentTarget: C }, { params: E, generation: f });
    }
    function Te(C) {
      const E = C?.currentTarget?.form;
      if (!E) return;
      window.clearTimeout(Oa);
      const f = ++an, H = Q(E);
      rn?.abort(), rn = null, Oa = window.setTimeout(() => he(E, H, f), 350);
    }
    async function qe(C, E = fe.value) {
      F.publication = String(E || "").trim(), fe.value = F.publication, Z.value = !1, await Kn(), L({ currentTarget: C });
    }
    function tt(C) {
      qe(C.currentTarget);
    }
    function Lt(C, E) {
      qe(E.currentTarget.form, C);
    }
    function yt(C) {
      const E = new URLSearchParams();
      for (const [H, Oe] of Object.entries(F)) {
        const Me = String(Oe || "").trim();
        Me !== "" && H !== C && !(H === "sort" && Me === "title") && !(H === "view" && Me === "compact") && E.set(H, Me);
      }
      const f = E.toString();
      return f ? `?${f}` : "?";
    }
    function nr(C) {
      const E = new URLSearchParams(yt(C));
      L(null, {
        params: E,
        generation: ++an
      });
    }
    function Et() {
      return yt("q");
    }
    const hu = Y(() => d.smartViewCounts || {}), pu = Y(() => {
      const C = {};
      for (const [E, f] of Object.entries(F)) {
        const H = String(f || "").trim();
        H !== "" && !(E === "sort" && H === "title") && (C[E] = H);
      }
      return C;
    }), $p = Y(() => JSON.stringify(pu.value)), dl = Y(() => Object.keys(pu.value).length > 0);
    function bs(C) {
      if (!yi.includes(C)) return;
      F.view = C;
      const E = s(window.location.search);
      C === "compact" ? E.delete("view") : E.set("view", C), E.delete("page"), history.replaceState({}, "", E.toString() ? `?${E.toString()}` : window.location.pathname);
    }
    function Fp(C) {
      const E = s(window.location.search);
      for (const H of Object.keys(mt))
        E.delete(H);
      E.delete("page");
      for (const [H, Oe] of Object.entries(C))
        String(Oe || "").trim() !== "" && E.set(H, String(Oe));
      const f = E.toString();
      return f ? `?${f}` : "?";
    }
    function zp(C) {
      return Fp(C || {});
    }
    function Up(C) {
      return ji.value.replace("__COLLECTION_ID__", encodeURIComponent(String(C || "0")));
    }
    function ir(C) {
      return String(C || "").toUpperCase();
    }
    function Bp(C) {
      return P.value.find((f) => f.publication === C)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(C)}`;
    }
    function Hp(C) {
      return d.publicationYearLandingUrls?.[C] || `/apps/library/years/${encodeURIComponent(C)}`;
    }
    function jp(C) {
      return d.creatorLandingUrls?.[C] || `/apps/library/creators/${encodeURIComponent(C)}`;
    }
    function fl(C) {
      const E = C?.target?.value || "";
      E && (window.location.href = E);
    }
    function ar(C) {
      return wa[C.id] || "loading";
    }
    function Vp(C) {
      wa[C.id] = "loaded";
    }
    function Gp(C) {
      wa[C.id] = "error";
    }
    function hl(C) {
      const E = String(C?.publication || "").trim(), f = String(C?.publicationDate || "").trim();
      return E && f ? `${E} · ${f}` : E || f ? E || f : [C?.publicationType, ir(C?.extension)].filter(Boolean).join(" · ");
    }
    function Kp(C) {
      const E = String(C?.tagName || "").toLowerCase();
      return C?.isContentEditable || ["input", "select", "textarea", "button"].includes(E);
    }
    function Wp(C) {
      C.key !== "/" || C.metaKey || C.ctrlKey || C.altKey || C.shiftKey || Kp(C.target) || (C.preventDefault(), Ei.value?.focus(), Ei.value?.select?.());
    }
    function qp(C) {
      C.key !== "Escape" || document.activeElement !== Ei.value || F.q === "" || (C.preventDefault(), F.q = "", Ei.value.value = "", window.clearTimeout(Oa), he({ currentTarget: Ei.value }));
    }
    function Yp(C) {
      if (!Mn.value || C.metaKey || C.ctrlKey || C.altKey)
        return !1;
      if (C.key === "Escape")
        return C.preventDefault(), Xi(), !0;
      if (C.key === "Tab" && Xt.value) {
        if (We.value?.focusTrap) return !1;
        const E = We.value?.$refs?.sidebar || We.value?.$el || We.value, f = [...E?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Me) => !Me.hidden && Me.getAttribute("aria-hidden") !== "true");
        if (f.length === 0) return !1;
        const H = f[0], Oe = f[f.length - 1];
        if (C.shiftKey && (document.activeElement === H || !E.contains(document.activeElement)))
          return C.preventDefault(), Oe.focus(), !0;
        if (!C.shiftKey && (document.activeElement === Oe || !E.contains(document.activeElement)))
          return C.preventDefault(), H.focus(), !0;
      }
      return C.key === "ArrowLeft" && Ea.value ? (C.preventDefault(), Ji(Ea.value), !0) : C.key === "ArrowRight" && en.value ? (C.preventDefault(), Ji(en.value), !0) : !1;
    }
    function vu(C) {
      Yp(C) || (Wp(C), qp(C));
    }
    Ui(() => {
      window.addEventListener("keydown", vu), window.addEventListener("popstate", q), hn = window.matchMedia?.("(max-width: 1023px)") || null, Zi(), hn?.addEventListener ? hn.addEventListener("change", Zi) : hn?.addListener?.(Zi);
      const C = new URLSearchParams(window.location.search), E = nn();
      C.has("item") && E === null ? (C.delete("item"), history.replaceState({}, "", `${window.location.pathname}${C.toString() ? `?${C}` : ""}${window.location.hash}`)) : E !== null && $n(E, { historyMode: "none", seed: h.value.find((f) => Number(f.id) === E) || null });
    }), Ya(() => {
      Sa = !0, ka(), window.removeEventListener("keydown", vu), window.removeEventListener("popstate", q), window.clearTimeout(Oa), an += 1, rn?.abort(), rn = null, Zt += 1, tn?.abort(), tn = null, hn?.removeEventListener ? hn.removeEventListener("change", Zi) : hn?.removeListener?.(Zi), hn = null, Ci = null;
    });
    const rr = /* @__PURE__ */ Pt({}), sr = /* @__PURE__ */ Pt({});
    async function gu(C, E) {
      const f = E?.currentTarget?.closest?.("form") || E?.currentTarget;
      if (!f || !C?.starUrl || rr[C.id]) return;
      const H = !!C.starred;
      rr[C.id] = !0, sr[C.id] = "", C.starred = !H;
      try {
        (await fetch(C.starUrl, {
          method: "POST",
          body: new FormData(f),
          credentials: "same-origin"
        })).ok || (C.starred = H, sr[C.id] = m("library", "Could not update star. Try again."));
      } catch {
        C.starred = H, sr[C.id] = m("library", "Could not update star. Try again.");
      } finally {
        rr[C.id] = !1;
      }
    }
    return (C, E) => (b(), $e(g(BC), { "app-name": "library" }, {
      default: Ae(() => [
        me(g(C_), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: Ae(() => [
            me(g(np), null, {
              default: Ae(() => [
                (b(!0), S(ce, null, Pe(nt.value, (f) => (b(), $e(g(af), {
                  key: f.key,
                  active: f.active,
                  href: f.href,
                  name: f.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                me(g(af), {
                  active: Ee.value,
                  href: Xe.value,
                  name: it.value > 0 ? `${g(m)("library", "Review")} (${it.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Ae(() => [
            c("a", {
              class: "library-navigation-settings-link",
              href: ue.value
            }, [
              E[28] || (E[28] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(g(m)("library", "Settings")), 1)
            ], 8, HC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        me(g(Fy), null, {
          default: Ae(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: d.language || "en",
              dir: d.direction || "ltr",
              tabindex: "-1"
            }, [
              Ee.value ? (b(), S("section", VC, [
                c("header", GC, [
                  c("p", KC, p(g(m)("library", "Metadata cleanup")), 1),
                  c("h2", WC, p(g(m)("library", "Review")), 1),
                  c("p", null, p(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (b(!0), S(ce, null, Pe(Aa.value, (f) => (b(), S("a", {
                    key: f.key,
                    class: we(["library-review-queue-link", { active: f.active }]),
                    href: f.href,
                    "aria-current": f.active ? "page" : void 0
                  }, [
                    c("span", null, p(f.label), 1),
                    c("b", null, p(Number(hu.value[f.countKey] || 0)), 1)
                  ], 10, YC))), 128))
                ], 8, qC),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: Ye(L, ["prevent"])
                }, [
                  (b(!0), S(ce, null, Pe(cs.value, (f) => (b(), S("input", {
                    key: `review-${f.key}`,
                    type: "hidden",
                    name: f.key,
                    value: f.value
                  }, null, 8, ZC))), 128)),
                  c("label", null, [
                    ke(p(g(m)("library", "Search within this queue")), 1),
                    je(c("input", {
                      "onUpdate:modelValue": E[0] || (E[0] = (f) => F.q = f),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ni, F.q]
                    ])
                  ]),
                  c("button", JC, p(g(m)("library", "Apply")), 1)
                ], 40, XC),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Vt.loading ? "true" : "false"
                }, [
                  Vt.loading ? (b(), S("span", eS, p(g(m)("library", "Loading review queue…")), 1)) : j("", !0)
                ], 8, QC),
                Vt.error ? (b(), S("p", tS, p(Vt.error), 1)) : j("", !0),
                kn.value.enabled ? (b(), S("section", nS, [
                  c("div", iS, [
                    c("p", aS, p(g(m)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(m)("library", "Review next suggestion")), 9, rS)
                  ]),
                  kn.value.item ? (b(), S("article", sS, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", oS, p(kn.value.item.title), 1)
                      ]),
                      c("span", lS, [
                        c("bdi", cS, p(kn.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", uS, [
                      (b(!0), S(ce, null, Pe(kn.value.fields, (f) => (b(), S("article", {
                        key: f.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", dS, p(f.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", fS, p(f.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", hS, p(f.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", pS, p(f.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", vS, p(f.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(g(m)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", gS, p(f.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: kn.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ut.value
                          }, null, 8, bS),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: f.field
                          }, null, 8, yS),
                          E[29] || (E[29] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", _S, p(g(m)("library", "Use suggested value")), 1)
                        ], 8, mS)
                      ]))), 128))
                    ]),
                    c("footer", wS, [
                      c("a", {
                        class: "button secondary",
                        href: kn.value.item.detailsUrl
                      }, p(g(m)("library", "Maintenance")), 9, CS),
                      c("a", {
                        class: "button secondary",
                        href: kn.value.skipUrl
                      }, p(g(m)("library", "Skip to next suggestion")), 9, SS)
                    ])
                  ])) : j("", !0)
                ])) : j("", !0),
                h.value.length === 0 && !Vt.loading && !Vt.error ? (b(), S("div", ES, [
                  c("h3", null, p(g(m)("library", "This review queue is clear")), 1),
                  c("p", null, p(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: le.value
                  }, p(g(m)("library", "Back to Library")), 9, TS)
                ])) : (b(), S("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(m)("library", "Review results")
                }, [
                  (b(!0), S(ce, null, Pe(h.value, (f) => (b(), S("article", {
                    key: f.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (H) => vn(f, H)
                        }, [
                          c("bdi", OS, p(f.title), 1)
                        ], 8, kS)
                      ]),
                      f.creators ? (b(), S("p", NS, [
                        c("bdi", xS, p(f.creators), 1)
                      ])) : j("", !0),
                      f.scanError ? (b(), S("p", LS, [
                        c("bdi", RS, p(f.scanError), 1)
                      ])) : j("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (H) => vn(f, H)
                      }, p(g(m)("library", "Details")), 9, IS),
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, PS)
                    ])
                  ]))), 128))
                ], 8, AS)),
                h.value.length > 0 ? (b(), S("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  B.value.previousUrl ? (b(), S("a", {
                    key: 0,
                    href: B.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, MS)) : (b(), S("span", $S, p(g(m)("library", "Previous")), 1)),
                  c("span", null, [
                    ke(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                    B.value.total > 0 ? (b(), S("span", FS, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : j("", !0)
                  ]),
                  B.value.nextUrl ? (b(), S("a", {
                    key: 2,
                    href: B.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, zS)) : (b(), S("span", US, p(g(m)("library", "Next")), 1))
                ], 8, DS)) : j("", !0)
              ])) : rt.value ? (b(), S("main", BS, [
                c("header", HS, [
                  c("p", jS, p(g(m)("library", "Your library")), 1),
                  c("h2", VS, p(g(m)("library", "Home")), 1)
                ]),
                c("section", GS, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", KS, p(g(m)("library", "Continue reading")), 1),
                      c("p", WS, p(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${le.value}?sort=lastOpened`
                    }, p(g(m)("library", "View all")), 9, qS)
                  ]),
                  Gi.value.continueReading.length ? (b(), S("div", YS, [
                    (b(!0), S(ce, null, Pe(Gi.value.continueReading, (f) => (b(), S("article", {
                      key: `continue-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (H) => vn(f, H)
                      }, [
                        c("span", ZS, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, JS)
                        ])
                      ], 8, XS),
                      c("div", QS, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (H) => vn(f, H)
                          }, [
                            c("bdi", tE, p(f.title), 1)
                          ], 8, eE)
                        ]),
                        f.creators ? (b(), S("p", nE, [
                          c("bdi", iE, p(f.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, aE)
                      ])
                    ]))), 128))
                  ])) : (b(), S("p", rE, p(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", sE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", oE, p(g(m)("library", "Recently added")), 1),
                      c("p", lE, p(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${le.value}?sort=recent`
                    }, p(g(m)("library", "View all")), 9, cE)
                  ]),
                  Gi.value.recentlyAdded.length ? (b(), S("div", uE, [
                    (b(!0), S(ce, null, Pe(Gi.value.recentlyAdded, (f) => (b(), S("article", {
                      key: `recent-${f.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (H) => vn(f, H)
                      }, [
                        c("span", fE, [
                          c("img", {
                            class: "library-cover-image",
                            src: f.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, hE)
                        ])
                      ], 8, dE),
                      c("div", pE, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (H) => vn(f, H)
                          }, [
                            c("bdi", gE, p(f.title), 1)
                          ], 8, vE)
                        ]),
                        f.creators ? (b(), S("p", mE, [
                          c("bdi", bE, p(f.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: f.openUrl
                        }, p(g(m)("library", "Open")), 9, yE)
                      ])
                    ]))), 128))
                  ])) : (b(), S("p", _E, p(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", wE, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", CE, p(g(m)("library", "Shelves")), 1),
                      c("p", SE, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: be.value }, p(g(m)("library", "View all")), 9, EE)
                  ]),
                  Za.value.length ? (b(), S("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (b(!0), S(ce, null, Pe(Za.value, (f) => (b(), S("a", {
                      key: f.shelf,
                      href: f.url
                    }, [
                      c("strong", null, [
                        c("bdi", kE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Un)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ], 8, AE))), 128))
                  ], 8, TE)) : (b(), S("p", OE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(wi.value.count || 0) > 0 ? (b(), S("aside", NE, [
                  c("div", null, [
                    c("h3", xE, p(g(m)("library", "Needs attention")), 1),
                    c("p", LE, p(g(Un)("library", "%n publication needs better details.", "%n publications need better details.", Number(wi.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: wi.value.url
                  }, p(g(m)("library", "Review")), 9, RE)
                ])) : j("", !0)
              ])) : lt.value ? (b(), S("main", IE, [
                c("header", PE, [
                  c("p", DE, p(g(m)("library", "Your library")), 1),
                  c("h2", ME, p(g(m)("library", "Shelves")), 1),
                  c("p", $E, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                Ki.value.length ? (b(), S("nav", {
                  key: 0,
                  class: "library-shelf-summary-grid",
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  (b(!0), S(ce, null, Pe(Ki.value, (f) => (b(), S("a", {
                    key: f.id,
                    class: "library-shelf-summary-card",
                    href: f.url
                  }, [
                    c("span", UE, [
                      c("strong", null, [
                        c("bdi", BE, p(f.shelf), 1)
                      ]),
                      c("span", null, p(g(Un)("library", "%n item", "%n items", Number(f.itemCount || 0))), 1)
                    ]),
                    c("small", HE, [
                      c("bdi", jE, p(f.path), 1)
                    ])
                  ], 8, zE))), 128))
                ], 8, FE)) : (b(), S("section", VE, [
                  c("h3", null, p(g(m)("library", "Shelves")), 1),
                  c("p", GE, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", KE, [
                    c("a", {
                      class: "button primary",
                      href: ue.value
                    }, p(g(m)("library", "Add a Library root")), 9, WE),
                    c("a", {
                      class: "button secondary",
                      href: le.value
                    }, p(g(m)("library", "All publications")), 9, qE)
                  ])
                ]))
              ])) : (b(), S("section", YE, [
                c("header", XE, [
                  ge.value ? (b(), S("p", ZE, p(_e.value), 1)) : j("", !0),
                  c("h2", JE, p(ve.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: Ye(L, ["prevent"])
                  }, [
                    (b(!0), S(ce, null, Pe(_i.value, (f) => (b(), S("input", {
                      key: f.key,
                      type: "hidden",
                      name: f.key,
                      value: f.value
                    }, null, 8, tT))), 128)),
                    c("div", nT, [
                      c("label", {
                        class: "library-quick-filter-search",
                        title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                      }, [
                        c("span", null, [
                          ke(p(g(m)("library", "Search")) + " ", 1),
                          E[30] || (E[30] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                        ]),
                        je(c("input", {
                          ref_key: "quickSearchInput",
                          ref: Ei,
                          "onUpdate:modelValue": E[1] || (E[1] = (f) => F.q = f),
                          "data-library-quick-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder"),
                          onInput: Te
                        }, null, 40, aT), [
                          [ni, F.q]
                        ])
                      ], 8, iT)
                    ]),
                    c("label", rT, [
                      ke(p(g(m)("library", "Sort")), 1),
                      je(c("select", {
                        "onUpdate:modelValue": E[2] || (E[2] = (f) => F.sort = f),
                        name: "sort",
                        onChange: L
                      }, [
                        c("option", sT, p(g(m)("library", "Title")), 1),
                        c("option", oT, p(g(m)("library", "Date added")), 1),
                        c("option", lT, p(g(m)("library", "Publication date")), 1),
                        c("option", cT, p(g(m)("library", "Series")), 1),
                        c("option", uT, p(g(m)("library", "Recently opened")), 1),
                        c("option", dT, p(g(m)("library", "Format")), 1)
                      ], 544), [
                        [mn, F.sort]
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
                        class: we({ active: xt.value === "compact" }),
                        "aria-pressed": xt.value === "compact" ? "true" : "false",
                        onClick: E[3] || (E[3] = (f) => bs("compact"))
                      }, p(g(m)("library", "Compact")), 11, hT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: we({ active: xt.value === "gallery" }),
                        "aria-pressed": xt.value === "gallery" ? "true" : "false",
                        onClick: E[4] || (E[4] = (f) => bs("gallery"))
                      }, p(g(m)("library", "Gallery")), 11, pT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: we({ active: xt.value === "list" }),
                        "aria-pressed": xt.value === "list" ? "true" : "false",
                        onClick: E[5] || (E[5] = (f) => bs("list"))
                      }, p(g(m)("library", "List")), 11, vT),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: we({ active: xt.value === "shelf" }),
                        "aria-pressed": xt.value === "shelf" ? "true" : "false",
                        onClick: E[6] || (E[6] = (f) => bs("shelf"))
                      }, p(g(m)("library", "Shelf")), 11, gT)
                    ], 8, fT)
                  ], 40, eT),
                  c("details", mT, [
                    c("summary", bT, [
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Facets narrow the current results"),
                        "aria-label": `${g(m)("library", "Filters")}: ${g(m)("library", "Facets narrow the current results")}`
                      }, p(g(m)("library", "Filters")), 9, yT),
                      c("b", _T, p(F.shelf ? g(m)("library", "this shelf") : fn.value.length > 0 ? g(m)("library", "current results") : g(m)("library", "whole catalogue")), 1)
                    ]),
                    c("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": g(m)("library", "Catalogue search and filters"),
                      onSubmit: Ye(tt, ["prevent"])
                    }, [
                      c("label", null, [
                        ke(p(g(m)("library", "Type")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[7] || (E[7] = (f) => F.type = f),
                          name: "type"
                        }, [
                          c("option", CT, p(g(m)("library", "All types")), 1),
                          (b(!0), S(ce, null, Pe(O.value, (f) => (b(), S("option", {
                            key: f,
                            value: f
                          }, p(f), 9, ST))), 128))
                        ], 512), [
                          [mn, F.type]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Publisher")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[8] || (E[8] = (f) => F.publisher = f),
                          name: "publisher"
                        }, [
                          c("option", ET, p(g(m)("library", "All publishers")), 1),
                          (b(!0), S(ce, null, Pe(A.value, (f) => (b(), S("option", {
                            key: f,
                            value: f
                          }, p(f), 9, TT))), 128))
                        ], 512), [
                          [mn, F.publisher]
                        ])
                      ]),
                      c("div", AT, [
                        c("label", kT, p(g(m)("library", "Series / periodical")), 1),
                        je(c("input", {
                          id: "library-publication-search",
                          "onUpdate:modelValue": E[9] || (E[9] = (f) => fe.value = f),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-publication-suggestions",
                          "aria-expanded": Z.value && ie.value.length > 0 ? "true" : "false",
                          onFocus: E[10] || (E[10] = (f) => Z.value = !0),
                          onKeydown: E[11] || (E[11] = Wt((f) => Z.value = !1, ["escape"]))
                        }, null, 40, OT), [
                          [ni, fe.value]
                        ]),
                        c("input", {
                          type: "hidden",
                          name: "publication",
                          value: F.publication
                        }, null, 8, NT),
                        Z.value && ie.value.length > 0 ? (b(), S("ul", xT, [
                          (b(!0), S(ce, null, Pe(ie.value, (f) => (b(), S("li", {
                            key: f,
                            role: "option"
                          }, [
                            c("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: E[12] || (E[12] = Ye(() => {
                              }, ["prevent"])),
                              onClick: (H) => Lt(f, H)
                            }, p(f), 41, LT)
                          ]))), 128))
                        ])) : j("", !0),
                        c("button", RT, p(g(m)("library", "Apply series")), 1)
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Publication year")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[13] || (E[13] = (f) => F.year = f),
                          name: "year"
                        }, [
                          c("option", IT, p(g(m)("library", "All years")), 1),
                          (b(!0), S(ce, null, Pe(K.value, (f) => (b(), S("option", {
                            key: f,
                            value: f
                          }, p(f), 9, PT))), 128))
                        ], 512), [
                          [mn, F.year]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Creator")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[14] || (E[14] = (f) => F.creator = f),
                          name: "creator",
                          title: g(m)("library", "Exact full-field creator matches only")
                        }, [
                          c("option", MT, p(g(m)("library", "All creators")), 1),
                          (b(!0), S(ce, null, Pe(M.value, (f) => (b(), S("option", {
                            key: f,
                            value: f
                          }, p(f), 9, $T))), 128))
                        ], 8, DT), [
                          [mn, F.creator]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Nextcloud tag")), 1),
                        je(c("input", {
                          "onUpdate:modelValue": E[15] || (E[15] = (f) => F.tag = f),
                          type: "text",
                          name: "tag",
                          placeholder: g(m)("library", "photography")
                        }, null, 8, FT), [
                          [ni, F.tag]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Format")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[16] || (E[16] = (f) => F.format = f),
                          name: "format"
                        }, [
                          c("option", zT, p(g(m)("library", "All formats")), 1),
                          (b(!0), S(ce, null, Pe(T.value, (f) => (b(), S("option", {
                            key: f,
                            value: f
                          }, p(ir(f)), 9, UT))), 128))
                        ], 512), [
                          [mn, F.format]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Shelf")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[17] || (E[17] = (f) => F.shelf = f),
                          name: "shelf"
                        }, [
                          c("option", BT, p(g(m)("library", "All shelves")), 1),
                          (b(!0), S(ce, null, Pe(_.value, (f) => (b(), S("option", {
                            key: f,
                            value: f
                          }, p(f), 9, HT))), 128))
                        ], 512), [
                          [mn, F.shelf]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Scan status")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[18] || (E[18] = (f) => F.status = f),
                          name: "status"
                        }, [
                          c("option", jT, p(g(m)("library", "All scan statuses")), 1),
                          (b(!0), S(ce, null, Pe(oe.value, (f) => (b(), S("option", {
                            key: f,
                            value: f
                          }, p(f), 9, VT))), 128))
                        ], 512), [
                          [mn, F.status]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Workflow status")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[19] || (E[19] = (f) => F.workflowStatus = f),
                          name: "workflowStatus"
                        }, [
                          c("option", GT, p(g(m)("library", "All workflow statuses")), 1),
                          (b(!0), S(ce, null, Pe(de.value, (f) => (b(), S("option", {
                            key: f,
                            value: f
                          }, p(f), 9, KT))), 128))
                        ], 512), [
                          [mn, F.workflowStatus]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Genre")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[20] || (E[20] = (f) => F.genre = f),
                          name: "genre"
                        }, [
                          c("option", WT, p(g(m)("library", "All genres")), 1),
                          (b(!0), S(ce, null, Pe(ne.value, (f) => (b(), S("option", {
                            key: f,
                            value: f
                          }, p(f), 9, qT))), 128))
                        ], 512), [
                          [mn, F.genre]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Classification")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[21] || (E[21] = (f) => F.classification = f),
                          name: "classification"
                        }, [
                          c("option", YT, p(g(m)("library", "All classifications")), 1),
                          (b(!0), S(ce, null, Pe(pe.value, (f) => (b(), S("option", {
                            key: f,
                            value: f
                          }, p(f), 9, XT))), 128))
                        ], 512), [
                          [mn, F.classification]
                        ])
                      ]),
                      c("label", null, [
                        ke(p(g(m)("library", "Suggested updates")), 1),
                        je(c("select", {
                          "onUpdate:modelValue": E[22] || (E[22] = (f) => F.scannerConflicts = f),
                          name: "scannerConflicts"
                        }, [
                          c("option", ZT, p(g(m)("library", "All metadata")), 1),
                          c("option", JT, p(g(m)("library", "Suggested updates")), 1)
                        ], 512), [
                          [mn, F.scannerConflicts]
                        ])
                      ]),
                      c("button", QT, p(g(m)("library", "Apply filters")), 1),
                      c("a", eA, p(g(m)("library", "Clear")), 1)
                    ], 40, wT)
                  ]),
                  c("section", tA, [
                    c("h3", nA, p(g(m)("library", "Shelves")), 1),
                    c("div", iA, [
                      P.value.length > 0 ? (b(), S("label", {
                        key: 0,
                        class: "library-shortcut-select-card library-periodical-groups",
                        title: g(m)("library", "Jump into recurring publications with one click.")
                      }, [
                        c("span", null, p(g(m)("library", "Series / periodicals")), 1),
                        c("select", { onChange: fl }, [
                          c("option", rA, p(g(m)("library", "Choose series")), 1),
                          (b(!0), S(ce, null, Pe(P.value, (f) => (b(), S("option", {
                            key: f.publication,
                            value: Bp(f.publication)
                          }, p(f.publication) + " · " + p(f.itemCount), 9, sA))), 128))
                        ], 32)
                      ], 8, aA)) : j("", !0),
                      K.value.length > 0 ? (b(), S("label", oA, [
                        c("span", null, p(g(m)("library", "Publication year")), 1),
                        c("select", { onChange: fl }, [
                          c("option", lA, p(g(m)("library", "Choose year")), 1),
                          (b(!0), S(ce, null, Pe(K.value, (f) => (b(), S("option", {
                            key: f,
                            value: Hp(f)
                          }, p(f), 9, cA))), 128))
                        ], 32)
                      ])) : j("", !0),
                      M.value.length > 0 ? (b(), S("label", uA, [
                        c("span", null, p(g(m)("library", "Creator")), 1),
                        c("select", { onChange: fl }, [
                          c("option", dA, p(g(m)("library", "Choose creator")), 1),
                          (b(!0), S(ce, null, Pe(M.value, (f) => (b(), S("option", {
                            key: f,
                            value: jp(f)
                          }, p(f), 9, fA))), 128))
                        ], 32)
                      ])) : j("", !0)
                    ])
                  ]),
                  c("section", hA, [
                    c("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(m)("library", "Collections")), 9, pA),
                    c("form", {
                      method: "post",
                      action: jt.value,
                      class: "library-saved-collection-save-form",
                      title: dl.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ut.value
                      }, null, 8, gA),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: $p.value
                      }, null, 8, mA),
                      c("label", null, [
                        ke(p(g(m)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !dl.value,
                          autocomplete: "off"
                        }, null, 8, bA)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !dl.value,
                        title: g(m)("library", "Save current view")
                      }, p(g(m)("library", "Save")), 9, yA)
                    ], 8, vA),
                    ct.value.length > 0 ? (b(), S("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (b(!0), S(ce, null, Pe(ct.value, (f) => (b(), S("article", {
                        key: f.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: zp(f.filters)
                        }, [
                          c("strong", null, p(f.name), 1),
                          c("span", null, p(g(Un)("library", "%n item", "%n items", Number(f.count || 0))), 1)
                        ], 8, wA),
                        c("form", {
                          method: "post",
                          action: Up(f.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: ut.value
                          }, null, 8, SA),
                          c("button", EA, p(g(m)("library", "Delete")), 1)
                        ], 8, CA)
                      ]))), 128))
                    ], 8, _A)) : j("", !0)
                  ]),
                  st.value.length > 0 ? (b(), S("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", AA, [
                      E[31] || (E[31] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, p(g(m)("library", "Batch actions")), 9, kA),
                      c("small", OA, p(g(m)("library", "Batch actions for selected publications")), 1),
                      c("b", NA, p(g(Un)("library", "%n publication selected", "%n publications selected", st.value.length)), 1)
                    ]),
                    c("p", xA, p(g(Un)("library", "%n publication selected", "%n publications selected", st.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: us
                    }, [
                      c("form", {
                        method: "post",
                        action: w.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ut.value
                        }, null, 8, RA),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, IA)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, p(g(m)("library", "Apply")), 9, PA)
                      ], 8, LA),
                      c("form", {
                        method: "post",
                        action: k.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ut.value
                        }, null, 8, MA),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, $A)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, p(g(m)("library", "Remove")), 9, FA)
                      ], 8, DA),
                      c("form", {
                        method: "post",
                        action: R.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ut.value
                        }, null, 8, UA),
                        (b(!0), S(ce, null, Pe(Vi.value, (f) => (b(), S("input", {
                          key: `reset-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, BA))), 128)),
                        E[32] || (E[32] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Reset metadata")), 9, HA)
                      ], 8, zA),
                      c("form", {
                        method: "post",
                        action: N.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ut.value
                        }, null, 8, VA),
                        (b(!0), S(ce, null, Pe(Vi.value, (f) => (b(), S("input", {
                          key: `edit-preview-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, GA))), 128)),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Field")), 1),
                          c("select", KA, [
                            c("option", WA, p(g(m)("library", "Publication type")), 1),
                            c("option", qA, p(g(m)("library", "Subtitle")), 1),
                            c("option", YA, p(g(m)("library", "Creators")), 1),
                            c("option", XA, p(g(m)("library", "Series / periodical")), 1),
                            c("option", ZA, p(g(m)("library", "Publication date")), 1),
                            c("option", JA, p(g(m)("library", "Language")), 1),
                            c("option", QA, p(g(m)("library", "Publisher")), 1),
                            c("option", e2, p(g(m)("library", "Genres")), 1),
                            c("option", t2, p(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(g(m)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, n2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, p(g(m)("library", "Preview edit")), 9, i2)
                      ], 8, jA),
                      c("form", {
                        method: "post",
                        action: z.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: ut.value
                        }, null, 8, r2),
                        (b(!0), S(ce, null, Pe(Vi.value, (f) => (b(), S("input", {
                          key: `cover-${f.key}`,
                          type: "hidden",
                          name: f.key,
                          value: f.value
                        }, null, 8, s2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Fresh covers")), 9, o2)
                      ], 8, a2)
                    ], 32)
                  ], 8, TA)) : j("", !0)
                ], 8, QE),
                Ht.value ? (b(), S("p", l2, p(Ht.value), 1)) : j("", !0),
                Pn.value ? (b(), S("p", c2, p(Pn.value), 1)) : j("", !0),
                Ct.value ? (b(), S("p", u2, p(Ct.value), 1)) : j("", !0),
                ge.value ? (b(), S("section", d2, [
                  c("p", f2, p(_e.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: V.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : J.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(re.value), 9, h2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    c("span", null, p(g(Un)("library", "%n item", "%n items", B.value.total)), 1),
                    I.value?.earliestYear && I.value?.latestYear ? (b(), S("span", v2, p(I.value.earliestYear) + "–" + p(I.value.latestYear), 1)) : j("", !0),
                    I.value?.datedCount ? (b(), S("span", g2, p(I.value.datedCount) + " " + p(g(m)("library", "dated")), 1)) : j("", !0),
                    I.value?.undatedCount > 0 ? (b(), S("span", m2, p(I.value.undatedCount) + " " + p(g(m)("library", "undated")), 1)) : j("", !0)
                  ], 8, p2),
                  G.value && I.value ? (b(), S("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(g(m)("library", "Publication contents")), 1),
                    c("span", null, p(g(Un)("library", "%n item", "%n items", I.value.itemCount)), 1),
                    I.value.earliestYear && I.value.latestYear ? (b(), S("span", y2, p(I.value.earliestYear) + "–" + p(I.value.latestYear), 1)) : j("", !0),
                    c("span", null, p(I.value.datedCount) + " " + p(g(m)("library", "with issue/date coverage")), 1),
                    I.value.undatedCount > 0 ? (b(), S("span", _2, p(I.value.undatedCount) + " " + p(g(m)("library", "without dates yet")), 1)) : j("", !0),
                    c("span", null, p(g(m)("library", "read-only grouping")), 1)
                  ], 8, b2)) : j("", !0),
                  G.value && I.value?.issueGroups?.length ? (b(), S("section", w2, [
                    c("div", null, [
                      c("p", C2, p(g(m)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(m)("library", "Read-only issue/date grouping")), 9, S2)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(m)("library", "Visual issue strip")
                    }, [
                      (b(!0), S(ce, null, Pe(I.value.issueGroups, (f) => (b(), S("a", {
                        key: `strip-${f.label}`,
                        class: "library-issue-strip-card",
                        href: f.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(f.label), 1),
                        c("strong", null, p(f.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        c("small", null, p(g(Un)("library", "%n item", "%n items", f.items?.length || 0)), 1)
                      ], 8, T2))), 128))
                    ], 8, E2),
                    I.value.gapRanges?.length ? (b(), S("p", A2, p(g(m)("library", "Gap")) + ": " + p(I.value.gapRanges.join(", ")), 1)) : j("", !0),
                    (b(!0), S(ce, null, Pe(I.value.issueGroups, (f) => (b(), S("div", {
                      key: f.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(f.label), 1),
                      c("ol", null, [
                        (b(!0), S(ce, null, Pe(f.items, (H, Oe) => (b(), S("li", {
                          key: H.itemId
                        }, [
                          c("span", k2, p(H.issueLabel), 1),
                          c("a", {
                            href: H.detailsUrl || "#"
                          }, p(H.title), 9, O2),
                          c("small", null, [
                            ke(p(H.publicationType), 1),
                            H.publicationDate ? (b(), S(ce, { key: 0 }, [
                              ke(" · " + p(H.publicationDate), 1)
                            ], 64)) : j("", !0)
                          ]),
                          c("small", N2, [
                            Oe > 0 ? (b(), S(ce, { key: 0 }, [
                              ke(p(g(m)("library", "Previous issue")), 1)
                            ], 64)) : j("", !0),
                            Oe > 0 && Oe < f.items.length - 1 ? (b(), S(ce, { key: 1 }, [
                              ke(" · ")
                            ], 64)) : j("", !0),
                            Oe < f.items.length - 1 ? (b(), S(ce, { key: 2 }, [
                              ke(p(g(m)("library", "Next issue")), 1)
                            ], 64)) : j("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    I.value.unknownIssueItems?.length ? (b(), S("details", x2, [
                      c("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(m)("library", "Unknown issue/date")) + " · " + p(I.value.unknownIssueItems.length), 9, L2)
                    ])) : j("", !0)
                  ])) : j("", !0),
                  c("p", null, [
                    c("a", {
                      href: le.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(m)("library", "Back to full catalogue")), 9, R2)
                  ])
                ])) : j("", !0),
                c("div", I2, [
                  c("p", P2, [
                    ke(p(g(m)("library", "Showing")) + " " + p(B.value.from) + "–" + p(B.value.to) + " " + p(g(m)("library", "of")) + " " + p(B.value.total) + " " + p(g(m)("library", "catalogue items")), 1),
                    fn.value.length > 0 ? (b(), S("span", D2, [
                      E[33] || (E[33] = ke(" · ", -1)),
                      c("a", M2, p(g(m)("library", "Clear all filters")), 1)
                    ])) : j("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    c("span", F2, [
                      ke(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                      B.value.total > 0 ? (b(), S("span", z2, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : j("", !0)
                    ]),
                    B.value.previousUrl ? (b(), S("a", {
                      key: 0,
                      href: B.value.previousUrl
                    }, p(g(m)("library", "Previous")), 9, U2)) : (b(), S("span", B2, p(g(m)("library", "Previous")), 1)),
                    B.value.nextUrl ? (b(), S("a", {
                      key: 2,
                      href: B.value.nextUrl
                    }, p(g(m)("library", "Next")), 9, H2)) : (b(), S("span", j2, p(g(m)("library", "Next")), 1))
                  ], 8, $2)
                ]),
                fn.value.length > 0 ? (b(), S("nav", {
                  key: 4,
                  class: "library-active-filter-chips",
                  "aria-label": g(m)("library", "Active filters")
                }, [
                  c("span", null, p(g(m)("library", "Active filters")), 1),
                  (b(!0), S(ce, null, Pe(fn.value, (f) => (b(), S("a", {
                    key: f.key,
                    href: yt(f.key),
                    class: "library-filter-chip",
                    "aria-label": `${g(m)("library", "Remove filter")}: ${f.label}`,
                    onClick: Ye((H) => nr(f.key), ["prevent"])
                  }, [
                    c("strong", null, p(f.label) + ":", 1),
                    ke(" " + p(f.value) + " ", 1),
                    E[34] || (E[34] = c("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, G2))), 128))
                ], 8, V2)) : j("", !0),
                h.value.length === 0 ? (b(), S("div", {
                  key: 5,
                  class: we(["library-empty-content", { "library-first-run-guidance": Re.value || Ze.value, "library-filter-empty-state": et.value && !Re.value && !Ze.value }]),
                  role: "status"
                }, [
                  Re.value ? (b(), S(ce, { key: 0 }, [
                    c("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(m)("library", "Start with one Library root")), 9, K2),
                    c("p", W2, [
                      c("a", {
                        href: ue.value,
                        class: "button primary"
                      }, p(g(m)("library", "Add a Library root")), 9, q2),
                      c("span", Y2, p(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Ze.value ? (b(), S(ce, { key: 1 }, [
                    c("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(m)("library", "No enabled Library roots")), 9, X2),
                    c("p", Z2, [
                      c("a", {
                        href: ue.value,
                        class: "button primary"
                      }, p(g(m)("library", "Open Library settings")), 9, J2)
                    ])
                  ], 64)) : et.value ? (b(), S(ce, { key: 2 }, [
                    c("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(m)("library", "No matches for the current filters")), 9, Q2),
                    c("p", ek, [
                      c("a", {
                        href: Et(),
                        class: "button secondary"
                      }, p(g(m)("library", "Clear search")), 9, tk),
                      c("a", nk, p(g(m)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (b(), S(ce, { key: 3 }, [
                    c("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(m)("library", "No catalogue items yet")), 9, ik),
                    c("p", ak, [
                      c("a", {
                        href: ue.value,
                        class: "button primary"
                      }, p(g(m)("library", "Run a scan from settings")), 9, rk)
                    ])
                  ], 64))
                ], 2)) : j("", !0),
                h.value.length > 0 ? (b(), S("label", sk, [
                  c("input", {
                    type: "checkbox",
                    checked: st.value.length === h.value.length,
                    onChange: Ja
                  }, null, 40, ok),
                  ke(" " + p(g(m)("library", "Select all publications on this page")), 1)
                ])) : j("", !0),
                h.value.length > 0 && xt.value === "list" ? (b(), S("ul", lk, [
                  (b(!0), S(ce, null, Pe(h.value, (f) => (b(), S("li", {
                    key: f.id,
                    class: we(["library-catalogue-list-row", { "library-catalogue-list-row--selected": An.value.has(Number(f.id)), "library-catalogue-list-row--open": Mn.value && Number(Dn.value) === Number(f.id) }])
                  }, [
                    c("label", ck, [
                      c("input", {
                        type: "checkbox",
                        checked: An.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (H) => Ca(f.id, H.currentTarget.checked)
                      }, null, 40, uk)
                    ]),
                    c("div", dk, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (H) => vn(f, H)
                      }, [
                        c("bdi", hk, p(f.title), 1)
                      ], 8, fk),
                      f.creators ? (b(), S("span", pk, [
                        c("bdi", vk, p(f.creators), 1)
                      ])) : j("", !0)
                    ]),
                    c("dl", gk, [
                      f.publication ? (b(), S("div", mk, [
                        c("dt", null, p(g(m)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", bk, p(f.publication), 1)
                        ])
                      ])) : j("", !0),
                      f.publicationDate ? (b(), S("div", yk, [
                        c("dt", null, p(g(m)("library", "Publication date")), 1),
                        c("dd", null, p(f.publicationDate), 1)
                      ])) : j("", !0),
                      f.extension || f.publicationType ? (b(), S("div", _k, [
                        c("dt", null, p(g(m)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: we(f.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: f.extension ? "ltr" : "auto"
                          }, p(f.extension ? ir(f.extension) : f.publicationType), 11, wk)
                        ])
                      ])) : j("", !0),
                      f.shelf ? (b(), S("div", Ck, [
                        c("dt", null, p(g(m)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", Sk, p(f.shelf), 1)
                        ])
                      ])) : j("", !0)
                    ]),
                    c("div", Ek, [
                      c("a", {
                        class: "button primary",
                        href: f.openUrl
                      }, p(g(m)("library", "Open")), 9, Tk),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (H) => vn(f, H)
                      }, p(g(m)("library", "Details")), 9, Ak)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (b(), S("div", {
                  key: 8,
                  class: we(["library-cover-gallery", Xa.value])
                }, [
                  (b(!0), S(ce, null, Pe(h.value, (f) => (b(), S("article", {
                    key: f.id,
                    class: we(["library-cover-card", { "library-cover-card--cover-loaded": ar(f) === "loaded", "library-cover-card--cover-error": ar(f) === "error", "library-cover-card--selected": An.value.has(Number(f.id)), "library-cover-card--open": Mn.value && Number(Dn.value) === Number(f.id) }])
                  }, [
                    c("label", kk, [
                      c("input", {
                        type: "checkbox",
                        checked: An.value.has(Number(f.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${f.title}`,
                        onChange: (H) => Ca(f.id, H.currentTarget.checked)
                      }, null, 40, Ok)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${f.id} library-card-title-${f.id}`,
                      "aria-expanded": Mn.value && Number(Dn.value) === Number(f.id) ? "true" : "false",
                      onClick: (H) => vn(f, H)
                    }, [
                      c("span", {
                        id: `library-details-action-${f.id}`,
                        class: "hidden-visually"
                      }, p(g(m)("library", "Details")), 9, xk),
                      c("span", Lk, [
                        ar(f) === "loading" ? (b(), S("span", Rk)) : j("", !0),
                        c("img", {
                          class: we(["library-cover-image", { "library-cover-image--loaded": ar(f) === "loaded" }]),
                          src: f.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (H) => Vp(f),
                          onError: (H) => Gp(f)
                        }, null, 42, Ik),
                        ar(f) === "error" ? (b(), S("span", Pk, p(g(m)("library", "Cover unavailable")), 1)) : j("", !0)
                      ])
                    ], 8, Nk),
                    c("form", {
                      method: "post",
                      action: f.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Ye((H) => gu(f, H), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: ut.value
                      }, null, 8, Mk),
                      E[35] || (E[35] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: f.starred ? "0" : "1"
                      }, null, 8, $k),
                      c("button", {
                        type: "submit",
                        class: we(["library-cover-star-button", { "library-cover-star-button--starred": f.starred }]),
                        "aria-pressed": f.starred ? "true" : "false",
                        title: f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": f.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": rr[f.id] ? "true" : void 0,
                        disabled: rr[f.id],
                        onClick: Ye((H) => gu(f, H), ["prevent"])
                      }, p(f.starred ? "★" : "☆"), 11, Fk),
                      sr[f.id] ? (b(), S("span", {
                        key: 0,
                        "data-library-star-error": f.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(sr[f.id]), 9, zk)) : j("", !0)
                    ], 40, Dk),
                    c("div", Uk, [
                      c("div", Bk, [
                        c("h3", {
                          id: `library-card-title-${f.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (H) => vn(f, H)
                          }, [
                            c("bdi", Vk, p(f.title), 1)
                          ], 8, jk)
                        ], 8, Hk),
                        f.creators ? (b(), S("p", Gk, [
                          c("bdi", Kk, p(f.creators), 1)
                        ])) : j("", !0),
                        hl(f) || f.extension ? (b(), S("div", Wk, [
                          f.extension ? (b(), S("span", qk, [
                            c("bdi", Yk, p(ir(f.extension)), 1)
                          ])) : j("", !0),
                          hl(f) ? (b(), S("p", Xk, [
                            c("bdi", Zk, p(hl(f)), 1)
                          ])) : j("", !0)
                        ])) : j("", !0),
                        c("div", Jk, [
                          c("a", {
                            class: "library-cover-read",
                            href: f.openUrl
                          }, p(g(m)("library", "Open")), 9, Qk),
                          me(g(fo), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: Ae(() => [
                              me(g(Ma), {
                                href: f.filesUrl
                              }, {
                                default: Ae(() => [
                                  ke(p(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              me(g(Ma), {
                                href: f.downloadUrl
                              }, {
                                default: Ae(() => [
                                  ke(p(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              me(g(Ma), {
                                href: f.detailsUrl
                              }, {
                                default: Ae(() => [
                                  ke(p(g(m)("library", "Maintenance")), 1)
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
                h.value.length > 0 ? (b(), S("nav", {
                  key: 9,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  c("span", tO, [
                    ke(p(g(m)("library", "Page")) + " " + p(B.value.page), 1),
                    B.value.total > 0 ? (b(), S("span", nO, " · " + p(B.value.from) + "–" + p(B.value.to), 1)) : j("", !0)
                  ]),
                  B.value.previousUrl ? (b(), S("a", {
                    key: 0,
                    href: B.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, iO)) : (b(), S("span", aO, p(g(m)("library", "Previous")), 1)),
                  B.value.nextUrl ? (b(), S("a", {
                    key: 2,
                    href: B.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, rO)) : (b(), S("span", sO, p(g(m)("library", "Next")), 1))
                ], 8, eO)) : j("", !0)
              ]))
            ], 8, jC)
          ]),
          _: 1
        }),
        me(g(TC), {
          ref_key: "sidebarComponent",
          ref: We,
          class: "library-native-item-sidebar",
          open: Mn.value,
          "no-toggle": "",
          loading: pt.loading,
          name: Ce.value?.title || g(m)("library", "Publication details"),
          subname: Ce.value?.creators || "",
          role: Xt.value ? "dialog" : void 0,
          "aria-modal": Xt.value ? "true" : void 0,
          "aria-labelledby": Xt.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Xt.value && Ce.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: tr,
          onClosed: ms,
          onClose: Xi
        }, {
          default: Ae(() => [
            c("div", oO, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: ds,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(Ce.value?.title || g(m)("library", "Publication details")), 513),
              pt.loading && !Ce.value ? (b(), S("p", lO, p(g(m)("library", "Loading publication details…")), 1)) : pt.error ? (b(), S("div", {
                key: 1,
                class: "library-sidebar-state",
                role: pt.missing ? "status" : "alert"
              }, [
                c("p", null, p(pt.error), 1),
                pt.missing ? j("", !0) : (b(), S("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: E[23] || (E[23] = (f) => $n(Dn.value, { historyMode: "none" }))
                }, p(g(m)("library", "Try again")), 1))
              ], 8, cO)) : Ce.value ? (b(), S(ce, { key: 2 }, [
                c("p", uO, p(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", dO, [
                  c("span", fO, p(g(m)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: Ce.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, hO),
                  c("div", pO, [
                    c("p", vO, [
                      c("bdi", gO, p(Ce.value.publicationType || g(m)("library", "Publication")), 1),
                      Ce.value.extension ? (b(), S("span", mO, [
                        E[36] || (E[36] = ke(" · ", -1)),
                        c("bdi", bO, p(ir(Ce.value.extension)), 1)
                      ])) : j("", !0)
                    ]),
                    c("div", yO, [
                      c("a", {
                        class: "button primary",
                        href: Ce.value.openUrl
                      }, p(g(m)("library", "Open")), 9, _O),
                      me(g(fo), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: Ae(() => [
                          me(g(Ma), {
                            href: Ce.value.filesUrl
                          }, {
                            default: Ae(() => [
                              ke(p(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          me(g(Ma), {
                            href: Ce.value.downloadUrl
                          }, {
                            default: Ae(() => [
                              ke(p(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          me(g(Ma), {
                            href: Ce.value.detailsUrl
                          }, {
                            default: Ae(() => [
                              ke(p(g(m)("library", "Maintenance (legacy)")), 1)
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
                  (b(), S(ce, null, Pe(Ta, (f) => c("button", {
                    key: f.key,
                    type: "button",
                    class: we({ active: Xn.value === f.key }),
                    "aria-current": Xn.value === f.key ? "page" : void 0,
                    onClick: (H) => Xn.value = f.key
                  }, p(g(m)("library", f.label)), 11, CO)), 64))
                ], 8, wO),
                Xn.value === "overview" ? (b(), S("section", SO, [
                  c("h3", EO, p(g(m)("library", "Overview")), 1),
                  Ce.value.description ? (b(), S("p", TO, [
                    c("bdi", AO, p(Ce.value.description), 1)
                  ])) : j("", !0),
                  c("dl", kO, [
                    Ce.value.publication ? (b(), S("div", OO, [
                      c("dt", null, p(g(m)("library", "Series")), 1),
                      c("dd", null, p(Ce.value.publication), 1)
                    ])) : j("", !0),
                    Ce.value.publicationDate ? (b(), S("div", NO, [
                      c("dt", null, p(g(m)("library", "Date")), 1),
                      c("dd", null, p(Ce.value.publicationDate), 1)
                    ])) : j("", !0),
                    Ce.value.publisher ? (b(), S("div", xO, [
                      c("dt", null, p(g(m)("library", "Publisher")), 1),
                      c("dd", null, p(Ce.value.publisher), 1)
                    ])) : j("", !0),
                    Ce.value.language ? (b(), S("div", LO, [
                      c("dt", null, p(g(m)("library", "Language")), 1),
                      c("dd", null, p(Ce.value.language), 1)
                    ])) : j("", !0),
                    Ce.value.shelf ? (b(), S("div", RO, [
                      c("dt", null, p(g(m)("library", "Shelf")), 1),
                      c("dd", null, p(Ce.value.shelf), 1)
                    ])) : j("", !0)
                  ])
                ])) : Xn.value === "metadata" ? (b(), S("section", IO, [
                  c("h3", PO, p(g(m)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Ye(vs, ["prevent"])
                  }, [
                    c("label", null, [
                      ke(p(g(m)("library", "Title")), 1),
                      je(c("input", {
                        "onUpdate:modelValue": E[24] || (E[24] = (f) => bt.title = f),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ni, bt.title]
                      ])
                    ]),
                    c("label", null, [
                      ke(p(g(m)("library", "Publication date")), 1),
                      je(c("input", {
                        "onUpdate:modelValue": E[25] || (E[25] = (f) => bt.publicationDate = f),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, DO), [
                        [ni, bt.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(g(m)("library", "Identifiers")), 1),
                      (b(!0), S(ce, null, Pe(bt.identifiers, (f, H) => (b(), S("div", {
                        key: H,
                        class: "library-sidebar-identifier"
                      }, [
                        je(c("input", {
                          "onUpdate:modelValue": (Oe) => f.scheme = Oe,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, MO), [
                          [ni, f.scheme]
                        ]),
                        je(c("input", {
                          "onUpdate:modelValue": (Oe) => f.displayValue = Oe,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, $O), [
                          [ni, f.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (Oe) => ul(H)
                        }, p(g(m)("library", "Remove")), 9, FO)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: ps
                      }, p(g(m)("library", "Add identifier")), 1)
                    ]),
                    c("p", zO, p(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    St.error ? (b(), S("p", UO, p(St.error), 1)) : St.saved ? (b(), S("p", BO, p(g(m)("library", "Metadata saved.")), 1)) : j("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: St.saving
                    }, p(St.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, HO)
                  ], 32),
                  Zn(Ce.value).length ? (b(), S("section", jO, [
                    c("h4", VO, p(g(m)("library", "Scanner suggestions")), 1),
                    c("p", GO, p(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (b(!0), S(ce, null, Pe(Zn(Ce.value), (f) => (b(), S("div", {
                        key: f.field
                      }, [
                        c("dt", null, p(f.field) + " · " + p(f.sourceProvenance), 1),
                        c("dd", null, [
                          ke(p(g(m)("library", "Current")) + ": " + p(f.currentValue || "—"), 1),
                          E[37] || (E[37] = c("br", null, null, -1)),
                          ke(p(g(m)("library", "Suggestion")) + ": " + p(f.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : j("", !0)
                ])) : (b(), S("section", KO, [
                  c("h3", WO, p(g(m)("library", "Activity")), 1),
                  c("dl", qO, [
                    c("div", null, [
                      c("dt", null, p(g(m)("library", "Scan status")), 1),
                      c("dd", null, p(Ce.value.scanStatus || "—"), 1)
                    ]),
                    Ce.value.workflowStatus ? (b(), S("div", YO, [
                      c("dt", null, p(g(m)("library", "Workflow")), 1),
                      c("dd", null, p(Ce.value.workflowStatus), 1)
                    ])) : j("", !0),
                    Ce.value.metadataSource ? (b(), S("div", XO, [
                      c("dt", null, p(g(m)("library", "Metadata source")), 1),
                      c("dd", null, p(Ce.value.metadataSource), 1)
                    ])) : j("", !0),
                    Ce.value.cachedPath ? (b(), S("div", ZO, [
                      c("dt", null, p(g(m)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", JO, p(Ce.value.cachedPath), 1)
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
                    disabled: !Ea.value,
                    onClick: E[26] || (E[26] = (f) => Ji(Ea.value))
                  }, p(g(m)("library", "Previous item")), 9, eN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !en.value,
                    onClick: E[27] || (E[27] = (f) => Ji(en.value))
                  }, p(g(m)("library", "Next item")), 9, tN)
                ], 8, QO)
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
function sN() {
  window.LibraryStartupWatchdog?.fail();
}
function oN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = qc("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !oN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Lm(rN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  sN(), console.error("[library] Vue startup failed", e);
}
