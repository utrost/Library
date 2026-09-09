// @__NO_SIDE_EFFECTS__
function Ui(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Se = {}, Or = [], $t = () => {
}, ds = () => !1, Dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Un = (e) => e.startsWith("onUpdate:"), Je = Object.assign, Fi = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, _e = (e, t) => jl.call(e, t), Q = Array.isArray, nr = (e) => sn(e) === "[object Map]", gr = (e) => sn(e) === "[object Set]", mo = (e) => sn(e) === "[object Date]", le = (e) => typeof e == "function", Me = (e) => typeof e == "string", jt = (e) => typeof e == "symbol", Te = (e) => e !== null && typeof e == "object", ps = (e) => (Te(e) || le(e)) && le(e.then) && le(e.catch), hs = Object.prototype.toString, sn = (e) => hs.call(e), Vl = (e) => sn(e).slice(8, -1), ms = (e) => sn(e) === "[object Object]", Hi = (e) => Me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Kr = /* @__PURE__ */ Ui(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Bl = /-\w/g, wt = Fn(
  (e) => e.replace(Bl, (t) => t.slice(1).toUpperCase())
), zl = /\B([A-Z])/g, _r = Fn(
  (e) => e.replace(zl, "-$1").toLowerCase()
), bs = Fn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ri = Fn(
  (e) => e ? `on${bs(e)}` : ""
), Ht = (e, t) => !Object.is(e, t), Sn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, ys = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Hn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let bo;
const $n = () => bo || (bo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function $i(e) {
  if (Q(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Me(n) ? Gl(n) : $i(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Me(e) || Te(e))
    return e;
}
const Wl = /;(?![^(]*\))/g, ql = /:([^]+)/, Kl = /\/\*[^]*?\*\//g;
function Gl(e) {
  const t = {};
  return e.replace(Kl, "").split(Wl).forEach((r) => {
    if (r) {
      const n = r.split(ql);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Nr(e) {
  let t = "";
  if (Me(e))
    t = e;
  else if (Q(e))
    for (let r = 0; r < e.length; r++) {
      const n = Nr(e[r]);
      n && (t += n + " ");
    }
  else if (Te(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ Ui(Yl);
function gs(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = ir(e[n], t[n]);
  return r;
}
function yo(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const i of e) {
    let o = -1;
    for (let s = 0; s < r.length; s++)
      if (!n[s] && ir(i, r[s])) {
        o = s;
        break;
      }
    if (o < 0) return !1;
    n[o] = 1;
  }
  return !0;
}
function ir(e, t) {
  if (e === t) return !0;
  let r = mo(e), n = mo(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = jt(e), n = jt(t), r || n)
    return e === t;
  if (r = Q(e), n = Q(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Te(e), n = Te(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = nr(e), n = nr(t), r || n || (r = gr(e), n = gr(t), r || n))
      return r && n ? yo(e, t) : !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), f = t.hasOwnProperty(s);
      if (l && !f || !l && f || !ir(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => ir(r, t));
}
const _s = (e) => !!(e && e.__v_isRef === !0), p = (e) => Me(e) ? e : e == null ? "" : Q(e) || Te(e) && (e.toString === hs || !le(e.toString)) ? _s(e) ? p(e.value) : JSON.stringify(e, vs, 2) : String(e), vs = (e, t) => _s(t) ? vs(e, t.value) : nr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[ni(n, o) + " =>"] = i, r),
    {}
  )
} : gr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ni(r))
} : jt(t) ? ni(t) : Te(t) && !Q(t) && !ms(t) ? String(t) : t, ni = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    jt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Ke;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ke && (Ke.active ? (this.parent = Ke, this.index = (Ke.scopes || (Ke.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (t = 0, r = n.length; t < r; t++)
          n[t].pause();
      }
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (t = 0, r = i.length; t < r; t++)
          i[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, r = n.length; t < r; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Ke;
      try {
        return Ke = this, t();
      } finally {
        Ke = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ke, Ke = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ke === this)
        Ke = this.prevScope;
      else {
        let t = Ke;
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
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (r = 0, n = i.length; r < n; r++)
          i[r].stop(!0);
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
function ea() {
  return Ke;
}
let xe;
const ii = /* @__PURE__ */ new WeakSet();
class Es {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ke && (Ke.active ? Ke.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ii.has(this) && (ii.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ss(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, go(this), Cs(this);
    const t = xe, r = Rt;
    xe = this, Rt = !0;
    try {
      return this.fn();
    } finally {
      xs(this), xe = t, Rt = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Bi(t);
      this.deps = this.depsTail = void 0, go(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ii.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    xi(this) && this.run();
  }
  get dirty() {
    return xi(this);
  }
}
let Ts = 0, Gr, Yr;
function Ss(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yr, Yr = e;
    return;
  }
  e.next = Gr, Gr = e;
}
function ji() {
  Ts++;
}
function Vi() {
  if (--Ts > 0)
    return;
  if (Yr) {
    let t = Yr;
    for (Yr = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Gr; ) {
    let t = Gr;
    for (Gr = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function Cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xs(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Bi(n), ta(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function xi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (As(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function As(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Qr) || (e.globalVersion = Qr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = xe, n = Rt;
  xe = e, Rt = !0;
  try {
    Cs(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ht(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    xe = r, Rt = n, xs(e), e.flags &= -3;
  }
}
function Bi(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Bi(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function ta(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Rt = !0;
const ws = [];
function Gt() {
  ws.push(Rt), Rt = !1;
}
function Yt() {
  const e = ws.pop();
  Rt = e === void 0 ? !0 : e;
}
function go(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = xe;
    xe = void 0;
    try {
      t();
    } finally {
      xe = r;
    }
  }
}
let Qr = 0;
class ra {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!xe || !Rt || xe === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== xe)
      r = this.activeLink = new ra(xe, this), xe.deps ? (r.prevDep = xe.depsTail, xe.depsTail.nextDep = r, xe.depsTail = r) : xe.deps = xe.depsTail = r, Rs(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = xe.depsTail, r.nextDep = void 0, xe.depsTail.nextDep = r, xe.depsTail = r, xe.deps === r && (xe.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, Qr++, this.notify(t);
  }
  notify(t) {
    ji();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Vi();
    }
  }
}
function Rs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Rs(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Ai = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ Symbol(
  ""
), wi = /* @__PURE__ */ Symbol(
  ""
), en = /* @__PURE__ */ Symbol(
  ""
);
function Ye(e, t, r) {
  if (Rt && xe) {
    let n = Ai.get(e);
    n || Ai.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new zi()), i.map = n, i.key = r), i.track();
  }
}
function Wt(e, t, r, n, i, o) {
  const s = Ai.get(e);
  if (!s) {
    Qr++;
    return;
  }
  const l = (f) => {
    f && f.trigger();
  };
  if (ji(), t === "clear")
    s.forEach(l);
  else {
    const f = Q(e), v = f && Hi(r);
    if (f && r === "length") {
      const b = Number(n);
      s.forEach((E, P) => {
        (P === "length" || P === en || !jt(P) && P >= b) && l(E);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && l(s.get(r)), v && l(s.get(en)), t) {
        case "add":
          f ? v && l(s.get("length")) : (l(s.get(mr)), nr(e) && l(s.get(wi)));
          break;
        case "delete":
          f || (l(s.get(mr)), nr(e) && l(s.get(wi)));
          break;
        case "set":
          nr(e) && l(s.get(mr));
          break;
      }
  }
  Vi();
}
function Cr(e) {
  const t = /* @__PURE__ */ ge(e);
  return t === e ? t : (Ye(t, "iterate", en), /* @__PURE__ */ Ct(e) ? t : t.map(Ot));
}
function jn(e) {
  return Ye(e = /* @__PURE__ */ ge(e), "iterate", en), e;
}
function Ut(e, t) {
  return /* @__PURE__ */ Xt(e) ? Lr(/* @__PURE__ */ br(e) ? Ot(t) : t) : Ot(t);
}
const na = {
  __proto__: null,
  [Symbol.iterator]() {
    return oi(this, Symbol.iterator, (e) => Ut(this, e));
  },
  concat(...e) {
    return Cr(this).concat(
      ...e.map((t) => Q(t) ? Cr(t) : t)
    );
  },
  entries() {
    return oi(this, "entries", (e) => (e[1] = Ut(this, e[1]), e));
  },
  every(e, t) {
    return Vt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Vt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Ut(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Vt(
      this,
      "find",
      e,
      t,
      (r) => Ut(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Vt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Vt(
      this,
      "findLast",
      e,
      t,
      (r) => Ut(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Vt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Vt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return si(this, "includes", e);
  },
  indexOf(...e) {
    return si(this, "indexOf", e);
  },
  join(e) {
    return Cr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return si(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Vt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Fr(this, "pop");
  },
  push(...e) {
    return Fr(this, "push", e);
  },
  reduce(e, ...t) {
    return _o(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _o(this, "reduceRight", e, t);
  },
  shift() {
    return Fr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Vt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Fr(this, "splice", e);
  },
  toReversed() {
    return Cr(this).toReversed();
  },
  toSorted(e) {
    return Cr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Cr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Fr(this, "unshift", e);
  },
  values() {
    return oi(this, "values", (e) => Ut(this, e));
  }
};
function oi(e, t, r) {
  const n = jn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ Ct(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const ia = Array.prototype;
function Vt(e, t, r, n, i, o) {
  const s = jn(e), l = s !== e && !/* @__PURE__ */ Ct(e), f = s[t];
  if (f !== ia[t]) {
    const E = f.apply(e, o);
    return l ? Ot(E) : E;
  }
  let v = r;
  s !== e && (l ? v = function(E, P) {
    return r.call(this, Ut(e, E), P, e);
  } : r.length > 2 && (v = function(E, P) {
    return r.call(this, E, P, e);
  }));
  const b = f.call(s, v, n);
  return l && i ? i(b) : b;
}
function _o(e, t, r, n) {
  const i = jn(e), o = i !== e && !/* @__PURE__ */ Ct(e);
  let s = r, l = !1;
  i !== e && (o ? (l = n.length === 0, s = function(v, b, E) {
    return l && (l = !1, v = Ut(e, v)), r.call(this, v, Ut(e, b), E, e);
  }) : r.length > 3 && (s = function(v, b, E) {
    return r.call(this, v, b, E, e);
  }));
  const f = i[t](s, ...n);
  return l ? Ut(e, f) : f;
}
function si(e, t, r) {
  const n = /* @__PURE__ */ ge(e);
  Ye(n, "iterate", en);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ki(r[0]) ? (r[0] = /* @__PURE__ */ ge(r[0]), n[t](...r)) : i;
}
function Fr(e, t, r = []) {
  Gt(), ji();
  const n = (/* @__PURE__ */ ge(e))[t].apply(e, r);
  return Vi(), Yt(), n;
}
const oa = /* @__PURE__ */ Ui("__proto__,__v_isRef,__isVue"), Os = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(jt)
);
function sa(e) {
  jt(e) || (e = String(e));
  const t = /* @__PURE__ */ ge(this);
  return Ye(t, "has", e), t.hasOwnProperty(e);
}
class Ns {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return o;
    if (r === "__v_raw")
      return n === (i ? o ? ba : Ls : o ? Ms : ks).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = Q(t);
    if (!i) {
      let f;
      if (s && (f = na[r]))
        return f;
      if (r === "hasOwnProperty")
        return sa;
    }
    const l = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Xe(t) ? t : n
    );
    if ((jt(r) ? Os.has(r) : oa(r)) || (i || Ye(t, "get", r), o))
      return l;
    if (/* @__PURE__ */ Xe(l)) {
      const f = s && Hi(r) ? l : l.value;
      return i && Te(f) ? /* @__PURE__ */ Oi(f) : f;
    }
    return Te(l) ? i ? /* @__PURE__ */ Oi(l) : /* @__PURE__ */ pr(l) : l;
  }
}
class Ps extends Ns {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = Q(t) && Hi(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ Xt(o);
      if (!/* @__PURE__ */ Ct(n) && !/* @__PURE__ */ Xt(n) && (o = /* @__PURE__ */ ge(o), n = /* @__PURE__ */ ge(n)), !s && /* @__PURE__ */ Xe(o) && !/* @__PURE__ */ Xe(n))
        return v || (o.value = n), !0;
    }
    const l = s ? Number(r) < t.length : _e(t, r), f = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Xe(t) ? t : i
    );
    return t === /* @__PURE__ */ ge(i) && f && (l ? Ht(n, o) && Wt(t, "set", r, n) : Wt(t, "add", r, n)), f;
  }
  deleteProperty(t, r) {
    const n = _e(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Wt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!jt(r) || !Os.has(r)) && Ye(t, "has", r), n;
  }
  ownKeys(t) {
    return Ye(
      t,
      "iterate",
      Q(t) ? "length" : mr
    ), Reflect.ownKeys(t);
  }
}
class la extends Ns {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const aa = /* @__PURE__ */ new Ps(), ca = /* @__PURE__ */ new la(), ua = /* @__PURE__ */ new Ps(!0);
const Ri = (e) => e, bn = (e) => Reflect.getPrototypeOf(e);
function fa(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ ge(i), s = nr(o), l = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, v = i[e](...n), b = r ? Ri : t ? Lr : Ot;
    return !t && Ye(
      o,
      "iterate",
      f ? wi : mr
    ), Je(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: E, done: P } = v.next();
          return P ? { value: E, done: P } : {
            value: l ? [b(E[0]), b(E[1])] : b(E),
            done: P
          };
        }
      }
    );
  };
}
function yn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function da(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), l = /* @__PURE__ */ ge(i);
      e || (Ht(i, l) && Ye(s, "get", i), Ye(s, "get", l));
      const { has: f } = bn(s), v = t ? Ri : e ? Lr : Ot;
      if (f.call(s, i))
        return v(o.get(i));
      if (f.call(s, l))
        return v(o.get(l));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ye(/* @__PURE__ */ ge(i), "iterate", mr), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ ge(o), l = /* @__PURE__ */ ge(i);
      return e || (Ht(i, l) && Ye(s, "has", i), Ye(s, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const s = this, l = s.__v_raw, f = /* @__PURE__ */ ge(l), v = t ? Ri : e ? Lr : Ot;
      return !e && Ye(f, "iterate", mr), l.forEach((b, E) => i.call(o, v(b), v(E), s));
    }
  };
  return Je(
    r,
    e ? {
      add: yn("add"),
      set: yn("set"),
      delete: yn("delete"),
      clear: yn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ ge(this), s = bn(o), l = /* @__PURE__ */ ge(i), f = !t && !/* @__PURE__ */ Ct(i) && !/* @__PURE__ */ Xt(i) ? l : i;
        return s.has.call(o, f) || Ht(i, f) && s.has.call(o, i) || Ht(l, f) && s.has.call(o, l) || (o.add(f), Wt(o, "add", f, f)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ Ct(o) && !/* @__PURE__ */ Xt(o) && (o = /* @__PURE__ */ ge(o));
        const s = /* @__PURE__ */ ge(this), { has: l, get: f } = bn(s);
        let v = l.call(s, i);
        v || (i = /* @__PURE__ */ ge(i), v = l.call(s, i));
        const b = f.call(s, i);
        return s.set(i, o), v ? Ht(o, b) && Wt(s, "set", i, o) : Wt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ ge(this), { has: s, get: l } = bn(o);
        let f = s.call(o, i);
        f || (i = /* @__PURE__ */ ge(i), f = s.call(o, i)), l && l.call(o, i);
        const v = o.delete(i);
        return f && Wt(o, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ ge(this), o = i.size !== 0, s = i.clear();
        return o && Wt(
          i,
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
  ].forEach((i) => {
    r[i] = fa(i, e, t);
  }), r;
}
function Wi(e, t) {
  const r = da(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    _e(r, i) && i in n ? r : n,
    i,
    o
  );
}
const pa = {
  get: /* @__PURE__ */ Wi(!1, !1)
}, ha = {
  get: /* @__PURE__ */ Wi(!1, !0)
}, ma = {
  get: /* @__PURE__ */ Wi(!0, !1)
};
const ks = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap();
function ya(e) {
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
function pr(e) {
  return /* @__PURE__ */ Xt(e) ? e : qi(
    e,
    !1,
    aa,
    pa,
    ks
  );
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  return qi(
    e,
    !1,
    ua,
    ha,
    Ms
  );
}
// @__NO_SIDE_EFFECTS__
function Oi(e) {
  return qi(
    e,
    !0,
    ca,
    ma,
    Ls
  );
}
function qi(e, t, r, n, i) {
  if (!Te(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const s = ya(Vl(e));
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? n : r
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return /* @__PURE__ */ Xt(e) ? /* @__PURE__ */ br(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ge(t) : e;
}
function _a(e) {
  return !_e(e, "__v_skip") && Object.isExtensible(e) && ys(e, "__v_skip", !0), e;
}
const Ot = (e) => Te(e) ? /* @__PURE__ */ pr(e) : e, Lr = (e) => Te(e) ? /* @__PURE__ */ Oi(e) : e;
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return Ea(e, !1);
}
function Ea(e, t) {
  return /* @__PURE__ */ Xe(e) ? e : new Ta(e, t);
}
class Ta {
  constructor(t, r) {
    this.dep = new zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ ge(t), this._value = r ? t : Ot(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ct(t) || /* @__PURE__ */ Xt(t);
    t = n ? t : /* @__PURE__ */ ge(t), Ht(t, r) && (this._rawValue = t, this._value = n ? t : Ot(t), this.dep.trigger());
  }
}
function y(e) {
  return /* @__PURE__ */ Xe(e) ? e.value : e;
}
const Sa = {
  get: (e, t, r) => t === "__v_raw" ? e : y(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Xe(i) && !/* @__PURE__ */ Xe(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Is(e) {
  return /* @__PURE__ */ br(e) ? e : new Proxy(e, Sa);
}
class Ca {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new zi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Qr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    xe !== this)
      return Ss(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return As(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function xa(e, t, r = !1) {
  let n, i;
  return le(e) ? n = e : (n = e.get, i = e.set), new Ca(n, i, r);
}
const gn = {}, wn = /* @__PURE__ */ new WeakMap();
let ur;
function Aa(e, t = !1, r = ur) {
  if (r) {
    let n = wn.get(r);
    n || wn.set(r, n = []), n.push(e);
  }
}
function wa(e, t, r = Se) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: l, call: f } = r, v = (V) => i ? V : /* @__PURE__ */ Ct(V) || i === !1 || i === 0 ? qt(V, 1) : qt(V);
  let b, E, P, j, re = !1, q = !1;
  if (/* @__PURE__ */ Xe(e) ? (E = () => e.value, re = /* @__PURE__ */ Ct(e)) : /* @__PURE__ */ br(e) ? (E = () => v(e), re = !0) : Q(e) ? (q = !0, re = e.some((V) => /* @__PURE__ */ br(V) || /* @__PURE__ */ Ct(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ Xe(V))
      return V.value;
    if (/* @__PURE__ */ br(V))
      return v(V);
    if (le(V))
      return f ? f(V, 2) : V();
  })) : le(e) ? t ? E = f ? () => f(e, 2) : e : E = () => {
    if (P) {
      Gt();
      try {
        P();
      } finally {
        Yt();
      }
    }
    const V = ur;
    ur = b;
    try {
      return f ? f(e, 3, [j]) : e(j);
    } finally {
      ur = V;
    }
  } : E = $t, t && i) {
    const V = E, ce = i === !0 ? 1 / 0 : i;
    E = () => qt(V(), ce);
  }
  const oe = ea(), ne = () => {
    b.stop(), oe && oe.active && Fi(oe.effects, b);
  };
  if (o && t) {
    const V = t;
    t = (...ce) => {
      const Pe = V(...ce);
      return ne(), Pe;
    };
  }
  let z = q ? new Array(e.length).fill(gn) : gn;
  const D = (V) => {
    if (!(!(b.flags & 1) || !b.dirty && !V))
      if (t) {
        const ce = b.run();
        if (V || i || re || (q ? ce.some((Pe, Re) => Ht(Pe, z[Re])) : Ht(ce, z))) {
          P && P();
          const Pe = ur;
          ur = b;
          try {
            const Re = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              z === gn ? void 0 : q && z[0] === gn ? [] : z,
              j
            ];
            z = ce, f ? f(t, 3, Re) : (
              // @ts-expect-error
              t(...Re)
            );
          } finally {
            ur = Pe;
          }
        }
      } else
        b.run();
  };
  return l && l(D), b = new Es(E), b.scheduler = s ? () => s(D, !1) : D, j = (V) => Aa(V, !1, b), P = b.onStop = () => {
    const V = wn.get(b);
    if (V) {
      if (f)
        f(V, 4);
      else
        for (const ce of V) ce();
      wn.delete(b);
    }
  }, t ? n ? D(!0) : z = b.run() : s ? s(D.bind(null, !0), !0) : b.run(), ne.pause = b.pause.bind(b), ne.resume = b.resume.bind(b), ne.stop = ne, ne;
}
function qt(e, t = 1 / 0, r) {
  if (t <= 0 || !Te(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Xe(e))
    qt(e.value, t, r);
  else if (Q(e))
    for (let n = 0; n < e.length; n++)
      qt(e[n], t, r);
  else if (gr(e) || nr(e))
    e.forEach((n) => {
      qt(n, t, r);
    });
  else if (ms(e)) {
    for (const n in e)
      qt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && qt(e[n], t, r);
  }
  return e;
}
function ln(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Vn(i, t, r);
  }
}
function Nt(e, t, r, n) {
  if (le(e)) {
    const i = ln(e, t, r, n);
    return i && ps(i) && i.catch((o) => {
      Vn(o, t, r);
    }), i;
  }
  if (Q(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Nt(e[o], t, r, n));
    return i;
  }
}
function Vn(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Se;
  if (t) {
    let l = t.parent;
    const f = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; l; ) {
      const b = l.ec;
      if (b) {
        for (let E = 0; E < b.length; E++)
          if (b[E](e, f, v) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Gt(), ln(o, null, 10, [
        e,
        f,
        v
      ]), Yt();
      return;
    }
  }
  Ra(e, r, i, n, s);
}
function Ra(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const it = [];
let Dt = -1;
const Pr = [];
let rr = null, wr = 0;
const Ds = /* @__PURE__ */ Promise.resolve();
let Rn = null;
function Us(e) {
  const t = Rn || Ds;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oa(e) {
  let t = Dt + 1, r = it.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = it[n], o = tn(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Gi(e) {
  if (!(e.flags & 1)) {
    const t = tn(e), r = it[it.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= tn(r) ? it.push(e) : it.splice(Oa(t), 0, e), e.flags |= 1, Fs();
  }
}
function Fs() {
  Rn || (Rn = Ds.then($s));
}
function Na(e) {
  if (!Q(e))
    rr && e.id === -1 ? rr.splice(wr + 1, 0, e) : e.flags & 1 || (Pr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Pr.push(e[t]);
  Fs();
}
function vo(e, t, r = Dt + 1) {
  for (; r < it.length; r++) {
    const n = it[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      it.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Hs(e) {
  if (Pr.length) {
    const t = [...new Set(Pr)].sort(
      (r, n) => tn(r) - tn(n)
    );
    if (Pr.length = 0, rr) {
      for (let r = 0; r < t.length; r++)
        rr.push(t[r]);
      return;
    }
    for (rr = t, wr = 0; wr < rr.length; wr++) {
      const r = rr[wr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    rr = null, wr = 0;
  }
}
const tn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $s(e) {
  try {
    for (Dt = 0; Dt < it.length; Dt++) {
      const t = it[Dt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ln(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Dt < it.length; Dt++) {
      const t = it[Dt];
      t && (t.flags &= -2);
    }
    Dt = -1, it.length = 0, Hs(), Rn = null, (it.length || Pr.length) && $s();
  }
}
let St = null, js = null;
function On(e) {
  const t = St;
  return St = e, js = e && e.type.__scopeId || null, t;
}
function Pa(e, t = St, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Po(-1);
    const o = On(t), s = yr.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let f = yr.length; f > s; f--) pl();
      On(o), n._d && Po(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ze(e, t) {
  if (St === null)
    return e;
  const r = Kn(St), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, l, f = Se] = t[i];
    o && (le(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && qt(s), n.push({
      dir: o,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: f
    }));
  }
  return e;
}
function lr(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    o && (l.oldValue = o[s].value);
    let f = l.dir[n];
    f && (Gt(), Nt(f, r, 8, [
      e.el,
      l,
      e,
      t
    ]), Yt());
  }
}
function ka(e, t) {
  if (ot) {
    let r = ot.provides;
    const n = ot.parent && ot.parent.provides;
    n === r && (r = ot.provides = Object.create(n)), r[e] = t;
  }
}
function Cn(e, t, r = !1) {
  const n = Rc();
  if (n || kr) {
    let i = kr ? kr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && le(t) ? t.call(n && n.proxy) : t;
  }
}
const Ma = /* @__PURE__ */ Symbol.for("v-scx"), La = () => Cn(Ma);
function li(e, t, r) {
  return Vs(e, t, r);
}
function Vs(e, t, r = Se) {
  const { immediate: n, deep: i, flush: o, once: s } = r, l = Je({}, r), f = t && n || !t && o !== "post";
  let v;
  if (on) {
    if (o === "sync") {
      const j = La();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!f) {
      const j = () => {
      };
      return j.stop = $t, j.resume = $t, j.pause = $t, j;
    }
  }
  const b = ot;
  l.call = (j, re, q) => Nt(j, b, re, q);
  let E = !1;
  o === "post" ? l.scheduler = (j) => {
    ut(j, b && b.suspense);
  } : o !== "sync" && (E = !0, l.scheduler = (j, re) => {
    re ? j() : Gi(j);
  }), l.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, b && (j.id = b.uid, j.i = b));
  };
  const P = wa(e, t, l);
  return on && (v ? v.push(P) : f && P()), P;
}
function Ia(e, t, r) {
  const n = this.proxy, i = Me(e) ? e.includes(".") ? Bs(n, e) : () => n[e] : e.bind(n, n);
  let o;
  le(t) ? o = t : (o = t.handler, r = t);
  const s = an(this), l = Vs(i, o.bind(n), r);
  return s(), l;
}
function Bs(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const Da = /* @__PURE__ */ Symbol("_vte"), Bn = (e) => e.__isTeleport, ai = /* @__PURE__ */ Symbol("_leaveCb");
function Ua(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== Jt) {
        t = r;
        break;
      }
  }
  return t;
}
function zs(e) {
  if (!Xi(e))
    return Bn(e.type) && e.children ? Ua(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && le(r.default))
      return r.default();
  }
}
function Yi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    Yi(
      Bn(r.type) && zs(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ws(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Eo(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Nn = /* @__PURE__ */ new WeakMap();
function Xr(e, t, r, n, i = !1) {
  if (Q(e)) {
    e.forEach(
      (q, oe) => Xr(
        q,
        t && (Q(t) ? t[oe] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Jr(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Xr(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Kn(n.component) : n.el, s = i ? null : o, { i: l, r: f } = e, v = t && t.r, b = l.refs === Se ? l.refs = {} : l.refs, E = l.setupState, P = /* @__PURE__ */ ge(E), j = E === Se ? ds : (q) => Eo(b, q) ? !1 : _e(P, q), re = (q, oe) => !(oe && Eo(b, oe));
  if (v != null && v !== f) {
    if (To(t), Me(v))
      b[v] = null, j(v) && (E[v] = null);
    else if (/* @__PURE__ */ Xe(v)) {
      const q = t;
      re(v, q.k) && (v.value = null), q.k && (b[q.k] = null);
    }
  }
  if (le(f))
    ln(f, l, 12, [s, b]);
  else {
    const q = Me(f), oe = /* @__PURE__ */ Xe(f);
    if (q || oe) {
      const ne = () => {
        if (e.f) {
          const z = q ? j(f) ? E[f] : b[f] : re() || !e.k ? f.value : b[e.k];
          if (i)
            Q(z) && Fi(z, o);
          else if (Q(z))
            z.includes(o) || z.push(o);
          else if (q)
            b[f] = [o], j(f) && (E[f] = b[f]);
          else {
            const D = [o];
            re(f, e.k) && (f.value = D), e.k && (b[e.k] = D);
          }
        } else q ? (b[f] = s, j(f) && (E[f] = s)) : oe && (re(f, e.k) && (f.value = s), e.k && (b[e.k] = s));
      };
      if (s) {
        const z = () => {
          ne(), Nn.delete(e);
        };
        z.id = -1, Nn.set(e, z), ut(z, r);
      } else
        To(e), ne();
    }
  }
}
function To(e) {
  const t = Nn.get(e);
  t && (t.flags |= 8, Nn.delete(e));
}
$n().requestIdleCallback;
$n().cancelIdleCallback;
const Jr = (e) => !!e.type.__asyncLoader, Xi = (e) => e.type.__isKeepAlive;
function Fa(e, t) {
  qs(e, "a", t);
}
function Ha(e, t) {
  qs(e, "da", t);
}
function qs(e, t, r = ot) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (zn(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      Xi(i.parent.vnode) && $a(n, t, r, i), i = i.parent;
  }
}
function $a(e, t, r, n) {
  const i = zn(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  Ys(() => {
    Fi(n[t], i);
  }, r);
}
function zn(e, t, r = ot, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Gt();
      const l = an(r), f = Nt(t, r, e, s);
      return l(), Yt(), f;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Zt = (e) => (t, r = ot) => {
  (!on || e === "sp") && zn(e, (...n) => t(...n), r);
}, ja = Zt("bm"), Ks = Zt("m"), Va = Zt(
  "bu"
), Ba = Zt("u"), Gs = Zt(
  "bum"
), Ys = Zt("um"), za = Zt(
  "sp"
), Wa = Zt("rtg"), qa = Zt("rtc");
function Ka(e, t = ot) {
  zn("ec", e, t);
}
const Ga = /* @__PURE__ */ Symbol.for("v-ndc");
function Ee(e, t, r, n) {
  let i;
  const o = r, s = Q(e);
  if (s || Me(e)) {
    const l = s && /* @__PURE__ */ br(e);
    let f = !1, v = !1;
    l && (f = !/* @__PURE__ */ Ct(e), v = /* @__PURE__ */ Xt(e), e = jn(e)), i = new Array(e.length);
    for (let b = 0, E = e.length; b < E; b++)
      i[b] = t(
        f ? v ? Lr(Ot(e[b])) : Ot(e[b]) : e[b],
        b,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, o);
  } else if (Te(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, f) => t(l, f, void 0, o)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let f = 0, v = l.length; f < v; f++) {
        const b = l[f];
        i[f] = t(e[b], b, f, o);
      }
    }
  else
    i = [];
  return i;
}
const Ni = (e) => e ? yl(e) ? Kn(e) : Ni(e.parent) : null, Zr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Je(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ni(e.parent),
    $root: (e) => Ni(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Js(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Gi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Us.bind(e.proxy)),
    $watch: (e) => Ia.bind(e)
  })
), ci = (e, t) => e !== Se && !e.__isScriptSetup && _e(e, t), Ya = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: s, type: l, appContext: f } = e;
    if (t[0] !== "$") {
      const P = s[t];
      if (P !== void 0)
        switch (P) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return o[t];
        }
      else {
        if (ci(n, t))
          return s[t] = 1, n[t];
        if (i !== Se && _e(i, t))
          return s[t] = 2, i[t];
        if (_e(o, t))
          return s[t] = 3, o[t];
        if (r !== Se && _e(r, t))
          return s[t] = 4, r[t];
        Pi && (s[t] = 0);
      }
    }
    const v = Zr[t];
    let b, E;
    if (v)
      return t === "$attrs" && Ye(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (b = l.__cssModules) && (b = b[t])
    )
      return b;
    if (r !== Se && _e(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      E = f.config.globalProperties, _e(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return ci(i, t) ? (i[t] = r, !0) : n !== Se && _e(n, t) ? (n[t] = r, !0) : _e(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, l) {
    let f;
    return !!(r[l] || e !== Se && l[0] !== "$" && _e(e, l) || ci(t, l) || _e(o, l) || _e(n, l) || _e(Zr, l) || _e(i.config.globalProperties, l) || (f = s.__cssModules) && f[l]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : _e(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function So(e) {
  return Q(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Pi = !0;
function Xa(e) {
  const t = Js(e), r = e.proxy, n = e.ctx;
  Pi = !1, t.beforeCreate && Co(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: l,
    provide: f,
    inject: v,
    // lifecycle
    created: b,
    beforeMount: E,
    mounted: P,
    beforeUpdate: j,
    updated: re,
    activated: q,
    deactivated: oe,
    beforeDestroy: ne,
    beforeUnmount: z,
    destroyed: D,
    unmounted: V,
    render: ce,
    renderTracked: Pe,
    renderTriggered: Re,
    errorCaptured: Ve,
    serverPrefetch: ve,
    // public API
    expose: Ie,
    inheritAttrs: Ze,
    // assets
    components: st,
    directives: qe,
    filters: vt
  } = t;
  if (v && Ja(v, n, null), s)
    for (const ue in s) {
      const se = s[ue];
      le(se) && (n[ue] = se.bind(r));
    }
  if (i) {
    const ue = i.call(r, r);
    Te(ue) && (e.data = /* @__PURE__ */ pr(ue));
  }
  if (Pi = !0, o)
    for (const ue in o) {
      const se = o[ue], De = le(se) ? se.bind(r, r) : le(se.get) ? se.get.bind(r, r) : $t, dt = !le(se) && le(se.set) ? se.set.bind(r) : $t, Ue = te({
        get: De,
        set: dt
      });
      Object.defineProperty(n, ue, {
        enumerable: !0,
        configurable: !0,
        get: () => Ue.value,
        set: ($e) => Ue.value = $e
      });
    }
  if (l)
    for (const ue in l)
      Xs(l[ue], n, r, ue);
  if (f) {
    const ue = le(f) ? f.call(r) : f;
    Reflect.ownKeys(ue).forEach((se) => {
      ka(se, ue[se]);
    });
  }
  b && Co(b, e, "c");
  function we(ue, se) {
    Q(se) ? se.forEach((De) => ue(De.bind(r))) : se && ue(se.bind(r));
  }
  if (we(ja, E), we(Ks, P), we(Va, j), we(Ba, re), we(Fa, q), we(Ha, oe), we(Ka, Ve), we(qa, Pe), we(Wa, Re), we(Gs, z), we(Ys, V), we(za, ve), Q(Ie))
    if (Ie.length) {
      const ue = e.exposed || (e.exposed = {});
      Ie.forEach((se) => {
        Object.defineProperty(ue, se, {
          get: () => r[se],
          set: (De) => r[se] = De,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === $t && (e.render = ce), Ze != null && (e.inheritAttrs = Ze), st && (e.components = st), qe && (e.directives = qe), ve && Ws(e);
}
function Ja(e, t, r = $t) {
  Q(e) && (e = ki(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Te(i) ? "default" in i ? o = Cn(
      i.from || n,
      i.default,
      !0
    ) : o = Cn(i.from || n) : o = Cn(i), /* @__PURE__ */ Xe(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function Co(e, t, r) {
  Nt(
    Q(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Xs(e, t, r, n) {
  let i = n.includes(".") ? Bs(r, n) : () => r[n];
  if (Me(e)) {
    const o = t[e];
    le(o) && li(i, o);
  } else if (le(e))
    li(i, e.bind(r));
  else if (Te(e))
    if (Q(e))
      e.forEach((o) => Xs(o, t, r, n));
    else {
      const o = le(e.handler) ? e.handler.bind(r) : t[e.handler];
      le(o) && li(i, o, e);
    }
}
function Js(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = o.get(t);
  let f;
  return l ? f = l : !i.length && !r && !n ? f = t : (f = {}, i.length && i.forEach(
    (v) => Pn(f, v, s, !0)
  ), Pn(f, t, s)), Te(t) && o.set(t, f), f;
}
function Pn(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Pn(e, o, r, !0), i && i.forEach(
    (s) => Pn(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const l = Za[s] || r && r[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Za = {
  data: xo,
  props: Ao,
  emits: Ao,
  // objects
  methods: zr,
  computed: zr,
  // lifecycle
  beforeCreate: nt,
  created: nt,
  beforeMount: nt,
  mounted: nt,
  beforeUpdate: nt,
  updated: nt,
  beforeDestroy: nt,
  beforeUnmount: nt,
  destroyed: nt,
  unmounted: nt,
  activated: nt,
  deactivated: nt,
  errorCaptured: nt,
  serverPrefetch: nt,
  // assets
  components: zr,
  directives: zr,
  // watch
  watch: ec,
  // provide / inject
  provide: xo,
  inject: Qa
};
function xo(e, t) {
  return t ? e ? function() {
    return Je(
      le(e) ? e.call(this, this) : e,
      le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qa(e, t) {
  return zr(ki(e), ki(t));
}
function ki(e) {
  if (Q(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function nt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zr(e, t) {
  return e ? Je(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ao(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Je(
    /* @__PURE__ */ Object.create(null),
    So(e),
    So(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = Je(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = nt(e[n], t[n]);
  return r;
}
function Zs() {
  return {
    app: null,
    config: {
      isNativeTag: ds,
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
let tc = 0;
function rc(e, t) {
  return function(n, i = null) {
    le(n) || (n = Je({}, n)), i != null && !Te(i) && (i = null);
    const o = Zs(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const v = o.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Lc,
      get config() {
        return o.config;
      },
      set config(b) {
      },
      use(b, ...E) {
        return s.has(b) || (b && le(b.install) ? (s.add(b), b.install(v, ...E)) : le(b) && (s.add(b), b(v, ...E))), v;
      },
      mixin(b) {
        return o.mixins.includes(b) || o.mixins.push(b), v;
      },
      component(b, E) {
        return E ? (o.components[b] = E, v) : o.components[b];
      },
      directive(b, E) {
        return E ? (o.directives[b] = E, v) : o.directives[b];
      },
      mount(b, E, P) {
        if (!f) {
          const j = v._ceVNode || Kt(n, i);
          return j.appContext = o, P === !0 ? P = "svg" : P === !1 && (P = void 0), e(j, b, P), f = !0, v._container = b, b.__vue_app__ = v, Kn(j.component);
        }
      },
      onUnmount(b) {
        l.push(b);
      },
      unmount() {
        f && (Nt(
          l,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(b, E) {
        return o.provides[b] = E, v;
      },
      runWithContext(b) {
        const E = kr;
        kr = v;
        try {
          return b();
        } finally {
          kr = E;
        }
      }
    };
    return v;
  };
}
let kr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${wt(t)}Modifiers`] || e[`${_r(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Se;
  let i = r;
  const o = t.startsWith("update:"), s = o && nc(n, t.slice(7));
  s && (s.trim && (i = r.map((b) => Me(b) ? b.trim() : b)), s.number && (i = i.map(Hn)));
  let l, f = n[l = ri(t)] || // also try camelCase event handler (#2249)
  n[l = ri(wt(t))];
  !f && o && (f = n[l = ri(_r(t))]), f && Nt(
    f,
    e,
    6,
    i
  );
  const v = n[l + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Nt(
      v,
      e,
      6,
      i
    );
  }
}
const oc = /* @__PURE__ */ new WeakMap();
function Qs(e, t, r = !1) {
  const n = r ? oc : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, l = !1;
  if (!le(e)) {
    const f = (v) => {
      const b = Qs(v, t, !0);
      b && (l = !0, Je(s, b));
    };
    !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !l ? (Te(e) && n.set(e, null), null) : (Q(o) ? o.forEach((f) => s[f] = null) : Je(s, o), Te(e) && n.set(e, s), s);
}
function Wn(e, t) {
  return !e || !Dn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, _r(t)) || _e(e, t));
}
function wo(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: l,
    emit: f,
    render: v,
    renderCache: b,
    props: E,
    data: P,
    setupState: j,
    ctx: re,
    inheritAttrs: q
  } = e, oe = On(e);
  let ne, z;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, ce = V;
      ne = Ft(
        v.call(
          ce,
          V,
          b,
          E,
          j,
          P,
          re
        )
      ), z = l;
    } else {
      const V = t;
      ne = Ft(
        V.length > 1 ? V(
          E,
          { attrs: l, slots: s, emit: f }
        ) : V(
          E,
          null
        )
      ), z = t.props ? l : sc(l);
    }
  } catch (V) {
    yr.length = 0, Vn(V, e, 1), ne = Kt(Jt);
  }
  let D = ne;
  if (z && q !== !1) {
    const V = Object.keys(z), { shapeFlag: ce } = D;
    V.length && ce & 7 && (o && V.some(Un) && (z = lc(
      z,
      o
    )), D = Ir(D, z, !1, !0));
  }
  if (r.dirs && (D = Ir(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = Bn(D.type) && zs(D) || D;
    Yi(V, r.transition);
  }
  return ne = D, On(oe), ne;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Dn(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!Un(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function ac(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: l, patchFlag: f } = t, v = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? Ro(n, s, v) : !!s;
    if (f & 8) {
      const b = t.dynamicProps;
      for (let E = 0; E < b.length; E++) {
        const P = b[E];
        if (el(s, n, P) && !Wn(v, P))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : n === s ? !1 : n ? s ? Ro(n, s, v) : !0 : !!s;
  return !1;
}
function Ro(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (el(t, e, o) && !Wn(r, o))
      return !0;
  }
  return !1;
}
function el(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Te(n) && Te(i) ? !ir(n, i) : n !== i;
}
function cc({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const tl = {}, rl = () => Object.create(tl), nl = (e) => Object.getPrototypeOf(e) === tl;
function uc(e, t, r, n = !1) {
  const i = {}, o = rl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), il(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ ga(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function fc(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, l = /* @__PURE__ */ ge(i), [f] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const b = e.vnode.dynamicProps;
      for (let E = 0; E < b.length; E++) {
        let P = b[E];
        if (Wn(e.emitsOptions, P))
          continue;
        const j = t[P];
        if (f)
          if (_e(o, P))
            j !== o[P] && (o[P] = j, v = !0);
          else {
            const re = wt(P);
            i[re] = Mi(
              f,
              l,
              re,
              j,
              e,
              !1
            );
          }
        else
          j !== o[P] && (o[P] = j, v = !0);
      }
    }
  } else {
    il(e, t, i, o) && (v = !0);
    let b;
    for (const E in l)
      (!t || // for camelCase
      !_e(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((b = _r(E)) === E || !_e(t, b))) && (f ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[b] !== void 0) && (i[E] = Mi(
        f,
        l,
        E,
        void 0,
        e,
        !0
      )) : delete i[E]);
    if (o !== l)
      for (const E in o)
        (!t || !_e(t, E)) && (delete o[E], v = !0);
  }
  v && Wt(e.attrs, "set", "");
}
function il(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let f in t) {
      if (Kr(f))
        continue;
      const v = t[f];
      let b;
      i && _e(i, b = wt(f)) ? !o || !o.includes(b) ? r[b] = v : (l || (l = {}))[b] = v : Wn(e.emitsOptions, f) || (!(f in n) || v !== n[f]) && (n[f] = v, s = !0);
    }
  if (o) {
    const f = /* @__PURE__ */ ge(r), v = l || Se;
    for (let b = 0; b < o.length; b++) {
      const E = o[b];
      r[E] = Mi(
        i,
        f,
        E,
        v[E],
        e,
        !_e(v, E)
      );
    }
  }
  return s;
}
function Mi(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const l = _e(s, "default");
    if (l && n === void 0) {
      const f = s.default;
      if (s.type !== Function && !s.skipFactory && le(f)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const b = an(i);
          n = v[r] = f.call(
            null,
            t
          ), b();
        }
      } else
        n = f;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !l ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === _r(r)) && (n = !0));
  }
  return n;
}
const dc = /* @__PURE__ */ new WeakMap();
function ol(e, t, r = !1) {
  const n = r ? dc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, l = [];
  let f = !1;
  if (!le(e)) {
    const b = (E) => {
      f = !0;
      const [P, j] = ol(E, t, !0);
      Je(s, P), j && l.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(b), e.extends && b(e.extends), e.mixins && e.mixins.forEach(b);
  }
  if (!o && !f)
    return Te(e) && n.set(e, Or), Or;
  if (Q(o))
    for (let b = 0; b < o.length; b++) {
      const E = wt(o[b]);
      Oo(E) && (s[E] = Se);
    }
  else if (o)
    for (const b in o) {
      const E = wt(b);
      if (Oo(E)) {
        const P = o[b], j = s[E] = Q(P) || le(P) ? { type: P } : Je({}, P), re = j.type;
        let q = !1, oe = !0;
        if (Q(re))
          for (let ne = 0; ne < re.length; ++ne) {
            const z = re[ne], D = le(z) && z.name;
            if (D === "Boolean") {
              q = !0;
              break;
            } else D === "String" && (oe = !1);
          }
        else
          q = le(re) && re.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = q, j[
          1
          /* shouldCastTrue */
        ] = oe, (q || _e(j, "default")) && l.push(E);
      }
    }
  const v = [s, l];
  return Te(e) && n.set(e, v), v;
}
function Oo(e) {
  return e[0] !== "$" && !Kr(e);
}
const Ji = (e) => e === "_" || e === "_ctx" || e === "$stable", Zi = (e) => Q(e) ? e.map(Ft) : [Ft(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = Pa((...i) => Zi(t(...i)), r);
  return n._c = !1, n;
}, sl = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Ji(i)) continue;
    const o = e[i];
    if (le(o))
      t[i] = pc(i, o, n);
    else if (o != null) {
      const s = Zi(o);
      t[i] = () => s;
    }
  }
}, ll = (e, t) => {
  const r = Zi(t);
  e.slots.default = () => r;
}, al = (e, t, r) => {
  for (const n in t)
    (r || !Ji(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = rl();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (al(n, t, r), r && ys(n, "_", i, !0)) : sl(t, n);
  } else t && ll(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Se;
  if (n.shapeFlag & 32) {
    const l = t._;
    l ? r && l === 1 ? o = !1 : al(i, t, r) : (o = !t.$stable, sl(t, i)), s = t;
  } else t && (ll(e, t), s = { default: 1 });
  if (o)
    for (const l in i)
      !Ji(l) && s[l] == null && delete i[l];
}, ut = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = $n();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: l,
    createComment: f,
    setText: v,
    setElementText: b,
    parentNode: E,
    nextSibling: P,
    setScopeId: j = $t,
    insertStaticContent: re
  } = e, q = (d, m, _, x = null, T = null, C = null, I = void 0, M = null, L = !!m.dynamicChildren) => {
    if (d === m)
      return;
    d && !Hr(d, m) && (x = Et(d), $e(d, T, C, !0), d = null), m.patchFlag === -2 && (L = !1, m.dynamicChildren = null);
    const { type: S, ref: K, shapeFlag: H } = m;
    switch (S) {
      case qn:
        oe(d, m, _, x);
        break;
      case Jt:
        ne(d, m, _, x);
        break;
      case fi:
        d == null && z(m, _, x, I);
        break;
      case ae:
        st(
          d,
          m,
          _,
          x,
          T,
          C,
          I,
          M,
          L
        );
        break;
      default:
        H & 1 ? ce(
          d,
          m,
          _,
          x,
          T,
          C,
          I,
          M,
          L
        ) : H & 6 ? qe(
          d,
          m,
          _,
          x,
          T,
          C,
          I,
          M,
          L
        ) : (H & 64 || H & 128) && S.process(
          d,
          m,
          _,
          x,
          T,
          C,
          I,
          M,
          L,
          Qe
        );
    }
    K != null && T ? Xr(K, d && d.ref, C, m || d, !m) : K == null && d && d.ref != null && Xr(d.ref, null, C, d, !0);
  }, oe = (d, m, _, x) => {
    if (d == null)
      n(
        m.el = l(m.children),
        _,
        x
      );
    else {
      const T = m.el = d.el;
      m.children !== d.children && v(T, m.children);
    }
  }, ne = (d, m, _, x) => {
    d == null ? n(
      m.el = f(m.children || ""),
      _,
      x
    ) : m.el = d.el;
  }, z = (d, m, _, x) => {
    [d.el, d.anchor] = re(
      d.children,
      m,
      _,
      x,
      d.el,
      d.anchor
    );
  }, D = ({ el: d, anchor: m }, _, x) => {
    let T;
    for (; d && d !== m; )
      T = P(d), n(d, _, x), d = T;
    n(m, _, x);
  }, V = ({ el: d, anchor: m }) => {
    let _;
    for (; d && d !== m; )
      _ = P(d), i(d), d = _;
    i(m);
  }, ce = (d, m, _, x, T, C, I, M, L) => {
    if (m.type === "svg" ? I = "svg" : m.type === "math" && (I = "mathml"), d == null)
      Pe(
        m,
        _,
        x,
        T,
        C,
        I,
        M,
        L
      );
    else {
      const S = d.el && d.el._isVueCE ? d.el : null;
      try {
        S && S._beginPatch(), ve(
          d,
          m,
          T,
          C,
          I,
          M,
          L
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, Pe = (d, m, _, x, T, C, I, M) => {
    let L, S;
    const { props: K, shapeFlag: H, transition: W, dirs: X } = d;
    if (L = d.el = s(
      d.type,
      C,
      K && K.is,
      K
    ), H & 8 ? b(L, d.children) : H & 16 && Ve(
      d.children,
      L,
      null,
      x,
      T,
      ui(d, C),
      I,
      M
    ), X && lr(d, null, x, "created"), Re(L, d, d.scopeId, I, x), K) {
      for (const N in K)
        N !== "value" && !Kr(N) && o(L, N, null, K[N], C, x);
      "value" in K && o(L, "value", null, K.value, C), (S = K.onVnodeBeforeMount) && It(S, x, d);
    }
    X && lr(d, null, x, "beforeMount");
    const Z = gc(T, W);
    Z && W.beforeEnter(L), n(L, m, _), ((S = K && K.onVnodeMounted) || Z || X) && ut(() => {
      S && It(S, x, d), Z && W.enter(L), X && lr(d, null, x, "mounted");
    }, T);
  }, Re = (d, m, _, x, T) => {
    if (_ && j(d, _), x)
      for (let C = 0; C < x.length; C++)
        j(d, x[C]);
    if (T) {
      let C = T.subTree;
      if (m === C || dl(C.type) && (C.ssContent === m || C.ssFallback === m)) {
        const I = T.vnode;
        Re(
          d,
          I,
          I.scopeId,
          I.slotScopeIds,
          T.parent
        );
      }
    }
  }, Ve = (d, m, _, x, T, C, I, M, L = 0) => {
    for (let S = L; S < d.length; S++) {
      const K = d[S] = M ? zt(d[S]) : Ft(d[S]);
      q(
        null,
        K,
        m,
        _,
        x,
        T,
        C,
        I,
        M
      );
    }
  }, ve = (d, m, _, x, T, C, I) => {
    const M = m.el = d.el;
    let { patchFlag: L, dynamicChildren: S, dirs: K } = m;
    L |= d.patchFlag & 16;
    const H = d.props || Se, W = m.props || Se;
    let X;
    if (_ && ar(_, !1), (X = W.onVnodeBeforeUpdate) && It(X, _, m, d), K && lr(m, d, _, "beforeUpdate"), _ && ar(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    S && (!d.dynamicChildren || d.dynamicChildren.length !== S.length) && (L = 0, I = !1, S = null), (H.innerHTML && W.innerHTML == null || H.textContent && W.textContent == null) && b(M, ""), S ? Ie(
      d.dynamicChildren,
      S,
      M,
      _,
      x,
      ui(m, T),
      C
    ) : I || se(
      d,
      m,
      M,
      null,
      _,
      x,
      ui(m, T),
      C,
      !1
    ), L > 0) {
      if (L & 16)
        Ze(M, H, W, _, T);
      else if (L & 2 && H.class !== W.class && o(M, "class", null, W.class, T), L & 4 && o(M, "style", H.style, W.style, T), L & 8) {
        const Z = m.dynamicProps;
        for (let N = 0; N < Z.length; N++) {
          const R = Z[N], $ = H[R], J = W[R];
          (J !== $ || R === "value") && o(M, R, $, J, T, _);
        }
      }
      L & 1 && d.children !== m.children && b(M, m.children);
    } else !I && S == null && Ze(M, H, W, _, T);
    ((X = W.onVnodeUpdated) || K) && ut(() => {
      X && It(X, _, m, d), K && lr(m, d, _, "updated");
    }, x);
  }, Ie = (d, m, _, x, T, C, I) => {
    for (let M = 0; M < m.length; M++) {
      const L = d[M], S = m[M], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Hr(L, S) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? E(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      q(
        L,
        S,
        K,
        null,
        x,
        T,
        C,
        I,
        !0
      );
    }
  }, Ze = (d, m, _, x, T) => {
    if (m !== _) {
      if (m !== Se)
        for (const C in m)
          !Kr(C) && !(C in _) && o(
            d,
            C,
            m[C],
            null,
            T,
            x
          );
      for (const C in _) {
        if (Kr(C)) continue;
        const I = _[C], M = m[C];
        I !== M && C !== "value" && o(d, C, M, I, T, x);
      }
      "value" in _ && o(d, "value", m.value, _.value, T);
    }
  }, st = (d, m, _, x, T, C, I, M, L) => {
    const S = m.el = d ? d.el : l(""), K = m.anchor = d ? d.anchor : l("");
    let { patchFlag: H, dynamicChildren: W, slotScopeIds: X } = m;
    X && (M = M ? M.concat(X) : X), d == null ? (n(S, _, x), n(K, _, x), Ve(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      K,
      T,
      C,
      I,
      M,
      L
    )) : H > 0 && H & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === W.length ? (Ie(
      d.dynamicChildren,
      W,
      _,
      T,
      C,
      I,
      M
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || T && m === T.subTree) && cl(
      d,
      m,
      !0
      /* shallow */
    )) : se(
      d,
      m,
      _,
      K,
      T,
      C,
      I,
      M,
      L
    );
  }, qe = (d, m, _, x, T, C, I, M, L) => {
    m.slotScopeIds = M, d == null ? m.shapeFlag & 512 ? T.ctx.activate(
      m,
      _,
      x,
      I,
      L
    ) : vt(
      m,
      _,
      x,
      T,
      C,
      I,
      L
    ) : He(d, m, L);
  }, vt = (d, m, _, x, T, C, I) => {
    const M = d.component = wc(
      d,
      x,
      T
    );
    if (Xi(d) && (M.ctx.renderer = Qe), Oc(M, !1, I), M.asyncDep) {
      if (T && T.registerDep(M, we, I), !d.el) {
        const L = M.subTree = Kt(Jt);
        ne(null, L, m, _), d.placeholder = L.el;
      }
    } else
      we(
        M,
        d,
        m,
        _,
        T,
        C,
        I
      );
  }, He = (d, m, _) => {
    const x = m.component = d.component;
    if (ac(d, m, _))
      if (x.asyncDep && !x.asyncResolved) {
        ue(x, m, _);
        return;
      } else
        x.next = m, x.update();
    else
      m.el = d.el, x.vnode = m;
  }, we = (d, m, _, x, T, C, I) => {
    const M = () => {
      if (d.isMounted) {
        let { next: H, bu: W, u: X, parent: Z, vnode: N } = d;
        {
          const be = ul(d);
          if (be) {
            H && (H.el = N.el, ue(d, H, I)), be.asyncDep.then(() => {
              ut(() => {
                d.isUnmounted || S();
              }, T);
            });
            return;
          }
        }
        let R = H, $;
        ar(d, !1), H ? (H.el = N.el, ue(d, H, I)) : H = N, W && Sn(W), ($ = H.props && H.props.onVnodeBeforeUpdate) && It($, Z, H, N), ar(d, !0);
        const J = wo(d), ie = d.subTree;
        d.subTree = J, q(
          ie,
          J,
          // parent may have changed if it's in a teleport
          E(ie.el),
          // anchor may have changed if it's in a fragment
          Et(ie),
          d,
          T,
          C
        ), H.el = J.el, R === null && cc(d, J.el), X && ut(X, T), ($ = H.props && H.props.onVnodeUpdated) && ut(
          () => It($, Z, H, N),
          T
        );
      } else {
        let H;
        const { el: W, props: X } = m, { bm: Z, m: N, parent: R, root: $, type: J } = d, ie = Jr(m);
        ar(d, !1), Z && Sn(Z), !ie && (H = X && X.onVnodeBeforeMount) && It(H, R, m), ar(d, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            J,
            d.parent ? d.parent.type : void 0
          );
          const be = d.subTree = wo(d);
          q(
            null,
            be,
            _,
            x,
            d,
            T,
            C
          ), m.el = be.el;
        }
        if (N && ut(N, T), !ie && (H = X && X.onVnodeMounted)) {
          const be = m;
          ut(
            () => It(H, R, be),
            T
          );
        }
        (m.shapeFlag & 256 || R && Jr(R.vnode) && R.vnode.shapeFlag & 256) && d.a && ut(d.a, T), d.isMounted = !0, m = _ = x = null;
      }
    };
    d.scope.on();
    const L = d.effect = new Es(M);
    d.scope.off();
    const S = d.update = L.run.bind(L), K = d.job = L.runIfDirty.bind(L);
    K.i = d, K.id = d.uid, L.scheduler = () => Gi(K), ar(d, !0), S();
  }, ue = (d, m, _) => {
    m.component = d;
    const x = d.vnode.props;
    d.vnode = m, d.next = null, fc(d, m.props, x, _), mc(d, m.children, _), Gt(), vo(d), Yt();
  }, se = (d, m, _, x, T, C, I, M, L = !1) => {
    const S = d && d.children, K = d ? d.shapeFlag : 0, H = m.children, { patchFlag: W, shapeFlag: X } = m;
    if (W > 0) {
      if (W & 128) {
        dt(
          S,
          H,
          _,
          x,
          T,
          C,
          I,
          M,
          L
        );
        return;
      } else if (W & 256) {
        De(
          S,
          H,
          _,
          x,
          T,
          C,
          I,
          M,
          L
        );
        return;
      }
    }
    X & 8 ? (K & 16 && Be(S, T, C), H !== S && b(_, H)) : K & 16 ? X & 16 ? dt(
      S,
      H,
      _,
      x,
      T,
      C,
      I,
      M,
      L
    ) : Be(S, T, C, !0) : (K & 8 && b(_, ""), X & 16 && Ve(
      H,
      _,
      x,
      T,
      C,
      I,
      M,
      L
    ));
  }, De = (d, m, _, x, T, C, I, M, L) => {
    d = d || Or, m = m || Or;
    const S = d.length, K = m.length, H = Math.min(S, K);
    let W;
    for (W = 0; W < H; W++) {
      const X = m[W] = L ? zt(m[W]) : Ft(m[W]);
      q(
        d[W],
        X,
        _,
        null,
        T,
        C,
        I,
        M,
        L
      );
    }
    S > K ? Be(
      d,
      T,
      C,
      !0,
      !1,
      H
    ) : Ve(
      m,
      _,
      x,
      T,
      C,
      I,
      M,
      L,
      H
    );
  }, dt = (d, m, _, x, T, C, I, M, L) => {
    let S = 0;
    const K = m.length;
    let H = d.length - 1, W = K - 1;
    for (; S <= H && S <= W; ) {
      const X = d[S], Z = m[S] = L ? zt(m[S]) : Ft(m[S]);
      if (Hr(X, Z))
        q(
          X,
          Z,
          _,
          null,
          T,
          C,
          I,
          M,
          L
        );
      else
        break;
      S++;
    }
    for (; S <= H && S <= W; ) {
      const X = d[H], Z = m[W] = L ? zt(m[W]) : Ft(m[W]);
      if (Hr(X, Z))
        q(
          X,
          Z,
          _,
          null,
          T,
          C,
          I,
          M,
          L
        );
      else
        break;
      H--, W--;
    }
    if (S > H) {
      if (S <= W) {
        const X = W + 1, Z = X < K ? m[X].el : x;
        for (; S <= W; )
          q(
            null,
            m[S] = L ? zt(m[S]) : Ft(m[S]),
            _,
            Z,
            T,
            C,
            I,
            M,
            L
          ), S++;
      }
    } else if (S > W)
      for (; S <= H; )
        $e(d[S], T, C, !0), S++;
    else {
      const X = S, Z = S, N = /* @__PURE__ */ new Map();
      for (S = Z; S <= W; S++) {
        const Ae = m[S] = L ? zt(m[S]) : Ft(m[S]);
        Ae.key != null && N.set(Ae.key, S);
      }
      let R, $ = 0;
      const J = W - Z + 1;
      let ie = !1, be = 0;
      const de = new Array(J);
      for (S = 0; S < J; S++) de[S] = 0;
      for (S = X; S <= H; S++) {
        const Ae = d[S];
        if ($ >= J) {
          $e(Ae, T, C, !0);
          continue;
        }
        let Oe;
        if (Ae.key != null)
          Oe = N.get(Ae.key);
        else
          for (R = Z; R <= W; R++)
            if (de[R - Z] === 0 && Hr(Ae, m[R])) {
              Oe = R;
              break;
            }
        Oe === void 0 ? $e(Ae, T, C, !0) : (de[Oe - Z] = S + 1, Oe >= be ? be = Oe : ie = !0, q(
          Ae,
          m[Oe],
          _,
          null,
          T,
          C,
          I,
          M,
          L
        ), $++);
      }
      const ke = ie ? _c(de) : Or;
      for (R = ke.length - 1, S = J - 1; S >= 0; S--) {
        const Ae = Z + S, Oe = m[Ae], et = m[Ae + 1], xt = Ae + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          et.el || fl(et)
        ) : x;
        de[S] === 0 ? q(
          null,
          Oe,
          _,
          xt,
          T,
          C,
          I,
          M,
          L
        ) : ie && (R < 0 || S !== ke[R] ? Ue(Oe, _, xt, 2) : R--);
      }
    }
  }, Ue = (d, m, _, x, T = null) => {
    const { el: C, type: I, transition: M, children: L, shapeFlag: S } = d;
    if (S & 6) {
      Ue(d.component.subTree, m, _, x);
      return;
    }
    if (S & 128) {
      d.suspense.move(m, _, x);
      return;
    }
    if (S & 64) {
      I.move(d, m, _, Qe);
      return;
    }
    if (I === ae) {
      n(C, m, _);
      for (let H = 0; H < L.length; H++)
        Ue(L[H], m, _, x);
      n(d.anchor, m, _);
      return;
    }
    if (I === fi) {
      D(d, m, _);
      return;
    }
    if (x !== 2 && S & 1 && M)
      if (x === 0)
        M.persisted && !C[ai] ? n(C, m, _) : (M.beforeEnter(C), n(C, m, _), ut(() => M.enter(C), T));
      else {
        const { leave: H, delayLeave: W, afterLeave: X } = M, Z = () => {
          d.ctx.isUnmounted ? i(C) : n(C, m, _);
        }, N = () => {
          const R = C._isLeaving || !!C[ai];
          C._isLeaving && C[ai](
            !0
            /* cancelled */
          ), M.persisted && !R ? Z() : H(C, () => {
            Z(), X && X();
          });
        };
        W ? W(C, Z, N) : N();
      }
    else
      n(C, m, _);
  }, $e = (d, m, _, x = !1, T = !1) => {
    const {
      type: C,
      props: I,
      ref: M,
      children: L,
      dynamicChildren: S,
      shapeFlag: K,
      patchFlag: H,
      dirs: W,
      cacheIndex: X,
      memo: Z
    } = d;
    if (H === -2 && (T = !1), M != null && (Gt(), Xr(M, null, _, d, !0), Yt()), X != null && (m.renderCache[X] = void 0), K & 256) {
      m.ctx.deactivate(d);
      return;
    }
    const N = K & 1 && W, R = !Jr(d);
    let $;
    if (R && ($ = I && I.onVnodeBeforeUnmount) && It($, m, d), K & 6)
      Pt(d.component, _, x);
    else {
      if (K & 128) {
        d.suspense.unmount(_, x);
        return;
      }
      N && lr(d, null, m, "beforeUnmount"), K & 64 ? d.type.remove(
        d,
        m,
        _,
        Qe,
        x
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== ae || H > 0 && H & 64) ? Be(
        S,
        m,
        _,
        !1,
        !0
      ) : (C === ae && H & 384 || !T && K & 16) && Be(L, m, _), x && pt(d);
    }
    const J = Z != null && X == null;
    (R && ($ = I && I.onVnodeUnmounted) || N || J) && ut(() => {
      $ && It($, m, d), N && lr(d, null, m, "unmounted"), J && (d.el = null);
    }, _);
  }, pt = (d) => {
    const { type: m, el: _, anchor: x, transition: T } = d;
    if (m === ae) {
      fe(_, x);
      return;
    }
    if (m === fi) {
      V(d);
      return;
    }
    const C = () => {
      i(_), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (d.shapeFlag & 1 && T && !T.persisted) {
      const { leave: I, delayLeave: M } = T, L = () => I(_, C);
      M ? M(d.el, C, L) : L();
    } else
      C();
  }, fe = (d, m) => {
    let _;
    for (; d !== m; )
      _ = P(d), i(d), d = _;
    i(m);
  }, Pt = (d, m, _) => {
    const { bum: x, scope: T, job: C, subTree: I, um: M, m: L, a: S } = d;
    No(L), No(S), x && Sn(x), T.stop(), C && (C.flags |= 8, $e(I, d, m, _)), M && ut(M, m), ut(() => {
      d.isUnmounted = !0;
    }, m);
  }, Be = (d, m, _, x = !1, T = !1, C = 0) => {
    for (let I = C; I < d.length; I++)
      $e(d[I], m, _, x, T);
  }, Et = (d) => {
    if (d.shapeFlag & 6)
      return Et(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const m = P(d.anchor || d.el), _ = m && m[Da];
    return _ ? P(_) : m;
  };
  let Tt = !1;
  const kt = (d, m, _) => {
    let x;
    d == null ? m._vnode && ($e(m._vnode, null, null, !0), x = m._vnode.component) : q(
      m._vnode || null,
      d,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = d, Tt || (Tt = !0, vo(x), Hs(), Tt = !1);
  }, Qe = {
    p: q,
    um: $e,
    m: Ue,
    r: pt,
    mt: vt,
    mc: Ve,
    pc: se,
    pbc: Ie,
    n: Et,
    o: e
  };
  return {
    render: kt,
    hydrate: void 0,
    createApp: rc(kt)
  };
}
function ui({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function ar({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cl(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (Q(n) && Q(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = zt(i[o]), l.el = s.el), !r && l.patchFlag !== -2 && cl(s, l)), l.type === qn && (l.patchFlag === -1 && (l = i[o] = zt(l)), l.el = s.el), l.type === Jt && !l.el && (l.el = s.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, o, s, l;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        l = o + s >> 1, e[r[l]] < v ? o = l + 1 : s = l;
      v < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, s = r[o - 1]; o-- > 0; )
    r[o] = s, s = t[s];
  return r;
}
function ul(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ul(t);
}
function No(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function fl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? fl(t.subTree) : null;
}
const dl = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Na(e);
}
const ae = /* @__PURE__ */ Symbol.for("v-fgt"), qn = /* @__PURE__ */ Symbol.for("v-txt"), Jt = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), yr = [];
let _t = null;
function w(e = !1) {
  yr.push(_t = e ? null : []);
}
function pl() {
  yr.pop(), _t = yr[yr.length - 1] || null;
}
let rn = 1;
function Po(e, t = !1) {
  rn += e, e < 0 && _t && t && (_t.hasOnce = !0);
}
function hl(e) {
  return e.dynamicChildren = rn > 0 ? _t || Or : null, pl(), rn > 0 && _t && _t.push(e), e;
}
function O(e, t, r, n, i, o) {
  return hl(
    u(
      e,
      t,
      r,
      n,
      i,
      o,
      !0
    )
  );
}
function Ec(e, t, r, n, i) {
  return hl(
    Kt(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function ml(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Hr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bl = ({ key: e }) => e ?? null, xn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Me(e) || /* @__PURE__ */ Xe(e) || le(e) ? { i: St, r: e, k: t, f: !!r } : e : null);
function u(e, t = null, r = null, n = 0, i = null, o = e === ae ? 0 : 1, s = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && bl(t),
    ref: t && xn(t),
    scopeId: js,
    slotScopeIds: null,
    children: r,
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
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: St
  };
  return l ? (kn(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Me(r) ? 8 : 16), rn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  _t && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && _t.push(f), f;
}
const Kt = Tc;
function Tc(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Ga) && (e = Jt), ml(e)) {
    const l = Ir(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && kn(l, r), rn > 0 && !o && _t && (l.shapeFlag & 6 ? _t[_t.indexOf(e)] = l : _t.push(l)), l.patchFlag = -2, l;
  }
  if (Mc(e) && (e = e.__vccOpts), t) {
    t = Sc(t);
    let { class: l, style: f } = t;
    l && !Me(l) && (t.class = Nr(l)), Te(f) && (/* @__PURE__ */ Ki(f) && !Q(f) && (f = Je({}, f)), t.style = $i(f));
  }
  const s = Me(e) ? 1 : dl(e) ? 128 : Bn(e) ? 64 : Te(e) ? 4 : le(e) ? 2 : 0;
  return u(
    e,
    t,
    r,
    n,
    i,
    s,
    o,
    !0
  );
}
function Sc(e) {
  return e ? /* @__PURE__ */ Ki(e) || nl(e) ? Je({}, e) : e : null;
}
function Ir(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: l, transition: f } = e, v = t ? Cc(i || {}, t) : i, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && bl(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? Q(o) ? o.concat(xn(t)) : [o, xn(t)] : xn(t)
    ) : o,
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
    patchFlag: t && e.type !== ae ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Ir(e.ssContent),
    ssFallback: e.ssFallback && Ir(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && Yi(
    b,
    f.clone(b)
  ), b;
}
function ye(e = " ", t = 0) {
  return Kt(qn, null, e, t);
}
function he(e = "", t = !1) {
  return t ? (w(), Ec(Jt, null, e)) : Kt(Jt, null, e);
}
function Ft(e) {
  return e == null || typeof e == "boolean" ? Kt(Jt) : Q(e) ? Kt(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ml(e) ? zt(e) : Kt(qn, null, String(e));
}
function zt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ir(e);
}
function kn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), kn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !nl(t) ? t._ctx = St : i === 3 && St && (St.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (le(t)) {
    if (n & 65) {
      kn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: St }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [ye(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Cc(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = Nr([t.class, n.class]));
      else if (i === "style")
        t.style = $i([t.style, n.style]);
      else if (Dn(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(Q(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Un(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function It(e, t, r, n = null) {
  Nt(e, t, 7, [
    r,
    n
  ]);
}
const xc = Zs();
let Ac = 0;
function wc(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || xc, o = {
    uid: Ac++,
    vnode: e,
    type: n,
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
    scope: new Ql(
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
    propsOptions: ol(n, i),
    emitsOptions: Qs(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Se,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Se,
    data: Se,
    props: Se,
    attrs: Se,
    slots: Se,
    refs: Se,
    setupState: Se,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = ic.bind(null, o), e.ce && e.ce(o), o;
}
let ot = null;
const Rc = () => ot || St;
let Mn, nn;
{
  const e = $n(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Mn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ot = r
  ), nn = t(
    "__VUE_SSR_SETTERS__",
    (r) => on = r
  );
}
const an = (e) => {
  const t = ot;
  return Mn(e), e.scope.on(), () => {
    e.scope.off(), Mn(t);
  };
}, ko = () => {
  ot && ot.scope.off(), Mn(null);
};
function yl(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function Oc(e, t = !1, r = !1) {
  t && nn(t);
  const { props: n, children: i } = e.vnode, o = yl(e);
  uc(e, n, o, t), hc(e, i, r || t);
  const s = o ? Nc(e, t) : void 0;
  return t && nn(!1), s;
}
function Nc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ya);
  const { setup: n } = r;
  if (n) {
    Gt();
    const i = e.setupContext = n.length > 1 ? kc(e) : null, o = an(e), s = ln(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = ps(s);
    if (Yt(), o(), (l || e.sp) && !Jr(e) && Ws(e), l) {
      if (s.then(ko, ko), t)
        return s.then((f) => {
          nn(!0);
          try {
            Mo(e, f, t);
          } finally {
            nn(!1);
          }
        }).catch((f) => {
          Vn(f, e, 0);
        });
      e.asyncDep = s;
    } else
      Mo(e, s);
  } else
    gl(e);
}
function Mo(e, t, r) {
  le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Te(t) && (e.setupState = Is(t)), gl(e);
}
function gl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || $t);
  {
    const i = an(e);
    Gt();
    try {
      Xa(e);
    } finally {
      Yt(), i();
    }
  }
}
const Pc = {
  get(e, t) {
    return Ye(e, "get", ""), e[t];
  }
};
function kc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Pc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Kn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Is(_a(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Zr)
        return Zr[r](e);
    },
    has(t, r) {
      return r in t || r in Zr;
    }
  })) : e.proxy;
}
function Mc(e) {
  return le(e) && "__vccOpts" in e;
}
const te = (e, t) => /* @__PURE__ */ xa(e, t, on), Lc = "3.5.42";
let Li;
const Lo = typeof window < "u" && window.trustedTypes;
if (Lo)
  try {
    Li = /* @__PURE__ */ Lo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _l = Li ? (e) => Li.createHTML(e) : (e) => e, Ic = "http://www.w3.org/2000/svg", Dc = "http://www.w3.org/1998/Math/MathML", Bt = typeof document < "u" ? document : null, Io = Bt && /* @__PURE__ */ Bt.createElement("template"), Uc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Bt.createElementNS(Ic, e) : t === "mathml" ? Bt.createElementNS(Dc, e) : r ? Bt.createElement(e, { is: r }) : Bt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Bt.createTextNode(e),
  createComment: (e) => Bt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Bt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, o) {
    const s = r ? r.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      Io.innerHTML = _l(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Io.content;
      if (n === "svg" || n === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function Hc(e, t, r) {
  const n = e[Fc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Do = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function Bc(e, t, r) {
  const n = e.style, i = Me(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Me(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          r[l] == null && Wr(n, l, "");
        }
      else
        for (const s in t)
          r[s] == null && Wr(n, s, "");
    for (const s in r) {
      s === "display" && (o = !0);
      const l = r[s];
      l != null ? Wc(
        e,
        s,
        !Me(t) && t ? t[s] : void 0,
        l
      ) || Wr(n, s, l) : Wr(n, s, "");
    }
  } else if (i) {
    if (t !== r) {
      const s = n[jc];
      s && (r += ";" + s), n.cssText = r, o = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Do in e && (e[Do] = o ? n.display : "", e[$c] && (n.display = "none"));
}
const _n = /\s*!important$/;
function Wr(e, t, r) {
  if (Q(r))
    r.forEach((n) => Wr(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    _n.test(r) ? e.setProperty(t, r.replace(_n, ""), "important") : e.setProperty(t, r);
  else {
    const n = zc(e, t);
    _n.test(r) ? e.setProperty(
      _r(n),
      r.replace(_n, ""),
      "important"
    ) : e[n] = r;
  }
}
const Uo = ["Webkit", "Moz", "ms"], di = {};
function zc(e, t) {
  const r = di[t];
  if (r)
    return r;
  let n = wt(t);
  if (n !== "filter" && n in e)
    return di[t] = n;
  n = bs(n);
  for (let i = 0; i < Uo.length; i++) {
    const o = Uo[i] + n;
    if (o in e)
      return di[t] = o;
  }
  return t;
}
function Wc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Me(n) && r === n;
}
const Fo = "http://www.w3.org/1999/xlink";
function Ho(e, t, r, n, i, o = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Fo, t.slice(6, t.length)) : e.setAttributeNS(Fo, t, r) : r == null || o && !gs(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : jt(r) ? String(r) : r
  );
}
function $o(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? _l(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, f = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (l !== f || !("_value" in e)) && (e.value = f), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const l = typeof e[t];
    l === "boolean" ? r = gs(r) : r == null && l === "string" ? (r = "", s = !0) : l === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function dr(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function qc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const jo = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, i = null) {
  const o = e[jo] || (e[jo] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [l, f] = Xc(t);
    if (n) {
      const v = o[t] = Qc(
        n,
        i
      );
      dr(e, l, v, f);
    } else s && (qc(e, l, s, f), o[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : _r(e.slice(2)), t];
}
let pi = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => pi || (Jc.then(() => pi = 0), pi = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const i = r.value;
    if (Q(i)) {
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        o.call(n), n._stopped = !0;
      };
      const s = i.slice(), l = [n];
      for (let f = 0; f < s.length && !n._stopped; f++) {
        const v = s[f];
        v && Nt(
          v,
          t,
          5,
          l
        );
      }
    } else
      Nt(
        i,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const Vo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? Hc(e, n, s) : t === "style" ? Bc(e, r, n) : Dn(t) ? Un(t) || Kc(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, s)) ? ($o(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ho(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Me(n))) ? $o(e, wt(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ho(e, t, n, s));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vo(t) && le(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Vo(t) && Me(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = wt(t);
  return Array.isArray(r) ? r.some((i) => wt(i) === n) : Object.keys(r).some((i) => wt(i) === n);
}
const Ln = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (r) => Sn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function Bo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const hr = /* @__PURE__ */ Symbol("_assign"), vn = /* @__PURE__ */ Symbol("_initialValue");
function hi(e, t, r) {
  return t && (e = e.trim()), r && (e = Hn(e)), e;
}
const mi = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[vn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[vn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[hr] = Ln(i);
    const o = n || i.props && i.props.type === "number";
    dr(e, t ? "change" : "input", (s) => {
      s.target.composing || e[hr](hi(e.value, r, o));
    }), (r || o) && dr(e, "change", () => {
      e.value = hi(e.value, r, o);
    }), t || (dr(e, "compositionstart", nu), dr(e, "compositionend", Bo), dr(e, "change", Bo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", o = e[vn];
    delete e[vn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[hr](hi(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[hr] = Ln(s), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hn(e.value) : e.value, f = t ?? "";
    if (l === f)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === f) || (e.value = f);
  }
}, rt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, dr(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => r ? Hn(In(f)) : In(f)
      ), o = e.multiple, s = o ? gr(e._modelValue) ? new Set(i) : i : i[0], l = e._pendingValue = [
        o,
        o ? Q(s) ? i.slice() : i : s
      ];
      try {
        e[hr](s);
      } finally {
        Us(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[hr] = Ln(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zo(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[hr] = Ln(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && zo(e, t);
  }
};
function iu(e, t, r) {
  if (!r || Q(e)) return ir(e, t);
  if (gr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function zo(e, t) {
  const r = e.multiple, n = Q(t);
  if (!(r && !n && !gr(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], l = In(s);
      if (r)
        if (n) {
          const f = typeof l;
          f === "string" || f === "number" ? s.selected = t.some((v) => String(v) === String(l)) : s.selected = Zl(t, l) > -1;
        } else
          s.selected = t.has(l);
      else if (ir(In(s), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function In(e) {
  return "_value" in e ? e._value : e.value;
}
const ou = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => ou.some((r) => e[`${r}Key`] && !t.includes(r))
}, En = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const l = su[t[s]];
      if (l && l(i, t)) return;
    }
    return e(i, ...o);
  }));
}, lu = /* @__PURE__ */ Je({ patchProp: eu }, Uc);
let Wo;
function au() {
  return Wo || (Wo = bc(lu));
}
const cu = ((...e) => {
  const t = au().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = fu(n);
    if (!i) return;
    const o = t._component;
    !le(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, uu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fu(e) {
  return Me(e) ? document.querySelector(e) : e;
}
function du(e, t, r) {
  const n = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(n))
    return window._nc_initial_state.get(n);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const i = document.querySelector(n);
  if (i === null) {
    if (r !== void 0)
      return r;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const o = JSON.parse(atob(i.value));
    return window._nc_initial_state.set(n, o), o;
  } catch (o) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: o }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: o });
  }
}
function qo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function pu(e) {
  if (Array.isArray(e)) return e;
}
function hu(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, o, s, l = [], f = !0, v = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(f = (n = o.call(r)).done) && (l.push(n.value), l.length !== t); f = !0) ;
    } catch (b) {
      v = !0, i = b;
    } finally {
      try {
        if (!f && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (v) throw i;
      }
    }
    return l;
  }
}
function mu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bu(e, t) {
  return pu(e) || hu(e, t) || yu(e, t) || mu();
}
function yu(e, t) {
  if (e) {
    if (typeof e == "string") return qo(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? qo(e, t) : void 0;
  }
}
const vl = Object.entries, Ko = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let je = Object.freeze, We = Object.seal, Rr = Object.create, El = typeof Reflect < "u" && Reflect, Ii = El.apply, Di = El.construct;
je || (je = function(t) {
  return t;
});
We || (We = function(t) {
  return t;
});
Ii || (Ii = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    i[o - 2] = arguments[o];
  return t.apply(r, i);
});
Di || (Di = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const fr = Fe(Array.prototype.forEach), Eu = Fe(Array.prototype.lastIndexOf), Go = Fe(Array.prototype.pop), $r = Fe(Array.prototype.push), Tu = Fe(Array.prototype.splice), Mr = Array.isArray, qr = Fe(String.prototype.toLowerCase), bi = Fe(String.prototype.toString), Yo = Fe(String.prototype.match), jr = Fe(String.prototype.replace), Xo = Fe(String.prototype.indexOf), Su = Fe(String.prototype.trim), Cu = Fe(Number.prototype.toString), xu = Fe(Boolean.prototype.toString), Jo = typeof BigInt > "u" ? null : Fe(BigInt.prototype.toString), Zo = typeof Symbol > "u" ? null : Fe(Symbol.prototype.toString), ft = Fe(Object.prototype.hasOwnProperty), Vr = Fe(Object.prototype.toString), Ge = Fe(RegExp.prototype.test), cr = Au(TypeError);
function Fe(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      n[i - 1] = arguments[i];
    return Ii(e, t, n);
  };
}
function Au(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return Di(e, r);
  };
}
function me(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qr;
  if (Ko && Ko(e, null), !Mr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let i = t[n];
    if (typeof i == "string") {
      const o = r(i);
      o !== i && (gu(t) || (t[n] = o), i = o);
    }
    e[i] = !0;
  }
  return e;
}
function wu(e) {
  for (let t = 0; t < e.length; t++)
    ft(e, t) || (e[t] = null);
  return e;
}
function gt(e) {
  const t = Rr(null);
  for (const n of vl(e)) {
    var r = bu(n, 2);
    const i = r[0], o = r[1];
    ft(e, i) && (Mr(o) ? t[i] = wu(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = gt(o) : t[i] = o);
  }
  return t;
}
function Ru(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Cu(e);
    case "boolean":
      return xu(e);
    case "bigint":
      return Jo ? Jo(e) : "0";
    case "symbol":
      return Zo ? Zo(e) : "Symbol()";
    case "undefined":
      return Vr(e);
    case "function":
    case "object": {
      if (e === null)
        return Vr(e);
      const t = e, r = At(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Vr(n);
      }
      return Vr(e);
    }
    default:
      return Vr(e);
  }
}
function At(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return Fe(n.get);
      if (typeof n.value == "function")
        return Fe(n.value);
    }
    e = _u(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Ou(e) {
  try {
    return Ge(e, ""), !0;
  } catch {
    return !1;
  }
}
const Qo = je(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = je(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = je(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = je(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = je(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pu = je(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), es = je(["#text"]), ts = je(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = je(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), rs = je(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tn = je(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ku = We(/{{[\w\W]*|^[\w\W]*}}/g), Mu = We(/<%[\w\W]*|^[\w\W]*%>/g), Lu = We(/\${[\w\W]*/g), Iu = We(/^data-[\-\w.\u00B7-\uFFFF]+$/), Du = We(/^aria-[\-\w]+$/), ns = We(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Uu = We(/^(?:\w+script|data):/i), Fu = We(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = We(/^html$/i), $u = We(/^[a-z][.\w]*(-[.\w]+)+$/i), is = We(/<[/\w!]/g), os = We(/<[/\w]/g), ju = We(/<\/no(script|embed|frames)/i), Vu = We(/\/>/i), yt = {
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
}, Tl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = je(me({}, Tl)), zu = (function() {
  const e = {};
  return fr(Tl, (t) => {
    e[t] = We(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), je(e);
})(), Wu = function() {
  return typeof window > "u" ? null : window;
}, qu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const i = "data-tt-policy-suffix";
  r && r.hasAttribute(i) && (n = r.getAttribute(i));
  const o = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, ss = function() {
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
}, tr = function(t, r, n, i) {
  return ft(t, r) && Mr(t[r]) ? me(i.base ? gt(i.base) : {}, t[r], i.transform) : n;
}, Ei = function(t, r, n) {
  const i = ft(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? gt(i) : n();
};
function Sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wu();
  const t = (U) => Sl(U);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== yt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, s = e.Node, l = e.Element, f = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const b = e.DOMParser, E = e.trustedTypes, P = l.prototype, j = At(P, "cloneNode"), re = At(P, "remove"), q = At(P, "nextSibling"), oe = At(P, "childNodes"), ne = At(P, "parentNode"), z = At(P, "shadowRoot"), D = At(P, "attributes"), V = s && s.prototype ? At(s.prototype, "nodeType") : null, ce = s && s.prototype ? At(s.prototype, "nodeName") : null, Pe = s && s.prototype ? At(s.prototype, "ownerDocument") : null, Re = function(c) {
    return V ? V(c) : c.nodeType;
  }, Ve = function(c) {
    return ce ? ce(c) : c.nodeName;
  };
  if (typeof o == "function") {
    const U = r.createElement("template");
    U.content && U.content.ownerDocument && (r = U.content.ownerDocument);
  }
  let ve, Ie = "", Ze, st = !1, qe = 0;
  const vt = function() {
    if (qe > 0)
      throw cr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, He = function(c) {
    vt(), qe++;
    try {
      return ve.createHTML(c);
    } finally {
      qe--;
    }
  }, we = function(c) {
    vt(), qe++;
    try {
      return ve.createScriptURL(c);
    } finally {
      qe--;
    }
  }, ue = function() {
    return st || (Ze = qu(E, i), st = !0), Ze;
  }, se = r, De = se.implementation, dt = se.createNodeIterator, Ue = se.createDocumentFragment, $e = se.getElementsByTagName, pt = n.importNode;
  let fe = ss();
  t.isSupported = typeof vl == "function" && typeof ne == "function" && De && De.createHTMLDocument !== void 0;
  const Pt = ku, Be = Mu, Et = Lu, Tt = Iu, kt = Du, Qe = Uu, ht = Fu, d = $u;
  let m = ns, _ = null;
  const x = me({}, [...Qo, ...yi, ...gi, ..._i, ...es]);
  let T = null;
  const C = me({}, [...ts, ...vi, ...rs, ...Tn]);
  let I = Object.seal(Rr(null, {
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
  })), M = null, L = null;
  const S = Object.seal(Rr(null, {
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
  let K = !0, H = !0, W = !1, X = !0, Z = !1, N = !0, R = !1, $ = !1, J = null, ie = null, be = !1, de = !1, ke = !1, Ae = !1, Oe = !0, et = !1;
  const xt = "user-content-";
  let F = !0, k = !1, h = {}, pe = null;
  const lt = me({}, [
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
  let mt = null;
  const vr = me({}, ["audio", "video", "img", "source", "image", "track"]);
  let Mt = null;
  const cn = me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Qt = "http://www.w3.org/1998/Math/MathML", or = "http://www.w3.org/2000/svg", bt = "http://www.w3.org/1999/xhtml";
  let Er = bt, Gn = !1, Yn = null;
  const xl = me({}, [Qt, or, bt], bi), Qi = je(["mi", "mo", "mn", "ms", "mtext"]);
  let Xn = me({}, Qi);
  const eo = je(["annotation-xml"]);
  let Jn = me({}, eo);
  const Al = me({}, ["title", "style", "font", "a", "script"]);
  let Dr = null;
  const wl = ["application/xhtml+xml", "text/html"], Rl = "text/html";
  let Le = null, Tr = null;
  const Ol = r.createElement("form"), to = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, Zn = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Tr && Tr === c)
      return;
    (!c || typeof c != "object") && (c = {}), c = gt(c), Dr = // eslint-disable-next-line unicorn/prefer-includes
    wl.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? Rl : c.PARSER_MEDIA_TYPE, Le = Dr === "application/xhtml+xml" ? bi : qr, _ = tr(c, "ALLOWED_TAGS", x, {
      transform: Le
    }), T = tr(c, "ALLOWED_ATTR", C, {
      transform: Le
    }), Yn = tr(c, "ALLOWED_NAMESPACES", xl, {
      transform: bi
    }), Mt = tr(c, "ADD_URI_SAFE_ATTR", cn, {
      transform: Le,
      base: cn
    }), mt = tr(c, "ADD_DATA_URI_TAGS", vr, {
      transform: Le,
      base: vr
    }), pe = tr(c, "FORBID_CONTENTS", lt, {
      transform: Le
    }), M = tr(c, "FORBID_TAGS", gt({}), {
      transform: Le
    }), L = tr(c, "FORBID_ATTR", gt({}), {
      transform: Le
    }), h = ft(c, "USE_PROFILES") ? c.USE_PROFILES && typeof c.USE_PROFILES == "object" ? gt(c.USE_PROFILES) : c.USE_PROFILES : !1, K = c.ALLOW_ARIA_ATTR !== !1, H = c.ALLOW_DATA_ATTR !== !1, W = c.ALLOW_UNKNOWN_PROTOCOLS || !1, X = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Z = c.SAFE_FOR_TEMPLATES || !1, N = c.SAFE_FOR_XML !== !1, R = c.WHOLE_DOCUMENT || !1, de = c.RETURN_DOM || !1, ke = c.RETURN_DOM_FRAGMENT || !1, Ae = c.RETURN_TRUSTED_TYPE || !1, be = c.FORCE_BODY || !1, Oe = c.SANITIZE_DOM !== !1, et = c.SANITIZE_NAMED_PROPS || !1, F = c.KEEP_CONTENT !== !1, k = c.IN_PLACE || !1, m = Ou(c.ALLOWED_URI_REGEXP) ? c.ALLOWED_URI_REGEXP : ns, Er = typeof c.NAMESPACE == "string" ? c.NAMESPACE : bt, Xn = Ei(
      c,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => me({}, Qi)
      // Default built-in map
    ), Jn = Ei(
      c,
      "HTML_INTEGRATION_POINTS",
      () => me({}, eo)
      // Default built-in map
    );
    const g = Ei(c, "CUSTOM_ELEMENT_HANDLING", () => Rr(null));
    if (I = Rr(null), ft(g, "tagNameCheck") && to(g.tagNameCheck) && (I.tagNameCheck = g.tagNameCheck), ft(g, "attributeNameCheck") && to(g.attributeNameCheck) && (I.attributeNameCheck = g.attributeNameCheck), ft(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), We(I), Z && (H = !1), ke && (de = !0), h && (_ = me({}, es), T = Rr(null), h.html === !0 && (me(_, Qo), me(T, ts)), h.svg === !0 && (me(_, yi), me(T, vi), me(T, Tn)), h.svgFilters === !0 && (me(_, gi), me(T, vi), me(T, Tn)), h.mathMl === !0 && (me(_, _i), me(T, rs), me(T, Tn))), S.tagCheck = null, S.attributeCheck = null, ft(c, "ADD_TAGS") && (typeof c.ADD_TAGS == "function" ? S.tagCheck = c.ADD_TAGS : Mr(c.ADD_TAGS) && (_ === x && (_ = gt(_)), me(_, c.ADD_TAGS, Le))), ft(c, "ADD_ATTR") && (typeof c.ADD_ATTR == "function" ? S.attributeCheck = c.ADD_ATTR : Mr(c.ADD_ATTR) && (T === C && (T = gt(T)), me(T, c.ADD_ATTR, Le))), ft(c, "ADD_FORBID_CONTENTS") && Mr(c.ADD_FORBID_CONTENTS) && (pe === lt && (pe = gt(pe)), me(pe, c.ADD_FORBID_CONTENTS, Le)), F && (_["#text"] = !0), R && me(_, ["html", "head", "body"]), _.table && (me(_, ["tbody"]), delete M.tbody), c.TRUSTED_TYPES_POLICY) {
      if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw cr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw cr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const A = ve;
      ve = c.TRUSTED_TYPES_POLICY;
      try {
        Ie = He("");
      } catch (B) {
        throw ve = A, B;
      }
    } else c.TRUSTED_TYPES_POLICY === null ? (ve = void 0, Ie = "") : (ve === void 0 && (ve = ue()), ve && typeof Ie == "string" && (Ie = He("")));
    je && je(c), Tr = c;
  }, ro = me({}, [...yi, ...gi, ...Nu]), no = me({}, [..._i, ...Pu]), Nl = function(c, g, A) {
    return g.namespaceURI === bt ? c === "svg" : g.namespaceURI === Qt ? c === "svg" && (A === "annotation-xml" || Xn[A]) : !!ro[c];
  }, Pl = function(c, g, A) {
    return g.namespaceURI === bt ? c === "math" : g.namespaceURI === or ? c === "math" && Jn[A] : !!no[c];
  }, kl = function(c, g, A) {
    return g.namespaceURI === or && !Jn[A] || g.namespaceURI === Qt && !Xn[A] ? !1 : !no[c] && (Al[c] || !ro[c]);
  }, Ml = function(c) {
    let g = ne(c);
    (!g || !g.tagName) && (g = {
      namespaceURI: Er,
      tagName: "template"
    });
    const A = qr(c.tagName), B = qr(g.tagName);
    return Yn[c.namespaceURI] ? c.namespaceURI === or ? Nl(A, g, B) : c.namespaceURI === Qt ? Pl(A, g, B) : c.namespaceURI === bt ? kl(A, g, B) : !!(Dr === "application/xhtml+xml" && Yn[c.namespaceURI]) : !1;
  }, er = function(c) {
    $r(t.removed, {
      element: c
    });
    try {
      ne(c).removeChild(c);
    } catch {
      if (re(c), !ne(c))
        throw cr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, io = function(c, g, A) {
    try {
      c.removeAttributeNode(g);
    } catch {
      try {
        c.removeAttribute(A);
      } catch {
      }
    }
  }, un = function(c) {
    fn(c);
    const g = oe(c);
    if (g) {
      const B = [];
      fr(g, (Y) => {
        $r(B, Y);
      }), fr(B, (Y) => {
        try {
          re(Y);
        } catch {
        }
      });
    }
    const A = D(c);
    if (A)
      for (let B = A.length - 1; B >= 0; --B) {
        const Y = A[B], ee = Y && Y.name;
        typeof ee == "string" && io(c, Y, ee);
      }
  }, sr = function(c, g, A) {
    if (!A)
      try {
        A = g.getAttributeNode(c);
      } catch {
        A = null;
      }
    $r(t.removed, {
      attribute: A || null,
      from: g
    });
    try {
      A ? g.removeAttributeNode(A) : g.removeAttribute(c);
    } catch {
      try {
        g.removeAttribute(c);
      } catch {
      }
    }
    if (c === "is")
      if (de || ke)
        try {
          er(g);
        } catch {
        }
      else
        try {
          g.setAttribute(c, "");
        } catch {
        }
  }, Ll = function(c) {
    const g = D(c);
    if (g)
      for (let A = g.length - 1; A >= 0; --A) {
        const B = g[A], Y = B && B.name;
        typeof Y != "string" || T[Le(Y)] || io(c, B, Y);
      }
  }, fn = function(c) {
    const g = [c];
    for (; g.length > 0; ) {
      const A = g.pop();
      Re(A) === yt.element && Ll(A);
      const Y = oe(A);
      if (Y)
        for (let ee = Y.length - 1; ee >= 0; --ee)
          g.push(Y[ee]);
    }
  }, oo = function(c, g) {
    return N ? c === "patchsrc" ? !0 : c === "for" && g !== "label" && g !== "output" : !1;
  }, Il = function(c) {
    if (!N)
      return;
    const g = [c];
    for (; g.length > 0; ) {
      const A = g.pop(), B = Re(A);
      if (B === yt.processingInstruction || B === yt.comment && Ge(os, A.data)) {
        try {
          re(A);
        } catch {
        }
        continue;
      }
      if (B === yt.element) {
        const ee = A, Ce = Le(Ve(A));
        try {
          ee.hasAttribute && ee.hasAttribute("patchsrc") && ee.removeAttribute("patchsrc"), ee.hasAttribute && ee.hasAttribute("for") && oo("for", Ce) && ee.removeAttribute("for");
        } catch {
        }
      }
      const Y = oe(A);
      if (Y)
        for (let ee = Y.length - 1; ee >= 0; --ee)
          g.push(Y[ee]);
    }
  }, so = function(c) {
    let g = null, A = null;
    if (be)
      c = "<remove></remove>" + c;
    else {
      const ee = Yo(c, /^[\r\n\t ]+/);
      A = ee && ee[0];
    }
    Dr === "application/xhtml+xml" && Er === bt && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const B = ve ? He(c) : c;
    if (Er === bt)
      try {
        g = new b().parseFromString(B, Dr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = De.createDocument(Er, "template", null);
      try {
        g.documentElement.innerHTML = Gn ? Ie : B;
      } catch {
      }
    }
    const Y = g.body || g.documentElement;
    return c && A && Y.insertBefore(r.createTextNode(A), Y.childNodes[0] || null), Er === bt ? $e.call(g, R ? "html" : "body")[0] : R ? g.documentElement : Y;
  }, lo = function(c) {
    const g = Pe ? Pe(c) : c.ownerDocument;
    return dt.call(
      g || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, dn = function(c) {
    return c = jr(c, Pt, " "), c = jr(c, Be, " "), c = jr(c, Et, " "), c;
  }, Qn = function(c) {
    var g;
    c.normalize();
    const A = Pe ? Pe(c) : c.ownerDocument, B = dt.call(
      A || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Y = B.nextNode();
    for (; Y; )
      Y.data = dn(Y.data), Y = B.nextNode();
    const ee = (g = c.querySelectorAll) === null || g === void 0 ? void 0 : g.call(c, "template");
    ee && fr(ee, (Ce) => {
      Sr(Ce.content) && Qn(Ce.content);
    });
  }, pn = function(c) {
    const g = ce ? ce(c) : null;
    return typeof g != "string" || Le(g) !== "form" ? !1 : typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    c.attributes !== D(c) || typeof c.removeAttribute != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    c.nodeType !== V(c) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    c.childNodes !== oe(c);
  }, Sr = function(c) {
    if (!V || typeof c != "object" || c === null)
      return !1;
    try {
      return V(c) === yt.documentFragment;
    } catch {
      return !1;
    }
  }, Ur = function(c) {
    if (!V || typeof c != "object" || c === null)
      return !1;
    try {
      return typeof V(c) == "number";
    } catch {
      return !1;
    }
  };
  function Lt(U, c, g) {
    U.length !== 0 && fr(U, (A) => {
      A.call(t, c, g, Tr);
    });
  }
  const Dl = function(c, g) {
    return !!(N && c.hasChildNodes() && !Ur(c.firstElementChild) && Ge(is, c.textContent) && Ge(is, c.innerHTML) || N && c.namespaceURI === bt && Bu[g] && (Ur(c.firstElementChild) || typeof c.textContent == "string" && Ge(zu[g], c.textContent)) || c.nodeType === yt.processingInstruction || N && c.nodeType === yt.comment && Ge(os, c.data));
  }, hn = function(c, g) {
    if (c instanceof RegExp)
      return Ge(c, g);
    if (c instanceof Function) {
      for (var A = arguments.length, B = new Array(A > 2 ? A - 2 : 0), Y = 2; Y < A; Y++)
        B[Y - 2] = arguments[Y];
      return !!c(g, ...B);
    }
    return !1;
  }, Ul = function(c, g, A) {
    if (!M[g] && po(g) && hn(I.tagNameCheck, g))
      return !1;
    if (F && !pe[g]) {
      const B = ne(c), Y = oe(c);
      if (Y && B) {
        const ee = Y.length;
        for (let Ce = ee - 1; Ce >= 0; --Ce) {
          const Ne = c === A ? j(Y[Ce], !0) : Y[Ce];
          B.insertBefore(Ne, q(c));
        }
      }
    }
    return er(c), !0;
  }, ao = function(c, g, A, B) {
    return c.length === 0 ? g : g === A || g === B ? gt(g) : g;
  }, co = function(c, g) {
    return c === g || ne(c) !== null ? !1 : (k && fn(c), !0);
  }, uo = function(c, g) {
    if (Lt(fe.beforeSanitizeElements, c, null), co(c, g))
      return !0;
    if (pn(c))
      return er(c), !0;
    const A = Le(Ve(c));
    if (_ = ao(fe.uponSanitizeElement, _, x, J), Lt(fe.uponSanitizeElement, c, {
      tagName: A,
      allowedTags: _
    }), co(c, g))
      return !0;
    if (Dl(c, A))
      return er(c), !0;
    if (M[A] || !(S.tagCheck instanceof Function && S.tagCheck(A)) && !_[A]) {
      const Y = Ul(c, A, g);
      return Y === !1 && Lt(fe.afterSanitizeElements, c, null), Y;
    }
    if (Re(c) === yt.element && !Ml(c) || (A === "noscript" || A === "noembed" || A === "noframes") && Ge(ju, c.innerHTML))
      return er(c), !0;
    if (Z && c.nodeType === yt.text) {
      const Y = dn(c.textContent);
      c.textContent !== Y && ($r(t.removed, {
        element: c.cloneNode()
      }), c.textContent = Y);
    }
    return Lt(fe.afterSanitizeElements, c, null), !1;
  }, fo = function(c, g, A) {
    if (L[g] || oo(g, c) || Oe && (g === "id" || g === "name") && (A in r || A in Ol))
      return !1;
    const B = T[g] || S.attributeCheck instanceof Function && S.attributeCheck(g, c);
    return H && Ge(Tt, g) || K && Ge(kt, g) ? !0 : B ? Mt[g] || Ge(m, jr(A, ht, "")) || (g === "src" || g === "xlink:href" || g === "href") && c !== "script" && Xo(A, "data:") === 0 && mt[c] || W && !Ge(Qe, jr(A, ht, "")) ? !0 : !A : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      po(c) && hn(I.tagNameCheck, c) && hn(I.attributeNameCheck, g, c) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && I.allowCustomizedBuiltInElements && hn(I.tagNameCheck, A)
    );
  }, Fl = me({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), po = function(c) {
    return !Fl[qr(c)] && Ge(d, c);
  }, Hl = function(c, g, A, B) {
    if (ve && typeof E == "object" && typeof E.getAttributeType == "function" && !A)
      switch (E.getAttributeType(c, g)) {
        case "TrustedHTML":
          return He(B);
        case "TrustedScriptURL":
          return we(B);
      }
    return B;
  }, $l = function(c, g, A, B) {
    try {
      A ? c.setAttributeNS(A, g, B) : c.setAttribute(g, B), pn(c) ? er(c) : Go(t.removed);
    } catch {
      sr(g, c);
    }
  }, ho = function(c) {
    Lt(fe.beforeSanitizeAttributes, c, null);
    const g = c.attributes;
    if (!g || pn(c))
      return;
    T = ao(fe.uponSanitizeAttribute, T, C, ie);
    const A = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const Y = Le(c.nodeName);
    for (; B--; ) {
      const ee = g[B], Ce = ee.name, Ne = ee.namespaceURI, at = ee.value, ct = Le(Ce), ti = at;
      let tt = Ce === "value" ? ti : Su(ti);
      if (A.attrName = ct, A.attrValue = tt, A.keepAttr = !0, A.forceKeepAttr = void 0, Lt(fe.uponSanitizeAttribute, c, A), tt = A.attrValue, et && (ct === "id" || ct === "name") && Xo(tt, xt) !== 0 && (sr(Ce, c, ee), tt = xt + tt), N && Ge(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, tt)) {
        sr(Ce, c, ee);
        continue;
      }
      if (ct === "attributename" && Yo(tt, "href")) {
        sr(Ce, c, ee);
        continue;
      }
      if (!A.forceKeepAttr) {
        if (!A.keepAttr) {
          sr(Ce, c, ee);
          continue;
        }
        if (!X && Ge(Vu, tt)) {
          sr(Ce, c, ee);
          continue;
        }
        if (Z && (tt = dn(tt)), !fo(Y, ct, tt)) {
          sr(Ce, c, ee);
          continue;
        }
        tt = Hl(Y, ct, Ne, tt), tt !== ti && $l(c, Ce, Ne, tt);
      }
    }
    Lt(fe.afterSanitizeAttributes, c, null);
  }, mn = function(c) {
    let g = null;
    const A = lo(c);
    for (Lt(fe.beforeSanitizeShadowDOM, c, null); g = A.nextNode(); )
      if (Lt(fe.uponSanitizeShadowNode, g, null), uo(g, c), ho(g), Sr(g.content) && mn(g.content), Re(g) === yt.element) {
        const B = z(g);
        Sr(B) && (ei(B), mn(B));
      }
    Lt(fe.afterSanitizeShadowDOM, c, null);
  }, ei = function(c) {
    const g = [{
      node: c,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const A = g.pop();
      if (A.shadow) {
        mn(A.shadow);
        continue;
      }
      const B = A.node, ee = Re(B) === yt.element, Ce = oe(B);
      if (Ce)
        for (let Ne = Ce.length - 1; Ne >= 0; --Ne)
          g.push({
            node: Ce[Ne],
            shadow: null
          });
      if (ee) {
        const Ne = ce ? ce(B) : null;
        if (typeof Ne == "string" && Le(Ne) === "template") {
          const at = B.content;
          Sr(at) && g.push({
            node: at,
            shadow: null
          });
        }
      }
      if (ee) {
        const Ne = z(B);
        Sr(Ne) && g.push({
          node: null,
          shadow: Ne
        }, {
          node: Ne,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(U) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, A = null, B = null, Y = null;
    if (Gn = !U, Gn && (U = "<!-->"), typeof U != "string" && !Ur(U) && (U = Ru(U), typeof U != "string"))
      throw cr("dirty is not a string, aborting");
    if (!t.isSupported)
      return U;
    $ ? (_ = J, T = ie) : Zn(c), (fe.uponSanitizeElement.length > 0 || fe.uponSanitizeAttribute.length > 0) && (_ = gt(_)), fe.uponSanitizeAttribute.length > 0 && (T = gt(T)), t.removed = [];
    const ee = k && typeof U != "string" && Ur(U);
    if (ee) {
      Il(U);
      const at = Ve(U);
      if (typeof at == "string") {
        const ct = Le(at);
        if (!_[ct] || M[ct])
          throw un(U), cr("root node is forbidden and cannot be sanitized in-place");
      }
      if (pn(U))
        throw un(U), cr("root node is clobbered and cannot be sanitized in-place");
      try {
        ei(U);
      } catch (ct) {
        throw un(U), ct;
      }
    } else if (Ur(U))
      g = so("<!---->"), A = g.ownerDocument.importNode(U, !0), A.nodeType === yt.element && A.nodeName === "BODY" || A.nodeName === "HTML" ? g = A : g.appendChild(A), ei(A);
    else {
      if (!de && !Z && !R && // eslint-disable-next-line unicorn/prefer-includes
      U.indexOf("<") === -1)
        return ve && Ae ? He(U) : U;
      if (g = so(U), !g)
        return de ? null : Ae ? Ie : "";
    }
    g && be && er(g.firstChild);
    const Ce = ee ? U : g;
    try {
      const at = lo(Ce);
      for (; B = at.nextNode(); )
        uo(B, Ce), ho(B), Sr(B.content) && mn(B.content);
    } catch (at) {
      throw ee && (un(U), fr(t.removed, (ct) => {
        ct.element && fn(ct.element);
      })), at;
    }
    if (ee)
      return fr(t.removed, (at) => {
        at.element && fn(at.element);
      }), Z && Qn(U), U;
    if (de) {
      if (Z && Qn(g), ke)
        for (Y = Ue.call(g.ownerDocument); g.firstChild; )
          Y.appendChild(g.firstChild);
      else
        Y = g;
      return (T.shadowroot || T.shadowrootmode) && (Y = pt.call(n, Y, !0)), Y;
    }
    let Ne = R ? g.outerHTML : g.innerHTML;
    return R && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Ge(Hu, g.ownerDocument.doctype.name) && (Ne = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Ne), Z && (Ne = dn(Ne)), ve && Ae ? He(Ne) : Ne;
  }, t.setConfig = function() {
    let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zn(U), $ = !0, J = _, ie = T;
  }, t.clearConfig = function() {
    Tr = null, $ = !1, J = null, ie = null, ve = Ze, Ie = "";
  }, t.isValidAttribute = function(U, c, g) {
    Tr || Zn({});
    const A = Le(U), B = Le(c);
    return fo(A, B, g);
  }, t.addHook = function(U, c) {
    typeof c == "function" && ft(fe, U) && $r(fe[U], c);
  }, t.removeHook = function(U, c) {
    if (ft(fe, U)) {
      if (c !== void 0) {
        const g = Eu(fe[U], c);
        return g === -1 ? void 0 : Tu(fe[U], g, 1)[0];
      }
      return Go(fe[U]);
    }
  }, t.removeHooks = function(U) {
    ft(fe, U) && (fe[U] = []);
  }, t.removeAllHooks = function() {
    fe = ss();
  }, t;
}
var Ku = Sl();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ti, ls;
function Yu() {
  if (ls) return Ti;
  ls = 1;
  var e = /["'&<>]/;
  Ti = t;
  function t(r) {
    var n = "" + r, i = e.exec(n);
    if (!i)
      return n;
    var o, s = "", l = 0, f = 0;
    for (l = i.index; l < n.length; l++) {
      switch (n.charCodeAt(l)) {
        case 34:
          o = "&quot;";
          break;
        case 38:
          o = "&amp;";
          break;
        case 39:
          o = "&#39;";
          break;
        case 60:
          o = "&lt;";
          break;
        case 62:
          o = "&gt;";
          break;
        default:
          continue;
      }
      f !== l && (s += n.substring(f, l)), f = l + 1, s += o;
    }
    return f !== l ? s + n.substring(f, l) : s;
  }
  return Ti;
}
var Xu = Yu();
const as = /* @__PURE__ */ Gu(Xu);
globalThis._nc_l10n_locale ??= typeof document < "u" && document.documentElement.dataset.locale || Intl.DateTimeFormat().resolvedOptions().locale.replaceAll(/-/g, "_");
globalThis._nc_l10n_language ??= typeof document < "u" && document.documentElement.lang || (globalThis.navigator?.language ?? "en");
function Ju(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function a(e, t, r, n, i) {
  const o = typeof r == "object" ? r : void 0, s = typeof n == "number" ? n : typeof r == "number" ? r : void 0, l = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, f = (q) => q, v = (l.sanitize ? Ku.sanitize : f) || f, b = l.escape ? as : f, E = (q) => typeof q == "string" || typeof q == "number", P = (q, oe, ne) => q.replace(/%n/g, "" + ne).replace(/{([^{}]*)}/g, (z, D) => {
    if (oe === void 0 || !(D in oe))
      return b(z);
    const V = oe[D];
    return E(V) ? b(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? as : f)(`${V.value}`) : b(z);
  });
  let re = (i?.bundle ?? Ju(e)).translations[t] || t;
  return re = Array.isArray(re) ? re[0] : re, v(typeof o == "object" || s !== void 0 ? P(
    re,
    o,
    s
  ) : re);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ef = { class: "library-catalogue-header" }, tf = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rf = { id: "library-catalogue-heading" }, nf = { class: "library-muted" }, of = ["aria-label"], sf = { class: "library-catalogue-actions-menu" }, lf = { class: "library-catalogue-actions-list" }, af = ["href"], cf = ["href"], uf = ["href"], ff = ["href"], df = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, pf = ["aria-label"], hf = ["name", "value"], mf = { class: "library-quick-search-row" }, bf = { class: "library-quick-filter-search" }, yf = ["aria-label"], gf = { class: "library-quick-filter-options" }, _f = { class: "library-quick-filter-option-grid" }, vf = { value: "title" }, Ef = { value: "recent" }, Tf = { value: "publicationDate" }, Sf = { value: "publication" }, Cf = { value: "lastOpened" }, xf = { value: "format" }, Af = { value: "" }, wf = { value: "1" }, Rf = ["value"], Of = ["value"], Nf = ["aria-label"], Pf = ["aria-label"], kf = { class: "library-filter-panel" }, Mf = { class: "library-filter-panel-summary" }, Lf = ["aria-label"], If = { value: "" }, Df = ["value"], Uf = { value: "" }, Ff = ["value"], Hf = { value: "" }, $f = ["value"], jf = { value: "" }, Vf = ["value"], Bf = { value: "" }, zf = ["value"], Wf = { value: "" }, qf = ["value"], Kf = { value: "" }, Gf = ["value"], Yf = { value: "" }, Xf = ["value"], Jf = { value: "" }, Zf = ["value"], Qf = { value: "" }, ed = ["value"], td = { value: "" }, rd = { value: "1" }, nd = { value: "" }, id = { value: "1" }, od = { value: "title" }, sd = { value: "recent" }, ld = { value: "publicationDate" }, ad = { value: "publication" }, cd = { value: "lastOpened" }, ud = { value: "format" }, fd = ["value"], dd = ["value"], pd = ["aria-label"], hd = ["aria-label"], md = ["href"], bd = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, yd = { class: "library-muted library-catalogue-eyebrow" }, gd = { id: "library-discovery-heading" }, _d = { class: "library-muted" }, vd = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Ed = { key: 0 }, Td = { key: 1 }, Sd = { key: 2 }, Cd = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, xd = { key: 0 }, Ad = { key: 1 }, wd = {
  href: "/apps/library/",
  class: "button secondary"
}, Rd = {
  key: 2,
  class: "library-import-health-panel",
  "aria-labelledby": "library-import-health-heading"
}, Od = { class: "library-import-health-header" }, Nd = { class: "library-muted library-catalogue-eyebrow" }, Pd = { id: "library-import-health-heading" }, kd = { class: "library-muted" }, Md = ["href"], Ld = { class: "library-import-health-grid" }, Id = { class: "library-import-health-card" }, Dd = { class: "library-import-health-number" }, Ud = { class: "library-import-health-card" }, Fd = { class: "library-import-health-number" }, Hd = { class: "library-import-health-card" }, $d = { class: "library-muted" }, jd = {
  key: 0,
  class: "library-import-health-examples"
}, Vd = { class: "library-catalogue-status-row" }, Bd = { class: "library-muted library-filter-result-summary" }, zd = { key: 0 }, Wd = { href: "?" }, qd = ["aria-label"], Kd = { class: "library-pagination-range" }, Gd = { key: 0 }, Yd = ["href"], Xd = {
  key: 1,
  class: "library-muted"
}, Jd = ["href"], Zd = {
  key: 3,
  class: "library-muted"
}, Qd = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, ep = ["aria-label"], tp = { class: "library-settings-count-badge" }, rp = ["action"], np = ["value"], ip = ["name", "value"], op = ["placeholder"], sp = {
  type: "submit",
  class: "button primary"
}, lp = { class: "library-muted" }, ap = ["action"], cp = ["value"], up = ["name", "value"], fp = ["placeholder"], dp = {
  type: "submit",
  class: "button secondary"
}, pp = { class: "library-muted" }, hp = ["action"], mp = ["value"], bp = ["name", "value"], yp = {
  type: "submit",
  class: "button secondary"
}, gp = { class: "library-muted" }, _p = ["action"], vp = ["value"], Ep = ["name", "value"], Tp = { name: "bulkEditField" }, Sp = { value: "publicationType" }, Cp = { value: "subtitle" }, xp = { value: "creators" }, Ap = { value: "publication" }, wp = { value: "publicationDate" }, Rp = { value: "language" }, Op = { value: "publisher" }, Np = { value: "genres" }, Pp = { value: "classifications" }, kp = {
  type: "submit",
  class: "button secondary"
}, Mp = { class: "library-muted" }, Lp = ["action"], Ip = ["value"], Dp = ["name", "value"], Up = {
  type: "submit",
  class: "button secondary"
}, Fp = { class: "library-muted" }, Hp = { class: "library-discovery-shortcuts" }, $p = { class: "library-discovery-shortcut-grid" }, jp = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Vp = { id: "library-periodical-groups-heading" }, Bp = { class: "library-muted" }, zp = ["href"], Wp = { class: "library-muted" }, qp = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Kp = { id: "library-periodical-groups-empty-heading" }, Gp = { class: "library-muted" }, Yp = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, Xp = { id: "library-year-groups-heading" }, Jp = ["href"], Zp = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, Qp = { id: "library-creator-groups-heading" }, eh = ["href"], th = ["aria-label"], rh = ["href", "aria-label"], nh = { class: "library-muted" }, ih = { class: "library-empty-actions" }, oh = ["href"], sh = { class: "library-muted" }, lh = { class: "library-muted" }, ah = { class: "library-empty-actions" }, ch = ["href"], uh = { class: "library-muted" }, fh = { class: "library-empty-actions" }, dh = ["href"], ph = {
  href: "?",
  class: "button primary"
}, hh = { class: "library-muted" }, mh = { class: "library-empty-actions" }, bh = ["href"], yh = {
  key: 5,
  class: "library-cover-gallery"
}, gh = ["href", "aria-label"], _h = ["src", "alt"], vh = ["action", "onSubmit"], Eh = ["value"], Th = ["value"], Sh = ["aria-pressed", "title", "aria-label", "onClick"], Ch = { class: "library-cover-summary" }, xh = { class: "library-cover-primary" }, Ah = ["aria-label"], wh = ["href"], Rh = ["onToggle"], Oh = ["aria-label"], Nh = { class: "library-cover-meta" }, Ph = {
  key: 0,
  class: "library-creator"
}, kh = { class: "library-cover-detail-list" }, Mh = { class: "library-cover-detail-chip" }, Lh = {
  key: 0,
  class: "library-cover-detail-chip"
}, Ih = {
  key: 1,
  class: "library-cover-detail-chip"
}, Dh = {
  key: 2,
  class: "library-cover-detail-chip"
}, Uh = {
  key: 3,
  class: "library-cover-detail-chip"
}, Fh = {
  key: 4,
  class: "library-cover-detail-chip"
}, Hh = {
  key: 5,
  class: "library-cover-detail-chip"
}, $h = {
  key: 6,
  class: "library-cover-detail-chip"
}, jh = {
  key: 1,
  class: "library-muted library-cover-description"
}, Vh = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Bh = { key: 0 }, zh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Wh = {
  key: 0,
  class: "library-muted"
}, qh = { class: "library-cover-actions" }, Kh = ["href"], Gh = ["href"], Yh = ["href"], Xh = ["aria-label"], Jh = { class: "library-pagination-range" }, Zh = { key: 0 }, Qh = ["href"], em = {
  key: 1,
  class: "library-muted"
}, tm = ["href"], rm = {
  key: 3,
  class: "library-muted"
}, nm = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], i = /* @__PURE__ */ pr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), o = /* @__PURE__ */ pr((i.items || []).map((F) => ({ ...F }))), s = te(() => o), l = te(() => i.shelves || []), f = te(() => i.formats || []), v = te(() => i.publications || []), b = te(() => i.publicationSummaries || []), E = te(() => i.publicationIssueContext || null), P = te(() => i.publicationYears || []), j = te(() => i.creators || []), re = te(() => i.scanStatuses || []), q = te(() => i.workflowStatuses || []), oe = te(() => i.genres || []), ne = te(() => i.classifications || []), z = te(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), D = /* @__PURE__ */ pr({
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
    }), V = te(() => i.settingsUrl || ""), ce = te(() => i.requestToken || ""), Pe = te(() => i.metadataExportUrl || ""), Re = te(() => i.metadataSidecarManifestUrl || ""), Ve = te(() => i.metadataSidecarBundleUrl || ""), ve = te(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), Ie = te(() => i.batchTagUrl || "/apps/library/bulk/tags"), Ze = te(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), st = te(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), qe = te(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), vt = te(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), He = te(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), we = te(() => i.importHealthSummary || {}), ue = te(() => i.metadataErrorReview || we.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), se = te(() => i.archiveMagicSummary || we.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), De = te(() => i.coverHealthSummary || we.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), dt = te(() => Number(ue.value.total || 0) > 0 || Number(se.value.mismatches || 0) > 0 || (De.value.byFormat || []).some((F) => F.nextcloudPreview !== "expected-ok" || F.libraryCoverRoute !== "expected-ok")), Ue = te(() => i.discoveryPage === "publication"), $e = te(() => i.discoveryPage === "year"), pt = te(() => i.discoveryPage === "creator"), fe = te(() => Ue.value || $e.value || pt.value), Pt = te(() => i.discoveryTitle || D.publication || D.year || D.creator || ""), Be = te(() => fe.value ? Pt.value : a("library", "Publication catalogue")), Et = te(() => pt.value ? a("library", "Creator") : $e.value ? a("library", "Publication year") : a("library", "Publication / series")), Tt = te(() => Number(i.rootCount || 0)), kt = te(() => Number(i.enabledRootCount || 0)), Qe = te(() => Tt.value === 0), ht = te(() => Tt.value > 0 && kt.value === 0), d = te(() => x.value.length > 0), m = {
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
    }, _ = te(() => {
      if (typeof window > "u") return "";
      const F = new URLSearchParams(window.location.search);
      if (F.get("batchMetadataApplyResult") !== "1") return "";
      const k = F.get("batchMetadataField") || "field", h = F.get("batchMetadataApplied") || "0", pe = F.get("batchMetadataUnchanged") || "0", lt = F.get("batchMetadataSkipped") || "0";
      return a("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: k, unchanged: pe, skipped: lt });
    }), x = te(() => Object.entries(m).map(([F, k]) => ({ key: F, label: k, value: D[F] || "" })).filter((F) => String(F.value).trim() !== "")), T = te(() => Object.entries(D).filter(([F, k]) => !["q", "sort", "starred"].includes(F) && String(k || "").trim() !== "").map(([F, k]) => ({ key: F, value: k }))), C = te(() => Object.entries(D).filter(([F, k]) => String(k || "").trim() !== "").map(([F, k]) => ({ key: F, value: k }))), I = /* @__PURE__ */ pr({}), M = /* @__PURE__ */ va(null);
    let L = null;
    function S(F) {
      const k = new URLSearchParams(new FormData(F));
      for (const h of Array.from(k.keys()))
        String(k.get(h) || "").trim() === "" && k.delete(h);
      return k.delete("page"), k;
    }
    function K(F) {
      o.splice(0, o.length, ...(F.items || []).map((k) => ({ ...k })));
      for (const k of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "importHealthSummary", "metadataErrorReview", "archiveMagicSummary", "coverHealthSummary"])
        Object.prototype.hasOwnProperty.call(F, k) && (i[k] = F[k]);
      Object.assign(D, F.activeFilters || {});
    }
    async function H(F) {
      const k = F?.currentTarget?.tagName === "FORM" ? F.currentTarget : F?.currentTarget?.form;
      if (!k) return;
      const pe = S(k).toString(), lt = pe ? `?${pe}` : "", mt = await fetch(ve.value + lt, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!mt.ok) {
        k.submit();
        return;
      }
      K(await mt.json()), history.replaceState({}, "", pe ? `?${pe}` : window.location.pathname);
    }
    function W(F) {
      H(F);
    }
    function X(F) {
      window.clearTimeout(L), L = window.setTimeout(() => W(F), 350);
    }
    function Z(F) {
      const k = new URLSearchParams();
      for (const [pe, lt] of Object.entries(D)) {
        const mt = String(lt || "").trim();
        mt !== "" && pe !== F && !(pe === "sort" && mt === "title") && k.set(pe, mt);
      }
      const h = k.toString();
      return h ? `?${h}` : "?";
    }
    function N() {
      return Z("q");
    }
    function R(F) {
      return String(F || "").toUpperCase();
    }
    function $(F) {
      return F.nextcloudTags || [];
    }
    function J(F) {
      return b.value.find((h) => h.publication === F)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(F)}`;
    }
    function ie(F) {
      return i.publicationYearLandingUrls?.[F] || `/apps/library/years/${encodeURIComponent(F)}`;
    }
    function be(F) {
      return i.creatorLandingUrls?.[F] || `/apps/library/creators/${encodeURIComponent(F)}`;
    }
    function de(F, k) {
      I[F] = !!k?.currentTarget?.open;
    }
    function ke(F) {
      const k = String(F?.tagName || "").toLowerCase();
      return F?.isContentEditable || ["input", "select", "textarea", "button"].includes(k);
    }
    function Ae(F) {
      F.key !== "/" || F.metaKey || F.ctrlKey || F.altKey || F.shiftKey || ke(F.target) || (F.preventDefault(), M.value?.focus(), M.value?.select?.());
    }
    function Oe(F) {
      F.key !== "Escape" || document.activeElement !== M.value || D.q === "" || (F.preventDefault(), D.q = "", M.value.value = "", window.clearTimeout(L), W({ currentTarget: M.value }));
    }
    function et(F) {
      Ae(F), Oe(F);
    }
    Ks(() => {
      window.addEventListener("keydown", et);
    }), Gs(() => {
      window.removeEventListener("keydown", et);
    });
    async function xt(F, k) {
      const h = k?.currentTarget?.closest?.("form") || k?.currentTarget;
      if (!h || !F?.starUrl) return;
      const pe = !!F.starred;
      F.starred = !pe;
      try {
        (await fetch(F.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (F.starred = pe);
      } catch {
        F.starred = pe;
      }
    }
    return (F, k) => (w(), O("div", Zu, [
      u("section", Qu, [
        u("div", ef, [
          u("div", null, [
            fe.value ? (w(), O("p", tf, p(Et.value), 1)) : he("", !0),
            u("h2", rf, p(Be.value), 1),
            u("p", nf, p(fe.value ? y(a)("library", "Browse this focused view; use filters only when you need to narrow it further.") : y(a)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          u("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": y(a)("library", "Library actions")
          }, [
            u("details", sf, [
              u("summary", null, p(y(a)("library", "Actions")), 1),
              u("div", lf, [
                u("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, p(y(a)("library", "Settings")), 9, af),
                Pe.value ? (w(), O("a", {
                  key: 0,
                  href: Pe.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, p(y(a)("library", "Export corrected metadata")), 9, cf)) : he("", !0),
                Re.value ? (w(), O("a", {
                  key: 1,
                  href: Re.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, p(y(a)("library", "Sidecar manifest")), 9, uf)) : he("", !0),
                Ve.value ? (w(), O("a", {
                  key: 2,
                  href: Ve.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, p(y(a)("library", "Sidecar ZIP")), 9, ff)) : he("", !0)
              ])
            ])
          ], 8, of)
        ]),
        _.value ? (w(), O("p", df, p(_.value), 1)) : he("", !0),
        u("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": y(a)("library", "Quick catalogue filters"),
          onSubmit: En(H, ["prevent"])
        }, [
          (w(!0), O(ae, null, Ee(T.value, (h) => (w(), O("input", {
            key: h.key,
            type: "hidden",
            name: h.key,
            value: h.value
          }, null, 8, hf))), 128)),
          u("div", mf, [
            u("label", bf, [
              u("span", null, [
                ye(p(y(a)("library", "Search")) + " ", 1),
                k[18] || (k[18] = u("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              ze(u("input", {
                ref_key: "quickSearchInput",
                ref: M,
                "onUpdate:modelValue": k[0] || (k[0] = (h) => D.q = h),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex...",
                onInput: X
              }, null, 544), [
                [mi, D.q]
              ])
            ]),
            u("button", {
              type: "submit",
              class: "button primary",
              "aria-label": y(a)("library", "Search catalogue")
            }, p(y(a)("library", "Search")), 9, yf)
          ]),
          u("details", gf, [
            u("summary", null, p(y(a)("library", "Filter & sort")), 1),
            u("div", _f, [
              u("label", null, [
                ye(p(y(a)("library", "Sort")) + " ", 1),
                ze(u("select", {
                  "onUpdate:modelValue": k[1] || (k[1] = (h) => D.sort = h),
                  name: "sort",
                  onChange: H
                }, [
                  u("option", vf, p(y(a)("library", "Title")), 1),
                  u("option", Ef, p(y(a)("library", "Recently added")), 1),
                  u("option", Tf, p(y(a)("library", "Publication date")), 1),
                  u("option", Sf, p(y(a)("library", "Series")), 1),
                  u("option", Cf, p(y(a)("library", "Recently opened")), 1),
                  u("option", xf, p(y(a)("library", "Format")), 1)
                ], 544), [
                  [rt, D.sort]
                ])
              ]),
              u("label", null, [
                ye(p(y(a)("library", "Starred")) + " ", 1),
                ze(u("select", {
                  "onUpdate:modelValue": k[2] || (k[2] = (h) => D.starred = h),
                  name: "starred",
                  onChange: H
                }, [
                  u("option", Af, p(y(a)("library", "All")), 1),
                  u("option", wf, p(y(a)("library", "Starred")), 1)
                ], 544), [
                  [rt, D.starred]
                ])
              ]),
              u("label", null, [
                ye(p(y(a)("library", "Size")) + " ", 1),
                u("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: H
                }, [
                  (w(), O(ae, null, Ee(n, (h) => u("option", {
                    key: h,
                    value: h
                  }, p(h), 9, Of)), 64))
                ], 40, Rf)
              ]),
              u("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": y(a)("library", "Apply catalogue filters")
              }, p(y(a)("library", "Apply filters")), 9, Nf),
              u("a", {
                href: "?",
                class: "button secondary",
                "aria-label": y(a)("library", "Clear catalogue filters")
              }, p(y(a)("library", "Clear all")), 9, Pf)
            ])
          ])
        ], 40, pf),
        u("details", kf, [
          u("summary", Mf, p(y(a)("library", "Show catalogue filters")), 1),
          u("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": y(a)("library", "Catalogue search and filters"),
            onSubmit: En(H, ["prevent"])
          }, [
            u("label", null, [
              ye(p(y(a)("library", "Search title / author")) + " ", 1),
              ze(u("input", {
                "onUpdate:modelValue": k[3] || (k[3] = (h) => D.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, D.q]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Type")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[4] || (k[4] = (h) => D.type = h),
                name: "type"
              }, [
                u("option", If, p(y(a)("library", "All types")), 1),
                (w(), O(ae, null, Ee(r, (h) => u("option", {
                  key: h,
                  value: h
                }, p(h), 9, Df)), 64))
              ], 512), [
                [rt, D.type]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Series / periodical")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[5] || (k[5] = (h) => D.publication = h),
                name: "publication"
              }, [
                u("option", Uf, p(y(a)("library", "All series and periodicals")), 1),
                (w(!0), O(ae, null, Ee(v.value, (h) => (w(), O("option", {
                  key: h,
                  value: h
                }, p(h), 9, Ff))), 128))
              ], 512), [
                [rt, D.publication]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Publication year")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[6] || (k[6] = (h) => D.year = h),
                name: "year"
              }, [
                u("option", Hf, p(y(a)("library", "All years")), 1),
                (w(!0), O(ae, null, Ee(P.value, (h) => (w(), O("option", {
                  key: h,
                  value: h
                }, p(h), 9, $f))), 128))
              ], 512), [
                [rt, D.year]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Creator")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[7] || (k[7] = (h) => D.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                u("option", jf, p(y(a)("library", "All creators")), 1),
                (w(!0), O(ae, null, Ee(j.value, (h) => (w(), O("option", {
                  key: h,
                  value: h
                }, p(h), 9, Vf))), 128))
              ], 512), [
                [rt, D.creator]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Nextcloud tag")) + " ", 1),
              ze(u("input", {
                "onUpdate:modelValue": k[8] || (k[8] = (h) => D.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, D.tag]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Format")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[9] || (k[9] = (h) => D.format = h),
                name: "format"
              }, [
                u("option", Bf, p(y(a)("library", "All formats")), 1),
                (w(!0), O(ae, null, Ee(f.value, (h) => (w(), O("option", {
                  key: h,
                  value: h
                }, p(R(h)), 9, zf))), 128))
              ], 512), [
                [rt, D.format]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Shelf")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[10] || (k[10] = (h) => D.shelf = h),
                name: "shelf"
              }, [
                u("option", Wf, p(y(a)("library", "All shelves")), 1),
                (w(!0), O(ae, null, Ee(l.value, (h) => (w(), O("option", {
                  key: h,
                  value: h
                }, p(h), 9, qf))), 128))
              ], 512), [
                [rt, D.shelf]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Scan status")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[11] || (k[11] = (h) => D.status = h),
                name: "status"
              }, [
                u("option", Kf, p(y(a)("library", "All scan statuses")), 1),
                (w(!0), O(ae, null, Ee(re.value, (h) => (w(), O("option", {
                  key: h,
                  value: h
                }, p(h), 9, Gf))), 128))
              ], 512), [
                [rt, D.status]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Workflow status")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[12] || (k[12] = (h) => D.workflowStatus = h),
                name: "workflowStatus"
              }, [
                u("option", Yf, p(y(a)("library", "All workflow statuses")), 1),
                (w(!0), O(ae, null, Ee(q.value, (h) => (w(), O("option", {
                  key: h,
                  value: h
                }, p(h), 9, Xf))), 128))
              ], 512), [
                [rt, D.workflowStatus]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Genre")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[13] || (k[13] = (h) => D.genre = h),
                name: "genre"
              }, [
                u("option", Jf, p(y(a)("library", "All genres")), 1),
                (w(!0), O(ae, null, Ee(oe.value, (h) => (w(), O("option", {
                  key: h,
                  value: h
                }, p(h), 9, Zf))), 128))
              ], 512), [
                [rt, D.genre]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Classification")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[14] || (k[14] = (h) => D.classification = h),
                name: "classification"
              }, [
                u("option", Qf, p(y(a)("library", "All classifications")), 1),
                (w(!0), O(ae, null, Ee(ne.value, (h) => (w(), O("option", {
                  key: h,
                  value: h
                }, p(h), 9, ed))), 128))
              ], 512), [
                [rt, D.classification]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Scanner conflicts")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[15] || (k[15] = (h) => D.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                u("option", td, p(y(a)("library", "All metadata")), 1),
                u("option", rd, p(y(a)("library", "Needs review")), 1)
              ], 512), [
                [rt, D.scannerConflicts]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Starred")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[16] || (k[16] = (h) => D.starred = h),
                name: "starred"
              }, [
                u("option", nd, p(y(a)("library", "All publications")), 1),
                u("option", id, p(y(a)("library", "Starred only")), 1)
              ], 512), [
                [rt, D.starred]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Sort")) + " ", 1),
              ze(u("select", {
                "onUpdate:modelValue": k[17] || (k[17] = (h) => D.sort = h),
                name: "sort"
              }, [
                u("option", od, p(y(a)("library", "Title")), 1),
                u("option", sd, p(y(a)("library", "Recently added")), 1),
                u("option", ld, p(y(a)("library", "Publication date")), 1),
                u("option", ad, p(y(a)("library", "Series / periodical")), 1),
                u("option", cd, p(y(a)("library", "Recently opened")), 1),
                u("option", ud, p(y(a)("library", "Format")), 1)
              ], 512), [
                [rt, D.sort]
              ])
            ]),
            u("label", null, [
              ye(p(y(a)("library", "Page size")) + " ", 1),
              u("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (w(), O(ae, null, Ee(n, (h) => u("option", {
                  key: h,
                  value: h
                }, p(h), 9, dd)), 64))
              ], 8, fd)
            ]),
            u("button", {
              type: "submit",
              class: "button primary",
              "aria-label": y(a)("library", "Apply catalogue filters")
            }, p(y(a)("library", "Apply filters")), 9, pd),
            u("a", {
              href: "?",
              class: "button secondary",
              "aria-label": y(a)("library", "Clear catalogue filters")
            }, p(y(a)("library", "Clear")), 9, hd),
            u("a", {
              href: He.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, p(y(a)("library", "Review scanner conflicts")), 9, md)
          ], 40, Lf)
        ]),
        fe.value ? (w(), O("section", bd, [
          u("p", yd, p(Et.value), 1),
          u("h3", gd, p(Pt.value), 1),
          u("p", _d, p(pt.value ? y(a)("library", "Items by this creator, sorted by publication context when available.") : $e.value ? y(a)("library", "Items from this publication year, sorted by publication date when available.") : y(a)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          u("div", vd, [
            u("span", null, p(z.value.total) + " " + p(y(a)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (w(), O("span", Ed, p(E.value.earliestYear) + "–" + p(E.value.latestYear), 1)) : he("", !0),
            E.value?.datedCount ? (w(), O("span", Td, p(E.value.datedCount) + " " + p(y(a)("library", "dated")), 1)) : he("", !0),
            E.value?.undatedCount > 0 ? (w(), O("span", Sd, p(E.value.undatedCount) + " " + p(y(a)("library", "undated")), 1)) : he("", !0)
          ]),
          Ue.value && E.value ? (w(), O("aside", Cd, [
            u("strong", null, p(y(a)("library", "Publication contents")), 1),
            u("span", null, p(E.value.itemCount) + " " + p(y(a)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (w(), O("span", xd, p(E.value.earliestYear) + "–" + p(E.value.latestYear), 1)) : he("", !0),
            u("span", null, p(E.value.datedCount) + " " + p(y(a)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (w(), O("span", Ad, p(E.value.undatedCount) + " " + p(y(a)("library", "without dates yet")), 1)) : he("", !0)
          ])) : he("", !0),
          u("p", null, [
            u("a", wd, p(y(a)("library", "Back to full catalogue")), 1)
          ])
        ])) : he("", !0),
        dt.value ? (w(), O("section", Rd, [
          u("div", Od, [
            u("div", null, [
              u("p", Nd, p(y(a)("library", "Import health")), 1),
              u("h3", Pd, p(y(a)("library", "Real-file findings")), 1),
              u("p", kd, p(y(a)("library", "Metadata errors, archive/container mismatches, and cover risks from the current Library roots.")), 1)
            ]),
            u("a", {
              class: "button secondary",
              href: ue.value.reviewUrl || "?status=metadata_error"
            }, p(y(a)("library", "Review metadata errors")), 9, Md)
          ]),
          u("div", Ld, [
            u("article", Id, [
              u("h4", null, p(y(a)("library", "Metadata errors")), 1),
              u("p", Dd, p(ue.value.total || 0), 1),
              u("ul", null, [
                (w(!0), O(ae, null, Ee(ue.value.byExtension, (h) => (w(), O("li", {
                  key: h.extension
                }, p(R(h.extension)) + " · " + p(h.count), 1))), 128))
              ])
            ]),
            u("article", Ud, [
              u("h4", null, p(y(a)("library", "Archive/container check")), 1),
              u("p", Fd, p(se.value.mismatches || 0), 1),
              u("ul", null, [
                (w(!0), O(ae, null, Ee(se.value.byExtensionAndContainer, (h) => (w(), O("li", {
                  key: `${h.extension}-${h.actualContainerType}`
                }, p(R(h.extension)) + " · " + p(h.actualContainerType) + " · " + p(h.count), 1))), 128))
              ])
            ]),
            u("article", Hd, [
              u("h4", null, p(y(a)("library", "Cover health")), 1),
              u("p", $d, p(De.value.note), 1),
              u("ul", null, [
                (w(!0), O(ae, null, Ee(De.value.byFormat, (h) => (w(), O("li", {
                  key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}`
                }, p(R(h.extension)) + " · nextcloudPreview: " + p(h.nextcloudPreview) + " · libraryCoverRoute: " + p(h.libraryCoverRoute) + " · " + p(h.count), 1))), 128))
              ])
            ])
          ]),
          ue.value.examples?.length ? (w(), O("details", jd, [
            u("summary", null, p(y(a)("library", "Example files and suggested actions")), 1),
            u("ul", null, [
              (w(!0), O(ae, null, Ee(ue.value.examples, (h) => (w(), O("li", {
                key: `${h.fileId}-${h.path}`
              }, [
                u("code", null, p(h.path), 1),
                u("span", null, p(h.scanStatus) + " · " + p(h.scanError) + " · " + p(h.actualContainerType), 1),
                u("strong", null, p(h.suggestedRepairAction), 1)
              ]))), 128))
            ])
          ])) : he("", !0)
        ])) : he("", !0),
        u("div", Vd, [
          u("p", Bd, [
            ye(p(y(a)("library", "Showing")) + " " + p(z.value.from) + "–" + p(z.value.to) + " " + p(y(a)("library", "of")) + " " + p(z.value.total) + " " + p(y(a)("library", "catalogue items")), 1),
            x.value.length > 0 ? (w(), O("span", zd, [
              k[19] || (k[19] = ye(" · ", -1)),
              u("a", Wd, p(y(a)("library", "Clear all filters")), 1)
            ])) : he("", !0)
          ]),
          u("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": y(a)("library", "Catalogue pagination")
          }, [
            u("span", Kd, [
              ye(p(y(a)("library", "Page")) + " " + p(z.value.page), 1),
              z.value.total > 0 ? (w(), O("span", Gd, " · " + p(z.value.from) + "–" + p(z.value.to), 1)) : he("", !0)
            ]),
            z.value.previousUrl ? (w(), O("a", {
              key: 0,
              href: z.value.previousUrl
            }, p(y(a)("library", "Previous")), 9, Yd)) : (w(), O("span", Xd, p(y(a)("library", "Previous")), 1)),
            z.value.nextUrl ? (w(), O("a", {
              key: 2,
              href: z.value.nextUrl
            }, p(y(a)("library", "Next")), 9, Jd)) : (w(), O("span", Zd, p(y(a)("library", "Next")), 1))
          ], 8, qd)
        ]),
        u("div", Qd, [
          u("details", {
            class: "library-batch-actions",
            "aria-label": y(a)("library", "Batch actions for current results")
          }, [
            u("summary", null, [
              ye(p(y(a)("library", "Batch")) + " ", 1),
              u("span", tp, p(z.value.total) + " " + p(y(a)("library", "Current filter result")), 1)
            ]),
            u("form", {
              method: "post",
              action: Ie.value,
              class: "library-batch-tag-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, np),
              (w(!0), O(ae, null, Ee(C.value, (h) => (w(), O("input", {
                key: h.key,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, ip))), 128)),
              u("label", null, [
                u("span", null, p(y(a)("library", "Nextcloud tag")), 1),
                u("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: y(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, op)
              ]),
              u("button", sp, p(y(a)("library", "Apply Nextcloud tag to current results")), 1),
              u("p", lp, p(y(a)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, rp),
            u("form", {
              method: "post",
              action: Ze.value,
              class: "library-batch-tag-remove-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, cp),
              (w(!0), O(ae, null, Ee(C.value, (h) => (w(), O("input", {
                key: `remove-tag-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, up))), 128)),
              u("label", null, [
                u("span", null, p(y(a)("library", "Nextcloud tag")), 1),
                u("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: y(a)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, fp)
              ]),
              u("button", dp, p(y(a)("library", "Remove tag from current results")), 1),
              u("p", pp, p(y(a)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, ap),
            u("form", {
              method: "post",
              action: st.value,
              class: "library-batch-metadata-reset-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, mp),
              (w(!0), O(ae, null, Ee(C.value, (h) => (w(), O("input", {
                key: `reset-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, bp))), 128)),
              k[20] || (k[20] = u("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              u("button", yp, p(y(a)("library", "Reset filtered metadata")), 1),
              u("p", gp, p(y(a)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, hp),
            u("form", {
              method: "post",
              action: qe.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, vp),
              (w(!0), O(ae, null, Ee(C.value, (h) => (w(), O("input", {
                key: `edit-preview-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Ep))), 128)),
              u("label", null, [
                u("span", null, p(y(a)("library", "Metadata field")), 1),
                u("select", Tp, [
                  u("option", Sp, p(y(a)("library", "Publication type")), 1),
                  u("option", Cp, p(y(a)("library", "Subtitle")), 1),
                  u("option", xp, p(y(a)("library", "Creators")), 1),
                  u("option", Ap, p(y(a)("library", "Series / periodical")), 1),
                  u("option", wp, p(y(a)("library", "Publication date")), 1),
                  u("option", Rp, p(y(a)("library", "Language")), 1),
                  u("option", Op, p(y(a)("library", "Publisher")), 1),
                  u("option", Np, p(y(a)("library", "Genres")), 1),
                  u("option", Pp, p(y(a)("library", "Classifications")), 1)
                ])
              ]),
              u("label", null, [
                u("span", null, p(y(a)("library", "Preview value")), 1),
                k[21] || (k[21] = u("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              u("button", kp, p(y(a)("library", "Preview & apply metadata edit")), 1),
              u("p", Mp, p(y(a)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, _p),
            u("form", {
              method: "post",
              action: vt.value,
              class: "library-batch-cover-refresh-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Ip),
              (w(!0), O(ae, null, Ee(C.value, (h) => (w(), O("input", {
                key: `cover-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, Dp))), 128)),
              u("button", Up, p(y(a)("library", "Request fresh cover previews")), 1),
              u("p", Fp, p(y(a)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, Lp)
          ], 8, ep),
          u("details", Hp, [
            u("summary", null, p(y(a)("library", "Browse")), 1),
            u("div", $p, [
              b.value.length > 0 ? (w(), O("section", jp, [
                u("h3", Vp, p(y(a)("library", "Top series and periodicals")), 1),
                u("p", Bp, p(y(a)("library", "Jump into recurring publications with one click.")), 1),
                u("ul", null, [
                  (w(!0), O(ae, null, Ee(b.value, (h) => (w(), O("li", {
                    key: h.publication
                  }, [
                    u("a", {
                      href: J(h.publication)
                    }, p(h.publication), 9, zp),
                    u("span", Wp, p(h.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : b.value.length === 0 ? (w(), O("section", qp, [
                u("h3", Kp, p(y(a)("library", "No series or periodicals found yet")), 1),
                u("p", Gp, p(y(a)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : he("", !0),
              P.value.length > 0 ? (w(), O("section", Yp, [
                u("h3", Xp, p(y(a)("library", "Top publication years")), 1),
                u("ul", null, [
                  (w(!0), O(ae, null, Ee(P.value, (h) => (w(), O("li", { key: h }, [
                    u("a", {
                      href: ie(h)
                    }, p(h), 9, Jp)
                  ]))), 128))
                ])
              ])) : he("", !0),
              j.value.length > 0 ? (w(), O("section", Zp, [
                u("h3", Qp, p(y(a)("library", "Top creators")), 1),
                u("ul", null, [
                  (w(!0), O(ae, null, Ee(j.value, (h) => (w(), O("li", { key: h }, [
                    u("a", {
                      href: be(h)
                    }, p(h), 9, eh)
                  ]))), 128))
                ])
              ])) : he("", !0)
            ])
          ])
        ]),
        x.value.length > 0 ? (w(), O("nav", {
          key: 3,
          class: "library-active-filter-chips",
          "aria-label": y(a)("library", "Active filters")
        }, [
          u("span", null, p(y(a)("library", "Active filters")), 1),
          (w(!0), O(ae, null, Ee(x.value, (h) => (w(), O("a", {
            key: h.key,
            href: Z(h.key),
            class: "library-filter-chip",
            "aria-label": `${y(a)("library", "Remove filter")}: ${h.label}`
          }, [
            u("strong", null, p(h.label) + ":", 1),
            ye(" " + p(h.value) + " ", 1),
            k[22] || (k[22] = u("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, rh))), 128))
        ], 8, th)) : he("", !0),
        s.value.length === 0 ? (w(), O("div", {
          key: 4,
          class: Nr(["library-empty-content", { "library-first-run-guidance": Qe.value || ht.value, "library-filter-empty-state": d.value && !Qe.value && !ht.value }]),
          role: "status"
        }, [
          Qe.value ? (w(), O(ae, { key: 0 }, [
            u("h3", null, p(y(a)("library", "Start with one Library root")), 1),
            u("p", nh, p(y(a)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            u("p", ih, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, p(y(a)("library", "Add a Library root")), 9, oh),
              u("span", sh, p(y(a)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : ht.value ? (w(), O(ae, { key: 1 }, [
            u("h3", null, p(y(a)("library", "No enabled Library roots")), 1),
            u("p", lh, p(y(a)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            u("p", ah, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, p(y(a)("library", "Open Library settings")), 9, ch)
            ])
          ], 64)) : d.value ? (w(), O(ae, { key: 2 }, [
            u("h3", null, p(y(a)("library", "No matches for the current filters")), 1),
            u("p", uh, p(y(a)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            u("p", fh, [
              u("a", {
                href: N(),
                class: "button secondary"
              }, p(y(a)("library", "Clear search")), 9, dh),
              u("a", ph, p(y(a)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (w(), O(ae, { key: 3 }, [
            u("h3", null, p(y(a)("library", "No catalogue items yet")), 1),
            u("p", hh, p(y(a)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            u("p", mh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, p(y(a)("library", "Run a scan from settings")), 9, bh)
            ])
          ], 64))
        ], 2)) : (w(), O("div", yh, [
          (w(!0), O(ae, null, Ee(s.value, (h) => (w(), O("article", {
            key: h.id,
            class: Nr(["library-cover-card", { "library-cover-card--open": I[h.id] }])
          }, [
            u("a", {
              class: "library-cover-link",
              href: h.openUrl,
              "aria-label": `Read ${h.title}`
            }, [
              u("img", {
                class: "library-cover-image",
                src: h.coverUrl,
                alt: `Cover for ${h.title}`,
                loading: "lazy"
              }, null, 8, _h)
            ], 8, gh),
            u("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: En((pe) => xt(h, pe), ["prevent"])
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Eh),
              k[23] || (k[23] = u("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              u("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, Th),
              u("button", {
                type: "submit",
                class: Nr(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? y(a)("library", "Unstar this publication") : y(a)("library", "Star this publication"),
                "aria-label": h.starred ? y(a)("library", "Unstar this publication") : y(a)("library", "Star this publication"),
                onClick: En((pe) => xt(h, pe), ["prevent"])
              }, p(h.starred ? "★" : "☆"), 11, Sh)
            ], 40, vh),
            u("div", Ch, [
              u("div", xh, [
                u("h3", null, [
                  h.starred ? (w(), O("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": y(a)("library", "Starred")
                  }, "★", 8, Ah)) : he("", !0),
                  ye(p(h.title), 1)
                ]),
                u("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, p(y(a)("library", "Read")), 9, wh)
              ]),
              u("details", {
                class: "library-cover-details",
                onToggle: (pe) => de(h.id, pe)
              }, [
                u("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${y(a)("library", "Show details and actions")}: ${h.title}`
                }, p(y(a)("library", "Details")), 9, Oh),
                u("div", Nh, [
                  h.creators ? (w(), O("p", Ph, p(h.creators), 1)) : he("", !0),
                  u("dl", kh, [
                    u("div", Mh, [
                      u("dt", null, p(y(a)("library", "Type")), 1),
                      u("dd", null, p(h.publicationType), 1)
                    ]),
                    h.publication ? (w(), O("div", Lh, [
                      u("dt", null, p(y(a)("library", "Series")), 1),
                      u("dd", null, p(h.publication), 1)
                    ])) : he("", !0),
                    h.publicationDate ? (w(), O("div", Ih, [
                      u("dt", null, p(y(a)("library", "Date")), 1),
                      u("dd", null, p(h.publicationDate), 1)
                    ])) : he("", !0),
                    h.workflowStatus ? (w(), O("div", Dh, [
                      u("dt", null, p(y(a)("library", "Status")), 1),
                      u("dd", null, p(h.workflowStatus), 1)
                    ])) : he("", !0),
                    h.hasScannerConflict ? (w(), O("div", Uh, [
                      u("dt", null, p(y(a)("library", "Review")), 1),
                      u("dd", null, p(h.scannerConflictCount) + " fields", 1)
                    ])) : he("", !0),
                    h.lastOpenedAt ? (w(), O("div", Fh, [
                      u("dt", null, p(y(a)("library", "Last opened")), 1),
                      u("dd", null, p(h.lastOpenedAt), 1)
                    ])) : he("", !0),
                    h.extension ? (w(), O("div", Hh, [
                      u("dt", null, p(y(a)("library", "Format")) + ":", 1),
                      u("dd", null, p(R(h.extension)), 1)
                    ])) : he("", !0),
                    h.shelf ? (w(), O("div", $h, [
                      u("dt", null, p(y(a)("library", "Shelf")), 1),
                      u("dd", null, p(h.shelf), 1)
                    ])) : he("", !0)
                  ]),
                  h.description ? (w(), O("p", jh, p(h.description), 1)) : he("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (w(), O("p", Vh, [
                    ye(" scanStatus: " + p(h.scanStatus || "unknown"), 1),
                    h.scanError ? (w(), O("span", Bh, " · scanError: " + p(h.scanError), 1)) : he("", !0)
                  ])) : he("", !0),
                  u("div", zh, [
                    $(h).length === 0 ? (w(), O("span", Wh, "No Nextcloud tags")) : (w(!0), O(ae, { key: 1 }, Ee($(h), (pe) => (w(), O("span", {
                      key: pe.id,
                      class: "library-tag"
                    }, p(pe.name), 1))), 128))
                  ]),
                  u("p", qh, [
                    u("a", {
                      href: h.filesUrl
                    }, p(y(a)("library", "Show in Files")), 9, Kh),
                    k[24] || (k[24] = ye(" · ", -1)),
                    u("a", {
                      href: h.downloadUrl
                    }, p(y(a)("library", "Download source")), 9, Gh),
                    k[25] || (k[25] = ye(" · ", -1)),
                    u("a", {
                      href: h.detailsUrl
                    }, p(y(a)("library", "Details")), 9, Yh)
                  ])
                ])
              ], 40, Rh)
            ])
          ], 2))), 128))
        ])),
        s.value.length > 0 ? (w(), O("nav", {
          key: 6,
          class: "library-pagination library-pagination--bottom",
          "aria-label": y(a)("library", "Catalogue pagination")
        }, [
          u("span", Jh, [
            ye(p(y(a)("library", "Page")) + " " + p(z.value.page), 1),
            z.value.total > 0 ? (w(), O("span", Zh, " · " + p(z.value.from) + "–" + p(z.value.to), 1)) : he("", !0)
          ]),
          z.value.previousUrl ? (w(), O("a", {
            key: 0,
            href: z.value.previousUrl
          }, p(y(a)("library", "Previous")), 9, Qh)) : (w(), O("span", em, p(y(a)("library", "Previous")), 1)),
          z.value.nextUrl ? (w(), O("a", {
            key: 2,
            href: z.value.nextUrl
          }, p(y(a)("library", "Next")), 9, tm)) : (w(), O("span", rm, p(y(a)("library", "Next")), 1))
        ], 8, Xh)) : he("", !0)
      ])
    ]));
  }
}, cs = du("library", "catalogue", {}), An = document.querySelector("#library-vue-root"), us = {
  ...cs,
  requestToken: An?.dataset.requestToken || cs.requestToken || ""
};
function G(e) {
  return String(e ?? "");
}
function Cl(e) {
  return G(e).toUpperCase();
}
function im(e, t, r, n = G) {
  for (const i of t) {
    const o = document.createElement("option");
    o.value = G(i), o.textContent = n(i), G(i) === G(r) && (o.selected = !0), e.appendChild(o);
  }
}
function fs(e, t, r, n, i = "") {
  const o = document.createElement("label");
  o.textContent = t;
  const s = document.createElement("input");
  s.type = r === "q" ? "search" : "text", s.name = r, s.value = G(n), s.placeholder = i, o.appendChild(s), e.appendChild(o);
}
function xr(e, t, r, n, i, o, s = G) {
  const l = document.createElement("label");
  l.textContent = t;
  const f = document.createElement("select");
  f.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, f.appendChild(v), im(f, o, n, s), l.appendChild(f), e.appendChild(l);
}
function Ar(e) {
  const t = G(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function om(e, t = {}) {
  return G(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(G(e || t?.publication || ""))}`);
}
function sm(e) {
  return G(e.discoveryPage) === "publication";
}
function lm(e, t = {}) {
  return G(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(G(e))}`);
}
function Si(e) {
  return G(e.discoveryPage) === "year";
}
function am(e, t = {}) {
  return G(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(G(e))}`);
}
function Ci(e) {
  return G(e.discoveryPage) === "creator";
}
function cm(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && G(n).trim() !== "");
}
function um() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function Br(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function fm(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function dm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", a("library", "Catalogue search and filters")), fs(n, a("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), xr(n, a("library", "Type"), "type", r.type, a("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), fs(n, a("library", "Nextcloud tag"), "tag", r.tag, "photography"), xr(n, a("library", "Format"), "format", r.format, a("library", "All formats"), e.formats || [], Cl), xr(n, a("library", "Shelf"), "shelf", r.shelf, a("library", "All shelves"), e.shelves || []), xr(n, a("library", "Scan status"), "status", r.status, a("library", "All scan statuses"), e.scanStatuses || []), xr(n, a("library", "Sort"), "sort", r.sort || "title", a("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), xr(n, a("library", "Page size"), "limit", t.limit || 100, a("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", a("library", "Apply catalogue filters")), i.textContent = a("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", a("library", "Clear catalogue filters")), o.textContent = a("library", "Clear"), n.append(i, o), n;
}
function pm() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", o = document.createElement("p");
  return o.className = "library-notice library-batch-metadata-apply-result", o.textContent = a("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), o;
}
function hm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", a("library", "Quick catalogue filters"));
  let i = null;
  const o = () => {
    window.clearTimeout(i), i = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [E, P] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(E) || G(P).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = E, j.value = G(P), n.appendChild(j);
  }
  const s = document.createElement("label");
  s.className = "library-quick-filter-search", s.textContent = a("library", "Search");
  const l = document.createElement("input");
  l.type = "search", l.name = "q", l.value = G(r.q), l.placeholder = "Camera, Eco, Rolleiflex...", l.addEventListener("input", o), s.appendChild(l), n.appendChild(s);
  const f = [
    [a("library", "Sort"), "sort", r.sort || "title", [["title", a("library", "Title")], ["recent", a("library", "Recently added")], ["publicationDate", a("library", "Publication date")], ["publication", a("library", "Series")], ["lastOpened", a("library", "Recently opened")], ["format", a("library", "Format")]]],
    [a("library", "Starred"), "starred", r.starred || "", [["", a("library", "All")], ["1", a("library", "Starred")]]],
    [a("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, P, j, re] of f) {
    const q = document.createElement("label");
    q.textContent = E;
    const oe = document.createElement("select");
    oe.name = P;
    for (const [ne, z] of re) {
      const D = document.createElement("option");
      D.value = G(ne), D.textContent = G(z), G(ne) === G(j) && (D.selected = !0), oe.appendChild(D);
    }
    oe.addEventListener("change", () => n.requestSubmit()), q.appendChild(oe), n.appendChild(q);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", a("library", "Apply catalogue filters")), v.textContent = a("library", "Apply filters");
  const b = document.createElement("a");
  return b.href = "?", b.className = "button secondary", b.setAttribute("aria-label", a("library", "Clear catalogue filters")), b.textContent = a("library", "Clear all"), n.append(v, b), n;
}
function mm(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = G(e.settingsUrl || ""), o = G(e.metadataExportUrl || ""), s = G(e.batchTagUrl || "/apps/library/bulk/tags"), l = G(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), f = G(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = G(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), b = G(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const P = document.createElement("section");
  P.className = "library-panel", P.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const re = document.createElement("div"), q = document.createElement("h2");
  q.id = "library-catalogue-heading", q.textContent = a("library", "Publication catalogue");
  const oe = document.createElement("p");
  oe.className = "library-muted", oe.textContent = a("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), re.append(q, oe);
  const ne = document.createElement("nav");
  if (ne.className = "library-catalogue-toolbar", ne.setAttribute("aria-label", a("library", "Library actions")), i) {
    const N = document.createElement("a");
    N.href = i, N.className = "button secondary", N.setAttribute("aria-label", "Open Library settings"), N.textContent = a("library", "Settings"), ne.appendChild(N);
  }
  if (o) {
    const N = document.createElement("a");
    N.href = o, N.className = "button secondary", N.setAttribute("aria-label", "Export corrected metadata"), N.textContent = a("library", "Export corrected metadata"), ne.appendChild(N);
  }
  if (e.metadataSidecarManifestUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarManifestUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar manifest"), N.textContent = a("library", "Sidecar manifest"), ne.appendChild(N);
  }
  if (e.metadataSidecarBundleUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarBundleUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar ZIP"), N.textContent = a("library", "Sidecar ZIP"), ne.appendChild(N);
  }
  j.append(re, ne), P.appendChild(j);
  const z = pm();
  z && P.appendChild(z), P.appendChild(hm(e, n));
  const D = document.createElement("details");
  D.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = a("library", "Show catalogue filters"), D.append(V, dm(e, n)), P.appendChild(D), sm(e) || Si(e) || Ci(e)) {
    const N = document.createElement("section");
    N.className = "library-discovery-header", N.setAttribute("aria-labelledby", "library-discovery-heading");
    const R = document.createElement("p");
    R.className = "library-muted", R.textContent = Ci(e) ? a("library", "Creator") : Si(e) ? a("library", "Publication year") : a("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = G(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = `${n.total ?? r.length} ${Ci(e) ? a("library", "items by this creator. Sorted by publication context when available.") : Si(e) ? a("library", "items from this publication year. Sorted by publication date when available.") : a("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ie = document.createElement("a");
    ie.href = "/apps/library/", ie.className = "button secondary", ie.textContent = a("library", "Back to full catalogue"), N.append(R, $, J, ie), P.appendChild(N);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Pe = document.createElement("a");
  Pe.href = "?", Pe.textContent = ` ${a("library", "Clear all filters")}`, ce.appendChild(Pe), P.appendChild(ce);
  const Re = document.createElement("details");
  Re.className = "library-batch-actions";
  const Ve = document.createElement("summary");
  Ve.textContent = `${a("library", "Batch actions for current results")} (${n.total ?? r.length} ${a("library", "Current filter result")})`;
  const ve = document.createElement("form");
  ve.method = "post", ve.action = s, ve.className = "library-batch-tag-form";
  const Ie = Ar(e);
  Ie && ve.appendChild(Ie);
  for (const [N, R] of Object.entries(e.activeFilters || {})) {
    if (G(R).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(R), ve.appendChild($);
  }
  const Ze = document.createElement("label");
  Ze.textContent = a("library", "Apply Nextcloud tag to current results");
  const st = document.createElement("input");
  st.type = "text", st.name = "nextcloudTagName", st.placeholder = "batch-review", Ze.appendChild(st);
  const qe = document.createElement("button");
  qe.type = "submit", qe.className = "button secondary", qe.textContent = a("library", "Apply Nextcloud tag to current results");
  const vt = document.createElement("p");
  vt.className = "library-muted", vt.textContent = a("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), ve.append(Ze, qe, vt);
  const He = document.createElement("form");
  He.method = "post", He.action = l, He.className = "library-batch-tag-remove-form";
  const we = Ar(e);
  we && He.appendChild(we);
  for (const [N, R] of Object.entries(e.activeFilters || {})) {
    if (G(R).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(R), He.appendChild($);
  }
  const ue = document.createElement("label");
  ue.textContent = a("library", "Nextcloud tag");
  const se = document.createElement("input");
  se.type = "text", se.name = "nextcloudTagName", se.setAttribute("list", "library-nextcloud-tag-suggestions"), se.placeholder = a("library", "e.g. Review"), se.autocomplete = "off", ue.appendChild(se);
  const De = document.createElement("button");
  De.type = "submit", De.className = "button secondary", De.textContent = a("library", "Remove tag from current results");
  const dt = document.createElement("p");
  dt.className = "library-muted", dt.textContent = a("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), He.append(ue, De, dt);
  const Ue = document.createElement("form");
  Ue.method = "post", Ue.action = f, Ue.className = "library-batch-metadata-reset-form";
  const $e = Ar(e);
  $e && Ue.appendChild($e);
  for (const [N, R] of Object.entries(e.activeFilters || {})) {
    if (G(R).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(R), Ue.appendChild($);
  }
  const pt = document.createElement("input");
  pt.type = "hidden", pt.name = "scannerConflicts", pt.value = "1";
  const fe = document.createElement("button");
  fe.type = "submit", fe.className = "button secondary", fe.textContent = a("library", "Reset filtered metadata");
  const Pt = document.createElement("p");
  Pt.className = "library-muted", Pt.textContent = a("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ue.append(pt, fe, Pt);
  const Be = document.createElement("form");
  Be.method = "post", Be.action = v, Be.className = "library-batch-metadata-edit-preview-form", Be.target = "_blank";
  const Et = Ar(e);
  Et && Be.appendChild(Et);
  for (const [N, R] of Object.entries(e.activeFilters || {})) {
    if (G(R).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(R), Be.appendChild($);
  }
  const Tt = document.createElement("label");
  Tt.textContent = a("library", "Metadata field");
  const kt = document.createElement("select");
  kt.name = "bulkEditField";
  for (const [N, R] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = N, $.textContent = a("library", R), kt.appendChild($);
  }
  Tt.appendChild(kt);
  const Qe = document.createElement("label");
  Qe.textContent = a("library", "Preview value");
  const ht = document.createElement("input");
  ht.type = "text", ht.name = "bulkEditValue", ht.placeholder = "magazine, de, photography...", ht.autocomplete = "off", Qe.appendChild(ht);
  const d = document.createElement("button");
  d.type = "submit", d.className = "button secondary", d.textContent = a("library", "Preview & apply metadata edit");
  const m = document.createElement("p");
  m.className = "library-muted", m.textContent = a("library", "Preview first, then apply from the review page."), Be.append(Tt, Qe, d, m);
  const _ = document.createElement("form");
  _.method = "post", _.action = b, _.className = "library-batch-cover-refresh-form";
  const x = Ar(e);
  x && _.appendChild(x);
  for (const [N, R] of Object.entries(e.activeFilters || {})) {
    if (G(R).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = G(R), _.appendChild($);
  }
  const T = document.createElement("button");
  T.type = "submit", T.className = "button secondary", T.textContent = a("library", "Request fresh cover previews");
  const C = document.createElement("p");
  C.className = "library-muted", C.textContent = a("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(T, C), Re.append(Ve, ve, He, Ue, Be, _), P.appendChild(Re);
  const I = document.createElement("nav");
  I.className = "library-pagination", I.setAttribute("aria-label", a("library", "Catalogue pagination"));
  const M = document.createElement("span");
  M.className = "library-pagination-range", M.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, I.appendChild(M), P.appendChild(I);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], S = document.createElement("details");
  S.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const K = document.createElement("summary");
  K.className = "library-periodical-groups-summary", K.textContent = a("library", "Show top series and periodicals"), S.appendChild(K);
  const H = document.createElement("h3");
  H.textContent = L.length > 0 ? a("library", "Top series and periodicals") : a("library", "No series or periodicals found yet");
  const W = document.createElement("p");
  if (W.className = "library-muted", W.textContent = L.length > 0 ? a("library", "Jump into recurring publications with one click.") : a("library", "Add publication or series names in item details to build this shortcut panel."), S.append(H, W), L.length > 0) {
    const N = document.createElement("ul");
    for (const R of L) {
      const $ = document.createElement("li"), J = document.createElement("a");
      J.href = om(R.publication, R), J.textContent = G(R.publication);
      const ie = document.createElement("span");
      ie.className = "library-muted", ie.textContent = `${R.itemCount} items`, $.append(J, ie), N.appendChild($);
    }
    S.appendChild(N);
  }
  P.appendChild(S);
  const X = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (X.length > 0) {
    const N = document.createElement("details");
    N.className = "library-year-groups";
    const R = document.createElement("summary");
    R.className = "library-periodical-groups-summary", R.textContent = a("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = a("library", "Top publication years");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = a("library", "Jump into dated books, magazines, journals and comics by year.");
    const ie = document.createElement("ul");
    for (const be of X) {
      const de = document.createElement("li"), ke = document.createElement("a");
      ke.href = lm(be, e), ke.textContent = G(be), de.appendChild(ke), ie.appendChild(de);
    }
    N.append(R, $, J, ie), P.appendChild(N);
  }
  const Z = Array.isArray(e.creators) ? e.creators : [];
  if (Z.length > 0) {
    const N = document.createElement("details");
    N.className = "library-creator-groups";
    const R = document.createElement("summary");
    R.className = "library-periodical-groups-summary", R.textContent = a("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = a("library", "Top creators");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = a("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ie = document.createElement("ul");
    for (const be of Z) {
      const de = document.createElement("li"), ke = document.createElement("a");
      ke.href = am(be, e), ke.textContent = G(be), de.appendChild(ke), ie.appendChild(de);
    }
    N.append(R, $, J, ie), P.appendChild(N);
  }
  if (r.length === 0) {
    const N = document.createElement("div"), R = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), J = cm(e);
    N.className = "library-empty-content", (R === 0 || $ === 0) && N.classList.add("library-first-run-guidance"), J && R > 0 && $ > 0 && N.classList.add("library-filter-empty-state"), N.setAttribute("role", "status");
    const ie = document.createElement("h3"), be = document.createElement("p");
    be.className = "library-muted";
    const de = document.createElement("p");
    de.className = "library-empty-actions", R === 0 ? (ie.textContent = a("library", "Start with one Library root"), be.textContent = a("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), Br(de, i, "button primary", a("library", "Add a Library root")), fm(de, a("library", "Run a scan after saving a root"))) : $ === 0 ? (ie.textContent = a("library", "No enabled Library roots"), be.textContent = a("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), Br(de, i, "button primary", a("library", "Open Library settings"))) : J ? (ie.textContent = a("library", "No matches for the current filters"), be.textContent = a("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), Br(de, um(), "button secondary", a("library", "Clear search")), Br(de, "?", "button primary", a("library", "Clear all filters"))) : (ie.textContent = a("library", "No catalogue items yet"), be.textContent = a("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), Br(de, i, "button primary", a("library", "Run a scan from settings"))), N.append(ie, be, de), P.appendChild(N);
  } else {
    const N = document.createElement("div");
    N.className = "library-cover-gallery";
    for (const R of r) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const J = document.createElement("a");
      J.className = "library-cover-link", J.href = G(R.openUrl || "#"), J.setAttribute("aria-label", `Read ${G(R.title || "publication")}`);
      const ie = document.createElement("img");
      ie.className = "library-cover-image", ie.src = G(R.coverUrl || ""), ie.alt = `Cover for ${G(R.title || "publication")}`, ie.loading = "lazy", J.appendChild(ie);
      const be = Ar(e), de = document.createElement("form");
      de.method = "post", de.action = G(R.starUrl || ""), de.className = "library-cover-star-form", be && de.appendChild(be);
      const ke = document.createElement("input");
      ke.type = "hidden", ke.name = "returnTo", ke.value = "catalogue";
      const Ae = document.createElement("input");
      Ae.type = "hidden", Ae.name = "starred", Ae.value = R.starred ? "0" : "1";
      const Oe = document.createElement("button");
      Oe.type = "submit", Oe.className = R.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Oe.setAttribute("aria-pressed", R.starred ? "true" : "false"), Oe.setAttribute("aria-label", R.starred ? a("library", "Unstar this publication") : a("library", "Star this publication")), Oe.title = R.starred ? a("library", "Unstar this publication") : a("library", "Star this publication"), Oe.textContent = R.starred ? "★" : "☆", de.append(ke, Ae, Oe);
      const et = document.createElement("div");
      et.className = "library-cover-summary";
      const xt = document.createElement("h3");
      if (xt.textContent = G(R.title || "Untitled publication"), et.appendChild(xt), R.creators) {
        const Mt = document.createElement("p");
        Mt.className = "library-creator", Mt.textContent = G(R.creators), et.appendChild(Mt);
      }
      const F = document.createElement("dl");
      F.className = "library-cover-detail-list";
      const k = [
        ["Type", G(R.publicationType || "other")],
        ["Format", R.extension ? Cl(R.extension) : ""],
        ["Shelf", R.shelf ? G(R.shelf) : ""]
      ].filter(([, Mt]) => Mt !== "");
      for (const [Mt, cn] of k) {
        const Qt = document.createElement("div");
        Qt.className = "library-cover-detail-chip";
        const or = document.createElement("dt");
        or.textContent = Mt;
        const bt = document.createElement("dd");
        bt.textContent = cn, Qt.append(or, bt), F.appendChild(Qt);
      }
      et.appendChild(F);
      const h = document.createElement("p"), pe = document.createElement("a");
      pe.href = G(R.openUrl || "#"), pe.textContent = a("library", "Read");
      const lt = document.createElement("a");
      lt.href = G(R.filesUrl || "#"), lt.textContent = a("library", "Show in Files");
      const mt = document.createElement("a");
      mt.href = G(R.downloadUrl || "#"), mt.textContent = a("library", "Download source");
      const vr = document.createElement("a");
      vr.href = G(R.detailsUrl || "#"), vr.textContent = a("library", "Details"), h.append(pe, document.createTextNode(" · "), lt, document.createTextNode(" · "), mt, document.createTextNode(" · "), vr), et.appendChild(h), $.append(J, de, et), N.appendChild($);
    }
    P.appendChild(N);
  }
  return E.appendChild(P), E;
}
if (An)
  try {
    cu(nm, { state: us }).mount(An);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), An.replaceChildren(mm(us));
  }
//# sourceMappingURL=library-main.mjs.map
