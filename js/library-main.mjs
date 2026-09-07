// @__NO_SIDE_EFFECTS__
function Ri(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const be = {}, _n = [], Ot = () => {
}, ao = () => !1, Or = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Rr = (e) => e.startsWith("onUpdate:"), Be = Object.assign, Ni = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ul = Object.prototype.hasOwnProperty, ce = (e, t) => Ul.call(e, t), K = Array.isArray, qt = (e) => Jn(e) === "[object Map]", an = (e) => Jn(e) === "[object Set]", fs = (e) => Jn(e) === "[object Date]", Z = (e) => typeof e == "function", Ce = (e) => typeof e == "string", Rt = (e) => typeof e == "symbol", de = (e) => e !== null && typeof e == "object", co = (e) => (de(e) || Z(e)) && Z(e.then) && Z(e.catch), uo = Object.prototype.toString, Jn = (e) => uo.call(e), Hl = (e) => Jn(e).slice(8, -1), fo = (e) => Jn(e) === "[object Object]", Pi = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Hn = /* @__PURE__ */ Ri(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, jl = /-\w/g, bt = Nr(
  (e) => e.replace(jl, (t) => t.slice(1).toUpperCase())
), $l = /\B([A-Z])/g, cn = Nr(
  (e) => e.replace($l, "-$1").toLowerCase()
), po = Nr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Xr = Nr(
  (e) => e ? `on${po(e)}` : ""
), wt = (e, t) => !Object.is(e, t), mr = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ho = (e, t, n, r = !1) => {
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
let ds;
const Ir = () => ds || (ds = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ii(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = Ce(r) ? Wl(r) : Ii(r);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Ce(e) || de(e))
    return e;
}
const Vl = /;(?![^(]*\))/g, zl = /:([^]+)/, Bl = /\/\*[^]*?\*\//g;
function Wl(e) {
  const t = {};
  return e.replace(Bl, "").split(Vl).forEach((n) => {
    if (n) {
      const r = n.split(zl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function vn(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (K(e))
    for (let n = 0; n < e.length; n++) {
      const r = vn(e[n]);
      r && (t += r + " ");
    }
  else if (de(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ql = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Kl = /* @__PURE__ */ Ri(ql);
function mo(e) {
  return !!e || e === "";
}
function Gl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Kt(e[r], t[r]);
  return n;
}
function ps(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), r = new Uint8Array(n.length);
  for (const i of e) {
    let s = -1;
    for (let o = 0; o < n.length; o++)
      if (!r[o] && Kt(i, n[o])) {
        s = o;
        break;
      }
    if (s < 0) return !1;
    r[s] = 1;
  }
  return !0;
}
function Kt(e, t) {
  if (e === t) return !0;
  let n = fs(e), r = fs(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Rt(e), r = Rt(t), n || r)
    return e === t;
  if (n = K(e), r = K(t), n || r)
    return n && r ? Gl(e, t) : !1;
  if (n = de(e), r = de(t), n || r) {
    if (!n || !r)
      return !1;
    if (n = qt(e), r = qt(t), n || r || (n = an(e), r = an(t), n || r))
      return n && r ? ps(e, t) : !1;
    const i = Object.keys(e).length, s = Object.keys(t).length;
    if (i !== s)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Kt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Yl(e, t) {
  return e.findIndex((n) => Kt(n, t));
}
const bo = (e) => !!(e && e.__v_isRef === !0), S = (e) => Ce(e) ? e : e == null ? "" : K(e) || de(e) && (e.toString === uo || !Z(e.toString)) ? bo(e) ? S(e.value) : JSON.stringify(e, go, 2) : String(e), go = (e, t) => bo(t) ? go(e, t.value) : qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], s) => (n[Jr(r, s) + " =>"] = i, n),
    {}
  )
} : an(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Jr(n))
} : Rt(t) ? Jr(t) : de(t) && !K(t) && !fo(t) ? String(t) : t, Jr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Ue;
class Xl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ue && (Ue.active ? (this.parent = Ue, this.index = (Ue.scopes || (Ue.scopes = [])).push(
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
      const n = Ue;
      try {
        return Ue = this, t();
      } finally {
        Ue = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ue, Ue = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ue === this)
        Ue = this.prevScope;
      else {
        let t = Ue;
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
function Jl() {
  return Ue;
}
let ye;
const Zr = /* @__PURE__ */ new WeakSet();
class yo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ue && (Ue.active ? Ue.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Zr.has(this) && (Zr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || vo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, hs(this), So(this);
    const t = ye, n = gt;
    ye = this, gt = !0;
    try {
      return this.fn();
    } finally {
      To(this), ye = t, gt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mi(t);
      this.deps = this.depsTail = void 0, hs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Zr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let _o = 0, jn, $n;
function vo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $n, $n = e;
    return;
  }
  e.next = jn, jn = e;
}
function Di() {
  _o++;
}
function Li() {
  if (--_o > 0)
    return;
  if ($n) {
    let t = $n;
    for ($n = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; jn; ) {
    let t = jn;
    for (jn = void 0; t; ) {
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
function So(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function To(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const i = r.prevDep;
    r.version === -1 ? (r === n && (n = i), Mi(r), Zl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = i;
  }
  e.deps = t, e.depsTail = n;
}
function gi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Eo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Eo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Wn) || (e.globalVersion = Wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !gi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ye, r = gt;
  ye = e, gt = !0;
  try {
    So(e);
    const i = e.fn(e._value);
    (t.version === 0 || wt(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ye = n, gt = r, To(e), e.flags &= -3;
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
function Zl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let gt = !0;
const Ao = [];
function kt() {
  Ao.push(gt), gt = !1;
}
function Ut() {
  const e = Ao.pop();
  gt = e === void 0 ? !0 : e;
}
function hs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ye;
    ye = void 0;
    try {
      t();
    } finally {
      ye = n;
    }
  }
}
let Wn = 0;
class Ql {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ye || !gt || ye === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ye)
      n = this.activeLink = new Ql(ye, this), ye.deps ? (n.prevDep = ye.depsTail, ye.depsTail.nextDep = n, ye.depsTail = n) : ye.deps = ye.depsTail = n, xo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ye.depsTail, n.nextDep = void 0, ye.depsTail.nextDep = n, ye.depsTail = n, ye.deps === n && (ye.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Wn++, this.notify(t);
  }
  notify(t) {
    Di();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Li();
    }
  }
}
function xo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        xo(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const yi = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ Symbol(
  ""
), _i = /* @__PURE__ */ Symbol(
  ""
), qn = /* @__PURE__ */ Symbol(
  ""
);
function Ve(e, t, n) {
  if (gt && ye) {
    let r = yi.get(e);
    r || yi.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || (r.set(n, i = new Fi()), i.map = r, i.key = n), i.track();
  }
}
function Lt(e, t, n, r, i, s) {
  const o = yi.get(e);
  if (!o) {
    Wn++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (Di(), t === "clear")
    o.forEach(l);
  else {
    const c = K(e), _ = c && Pi(n);
    if (c && n === "length") {
      const h = Number(r);
      o.forEach((E, N) => {
        (N === "length" || N === qn || !Rt(N) && N >= h) && l(E);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), _ && l(o.get(qn)), t) {
        case "add":
          c ? _ && l(o.get("length")) : (l(o.get(sn)), qt(e) && l(o.get(_i)));
          break;
        case "delete":
          c || (l(o.get(sn)), qt(e) && l(o.get(_i)));
          break;
        case "set":
          qt(e) && l(o.get(sn));
          break;
      }
  }
  Li();
}
function mn(e) {
  const t = /* @__PURE__ */ ae(e);
  return t === e ? t : (Ve(t, "iterate", qn), /* @__PURE__ */ pt(e) ? t : t.map(yt));
}
function Dr(e) {
  return Ve(e = /* @__PURE__ */ ae(e), "iterate", qn), e;
}
function xt(e, t) {
  return /* @__PURE__ */ Ht(e) ? An(/* @__PURE__ */ on(e) ? yt(t) : t) : yt(t);
}
const ea = {
  __proto__: null,
  [Symbol.iterator]() {
    return Qr(this, Symbol.iterator, (e) => xt(this, e));
  },
  concat(...e) {
    return mn(this).concat(
      ...e.map((t) => K(t) ? mn(t) : t)
    );
  },
  entries() {
    return Qr(this, "entries", (e) => (e[1] = xt(this, e[1]), e));
  },
  every(e, t) {
    return Pt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Pt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => xt(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Pt(
      this,
      "find",
      e,
      t,
      (n) => xt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Pt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Pt(
      this,
      "findLast",
      e,
      t,
      (n) => xt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Pt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Pt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ei(this, "includes", e);
  },
  indexOf(...e) {
    return ei(this, "indexOf", e);
  },
  join(e) {
    return mn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ei(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Nn(this, "pop");
  },
  push(...e) {
    return Nn(this, "push", e);
  },
  reduce(e, ...t) {
    return ms(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ms(this, "reduceRight", e, t);
  },
  shift() {
    return Nn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Nn(this, "splice", e);
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
    return Nn(this, "unshift", e);
  },
  values() {
    return Qr(this, "values", (e) => xt(this, e));
  }
};
function Qr(e, t, n) {
  const r = Dr(e), i = r[t]();
  return r !== e && !/* @__PURE__ */ pt(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const ta = Array.prototype;
function Pt(e, t, n, r, i, s) {
  const o = Dr(e), l = o !== e && !/* @__PURE__ */ pt(e), c = o[t];
  if (c !== ta[t]) {
    const E = c.apply(e, s);
    return l ? yt(E) : E;
  }
  let _ = n;
  o !== e && (l ? _ = function(E, N) {
    return n.call(this, xt(e, E), N, e);
  } : n.length > 2 && (_ = function(E, N) {
    return n.call(this, E, N, e);
  }));
  const h = c.call(o, _, r);
  return l && i ? i(h) : h;
}
function ms(e, t, n, r) {
  const i = Dr(e), s = i !== e && !/* @__PURE__ */ pt(e);
  let o = n, l = !1;
  i !== e && (s ? (l = r.length === 0, o = function(_, h, E) {
    return l && (l = !1, _ = xt(e, _)), n.call(this, _, xt(e, h), E, e);
  }) : n.length > 3 && (o = function(_, h, E) {
    return n.call(this, _, h, E, e);
  }));
  const c = i[t](o, ...r);
  return l ? xt(e, c) : c;
}
function ei(e, t, n) {
  const r = /* @__PURE__ */ ae(e);
  Ve(r, "iterate", qn);
  const i = r[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ Hi(n[0]) ? (n[0] = /* @__PURE__ */ ae(n[0]), r[t](...n)) : i;
}
function Nn(e, t, n = []) {
  kt(), Di();
  const r = (/* @__PURE__ */ ae(e))[t].apply(e, n);
  return Li(), Ut(), r;
}
const na = /* @__PURE__ */ Ri("__proto__,__v_isRef,__isVue"), Co = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Rt)
);
function ra(e) {
  Rt(e) || (e = String(e));
  const t = /* @__PURE__ */ ae(this);
  return Ve(t, "has", e), t.hasOwnProperty(e);
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
      return r === (i ? s ? pa : Po : s ? No : Ro).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = K(t);
    if (!i) {
      let c;
      if (o && (c = ea[n]))
        return c;
      if (n === "hasOwnProperty")
        return ra;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ze(t) ? t : r
    );
    if ((Rt(n) ? Co.has(n) : na(n)) || (i || Ve(t, "get", n), s))
      return l;
    if (/* @__PURE__ */ ze(l)) {
      const c = o && Pi(n) ? l : l.value;
      return i && de(c) ? /* @__PURE__ */ Si(c) : c;
    }
    return de(l) ? i ? /* @__PURE__ */ Si(l) : /* @__PURE__ */ nn(l) : l;
  }
}
class Oo extends wo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let s = t[n];
    const o = K(t) && Pi(n);
    if (!this._isShallow) {
      const _ = /* @__PURE__ */ Ht(s);
      if (!/* @__PURE__ */ pt(r) && !/* @__PURE__ */ Ht(r) && (s = /* @__PURE__ */ ae(s), r = /* @__PURE__ */ ae(r)), !o && /* @__PURE__ */ ze(s) && !/* @__PURE__ */ ze(r))
        return _ || (s.value = r), !0;
    }
    const l = o ? Number(n) < t.length : ce(t, n), c = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ ze(t) ? t : i
    );
    return t === /* @__PURE__ */ ae(i) && c && (l ? wt(r, s) && Lt(t, "set", n, r) : Lt(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = ce(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && Lt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Rt(n) || !Co.has(n)) && Ve(t, "has", n), r;
  }
  ownKeys(t) {
    return Ve(
      t,
      "iterate",
      K(t) ? "length" : sn
    ), Reflect.ownKeys(t);
  }
}
class ia extends wo {
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
const sa = /* @__PURE__ */ new Oo(), oa = /* @__PURE__ */ new ia(), la = /* @__PURE__ */ new Oo(!0);
const vi = (e) => e, ar = (e) => Reflect.getPrototypeOf(e);
function aa(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, s = /* @__PURE__ */ ae(i), o = qt(s), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, _ = i[e](...r), h = n ? vi : t ? An : yt;
    return !t && Ve(
      s,
      "iterate",
      c ? _i : sn
    ), Be(
      // inheriting all iterator properties
      Object.create(_),
      {
        // iterator protocol
        next() {
          const { value: E, done: N } = _.next();
          return N ? { value: E, done: N } : {
            value: l ? [h(E[0]), h(E[1])] : h(E),
            done: N
          };
        }
      }
    );
  };
}
function cr(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ca(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ ae(s), l = /* @__PURE__ */ ae(i);
      e || (wt(i, l) && Ve(o, "get", i), Ve(o, "get", l));
      const { has: c } = ar(o), _ = t ? vi : e ? An : yt;
      if (c.call(o, i))
        return _(s.get(i));
      if (c.call(o, l))
        return _(s.get(l));
      s !== o && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ve(/* @__PURE__ */ ae(i), "iterate", sn), i.size;
    },
    has(i) {
      const s = this.__v_raw, o = /* @__PURE__ */ ae(s), l = /* @__PURE__ */ ae(i);
      return e || (wt(i, l) && Ve(o, "has", i), Ve(o, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
    },
    forEach(i, s) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ ae(l), _ = t ? vi : e ? An : yt;
      return !e && Ve(c, "iterate", sn), l.forEach((h, E) => i.call(s, _(h), _(E), o));
    }
  };
  return Be(
    n,
    e ? {
      add: cr("add"),
      set: cr("set"),
      delete: cr("delete"),
      clear: cr("clear")
    } : {
      add(i) {
        const s = /* @__PURE__ */ ae(this), o = ar(s), l = /* @__PURE__ */ ae(i), c = !t && !/* @__PURE__ */ pt(i) && !/* @__PURE__ */ Ht(i) ? l : i;
        return o.has.call(s, c) || wt(i, c) && o.has.call(s, i) || wt(l, c) && o.has.call(s, l) || (s.add(c), Lt(s, "add", c, c)), this;
      },
      set(i, s) {
        !t && !/* @__PURE__ */ pt(s) && !/* @__PURE__ */ Ht(s) && (s = /* @__PURE__ */ ae(s));
        const o = /* @__PURE__ */ ae(this), { has: l, get: c } = ar(o);
        let _ = l.call(o, i);
        _ || (i = /* @__PURE__ */ ae(i), _ = l.call(o, i));
        const h = c.call(o, i);
        return o.set(i, s), _ ? wt(s, h) && Lt(o, "set", i, s) : Lt(o, "add", i, s), this;
      },
      delete(i) {
        const s = /* @__PURE__ */ ae(this), { has: o, get: l } = ar(s);
        let c = o.call(s, i);
        c || (i = /* @__PURE__ */ ae(i), c = o.call(s, i)), l && l.call(s, i);
        const _ = s.delete(i);
        return c && Lt(s, "delete", i, void 0), _;
      },
      clear() {
        const i = /* @__PURE__ */ ae(this), s = i.size !== 0, o = i.clear();
        return s && Lt(
          i,
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
  ].forEach((i) => {
    n[i] = aa(i, e, t);
  }), n;
}
function ki(e, t) {
  const n = ca(e, t);
  return (r, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    ce(n, i) && i in r ? n : r,
    i,
    s
  );
}
const ua = {
  get: /* @__PURE__ */ ki(!1, !1)
}, fa = {
  get: /* @__PURE__ */ ki(!1, !0)
}, da = {
  get: /* @__PURE__ */ ki(!0, !1)
};
const Ro = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), Po = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap();
function ha(e) {
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
  return /* @__PURE__ */ Ht(e) ? e : Ui(
    e,
    !1,
    sa,
    ua,
    Ro
  );
}
// @__NO_SIDE_EFFECTS__
function ma(e) {
  return Ui(
    e,
    !1,
    la,
    fa,
    No
  );
}
// @__NO_SIDE_EFFECTS__
function Si(e) {
  return Ui(
    e,
    !0,
    oa,
    da,
    Po
  );
}
function Ui(e, t, n, r, i) {
  if (!de(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const o = ha(Hl(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function on(e) {
  return /* @__PURE__ */ Ht(e) ? /* @__PURE__ */ on(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function pt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ae(t) : e;
}
function ba(e) {
  return !ce(e, "__v_skip") && Object.isExtensible(e) && ho(e, "__v_skip", !0), e;
}
const yt = (e) => de(e) ? /* @__PURE__ */ nn(e) : e, An = (e) => de(e) ? /* @__PURE__ */ Si(e) : e;
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return ya(e, !1);
}
function ya(e, t) {
  return /* @__PURE__ */ ze(e) ? e : new _a(e, t);
}
class _a {
  constructor(t, n) {
    this.dep = new Fi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ae(t), this._value = n ? t : yt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ pt(t) || /* @__PURE__ */ Ht(t);
    t = r ? t : /* @__PURE__ */ ae(t), wt(t, n) && (this._rawValue = t, this._value = r ? t : yt(t), this.dep.trigger());
  }
}
function A(e) {
  return /* @__PURE__ */ ze(e) ? e.value : e;
}
const va = {
  get: (e, t, n) => t === "__v_raw" ? e : A(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return /* @__PURE__ */ ze(i) && !/* @__PURE__ */ ze(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Io(e) {
  return /* @__PURE__ */ on(e) ? e : new Proxy(e, va);
}
class Sa {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Fi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ye !== this)
      return vo(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Eo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ta(e, t, n = !1) {
  let r, i;
  return Z(e) ? r = e : (r = e.get, i = e.set), new Sa(r, i, n);
}
const ur = {}, _r = /* @__PURE__ */ new WeakMap();
let Qt;
function Ea(e, t = !1, n = Qt) {
  if (n) {
    let r = _r.get(n);
    r || _r.set(n, r = []), r.push(e);
  }
}
function Aa(e, t, n = be) {
  const { immediate: r, deep: i, once: s, scheduler: o, augmentJob: l, call: c } = n, _ = (D) => i ? D : /* @__PURE__ */ pt(D) || i === !1 || i === 0 ? Mt(D, 1) : Mt(D);
  let h, E, N, M, G = !1, k = !1;
  if (/* @__PURE__ */ ze(e) ? (E = () => e.value, G = /* @__PURE__ */ pt(e)) : /* @__PURE__ */ on(e) ? (E = () => _(e), G = !0) : K(e) ? (k = !0, G = e.some((D) => /* @__PURE__ */ on(D) || /* @__PURE__ */ pt(D)), E = () => e.map((D) => {
    if (/* @__PURE__ */ ze(D))
      return D.value;
    if (/* @__PURE__ */ on(D))
      return _(D);
    if (Z(D))
      return c ? c(D, 2) : D();
  })) : Z(e) ? t ? E = c ? () => c(e, 2) : e : E = () => {
    if (N) {
      kt();
      try {
        N();
      } finally {
        Ut();
      }
    }
    const D = Qt;
    Qt = h;
    try {
      return c ? c(e, 3, [M]) : e(M);
    } finally {
      Qt = D;
    }
  } : E = Ot, t && i) {
    const D = E, re = i === !0 ? 1 / 0 : i;
    E = () => Mt(D(), re);
  }
  const X = Jl(), V = () => {
    h.stop(), X && X.active && Ni(X.effects, h);
  };
  if (s && t) {
    const D = t;
    t = (...re) => {
      const we = D(...re);
      return V(), we;
    };
  }
  let P = k ? new Array(e.length).fill(ur) : ur;
  const W = (D) => {
    if (!(!(h.flags & 1) || !h.dirty && !D))
      if (t) {
        const re = h.run();
        if (D || i || G || (k ? re.some((we, Ee) => wt(we, P[Ee])) : wt(re, P))) {
          N && N();
          const we = Qt;
          Qt = h;
          try {
            const Ee = [
              re,
              // pass undefined as the old value when it's changed for the first time
              P === ur ? void 0 : k && P[0] === ur ? [] : P,
              M
            ];
            P = re, c ? c(t, 3, Ee) : (
              // @ts-expect-error
              t(...Ee)
            );
          } finally {
            Qt = we;
          }
        }
      } else
        h.run();
  };
  return l && l(W), h = new yo(E), h.scheduler = o ? () => o(W, !1) : W, M = (D) => Ea(D, !1, h), N = h.onStop = () => {
    const D = _r.get(h);
    if (D) {
      if (c)
        c(D, 4);
      else
        for (const re of D) re();
      _r.delete(h);
    }
  }, t ? r ? W(!0) : P = h.run() : o ? o(W.bind(null, !0), !0) : h.run(), V.pause = h.pause.bind(h), V.resume = h.resume.bind(h), V.stop = V, V;
}
function Mt(e, t = 1 / 0, n) {
  if (t <= 0 || !de(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ze(e))
    Mt(e.value, t, n);
  else if (K(e))
    for (let r = 0; r < e.length; r++)
      Mt(e[r], t, n);
  else if (an(e) || qt(e))
    e.forEach((r) => {
      Mt(r, t, n);
    });
  else if (fo(e)) {
    for (const r in e)
      Mt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Mt(e[r], t, n);
  }
  return e;
}
function Zn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    Lr(i, t, n);
  }
}
function _t(e, t, n, r) {
  if (Z(e)) {
    const i = Zn(e, t, n, r);
    return i && co(i) && i.catch((s) => {
      Lr(s, t, n);
    }), i;
  }
  if (K(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(_t(e[s], t, n, r));
    return i;
  }
}
function Lr(e, t, n, r = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = t && t.appContext.config || be;
  if (t) {
    let l = t.parent;
    const c = t.proxy, _ = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const h = l.ec;
      if (h) {
        for (let E = 0; E < h.length; E++)
          if (h[E](e, c, _) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      kt(), Zn(s, null, 10, [
        e,
        c,
        _
      ]), Ut();
      return;
    }
  }
  xa(e, n, i, r, o);
}
function xa(e, t, n, r = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Je = [];
let At = -1;
const Sn = [];
let Wt = null, gn = 0;
const Do = /* @__PURE__ */ Promise.resolve();
let vr = null;
function Lo(e) {
  const t = vr || Do;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ca(e) {
  let t = At + 1, n = Je.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = Je[r], s = Kn(i);
    s < e || s === e && i.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ji(e) {
  if (!(e.flags & 1)) {
    const t = Kn(e), n = Je[Je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Kn(n) ? Je.push(e) : Je.splice(Ca(t), 0, e), e.flags |= 1, Mo();
  }
}
function Mo() {
  vr || (vr = Do.then(ko));
}
function wa(e) {
  if (!K(e))
    Wt && e.id === -1 ? Wt.splice(gn + 1, 0, e) : e.flags & 1 || (Sn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Sn.push(e[t]);
  Mo();
}
function bs(e, t, n = At + 1) {
  for (; n < Je.length; n++) {
    const r = Je[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Je.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Fo(e) {
  if (Sn.length) {
    const t = [...new Set(Sn)].sort(
      (n, r) => Kn(n) - Kn(r)
    );
    if (Sn.length = 0, Wt) {
      for (let n = 0; n < t.length; n++)
        Wt.push(t[n]);
      return;
    }
    for (Wt = t, gn = 0; gn < Wt.length; gn++) {
      const n = Wt[gn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Wt = null, gn = 0;
  }
}
const Kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ko(e) {
  try {
    for (At = 0; At < Je.length; At++) {
      const t = Je[At];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Zn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; At < Je.length; At++) {
      const t = Je[At];
      t && (t.flags &= -2);
    }
    At = -1, Je.length = 0, Fo(), vr = null, (Je.length || Sn.length) && ko();
  }
}
let dt = null, Uo = null;
function Sr(e) {
  const t = dt;
  return dt = e, Uo = e && e.type.__scopeId || null, t;
}
function Oa(e, t = dt, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && ws(-1);
    const s = Sr(t), o = ln.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let c = ln.length; c > o; c--) ul();
      Sr(s), r._d && ws(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Le(e, t) {
  if (dt === null)
    return e;
  const n = Hr(dt), r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [s, o, l, c = be] = t[i];
    s && (Z(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Mt(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Xt(e, t, n, r) {
  const i = e.dirs, s = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    s && (l.oldValue = s[o].value);
    let c = l.dir[r];
    c && (kt(), _t(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ut());
  }
}
function Ra(e, t) {
  if (Ze) {
    let n = Ze.provides;
    const r = Ze.parent && Ze.parent.provides;
    r === n && (n = Ze.provides = Object.create(r)), n[e] = t;
  }
}
function br(e, t, n = !1) {
  const r = xc();
  if (r || Tn) {
    let i = Tn ? Tn._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && Z(t) ? t.call(r && r.proxy) : t;
  }
}
const Na = /* @__PURE__ */ Symbol.for("v-scx"), Pa = () => br(Na);
function ti(e, t, n) {
  return Ho(e, t, n);
}
function Ho(e, t, n = be) {
  const { immediate: r, deep: i, flush: s, once: o } = n, l = Be({}, n), c = t && r || !t && s !== "post";
  let _;
  if (Xn) {
    if (s === "sync") {
      const M = Pa();
      _ = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!c) {
      const M = () => {
      };
      return M.stop = Ot, M.resume = Ot, M.pause = Ot, M;
    }
  }
  const h = Ze;
  l.call = (M, G, k) => _t(M, h, G, k);
  let E = !1;
  s === "post" ? l.scheduler = (M) => {
    rt(M, h && h.suspense);
  } : s !== "sync" && (E = !0, l.scheduler = (M, G) => {
    G ? M() : ji(M);
  }), l.augmentJob = (M) => {
    t && (M.flags |= 4), E && (M.flags |= 2, h && (M.id = h.uid, M.i = h));
  };
  const N = Aa(e, t, l);
  return Xn && (_ ? _.push(N) : c && N()), N;
}
function Ia(e, t, n) {
  const r = this.proxy, i = Ce(e) ? e.includes(".") ? jo(r, e) : () => r[e] : e.bind(r, r);
  let s;
  Z(t) ? s = t : (s = t.handler, n = t);
  const o = Qn(this), l = Ho(i, s.bind(r), n);
  return o(), l;
}
function jo(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
const Da = /* @__PURE__ */ Symbol("_vte"), Mr = (e) => e.__isTeleport, ni = /* @__PURE__ */ Symbol("_leaveCb");
function La(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== jt) {
        t = n;
        break;
      }
  }
  return t;
}
function $o(e) {
  if (!Vi(e))
    return Mr(e.type) && e.children ? La(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Z(n.default))
      return n.default();
  }
}
function $i(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    $i(
      Mr(n.type) && $o(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Vo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Tr = /* @__PURE__ */ new WeakMap();
function Vn(e, t, n, r, i = !1) {
  if (K(e)) {
    e.forEach(
      (k, X) => Vn(
        k,
        t && (K(t) ? t[X] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (zn(r) && !i) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Vn(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Hr(r.component) : r.el, o = i ? null : s, { i: l, r: c } = e, _ = t && t.r, h = l.refs === be ? l.refs = {} : l.refs, E = l.setupState, N = /* @__PURE__ */ ae(E), M = E === be ? ao : (k) => gs(h, k) ? !1 : ce(N, k), G = (k, X) => !(X && gs(h, X));
  if (_ != null && _ !== c) {
    if (ys(t), Ce(_))
      h[_] = null, M(_) && (E[_] = null);
    else if (/* @__PURE__ */ ze(_)) {
      const k = t;
      G(_, k.k) && (_.value = null), k.k && (h[k.k] = null);
    }
  }
  if (Z(c))
    Zn(c, l, 12, [o, h]);
  else {
    const k = Ce(c), X = /* @__PURE__ */ ze(c);
    if (k || X) {
      const V = () => {
        if (e.f) {
          const P = k ? M(c) ? E[c] : h[c] : G() || !e.k ? c.value : h[e.k];
          if (i)
            K(P) && Ni(P, s);
          else if (K(P))
            P.includes(s) || P.push(s);
          else if (k)
            h[c] = [s], M(c) && (E[c] = h[c]);
          else {
            const W = [s];
            G(c, e.k) && (c.value = W), e.k && (h[e.k] = W);
          }
        } else k ? (h[c] = o, M(c) && (E[c] = o)) : X && (G(c, e.k) && (c.value = o), e.k && (h[e.k] = o));
      };
      if (o) {
        const P = () => {
          V(), Tr.delete(e);
        };
        P.id = -1, Tr.set(e, P), rt(P, n);
      } else
        ys(e), V();
    }
  }
}
function ys(e) {
  const t = Tr.get(e);
  t && (t.flags |= 8, Tr.delete(e));
}
Ir().requestIdleCallback;
Ir().cancelIdleCallback;
const zn = (e) => !!e.type.__asyncLoader, Vi = (e) => e.type.__isKeepAlive;
function Ma(e, t) {
  zo(e, "a", t);
}
function Fa(e, t) {
  zo(e, "da", t);
}
function zo(e, t, n = Ze) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Fr(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Vi(i.parent.vnode) && ka(r, t, n, i), i = i.parent;
  }
}
function ka(e, t, n, r) {
  const i = Fr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  qo(() => {
    Ni(r[t], i);
  }, n);
}
function Fr(e, t, n = Ze, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      kt();
      const l = Qn(n), c = _t(t, n, e, o);
      return l(), Ut(), c;
    });
    return r ? i.unshift(s) : i.push(s), s;
  }
}
const $t = (e) => (t, n = Ze) => {
  (!Xn || e === "sp") && Fr(e, (...r) => t(...r), n);
}, Ua = $t("bm"), Bo = $t("m"), Ha = $t(
  "bu"
), ja = $t("u"), Wo = $t(
  "bum"
), qo = $t("um"), $a = $t(
  "sp"
), Va = $t("rtg"), za = $t("rtc");
function Ba(e, t = Ze) {
  Fr("ec", e, t);
}
const Wa = /* @__PURE__ */ Symbol.for("v-ndc");
function ke(e, t, n, r) {
  let i;
  const s = n, o = K(e);
  if (o || Ce(e)) {
    const l = o && /* @__PURE__ */ on(e);
    let c = !1, _ = !1;
    l && (c = !/* @__PURE__ */ pt(e), _ = /* @__PURE__ */ Ht(e), e = Dr(e)), i = new Array(e.length);
    for (let h = 0, E = e.length; h < E; h++)
      i[h] = t(
        c ? _ ? An(yt(e[h])) : yt(e[h]) : e[h],
        h,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, s);
  } else if (de(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, s)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, _ = l.length; c < _; c++) {
        const h = l[c];
        i[c] = t(e[h], h, c, s);
      }
    }
  else
    i = [];
  return i;
}
const Ti = (e) => e ? hl(e) ? Hr(e) : Ti(e.parent) : null, Bn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Be(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => Go(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ji(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Lo.bind(e.proxy)),
    $watch: (e) => Ia.bind(e)
  })
), ri = (e, t) => e !== be && !e.__isScriptSetup && ce(e, t), qa = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: s, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const N = o[t];
      if (N !== void 0)
        switch (N) {
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
        if (ri(r, t))
          return o[t] = 1, r[t];
        if (i !== be && ce(i, t))
          return o[t] = 2, i[t];
        if (ce(s, t))
          return o[t] = 3, s[t];
        if (n !== be && ce(n, t))
          return o[t] = 4, n[t];
        Ei && (o[t] = 0);
      }
    }
    const _ = Bn[t];
    let h, E;
    if (_)
      return t === "$attrs" && Ve(e.attrs, "get", ""), _(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== be && ce(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      E = c.config.globalProperties, ce(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: s } = e;
    return ri(i, t) ? (i[t] = n, !0) : r !== be && ce(r, t) ? (r[t] = n, !0) : ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: s, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== be && l[0] !== "$" && ce(e, l) || ri(t, l) || ce(s, l) || ce(r, l) || ce(Bn, l) || ce(i.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ce(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function _s(e) {
  return K(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ei = !0;
function Ka(e) {
  const t = Go(e), n = e.proxy, r = e.ctx;
  Ei = !1, t.beforeCreate && vs(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: o,
    watch: l,
    provide: c,
    inject: _,
    // lifecycle
    created: h,
    beforeMount: E,
    mounted: N,
    beforeUpdate: M,
    updated: G,
    activated: k,
    deactivated: X,
    beforeDestroy: V,
    beforeUnmount: P,
    destroyed: W,
    unmounted: D,
    render: re,
    renderTracked: we,
    renderTriggered: Ee,
    errorCaptured: B,
    serverPrefetch: z,
    // public API
    expose: ue,
    inheritAttrs: ve,
    // assets
    components: pe,
    directives: Se,
    filters: _e
  } = t;
  if (_ && Ga(_, r, null), o)
    for (const te in o) {
      const Q = o[te];
      Z(Q) && (r[te] = Q.bind(n));
    }
  if (i) {
    const te = i.call(n, n);
    de(te) && (e.data = /* @__PURE__ */ nn(te));
  }
  if (Ei = !0, s)
    for (const te in s) {
      const Q = s[te], Oe = Z(Q) ? Q.bind(n, n) : Z(Q.get) ? Q.get.bind(n, n) : Ot, We = !Z(Q) && Z(Q.set) ? Q.set.bind(n) : Ot, st = me({
        get: Oe,
        set: We
      });
      Object.defineProperty(r, te, {
        enumerable: !0,
        configurable: !0,
        get: () => st.value,
        set: (Fe) => st.value = Fe
      });
    }
  if (l)
    for (const te in l)
      Ko(l[te], r, n, te);
  if (c) {
    const te = Z(c) ? c.call(n) : c;
    Reflect.ownKeys(te).forEach((Q) => {
      Ra(Q, te[Q]);
    });
  }
  h && vs(h, e, "c");
  function he(te, Q) {
    K(Q) ? Q.forEach((Oe) => te(Oe.bind(n))) : Q && te(Q.bind(n));
  }
  if (he(Ua, E), he(Bo, N), he(Ha, M), he(ja, G), he(Ma, k), he(Fa, X), he(Ba, B), he(za, we), he(Va, Ee), he(Wo, P), he(qo, D), he($a, z), K(ue))
    if (ue.length) {
      const te = e.exposed || (e.exposed = {});
      ue.forEach((Q) => {
        Object.defineProperty(te, Q, {
          get: () => n[Q],
          set: (Oe) => n[Q] = Oe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === Ot && (e.render = re), ve != null && (e.inheritAttrs = ve), pe && (e.components = pe), Se && (e.directives = Se), z && Vo(e);
}
function Ga(e, t, n = Ot) {
  K(e) && (e = Ai(e));
  for (const r in e) {
    const i = e[r];
    let s;
    de(i) ? "default" in i ? s = br(
      i.from || r,
      i.default,
      !0
    ) : s = br(i.from || r) : s = br(i), /* @__PURE__ */ ze(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[r] = s;
  }
}
function vs(e, t, n) {
  _t(
    K(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ko(e, t, n, r) {
  let i = r.includes(".") ? jo(n, r) : () => n[r];
  if (Ce(e)) {
    const s = t[e];
    Z(s) && ti(i, s);
  } else if (Z(e))
    ti(i, e.bind(n));
  else if (de(e))
    if (K(e))
      e.forEach((s) => Ko(s, t, n, r));
    else {
      const s = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
      Z(s) && ti(i, s, e);
    }
}
function Go(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = s.get(t);
  let c;
  return l ? c = l : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach(
    (_) => Er(c, _, o, !0)
  ), Er(c, t, o)), de(t) && s.set(t, c), c;
}
function Er(e, t, n, r = !1) {
  const { mixins: i, extends: s } = t;
  s && Er(e, s, n, !0), i && i.forEach(
    (o) => Er(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = Ya[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Ya = {
  data: Ss,
  props: Ts,
  emits: Ts,
  // objects
  methods: Fn,
  computed: Fn,
  // lifecycle
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  // assets
  components: Fn,
  directives: Fn,
  // watch
  watch: Ja,
  // provide / inject
  provide: Ss,
  inject: Xa
};
function Ss(e, t) {
  return t ? e ? function() {
    return Be(
      Z(e) ? e.call(this, this) : e,
      Z(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Xa(e, t) {
  return Fn(Ai(e), Ai(t));
}
function Ai(e) {
  if (K(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Fn(e, t) {
  return e ? Be(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ts(e, t) {
  return e ? K(e) && K(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Be(
    /* @__PURE__ */ Object.create(null),
    _s(e),
    _s(t ?? {})
  ) : t;
}
function Ja(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Be(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Xe(e[r], t[r]);
  return n;
}
function Yo() {
  return {
    app: null,
    config: {
      isNativeTag: ao,
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
let Za = 0;
function Qa(e, t) {
  return function(r, i = null) {
    Z(r) || (r = Be({}, r)), i != null && !de(i) && (i = null);
    const s = Yo(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const _ = s.app = {
      _uid: Za++,
      _component: r,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: Pc,
      get config() {
        return s.config;
      },
      set config(h) {
      },
      use(h, ...E) {
        return o.has(h) || (h && Z(h.install) ? (o.add(h), h.install(_, ...E)) : Z(h) && (o.add(h), h(_, ...E))), _;
      },
      mixin(h) {
        return s.mixins.includes(h) || s.mixins.push(h), _;
      },
      component(h, E) {
        return E ? (s.components[h] = E, _) : s.components[h];
      },
      directive(h, E) {
        return E ? (s.directives[h] = E, _) : s.directives[h];
      },
      mount(h, E, N) {
        if (!c) {
          const M = _._ceVNode || Ft(r, i);
          return M.appContext = s, N === !0 ? N = "svg" : N === !1 && (N = void 0), e(M, h, N), c = !0, _._container = h, h.__vue_app__ = _, Hr(M.component);
        }
      },
      onUnmount(h) {
        l.push(h);
      },
      unmount() {
        c && (_t(
          l,
          _._instance,
          16
        ), e(null, _._container), delete _._container.__vue_app__);
      },
      provide(h, E) {
        return s.provides[h] = E, _;
      },
      runWithContext(h) {
        const E = Tn;
        Tn = _;
        try {
          return h();
        } finally {
          Tn = E;
        }
      }
    };
    return _;
  };
}
let Tn = null;
const ec = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${bt(t)}Modifiers`] || e[`${cn(t)}Modifiers`];
function tc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || be;
  let i = n;
  const s = t.startsWith("update:"), o = s && ec(r, t.slice(7));
  o && (o.trim && (i = n.map((h) => Ce(h) ? h.trim() : h)), o.number && (i = i.map(Pr)));
  let l, c = r[l = Xr(t)] || // also try camelCase event handler (#2249)
  r[l = Xr(bt(t))];
  !c && s && (c = r[l = Xr(cn(t))]), c && _t(
    c,
    e,
    6,
    i
  );
  const _ = r[l + "Once"];
  if (_) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, _t(
      _,
      e,
      6,
      i
    );
  }
}
const nc = /* @__PURE__ */ new WeakMap();
function Xo(e, t, n = !1) {
  const r = n ? nc : t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let o = {}, l = !1;
  if (!Z(e)) {
    const c = (_) => {
      const h = Xo(_, t, !0);
      h && (l = !0, Be(o, h));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !s && !l ? (de(e) && r.set(e, null), null) : (K(s) ? s.forEach((c) => o[c] = null) : Be(o, s), de(e) && r.set(e, o), o);
}
function kr(e, t) {
  return !e || !Or(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, cn(t)) || ce(e, t));
}
function Es(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [s],
    slots: o,
    attrs: l,
    emit: c,
    render: _,
    renderCache: h,
    props: E,
    data: N,
    setupState: M,
    ctx: G,
    inheritAttrs: k
  } = e, X = Sr(e);
  let V, P;
  try {
    if (n.shapeFlag & 4) {
      const D = i || r, re = D;
      V = Ct(
        _.call(
          re,
          D,
          h,
          E,
          M,
          N,
          G
        )
      ), P = l;
    } else {
      const D = t;
      V = Ct(
        D.length > 1 ? D(
          E,
          { attrs: l, slots: o, emit: c }
        ) : D(
          E,
          null
        )
      ), P = t.props ? l : rc(l);
    }
  } catch (D) {
    ln.length = 0, Lr(D, e, 1), V = Ft(jt);
  }
  let W = V;
  if (P && k !== !1) {
    const D = Object.keys(P), { shapeFlag: re } = W;
    D.length && re & 7 && (s && D.some(Rr) && (P = ic(
      P,
      s
    )), W = xn(W, P, !1, !0));
  }
  if (n.dirs && (W = xn(W, null, !1, !0), W.dirs = W.dirs ? W.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const D = Mr(W.type) && $o(W) || W;
    $i(D, n.transition);
  }
  return V = W, Sr(X), V;
}
const rc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Or(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ic = (e, t) => {
  const n = {};
  for (const r in e)
    (!Rr(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function sc(e, t, n) {
  const { props: r, children: i, component: s } = e, { props: o, children: l, patchFlag: c } = t, _ = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? As(r, o, _) : !!o;
    if (c & 8) {
      const h = t.dynamicProps;
      for (let E = 0; E < h.length; E++) {
        const N = h[E];
        if (Jo(o, r, N) && !kr(_, N))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? As(r, o, _) : !0 : !!o;
  return !1;
}
function As(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (Jo(t, e, s) && !kr(n, s))
      return !0;
  }
  return !1;
}
function Jo(e, t, n) {
  const r = e[n], i = t[n];
  return n === "style" && de(r) && de(i) ? !Kt(r, i) : r !== i;
}
function oc({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = r, e = i), i === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Zo = {}, Qo = () => Object.create(Zo), el = (e) => Object.getPrototypeOf(e) === Zo;
function lc(e, t, n, r = !1) {
  const i = {}, s = Qo();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), tl(e, t, i, s);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = r ? i : /* @__PURE__ */ ma(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function ac(e, t, n, r) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ ae(i), [c] = e.propsOptions;
  let _ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const h = e.vnode.dynamicProps;
      for (let E = 0; E < h.length; E++) {
        let N = h[E];
        if (kr(e.emitsOptions, N))
          continue;
        const M = t[N];
        if (c)
          if (ce(s, N))
            M !== s[N] && (s[N] = M, _ = !0);
          else {
            const G = bt(N);
            i[G] = xi(
              c,
              l,
              G,
              M,
              e,
              !1
            );
          }
        else
          M !== s[N] && (s[N] = M, _ = !0);
      }
    }
  } else {
    tl(e, t, i, s) && (_ = !0);
    let h;
    for (const E in l)
      (!t || // for camelCase
      !ce(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = cn(E)) === E || !ce(t, h))) && (c ? n && // for camelCase
      (n[E] !== void 0 || // for kebab-case
      n[h] !== void 0) && (i[E] = xi(
        c,
        l,
        E,
        void 0,
        e,
        !0
      )) : delete i[E]);
    if (s !== l)
      for (const E in s)
        (!t || !ce(t, E)) && (delete s[E], _ = !0);
  }
  _ && Lt(e.attrs, "set", "");
}
function tl(e, t, n, r) {
  const [i, s] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Hn(c))
        continue;
      const _ = t[c];
      let h;
      i && ce(i, h = bt(c)) ? !s || !s.includes(h) ? n[h] = _ : (l || (l = {}))[h] = _ : kr(e.emitsOptions, c) || (!(c in r) || _ !== r[c]) && (r[c] = _, o = !0);
    }
  if (s) {
    const c = /* @__PURE__ */ ae(n), _ = l || be;
    for (let h = 0; h < s.length; h++) {
      const E = s[h];
      n[E] = xi(
        i,
        c,
        E,
        _[E],
        e,
        !ce(_, E)
      );
    }
  }
  return o;
}
function xi(e, t, n, r, i, s) {
  const o = e[n];
  if (o != null) {
    const l = ce(o, "default");
    if (l && r === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && Z(c)) {
        const { propsDefaults: _ } = i;
        if (n in _)
          r = _[n];
        else {
          const h = Qn(i);
          r = _[n] = c.call(
            null,
            t
          ), h();
        }
      } else
        r = c;
      i.ce && i.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === cn(n)) && (r = !0));
  }
  return r;
}
const cc = /* @__PURE__ */ new WeakMap();
function nl(e, t, n = !1) {
  const r = n ? cc : t.propsCache, i = r.get(e);
  if (i)
    return i;
  const s = e.props, o = {}, l = [];
  let c = !1;
  if (!Z(e)) {
    const h = (E) => {
      c = !0;
      const [N, M] = nl(E, t, !0);
      Be(o, N), M && l.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!s && !c)
    return de(e) && r.set(e, _n), _n;
  if (K(s))
    for (let h = 0; h < s.length; h++) {
      const E = bt(s[h]);
      xs(E) && (o[E] = be);
    }
  else if (s)
    for (const h in s) {
      const E = bt(h);
      if (xs(E)) {
        const N = s[h], M = o[E] = K(N) || Z(N) ? { type: N } : Be({}, N), G = M.type;
        let k = !1, X = !0;
        if (K(G))
          for (let V = 0; V < G.length; ++V) {
            const P = G[V], W = Z(P) && P.name;
            if (W === "Boolean") {
              k = !0;
              break;
            } else W === "String" && (X = !1);
          }
        else
          k = Z(G) && G.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = k, M[
          1
          /* shouldCastTrue */
        ] = X, (k || ce(M, "default")) && l.push(E);
      }
    }
  const _ = [o, l];
  return de(e) && r.set(e, _), _;
}
function xs(e) {
  return e[0] !== "$" && !Hn(e);
}
const zi = (e) => e === "_" || e === "_ctx" || e === "$stable", Bi = (e) => K(e) ? e.map(Ct) : [Ct(e)], uc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Oa((...i) => Bi(t(...i)), n);
  return r._c = !1, r;
}, rl = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (zi(i)) continue;
    const s = e[i];
    if (Z(s))
      t[i] = uc(i, s, r);
    else if (s != null) {
      const o = Bi(s);
      t[i] = () => o;
    }
  }
}, il = (e, t) => {
  const n = Bi(t);
  e.slots.default = () => n;
}, sl = (e, t, n) => {
  for (const r in t)
    (n || !zi(r)) && (e[r] = t[r]);
}, fc = (e, t, n) => {
  const r = e.slots = Qo();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (sl(r, t, n), n && ho(r, "_", i, !0)) : rl(t, r);
  } else t && il(e, t);
}, dc = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let s = !0, o = be;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? s = !1 : sl(i, t, n) : (s = !t.$stable, rl(t, i)), o = t;
  } else t && (il(e, t), o = { default: 1 });
  if (s)
    for (const l in i)
      !zi(l) && o[l] == null && delete i[l];
}, rt = gc;
function pc(e) {
  return hc(e);
}
function hc(e, t) {
  const n = Ir();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: c,
    setText: _,
    setElementText: h,
    parentNode: E,
    nextSibling: N,
    setScopeId: M = Ot,
    insertStaticContent: G
  } = e, k = (f, p, v, O = null, T = null, g = null, m = void 0, u = null, C = !!p.dynamicChildren) => {
    if (f === p)
      return;
    f && !Pn(f, p) && (O = je(f), Fe(f, T, g, !0), f = null), p.patchFlag === -2 && (C = !1, p.dynamicChildren = null);
    const { type: x, ref: H, shapeFlag: I } = p;
    switch (x) {
      case Ur:
        X(f, p, v, O);
        break;
      case jt:
        V(f, p, v, O);
        break;
      case si:
        f == null && P(p, v, O, m);
        break;
      case le:
        pe(
          f,
          p,
          v,
          O,
          T,
          g,
          m,
          u,
          C
        );
        break;
      default:
        I & 1 ? re(
          f,
          p,
          v,
          O,
          T,
          g,
          m,
          u,
          C
        ) : I & 6 ? Se(
          f,
          p,
          v,
          O,
          T,
          g,
          m,
          u,
          C
        ) : (I & 64 || I & 128) && x.process(
          f,
          p,
          v,
          O,
          T,
          g,
          m,
          u,
          C,
          ut
        );
    }
    H != null && T ? Vn(H, f && f.ref, g, p || f, !p) : H == null && f && f.ref != null && Vn(f.ref, null, g, f, !0);
  }, X = (f, p, v, O) => {
    if (f == null)
      r(
        p.el = l(p.children),
        v,
        O
      );
    else {
      const T = p.el = f.el;
      p.children !== f.children && _(T, p.children);
    }
  }, V = (f, p, v, O) => {
    f == null ? r(
      p.el = c(p.children || ""),
      v,
      O
    ) : p.el = f.el;
  }, P = (f, p, v, O) => {
    [f.el, f.anchor] = G(
      f.children,
      p,
      v,
      O,
      f.el,
      f.anchor
    );
  }, W = ({ el: f, anchor: p }, v, O) => {
    let T;
    for (; f && f !== p; )
      T = N(f), r(f, v, O), f = T;
    r(p, v, O);
  }, D = ({ el: f, anchor: p }) => {
    let v;
    for (; f && f !== p; )
      v = N(f), i(f), f = v;
    i(p);
  }, re = (f, p, v, O, T, g, m, u, C) => {
    if (p.type === "svg" ? m = "svg" : p.type === "math" && (m = "mathml"), f == null)
      we(
        p,
        v,
        O,
        T,
        g,
        m,
        u,
        C
      );
    else {
      const x = f.el && f.el._isVueCE ? f.el : null;
      try {
        x && x._beginPatch(), z(
          f,
          p,
          T,
          g,
          m,
          u,
          C
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, we = (f, p, v, O, T, g, m, u) => {
    let C, x;
    const { props: H, shapeFlag: I, transition: $, dirs: q } = f;
    if (C = f.el = o(
      f.type,
      g,
      H && H.is,
      H
    ), I & 8 ? h(C, f.children) : I & 16 && B(
      f.children,
      C,
      null,
      O,
      T,
      ii(f, g),
      m,
      u
    ), q && Xt(f, null, O, "created"), Ee(C, f, f.scopeId, m, O), H) {
      for (const ne in H)
        ne !== "value" && !Hn(ne) && s(C, ne, null, H[ne], g, O);
      "value" in H && s(C, "value", null, H.value, g), (x = H.onVnodeBeforeMount) && Et(x, O, f);
    }
    q && Xt(f, null, O, "beforeMount");
    const J = mc(T, $);
    J && $.beforeEnter(C), r(C, p, v), ((x = H && H.onVnodeMounted) || J || q) && rt(() => {
      x && Et(x, O, f), J && $.enter(C), q && Xt(f, null, O, "mounted");
    }, T);
  }, Ee = (f, p, v, O, T) => {
    if (v && M(f, v), O)
      for (let g = 0; g < O.length; g++)
        M(f, O[g]);
    if (T) {
      let g = T.subTree;
      if (p === g || cl(g.type) && (g.ssContent === p || g.ssFallback === p)) {
        const m = T.vnode;
        Ee(
          f,
          m,
          m.scopeId,
          m.slotScopeIds,
          T.parent
        );
      }
    }
  }, B = (f, p, v, O, T, g, m, u, C = 0) => {
    for (let x = C; x < f.length; x++) {
      const H = f[x] = u ? Dt(f[x]) : Ct(f[x]);
      k(
        null,
        H,
        p,
        v,
        O,
        T,
        g,
        m,
        u
      );
    }
  }, z = (f, p, v, O, T, g, m) => {
    const u = p.el = f.el;
    let { patchFlag: C, dynamicChildren: x, dirs: H } = p;
    C |= f.patchFlag & 16;
    const I = f.props || be, $ = p.props || be;
    let q;
    if (v && Jt(v, !1), (q = $.onVnodeBeforeUpdate) && Et(q, v, p, f), H && Xt(p, f, v, "beforeUpdate"), v && Jt(v, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!f.dynamicChildren || f.dynamicChildren.length !== x.length) && (C = 0, m = !1, x = null), (I.innerHTML && $.innerHTML == null || I.textContent && $.textContent == null) && h(u, ""), x ? ue(
      f.dynamicChildren,
      x,
      u,
      v,
      O,
      ii(p, T),
      g
    ) : m || Q(
      f,
      p,
      u,
      null,
      v,
      O,
      ii(p, T),
      g,
      !1
    ), C > 0) {
      if (C & 16)
        ve(u, I, $, v, T);
      else if (C & 2 && I.class !== $.class && s(u, "class", null, $.class, T), C & 4 && s(u, "style", I.style, $.style, T), C & 8) {
        const J = p.dynamicProps;
        for (let ne = 0; ne < J.length; ne++) {
          const ee = J[ne], Te = I[ee], xe = $[ee];
          (xe !== Te || ee === "value") && s(u, ee, Te, xe, T, v);
        }
      }
      C & 1 && f.children !== p.children && h(u, p.children);
    } else !m && x == null && ve(u, I, $, v, T);
    ((q = $.onVnodeUpdated) || H) && rt(() => {
      q && Et(q, v, p, f), H && Xt(p, f, v, "updated");
    }, O);
  }, ue = (f, p, v, O, T, g, m) => {
    for (let u = 0; u < p.length; u++) {
      const C = f[u], x = p[u], H = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pn(C, x) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 198) ? E(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      k(
        C,
        x,
        H,
        null,
        O,
        T,
        g,
        m,
        !0
      );
    }
  }, ve = (f, p, v, O, T) => {
    if (p !== v) {
      if (p !== be)
        for (const g in p)
          !Hn(g) && !(g in v) && s(
            f,
            g,
            p[g],
            null,
            T,
            O
          );
      for (const g in v) {
        if (Hn(g)) continue;
        const m = v[g], u = p[g];
        m !== u && g !== "value" && s(f, g, u, m, T, O);
      }
      "value" in v && s(f, "value", p.value, v.value, T);
    }
  }, pe = (f, p, v, O, T, g, m, u, C) => {
    const x = p.el = f ? f.el : l(""), H = p.anchor = f ? f.anchor : l("");
    let { patchFlag: I, dynamicChildren: $, slotScopeIds: q } = p;
    q && (u = u ? u.concat(q) : q), f == null ? (r(x, v, O), r(H, v, O), B(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      v,
      H,
      T,
      g,
      m,
      u,
      C
    )) : I > 0 && I & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === $.length ? (ue(
      f.dynamicChildren,
      $,
      v,
      T,
      g,
      m,
      u
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || T && p === T.subTree) && ol(
      f,
      p,
      !0
      /* shallow */
    )) : Q(
      f,
      p,
      v,
      H,
      T,
      g,
      m,
      u,
      C
    );
  }, Se = (f, p, v, O, T, g, m, u, C) => {
    p.slotScopeIds = u, f == null ? p.shapeFlag & 512 ? T.ctx.activate(
      p,
      v,
      O,
      m,
      C
    ) : _e(
      p,
      v,
      O,
      T,
      g,
      m,
      C
    ) : He(f, p, C);
  }, _e = (f, p, v, O, T, g, m) => {
    const u = f.component = Ac(
      f,
      O,
      T
    );
    if (Vi(f) && (u.ctx.renderer = ut), Cc(u, !1, m), u.asyncDep) {
      if (T && T.registerDep(u, he, m), !f.el) {
        const C = u.subTree = Ft(jt);
        V(null, C, p, v), f.placeholder = C.el;
      }
    } else
      he(
        u,
        f,
        p,
        v,
        T,
        g,
        m
      );
  }, He = (f, p, v) => {
    const O = p.component = f.component;
    if (sc(f, p, v))
      if (O.asyncDep && !O.asyncResolved) {
        te(O, p, v);
        return;
      } else
        O.next = p, O.update();
    else
      p.el = f.el, O.vnode = p;
  }, he = (f, p, v, O, T, g, m) => {
    const u = () => {
      if (f.isMounted) {
        let { next: I, bu: $, u: q, parent: J, vnode: ne } = f;
        {
          const et = ll(f);
          if (et) {
            I && (I.el = ne.el, te(f, I, m)), et.asyncDep.then(() => {
              rt(() => {
                f.isUnmounted || x();
              }, T);
            });
            return;
          }
        }
        let ee = I, Te;
        Jt(f, !1), I ? (I.el = ne.el, te(f, I, m)) : I = ne, $ && mr($), (Te = I.props && I.props.onVnodeBeforeUpdate) && Et(Te, J, I, ne), Jt(f, !0);
        const xe = Es(f), Ke = f.subTree;
        f.subTree = xe, k(
          Ke,
          xe,
          // parent may have changed if it's in a teleport
          E(Ke.el),
          // anchor may have changed if it's in a fragment
          je(Ke),
          f,
          T,
          g
        ), I.el = xe.el, ee === null && oc(f, xe.el), q && rt(q, T), (Te = I.props && I.props.onVnodeUpdated) && rt(
          () => Et(Te, J, I, ne),
          T
        );
      } else {
        let I;
        const { el: $, props: q } = p, { bm: J, m: ne, parent: ee, root: Te, type: xe } = f, Ke = zn(p);
        Jt(f, !1), J && mr(J), !Ke && (I = q && q.onVnodeBeforeMount) && Et(I, ee, p), Jt(f, !0);
        {
          Te.ce && Te.ce._hasShadowRoot() && Te.ce._injectChildStyle(
            xe,
            f.parent ? f.parent.type : void 0
          );
          const et = f.subTree = Es(f);
          k(
            null,
            et,
            v,
            O,
            f,
            T,
            g
          ), p.el = et.el;
        }
        if (ne && rt(ne, T), !Ke && (I = q && q.onVnodeMounted)) {
          const et = p;
          rt(
            () => Et(I, ee, et),
            T
          );
        }
        (p.shapeFlag & 256 || ee && zn(ee.vnode) && ee.vnode.shapeFlag & 256) && f.a && rt(f.a, T), f.isMounted = !0, p = v = O = null;
      }
    };
    f.scope.on();
    const C = f.effect = new yo(u);
    f.scope.off();
    const x = f.update = C.run.bind(C), H = f.job = C.runIfDirty.bind(C);
    H.i = f, H.id = f.uid, C.scheduler = () => ji(H), Jt(f, !0), x();
  }, te = (f, p, v) => {
    p.component = f;
    const O = f.vnode.props;
    f.vnode = p, f.next = null, ac(f, p.props, O, v), dc(f, p.children, v), kt(), bs(f), Ut();
  }, Q = (f, p, v, O, T, g, m, u, C = !1) => {
    const x = f && f.children, H = f ? f.shapeFlag : 0, I = p.children, { patchFlag: $, shapeFlag: q } = p;
    if ($ > 0) {
      if ($ & 128) {
        We(
          x,
          I,
          v,
          O,
          T,
          g,
          m,
          u,
          C
        );
        return;
      } else if ($ & 256) {
        Oe(
          x,
          I,
          v,
          O,
          T,
          g,
          m,
          u,
          C
        );
        return;
      }
    }
    q & 8 ? (H & 16 && Qe(x, T, g), I !== x && h(v, I)) : H & 16 ? q & 16 ? We(
      x,
      I,
      v,
      O,
      T,
      g,
      m,
      u,
      C
    ) : Qe(x, T, g, !0) : (H & 8 && h(v, ""), q & 16 && B(
      I,
      v,
      O,
      T,
      g,
      m,
      u,
      C
    ));
  }, Oe = (f, p, v, O, T, g, m, u, C) => {
    f = f || _n, p = p || _n;
    const x = f.length, H = p.length, I = Math.min(x, H);
    let $;
    for ($ = 0; $ < I; $++) {
      const q = p[$] = C ? Dt(p[$]) : Ct(p[$]);
      k(
        f[$],
        q,
        v,
        null,
        T,
        g,
        m,
        u,
        C
      );
    }
    x > H ? Qe(
      f,
      T,
      g,
      !0,
      !1,
      I
    ) : B(
      p,
      v,
      O,
      T,
      g,
      m,
      u,
      C,
      I
    );
  }, We = (f, p, v, O, T, g, m, u, C) => {
    let x = 0;
    const H = p.length;
    let I = f.length - 1, $ = H - 1;
    for (; x <= I && x <= $; ) {
      const q = f[x], J = p[x] = C ? Dt(p[x]) : Ct(p[x]);
      if (Pn(q, J))
        k(
          q,
          J,
          v,
          null,
          T,
          g,
          m,
          u,
          C
        );
      else
        break;
      x++;
    }
    for (; x <= I && x <= $; ) {
      const q = f[I], J = p[$] = C ? Dt(p[$]) : Ct(p[$]);
      if (Pn(q, J))
        k(
          q,
          J,
          v,
          null,
          T,
          g,
          m,
          u,
          C
        );
      else
        break;
      I--, $--;
    }
    if (x > I) {
      if (x <= $) {
        const q = $ + 1, J = q < H ? p[q].el : O;
        for (; x <= $; )
          k(
            null,
            p[x] = C ? Dt(p[x]) : Ct(p[x]),
            v,
            J,
            T,
            g,
            m,
            u,
            C
          ), x++;
      }
    } else if (x > $)
      for (; x <= I; )
        Fe(f[x], T, g, !0), x++;
    else {
      const q = x, J = x, ne = /* @__PURE__ */ new Map();
      for (x = J; x <= $; x++) {
        const De = p[x] = C ? Dt(p[x]) : Ct(p[x]);
        De.key != null && ne.set(De.key, x);
      }
      let ee, Te = 0;
      const xe = $ - J + 1;
      let Ke = !1, et = 0;
      const ft = new Array(xe);
      for (x = 0; x < xe; x++) ft[x] = 0;
      for (x = q; x <= I; x++) {
        const De = f[x];
        if (Te >= xe) {
          Fe(De, T, g, !0);
          continue;
        }
        let ot;
        if (De.key != null)
          ot = ne.get(De.key);
        else
          for (ee = J; ee <= $; ee++)
            if (ft[ee - J] === 0 && Pn(De, p[ee])) {
              ot = ee;
              break;
            }
        ot === void 0 ? Fe(De, T, g, !0) : (ft[ot - J] = x + 1, ot >= et ? et = ot : Ke = !0, k(
          De,
          p[ot],
          v,
          null,
          T,
          g,
          m,
          u,
          C
        ), Te++);
      }
      const Gt = Ke ? bc(ft) : _n;
      for (ee = Gt.length - 1, x = xe - 1; x >= 0; x--) {
        const De = J + x, ot = p[De], Cn = p[De + 1], wn = De + 1 < H ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Cn.el || al(Cn)
        ) : O;
        ft[x] === 0 ? k(
          null,
          ot,
          v,
          wn,
          T,
          g,
          m,
          u,
          C
        ) : Ke && (ee < 0 || x !== Gt[ee] ? st(ot, v, wn, 2) : ee--);
      }
    }
  }, st = (f, p, v, O, T = null) => {
    const { el: g, type: m, transition: u, children: C, shapeFlag: x } = f;
    if (x & 6) {
      st(f.component.subTree, p, v, O);
      return;
    }
    if (x & 128) {
      f.suspense.move(p, v, O);
      return;
    }
    if (x & 64) {
      m.move(f, p, v, ut);
      return;
    }
    if (m === le) {
      r(g, p, v);
      for (let I = 0; I < C.length; I++)
        st(C[I], p, v, O);
      r(f.anchor, p, v);
      return;
    }
    if (m === si) {
      W(f, p, v);
      return;
    }
    if (O !== 2 && x & 1 && u)
      if (O === 0)
        u.persisted && !g[ni] ? r(g, p, v) : (u.beforeEnter(g), r(g, p, v), rt(() => u.enter(g), T));
      else {
        const { leave: I, delayLeave: $, afterLeave: q } = u, J = () => {
          f.ctx.isUnmounted ? i(g) : r(g, p, v);
        }, ne = () => {
          const ee = g._isLeaving || !!g[ni];
          g._isLeaving && g[ni](
            !0
            /* cancelled */
          ), u.persisted && !ee ? J() : I(g, () => {
            J(), q && q();
          });
        };
        $ ? $(g, J, ne) : ne();
      }
    else
      r(g, p, v);
  }, Fe = (f, p, v, O = !1, T = !1) => {
    const {
      type: g,
      props: m,
      ref: u,
      children: C,
      dynamicChildren: x,
      shapeFlag: H,
      patchFlag: I,
      dirs: $,
      cacheIndex: q,
      memo: J
    } = f;
    if (I === -2 && (T = !1), u != null && (kt(), Vn(u, null, v, f, !0), Ut()), q != null && (p.renderCache[q] = void 0), H & 256) {
      p.ctx.deactivate(f);
      return;
    }
    const ne = H & 1 && $, ee = !zn(f);
    let Te;
    if (ee && (Te = m && m.onVnodeBeforeUnmount) && Et(Te, p, f), H & 6)
      Nt(f.component, v, O);
    else {
      if (H & 128) {
        f.suspense.unmount(v, O);
        return;
      }
      ne && Xt(f, null, p, "beforeUnmount"), H & 64 ? f.type.remove(
        f,
        p,
        v,
        ut,
        O
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (g !== le || I > 0 && I & 64) ? Qe(
        x,
        p,
        v,
        !1,
        !0
      ) : (g === le && I & 384 || !T && H & 16) && Qe(C, p, v), O && qe(f);
    }
    const xe = J != null && q == null;
    (ee && (Te = m && m.onVnodeUnmounted) || ne || xe) && rt(() => {
      Te && Et(Te, p, f), ne && Xt(f, null, p, "unmounted"), xe && (f.el = null);
    }, v);
  }, qe = (f) => {
    const { type: p, el: v, anchor: O, transition: T } = f;
    if (p === le) {
      ie(v, O);
      return;
    }
    if (p === si) {
      D(f);
      return;
    }
    const g = () => {
      i(v), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (f.shapeFlag & 1 && T && !T.persisted) {
      const { leave: m, delayLeave: u } = T, C = () => m(v, g);
      u ? u(f.el, g, C) : C();
    } else
      g();
  }, ie = (f, p) => {
    let v;
    for (; f !== p; )
      v = N(f), i(f), f = v;
    i(p);
  }, Nt = (f, p, v) => {
    const { bum: O, scope: T, job: g, subTree: m, um: u, m: C, a: x } = f;
    Cs(C), Cs(x), O && mr(O), T.stop(), g && (g.flags |= 8, Fe(m, f, p, v)), u && rt(u, p), rt(() => {
      f.isUnmounted = !0;
    }, p);
  }, Qe = (f, p, v, O = !1, T = !1, g = 0) => {
    for (let m = g; m < f.length; m++)
      Fe(f[m], p, v, O, T);
  }, je = (f) => {
    if (f.shapeFlag & 6)
      return je(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const p = N(f.anchor || f.el), v = p && p[Da];
    return v ? N(v) : p;
  };
  let vt = !1;
  const ht = (f, p, v) => {
    let O;
    f == null ? p._vnode && (Fe(p._vnode, null, null, !0), O = p._vnode.component) : k(
      p._vnode || null,
      f,
      p,
      null,
      null,
      null,
      v
    ), p._vnode = f, vt || (vt = !0, bs(O), Fo(), vt = !1);
  }, ut = {
    p: k,
    um: Fe,
    m: st,
    r: qe,
    mt: _e,
    mc: B,
    pc: Q,
    pbc: ue,
    n: je,
    o: e
  };
  return {
    render: ht,
    hydrate: void 0,
    createApp: Qa(ht)
  };
}
function ii({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ol(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (K(r) && K(i))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = Dt(i[s]), l.el = o.el), !n && l.patchFlag !== -2 && ol(o, l)), l.type === Ur && (l.patchFlag === -1 && (l = i[s] = Dt(l)), l.el = o.el), l.type === jt && !l.el && (l.el = o.el);
    }
}
function bc(e) {
  const t = e.slice(), n = [0];
  let r, i, s, o, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const _ = e[r];
    if (_ !== 0) {
      if (i = n[n.length - 1], e[i] < _) {
        t[r] = i, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, e[n[l]] < _ ? s = l + 1 : o = l;
      _ < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = t[o];
  return n;
}
function ll(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ll(t);
}
function Cs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function al(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? al(t.subTree) : null;
}
const cl = (e) => e.__isSuspense;
function gc(e, t) {
  t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : wa(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), Ur = /* @__PURE__ */ Symbol.for("v-txt"), jt = /* @__PURE__ */ Symbol.for("v-cmt"), si = /* @__PURE__ */ Symbol.for("v-stc"), ln = [];
let ct = null;
function F(e = !1) {
  ln.push(ct = e ? null : []);
}
function ul() {
  ln.pop(), ct = ln[ln.length - 1] || null;
}
let Gn = 1;
function ws(e, t = !1) {
  Gn += e, e < 0 && ct && t && (ct.hasOnce = !0);
}
function fl(e) {
  return e.dynamicChildren = Gn > 0 ? ct || _n : null, ul(), Gn > 0 && ct && ct.push(e), e;
}
function U(e, t, n, r, i, s) {
  return fl(
    y(
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
function yc(e, t, n, r, i) {
  return fl(
    Ft(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function dl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const pl = ({ key: e }) => e ?? null, gr = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || /* @__PURE__ */ ze(e) || Z(e) ? { i: dt, r: e, k: t, f: !!n } : e : null);
function y(e, t = null, n = null, r = 0, i = null, s = e === le ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pl(t),
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
  return l ? (Ar(c, n), s & 128 && e.normalize(c)) : n && (c.shapeFlag |= Ce(n) ? 8 : 16), Gn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ct && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ct.push(c), c;
}
const Ft = _c;
function _c(e, t = null, n = null, r = 0, i = null, s = !1) {
  if ((!e || e === Wa) && (e = jt), dl(e)) {
    const l = xn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ar(l, n), Gn > 0 && !s && ct && (l.shapeFlag & 6 ? ct[ct.indexOf(e)] = l : ct.push(l)), l.patchFlag = -2, l;
  }
  if (Nc(e) && (e = e.__vccOpts), t) {
    t = vc(t);
    let { class: l, style: c } = t;
    l && !Ce(l) && (t.class = vn(l)), de(c) && (/* @__PURE__ */ Hi(c) && !K(c) && (c = Be({}, c)), t.style = Ii(c));
  }
  const o = Ce(e) ? 1 : cl(e) ? 128 : Mr(e) ? 64 : de(e) ? 4 : Z(e) ? 2 : 0;
  return y(
    e,
    t,
    n,
    r,
    i,
    o,
    s,
    !0
  );
}
function vc(e) {
  return e ? /* @__PURE__ */ Hi(e) || el(e) ? Be({}, e) : e : null;
}
function xn(e, t, n = !1, r = !1) {
  const { props: i, ref: s, patchFlag: o, children: l, transition: c } = e, _ = t ? Sc(i || {}, t) : i, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && pl(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? K(s) ? s.concat(gr(t)) : [s, gr(t)] : gr(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== le ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && xn(e.ssContent),
    ssFallback: e.ssFallback && xn(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && $i(
    h,
    c.clone(h)
  ), h;
}
function fe(e = " ", t = 0) {
  return Ft(Ur, null, e, t);
}
function Pe(e = "", t = !1) {
  return t ? (F(), yc(jt, null, e)) : Ft(jt, null, e);
}
function Ct(e) {
  return e == null || typeof e == "boolean" ? Ft(jt) : K(e) ? Ft(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dl(e) ? Dt(e) : Ft(Ur, null, String(e));
}
function Dt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xn(e);
}
function Ar(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (K(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ar(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !el(t) ? t._ctx = dt : i === 3 && dt && (dt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Z(t)) {
    if (r & 65) {
      Ar(e, { default: t });
      return;
    }
    t = { default: t, _ctx: dt }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [fe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Sc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = vn([t.class, r.class]));
      else if (i === "style")
        t.style = Ii([t.style, r.style]);
      else if (Or(i)) {
        const s = t[i], o = r[i];
        o && s !== o && !(K(s) && s.includes(o)) ? t[i] = s ? [].concat(s, o) : o : o == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Rr(i) && (t[i] = o);
      } else i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Et(e, t, n, r = null) {
  _t(e, t, 7, [
    n,
    r
  ]);
}
const Tc = Yo();
let Ec = 0;
function Ac(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || Tc, s = {
    uid: Ec++,
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
    scope: new Xl(
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
    propsOptions: nl(r, i),
    emitsOptions: Xo(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: be,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: be,
    data: be,
    props: be,
    attrs: be,
    slots: be,
    refs: be,
    setupState: be,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = tc.bind(null, s), e.ce && e.ce(s), s;
}
let Ze = null;
const xc = () => Ze || dt;
let xr, Yn;
{
  const e = Ir(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (s) => {
      i.length > 1 ? i.forEach((o) => o(s)) : i[0](s);
    };
  };
  xr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ze = n
  ), Yn = t(
    "__VUE_SSR_SETTERS__",
    (n) => Xn = n
  );
}
const Qn = (e) => {
  const t = Ze;
  return xr(e), e.scope.on(), () => {
    e.scope.off(), xr(t);
  };
}, Os = () => {
  Ze && Ze.scope.off(), xr(null);
};
function hl(e) {
  return e.vnode.shapeFlag & 4;
}
let Xn = !1;
function Cc(e, t = !1, n = !1) {
  t && Yn(t);
  const { props: r, children: i } = e.vnode, s = hl(e);
  lc(e, r, s, t), fc(e, i, n || t);
  const o = s ? wc(e, t) : void 0;
  return t && Yn(!1), o;
}
function wc(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, qa);
  const { setup: r } = n;
  if (r) {
    kt();
    const i = e.setupContext = r.length > 1 ? Rc(e) : null, s = Qn(e), o = Zn(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = co(o);
    if (Ut(), s(), (l || e.sp) && !zn(e) && Vo(e), l) {
      if (o.then(Os, Os), t)
        return o.then((c) => {
          Yn(!0);
          try {
            Rs(e, c, t);
          } finally {
            Yn(!1);
          }
        }).catch((c) => {
          Lr(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Rs(e, o);
  } else
    ml(e);
}
function Rs(e, t, n) {
  Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : de(t) && (e.setupState = Io(t)), ml(e);
}
function ml(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ot);
  {
    const i = Qn(e);
    kt();
    try {
      Ka(e);
    } finally {
      Ut(), i();
    }
  }
}
const Oc = {
  get(e, t) {
    return Ve(e, "get", ""), e[t];
  }
};
function Rc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Oc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Hr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Io(ba(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Bn)
        return Bn[n](e);
    },
    has(t, n) {
      return n in t || n in Bn;
    }
  })) : e.proxy;
}
function Nc(e) {
  return Z(e) && "__vccOpts" in e;
}
const me = (e, t) => /* @__PURE__ */ Ta(e, t, Xn), Pc = "3.5.42";
let Ci;
const Ns = typeof window < "u" && window.trustedTypes;
if (Ns)
  try {
    Ci = /* @__PURE__ */ Ns.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const bl = Ci ? (e) => Ci.createHTML(e) : (e) => e, Ic = "http://www.w3.org/2000/svg", Dc = "http://www.w3.org/1998/Math/MathML", It = typeof document < "u" ? document : null, Ps = It && /* @__PURE__ */ It.createElement("template"), Lc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? It.createElementNS(Ic, e) : t === "mathml" ? It.createElementNS(Dc, e) : n ? It.createElement(e, { is: n }) : It.createElement(e);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => It.createTextNode(e),
  createComment: (e) => It.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => It.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, s) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Ps.innerHTML = bl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ps.content;
      if (r === "svg" || r === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Mc = /* @__PURE__ */ Symbol("_vtc");
function Fc(e, t, n) {
  const r = e[Mc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Is = /* @__PURE__ */ Symbol("_vod"), kc = /* @__PURE__ */ Symbol("_vsh"), Uc = /* @__PURE__ */ Symbol(""), Hc = /(?:^|;)\s*display\s*:/;
function jc(e, t, n) {
  const r = e.style, i = Ce(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (Ce(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && kn(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && kn(r, o, "");
    for (const o in n) {
      o === "display" && (s = !0);
      const l = n[o];
      l != null ? Vc(
        e,
        o,
        !Ce(t) && t ? t[o] : void 0,
        l
      ) || kn(r, o, l) : kn(r, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = r[Uc];
      o && (n += ";" + o), r.cssText = n, s = Hc.test(n);
    }
  } else t && e.removeAttribute("style");
  Is in e && (e[Is] = s ? r.display : "", e[kc] && (r.display = "none"));
}
const fr = /\s*!important$/;
function kn(e, t, n) {
  if (K(n))
    n.forEach((r) => kn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    fr.test(n) ? e.setProperty(t, n.replace(fr, ""), "important") : e.setProperty(t, n);
  else {
    const r = $c(e, t);
    fr.test(n) ? e.setProperty(
      cn(r),
      n.replace(fr, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ds = ["Webkit", "Moz", "ms"], oi = {};
function $c(e, t) {
  const n = oi[t];
  if (n)
    return n;
  let r = bt(t);
  if (r !== "filter" && r in e)
    return oi[t] = r;
  r = po(r);
  for (let i = 0; i < Ds.length; i++) {
    const s = Ds[i] + r;
    if (s in e)
      return oi[t] = s;
  }
  return t;
}
function Vc(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ce(r) && n === r;
}
const Ls = "http://www.w3.org/1999/xlink";
function Ms(e, t, n, r, i, s = Kl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ls, t.slice(6, t.length)) : e.setAttributeNS(Ls, t, n) : n == null || s && !mo(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Rt(n) ? String(n) : n
  );
}
function Fs(e, t, n, r, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? bl(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = mo(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function tn(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function zc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ks = /* @__PURE__ */ Symbol("_vei");
function Bc(e, t, n, r, i = null) {
  const s = e[ks] || (e[ks] = {}), o = s[t];
  if (r && o)
    o.value = r;
  else {
    const [l, c] = Kc(t);
    if (r) {
      const _ = s[t] = Xc(
        r,
        i
      );
      tn(e, l, _, c);
    } else o && (zc(e, l, o, c), s[t] = void 0);
  }
}
const Wc = /(Once|Passive|Capture)$/, qc = /^on:?(?:Once|Passive|Capture)$/;
function Kc(e) {
  let t, n;
  for (; (n = e.match(Wc)) && !qc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : cn(e.slice(2)), t];
}
let li = 0;
const Gc = /* @__PURE__ */ Promise.resolve(), Yc = () => li || (Gc.then(() => li = 0), li = Date.now());
function Xc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const i = n.value;
    if (K(i)) {
      const s = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        s.call(r), r._stopped = !0;
      };
      const o = i.slice(), l = [r];
      for (let c = 0; c < o.length && !r._stopped; c++) {
        const _ = o[c];
        _ && _t(
          _,
          t,
          5,
          l
        );
      }
    } else
      _t(
        i,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = Yc(), n;
}
const Us = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Jc = (e, t, n, r, i, s) => {
  const o = i === "svg";
  t === "class" ? Fc(e, r, o) : t === "style" ? jc(e, n, r) : Or(t) ? Rr(t) || Bc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zc(e, t, r, o)) ? (Fs(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ms(e, t, r, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Qc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ce(r))) ? Fs(e, bt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ms(e, t, r, o));
};
function Zc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Us(t) && Z(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Us(t) && Ce(n) ? !1 : t in e;
}
function Qc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = bt(t);
  return Array.isArray(n) ? n.some((i) => bt(i) === r) : Object.keys(n).some((i) => bt(i) === r);
}
const Cr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return K(t) ? (n) => mr(t, n) : t;
};
function eu(e) {
  e.target.composing = !0;
}
function Hs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const rn = /* @__PURE__ */ Symbol("_assign"), dr = /* @__PURE__ */ Symbol("_initialValue");
function ai(e, t, n) {
  return t && (e = e.trim()), n && (e = Pr(e)), e;
}
const ci = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
    e.parentNode && (e.type === "text" ? e[dr] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[dr] = e.defaultValue.replace(/\r\n?/g, `
`))), e[rn] = Cr(i);
    const s = r || i.props && i.props.type === "number";
    tn(e, t ? "change" : "input", (o) => {
      o.target.composing || e[rn](ai(e.value, n, s));
    }), (n || s) && tn(e, "change", () => {
      e.value = ai(e.value, n, s);
    }), t || (tn(e, "compositionstart", eu), tn(e, "compositionend", Hs), tn(e, "change", Hs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const i = t ?? "", s = e[dr];
    delete e[dr], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[rn](ai(e.value, n, r)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: s } }, o) {
    if (e[rn] = Cr(o), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Pr(e.value) : e.value, c = t ?? "";
    if (l === c)
      return;
    const _ = e.getRootNode();
    (_ instanceof Document || _ instanceof ShadowRoot) && _.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
  }
}, Ye = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, tn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (c) => c.selected).map(
        (c) => n ? Pr(wr(c)) : wr(c)
      ), s = e.multiple, o = s ? an(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        s,
        s ? K(o) ? i.slice() : i : o
      ];
      try {
        e[rn](o);
      } finally {
        Lo(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[rn] = Cr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    js(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[rn] = Cr(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !tu(t, n[1], n[0])) && js(e, t);
  }
};
function tu(e, t, n) {
  if (!n || K(e)) return Kt(e, t);
  if (an(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function js(e, t) {
  const n = e.multiple, r = K(t);
  if (!(n && !r && !an(t))) {
    for (let i = 0, s = e.options.length; i < s; i++) {
      const o = e.options[i], l = wr(o);
      if (n)
        if (r) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((_) => String(_) === String(l)) : o.selected = Yl(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Kt(wr(o), t)) {
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
const nu = ["ctrl", "shift", "alt", "meta"], ru = {
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
  exact: (e, t) => nu.some((n) => e[`${n}Key`] && !t.includes(n))
}, pr = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((i, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const l = ru[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...s);
  }));
}, iu = /* @__PURE__ */ Be({ patchProp: Jc }, Lc);
let $s;
function su() {
  return $s || ($s = pc(iu));
}
const ou = ((...e) => {
  const t = su().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const i = au(r);
    if (!i) return;
    const s = t._component;
    !Z(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, lu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function lu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function au(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
function cu(e, t, n) {
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
function Vs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function uu(e) {
  if (Array.isArray(e)) return e;
}
function fu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, s, o, l = [], c = !0, _ = !1;
    try {
      if (s = (n = n.call(e)).next, t !== 0) for (; !(c = (r = s.call(n)).done) && (l.push(r.value), l.length !== t); c = !0) ;
    } catch (h) {
      _ = !0, i = h;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (_) throw i;
      }
    }
    return l;
  }
}
function du() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pu(e, t) {
  return uu(e) || fu(e, t) || hu(e, t) || du();
}
function hu(e, t) {
  if (e) {
    if (typeof e == "string") return Vs(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vs(e, t) : void 0;
  }
}
const gl = Object.entries, zs = Object.setPrototypeOf, mu = Object.isFrozen, bu = Object.getPrototypeOf, gu = Object.getOwnPropertyDescriptor;
let Ie = Object.freeze, Me = Object.seal, yn = Object.create, yl = typeof Reflect < "u" && Reflect, wi = yl.apply, Oi = yl.construct;
Ie || (Ie = function(t) {
  return t;
});
Me || (Me = function(t) {
  return t;
});
wi || (wi = function(t, n) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    i[s - 2] = arguments[s];
  return t.apply(n, i);
});
Oi || (Oi = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return new t(...r);
});
const en = Ne(Array.prototype.forEach), yu = Ne(Array.prototype.lastIndexOf), Bs = Ne(Array.prototype.pop), In = Ne(Array.prototype.push), _u = Ne(Array.prototype.splice), En = Array.isArray, Un = Ne(String.prototype.toLowerCase), ui = Ne(String.prototype.toString), Ws = Ne(String.prototype.match), Dn = Ne(String.prototype.replace), qs = Ne(String.prototype.indexOf), vu = Ne(String.prototype.trim), Su = Ne(Number.prototype.toString), Tu = Ne(Boolean.prototype.toString), Ks = typeof BigInt > "u" ? null : Ne(BigInt.prototype.toString), Gs = typeof Symbol > "u" ? null : Ne(Symbol.prototype.toString), it = Ne(Object.prototype.hasOwnProperty), Ln = Ne(Object.prototype.toString), $e = Ne(RegExp.prototype.test), Zt = Eu(TypeError);
function Ne(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
      r[i - 1] = arguments[i];
    return wi(e, t, r);
  };
}
function Eu(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return Oi(e, n);
  };
}
function se(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Un;
  if (zs && zs(e, null), !En(t))
    return e;
  let r = t.length;
  for (; r--; ) {
    let i = t[r];
    if (typeof i == "string") {
      const s = n(i);
      s !== i && (mu(t) || (t[r] = s), i = s);
    }
    e[i] = !0;
  }
  return e;
}
function Au(e) {
  for (let t = 0; t < e.length; t++)
    it(e, t) || (e[t] = null);
  return e;
}
function at(e) {
  const t = yn(null);
  for (const r of gl(e)) {
    var n = pu(r, 2);
    const i = n[0], s = n[1];
    it(e, i) && (En(s) ? t[i] = Au(s) : s && typeof s == "object" && s.constructor === Object ? t[i] = at(s) : t[i] = s);
  }
  return t;
}
function xu(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Su(e);
    case "boolean":
      return Tu(e);
    case "bigint":
      return Ks ? Ks(e) : "0";
    case "symbol":
      return Gs ? Gs(e) : "Symbol()";
    case "undefined":
      return Ln(e);
    case "function":
    case "object": {
      if (e === null)
        return Ln(e);
      const t = e, n = mt(t, "toString");
      if (typeof n == "function") {
        const r = n(t);
        return typeof r == "string" ? r : Ln(r);
      }
      return Ln(e);
    }
    default:
      return Ln(e);
  }
}
function mt(e, t) {
  for (; e !== null; ) {
    const r = gu(e, t);
    if (r) {
      if (r.get)
        return Ne(r.get);
      if (typeof r.value == "function")
        return Ne(r.value);
    }
    e = bu(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Cu(e) {
  try {
    return $e(e, ""), !0;
  } catch {
    return !1;
  }
}
const Ys = Ie(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), fi = Ie(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), di = Ie(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), wu = Ie(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), pi = Ie(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Ou = Ie(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xs = Ie(["#text"]), Js = Ie(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), hi = Ie(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Zs = Ie(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), hr = Ie(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ru = Me(/{{[\w\W]*|^[\w\W]*}}/g), Nu = Me(/<%[\w\W]*|^[\w\W]*%>/g), Pu = Me(/\${[\w\W]*/g), Iu = Me(/^data-[\-\w.\u00B7-\uFFFF]+$/), Du = Me(/^aria-[\-\w]+$/), Qs = Me(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Lu = Me(/^(?:\w+script|data):/i), Mu = Me(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Fu = Me(/^html$/i), ku = Me(/^[a-z][.\w]*(-[.\w]+)+$/i), eo = Me(/<[/\w!]/g), to = Me(/<[/\w]/g), Uu = Me(/<\/no(script|embed|frames)/i), Hu = Me(/\/>/i), lt = {
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
}, _l = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], ju = Ie(se({}, _l)), $u = (function() {
  const e = {};
  return en(_l, (t) => {
    e[t] = Me(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Ie(e);
})(), Vu = function() {
  return typeof window > "u" ? null : window;
}, zu = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  n && n.hasAttribute(i) && (r = n.getAttribute(i));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(s, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, no = function() {
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
  return it(t, n) && En(t[n]) ? se(i.base ? at(i.base) : {}, t[n], i.transform) : r;
}, mi = function(t, n, r) {
  const i = it(t, n) ? t[n] : void 0;
  return i && typeof i == "object" ? at(i) : r();
};
function vl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Vu();
  const t = (R) => vl(R);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== lt.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const r = n, i = r.currentScript;
  e.DocumentFragment;
  const s = e.HTMLTemplateElement, o = e.Node, l = e.Element, c = e.NodeFilter, _ = e.NamedNodeMap;
  _ === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const h = e.DOMParser, E = e.trustedTypes, N = l.prototype, M = mt(N, "cloneNode"), G = mt(N, "remove"), k = mt(N, "nextSibling"), X = mt(N, "childNodes"), V = mt(N, "parentNode"), P = mt(N, "shadowRoot"), W = mt(N, "attributes"), D = o && o.prototype ? mt(o.prototype, "nodeType") : null, re = o && o.prototype ? mt(o.prototype, "nodeName") : null, we = o && o.prototype ? mt(o.prototype, "ownerDocument") : null, Ee = function(a) {
    return D ? D(a) : a.nodeType;
  }, B = function(a) {
    return re ? re(a) : a.nodeName;
  };
  if (typeof s == "function") {
    const R = n.createElement("template");
    R.content && R.content.ownerDocument && (n = R.content.ownerDocument);
  }
  let z, ue = "", ve, pe = !1, Se = 0;
  const _e = function() {
    if (Se > 0)
      throw Zt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, He = function(a) {
    _e(), Se++;
    try {
      return z.createHTML(a);
    } finally {
      Se--;
    }
  }, he = function(a) {
    _e(), Se++;
    try {
      return z.createScriptURL(a);
    } finally {
      Se--;
    }
  }, te = function() {
    return pe || (ve = zu(E, i), pe = !0), ve;
  }, Q = n, Oe = Q.implementation, We = Q.createNodeIterator, st = Q.createDocumentFragment, Fe = Q.getElementsByTagName, qe = r.importNode;
  let ie = no();
  t.isSupported = typeof gl == "function" && typeof V == "function" && Oe && Oe.createHTMLDocument !== void 0;
  const Nt = Ru, Qe = Nu, je = Pu, vt = Iu, ht = Du, ut = Lu, Vt = Mu, f = ku;
  let p = Qs, v = null;
  const O = se({}, [...Ys, ...fi, ...di, ...pi, ...Xs]);
  let T = null;
  const g = se({}, [...Js, ...hi, ...Zs, ...hr]);
  let m = Object.seal(yn(null, {
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
  })), u = null, C = null;
  const x = Object.seal(yn(null, {
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
  let H = !0, I = !0, $ = !1, q = !0, J = !1, ne = !0, ee = !1, Te = !1, xe = null, Ke = null, et = !1, ft = !1, Gt = !1, De = !1, ot = !0, Cn = !1;
  const wn = "user-content-";
  let jr = !0, $r = !1, un = {}, fn = null;
  const Wi = se({}, [
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
  let qi = null;
  const Ki = se({}, ["audio", "video", "img", "source", "image", "track"]);
  let Gi = null;
  const Yi = se({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), er = "http://www.w3.org/1998/Math/MathML", tr = "http://www.w3.org/2000/svg", St = "http://www.w3.org/1999/xhtml";
  let dn = St, Vr = !1, zr = null;
  const Tl = se({}, [er, tr, St], ui), Xi = Ie(["mi", "mo", "mn", "ms", "mtext"]);
  let Br = se({}, Xi);
  const Ji = Ie(["annotation-xml"]);
  let Wr = se({}, Ji);
  const El = se({}, ["title", "style", "font", "a", "script"]);
  let On = null;
  const Al = ["application/xhtml+xml", "text/html"], xl = "text/html";
  let Re = null, pn = null;
  const Cl = n.createElement("form"), Zi = function(a) {
    return a instanceof RegExp || a instanceof Function;
  }, qr = function() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (pn && pn === a)
      return;
    (!a || typeof a != "object") && (a = {}), a = at(a), On = // eslint-disable-next-line unicorn/prefer-includes
    Al.indexOf(a.PARSER_MEDIA_TYPE) === -1 ? xl : a.PARSER_MEDIA_TYPE, Re = On === "application/xhtml+xml" ? ui : Un, v = Bt(a, "ALLOWED_TAGS", O, {
      transform: Re
    }), T = Bt(a, "ALLOWED_ATTR", g, {
      transform: Re
    }), zr = Bt(a, "ALLOWED_NAMESPACES", Tl, {
      transform: ui
    }), Gi = Bt(a, "ADD_URI_SAFE_ATTR", Yi, {
      transform: Re,
      base: Yi
    }), qi = Bt(a, "ADD_DATA_URI_TAGS", Ki, {
      transform: Re,
      base: Ki
    }), fn = Bt(a, "FORBID_CONTENTS", Wi, {
      transform: Re
    }), u = Bt(a, "FORBID_TAGS", at({}), {
      transform: Re
    }), C = Bt(a, "FORBID_ATTR", at({}), {
      transform: Re
    }), un = it(a, "USE_PROFILES") ? a.USE_PROFILES && typeof a.USE_PROFILES == "object" ? at(a.USE_PROFILES) : a.USE_PROFILES : !1, H = a.ALLOW_ARIA_ATTR !== !1, I = a.ALLOW_DATA_ATTR !== !1, $ = a.ALLOW_UNKNOWN_PROTOCOLS || !1, q = a.ALLOW_SELF_CLOSE_IN_ATTR !== !1, J = a.SAFE_FOR_TEMPLATES || !1, ne = a.SAFE_FOR_XML !== !1, ee = a.WHOLE_DOCUMENT || !1, ft = a.RETURN_DOM || !1, Gt = a.RETURN_DOM_FRAGMENT || !1, De = a.RETURN_TRUSTED_TYPE || !1, et = a.FORCE_BODY || !1, ot = a.SANITIZE_DOM !== !1, Cn = a.SANITIZE_NAMED_PROPS || !1, jr = a.KEEP_CONTENT !== !1, $r = a.IN_PLACE || !1, p = Cu(a.ALLOWED_URI_REGEXP) ? a.ALLOWED_URI_REGEXP : Qs, dn = typeof a.NAMESPACE == "string" ? a.NAMESPACE : St, Br = mi(
      a,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => se({}, Xi)
      // Default built-in map
    ), Wr = mi(
      a,
      "HTML_INTEGRATION_POINTS",
      () => se({}, Ji)
      // Default built-in map
    );
    const b = mi(a, "CUSTOM_ELEMENT_HANDLING", () => yn(null));
    if (m = yn(null), it(b, "tagNameCheck") && Zi(b.tagNameCheck) && (m.tagNameCheck = b.tagNameCheck), it(b, "attributeNameCheck") && Zi(b.attributeNameCheck) && (m.attributeNameCheck = b.attributeNameCheck), it(b, "allowCustomizedBuiltInElements") && typeof b.allowCustomizedBuiltInElements == "boolean" && (m.allowCustomizedBuiltInElements = b.allowCustomizedBuiltInElements), Me(m), J && (I = !1), Gt && (ft = !0), un && (v = se({}, Xs), T = yn(null), un.html === !0 && (se(v, Ys), se(T, Js)), un.svg === !0 && (se(v, fi), se(T, hi), se(T, hr)), un.svgFilters === !0 && (se(v, di), se(T, hi), se(T, hr)), un.mathMl === !0 && (se(v, pi), se(T, Zs), se(T, hr))), x.tagCheck = null, x.attributeCheck = null, it(a, "ADD_TAGS") && (typeof a.ADD_TAGS == "function" ? x.tagCheck = a.ADD_TAGS : En(a.ADD_TAGS) && (v === O && (v = at(v)), se(v, a.ADD_TAGS, Re))), it(a, "ADD_ATTR") && (typeof a.ADD_ATTR == "function" ? x.attributeCheck = a.ADD_ATTR : En(a.ADD_ATTR) && (T === g && (T = at(T)), se(T, a.ADD_ATTR, Re))), it(a, "ADD_FORBID_CONTENTS") && En(a.ADD_FORBID_CONTENTS) && (fn === Wi && (fn = at(fn)), se(fn, a.ADD_FORBID_CONTENTS, Re)), jr && (v["#text"] = !0), ee && se(v, ["html", "head", "body"]), v.table && (se(v, ["tbody"]), delete u.tbody), a.TRUSTED_TYPES_POLICY) {
      if (typeof a.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof a.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Zt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const w = z;
      z = a.TRUSTED_TYPES_POLICY;
      try {
        ue = He("");
      } catch (L) {
        throw z = w, L;
      }
    } else a.TRUSTED_TYPES_POLICY === null ? (z = void 0, ue = "") : (z === void 0 && (z = te()), z && typeof ue == "string" && (ue = He("")));
    Ie && Ie(a), pn = a;
  }, Qi = se({}, [...fi, ...di, ...wu]), es = se({}, [...pi, ...Ou]), wl = function(a, b, w) {
    return b.namespaceURI === St ? a === "svg" : b.namespaceURI === er ? a === "svg" && (w === "annotation-xml" || Br[w]) : !!Qi[a];
  }, Ol = function(a, b, w) {
    return b.namespaceURI === St ? a === "math" : b.namespaceURI === tr ? a === "math" && Wr[w] : !!es[a];
  }, Rl = function(a, b, w) {
    return b.namespaceURI === tr && !Wr[w] || b.namespaceURI === er && !Br[w] ? !1 : !es[a] && (El[a] || !Qi[a]);
  }, Nl = function(a) {
    let b = V(a);
    (!b || !b.tagName) && (b = {
      namespaceURI: dn,
      tagName: "template"
    });
    const w = Un(a.tagName), L = Un(b.tagName);
    return zr[a.namespaceURI] ? a.namespaceURI === tr ? wl(w, b, L) : a.namespaceURI === er ? Ol(w, b, L) : a.namespaceURI === St ? Rl(w, b, L) : !!(On === "application/xhtml+xml" && zr[a.namespaceURI]) : !1;
  }, zt = function(a) {
    In(t.removed, {
      element: a
    });
    try {
      V(a).removeChild(a);
    } catch {
      if (G(a), !V(a))
        throw Zt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ts = function(a, b, w) {
    try {
      a.removeAttributeNode(b);
    } catch {
      try {
        a.removeAttribute(w);
      } catch {
      }
    }
  }, nr = function(a) {
    rr(a);
    const b = X(a);
    if (b) {
      const L = [];
      en(b, (j) => {
        In(L, j);
      }), en(L, (j) => {
        try {
          G(j);
        } catch {
        }
      });
    }
    const w = W(a);
    if (w)
      for (let L = w.length - 1; L >= 0; --L) {
        const j = w[L], Y = j && j.name;
        typeof Y == "string" && ts(a, j, Y);
      }
  }, Yt = function(a, b, w) {
    if (!w)
      try {
        w = b.getAttributeNode(a);
      } catch {
        w = null;
      }
    In(t.removed, {
      attribute: w || null,
      from: b
    });
    try {
      w ? b.removeAttributeNode(w) : b.removeAttribute(a);
    } catch {
      try {
        b.removeAttribute(a);
      } catch {
      }
    }
    if (a === "is")
      if (ft || Gt)
        try {
          zt(b);
        } catch {
        }
      else
        try {
          b.setAttribute(a, "");
        } catch {
        }
  }, Pl = function(a) {
    const b = W(a);
    if (b)
      for (let w = b.length - 1; w >= 0; --w) {
        const L = b[w], j = L && L.name;
        typeof j != "string" || T[Re(j)] || ts(a, L, j);
      }
  }, rr = function(a) {
    const b = [a];
    for (; b.length > 0; ) {
      const w = b.pop();
      Ee(w) === lt.element && Pl(w);
      const j = X(w);
      if (j)
        for (let Y = j.length - 1; Y >= 0; --Y)
          b.push(j[Y]);
    }
  }, ns = function(a, b) {
    return ne ? a === "patchsrc" ? !0 : a === "for" && b !== "label" && b !== "output" : !1;
  }, Il = function(a) {
    if (!ne)
      return;
    const b = [a];
    for (; b.length > 0; ) {
      const w = b.pop(), L = Ee(w);
      if (L === lt.processingInstruction || L === lt.comment && $e(to, w.data)) {
        try {
          G(w);
        } catch {
        }
        continue;
      }
      if (L === lt.element) {
        const Y = w, ge = Re(B(w));
        try {
          Y.hasAttribute && Y.hasAttribute("patchsrc") && Y.removeAttribute("patchsrc"), Y.hasAttribute && Y.hasAttribute("for") && ns("for", ge) && Y.removeAttribute("for");
        } catch {
        }
      }
      const j = X(w);
      if (j)
        for (let Y = j.length - 1; Y >= 0; --Y)
          b.push(j[Y]);
    }
  }, rs = function(a) {
    let b = null, w = null;
    if (et)
      a = "<remove></remove>" + a;
    else {
      const Y = Ws(a, /^[\r\n\t ]+/);
      w = Y && Y[0];
    }
    On === "application/xhtml+xml" && dn === St && (a = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + a + "</body></html>");
    const L = z ? He(a) : a;
    if (dn === St)
      try {
        b = new h().parseFromString(L, On);
      } catch {
      }
    if (!b || !b.documentElement) {
      b = Oe.createDocument(dn, "template", null);
      try {
        b.documentElement.innerHTML = Vr ? ue : L;
      } catch {
      }
    }
    const j = b.body || b.documentElement;
    return a && w && j.insertBefore(n.createTextNode(w), j.childNodes[0] || null), dn === St ? Fe.call(b, ee ? "html" : "body")[0] : ee ? b.documentElement : j;
  }, is = function(a) {
    const b = we ? we(a) : a.ownerDocument;
    return We.call(
      b || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION,
      null
    );
  }, ir = function(a) {
    return a = Dn(a, Nt, " "), a = Dn(a, Qe, " "), a = Dn(a, je, " "), a;
  }, Kr = function(a) {
    var b;
    a.normalize();
    const w = we ? we(a) : a.ownerDocument, L = We.call(
      w || a,
      a,
      // eslint-disable-next-line no-bitwise
      c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let j = L.nextNode();
    for (; j; )
      j.data = ir(j.data), j = L.nextNode();
    const Y = (b = a.querySelectorAll) === null || b === void 0 ? void 0 : b.call(a, "template");
    Y && en(Y, (ge) => {
      hn(ge.content) && Kr(ge.content);
    });
  }, sr = function(a) {
    const b = re ? re(a) : null;
    return typeof b != "string" || Re(b) !== "form" ? !1 : typeof a.nodeName != "string" || typeof a.textContent != "string" || typeof a.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    a.attributes !== W(a) || typeof a.removeAttribute != "function" || typeof a.setAttribute != "function" || typeof a.namespaceURI != "string" || typeof a.insertBefore != "function" || typeof a.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    a.nodeType !== D(a) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    a.childNodes !== X(a);
  }, hn = function(a) {
    if (!D || typeof a != "object" || a === null)
      return !1;
    try {
      return D(a) === lt.documentFragment;
    } catch {
      return !1;
    }
  }, Rn = function(a) {
    if (!D || typeof a != "object" || a === null)
      return !1;
    try {
      return typeof D(a) == "number";
    } catch {
      return !1;
    }
  };
  function Tt(R, a, b) {
    R.length !== 0 && en(R, (w) => {
      w.call(t, a, b, pn);
    });
  }
  const Dl = function(a, b) {
    return !!(ne && a.hasChildNodes() && !Rn(a.firstElementChild) && $e(eo, a.textContent) && $e(eo, a.innerHTML) || ne && a.namespaceURI === St && ju[b] && (Rn(a.firstElementChild) || typeof a.textContent == "string" && $e($u[b], a.textContent)) || a.nodeType === lt.processingInstruction || ne && a.nodeType === lt.comment && $e(to, a.data));
  }, or = function(a, b) {
    if (a instanceof RegExp)
      return $e(a, b);
    if (a instanceof Function) {
      for (var w = arguments.length, L = new Array(w > 2 ? w - 2 : 0), j = 2; j < w; j++)
        L[j - 2] = arguments[j];
      return !!a(b, ...L);
    }
    return !1;
  }, Ll = function(a, b, w) {
    if (!u[b] && cs(b) && or(m.tagNameCheck, b))
      return !1;
    if (jr && !fn[b]) {
      const L = V(a), j = X(a);
      if (j && L) {
        const Y = j.length;
        for (let ge = Y - 1; ge >= 0; --ge) {
          const Ae = a === w ? M(j[ge], !0) : j[ge];
          L.insertBefore(Ae, k(a));
        }
      }
    }
    return zt(a), !0;
  }, ss = function(a, b, w, L) {
    return a.length === 0 ? b : b === w || b === L ? at(b) : b;
  }, os = function(a, b) {
    return a === b || V(a) !== null ? !1 : ($r && rr(a), !0);
  }, ls = function(a, b) {
    if (Tt(ie.beforeSanitizeElements, a, null), os(a, b))
      return !0;
    if (sr(a))
      return zt(a), !0;
    const w = Re(B(a));
    if (v = ss(ie.uponSanitizeElement, v, O, xe), Tt(ie.uponSanitizeElement, a, {
      tagName: w,
      allowedTags: v
    }), os(a, b))
      return !0;
    if (Dl(a, w))
      return zt(a), !0;
    if (u[w] || !(x.tagCheck instanceof Function && x.tagCheck(w)) && !v[w]) {
      const j = Ll(a, w, b);
      return j === !1 && Tt(ie.afterSanitizeElements, a, null), j;
    }
    if (Ee(a) === lt.element && !Nl(a) || (w === "noscript" || w === "noembed" || w === "noframes") && $e(Uu, a.innerHTML))
      return zt(a), !0;
    if (J && a.nodeType === lt.text) {
      const j = ir(a.textContent);
      a.textContent !== j && (In(t.removed, {
        element: a.cloneNode()
      }), a.textContent = j);
    }
    return Tt(ie.afterSanitizeElements, a, null), !1;
  }, as = function(a, b, w) {
    if (C[b] || ns(b, a) || ot && (b === "id" || b === "name") && (w in n || w in Cl))
      return !1;
    const L = T[b] || x.attributeCheck instanceof Function && x.attributeCheck(b, a);
    return I && $e(vt, b) || H && $e(ht, b) ? !0 : L ? Gi[b] || $e(p, Dn(w, Vt, "")) || (b === "src" || b === "xlink:href" || b === "href") && a !== "script" && qs(w, "data:") === 0 && qi[a] || $ && !$e(ut, Dn(w, Vt, "")) ? !0 : !w : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      cs(a) && or(m.tagNameCheck, a) && or(m.attributeNameCheck, b, a) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      b === "is" && m.allowCustomizedBuiltInElements && or(m.tagNameCheck, w)
    );
  }, Ml = se({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), cs = function(a) {
    return !Ml[Un(a)] && $e(f, a);
  }, Fl = function(a, b, w, L) {
    if (z && typeof E == "object" && typeof E.getAttributeType == "function" && !w)
      switch (E.getAttributeType(a, b)) {
        case "TrustedHTML":
          return He(L);
        case "TrustedScriptURL":
          return he(L);
      }
    return L;
  }, kl = function(a, b, w, L) {
    try {
      w ? a.setAttributeNS(w, b, L) : a.setAttribute(b, L), sr(a) ? zt(a) : Bs(t.removed);
    } catch {
      Yt(b, a);
    }
  }, us = function(a) {
    Tt(ie.beforeSanitizeAttributes, a, null);
    const b = a.attributes;
    if (!b || sr(a))
      return;
    T = ss(ie.uponSanitizeAttribute, T, g, Ke);
    const w = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let L = b.length;
    const j = Re(a.nodeName);
    for (; L--; ) {
      const Y = b[L], ge = Y.name, Ae = Y.namespaceURI, tt = Y.value, nt = Re(ge), Yr = tt;
      let Ge = ge === "value" ? Yr : vu(Yr);
      if (w.attrName = nt, w.attrValue = Ge, w.keepAttr = !0, w.forceKeepAttr = void 0, Tt(ie.uponSanitizeAttribute, a, w), Ge = w.attrValue, Cn && (nt === "id" || nt === "name") && qs(Ge, wn) !== 0 && (Yt(ge, a, Y), Ge = wn + Ge), ne && $e(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ge)) {
        Yt(ge, a, Y);
        continue;
      }
      if (nt === "attributename" && Ws(Ge, "href")) {
        Yt(ge, a, Y);
        continue;
      }
      if (!w.forceKeepAttr) {
        if (!w.keepAttr) {
          Yt(ge, a, Y);
          continue;
        }
        if (!q && $e(Hu, Ge)) {
          Yt(ge, a, Y);
          continue;
        }
        if (J && (Ge = ir(Ge)), !as(j, nt, Ge)) {
          Yt(ge, a, Y);
          continue;
        }
        Ge = Fl(j, nt, Ae, Ge), Ge !== Yr && kl(a, ge, Ae, Ge);
      }
    }
    Tt(ie.afterSanitizeAttributes, a, null);
  }, lr = function(a) {
    let b = null;
    const w = is(a);
    for (Tt(ie.beforeSanitizeShadowDOM, a, null); b = w.nextNode(); )
      if (Tt(ie.uponSanitizeShadowNode, b, null), ls(b, a), us(b), hn(b.content) && lr(b.content), Ee(b) === lt.element) {
        const L = P(b);
        hn(L) && (Gr(L), lr(L));
      }
    Tt(ie.afterSanitizeShadowDOM, a, null);
  }, Gr = function(a) {
    const b = [{
      node: a,
      shadow: null
    }];
    for (; b.length > 0; ) {
      const w = b.pop();
      if (w.shadow) {
        lr(w.shadow);
        continue;
      }
      const L = w.node, Y = Ee(L) === lt.element, ge = X(L);
      if (ge)
        for (let Ae = ge.length - 1; Ae >= 0; --Ae)
          b.push({
            node: ge[Ae],
            shadow: null
          });
      if (Y) {
        const Ae = re ? re(L) : null;
        if (typeof Ae == "string" && Re(Ae) === "template") {
          const tt = L.content;
          hn(tt) && b.push({
            node: tt,
            shadow: null
          });
        }
      }
      if (Y) {
        const Ae = P(L);
        hn(Ae) && b.push({
          node: null,
          shadow: Ae
        }, {
          node: Ae,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(R) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = null, w = null, L = null, j = null;
    if (Vr = !R, Vr && (R = "<!-->"), typeof R != "string" && !Rn(R) && (R = xu(R), typeof R != "string"))
      throw Zt("dirty is not a string, aborting");
    if (!t.isSupported)
      return R;
    Te ? (v = xe, T = Ke) : qr(a), (ie.uponSanitizeElement.length > 0 || ie.uponSanitizeAttribute.length > 0) && (v = at(v)), ie.uponSanitizeAttribute.length > 0 && (T = at(T)), t.removed = [];
    const Y = $r && typeof R != "string" && Rn(R);
    if (Y) {
      Il(R);
      const tt = B(R);
      if (typeof tt == "string") {
        const nt = Re(tt);
        if (!v[nt] || u[nt])
          throw nr(R), Zt("root node is forbidden and cannot be sanitized in-place");
      }
      if (sr(R))
        throw nr(R), Zt("root node is clobbered and cannot be sanitized in-place");
      try {
        Gr(R);
      } catch (nt) {
        throw nr(R), nt;
      }
    } else if (Rn(R))
      b = rs("<!---->"), w = b.ownerDocument.importNode(R, !0), w.nodeType === lt.element && w.nodeName === "BODY" || w.nodeName === "HTML" ? b = w : b.appendChild(w), Gr(w);
    else {
      if (!ft && !J && !ee && // eslint-disable-next-line unicorn/prefer-includes
      R.indexOf("<") === -1)
        return z && De ? He(R) : R;
      if (b = rs(R), !b)
        return ft ? null : De ? ue : "";
    }
    b && et && zt(b.firstChild);
    const ge = Y ? R : b;
    try {
      const tt = is(ge);
      for (; L = tt.nextNode(); )
        ls(L, ge), us(L), hn(L.content) && lr(L.content);
    } catch (tt) {
      throw Y && (nr(R), en(t.removed, (nt) => {
        nt.element && rr(nt.element);
      })), tt;
    }
    if (Y)
      return en(t.removed, (tt) => {
        tt.element && rr(tt.element);
      }), J && Kr(R), R;
    if (ft) {
      if (J && Kr(b), Gt)
        for (j = st.call(b.ownerDocument); b.firstChild; )
          j.appendChild(b.firstChild);
      else
        j = b;
      return (T.shadowroot || T.shadowrootmode) && (j = qe.call(r, j, !0)), j;
    }
    let Ae = ee ? b.outerHTML : b.innerHTML;
    return ee && v["!doctype"] && b.ownerDocument && b.ownerDocument.doctype && b.ownerDocument.doctype.name && $e(Fu, b.ownerDocument.doctype.name) && (Ae = "<!DOCTYPE " + b.ownerDocument.doctype.name + `>
` + Ae), J && (Ae = ir(Ae)), z && De ? He(Ae) : Ae;
  }, t.setConfig = function() {
    let R = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qr(R), Te = !0, xe = v, Ke = T;
  }, t.clearConfig = function() {
    pn = null, Te = !1, xe = null, Ke = null, z = ve, ue = "";
  }, t.isValidAttribute = function(R, a, b) {
    pn || qr({});
    const w = Re(R), L = Re(a);
    return as(w, L, b);
  }, t.addHook = function(R, a) {
    typeof a == "function" && it(ie, R) && In(ie[R], a);
  }, t.removeHook = function(R, a) {
    if (it(ie, R)) {
      if (a !== void 0) {
        const b = yu(ie[R], a);
        return b === -1 ? void 0 : _u(ie[R], b, 1)[0];
      }
      return Bs(ie[R]);
    }
  }, t.removeHooks = function(R) {
    it(ie, R) && (ie[R] = []);
  }, t.removeAllHooks = function() {
    ie = no();
  }, t;
}
var Bu = vl();
function Wu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bi, ro;
function qu() {
  if (ro) return bi;
  ro = 1;
  var e = /["'&<>]/;
  bi = t;
  function t(n) {
    var r = "" + n, i = e.exec(r);
    if (!i)
      return r;
    var s, o = "", l = 0, c = 0;
    for (l = i.index; l < r.length; l++) {
      switch (r.charCodeAt(l)) {
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
      c !== l && (o += r.substring(c, l)), c = l + 1, o += s;
    }
    return c !== l ? o + r.substring(c, l) : o;
  }
  return bi;
}
var Ku = qu();
const io = /* @__PURE__ */ Wu(Ku);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Gu(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function d(e, t, n, r, i) {
  const s = typeof n == "object" ? n : void 0, o = typeof r == "number" ? r : typeof n == "number" ? n : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof r == "object" ? r : {}
  }, c = (k) => k, _ = (l.sanitize ? Bu.sanitize : c) || c, h = l.escape ? io : c, E = (k) => typeof k == "string" || typeof k == "number", N = (k, X, V) => k.replace(/%n/g, "" + V).replace(/{([^{}]*)}/g, (P, W) => {
    if (X === void 0 || !(W in X))
      return h(P);
    const D = X[W];
    return E(D) ? h(`${D}`) : typeof D == "object" && E(D.value) ? (D.escape !== !1 ? io : c)(`${D.value}`) : h(P);
  });
  let G = (i?.bundle ?? Gu(e)).translations[t] || t;
  return G = Array.isArray(G) ? G[0] : G, _(typeof s == "object" || o !== void 0 ? N(
    G,
    s,
    o
  ) : G);
}
const Yu = { class: "library-vue-catalogue" }, Xu = {
  class: "library-panel",
  "aria-labelledby": "library-catalogue-heading"
}, Ju = { class: "library-catalogue-header" }, Zu = { id: "library-catalogue-heading" }, Qu = { class: "library-muted" }, ef = ["aria-label"], tf = ["href"], nf = ["href"], rf = ["href"], sf = ["href"], of = ["aria-label"], lf = ["name", "value"], af = { class: "library-quick-filter-search" }, cf = { value: "title" }, uf = { value: "recent" }, ff = { value: "publicationDate" }, df = { value: "publication" }, pf = { value: "lastOpened" }, hf = { value: "format" }, mf = { value: "" }, bf = { value: "1" }, gf = ["value"], yf = ["value"], _f = ["aria-label"], vf = ["aria-label"], Sf = { class: "library-filter-panel" }, Tf = { class: "library-filter-panel-summary" }, Ef = ["aria-label"], Af = { value: "" }, xf = ["value"], Cf = { value: "" }, wf = ["value"], Of = { value: "" }, Rf = ["value"], Nf = { value: "" }, Pf = ["value"], If = { value: "" }, Df = ["value"], Lf = { value: "" }, Mf = ["value"], Ff = { value: "" }, kf = ["value"], Uf = { value: "" }, Hf = ["value"], jf = { value: "" }, $f = ["value"], Vf = { value: "" }, zf = ["value"], Bf = { value: "" }, Wf = { value: "1" }, qf = { value: "" }, Kf = { value: "1" }, Gf = { value: "title" }, Yf = { value: "recent" }, Xf = { value: "publicationDate" }, Jf = { value: "publication" }, Zf = { value: "lastOpened" }, Qf = { value: "format" }, ed = ["value"], td = ["value"], nd = ["aria-label"], rd = ["aria-label"], id = ["href"], sd = { class: "library-muted library-filter-result-summary" }, od = { key: 0 }, ld = { href: "?" }, ad = ["aria-label"], cd = ["href", "aria-label"], ud = ["aria-label"], fd = { class: "library-pagination-range" }, dd = { key: 0 }, pd = ["href"], hd = {
  key: 1,
  class: "library-muted"
}, md = ["href"], bd = {
  key: 3,
  class: "library-muted"
}, gd = {
  key: 1,
  class: "library-periodical-groups"
}, yd = { class: "library-periodical-groups-summary" }, _d = { id: "library-periodical-groups-heading" }, vd = { class: "library-muted" }, Sd = ["href"], Td = { class: "library-muted" }, Ed = {
  key: 2,
  class: "library-periodical-groups library-periodical-groups-empty"
}, Ad = { class: "library-periodical-groups-summary" }, xd = { id: "library-periodical-groups-empty-heading" }, Cd = { class: "library-muted" }, wd = { class: "library-muted" }, Od = { class: "library-empty-actions" }, Rd = ["href"], Nd = { class: "library-muted" }, Pd = { class: "library-muted" }, Id = { class: "library-empty-actions" }, Dd = ["href"], Ld = { class: "library-muted" }, Md = { class: "library-empty-actions" }, Fd = ["href"], kd = {
  href: "?",
  class: "button primary"
}, Ud = { class: "library-muted" }, Hd = { class: "library-empty-actions" }, jd = ["href"], $d = {
  key: 4,
  class: "library-cover-gallery"
}, Vd = ["href", "aria-label"], zd = ["src", "alt"], Bd = ["action", "onSubmit"], Wd = ["value"], qd = ["value"], Kd = ["aria-pressed", "title", "aria-label", "onClick"], Gd = { class: "library-cover-summary" }, Yd = { class: "library-cover-primary" }, Xd = ["aria-label"], Jd = ["href"], Zd = ["onToggle"], Qd = ["aria-label"], ep = { class: "library-cover-meta" }, tp = {
  key: 0,
  class: "library-creator"
}, np = { class: "library-cover-detail-list" }, rp = { class: "library-cover-detail-chip" }, ip = {
  key: 0,
  class: "library-cover-detail-chip"
}, sp = {
  key: 1,
  class: "library-cover-detail-chip"
}, op = {
  key: 2,
  class: "library-cover-detail-chip"
}, lp = {
  key: 3,
  class: "library-cover-detail-chip"
}, ap = {
  key: 4,
  class: "library-cover-detail-chip"
}, cp = {
  key: 5,
  class: "library-cover-detail-chip"
}, up = {
  key: 6,
  class: "library-cover-detail-chip"
}, fp = {
  key: 1,
  class: "library-muted library-cover-description"
}, dp = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, pp = { key: 0 }, hp = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, mp = {
  key: 0,
  class: "library-muted"
}, bp = { class: "library-cover-actions" }, gp = ["href"], yp = ["href"], _p = ["href"], vp = {
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
    }), s = /* @__PURE__ */ nn((i.items || []).map((g) => ({ ...g }))), o = me(() => s), l = me(() => i.shelves || []), c = me(() => i.formats || []), _ = me(() => i.publications || []), h = me(() => i.publicationSummaries || []), E = me(() => i.publicationYears || []), N = me(() => i.creators || []), M = me(() => i.scanStatuses || []), G = me(() => i.workflowStatuses || []), k = me(() => i.genres || []), X = me(() => i.classifications || []), V = me(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: o.value.length,
      visible: o.value.length,
      from: o.value.length > 0 ? 1 : 0,
      to: o.value.length,
      previousUrl: "",
      nextUrl: ""
    }), P = /* @__PURE__ */ nn({
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
    }), W = me(() => i.settingsUrl || ""), D = me(() => i.requestToken || ""), re = me(() => i.metadataExportUrl || ""), we = me(() => i.metadataSidecarManifestUrl || ""), Ee = me(() => i.metadataSidecarBundleUrl || ""), B = me(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), z = me(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), ue = me(() => Number(i.rootCount || 0)), ve = me(() => Number(i.enabledRootCount || 0)), pe = me(() => ue.value === 0), Se = me(() => ue.value > 0 && ve.value === 0), _e = me(() => he.value.length > 0), He = {
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
    }, he = me(() => Object.entries(He).map(([g, m]) => ({ key: g, label: m, value: P[g] || "" })).filter((g) => String(g.value).trim() !== "")), te = me(() => Object.entries(P).filter(([g, m]) => !["q", "sort", "starred"].includes(g) && String(m || "").trim() !== "").map(([g, m]) => ({ key: g, value: m }))), Q = /* @__PURE__ */ nn({}), Oe = /* @__PURE__ */ ga(null);
    let We = null;
    function st(g) {
      const m = new URLSearchParams(new FormData(g));
      for (const u of Array.from(m.keys()))
        String(m.get(u) || "").trim() === "" && m.delete(u);
      return m.delete("page"), m;
    }
    function Fe(g) {
      s.splice(0, s.length, ...(g.items || []).map((m) => ({ ...m })));
      for (const m of ["shelves", "formats", "publications", "publicationSummaries", "publicationYears", "creators", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "scannerConflictReviewUrl"])
        Object.prototype.hasOwnProperty.call(g, m) && (i[m] = g[m]);
      Object.assign(P, g.activeFilters || {});
    }
    async function qe(g) {
      const m = g?.currentTarget?.tagName === "FORM" ? g.currentTarget : g?.currentTarget?.form;
      if (!m) return;
      const C = st(m).toString(), x = C ? `?${C}` : "", H = await fetch(B.value + x, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!H.ok) {
        m.submit();
        return;
      }
      Fe(await H.json()), history.replaceState({}, "", C ? `?${C}` : window.location.pathname);
    }
    function ie(g) {
      qe(g);
    }
    function Nt(g) {
      window.clearTimeout(We), We = window.setTimeout(() => ie(g), 350);
    }
    function Qe(g) {
      const m = new URLSearchParams();
      for (const [C, x] of Object.entries(P)) {
        const H = String(x || "").trim();
        H !== "" && C !== g && !(C === "sort" && H === "title") && m.set(C, H);
      }
      const u = m.toString();
      return u ? `?${u}` : "?";
    }
    function je() {
      return Qe("q");
    }
    function vt(g) {
      return String(g || "").toUpperCase();
    }
    function ht(g) {
      return g.nextcloudTags || [];
    }
    function ut(g) {
      const m = new URLSearchParams(window.location.search);
      return m.set("publication", g), m.set("sort", "publication"), m.delete("page"), `?${m.toString()}`;
    }
    function Vt(g, m) {
      Q[g] = !!m?.currentTarget?.open;
    }
    function f(g) {
      const m = String(g?.tagName || "").toLowerCase();
      return g?.isContentEditable || ["input", "select", "textarea", "button"].includes(m);
    }
    function p(g) {
      g.key !== "/" || g.metaKey || g.ctrlKey || g.altKey || g.shiftKey || f(g.target) || (g.preventDefault(), Oe.value?.focus(), Oe.value?.select?.());
    }
    function v(g) {
      g.key !== "Escape" || document.activeElement !== Oe.value || P.q === "" || (g.preventDefault(), P.q = "", Oe.value.value = "", window.clearTimeout(We), ie({ currentTarget: Oe.value }));
    }
    function O(g) {
      p(g), v(g);
    }
    Bo(() => {
      window.addEventListener("keydown", O);
    }), Wo(() => {
      window.removeEventListener("keydown", O);
    });
    async function T(g, m) {
      const u = m?.currentTarget?.closest?.("form") || m?.currentTarget;
      if (!u || !g?.starUrl) return;
      const C = !!g.starred;
      g.starred = !C;
      try {
        (await fetch(g.starUrl, {
          method: "POST",
          body: new FormData(u),
          credentials: "same-origin"
        })).ok || (g.starred = C);
      } catch {
        g.starred = C;
      }
    }
    return (g, m) => (F(), U("div", Yu, [
      y("section", Xu, [
        y("div", Ju, [
          y("div", null, [
            y("h2", Zu, S(A(d)("library", "Publication catalogue")), 1),
            y("p", Qu, S(A(d)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          y("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": A(d)("library", "Library actions")
          }, [
            y("a", {
              href: W.value,
              class: "button secondary",
              "aria-label": "Open Library settings"
            }, S(A(d)("library", "Settings")), 9, tf),
            re.value ? (F(), U("a", {
              key: 0,
              href: re.value,
              class: "button secondary",
              "aria-label": "Export corrected metadata"
            }, S(A(d)("library", "Export corrected metadata")), 9, nf)) : Pe("", !0),
            we.value ? (F(), U("a", {
              key: 1,
              href: we.value,
              class: "button secondary",
              "aria-label": "Export sidecar manifest"
            }, S(A(d)("library", "Sidecar manifest")), 9, rf)) : Pe("", !0),
            Ee.value ? (F(), U("a", {
              key: 2,
              href: Ee.value,
              class: "button secondary",
              "aria-label": "Export sidecar ZIP"
            }, S(A(d)("library", "Sidecar ZIP")), 9, sf)) : Pe("", !0)
          ], 8, ef)
        ]),
        y("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": A(d)("library", "Quick catalogue filters"),
          onSubmit: pr(qe, ["prevent"])
        }, [
          (F(!0), U(le, null, ke(te.value, (u) => (F(), U("input", {
            key: u.key,
            type: "hidden",
            name: u.key,
            value: u.value
          }, null, 8, lf))), 128)),
          y("label", af, [
            fe(S(A(d)("library", "Search")) + " ", 1),
            m[18] || (m[18] = y("kbd", { class: "library-keyboard-hint" }, "/", -1)),
            Le(y("input", {
              ref_key: "quickSearchInput",
              ref: Oe,
              "onUpdate:modelValue": m[0] || (m[0] = (u) => P.q = u),
              "data-library-quick-search": "",
              type: "search",
              name: "q",
              placeholder: "Camera, Eco, Rolleiflex...",
              onInput: Nt
            }, null, 544), [
              [ci, P.q]
            ])
          ]),
          y("label", null, [
            fe(S(A(d)("library", "Sort")) + " ", 1),
            Le(y("select", {
              "onUpdate:modelValue": m[1] || (m[1] = (u) => P.sort = u),
              name: "sort",
              onChange: qe
            }, [
              y("option", cf, S(A(d)("library", "Title")), 1),
              y("option", uf, S(A(d)("library", "Recently added")), 1),
              y("option", ff, S(A(d)("library", "Publication date")), 1),
              y("option", df, S(A(d)("library", "Series")), 1),
              y("option", pf, S(A(d)("library", "Recently opened")), 1),
              y("option", hf, S(A(d)("library", "Format")), 1)
            ], 544), [
              [Ye, P.sort]
            ])
          ]),
          y("label", null, [
            fe(S(A(d)("library", "Starred")) + " ", 1),
            Le(y("select", {
              "onUpdate:modelValue": m[2] || (m[2] = (u) => P.starred = u),
              name: "starred",
              onChange: qe
            }, [
              y("option", mf, S(A(d)("library", "All")), 1),
              y("option", bf, S(A(d)("library", "Starred")), 1)
            ], 544), [
              [Ye, P.starred]
            ])
          ]),
          y("label", null, [
            fe(S(A(d)("library", "Size")) + " ", 1),
            y("select", {
              value: V.value.limit,
              name: "limit",
              onChange: qe
            }, [
              (F(), U(le, null, ke(r, (u) => y("option", {
                key: u,
                value: u
              }, S(u), 9, yf)), 64))
            ], 40, gf)
          ]),
          y("button", {
            type: "submit",
            class: "button primary",
            "aria-label": A(d)("library", "Apply catalogue filters")
          }, S(A(d)("library", "Apply filters")), 9, _f),
          y("a", {
            href: "?",
            class: "button secondary",
            "aria-label": A(d)("library", "Clear catalogue filters")
          }, S(A(d)("library", "Clear all")), 9, vf)
        ], 40, of),
        y("details", Sf, [
          y("summary", Tf, S(A(d)("library", "Show catalogue filters")), 1),
          y("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": A(d)("library", "Catalogue search and filters"),
            onSubmit: pr(qe, ["prevent"])
          }, [
            y("label", null, [
              fe(S(A(d)("library", "Search title / author")) + " ", 1),
              Le(y("input", {
                "onUpdate:modelValue": m[3] || (m[3] = (u) => P.q = u),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [ci, P.q]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Type")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[4] || (m[4] = (u) => P.type = u),
                name: "type"
              }, [
                y("option", Af, S(A(d)("library", "All types")), 1),
                (F(), U(le, null, ke(n, (u) => y("option", {
                  key: u,
                  value: u
                }, S(u), 9, xf)), 64))
              ], 512), [
                [Ye, P.type]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Series / periodical")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[5] || (m[5] = (u) => P.publication = u),
                name: "publication"
              }, [
                y("option", Cf, S(A(d)("library", "All series and periodicals")), 1),
                (F(!0), U(le, null, ke(_.value, (u) => (F(), U("option", {
                  key: u,
                  value: u
                }, S(u), 9, wf))), 128))
              ], 512), [
                [Ye, P.publication]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Publication year")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[6] || (m[6] = (u) => P.year = u),
                name: "year"
              }, [
                y("option", Of, S(A(d)("library", "All years")), 1),
                (F(!0), U(le, null, ke(E.value, (u) => (F(), U("option", {
                  key: u,
                  value: u
                }, S(u), 9, Rf))), 128))
              ], 512), [
                [Ye, P.year]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Creator")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[7] || (m[7] = (u) => P.creator = u),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                y("option", Nf, S(A(d)("library", "All creators")), 1),
                (F(!0), U(le, null, ke(N.value, (u) => (F(), U("option", {
                  key: u,
                  value: u
                }, S(u), 9, Pf))), 128))
              ], 512), [
                [Ye, P.creator]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Nextcloud tag")) + " ", 1),
              Le(y("input", {
                "onUpdate:modelValue": m[8] || (m[8] = (u) => P.tag = u),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [ci, P.tag]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Format")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[9] || (m[9] = (u) => P.format = u),
                name: "format"
              }, [
                y("option", If, S(A(d)("library", "All formats")), 1),
                (F(!0), U(le, null, ke(c.value, (u) => (F(), U("option", {
                  key: u,
                  value: u
                }, S(vt(u)), 9, Df))), 128))
              ], 512), [
                [Ye, P.format]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Shelf")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[10] || (m[10] = (u) => P.shelf = u),
                name: "shelf"
              }, [
                y("option", Lf, S(A(d)("library", "All shelves")), 1),
                (F(!0), U(le, null, ke(l.value, (u) => (F(), U("option", {
                  key: u,
                  value: u
                }, S(u), 9, Mf))), 128))
              ], 512), [
                [Ye, P.shelf]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Scan status")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[11] || (m[11] = (u) => P.status = u),
                name: "status"
              }, [
                y("option", Ff, S(A(d)("library", "All scan statuses")), 1),
                (F(!0), U(le, null, ke(M.value, (u) => (F(), U("option", {
                  key: u,
                  value: u
                }, S(u), 9, kf))), 128))
              ], 512), [
                [Ye, P.status]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Workflow status")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[12] || (m[12] = (u) => P.workflowStatus = u),
                name: "workflowStatus"
              }, [
                y("option", Uf, S(A(d)("library", "All workflow statuses")), 1),
                (F(!0), U(le, null, ke(G.value, (u) => (F(), U("option", {
                  key: u,
                  value: u
                }, S(u), 9, Hf))), 128))
              ], 512), [
                [Ye, P.workflowStatus]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Genre")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[13] || (m[13] = (u) => P.genre = u),
                name: "genre"
              }, [
                y("option", jf, S(A(d)("library", "All genres")), 1),
                (F(!0), U(le, null, ke(k.value, (u) => (F(), U("option", {
                  key: u,
                  value: u
                }, S(u), 9, $f))), 128))
              ], 512), [
                [Ye, P.genre]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Classification")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[14] || (m[14] = (u) => P.classification = u),
                name: "classification"
              }, [
                y("option", Vf, S(A(d)("library", "All classifications")), 1),
                (F(!0), U(le, null, ke(X.value, (u) => (F(), U("option", {
                  key: u,
                  value: u
                }, S(u), 9, zf))), 128))
              ], 512), [
                [Ye, P.classification]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Scanner conflicts")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[15] || (m[15] = (u) => P.scannerConflicts = u),
                name: "scannerConflicts"
              }, [
                y("option", Bf, S(A(d)("library", "All metadata")), 1),
                y("option", Wf, S(A(d)("library", "Needs review")), 1)
              ], 512), [
                [Ye, P.scannerConflicts]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Starred")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[16] || (m[16] = (u) => P.starred = u),
                name: "starred"
              }, [
                y("option", qf, S(A(d)("library", "All publications")), 1),
                y("option", Kf, S(A(d)("library", "Starred only")), 1)
              ], 512), [
                [Ye, P.starred]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Sort")) + " ", 1),
              Le(y("select", {
                "onUpdate:modelValue": m[17] || (m[17] = (u) => P.sort = u),
                name: "sort"
              }, [
                y("option", Gf, S(A(d)("library", "Title")), 1),
                y("option", Yf, S(A(d)("library", "Recently added")), 1),
                y("option", Xf, S(A(d)("library", "Publication date")), 1),
                y("option", Jf, S(A(d)("library", "Series / periodical")), 1),
                y("option", Zf, S(A(d)("library", "Recently opened")), 1),
                y("option", Qf, S(A(d)("library", "Format")), 1)
              ], 512), [
                [Ye, P.sort]
              ])
            ]),
            y("label", null, [
              fe(S(A(d)("library", "Page size")) + " ", 1),
              y("select", {
                value: V.value.limit,
                name: "limit"
              }, [
                (F(), U(le, null, ke(r, (u) => y("option", {
                  key: u,
                  value: u
                }, S(u), 9, td)), 64))
              ], 8, ed)
            ]),
            y("button", {
              type: "submit",
              class: "button primary",
              "aria-label": A(d)("library", "Apply catalogue filters")
            }, S(A(d)("library", "Apply filters")), 9, nd),
            y("a", {
              href: "?",
              class: "button secondary",
              "aria-label": A(d)("library", "Clear catalogue filters")
            }, S(A(d)("library", "Clear")), 9, rd),
            y("a", {
              href: z.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, S(A(d)("library", "Review scanner conflicts")), 9, id)
          ], 40, Ef)
        ]),
        y("p", sd, [
          fe(S(A(d)("library", "Showing")) + " " + S(V.value.from) + "–" + S(V.value.to) + " " + S(A(d)("library", "of")) + " " + S(V.value.total) + " " + S(A(d)("library", "catalogue items")), 1),
          he.value.length > 0 ? (F(), U("span", od, [
            m[19] || (m[19] = fe(" · ", -1)),
            y("a", ld, S(A(d)("library", "Clear all filters")), 1)
          ])) : Pe("", !0)
        ]),
        he.value.length > 0 ? (F(), U("nav", {
          key: 0,
          class: "library-active-filter-chips",
          "aria-label": A(d)("library", "Active filters")
        }, [
          y("span", null, S(A(d)("library", "Active filters")), 1),
          (F(!0), U(le, null, ke(he.value, (u) => (F(), U("a", {
            key: u.key,
            href: Qe(u.key),
            class: "library-filter-chip",
            "aria-label": `${A(d)("library", "Remove filter")}: ${u.label}`
          }, [
            y("strong", null, S(u.label) + ":", 1),
            fe(" " + S(u.value) + " ", 1),
            m[20] || (m[20] = y("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, cd))), 128))
        ], 8, ad)) : Pe("", !0),
        y("nav", {
          class: "library-pagination",
          "aria-label": A(d)("library", "Catalogue pagination")
        }, [
          y("span", fd, [
            fe(S(A(d)("library", "Page")) + " " + S(V.value.page), 1),
            V.value.total > 0 ? (F(), U("span", dd, " · " + S(V.value.from) + "–" + S(V.value.to), 1)) : Pe("", !0)
          ]),
          V.value.previousUrl ? (F(), U("a", {
            key: 0,
            href: V.value.previousUrl
          }, S(A(d)("library", "Previous")), 9, pd)) : (F(), U("span", hd, S(A(d)("library", "Previous")), 1)),
          V.value.nextUrl ? (F(), U("a", {
            key: 2,
            href: V.value.nextUrl
          }, S(A(d)("library", "Next")), 9, md)) : (F(), U("span", bd, S(A(d)("library", "Next")), 1))
        ], 8, ud),
        h.value.length > 0 ? (F(), U("details", gd, [
          y("summary", yd, S(A(d)("library", "Show top series and periodicals")), 1),
          y("h3", _d, S(A(d)("library", "Top series and periodicals")), 1),
          y("p", vd, S(A(d)("library", "Jump into recurring publications with one click.")), 1),
          y("ul", null, [
            (F(!0), U(le, null, ke(h.value, (u) => (F(), U("li", {
              key: u.publication
            }, [
              y("a", {
                href: ut(u.publication)
              }, S(u.publication), 9, Sd),
              y("span", Td, S(u.itemCount) + " items", 1)
            ]))), 128))
          ])
        ])) : h.value.length === 0 ? (F(), U("details", Ed, [
          y("summary", Ad, S(A(d)("library", "Show top series and periodicals")), 1),
          y("h3", xd, S(A(d)("library", "No series or periodicals found yet")), 1),
          y("p", Cd, S(A(d)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
        ])) : Pe("", !0),
        o.value.length === 0 ? (F(), U("div", {
          key: 3,
          class: vn(["library-empty-content", { "library-first-run-guidance": pe.value || Se.value, "library-filter-empty-state": _e.value && !pe.value && !Se.value }]),
          role: "status"
        }, [
          pe.value ? (F(), U(le, { key: 0 }, [
            y("h3", null, S(A(d)("library", "Start with one Library root")), 1),
            y("p", wd, S(A(d)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            y("p", Od, [
              y("a", {
                href: W.value,
                class: "button primary"
              }, S(A(d)("library", "Add a Library root")), 9, Rd),
              y("span", Nd, S(A(d)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : Se.value ? (F(), U(le, { key: 1 }, [
            y("h3", null, S(A(d)("library", "No enabled Library roots")), 1),
            y("p", Pd, S(A(d)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            y("p", Id, [
              y("a", {
                href: W.value,
                class: "button primary"
              }, S(A(d)("library", "Open Library settings")), 9, Dd)
            ])
          ], 64)) : _e.value ? (F(), U(le, { key: 2 }, [
            y("h3", null, S(A(d)("library", "No matches for the current filters")), 1),
            y("p", Ld, S(A(d)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            y("p", Md, [
              y("a", {
                href: je(),
                class: "button secondary"
              }, S(A(d)("library", "Clear search")), 9, Fd),
              y("a", kd, S(A(d)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (F(), U(le, { key: 3 }, [
            y("h3", null, S(A(d)("library", "No catalogue items yet")), 1),
            y("p", Ud, S(A(d)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            y("p", Hd, [
              y("a", {
                href: W.value,
                class: "button primary"
              }, S(A(d)("library", "Run a scan from settings")), 9, jd)
            ])
          ], 64))
        ], 2)) : (F(), U("div", $d, [
          (F(!0), U(le, null, ke(o.value, (u) => (F(), U("article", {
            key: u.id,
            class: vn(["library-cover-card", { "library-cover-card--open": Q[u.id] }])
          }, [
            y("a", {
              class: "library-cover-link",
              href: u.openUrl,
              "aria-label": `Read ${u.title}`
            }, [
              y("img", {
                class: "library-cover-image",
                src: u.coverUrl,
                alt: `Cover for ${u.title}`,
                loading: "lazy"
              }, null, 8, zd)
            ], 8, Vd),
            y("form", {
              method: "post",
              action: u.starUrl,
              class: "library-cover-star-form",
              onSubmit: pr((C) => T(u, C), ["prevent"])
            }, [
              y("input", {
                type: "hidden",
                name: "requesttoken",
                value: D.value
              }, null, 8, Wd),
              m[21] || (m[21] = y("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              y("input", {
                type: "hidden",
                name: "starred",
                value: u.starred ? "0" : "1"
              }, null, 8, qd),
              y("button", {
                type: "submit",
                class: vn(["library-cover-star-button", { "library-cover-star-button--starred": u.starred }]),
                "aria-pressed": u.starred ? "true" : "false",
                title: u.starred ? A(d)("library", "Unstar this publication") : A(d)("library", "Star this publication"),
                "aria-label": u.starred ? A(d)("library", "Unstar this publication") : A(d)("library", "Star this publication"),
                onClick: pr((C) => T(u, C), ["prevent"])
              }, S(u.starred ? "★" : "☆"), 11, Kd)
            ], 40, Bd),
            y("div", Gd, [
              y("div", Yd, [
                y("h3", null, [
                  u.starred ? (F(), U("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": A(d)("library", "Starred")
                  }, "★", 8, Xd)) : Pe("", !0),
                  fe(S(u.title), 1)
                ]),
                y("a", {
                  class: "library-cover-read",
                  href: u.openUrl
                }, S(A(d)("library", "Read")), 9, Jd)
              ]),
              y("details", {
                class: "library-cover-details",
                onToggle: (C) => Vt(u.id, C)
              }, [
                y("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${A(d)("library", "Show details and actions")}: ${u.title}`
                }, S(A(d)("library", "Details")), 9, Qd),
                y("div", ep, [
                  u.creators ? (F(), U("p", tp, S(u.creators), 1)) : Pe("", !0),
                  y("dl", np, [
                    y("div", rp, [
                      y("dt", null, S(A(d)("library", "Type")), 1),
                      y("dd", null, S(u.publicationType), 1)
                    ]),
                    u.publication ? (F(), U("div", ip, [
                      y("dt", null, S(A(d)("library", "Series")), 1),
                      y("dd", null, S(u.publication), 1)
                    ])) : Pe("", !0),
                    u.publicationDate ? (F(), U("div", sp, [
                      y("dt", null, S(A(d)("library", "Date")), 1),
                      y("dd", null, S(u.publicationDate), 1)
                    ])) : Pe("", !0),
                    u.workflowStatus ? (F(), U("div", op, [
                      y("dt", null, S(A(d)("library", "Status")), 1),
                      y("dd", null, S(u.workflowStatus), 1)
                    ])) : Pe("", !0),
                    u.hasScannerConflict ? (F(), U("div", lp, [
                      y("dt", null, S(A(d)("library", "Review")), 1),
                      y("dd", null, S(u.scannerConflictCount) + " fields", 1)
                    ])) : Pe("", !0),
                    u.lastOpenedAt ? (F(), U("div", ap, [
                      y("dt", null, S(A(d)("library", "Last opened")), 1),
                      y("dd", null, S(u.lastOpenedAt), 1)
                    ])) : Pe("", !0),
                    u.extension ? (F(), U("div", cp, [
                      y("dt", null, S(A(d)("library", "Format")) + ":", 1),
                      y("dd", null, S(vt(u.extension)), 1)
                    ])) : Pe("", !0),
                    u.shelf ? (F(), U("div", up, [
                      y("dt", null, S(A(d)("library", "Shelf")), 1),
                      y("dd", null, S(u.shelf), 1)
                    ])) : Pe("", !0)
                  ]),
                  u.description ? (F(), U("p", fp, S(u.description), 1)) : Pe("", !0),
                  u.scanStatus !== "indexed" || u.scanError ? (F(), U("p", dp, [
                    fe(" scanStatus: " + S(u.scanStatus || "unknown"), 1),
                    u.scanError ? (F(), U("span", pp, " · scanError: " + S(u.scanError), 1)) : Pe("", !0)
                  ])) : Pe("", !0),
                  y("div", hp, [
                    ht(u).length === 0 ? (F(), U("span", mp, "No Nextcloud tags")) : (F(!0), U(le, { key: 1 }, ke(ht(u), (C) => (F(), U("span", {
                      key: C.id,
                      class: "library-tag"
                    }, S(C.name), 1))), 128))
                  ]),
                  y("p", bp, [
                    y("a", {
                      href: u.filesUrl
                    }, S(A(d)("library", "Show in Files")), 9, gp),
                    m[22] || (m[22] = fe(" · ", -1)),
                    y("a", {
                      href: u.downloadUrl
                    }, S(A(d)("library", "Download source")), 9, yp),
                    m[23] || (m[23] = fe(" · ", -1)),
                    y("a", {
                      href: u.detailsUrl
                    }, S(A(d)("library", "Details")), 9, _p)
                  ])
                ])
              ], 40, Zd)
            ])
          ], 2))), 128))
        ]))
      ])
    ]));
  }
}, so = cu("library", "catalogue", {}), yr = document.querySelector("#library-vue-root"), oo = {
  ...so,
  requestToken: yr?.dataset.requestToken || so.requestToken || ""
};
function oe(e) {
  return String(e ?? "");
}
function Sl(e) {
  return oe(e).toUpperCase();
}
function Sp(e, t, n, r = oe) {
  for (const i of t) {
    const s = document.createElement("option");
    s.value = oe(i), s.textContent = r(i), oe(i) === oe(n) && (s.selected = !0), e.appendChild(s);
  }
}
function lo(e, t, n, r, i = "") {
  const s = document.createElement("label");
  s.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = oe(r), o.placeholder = i, s.appendChild(o), e.appendChild(s);
}
function bn(e, t, n, r, i, s, o = oe) {
  const l = document.createElement("label");
  l.textContent = t;
  const c = document.createElement("select");
  c.name = n;
  const _ = document.createElement("option");
  _.value = "", _.textContent = i, c.appendChild(_), Sp(c, s, r, o), l.appendChild(c), e.appendChild(l);
}
function Tp(e) {
  const t = oe(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function Ep(e) {
  const t = new URLSearchParams(window.location.search);
  return t.set("publication", e), t.set("sort", "publication"), t.delete("page"), `?${t.toString()}`;
}
function Ap(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, r]) => n !== "sort" && oe(r).trim() !== "");
}
function xp() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Mn(e, t, n, r) {
  const i = document.createElement("a");
  return i.href = t, i.className = n, i.textContent = r, e.appendChild(i), i;
}
function Cp(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function wp(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-filter-bar", r.setAttribute("aria-label", d("library", "Catalogue search and filters")), lo(r, d("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), bn(r, d("library", "Type"), "type", n.type, d("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), lo(r, d("library", "Nextcloud tag"), "tag", n.tag, "photography"), bn(r, d("library", "Format"), "format", n.format, d("library", "All formats"), e.formats || [], Sl), bn(r, d("library", "Shelf"), "shelf", n.shelf, d("library", "All shelves"), e.shelves || []), bn(r, d("library", "Scan status"), "status", n.status, d("library", "All scan statuses"), e.scanStatuses || []), bn(r, d("library", "Sort"), "sort", n.sort || "title", d("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), bn(r, d("library", "Page size"), "limit", t.limit || 100, d("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", d("library", "Apply catalogue filters")), i.textContent = d("library", "Apply filters");
  const s = document.createElement("a");
  return s.href = "?", s.className = "button secondary", s.setAttribute("aria-label", d("library", "Clear catalogue filters")), s.textContent = d("library", "Clear"), r.append(i, s), r;
}
function Op(e, t) {
  const n = e.activeFilters || {}, r = document.createElement("form");
  r.method = "get", r.className = "library-quick-filter-bar", r.setAttribute("aria-label", d("library", "Quick catalogue filters"));
  let i = null;
  const s = () => {
    window.clearTimeout(i), i = window.setTimeout(() => r.requestSubmit(), 350);
  };
  for (const [E, N] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(E) || oe(N).trim() === "") continue;
    const M = document.createElement("input");
    M.type = "hidden", M.name = E, M.value = oe(N), r.appendChild(M);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = d("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = oe(n.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", s), o.appendChild(l), r.appendChild(o);
  const c = [
    [d("library", "Sort"), "sort", n.sort || "title", [["title", d("library", "Title")], ["recent", d("library", "Recently added")], ["publicationDate", d("library", "Publication date")], ["publication", d("library", "Series")], ["lastOpened", d("library", "Recently opened")], ["format", d("library", "Format")]]],
    [d("library", "Starred"), "starred", n.starred || "", [["", d("library", "All")], ["1", d("library", "Starred")]]],
    [d("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, N, M, G] of c) {
    const k = document.createElement("label");
    k.textContent = E;
    const X = document.createElement("select");
    X.name = N;
    for (const [V, P] of G) {
      const W = document.createElement("option");
      W.value = oe(V), W.textContent = oe(P), oe(V) === oe(M) && (W.selected = !0), X.appendChild(W);
    }
    X.addEventListener("change", () => r.requestSubmit()), k.appendChild(X), r.appendChild(k);
  }
  const _ = document.createElement("button");
  _.type = "submit", _.className = "button primary", _.setAttribute("aria-label", d("library", "Apply catalogue filters")), _.textContent = d("library", "Apply filters");
  const h = document.createElement("a");
  return h.href = "?", h.className = "button secondary", h.setAttribute("aria-label", d("library", "Clear catalogue filters")), h.textContent = d("library", "Clear all"), r.append(_, h), r;
}
function Rp(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], r = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, i = oe(e.settingsUrl || ""), s = oe(e.metadataExportUrl || ""), o = document.createElement("div");
  o.className = "library-vue-catalogue library-vue-fallback", o.dataset.vueFallback = "true";
  const l = document.createElement("section");
  l.className = "library-panel", l.setAttribute("aria-labelledby", "library-catalogue-heading");
  const c = document.createElement("div");
  c.className = "library-catalogue-header";
  const _ = document.createElement("div"), h = document.createElement("h2");
  h.id = "library-catalogue-heading", h.textContent = d("library", "Publication catalogue");
  const E = document.createElement("p");
  E.className = "library-muted", E.textContent = d("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), _.append(h, E);
  const N = document.createElement("nav");
  if (N.className = "library-catalogue-toolbar", N.setAttribute("aria-label", d("library", "Library actions")), i) {
    const B = document.createElement("a");
    B.href = i, B.className = "button secondary", B.setAttribute("aria-label", "Open Library settings"), B.textContent = d("library", "Settings"), N.appendChild(B);
  }
  if (s) {
    const B = document.createElement("a");
    B.href = s, B.className = "button secondary", B.setAttribute("aria-label", "Export corrected metadata"), B.textContent = d("library", "Export corrected metadata"), N.appendChild(B);
  }
  if (e.metadataSidecarManifestUrl) {
    const B = document.createElement("a");
    B.href = e.metadataSidecarManifestUrl, B.className = "button secondary", B.setAttribute("aria-label", "Export sidecar manifest"), B.textContent = d("library", "Sidecar manifest"), N.appendChild(B);
  }
  if (e.metadataSidecarBundleUrl) {
    const B = document.createElement("a");
    B.href = e.metadataSidecarBundleUrl, B.className = "button secondary", B.setAttribute("aria-label", "Export sidecar ZIP"), B.textContent = d("library", "Sidecar ZIP"), N.appendChild(B);
  }
  c.append(_, N), l.appendChild(c), l.appendChild(Op(e, r));
  const M = document.createElement("details");
  M.className = "library-filter-panel";
  const G = document.createElement("summary");
  G.className = "library-filter-panel-summary", G.textContent = d("library", "Show catalogue filters"), M.append(G, wp(e, r)), l.appendChild(M);
  const k = document.createElement("p");
  k.className = "library-muted library-filter-result-summary", k.textContent = `Showing ${r.from ?? 0}–${r.to ?? n.length} of ${r.total ?? n.length} catalogue items`;
  const X = document.createElement("a");
  X.href = "?", X.textContent = ` ${d("library", "Clear all filters")}`, k.appendChild(X), l.appendChild(k);
  const V = document.createElement("nav");
  V.className = "library-pagination", V.setAttribute("aria-label", d("library", "Catalogue pagination"));
  const P = document.createElement("span");
  P.className = "library-pagination-range", P.textContent = `Page ${r.page ?? 1} · ${r.from ?? 0}–${r.to ?? n.length}`, V.appendChild(P), l.appendChild(V);
  const W = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], D = document.createElement("details");
  D.className = W.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const re = document.createElement("summary");
  re.className = "library-periodical-groups-summary", re.textContent = d("library", "Show top series and periodicals"), D.appendChild(re);
  const we = document.createElement("h3");
  we.textContent = W.length > 0 ? d("library", "Top series and periodicals") : d("library", "No series or periodicals found yet");
  const Ee = document.createElement("p");
  if (Ee.className = "library-muted", Ee.textContent = W.length > 0 ? d("library", "Jump into recurring publications with one click.") : d("library", "Add publication or series names in item details to build this shortcut panel."), D.append(we, Ee), W.length > 0) {
    const B = document.createElement("ul");
    for (const z of W) {
      const ue = document.createElement("li"), ve = document.createElement("a");
      ve.href = Ep(oe(z.publication)), ve.textContent = oe(z.publication);
      const pe = document.createElement("span");
      pe.className = "library-muted", pe.textContent = `${z.itemCount} items`, ue.append(ve, pe), B.appendChild(ue);
    }
    D.appendChild(B);
  }
  if (l.appendChild(D), n.length === 0) {
    const B = document.createElement("div"), z = Number(e.rootCount || 0), ue = Number(e.enabledRootCount || 0), ve = Ap(e);
    B.className = "library-empty-content", (z === 0 || ue === 0) && B.classList.add("library-first-run-guidance"), ve && z > 0 && ue > 0 && B.classList.add("library-filter-empty-state"), B.setAttribute("role", "status");
    const pe = document.createElement("h3"), Se = document.createElement("p");
    Se.className = "library-muted";
    const _e = document.createElement("p");
    _e.className = "library-empty-actions", z === 0 ? (pe.textContent = d("library", "Start with one Library root"), Se.textContent = d("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Mn(_e, i, "button primary", d("library", "Add a Library root")), Cp(_e, d("library", "Run a scan after saving a root"))) : ue === 0 ? (pe.textContent = d("library", "No enabled Library roots"), Se.textContent = d("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Mn(_e, i, "button primary", d("library", "Open Library settings"))) : ve ? (pe.textContent = d("library", "No matches for the current filters"), Se.textContent = d("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Mn(_e, xp(), "button secondary", d("library", "Clear search")), Mn(_e, "?", "button primary", d("library", "Clear all filters"))) : (pe.textContent = d("library", "No catalogue items yet"), Se.textContent = d("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Mn(_e, i, "button primary", d("library", "Run a scan from settings"))), B.append(pe, Se, _e), l.appendChild(B);
  } else {
    const B = document.createElement("div");
    B.className = "library-cover-gallery";
    for (const z of n) {
      const ue = document.createElement("article");
      ue.className = "library-cover-card";
      const ve = document.createElement("a");
      ve.className = "library-cover-link", ve.href = oe(z.openUrl || "#"), ve.setAttribute("aria-label", `Read ${oe(z.title || "publication")}`);
      const pe = document.createElement("img");
      pe.className = "library-cover-image", pe.src = oe(z.coverUrl || ""), pe.alt = `Cover for ${oe(z.title || "publication")}`, pe.loading = "lazy", ve.appendChild(pe);
      const Se = Tp(e), _e = document.createElement("form");
      _e.method = "post", _e.action = oe(z.starUrl || ""), _e.className = "library-cover-star-form", Se && _e.appendChild(Se);
      const He = document.createElement("input");
      He.type = "hidden", He.name = "returnTo", He.value = "catalogue";
      const he = document.createElement("input");
      he.type = "hidden", he.name = "starred", he.value = z.starred ? "0" : "1";
      const te = document.createElement("button");
      te.type = "submit", te.className = z.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", te.setAttribute("aria-pressed", z.starred ? "true" : "false"), te.setAttribute("aria-label", z.starred ? d("library", "Unstar this publication") : d("library", "Star this publication")), te.title = z.starred ? d("library", "Unstar this publication") : d("library", "Star this publication"), te.textContent = z.starred ? "★" : "☆", _e.append(He, he, te);
      const Q = document.createElement("div");
      Q.className = "library-cover-summary";
      const Oe = document.createElement("h3");
      if (Oe.textContent = oe(z.title || "Untitled publication"), Q.appendChild(Oe), z.creators) {
        const je = document.createElement("p");
        je.className = "library-creator", je.textContent = oe(z.creators), Q.appendChild(je);
      }
      const We = document.createElement("dl");
      We.className = "library-cover-detail-list";
      const st = [
        ["Type", oe(z.publicationType || "other")],
        ["Format", z.extension ? Sl(z.extension) : ""],
        ["Shelf", z.shelf ? oe(z.shelf) : ""]
      ].filter(([, je]) => je !== "");
      for (const [je, vt] of st) {
        const ht = document.createElement("div");
        ht.className = "library-cover-detail-chip";
        const ut = document.createElement("dt");
        ut.textContent = je;
        const Vt = document.createElement("dd");
        Vt.textContent = vt, ht.append(ut, Vt), We.appendChild(ht);
      }
      Q.appendChild(We);
      const Fe = document.createElement("p"), qe = document.createElement("a");
      qe.href = oe(z.openUrl || "#"), qe.textContent = d("library", "Read");
      const ie = document.createElement("a");
      ie.href = oe(z.filesUrl || "#"), ie.textContent = d("library", "Show in Files");
      const Nt = document.createElement("a");
      Nt.href = oe(z.downloadUrl || "#"), Nt.textContent = d("library", "Download source");
      const Qe = document.createElement("a");
      Qe.href = oe(z.detailsUrl || "#"), Qe.textContent = d("library", "Details"), Fe.append(qe, document.createTextNode(" · "), ie, document.createTextNode(" · "), Nt, document.createTextNode(" · "), Qe), Q.appendChild(Fe), ue.append(ve, _e, Q), B.appendChild(ue);
    }
    l.appendChild(B);
  }
  return o.appendChild(l), o;
}
if (yr)
  try {
    ou(vp, { state: oo }).mount(yr);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), yr.replaceChildren(Rp(oo));
  }
//# sourceMappingURL=library-main.mjs.map
