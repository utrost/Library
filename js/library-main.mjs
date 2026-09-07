// @__NO_SIDE_EFFECTS__
function Oi(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const he = {}, _n = [], Ot = () => {
}, lo = () => !1, Cr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Or = (e) => e.startsWith("onUpdate:"), We = Object.assign, Ri = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ul = Object.prototype.hasOwnProperty, ce = (e, t) => Ul.call(e, t), G = Array.isArray, qt = (e) => Xn(e) === "[object Map]", an = (e) => Xn(e) === "[object Set]", us = (e) => Xn(e) === "[object Date]", ee = (e) => typeof e == "function", xe = (e) => typeof e == "string", Rt = (e) => typeof e == "symbol", de = (e) => e !== null && typeof e == "object", ao = (e) => (de(e) || ee(e)) && ee(e.then) && ee(e.catch), co = Object.prototype.toString, Xn = (e) => co.call(e), kl = (e) => Xn(e).slice(8, -1), uo = (e) => Xn(e) === "[object Object]", Pi = (e) => xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Un = /* @__PURE__ */ Oi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Hl = /-\w/g, bt = Rr(
  (e) => e.replace(Hl, (t) => t.slice(1).toUpperCase())
), jl = /\B([A-Z])/g, cn = Rr(
  (e) => e.replace(jl, "-$1").toLowerCase()
), fo = Rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yr = Rr(
  (e) => e ? `on${fo(e)}` : ""
), Ct = (e, t) => !Object.is(e, t), hr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, po = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Pr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let fs;
const Nr = () => fs || (fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ni(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = xe(r) ? Bl(r) : Ni(r);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (xe(e) || de(e))
    return e;
}
const $l = /;(?![^(]*\))/g, Vl = /:([^]+)/, zl = /\/\*[^]*?\*\//g;
function Bl(e) {
  const t = {};
  return e.replace(zl, "").split($l).forEach((n) => {
    if (n) {
      const r = n.split(Vl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function zn(e) {
  let t = "";
  if (xe(e))
    t = e;
  else if (G(e))
    for (let n = 0; n < e.length; n++) {
      const r = zn(e[n]);
      r && (t += r + " ");
    }
  else if (de(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Wl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ql = /* @__PURE__ */ Oi(Wl);
function ho(e) {
  return !!e || e === "";
}
function Kl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Kt(e[r], t[r]);
  return n;
}
function ds(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const i of e) {
    let s = -1;
    for (let l = 0; l < n.length; l++)
      if (!r[l] && Kt(i, n[l])) {
        s = l;
        break;
      }
    if (s < 0) return !1;
    r[s] = 1;
  }
  return !0;
}
function Kt(e, t) {
  if (e === t) return !0;
  let n = us(e), r = us(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Rt(e), r = Rt(t), n || r)
    return e === t;
  if (n = G(e), r = G(t), n || r)
    return n && r ? Kl(e, t) : !1;
  if (n = de(e), r = de(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = qt(e), r = qt(t), n || r || (n = an(e), r = an(t), n || r))
      return n && r ? ds(e, t) : !1;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s)
      return !1;
    for (const l in e) {
      const c = e.hasOwnProperty(l), f = t.hasOwnProperty(l);
      if (c && !f || !c && f || !Kt(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Gl(e, t) {
  return e.findIndex((n) => Kt(n, t));
}
const mo = (e) => !!(e && e.__v_isRef === !0), y = (e) => xe(e) ? e : e == null ? "" : G(e) || de(e) && (e.toString === co || !ee(e.toString)) ? mo(e) ? y(e.value) : JSON.stringify(e, go, 2) : String(e), go = (e, t) => mo(t) ? go(e, t.value) : qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], s) => (n[Xr(r, s) + " =>"] = i, n),
    {}
  )
} : an(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Xr(n))
} : Rt(t) ? Xr(t) : de(t) && !G(t) && !uo(t) ? String(t) : t, Xr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let je;
class Yl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && je && (je.active ? (this.parent = je, this.index = (je.scopes || (je.scopes = [])).push(
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
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].pause();
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
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = je;
      try {
        return je = this, t();
      } finally {
        je = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = je, je = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (je === this)
        je = this.prevScope;
      else {
        let t = je;
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
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (n = 0, r = i.length; n < r; n++)
          i[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Xl() {
  return je;
}
let be;
const Jr = /* @__PURE__ */ new WeakSet();
class bo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, je && (je.active ? je.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Jr.has(this) && (Jr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _o(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ps(this), vo(this);
    const t = be, n = yt;
    be = this, yt = !0;
    try {
      return this.fn();
    } finally {
      To(this), be = t, yt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mi(t);
      this.deps = this.depsTail = void 0, ps(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Jr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gi(this) && this.run();
  }
  get dirty() {
    return gi(this);
  }
}
let yo = 0, kn, Hn;
function _o(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Hn, Hn = e;
    return;
  }
  e.next = kn, kn = e;
}
function Ii() {
  yo++;
}
function Di() {
  if (--yo > 0)
    return;
  if (Hn) {
    let t = Hn;
    for (Hn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; kn; ) {
    let t = kn;
    for (kn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function vo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function To(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Mi(r), Jl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function gi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (So(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function So(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Bn) || (e.globalVersion = Bn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !gi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = be, r = yt;
  be = e, yt = !0;
  try {
    vo(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ct(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    be = n, yt = r, To(e), e.flags &= -3;
  }
}
function Mi(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: i } = e;
  if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Mi(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Jl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let yt = !0;
const Eo = [];
function kt() {
  Eo.push(yt), yt = !1;
}
function Ht() {
  const e = Eo.pop();
  yt = e === void 0 ? !0 : e;
}
function ps(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = be;
    be = void 0;
    try {
      t();
    } finally {
      be = n;
    }
  }
}
let Bn = 0;
class Zl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Li {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!be || !yt || be === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== be)
      n = this.activeLink = new Zl(be, this), be.deps ? (n.prevDep = be.depsTail, be.depsTail.nextDep = n, be.depsTail = n) : be.deps = be.depsTail = n, Ao(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = be.depsTail, n.nextDep = void 0, be.depsTail.nextDep = n, be.depsTail = n, be.deps === n && (be.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Bn++, this.notify(t);
  }
  notify(t) {
    Ii();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Di();
    }
  }
}
function Ao(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Ao(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const bi = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ Symbol(
  ""
), yi = /* @__PURE__ */ Symbol(
  ""
), Wn = /* @__PURE__ */ Symbol(
  ""
);
function ze(e, t, n) {
  if (yt && be) {
    let r = bi.get(e);
    r || bi.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Li()), i.map = r, i.key = n), i.track();
  }
}
function Lt(e, t, n, r, i, s) {
  const l = bi.get(e);
  if (!l) {
    Bn++;
    return;
  }
  const c = (f) => {
    f && f.trigger();
  };
  if (Ii(), t === "clear")
    l.forEach(c);
  else {
    const f = G(e), g = f && Pi(n);
    if (f && n === "length") {
      const d = Number(r);
      l.forEach((v, C) => {
        (C === "length" || C === Wn || !Rt(C) && C >= d) && c(v);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && c(l.get(n)), g && c(l.get(Wn)), t) {
        case "add":
          f ? g && c(l.get("length")) : (c(l.get(sn)), qt(e) && c(l.get(yi)));
          break;
        case "delete":
          f || (c(l.get(sn)), qt(e) && c(l.get(yi)));
          break;
        case "set":
          qt(e) && c(l.get(sn));
          break;
      }
  }
  Di();
}
function mn(e) {
  const t = /* @__PURE__ */ ae(e);
  return t === e ? t : (ze(t, "iterate", Wn), /* @__PURE__ */ pt(e) ? t : t.map(_t));
}
function Ir(e) {
  return ze(e = /* @__PURE__ */ ae(e), "iterate", Wn), e;
}
function xt(e, t) {
  return /* @__PURE__ */ jt(e) ? En(/* @__PURE__ */ on(e) ? _t(t) : t) : _t(t);
}
const Ql = {
  __proto__: null,
  [Symbol.iterator]() {
    return Zr(this, Symbol.iterator, (e) => xt(this, e));
  },
  concat(...e) {
    return mn(this).concat(
      ...e.map((t) => G(t) ? mn(t) : t)
    );
  },
  entries() {
    return Zr(this, "entries", (e) => (e[1] = xt(this, e[1]), e));
  },
  every(e, t) {
    return It(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return It(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => xt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return It(
      this,
      "find",
      e,
      t,
      (n) => xt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return It(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return It(
      this,
      "findLast",
      e,
      t,
      (n) => xt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return It(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return It(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Qr(this, "includes", e);
  },
  indexOf(...e) {
    return Qr(this, "indexOf", e);
  },
  join(e) {
    return mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return It(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Rn(this, "pop");
  },
  push(...e) {
    return Rn(this, "push", e);
  },
  reduce(e, ...t) {
    return hs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return hs(this, "reduceRight", e, t);
  },
  shift() {
    return Rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return It(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Rn(this, "splice", e);
  },
  toReversed() {
    return mn(this).toReversed();
  },
  toSorted(e) {
    return mn(this).toSorted(e);
  },
  toSpliced(...e) {
    return mn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Rn(this, "unshift", e);
  },
  values() {
    return Zr(this, "values", (e) => xt(this, e));
  }
};
function Zr(e, t, n) {
  const r = Ir(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ pt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const ea = Array.prototype;
function It(e, t, n, r, i, s) {
  const l = Ir(e), c = l !== e && !/* @__PURE__ */ pt(e), f = l[t];
  if (f !== ea[t]) {
    const v = f.apply(e, s);
    return c ? _t(v) : v;
  }
  let g = n;
  l !== e && (c ? g = function(v, C) {
    return n.call(this, xt(e, v), C, e);
  } : n.length > 2 && (g = function(v, C) {
    return n.call(this, v, C, e);
  }));
  const d = f.call(l, g, r);
  return c && i ? i(d) : d;
}
function hs(e, t, n, r) {
  const i = Ir(e), s = i !== e && !/* @__PURE__ */ pt(e);
  let l = n, c = !1;
  i !== e && (s ? (c = r.length === 0, l = function(g, d, v) {
    return c && (c = !1, g = xt(e, g)), n.call(this, g, xt(e, d), v, e);
  }) : n.length > 3 && (l = function(g, d, v) {
    return n.call(this, g, d, v, e);
  }));
  const f = i[t](l, ...r);
  return c ? xt(e, f) : f;
}
function Qr(e, t, n) {
  const r = /* @__PURE__ */ ae(e);
  ze(r, "iterate", Wn);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ ki(n[0]) ? (n[0] = /* @__PURE__ */ ae(n[0]), r[t](...n)) : i;
}
function Rn(e, t, n = []) {
  kt(), Ii();
  const r = (/* @__PURE__ */ ae(e))[t].apply(e, n);
  return Di(), Ht(), r;
}
const ta = /* @__PURE__ */ Oi("__proto__,__v_isRef,__isVue"), xo = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Rt)
);
function na(e) {
  Rt(e) || (e = String(e));
  const t = /* @__PURE__ */ ae(this);
  return ze(t, "has", e), t.hasOwnProperty(e);
}
class wo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (i ? s ? da : Po : s ? Ro : Oo).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const l = G(t);
    if (!i) {
      let f;
      if (l && (f = Ql[n]))
        return f;
      if (n === "hasOwnProperty")
        return na;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Be(t) ? t : r
    );
    if ((Rt(n) ? xo.has(n) : ta(n)) || (i || ze(t, "get", n), s))
      return c;
    if (/* @__PURE__ */ Be(c)) {
      const f = l && Pi(n) ? c : c.value;
      return i && de(f) ? /* @__PURE__ */ vi(f) : f;
    }
    return de(c) ? i ? /* @__PURE__ */ vi(c) : /* @__PURE__ */ nn(c) : c;
  }
}
class Co extends wo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    const l = G(t) && Pi(n);
    if (!this._isShallow) {
      const g = /* @__PURE__ */ jt(s);
      if (!/* @__PURE__ */ pt(r) && !/* @__PURE__ */ jt(r) && (s = /* @__PURE__ */ ae(s), r = /* @__PURE__ */ ae(r)), !l && /* @__PURE__ */ Be(s) && !/* @__PURE__ */ Be(r))
        return g || (s.value = r), !0;
    }
    const c = l ? Number(n) < t.length : ce(t, n), f = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Be(t) ? t : i
    );
    return t === /* @__PURE__ */ ae(i) && f && (c ? Ct(r, s) && Lt(t, "set", n, r) : Lt(t, "add", n, r)), f;
  }
  deleteProperty(t, n) {
    const r = ce(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Lt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Rt(n) || !xo.has(n)) && ze(t, "has", n), r;
  }
  ownKeys(t) {
    return ze(
      t,
      "iterate",
      G(t) ? "length" : sn
    ), Reflect.ownKeys(t);
  }
}
class ra extends wo {
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
const ia = /* @__PURE__ */ new Co(), sa = /* @__PURE__ */ new ra(), oa = /* @__PURE__ */ new Co(!0);
const _i = (e) => e, lr = (e) => Reflect.getPrototypeOf(e);
function la(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = /* @__PURE__ */ ae(i), l = qt(s), c = e === "entries" || e === Symbol.iterator && l, f = e === "keys" && l, g = i[e](...r), d = n ? _i : t ? En : _t;
    return !t && ze(
      s,
      "iterate",
      f ? yi : sn
    ), We(
      // inheriting all iterator properties
      Object.create(g),
      {
        // iterator protocol
        next() {
          const { value: v, done: C } = g.next();
          return C ? { value: v, done: C } : {
            value: c ? [d(v[0]), d(v[1])] : d(v),
            done: C
          };
        }
      }
    );
  };
}
function ar(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function aa(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw, l = /* @__PURE__ */ ae(s), c = /* @__PURE__ */ ae(i);
      e || (Ct(i, c) && ze(l, "get", i), ze(l, "get", c));
      const { has: f } = lr(l), g = t ? _i : e ? En : _t;
      if (f.call(l, i))
        return g(s.get(i));
      if (f.call(l, c))
        return g(s.get(c));
      s !== l && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && ze(/* @__PURE__ */ ae(i), "iterate", sn), i.size;
    },
    has(i) {
      const s = this.__v_raw, l = /* @__PURE__ */ ae(s), c = /* @__PURE__ */ ae(i);
      return e || (Ct(i, c) && ze(l, "has", i), ze(l, "has", c)), i === c ? s.has(i) : s.has(i) || s.has(c);
    },
    forEach(i, s) {
      const l = this, c = l.__v_raw, f = /* @__PURE__ */ ae(c), g = t ? _i : e ? En : _t;
      return !e && ze(f, "iterate", sn), c.forEach((d, v) => i.call(s, g(d), g(v), l));
    }
  };
  return We(
    n,
    e ? {
      add: ar("add"),
      set: ar("set"),
      delete: ar("delete"),
      clear: ar("clear")
    } : {
      add(i) {
        const s = /* @__PURE__ */ ae(this), l = lr(s), c = /* @__PURE__ */ ae(i), f = !t && !/* @__PURE__ */ pt(i) && !/* @__PURE__ */ jt(i) ? c : i;
        return l.has.call(s, f) || Ct(i, f) && l.has.call(s, i) || Ct(c, f) && l.has.call(s, c) || (s.add(f), Lt(s, "add", f, f)), this;
      },
      set(i, s) {
        !t && !/* @__PURE__ */ pt(s) && !/* @__PURE__ */ jt(s) && (s = /* @__PURE__ */ ae(s));
        const l = /* @__PURE__ */ ae(this), { has: c, get: f } = lr(l);
        let g = c.call(l, i);
        g || (i = /* @__PURE__ */ ae(i), g = c.call(l, i));
        const d = f.call(l, i);
        return l.set(i, s), g ? Ct(s, d) && Lt(l, "set", i, s) : Lt(l, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ ae(this), { has: l, get: c } = lr(s);
        let f = l.call(s, i);
        f || (i = /* @__PURE__ */ ae(i), f = l.call(s, i)), c && c.call(s, i);
        const g = s.delete(i);
        return f && Lt(s, "delete", i, void 0), g;
      },
      clear() {
        const i = /* @__PURE__ */ ae(this), s = i.size !== 0, l = i.clear();
        return s && Lt(
          i,
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
  ].forEach((i) => {
    n[i] = la(i, e, t);
  }), n;
}
function Fi(e, t) {
  const n = aa(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    ce(n, i) && i in r ? n : r,
    i,
    s
  );
}
const ca = {
  get: /* @__PURE__ */ Fi(!1, !1)
}, ua = {
  get: /* @__PURE__ */ Fi(!1, !0)
}, fa = {
  get: /* @__PURE__ */ Fi(!0, !1)
};
const Oo = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), da = /* @__PURE__ */ new WeakMap();
function pa(e) {
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
function nn(e) {
  return /* @__PURE__ */ jt(e) ? e : Ui(
    e,
    !1,
    ia,
    ca,
    Oo
  );
}
// @__NO_SIDE_EFFECTS__
function ha(e) {
  return Ui(
    e,
    !1,
    oa,
    ua,
    Ro
  );
}
// @__NO_SIDE_EFFECTS__
function vi(e) {
  return Ui(
    e,
    !0,
    sa,
    fa,
    Po
  );
}
function Ui(e, t, n, r, i) {
  if (!de(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const l = pa(kl(e));
  if (l === 0)
    return e;
  const c = new Proxy(
    e,
    l === 2 ? r : n
  );
  return i.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return /* @__PURE__ */ jt(e) ? /* @__PURE__ */ on(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ki(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ae(t) : e;
}
function ma(e) {
  return !ce(e, "__v_skip") && Object.isExtensible(e) && po(e, "__v_skip", !0), e;
}
const _t = (e) => de(e) ? /* @__PURE__ */ nn(e) : e, En = (e) => de(e) ? /* @__PURE__ */ vi(e) : e;
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return ba(e, !1);
}
function ba(e, t) {
  return /* @__PURE__ */ Be(e) ? e : new ya(e, t);
}
class ya {
  constructor(t, n) {
    this.dep = new Li(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ae(t), this._value = n ? t : _t(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ pt(t) || /* @__PURE__ */ jt(t);
    t = r ? t : /* @__PURE__ */ ae(t), Ct(t, n) && (this._rawValue = t, this._value = r ? t : _t(t), this.dep.trigger());
  }
}
function S(e) {
  return /* @__PURE__ */ Be(e) ? e.value : e;
}
const _a = {
  get: (e, t, n) => t === "__v_raw" ? e : S(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ Be(i) && !/* @__PURE__ */ Be(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function No(e) {
  return /* @__PURE__ */ on(e) ? e : new Proxy(e, _a);
}
class va {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Li(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Bn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    be !== this)
      return _o(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return So(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ta(e, t, n = !1) {
  let r, i;
  return ee(e) ? r = e : (r = e.get, i = e.set), new va(r, i, n);
}
const cr = {}, yr = /* @__PURE__ */ new WeakMap();
let Qt;
function Sa(e, t = !1, n = Qt) {
  if (n) {
    let r = yr.get(n);
    r || yr.set(n, r = []), r.push(e);
  }
}
function Ea(e, t, n = he) {
  const { immediate: r, deep: i, once: s, scheduler: l, augmentJob: c, call: f } = n, g = (D) => i ? D : /* @__PURE__ */ pt(D) || i === !1 || i === 0 ? Ft(D, 1) : Ft(D);
  let d, v, C, L, Y = !1, U = !1;
  if (/* @__PURE__ */ Be(e) ? (v = () => e.value, Y = /* @__PURE__ */ pt(e)) : /* @__PURE__ */ on(e) ? (v = () => g(e), Y = !0) : G(e) ? (U = !0, Y = e.some((D) => /* @__PURE__ */ on(D) || /* @__PURE__ */ pt(D)), v = () => e.map((D) => {
    if (/* @__PURE__ */ Be(D))
      return D.value;
    if (/* @__PURE__ */ on(D))
      return g(D);
    if (ee(D))
      return f ? f(D, 2) : D();
  })) : ee(e) ? t ? v = f ? () => f(e, 2) : e : v = () => {
    if (C) {
      kt();
      try {
        C();
      } finally {
        Ht();
      }
    }
    const D = Qt;
    Qt = d;
    try {
      return f ? f(e, 3, [L]) : e(L);
    } finally {
      Qt = D;
    }
  } : v = Ot, t && i) {
    const D = v, ie = i === !0 ? 1 / 0 : i;
    v = () => Ft(D(), ie);
  }
  const Z = Xl(), V = () => {
    d.stop(), Z && Z.active && Ri(Z.effects, d);
  };
  if (s && t) {
    const D = t;
    t = (...ie) => {
      const we = D(...ie);
      return V(), we;
    };
  }
  let O = U ? new Array(e.length).fill(cr) : cr;
  const q = (D) => {
    if (!(!(d.flags & 1) || !d.dirty && !D))
      if (t) {
        const ie = d.run();
        if (D || i || Y || (U ? ie.some((we, Te) => Ct(we, O[Te])) : Ct(ie, O))) {
          C && C();
          const we = Qt;
          Qt = d;
          try {
            const Te = [
              ie,
              // pass undefined as the old value when it's changed for the first time
              O === cr ? void 0 : U && O[0] === cr ? [] : O,
              L
            ];
            O = ie, f ? f(t, 3, Te) : (
              // @ts-expect-error
              t(...Te)
            );
          } finally {
            Qt = we;
          }
        }
      } else
        d.run();
  };
  return c && c(q), d = new bo(v), d.scheduler = l ? () => l(q, !1) : q, L = (D) => Sa(D, !1, d), C = d.onStop = () => {
    const D = yr.get(d);
    if (D) {
      if (f)
        f(D, 4);
      else
        for (const ie of D) ie();
      yr.delete(d);
    }
  }, t ? r ? q(!0) : O = d.run() : l ? l(q.bind(null, !0), !0) : d.run(), V.pause = d.pause.bind(d), V.resume = d.resume.bind(d), V.stop = V, V;
}
function Ft(e, t = 1 / 0, n) {
  if (t <= 0 || !de(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Be(e))
    Ft(e.value, t, n);
  else if (G(e))
    for (let r = 0; r < e.length; r++)
      Ft(e[r], t, n);
  else if (an(e) || qt(e))
    e.forEach((r) => {
      Ft(r, t, n);
    });
  else if (uo(e)) {
    for (const r in e)
      Ft(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Ft(e[r], t, n);
  }
  return e;
}
function Jn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Dr(i, t, n);
  }
}
function vt(e, t, n, r) {
  if (ee(e)) {
    const i = Jn(e, t, n, r);
    return i && ao(i) && i.catch((s) => {
      Dr(s, t, n);
    }), i;
  }
  if (G(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(vt(e[s], t, n, r));
    return i;
  }
}
function Dr(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: l } = t && t.appContext.config || he;
  if (t) {
    let c = t.parent;
    const f = t.proxy, g = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const d = c.ec;
      if (d) {
        for (let v = 0; v < d.length; v++)
          if (d[v](e, f, g) === !1)
            return;
      }
      c = c.parent;
    }
    if (s) {
      kt(), Jn(s, null, 10, [
        e,
        f,
        g
      ]), Ht();
      return;
    }
  }
  Aa(e, n, i, r, l);
}
function Aa(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Xe = [];
let At = -1;
const vn = [];
let Wt = null, bn = 0;
const Io = /* @__PURE__ */ Promise.resolve();
let _r = null;
function Do(e) {
  const t = _r || Io;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function xa(e) {
  let t = At + 1, n = Xe.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = Xe[r], s = qn(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Hi(e) {
  if (!(e.flags & 1)) {
    const t = qn(e), n = Xe[Xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= qn(n) ? Xe.push(e) : Xe.splice(xa(t), 0, e), e.flags |= 1, Mo();
  }
}
function Mo() {
  _r || (_r = Io.then(Fo));
}
function wa(e) {
  if (!G(e))
    Wt && e.id === -1 ? Wt.splice(bn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      vn.push(e[t]);
  Mo();
}
function ms(e, t, n = At + 1) {
  for (; n < Xe.length; n++) {
    const r = Xe[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Xe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Lo(e) {
  if (vn.length) {
    const t = [...new Set(vn)].sort(
      (n, r) => qn(n) - qn(r)
    );
    if (vn.length = 0, Wt) {
      for (let n = 0; n < t.length; n++)
        Wt.push(t[n]);
      return;
    }
    for (Wt = t, bn = 0; bn < Wt.length; bn++) {
      const n = Wt[bn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Wt = null, bn = 0;
  }
}
const qn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Fo(e) {
  try {
    for (At = 0; At < Xe.length; At++) {
      const t = Xe[At];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Jn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; At < Xe.length; At++) {
      const t = Xe[At];
      t && (t.flags &= -2);
    }
    At = -1, Xe.length = 0, Lo(), _r = null, (Xe.length || vn.length) && Fo();
  }
}
let dt = null, Uo = null;
function vr(e) {
  const t = dt;
  return dt = e, Uo = e && e.type.__scopeId || null, t;
}
function Ca(e, t = dt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && ws(-1);
    const s = vr(t), l = ln.length;
    let c;
    try {
      c = e(...i);
    } finally {
      for (let f = ln.length; f > l; f--) cl();
      vr(s), r._d && ws(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Fe(e, t) {
  if (dt === null)
    return e;
  const n = kr(dt), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, l, c, f = he] = t[i];
    s && (ee(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Ft(l), r.push({
      dir: s,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: c,
      modifiers: f
    }));
  }
  return e;
}
function Xt(e, t, n, r) {
  const i = e.dirs, s = t && t.dirs;
  for (let l = 0; l < i.length; l++) {
    const c = i[l];
    s && (c.oldValue = s[l].value);
    let f = c.dir[r];
    f && (kt(), vt(f, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Ht());
  }
}
function Oa(e, t) {
  if (Je) {
    let n = Je.provides;
    const r = Je.parent && Je.parent.provides;
    r === n && (n = Je.provides = Object.create(r)), n[e] = t;
  }
}
function mr(e, t, n = !1) {
  const r = Ac();
  if (r || Tn) {
    let i = Tn ? Tn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && ee(t) ? t.call(r && r.proxy) : t;
  }
}
const Ra = /* @__PURE__ */ Symbol.for("v-scx"), Pa = () => mr(Ra);
function ei(e, t, n) {
  return ko(e, t, n);
}
function ko(e, t, n = he) {
  const { immediate: r, deep: i, flush: s, once: l } = n, c = We({}, n), f = t && r || !t && s !== "post";
  let g;
  if (Yn) {
    if (s === "sync") {
      const L = Pa();
      g = L.__watcherHandles || (L.__watcherHandles = []);
    } else if (!f) {
      const L = () => {
      };
      return L.stop = Ot, L.resume = Ot, L.pause = Ot, L;
    }
  }
  const d = Je;
  c.call = (L, Y, U) => vt(L, d, Y, U);
  let v = !1;
  s === "post" ? c.scheduler = (L) => {
    tt(L, d && d.suspense);
  } : s !== "sync" && (v = !0, c.scheduler = (L, Y) => {
    Y ? L() : Hi(L);
  }), c.augmentJob = (L) => {
    t && (L.flags |= 4), v && (L.flags |= 2, d && (L.id = d.uid, L.i = d));
  };
  const C = Ea(e, t, c);
  return Yn && (g ? g.push(C) : f && C()), C;
}
function Na(e, t, n) {
  const r = this.proxy, i = xe(e) ? e.includes(".") ? Ho(r, e) : () => r[e] : e.bind(r, r);
  let s;
  ee(t) ? s = t : (s = t.handler, n = t);
  const l = Zn(this), c = ko(i, s.bind(r), n);
  return l(), c;
}
function Ho(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Ia = /* @__PURE__ */ Symbol("_vte"), Mr = (e) => e.__isTeleport, ti = /* @__PURE__ */ Symbol("_leaveCb");
function Da(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== $t) {
        t = n;
        break;
      }
  }
  return t;
}
function jo(e) {
  if (!$i(e))
    return Mr(e.type) && e.children ? Da(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ee(n.default))
      return n.default();
  }
}
function ji(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    ji(
      Mr(n.type) && jo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $o(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Tr = /* @__PURE__ */ new WeakMap();
function jn(e, t, n, r, i = !1) {
  if (G(e)) {
    e.forEach(
      (U, Z) => jn(
        U,
        t && (G(t) ? t[Z] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if ($n(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && jn(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? kr(r.component) : r.el, l = i ? null : s, { i: c, r: f } = e, g = t && t.r, d = c.refs === he ? c.refs = {} : c.refs, v = c.setupState, C = /* @__PURE__ */ ae(v), L = v === he ? lo : (U) => gs(d, U) ? !1 : ce(C, U), Y = (U, Z) => !(Z && gs(d, Z));
  if (g != null && g !== f) {
    if (bs(t), xe(g))
      d[g] = null, L(g) && (v[g] = null);
    else if (/* @__PURE__ */ Be(g)) {
      const U = t;
      Y(g, U.k) && (g.value = null), U.k && (d[U.k] = null);
    }
  }
  if (ee(f))
    Jn(f, c, 12, [l, d]);
  else {
    const U = xe(f), Z = /* @__PURE__ */ Be(f);
    if (U || Z) {
      const V = () => {
        if (e.f) {
          const O = U ? L(f) ? v[f] : d[f] : Y() || !e.k ? f.value : d[e.k];
          if (i)
            G(O) && Ri(O, s);
          else if (G(O))
            O.includes(s) || O.push(s);
          else if (U)
            d[f] = [s], L(f) && (v[f] = d[f]);
          else {
            const q = [s];
            Y(f, e.k) && (f.value = q), e.k && (d[e.k] = q);
          }
        } else U ? (d[f] = l, L(f) && (v[f] = l)) : Z && (Y(f, e.k) && (f.value = l), e.k && (d[e.k] = l));
      };
      if (l) {
        const O = () => {
          V(), Tr.delete(e);
        };
        O.id = -1, Tr.set(e, O), tt(O, n);
      } else
        bs(e), V();
    }
  }
}
function bs(e) {
  const t = Tr.get(e);
  t && (t.flags |= 8, Tr.delete(e));
}
Nr().requestIdleCallback;
Nr().cancelIdleCallback;
const $n = (e) => !!e.type.__asyncLoader, $i = (e) => e.type.__isKeepAlive;
function Ma(e, t) {
  Vo(e, "a", t);
}
function La(e, t) {
  Vo(e, "da", t);
}
function Vo(e, t, n = Je) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Lr(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      $i(i.parent.vnode) && Fa(r, t, n, i), i = i.parent;
  }
}
function Fa(e, t, n, r) {
  const i = Lr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Wo(() => {
    Ri(r[t], i);
  }, n);
}
function Lr(e, t, n = Je, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...l) => {
      kt();
      const c = Zn(n), f = vt(t, n, e, l);
      return c(), Ht(), f;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const Vt = (e) => (t, n = Je) => {
  (!Yn || e === "sp") && Lr(e, (...r) => t(...r), n);
}, Ua = Vt("bm"), zo = Vt("m"), ka = Vt(
  "bu"
), Ha = Vt("u"), Bo = Vt(
  "bum"
), Wo = Vt("um"), ja = Vt(
  "sp"
), $a = Vt("rtg"), Va = Vt("rtc");
function za(e, t = Je) {
  Lr("ec", e, t);
}
const Ba = /* @__PURE__ */ Symbol.for("v-ndc");
function He(e, t, n, r) {
  let i;
  const s = n, l = G(e);
  if (l || xe(e)) {
    const c = l && /* @__PURE__ */ on(e);
    let f = !1, g = !1;
    c && (f = !/* @__PURE__ */ pt(e), g = /* @__PURE__ */ jt(e), e = Ir(e)), i = new Array(e.length);
    for (let d = 0, v = e.length; d < v; d++)
      i[d] = t(
        f ? g ? En(_t(e[d])) : _t(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let c = 0; c < e; c++)
      i[c] = t(c + 1, c, void 0, s);
  } else if (de(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (c, f) => t(c, f, void 0, s)
      );
    else {
      const c = Object.keys(e);
      i = new Array(c.length);
      for (let f = 0, g = c.length; f < g; f++) {
        const d = c[f];
        i[f] = t(e[d], d, f, s);
      }
    }
  else
    i = [];
  return i;
}
const Ti = (e) => e ? pl(e) ? kr(e) : Ti(e.parent) : null, Vn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ We(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ti(e.parent),
    $root: (e) => Ti(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ko(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Hi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => Na.bind(e)
  })
), ni = (e, t) => e !== he && !e.__isScriptSetup && ce(e, t), Wa = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: s, accessCache: l, type: c, appContext: f } = e;
    if (t[0] !== "$") {
      const C = l[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (ni(r, t))
          return l[t] = 1, r[t];
        if (i !== he && ce(i, t))
          return l[t] = 2, i[t];
        if (ce(s, t))
          return l[t] = 3, s[t];
        if (n !== he && ce(n, t))
          return l[t] = 4, n[t];
        Si && (l[t] = 0);
      }
    }
    const g = Vn[t];
    let d, v;
    if (g)
      return t === "$attrs" && ze(e.attrs, "get", ""), g(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== he && ce(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      v = f.config.globalProperties, ce(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: s } = e;
    return ni(i, t) ? (i[t] = n, !0) : r !== he && ce(r, t) ? (r[t] = n, !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: s, type: l }
  }, c) {
    let f;
    return !!(n[c] || e !== he && c[0] !== "$" && ce(e, c) || ni(t, c) || ce(s, c) || ce(r, c) || ce(Vn, c) || ce(i.config.globalProperties, c) || (f = l.__cssModules) && f[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function ys(e) {
  return G(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Si = !0;
function qa(e) {
  const t = Ko(e), n = e.proxy, r = e.ctx;
  Si = !1, t.beforeCreate && _s(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: l,
    watch: c,
    provide: f,
    inject: g,
    // lifecycle
    created: d,
    beforeMount: v,
    mounted: C,
    beforeUpdate: L,
    updated: Y,
    activated: U,
    deactivated: Z,
    beforeDestroy: V,
    beforeUnmount: O,
    destroyed: q,
    unmounted: D,
    render: ie,
    renderTracked: we,
    renderTriggered: Te,
    errorCaptured: W,
    serverPrefetch: B,
    // public API
    expose: fe,
    inheritAttrs: pe,
    // assets
    components: ye,
    directives: Ce,
    filters: Re
  } = t;
  if (g && Ka(g, r, null), l)
    for (const ne in l) {
      const J = l[ne];
      ee(J) && (r[ne] = J.bind(n));
    }
  if (i) {
    const ne = i.call(n, n);
    de(ne) && (e.data = /* @__PURE__ */ nn(ne));
  }
  if (Si = !0, s)
    for (const ne in s) {
      const J = s[ne], ke = ee(J) ? J.bind(n, n) : ee(J.get) ? J.get.bind(n, n) : Ot, rt = !ee(J) && ee(J.set) ? J.set.bind(n) : Ot, it = Ae({
        get: ke,
        set: rt
      });
      Object.defineProperty(r, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => it.value,
        set: (Me) => it.value = Me
      });
    }
  if (c)
    for (const ne in c)
      qo(c[ne], r, n, ne);
  if (f) {
    const ne = ee(f) ? f.call(n) : f;
    Reflect.ownKeys(ne).forEach((J) => {
      Oa(J, ne[J]);
    });
  }
  d && _s(d, e, "c");
  function _e(ne, J) {
    G(J) ? J.forEach((ke) => ne(ke.bind(n))) : J && ne(J.bind(n));
  }
  if (_e(Ua, v), _e(zo, C), _e(ka, L), _e(Ha, Y), _e(Ma, U), _e(La, Z), _e(za, W), _e(Va, we), _e($a, Te), _e(Bo, O), _e(Wo, D), _e(ja, B), G(fe))
    if (fe.length) {
      const ne = e.exposed || (e.exposed = {});
      fe.forEach((J) => {
        Object.defineProperty(ne, J, {
          get: () => n[J],
          set: (ke) => n[J] = ke,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ie && e.render === Ot && (e.render = ie), pe != null && (e.inheritAttrs = pe), ye && (e.components = ye), Ce && (e.directives = Ce), B && $o(e);
}
function Ka(e, t, n = Ot) {
  G(e) && (e = Ei(e));
  for (const r in e) {
    const i = e[r];
    let s;
    de(i) ? "default" in i ? s = mr(
      i.from || r,
      i.default,
      !0
    ) : s = mr(i.from || r) : s = mr(i), /* @__PURE__ */ Be(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (l) => s.value = l
    }) : t[r] = s;
  }
}
function _s(e, t, n) {
  vt(
    G(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function qo(e, t, n, r) {
  let i = r.includes(".") ? Ho(n, r) : () => n[r];
  if (xe(e)) {
    const s = t[e];
    ee(s) && ei(i, s);
  } else if (ee(e))
    ei(i, e.bind(n));
  else if (de(e))
    if (G(e))
      e.forEach((s) => qo(s, t, n, r));
    else {
      const s = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(s) && ei(i, s, e);
    }
}
function Ko(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = s.get(t);
  let f;
  return c ? f = c : !i.length && !n && !r ? f = t : (f = {}, i.length && i.forEach(
    (g) => Sr(f, g, l, !0)
  ), Sr(f, t, l)), de(t) && s.set(t, f), f;
}
function Sr(e, t, n, r = !1) {
  const { mixins: i, extends: s } = t;
  s && Sr(e, s, n, !0), i && i.forEach(
    (l) => Sr(e, l, n, !0)
  );
  for (const l in t)
    if (!(r && l === "expose")) {
      const c = Ga[l] || n && n[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const Ga = {
  data: vs,
  props: Ts,
  emits: Ts,
  // objects
  methods: Mn,
  computed: Mn,
  // lifecycle
  beforeCreate: Ye,
  created: Ye,
  beforeMount: Ye,
  mounted: Ye,
  beforeUpdate: Ye,
  updated: Ye,
  beforeDestroy: Ye,
  beforeUnmount: Ye,
  destroyed: Ye,
  unmounted: Ye,
  activated: Ye,
  deactivated: Ye,
  errorCaptured: Ye,
  serverPrefetch: Ye,
  // assets
  components: Mn,
  directives: Mn,
  // watch
  watch: Xa,
  // provide / inject
  provide: vs,
  inject: Ya
};
function vs(e, t) {
  return t ? e ? function() {
    return We(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ya(e, t) {
  return Mn(Ei(e), Ei(t));
}
function Ei(e) {
  if (G(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ye(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Mn(e, t) {
  return e ? We(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ts(e, t) {
  return e ? G(e) && G(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : We(
    /* @__PURE__ */ Object.create(null),
    ys(e),
    ys(t ?? {})
  ) : t;
}
function Xa(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = We(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ye(e[r], t[r]);
  return n;
}
function Go() {
  return {
    app: null,
    config: {
      isNativeTag: lo,
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
let Ja = 0;
function Za(e, t) {
  return function(r, i = null) {
    ee(r) || (r = We({}, r)), i != null && !de(i) && (i = null);
    const s = Go(), l = /* @__PURE__ */ new WeakSet(), c = [];
    let f = !1;
    const g = s.app = {
      _uid: Ja++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Pc,
      get config() {
        return s.config;
      },
      set config(d) {
      },
      use(d, ...v) {
        return l.has(d) || (d && ee(d.install) ? (l.add(d), d.install(g, ...v)) : ee(d) && (l.add(d), d(g, ...v))), g;
      },
      mixin(d) {
        return s.mixins.includes(d) || s.mixins.push(d), g;
      },
      component(d, v) {
        return v ? (s.components[d] = v, g) : s.components[d];
      },
      directive(d, v) {
        return v ? (s.directives[d] = v, g) : s.directives[d];
      },
      mount(d, v, C) {
        if (!f) {
          const L = g._ceVNode || Ut(r, i);
          return L.appContext = s, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(L, d, C), f = !0, g._container = d, d.__vue_app__ = g, kr(L.component);
        }
      },
      onUnmount(d) {
        c.push(d);
      },
      unmount() {
        f && (vt(
          c,
          g._instance,
          16
        ), e(null, g._container), delete g._container.__vue_app__);
      },
      provide(d, v) {
        return s.provides[d] = v, g;
      },
      runWithContext(d) {
        const v = Tn;
        Tn = g;
        try {
          return d();
        } finally {
          Tn = v;
        }
      }
    };
    return g;
  };
}
let Tn = null;
const Qa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${bt(t)}Modifiers`] || e[`${cn(t)}Modifiers`];
function ec(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || he;
  let i = n;
  const s = t.startsWith("update:"), l = s && Qa(r, t.slice(7));
  l && (l.trim && (i = n.map((d) => xe(d) ? d.trim() : d)), l.number && (i = i.map(Pr)));
  let c, f = r[c = Yr(t)] || // also try camelCase event handler (#2249)
  r[c = Yr(bt(t))];
  !f && s && (f = r[c = Yr(cn(t))]), f && vt(
    f,
    e,
    6,
    i
  );
  const g = r[c + "Once"];
  if (g) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, vt(
      g,
      e,
      6,
      i
    );
  }
}
const tc = /* @__PURE__ */ new WeakMap();
function Yo(e, t, n = !1) {
  const r = n ? tc : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let l = {}, c = !1;
  if (!ee(e)) {
    const f = (g) => {
      const d = Yo(g, t, !0);
      d && (c = !0, We(l, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !c ? (de(e) && r.set(e, null), null) : (G(s) ? s.forEach((f) => l[f] = null) : We(l, s), de(e) && r.set(e, l), l);
}
function Fr(e, t) {
  return !e || !Cr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, cn(t)) || ce(e, t));
}
function Ss(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: l,
    attrs: c,
    emit: f,
    render: g,
    renderCache: d,
    props: v,
    data: C,
    setupState: L,
    ctx: Y,
    inheritAttrs: U
  } = e, Z = vr(e);
  let V, O;
  try {
    if (n.shapeFlag & 4) {
      const D = i || r, ie = D;
      V = wt(
        g.call(
          ie,
          D,
          d,
          v,
          L,
          C,
          Y
        )
      ), O = c;
    } else {
      const D = t;
      V = wt(
        D.length > 1 ? D(
          v,
          { attrs: c, slots: l, emit: f }
        ) : D(
          v,
          null
        )
      ), O = t.props ? c : nc(c);
    }
  } catch (D) {
    ln.length = 0, Dr(D, e, 1), V = Ut($t);
  }
  let q = V;
  if (O && U !== !1) {
    const D = Object.keys(O), { shapeFlag: ie } = q;
    D.length && ie & 7 && (s && D.some(Or) && (O = rc(
      O,
      s
    )), q = An(q, O, !1, !0));
  }
  if (n.dirs && (q = An(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const D = Mr(q.type) && jo(q) || q;
    ji(D, n.transition);
  }
  return V = q, vr(Z), V;
}
const nc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Cr(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, rc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Or(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function ic(e, t, n) {
  const { props: r, children: i, component: s } = e, { props: l, children: c, patchFlag: f } = t, g = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return r ? Es(r, l, g) : !!l;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let v = 0; v < d.length; v++) {
        const C = d[v];
        if (Xo(l, r, C) && !Fr(g, C))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : r === l ? !1 : r ? l ? Es(r, l, g) : !0 : !!l;
  return !1;
}
function Es(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (Xo(t, e, s) && !Fr(n, s))
      return !0;
  }
  return !1;
}
function Xo(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && de(r) && de(i) ? !Kt(r, i) : r !== i;
}
function sc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Jo = {}, Zo = () => Object.create(Jo), Qo = (e) => Object.getPrototypeOf(e) === Jo;
function oc(e, t, n, r = !1) {
  const i = {}, s = Zo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), el(e, t, i, s);
  for (const l in e.propsOptions[0])
    l in i || (i[l] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ ha(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function lc(e, t, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: l }
  } = e, c = /* @__PURE__ */ ae(i), [f] = e.propsOptions;
  let g = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const d = e.vnode.dynamicProps;
      for (let v = 0; v < d.length; v++) {
        let C = d[v];
        if (Fr(e.emitsOptions, C))
          continue;
        const L = t[C];
        if (f)
          if (ce(s, C))
            L !== s[C] && (s[C] = L, g = !0);
          else {
            const Y = bt(C);
            i[Y] = Ai(
              f,
              c,
              Y,
              L,
              e,
              !1
            );
          }
        else
          L !== s[C] && (s[C] = L, g = !0);
      }
    }
  } else {
    el(e, t, i, s) && (g = !0);
    let d;
    for (const v in c)
      (!t || // for camelCase
      !ce(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = cn(v)) === v || !ce(t, d))) && (f ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[v] = Ai(
        f,
        c,
        v,
        void 0,
        e,
        !0
      )) : delete i[v]);
    if (s !== c)
      for (const v in s)
        (!t || !ce(t, v)) && (delete s[v], g = !0);
  }
  g && Lt(e.attrs, "set", "");
}
function el(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let l = !1, c;
  if (t)
    for (let f in t) {
      if (Un(f))
        continue;
      const g = t[f];
      let d;
      i && ce(i, d = bt(f)) ? !s || !s.includes(d) ? n[d] = g : (c || (c = {}))[d] = g : Fr(e.emitsOptions, f) || (!(f in r) || g !== r[f]) && (r[f] = g, l = !0);
    }
  if (s) {
    const f = /* @__PURE__ */ ae(n), g = c || he;
    for (let d = 0; d < s.length; d++) {
      const v = s[d];
      n[v] = Ai(
        i,
        f,
        v,
        g[v],
        e,
        !ce(g, v)
      );
    }
  }
  return l;
}
function Ai(e, t, n, r, i, s) {
  const l = e[n];
  if (l != null) {
    const c = ce(l, "default");
    if (c && r === void 0) {
      const f = l.default;
      if (l.type !== Function && !l.skipFactory && ee(f)) {
        const { propsDefaults: g } = i;
        if (n in g)
          r = g[n];
        else {
          const d = Zn(i);
          r = g[n] = f.call(
            null,
            t
          ), d();
        }
      } else
        r = f;
      i.ce && i.ce._setProp(n, r);
    }
    l[
      0
      /* shouldCast */
    ] && (s && !c ? r = !1 : l[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === cn(n)) && (r = !0));
  }
  return r;
}
const ac = /* @__PURE__ */ new WeakMap();
function tl(e, t, n = !1) {
  const r = n ? ac : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const s = e.props, l = {}, c = [];
  let f = !1;
  if (!ee(e)) {
    const d = (v) => {
      f = !0;
      const [C, L] = tl(v, t, !0);
      We(l, C), L && c.push(...L);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !f)
    return de(e) && r.set(e, _n), _n;
  if (G(s))
    for (let d = 0; d < s.length; d++) {
      const v = bt(s[d]);
      As(v) && (l[v] = he);
    }
  else if (s)
    for (const d in s) {
      const v = bt(d);
      if (As(v)) {
        const C = s[d], L = l[v] = G(C) || ee(C) ? { type: C } : We({}, C), Y = L.type;
        let U = !1, Z = !0;
        if (G(Y))
          for (let V = 0; V < Y.length; ++V) {
            const O = Y[V], q = ee(O) && O.name;
            if (q === "Boolean") {
              U = !0;
              break;
            } else q === "String" && (Z = !1);
          }
        else
          U = ee(Y) && Y.name === "Boolean";
        L[
          0
          /* shouldCast */
        ] = U, L[
          1
          /* shouldCastTrue */
        ] = Z, (U || ce(L, "default")) && c.push(v);
      }
    }
  const g = [l, c];
  return de(e) && r.set(e, g), g;
}
function As(e) {
  return e[0] !== "$" && !Un(e);
}
const Vi = (e) => e === "_" || e === "_ctx" || e === "$stable", zi = (e) => G(e) ? e.map(wt) : [wt(e)], cc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ca((...i) => zi(t(...i)), n);
  return r._c = !1, r;
}, nl = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Vi(i)) continue;
    const s = e[i];
    if (ee(s))
      t[i] = cc(i, s, r);
    else if (s != null) {
      const l = zi(s);
      t[i] = () => l;
    }
  }
}, rl = (e, t) => {
  const n = zi(t);
  e.slots.default = () => n;
}, il = (e, t, n) => {
  for (const r in t)
    (n || !Vi(r)) && (e[r] = t[r]);
}, uc = (e, t, n) => {
  const r = e.slots = Zo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (il(r, t, n), n && po(r, "_", i, !0)) : nl(t, r);
  } else t && rl(e, t);
}, fc = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let s = !0, l = he;
  if (r.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? s = !1 : il(i, t, n) : (s = !t.$stable, nl(t, i)), l = t;
  } else t && (rl(e, t), l = { default: 1 });
  if (s)
    for (const c in i)
      !Vi(c) && l[c] == null && delete i[c];
}, tt = gc;
function dc(e) {
  return pc(e);
}
function pc(e, t) {
  const n = Nr();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: l,
    createText: c,
    createComment: f,
    setText: g,
    setElementText: d,
    parentNode: v,
    nextSibling: C,
    setScopeId: L = Ot,
    insertStaticContent: Y
  } = e, U = (a, o, h, x = null, _ = null, E = null, R = void 0, P = null, N = !!o.dynamicChildren) => {
    if (a === o)
      return;
    a && !Pn(a, o) && (x = $e(a), Me(a, _, E, !0), a = null), o.patchFlag === -2 && (N = !1, o.dynamicChildren = null);
    const { type: T, ref: z, shapeFlag: I } = o;
    switch (T) {
      case Ur:
        Z(a, o, h, x);
        break;
      case $t:
        V(a, o, h, x);
        break;
      case ii:
        a == null && O(o, h, x, R);
        break;
      case ge:
        ye(
          a,
          o,
          h,
          x,
          _,
          E,
          R,
          P,
          N
        );
        break;
      default:
        I & 1 ? ie(
          a,
          o,
          h,
          x,
          _,
          E,
          R,
          P,
          N
        ) : I & 6 ? Ce(
          a,
          o,
          h,
          x,
          _,
          E,
          R,
          P,
          N
        ) : (I & 64 || I & 128) && T.process(
          a,
          o,
          h,
          x,
          _,
          E,
          R,
          P,
          N,
          ot
        );
    }
    z != null && _ ? jn(z, a && a.ref, E, o || a, !o) : z == null && a && a.ref != null && jn(a.ref, null, E, a, !0);
  }, Z = (a, o, h, x) => {
    if (a == null)
      r(
        o.el = c(o.children),
        h,
        x
      );
    else {
      const _ = o.el = a.el;
      o.children !== a.children && g(_, o.children);
    }
  }, V = (a, o, h, x) => {
    a == null ? r(
      o.el = f(o.children || ""),
      h,
      x
    ) : o.el = a.el;
  }, O = (a, o, h, x) => {
    [a.el, a.anchor] = Y(
      a.children,
      o,
      h,
      x,
      a.el,
      a.anchor
    );
  }, q = ({ el: a, anchor: o }, h, x) => {
    let _;
    for (; a && a !== o; )
      _ = C(a), r(a, h, x), a = _;
    r(o, h, x);
  }, D = ({ el: a, anchor: o }) => {
    let h;
    for (; a && a !== o; )
      h = C(a), i(a), a = h;
    i(o);
  }, ie = (a, o, h, x, _, E, R, P, N) => {
    if (o.type === "svg" ? R = "svg" : o.type === "math" && (R = "mathml"), a == null)
      we(
        o,
        h,
        x,
        _,
        E,
        R,
        P,
        N
      );
    else {
      const T = a.el && a.el._isVueCE ? a.el : null;
      try {
        T && T._beginPatch(), B(
          a,
          o,
          _,
          E,
          R,
          P,
          N
        );
      } finally {
        T && T._endPatch();
      }
    }
  }, we = (a, o, h, x, _, E, R, P) => {
    let N, T;
    const { props: z, shapeFlag: I, transition: $, dirs: K } = a;
    if (N = a.el = l(
      a.type,
      E,
      z && z.is,
      z
    ), I & 8 ? d(N, a.children) : I & 16 && W(
      a.children,
      N,
      null,
      x,
      _,
      ri(a, E),
      R,
      P
    ), K && Xt(a, null, x, "created"), Te(N, a, a.scopeId, R, x), z) {
      for (const re in z)
        re !== "value" && !Un(re) && s(N, re, null, z[re], E, x);
      "value" in z && s(N, "value", null, z.value, E), (T = z.onVnodeBeforeMount) && Et(T, x, a);
    }
    K && Xt(a, null, x, "beforeMount");
    const Q = hc(_, $);
    Q && $.beforeEnter(N), r(N, o, h), ((T = z && z.onVnodeMounted) || Q || K) && tt(() => {
      T && Et(T, x, a), Q && $.enter(N), K && Xt(a, null, x, "mounted");
    }, _);
  }, Te = (a, o, h, x, _) => {
    if (h && L(a, h), x)
      for (let E = 0; E < x.length; E++)
        L(a, x[E]);
    if (_) {
      let E = _.subTree;
      if (o === E || al(E.type) && (E.ssContent === o || E.ssFallback === o)) {
        const R = _.vnode;
        Te(
          a,
          R,
          R.scopeId,
          R.slotScopeIds,
          _.parent
        );
      }
    }
  }, W = (a, o, h, x, _, E, R, P, N = 0) => {
    for (let T = N; T < a.length; T++) {
      const z = a[T] = P ? Mt(a[T]) : wt(a[T]);
      U(
        null,
        z,
        o,
        h,
        x,
        _,
        E,
        R,
        P
      );
    }
  }, B = (a, o, h, x, _, E, R) => {
    const P = o.el = a.el;
    let { patchFlag: N, dynamicChildren: T, dirs: z } = o;
    N |= a.patchFlag & 16;
    const I = a.props || he, $ = o.props || he;
    let K;
    if (h && Jt(h, !1), (K = $.onVnodeBeforeUpdate) && Et(K, h, o, a), z && Xt(o, a, h, "beforeUpdate"), h && Jt(h, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    T && (!a.dynamicChildren || a.dynamicChildren.length !== T.length) && (N = 0, R = !1, T = null), (I.innerHTML && $.innerHTML == null || I.textContent && $.textContent == null) && d(P, ""), T ? fe(
      a.dynamicChildren,
      T,
      P,
      h,
      x,
      ri(o, _),
      E
    ) : R || J(
      a,
      o,
      P,
      null,
      h,
      x,
      ri(o, _),
      E,
      !1
    ), N > 0) {
      if (N & 16)
        pe(P, I, $, h, _);
      else if (N & 2 && I.class !== $.class && s(P, "class", null, $.class, _), N & 4 && s(P, "style", I.style, $.style, _), N & 8) {
        const Q = o.dynamicProps;
        for (let re = 0; re < Q.length; re++) {
          const te = Q[re], ve = I[te], Ee = $[te];
          (Ee !== ve || te === "value") && s(P, te, ve, Ee, _, h);
        }
      }
      N & 1 && a.children !== o.children && d(P, o.children);
    } else !R && T == null && pe(P, I, $, h, _);
    ((K = $.onVnodeUpdated) || z) && tt(() => {
      K && Et(K, h, o, a), z && Xt(o, a, h, "updated");
    }, x);
  }, fe = (a, o, h, x, _, E, R) => {
    for (let P = 0; P < o.length; P++) {
      const N = a[P], T = o[P], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(N, T) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? v(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      U(
        N,
        T,
        z,
        null,
        x,
        _,
        E,
        R,
        !0
      );
    }
  }, pe = (a, o, h, x, _) => {
    if (o !== h) {
      if (o !== he)
        for (const E in o)
          !Un(E) && !(E in h) && s(
            a,
            E,
            o[E],
            null,
            _,
            x
          );
      for (const E in h) {
        if (Un(E)) continue;
        const R = h[E], P = o[E];
        R !== P && E !== "value" && s(a, E, P, R, _, x);
      }
      "value" in h && s(a, "value", o.value, h.value, _);
    }
  }, ye = (a, o, h, x, _, E, R, P, N) => {
    const T = o.el = a ? a.el : c(""), z = o.anchor = a ? a.anchor : c("");
    let { patchFlag: I, dynamicChildren: $, slotScopeIds: K } = o;
    K && (P = P ? P.concat(K) : K), a == null ? (r(T, h, x), r(z, h, x), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      o.children || [],
      h,
      z,
      _,
      E,
      R,
      P,
      N
    )) : I > 0 && I & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren && a.dynamicChildren.length === $.length ? (fe(
      a.dynamicChildren,
      $,
      h,
      _,
      E,
      R,
      P
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (o.key != null || _ && o === _.subTree) && sl(
      a,
      o,
      !0
      /* shallow */
    )) : J(
      a,
      o,
      h,
      z,
      _,
      E,
      R,
      P,
      N
    );
  }, Ce = (a, o, h, x, _, E, R, P, N) => {
    o.slotScopeIds = P, a == null ? o.shapeFlag & 512 ? _.ctx.activate(
      o,
      h,
      x,
      R,
      N
    ) : Re(
      o,
      h,
      x,
      _,
      E,
      R,
      N
    ) : De(a, o, N);
  }, Re = (a, o, h, x, _, E, R) => {
    const P = a.component = Ec(
      a,
      x,
      _
    );
    if ($i(a) && (P.ctx.renderer = ot), xc(P, !1, R), P.asyncDep) {
      if (_ && _.registerDep(P, _e, R), !a.el) {
        const N = P.subTree = Ut($t);
        V(null, N, o, h), a.placeholder = N.el;
      }
    } else
      _e(
        P,
        a,
        o,
        h,
        _,
        E,
        R
      );
  }, De = (a, o, h) => {
    const x = o.component = a.component;
    if (ic(a, o, h))
      if (x.asyncDep && !x.asyncResolved) {
        ne(x, o, h);
        return;
      } else
        x.next = o, x.update();
    else
      o.el = a.el, x.vnode = o;
  }, _e = (a, o, h, x, _, E, R) => {
    const P = () => {
      if (a.isMounted) {
        let { next: I, bu: $, u: K, parent: Q, vnode: re } = a;
        {
          const Ze = ol(a);
          if (Ze) {
            I && (I.el = re.el, ne(a, I, R)), Ze.asyncDep.then(() => {
              tt(() => {
                a.isUnmounted || T();
              }, _);
            });
            return;
          }
        }
        let te = I, ve;
        Jt(a, !1), I ? (I.el = re.el, ne(a, I, R)) : I = re, $ && hr($), (ve = I.props && I.props.onVnodeBeforeUpdate) && Et(ve, Q, I, re), Jt(a, !0);
        const Ee = Ss(a), qe = a.subTree;
        a.subTree = Ee, U(
          qe,
          Ee,
          // parent may have changed if it's in a teleport
          v(qe.el),
          // anchor may have changed if it's in a fragment
          $e(qe),
          a,
          _,
          E
        ), I.el = Ee.el, te === null && sc(a, Ee.el), K && tt(K, _), (ve = I.props && I.props.onVnodeUpdated) && tt(
          () => Et(ve, Q, I, re),
          _
        );
      } else {
        let I;
        const { el: $, props: K } = o, { bm: Q, m: re, parent: te, root: ve, type: Ee } = a, qe = $n(o);
        Jt(a, !1), Q && hr(Q), !qe && (I = K && K.onVnodeBeforeMount) && Et(I, te, o), Jt(a, !0);
        {
          ve.ce && ve.ce._hasShadowRoot() && ve.ce._injectChildStyle(
            Ee,
            a.parent ? a.parent.type : void 0
          );
          const Ze = a.subTree = Ss(a);
          U(
            null,
            Ze,
            h,
            x,
            a,
            _,
            E
          ), o.el = Ze.el;
        }
        if (re && tt(re, _), !qe && (I = K && K.onVnodeMounted)) {
          const Ze = o;
          tt(
            () => Et(I, te, Ze),
            _
          );
        }
        (o.shapeFlag & 256 || te && $n(te.vnode) && te.vnode.shapeFlag & 256) && a.a && tt(a.a, _), a.isMounted = !0, o = h = x = null;
      }
    };
    a.scope.on();
    const N = a.effect = new bo(P);
    a.scope.off();
    const T = a.update = N.run.bind(N), z = a.job = N.runIfDirty.bind(N);
    z.i = a, z.id = a.uid, N.scheduler = () => Hi(z), Jt(a, !0), T();
  }, ne = (a, o, h) => {
    o.component = a;
    const x = a.vnode.props;
    a.vnode = o, a.next = null, lc(a, o.props, x, h), fc(a, o.children, h), kt(), ms(a), Ht();
  }, J = (a, o, h, x, _, E, R, P, N = !1) => {
    const T = a && a.children, z = a ? a.shapeFlag : 0, I = o.children, { patchFlag: $, shapeFlag: K } = o;
    if ($ > 0) {
      if ($ & 128) {
        rt(
          T,
          I,
          h,
          x,
          _,
          E,
          R,
          P,
          N
        );
        return;
      } else if ($ & 256) {
        ke(
          T,
          I,
          h,
          x,
          _,
          E,
          R,
          P,
          N
        );
        return;
      }
    }
    K & 8 ? (z & 16 && st(T, _, E), I !== T && d(h, I)) : z & 16 ? K & 16 ? rt(
      T,
      I,
      h,
      x,
      _,
      E,
      R,
      P,
      N
    ) : st(T, _, E, !0) : (z & 8 && d(h, ""), K & 16 && W(
      I,
      h,
      x,
      _,
      E,
      R,
      P,
      N
    ));
  }, ke = (a, o, h, x, _, E, R, P, N) => {
    a = a || _n, o = o || _n;
    const T = a.length, z = o.length, I = Math.min(T, z);
    let $;
    for ($ = 0; $ < I; $++) {
      const K = o[$] = N ? Mt(o[$]) : wt(o[$]);
      U(
        a[$],
        K,
        h,
        null,
        _,
        E,
        R,
        P,
        N
      );
    }
    T > z ? st(
      a,
      _,
      E,
      !0,
      !1,
      I
    ) : W(
      o,
      h,
      x,
      _,
      E,
      R,
      P,
      N,
      I
    );
  }, rt = (a, o, h, x, _, E, R, P, N) => {
    let T = 0;
    const z = o.length;
    let I = a.length - 1, $ = z - 1;
    for (; T <= I && T <= $; ) {
      const K = a[T], Q = o[T] = N ? Mt(o[T]) : wt(o[T]);
      if (Pn(K, Q))
        U(
          K,
          Q,
          h,
          null,
          _,
          E,
          R,
          P,
          N
        );
      else
        break;
      T++;
    }
    for (; T <= I && T <= $; ) {
      const K = a[I], Q = o[$] = N ? Mt(o[$]) : wt(o[$]);
      if (Pn(K, Q))
        U(
          K,
          Q,
          h,
          null,
          _,
          E,
          R,
          P,
          N
        );
      else
        break;
      I--, $--;
    }
    if (T > I) {
      if (T <= $) {
        const K = $ + 1, Q = K < z ? o[K].el : x;
        for (; T <= $; )
          U(
            null,
            o[T] = N ? Mt(o[T]) : wt(o[T]),
            h,
            Q,
            _,
            E,
            R,
            P,
            N
          ), T++;
      }
    } else if (T > $)
      for (; T <= I; )
        Me(a[T], _, E, !0), T++;
    else {
      const K = T, Q = T, re = /* @__PURE__ */ new Map();
      for (T = Q; T <= $; T++) {
        const Le = o[T] = N ? Mt(o[T]) : wt(o[T]);
        Le.key != null && re.set(Le.key, T);
      }
      let te, ve = 0;
      const Ee = $ - Q + 1;
      let qe = !1, Ze = 0;
      const ft = new Array(Ee);
      for (T = 0; T < Ee; T++) ft[T] = 0;
      for (T = K; T <= I; T++) {
        const Le = a[T];
        if (ve >= Ee) {
          Me(Le, _, E, !0);
          continue;
        }
        let lt;
        if (Le.key != null)
          lt = re.get(Le.key);
        else
          for (te = Q; te <= $; te++)
            if (ft[te - Q] === 0 && Pn(Le, o[te])) {
              lt = te;
              break;
            }
        lt === void 0 ? Me(Le, _, E, !0) : (ft[lt - Q] = T + 1, lt >= Ze ? Ze = lt : qe = !0, U(
          Le,
          o[lt],
          h,
          null,
          _,
          E,
          R,
          P,
          N
        ), ve++);
      }
      const Gt = qe ? mc(ft) : _n;
      for (te = Gt.length - 1, T = Ee - 1; T >= 0; T--) {
        const Le = Q + T, lt = o[Le], xn = o[Le + 1], wn = Le + 1 < z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          xn.el || ll(xn)
        ) : x;
        ft[T] === 0 ? U(
          null,
          lt,
          h,
          wn,
          _,
          E,
          R,
          P,
          N
        ) : qe && (te < 0 || T !== Gt[te] ? it(lt, h, wn, 2) : te--);
      }
    }
  }, it = (a, o, h, x, _ = null) => {
    const { el: E, type: R, transition: P, children: N, shapeFlag: T } = a;
    if (T & 6) {
      it(a.component.subTree, o, h, x);
      return;
    }
    if (T & 128) {
      a.suspense.move(o, h, x);
      return;
    }
    if (T & 64) {
      R.move(a, o, h, ot);
      return;
    }
    if (R === ge) {
      r(E, o, h);
      for (let I = 0; I < N.length; I++)
        it(N[I], o, h, x);
      r(a.anchor, o, h);
      return;
    }
    if (R === ii) {
      q(a, o, h);
      return;
    }
    if (x !== 2 && T & 1 && P)
      if (x === 0)
        P.persisted && !E[ti] ? r(E, o, h) : (P.beforeEnter(E), r(E, o, h), tt(() => P.enter(E), _));
      else {
        const { leave: I, delayLeave: $, afterLeave: K } = P, Q = () => {
          a.ctx.isUnmounted ? i(E) : r(E, o, h);
        }, re = () => {
          const te = E._isLeaving || !!E[ti];
          E._isLeaving && E[ti](
            !0
            /* cancelled */
          ), P.persisted && !te ? Q() : I(E, () => {
            Q(), K && K();
          });
        };
        $ ? $(E, Q, re) : re();
      }
    else
      r(E, o, h);
  }, Me = (a, o, h, x = !1, _ = !1) => {
    const {
      type: E,
      props: R,
      ref: P,
      children: N,
      dynamicChildren: T,
      shapeFlag: z,
      patchFlag: I,
      dirs: $,
      cacheIndex: K,
      memo: Q
    } = a;
    if (I === -2 && (_ = !1), P != null && (kt(), jn(P, null, h, a, !0), Ht()), K != null && (o.renderCache[K] = void 0), z & 256) {
      o.ctx.deactivate(a);
      return;
    }
    const re = z & 1 && $, te = !$n(a);
    let ve;
    if (te && (ve = R && R.onVnodeBeforeUnmount) && Et(ve, o, a), z & 6)
      Pt(a.component, h, x);
    else {
      if (z & 128) {
        a.suspense.unmount(h, x);
        return;
      }
      re && Xt(a, null, o, "beforeUnmount"), z & 64 ? a.type.remove(
        a,
        o,
        h,
        ot,
        x
      ) : T && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !T.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== ge || I > 0 && I & 64) ? st(
        T,
        o,
        h,
        !1,
        !0
      ) : (E === ge && I & 384 || !_ && z & 16) && st(N, o, h), x && ht(a);
    }
    const Ee = Q != null && K == null;
    (te && (ve = R && R.onVnodeUnmounted) || re || Ee) && tt(() => {
      ve && Et(ve, o, a), re && Xt(a, null, o, "unmounted"), Ee && (a.el = null);
    }, h);
  }, ht = (a) => {
    const { type: o, el: h, anchor: x, transition: _ } = a;
    if (o === ge) {
      oe(h, x);
      return;
    }
    if (o === ii) {
      D(a);
      return;
    }
    const E = () => {
      i(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (a.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: R, delayLeave: P } = _, N = () => R(h, E);
      P ? P(a.el, E, N) : N();
    } else
      E();
  }, oe = (a, o) => {
    let h;
    for (; a !== o; )
      h = C(a), i(a), a = h;
    i(o);
  }, Pt = (a, o, h) => {
    const { bum: x, scope: _, job: E, subTree: R, um: P, m: N, a: T } = a;
    xs(N), xs(T), x && hr(x), _.stop(), E && (E.flags |= 8, Me(R, a, o, h)), P && tt(P, o), tt(() => {
      a.isUnmounted = !0;
    }, o);
  }, st = (a, o, h, x = !1, _ = !1, E = 0) => {
    for (let R = E; R < a.length; R++)
      Me(a[R], o, h, x, _);
  }, $e = (a) => {
    if (a.shapeFlag & 6)
      return $e(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const o = C(a.anchor || a.el), h = o && o[Ia];
    return h ? C(h) : o;
  };
  let Nt = !1;
  const mt = (a, o, h) => {
    let x;
    a == null ? o._vnode && (Me(o._vnode, null, null, !0), x = o._vnode.component) : U(
      o._vnode || null,
      a,
      o,
      null,
      null,
      null,
      h
    ), o._vnode = a, Nt || (Nt = !0, ms(x), Lo(), Nt = !1);
  }, ot = {
    p: U,
    um: Me,
    m: it,
    r: ht,
    mt: Re,
    mc: W,
    pc: J,
    pbc: fe,
    n: $e,
    o: e
  };
  return {
    render: mt,
    hydrate: void 0,
    createApp: Za(mt)
  };
}
function ri({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function hc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sl(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (G(r) && G(i))
    for (let s = 0; s < r.length; s++) {
      const l = r[s];
      let c = i[s];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[s] = Mt(i[s]), c.el = l.el), !n && c.patchFlag !== -2 && sl(l, c)), c.type === Ur && (c.patchFlag === -1 && (c = i[s] = Mt(c)), c.el = l.el), c.type === $t && !c.el && (c.el = l.el);
    }
}
function mc(e) {
  const t = e.slice(), n = [0];
  let r, i, s, l, c;
  const f = e.length;
  for (r = 0; r < f; r++) {
    const g = e[r];
    if (g !== 0) {
      if (i = n[n.length - 1], e[i] < g) {
        t[r] = i, n.push(r);
        continue;
      }
      for (s = 0, l = n.length - 1; s < l; )
        c = s + l >> 1, e[n[c]] < g ? s = c + 1 : l = c;
      g < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, l = n[s - 1]; s-- > 0; )
    n[s] = l, l = t[l];
  return n;
}
function ol(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ol(t);
}
function xs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ll(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ll(t.subTree) : null;
}
const al = (e) => e.__isSuspense;
function gc(e, t) {
  t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : wa(e);
}
const ge = /* @__PURE__ */ Symbol.for("v-fgt"), Ur = /* @__PURE__ */ Symbol.for("v-txt"), $t = /* @__PURE__ */ Symbol.for("v-cmt"), ii = /* @__PURE__ */ Symbol.for("v-stc"), ln = [];
let ut = null;
function k(e = !1) {
  ln.push(ut = e ? null : []);
}
function cl() {
  ln.pop(), ut = ln[ln.length - 1] || null;
}
let Kn = 1;
function ws(e, t = !1) {
  Kn += e, e < 0 && ut && t && (ut.hasOnce = !0);
}
function ul(e) {
  return e.dynamicChildren = Kn > 0 ? ut || _n : null, cl(), Kn > 0 && ut && ut.push(e), e;
}
function H(e, t, n, r, i, s) {
  return ul(
    b(
      e,
      t,
      n,
      r,
      i,
      s,
      !0
    )
  );
}
function bc(e, t, n, r, i) {
  return ul(
    Ut(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function fl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const dl = ({ key: e }) => e ?? null, gr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? xe(e) || /* @__PURE__ */ Be(e) || ee(e) ? { i: dt, r: e, k: t, f: !!n } : e : null);
function b(e, t = null, n = null, r = 0, i = null, s = e === ge ? 0 : 1, l = !1, c = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dl(t),
    ref: t && gr(t),
    scopeId: Uo,
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
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: dt
  };
  return c ? (Er(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= xe(n) ? 8 : 16), Kn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ut && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ut.push(f), f;
}
const Ut = yc;
function yc(e, t = null, n = null, r = 0, i = null, s = !1) {
  if ((!e || e === Ba) && (e = $t), fl(e)) {
    const c = An(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Er(c, n), Kn > 0 && !s && ut && (c.shapeFlag & 6 ? ut[ut.indexOf(e)] = c : ut.push(c)), c.patchFlag = -2, c;
  }
  if (Rc(e) && (e = e.__vccOpts), t) {
    t = _c(t);
    let { class: c, style: f } = t;
    c && !xe(c) && (t.class = zn(c)), de(f) && (/* @__PURE__ */ ki(f) && !G(f) && (f = We({}, f)), t.style = Ni(f));
  }
  const l = xe(e) ? 1 : al(e) ? 128 : Mr(e) ? 64 : de(e) ? 4 : ee(e) ? 2 : 0;
  return b(
    e,
    t,
    n,
    r,
    i,
    l,
    s,
    !0
  );
}
function _c(e) {
  return e ? /* @__PURE__ */ ki(e) || Qo(e) ? We({}, e) : e : null;
}
function An(e, t, n = !1, r = !1) {
  const { props: i, ref: s, patchFlag: l, children: c, transition: f } = e, g = t ? vc(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: g,
    key: g && dl(g),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? G(s) ? s.concat(gr(t)) : [s, gr(t)] : gr(t)
    ) : s,
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
    patchFlag: t && e.type !== ge ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && An(e.ssContent),
    ssFallback: e.ssFallback && An(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && r && ji(
    d,
    f.clone(d)
  ), d;
}
function ue(e = " ", t = 0) {
  return Ut(Ur, null, e, t);
}
function Ne(e = "", t = !1) {
  return t ? (k(), bc($t, null, e)) : Ut($t, null, e);
}
function wt(e) {
  return e == null || typeof e == "boolean" ? Ut($t) : G(e) ? Ut(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : fl(e) ? Mt(e) : Ut(Ur, null, String(e));
}
function Mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : An(e);
}
function Er(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (G(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Er(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Qo(t) ? t._ctx = dt : i === 3 && dt && (dt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ee(t)) {
    if (r & 65) {
      Er(e, { default: t });
      return;
    }
    t = { default: t, _ctx: dt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [ue(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function vc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = zn([t.class, r.class]));
      else if (i === "style")
        t.style = Ni([t.style, r.style]);
      else if (Cr(i)) {
        const s = t[i], l = r[i];
        l && s !== l && !(G(s) && s.includes(l)) ? t[i] = s ? [].concat(s, l) : l : l == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Or(i) && (t[i] = l);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Et(e, t, n, r = null) {
  vt(e, t, 7, [
    n,
    r
  ]);
}
const Tc = Go();
let Sc = 0;
function Ec(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || Tc, s = {
    uid: Sc++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Yl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: tl(r, i),
    emitsOptions: Yo(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: he,
    data: he,
    props: he,
    attrs: he,
    slots: he,
    refs: he,
    setupState: he,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = ec.bind(null, s), e.ce && e.ce(s), s;
}
let Je = null;
const Ac = () => Je || dt;
let Ar, Gn;
{
  const e = Nr(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((l) => l(s)) : i[0](s);
    };
  };
  Ar = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Je = n
  ), Gn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yn = n
  );
}
const Zn = (e) => {
  const t = Je;
  return Ar(e), e.scope.on(), () => {
    e.scope.off(), Ar(t);
  };
}, Cs = () => {
  Je && Je.scope.off(), Ar(null);
};
function pl(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function xc(e, t = !1, n = !1) {
  t && Gn(t);
  const { props: r, children: i } = e.vnode, s = pl(e);
  oc(e, r, s, t), uc(e, i, n || t);
  const l = s ? wc(e, t) : void 0;
  return t && Gn(!1), l;
}
function wc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Wa);
  const { setup: r } = n;
  if (r) {
    kt();
    const i = e.setupContext = r.length > 1 ? Oc(e) : null, s = Zn(e), l = Jn(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), c = ao(l);
    if (Ht(), s(), (c || e.sp) && !$n(e) && $o(e), c) {
      if (l.then(Cs, Cs), t)
        return l.then((f) => {
          Gn(!0);
          try {
            Os(e, f, t);
          } finally {
            Gn(!1);
          }
        }).catch((f) => {
          Dr(f, e, 0);
        });
      e.asyncDep = l;
    } else
      Os(e, l);
  } else
    hl(e);
}
function Os(e, t, n) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = No(t)), hl(e);
}
function hl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ot);
  {
    const i = Zn(e);
    kt();
    try {
      qa(e);
    } finally {
      Ht(), i();
    }
  }
}
const Cc = {
  get(e, t) {
    return ze(e, "get", ""), e[t];
  }
};
function Oc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Cc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function kr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(No(ma(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Vn)
        return Vn[n](e);
    },
    has(t, n) {
      return n in t || n in Vn;
    }
  })) : e.proxy;
}
function Rc(e) {
  return ee(e) && "__vccOpts" in e;
}
const Ae = (e, t) => /* @__PURE__ */ Ta(e, t, Yn), Pc = "3.5.42";
let xi;
const Rs = typeof window < "u" && window.trustedTypes;
if (Rs)
  try {
    xi = /* @__PURE__ */ Rs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ml = xi ? (e) => xi.createHTML(e) : (e) => e, Nc = "http://www.w3.org/2000/svg", Ic = "http://www.w3.org/1998/Math/MathML", Dt = typeof document < "u" ? document : null, Ps = Dt && /* @__PURE__ */ Dt.createElement("template"), Dc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? Dt.createElementNS(Nc, e) : t === "mathml" ? Dt.createElementNS(Ic, e) : n ? Dt.createElement(e, { is: n }) : Dt.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => Dt.createTextNode(e),
  createComment: (e) => Dt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Dt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, s) {
    const l = n ? n.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Ps.innerHTML = ml(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Ps.content;
      if (r === "svg" || r === "mathml") {
        const f = c.firstChild;
        for (; f.firstChild; )
          c.appendChild(f.firstChild);
        c.removeChild(f);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Mc = /* @__PURE__ */ Symbol("_vtc");
function Lc(e, t, n) {
  const r = e[Mc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ns = /* @__PURE__ */ Symbol("_vod"), Fc = /* @__PURE__ */ Symbol("_vsh"), Uc = /* @__PURE__ */ Symbol(""), kc = /(?:^|;)\s*display\s*:/;
function Hc(e, t, n) {
  const r = e.style, i = xe(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (xe(t))
        for (const l of t.split(";")) {
          const c = l.slice(0, l.indexOf(":")).trim();
          n[c] == null && Ln(r, c, "");
        }
      else
        for (const l in t)
          n[l] == null && Ln(r, l, "");
    for (const l in n) {
      l === "display" && (s = !0);
      const c = n[l];
      c != null ? $c(
        e,
        l,
        !xe(t) && t ? t[l] : void 0,
        c
      ) || Ln(r, l, c) : Ln(r, l, "");
    }
  } else if (i) {
    if (t !== n) {
      const l = r[Uc];
      l && (n += ";" + l), r.cssText = n, s = kc.test(n);
    }
  } else t && e.removeAttribute("style");
  Ns in e && (e[Ns] = s ? r.display : "", e[Fc] && (r.display = "none"));
}
const ur = /\s*!important$/;
function Ln(e, t, n) {
  if (G(n))
    n.forEach((r) => Ln(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    ur.test(n) ? e.setProperty(t, n.replace(ur, ""), "important") : e.setProperty(t, n);
  else {
    const r = jc(e, t);
    ur.test(n) ? e.setProperty(
      cn(r),
      n.replace(ur, ""),
      "important"
    ) : e[r] = n;
  }
}
const Is = ["Webkit", "Moz", "ms"], si = {};
function jc(e, t) {
  const n = si[t];
  if (n)
    return n;
  let r = bt(t);
  if (r !== "filter" && r in e)
    return si[t] = r;
  r = fo(r);
  for (let i = 0; i < Is.length; i++) {
    const s = Is[i] + r;
    if (s in e)
      return si[t] = s;
  }
  return t;
}
function $c(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && xe(r) && n === r;
}
const Ds = "http://www.w3.org/1999/xlink";
function Ms(e, t, n, r, i, s = ql(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ds, t.slice(6, t.length)) : e.setAttributeNS(Ds, t, n) : n == null || s && !ho(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Rt(n) ? String(n) : n
  );
}
function Ls(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ml(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const c = s === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = ho(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(i || t);
}
function tn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Vc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Fs = /* @__PURE__ */ Symbol("_vei");
function zc(e, t, n, r, i = null) {
  const s = e[Fs] || (e[Fs] = {}), l = s[t];
  if (r && l)
    l.value = r;
  else {
    const [c, f] = qc(t);
    if (r) {
      const g = s[t] = Yc(
        r,
        i
      );
      tn(e, c, g, f);
    } else l && (Vc(e, c, l, f), s[t] = void 0);
  }
}
const Bc = /(Once|Passive|Capture)$/, Wc = /^on:?(?:Once|Passive|Capture)$/;
function qc(e) {
  let t, n;
  for (; (n = e.match(Bc)) && !Wc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : cn(e.slice(2)), t];
}
let oi = 0;
const Kc = /* @__PURE__ */ Promise.resolve(), Gc = () => oi || (Kc.then(() => oi = 0), oi = Date.now());
function Yc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const i = n.value;
    if (G(i)) {
      const s = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        s.call(r), r._stopped = !0;
      };
      const l = i.slice(), c = [r];
      for (let f = 0; f < l.length && !r._stopped; f++) {
        const g = l[f];
        g && vt(
          g,
          t,
          5,
          c
        );
      }
    } else
      vt(
        i,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Gc(), n;
}
const Us = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xc = (e, t, n, r, i, s) => {
  const l = i === "svg";
  t === "class" ? Lc(e, r, l) : t === "style" ? Hc(e, n, r) : Cr(t) ? Or(t) || zc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Jc(e, t, r, l)) ? (Ls(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ms(e, t, r, l, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Zc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !xe(r))) ? Ls(e, bt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ms(e, t, r, l));
};
function Jc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Us(t) && ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Us(t) && xe(n) ? !1 : t in e;
}
function Zc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = bt(t);
  return Array.isArray(n) ? n.some((i) => bt(i) === r) : Object.keys(n).some((i) => bt(i) === r);
}
const xr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return G(t) ? (n) => hr(t, n) : t;
};
function Qc(e) {
  e.target.composing = !0;
}
function ks(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const rn = /* @__PURE__ */ Symbol("_assign"), fr = /* @__PURE__ */ Symbol("_initialValue");
function li(e, t, n) {
  return t && (e = e.trim()), n && (e = Pr(e)), e;
}
const ai = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e.parentNode && (e.type === "text" ? e[fr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[fr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[rn] = xr(i);
    const s = r || i.props && i.props.type === "number";
    tn(e, t ? "change" : "input", (l) => {
      l.target.composing || e[rn](li(e.value, n, s));
    }), (n || s) && tn(e, "change", () => {
      e.value = li(e.value, n, s);
    }), t || (tn(e, "compositionstart", Qc), tn(e, "compositionend", ks), tn(e, "change", ks));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const i = t ?? "", s = e[fr];
    delete e[fr], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[rn](li(e.value, n, r)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: s } }, l) {
    if (e[rn] = xr(l), e.composing) return;
    const c = (s || e.type === "number") && !/^0\d/.test(e.value) ? Pr(e.value) : e.value, f = t ?? "";
    if (c === f)
      return;
    const g = e.getRootNode();
    (g instanceof Document || g instanceof ShadowRoot) && g.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === f) || (e.value = f);
  }
}, Ge = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, tn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => n ? Pr(wr(f)) : wr(f)
      ), s = e.multiple, l = s ? an(e._modelValue) ? new Set(i) : i : i[0], c = e._pendingValue = [
        s,
        s ? G(l) ? i.slice() : i : l
      ];
      try {
        e[rn](l);
      } finally {
        Do(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[rn] = xr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Hs(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[rn] = xr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !eu(t, n[1], n[0])) && Hs(e, t);
  }
};
function eu(e, t, n) {
  if (!n || G(e)) return Kt(e, t);
  if (an(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Hs(e, t) {
  const n = e.multiple, r = G(t);
  if (!(n && !r && !an(t))) {
    for (let i = 0, s = e.options.length; i < s; i++) {
      const l = e.options[i], c = wr(l);
      if (n)
        if (r) {
          const f = typeof c;
          f === "string" || f === "number" ? l.selected = t.some((g) => String(g) === String(c)) : l.selected = Gl(t, c) > -1;
        } else
          l.selected = t.has(c);
      else if (Kt(wr(l), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function wr(e) {
  return "_value" in e ? e._value : e.value;
}
const tu = ["ctrl", "shift", "alt", "meta"], nu = {
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
  exact: (e, t) => tu.some((n) => e[`${n}Key`] && !t.includes(n))
}, dr = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...s) => {
    for (let l = 0; l < t.length; l++) {
      const c = nu[t[l]];
      if (c && c(i, t)) return;
    }
    return e(i, ...s);
  }));
}, ru = /* @__PURE__ */ We({ patchProp: Xc }, Dc);
let js;
function iu() {
  return js || (js = dc(ru));
}
const su = ((...e) => {
  const t = iu().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = lu(r);
    if (!i) return;
    const s = t._component;
    !ee(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const l = n(i, !1, ou(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), l;
  }, t;
});
function ou(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function lu(e) {
  return xe(e) ? document.querySelector(e) : e;
}
function au(e, t, n) {
  const r = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(r))
    return window._nc_initial_state.get(r);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const i = document.querySelector(r);
  if (i === null) {
    if (n !== void 0)
      return n;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const s = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(r, s), s;
  } catch (s) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: s }), n !== void 0)
      return n;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: s });
  }
}
function $s(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function cu(e) {
  if (Array.isArray(e)) return e;
}
function uu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, s, l, c = [], f = !0, g = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(f = (r = s.call(n)).done) && (c.push(r.value), c.length !== t); f = !0) ;
    } catch (d) {
      g = !0, i = d;
    } finally {
      try {
        if (!f && n.return != null && (l = n.return(), Object(l) !== l)) return;
      } finally {
        if (g) throw i;
      }
    }
    return c;
  }
}
function fu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function du(e, t) {
  return cu(e) || uu(e, t) || pu(e, t) || fu();
}
function pu(e, t) {
  if (e) {
    if (typeof e == "string") return $s(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? $s(e, t) : void 0;
  }
}
const gl = Object.entries, Vs = Object.setPrototypeOf, hu = Object.isFrozen, mu = Object.getPrototypeOf, gu = Object.getOwnPropertyDescriptor;
let Ie = Object.freeze, Ue = Object.seal, yn = Object.create, bl = typeof Reflect < "u" && Reflect, wi = bl.apply, Ci = bl.construct;
Ie || (Ie = function(t) {
  return t;
});
Ue || (Ue = function(t) {
  return t;
});
wi || (wi = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
Ci || (Ci = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const en = Pe(Array.prototype.forEach), bu = Pe(Array.prototype.lastIndexOf), zs = Pe(Array.prototype.pop), Nn = Pe(Array.prototype.push), yu = Pe(Array.prototype.splice), Sn = Array.isArray, Fn = Pe(String.prototype.toLowerCase), ci = Pe(String.prototype.toString), Bs = Pe(String.prototype.match), In = Pe(String.prototype.replace), Ws = Pe(String.prototype.indexOf), _u = Pe(String.prototype.trim), vu = Pe(Number.prototype.toString), Tu = Pe(Boolean.prototype.toString), qs = typeof BigInt > "u" ? null : Pe(BigInt.prototype.toString), Ks = typeof Symbol > "u" ? null : Pe(Symbol.prototype.toString), nt = Pe(Object.prototype.hasOwnProperty), Dn = Pe(Object.prototype.toString), Ve = Pe(RegExp.prototype.test), Zt = Su(TypeError);
function Pe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return wi(e, t, r);
  };
}
function Su(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Ci(e, n);
  };
}
function se(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Fn;
  if (Vs && Vs(e, null), !Sn(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (hu(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Eu(e) {
  for (let t = 0; t < e.length; t++)
    nt(e, t) || (e[t] = null);
  return e;
}
function ct(e) {
  const t = yn(null);
  for (const r of gl(e)) {
    var n = du(r, 2);
    const i = n[0], s = n[1];
    nt(e, i) && (Sn(s) ? t[i] = Eu(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = ct(s) : t[i] = s);
  }
  return t;
}
function Au(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return vu(e);
    case "boolean":
      return Tu(e);
    case "bigint":
      return qs ? qs(e) : "0";
    case "symbol":
      return Ks ? Ks(e) : "Symbol()";
    case "undefined":
      return Dn(e);
    case "function":
    case "object": {
      if (e === null)
        return Dn(e);
      const t = e, n = gt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Dn(r);
      }
      return Dn(e);
    }
    default:
      return Dn(e);
  }
}
function gt(e, t) {
  for (; e !== null; ) {
    const r = gu(e, t);
    if (r) {
      if (r.get)
        return Pe(r.get);
      if (typeof r.value == "function")
        return Pe(r.value);
    }
    e = mu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function xu(e) {
  try {
    return Ve(e, ""), !0;
  } catch {
    return !1;
  }
}
const Gs = Ie(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ui = Ie(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), fi = Ie(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), wu = Ie(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), di = Ie(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Cu = Ie(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ys = Ie(["#text"]), Xs = Ie(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), pi = Ie(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Js = Ie(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pr = Ie(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ou = Ue(/{{[\w\W]*|^[\w\W]*}}/g), Ru = Ue(/<%[\w\W]*|^[\w\W]*%>/g), Pu = Ue(/\${[\w\W]*/g), Nu = Ue(/^data-[\-\w.\u00B7-\uFFFF]+$/), Iu = Ue(/^aria-[\-\w]+$/), Zs = Ue(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = Ue(/^(?:\w+script|data):/i), Mu = Ue(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Lu = Ue(/^html$/i), Fu = Ue(/^[a-z][.\w]*(-[.\w]+)+$/i), Qs = Ue(/<[/\w!]/g), eo = Ue(/<[/\w]/g), Uu = Ue(/<\/no(script|embed|frames)/i), ku = Ue(/\/>/i), at = {
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
}, yl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Hu = Ie(se({}, yl)), ju = (function() {
  const e = {};
  return en(yl, (t) => {
    e[t] = Ue(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ie(e);
})(), $u = function() {
  return typeof window > "u" ? null : window;
}, Vu = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  n && n.hasAttribute(i) && (r = n.getAttribute(i));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(s, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, to = function() {
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
}, Bt = function(t, n, r, i) {
  return nt(t, n) && Sn(t[n]) ? se(i.base ? ct(i.base) : {}, t[n], i.transform) : r;
}, hi = function(t, n, r) {
  const i = nt(t, n) ? t[n] : void 0;
  return i && typeof i == "object" ? ct(i) : r();
};
function _l() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $u();
  const t = (w) => _l(w);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== at.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, l = e.Node, c = e.Element, f = e.NodeFilter, g = e.NamedNodeMap;
  g === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const d = e.DOMParser, v = e.trustedTypes, C = c.prototype, L = gt(C, "cloneNode"), Y = gt(C, "remove"), U = gt(C, "nextSibling"), Z = gt(C, "childNodes"), V = gt(C, "parentNode"), O = gt(C, "shadowRoot"), q = gt(C, "attributes"), D = l && l.prototype ? gt(l.prototype, "nodeType") : null, ie = l && l.prototype ? gt(l.prototype, "nodeName") : null, we = l && l.prototype ? gt(l.prototype, "ownerDocument") : null, Te = function(u) {
    return D ? D(u) : u.nodeType;
  }, W = function(u) {
    return ie ? ie(u) : u.nodeName;
  };
  if (typeof s == "function") {
    const w = n.createElement("template");
    w.content && w.content.ownerDocument && (n = w.content.ownerDocument);
  }
  let B, fe = "", pe, ye = !1, Ce = 0;
  const Re = function() {
    if (Ce > 0)
      throw Zt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, De = function(u) {
    Re(), Ce++;
    try {
      return B.createHTML(u);
    } finally {
      Ce--;
    }
  }, _e = function(u) {
    Re(), Ce++;
    try {
      return B.createScriptURL(u);
    } finally {
      Ce--;
    }
  }, ne = function() {
    return ye || (pe = Vu(v, i), ye = !0), pe;
  }, J = n, ke = J.implementation, rt = J.createNodeIterator, it = J.createDocumentFragment, Me = J.getElementsByTagName, ht = r.importNode;
  let oe = to();
  t.isSupported = typeof gl == "function" && typeof V == "function" && ke && ke.createHTMLDocument !== void 0;
  const Pt = Ou, st = Ru, $e = Pu, Nt = Nu, mt = Iu, ot = Du, F = Mu, a = Fu;
  let o = Zs, h = null;
  const x = se({}, [...Gs, ...ui, ...fi, ...di, ...Ys]);
  let _ = null;
  const E = se({}, [...Xs, ...pi, ...Js, ...pr]);
  let R = Object.seal(yn(null, {
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
  })), P = null, N = null;
  const T = Object.seal(yn(null, {
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
  let z = !0, I = !0, $ = !1, K = !0, Q = !1, re = !0, te = !1, ve = !1, Ee = null, qe = null, Ze = !1, ft = !1, Gt = !1, Le = !1, lt = !0, xn = !1;
  const wn = "user-content-";
  let Hr = !0, jr = !1, un = {}, fn = null;
  const Bi = se({}, [
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
  let Wi = null;
  const qi = se({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ki = null;
  const Gi = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Qn = "http://www.w3.org/1998/Math/MathML", er = "http://www.w3.org/2000/svg", Tt = "http://www.w3.org/1999/xhtml";
  let dn = Tt, $r = !1, Vr = null;
  const Tl = se({}, [Qn, er, Tt], ci), Yi = Ie(["mi", "mo", "mn", "ms", "mtext"]);
  let zr = se({}, Yi);
  const Xi = Ie(["annotation-xml"]);
  let Br = se({}, Xi);
  const Sl = se({}, ["title", "style", "font", "a", "script"]);
  let Cn = null;
  const El = ["application/xhtml+xml", "text/html"], Al = "text/html";
  let Oe = null, pn = null;
  const xl = n.createElement("form"), Ji = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, Wr = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (pn && pn === u)
      return;
    (!u || typeof u != "object") && (u = {}), u = ct(u), Cn = // eslint-disable-next-line unicorn/prefer-includes
    El.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? Al : u.PARSER_MEDIA_TYPE, Oe = Cn === "application/xhtml+xml" ? ci : Fn, h = Bt(u, "ALLOWED_TAGS", x, {
      transform: Oe
    }), _ = Bt(u, "ALLOWED_ATTR", E, {
      transform: Oe
    }), Vr = Bt(u, "ALLOWED_NAMESPACES", Tl, {
      transform: ci
    }), Ki = Bt(u, "ADD_URI_SAFE_ATTR", Gi, {
      transform: Oe,
      base: Gi
    }), Wi = Bt(u, "ADD_DATA_URI_TAGS", qi, {
      transform: Oe,
      base: qi
    }), fn = Bt(u, "FORBID_CONTENTS", Bi, {
      transform: Oe
    }), P = Bt(u, "FORBID_TAGS", ct({}), {
      transform: Oe
    }), N = Bt(u, "FORBID_ATTR", ct({}), {
      transform: Oe
    }), un = nt(u, "USE_PROFILES") ? u.USE_PROFILES && typeof u.USE_PROFILES == "object" ? ct(u.USE_PROFILES) : u.USE_PROFILES : !1, z = u.ALLOW_ARIA_ATTR !== !1, I = u.ALLOW_DATA_ATTR !== !1, $ = u.ALLOW_UNKNOWN_PROTOCOLS || !1, K = u.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = u.SAFE_FOR_TEMPLATES || !1, re = u.SAFE_FOR_XML !== !1, te = u.WHOLE_DOCUMENT || !1, ft = u.RETURN_DOM || !1, Gt = u.RETURN_DOM_FRAGMENT || !1, Le = u.RETURN_TRUSTED_TYPE || !1, Ze = u.FORCE_BODY || !1, lt = u.SANITIZE_DOM !== !1, xn = u.SANITIZE_NAMED_PROPS || !1, Hr = u.KEEP_CONTENT !== !1, jr = u.IN_PLACE || !1, o = xu(u.ALLOWED_URI_REGEXP) ? u.ALLOWED_URI_REGEXP : Zs, dn = typeof u.NAMESPACE == "string" ? u.NAMESPACE : Tt, zr = hi(
      u,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => se({}, Yi)
      // Default built-in map
    ), Br = hi(
      u,
      "HTML_INTEGRATION_POINTS",
      () => se({}, Xi)
      // Default built-in map
    );
    const m = hi(u, "CUSTOM_ELEMENT_HANDLING", () => yn(null));
    if (R = yn(null), nt(m, "tagNameCheck") && Ji(m.tagNameCheck) && (R.tagNameCheck = m.tagNameCheck), nt(m, "attributeNameCheck") && Ji(m.attributeNameCheck) && (R.attributeNameCheck = m.attributeNameCheck), nt(m, "allowCustomizedBuiltInElements") && typeof m.allowCustomizedBuiltInElements == "boolean" && (R.allowCustomizedBuiltInElements = m.allowCustomizedBuiltInElements), Ue(R), Q && (I = !1), Gt && (ft = !0), un && (h = se({}, Ys), _ = yn(null), un.html === !0 && (se(h, Gs), se(_, Xs)), un.svg === !0 && (se(h, ui), se(_, pi), se(_, pr)), un.svgFilters === !0 && (se(h, fi), se(_, pi), se(_, pr)), un.mathMl === !0 && (se(h, di), se(_, Js), se(_, pr))), T.tagCheck = null, T.attributeCheck = null, nt(u, "ADD_TAGS") && (typeof u.ADD_TAGS == "function" ? T.tagCheck = u.ADD_TAGS : Sn(u.ADD_TAGS) && (h === x && (h = ct(h)), se(h, u.ADD_TAGS, Oe))), nt(u, "ADD_ATTR") && (typeof u.ADD_ATTR == "function" ? T.attributeCheck = u.ADD_ATTR : Sn(u.ADD_ATTR) && (_ === E && (_ = ct(_)), se(_, u.ADD_ATTR, Oe))), nt(u, "ADD_FORBID_CONTENTS") && Sn(u.ADD_FORBID_CONTENTS) && (fn === Bi && (fn = ct(fn)), se(fn, u.ADD_FORBID_CONTENTS, Oe)), Hr && (h["#text"] = !0), te && se(h, ["html", "head", "body"]), h.table && (se(h, ["tbody"]), delete P.tbody), u.TRUSTED_TYPES_POLICY) {
      if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const A = B;
      B = u.TRUSTED_TYPES_POLICY;
      try {
        fe = De("");
      } catch (M) {
        throw B = A, M;
      }
    } else u.TRUSTED_TYPES_POLICY === null ? (B = void 0, fe = "") : (B === void 0 && (B = ne()), B && typeof fe == "string" && (fe = De("")));
    Ie && Ie(u), pn = u;
  }, Zi = se({}, [...ui, ...fi, ...wu]), Qi = se({}, [...di, ...Cu]), wl = function(u, m, A) {
    return m.namespaceURI === Tt ? u === "svg" : m.namespaceURI === Qn ? u === "svg" && (A === "annotation-xml" || zr[A]) : !!Zi[u];
  }, Cl = function(u, m, A) {
    return m.namespaceURI === Tt ? u === "math" : m.namespaceURI === er ? u === "math" && Br[A] : !!Qi[u];
  }, Ol = function(u, m, A) {
    return m.namespaceURI === er && !Br[A] || m.namespaceURI === Qn && !zr[A] ? !1 : !Qi[u] && (Sl[u] || !Zi[u]);
  }, Rl = function(u) {
    let m = V(u);
    (!m || !m.tagName) && (m = {
      namespaceURI: dn,
      tagName: "template"
    });
    const A = Fn(u.tagName), M = Fn(m.tagName);
    return Vr[u.namespaceURI] ? u.namespaceURI === er ? wl(A, m, M) : u.namespaceURI === Qn ? Cl(A, m, M) : u.namespaceURI === Tt ? Ol(A, m, M) : !!(Cn === "application/xhtml+xml" && Vr[u.namespaceURI]) : !1;
  }, zt = function(u) {
    Nn(t.removed, {
      element: u
    });
    try {
      V(u).removeChild(u);
    } catch {
      if (Y(u), !V(u))
        throw Zt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, es = function(u, m, A) {
    try {
      u.removeAttributeNode(m);
    } catch {
      try {
        u.removeAttribute(A);
      } catch {
      }
    }
  }, tr = function(u) {
    nr(u);
    const m = Z(u);
    if (m) {
      const M = [];
      en(m, (j) => {
        Nn(M, j);
      }), en(M, (j) => {
        try {
          Y(j);
        } catch {
        }
      });
    }
    const A = q(u);
    if (A)
      for (let M = A.length - 1; M >= 0; --M) {
        const j = A[M], X = j && j.name;
        typeof X == "string" && es(u, j, X);
      }
  }, Yt = function(u, m, A) {
    if (!A)
      try {
        A = m.getAttributeNode(u);
      } catch {
        A = null;
      }
    Nn(t.removed, {
      attribute: A || null,
      from: m
    });
    try {
      A ? m.removeAttributeNode(A) : m.removeAttribute(u);
    } catch {
      try {
        m.removeAttribute(u);
      } catch {
      }
    }
    if (u === "is")
      if (ft || Gt)
        try {
          zt(m);
        } catch {
        }
      else
        try {
          m.setAttribute(u, "");
        } catch {
        }
  }, Pl = function(u) {
    const m = q(u);
    if (m)
      for (let A = m.length - 1; A >= 0; --A) {
        const M = m[A], j = M && M.name;
        typeof j != "string" || _[Oe(j)] || es(u, M, j);
      }
  }, nr = function(u) {
    const m = [u];
    for (; m.length > 0; ) {
      const A = m.pop();
      Te(A) === at.element && Pl(A);
      const j = Z(A);
      if (j)
        for (let X = j.length - 1; X >= 0; --X)
          m.push(j[X]);
    }
  }, ts = function(u, m) {
    return re ? u === "patchsrc" ? !0 : u === "for" && m !== "label" && m !== "output" : !1;
  }, Nl = function(u) {
    if (!re)
      return;
    const m = [u];
    for (; m.length > 0; ) {
      const A = m.pop(), M = Te(A);
      if (M === at.processingInstruction || M === at.comment && Ve(eo, A.data)) {
        try {
          Y(A);
        } catch {
        }
        continue;
      }
      if (M === at.element) {
        const X = A, me = Oe(W(A));
        try {
          X.hasAttribute && X.hasAttribute("patchsrc") && X.removeAttribute("patchsrc"), X.hasAttribute && X.hasAttribute("for") && ts("for", me) && X.removeAttribute("for");
        } catch {
        }
      }
      const j = Z(A);
      if (j)
        for (let X = j.length - 1; X >= 0; --X)
          m.push(j[X]);
    }
  }, ns = function(u) {
    let m = null, A = null;
    if (Ze)
      u = "<remove></remove>" + u;
    else {
      const X = Bs(u, /^[\r\n\t ]+/);
      A = X && X[0];
    }
    Cn === "application/xhtml+xml" && dn === Tt && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const M = B ? De(u) : u;
    if (dn === Tt)
      try {
        m = new d().parseFromString(M, Cn);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = ke.createDocument(dn, "template", null);
      try {
        m.documentElement.innerHTML = $r ? fe : M;
      } catch {
      }
    }
    const j = m.body || m.documentElement;
    return u && A && j.insertBefore(n.createTextNode(A), j.childNodes[0] || null), dn === Tt ? Me.call(m, te ? "html" : "body")[0] : te ? m.documentElement : j;
  }, rs = function(u) {
    const m = we ? we(u) : u.ownerDocument;
    return rt.call(
      m || u,
      u,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, rr = function(u) {
    return u = In(u, Pt, " "), u = In(u, st, " "), u = In(u, $e, " "), u;
  }, qr = function(u) {
    var m;
    u.normalize();
    const A = we ? we(u) : u.ownerDocument, M = rt.call(
      A || u,
      u,
      // eslint-disable-next-line no-bitwise
      f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let j = M.nextNode();
    for (; j; )
      j.data = rr(j.data), j = M.nextNode();
    const X = (m = u.querySelectorAll) === null || m === void 0 ? void 0 : m.call(u, "template");
    X && en(X, (me) => {
      hn(me.content) && qr(me.content);
    });
  }, ir = function(u) {
    const m = ie ? ie(u) : null;
    return typeof m != "string" || Oe(m) !== "form" ? !1 : typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    u.attributes !== q(u) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    u.nodeType !== D(u) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    u.childNodes !== Z(u);
  }, hn = function(u) {
    if (!D || typeof u != "object" || u === null)
      return !1;
    try {
      return D(u) === at.documentFragment;
    } catch {
      return !1;
    }
  }, On = function(u) {
    if (!D || typeof u != "object" || u === null)
      return !1;
    try {
      return typeof D(u) == "number";
    } catch {
      return !1;
    }
  };
  function St(w, u, m) {
    w.length !== 0 && en(w, (A) => {
      A.call(t, u, m, pn);
    });
  }
  const Il = function(u, m) {
    return !!(re && u.hasChildNodes() && !On(u.firstElementChild) && Ve(Qs, u.textContent) && Ve(Qs, u.innerHTML) || re && u.namespaceURI === Tt && Hu[m] && (On(u.firstElementChild) || typeof u.textContent == "string" && Ve(ju[m], u.textContent)) || u.nodeType === at.processingInstruction || re && u.nodeType === at.comment && Ve(eo, u.data));
  }, sr = function(u, m) {
    if (u instanceof RegExp)
      return Ve(u, m);
    if (u instanceof Function) {
      for (var A = arguments.length, M = new Array(A > 2 ? A - 2 : 0), j = 2; j < A; j++)
        M[j - 2] = arguments[j];
      return !!u(m, ...M);
    }
    return !1;
  }, Dl = function(u, m, A) {
    if (!P[m] && as(m) && sr(R.tagNameCheck, m))
      return !1;
    if (Hr && !fn[m]) {
      const M = V(u), j = Z(u);
      if (j && M) {
        const X = j.length;
        for (let me = X - 1; me >= 0; --me) {
          const Se = u === A ? L(j[me], !0) : j[me];
          M.insertBefore(Se, U(u));
        }
      }
    }
    return zt(u), !0;
  }, is = function(u, m, A, M) {
    return u.length === 0 ? m : m === A || m === M ? ct(m) : m;
  }, ss = function(u, m) {
    return u === m || V(u) !== null ? !1 : (jr && nr(u), !0);
  }, os = function(u, m) {
    if (St(oe.beforeSanitizeElements, u, null), ss(u, m))
      return !0;
    if (ir(u))
      return zt(u), !0;
    const A = Oe(W(u));
    if (h = is(oe.uponSanitizeElement, h, x, Ee), St(oe.uponSanitizeElement, u, {
      tagName: A,
      allowedTags: h
    }), ss(u, m))
      return !0;
    if (Il(u, A))
      return zt(u), !0;
    if (P[A] || !(T.tagCheck instanceof Function && T.tagCheck(A)) && !h[A]) {
      const j = Dl(u, A, m);
      return j === !1 && St(oe.afterSanitizeElements, u, null), j;
    }
    if (Te(u) === at.element && !Rl(u) || (A === "noscript" || A === "noembed" || A === "noframes") && Ve(Uu, u.innerHTML))
      return zt(u), !0;
    if (Q && u.nodeType === at.text) {
      const j = rr(u.textContent);
      u.textContent !== j && (Nn(t.removed, {
        element: u.cloneNode()
      }), u.textContent = j);
    }
    return St(oe.afterSanitizeElements, u, null), !1;
  }, ls = function(u, m, A) {
    if (N[m] || ts(m, u) || lt && (m === "id" || m === "name") && (A in n || A in xl))
      return !1;
    const M = _[m] || T.attributeCheck instanceof Function && T.attributeCheck(m, u);
    return I && Ve(Nt, m) || z && Ve(mt, m) ? !0 : M ? Ki[m] || Ve(o, In(A, F, "")) || (m === "src" || m === "xlink:href" || m === "href") && u !== "script" && Ws(A, "data:") === 0 && Wi[u] || $ && !Ve(ot, In(A, F, "")) ? !0 : !A : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      as(u) && sr(R.tagNameCheck, u) && sr(R.attributeNameCheck, m, u) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      m === "is" && R.allowCustomizedBuiltInElements && sr(R.tagNameCheck, A)
    );
  }, Ml = se({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), as = function(u) {
    return !Ml[Fn(u)] && Ve(a, u);
  }, Ll = function(u, m, A, M) {
    if (B && typeof v == "object" && typeof v.getAttributeType == "function" && !A)
      switch (v.getAttributeType(u, m)) {
        case "TrustedHTML":
          return De(M);
        case "TrustedScriptURL":
          return _e(M);
      }
    return M;
  }, Fl = function(u, m, A, M) {
    try {
      A ? u.setAttributeNS(A, m, M) : u.setAttribute(m, M), ir(u) ? zt(u) : zs(t.removed);
    } catch {
      Yt(m, u);
    }
  }, cs = function(u) {
    St(oe.beforeSanitizeAttributes, u, null);
    const m = u.attributes;
    if (!m || ir(u))
      return;
    _ = is(oe.uponSanitizeAttribute, _, E, qe);
    const A = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let M = m.length;
    const j = Oe(u.nodeName);
    for (; M--; ) {
      const X = m[M], me = X.name, Se = X.namespaceURI, Qe = X.value, et = Oe(me), Gr = Qe;
      let Ke = me === "value" ? Gr : _u(Gr);
      if (A.attrName = et, A.attrValue = Ke, A.keepAttr = !0, A.forceKeepAttr = void 0, St(oe.uponSanitizeAttribute, u, A), Ke = A.attrValue, xn && (et === "id" || et === "name") && Ws(Ke, wn) !== 0 && (Yt(me, u, X), Ke = wn + Ke), re && Ve(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ke)) {
        Yt(me, u, X);
        continue;
      }
      if (et === "attributename" && Bs(Ke, "href")) {
        Yt(me, u, X);
        continue;
      }
      if (!A.forceKeepAttr) {
        if (!A.keepAttr) {
          Yt(me, u, X);
          continue;
        }
        if (!K && Ve(ku, Ke)) {
          Yt(me, u, X);
          continue;
        }
        if (Q && (Ke = rr(Ke)), !ls(j, et, Ke)) {
          Yt(me, u, X);
          continue;
        }
        Ke = Ll(j, et, Se, Ke), Ke !== Gr && Fl(u, me, Se, Ke);
      }
    }
    St(oe.afterSanitizeAttributes, u, null);
  }, or = function(u) {
    let m = null;
    const A = rs(u);
    for (St(oe.beforeSanitizeShadowDOM, u, null); m = A.nextNode(); )
      if (St(oe.uponSanitizeShadowNode, m, null), os(m, u), cs(m), hn(m.content) && or(m.content), Te(m) === at.element) {
        const M = O(m);
        hn(M) && (Kr(M), or(M));
      }
    St(oe.afterSanitizeShadowDOM, u, null);
  }, Kr = function(u) {
    const m = [{
      node: u,
      shadow: null
    }];
    for (; m.length > 0; ) {
      const A = m.pop();
      if (A.shadow) {
        or(A.shadow);
        continue;
      }
      const M = A.node, X = Te(M) === at.element, me = Z(M);
      if (me)
        for (let Se = me.length - 1; Se >= 0; --Se)
          m.push({
            node: me[Se],
            shadow: null
          });
      if (X) {
        const Se = ie ? ie(M) : null;
        if (typeof Se == "string" && Oe(Se) === "template") {
          const Qe = M.content;
          hn(Qe) && m.push({
            node: Qe,
            shadow: null
          });
        }
      }
      if (X) {
        const Se = O(M);
        hn(Se) && m.push({
          node: null,
          shadow: Se
        }, {
          node: Se,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(w) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = null, A = null, M = null, j = null;
    if ($r = !w, $r && (w = "<!-->"), typeof w != "string" && !On(w) && (w = Au(w), typeof w != "string"))
      throw Zt("dirty is not a string, aborting");
    if (!t.isSupported)
      return w;
    ve ? (h = Ee, _ = qe) : Wr(u), (oe.uponSanitizeElement.length > 0 || oe.uponSanitizeAttribute.length > 0) && (h = ct(h)), oe.uponSanitizeAttribute.length > 0 && (_ = ct(_)), t.removed = [];
    const X = jr && typeof w != "string" && On(w);
    if (X) {
      Nl(w);
      const Qe = W(w);
      if (typeof Qe == "string") {
        const et = Oe(Qe);
        if (!h[et] || P[et])
          throw tr(w), Zt("root node is forbidden and cannot be sanitized in-place");
      }
      if (ir(w))
        throw tr(w), Zt("root node is clobbered and cannot be sanitized in-place");
      try {
        Kr(w);
      } catch (et) {
        throw tr(w), et;
      }
    } else if (On(w))
      m = ns("<!---->"), A = m.ownerDocument.importNode(w, !0), A.nodeType === at.element && A.nodeName === "BODY" || A.nodeName === "HTML" ? m = A : m.appendChild(A), Kr(A);
    else {
      if (!ft && !Q && !te && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return B && Le ? De(w) : w;
      if (m = ns(w), !m)
        return ft ? null : Le ? fe : "";
    }
    m && Ze && zt(m.firstChild);
    const me = X ? w : m;
    try {
      const Qe = rs(me);
      for (; M = Qe.nextNode(); )
        os(M, me), cs(M), hn(M.content) && or(M.content);
    } catch (Qe) {
      throw X && (tr(w), en(t.removed, (et) => {
        et.element && nr(et.element);
      })), Qe;
    }
    if (X)
      return en(t.removed, (Qe) => {
        Qe.element && nr(Qe.element);
      }), Q && qr(w), w;
    if (ft) {
      if (Q && qr(m), Gt)
        for (j = it.call(m.ownerDocument); m.firstChild; )
          j.appendChild(m.firstChild);
      else
        j = m;
      return (_.shadowroot || _.shadowrootmode) && (j = ht.call(r, j, !0)), j;
    }
    let Se = te ? m.outerHTML : m.innerHTML;
    return te && h["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && Ve(Lu, m.ownerDocument.doctype.name) && (Se = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + Se), Q && (Se = rr(Se)), B && Le ? De(Se) : Se;
  }, t.setConfig = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wr(w), ve = !0, Ee = h, qe = _;
  }, t.clearConfig = function() {
    pn = null, ve = !1, Ee = null, qe = null, B = pe, fe = "";
  }, t.isValidAttribute = function(w, u, m) {
    pn || Wr({});
    const A = Oe(w), M = Oe(u);
    return ls(A, M, m);
  }, t.addHook = function(w, u) {
    typeof u == "function" && nt(oe, w) && Nn(oe[w], u);
  }, t.removeHook = function(w, u) {
    if (nt(oe, w)) {
      if (u !== void 0) {
        const m = bu(oe[w], u);
        return m === -1 ? void 0 : yu(oe[w], m, 1)[0];
      }
      return zs(oe[w]);
    }
  }, t.removeHooks = function(w) {
    nt(oe, w) && (oe[w] = []);
  }, t.removeAllHooks = function() {
    oe = to();
  }, t;
}
var zu = _l();
function Bu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mi, no;
function Wu() {
  if (no) return mi;
  no = 1;
  var e = /["'&<>]/;
  mi = t;
  function t(n) {
    var r = "" + n, i = e.exec(r);
    if (!i)
      return r;
    var s, l = "", c = 0, f = 0;
    for (c = i.index; c < r.length; c++) {
      switch (r.charCodeAt(c)) {
        case 34:
          s = "&quot;";
          break;
        case 38:
          s = "&amp;";
          break;
        case 39:
          s = "&#39;";
          break;
        case 60:
          s = "&lt;";
          break;
        case 62:
          s = "&gt;";
          break;
        default:
          continue;
      }
      f !== c && (l += r.substring(f, c)), f = c + 1, l += s;
    }
    return f !== c ? l + r.substring(f, c) : l;
  }
  return mi;
}
var qu = Wu();
const ro = /* @__PURE__ */ Bu(qu);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Ku(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function p(e, t, n, r, i) {
  const s = typeof n == "object" ? n : void 0, l = typeof r == "number" ? r : typeof n == "number" ? n : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof r == "object" ? r : {}
  }, f = (U) => U, g = (c.sanitize ? zu.sanitize : f) || f, d = c.escape ? ro : f, v = (U) => typeof U == "string" || typeof U == "number", C = (U, Z, V) => U.replace(/%n/g, "" + V).replace(/{([^{}]*)}/g, (O, q) => {
    if (Z === void 0 || !(q in Z))
      return d(O);
    const D = Z[q];
    return v(D) ? d(`${D}`) : typeof D == "object" && v(D.value) ? (D.escape !== !1 ? ro : f)(`${D.value}`) : d(O);
  });
  let Y = (i?.bundle ?? Ku(e)).translations[t] || t;
  return Y = Array.isArray(Y) ? Y[0] : Y, g(typeof s == "object" || l !== void 0 ? C(
    Y,
    s,
    l
  ) : Y);
}
const Gu = { class: "library-vue-catalogue" }, Yu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Xu = { class: "library-catalogue-header" }, Ju = { id: "library-catalogue-heading" }, Zu = { class: "library-muted" }, Qu = ["aria-label"], ef = ["href"], tf = ["href"], nf = ["href"], rf = ["href"], sf = ["aria-label"], of = ["name", "value"], lf = { class: "library-quick-filter-search" }, af = { value: "title" }, cf = { value: "recent" }, uf = { value: "publicationDate" }, ff = { value: "publication" }, df = { value: "lastOpened" }, pf = { value: "format" }, hf = { value: "" }, mf = { value: "1" }, gf = ["value"], bf = ["value"], yf = ["aria-label"], _f = ["aria-label"], vf = { class: "library-filter-panel" }, Tf = { class: "library-filter-panel-summary" }, Sf = ["aria-label"], Ef = { value: "" }, Af = ["value"], xf = { value: "" }, wf = ["value"], Cf = { value: "" }, Of = ["value"], Rf = { value: "" }, Pf = ["value"], Nf = { value: "" }, If = ["value"], Df = { value: "" }, Mf = ["value"], Lf = { value: "" }, Ff = ["value"], Uf = { value: "" }, kf = ["value"], Hf = { value: "" }, jf = ["value"], $f = { value: "" }, Vf = ["value"], zf = { value: "" }, Bf = { value: "1" }, Wf = { value: "" }, qf = { value: "1" }, Kf = { value: "title" }, Gf = { value: "recent" }, Yf = { value: "publicationDate" }, Xf = { value: "publication" }, Jf = { value: "lastOpened" }, Zf = { value: "format" }, Qf = ["value"], ed = ["value"], td = ["aria-label"], nd = ["aria-label"], rd = ["href"], id = { class: "library-muted library-filter-result-summary" }, sd = { key: 0 }, od = { href: "?" }, ld = ["aria-label"], ad = ["href", "aria-label"], cd = ["aria-label"], ud = { class: "library-pagination-range" }, fd = { key: 0 }, dd = ["href"], pd = {
  key: 1,
  class: "library-muted"
}, hd = ["href"], md = {
  key: 3,
  class: "library-muted"
}, gd = {
  key: 1,
  class: "library-periodical-groups"
}, bd = { class: "library-periodical-groups-summary" }, yd = { id: "library-periodical-groups-heading" }, _d = { class: "library-muted" }, vd = ["href"], Td = { class: "library-muted" }, Sd = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, Ed = { class: "library-periodical-groups-summary" }, Ad = { id: "library-periodical-groups-empty-heading" }, xd = { class: "library-muted" }, wd = {
  key: 3,
  class: "library-empty-content",
  role: "status"
}, Cd = { class: "library-muted" }, Od = { class: "library-empty-actions" }, Rd = {
  href: "?",
  class: "button secondary"
}, Pd = ["href"], Nd = {
  key: 4,
  class: "library-cover-gallery"
}, Id = ["href", "aria-label"], Dd = ["src", "alt"], Md = ["action", "onSubmit"], Ld = ["value"], Fd = ["value"], Ud = ["aria-pressed", "title", "aria-label", "onClick"], kd = { class: "library-cover-summary" }, Hd = { class: "library-cover-primary" }, jd = ["aria-label"], $d = ["href"], Vd = ["onToggle"], zd = ["aria-label"], Bd = { class: "library-cover-meta" }, Wd = {
  key: 0,
  class: "library-creator"
}, qd = { class: "library-cover-detail-list" }, Kd = { class: "library-cover-detail-chip" }, Gd = {
  key: 0,
  class: "library-cover-detail-chip"
}, Yd = {
  key: 1,
  class: "library-cover-detail-chip"
}, Xd = {
  key: 2,
  class: "library-cover-detail-chip"
}, Jd = {
  key: 3,
  class: "library-cover-detail-chip"
}, Zd = {
  key: 4,
  class: "library-cover-detail-chip"
}, Qd = {
  key: 5,
  class: "library-cover-detail-chip"
}, ep = {
  key: 6,
  class: "library-cover-detail-chip"
}, tp = {
  key: 1,
  class: "library-muted library-cover-description"
}, np = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, rp = { key: 0 }, ip = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, sp = {
  key: 0,
  class: "library-muted"
}, op = { class: "library-cover-actions" }, lp = ["href"], ap = ["href"], cp = ["href"], up = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], r = [25, 50, 100, 250, 500], i = /* @__PURE__ */ nn({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), s = /* @__PURE__ */ nn((i.items || []).map((F) => ({ ...F }))), l = Ae(() => s), c = Ae(() => i.shelves || []), f = Ae(() => i.formats || []), g = Ae(() => i.publications || []), d = Ae(() => i.publicationSummaries || []), v = Ae(() => i.publicationYears || []), C = Ae(() => i.creators || []), L = Ae(() => i.scanStatuses || []), Y = Ae(() => i.workflowStatuses || []), U = Ae(() => i.genres || []), Z = Ae(() => i.classifications || []), V = Ae(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: l.value.length,
      visible: l.value.length,
      from: l.value.length > 0 ? 1 : 0,
      to: l.value.length,
      previousUrl: "",
      nextUrl: ""
    }), O = /* @__PURE__ */ nn({
      q: i.activeFilters?.q || "",
      type: i.activeFilters?.type || "",
      publication: i.activeFilters?.publication || "",
      year: i.activeFilters?.year || "",
      creator: i.activeFilters?.creator || "",
      format: i.activeFilters?.format || "",
      tag: i.activeFilters?.tag || "",
      shelf: i.activeFilters?.shelf || "",
      status: i.activeFilters?.status || "",
      workflowStatus: i.activeFilters?.workflowStatus || "",
      genre: i.activeFilters?.genre || "",
      classification: i.activeFilters?.classification || "",
      scannerConflicts: i.activeFilters?.scannerConflicts || "",
      starred: i.activeFilters?.starred || "",
      sort: i.activeFilters?.sort || "title"
    }), q = Ae(() => i.settingsUrl || ""), D = Ae(() => i.requestToken || ""), ie = Ae(() => i.metadataExportUrl || ""), we = Ae(() => i.metadataSidecarManifestUrl || ""), Te = Ae(() => i.metadataSidecarBundleUrl || ""), W = Ae(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), B = Ae(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), fe = {
      q: "Search",
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
      scannerConflicts: "Scanner conflicts",
      starred: "Starred"
    }, pe = Ae(() => Object.entries(fe).map(([F, a]) => ({ key: F, label: a, value: O[F] || "" })).filter((F) => String(F.value).trim() !== "")), ye = Ae(() => Object.entries(O).filter(([F, a]) => !["q", "sort", "starred"].includes(F) && String(a || "").trim() !== "").map(([F, a]) => ({ key: F, value: a }))), Ce = /* @__PURE__ */ nn({}), Re = /* @__PURE__ */ ga(null);
    let De = null;
    function _e(F) {
      const a = new URLSearchParams(new FormData(F));
      for (const o of Array.from(a.keys()))
        String(a.get(o) || "").trim() === "" && a.delete(o);
      return a.delete("page"), a;
    }
    function ne(F) {
      s.splice(0, s.length, ...(F.items || []).map((a) => ({ ...a })));
      for (const a of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "creators", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(F, a) && (i[a] = F[a]);
      Object.assign(O, F.activeFilters || {});
    }
    async function J(F) {
      const a = F?.currentTarget?.tagName === "FORM" ? F.currentTarget : F?.currentTarget?.form;
      if (!a) return;
      const h = _e(a).toString(), x = h ? `?${h}` : "", _ = await fetch(W.value + x, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!_.ok) {
        a.submit();
        return;
      }
      ne(await _.json()), history.replaceState({}, "", h ? `?${h}` : window.location.pathname);
    }
    function ke(F) {
      J(F);
    }
    function rt(F) {
      window.clearTimeout(De), De = window.setTimeout(() => ke(F), 350);
    }
    function it(F) {
      const a = new URLSearchParams(window.location.search);
      a.delete(F), a.delete("page");
      const o = a.toString();
      return o ? `?${o}` : "?";
    }
    function Me(F) {
      return String(F || "").toUpperCase();
    }
    function ht(F) {
      return F.nextcloudTags || [];
    }
    function oe(F) {
      const a = new URLSearchParams(window.location.search);
      return a.set("publication", F), a.set("sort", "publication"), a.delete("page"), `?${a.toString()}`;
    }
    function Pt(F, a) {
      Ce[F] = !!a?.currentTarget?.open;
    }
    function st(F) {
      const a = String(F?.tagName || "").toLowerCase();
      return F?.isContentEditable || ["input", "select", "textarea", "button"].includes(a);
    }
    function $e(F) {
      F.key !== "/" || F.metaKey || F.ctrlKey || F.altKey || F.shiftKey || st(F.target) || (F.preventDefault(), Re.value?.focus(), Re.value?.select?.());
    }
    function Nt(F) {
      F.key !== "Escape" || document.activeElement !== Re.value || O.q === "" || (F.preventDefault(), O.q = "", Re.value.value = "", window.clearTimeout(De), ke({ currentTarget: Re.value }));
    }
    function mt(F) {
      $e(F), Nt(F);
    }
    zo(() => {
      window.addEventListener("keydown", mt);
    }), Bo(() => {
      window.removeEventListener("keydown", mt);
    });
    async function ot(F, a) {
      const o = a?.currentTarget?.closest?.("form") || a?.currentTarget;
      if (!o || !F?.starUrl) return;
      const h = !!F.starred;
      F.starred = !h;
      try {
        (await fetch(F.starUrl, {
          method: "POST",
          body: new FormData(o),
          credentials: "same-origin"
        })).ok || (F.starred = h);
      } catch {
        F.starred = h;
      }
    }
    return (F, a) => (k(), H("div", Gu, [
      b("section", Yu, [
        b("div", Xu, [
          b("div", null, [
            b("h2", Ju, y(S(p)("library", "Publication catalogue")), 1),
            b("p", Zu, y(S(p)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          b("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": S(p)("library", "Library actions")
          }, [
            b("a", {
              href: q.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, y(S(p)("library", "Settings")), 9, ef),
            ie.value ? (k(), H("a", {
              key: 0,
              href: ie.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, y(S(p)("library", "Export corrected metadata")), 9, tf)) : Ne("", !0),
            we.value ? (k(), H("a", {
              key: 1,
              href: we.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, y(S(p)("library", "Sidecar manifest")), 9, nf)) : Ne("", !0),
            Te.value ? (k(), H("a", {
              key: 2,
              href: Te.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, y(S(p)("library", "Sidecar ZIP")), 9, rf)) : Ne("", !0)
          ], 8, Qu)
        ]),
        b("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": S(p)("library", "Quick catalogue filters"),
          onSubmit: dr(J, ["prevent"])
        }, [
          (k(!0), H(ge, null, He(ye.value, (o) => (k(), H("input", {
            key: o.key,
            type: "hidden",
            name: o.key,
            value: o.value
          }, null, 8, of))), 128)),
          b("label", lf, [
            ue(y(S(p)("library", "Search")) + " ", 1),
            a[18] || (a[18] = b("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            Fe(b("input", {
              ref_key: "quickSearchInput",
              ref: Re,
              "onUpdate:modelValue": a[0] || (a[0] = (o) => O.q = o),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: rt
            }, null, 544), [
              [ai, O.q]
            ])
          ]),
          b("label", null, [
            ue(y(S(p)("library", "Sort")) + " ", 1),
            Fe(b("select", {
              "onUpdate:modelValue": a[1] || (a[1] = (o) => O.sort = o),
              name: "sort",
              onChange: J
            }, [
              b("option", af, y(S(p)("library", "Title")), 1),
              b("option", cf, y(S(p)("library", "Recently added")), 1),
              b("option", uf, y(S(p)("library", "Publication date")), 1),
              b("option", ff, y(S(p)("library", "Series")), 1),
              b("option", df, y(S(p)("library", "Recently opened")), 1),
              b("option", pf, y(S(p)("library", "Format")), 1)
            ], 544), [
              [Ge, O.sort]
            ])
          ]),
          b("label", null, [
            ue(y(S(p)("library", "Starred")) + " ", 1),
            Fe(b("select", {
              "onUpdate:modelValue": a[2] || (a[2] = (o) => O.starred = o),
              name: "starred",
              onChange: J
            }, [
              b("option", hf, y(S(p)("library", "All")), 1),
              b("option", mf, y(S(p)("library", "Starred")), 1)
            ], 544), [
              [Ge, O.starred]
            ])
          ]),
          b("label", null, [
            ue(y(S(p)("library", "Size")) + " ", 1),
            b("select", {
              value: V.value.limit,
              name: "limit",
              onChange: J
            }, [
              (k(), H(ge, null, He(r, (o) => b("option", {
                key: o,
                value: o
              }, y(o), 9, bf)), 64))
            ], 40, gf)
          ]),
          b("button", {
            type: "submit",
            class: "button primary",
            "aria-label": S(p)("library", "Apply catalogue filters")
          }, y(S(p)("library", "Apply filters")), 9, yf),
          b("a", {
            href: "?",
            class: "button secondary",
            "aria-label": S(p)("library", "Clear catalogue filters")
          }, y(S(p)("library", "Clear all")), 9, _f)
        ], 40, sf),
        b("details", vf, [
          b("summary", Tf, y(S(p)("library", "Show catalogue filters")), 1),
          b("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": S(p)("library", "Catalogue search and filters"),
            onSubmit: dr(J, ["prevent"])
          }, [
            b("label", null, [
              ue(y(S(p)("library", "Search title / author")) + " ", 1),
              Fe(b("input", {
                "onUpdate:modelValue": a[3] || (a[3] = (o) => O.q = o),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [ai, O.q]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Type")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[4] || (a[4] = (o) => O.type = o),
                name: "type"
              }, [
                b("option", Ef, y(S(p)("library", "All types")), 1),
                (k(), H(ge, null, He(n, (o) => b("option", {
                  key: o,
                  value: o
                }, y(o), 9, Af)), 64))
              ], 512), [
                [Ge, O.type]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Series / periodical")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[5] || (a[5] = (o) => O.publication = o),
                name: "publication"
              }, [
                b("option", xf, y(S(p)("library", "All series and periodicals")), 1),
                (k(!0), H(ge, null, He(g.value, (o) => (k(), H("option", {
                  key: o,
                  value: o
                }, y(o), 9, wf))), 128))
              ], 512), [
                [Ge, O.publication]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Publication year")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[6] || (a[6] = (o) => O.year = o),
                name: "year"
              }, [
                b("option", Cf, y(S(p)("library", "All years")), 1),
                (k(!0), H(ge, null, He(v.value, (o) => (k(), H("option", {
                  key: o,
                  value: o
                }, y(o), 9, Of))), 128))
              ], 512), [
                [Ge, O.year]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Creator")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[7] || (a[7] = (o) => O.creator = o),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                b("option", Rf, y(S(p)("library", "All creators")), 1),
                (k(!0), H(ge, null, He(C.value, (o) => (k(), H("option", {
                  key: o,
                  value: o
                }, y(o), 9, Pf))), 128))
              ], 512), [
                [Ge, O.creator]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Nextcloud tag")) + " ", 1),
              Fe(b("input", {
                "onUpdate:modelValue": a[8] || (a[8] = (o) => O.tag = o),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [ai, O.tag]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Format")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[9] || (a[9] = (o) => O.format = o),
                name: "format"
              }, [
                b("option", Nf, y(S(p)("library", "All formats")), 1),
                (k(!0), H(ge, null, He(f.value, (o) => (k(), H("option", {
                  key: o,
                  value: o
                }, y(Me(o)), 9, If))), 128))
              ], 512), [
                [Ge, O.format]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Shelf")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[10] || (a[10] = (o) => O.shelf = o),
                name: "shelf"
              }, [
                b("option", Df, y(S(p)("library", "All shelves")), 1),
                (k(!0), H(ge, null, He(c.value, (o) => (k(), H("option", {
                  key: o,
                  value: o
                }, y(o), 9, Mf))), 128))
              ], 512), [
                [Ge, O.shelf]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Scan status")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[11] || (a[11] = (o) => O.status = o),
                name: "status"
              }, [
                b("option", Lf, y(S(p)("library", "All scan statuses")), 1),
                (k(!0), H(ge, null, He(L.value, (o) => (k(), H("option", {
                  key: o,
                  value: o
                }, y(o), 9, Ff))), 128))
              ], 512), [
                [Ge, O.status]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Workflow status")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[12] || (a[12] = (o) => O.workflowStatus = o),
                name: "workflowStatus"
              }, [
                b("option", Uf, y(S(p)("library", "All workflow statuses")), 1),
                (k(!0), H(ge, null, He(Y.value, (o) => (k(), H("option", {
                  key: o,
                  value: o
                }, y(o), 9, kf))), 128))
              ], 512), [
                [Ge, O.workflowStatus]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Genre")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[13] || (a[13] = (o) => O.genre = o),
                name: "genre"
              }, [
                b("option", Hf, y(S(p)("library", "All genres")), 1),
                (k(!0), H(ge, null, He(U.value, (o) => (k(), H("option", {
                  key: o,
                  value: o
                }, y(o), 9, jf))), 128))
              ], 512), [
                [Ge, O.genre]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Classification")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[14] || (a[14] = (o) => O.classification = o),
                name: "classification"
              }, [
                b("option", $f, y(S(p)("library", "All classifications")), 1),
                (k(!0), H(ge, null, He(Z.value, (o) => (k(), H("option", {
                  key: o,
                  value: o
                }, y(o), 9, Vf))), 128))
              ], 512), [
                [Ge, O.classification]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Scanner conflicts")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[15] || (a[15] = (o) => O.scannerConflicts = o),
                name: "scannerConflicts"
              }, [
                b("option", zf, y(S(p)("library", "All metadata")), 1),
                b("option", Bf, y(S(p)("library", "Needs review")), 1)
              ], 512), [
                [Ge, O.scannerConflicts]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Starred")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[16] || (a[16] = (o) => O.starred = o),
                name: "starred"
              }, [
                b("option", Wf, y(S(p)("library", "All publications")), 1),
                b("option", qf, y(S(p)("library", "Starred only")), 1)
              ], 512), [
                [Ge, O.starred]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Sort")) + " ", 1),
              Fe(b("select", {
                "onUpdate:modelValue": a[17] || (a[17] = (o) => O.sort = o),
                name: "sort"
              }, [
                b("option", Kf, y(S(p)("library", "Title")), 1),
                b("option", Gf, y(S(p)("library", "Recently added")), 1),
                b("option", Yf, y(S(p)("library", "Publication date")), 1),
                b("option", Xf, y(S(p)("library", "Series / periodical")), 1),
                b("option", Jf, y(S(p)("library", "Recently opened")), 1),
                b("option", Zf, y(S(p)("library", "Format")), 1)
              ], 512), [
                [Ge, O.sort]
              ])
            ]),
            b("label", null, [
              ue(y(S(p)("library", "Page size")) + " ", 1),
              b("select", {
                value: V.value.limit,
                name: "limit"
              }, [
                (k(), H(ge, null, He(r, (o) => b("option", {
                  key: o,
                  value: o
                }, y(o), 9, ed)), 64))
              ], 8, Qf)
            ]),
            b("button", {
              type: "submit",
              class: "button primary",
              "aria-label": S(p)("library", "Apply catalogue filters")
            }, y(S(p)("library", "Apply filters")), 9, td),
            b("a", {
              href: "?",
              class: "button secondary",
              "aria-label": S(p)("library", "Clear catalogue filters")
            }, y(S(p)("library", "Clear")), 9, nd),
            b("a", {
              href: B.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, y(S(p)("library", "Review scanner conflicts")), 9, rd)
          ], 40, Sf)
        ]),
        b("p", id, [
          ue(y(S(p)("library", "Showing")) + " " + y(V.value.from) + "–" + y(V.value.to) + " " + y(S(p)("library", "of")) + " " + y(V.value.total) + " " + y(S(p)("library", "catalogue items")), 1),
          pe.value.length > 0 ? (k(), H("span", sd, [
            a[19] || (a[19] = ue(" · ", -1)),
            b("a", od, y(S(p)("library", "Clear all filters")), 1)
          ])) : Ne("", !0)
        ]),
        pe.value.length > 0 ? (k(), H("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": S(p)("library", "Active filters")
        }, [
          b("span", null, y(S(p)("library", "Active filters")), 1),
          (k(!0), H(ge, null, He(pe.value, (o) => (k(), H("a", {
            key: o.key,
            href: it(o.key),
            class: "library-filter-chip",
            "aria-label": `${S(p)("library", "Remove filter")}: ${o.label}`
          }, [
            b("strong", null, y(o.label) + ":", 1),
            ue(" " + y(o.value) + " ", 1),
            a[20] || (a[20] = b("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, ad))), 128))
        ], 8, ld)) : Ne("", !0),
        b("nav", {
          class: "library-pagination",
          "aria-label": S(p)("library", "Catalogue pagination")
        }, [
          b("span", ud, [
            ue(y(S(p)("library", "Page")) + " " + y(V.value.page), 1),
            V.value.total > 0 ? (k(), H("span", fd, " · " + y(V.value.from) + "–" + y(V.value.to), 1)) : Ne("", !0)
          ]),
          V.value.previousUrl ? (k(), H("a", {
            key: 0,
            href: V.value.previousUrl
          }, y(S(p)("library", "Previous")), 9, dd)) : (k(), H("span", pd, y(S(p)("library", "Previous")), 1)),
          V.value.nextUrl ? (k(), H("a", {
            key: 2,
            href: V.value.nextUrl
          }, y(S(p)("library", "Next")), 9, hd)) : (k(), H("span", md, y(S(p)("library", "Next")), 1))
        ], 8, cd),
        d.value.length > 0 ? (k(), H("details", gd, [
          b("summary", bd, y(S(p)("library", "Show top series and periodicals")), 1),
          b("h3", yd, y(S(p)("library", "Top series and periodicals")), 1),
          b("p", _d, y(S(p)("library", "Jump into recurring publications with one click.")), 1),
          b("ul", null, [
            (k(!0), H(ge, null, He(d.value, (o) => (k(), H("li", {
              key: o.publication
            }, [
              b("a", {
                href: oe(o.publication)
              }, y(o.publication), 9, vd),
              b("span", Td, y(o.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : d.value.length === 0 ? (k(), H("details", Sd, [
          b("summary", Ed, y(S(p)("library", "Show top series and periodicals")), 1),
          b("h3", Ad, y(S(p)("library", "No series or periodicals found yet")), 1),
          b("p", xd, y(S(p)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Ne("", !0),
        l.value.length === 0 ? (k(), H("div", wd, [
          b("h3", null, y(S(p)("library", "No catalogue items match")), 1),
          b("p", Cd, y(S(p)("library", "Scan enabled roots or clear the active filters.")), 1),
          b("p", Od, [
            b("a", Rd, y(S(p)("library", "Clear all filters")), 1),
            b("a", {
              href: q.value,
              class: "button primary"
            }, y(S(p)("library", "Run a scan from settings")), 9, Pd)
          ])
        ])) : (k(), H("div", Nd, [
          (k(!0), H(ge, null, He(l.value, (o) => (k(), H("article", {
            key: o.id,
            class: zn(["library-cover-card", { "library-cover-card--open": Ce[o.id] }])
          }, [
            b("a", {
              class: "library-cover-link",
              href: o.openUrl,
              "aria-label": `Read ${o.title}`
            }, [
              b("img", {
                class: "library-cover-image",
                src: o.coverUrl,
                alt: `Cover for ${o.title}`,
                loading: "lazy"
              }, null, 8, Dd)
            ], 8, Id),
            b("form", {
              method: "post",
              action: o.starUrl,
              class: "library-cover-star-form",
              onSubmit: dr((h) => ot(o, h), ["prevent"])
            }, [
              b("input", {
                type: "hidden",
                name: "requesttoken",
                value: D.value
              }, null, 8, Ld),
              a[21] || (a[21] = b("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              b("input", {
                type: "hidden",
                name: "starred",
                value: o.starred ? "0" : "1"
              }, null, 8, Fd),
              b("button", {
                type: "submit",
                class: zn(["library-cover-star-button", { "library-cover-star-button--starred": o.starred }]),
                "aria-pressed": o.starred ? "true" : "false",
                title: o.starred ? S(p)("library", "Unstar this publication") : S(p)("library", "Star this publication"),
                "aria-label": o.starred ? S(p)("library", "Unstar this publication") : S(p)("library", "Star this publication"),
                onClick: dr((h) => ot(o, h), ["prevent"])
              }, y(o.starred ? "★" : "☆"), 11, Ud)
            ], 40, Md),
            b("div", kd, [
              b("div", Hd, [
                b("h3", null, [
                  o.starred ? (k(), H("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": S(p)("library", "Starred")
                  }, "★", 8, jd)) : Ne("", !0),
                  ue(y(o.title), 1)
                ]),
                b("a", {
                  class: "library-cover-read",
                  href: o.openUrl
                }, y(S(p)("library", "Read")), 9, $d)
              ]),
              b("details", {
                class: "library-cover-details",
                onToggle: (h) => Pt(o.id, h)
              }, [
                b("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${S(p)("library", "Show details and actions")}: ${o.title}`
                }, y(S(p)("library", "Details")), 9, zd),
                b("div", Bd, [
                  o.creators ? (k(), H("p", Wd, y(o.creators), 1)) : Ne("", !0),
                  b("dl", qd, [
                    b("div", Kd, [
                      b("dt", null, y(S(p)("library", "Type")), 1),
                      b("dd", null, y(o.publicationType), 1)
                    ]),
                    o.publication ? (k(), H("div", Gd, [
                      b("dt", null, y(S(p)("library", "Series")), 1),
                      b("dd", null, y(o.publication), 1)
                    ])) : Ne("", !0),
                    o.publicationDate ? (k(), H("div", Yd, [
                      b("dt", null, y(S(p)("library", "Date")), 1),
                      b("dd", null, y(o.publicationDate), 1)
                    ])) : Ne("", !0),
                    o.workflowStatus ? (k(), H("div", Xd, [
                      b("dt", null, y(S(p)("library", "Status")), 1),
                      b("dd", null, y(o.workflowStatus), 1)
                    ])) : Ne("", !0),
                    o.hasScannerConflict ? (k(), H("div", Jd, [
                      b("dt", null, y(S(p)("library", "Review")), 1),
                      b("dd", null, y(o.scannerConflictCount) + " fields", 1)
                    ])) : Ne("", !0),
                    o.lastOpenedAt ? (k(), H("div", Zd, [
                      b("dt", null, y(S(p)("library", "Last opened")), 1),
                      b("dd", null, y(o.lastOpenedAt), 1)
                    ])) : Ne("", !0),
                    o.extension ? (k(), H("div", Qd, [
                      b("dt", null, y(S(p)("library", "Format")) + ":", 1),
                      b("dd", null, y(Me(o.extension)), 1)
                    ])) : Ne("", !0),
                    o.shelf ? (k(), H("div", ep, [
                      b("dt", null, y(S(p)("library", "Shelf")), 1),
                      b("dd", null, y(o.shelf), 1)
                    ])) : Ne("", !0)
                  ]),
                  o.description ? (k(), H("p", tp, y(o.description), 1)) : Ne("", !0),
                  o.scanStatus !== "indexed" || o.scanError ? (k(), H("p", np, [
                    ue(" scanStatus: " + y(o.scanStatus || "unknown"), 1),
                    o.scanError ? (k(), H("span", rp, " · scanError: " + y(o.scanError), 1)) : Ne("", !0)
                  ])) : Ne("", !0),
                  b("div", ip, [
                    ht(o).length === 0 ? (k(), H("span", sp, "No Nextcloud tags")) : (k(!0), H(ge, { key: 1 }, He(ht(o), (h) => (k(), H("span", {
                      key: h.id,
                      class: "library-tag"
                    }, y(h.name), 1))), 128))
                  ]),
                  b("p", op, [
                    b("a", {
                      href: o.filesUrl
                    }, y(S(p)("library", "Show in Files")), 9, lp),
                    a[22] || (a[22] = ue(" · ", -1)),
                    b("a", {
                      href: o.downloadUrl
                    }, y(S(p)("library", "Download source")), 9, ap),
                    a[23] || (a[23] = ue(" · ", -1)),
                    b("a", {
                      href: o.detailsUrl
                    }, y(S(p)("library", "Details")), 9, cp)
                  ])
                ])
              ], 40, Vd)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, io = au("library", "catalogue", {}), br = document.querySelector("#library-vue-root"), so = {
  ...io,
  requestToken: br?.dataset.requestToken || io.requestToken || ""
};
function le(e) {
  return String(e ?? "");
}
function vl(e) {
  return le(e).toUpperCase();
}
function fp(e, t, n, r = le) {
  for (const i of t) {
    const s = document.createElement("option");
    s.value = le(i), s.textContent = r(i), le(i) === le(n) && (s.selected = !0), e.appendChild(s);
  }
}
function oo(e, t, n, r, i = "") {
  const s = document.createElement("label");
  s.textContent = t;
  const l = document.createElement("input");
  l.type = n === "q" ? "search" : "text", l.name = n, l.value = le(r), l.placeholder = i, s.appendChild(l), e.appendChild(s);
}
function gn(e, t, n, r, i, s, l = le) {
  const c = document.createElement("label");
  c.textContent = t;
  const f = document.createElement("select");
  f.name = n;
  const g = document.createElement("option");
  g.value = "", g.textContent = i, f.appendChild(g), fp(f, s, r, l), c.appendChild(f), e.appendChild(c);
}
function dp(e) {
  const t = le(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function pp(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function hp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", p("library", "Catalogue search and filters")), oo(r, p("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), gn(r, p("library", "Type"), "type", n.type, p("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), oo(r, p("library", "Nextcloud tag"), "tag", n.tag, "photography"), gn(r, p("library", "Format"), "format", n.format, p("library", "All formats"), e.formats || [], vl), gn(r, p("library", "Shelf"), "shelf", n.shelf, p("library", "All shelves"), e.shelves || []), gn(r, p("library", "Scan status"), "status", n.status, p("library", "All scan statuses"), e.scanStatuses || []), gn(r, p("library", "Sort"), "sort", n.sort || "title", p("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), gn(r, p("library", "Page size"), "limit", t.limit || 100, p("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", p("library", "Apply catalogue filters")), i.textContent = p("library", "Apply filters");
  const s = document.createElement("a");
  return s.href = "?", s.className = "button secondary", s.setAttribute("aria-label", p("library", "Clear catalogue filters")), s.textContent = p("library", "Clear"), r.append(i, s), r;
}
function mp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", p("library", "Quick catalogue filters"));
  let i = null;
  const s = () => {
    window.clearTimeout(i), i = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [v, C] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(v) || le(C).trim() === "") continue;
    const L = document.createElement("input");
    L.type = "hidden", L.name = v, L.value = le(C), r.appendChild(L);
  }
  const l = document.createElement("label");
  l.className = "library-quick-filter-search", l.textContent = p("library", "Search");
  const c = document.createElement("input");
  c.type = "search", c.name = "q", c.value = le(n.q), c.placeholder = "Camera, Eco, Rolleiflex...", c.addEventListener("input", s), l.appendChild(c), r.appendChild(l);
  const f = [
    [p("library", "Sort"), "sort", n.sort || "title", [["title", p("library", "Title")], ["recent", p("library", "Recently added")], ["publicationDate", p("library", "Publication date")], ["publication", p("library", "Series")], ["lastOpened", p("library", "Recently opened")], ["format", p("library", "Format")]]],
    [p("library", "Starred"), "starred", n.starred || "", [["", p("library", "All")], ["1", p("library", "Starred")]]],
    [p("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [v, C, L, Y] of f) {
    const U = document.createElement("label");
    U.textContent = v;
    const Z = document.createElement("select");
    Z.name = C;
    for (const [V, O] of Y) {
      const q = document.createElement("option");
      q.value = le(V), q.textContent = le(O), le(V) === le(L) && (q.selected = !0), Z.appendChild(q);
    }
    Z.addEventListener("change", () => r.requestSubmit()), U.appendChild(Z), r.appendChild(U);
  }
  const g = document.createElement("button");
  g.type = "submit", g.className = "button primary", g.setAttribute("aria-label", p("library", "Apply catalogue filters")), g.textContent = p("library", "Apply filters");
  const d = document.createElement("a");
  return d.href = "?", d.className = "button secondary", d.setAttribute("aria-label", p("library", "Clear catalogue filters")), d.textContent = p("library", "Clear all"), r.append(g, d), r;
}
function gp(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, i = le(e.settingsUrl || ""), s = le(e.metadataExportUrl || ""), l = document.createElement("div");
  l.className = "library-vue-catalogue library-vue-fallback", l.dataset.vueFallback = "true";
  const c = document.createElement("section");
  c.className = "library-panel", c.setAttribute("aria-labelledby", "library-catalogue-heading");
  const f = document.createElement("div");
  f.className = "library-catalogue-header";
  const g = document.createElement("div"), d = document.createElement("h2");
  d.id = "library-catalogue-heading", d.textContent = p("library", "Publication catalogue");
  const v = document.createElement("p");
  v.className = "library-muted", v.textContent = p("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), g.append(d, v);
  const C = document.createElement("nav");
  if (C.className = "library-catalogue-toolbar", C.setAttribute("aria-label", p("library", "Library actions")), i) {
    const W = document.createElement("a");
    W.href = i, W.className = "button secondary", W.setAttribute("aria-label", "Open Library settings"), W.textContent = p("library", "Settings"), C.appendChild(W);
  }
  if (s) {
    const W = document.createElement("a");
    W.href = s, W.className = "button secondary", W.setAttribute("aria-label", "Export corrected metadata"), W.textContent = p("library", "Export corrected metadata"), C.appendChild(W);
  }
  if (e.metadataSidecarManifestUrl) {
    const W = document.createElement("a");
    W.href = e.metadataSidecarManifestUrl, W.className = "button secondary", W.setAttribute("aria-label", "Export sidecar manifest"), W.textContent = p("library", "Sidecar manifest"), C.appendChild(W);
  }
  if (e.metadataSidecarBundleUrl) {
    const W = document.createElement("a");
    W.href = e.metadataSidecarBundleUrl, W.className = "button secondary", W.setAttribute("aria-label", "Export sidecar ZIP"), W.textContent = p("library", "Sidecar ZIP"), C.appendChild(W);
  }
  f.append(g, C), c.appendChild(f), c.appendChild(mp(e, r));
  const L = document.createElement("details");
  L.className = "library-filter-panel";
  const Y = document.createElement("summary");
  Y.className = "library-filter-panel-summary", Y.textContent = p("library", "Show catalogue filters"), L.append(Y, hp(e, r)), c.appendChild(L);
  const U = document.createElement("p");
  U.className = "library-muted library-filter-result-summary", U.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const Z = document.createElement("a");
  Z.href = "?", Z.textContent = ` ${p("library", "Clear all filters")}`, U.appendChild(Z), c.appendChild(U);
  const V = document.createElement("nav");
  V.className = "library-pagination", V.setAttribute("aria-label", p("library", "Catalogue pagination"));
  const O = document.createElement("span");
  O.className = "library-pagination-range", O.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, V.appendChild(O), c.appendChild(V);
  const q = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], D = document.createElement("details");
  D.className = q.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const ie = document.createElement("summary");
  ie.className = "library-periodical-groups-summary", ie.textContent = p("library", "Show top series and periodicals"), D.appendChild(ie);
  const we = document.createElement("h3");
  we.textContent = q.length > 0 ? p("library", "Top series and periodicals") : p("library", "No series or periodicals found yet");
  const Te = document.createElement("p");
  if (Te.className = "library-muted", Te.textContent = q.length > 0 ? p("library", "Jump into recurring publications with one click.") : p("library", "Add publication or series names in item details to build this shortcut panel."), D.append(we, Te), q.length > 0) {
    const W = document.createElement("ul");
    for (const B of q) {
      const fe = document.createElement("li"), pe = document.createElement("a");
      pe.href = pp(le(B.publication)), pe.textContent = le(B.publication);
      const ye = document.createElement("span");
      ye.className = "library-muted", ye.textContent = `${B.itemCount} items`, fe.append(pe, ye), W.appendChild(fe);
    }
    D.appendChild(W);
  }
  if (c.appendChild(D), n.length === 0) {
    const W = document.createElement("div");
    W.className = "library-empty-content", W.setAttribute("role", "status");
    const B = document.createElement("h3");
    B.textContent = p("library", "No catalogue items match");
    const fe = document.createElement("p");
    fe.className = "library-muted", fe.textContent = p("library", "Scan enabled roots or clear the active filters.");
    const pe = document.createElement("p");
    pe.className = "library-empty-actions";
    const ye = document.createElement("a");
    ye.href = "?", ye.className = "button secondary", ye.textContent = p("library", "Clear all filters");
    const Ce = document.createElement("a");
    Ce.href = i, Ce.className = "button primary", Ce.textContent = p("library", "Run a scan from settings"), pe.append(ye, Ce), W.append(B, fe, pe), c.appendChild(W);
  } else {
    const W = document.createElement("div");
    W.className = "library-cover-gallery";
    for (const B of n) {
      const fe = document.createElement("article");
      fe.className = "library-cover-card";
      const pe = document.createElement("a");
      pe.className = "library-cover-link", pe.href = le(B.openUrl || "#"), pe.setAttribute("aria-label", `Read ${le(B.title || "publication")}`);
      const ye = document.createElement("img");
      ye.className = "library-cover-image", ye.src = le(B.coverUrl || ""), ye.alt = `Cover for ${le(B.title || "publication")}`, ye.loading = "lazy", pe.appendChild(ye);
      const Ce = dp(e), Re = document.createElement("form");
      Re.method = "post", Re.action = le(B.starUrl || ""), Re.className = "library-cover-star-form", Ce && Re.appendChild(Ce);
      const De = document.createElement("input");
      De.type = "hidden", De.name = "returnTo", De.value = "catalogue";
      const _e = document.createElement("input");
      _e.type = "hidden", _e.name = "starred", _e.value = B.starred ? "0" : "1";
      const ne = document.createElement("button");
      ne.type = "submit", ne.className = B.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", ne.setAttribute("aria-pressed", B.starred ? "true" : "false"), ne.setAttribute("aria-label", B.starred ? p("library", "Unstar this publication") : p("library", "Star this publication")), ne.title = B.starred ? p("library", "Unstar this publication") : p("library", "Star this publication"), ne.textContent = B.starred ? "★" : "☆", Re.append(De, _e, ne);
      const J = document.createElement("div");
      J.className = "library-cover-summary";
      const ke = document.createElement("h3");
      if (ke.textContent = le(B.title || "Untitled publication"), J.appendChild(ke), B.creators) {
        const $e = document.createElement("p");
        $e.className = "library-creator", $e.textContent = le(B.creators), J.appendChild($e);
      }
      const rt = document.createElement("dl");
      rt.className = "library-cover-detail-list";
      const it = [
        ["Type", le(B.publicationType || "other")],
        ["Format", B.extension ? vl(B.extension) : ""],
        ["Shelf", B.shelf ? le(B.shelf) : ""]
      ].filter(([, $e]) => $e !== "");
      for (const [$e, Nt] of it) {
        const mt = document.createElement("div");
        mt.className = "library-cover-detail-chip";
        const ot = document.createElement("dt");
        ot.textContent = $e;
        const F = document.createElement("dd");
        F.textContent = Nt, mt.append(ot, F), rt.appendChild(mt);
      }
      J.appendChild(rt);
      const Me = document.createElement("p"), ht = document.createElement("a");
      ht.href = le(B.openUrl || "#"), ht.textContent = p("library", "Read");
      const oe = document.createElement("a");
      oe.href = le(B.filesUrl || "#"), oe.textContent = p("library", "Show in Files");
      const Pt = document.createElement("a");
      Pt.href = le(B.downloadUrl || "#"), Pt.textContent = p("library", "Download source");
      const st = document.createElement("a");
      st.href = le(B.detailsUrl || "#"), st.textContent = p("library", "Details"), Me.append(ht, document.createTextNode(" · "), oe, document.createTextNode(" · "), Pt, document.createTextNode(" · "), st), J.appendChild(Me), fe.append(pe, Re, J), W.appendChild(fe);
    }
    c.appendChild(W);
  }
  return l.appendChild(c), l;
}
if (br)
  try {
    su(up, { state: so }).mount(br);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), br.replaceChildren(gp(so));
  }
//# sourceMappingURL=library-main.mjs.map
