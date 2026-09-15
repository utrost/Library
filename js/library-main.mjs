// @__NO_SIDE_EFFECTS__
function Qc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ve = {}, ja = [], _n = () => {
}, Ff = () => !1, il = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), al = (e) => e.startsWith("onUpdate:"), pt = Object.assign, eu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, qv = Object.prototype.hasOwnProperty, qe = (e, t) => qv.call(e, t), Se = Array.isArray, $i = (e) => ps(e) === "[object Map]", ba = (e) => ps(e) === "[object Set]", Gu = (e) => ps(e) === "[object Date]", Le = (e) => typeof e == "function", tt = (e) => typeof e == "string", xn = (e) => typeof e == "symbol", Ye = (e) => e !== null && typeof e == "object", zf = (e) => (Ye(e) || Le(e)) && Le(e.then) && Le(e.catch), Uf = Object.prototype.toString, ps = (e) => Uf.call(e), Yv = (e) => ps(e).slice(8, -1), Bf = (e) => ps(e) === "[object Object]", tu = (e) => tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pr = /* @__PURE__ */ Qc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), rl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Xv = /-\w/g, Ut = rl(
  (e) => e.replace(Xv, (t) => t.slice(1).toUpperCase())
), Zv = /\B([A-Z])/g, vi = rl(
  (e) => e.replace(Zv, "-$1").toLowerCase()
), sl = rl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dl = rl(
  (e) => e ? `on${sl(e)}` : ""
), Ot = (e, t) => !Object.is(e, t), Xs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, jf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, ol = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Jv = (e) => {
  const t = tt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ku;
const ll = () => Ku || (Ku = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function un(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = tt(i) ? ng(i) : un(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (tt(e) || Ye(e))
    return e;
}
const Qv = /;(?![^(]*\))/g, eg = /:([^]+)/, tg = /\/\*[^]*?\*\//g;
function ng(e) {
  const t = {};
  return e.replace(tg, "").split(Qv).forEach((n) => {
    if (n) {
      const i = n.split(eg);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Te(e) {
  let t = "";
  if (tt(e))
    t = e;
  else if (Se(e))
    for (let n = 0; n < e.length; n++) {
      const i = Te(e[n]);
      i && (t += i + " ");
    }
  else if (Ye(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function to(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !tt(t) && (e.class = Te(t)), n && (e.style = un(n)), e;
}
const ig = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ag = /* @__PURE__ */ Qc(ig);
function Hf(e) {
  return !!e || e === "";
}
function rg(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = zi(e[i], t[i]);
  return n;
}
function Wu(e, t) {
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
  let n = Gu(e), i = Gu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = xn(e), i = xn(t), n || i)
    return e === t;
  if (n = Se(e), i = Se(t), n || i)
    return n && i ? rg(e, t) : !1;
  if (n = Ye(e), i = Ye(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = $i(e), i = $i(t), n || i || (n = ba(e), i = ba(t), n || i))
      return n && i ? Wu(e, t) : !1;
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
function sg(e, t) {
  return e.findIndex((n) => zi(n, t));
}
const Vf = (e) => !!(e && e.__v_isRef === !0), p = (e) => tt(e) ? e : e == null ? "" : Se(e) || Ye(e) && (e.toString === Uf || !Le(e.toString)) ? Vf(e) ? p(e.value) : JSON.stringify(e, Gf, 2) : String(e), Gf = (e, t) => Vf(t) ? Gf(e, t.value) : $i(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[Ml(i, r) + " =>"] = a, n),
    {}
  )
} : ba(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ml(n))
} : xn(t) ? Ml(t) : Ye(t) && !Se(t) && !Bf(t) ? String(t) : t, Ml = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    xn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function og(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let kt;
class lg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && kt && (kt.active ? (this.parent = kt, this.index = (kt.scopes || (kt.scopes = [])).push(
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
      const n = kt;
      try {
        return kt = this, t();
      } finally {
        kt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = kt, kt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (kt === this)
        kt = this.prevScope;
      else {
        let t = kt;
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
function cg() {
  return kt;
}
let et;
const Fl = /* @__PURE__ */ new WeakSet();
class Kf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kt && (kt.active ? kt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Fl.has(this) && (Fl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || qf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, qu(this), Yf(this);
    const t = et, n = kn;
    et = this, kn = !0;
    try {
      return this.fn();
    } finally {
      Xf(this), et = t, kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        au(t);
      this.deps = this.depsTail = void 0, qu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Fl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let Wf = 0, $r, Dr;
function qf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Dr, Dr = e;
    return;
  }
  e.next = $r, $r = e;
}
function nu() {
  Wf++;
}
function iu() {
  if (--Wf > 0)
    return;
  if (Dr) {
    let t = Dr;
    for (Dr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; $r; ) {
    let t = $r;
    for ($r = void 0; t; ) {
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
function Yf(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), au(i), ug(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function _c(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Zf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Zf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Xr) || (e.globalVersion = Xr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !_c(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = et, i = kn;
  et = e, kn = !0;
  try {
    Yf(e);
    const a = e.fn(e._value);
    (t.version === 0 || Ot(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    et = n, kn = i, Xf(e), e.flags &= -3;
  }
}
function au(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      au(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ug(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let kn = !0;
const Jf = [];
function di() {
  Jf.push(kn), kn = !1;
}
function fi() {
  const e = Jf.pop();
  kn = e === void 0 ? !0 : e;
}
function qu(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = et;
    et = void 0;
    try {
      t();
    } finally {
      et = n;
    }
  }
}
let Xr = 0;
class dg {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class cl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!et || !kn || et === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== et)
      n = this.activeLink = new dg(et, this), et.deps ? (n.prevDep = et.depsTail, et.depsTail.nextDep = n, et.depsTail = n) : et.deps = et.depsTail = n, Qf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = et.depsTail, n.nextDep = void 0, et.depsTail.nextDep = n, et.depsTail = n, et.deps === n && (et.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Xr++, this.notify(t);
  }
  notify(t) {
    nu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      iu();
    }
  }
}
function Qf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Qf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const wc = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ Symbol(
  ""
), Sc = /* @__PURE__ */ Symbol(
  ""
), Zr = /* @__PURE__ */ Symbol(
  ""
);
function Mt(e, t, n) {
  if (kn && et) {
    let i = wc.get(e);
    i || wc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new cl()), a.map = i, a.key = n), a.track();
  }
}
function ai(e, t, n, i, a, r) {
  const s = wc.get(e);
  if (!s) {
    Xr++;
    return;
  }
  const o = (l) => {
    l && l.trigger();
  };
  if (nu(), t === "clear")
    s.forEach(o);
  else {
    const l = Se(e), f = l && tu(n);
    if (l && n === "length") {
      const u = Number(i);
      s.forEach((h, S) => {
        (S === "length" || S === Zr || !xn(S) && S >= u) && o(h);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && o(s.get(n)), f && o(s.get(Zr)), t) {
        case "add":
          l ? f && o(s.get("length")) : (o(s.get(va)), $i(e) && o(s.get(Sc)));
          break;
        case "delete":
          l || (o(s.get(va)), $i(e) && o(s.get(Sc)));
          break;
        case "set":
          $i(e) && o(s.get(va));
          break;
      }
  }
  iu();
}
function Pa(e) {
  const t = /* @__PURE__ */ Ke(e);
  return t === e ? t : (Mt(t, "iterate", Zr), /* @__PURE__ */ wn(e) ? t : t.map(Nn));
}
function ul(e) {
  return Mt(e = /* @__PURE__ */ Ke(e), "iterate", Zr), e;
}
function Bn(e, t) {
  return /* @__PURE__ */ hi(e) ? Xa(/* @__PURE__ */ ga(e) ? Nn(t) : t) : Nn(t);
}
const fg = {
  __proto__: null,
  [Symbol.iterator]() {
    return zl(this, Symbol.iterator, (e) => Bn(this, e));
  },
  concat(...e) {
    return Pa(this).concat(
      ...e.map((t) => Se(t) ? Pa(t) : t)
    );
  },
  entries() {
    return zl(this, "entries", (e) => (e[1] = Bn(this, e[1]), e));
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
      (n) => n.map((i) => Bn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Zn(
      this,
      "find",
      e,
      t,
      (n) => Bn(this, n),
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
      (n) => Bn(this, n),
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
    return Ul(this, "includes", e);
  },
  indexOf(...e) {
    return Ul(this, "indexOf", e);
  },
  join(e) {
    return Pa(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ul(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Zn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return br(this, "pop");
  },
  push(...e) {
    return br(this, "push", e);
  },
  reduce(e, ...t) {
    return Yu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Yu(this, "reduceRight", e, t);
  },
  shift() {
    return br(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Zn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return br(this, "splice", e);
  },
  toReversed() {
    return Pa(this).toReversed();
  },
  toSorted(e) {
    return Pa(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pa(this).toSpliced(...e);
  },
  unshift(...e) {
    return br(this, "unshift", e);
  },
  values() {
    return zl(this, "values", (e) => Bn(this, e));
  }
};
function zl(e, t, n) {
  const i = ul(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ wn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const hg = Array.prototype;
function Zn(e, t, n, i, a, r) {
  const s = ul(e), o = s !== e && !/* @__PURE__ */ wn(e), l = s[t];
  if (l !== hg[t]) {
    const h = l.apply(e, r);
    return o ? Nn(h) : h;
  }
  let f = n;
  s !== e && (o ? f = function(h, S) {
    return n.call(this, Bn(e, h), S, e);
  } : n.length > 2 && (f = function(h, S) {
    return n.call(this, h, S, e);
  }));
  const u = l.call(s, f, i);
  return o && a ? a(u) : u;
}
function Yu(e, t, n, i) {
  const a = ul(e), r = a !== e && !/* @__PURE__ */ wn(e);
  let s = n, o = !1;
  a !== e && (r ? (o = i.length === 0, s = function(f, u, h) {
    return o && (o = !1, f = Bn(e, f)), n.call(this, f, Bn(e, u), h, e);
  }) : n.length > 3 && (s = function(f, u, h) {
    return n.call(this, f, u, h, e);
  }));
  const l = a[t](s, ...i);
  return o ? Bn(e, l) : l;
}
function Ul(e, t, n) {
  const i = /* @__PURE__ */ Ke(e);
  Mt(i, "iterate", Zr);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ ou(n[0]) ? (n[0] = /* @__PURE__ */ Ke(n[0]), i[t](...n)) : a;
}
function br(e, t, n = []) {
  di(), nu();
  const i = (/* @__PURE__ */ Ke(e))[t].apply(e, n);
  return iu(), fi(), i;
}
const pg = /* @__PURE__ */ Qc("__proto__,__v_isRef,__isVue"), eh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(xn)
);
function vg(e) {
  xn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ke(this);
  return Mt(t, "has", e), t.hasOwnProperty(e);
}
class th {
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
      return i === (a ? r ? Eg : rh : r ? ah : ih).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const s = Se(t);
    if (!a) {
      let l;
      if (s && (l = fg[n]))
        return l;
      if (n === "hasOwnProperty")
        return vg;
    }
    const o = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Bt(t) ? t : i
    );
    if ((xn(n) ? eh.has(n) : pg(n)) || (a || Mt(t, "get", n), r))
      return o;
    if (/* @__PURE__ */ Bt(o)) {
      const l = s && tu(n) ? o : o.value;
      return a && Ye(l) ? /* @__PURE__ */ Jr(l) : l;
    }
    return Ye(o) ? a ? /* @__PURE__ */ Jr(o) : /* @__PURE__ */ Dt(o) : o;
  }
}
class nh extends th {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const s = Se(t) && tu(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ hi(r);
      if (!/* @__PURE__ */ wn(i) && !/* @__PURE__ */ hi(i) && (r = /* @__PURE__ */ Ke(r), i = /* @__PURE__ */ Ke(i)), !s && /* @__PURE__ */ Bt(r) && !/* @__PURE__ */ Bt(i))
        return f || (r.value = i), !0;
    }
    const o = s ? Number(n) < t.length : qe(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Bt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ke(a) && l && (o ? Ot(i, r) && ai(t, "set", n, i) : ai(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = qe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ai(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!xn(n) || !eh.has(n)) && Mt(t, "has", n), i;
  }
  ownKeys(t) {
    return Mt(
      t,
      "iterate",
      Se(t) ? "length" : va
    ), Reflect.ownKeys(t);
  }
}
class gg extends th {
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
const mg = /* @__PURE__ */ new nh(), bg = /* @__PURE__ */ new gg(), yg = /* @__PURE__ */ new nh(!0);
const Cc = (e) => e, Ds = (e) => Reflect.getPrototypeOf(e);
function _g(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ke(a), s = $i(r), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, f = a[e](...i), u = n ? Cc : t ? Xa : Nn;
    return !t && Mt(
      r,
      "iterate",
      l ? Sc : va
    ), pt(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: h, done: S } = f.next();
          return S ? { value: h, done: S } : {
            value: o ? [u(h[0]), u(h[1])] : u(h),
            done: S
          };
        }
      }
    );
  };
}
function Ms(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wg(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ke(r), o = /* @__PURE__ */ Ke(a);
      e || (Ot(a, o) && Mt(s, "get", a), Mt(s, "get", o));
      const { has: l } = Ds(s), f = t ? Cc : e ? Xa : Nn;
      if (l.call(s, a))
        return f(r.get(a));
      if (l.call(s, o))
        return f(r.get(o));
      r !== s && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Mt(/* @__PURE__ */ Ke(a), "iterate", va), a.size;
    },
    has(a) {
      const r = this.__v_raw, s = /* @__PURE__ */ Ke(r), o = /* @__PURE__ */ Ke(a);
      return e || (Ot(a, o) && Mt(s, "has", a), Mt(s, "has", o)), a === o ? r.has(a) : r.has(a) || r.has(o);
    },
    forEach(a, r) {
      const s = this, o = s.__v_raw, l = /* @__PURE__ */ Ke(o), f = t ? Cc : e ? Xa : Nn;
      return !e && Mt(l, "iterate", va), o.forEach((u, h) => a.call(r, f(u), f(h), s));
    }
  };
  return pt(
    n,
    e ? {
      add: Ms("add"),
      set: Ms("set"),
      delete: Ms("delete"),
      clear: Ms("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ke(this), s = Ds(r), o = /* @__PURE__ */ Ke(a), l = !t && !/* @__PURE__ */ wn(a) && !/* @__PURE__ */ hi(a) ? o : a;
        return s.has.call(r, l) || Ot(a, l) && s.has.call(r, a) || Ot(o, l) && s.has.call(r, o) || (r.add(l), ai(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ wn(r) && !/* @__PURE__ */ hi(r) && (r = /* @__PURE__ */ Ke(r));
        const s = /* @__PURE__ */ Ke(this), { has: o, get: l } = Ds(s);
        let f = o.call(s, a);
        f || (a = /* @__PURE__ */ Ke(a), f = o.call(s, a));
        const u = l.call(s, a);
        return s.set(a, r), f ? Ot(r, u) && ai(s, "set", a, r) : ai(s, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ke(this), { has: s, get: o } = Ds(r);
        let l = s.call(r, a);
        l || (a = /* @__PURE__ */ Ke(a), l = s.call(r, a)), o && o.call(r, a);
        const f = r.delete(a);
        return l && ai(r, "delete", a, void 0), f;
      },
      clear() {
        const a = /* @__PURE__ */ Ke(this), r = a.size !== 0, s = a.clear();
        return r && ai(
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
    n[a] = _g(a, e, t);
  }), n;
}
function ru(e, t) {
  const n = wg(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    qe(n, a) && a in i ? n : i,
    a,
    r
  );
}
const Sg = {
  get: /* @__PURE__ */ ru(!1, !1)
}, Cg = {
  get: /* @__PURE__ */ ru(!1, !0)
}, Tg = {
  get: /* @__PURE__ */ ru(!0, !1)
};
const ih = /* @__PURE__ */ new WeakMap(), ah = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ new WeakMap(), Eg = /* @__PURE__ */ new WeakMap();
function Ag(e) {
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
function Dt(e) {
  return /* @__PURE__ */ hi(e) ? e : su(
    e,
    !1,
    mg,
    Sg,
    ih
  );
}
// @__NO_SIDE_EFFECTS__
function kg(e) {
  return su(
    e,
    !1,
    yg,
    Cg,
    ah
  );
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
  return su(
    e,
    !0,
    bg,
    Tg,
    rh
  );
}
function su(e, t, n, i, a) {
  if (!Ye(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const s = Ag(Yv(e));
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? i : n
  );
  return a.set(e, o), o;
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return /* @__PURE__ */ hi(e) ? /* @__PURE__ */ ga(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function hi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ou(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ke(t) : e;
}
function Og(e) {
  return !qe(e, "__v_skip") && Object.isExtensible(e) && jf(e, "__v_skip", !0), e;
}
const Nn = (e) => Ye(e) ? /* @__PURE__ */ Dt(e) : e, Xa = (e) => Ye(e) ? /* @__PURE__ */ Jr(e) : e;
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return oh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function sh(e) {
  return oh(e, !0);
}
function oh(e, t) {
  return /* @__PURE__ */ Bt(e) ? e : new xg(e, t);
}
class xg {
  constructor(t, n) {
    this.dep = new cl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ke(t), this._value = n ? t : Nn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ wn(t) || /* @__PURE__ */ hi(t);
    t = i ? t : /* @__PURE__ */ Ke(t), Ot(t, n) && (this._rawValue = t, this._value = i ? t : Nn(t), this.dep.trigger());
  }
}
function b(e) {
  return /* @__PURE__ */ Bt(e) ? e.value : e;
}
function li(e) {
  return Le(e) ? e() : b(e);
}
const Ng = {
  get: (e, t, n) => t === "__v_raw" ? e : b(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Bt(a) && !/* @__PURE__ */ Bt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function lh(e) {
  return /* @__PURE__ */ ga(e) ? e : new Proxy(e, Ng);
}
class Lg {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new cl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Rg(e) {
  return new Lg(e);
}
class Ig {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new cl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Xr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    et !== this)
      return qf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Zf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Pg(e, t, n = !1) {
  let i, a;
  return Le(e) ? i = e : (i = e.get, a = e.set), new Ig(i, a, n);
}
const Fs = {}, no = /* @__PURE__ */ new WeakMap();
let sa;
function $g(e, t = !1, n = sa) {
  if (n) {
    let i = no.get(n);
    i || no.set(n, i = []), i.push(e);
  }
}
function Dg(e, t, n = Ve) {
  const { immediate: i, deep: a, once: r, scheduler: s, augmentJob: o, call: l } = n, f = (I) => a ? I : /* @__PURE__ */ wn(I) || a === !1 || a === 0 ? ri(I, 1) : ri(I);
  let u, h, S, E, x = !1, A = !1;
  if (/* @__PURE__ */ Bt(e) ? (h = () => e.value, x = /* @__PURE__ */ wn(e)) : /* @__PURE__ */ ga(e) ? (h = () => f(e), x = !0) : Se(e) ? (A = !0, x = e.some((I) => /* @__PURE__ */ ga(I) || /* @__PURE__ */ wn(I)), h = () => e.map((I) => {
    if (/* @__PURE__ */ Bt(I))
      return I.value;
    if (/* @__PURE__ */ ga(I))
      return f(I);
    if (Le(I))
      return l ? l(I, 2) : I();
  })) : Le(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (S) {
      di();
      try {
        S();
      } finally {
        fi();
      }
    }
    const I = sa;
    sa = u;
    try {
      return l ? l(e, 3, [E]) : e(E);
    } finally {
      sa = I;
    }
  } : h = _n, t && a) {
    const I = h, P = a === !0 ? 1 / 0 : a;
    h = () => ri(I(), P);
  }
  const O = cg(), D = () => {
    u.stop(), O && O.active && eu(O.effects, u);
  };
  if (r && t) {
    const I = t;
    t = (...P) => {
      const ce = I(...P);
      return D(), ce;
    };
  }
  let M = A ? new Array(e.length).fill(Fs) : Fs;
  const W = (I) => {
    if (!(!(u.flags & 1) || !u.dirty && !I))
      if (t) {
        const P = u.run();
        if (I || a || x || (A ? P.some((ce, Q) => Ot(ce, M[Q])) : Ot(P, M))) {
          S && S();
          const ce = sa;
          sa = u;
          try {
            const Q = [
              P,
              // pass undefined as the old value when it's changed for the first time
              M === Fs ? void 0 : A && M[0] === Fs ? [] : M,
              E
            ];
            M = P, l ? l(t, 3, Q) : (
              // @ts-expect-error
              t(...Q)
            );
          } finally {
            sa = ce;
          }
        }
      } else
        u.run();
  };
  return o && o(W), u = new Kf(h), u.scheduler = s ? () => s(W, !1) : W, E = (I) => $g(I, !1, u), S = u.onStop = () => {
    const I = no.get(u);
    if (I) {
      if (l)
        l(I, 4);
      else
        for (const P of I) P();
      no.delete(u);
    }
  }, t ? i ? W(!0) : M = u.run() : s ? s(W.bind(null, !0), !0) : u.run(), D.pause = u.pause.bind(u), D.resume = u.resume.bind(u), D.stop = D, D;
}
function ri(e, t = 1 / 0, n) {
  if (t <= 0 || !Ye(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Bt(e))
    ri(e.value, t, n);
  else if (Se(e))
    for (let i = 0; i < e.length; i++)
      ri(e[i], t, n);
  else if (ba(e) || $i(e))
    e.forEach((i) => {
      ri(i, t, n);
    });
  else if (Bf(e)) {
    for (const i in e)
      ri(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ri(e[i], t, n);
  }
  return e;
}
function vs(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    dl(a, t, n);
  }
}
function Sn(e, t, n, i) {
  if (Le(e)) {
    const a = vs(e, t, n, i);
    return a && zf(a) && a.catch((r) => {
      dl(r, t, n);
    }), a;
  }
  if (Se(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Sn(e[r], t, n, i));
    return a;
  }
}
function dl(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ve;
  if (t) {
    let o = t.parent;
    const l = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, l, f) === !1)
            return;
      }
      o = o.parent;
    }
    if (r) {
      di(), vs(r, null, 10, [
        e,
        l,
        f
      ]), fi();
      return;
    }
  }
  Mg(e, n, a, i, s);
}
function Mg(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Wt = [];
let Mn = -1;
const Ha = [];
let Ii = null, za = 0;
const ch = /* @__PURE__ */ Promise.resolve();
let io = null;
function on(e) {
  const t = io || ch;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fg(e) {
  let t = Mn + 1, n = Wt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Wt[i], r = Qr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function lu(e) {
  if (!(e.flags & 1)) {
    const t = Qr(e), n = Wt[Wt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Qr(n) ? Wt.push(e) : Wt.splice(Fg(t), 0, e), e.flags |= 1, uh();
  }
}
function uh() {
  io || (io = ch.then(hh));
}
function dh(e) {
  if (!Se(e))
    Ii && e.id === -1 ? Ii.splice(za + 1, 0, e) : e.flags & 1 || (Ha.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ha.push(e[t]);
  uh();
}
function Xu(e, t, n = Mn + 1) {
  for (; n < Wt.length; n++) {
    const i = Wt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Wt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function fh(e) {
  if (Ha.length) {
    const t = [...new Set(Ha)].sort(
      (n, i) => Qr(n) - Qr(i)
    );
    if (Ha.length = 0, Ii) {
      for (let n = 0; n < t.length; n++)
        Ii.push(t[n]);
      return;
    }
    for (Ii = t, za = 0; za < Ii.length; za++) {
      const n = Ii[za];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ii = null, za = 0;
  }
}
const Qr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function hh(e) {
  try {
    for (Mn = 0; Mn < Wt.length; Mn++) {
      const t = Wt[Mn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), vs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Mn < Wt.length; Mn++) {
      const t = Wt[Mn];
      t && (t.flags &= -2);
    }
    Mn = -1, Wt.length = 0, fh(), io = null, (Wt.length || Ha.length) && hh();
  }
}
let Nt = null, fl = null;
function ao(e) {
  const t = Nt;
  return Nt = e, fl = e && e.type.__scopeId || null, t;
}
function zg(e) {
  fl = e;
}
function Ug() {
  fl = null;
}
const Bg = (e) => xe;
function xe(e, t = Nt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && co(-1);
    const r = ao(t), s = ci.length;
    let o;
    try {
      o = e(...a);
    } finally {
      for (let l = ci.length; l > s; l--) vu();
      ao(r), i._d && co(1);
    }
    return o;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function We(e, t) {
  if (Nt === null)
    return e;
  const n = bl(Nt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, s, o, l = Ve] = t[a];
    r && (Le(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ri(s), i.push({
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
function ea(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const o = a[s];
    r && (o.oldValue = r[s].value);
    let l = o.dir[i];
    l && (di(), Sn(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), fi());
  }
}
function mn(e, t) {
  if (zt) {
    let n = zt.provides;
    const i = zt.parent && zt.parent.provides;
    i === n && (n = zt.provides = Object.create(i)), n[e] = t;
  }
}
function Ft(e, t, n = !1) {
  const i = _a();
  if (i || Ga) {
    let a = Ga ? Ga._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Le(t) ? t.call(i && i.proxy) : t;
  }
}
const jg = /* @__PURE__ */ Symbol.for("v-scx"), Hg = () => Ft(jg);
function Vg(e, t) {
  return hl(e, null, t);
}
function Gg(e, t) {
  return hl(
    e,
    null,
    { flush: "sync" }
  );
}
function rt(e, t, n) {
  return hl(e, t, n);
}
function hl(e, t, n = Ve) {
  const { immediate: i, deep: a, flush: r, once: s } = n, o = pt({}, n), l = t && i || !t && r !== "post";
  let f;
  if (rs) {
    if (r === "sync") {
      const E = Hg();
      f = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!l) {
      const E = () => {
      };
      return E.stop = _n, E.resume = _n, E.pause = _n, E;
    }
  }
  const u = zt;
  o.call = (E, x, A) => Sn(E, u, x, A);
  let h = !1;
  r === "post" ? o.scheduler = (E) => {
    Kt(E, u && u.suspense);
  } : r !== "sync" && (h = !0, o.scheduler = (E, x) => {
    x ? E() : lu(E);
  }), o.augmentJob = (E) => {
    t && (E.flags |= 4), h && (E.flags |= 2, u && (E.id = u.uid, E.i = u));
  };
  const S = Dg(e, t, o);
  return rs && (f ? f.push(S) : l && S()), S;
}
function Kg(e, t, n) {
  const i = this.proxy, a = tt(e) ? e.includes(".") ? ph(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Le(t) ? r = t : (r = t.handler, n = t);
  const s = bs(this), o = hl(a, r.bind(i), n);
  return s(), o;
}
function ph(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Ni = /* @__PURE__ */ new WeakMap(), vh = /* @__PURE__ */ Symbol("_vte"), pl = (e) => e.__isTeleport, la = (e) => e && (e.disabled || e.disabled === ""), Wg = (e) => e && (e.defer || e.defer === ""), Zu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ju = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Tc = (e, t) => {
  const n = e && e.to;
  return tt(n) ? t ? t(n) : null : n;
}, qg = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, s, o, l, f) {
    const {
      mc: u,
      pc: h,
      pbc: S,
      o: { insert: E, querySelector: x, createText: A, createComment: O, parentNode: D }
    } = f, M = la(t.props);
    let { dynamicChildren: W } = t;
    const I = (Q, ue, Y) => {
      Q.shapeFlag & 16 && u(
        Q.children,
        ue,
        Y,
        a,
        r,
        s,
        o,
        l
      );
    }, P = (Q = t) => {
      const ue = la(Q.props), Y = Q.target = Tc(Q.props, x), se = Ec(Y, Q, A, E);
      Y && (s !== "svg" && Zu(Y) ? s = "svg" : s !== "mathml" && Ju(Y) && (s = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Y), ue || (I(Q, Y, se), Or(Q, !1)));
    }, ce = (Q) => {
      const ue = () => {
        if (Ni.get(Q) === ue) {
          if (Ni.delete(Q), la(Q.props)) {
            const Y = D(Q.el) || n;
            I(Q, Y, Q.anchor), Or(Q, !0);
          }
          P(Q);
        }
      };
      Ni.set(Q, ue), Kt(ue, r);
    };
    if (e == null) {
      const Q = t.el = A(""), ue = t.anchor = A("");
      if (E(Q, n, i), E(ue, n, i), Wg(t.props) || r && r.pendingBranch) {
        ce(t);
        return;
      }
      M && (I(t, n, ue), Or(t, !0)), P();
    } else {
      t.el = e.el;
      const Q = t.anchor = e.anchor, ue = Ni.get(e);
      if (ue) {
        ue.flags |= 8, Ni.delete(e), ce(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Y = t.target = e.target, se = t.targetAnchor = e.targetAnchor, ge = la(e.props), ee = ge ? n : Y, ie = ge ? Q : se;
      if (s === "svg" || Zu(Y) ? s = "svg" : (s === "mathml" || Ju(Y)) && (s = "mathml"), W ? (S(
        e.dynamicChildren,
        W,
        ee,
        a,
        r,
        s,
        o
      ), pu(e, t, !0)) : l || h(
        e,
        t,
        ee,
        ie,
        a,
        r,
        s,
        o,
        !1
      ), M)
        ge ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : zs(
          t,
          n,
          Q,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = Tc(t.props, x);
        $ && (t.target = $, zs(
          t,
          $,
          null,
          f,
          0
        ));
      } else ge && zs(
        t,
        Y,
        se,
        f,
        1
      );
      Or(t, M);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: s,
      children: o,
      anchor: l,
      targetStart: f,
      targetAnchor: u,
      target: h,
      props: S
    } = e, E = la(S), x = r || !E, A = Ni.get(e);
    if (A && (A.flags |= 8, Ni.delete(e)), h && (a(f), a(u)), r && a(l), !A && (E || h) && s & 16)
      for (let O = 0; O < o.length; O++) {
        const D = o[O];
        i(
          D,
          t,
          n,
          x,
          !!D.dynamicChildren
        );
      }
  },
  move: zs,
  hydrate: Yg
};
function zs(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: s, anchor: o, shapeFlag: l, children: f, props: u } = e, h = r === 2;
  if (h && i(s, t, n), !Ni.has(e) && (!h || la(u)) && l & 16)
    for (let S = 0; S < f.length; S++)
      a(
        f[S],
        t,
        n,
        2
      );
  h && i(o, t, n);
}
function Yg(e, t, n, i, a, r, {
  o: { nextSibling: s, parentNode: o, querySelector: l, insert: f, createText: u }
}, h) {
  function S(O, D) {
    let M = D;
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
  function E(O, D) {
    D.anchor = h(
      s(O),
      D,
      o(O),
      n,
      i,
      a,
      r
    );
  }
  const x = t.target = Tc(
    t.props,
    l
  ), A = la(t.props);
  if (x) {
    const O = x._lpa || x.firstChild;
    t.shapeFlag & 16 && (A ? (E(e, t), S(x, O), t.targetAnchor || Ec(
      x,
      t,
      u,
      f,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      o(e) === x ? e : null
    )) : (t.anchor = s(e), S(x, O), t.targetAnchor || Ec(x, t, u, f), h(
      O && s(O),
      t,
      x,
      n,
      i,
      a,
      r
    ))), Or(t, A);
  } else A && t.shapeFlag & 16 && (E(e, t), t.targetStart = e, t.targetAnchor = s(e));
  return t.anchor && s(t.anchor);
}
const gh = qg;
function Or(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function Ec(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), s = t.targetAnchor = n("");
  return r[vh] = s, e && (i(r, e, a), i(s, e, a)), s;
}
const bn = /* @__PURE__ */ Symbol("_leaveCb"), yr = /* @__PURE__ */ Symbol("_enterCb");
function Xg() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return ji(() => {
    e.isMounted = !0;
  }), Za(() => {
    e.isUnmounting = !0;
  }), e;
}
const pn = [Function, Array], mh = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: pn,
  onEnter: pn,
  onAfterEnter: pn,
  onEnterCancelled: pn,
  // leave
  onBeforeLeave: pn,
  onLeave: pn,
  onAfterLeave: pn,
  onLeaveCancelled: pn,
  // appear
  onBeforeAppear: pn,
  onAppear: pn,
  onAfterAppear: pn,
  onAppearCancelled: pn
}, bh = (e) => {
  const t = e.subTree;
  return t.component ? bh(t.component) : t;
}, Zg = {
  name: "BaseTransition",
  props: mh,
  setup(e, { slots: t }) {
    const n = _a(), i = Xg();
    return () => {
      const a = t.default && wh(t.default(), !0), r = a && a.length ? yh(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? j() : void 0
      );
      if (!r)
        return;
      const s = /* @__PURE__ */ Ke(e), { mode: o } = s;
      if (i.isLeaving)
        return Bl(r);
      const l = ro(r);
      if (!l)
        return Bl(r);
      let f = Ac(
        l,
        s,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      l.type !== xt && es(l, f);
      let u = n.subTree && ro(n.subTree);
      if (u && u.type !== xt && !ca(u, l) && bh(n).type !== xt) {
        let h = Ac(
          u,
          s,
          i,
          n
        );
        if (es(u, h), o === "out-in" && l.type !== xt)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Bl(r);
        o === "in-out" && l.type !== xt ? h.delayLeave = (S, E, x) => {
          const A = _h(
            i,
            u
          );
          A[String(u.key)] = u, S[bn] = () => {
            E(), S[bn] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            x(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return r;
    };
  }
};
function yh(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== xt) {
        t = n;
        break;
      }
  }
  return t;
}
const Jg = Zg;
function _h(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Ac(e, t, n, i, a) {
  const {
    appear: r,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: S,
    onLeave: E,
    onAfterLeave: x,
    onLeaveCancelled: A,
    onBeforeAppear: O,
    onAppear: D,
    onAfterAppear: M,
    onAppearCancelled: W
  } = t, I = String(e.key), P = _h(n, e), ce = (Y, se) => {
    Y && Sn(
      Y,
      i,
      9,
      se
    );
  }, Q = (Y, se) => {
    const ge = se[1];
    ce(Y, se), Se(Y) ? Y.every((ee) => ee.length <= 1) && ge() : Y.length <= 1 && ge();
  }, ue = {
    mode: s,
    persisted: o,
    beforeEnter(Y) {
      let se = l;
      if (!n.isMounted)
        if (r)
          se = O || l;
        else
          return;
      Y[bn] && Y[bn](
        !0
        /* cancelled */
      );
      const ge = P[I];
      ge && ca(e, ge) && ge.el[bn] && ge.el[bn](), ce(se, [Y]);
    },
    enter(Y) {
      if (P[I] === e) return;
      let se = f, ge = u, ee = h;
      if (!n.isMounted)
        if (r)
          se = D || f, ge = M || u, ee = W || h;
        else
          return;
      let ie = !1;
      Y[yr] = (F) => {
        ie || (ie = !0, F ? ce(ee, [Y]) : ce(ge, [Y]), ue.delayedLeave && ue.delayedLeave(), Y[yr] = void 0);
      };
      const $ = Y[yr].bind(null, !1);
      se ? Q(se, [Y, $]) : $();
    },
    leave(Y, se) {
      const ge = String(e.key);
      if (Y[yr] && Y[yr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      ce(S, [Y]);
      let ee = !1;
      Y[bn] = ($) => {
        ee || (ee = !0, se(), $ ? ce(A, [Y]) : ce(x, [Y]), Y[bn] = void 0, P[ge] === e && delete P[ge]);
      };
      const ie = Y[bn].bind(null, !1);
      P[ge] = e, E ? Q(E, [Y, ie]) : ie();
    },
    clone(Y) {
      const se = Ac(
        Y,
        t,
        n,
        i,
        a
      );
      return a && a(se), se;
    }
  };
  return ue;
}
function Bl(e) {
  if (vl(e))
    return e = Ui(e), e.children = null, e;
}
function ro(e) {
  if (!vl(e))
    return pl(e.type) && e.children ? yh(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Le(n.default))
      return n.default();
  }
}
function es(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    es(
      pl(n.type) && ro(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function wh(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let s = e[r];
    const o = n == null ? s.key : String(n) + String(s.key != null ? s.key : r);
    s.type === de ? (s.patchFlag & 128 && a++, i = i.concat(
      wh(s.children, t, o)
    )) : (t || s.type !== xt) && i.push(o != null ? Ui(s, { key: o }) : s);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Lt(e, t) {
  return Le(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Sh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Qg(e) {
  const t = _a(), n = /* @__PURE__ */ sh(null);
  if (t) {
    const a = t.refs === Ve ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function Qu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const so = /* @__PURE__ */ new WeakMap();
function Mr(e, t, n, i, a = !1) {
  if (Se(e)) {
    e.forEach(
      (A, O) => Mr(
        A,
        t && (Se(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Va(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Mr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? bl(i.component) : i.el, s = a ? null : r, { i: o, r: l } = e, f = t && t.r, u = o.refs === Ve ? o.refs = {} : o.refs, h = o.setupState, S = /* @__PURE__ */ Ke(h), E = h === Ve ? Ff : (A) => Qu(u, A) ? !1 : qe(S, A), x = (A, O) => !(O && Qu(u, O));
  if (f != null && f !== l) {
    if (ed(t), tt(f))
      u[f] = null, E(f) && (h[f] = null);
    else if (/* @__PURE__ */ Bt(f)) {
      const A = t;
      x(f, A.k) && (f.value = null), A.k && (u[A.k] = null);
    }
  }
  if (Le(l))
    vs(l, o, 12, [s, u]);
  else {
    const A = tt(l), O = /* @__PURE__ */ Bt(l);
    if (A || O) {
      const D = () => {
        if (e.f) {
          const M = A ? E(l) ? h[l] : u[l] : x() || !e.k ? l.value : u[e.k];
          if (a)
            Se(M) && eu(M, r);
          else if (Se(M))
            M.includes(r) || M.push(r);
          else if (A)
            u[l] = [r], E(l) && (h[l] = u[l]);
          else {
            const W = [r];
            x(l, e.k) && (l.value = W), e.k && (u[e.k] = W);
          }
        } else A ? (u[l] = s, E(l) && (h[l] = s)) : O && (x(l, e.k) && (l.value = s), e.k && (u[e.k] = s));
      };
      if (s) {
        const M = () => {
          D(), so.delete(e);
        };
        M.id = -1, so.set(e, M), Kt(M, n);
      } else
        ed(e), D();
    }
  }
}
function ed(e) {
  const t = so.get(e);
  t && (t.flags |= 8, so.delete(e));
}
ll().requestIdleCallback;
ll().cancelIdleCallback;
const Va = (e) => !!e.type.__asyncLoader, vl = (e) => e.type.__isKeepAlive;
function em(e, t) {
  Ch(e, "a", t);
}
function tm(e, t) {
  Ch(e, "da", t);
}
function Ch(e, t, n = zt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (gl(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      vl(a.parent.vnode) && nm(i, t, n, a), a = a.parent;
  }
}
function nm(e, t, n, i) {
  const a = gl(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  gs(() => {
    eu(i[t], a);
  }, n);
}
function gl(e, t, n = zt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      di();
      const o = bs(n), l = Sn(t, n, e, s);
      return o(), fi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const gi = (e) => (t, n = zt) => {
  (!rs || e === "sp") && gl(e, (...i) => t(...i), n);
}, Th = gi("bm"), ji = gi("m"), Eh = gi(
  "bu"
), im = gi("u"), Za = gi(
  "bum"
), gs = gi("um"), am = gi(
  "sp"
), rm = gi("rtg"), sm = gi("rtc");
function om(e, t = zt) {
  gl("ec", e, t);
}
const cu = "components", lm = "directives";
function Ue(e, t) {
  return du(cu, e, !0, t) || e;
}
const Ah = /* @__PURE__ */ Symbol.for("v-ndc");
function uu(e) {
  return tt(e) ? du(cu, e, !1) || e : e || Ah;
}
function td(e) {
  return du(lm, e);
}
function du(e, t, n = !0, i = !1) {
  const a = Nt || zt;
  if (a) {
    const r = a.type;
    if (e === cu) {
      const o = Vm(
        r,
        !1
      );
      if (o && (o === t || o === Ut(t) || o === sl(Ut(t))))
        return r;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      nd(a[e] || r[e], t) || // global registration
      nd(a.appContext[e], t)
    );
    return !s && i ? r : s;
  }
}
function nd(e, t) {
  return e && (e[t] || e[Ut(t)] || e[sl(Ut(t))]);
}
function ze(e, t, n, i) {
  let a;
  const r = n, s = Se(e);
  if (s || tt(e)) {
    const o = s && /* @__PURE__ */ ga(e);
    let l = !1, f = !1;
    o && (l = !/* @__PURE__ */ wn(e), f = /* @__PURE__ */ hi(e), e = ul(e)), a = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      a[u] = t(
        l ? f ? Xa(Nn(e[u])) : Nn(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let o = 0; o < e; o++)
      a[o] = t(o + 1, o, void 0, r);
  } else if (Ye(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (o, l) => t(o, l, void 0, r)
      );
    else {
      const o = Object.keys(e);
      a = new Array(o.length);
      for (let l = 0, f = o.length; l < f; l++) {
        const u = o[l];
        a[l] = t(e[u], u, l, r);
      }
    }
  else
    a = [];
  return a;
}
function De(e, t, n, i, a, r) {
  if (n == null && (n = {}), Nt.ce || Nt.parent && Va(Nt.parent) && Nt.parent.ce) {
    const f = n, u = Object.keys(f).length > 0;
    return t !== "default" && (f.name = t), _(), Fe(
      de,
      null,
      [be("slot", f, i && i())],
      u ? -2 : 64
    );
  }
  let s = e[t];
  s && s._c && (s._d = !1);
  const o = ci.length;
  _();
  let l;
  try {
    const f = s && kh(s(n)), u = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    f && f.key;
    l = Fe(
      de,
      {
        key: (u && !xn(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!f && i ? "_fb" : "")
      },
      f || (i ? i() : []),
      f && e._ === 1 ? 64 : -2
    );
  } catch (f) {
    for (let u = ci.length; u > o; u--) vu();
    throw f;
  } finally {
    s && s._c && (s._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function kh(e) {
  return e.some((t) => ns(t) ? !(t.type === xt || t.type === de && !kh(t.children)) : !0) ? e : null;
}
const kc = (e) => e ? Yh(e) ? bl(e) : kc(e.parent) : null, Fr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => kc(e.parent),
    $root: (e) => kc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Nh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      lu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = on.bind(e.proxy)),
    $watch: (e) => Kg.bind(e)
  })
), jl = (e, t) => e !== Ve && !e.__isScriptSetup && qe(e, t), cm = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: s, type: o, appContext: l } = e;
    if (t[0] !== "$") {
      const S = s[t];
      if (S !== void 0)
        switch (S) {
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
        if (jl(i, t))
          return s[t] = 1, i[t];
        if (a !== Ve && qe(a, t))
          return s[t] = 2, a[t];
        if (qe(r, t))
          return s[t] = 3, r[t];
        if (n !== Ve && qe(n, t))
          return s[t] = 4, n[t];
        Oc && (s[t] = 0);
      }
    }
    const f = Fr[t];
    let u, h;
    if (f)
      return t === "$attrs" && Mt(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (u = o.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ve && qe(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, qe(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return jl(a, t) ? (a[t] = n, !0) : i !== Ve && qe(i, t) ? (i[t] = n, !0) : qe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: s }
  }, o) {
    let l;
    return !!(n[o] || e !== Ve && o[0] !== "$" && qe(e, o) || jl(t, o) || qe(r, o) || qe(i, o) || qe(Fr, o) || qe(a.config.globalProperties, o) || (l = s.__cssModules) && l[o]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : qe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function um() {
  return Oh().slots;
}
function dm() {
  return Oh().attrs;
}
function Oh(e) {
  const t = _a();
  return t.setupContext || (t.setupContext = Zh(t));
}
function oo(e) {
  return Se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function fm(e, t) {
  return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : pt({}, oo(e), oo(t));
}
let Oc = !0;
function hm(e) {
  const t = Nh(e), n = e.proxy, i = e.ctx;
  Oc = !1, t.beforeCreate && id(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: s,
    watch: o,
    provide: l,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: S,
    beforeUpdate: E,
    updated: x,
    activated: A,
    deactivated: O,
    beforeDestroy: D,
    beforeUnmount: M,
    destroyed: W,
    unmounted: I,
    render: P,
    renderTracked: ce,
    renderTriggered: Q,
    errorCaptured: ue,
    serverPrefetch: Y,
    // public API
    expose: se,
    inheritAttrs: ge,
    // assets
    components: ee,
    directives: ie,
    filters: $
  } = t;
  if (f && pm(f, i, null), s)
    for (const ae in s) {
      const ne = s[ae];
      Le(ne) && (i[ae] = ne.bind(n));
    }
  if (a) {
    const ae = a.call(n, n);
    Ye(ae) && (e.data = /* @__PURE__ */ Dt(ae));
  }
  if (Oc = !0, r)
    for (const ae in r) {
      const ne = r[ae], pe = Le(ne) ? ne.bind(n, n) : Le(ne.get) ? ne.get.bind(n, n) : _n, ve = !Le(ne) && Le(ne.set) ? ne.set.bind(n) : _n, ye = K({
        get: pe,
        set: ve
      });
      Object.defineProperty(i, ae, {
        enumerable: !0,
        configurable: !0,
        get: () => ye.value,
        set: (me) => ye.value = me
      });
    }
  if (o)
    for (const ae in o)
      xh(o[ae], i, n, ae);
  if (l) {
    const ae = Le(l) ? l.call(n) : l;
    Reflect.ownKeys(ae).forEach((ne) => {
      mn(ne, ae[ne]);
    });
  }
  u && id(u, e, "c");
  function X(ae, ne) {
    Se(ne) ? ne.forEach((pe) => ae(pe.bind(n))) : ne && ae(ne.bind(n));
  }
  if (X(Th, h), X(ji, S), X(Eh, E), X(im, x), X(em, A), X(tm, O), X(om, ue), X(sm, ce), X(rm, Q), X(Za, M), X(gs, I), X(am, Y), Se(se))
    if (se.length) {
      const ae = e.exposed || (e.exposed = {});
      se.forEach((ne) => {
        Object.defineProperty(ae, ne, {
          get: () => n[ne],
          set: (pe) => n[ne] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  P && e.render === _n && (e.render = P), ge != null && (e.inheritAttrs = ge), ee && (e.components = ee), ie && (e.directives = ie), Y && Sh(e);
}
function pm(e, t, n = _n) {
  Se(e) && (e = xc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Ye(a) ? "default" in a ? r = Ft(
      a.from || i,
      a.default,
      !0
    ) : r = Ft(a.from || i) : r = Ft(a), /* @__PURE__ */ Bt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[i] = r;
  }
}
function id(e, t, n) {
  Sn(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function xh(e, t, n, i) {
  let a = i.includes(".") ? ph(n, i) : () => n[i];
  if (tt(e)) {
    const r = t[e];
    Le(r) && rt(a, r);
  } else if (Le(e))
    rt(a, e.bind(n));
  else if (Ye(e))
    if (Se(e))
      e.forEach((r) => xh(r, t, n, i));
    else {
      const r = Le(e.handler) ? e.handler.bind(n) : t[e.handler];
      Le(r) && rt(a, r, e);
    }
}
function Nh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = r.get(t);
  let l;
  return o ? l = o : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (f) => lo(l, f, s, !0)
  ), lo(l, t, s)), Ye(t) && r.set(t, l), l;
}
function lo(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && lo(e, r, n, !0), a && a.forEach(
    (s) => lo(e, s, n, !0)
  );
  for (const s in t)
    if (!(i && s === "expose")) {
      const o = vm[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
    }
  return e;
}
const vm = {
  data: ad,
  props: rd,
  emits: rd,
  // objects
  methods: xr,
  computed: xr,
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
  components: xr,
  directives: xr,
  // watch
  watch: mm,
  // provide / inject
  provide: ad,
  inject: gm
};
function ad(e, t) {
  return t ? e ? function() {
    return pt(
      Le(e) ? e.call(this, this) : e,
      Le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function gm(e, t) {
  return xr(xc(e), xc(t));
}
function xc(e) {
  if (Se(e)) {
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
function xr(e, t) {
  return e ? pt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function rd(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pt(
    /* @__PURE__ */ Object.create(null),
    oo(e),
    oo(t ?? {})
  ) : t;
}
function mm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = pt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Gt(e[i], t[i]);
  return n;
}
function Lh() {
  return {
    app: null,
    config: {
      isNativeTag: Ff,
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
let bm = 0;
function ym(e, t) {
  return function(i, a = null) {
    Le(i) || (i = pt({}, i)), a != null && !Ye(a) && (a = null);
    const r = Lh(), s = /* @__PURE__ */ new WeakSet(), o = [];
    let l = !1;
    const f = r.app = {
      _uid: bm++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Km,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return s.has(u) || (u && Le(u.install) ? (s.add(u), u.install(f, ...h)) : Le(u) && (s.add(u), u(f, ...h))), f;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), f;
      },
      component(u, h) {
        return h ? (r.components[u] = h, f) : r.components[u];
      },
      directive(u, h) {
        return h ? (r.directives[u] = h, f) : r.directives[u];
      },
      mount(u, h, S) {
        if (!l) {
          const E = f._ceVNode || be(i, a);
          return E.appContext = r, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(E, u, S), l = !0, f._container = u, u.__vue_app__ = f, bl(E.component);
        }
      },
      onUnmount(u) {
        o.push(u);
      },
      unmount() {
        l && (Sn(
          o,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, h) {
        return r.provides[u] = h, f;
      },
      runWithContext(u) {
        const h = Ga;
        Ga = f;
        try {
          return u();
        } finally {
          Ga = h;
        }
      }
    };
    return f;
  };
}
let Ga = null;
function Rh(e, t, n = Ve) {
  const i = _a(), a = Ut(t), r = vi(t), s = Ih(e, a), o = Rg((l, f) => {
    let u, h = Ve, S;
    return Gg(() => {
      const E = e[a];
      Ot(u, E) && (u = E, f());
    }), {
      get() {
        return l(), n.get ? n.get(u) : u;
      },
      set(E) {
        const x = n.set ? n.set(E) : E;
        if (!Ot(x, u) && !(h !== Ve && Ot(E, h)))
          return;
        const A = i.vnode.props, O = !!(A && // check if parent has passed v-model
        (t in A || a in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${a}` in A || `onUpdate:${r}` in A));
        O || (u = E, f()), i.emit(`update:${t}`, x), Ot(E, h) && (Ot(E, x) && !Ot(x, S) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && h !== Ve && !Ot(x, u)) && f(), h = E, S = x;
      }
    };
  });
  return o[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? s || Ve : o, done: !1 } : { done: !0 };
      }
    };
  }, o;
}
const Ih = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ut(t)}Modifiers`] || e[`${vi(t)}Modifiers`];
function _m(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || Ve;
  let a = n;
  const r = t.startsWith("update:"), s = r && Ih(i, t.slice(7));
  s && (s.trim && (a = n.map((u) => tt(u) ? u.trim() : u)), s.number && (a = a.map(ol)));
  let o, l = i[o = Dl(t)] || // also try camelCase event handler (#2249)
  i[o = Dl(Ut(t))];
  !l && r && (l = i[o = Dl(vi(t))]), l && Sn(
    l,
    e,
    6,
    a
  );
  const f = i[o + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, Sn(
      f,
      e,
      6,
      a
    );
  }
}
const wm = /* @__PURE__ */ new WeakMap();
function Ph(e, t, n = !1) {
  const i = n ? wm : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let s = {}, o = !1;
  if (!Le(e)) {
    const l = (f) => {
      const u = Ph(f, t, !0);
      u && (o = !0, pt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !o ? (Ye(e) && i.set(e, null), null) : (Se(r) ? r.forEach((l) => s[l] = null) : pt(s, r), Ye(e) && i.set(e, s), s);
}
function ml(e, t) {
  return !e || !il(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), qe(e, t[0].toLowerCase() + t.slice(1)) || qe(e, vi(t)) || qe(e, t));
}
function sd(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: s,
    attrs: o,
    emit: l,
    render: f,
    renderCache: u,
    props: h,
    data: S,
    setupState: E,
    ctx: x,
    inheritAttrs: A
  } = e, O = ao(e);
  let D, M;
  try {
    if (n.shapeFlag & 4) {
      const I = a || i, P = I;
      D = jn(
        f.call(
          P,
          I,
          u,
          h,
          E,
          S,
          x
        )
      ), M = o;
    } else {
      const I = t;
      D = jn(
        I.length > 1 ? I(
          h,
          { attrs: o, slots: s, emit: l }
        ) : I(
          h,
          null
        )
      ), M = t.props ? o : Sm(o);
    }
  } catch (I) {
    ci.length = 0, dl(I, e, 1), D = be(xt);
  }
  let W = D;
  if (M && A !== !1) {
    const I = Object.keys(M), { shapeFlag: P } = W;
    I.length && P & 7 && (r && I.some(al) && (M = Cm(
      M,
      r
    )), W = Ui(W, M, !1, !0));
  }
  if (n.dirs && (W = Ui(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const I = pl(W.type) && ro(W) || W;
    es(I, n.transition);
  }
  return D = W, ao(O), D;
}
const Sm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || il(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Cm = (e, t) => {
  const n = {};
  for (const i in e)
    (!al(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Tm(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: s, children: o, patchFlag: l } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? od(i, s, f) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const S = u[h];
        if ($h(s, i, S) && !ml(f, S))
          return !0;
      }
    }
  } else
    return (a || o) && (!o || !o.$stable) ? !0 : i === s ? !1 : i ? s ? od(i, s, f) : !0 : !!s;
  return !1;
}
function od(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if ($h(t, e, r) && !ml(n, r))
      return !0;
  }
  return !1;
}
function $h(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Ye(i) && Ye(a) ? !zi(i, a) : i !== a;
}
function Em({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Dh = {}, Mh = () => Object.create(Dh), Fh = (e) => Object.getPrototypeOf(e) === Dh;
function Am(e, t, n, i = !1) {
  const a = {}, r = Mh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zh(e, t, a, r);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ kg(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function km(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, o = /* @__PURE__ */ Ke(a), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let S = u[h];
        if (ml(e.emitsOptions, S))
          continue;
        const E = t[S];
        if (l)
          if (qe(r, S))
            E !== r[S] && (r[S] = E, f = !0);
          else {
            const x = Ut(S);
            a[x] = Nc(
              l,
              o,
              x,
              E,
              e,
              !1
            );
          }
        else
          E !== r[S] && (r[S] = E, f = !0);
      }
    }
  } else {
    zh(e, t, a, r) && (f = !0);
    let u;
    for (const h in o)
      (!t || // for camelCase
      !qe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = vi(h)) === h || !qe(t, u))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[h] = Nc(
        l,
        o,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== o)
      for (const h in r)
        (!t || !qe(t, h)) && (delete r[h], f = !0);
  }
  f && ai(e.attrs, "set", "");
}
function zh(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Pr(l))
        continue;
      const f = t[l];
      let u;
      a && qe(a, u = Ut(l)) ? !r || !r.includes(u) ? n[u] = f : (o || (o = {}))[u] = f : ml(e.emitsOptions, l) || (!(l in i) || f !== i[l]) && (i[l] = f, s = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ Ke(n), f = o || Ve;
    for (let u = 0; u < r.length; u++) {
      const h = r[u];
      n[h] = Nc(
        a,
        l,
        h,
        f[h],
        e,
        !qe(f, h)
      );
    }
  }
  return s;
}
function Nc(e, t, n, i, a, r) {
  const s = e[n];
  if (s != null) {
    const o = qe(s, "default");
    if (o && i === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && Le(l)) {
        const { propsDefaults: f } = a;
        if (n in f)
          i = f[n];
        else {
          const u = bs(a);
          i = f[n] = l.call(
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
    ] && (i === "" || i === vi(n)) && (i = !0));
  }
  return i;
}
const Om = /* @__PURE__ */ new WeakMap();
function Uh(e, t, n = !1) {
  const i = n ? Om : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, s = {}, o = [];
  let l = !1;
  if (!Le(e)) {
    const u = (h) => {
      l = !0;
      const [S, E] = Uh(h, t, !0);
      pt(s, S), E && o.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l)
    return Ye(e) && i.set(e, ja), ja;
  if (Se(r))
    for (let u = 0; u < r.length; u++) {
      const h = Ut(r[u]);
      ld(h) && (s[h] = Ve);
    }
  else if (r)
    for (const u in r) {
      const h = Ut(u);
      if (ld(h)) {
        const S = r[u], E = s[h] = Se(S) || Le(S) ? { type: S } : pt({}, S), x = E.type;
        let A = !1, O = !0;
        if (Se(x))
          for (let D = 0; D < x.length; ++D) {
            const M = x[D], W = Le(M) && M.name;
            if (W === "Boolean") {
              A = !0;
              break;
            } else W === "String" && (O = !1);
          }
        else
          A = Le(x) && x.name === "Boolean";
        E[
          0
          /* shouldCast */
        ] = A, E[
          1
          /* shouldCastTrue */
        ] = O, (A || qe(E, "default")) && o.push(h);
      }
    }
  const f = [s, o];
  return Ye(e) && i.set(e, f), f;
}
function ld(e) {
  return e[0] !== "$" && !Pr(e);
}
const fu = (e) => e === "_" || e === "_ctx" || e === "$stable", hu = (e) => Se(e) ? e.map(jn) : [jn(e)], xm = (e, t, n) => {
  if (t._n)
    return t;
  const i = xe((...a) => hu(t(...a)), n);
  return i._c = !1, i;
}, Bh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (fu(a)) continue;
    const r = e[a];
    if (Le(r))
      t[a] = xm(a, r, i);
    else if (r != null) {
      const s = hu(r);
      t[a] = () => s;
    }
  }
}, jh = (e, t) => {
  const n = hu(t);
  e.slots.default = () => n;
}, Hh = (e, t, n) => {
  for (const i in t)
    (n || !fu(i)) && (e[i] = t[i]);
}, Nm = (e, t, n) => {
  const i = e.slots = Mh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Hh(i, t, n), n && jf(i, "_", a, !0)) : Bh(t, i);
  } else t && jh(e, t);
}, Lm = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, s = Ve;
  if (i.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? r = !1 : Hh(a, t, n) : (r = !t.$stable, Bh(t, a)), s = t;
  } else t && (jh(e, t), s = { default: 1 });
  if (r)
    for (const o in a)
      !fu(o) && s[o] == null && delete a[o];
}, Kt = Dm;
function Rm(e) {
  return Im(e);
}
function Im(e, t) {
  const n = ll();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: s,
    createText: o,
    createComment: l,
    setText: f,
    setElementText: u,
    parentNode: h,
    nextSibling: S,
    setScopeId: E = _n,
    insertStaticContent: x
  } = e, A = (m, C, k, L = null, N = null, z = null, q = void 0, V = null, Z = !!C.dynamicChildren) => {
    if (m === C)
      return;
    m && !ca(m, C) && (L = ft(m), me(m, N, z, !0), m = null), C.patchFlag === -2 && (Z = !1, C.dynamicChildren = null);
    const { type: H, ref: _e, shapeFlag: le } = C;
    switch (H) {
      case ms:
        O(m, C, k, L);
        break;
      case xt:
        D(m, C, k, L);
        break;
      case Zs:
        m == null && M(C, k, L, q);
        break;
      case de:
        ee(
          m,
          C,
          k,
          L,
          N,
          z,
          q,
          V,
          Z
        );
        break;
      default:
        le & 1 ? P(
          m,
          C,
          k,
          L,
          N,
          z,
          q,
          V,
          Z
        ) : le & 6 ? ie(
          m,
          C,
          k,
          L,
          N,
          z,
          q,
          V,
          Z
        ) : (le & 64 || le & 128) && H.process(
          m,
          C,
          k,
          L,
          N,
          z,
          q,
          V,
          Z,
          qt
        );
    }
    _e != null && N ? Mr(_e, m && m.ref, z, C || m, !C) : _e == null && m && m.ref != null && Mr(m.ref, null, z, m, !0);
  }, O = (m, C, k, L) => {
    if (m == null)
      i(
        C.el = o(C.children),
        k,
        L
      );
    else {
      const N = C.el = m.el;
      C.children !== m.children && f(N, C.children);
    }
  }, D = (m, C, k, L) => {
    m == null ? i(
      C.el = l(C.children || ""),
      k,
      L
    ) : C.el = m.el;
  }, M = (m, C, k, L) => {
    [m.el, m.anchor] = x(
      m.children,
      C,
      k,
      L,
      m.el,
      m.anchor
    );
  }, W = ({ el: m, anchor: C }, k, L) => {
    let N;
    for (; m && m !== C; )
      N = S(m), i(m, k, L), m = N;
    i(C, k, L);
  }, I = ({ el: m, anchor: C }) => {
    let k;
    for (; m && m !== C; )
      k = S(m), a(m), m = k;
    a(C);
  }, P = (m, C, k, L, N, z, q, V, Z) => {
    if (C.type === "svg" ? q = "svg" : C.type === "math" && (q = "mathml"), m == null)
      ce(
        C,
        k,
        L,
        N,
        z,
        q,
        V,
        Z
      );
    else {
      const H = m.el && m.el._isVueCE ? m.el : null;
      try {
        H && H._beginPatch(), Y(
          m,
          C,
          N,
          z,
          q,
          V,
          Z
        );
      } finally {
        H && H._endPatch();
      }
    }
  }, ce = (m, C, k, L, N, z, q, V) => {
    let Z, H;
    const { props: _e, shapeFlag: le, transition: fe, dirs: we } = m;
    if (Z = m.el = s(
      m.type,
      z,
      _e && _e.is,
      _e
    ), le & 8 ? u(Z, m.children) : le & 16 && ue(
      m.children,
      Z,
      null,
      L,
      N,
      Hl(m, z),
      q,
      V
    ), we && ea(m, null, L, "created"), Q(Z, m, m.scopeId, q, L), _e) {
      for (const $e in _e)
        $e !== "value" && !Pr($e) && r(Z, $e, null, _e[$e], z, L);
      "value" in _e && r(Z, "value", null, _e.value, z), (H = _e.onVnodeBeforeMount) && Dn(H, L, m);
    }
    we && ea(m, null, L, "beforeMount");
    const Ne = Pm(N, fe);
    Ne && fe.beforeEnter(Z), i(Z, C, k), ((H = _e && _e.onVnodeMounted) || Ne || we) && Kt(() => {
      H && Dn(H, L, m), Ne && fe.enter(Z), we && ea(m, null, L, "mounted");
    }, N);
  }, Q = (m, C, k, L, N) => {
    if (k && E(m, k), L)
      for (let z = 0; z < L.length; z++)
        E(m, L[z]);
    if (N) {
      let z = N.subTree;
      if (C === z || Kh(z.type) && (z.ssContent === C || z.ssFallback === C)) {
        const q = N.vnode;
        Q(
          m,
          q,
          q.scopeId,
          q.slotScopeIds,
          N.parent
        );
      }
    }
  }, ue = (m, C, k, L, N, z, q, V, Z = 0) => {
    for (let H = Z; H < m.length; H++) {
      const _e = m[H] = V ? ii(m[H]) : jn(m[H]);
      A(
        null,
        _e,
        C,
        k,
        L,
        N,
        z,
        q,
        V
      );
    }
  }, Y = (m, C, k, L, N, z, q) => {
    const V = C.el = m.el;
    let { patchFlag: Z, dynamicChildren: H, dirs: _e } = C;
    Z |= m.patchFlag & 16;
    const le = m.props || Ve, fe = C.props || Ve;
    let we;
    if (k && ta(k, !1), (we = fe.onVnodeBeforeUpdate) && Dn(we, k, C, m), _e && ea(C, m, k, "beforeUpdate"), k && ta(k, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    H && (!m.dynamicChildren || m.dynamicChildren.length !== H.length) && (Z = 0, q = !1, H = null), (le.innerHTML && fe.innerHTML == null || le.textContent && fe.textContent == null) && u(V, ""), H ? se(
      m.dynamicChildren,
      H,
      V,
      k,
      L,
      Hl(C, N),
      z
    ) : q || ne(
      m,
      C,
      V,
      null,
      k,
      L,
      Hl(C, N),
      z,
      !1
    ), Z > 0) {
      if (Z & 16)
        ge(V, le, fe, k, N);
      else if (Z & 2 && le.class !== fe.class && r(V, "class", null, fe.class, N), Z & 4 && r(V, "style", le.style, fe.style, N), Z & 8) {
        const Ne = C.dynamicProps;
        for (let $e = 0; $e < Ne.length; $e++) {
          const Ee = Ne[$e], Qe = le[Ee], nt = fe[Ee];
          (nt !== Qe || Ee === "value") && r(V, Ee, Qe, nt, N, k);
        }
      }
      Z & 1 && m.children !== C.children && u(V, C.children);
    } else !q && H == null && ge(V, le, fe, k, N);
    ((we = fe.onVnodeUpdated) || _e) && Kt(() => {
      we && Dn(we, k, C, m), _e && ea(C, m, k, "updated");
    }, L);
  }, se = (m, C, k, L, N, z, q) => {
    for (let V = 0; V < C.length; V++) {
      const Z = m[V], H = C[V], _e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === de || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ca(Z, H) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? h(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          k
        )
      );
      A(
        Z,
        H,
        _e,
        null,
        L,
        N,
        z,
        q,
        !0
      );
    }
  }, ge = (m, C, k, L, N) => {
    if (C !== k) {
      if (C !== Ve)
        for (const z in C)
          !Pr(z) && !(z in k) && r(
            m,
            z,
            C[z],
            null,
            N,
            L
          );
      for (const z in k) {
        if (Pr(z)) continue;
        const q = k[z], V = C[z];
        q !== V && z !== "value" && r(m, z, V, q, N, L);
      }
      "value" in k && r(m, "value", C.value, k.value, N);
    }
  }, ee = (m, C, k, L, N, z, q, V, Z) => {
    const H = C.el = m ? m.el : o(""), _e = C.anchor = m ? m.anchor : o("");
    let { patchFlag: le, dynamicChildren: fe, slotScopeIds: we } = C;
    we && (V = V ? V.concat(we) : we), m == null ? (i(H, k, L), i(_e, k, L), ue(
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
      V,
      Z
    )) : le > 0 && le & 64 && fe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === fe.length ? (se(
      m.dynamicChildren,
      fe,
      k,
      N,
      z,
      q,
      V
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || N && C === N.subTree) && pu(
      m,
      C,
      !0
      /* shallow */
    )) : ne(
      m,
      C,
      k,
      _e,
      N,
      z,
      q,
      V,
      Z
    );
  }, ie = (m, C, k, L, N, z, q, V, Z) => {
    C.slotScopeIds = V, m == null ? C.shapeFlag & 512 ? N.ctx.activate(
      C,
      k,
      L,
      q,
      Z
    ) : $(
      C,
      k,
      L,
      N,
      z,
      q,
      Z
    ) : F(m, C, Z);
  }, $ = (m, C, k, L, N, z, q) => {
    const V = m.component = Um(
      m,
      L,
      N
    );
    if (vl(m) && (V.ctx.renderer = qt), Bm(V, !1, q), V.asyncDep) {
      if (N && N.registerDep(V, X, q), !m.el) {
        const Z = V.subTree = be(xt);
        D(null, Z, C, k), m.placeholder = Z.el;
      }
    } else
      X(
        V,
        m,
        C,
        k,
        N,
        z,
        q
      );
  }, F = (m, C, k) => {
    const L = C.component = m.component;
    if (Tm(m, C, k))
      if (L.asyncDep && !L.asyncResolved) {
        ae(L, C, k);
        return;
      } else
        L.next = C, L.update();
    else
      C.el = m.el, L.vnode = C;
  }, X = (m, C, k, L, N, z, q) => {
    const V = () => {
      if (m.isMounted) {
        let { next: le, bu: fe, u: we, parent: Ne, vnode: $e } = m;
        {
          const yt = Vh(m);
          if (yt) {
            le && (le.el = $e.el, ae(m, le, q)), yt.asyncDep.then(() => {
              Kt(() => {
                m.isUnmounted || H();
              }, N);
            });
            return;
          }
        }
        let Ee = le, Qe;
        ta(m, !1), le ? (le.el = $e.el, ae(m, le, q)) : le = $e, fe && Xs(fe), (Qe = le.props && le.props.onVnodeBeforeUpdate) && Dn(Qe, Ne, le, $e), ta(m, !0);
        const nt = sd(m), Tt = m.subTree;
        m.subTree = nt, A(
          Tt,
          nt,
          // parent may have changed if it's in a teleport
          h(Tt.el),
          // anchor may have changed if it's in a fragment
          ft(Tt),
          m,
          N,
          z
        ), le.el = nt.el, Ee === null && Em(m, nt.el), we && Kt(we, N), (Qe = le.props && le.props.onVnodeUpdated) && Kt(
          () => Dn(Qe, Ne, le, $e),
          N
        );
      } else {
        let le;
        const { el: fe, props: we } = C, { bm: Ne, m: $e, parent: Ee, root: Qe, type: nt } = m, Tt = Va(C);
        ta(m, !1), Ne && Xs(Ne), !Tt && (le = we && we.onVnodeBeforeMount) && Dn(le, Ee, C), ta(m, !0);
        {
          Qe.ce && Qe.ce._hasShadowRoot() && Qe.ce._injectChildStyle(
            nt,
            m.parent ? m.parent.type : void 0
          );
          const yt = m.subTree = sd(m);
          A(
            null,
            yt,
            k,
            L,
            m,
            N,
            z
          ), C.el = yt.el;
        }
        if ($e && Kt($e, N), !Tt && (le = we && we.onVnodeMounted)) {
          const yt = C;
          Kt(
            () => Dn(le, Ee, yt),
            N
          );
        }
        (C.shapeFlag & 256 || Ee && Va(Ee.vnode) && Ee.vnode.shapeFlag & 256) && m.a && Kt(m.a, N), m.isMounted = !0, C = k = L = null;
      }
    };
    m.scope.on();
    const Z = m.effect = new Kf(V);
    m.scope.off();
    const H = m.update = Z.run.bind(Z), _e = m.job = Z.runIfDirty.bind(Z);
    _e.i = m, _e.id = m.uid, Z.scheduler = () => lu(_e), ta(m, !0), H();
  }, ae = (m, C, k) => {
    C.component = m;
    const L = m.vnode.props;
    m.vnode = C, m.next = null, km(m, C.props, L, k), Lm(m, C.children, k), di(), Xu(m), fi();
  }, ne = (m, C, k, L, N, z, q, V, Z = !1) => {
    const H = m && m.children, _e = m ? m.shapeFlag : 0, le = C.children, { patchFlag: fe, shapeFlag: we } = C;
    if (fe > 0) {
      if (fe & 128) {
        ve(
          H,
          le,
          k,
          L,
          N,
          z,
          q,
          V,
          Z
        );
        return;
      } else if (fe & 256) {
        pe(
          H,
          le,
          k,
          L,
          N,
          z,
          q,
          V,
          Z
        );
        return;
      }
    }
    we & 8 ? (_e & 16 && ct(H, N, z), le !== H && u(k, le)) : _e & 16 ? we & 16 ? ve(
      H,
      le,
      k,
      L,
      N,
      z,
      q,
      V,
      Z
    ) : ct(H, N, z, !0) : (_e & 8 && u(k, ""), we & 16 && ue(
      le,
      k,
      L,
      N,
      z,
      q,
      V,
      Z
    ));
  }, pe = (m, C, k, L, N, z, q, V, Z) => {
    m = m || ja, C = C || ja;
    const H = m.length, _e = C.length, le = Math.min(H, _e);
    let fe;
    for (fe = 0; fe < le; fe++) {
      const we = C[fe] = Z ? ii(C[fe]) : jn(C[fe]);
      A(
        m[fe],
        we,
        k,
        null,
        N,
        z,
        q,
        V,
        Z
      );
    }
    H > _e ? ct(
      m,
      N,
      z,
      !0,
      !1,
      le
    ) : ue(
      C,
      k,
      L,
      N,
      z,
      q,
      V,
      Z,
      le
    );
  }, ve = (m, C, k, L, N, z, q, V, Z) => {
    let H = 0;
    const _e = C.length;
    let le = m.length - 1, fe = _e - 1;
    for (; H <= le && H <= fe; ) {
      const we = m[H], Ne = C[H] = Z ? ii(C[H]) : jn(C[H]);
      if (ca(we, Ne))
        A(
          we,
          Ne,
          k,
          null,
          N,
          z,
          q,
          V,
          Z
        );
      else
        break;
      H++;
    }
    for (; H <= le && H <= fe; ) {
      const we = m[le], Ne = C[fe] = Z ? ii(C[fe]) : jn(C[fe]);
      if (ca(we, Ne))
        A(
          we,
          Ne,
          k,
          null,
          N,
          z,
          q,
          V,
          Z
        );
      else
        break;
      le--, fe--;
    }
    if (H > le) {
      if (H <= fe) {
        const we = fe + 1, Ne = we < _e ? C[we].el : L;
        for (; H <= fe; )
          A(
            null,
            C[H] = Z ? ii(C[H]) : jn(C[H]),
            k,
            Ne,
            N,
            z,
            q,
            V,
            Z
          ), H++;
      }
    } else if (H > fe)
      for (; H <= le; )
        me(m[H], N, z, !0), H++;
    else {
      const we = H, Ne = H, $e = /* @__PURE__ */ new Map();
      for (H = Ne; H <= fe; H++) {
        const ot = C[H] = Z ? ii(C[H]) : jn(C[H]);
        ot.key != null && $e.set(ot.key, H);
      }
      let Ee, Qe = 0;
      const nt = fe - Ne + 1;
      let Tt = !1, yt = 0;
      const Ht = new Array(nt);
      for (H = 0; H < nt; H++) Ht[H] = 0;
      for (H = we; H <= le; H++) {
        const ot = m[H];
        if (Qe >= nt) {
          me(ot, N, z, !0);
          continue;
        }
        let Vt;
        if (ot.key != null)
          Vt = $e.get(ot.key);
        else
          for (Ee = Ne; Ee <= fe; Ee++)
            if (Ht[Ee - Ne] === 0 && ca(ot, C[Ee])) {
              Vt = Ee;
              break;
            }
        Vt === void 0 ? me(ot, N, z, !0) : (Ht[Vt - Ne] = H + 1, Vt >= yt ? yt = Vt : Tt = !0, A(
          ot,
          C[Vt],
          k,
          null,
          N,
          z,
          q,
          V,
          Z
        ), Qe++);
      }
      const en = Tt ? $m(Ht) : ja;
      for (Ee = en.length - 1, H = nt - 1; H >= 0; H--) {
        const ot = Ne + H, Vt = C[ot], Gi = C[ot + 1], Rt = ot + 1 < _e ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Gi.el || Gh(Gi)
        ) : L;
        Ht[H] === 0 ? A(
          null,
          Vt,
          k,
          Rt,
          N,
          z,
          q,
          V,
          Z
        ) : Tt && (Ee < 0 || H !== en[Ee] ? ye(Vt, k, Rt, 2) : Ee--);
      }
    }
  }, ye = (m, C, k, L, N = null) => {
    const { el: z, type: q, transition: V, children: Z, shapeFlag: H } = m;
    if (H & 6) {
      ye(m.component.subTree, C, k, L);
      return;
    }
    if (H & 128) {
      m.suspense.move(C, k, L);
      return;
    }
    if (H & 64) {
      q.move(m, C, k, qt);
      return;
    }
    if (q === de) {
      i(z, C, k);
      for (let le = 0; le < Z.length; le++)
        ye(Z[le], C, k, L);
      i(m.anchor, C, k);
      return;
    }
    if (q === Zs) {
      W(m, C, k);
      return;
    }
    if (L !== 2 && H & 1 && V)
      if (L === 0)
        V.persisted && !z[bn] ? i(z, C, k) : (V.beforeEnter(z), i(z, C, k), Kt(() => V.enter(z), N));
      else {
        const { leave: le, delayLeave: fe, afterLeave: we } = V, Ne = () => {
          m.ctx.isUnmounted ? a(z) : i(z, C, k);
        }, $e = () => {
          const Ee = z._isLeaving || !!z[bn];
          z._isLeaving && z[bn](
            !0
            /* cancelled */
          ), V.persisted && !Ee ? Ne() : le(z, () => {
            Ne(), we && we();
          });
        };
        fe ? fe(z, Ne, $e) : $e();
      }
    else
      i(z, C, k);
  }, me = (m, C, k, L = !1, N = !1) => {
    const {
      type: z,
      props: q,
      ref: V,
      children: Z,
      dynamicChildren: H,
      shapeFlag: _e,
      patchFlag: le,
      dirs: fe,
      cacheIndex: we,
      memo: Ne
    } = m;
    if (le === -2 && (N = !1), V != null && (di(), Mr(V, null, k, m, !0), fi()), we != null && (C.renderCache[we] = void 0), _e & 256) {
      C.ctx.deactivate(m);
      return;
    }
    const $e = _e & 1 && fe, Ee = !Va(m);
    let Qe;
    if (Ee && (Qe = q && q.onVnodeBeforeUnmount) && Dn(Qe, C, m), _e & 6)
      st(m.component, k, L);
    else {
      if (_e & 128) {
        m.suspense.unmount(k, L);
        return;
      }
      $e && ea(m, null, C, "beforeUnmount"), _e & 64 ? m.type.remove(
        m,
        C,
        k,
        qt,
        L
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== de || le > 0 && le & 64) ? ct(
        H,
        C,
        k,
        !1,
        !0
      ) : (z === de && le & 384 || !N && _e & 16) && ct(Z, C, k), L && Ge(m);
    }
    const nt = Ne != null && we == null;
    (Ee && (Qe = q && q.onVnodeUnmounted) || $e || nt) && Kt(() => {
      Qe && Dn(Qe, C, m), $e && ea(m, null, C, "unmounted"), nt && (m.el = null);
    }, k);
  }, Ge = (m) => {
    const { type: C, el: k, anchor: L, transition: N } = m;
    if (C === de) {
      Ae(k, L);
      return;
    }
    if (C === Zs) {
      I(m);
      return;
    }
    const z = () => {
      a(k), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (m.shapeFlag & 1 && N && !N.persisted) {
      const { leave: q, delayLeave: V } = N, Z = () => q(k, z);
      V ? V(m.el, z, Z) : Z();
    } else
      z();
  }, Ae = (m, C) => {
    let k;
    for (; m !== C; )
      k = S(m), a(m), m = k;
    a(C);
  }, st = (m, C, k) => {
    const { bum: L, scope: N, job: z, subTree: q, um: V, m: Z, a: H } = m;
    cd(Z), cd(H), L && Xs(L), N.stop(), z && (z.flags |= 8, me(q, m, C, k)), V && Kt(V, C), Kt(() => {
      m.isUnmounted = !0;
    }, C);
  }, ct = (m, C, k, L = !1, N = !1, z = 0) => {
    for (let q = z; q < m.length; q++)
      me(m[q], C, k, L, N);
  }, ft = (m) => {
    if (m.shapeFlag & 6)
      return ft(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const C = S(m.anchor || m.el), k = C && C[vh];
    return k ? S(k) : C;
  };
  let ut = !1;
  const Ze = (m, C, k) => {
    let L;
    m == null ? C._vnode && (me(C._vnode, null, null, !0), L = C._vnode.component) : A(
      C._vnode || null,
      m,
      C,
      null,
      null,
      null,
      k
    ), C._vnode = m, ut || (ut = !0, Xu(L), fh(), ut = !1);
  }, qt = {
    p: A,
    um: me,
    m: ye,
    r: Ge,
    mt: $,
    mc: ue,
    pc: ne,
    pbc: se,
    n: ft,
    o: e
  };
  return {
    render: Ze,
    hydrate: void 0,
    createApp: ym(Ze)
  };
}
function Hl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ta({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Pm(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Se(i) && Se(a))
    for (let r = 0; r < i.length; r++) {
      const s = i[r];
      let o = a[r];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = a[r] = ii(a[r]), o.el = s.el), !n && o.patchFlag !== -2 && pu(s, o)), o.type === ms && (o.patchFlag === -1 && (o = a[r] = ii(o)), o.el = s.el), o.type === xt && !o.el && (o.el = s.el);
    }
}
function $m(e) {
  const t = e.slice(), n = [0];
  let i, a, r, s, o;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const f = e[i];
    if (f !== 0) {
      if (a = n[n.length - 1], e[a] < f) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        o = r + s >> 1, e[n[o]] < f ? r = o + 1 : s = o;
      f < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function Vh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Vh(t);
}
function cd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Gh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Gh(t.subTree) : null;
}
const Kh = (e) => e.__isSuspense;
function Dm(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : dh(e);
}
const de = /* @__PURE__ */ Symbol.for("v-fgt"), ms = /* @__PURE__ */ Symbol.for("v-txt"), xt = /* @__PURE__ */ Symbol.for("v-cmt"), Zs = /* @__PURE__ */ Symbol.for("v-stc"), ci = [];
let cn = null;
function _(e = !1) {
  ci.push(cn = e ? null : []);
}
function vu() {
  ci.pop(), cn = ci[ci.length - 1] || null;
}
let ts = 1;
function co(e, t = !1) {
  ts += e, e < 0 && cn && t && (cn.hasOnce = !0);
}
function Wh(e) {
  return e.dynamicChildren = ts > 0 ? cn || ja : null, vu(), ts > 0 && cn && cn.push(e), e;
}
function T(e, t, n, i, a, r) {
  return Wh(
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
  return Wh(
    be(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function ns(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ca(e, t) {
  return e.type === t.type && e.key === t.key;
}
const qh = ({ key: e }) => e ?? null, Js = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? tt(e) || /* @__PURE__ */ Bt(e) || Le(e) ? { i: Nt, r: e, k: t, f: !!n } : e : null);
function c(e, t = null, n = null, i = 0, a = null, r = e === de ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && qh(t),
    ref: t && Js(t),
    scopeId: fl,
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
    ctx: Nt
  };
  return o ? (uo(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= tt(n) ? 8 : 16), ts > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  cn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && cn.push(l), l;
}
const be = Mm;
function Mm(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Ah) && (e = xt), ns(e)) {
    const o = Ui(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && uo(o, n), ts > 0 && !r && cn && (o.shapeFlag & 6 ? cn[cn.indexOf(e)] = o : cn.push(o)), o.patchFlag = -2, o;
  }
  if (Gm(e) && (e = e.__vccOpts), t) {
    t = is(t);
    let { class: o, style: l } = t;
    o && !tt(o) && (t.class = Te(o)), Ye(l) && (/* @__PURE__ */ ou(l) && !Se(l) && (l = pt({}, l)), t.style = un(l));
  }
  const s = tt(e) ? 1 : Kh(e) ? 128 : pl(e) ? 64 : Ye(e) ? 4 : Le(e) ? 2 : 0;
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
function is(e) {
  return e ? /* @__PURE__ */ ou(e) || Fh(e) ? pt({}, e) : e : null;
}
function Ui(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: s, children: o, transition: l } = e, f = t ? jt(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && qh(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Se(r) ? r.concat(Js(t)) : [r, Js(t)] : Js(t)
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
    patchFlag: t && e.type !== de ? s === -1 ? 16 : s | 16 : s,
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
  return l && i && es(
    u,
    l.clone(u)
  ), u;
}
function Ie(e = " ", t = 0) {
  return be(ms, null, e, t);
}
function j(e = "", t = !1) {
  return t ? (_(), Fe(xt, null, e)) : be(xt, null, e);
}
function jn(e) {
  return e == null || typeof e == "boolean" ? be(xt) : Se(e) ? be(
    de,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ns(e) ? ii(e) : be(ms, null, String(e));
}
function ii(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ui(e);
}
function uo(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), uo(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Fh(t) ? t._ctx = Nt : a === 3 && Nt && (Nt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Le(t)) {
    if (i & 65) {
      uo(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Nt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Ie(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function jt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Te([t.class, i.class]));
      else if (a === "style")
        t.style = un([t.style, i.style]);
      else if (il(a)) {
        const r = t[a], s = i[a];
        s && r !== s && !(Se(r) && r.includes(s)) ? t[a] = r ? [].concat(r, s) : s : s == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !al(a) && (t[a] = s);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Dn(e, t, n, i = null) {
  Sn(e, t, 7, [
    n,
    i
  ]);
}
const Fm = Lh();
let zm = 0;
function Um(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Fm, r = {
    uid: zm++,
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
    scope: new lg(
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
    propsOptions: Uh(i, a),
    emitsOptions: Ph(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ve,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: Ve,
    data: Ve,
    props: Ve,
    attrs: Ve,
    slots: Ve,
    refs: Ve,
    setupState: Ve,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = _m.bind(null, r), e.ce && e.ce(r), r;
}
let zt = null;
const _a = () => zt || Nt;
let fo, as;
{
  const e = ll(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((s) => s(r)) : a[0](r);
    };
  };
  fo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => zt = n
  ), as = t(
    "__VUE_SSR_SETTERS__",
    (n) => rs = n
  );
}
const bs = (e) => {
  const t = zt;
  return fo(e), e.scope.on(), () => {
    e.scope.off(), fo(t);
  };
}, ud = () => {
  zt && zt.scope.off(), fo(null);
};
function Yh(e) {
  return e.vnode.shapeFlag & 4;
}
let rs = !1;
function Bm(e, t = !1, n = !1) {
  t && as(t);
  const { props: i, children: a } = e.vnode, r = Yh(e);
  Am(e, i, r, t), Nm(e, a, n || t);
  const s = r ? jm(e, t) : void 0;
  return t && as(!1), s;
}
function jm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cm);
  const { setup: i } = n;
  if (i) {
    di();
    const a = e.setupContext = i.length > 1 ? Zh(e) : null, r = bs(e), s = vs(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), o = zf(s);
    if (fi(), r(), (o || e.sp) && !Va(e) && Sh(e), o) {
      if (s.then(ud, ud), t)
        return s.then((l) => {
          as(!0);
          try {
            dd(e, l, t);
          } finally {
            as(!1);
          }
        }).catch((l) => {
          dl(l, e, 0);
        });
      e.asyncDep = s;
    } else
      dd(e, s);
  } else
    Xh(e);
}
function dd(e, t, n) {
  Le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ye(t) && (e.setupState = lh(t)), Xh(e);
}
function Xh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || _n);
  {
    const a = bs(e);
    di();
    try {
      hm(e);
    } finally {
      fi(), a();
    }
  }
}
const Hm = {
  get(e, t) {
    return Mt(e, "get", ""), e[t];
  }
};
function Zh(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Hm),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function bl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(lh(Og(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Fr)
        return Fr[n](e);
    },
    has(t, n) {
      return n in t || n in Fr;
    }
  })) : e.proxy;
}
function Vm(e, t = !0) {
  return Le(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Gm(e) {
  return Le(e) && "__vccOpts" in e;
}
const K = (e, t) => /* @__PURE__ */ Pg(e, t, rs);
function Jt(e, t, n) {
  try {
    co(-1);
    const i = arguments.length;
    return i === 2 ? Ye(t) && !Se(t) ? ns(t) ? be(e, null, [t]) : be(e, t) : be(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && ns(n) && (n = [n]), be(e, t, n));
  } finally {
    co(1);
  }
}
const Km = "3.5.42", Wm = _n;
let Lc;
const fd = typeof window < "u" && window.trustedTypes;
if (fd)
  try {
    Lc = /* @__PURE__ */ fd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Jh = Lc ? (e) => Lc.createHTML(e) : (e) => e, qm = "http://www.w3.org/2000/svg", Ym = "http://www.w3.org/1998/Math/MathML", ni = typeof document < "u" ? document : null, hd = ni && /* @__PURE__ */ ni.createElement("template"), Xm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ni.createElementNS(qm, e) : t === "mathml" ? ni.createElementNS(Ym, e) : n ? ni.createElement(e, { is: n }) : ni.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => ni.createTextNode(e),
  createComment: (e) => ni.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ni.querySelector(e),
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
      hd.innerHTML = Jh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const o = hd.content;
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
}, Ai = "transition", _r = "animation", ss = /* @__PURE__ */ Symbol("_vtc"), Qh = {
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
}, Zm = /* @__PURE__ */ pt(
  {},
  mh,
  Qh
), Jm = (e) => (e.displayName = "Transition", e.props = Zm, e), Qm = /* @__PURE__ */ Jm(
  (e, { slots: t }) => Jt(Jg, eb(e), t)
), na = (e, t = []) => {
  Se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, pd = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function eb(e) {
  const t = {};
  for (const ee in e)
    ee in Qh || (t[ee] = e[ee]);
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
    appearActiveClass: f = s,
    appearToClass: u = o,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: S = `${n}-leave-active`,
    leaveToClass: E = `${n}-leave-to`
  } = e, x = tb(a), A = x && x[0], O = x && x[1], {
    onBeforeEnter: D,
    onEnter: M,
    onEnterCancelled: W,
    onLeave: I,
    onLeaveCancelled: P,
    onBeforeAppear: ce = D,
    onAppear: Q = M,
    onAppearCancelled: ue = W
  } = t, Y = (ee, ie, $, F) => {
    ee._enterCancelled = F, ia(ee, ie ? u : o), ia(ee, ie ? f : s), $ && $();
  }, se = (ee, ie) => {
    ee._isLeaving = !1, ia(ee, h), ia(ee, E), ia(ee, S), ie && ie();
  }, ge = (ee) => (ie, $) => {
    const F = ee ? Q : M, X = () => Y(ie, ee, $);
    na(F, [ie, X]), vd(() => {
      ia(ie, ee ? l : r), Jn(ie, ee ? u : o), pd(F) || gd(ie, i, A, X);
    });
  };
  return pt(t, {
    onBeforeEnter(ee) {
      na(D, [ee]), Jn(ee, r), Jn(ee, s);
    },
    onBeforeAppear(ee) {
      na(ce, [ee]), Jn(ee, l), Jn(ee, f);
    },
    onEnter: ge(!1),
    onAppear: ge(!0),
    onLeave(ee, ie) {
      ee._isLeaving = !0;
      const $ = () => se(ee, ie);
      Jn(ee, h), ee._enterCancelled ? (Jn(ee, S), yd(ee)) : (yd(ee), Jn(ee, S)), vd(() => {
        ee._isLeaving && (ia(ee, h), Jn(ee, E), pd(I) || gd(ee, i, O, $));
      }), na(I, [ee, $]);
    },
    onEnterCancelled(ee) {
      Y(ee, !1, void 0, !0), na(W, [ee]);
    },
    onAppearCancelled(ee) {
      Y(ee, !0, void 0, !0), na(ue, [ee]);
    },
    onLeaveCancelled(ee) {
      se(ee), na(P, [ee]);
    }
  });
}
function tb(e) {
  if (e == null)
    return null;
  if (Ye(e))
    return [Vl(e.enter), Vl(e.leave)];
  {
    const t = Vl(e);
    return [t, t];
  }
}
function Vl(e) {
  return Jv(e);
}
function Jn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ss] || (e[ss] = /* @__PURE__ */ new Set())).add(t);
}
function ia(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[ss];
  n && (n.delete(t), n.size || (e[ss] = void 0));
}
function vd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let nb = 0;
function gd(e, t, n, i) {
  const a = e._endId = ++nb, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: s, timeout: o, propCount: l } = ib(e, t);
  if (!s)
    return i();
  const f = s + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(f, S), r();
  }, S = (E) => {
    E.target === e && ++u >= l && h();
  };
  setTimeout(() => {
    u < l && h();
  }, o + 1), e.addEventListener(f, S);
}
function ib(e, t) {
  const n = window.getComputedStyle(e), i = (x) => (n[x] || "").split(", "), a = i(`${Ai}Delay`), r = i(`${Ai}Duration`), s = md(a, r), o = i(`${_r}Delay`), l = i(`${_r}Duration`), f = md(o, l);
  let u = null, h = 0, S = 0;
  t === Ai ? s > 0 && (u = Ai, h = s, S = r.length) : t === _r ? f > 0 && (u = _r, h = f, S = l.length) : (h = Math.max(s, f), u = h > 0 ? s > f ? Ai : _r : null, S = u ? u === Ai ? r.length : l.length : 0);
  const E = u === Ai && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Ai}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: S,
    hasTransform: E
  };
}
function md(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => bd(n) + bd(e[i])));
}
function bd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function yd(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function ab(e, t, n) {
  const i = e[ss];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ho = /* @__PURE__ */ Symbol("_vod"), ep = /* @__PURE__ */ Symbol("_vsh"), Ka = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ho] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : wr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), wr(e, !0), i.enter(e)) : i.leave(e, () => {
      wr(e, !1);
    }) : wr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    wr(e, t);
  }
};
function wr(e, t) {
  e.style.display = t ? e[ho] : "none", e[ep] = !t;
}
const tp = /* @__PURE__ */ Symbol("");
function rb(e) {
  const t = _a();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => po(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? po(t.ce, a) : Rc(t.subTree, a), n(a);
  };
  Eh(() => {
    dh(i);
  }), ji(() => {
    rt(i, _n, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), gs(() => a.disconnect());
  });
}
function Rc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Rc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    po(e.el, t);
  else if (e.type === de)
    e.children.forEach((n) => Rc(n, t));
  else if (e.type === Zs) {
    let { el: n, anchor: i } = e;
    for (; n && (po(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function po(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = og(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[tp] = i;
  }
}
const sb = /(?:^|;)\s*display\s*:/;
function ob(e, t, n) {
  const i = e.style, a = tt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (tt(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && Nr(i, o, "");
        }
      else
        for (const s in t)
          n[s] == null && Nr(i, s, "");
    for (const s in n) {
      s === "display" && (r = !0);
      const o = n[s];
      o != null ? cb(
        e,
        s,
        !tt(t) && t ? t[s] : void 0,
        o
      ) || Nr(i, s, o) : Nr(i, s, "");
    }
  } else if (a) {
    if (t !== n) {
      const s = i[tp];
      s && (n += ";" + s), i.cssText = n, r = sb.test(n);
    }
  } else t && e.removeAttribute("style");
  ho in e && (e[ho] = r ? i.display : "", e[ep] && (i.display = "none"));
}
const Us = /\s*!important$/;
function Nr(e, t, n) {
  if (Se(n))
    n.forEach((i) => Nr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Us.test(n) ? e.setProperty(t, n.replace(Us, ""), "important") : e.setProperty(t, n);
  else {
    const i = lb(e, t);
    Us.test(n) ? e.setProperty(
      vi(i),
      n.replace(Us, ""),
      "important"
    ) : e[i] = n;
  }
}
const _d = ["Webkit", "Moz", "ms"], Gl = {};
function lb(e, t) {
  const n = Gl[t];
  if (n)
    return n;
  let i = Ut(t);
  if (i !== "filter" && i in e)
    return Gl[t] = i;
  i = sl(i);
  for (let a = 0; a < _d.length; a++) {
    const r = _d[a] + i;
    if (r in e)
      return Gl[t] = r;
  }
  return t;
}
function cb(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && tt(i) && n === i;
}
const wd = "http://www.w3.org/1999/xlink";
function Sd(e, t, n, i, a, r = ag(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(wd, t.slice(6, t.length)) : e.setAttributeNS(wd, t, n) : n == null || r && !Hf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : xn(n) ? String(n) : n
  );
}
function Cd(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Jh(n) : n);
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
    o === "boolean" ? n = Hf(n) : n == null && o === "string" ? (n = "", s = !0) : o === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(a || t);
}
function ua(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function ub(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Td = /* @__PURE__ */ Symbol("_vei");
function db(e, t, n, i, a = null) {
  const r = e[Td] || (e[Td] = {}), s = r[t];
  if (i && s)
    s.value = i;
  else {
    const [o, l] = pb(t);
    if (i) {
      const f = r[t] = mb(
        i,
        a
      );
      ua(e, o, f, l);
    } else s && (ub(e, o, s, l), r[t] = void 0);
  }
}
const fb = /(Once|Passive|Capture)$/, hb = /^on:?(?:Once|Passive|Capture)$/;
function pb(e) {
  let t, n;
  for (; (n = e.match(fb)) && !hb.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : vi(e.slice(2)), t];
}
let Kl = 0;
const vb = /* @__PURE__ */ Promise.resolve(), gb = () => Kl || (vb.then(() => Kl = 0), Kl = Date.now());
function mb(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    const a = n.value;
    if (Se(a)) {
      const r = i.stopImmediatePropagation;
      i.stopImmediatePropagation = () => {
        r.call(i), i._stopped = !0;
      };
      const s = a.slice(), o = [i];
      for (let l = 0; l < s.length && !i._stopped; l++) {
        const f = s[l];
        f && Sn(
          f,
          t,
          5,
          o
        );
      }
    } else
      Sn(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = gb(), n;
}
const Ed = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, bb = (e, t, n, i, a, r) => {
  const s = a === "svg";
  t === "class" ? ab(e, i, s) : t === "style" ? ob(e, n, i) : il(t) ? al(t) || db(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : yb(e, t, i, s)) ? (Cd(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Sd(e, t, i, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (_b(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !tt(i))) ? Cd(e, Ut(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Sd(e, t, i, s));
};
function yb(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ed(t) && Le(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Ed(t) && tt(n) ? !1 : t in e;
}
function _b(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ut(t);
  return Array.isArray(n) ? n.some((a) => Ut(a) === i) : Object.keys(n).some((a) => Ut(a) === i);
}
const vo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (n) => Xs(t, n) : t;
};
function wb(e) {
  e.target.composing = !0;
}
function Ad(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const fa = /* @__PURE__ */ Symbol("_assign"), Bs = /* @__PURE__ */ Symbol("_initialValue");
function Wl(e, t, n) {
  return t && (e = e.trim()), n && (e = ol(e)), e;
}
const rn = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[Bs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Bs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[fa] = vo(a);
    const r = i || a.props && a.props.type === "number";
    ua(e, t ? "change" : "input", (s) => {
      s.target.composing || e[fa](Wl(e.value, n, r));
    }), (n || r) && ua(e, "change", () => {
      e.value = Wl(e.value, n, r);
    }), t || (ua(e, "compositionstart", wb), ua(e, "compositionend", Ad), ua(e, "change", Ad));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[Bs];
    delete e[Bs], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[fa](Wl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, s) {
    if (e[fa] = vo(s), e.composing) return;
    const o = (r || e.type === "number") && !/^0\d/.test(e.value) ? ol(e.value) : e.value, l = t ?? "";
    if (o === l)
      return;
    const f = e.getRootNode();
    (f instanceof Document || f instanceof ShadowRoot) && f.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, ki = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, ua(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? ol(go(l)) : go(l)
      ), r = e.multiple, s = r ? ba(e._modelValue) ? new Set(a) : a : a[0], o = e._pendingValue = [
        r,
        r ? Se(s) ? a.slice() : a : s
      ];
      try {
        e[fa](s);
      } finally {
        on(() => {
          e._pendingValue === o && (e._pendingValue = void 0);
        });
      }
    }), e[fa] = vo(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    kd(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[fa] = vo(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Sb(t, n[1], n[0])) && kd(e, t);
  }
};
function Sb(e, t, n) {
  if (!n || Se(e)) return zi(e, t);
  if (ba(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function kd(e, t) {
  const n = e.multiple, i = Se(t);
  if (!(n && !i && !ba(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const s = e.options[a], o = go(s);
      if (n)
        if (i) {
          const l = typeof o;
          l === "string" || l === "number" ? s.selected = t.some((f) => String(f) === String(o)) : s.selected = sg(t, o) > -1;
        } else
          s.selected = t.has(o);
      else if (zi(go(s), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function go(e) {
  return "_value" in e ? e._value : e.value;
}
const Cb = ["ctrl", "shift", "alt", "meta"], Tb = {
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
  exact: (e, t) => Cb.some((n) => e[`${n}Key`] && !t.includes(n))
}, je = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const o = Tb[t[s]];
      if (o && o(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Eb = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, mt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = vi(a.key);
    if (t.some(
      (s) => s === r || Eb[s] === r
    ))
      return e(a);
  }));
}, Ab = /* @__PURE__ */ pt({ patchProp: bb }, Xm);
let Od;
function kb() {
  return Od || (Od = Rm(Ab));
}
const Ob = ((...e) => {
  const t = kb().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Nb(i);
    if (!a) return;
    const r = t._component;
    !Le(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const s = n(a, !1, xb(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
});
function xb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Nb(e) {
  return tt(e) ? document.querySelector(e) : e;
}
function gu(e, t, n) {
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
function xd(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Lb(e) {
  if (Array.isArray(e)) return e;
}
function Rb(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, s, o = [], l = !0, f = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(l = (i = r.call(n)).done) && (o.push(i.value), o.length !== t); l = !0) ;
    } catch (u) {
      f = !0, a = u;
    } finally {
      try {
        if (!l && n.return != null && (s = n.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw a;
      }
    }
    return o;
  }
}
function Ib() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pb(e, t) {
  return Lb(e) || Rb(e, t) || $b(e, t) || Ib();
}
function $b(e, t) {
  if (e) {
    if (typeof e == "string") return xd(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xd(e, t) : void 0;
  }
}
const np = Object.entries, Nd = Object.setPrototypeOf, Db = Object.isFrozen, Mb = Object.getPrototypeOf, Fb = Object.getOwnPropertyDescriptor;
let bt = Object.freeze, Ct = Object.seal, Ua = Object.create, ip = typeof Reflect < "u" && Reflect, Ic = ip.apply, Pc = ip.construct;
bt || (bt = function(t) {
  return t;
});
Ct || (Ct = function(t) {
  return t;
});
Ic || (Ic = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
Pc || (Pc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const oa = vt(Array.prototype.forEach), zb = vt(Array.prototype.lastIndexOf), Ld = vt(Array.prototype.pop), Sr = vt(Array.prototype.push), Ub = vt(Array.prototype.splice), Wa = Array.isArray, Lr = vt(String.prototype.toLowerCase), ql = vt(String.prototype.toString), Rd = vt(String.prototype.match), Cr = vt(String.prototype.replace), Id = vt(String.prototype.indexOf), Bb = vt(String.prototype.trim), jb = vt(Number.prototype.toString), Hb = vt(Boolean.prototype.toString), Pd = typeof BigInt > "u" ? null : vt(BigInt.prototype.toString), $d = typeof Symbol > "u" ? null : vt(Symbol.prototype.toString), Qt = vt(Object.prototype.hasOwnProperty), Tr = vt(Object.prototype.toString), Pt = vt(RegExp.prototype.test), aa = Vb(TypeError);
function vt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return Ic(e, t, i);
  };
}
function Vb(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return Pc(e, n);
  };
}
function He(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lr;
  if (Nd && Nd(e, null), !Wa(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Db(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function Gb(e) {
  for (let t = 0; t < e.length; t++)
    Qt(e, t) || (e[t] = null);
  return e;
}
function sn(e) {
  const t = Ua(null);
  for (const i of np(e)) {
    var n = Pb(i, 2);
    const a = n[0], r = n[1];
    Qt(e, a) && (Wa(r) ? t[a] = Gb(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = sn(r) : t[a] = r);
  }
  return t;
}
function Kb(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return jb(e);
    case "boolean":
      return Hb(e);
    case "bigint":
      return Pd ? Pd(e) : "0";
    case "symbol":
      return $d ? $d(e) : "Symbol()";
    case "undefined":
      return Tr(e);
    case "function":
    case "object": {
      if (e === null)
        return Tr(e);
      const t = e, n = En(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : Tr(i);
      }
      return Tr(e);
    }
    default:
      return Tr(e);
  }
}
function En(e, t) {
  for (; e !== null; ) {
    const i = Fb(e, t);
    if (i) {
      if (i.get)
        return vt(i.get);
      if (typeof i.value == "function")
        return vt(i.value);
    }
    e = Mb(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Wb(e) {
  try {
    return Pt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Dd = bt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Yl = bt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Xl = bt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), qb = bt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Zl = bt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Yb = bt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Md = bt(["#text"]), Fd = bt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Jl = bt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), zd = bt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), js = bt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Xb = Ct(/{{[\w\W]*|^[\w\W]*}}/g), Zb = Ct(/<%[\w\W]*|^[\w\W]*%>/g), Jb = Ct(/\${[\w\W]*/g), Qb = Ct(/^data-[\-\w.\u00B7-\uFFFF]+$/), ey = Ct(/^aria-[\-\w]+$/), Ud = Ct(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ty = Ct(/^(?:\w+script|data):/i), ny = Ct(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), iy = Ct(/^html$/i), ay = Ct(/^[a-z][.\w]*(-[.\w]+)+$/i), Bd = Ct(/<[/\w!]/g), jd = Ct(/<[/\w]/g), ry = Ct(/<\/no(script|embed|frames)/i), sy = Ct(/\/>/i), an = {
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
}, ap = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], oy = bt(He({}, ap)), ly = (function() {
  const e = {};
  return oa(ap, (t) => {
    e[t] = Ct(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), bt(e);
})(), cy = function() {
  return typeof window > "u" ? null : window;
}, uy = function(t, n) {
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
}, Hd = function() {
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
  return Qt(t, n) && Wa(t[n]) ? He(a.base ? sn(a.base) : {}, t[n], a.transform) : i;
}, Ql = function(t, n, i) {
  const a = Qt(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? sn(a) : i();
};
function rp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : cy();
  const t = (J) => rp(J);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== an.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, s = e.Node, o = e.Element, l = e.NodeFilter, f = e.NamedNodeMap;
  f === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const u = e.DOMParser, h = e.trustedTypes, S = o.prototype, E = En(S, "cloneNode"), x = En(S, "remove"), A = En(S, "nextSibling"), O = En(S, "childNodes"), D = En(S, "parentNode"), M = En(S, "shadowRoot"), W = En(S, "attributes"), I = s && s.prototype ? En(s.prototype, "nodeType") : null, P = s && s.prototype ? En(s.prototype, "nodeName") : null, ce = s && s.prototype ? En(s.prototype, "ownerDocument") : null, Q = function(w) {
    return I ? I(w) : w.nodeType;
  }, ue = function(w) {
    return P ? P(w) : w.nodeName;
  };
  if (typeof r == "function") {
    const J = n.createElement("template");
    J.content && J.content.ownerDocument && (n = J.content.ownerDocument);
  }
  let Y, se = "", ge, ee = !1, ie = 0;
  const $ = function() {
    if (ie > 0)
      throw aa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, F = function(w) {
    $(), ie++;
    try {
      return Y.createHTML(w);
    } finally {
      ie--;
    }
  }, X = function(w) {
    $(), ie++;
    try {
      return Y.createScriptURL(w);
    } finally {
      ie--;
    }
  }, ae = function() {
    return ee || (ge = uy(h, a), ee = !0), ge;
  }, ne = n, pe = ne.implementation, ve = ne.createNodeIterator, ye = ne.createDocumentFragment, me = ne.getElementsByTagName, Ge = i.importNode;
  let Ae = Hd();
  t.isSupported = typeof np == "function" && typeof D == "function" && pe && pe.createHTMLDocument !== void 0;
  const st = Xb, ct = Zb, ft = Jb, ut = Qb, Ze = ey, qt = ty, B = ny, m = ay;
  let C = Ud, k = null;
  const L = He({}, [...Dd, ...Yl, ...Xl, ...Zl, ...Md]);
  let N = null;
  const z = He({}, [...Fd, ...Jl, ...zd, ...js]);
  let q = Object.seal(Ua(null, {
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
  })), V = null, Z = null;
  const H = Object.seal(Ua(null, {
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
  let _e = !0, le = !0, fe = !1, we = !0, Ne = !1, $e = !0, Ee = !1, Qe = !1, nt = null, Tt = null, yt = !1, Ht = !1, en = !1, ot = !1, Vt = !0, Gi = !1;
  const Rt = "user-content-";
  let Sa = !0, Ja = !1, mi = {}, bi = null;
  const _s = He({}, [
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
  let ws = null;
  const Ss = He({}, ["audio", "video", "img", "source", "image", "track"]);
  let Cs = null;
  const Ts = He({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ca = "http://www.w3.org/1998/Math/MathML", Ta = "http://www.w3.org/2000/svg", dn = "http://www.w3.org/1999/xhtml";
  let yi = dn, Ea = !1, Ki = null;
  const Qa = He({}, [Ca, Ta, dn], ql), Aa = bt(["mi", "mo", "mn", "ms", "mtext"]);
  let Wi = He({}, Aa);
  const er = bt(["annotation-xml"]);
  let tr = He({}, er);
  const Es = He({}, ["title", "style", "font", "a", "script"]);
  let _i = null;
  const Al = ["application/xhtml+xml", "text/html"], nr = "text/html";
  let it = null, Kn = null;
  const As = n.createElement("form"), ir = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, ka = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Kn && Kn === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = sn(w), _i = // eslint-disable-next-line unicorn/prefer-includes
    Al.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? nr : w.PARSER_MEDIA_TYPE, it = _i === "application/xhtml+xml" ? ql : Lr, k = Oi(w, "ALLOWED_TAGS", L, {
      transform: it
    }), N = Oi(w, "ALLOWED_ATTR", z, {
      transform: it
    }), Ki = Oi(w, "ALLOWED_NAMESPACES", Qa, {
      transform: ql
    }), Cs = Oi(w, "ADD_URI_SAFE_ATTR", Ts, {
      transform: it,
      base: Ts
    }), ws = Oi(w, "ADD_DATA_URI_TAGS", Ss, {
      transform: it,
      base: Ss
    }), bi = Oi(w, "FORBID_CONTENTS", _s, {
      transform: it
    }), V = Oi(w, "FORBID_TAGS", sn({}), {
      transform: it
    }), Z = Oi(w, "FORBID_ATTR", sn({}), {
      transform: it
    }), mi = Qt(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? sn(w.USE_PROFILES) : w.USE_PROFILES : !1, _e = w.ALLOW_ARIA_ATTR !== !1, le = w.ALLOW_DATA_ATTR !== !1, fe = w.ALLOW_UNKNOWN_PROTOCOLS || !1, we = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ne = w.SAFE_FOR_TEMPLATES || !1, $e = w.SAFE_FOR_XML !== !1, Ee = w.WHOLE_DOCUMENT || !1, Ht = w.RETURN_DOM || !1, en = w.RETURN_DOM_FRAGMENT || !1, ot = w.RETURN_TRUSTED_TYPE || !1, yt = w.FORCE_BODY || !1, Vt = w.SANITIZE_DOM !== !1, Gi = w.SANITIZE_NAMED_PROPS || !1, Sa = w.KEEP_CONTENT !== !1, Ja = w.IN_PLACE || !1, C = Wb(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Ud, yi = typeof w.NAMESPACE == "string" ? w.NAMESPACE : dn, Wi = Ql(
      w,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => He({}, Aa)
      // Default built-in map
    ), tr = Ql(
      w,
      "HTML_INTEGRATION_POINTS",
      () => He({}, er)
      // Default built-in map
    );
    const R = Ql(w, "CUSTOM_ELEMENT_HANDLING", () => Ua(null));
    if (q = Ua(null), Qt(R, "tagNameCheck") && ir(R.tagNameCheck) && (q.tagNameCheck = R.tagNameCheck), Qt(R, "attributeNameCheck") && ir(R.attributeNameCheck) && (q.attributeNameCheck = R.attributeNameCheck), Qt(R, "allowCustomizedBuiltInElements") && typeof R.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = R.allowCustomizedBuiltInElements), Ct(q), Ne && (le = !1), en && (Ht = !0), mi && (k = He({}, Md), N = Ua(null), mi.html === !0 && (He(k, Dd), He(N, Fd)), mi.svg === !0 && (He(k, Yl), He(N, Jl), He(N, js)), mi.svgFilters === !0 && (He(k, Xl), He(N, Jl), He(N, js)), mi.mathMl === !0 && (He(k, Zl), He(N, zd), He(N, js))), H.tagCheck = null, H.attributeCheck = null, Qt(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? H.tagCheck = w.ADD_TAGS : Wa(w.ADD_TAGS) && (k === L && (k = sn(k)), He(k, w.ADD_TAGS, it))), Qt(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? H.attributeCheck = w.ADD_ATTR : Wa(w.ADD_ATTR) && (N === z && (N = sn(N)), He(N, w.ADD_ATTR, it))), Qt(w, "ADD_FORBID_CONTENTS") && Wa(w.ADD_FORBID_CONTENTS) && (bi === _s && (bi = sn(bi)), He(bi, w.ADD_FORBID_CONTENTS, it)), Sa && (k["#text"] = !0), Ee && He(k, ["html", "head", "body"]), k.table && (He(k, ["tbody"]), delete V.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw aa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw aa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const G = Y;
      Y = w.TRUSTED_TYPES_POLICY;
      try {
        se = F("");
      } catch (oe) {
        throw Y = G, oe;
      }
    } else w.TRUSTED_TYPES_POLICY === null ? (Y = void 0, se = "") : (Y === void 0 && (Y = ae()), Y && typeof se == "string" && (se = F("")));
    bt && bt(w), Kn = w;
  }, ar = He({}, [...Yl, ...Xl, ...qb]), rr = He({}, [...Zl, ...Yb]), kl = function(w, R, G) {
    return R.namespaceURI === dn ? w === "svg" : R.namespaceURI === Ca ? w === "svg" && (G === "annotation-xml" || Wi[G]) : !!ar[w];
  }, Ol = function(w, R, G) {
    return R.namespaceURI === dn ? w === "math" : R.namespaceURI === Ta ? w === "math" && tr[G] : !!rr[w];
  }, ks = function(w, R, G) {
    return R.namespaceURI === Ta && !tr[G] || R.namespaceURI === Ca && !Wi[G] ? !1 : !rr[w] && (Es[w] || !ar[w]);
  }, Yt = function(w) {
    let R = D(w);
    (!R || !R.tagName) && (R = {
      namespaceURI: yi,
      tagName: "template"
    });
    const G = Lr(w.tagName), oe = Lr(R.tagName);
    return Ki[w.namespaceURI] ? w.namespaceURI === Ta ? kl(G, R, oe) : w.namespaceURI === Ca ? Ol(G, R, oe) : w.namespaceURI === dn ? ks(G, R, oe) : !!(_i === "application/xhtml+xml" && Ki[w.namespaceURI]) : !1;
  }, Ln = function(w) {
    Sr(t.removed, {
      element: w
    });
    try {
      D(w).removeChild(w);
    } catch {
      if (x(w), !D(w))
        throw aa("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, qi = function(w, R, G) {
    try {
      w.removeAttributeNode(R);
    } catch {
      try {
        w.removeAttribute(G);
      } catch {
      }
    }
  }, Oa = function(w) {
    qn(w);
    const R = O(w);
    if (R) {
      const oe = [];
      oa(R, (he) => {
        Sr(oe, he);
      }), oa(oe, (he) => {
        try {
          x(he);
        } catch {
        }
      });
    }
    const G = W(w);
    if (G)
      for (let oe = G.length - 1; oe >= 0; --oe) {
        const he = G[oe], Ce = he && he.name;
        typeof Ce == "string" && qi(w, he, Ce);
      }
  }, Wn = function(w, R, G) {
    if (!G)
      try {
        G = R.getAttributeNode(w);
      } catch {
        G = null;
      }
    Sr(t.removed, {
      attribute: G || null,
      from: R
    });
    try {
      G ? R.removeAttributeNode(G) : R.removeAttribute(w);
    } catch {
      try {
        R.removeAttribute(w);
      } catch {
      }
    }
    if (w === "is")
      if (Ht || en)
        try {
          Ln(R);
        } catch {
        }
      else
        try {
          R.setAttribute(w, "");
        } catch {
        }
  }, xl = function(w) {
    const R = W(w);
    if (R)
      for (let G = R.length - 1; G >= 0; --G) {
        const oe = R[G], he = oe && oe.name;
        typeof he != "string" || N[it(he)] || qi(w, oe, he);
      }
  }, qn = function(w) {
    const R = [w];
    for (; R.length > 0; ) {
      const G = R.pop();
      Q(G) === an.element && xl(G);
      const he = O(G);
      if (he)
        for (let Ce = he.length - 1; Ce >= 0; --Ce)
          R.push(he[Ce]);
    }
  }, Os = function(w, R) {
    return $e ? w === "patchsrc" ? !0 : w === "for" && R !== "label" && R !== "output" : !1;
  }, sr = function(w) {
    if (!$e)
      return;
    const R = [w];
    for (; R.length > 0; ) {
      const G = R.pop(), oe = Q(G);
      if (oe === an.processingInstruction || oe === an.comment && Pt(jd, G.data)) {
        try {
          x(G);
        } catch {
        }
        continue;
      }
      if (oe === an.element) {
        const Ce = G, Je = it(ue(G));
        try {
          Ce.hasAttribute && Ce.hasAttribute("patchsrc") && Ce.removeAttribute("patchsrc"), Ce.hasAttribute && Ce.hasAttribute("for") && Os("for", Je) && Ce.removeAttribute("for");
        } catch {
        }
      }
      const he = O(G);
      if (he)
        for (let Ce = he.length - 1; Ce >= 0; --Ce)
          R.push(he[Ce]);
    }
  }, Yi = function(w) {
    let R = null, G = null;
    if (yt)
      w = "<remove></remove>" + w;
    else {
      const Ce = Rd(w, /^[\r\n\t ]+/);
      G = Ce && Ce[0];
    }
    _i === "application/xhtml+xml" && yi === dn && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const oe = Y ? F(w) : w;
    if (yi === dn)
      try {
        R = new u().parseFromString(oe, _i);
      } catch {
      }
    if (!R || !R.documentElement) {
      R = pe.createDocument(yi, "template", null);
      try {
        R.documentElement.innerHTML = Ea ? se : oe;
      } catch {
      }
    }
    const he = R.body || R.documentElement;
    return w && G && he.insertBefore(n.createTextNode(G), he.childNodes[0] || null), yi === dn ? me.call(R, Ee ? "html" : "body")[0] : Ee ? R.documentElement : he;
  }, or = function(w) {
    const R = ce ? ce(w) : w.ownerDocument;
    return ve.call(
      R || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Xi = function(w) {
    return w = Cr(w, st, " "), w = Cr(w, ct, " "), w = Cr(w, ft, " "), w;
  }, Zi = function(w) {
    var R;
    w.normalize();
    const G = ce ? ce(w) : w.ownerDocument, oe = ve.call(
      G || w,
      w,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let he = oe.nextNode();
    for (; he; )
      he.data = Xi(he.data), he = oe.nextNode();
    const Ce = (R = w.querySelectorAll) === null || R === void 0 ? void 0 : R.call(w, "template");
    Ce && oa(Ce, (Je) => {
      Cn(Je.content) && Zi(Je.content);
    });
  }, It = function(w) {
    const R = P ? P(w) : null;
    return typeof R != "string" || it(R) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    w.attributes !== W(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    w.nodeType !== I(w) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    w.childNodes !== O(w);
  }, Cn = function(w) {
    if (!I || typeof w != "object" || w === null)
      return !1;
    try {
      return I(w) === an.documentFragment;
    } catch {
      return !1;
    }
  }, wi = function(w) {
    if (!I || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof I(w) == "number";
    } catch {
      return !1;
    }
  };
  function fn(J, w, R) {
    J.length !== 0 && oa(J, (G) => {
      G.call(t, w, R, Kn);
    });
  }
  const Nl = function(w, R) {
    return !!($e && w.hasChildNodes() && !wi(w.firstElementChild) && Pt(Bd, w.textContent) && Pt(Bd, w.innerHTML) || $e && w.namespaceURI === dn && oy[R] && (wi(w.firstElementChild) || typeof w.textContent == "string" && Pt(ly[R], w.textContent)) || w.nodeType === an.processingInstruction || $e && w.nodeType === an.comment && Pt(jd, w.data));
  }, xa = function(w, R) {
    if (w instanceof RegExp)
      return Pt(w, R);
    if (w instanceof Function) {
      for (var G = arguments.length, oe = new Array(G > 2 ? G - 2 : 0), he = 2; he < G; he++)
        oe[he - 2] = arguments[he];
      return !!w(R, ...oe);
    }
    return !1;
  }, ke = function(w, R, G) {
    if (!V[R] && lr(R) && xa(q.tagNameCheck, R))
      return !1;
    if (Sa && !bi[R]) {
      const oe = D(w), he = O(w);
      if (he && oe) {
        const Ce = he.length;
        for (let Je = Ce - 1; Je >= 0; --Je) {
          const at = w === G ? E(he[Je], !0) : he[Je];
          oe.insertBefore(at, A(w));
        }
      }
    }
    return Ln(w), !0;
  }, Rn = function(w, R, G, oe) {
    return w.length === 0 ? R : R === G || R === oe ? sn(R) : R;
  }, _t = function(w, R) {
    return w === R || D(w) !== null ? !1 : (Ja && qn(w), !0);
  }, In = function(w, R) {
    if (fn(Ae.beforeSanitizeElements, w, null), _t(w, R))
      return !0;
    if (It(w))
      return Ln(w), !0;
    const G = it(ue(w));
    if (k = Rn(Ae.uponSanitizeElement, k, L, nt), fn(Ae.uponSanitizeElement, w, {
      tagName: G,
      allowedTags: k
    }), _t(w, R))
      return !0;
    if (Nl(w, G))
      return Ln(w), !0;
    if (V[G] || !(H.tagCheck instanceof Function && H.tagCheck(G)) && !k[G]) {
      const he = ke(w, G, R);
      return he === !1 && fn(Ae.afterSanitizeElements, w, null), he;
    }
    if (Q(w) === an.element && !Yt(w) || (G === "noscript" || G === "noembed" || G === "noframes") && Pt(ry, w.innerHTML))
      return Ln(w), !0;
    if (Ne && w.nodeType === an.text) {
      const he = Xi(w.textContent);
      w.textContent !== he && (Sr(t.removed, {
        element: w.cloneNode()
      }), w.textContent = he);
    }
    return fn(Ae.afterSanitizeElements, w, null), !1;
  }, Xt = function(w, R, G) {
    if (Z[R] || Os(R, w) || Vt && (R === "id" || R === "name") && (G in n || G in As))
      return !1;
    const oe = N[R] || H.attributeCheck instanceof Function && H.attributeCheck(R, w);
    return le && Pt(ut, R) || _e && Pt(Ze, R) ? !0 : oe ? Cs[R] || Pt(C, Cr(G, B, "")) || (R === "src" || R === "xlink:href" || R === "href") && w !== "script" && Id(G, "data:") === 0 && ws[w] || fe && !Pt(qt, Cr(G, B, "")) ? !0 : !G : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      lr(w) && xa(q.tagNameCheck, w) && xa(q.attributeNameCheck, R, w) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      R === "is" && q.allowCustomizedBuiltInElements && xa(q.tagNameCheck, G)
    );
  }, wt = He({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), lr = function(w) {
    return !wt[Lr(w)] && Pt(m, w);
  }, Yn = function(w, R, G, oe) {
    if (Y && typeof h == "object" && typeof h.getAttributeType == "function" && !G)
      switch (h.getAttributeType(w, R)) {
        case "TrustedHTML":
          return F(oe);
        case "TrustedScriptURL":
          return X(oe);
      }
    return oe;
  }, Xn = function(w, R, G, oe) {
    try {
      G ? w.setAttributeNS(G, R, oe) : w.setAttribute(R, oe), It(w) ? Ln(w) : Ld(t.removed);
    } catch {
      Wn(R, w);
    }
  }, Na = function(w) {
    fn(Ae.beforeSanitizeAttributes, w, null);
    const R = w.attributes;
    if (!R || It(w))
      return;
    N = Rn(Ae.uponSanitizeAttribute, N, z, Tt);
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let oe = R.length;
    const he = it(w.nodeName);
    for (; oe--; ) {
      const Ce = R[oe], Je = Ce.name, at = Ce.namespaceURI, gt = Ce.value, Et = it(Je), La = gt;
      let At = Je === "value" ? La : Bb(La);
      if (G.attrName = Et, G.attrValue = At, G.keepAttr = !0, G.forceKeepAttr = void 0, fn(Ae.uponSanitizeAttribute, w, G), At = G.attrValue, Gi && (Et === "id" || Et === "name") && Id(At, Rt) !== 0 && (Wn(Je, w, Ce), At = Rt + At), $e && Pt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, At)) {
        Wn(Je, w, Ce);
        continue;
      }
      if (Et === "attributename" && Rd(At, "href")) {
        Wn(Je, w, Ce);
        continue;
      }
      if (!G.forceKeepAttr) {
        if (!G.keepAttr) {
          Wn(Je, w, Ce);
          continue;
        }
        if (!we && Pt(sy, At)) {
          Wn(Je, w, Ce);
          continue;
        }
        if (Ne && (At = Xi(At)), !Xt(he, Et, At)) {
          Wn(Je, w, Ce);
          continue;
        }
        At = Yn(he, Et, at, At), At !== La && Xn(w, Je, at, At);
      }
    }
    fn(Ae.afterSanitizeAttributes, w, null);
  }, Zt = function(w) {
    let R = null;
    const G = or(w);
    for (fn(Ae.beforeSanitizeShadowDOM, w, null); R = G.nextNode(); )
      if (fn(Ae.uponSanitizeShadowNode, R, null), In(R, w), Na(R), Cn(R.content) && Zt(R.content), Q(R) === an.element) {
        const oe = M(R);
        Cn(oe) && (Si(oe), Zt(oe));
      }
    fn(Ae.afterSanitizeShadowDOM, w, null);
  }, Si = function(w) {
    const R = [{
      node: w,
      shadow: null
    }];
    for (; R.length > 0; ) {
      const G = R.pop();
      if (G.shadow) {
        Zt(G.shadow);
        continue;
      }
      const oe = G.node, Ce = Q(oe) === an.element, Je = O(oe);
      if (Je)
        for (let at = Je.length - 1; at >= 0; --at)
          R.push({
            node: Je[at],
            shadow: null
          });
      if (Ce) {
        const at = P ? P(oe) : null;
        if (typeof at == "string" && it(at) === "template") {
          const gt = oe.content;
          Cn(gt) && R.push({
            node: gt,
            shadow: null
          });
        }
      }
      if (Ce) {
        const at = M(oe);
        Cn(at) && R.push({
          node: null,
          shadow: at
        }, {
          node: at,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(J) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = null, G = null, oe = null, he = null;
    if (Ea = !J, Ea && (J = "<!-->"), typeof J != "string" && !wi(J) && (J = Kb(J), typeof J != "string"))
      throw aa("dirty is not a string, aborting");
    if (!t.isSupported)
      return J;
    Qe ? (k = nt, N = Tt) : ka(w), (Ae.uponSanitizeElement.length > 0 || Ae.uponSanitizeAttribute.length > 0) && (k = sn(k)), Ae.uponSanitizeAttribute.length > 0 && (N = sn(N)), t.removed = [];
    const Ce = Ja && typeof J != "string" && wi(J);
    if (Ce) {
      sr(J);
      const gt = ue(J);
      if (typeof gt == "string") {
        const Et = it(gt);
        if (!k[Et] || V[Et])
          throw Oa(J), aa("root node is forbidden and cannot be sanitized in-place");
      }
      if (It(J))
        throw Oa(J), aa("root node is clobbered and cannot be sanitized in-place");
      try {
        Si(J);
      } catch (Et) {
        throw Oa(J), Et;
      }
    } else if (wi(J))
      R = Yi("<!---->"), G = R.ownerDocument.importNode(J, !0), G.nodeType === an.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? R = G : R.appendChild(G), Si(G);
    else {
      if (!Ht && !Ne && !Ee && // eslint-disable-next-line unicorn/prefer-includes
      J.indexOf("<") === -1)
        return Y && ot ? F(J) : J;
      if (R = Yi(J), !R)
        return Ht ? null : ot ? se : "";
    }
    R && yt && Ln(R.firstChild);
    const Je = Ce ? J : R;
    try {
      const gt = or(Je);
      for (; oe = gt.nextNode(); )
        In(oe, Je), Na(oe), Cn(oe.content) && Zt(oe.content);
    } catch (gt) {
      throw Ce && (Oa(J), oa(t.removed, (Et) => {
        Et.element && qn(Et.element);
      })), gt;
    }
    if (Ce)
      return oa(t.removed, (gt) => {
        gt.element && qn(gt.element);
      }), Ne && Zi(J), J;
    if (Ht) {
      if (Ne && Zi(R), en)
        for (he = ye.call(R.ownerDocument); R.firstChild; )
          he.appendChild(R.firstChild);
      else
        he = R;
      return (N.shadowroot || N.shadowrootmode) && (he = Ge.call(i, he, !0)), he;
    }
    let at = Ee ? R.outerHTML : R.innerHTML;
    return Ee && k["!doctype"] && R.ownerDocument && R.ownerDocument.doctype && R.ownerDocument.doctype.name && Pt(iy, R.ownerDocument.doctype.name) && (at = "<!DOCTYPE " + R.ownerDocument.doctype.name + `>
` + at), Ne && (at = Xi(at)), Y && ot ? F(at) : at;
  }, t.setConfig = function() {
    let J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ka(J), Qe = !0, nt = k, Tt = N;
  }, t.clearConfig = function() {
    Kn = null, Qe = !1, nt = null, Tt = null, Y = ge, se = "";
  }, t.isValidAttribute = function(J, w, R) {
    Kn || ka({});
    const G = it(J), oe = it(w);
    return Xt(G, oe, R);
  }, t.addHook = function(J, w) {
    typeof w == "function" && Qt(Ae, J) && Sr(Ae[J], w);
  }, t.removeHook = function(J, w) {
    if (Qt(Ae, J)) {
      if (w !== void 0) {
        const R = zb(Ae[J], w);
        return R === -1 ? void 0 : Ub(Ae[J], R, 1)[0];
      }
      return Ld(Ae[J]);
    }
  }, t.removeHooks = function(J) {
    Qt(Ae, J) && (Ae[J] = []);
  }, t.removeAllHooks = function() {
    Ae = Hd();
  }, t;
}
var sp = rp();
function mu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ec, Vd;
function dy() {
  if (Vd) return ec;
  Vd = 1;
  var e = /["'&<>]/;
  ec = t;
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
  return ec;
}
var fy = dy();
const mo = /* @__PURE__ */ mu(fy);
function hy() {
  return globalThis._nc_l10n_locale;
}
function py() {
  return hy().replaceAll(/_/g, "-");
}
function yl() {
  return globalThis._nc_l10n_language;
}
function vy(e) {
  const t = yl();
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
function op(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function y(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, s = typeof i == "number" ? i : typeof n == "number" ? n : void 0, o = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (A) => A, f = (o.sanitize ? sp.sanitize : l) || l, u = o.escape ? mo : l, h = (A) => typeof A == "string" || typeof A == "number", S = (A, O, D) => A.replace(/%n/g, "" + D).replace(/{([^{}]*)}/g, (M, W) => {
    if (O === void 0 || !(W in O))
      return u(M);
    const I = O[W];
    return h(I) ? u(`${I}`) : typeof I == "object" && h(I.value) ? (I.escape !== !1 ? mo : l)(`${I.value}`) : u(M);
  });
  let x = (a?.bundle ?? op(e)).translations[t] || t;
  return x = Array.isArray(x) ? x[0] : x, f(typeof r == "object" || s !== void 0 ? S(
    x,
    r,
    s
  ) : x);
}
function Fn(e, t, n, i, a, r) {
  const s = "_" + t + "_::_" + n + "_", o = r?.bundle ?? op(e), l = o.translations[s];
  if (typeof l < "u") {
    const f = l;
    if (Array.isArray(f)) {
      const u = o.pluralFunction(i);
      return y(e, f[u], a, i, r);
    }
  }
  return i === 1 ? y(e, t, a, i, r) : y(e, n, a, i, r);
}
function gy(e, t = yl()) {
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
class bo {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? bo.GLOBAL_SCOPE_PERSISTENT : bo.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class my {
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
    return new bo(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function lp(e) {
  return new my(e);
}
function by() {
  try {
    return gu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var tc, Gd;
function cp() {
  if (Gd) return tc;
  Gd = 1;
  var e = {};
  return tc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, tc;
}
var nc, Kd;
function up() {
  if (Kd) return nc;
  Kd = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return nc = {
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
  }, nc;
}
var Hs = { exports: {} }, Wd;
function yy() {
  return Wd || (Wd = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = up(), r = cp();
    t = e.exports = {};
    const s = t.re = [], o = t.safeRe = [], l = t.src = [], f = t.safeSrc = [], u = t.t = {};
    let h = 0;
    const S = "[a-zA-Z0-9-]", E = [
      ["\\s", 1],
      ["\\d", a],
      [S, i]
    ], x = (O) => {
      for (const [D, M] of E)
        O = O.split(`${D}*`).join(`${D}{0,${M}}`).split(`${D}+`).join(`${D}{1,${M}}`);
      return O;
    }, A = (O, D, M) => {
      const W = x(D), I = h++;
      r(O, I, D), u[O] = I, l[I] = D, f[I] = W, s[I] = new RegExp(D, M ? "g" : void 0), o[I] = new RegExp(W, M ? "g" : void 0);
    };
    A("NUMERICIDENTIFIER", "0|[1-9]\\d*"), A("NUMERICIDENTIFIERLOOSE", "\\d+"), A("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${S}*`), A("MAINVERSION", `(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})\\.(${l[u.NUMERICIDENTIFIER]})`), A("MAINVERSIONLOOSE", `(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})\\.(${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASEIDENTIFIER", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIER]})`), A("PRERELEASEIDENTIFIERLOOSE", `(?:${l[u.NONNUMERICIDENTIFIER]}|${l[u.NUMERICIDENTIFIERLOOSE]})`), A("PRERELEASE", `(?:-(${l[u.PRERELEASEIDENTIFIER]}(?:\\.${l[u.PRERELEASEIDENTIFIER]})*))`), A("PRERELEASELOOSE", `(?:-?(${l[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[u.PRERELEASEIDENTIFIERLOOSE]})*))`), A("BUILDIDENTIFIER", `${S}+`), A("BUILD", `(?:\\+(${l[u.BUILDIDENTIFIER]}(?:\\.${l[u.BUILDIDENTIFIER]})*))`), A("FULLPLAIN", `v?${l[u.MAINVERSION]}${l[u.PRERELEASE]}?${l[u.BUILD]}?`), A("FULL", `^${l[u.FULLPLAIN]}$`), A("LOOSEPLAIN", `[v=\\s]*${l[u.MAINVERSIONLOOSE]}${l[u.PRERELEASELOOSE]}?${l[u.BUILD]}?`), A("LOOSE", `^${l[u.LOOSEPLAIN]}$`), A("GTLT", "((?:<|>)?=?)"), A("XRANGEIDENTIFIERLOOSE", `${l[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), A("XRANGEIDENTIFIER", `${l[u.NUMERICIDENTIFIER]}|x|X|\\*`), A("XRANGEPLAIN", `[v=\\s]*(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:\\.(${l[u.XRANGEIDENTIFIER]})(?:${l[u.PRERELEASE]})?${l[u.BUILD]}?)?)?`), A("XRANGEPLAINLOOSE", `[v=\\s]*(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[u.XRANGEIDENTIFIERLOOSE]})(?:${l[u.PRERELEASELOOSE]})?${l[u.BUILD]}?)?)?`), A("XRANGE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAIN]}$`), A("XRANGELOOSE", `^${l[u.GTLT]}\\s*${l[u.XRANGEPLAINLOOSE]}$`), A("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), A("COERCE", `${l[u.COERCEPLAIN]}(?:$|[^\\d])`), A("COERCEFULL", l[u.COERCEPLAIN] + `(?:${l[u.PRERELEASE]})?(?:${l[u.BUILD]})?(?:$|[^\\d])`), A("COERCERTL", l[u.COERCE], !0), A("COERCERTLFULL", l[u.COERCEFULL], !0), A("LONETILDE", "(?:~>?)"), A("TILDETRIM", `(\\s*)${l[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", A("TILDE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAIN]}$`), A("TILDELOOSE", `^${l[u.LONETILDE]}${l[u.XRANGEPLAINLOOSE]}$`), A("LONECARET", "(?:\\^)"), A("CARETTRIM", `(\\s*)${l[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", A("CARET", `^${l[u.LONECARET]}${l[u.XRANGEPLAIN]}$`), A("CARETLOOSE", `^${l[u.LONECARET]}${l[u.XRANGEPLAINLOOSE]}$`), A("COMPARATORLOOSE", `^${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]})$|^$`), A("COMPARATOR", `^${l[u.GTLT]}\\s*(${l[u.FULLPLAIN]})$|^$`), A("COMPARATORTRIM", `(\\s*)${l[u.GTLT]}\\s*(${l[u.LOOSEPLAIN]}|${l[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", A("HYPHENRANGE", `^\\s*(${l[u.XRANGEPLAIN]})\\s+-\\s+(${l[u.XRANGEPLAIN]})\\s*$`), A("HYPHENRANGELOOSE", `^\\s*(${l[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[u.XRANGEPLAINLOOSE]})\\s*$`), A("STAR", "(<|>)?=?\\s*\\*"), A("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), A("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(Hs, Hs.exports)), Hs.exports;
}
var ic, qd;
function _y() {
  if (qd) return ic;
  qd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return ic = (i) => i ? typeof i != "object" ? e : i : t, ic;
}
var ac, Yd;
function wy() {
  if (Yd) return ac;
  Yd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), s = e.test(a);
    return r && s && (i = +i, a = +a), i === a ? 0 : r && !s ? -1 : s && !r ? 1 : i < a ? -1 : 1;
  };
  return ac = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, ac;
}
var rc, Xd;
function dp() {
  if (Xd) return rc;
  Xd = 1;
  const e = cp(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = up(), { safeRe: i, t: a } = yy(), r = _y(), { compareIdentifiers: s } = wy(), o = (f, u) => {
    const h = u.split(".");
    if (h.length > f.length)
      return !1;
    for (let S = 0; S < h.length; S++)
      if (s(f[S], h[S]) !== 0)
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
      const S = u.trim().match(h.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!S)
        throw new TypeError(`Invalid Version: ${u}`);
      if (this.raw = u, this.major = +S[1], this.minor = +S[2], this.patch = +S[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      S[4] ? this.prerelease = S[4].split(".").map((E) => {
        if (/^[0-9]+$/.test(E)) {
          const x = +E;
          if (x >= 0 && x < n)
            return x;
        }
        return E;
      }) : this.prerelease = [], this.build = S[5] ? S[5].split(".") : [], this.format();
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
        const S = this.prerelease[h], E = u.prerelease[h];
        if (e("prerelease compare", h, S, E), S === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (S === void 0)
          return -1;
        if (S === E)
          continue;
        return s(S, E);
      } while (++h);
    }
    compareBuild(u) {
      u instanceof l || (u = new l(u, this.options));
      let h = 0;
      do {
        const S = this.build[h], E = u.build[h];
        if (e("build compare", h, S, E), S === void 0 && E === void 0)
          return 0;
        if (E === void 0)
          return 1;
        if (S === void 0)
          return -1;
        if (S === E)
          continue;
        return s(S, E);
      } while (++h);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(u, h, S) {
      if (u.startsWith("pre")) {
        if (!h && S === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (h) {
          const E = `-${h}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!E || E[1] !== h)
            throw new Error(`invalid identifier: ${h}`);
        }
      }
      switch (u) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", h, S);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", h, S);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", h, S), this.inc("pre", h, S);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", h, S), this.inc("pre", h, S);
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
          const E = Number(S) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [E];
          else {
            let x = this.prerelease.length;
            for (; --x >= 0; )
              typeof this.prerelease[x] == "number" && (this.prerelease[x]++, x = -2);
            if (x === -1) {
              if (h === this.prerelease.join(".") && S === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(E);
            }
          }
          if (h) {
            let x = [h, E];
            if (S === !1 && (x = [h]), o(this.prerelease, h)) {
              const A = this.prerelease[h.split(".").length];
              isNaN(A) && (this.prerelease = x);
            } else
              this.prerelease = x;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${u}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return rc = l, rc;
}
var sc, Zd;
function Sy() {
  if (Zd) return sc;
  Zd = 1;
  const e = dp();
  return sc = (n, i) => new e(n, i).major, sc;
}
var Cy = Sy();
const Jd = /* @__PURE__ */ mu(Cy);
var oc, Qd;
function Ty() {
  if (Qd) return oc;
  Qd = 1;
  const e = dp();
  return oc = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, oc;
}
var lc, ef;
function Ey() {
  if (ef) return lc;
  ef = 1;
  const e = Ty();
  return lc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, lc;
}
var Ay = Ey();
const ky = /* @__PURE__ */ mu(Ay);
class Oy {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !ky(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Jd(t.getVersion()) !== Jd(this.getVersion()) && console.warn(
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
class xy {
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
let Er = null;
function bu() {
  return Er !== null ? Er : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Er = new Oy(window._nc_event_bus) : Er = window._nc_event_bus = new xy(), Er);
}
function fp(e, t) {
  bu().subscribe(e, t);
}
function Ny(e, t) {
  bu().unsubscribe(e, t);
}
function ui(e, ...t) {
  bu().emit(e, ...t);
}
const hp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ly = Object.prototype.toString, Ry = (e) => Ly.call(e) === "[object Object]", $a = () => {
}, Iy = /* @__PURE__ */ Py();
function Py() {
  var e, t, n;
  return hp && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function cc(e) {
  return Array.isArray(e) ? e : [e];
}
function $y(e, t, n) {
  return rt(e, t, {
    ...n,
    immediate: !0
  });
}
const pp = hp ? window : void 0;
function Rr(e) {
  var t;
  const n = li(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function qa(...e) {
  const t = (i, a, r, s) => (i.addEventListener(a, r, s), () => i.removeEventListener(a, r, s)), n = K(() => {
    const i = cc(li(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return $y(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Rr(r))) !== null && i !== void 0 ? i : [pp].filter((r) => r != null),
      cc(li(n.value ? e[1] : e[0])),
      cc(b(n.value ? e[2] : e[1])),
      li(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, s], o, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const f = Ry(s) ? { ...s } : s, u = i.flatMap((h) => a.flatMap((S) => r.map((E) => t(h, S, E, f))));
    l(() => {
      u.forEach((h) => h());
    });
  }, { flush: "post" });
}
let tf = !1;
function nf(e, t, n = {}) {
  const { window: i = pp, ignore: a = [], capture: r = !0, detectIframe: s = !1, controls: o = !1 } = n;
  if (!i) return o ? {
    stop: $a,
    cancel: $a,
    trigger: $a
  } : $a;
  if (Iy && !tf) {
    tf = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((D) => D.addEventListener("click", $a, O)), i.document.documentElement.addEventListener("click", $a, O);
  }
  let l = !0;
  const f = (O) => li(a).some((D) => {
    if (typeof D == "string") return Array.from(i.document.querySelectorAll(D)).some((M) => M === O.target || O.composedPath().includes(M));
    {
      const M = Rr(D);
      return M && (O.target === M || O.composedPath().includes(M));
    }
  });
  function u(O) {
    const D = li(O);
    return D && D.$.subTree.shapeFlag === 16;
  }
  function h(O, D) {
    const M = li(O), W = M.$.subTree && M.$.subTree.children;
    return W == null || !Array.isArray(W) ? !1 : W.some((I) => I.el === D.target || D.composedPath().includes(I.el));
  }
  const S = (O) => {
    const D = Rr(e);
    if (O.target != null && !(!(D instanceof Element) && u(e) && h(e, O)) && !(!D || D === O.target || O.composedPath().includes(D))) {
      if ("detail" in O && O.detail === 0 && (l = !f(O)), !l) {
        l = !0;
        return;
      }
      t(O);
    }
  };
  let E = !1;
  const x = [
    qa(i, "click", (O) => {
      E || (E = !0, setTimeout(() => {
        E = !1;
      }, 0), S(O));
    }, {
      passive: !0,
      capture: r
    }),
    qa(i, "pointerdown", (O) => {
      const D = Rr(e);
      l = !f(O) && !!(D && !O.composedPath().includes(D));
    }, { passive: !0 }),
    s && qa(i, "blur", (O) => {
      setTimeout(() => {
        const D = Rr(e);
        let M = i.document.activeElement;
        for (; M?.shadowRoot; ) M = M.shadowRoot.activeElement;
        M?.tagName === "IFRAME" && !D?.contains(i.document.activeElement) && t(O);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), A = () => x.forEach((O) => O());
  return o ? {
    stop: A,
    cancel: () => {
      l = !1;
    },
    trigger: (O) => {
      l = !0, S(O), l = !1;
    }
  } : A;
}
function Dy(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: s = !0 } = t, o = /* @__PURE__ */ Dt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Dt({
    x: 0,
    y: 0
  }), f = K(() => o.x - l.x), u = K(() => o.y - l.y), { max: h, abs: S } = Math, E = K(() => h(S(f.value), S(u.value)) >= n), x = /* @__PURE__ */ sh(!1), A = K(() => E.value ? S(f.value) > S(u.value) ? f.value > 0 ? "left" : "right" : u.value > 0 ? "up" : "down" : "none"), O = (Q) => [Q.touches[0].clientX, Q.touches[0].clientY], D = (Q, ue) => {
    o.x = Q, o.y = ue;
  }, M = (Q, ue) => {
    l.x = Q, l.y = ue;
  }, W = {
    passive: s,
    capture: !s
  }, I = (Q) => {
    x.value && a?.(Q, A.value), x.value = !1;
  }, P = [
    qa(e, "touchstart", (Q) => {
      if (Q.touches.length !== 1) return;
      const [ue, Y] = O(Q);
      D(ue, Y), M(ue, Y), r?.(Q);
    }, W),
    qa(e, "touchmove", (Q) => {
      if (Q.touches.length !== 1) return;
      const [ue, Y] = O(Q);
      M(ue, Y), W.capture && !W.passive && Math.abs(f.value) > Math.abs(u.value) && Q.preventDefault(), !x.value && E.value && (x.value = !0), x.value && i?.(Q);
    }, W),
    qa(e, ["touchend", "touchcancel"], I, W)
  ];
  return {
    isSwiping: x,
    direction: A,
    coordsStart: o,
    coordsEnd: l,
    lengthX: f,
    lengthY: u,
    stop: () => P.forEach((Q) => Q())
  };
}
var My = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = dm(), r = um(), s = /* @__PURE__ */ Pe([]), o = K(() => s.value.reduce((B, m) => (B[~~m.id] = m) && B, {})), l = K(() => s.value.length), f = /* @__PURE__ */ Pe(null), u = /* @__PURE__ */ Pe(!1), h = /* @__PURE__ */ Pe({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), S = /* @__PURE__ */ Pe({
      splitter: null,
      timeoutId: null
    }), E = K(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": u.value
    })), x = () => {
      document.addEventListener("mousemove", D, { passive: !1 }), document.addEventListener("mouseup", M), "ontouchstart" in window && (document.addEventListener("touchmove", D, { passive: !1 }), document.addEventListener("touchend", M));
    }, A = () => {
      document.removeEventListener("mousemove", D, { passive: !1 }), document.removeEventListener("mouseup", M), "ontouchstart" in window && (document.removeEventListener("touchmove", D, { passive: !1 }), document.removeEventListener("touchend", M));
    }, O = (B, m) => {
      let C = B.target.closest(".splitpanes__splitter");
      if (C) {
        let { left: k, top: L } = C.getBoundingClientRect(), { clientX: N, clientY: z } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
        h.value.cursorOffset = i.horizontal ? z - L : N - k;
      }
      x(), h.value.mouseDown = !0, h.value.activeSplitter = m, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, D = (B) => {
      h.value.mouseDown && (B.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        Y(Q(B)), Ze("resize", { event: B }, !0);
      }));
    }, M = (B) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), Ze("resized", { event: B }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, A(), document.documentElement.style.cursor = "";
      }, 100);
    }, W = (B, m) => {
      "ontouchstart" in window && (B.preventDefault(), S.value.splitter === m ? (clearTimeout(S.value.timeoutId), S.value.timeoutId = null, I(B, m), S.value.splitter = null) : (S.value.splitter = m, S.value.timeoutId = setTimeout(() => S.value.splitter = null, 500))), h.value.dragging || Ze("splitter-click", {
        event: B,
        index: m
      }, !0);
    }, I = (B, m) => {
      if (Ze("splitter-dblclick", {
        event: B,
        index: m
      }, !0), i.maximizePanes) {
        let C = 0;
        s.value = s.value.map((k, L) => (k.size = L === m ? k.max : k.min, L !== m && (C += k.min), k)), s.value[m].size -= C, Ze("pane-maximize", {
          event: B,
          index: m,
          pane: s.value[m]
        }), Ze("resized", {
          event: B,
          index: m
        }, !0);
      }
    }, P = (B, m) => {
      if (!i.keyboardStep) return;
      let C = i.horizontal ? B.key === "ArrowDown" : B.key === "ArrowRight", k = i.horizontal ? B.key === "ArrowUp" : B.key === "ArrowLeft";
      if (!C && !k) return;
      B.preventDefault(), h.value.activeSplitter = m;
      let L = (C ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), N = ee(m) + s.value[m].size;
      se(Math.min(Math.max(N + L * i.keyboardStep, 0), 100)), Ze("resize", { event: B }, !0), Ze("resized", { event: B }, !0), h.value.activeSplitter = null;
    }, ce = (B, m) => {
      let C = o.value[m];
      C && Ze("pane-click", {
        event: B,
        index: C.index,
        pane: C
      });
    }, Q = (B) => {
      let m = f.value.getBoundingClientRect(), { clientX: C, clientY: k } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
      return {
        x: C - (i.horizontal ? 0 : h.value.cursorOffset) - m.left,
        y: k - (i.horizontal ? h.value.cursorOffset : 0) - m.top
      };
    }, ue = (B) => {
      B = B[i.horizontal ? "y" : "x"];
      let m = f.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (B = m - B), B * 100 / m;
    }, Y = (B) => {
      se(ue(B));
    }, se = (B) => {
      let m = h.value.activeSplitter;
      if (m === null || m >= s.value.length - 1) return;
      let C = {
        prevPanesSize: ee(m),
        nextPanesSize: ie(m),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, k = 0 + (i.pushOtherPanes ? 0 : C.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : C.nextPanesSize);
      B = Math.max(Math.min(B, L), k);
      let N = [m, m + 1], z = s.value[N[0]] || null, q = s.value[N[1]] || null, V = z !== null && z.max < 100 && B >= z.max + C.prevPanesSize, Z = q !== null && q.max < 100 && B <= 100 - (q.max + ie(m + 1));
      if (V || Z) {
        V ? (z.size = z.max, q.size = Math.min(Math.max(100 - z.max - C.prevPanesSize - C.nextPanesSize, q.min), q.max)) : (z.size = Math.min(Math.max(100 - q.max - C.prevPanesSize - ie(m + 1), z.min), z.max), q.size = q.max);
        return;
      }
      if (i.pushOtherPanes) {
        let H = ge(C, B);
        if (!H) return;
        ({ sums: C, panesToResize: N } = H), z = s.value[N[0]] || null, q = s.value[N[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(B - C.prevPanesSize - C.prevReachedMinPanes, z.min), z.max)), q !== null && (q.size = Math.min(Math.max(100 - B - C.nextPanesSize - C.nextReachedMinPanes, q.min), q.max));
    }, ge = (B, m) => {
      let C = h.value.activeSplitter, k = [C, C + 1];
      if (m < B.prevPanesSize + s.value[k[0]].min) {
        if (k[0] = $(C).index, B.prevReachedMinPanes = 0, k[0] < C && s.value.forEach((L, N) => {
          N > k[0] && N <= C && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), k[0] === void 0) return B.prevReachedMinPanes = 0, s.value[0].size = s.value[0].min, s.value.forEach((L, N) => {
          N > 0 && N <= C && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), s.value[k[1]].size = 100 - B.prevReachedMinPanes - s.value[0].min - B.prevPanesSize - B.nextPanesSize, null;
        B.prevPanesSize = ee(k[0]);
      }
      return m > 100 - B.nextPanesSize - s.value[k[1]].min && (k[1] = F(C).index, B.nextReachedMinPanes = 0, k[1] > C + 1 && s.value.forEach((L, N) => {
        N > C && N < k[1] && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), B.nextPanesSize = k[1] === void 0 ? 0 : ie(k[1] - 1), k[1] === void 0) ? (B.nextReachedMinPanes = 0, s.value.forEach((L, N) => {
        N >= C + 1 && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), k[0] !== void 0 && (s.value[k[0]].size = 100 - B.prevPanesSize - ie(k[0] - 1)), null) : {
        sums: B,
        panesToResize: k
      };
    }, ee = (B) => s.value.reduce((m, C, k) => m + (k < B ? C.size : 0), 0), ie = (B) => s.value.reduce((m, C, k) => m + (k > B + 1 ? C.size : 0), 0), $ = (B) => [...s.value].reverse().find((m) => m.index < B && m.size > m.min) || {}, F = (B) => s.value.find((m) => m.index > B + 1 && m.size > m.min) || {}, X = () => {
      let B = Array.from(f.value?.children || []);
      for (let m of B) {
        let C = m.classList.contains("splitpanes__pane"), k = m.classList.contains("splitpanes__splitter");
        !C && !k && (m.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, ae = (B, m, C = !1) => {
      let k = B - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), C || (L.onmousedown = (N) => O(N, k), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (N) => O(N, k)), L.onclick = (N) => W(N, k + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (N) => P(N, k))), L.ondblclick = (N) => I(N, k + 1), m.parentNode.insertBefore(L, m);
    }, ne = (B) => {
      B.onmousedown = null, B.onclick = null, B.ondblclick = null, B.onkeydown = null, B.remove();
    }, pe = () => {
      let B = Array.from(f.value?.children || []);
      for (let C of B) C.className.includes("splitpanes__splitter") && ne(C);
      let m = 0;
      for (let C of B) C.className.includes("splitpanes__pane") && (!m && i.firstSplitter ? ae(m, C, !0) : m && ae(m, C), m++);
    }, ve = ({ uid: B, ...m }) => {
      let C = o.value[B];
      for (let [k, L] of Object.entries(m)) C[k] = L;
    }, ye = !1, me = (B) => {
      let m = -1;
      Array.from(f.value?.children || []).some((C) => (C.className.includes("splitpanes__pane") && m++, C.isSameNode(B.el))), s.value.splice(m, 0, {
        ...B,
        index: m
      }), s.value.forEach((C, k) => C.index = k), u.value && !ye && (ye = !0, on(() => {
        pe(), Ae({ addedPane: s.value[m] }), Ze("pane-add", { pane: s.value[m] }), ye = !1;
      }));
    }, Ge = (B) => {
      let m = s.value.findIndex((k) => k.id === B);
      s.value[m].el = null;
      let C = s.value.splice(m, 1)[0];
      s.value.forEach((k, L) => k.index = L), on(() => {
        pe(), Ze("pane-remove", { pane: C }), Ae({ removedPane: {
          ...C
        } });
      });
    }, Ae = (B = {}) => {
      !B.addedPane && !B.removedPane ? ct() : s.value.some((m) => m.givenSize !== null || m.min || m.max < 100) ? ft(B) : st(), u.value && Ze("resized");
    }, st = () => {
      let B = 100 / l.value, m = 100, C = [], k = [];
      for (let L of s.value) L.size = Math.max(Math.min(B, L.max), L.min), m -= L.size, L.size >= L.max && C.push(L.id), L.size <= L.min && k.push(L.id);
      Math.abs(m) > 0.1 && ut(m, C, k);
    }, ct = () => {
      let B = 100, m = [], C = [], k = 0;
      for (let N of s.value) B -= N.size, N.givenSize !== null && k++, N.size >= N.max && m.push(N.id), N.size <= N.min && C.push(N.id);
      let L = 100;
      if (B > 0.1) {
        for (let N of s.value) N.givenSize === null && (N.size = Math.max(Math.min(B / (l.value - k), N.max), N.min)), L -= N.size;
        L > 0.1 && ut(L, m, C);
      }
    }, ft = ({ addedPane: B, removedPane: m } = {}) => {
      let C = s.value.reduce((V, Z) => V + (Z.givenSize === null ? 0 : Z.givenSize), 0), k = s.value.filter((V) => V.givenSize === null).length, L = k > 0 ? (100 - C) / k : 0, N = 0, z = [], q = [];
      for (let V of s.value) N -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && q.push(V.id);
      if (!(Math.abs(N) < 0.1)) {
        N = 100;
        for (let V of s.value) V.givenSize === null && (V.size = Math.max(Math.min(L, V.max), V.min)), N -= V.size, V.size >= V.max && z.push(V.id), V.size <= V.min && q.push(V.id);
        Math.abs(N) > 0.1 && ut(N, z, q);
      }
    }, ut = (B, m, C) => {
      let k;
      k = B > 0 ? B / (l.value - m.length) : B / (l.value - C.length), s.value.forEach((L, N) => {
        if (B > 0 && !m.includes(L.id)) {
          let z = Math.max(Math.min(L.size + k, L.max), L.min), q = z - L.size;
          B -= q, L.size = z;
        } else if (!C.includes(L.id)) {
          let z = Math.max(Math.min(L.size + k, L.max), L.min), q = z - L.size;
          B -= q, L.size = z;
        }
      }), Math.abs(B) > 0.1 && u.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, Ze = (B, m = void 0, C = !1) => {
      let k = m?.index ?? h.value.activeSplitter ?? null;
      n(B, {
        ...m,
        ...k !== null && { index: k },
        ...C && k !== null && {
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
    rt(() => i.firstSplitter, () => pe()), rt(() => i.horizontal, (B) => on(() => {
      n("direction-changed", {
        horizontal: B,
        panes: s.value.map((m) => ({
          min: m.min,
          max: m.max,
          size: m.size
        }))
      });
    })), ji(() => {
      X(), pe(), Ae(), Ze("ready"), u.value = !0;
    }), Za(() => u.value = !1);
    let qt = () => {
      let { class: B, ...m } = a;
      return Jt("div", {
        ref: f,
        class: [E.value, B],
        ...m
      }, r.default?.());
    };
    return mn("panes", s), mn("indexedPanes", o), mn("horizontal", K(() => i.horizontal)), mn("requestUpdate", ve), mn("onPaneAdd", me), mn("onPaneRemove", Ge), mn("onPaneClick", ce), (B, m) => (_(), Fe(uu(qt)));
  }
}), Fy = {
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
    let t = e, n = Ft("requestUpdate"), i = Ft("onPaneAdd"), a = Ft("horizontal"), r = Ft("onPaneRemove"), s = Ft("onPaneClick"), o = _a()?.uid, l = Ft("indexedPanes"), f = K(() => l.value[o]), u = /* @__PURE__ */ Pe(null), h = K(() => {
      let A = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(A, E.value), S.value);
    }), S = K(() => {
      let A = parseFloat(t.minSize);
      return isNaN(A) ? 0 : A;
    }), E = K(() => {
      let A = parseFloat(t.maxSize);
      return isNaN(A) ? 100 : A;
    }), x = K(() => {
      let A = f.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return A === void 0 ? "" : `${a.value ? "height" : "width"}: ${A}%`;
    });
    return rt(() => h.value, (A) => n({
      uid: o,
      size: A
    })), rt(() => S.value, (A) => n({
      uid: o,
      min: A
    })), rt(() => E.value, (A) => n({
      uid: o,
      max: A
    })), ji(() => {
      i({
        id: o,
        el: u.value,
        min: S.value,
        max: E.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Za(() => r(o)), (A, O) => (_(), T("div", {
      ref_key: "paneEl",
      ref: u,
      class: "splitpanes__pane",
      onClick: O[0] ||= (D) => b(s)(D, A._.uid),
      style: un(x.value)
    }, [De(A.$slots, "default")], 4));
  }
}, zy = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", Uy = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", By = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", jy = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const yu = 1024, vp = yu / 2, yo = (e) => document.documentElement.clientWidth < e, gp = /* @__PURE__ */ Pe(yo(yu)), mp = /* @__PURE__ */ Pe(yo(vp));
window.addEventListener("resize", () => {
  gp.value = yo(yu), mp.value = yo(vp);
}, { passive: !0 });
function ys() {
  return /* @__PURE__ */ Jr(gp);
}
function Hy() {
  return /* @__PURE__ */ Jr(mp);
}
class Vy {
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
    return y("", t, n, void 0, { bundle: this.bundle });
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
class Gy {
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
    return this.setLanguage(yl().replace("-", "_"));
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
    const t = new Vy((n) => gy(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function Ky() {
  return new Gy();
}
const bp = Ky().detectLanguage().build(), St = (...e) => bp.gettext(...e);
function Hi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== yl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, s]) => [
          r,
          {
            msgid: r,
            msgid_plural: s.p,
            msgstr: s.v
          }
        ]));
        bp.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const Wy = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], qy = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Yy = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Xy = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Zy = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Jy = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Qy = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], e_ = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], t_ = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const n_ = /* @__PURE__ */ Symbol(""), [i_] = window.OC?.config?.version?.split(".") ?? [], yp = Number.parseInt(i_ ?? "35"), a_ = yp < 32, Vi = yp < 34, r_ = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function s_() {
  return Ft(r_, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, o_ = { class: "button-vue__wrapper" }, l_ = { class: "button-vue__icon" }, c_ = { class: "button-vue__text" }, u_ = /* @__PURE__ */ Lt({
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
    const n = e, i = t, { formBoxItemClass: a } = s_(), r = Ft(n_, null) !== null, s = K(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), o = K(() => s.value === "button" && typeof n.pressed == "boolean"), l = K(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), f = K(() => l.value.startsWith("tertiary")), u = K(() => n.alignment.split("-")[0]), h = K(() => n.alignment.includes("-")), S = Ft("NcPopover:trigger:attrs", () => ({}), !1), E = K(() => S()), x = K(() => {
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
    return (O, D) => (_(), Fe(uu(s.value), jt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": f.value,
          "button-vue--wide": e.wide,
          [`button-vue--${u.value}`]: u.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": b(a_),
          "button-vue--legacy34": b(Vi)
        },
        b(a)
      ]],
      "aria-label": e.ariaLabel
    }, x.value, { onClick: A }), {
      default: xe(() => [
        c("span", o_, [
          c("span", l_, [
            De(O.$slots, "icon", {}, void 0, !0)
          ]),
          c("span", c_, [
            De(O.$slots, "default", {}, () => [
              Ie(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Hn = /* @__PURE__ */ Xe(u_, [["__scopeId", "data-v-47ce59a3"]]), d_ = ["aria-hidden", "aria-label"], f_ = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, h_ = ["d"], p_ = ["innerHTML"], v_ = /* @__PURE__ */ Lt({
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
    rb((a) => ({
      fb515064: n.value
    }));
    const t = e, n = K(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = K(() => {
      if (!t.svg || t.path)
        return;
      const a = sp.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (_(), T("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Te(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (_(), T("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, p_)) : (_(), T("svg", f_, [
        c("path", { d: e.path }, null, 8, h_)
      ]))
    ], 10, d_));
  }
}), _l = /* @__PURE__ */ Xe(v_, [["__scopeId", "data-v-aaedb1c3"]]);
m_();
function g_(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), ui("csrf-token-update", { token: e, _internal: !0 }));
}
function m_() {
  fp("csrf-token-update", ({ token: e, _internal: t }) => {
    t || g_(e);
  });
}
lp("public").persist().build();
let Da;
function af(e, t) {
  return e ? e.getAttribute(t) : null;
}
function b_() {
  if (Da !== void 0)
    return Da;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = af(e, "data-user");
  return t === null ? (Da = null, Da) : (Da = {
    uid: t,
    displayName: af(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Da);
}
var ht = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(ht || {});
class y_ {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + ht[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === ht.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case ht.Debug:
          console.debug(this.formatMessage(n, ht.Debug, i), i);
          break;
        case ht.Info:
          console.info(this.formatMessage(n, ht.Info, i), i);
          break;
        case ht.Warn:
          console.warn(this.formatMessage(n, ht.Warn, i), i);
          break;
        case ht.Error:
          console.error(this.formatMessage(n, ht.Error, i), i);
          break;
        case ht.Fatal:
        default:
          console.error(this.formatMessage(n, ht.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(ht.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(ht.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(ht.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(ht.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(ht.Fatal, t, Object.assign({}, this.context, n));
  }
}
function __(e) {
  return new y_(e);
}
class w_ {
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
    const t = b_();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? ht.Warn, window._oc_debug && (t.context.level = ht.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function S_() {
  return new w_(__);
}
const ma = S_().detectUser().setApp("@nextcloud/vue").build();
function C_(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let _p = "missing-app-name";
try {
  _p = "library";
} catch {
  ma.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const T_ = _p;
let E_ = "";
try {
  E_ = "0.1.0-alpha.168";
} catch {
  ma.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function wp() {
  return Ft("appName", T_);
}
const A_ = C_(() => {
  const e = gu("core", "apps", []), t = wp();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), $c = vy();
Hi(Qy);
const k_ = /* @__PURE__ */ Lt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = ys();
    rt(t, n), ji(() => {
      n(t.value);
    }), Za(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && ui("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (_(), Fe(b(Hn), {
      "aria-label": b(St)("Go back to the list"),
      class: Te(["app-details-toggle", { "app-details-toggle--mobile": b(t) }]),
      title: b(St)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: xe(() => [
        be(b(_l), {
          directional: "",
          path: b(zy)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), O_ = /* @__PURE__ */ Xe(k_, [["__scopeId", "data-v-a28923a1"]]), rf = lp("nextcloud").persist().build(), x_ = by().theming?.name ?? "Nextcloud", N_ = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: O_,
    Pane: Fy,
    Splitpanes: My
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
      appName: wp(),
      localizedAppName: A_(),
      isMobile: ys(),
      isRtl: $c
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
        return ma.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(x_), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = Dy(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? ui("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && ui("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      rf.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ma.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(rf.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ma.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, L_ = {
  key: 0,
  class: "hidden-visually"
}, R_ = { class: "app-content-wrapper__list" }, I_ = {
  key: 1,
  class: "app-content-wrapper"
};
function P_(e, t, n, i, a, r) {
  const s = Ue("NcAppContentDetailsToggle"), o = Ue("Pane"), l = Ue("Splitpanes");
  return _(), T("main", {
    id: "app-content-vue",
    class: Te(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (_(), T("h1", L_, p(n.pageHeading), 1)) : j("", !0),
    e.$slots.list ? (_(), T(de, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (_(), T("div", {
        key: 0,
        class: Te(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (_(), Fe(s, {
          key: 0,
          onClick: je(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : j("", !0),
        We(c("div", R_, [
          De(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Ka, !n.showDetails]
        ]),
        n.showDetails ? De(e.$slots, "default", { key: 1 }, void 0, !0) : j("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (_(), T("div", I_, [
        be(l, {
          horizontal: n.layout === "horizontal-split",
          class: Te(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: xe(() => [
            be(o, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: xe(() => [
                De(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            be(o, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: xe(() => [
                De(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : j("", !0)
    ], 64)) : j("", !0),
    e.$slots.list ? j("", !0) : De(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const $_ = /* @__PURE__ */ Xe(N_, [["render", P_], ["__scopeId", "data-v-51427d61"]]);
var Sp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], _o = /* @__PURE__ */ Sp.join(","), Cp = typeof Element > "u", ya = Cp ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, wo = !Cp && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, So = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", s = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : So(t.parentNode));
  return s;
}, D_ = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Tp = function(t, n, i) {
  if (So(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(_o));
  return n && ya.call(t, _o) && a.unshift(t), a = a.filter(i), a;
}, Co = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var s = r.shift();
    if (!So(s, !1))
      if (s.tagName === "SLOT") {
        var o = s.assignedElements(), l = o.length ? o : s.children, f = Co(l, !0, i);
        i.flatten ? a.push.apply(a, f) : a.push({
          scopeParent: s,
          candidates: f
        });
      } else {
        var u = ya.call(s, _o);
        u && i.filter(s) && (n || !t.includes(s)) && a.push(s);
        var h = s.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(s), S = !So(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(s));
        if (h && S) {
          var E = Co(h === !0 ? s.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, E) : a.push({
            scopeParent: s,
            candidates: E
          });
        } else
          r.unshift.apply(r, s.children);
      }
  }
  return a;
}, Ep = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, da = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || D_(t)) && !Ep(t) ? 0 : t.tabIndex;
}, M_ = function(t, n) {
  var i = da(t);
  return i < 0 && n && !Ep(t) ? 0 : i;
}, F_ = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Ap = function(t) {
  return t.tagName === "INPUT";
}, z_ = function(t) {
  return Ap(t) && t.type === "hidden";
}, U_ = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, B_ = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, j_ = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || wo(t), i = function(o) {
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
  var r = B_(a, t.form);
  return !r || r === t;
}, H_ = function(t) {
  return Ap(t) && t.type === "radio";
}, V_ = function(t) {
  return H_(t) && !j_(t);
}, G_ = function(t) {
  var n, i = t && wo(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var s, o, l;
    for (r = !!((s = a) !== null && s !== void 0 && (o = s.ownerDocument) !== null && o !== void 0 && o.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var f, u, h;
      i = wo(a), a = (f = i) === null || f === void 0 ? void 0 : f.host, r = !!((u = a) !== null && u !== void 0 && (h = u.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, sf = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, K_ = function(t, n) {
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
  var l = ya.call(t, "details>summary:first-of-type"), f = l ? t.parentElement : t;
  if (ya.call(f, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var u = t; t; ) {
        var h = t.parentElement, S = wo(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return sf(t);
        t.assignedSlot ? t = t.assignedSlot : !h && S !== t.ownerDocument ? t = S.host : t = h;
      }
      t = u;
    }
    if (G_(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return sf(t);
  return !1;
}, W_ = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return ya.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, To = function(t, n) {
  return !(n.disabled || z_(n) || K_(n, t) || // For a details element with a summary, the summary element gets the focus
  U_(n) || W_(n));
}, Dc = function(t, n) {
  return !(V_(n) || da(n) < 0 || !To(t, n));
}, q_ = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, kp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var s = !!a.scopeParent, o = s ? a.scopeParent : a, l = M_(o, s), f = s ? kp(a.candidates) : o;
    l === 0 ? s ? n.push.apply(n, f) : n.push(o) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: s,
      content: f
    });
  }), i.sort(F_).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, Y_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Co([t], n.includeContainer, {
    filter: Dc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: q_
  }) : i = Tp(t, n.includeContainer, Dc.bind(null, n)), kp(i);
}, X_ = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Co([t], n.includeContainer, {
    filter: To.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Tp(t, n.includeContainer, To.bind(null, n)), i;
}, Ma = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ya.call(t, _o) === !1 ? !1 : Dc(n, t);
}, Z_ = /* @__PURE__ */ Sp.concat("iframe:not([inert]):not([inert] *)").join(","), uc = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ya.call(t, Z_) === !1 ? !1 : To(n, t);
};
function Mc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function J_(e) {
  if (Array.isArray(e)) return Mc(e);
}
function of(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Op(e)) || t) {
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
function Q_(e, t, n) {
  return (t = a1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function e1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function t1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function cf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lf(Object(n), !0).forEach(function(i) {
      Q_(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lf(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function n1(e) {
  return J_(e) || e1(e) || Op(e) || t1();
}
function i1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function a1(e) {
  var t = i1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Op(e, t) {
  if (e) {
    if (typeof e == "string") return Mc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Mc(e, t) : void 0;
  }
}
var si = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = si.getActiveTrap(t);
    n !== i && si.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), si.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = si.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = si.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, r1 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, s1 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, zr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, o1 = function(t) {
  return zr(t) && !t.shiftKey;
}, l1 = function(t) {
  return zr(t) && t.shiftKey;
}, uf = function(t) {
  return setTimeout(t, 0);
}, Ar = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, Vs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, c1 = [], _u = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || c1, r = cf({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: o1,
    isKeyBackward: l1
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
  }, o, l = function($, F, X) {
    return $ && $[F] !== void 0 ? $[F] : r[X || F];
  }, f = function($, F) {
    var X = typeof F?.composedPath == "function" ? F.composedPath() : void 0;
    return s.containerGroups.findIndex(function(ae) {
      var ne = ae.container, pe = ae.tabbableNodes;
      return ne.contains($) || X?.includes(ne) || pe.find(function(ve) {
        return ve === $;
      });
    });
  }, u = function($) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = F.hasFallback, ae = X === void 0 ? !1 : X, ne = F.params, pe = ne === void 0 ? [] : ne, ve = r[$];
    if (typeof ve == "function" && (ve = ve.apply(void 0, n1(pe))), ve === !0 && (ve = void 0), !ve) {
      if (ve === void 0 || ve === !1)
        return ve;
      throw new Error("`".concat($, "` was specified but was not a node, or did not return a node"));
    }
    var ye = ve;
    if (typeof ve == "string") {
      try {
        ye = i.querySelector(ve);
      } catch (me) {
        throw new Error("`".concat($, '` appears to be an invalid selector; error="').concat(me.message, '"'));
      }
      if (!ye && !ae)
        throw new Error("`".concat($, "` as selector refers to no known node"));
    }
    return ye;
  }, h = function($) {
    var F = $.activeElement;
    return F ? F.shadowRoot && F.shadowRoot.activeElement !== null ? h(F.shadowRoot) : F : null;
  }, S = function() {
    var $ = u("initialFocus", {
      hasFallback: !0
    });
    if ($ === !1)
      return !1;
    if ($ === void 0 || $ && !uc($, r.tabbableOptions)) {
      var F = h(i);
      if (f(F) >= 0)
        $ = F;
      else {
        var X = s.tabbableGroups[0], ae = X && X.firstTabbableNode;
        $ = ae || u("fallbackFocus");
      }
    } else $ === null && ($ = u("fallbackFocus"));
    if (!$)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return $;
  }, E = function() {
    if (s.containerGroups = s.containers.map(function($) {
      var F = Y_($, r.tabbableOptions), X = X_($, r.tabbableOptions), ae = F.length > 0 ? F[0] : void 0, ne = F.length > 0 ? F[F.length - 1] : void 0, pe = X.find(function(me) {
        return Ma(me);
      }), ve = X.slice().reverse().find(function(me) {
        return Ma(me);
      }), ye = !!F.find(function(me) {
        return da(me) > 0;
      });
      return {
        container: $,
        tabbableNodes: F,
        focusableNodes: X,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: ye,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: ae,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: ne,
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
        lastDomTabbableNode: ve,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ge) {
          var Ae = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, st = F.indexOf(Ge);
          return st < 0 ? Ae ? X.slice(X.indexOf(Ge) + 1).find(function(ct) {
            return Ma(ct);
          }) : X.slice(0, X.indexOf(Ge)).reverse().find(function(ct) {
            return Ma(ct);
          }) : F[st + (Ae ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function($) {
      return $.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !u("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function($) {
      return $.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, x = function($) {
    if ($ !== !1 && $ !== h(document)) {
      if (!$ || !$.focus) {
        x(S());
        return;
      }
      $.focus({
        preventScroll: !!r.preventScroll
      }), s.mostRecentlyFocusedNode = $, r1($) && $.select();
    }
  }, A = function($) {
    var F = u("setReturnFocus", {
      params: [$]
    });
    return F || (F === !1 ? !1 : $);
  }, O = function($) {
    var F = $.target, X = $.event, ae = $.isBackward, ne = ae === void 0 ? !1 : ae;
    F = F || Vs(X), E();
    var pe = null;
    if (s.tabbableGroups.length > 0) {
      var ve = f(F, X), ye = ve >= 0 ? s.containerGroups[ve] : void 0;
      if (ve < 0)
        ne ? pe = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : pe = s.tabbableGroups[0].firstTabbableNode;
      else if (ne) {
        var me = s.tabbableGroups.findIndex(function(ut) {
          var Ze = ut.firstTabbableNode;
          return F === Ze;
        });
        if (me < 0 && (ye.container === F || uc(F, r.tabbableOptions) && !Ma(F, r.tabbableOptions) && !ye.nextTabbableNode(F, !1)) && (me = ve), me >= 0) {
          var Ge = me === 0 ? s.tabbableGroups.length - 1 : me - 1, Ae = s.tabbableGroups[Ge];
          pe = da(F) >= 0 ? Ae.lastTabbableNode : Ae.lastDomTabbableNode;
        } else zr(X) || (pe = ye.nextTabbableNode(F, !1));
      } else {
        var st = s.tabbableGroups.findIndex(function(ut) {
          var Ze = ut.lastTabbableNode;
          return F === Ze;
        });
        if (st < 0 && (ye.container === F || uc(F, r.tabbableOptions) && !Ma(F, r.tabbableOptions) && !ye.nextTabbableNode(F)) && (st = ve), st >= 0) {
          var ct = st === s.tabbableGroups.length - 1 ? 0 : st + 1, ft = s.tabbableGroups[ct];
          pe = da(F) >= 0 ? ft.firstTabbableNode : ft.firstDomTabbableNode;
        } else zr(X) || (pe = ye.nextTabbableNode(F));
      }
    } else
      pe = u("fallbackFocus");
    return pe;
  }, D = function($) {
    var F = Vs($);
    if (!(f(F, $) >= 0)) {
      if (Ar(r.clickOutsideDeactivates, $)) {
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
      Ar(r.allowOutsideClick, $) || $.preventDefault();
    }
  }, M = function($) {
    var F = Vs($), X = f(F, $) >= 0;
    if (X || F instanceof Document)
      X && (s.mostRecentlyFocusedNode = F);
    else {
      $.stopImmediatePropagation();
      var ae, ne = !0;
      if (s.mostRecentlyFocusedNode)
        if (da(s.mostRecentlyFocusedNode) > 0) {
          var pe = f(s.mostRecentlyFocusedNode), ve = s.containerGroups[pe].tabbableNodes;
          if (ve.length > 0) {
            var ye = ve.findIndex(function(me) {
              return me === s.mostRecentlyFocusedNode;
            });
            ye >= 0 && (r.isKeyForward(s.recentNavEvent) ? ye + 1 < ve.length && (ae = ve[ye + 1], ne = !1) : ye - 1 >= 0 && (ae = ve[ye - 1], ne = !1));
          }
        } else
          s.containerGroups.some(function(me) {
            return me.tabbableNodes.some(function(Ge) {
              return da(Ge) > 0;
            });
          }) || (ne = !1);
      else
        ne = !1;
      ne && (ae = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(s.recentNavEvent)
      })), x(ae || s.mostRecentlyFocusedNode || S());
    }
    s.recentNavEvent = void 0;
  }, W = function($) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = $;
    var X = O({
      event: $,
      isBackward: F
    });
    X && (zr($) && $.preventDefault(), x(X));
  }, I = function($) {
    (r.isKeyForward($) || r.isKeyBackward($)) && W($, r.isKeyBackward($));
  }, P = function($) {
    s1($) && Ar(r.escapeDeactivates, $) !== !1 && ($.preventDefault(), o.deactivate());
  }, ce = function($) {
    var F = Vs($);
    f(F, $) >= 0 || Ar(r.clickOutsideDeactivates, $) || Ar(r.allowOutsideClick, $) || ($.preventDefault(), $.stopImmediatePropagation());
  }, Q = function() {
    if (s.active) {
      si.activateTrap(a, o);
      var $;
      return r.delayInitialFocus ? $ = new Promise(function(F) {
        s.delayInitialFocusTimer = uf(function() {
          x(S()), F();
        });
      }) : x(S()), i.addEventListener("focusin", M, !0), i.addEventListener("mousedown", D, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", D, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", ce, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", I, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", P), $;
    }
  }, ue = function($) {
    s.active && !s.paused && o._setSubtreeIsolation(!1), s.adjacentElements.clear(), s.alreadySilent.clear();
    var F = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), ae = of($), ne;
    try {
      for (ae.s(); !(ne = ae.n()).done; ) {
        var pe = ne.value;
        F.add(pe);
        for (var ve = typeof ShadowRoot < "u" && pe.getRootNode() instanceof ShadowRoot, ye = pe; ye; ) {
          F.add(ye);
          var me = ye.parentElement, Ge = [];
          me ? Ge = me.children : !me && ve && (Ge = ye.getRootNode().children, me = ye.getRootNode().host, ve = typeof ShadowRoot < "u" && me.getRootNode() instanceof ShadowRoot);
          var Ae = of(Ge), st;
          try {
            for (Ae.s(); !(st = Ae.n()).done; ) {
              var ct = st.value;
              X.add(ct);
            }
          } catch (ft) {
            Ae.e(ft);
          } finally {
            Ae.f();
          }
          ye = me;
        }
      }
    } catch (ft) {
      ae.e(ft);
    } finally {
      ae.f();
    }
    F.forEach(function(ft) {
      X.delete(ft);
    }), s.adjacentElements = X;
  }, Y = function() {
    if (s.active)
      return i.removeEventListener("focusin", M, !0), i.removeEventListener("mousedown", D, !0), i.removeEventListener("touchstart", D, !0), i.removeEventListener("click", ce, !0), i.removeEventListener("keydown", I, !0), i.removeEventListener("keydown", P), o;
  }, se = function($) {
    var F = s.mostRecentlyFocusedNode;
    if (F) {
      var X = $.some(function(ne) {
        var pe = Array.from(ne.removedNodes);
        return pe.some(function(ve) {
          return ve === F || typeof ve.contains == "function" && ve.contains(F);
        });
      });
      if (X && s.containers.some(function(ne) {
        return ne?.isConnected;
      })) {
        E();
        var ae = S();
        x(ae);
      }
    }
  }, ge = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, ee = function() {
    ge && (ge.disconnect(), s.active && !s.paused && s.containers.map(function($) {
      ge.observe($, {
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
    activate: function($) {
      if (s.active)
        return this;
      var F = l($, "onActivate"), X = l($, "onPostActivate"), ae = l($, "checkCanFocusTrap"), ne = si.getActiveTrap(a), pe = !1;
      if (ne && !ne.paused) {
        var ve;
        (ve = ne._setSubtreeIsolation) === null || ve === void 0 || ve.call(ne, !1), pe = !0;
      }
      try {
        ae || E(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = h(i), F?.({
          trap: o
        });
        var ye = function() {
          ae && E();
          var Ae = function() {
            o._setSubtreeIsolation(!0), ee(), X?.({
              trap: o
            });
          }, st = Q();
          st ? st.then(Ae) : Ae();
        };
        if (ae)
          return ae(s.containers.concat()).then(ye, ye), this;
        ye();
      } catch (Ge) {
        if (ne === si.getActiveTrap(a) && pe) {
          var me;
          (me = ne._setSubtreeIsolation) === null || me === void 0 || me.call(ne, !0);
        }
        throw Ge;
      }
      return this;
    },
    deactivate: function($) {
      if (!s.active)
        return this;
      var F = cf({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, $);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, s.paused || o._setSubtreeIsolation(!1), s.alreadySilent.clear(), Y(), s.active = !1, s.paused = !1, ee(), si.deactivateTrap(a, o);
      var X = l(F, "onDeactivate"), ae = l(F, "onPostDeactivate"), ne = l(F, "checkCanReturnFocus"), pe = l(F, "delayReturnFocus"), ve = l(F, "returnFocus", "returnFocusOnDeactivate");
      X?.({
        trap: o
      });
      var ye = function() {
        ve && x(A(s.nodeFocusedBeforeActivation)), ae?.({
          trap: o
        });
      }, me = function() {
        pe && ve ? uf(ye) : ye();
      };
      return ve && ne ? (ne(A(s.nodeFocusedBeforeActivation)).then(me, me), this) : (me(), this);
    },
    pause: function($) {
      return s.active ? (s.manuallyPaused = !0, this._setPausedState(!0, $)) : this;
    },
    unpause: function($) {
      return s.active ? (s.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, $)) : this;
    },
    updateContainerElements: function($) {
      var F = [].concat($).filter(Boolean);
      return s.containers = F.map(function(X) {
        return typeof X == "string" ? i.querySelector(X) : X;
      }), r.isolateSubtrees && ue(s.containers), s.active && (E(), s.paused || o._setSubtreeIsolation(!0)), ee(), this;
    }
  }, Object.defineProperties(o, {
    _isManuallyPaused: {
      value: function() {
        return s.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function($, F) {
        if (s.paused === $)
          return this;
        if (s.paused = $, $) {
          var X = l(F, "onPause"), ae = l(F, "onPostPause");
          X?.({
            trap: o
          }), Y(), o._setSubtreeIsolation(!1), ee(), ae?.({
            trap: o
          });
        } else {
          var ne = l(F, "onUnpause"), pe = l(F, "onPostUnpause");
          ne?.({
            trap: o
          });
          var ve = function() {
            E();
            var me = function() {
              o._setSubtreeIsolation(!0), ee(), pe?.({
                trap: o
              });
            }, Ge = Q();
            Ge ? Ge.then(me) : me();
          };
          ve();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function($) {
        r.isolateSubtrees && s.adjacentElements.forEach(function(F) {
          var X;
          $ ? r.isolateSubtrees === "aria-hidden" ? ((F.ariaHidden === "true" || ((X = F.getAttribute("aria-hidden")) === null || X === void 0 ? void 0 : X.toLowerCase()) === "true") && s.alreadySilent.add(F), F.setAttribute("aria-hidden", "true")) : ((F.inert || F.hasAttribute("inert")) && s.alreadySilent.add(F), F.setAttribute("inert", !0)) : s.alreadySilent.has(F) || (r.isolateSubtrees === "aria-hidden" ? F.removeAttribute("aria-hidden") : F.removeAttribute("inert"));
        });
      }
    }
  }), o.updateContainerElements(t), o;
};
const xp = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), u1 = /* @__PURE__ */ Lt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [xp]: {
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
function d1(e, t, n, i, a, r) {
  return _(), T("ul", {
    ref: "list",
    class: Te(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...s) => e.hideNow && e.hideNow(...s)),
    onFocusout: t[1] || (t[1] = (...s) => e.onFocusOut && e.onFocusOut(...s)),
    onScrollPassive: t[2] || (t[2] = (...s) => e.onScroll && e.onScroll(...s))
  }, [
    c("div", {
      class: Te(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: un(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    De(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const Np = /* @__PURE__ */ Xe(u1, [["render", d1], ["__scopeId", "data-v-3e73e246"]]);
function os() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function f1() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...os()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === os().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Lp = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Rp = /* @__PURE__ */ Symbol.for("NcContent:selector");
Hi(Xy);
const h1 = { class: "app-navigation-toggle-wrapper" }, p1 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Rh(e, "open"), n = K(() => t.value ? St("Close navigation") : St("Open navigation"));
    return (i, a) => (_(), T("div", h1, [
      be(b(Hn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: xe(() => [
          be(_l, {
            path: b(jy),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), v1 = /* @__PURE__ */ Xe(p1, [["__scopeId", "data-v-e8177cc7"]]), g1 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], m1 = { class: "app-navigation__search" }, b1 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Ft(
      Lp,
      () => Wm(),
      !1
    ), a = Qg("appNavigationContainer"), r = ys(), s = /* @__PURE__ */ Pe(!r.value), o = K(() => r.value && s.value);
    Vg(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), rt(r, () => {
      s.value = !r.value;
    }), rt(o, () => {
      u();
    }), ji(() => {
      i(!0), fp("toggle-navigation", f), ui("navigation-toggled", {
        open: s.value
      }), n = _u(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: os(),
        escapeDeactivates: !1
      }), u();
    }), gs(() => {
      i(!1), Ny("toggle-navigation", f), n.deactivate();
    });
    function l(S) {
      if (s.value === S) {
        ui("navigation-toggled", {
          open: s.value
        });
        return;
      }
      s.value = S === void 0 ? !s.value : S;
      const E = getComputedStyle(document.body), x = parseInt(E.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        ui("navigation-toggled", {
          open: s.value
        });
      }, 1.5 * x);
    }
    function f({ open: S }) {
      return l(S);
    }
    function u() {
      o.value ? n.activate() : n.deactivate();
    }
    function h() {
      r.value && l(!1);
    }
    return (S, E) => (_(), T("div", {
      ref: "appNavigationContainer",
      class: Te(["app-navigation", {
        "app-navigation--closed": !s.value,
        "app-navigation--legacy": b(Vi)
      }])
    }, [
      c("nav", {
        id: "app-navigation-vue",
        "aria-hidden": s.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !s.value || void 0,
        onKeydown: mt(h, ["esc"])
      }, [
        c("div", m1, [
          De(S.$slots, "search", {}, void 0, !0)
        ]),
        c("div", {
          class: Te(["app-navigation__body", { "app-navigation__body--no-list": !S.$slots.list }])
        }, [
          De(S.$slots, "default", {}, void 0, !0)
        ], 2),
        S.$slots.list ? (_(), Fe(Np, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: xe(() => [
            De(S.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : j("", !0),
        De(S.$slots, "footer", {}, void 0, !0)
      ], 40, g1),
      be(v1, {
        open: s.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), y1 = /* @__PURE__ */ Xe(b1, [["__scopeId", "data-v-37908cd4"]]), _1 = {
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
}, w1 = ["aria-hidden", "aria-label"], S1 = ["fill", "width", "height"], C1 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, T1 = { key: 0 };
function E1(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", C1, [
        n.title ? (_(), T("title", T1, p(n.title), 1)) : j("", !0)
      ])
    ], 8, S1))
  ], 16, w1);
}
const A1 = /* @__PURE__ */ Xe(_1, [["render", E1]]), k1 = {
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
}, O1 = ["aria-hidden", "aria-label"], x1 = ["fill", "width", "height"], N1 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, L1 = { key: 0 };
function R1(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", N1, [
        n.title ? (_(), T("title", L1, p(n.title), 1)) : j("", !0)
      ])
    ], 8, x1))
  ], 16, O1);
}
const I1 = /* @__PURE__ */ Xe(k1, [["render", R1]]), P1 = {
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
}, $1 = ["aria-hidden", "aria-label"], D1 = ["fill", "width", "height"], M1 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, F1 = { key: 0 };
function z1(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", M1, [
        n.title ? (_(), T("title", F1, p(n.title), 1)) : j("", !0)
      ])
    ], 8, D1))
  ], 16, $1);
}
const Ip = /* @__PURE__ */ Xe(P1, [["render", z1]]), U1 = {
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
}, B1 = ["aria-hidden", "aria-label"], j1 = ["fill", "width", "height"], H1 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, V1 = { key: 0 };
function G1(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", H1, [
        n.title ? (_(), T("title", V1, p(n.title), 1)) : j("", !0)
      ])
    ], 8, j1))
  ], 16, B1);
}
const Pp = /* @__PURE__ */ Xe(U1, [["render", G1]]);
Hi(qy);
const K1 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Ip,
    IconClose: Pp,
    NcButton: Hn
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
      labelConfirm: St("Confirm changes"),
      labelCancel: St("Cancel changes")
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
}, W1 = ["placeholder"];
function q1(e, t, n, i, a, r) {
  const s = Ue("IconArrowRight"), o = Ue("NcButton"), l = Ue("IconClose");
  return _(), T("div", {
    class: Te(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    c("form", {
      onSubmit: t[1] || (t[1] = je((...f) => r.confirm && r.confirm(...f), ["prevent"])),
      onKeydown: t[2] || (t[2] = mt(je((...f) => r.cancel && r.cancel(...f), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = je(() => {
      }, ["stop", "prevent"]))
    }, [
      We(c("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (f) => r.valueModel = f),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, W1), [
        [rn, r.valueModel]
      ]),
      be(o, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: je(r.confirm, ["stop", "prevent"])
      }, {
        icon: xe(() => [
          be(s, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      be(o, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: je(r.cancel, ["stop", "prevent"])
      }, {
        icon: xe(() => [
          be(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const Y1 = /* @__PURE__ */ Xe(K1, [["render", q1], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function wl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const wu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), $p = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), X1 = {
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
}, Dp = {
  mixins: [X1],
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
      from: $p
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
}, Z1 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: _l
  },
  mixins: [Dp],
  inject: {
    isInSemanticMenu: {
      from: wu,
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
      mdiCheck: Uy,
      mdiChevronRight: By
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
}, J1 = ["role"], Q1 = ["aria-label", "disabled", "title", "type"], e0 = { class: "action-button__longtext-wrapper" }, t0 = {
  key: 0,
  class: "action-button__name"
}, n0 = ["textContent"], i0 = {
  key: 2,
  class: "action-button__text"
}, a0 = ["textContent"], r0 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function s0(e, t, n, i, a, r) {
  const s = Ue("NcIconSvgWrapper");
  return _(), T("li", {
    class: Te(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    c("button", jt({
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
      De(e.$slots, "icon", {}, () => [
        c("span", {
          class: Te([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: un({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      c("span", e0, [
        e.name ? (_(), T("strong", t0, p(e.name), 1)) : j("", !0),
        e.isLongText ? (_(), T("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, n0)) : (_(), T("span", i0, p(e.text), 1)),
        n.description ? (_(), T("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, a0)) : j("", !0)
      ]),
      n.isMenu ? (_(), Fe(s, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (_(), Fe(s, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (_(), T("span", r0)) : j("", !0),
      j("", !0)
    ], 16, Q1)
  ], 10, J1);
}
const o0 = /* @__PURE__ */ Xe(Z1, [["render", s0], ["__scopeId", "data-v-6c2daf4e"]]);
function l0(e, t = {}) {
  const n = f1();
  rt(e, () => {
    li(t.disabled) || (li(e) ? n.pause() : n.unpause());
  }), gs(() => {
    n.unpause();
  });
}
const c0 = ["top", "right", "bottom", "left"], df = ["start", "end"], ff = /* @__PURE__ */ c0.reduce((e, t) => e.concat(t, t + "-" + df[0], t + "-" + df[1]), []), ls = Math.min, Fc = Math.max, u0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Mp(e, t, n) {
  return Fc(e, ls(t, n));
}
function wa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pi(e) {
  return e.split("-")[0];
}
function On(e) {
  return e.split("-")[1];
}
function Fp(e) {
  return e === "x" ? "y" : "x";
}
function Su(e) {
  return e === "y" ? "height" : "width";
}
function oi(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Cu(e) {
  return Fp(oi(e));
}
function zp(e, t, n) {
  n === void 0 && (n = !1);
  const i = On(e), a = Cu(e), r = Su(a);
  let s = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (s = Ao(s)), [s, Ao(s)];
}
function d0(e) {
  const t = Ao(e);
  return [Eo(e), t, Eo(t)];
}
function Eo(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const hf = ["left", "right"], pf = ["right", "left"], f0 = ["top", "bottom"], h0 = ["bottom", "top"];
function p0(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? pf : hf : t ? hf : pf;
    case "left":
    case "right":
      return t ? f0 : h0;
    default:
      return [];
  }
}
function v0(e, t, n, i) {
  const a = On(e);
  let r = p0(pi(e), n === "start", i);
  return a && (r = r.map((s) => s + "-" + a), t && (r = r.concat(r.map(Eo)))), r;
}
function Ao(e) {
  const t = pi(e);
  return u0[t] + e.slice(t.length);
}
function g0(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Up(e) {
  return typeof e != "number" ? g0(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ur(e) {
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
function vf(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = oi(t), s = Cu(t), o = Su(s), l = pi(t), f = r === "y", u = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, S = i[o] / 2 - a[o] / 2;
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
  const x = On(t);
  return x && (E[s] += S * (x === "end" ? 1 : -1) * (n && f ? -1 : 1)), E;
}
async function m0(e, t) {
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
    boundary: f = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: S = !1,
    padding: E = 0
  } = wa(t, e), x = Up(E), O = o[S ? h === "floating" ? "reference" : "floating" : h], D = Ur(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(o.floating)),
    boundary: f,
    rootBoundary: u,
    strategy: l
  })), M = h === "floating" ? {
    x: i,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, W = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(o.floating)), I = await (r.isElement == null ? void 0 : r.isElement(W)) && await (r.getScale == null ? void 0 : r.getScale(W)) || {
    x: 1,
    y: 1
  }, P = Ur(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: o,
    rect: M,
    offsetParent: W,
    strategy: l
  }) : M);
  return {
    top: (D.top - P.top + x.top) / I.y,
    bottom: (P.bottom - D.bottom + x.bottom) / I.y,
    left: (D.left - P.left + x.left) / I.x,
    right: (P.right - D.right + x.right) / I.x
  };
}
const b0 = 50, y0 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: s
  } = n, o = s.detectOverflow ? s : {
    ...s,
    detectOverflow: m0
  }, l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: u,
    y: h
  } = vf(f, i, l), S = i, E = 0;
  const x = {};
  for (let A = 0; A < r.length; A++) {
    const O = r[A];
    if (!O)
      continue;
    const {
      name: D,
      fn: M
    } = O, {
      x: W,
      y: I,
      data: P,
      reset: ce
    } = await M({
      x: u,
      y: h,
      initialPlacement: i,
      placement: S,
      strategy: a,
      middlewareData: x,
      rects: f,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = W ?? u, h = I ?? h, x[D] = {
      ...x[D],
      ...P
    }, ce && E < b0 && (E++, typeof ce == "object" && (ce.placement && (S = ce.placement), ce.rects && (f = ce.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ce.rects), {
      x: u,
      y: h
    } = vf(f, S, l)), A = -1);
  }
  return {
    x: u,
    y: h,
    placement: S,
    strategy: a,
    middlewareData: x
  };
}, _0 = (e) => ({
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
      element: f,
      padding: u = 0
    } = wa(e, t) || {};
    if (f == null)
      return {};
    const h = Up(u), S = {
      x: n,
      y: i
    }, E = Cu(a), x = Su(E), A = await s.getDimensions(f), O = E === "y", D = O ? "top" : "left", M = O ? "bottom" : "right", W = O ? "clientHeight" : "clientWidth", I = r.reference[x] + r.reference[E] - S[E] - r.floating[x], P = S[E] - r.reference[E], ce = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let Q = ce ? ce[W] : 0;
    (!Q || !await (s.isElement == null ? void 0 : s.isElement(ce))) && (Q = o.floating[W] || r.floating[x]);
    const ue = I / 2 - P / 2, Y = Q / 2 - A[x] / 2 - 1, se = ls(h[D], Y), ge = ls(h[M], Y), ee = Q - A[x] - ge, ie = Q / 2 - A[x] / 2 + ue, $ = Mp(se, ie, ee), F = !l.arrow && On(a) != null && ie !== $ && r.reference[x] / 2 - (ie < se ? se : ge) - A[x] / 2 < 0, X = F ? ie < se ? ie - se : ie - ee : 0;
    return {
      [E]: S[E] + X,
      data: {
        [E]: $,
        centerOffset: ie - $ - X,
        ...F && {
          alignmentOffset: X
        }
      },
      reset: F
    };
  }
});
function w0(e, t, n) {
  return (e ? [...n.filter((a) => On(a) === e), ...n.filter((a) => On(a) !== e)] : n.filter((a) => pi(a) === a)).filter((a) => e ? On(a) === e || (t ? Eo(a) !== a : !1) : !0);
}
const S0 = function(e) {
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
        elements: f
      } = t, {
        crossAxis: u = !1,
        alignment: h,
        allowedPlacements: S = ff,
        autoAlignment: E = !0,
        ...x
      } = wa(e, t), A = h !== void 0 || S === ff ? w0(h || null, E, S) : S, O = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, D = A[O];
      if (D == null)
        return {};
      if (o !== D)
        return {
          reset: {
            placement: A[0]
          }
        };
      const M = await l.detectOverflow(t, x), W = zp(D, r, await (l.isRTL == null ? void 0 : l.isRTL(f.floating))), I = [M[pi(D)], M[W[0]], M[W[1]]], P = [...((i = s.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: D,
        overflows: I
      }], ce = A[O + 1];
      if (ce)
        return {
          data: {
            index: O + 1,
            overflows: P
          },
          reset: {
            placement: ce
          }
        };
      const Q = P.map((se) => {
        const ge = On(se.placement);
        return [se.placement, ge && u ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((ee, ie) => ee + ie, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, ge) => se[1] - ge[1]), Y = ((a = Q.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        On(se[0]) ? 2 : 3
      ).every((ge) => ge <= 0))[0]) == null ? void 0 : a[0]) || Q[0][0];
      return Y !== o ? {
        data: {
          index: O + 1,
          overflows: P
        },
        reset: {
          placement: Y
        }
      } : {};
    }
  };
}, C0 = function(e) {
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
        elements: f
      } = t, {
        mainAxis: u = !0,
        crossAxis: h = !0,
        fallbackPlacements: S,
        fallbackStrategy: E = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: A = !0,
        ...O
      } = wa(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const D = pi(a), M = oi(o), W = pi(o) === o, I = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), P = S || (W || !A ? [Ao(o)] : d0(o)), ce = x !== "none";
      !S && ce && P.push(...v0(o, A, x, I));
      const Q = [o, ...P], ue = await l.detectOverflow(t, O), Y = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (u && Y.push(ue[D]), h) {
        const $ = zp(a, s, I);
        Y.push(ue[$[0]], ue[$[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: Y
      }], !Y.every(($) => $ <= 0)) {
        var ge, ee;
        const $ = (((ge = r.flip) == null ? void 0 : ge.index) || 0) + 1, F = Q[$];
        if (F && (!(h === "alignment" ? M !== oi(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ne) => oi(ne.placement) === M ? ne.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: se
            },
            reset: {
              placement: F
            }
          };
        let X = (ee = se.filter((ae) => ae.overflows[0] <= 0).sort((ae, ne) => ae.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!X)
          switch (E) {
            case "bestFit": {
              var ie;
              const ae = (ie = se.filter((ne) => {
                if (ce) {
                  const pe = oi(ne.placement);
                  return pe === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  pe === "y";
                }
                return !0;
              }).map((ne) => [ne.placement, ne.overflows.filter((pe) => pe > 0).reduce((pe, ve) => pe + ve, 0)]).sort((ne, pe) => ne[1] - pe[1])[0]) == null ? void 0 : ie[0];
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
}, T0 = /* @__PURE__ */ new Set(["left", "top"]);
async function E0(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), s = pi(n), o = On(n), l = oi(n) === "y", f = T0.has(s) ? -1 : 1, u = r && l ? -1 : 1, h = wa(t, e);
  let {
    mainAxis: S,
    crossAxis: E,
    alignmentAxis: x
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return o && typeof x == "number" && (E = o === "end" ? x * -1 : x), l ? {
    x: E * u,
    y: S * f
  } : {
    x: S * f,
    y: E * u
  };
}
const A0 = function(e) {
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
      } = t, l = await E0(t, e);
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
}, k0 = function(e) {
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
              x: W,
              y: I
            } = M;
            return {
              x: W,
              y: I
            };
          }
        },
        ...f
      } = wa(e, t), u = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, f), S = oi(a), E = Fp(S);
      let x = u[E], A = u[S];
      const O = (M, W) => Mp(W + h[M === "y" ? "top" : "left"], W, W - h[M === "y" ? "bottom" : "right"]);
      s && (x = O(E, x)), o && (A = O(S, A));
      const D = l.fn({
        ...t,
        [E]: x,
        [S]: A
      });
      return {
        ...D,
        data: {
          x: D.x - n,
          y: D.y - i,
          enabled: {
            [E]: s,
            [S]: o
          }
        }
      };
    }
  };
}, O0 = function(e) {
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
      } = wa(e, t), l = await a.detectOverflow(t, o), f = pi(n), u = On(n), h = oi(n) === "y", {
        width: S,
        height: E
      } = i.floating;
      let x, A;
      f === "top" || f === "bottom" ? (x = f, A = u === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (A = f, x = u === "end" ? "top" : "bottom");
      const O = E - l.top - l.bottom, D = S - l.left - l.right, M = ls(E - l[x], O), W = ls(S - l[A], D), I = t.middlewareData.shift, P = !I;
      let ce = M, Q = W;
      I != null && I.enabled.x && (Q = D), I != null && I.enabled.y && (ce = O), P && !u && (h ? Q = S - 2 * Fc(l.left, l.right) : ce = E - 2 * Fc(l.top, l.bottom)), await s({
        ...t,
        availableWidth: Q,
        availableHeight: ce
      });
      const ue = await a.getDimensions(r.floating);
      return S !== ue.width || E !== ue.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function yn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Vn(e) {
  return yn(e).getComputedStyle(e);
}
const gf = Math.min, Br = Math.max, ko = Math.round;
function Bp(e) {
  const t = Vn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, s = ko(n) !== a || ko(i) !== r;
  return s && (n = a, i = r), { width: n, height: i, fallback: s };
}
function Bi(e) {
  return Hp(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Gs;
function jp() {
  if (Gs) return Gs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Gs = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Gs) : navigator.userAgent;
}
function Gn(e) {
  return e instanceof yn(e).HTMLElement;
}
function Di(e) {
  return e instanceof yn(e).Element;
}
function Hp(e) {
  return e instanceof yn(e).Node;
}
function mf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof yn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Sl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Vn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function x0(e) {
  return ["table", "td", "th"].includes(Bi(e));
}
function zc(e) {
  const t = /firefox/i.test(jp()), n = Vn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function Vp() {
  return !/^((?!chrome|android).)*safari/i.test(jp());
}
function Tu(e) {
  return ["html", "body", "#document"].includes(Bi(e));
}
function Gp(e) {
  return Di(e) ? e : e.contextElement;
}
const Kp = { x: 1, y: 1 };
function Ya(e) {
  const t = Gp(e);
  if (!Gn(t)) return Kp;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Bp(t);
  let s = (r ? ko(n.width) : n.width) / i, o = (r ? ko(n.height) : n.height) / a;
  return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), { x: s, y: o };
}
function cs(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), o = Gp(e);
  let l = Kp;
  t && (i ? Di(i) && (l = Ya(i)) : l = Ya(e));
  const f = o ? yn(o) : window, u = !Vp() && n;
  let h = (s.left + (u && ((a = f.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, S = (s.top + (u && ((r = f.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, E = s.width / l.x, x = s.height / l.y;
  if (o) {
    const A = yn(o), O = i && Di(i) ? yn(i) : i;
    let D = A.frameElement;
    for (; D && i && O !== A; ) {
      const M = Ya(D), W = D.getBoundingClientRect(), I = getComputedStyle(D);
      W.x += (D.clientLeft + parseFloat(I.paddingLeft)) * M.x, W.y += (D.clientTop + parseFloat(I.paddingTop)) * M.y, h *= M.x, S *= M.y, E *= M.x, x *= M.y, h += W.x, S += W.y, D = yn(D).frameElement;
    }
  }
  return { width: E, height: x, top: S, right: h + E, bottom: S + x, left: h, x: h, y: S };
}
function Mi(e) {
  return ((Hp(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Cl(e) {
  return Di(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Wp(e) {
  return cs(Mi(e)).left + Cl(e).scrollLeft;
}
function us(e) {
  if (Bi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || mf(e) && e.host || Mi(e);
  return mf(t) ? t.host : t;
}
function qp(e) {
  const t = us(e);
  return Tu(t) ? t.ownerDocument.body : Gn(t) && Sl(t) ? t : qp(t);
}
function Oo(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = qp(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = yn(i);
  return a ? t.concat(r, r.visualViewport || [], Sl(i) ? i : []) : t.concat(i, Oo(i));
}
function bf(e, t, n) {
  return t === "viewport" ? Ur((function(i, a) {
    const r = yn(i), s = Mi(i), o = r.visualViewport;
    let l = s.clientWidth, f = s.clientHeight, u = 0, h = 0;
    if (o) {
      l = o.width, f = o.height;
      const S = Vp();
      (S || !S && a === "fixed") && (u = o.offsetLeft, h = o.offsetTop);
    }
    return { width: l, height: f, x: u, y: h };
  })(e, n)) : Di(t) ? Ur((function(i, a) {
    const r = cs(i, !0, a === "fixed"), s = r.top + i.clientTop, o = r.left + i.clientLeft, l = Gn(i) ? Ya(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: o * l.x, y: s * l.y };
  })(t, n)) : Ur((function(i) {
    const a = Mi(i), r = Cl(i), s = i.ownerDocument.body, o = Br(a.scrollWidth, a.clientWidth, s.scrollWidth, s.clientWidth), l = Br(a.scrollHeight, a.clientHeight, s.scrollHeight, s.clientHeight);
    let f = -r.scrollLeft + Wp(i);
    const u = -r.scrollTop;
    return Vn(s).direction === "rtl" && (f += Br(a.clientWidth, s.clientWidth) - o), { width: o, height: l, x: f, y: u };
  })(Mi(e)));
}
function yf(e) {
  return Gn(e) && Vn(e).position !== "fixed" ? e.offsetParent : null;
}
function _f(e) {
  const t = yn(e);
  let n = yf(e);
  for (; n && x0(n) && Vn(n).position === "static"; ) n = yf(n);
  return n && (Bi(n) === "html" || Bi(n) === "body" && Vn(n).position === "static" && !zc(n)) ? t : n || (function(i) {
    let a = us(i);
    for (; Gn(a) && !Tu(a); ) {
      if (zc(a)) return a;
      a = us(a);
    }
    return null;
  })(e) || t;
}
function N0(e, t, n) {
  const i = Gn(t), a = Mi(t), r = cs(e, !0, n === "fixed", t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const o = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Bi(t) !== "body" || Sl(a)) && (s = Cl(t)), Gn(t)) {
    const l = cs(t, !0);
    o.x = l.x + t.clientLeft, o.y = l.y + t.clientTop;
  } else a && (o.x = Wp(a));
  return { x: r.left + s.scrollLeft - o.x, y: r.top + s.scrollTop - o.y, width: r.width, height: r.height };
}
const L0 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(f, u) {
    const h = u.get(f);
    if (h) return h;
    let S = Oo(f).filter(((O) => Di(O) && Bi(O) !== "body")), E = null;
    const x = Vn(f).position === "fixed";
    let A = x ? us(f) : f;
    for (; Di(A) && !Tu(A); ) {
      const O = Vn(A), D = zc(A);
      (x ? D || E : D || O.position !== "static" || !E || !["absolute", "fixed"].includes(E.position)) ? E = O : S = S.filter(((M) => M !== A)), A = us(A);
    }
    return u.set(f, S), S;
  })(t, this._c) : [].concat(n), s = [...r, i], o = s[0], l = s.reduce(((f, u) => {
    const h = bf(t, u, a);
    return f.top = Br(h.top, f.top), f.right = gf(h.right, f.right), f.bottom = gf(h.bottom, f.bottom), f.left = Br(h.left, f.left), f;
  }), bf(t, o, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Gn(n), r = Mi(n);
  if (n === r) return t;
  let s = { scrollLeft: 0, scrollTop: 0 }, o = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Bi(n) !== "body" || Sl(r)) && (s = Cl(n)), Gn(n))) {
    const f = cs(n);
    o = Ya(n), l.x = f.x + n.clientLeft, l.y = f.y + n.clientTop;
  }
  return { width: t.width * o.x, height: t.height * o.y, x: t.x * o.x - s.scrollLeft * o.x + l.x, y: t.y * o.y - s.scrollTop * o.y + l.y };
}, isElement: Di, getDimensions: function(e) {
  return Gn(e) ? Bp(e) : e.getBoundingClientRect();
}, getOffsetParent: _f, getDocumentElement: Mi, getScale: Ya, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || _f, r = this.getDimensions;
  return { reference: N0(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Vn(e).direction === "rtl" }, R0 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: L0, ...n }, r = { ...a.platform, _c: i };
  return y0(e, t, { ...a, platform: r });
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
function Uc(e, t) {
  let n = Fi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Fi.themes[n.$extend] || {} : (n = null, i = Fi[t]) : n = null;
  while (n);
  return i;
}
function I0(e) {
  const t = [e];
  let n = Fi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Fi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function wf(e) {
  const t = [e];
  let n = Fi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Fi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let ds = !1;
if (typeof window < "u") {
  ds = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        ds = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Yp = !1;
typeof window < "u" && typeof navigator < "u" && (Yp = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const P0 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), Sf = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, Cf = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function Tf(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function dc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const An = [];
let ra = null;
const Ef = {};
function Af(e) {
  let t = Ef[e];
  return t || (t = Ef[e] = []), t;
}
let Bc = function() {
};
typeof window < "u" && (Bc = window.Element);
function Be(e) {
  return function(t) {
    return Uc(t.theme, e);
  };
}
const fc = "__floating-vue__popper", Xp = () => /* @__PURE__ */ Lt({
  name: "VPopper",
  provide() {
    return {
      [fc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [fc]: { default: null }
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
      default: Be("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Be("positioningDisabled")
    },
    placement: {
      type: String,
      default: Be("placement"),
      validator: (e) => P0.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Be("delay")
    },
    distance: {
      type: [Number, String],
      default: Be("distance")
    },
    skidding: {
      type: [Number, String],
      default: Be("skidding")
    },
    triggers: {
      type: Array,
      default: Be("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Be("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Be("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Be("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Be("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Be("popperHideTriggers")
    },
    container: {
      type: [String, Object, Bc, Boolean],
      default: Be("container")
    },
    boundary: {
      type: [String, Bc],
      default: Be("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Be("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Be("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Be("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Be("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Be("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Be("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Be("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Be("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Be("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Be("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Be("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Be("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Be("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Be("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Be("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Be("flip")
    },
    shift: {
      type: Boolean,
      default: Be("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Be("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Be("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Be("disposeTimeout")
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
      return (e = this[fc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(A0({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(S0({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(k0({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(C0({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(_0({
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
            let l, f;
            return r.startsWith("top") || r.startsWith("bottom") ? l = a.reference.width : f = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = f != null ? `${f}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(O0({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await R0(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ra && this.instantMove && ra.instantMove && ra !== this.parentPopper) {
        ra.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ra = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await dc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Oo(this.$_referenceNode),
        ...Oo(this.$_popperNode)
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
        for (let n = 0; n < An.length; n++)
          t = An[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      An.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of wf(this.theme))
        Af(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await dc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Tf(An, this), An.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of wf(this.theme)) {
        const i = Af(n);
        Tf(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      ra === this && (ra = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await dc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, Sf, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], Sf, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, Cf, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], Cf, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, ds ? {
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
      if (jr >= e.left && jr <= e.right && Hr >= e.top && Hr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = jr - Li, i = Hr - Ri, a = t.left + t.width / 2 - Li + (t.top + t.height / 2) - Ri + t.width + t.height, r = Li + n * a, s = Ri + i * a;
        return Ks(Li, Ri, r, s, t.left, t.top, t.left, t.bottom) || // Left edge
        Ks(Li, Ri, r, s, t.left, t.top, t.right, t.top) || // Top edge
        Ks(Li, Ri, r, s, t.right, t.top, t.right, t.bottom) || // Right edge
        Ks(Li, Ri, r, s, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Yp) {
    const e = ds ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => kf(t), e), document.addEventListener("touchend", (t) => Of(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => kf(e), !0), window.addEventListener("click", (e) => Of(e, !1), !0);
  window.addEventListener("resize", M0);
}
function kf(e, t) {
  for (let n = 0; n < An.length; n++) {
    const i = An[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Of(e, t) {
  $0(e, t);
}
function $0(e, t) {
  const n = {};
  for (let i = An.length - 1; i >= 0; i--) {
    const a = An[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && xf(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let o = a.parentPopper;
            for (; o; )
              n[o.randomId] = !0, o = o.parentPopper;
            return;
          }
          let s = a.parentPopper;
          for (; s && xf(s, s.containsGlobalTarget, e); )
            s.$_handleGlobalClose(e, t), s = s.parentPopper;
        }
      });
    } catch {
    }
  }
}
function xf(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || D0(e, n) && !t;
}
function D0(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function M0() {
  for (let e = 0; e < An.length; e++)
    An[e].$_computePosition();
}
let Li = 0, Ri = 0, jr = 0, Hr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Li = jr, Ri = Hr, jr = e.clientX, Hr = e.clientY;
}, ds ? {
  passive: !0
} : void 0);
function Ks(e, t, n, i, a, r, s, o) {
  const l = ((s - a) * (t - r) - (o - r) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t)), f = ((n - e) * (t - r) - (i - t) * (e - a)) / ((o - r) * (n - e) - (s - a) * (i - t));
  return l >= 0 && l <= 1 && f >= 0 && f <= 1;
}
const F0 = {
  extends: Xp()
}, Eu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function z0(e, t, n, i, a, r) {
  return _(), T("div", {
    ref: "reference",
    class: Te(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    De(e.$slots, "default", to(is(e.slotData)))
  ], 2);
}
const U0 = /* @__PURE__ */ Eu(F0, [["render", z0]]);
function B0() {
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
let Qs;
function jc() {
  jc.init || (jc.init = !0, Qs = B0() !== -1);
}
var Tl = {
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
    jc(), on(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Qs && this.$el.appendChild(e), e.data = "about:blank", Qs || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Qs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const j0 = /* @__PURE__ */ Bg();
zg("data-v-b329ee4c");
const H0 = {
  class: "resize-observer",
  tabindex: "-1"
};
Ug();
const V0 = /* @__PURE__ */ j0((e, t, n, i, a, r) => (_(), Fe("div", H0)));
Tl.render = V0;
Tl.__scopeId = "data-v-b329ee4c";
Tl.__file = "src/components/ResizeObserver.vue";
const Zp = (e = "theme") => ({
  computed: {
    themeClass() {
      return I0(this[e]);
    }
  }
}), G0 = /* @__PURE__ */ Lt({
  name: "VPopperContent",
  components: {
    ResizeObserver: Tl
  },
  mixins: [
    Zp()
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
}), K0 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], W0 = {
  ref: "inner",
  class: "v-popper__inner"
}, q0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-outer" }, null, -1), Y0 = /* @__PURE__ */ c("div", { class: "v-popper__arrow-inner" }, null, -1), X0 = [
  q0,
  Y0
];
function Z0(e, t, n, i, a, r) {
  const s = Ue("ResizeObserver");
  return _(), T("div", {
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
    style: un(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = mt((o) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    c("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (o) => e.autoHide && e.$emit("hide"))
    }),
    c("div", {
      class: "v-popper__wrapper",
      style: un(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      c("div", W0, [
        e.mounted ? (_(), T(de, { key: 0 }, [
          c("div", null, [
            De(e.$slots, "default")
          ]),
          e.handleResize ? (_(), Fe(s, {
            key: 0,
            onNotify: t[1] || (t[1] = (o) => e.$emit("resize", o))
          })) : j("", !0)
        ], 64)) : j("", !0)
      ], 512),
      c("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: un(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, X0, 4)
    ], 4)
  ], 46, K0);
}
const Jp = /* @__PURE__ */ Eu(G0, [["render", Z0]]), Qp = {
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
const J0 = /* @__PURE__ */ Lt({
  name: "VPopperWrapper",
  components: {
    Popper: U0,
    PopperContent: Jp
  },
  mixins: [
    Qp,
    Zp("finalTheme")
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
function Q0(e, t, n, i, a, r) {
  const s = Ue("PopperContent"), o = Ue("Popper");
  return _(), Fe(o, jt({ ref: "popper" }, e.$props, {
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
    default: xe(({
      popperId: l,
      isShown: f,
      shouldMountContent: u,
      skipTransition: h,
      autoHide: S,
      show: E,
      hide: x,
      handleResize: A,
      onResize: O,
      classes: D,
      result: M
    }) => [
      De(e.$slots, "default", {
        shown: f,
        show: E,
        hide: x
      }),
      be(s, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: f,
        mounted: u,
        "skip-transition": h,
        "auto-hide": S,
        "handle-resize": A,
        classes: D,
        result: M,
        onHide: x,
        onResize: O
      }, {
        default: xe(() => [
          De(e.$slots, "popper", {
            shown: f,
            hide: x
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Au = /* @__PURE__ */ Eu(J0, [["render", Q0]]), ew = {
  ...Au,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Au
});
({
  ...Au
});
Xp();
const Nf = Fi, tw = ew, nw = /* @__PURE__ */ Lt({
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
}), iw = "_ncPopover_qgtYg", aw = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: iw
}, ev = "nc-popover-9";
Nf.themes[ev] = structuredClone(Nf.themes.dropdown);
const rw = {
  name: "NcPopover",
  components: {
    Dropdown: tw,
    NcPopoverTriggerProvider: nw
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
      theme: ev
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
      return this.placement === "start" ? $c ? "right" : "left" : this.placement === "end" ? $c ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = _u(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: os(),
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
        ma.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function sw(e, t, n, i, a, r) {
  const s = Ue("NcPopoverTriggerProvider"), o = Ue("Dropdown");
  return _(), Fe(o, {
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
    popper: xe((l) => [
      De(e.$slots, "default", to(is(l)))
    ]),
    default: xe(() => [
      be(s, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: xe((l) => [
          De(e.$slots, "trigger", to(is(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const ow = {
  $style: aw
}, Lf = /* @__PURE__ */ Xe(rw, [["render", sw], ["__cssModules", ow]]), lw = {
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
}, cw = ["aria-hidden", "aria-label"], uw = ["fill", "width", "height"], dw = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, fw = { key: 0 };
function hw(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", dw, [
        n.title ? (_(), T("title", fw, p(n.title), 1)) : j("", !0)
      ])
    ], 8, uw))
  ], 16, cw);
}
const pw = /* @__PURE__ */ Xe(lw, [["render", hw]]);
Hi(Wy);
function ku(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === xt)
        return !1;
      if (n.type === de && !ku(n.children))
        return !1;
      if (n.type === ms && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const vw = ".focusable", gw = {
  name: "NcActions",
  components: {
    NcButton: Hn,
    NcPopover: Lf
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
      [wu]: K(() => this.actionsMenuSemanticType === "menu"),
      [$p]: this.closeMenu
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
      default: St("Actions")
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
      randomId: wl()
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
    l0(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(vw);
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
    const e = [], t = (E, x) => {
      E.forEach((A) => {
        if (this.isAction(A)) {
          x.push(A);
          return;
        }
        A.type === de && t(A.children, x);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((E) => !i.includes(E)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], s = ["NcActionInput", "NcActionTextEditable"], o = ["NcActionLink", "NcActionRouter"], l = a.some((E) => s.includes(this.getActionName(E))), f = a.some((E) => r.includes(this.getActionName(E))), u = a.some((E) => o.includes(this.getActionName(E)));
    l ? this.actionsMenuSemanticType = "dialog" : f ? this.actionsMenuSemanticType = "menu" : u ? this.actionsMenuSemanticType = "navigation" : e.filter((x) => this.getActionName(x).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (E) => {
      const x = E?.props?.icon, A = E?.children?.icon?.()?.[0] ?? (this.isIconUrl(x) ? Jt("img", { class: "action-item__menutoggle__icon", src: x, alt: "" }) : Jt("span", { class: ["icon", x] })), O = E?.children?.default?.()?.[0]?.children?.trim(), D = this.forceName ? O : "";
      let M = E?.props?.title;
      this.forceName || M || (M = O);
      const W = { ...E?.props ?? {} }, I = ["submit", "reset"].includes(W.type) ? W.modelValue : "button";
      return delete W.modelValue, delete W.type, Jt(
        Hn,
        jt(
          W,
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
            type: I,
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
    }, S = (E) => {
      const x = ku(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? Jt("span", { class: ["icon", this.defaultIcon] }) : Jt(pw, { size: 20 }), A = `${this.randomId}-trigger`;
      return Jt(
        Lf,
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
          trigger: () => Jt(Hn, {
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
            icon: () => x,
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
              E
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
          [S(a)]
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
        S(e)
      ]
    ));
  }
}, xo = /* @__PURE__ */ Xe(gw, [["__scopeId", "data-v-7206c1f1"]]), mw = ["aria-label"], bw = ["width", "height"], yw = ["fill"], _w = ["fill"], ww = { key: 0 }, Sw = /* @__PURE__ */ Lt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = K(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (_(), T("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (_(), T("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        c("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, yw),
        c("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (_(), T("title", ww, p(e.name), 1)) : j("", !0)
        ], 8, _w)
      ], 8, bw))
    ], 8, mw));
  }
}), tv = /* @__PURE__ */ Xe(Sw, [["__scopeId", "data-v-cf399190"]]), Vc = /* @__PURE__ */ Lt({
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
}), Cw = {
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
}, Tw = ["aria-hidden", "aria-label"], Ew = ["fill", "width", "height"], Aw = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, kw = { key: 0 };
function Ow(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Aw, [
        n.title ? (_(), T("title", kw, p(n.title), 1)) : j("", !0)
      ])
    ], 8, Ew))
  ], 16, Tw);
}
const xw = /* @__PURE__ */ Xe(Cw, [["render", Ow]]), Nw = {
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
}, Lw = ["aria-hidden", "aria-label"], Rw = ["fill", "width", "height"], Iw = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, Pw = { key: 0 };
function $w(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", Iw, [
        n.title ? (_(), T("title", Pw, p(n.title), 1)) : j("", !0)
      ])
    ], 8, Rw))
  ], 16, Lw);
}
const Dw = /* @__PURE__ */ Xe(Nw, [["render", $w]]);
Hi(Zy);
const Mw = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Hn,
    ChevronDown: A1,
    ChevronUp: I1
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
      return this.open ? St("Collapse menu") : St("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function Fw(e, t, n, i, a, r) {
  const s = Ue("ChevronUp"), o = Ue("ChevronDown"), l = Ue("NcButton");
  return _(), Fe(l, {
    class: Te(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: xe(() => [
      n.open ? (_(), Fe(s, {
        key: 0,
        size: 20
      })) : (_(), Fe(o, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const zw = /* @__PURE__ */ Xe(Mw, [["render", Fw], ["__scopeId", "data-v-cfbd3794"]]);
Hi(Jy, t_);
const Uw = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: xo,
    NcActionButton: o0,
    NcAppNavigationIconCollapsible: zw,
    NcInputConfirmCancel: Y1,
    NcLoadingIcon: tv,
    NcVNodes: Vc,
    Pencil: xw,
    Undo: Dw
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: xp, default: null }
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
      default: () => wl(),
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
      isMobile: ys(),
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
      return this.editLabel ? this.editLabel : St("Edit item");
    },
    undoButtonAriaLabel() {
      return St("Undo changes");
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && ui("toggle-navigation", { open: !1 }));
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
}, Bw = ["id"], jw = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], Hw = {
  key: 0,
  class: "editingContainer"
}, Vw = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, Gw = { class: "app-navigation-entry__deleted-description" }, Kw = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, Ww = {
  key: 0,
  class: "app-navigation-entry__children"
};
function qw(e, t, n, i, a, r) {
  const s = Ue("NcLoadingIcon"), o = Ue("NcInputConfirmCancel"), l = Ue("Pencil"), f = Ue("NcActionButton"), u = Ue("Undo"), h = Ue("NcActions"), S = Ue("NcAppNavigationIconCollapsible");
  return _(), T("li", {
    id: n.id,
    class: Te([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (_(), Fe(uu(r.isRouterLink ? "router-link" : "NcVNodes"), to(is({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: xe(({ href: E, navigate: x, isActive: A }) => [
        c("div", {
          ref: "entry",
          class: Te(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && A || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          n.undo ? j("", !0) : (_(), T("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && A ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || E || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...O) => r.handleBlur && r.handleBlur(...O)),
            onClick: (O) => r.onClick(O, x, E),
            onFocus: t[2] || (t[2] = (...O) => r.handleFocus && r.handleFocus(...O)),
            onKeydown: t[3] || (t[3] = mt(je((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            c("div", {
              class: Te(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (_(), Fe(s, { key: 0 })) : De(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && A
              }, void 0, !0)
            ], 2),
            c("span", {
              class: Te(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (_(), T("div", Hw, [
              be(o, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && A || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : j("", !0)
          ], 40, jw)),
          n.undo ? (_(), T("div", Vw, [
            c("div", Gw, p(n.name), 1)
          ])) : j("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (_(), T("div", {
            key: 2,
            class: Te(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (_(), T("div", Kw, [
              De(e.$slots, "counter", {}, void 0, !0)
            ])) : j("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (_(), Fe(h, {
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
              icon: xe(() => [
                De(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: xe(() => [
                n.editable && !a.editingActive ? (_(), Fe(f, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: xe(() => [
                    be(l, { size: 20 })
                  ]),
                  default: xe(() => [
                    Ie(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                n.undo ? (_(), Fe(f, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: xe(() => [
                    be(u, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : j("", !0),
                De(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : j("", !0)
          ], 2)) : j("", !0),
          n.allowCollapse && e.$slots.default ? (_(), Fe(S, {
            key: 3,
            active: n.to && A || n.active,
            open: a.opened,
            onClick: je(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : j("", !0),
          De(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (_(), T("ul", Ww, [
      De(e.$slots, "default", {}, void 0, !0)
    ])) : j("", !0)
  ], 10, Bw);
}
const Rf = /* @__PURE__ */ Xe(Uw, [["render", qw], ["__scopeId", "data-v-01bef41b"]]), hc = /* @__PURE__ */ new WeakMap(), Yw = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = nf(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = nf(e, a, Object.assign({ capture: n }, r));
    }
    hc.set(e, i);
  },
  unmounted(e) {
    const t = hc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), hc.delete(e);
  }
}, Xw = {
  mounted(e) {
    e.focus();
  }
}, Zw = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Jw = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Gc = "numeric", Kc = "ascii", Wc = "alpha", Vr = "asciinumeric", Ir = "alphanumeric", qc = "domain", nv = "emoji", Qw = "scheme", eS = "slashscheme", pc = "whitespace";
function tS(e, t) {
  return e in t || (t[e] = []), t[e];
}
function ha(e, t, n) {
  t[Gc] && (t[Vr] = !0, t[Ir] = !0), t[Kc] && (t[Vr] = !0, t[Wc] = !0), t[Vr] && (t[Ir] = !0), t[Wc] && (t[Ir] = !0), t[Ir] && (t[qc] = !0), t[nv] && (t[qc] = !0);
  for (const i in t) {
    const a = tS(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function nS(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function ln(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
ln.groups = {};
ln.prototype = {
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
    i = i || ln.groups;
    let a;
    return t && t.j ? a = t : (a = new ln(t), n && i && ha(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || ln.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let s, o = a.go(e);
    if (o ? (s = new ln(), Object.assign(s.j, o.j), s.jr.push.apply(s.jr, o.jr), s.jd = o.jd, s.t = o.t) : s = new ln(), r) {
      if (i)
        if (s.t && typeof s.t == "string") {
          const l = Object.assign(nS(s.t, i), n);
          ha(r, l, i);
        } else n && ha(r, n, i);
      s.t = r;
    }
    return a.j[e] = s, s;
  }
};
const Me = (e, t, n, i, a) => e.ta(t, n, i, a), dt = (e, t, n, i, a) => e.tr(t, n, i, a), If = (e, t, n, i, a) => e.ts(t, n, i, a), te = (e, t, n, i, a) => e.tt(t, n, i, a), ti = "WORD", Yc = "UWORD", iv = "ASCIINUMERICAL", av = "ALPHANUMERICAL", fs = "LOCALHOST", Xc = "TLD", Zc = "UTLD", eo = "SCHEME", Ba = "SLASH_SCHEME", Ou = "NUM", Jc = "WS", xu = "NL", Gr = "OPENBRACE", Kr = "CLOSEBRACE", No = "OPENBRACKET", Lo = "CLOSEBRACKET", Ro = "OPENPAREN", Io = "CLOSEPAREN", Po = "OPENANGLEBRACKET", $o = "CLOSEANGLEBRACKET", Do = "FULLWIDTHLEFTPAREN", Mo = "FULLWIDTHRIGHTPAREN", Fo = "LEFTCORNERBRACKET", zo = "RIGHTCORNERBRACKET", Uo = "LEFTWHITECORNERBRACKET", Bo = "RIGHTWHITECORNERBRACKET", jo = "FULLWIDTHLESSTHAN", Ho = "FULLWIDTHGREATERTHAN", Vo = "AMPERSAND", Go = "APOSTROPHE", Ko = "ASTERISK", Pi = "AT", Wo = "BACKSLASH", qo = "BACKTICK", Yo = "CARET", pa = "COLON", Nu = "COMMA", Xo = "DOLLAR", zn = "DOT", Zo = "EQUALS", Lu = "EXCLAMATION", gn = "HYPHEN", Wr = "PERCENT", Jo = "PIPE", Qo = "PLUS", el = "POUND", qr = "QUERY", Ru = "QUOTE", rv = "FULLWIDTHMIDDLEDOT", Iu = "SEMI", Un = "SLASH", Yr = "TILDE", tl = "UNDERSCORE", sv = "EMOJI", nl = "SYM";
var ov = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: av,
  AMPERSAND: Vo,
  APOSTROPHE: Go,
  ASCIINUMERICAL: iv,
  ASTERISK: Ko,
  AT: Pi,
  BACKSLASH: Wo,
  BACKTICK: qo,
  CARET: Yo,
  CLOSEANGLEBRACKET: $o,
  CLOSEBRACE: Kr,
  CLOSEBRACKET: Lo,
  CLOSEPAREN: Io,
  COLON: pa,
  COMMA: Nu,
  DOLLAR: Xo,
  DOT: zn,
  EMOJI: sv,
  EQUALS: Zo,
  EXCLAMATION: Lu,
  FULLWIDTHGREATERTHAN: Ho,
  FULLWIDTHLEFTPAREN: Do,
  FULLWIDTHLESSTHAN: jo,
  FULLWIDTHMIDDLEDOT: rv,
  FULLWIDTHRIGHTPAREN: Mo,
  HYPHEN: gn,
  LEFTCORNERBRACKET: Fo,
  LEFTWHITECORNERBRACKET: Uo,
  LOCALHOST: fs,
  NL: xu,
  NUM: Ou,
  OPENANGLEBRACKET: Po,
  OPENBRACE: Gr,
  OPENBRACKET: No,
  OPENPAREN: Ro,
  PERCENT: Wr,
  PIPE: Jo,
  PLUS: Qo,
  POUND: el,
  QUERY: qr,
  QUOTE: Ru,
  RIGHTCORNERBRACKET: zo,
  RIGHTWHITECORNERBRACKET: Bo,
  SCHEME: eo,
  SEMI: Iu,
  SLASH: Un,
  SLASH_SCHEME: Ba,
  SYM: nl,
  TILDE: Yr,
  TLD: Xc,
  UNDERSCORE: tl,
  UTLD: Zc,
  UWORD: Yc,
  WORD: ti,
  WS: Jc
});
const Qn = /[a-z]/, kr = new RegExp("\\p{L}", "u"), vc = new RegExp("\\p{Emoji}", "u"), ei = /\d/, gc = /\s/, Pf = "\r", mc = `
`, iS = "️", aS = "‍", bc = "￼";
let Ws = null, qs = null;
function rS(e = []) {
  const t = {};
  ln.groups = t;
  const n = new ln();
  Ws == null && (Ws = $f(Zw)), qs == null && (qs = $f(Jw)), te(n, "'", Go), te(n, "{", Gr), te(n, "}", Kr), te(n, "[", No), te(n, "]", Lo), te(n, "(", Ro), te(n, ")", Io), te(n, "<", Po), te(n, ">", $o), te(n, "（", Do), te(n, "）", Mo), te(n, "「", Fo), te(n, "」", zo), te(n, "『", Uo), te(n, "』", Bo), te(n, "＜", jo), te(n, "＞", Ho), te(n, "&", Vo), te(n, "*", Ko), te(n, "@", Pi), te(n, "`", qo), te(n, "^", Yo), te(n, ":", pa), te(n, ",", Nu), te(n, "$", Xo), te(n, ".", zn), te(n, "=", Zo), te(n, "!", Lu), te(n, "-", gn), te(n, "%", Wr), te(n, "|", Jo), te(n, "+", Qo), te(n, "#", el), te(n, "?", qr), te(n, '"', Ru), te(n, "/", Un), te(n, ";", Iu), te(n, "~", Yr), te(n, "_", tl), te(n, "\\", Wo), te(n, "・", rv);
  const i = dt(n, ei, Ou, {
    [Gc]: !0
  });
  dt(i, ei, i);
  const a = dt(i, Qn, iv, {
    [Vr]: !0
  }), r = dt(i, kr, av, {
    [Ir]: !0
  }), s = dt(n, Qn, ti, {
    [Kc]: !0
  });
  dt(s, ei, a), dt(s, Qn, s), dt(a, ei, a), dt(a, Qn, a);
  const o = dt(n, kr, Yc, {
    [Wc]: !0
  });
  dt(o, Qn), dt(o, ei, r), dt(o, kr, o), dt(r, ei, r), dt(r, Qn), dt(r, kr, r);
  const l = te(n, mc, xu, {
    [pc]: !0
  }), f = te(n, Pf, Jc, {
    [pc]: !0
  }), u = dt(n, gc, Jc, {
    [pc]: !0
  });
  te(n, bc, u), te(f, mc, l), te(f, bc, u), dt(f, gc, u), te(u, Pf), te(u, mc), dt(u, gc, u), te(u, bc, u);
  const h = dt(n, vc, sv, {
    [nv]: !0
  });
  te(h, "#"), dt(h, vc, h), te(h, iS, h);
  const S = te(h, aS);
  te(S, "#"), dt(S, vc, h);
  const E = [[Qn, s], [ei, a]], x = [[Qn, null], [kr, o], [ei, r]];
  for (let A = 0; A < Ws.length; A++)
    xi(n, Ws[A], Xc, ti, E);
  for (let A = 0; A < qs.length; A++)
    xi(n, qs[A], Zc, Yc, x);
  ha(Xc, {
    tld: !0,
    ascii: !0
  }, t), ha(Zc, {
    utld: !0,
    alpha: !0
  }, t), xi(n, "file", eo, ti, E), xi(n, "mailto", eo, ti, E), xi(n, "http", Ba, ti, E), xi(n, "https", Ba, ti, E), xi(n, "ftp", Ba, ti, E), xi(n, "ftps", Ba, ti, E), ha(eo, {
    scheme: !0,
    ascii: !0
  }, t), ha(Ba, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((A, O) => A[0] > O[0] ? 1 : -1);
  for (let A = 0; A < e.length; A++) {
    const O = e[A][0], M = e[A][1] ? {
      [Qw]: !0
    } : {
      [eS]: !0
    };
    O.indexOf("-") >= 0 ? M[qc] = !0 : Qn.test(O) ? ei.test(O) ? M[Vr] = !0 : M[Kc] = !0 : M[Gc] = !0, If(n, O, O, M);
  }
  return If(n, "localhost", fs, {
    ascii: !0
  }), n.jd = new ln(nl), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, ov)
  };
}
function lv(e, t) {
  const n = sS(t.replace(/[A-Z]/g, (o) => o.toLowerCase())), i = n.length, a = [];
  let r = 0, s = 0;
  for (; s < i; ) {
    let o = e, l = null, f = 0, u = null, h = -1, S = -1;
    for (; s < i && (l = o.go(n[s])); )
      o = l, o.accepts() ? (h = 0, S = 0, u = o) : h >= 0 && (h += n[s].length, S++), f += n[s].length, r += n[s].length, s++;
    r -= h, s -= S, f -= h, a.push({
      t: u.t,
      // token type/name
      v: t.slice(r - f, r),
      // string value
      s: r - f,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function sS(e) {
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
    e.j[l] ? r = e.j[l] : (r = new ln(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new ln(n), r.jr = a.slice(), e.j[t[s - 1]] = r, r;
}
function $f(e) {
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
const hs = {
  defaultProtocol: "http",
  events: null,
  format: Df,
  formatHref: Df,
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
function Pu(e, t = null) {
  let n = Object.assign({}, hs);
  e && (n = Object.assign(n, e instanceof Pu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
Pu.prototype = {
  o: hs,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : hs[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Df(e) {
  return e;
}
function cv(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
cv.prototype = {
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
  toObject(e = hs.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), s = {}, o = e.get("className", n, t), l = e.get("target", n, t), f = e.get("rel", n, t), u = e.getObj("attributes", n, t), h = e.getObj("events", n, t);
    return s.href = i, o && (s.class = o), l && (s.target = l), f && (s.rel = f), u && Object.assign(s, u), {
      tagName: a,
      attributes: s,
      content: r,
      eventListeners: h
    };
  }
};
function El(e, t) {
  class n extends cv {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const oS = El("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Mf = El("text"), lS = El("nl"), Ys = El("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = hs.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== fs && e[1].t === pa;
  }
}), vn = (e) => new ln(e);
function cS({
  groups: e
}) {
  const t = e.domain.concat([Vo, Ko, Pi, Wo, qo, Yo, Xo, Zo, gn, Ou, Wr, Jo, Qo, el, Un, nl, Yr, tl]), n = [Go, pa, Nu, zn, Lu, Wr, qr, Ru, Iu, Po, $o, Gr, Kr, Lo, No, Ro, Io, Do, Mo, Fo, zo, Uo, Bo, jo, Ho], i = [Vo, Go, Ko, Wo, qo, Yo, Xo, Zo, gn, Gr, Kr, Wr, Jo, Qo, el, qr, Un, nl, Yr, tl], a = vn(), r = te(a, Yr);
  Me(r, i, r), Me(r, e.domain, r);
  const s = vn(), o = vn(), l = vn();
  Me(a, e.domain, s), Me(a, e.scheme, o), Me(a, e.slashscheme, l), Me(s, i, r), Me(s, e.domain, s);
  const f = te(s, Pi);
  te(r, Pi, f), te(o, Pi, f), te(l, Pi, f);
  const u = te(r, zn);
  Me(u, i, r), Me(u, e.domain, r);
  const h = vn();
  Me(f, e.domain, h), Me(h, e.domain, h);
  const S = te(h, zn);
  Me(S, e.domain, h);
  const E = vn(oS);
  Me(S, e.tld, E), Me(S, e.utld, E), te(f, fs, E);
  const x = te(h, gn);
  te(x, gn, x), Me(x, e.domain, h), Me(E, e.domain, h), te(E, zn, S), te(E, gn, x);
  const A = te(s, gn), O = te(s, zn);
  te(A, gn, A), Me(A, e.domain, s), Me(O, i, r), Me(O, e.domain, s);
  const D = vn(Ys);
  Me(O, e.tld, D), Me(O, e.utld, D), Me(D, e.domain, s), Me(D, i, r), te(D, zn, O), te(D, gn, A), te(D, Pi, f);
  const M = te(D, pa), W = vn(Ys);
  Me(M, e.numeric, W);
  const I = vn(Ys), P = vn();
  Me(I, t, I), Me(I, n, P), Me(P, t, I), Me(P, n, P), te(D, Un, I), te(W, Un, I);
  const ce = te(o, pa), Q = te(l, pa), ue = te(Q, Un), Y = te(ue, Un);
  Me(o, e.domain, s), te(o, zn, O), te(o, gn, A), Me(l, e.domain, s), te(l, zn, O), te(l, gn, A), Me(ce, e.domain, I), te(ce, Un, I), te(ce, qr, I), Me(Y, e.domain, I), Me(Y, t, I), te(Y, Un, I);
  const se = [
    [Gr, Kr],
    // {}
    [No, Lo],
    // []
    [Ro, Io],
    // ()
    [Po, $o],
    // <>
    [Do, Mo],
    // （）
    [Fo, zo],
    // 「」
    [Uo, Bo],
    // 『』
    [jo, Ho]
    // ＜＞
  ];
  for (let ge = 0; ge < se.length; ge++) {
    const [ee, ie] = se[ge], $ = te(I, ee);
    te(P, ee, $);
    const F = vn(Ys);
    Me($, t, F);
    const X = vn();
    Me($, n, X), te($, ie, I), Me(F, t, F), Me(F, n, X), Me(X, t, F), Me(X, n, X), te(F, ie, I), te(X, ie, I);
  }
  return te(a, fs, D), te(a, xu, lS), {
    start: a,
    tokens: ov
  };
}
function uS(e, t, n) {
  let i = n.length, a = 0, r = [], s = [];
  for (; a < i; ) {
    let o = e, l = null, f = null, u = 0, h = null, S = -1;
    for (; a < i && !(l = o.go(n[a].t)); )
      s.push(n[a++]);
    for (; a < i && (f = l || o.go(n[a].t)); )
      l = null, o = f, o.accepts() ? (S = 0, h = o) : S >= 0 && S++, a++, u++;
    if (S < 0)
      a -= u, a < i && (s.push(n[a]), a++);
    else {
      s.length > 0 && (r.push(yc(Mf, t, s)), s = []), a -= S, u -= S;
      const E = h.t, x = n.slice(a - u, a);
      r.push(yc(E, t, x));
    }
  }
  return s.length > 0 && r.push(yc(Mf, t, s)), r;
}
function yc(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const $t = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function dS() {
  $t.scanner = rS($t.customSchemes);
  for (let e = 0; e < $t.tokenQueue.length; e++)
    $t.tokenQueue[e][1]({
      scanner: $t.scanner
    });
  $t.parser = cS($t.scanner.tokens);
  for (let e = 0; e < $t.pluginQueue.length; e++)
    $t.pluginQueue[e][1]({
      scanner: $t.scanner,
      parser: $t.parser
    });
  return $t.initialized = !0, $t;
}
function uv(e) {
  return $t.initialized || dS(), uS($t.parser.start, e, lv($t.scanner.start, e));
}
uv.scan = lv;
function fS(e) {
  const t = new Pu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, vS), n = uv(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(mo(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function hS(e) {
  return e.replace(/"/g, "&quot;");
}
function pS(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${hS(i)}"`);
  }
  return t.join(" ");
}
function vS({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${pS(t)}>${mo(n)}</${e}>`;
}
const gS = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = fS(t.text));
}, mS = ["title"], bS = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Ft("NcAppSidebar:header:ref");
    return (n, i) => We((_(), T("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Ie(p(e.name), 1)
    ], 8, mS)), [
      [b(gS), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), yS = ["aria-labelledby"], _S = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, wS = ["id"], SS = {
  key: 2,
  class: "empty-content__description"
}, CS = {
  key: 3,
  class: "empty-content__action"
}, TS = /* @__PURE__ */ Lt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = wl();
    return (n, i) => (_(), T("div", {
      "aria-labelledby": b(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (_(), T("div", _S, [
        De(n.$slots, "icon", {}, void 0, !0)
      ])) : j("", !0),
      e.name !== "" || n.$slots.name ? (_(), T("div", {
        key: 1,
        id: b(t),
        class: "empty-content__name"
      }, [
        De(n.$slots, "name", {}, () => [
          Ie(p(e.name), 1)
        ], !0)
      ], 8, wS)) : j("", !0),
      e.description !== "" || n.$slots.description ? (_(), T("p", SS, [
        De(n.$slots, "description", {}, () => [
          Ie(p(e.description), 1)
        ], !0)
      ])) : j("", !0),
      n.$slots.action ? (_(), T("div", CS, [
        De(n.$slots, "action", {}, void 0, !0)
      ])) : j("", !0)
    ], 8, yS));
  }
}), ES = /* @__PURE__ */ Xe(TS, [["__scopeId", "data-v-8609a4c1"]]), AS = {
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
}, kS = ["aria-hidden", "aria-label"], OS = ["fill", "width", "height"], xS = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, NS = { key: 0 };
function LS(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", xS, [
        n.title ? (_(), T("title", NS, p(n.title), 1)) : j("", !0)
      ])
    ], 8, OS))
  ], 16, kS);
}
const RS = /* @__PURE__ */ Xe(AS, [["render", LS]]), IS = {
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
}, PS = ["aria-hidden", "aria-label"], $S = ["fill", "width", "height"], DS = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, MS = { key: 0 };
function FS(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", DS, [
        n.title ? (_(), T("title", MS, p(n.title), 1)) : j("", !0)
      ])
    ], 8, $S))
  ], 16, PS);
}
const zS = /* @__PURE__ */ Xe(IS, [["render", FS]]), US = {
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
}, BS = ["aria-hidden", "aria-label"], jS = ["fill", "width", "height"], HS = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, VS = { key: 0 };
function GS(e, t, n, i, a, r) {
  return _(), T("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (s) => e.$emit("click", s))
  }), [
    (_(), T("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      c("path", HS, [
        n.title ? (_(), T("title", VS, p(n.title), 1)) : j("", !0)
      ])
    ], 8, jS))
  ], 16, BS);
}
const KS = /* @__PURE__ */ Xe(US, [["render", GS]]), WS = ["aria-selected", "tabindex"], qS = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ fm({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Rh(e, "selected"), n = /* @__PURE__ */ Pe(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (_(), T("button", {
      class: Te(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: b(Vi),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      c("span", {
        class: Te([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (s) => n.value = !1)
      }, [
        c("span", {
          class: Te([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          be(Vc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: xe(() => [
              c("span", {
                class: Te([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        c("span", {
          class: Te([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          be(Vc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: xe(() => [
              c("span", {
                class: Te([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      c("span", {
        class: Te(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, WS));
  }
}), YS = "_sidebarTabsButton_q3kBA", XS = "_sidebarTabsButton_legacy_KQ4d1", ZS = "_sidebarTabsButton_selected_Pjayf", JS = "_sidebarTabsButton_animatedHighlight_uvp-0", QS = "_sidebarTabsButton__name_rlQsL", eC = "_sidebarTabsButton__icon_QzZg4", tC = "_sidebarTabsButton__iconLayer_ZkZan", nC = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", iC = "_sidebarTabsButton__icon_pop_IA0By", aC = "_sidebarTabsButton__legacyIcon_QhcNW", rC = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: YS,
  sidebarTabsButton_legacy: XS,
  sidebarTabsButton_selected: ZS,
  sidebarTabsButton_animatedHighlight: JS,
  sidebarTabsButton__name: QS,
  sidebarTabsButton__icon: eC,
  sidebarTabsButton__iconLayer: tC,
  sidebarTabsButton__iconLayer_hidden: nC,
  sidebarTabsButton__icon_pop: iC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: aC
}, sC = {
  $style: rC
}, oC = /* @__PURE__ */ Xe(qS, [["__cssModules", sC]]), lC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: oC
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [py()]) : t.order - n.order), this.updateActive();
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
}, cC = { class: "app-sidebar-tabs" };
function uC(e, t, n, i, a, r) {
  const s = Ue("NcAppSidebarTabsButton");
  return _(), T("div", cC, [
    r.hasMultipleTabs || r.showForSingleTab ? (_(), T("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Te(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = mt(je((...o) => r.focusPreviousTab && r.focusPreviousTab(...o), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = mt(je((...o) => r.focusNextTab && r.focusNextTab(...o), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = mt(je((...o) => r.focusActiveTabContent && r.focusActiveTabContent(...o), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = mt(je((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = mt(je((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = mt(je((...o) => r.focusFirstTab && r.focusFirstTab(...o), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = mt(je((...o) => r.focusLastTab && r.focusLastTab(...o), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onPointerleave: t[8] || (t[8] = (...o) => r.hideHighlight && r.hideHighlight(...o)),
      onFocusin: t[9] || (t[9] = (...o) => r.handleHighlight && r.handleHighlight(...o)),
      onFocusout: t[10] || (t[10] = (...o) => r.onHighlightFocusOut && r.onHighlightFocusOut(...o))
    }, [
      a.highlightEnabled ? (_(), T("div", {
        key: 0,
        class: Te(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: un(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : j("", !0),
      (_(!0), T(de, null, ze(a.tabs, (o) => (_(), Fe(s, {
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
      class: Te(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      De(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const dC = /* @__PURE__ */ Xe(lC, [["render", uC], ["__scopeId", "data-v-74190d2a"]]);
Hi(Yy);
const fC = {
  name: "NcAppSidebar",
  components: {
    NcActions: xo,
    NcAppSidebarHeader: bS,
    NcAppSidebarTabs: dC,
    NcButton: Hn,
    NcLoadingIcon: tv,
    NcEmptyContent: ES,
    IconArrowRight: Ip,
    IconClose: Pp,
    IconDockRight: RS,
    IconStar: zS,
    IconStarOutline: KS
  },
  directives: {
    Focus: Xw,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: Yw
  },
  inject: {
    ncContentSelector: {
      from: Rp,
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
    const e = /* @__PURE__ */ Pe(null);
    return mn("NcAppSidebar:header:ref", e), {
      uid: wl(),
      isMobile: Hy(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: St("Change name"),
      closeTranslated: St("Close sidebar"),
      favoriteTranslated: St("Favorite"),
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
    isSlotPopulated: ku,
    t: St,
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
      this.focusTrap || (this.focusTrap = _u([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: os(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ma.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, hC = ["aria-labelledby"], pC = { class: "app-sidebar-header__info" }, vC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, gC = { class: "app-sidebar-header__name-container" }, mC = { class: "app-sidebar-header__mainname-container" }, bC = ["placeholder", "value"], yC = ["title"], _C = {
  key: 2,
  class: "app-sidebar-header__description"
};
function wC(e, t, n, i, a, r) {
  const s = Ue("IconDockRight"), o = Ue("NcButton"), l = Ue("NcLoadingIcon"), f = Ue("IconStar"), u = Ue("IconStarOutline"), h = Ue("NcAppSidebarHeader"), S = Ue("IconArrowRight"), E = Ue("NcActions"), x = Ue("IconClose"), A = Ue("NcAppSidebarTabs"), O = Ue("NcEmptyContent"), D = td("focus"), M = td("click-outside");
  return _(), Fe(Qm, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: xe(() => [
      We(c("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = mt((...W) => r.onKeydownEsc && r.onKeydownEsc(...W), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (_(), Fe(gh, {
          key: 0,
          to: r.ncContentSelector
        }, [
          be(o, jt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (W) => e.$emit("update:open", !0))
          }), {
            icon: xe(() => [
              De(e.$slots, "toggle-icon", {}, () => [
                be(s, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : j("", !0),
        c("header", {
          class: Te(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (_(), Fe(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : De(e.$slots, "info", { key: 0 }, () => [
            c("div", pC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (_(), T("div", {
                key: 0,
                class: Te(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: un({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...W) => r.onFigureClick && r.onFigureClick(...W)),
                onKeydown: t[2] || (t[2] = mt((...W) => r.onFigureClick && r.onFigureClick(...W), ["enter"]))
              }, [
                De(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : j("", !0),
              c("div", {
                class: Te(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (_(), T("div", vC, [
                  De(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (_(), Fe(o, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: je(r.toggleStarred, ["prevent"])
                    }, {
                      icon: xe(() => [
                        n.starLoading ? (_(), Fe(l, { key: 0 })) : a.isStarred ? (_(), Fe(f, {
                          key: 1,
                          size: 20
                        })) : (_(), Fe(u, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : j("", !0)
                  ], !0)
                ])) : j("", !0),
                c("div", gC, [
                  c("div", mC, [
                    We(be(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: je(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Ka, !n.nameEditable]
                    ]),
                    n.nameEditable ? We((_(), T("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = je((...W) => r.onSubmitName && r.onSubmitName(...W), ["prevent"]))
                    }, [
                      We(c("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = mt(je((...W) => r.onDismissEditing && r.onDismissEditing(...W), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...W) => r.onNameInput && r.onNameInput(...W))
                      }, null, 40, bC), [
                        [D]
                      ]),
                      be(o, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: xe(() => [
                          be(S, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [M, () => r.onSubmitName()]
                    ]) : j("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (_(), Fe(E, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: xe(() => [
                        De(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : j("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (_(), T("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    De(e.$slots, "subname", {}, () => [
                      Ie(p(n.subname), 1)
                    ], !0)
                  ], 8, yC)) : j("", !0)
                ])
              ], 2)
            ])
          ], !0),
          be(o, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: je(r.closeSidebar, ["prevent"])
          }, {
            icon: xe(() => [
              be(x, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (_(), T("div", _C, [
            De(e.$slots, "description", {}, void 0, !0)
          ])) : j("", !0)
        ], 2),
        We(be(A, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: xe(() => [
            De(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Ka, !n.loading]
        ]),
        n.loading ? (_(), Fe(O, { key: 1 }, {
          icon: xe(() => [
            be(l, { size: 64 })
          ]),
          _: 1
        })) : j("", !0)
      ], 40, hC), [
        [Ka, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const SC = /* @__PURE__ */ Xe(fC, [["render", wC], ["__scopeId", "data-v-c2c6820b"]]), CC = {
  name: "NcActionLink",
  mixins: [Dp],
  inject: {
    isInSemanticMenu: {
      from: wu,
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
}, TC = ["role"], EC = ["download", "href", "aria-label", "target", "title", "role"], AC = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, kC = { class: "action-link__name" }, OC = ["textContent"], xC = ["textContent"], NC = {
  key: 2,
  class: "action-link__text"
};
function LC(e, t, n, i, a, r) {
  return _(), T("li", {
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
      De(e.$slots, "icon", {}, () => [
        c("span", {
          "aria-hidden": "true",
          class: Te(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: un({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (_(), T("span", AC, [
        c("strong", kC, p(e.name), 1),
        t[1] || (t[1] = c("br", null, null, -1)),
        c("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, OC)
      ])) : e.isLongText ? (_(), T("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, xC)) : (_(), T("span", NC, p(e.text), 1)),
      j("", !0)
    ], 8, EC)
  ], 8, TC);
}
const Fa = /* @__PURE__ */ Xe(CC, [["render", LC], ["__scopeId", "data-v-32f01b7a"]]);
Hi(e_);
const RC = `<!--
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
`, IC = `<!--
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
`, PC = { class: "vue-skip-actions__container" }, $C = { class: "vue-skip-actions__headline" }, DC = { class: "vue-skip-actions__buttons" }, MC = /* @__PURE__ */ Lt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    mn(Lp, o), mn(Rp, "#content-vue"), mn("appName", K(() => t.appName));
    const n = ys(), i = /* @__PURE__ */ Pe(!1), a = /* @__PURE__ */ Pe(), r = K(() => a.value === "navigation" ? IC : RC);
    Th(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function s() {
      ui("toggle-navigation", { open: !0 }), on(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function o(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, f) => (_(), T("div", {
      id: "content-vue",
      class: Te(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": b(Vi) }]])
    }, [
      (_(), Fe(gh, { to: "#skip-actions" }, [
        c("div", PC, [
          c("div", $C, p(b(St)("Keyboard navigation help")), 1),
          c("div", DC, [
            We(be(Hn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: je(s, ["prevent"]),
              onFocusin: f[0] || (f[0] = (u) => a.value = "navigation"),
              onMouseover: f[1] || (f[1] = (u) => a.value = "navigation")
            }, {
              default: xe(() => [
                Ie(p(b(St)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Ka, i.value]
            ]),
            be(Hn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: f[2] || (f[2] = (u) => a.value = "content"),
              onMouseover: f[3] || (f[3] = (u) => a.value = "content")
            }, {
              default: xe(() => [
                Ie(p(b(St)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          We(be(_l, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Ka, !b(n)]
          ])
        ])
      ])),
      De(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), FC = /* @__PURE__ */ Xe(MC, [["__scopeId", "data-v-d13dcb98"]]), zC = { class: "library-shelf-tree-node" }, UC = ["aria-expanded", "aria-label"], BC = ["href"], jC = { class: "library-shelf-summary-title" }, HC = { dir: "auto" }, VC = { class: "library-muted" }, GC = { dir: "auto" }, KC = {
  key: 1,
  role: "status",
  class: "library-muted"
}, WC = {
  key: 2,
  role: "status",
  class: "library-muted"
}, qC = {
  key: 3,
  class: "library-shelf-tree"
}, YC = ["disabled"], XC = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Pe(!1), i = /* @__PURE__ */ Pe(!1), a = /* @__PURE__ */ Pe(!1), r = /* @__PURE__ */ Pe(!1), s = /* @__PURE__ */ Pe([]), o = /* @__PURE__ */ Pe(!1), l = /* @__PURE__ */ Pe(0);
    async function f() {
      n.value = !n.value, !(!n.value || i.value || a.value) && await u();
    }
    async function u() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const h = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(l.value) }), S = await fetch(`${t.childrenUrl}?${h}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!S.ok) throw new Error("Shelf children request failed");
          const E = await S.json(), x = Array.isArray(E?.nodes) ? E.nodes : [];
          s.value.push(...x), o.value = E?.hasMore === !0, l.value = Number.isInteger(E?.nextOffset) ? E.nextOffset : s.value.length, i.value = !o.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (h, S) => {
      const E = Ue("ShelfTreeNode", !0);
      return _(), T("li", zC, [
        e.node.hasChildren ? (_(), T("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? b(y)("library", "Collapse {folder}", { folder: e.node.label }) : b(y)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: f
        }, p(n.value ? "−" : "+"), 9, UC)) : j("", !0),
        c("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          c("span", jC, [
            c("strong", null, [
              c("bdi", HC, p(e.node.label), 1)
            ]),
            c("span", null, p(b(Fn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          c("small", VC, [
            c("bdi", GC, p(e.node.path), 1)
          ])
        ], 8, BC),
        a.value ? (_(), T("small", KC, p(b(y)("library", "Loading folders…")), 1)) : r.value ? (_(), T("small", WC, p(b(y)("library", "Could not load folders.")), 1)) : j("", !0),
        n.value && s.value.length ? (_(), T("ul", qC, [
          (_(!0), T(de, null, ze(s.value, (x) => (_(), Fe(E, {
            key: x.id,
            node: x,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : j("", !0),
        n.value && o.value ? (_(), T("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: u
        }, p(b(y)("library", "Load more folders")), 9, YC)) : j("", !0)
      ]);
    };
  }
}, ZC = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, JC = { id: "library-sidebar-filters-heading" }, QC = ["aria-label"], eT = ["name", "value"], tT = ["value"], nT = ["value"], iT = ["title"], aT = ["placeholder"], rT = { value: "" }, sT = ["value"], oT = { class: "library-publisher-filter" }, lT = { for: "library-publisher-search" }, cT = ["placeholder", "title", "aria-expanded"], uT = ["value"], dT = {
  key: 0,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, fT = ["onClick"], hT = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, pT = { class: "library-publication-filter" }, vT = { for: "library-publication-search" }, gT = ["placeholder", "aria-expanded"], mT = ["value"], bT = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, yT = ["onClick"], _T = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, wT = { class: "library-year-filter" }, ST = { for: "library-year-search" }, CT = ["placeholder", "aria-expanded"], TT = ["value"], ET = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, AT = ["onClick"], kT = {
  type: "submit",
  class: "button secondary library-year-apply"
}, OT = { class: "library-creator-filter" }, xT = { for: "library-creator-search" }, NT = ["placeholder", "title", "aria-expanded"], LT = ["value"], RT = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, IT = ["onClick"], PT = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, $T = ["placeholder"], DT = { value: "" }, MT = ["value"], FT = { value: "" }, zT = ["value"], UT = { value: "" }, BT = ["value"], jT = { value: "" }, HT = ["value"], VT = { class: "library-subject-filter" }, GT = { for: "library-subject-search" }, KT = ["placeholder", "title", "aria-expanded"], WT = ["value"], qT = {
  key: 0,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, YT = ["onClick"], XT = { value: "" }, ZT = ["value"], JT = { value: "" }, QT = { value: "1" }, eE = {
  type: "submit",
  class: "button primary"
}, tE = {
  href: "?",
  class: "button secondary"
}, nE = ["href"], iE = ["lang", "dir"], aE = ["aria-label"], rE = ["href", "aria-label", "onClick"], sE = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, oE = { class: "library-review-header" }, lE = { class: "library-muted library-catalogue-eyebrow" }, cE = { id: "library-review-heading" }, uE = ["aria-label"], dE = ["href", "aria-current", "onClick"], fE = ["aria-label"], hE = ["name", "value"], pE = {
  type: "submit",
  class: "button secondary"
}, vE = ["aria-busy"], gE = { key: 0 }, mE = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, bE = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, yE = { class: "library-metadata-review-workbench-copy" }, _E = { class: "library-muted library-catalogue-eyebrow" }, wE = ["title"], SE = {
  key: 0,
  class: "library-metadata-review-card"
}, CE = {
  class: "library-bidi-human",
  dir: "auto"
}, TE = { class: "library-muted" }, EE = {
  class: "library-bidi-machine",
  dir: "ltr"
}, AE = { class: "library-metadata-review-fields" }, kE = {
  class: "library-bidi-human",
  dir: "auto"
}, OE = {
  class: "library-bidi-human",
  dir: "auto"
}, xE = {
  class: "library-bidi-human",
  dir: "auto"
}, NE = {
  class: "library-bidi-machine",
  dir: "ltr"
}, LE = {
  class: "library-bidi-human",
  dir: "auto"
}, RE = {
  class: "library-bidi-human",
  dir: "auto"
}, IE = ["action"], PE = ["value"], $E = ["value"], DE = {
  type: "submit",
  class: "button secondary"
}, ME = { class: "library-metadata-review-actions" }, FE = ["href"], zE = ["href"], UE = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, BE = ["href"], jE = ["aria-label"], HE = ["onClick"], VE = {
  class: "library-bidi-human",
  dir: "auto"
}, GE = {
  key: 0,
  class: "library-muted"
}, KE = {
  class: "library-bidi-human",
  dir: "auto"
}, WE = {
  key: 1,
  class: "library-scan-error"
}, qE = {
  class: "library-bidi-human",
  dir: "auto"
}, YE = ["onClick"], XE = ["href"], ZE = ["aria-label"], JE = ["href"], QE = {
  key: 1,
  class: "library-muted"
}, eA = { key: 0 }, tA = ["href"], nA = {
  key: 3,
  class: "library-muted"
}, iA = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, aA = { class: "library-home-header" }, rA = { class: "library-muted library-catalogue-eyebrow" }, sA = { id: "library-home-heading" }, oA = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, lA = { id: "library-continue-heading" }, cA = { class: "library-muted" }, uA = ["href"], dA = {
  key: 0,
  class: "library-home-card-row"
}, fA = ["onClick"], hA = { class: "library-cover-frame" }, pA = ["src"], vA = { class: "library-cover-summary" }, gA = ["onClick"], mA = { dir: "auto" }, bA = {
  key: 0,
  class: "library-cover-creator"
}, yA = { dir: "auto" }, _A = ["href"], wA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, SA = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, CA = { id: "library-recent-heading" }, TA = { class: "library-muted" }, EA = ["href"], AA = {
  key: 0,
  class: "library-home-card-row"
}, kA = ["onClick"], OA = { class: "library-cover-frame" }, xA = ["src"], NA = { class: "library-cover-summary" }, LA = ["onClick"], RA = { dir: "auto" }, IA = {
  key: 0,
  class: "library-cover-creator"
}, PA = { dir: "auto" }, $A = ["href"], DA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, MA = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, FA = { id: "library-home-shelves-heading" }, zA = { class: "library-muted" }, UA = ["href"], BA = ["aria-label"], jA = ["href"], HA = { dir: "auto" }, VA = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, GA = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, KA = { id: "library-home-attention-heading" }, WA = { class: "library-muted" }, qA = ["href"], YA = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, XA = { class: "library-home-header" }, ZA = { class: "library-muted library-catalogue-eyebrow" }, JA = { id: "library-shelves-landing-heading" }, QA = { class: "library-muted" }, ek = ["aria-label"], tk = { class: "library-shelf-tree" }, nk = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, ik = { class: "library-muted" }, ak = { class: "library-empty-actions" }, rk = ["href"], sk = ["href"], ok = {
  key: 4,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, lk = { class: "library-catalogue-header" }, ck = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, uk = { id: "library-catalogue-heading" }, dk = ["aria-label"], fk = ["aria-label"], hk = ["name", "value"], pk = { "data-library-control": "sort" }, vk = { value: "title" }, gk = { value: "recent" }, mk = { value: "publicationDate" }, bk = { value: "publication" }, yk = { value: "lastOpened" }, _k = { value: "format" }, wk = ["aria-label"], Sk = ["aria-pressed"], Ck = ["aria-pressed"], Tk = ["aria-pressed"], Ek = ["aria-pressed"], Ak = {
  id: "library-collections",
  class: "library-saved-collections"
}, kk = ["title"], Ok = ["action", "title"], xk = ["value"], Nk = ["value"], Lk = ["placeholder", "disabled"], Rk = ["disabled", "title"], Ik = ["aria-label"], Pk = ["href"], $k = { class: "library-saved-collection-count" }, Dk = ["action"], Mk = ["value"], Fk = {
  type: "submit",
  class: "button tertiary"
}, zk = ["aria-label"], Uk = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, Bk = ["title"], jk = { class: "library-workspace-panel-purpose" }, Hk = { class: "library-workspace-scope-badge" }, Vk = { "aria-live": "polite" }, Gk = ["action"], Kk = ["value"], Wk = ["placeholder"], qk = ["title"], Yk = ["action"], Xk = ["value"], Zk = ["placeholder"], Jk = ["title"], Qk = ["action"], e2 = ["value"], t2 = ["name", "value"], n2 = ["title"], i2 = ["action"], a2 = ["value"], r2 = ["name", "value"], s2 = { name: "bulkEditField" }, o2 = { value: "publicationType" }, l2 = { value: "subtitle" }, c2 = { value: "creators" }, u2 = { value: "publication" }, d2 = { value: "publicationDate" }, f2 = { value: "language" }, h2 = { value: "publisher" }, p2 = { value: "subjects" }, v2 = { value: "classifications" }, g2 = ["placeholder"], m2 = ["title"], b2 = ["action"], y2 = ["value"], _2 = ["name", "value"], w2 = ["title"], S2 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, C2 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, T2 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, E2 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, A2 = { class: "library-muted library-catalogue-eyebrow" }, k2 = ["title"], O2 = ["aria-label"], x2 = { key: 0 }, N2 = { key: 1 }, L2 = { key: 2 }, R2 = ["aria-label"], I2 = { key: 0 }, P2 = { key: 1 }, $2 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, D2 = { class: "library-muted library-catalogue-eyebrow" }, M2 = ["title"], F2 = ["aria-label"], z2 = ["href"], U2 = {
  key: 0,
  class: "library-notice"
}, B2 = { class: "library-publication-issue-label" }, j2 = ["href"], H2 = { class: "library-muted" }, V2 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, G2 = ["title"], K2 = ["href"], W2 = { class: "library-catalogue-status-row" }, q2 = { class: "library-muted library-filter-result-summary" }, Y2 = { key: 0 }, X2 = { href: "?" }, Z2 = ["aria-label"], J2 = { class: "library-pagination-range" }, Q2 = { key: 0 }, eO = ["href"], tO = {
  key: 1,
  class: "library-muted"
}, nO = ["href"], iO = {
  key: 3,
  class: "library-muted"
}, aO = ["title"], rO = { class: "library-empty-actions" }, sO = ["href"], oO = { class: "library-muted" }, lO = ["title"], cO = { class: "library-empty-actions" }, uO = ["href"], dO = ["title"], fO = { class: "library-empty-actions" }, hO = ["href"], pO = {
  href: "?",
  class: "button primary"
}, vO = ["title"], gO = { class: "library-empty-actions" }, mO = ["href"], bO = {
  key: 5,
  class: "library-select-visible"
}, yO = ["checked"], _O = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, wO = { class: "library-item-selection" }, SO = ["checked", "aria-label", "onChange"], CO = { class: "library-catalogue-list-main" }, TO = ["onClick"], EO = {
  class: "library-bidi-human",
  dir: "auto"
}, AO = {
  key: 0,
  class: "library-muted"
}, kO = {
  class: "library-bidi-human",
  dir: "auto"
}, OO = { class: "library-catalogue-list-metadata" }, xO = { key: 0 }, NO = {
  class: "library-bidi-human",
  dir: "auto"
}, LO = { key: 1 }, RO = { key: 2 }, IO = ["dir"], PO = { key: 3 }, $O = {
  class: "library-bidi-human",
  dir: "auto"
}, DO = { class: "library-catalogue-list-actions" }, MO = ["href"], FO = ["onClick"], zO = { class: "library-item-selection" }, UO = ["checked", "aria-label", "onChange"], BO = ["aria-labelledby", "aria-expanded", "onClick"], jO = ["id"], HO = { class: "library-cover-frame" }, VO = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, GO = ["src", "onLoad", "onError"], KO = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, WO = ["action", "onSubmit"], qO = ["value"], YO = ["value"], XO = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], ZO = ["data-library-star-error"], JO = { class: "library-cover-summary" }, QO = { class: "library-cover-primary" }, ex = ["id"], tx = ["onClick"], nx = {
  class: "library-bidi-human",
  dir: "auto"
}, ix = {
  key: 0,
  class: "library-cover-creator"
}, ax = {
  class: "library-bidi-human",
  dir: "auto"
}, rx = {
  key: 1,
  class: "library-cover-badges"
}, sx = {
  key: 0,
  class: "library-cover-badge"
}, ox = {
  class: "library-bidi-machine",
  dir: "ltr"
}, lx = {
  key: 1,
  class: "library-cover-context"
}, cx = {
  class: "library-bidi-human",
  dir: "auto"
}, ux = { class: "library-cover-primary-actions" }, dx = ["href"], fx = ["aria-label"], hx = { class: "library-pagination-range" }, px = { key: 0 }, vx = ["href"], gx = {
  key: 1,
  class: "library-muted"
}, mx = ["href"], bx = {
  key: 3,
  class: "library-muted"
}, yx = { class: "library-sidebar-content" }, _x = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, wx = ["role"], Sx = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, Cx = { class: "library-sidebar-publication-header" }, Tx = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, Ex = ["src"], Ax = { class: "library-sidebar-publication-summary" }, kx = { class: "library-muted library-catalogue-eyebrow" }, Ox = {
  class: "library-bidi-human",
  dir: "auto"
}, xx = { key: 0 }, Nx = {
  class: "library-bidi-machine",
  dir: "ltr"
}, Lx = { class: "library-detail-drawer-actions" }, Rx = ["href"], Ix = ["aria-label"], Px = ["aria-current", "onClick"], $x = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, Dx = { id: "library-sidebar-overview-heading" }, Mx = {
  key: 0,
  class: "library-sidebar-description"
}, Fx = {
  class: "library-bidi-human",
  dir: "auto"
}, zx = { class: "library-detail-drawer-facts" }, Ux = { key: 0 }, Bx = { key: 1 }, jx = { key: 2 }, Hx = { key: 3 }, Vx = { key: 4 }, Gx = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, Kx = { id: "library-sidebar-metadata-heading" }, Wx = ["placeholder"], qx = ["onUpdate:modelValue", "aria-label", "placeholder"], Yx = ["onUpdate:modelValue", "aria-label"], Xx = ["onClick"], Zx = { class: "library-muted" }, Jx = {
  key: 0,
  role: "alert"
}, Qx = {
  key: 1,
  role: "status"
}, eN = ["disabled"], tN = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, nN = { id: "library-sidebar-suggestions-heading" }, iN = { class: "library-muted" }, aN = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, rN = { id: "library-sidebar-activity-heading" }, sN = { class: "library-detail-drawer-facts" }, oN = { key: 0 }, lN = { key: 1 }, cN = { key: 2 }, uN = { dir: "ltr" }, dN = ["aria-label"], fN = ["disabled"], hN = ["disabled"], pN = 20, vN = "/apps/library", gN = 2147483647, mN = {
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
    function r(v, g) {
      return Object.prototype.hasOwnProperty.call(a, v) && String(g ?? "").trim() === a[v];
    }
    function s(v) {
      const g = new URLSearchParams(v);
      for (const d of Object.keys(a)) {
        const U = [...new Set([...g.keys()].filter((Oe) => Oe === d || Oe.startsWith(`${d}[`)))], re = U.reduce((Oe, Re) => Oe + g.getAll(Re).length, 0);
        if (re > 1 || U.some((Oe) => Oe !== d)) {
          for (const Oe of U) g.delete(Oe);
          continue;
        }
        d !== "status" && re === 1 && !r(d, g.get(d)) && g.delete(d);
      }
      return g;
    }
    function o(v) {
      return Object.keys(a).some((g) => v.getAll(g).length === 1 && r(g, v.get(g)));
    }
    function l(v) {
      return Object.fromEntries(Object.entries(v || {}).filter(([g, d]) => g === "status" || !Object.prototype.hasOwnProperty.call(a, g) || r(g, d)));
    }
    const f = /* @__PURE__ */ Dt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), u = /* @__PURE__ */ Dt((f.items || []).map((v) => ({ ...v }))), h = K(() => u), S = K(() => f.shelves || []), E = K(() => f.formats || []), x = K(() => f.publicationTypes?.length ? f.publicationTypes : n), A = K(() => f.publications || []), O = K(() => f.publicationIssueContext || null), D = K(() => f.scanStatuses || []), M = K(() => f.workflowStatuses || []), W = K(() => f.classifications || []), I = K(() => f.cataloguePagination || {
      page: 1,
      limit: 100,
      total: h.value.length,
      visible: h.value.length,
      from: h.value.length > 0 ? 1 : 0,
      to: h.value.length,
      previousUrl: "",
      nextUrl: ""
    }), P = /* @__PURE__ */ Dt({
      q: f.activeFilters?.q || "",
      view: f.activeFilters?.view || "compact",
      type: f.activeFilters?.type || "",
      publisher: f.activeFilters?.publisher || "",
      publication: f.activeFilters?.publication || "",
      year: f.activeFilters?.year || "",
      creator: f.activeFilters?.creator || "",
      format: f.activeFilters?.format || "",
      tag: f.activeFilters?.tag || "",
      shelf: f.activeFilters?.shelf || "",
      folder: f.activeFilters?.folder || "",
      status: f.activeFilters?.status || "",
      workflowStatus: f.activeFilters?.workflowStatus || "",
      subject: f.activeFilters?.subject || "",
      classification: f.activeFilters?.classification || "",
      scannerConflicts: f.activeFilters?.scannerConflicts || "",
      starred: f.activeFilters?.starred || "",
      needsMetadata: f.activeFilters?.needsMetadata || "",
      coverReview: f.activeFilters?.coverReview || "",
      noCreator: f.activeFilters?.noCreator || "",
      noPublication: f.activeFilters?.noPublication || "",
      noDate: f.activeFilters?.noDate || "",
      titleFromFilename: f.activeFilters?.titleFromFilename || "",
      noDescription: f.activeFilters?.noDescription || "",
      unsupportedContainer: f.activeFilters?.unsupportedContainer || "",
      weakMetadata: f.activeFilters?.weakMetadata || "",
      unreviewedImports: f.activeFilters?.unreviewedImports || "",
      sort: f.activeFilters?.sort || "title"
    });
    for (const v of Object.keys(a))
      v !== "status" && (r(v, P[v]) || (P[v] = ""));
    const ce = /* @__PURE__ */ Pe(P.publication), Q = /* @__PURE__ */ Pe(P.q), ue = /* @__PURE__ */ Pe(!1), Y = /* @__PURE__ */ Pe(null), se = K(() => {
      const v = ce.value.trim().toLocaleLowerCase();
      return (v !== "" && Y.value !== null ? Y.value : A.value).filter((d) => v === "" || d.toLocaleLowerCase().includes(v)).slice(0, pN);
    });
    rt(() => P.publication, (v) => {
      ce.value = v || "";
    }), rt(() => P.q, (v) => {
      Q.value = v || "";
    });
    let ge = null, ee = null, ie = 0;
    rt(ce, (v) => {
      window.clearTimeout(ge), ee?.abort(), ee = null, Y.value = null;
      const g = String(v || "").trim();
      if (g === "") return;
      const d = ++ie;
      ge = window.setTimeout(() => {
        _v(g, d);
      }, 200);
    });
    const $ = /* @__PURE__ */ Pe(P.publisher), F = /* @__PURE__ */ Pe(!1), X = /* @__PURE__ */ Pe(null), ae = K(() => X.value || []);
    rt(() => P.publisher, (v) => {
      $.value = v || "";
    });
    let ne = null, pe = null, ve = 0;
    rt($, (v) => {
      window.clearTimeout(ne), pe?.abort(), pe = null, X.value = null;
      const g = String(v || "").trim();
      if (g === "") return;
      const d = ++ve;
      ne = window.setTimeout(() => {
        mv(g, d);
      }, 200);
    });
    const ye = /* @__PURE__ */ Pe(P.creator), me = /* @__PURE__ */ Pe(!1), Ge = /* @__PURE__ */ Pe(null), Ae = K(() => Ge.value || []);
    rt(() => P.creator, (v) => {
      ye.value = v || "";
    });
    let st = null, ct = null, ft = 0;
    rt(ye, (v) => {
      window.clearTimeout(st), ct?.abort(), ct = null, Ge.value = null;
      const g = String(v || "").trim();
      if (g === "") return;
      const d = ++ft;
      st = window.setTimeout(() => {
        gv(g, d);
      }, 200);
    });
    const ut = /* @__PURE__ */ Pe(P.subject), Ze = /* @__PURE__ */ Pe(!1), qt = /* @__PURE__ */ Pe(null), B = K(() => qt.value || []);
    rt(() => P.subject, (v) => {
      ut.value = v || "";
    });
    let m = null, C = null, k = 0;
    rt(ut, (v) => {
      window.clearTimeout(m), C?.abort(), C = null, qt.value = null;
      const g = String(v || "").trim();
      if (g.length < 2) return;
      const d = ++k;
      m = window.setTimeout(() => {
        bv(g, d);
      }, 200);
    });
    const L = /* @__PURE__ */ Pe(P.year), N = /* @__PURE__ */ Pe(!1), z = /* @__PURE__ */ Pe(null), q = K(() => z.value || []);
    rt(() => P.year, (v) => {
      L.value = v || "";
    });
    let V = null, Z = null, H = 0;
    rt(L, (v) => {
      window.clearTimeout(V), Z?.abort(), Z = null, z.value = null;
      const g = String(v || "").trim();
      if (g === "") return;
      const d = ++H;
      V = window.setTimeout(() => {
        yv(g, d);
      }, 200);
    });
    const _e = Object.fromEntries(Object.keys(P).map((v) => [v, v === "sort" ? "title" : v === "view" ? "compact" : ""])), le = window.location.pathname.indexOf(vN), fe = le >= 0 ? window.location.pathname.slice(0, le) : "", we = {
      catalogue: `${fe}/apps/library/`,
      review: `${fe}/apps/library/?scannerConflicts=1`,
      settings: `${fe}/settings/user/library`
    };
    function Ne(v, g) {
      if (typeof v != "string" || v === "") return g;
      try {
        const d = fe ? `${fe}/` : "/";
        let U = v;
        for (let re = 0; re < 5; re += 1) {
          if (!U.startsWith("/") || U.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(U)) return g;
          const Oe = new URL(U, window.location.origin);
          if (Oe.origin !== window.location.origin || !Oe.pathname.startsWith(d)) return g;
          const Re = U.split(/[?#]/, 1)[0];
          for (const nn of Re.split("/")) {
            let Ei = nn;
            for (let Ia = 0; Ia < 5; Ia += 1) {
              const $n = decodeURIComponent(Ei);
              if (/[\\/\u0000-\u001f\u007f]/.test($n) || $n === "." || $n === "..") return g;
              if ($n === Ei) break;
              if (Ei = $n, Ia === 4) return g;
            }
          }
          const lt = decodeURI(U);
          if (lt === U) return v;
          U = lt;
        }
        return g;
      } catch {
        return g;
      }
    }
    const $e = K(() => Ne(f.settingsUrl, we.settings)), Ee = K(() => Ne(f.catalogueRootUrl, we.catalogue)), Qe = K(() => Ne(f.homeUrl, `${we.catalogue}?home=1`)), nt = K(() => Ne(f.shelvesUrl, `${we.catalogue}?shelves=1`)), Tt = K(() => Ne(f.reviewUrl || f.scannerConflictReviewUrl, we.review)), yt = K(() => Object.entries(a).some(([v, g]) => P[v] === g)), Ht = K(() => i.reduce((v, g) => v + Number(Il.value[g.countKey] || 0), 0)), en = K(() => f.surface === "home"), ot = K(() => f.surface === "shelves"), Vt = K(() => !en.value && !ot.value && !yt.value && !P.starred && P.sort !== "lastOpened" && !P.shelf), Gi = K(() => [
      { key: "home", name: y("library", "Home"), href: Qe.value, active: en.value },
      { key: "all", name: y("library", "All publications"), href: Ee.value, active: Vt.value },
      { key: "starred", name: y("library", "Starred"), href: `${Ee.value}?starred=1`, active: P.starred === "1" },
      { key: "continue", name: y("library", "Continue reading"), href: `${Ee.value}?sort=lastOpened`, active: P.sort === "lastOpened" },
      { key: "shelves", name: y("library", "Shelves"), href: nt.value, active: ot.value || !!P.shelf },
      { key: "collections", name: y("library", "Collections"), href: `${Ee.value}#library-collections`, active: !1 }
    ]), Rt = K(() => f.requestToken || ""), Sa = K(() => f.catalogueEndpointUrl || "/apps/library/catalogue"), Ja = K(() => f.shelfChildrenUrl || "/apps/library/shelves/children"), mi = K(() => f.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), bi = K(() => f.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), _s = K(() => f.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), ws = K(() => f.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Ss = K(() => f.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Cs = K(() => f.itemSidebarUrlTemplate || `${fe}/apps/library/items/__ITEM_ID__/sidebar`), Ts = K(() => f.batchTagUrl || "/apps/library/bulk/tags"), Ca = K(() => f.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Ta = K(() => f.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), dn = K(() => f.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), yi = K(() => f.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Ea = K(() => f.scannerConflictReviewUrl || "?scannerConflicts=1");
    f.importHealthSummary, f.importHealthSummary && Object.keys(f.importHealthSummary).length > 0;
    const Ki = K(() => f.discoveryPage === "publication"), Qa = K(() => f.discoveryPage === "year"), Aa = K(() => f.discoveryPage === "creator"), Wi = K(() => Ki.value || Qa.value || Aa.value), er = K(() => f.discoveryTitle || P.publication || P.year || P.creator || ""), tr = K(() => Wi.value ? er.value : y("library", "Library")), Es = K(() => Aa.value ? y("library", "Creator") : Qa.value ? y("library", "Publication year") : y("library", "Publication / series")), _i = K(() => Number(f.rootCount || 0)), Al = K(() => Number(f.enabledRootCount || 0)), nr = K(() => _i.value === 0), it = K(() => _i.value > 0 && Al.value === 0), Kn = K(() => qi.value.length > 0), As = {
      q: "Search",
      sort: "Sort",
      view: "View mode",
      type: "Type",
      publisher: "Publisher",
      publication: "Series / periodical",
      year: "Publication year",
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
      weakMetadata: "Needs details",
      unreviewedImports: "Unreviewed imports"
    }, ir = K(() => {
      if (typeof window > "u") return "";
      const v = new URLSearchParams(window.location.search);
      if (v.get("batchMetadataApplyResult") !== "1") return "";
      const g = v.get("batchMetadataField") || "field", d = v.get("batchMetadataApplied") || "0", U = v.get("batchMetadataUnchanged") || "0", re = v.get("batchMetadataSkipped") || "0";
      return y("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: d, field: g, unchanged: U, skipped: re });
    }), ka = K(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? y("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), ar = K(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? y("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), rr = K(() => f.savedCollections || []), kl = K(() => f.savedCollectionSaveUrl || "/apps/library/collections"), Ol = K(() => f.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), ks = ["compact", "gallery", "list", "shelf"], Yt = K(() => ks.includes(P.view) ? P.view : "compact"), Ln = K(() => ({
      "library-cover-gallery--compact": Yt.value === "compact",
      "library-cover-gallery--gallery": Yt.value === "gallery",
      "library-cover-gallery--shelf": Yt.value === "shelf"
    })), qi = K(() => Object.entries(As).map(([v, g]) => ({ key: v, label: y("library", g), value: P[v] || "" })).filter((v) => String(v.value).trim() !== "" && !(v.key === "sort" && v.value === "title") && !(v.key === "view" && v.value === "compact"))), Oa = /* @__PURE__ */ new Set([
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
      "status",
      "workflowStatus",
      "subject",
      "classification",
      "scannerConflicts"
    ]), Wn = K(() => Object.entries(l(P)).filter(([v, g]) => !Oa.has(v) && String(g || "").trim() !== "").map(([v, g]) => ({ key: v, value: g }))), xl = K(() => Object.entries(P).filter(([v, g]) => !["q", "sort", "starred"].includes(v) && String(g || "").trim() !== "").map(([v, g]) => ({ key: v, value: g }))), qn = K(() => Object.entries(l(P)).filter(([v, g]) => String(g || "").trim() !== "").map(([v, g]) => ({ key: v, value: g }))), Os = K(() => qn.value.filter(({ key: v, value: g }) => v !== "q" && !(v === "sort" && g === "title"))), sr = /* @__PURE__ */ Dt({}), Yi = K(() => f.homeRows || { continueReading: [], recentlyAdded: [] }), or = K(() => f.homeShelves || []), Xi = K(() => f.shelfTree || []), Zi = K(() => f.needsAttention || { count: 0, url: `${Ee.value}?needsMetadata=1` }), It = /* @__PURE__ */ Pe([]), Cn = K(() => new Set(It.value));
    function wi(v, g) {
      const d = new Set(It.value);
      g ? d.add(Number(v)) : d.delete(Number(v)), It.value = [...d];
    }
    function fn(v) {
      It.value = v.currentTarget.checked ? h.value.map((g) => Number(g.id)) : [];
    }
    function Nl() {
      const v = new Set(h.value.map((g) => Number(g.id)));
      It.value = It.value.filter((g) => v.has(g));
    }
    function xa(v) {
      const g = v.target;
      if (g instanceof HTMLFormElement) {
        g.querySelectorAll("input[data-library-selected-id]").forEach((d) => d.remove());
        for (const d of It.value) {
          const U = document.createElement("input");
          U.type = "hidden", U.name = "itemIds[]", U.value = String(d), U.dataset.librarySelectedId = "1", g.appendChild(U);
        }
      }
    }
    const ke = /* @__PURE__ */ Pe(null), Rn = /* @__PURE__ */ Pe(null), _t = /* @__PURE__ */ Dt({ loading: !1, error: "", missing: !1 }), In = /* @__PURE__ */ Pe("overview"), Xt = /* @__PURE__ */ Dt({ saving: !1, saved: !1, error: "" }), wt = /* @__PURE__ */ Dt({ title: "", publicationDate: "", identifiers: [] }), lr = /* @__PURE__ */ Pe(null), Yn = /* @__PURE__ */ Pe(null), Xn = /* @__PURE__ */ Pe(!1);
    let Na = null, Zt = null, Si = null, J = !1, w = null, R = 0;
    const G = K(() => Rn.value !== null), oe = K(() => ke.value ? h.value.findIndex((v) => v.id === ke.value.id) : -1), he = K(() => oe.value > 0 ? h.value[oe.value - 1] : null), Ce = K(() => oe.value >= 0 && oe.value < h.value.length - 1 ? h.value[oe.value + 1] : null), Je = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], at = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function gt(v) {
      const g = String(v ?? "").trim(), d = g.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return d ? d[1] : g;
    }
    function Et(v) {
      return { ...v, publicationDate: gt(v?.publicationDate) };
    }
    function La(v) {
      wt.title = String(v?.title || ""), wt.publicationDate = gt(v?.publicationDate), wt.identifiers = Array.isArray(v?.identifiers) ? v.identifiers.map((g) => ({ scheme: String(g?.scheme || ""), displayValue: String(g?.displayValue || g?.value || "") })) : [], Object.assign(Xt, { saving: !1, saved: !1, error: "" });
    }
    function At() {
      wt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function dv(v) {
      wt.identifiers.splice(v, 1);
    }
    async function fv() {
      const v = ke.value;
      if (!v?.updateUrl || Xt.saving) return;
      Object.assign(Xt, { saving: !0, saved: !1, error: "" });
      const g = new FormData();
      g.set("requesttoken", Rt.value), g.set("metadataAutosave", "1");
      for (const d of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const U = v[d];
        g.set(d, Array.isArray(U) ? U.join(", ") : String(U ?? ""));
      }
      g.set("title", wt.title), g.set("publicationDate", gt(wt.publicationDate)), wt.identifiers.forEach((d, U) => {
        g.set(`identifiers[${U}][scheme]`, d.scheme), g.set(`identifiers[${U}][displayValue]`, d.displayValue);
      });
      try {
        const d = await fetch(v.updateUrl, { method: "POST", body: g, credentials: "same-origin", headers: { Accept: "application/json" } }), U = await d.json().catch(() => ({}));
        if (!d.ok || U.saved !== !0) throw new Error(U.error || y("library", "Metadata could not be saved."));
        v.title = wt.title.trim(), v.publicationDate = gt(wt.publicationDate), v.identifiers = wt.identifiers.filter((Oe) => Oe.scheme.trim() || Oe.displayValue.trim()).map((Oe) => ({ ...Oe }));
        const re = h.value.find((Oe) => Number(Oe.id) === Number(v.id));
        re && (re.title = v.title, re.publicationDate = v.publicationDate), Xt.saved = !0;
      } catch (d) {
        Xt.error = d?.message || y("library", "Metadata could not be saved.");
      } finally {
        Xt.saving = !1;
      }
    }
    const Ci = K(() => {
      const v = r("scannerConflicts", P.scannerConflicts) || r("weakMetadata", P.weakMetadata), g = v ? h.value.find((d) => xs(d).length > 0) : null;
      return {
        enabled: v,
        item: g,
        fields: g ? xs(g) : [],
        reviewNextUrl: Ea.value,
        skipUrl: I.value.nextUrl || Ea.value
      };
    }), hv = K(() => i.map((v) => ({
      ...v,
      label: y("library", v.label),
      href: `${Ee.value}?${encodeURIComponent(v.key)}=${encodeURIComponent(v.value)}`,
      active: String(P[v.key] || "") === v.value
    })));
    function Ll(v) {
      return Array.isArray(v) ? JSON.stringify(v) : v == null ? "" : String(v);
    }
    function xs(v) {
      const g = v.fieldValues || {}, d = v.fieldSources || {};
      return Je.filter((U) => Object.prototype.hasOwnProperty.call(g, U)).map((U) => {
        const re = Ll(v[U]), Oe = Ll(g[U]), Re = Ll(d[U] || v.metadataSource || "scanner"), lt = Re.includes("filename") || Re.includes("path") ? Oe : "", nn = Re.includes("sidecar") ? Oe : "";
        return { field: U, currentValue: re, scannerCandidate: Oe, pathTemplateCandidate: lt, sidecarValue: nn, sourceProvenance: Re, differs: re !== Oe };
      }).filter((U) => U.differs);
    }
    let Ji = 0, Qi = null;
    function $u() {
      const v = new URLSearchParams(window.location.search).getAll("item");
      if (v.length !== 1 || !/^[1-9][0-9]*$/.test(v[0])) return null;
      const g = Number(v[0]);
      return Number.isSafeInteger(g) && g <= gN ? g : null;
    }
    function Du(v, g = "push") {
      const d = new URL(window.location.href);
      d.searchParams.delete("item"), v !== null && d.searchParams.set("item", String(v)), history[`${g}State`]({}, "", `${d.pathname}${d.search}${d.hash}`);
    }
    async function cr(v, { historyMode: g = "push", seed: d = null } = {}) {
      Qi?.abort();
      const U = ++Ji, re = new AbortController();
      Qi = re, Rn.value = v, In.value = "overview", ke.value = d && Number(d.id) === v ? Et(d) : null, ke.value && La(ke.value), Object.assign(_t, { loading: !0, error: "", missing: !1 }), g !== "none" && Du(v, g);
      try {
        const Oe = Cs.value.replace("__ITEM_ID__", encodeURIComponent(String(v))), Re = await fetch(Oe, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: re.signal });
        if (U !== Ji) return;
        if (!Re.ok) {
          ke.value = null, _t.missing = Re.status === 404, _t.error = Re.status === 404 ? y("library", "This publication is unavailable or you do not have access.") : y("library", "Could not load publication details. Try again.");
          return;
        }
        const lt = await Re.json();
        if (U !== Ji) return;
        if (typeof lt?.item?.id != "number" || !Number.isSafeInteger(lt.item.id) || lt.item.id !== v) {
          ke.value = null, _t.missing = !1, _t.error = y("library", "Could not load publication details. Try again.");
          return;
        }
        ke.value = Et(lt.item), La(ke.value), await on();
      } catch (Oe) {
        U === Ji && Oe?.name !== "AbortError" && (ke.value = null, _t.missing = !1, _t.error = y("library", "Could not load publication details. Try again."));
      } finally {
        U === Ji && (_t.loading = !1, Qi = null);
      }
    }
    function Pn(v, g) {
      Rl(), Na = g?.currentTarget instanceof HTMLElement ? g.currentTarget : null, cr(Number(v.id), { seed: v });
    }
    function Ns({ historyMode: v = "push", restoreFocus: g = !0 } = {}) {
      Si = g ? Na : null, Na = null, Qi?.abort(), Qi = null, Ji += 1, Rn.value = null, ke.value = null, In.value = "overview", Object.assign(_t, { loading: !1, error: "", missing: !1 }), v !== "none" && Du(null, v);
    }
    function Mu() {
      Xn.value ? (Yn.value?.$refs?.sidebar || Yn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : lr.value?.focus();
    }
    function pv() {
      const v = Si;
      if (Si = null, Rl(), J || !v?.isConnected) return;
      const g = R;
      w = window.requestAnimationFrame(() => {
        w = null, !(g !== R || J || G.value || !v.isConnected) && v.focus();
      });
    }
    function Rl() {
      R += 1, w !== null && (window.cancelAnimationFrame(w), w = null);
    }
    function ur(v = Zt) {
      Xn.value = !!v?.matches, G.value && on(Mu);
    }
    function Ls(v) {
      v && cr(Number(v.id), { seed: v });
    }
    const dr = /* @__PURE__ */ Pe(null);
    let tn = 0, Ra = null, Rs = null, fr = null;
    const Tn = /* @__PURE__ */ Dt({ loading: !1, error: "" });
    function vv(v) {
      const g = s(new FormData(v));
      g.delete("publicationSearch"), g.delete("creatorSearch"), g.delete("subjectSearch"), g.delete("publisherSearch"), g.delete("yearSearch");
      for (const d of Array.from(g.keys()))
        String(g.get(d) || "").trim() === "" && g.delete(d);
      return g.delete("page"), g.get("view") === "compact" && g.delete("view"), g;
    }
    async function Is(v, g, d) {
      const U = new URLSearchParams();
      for (const [Re, lt] of Object.entries(P)) {
        const nn = String(lt || "").trim();
        Re !== v && nn !== "" && !(Re === "sort" && nn === "title") && !(Re === "view" && nn === "compact") && U.set(Re, nn);
      }
      U.set(`${v}Search`, g);
      const re = new AbortController();
      v === "creator" ? ct = re : v === "publisher" ? pe = re : v === "subject" ? C = re : Z = re;
      const Oe = v === "creator" ? bi.value : v === "publisher" ? _s.value : v === "subject" ? ws.value : Ss.value;
      try {
        const Re = await fetch(`${Oe}?${U}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: re.signal });
        if (!Re.ok) throw new Error(`${v} suggestions request failed: ${Re.status}`);
        const lt = await Re.json(), nn = v === "creator" ? ft : v === "publisher" ? ve : v === "subject" ? k : H, Ei = v === "creator" ? ye.value : v === "publisher" ? $.value : v === "subject" ? ut.value : L.value;
        d === nn && Ei.trim() === g && (v === "creator" ? Ge.value = Array.isArray(lt.creators) ? lt.creators : [] : v === "publisher" ? X.value = Array.isArray(lt.publishers) ? lt.publishers : [] : v === "subject" ? qt.value = Array.isArray(lt.subjects) ? lt.subjects : [] : z.value = Array.isArray(lt.years) ? lt.years : []);
      } catch (Re) {
        Re?.name !== "AbortError" && (v === "creator" && d === ft && (Ge.value = null), v === "publisher" && d === ve && (X.value = null), v === "subject" && d === k && (qt.value = null), v === "year" && d === H && (z.value = null));
      }
    }
    function gv(v, g) {
      return Is("creator", v, g);
    }
    function mv(v, g) {
      return Is("publisher", v, g);
    }
    function bv(v, g) {
      return Is("subject", v, g);
    }
    function yv(v, g) {
      return Is("year", v, g);
    }
    async function _v(v, g) {
      const d = new URLSearchParams();
      for (const [re, Oe] of Object.entries(P)) {
        const Re = String(Oe || "").trim();
        re !== "publication" && Re !== "" && !(re === "sort" && Re === "title") && !(re === "view" && Re === "compact") && d.set(re, Re);
      }
      d.set("publicationSearch", v);
      const U = new AbortController();
      ee = U;
      try {
        const re = await fetch(`${mi.value}?${d}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: U.signal
        });
        if (!re.ok) throw new Error(`Publication suggestions request failed: ${re.status}`);
        const Oe = await re.json();
        g === ie && ce.value.trim() === v && (Y.value = Array.isArray(Oe.publications) ? Oe.publications : []);
      } catch (re) {
        re?.name !== "AbortError" && g === ie && (Y.value = null);
      } finally {
        g === ie && (ee = null);
      }
    }
    function wv(v) {
      u.splice(0, u.length, ...(v.items || []).map((d) => ({ ...d }))), Nl();
      const g = new Set(v.facetsDeferred ? [
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
      for (const d of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "publisherSuggestionsUrl", "subjectSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "smartViewCountsPending", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        !g.has(d) && Object.prototype.hasOwnProperty.call(v, d) && (f[d] = v[d]);
      Object.assign(P, _e, v.activeFilters || {});
    }
    async function Sv() {
      if (f.surface !== "index") return;
      const v = tn, g = JSON.stringify({ ...P }), d = new URLSearchParams();
      d.set("hydrate", "1");
      for (const [re, Oe] of Object.entries(P)) {
        const Re = String(Oe || "").trim();
        Re !== "" && !(re === "sort" && Re === "title") && !(re === "view" && Re === "compact") && d.set(re, Re);
      }
      const U = new AbortController();
      Rs = U;
      try {
        const re = await fetch(`${Sa.value}${d.size ? `?${d}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: U.signal
        });
        if (!re.ok) return;
        const Oe = await re.json();
        if (v !== tn || g !== JSON.stringify({ ...P })) return;
        for (const Re of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Oe, Re) && (f[Re] = Oe[Re]);
      } catch (re) {
        if (re?.name !== "AbortError") return;
      } finally {
        Rs === U && (Rs = null);
      }
    }
    async function hn(v, g = null) {
      const d = v?.currentTarget?.tagName === "FORM" ? v.currentTarget : v?.currentTarget?.form;
      if (!d && !g?.params) return;
      const U = s(g?.params ?? vv(d));
      if (en.value || ot.value) {
        hr(U, Ee.value);
        return;
      }
      const re = U.toString(), Oe = re ? `?${re}` : "", Re = g?.generation ?? ++tn, lt = o(U), nn = g?.historyMode ?? (lt ? "push" : "replace"), Ei = g?.historyTraversal === !0;
      if (Re !== tn) return;
      g === null && Ra?.abort();
      const Ia = new AbortController();
      Ra = Ia, Tn.loading = !0, Tn.error = "";
      try {
        const $n = await fetch(Sa.value + Oe, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ia.signal
        });
        if (Re !== tn) return;
        if (!$n.ok) {
          Ei ? hr(U) : lt ? Tn.error = y("library", "Could not load this review queue. Try again.") : hr(U);
          return;
        }
        const Wv = await $n.json();
        if (Re !== tn) return;
        wv(Wv), nn !== "none" && (history[nn === "push" ? "pushState" : "replaceState"]({}, "", re ? `?${re}` : window.location.pathname), G.value && Ns({ historyMode: "none" }));
      } catch ($n) {
        Re === tn && $n?.name !== "AbortError" && (Ei ? hr(U) : lt ? Tn.error = y("library", "Could not load this review queue. Try again.") : hr(U));
      } finally {
        Re === tn && (Ra = null, Tn.loading = !1);
      }
    }
    function Fu() {
      Ra?.abort();
      const v = new URLSearchParams(window.location.search), g = $u();
      v.has("item") && g === null && (v.delete("item"), history.replaceState({}, "", `${window.location.pathname}${v.toString() ? `?${v}` : ""}${window.location.hash}`)), g === null ? Ns({ historyMode: "none" }) : cr(g, { historyMode: "none", seed: h.value.find((d) => Number(d.id) === g) || null }), v.delete("item"), hn(null, {
        params: s(v),
        generation: ++tn,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function hr(v, g = window.location.pathname) {
      const d = document.createElement("form");
      d.method = "get", d.action = g, d.hidden = !0;
      for (const [U, re] of v.entries()) {
        const Oe = document.createElement("input");
        Oe.type = "hidden", Oe.name = U, Oe.value = re, d.appendChild(Oe);
      }
      document.body.appendChild(d), d.submit(), d.remove();
    }
    function Ti(v, g = null, d = null) {
      if (g === null) {
        hn(v);
        return;
      }
      hn({ currentTarget: v }, { params: g, generation: d });
    }
    async function Cv(v, g = ce.value) {
      P.publication = String(g || "").trim(), ce.value = P.publication, ue.value = !1, await on(), hn({ currentTarget: v });
    }
    function Tv(v, g) {
      Cv(g.currentTarget.form, v);
    }
    async function Ev(v) {
      P.q = String(Q.value || "").trim(), P.publication = String(ce.value || "").trim(), P.publisher = String($.value || "").trim(), P.creator = String(ye.value || "").trim(), P.subject = String(ut.value || "").trim(), P.year = String(L.value || "").trim(), ue.value = !1, F.value = !1, me.value = !1, Ze.value = !1, N.value = !1, await on(), hn({ currentTarget: v });
    }
    async function Ps(v, g, d) {
      P[g] = String(d || "").trim(), g === "creator" ? (ye.value = P.creator, me.value = !1) : g === "publisher" ? ($.value = P.publisher, F.value = !1) : g === "subject" ? (ut.value = P.subject, Ze.value = !1) : (L.value = P.year, N.value = !1), await on(), hn({ currentTarget: v });
    }
    function Av(v) {
      Ev(v.currentTarget);
    }
    function kv(v, g) {
      Ps(g.currentTarget.form, "creator", v);
    }
    function Ov(v, g) {
      Ps(g.currentTarget.form, "publisher", v);
    }
    function zu(v, g = ut.value) {
      window.clearTimeout(m), C?.abort(), C = null, Ps(v, "subject", g);
    }
    function xv(v) {
      zu(v.currentTarget.form);
    }
    function Nv(v, g) {
      zu(g.currentTarget.form, v);
    }
    function Lv(v, g) {
      Ps(g.currentTarget.form, "year", v);
    }
    function Uu(v) {
      const g = new URLSearchParams();
      for (const [d, U] of Object.entries(P)) {
        const re = String(U || "").trim();
        re !== "" && d !== v && !(d === "sort" && re === "title") && !(d === "view" && re === "compact") && g.set(d, re);
      }
      return g;
    }
    function Bu(v) {
      const g = Uu(v).toString();
      return en.value || ot.value ? `${Ee.value}${g ? `?${g}` : ""}` : g ? `?${g}` : "?";
    }
    function Rv(v) {
      const g = Uu(v);
      P[v] = v === "sort" ? "title" : v === "view" ? "compact" : "", hn(null, {
        params: g,
        generation: ++tn
      });
    }
    function Iv(v) {
      const g = new URL(v.href, window.location.origin).searchParams;
      hn(null, {
        params: g,
        generation: ++tn
      });
    }
    function Pv() {
      return Bu("q");
    }
    const Il = K(() => f.smartViewCounts || {}), $v = K(() => new Set(f.smartViewCountsPending || []));
    function Dv(v) {
      return $v.value.has(v) || !Object.prototype.hasOwnProperty.call(Il.value, v) ? "—" : Number(Il.value[v] || 0);
    }
    const ju = K(() => {
      const v = {};
      for (const [g, d] of Object.entries(P)) {
        const U = String(d || "").trim();
        U !== "" && !(g === "sort" && U === "title") && (v[g] = U);
      }
      return v;
    }), Mv = K(() => JSON.stringify(ju.value)), Pl = K(() => Object.keys(ju.value).length > 0);
    function $s(v) {
      if (!ks.includes(v)) return;
      P.view = v;
      const g = new URLSearchParams();
      for (const [d, U] of Object.entries(l(P))) {
        const re = String(U || "").trim();
        re !== "" && !(d === "sort" && re === "title") && !(d === "view" && re === "compact") && g.set(d, re);
      }
      g.delete("page"), hn(null, {
        params: g,
        generation: ++tn
      });
    }
    function Fv(v) {
      const g = s(window.location.search);
      for (const U of Object.keys(As))
        g.delete(U);
      g.delete("page");
      for (const [U, re] of Object.entries(v))
        String(re || "").trim() !== "" && g.set(U, String(re));
      const d = g.toString();
      return d ? `?${d}` : "?";
    }
    function zv(v) {
      return Fv(v || {});
    }
    function Uv(v) {
      return Ol.value.replace("__COLLECTION_ID__", encodeURIComponent(String(v || "0")));
    }
    function pr(v) {
      return String(v || "").toUpperCase();
    }
    function vr(v) {
      return sr[v.id] || "loading";
    }
    function Bv(v) {
      sr[v.id] = "loaded";
    }
    function jv(v) {
      sr[v.id] = "error";
    }
    function $l(v) {
      const g = String(v?.publication || "").trim(), d = String(v?.publicationDate || "").trim();
      return g && d ? `${g} · ${d}` : g || d ? g || d : [v?.publicationType, pr(v?.extension)].filter(Boolean).join(" · ");
    }
    function Hv(v) {
      const g = String(v?.tagName || "").toLowerCase();
      return v?.isContentEditable || ["input", "select", "textarea", "button"].includes(g);
    }
    function Vv(v) {
      v.key !== "/" || v.metaKey || v.ctrlKey || v.altKey || v.shiftKey || Hv(v.target) || (v.preventDefault(), dr.value?.focus(), dr.value?.select?.());
    }
    async function Gv(v) {
      v.key !== "Escape" || document.activeElement !== dr.value || P.q === "" || (v.preventDefault(), Q.value = "", P.q = "", await on(), Ti({ currentTarget: dr.value }));
    }
    function Kv(v) {
      if (!G.value || v.metaKey || v.ctrlKey || v.altKey)
        return !1;
      if (v.key === "Escape")
        return v.preventDefault(), Ns(), !0;
      if (v.key === "Tab" && Xn.value) {
        if (Yn.value?.focusTrap) return !1;
        const g = Yn.value?.$refs?.sidebar || Yn.value?.$el || Yn.value, d = [...g?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Oe) => !Oe.hidden && Oe.getAttribute("aria-hidden") !== "true");
        if (d.length === 0) return !1;
        const U = d[0], re = d[d.length - 1];
        if (v.shiftKey && (document.activeElement === U || !g.contains(document.activeElement)))
          return v.preventDefault(), re.focus(), !0;
        if (!v.shiftKey && (document.activeElement === re || !g.contains(document.activeElement)))
          return v.preventDefault(), U.focus(), !0;
      }
      return v.key === "ArrowLeft" && he.value ? (v.preventDefault(), Ls(he.value), !0) : v.key === "ArrowRight" && Ce.value ? (v.preventDefault(), Ls(Ce.value), !0) : !1;
    }
    function Hu(v) {
      Kv(v) || (Vv(v), Gv(v));
    }
    ji(() => {
      window.addEventListener("keydown", Hu), window.addEventListener("popstate", Fu), Zt = window.matchMedia?.("(max-width: 1023px)") || null, ur(), Zt?.addEventListener ? Zt.addEventListener("change", ur) : Zt?.addListener?.(ur);
      const v = new URLSearchParams(window.location.search), g = $u();
      v.has("item") && g === null ? (v.delete("item"), history.replaceState({}, "", `${window.location.pathname}${v.toString() ? `?${v}` : ""}${window.location.hash}`)) : g !== null && cr(g, { historyMode: "none", seed: h.value.find((d) => Number(d.id) === g) || null }), fr = window.requestAnimationFrame(() => {
        fr = null, Sv();
      });
    }), Za(() => {
      J = !0, Rl(), window.removeEventListener("keydown", Hu), window.removeEventListener("popstate", Fu), window.clearTimeout(ge), window.clearTimeout(st), window.clearTimeout(m), window.clearTimeout(V), ee?.abort(), ct?.abort(), C?.abort(), Z?.abort(), tn += 1, fr !== null && window.cancelAnimationFrame(fr), fr = null, Rs?.abort(), Ra?.abort(), Ra = null, Ji += 1, Qi?.abort(), Qi = null, Zt?.removeEventListener ? Zt.removeEventListener("change", ur) : Zt?.removeListener?.(ur), Zt = null, Si = null;
    });
    const gr = /* @__PURE__ */ Dt({}), mr = /* @__PURE__ */ Dt({});
    async function Vu(v, g) {
      const d = g?.currentTarget?.closest?.("form") || g?.currentTarget;
      if (!d || !v?.starUrl || gr[v.id]) return;
      const U = !!v.starred;
      gr[v.id] = !0, mr[v.id] = "", v.starred = !U;
      try {
        (await fetch(v.starUrl, {
          method: "POST",
          body: new FormData(d),
          credentials: "same-origin"
        })).ok || (v.starred = U, mr[v.id] = y("library", "Could not update star. Try again."));
      } catch {
        v.starred = U, mr[v.id] = y("library", "Could not update star. Try again.");
      } finally {
        gr[v.id] = !1;
      }
    }
    return (v, g) => (_(), Fe(b(FC), { "app-name": "library" }, {
      default: xe(() => [
        be(b(y1), {
          "aria-label": b(y)("library", "Library navigation")
        }, {
          list: xe(() => [
            be(b(Np), null, {
              default: xe(() => [
                (_(!0), T(de, null, ze(Gi.value, (d) => (_(), Fe(b(Rf), {
                  key: d.key,
                  active: d.active,
                  href: d.href,
                  name: d.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                be(b(Rf), {
                  active: yt.value,
                  href: Tt.value,
                  name: Ht.value > 0 ? `${b(y)("library", "Review")} (${Ht.value})` : b(y)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: xe(() => [
            c("section", ZC, [
              c("h2", JC, p(b(y)("library", "Filters")), 1),
              c("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": b(y)("library", "Catalogue search and filters"),
                onSubmit: je(Av, ["prevent"])
              }, [
                (_(!0), T(de, null, ze(Wn.value, (d) => (_(), T("input", {
                  key: `sidebar-${d.key}`,
                  type: "hidden",
                  name: d.key,
                  value: d.value
                }, null, 8, eT))), 128)),
                P.sort && P.sort !== "title" ? (_(), T("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: P.sort
                }, null, 8, tT)) : j("", !0),
                P.view && P.view !== "compact" ? (_(), T("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: P.view
                }, null, 8, nT)) : j("", !0),
                c("label", {
                  class: "library-quick-filter-search",
                  title: b(y)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  c("span", null, [
                    Ie(p(b(y)("library", "Search")) + " ", 1),
                    g[47] || (g[47] = c("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  We(c("input", {
                    ref_key: "quickSearchInput",
                    ref: dr,
                    "onUpdate:modelValue": g[0] || (g[0] = (d) => Q.value = d),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: b(y)("library", "Title, creator, description, filename or folder")
                  }, null, 8, aT), [
                    [rn, Q.value]
                  ])
                ], 8, iT),
                c("label", null, [
                  Ie(p(b(y)("library", "Type")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": g[1] || (g[1] = (d) => P.type = d),
                    name: "type",
                    onChange: g[2] || (g[2] = (d) => Ti(d))
                  }, [
                    c("option", rT, p(b(y)("library", "All types")), 1),
                    (_(!0), T(de, null, ze(x.value, (d) => (_(), T("option", {
                      key: d,
                      value: d
                    }, p(d), 9, sT))), 128))
                  ], 544), [
                    [ki, P.type]
                  ])
                ]),
                c("div", oT, [
                  c("label", lT, p(b(y)("library", "Publisher")), 1),
                  We(c("input", {
                    id: "library-publisher-search",
                    "onUpdate:modelValue": g[3] || (g[3] = (d) => $.value = d),
                    type: "search",
                    name: "publisherSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Search publishers"),
                    title: b(y)("library", "Exact publisher matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publisher-suggestions",
                    "aria-expanded": F.value && ae.value.length > 0 ? "true" : "false",
                    onFocus: g[4] || (g[4] = (d) => F.value = !0),
                    onKeydown: g[5] || (g[5] = mt((d) => F.value = !1, ["escape"]))
                  }, null, 40, cT), [
                    [rn, $.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publisher",
                    value: P.publisher
                  }, null, 8, uT),
                  F.value && ae.value.length > 0 ? (_(), T("ul", dT, [
                    (_(!0), T(de, null, ze(ae.value, (d) => (_(), T("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publisher-suggestion",
                        onMousedown: g[6] || (g[6] = je(() => {
                        }, ["prevent"])),
                        onClick: (U) => Ov(d, U)
                      }, p(d), 41, fT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", hT, p(b(y)("library", "Apply publisher")), 1)
                ]),
                c("div", pT, [
                  c("label", vT, p(b(y)("library", "Series / periodical")), 1),
                  We(c("input", {
                    id: "library-publication-search",
                    "onUpdate:modelValue": g[7] || (g[7] = (d) => ce.value = d),
                    type: "search",
                    name: "publicationSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Search series and periodicals"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publication-suggestions",
                    "aria-expanded": ue.value && se.value.length > 0 ? "true" : "false",
                    onFocus: g[8] || (g[8] = (d) => ue.value = !0),
                    onKeydown: g[9] || (g[9] = mt((d) => ue.value = !1, ["escape"]))
                  }, null, 40, gT), [
                    [rn, ce.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "publication",
                    value: P.publication
                  }, null, 8, mT),
                  ue.value && se.value.length > 0 ? (_(), T("ul", bT, [
                    (_(!0), T(de, null, ze(se.value, (d) => (_(), T("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: g[10] || (g[10] = je(() => {
                        }, ["prevent"])),
                        onClick: (U) => Tv(d, U)
                      }, p(d), 41, yT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", _T, p(b(y)("library", "Apply series")), 1)
                ]),
                c("div", wT, [
                  c("label", ST, p(b(y)("library", "Publication year")), 1),
                  We(c("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": g[11] || (g[11] = (d) => L.value = d),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": N.value && q.value.length > 0 ? "true" : "false",
                    onFocus: g[12] || (g[12] = (d) => N.value = !0),
                    onKeydown: g[13] || (g[13] = mt((d) => N.value = !1, ["escape"]))
                  }, null, 40, CT), [
                    [rn, L.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "year",
                    value: P.year
                  }, null, 8, TT),
                  N.value && q.value.length > 0 ? (_(), T("ul", ET, [
                    (_(!0), T(de, null, ze(q.value, (d) => (_(), T("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: g[14] || (g[14] = je(() => {
                        }, ["prevent"])),
                        onClick: (U) => Lv(d, U)
                      }, p(d), 41, AT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", kT, p(b(y)("library", "Apply year")), 1)
                ]),
                c("div", OT, [
                  c("label", xT, p(b(y)("library", "Creator")), 1),
                  We(c("input", {
                    id: "library-creator-search",
                    "onUpdate:modelValue": g[15] || (g[15] = (d) => ye.value = d),
                    type: "search",
                    name: "creatorSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Search creators"),
                    title: b(y)("library", "Exact full-field creator matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-creator-suggestions",
                    "aria-expanded": me.value && Ae.value.length > 0 ? "true" : "false",
                    onFocus: g[16] || (g[16] = (d) => me.value = !0),
                    onKeydown: g[17] || (g[17] = mt((d) => me.value = !1, ["escape"]))
                  }, null, 40, NT), [
                    [rn, ye.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "creator",
                    value: P.creator
                  }, null, 8, LT),
                  me.value && Ae.value.length > 0 ? (_(), T("ul", RT, [
                    (_(!0), T(de, null, ze(Ae.value, (d) => (_(), T("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: g[18] || (g[18] = je(() => {
                        }, ["prevent"])),
                        onClick: (U) => kv(d, U)
                      }, p(d), 41, IT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", PT, p(b(y)("library", "Apply creator")), 1)
                ]),
                c("label", null, [
                  Ie(p(b(y)("library", "Nextcloud tag")), 1),
                  We(c("input", {
                    "onUpdate:modelValue": g[19] || (g[19] = (d) => P.tag = d),
                    type: "text",
                    name: "tag",
                    placeholder: b(y)("library", "photography")
                  }, null, 8, $T), [
                    [rn, P.tag]
                  ])
                ]),
                c("label", null, [
                  Ie(p(b(y)("library", "Format")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": g[20] || (g[20] = (d) => P.format = d),
                    name: "format",
                    onChange: g[21] || (g[21] = (d) => Ti(d))
                  }, [
                    c("option", DT, p(b(y)("library", "All formats")), 1),
                    (_(!0), T(de, null, ze(E.value, (d) => (_(), T("option", {
                      key: d,
                      value: d
                    }, p(pr(d)), 9, MT))), 128))
                  ], 544), [
                    [ki, P.format]
                  ])
                ]),
                c("label", null, [
                  Ie(p(b(y)("library", "Shelf")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": g[22] || (g[22] = (d) => P.shelf = d),
                    name: "shelf",
                    onChange: g[23] || (g[23] = (d) => Ti(d))
                  }, [
                    c("option", FT, p(b(y)("library", "All shelves")), 1),
                    (_(!0), T(de, null, ze(S.value, (d) => (_(), T("option", {
                      key: d,
                      value: d
                    }, p(d), 9, zT))), 128))
                  ], 544), [
                    [ki, P.shelf]
                  ])
                ]),
                c("label", null, [
                  Ie(p(b(y)("library", "Scan status")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": g[24] || (g[24] = (d) => P.status = d),
                    name: "status",
                    onChange: g[25] || (g[25] = (d) => Ti(d))
                  }, [
                    c("option", UT, p(b(y)("library", "All scan statuses")), 1),
                    (_(!0), T(de, null, ze(D.value, (d) => (_(), T("option", {
                      key: d,
                      value: d
                    }, p(d), 9, BT))), 128))
                  ], 544), [
                    [ki, P.status]
                  ])
                ]),
                c("label", null, [
                  Ie(p(b(y)("library", "Workflow status")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": g[26] || (g[26] = (d) => P.workflowStatus = d),
                    name: "workflowStatus",
                    onChange: g[27] || (g[27] = (d) => Ti(d))
                  }, [
                    c("option", jT, p(b(y)("library", "All workflow statuses")), 1),
                    (_(!0), T(de, null, ze(M.value, (d) => (_(), T("option", {
                      key: d,
                      value: d
                    }, p(d), 9, HT))), 128))
                  ], 544), [
                    [ki, P.workflowStatus]
                  ])
                ]),
                c("div", VT, [
                  c("label", GT, p(b(y)("library", "Subject")), 1),
                  We(c("input", {
                    id: "library-subject-search",
                    "onUpdate:modelValue": g[28] || (g[28] = (d) => ut.value = d),
                    type: "search",
                    name: "subjectSearch",
                    autocomplete: "off",
                    placeholder: b(y)("library", "Search subjects"),
                    title: b(y)("library", "Exact subject matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-subject-suggestions",
                    "aria-expanded": Ze.value && B.value.length > 0 ? "true" : "false",
                    onFocus: g[29] || (g[29] = (d) => Ze.value = !0),
                    onKeydown: g[30] || (g[30] = mt((d) => Ze.value = !1, ["escape"]))
                  }, null, 40, KT), [
                    [rn, ut.value]
                  ]),
                  c("input", {
                    type: "hidden",
                    name: "subject",
                    value: P.subject
                  }, null, 8, WT),
                  Ze.value && B.value.length > 0 ? (_(), T("ul", qT, [
                    (_(!0), T(de, null, ze(B.value, (d) => (_(), T("li", {
                      key: d,
                      role: "option"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-subject-suggestion",
                        onMousedown: g[31] || (g[31] = je(() => {
                        }, ["prevent"])),
                        onClick: (U) => Nv(d, U)
                      }, p(d), 41, YT)
                    ]))), 128))
                  ])) : j("", !0),
                  c("button", {
                    type: "button",
                    class: "button secondary library-subject-apply",
                    onClick: xv
                  }, p(b(y)("library", "Apply subject")), 1)
                ]),
                c("label", null, [
                  Ie(p(b(y)("library", "Classification")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": g[32] || (g[32] = (d) => P.classification = d),
                    name: "classification",
                    onChange: g[33] || (g[33] = (d) => Ti(d))
                  }, [
                    c("option", XT, p(b(y)("library", "All classifications")), 1),
                    (_(!0), T(de, null, ze(W.value, (d) => (_(), T("option", {
                      key: d,
                      value: d
                    }, p(d), 9, ZT))), 128))
                  ], 544), [
                    [ki, P.classification]
                  ])
                ]),
                c("label", null, [
                  Ie(p(b(y)("library", "Suggested updates")), 1),
                  We(c("select", {
                    "onUpdate:modelValue": g[34] || (g[34] = (d) => P.scannerConflicts = d),
                    name: "scannerConflicts",
                    onChange: g[35] || (g[35] = (d) => Ti(d))
                  }, [
                    c("option", JT, p(b(y)("library", "All metadata")), 1),
                    c("option", QT, p(b(y)("library", "Suggested updates")), 1)
                  ], 544), [
                    [ki, P.scannerConflicts]
                  ])
                ]),
                c("button", eE, p(b(y)("library", "Apply filters")), 1),
                c("a", tE, p(b(y)("library", "Clear")), 1)
              ], 40, QC)
            ]),
            c("a", {
              class: "library-navigation-settings-link",
              href: $e.value
            }, [
              g[48] || (g[48] = c("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              c("span", null, p(b(y)("library", "Settings")), 1)
            ], 8, nE)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        be(b($_), null, {
          default: xe(() => [
            c("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: f.language || "en",
              dir: f.direction || "ltr",
              tabindex: "-1"
            }, [
              qi.value.length > 0 ? (_(), T("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": b(y)("library", "Active filters")
              }, [
                c("span", null, p(b(y)("library", "Active filters")), 1),
                (_(!0), T(de, null, ze(qi.value, (d) => (_(), T("a", {
                  key: d.key,
                  href: Bu(d.key),
                  class: "library-filter-chip",
                  "aria-label": `${b(y)("library", "Remove filter")}: ${d.label}`,
                  onClick: je((U) => Rv(d.key), ["prevent"])
                }, [
                  c("strong", null, p(d.label) + ":", 1),
                  Ie(" " + p(d.value) + " ", 1),
                  g[49] || (g[49] = c("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, rE))), 128))
              ], 8, aE)) : j("", !0),
              yt.value ? (_(), T("section", sE, [
                c("header", oE, [
                  c("p", lE, p(b(y)("library", "Metadata cleanup")), 1),
                  c("h2", cE, p(b(y)("library", "Review")), 1),
                  c("p", null, p(b(y)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                c("nav", {
                  class: "library-review-queues",
                  "aria-label": b(y)("library", "Review queues")
                }, [
                  (_(!0), T(de, null, ze(hv.value, (d) => (_(), T("a", {
                    key: d.key,
                    class: Te(["library-review-queue-link", { active: d.active }]),
                    href: d.href,
                    "aria-current": d.active ? "page" : void 0,
                    onClick: je((U) => Iv(d), ["prevent"])
                  }, [
                    c("span", null, p(d.label), 1),
                    c("b", null, p(Dv(d.countKey)), 1)
                  ], 10, dE))), 128))
                ], 8, uE),
                c("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": b(y)("library", "Filter current review queue"),
                  onSubmit: je(hn, ["prevent"])
                }, [
                  (_(!0), T(de, null, ze(Os.value, (d) => (_(), T("input", {
                    key: `review-${d.key}`,
                    type: "hidden",
                    name: d.key,
                    value: d.value
                  }, null, 8, hE))), 128)),
                  c("label", null, [
                    Ie(p(b(y)("library", "Search within this queue")), 1),
                    We(c("input", {
                      "onUpdate:modelValue": g[36] || (g[36] = (d) => P.q = d),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [rn, P.q]
                    ])
                  ]),
                  c("button", pE, p(b(y)("library", "Apply")), 1)
                ], 40, fE),
                c("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": Tn.loading ? "true" : "false"
                }, [
                  Tn.loading ? (_(), T("span", gE, p(b(y)("library", "Loading review queue…")), 1)) : j("", !0)
                ], 8, vE),
                Tn.error ? (_(), T("p", mE, p(Tn.error), 1)) : j("", !0),
                Ci.value.enabled ? (_(), T("section", bE, [
                  c("div", yE, [
                    c("p", _E, p(b(y)("library", "Metadata review workbench")), 1),
                    c("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: b(y)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(b(y)("library", "Review next suggestion")), 9, wE)
                  ]),
                  Ci.value.item ? (_(), T("article", SE, [
                    c("header", null, [
                      c("strong", null, [
                        c("bdi", CE, p(Ci.value.item.title), 1)
                      ]),
                      c("span", TE, [
                        c("bdi", EE, p(Ci.value.item.cachedPath), 1)
                      ])
                    ]),
                    c("div", AE, [
                      (_(!0), T(de, null, ze(Ci.value.fields, (d) => (_(), T("article", {
                        key: d.field,
                        class: "library-metadata-review-field"
                      }, [
                        c("h4", null, [
                          c("bdi", kE, p(d.field), 1)
                        ]),
                        c("dl", null, [
                          c("div", null, [
                            c("dt", null, p(b(y)("library", "Current value")), 1),
                            c("dd", null, [
                              c("bdi", OE, p(d.currentValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(b(y)("library", "Suggested value")), 1),
                            c("dd", null, [
                              c("bdi", xE, p(d.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(b(y)("library", "Path-based suggestion")), 1),
                            c("dd", null, [
                              c("bdi", NE, p(d.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(b(y)("library", "Sidecar value")), 1),
                            c("dd", null, [
                              c("bdi", LE, p(d.sidecarValue || "—"), 1)
                            ])
                          ]),
                          c("div", null, [
                            c("dt", null, p(b(y)("library", "Source")), 1),
                            c("dd", null, [
                              c("bdi", RE, p(d.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        c("form", {
                          method: "post",
                          action: Ci.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Rt.value
                          }, null, 8, PE),
                          c("input", {
                            type: "hidden",
                            name: "field",
                            value: d.field
                          }, null, 8, $E),
                          g[50] || (g[50] = c("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          c("button", DE, p(b(y)("library", "Use suggested value")), 1)
                        ], 8, IE)
                      ]))), 128))
                    ]),
                    c("footer", ME, [
                      c("a", {
                        class: "button secondary",
                        href: Ci.value.item.detailsUrl
                      }, p(b(y)("library", "Maintenance")), 9, FE),
                      c("a", {
                        class: "button secondary",
                        href: Ci.value.skipUrl
                      }, p(b(y)("library", "Skip to next suggestion")), 9, zE)
                    ])
                  ])) : j("", !0)
                ])) : j("", !0),
                h.value.length === 0 && !Tn.loading && !Tn.error ? (_(), T("div", UE, [
                  c("h3", null, p(b(y)("library", "This review queue is clear")), 1),
                  c("p", null, p(b(y)("library", "Choose another queue or return to the catalogue.")), 1),
                  c("a", {
                    class: "button primary",
                    href: Ee.value
                  }, p(b(y)("library", "Back to Library")), 9, BE)
                ])) : (_(), T("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": b(y)("library", "Review results")
                }, [
                  (_(!0), T(de, null, ze(h.value, (d) => (_(), T("article", {
                    key: d.id,
                    class: "library-review-result-card"
                  }, [
                    c("div", null, [
                      c("h3", null, [
                        c("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (U) => Pn(d, U)
                        }, [
                          c("bdi", VE, p(d.title), 1)
                        ], 8, HE)
                      ]),
                      d.creators ? (_(), T("p", GE, [
                        c("bdi", KE, p(d.creators), 1)
                      ])) : j("", !0),
                      d.scanError ? (_(), T("p", WE, [
                        c("bdi", qE, p(d.scanError), 1)
                      ])) : j("", !0)
                    ]),
                    c("p", null, [
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (U) => Pn(d, U)
                      }, p(b(y)("library", "Details")), 9, YE),
                      c("a", {
                        class: "button primary",
                        href: d.openUrl
                      }, p(b(y)("library", "Open")), 9, XE)
                    ])
                  ]))), 128))
                ], 8, jE)),
                h.value.length > 0 ? (_(), T("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": b(y)("library", "Review pagination")
                }, [
                  I.value.previousUrl ? (_(), T("a", {
                    key: 0,
                    href: I.value.previousUrl
                  }, p(b(y)("library", "Previous")), 9, JE)) : (_(), T("span", QE, p(b(y)("library", "Previous")), 1)),
                  c("span", null, [
                    Ie(p(b(y)("library", "Page")) + " " + p(I.value.page), 1),
                    I.value.total > 0 ? (_(), T("span", eA, " · " + p(I.value.from) + "–" + p(I.value.to), 1)) : j("", !0)
                  ]),
                  I.value.nextUrl ? (_(), T("a", {
                    key: 2,
                    href: I.value.nextUrl
                  }, p(b(y)("library", "Next")), 9, tA)) : (_(), T("span", nA, p(b(y)("library", "Next")), 1))
                ], 8, ZE)) : j("", !0)
              ])) : en.value ? (_(), T("main", iA, [
                c("header", aA, [
                  c("p", rA, p(b(y)("library", "Your library")), 1),
                  c("h2", sA, p(b(y)("library", "Home")), 1)
                ]),
                c("section", oA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", lA, p(b(y)("library", "Continue reading")), 1),
                      c("p", cA, p(b(y)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    c("a", {
                      href: `${Ee.value}?sort=lastOpened`
                    }, p(b(y)("library", "View all")), 9, uA)
                  ]),
                  Yi.value.continueReading.length ? (_(), T("div", dA, [
                    (_(!0), T(de, null, ze(Yi.value.continueReading, (d) => (_(), T("article", {
                      key: `continue-${d.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (U) => Pn(d, U)
                      }, [
                        c("span", hA, [
                          c("img", {
                            class: "library-cover-image",
                            src: d.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, pA)
                        ])
                      ], 8, fA),
                      c("div", vA, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (U) => Pn(d, U)
                          }, [
                            c("bdi", mA, p(d.title), 1)
                          ], 8, gA)
                        ]),
                        d.creators ? (_(), T("p", bA, [
                          c("bdi", yA, p(d.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: d.openUrl
                        }, p(b(y)("library", "Open")), 9, _A)
                      ])
                    ]))), 128))
                  ])) : (_(), T("p", wA, p(b(y)("library", "Publications you open will appear here.")), 1))
                ]),
                c("section", SA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", CA, p(b(y)("library", "Recently added")), 1),
                      c("p", TA, p(b(y)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    c("a", {
                      href: `${Ee.value}?sort=recent`
                    }, p(b(y)("library", "View all")), 9, EA)
                  ]),
                  Yi.value.recentlyAdded.length ? (_(), T("div", AA, [
                    (_(!0), T(de, null, ze(Yi.value.recentlyAdded, (d) => (_(), T("article", {
                      key: `recent-${d.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      c("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (U) => Pn(d, U)
                      }, [
                        c("span", OA, [
                          c("img", {
                            class: "library-cover-image",
                            src: d.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, xA)
                        ])
                      ], 8, kA),
                      c("div", NA, [
                        c("h4", null, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (U) => Pn(d, U)
                          }, [
                            c("bdi", RA, p(d.title), 1)
                          ], 8, LA)
                        ]),
                        d.creators ? (_(), T("p", IA, [
                          c("bdi", PA, p(d.creators), 1)
                        ])) : j("", !0),
                        c("a", {
                          class: "library-cover-read",
                          href: d.openUrl
                        }, p(b(y)("library", "Open")), 9, $A)
                      ])
                    ]))), 128))
                  ])) : (_(), T("p", DA, p(b(y)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                c("section", MA, [
                  c("header", null, [
                    c("div", null, [
                      c("h3", FA, p(b(y)("library", "Shelves")), 1),
                      c("p", zA, p(b(y)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    c("a", { href: nt.value }, p(b(y)("library", "View all")), 9, UA)
                  ]),
                  or.value.length ? (_(), T("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": b(y)("library", "Shelves")
                  }, [
                    (_(!0), T(de, null, ze(or.value, (d) => (_(), T("a", {
                      key: d.shelf,
                      href: d.url
                    }, [
                      c("strong", null, [
                        c("bdi", HA, p(d.shelf), 1)
                      ]),
                      c("span", null, p(b(Fn)("library", "%n item", "%n items", Number(d.itemCount || 0))), 1)
                    ], 8, jA))), 128))
                  ], 8, BA)) : (_(), T("p", VA, p(b(y)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(Zi.value.count || 0) > 0 ? (_(), T("aside", GA, [
                  c("div", null, [
                    c("h3", KA, p(b(y)("library", "Needs attention")), 1),
                    c("p", WA, p(b(Fn)("library", "%n publication needs better details.", "%n publications need better details.", Number(Zi.value.count || 0))), 1)
                  ]),
                  c("a", {
                    class: "button tertiary",
                    href: Zi.value.url
                  }, p(b(y)("library", "Review")), 9, qA)
                ])) : j("", !0)
              ])) : ot.value ? (_(), T("main", YA, [
                c("header", XA, [
                  c("p", ZA, p(b(y)("library", "Your library")), 1),
                  c("h2", JA, p(b(y)("library", "Shelves")), 1),
                  c("p", QA, p(b(y)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                Xi.value.length ? (_(), T("nav", {
                  key: 0,
                  "aria-label": b(y)("library", "Shelves")
                }, [
                  c("ul", tk, [
                    (_(!0), T(de, null, ze(Xi.value, (d) => (_(), Fe(XC, {
                      key: d.id,
                      node: d,
                      "children-url": Ja.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, ek)) : (_(), T("section", nk, [
                  c("h3", null, p(b(y)("library", "Shelves")), 1),
                  c("p", ik, p(b(y)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  c("p", ak, [
                    c("a", {
                      class: "button primary",
                      href: $e.value
                    }, p(b(y)("library", "Add a Library root")), 9, rk),
                    c("a", {
                      class: "button secondary",
                      href: Ee.value
                    }, p(b(y)("library", "All publications")), 9, sk)
                  ])
                ]))
              ])) : (_(), T("section", ok, [
                c("header", lk, [
                  Wi.value ? (_(), T("p", ck, p(Es.value), 1)) : j("", !0),
                  c("h2", uk, p(tr.value), 1)
                ]),
                c("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": b(y)("library", "One catalogue workspace")
                }, [
                  c("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": b(y)("library", "Catalogue toolbar"),
                    onSubmit: je(hn, ["prevent"])
                  }, [
                    (_(!0), T(de, null, ze(xl.value, (d) => (_(), T("input", {
                      key: d.key,
                      type: "hidden",
                      name: d.key,
                      value: d.value
                    }, null, 8, hk))), 128)),
                    c("label", pk, [
                      Ie(p(b(y)("library", "Sort")), 1),
                      We(c("select", {
                        "onUpdate:modelValue": g[37] || (g[37] = (d) => P.sort = d),
                        name: "sort",
                        onChange: hn
                      }, [
                        c("option", vk, p(b(y)("library", "Title")), 1),
                        c("option", gk, p(b(y)("library", "Date added")), 1),
                        c("option", mk, p(b(y)("library", "Publication date")), 1),
                        c("option", bk, p(b(y)("library", "Series")), 1),
                        c("option", yk, p(b(y)("library", "Recently opened")), 1),
                        c("option", _k, p(b(y)("library", "Format")), 1)
                      ], 544), [
                        [ki, P.sort]
                      ])
                    ]),
                    c("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": b(y)("library", "View")
                    }, [
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Te({ active: Yt.value === "compact" }),
                        "aria-pressed": Yt.value === "compact" ? "true" : "false",
                        onClick: g[38] || (g[38] = (d) => $s("compact"))
                      }, p(b(y)("library", "Compact")), 11, Sk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Te({ active: Yt.value === "gallery" }),
                        "aria-pressed": Yt.value === "gallery" ? "true" : "false",
                        onClick: g[39] || (g[39] = (d) => $s("gallery"))
                      }, p(b(y)("library", "Gallery")), 11, Ck),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Te({ active: Yt.value === "list" }),
                        "aria-pressed": Yt.value === "list" ? "true" : "false",
                        onClick: g[40] || (g[40] = (d) => $s("list"))
                      }, p(b(y)("library", "List")), 11, Tk),
                      c("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Te({ active: Yt.value === "shelf" }),
                        "aria-pressed": Yt.value === "shelf" ? "true" : "false",
                        onClick: g[41] || (g[41] = (d) => $s("shelf"))
                      }, p(b(y)("library", "Shelf")), 11, Ek)
                    ], 8, wk)
                  ], 40, fk),
                  c("section", Ak, [
                    c("h3", {
                      title: b(y)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(b(y)("library", "Collections")), 9, kk),
                    c("form", {
                      method: "post",
                      action: kl.value,
                      class: "library-saved-collection-save-form",
                      title: Pl.value ? "" : b(y)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Rt.value
                      }, null, 8, xk),
                      c("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Mv.value
                      }, null, 8, Nk),
                      c("label", null, [
                        Ie(p(b(y)("library", "Collection name")), 1),
                        c("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: b(y)("library", "e.g. Bremen photo books"),
                          disabled: !Pl.value,
                          autocomplete: "off"
                        }, null, 8, Lk)
                      ]),
                      c("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !Pl.value,
                        title: b(y)("library", "Save current view")
                      }, p(b(y)("library", "Save")), 9, Rk)
                    ], 8, Ok),
                    rr.value.length > 0 ? (_(), T("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": b(y)("library", "Saved custom collections")
                    }, [
                      (_(!0), T(de, null, ze(rr.value, (d) => (_(), T("article", {
                        key: d.id,
                        class: "library-saved-collection-card"
                      }, [
                        c("a", {
                          class: "library-saved-collection-link",
                          href: zv(d.filters)
                        }, [
                          c("strong", null, p(d.name), 1),
                          c("span", $k, p(d.countPending ? "—" : b(Fn)("library", "%n item", "%n items", Number(d.count || 0))), 1)
                        ], 8, Pk),
                        c("form", {
                          method: "post",
                          action: Uv(d.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          c("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Rt.value
                          }, null, 8, Mk),
                          c("button", Fk, p(b(y)("library", "Delete")), 1)
                        ], 8, Dk)
                      ]))), 128))
                    ], 8, Ik)) : j("", !0)
                  ]),
                  It.value.length > 0 ? (_(), T("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": b(y)("library", "Batch actions for selected publications")
                  }, [
                    c("summary", Uk, [
                      g[51] || (g[51] = c("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      c("span", {
                        class: "library-workspace-panel-title",
                        title: b(y)("library", "Batch actions for selected publications")
                      }, p(b(y)("library", "Batch actions")), 9, Bk),
                      c("small", jk, p(b(y)("library", "Batch actions for selected publications")), 1),
                      c("b", Hk, p(b(Fn)("library", "%n publication selected", "%n publications selected", It.value.length)), 1)
                    ]),
                    c("p", Vk, p(b(Fn)("library", "%n publication selected", "%n publications selected", It.value.length)), 1),
                    c("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: xa
                    }, [
                      c("form", {
                        method: "post",
                        action: Ts.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Rt.value
                        }, null, 8, Kk),
                        c("label", null, [
                          c("span", null, p(b(y)("library", "Add tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: b(y)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, Wk)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button primary",
                          title: b(y)("library", "Applies only to the selected publications.")
                        }, p(b(y)("library", "Apply")), 9, qk)
                      ], 8, Gk),
                      c("form", {
                        method: "post",
                        action: Ca.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Rt.value
                        }, null, 8, Xk),
                        c("label", null, [
                          c("span", null, p(b(y)("library", "Remove tag")), 1),
                          c("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: b(y)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, Zk)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(y)("library", "Removes the tag only from the selected publications.")
                        }, p(b(y)("library", "Remove")), 9, Jk)
                      ], 8, Yk),
                      c("form", {
                        method: "post",
                        action: Ta.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Rt.value
                        }, null, 8, e2),
                        (_(!0), T(de, null, ze(qn.value, (d) => (_(), T("input", {
                          key: `reset-${d.key}`,
                          type: "hidden",
                          name: d.key,
                          value: d.value
                        }, null, 8, t2))), 128)),
                        g[52] || (g[52] = c("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(y)("library", "Batch actions for selected publications")
                        }, p(b(y)("library", "Reset metadata")), 9, n2)
                      ], 8, Qk),
                      c("form", {
                        method: "post",
                        action: dn.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Rt.value
                        }, null, 8, a2),
                        (_(!0), T(de, null, ze(qn.value, (d) => (_(), T("input", {
                          key: `edit-preview-${d.key}`,
                          type: "hidden",
                          name: d.key,
                          value: d.value
                        }, null, 8, r2))), 128)),
                        c("label", null, [
                          c("span", null, p(b(y)("library", "Field")), 1),
                          c("select", s2, [
                            c("option", o2, p(b(y)("library", "Publication type")), 1),
                            c("option", l2, p(b(y)("library", "Subtitle")), 1),
                            c("option", c2, p(b(y)("library", "Creators")), 1),
                            c("option", u2, p(b(y)("library", "Series / periodical")), 1),
                            c("option", d2, p(b(y)("library", "Publication date")), 1),
                            c("option", f2, p(b(y)("library", "Language")), 1),
                            c("option", h2, p(b(y)("library", "Publisher")), 1),
                            c("option", p2, p(b(y)("library", "Subjects")), 1),
                            c("option", v2, p(b(y)("library", "Classifications")), 1)
                          ])
                        ]),
                        c("label", null, [
                          c("span", null, p(b(y)("library", "Value")), 1),
                          c("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: b(y)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, g2)
                        ]),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(y)("library", "Preview first, then apply from the review page.")
                        }, p(b(y)("library", "Preview edit")), 9, m2)
                      ], 8, i2),
                      c("form", {
                        method: "post",
                        action: yi.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        c("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Rt.value
                        }, null, 8, y2),
                        (_(!0), T(de, null, ze(qn.value, (d) => (_(), T("input", {
                          key: `cover-${d.key}`,
                          type: "hidden",
                          name: d.key,
                          value: d.value
                        }, null, 8, _2))), 128)),
                        c("button", {
                          type: "submit",
                          class: "button secondary",
                          title: b(y)("library", "Batch actions for selected publications")
                        }, p(b(y)("library", "Fresh covers")), 9, w2)
                      ], 8, b2)
                    ], 32)
                  ], 8, zk)) : j("", !0)
                ], 8, dk),
                ka.value ? (_(), T("p", S2, p(ka.value), 1)) : j("", !0),
                ar.value ? (_(), T("p", C2, p(ar.value), 1)) : j("", !0),
                ir.value ? (_(), T("p", T2, p(ir.value), 1)) : j("", !0),
                Wi.value ? (_(), T("section", E2, [
                  c("p", A2, p(Es.value), 1),
                  c("h3", {
                    id: "library-discovery-heading",
                    title: Aa.value ? b(y)("library", "Items by this creator, sorted by publication context when available.") : Qa.value ? b(y)("library", "Items from this publication year, sorted by publication date when available.") : b(y)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(er.value), 9, k2),
                  c("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": b(y)("library", "Discovery summary")
                  }, [
                    c("span", null, p(b(Fn)("library", "%n item", "%n items", I.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (_(), T("span", x2, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : j("", !0),
                    O.value?.datedCount ? (_(), T("span", N2, p(O.value.datedCount) + " " + p(b(y)("library", "dated")), 1)) : j("", !0),
                    O.value?.undatedCount > 0 ? (_(), T("span", L2, p(O.value.undatedCount) + " " + p(b(y)("library", "undated")), 1)) : j("", !0)
                  ], 8, O2),
                  Ki.value && O.value ? (_(), T("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": b(y)("library", "Publication issue/date context")
                  }, [
                    c("strong", null, p(b(y)("library", "Publication contents")), 1),
                    c("span", null, p(b(Fn)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (_(), T("span", I2, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : j("", !0),
                    c("span", null, p(O.value.datedCount) + " " + p(b(y)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (_(), T("span", P2, p(O.value.undatedCount) + " " + p(b(y)("library", "without dates yet")), 1)) : j("", !0),
                    c("span", null, p(b(y)("library", "read-only grouping")), 1)
                  ], 8, R2)) : j("", !0),
                  Ki.value && O.value?.issueGroups?.length ? (_(), T("section", $2, [
                    c("div", null, [
                      c("p", D2, p(b(y)("library", "Issue order")), 1),
                      c("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: b(y)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(b(y)("library", "Read-only issue/date grouping")), 9, M2)
                    ]),
                    c("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": b(y)("library", "Visual issue strip")
                    }, [
                      (_(!0), T(de, null, ze(O.value.issueGroups, (d) => (_(), T("a", {
                        key: `strip-${d.label}`,
                        class: "library-issue-strip-card",
                        href: d.items?.[0]?.detailsUrl || "#"
                      }, [
                        c("span", null, p(d.label), 1),
                        c("strong", null, p(d.items?.[0]?.issueLabel || b(y)("library", "Issue")), 1),
                        c("small", null, p(b(Fn)("library", "%n item", "%n items", d.items?.length || 0)), 1)
                      ], 8, z2))), 128))
                    ], 8, F2),
                    O.value.gapRanges?.length ? (_(), T("p", U2, p(b(y)("library", "Gap")) + ": " + p(O.value.gapRanges.join(", ")), 1)) : j("", !0),
                    (_(!0), T(de, null, ze(O.value.issueGroups, (d) => (_(), T("div", {
                      key: d.label,
                      class: "library-publication-issue-group"
                    }, [
                      c("h5", null, p(d.label), 1),
                      c("ol", null, [
                        (_(!0), T(de, null, ze(d.items, (U, re) => (_(), T("li", {
                          key: U.itemId
                        }, [
                          c("span", B2, p(U.issueLabel), 1),
                          c("a", {
                            href: U.detailsUrl || "#"
                          }, p(U.title), 9, j2),
                          c("small", null, [
                            Ie(p(U.publicationType), 1),
                            U.publicationDate ? (_(), T(de, { key: 0 }, [
                              Ie(" · " + p(U.publicationDate), 1)
                            ], 64)) : j("", !0)
                          ]),
                          c("small", H2, [
                            re > 0 ? (_(), T(de, { key: 0 }, [
                              Ie(p(b(y)("library", "Previous issue")), 1)
                            ], 64)) : j("", !0),
                            re > 0 && re < d.items.length - 1 ? (_(), T(de, { key: 1 }, [
                              Ie(" · ")
                            ], 64)) : j("", !0),
                            re < d.items.length - 1 ? (_(), T(de, { key: 2 }, [
                              Ie(p(b(y)("library", "Next issue")), 1)
                            ], 64)) : j("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (_(), T("details", V2, [
                      c("summary", {
                        title: b(y)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(b(y)("library", "Unknown issue/date")) + " · " + p(O.value.unknownIssueItems.length), 9, G2)
                    ])) : j("", !0)
                  ])) : j("", !0),
                  c("p", null, [
                    c("a", {
                      href: Ee.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(b(y)("library", "Back to full catalogue")), 9, K2)
                  ])
                ])) : j("", !0),
                c("div", W2, [
                  c("p", q2, [
                    Ie(p(b(y)("library", "Showing")) + " " + p(I.value.from) + "–" + p(I.value.to) + " " + p(b(y)("library", "of")) + " " + p(I.value.total) + " " + p(b(y)("library", "catalogue items")), 1),
                    qi.value.length > 0 ? (_(), T("span", Y2, [
                      g[53] || (g[53] = Ie(" · ", -1)),
                      c("a", X2, p(b(y)("library", "Clear all filters")), 1)
                    ])) : j("", !0)
                  ]),
                  c("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": b(y)("library", "Catalogue pagination")
                  }, [
                    c("span", J2, [
                      Ie(p(b(y)("library", "Page")) + " " + p(I.value.page), 1),
                      I.value.total > 0 ? (_(), T("span", Q2, " · " + p(I.value.from) + "–" + p(I.value.to), 1)) : j("", !0)
                    ]),
                    I.value.previousUrl ? (_(), T("a", {
                      key: 0,
                      href: I.value.previousUrl
                    }, p(b(y)("library", "Previous")), 9, eO)) : (_(), T("span", tO, p(b(y)("library", "Previous")), 1)),
                    I.value.nextUrl ? (_(), T("a", {
                      key: 2,
                      href: I.value.nextUrl
                    }, p(b(y)("library", "Next")), 9, nO)) : (_(), T("span", iO, p(b(y)("library", "Next")), 1))
                  ], 8, Z2)
                ]),
                h.value.length === 0 ? (_(), T("div", {
                  key: 4,
                  class: Te(["library-empty-content", { "library-first-run-guidance": nr.value || it.value, "library-filter-empty-state": Kn.value && !nr.value && !it.value }]),
                  role: "status"
                }, [
                  nr.value ? (_(), T(de, { key: 0 }, [
                    c("h3", {
                      title: b(y)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(b(y)("library", "Start with one Library root")), 9, aO),
                    c("p", rO, [
                      c("a", {
                        href: $e.value,
                        class: "button primary"
                      }, p(b(y)("library", "Add a Library root")), 9, sO),
                      c("span", oO, p(b(y)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : it.value ? (_(), T(de, { key: 1 }, [
                    c("h3", {
                      title: b(y)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(b(y)("library", "No enabled Library roots")), 9, lO),
                    c("p", cO, [
                      c("a", {
                        href: $e.value,
                        class: "button primary"
                      }, p(b(y)("library", "Open Library settings")), 9, uO)
                    ])
                  ], 64)) : Kn.value ? (_(), T(de, { key: 2 }, [
                    c("h3", {
                      title: b(y)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(b(y)("library", "No matches for the current filters")), 9, dO),
                    c("p", fO, [
                      c("a", {
                        href: Pv(),
                        class: "button secondary"
                      }, p(b(y)("library", "Clear search")), 9, hO),
                      c("a", pO, p(b(y)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (_(), T(de, { key: 3 }, [
                    c("h3", {
                      title: b(y)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(b(y)("library", "No catalogue items yet")), 9, vO),
                    c("p", gO, [
                      c("a", {
                        href: $e.value,
                        class: "button primary"
                      }, p(b(y)("library", "Run a scan from settings")), 9, mO)
                    ])
                  ], 64))
                ], 2)) : j("", !0),
                h.value.length > 0 ? (_(), T("label", bO, [
                  c("input", {
                    type: "checkbox",
                    checked: It.value.length === h.value.length,
                    onChange: fn
                  }, null, 40, yO),
                  Ie(" " + p(b(y)("library", "Select all publications on this page")), 1)
                ])) : j("", !0),
                h.value.length > 0 && Yt.value === "list" ? (_(), T("ul", _O, [
                  (_(!0), T(de, null, ze(h.value, (d) => (_(), T("li", {
                    key: d.id,
                    class: Te(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Cn.value.has(Number(d.id)), "library-catalogue-list-row--open": G.value && Number(Rn.value) === Number(d.id) }])
                  }, [
                    c("label", wO, [
                      c("input", {
                        type: "checkbox",
                        checked: Cn.value.has(Number(d.id)),
                        "aria-label": `${b(y)("library", "Select publication")}: ${d.title}`,
                        onChange: (U) => wi(d.id, U.currentTarget.checked)
                      }, null, 40, SO)
                    ]),
                    c("div", CO, [
                      c("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (U) => Pn(d, U)
                      }, [
                        c("bdi", EO, p(d.title), 1)
                      ], 8, TO),
                      d.creators ? (_(), T("span", AO, [
                        c("bdi", kO, p(d.creators), 1)
                      ])) : j("", !0)
                    ]),
                    c("dl", OO, [
                      d.publication ? (_(), T("div", xO, [
                        c("dt", null, p(b(y)("library", "Series")), 1),
                        c("dd", null, [
                          c("bdi", NO, p(d.publication), 1)
                        ])
                      ])) : j("", !0),
                      d.publicationDate ? (_(), T("div", LO, [
                        c("dt", null, p(b(y)("library", "Publication date")), 1),
                        c("dd", null, p(d.publicationDate), 1)
                      ])) : j("", !0),
                      d.extension || d.publicationType ? (_(), T("div", RO, [
                        c("dt", null, p(b(y)("library", "Format")), 1),
                        c("dd", null, [
                          c("bdi", {
                            class: Te(d.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: d.extension ? "ltr" : "auto"
                          }, p(d.extension ? pr(d.extension) : d.publicationType), 11, IO)
                        ])
                      ])) : j("", !0),
                      d.shelf ? (_(), T("div", PO, [
                        c("dt", null, p(b(y)("library", "Shelf")), 1),
                        c("dd", null, [
                          c("bdi", $O, p(d.shelf), 1)
                        ])
                      ])) : j("", !0)
                    ]),
                    c("div", DO, [
                      c("a", {
                        class: "button primary",
                        href: d.openUrl
                      }, p(b(y)("library", "Open")), 9, MO),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (U) => Pn(d, U)
                      }, p(b(y)("library", "Details")), 9, FO)
                    ])
                  ], 2))), 128))
                ])) : h.value.length > 0 ? (_(), T("div", {
                  key: 7,
                  class: Te(["library-cover-gallery", Ln.value])
                }, [
                  (_(!0), T(de, null, ze(h.value, (d) => (_(), T("article", {
                    key: d.id,
                    class: Te(["library-cover-card", { "library-cover-card--cover-loaded": vr(d) === "loaded", "library-cover-card--cover-error": vr(d) === "error", "library-cover-card--selected": Cn.value.has(Number(d.id)), "library-cover-card--open": G.value && Number(Rn.value) === Number(d.id) }])
                  }, [
                    c("label", zO, [
                      c("input", {
                        type: "checkbox",
                        checked: Cn.value.has(Number(d.id)),
                        "aria-label": `${b(y)("library", "Select publication")}: ${d.title}`,
                        onChange: (U) => wi(d.id, U.currentTarget.checked)
                      }, null, 40, UO)
                    ]),
                    c("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${d.id} library-card-title-${d.id}`,
                      "aria-expanded": G.value && Number(Rn.value) === Number(d.id) ? "true" : "false",
                      onClick: (U) => Pn(d, U)
                    }, [
                      c("span", {
                        id: `library-details-action-${d.id}`,
                        class: "hidden-visually"
                      }, p(b(y)("library", "Details")), 9, jO),
                      c("span", HO, [
                        vr(d) === "loading" ? (_(), T("span", VO)) : j("", !0),
                        c("img", {
                          class: Te(["library-cover-image", { "library-cover-image--loaded": vr(d) === "loaded" }]),
                          src: d.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (U) => Bv(d),
                          onError: (U) => jv(d)
                        }, null, 42, GO),
                        vr(d) === "error" ? (_(), T("span", KO, p(b(y)("library", "Cover unavailable")), 1)) : j("", !0)
                      ])
                    ], 8, BO),
                    c("form", {
                      method: "post",
                      action: d.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: je((U) => Vu(d, U), ["prevent"])
                    }, [
                      c("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Rt.value
                      }, null, 8, qO),
                      g[54] || (g[54] = c("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      c("input", {
                        type: "hidden",
                        name: "starred",
                        value: d.starred ? "0" : "1"
                      }, null, 8, YO),
                      c("button", {
                        type: "submit",
                        class: Te(["library-cover-star-button", { "library-cover-star-button--starred": d.starred }]),
                        "aria-pressed": d.starred ? "true" : "false",
                        title: d.starred ? b(y)("library", "Unstar this publication") : b(y)("library", "Star this publication"),
                        "aria-label": d.starred ? b(y)("library", "Unstar this publication") : b(y)("library", "Star this publication"),
                        "aria-busy": gr[d.id] ? "true" : void 0,
                        disabled: gr[d.id],
                        onClick: je((U) => Vu(d, U), ["prevent"])
                      }, p(d.starred ? "★" : "☆"), 11, XO),
                      mr[d.id] ? (_(), T("span", {
                        key: 0,
                        "data-library-star-error": d.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(mr[d.id]), 9, ZO)) : j("", !0)
                    ], 40, WO),
                    c("div", JO, [
                      c("div", QO, [
                        c("h3", {
                          id: `library-card-title-${d.id}`
                        }, [
                          c("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (U) => Pn(d, U)
                          }, [
                            c("bdi", nx, p(d.title), 1)
                          ], 8, tx)
                        ], 8, ex),
                        d.creators ? (_(), T("p", ix, [
                          c("bdi", ax, p(d.creators), 1)
                        ])) : j("", !0),
                        $l(d) || d.extension ? (_(), T("div", rx, [
                          d.extension ? (_(), T("span", sx, [
                            c("bdi", ox, p(pr(d.extension)), 1)
                          ])) : j("", !0),
                          $l(d) ? (_(), T("p", lx, [
                            c("bdi", cx, p($l(d)), 1)
                          ])) : j("", !0)
                        ])) : j("", !0),
                        c("div", ux, [
                          c("a", {
                            class: "library-cover-read",
                            href: d.openUrl
                          }, p(b(y)("library", "Open")), 9, dx),
                          be(b(xo), {
                            "aria-label": b(y)("library", "More actions")
                          }, {
                            default: xe(() => [
                              be(b(Fa), {
                                href: d.filesUrl
                              }, {
                                default: xe(() => [
                                  Ie(p(b(y)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              be(b(Fa), {
                                href: d.downloadUrl
                              }, {
                                default: xe(() => [
                                  Ie(p(b(y)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              be(b(Fa), {
                                href: d.detailsUrl
                              }, {
                                default: xe(() => [
                                  Ie(p(b(y)("library", "Maintenance")), 1)
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
                h.value.length > 0 ? (_(), T("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": b(y)("library", "Catalogue pagination")
                }, [
                  c("span", hx, [
                    Ie(p(b(y)("library", "Page")) + " " + p(I.value.page), 1),
                    I.value.total > 0 ? (_(), T("span", px, " · " + p(I.value.from) + "–" + p(I.value.to), 1)) : j("", !0)
                  ]),
                  I.value.previousUrl ? (_(), T("a", {
                    key: 0,
                    href: I.value.previousUrl
                  }, p(b(y)("library", "Previous")), 9, vx)) : (_(), T("span", gx, p(b(y)("library", "Previous")), 1)),
                  I.value.nextUrl ? (_(), T("a", {
                    key: 2,
                    href: I.value.nextUrl
                  }, p(b(y)("library", "Next")), 9, mx)) : (_(), T("span", bx, p(b(y)("library", "Next")), 1))
                ], 8, fx)) : j("", !0)
              ]))
            ], 8, iE)
          ]),
          _: 1
        }),
        be(b(SC), {
          ref_key: "sidebarComponent",
          ref: Yn,
          class: "library-native-item-sidebar",
          open: G.value,
          "no-toggle": "",
          loading: _t.loading,
          name: ke.value?.title || b(y)("library", "Publication details"),
          subname: ke.value?.creators || "",
          role: Xn.value ? "dialog" : void 0,
          "aria-modal": Xn.value ? "true" : void 0,
          "aria-labelledby": Xn.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": Xn.value && ke.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Mu,
          onClosed: pv,
          onClose: Ns
        }, {
          default: xe(() => [
            c("div", yx, [
              c("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: lr,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(ke.value?.title || b(y)("library", "Publication details")), 513),
              _t.loading && !ke.value ? (_(), T("p", _x, p(b(y)("library", "Loading publication details…")), 1)) : _t.error ? (_(), T("div", {
                key: 1,
                class: "library-sidebar-state",
                role: _t.missing ? "status" : "alert"
              }, [
                c("p", null, p(_t.error), 1),
                _t.missing ? j("", !0) : (_(), T("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: g[42] || (g[42] = (d) => cr(Rn.value, { historyMode: "none" }))
                }, p(b(y)("library", "Try again")), 1))
              ], 8, wx)) : ke.value ? (_(), T(de, { key: 2 }, [
                c("p", Sx, p(b(y)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                c("div", Cx, [
                  c("span", Tx, p(b(y)("library", "Cover for")), 1),
                  c("img", {
                    class: "library-detail-drawer-cover",
                    src: ke.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, Ex),
                  c("div", Ax, [
                    c("p", kx, [
                      c("bdi", Ox, p(ke.value.publicationType || b(y)("library", "Publication")), 1),
                      ke.value.extension ? (_(), T("span", xx, [
                        g[55] || (g[55] = Ie(" · ", -1)),
                        c("bdi", Nx, p(pr(ke.value.extension)), 1)
                      ])) : j("", !0)
                    ]),
                    c("div", Lx, [
                      c("a", {
                        class: "button primary",
                        href: ke.value.openUrl
                      }, p(b(y)("library", "Open")), 9, Rx),
                      be(b(xo), {
                        "aria-label": b(y)("library", "File and maintenance actions")
                      }, {
                        default: xe(() => [
                          be(b(Fa), {
                            href: ke.value.filesUrl
                          }, {
                            default: xe(() => [
                              Ie(p(b(y)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          be(b(Fa), {
                            href: ke.value.downloadUrl
                          }, {
                            default: xe(() => [
                              Ie(p(b(y)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          be(b(Fa), {
                            href: ke.value.detailsUrl
                          }, {
                            default: xe(() => [
                              Ie(p(b(y)("library", "Maintenance (legacy)")), 1)
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
                  "aria-label": b(y)("library", "Publication detail sections")
                }, [
                  (_(), T(de, null, ze(at, (d) => c("button", {
                    key: d.key,
                    type: "button",
                    class: Te({ active: In.value === d.key }),
                    "aria-current": In.value === d.key ? "page" : void 0,
                    onClick: (U) => In.value = d.key
                  }, p(b(y)("library", d.label)), 11, Px)), 64))
                ], 8, Ix),
                In.value === "overview" ? (_(), T("section", $x, [
                  c("h3", Dx, p(b(y)("library", "Overview")), 1),
                  ke.value.description ? (_(), T("p", Mx, [
                    c("bdi", Fx, p(ke.value.description), 1)
                  ])) : j("", !0),
                  c("dl", zx, [
                    ke.value.publication ? (_(), T("div", Ux, [
                      c("dt", null, p(b(y)("library", "Series")), 1),
                      c("dd", null, p(ke.value.publication), 1)
                    ])) : j("", !0),
                    ke.value.publicationDate ? (_(), T("div", Bx, [
                      c("dt", null, p(b(y)("library", "Date")), 1),
                      c("dd", null, p(ke.value.publicationDate), 1)
                    ])) : j("", !0),
                    ke.value.publisher ? (_(), T("div", jx, [
                      c("dt", null, p(b(y)("library", "Publisher")), 1),
                      c("dd", null, p(ke.value.publisher), 1)
                    ])) : j("", !0),
                    ke.value.language ? (_(), T("div", Hx, [
                      c("dt", null, p(b(y)("library", "Language")), 1),
                      c("dd", null, p(ke.value.language), 1)
                    ])) : j("", !0),
                    ke.value.shelf ? (_(), T("div", Vx, [
                      c("dt", null, p(b(y)("library", "Shelf")), 1),
                      c("dd", null, p(ke.value.shelf), 1)
                    ])) : j("", !0)
                  ])
                ])) : In.value === "metadata" ? (_(), T("section", Gx, [
                  c("h3", Kx, p(b(y)("library", "Metadata")), 1),
                  c("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: je(fv, ["prevent"])
                  }, [
                    c("label", null, [
                      Ie(p(b(y)("library", "Title")), 1),
                      We(c("input", {
                        "onUpdate:modelValue": g[43] || (g[43] = (d) => wt.title = d),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [rn, wt.title]
                      ])
                    ]),
                    c("label", null, [
                      Ie(p(b(y)("library", "Publication date")), 1),
                      We(c("input", {
                        "onUpdate:modelValue": g[44] || (g[44] = (d) => wt.publicationDate = d),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: b(y)("library", "e.g. 2026")
                      }, null, 8, Wx), [
                        [rn, wt.publicationDate]
                      ])
                    ]),
                    c("fieldset", null, [
                      c("legend", null, p(b(y)("library", "Identifiers")), 1),
                      (_(!0), T(de, null, ze(wt.identifiers, (d, U) => (_(), T("div", {
                        key: U,
                        class: "library-sidebar-identifier"
                      }, [
                        We(c("input", {
                          "onUpdate:modelValue": (re) => d.scheme = re,
                          "aria-label": b(y)("library", "Identifier type"),
                          placeholder: b(y)("library", "Identifier type")
                        }, null, 8, qx), [
                          [rn, d.scheme]
                        ]),
                        We(c("input", {
                          "onUpdate:modelValue": (re) => d.displayValue = re,
                          "aria-label": b(y)("library", "Identifier value")
                        }, null, 8, Yx), [
                          [rn, d.displayValue]
                        ]),
                        c("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (re) => dv(U)
                        }, p(b(y)("library", "Remove")), 9, Xx)
                      ]))), 128)),
                      c("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: At
                      }, p(b(y)("library", "Add identifier")), 1)
                    ]),
                    c("p", Zx, p(b(y)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    Xt.error ? (_(), T("p", Jx, p(Xt.error), 1)) : Xt.saved ? (_(), T("p", Qx, p(b(y)("library", "Metadata saved.")), 1)) : j("", !0),
                    c("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: Xt.saving
                    }, p(Xt.saving ? b(y)("library", "Saving…") : b(y)("library", "Save metadata")), 9, eN)
                  ], 32),
                  xs(ke.value).length ? (_(), T("section", tN, [
                    c("h4", nN, p(b(y)("library", "Scanner suggestions")), 1),
                    c("p", iN, p(b(y)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    c("dl", null, [
                      (_(!0), T(de, null, ze(xs(ke.value), (d) => (_(), T("div", {
                        key: d.field
                      }, [
                        c("dt", null, p(d.field) + " · " + p(d.sourceProvenance), 1),
                        c("dd", null, [
                          Ie(p(b(y)("library", "Current")) + ": " + p(d.currentValue || "—"), 1),
                          g[56] || (g[56] = c("br", null, null, -1)),
                          Ie(p(b(y)("library", "Suggestion")) + ": " + p(d.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : j("", !0)
                ])) : (_(), T("section", aN, [
                  c("h3", rN, p(b(y)("library", "Activity")), 1),
                  c("dl", sN, [
                    c("div", null, [
                      c("dt", null, p(b(y)("library", "Scan status")), 1),
                      c("dd", null, p(ke.value.scanStatus || "—"), 1)
                    ]),
                    ke.value.workflowStatus ? (_(), T("div", oN, [
                      c("dt", null, p(b(y)("library", "Workflow")), 1),
                      c("dd", null, p(ke.value.workflowStatus), 1)
                    ])) : j("", !0),
                    ke.value.metadataSource ? (_(), T("div", lN, [
                      c("dt", null, p(b(y)("library", "Metadata source")), 1),
                      c("dd", null, p(ke.value.metadataSource), 1)
                    ])) : j("", !0),
                    ke.value.cachedPath ? (_(), T("div", cN, [
                      c("dt", null, p(b(y)("library", "File")), 1),
                      c("dd", null, [
                        c("bdi", uN, p(ke.value.cachedPath), 1)
                      ])
                    ])) : j("", !0)
                  ])
                ])),
                c("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": b(y)("library", "Browse neighbouring items")
                }, [
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !he.value,
                    onClick: g[45] || (g[45] = (d) => Ls(he.value))
                  }, p(b(y)("library", "Previous item")), 9, fN),
                  c("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ce.value,
                    onClick: g[46] || (g[46] = (d) => Ls(Ce.value))
                  }, p(b(y)("library", "Next item")), 9, hN)
                ], 8, dN)
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
function bN() {
  window.LibraryStartupWatchdog?.fail();
}
function yN(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = gu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !yN(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Ob(mN, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  bN(), console.error("[library] Vue startup failed", e);
}
