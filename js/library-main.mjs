// @__NO_SIDE_EFFECTS__
function Di(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ce = {}, Nr = [], Ht = () => {
}, ds = () => !1, Un = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dn = (e) => e.startsWith("onUpdate:"), et = Object.assign, Fi = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, ve = (e, t) => jl.call(e, t), ee = Array.isArray, lr = (e) => ln(e) === "[object Map]", Er = (e) => ln(e) === "[object Set]", mo = (e) => ln(e) === "[object Date]", le = (e) => typeof e == "function", Ie = (e) => typeof e == "string", $t = (e) => typeof e == "symbol", Se = (e) => e !== null && typeof e == "object", ps = (e) => (Se(e) || le(e)) && le(e.then) && le(e.catch), hs = Object.prototype.toString, ln = (e) => hs.call(e), Vl = (e) => ln(e).slice(8, -1), ms = (e) => ln(e) === "[object Object]", Hi = (e) => Ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Gr = /* @__PURE__ */ Di(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Fn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, Bl = /-\w/g, Rt = Fn(
  (e) => e.replace(Bl, (t) => t.slice(1).toUpperCase())
), zl = /\B([A-Z])/g, Tr = Fn(
  (e) => e.replace(zl, "-$1").toLowerCase()
), bs = Fn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ri = Fn(
  (e) => e ? `on${bs(e)}` : ""
), Ft = (e, t) => !Object.is(e, t), Sn = (e, ...t) => {
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
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Ie(n) ? Gl(n) : $i(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Ie(e) || Se(e))
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
function Pr(e) {
  let t = "";
  if (Ie(e))
    t = e;
  else if (ee(e))
    for (let r = 0; r < e.length; r++) {
      const n = Pr(e[r]);
      n && (t += n + " ");
    }
  else if (Se(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ Di(Yl);
function gs(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = ar(e[n], t[n]);
  return r;
}
function yo(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const i of e) {
    let o = -1;
    for (let s = 0; s < r.length; s++)
      if (!n[s] && ar(i, r[s])) {
        o = s;
        break;
      }
    if (o < 0) return !1;
    n[o] = 1;
  }
  return !0;
}
function ar(e, t) {
  if (e === t) return !0;
  let r = mo(e), n = mo(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = $t(e), n = $t(t), r || n)
    return e === t;
  if (r = ee(e), n = ee(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = Se(e), n = Se(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = lr(e), n = lr(t), r || n || (r = Er(e), n = Er(t), r || n))
      return r && n ? yo(e, t) : !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), f = t.hasOwnProperty(s);
      if (a && !f || !a && f || !ar(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => ar(r, t));
}
const _s = (e) => !!(e && e.__v_isRef === !0), d = (e) => Ie(e) ? e : e == null ? "" : ee(e) || Se(e) && (e.toString === hs || !le(e.toString)) ? _s(e) ? d(e.value) : JSON.stringify(e, vs, 2) : String(e), vs = (e, t) => _s(t) ? vs(e, t.value) : lr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[ni(n, o) + " =>"] = i, r),
    {}
  )
} : Er(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ni(r))
} : $t(t) ? ni(t) : Se(t) && !ee(t) && !ms(t) ? String(t) : t, ni = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $t(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Ye;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ye && (Ye.active ? (this.parent = Ye, this.index = (Ye.scopes || (Ye.scopes = [])).push(
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
      const r = Ye;
      try {
        return Ye = this, t();
      } finally {
        Ye = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ye, Ye = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ye === this)
        Ye = this.prevScope;
      else {
        let t = Ye;
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
  return Ye;
}
let we;
const ii = /* @__PURE__ */ new WeakSet();
class Es {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ye && (Ye.active ? Ye.effects.push(this) : this.flags &= -2);
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
    const t = we, r = Ot;
    we = this, Ot = !0;
    try {
      return this.fn();
    } finally {
      xs(this), we = t, Ot = r, this.flags &= -3;
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
let Ts = 0, Yr, Xr;
function Ss(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Xr, Xr = e;
    return;
  }
  e.next = Yr, Yr = e;
}
function ji() {
  Ts++;
}
function Vi() {
  if (--Ts > 0)
    return;
  if (Xr) {
    let t = Xr;
    for (Xr = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Yr; ) {
    let t = Yr;
    for (Yr = void 0; t; ) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === en) || (e.globalVersion = en, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !xi(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = we, n = Ot;
  we = e, Ot = !0;
  try {
    Cs(e);
    const i = e.fn(e._value);
    (t.version === 0 || Ft(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    we = r, Ot = n, xs(e), e.flags &= -3;
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
let Ot = !0;
const ws = [];
function Jt() {
  ws.push(Ot), Ot = !1;
}
function Zt() {
  const e = ws.pop();
  Ot = e === void 0 ? !0 : e;
}
function go(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = we;
    we = void 0;
    try {
      t();
    } finally {
      we = r;
    }
  }
}
let en = 0;
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
    if (!we || !Ot || we === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== we)
      r = this.activeLink = new ra(we, this), we.deps ? (r.prevDep = we.depsTail, we.depsTail.nextDep = r, we.depsTail = r) : we.deps = we.depsTail = r, Rs(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = we.depsTail, r.nextDep = void 0, we.depsTail.nextDep = r, we.depsTail = r, we.deps === r && (we.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, en++, this.notify(t);
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
const Ai = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ Symbol(
  ""
), wi = /* @__PURE__ */ Symbol(
  ""
), tn = /* @__PURE__ */ Symbol(
  ""
);
function Ze(e, t, r) {
  if (Ot && we) {
    let n = Ai.get(e);
    n || Ai.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new zi()), i.map = n, i.key = r), i.track();
  }
}
function Gt(e, t, r, n, i, o) {
  const s = Ai.get(e);
  if (!s) {
    en++;
    return;
  }
  const a = (f) => {
    f && f.trigger();
  };
  if (ji(), t === "clear")
    s.forEach(a);
  else {
    const f = ee(e), v = f && Hi(r);
    if (f && r === "length") {
      const y = Number(n);
      s.forEach((E, k) => {
        (k === "length" || k === tn || !$t(k) && k >= y) && a(E);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), v && a(s.get(tn)), t) {
        case "add":
          f ? v && a(s.get("length")) : (a(s.get(gr)), lr(e) && a(s.get(wi)));
          break;
        case "delete":
          f || (a(s.get(gr)), lr(e) && a(s.get(wi)));
          break;
        case "set":
          lr(e) && a(s.get(gr));
          break;
      }
  }
  Vi();
}
function xr(e) {
  const t = /* @__PURE__ */ _e(e);
  return t === e ? t : (Ze(t, "iterate", tn), /* @__PURE__ */ xt(e) ? t : t.map(Nt));
}
function jn(e) {
  return Ze(e = /* @__PURE__ */ _e(e), "iterate", tn), e;
}
function Ut(e, t) {
  return /* @__PURE__ */ Qt(e) ? Ir(/* @__PURE__ */ _r(e) ? Nt(t) : t) : Nt(t);
}
const na = {
  __proto__: null,
  [Symbol.iterator]() {
    return oi(this, Symbol.iterator, (e) => Ut(this, e));
  },
  concat(...e) {
    return xr(this).concat(
      ...e.map((t) => ee(t) ? xr(t) : t)
    );
  },
  entries() {
    return oi(this, "entries", (e) => (e[1] = Ut(this, e[1]), e));
  },
  every(e, t) {
    return Wt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Wt(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Ut(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Wt(
      this,
      "find",
      e,
      t,
      (r) => Ut(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Wt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Wt(
      this,
      "findLast",
      e,
      t,
      (r) => Ut(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Wt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Wt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return si(this, "includes", e);
  },
  indexOf(...e) {
    return si(this, "indexOf", e);
  },
  join(e) {
    return xr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return si(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Wt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Hr(this, "pop");
  },
  push(...e) {
    return Hr(this, "push", e);
  },
  reduce(e, ...t) {
    return _o(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return _o(this, "reduceRight", e, t);
  },
  shift() {
    return Hr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Wt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Hr(this, "splice", e);
  },
  toReversed() {
    return xr(this).toReversed();
  },
  toSorted(e) {
    return xr(this).toSorted(e);
  },
  toSpliced(...e) {
    return xr(this).toSpliced(...e);
  },
  unshift(...e) {
    return Hr(this, "unshift", e);
  },
  values() {
    return oi(this, "values", (e) => Ut(this, e));
  }
};
function oi(e, t, r) {
  const n = jn(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ xt(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const ia = Array.prototype;
function Wt(e, t, r, n, i, o) {
  const s = jn(e), a = s !== e && !/* @__PURE__ */ xt(e), f = s[t];
  if (f !== ia[t]) {
    const E = f.apply(e, o);
    return a ? Nt(E) : E;
  }
  let v = r;
  s !== e && (a ? v = function(E, k) {
    return r.call(this, Ut(e, E), k, e);
  } : r.length > 2 && (v = function(E, k) {
    return r.call(this, E, k, e);
  }));
  const y = f.call(s, v, n);
  return a && i ? i(y) : y;
}
function _o(e, t, r, n) {
  const i = jn(e), o = i !== e && !/* @__PURE__ */ xt(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(v, y, E) {
    return a && (a = !1, v = Ut(e, v)), r.call(this, v, Ut(e, y), E, e);
  }) : r.length > 3 && (s = function(v, y, E) {
    return r.call(this, v, y, E, e);
  }));
  const f = i[t](s, ...n);
  return a ? Ut(e, f) : f;
}
function si(e, t, r) {
  const n = /* @__PURE__ */ _e(e);
  Ze(n, "iterate", tn);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Ki(r[0]) ? (r[0] = /* @__PURE__ */ _e(r[0]), n[t](...r)) : i;
}
function Hr(e, t, r = []) {
  Jt(), ji();
  const n = (/* @__PURE__ */ _e(e))[t].apply(e, r);
  return Vi(), Zt(), n;
}
const oa = /* @__PURE__ */ Di("__proto__,__v_isRef,__isVue"), Os = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($t)
);
function sa(e) {
  $t(e) || (e = String(e));
  const t = /* @__PURE__ */ _e(this);
  return Ze(t, "has", e), t.hasOwnProperty(e);
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
      return n === (i ? o ? ba : Ms : o ? Ls : ks).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = ee(t);
    if (!i) {
      let f;
      if (s && (f = na[r]))
        return f;
      if (r === "hasOwnProperty")
        return sa;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Qe(t) ? t : n
    );
    if (($t(r) ? Os.has(r) : oa(r)) || (i || Ze(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ Qe(a)) {
      const f = s && Hi(r) ? a : a.value;
      return i && Se(f) ? /* @__PURE__ */ Oi(f) : f;
    }
    return Se(a) ? i ? /* @__PURE__ */ Oi(a) : /* @__PURE__ */ sr(a) : a;
  }
}
class Ps extends Ns {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = ee(t) && Hi(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ Qt(o);
      if (!/* @__PURE__ */ xt(n) && !/* @__PURE__ */ Qt(n) && (o = /* @__PURE__ */ _e(o), n = /* @__PURE__ */ _e(n)), !s && /* @__PURE__ */ Qe(o) && !/* @__PURE__ */ Qe(n))
        return v || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : ve(t, r), f = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ Qe(t) ? t : i
    );
    return t === /* @__PURE__ */ _e(i) && f && (a ? Ft(n, o) && Gt(t, "set", r, n) : Gt(t, "add", r, n)), f;
  }
  deleteProperty(t, r) {
    const n = ve(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Gt(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!$t(r) || !Os.has(r)) && Ze(t, "has", r), n;
  }
  ownKeys(t) {
    return Ze(
      t,
      "iterate",
      ee(t) ? "length" : gr
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
    const i = this.__v_raw, o = /* @__PURE__ */ _e(i), s = lr(o), a = e === "entries" || e === Symbol.iterator && s, f = e === "keys" && s, v = i[e](...n), y = r ? Ri : t ? Ir : Nt;
    return !t && Ze(
      o,
      "iterate",
      f ? wi : gr
    ), et(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: E, done: k } = v.next();
          return k ? { value: E, done: k } : {
            value: a ? [y(E[0]), y(E[1])] : y(E),
            done: k
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
      const o = this.__v_raw, s = /* @__PURE__ */ _e(o), a = /* @__PURE__ */ _e(i);
      e || (Ft(i, a) && Ze(s, "get", i), Ze(s, "get", a));
      const { has: f } = bn(s), v = t ? Ri : e ? Ir : Nt;
      if (f.call(s, i))
        return v(o.get(i));
      if (f.call(s, a))
        return v(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Ze(/* @__PURE__ */ _e(i), "iterate", gr), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ _e(o), a = /* @__PURE__ */ _e(i);
      return e || (Ft(i, a) && Ze(s, "has", i), Ze(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, f = /* @__PURE__ */ _e(a), v = t ? Ri : e ? Ir : Nt;
      return !e && Ze(f, "iterate", gr), a.forEach((y, E) => i.call(o, v(y), v(E), s));
    }
  };
  return et(
    r,
    e ? {
      add: yn("add"),
      set: yn("set"),
      delete: yn("delete"),
      clear: yn("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ _e(this), s = bn(o), a = /* @__PURE__ */ _e(i), f = !t && !/* @__PURE__ */ xt(i) && !/* @__PURE__ */ Qt(i) ? a : i;
        return s.has.call(o, f) || Ft(i, f) && s.has.call(o, i) || Ft(a, f) && s.has.call(o, a) || (o.add(f), Gt(o, "add", f, f)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ xt(o) && !/* @__PURE__ */ Qt(o) && (o = /* @__PURE__ */ _e(o));
        const s = /* @__PURE__ */ _e(this), { has: a, get: f } = bn(s);
        let v = a.call(s, i);
        v || (i = /* @__PURE__ */ _e(i), v = a.call(s, i));
        const y = f.call(s, i);
        return s.set(i, o), v ? Ft(o, y) && Gt(s, "set", i, o) : Gt(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ _e(this), { has: s, get: a } = bn(o);
        let f = s.call(o, i);
        f || (i = /* @__PURE__ */ _e(i), f = s.call(o, i)), a && a.call(o, i);
        const v = o.delete(i);
        return f && Gt(o, "delete", i, void 0), v;
      },
      clear() {
        const i = /* @__PURE__ */ _e(this), o = i.size !== 0, s = i.clear();
        return o && Gt(
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
    ve(r, i) && i in n ? r : n,
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
const ks = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap();
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
function sr(e) {
  return /* @__PURE__ */ Qt(e) ? e : qi(
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
    Ls
  );
}
// @__NO_SIDE_EFFECTS__
function Oi(e) {
  return qi(
    e,
    !0,
    ca,
    ma,
    Ms
  );
}
function qi(e, t, r, n, i) {
  if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const s = ya(Vl(e));
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? n : r
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  return /* @__PURE__ */ Qt(e) ? /* @__PURE__ */ _r(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ki(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function _e(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ _e(t) : e;
}
function _a(e) {
  return !ve(e, "__v_skip") && Object.isExtensible(e) && ys(e, "__v_skip", !0), e;
}
const Nt = (e) => Se(e) ? /* @__PURE__ */ sr(e) : e, Ir = (e) => Se(e) ? /* @__PURE__ */ Oi(e) : e;
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return Ea(e, !1);
}
function Ea(e, t) {
  return /* @__PURE__ */ Qe(e) ? e : new Ta(e, t);
}
class Ta {
  constructor(t, r) {
    this.dep = new zi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ _e(t), this._value = r ? t : Nt(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ xt(t) || /* @__PURE__ */ Qt(t);
    t = n ? t : /* @__PURE__ */ _e(t), Ft(t, r) && (this._rawValue = t, this._value = n ? t : Nt(t), this.dep.trigger());
  }
}
function b(e) {
  return /* @__PURE__ */ Qe(e) ? e.value : e;
}
const Sa = {
  get: (e, t, r) => t === "__v_raw" ? e : b(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ Qe(i) && !/* @__PURE__ */ Qe(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Is(e) {
  return /* @__PURE__ */ _r(e) ? e : new Proxy(e, Sa);
}
class Ca {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new zi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = en - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    we !== this)
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
let hr;
function Aa(e, t = !1, r = hr) {
  if (r) {
    let n = wn.get(r);
    n || wn.set(r, n = []), n.push(e);
  }
}
function wa(e, t, r = Ce) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: f } = r, v = (V) => i ? V : /* @__PURE__ */ xt(V) || i === !1 || i === 0 ? Yt(V, 1) : Yt(V);
  let y, E, k, j, re = !1, q = !1;
  if (/* @__PURE__ */ Qe(e) ? (E = () => e.value, re = /* @__PURE__ */ xt(e)) : /* @__PURE__ */ _r(e) ? (E = () => v(e), re = !0) : ee(e) ? (q = !0, re = e.some((V) => /* @__PURE__ */ _r(V) || /* @__PURE__ */ xt(V)), E = () => e.map((V) => {
    if (/* @__PURE__ */ Qe(V))
      return V.value;
    if (/* @__PURE__ */ _r(V))
      return v(V);
    if (le(V))
      return f ? f(V, 2) : V();
  })) : le(e) ? t ? E = f ? () => f(e, 2) : e : E = () => {
    if (k) {
      Jt();
      try {
        k();
      } finally {
        Zt();
      }
    }
    const V = hr;
    hr = y;
    try {
      return f ? f(e, 3, [j]) : e(j);
    } finally {
      hr = V;
    }
  } : E = Ht, t && i) {
    const V = E, ce = i === !0 ? 1 / 0 : i;
    E = () => Yt(V(), ce);
  }
  const se = ea(), ne = () => {
    y.stop(), se && se.active && Fi(se.effects, y);
  };
  if (o && t) {
    const V = t;
    t = (...ce) => {
      const ke = V(...ce);
      return ne(), ke;
    };
  }
  let z = q ? new Array(e.length).fill(gn) : gn;
  const I = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const ce = y.run();
        if (V || i || re || (q ? ce.some((ke, Oe) => Ft(ke, z[Oe])) : Ft(ce, z))) {
          k && k();
          const ke = hr;
          hr = y;
          try {
            const Oe = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              z === gn ? void 0 : q && z[0] === gn ? [] : z,
              j
            ];
            z = ce, f ? f(t, 3, Oe) : (
              // @ts-expect-error
              t(...Oe)
            );
          } finally {
            hr = ke;
          }
        }
      } else
        y.run();
  };
  return a && a(I), y = new Es(E), y.scheduler = s ? () => s(I, !1) : I, j = (V) => Aa(V, !1, y), k = y.onStop = () => {
    const V = wn.get(y);
    if (V) {
      if (f)
        f(V, 4);
      else
        for (const ce of V) ce();
      wn.delete(y);
    }
  }, t ? n ? I(!0) : z = y.run() : s ? s(I.bind(null, !0), !0) : y.run(), ne.pause = y.pause.bind(y), ne.resume = y.resume.bind(y), ne.stop = ne, ne;
}
function Yt(e, t = 1 / 0, r) {
  if (t <= 0 || !Se(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ Qe(e))
    Yt(e.value, t, r);
  else if (ee(e))
    for (let n = 0; n < e.length; n++)
      Yt(e[n], t, r);
  else if (Er(e) || lr(e))
    e.forEach((n) => {
      Yt(n, t, r);
    });
  else if (ms(e)) {
    for (const n in e)
      Yt(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Yt(e[n], t, r);
  }
  return e;
}
function an(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Vn(i, t, r);
  }
}
function Pt(e, t, r, n) {
  if (le(e)) {
    const i = an(e, t, r, n);
    return i && ps(i) && i.catch((o) => {
      Vn(o, t, r);
    }), i;
  }
  if (ee(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Pt(e[o], t, r, n));
    return i;
  }
}
function Vn(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ce;
  if (t) {
    let a = t.parent;
    const f = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const y = a.ec;
      if (y) {
        for (let E = 0; E < y.length; E++)
          if (y[E](e, f, v) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Jt(), an(o, null, 10, [
        e,
        f,
        v
      ]), Zt();
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
const ot = [];
let It = -1;
const kr = [];
let or = null, Rr = 0;
const Us = /* @__PURE__ */ Promise.resolve();
let Rn = null;
function Ds(e) {
  const t = Rn || Us;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oa(e) {
  let t = It + 1, r = ot.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = ot[n], o = rn(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Gi(e) {
  if (!(e.flags & 1)) {
    const t = rn(e), r = ot[ot.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= rn(r) ? ot.push(e) : ot.splice(Oa(t), 0, e), e.flags |= 1, Fs();
  }
}
function Fs() {
  Rn || (Rn = Us.then($s));
}
function Na(e) {
  if (!ee(e))
    or && e.id === -1 ? or.splice(Rr + 1, 0, e) : e.flags & 1 || (kr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      kr.push(e[t]);
  Fs();
}
function vo(e, t, r = It + 1) {
  for (; r < ot.length; r++) {
    const n = ot[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      ot.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Hs(e) {
  if (kr.length) {
    const t = [...new Set(kr)].sort(
      (r, n) => rn(r) - rn(n)
    );
    if (kr.length = 0, or) {
      for (let r = 0; r < t.length; r++)
        or.push(t[r]);
      return;
    }
    for (or = t, Rr = 0; Rr < or.length; Rr++) {
      const r = or[Rr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    or = null, Rr = 0;
  }
}
const rn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $s(e) {
  try {
    for (It = 0; It < ot.length; It++) {
      const t = ot[It];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), an(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; It < ot.length; It++) {
      const t = ot[It];
      t && (t.flags &= -2);
    }
    It = -1, ot.length = 0, Hs(), Rn = null, (ot.length || kr.length) && $s();
  }
}
let Ct = null, js = null;
function On(e) {
  const t = Ct;
  return Ct = e, js = e && e.type.__scopeId || null, t;
}
function Pa(e, t = Ct, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && Po(-1);
    const o = On(t), s = vr.length;
    let a;
    try {
      a = e(...i);
    } finally {
      for (let f = vr.length; f > s; f--) pl();
      On(o), n._d && Po(1);
    }
    return a;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function qe(e, t) {
  if (Ct === null)
    return e;
  const r = Kn(Ct), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, f = Ce] = t[i];
    o && (le(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Yt(s), n.push({
      dir: o,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: f
    }));
  }
  return e;
}
function fr(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let f = a.dir[n];
    f && (Jt(), Pt(f, r, 8, [
      e.el,
      a,
      e,
      t
    ]), Zt());
  }
}
function ka(e, t) {
  if (st) {
    let r = st.provides;
    const n = st.parent && st.parent.provides;
    n === r && (r = st.provides = Object.create(n)), r[e] = t;
  }
}
function Cn(e, t, r = !1) {
  const n = Rc();
  if (n || Lr) {
    let i = Lr ? Lr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && le(t) ? t.call(n && n.proxy) : t;
  }
}
const La = /* @__PURE__ */ Symbol.for("v-scx"), Ma = () => Cn(La);
function li(e, t, r) {
  return Vs(e, t, r);
}
function Vs(e, t, r = Ce) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = et({}, r), f = t && n || !t && o !== "post";
  let v;
  if (sn) {
    if (o === "sync") {
      const j = Ma();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!f) {
      const j = () => {
      };
      return j.stop = Ht, j.resume = Ht, j.pause = Ht, j;
    }
  }
  const y = st;
  a.call = (j, re, q) => Pt(j, y, re, q);
  let E = !1;
  o === "post" ? a.scheduler = (j) => {
    ft(j, y && y.suspense);
  } : o !== "sync" && (E = !0, a.scheduler = (j, re) => {
    re ? j() : Gi(j);
  }), a.augmentJob = (j) => {
    t && (j.flags |= 4), E && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const k = wa(e, t, a);
  return sn && (v ? v.push(k) : f && k()), k;
}
function Ia(e, t, r) {
  const n = this.proxy, i = Ie(e) ? e.includes(".") ? Bs(n, e) : () => n[e] : e.bind(n, n);
  let o;
  le(t) ? o = t : (o = t.handler, r = t);
  const s = cn(this), a = Vs(i, o.bind(n), r);
  return s(), a;
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
const Ua = /* @__PURE__ */ Symbol("_vte"), Bn = (e) => e.__isTeleport, ai = /* @__PURE__ */ Symbol("_leaveCb");
function Da(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== er) {
        t = r;
        break;
      }
  }
  return t;
}
function zs(e) {
  if (!Xi(e))
    return Bn(e.type) && e.children ? Da(e.children) : e;
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
function Jr(e, t, r, n, i = !1) {
  if (ee(e)) {
    e.forEach(
      (q, se) => Jr(
        q,
        t && (ee(t) ? t[se] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Zr(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Jr(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Kn(n.component) : n.el, s = i ? null : o, { i: a, r: f } = e, v = t && t.r, y = a.refs === Ce ? a.refs = {} : a.refs, E = a.setupState, k = /* @__PURE__ */ _e(E), j = E === Ce ? ds : (q) => Eo(y, q) ? !1 : ve(k, q), re = (q, se) => !(se && Eo(y, se));
  if (v != null && v !== f) {
    if (To(t), Ie(v))
      y[v] = null, j(v) && (E[v] = null);
    else if (/* @__PURE__ */ Qe(v)) {
      const q = t;
      re(v, q.k) && (v.value = null), q.k && (y[q.k] = null);
    }
  }
  if (le(f))
    an(f, a, 12, [s, y]);
  else {
    const q = Ie(f), se = /* @__PURE__ */ Qe(f);
    if (q || se) {
      const ne = () => {
        if (e.f) {
          const z = q ? j(f) ? E[f] : y[f] : re() || !e.k ? f.value : y[e.k];
          if (i)
            ee(z) && Fi(z, o);
          else if (ee(z))
            z.includes(o) || z.push(o);
          else if (q)
            y[f] = [o], j(f) && (E[f] = y[f]);
          else {
            const I = [o];
            re(f, e.k) && (f.value = I), e.k && (y[e.k] = I);
          }
        } else q ? (y[f] = s, j(f) && (E[f] = s)) : se && (re(f, e.k) && (f.value = s), e.k && (y[e.k] = s));
      };
      if (s) {
        const z = () => {
          ne(), Nn.delete(e);
        };
        z.id = -1, Nn.set(e, z), ft(z, r);
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
const Zr = (e) => !!e.type.__asyncLoader, Xi = (e) => e.type.__isKeepAlive;
function Fa(e, t) {
  qs(e, "a", t);
}
function Ha(e, t) {
  qs(e, "da", t);
}
function qs(e, t, r = st) {
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
function zn(e, t, r = st, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      Jt();
      const a = cn(r), f = Pt(t, r, e, s);
      return a(), Zt(), f;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const tr = (e) => (t, r = st) => {
  (!sn || e === "sp") && zn(e, (...n) => t(...n), r);
}, ja = tr("bm"), Ks = tr("m"), Va = tr(
  "bu"
), Ba = tr("u"), Gs = tr(
  "bum"
), Ys = tr("um"), za = tr(
  "sp"
), Wa = tr("rtg"), qa = tr("rtc");
function Ka(e, t = st) {
  zn("ec", e, t);
}
const Ga = /* @__PURE__ */ Symbol.for("v-ndc");
function Te(e, t, r, n) {
  let i;
  const o = r, s = ee(e);
  if (s || Ie(e)) {
    const a = s && /* @__PURE__ */ _r(e);
    let f = !1, v = !1;
    a && (f = !/* @__PURE__ */ xt(e), v = /* @__PURE__ */ Qt(e), e = jn(e)), i = new Array(e.length);
    for (let y = 0, E = e.length; y < E; y++)
      i[y] = t(
        f ? v ? Ir(Nt(e[y])) : Nt(e[y]) : e[y],
        y,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (Se(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, f) => t(a, f, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let f = 0, v = a.length; f < v; f++) {
        const y = a[f];
        i[f] = t(e[y], y, f, o);
      }
    }
  else
    i = [];
  return i;
}
const Ni = (e) => e ? yl(e) ? Kn(e) : Ni(e.parent) : null, Qr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ et(/* @__PURE__ */ Object.create(null), {
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
    $nextTick: (e) => e.n || (e.n = Ds.bind(e.proxy)),
    $watch: (e) => Ia.bind(e)
  })
), ci = (e, t) => e !== Ce && !e.__isScriptSetup && ve(e, t), Ya = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: s, type: a, appContext: f } = e;
    if (t[0] !== "$") {
      const k = s[t];
      if (k !== void 0)
        switch (k) {
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
        if (i !== Ce && ve(i, t))
          return s[t] = 2, i[t];
        if (ve(o, t))
          return s[t] = 3, o[t];
        if (r !== Ce && ve(r, t))
          return s[t] = 4, r[t];
        Pi && (s[t] = 0);
      }
    }
    const v = Qr[t];
    let y, E;
    if (v)
      return t === "$attrs" && Ze(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = a.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== Ce && ve(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      E = f.config.globalProperties, ve(E, t)
    )
      return E[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return ci(i, t) ? (i[t] = r, !0) : n !== Ce && ve(n, t) ? (n[t] = r, !0) : ve(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let f;
    return !!(r[a] || e !== Ce && a[0] !== "$" && ve(e, a) || ci(t, a) || ve(o, a) || ve(n, a) || ve(Qr, a) || ve(i.config.globalProperties, a) || (f = s.__cssModules) && f[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : ve(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function So(e) {
  return ee(e) ? e.reduce(
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
    watch: a,
    provide: f,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: E,
    mounted: k,
    beforeUpdate: j,
    updated: re,
    activated: q,
    deactivated: se,
    beforeDestroy: ne,
    beforeUnmount: z,
    destroyed: I,
    unmounted: V,
    render: ce,
    renderTracked: ke,
    renderTriggered: Oe,
    errorCaptured: ze,
    serverPrefetch: Ee,
    // public API
    expose: $e,
    inheritAttrs: tt,
    // assets
    components: lt,
    directives: Ge,
    filters: gt
  } = t;
  if (v && Ja(v, n, null), s)
    for (const me in s) {
      const ae = s[me];
      le(ae) && (n[me] = ae.bind(r));
    }
  if (i) {
    const me = i.call(r, r);
    Se(me) && (e.data = /* @__PURE__ */ sr(me));
  }
  if (Pi = !0, o)
    for (const me in o) {
      const ae = o[me], We = le(ae) ? ae.bind(r, r) : le(ae.get) ? ae.get.bind(r, r) : Ht, xe = !le(ae) && le(ae.set) ? ae.set.bind(r) : Ht, Ne = Z({
        get: We,
        set: xe
      });
      Object.defineProperty(n, me, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (Ue) => Ne.value = Ue
      });
    }
  if (a)
    for (const me in a)
      Xs(a[me], n, r, me);
  if (f) {
    const me = le(f) ? f.call(r) : f;
    Reflect.ownKeys(me).forEach((ae) => {
      ka(ae, me[ae]);
    });
  }
  y && Co(y, e, "c");
  function Le(me, ae) {
    ee(ae) ? ae.forEach((We) => me(We.bind(r))) : ae && me(ae.bind(r));
  }
  if (Le(ja, E), Le(Ks, k), Le(Va, j), Le(Ba, re), Le(Fa, q), Le(Ha, se), Le(Ka, ze), Le(qa, ke), Le(Wa, Oe), Le(Gs, z), Le(Ys, V), Le(za, Ee), ee($e))
    if ($e.length) {
      const me = e.exposed || (e.exposed = {});
      $e.forEach((ae) => {
        Object.defineProperty(me, ae, {
          get: () => r[ae],
          set: (We) => r[ae] = We,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Ht && (e.render = ce), tt != null && (e.inheritAttrs = tt), lt && (e.components = lt), Ge && (e.directives = Ge), Ee && Ws(e);
}
function Ja(e, t, r = Ht) {
  ee(e) && (e = ki(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Se(i) ? "default" in i ? o = Cn(
      i.from || n,
      i.default,
      !0
    ) : o = Cn(i.from || n) : o = Cn(i), /* @__PURE__ */ Qe(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function Co(e, t, r) {
  Pt(
    ee(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function Xs(e, t, r, n) {
  let i = n.includes(".") ? Bs(r, n) : () => r[n];
  if (Ie(e)) {
    const o = t[e];
    le(o) && li(i, o);
  } else if (le(e))
    li(i, e.bind(r));
  else if (Se(e))
    if (ee(e))
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
  } = e.appContext, a = o.get(t);
  let f;
  return a ? f = a : !i.length && !r && !n ? f = t : (f = {}, i.length && i.forEach(
    (v) => Pn(f, v, s, !0)
  ), Pn(f, t, s)), Se(t) && o.set(t, f), f;
}
function Pn(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Pn(e, o, r, !0), i && i.forEach(
    (s) => Pn(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = Za[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Za = {
  data: xo,
  props: Ao,
  emits: Ao,
  // objects
  methods: Wr,
  computed: Wr,
  // lifecycle
  beforeCreate: it,
  created: it,
  beforeMount: it,
  mounted: it,
  beforeUpdate: it,
  updated: it,
  beforeDestroy: it,
  beforeUnmount: it,
  destroyed: it,
  unmounted: it,
  activated: it,
  deactivated: it,
  errorCaptured: it,
  serverPrefetch: it,
  // assets
  components: Wr,
  directives: Wr,
  // watch
  watch: ec,
  // provide / inject
  provide: xo,
  inject: Qa
};
function xo(e, t) {
  return t ? e ? function() {
    return et(
      le(e) ? e.call(this, this) : e,
      le(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qa(e, t) {
  return Wr(ki(e), ki(t));
}
function ki(e) {
  if (ee(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function it(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Wr(e, t) {
  return e ? et(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ao(e, t) {
  return e ? ee(e) && ee(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : et(
    /* @__PURE__ */ Object.create(null),
    So(e),
    So(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = et(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = it(e[n], t[n]);
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
    le(n) || (n = et({}, n)), i != null && !Se(i) && (i = null);
    const o = Zs(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let f = !1;
    const v = o.app = {
      _uid: tc++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Mc,
      get config() {
        return o.config;
      },
      set config(y) {
      },
      use(y, ...E) {
        return s.has(y) || (y && le(y.install) ? (s.add(y), y.install(v, ...E)) : le(y) && (s.add(y), y(v, ...E))), v;
      },
      mixin(y) {
        return o.mixins.includes(y) || o.mixins.push(y), v;
      },
      component(y, E) {
        return E ? (o.components[y] = E, v) : o.components[y];
      },
      directive(y, E) {
        return E ? (o.directives[y] = E, v) : o.directives[y];
      },
      mount(y, E, k) {
        if (!f) {
          const j = v._ceVNode || Xt(n, i);
          return j.appContext = o, k === !0 ? k = "svg" : k === !1 && (k = void 0), e(j, y, k), f = !0, v._container = y, y.__vue_app__ = v, Kn(j.component);
        }
      },
      onUnmount(y) {
        a.push(y);
      },
      unmount() {
        f && (Pt(
          a,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, E) {
        return o.provides[y] = E, v;
      },
      runWithContext(y) {
        const E = Lr;
        Lr = v;
        try {
          return y();
        } finally {
          Lr = E;
        }
      }
    };
    return v;
  };
}
let Lr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Rt(t)}Modifiers`] || e[`${Tr(t)}Modifiers`];
function ic(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ce;
  let i = r;
  const o = t.startsWith("update:"), s = o && nc(n, t.slice(7));
  s && (s.trim && (i = r.map((y) => Ie(y) ? y.trim() : y)), s.number && (i = i.map(Hn)));
  let a, f = n[a = ri(t)] || // also try camelCase event handler (#2249)
  n[a = ri(Rt(t))];
  !f && o && (f = n[a = ri(Tr(t))]), f && Pt(
    f,
    e,
    6,
    i
  );
  const v = n[a + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Pt(
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
  let s = {}, a = !1;
  if (!le(e)) {
    const f = (v) => {
      const y = Qs(v, t, !0);
      y && (a = !0, et(s, y));
    };
    !r && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !o && !a ? (Se(e) && n.set(e, null), null) : (ee(o) ? o.forEach((f) => s[f] = null) : et(s, o), Se(e) && n.set(e, s), s);
}
function Wn(e, t) {
  return !e || !Un(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ve(e, t[0].toLowerCase() + t.slice(1)) || ve(e, Tr(t)) || ve(e, t));
}
function wo(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: a,
    emit: f,
    render: v,
    renderCache: y,
    props: E,
    data: k,
    setupState: j,
    ctx: re,
    inheritAttrs: q
  } = e, se = On(e);
  let ne, z;
  try {
    if (r.shapeFlag & 4) {
      const V = i || n, ce = V;
      ne = Dt(
        v.call(
          ce,
          V,
          y,
          E,
          j,
          k,
          re
        )
      ), z = a;
    } else {
      const V = t;
      ne = Dt(
        V.length > 1 ? V(
          E,
          { attrs: a, slots: s, emit: f }
        ) : V(
          E,
          null
        )
      ), z = t.props ? a : sc(a);
    }
  } catch (V) {
    vr.length = 0, Vn(V, e, 1), ne = Xt(er);
  }
  let I = ne;
  if (z && q !== !1) {
    const V = Object.keys(z), { shapeFlag: ce } = I;
    V.length && ce & 7 && (o && V.some(Dn) && (z = lc(
      z,
      o
    )), I = Ur(I, z, !1, !0));
  }
  if (r.dirs && (I = Ur(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = Bn(I.type) && zs(I) || I;
    Yi(V, r.transition);
  }
  return ne = I, On(se), ne;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || Un(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!Dn(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function ac(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: f } = t, v = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return n ? Ro(n, s, v) : !!s;
    if (f & 8) {
      const y = t.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        const k = y[E];
        if (el(s, n, k) && !Wn(v, k))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? Ro(n, s, v) : !0 : !!s;
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
  return r === "style" && Se(n) && Se(i) ? !ar(n, i) : n !== i;
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
  } = e, a = /* @__PURE__ */ _e(i), [f] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const y = e.vnode.dynamicProps;
      for (let E = 0; E < y.length; E++) {
        let k = y[E];
        if (Wn(e.emitsOptions, k))
          continue;
        const j = t[k];
        if (f)
          if (ve(o, k))
            j !== o[k] && (o[k] = j, v = !0);
          else {
            const re = Rt(k);
            i[re] = Li(
              f,
              a,
              re,
              j,
              e,
              !1
            );
          }
        else
          j !== o[k] && (o[k] = j, v = !0);
      }
    }
  } else {
    il(e, t, i, o) && (v = !0);
    let y;
    for (const E in a)
      (!t || // for camelCase
      !ve(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Tr(E)) === E || !ve(t, y))) && (f ? r && // for camelCase
      (r[E] !== void 0 || // for kebab-case
      r[y] !== void 0) && (i[E] = Li(
        f,
        a,
        E,
        void 0,
        e,
        !0
      )) : delete i[E]);
    if (o !== a)
      for (const E in o)
        (!t || !ve(t, E)) && (delete o[E], v = !0);
  }
  v && Gt(e.attrs, "set", "");
}
function il(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let f in t) {
      if (Gr(f))
        continue;
      const v = t[f];
      let y;
      i && ve(i, y = Rt(f)) ? !o || !o.includes(y) ? r[y] = v : (a || (a = {}))[y] = v : Wn(e.emitsOptions, f) || (!(f in n) || v !== n[f]) && (n[f] = v, s = !0);
    }
  if (o) {
    const f = /* @__PURE__ */ _e(r), v = a || Ce;
    for (let y = 0; y < o.length; y++) {
      const E = o[y];
      r[E] = Li(
        i,
        f,
        E,
        v[E],
        e,
        !ve(v, E)
      );
    }
  }
  return s;
}
function Li(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = ve(s, "default");
    if (a && n === void 0) {
      const f = s.default;
      if (s.type !== Function && !s.skipFactory && le(f)) {
        const { propsDefaults: v } = i;
        if (r in v)
          n = v[r];
        else {
          const y = cn(i);
          n = v[r] = f.call(
            null,
            t
          ), y();
        }
      } else
        n = f;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !a ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Tr(r)) && (n = !0));
  }
  return n;
}
const dc = /* @__PURE__ */ new WeakMap();
function ol(e, t, r = !1) {
  const n = r ? dc : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let f = !1;
  if (!le(e)) {
    const y = (E) => {
      f = !0;
      const [k, j] = ol(E, t, !0);
      et(s, k), j && a.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!o && !f)
    return Se(e) && n.set(e, Nr), Nr;
  if (ee(o))
    for (let y = 0; y < o.length; y++) {
      const E = Rt(o[y]);
      Oo(E) && (s[E] = Ce);
    }
  else if (o)
    for (const y in o) {
      const E = Rt(y);
      if (Oo(E)) {
        const k = o[y], j = s[E] = ee(k) || le(k) ? { type: k } : et({}, k), re = j.type;
        let q = !1, se = !0;
        if (ee(re))
          for (let ne = 0; ne < re.length; ++ne) {
            const z = re[ne], I = le(z) && z.name;
            if (I === "Boolean") {
              q = !0;
              break;
            } else I === "String" && (se = !1);
          }
        else
          q = le(re) && re.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = q, j[
          1
          /* shouldCastTrue */
        ] = se, (q || ve(j, "default")) && a.push(E);
      }
    }
  const v = [s, a];
  return Se(e) && n.set(e, v), v;
}
function Oo(e) {
  return e[0] !== "$" && !Gr(e);
}
const Ji = (e) => e === "_" || e === "_ctx" || e === "$stable", Zi = (e) => ee(e) ? e.map(Dt) : [Dt(e)], pc = (e, t, r) => {
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
  let o = !0, s = Ce;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : al(i, t, r) : (o = !t.$stable, sl(t, i)), s = t;
  } else t && (ll(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Ji(a) && s[a] == null && delete i[a];
}, ft = vc;
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
    createText: a,
    createComment: f,
    setText: v,
    setElementText: y,
    parentNode: E,
    nextSibling: k,
    setScopeId: j = Ht,
    insertStaticContent: re
  } = e, q = (p, m, _, R = null, T = null, C = null, M = void 0, U = null, L = !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !$r(p, m) && (R = vt(p), Ue(p, T, C, !0), p = null), m.patchFlag === -2 && (L = !1, m.dynamicChildren = null);
    const { type: S, ref: K, shapeFlag: H } = m;
    switch (S) {
      case qn:
        se(p, m, _, R);
        break;
      case er:
        ne(p, m, _, R);
        break;
      case fi:
        p == null && z(m, _, R, M);
        break;
      case oe:
        lt(
          p,
          m,
          _,
          R,
          T,
          C,
          M,
          U,
          L
        );
        break;
      default:
        H & 1 ? ce(
          p,
          m,
          _,
          R,
          T,
          C,
          M,
          U,
          L
        ) : H & 6 ? Ge(
          p,
          m,
          _,
          R,
          T,
          C,
          M,
          U,
          L
        ) : (H & 64 || H & 128) && S.process(
          p,
          m,
          _,
          R,
          T,
          C,
          M,
          U,
          L,
          Xe
        );
    }
    K != null && T ? Jr(K, p && p.ref, C, m || p, !m) : K == null && p && p.ref != null && Jr(p.ref, null, C, p, !0);
  }, se = (p, m, _, R) => {
    if (p == null)
      n(
        m.el = a(m.children),
        _,
        R
      );
    else {
      const T = m.el = p.el;
      m.children !== p.children && v(T, m.children);
    }
  }, ne = (p, m, _, R) => {
    p == null ? n(
      m.el = f(m.children || ""),
      _,
      R
    ) : m.el = p.el;
  }, z = (p, m, _, R) => {
    [p.el, p.anchor] = re(
      p.children,
      m,
      _,
      R,
      p.el,
      p.anchor
    );
  }, I = ({ el: p, anchor: m }, _, R) => {
    let T;
    for (; p && p !== m; )
      T = k(p), n(p, _, R), p = T;
    n(m, _, R);
  }, V = ({ el: p, anchor: m }) => {
    let _;
    for (; p && p !== m; )
      _ = k(p), i(p), p = _;
    i(m);
  }, ce = (p, m, _, R, T, C, M, U, L) => {
    if (m.type === "svg" ? M = "svg" : m.type === "math" && (M = "mathml"), p == null)
      ke(
        m,
        _,
        R,
        T,
        C,
        M,
        U,
        L
      );
    else {
      const S = p.el && p.el._isVueCE ? p.el : null;
      try {
        S && S._beginPatch(), Ee(
          p,
          m,
          T,
          C,
          M,
          U,
          L
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, ke = (p, m, _, R, T, C, M, U) => {
    let L, S;
    const { props: K, shapeFlag: H, transition: W, dirs: G } = p;
    if (L = p.el = s(
      p.type,
      C,
      K && K.is,
      K
    ), H & 8 ? y(L, p.children) : H & 16 && ze(
      p.children,
      L,
      null,
      R,
      T,
      ui(p, C),
      M,
      U
    ), G && fr(p, null, R, "created"), Oe(L, p, p.scopeId, M, R), K) {
      for (const N in K)
        N !== "value" && !Gr(N) && o(L, N, null, K[N], C, R);
      "value" in K && o(L, "value", null, K.value, C), (S = K.onVnodeBeforeMount) && Mt(S, R, p);
    }
    G && fr(p, null, R, "beforeMount");
    const Q = gc(T, W);
    Q && W.beforeEnter(L), n(L, m, _), ((S = K && K.onVnodeMounted) || Q || G) && ft(() => {
      S && Mt(S, R, p), Q && W.enter(L), G && fr(p, null, R, "mounted");
    }, T);
  }, Oe = (p, m, _, R, T) => {
    if (_ && j(p, _), R)
      for (let C = 0; C < R.length; C++)
        j(p, R[C]);
    if (T) {
      let C = T.subTree;
      if (m === C || dl(C.type) && (C.ssContent === m || C.ssFallback === m)) {
        const M = T.vnode;
        Oe(
          p,
          M,
          M.scopeId,
          M.slotScopeIds,
          T.parent
        );
      }
    }
  }, ze = (p, m, _, R, T, C, M, U, L = 0) => {
    for (let S = L; S < p.length; S++) {
      const K = p[S] = U ? Kt(p[S]) : Dt(p[S]);
      q(
        null,
        K,
        m,
        _,
        R,
        T,
        C,
        M,
        U
      );
    }
  }, Ee = (p, m, _, R, T, C, M) => {
    const U = m.el = p.el;
    let { patchFlag: L, dynamicChildren: S, dirs: K } = m;
    L |= p.patchFlag & 16;
    const H = p.props || Ce, W = m.props || Ce;
    let G;
    if (_ && dr(_, !1), (G = W.onVnodeBeforeUpdate) && Mt(G, _, m, p), K && fr(m, p, _, "beforeUpdate"), _ && dr(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    S && (!p.dynamicChildren || p.dynamicChildren.length !== S.length) && (L = 0, M = !1, S = null), (H.innerHTML && W.innerHTML == null || H.textContent && W.textContent == null) && y(U, ""), S ? $e(
      p.dynamicChildren,
      S,
      U,
      _,
      R,
      ui(m, T),
      C
    ) : M || ae(
      p,
      m,
      U,
      null,
      _,
      R,
      ui(m, T),
      C,
      !1
    ), L > 0) {
      if (L & 16)
        tt(U, H, W, _, T);
      else if (L & 2 && H.class !== W.class && o(U, "class", null, W.class, T), L & 4 && o(U, "style", H.style, W.style, T), L & 8) {
        const Q = m.dynamicProps;
        for (let N = 0; N < Q.length; N++) {
          const P = Q[N], $ = H[P], J = W[P];
          (J !== $ || P === "value") && o(U, P, $, J, T, _);
        }
      }
      L & 1 && p.children !== m.children && y(U, m.children);
    } else !M && S == null && tt(U, H, W, _, T);
    ((G = W.onVnodeUpdated) || K) && ft(() => {
      G && Mt(G, _, m, p), K && fr(m, p, _, "updated");
    }, R);
  }, $e = (p, m, _, R, T, C, M) => {
    for (let U = 0; U < m.length; U++) {
      const L = p[U], S = m[U], K = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$r(L, S) || // - In the case of a component, it could contain anything.
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
        R,
        T,
        C,
        M,
        !0
      );
    }
  }, tt = (p, m, _, R, T) => {
    if (m !== _) {
      if (m !== Ce)
        for (const C in m)
          !Gr(C) && !(C in _) && o(
            p,
            C,
            m[C],
            null,
            T,
            R
          );
      for (const C in _) {
        if (Gr(C)) continue;
        const M = _[C], U = m[C];
        M !== U && C !== "value" && o(p, C, U, M, T, R);
      }
      "value" in _ && o(p, "value", m.value, _.value, T);
    }
  }, lt = (p, m, _, R, T, C, M, U, L) => {
    const S = m.el = p ? p.el : a(""), K = m.anchor = p ? p.anchor : a("");
    let { patchFlag: H, dynamicChildren: W, slotScopeIds: G } = m;
    G && (U = U ? U.concat(G) : G), p == null ? (n(S, _, R), n(K, _, R), ze(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      K,
      T,
      C,
      M,
      U,
      L
    )) : H > 0 && H & 64 && W && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === W.length ? ($e(
      p.dynamicChildren,
      W,
      _,
      T,
      C,
      M,
      U
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || T && m === T.subTree) && cl(
      p,
      m,
      !0
      /* shallow */
    )) : ae(
      p,
      m,
      _,
      K,
      T,
      C,
      M,
      U,
      L
    );
  }, Ge = (p, m, _, R, T, C, M, U, L) => {
    m.slotScopeIds = U, p == null ? m.shapeFlag & 512 ? T.ctx.activate(
      m,
      _,
      R,
      M,
      L
    ) : gt(
      m,
      _,
      R,
      T,
      C,
      M,
      L
    ) : Ve(p, m, L);
  }, gt = (p, m, _, R, T, C, M) => {
    const U = p.component = wc(
      p,
      R,
      T
    );
    if (Xi(p) && (U.ctx.renderer = Xe), Oc(U, !1, M), U.asyncDep) {
      if (T && T.registerDep(U, Le, M), !p.el) {
        const L = U.subTree = Xt(er);
        ne(null, L, m, _), p.placeholder = L.el;
      }
    } else
      Le(
        U,
        p,
        m,
        _,
        T,
        C,
        M
      );
  }, Ve = (p, m, _) => {
    const R = m.component = p.component;
    if (ac(p, m, _))
      if (R.asyncDep && !R.asyncResolved) {
        me(R, m, _);
        return;
      } else
        R.next = m, R.update();
    else
      m.el = p.el, R.vnode = m;
  }, Le = (p, m, _, R, T, C, M) => {
    const U = () => {
      if (p.isMounted) {
        let { next: H, bu: W, u: G, parent: Q, vnode: N } = p;
        {
          const he = ul(p);
          if (he) {
            H && (H.el = N.el, me(p, H, M)), he.asyncDep.then(() => {
              ft(() => {
                p.isUnmounted || S();
              }, T);
            });
            return;
          }
        }
        let P = H, $;
        dr(p, !1), H ? (H.el = N.el, me(p, H, M)) : H = N, W && Sn(W), ($ = H.props && H.props.onVnodeBeforeUpdate) && Mt($, Q, H, N), dr(p, !0);
        const J = wo(p), ie = p.subTree;
        p.subTree = J, q(
          ie,
          J,
          // parent may have changed if it's in a teleport
          E(ie.el),
          // anchor may have changed if it's in a fragment
          vt(ie),
          p,
          T,
          C
        ), H.el = J.el, P === null && cc(p, J.el), G && ft(G, T), ($ = H.props && H.props.onVnodeUpdated) && ft(
          () => Mt($, Q, H, N),
          T
        );
      } else {
        let H;
        const { el: W, props: G } = m, { bm: Q, m: N, parent: P, root: $, type: J } = p, ie = Zr(m);
        dr(p, !1), Q && Sn(Q), !ie && (H = G && G.onVnodeBeforeMount) && Mt(H, P, m), dr(p, !0);
        {
          $.ce && $.ce._hasShadowRoot() && $.ce._injectChildStyle(
            J,
            p.parent ? p.parent.type : void 0
          );
          const he = p.subTree = wo(p);
          q(
            null,
            he,
            _,
            R,
            p,
            T,
            C
          ), m.el = he.el;
        }
        if (N && ft(N, T), !ie && (H = G && G.onVnodeMounted)) {
          const he = m;
          ft(
            () => Mt(H, P, he),
            T
          );
        }
        (m.shapeFlag & 256 || P && Zr(P.vnode) && P.vnode.shapeFlag & 256) && p.a && ft(p.a, T), p.isMounted = !0, m = _ = R = null;
      }
    };
    p.scope.on();
    const L = p.effect = new Es(U);
    p.scope.off();
    const S = p.update = L.run.bind(L), K = p.job = L.runIfDirty.bind(L);
    K.i = p, K.id = p.uid, L.scheduler = () => Gi(K), dr(p, !0), S();
  }, me = (p, m, _) => {
    m.component = p;
    const R = p.vnode.props;
    p.vnode = m, p.next = null, fc(p, m.props, R, _), mc(p, m.children, _), Jt(), vo(p), Zt();
  }, ae = (p, m, _, R, T, C, M, U, L = !1) => {
    const S = p && p.children, K = p ? p.shapeFlag : 0, H = m.children, { patchFlag: W, shapeFlag: G } = m;
    if (W > 0) {
      if (W & 128) {
        xe(
          S,
          H,
          _,
          R,
          T,
          C,
          M,
          U,
          L
        );
        return;
      } else if (W & 256) {
        We(
          S,
          H,
          _,
          R,
          T,
          C,
          M,
          U,
          L
        );
        return;
      }
    }
    G & 8 ? (K & 16 && De(S, T, C), H !== S && y(_, H)) : K & 16 ? G & 16 ? xe(
      S,
      H,
      _,
      R,
      T,
      C,
      M,
      U,
      L
    ) : De(S, T, C, !0) : (K & 8 && y(_, ""), G & 16 && ze(
      H,
      _,
      R,
      T,
      C,
      M,
      U,
      L
    ));
  }, We = (p, m, _, R, T, C, M, U, L) => {
    p = p || Nr, m = m || Nr;
    const S = p.length, K = m.length, H = Math.min(S, K);
    let W;
    for (W = 0; W < H; W++) {
      const G = m[W] = L ? Kt(m[W]) : Dt(m[W]);
      q(
        p[W],
        G,
        _,
        null,
        T,
        C,
        M,
        U,
        L
      );
    }
    S > K ? De(
      p,
      T,
      C,
      !0,
      !1,
      H
    ) : ze(
      m,
      _,
      R,
      T,
      C,
      M,
      U,
      L,
      H
    );
  }, xe = (p, m, _, R, T, C, M, U, L) => {
    let S = 0;
    const K = m.length;
    let H = p.length - 1, W = K - 1;
    for (; S <= H && S <= W; ) {
      const G = p[S], Q = m[S] = L ? Kt(m[S]) : Dt(m[S]);
      if ($r(G, Q))
        q(
          G,
          Q,
          _,
          null,
          T,
          C,
          M,
          U,
          L
        );
      else
        break;
      S++;
    }
    for (; S <= H && S <= W; ) {
      const G = p[H], Q = m[W] = L ? Kt(m[W]) : Dt(m[W]);
      if ($r(G, Q))
        q(
          G,
          Q,
          _,
          null,
          T,
          C,
          M,
          U,
          L
        );
      else
        break;
      H--, W--;
    }
    if (S > H) {
      if (S <= W) {
        const G = W + 1, Q = G < K ? m[G].el : R;
        for (; S <= W; )
          q(
            null,
            m[S] = L ? Kt(m[S]) : Dt(m[S]),
            _,
            Q,
            T,
            C,
            M,
            U,
            L
          ), S++;
      }
    } else if (S > W)
      for (; S <= H; )
        Ue(p[S], T, C, !0), S++;
    else {
      const G = S, Q = S, N = /* @__PURE__ */ new Map();
      for (S = Q; S <= W; S++) {
        const ge = m[S] = L ? Kt(m[S]) : Dt(m[S]);
        ge.key != null && N.set(ge.key, S);
      }
      let P, $ = 0;
      const J = W - Q + 1;
      let ie = !1, he = 0;
      const ue = new Array(J);
      for (S = 0; S < J; S++) ue[S] = 0;
      for (S = G; S <= H; S++) {
        const ge = p[S];
        if ($ >= J) {
          Ue(ge, T, C, !0);
          continue;
        }
        let Re;
        if (ge.key != null)
          Re = N.get(ge.key);
        else
          for (P = Q; P <= W; P++)
            if (ue[P - Q] === 0 && $r(ge, m[P])) {
              Re = P;
              break;
            }
        Re === void 0 ? Ue(ge, T, C, !0) : (ue[Re - Q] = S + 1, Re >= he ? he = Re : ie = !0, q(
          ge,
          m[Re],
          _,
          null,
          T,
          C,
          M,
          U,
          L
        ), $++);
      }
      const Me = ie ? _c(ue) : Nr;
      for (P = Me.length - 1, S = J - 1; S >= 0; S--) {
        const ge = Q + S, Re = m[ge], at = m[ge + 1], kt = ge + 1 < K ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          at.el || fl(at)
        ) : R;
        ue[S] === 0 ? q(
          null,
          Re,
          _,
          kt,
          T,
          C,
          M,
          U,
          L
        ) : ie && (P < 0 || S !== Me[P] ? Ne(Re, _, kt, 2) : P--);
      }
    }
  }, Ne = (p, m, _, R, T = null) => {
    const { el: C, type: M, transition: U, children: L, shapeFlag: S } = p;
    if (S & 6) {
      Ne(p.component.subTree, m, _, R);
      return;
    }
    if (S & 128) {
      p.suspense.move(m, _, R);
      return;
    }
    if (S & 64) {
      M.move(p, m, _, Xe);
      return;
    }
    if (M === oe) {
      n(C, m, _);
      for (let H = 0; H < L.length; H++)
        Ne(L[H], m, _, R);
      n(p.anchor, m, _);
      return;
    }
    if (M === fi) {
      I(p, m, _);
      return;
    }
    if (R !== 2 && S & 1 && U)
      if (R === 0)
        U.persisted && !C[ai] ? n(C, m, _) : (U.beforeEnter(C), n(C, m, _), ft(() => U.enter(C), T));
      else {
        const { leave: H, delayLeave: W, afterLeave: G } = U, Q = () => {
          p.ctx.isUnmounted ? i(C) : n(C, m, _);
        }, N = () => {
          const P = C._isLeaving || !!C[ai];
          C._isLeaving && C[ai](
            !0
            /* cancelled */
          ), U.persisted && !P ? Q() : H(C, () => {
            Q(), G && G();
          });
        };
        W ? W(C, Q, N) : N();
      }
    else
      n(C, m, _);
  }, Ue = (p, m, _, R = !1, T = !1) => {
    const {
      type: C,
      props: M,
      ref: U,
      children: L,
      dynamicChildren: S,
      shapeFlag: K,
      patchFlag: H,
      dirs: W,
      cacheIndex: G,
      memo: Q
    } = p;
    if (H === -2 && (T = !1), U != null && (Jt(), Jr(U, null, _, p, !0), Zt()), G != null && (m.renderCache[G] = void 0), K & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const N = K & 1 && W, P = !Zr(p);
    let $;
    if (P && ($ = M && M.onVnodeBeforeUnmount) && Mt($, m, p), K & 6)
      jt(p.component, _, R);
    else {
      if (K & 128) {
        p.suspense.unmount(_, R);
        return;
      }
      N && fr(p, null, m, "beforeUnmount"), K & 64 ? p.type.remove(
        p,
        m,
        _,
        Xe,
        R
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (C !== oe || H > 0 && H & 64) ? De(
        S,
        m,
        _,
        !1,
        !0
      ) : (C === oe && H & 384 || !T && K & 16) && De(L, m, _), R && _t(p);
    }
    const J = Q != null && G == null;
    (P && ($ = M && M.onVnodeUnmounted) || N || J) && ft(() => {
      $ && Mt($, m, p), N && fr(p, null, m, "unmounted"), J && (p.el = null);
    }, _);
  }, _t = (p) => {
    const { type: m, el: _, anchor: R, transition: T } = p;
    if (m === oe) {
      fe(_, R);
      return;
    }
    if (m === fi) {
      V(p);
      return;
    }
    const C = () => {
      i(_), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (p.shapeFlag & 1 && T && !T.persisted) {
      const { leave: M, delayLeave: U } = T, L = () => M(_, C);
      U ? U(p.el, C, L) : L();
    } else
      C();
  }, fe = (p, m) => {
    let _;
    for (; p !== m; )
      _ = k(p), i(p), p = _;
    i(m);
  }, jt = (p, m, _) => {
    const { bum: R, scope: T, job: C, subTree: M, um: U, m: L, a: S } = p;
    No(L), No(S), R && Sn(R), T.stop(), C && (C.flags |= 8, Ue(M, p, m, _)), U && ft(U, m), ft(() => {
      p.isUnmounted = !0;
    }, m);
  }, De = (p, m, _, R = !1, T = !1, C = 0) => {
    for (let M = C; M < p.length; M++)
      Ue(p[M], m, _, R, T);
  }, vt = (p) => {
    if (p.shapeFlag & 6)
      return vt(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = k(p.anchor || p.el), _ = m && m[Ua];
    return _ ? k(_) : m;
  };
  let pt = !1;
  const Et = (p, m, _) => {
    let R;
    p == null ? m._vnode && (Ue(m._vnode, null, null, !0), R = m._vnode.component) : q(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = p, pt || (pt = !0, vo(R), Hs(), pt = !1);
  }, Xe = {
    p: q,
    um: Ue,
    m: Ne,
    r: _t,
    mt: gt,
    mc: ze,
    pc: ae,
    pbc: $e,
    n: vt,
    o: e
  };
  return {
    render: Et,
    hydrate: void 0,
    createApp: rc(Et)
  };
}
function ui({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function dr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cl(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (ee(n) && ee(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Kt(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && cl(s, a)), a.type === qn && (a.patchFlag === -1 && (a = i[o] = Kt(a)), a.el = s.el), a.type === er && !a.el && (a.el = s.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, i, o, s, a;
  const f = e.length;
  for (n = 0; n < f; n++) {
    const v = e[n];
    if (v !== 0) {
      if (i = r[r.length - 1], e[i] < v) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        a = o + s >> 1, e[r[a]] < v ? o = a + 1 : s = a;
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
  t && t.pendingBranch ? ee(e) ? t.effects.push(...e) : t.effects.push(e) : Na(e);
}
const oe = /* @__PURE__ */ Symbol.for("v-fgt"), qn = /* @__PURE__ */ Symbol.for("v-txt"), er = /* @__PURE__ */ Symbol.for("v-cmt"), fi = /* @__PURE__ */ Symbol.for("v-stc"), vr = [];
let yt = null;
function x(e = !1) {
  vr.push(yt = e ? null : []);
}
function pl() {
  vr.pop(), yt = vr[vr.length - 1] || null;
}
let nn = 1;
function Po(e, t = !1) {
  nn += e, e < 0 && yt && t && (yt.hasOnce = !0);
}
function hl(e) {
  return e.dynamicChildren = nn > 0 ? yt || Nr : null, pl(), nn > 0 && yt && yt.push(e), e;
}
function A(e, t, r, n, i, o) {
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
    Xt(
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
function $r(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bl = ({ key: e }) => e ?? null, xn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Ie(e) || /* @__PURE__ */ Qe(e) || le(e) ? { i: Ct, r: e, k: t, f: !!r } : e : null);
function u(e, t = null, r = null, n = 0, i = null, o = e === oe ? 0 : 1, s = !1, a = !1) {
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
    ctx: Ct
  };
  return a ? (kn(f, r), o & 128 && e.normalize(f)) : r && (f.shapeFlag |= Ie(r) ? 8 : 16), nn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  yt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && yt.push(f), f;
}
const Xt = Tc;
function Tc(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === Ga) && (e = er), ml(e)) {
    const a = Ur(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && kn(a, r), nn > 0 && !o && yt && (a.shapeFlag & 6 ? yt[yt.indexOf(e)] = a : yt.push(a)), a.patchFlag = -2, a;
  }
  if (Lc(e) && (e = e.__vccOpts), t) {
    t = Sc(t);
    let { class: a, style: f } = t;
    a && !Ie(a) && (t.class = Pr(a)), Se(f) && (/* @__PURE__ */ Ki(f) && !ee(f) && (f = et({}, f)), t.style = $i(f));
  }
  const s = Ie(e) ? 1 : dl(e) ? 128 : Bn(e) ? 64 : Se(e) ? 4 : le(e) ? 2 : 0;
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
  return e ? /* @__PURE__ */ Ki(e) || nl(e) ? et({}, e) : e : null;
}
function Ur(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: f } = e, v = t ? Cc(i || {}, t) : i, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && bl(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? ee(o) ? o.concat(xn(t)) : [o, xn(t)] : xn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== oe ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && Ur(e.ssContent),
    ssFallback: e.ssFallback && Ur(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && n && Yi(
    y,
    f.clone(y)
  ), y;
}
function ye(e = " ", t = 0) {
  return Xt(qn, null, e, t);
}
function de(e = "", t = !1) {
  return t ? (x(), Ec(er, null, e)) : Xt(er, null, e);
}
function Dt(e) {
  return e == null || typeof e == "boolean" ? Xt(er) : ee(e) ? Xt(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ml(e) ? Kt(e) : Xt(qn, null, String(e));
}
function Kt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ur(e);
}
function kn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ee(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), kn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !nl(t) ? t._ctx = Ct : i === 3 && Ct && (Ct.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (le(t)) {
    if (n & 65) {
      kn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Ct }, r = 32;
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
        t.class !== n.class && (t.class = Pr([t.class, n.class]));
      else if (i === "style")
        t.style = $i([t.style, n.style]);
      else if (Un(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(ee(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Dn(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function Mt(e, t, r, n = null) {
  Pt(e, t, 7, [
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
    propsDefaults: Ce,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Ce,
    data: Ce,
    props: Ce,
    attrs: Ce,
    slots: Ce,
    refs: Ce,
    setupState: Ce,
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
let st = null;
const Rc = () => st || Ct;
let Ln, on;
{
  const e = $n(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Ln = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => st = r
  ), on = t(
    "__VUE_SSR_SETTERS__",
    (r) => sn = r
  );
}
const cn = (e) => {
  const t = st;
  return Ln(e), e.scope.on(), () => {
    e.scope.off(), Ln(t);
  };
}, ko = () => {
  st && st.scope.off(), Ln(null);
};
function yl(e) {
  return e.vnode.shapeFlag & 4;
}
let sn = !1;
function Oc(e, t = !1, r = !1) {
  t && on(t);
  const { props: n, children: i } = e.vnode, o = yl(e);
  uc(e, n, o, t), hc(e, i, r || t);
  const s = o ? Nc(e, t) : void 0;
  return t && on(!1), s;
}
function Nc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ya);
  const { setup: n } = r;
  if (n) {
    Jt();
    const i = e.setupContext = n.length > 1 ? kc(e) : null, o = cn(e), s = an(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = ps(s);
    if (Zt(), o(), (a || e.sp) && !Zr(e) && Ws(e), a) {
      if (s.then(ko, ko), t)
        return s.then((f) => {
          on(!0);
          try {
            Lo(e, f, t);
          } finally {
            on(!1);
          }
        }).catch((f) => {
          Vn(f, e, 0);
        });
      e.asyncDep = s;
    } else
      Lo(e, s);
  } else
    gl(e);
}
function Lo(e, t, r) {
  le(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = Is(t)), gl(e);
}
function gl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Ht);
  {
    const i = cn(e);
    Jt();
    try {
      Xa(e);
    } finally {
      Zt(), i();
    }
  }
}
const Pc = {
  get(e, t) {
    return Ze(e, "get", ""), e[t];
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
      if (r in Qr)
        return Qr[r](e);
    },
    has(t, r) {
      return r in t || r in Qr;
    }
  })) : e.proxy;
}
function Lc(e) {
  return le(e) && "__vccOpts" in e;
}
const Z = (e, t) => /* @__PURE__ */ xa(e, t, sn), Mc = "3.5.42";
let Mi;
const Mo = typeof window < "u" && window.trustedTypes;
if (Mo)
  try {
    Mi = /* @__PURE__ */ Mo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _l = Mi ? (e) => Mi.createHTML(e) : (e) => e, Ic = "http://www.w3.org/2000/svg", Uc = "http://www.w3.org/1998/Math/MathML", qt = typeof document < "u" ? document : null, Io = qt && /* @__PURE__ */ qt.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? qt.createElementNS(Ic, e) : t === "mathml" ? qt.createElementNS(Uc, e) : r ? qt.createElement(e, { is: r }) : qt.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => qt.createTextNode(e),
  createComment: (e) => qt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => qt.querySelector(e),
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
      const a = Io.content;
      if (n === "svg" || n === "mathml") {
        const f = a.firstChild;
        for (; f.firstChild; )
          a.appendChild(f.firstChild);
        a.removeChild(f);
      }
      t.insertBefore(a, r);
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
const Uo = /* @__PURE__ */ Symbol("_vod"), $c = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function Bc(e, t, r) {
  const n = e.style, i = Ie(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Ie(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && qr(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && qr(n, s, "");
    for (const s in r) {
      s === "display" && (o = !0);
      const a = r[s];
      a != null ? Wc(
        e,
        s,
        !Ie(t) && t ? t[s] : void 0,
        a
      ) || qr(n, s, a) : qr(n, s, "");
    }
  } else if (i) {
    if (t !== r) {
      const s = n[jc];
      s && (r += ";" + s), n.cssText = r, o = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Uo in e && (e[Uo] = o ? n.display : "", e[$c] && (n.display = "none"));
}
const _n = /\s*!important$/;
function qr(e, t, r) {
  if (ee(r))
    r.forEach((n) => qr(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    _n.test(r) ? e.setProperty(t, r.replace(_n, ""), "important") : e.setProperty(t, r);
  else {
    const n = zc(e, t);
    _n.test(r) ? e.setProperty(
      Tr(n),
      r.replace(_n, ""),
      "important"
    ) : e[n] = r;
  }
}
const Do = ["Webkit", "Moz", "ms"], di = {};
function zc(e, t) {
  const r = di[t];
  if (r)
    return r;
  let n = Rt(t);
  if (n !== "filter" && n in e)
    return di[t] = n;
  n = bs(n);
  for (let i = 0; i < Do.length; i++) {
    const o = Do[i] + n;
    if (o in e)
      return di[t] = o;
  }
  return t;
}
function Wc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ie(n) && r === n;
}
const Fo = "http://www.w3.org/1999/xlink";
function Ho(e, t, r, n, i, o = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Fo, t.slice(6, t.length)) : e.setAttributeNS(Fo, t, r) : r == null || o && !gs(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : $t(r) ? String(r) : r
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
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, f = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (a !== f || !("_value" in e)) && (e.value = f), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const a = typeof e[t];
    a === "boolean" ? r = gs(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function br(e, t, r, n) {
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
    const [a, f] = Xc(t);
    if (n) {
      const v = o[t] = Qc(
        n,
        i
      );
      br(e, a, v, f);
    } else s && (qc(e, a, s, f), o[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Tr(e.slice(2)), t];
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
    if (ee(i)) {
      const o = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        o.call(n), n._stopped = !0;
      };
      const s = i.slice(), a = [n];
      for (let f = 0; f < s.length && !n._stopped; f++) {
        const v = s[f];
        v && Pt(
          v,
          t,
          5,
          a
        );
      }
    } else
      Pt(
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
  t === "class" ? Hc(e, n, s) : t === "style" ? Bc(e, r, n) : Un(t) ? Dn(t) || Kc(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, s)) ? ($o(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ho(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ie(n))) ? $o(e, Rt(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Ho(e, t, n, s));
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
  return Vo(t) && Ie(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Rt(t);
  return Array.isArray(r) ? r.some((i) => Rt(i) === n) : Object.keys(r).some((i) => Rt(i) === n);
}
const Mn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ee(t) ? (r) => Sn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function Bo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const yr = /* @__PURE__ */ Symbol("_assign"), vn = /* @__PURE__ */ Symbol("_initialValue");
function hi(e, t, r) {
  return t && (e = e.trim()), r && (e = Hn(e)), e;
}
const mi = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e.parentNode && (e.type === "text" ? e[vn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[vn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[yr] = Mn(i);
    const o = n || i.props && i.props.type === "number";
    br(e, t ? "change" : "input", (s) => {
      s.target.composing || e[yr](hi(e.value, r, o));
    }), (r || o) && br(e, "change", () => {
      e.value = hi(e.value, r, o);
    }), t || (br(e, "compositionstart", nu), br(e, "compositionend", Bo), br(e, "change", Bo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const i = t ?? "", o = e[vn];
    delete e[vn], o !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== o ? e[yr](hi(e.value, r, n)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[yr] = Mn(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Hn(e.value) : e.value, f = t ?? "";
    if (a === f)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === f) || (e.value = f);
  }
}, nt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, br(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => r ? Hn(In(f)) : In(f)
      ), o = e.multiple, s = o ? Er(e._modelValue) ? new Set(i) : i : i[0], a = e._pendingValue = [
        o,
        o ? ee(s) ? i.slice() : i : s
      ];
      try {
        e[yr](s);
      } finally {
        Ds(() => {
          e._pendingValue === a && (e._pendingValue = void 0);
        });
      }
    }), e[yr] = Mn(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    zo(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[yr] = Mn(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !iu(t, r[1], r[0])) && zo(e, t);
  }
};
function iu(e, t, r) {
  if (!r || ee(e)) return ar(e, t);
  if (Er(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function zo(e, t) {
  const r = e.multiple, n = ee(t);
  if (!(r && !n && !Er(t))) {
    for (let i = 0, o = e.options.length; i < o; i++) {
      const s = e.options[i], a = In(s);
      if (r)
        if (n) {
          const f = typeof a;
          f === "string" || f === "number" ? s.selected = t.some((v) => String(v) === String(a)) : s.selected = Zl(t, a) > -1;
        } else
          s.selected = t.has(a);
      else if (ar(In(s), t)) {
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
      const a = su[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, lu = /* @__PURE__ */ et({ patchProp: eu }, Dc);
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
  return Ie(e) ? document.querySelector(e) : e;
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
    var n, i, o, s, a = [], f = !0, v = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(f = (n = o.call(r)).done) && (a.push(n.value), a.length !== t); f = !0) ;
    } catch (y) {
      v = !0, i = y;
    } finally {
      try {
        if (!f && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (v) throw i;
      }
    }
    return a;
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
let Be = Object.freeze, Ke = Object.seal, Or = Object.create, El = typeof Reflect < "u" && Reflect, Ii = El.apply, Ui = El.construct;
Be || (Be = function(t) {
  return t;
});
Ke || (Ke = function(t) {
  return t;
});
Ii || (Ii = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    i[o - 2] = arguments[o];
  return t.apply(r, i);
});
Ui || (Ui = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  return new t(...n);
});
const mr = je(Array.prototype.forEach), Eu = je(Array.prototype.lastIndexOf), Go = je(Array.prototype.pop), jr = je(Array.prototype.push), Tu = je(Array.prototype.splice), Mr = Array.isArray, Kr = je(String.prototype.toLowerCase), bi = je(String.prototype.toString), Yo = je(String.prototype.match), Vr = je(String.prototype.replace), Xo = je(String.prototype.indexOf), Su = je(String.prototype.trim), Cu = je(Number.prototype.toString), xu = je(Boolean.prototype.toString), Jo = typeof BigInt > "u" ? null : je(BigInt.prototype.toString), Zo = typeof Symbol > "u" ? null : je(Symbol.prototype.toString), dt = je(Object.prototype.hasOwnProperty), Br = je(Object.prototype.toString), Je = je(RegExp.prototype.test), pr = Au(TypeError);
function je(e) {
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
    return Ui(e, r);
  };
}
function pe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Kr;
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
    dt(e, t) || (e[t] = null);
  return e;
}
function bt(e) {
  const t = Or(null);
  for (const n of vl(e)) {
    var r = bu(n, 2);
    const i = r[0], o = r[1];
    dt(e, i) && (Mr(o) ? t[i] = wu(o) : o && typeof o == "object" && o.constructor === Object ? t[i] = bt(o) : t[i] = o);
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
      return Br(e);
    case "function":
    case "object": {
      if (e === null)
        return Br(e);
      const t = e, r = wt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : Br(n);
      }
      return Br(e);
    }
    default:
      return Br(e);
  }
}
function wt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return je(n.get);
      if (typeof n.value == "function")
        return je(n.value);
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
    return Je(e, ""), !0;
  } catch {
    return !1;
  }
}
const Qo = Be(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), yi = Be(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), gi = Be(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Nu = Be(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _i = Be(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Pu = Be(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), es = Be(["#text"]), ts = Be(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), vi = Be(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), rs = Be(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Tn = Be(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ku = Ke(/{{[\w\W]*|^[\w\W]*}}/g), Lu = Ke(/<%[\w\W]*|^[\w\W]*%>/g), Mu = Ke(/\${[\w\W]*/g), Iu = Ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), Uu = Ke(/^aria-[\-\w]+$/), ns = Ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = Ke(/^(?:\w+script|data):/i), Fu = Ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Hu = Ke(/^html$/i), $u = Ke(/^[a-z][.\w]*(-[.\w]+)+$/i), is = Ke(/<[/\w!]/g), os = Ke(/<[/\w]/g), ju = Ke(/<\/no(script|embed|frames)/i), Vu = Ke(/\/>/i), mt = {
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
}, Tl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], Bu = Be(pe({}, Tl)), zu = (function() {
  const e = {};
  return mr(Tl, (t) => {
    e[t] = Ke(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Be(e);
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
}, ir = function(t, r, n, i) {
  return dt(t, r) && Mr(t[r]) ? pe(i.base ? bt(i.base) : {}, t[r], i.transform) : n;
}, Ei = function(t, r, n) {
  const i = dt(t, r) ? t[r] : void 0;
  return i && typeof i == "object" ? bt(i) : n();
};
function Sl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Wu();
  const t = (F) => Sl(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== mt.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, i = n.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, s = e.Node, a = e.Element, f = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, E = e.trustedTypes, k = a.prototype, j = wt(k, "cloneNode"), re = wt(k, "remove"), q = wt(k, "nextSibling"), se = wt(k, "childNodes"), ne = wt(k, "parentNode"), z = wt(k, "shadowRoot"), I = wt(k, "attributes"), V = s && s.prototype ? wt(s.prototype, "nodeType") : null, ce = s && s.prototype ? wt(s.prototype, "nodeName") : null, ke = s && s.prototype ? wt(s.prototype, "ownerDocument") : null, Oe = function(c) {
    return V ? V(c) : c.nodeType;
  }, ze = function(c) {
    return ce ? ce(c) : c.nodeName;
  };
  if (typeof o == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, $e = "", tt, lt = !1, Ge = 0;
  const gt = function() {
    if (Ge > 0)
      throw pr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Ve = function(c) {
    gt(), Ge++;
    try {
      return Ee.createHTML(c);
    } finally {
      Ge--;
    }
  }, Le = function(c) {
    gt(), Ge++;
    try {
      return Ee.createScriptURL(c);
    } finally {
      Ge--;
    }
  }, me = function() {
    return lt || (tt = qu(E, i), lt = !0), tt;
  }, ae = r, We = ae.implementation, xe = ae.createNodeIterator, Ne = ae.createDocumentFragment, Ue = ae.getElementsByTagName, _t = n.importNode;
  let fe = ss();
  t.isSupported = typeof vl == "function" && typeof ne == "function" && We && We.createHTMLDocument !== void 0;
  const jt = ku, De = Lu, vt = Mu, pt = Iu, Et = Uu, Xe = Du, Tt = Fu, p = $u;
  let m = ns, _ = null;
  const R = pe({}, [...Qo, ...yi, ...gi, ..._i, ...es]);
  let T = null;
  const C = pe({}, [...ts, ...vi, ...rs, ...Tn]);
  let M = Object.seal(Or(null, {
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
  })), U = null, L = null;
  const S = Object.seal(Or(null, {
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
  let K = !0, H = !0, W = !1, G = !0, Q = !1, N = !0, P = !1, $ = !1, J = null, ie = null, he = !1, ue = !1, Me = !1, ge = !1, Re = !0, at = !1;
  const kt = "user-content-";
  let Vt = !0, cr = !1, At = {}, St = null;
  const rr = pe({}, [
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
  let Bt = null;
  const zt = pe({}, ["audio", "video", "img", "source", "image", "track"]);
  let D = null;
  const O = pe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), h = "http://www.w3.org/1998/Math/MathML", be = "http://www.w3.org/2000/svg", Fe = "http://www.w3.org/1999/xhtml";
  let ht = Fe, Gn = !1, Yn = null;
  const xl = pe({}, [h, be, Fe], bi), Qi = Be(["mi", "mo", "mn", "ms", "mtext"]);
  let Xn = pe({}, Qi);
  const eo = Be(["annotation-xml"]);
  let Jn = pe({}, eo);
  const Al = pe({}, ["title", "style", "font", "a", "script"]);
  let Dr = null;
  const wl = ["application/xhtml+xml", "text/html"], Rl = "text/html";
  let He = null, Sr = null;
  const Ol = r.createElement("form"), to = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, Zn = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Sr && Sr === c)
      return;
    (!c || typeof c != "object") && (c = {}), c = bt(c), Dr = // eslint-disable-next-line unicorn/prefer-includes
    wl.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? Rl : c.PARSER_MEDIA_TYPE, He = Dr === "application/xhtml+xml" ? bi : Kr, _ = ir(c, "ALLOWED_TAGS", R, {
      transform: He
    }), T = ir(c, "ALLOWED_ATTR", C, {
      transform: He
    }), Yn = ir(c, "ALLOWED_NAMESPACES", xl, {
      transform: bi
    }), D = ir(c, "ADD_URI_SAFE_ATTR", O, {
      transform: He,
      base: O
    }), Bt = ir(c, "ADD_DATA_URI_TAGS", zt, {
      transform: He,
      base: zt
    }), St = ir(c, "FORBID_CONTENTS", rr, {
      transform: He
    }), U = ir(c, "FORBID_TAGS", bt({}), {
      transform: He
    }), L = ir(c, "FORBID_ATTR", bt({}), {
      transform: He
    }), At = dt(c, "USE_PROFILES") ? c.USE_PROFILES && typeof c.USE_PROFILES == "object" ? bt(c.USE_PROFILES) : c.USE_PROFILES : !1, K = c.ALLOW_ARIA_ATTR !== !1, H = c.ALLOW_DATA_ATTR !== !1, W = c.ALLOW_UNKNOWN_PROTOCOLS || !1, G = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Q = c.SAFE_FOR_TEMPLATES || !1, N = c.SAFE_FOR_XML !== !1, P = c.WHOLE_DOCUMENT || !1, ue = c.RETURN_DOM || !1, Me = c.RETURN_DOM_FRAGMENT || !1, ge = c.RETURN_TRUSTED_TYPE || !1, he = c.FORCE_BODY || !1, Re = c.SANITIZE_DOM !== !1, at = c.SANITIZE_NAMED_PROPS || !1, Vt = c.KEEP_CONTENT !== !1, cr = c.IN_PLACE || !1, m = Ou(c.ALLOWED_URI_REGEXP) ? c.ALLOWED_URI_REGEXP : ns, ht = typeof c.NAMESPACE == "string" ? c.NAMESPACE : Fe, Xn = Ei(
      c,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => pe({}, Qi)
      // Default built-in map
    ), Jn = Ei(
      c,
      "HTML_INTEGRATION_POINTS",
      () => pe({}, eo)
      // Default built-in map
    );
    const g = Ei(c, "CUSTOM_ELEMENT_HANDLING", () => Or(null));
    if (M = Or(null), dt(g, "tagNameCheck") && to(g.tagNameCheck) && (M.tagNameCheck = g.tagNameCheck), dt(g, "attributeNameCheck") && to(g.attributeNameCheck) && (M.attributeNameCheck = g.attributeNameCheck), dt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ke(M), Q && (H = !1), Me && (ue = !0), At && (_ = pe({}, es), T = Or(null), At.html === !0 && (pe(_, Qo), pe(T, ts)), At.svg === !0 && (pe(_, yi), pe(T, vi), pe(T, Tn)), At.svgFilters === !0 && (pe(_, gi), pe(T, vi), pe(T, Tn)), At.mathMl === !0 && (pe(_, _i), pe(T, rs), pe(T, Tn))), S.tagCheck = null, S.attributeCheck = null, dt(c, "ADD_TAGS") && (typeof c.ADD_TAGS == "function" ? S.tagCheck = c.ADD_TAGS : Mr(c.ADD_TAGS) && (_ === R && (_ = bt(_)), pe(_, c.ADD_TAGS, He))), dt(c, "ADD_ATTR") && (typeof c.ADD_ATTR == "function" ? S.attributeCheck = c.ADD_ATTR : Mr(c.ADD_ATTR) && (T === C && (T = bt(T)), pe(T, c.ADD_ATTR, He))), dt(c, "ADD_FORBID_CONTENTS") && Mr(c.ADD_FORBID_CONTENTS) && (St === rr && (St = bt(St)), pe(St, c.ADD_FORBID_CONTENTS, He)), Vt && (_["#text"] = !0), P && pe(_, ["html", "head", "body"]), _.table && (pe(_, ["tbody"]), delete U.tbody), c.TRUSTED_TYPES_POLICY) {
      if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw pr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw pr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const w = Ee;
      Ee = c.TRUSTED_TYPES_POLICY;
      try {
        $e = Ve("");
      } catch (B) {
        throw Ee = w, B;
      }
    } else c.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, $e = "") : (Ee === void 0 && (Ee = me()), Ee && typeof $e == "string" && ($e = Ve("")));
    Be && Be(c), Sr = c;
  }, ro = pe({}, [...yi, ...gi, ...Nu]), no = pe({}, [..._i, ...Pu]), Nl = function(c, g, w) {
    return g.namespaceURI === Fe ? c === "svg" : g.namespaceURI === h ? c === "svg" && (w === "annotation-xml" || Xn[w]) : !!ro[c];
  }, Pl = function(c, g, w) {
    return g.namespaceURI === Fe ? c === "math" : g.namespaceURI === be ? c === "math" && Jn[w] : !!no[c];
  }, kl = function(c, g, w) {
    return g.namespaceURI === be && !Jn[w] || g.namespaceURI === h && !Xn[w] ? !1 : !no[c] && (Al[c] || !ro[c]);
  }, Ll = function(c) {
    let g = ne(c);
    (!g || !g.tagName) && (g = {
      namespaceURI: ht,
      tagName: "template"
    });
    const w = Kr(c.tagName), B = Kr(g.tagName);
    return Yn[c.namespaceURI] ? c.namespaceURI === be ? Nl(w, g, B) : c.namespaceURI === h ? Pl(w, g, B) : c.namespaceURI === Fe ? kl(w, g, B) : !!(Dr === "application/xhtml+xml" && Yn[c.namespaceURI]) : !1;
  }, nr = function(c) {
    jr(t.removed, {
      element: c
    });
    try {
      ne(c).removeChild(c);
    } catch {
      if (re(c), !ne(c))
        throw pr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, io = function(c, g, w) {
    try {
      c.removeAttributeNode(g);
    } catch {
      try {
        c.removeAttribute(w);
      } catch {
      }
    }
  }, un = function(c) {
    fn(c);
    const g = se(c);
    if (g) {
      const B = [];
      mr(g, (X) => {
        jr(B, X);
      }), mr(B, (X) => {
        try {
          re(X);
        } catch {
        }
      });
    }
    const w = I(c);
    if (w)
      for (let B = w.length - 1; B >= 0; --B) {
        const X = w[B], te = X && X.name;
        typeof te == "string" && io(c, X, te);
      }
  }, ur = function(c, g, w) {
    if (!w)
      try {
        w = g.getAttributeNode(c);
      } catch {
        w = null;
      }
    jr(t.removed, {
      attribute: w || null,
      from: g
    });
    try {
      w ? g.removeAttributeNode(w) : g.removeAttribute(c);
    } catch {
      try {
        g.removeAttribute(c);
      } catch {
      }
    }
    if (c === "is")
      if (ue || Me)
        try {
          nr(g);
        } catch {
        }
      else
        try {
          g.setAttribute(c, "");
        } catch {
        }
  }, Ml = function(c) {
    const g = I(c);
    if (g)
      for (let w = g.length - 1; w >= 0; --w) {
        const B = g[w], X = B && B.name;
        typeof X != "string" || T[He(X)] || io(c, B, X);
      }
  }, fn = function(c) {
    const g = [c];
    for (; g.length > 0; ) {
      const w = g.pop();
      Oe(w) === mt.element && Ml(w);
      const X = se(w);
      if (X)
        for (let te = X.length - 1; te >= 0; --te)
          g.push(X[te]);
    }
  }, oo = function(c, g) {
    return N ? c === "patchsrc" ? !0 : c === "for" && g !== "label" && g !== "output" : !1;
  }, Il = function(c) {
    if (!N)
      return;
    const g = [c];
    for (; g.length > 0; ) {
      const w = g.pop(), B = Oe(w);
      if (B === mt.processingInstruction || B === mt.comment && Je(os, w.data)) {
        try {
          re(w);
        } catch {
        }
        continue;
      }
      if (B === mt.element) {
        const te = w, Ae = He(ze(w));
        try {
          te.hasAttribute && te.hasAttribute("patchsrc") && te.removeAttribute("patchsrc"), te.hasAttribute && te.hasAttribute("for") && oo("for", Ae) && te.removeAttribute("for");
        } catch {
        }
      }
      const X = se(w);
      if (X)
        for (let te = X.length - 1; te >= 0; --te)
          g.push(X[te]);
    }
  }, so = function(c) {
    let g = null, w = null;
    if (he)
      c = "<remove></remove>" + c;
    else {
      const te = Yo(c, /^[\r\n\t ]+/);
      w = te && te[0];
    }
    Dr === "application/xhtml+xml" && ht === Fe && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const B = Ee ? Ve(c) : c;
    if (ht === Fe)
      try {
        g = new y().parseFromString(B, Dr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = We.createDocument(ht, "template", null);
      try {
        g.documentElement.innerHTML = Gn ? $e : B;
      } catch {
      }
    }
    const X = g.body || g.documentElement;
    return c && w && X.insertBefore(r.createTextNode(w), X.childNodes[0] || null), ht === Fe ? Ue.call(g, P ? "html" : "body")[0] : P ? g.documentElement : X;
  }, lo = function(c) {
    const g = ke ? ke(c) : c.ownerDocument;
    return xe.call(
      g || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, dn = function(c) {
    return c = Vr(c, jt, " "), c = Vr(c, De, " "), c = Vr(c, vt, " "), c;
  }, Qn = function(c) {
    var g;
    c.normalize();
    const w = ke ? ke(c) : c.ownerDocument, B = xe.call(
      w || c,
      c,
      // eslint-disable-next-line no-bitwise
      f.SHOW_TEXT | f.SHOW_COMMENT | f.SHOW_CDATA_SECTION | f.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let X = B.nextNode();
    for (; X; )
      X.data = dn(X.data), X = B.nextNode();
    const te = (g = c.querySelectorAll) === null || g === void 0 ? void 0 : g.call(c, "template");
    te && mr(te, (Ae) => {
      Cr(Ae.content) && Qn(Ae.content);
    });
  }, pn = function(c) {
    const g = ce ? ce(c) : null;
    return typeof g != "string" || He(g) !== "form" ? !1 : typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    c.attributes !== I(c) || typeof c.removeAttribute != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
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
    c.childNodes !== se(c);
  }, Cr = function(c) {
    if (!V || typeof c != "object" || c === null)
      return !1;
    try {
      return V(c) === mt.documentFragment;
    } catch {
      return !1;
    }
  }, Fr = function(c) {
    if (!V || typeof c != "object" || c === null)
      return !1;
    try {
      return typeof V(c) == "number";
    } catch {
      return !1;
    }
  };
  function Lt(F, c, g) {
    F.length !== 0 && mr(F, (w) => {
      w.call(t, c, g, Sr);
    });
  }
  const Ul = function(c, g) {
    return !!(N && c.hasChildNodes() && !Fr(c.firstElementChild) && Je(is, c.textContent) && Je(is, c.innerHTML) || N && c.namespaceURI === Fe && Bu[g] && (Fr(c.firstElementChild) || typeof c.textContent == "string" && Je(zu[g], c.textContent)) || c.nodeType === mt.processingInstruction || N && c.nodeType === mt.comment && Je(os, c.data));
  }, hn = function(c, g) {
    if (c instanceof RegExp)
      return Je(c, g);
    if (c instanceof Function) {
      for (var w = arguments.length, B = new Array(w > 2 ? w - 2 : 0), X = 2; X < w; X++)
        B[X - 2] = arguments[X];
      return !!c(g, ...B);
    }
    return !1;
  }, Dl = function(c, g, w) {
    if (!U[g] && po(g) && hn(M.tagNameCheck, g))
      return !1;
    if (Vt && !St[g]) {
      const B = ne(c), X = se(c);
      if (X && B) {
        const te = X.length;
        for (let Ae = te - 1; Ae >= 0; --Ae) {
          const Pe = c === w ? j(X[Ae], !0) : X[Ae];
          B.insertBefore(Pe, q(c));
        }
      }
    }
    return nr(c), !0;
  }, ao = function(c, g, w, B) {
    return c.length === 0 ? g : g === w || g === B ? bt(g) : g;
  }, co = function(c, g) {
    return c === g || ne(c) !== null ? !1 : (cr && fn(c), !0);
  }, uo = function(c, g) {
    if (Lt(fe.beforeSanitizeElements, c, null), co(c, g))
      return !0;
    if (pn(c))
      return nr(c), !0;
    const w = He(ze(c));
    if (_ = ao(fe.uponSanitizeElement, _, R, J), Lt(fe.uponSanitizeElement, c, {
      tagName: w,
      allowedTags: _
    }), co(c, g))
      return !0;
    if (Ul(c, w))
      return nr(c), !0;
    if (U[w] || !(S.tagCheck instanceof Function && S.tagCheck(w)) && !_[w]) {
      const X = Dl(c, w, g);
      return X === !1 && Lt(fe.afterSanitizeElements, c, null), X;
    }
    if (Oe(c) === mt.element && !Ll(c) || (w === "noscript" || w === "noembed" || w === "noframes") && Je(ju, c.innerHTML))
      return nr(c), !0;
    if (Q && c.nodeType === mt.text) {
      const X = dn(c.textContent);
      c.textContent !== X && (jr(t.removed, {
        element: c.cloneNode()
      }), c.textContent = X);
    }
    return Lt(fe.afterSanitizeElements, c, null), !1;
  }, fo = function(c, g, w) {
    if (L[g] || oo(g, c) || Re && (g === "id" || g === "name") && (w in r || w in Ol))
      return !1;
    const B = T[g] || S.attributeCheck instanceof Function && S.attributeCheck(g, c);
    return H && Je(pt, g) || K && Je(Et, g) ? !0 : B ? D[g] || Je(m, Vr(w, Tt, "")) || (g === "src" || g === "xlink:href" || g === "href") && c !== "script" && Xo(w, "data:") === 0 && Bt[c] || W && !Je(Xe, Vr(w, Tt, "")) ? !0 : !w : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      po(c) && hn(M.tagNameCheck, c) && hn(M.attributeNameCheck, g, c) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && M.allowCustomizedBuiltInElements && hn(M.tagNameCheck, w)
    );
  }, Fl = pe({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), po = function(c) {
    return !Fl[Kr(c)] && Je(p, c);
  }, Hl = function(c, g, w, B) {
    if (Ee && typeof E == "object" && typeof E.getAttributeType == "function" && !w)
      switch (E.getAttributeType(c, g)) {
        case "TrustedHTML":
          return Ve(B);
        case "TrustedScriptURL":
          return Le(B);
      }
    return B;
  }, $l = function(c, g, w, B) {
    try {
      w ? c.setAttributeNS(w, g, B) : c.setAttribute(g, B), pn(c) ? nr(c) : Go(t.removed);
    } catch {
      ur(g, c);
    }
  }, ho = function(c) {
    Lt(fe.beforeSanitizeAttributes, c, null);
    const g = c.attributes;
    if (!g || pn(c))
      return;
    T = ao(fe.uponSanitizeAttribute, T, C, ie);
    const w = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const X = He(c.nodeName);
    for (; B--; ) {
      const te = g[B], Ae = te.name, Pe = te.namespaceURI, ct = te.value, ut = He(Ae), ti = ct;
      let rt = Ae === "value" ? ti : Su(ti);
      if (w.attrName = ut, w.attrValue = rt, w.keepAttr = !0, w.forceKeepAttr = void 0, Lt(fe.uponSanitizeAttribute, c, w), rt = w.attrValue, at && (ut === "id" || ut === "name") && Xo(rt, kt) !== 0 && (ur(Ae, c, te), rt = kt + rt), N && Je(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, rt)) {
        ur(Ae, c, te);
        continue;
      }
      if (ut === "attributename" && Yo(rt, "href")) {
        ur(Ae, c, te);
        continue;
      }
      if (!w.forceKeepAttr) {
        if (!w.keepAttr) {
          ur(Ae, c, te);
          continue;
        }
        if (!G && Je(Vu, rt)) {
          ur(Ae, c, te);
          continue;
        }
        if (Q && (rt = dn(rt)), !fo(X, ut, rt)) {
          ur(Ae, c, te);
          continue;
        }
        rt = Hl(X, ut, Pe, rt), rt !== ti && $l(c, Ae, Pe, rt);
      }
    }
    Lt(fe.afterSanitizeAttributes, c, null);
  }, mn = function(c) {
    let g = null;
    const w = lo(c);
    for (Lt(fe.beforeSanitizeShadowDOM, c, null); g = w.nextNode(); )
      if (Lt(fe.uponSanitizeShadowNode, g, null), uo(g, c), ho(g), Cr(g.content) && mn(g.content), Oe(g) === mt.element) {
        const B = z(g);
        Cr(B) && (ei(B), mn(B));
      }
    Lt(fe.afterSanitizeShadowDOM, c, null);
  }, ei = function(c) {
    const g = [{
      node: c,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const w = g.pop();
      if (w.shadow) {
        mn(w.shadow);
        continue;
      }
      const B = w.node, te = Oe(B) === mt.element, Ae = se(B);
      if (Ae)
        for (let Pe = Ae.length - 1; Pe >= 0; --Pe)
          g.push({
            node: Ae[Pe],
            shadow: null
          });
      if (te) {
        const Pe = ce ? ce(B) : null;
        if (typeof Pe == "string" && He(Pe) === "template") {
          const ct = B.content;
          Cr(ct) && g.push({
            node: ct,
            shadow: null
          });
        }
      }
      if (te) {
        const Pe = z(B);
        Cr(Pe) && g.push({
          node: null,
          shadow: Pe
        }, {
          node: Pe,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, w = null, B = null, X = null;
    if (Gn = !F, Gn && (F = "<!-->"), typeof F != "string" && !Fr(F) && (F = Ru(F), typeof F != "string"))
      throw pr("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    $ ? (_ = J, T = ie) : Zn(c), (fe.uponSanitizeElement.length > 0 || fe.uponSanitizeAttribute.length > 0) && (_ = bt(_)), fe.uponSanitizeAttribute.length > 0 && (T = bt(T)), t.removed = [];
    const te = cr && typeof F != "string" && Fr(F);
    if (te) {
      Il(F);
      const ct = ze(F);
      if (typeof ct == "string") {
        const ut = He(ct);
        if (!_[ut] || U[ut])
          throw un(F), pr("root node is forbidden and cannot be sanitized in-place");
      }
      if (pn(F))
        throw un(F), pr("root node is clobbered and cannot be sanitized in-place");
      try {
        ei(F);
      } catch (ut) {
        throw un(F), ut;
      }
    } else if (Fr(F))
      g = so("<!---->"), w = g.ownerDocument.importNode(F, !0), w.nodeType === mt.element && w.nodeName === "BODY" || w.nodeName === "HTML" ? g = w : g.appendChild(w), ei(w);
    else {
      if (!ue && !Q && !P && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && ge ? Ve(F) : F;
      if (g = so(F), !g)
        return ue ? null : ge ? $e : "";
    }
    g && he && nr(g.firstChild);
    const Ae = te ? F : g;
    try {
      const ct = lo(Ae);
      for (; B = ct.nextNode(); )
        uo(B, Ae), ho(B), Cr(B.content) && mn(B.content);
    } catch (ct) {
      throw te && (un(F), mr(t.removed, (ut) => {
        ut.element && fn(ut.element);
      })), ct;
    }
    if (te)
      return mr(t.removed, (ct) => {
        ct.element && fn(ct.element);
      }), Q && Qn(F), F;
    if (ue) {
      if (Q && Qn(g), Me)
        for (X = Ne.call(g.ownerDocument); g.firstChild; )
          X.appendChild(g.firstChild);
      else
        X = g;
      return (T.shadowroot || T.shadowrootmode) && (X = _t.call(n, X, !0)), X;
    }
    let Pe = P ? g.outerHTML : g.innerHTML;
    return P && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Je(Hu, g.ownerDocument.doctype.name) && (Pe = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Pe), Q && (Pe = dn(Pe)), Ee && ge ? Ve(Pe) : Pe;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zn(F), $ = !0, J = _, ie = T;
  }, t.clearConfig = function() {
    Sr = null, $ = !1, J = null, ie = null, Ee = tt, $e = "";
  }, t.isValidAttribute = function(F, c, g) {
    Sr || Zn({});
    const w = He(F), B = He(c);
    return fo(w, B, g);
  }, t.addHook = function(F, c) {
    typeof c == "function" && dt(fe, F) && jr(fe[F], c);
  }, t.removeHook = function(F, c) {
    if (dt(fe, F)) {
      if (c !== void 0) {
        const g = Eu(fe[F], c);
        return g === -1 ? void 0 : Tu(fe[F], g, 1)[0];
      }
      return Go(fe[F]);
    }
  }, t.removeHooks = function(F) {
    dt(fe, F) && (fe[F] = []);
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
    var o, s = "", a = 0, f = 0;
    for (a = i.index; a < n.length; a++) {
      switch (n.charCodeAt(a)) {
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
      f !== a && (s += n.substring(f, a)), f = a + 1, s += o;
    }
    return f !== a ? s + n.substring(f, a) : s;
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
function l(e, t, r, n, i) {
  const o = typeof r == "object" ? r : void 0, s = typeof n == "number" ? n : typeof r == "number" ? r : void 0, a = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof i == "object" ? i : typeof n == "object" ? n : {}
  }, f = (q) => q, v = (a.sanitize ? Ku.sanitize : f) || f, y = a.escape ? as : f, E = (q) => typeof q == "string" || typeof q == "number", k = (q, se, ne) => q.replace(/%n/g, "" + ne).replace(/{([^{}]*)}/g, (z, I) => {
    if (se === void 0 || !(I in se))
      return y(z);
    const V = se[I];
    return E(V) ? y(`${V}`) : typeof V == "object" && E(V.value) ? (V.escape !== !1 ? as : f)(`${V.value}`) : y(z);
  });
  let re = (i?.bundle ?? Ju(e)).translations[t] || t;
  return re = Array.isArray(re) ? re[0] : re, v(typeof o == "object" || s !== void 0 ? k(
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
}, rf = { id: "library-catalogue-heading" }, nf = { class: "library-muted" }, of = ["aria-label"], sf = { class: "library-catalogue-actions-list" }, lf = ["href"], af = ["href"], cf = ["href"], uf = ["href"], ff = {
  class: "library-actions-health-overview",
  "aria-labelledby": "library-actions-health-heading"
}, df = { class: "library-muted library-catalogue-eyebrow" }, pf = { id: "library-actions-health-heading" }, hf = { class: "library-muted" }, mf = {
  key: 0,
  class: "library-muted"
}, bf = {
  key: 1,
  class: "library-notice"
}, yf = {
  key: 2,
  class: "library-muted"
}, gf = { class: "library-actions-health-links" }, _f = ["href"], vf = ["href"], Ef = ["href"], Tf = ["href"], Sf = { class: "library-actions-health-grid" }, Cf = { class: "library-import-health-number" }, xf = { class: "library-import-health-number" }, Af = { class: "library-muted" }, wf = { class: "library-muted" }, Rf = { class: "library-muted" }, Of = {
  key: 0,
  class: "library-import-health-examples"
}, Nf = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Pf = ["aria-label"], kf = ["name", "value"], Lf = { class: "library-quick-search-row" }, Mf = { class: "library-quick-filter-search" }, If = ["aria-label"], Uf = { class: "library-quick-filter-options" }, Df = { class: "library-quick-filter-option-grid" }, Ff = { value: "title" }, Hf = { value: "recent" }, $f = { value: "publicationDate" }, jf = { value: "publication" }, Vf = { value: "lastOpened" }, Bf = { value: "format" }, zf = { value: "" }, Wf = { value: "1" }, qf = ["value"], Kf = ["value"], Gf = ["aria-label"], Yf = ["aria-label"], Xf = { class: "library-filter-panel" }, Jf = { class: "library-filter-panel-summary" }, Zf = ["aria-label"], Qf = { value: "" }, ed = ["value"], td = { value: "" }, rd = ["value"], nd = { value: "" }, id = ["value"], od = { value: "" }, sd = ["value"], ld = { value: "" }, ad = ["value"], cd = { value: "" }, ud = ["value"], fd = { value: "" }, dd = ["value"], pd = { value: "" }, hd = ["value"], md = { value: "" }, bd = ["value"], yd = { value: "" }, gd = ["value"], _d = { value: "" }, vd = { value: "1" }, Ed = { value: "" }, Td = { value: "1" }, Sd = { value: "title" }, Cd = { value: "recent" }, xd = { value: "publicationDate" }, Ad = { value: "publication" }, wd = { value: "lastOpened" }, Rd = { value: "format" }, Od = ["value"], Nd = ["value"], Pd = ["aria-label"], kd = ["aria-label"], Ld = ["href"], Md = {
  key: 1,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Id = { class: "library-muted library-catalogue-eyebrow" }, Ud = { id: "library-discovery-heading" }, Dd = { class: "library-muted" }, Fd = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, Hd = { key: 0 }, $d = { key: 1 }, jd = { key: 2 }, Vd = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, Bd = { key: 0 }, zd = { key: 1 }, Wd = {
  href: "/apps/library/",
  class: "button secondary"
}, qd = { class: "library-catalogue-status-row" }, Kd = { class: "library-muted library-filter-result-summary" }, Gd = { key: 0 }, Yd = { href: "?" }, Xd = ["aria-label"], Jd = { class: "library-pagination-range" }, Zd = { key: 0 }, Qd = ["href"], ep = {
  key: 1,
  class: "library-muted"
}, tp = ["href"], rp = {
  key: 3,
  class: "library-muted"
}, np = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, ip = ["aria-label"], op = { class: "library-settings-count-badge" }, sp = ["action"], lp = ["value"], ap = ["name", "value"], cp = ["placeholder"], up = {
  type: "submit",
  class: "button primary"
}, fp = { class: "library-muted" }, dp = ["action"], pp = ["value"], hp = ["name", "value"], mp = ["placeholder"], bp = {
  type: "submit",
  class: "button secondary"
}, yp = { class: "library-muted" }, gp = ["action"], _p = ["value"], vp = ["name", "value"], Ep = {
  type: "submit",
  class: "button secondary"
}, Tp = { class: "library-muted" }, Sp = ["action"], Cp = ["value"], xp = ["name", "value"], Ap = { name: "bulkEditField" }, wp = { value: "publicationType" }, Rp = { value: "subtitle" }, Op = { value: "creators" }, Np = { value: "publication" }, Pp = { value: "publicationDate" }, kp = { value: "language" }, Lp = { value: "publisher" }, Mp = { value: "genres" }, Ip = { value: "classifications" }, Up = {
  type: "submit",
  class: "button secondary"
}, Dp = { class: "library-muted" }, Fp = ["action"], Hp = ["value"], $p = ["name", "value"], jp = {
  type: "submit",
  class: "button secondary"
}, Vp = { class: "library-muted" }, Bp = { class: "library-discovery-shortcuts" }, zp = { class: "library-discovery-shortcut-grid" }, Wp = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, qp = { id: "library-periodical-groups-heading" }, Kp = { class: "library-muted" }, Gp = ["href"], Yp = { class: "library-muted" }, Xp = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, Jp = { id: "library-periodical-groups-empty-heading" }, Zp = { class: "library-muted" }, Qp = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, eh = { id: "library-year-groups-heading" }, th = ["href"], rh = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, nh = { id: "library-creator-groups-heading" }, ih = ["href"], oh = ["aria-label"], sh = ["href", "aria-label"], lh = { class: "library-muted" }, ah = { class: "library-empty-actions" }, ch = ["href"], uh = { class: "library-muted" }, fh = { class: "library-muted" }, dh = { class: "library-empty-actions" }, ph = ["href"], hh = { class: "library-muted" }, mh = { class: "library-empty-actions" }, bh = ["href"], yh = {
  href: "?",
  class: "button primary"
}, gh = { class: "library-muted" }, _h = { class: "library-empty-actions" }, vh = ["href"], Eh = {
  key: 4,
  class: "library-cover-gallery"
}, Th = ["href", "aria-label"], Sh = ["src", "alt"], Ch = ["action", "onSubmit"], xh = ["value"], Ah = ["value"], wh = ["aria-pressed", "title", "aria-label", "onClick"], Rh = { class: "library-cover-summary" }, Oh = { class: "library-cover-primary" }, Nh = ["aria-label"], Ph = ["href"], kh = ["onToggle"], Lh = ["aria-label"], Mh = { class: "library-cover-meta" }, Ih = {
  key: 0,
  class: "library-creator"
}, Uh = { class: "library-cover-detail-list" }, Dh = { class: "library-cover-detail-chip" }, Fh = {
  key: 0,
  class: "library-cover-detail-chip"
}, Hh = {
  key: 1,
  class: "library-cover-detail-chip"
}, $h = {
  key: 2,
  class: "library-cover-detail-chip"
}, jh = {
  key: 3,
  class: "library-cover-detail-chip"
}, Vh = {
  key: 4,
  class: "library-cover-detail-chip"
}, Bh = {
  key: 5,
  class: "library-cover-detail-chip"
}, zh = {
  key: 6,
  class: "library-cover-detail-chip"
}, Wh = {
  key: 1,
  class: "library-muted library-cover-description"
}, qh = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Kh = { key: 0 }, Gh = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, Yh = {
  key: 0,
  class: "library-muted"
}, Xh = { class: "library-cover-actions" }, Jh = ["href"], Zh = ["href"], Qh = ["href"], em = ["aria-label"], tm = { class: "library-pagination-range" }, rm = { key: 0 }, nm = ["href"], im = {
  key: 1,
  class: "library-muted"
}, om = ["href"], sm = {
  key: 3,
  class: "library-muted"
}, lm = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], i = /* @__PURE__ */ sr({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), o = /* @__PURE__ */ sr((i.items || []).map((D) => ({ ...D }))), s = Z(() => o), a = Z(() => i.shelves || []), f = Z(() => i.formats || []), v = Z(() => i.publications || []), y = Z(() => i.publicationSummaries || []), E = Z(() => i.publicationIssueContext || null), k = Z(() => i.publicationYears || []), j = Z(() => i.creators || []), re = Z(() => i.scanStatuses || []), q = Z(() => i.workflowStatuses || []), se = Z(() => i.genres || []), ne = Z(() => i.classifications || []), z = Z(() => i.cataloguePagination || {
      page: 1,
      limit: 100,
      total: s.value.length,
      visible: s.value.length,
      from: s.value.length > 0 ? 1 : 0,
      to: s.value.length,
      previousUrl: "",
      nextUrl: ""
    }), I = /* @__PURE__ */ sr({
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
    }), V = Z(() => i.settingsUrl || ""), ce = Z(() => i.requestToken || ""), ke = Z(() => i.metadataExportUrl || ""), Oe = Z(() => i.metadataSidecarManifestUrl || ""), ze = Z(() => i.metadataSidecarBundleUrl || ""), Ee = Z(() => i.catalogueEndpointUrl || "/apps/library/catalogue"), $e = Z(() => i.batchTagUrl || "/apps/library/bulk/tags"), tt = Z(() => i.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), lt = Z(() => i.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Ge = Z(() => i.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), gt = Z(() => i.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), Ve = Z(() => i.scannerConflictReviewUrl || "?scannerConflicts=1"), Le = Z(() => i.metadataErrorsUrl || "/apps/library/health/metadata-errors"), me = Z(() => i.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), ae = Z(() => i.coverProbeUrl || "/apps/library/health/covers/probe"), We = Z(() => i.importHealthSummaryUrl || "/apps/library/health/import-summary"), xe = /* @__PURE__ */ sr({
      summary: i.importHealthSummary || {},
      loaded: !!(i.importHealthSummary && Object.keys(i.importHealthSummary).length > 0),
      loading: !1,
      error: ""
    }), Ne = Z(() => xe.summary || {}), Ue = Z(() => Ne.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), _t = Z(() => Ne.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), fe = Z(() => Ne.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), jt = Z(() => Ne.value.coverSupportMatrix || fe.value.byFormat || []), De = Z(() => Ne.value.environmentCapabilities || {}), vt = Z(() => i.discoveryPage === "publication"), pt = Z(() => i.discoveryPage === "year"), Et = Z(() => i.discoveryPage === "creator"), Xe = Z(() => vt.value || pt.value || Et.value), Tt = Z(() => i.discoveryTitle || I.publication || I.year || I.creator || ""), p = Z(() => Xe.value ? Tt.value : l("library", "Publication catalogue")), m = Z(() => Et.value ? l("library", "Creator") : pt.value ? l("library", "Publication year") : l("library", "Publication / series")), _ = Z(() => Number(i.rootCount || 0)), R = Z(() => Number(i.enabledRootCount || 0)), T = Z(() => _.value === 0), C = Z(() => _.value > 0 && R.value === 0), M = Z(() => S.value.length > 0), U = {
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
    }, L = Z(() => {
      if (typeof window > "u") return "";
      const D = new URLSearchParams(window.location.search);
      if (D.get("batchMetadataApplyResult") !== "1") return "";
      const O = D.get("batchMetadataField") || "field", h = D.get("batchMetadataApplied") || "0", be = D.get("batchMetadataUnchanged") || "0", Fe = D.get("batchMetadataSkipped") || "0";
      return l("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: h, field: O, unchanged: be, skipped: Fe });
    }), S = Z(() => Object.entries(U).map(([D, O]) => ({ key: D, label: O, value: I[D] || "" })).filter((D) => String(D.value).trim() !== "")), K = Z(() => Object.entries(I).filter(([D, O]) => !["q", "sort", "starred"].includes(D) && String(O || "").trim() !== "").map(([D, O]) => ({ key: D, value: O }))), H = Z(() => Object.entries(I).filter(([D, O]) => String(O || "").trim() !== "").map(([D, O]) => ({ key: D, value: O }))), W = /* @__PURE__ */ sr({}), G = /* @__PURE__ */ va(null);
    let Q = null;
    function N(D) {
      const O = new URLSearchParams(new FormData(D));
      for (const h of Array.from(O.keys()))
        String(O.get(h) || "").trim() === "" && O.delete(h);
      return O.delete("page"), O;
    }
    function P(D) {
      o.splice(0, o.length, ...(D.items || []).map((O) => ({ ...O })));
      for (const O of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl"])
        Object.prototype.hasOwnProperty.call(D, O) && (i[O] = D[O]);
      Object.assign(I, D.activeFilters || {});
    }
    async function $(D) {
      if (!(D && D.currentTarget && D.currentTarget.open !== !0) && !(xe.loaded || xe.loading)) {
        xe.loading = !0, xe.error = "";
        try {
          const O = await fetch(We.value, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!O.ok)
            throw new Error(`Import health request failed: ${O.status}`);
          xe.summary = await O.json(), xe.loaded = !0;
        } catch (O) {
          xe.error = O?.message || String(O);
        } finally {
          xe.loading = !1;
        }
      }
    }
    async function J(D) {
      const O = D?.currentTarget?.tagName === "FORM" ? D.currentTarget : D?.currentTarget?.form;
      if (!O) return;
      const be = N(O).toString(), Fe = be ? `?${be}` : "", ht = await fetch(Ee.value + Fe, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!ht.ok) {
        O.submit();
        return;
      }
      P(await ht.json()), history.replaceState({}, "", be ? `?${be}` : window.location.pathname);
    }
    function ie(D) {
      J(D);
    }
    function he(D) {
      window.clearTimeout(Q), Q = window.setTimeout(() => ie(D), 350);
    }
    function ue(D) {
      const O = new URLSearchParams();
      for (const [be, Fe] of Object.entries(I)) {
        const ht = String(Fe || "").trim();
        ht !== "" && be !== D && !(be === "sort" && ht === "title") && O.set(be, ht);
      }
      const h = O.toString();
      return h ? `?${h}` : "?";
    }
    function Me() {
      return ue("q");
    }
    function ge(D) {
      return String(D || "").toUpperCase();
    }
    function Re(D) {
      return D.nextcloudTags || [];
    }
    function at(D) {
      return y.value.find((h) => h.publication === D)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(D)}`;
    }
    function kt(D) {
      return i.publicationYearLandingUrls?.[D] || `/apps/library/years/${encodeURIComponent(D)}`;
    }
    function Vt(D) {
      return i.creatorLandingUrls?.[D] || `/apps/library/creators/${encodeURIComponent(D)}`;
    }
    function cr(D, O) {
      W[D] = !!O?.currentTarget?.open;
    }
    function At(D) {
      const O = String(D?.tagName || "").toLowerCase();
      return D?.isContentEditable || ["input", "select", "textarea", "button"].includes(O);
    }
    function St(D) {
      D.key !== "/" || D.metaKey || D.ctrlKey || D.altKey || D.shiftKey || At(D.target) || (D.preventDefault(), G.value?.focus(), G.value?.select?.());
    }
    function rr(D) {
      D.key !== "Escape" || document.activeElement !== G.value || I.q === "" || (D.preventDefault(), I.q = "", G.value.value = "", window.clearTimeout(Q), ie({ currentTarget: G.value }));
    }
    function Bt(D) {
      St(D), rr(D);
    }
    Ks(() => {
      window.addEventListener("keydown", Bt);
    }), Gs(() => {
      window.removeEventListener("keydown", Bt);
    });
    async function zt(D, O) {
      const h = O?.currentTarget?.closest?.("form") || O?.currentTarget;
      if (!h || !D?.starUrl) return;
      const be = !!D.starred;
      D.starred = !be;
      try {
        (await fetch(D.starUrl, {
          method: "POST",
          body: new FormData(h),
          credentials: "same-origin"
        })).ok || (D.starred = be);
      } catch {
        D.starred = be;
      }
    }
    return (D, O) => (x(), A("div", Zu, [
      u("section", Qu, [
        u("div", ef, [
          u("div", null, [
            Xe.value ? (x(), A("p", tf, d(m.value), 1)) : de("", !0),
            u("h2", rf, d(p.value), 1),
            u("p", nf, d(Xe.value ? b(l)("library", "Browse this focused view; use filters only when you need to narrow it further.") : b(l)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          u("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": b(l)("library", "Library actions")
          }, [
            u("details", {
              class: "library-catalogue-actions-menu",
              onToggle: $
            }, [
              u("summary", null, d(b(l)("library", "Actions")), 1),
              u("div", sf, [
                u("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, d(b(l)("library", "Settings")), 9, lf),
                ke.value ? (x(), A("a", {
                  key: 0,
                  href: ke.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, d(b(l)("library", "Export corrected metadata")), 9, af)) : de("", !0),
                Oe.value ? (x(), A("a", {
                  key: 1,
                  href: Oe.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, d(b(l)("library", "Sidecar manifest")), 9, cf)) : de("", !0),
                ze.value ? (x(), A("a", {
                  key: 2,
                  href: ze.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, d(b(l)("library", "Sidecar ZIP")), 9, uf)) : de("", !0),
                u("div", ff, [
                  u("p", df, d(b(l)("library", "Import health")), 1),
                  u("h3", pf, d(b(l)("library", "Metadata overview")), 1),
                  u("p", hf, d(b(l)("library", "Loaded on demand so normal paging, search, and filters stay fast. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  xe.loading ? (x(), A("p", mf, d(b(l)("library", "Loading metadata overview…")), 1)) : xe.error ? (x(), A("p", bf, d(xe.error), 1)) : xe.loaded ? de("", !0) : (x(), A("p", yf, d(b(l)("library", "Open Actions to load the current metadata and cover overview.")), 1)),
                  xe.loaded ? (x(), A(oe, { key: 3 }, [
                    u("div", gf, [
                      u("a", {
                        class: "button secondary",
                        href: Ue.value.reviewUrl || "?status=metadata_error"
                      }, d(b(l)("library", "Review metadata errors")), 9, _f),
                      u("a", {
                        class: "button secondary",
                        href: Le.value
                      }, d(b(l)("library", "Full review")), 9, vf),
                      u("a", {
                        class: "button secondary",
                        href: me.value
                      }, d(b(l)("library", "Export TSV")), 9, Ef),
                      u("a", {
                        class: "button secondary",
                        href: ae.value
                      }, d(b(l)("library", "Probe covers")), 9, Tf)
                    ]),
                    u("div", Sf, [
                      u("article", null, [
                        u("h4", null, d(b(l)("library", "Metadata errors")), 1),
                        u("p", Cf, d(Ue.value.total || 0), 1),
                        u("ul", null, [
                          (x(!0), A(oe, null, Te(Ue.value.byExtension, (h) => (x(), A("li", {
                            key: h.extension
                          }, d(ge(h.extension)) + " · " + d(h.count), 1))), 128))
                        ])
                      ]),
                      u("article", null, [
                        u("h4", null, d(b(l)("library", "Archive/container check")), 1),
                        u("p", xf, d(_t.value.mismatches || 0), 1),
                        u("ul", null, [
                          (x(!0), A(oe, null, Te(_t.value.byExtensionAndContainer, (h) => (x(), A("li", {
                            key: `${h.extension}-${h.actualContainerType}`
                          }, d(ge(h.extension)) + " · " + d(h.actualContainerType) + " · " + d(h.count), 1))), 128))
                        ])
                      ]),
                      u("article", null, [
                        u("h4", null, d(b(l)("library", "Cover health")), 1),
                        u("p", Af, d(fe.value.note), 1),
                        u("ul", null, [
                          (x(!0), A(oe, null, Te(fe.value.byFormat, (h) => (x(), A("li", {
                            key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}`
                          }, d(ge(h.extension)) + " · nextcloudPreview: " + d(h.nextcloudPreview) + " · libraryCoverRoute: " + d(h.libraryCoverRoute) + " · " + d(h.count), 1))), 128))
                        ])
                      ]),
                      u("article", null, [
                        u("h4", null, d(b(l)("library", "Cover support matrix")), 1),
                        u("p", wf, d(b(l)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        u("ul", null, [
                          (x(!0), A(oe, null, Te(jt.value, (h) => (x(), A("li", {
                            key: `${h.extension}-${h.nextcloudPreview}-${h.libraryCoverRoute}-${h.count}`
                          }, d(ge(h.extension)) + " · Nextcloud/plugin preview: " + d(h.nextcloudPreview) + " · Library extraction: " + d(h.libraryCoverRoute) + " · " + d(h.count), 1))), 128))
                        ]),
                        u("p", Rf, d(b(l)("library", "Extractor tools")) + ": ZIP=" + d(De.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + d(De.value.sevenZipCommand || "missing") + " · RAR=" + d(De.value.rarCommand || "missing") + " · bsdtar=" + d(De.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Ue.value.examples?.length ? (x(), A("details", Of, [
                      u("summary", null, d(b(l)("library", "Example files and suggested actions")), 1),
                      u("ul", null, [
                        (x(!0), A(oe, null, Te(Ue.value.examples, (h) => (x(), A("li", {
                          key: `${h.fileId}-${h.path}`
                        }, [
                          u("code", null, d(h.path), 1),
                          u("span", null, d(h.scanStatus) + " · " + d(h.scanError) + " · " + d(h.actualContainerType), 1),
                          u("strong", null, d(h.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : de("", !0)
                  ], 64)) : de("", !0)
                ])
              ])
            ], 32)
          ], 8, of)
        ]),
        L.value ? (x(), A("p", Nf, d(L.value), 1)) : de("", !0),
        u("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": b(l)("library", "Quick catalogue filters"),
          onSubmit: En(J, ["prevent"])
        }, [
          (x(!0), A(oe, null, Te(K.value, (h) => (x(), A("input", {
            key: h.key,
            type: "hidden",
            name: h.key,
            value: h.value
          }, null, 8, kf))), 128)),
          u("div", Lf, [
            u("label", Mf, [
              u("span", null, [
                ye(d(b(l)("library", "Search")) + " ", 1),
                O[18] || (O[18] = u("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              qe(u("input", {
                ref_key: "quickSearchInput",
                ref: G,
                "onUpdate:modelValue": O[0] || (O[0] = (h) => I.q = h),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex...",
                onInput: he
              }, null, 544), [
                [mi, I.q]
              ])
            ]),
            u("button", {
              type: "submit",
              class: "button primary",
              "aria-label": b(l)("library", "Search catalogue")
            }, d(b(l)("library", "Search")), 9, If)
          ]),
          u("details", Uf, [
            u("summary", null, d(b(l)("library", "Filter & sort")), 1),
            u("div", Df, [
              u("label", null, [
                ye(d(b(l)("library", "Sort")) + " ", 1),
                qe(u("select", {
                  "onUpdate:modelValue": O[1] || (O[1] = (h) => I.sort = h),
                  name: "sort",
                  onChange: J
                }, [
                  u("option", Ff, d(b(l)("library", "Title")), 1),
                  u("option", Hf, d(b(l)("library", "Recently added")), 1),
                  u("option", $f, d(b(l)("library", "Publication date")), 1),
                  u("option", jf, d(b(l)("library", "Series")), 1),
                  u("option", Vf, d(b(l)("library", "Recently opened")), 1),
                  u("option", Bf, d(b(l)("library", "Format")), 1)
                ], 544), [
                  [nt, I.sort]
                ])
              ]),
              u("label", null, [
                ye(d(b(l)("library", "Starred")) + " ", 1),
                qe(u("select", {
                  "onUpdate:modelValue": O[2] || (O[2] = (h) => I.starred = h),
                  name: "starred",
                  onChange: J
                }, [
                  u("option", zf, d(b(l)("library", "All")), 1),
                  u("option", Wf, d(b(l)("library", "Starred")), 1)
                ], 544), [
                  [nt, I.starred]
                ])
              ]),
              u("label", null, [
                ye(d(b(l)("library", "Size")) + " ", 1),
                u("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: J
                }, [
                  (x(), A(oe, null, Te(n, (h) => u("option", {
                    key: h,
                    value: h
                  }, d(h), 9, Kf)), 64))
                ], 40, qf)
              ]),
              u("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": b(l)("library", "Apply catalogue filters")
              }, d(b(l)("library", "Apply filters")), 9, Gf),
              u("a", {
                href: "?",
                class: "button secondary",
                "aria-label": b(l)("library", "Clear catalogue filters")
              }, d(b(l)("library", "Clear all")), 9, Yf)
            ])
          ])
        ], 40, Pf),
        u("details", Xf, [
          u("summary", Jf, d(b(l)("library", "Show catalogue filters")), 1),
          u("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": b(l)("library", "Catalogue search and filters"),
            onSubmit: En(J, ["prevent"])
          }, [
            u("label", null, [
              ye(d(b(l)("library", "Search title / author")) + " ", 1),
              qe(u("input", {
                "onUpdate:modelValue": O[3] || (O[3] = (h) => I.q = h),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex..."
              }, null, 512), [
                [mi, I.q]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Type")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[4] || (O[4] = (h) => I.type = h),
                name: "type"
              }, [
                u("option", Qf, d(b(l)("library", "All types")), 1),
                (x(), A(oe, null, Te(r, (h) => u("option", {
                  key: h,
                  value: h
                }, d(h), 9, ed)), 64))
              ], 512), [
                [nt, I.type]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Series / periodical")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[5] || (O[5] = (h) => I.publication = h),
                name: "publication"
              }, [
                u("option", td, d(b(l)("library", "All series and periodicals")), 1),
                (x(!0), A(oe, null, Te(v.value, (h) => (x(), A("option", {
                  key: h,
                  value: h
                }, d(h), 9, rd))), 128))
              ], 512), [
                [nt, I.publication]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Publication year")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[6] || (O[6] = (h) => I.year = h),
                name: "year"
              }, [
                u("option", nd, d(b(l)("library", "All years")), 1),
                (x(!0), A(oe, null, Te(k.value, (h) => (x(), A("option", {
                  key: h,
                  value: h
                }, d(h), 9, id))), 128))
              ], 512), [
                [nt, I.year]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Creator")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[7] || (O[7] = (h) => I.creator = h),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                u("option", od, d(b(l)("library", "All creators")), 1),
                (x(!0), A(oe, null, Te(j.value, (h) => (x(), A("option", {
                  key: h,
                  value: h
                }, d(h), 9, sd))), 128))
              ], 512), [
                [nt, I.creator]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Nextcloud tag")) + " ", 1),
              qe(u("input", {
                "onUpdate:modelValue": O[8] || (O[8] = (h) => I.tag = h),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [mi, I.tag]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Format")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[9] || (O[9] = (h) => I.format = h),
                name: "format"
              }, [
                u("option", ld, d(b(l)("library", "All formats")), 1),
                (x(!0), A(oe, null, Te(f.value, (h) => (x(), A("option", {
                  key: h,
                  value: h
                }, d(ge(h)), 9, ad))), 128))
              ], 512), [
                [nt, I.format]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Shelf")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[10] || (O[10] = (h) => I.shelf = h),
                name: "shelf"
              }, [
                u("option", cd, d(b(l)("library", "All shelves")), 1),
                (x(!0), A(oe, null, Te(a.value, (h) => (x(), A("option", {
                  key: h,
                  value: h
                }, d(h), 9, ud))), 128))
              ], 512), [
                [nt, I.shelf]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Scan status")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[11] || (O[11] = (h) => I.status = h),
                name: "status"
              }, [
                u("option", fd, d(b(l)("library", "All scan statuses")), 1),
                (x(!0), A(oe, null, Te(re.value, (h) => (x(), A("option", {
                  key: h,
                  value: h
                }, d(h), 9, dd))), 128))
              ], 512), [
                [nt, I.status]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Workflow status")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[12] || (O[12] = (h) => I.workflowStatus = h),
                name: "workflowStatus"
              }, [
                u("option", pd, d(b(l)("library", "All workflow statuses")), 1),
                (x(!0), A(oe, null, Te(q.value, (h) => (x(), A("option", {
                  key: h,
                  value: h
                }, d(h), 9, hd))), 128))
              ], 512), [
                [nt, I.workflowStatus]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Genre")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[13] || (O[13] = (h) => I.genre = h),
                name: "genre"
              }, [
                u("option", md, d(b(l)("library", "All genres")), 1),
                (x(!0), A(oe, null, Te(se.value, (h) => (x(), A("option", {
                  key: h,
                  value: h
                }, d(h), 9, bd))), 128))
              ], 512), [
                [nt, I.genre]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Classification")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[14] || (O[14] = (h) => I.classification = h),
                name: "classification"
              }, [
                u("option", yd, d(b(l)("library", "All classifications")), 1),
                (x(!0), A(oe, null, Te(ne.value, (h) => (x(), A("option", {
                  key: h,
                  value: h
                }, d(h), 9, gd))), 128))
              ], 512), [
                [nt, I.classification]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Scanner conflicts")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[15] || (O[15] = (h) => I.scannerConflicts = h),
                name: "scannerConflicts"
              }, [
                u("option", _d, d(b(l)("library", "All metadata")), 1),
                u("option", vd, d(b(l)("library", "Needs review")), 1)
              ], 512), [
                [nt, I.scannerConflicts]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Starred")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[16] || (O[16] = (h) => I.starred = h),
                name: "starred"
              }, [
                u("option", Ed, d(b(l)("library", "All publications")), 1),
                u("option", Td, d(b(l)("library", "Starred only")), 1)
              ], 512), [
                [nt, I.starred]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Sort")) + " ", 1),
              qe(u("select", {
                "onUpdate:modelValue": O[17] || (O[17] = (h) => I.sort = h),
                name: "sort"
              }, [
                u("option", Sd, d(b(l)("library", "Title")), 1),
                u("option", Cd, d(b(l)("library", "Recently added")), 1),
                u("option", xd, d(b(l)("library", "Publication date")), 1),
                u("option", Ad, d(b(l)("library", "Series / periodical")), 1),
                u("option", wd, d(b(l)("library", "Recently opened")), 1),
                u("option", Rd, d(b(l)("library", "Format")), 1)
              ], 512), [
                [nt, I.sort]
              ])
            ]),
            u("label", null, [
              ye(d(b(l)("library", "Page size")) + " ", 1),
              u("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (x(), A(oe, null, Te(n, (h) => u("option", {
                  key: h,
                  value: h
                }, d(h), 9, Nd)), 64))
              ], 8, Od)
            ]),
            u("button", {
              type: "submit",
              class: "button primary",
              "aria-label": b(l)("library", "Apply catalogue filters")
            }, d(b(l)("library", "Apply filters")), 9, Pd),
            u("a", {
              href: "?",
              class: "button secondary",
              "aria-label": b(l)("library", "Clear catalogue filters")
            }, d(b(l)("library", "Clear")), 9, kd),
            u("a", {
              href: Ve.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, d(b(l)("library", "Review scanner conflicts")), 9, Ld)
          ], 40, Zf)
        ]),
        Xe.value ? (x(), A("section", Md, [
          u("p", Id, d(m.value), 1),
          u("h3", Ud, d(Tt.value), 1),
          u("p", Dd, d(Et.value ? b(l)("library", "Items by this creator, sorted by publication context when available.") : pt.value ? b(l)("library", "Items from this publication year, sorted by publication date when available.") : b(l)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          u("div", Fd, [
            u("span", null, d(z.value.total) + " " + d(b(l)("library", "items")), 1),
            E.value?.earliestYear && E.value?.latestYear ? (x(), A("span", Hd, d(E.value.earliestYear) + "–" + d(E.value.latestYear), 1)) : de("", !0),
            E.value?.datedCount ? (x(), A("span", $d, d(E.value.datedCount) + " " + d(b(l)("library", "dated")), 1)) : de("", !0),
            E.value?.undatedCount > 0 ? (x(), A("span", jd, d(E.value.undatedCount) + " " + d(b(l)("library", "undated")), 1)) : de("", !0)
          ]),
          vt.value && E.value ? (x(), A("aside", Vd, [
            u("strong", null, d(b(l)("library", "Publication contents")), 1),
            u("span", null, d(E.value.itemCount) + " " + d(b(l)("library", "items")), 1),
            E.value.earliestYear && E.value.latestYear ? (x(), A("span", Bd, d(E.value.earliestYear) + "–" + d(E.value.latestYear), 1)) : de("", !0),
            u("span", null, d(E.value.datedCount) + " " + d(b(l)("library", "with issue/date coverage")), 1),
            E.value.undatedCount > 0 ? (x(), A("span", zd, d(E.value.undatedCount) + " " + d(b(l)("library", "without dates yet")), 1)) : de("", !0)
          ])) : de("", !0),
          u("p", null, [
            u("a", Wd, d(b(l)("library", "Back to full catalogue")), 1)
          ])
        ])) : de("", !0),
        u("div", qd, [
          u("p", Kd, [
            ye(d(b(l)("library", "Showing")) + " " + d(z.value.from) + "–" + d(z.value.to) + " " + d(b(l)("library", "of")) + " " + d(z.value.total) + " " + d(b(l)("library", "catalogue items")), 1),
            S.value.length > 0 ? (x(), A("span", Gd, [
              O[19] || (O[19] = ye(" · ", -1)),
              u("a", Yd, d(b(l)("library", "Clear all filters")), 1)
            ])) : de("", !0)
          ]),
          u("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": b(l)("library", "Catalogue pagination")
          }, [
            u("span", Jd, [
              ye(d(b(l)("library", "Page")) + " " + d(z.value.page), 1),
              z.value.total > 0 ? (x(), A("span", Zd, " · " + d(z.value.from) + "–" + d(z.value.to), 1)) : de("", !0)
            ]),
            z.value.previousUrl ? (x(), A("a", {
              key: 0,
              href: z.value.previousUrl
            }, d(b(l)("library", "Previous")), 9, Qd)) : (x(), A("span", ep, d(b(l)("library", "Previous")), 1)),
            z.value.nextUrl ? (x(), A("a", {
              key: 2,
              href: z.value.nextUrl
            }, d(b(l)("library", "Next")), 9, tp)) : (x(), A("span", rp, d(b(l)("library", "Next")), 1))
          ], 8, Xd)
        ]),
        u("div", np, [
          u("details", {
            class: "library-batch-actions",
            "aria-label": b(l)("library", "Batch actions for current results")
          }, [
            u("summary", null, [
              ye(d(b(l)("library", "Batch")) + " ", 1),
              u("span", op, d(z.value.total) + " " + d(b(l)("library", "Current filter result")), 1)
            ]),
            u("form", {
              method: "post",
              action: $e.value,
              class: "library-batch-tag-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, lp),
              (x(!0), A(oe, null, Te(H.value, (h) => (x(), A("input", {
                key: h.key,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, ap))), 128)),
              u("label", null, [
                u("span", null, d(b(l)("library", "Nextcloud tag")), 1),
                u("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: b(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, cp)
              ]),
              u("button", up, d(b(l)("library", "Apply Nextcloud tag to current results")), 1),
              u("p", fp, d(b(l)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, sp),
            u("form", {
              method: "post",
              action: tt.value,
              class: "library-batch-tag-remove-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, pp),
              (x(!0), A(oe, null, Te(H.value, (h) => (x(), A("input", {
                key: `remove-tag-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, hp))), 128)),
              u("label", null, [
                u("span", null, d(b(l)("library", "Nextcloud tag")), 1),
                u("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: b(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, mp)
              ]),
              u("button", bp, d(b(l)("library", "Remove tag from current results")), 1),
              u("p", yp, d(b(l)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, dp),
            u("form", {
              method: "post",
              action: lt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, _p),
              (x(!0), A(oe, null, Te(H.value, (h) => (x(), A("input", {
                key: `reset-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, vp))), 128)),
              O[20] || (O[20] = u("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              u("button", Ep, d(b(l)("library", "Reset filtered metadata")), 1),
              u("p", Tp, d(b(l)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, gp),
            u("form", {
              method: "post",
              action: Ge.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Cp),
              (x(!0), A(oe, null, Te(H.value, (h) => (x(), A("input", {
                key: `edit-preview-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, xp))), 128)),
              u("label", null, [
                u("span", null, d(b(l)("library", "Metadata field")), 1),
                u("select", Ap, [
                  u("option", wp, d(b(l)("library", "Publication type")), 1),
                  u("option", Rp, d(b(l)("library", "Subtitle")), 1),
                  u("option", Op, d(b(l)("library", "Creators")), 1),
                  u("option", Np, d(b(l)("library", "Series / periodical")), 1),
                  u("option", Pp, d(b(l)("library", "Publication date")), 1),
                  u("option", kp, d(b(l)("library", "Language")), 1),
                  u("option", Lp, d(b(l)("library", "Publisher")), 1),
                  u("option", Mp, d(b(l)("library", "Genres")), 1),
                  u("option", Ip, d(b(l)("library", "Classifications")), 1)
                ])
              ]),
              u("label", null, [
                u("span", null, d(b(l)("library", "Preview value")), 1),
                O[21] || (O[21] = u("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              u("button", Up, d(b(l)("library", "Preview & apply metadata edit")), 1),
              u("p", Dp, d(b(l)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, Sp),
            u("form", {
              method: "post",
              action: gt.value,
              class: "library-batch-cover-refresh-form"
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, Hp),
              (x(!0), A(oe, null, Te(H.value, (h) => (x(), A("input", {
                key: `cover-${h.key}`,
                type: "hidden",
                name: h.key,
                value: h.value
              }, null, 8, $p))), 128)),
              u("button", jp, d(b(l)("library", "Request fresh cover previews")), 1),
              u("p", Vp, d(b(l)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, Fp)
          ], 8, ip),
          u("details", Bp, [
            u("summary", null, d(b(l)("library", "Browse")), 1),
            u("div", zp, [
              y.value.length > 0 ? (x(), A("section", Wp, [
                u("h3", qp, d(b(l)("library", "Top series and periodicals")), 1),
                u("p", Kp, d(b(l)("library", "Jump into recurring publications with one click.")), 1),
                u("ul", null, [
                  (x(!0), A(oe, null, Te(y.value, (h) => (x(), A("li", {
                    key: h.publication
                  }, [
                    u("a", {
                      href: at(h.publication)
                    }, d(h.publication), 9, Gp),
                    u("span", Yp, d(h.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (x(), A("section", Xp, [
                u("h3", Jp, d(b(l)("library", "No series or periodicals found yet")), 1),
                u("p", Zp, d(b(l)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : de("", !0),
              k.value.length > 0 ? (x(), A("section", Qp, [
                u("h3", eh, d(b(l)("library", "Top publication years")), 1),
                u("ul", null, [
                  (x(!0), A(oe, null, Te(k.value, (h) => (x(), A("li", { key: h }, [
                    u("a", {
                      href: kt(h)
                    }, d(h), 9, th)
                  ]))), 128))
                ])
              ])) : de("", !0),
              j.value.length > 0 ? (x(), A("section", rh, [
                u("h3", nh, d(b(l)("library", "Top creators")), 1),
                u("ul", null, [
                  (x(!0), A(oe, null, Te(j.value, (h) => (x(), A("li", { key: h }, [
                    u("a", {
                      href: Vt(h)
                    }, d(h), 9, ih)
                  ]))), 128))
                ])
              ])) : de("", !0)
            ])
          ])
        ]),
        S.value.length > 0 ? (x(), A("nav", {
          key: 2,
          class: "library-active-filter-chips",
          "aria-label": b(l)("library", "Active filters")
        }, [
          u("span", null, d(b(l)("library", "Active filters")), 1),
          (x(!0), A(oe, null, Te(S.value, (h) => (x(), A("a", {
            key: h.key,
            href: ue(h.key),
            class: "library-filter-chip",
            "aria-label": `${b(l)("library", "Remove filter")}: ${h.label}`
          }, [
            u("strong", null, d(h.label) + ":", 1),
            ye(" " + d(h.value) + " ", 1),
            O[22] || (O[22] = u("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, sh))), 128))
        ], 8, oh)) : de("", !0),
        s.value.length === 0 ? (x(), A("div", {
          key: 3,
          class: Pr(["library-empty-content", { "library-first-run-guidance": T.value || C.value, "library-filter-empty-state": M.value && !T.value && !C.value }]),
          role: "status"
        }, [
          T.value ? (x(), A(oe, { key: 0 }, [
            u("h3", null, d(b(l)("library", "Start with one Library root")), 1),
            u("p", lh, d(b(l)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            u("p", ah, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, d(b(l)("library", "Add a Library root")), 9, ch),
              u("span", uh, d(b(l)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : C.value ? (x(), A(oe, { key: 1 }, [
            u("h3", null, d(b(l)("library", "No enabled Library roots")), 1),
            u("p", fh, d(b(l)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            u("p", dh, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, d(b(l)("library", "Open Library settings")), 9, ph)
            ])
          ], 64)) : M.value ? (x(), A(oe, { key: 2 }, [
            u("h3", null, d(b(l)("library", "No matches for the current filters")), 1),
            u("p", hh, d(b(l)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            u("p", mh, [
              u("a", {
                href: Me(),
                class: "button secondary"
              }, d(b(l)("library", "Clear search")), 9, bh),
              u("a", yh, d(b(l)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (x(), A(oe, { key: 3 }, [
            u("h3", null, d(b(l)("library", "No catalogue items yet")), 1),
            u("p", gh, d(b(l)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            u("p", _h, [
              u("a", {
                href: V.value,
                class: "button primary"
              }, d(b(l)("library", "Run a scan from settings")), 9, vh)
            ])
          ], 64))
        ], 2)) : (x(), A("div", Eh, [
          (x(!0), A(oe, null, Te(s.value, (h) => (x(), A("article", {
            key: h.id,
            class: Pr(["library-cover-card", { "library-cover-card--open": W[h.id] }])
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
              }, null, 8, Sh)
            ], 8, Th),
            u("form", {
              method: "post",
              action: h.starUrl,
              class: "library-cover-star-form",
              onSubmit: En((be) => zt(h, be), ["prevent"])
            }, [
              u("input", {
                type: "hidden",
                name: "requesttoken",
                value: ce.value
              }, null, 8, xh),
              O[23] || (O[23] = u("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              u("input", {
                type: "hidden",
                name: "starred",
                value: h.starred ? "0" : "1"
              }, null, 8, Ah),
              u("button", {
                type: "submit",
                class: Pr(["library-cover-star-button", { "library-cover-star-button--starred": h.starred }]),
                "aria-pressed": h.starred ? "true" : "false",
                title: h.starred ? b(l)("library", "Unstar this publication") : b(l)("library", "Star this publication"),
                "aria-label": h.starred ? b(l)("library", "Unstar this publication") : b(l)("library", "Star this publication"),
                onClick: En((be) => zt(h, be), ["prevent"])
              }, d(h.starred ? "★" : "☆"), 11, wh)
            ], 40, Ch),
            u("div", Rh, [
              u("div", Oh, [
                u("h3", null, [
                  h.starred ? (x(), A("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": b(l)("library", "Starred")
                  }, "★", 8, Nh)) : de("", !0),
                  ye(d(h.title), 1)
                ]),
                u("a", {
                  class: "library-cover-read",
                  href: h.openUrl
                }, d(b(l)("library", "Read")), 9, Ph)
              ]),
              u("details", {
                class: "library-cover-details",
                onToggle: (be) => cr(h.id, be)
              }, [
                u("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${b(l)("library", "Show details and actions")}: ${h.title}`
                }, d(b(l)("library", "Details")), 9, Lh),
                u("div", Mh, [
                  h.creators ? (x(), A("p", Ih, d(h.creators), 1)) : de("", !0),
                  u("dl", Uh, [
                    u("div", Dh, [
                      u("dt", null, d(b(l)("library", "Type")), 1),
                      u("dd", null, d(h.publicationType), 1)
                    ]),
                    h.publication ? (x(), A("div", Fh, [
                      u("dt", null, d(b(l)("library", "Series")), 1),
                      u("dd", null, d(h.publication), 1)
                    ])) : de("", !0),
                    h.publicationDate ? (x(), A("div", Hh, [
                      u("dt", null, d(b(l)("library", "Date")), 1),
                      u("dd", null, d(h.publicationDate), 1)
                    ])) : de("", !0),
                    h.workflowStatus ? (x(), A("div", $h, [
                      u("dt", null, d(b(l)("library", "Status")), 1),
                      u("dd", null, d(h.workflowStatus), 1)
                    ])) : de("", !0),
                    h.hasScannerConflict ? (x(), A("div", jh, [
                      u("dt", null, d(b(l)("library", "Review")), 1),
                      u("dd", null, d(h.scannerConflictCount) + " fields", 1)
                    ])) : de("", !0),
                    h.lastOpenedAt ? (x(), A("div", Vh, [
                      u("dt", null, d(b(l)("library", "Last opened")), 1),
                      u("dd", null, d(h.lastOpenedAt), 1)
                    ])) : de("", !0),
                    h.extension ? (x(), A("div", Bh, [
                      u("dt", null, d(b(l)("library", "Format")) + ":", 1),
                      u("dd", null, d(ge(h.extension)), 1)
                    ])) : de("", !0),
                    h.shelf ? (x(), A("div", zh, [
                      u("dt", null, d(b(l)("library", "Shelf")), 1),
                      u("dd", null, d(h.shelf), 1)
                    ])) : de("", !0)
                  ]),
                  h.description ? (x(), A("p", Wh, d(h.description), 1)) : de("", !0),
                  h.scanStatus !== "indexed" || h.scanError ? (x(), A("p", qh, [
                    ye(" scanStatus: " + d(h.scanStatus || "unknown"), 1),
                    h.scanError ? (x(), A("span", Kh, " · scanError: " + d(h.scanError), 1)) : de("", !0)
                  ])) : de("", !0),
                  u("div", Gh, [
                    Re(h).length === 0 ? (x(), A("span", Yh, "No Nextcloud tags")) : (x(!0), A(oe, { key: 1 }, Te(Re(h), (be) => (x(), A("span", {
                      key: be.id,
                      class: "library-tag"
                    }, d(be.name), 1))), 128))
                  ]),
                  u("p", Xh, [
                    u("a", {
                      href: h.filesUrl
                    }, d(b(l)("library", "Show in Files")), 9, Jh),
                    O[24] || (O[24] = ye(" · ", -1)),
                    u("a", {
                      href: h.downloadUrl
                    }, d(b(l)("library", "Download source")), 9, Zh),
                    O[25] || (O[25] = ye(" · ", -1)),
                    u("a", {
                      href: h.detailsUrl
                    }, d(b(l)("library", "Details")), 9, Qh)
                  ])
                ])
              ], 40, kh)
            ])
          ], 2))), 128))
        ])),
        s.value.length > 0 ? (x(), A("nav", {
          key: 5,
          class: "library-pagination library-pagination--bottom",
          "aria-label": b(l)("library", "Catalogue pagination")
        }, [
          u("span", tm, [
            ye(d(b(l)("library", "Page")) + " " + d(z.value.page), 1),
            z.value.total > 0 ? (x(), A("span", rm, " · " + d(z.value.from) + "–" + d(z.value.to), 1)) : de("", !0)
          ]),
          z.value.previousUrl ? (x(), A("a", {
            key: 0,
            href: z.value.previousUrl
          }, d(b(l)("library", "Previous")), 9, nm)) : (x(), A("span", im, d(b(l)("library", "Previous")), 1)),
          z.value.nextUrl ? (x(), A("a", {
            key: 2,
            href: z.value.nextUrl
          }, d(b(l)("library", "Next")), 9, om)) : (x(), A("span", sm, d(b(l)("library", "Next")), 1))
        ], 8, em)) : de("", !0)
      ])
    ]));
  }
}, cs = du("library", "catalogue", {}), An = document.querySelector("#library-vue-root"), us = {
  ...cs,
  requestToken: An?.dataset.requestToken || cs.requestToken || ""
};
function Y(e) {
  return String(e ?? "");
}
function Cl(e) {
  return Y(e).toUpperCase();
}
function am(e, t, r, n = Y) {
  for (const i of t) {
    const o = document.createElement("option");
    o.value = Y(i), o.textContent = n(i), Y(i) === Y(r) && (o.selected = !0), e.appendChild(o);
  }
}
function fs(e, t, r, n, i = "") {
  const o = document.createElement("label");
  o.textContent = t;
  const s = document.createElement("input");
  s.type = r === "q" ? "search" : "text", s.name = r, s.value = Y(n), s.placeholder = i, o.appendChild(s), e.appendChild(o);
}
function Ar(e, t, r, n, i, o, s = Y) {
  const a = document.createElement("label");
  a.textContent = t;
  const f = document.createElement("select");
  f.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = i, f.appendChild(v), am(f, o, n, s), a.appendChild(f), e.appendChild(a);
}
function wr(e) {
  const t = Y(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function cm(e, t = {}) {
  return Y(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(Y(e || t?.publication || ""))}`);
}
function um(e) {
  return Y(e.discoveryPage) === "publication";
}
function fm(e, t = {}) {
  return Y(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(Y(e))}`);
}
function Si(e) {
  return Y(e.discoveryPage) === "year";
}
function dm(e, t = {}) {
  return Y(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(Y(e))}`);
}
function Ci(e) {
  return Y(e.discoveryPage) === "creator";
}
function pm(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && Y(n).trim() !== "");
}
function hm() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function zr(e, t, r, n) {
  const i = document.createElement("a");
  return i.href = t, i.className = r, i.textContent = n, e.appendChild(i), i;
}
function mm(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function bm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", l("library", "Catalogue search and filters")), fs(n, l("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Ar(n, l("library", "Type"), "type", r.type, l("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), fs(n, l("library", "Nextcloud tag"), "tag", r.tag, "photography"), Ar(n, l("library", "Format"), "format", r.format, l("library", "All formats"), e.formats || [], Cl), Ar(n, l("library", "Shelf"), "shelf", r.shelf, l("library", "All shelves"), e.shelves || []), Ar(n, l("library", "Scan status"), "status", r.status, l("library", "All scan statuses"), e.scanStatuses || []), Ar(n, l("library", "Sort"), "sort", r.sort || "title", l("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Ar(n, l("library", "Page size"), "limit", t.limit || 100, l("library", "Page size"), [25, 50, 100, 250, 500]);
  const i = document.createElement("button");
  i.type = "submit", i.className = "button primary", i.setAttribute("aria-label", l("library", "Apply catalogue filters")), i.textContent = l("library", "Apply filters");
  const o = document.createElement("a");
  return o.href = "?", o.className = "button secondary", o.setAttribute("aria-label", l("library", "Clear catalogue filters")), o.textContent = l("library", "Clear"), n.append(i, o), n;
}
function ym() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", i = e.get("batchMetadataSkipped") || "0", o = document.createElement("p");
  return o.className = "library-notice library-batch-metadata-apply-result", o.textContent = l("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${i} skipped.`), o;
}
function gm(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", l("library", "Quick catalogue filters"));
  let i = null;
  const o = () => {
    window.clearTimeout(i), i = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [E, k] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(E) || Y(k).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = E, j.value = Y(k), n.appendChild(j);
  }
  const s = document.createElement("label");
  s.className = "library-quick-filter-search", s.textContent = l("library", "Search");
  const a = document.createElement("input");
  a.type = "search", a.name = "q", a.value = Y(r.q), a.placeholder = "Camera, Eco, Rolleiflex...", a.addEventListener("input", o), s.appendChild(a), n.appendChild(s);
  const f = [
    [l("library", "Sort"), "sort", r.sort || "title", [["title", l("library", "Title")], ["recent", l("library", "Recently added")], ["publicationDate", l("library", "Publication date")], ["publication", l("library", "Series")], ["lastOpened", l("library", "Recently opened")], ["format", l("library", "Format")]]],
    [l("library", "Starred"), "starred", r.starred || "", [["", l("library", "All")], ["1", l("library", "Starred")]]],
    [l("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [E, k, j, re] of f) {
    const q = document.createElement("label");
    q.textContent = E;
    const se = document.createElement("select");
    se.name = k;
    for (const [ne, z] of re) {
      const I = document.createElement("option");
      I.value = Y(ne), I.textContent = Y(z), Y(ne) === Y(j) && (I.selected = !0), se.appendChild(I);
    }
    se.addEventListener("change", () => n.requestSubmit()), q.appendChild(se), n.appendChild(q);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", l("library", "Apply catalogue filters")), v.textContent = l("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", l("library", "Clear catalogue filters")), y.textContent = l("library", "Clear all"), n.append(v, y), n;
}
function _m(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, i = Y(e.settingsUrl || ""), o = Y(e.metadataExportUrl || ""), s = Y(e.batchTagUrl || "/apps/library/bulk/tags"), a = Y(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), f = Y(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = Y(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = Y(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), E = document.createElement("div");
  E.className = "library-vue-catalogue library-vue-fallback", E.dataset.vueFallback = "true";
  const k = document.createElement("section");
  k.className = "library-panel", k.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const re = document.createElement("div"), q = document.createElement("h2");
  q.id = "library-catalogue-heading", q.textContent = l("library", "Publication catalogue");
  const se = document.createElement("p");
  se.className = "library-muted", se.textContent = l("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), re.append(q, se);
  const ne = document.createElement("nav");
  if (ne.className = "library-catalogue-toolbar", ne.setAttribute("aria-label", l("library", "Library actions")), i) {
    const N = document.createElement("a");
    N.href = i, N.className = "button secondary", N.setAttribute("aria-label", "Open Library settings"), N.textContent = l("library", "Settings"), ne.appendChild(N);
  }
  if (o) {
    const N = document.createElement("a");
    N.href = o, N.className = "button secondary", N.setAttribute("aria-label", "Export corrected metadata"), N.textContent = l("library", "Export corrected metadata"), ne.appendChild(N);
  }
  if (e.metadataSidecarManifestUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarManifestUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar manifest"), N.textContent = l("library", "Sidecar manifest"), ne.appendChild(N);
  }
  if (e.metadataSidecarBundleUrl) {
    const N = document.createElement("a");
    N.href = e.metadataSidecarBundleUrl, N.className = "button secondary", N.setAttribute("aria-label", "Export sidecar ZIP"), N.textContent = l("library", "Sidecar ZIP"), ne.appendChild(N);
  }
  j.append(re, ne), k.appendChild(j);
  const z = ym();
  z && k.appendChild(z), k.appendChild(gm(e, n));
  const I = document.createElement("details");
  I.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = l("library", "Show catalogue filters"), I.append(V, bm(e, n)), k.appendChild(I), um(e) || Si(e) || Ci(e)) {
    const N = document.createElement("section");
    N.className = "library-discovery-header", N.setAttribute("aria-labelledby", "library-discovery-heading");
    const P = document.createElement("p");
    P.className = "library-muted", P.textContent = Ci(e) ? l("library", "Creator") : Si(e) ? l("library", "Publication year") : l("library", "Publication / series");
    const $ = document.createElement("h3");
    $.id = "library-discovery-heading", $.textContent = Y(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = `${n.total ?? r.length} ${Ci(e) ? l("library", "items by this creator. Sorted by publication context when available.") : Si(e) ? l("library", "items from this publication year. Sorted by publication date when available.") : l("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const ie = document.createElement("a");
    ie.href = "/apps/library/", ie.className = "button secondary", ie.textContent = l("library", "Back to full catalogue"), N.append(P, $, J, ie), k.appendChild(N);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const ke = document.createElement("a");
  ke.href = "?", ke.textContent = ` ${l("library", "Clear all filters")}`, ce.appendChild(ke), k.appendChild(ce);
  const Oe = document.createElement("details");
  Oe.className = "library-batch-actions";
  const ze = document.createElement("summary");
  ze.textContent = `${l("library", "Batch actions for current results")} (${n.total ?? r.length} ${l("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = s, Ee.className = "library-batch-tag-form";
  const $e = wr(e);
  $e && Ee.appendChild($e);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Y(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = Y(P), Ee.appendChild($);
  }
  const tt = document.createElement("label");
  tt.textContent = l("library", "Apply Nextcloud tag to current results");
  const lt = document.createElement("input");
  lt.type = "text", lt.name = "nextcloudTagName", lt.placeholder = "batch-review", tt.appendChild(lt);
  const Ge = document.createElement("button");
  Ge.type = "submit", Ge.className = "button secondary", Ge.textContent = l("library", "Apply Nextcloud tag to current results");
  const gt = document.createElement("p");
  gt.className = "library-muted", gt.textContent = l("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(tt, Ge, gt);
  const Ve = document.createElement("form");
  Ve.method = "post", Ve.action = a, Ve.className = "library-batch-tag-remove-form";
  const Le = wr(e);
  Le && Ve.appendChild(Le);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Y(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = Y(P), Ve.appendChild($);
  }
  const me = document.createElement("label");
  me.textContent = l("library", "Nextcloud tag");
  const ae = document.createElement("input");
  ae.type = "text", ae.name = "nextcloudTagName", ae.setAttribute("list", "library-nextcloud-tag-suggestions"), ae.placeholder = l("library", "e.g. Review"), ae.autocomplete = "off", me.appendChild(ae);
  const We = document.createElement("button");
  We.type = "submit", We.className = "button secondary", We.textContent = l("library", "Remove tag from current results");
  const xe = document.createElement("p");
  xe.className = "library-muted", xe.textContent = l("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), Ve.append(me, We, xe);
  const Ne = document.createElement("form");
  Ne.method = "post", Ne.action = f, Ne.className = "library-batch-metadata-reset-form";
  const Ue = wr(e);
  Ue && Ne.appendChild(Ue);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Y(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = Y(P), Ne.appendChild($);
  }
  const _t = document.createElement("input");
  _t.type = "hidden", _t.name = "scannerConflicts", _t.value = "1";
  const fe = document.createElement("button");
  fe.type = "submit", fe.className = "button secondary", fe.textContent = l("library", "Reset filtered metadata");
  const jt = document.createElement("p");
  jt.className = "library-muted", jt.textContent = l("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ne.append(_t, fe, jt);
  const De = document.createElement("form");
  De.method = "post", De.action = v, De.className = "library-batch-metadata-edit-preview-form", De.target = "_blank";
  const vt = wr(e);
  vt && De.appendChild(vt);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Y(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = Y(P), De.appendChild($);
  }
  const pt = document.createElement("label");
  pt.textContent = l("library", "Metadata field");
  const Et = document.createElement("select");
  Et.name = "bulkEditField";
  for (const [N, P] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const $ = document.createElement("option");
    $.value = N, $.textContent = l("library", P), Et.appendChild($);
  }
  pt.appendChild(Et);
  const Xe = document.createElement("label");
  Xe.textContent = l("library", "Preview value");
  const Tt = document.createElement("input");
  Tt.type = "text", Tt.name = "bulkEditValue", Tt.placeholder = "magazine, de, photography...", Tt.autocomplete = "off", Xe.appendChild(Tt);
  const p = document.createElement("button");
  p.type = "submit", p.className = "button secondary", p.textContent = l("library", "Preview & apply metadata edit");
  const m = document.createElement("p");
  m.className = "library-muted", m.textContent = l("library", "Preview first, then apply from the review page."), De.append(pt, Xe, p, m);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const R = wr(e);
  R && _.appendChild(R);
  for (const [N, P] of Object.entries(e.activeFilters || {})) {
    if (Y(P).trim() === "") continue;
    const $ = document.createElement("input");
    $.type = "hidden", $.name = N, $.value = Y(P), _.appendChild($);
  }
  const T = document.createElement("button");
  T.type = "submit", T.className = "button secondary", T.textContent = l("library", "Request fresh cover previews");
  const C = document.createElement("p");
  C.className = "library-muted", C.textContent = l("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(T, C), Oe.append(ze, Ee, Ve, Ne, De, _), k.appendChild(Oe);
  const M = document.createElement("nav");
  M.className = "library-pagination", M.setAttribute("aria-label", l("library", "Catalogue pagination"));
  const U = document.createElement("span");
  U.className = "library-pagination-range", U.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, M.appendChild(U), k.appendChild(M);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], S = document.createElement("details");
  S.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const K = document.createElement("summary");
  K.className = "library-periodical-groups-summary", K.textContent = l("library", "Show top series and periodicals"), S.appendChild(K);
  const H = document.createElement("h3");
  H.textContent = L.length > 0 ? l("library", "Top series and periodicals") : l("library", "No series or periodicals found yet");
  const W = document.createElement("p");
  if (W.className = "library-muted", W.textContent = L.length > 0 ? l("library", "Jump into recurring publications with one click.") : l("library", "Add publication or series names in item details to build this shortcut panel."), S.append(H, W), L.length > 0) {
    const N = document.createElement("ul");
    for (const P of L) {
      const $ = document.createElement("li"), J = document.createElement("a");
      J.href = cm(P.publication, P), J.textContent = Y(P.publication);
      const ie = document.createElement("span");
      ie.className = "library-muted", ie.textContent = `${P.itemCount} items`, $.append(J, ie), N.appendChild($);
    }
    S.appendChild(N);
  }
  k.appendChild(S);
  const G = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (G.length > 0) {
    const N = document.createElement("details");
    N.className = "library-year-groups";
    const P = document.createElement("summary");
    P.className = "library-periodical-groups-summary", P.textContent = l("library", "Show publication years");
    const $ = document.createElement("h3");
    $.textContent = l("library", "Top publication years");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = l("library", "Jump into dated books, magazines, journals and comics by year.");
    const ie = document.createElement("ul");
    for (const he of G) {
      const ue = document.createElement("li"), Me = document.createElement("a");
      Me.href = fm(he, e), Me.textContent = Y(he), ue.appendChild(Me), ie.appendChild(ue);
    }
    N.append(P, $, J, ie), k.appendChild(N);
  }
  const Q = Array.isArray(e.creators) ? e.creators : [];
  if (Q.length > 0) {
    const N = document.createElement("details");
    N.className = "library-creator-groups";
    const P = document.createElement("summary");
    P.className = "library-periodical-groups-summary", P.textContent = l("library", "Show creators");
    const $ = document.createElement("h3");
    $.textContent = l("library", "Top creators");
    const J = document.createElement("p");
    J.className = "library-muted", J.textContent = l("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const ie = document.createElement("ul");
    for (const he of Q) {
      const ue = document.createElement("li"), Me = document.createElement("a");
      Me.href = dm(he, e), Me.textContent = Y(he), ue.appendChild(Me), ie.appendChild(ue);
    }
    N.append(P, $, J, ie), k.appendChild(N);
  }
  if (r.length === 0) {
    const N = document.createElement("div"), P = Number(e.rootCount || 0), $ = Number(e.enabledRootCount || 0), J = pm(e);
    N.className = "library-empty-content", (P === 0 || $ === 0) && N.classList.add("library-first-run-guidance"), J && P > 0 && $ > 0 && N.classList.add("library-filter-empty-state"), N.setAttribute("role", "status");
    const ie = document.createElement("h3"), he = document.createElement("p");
    he.className = "library-muted";
    const ue = document.createElement("p");
    ue.className = "library-empty-actions", P === 0 ? (ie.textContent = l("library", "Start with one Library root"), he.textContent = l("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), zr(ue, i, "button primary", l("library", "Add a Library root")), mm(ue, l("library", "Run a scan after saving a root"))) : $ === 0 ? (ie.textContent = l("library", "No enabled Library roots"), he.textContent = l("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), zr(ue, i, "button primary", l("library", "Open Library settings"))) : J ? (ie.textContent = l("library", "No matches for the current filters"), he.textContent = l("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), zr(ue, hm(), "button secondary", l("library", "Clear search")), zr(ue, "?", "button primary", l("library", "Clear all filters"))) : (ie.textContent = l("library", "No catalogue items yet"), he.textContent = l("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), zr(ue, i, "button primary", l("library", "Run a scan from settings"))), N.append(ie, he, ue), k.appendChild(N);
  } else {
    const N = document.createElement("div");
    N.className = "library-cover-gallery";
    for (const P of r) {
      const $ = document.createElement("article");
      $.className = "library-cover-card";
      const J = document.createElement("a");
      J.className = "library-cover-link", J.href = Y(P.openUrl || "#"), J.setAttribute("aria-label", `Read ${Y(P.title || "publication")}`);
      const ie = document.createElement("img");
      ie.className = "library-cover-image", ie.src = Y(P.coverUrl || ""), ie.alt = `Cover for ${Y(P.title || "publication")}`, ie.loading = "lazy", J.appendChild(ie);
      const he = wr(e), ue = document.createElement("form");
      ue.method = "post", ue.action = Y(P.starUrl || ""), ue.className = "library-cover-star-form", he && ue.appendChild(he);
      const Me = document.createElement("input");
      Me.type = "hidden", Me.name = "returnTo", Me.value = "catalogue";
      const ge = document.createElement("input");
      ge.type = "hidden", ge.name = "starred", ge.value = P.starred ? "0" : "1";
      const Re = document.createElement("button");
      Re.type = "submit", Re.className = P.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Re.setAttribute("aria-pressed", P.starred ? "true" : "false"), Re.setAttribute("aria-label", P.starred ? l("library", "Unstar this publication") : l("library", "Star this publication")), Re.title = P.starred ? l("library", "Unstar this publication") : l("library", "Star this publication"), Re.textContent = P.starred ? "★" : "☆", ue.append(Me, ge, Re);
      const at = document.createElement("div");
      at.className = "library-cover-summary";
      const kt = document.createElement("h3");
      if (kt.textContent = Y(P.title || "Untitled publication"), at.appendChild(kt), P.creators) {
        const D = document.createElement("p");
        D.className = "library-creator", D.textContent = Y(P.creators), at.appendChild(D);
      }
      const Vt = document.createElement("dl");
      Vt.className = "library-cover-detail-list";
      const cr = [
        ["Type", Y(P.publicationType || "other")],
        ["Format", P.extension ? Cl(P.extension) : ""],
        ["Shelf", P.shelf ? Y(P.shelf) : ""]
      ].filter(([, D]) => D !== "");
      for (const [D, O] of cr) {
        const h = document.createElement("div");
        h.className = "library-cover-detail-chip";
        const be = document.createElement("dt");
        be.textContent = D;
        const Fe = document.createElement("dd");
        Fe.textContent = O, h.append(be, Fe), Vt.appendChild(h);
      }
      at.appendChild(Vt);
      const At = document.createElement("p"), St = document.createElement("a");
      St.href = Y(P.openUrl || "#"), St.textContent = l("library", "Read");
      const rr = document.createElement("a");
      rr.href = Y(P.filesUrl || "#"), rr.textContent = l("library", "Show in Files");
      const Bt = document.createElement("a");
      Bt.href = Y(P.downloadUrl || "#"), Bt.textContent = l("library", "Download source");
      const zt = document.createElement("a");
      zt.href = Y(P.detailsUrl || "#"), zt.textContent = l("library", "Details"), At.append(St, document.createTextNode(" · "), rr, document.createTextNode(" · "), Bt, document.createTextNode(" · "), zt), at.appendChild(At), $.append(J, ue, at), N.appendChild($);
    }
    k.appendChild(N);
  }
  return E.appendChild(k), E;
}
if (An)
  try {
    cu(lm, { state: us }).mount(An);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), An.replaceChildren(_m(us));
  }
//# sourceMappingURL=library-main.mjs.map
