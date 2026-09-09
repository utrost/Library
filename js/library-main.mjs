// @__NO_SIDE_EFFECTS__
function si(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const ke = {}, Gr = [], Yt = () => {
}, Ts = () => !1, ra = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), na = (e) => e.startsWith("onUpdate:"), rt = Object.assign, li = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, jl = Object.prototype.hasOwnProperty, Ce = (e, t) => jl.call(e, t), ne = Array.isArray, wr = (e) => En(e) === "[object Map]", Mr = (e) => En(e) === "[object Set]", Ai = (e) => En(e) === "[object Date]", ue = (e) => typeof e == "function", He = (e) => typeof e == "string", Xt = (e) => typeof e == "symbol", xe = (e) => e !== null && typeof e == "object", xs = (e) => (xe(e) || ue(e)) && ue(e.then) && ue(e.catch), As = Object.prototype.toString, En = (e) => As.call(e), Vl = (e) => En(e).slice(8, -1), ks = (e) => En(e) === "[object Object]", oi = (e) => He(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = /* @__PURE__ */ si(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), aa = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, ql = /-\w/g, Dt = aa(
  (e) => e.replace(ql, (t) => t.slice(1).toUpperCase())
), Bl = /\B([A-Z])/g, Lr = aa(
  (e) => e.replace(Bl, "-$1").toLowerCase()
), Rs = aa((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ta = aa(
  (e) => e ? `on${Rs(e)}` : ""
), Gt = (e, t) => !Object.is(e, t), qn = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Os = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, ia = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ki;
const sa = () => ki || (ki = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ci(e) {
  if (ne(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], a = He(n) ? Gl(n) : ci(n);
      if (a)
        for (const i in a)
          t[i] = a[i];
    }
    return t;
  } else if (He(e) || xe(e))
    return e;
}
const zl = /;(?![^(]*\))/g, Wl = /:([^]+)/, Kl = /\/\*[^]*?\*\//g;
function Gl(e) {
  const t = {};
  return e.replace(Kl, "").split(zl).forEach((r) => {
    if (r) {
      const n = r.split(Wl);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Lt(e) {
  let t = "";
  if (He(e))
    t = e;
  else if (ne(e))
    for (let r = 0; r < e.length; r++) {
      const n = Lt(e[r]);
      n && (t += n + " ");
    }
  else if (xe(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const Yl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ si(Yl);
function Ns(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Sr(e[n], t[n]);
  return r;
}
function Ri(e, t) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), n = new Uint8Array(r.length);
  for (const a of e) {
    let i = -1;
    for (let c = 0; c < r.length; c++)
      if (!n[c] && Sr(a, r[c])) {
        i = c;
        break;
      }
    if (i < 0) return !1;
    n[i] = 1;
  }
  return !0;
}
function Sr(e, t) {
  if (e === t) return !0;
  let r = Ai(e), n = Ai(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = Xt(e), n = Xt(t), r || n)
    return e === t;
  if (r = ne(e), n = ne(t), r || n)
    return r && n ? Jl(e, t) : !1;
  if (r = xe(e), n = xe(t), r || n) {
    if (!r || !n)
      return !1;
    if (r = wr(e), n = wr(t), r || n || (r = Mr(e), n = Mr(t), r || n))
      return r && n ? Ri(e, t) : !1;
    const a = Object.keys(e).length, i = Object.keys(t).length;
    if (a !== i)
      return !1;
    for (const c in e) {
      const d = e.hasOwnProperty(c), h = t.hasOwnProperty(c);
      if (d && !h || !d && h || !Sr(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Zl(e, t) {
  return e.findIndex((r) => Sr(r, t));
}
const Ps = (e) => !!(e && e.__v_isRef === !0), o = (e) => He(e) ? e : e == null ? "" : ne(e) || xe(e) && (e.toString === As || !ue(e.toString)) ? Ps(e) ? o(e.value) : JSON.stringify(e, Is, 2) : String(e), Is = (e, t) => Ps(t) ? Is(e, t.value) : wr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, a], i) => (r[xa(n, i) + " =>"] = a, r),
    {}
  )
} : Mr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => xa(r))
} : Xt(t) ? xa(t) : xe(t) && !ne(t) && !ks(t) ? String(t) : t, xa = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xt(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
let Je;
class Ql {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Je && (Je.active ? (this.parent = Je, this.index = (Je.scopes || (Je.scopes = [])).push(
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
        const a = this.scopes.slice();
        for (t = 0, r = a.length; t < r; t++)
          a[t].resume();
      }
      const n = this.effects.slice();
      for (t = 0, r = n.length; t < r; t++)
        n[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Je;
      try {
        return Je = this, t();
      } finally {
        Je = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Je, Je = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Je === this)
        Je = this.prevScope;
      else {
        let t = Je;
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
        const a = this.scopes.slice();
        for (r = 0, n = a.length; r < n; r++)
          a[r].stop(!0);
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
function eo() {
  return Je;
}
let Oe;
const Aa = /* @__PURE__ */ new WeakSet();
class Us {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Je && (Je.active ? Je.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Aa.has(this) && (Aa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ls(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Oi(this), Ds(this);
    const t = Oe, r = Ft;
    Oe = this, Ft = !0;
    try {
      return this.fn();
    } finally {
      Fs(this), Oe = t, Ft = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        fi(t);
      this.deps = this.depsTail = void 0, Oi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Aa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ga(this) && this.run();
  }
  get dirty() {
    return Ga(this);
  }
}
let Ms = 0, pn, hn;
function Ls(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = hn, hn = e;
    return;
  }
  e.next = pn, pn = e;
}
function ui() {
  Ms++;
}
function di() {
  if (--Ms > 0)
    return;
  if (hn) {
    let t = hn;
    for (hn = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; pn; ) {
    let t = pn;
    for (pn = void 0; t; ) {
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
function Ds(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fs(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const a = n.prevDep;
    n.version === -1 ? (n === r && (r = a), fi(n), to(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = a;
  }
  e.deps = t, e.depsTail = r;
}
function Ga(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($s(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $s(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gn) || (e.globalVersion = gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ga(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Oe, n = Ft;
  Oe = e, Ft = !0;
  try {
    Ds(e);
    const a = e.fn(e._value);
    (t.version === 0 || Gt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Oe = r, Ft = n, Fs(e), e.flags &= -3;
  }
}
function fi(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: a } = e;
  if (n && (n.nextSub = a, e.prevSub = void 0), a && (a.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let i = r.computed.deps; i; i = i.nextDep)
      fi(i, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function to(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Ft = !0;
const Hs = [];
function cr() {
  Hs.push(Ft), Ft = !1;
}
function ur() {
  const e = Hs.pop();
  Ft = e === void 0 ? !0 : e;
}
function Oi(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Oe;
    Oe = void 0;
    try {
      t();
    } finally {
      Oe = r;
    }
  }
}
let gn = 0;
class ro {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class pi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Oe || !Ft || Oe === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Oe)
      r = this.activeLink = new ro(Oe, this), Oe.deps ? (r.prevDep = Oe.depsTail, Oe.depsTail.nextDep = r, Oe.depsTail = r) : Oe.deps = Oe.depsTail = r, js(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Oe.depsTail, r.nextDep = void 0, Oe.depsTail.nextDep = r, Oe.depsTail = r, Oe.deps === r && (Oe.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, gn++, this.notify(t);
  }
  notify(t) {
    ui();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      di();
    }
  }
}
function js(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        js(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Ya = /* @__PURE__ */ new WeakMap(), Pr = /* @__PURE__ */ Symbol(
  ""
), Xa = /* @__PURE__ */ Symbol(
  ""
), _n = /* @__PURE__ */ Symbol(
  ""
);
function et(e, t, r) {
  if (Ft && Oe) {
    let n = Ya.get(e);
    n || Ya.set(e, n = /* @__PURE__ */ new Map());
    let a = n.get(r);
    a || (n.set(r, a = new pi()), a.map = n, a.key = r), a.track();
  }
}
function sr(e, t, r, n, a, i) {
  const c = Ya.get(e);
  if (!c) {
    gn++;
    return;
  }
  const d = (h) => {
    h && h.trigger();
  };
  if (ui(), t === "clear")
    c.forEach(d);
  else {
    const h = ne(e), v = h && oi(r);
    if (h && r === "length") {
      const y = Number(n);
      c.forEach((T, I) => {
        (I === "length" || I === _n || !Xt(I) && I >= y) && d(T);
      });
    } else
      switch ((r !== void 0 || c.has(void 0)) && d(c.get(r)), v && d(c.get(_n)), t) {
        case "add":
          h ? v && d(c.get("length")) : (d(c.get(Pr)), wr(e) && d(c.get(Xa)));
          break;
        case "delete":
          h || (d(c.get(Pr)), wr(e) && d(c.get(Xa)));
          break;
        case "set":
          wr(e) && d(c.get(Pr));
          break;
      }
  }
  di();
}
function qr(e) {
  const t = /* @__PURE__ */ Se(e);
  return t === e ? t : (et(t, "iterate", _n), /* @__PURE__ */ Ot(e) ? t : t.map($t));
}
function la(e) {
  return et(e = /* @__PURE__ */ Se(e), "iterate", _n), e;
}
function Wt(e, t) {
  return /* @__PURE__ */ dr(e) ? Zr(/* @__PURE__ */ Ir(e) ? $t(t) : t) : $t(t);
}
const no = {
  __proto__: null,
  [Symbol.iterator]() {
    return ka(this, Symbol.iterator, (e) => Wt(this, e));
  },
  concat(...e) {
    return qr(this).concat(
      ...e.map((t) => ne(t) ? qr(t) : t)
    );
  },
  entries() {
    return ka(this, "entries", (e) => (e[1] = Wt(this, e[1]), e));
  },
  every(e, t) {
    return rr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return rr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => Wt(this, n)),
      arguments
    );
  },
  find(e, t) {
    return rr(
      this,
      "find",
      e,
      t,
      (r) => Wt(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return rr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return rr(
      this,
      "findLast",
      e,
      t,
      (r) => Wt(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return rr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return rr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ra(this, "includes", e);
  },
  indexOf(...e) {
    return Ra(this, "indexOf", e);
  },
  join(e) {
    return qr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ra(this, "lastIndexOf", e);
  },
  map(e, t) {
    return rr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rn(this, "pop");
  },
  push(...e) {
    return rn(this, "push", e);
  },
  reduce(e, ...t) {
    return Ni(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ni(this, "reduceRight", e, t);
  },
  shift() {
    return rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return rr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rn(this, "splice", e);
  },
  toReversed() {
    return qr(this).toReversed();
  },
  toSorted(e) {
    return qr(this).toSorted(e);
  },
  toSpliced(...e) {
    return qr(this).toSpliced(...e);
  },
  unshift(...e) {
    return rn(this, "unshift", e);
  },
  values() {
    return ka(this, "values", (e) => Wt(this, e));
  }
};
function ka(e, t, r) {
  const n = la(e), a = n[t]();
  return n !== e && !/* @__PURE__ */ Ot(e) && (a._next = a.next, a.next = () => {
    const i = a._next();
    return i.done || (i.value = r(i.value)), i;
  }), a;
}
const ao = Array.prototype;
function rr(e, t, r, n, a, i) {
  const c = la(e), d = c !== e && !/* @__PURE__ */ Ot(e), h = c[t];
  if (h !== ao[t]) {
    const T = h.apply(e, i);
    return d ? $t(T) : T;
  }
  let v = r;
  c !== e && (d ? v = function(T, I) {
    return r.call(this, Wt(e, T), I, e);
  } : r.length > 2 && (v = function(T, I) {
    return r.call(this, T, I, e);
  }));
  const y = h.call(c, v, n);
  return d && a ? a(y) : y;
}
function Ni(e, t, r, n) {
  const a = la(e), i = a !== e && !/* @__PURE__ */ Ot(e);
  let c = r, d = !1;
  a !== e && (i ? (d = n.length === 0, c = function(v, y, T) {
    return d && (d = !1, v = Wt(e, v)), r.call(this, v, Wt(e, y), T, e);
  }) : r.length > 3 && (c = function(v, y, T) {
    return r.call(this, v, y, T, e);
  }));
  const h = a[t](c, ...n);
  return d ? Wt(e, h) : h;
}
function Ra(e, t, r) {
  const n = /* @__PURE__ */ Se(e);
  et(n, "iterate", _n);
  const a = n[t](...r);
  return (a === -1 || a === !1) && /* @__PURE__ */ bi(r[0]) ? (r[0] = /* @__PURE__ */ Se(r[0]), n[t](...r)) : a;
}
function rn(e, t, r = []) {
  cr(), ui();
  const n = (/* @__PURE__ */ Se(e))[t].apply(e, r);
  return di(), ur(), n;
}
const io = /* @__PURE__ */ si("__proto__,__v_isRef,__isVue"), Vs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xt)
);
function so(e) {
  Xt(e) || (e = String(e));
  const t = /* @__PURE__ */ Se(this);
  return et(t, "has", e), t.hasOwnProperty(e);
}
class qs {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, i = this._isShallow;
    if (r === "__v_isReactive")
      return !a;
    if (r === "__v_isReadonly")
      return a;
    if (r === "__v_isShallow")
      return i;
    if (r === "__v_raw")
      return n === (a ? i ? yo : Ks : i ? Ws : zs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const c = ne(t);
    if (!a) {
      let h;
      if (c && (h = no[r]))
        return h;
      if (r === "hasOwnProperty")
        return so;
    }
    const d = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ tt(t) ? t : n
    );
    if ((Xt(r) ? Vs.has(r) : io(r)) || (a || et(t, "get", r), i))
      return d;
    if (/* @__PURE__ */ tt(d)) {
      const h = c && oi(r) ? d : d.value;
      return a && xe(h) ? /* @__PURE__ */ Za(h) : h;
    }
    return xe(d) ? a ? /* @__PURE__ */ Za(d) : /* @__PURE__ */ ar(d) : d;
  }
}
class Bs extends qs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, a) {
    let i = t[r];
    const c = ne(t) && oi(r);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ dr(i);
      if (!/* @__PURE__ */ Ot(n) && !/* @__PURE__ */ dr(n) && (i = /* @__PURE__ */ Se(i), n = /* @__PURE__ */ Se(n)), !c && /* @__PURE__ */ tt(i) && !/* @__PURE__ */ tt(n))
        return v || (i.value = n), !0;
    }
    const d = c ? Number(r) < t.length : Ce(t, r), h = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ tt(t) ? t : a
    );
    return t === /* @__PURE__ */ Se(a) && h && (d ? Gt(n, i) && sr(t, "set", r, n) : sr(t, "add", r, n)), h;
  }
  deleteProperty(t, r) {
    const n = Ce(t, r);
    t[r];
    const a = Reflect.deleteProperty(t, r);
    return a && n && sr(t, "delete", r, void 0), a;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!Xt(r) || !Vs.has(r)) && et(t, "has", r), n;
  }
  ownKeys(t) {
    return et(
      t,
      "iterate",
      ne(t) ? "length" : Pr
    ), Reflect.ownKeys(t);
  }
}
class lo extends qs {
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
const oo = /* @__PURE__ */ new Bs(), co = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new Bs(!0);
const Ja = (e) => e, Ln = (e) => Reflect.getPrototypeOf(e);
function fo(e, t, r) {
  return function(...n) {
    const a = this.__v_raw, i = /* @__PURE__ */ Se(a), c = wr(i), d = e === "entries" || e === Symbol.iterator && c, h = e === "keys" && c, v = a[e](...n), y = r ? Ja : t ? Zr : $t;
    return !t && et(
      i,
      "iterate",
      h ? Xa : Pr
    ), rt(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: T, done: I } = v.next();
          return I ? { value: T, done: I } : {
            value: d ? [y(T[0]), y(T[1])] : y(T),
            done: I
          };
        }
      }
    );
  };
}
function Dn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function po(e, t) {
  const r = {
    get(a) {
      const i = this.__v_raw, c = /* @__PURE__ */ Se(i), d = /* @__PURE__ */ Se(a);
      e || (Gt(a, d) && et(c, "get", a), et(c, "get", d));
      const { has: h } = Ln(c), v = t ? Ja : e ? Zr : $t;
      if (h.call(c, a))
        return v(i.get(a));
      if (h.call(c, d))
        return v(i.get(d));
      i !== c && i.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && et(/* @__PURE__ */ Se(a), "iterate", Pr), a.size;
    },
    has(a) {
      const i = this.__v_raw, c = /* @__PURE__ */ Se(i), d = /* @__PURE__ */ Se(a);
      return e || (Gt(a, d) && et(c, "has", a), et(c, "has", d)), a === d ? i.has(a) : i.has(a) || i.has(d);
    },
    forEach(a, i) {
      const c = this, d = c.__v_raw, h = /* @__PURE__ */ Se(d), v = t ? Ja : e ? Zr : $t;
      return !e && et(h, "iterate", Pr), d.forEach((y, T) => a.call(i, v(y), v(T), c));
    }
  };
  return rt(
    r,
    e ? {
      add: Dn("add"),
      set: Dn("set"),
      delete: Dn("delete"),
      clear: Dn("clear")
    } : {
      add(a) {
        const i = /* @__PURE__ */ Se(this), c = Ln(i), d = /* @__PURE__ */ Se(a), h = !t && !/* @__PURE__ */ Ot(a) && !/* @__PURE__ */ dr(a) ? d : a;
        return c.has.call(i, h) || Gt(a, h) && c.has.call(i, a) || Gt(d, h) && c.has.call(i, d) || (i.add(h), sr(i, "add", h, h)), this;
      },
      set(a, i) {
        !t && !/* @__PURE__ */ Ot(i) && !/* @__PURE__ */ dr(i) && (i = /* @__PURE__ */ Se(i));
        const c = /* @__PURE__ */ Se(this), { has: d, get: h } = Ln(c);
        let v = d.call(c, a);
        v || (a = /* @__PURE__ */ Se(a), v = d.call(c, a));
        const y = h.call(c, a);
        return c.set(a, i), v ? Gt(i, y) && sr(c, "set", a, i) : sr(c, "add", a, i), this;
      },
      delete(a) {
        const i = /* @__PURE__ */ Se(this), { has: c, get: d } = Ln(i);
        let h = c.call(i, a);
        h || (a = /* @__PURE__ */ Se(a), h = c.call(i, a)), d && d.call(i, a);
        const v = i.delete(a);
        return h && sr(i, "delete", a, void 0), v;
      },
      clear() {
        const a = /* @__PURE__ */ Se(this), i = a.size !== 0, c = a.clear();
        return i && sr(
          a,
          "clear",
          void 0,
          void 0
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    r[a] = fo(a, e, t);
  }), r;
}
function hi(e, t) {
  const r = po(e, t);
  return (n, a, i) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? n : Reflect.get(
    Ce(r, a) && a in n ? r : n,
    a,
    i
  );
}
const ho = {
  get: /* @__PURE__ */ hi(!1, !1)
}, mo = {
  get: /* @__PURE__ */ hi(!1, !0)
}, bo = {
  get: /* @__PURE__ */ hi(!0, !1)
};
const zs = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ new WeakMap();
function go(e) {
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
function ar(e) {
  return /* @__PURE__ */ dr(e) ? e : mi(
    e,
    !1,
    oo,
    ho,
    zs
  );
}
// @__NO_SIDE_EFFECTS__
function _o(e) {
  return mi(
    e,
    !1,
    uo,
    mo,
    Ws
  );
}
// @__NO_SIDE_EFFECTS__
function Za(e) {
  return mi(
    e,
    !0,
    co,
    bo,
    Ks
  );
}
function mi(e, t, r, n, a) {
  if (!xe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const i = a.get(e);
  if (i)
    return i;
  const c = go(Vl(e));
  if (c === 0)
    return e;
  const d = new Proxy(
    e,
    c === 2 ? n : r
  );
  return a.set(e, d), d;
}
// @__NO_SIDE_EFFECTS__
function Ir(e) {
  return /* @__PURE__ */ dr(e) ? /* @__PURE__ */ Ir(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function dr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function bi(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Se(t) : e;
}
function vo(e) {
  return !Ce(e, "__v_skip") && Object.isExtensible(e) && Os(e, "__v_skip", !0), e;
}
const $t = (e) => xe(e) ? /* @__PURE__ */ ar(e) : e, Zr = (e) => xe(e) ? /* @__PURE__ */ Za(e) : e;
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Pi(e) {
  return wo(e, !1);
}
function wo(e, t) {
  return /* @__PURE__ */ tt(e) ? e : new So(e, t);
}
class So {
  constructor(t, r) {
    this.dep = new pi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ Se(t), this._value = r ? t : $t(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Ot(t) || /* @__PURE__ */ dr(t);
    t = n ? t : /* @__PURE__ */ Se(t), Gt(t, r) && (this._rawValue = t, this._value = n ? t : $t(t), this.dep.trigger());
  }
}
function p(e) {
  return /* @__PURE__ */ tt(e) ? e.value : e;
}
const Co = {
  get: (e, t, r) => t === "__v_raw" ? e : p(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const a = e[t];
    return /* @__PURE__ */ tt(a) && !/* @__PURE__ */ tt(r) ? (a.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Gs(e) {
  return /* @__PURE__ */ Ir(e) ? e : new Proxy(e, Co);
}
class Eo {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new pi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Oe !== this)
      return Ls(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $s(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function To(e, t, r = !1) {
  let n, a;
  return ue(e) ? n = e : (n = e.get, a = e.set), new Eo(n, a, r);
}
const Fn = {}, Kn = /* @__PURE__ */ new WeakMap();
let kr;
function xo(e, t = !1, r = kr) {
  if (r) {
    let n = Kn.get(r);
    n || Kn.set(r, n = []), n.push(e);
  }
}
function Ao(e, t, r = ke) {
  const { immediate: n, deep: a, once: i, scheduler: c, augmentJob: d, call: h } = r, v = (V) => a ? V : /* @__PURE__ */ Ot(V) || a === !1 || a === 0 ? lr(V, 1) : lr(V);
  let y, T, I, j, ie = !1, W = !1;
  if (/* @__PURE__ */ tt(e) ? (T = () => e.value, ie = /* @__PURE__ */ Ot(e)) : /* @__PURE__ */ Ir(e) ? (T = () => v(e), ie = !0) : ne(e) ? (W = !0, ie = e.some((V) => /* @__PURE__ */ Ir(V) || /* @__PURE__ */ Ot(V)), T = () => e.map((V) => {
    if (/* @__PURE__ */ tt(V))
      return V.value;
    if (/* @__PURE__ */ Ir(V))
      return v(V);
    if (ue(V))
      return h ? h(V, 2) : V();
  })) : ue(e) ? t ? T = h ? () => h(e, 2) : e : T = () => {
    if (I) {
      cr();
      try {
        I();
      } finally {
        ur();
      }
    }
    const V = kr;
    kr = y;
    try {
      return h ? h(e, 3, [j]) : e(j);
    } finally {
      kr = V;
    }
  } : T = Yt, t && a) {
    const V = T, oe = a === !0 ? 1 / 0 : a;
    T = () => lr(V(), oe);
  }
  const ce = eo(), se = () => {
    y.stop(), ce && ce.active && li(ce.effects, y);
  };
  if (i && t) {
    const V = t;
    t = (...oe) => {
      const Me = V(...oe);
      return se(), Me;
    };
  }
  let z = W ? new Array(e.length).fill(Fn) : Fn;
  const U = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const oe = y.run();
        if (V || a || ie || (W ? oe.some((Me, Pe) => Gt(Me, z[Pe])) : Gt(oe, z))) {
          I && I();
          const Me = kr;
          kr = y;
          try {
            const Pe = [
              oe,
              // pass undefined as the old value when it's changed for the first time
              z === Fn ? void 0 : W && z[0] === Fn ? [] : z,
              j
            ];
            z = oe, h ? h(t, 3, Pe) : (
              // @ts-expect-error
              t(...Pe)
            );
          } finally {
            kr = Me;
          }
        }
      } else
        y.run();
  };
  return d && d(U), y = new Us(T), y.scheduler = c ? () => c(U, !1) : U, j = (V) => xo(V, !1, y), I = y.onStop = () => {
    const V = Kn.get(y);
    if (V) {
      if (h)
        h(V, 4);
      else
        for (const oe of V) oe();
      Kn.delete(y);
    }
  }, t ? n ? U(!0) : z = y.run() : c ? c(U.bind(null, !0), !0) : y.run(), se.pause = y.pause.bind(y), se.resume = y.resume.bind(y), se.stop = se, se;
}
function lr(e, t = 1 / 0, r) {
  if (t <= 0 || !xe(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ tt(e))
    lr(e.value, t, r);
  else if (ne(e))
    for (let n = 0; n < e.length; n++)
      lr(e[n], t, r);
  else if (Mr(e) || wr(e))
    e.forEach((n) => {
      lr(n, t, r);
    });
  else if (ks(e)) {
    for (const n in e)
      lr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && lr(e[n], t, r);
  }
  return e;
}
function Tn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (a) {
    oa(a, t, r);
  }
}
function Ht(e, t, r, n) {
  if (ue(e)) {
    const a = Tn(e, t, r, n);
    return a && xs(a) && a.catch((i) => {
      oa(i, t, r);
    }), a;
  }
  if (ne(e)) {
    const a = [];
    for (let i = 0; i < e.length; i++)
      a.push(Ht(e[i], t, r, n));
    return a;
  }
}
function oa(e, t, r, n = !0) {
  const a = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: c } = t && t.appContext.config || ke;
  if (t) {
    let d = t.parent;
    const h = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; d; ) {
      const y = d.ec;
      if (y) {
        for (let T = 0; T < y.length; T++)
          if (y[T](e, h, v) === !1)
            return;
      }
      d = d.parent;
    }
    if (i) {
      cr(), Tn(i, null, 10, [
        e,
        h,
        v
      ]), ur();
      return;
    }
  }
  ko(e, r, a, n, c);
}
function ko(e, t, r, n = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const dt = [];
let zt = -1;
const Yr = [];
let vr = null, Wr = 0;
const Ys = /* @__PURE__ */ Promise.resolve();
let Gn = null;
function Xs(e) {
  const t = Gn || Ys;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ro(e) {
  let t = zt + 1, r = dt.length;
  for (; t < r; ) {
    const n = t + r >>> 1, a = dt[n], i = vn(a);
    i < e || i === e && a.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function yi(e) {
  if (!(e.flags & 1)) {
    const t = vn(e), r = dt[dt.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= vn(r) ? dt.push(e) : dt.splice(Ro(t), 0, e), e.flags |= 1, Js();
  }
}
function Js() {
  Gn || (Gn = Ys.then(Qs));
}
function Oo(e) {
  if (!ne(e))
    vr && e.id === -1 ? vr.splice(Wr + 1, 0, e) : e.flags & 1 || (Yr.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Yr.push(e[t]);
  Js();
}
function Ii(e, t, r = zt + 1) {
  for (; r < dt.length; r++) {
    const n = dt[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      dt.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function Zs(e) {
  if (Yr.length) {
    const t = [...new Set(Yr)].sort(
      (r, n) => vn(r) - vn(n)
    );
    if (Yr.length = 0, vr) {
      for (let r = 0; r < t.length; r++)
        vr.push(t[r]);
      return;
    }
    for (vr = t, Wr = 0; Wr < vr.length; Wr++) {
      const r = vr[Wr];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    vr = null, Wr = 0;
  }
}
const vn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qs(e) {
  try {
    for (zt = 0; zt < dt.length; zt++) {
      const t = dt[zt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Tn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; zt < dt.length; zt++) {
      const t = dt[zt];
      t && (t.flags &= -2);
    }
    zt = -1, dt.length = 0, Zs(), Gn = null, (dt.length || Yr.length) && Qs();
  }
}
let Rt = null, el = null;
function Yn(e) {
  const t = Rt;
  return Rt = e, el = e && e.type.__scopeId || null, t;
}
function No(e, t = Rt, r) {
  if (!t || e._n)
    return e;
  const n = (...a) => {
    n._d && Bi(-1);
    const i = Yn(t), c = Ur.length;
    let d;
    try {
      d = e(...a);
    } finally {
      for (let h = Ur.length; h > c; h--) xl();
      Yn(i), n._d && Bi(1);
    }
    return d;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Ge(e, t) {
  if (Rt === null)
    return e;
  const r = pa(Rt), n = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, c, d, h = ke] = t[a];
    i && (ue(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && lr(c), n.push({
      dir: i,
      instance: r,
      value: c,
      oldValue: void 0,
      arg: d,
      modifiers: h
    }));
  }
  return e;
}
function Tr(e, t, r, n) {
  const a = e.dirs, i = t && t.dirs;
  for (let c = 0; c < a.length; c++) {
    const d = a[c];
    i && (d.oldValue = i[c].value);
    let h = d.dir[n];
    h && (cr(), Ht(h, r, 8, [
      e.el,
      d,
      e,
      t
    ]), ur());
  }
}
function Po(e, t) {
  if (ft) {
    let r = ft.provides;
    const n = ft.parent && ft.parent.provides;
    n === r && (r = ft.provides = Object.create(n)), r[e] = t;
  }
}
function Bn(e, t, r = !1) {
  const n = kc();
  if (n || Xr) {
    let a = Xr ? Xr._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return r && ue(t) ? t.call(n && n.proxy) : t;
  }
}
const Io = /* @__PURE__ */ Symbol.for("v-scx"), Uo = () => Bn(Io);
function Oa(e, t, r) {
  return tl(e, t, r);
}
function tl(e, t, r = ke) {
  const { immediate: n, deep: a, flush: i, once: c } = r, d = rt({}, r), h = t && n || !t && i !== "post";
  let v;
  if (Cn) {
    if (i === "sync") {
      const j = Uo();
      v = j.__watcherHandles || (j.__watcherHandles = []);
    } else if (!h) {
      const j = () => {
      };
      return j.stop = Yt, j.resume = Yt, j.pause = Yt, j;
    }
  }
  const y = ft;
  d.call = (j, ie, W) => Ht(j, y, ie, W);
  let T = !1;
  i === "post" ? d.scheduler = (j) => {
    vt(j, y && y.suspense);
  } : i !== "sync" && (T = !0, d.scheduler = (j, ie) => {
    ie ? j() : yi(j);
  }), d.augmentJob = (j) => {
    t && (j.flags |= 4), T && (j.flags |= 2, y && (j.id = y.uid, j.i = y));
  };
  const I = Ao(e, t, d);
  return Cn && (v ? v.push(I) : h && I()), I;
}
function Mo(e, t, r) {
  const n = this.proxy, a = He(e) ? e.includes(".") ? rl(n, e) : () => n[e] : e.bind(n, n);
  let i;
  ue(t) ? i = t : (i = t.handler, r = t);
  const c = xn(this), d = tl(a, i.bind(n), r);
  return c(), d;
}
function rl(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let a = 0; a < r.length && n; a++)
      n = n[r[a]];
    return n;
  };
}
const Lo = /* @__PURE__ */ Symbol("_vte"), ca = (e) => e.__isTeleport, Na = /* @__PURE__ */ Symbol("_leaveCb");
function Do(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const r of e)
      if (r.type !== fr) {
        t = r;
        break;
      }
  }
  return t;
}
function nl(e) {
  if (!_i(e))
    return ca(e.type) && e.children ? Do(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: r } = e;
  if (r) {
    if (t & 16)
      return r[0];
    if (t & 32 && ue(r.default))
      return r.default();
  }
}
function gi(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const r = e.component.subTree;
    gi(
      ca(r.type) && nl(r) || r,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function al(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ui(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Xn = /* @__PURE__ */ new WeakMap();
function mn(e, t, r, n, a = !1) {
  if (ne(e)) {
    e.forEach(
      (W, ce) => mn(
        W,
        t && (ne(t) ? t[ce] : t),
        r,
        n,
        a
      )
    );
    return;
  }
  if (bn(n) && !a) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && mn(e, t, r, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? pa(n.component) : n.el, c = a ? null : i, { i: d, r: h } = e, v = t && t.r, y = d.refs === ke ? d.refs = {} : d.refs, T = d.setupState, I = /* @__PURE__ */ Se(T), j = T === ke ? Ts : (W) => Ui(y, W) ? !1 : Ce(I, W), ie = (W, ce) => !(ce && Ui(y, ce));
  if (v != null && v !== h) {
    if (Mi(t), He(v))
      y[v] = null, j(v) && (T[v] = null);
    else if (/* @__PURE__ */ tt(v)) {
      const W = t;
      ie(v, W.k) && (v.value = null), W.k && (y[W.k] = null);
    }
  }
  if (ue(h))
    Tn(h, d, 12, [c, y]);
  else {
    const W = He(h), ce = /* @__PURE__ */ tt(h);
    if (W || ce) {
      const se = () => {
        if (e.f) {
          const z = W ? j(h) ? T[h] : y[h] : ie() || !e.k ? h.value : y[e.k];
          if (a)
            ne(z) && li(z, i);
          else if (ne(z))
            z.includes(i) || z.push(i);
          else if (W)
            y[h] = [i], j(h) && (T[h] = y[h]);
          else {
            const U = [i];
            ie(h, e.k) && (h.value = U), e.k && (y[e.k] = U);
          }
        } else W ? (y[h] = c, j(h) && (T[h] = c)) : ce && (ie(h, e.k) && (h.value = c), e.k && (y[e.k] = c));
      };
      if (c) {
        const z = () => {
          se(), Xn.delete(e);
        };
        z.id = -1, Xn.set(e, z), vt(z, r);
      } else
        Mi(e), se();
    }
  }
}
function Mi(e) {
  const t = Xn.get(e);
  t && (t.flags |= 8, Xn.delete(e));
}
sa().requestIdleCallback;
sa().cancelIdleCallback;
const bn = (e) => !!e.type.__asyncLoader, _i = (e) => e.type.__isKeepAlive;
function Fo(e, t) {
  il(e, "a", t);
}
function $o(e, t) {
  il(e, "da", t);
}
function il(e, t, r = ft) {
  const n = e.__wdc || (e.__wdc = () => {
    let a = r;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ua(t, n, r), r) {
    let a = r.parent;
    for (; a && a.parent; )
      _i(a.parent.vnode) && Ho(n, t, r, a), a = a.parent;
  }
}
function Ho(e, t, r, n) {
  const a = ua(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  ol(() => {
    li(n[t], a);
  }, r);
}
function ua(e, t, r = ft, n = !1) {
  if (r) {
    const a = r[e] || (r[e] = []), i = t.__weh || (t.__weh = (...c) => {
      cr();
      const d = xn(r), h = Ht(t, r, e, c);
      return d(), ur(), h;
    });
    return n ? a.unshift(i) : a.push(i), i;
  }
}
const pr = (e) => (t, r = ft) => {
  (!Cn || e === "sp") && ua(e, (...n) => t(...n), r);
}, jo = pr("bm"), sl = pr("m"), Vo = pr(
  "bu"
), qo = pr("u"), ll = pr(
  "bum"
), ol = pr("um"), Bo = pr(
  "sp"
), zo = pr("rtg"), Wo = pr("rtc");
function Ko(e, t = ft) {
  ua("ec", e, t);
}
const Go = /* @__PURE__ */ Symbol.for("v-ndc");
function me(e, t, r, n) {
  let a;
  const i = r, c = ne(e);
  if (c || He(e)) {
    const d = c && /* @__PURE__ */ Ir(e);
    let h = !1, v = !1;
    d && (h = !/* @__PURE__ */ Ot(e), v = /* @__PURE__ */ dr(e), e = la(e)), a = new Array(e.length);
    for (let y = 0, T = e.length; y < T; y++)
      a[y] = t(
        h ? v ? Zr($t(e[y])) : $t(e[y]) : e[y],
        y,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, i);
  } else if (xe(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, h) => t(d, h, void 0, i)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let h = 0, v = d.length; h < v; h++) {
        const y = d[h];
        a[h] = t(e[y], y, h, i);
      }
    }
  else
    a = [];
  return a;
}
const Qa = (e) => e ? Ol(e) ? pa(e) : Qa(e.parent) : null, yn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ rt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Qa(e.parent),
    $root: (e) => Qa(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ul(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      yi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xs.bind(e.proxy)),
    $watch: (e) => Mo.bind(e)
  })
), Pa = (e, t) => e !== ke && !e.__isScriptSetup && Ce(e, t), Yo = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: a, props: i, accessCache: c, type: d, appContext: h } = e;
    if (t[0] !== "$") {
      const I = c[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return n[t];
          case 2:
            return a[t];
          case 4:
            return r[t];
          case 3:
            return i[t];
        }
      else {
        if (Pa(n, t))
          return c[t] = 1, n[t];
        if (a !== ke && Ce(a, t))
          return c[t] = 2, a[t];
        if (Ce(i, t))
          return c[t] = 3, i[t];
        if (r !== ke && Ce(r, t))
          return c[t] = 4, r[t];
        ei && (c[t] = 0);
      }
    }
    const v = yn[t];
    let y, T;
    if (v)
      return t === "$attrs" && et(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = d.__cssModules) && (y = y[t])
    )
      return y;
    if (r !== ke && Ce(r, t))
      return c[t] = 4, r[t];
    if (
      // global properties
      T = h.config.globalProperties, Ce(T, t)
    )
      return T[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: a, ctx: i } = e;
    return Pa(a, t) ? (a[t] = r, !0) : n !== ke && Ce(n, t) ? (n[t] = r, !0) : Ce(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: a, props: i, type: c }
  }, d) {
    let h;
    return !!(r[d] || e !== ke && d[0] !== "$" && Ce(e, d) || Pa(t, d) || Ce(i, d) || Ce(n, d) || Ce(yn, d) || Ce(a.config.globalProperties, d) || (h = c.__cssModules) && h[d]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Ce(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Li(e) {
  return ne(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let ei = !0;
function Xo(e) {
  const t = ul(e), r = e.proxy, n = e.ctx;
  ei = !1, t.beforeCreate && Di(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: i,
    methods: c,
    watch: d,
    provide: h,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: T,
    mounted: I,
    beforeUpdate: j,
    updated: ie,
    activated: W,
    deactivated: ce,
    beforeDestroy: se,
    beforeUnmount: z,
    destroyed: U,
    unmounted: V,
    render: oe,
    renderTracked: Me,
    renderTriggered: Pe,
    errorCaptured: Be,
    serverPrefetch: Ee,
    // public API
    expose: Le,
    inheritAttrs: nt,
    // assets
    components: pt,
    directives: Xe,
    filters: xt
  } = t;
  if (v && Jo(v, n, null), c)
    for (const _e in c) {
      const de = c[_e];
      ue(de) && (n[_e] = de.bind(r));
    }
  if (a) {
    const _e = a.call(r, r);
    xe(_e) && (e.data = /* @__PURE__ */ ar(_e));
  }
  if (ei = !0, i)
    for (const _e in i) {
      const de = i[_e], ze = ue(de) ? de.bind(r, r) : ue(de.get) ? de.get.bind(r, r) : Yt, ve = !ue(de) && ue(de.set) ? de.set.bind(r) : Yt, Ae = q({
        get: ze,
        set: ve
      });
      Object.defineProperty(n, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (We) => Ae.value = We
      });
    }
  if (d)
    for (const _e in d)
      cl(d[_e], n, r, _e);
  if (h) {
    const _e = ue(h) ? h.call(r) : h;
    Reflect.ownKeys(_e).forEach((de) => {
      Po(de, _e[de]);
    });
  }
  y && Di(y, e, "c");
  function Fe(_e, de) {
    ne(de) ? de.forEach((ze) => _e(ze.bind(r))) : de && _e(de.bind(r));
  }
  if (Fe(jo, T), Fe(sl, I), Fe(Vo, j), Fe(qo, ie), Fe(Fo, W), Fe($o, ce), Fe(Ko, Be), Fe(Wo, Me), Fe(zo, Pe), Fe(ll, z), Fe(ol, V), Fe(Bo, Ee), ne(Le))
    if (Le.length) {
      const _e = e.exposed || (e.exposed = {});
      Le.forEach((de) => {
        Object.defineProperty(_e, de, {
          get: () => r[de],
          set: (ze) => r[de] = ze,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  oe && e.render === Yt && (e.render = oe), nt != null && (e.inheritAttrs = nt), pt && (e.components = pt), Xe && (e.directives = Xe), Ee && al(e);
}
function Jo(e, t, r = Yt) {
  ne(e) && (e = ti(e));
  for (const n in e) {
    const a = e[n];
    let i;
    xe(a) ? "default" in a ? i = Bn(
      a.from || n,
      a.default,
      !0
    ) : i = Bn(a.from || n) : i = Bn(a), /* @__PURE__ */ tt(i) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : t[n] = i;
  }
}
function Di(e, t, r) {
  Ht(
    ne(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function cl(e, t, r, n) {
  let a = n.includes(".") ? rl(r, n) : () => r[n];
  if (He(e)) {
    const i = t[e];
    ue(i) && Oa(a, i);
  } else if (ue(e))
    Oa(a, e.bind(r));
  else if (xe(e))
    if (ne(e))
      e.forEach((i) => cl(i, t, r, n));
    else {
      const i = ue(e.handler) ? e.handler.bind(r) : t[e.handler];
      ue(i) && Oa(a, i, e);
    }
}
function ul(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: a,
    optionsCache: i,
    config: { optionMergeStrategies: c }
  } = e.appContext, d = i.get(t);
  let h;
  return d ? h = d : !a.length && !r && !n ? h = t : (h = {}, a.length && a.forEach(
    (v) => Jn(h, v, c, !0)
  ), Jn(h, t, c)), xe(t) && i.set(t, h), h;
}
function Jn(e, t, r, n = !1) {
  const { mixins: a, extends: i } = t;
  i && Jn(e, i, r, !0), a && a.forEach(
    (c) => Jn(e, c, r, !0)
  );
  for (const c in t)
    if (!(n && c === "expose")) {
      const d = Zo[c] || r && r[c];
      e[c] = d ? d(e[c], t[c]) : t[c];
    }
  return e;
}
const Zo = {
  data: Fi,
  props: $i,
  emits: $i,
  // objects
  methods: cn,
  computed: cn,
  // lifecycle
  beforeCreate: ut,
  created: ut,
  beforeMount: ut,
  mounted: ut,
  beforeUpdate: ut,
  updated: ut,
  beforeDestroy: ut,
  beforeUnmount: ut,
  destroyed: ut,
  unmounted: ut,
  activated: ut,
  deactivated: ut,
  errorCaptured: ut,
  serverPrefetch: ut,
  // assets
  components: cn,
  directives: cn,
  // watch
  watch: ec,
  // provide / inject
  provide: Fi,
  inject: Qo
};
function Fi(e, t) {
  return t ? e ? function() {
    return rt(
      ue(e) ? e.call(this, this) : e,
      ue(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Qo(e, t) {
  return cn(ti(e), ti(t));
}
function ti(e) {
  if (ne(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function ut(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function cn(e, t) {
  return e ? rt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $i(e, t) {
  return e ? ne(e) && ne(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : rt(
    /* @__PURE__ */ Object.create(null),
    Li(e),
    Li(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = rt(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = ut(e[n], t[n]);
  return r;
}
function dl() {
  return {
    app: null,
    config: {
      isNativeTag: Ts,
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
  return function(n, a = null) {
    ue(n) || (n = rt({}, n)), a != null && !xe(a) && (a = null);
    const i = dl(), c = /* @__PURE__ */ new WeakSet(), d = [];
    let h = !1;
    const v = i.app = {
      _uid: tc++,
      _component: n,
      _props: a,
      _container: null,
      _context: i,
      _instance: null,
      version: Uc,
      get config() {
        return i.config;
      },
      set config(y) {
      },
      use(y, ...T) {
        return c.has(y) || (y && ue(y.install) ? (c.add(y), y.install(v, ...T)) : ue(y) && (c.add(y), y(v, ...T))), v;
      },
      mixin(y) {
        return i.mixins.includes(y) || i.mixins.push(y), v;
      },
      component(y, T) {
        return T ? (i.components[y] = T, v) : i.components[y];
      },
      directive(y, T) {
        return T ? (i.directives[y] = T, v) : i.directives[y];
      },
      mount(y, T, I) {
        if (!h) {
          const j = v._ceVNode || or(n, a);
          return j.appContext = i, I === !0 ? I = "svg" : I === !1 && (I = void 0), e(j, y, I), h = !0, v._container = y, y.__vue_app__ = v, pa(j.component);
        }
      },
      onUnmount(y) {
        d.push(y);
      },
      unmount() {
        h && (Ht(
          d,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, T) {
        return i.provides[y] = T, v;
      },
      runWithContext(y) {
        const T = Xr;
        Xr = v;
        try {
          return y();
        } finally {
          Xr = T;
        }
      }
    };
    return v;
  };
}
let Xr = null;
const nc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Dt(t)}Modifiers`] || e[`${Lr(t)}Modifiers`];
function ac(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ke;
  let a = r;
  const i = t.startsWith("update:"), c = i && nc(n, t.slice(7));
  c && (c.trim && (a = r.map((y) => He(y) ? y.trim() : y)), c.number && (a = a.map(ia)));
  let d, h = n[d = Ta(t)] || // also try camelCase event handler (#2249)
  n[d = Ta(Dt(t))];
  !h && i && (h = n[d = Ta(Lr(t))]), h && Ht(
    h,
    e,
    6,
    a
  );
  const v = n[d + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, Ht(
      v,
      e,
      6,
      a
    );
  }
}
const ic = /* @__PURE__ */ new WeakMap();
function fl(e, t, r = !1) {
  const n = r ? ic : t.emitsCache, a = n.get(e);
  if (a !== void 0)
    return a;
  const i = e.emits;
  let c = {}, d = !1;
  if (!ue(e)) {
    const h = (v) => {
      const y = fl(v, t, !0);
      y && (d = !0, rt(c, y));
    };
    !r && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  return !i && !d ? (xe(e) && n.set(e, null), null) : (ne(i) ? i.forEach((h) => c[h] = null) : rt(c, i), xe(e) && n.set(e, c), c);
}
function da(e, t) {
  return !e || !ra(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ce(e, t[0].toLowerCase() + t.slice(1)) || Ce(e, Lr(t)) || Ce(e, t));
}
function Hi(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: a,
    propsOptions: [i],
    slots: c,
    attrs: d,
    emit: h,
    render: v,
    renderCache: y,
    props: T,
    data: I,
    setupState: j,
    ctx: ie,
    inheritAttrs: W
  } = e, ce = Yn(e);
  let se, z;
  try {
    if (r.shapeFlag & 4) {
      const V = a || n, oe = V;
      se = Kt(
        v.call(
          oe,
          V,
          y,
          T,
          j,
          I,
          ie
        )
      ), z = d;
    } else {
      const V = t;
      se = Kt(
        V.length > 1 ? V(
          T,
          { attrs: d, slots: c, emit: h }
        ) : V(
          T,
          null
        )
      ), z = t.props ? d : sc(d);
    }
  } catch (V) {
    Ur.length = 0, oa(V, e, 1), se = or(fr);
  }
  let U = se;
  if (z && W !== !1) {
    const V = Object.keys(z), { shapeFlag: oe } = U;
    V.length && oe & 7 && (i && V.some(na) && (z = lc(
      z,
      i
    )), U = Qr(U, z, !1, !0));
  }
  if (r.dirs && (U = Qr(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(r.dirs) : r.dirs), r.transition) {
    const V = ca(U.type) && nl(U) || U;
    gi(V, r.transition);
  }
  return se = U, Yn(ce), se;
}
const sc = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || ra(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, lc = (e, t) => {
  const r = {};
  for (const n in e)
    (!na(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function oc(e, t, r) {
  const { props: n, children: a, component: i } = e, { props: c, children: d, patchFlag: h } = t, v = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return n ? ji(n, c, v) : !!c;
    if (h & 8) {
      const y = t.dynamicProps;
      for (let T = 0; T < y.length; T++) {
        const I = y[T];
        if (pl(c, n, I) && !da(v, I))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : n === c ? !1 : n ? c ? ji(n, c, v) : !0 : !!c;
  return !1;
}
function ji(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < n.length; a++) {
    const i = n[a];
    if (pl(t, e, i) && !da(r, i))
      return !0;
  }
  return !1;
}
function pl(e, t, r) {
  const n = e[r], a = t[r];
  return r === "style" && xe(n) && xe(a) ? !Sr(n, a) : n !== a;
}
function cc({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = n, e = a), a === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const hl = {}, ml = () => Object.create(hl), bl = (e) => Object.getPrototypeOf(e) === hl;
function uc(e, t, r, n = !1) {
  const a = {}, i = ml();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), yl(e, t, a, i);
  for (const c in e.propsOptions[0])
    c in a || (a[c] = void 0);
  r ? e.props = n ? a : /* @__PURE__ */ _o(a) : e.type.props ? e.props = a : e.props = i, e.attrs = i;
}
function dc(e, t, r, n) {
  const {
    props: a,
    attrs: i,
    vnode: { patchFlag: c }
  } = e, d = /* @__PURE__ */ Se(a), [h] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const y = e.vnode.dynamicProps;
      for (let T = 0; T < y.length; T++) {
        let I = y[T];
        if (da(e.emitsOptions, I))
          continue;
        const j = t[I];
        if (h)
          if (Ce(i, I))
            j !== i[I] && (i[I] = j, v = !0);
          else {
            const ie = Dt(I);
            a[ie] = ri(
              h,
              d,
              ie,
              j,
              e,
              !1
            );
          }
        else
          j !== i[I] && (i[I] = j, v = !0);
      }
    }
  } else {
    yl(e, t, a, i) && (v = !0);
    let y;
    for (const T in d)
      (!t || // for camelCase
      !Ce(t, T) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Lr(T)) === T || !Ce(t, y))) && (h ? r && // for camelCase
      (r[T] !== void 0 || // for kebab-case
      r[y] !== void 0) && (a[T] = ri(
        h,
        d,
        T,
        void 0,
        e,
        !0
      )) : delete a[T]);
    if (i !== d)
      for (const T in i)
        (!t || !Ce(t, T)) && (delete i[T], v = !0);
  }
  v && sr(e.attrs, "set", "");
}
function yl(e, t, r, n) {
  const [a, i] = e.propsOptions;
  let c = !1, d;
  if (t)
    for (let h in t) {
      if (fn(h))
        continue;
      const v = t[h];
      let y;
      a && Ce(a, y = Dt(h)) ? !i || !i.includes(y) ? r[y] = v : (d || (d = {}))[y] = v : da(e.emitsOptions, h) || (!(h in n) || v !== n[h]) && (n[h] = v, c = !0);
    }
  if (i) {
    const h = /* @__PURE__ */ Se(r), v = d || ke;
    for (let y = 0; y < i.length; y++) {
      const T = i[y];
      r[T] = ri(
        a,
        h,
        T,
        v[T],
        e,
        !Ce(v, T)
      );
    }
  }
  return c;
}
function ri(e, t, r, n, a, i) {
  const c = e[r];
  if (c != null) {
    const d = Ce(c, "default");
    if (d && n === void 0) {
      const h = c.default;
      if (c.type !== Function && !c.skipFactory && ue(h)) {
        const { propsDefaults: v } = a;
        if (r in v)
          n = v[r];
        else {
          const y = xn(a);
          n = v[r] = h.call(
            null,
            t
          ), y();
        }
      } else
        n = h;
      a.ce && a.ce._setProp(r, n);
    }
    c[
      0
      /* shouldCast */
    ] && (i && !d ? n = !1 : c[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Lr(r)) && (n = !0));
  }
  return n;
}
const fc = /* @__PURE__ */ new WeakMap();
function gl(e, t, r = !1) {
  const n = r ? fc : t.propsCache, a = n.get(e);
  if (a)
    return a;
  const i = e.props, c = {}, d = [];
  let h = !1;
  if (!ue(e)) {
    const y = (T) => {
      h = !0;
      const [I, j] = gl(T, t, !0);
      rt(c, I), j && d.push(...j);
    };
    !r && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!i && !h)
    return xe(e) && n.set(e, Gr), Gr;
  if (ne(i))
    for (let y = 0; y < i.length; y++) {
      const T = Dt(i[y]);
      Vi(T) && (c[T] = ke);
    }
  else if (i)
    for (const y in i) {
      const T = Dt(y);
      if (Vi(T)) {
        const I = i[y], j = c[T] = ne(I) || ue(I) ? { type: I } : rt({}, I), ie = j.type;
        let W = !1, ce = !0;
        if (ne(ie))
          for (let se = 0; se < ie.length; ++se) {
            const z = ie[se], U = ue(z) && z.name;
            if (U === "Boolean") {
              W = !0;
              break;
            } else U === "String" && (ce = !1);
          }
        else
          W = ue(ie) && ie.name === "Boolean";
        j[
          0
          /* shouldCast */
        ] = W, j[
          1
          /* shouldCastTrue */
        ] = ce, (W || Ce(j, "default")) && d.push(T);
      }
    }
  const v = [c, d];
  return xe(e) && n.set(e, v), v;
}
function Vi(e) {
  return e[0] !== "$" && !fn(e);
}
const vi = (e) => e === "_" || e === "_ctx" || e === "$stable", wi = (e) => ne(e) ? e.map(Kt) : [Kt(e)], pc = (e, t, r) => {
  if (t._n)
    return t;
  const n = No((...a) => wi(t(...a)), r);
  return n._c = !1, n;
}, _l = (e, t, r) => {
  const n = e._ctx;
  for (const a in e) {
    if (vi(a)) continue;
    const i = e[a];
    if (ue(i))
      t[a] = pc(a, i, n);
    else if (i != null) {
      const c = wi(i);
      t[a] = () => c;
    }
  }
}, vl = (e, t) => {
  const r = wi(t);
  e.slots.default = () => r;
}, wl = (e, t, r) => {
  for (const n in t)
    (r || !vi(n)) && (e[n] = t[n]);
}, hc = (e, t, r) => {
  const n = e.slots = ml();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (wl(n, t, r), r && Os(n, "_", a, !0)) : _l(t, n);
  } else t && vl(e, t);
}, mc = (e, t, r) => {
  const { vnode: n, slots: a } = e;
  let i = !0, c = ke;
  if (n.shapeFlag & 32) {
    const d = t._;
    d ? r && d === 1 ? i = !1 : wl(a, t, r) : (i = !t.$stable, _l(t, a)), c = t;
  } else t && (vl(e, t), c = { default: 1 });
  if (i)
    for (const d in a)
      !vi(d) && c[d] == null && delete a[d];
}, vt = vc;
function bc(e) {
  return yc(e);
}
function yc(e, t) {
  const r = sa();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: a,
    patchProp: i,
    createElement: c,
    createText: d,
    createComment: h,
    setText: v,
    setElementText: y,
    parentNode: T,
    nextSibling: I,
    setScopeId: j = Yt,
    insertStaticContent: ie
  } = e, W = (m, b, _, O = null, x = null, k = null, M = void 0, D = null, L = !!b.dynamicChildren) => {
    if (m === b)
      return;
    m && !nn(m, b) && (O = ht(m), We(m, x, k, !0), m = null), b.patchFlag === -2 && (L = !1, b.dynamicChildren = null);
    const { type: A, ref: G, shapeFlag: $ } = b;
    switch (A) {
      case fa:
        ce(m, b, _, O);
        break;
      case fr:
        se(m, b, _, O);
        break;
      case Ua:
        m == null && z(b, _, O, M);
        break;
      case te:
        pt(
          m,
          b,
          _,
          O,
          x,
          k,
          M,
          D,
          L
        );
        break;
      default:
        $ & 1 ? oe(
          m,
          b,
          _,
          O,
          x,
          k,
          M,
          D,
          L
        ) : $ & 6 ? Xe(
          m,
          b,
          _,
          O,
          x,
          k,
          M,
          D,
          L
        ) : ($ & 64 || $ & 128) && A.process(
          m,
          b,
          _,
          O,
          x,
          k,
          M,
          D,
          L,
          at
        );
    }
    G != null && x ? mn(G, m && m.ref, k, b || m, !b) : G == null && m && m.ref != null && mn(m.ref, null, k, m, !0);
  }, ce = (m, b, _, O) => {
    if (m == null)
      n(
        b.el = d(b.children),
        _,
        O
      );
    else {
      const x = b.el = m.el;
      b.children !== m.children && v(x, b.children);
    }
  }, se = (m, b, _, O) => {
    m == null ? n(
      b.el = h(b.children || ""),
      _,
      O
    ) : b.el = m.el;
  }, z = (m, b, _, O) => {
    [m.el, m.anchor] = ie(
      m.children,
      b,
      _,
      O,
      m.el,
      m.anchor
    );
  }, U = ({ el: m, anchor: b }, _, O) => {
    let x;
    for (; m && m !== b; )
      x = I(m), n(m, _, O), m = x;
    n(b, _, O);
  }, V = ({ el: m, anchor: b }) => {
    let _;
    for (; m && m !== b; )
      _ = I(m), a(m), m = _;
    a(b);
  }, oe = (m, b, _, O, x, k, M, D, L) => {
    if (b.type === "svg" ? M = "svg" : b.type === "math" && (M = "mathml"), m == null)
      Me(
        b,
        _,
        O,
        x,
        k,
        M,
        D,
        L
      );
    else {
      const A = m.el && m.el._isVueCE ? m.el : null;
      try {
        A && A._beginPatch(), Ee(
          m,
          b,
          x,
          k,
          M,
          D,
          L
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, Me = (m, b, _, O, x, k, M, D) => {
    let L, A;
    const { props: G, shapeFlag: $, transition: K, dirs: Q } = m;
    if (L = m.el = c(
      m.type,
      k,
      G && G.is,
      G
    ), $ & 8 ? y(L, m.children) : $ & 16 && Be(
      m.children,
      L,
      null,
      O,
      x,
      Ia(m, k),
      M,
      D
    ), Q && Tr(m, null, O, "created"), Pe(L, m, m.scopeId, M, O), G) {
      for (const P in G)
        P !== "value" && !fn(P) && i(L, P, null, G[P], k, O);
      "value" in G && i(L, "value", null, G.value, k), (A = G.onVnodeBeforeMount) && Bt(A, O, m);
    }
    Q && Tr(m, null, O, "beforeMount");
    const ee = gc(x, K);
    ee && K.beforeEnter(L), n(L, b, _), ((A = G && G.onVnodeMounted) || ee || Q) && vt(() => {
      A && Bt(A, O, m), ee && K.enter(L), Q && Tr(m, null, O, "mounted");
    }, x);
  }, Pe = (m, b, _, O, x) => {
    if (_ && j(m, _), O)
      for (let k = 0; k < O.length; k++)
        j(m, O[k]);
    if (x) {
      let k = x.subTree;
      if (b === k || Tl(k.type) && (k.ssContent === b || k.ssFallback === b)) {
        const M = x.vnode;
        Pe(
          m,
          M,
          M.scopeId,
          M.slotScopeIds,
          x.parent
        );
      }
    }
  }, Be = (m, b, _, O, x, k, M, D, L = 0) => {
    for (let A = L; A < m.length; A++) {
      const G = m[A] = D ? ir(m[A]) : Kt(m[A]);
      W(
        null,
        G,
        b,
        _,
        O,
        x,
        k,
        M,
        D
      );
    }
  }, Ee = (m, b, _, O, x, k, M) => {
    const D = b.el = m.el;
    let { patchFlag: L, dynamicChildren: A, dirs: G } = b;
    L |= m.patchFlag & 16;
    const $ = m.props || ke, K = b.props || ke;
    let Q;
    if (_ && xr(_, !1), (Q = K.onVnodeBeforeUpdate) && Bt(Q, _, b, m), G && Tr(b, m, _, "beforeUpdate"), _ && xr(_, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    A && (!m.dynamicChildren || m.dynamicChildren.length !== A.length) && (L = 0, M = !1, A = null), ($.innerHTML && K.innerHTML == null || $.textContent && K.textContent == null) && y(D, ""), A ? Le(
      m.dynamicChildren,
      A,
      D,
      _,
      O,
      Ia(b, x),
      k
    ) : M || de(
      m,
      b,
      D,
      null,
      _,
      O,
      Ia(b, x),
      k,
      !1
    ), L > 0) {
      if (L & 16)
        nt(D, $, K, _, x);
      else if (L & 2 && $.class !== K.class && i(D, "class", null, K.class, x), L & 4 && i(D, "style", $.style, K.style, x), L & 8) {
        const ee = b.dynamicProps;
        for (let P = 0; P < ee.length; P++) {
          const N = ee[P], H = $[N], re = K[N];
          (re !== H || N === "value") && i(D, N, H, re, x, _);
        }
      }
      L & 1 && m.children !== b.children && y(D, b.children);
    } else !M && A == null && nt(D, $, K, _, x);
    ((Q = K.onVnodeUpdated) || G) && vt(() => {
      Q && Bt(Q, _, b, m), G && Tr(b, m, _, "updated");
    }, O);
  }, Le = (m, b, _, O, x, k, M) => {
    for (let D = 0; D < b.length; D++) {
      const L = m[D], A = b[D], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !nn(L, A) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? T(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      W(
        L,
        A,
        G,
        null,
        O,
        x,
        k,
        M,
        !0
      );
    }
  }, nt = (m, b, _, O, x) => {
    if (b !== _) {
      if (b !== ke)
        for (const k in b)
          !fn(k) && !(k in _) && i(
            m,
            k,
            b[k],
            null,
            x,
            O
          );
      for (const k in _) {
        if (fn(k)) continue;
        const M = _[k], D = b[k];
        M !== D && k !== "value" && i(m, k, D, M, x, O);
      }
      "value" in _ && i(m, "value", b.value, _.value, x);
    }
  }, pt = (m, b, _, O, x, k, M, D, L) => {
    const A = b.el = m ? m.el : d(""), G = b.anchor = m ? m.anchor : d("");
    let { patchFlag: $, dynamicChildren: K, slotScopeIds: Q } = b;
    Q && (D = D ? D.concat(Q) : Q), m == null ? (n(A, _, O), n(G, _, O), Be(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      _,
      G,
      x,
      k,
      M,
      D,
      L
    )) : $ > 0 && $ & 64 && K && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === K.length ? (Le(
      m.dynamicChildren,
      K,
      _,
      x,
      k,
      M,
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || x && b === x.subTree) && Sl(
      m,
      b,
      !0
      /* shallow */
    )) : de(
      m,
      b,
      _,
      G,
      x,
      k,
      M,
      D,
      L
    );
  }, Xe = (m, b, _, O, x, k, M, D, L) => {
    b.slotScopeIds = D, m == null ? b.shapeFlag & 512 ? x.ctx.activate(
      b,
      _,
      O,
      M,
      L
    ) : xt(
      b,
      _,
      O,
      x,
      k,
      M,
      L
    ) : De(m, b, L);
  }, xt = (m, b, _, O, x, k, M) => {
    const D = m.component = Ac(
      m,
      O,
      x
    );
    if (_i(m) && (D.ctx.renderer = at), Rc(D, !1, M), D.asyncDep) {
      if (x && x.registerDep(D, Fe, M), !m.el) {
        const L = D.subTree = or(fr);
        se(null, L, b, _), m.placeholder = L.el;
      }
    } else
      Fe(
        D,
        m,
        b,
        _,
        x,
        k,
        M
      );
  }, De = (m, b, _) => {
    const O = b.component = m.component;
    if (oc(m, b, _))
      if (O.asyncDep && !O.asyncResolved) {
        _e(O, b, _);
        return;
      } else
        O.next = b, O.update();
    else
      b.el = m.el, O.vnode = b;
  }, Fe = (m, b, _, O, x, k, M) => {
    const D = () => {
      if (m.isMounted) {
        let { next: $, bu: K, u: Q, parent: ee, vnode: P } = m;
        {
          const ye = Cl(m);
          if (ye) {
            $ && ($.el = P.el, _e(m, $, M)), ye.asyncDep.then(() => {
              vt(() => {
                m.isUnmounted || A();
              }, x);
            });
            return;
          }
        }
        let N = $, H;
        xr(m, !1), $ ? ($.el = P.el, _e(m, $, M)) : $ = P, K && qn(K), (H = $.props && $.props.onVnodeBeforeUpdate) && Bt(H, ee, $, P), xr(m, !0);
        const re = Hi(m), le = m.subTree;
        m.subTree = re, W(
          le,
          re,
          // parent may have changed if it's in a teleport
          T(le.el),
          // anchor may have changed if it's in a fragment
          ht(le),
          m,
          x,
          k
        ), $.el = re.el, N === null && cc(m, re.el), Q && vt(Q, x), (H = $.props && $.props.onVnodeUpdated) && vt(
          () => Bt(H, ee, $, P),
          x
        );
      } else {
        let $;
        const { el: K, props: Q } = b, { bm: ee, m: P, parent: N, root: H, type: re } = m, le = bn(b);
        xr(m, !1), ee && qn(ee), !le && ($ = Q && Q.onVnodeBeforeMount) && Bt($, N, b), xr(m, !0);
        {
          H.ce && H.ce._hasShadowRoot() && H.ce._injectChildStyle(
            re,
            m.parent ? m.parent.type : void 0
          );
          const ye = m.subTree = Hi(m);
          W(
            null,
            ye,
            _,
            O,
            m,
            x,
            k
          ), b.el = ye.el;
        }
        if (P && vt(P, x), !le && ($ = Q && Q.onVnodeMounted)) {
          const ye = b;
          vt(
            () => Bt($, N, ye),
            x
          );
        }
        (b.shapeFlag & 256 || N && bn(N.vnode) && N.vnode.shapeFlag & 256) && m.a && vt(m.a, x), m.isMounted = !0, b = _ = O = null;
      }
    };
    m.scope.on();
    const L = m.effect = new Us(D);
    m.scope.off();
    const A = m.update = L.run.bind(L), G = m.job = L.runIfDirty.bind(L);
    G.i = m, G.id = m.uid, L.scheduler = () => yi(G), xr(m, !0), A();
  }, _e = (m, b, _) => {
    b.component = m;
    const O = m.vnode.props;
    m.vnode = b, m.next = null, dc(m, b.props, O, _), mc(m, b.children, _), cr(), Ii(m), ur();
  }, de = (m, b, _, O, x, k, M, D, L = !1) => {
    const A = m && m.children, G = m ? m.shapeFlag : 0, $ = b.children, { patchFlag: K, shapeFlag: Q } = b;
    if (K > 0) {
      if (K & 128) {
        ve(
          A,
          $,
          _,
          O,
          x,
          k,
          M,
          D,
          L
        );
        return;
      } else if (K & 256) {
        ze(
          A,
          $,
          _,
          O,
          x,
          k,
          M,
          D,
          L
        );
        return;
      }
    }
    Q & 8 ? (G & 16 && Ke(A, x, k), $ !== A && y(_, $)) : G & 16 ? Q & 16 ? ve(
      A,
      $,
      _,
      O,
      x,
      k,
      M,
      D,
      L
    ) : Ke(A, x, k, !0) : (G & 8 && y(_, ""), Q & 16 && Be(
      $,
      _,
      O,
      x,
      k,
      M,
      D,
      L
    ));
  }, ze = (m, b, _, O, x, k, M, D, L) => {
    m = m || Gr, b = b || Gr;
    const A = m.length, G = b.length, $ = Math.min(A, G);
    let K;
    for (K = 0; K < $; K++) {
      const Q = b[K] = L ? ir(b[K]) : Kt(b[K]);
      W(
        m[K],
        Q,
        _,
        null,
        x,
        k,
        M,
        D,
        L
      );
    }
    A > G ? Ke(
      m,
      x,
      k,
      !0,
      !1,
      $
    ) : Be(
      b,
      _,
      O,
      x,
      k,
      M,
      D,
      L,
      $
    );
  }, ve = (m, b, _, O, x, k, M, D, L) => {
    let A = 0;
    const G = b.length;
    let $ = m.length - 1, K = G - 1;
    for (; A <= $ && A <= K; ) {
      const Q = m[A], ee = b[A] = L ? ir(b[A]) : Kt(b[A]);
      if (nn(Q, ee))
        W(
          Q,
          ee,
          _,
          null,
          x,
          k,
          M,
          D,
          L
        );
      else
        break;
      A++;
    }
    for (; A <= $ && A <= K; ) {
      const Q = m[$], ee = b[K] = L ? ir(b[K]) : Kt(b[K]);
      if (nn(Q, ee))
        W(
          Q,
          ee,
          _,
          null,
          x,
          k,
          M,
          D,
          L
        );
      else
        break;
      $--, K--;
    }
    if (A > $) {
      if (A <= K) {
        const Q = K + 1, ee = Q < G ? b[Q].el : O;
        for (; A <= K; )
          W(
            null,
            b[A] = L ? ir(b[A]) : Kt(b[A]),
            _,
            ee,
            x,
            k,
            M,
            D,
            L
          ), A++;
      }
    } else if (A > K)
      for (; A <= $; )
        We(m[A], x, k, !0), A++;
    else {
      const Q = A, ee = A, P = /* @__PURE__ */ new Map();
      for (A = ee; A <= K; A++) {
        const we = b[A] = L ? ir(b[A]) : Kt(b[A]);
        we.key != null && P.set(we.key, A);
      }
      let N, H = 0;
      const re = K - ee + 1;
      let le = !1, ye = 0;
      const fe = new Array(re);
      for (A = 0; A < re; A++) fe[A] = 0;
      for (A = Q; A <= $; A++) {
        const we = m[A];
        if (H >= re) {
          We(we, x, k, !0);
          continue;
        }
        let Ie;
        if (we.key != null)
          Ie = P.get(we.key);
        else
          for (N = ee; N <= K; N++)
            if (fe[N - ee] === 0 && nn(we, b[N])) {
              Ie = N;
              break;
            }
        Ie === void 0 ? We(we, x, k, !0) : (fe[Ie - ee] = A + 1, Ie >= ye ? ye = Ie : le = !0, W(
          we,
          b[Ie],
          _,
          null,
          x,
          k,
          M,
          D,
          L
        ), H++);
      }
      const $e = le ? _c(fe) : Gr;
      for (N = $e.length - 1, A = re - 1; A >= 0; A--) {
        const we = ee + A, Ie = b[we], he = b[we + 1], mt = we + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          he.el || El(he)
        ) : O;
        fe[A] === 0 ? W(
          null,
          Ie,
          _,
          mt,
          x,
          k,
          M,
          D,
          L
        ) : le && (N < 0 || A !== $e[N] ? Ae(Ie, _, mt, 2) : N--);
      }
    }
  }, Ae = (m, b, _, O, x = null) => {
    const { el: k, type: M, transition: D, children: L, shapeFlag: A } = m;
    if (A & 6) {
      Ae(m.component.subTree, b, _, O);
      return;
    }
    if (A & 128) {
      m.suspense.move(b, _, O);
      return;
    }
    if (A & 64) {
      M.move(m, b, _, at);
      return;
    }
    if (M === te) {
      n(k, b, _);
      for (let $ = 0; $ < L.length; $++)
        Ae(L[$], b, _, O);
      n(m.anchor, b, _);
      return;
    }
    if (M === Ua) {
      U(m, b, _);
      return;
    }
    if (O !== 2 && A & 1 && D)
      if (O === 0)
        D.persisted && !k[Na] ? n(k, b, _) : (D.beforeEnter(k), n(k, b, _), vt(() => D.enter(k), x));
      else {
        const { leave: $, delayLeave: K, afterLeave: Q } = D, ee = () => {
          m.ctx.isUnmounted ? a(k) : n(k, b, _);
        }, P = () => {
          const N = k._isLeaving || !!k[Na];
          k._isLeaving && k[Na](
            !0
            /* cancelled */
          ), D.persisted && !N ? ee() : $(k, () => {
            ee(), Q && Q();
          });
        };
        K ? K(k, ee, P) : P();
      }
    else
      n(k, b, _);
  }, We = (m, b, _, O = !1, x = !1) => {
    const {
      type: k,
      props: M,
      ref: D,
      children: L,
      dynamicChildren: A,
      shapeFlag: G,
      patchFlag: $,
      dirs: K,
      cacheIndex: Q,
      memo: ee
    } = m;
    if ($ === -2 && (x = !1), D != null && (cr(), mn(D, null, _, m, !0), ur()), Q != null && (b.renderCache[Q] = void 0), G & 256) {
      b.ctx.deactivate(m);
      return;
    }
    const P = G & 1 && K, N = !bn(m);
    let H;
    if (N && (H = M && M.onVnodeBeforeUnmount) && Bt(H, b, m), G & 6)
      Nt(m.component, _, O);
    else {
      if (G & 128) {
        m.suspense.unmount(_, O);
        return;
      }
      P && Tr(m, null, b, "beforeUnmount"), G & 64 ? m.type.remove(
        m,
        b,
        _,
        at,
        O
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (k !== te || $ > 0 && $ & 64) ? Ke(
        A,
        b,
        _,
        !1,
        !0
      ) : (k === te && $ & 384 || !x && G & 16) && Ke(L, b, _), O && Ze(m);
    }
    const re = ee != null && Q == null;
    (N && (H = M && M.onVnodeUnmounted) || P || re) && vt(() => {
      H && Bt(H, b, m), P && Tr(m, null, b, "unmounted"), re && (m.el = null);
    }, _);
  }, Ze = (m) => {
    const { type: b, el: _, anchor: O, transition: x } = m;
    if (b === te) {
      be(_, O);
      return;
    }
    if (b === Ua) {
      V(m);
      return;
    }
    const k = () => {
      a(_), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (m.shapeFlag & 1 && x && !x.persisted) {
      const { leave: M, delayLeave: D } = x, L = () => M(_, k);
      D ? D(m.el, k, L) : L();
    } else
      k();
  }, be = (m, b) => {
    let _;
    for (; m !== b; )
      _ = I(m), a(m), m = _;
    a(b);
  }, Nt = (m, b, _) => {
    const { bum: O, scope: x, job: k, subTree: M, um: D, m: L, a: A } = m;
    qi(L), qi(A), O && qn(O), x.stop(), k && (k.flags |= 8, We(M, m, b, _)), D && vt(D, b), vt(() => {
      m.isUnmounted = !0;
    }, b);
  }, Ke = (m, b, _, O = !1, x = !1, k = 0) => {
    for (let M = k; M < m.length; M++)
      We(m[M], b, _, O, x);
  }, ht = (m) => {
    if (m.shapeFlag & 6)
      return ht(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const b = I(m.anchor || m.el), _ = b && b[Lo];
    return _ ? I(_) : b;
  };
  let St = !1;
  const At = (m, b, _) => {
    let O;
    m == null ? b._vnode && (We(b._vnode, null, null, !0), O = b._vnode.component) : W(
      b._vnode || null,
      m,
      b,
      null,
      null,
      null,
      _
    ), b._vnode = m, St || (St = !0, Ii(O), Zs(), St = !1);
  }, at = {
    p: W,
    um: We,
    m: Ae,
    r: Ze,
    mt: xt,
    mc: Be,
    pc: de,
    pbc: Le,
    n: ht,
    o: e
  };
  return {
    render: At,
    hydrate: void 0,
    createApp: rc(At)
  };
}
function Ia({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function xr({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Sl(e, t, r = !1) {
  const n = e.children, a = t.children;
  if (ne(n) && ne(a))
    for (let i = 0; i < n.length; i++) {
      const c = n[i];
      let d = a[i];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[i] = ir(a[i]), d.el = c.el), !r && d.patchFlag !== -2 && Sl(c, d)), d.type === fa && (d.patchFlag === -1 && (d = a[i] = ir(d)), d.el = c.el), d.type === fr && !d.el && (d.el = c.el);
    }
}
function _c(e) {
  const t = e.slice(), r = [0];
  let n, a, i, c, d;
  const h = e.length;
  for (n = 0; n < h; n++) {
    const v = e[n];
    if (v !== 0) {
      if (a = r[r.length - 1], e[a] < v) {
        t[n] = a, r.push(n);
        continue;
      }
      for (i = 0, c = r.length - 1; i < c; )
        d = i + c >> 1, e[r[d]] < v ? i = d + 1 : c = d;
      v < e[r[i]] && (i > 0 && (t[n] = r[i - 1]), r[i] = n);
    }
  }
  for (i = r.length, c = r[i - 1]; i-- > 0; )
    r[i] = c, c = t[c];
  return r;
}
function Cl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Cl(t);
}
function qi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function El(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? El(t.subTree) : null;
}
const Tl = (e) => e.__isSuspense;
function vc(e, t) {
  t && t.pendingBranch ? ne(e) ? t.effects.push(...e) : t.effects.push(e) : Oo(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), fa = /* @__PURE__ */ Symbol.for("v-txt"), fr = /* @__PURE__ */ Symbol.for("v-cmt"), Ua = /* @__PURE__ */ Symbol.for("v-stc"), Ur = [];
let Tt = null;
function w(e = !1) {
  Ur.push(Tt = e ? null : []);
}
function xl() {
  Ur.pop(), Tt = Ur[Ur.length - 1] || null;
}
let wn = 1;
function Bi(e, t = !1) {
  wn += e, e < 0 && Tt && t && (Tt.hasOnce = !0);
}
function Al(e) {
  return e.dynamicChildren = wn > 0 ? Tt || Gr : null, xl(), wn > 0 && Tt && Tt.push(e), e;
}
function S(e, t, r, n, a, i) {
  return Al(
    s(
      e,
      t,
      r,
      n,
      a,
      i,
      !0
    )
  );
}
function wc(e, t, r, n, a) {
  return Al(
    or(
      e,
      t,
      r,
      n,
      a,
      !0
    )
  );
}
function kl(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function nn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rl = ({ key: e }) => e ?? null, zn = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? He(e) || /* @__PURE__ */ tt(e) || ue(e) ? { i: Rt, r: e, k: t, f: !!r } : e : null);
function s(e, t = null, r = null, n = 0, a = null, i = e === te ? 0 : 1, c = !1, d = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rl(t),
    ref: t && zn(t),
    scopeId: el,
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
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: Rt
  };
  return d ? (Zn(h, r), i & 128 && e.normalize(h)) : r && (h.shapeFlag |= He(r) ? 8 : 16), wn > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Tt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && Tt.push(h), h;
}
const or = Sc;
function Sc(e, t = null, r = null, n = 0, a = null, i = !1) {
  if ((!e || e === Go) && (e = fr), kl(e)) {
    const d = Qr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Zn(d, r), wn > 0 && !i && Tt && (d.shapeFlag & 6 ? Tt[Tt.indexOf(e)] = d : Tt.push(d)), d.patchFlag = -2, d;
  }
  if (Ic(e) && (e = e.__vccOpts), t) {
    t = Cc(t);
    let { class: d, style: h } = t;
    d && !He(d) && (t.class = Lt(d)), xe(h) && (/* @__PURE__ */ bi(h) && !ne(h) && (h = rt({}, h)), t.style = ci(h));
  }
  const c = He(e) ? 1 : Tl(e) ? 128 : ca(e) ? 64 : xe(e) ? 4 : ue(e) ? 2 : 0;
  return s(
    e,
    t,
    r,
    n,
    a,
    c,
    i,
    !0
  );
}
function Cc(e) {
  return e ? /* @__PURE__ */ bi(e) || bl(e) ? rt({}, e) : e : null;
}
function Qr(e, t, r = !1, n = !1) {
  const { props: a, ref: i, patchFlag: c, children: d, transition: h } = e, v = t ? Ec(a || {}, t) : a, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Rl(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && i ? ne(i) ? i.concat(zn(t)) : [i, zn(t)] : zn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== te ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: h,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qr(e.ssContent),
    ssFallback: e.ssFallback && Qr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return h && n && gi(
    y,
    h.clone(y)
  ), y;
}
function pe(e = " ", t = 0) {
  return or(fa, null, e, t);
}
function Y(e = "", t = !1) {
  return t ? (w(), wc(fr, null, e)) : or(fr, null, e);
}
function Kt(e) {
  return e == null || typeof e == "boolean" ? or(fr) : ne(e) ? or(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kl(e) ? ir(e) : or(fa, null, String(e));
}
function ir(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qr(e);
}
function Zn(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (ne(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Zn(e, a()), a._c && (a._d = !0));
      return;
    } else {
      r = 32;
      const a = t._;
      !a && !bl(t) ? t._ctx = Rt : a === 3 && Rt && (Rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (ue(t)) {
    if (n & 65) {
      Zn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Rt }, r = 32;
  } else
    t = String(t), n & 64 ? (r = 16, t = [pe(t)]) : r = 8;
  e.children = t, e.shapeFlag |= r;
}
function Ec(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const a in n)
      if (a === "class")
        t.class !== n.class && (t.class = Lt([t.class, n.class]));
      else if (a === "style")
        t.style = ci([t.style, n.style]);
      else if (ra(a)) {
        const i = t[a], c = n[a];
        c && i !== c && !(ne(i) && i.includes(c)) ? t[a] = i ? [].concat(i, c) : c : c == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !na(a) && (t[a] = c);
      } else a !== "" && (t[a] = n[a]);
  }
  return t;
}
function Bt(e, t, r, n = null) {
  Ht(e, t, 7, [
    r,
    n
  ]);
}
const Tc = dl();
let xc = 0;
function Ac(e, t, r) {
  const n = e.type, a = (t ? t.appContext : e.appContext) || Tc, i = {
    uid: xc++,
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
    scope: new Ql(
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
    propsOptions: gl(n, a),
    emitsOptions: fl(n, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ke,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: ke,
    data: ke,
    props: ke,
    attrs: ke,
    slots: ke,
    refs: ke,
    setupState: ke,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ac.bind(null, i), e.ce && e.ce(i), i;
}
let ft = null;
const kc = () => ft || Rt;
let Qn, Sn;
{
  const e = sa(), t = (r, n) => {
    let a;
    return (a = e[r]) || (a = e[r] = []), a.push(n), (i) => {
      a.length > 1 ? a.forEach((c) => c(i)) : a[0](i);
    };
  };
  Qn = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ft = r
  ), Sn = t(
    "__VUE_SSR_SETTERS__",
    (r) => Cn = r
  );
}
const xn = (e) => {
  const t = ft;
  return Qn(e), e.scope.on(), () => {
    e.scope.off(), Qn(t);
  };
}, zi = () => {
  ft && ft.scope.off(), Qn(null);
};
function Ol(e) {
  return e.vnode.shapeFlag & 4;
}
let Cn = !1;
function Rc(e, t = !1, r = !1) {
  t && Sn(t);
  const { props: n, children: a } = e.vnode, i = Ol(e);
  uc(e, n, i, t), hc(e, a, r || t);
  const c = i ? Oc(e, t) : void 0;
  return t && Sn(!1), c;
}
function Oc(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Yo);
  const { setup: n } = r;
  if (n) {
    cr();
    const a = e.setupContext = n.length > 1 ? Pc(e) : null, i = xn(e), c = Tn(
      n,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = xs(c);
    if (ur(), i(), (d || e.sp) && !bn(e) && al(e), d) {
      if (c.then(zi, zi), t)
        return c.then((h) => {
          Sn(!0);
          try {
            Wi(e, h, t);
          } finally {
            Sn(!1);
          }
        }).catch((h) => {
          oa(h, e, 0);
        });
      e.asyncDep = c;
    } else
      Wi(e, c);
  } else
    Nl(e);
}
function Wi(e, t, r) {
  ue(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : xe(t) && (e.setupState = Gs(t)), Nl(e);
}
function Nl(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || Yt);
  {
    const a = xn(e);
    cr();
    try {
      Xo(e);
    } finally {
      ur(), a();
    }
  }
}
const Nc = {
  get(e, t) {
    return et(e, "get", ""), e[t];
  }
};
function Pc(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function pa(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gs(vo(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in yn)
        return yn[r](e);
    },
    has(t, r) {
      return r in t || r in yn;
    }
  })) : e.proxy;
}
function Ic(e) {
  return ue(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ To(e, t, Cn), Uc = "3.5.42";
let ni;
const Ki = typeof window < "u" && window.trustedTypes;
if (Ki)
  try {
    ni = /* @__PURE__ */ Ki.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Pl = ni ? (e) => ni.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", Lc = "http://www.w3.org/1998/Math/MathML", nr = typeof document < "u" ? document : null, Gi = nr && /* @__PURE__ */ nr.createElement("template"), Dc = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const a = t === "svg" ? nr.createElementNS(Mc, e) : t === "mathml" ? nr.createElementNS(Lc, e) : r ? nr.createElement(e, { is: r }) : nr.createElement(e);
    return e === "select" && n && n.multiple != null && a.setAttribute("multiple", n.multiple), a;
  },
  createText: (e) => nr.createTextNode(e),
  createComment: (e) => nr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => nr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, a, i) {
    const c = r ? r.previousSibling : t.lastChild;
    if (a && (a === i || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), r), !(a === i || !(a = a.nextSibling)); )
        ;
    else {
      Gi.innerHTML = Pl(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const d = Gi.content;
      if (n === "svg" || n === "mathml") {
        const h = d.firstChild;
        for (; h.firstChild; )
          d.appendChild(h.firstChild);
        d.removeChild(h);
      }
      t.insertBefore(d, r);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Fc = /* @__PURE__ */ Symbol("_vtc");
function $c(e, t, r) {
  const n = e[Fc];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Yi = /* @__PURE__ */ Symbol("_vod"), Hc = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(""), Vc = /(?:^|;)\s*display\s*:/;
function qc(e, t, r) {
  const n = e.style, a = He(r);
  let i = !1;
  if (r && !a) {
    if (t)
      if (He(t))
        for (const c of t.split(";")) {
          const d = c.slice(0, c.indexOf(":")).trim();
          r[d] == null && un(n, d, "");
        }
      else
        for (const c in t)
          r[c] == null && un(n, c, "");
    for (const c in r) {
      c === "display" && (i = !0);
      const d = r[c];
      d != null ? zc(
        e,
        c,
        !He(t) && t ? t[c] : void 0,
        d
      ) || un(n, c, d) : un(n, c, "");
    }
  } else if (a) {
    if (t !== r) {
      const c = n[jc];
      c && (r += ";" + c), n.cssText = r, i = Vc.test(r);
    }
  } else t && e.removeAttribute("style");
  Yi in e && (e[Yi] = i ? n.display : "", e[Hc] && (n.display = "none"));
}
const $n = /\s*!important$/;
function un(e, t, r) {
  if (ne(r))
    r.forEach((n) => un(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    $n.test(r) ? e.setProperty(t, r.replace($n, ""), "important") : e.setProperty(t, r);
  else {
    const n = Bc(e, t);
    $n.test(r) ? e.setProperty(
      Lr(n),
      r.replace($n, ""),
      "important"
    ) : e[n] = r;
  }
}
const Xi = ["Webkit", "Moz", "ms"], Ma = {};
function Bc(e, t) {
  const r = Ma[t];
  if (r)
    return r;
  let n = Dt(t);
  if (n !== "filter" && n in e)
    return Ma[t] = n;
  n = Rs(n);
  for (let a = 0; a < Xi.length; a++) {
    const i = Xi[a] + n;
    if (i in e)
      return Ma[t] = i;
  }
  return t;
}
function zc(e, t, r, n) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && He(n) && r === n;
}
const Ji = "http://www.w3.org/1999/xlink";
function Zi(e, t, r, n, a, i = Xl(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(Ji, t.slice(6, t.length)) : e.setAttributeNS(Ji, t, r) : r == null || i && !Ns(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Xt(r) ? String(r) : r
  );
}
function Qi(e, t, r, n, a) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Pl(r) : r);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const d = i === "OPTION" ? e.getAttribute("value") || "" : e.value, h = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (d !== h || !("_value" in e)) && (e.value = h), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let c = !1;
  if (r === "" || r == null) {
    const d = typeof e[t];
    d === "boolean" ? r = Ns(r) : r == null && d === "string" ? (r = "", c = !0) : d === "number" && (r = 0, c = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  c && e.removeAttribute(a || t);
}
function Or(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Wc(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const es = /* @__PURE__ */ Symbol("_vei");
function Kc(e, t, r, n, a = null) {
  const i = e[es] || (e[es] = {}), c = i[t];
  if (n && c)
    c.value = n;
  else {
    const [d, h] = Xc(t);
    if (n) {
      const v = i[t] = Qc(
        n,
        a
      );
      Or(e, d, v, h);
    } else c && (Wc(e, d, c, h), i[t] = void 0);
  }
}
const Gc = /(Once|Passive|Capture)$/, Yc = /^on:?(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t, r;
  for (; (r = e.match(Gc)) && !Yc.test(e); )
    t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Lr(e.slice(2)), t];
}
let La = 0;
const Jc = /* @__PURE__ */ Promise.resolve(), Zc = () => La || (Jc.then(() => La = 0), La = Date.now());
function Qc(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    const a = r.value;
    if (ne(a)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const c = a.slice(), d = [n];
      for (let h = 0; h < c.length && !n._stopped; h++) {
        const v = c[h];
        v && Ht(
          v,
          t,
          5,
          d
        );
      }
    } else
      Ht(
        a,
        t,
        5,
        [n]
      );
  };
  return r.value = e, r.attached = Zc(), r;
}
const ts = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, r, n, a, i) => {
  const c = a === "svg";
  t === "class" ? $c(e, n, c) : t === "style" ? qc(e, r, n) : ra(t) ? na(t) || Kc(e, t, r, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, n, c)) ? (Qi(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zi(e, t, n, c, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !He(n))) ? Qi(e, Dt(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Zi(e, t, n, c));
};
function tu(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ts(t) && ue(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return ts(t) && He(r) ? !1 : t in e;
}
function ru(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = Dt(t);
  return Array.isArray(r) ? r.some((a) => Dt(a) === n) : Object.keys(r).some((a) => Dt(a) === n);
}
const ea = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ne(t) ? (r) => qn(t, r) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function rs(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Nr = /* @__PURE__ */ Symbol("_assign"), Hn = /* @__PURE__ */ Symbol("_initialValue");
function Da(e, t, r) {
  return t && (e = e.trim()), r && (e = ia(e)), e;
}
const Fa = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, a) {
    e.parentNode && (e.type === "text" ? e[Hn] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Hn] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Nr] = ea(a);
    const i = n || a.props && a.props.type === "number";
    Or(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Nr](Da(e.value, r, i));
    }), (r || i) && Or(e, "change", () => {
      e.value = Da(e.value, r, i);
    }), t || (Or(e, "compositionstart", nu), Or(e, "compositionend", rs), Or(e, "change", rs));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: r, number: n } }) {
    const a = t ?? "", i = e[Hn];
    delete e[Hn], i !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== i ? e[Nr](Da(e.value, r, n)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: a, number: i } }, c) {
    if (e[Nr] = ea(c), e.composing) return;
    const d = (i || e.type === "number") && !/^0\d/.test(e.value) ? ia(e.value) : e.value, h = t ?? "";
    if (d === h)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (n && t === r || a && e.value.trim() === h) || (e.value = h);
  }
}, ct = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, n) {
    e._modelValue = t, Or(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (h) => h.selected).map(
        (h) => r ? ia(ta(h)) : ta(h)
      ), i = e.multiple, c = i ? Mr(e._modelValue) ? new Set(a) : a : a[0], d = e._pendingValue = [
        i,
        i ? ne(c) ? a.slice() : a : c
      ];
      try {
        e[Nr](c);
      } finally {
        Xs(() => {
          e._pendingValue === d && (e._pendingValue = void 0);
        });
      }
    }), e[Nr] = ea(n);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ns(e, t);
  },
  beforeUpdate(e, { value: t }, r) {
    e._modelValue = t, e[Nr] = ea(r);
  },
  updated(e, { value: t }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !au(t, r[1], r[0])) && ns(e, t);
  }
};
function au(e, t, r) {
  if (!r || ne(e)) return Sr(e, t);
  if (Mr(e)) {
    if (e.size !== t.length) return !1;
    for (const n of t)
      if (!e.has(n)) return !1;
    return !0;
  }
  return !1;
}
function ns(e, t) {
  const r = e.multiple, n = ne(t);
  if (!(r && !n && !Mr(t))) {
    for (let a = 0, i = e.options.length; a < i; a++) {
      const c = e.options[a], d = ta(c);
      if (r)
        if (n) {
          const h = typeof d;
          h === "string" || h === "number" ? c.selected = t.some((v) => String(v) === String(d)) : c.selected = Zl(t, d) > -1;
        } else
          c.selected = t.has(d);
      else if (Sr(ta(c), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ta(e) {
  return "_value" in e ? e._value : e.value;
}
const iu = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => iu.some((r) => e[`${r}Key`] && !t.includes(r))
}, jn = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((a, ...i) => {
    for (let c = 0; c < t.length; c++) {
      const d = su[t[c]];
      if (d && d(a, t)) return;
    }
    return e(a, ...i);
  }));
}, lu = /* @__PURE__ */ rt({ patchProp: eu }, Dc);
let as;
function ou() {
  return as || (as = bc(lu));
}
const cu = ((...e) => {
  const t = ou().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const a = du(n);
    if (!a) return;
    const i = t._component;
    !ue(i) && !i.render && !i.template && (i.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const c = r(a, !1, uu(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), c;
  }, t;
});
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function du(e) {
  return He(e) ? document.querySelector(e) : e;
}
function fu(e, t, r) {
  const n = `#initial-state-${e}-${t}`;
  if (window._nc_initial_state?.has(n))
    return window._nc_initial_state.get(n);
  window._nc_initial_state || (window._nc_initial_state = /* @__PURE__ */ new Map());
  const a = document.querySelector(n);
  if (a === null) {
    if (r !== void 0)
      return r;
    throw new Error(`Could not find initial state ${t} of ${e}`);
  }
  try {
    const i = JSON.parse(atob(a.value));
    return window._nc_initial_state.set(n, i), i;
  } catch (i) {
    if (console.error("[@nextcloud/initial-state] Could not parse initial state", { key: t, app: e, error: i }), r !== void 0)
      return r;
    throw new Error(`Could not parse initial state ${t} of ${e}`, { cause: i });
  }
}
function is(e, t) {
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
    var n, a, i, c, d = [], h = !0, v = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(h = (n = i.call(r)).done) && (d.push(n.value), d.length !== t); h = !0) ;
    } catch (y) {
      v = !0, a = y;
    } finally {
      try {
        if (!h && r.return != null && (c = r.return(), Object(c) !== c)) return;
      } finally {
        if (v) throw a;
      }
    }
    return d;
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
    if (typeof e == "string") return is(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? is(e, t) : void 0;
  }
}
const Il = Object.entries, ss = Object.setPrototypeOf, gu = Object.isFrozen, _u = Object.getPrototypeOf, vu = Object.getOwnPropertyDescriptor;
let qe = Object.freeze, Ye = Object.seal, Kr = Object.create, Ul = typeof Reflect < "u" && Reflect, ai = Ul.apply, ii = Ul.construct;
qe || (qe = function(t) {
  return t;
});
Ye || (Ye = function(t) {
  return t;
});
ai || (ai = function(t, r) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    a[i - 2] = arguments[i];
  return t.apply(r, a);
});
ii || (ii = function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return new t(...n);
});
const Rr = Ve(Array.prototype.forEach), wu = Ve(Array.prototype.lastIndexOf), ls = Ve(Array.prototype.pop), an = Ve(Array.prototype.push), Su = Ve(Array.prototype.splice), Jr = Array.isArray, dn = Ve(String.prototype.toLowerCase), $a = Ve(String.prototype.toString), os = Ve(String.prototype.match), sn = Ve(String.prototype.replace), cs = Ve(String.prototype.indexOf), Cu = Ve(String.prototype.trim), Eu = Ve(Number.prototype.toString), Tu = Ve(Boolean.prototype.toString), us = typeof BigInt > "u" ? null : Ve(BigInt.prototype.toString), ds = typeof Symbol > "u" ? null : Ve(Symbol.prototype.toString), wt = Ve(Object.prototype.hasOwnProperty), ln = Ve(Object.prototype.toString), Qe = Ve(RegExp.prototype.test), Ar = xu(TypeError);
function Ve(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      n[a - 1] = arguments[a];
    return ai(e, t, n);
  };
}
function xu(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    return ii(e, r);
  };
}
function ge(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dn;
  if (ss && ss(e, null), !Jr(t))
    return e;
  let n = t.length;
  for (; n--; ) {
    let a = t[n];
    if (typeof a == "string") {
      const i = r(a);
      i !== a && (gu(t) || (t[n] = i), a = i);
    }
    e[a] = !0;
  }
  return e;
}
function Au(e) {
  for (let t = 0; t < e.length; t++)
    wt(e, t) || (e[t] = null);
  return e;
}
function Et(e) {
  const t = Kr(null);
  for (const n of Il(e)) {
    var r = bu(n, 2);
    const a = r[0], i = r[1];
    wt(e, a) && (Jr(i) ? t[a] = Au(i) : i && typeof i == "object" && i.constructor === Object ? t[a] = Et(i) : t[a] = i);
  }
  return t;
}
function ku(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Eu(e);
    case "boolean":
      return Tu(e);
    case "bigint":
      return us ? us(e) : "0";
    case "symbol":
      return ds ? ds(e) : "Symbol()";
    case "undefined":
      return ln(e);
    case "function":
    case "object": {
      if (e === null)
        return ln(e);
      const t = e, r = Mt(t, "toString");
      if (typeof r == "function") {
        const n = r(t);
        return typeof n == "string" ? n : ln(n);
      }
      return ln(e);
    }
    default:
      return ln(e);
  }
}
function Mt(e, t) {
  for (; e !== null; ) {
    const n = vu(e, t);
    if (n) {
      if (n.get)
        return Ve(n.get);
      if (typeof n.value == "function")
        return Ve(n.value);
    }
    e = _u(e);
  }
  function r() {
    return null;
  }
  return r;
}
function Ru(e) {
  try {
    return Qe(e, ""), !0;
  } catch {
    return !1;
  }
}
const fs = qe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ha = qe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ja = qe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Ou = qe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Va = qe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nu = qe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ps = qe(["#text"]), hs = qe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), qa = qe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ms = qe(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Vn = qe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Pu = Ye(/{{[\w\W]*|^[\w\W]*}}/g), Iu = Ye(/<%[\w\W]*|^[\w\W]*%>/g), Uu = Ye(/\${[\w\W]*/g), Mu = Ye(/^data-[\-\w.\u00B7-\uFFFF]+$/), Lu = Ye(/^aria-[\-\w]+$/), bs = Ye(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Du = Ye(/^(?:\w+script|data):/i), Fu = Ye(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), $u = Ye(/^html$/i), Hu = Ye(/^[a-z][.\w]*(-[.\w]+)+$/i), ys = Ye(/<[/\w!]/g), gs = Ye(/<[/\w]/g), ju = Ye(/<\/no(script|embed|frames)/i), Vu = Ye(/\/>/i), Ct = {
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
}, Ml = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], qu = qe(ge({}, Ml)), Bu = (function() {
  const e = {};
  return Rr(Ml, (t) => {
    e[t] = Ye(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), qe(e);
})(), zu = function() {
  return typeof window > "u" ? null : window;
}, Wu = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let n = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (n = r.getAttribute(a));
  const i = "dompurify" + (n ? "#" + n : "");
  try {
    return t.createPolicy(i, {
      createHTML(c) {
        return c;
      },
      createScriptURL(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, _s = function() {
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
}, _r = function(t, r, n, a) {
  return wt(t, r) && Jr(t[r]) ? ge(a.base ? Et(a.base) : {}, t[r], a.transform) : n;
}, Ba = function(t, r, n) {
  const a = wt(t, r) ? t[r] : void 0;
  return a && typeof a == "object" ? Et(a) : n();
};
function Ll() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zu();
  const t = (F) => Ll(F);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== Ct.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const n = r, a = n.currentScript;
  e.DocumentFragment;
  const i = e.HTMLTemplateElement, c = e.Node, d = e.Element, h = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const y = e.DOMParser, T = e.trustedTypes, I = d.prototype, j = Mt(I, "cloneNode"), ie = Mt(I, "remove"), W = Mt(I, "nextSibling"), ce = Mt(I, "childNodes"), se = Mt(I, "parentNode"), z = Mt(I, "shadowRoot"), U = Mt(I, "attributes"), V = c && c.prototype ? Mt(c.prototype, "nodeType") : null, oe = c && c.prototype ? Mt(c.prototype, "nodeName") : null, Me = c && c.prototype ? Mt(c.prototype, "ownerDocument") : null, Pe = function(f) {
    return V ? V(f) : f.nodeType;
  }, Be = function(f) {
    return oe ? oe(f) : f.nodeName;
  };
  if (typeof i == "function") {
    const F = r.createElement("template");
    F.content && F.content.ownerDocument && (r = F.content.ownerDocument);
  }
  let Ee, Le = "", nt, pt = !1, Xe = 0;
  const xt = function() {
    if (Xe > 0)
      throw Ar('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, De = function(f) {
    xt(), Xe++;
    try {
      return Ee.createHTML(f);
    } finally {
      Xe--;
    }
  }, Fe = function(f) {
    xt(), Xe++;
    try {
      return Ee.createScriptURL(f);
    } finally {
      Xe--;
    }
  }, _e = function() {
    return pt || (nt = Wu(T, a), pt = !0), nt;
  }, de = r, ze = de.implementation, ve = de.createNodeIterator, Ae = de.createDocumentFragment, We = de.getElementsByTagName, Ze = n.importNode;
  let be = _s();
  t.isSupported = typeof Il == "function" && typeof se == "function" && ze && ze.createHTMLDocument !== void 0;
  const Nt = Pu, Ke = Iu, ht = Uu, St = Mu, At = Lu, at = Du, it = Fu, m = Hu;
  let b = bs, _ = null;
  const O = ge({}, [...fs, ...Ha, ...ja, ...Va, ...ps]);
  let x = null;
  const k = ge({}, [...hs, ...qa, ...ms, ...Vn]);
  let M = Object.seal(Kr(null, {
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
  })), D = null, L = null;
  const A = Object.seal(Kr(null, {
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
  let G = !0, $ = !0, K = !1, Q = !0, ee = !1, P = !0, N = !1, H = !1, re = null, le = null, ye = !1, fe = !1, $e = !1, we = !1, Ie = !0, he = !1;
  const mt = "user-content-";
  let kt = !0, jt = !1, Pt = {}, je = null;
  const Vt = ge({}, [
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
  let Jt = null;
  const It = ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let bt = null;
  const Zt = ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), st = "http://www.w3.org/1998/Math/MathML", Ut = "http://www.w3.org/2000/svg", lt = "http://www.w3.org/1999/xhtml";
  let hr = lt, Dr = !1, en = null;
  const ha = ge({}, [st, Ut, lt], $a), Qt = qe(["mi", "mo", "mn", "ms", "mtext"]);
  let Fr = ge({}, Qt);
  const An = qe(["annotation-xml"]);
  let $r = ge({}, An);
  const ma = ge({}, ["title", "style", "font", "a", "script"]);
  let mr = null;
  const kn = ["application/xhtml+xml", "text/html"], ba = "text/html";
  let Ne = null, br = null;
  const ya = r.createElement("form"), Hr = function(f) {
    return f instanceof RegExp || f instanceof Function;
  }, Cr = function() {
    let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (br && br === f)
      return;
    (!f || typeof f != "object") && (f = {}), f = Et(f), mr = // eslint-disable-next-line unicorn/prefer-includes
    kn.indexOf(f.PARSER_MEDIA_TYPE) === -1 ? ba : f.PARSER_MEDIA_TYPE, Ne = mr === "application/xhtml+xml" ? $a : dn, _ = _r(f, "ALLOWED_TAGS", O, {
      transform: Ne
    }), x = _r(f, "ALLOWED_ATTR", k, {
      transform: Ne
    }), en = _r(f, "ALLOWED_NAMESPACES", ha, {
      transform: $a
    }), bt = _r(f, "ADD_URI_SAFE_ATTR", Zt, {
      transform: Ne,
      base: Zt
    }), Jt = _r(f, "ADD_DATA_URI_TAGS", It, {
      transform: Ne,
      base: It
    }), je = _r(f, "FORBID_CONTENTS", Vt, {
      transform: Ne
    }), D = _r(f, "FORBID_TAGS", Et({}), {
      transform: Ne
    }), L = _r(f, "FORBID_ATTR", Et({}), {
      transform: Ne
    }), Pt = wt(f, "USE_PROFILES") ? f.USE_PROFILES && typeof f.USE_PROFILES == "object" ? Et(f.USE_PROFILES) : f.USE_PROFILES : !1, G = f.ALLOW_ARIA_ATTR !== !1, $ = f.ALLOW_DATA_ATTR !== !1, K = f.ALLOW_UNKNOWN_PROTOCOLS || !1, Q = f.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ee = f.SAFE_FOR_TEMPLATES || !1, P = f.SAFE_FOR_XML !== !1, N = f.WHOLE_DOCUMENT || !1, fe = f.RETURN_DOM || !1, $e = f.RETURN_DOM_FRAGMENT || !1, we = f.RETURN_TRUSTED_TYPE || !1, ye = f.FORCE_BODY || !1, Ie = f.SANITIZE_DOM !== !1, he = f.SANITIZE_NAMED_PROPS || !1, kt = f.KEEP_CONTENT !== !1, jt = f.IN_PLACE || !1, b = Ru(f.ALLOWED_URI_REGEXP) ? f.ALLOWED_URI_REGEXP : bs, hr = typeof f.NAMESPACE == "string" ? f.NAMESPACE : lt, Fr = Ba(
      f,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => ge({}, Qt)
      // Default built-in map
    ), $r = Ba(
      f,
      "HTML_INTEGRATION_POINTS",
      () => ge({}, An)
      // Default built-in map
    );
    const g = Ba(f, "CUSTOM_ELEMENT_HANDLING", () => Kr(null));
    if (M = Kr(null), wt(g, "tagNameCheck") && Hr(g.tagNameCheck) && (M.tagNameCheck = g.tagNameCheck), wt(g, "attributeNameCheck") && Hr(g.attributeNameCheck) && (M.attributeNameCheck = g.attributeNameCheck), wt(g, "allowCustomizedBuiltInElements") && typeof g.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = g.allowCustomizedBuiltInElements), Ye(M), ee && ($ = !1), $e && (fe = !0), Pt && (_ = ge({}, ps), x = Kr(null), Pt.html === !0 && (ge(_, fs), ge(x, hs)), Pt.svg === !0 && (ge(_, Ha), ge(x, qa), ge(x, Vn)), Pt.svgFilters === !0 && (ge(_, ja), ge(x, qa), ge(x, Vn)), Pt.mathMl === !0 && (ge(_, Va), ge(x, ms), ge(x, Vn))), A.tagCheck = null, A.attributeCheck = null, wt(f, "ADD_TAGS") && (typeof f.ADD_TAGS == "function" ? A.tagCheck = f.ADD_TAGS : Jr(f.ADD_TAGS) && (_ === O && (_ = Et(_)), ge(_, f.ADD_TAGS, Ne))), wt(f, "ADD_ATTR") && (typeof f.ADD_ATTR == "function" ? A.attributeCheck = f.ADD_ATTR : Jr(f.ADD_ATTR) && (x === k && (x = Et(x)), ge(x, f.ADD_ATTR, Ne))), wt(f, "ADD_FORBID_CONTENTS") && Jr(f.ADD_FORBID_CONTENTS) && (je === Vt && (je = Et(je)), ge(je, f.ADD_FORBID_CONTENTS, Ne)), kt && (_["#text"] = !0), N && ge(_, ["html", "head", "body"]), _.table && (ge(_, ["tbody"]), delete D.tbody), f.TRUSTED_TYPES_POLICY) {
      if (typeof f.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Ar('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof f.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Ar('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const R = Ee;
      Ee = f.TRUSTED_TYPES_POLICY;
      try {
        Le = De("");
      } catch (B) {
        throw Ee = R, B;
      }
    } else f.TRUSTED_TYPES_POLICY === null ? (Ee = void 0, Le = "") : (Ee === void 0 && (Ee = _e()), Ee && typeof Le == "string" && (Le = De("")));
    qe && qe(f), br = f;
  }, Rn = ge({}, [...Ha, ...ja, ...Ou]), On = ge({}, [...Va, ...Nu]), yr = function(f, g, R) {
    return g.namespaceURI === lt ? f === "svg" : g.namespaceURI === st ? f === "svg" && (R === "annotation-xml" || Fr[R]) : !!Rn[f];
  }, Nn = function(f, g, R) {
    return g.namespaceURI === lt ? f === "math" : g.namespaceURI === Ut ? f === "math" && $r[R] : !!On[f];
  }, ga = function(f, g, R) {
    return g.namespaceURI === Ut && !$r[R] || g.namespaceURI === st && !Fr[R] ? !1 : !On[f] && (ma[f] || !Rn[f]);
  }, _a = function(f) {
    let g = se(f);
    (!g || !g.tagName) && (g = {
      namespaceURI: hr,
      tagName: "template"
    });
    const R = dn(f.tagName), B = dn(g.tagName);
    return en[f.namespaceURI] ? f.namespaceURI === Ut ? yr(R, g, B) : f.namespaceURI === st ? Nn(R, g, B) : f.namespaceURI === lt ? ga(R, g, B) : !!(mr === "application/xhtml+xml" && en[f.namespaceURI]) : !1;
  }, qt = function(f) {
    an(t.removed, {
      element: f
    });
    try {
      se(f).removeChild(f);
    } catch {
      if (ie(f), !se(f))
        throw Ar("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, gr = function(f, g, R) {
    try {
      f.removeAttributeNode(g);
    } catch {
      try {
        f.removeAttribute(R);
      } catch {
      }
    }
  }, jr = function(f) {
    Vr(f);
    const g = ce(f);
    if (g) {
      const B = [];
      Rr(g, (Z) => {
        an(B, Z);
      }), Rr(B, (Z) => {
        try {
          ie(Z);
        } catch {
        }
      });
    }
    const R = U(f);
    if (R)
      for (let B = R.length - 1; B >= 0; --B) {
        const Z = R[B], ae = Z && Z.name;
        typeof ae == "string" && gr(f, Z, ae);
      }
  }, er = function(f, g, R) {
    if (!R)
      try {
        R = g.getAttributeNode(f);
      } catch {
        R = null;
      }
    an(t.removed, {
      attribute: R || null,
      from: g
    });
    try {
      R ? g.removeAttributeNode(R) : g.removeAttribute(f);
    } catch {
      try {
        g.removeAttribute(f);
      } catch {
      }
    }
    if (f === "is")
      if (fe || $e)
        try {
          qt(g);
        } catch {
        }
      else
        try {
          g.setAttribute(f, "");
        } catch {
        }
  }, va = function(f) {
    const g = U(f);
    if (g)
      for (let R = g.length - 1; R >= 0; --R) {
        const B = g[R], Z = B && B.name;
        typeof Z != "string" || x[Ne(Z)] || gr(f, B, Z);
      }
  }, Vr = function(f) {
    const g = [f];
    for (; g.length > 0; ) {
      const R = g.pop();
      Pe(R) === Ct.element && va(R);
      const Z = ce(R);
      if (Z)
        for (let ae = Z.length - 1; ae >= 0; --ae)
          g.push(Z[ae]);
    }
  }, Pn = function(f, g) {
    return P ? f === "patchsrc" ? !0 : f === "for" && g !== "label" && g !== "output" : !1;
  }, wa = function(f) {
    if (!P)
      return;
    const g = [f];
    for (; g.length > 0; ) {
      const R = g.pop(), B = Pe(R);
      if (B === Ct.processingInstruction || B === Ct.comment && Qe(gs, R.data)) {
        try {
          ie(R);
        } catch {
        }
        continue;
      }
      if (B === Ct.element) {
        const ae = R, Re = Ne(Be(R));
        try {
          ae.hasAttribute && ae.hasAttribute("patchsrc") && ae.removeAttribute("patchsrc"), ae.hasAttribute && ae.hasAttribute("for") && Pn("for", Re) && ae.removeAttribute("for");
        } catch {
        }
      }
      const Z = ce(R);
      if (Z)
        for (let ae = Z.length - 1; ae >= 0; --ae)
          g.push(Z[ae]);
    }
  }, In = function(f) {
    let g = null, R = null;
    if (ye)
      f = "<remove></remove>" + f;
    else {
      const ae = os(f, /^[\r\n\t ]+/);
      R = ae && ae[0];
    }
    mr === "application/xhtml+xml" && hr === lt && (f = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + f + "</body></html>");
    const B = Ee ? De(f) : f;
    if (hr === lt)
      try {
        g = new y().parseFromString(B, mr);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = ze.createDocument(hr, "template", null);
      try {
        g.documentElement.innerHTML = Dr ? Le : B;
      } catch {
      }
    }
    const Z = g.body || g.documentElement;
    return f && R && Z.insertBefore(r.createTextNode(R), Z.childNodes[0] || null), hr === lt ? We.call(g, N ? "html" : "body")[0] : N ? g.documentElement : Z;
  }, tn = function(f) {
    const g = Me ? Me(f) : f.ownerDocument;
    return ve.call(
      g || f,
      f,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, Er = function(f) {
    return f = sn(f, Nt, " "), f = sn(f, Ke, " "), f = sn(f, ht, " "), f;
  }, E = function(f) {
    var g;
    f.normalize();
    const R = Me ? Me(f) : f.ownerDocument, B = ve.call(
      R || f,
      f,
      // eslint-disable-next-line no-bitwise
      h.SHOW_TEXT | h.SHOW_COMMENT | h.SHOW_CDATA_SECTION | h.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Z = B.nextNode();
    for (; Z; )
      Z.data = Er(Z.data), Z = B.nextNode();
    const ae = (g = f.querySelectorAll) === null || g === void 0 ? void 0 : g.call(f, "template");
    ae && Rr(ae, (Re) => {
      u(Re.content) && E(Re.content);
    });
  }, C = function(f) {
    const g = oe ? oe(f) : null;
    return typeof g != "string" || Ne(g) !== "form" ? !1 : typeof f.nodeName != "string" || typeof f.textContent != "string" || typeof f.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    f.attributes !== U(f) || typeof f.removeAttribute != "function" || typeof f.setAttribute != "function" || typeof f.namespaceURI != "string" || typeof f.insertBefore != "function" || typeof f.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    f.nodeType !== V(f) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    f.childNodes !== ce(f);
  }, u = function(f) {
    if (!V || typeof f != "object" || f === null)
      return !1;
    try {
      return V(f) === Ct.documentFragment;
    } catch {
      return !1;
    }
  }, X = function(f) {
    if (!V || typeof f != "object" || f === null)
      return !1;
    try {
      return typeof V(f) == "number";
    } catch {
      return !1;
    }
  };
  function Te(F, f, g) {
    F.length !== 0 && Rr(F, (R) => {
      R.call(t, f, g, br);
    });
  }
  const yt = function(f, g) {
    return !!(P && f.hasChildNodes() && !X(f.firstElementChild) && Qe(ys, f.textContent) && Qe(ys, f.innerHTML) || P && f.namespaceURI === lt && qu[g] && (X(f.firstElementChild) || typeof f.textContent == "string" && Qe(Bu[g], f.textContent)) || f.nodeType === Ct.processingInstruction || P && f.nodeType === Ct.comment && Qe(gs, f.data));
  }, tr = function(f, g) {
    if (f instanceof RegExp)
      return Qe(f, g);
    if (f instanceof Function) {
      for (var R = arguments.length, B = new Array(R > 2 ? R - 2 : 0), Z = 2; Z < R; Z++)
        B[Z - 2] = arguments[Z];
      return !!f(g, ...B);
    }
    return !1;
  }, Sa = function(f, g, R) {
    if (!D[g] && Ti(g) && tr(M.tagNameCheck, g))
      return !1;
    if (kt && !je[g]) {
      const B = se(f), Z = ce(f);
      if (Z && B) {
        const ae = Z.length;
        for (let Re = ae - 1; Re >= 0; --Re) {
          const Ue = f === R ? j(Z[Re], !0) : Z[Re];
          B.insertBefore(Ue, W(f));
        }
      }
    }
    return qt(f), !0;
  }, Un = function(f, g, R, B) {
    return f.length === 0 ? g : g === R || g === B ? Et(g) : g;
  }, Si = function(f, g) {
    return f === g || se(f) !== null ? !1 : (jt && Vr(f), !0);
  }, Ci = function(f, g) {
    if (Te(be.beforeSanitizeElements, f, null), Si(f, g))
      return !0;
    if (C(f))
      return qt(f), !0;
    const R = Ne(Be(f));
    if (_ = Un(be.uponSanitizeElement, _, O, re), Te(be.uponSanitizeElement, f, {
      tagName: R,
      allowedTags: _
    }), Si(f, g))
      return !0;
    if (yt(f, R))
      return qt(f), !0;
    if (D[R] || !(A.tagCheck instanceof Function && A.tagCheck(R)) && !_[R]) {
      const Z = Sa(f, R, g);
      return Z === !1 && Te(be.afterSanitizeElements, f, null), Z;
    }
    if (Pe(f) === Ct.element && !_a(f) || (R === "noscript" || R === "noembed" || R === "noframes") && Qe(ju, f.innerHTML))
      return qt(f), !0;
    if (ee && f.nodeType === Ct.text) {
      const Z = Er(f.textContent);
      f.textContent !== Z && (an(t.removed, {
        element: f.cloneNode()
      }), f.textContent = Z);
    }
    return Te(be.afterSanitizeElements, f, null), !1;
  }, Ei = function(f, g, R) {
    if (L[g] || Pn(g, f) || Ie && (g === "id" || g === "name") && (R in r || R in ya))
      return !1;
    const B = x[g] || A.attributeCheck instanceof Function && A.attributeCheck(g, f);
    return $ && Qe(St, g) || G && Qe(At, g) ? !0 : B ? bt[g] || Qe(b, sn(R, it, "")) || (g === "src" || g === "xlink:href" || g === "href") && f !== "script" && cs(R, "data:") === 0 && Jt[f] || K && !Qe(at, sn(R, it, "")) ? !0 : !R : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ti(f) && tr(M.tagNameCheck, f) && tr(M.attributeNameCheck, g, f) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      g === "is" && M.allowCustomizedBuiltInElements && tr(M.tagNameCheck, R)
    );
  }, Fl = ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ti = function(f) {
    return !Fl[dn(f)] && Qe(m, f);
  }, $l = function(f, g, R, B) {
    if (Ee && typeof T == "object" && typeof T.getAttributeType == "function" && !R)
      switch (T.getAttributeType(f, g)) {
        case "TrustedHTML":
          return De(B);
        case "TrustedScriptURL":
          return Fe(B);
      }
    return B;
  }, Hl = function(f, g, R, B) {
    try {
      R ? f.setAttributeNS(R, g, B) : f.setAttribute(g, B), C(f) ? qt(f) : ls(t.removed);
    } catch {
      er(g, f);
    }
  }, xi = function(f) {
    Te(be.beforeSanitizeAttributes, f, null);
    const g = f.attributes;
    if (!g || C(f))
      return;
    x = Un(be.uponSanitizeAttribute, x, k, le);
    const R = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: x,
      forceKeepAttr: void 0
    };
    let B = g.length;
    const Z = Ne(f.nodeName);
    for (; B--; ) {
      const ae = g[B], Re = ae.name, Ue = ae.namespaceURI, gt = ae.value, _t = Ne(Re), Ea = gt;
      let ot = Re === "value" ? Ea : Cu(Ea);
      if (R.attrName = _t, R.attrValue = ot, R.keepAttr = !0, R.forceKeepAttr = void 0, Te(be.uponSanitizeAttribute, f, R), ot = R.attrValue, he && (_t === "id" || _t === "name") && cs(ot, mt) !== 0 && (er(Re, f, ae), ot = mt + ot), P && Qe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ot)) {
        er(Re, f, ae);
        continue;
      }
      if (_t === "attributename" && os(ot, "href")) {
        er(Re, f, ae);
        continue;
      }
      if (!R.forceKeepAttr) {
        if (!R.keepAttr) {
          er(Re, f, ae);
          continue;
        }
        if (!Q && Qe(Vu, ot)) {
          er(Re, f, ae);
          continue;
        }
        if (ee && (ot = Er(ot)), !Ei(Z, _t, ot)) {
          er(Re, f, ae);
          continue;
        }
        ot = $l(Z, _t, Ue, ot), ot !== Ea && Hl(f, Re, Ue, ot);
      }
    }
    Te(be.afterSanitizeAttributes, f, null);
  }, Mn = function(f) {
    let g = null;
    const R = tn(f);
    for (Te(be.beforeSanitizeShadowDOM, f, null); g = R.nextNode(); )
      if (Te(be.uponSanitizeShadowNode, g, null), Ci(g, f), xi(g), u(g.content) && Mn(g.content), Pe(g) === Ct.element) {
        const B = z(g);
        u(B) && (Ca(B), Mn(B));
      }
    Te(be.afterSanitizeShadowDOM, f, null);
  }, Ca = function(f) {
    const g = [{
      node: f,
      shadow: null
    }];
    for (; g.length > 0; ) {
      const R = g.pop();
      if (R.shadow) {
        Mn(R.shadow);
        continue;
      }
      const B = R.node, ae = Pe(B) === Ct.element, Re = ce(B);
      if (Re)
        for (let Ue = Re.length - 1; Ue >= 0; --Ue)
          g.push({
            node: Re[Ue],
            shadow: null
          });
      if (ae) {
        const Ue = oe ? oe(B) : null;
        if (typeof Ue == "string" && Ne(Ue) === "template") {
          const gt = B.content;
          u(gt) && g.push({
            node: gt,
            shadow: null
          });
        }
      }
      if (ae) {
        const Ue = z(B);
        u(Ue) && g.push({
          node: null,
          shadow: Ue
        }, {
          node: Ue,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(F) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, g = null, R = null, B = null, Z = null;
    if (Dr = !F, Dr && (F = "<!-->"), typeof F != "string" && !X(F) && (F = ku(F), typeof F != "string"))
      throw Ar("dirty is not a string, aborting");
    if (!t.isSupported)
      return F;
    H ? (_ = re, x = le) : Cr(f), (be.uponSanitizeElement.length > 0 || be.uponSanitizeAttribute.length > 0) && (_ = Et(_)), be.uponSanitizeAttribute.length > 0 && (x = Et(x)), t.removed = [];
    const ae = jt && typeof F != "string" && X(F);
    if (ae) {
      wa(F);
      const gt = Be(F);
      if (typeof gt == "string") {
        const _t = Ne(gt);
        if (!_[_t] || D[_t])
          throw jr(F), Ar("root node is forbidden and cannot be sanitized in-place");
      }
      if (C(F))
        throw jr(F), Ar("root node is clobbered and cannot be sanitized in-place");
      try {
        Ca(F);
      } catch (_t) {
        throw jr(F), _t;
      }
    } else if (X(F))
      g = In("<!---->"), R = g.ownerDocument.importNode(F, !0), R.nodeType === Ct.element && R.nodeName === "BODY" || R.nodeName === "HTML" ? g = R : g.appendChild(R), Ca(R);
    else {
      if (!fe && !ee && !N && // eslint-disable-next-line unicorn/prefer-includes
      F.indexOf("<") === -1)
        return Ee && we ? De(F) : F;
      if (g = In(F), !g)
        return fe ? null : we ? Le : "";
    }
    g && ye && qt(g.firstChild);
    const Re = ae ? F : g;
    try {
      const gt = tn(Re);
      for (; B = gt.nextNode(); )
        Ci(B, Re), xi(B), u(B.content) && Mn(B.content);
    } catch (gt) {
      throw ae && (jr(F), Rr(t.removed, (_t) => {
        _t.element && Vr(_t.element);
      })), gt;
    }
    if (ae)
      return Rr(t.removed, (gt) => {
        gt.element && Vr(gt.element);
      }), ee && E(F), F;
    if (fe) {
      if (ee && E(g), $e)
        for (Z = Ae.call(g.ownerDocument); g.firstChild; )
          Z.appendChild(g.firstChild);
      else
        Z = g;
      return (x.shadowroot || x.shadowrootmode) && (Z = Ze.call(n, Z, !0)), Z;
    }
    let Ue = N ? g.outerHTML : g.innerHTML;
    return N && _["!doctype"] && g.ownerDocument && g.ownerDocument.doctype && g.ownerDocument.doctype.name && Qe($u, g.ownerDocument.doctype.name) && (Ue = "<!DOCTYPE " + g.ownerDocument.doctype.name + `>
` + Ue), ee && (Ue = Er(Ue)), Ee && we ? De(Ue) : Ue;
  }, t.setConfig = function() {
    let F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Cr(F), H = !0, re = _, le = x;
  }, t.clearConfig = function() {
    br = null, H = !1, re = null, le = null, Ee = nt, Le = "";
  }, t.isValidAttribute = function(F, f, g) {
    br || Cr({});
    const R = Ne(F), B = Ne(f);
    return Ei(R, B, g);
  }, t.addHook = function(F, f) {
    typeof f == "function" && wt(be, F) && an(be[F], f);
  }, t.removeHook = function(F, f) {
    if (wt(be, F)) {
      if (f !== void 0) {
        const g = wu(be[F], f);
        return g === -1 ? void 0 : Su(be[F], g, 1)[0];
      }
      return ls(be[F]);
    }
  }, t.removeHooks = function(F) {
    wt(be, F) && (be[F] = []);
  }, t.removeAllHooks = function() {
    be = _s();
  }, t;
}
var Ku = Ll();
function Gu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var za, vs;
function Yu() {
  if (vs) return za;
  vs = 1;
  var e = /["'&<>]/;
  za = t;
  function t(r) {
    var n = "" + r, a = e.exec(n);
    if (!a)
      return n;
    var i, c = "", d = 0, h = 0;
    for (d = a.index; d < n.length; d++) {
      switch (n.charCodeAt(d)) {
        case 34:
          i = "&quot;";
          break;
        case 38:
          i = "&amp;";
          break;
        case 39:
          i = "&#39;";
          break;
        case 60:
          i = "&lt;";
          break;
        case 62:
          i = "&gt;";
          break;
        default:
          continue;
      }
      h !== d && (c += n.substring(h, d)), h = d + 1, c += i;
    }
    return h !== d ? c + n.substring(h, d) : c;
  }
  return za;
}
var Xu = Yu();
const ws = /* @__PURE__ */ Gu(Xu);
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
function l(e, t, r, n, a) {
  const i = typeof r == "object" ? r : void 0, c = typeof n == "number" ? n : typeof r == "number" ? r : void 0, d = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof n == "object" ? n : {}
  }, h = (W) => W, v = (d.sanitize ? Ku.sanitize : h) || h, y = d.escape ? ws : h, T = (W) => typeof W == "string" || typeof W == "number", I = (W, ce, se) => W.replace(/%n/g, "" + se).replace(/{([^{}]*)}/g, (z, U) => {
    if (ce === void 0 || !(U in ce))
      return y(z);
    const V = ce[U];
    return T(V) ? y(`${V}`) : typeof V == "object" && T(V.value) ? (V.escape !== !1 ? ws : h)(`${V.value}`) : y(z);
  });
  let ie = (a?.bundle ?? Ju(e)).translations[t] || t;
  return ie = Array.isArray(ie) ? ie[0] : ie, v(typeof i == "object" || c !== void 0 ? I(
    ie,
    i,
    c
  ) : ie);
}
const Zu = { class: "library-vue-catalogue" }, Qu = {
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, ed = { class: "library-catalogue-header" }, td = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, rd = { id: "library-catalogue-heading" }, nd = { class: "library-muted" }, ad = ["aria-label"], id = { class: "library-catalogue-actions-list" }, sd = ["href"], ld = ["href"], od = ["href"], cd = ["href"], ud = {
  class: "library-actions-health-overview",
  "aria-labelledby": "library-actions-health-heading"
}, dd = { class: "library-muted library-catalogue-eyebrow" }, fd = { id: "library-actions-health-heading" }, pd = { class: "library-muted" }, hd = {
  key: 0,
  class: "library-muted"
}, md = {
  key: 1,
  class: "library-notice"
}, bd = {
  key: 2,
  class: "library-muted"
}, yd = {
  key: 0,
  class: "library-muted"
}, gd = {
  key: 1,
  class: "library-muted"
}, _d = {
  key: 2,
  class: "library-muted"
}, vd = ["disabled"], wd = { class: "library-actions-health-links" }, Sd = ["href"], Cd = ["href"], Ed = ["href"], Td = ["href"], xd = { class: "library-actions-health-grid" }, Ad = { class: "library-import-health-number" }, kd = { class: "library-import-health-number" }, Rd = { class: "library-muted" }, Od = { class: "library-muted" }, Nd = { class: "library-muted" }, Pd = {
  key: 3,
  class: "library-import-health-examples"
}, Id = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, Ud = { class: "library-muted" }, Md = ["href"], Ld = ["href"], Dd = ["action"], Fd = ["value"], $d = {
  type: "submit",
  class: "button secondary"
}, Hd = { class: "library-muted" }, jd = ["href"], Vd = ["action"], qd = ["value"], Bd = {
  type: "submit",
  class: "button secondary"
}, zd = {
  key: 0,
  class: "library-notice library-batch-metadata-apply-result"
}, Wd = {
  key: 1,
  class: "library-home-dashboard",
  "aria-labelledby": "library-home-dashboard-heading"
}, Kd = { class: "library-home-hero-card" }, Gd = { class: "library-muted library-catalogue-eyebrow" }, Yd = { id: "library-home-dashboard-heading" }, Xd = { class: "library-muted" }, Jd = { class: "library-home-hero-actions" }, Zd = ["href"], Qd = ["aria-label"], ef = ["onClick"], tf = ["src", "alt"], rf = {
  key: 0,
  class: "library-home-rediscover"
}, nf = { class: "library-muted library-catalogue-eyebrow" }, af = { class: "library-muted" }, sf = {
  class: "library-useful-views",
  "aria-labelledby": "library-useful-views-heading"
}, lf = { class: "library-useful-views-copy" }, of = { class: "library-muted library-catalogue-eyebrow" }, cf = { id: "library-useful-views-heading" }, uf = { class: "library-muted" }, df = { class: "library-muted" }, ff = ["aria-label"], pf = ["href", "title"], hf = { class: "library-useful-view-count" }, mf = {
  class: "library-weak-metadata-dashboard",
  "aria-labelledby": "library-weak-metadata-heading"
}, bf = { class: "library-weak-metadata-dashboard-copy" }, yf = { class: "library-muted library-catalogue-eyebrow" }, gf = { id: "library-weak-metadata-heading" }, _f = { class: "library-muted" }, vf = ["aria-label"], wf = ["href", "title"], Sf = {
  key: 2,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, Cf = { class: "library-metadata-review-workbench-copy" }, Ef = { class: "library-muted library-catalogue-eyebrow" }, Tf = { id: "library-metadata-review-workbench-heading" }, xf = { class: "library-muted" }, Af = {
  key: 0,
  class: "library-metadata-review-card"
}, kf = { class: "library-muted" }, Rf = { class: "library-metadata-review-fields" }, Of = ["action"], Nf = ["value"], Pf = ["value"], If = {
  type: "submit",
  class: "button secondary"
}, Uf = { class: "library-metadata-review-actions" }, Mf = ["href"], Lf = ["href"], Df = {
  key: 1,
  class: "library-muted"
}, Ff = ["href"], $f = {
  class: "library-saved-collections",
  "aria-labelledby": "library-saved-collections-heading"
}, Hf = { class: "library-saved-collections-copy" }, jf = { class: "library-muted library-catalogue-eyebrow" }, Vf = { id: "library-saved-collections-heading" }, qf = { class: "library-muted" }, Bf = ["action"], zf = ["value"], Wf = ["value"], Kf = ["placeholder", "disabled"], Gf = ["disabled"], Yf = {
  key: 0,
  class: "library-muted"
}, Xf = ["aria-label"], Jf = ["href"], Zf = ["action"], Qf = ["value"], ep = {
  type: "submit",
  class: "button tertiary"
}, tp = ["aria-label"], rp = ["name", "value"], np = { class: "library-quick-search-row" }, ap = { class: "library-quick-filter-search" }, ip = ["aria-label"], sp = { class: "library-quick-filter-options" }, lp = { class: "library-quick-filter-option-grid" }, op = { value: "title" }, cp = { value: "recent" }, up = { value: "publicationDate" }, dp = { value: "publication" }, fp = { value: "lastOpened" }, pp = { value: "format" }, hp = { value: "" }, mp = { value: "1" }, bp = ["value"], yp = ["value"], gp = ["aria-label"], _p = ["aria-label"], vp = { class: "library-filter-panel" }, wp = { class: "library-filter-panel-summary" }, Sp = ["aria-label"], Cp = {
  id: "library-search-scope",
  class: "library-muted library-search-scope"
}, Ep = { value: "" }, Tp = ["value"], xp = { value: "" }, Ap = ["value"], kp = { value: "" }, Rp = ["value"], Op = { value: "" }, Np = ["value"], Pp = { value: "" }, Ip = ["value"], Up = { value: "" }, Mp = ["value"], Lp = { value: "" }, Dp = ["value"], Fp = { value: "" }, $p = ["value"], Hp = { value: "" }, jp = ["value"], Vp = { value: "" }, qp = ["value"], Bp = { value: "" }, zp = { value: "1" }, Wp = { value: "" }, Kp = { value: "1" }, Gp = { value: "title" }, Yp = { value: "recent" }, Xp = { value: "publicationDate" }, Jp = { value: "publication" }, Zp = { value: "lastOpened" }, Qp = { value: "format" }, eh = ["value"], th = ["value"], rh = ["aria-label"], nh = ["aria-label"], ah = ["href"], ih = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, sh = { class: "library-muted library-catalogue-eyebrow" }, lh = { id: "library-discovery-heading" }, oh = { class: "library-muted" }, ch = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, uh = { key: 0 }, dh = { key: 1 }, fh = { key: 2 }, ph = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, hh = { key: 0 }, mh = { key: 1 }, bh = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, yh = { class: "library-muted library-catalogue-eyebrow" }, gh = { id: "library-publication-issue-groups-heading" }, _h = { class: "library-muted" }, vh = {
  class: "library-publication-issue-strip",
  "aria-label": "Visual issue strip"
}, wh = ["href"], Sh = {
  key: 0,
  class: "library-notice"
}, Ch = { class: "library-publication-issue-label" }, Eh = ["href"], Th = { class: "library-muted" }, xh = {
  key: 1,
  class: "library-publication-unknown-issues"
}, Ah = { class: "library-muted" }, kh = {
  href: "/apps/library/",
  class: "button secondary"
}, Rh = {
  class: "library-view-mode-toggle",
  "aria-label": "Cover view mode"
}, Oh = { class: "library-muted" }, Nh = ["aria-pressed"], Ph = ["aria-pressed"], Ih = ["aria-pressed"], Uh = { class: "library-catalogue-status-row" }, Mh = { class: "library-muted library-filter-result-summary" }, Lh = { key: 0 }, Dh = { href: "?" }, Fh = ["aria-label"], $h = { class: "library-pagination-range" }, Hh = { key: 0 }, jh = ["href"], Vh = {
  key: 1,
  class: "library-muted"
}, qh = ["href"], Bh = {
  key: 3,
  class: "library-muted"
}, zh = {
  class: "library-catalogue-utility-row",
  "aria-label": "Catalogue tools and discovery shortcuts"
}, Wh = ["aria-label"], Kh = { class: "library-settings-count-badge" }, Gh = ["action"], Yh = ["value"], Xh = ["name", "value"], Jh = ["placeholder"], Zh = {
  type: "submit",
  class: "button primary"
}, Qh = { class: "library-muted" }, em = ["action"], tm = ["value"], rm = ["name", "value"], nm = ["placeholder"], am = {
  type: "submit",
  class: "button secondary"
}, im = { class: "library-muted" }, sm = ["action"], lm = ["value"], om = ["name", "value"], cm = {
  type: "submit",
  class: "button secondary"
}, um = { class: "library-muted" }, dm = ["action"], fm = ["value"], pm = ["name", "value"], hm = { name: "bulkEditField" }, mm = { value: "publicationType" }, bm = { value: "subtitle" }, ym = { value: "creators" }, gm = { value: "publication" }, _m = { value: "publicationDate" }, vm = { value: "language" }, wm = { value: "publisher" }, Sm = { value: "genres" }, Cm = { value: "classifications" }, Em = {
  type: "submit",
  class: "button secondary"
}, Tm = { class: "library-muted" }, xm = ["action"], Am = ["value"], km = ["name", "value"], Rm = {
  type: "submit",
  class: "button secondary"
}, Om = { class: "library-muted" }, Nm = { class: "library-discovery-shortcuts" }, Pm = { class: "library-discovery-shortcut-grid" }, Im = {
  key: 0,
  class: "library-periodical-groups",
  "aria-labelledby": "library-periodical-groups-heading"
}, Um = { id: "library-periodical-groups-heading" }, Mm = { class: "library-muted" }, Lm = ["href"], Dm = { class: "library-muted" }, Fm = {
  key: 1,
  class: "library-periodical-groups library-periodical-groups-empty",
  "aria-labelledby": "library-periodical-groups-empty-heading"
}, $m = { id: "library-periodical-groups-empty-heading" }, Hm = { class: "library-muted" }, jm = {
  key: 2,
  class: "library-year-groups",
  "aria-labelledby": "library-year-groups-heading"
}, Vm = { id: "library-year-groups-heading" }, qm = ["href"], Bm = {
  key: 3,
  class: "library-creator-groups",
  "aria-labelledby": "library-creator-groups-heading"
}, zm = { id: "library-creator-groups-heading" }, Wm = ["href"], Km = ["aria-label"], Gm = ["href", "aria-label"], Ym = { class: "library-muted" }, Xm = { class: "library-empty-actions" }, Jm = ["href"], Zm = { class: "library-muted" }, Qm = { class: "library-muted" }, eb = { class: "library-empty-actions" }, tb = ["href"], rb = { class: "library-muted" }, nb = { class: "library-empty-actions" }, ab = ["href"], ib = {
  href: "?",
  class: "button primary"
}, sb = { class: "library-muted" }, lb = { class: "library-empty-actions" }, ob = ["href"], cb = ["href", "aria-label"], ub = { class: "library-cover-frame" }, db = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, fb = ["src", "alt", "onLoad", "onError"], pb = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, hb = ["action", "onSubmit"], mb = ["value"], bb = ["value"], yb = ["aria-pressed", "title", "aria-label", "onClick"], gb = { class: "library-cover-summary" }, _b = { class: "library-cover-primary" }, vb = ["aria-label"], wb = ["href"], Sb = ["onToggle"], Cb = ["aria-label"], Eb = { class: "library-cover-meta" }, Tb = {
  key: 0,
  class: "library-creator"
}, xb = { class: "library-cover-detail-list" }, Ab = { class: "library-cover-detail-chip" }, kb = {
  key: 0,
  class: "library-cover-detail-chip"
}, Rb = {
  key: 1,
  class: "library-cover-detail-chip"
}, Ob = {
  key: 2,
  class: "library-cover-detail-chip"
}, Nb = {
  key: 3,
  class: "library-cover-detail-chip"
}, Pb = {
  key: 4,
  class: "library-cover-detail-chip"
}, Ib = {
  key: 5,
  class: "library-cover-detail-chip"
}, Ub = {
  key: 6,
  class: "library-cover-detail-chip"
}, Mb = {
  key: 1,
  class: "library-muted library-cover-description"
}, Lb = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, Db = { key: 0 }, Fb = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, $b = {
  key: 0,
  class: "library-muted"
}, Hb = { class: "library-cover-actions" }, jb = ["href"], Vb = ["href"], qb = ["onClick"], Bb = ["href"], zb = ["aria-label"], Wb = { class: "library-pagination-range" }, Kb = { key: 0 }, Gb = ["href"], Yb = {
  key: 1,
  class: "library-muted"
}, Xb = ["href"], Jb = {
  key: 3,
  class: "library-muted"
}, Zb = {
  key: 9,
  class: "library-detail-drawer",
  "aria-labelledby": "library-detail-drawer-heading",
  "aria-describedby": "library-detail-drawer-keyboard-hint",
  role: "dialog",
  "aria-modal": "true"
}, Qb = {
  id: "library-detail-drawer-keyboard-hint",
  class: "library-muted library-detail-drawer-keyboard-hint"
}, ey = ["src", "alt"], ty = { class: "library-muted library-catalogue-eyebrow" }, ry = { id: "library-detail-drawer-heading" }, ny = {
  key: 0,
  class: "library-creator"
}, ay = {
  key: 1,
  class: "library-muted"
}, iy = { class: "library-detail-drawer-facts" }, sy = { key: 0 }, ly = { key: 1 }, oy = { key: 2 }, cy = { class: "library-detail-drawer-actions" }, uy = ["href"], dy = ["href"], fy = ["aria-label"], py = ["disabled"], hy = ["disabled"], my = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, r = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], n = [25, 50, 100, 250, 500], a = /* @__PURE__ */ ar({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), i = /* @__PURE__ */ ar((a.items || []).map((E) => ({ ...E }))), c = q(() => i), d = q(() => a.shelves || []), h = q(() => a.formats || []), v = q(() => a.publications || []), y = q(() => a.publicationSummaries || []), T = q(() => a.publicationIssueContext || null), I = q(() => a.publicationYears || []), j = q(() => a.creators || []), ie = q(() => a.scanStatuses || []), W = q(() => a.workflowStatuses || []), ce = q(() => a.genres || []), se = q(() => a.classifications || []), z = q(() => a.cataloguePagination || {
      page: 1,
      limit: 100,
      total: c.value.length,
      visible: c.value.length,
      from: c.value.length > 0 ? 1 : 0,
      to: c.value.length,
      previousUrl: "",
      nextUrl: ""
    }), U = /* @__PURE__ */ ar({
      q: a.activeFilters?.q || "",
      view: a.activeFilters?.view || "compact",
      type: a.activeFilters?.type || "",
      publication: a.activeFilters?.publication || "",
      year: a.activeFilters?.year || "",
      creator: a.activeFilters?.creator || "",
      format: a.activeFilters?.format || "",
      tag: a.activeFilters?.tag || "",
      shelf: a.activeFilters?.shelf || "",
      status: a.activeFilters?.status || "",
      workflowStatus: a.activeFilters?.workflowStatus || "",
      genre: a.activeFilters?.genre || "",
      classification: a.activeFilters?.classification || "",
      scannerConflicts: a.activeFilters?.scannerConflicts || "",
      starred: a.activeFilters?.starred || "",
      needsMetadata: a.activeFilters?.needsMetadata || "",
      coverReview: a.activeFilters?.coverReview || "",
      noCreator: a.activeFilters?.noCreator || "",
      noPublication: a.activeFilters?.noPublication || "",
      noDate: a.activeFilters?.noDate || "",
      titleFromFilename: a.activeFilters?.titleFromFilename || "",
      noDescription: a.activeFilters?.noDescription || "",
      unsupportedContainer: a.activeFilters?.unsupportedContainer || "",
      weakMetadata: a.activeFilters?.weakMetadata || "",
      unreviewedImports: a.activeFilters?.unreviewedImports || "",
      sort: a.activeFilters?.sort || "title"
    }), V = q(() => a.settingsUrl || ""), oe = q(() => a.requestToken || ""), Me = q(() => a.metadataExportUrl || ""), Pe = q(() => a.metadataSidecarManifestUrl || ""), Be = q(() => a.metadataSidecarBundleUrl || ""), Ee = q(() => a.catalogueEndpointUrl || "/apps/library/catalogue"), Le = q(() => a.batchTagUrl || "/apps/library/bulk/tags"), nt = q(() => a.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), pt = q(() => a.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Xe = q(() => a.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), xt = q(() => a.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), De = q(() => a.scannerConflictReviewUrl || "?scannerConflicts=1"), Fe = q(() => a.metadataErrorsUrl || "/apps/library/health/metadata-errors"), _e = q(() => a.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), de = q(() => a.coverProbeUrl || "/apps/library/health/covers/probe"), ze = q(() => a.importHealthSummaryUrl || "/apps/library/health/import-summary"), ve = /* @__PURE__ */ ar({
      summary: a.importHealthSummary || {},
      loaded: !!(a.importHealthSummary && Object.keys(a.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), Ae = q(() => ve.summary || {}), We = q(() => {
      const E = Number(Ae.value.generatedAt || 0);
      return E > 0 ? new Date(E * 1e3).toLocaleString() : "";
    }), Ze = q(() => Ae.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), be = q(() => Ae.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), Nt = q(() => Ae.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), Ke = q(() => Ae.value.coverSupportMatrix || Nt.value.byFormat || []), ht = q(() => Ae.value.environmentCapabilities || {}), St = q(() => a.discoveryPage === "publication"), At = q(() => a.discoveryPage === "year"), at = q(() => a.discoveryPage === "creator"), it = q(() => St.value || At.value || at.value), m = q(() => a.discoveryTitle || U.publication || U.year || U.creator || ""), b = q(() => it.value ? m.value : l("library", "Publication catalogue")), _ = q(() => at.value ? l("library", "Creator") : At.value ? l("library", "Publication year") : l("library", "Publication / series")), O = q(() => Number(a.rootCount || 0)), x = q(() => Number(a.enabledRootCount || 0)), k = q(() => O.value === 0), M = q(() => O.value > 0 && x.value === 0), D = q(() => N.value.length > 0), L = {
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
      scannerConflicts: "Scanner conflicts",
      starred: "Starred",
      needsMetadata: "Needs metadata",
      coverReview: "Cover review",
      noCreator: "No creator",
      noPublication: "No publication/series",
      noDate: "Missing date",
      titleFromFilename: "Filename-derived title",
      noDescription: "No description",
      unsupportedContainer: "Unsupported archive/container",
      weakMetadata: "Weak metadata",
      unreviewedImports: "Unreviewed imports"
    }, A = q(() => {
      if (typeof window > "u") return "";
      const E = new URLSearchParams(window.location.search);
      if (E.get("batchMetadataApplyResult") !== "1") return "";
      const C = E.get("batchMetadataField") || "field", u = E.get("batchMetadataApplied") || "0", X = E.get("batchMetadataUnchanged") || "0", Te = E.get("batchMetadataSkipped") || "0";
      return l("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: u, field: C, unchanged: X, skipped: Te });
    }), G = q(() => a.savedCollections || []), $ = q(() => a.savedCollectionSaveUrl || "/apps/library/collections"), K = q(() => a.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Q = ["compact", "gallery", "shelf"], ee = q(() => Q.includes(U.view) ? U.view : "compact"), P = q(() => ({
      "library-cover-gallery--compact": ee.value === "compact",
      "library-cover-gallery--gallery": ee.value === "gallery",
      "library-cover-gallery--shelf": ee.value === "shelf"
    })), N = q(() => Object.entries(L).map(([E, C]) => ({ key: E, label: C, value: U[E] || "" })).filter((E) => String(E.value).trim() !== "")), H = q(() => Object.entries(U).filter(([E, C]) => !["q", "sort", "starred"].includes(E) && String(C || "").trim() !== "").map(([E, C]) => ({ key: E, value: C }))), re = q(() => Object.entries(U).filter(([E, C]) => String(C || "").trim() !== "").map(([E, C]) => ({ key: E, value: C }))), le = /* @__PURE__ */ ar({}), ye = /* @__PURE__ */ ar({}), fe = q(() => c.value.filter((E) => E.starred || E.workflowStatus === "reading" || E.lastOpenedAt).slice(0, 5)), $e = q(() => [...c.value].slice(0, 6)), we = q(() => c.value.find((E) => E.description || E.publication || E.creators) || c.value[0] || null), Ie = q(() => !it.value && c.value.length > 0), he = /* @__PURE__ */ Pi(null), mt = q(() => he.value ? c.value.findIndex((E) => E.id === he.value.id) : -1), kt = q(() => mt.value > 0 ? c.value[mt.value - 1] : null), jt = q(() => mt.value >= 0 && mt.value < c.value.length - 1 ? c.value[mt.value + 1] : null), Pt = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], je = q(() => {
      const E = U.scannerConflicts === "1" || String(U.weakMetadata || "").trim() !== "", C = E ? c.value.find((u) => Jt(u).length > 0) : null;
      return {
        enabled: E,
        item: C,
        fields: C ? Jt(C) : [],
        reviewNextUrl: De.value,
        skipUrl: z.value.nextUrl || De.value
      };
    });
    function Vt(E) {
      return Array.isArray(E) ? JSON.stringify(E) : E == null ? "" : String(E);
    }
    function Jt(E) {
      const C = E.fieldValues || {}, u = E.fieldSources || {};
      return Pt.filter((X) => Object.prototype.hasOwnProperty.call(C, X)).map((X) => {
        const Te = Vt(E[X]), yt = Vt(C[X]), tr = Vt(u[X] || E.metadataSource || "scanner"), Sa = tr.includes("filename") || tr.includes("path") ? yt : "", Un = tr.includes("sidecar") ? yt : "";
        return { field: X, currentValue: Te, scannerCandidate: yt, pathTemplateCandidate: Sa, sidecarValue: Un, sourceProvenance: tr, differs: Te !== yt };
      }).filter((X) => X.differs);
    }
    function It(E) {
      he.value = E;
    }
    function bt() {
      he.value = null;
    }
    function Zt(E) {
      E && (he.value = E);
    }
    const st = /* @__PURE__ */ Pi(null);
    let Ut = null;
    function lt(E) {
      const C = new URLSearchParams(new FormData(E));
      for (const u of Array.from(C.keys()))
        String(C.get(u) || "").trim() === "" && C.delete(u);
      return C.delete("page"), C.get("view") === "compact" && C.delete("view"), C;
    }
    function hr(E) {
      i.splice(0, i.length, ...(E.items || []).map((C) => ({ ...C })));
      for (const C of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(E, C) && (a[C] = E[C]);
      Object.assign(U, E.activeFilters || {});
    }
    async function Dr(E = !1) {
      if (!(ve.loading || ve.refreshing)) {
        E ? ve.refreshing = !0 : ve.loading = !0, ve.error = "";
        try {
          const C = await fetch(`${ze.value}${E ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!C.ok)
            throw new Error(`Import health request failed: ${C.status}`);
          ve.summary = await C.json(), ve.loaded = !0;
        } catch (C) {
          ve.error = C?.message || String(C);
        } finally {
          ve.loading = !1, ve.refreshing = !1;
        }
      }
    }
    async function en(E) {
      E && E.currentTarget && E.currentTarget.open !== !0 || ve.loaded || ve.loading || await Dr(!1);
    }
    async function ha() {
      await Dr(!0);
    }
    async function Qt(E) {
      const C = E?.currentTarget?.tagName === "FORM" ? E.currentTarget : E?.currentTarget?.form;
      if (!C) return;
      const X = lt(C).toString(), Te = X ? `?${X}` : "", yt = await fetch(Ee.value + Te, {
        headers: { Accept: "application/json" },
        credentials: "same-origin"
      });
      if (!yt.ok) {
        C.submit();
        return;
      }
      hr(await yt.json()), history.replaceState({}, "", X ? `?${X}` : window.location.pathname);
    }
    function Fr(E) {
      Qt(E);
    }
    function An(E) {
      window.clearTimeout(Ut), Ut = window.setTimeout(() => Fr(E), 350);
    }
    function $r(E) {
      const C = new URLSearchParams();
      for (const [X, Te] of Object.entries(U)) {
        const yt = String(Te || "").trim();
        yt !== "" && X !== E && !(X === "sort" && yt === "title") && !(X === "view" && yt === "compact") && C.set(X, yt);
      }
      const u = C.toString();
      return u ? `?${u}` : "?";
    }
    function ma() {
      return $r("q");
    }
    const mr = q(() => a.smartViewCounts || {}), kn = q(() => {
      const E = {};
      for (const [C, u] of Object.entries(U)) {
        const X = String(u || "").trim();
        X !== "" && !(C === "sort" && X === "title") && (E[C] = X);
      }
      return E;
    }), ba = q(() => JSON.stringify(kn.value)), Ne = q(() => Object.keys(kn.value).length > 0), br = q(() => [
      { key: "recently-opened", label: "Recently opened", description: "Continue from the publications you opened through Library.", query: "sort=lastOpened", filters: { sort: "lastOpened" } },
      { key: "starred", label: "Starred", description: "Your marked publications and reference items.", query: "starred=1", filters: { starred: "1" } },
      { key: "to-read", label: "To read", description: "Publications queued for later.", query: "workflowStatus=to-read", filters: { workflowStatus: "to-read" } },
      { key: "reading", label: "Reading", description: "Publications currently in progress.", query: "workflowStatus=reading", filters: { workflowStatus: "reading" } },
      { key: "finished", label: "Finished", description: "Completed publications.", query: "workflowStatus=finished", filters: { workflowStatus: "finished" } },
      { key: "needs-action", label: "Needs action", description: "Items that need a cleanup or follow-up decision.", query: "workflowStatus=needs-action", filters: { workflowStatus: "needs-action" } },
      { key: "needs-metadata", label: "Needs metadata", description: "Items with missing core fields, extraction errors, or filename-only metadata.", query: "needsMetadata=1", filters: { needsMetadata: "1" } },
      { key: "scanner-conflicts", label: "Scanner conflicts", description: "Rows where current metadata differs from scanner candidates.", query: "scannerConflicts=1", filters: { scannerConflicts: "1" } },
      { key: "metadata-errors", label: "Metadata errors", description: "Files whose metadata extraction needs review.", query: "status=metadata_error", filters: { status: "metadata_error" } },
      { key: "placeholder-covers", label: "Placeholder covers", description: "Likely placeholder-cover candidates without a manual cover override.", query: "coverReview=placeholder", filters: { coverReview: "placeholder" } },
      { key: "no-creator", label: "No creator", description: "Publications without creator metadata.", query: "noCreator=1", filters: { noCreator: "1" } },
      { key: "no-publication", label: "No publication/series", description: "Items without publication, series, periodical or collection metadata.", query: "noPublication=1", filters: { noPublication: "1" } },
      { key: "missing-date", label: "Missing date", description: "Items without a publication date or year.", query: "noDate=1", filters: { noDate: "1" } },
      { key: "title-from-filename", label: "Filename-derived title", description: "Rows whose title still comes from filename/path parsing.", query: "titleFromFilename=1", filters: { titleFromFilename: "1" } },
      { key: "weak-filename-metadata", label: "Weak filename metadata", description: "Items whose metadata still depends on filename/folder parsing.", query: "weakMetadata=filename", filters: { weakMetadata: "filename" } },
      { key: "no-description", label: "No description", description: "Rows without summary or description text.", query: "noDescription=1", filters: { noDescription: "1" } },
      { key: "unsupported-containers", label: "Unsupported archive/container", description: "Archive/container formats that Library cannot inspect deeply yet.", query: "unsupportedContainer=1", filters: { unsupportedContainer: "1" } },
      { key: "unreviewed-imports", label: "Unreviewed imports", description: "Scanner-created catalogue rows not yet touched by user review.", query: "unreviewedImports=1", filters: { unreviewedImports: "1" } }
    ]), ya = q(() => [
      { key: "no-creator", label: "Missing creator", description: "Creator field is empty.", filters: { noCreator: "1" } },
      { key: "no-publication", label: "Missing publication/series", description: "No publication, series, periodical or collection.", filters: { noPublication: "1" } },
      { key: "missing-date", label: "Missing date", description: "No publication year/date is indexed.", filters: { noDate: "1" } },
      { key: "title-from-filename", label: "Filename-derived title", description: "Title was inferred from the source path.", filters: { titleFromFilename: "1" } },
      { key: "weak-filename-metadata", label: "Filename/path-derived metadata", description: "At least one indexed field still depends on filename parsing.", filters: { weakMetadata: "filename" } },
      { key: "placeholder-covers", label: "Placeholder cover", description: "Likely placeholder-cover candidates.", filters: { coverReview: "placeholder" } },
      { key: "scanner-conflicts", label: "Scanner conflict", description: "Current metadata differs from scanner candidates.", filters: { scannerConflicts: "1" } },
      { key: "metadata-errors", label: "Metadata extraction error", description: "Scanner recorded a metadata extraction error.", filters: { status: "metadata_error" } },
      { key: "no-description", label: "No description", description: "No summary/description text is indexed.", filters: { noDescription: "1" } },
      { key: "unsupported-containers", label: "Unsupported archive/container", description: "Container type needs manual inspection or future extractor support.", filters: { unsupportedContainer: "1" } }
    ]);
    function Hr(E) {
      if (!Q.includes(E)) return;
      U.view = E;
      const C = new URLSearchParams(window.location.search);
      E === "compact" ? C.delete("view") : C.set("view", E), C.delete("page"), history.replaceState({}, "", C.toString() ? `?${C.toString()}` : window.location.pathname);
    }
    function Cr(E) {
      const C = new URLSearchParams(window.location.search);
      for (const X of Object.keys(L))
        C.delete(X);
      C.delete("page");
      for (const [X, Te] of Object.entries(E))
        String(Te || "").trim() !== "" && C.set(X, String(Te));
      const u = C.toString();
      return u ? `?${u}` : "?";
    }
    function Rn(E) {
      return Cr(E || {});
    }
    function On(E) {
      return K.value.replace("__COLLECTION_ID__", encodeURIComponent(String(E || "0")));
    }
    function yr(E) {
      return String(E || "").toUpperCase();
    }
    function Nn(E) {
      return E.nextcloudTags || [];
    }
    function ga(E) {
      return y.value.find((u) => u.publication === E)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(E)}`;
    }
    function _a(E) {
      return a.publicationYearLandingUrls?.[E] || `/apps/library/years/${encodeURIComponent(E)}`;
    }
    function qt(E) {
      return a.creatorLandingUrls?.[E] || `/apps/library/creators/${encodeURIComponent(E)}`;
    }
    function gr(E) {
      return ye[E.id] || "loading";
    }
    function jr(E) {
      ye[E.id] = "loaded";
    }
    function er(E) {
      ye[E.id] = "error";
    }
    function va(E, C) {
      le[E] = !!C?.currentTarget?.open;
    }
    function Vr(E) {
      const C = String(E?.tagName || "").toLowerCase();
      return E?.isContentEditable || ["input", "select", "textarea", "button"].includes(C);
    }
    function Pn(E) {
      E.key !== "/" || E.metaKey || E.ctrlKey || E.altKey || E.shiftKey || Vr(E.target) || (E.preventDefault(), st.value?.focus(), st.value?.select?.());
    }
    function wa(E) {
      E.key !== "Escape" || document.activeElement !== st.value || U.q === "" || (E.preventDefault(), U.q = "", st.value.value = "", window.clearTimeout(Ut), Fr({ currentTarget: st.value }));
    }
    function In(E) {
      return !he.value || E.metaKey || E.ctrlKey || E.altKey ? !1 : E.key === "Escape" ? (E.preventDefault(), bt(), !0) : E.key === "ArrowLeft" && kt.value ? (E.preventDefault(), Zt(kt.value), !0) : E.key === "ArrowRight" && jt.value ? (E.preventDefault(), Zt(jt.value), !0) : !1;
    }
    function tn(E) {
      In(E) || (Pn(E), wa(E));
    }
    sl(() => {
      window.addEventListener("keydown", tn);
    }), ll(() => {
      window.removeEventListener("keydown", tn);
    });
    async function Er(E, C) {
      const u = C?.currentTarget?.closest?.("form") || C?.currentTarget;
      if (!u || !E?.starUrl) return;
      const X = !!E.starred;
      E.starred = !X;
      try {
        (await fetch(E.starUrl, {
          method: "POST",
          body: new FormData(u),
          credentials: "same-origin"
        })).ok || (E.starred = X);
      } catch {
        E.starred = X;
      }
    }
    return (E, C) => (w(), S("div", Zu, [
      s("section", Qu, [
        s("div", ed, [
          s("div", null, [
            it.value ? (w(), S("p", td, o(_.value), 1)) : Y("", !0),
            s("h2", rd, o(b.value), 1),
            s("p", nd, o(it.value ? p(l)("library", "Browse this focused view; use filters only when you need to narrow it further.") : p(l)("library", "Browse as a shelf/gallery first; open the details panel when metadata matters.")), 1)
          ]),
          s("nav", {
            class: "library-catalogue-toolbar",
            "aria-label": p(l)("library", "Library actions")
          }, [
            s("details", {
              class: "library-catalogue-actions-menu",
              onToggle: en
            }, [
              s("summary", null, o(p(l)("library", "Actions")), 1),
              s("div", id, [
                s("a", {
                  href: V.value,
                  class: "button secondary",
                  "aria-label": "Open Library settings"
                }, o(p(l)("library", "Settings")), 9, sd),
                Me.value ? (w(), S("a", {
                  key: 0,
                  href: Me.value,
                  class: "button secondary",
                  "aria-label": "Export corrected metadata"
                }, o(p(l)("library", "Export corrected metadata")), 9, ld)) : Y("", !0),
                Pe.value ? (w(), S("a", {
                  key: 1,
                  href: Pe.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar manifest"
                }, o(p(l)("library", "Sidecar manifest")), 9, od)) : Y("", !0),
                Be.value ? (w(), S("a", {
                  key: 2,
                  href: Be.value,
                  class: "button secondary",
                  "aria-label": "Export sidecar ZIP"
                }, o(p(l)("library", "Sidecar ZIP")), 9, cd)) : Y("", !0),
                s("div", ud, [
                  s("p", dd, o(p(l)("library", "Import health")), 1),
                  s("h3", fd, o(p(l)("library", "Metadata overview")), 1),
                  s("p", pd, o(p(l)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")), 1),
                  ve.loading ? (w(), S("p", hd, o(p(l)("library", "Loading cached metadata overview…")), 1)) : ve.error ? (w(), S("p", md, o(ve.error), 1)) : ve.loaded ? Y("", !0) : (w(), S("p", bd, o(p(l)("library", "Open Actions to load the cached metadata and cover overview.")), 1)),
                  ve.loaded ? (w(), S(te, { key: 3 }, [
                    Ae.value.message ? (w(), S("p", yd, o(Ae.value.message), 1)) : Ae.value.cacheStatus === "missing" ? (w(), S("p", gd, o(p(l)("library", "No cached metadata overview exists yet")), 1)) : Y("", !0),
                    We.value ? (w(), S("p", _d, o(p(l)("library", "Last generated")) + ": " + o(We.value), 1)) : Y("", !0),
                    s("button", {
                      type: "button",
                      class: "button secondary library-import-health-refresh",
                      disabled: ve.refreshing,
                      onClick: ha
                    }, o(ve.refreshing ? p(l)("library", "Refreshing metadata overview…") : p(l)("library", "Refresh metadata overview")), 9, vd),
                    s("div", wd, [
                      s("a", {
                        class: "button secondary",
                        href: Ze.value.reviewUrl || "?status=metadata_error"
                      }, o(p(l)("library", "Review metadata errors")), 9, Sd),
                      s("a", {
                        class: "button secondary",
                        href: Fe.value
                      }, o(p(l)("library", "Full review")), 9, Cd),
                      s("a", {
                        class: "button secondary",
                        href: _e.value
                      }, o(p(l)("library", "Export TSV")), 9, Ed),
                      s("a", {
                        class: "button secondary",
                        href: de.value
                      }, o(p(l)("library", "Probe covers")), 9, Td)
                    ]),
                    s("div", xd, [
                      s("article", null, [
                        s("h4", null, o(p(l)("library", "Metadata errors")), 1),
                        s("p", Ad, o(Ze.value.total || 0), 1),
                        s("ul", null, [
                          (w(!0), S(te, null, me(Ze.value.byExtension, (u) => (w(), S("li", {
                            key: u.extension
                          }, o(yr(u.extension)) + " · " + o(u.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, o(p(l)("library", "Archive/container check")), 1),
                        s("p", kd, o(be.value.mismatches || 0), 1),
                        s("ul", null, [
                          (w(!0), S(te, null, me(be.value.byExtensionAndContainer, (u) => (w(), S("li", {
                            key: `${u.extension}-${u.actualContainerType}`
                          }, o(yr(u.extension)) + " · " + o(u.actualContainerType) + " · " + o(u.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, o(p(l)("library", "Cover health")), 1),
                        s("p", Rd, o(Nt.value.note), 1),
                        s("ul", null, [
                          (w(!0), S(te, null, me(Nt.value.byFormat, (u) => (w(), S("li", {
                            key: `${u.extension}-${u.nextcloudPreview}-${u.libraryCoverRoute}`
                          }, o(yr(u.extension)) + " · nextcloudPreview: " + o(u.nextcloudPreview) + " · libraryCoverRoute: " + o(u.libraryCoverRoute) + " · " + o(u.count), 1))), 128))
                        ])
                      ]),
                      s("article", null, [
                        s("h4", null, o(p(l)("library", "Cover support matrix")), 1),
                        s("p", Od, o(p(l)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1),
                        s("ul", null, [
                          (w(!0), S(te, null, me(Ke.value, (u) => (w(), S("li", {
                            key: `${u.extension}-${u.nextcloudPreview}-${u.libraryCoverRoute}-${u.count}`
                          }, o(yr(u.extension)) + " · Nextcloud/plugin preview: " + o(u.nextcloudPreview) + " · Library extraction: " + o(u.libraryCoverRoute) + " · " + o(u.count), 1))), 128))
                        ]),
                        s("p", Nd, o(p(l)("library", "Extractor tools")) + ": ZIP=" + o(ht.value.phpZipArchive ? "ZipArchive" : "missing") + " · 7z=" + o(ht.value.sevenZipCommand || "missing") + " · RAR=" + o(ht.value.rarCommand || "missing") + " · bsdtar=" + o(ht.value.bsdtarCommand || "missing"), 1)
                      ])
                    ]),
                    Ze.value.examples?.length ? (w(), S("details", Pd, [
                      s("summary", null, o(p(l)("library", "Example files and suggested actions")), 1),
                      s("ul", null, [
                        (w(!0), S(te, null, me(Ze.value.examples, (u) => (w(), S("li", {
                          key: `${u.fileId}-${u.path}`
                        }, [
                          s("code", null, o(u.path), 1),
                          s("span", null, o(u.scanStatus) + " · " + o(u.scanError) + " · " + o(u.actualContainerType), 1),
                          s("strong", null, o(u.suggestedRepairAction), 1)
                        ]))), 128))
                      ])
                    ])) : Y("", !0)
                  ], 64)) : Y("", !0),
                  s("div", Id, [
                    s("article", null, [
                      s("h4", null, o(p(l)("library", "Metadata-error queue")), 1),
                      s("p", Ud, o(p(l)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")), 1),
                      s("a", {
                        class: "button secondary",
                        href: Ze.value.reviewUrl || "?status=metadata_error"
                      }, o(p(l)("library", "Open metadata-error rows")), 9, Md),
                      s("a", {
                        class: "button secondary",
                        href: _e.value
                      }, o(p(l)("library", "Export metadata-error rows")), 9, Ld),
                      s("form", {
                        method: "post",
                        action: Le.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: oe.value
                        }, null, 8, Fd),
                        C[25] || (C[25] = s("input", {
                          type: "hidden",
                          name: "status",
                          value: "metadata_error"
                        }, null, -1)),
                        C[26] || (C[26] = s("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-metadata-error"
                        }, null, -1)),
                        s("button", $d, o(p(l)("library", "Tag metadata-error rows")), 1)
                      ], 8, Dd)
                    ]),
                    s("article", null, [
                      s("h4", null, o(p(l)("library", "Scanner-conflict queue")), 1),
                      s("p", Hd, o(p(l)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")), 1),
                      s("a", {
                        class: "button secondary",
                        href: De.value
                      }, o(p(l)("library", "Open scanner-conflict rows")), 9, jd),
                      s("form", {
                        method: "post",
                        action: Le.value,
                        class: "library-review-queue-tag-form"
                      }, [
                        s("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: oe.value
                        }, null, 8, qd),
                        C[27] || (C[27] = s("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        C[28] || (C[28] = s("input", {
                          type: "hidden",
                          name: "nextcloudTagName",
                          value: "library-scanner-conflict"
                        }, null, -1)),
                        s("button", Bd, o(p(l)("library", "Tag scanner-conflict rows")), 1)
                      ], 8, Vd)
                    ])
                  ])
                ])
              ])
            ], 32)
          ], 8, ad)
        ]),
        A.value ? (w(), S("p", zd, o(A.value), 1)) : Y("", !0),
        Ie.value ? (w(), S("section", Wd, [
          s("article", Kd, [
            s("p", Gd, o(p(l)("library", "Home dashboard")), 1),
            s("h3", Yd, o(p(l)("library", "Continue reading")), 1),
            s("p", Xd, o(p(l)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item without opening admin tools.")), 1),
            s("div", Jd, [
              fe.value[0] ? (w(), S("a", {
                key: 0,
                class: "button primary",
                href: fe.value[0].openUrl
              }, o(p(l)("library", "Read now")), 9, Zd)) : Y("", !0),
              fe.value[0] ? (w(), S("button", {
                key: 1,
                type: "button",
                class: "button secondary",
                onClick: C[0] || (C[0] = (u) => It(fe.value[0]))
              }, o(p(l)("library", "Open details drawer")), 1)) : Y("", !0)
            ])
          ]),
          s("nav", {
            class: "library-home-rail",
            "aria-label": p(l)("library", "Recently added")
          }, [
            s("h4", null, o(p(l)("library", "Recently added")), 1),
            (w(!0), S(te, null, me($e.value, (u) => (w(), S("button", {
              key: `recent-${u.id}`,
              type: "button",
              class: "library-home-mini-card",
              onClick: (X) => It(u)
            }, [
              s("img", {
                src: u.coverUrl,
                alt: `Cover for ${u.title}`,
                loading: "lazy"
              }, null, 8, tf),
              s("span", null, o(u.title), 1)
            ], 8, ef))), 128))
          ], 8, Qd),
          we.value ? (w(), S("article", rf, [
            s("p", nf, o(p(l)("library", "Rediscover")), 1),
            s("strong", null, o(we.value.title), 1),
            s("span", af, o(we.value.creators || we.value.publication || we.value.cachedPath), 1),
            s("button", {
              type: "button",
              class: "button secondary",
              onClick: C[1] || (C[1] = (u) => It(we.value))
            }, o(p(l)("library", "Peek")), 1)
          ])) : Y("", !0)
        ])) : Y("", !0),
        s("section", sf, [
          s("div", lf, [
            s("p", of, o(p(l)("library", "Useful views")), 1),
            s("h3", cf, o(p(l)("library", "Useful views")), 1),
            s("p", uf, o(p(l)("library", "One-click smart views reuse normal catalogue filters, so active chips still explain what you are seeing.")), 1),
            s("p", df, o(p(l)("library", "Empty useful views mean no current catalogue items match that saved direction yet; add metadata, star items, update workflow status, or run a scan to create matches.")), 1)
          ]),
          s("nav", {
            class: "library-useful-view-links",
            "aria-label": p(l)("library", "Built-in useful catalogue views")
          }, [
            (w(!0), S(te, null, me(br.value, (u) => (w(), S("a", {
              key: u.key,
              class: "library-useful-view-chip",
              href: Cr(u.filters),
              title: u.description
            }, [
              s("strong", null, o(p(l)("library", u.label)), 1),
              s("span", null, o(p(l)("library", u.description)), 1),
              s("small", hf, o(Number(mr.value[u.key] || 0)), 1)
            ], 8, pf))), 128))
          ], 8, ff)
        ]),
        s("section", mf, [
          s("div", bf, [
            s("p", yf, o(p(l)("library", "Metadata cleanup")), 1),
            s("h3", gf, o(p(l)("library", "Weak metadata cockpit")), 1),
            s("p", _f, o(p(l)("library", "Counts are derived from indexed metadata and scanner provenance, not manual lists; compact cards stay browse-first while Details carries repair actions.")), 1)
          ]),
          s("nav", {
            class: "library-weak-metadata-links",
            "aria-label": p(l)("library", "Weak metadata catalogue views")
          }, [
            (w(!0), S(te, null, me(ya.value, (u) => (w(), S("a", {
              key: u.key,
              class: "library-weak-metadata-card",
              href: Cr(u.filters),
              title: u.description
            }, [
              s("span", null, [
                s("strong", null, o(p(l)("library", u.label)), 1),
                s("small", null, o(p(l)("library", u.description)), 1)
              ]),
              s("b", null, o(Number(mr.value[u.key] || 0)), 1)
            ], 8, wf))), 128))
          ], 8, vf)
        ]),
        je.value.enabled ? (w(), S("section", Sf, [
          s("div", Cf, [
            s("p", Ef, o(p(l)("library", "Metadata review workbench")), 1),
            s("h3", Tf, o(p(l)("library", "Review next conflict")), 1),
            s("p", xf, o(p(l)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")), 1)
          ]),
          je.value.item ? (w(), S("article", Af, [
            s("header", null, [
              s("strong", null, o(je.value.item.title), 1),
              s("span", kf, o(je.value.item.cachedPath), 1)
            ]),
            s("div", Rf, [
              (w(!0), S(te, null, me(je.value.fields, (u) => (w(), S("article", {
                key: u.field,
                class: "library-metadata-review-field"
              }, [
                s("h4", null, o(u.field), 1),
                s("dl", null, [
                  s("div", null, [
                    s("dt", null, o(p(l)("library", "Current value")), 1),
                    s("dd", null, o(u.currentValue || "—"), 1)
                  ]),
                  s("div", null, [
                    s("dt", null, o(p(l)("library", "scanner candidate")), 1),
                    s("dd", null, o(u.scannerCandidate || "—"), 1)
                  ]),
                  s("div", null, [
                    s("dt", null, o(p(l)("library", "path-template candidate")), 1),
                    s("dd", null, o(u.pathTemplateCandidate || "—"), 1)
                  ]),
                  s("div", null, [
                    s("dt", null, o(p(l)("library", "sidecar value")), 1),
                    s("dd", null, o(u.sidecarValue || "—"), 1)
                  ]),
                  s("div", null, [
                    s("dt", null, o(p(l)("library", "source provenance")), 1),
                    s("dd", null, o(u.sourceProvenance || "—"), 1)
                  ])
                ]),
                s("form", {
                  method: "post",
                  action: je.value.item.resetFieldUrl,
                  class: "library-metadata-review-accept-form"
                }, [
                  s("input", {
                    type: "hidden",
                    name: "requesttoken",
                    value: oe.value
                  }, null, 8, Nf),
                  s("input", {
                    type: "hidden",
                    name: "field",
                    value: u.field
                  }, null, 8, Pf),
                  C[29] || (C[29] = s("input", {
                    type: "hidden",
                    name: "returnTo",
                    value: "catalogue"
                  }, null, -1)),
                  s("button", If, o(p(l)("library", "accept scanner candidate")), 1)
                ], 8, Of)
              ]))), 128))
            ]),
            s("footer", Uf, [
              s("a", {
                class: "button secondary",
                href: je.value.item.detailsUrl
              }, o(p(l)("library", "Open full details")), 9, Mf),
              s("a", {
                class: "button secondary",
                href: je.value.skipUrl
              }, o(p(l)("library", "Skip to next conflict")), 9, Lf)
            ])
          ])) : (w(), S("p", Df, o(p(l)("library", "No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.")), 1)),
          s("a", {
            class: "button secondary",
            href: je.value.reviewNextUrl
          }, o(p(l)("library", "Review next conflict")), 9, Ff)
        ])) : Y("", !0),
        s("section", $f, [
          s("div", Hf, [
            s("p", jf, o(p(l)("library", "Custom collections")), 1),
            s("h3", Vf, o(p(l)("library", "Custom collections")), 1),
            s("p", qf, o(p(l)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")), 1)
          ]),
          s("form", {
            method: "post",
            action: $.value,
            class: "library-saved-collection-save-form"
          }, [
            s("input", {
              type: "hidden",
              name: "requesttoken",
              value: oe.value
            }, null, 8, zf),
            s("input", {
              type: "hidden",
              name: "savedCollectionFilters",
              value: ba.value
            }, null, 8, Wf),
            s("label", null, [
              pe(o(p(l)("library", "Collection name")) + " ", 1),
              s("input", {
                type: "text",
                name: "savedCollectionName",
                placeholder: p(l)("library", "e.g. Bremen photo books"),
                disabled: !Ne.value,
                autocomplete: "off"
              }, null, 8, Kf)
            ]),
            s("button", {
              type: "submit",
              class: "button secondary",
              disabled: !Ne.value
            }, o(p(l)("library", "Save current view")), 9, Gf)
          ], 8, Bf),
          Ne.value ? Y("", !0) : (w(), S("p", Yf, o(p(l)("library", "Choose search terms or filters first, then save them as a custom collection.")), 1)),
          G.value.length > 0 ? (w(), S("nav", {
            key: 1,
            class: "library-saved-collection-links",
            "aria-label": p(l)("library", "Saved custom collections")
          }, [
            (w(!0), S(te, null, me(G.value, (u) => (w(), S("article", {
              key: u.id,
              class: "library-saved-collection-card"
            }, [
              s("a", {
                class: "library-saved-collection-link",
                href: Rn(u.filters)
              }, [
                s("strong", null, o(u.name), 1),
                s("span", null, o(Number(u.count || 0)) + " " + o(p(l)("library", "items")), 1)
              ], 8, Jf),
              s("form", {
                method: "post",
                action: On(u.id),
                class: "library-saved-collection-delete-form"
              }, [
                s("input", {
                  type: "hidden",
                  name: "requesttoken",
                  value: oe.value
                }, null, 8, Qf),
                s("button", ep, o(p(l)("library", "Delete")), 1)
              ], 8, Zf)
            ]))), 128))
          ], 8, Xf)) : Y("", !0)
        ]),
        s("form", {
          method: "get",
          class: "library-quick-filter-bar",
          "aria-label": p(l)("library", "Quick catalogue filters"),
          onSubmit: jn(Qt, ["prevent"])
        }, [
          (w(!0), S(te, null, me(H.value, (u) => (w(), S("input", {
            key: u.key,
            type: "hidden",
            name: u.key,
            value: u.value
          }, null, 8, rp))), 128)),
          s("div", np, [
            s("label", ap, [
              s("span", null, [
                pe(o(p(l)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                C[30] || (C[30] = s("kbd", { class: "library-keyboard-hint" }, "/", -1))
              ]),
              Ge(s("input", {
                ref_key: "quickSearchInput",
                ref: st,
                "onUpdate:modelValue": C[2] || (C[2] = (u) => U.q = u),
                "data-library-quick-search": "",
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope",
                onInput: An
              }, null, 544), [
                [Fa, U.q]
              ])
            ]),
            s("button", {
              type: "submit",
              class: "button primary",
              "aria-label": p(l)("library", "Search catalogue")
            }, o(p(l)("library", "Search")), 9, ip)
          ]),
          s("details", sp, [
            s("summary", null, o(p(l)("library", "Filter & sort")), 1),
            s("div", lp, [
              s("label", null, [
                pe(o(p(l)("library", "Sort")) + " ", 1),
                Ge(s("select", {
                  "onUpdate:modelValue": C[3] || (C[3] = (u) => U.sort = u),
                  name: "sort",
                  onChange: Qt
                }, [
                  s("option", op, o(p(l)("library", "Title")), 1),
                  s("option", cp, o(p(l)("library", "Recently added")), 1),
                  s("option", up, o(p(l)("library", "Publication date")), 1),
                  s("option", dp, o(p(l)("library", "Series")), 1),
                  s("option", fp, o(p(l)("library", "Recently opened")), 1),
                  s("option", pp, o(p(l)("library", "Format")), 1)
                ], 544), [
                  [ct, U.sort]
                ])
              ]),
              s("label", null, [
                pe(o(p(l)("library", "Starred")) + " ", 1),
                Ge(s("select", {
                  "onUpdate:modelValue": C[4] || (C[4] = (u) => U.starred = u),
                  name: "starred",
                  onChange: Qt
                }, [
                  s("option", hp, o(p(l)("library", "All")), 1),
                  s("option", mp, o(p(l)("library", "Starred")), 1)
                ], 544), [
                  [ct, U.starred]
                ])
              ]),
              s("label", null, [
                pe(o(p(l)("library", "Size")) + " ", 1),
                s("select", {
                  value: z.value.limit,
                  name: "limit",
                  onChange: Qt
                }, [
                  (w(), S(te, null, me(n, (u) => s("option", {
                    key: u,
                    value: u
                  }, o(u), 9, yp)), 64))
                ], 40, bp)
              ]),
              s("button", {
                type: "submit",
                class: "button secondary",
                "aria-label": p(l)("library", "Apply catalogue filters")
              }, o(p(l)("library", "Apply filters")), 9, gp),
              s("a", {
                href: "?",
                class: "button secondary",
                "aria-label": p(l)("library", "Clear catalogue filters")
              }, o(p(l)("library", "Clear all")), 9, _p)
            ])
          ])
        ], 40, tp),
        s("details", vp, [
          s("summary", wp, o(p(l)("library", "Show catalogue filters")), 1),
          s("form", {
            method: "get",
            class: "library-filter-bar",
            "aria-label": p(l)("library", "Catalogue search and filters"),
            onSubmit: jn(Qt, ["prevent"])
          }, [
            s("label", null, [
              pe(o(p(l)("library", "Search title, creator, description, filename or folder")) + " ", 1),
              Ge(s("input", {
                "onUpdate:modelValue": C[5] || (C[5] = (u) => U.q = u),
                type: "search",
                name: "q",
                placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                "aria-describedby": "library-search-scope"
              }, null, 512), [
                [Fa, U.q]
              ])
            ]),
            s("p", Cp, o(p(l)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")), 1),
            s("label", null, [
              pe(o(p(l)("library", "Type")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[6] || (C[6] = (u) => U.type = u),
                name: "type"
              }, [
                s("option", Ep, o(p(l)("library", "All types")), 1),
                (w(), S(te, null, me(r, (u) => s("option", {
                  key: u,
                  value: u
                }, o(u), 9, Tp)), 64))
              ], 512), [
                [ct, U.type]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Series / periodical")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[7] || (C[7] = (u) => U.publication = u),
                name: "publication"
              }, [
                s("option", xp, o(p(l)("library", "All series and periodicals")), 1),
                (w(!0), S(te, null, me(v.value, (u) => (w(), S("option", {
                  key: u,
                  value: u
                }, o(u), 9, Ap))), 128))
              ], 512), [
                [ct, U.publication]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Publication year")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[8] || (C[8] = (u) => U.year = u),
                name: "year"
              }, [
                s("option", kp, o(p(l)("library", "All years")), 1),
                (w(!0), S(te, null, me(I.value, (u) => (w(), S("option", {
                  key: u,
                  value: u
                }, o(u), 9, Rp))), 128))
              ], 512), [
                [ct, U.year]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Creator")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[9] || (C[9] = (u) => U.creator = u),
                name: "creator",
                title: "Exact full-field creator matches only"
              }, [
                s("option", Op, o(p(l)("library", "All creators")), 1),
                (w(!0), S(te, null, me(j.value, (u) => (w(), S("option", {
                  key: u,
                  value: u
                }, o(u), 9, Np))), 128))
              ], 512), [
                [ct, U.creator]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Nextcloud tag")) + " ", 1),
              Ge(s("input", {
                "onUpdate:modelValue": C[10] || (C[10] = (u) => U.tag = u),
                type: "text",
                name: "tag",
                placeholder: "photography"
              }, null, 512), [
                [Fa, U.tag]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Format")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[11] || (C[11] = (u) => U.format = u),
                name: "format"
              }, [
                s("option", Pp, o(p(l)("library", "All formats")), 1),
                (w(!0), S(te, null, me(h.value, (u) => (w(), S("option", {
                  key: u,
                  value: u
                }, o(yr(u)), 9, Ip))), 128))
              ], 512), [
                [ct, U.format]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Shelf")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[12] || (C[12] = (u) => U.shelf = u),
                name: "shelf"
              }, [
                s("option", Up, o(p(l)("library", "All shelves")), 1),
                (w(!0), S(te, null, me(d.value, (u) => (w(), S("option", {
                  key: u,
                  value: u
                }, o(u), 9, Mp))), 128))
              ], 512), [
                [ct, U.shelf]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Scan status")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[13] || (C[13] = (u) => U.status = u),
                name: "status"
              }, [
                s("option", Lp, o(p(l)("library", "All scan statuses")), 1),
                (w(!0), S(te, null, me(ie.value, (u) => (w(), S("option", {
                  key: u,
                  value: u
                }, o(u), 9, Dp))), 128))
              ], 512), [
                [ct, U.status]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Workflow status")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[14] || (C[14] = (u) => U.workflowStatus = u),
                name: "workflowStatus"
              }, [
                s("option", Fp, o(p(l)("library", "All workflow statuses")), 1),
                (w(!0), S(te, null, me(W.value, (u) => (w(), S("option", {
                  key: u,
                  value: u
                }, o(u), 9, $p))), 128))
              ], 512), [
                [ct, U.workflowStatus]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Genre")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[15] || (C[15] = (u) => U.genre = u),
                name: "genre"
              }, [
                s("option", Hp, o(p(l)("library", "All genres")), 1),
                (w(!0), S(te, null, me(ce.value, (u) => (w(), S("option", {
                  key: u,
                  value: u
                }, o(u), 9, jp))), 128))
              ], 512), [
                [ct, U.genre]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Classification")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[16] || (C[16] = (u) => U.classification = u),
                name: "classification"
              }, [
                s("option", Vp, o(p(l)("library", "All classifications")), 1),
                (w(!0), S(te, null, me(se.value, (u) => (w(), S("option", {
                  key: u,
                  value: u
                }, o(u), 9, qp))), 128))
              ], 512), [
                [ct, U.classification]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Scanner conflicts")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[17] || (C[17] = (u) => U.scannerConflicts = u),
                name: "scannerConflicts"
              }, [
                s("option", Bp, o(p(l)("library", "All metadata")), 1),
                s("option", zp, o(p(l)("library", "Needs review")), 1)
              ], 512), [
                [ct, U.scannerConflicts]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Starred")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[18] || (C[18] = (u) => U.starred = u),
                name: "starred"
              }, [
                s("option", Wp, o(p(l)("library", "All publications")), 1),
                s("option", Kp, o(p(l)("library", "Starred only")), 1)
              ], 512), [
                [ct, U.starred]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Sort")) + " ", 1),
              Ge(s("select", {
                "onUpdate:modelValue": C[19] || (C[19] = (u) => U.sort = u),
                name: "sort"
              }, [
                s("option", Gp, o(p(l)("library", "Title")), 1),
                s("option", Yp, o(p(l)("library", "Recently added")), 1),
                s("option", Xp, o(p(l)("library", "Publication date")), 1),
                s("option", Jp, o(p(l)("library", "Series / periodical")), 1),
                s("option", Zp, o(p(l)("library", "Recently opened")), 1),
                s("option", Qp, o(p(l)("library", "Format")), 1)
              ], 512), [
                [ct, U.sort]
              ])
            ]),
            s("label", null, [
              pe(o(p(l)("library", "Page size")) + " ", 1),
              s("select", {
                value: z.value.limit,
                name: "limit"
              }, [
                (w(), S(te, null, me(n, (u) => s("option", {
                  key: u,
                  value: u
                }, o(u), 9, th)), 64))
              ], 8, eh)
            ]),
            s("button", {
              type: "submit",
              class: "button primary",
              "aria-label": p(l)("library", "Apply catalogue filters")
            }, o(p(l)("library", "Apply filters")), 9, rh),
            s("a", {
              href: "?",
              class: "button secondary",
              "aria-label": p(l)("library", "Clear catalogue filters")
            }, o(p(l)("library", "Clear")), 9, nh),
            s("a", {
              href: De.value,
              class: "button secondary library-scanner-conflict-review-link"
            }, o(p(l)("library", "Review scanner conflicts")), 9, ah)
          ], 40, Sp)
        ]),
        it.value ? (w(), S("section", ih, [
          s("p", sh, o(_.value), 1),
          s("h3", lh, o(m.value), 1),
          s("p", oh, o(at.value ? p(l)("library", "Items by this creator, sorted by publication context when available.") : At.value ? p(l)("library", "Items from this publication year, sorted by publication date when available.") : p(l)("library", "Items in this publication, sorted by issue/date context when available.")), 1),
          s("div", ch, [
            s("span", null, o(z.value.total) + " " + o(p(l)("library", "items")), 1),
            T.value?.earliestYear && T.value?.latestYear ? (w(), S("span", uh, o(T.value.earliestYear) + "–" + o(T.value.latestYear), 1)) : Y("", !0),
            T.value?.datedCount ? (w(), S("span", dh, o(T.value.datedCount) + " " + o(p(l)("library", "dated")), 1)) : Y("", !0),
            T.value?.undatedCount > 0 ? (w(), S("span", fh, o(T.value.undatedCount) + " " + o(p(l)("library", "undated")), 1)) : Y("", !0)
          ]),
          St.value && T.value ? (w(), S("aside", ph, [
            s("strong", null, o(p(l)("library", "Publication contents")), 1),
            s("span", null, o(T.value.itemCount) + " " + o(p(l)("library", "items")), 1),
            T.value.earliestYear && T.value.latestYear ? (w(), S("span", hh, o(T.value.earliestYear) + "–" + o(T.value.latestYear), 1)) : Y("", !0),
            s("span", null, o(T.value.datedCount) + " " + o(p(l)("library", "with issue/date coverage")), 1),
            T.value.undatedCount > 0 ? (w(), S("span", mh, o(T.value.undatedCount) + " " + o(p(l)("library", "without dates yet")), 1)) : Y("", !0),
            s("span", null, o(p(l)("library", "read-only grouping")), 1)
          ])) : Y("", !0),
          St.value && T.value?.issueGroups?.length ? (w(), S("section", bh, [
            s("div", null, [
              s("p", yh, o(p(l)("library", "Issue order")), 1),
              s("h4", gh, o(p(l)("library", "Read-only issue/date grouping")), 1),
              s("p", _h, o(p(l)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")), 1)
            ]),
            s("div", vh, [
              (w(!0), S(te, null, me(T.value.issueGroups, (u) => (w(), S("a", {
                key: `strip-${u.label}`,
                class: "library-issue-strip-card",
                href: u.items?.[0]?.detailsUrl || "#"
              }, [
                s("span", null, o(u.label), 1),
                s("strong", null, o(u.items?.[0]?.issueLabel || p(l)("library", "Issue")), 1),
                s("small", null, o(u.items?.length || 0) + " " + o(p(l)("library", "items")), 1)
              ], 8, wh))), 128))
            ]),
            T.value.gapRanges?.length ? (w(), S("p", Sh, o(p(l)("library", "Gap")) + ": " + o(T.value.gapRanges.join(", ")), 1)) : Y("", !0),
            (w(!0), S(te, null, me(T.value.issueGroups, (u) => (w(), S("div", {
              key: u.label,
              class: "library-publication-issue-group"
            }, [
              s("h5", null, o(u.label), 1),
              s("ol", null, [
                (w(!0), S(te, null, me(u.items, (X, Te) => (w(), S("li", {
                  key: X.itemId
                }, [
                  s("span", Ch, o(X.issueLabel), 1),
                  s("a", {
                    href: X.detailsUrl || "#"
                  }, o(X.title), 9, Eh),
                  s("small", null, [
                    pe(o(X.publicationType), 1),
                    X.publicationDate ? (w(), S(te, { key: 0 }, [
                      pe(" · " + o(X.publicationDate), 1)
                    ], 64)) : Y("", !0)
                  ]),
                  s("small", Th, [
                    Te > 0 ? (w(), S(te, { key: 0 }, [
                      pe(o(p(l)("library", "Previous issue")), 1)
                    ], 64)) : Y("", !0),
                    Te > 0 && Te < u.items.length - 1 ? (w(), S(te, { key: 1 }, [
                      pe(" · ")
                    ], 64)) : Y("", !0),
                    Te < u.items.length - 1 ? (w(), S(te, { key: 2 }, [
                      pe(o(p(l)("library", "Next issue")), 1)
                    ], 64)) : Y("", !0)
                  ])
                ]))), 128))
              ])
            ]))), 128)),
            T.value.unknownIssueItems?.length ? (w(), S("details", xh, [
              s("summary", null, o(p(l)("library", "Unknown issue/date")) + " · " + o(T.value.unknownIssueItems.length), 1),
              s("p", Ah, o(p(l)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")), 1)
            ])) : Y("", !0)
          ])) : Y("", !0),
          s("p", null, [
            s("a", kh, o(p(l)("library", "Back to full catalogue")), 1)
          ])
        ])) : Y("", !0),
        s("nav", Rh, [
          s("span", Oh, o(p(l)("library", "Compact / Gallery / Shelf")), 1),
          s("button", {
            type: "button",
            "data-library-view-mode": "compact",
            class: Lt({ active: ee.value === "compact" }),
            "aria-pressed": ee.value === "compact" ? "true" : "false",
            onClick: C[20] || (C[20] = (u) => Hr("compact"))
          }, o(p(l)("library", "Compact")), 11, Nh),
          s("button", {
            type: "button",
            "data-library-view-mode": "gallery",
            class: Lt({ active: ee.value === "gallery" }),
            "aria-pressed": ee.value === "gallery" ? "true" : "false",
            onClick: C[21] || (C[21] = (u) => Hr("gallery"))
          }, o(p(l)("library", "Gallery")), 11, Ph),
          s("button", {
            type: "button",
            "data-library-view-mode": "shelf",
            class: Lt({ active: ee.value === "shelf" }),
            "aria-pressed": ee.value === "shelf" ? "true" : "false",
            onClick: C[22] || (C[22] = (u) => Hr("shelf"))
          }, o(p(l)("library", "Shelf")), 11, Ih)
        ]),
        s("div", Uh, [
          s("p", Mh, [
            pe(o(p(l)("library", "Showing")) + " " + o(z.value.from) + "–" + o(z.value.to) + " " + o(p(l)("library", "of")) + " " + o(z.value.total) + " " + o(p(l)("library", "catalogue items")), 1),
            N.value.length > 0 ? (w(), S("span", Lh, [
              C[31] || (C[31] = pe(" · ", -1)),
              s("a", Dh, o(p(l)("library", "Clear all filters")), 1)
            ])) : Y("", !0)
          ]),
          s("nav", {
            class: "library-pagination library-pagination--top",
            "aria-label": p(l)("library", "Catalogue pagination")
          }, [
            s("span", $h, [
              pe(o(p(l)("library", "Page")) + " " + o(z.value.page), 1),
              z.value.total > 0 ? (w(), S("span", Hh, " · " + o(z.value.from) + "–" + o(z.value.to), 1)) : Y("", !0)
            ]),
            z.value.previousUrl ? (w(), S("a", {
              key: 0,
              href: z.value.previousUrl
            }, o(p(l)("library", "Previous")), 9, jh)) : (w(), S("span", Vh, o(p(l)("library", "Previous")), 1)),
            z.value.nextUrl ? (w(), S("a", {
              key: 2,
              href: z.value.nextUrl
            }, o(p(l)("library", "Next")), 9, qh)) : (w(), S("span", Bh, o(p(l)("library", "Next")), 1))
          ], 8, Fh)
        ]),
        s("div", zh, [
          s("details", {
            class: "library-batch-actions",
            "aria-label": p(l)("library", "Batch actions for current results")
          }, [
            s("summary", null, [
              pe(o(p(l)("library", "Batch")) + " ", 1),
              s("span", Kh, o(z.value.total) + " " + o(p(l)("library", "Current filter result")), 1)
            ]),
            s("form", {
              method: "post",
              action: Le.value,
              class: "library-batch-tag-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, Yh),
              (w(!0), S(te, null, me(re.value, (u) => (w(), S("input", {
                key: u.key,
                type: "hidden",
                name: u.key,
                value: u.value
              }, null, 8, Xh))), 128)),
              s("label", null, [
                s("span", null, o(p(l)("library", "Nextcloud tag")), 1),
                s("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: p(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, Jh)
              ]),
              s("button", Zh, o(p(l)("library", "Apply Nextcloud tag to current results")), 1),
              s("p", Qh, o(p(l)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")), 1)
            ], 8, Gh),
            s("form", {
              method: "post",
              action: nt.value,
              class: "library-batch-tag-remove-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, tm),
              (w(!0), S(te, null, me(re.value, (u) => (w(), S("input", {
                key: `remove-tag-${u.key}`,
                type: "hidden",
                name: u.key,
                value: u.value
              }, null, 8, rm))), 128)),
              s("label", null, [
                s("span", null, o(p(l)("library", "Nextcloud tag")), 1),
                s("input", {
                  type: "text",
                  name: "nextcloudTagName",
                  list: "library-nextcloud-tag-suggestions",
                  placeholder: p(l)("library", "e.g. Review"),
                  autocomplete: "off"
                }, null, 8, nm)
              ]),
              s("button", am, o(p(l)("library", "Remove tag from current results")), 1),
              s("p", im, o(p(l)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")), 1)
            ], 8, em),
            s("form", {
              method: "post",
              action: pt.value,
              class: "library-batch-metadata-reset-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, lm),
              (w(!0), S(te, null, me(re.value, (u) => (w(), S("input", {
                key: `reset-${u.key}`,
                type: "hidden",
                name: u.key,
                value: u.value
              }, null, 8, om))), 128)),
              C[32] || (C[32] = s("input", {
                type: "hidden",
                name: "scannerConflicts",
                value: "1"
              }, null, -1)),
              s("button", cm, o(p(l)("library", "Reset filtered metadata")), 1),
              s("p", um, o(p(l)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")), 1)
            ], 8, sm),
            s("form", {
              method: "post",
              action: Xe.value,
              class: "library-batch-metadata-edit-preview-form",
              target: "_blank"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, fm),
              (w(!0), S(te, null, me(re.value, (u) => (w(), S("input", {
                key: `edit-preview-${u.key}`,
                type: "hidden",
                name: u.key,
                value: u.value
              }, null, 8, pm))), 128)),
              s("label", null, [
                s("span", null, o(p(l)("library", "Metadata field")), 1),
                s("select", hm, [
                  s("option", mm, o(p(l)("library", "Publication type")), 1),
                  s("option", bm, o(p(l)("library", "Subtitle")), 1),
                  s("option", ym, o(p(l)("library", "Creators")), 1),
                  s("option", gm, o(p(l)("library", "Series / periodical")), 1),
                  s("option", _m, o(p(l)("library", "Publication date")), 1),
                  s("option", vm, o(p(l)("library", "Language")), 1),
                  s("option", wm, o(p(l)("library", "Publisher")), 1),
                  s("option", Sm, o(p(l)("library", "Genres")), 1),
                  s("option", Cm, o(p(l)("library", "Classifications")), 1)
                ])
              ]),
              s("label", null, [
                s("span", null, o(p(l)("library", "Preview value")), 1),
                C[33] || (C[33] = s("input", {
                  type: "text",
                  name: "bulkEditValue",
                  placeholder: "magazine, de, photography...",
                  autocomplete: "off"
                }, null, -1))
              ]),
              s("button", Em, o(p(l)("library", "Preview & apply metadata edit")), 1),
              s("p", Tm, o(p(l)("library", "Preview first, then apply from the review page.")), 1)
            ], 8, dm),
            s("form", {
              method: "post",
              action: xt.value,
              class: "library-batch-cover-refresh-form"
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, Am),
              (w(!0), S(te, null, me(re.value, (u) => (w(), S("input", {
                key: `cover-${u.key}`,
                type: "hidden",
                name: u.key,
                value: u.value
              }, null, 8, km))), 128)),
              s("button", Rm, o(p(l)("library", "Request fresh cover previews")), 1),
              s("p", Om, o(p(l)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")), 1)
            ], 8, xm)
          ], 8, Wh),
          s("details", Nm, [
            s("summary", null, o(p(l)("library", "Browse")), 1),
            s("div", Pm, [
              y.value.length > 0 ? (w(), S("section", Im, [
                s("h3", Um, o(p(l)("library", "Top series and periodicals")), 1),
                s("p", Mm, o(p(l)("library", "Jump into recurring publications with one click.")), 1),
                s("ul", null, [
                  (w(!0), S(te, null, me(y.value, (u) => (w(), S("li", {
                    key: u.publication
                  }, [
                    s("a", {
                      href: ga(u.publication)
                    }, o(u.publication), 9, Lm),
                    s("span", Dm, o(u.itemCount) + " items", 1)
                  ]))), 128))
                ])
              ])) : y.value.length === 0 ? (w(), S("section", Fm, [
                s("h3", $m, o(p(l)("library", "No series or periodicals found yet")), 1),
                s("p", Hm, o(p(l)("library", "Add publication or series names in item details to build this shortcut panel.")), 1)
              ])) : Y("", !0),
              I.value.length > 0 ? (w(), S("section", jm, [
                s("h3", Vm, o(p(l)("library", "Top publication years")), 1),
                s("ul", null, [
                  (w(!0), S(te, null, me(I.value, (u) => (w(), S("li", { key: u }, [
                    s("a", {
                      href: _a(u)
                    }, o(u), 9, qm)
                  ]))), 128))
                ])
              ])) : Y("", !0),
              j.value.length > 0 ? (w(), S("section", Bm, [
                s("h3", zm, o(p(l)("library", "Top creators")), 1),
                s("ul", null, [
                  (w(!0), S(te, null, me(j.value, (u) => (w(), S("li", { key: u }, [
                    s("a", {
                      href: qt(u)
                    }, o(u), 9, Wm)
                  ]))), 128))
                ])
              ])) : Y("", !0)
            ])
          ])
        ]),
        N.value.length > 0 ? (w(), S("nav", {
          key: 4,
          class: "library-active-filter-chips",
          "aria-label": p(l)("library", "Active filters")
        }, [
          s("span", null, o(p(l)("library", "Active filters")), 1),
          (w(!0), S(te, null, me(N.value, (u) => (w(), S("a", {
            key: u.key,
            href: $r(u.key),
            class: "library-filter-chip",
            "aria-label": `${p(l)("library", "Remove filter")}: ${u.label}`
          }, [
            s("strong", null, o(u.label) + ":", 1),
            pe(" " + o(u.value) + " ", 1),
            C[34] || (C[34] = s("span", { "aria-hidden": "true" }, "×", -1))
          ], 8, Gm))), 128))
        ], 8, Km)) : Y("", !0),
        c.value.length === 0 ? (w(), S("div", {
          key: 5,
          class: Lt(["library-empty-content", { "library-first-run-guidance": k.value || M.value, "library-filter-empty-state": D.value && !k.value && !M.value }]),
          role: "status"
        }, [
          k.value ? (w(), S(te, { key: 0 }, [
            s("h3", null, o(p(l)("library", "Start with one Library root")), 1),
            s("p", Ym, o(p(l)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")), 1),
            s("p", Xm, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, o(p(l)("library", "Add a Library root")), 9, Jm),
              s("span", Zm, o(p(l)("library", "Run a scan after saving a root")), 1)
            ])
          ], 64)) : M.value ? (w(), S(te, { key: 1 }, [
            s("h3", null, o(p(l)("library", "No enabled Library roots")), 1),
            s("p", Qm, o(p(l)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")), 1),
            s("p", eb, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, o(p(l)("library", "Open Library settings")), 9, tb)
            ])
          ], 64)) : D.value ? (w(), S(te, { key: 2 }, [
            s("h3", null, o(p(l)("library", "No matches for the current filters")), 1),
            s("p", rb, o(p(l)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")), 1),
            s("p", nb, [
              s("a", {
                href: ma(),
                class: "button secondary"
              }, o(p(l)("library", "Clear search")), 9, ab),
              s("a", ib, o(p(l)("library", "Clear all filters")), 1)
            ])
          ], 64)) : (w(), S(te, { key: 3 }, [
            s("h3", null, o(p(l)("library", "No catalogue items yet")), 1),
            s("p", sb, o(p(l)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")), 1),
            s("p", lb, [
              s("a", {
                href: V.value,
                class: "button primary"
              }, o(p(l)("library", "Run a scan from settings")), 9, ob)
            ])
          ], 64))
        ], 2)) : (w(), S("div", {
          key: 6,
          class: Lt(["library-cover-gallery", P.value])
        }, [
          (w(!0), S(te, null, me(c.value, (u) => (w(), S("article", {
            key: u.id,
            class: Lt(["library-cover-card", { "library-cover-card--open": le[u.id], "library-cover-card--cover-loaded": gr(u) === "loaded", "library-cover-card--cover-error": gr(u) === "error" }])
          }, [
            s("a", {
              class: "library-cover-link",
              href: u.openUrl,
              "aria-label": `Read ${u.title}`
            }, [
              s("span", ub, [
                gr(u) === "loading" ? (w(), S("span", db)) : Y("", !0),
                s("img", {
                  class: Lt(["library-cover-image", { "library-cover-image--loaded": gr(u) === "loaded" }]),
                  src: u.coverUrl,
                  alt: `Cover for ${u.title}`,
                  loading: "lazy",
                  onLoad: (X) => jr(u),
                  onError: (X) => er(u)
                }, null, 42, fb),
                gr(u) === "error" ? (w(), S("span", pb, o(p(l)("library", "Cover unavailable")), 1)) : Y("", !0)
              ])
            ], 8, cb),
            s("form", {
              method: "post",
              action: u.starUrl,
              class: "library-cover-star-form",
              onSubmit: jn((X) => Er(u, X), ["prevent"])
            }, [
              s("input", {
                type: "hidden",
                name: "requesttoken",
                value: oe.value
              }, null, 8, mb),
              C[35] || (C[35] = s("input", {
                type: "hidden",
                name: "returnTo",
                value: "catalogue"
              }, null, -1)),
              s("input", {
                type: "hidden",
                name: "starred",
                value: u.starred ? "0" : "1"
              }, null, 8, bb),
              s("button", {
                type: "submit",
                class: Lt(["library-cover-star-button", { "library-cover-star-button--starred": u.starred }]),
                "aria-pressed": u.starred ? "true" : "false",
                title: u.starred ? p(l)("library", "Unstar this publication") : p(l)("library", "Star this publication"),
                "aria-label": u.starred ? p(l)("library", "Unstar this publication") : p(l)("library", "Star this publication"),
                onClick: jn((X) => Er(u, X), ["prevent"])
              }, o(u.starred ? "★" : "☆"), 11, yb)
            ], 40, hb),
            s("div", gb, [
              s("div", _b, [
                s("h3", null, [
                  u.starred ? (w(), S("span", {
                    key: 0,
                    class: "library-star-marker",
                    "aria-label": p(l)("library", "Starred")
                  }, "★", 8, vb)) : Y("", !0),
                  pe(o(u.title), 1)
                ]),
                s("a", {
                  class: "library-cover-read",
                  href: u.openUrl
                }, o(p(l)("library", "Read")), 9, wb)
              ]),
              s("details", {
                class: "library-cover-details",
                onToggle: (X) => va(u.id, X)
              }, [
                s("summary", {
                  class: "library-cover-details-summary",
                  "aria-label": `${p(l)("library", "Show details and actions")}: ${u.title}`
                }, o(p(l)("library", "Details")), 9, Cb),
                s("div", Eb, [
                  u.creators ? (w(), S("p", Tb, o(u.creators), 1)) : Y("", !0),
                  s("dl", xb, [
                    s("div", Ab, [
                      s("dt", null, o(p(l)("library", "Type")), 1),
                      s("dd", null, o(u.publicationType), 1)
                    ]),
                    u.publication ? (w(), S("div", kb, [
                      s("dt", null, o(p(l)("library", "Series")), 1),
                      s("dd", null, o(u.publication), 1)
                    ])) : Y("", !0),
                    u.publicationDate ? (w(), S("div", Rb, [
                      s("dt", null, o(p(l)("library", "Date")), 1),
                      s("dd", null, o(u.publicationDate), 1)
                    ])) : Y("", !0),
                    u.workflowStatus ? (w(), S("div", Ob, [
                      s("dt", null, o(p(l)("library", "Status")), 1),
                      s("dd", null, o(u.workflowStatus), 1)
                    ])) : Y("", !0),
                    u.hasScannerConflict ? (w(), S("div", Nb, [
                      s("dt", null, o(p(l)("library", "Review")), 1),
                      s("dd", null, o(u.scannerConflictCount) + " fields", 1)
                    ])) : Y("", !0),
                    u.lastOpenedAt ? (w(), S("div", Pb, [
                      s("dt", null, o(p(l)("library", "Last opened")), 1),
                      s("dd", null, o(u.lastOpenedAt), 1)
                    ])) : Y("", !0),
                    u.extension ? (w(), S("div", Ib, [
                      s("dt", null, o(p(l)("library", "Format")) + ":", 1),
                      s("dd", null, o(yr(u.extension)), 1)
                    ])) : Y("", !0),
                    u.shelf ? (w(), S("div", Ub, [
                      s("dt", null, o(p(l)("library", "Shelf")), 1),
                      s("dd", null, o(u.shelf), 1)
                    ])) : Y("", !0)
                  ]),
                  u.description ? (w(), S("p", Mb, o(u.description), 1)) : Y("", !0),
                  u.scanStatus !== "indexed" || u.scanError ? (w(), S("p", Lb, [
                    pe(" scanStatus: " + o(u.scanStatus || "unknown"), 1),
                    u.scanError ? (w(), S("span", Db, " · scanError: " + o(u.scanError), 1)) : Y("", !0)
                  ])) : Y("", !0),
                  s("div", Fb, [
                    Nn(u).length === 0 ? (w(), S("span", $b, "No Nextcloud tags")) : (w(!0), S(te, { key: 1 }, me(Nn(u), (X) => (w(), S("span", {
                      key: X.id,
                      class: "library-tag"
                    }, o(X.name), 1))), 128))
                  ]),
                  s("p", Hb, [
                    s("a", {
                      href: u.filesUrl
                    }, o(p(l)("library", "Show in Files")), 9, jb),
                    C[36] || (C[36] = pe(" · ", -1)),
                    s("a", {
                      href: u.downloadUrl
                    }, o(p(l)("library", "Download source")), 9, Vb),
                    C[37] || (C[37] = pe(" · ", -1)),
                    s("button", {
                      type: "button",
                      class: "library-link-button library-cover-details-drawer-button",
                      onClick: (X) => It(u)
                    }, o(p(l)("library", "Details drawer")), 9, qb),
                    C[38] || (C[38] = pe(" · ", -1)),
                    s("a", {
                      href: u.detailsUrl
                    }, o(p(l)("library", "Details")), 9, Bb)
                  ])
                ])
              ], 40, Sb)
            ])
          ], 2))), 128))
        ], 2)),
        c.value.length > 0 ? (w(), S("nav", {
          key: 7,
          class: "library-pagination library-pagination--bottom",
          "aria-label": p(l)("library", "Catalogue pagination")
        }, [
          s("span", Wb, [
            pe(o(p(l)("library", "Page")) + " " + o(z.value.page), 1),
            z.value.total > 0 ? (w(), S("span", Kb, " · " + o(z.value.from) + "–" + o(z.value.to), 1)) : Y("", !0)
          ]),
          z.value.previousUrl ? (w(), S("a", {
            key: 0,
            href: z.value.previousUrl
          }, o(p(l)("library", "Previous")), 9, Gb)) : (w(), S("span", Yb, o(p(l)("library", "Previous")), 1)),
          z.value.nextUrl ? (w(), S("a", {
            key: 2,
            href: z.value.nextUrl
          }, o(p(l)("library", "Next")), 9, Xb)) : (w(), S("span", Jb, o(p(l)("library", "Next")), 1))
        ], 8, zb)) : Y("", !0),
        he.value ? (w(), S("div", {
          key: 8,
          class: "library-detail-drawer-backdrop",
          onClick: bt,
          "aria-hidden": "true"
        })) : Y("", !0),
        he.value ? (w(), S("aside", Zb, [
          s("button", {
            type: "button",
            class: "library-detail-drawer-close",
            "aria-label": "Close details panel",
            onClick: bt
          }, "×"),
          s("p", Qb, o(p(l)("library", "Esc closes; arrow keys browse neighbouring items.")), 1),
          s("img", {
            class: "library-detail-drawer-cover",
            src: he.value.coverUrl,
            alt: `Cover for ${he.value.title}`,
            loading: "lazy"
          }, null, 8, ey),
          s("p", ty, o(he.value.publicationType || p(l)("library", "Publication")), 1),
          s("h3", ry, o(he.value.title), 1),
          he.value.creators ? (w(), S("p", ny, o(he.value.creators), 1)) : Y("", !0),
          he.value.description ? (w(), S("p", ay, o(he.value.description), 1)) : Y("", !0),
          s("dl", iy, [
            he.value.publication ? (w(), S("div", sy, [
              s("dt", null, o(p(l)("library", "Series")), 1),
              s("dd", null, o(he.value.publication), 1)
            ])) : Y("", !0),
            he.value.publicationDate ? (w(), S("div", ly, [
              s("dt", null, o(p(l)("library", "Date")), 1),
              s("dd", null, o(he.value.publicationDate), 1)
            ])) : Y("", !0),
            he.value.shelf ? (w(), S("div", oy, [
              s("dt", null, o(p(l)("library", "Shelf")), 1),
              s("dd", null, o(he.value.shelf), 1)
            ])) : Y("", !0)
          ]),
          s("p", cy, [
            s("a", {
              class: "button primary",
              href: he.value.openUrl
            }, o(p(l)("library", "Read")), 9, uy),
            s("a", {
              class: "button secondary",
              href: he.value.detailsUrl
            }, o(p(l)("library", "View full details")), 9, dy)
          ]),
          s("nav", {
            class: "library-detail-drawer-stepper",
            "aria-label": p(l)("library", "Browse neighbouring items")
          }, [
            s("button", {
              type: "button",
              class: "button secondary",
              disabled: !kt.value,
              onClick: C[23] || (C[23] = (u) => Zt(kt.value))
            }, o(p(l)("library", "Previous issue")), 9, py),
            s("button", {
              type: "button",
              class: "button secondary",
              disabled: !jt.value,
              onClick: C[24] || (C[24] = (u) => Zt(jt.value))
            }, o(p(l)("library", "Next issue")), 9, hy)
          ], 8, fy)
        ])) : Y("", !0)
      ])
    ]));
  }
}, Ss = fu("library", "catalogue", {}), Wn = document.querySelector("#library-vue-root"), Cs = {
  ...Ss,
  requestToken: Wn?.dataset.requestToken || Ss.requestToken || ""
};
function J(e) {
  return String(e ?? "");
}
function Dl(e) {
  return J(e).toUpperCase();
}
function by(e, t, r, n = J) {
  for (const a of t) {
    const i = document.createElement("option");
    i.value = J(a), i.textContent = n(a), J(a) === J(r) && (i.selected = !0), e.appendChild(i);
  }
}
function Es(e, t, r, n, a = "") {
  const i = document.createElement("label");
  i.textContent = t;
  const c = document.createElement("input");
  c.type = r === "q" ? "search" : "text", c.name = r, c.value = J(n), c.placeholder = a, i.appendChild(c), e.appendChild(i);
}
function Br(e, t, r, n, a, i, c = J) {
  const d = document.createElement("label");
  d.textContent = t;
  const h = document.createElement("select");
  h.name = r;
  const v = document.createElement("option");
  v.value = "", v.textContent = a, h.appendChild(v), by(h, i, n, c), d.appendChild(h), e.appendChild(d);
}
function zr(e) {
  const t = J(e.requestToken || "");
  if (t === "") return null;
  const r = document.createElement("input");
  return r.type = "hidden", r.name = "requesttoken", r.value = t, r;
}
function yy(e, t = {}) {
  return J(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(J(e || t?.publication || ""))}`);
}
function gy(e) {
  return J(e.discoveryPage) === "publication";
}
function _y(e, t = {}) {
  return J(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(J(e))}`);
}
function Wa(e) {
  return J(e.discoveryPage) === "year";
}
function vy(e, t = {}) {
  return J(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(J(e))}`);
}
function Ka(e) {
  return J(e.discoveryPage) === "creator";
}
function wy(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([r, n]) => r !== "sort" && J(n).trim() !== "");
}
function Sy() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function on(e, t, r, n) {
  const a = document.createElement("a");
  return a.href = t, a.className = r, a.textContent = n, e.appendChild(a), a;
}
function Cy(e, t) {
  const r = document.createElement("span");
  return r.className = "library-muted", r.textContent = t, e.appendChild(r), r;
}
function Ey(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-filter-bar", n.setAttribute("aria-label", l("library", "Catalogue search and filters")), Es(n, l("library", "Search title / author"), "q", r.q, "Camera, Eco, Rolleiflex..."), Br(n, l("library", "Type"), "type", r.type, l("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), Es(n, l("library", "Nextcloud tag"), "tag", r.tag, "photography"), Br(n, l("library", "Format"), "format", r.format, l("library", "All formats"), e.formats || [], Dl), Br(n, l("library", "Shelf"), "shelf", r.shelf, l("library", "All shelves"), e.shelves || []), Br(n, l("library", "Scan status"), "status", r.status, l("library", "All scan statuses"), e.scanStatuses || []), Br(n, l("library", "Sort"), "sort", r.sort || "title", l("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Br(n, l("library", "Page size"), "limit", t.limit || 100, l("library", "Page size"), [25, 50, 100, 250, 500]);
  const a = document.createElement("button");
  a.type = "submit", a.className = "button primary", a.setAttribute("aria-label", l("library", "Apply catalogue filters")), a.textContent = l("library", "Apply filters");
  const i = document.createElement("a");
  return i.href = "?", i.className = "button secondary", i.setAttribute("aria-label", l("library", "Clear catalogue filters")), i.textContent = l("library", "Clear"), n.append(a, i), n;
}
function Ty() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", r = e.get("batchMetadataApplied") || "0", n = e.get("batchMetadataUnchanged") || "0", a = e.get("batchMetadataSkipped") || "0", i = document.createElement("p");
  return i.className = "library-notice library-batch-metadata-apply-result", i.textContent = l("library", `Batch metadata apply updated ${r} ${t} values; ${n} already matched, ${a} skipped.`), i;
}
function xy(e, t) {
  const r = e.activeFilters || {}, n = document.createElement("form");
  n.method = "get", n.className = "library-quick-filter-bar", n.setAttribute("aria-label", l("library", "Quick catalogue filters"));
  let a = null;
  const i = () => {
    window.clearTimeout(a), a = window.setTimeout(() => n.requestSubmit(), 350);
  };
  for (const [T, I] of Object.entries(r)) {
    if (["q", "sort", "starred"].includes(T) || J(I).trim() === "") continue;
    const j = document.createElement("input");
    j.type = "hidden", j.name = T, j.value = J(I), n.appendChild(j);
  }
  const c = document.createElement("label");
  c.className = "library-quick-filter-search", c.textContent = l("library", "Search");
  const d = document.createElement("input");
  d.type = "search", d.name = "q", d.value = J(r.q), d.placeholder = "Camera, Eco, Rolleiflex...", d.addEventListener("input", i), c.appendChild(d), n.appendChild(c);
  const h = [
    [l("library", "Sort"), "sort", r.sort || "title", [["title", l("library", "Title")], ["recent", l("library", "Recently added")], ["publicationDate", l("library", "Publication date")], ["publication", l("library", "Series")], ["lastOpened", l("library", "Recently opened")], ["format", l("library", "Format")]]],
    [l("library", "Starred"), "starred", r.starred || "", [["", l("library", "All")], ["1", l("library", "Starred")]]],
    [l("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [T, I, j, ie] of h) {
    const W = document.createElement("label");
    W.textContent = T;
    const ce = document.createElement("select");
    ce.name = I;
    for (const [se, z] of ie) {
      const U = document.createElement("option");
      U.value = J(se), U.textContent = J(z), J(se) === J(j) && (U.selected = !0), ce.appendChild(U);
    }
    ce.addEventListener("change", () => n.requestSubmit()), W.appendChild(ce), n.appendChild(W);
  }
  const v = document.createElement("button");
  v.type = "submit", v.className = "button primary", v.setAttribute("aria-label", l("library", "Apply catalogue filters")), v.textContent = l("library", "Apply filters");
  const y = document.createElement("a");
  return y.href = "?", y.className = "button secondary", y.setAttribute("aria-label", l("library", "Clear catalogue filters")), y.textContent = l("library", "Clear all"), n.append(v, y), n;
}
function Ay(e, t) {
  const r = Array.isArray(e.items) ? e.items : [], n = e.cataloguePagination || {
    from: r.length > 0 ? 1 : 0,
    to: r.length,
    total: r.length
  }, a = J(e.settingsUrl || ""), i = J(e.metadataExportUrl || ""), c = J(e.batchTagUrl || "/apps/library/bulk/tags"), d = J(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), h = J(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), v = J(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), y = J(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), T = document.createElement("div");
  T.className = "library-vue-catalogue library-vue-fallback", T.dataset.vueFallback = "true";
  const I = document.createElement("section");
  I.className = "library-panel", I.setAttribute("aria-labelledby", "library-catalogue-heading");
  const j = document.createElement("div");
  j.className = "library-catalogue-header";
  const ie = document.createElement("div"), W = document.createElement("h2");
  W.id = "library-catalogue-heading", W.textContent = l("library", "Publication catalogue");
  const ce = document.createElement("p");
  ce.className = "library-muted", ce.textContent = l("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), ie.append(W, ce);
  const se = document.createElement("nav");
  if (se.className = "library-catalogue-toolbar", se.setAttribute("aria-label", l("library", "Library actions")), a) {
    const P = document.createElement("a");
    P.href = a, P.className = "button secondary", P.setAttribute("aria-label", "Open Library settings"), P.textContent = l("library", "Settings"), se.appendChild(P);
  }
  if (i) {
    const P = document.createElement("a");
    P.href = i, P.className = "button secondary", P.setAttribute("aria-label", "Export corrected metadata"), P.textContent = l("library", "Export corrected metadata"), se.appendChild(P);
  }
  if (e.metadataSidecarManifestUrl) {
    const P = document.createElement("a");
    P.href = e.metadataSidecarManifestUrl, P.className = "button secondary", P.setAttribute("aria-label", "Export sidecar manifest"), P.textContent = l("library", "Sidecar manifest"), se.appendChild(P);
  }
  if (e.metadataSidecarBundleUrl) {
    const P = document.createElement("a");
    P.href = e.metadataSidecarBundleUrl, P.className = "button secondary", P.setAttribute("aria-label", "Export sidecar ZIP"), P.textContent = l("library", "Sidecar ZIP"), se.appendChild(P);
  }
  j.append(ie, se), I.appendChild(j);
  const z = Ty();
  z && I.appendChild(z), I.appendChild(xy(e, n));
  const U = document.createElement("details");
  U.className = "library-filter-panel";
  const V = document.createElement("summary");
  if (V.className = "library-filter-panel-summary", V.textContent = l("library", "Show catalogue filters"), U.append(V, Ey(e, n)), I.appendChild(U), gy(e) || Wa(e) || Ka(e)) {
    const P = document.createElement("section");
    P.className = "library-discovery-header", P.setAttribute("aria-labelledby", "library-discovery-heading");
    const N = document.createElement("p");
    N.className = "library-muted", N.textContent = Ka(e) ? l("library", "Creator") : Wa(e) ? l("library", "Publication year") : l("library", "Publication / series");
    const H = document.createElement("h3");
    H.id = "library-discovery-heading", H.textContent = J(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const re = document.createElement("p");
    re.className = "library-muted", re.textContent = `${n.total ?? r.length} ${Ka(e) ? l("library", "items by this creator. Sorted by publication context when available.") : Wa(e) ? l("library", "items from this publication year. Sorted by publication date when available.") : l("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const le = document.createElement("a");
    le.href = "/apps/library/", le.className = "button secondary", le.textContent = l("library", "Back to full catalogue"), P.append(N, H, re, le), I.appendChild(P);
  }
  const oe = document.createElement("p");
  oe.className = "library-muted library-filter-result-summary", oe.textContent = `Showing ${n.from ?? 0}–${n.to ?? r.length} of ${n.total ?? r.length} catalogue items`;
  const Me = document.createElement("a");
  Me.href = "?", Me.textContent = ` ${l("library", "Clear all filters")}`, oe.appendChild(Me), I.appendChild(oe);
  const Pe = document.createElement("details");
  Pe.className = "library-batch-actions";
  const Be = document.createElement("summary");
  Be.textContent = `${l("library", "Batch actions for current results")} (${n.total ?? r.length} ${l("library", "Current filter result")})`;
  const Ee = document.createElement("form");
  Ee.method = "post", Ee.action = c, Ee.className = "library-batch-tag-form";
  const Le = zr(e);
  Le && Ee.appendChild(Le);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (J(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = P, H.value = J(N), Ee.appendChild(H);
  }
  const nt = document.createElement("label");
  nt.textContent = l("library", "Apply Nextcloud tag to current results");
  const pt = document.createElement("input");
  pt.type = "text", pt.name = "nextcloudTagName", pt.placeholder = "batch-review", nt.appendChild(pt);
  const Xe = document.createElement("button");
  Xe.type = "submit", Xe.className = "button secondary", Xe.textContent = l("library", "Apply Nextcloud tag to current results");
  const xt = document.createElement("p");
  xt.className = "library-muted", xt.textContent = l("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), Ee.append(nt, Xe, xt);
  const De = document.createElement("form");
  De.method = "post", De.action = d, De.className = "library-batch-tag-remove-form";
  const Fe = zr(e);
  Fe && De.appendChild(Fe);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (J(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = P, H.value = J(N), De.appendChild(H);
  }
  const _e = document.createElement("label");
  _e.textContent = l("library", "Nextcloud tag");
  const de = document.createElement("input");
  de.type = "text", de.name = "nextcloudTagName", de.setAttribute("list", "library-nextcloud-tag-suggestions"), de.placeholder = l("library", "e.g. Review"), de.autocomplete = "off", _e.appendChild(de);
  const ze = document.createElement("button");
  ze.type = "submit", ze.className = "button secondary", ze.textContent = l("library", "Remove tag from current results");
  const ve = document.createElement("p");
  ve.className = "library-muted", ve.textContent = l("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), De.append(_e, ze, ve);
  const Ae = document.createElement("form");
  Ae.method = "post", Ae.action = h, Ae.className = "library-batch-metadata-reset-form";
  const We = zr(e);
  We && Ae.appendChild(We);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (J(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = P, H.value = J(N), Ae.appendChild(H);
  }
  const Ze = document.createElement("input");
  Ze.type = "hidden", Ze.name = "scannerConflicts", Ze.value = "1";
  const be = document.createElement("button");
  be.type = "submit", be.className = "button secondary", be.textContent = l("library", "Reset filtered metadata");
  const Nt = document.createElement("p");
  Nt.className = "library-muted", Nt.textContent = l("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), Ae.append(Ze, be, Nt);
  const Ke = document.createElement("form");
  Ke.method = "post", Ke.action = v, Ke.className = "library-batch-metadata-edit-preview-form", Ke.target = "_blank";
  const ht = zr(e);
  ht && Ke.appendChild(ht);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (J(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = P, H.value = J(N), Ke.appendChild(H);
  }
  const St = document.createElement("label");
  St.textContent = l("library", "Metadata field");
  const At = document.createElement("select");
  At.name = "bulkEditField";
  for (const [P, N] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const H = document.createElement("option");
    H.value = P, H.textContent = l("library", N), At.appendChild(H);
  }
  St.appendChild(At);
  const at = document.createElement("label");
  at.textContent = l("library", "Preview value");
  const it = document.createElement("input");
  it.type = "text", it.name = "bulkEditValue", it.placeholder = "magazine, de, photography...", it.autocomplete = "off", at.appendChild(it);
  const m = document.createElement("button");
  m.type = "submit", m.className = "button secondary", m.textContent = l("library", "Preview & apply metadata edit");
  const b = document.createElement("p");
  b.className = "library-muted", b.textContent = l("library", "Preview first, then apply from the review page."), Ke.append(St, at, m, b);
  const _ = document.createElement("form");
  _.method = "post", _.action = y, _.className = "library-batch-cover-refresh-form";
  const O = zr(e);
  O && _.appendChild(O);
  for (const [P, N] of Object.entries(e.activeFilters || {})) {
    if (J(N).trim() === "") continue;
    const H = document.createElement("input");
    H.type = "hidden", H.name = P, H.value = J(N), _.appendChild(H);
  }
  const x = document.createElement("button");
  x.type = "submit", x.className = "button secondary", x.textContent = l("library", "Request fresh cover previews");
  const k = document.createElement("p");
  k.className = "library-muted", k.textContent = l("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), _.append(x, k), Pe.append(Be, Ee, De, Ae, Ke, _), I.appendChild(Pe);
  const M = document.createElement("nav");
  M.className = "library-pagination", M.setAttribute("aria-label", l("library", "Catalogue pagination"));
  const D = document.createElement("span");
  D.className = "library-pagination-range", D.textContent = `Page ${n.page ?? 1} · ${n.from ?? 0}–${n.to ?? r.length}`, M.appendChild(D), I.appendChild(M);
  const L = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], A = document.createElement("details");
  A.className = L.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const G = document.createElement("summary");
  G.className = "library-periodical-groups-summary", G.textContent = l("library", "Show top series and periodicals"), A.appendChild(G);
  const $ = document.createElement("h3");
  $.textContent = L.length > 0 ? l("library", "Top series and periodicals") : l("library", "No series or periodicals found yet");
  const K = document.createElement("p");
  if (K.className = "library-muted", K.textContent = L.length > 0 ? l("library", "Jump into recurring publications with one click.") : l("library", "Add publication or series names in item details to build this shortcut panel."), A.append($, K), L.length > 0) {
    const P = document.createElement("ul");
    for (const N of L) {
      const H = document.createElement("li"), re = document.createElement("a");
      re.href = yy(N.publication, N), re.textContent = J(N.publication);
      const le = document.createElement("span");
      le.className = "library-muted", le.textContent = `${N.itemCount} items`, H.append(re, le), P.appendChild(H);
    }
    A.appendChild(P);
  }
  I.appendChild(A);
  const Q = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (Q.length > 0) {
    const P = document.createElement("details");
    P.className = "library-year-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = l("library", "Show publication years");
    const H = document.createElement("h3");
    H.textContent = l("library", "Top publication years");
    const re = document.createElement("p");
    re.className = "library-muted", re.textContent = l("library", "Jump into dated books, magazines, journals and comics by year.");
    const le = document.createElement("ul");
    for (const ye of Q) {
      const fe = document.createElement("li"), $e = document.createElement("a");
      $e.href = _y(ye, e), $e.textContent = J(ye), fe.appendChild($e), le.appendChild(fe);
    }
    P.append(N, H, re, le), I.appendChild(P);
  }
  const ee = Array.isArray(e.creators) ? e.creators : [];
  if (ee.length > 0) {
    const P = document.createElement("details");
    P.className = "library-creator-groups";
    const N = document.createElement("summary");
    N.className = "library-periodical-groups-summary", N.textContent = l("library", "Show creators");
    const H = document.createElement("h3");
    H.textContent = l("library", "Top creators");
    const re = document.createElement("p");
    re.className = "library-muted", re.textContent = l("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const le = document.createElement("ul");
    for (const ye of ee) {
      const fe = document.createElement("li"), $e = document.createElement("a");
      $e.href = vy(ye, e), $e.textContent = J(ye), fe.appendChild($e), le.appendChild(fe);
    }
    P.append(N, H, re, le), I.appendChild(P);
  }
  if (r.length === 0) {
    const P = document.createElement("div"), N = Number(e.rootCount || 0), H = Number(e.enabledRootCount || 0), re = wy(e);
    P.className = "library-empty-content", (N === 0 || H === 0) && P.classList.add("library-first-run-guidance"), re && N > 0 && H > 0 && P.classList.add("library-filter-empty-state"), P.setAttribute("role", "status");
    const le = document.createElement("h3"), ye = document.createElement("p");
    ye.className = "library-muted";
    const fe = document.createElement("p");
    fe.className = "library-empty-actions", N === 0 ? (le.textContent = l("library", "Start with one Library root"), ye.textContent = l("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), on(fe, a, "button primary", l("library", "Add a Library root")), Cy(fe, l("library", "Run a scan after saving a root"))) : H === 0 ? (le.textContent = l("library", "No enabled Library roots"), ye.textContent = l("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), on(fe, a, "button primary", l("library", "Open Library settings"))) : re ? (le.textContent = l("library", "No matches for the current filters"), ye.textContent = l("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), on(fe, Sy(), "button secondary", l("library", "Clear search")), on(fe, "?", "button primary", l("library", "Clear all filters"))) : (le.textContent = l("library", "No catalogue items yet"), ye.textContent = l("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), on(fe, a, "button primary", l("library", "Run a scan from settings"))), P.append(le, ye, fe), I.appendChild(P);
  } else {
    const P = document.createElement("div");
    P.className = "library-cover-gallery";
    for (const N of r) {
      const H = document.createElement("article");
      H.className = "library-cover-card";
      const re = document.createElement("a");
      re.className = "library-cover-link", re.href = J(N.openUrl || "#"), re.setAttribute("aria-label", `Read ${J(N.title || "publication")}`);
      const le = document.createElement("img");
      le.className = "library-cover-image", le.src = J(N.coverUrl || ""), le.alt = `Cover for ${J(N.title || "publication")}`, le.loading = "lazy", re.appendChild(le);
      const ye = zr(e), fe = document.createElement("form");
      fe.method = "post", fe.action = J(N.starUrl || ""), fe.className = "library-cover-star-form", ye && fe.appendChild(ye);
      const $e = document.createElement("input");
      $e.type = "hidden", $e.name = "returnTo", $e.value = "catalogue";
      const we = document.createElement("input");
      we.type = "hidden", we.name = "starred", we.value = N.starred ? "0" : "1";
      const Ie = document.createElement("button");
      Ie.type = "submit", Ie.className = N.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", Ie.setAttribute("aria-pressed", N.starred ? "true" : "false"), Ie.setAttribute("aria-label", N.starred ? l("library", "Unstar this publication") : l("library", "Star this publication")), Ie.title = N.starred ? l("library", "Unstar this publication") : l("library", "Star this publication"), Ie.textContent = N.starred ? "★" : "☆", fe.append($e, we, Ie);
      const he = document.createElement("div");
      he.className = "library-cover-summary";
      const mt = document.createElement("h3");
      if (mt.textContent = J(N.title || "Untitled publication"), he.appendChild(mt), N.creators) {
        const bt = document.createElement("p");
        bt.className = "library-creator", bt.textContent = J(N.creators), he.appendChild(bt);
      }
      const kt = document.createElement("dl");
      kt.className = "library-cover-detail-list";
      const jt = [
        ["Type", J(N.publicationType || "other")],
        ["Format", N.extension ? Dl(N.extension) : ""],
        ["Shelf", N.shelf ? J(N.shelf) : ""]
      ].filter(([, bt]) => bt !== "");
      for (const [bt, Zt] of jt) {
        const st = document.createElement("div");
        st.className = "library-cover-detail-chip";
        const Ut = document.createElement("dt");
        Ut.textContent = bt;
        const lt = document.createElement("dd");
        lt.textContent = Zt, st.append(Ut, lt), kt.appendChild(st);
      }
      he.appendChild(kt);
      const Pt = document.createElement("p"), je = document.createElement("a");
      je.href = J(N.openUrl || "#"), je.textContent = l("library", "Read");
      const Vt = document.createElement("a");
      Vt.href = J(N.filesUrl || "#"), Vt.textContent = l("library", "Show in Files");
      const Jt = document.createElement("a");
      Jt.href = J(N.downloadUrl || "#"), Jt.textContent = l("library", "Download source");
      const It = document.createElement("a");
      It.href = J(N.detailsUrl || "#"), It.textContent = l("library", "Details"), Pt.append(je, document.createTextNode(" · "), Vt, document.createTextNode(" · "), Jt, document.createTextNode(" · "), It), he.appendChild(Pt), H.append(re, fe, he), P.appendChild(H);
    }
    I.appendChild(P);
  }
  return T.appendChild(I), T;
}
if (Wn)
  try {
    cu(my, { state: Cs }).mount(Wn);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), Wn.replaceChildren(Ay(Cs));
  }
//# sourceMappingURL=library-main.mjs.map
