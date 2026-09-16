// @__NO_SIDE_EFFECTS__
function Su(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const We = {}, qa = [], Sn = () => {
}, Sh = () => !1, ml = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), bl = (e) => e.startsWith("onUpdate:"), bt = Object.assign, Cu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, $g = Object.prototype.hasOwnProperty, Je = (e, t) => $g.call(e, t), Se = Array.isArray, Bi = (e) => Eo(e) === "[object Map]", xa = (e) => Eo(e) === "[object Set]", Od = (e) => Eo(e) === "[object Date]", $e = (e) => typeof e == "function", lt = (e) => typeof e == "string", Pn = (e) => typeof e == "symbol", Qe = (e) => e !== null && typeof e == "object", Ch = (e) => (Qe(e) || $e(e)) && $e(e.then) && $e(e.catch), Th = Object.prototype.toString, Eo = (e) => Th.call(e), Fg = (e) => Eo(e).slice(8, -1), Eh = (e) => Eo(e) === "[object Object]", Tu = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Vr = /* @__PURE__ */ Su(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), yl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Dg = /-\w/g, jt = yl(
  (e) => e.replace(Dg, (t) => t.slice(1).toUpperCase())
), Mg = /\B([A-Z])/g, mi = yl(
  (e) => e.replace(Mg, "-$1").toLowerCase()
), _l = yl((e) => e.charAt(0).toUpperCase() + e.slice(1)), rc = yl(
  (e) => e ? `on${_l(e)}` : ""
), xt = (e, t) => !Object.is(e, t), ds = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ah = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, wl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, zg = (e) => {
  const t = lt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Nd;
const Sl = () => Nd || (Nd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hn(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = lt(i) ? Hg(i) : hn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (lt(e) || Qe(e))
    return e;
}
const Ug = /;(?![^(]*\))/g, Bg = /:([^]+)/, jg = /\/\*[^]*?\*\//g;
function Hg(e) {
  const t = {};
  return e.replace(jg, "").split(Ug).forEach((n) => {
    if (n) {
      const i = n.split(Bg);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ae(e) {
  let t = "";
  if (lt(e))
    t = e;
  else if (Se(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ae(e[n]);
      i && (t += i + " ");
    }
  else if (Qe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function gs(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !lt(t) && (e.class = Ae(t)), n && (e.style = hn(n)), e;
}
const Vg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Kg = /* @__PURE__ */ Su(Vg);
function kh(e) {
  return !!e || e === "";
}
function Gg(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Ki(e[i], t[i]);
  return n;
}
function Ld(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (!i[o] && Ki(a, n[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Ki(e, t) {
  if (e === t) return !0;
  let n = Od(e), i = Od(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Pn(e), i = Pn(t), n || i)
    return e === t;
  if (n = Se(e), i = Se(t), n || i)
    return n && i ? Gg(e, t) : !1;
  if (n = Qe(e), i = Qe(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Bi(e), i = Bi(t), n || i || (n = xa(e), i = xa(t), n || i))
      return n && i ? Ld(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (c && !u || !c && u || !Ki(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Wg(e, t) {
  return e.findIndex((n) => Ki(n, t));
}
const xh = (e) => !!(e && e.__v_isRef === !0), p = (e) => lt(e) ? e : e == null ? "" : Se(e) || Qe(e) && (e.toString === Th || !$e(e.toString)) ? xh(e) ? p(e.value) : JSON.stringify(e, Oh, 2) : String(e), Oh = (e, t) => xh(t) ? Oh(e, t.value) : Bi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[oc(i, r) + " =>"] = a, n),
    {}
  )
} : xa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => oc(n))
} : Pn(t) ? oc(t) : Qe(t) && !Se(t) && !Eh(t) ? String(t) : t, oc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function qg(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let kt;
class Yg {
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
function Xg() {
  return kt;
}
let st;
const sc = /* @__PURE__ */ new WeakSet();
class Nh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, kt && (kt.active ? kt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sc.has(this) && (sc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Rh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Rd(this), Ih(this);
    const t = st, n = Rn;
    st = this, Rn = !0;
    try {
      return this.fn();
    } finally {
      Ph(this), st = t, Rn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ku(t);
      this.deps = this.depsTail = void 0, Rd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Hc(this) && this.run();
  }
  get dirty() {
    return Hc(this);
  }
}
let Lh = 0, Kr, Gr;
function Rh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Gr, Gr = e;
    return;
  }
  e.next = Kr, Kr = e;
}
function Eu() {
  Lh++;
}
function Au() {
  if (--Lh > 0)
    return;
  if (Gr) {
    let t = Gr;
    for (Gr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Kr; ) {
    let t = Kr;
    for (Kr = void 0; t; ) {
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
function Ih(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ph(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), ku(i), Zg(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Hc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($h(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $h(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === oo) || (e.globalVersion = oo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Hc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = st, i = Rn;
  st = e, Rn = !0;
  try {
    Ih(e);
    const a = e.fn(e._value);
    (t.version === 0 || xt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    st = n, Rn = i, Ph(e), e.flags &= -3;
  }
}
function ku(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ku(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Zg(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Rn = !0;
const Fh = [];
function hi() {
  Fh.push(Rn), Rn = !1;
}
function pi() {
  const e = Fh.pop();
  Rn = e === void 0 ? !0 : e;
}
function Rd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = st;
    st = void 0;
    try {
      t();
    } finally {
      st = n;
    }
  }
}
let oo = 0;
class Jg {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Cl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!st || !Rn || st === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== st)
      n = this.activeLink = new Jg(st, this), st.deps ? (n.prevDep = st.depsTail, st.depsTail.nextDep = n, st.depsTail = n) : st.deps = st.depsTail = n, Dh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = st.depsTail, n.nextDep = void 0, st.depsTail.nextDep = n, st.depsTail = n, st.deps === n && (st.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, oo++, this.notify(t);
  }
  notify(t) {
    Eu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Au();
    }
  }
}
function Dh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Dh(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Vc = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ Symbol(
  ""
), Kc = /* @__PURE__ */ Symbol(
  ""
), so = /* @__PURE__ */ Symbol(
  ""
);
function zt(e, t, n) {
  if (Rn && st) {
    let i = Vc.get(e);
    i || Vc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Cl()), a.map = i, a.key = n), a.track();
  }
}
function oi(e, t, n, i, a, r) {
  const o = Vc.get(e);
  if (!o) {
    oo++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (Eu(), t === "clear")
    o.forEach(c);
  else {
    const u = Se(e), h = u && Tu(n);
    if (u && n === "length") {
      const f = Number(i);
      o.forEach((b, C) => {
        (C === "length" || C === so || !Pn(C) && C >= f) && c(b);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), h && c(o.get(so)), t) {
        case "add":
          u ? h && c(o.get("length")) : (c(o.get(Ea)), Bi(e) && c(o.get(Kc)));
          break;
        case "delete":
          u || (c(o.get(Ea)), Bi(e) && c(o.get(Kc)));
          break;
        case "set":
          Bi(e) && c(o.get(Ea));
          break;
      }
  }
  Au();
}
function Ua(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (zt(t, "iterate", so), /* @__PURE__ */ Cn(e) ? t : t.map($n));
}
function Tl(e) {
  return zt(e = /* @__PURE__ */ Ye(e), "iterate", so), e;
}
function Kn(e, t) {
  return /* @__PURE__ */ vi(e) ? nr(/* @__PURE__ */ Aa(e) ? $n(t) : t) : $n(t);
}
const Qg = {
  __proto__: null,
  [Symbol.iterator]() {
    return lc(this, Symbol.iterator, (e) => Kn(this, e));
  },
  concat(...e) {
    return Ua(this).concat(
      ...e.map((t) => Se(t) ? Ua(t) : t)
    );
  },
  entries() {
    return lc(this, "entries", (e) => (e[1] = Kn(this, e[1]), e));
  },
  every(e, t) {
    return Qn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qn(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Kn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return Qn(
      this,
      "find",
      e,
      t,
      (n) => Kn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Qn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qn(
      this,
      "findLast",
      e,
      t,
      (n) => Kn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Qn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Qn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cc(this, "includes", e);
  },
  indexOf(...e) {
    return cc(this, "indexOf", e);
  },
  join(e) {
    return Ua(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return cc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xr(this, "pop");
  },
  push(...e) {
    return xr(this, "push", e);
  },
  reduce(e, ...t) {
    return Id(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Id(this, "reduceRight", e, t);
  },
  shift() {
    return xr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xr(this, "splice", e);
  },
  toReversed() {
    return Ua(this).toReversed();
  },
  toSorted(e) {
    return Ua(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ua(this).toSpliced(...e);
  },
  unshift(...e) {
    return xr(this, "unshift", e);
  },
  values() {
    return lc(this, "values", (e) => Kn(this, e));
  }
};
function lc(e, t, n) {
  const i = Tl(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ Cn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const em = Array.prototype;
function Qn(e, t, n, i, a, r) {
  const o = Tl(e), c = o !== e && !/* @__PURE__ */ Cn(e), u = o[t];
  if (u !== em[t]) {
    const b = u.apply(e, r);
    return c ? $n(b) : b;
  }
  let h = n;
  o !== e && (c ? h = function(b, C) {
    return n.call(this, Kn(e, b), C, e);
  } : n.length > 2 && (h = function(b, C) {
    return n.call(this, b, C, e);
  }));
  const f = u.call(o, h, i);
  return c && a ? a(f) : f;
}
function Id(e, t, n, i) {
  const a = Tl(e), r = a !== e && !/* @__PURE__ */ Cn(e);
  let o = n, c = !1;
  a !== e && (r ? (c = i.length === 0, o = function(h, f, b) {
    return c && (c = !1, h = Kn(e, h)), n.call(this, h, Kn(e, f), b, e);
  }) : n.length > 3 && (o = function(h, f, b) {
    return n.call(this, h, f, b, e);
  }));
  const u = a[t](o, ...i);
  return c ? Kn(e, u) : u;
}
function cc(e, t, n) {
  const i = /* @__PURE__ */ Ye(e);
  zt(i, "iterate", so);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Nu(n[0]) ? (n[0] = /* @__PURE__ */ Ye(n[0]), i[t](...n)) : a;
}
function xr(e, t, n = []) {
  hi(), Eu();
  const i = (/* @__PURE__ */ Ye(e))[t].apply(e, n);
  return Au(), pi(), i;
}
const tm = /* @__PURE__ */ Su("__proto__,__v_isRef,__isVue"), Mh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pn)
);
function nm(e) {
  Pn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return zt(t, "has", e), t.hasOwnProperty(e);
}
class zh {
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
      return i === (a ? r ? fm : Hh : r ? jh : Bh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Se(t);
    if (!a) {
      let u;
      if (o && (u = Qg[n]))
        return u;
      if (n === "hasOwnProperty")
        return nm;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ht(t) ? t : i
    );
    if ((Pn(n) ? Mh.has(n) : tm(n)) || (a || zt(t, "get", n), r))
      return c;
    if (/* @__PURE__ */ Ht(c)) {
      const u = o && Tu(n) ? c : c.value;
      return a && Qe(u) ? /* @__PURE__ */ lo(u) : u;
    }
    return Qe(c) ? a ? /* @__PURE__ */ lo(c) : /* @__PURE__ */ Mt(c) : c;
  }
}
class Uh extends zh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const o = Se(t) && Tu(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ vi(r);
      if (!/* @__PURE__ */ Cn(i) && !/* @__PURE__ */ vi(i) && (r = /* @__PURE__ */ Ye(r), i = /* @__PURE__ */ Ye(i)), !o && /* @__PURE__ */ Ht(r) && !/* @__PURE__ */ Ht(i))
        return h || (r.value = i), !0;
    }
    const c = o ? Number(n) < t.length : Je(t, n), u = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Ht(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && u && (c ? xt(i, r) && oi(t, "set", n, i) : oi(t, "add", n, i)), u;
  }
  deleteProperty(t, n) {
    const i = Je(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && oi(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Pn(n) || !Mh.has(n)) && zt(t, "has", n), i;
  }
  ownKeys(t) {
    return zt(
      t,
      "iterate",
      Se(t) ? "length" : Ea
    ), Reflect.ownKeys(t);
  }
}
class im extends zh {
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
const am = /* @__PURE__ */ new Uh(), rm = /* @__PURE__ */ new im(), om = /* @__PURE__ */ new Uh(!0);
const Gc = (e) => e, Zo = (e) => Reflect.getPrototypeOf(e);
function sm(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = Bi(r), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = a[e](...i), f = n ? Gc : t ? nr : $n;
    return !t && zt(
      r,
      "iterate",
      u ? Kc : Ea
    ), bt(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: b, done: C } = h.next();
          return C ? { value: b, done: C } : {
            value: c ? [f(b[0]), f(b[1])] : f(b),
            done: C
          };
        }
      }
    );
  };
}
function Jo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function lm(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      e || (xt(a, c) && zt(o, "get", a), zt(o, "get", c));
      const { has: u } = Zo(o), h = t ? Gc : e ? nr : $n;
      if (u.call(o, a))
        return h(r.get(a));
      if (u.call(o, c))
        return h(r.get(c));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && zt(/* @__PURE__ */ Ye(a), "iterate", Ea), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      return e || (xt(a, c) && zt(o, "has", a), zt(o, "has", c)), a === c ? r.has(a) : r.has(a) || r.has(c);
    },
    forEach(a, r) {
      const o = this, c = o.__v_raw, u = /* @__PURE__ */ Ye(c), h = t ? Gc : e ? nr : $n;
      return !e && zt(u, "iterate", Ea), c.forEach((f, b) => a.call(r, h(f), h(b), o));
    }
  };
  return bt(
    n,
    e ? {
      add: Jo("add"),
      set: Jo("set"),
      delete: Jo("delete"),
      clear: Jo("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = Zo(r), c = /* @__PURE__ */ Ye(a), u = !t && !/* @__PURE__ */ Cn(a) && !/* @__PURE__ */ vi(a) ? c : a;
        return o.has.call(r, u) || xt(a, u) && o.has.call(r, a) || xt(c, u) && o.has.call(r, c) || (r.add(u), oi(r, "add", u, u)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Cn(r) && !/* @__PURE__ */ vi(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: c, get: u } = Zo(o);
        let h = c.call(o, a);
        h || (a = /* @__PURE__ */ Ye(a), h = c.call(o, a));
        const f = u.call(o, a);
        return o.set(a, r), h ? xt(r, f) && oi(o, "set", a, r) : oi(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: c } = Zo(r);
        let u = o.call(r, a);
        u || (a = /* @__PURE__ */ Ye(a), u = o.call(r, a)), c && c.call(r, a);
        const h = r.delete(a);
        return u && oi(r, "delete", a, void 0), h;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && oi(
          a,
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
  ].forEach((a) => {
    n[a] = sm(a, e, t);
  }), n;
}
function xu(e, t) {
  const n = lm(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Je(n, a) && a in i ? n : i,
    a,
    r
  );
}
const cm = {
  get: /* @__PURE__ */ xu(!1, !1)
}, um = {
  get: /* @__PURE__ */ xu(!1, !0)
}, dm = {
  get: /* @__PURE__ */ xu(!0, !1)
};
const Bh = /* @__PURE__ */ new WeakMap(), jh = /* @__PURE__ */ new WeakMap(), Hh = /* @__PURE__ */ new WeakMap(), fm = /* @__PURE__ */ new WeakMap();
function hm(e) {
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
function Mt(e) {
  return /* @__PURE__ */ vi(e) ? e : Ou(
    e,
    !1,
    am,
    cm,
    Bh
  );
}
// @__NO_SIDE_EFFECTS__
function pm(e) {
  return Ou(
    e,
    !1,
    om,
    um,
    jh
  );
}
// @__NO_SIDE_EFFECTS__
function lo(e) {
  return Ou(
    e,
    !0,
    rm,
    dm,
    Hh
  );
}
function Ou(e, t, n, i, a) {
  if (!Qe(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = hm(Fg(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? i : n
  );
  return a.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function Aa(e) {
  return /* @__PURE__ */ vi(e) ? /* @__PURE__ */ Aa(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function vi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Nu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ye(t) : e;
}
function vm(e) {
  return !Je(e, "__v_skip") && Object.isExtensible(e) && Ah(e, "__v_skip", !0), e;
}
const $n = (e) => Qe(e) ? /* @__PURE__ */ Mt(e) : e, nr = (e) => Qe(e) ? /* @__PURE__ */ lo(e) : e;
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return Kh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Vh(e) {
  return Kh(e, !0);
}
function Kh(e, t) {
  return /* @__PURE__ */ Ht(e) ? e : new gm(e, t);
}
class gm {
  constructor(t, n) {
    this.dep = new Cl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ye(t), this._value = n ? t : $n(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Cn(t) || /* @__PURE__ */ vi(t);
    t = i ? t : /* @__PURE__ */ Ye(t), xt(t, n) && (this._rawValue = t, this._value = i ? t : $n(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Ht(e) ? e.value : e;
}
function ui(e) {
  return $e(e) ? e() : g(e);
}
const mm = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Ht(a) && !/* @__PURE__ */ Ht(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Gh(e) {
  return /* @__PURE__ */ Aa(e) ? e : new Proxy(e, mm);
}
class bm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Cl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ym(e) {
  return new bm(e);
}
class _m {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Cl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = oo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return Rh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return $h(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function wm(e, t, n = !1) {
  let i, a;
  return $e(e) ? i = e : (i = e.get, a = e.set), new _m(i, a, n);
}
const Qo = {}, ms = /* @__PURE__ */ new WeakMap();
let ga;
function Sm(e, t = !1, n = ga) {
  if (n) {
    let i = ms.get(n);
    i || ms.set(n, i = []), i.push(e);
  }
}
function Cm(e, t, n = We) {
  const { immediate: i, deep: a, once: r, scheduler: o, augmentJob: c, call: u } = n, h = (E) => a ? E : /* @__PURE__ */ Cn(E) || a === !1 || a === 0 ? si(E, 1) : si(E);
  let f, b, C, A, N = !1, k = !1;
  if (/* @__PURE__ */ Ht(e) ? (b = () => e.value, N = /* @__PURE__ */ Cn(e)) : /* @__PURE__ */ Aa(e) ? (b = () => h(e), N = !0) : Se(e) ? (k = !0, N = e.some((E) => /* @__PURE__ */ Aa(E) || /* @__PURE__ */ Cn(E)), b = () => e.map((E) => {
    if (/* @__PURE__ */ Ht(E))
      return E.value;
    if (/* @__PURE__ */ Aa(E))
      return h(E);
    if ($e(E))
      return u ? u(E, 2) : E();
  })) : $e(e) ? t ? b = u ? () => u(e, 2) : e : b = () => {
    if (C) {
      hi();
      try {
        C();
      } finally {
        pi();
      }
    }
    const E = ga;
    ga = f;
    try {
      return u ? u(e, 3, [A]) : e(A);
    } finally {
      ga = E;
    }
  } : b = Sn, t && a) {
    const E = b, re = a === !0 ? 1 / 0 : a;
    b = () => si(E(), re);
  }
  const O = Xg(), F = () => {
    f.stop(), O && O.active && Cu(O.effects, f);
  };
  if (r && t) {
    const E = t;
    t = (...re) => {
      const ue = E(...re);
      return F(), ue;
    };
  }
  let D = k ? new Array(e.length).fill(Qo) : Qo;
  const M = (E) => {
    if (!(!(f.flags & 1) || !f.dirty && !E))
      if (t) {
        const re = f.run();
        if (E || a || N || (k ? re.some((ue, X) => xt(ue, D[X])) : xt(re, D))) {
          C && C();
          const ue = ga;
          ga = f;
          try {
            const X = [
              re,
              // pass undefined as the old value when it's changed for the first time
              D === Qo ? void 0 : k && D[0] === Qo ? [] : D,
              A
            ];
            D = re, u ? u(t, 3, X) : (
              // @ts-expect-error
              t(...X)
            );
          } finally {
            ga = ue;
          }
        }
      } else
        f.run();
  };
  return c && c(M), f = new Nh(b), f.scheduler = o ? () => o(M, !1) : M, A = (E) => Sm(E, !1, f), C = f.onStop = () => {
    const E = ms.get(f);
    if (E) {
      if (u)
        u(E, 4);
      else
        for (const re of E) re();
      ms.delete(f);
    }
  }, t ? i ? M(!0) : D = f.run() : o ? o(M.bind(null, !0), !0) : f.run(), F.pause = f.pause.bind(f), F.resume = f.resume.bind(f), F.stop = F, F;
}
function si(e, t = 1 / 0, n) {
  if (t <= 0 || !Qe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ht(e))
    si(e.value, t, n);
  else if (Se(e))
    for (let i = 0; i < e.length; i++)
      si(e[i], t, n);
  else if (xa(e) || Bi(e))
    e.forEach((i) => {
      si(i, t, n);
    });
  else if (Eh(e)) {
    for (const i in e)
      si(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && si(e[i], t, n);
  }
  return e;
}
function Ao(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    El(a, t, n);
  }
}
function Tn(e, t, n, i) {
  if ($e(e)) {
    const a = Ao(e, t, n, i);
    return a && Ch(a) && a.catch((r) => {
      El(r, t, n);
    }), a;
  }
  if (Se(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(Tn(e[r], t, n, i));
    return a;
  }
}
function El(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || We;
  if (t) {
    let c = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const f = c.ec;
      if (f) {
        for (let b = 0; b < f.length; b++)
          if (f[b](e, u, h) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      hi(), Ao(r, null, 10, [
        e,
        u,
        h
      ]), pi();
      return;
    }
  }
  Tm(e, n, a, i, o);
}
function Tm(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Xt = [];
let jn = -1;
const Ya = [];
let zi = null, Ka = 0;
const Wh = /* @__PURE__ */ Promise.resolve();
let bs = null;
function nn(e) {
  const t = bs || Wh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Em(e) {
  let t = jn + 1, n = Xt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Xt[i], r = co(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Lu(e) {
  if (!(e.flags & 1)) {
    const t = co(e), n = Xt[Xt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= co(n) ? Xt.push(e) : Xt.splice(Em(t), 0, e), e.flags |= 1, qh();
  }
}
function qh() {
  bs || (bs = Wh.then(Zh));
}
function Yh(e) {
  if (!Se(e))
    zi && e.id === -1 ? zi.splice(Ka + 1, 0, e) : e.flags & 1 || (Ya.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ya.push(e[t]);
  qh();
}
function Pd(e, t, n = jn + 1) {
  for (; n < Xt.length; n++) {
    const i = Xt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Xt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Xh(e) {
  if (Ya.length) {
    const t = [...new Set(Ya)].sort(
      (n, i) => co(n) - co(i)
    );
    if (Ya.length = 0, zi) {
      for (let n = 0; n < t.length; n++)
        zi.push(t[n]);
      return;
    }
    for (zi = t, Ka = 0; Ka < zi.length; Ka++) {
      const n = zi[Ka];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    zi = null, Ka = 0;
  }
}
const co = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Zh(e) {
  try {
    for (jn = 0; jn < Xt.length; jn++) {
      const t = Xt[jn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ao(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; jn < Xt.length; jn++) {
      const t = Xt[jn];
      t && (t.flags &= -2);
    }
    jn = -1, Xt.length = 0, Xh(), bs = null, (Xt.length || Ya.length) && Zh();
  }
}
let Nt = null, Al = null;
function ys(e) {
  const t = Nt;
  return Nt = e, Al = e && e.type.__scopeId || null, t;
}
function Am(e) {
  Al = e;
}
function km() {
  Al = null;
}
const xm = (e) => Le;
function Le(e, t = Nt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Ts(-1);
    const r = ys(t), o = di.length;
    let c;
    try {
      c = e(...a);
    } finally {
      for (let u = di.length; u > o; u--) Mu();
      ys(r), i._d && Ts(1);
    }
    return c;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Re(e, t) {
  if (Nt === null)
    return e;
  const n = Rl(Nt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, c, u = We] = t[a];
    r && ($e(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && si(o), i.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: c,
      modifiers: u
    }));
  }
  return e;
}
function ua(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const c = a[o];
    r && (c.oldValue = r[o].value);
    let u = c.dir[i];
    u && (hi(), Tn(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), pi());
  }
}
function yn(e, t) {
  if (Bt) {
    let n = Bt.provides;
    const i = Bt.parent && Bt.parent.provides;
    i === n && (n = Bt.provides = Object.create(i)), n[e] = t;
  }
}
function Ut(e, t, n = !1) {
  const i = Na();
  if (i || Za) {
    let a = Za ? Za._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && $e(t) ? t.call(i && i.proxy) : t;
  }
}
const Om = /* @__PURE__ */ Symbol.for("v-scx"), Nm = () => Ut(Om);
function Lm(e, t) {
  return kl(e, null, t);
}
function Rm(e, t) {
  return kl(
    e,
    null,
    { flush: "sync" }
  );
}
function qe(e, t, n) {
  return kl(e, t, n);
}
function kl(e, t, n = We) {
  const { immediate: i, deep: a, flush: r, once: o } = n, c = bt({}, n), u = t && i || !t && r !== "post";
  let h;
  if (go) {
    if (r === "sync") {
      const A = Nm();
      h = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!u) {
      const A = () => {
      };
      return A.stop = Sn, A.resume = Sn, A.pause = Sn, A;
    }
  }
  const f = Bt;
  c.call = (A, N, k) => Tn(A, f, N, k);
  let b = !1;
  r === "post" ? c.scheduler = (A) => {
    Yt(A, f && f.suspense);
  } : r !== "sync" && (b = !0, c.scheduler = (A, N) => {
    N ? A() : Lu(A);
  }), c.augmentJob = (A) => {
    t && (A.flags |= 4), b && (A.flags |= 2, f && (A.id = f.uid, A.i = f));
  };
  const C = Cm(e, t, c);
  return go && (h ? h.push(C) : u && C()), C;
}
function Im(e, t, n) {
  const i = this.proxy, a = lt(e) ? e.includes(".") ? Jh(i, e) : () => i[e] : e.bind(i, i);
  let r;
  $e(t) ? r = t : (r = t.handler, n = t);
  const o = Oo(this), c = kl(a, r.bind(i), n);
  return o(), c;
}
function Jh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Fi = /* @__PURE__ */ new WeakMap(), Qh = /* @__PURE__ */ Symbol("_vte"), xl = (e) => e.__isTeleport, ba = (e) => e && (e.disabled || e.disabled === ""), Pm = (e) => e && (e.defer || e.defer === ""), $d = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Fd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Wc = (e, t) => {
  const n = e && e.to;
  return lt(n) ? t ? t(n) : null : n;
}, $m = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, o, c, u, h) {
    const {
      mc: f,
      pc: b,
      pbc: C,
      o: { insert: A, querySelector: N, createText: k, createComment: O, parentNode: F }
    } = h, D = ba(t.props);
    let { dynamicChildren: M } = t;
    const E = (X, fe, Y) => {
      X.shapeFlag & 16 && f(
        X.children,
        fe,
        Y,
        a,
        r,
        o,
        c,
        u
      );
    }, re = (X = t) => {
      const fe = ba(X.props), Y = X.target = Wc(X.props, N), se = qc(Y, X, k, A);
      Y && (o !== "svg" && $d(Y) ? o = "svg" : o !== "mathml" && Fd(Y) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Y), fe || (E(X, Y, se), Mr(X, !1)));
    }, ue = (X) => {
      const fe = () => {
        if (Fi.get(X) === fe) {
          if (Fi.delete(X), ba(X.props)) {
            const Y = F(X.el) || n;
            E(X, Y, X.anchor), Mr(X, !0);
          }
          re(X);
        }
      };
      Fi.set(X, fe), Yt(fe, r);
    };
    if (e == null) {
      const X = t.el = k(""), fe = t.anchor = k("");
      if (A(X, n, i), A(fe, n, i), Pm(t.props) || r && r.pendingBranch) {
        ue(t);
        return;
      }
      D && (E(t, n, fe), Mr(t, !0)), re();
    } else {
      t.el = e.el;
      const X = t.anchor = e.anchor, fe = Fi.get(e);
      if (fe) {
        fe.flags |= 8, Fi.delete(e), ue(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Y = t.target = e.target, se = t.targetAnchor = e.targetAnchor, ge = ba(e.props), J = ge ? n : Y, Q = ge ? X : se;
      if (o === "svg" || $d(Y) ? o = "svg" : (o === "mathml" || Fd(Y)) && (o = "mathml"), M ? (C(
        e.dynamicChildren,
        M,
        J,
        a,
        r,
        o,
        c
      ), Du(e, t, !0)) : u || b(
        e,
        t,
        J,
        Q,
        a,
        r,
        o,
        c,
        !1
      ), D)
        ge ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : es(
          t,
          n,
          X,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = Wc(t.props, N);
        $ && (t.target = $, es(
          t,
          $,
          null,
          h,
          0
        ));
      } else ge && es(
        t,
        Y,
        se,
        h,
        1
      );
      Mr(t, D);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: c,
      anchor: u,
      targetStart: h,
      targetAnchor: f,
      target: b,
      props: C
    } = e, A = ba(C), N = r || !A, k = Fi.get(e);
    if (k && (k.flags |= 8, Fi.delete(e)), b && (a(h), a(f)), r && a(u), !k && (A || b) && o & 16)
      for (let O = 0; O < c.length; O++) {
        const F = c[O];
        i(
          F,
          t,
          n,
          N,
          !!F.dynamicChildren
        );
      }
  },
  move: es,
  hydrate: Fm
};
function es(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: c, shapeFlag: u, children: h, props: f } = e, b = r === 2;
  if (b && i(o, t, n), !Fi.has(e) && (!b || ba(f)) && u & 16)
    for (let C = 0; C < h.length; C++)
      a(
        h[C],
        t,
        n,
        2
      );
  b && i(c, t, n);
}
function Fm(e, t, n, i, a, r, {
  o: { nextSibling: o, parentNode: c, querySelector: u, insert: h, createText: f }
}, b) {
  function C(O, F) {
    let D = F;
    for (; D; ) {
      if (D && D.nodeType === 8) {
        if (D.data === "teleport start anchor")
          t.targetStart = D;
        else if (D.data === "teleport anchor") {
          t.targetAnchor = D, O._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      D = o(D);
    }
  }
  function A(O, F) {
    F.anchor = b(
      o(O),
      F,
      c(O),
      n,
      i,
      a,
      r
    );
  }
  const N = t.target = Wc(
    t.props,
    u
  ), k = ba(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (k ? (A(e, t), C(N, O), t.targetAnchor || qc(
      N,
      t,
      f,
      h,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === N ? e : null
    )) : (t.anchor = o(e), C(N, O), t.targetAnchor || qc(N, t, f, h), b(
      O && o(O),
      t,
      N,
      n,
      i,
      a,
      r
    ))), Mr(t, k);
  } else k && t.shapeFlag & 16 && (A(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const ep = $m;
function Mr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function qc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[Qh] = o, e && (i(r, e, a), i(o, e, a)), o;
}
const _n = /* @__PURE__ */ Symbol("_leaveCb"), Or = /* @__PURE__ */ Symbol("_enterCb");
function Dm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return qi(() => {
    e.isMounted = !0;
  }), ir(() => {
    e.isUnmounting = !0;
  }), e;
}
const vn = [Function, Array], tp = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: vn,
  onEnter: vn,
  onAfterEnter: vn,
  onEnterCancelled: vn,
  // leave
  onBeforeLeave: vn,
  onLeave: vn,
  onAfterLeave: vn,
  onLeaveCancelled: vn,
  // appear
  onBeforeAppear: vn,
  onAppear: vn,
  onAfterAppear: vn,
  onAppearCancelled: vn
}, np = (e) => {
  const t = e.subTree;
  return t.component ? np(t.component) : t;
}, Mm = {
  name: "BaseTransition",
  props: tp,
  setup(e, { slots: t }) {
    const n = Na(), i = Dm();
    return () => {
      const a = t.default && rp(t.default(), !0), r = a && a.length ? ip(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? B() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: c } = o;
      if (i.isLeaving)
        return uc(r);
      const u = _s(r);
      if (!u)
        return uc(r);
      let h = Yc(
        u,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (b) => h = b
      );
      u.type !== Ot && uo(u, h);
      let f = n.subTree && _s(n.subTree);
      if (f && f.type !== Ot && !ya(f, u) && np(n).type !== Ot) {
        let b = Yc(
          f,
          o,
          i,
          n
        );
        if (uo(f, b), c === "out-in" && u.type !== Ot)
          return i.isLeaving = !0, b.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete b.afterLeave, f = void 0;
          }, uc(r);
        c === "in-out" && u.type !== Ot ? b.delayLeave = (C, A, N) => {
          const k = ap(
            i,
            f
          );
          k[String(f.key)] = f, C[_n] = () => {
            A(), C[_n] = void 0, delete h.delayedLeave, f = void 0;
          }, h.delayedLeave = () => {
            N(), delete h.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function ip(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ot) {
        t = n;
        break;
      }
  }
  return t;
}
const zm = Mm;
function ap(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Yc(e, t, n, i, a) {
  const {
    appear: r,
    mode: o,
    persisted: c = !1,
    onBeforeEnter: u,
    onEnter: h,
    onAfterEnter: f,
    onEnterCancelled: b,
    onBeforeLeave: C,
    onLeave: A,
    onAfterLeave: N,
    onLeaveCancelled: k,
    onBeforeAppear: O,
    onAppear: F,
    onAfterAppear: D,
    onAppearCancelled: M
  } = t, E = String(e.key), re = ap(n, e), ue = (Y, se) => {
    Y && Tn(
      Y,
      i,
      9,
      se
    );
  }, X = (Y, se) => {
    const ge = se[1];
    ue(Y, se), Se(Y) ? Y.every((J) => J.length <= 1) && ge() : Y.length <= 1 && ge();
  }, fe = {
    mode: o,
    persisted: c,
    beforeEnter(Y) {
      let se = u;
      if (!n.isMounted)
        if (r)
          se = O || u;
        else
          return;
      Y[_n] && Y[_n](
        !0
        /* cancelled */
      );
      const ge = re[E];
      ge && ya(e, ge) && ge.el[_n] && ge.el[_n](), ue(se, [Y]);
    },
    enter(Y) {
      if (re[E] === e) return;
      let se = h, ge = f, J = b;
      if (!n.isMounted)
        if (r)
          se = F || h, ge = D || f, J = M || b;
        else
          return;
      let Q = !1;
      Y[Or] = (z) => {
        Q || (Q = !0, z ? ue(J, [Y]) : ue(ge, [Y]), fe.delayedLeave && fe.delayedLeave(), Y[Or] = void 0);
      };
      const $ = Y[Or].bind(null, !1);
      se ? X(se, [Y, $]) : $();
    },
    leave(Y, se) {
      const ge = String(e.key);
      if (Y[Or] && Y[Or](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      ue(C, [Y]);
      let J = !1;
      Y[_n] = ($) => {
        J || (J = !0, se(), $ ? ue(k, [Y]) : ue(N, [Y]), Y[_n] = void 0, re[ge] === e && delete re[ge]);
      };
      const Q = Y[_n].bind(null, !1);
      re[ge] = e, A ? X(A, [Y, Q]) : Q();
    },
    clone(Y) {
      const se = Yc(
        Y,
        t,
        n,
        i,
        a
      );
      return a && a(se), se;
    }
  };
  return fe;
}
function uc(e) {
  if (Ol(e))
    return e = Gi(e), e.children = null, e;
}
function _s(e) {
  if (!Ol(e))
    return xl(e.type) && e.children ? ip(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && $e(n.default))
      return n.default();
  }
}
function uo(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    uo(
      xl(n.type) && _s(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function rp(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const c = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === ae ? (o.patchFlag & 128 && a++, i = i.concat(
      rp(o.children, t, c)
    )) : (t || o.type !== Ot) && i.push(c != null ? Gi(o, { key: c }) : o);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Lt(e, t) {
  return $e(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    bt({ name: e.name }, t, { setup: e })
  ) : e;
}
function op(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Um(e) {
  const t = Na(), n = /* @__PURE__ */ Vh(null);
  if (t) {
    const a = t.refs === We ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
function Dd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ws = /* @__PURE__ */ new WeakMap();
function Wr(e, t, n, i, a = !1) {
  if (Se(e)) {
    e.forEach(
      (k, O) => Wr(
        k,
        t && (Se(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Xa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Wr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Rl(i.component) : i.el, o = a ? null : r, { i: c, r: u } = e, h = t && t.r, f = c.refs === We ? c.refs = {} : c.refs, b = c.setupState, C = /* @__PURE__ */ Ye(b), A = b === We ? Sh : (k) => Dd(f, k) ? !1 : Je(C, k), N = (k, O) => !(O && Dd(f, O));
  if (h != null && h !== u) {
    if (Md(t), lt(h))
      f[h] = null, A(h) && (b[h] = null);
    else if (/* @__PURE__ */ Ht(h)) {
      const k = t;
      N(h, k.k) && (h.value = null), k.k && (f[k.k] = null);
    }
  }
  if ($e(u))
    Ao(u, c, 12, [o, f]);
  else {
    const k = lt(u), O = /* @__PURE__ */ Ht(u);
    if (k || O) {
      const F = () => {
        if (e.f) {
          const D = k ? A(u) ? b[u] : f[u] : N() || !e.k ? u.value : f[e.k];
          if (a)
            Se(D) && Cu(D, r);
          else if (Se(D))
            D.includes(r) || D.push(r);
          else if (k)
            f[u] = [r], A(u) && (b[u] = f[u]);
          else {
            const M = [r];
            N(u, e.k) && (u.value = M), e.k && (f[e.k] = M);
          }
        } else k ? (f[u] = o, A(u) && (b[u] = o)) : O && (N(u, e.k) && (u.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const D = () => {
          F(), ws.delete(e);
        };
        D.id = -1, ws.set(e, D), Yt(D, n);
      } else
        Md(e), F();
    }
  }
}
function Md(e) {
  const t = ws.get(e);
  t && (t.flags |= 8, ws.delete(e));
}
Sl().requestIdleCallback;
Sl().cancelIdleCallback;
const Xa = (e) => !!e.type.__asyncLoader, Ol = (e) => e.type.__isKeepAlive;
function Bm(e, t) {
  sp(e, "a", t);
}
function jm(e, t) {
  sp(e, "da", t);
}
function sp(e, t, n = Bt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Nl(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Ol(a.parent.vnode) && Hm(i, t, n, a), a = a.parent;
  }
}
function Hm(e, t, n, i) {
  const a = Nl(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  ko(() => {
    Cu(i[t], a);
  }, n);
}
function Nl(e, t, n = Bt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      hi();
      const c = Oo(n), u = Tn(t, n, e, o);
      return c(), pi(), u;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const bi = (e) => (t, n = Bt) => {
  (!go || e === "sp") && Nl(e, (...i) => t(...i), n);
}, lp = bi("bm"), qi = bi("m"), cp = bi(
  "bu"
), Vm = bi("u"), ir = bi(
  "bum"
), ko = bi("um"), Km = bi(
  "sp"
), Gm = bi("rtg"), Wm = bi("rtc");
function qm(e, t = Bt) {
  Nl("ec", e, t);
}
const Ru = "components", Ym = "directives";
function je(e, t) {
  return Pu(Ru, e, !0, t) || e;
}
const up = /* @__PURE__ */ Symbol.for("v-ndc");
function Iu(e) {
  return lt(e) ? Pu(Ru, e, !1) || e : e || up;
}
function zd(e) {
  return Pu(Ym, e);
}
function Pu(e, t, n = !0, i = !1) {
  const a = Nt || Bt;
  if (a) {
    const r = a.type;
    if (e === Ru) {
      const c = Lb(
        r,
        !1
      );
      if (c && (c === t || c === jt(t) || c === _l(jt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ud(a[e] || r[e], t) || // global registration
      Ud(a.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function Ud(e, t) {
  return e && (e[t] || e[jt(t)] || e[_l(jt(t))]);
}
function Ce(e, t, n, i) {
  let a;
  const r = n, o = Se(e);
  if (o || lt(e)) {
    const c = o && /* @__PURE__ */ Aa(e);
    let u = !1, h = !1;
    c && (u = !/* @__PURE__ */ Cn(e), h = /* @__PURE__ */ vi(e), e = Tl(e)), a = new Array(e.length);
    for (let f = 0, b = e.length; f < b; f++)
      a[f] = t(
        u ? h ? nr($n(e[f])) : $n(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let c = 0; c < e; c++)
      a[c] = t(c + 1, c, void 0, r);
  } else if (Qe(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (c, u) => t(c, u, void 0, r)
      );
    else {
      const c = Object.keys(e);
      a = new Array(c.length);
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u];
        a[u] = t(e[f], f, u, r);
      }
    }
  else
    a = [];
  return a;
}
function Me(e, t, n, i, a, r) {
  if (n == null && (n = {}), Nt.ce || Nt.parent && Xa(Nt.parent) && Nt.parent.ce) {
    const h = n, f = Object.keys(h).length > 0;
    return t !== "default" && (h.name = t), y(), Be(
      ae,
      null,
      [ye("slot", h, i && i())],
      f ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const c = di.length;
  y();
  let u;
  try {
    const h = o && dp(o(n)), f = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    h && h.key;
    u = Be(
      ae,
      {
        key: (f && !Pn(f) ? f : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!h && i ? "_fb" : "")
      },
      h || (i ? i() : []),
      h && e._ === 1 ? 64 : -2
    );
  } catch (h) {
    for (let f = di.length; f > c; f--) Mu();
    throw h;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), u;
}
function dp(e) {
  return e.some((t) => ho(t) ? !(t.type === Ot || t.type === ae && !dp(t.children)) : !0) ? e : null;
}
const Xc = (e) => e ? Ip(e) ? Rl(e) : Xc(e.parent) : null, qr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ bt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Xc(e.parent),
    $root: (e) => Xc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => pp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Lu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = nn.bind(e.proxy)),
    $watch: (e) => Im.bind(e)
  })
), dc = (e, t) => e !== We && !e.__isScriptSetup && Je(e, t), Xm = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: o, type: c, appContext: u } = e;
    if (t[0] !== "$") {
      const C = o[t];
      if (C !== void 0)
        switch (C) {
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
        if (dc(i, t))
          return o[t] = 1, i[t];
        if (a !== We && Je(a, t))
          return o[t] = 2, a[t];
        if (Je(r, t))
          return o[t] = 3, r[t];
        if (n !== We && Je(n, t))
          return o[t] = 4, n[t];
        Zc && (o[t] = 0);
      }
    }
    const h = qr[t];
    let f, b;
    if (h)
      return t === "$attrs" && zt(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== We && Je(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      b = u.config.globalProperties, Je(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return dc(a, t) ? (a[t] = n, !0) : i !== We && Je(i, t) ? (i[t] = n, !0) : Je(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: o }
  }, c) {
    let u;
    return !!(n[c] || e !== We && c[0] !== "$" && Je(e, c) || dc(t, c) || Je(r, c) || Je(i, c) || Je(qr, c) || Je(a.config.globalProperties, c) || (u = o.__cssModules) && u[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Je(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Zm() {
  return fp().slots;
}
function Jm() {
  return fp().attrs;
}
function fp(e) {
  const t = Na();
  return t.setupContext || (t.setupContext = $p(t));
}
function Ss(e) {
  return Se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Qm(e, t) {
  return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : bt({}, Ss(e), Ss(t));
}
let Zc = !0;
function eb(e) {
  const t = pp(e), n = e.proxy, i = e.ctx;
  Zc = !1, t.beforeCreate && Bd(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: c,
    provide: u,
    inject: h,
    // lifecycle
    created: f,
    beforeMount: b,
    mounted: C,
    beforeUpdate: A,
    updated: N,
    activated: k,
    deactivated: O,
    beforeDestroy: F,
    beforeUnmount: D,
    destroyed: M,
    unmounted: E,
    render: re,
    renderTracked: ue,
    renderTriggered: X,
    errorCaptured: fe,
    serverPrefetch: Y,
    // public API
    expose: se,
    inheritAttrs: ge,
    // assets
    components: J,
    directives: Q,
    filters: $
  } = t;
  if (h && tb(h, i, null), o)
    for (const le in o) {
      const ne = o[le];
      $e(ne) && (i[le] = ne.bind(n));
    }
  if (a) {
    const le = a.call(n, n);
    Qe(le) && (e.data = /* @__PURE__ */ Mt(le));
  }
  if (Zc = !0, r)
    for (const le in r) {
      const ne = r[le], ve = $e(ne) ? ne.bind(n, n) : $e(ne.get) ? ne.get.bind(n, n) : Sn, de = !$e(ne) && $e(ne.set) ? ne.set.bind(n) : Sn, be = H({
        get: ve,
        set: de
      });
      Object.defineProperty(i, le, {
        enumerable: !0,
        configurable: !0,
        get: () => be.value,
        set: (_e) => be.value = _e
      });
    }
  if (c)
    for (const le in c)
      hp(c[le], i, n, le);
  if (u) {
    const le = $e(u) ? u.call(n) : u;
    Reflect.ownKeys(le).forEach((ne) => {
      yn(ne, le[ne]);
    });
  }
  f && Bd(f, e, "c");
  function q(le, ne) {
    Se(ne) ? ne.forEach((ve) => le(ve.bind(n))) : ne && le(ne.bind(n));
  }
  if (q(lp, b), q(qi, C), q(cp, A), q(Vm, N), q(Bm, k), q(jm, O), q(qm, fe), q(Wm, ue), q(Gm, X), q(ir, D), q(ko, E), q(Km, Y), Se(se))
    if (se.length) {
      const le = e.exposed || (e.exposed = {});
      se.forEach((ne) => {
        Object.defineProperty(le, ne, {
          get: () => n[ne],
          set: (ve) => n[ne] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === Sn && (e.render = re), ge != null && (e.inheritAttrs = ge), J && (e.components = J), Q && (e.directives = Q), Y && op(e);
}
function tb(e, t, n = Sn) {
  Se(e) && (e = Jc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Qe(a) ? "default" in a ? r = Ut(
      a.from || i,
      a.default,
      !0
    ) : r = Ut(a.from || i) : r = Ut(a), /* @__PURE__ */ Ht(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function Bd(e, t, n) {
  Tn(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function hp(e, t, n, i) {
  let a = i.includes(".") ? Jh(n, i) : () => n[i];
  if (lt(e)) {
    const r = t[e];
    $e(r) && qe(a, r);
  } else if ($e(e))
    qe(a, e.bind(n));
  else if (Qe(e))
    if (Se(e))
      e.forEach((r) => hp(r, t, n, i));
    else {
      const r = $e(e.handler) ? e.handler.bind(n) : t[e.handler];
      $e(r) && qe(a, r, e);
    }
}
function pp(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !a.length && !n && !i ? u = t : (u = {}, a.length && a.forEach(
    (h) => Cs(u, h, o, !0)
  ), Cs(u, t, o)), Qe(t) && r.set(t, u), u;
}
function Cs(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Cs(e, r, n, !0), a && a.forEach(
    (o) => Cs(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const c = nb[o] || n && n[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const nb = {
  data: jd,
  props: Hd,
  emits: Hd,
  // objects
  methods: zr,
  computed: zr,
  // lifecycle
  beforeCreate: qt,
  created: qt,
  beforeMount: qt,
  mounted: qt,
  beforeUpdate: qt,
  updated: qt,
  beforeDestroy: qt,
  beforeUnmount: qt,
  destroyed: qt,
  unmounted: qt,
  activated: qt,
  deactivated: qt,
  errorCaptured: qt,
  serverPrefetch: qt,
  // assets
  components: zr,
  directives: zr,
  // watch
  watch: ab,
  // provide / inject
  provide: jd,
  inject: ib
};
function jd(e, t) {
  return t ? e ? function() {
    return bt(
      $e(e) ? e.call(this, this) : e,
      $e(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ib(e, t) {
  return zr(Jc(e), Jc(t));
}
function Jc(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function qt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zr(e, t) {
  return e ? bt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Hd(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : bt(
    /* @__PURE__ */ Object.create(null),
    Ss(e),
    Ss(t ?? {})
  ) : t;
}
function ab(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = bt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = qt(e[i], t[i]);
  return n;
}
function vp() {
  return {
    app: null,
    config: {
      isNativeTag: Sh,
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
let rb = 0;
function ob(e, t) {
  return function(i, a = null) {
    $e(i) || (i = bt({}, i)), a != null && !Qe(a) && (a = null);
    const r = vp(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const h = r.app = {
      _uid: rb++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Ib,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...b) {
        return o.has(f) || (f && $e(f.install) ? (o.add(f), f.install(h, ...b)) : $e(f) && (o.add(f), f(h, ...b))), h;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), h;
      },
      component(f, b) {
        return b ? (r.components[f] = b, h) : r.components[f];
      },
      directive(f, b) {
        return b ? (r.directives[f] = b, h) : r.directives[f];
      },
      mount(f, b, C) {
        if (!u) {
          const A = h._ceVNode || ye(i, a);
          return A.appContext = r, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(A, f, C), u = !0, h._container = f, f.__vue_app__ = h, Rl(A.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        u && (Tn(
          c,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(f, b) {
        return r.provides[f] = b, h;
      },
      runWithContext(f) {
        const b = Za;
        Za = h;
        try {
          return f();
        } finally {
          Za = b;
        }
      }
    };
    return h;
  };
}
let Za = null;
function gp(e, t, n = We) {
  const i = Na(), a = jt(t), r = mi(t), o = mp(e, a), c = ym((u, h) => {
    let f, b = We, C;
    return Rm(() => {
      const A = e[a];
      xt(f, A) && (f = A, h());
    }), {
      get() {
        return u(), n.get ? n.get(f) : f;
      },
      set(A) {
        const N = n.set ? n.set(A) : A;
        if (!xt(N, f) && !(b !== We && xt(A, b)))
          return;
        const k = i.vnode.props, O = !!(k && // check if parent has passed v-model
        (t in k || a in k || r in k) && (`onUpdate:${t}` in k || `onUpdate:${a}` in k || `onUpdate:${r}` in k));
        O || (f = A, h()), i.emit(`update:${t}`, N), xt(A, b) && (xt(A, N) && !xt(N, C) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && b !== We && !xt(N, f)) && h(), b = A, C = N;
      }
    };
  });
  return c[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? o || We : c, done: !1 } : { done: !0 };
      }
    };
  }, c;
}
const mp = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${jt(t)}Modifiers`] || e[`${mi(t)}Modifiers`];
function sb(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || We;
  let a = n;
  const r = t.startsWith("update:"), o = r && mp(i, t.slice(7));
  o && (o.trim && (a = n.map((f) => lt(f) ? f.trim() : f)), o.number && (a = a.map(wl)));
  let c, u = i[c = rc(t)] || // also try camelCase event handler (#2249)
  i[c = rc(jt(t))];
  !u && r && (u = i[c = rc(mi(t))]), u && Tn(
    u,
    e,
    6,
    a
  );
  const h = i[c + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Tn(
      h,
      e,
      6,
      a
    );
  }
}
const lb = /* @__PURE__ */ new WeakMap();
function bp(e, t, n = !1) {
  const i = n ? lb : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, c = !1;
  if (!$e(e)) {
    const u = (h) => {
      const f = bp(h, t, !0);
      f && (c = !0, bt(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (Qe(e) && i.set(e, null), null) : (Se(r) ? r.forEach((u) => o[u] = null) : bt(o, r), Qe(e) && i.set(e, o), o);
}
function Ll(e, t) {
  return !e || !ml(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Je(e, t[0].toLowerCase() + t.slice(1)) || Je(e, mi(t)) || Je(e, t));
}
function Vd(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: c,
    emit: u,
    render: h,
    renderCache: f,
    props: b,
    data: C,
    setupState: A,
    ctx: N,
    inheritAttrs: k
  } = e, O = ys(e);
  let F, D;
  try {
    if (n.shapeFlag & 4) {
      const E = a || i, re = E;
      F = Gn(
        h.call(
          re,
          E,
          f,
          b,
          A,
          C,
          N
        )
      ), D = c;
    } else {
      const E = t;
      F = Gn(
        E.length > 1 ? E(
          b,
          { attrs: c, slots: o, emit: u }
        ) : E(
          b,
          null
        )
      ), D = t.props ? c : cb(c);
    }
  } catch (E) {
    di.length = 0, El(E, e, 1), F = ye(Ot);
  }
  let M = F;
  if (D && k !== !1) {
    const E = Object.keys(D), { shapeFlag: re } = M;
    E.length && re & 7 && (r && E.some(bl) && (D = ub(
      D,
      r
    )), M = Gi(M, D, !1, !0));
  }
  if (n.dirs && (M = Gi(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const E = xl(M.type) && _s(M) || M;
    uo(E, n.transition);
  }
  return F = M, ys(O), F;
}
const cb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ml(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ub = (e, t) => {
  const n = {};
  for (const i in e)
    (!bl(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function db(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: o, children: c, patchFlag: u } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return i ? Kd(i, o, h) : !!o;
    if (u & 8) {
      const f = t.dynamicProps;
      for (let b = 0; b < f.length; b++) {
        const C = f[b];
        if (yp(o, i, C) && !Ll(h, C))
          return !0;
      }
    }
  } else
    return (a || c) && (!c || !c.$stable) ? !0 : i === o ? !1 : i ? o ? Kd(i, o, h) : !0 : !!o;
  return !1;
}
function Kd(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (yp(t, e, r) && !Ll(n, r))
      return !0;
  }
  return !1;
}
function yp(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Qe(i) && Qe(a) ? !Ki(i, a) : i !== a;
}
function fb({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const _p = {}, wp = () => Object.create(_p), Sp = (e) => Object.getPrototypeOf(e) === _p;
function hb(e, t, n, i = !1) {
  const a = {}, r = wp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Cp(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ pm(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function pb(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, c = /* @__PURE__ */ Ye(a), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let b = 0; b < f.length; b++) {
        let C = f[b];
        if (Ll(e.emitsOptions, C))
          continue;
        const A = t[C];
        if (u)
          if (Je(r, C))
            A !== r[C] && (r[C] = A, h = !0);
          else {
            const N = jt(C);
            a[N] = Qc(
              u,
              c,
              N,
              A,
              e,
              !1
            );
          }
        else
          A !== r[C] && (r[C] = A, h = !0);
      }
    }
  } else {
    Cp(e, t, a, r) && (h = !0);
    let f;
    for (const b in c)
      (!t || // for camelCase
      !Je(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = mi(b)) === b || !Je(t, f))) && (u ? n && // for camelCase
      (n[b] !== void 0 || // for kebab-case
      n[f] !== void 0) && (a[b] = Qc(
        u,
        c,
        b,
        void 0,
        e,
        !0
      )) : delete a[b]);
    if (r !== c)
      for (const b in r)
        (!t || !Je(t, b)) && (delete r[b], h = !0);
  }
  h && oi(e.attrs, "set", "");
}
function Cp(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (Vr(u))
        continue;
      const h = t[u];
      let f;
      a && Je(a, f = jt(u)) ? !r || !r.includes(f) ? n[f] = h : (c || (c = {}))[f] = h : Ll(e.emitsOptions, u) || (!(u in i) || h !== i[u]) && (i[u] = h, o = !0);
    }
  if (r) {
    const u = /* @__PURE__ */ Ye(n), h = c || We;
    for (let f = 0; f < r.length; f++) {
      const b = r[f];
      n[b] = Qc(
        a,
        u,
        b,
        h[b],
        e,
        !Je(h, b)
      );
    }
  }
  return o;
}
function Qc(e, t, n, i, a, r) {
  const o = e[n];
  if (o != null) {
    const c = Je(o, "default");
    if (c && i === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && $e(u)) {
        const { propsDefaults: h } = a;
        if (n in h)
          i = h[n];
        else {
          const f = Oo(a);
          i = h[n] = u.call(
            null,
            t
          ), f();
        }
      } else
        i = u;
      a.ce && a.ce._setProp(n, i);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !c ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === mi(n)) && (i = !0));
  }
  return i;
}
const vb = /* @__PURE__ */ new WeakMap();
function Tp(e, t, n = !1) {
  const i = n ? vb : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, c = [];
  let u = !1;
  if (!$e(e)) {
    const f = (b) => {
      u = !0;
      const [C, A] = Tp(b, t, !0);
      bt(o, C), A && c.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !u)
    return Qe(e) && i.set(e, qa), qa;
  if (Se(r))
    for (let f = 0; f < r.length; f++) {
      const b = jt(r[f]);
      Gd(b) && (o[b] = We);
    }
  else if (r)
    for (const f in r) {
      const b = jt(f);
      if (Gd(b)) {
        const C = r[f], A = o[b] = Se(C) || $e(C) ? { type: C } : bt({}, C), N = A.type;
        let k = !1, O = !0;
        if (Se(N))
          for (let F = 0; F < N.length; ++F) {
            const D = N[F], M = $e(D) && D.name;
            if (M === "Boolean") {
              k = !0;
              break;
            } else M === "String" && (O = !1);
          }
        else
          k = $e(N) && N.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = k, A[
          1
          /* shouldCastTrue */
        ] = O, (k || Je(A, "default")) && c.push(b);
      }
    }
  const h = [o, c];
  return Qe(e) && i.set(e, h), h;
}
function Gd(e) {
  return e[0] !== "$" && !Vr(e);
}
const $u = (e) => e === "_" || e === "_ctx" || e === "$stable", Fu = (e) => Se(e) ? e.map(Gn) : [Gn(e)], gb = (e, t, n) => {
  if (t._n)
    return t;
  const i = Le((...a) => Fu(t(...a)), n);
  return i._c = !1, i;
}, Ep = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if ($u(a)) continue;
    const r = e[a];
    if ($e(r))
      t[a] = gb(a, r, i);
    else if (r != null) {
      const o = Fu(r);
      t[a] = () => o;
    }
  }
}, Ap = (e, t) => {
  const n = Fu(t);
  e.slots.default = () => n;
}, kp = (e, t, n) => {
  for (const i in t)
    (n || !$u(i)) && (e[i] = t[i]);
}, mb = (e, t, n) => {
  const i = e.slots = wp();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (kp(i, t, n), n && Ah(i, "_", a, !0)) : Ep(t, i);
  } else t && Ap(e, t);
}, bb = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, o = We;
  if (i.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? r = !1 : kp(a, t, n) : (r = !t.$stable, Ep(t, a)), o = t;
  } else t && (Ap(e, t), o = { default: 1 });
  if (r)
    for (const c in a)
      !$u(c) && o[c] == null && delete a[c];
}, Yt = Cb;
function yb(e) {
  return _b(e);
}
function _b(e, t) {
  const n = Sl();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: c,
    createComment: u,
    setText: h,
    setElementText: f,
    parentNode: b,
    nextSibling: C,
    setScopeId: A = Sn,
    insertStaticContent: N
  } = e, k = (_, T, x, L = null, R = null, U = null, G = void 0, K = null, Z = !!T.dynamicChildren) => {
    if (_ === T)
      return;
    _ && !ya(_, T) && (L = it(_), _e(_, R, U, !0), _ = null), T.patchFlag === -2 && (Z = !1, T.dynamicChildren = null);
    const { type: V, ref: pe, shapeFlag: oe } = T;
    switch (V) {
      case xo:
        O(_, T, x, L);
        break;
      case Ot:
        F(_, T, x, L);
        break;
      case fs:
        _ == null && D(T, x, L, G);
        break;
      case ae:
        J(
          _,
          T,
          x,
          L,
          R,
          U,
          G,
          K,
          Z
        );
        break;
      default:
        oe & 1 ? re(
          _,
          T,
          x,
          L,
          R,
          U,
          G,
          K,
          Z
        ) : oe & 6 ? Q(
          _,
          T,
          x,
          L,
          R,
          U,
          G,
          K,
          Z
        ) : (oe & 64 || oe & 128) && V.process(
          _,
          T,
          x,
          L,
          R,
          U,
          G,
          K,
          Z,
          Rt
        );
    }
    pe != null && R ? Wr(pe, _ && _.ref, U, T || _, !T) : pe == null && _ && _.ref != null && Wr(_.ref, null, U, _, !0);
  }, O = (_, T, x, L) => {
    if (_ == null)
      i(
        T.el = c(T.children),
        x,
        L
      );
    else {
      const R = T.el = _.el;
      T.children !== _.children && h(R, T.children);
    }
  }, F = (_, T, x, L) => {
    _ == null ? i(
      T.el = u(T.children || ""),
      x,
      L
    ) : T.el = _.el;
  }, D = (_, T, x, L) => {
    [_.el, _.anchor] = N(
      _.children,
      T,
      x,
      L,
      _.el,
      _.anchor
    );
  }, M = ({ el: _, anchor: T }, x, L) => {
    let R;
    for (; _ && _ !== T; )
      R = C(_), i(_, x, L), _ = R;
    i(T, x, L);
  }, E = ({ el: _, anchor: T }) => {
    let x;
    for (; _ && _ !== T; )
      x = C(_), a(_), _ = x;
    a(T);
  }, re = (_, T, x, L, R, U, G, K, Z) => {
    if (T.type === "svg" ? G = "svg" : T.type === "math" && (G = "mathml"), _ == null)
      ue(
        T,
        x,
        L,
        R,
        U,
        G,
        K,
        Z
      );
    else {
      const V = _.el && _.el._isVueCE ? _.el : null;
      try {
        V && V._beginPatch(), Y(
          _,
          T,
          R,
          U,
          G,
          K,
          Z
        );
      } finally {
        V && V._endPatch();
      }
    }
  }, ue = (_, T, x, L, R, U, G, K) => {
    let Z, V;
    const { props: pe, shapeFlag: oe, transition: he, dirs: Ee } = _;
    if (Z = _.el = o(
      _.type,
      U,
      pe && pe.is,
      pe
    ), oe & 8 ? f(Z, _.children) : oe & 16 && fe(
      _.children,
      Z,
      null,
      L,
      R,
      fc(_, U),
      G,
      K
    ), Ee && ua(_, null, L, "created"), X(Z, _, _.scopeId, G, L), pe) {
      for (const ze in pe)
        ze !== "value" && !Vr(ze) && r(Z, ze, null, pe[ze], U, L);
      "value" in pe && r(Z, "value", null, pe.value, U), (V = pe.onVnodeBeforeMount) && Bn(V, L, _);
    }
    Ee && ua(_, null, L, "beforeMount");
    const Ie = wb(R, he);
    Ie && he.beforeEnter(Z), i(Z, T, x), ((V = pe && pe.onVnodeMounted) || Ie || Ee) && Yt(() => {
      V && Bn(V, L, _), Ie && he.enter(Z), Ee && ua(_, null, L, "mounted");
    }, R);
  }, X = (_, T, x, L, R) => {
    if (x && A(_, x), L)
      for (let U = 0; U < L.length; U++)
        A(_, L[U]);
    if (R) {
      let U = R.subTree;
      if (T === U || Np(U.type) && (U.ssContent === T || U.ssFallback === T)) {
        const G = R.vnode;
        X(
          _,
          G,
          G.scopeId,
          G.slotScopeIds,
          R.parent
        );
      }
    }
  }, fe = (_, T, x, L, R, U, G, K, Z = 0) => {
    for (let V = Z; V < _.length; V++) {
      const pe = _[V] = K ? ri(_[V]) : Gn(_[V]);
      k(
        null,
        pe,
        T,
        x,
        L,
        R,
        U,
        G,
        K
      );
    }
  }, Y = (_, T, x, L, R, U, G) => {
    const K = T.el = _.el;
    let { patchFlag: Z, dynamicChildren: V, dirs: pe } = T;
    Z |= _.patchFlag & 16;
    const oe = _.props || We, he = T.props || We;
    let Ee;
    if (x && da(x, !1), (Ee = he.onVnodeBeforeUpdate) && Bn(Ee, x, T, _), pe && ua(T, _, x, "beforeUpdate"), x && da(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    V && (!_.dynamicChildren || _.dynamicChildren.length !== V.length) && (Z = 0, G = !1, V = null), (oe.innerHTML && he.innerHTML == null || oe.textContent && he.textContent == null) && f(K, ""), V ? se(
      _.dynamicChildren,
      V,
      K,
      x,
      L,
      fc(T, R),
      U
    ) : G || ne(
      _,
      T,
      K,
      null,
      x,
      L,
      fc(T, R),
      U,
      !1
    ), Z > 0) {
      if (Z & 16)
        ge(K, oe, he, x, R);
      else if (Z & 2 && oe.class !== he.class && r(K, "class", null, he.class, R), Z & 4 && r(K, "style", oe.style, he.style, R), Z & 8) {
        const Ie = T.dynamicProps;
        for (let ze = 0; ze < Ie.length; ze++) {
          const Fe = Ie[ze], Ke = oe[Fe], rt = he[Fe];
          (rt !== Ke || Fe === "value") && r(K, Fe, Ke, rt, R, x);
        }
      }
      Z & 1 && _.children !== T.children && f(K, T.children);
    } else !G && V == null && ge(K, oe, he, x, R);
    ((Ee = he.onVnodeUpdated) || pe) && Yt(() => {
      Ee && Bn(Ee, x, T, _), pe && ua(T, _, x, "updated");
    }, L);
  }, se = (_, T, x, L, R, U, G) => {
    for (let K = 0; K < T.length; K++) {
      const Z = _[K], V = T[K], pe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ya(Z, V) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? b(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      k(
        Z,
        V,
        pe,
        null,
        L,
        R,
        U,
        G,
        !0
      );
    }
  }, ge = (_, T, x, L, R) => {
    if (T !== x) {
      if (T !== We)
        for (const U in T)
          !Vr(U) && !(U in x) && r(
            _,
            U,
            T[U],
            null,
            R,
            L
          );
      for (const U in x) {
        if (Vr(U)) continue;
        const G = x[U], K = T[U];
        G !== K && U !== "value" && r(_, U, K, G, R, L);
      }
      "value" in x && r(_, "value", T.value, x.value, R);
    }
  }, J = (_, T, x, L, R, U, G, K, Z) => {
    const V = T.el = _ ? _.el : c(""), pe = T.anchor = _ ? _.anchor : c("");
    let { patchFlag: oe, dynamicChildren: he, slotScopeIds: Ee } = T;
    Ee && (K = K ? K.concat(Ee) : Ee), _ == null ? (i(V, x, L), i(pe, x, L), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      x,
      pe,
      R,
      U,
      G,
      K,
      Z
    )) : oe > 0 && oe & 64 && he && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren && _.dynamicChildren.length === he.length ? (se(
      _.dynamicChildren,
      he,
      x,
      R,
      U,
      G,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (T.key != null || R && T === R.subTree) && Du(
      _,
      T,
      !0
      /* shallow */
    )) : ne(
      _,
      T,
      x,
      pe,
      R,
      U,
      G,
      K,
      Z
    );
  }, Q = (_, T, x, L, R, U, G, K, Z) => {
    T.slotScopeIds = K, _ == null ? T.shapeFlag & 512 ? R.ctx.activate(
      T,
      x,
      L,
      G,
      Z
    ) : $(
      T,
      x,
      L,
      R,
      U,
      G,
      Z
    ) : z(_, T, Z);
  }, $ = (_, T, x, L, R, U, G) => {
    const K = _.component = kb(
      _,
      L,
      R
    );
    if (Ol(_) && (K.ctx.renderer = Rt), xb(K, !1, G), K.asyncDep) {
      if (R && R.registerDep(K, q, G), !_.el) {
        const Z = K.subTree = ye(Ot);
        F(null, Z, T, x), _.placeholder = Z.el;
      }
    } else
      q(
        K,
        _,
        T,
        x,
        R,
        U,
        G
      );
  }, z = (_, T, x) => {
    const L = T.component = _.component;
    if (db(_, T, x))
      if (L.asyncDep && !L.asyncResolved) {
        le(L, T, x);
        return;
      } else
        L.next = T, L.update();
    else
      T.el = _.el, L.vnode = T;
  }, q = (_, T, x, L, R, U, G) => {
    const K = () => {
      if (_.isMounted) {
        let { next: oe, bu: he, u: Ee, parent: Ie, vnode: ze } = _;
        {
          const At = xp(_);
          if (At) {
            oe && (oe.el = ze.el, le(_, oe, G)), At.asyncDep.then(() => {
              Yt(() => {
                _.isUnmounted || V();
              }, R);
            });
            return;
          }
        }
        let Fe = oe, Ke;
        da(_, !1), oe ? (oe.el = ze.el, le(_, oe, G)) : oe = ze, he && ds(he), (Ke = oe.props && oe.props.onVnodeBeforeUpdate) && Bn(Ke, Ie, oe, ze), da(_, !0);
        const rt = Vd(_), vt = _.subTree;
        _.subTree = rt, k(
          vt,
          rt,
          // parent may have changed if it's in a teleport
          b(vt.el),
          // anchor may have changed if it's in a fragment
          it(vt),
          _,
          R,
          U
        ), oe.el = rt.el, Fe === null && fb(_, rt.el), Ee && Yt(Ee, R), (Ke = oe.props && oe.props.onVnodeUpdated) && Yt(
          () => Bn(Ke, Ie, oe, ze),
          R
        );
      } else {
        let oe;
        const { el: he, props: Ee } = T, { bm: Ie, m: ze, parent: Fe, root: Ke, type: rt } = _, vt = Xa(T);
        da(_, !1), Ie && ds(Ie), !vt && (oe = Ee && Ee.onVnodeBeforeMount) && Bn(oe, Fe, T), da(_, !0);
        {
          Ke.ce && Ke.ce._hasShadowRoot() && Ke.ce._injectChildStyle(
            rt,
            _.parent ? _.parent.type : void 0
          );
          const At = _.subTree = Vd(_);
          k(
            null,
            At,
            x,
            L,
            _,
            R,
            U
          ), T.el = At.el;
        }
        if (ze && Yt(ze, R), !vt && (oe = Ee && Ee.onVnodeMounted)) {
          const At = T;
          Yt(
            () => Bn(oe, Fe, At),
            R
          );
        }
        (T.shapeFlag & 256 || Fe && Xa(Fe.vnode) && Fe.vnode.shapeFlag & 256) && _.a && Yt(_.a, R), _.isMounted = !0, T = x = L = null;
      }
    };
    _.scope.on();
    const Z = _.effect = new Nh(K);
    _.scope.off();
    const V = _.update = Z.run.bind(Z), pe = _.job = Z.runIfDirty.bind(Z);
    pe.i = _, pe.id = _.uid, Z.scheduler = () => Lu(pe), da(_, !0), V();
  }, le = (_, T, x) => {
    T.component = _;
    const L = _.vnode.props;
    _.vnode = T, _.next = null, pb(_, T.props, L, x), bb(_, T.children, x), hi(), Pd(_), pi();
  }, ne = (_, T, x, L, R, U, G, K, Z = !1) => {
    const V = _ && _.children, pe = _ ? _.shapeFlag : 0, oe = T.children, { patchFlag: he, shapeFlag: Ee } = T;
    if (he > 0) {
      if (he & 128) {
        de(
          V,
          oe,
          x,
          L,
          R,
          U,
          G,
          K,
          Z
        );
        return;
      } else if (he & 256) {
        ve(
          V,
          oe,
          x,
          L,
          R,
          U,
          G,
          K,
          Z
        );
        return;
      }
    }
    Ee & 8 ? (pe & 16 && pt(V, R, U), oe !== V && f(x, oe)) : pe & 16 ? Ee & 16 ? de(
      V,
      oe,
      x,
      L,
      R,
      U,
      G,
      K,
      Z
    ) : pt(V, R, U, !0) : (pe & 8 && f(x, ""), Ee & 16 && fe(
      oe,
      x,
      L,
      R,
      U,
      G,
      K,
      Z
    ));
  }, ve = (_, T, x, L, R, U, G, K, Z) => {
    _ = _ || qa, T = T || qa;
    const V = _.length, pe = T.length, oe = Math.min(V, pe);
    let he;
    for (he = 0; he < oe; he++) {
      const Ee = T[he] = Z ? ri(T[he]) : Gn(T[he]);
      k(
        _[he],
        Ee,
        x,
        null,
        R,
        U,
        G,
        K,
        Z
      );
    }
    V > pe ? pt(
      _,
      R,
      U,
      !0,
      !1,
      oe
    ) : fe(
      T,
      x,
      L,
      R,
      U,
      G,
      K,
      Z,
      oe
    );
  }, de = (_, T, x, L, R, U, G, K, Z) => {
    let V = 0;
    const pe = T.length;
    let oe = _.length - 1, he = pe - 1;
    for (; V <= oe && V <= he; ) {
      const Ee = _[V], Ie = T[V] = Z ? ri(T[V]) : Gn(T[V]);
      if (ya(Ee, Ie))
        k(
          Ee,
          Ie,
          x,
          null,
          R,
          U,
          G,
          K,
          Z
        );
      else
        break;
      V++;
    }
    for (; V <= oe && V <= he; ) {
      const Ee = _[oe], Ie = T[he] = Z ? ri(T[he]) : Gn(T[he]);
      if (ya(Ee, Ie))
        k(
          Ee,
          Ie,
          x,
          null,
          R,
          U,
          G,
          K,
          Z
        );
      else
        break;
      oe--, he--;
    }
    if (V > oe) {
      if (V <= he) {
        const Ee = he + 1, Ie = Ee < pe ? T[Ee].el : L;
        for (; V <= he; )
          k(
            null,
            T[V] = Z ? ri(T[V]) : Gn(T[V]),
            x,
            Ie,
            R,
            U,
            G,
            K,
            Z
          ), V++;
      }
    } else if (V > he)
      for (; V <= oe; )
        _e(_[V], R, U, !0), V++;
    else {
      const Ee = V, Ie = V, ze = /* @__PURE__ */ new Map();
      for (V = Ie; V <= he; V++) {
        const tt = T[V] = Z ? ri(T[V]) : Gn(T[V]);
        tt.key != null && ze.set(tt.key, V);
      }
      let Fe, Ke = 0;
      const rt = he - Ie + 1;
      let vt = !1, At = 0;
      const It = new Array(rt);
      for (V = 0; V < rt; V++) It[V] = 0;
      for (V = Ee; V <= oe; V++) {
        const tt = _[V];
        if (Ke >= rt) {
          _e(tt, R, U, !0);
          continue;
        }
        let dt;
        if (tt.key != null)
          dt = ze.get(tt.key);
        else
          for (Fe = Ie; Fe <= he; Fe++)
            if (It[Fe - Ie] === 0 && ya(tt, T[Fe])) {
              dt = Fe;
              break;
            }
        dt === void 0 ? _e(tt, R, U, !0) : (It[dt - Ie] = V + 1, dt >= At ? At = dt : vt = !0, k(
          tt,
          T[dt],
          x,
          null,
          R,
          U,
          G,
          K,
          Z
        ), Ke++);
      }
      const En = vt ? Sb(It) : qa;
      for (Fe = En.length - 1, V = rt - 1; V >= 0; V--) {
        const tt = Ie + V, dt = T[tt], Fn = T[tt + 1], pn = tt + 1 < pe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Fn.el || Op(Fn)
        ) : L;
        It[V] === 0 ? k(
          null,
          dt,
          x,
          pn,
          R,
          U,
          G,
          K,
          Z
        ) : vt && (Fe < 0 || V !== En[Fe] ? be(dt, x, pn, 2) : Fe--);
      }
    }
  }, be = (_, T, x, L, R = null) => {
    const { el: U, type: G, transition: K, children: Z, shapeFlag: V } = _;
    if (V & 6) {
      be(_.component.subTree, T, x, L);
      return;
    }
    if (V & 128) {
      _.suspense.move(T, x, L);
      return;
    }
    if (V & 64) {
      G.move(_, T, x, Rt);
      return;
    }
    if (G === ae) {
      i(U, T, x);
      for (let oe = 0; oe < Z.length; oe++)
        be(Z[oe], T, x, L);
      i(_.anchor, T, x);
      return;
    }
    if (G === fs) {
      M(_, T, x);
      return;
    }
    if (L !== 2 && V & 1 && K)
      if (L === 0)
        K.persisted && !U[_n] ? i(U, T, x) : (K.beforeEnter(U), i(U, T, x), Yt(() => K.enter(U), R));
      else {
        const { leave: oe, delayLeave: he, afterLeave: Ee } = K, Ie = () => {
          _.ctx.isUnmounted ? a(U) : i(U, T, x);
        }, ze = () => {
          const Fe = U._isLeaving || !!U[_n];
          U._isLeaving && U[_n](
            !0
            /* cancelled */
          ), K.persisted && !Fe ? Ie() : oe(U, () => {
            Ie(), Ee && Ee();
          });
        };
        he ? he(U, Ie, ze) : ze();
      }
    else
      i(U, T, x);
  }, _e = (_, T, x, L = !1, R = !1) => {
    const {
      type: U,
      props: G,
      ref: K,
      children: Z,
      dynamicChildren: V,
      shapeFlag: pe,
      patchFlag: oe,
      dirs: he,
      cacheIndex: Ee,
      memo: Ie
    } = _;
    if (oe === -2 && (R = !1), K != null && (hi(), Wr(K, null, x, _, !0), pi()), Ee != null && (T.renderCache[Ee] = void 0), pe & 256) {
      T.ctx.deactivate(_);
      return;
    }
    const ze = pe & 1 && he, Fe = !Xa(_);
    let Ke;
    if (Fe && (Ke = G && G.onVnodeBeforeUnmount) && Bn(Ke, T, _), pe & 6)
      ct(_.component, x, L);
    else {
      if (pe & 128) {
        _.suspense.unmount(x, L);
        return;
      }
      ze && ua(_, null, T, "beforeUnmount"), pe & 64 ? _.type.remove(
        _,
        T,
        x,
        Rt,
        L
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (U !== ae || oe > 0 && oe & 64) ? pt(
        V,
        T,
        x,
        !1,
        !0
      ) : (U === ae && oe & 384 || !R && pe & 16) && pt(Z, T, x), L && Ve(_);
    }
    const rt = Ie != null && Ee == null;
    (Fe && (Ke = G && G.onVnodeUnmounted) || ze || rt) && Yt(() => {
      Ke && Bn(Ke, T, _), ze && ua(_, null, T, "unmounted"), rt && (_.el = null);
    }, x);
  }, Ve = (_) => {
    const { type: T, el: x, anchor: L, transition: R } = _;
    if (T === ae) {
      xe(x, L);
      return;
    }
    if (T === fs) {
      E(_);
      return;
    }
    const U = () => {
      a(x), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (_.shapeFlag & 1 && R && !R.persisted) {
      const { leave: G, delayLeave: K } = R, Z = () => G(x, U);
      K ? K(_.el, U, Z) : Z();
    } else
      U();
  }, xe = (_, T) => {
    let x;
    for (; _ !== T; )
      x = C(_), a(_), _ = x;
    a(T);
  }, ct = (_, T, x) => {
    const { bum: L, scope: R, job: U, subTree: G, um: K, m: Z, a: V } = _;
    Wd(Z), Wd(V), L && ds(L), R.stop(), U && (U.flags |= 8, _e(G, _, T, x)), K && Yt(K, T), Yt(() => {
      _.isUnmounted = !0;
    }, T);
  }, pt = (_, T, x, L = !1, R = !1, U = 0) => {
    for (let G = U; G < _.length; G++)
      _e(_[G], T, x, L, R);
  }, it = (_) => {
    if (_.shapeFlag & 6)
      return it(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const T = C(_.anchor || _.el), x = T && T[Qh];
    return x ? C(x) : T;
  };
  let ut = !1;
  const at = (_, T, x) => {
    let L;
    _ == null ? T._vnode && (_e(T._vnode, null, null, !0), L = T._vnode.component) : k(
      T._vnode || null,
      _,
      T,
      null,
      null,
      null,
      x
    ), T._vnode = _, ut || (ut = !0, Pd(L), Xh(), ut = !1);
  }, Rt = {
    p: k,
    um: _e,
    m: be,
    r: Ve,
    mt: $,
    mc: fe,
    pc: ne,
    pbc: se,
    n: it,
    o: e
  };
  return {
    render: at,
    hydrate: void 0,
    createApp: ob(at)
  };
}
function fc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function da({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Du(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Se(i) && Se(a))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let c = a[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = a[r] = ri(a[r]), c.el = o.el), !n && c.patchFlag !== -2 && Du(o, c)), c.type === xo && (c.patchFlag === -1 && (c = a[r] = ri(c)), c.el = o.el), c.type === Ot && !c.el && (c.el = o.el);
    }
}
function Sb(e) {
  const t = e.slice(), n = [0];
  let i, a, r, o, c;
  const u = e.length;
  for (i = 0; i < u; i++) {
    const h = e[i];
    if (h !== 0) {
      if (a = n[n.length - 1], e[a] < h) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        c = r + o >> 1, e[n[c]] < h ? r = c + 1 : o = c;
      h < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function xp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : xp(t);
}
function Wd(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Op(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Op(t.subTree) : null;
}
const Np = (e) => e.__isSuspense;
function Cb(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : Yh(e);
}
const ae = /* @__PURE__ */ Symbol.for("v-fgt"), xo = /* @__PURE__ */ Symbol.for("v-txt"), Ot = /* @__PURE__ */ Symbol.for("v-cmt"), fs = /* @__PURE__ */ Symbol.for("v-stc"), di = [];
let fn = null;
function y(e = !1) {
  di.push(fn = e ? null : []);
}
function Mu() {
  di.pop(), fn = di[di.length - 1] || null;
}
let fo = 1;
function Ts(e, t = !1) {
  fo += e, e < 0 && fn && t && (fn.hasOnce = !0);
}
function Lp(e) {
  return e.dynamicChildren = fo > 0 ? fn || qa : null, Mu(), fo > 0 && fn && fn.push(e), e;
}
function w(e, t, n, i, a, r) {
  return Lp(
    l(
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
function Be(e, t, n, i, a) {
  return Lp(
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
function ho(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ya(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rp = ({ key: e }) => e ?? null, hs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || /* @__PURE__ */ Ht(e) || $e(e) ? { i: Nt, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, i = 0, a = null, r = e === ae ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rp(t),
    ref: t && hs(t),
    scopeId: Al,
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
  return c ? (Es(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= lt(n) ? 8 : 16), fo > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  fn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && fn.push(u), u;
}
const ye = Tb;
function Tb(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === up) && (e = Ot), ho(e)) {
    const c = Gi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Es(c, n), fo > 0 && !r && fn && (c.shapeFlag & 6 ? fn[fn.indexOf(e)] = c : fn.push(c)), c.patchFlag = -2, c;
  }
  if (Rb(e) && (e = e.__vccOpts), t) {
    t = po(t);
    let { class: c, style: u } = t;
    c && !lt(c) && (t.class = Ae(c)), Qe(u) && (/* @__PURE__ */ Nu(u) && !Se(u) && (u = bt({}, u)), t.style = hn(u));
  }
  const o = lt(e) ? 1 : Np(e) ? 128 : xl(e) ? 64 : Qe(e) ? 4 : $e(e) ? 2 : 0;
  return l(
    e,
    t,
    n,
    i,
    a,
    o,
    r,
    !0
  );
}
function po(e) {
  return e ? /* @__PURE__ */ Nu(e) || Sp(e) ? bt({}, e) : e : null;
}
function Gi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: o, children: c, transition: u } = e, h = t ? Vt(a || {}, t) : a, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Rp(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Se(r) ? r.concat(hs(t)) : [r, hs(t)] : hs(t)
    ) : r,
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
    patchFlag: t && e.type !== ae ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Gi(e.ssContent),
    ssFallback: e.ssFallback && Gi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && i && uo(
    f,
    u.clone(f)
  ), f;
}
function Te(e = " ", t = 0) {
  return ye(xo, null, e, t);
}
function B(e = "", t = !1) {
  return t ? (y(), Be(Ot, null, e)) : ye(Ot, null, e);
}
function Gn(e) {
  return e == null || typeof e == "boolean" ? ye(Ot) : Se(e) ? ye(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ho(e) ? ri(e) : ye(xo, null, String(e));
}
function ri(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gi(e);
}
function Es(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Es(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Sp(t) ? t._ctx = Nt : a === 3 && Nt && (Nt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if ($e(t)) {
    if (i & 65) {
      Es(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Nt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Te(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Vt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ae([t.class, i.class]));
      else if (a === "style")
        t.style = hn([t.style, i.style]);
      else if (ml(a)) {
        const r = t[a], o = i[a];
        o && r !== o && !(Se(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !bl(a) && (t[a] = o);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Bn(e, t, n, i = null) {
  Tn(e, t, 7, [
    n,
    i
  ]);
}
const Eb = vp();
let Ab = 0;
function kb(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Eb, r = {
    uid: Ab++,
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
    scope: new Yg(
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
    propsOptions: Tp(i, a),
    emitsOptions: bp(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: We,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: We,
    data: We,
    props: We,
    attrs: We,
    slots: We,
    refs: We,
    setupState: We,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = sb.bind(null, r), e.ce && e.ce(r), r;
}
let Bt = null;
const Na = () => Bt || Nt;
let As, vo;
{
  const e = Sl(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  As = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Bt = n
  ), vo = t(
    "__VUE_SSR_SETTERS__",
    (n) => go = n
  );
}
const Oo = (e) => {
  const t = Bt;
  return As(e), e.scope.on(), () => {
    e.scope.off(), As(t);
  };
}, qd = () => {
  Bt && Bt.scope.off(), As(null);
};
function Ip(e) {
  return e.vnode.shapeFlag & 4;
}
let go = !1;
function xb(e, t = !1, n = !1) {
  t && vo(t);
  const { props: i, children: a } = e.vnode, r = Ip(e);
  hb(e, i, r, t), mb(e, a, n || t);
  const o = r ? Ob(e, t) : void 0;
  return t && vo(!1), o;
}
function Ob(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Xm);
  const { setup: i } = n;
  if (i) {
    hi();
    const a = e.setupContext = i.length > 1 ? $p(e) : null, r = Oo(e), o = Ao(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), c = Ch(o);
    if (pi(), r(), (c || e.sp) && !Xa(e) && op(e), c) {
      if (o.then(qd, qd), t)
        return o.then((u) => {
          vo(!0);
          try {
            Yd(e, u, t);
          } finally {
            vo(!1);
          }
        }).catch((u) => {
          El(u, e, 0);
        });
      e.asyncDep = o;
    } else
      Yd(e, o);
  } else
    Pp(e);
}
function Yd(e, t, n) {
  $e(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Qe(t) && (e.setupState = Gh(t)), Pp(e);
}
function Pp(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Sn);
  {
    const a = Oo(e);
    hi();
    try {
      eb(e);
    } finally {
      pi(), a();
    }
  }
}
const Nb = {
  get(e, t) {
    return zt(e, "get", ""), e[t];
  }
};
function $p(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Nb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Rl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gh(vm(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in qr)
        return qr[n](e);
    },
    has(t, n) {
      return n in t || n in qr;
    }
  })) : e.proxy;
}
function Lb(e, t = !0) {
  return $e(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Rb(e) {
  return $e(e) && "__vccOpts" in e;
}
const H = (e, t) => /* @__PURE__ */ wm(e, t, go);
function en(e, t, n) {
  try {
    Ts(-1);
    const i = arguments.length;
    return i === 2 ? Qe(t) && !Se(t) ? ho(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && ho(n) && (n = [n]), ye(e, t, n));
  } finally {
    Ts(1);
  }
}
const Ib = "3.5.42", Pb = Sn;
let eu;
const Xd = typeof window < "u" && window.trustedTypes;
if (Xd)
  try {
    eu = /* @__PURE__ */ Xd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Fp = eu ? (e) => eu.createHTML(e) : (e) => e, $b = "http://www.w3.org/2000/svg", Fb = "http://www.w3.org/1998/Math/MathML", ai = typeof document < "u" ? document : null, Zd = ai && /* @__PURE__ */ ai.createElement("template"), Db = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ai.createElementNS($b, e) : t === "mathml" ? ai.createElementNS(Fb, e) : n ? ai.createElement(e, { is: n }) : ai.createElement(e);
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
    const o = n ? n.previousSibling : t.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      Zd.innerHTML = Fp(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const c = Zd.content;
      if (i === "svg" || i === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ii = "transition", Nr = "animation", mo = /* @__PURE__ */ Symbol("_vtc"), Dp = {
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
}, Mb = /* @__PURE__ */ bt(
  {},
  tp,
  Dp
), zb = (e) => (e.displayName = "Transition", e.props = Mb, e), Ub = /* @__PURE__ */ zb(
  (e, { slots: t }) => en(zm, Bb(e), t)
), fa = (e, t = []) => {
  Se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Jd = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Bb(e) {
  const t = {};
  for (const J in e)
    J in Dp || (t[J] = e[J]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: a,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: c = `${n}-enter-to`,
    appearFromClass: u = r,
    appearActiveClass: h = o,
    appearToClass: f = c,
    leaveFromClass: b = `${n}-leave-from`,
    leaveActiveClass: C = `${n}-leave-active`,
    leaveToClass: A = `${n}-leave-to`
  } = e, N = jb(a), k = N && N[0], O = N && N[1], {
    onBeforeEnter: F,
    onEnter: D,
    onEnterCancelled: M,
    onLeave: E,
    onLeaveCancelled: re,
    onBeforeAppear: ue = F,
    onAppear: X = D,
    onAppearCancelled: fe = M
  } = t, Y = (J, Q, $, z) => {
    J._enterCancelled = z, ha(J, Q ? f : c), ha(J, Q ? h : o), $ && $();
  }, se = (J, Q) => {
    J._isLeaving = !1, ha(J, b), ha(J, A), ha(J, C), Q && Q();
  }, ge = (J) => (Q, $) => {
    const z = J ? X : D, q = () => Y(Q, J, $);
    fa(z, [Q, q]), Qd(() => {
      ha(Q, J ? u : r), ei(Q, J ? f : c), Jd(z) || ef(Q, i, k, q);
    });
  };
  return bt(t, {
    onBeforeEnter(J) {
      fa(F, [J]), ei(J, r), ei(J, o);
    },
    onBeforeAppear(J) {
      fa(ue, [J]), ei(J, u), ei(J, h);
    },
    onEnter: ge(!1),
    onAppear: ge(!0),
    onLeave(J, Q) {
      J._isLeaving = !0;
      const $ = () => se(J, Q);
      ei(J, b), J._enterCancelled ? (ei(J, C), af(J)) : (af(J), ei(J, C)), Qd(() => {
        J._isLeaving && (ha(J, b), ei(J, A), Jd(E) || ef(J, i, O, $));
      }), fa(E, [J, $]);
    },
    onEnterCancelled(J) {
      Y(J, !1, void 0, !0), fa(M, [J]);
    },
    onAppearCancelled(J) {
      Y(J, !0, void 0, !0), fa(fe, [J]);
    },
    onLeaveCancelled(J) {
      se(J), fa(re, [J]);
    }
  });
}
function jb(e) {
  if (e == null)
    return null;
  if (Qe(e))
    return [hc(e.enter), hc(e.leave)];
  {
    const t = hc(e);
    return [t, t];
  }
}
function hc(e) {
  return zg(e);
}
function ei(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[mo] || (e[mo] = /* @__PURE__ */ new Set())).add(t);
}
function ha(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[mo];
  n && (n.delete(t), n.size || (e[mo] = void 0));
}
function Qd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Hb = 0;
function ef(e, t, n, i) {
  const a = e._endId = ++Hb, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: c, propCount: u } = Vb(e, t);
  if (!o)
    return i();
  const h = o + "end";
  let f = 0;
  const b = () => {
    e.removeEventListener(h, C), r();
  }, C = (A) => {
    A.target === e && ++f >= u && b();
  };
  setTimeout(() => {
    f < u && b();
  }, c + 1), e.addEventListener(h, C);
}
function Vb(e, t) {
  const n = window.getComputedStyle(e), i = (N) => (n[N] || "").split(", "), a = i(`${Ii}Delay`), r = i(`${Ii}Duration`), o = tf(a, r), c = i(`${Nr}Delay`), u = i(`${Nr}Duration`), h = tf(c, u);
  let f = null, b = 0, C = 0;
  t === Ii ? o > 0 && (f = Ii, b = o, C = r.length) : t === Nr ? h > 0 && (f = Nr, b = h, C = u.length) : (b = Math.max(o, h), f = b > 0 ? o > h ? Ii : Nr : null, C = f ? f === Ii ? r.length : u.length : 0);
  const A = f === Ii && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Ii}Property`).toString()
  );
  return {
    type: f,
    timeout: b,
    propCount: C,
    hasTransform: A
  };
}
function tf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => nf(n) + nf(e[i])));
}
function nf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function af(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Kb(e, t, n) {
  const i = e[mo];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ks = /* @__PURE__ */ Symbol("_vod"), Mp = /* @__PURE__ */ Symbol("_vsh"), Ja = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ks] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Lr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Lr(e, !0), i.enter(e)) : i.leave(e, () => {
      Lr(e, !1);
    }) : Lr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Lr(e, t);
  }
};
function Lr(e, t) {
  e.style.display = t ? e[ks] : "none", e[Mp] = !t;
}
const zp = /* @__PURE__ */ Symbol("");
function Gb(e) {
  const t = Na();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => xs(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? xs(t.ce, a) : tu(t.subTree, a), n(a);
  };
  cp(() => {
    Yh(i);
  }), qi(() => {
    qe(i, Sn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), ko(() => a.disconnect());
  });
}
function tu(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      tu(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    xs(e.el, t);
  else if (e.type === ae)
    e.children.forEach((n) => tu(n, t));
  else if (e.type === fs) {
    let { el: n, anchor: i } = e;
    for (; n && (xs(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function xs(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = qg(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[zp] = i;
  }
}
const Wb = /(?:^|;)\s*display\s*:/;
function qb(e, t, n) {
  const i = e.style, a = lt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (lt(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          n[c] == null && Ur(i, c, "");
        }
      else
        for (const o in t)
          n[o] == null && Ur(i, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const c = n[o];
      c != null ? Xb(
        e,
        o,
        !lt(t) && t ? t[o] : void 0,
        c
      ) || Ur(i, o, c) : Ur(i, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = i[zp];
      o && (n += ";" + o), i.cssText = n, r = Wb.test(n);
    }
  } else t && e.removeAttribute("style");
  ks in e && (e[ks] = r ? i.display : "", e[Mp] && (i.display = "none"));
}
const ts = /\s*!important$/;
function Ur(e, t, n) {
  if (Se(n))
    n.forEach((i) => Ur(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    ts.test(n) ? e.setProperty(t, n.replace(ts, ""), "important") : e.setProperty(t, n);
  else {
    const i = Yb(e, t);
    ts.test(n) ? e.setProperty(
      mi(i),
      n.replace(ts, ""),
      "important"
    ) : e[i] = n;
  }
}
const rf = ["Webkit", "Moz", "ms"], pc = {};
function Yb(e, t) {
  const n = pc[t];
  if (n)
    return n;
  let i = jt(t);
  if (i !== "filter" && i in e)
    return pc[t] = i;
  i = _l(i);
  for (let a = 0; a < rf.length; a++) {
    const r = rf[a] + i;
    if (r in e)
      return pc[t] = r;
  }
  return t;
}
function Xb(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && lt(i) && n === i;
}
const of = "http://www.w3.org/1999/xlink";
function sf(e, t, n, i, a, r = Kg(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(of, t.slice(6, t.length)) : e.setAttributeNS(of, t, n) : n == null || r && !kh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Pn(n) ? String(n) : n
  );
}
function lf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Fp(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = kh(n) : n == null && c === "string" ? (n = "", o = !0) : c === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function _a(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function Zb(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const cf = /* @__PURE__ */ Symbol("_vei");
function Jb(e, t, n, i, a = null) {
  const r = e[cf] || (e[cf] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [c, u] = ty(t);
    if (i) {
      const h = r[t] = ay(
        i,
        a
      );
      _a(e, c, h, u);
    } else o && (Zb(e, c, o, u), r[t] = void 0);
  }
}
const Qb = /(Once|Passive|Capture)$/, ey = /^on:?(?:Once|Passive|Capture)$/;
function ty(e) {
  let t, n;
  for (; (n = e.match(Qb)) && !ey.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : mi(e.slice(2)), t];
}
let vc = 0;
const ny = /* @__PURE__ */ Promise.resolve(), iy = () => vc || (ny.then(() => vc = 0), vc = Date.now());
function ay(e, t) {
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
      const o = a.slice(), c = [i];
      for (let u = 0; u < o.length && !i._stopped; u++) {
        const h = o[u];
        h && Tn(
          h,
          t,
          5,
          c
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
  return n.value = e, n.attached = iy(), n;
}
const uf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ry = (e, t, n, i, a, r) => {
  const o = a === "svg";
  t === "class" ? Kb(e, i, o) : t === "style" ? qb(e, n, i) : ml(t) ? bl(t) || Jb(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : oy(e, t, i, o)) ? (lf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && sf(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (sy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !lt(i))) ? lf(e, jt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), sf(e, t, i, o));
};
function oy(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && uf(t) && $e(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return uf(t) && lt(n) ? !1 : t in e;
}
function sy(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = jt(t);
  return Array.isArray(n) ? n.some((a) => jt(a) === i) : Object.keys(n).some((a) => jt(a) === i);
}
const Os = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (n) => ds(t, n) : t;
};
function ly(e) {
  e.target.composing = !0;
}
function df(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Sa = /* @__PURE__ */ Symbol("_assign"), ns = /* @__PURE__ */ Symbol("_initialValue");
function gc(e, t, n) {
  return t && (e = e.trim()), n && (e = wl(e)), e;
}
const ft = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[ns] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[ns] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Sa] = Os(a);
    const r = i || a.props && a.props.type === "number";
    _a(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Sa](gc(e.value, n, r));
    }), (n || r) && _a(e, "change", () => {
      e.value = gc(e.value, n, r);
    }), t || (_a(e, "compositionstart", ly), _a(e, "compositionend", df), _a(e, "change", df));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[ns];
    delete e[ns], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Sa](gc(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, o) {
    if (e[Sa] = Os(o), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? wl(e.value) : e.value, u = t ?? "";
    if (c === u)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === u) || (e.value = u);
  }
}, Wt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, _a(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? wl(Ns(u)) : Ns(u)
      ), r = e.multiple, o = r ? xa(e._modelValue) ? new Set(a) : a : a[0], c = e._pendingValue = [
        r,
        r ? Se(o) ? a.slice() : a : o
      ];
      try {
        e[Sa](o);
      } finally {
        nn(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Sa] = Os(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ff(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Sa] = Os(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !cy(t, n[1], n[0])) && ff(e, t);
  }
};
function cy(e, t, n) {
  if (!n || Se(e)) return Ki(e, t);
  if (xa(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function ff(e, t) {
  const n = e.multiple, i = Se(t);
  if (!(n && !i && !xa(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], c = Ns(o);
      if (n)
        if (i) {
          const u = typeof c;
          u === "string" || u === "number" ? o.selected = t.some((h) => String(h) === String(c)) : o.selected = Wg(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (Ki(Ns(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ns(e) {
  return "_value" in e ? e._value : e.value;
}
const uy = ["ctrl", "shift", "alt", "meta"], dy = {
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
  exact: (e, t) => uy.some((n) => e[`${n}Key`] && !t.includes(n))
}, Pe = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const c = dy[t[o]];
      if (c && c(a, t)) return;
    }
    return e(a, ...r);
  }));
}, fy = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ze = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = mi(a.key);
    if (t.some(
      (o) => o === r || fy[o] === r
    ))
      return e(a);
  }));
}, hy = /* @__PURE__ */ bt({ patchProp: ry }, Db);
let hf;
function py() {
  return hf || (hf = yb(hy));
}
const vy = ((...e) => {
  const t = py().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = my(i);
    if (!a) return;
    const r = t._component;
    !$e(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, gy(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function gy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function my(e) {
  return lt(e) ? document.querySelector(e) : e;
}
function zu(e, t, n) {
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
function pf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function by(e) {
  if (Array.isArray(e)) return e;
}
function yy(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, o, c = [], u = !0, h = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(u = (i = r.call(n)).done) && (c.push(i.value), c.length !== t); u = !0) ;
    } catch (f) {
      h = !0, a = f;
    } finally {
      try {
        if (!u && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (h) throw a;
      }
    }
    return c;
  }
}
function _y() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wy(e, t) {
  return by(e) || yy(e, t) || Sy(e, t) || _y();
}
function Sy(e, t) {
  if (e) {
    if (typeof e == "string") return pf(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pf(e, t) : void 0;
  }
}
const Up = Object.entries, vf = Object.setPrototypeOf, Cy = Object.isFrozen, Ty = Object.getPrototypeOf, Ey = Object.getOwnPropertyDescriptor;
let St = Object.freeze, Et = Object.seal, Ga = Object.create, Bp = typeof Reflect < "u" && Reflect, nu = Bp.apply, iu = Bp.construct;
St || (St = function(t) {
  return t;
});
Et || (Et = function(t) {
  return t;
});
nu || (nu = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
iu || (iu = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ma = yt(Array.prototype.forEach), Ay = yt(Array.prototype.lastIndexOf), gf = yt(Array.prototype.pop), Rr = yt(Array.prototype.push), ky = yt(Array.prototype.splice), Qa = Array.isArray, Br = yt(String.prototype.toLowerCase), mc = yt(String.prototype.toString), mf = yt(String.prototype.match), Ir = yt(String.prototype.replace), bf = yt(String.prototype.indexOf), xy = yt(String.prototype.trim), Oy = yt(Number.prototype.toString), Ny = yt(Boolean.prototype.toString), yf = typeof BigInt > "u" ? null : yt(BigInt.prototype.toString), _f = typeof Symbol > "u" ? null : yt(Symbol.prototype.toString), tn = yt(Object.prototype.hasOwnProperty), Pr = yt(Object.prototype.toString), Ft = yt(RegExp.prototype.test), pa = Ly(TypeError);
function yt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return nu(e, t, i);
  };
}
function Ly(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return iu(e, n);
  };
}
function Ge(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Br;
  if (vf && vf(e, null), !Qa(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Cy(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function Ry(e) {
  for (let t = 0; t < e.length; t++)
    tn(e, t) || (e[t] = null);
  return e;
}
function un(e) {
  const t = Ga(null);
  for (const i of Up(e)) {
    var n = wy(i, 2);
    const a = n[0], r = n[1];
    tn(e, a) && (Qa(r) ? t[a] = Ry(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = un(r) : t[a] = r);
  }
  return t;
}
function Iy(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Oy(e);
    case "boolean":
      return Ny(e);
    case "bigint":
      return yf ? yf(e) : "0";
    case "symbol":
      return _f ? _f(e) : "Symbol()";
    case "undefined":
      return Pr(e);
    case "function":
    case "object": {
      if (e === null)
        return Pr(e);
      const t = e, n = Nn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : Pr(i);
      }
      return Pr(e);
    }
    default:
      return Pr(e);
  }
}
function Nn(e, t) {
  for (; e !== null; ) {
    const i = Ey(e, t);
    if (i) {
      if (i.get)
        return yt(i.get);
      if (typeof i.value == "function")
        return yt(i.value);
    }
    e = Ty(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Py(e) {
  try {
    return Ft(e, ""), !0;
  } catch {
    return !1;
  }
}
const wf = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), bc = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), yc = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), $y = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), _c = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Fy = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Sf = St(["#text"]), Cf = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), wc = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Tf = St(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), is = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Dy = Et(/{{[\w\W]*|^[\w\W]*}}/g), My = Et(/<%[\w\W]*|^[\w\W]*%>/g), zy = Et(/\${[\w\W]*/g), Uy = Et(/^data-[\-\w.\u00B7-\uFFFF]+$/), By = Et(/^aria-[\-\w]+$/), Ef = Et(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), jy = Et(/^(?:\w+script|data):/i), Hy = Et(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Vy = Et(/^html$/i), Ky = Et(/^[a-z][.\w]*(-[.\w]+)+$/i), Af = Et(/<[/\w!]/g), kf = Et(/<[/\w]/g), Gy = Et(/<\/no(script|embed|frames)/i), Wy = Et(/\/>/i), cn = {
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
}, jp = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], qy = St(Ge({}, jp)), Yy = (function() {
  const e = {};
  return ma(jp, (t) => {
    e[t] = Et(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), Xy = function() {
  return typeof window > "u" ? null : window;
}, Zy = function(t, n) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const a = "data-tt-policy-suffix";
  n && n.hasAttribute(a) && (i = n.getAttribute(a));
  const r = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(r, {
      createHTML(o) {
        return o;
      },
      createScriptURL(o) {
        return o;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, xf = function() {
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
}, Pi = function(t, n, i, a) {
  return tn(t, n) && Qa(t[n]) ? Ge(a.base ? un(a.base) : {}, t[n], a.transform) : i;
}, Sc = function(t, n, i) {
  const a = tn(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? un(a) : i();
};
function Hp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Xy();
  const t = (ee) => Hp(ee);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== cn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, c = e.Element, u = e.NodeFilter, h = e.NamedNodeMap;
  h === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const f = e.DOMParser, b = e.trustedTypes, C = c.prototype, A = Nn(C, "cloneNode"), N = Nn(C, "remove"), k = Nn(C, "nextSibling"), O = Nn(C, "childNodes"), F = Nn(C, "parentNode"), D = Nn(C, "shadowRoot"), M = Nn(C, "attributes"), E = o && o.prototype ? Nn(o.prototype, "nodeType") : null, re = o && o.prototype ? Nn(o.prototype, "nodeName") : null, ue = o && o.prototype ? Nn(o.prototype, "ownerDocument") : null, X = function(S) {
    return E ? E(S) : S.nodeType;
  }, fe = function(S) {
    return re ? re(S) : S.nodeName;
  };
  if (typeof r == "function") {
    const ee = n.createElement("template");
    ee.content && ee.content.ownerDocument && (n = ee.content.ownerDocument);
  }
  let Y, se = "", ge, J = !1, Q = 0;
  const $ = function() {
    if (Q > 0)
      throw pa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, z = function(S) {
    $(), Q++;
    try {
      return Y.createHTML(S);
    } finally {
      Q--;
    }
  }, q = function(S) {
    $(), Q++;
    try {
      return Y.createScriptURL(S);
    } finally {
      Q--;
    }
  }, le = function() {
    return J || (ge = Zy(b, a), J = !0), ge;
  }, ne = n, ve = ne.implementation, de = ne.createNodeIterator, be = ne.createDocumentFragment, _e = ne.getElementsByTagName, Ve = i.importNode;
  let xe = xf();
  t.isSupported = typeof Up == "function" && typeof F == "function" && ve && ve.createHTMLDocument !== void 0;
  const ct = Dy, pt = My, it = zy, ut = Uy, at = By, Rt = jy, j = Hy, _ = Ky;
  let T = Ef, x = null;
  const L = Ge({}, [...wf, ...bc, ...yc, ..._c, ...Sf]);
  let R = null;
  const U = Ge({}, [...Cf, ...wc, ...Tf, ...is]);
  let G = Object.seal(Ga(null, {
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
  })), K = null, Z = null;
  const V = Object.seal(Ga(null, {
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
  let pe = !0, oe = !0, he = !1, Ee = !0, Ie = !1, ze = !0, Fe = !1, Ke = !1, rt = null, vt = null, At = !1, It = !1, En = !1, tt = !1, dt = !0, Fn = !1;
  const pn = "user-content-";
  let Zi = !0, yi = !1, Dn = {}, _i = null;
  const ar = Ge({}, [
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
  let Xn = null;
  const wi = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let Si = null;
  const Ci = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ct = "http://www.w3.org/1998/Math/MathML", Ra = "http://www.w3.org/2000/svg", an = "http://www.w3.org/1999/xhtml";
  let Ti = an, Ji = !1, Ia = null;
  const Qi = Ge({}, [Ct, Ra, an], mc), Ei = St(["mi", "mo", "mn", "ms", "mtext"]);
  let rr = Ge({}, Ei);
  const Lo = St(["annotation-xml"]);
  let Zt = Ge({}, Lo);
  const Ro = Ge({}, ["title", "style", "font", "a", "script"]);
  let ea = null;
  const Ul = ["application/xhtml+xml", "text/html"], Bl = "text/html";
  let ht = null, Ai = null;
  const jl = n.createElement("form"), Io = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, or = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Ai && Ai === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = un(S), ea = // eslint-disable-next-line unicorn/prefer-includes
    Ul.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Bl : S.PARSER_MEDIA_TYPE, ht = ea === "application/xhtml+xml" ? mc : Br, x = Pi(S, "ALLOWED_TAGS", L, {
      transform: ht
    }), R = Pi(S, "ALLOWED_ATTR", U, {
      transform: ht
    }), Ia = Pi(S, "ALLOWED_NAMESPACES", Qi, {
      transform: mc
    }), Si = Pi(S, "ADD_URI_SAFE_ATTR", Ci, {
      transform: ht,
      base: Ci
    }), Xn = Pi(S, "ADD_DATA_URI_TAGS", wi, {
      transform: ht,
      base: wi
    }), _i = Pi(S, "FORBID_CONTENTS", ar, {
      transform: ht
    }), K = Pi(S, "FORBID_TAGS", un({}), {
      transform: ht
    }), Z = Pi(S, "FORBID_ATTR", un({}), {
      transform: ht
    }), Dn = tn(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? un(S.USE_PROFILES) : S.USE_PROFILES : !1, pe = S.ALLOW_ARIA_ATTR !== !1, oe = S.ALLOW_DATA_ATTR !== !1, he = S.ALLOW_UNKNOWN_PROTOCOLS || !1, Ee = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ie = S.SAFE_FOR_TEMPLATES || !1, ze = S.SAFE_FOR_XML !== !1, Fe = S.WHOLE_DOCUMENT || !1, It = S.RETURN_DOM || !1, En = S.RETURN_DOM_FRAGMENT || !1, tt = S.RETURN_TRUSTED_TYPE || !1, At = S.FORCE_BODY || !1, dt = S.SANITIZE_DOM !== !1, Fn = S.SANITIZE_NAMED_PROPS || !1, Zi = S.KEEP_CONTENT !== !1, yi = S.IN_PLACE || !1, T = Py(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Ef, Ti = typeof S.NAMESPACE == "string" ? S.NAMESPACE : an, rr = Sc(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, Ei)
      // Default built-in map
    ), Zt = Sc(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Lo)
      // Default built-in map
    );
    const I = Sc(S, "CUSTOM_ELEMENT_HANDLING", () => Ga(null));
    if (G = Ga(null), tn(I, "tagNameCheck") && Io(I.tagNameCheck) && (G.tagNameCheck = I.tagNameCheck), tn(I, "attributeNameCheck") && Io(I.attributeNameCheck) && (G.attributeNameCheck = I.attributeNameCheck), tn(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), Et(G), Ie && (oe = !1), En && (It = !0), Dn && (x = Ge({}, Sf), R = Ga(null), Dn.html === !0 && (Ge(x, wf), Ge(R, Cf)), Dn.svg === !0 && (Ge(x, bc), Ge(R, wc), Ge(R, is)), Dn.svgFilters === !0 && (Ge(x, yc), Ge(R, wc), Ge(R, is)), Dn.mathMl === !0 && (Ge(x, _c), Ge(R, Tf), Ge(R, is))), V.tagCheck = null, V.attributeCheck = null, tn(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? V.tagCheck = S.ADD_TAGS : Qa(S.ADD_TAGS) && (x === L && (x = un(x)), Ge(x, S.ADD_TAGS, ht))), tn(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? V.attributeCheck = S.ADD_ATTR : Qa(S.ADD_ATTR) && (R === U && (R = un(R)), Ge(R, S.ADD_ATTR, ht))), tn(S, "ADD_FORBID_CONTENTS") && Qa(S.ADD_FORBID_CONTENTS) && (_i === ar && (_i = un(_i)), Ge(_i, S.ADD_FORBID_CONTENTS, ht)), Zi && (x["#text"] = !0), Fe && Ge(x, ["html", "head", "body"]), x.table && (Ge(x, ["tbody"]), delete K.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw pa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw pa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const W = Y;
      Y = S.TRUSTED_TYPES_POLICY;
      try {
        se = z("");
      } catch (ce) {
        throw Y = W, ce;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (Y = void 0, se = "") : (Y === void 0 && (Y = le()), Y && typeof se == "string" && (se = z("")));
    St && St(S), Ai = S;
  }, Po = Ge({}, [...bc, ...yc, ...$y]), $o = Ge({}, [..._c, ...Fy]), Hl = function(S, I, W) {
    return I.namespaceURI === an ? S === "svg" : I.namespaceURI === Ct ? S === "svg" && (W === "annotation-xml" || rr[W]) : !!Po[S];
  }, Vl = function(S, I, W) {
    return I.namespaceURI === an ? S === "math" : I.namespaceURI === Ra ? S === "math" && Zt[W] : !!$o[S];
  }, Kl = function(S, I, W) {
    return I.namespaceURI === Ra && !Zt[W] || I.namespaceURI === Ct && !rr[W] ? !1 : !$o[S] && (Ro[S] || !Po[S]);
  }, Gl = function(S) {
    let I = F(S);
    (!I || !I.tagName) && (I = {
      namespaceURI: Ti,
      tagName: "template"
    });
    const W = Br(S.tagName), ce = Br(I.tagName);
    return Ia[S.namespaceURI] ? S.namespaceURI === Ra ? Hl(W, I, ce) : S.namespaceURI === Ct ? Vl(W, I, ce) : S.namespaceURI === an ? Kl(W, I, ce) : !!(ea === "application/xhtml+xml" && Ia[S.namespaceURI]) : !1;
  }, Mn = function(S) {
    Rr(t.removed, {
      element: S
    });
    try {
      F(S).removeChild(S);
    } catch {
      if (N(S), !F(S))
        throw pa("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, sr = function(S, I, W) {
    try {
      S.removeAttributeNode(I);
    } catch {
      try {
        S.removeAttribute(W);
      } catch {
      }
    }
  }, ki = function(S) {
    xi(S);
    const I = O(S);
    if (I) {
      const ce = [];
      ma(I, (me) => {
        Rr(ce, me);
      }), ma(ce, (me) => {
        try {
          N(me);
        } catch {
        }
      });
    }
    const W = M(S);
    if (W)
      for (let ce = W.length - 1; ce >= 0; --ce) {
        const me = W[ce], Oe = me && me.name;
        typeof Oe == "string" && sr(S, me, Oe);
      }
  }, An = function(S, I, W) {
    if (!W)
      try {
        W = I.getAttributeNode(S);
      } catch {
        W = null;
      }
    Rr(t.removed, {
      attribute: W || null,
      from: I
    });
    try {
      W ? I.removeAttributeNode(W) : I.removeAttribute(S);
    } catch {
      try {
        I.removeAttribute(S);
      } catch {
      }
    }
    if (S === "is")
      if (It || En)
        try {
          Mn(I);
        } catch {
        }
      else
        try {
          I.setAttribute(S, "");
        } catch {
        }
  }, lr = function(S) {
    const I = M(S);
    if (I)
      for (let W = I.length - 1; W >= 0; --W) {
        const ce = I[W], me = ce && ce.name;
        typeof me != "string" || R[ht(me)] || sr(S, ce, me);
      }
  }, xi = function(S) {
    const I = [S];
    for (; I.length > 0; ) {
      const W = I.pop();
      X(W) === cn.element && lr(W);
      const me = O(W);
      if (me)
        for (let Oe = me.length - 1; Oe >= 0; --Oe)
          I.push(me[Oe]);
    }
  }, cr = function(S, I) {
    return ze ? S === "patchsrc" ? !0 : S === "for" && I !== "label" && I !== "output" : !1;
  }, Wl = function(S) {
    if (!ze)
      return;
    const I = [S];
    for (; I.length > 0; ) {
      const W = I.pop(), ce = X(W);
      if (ce === cn.processingInstruction || ce === cn.comment && Ft(kf, W.data)) {
        try {
          N(W);
        } catch {
        }
        continue;
      }
      if (ce === cn.element) {
        const Oe = W, nt = ht(fe(W));
        try {
          Oe.hasAttribute && Oe.hasAttribute("patchsrc") && Oe.removeAttribute("patchsrc"), Oe.hasAttribute && Oe.hasAttribute("for") && cr("for", nt) && Oe.removeAttribute("for");
        } catch {
        }
      }
      const me = O(W);
      if (me)
        for (let Oe = me.length - 1; Oe >= 0; --Oe)
          I.push(me[Oe]);
    }
  }, ur = function(S) {
    let I = null, W = null;
    if (At)
      S = "<remove></remove>" + S;
    else {
      const Oe = mf(S, /^[\r\n\t ]+/);
      W = Oe && Oe[0];
    }
    ea === "application/xhtml+xml" && Ti === an && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const ce = Y ? z(S) : S;
    if (Ti === an)
      try {
        I = new f().parseFromString(ce, ea);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = ve.createDocument(Ti, "template", null);
      try {
        I.documentElement.innerHTML = Ji ? se : ce;
      } catch {
      }
    }
    const me = I.body || I.documentElement;
    return S && W && me.insertBefore(n.createTextNode(W), me.childNodes[0] || null), Ti === an ? _e.call(I, Fe ? "html" : "body")[0] : Fe ? I.documentElement : me;
  }, dr = function(S) {
    const I = ue ? ue(S) : S.ownerDocument;
    return de.call(
      I || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, Pa = function(S) {
    return S = Ir(S, ct, " "), S = Ir(S, pt, " "), S = Ir(S, it, " "), S;
  }, ta = function(S) {
    var I;
    S.normalize();
    const W = ue ? ue(S) : S.ownerDocument, ce = de.call(
      W || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_TEXT | u.SHOW_COMMENT | u.SHOW_CDATA_SECTION | u.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let me = ce.nextNode();
    for (; me; )
      me.data = Pa(me.data), me = ce.nextNode();
    const Oe = (I = S.querySelectorAll) === null || I === void 0 ? void 0 : I.call(S, "template");
    Oe && ma(Oe, (nt) => {
      Zn(nt.content) && ta(nt.content);
    });
  }, Oi = function(S) {
    const I = re ? re(S) : null;
    return typeof I != "string" || ht(I) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    S.attributes !== M(S) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    S.nodeType !== E(S) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    S.childNodes !== O(S);
  }, Zn = function(S) {
    if (!E || typeof S != "object" || S === null)
      return !1;
    try {
      return E(S) === cn.documentFragment;
    } catch {
      return !1;
    }
  }, Kt = function(S) {
    if (!E || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof E(S) == "number";
    } catch {
      return !1;
    }
  };
  function rn(ee, S, I) {
    ee.length !== 0 && ma(ee, (W) => {
      W.call(t, S, I, Ai);
    });
  }
  const Fo = function(S, I) {
    return !!(ze && S.hasChildNodes() && !Kt(S.firstElementChild) && Ft(Af, S.textContent) && Ft(Af, S.innerHTML) || ze && S.namespaceURI === an && qy[I] && (Kt(S.firstElementChild) || typeof S.textContent == "string" && Ft(Yy[I], S.textContent)) || S.nodeType === cn.processingInstruction || ze && S.nodeType === cn.comment && Ft(kf, S.data));
  }, $a = function(S, I) {
    if (S instanceof RegExp)
      return Ft(S, I);
    if (S instanceof Function) {
      for (var W = arguments.length, ce = new Array(W > 2 ? W - 2 : 0), me = 2; me < W; me++)
        ce[me - 2] = arguments[me];
      return !!S(I, ...ce);
    }
    return !1;
  }, ql = function(S, I, W) {
    if (!K[I] && Do(I) && $a(G.tagNameCheck, I))
      return !1;
    if (Zi && !_i[I]) {
      const ce = F(S), me = O(S);
      if (me && ce) {
        const Oe = me.length;
        for (let nt = Oe - 1; nt >= 0; --nt) {
          const ot = S === W ? A(me[nt], !0) : me[nt];
          ce.insertBefore(ot, k(S));
        }
      }
    }
    return Mn(S), !0;
  }, fr = function(S, I, W, ce) {
    return S.length === 0 ? I : I === W || I === ce ? un(I) : I;
  }, hr = function(S, I) {
    return S === I || F(S) !== null ? !1 : (yi && xi(S), !0);
  }, pr = function(S, I) {
    if (rn(xe.beforeSanitizeElements, S, null), hr(S, I))
      return !0;
    if (Oi(S))
      return Mn(S), !0;
    const W = ht(fe(S));
    if (x = fr(xe.uponSanitizeElement, x, L, rt), rn(xe.uponSanitizeElement, S, {
      tagName: W,
      allowedTags: x
    }), hr(S, I))
      return !0;
    if (Fo(S, W))
      return Mn(S), !0;
    if (K[W] || !(V.tagCheck instanceof Function && V.tagCheck(W)) && !x[W]) {
      const me = ql(S, W, I);
      return me === !1 && rn(xe.afterSanitizeElements, S, null), me;
    }
    if (X(S) === cn.element && !Gl(S) || (W === "noscript" || W === "noembed" || W === "noframes") && Ft(Gy, S.innerHTML))
      return Mn(S), !0;
    if (Ie && S.nodeType === cn.text) {
      const me = Pa(S.textContent);
      S.textContent !== me && (Rr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = me);
    }
    return rn(xe.afterSanitizeElements, S, null), !1;
  }, vr = function(S, I, W) {
    if (Z[I] || cr(I, S) || dt && (I === "id" || I === "name") && (W in n || W in jl))
      return !1;
    const ce = R[I] || V.attributeCheck instanceof Function && V.attributeCheck(I, S);
    return oe && Ft(ut, I) || pe && Ft(at, I) ? !0 : ce ? Si[I] || Ft(T, Ir(W, j, "")) || (I === "src" || I === "xlink:href" || I === "href") && S !== "script" && bf(W, "data:") === 0 && Xn[S] || he && !Ft(Rt, Ir(W, j, "")) ? !0 : !W : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Do(S) && $a(G.tagNameCheck, S) && $a(G.attributeNameCheck, I, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      I === "is" && G.allowCustomizedBuiltInElements && $a(G.tagNameCheck, W)
    );
  }, Yl = Ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Do = function(S) {
    return !Yl[Br(S)] && Ft(_, S);
  }, Mo = function(S, I, W, ce) {
    if (Y && typeof b == "object" && typeof b.getAttributeType == "function" && !W)
      switch (b.getAttributeType(S, I)) {
        case "TrustedHTML":
          return z(ce);
        case "TrustedScriptURL":
          return q(ce);
      }
    return ce;
  }, Jt = function(S, I, W, ce) {
    try {
      W ? S.setAttributeNS(W, I, ce) : S.setAttribute(I, ce), Oi(S) ? Mn(S) : gf(t.removed);
    } catch {
      An(I, S);
    }
  }, zo = function(S) {
    rn(xe.beforeSanitizeAttributes, S, null);
    const I = S.attributes;
    if (!I || Oi(S))
      return;
    R = fr(xe.uponSanitizeAttribute, R, U, vt);
    const W = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: R,
      forceKeepAttr: void 0
    };
    let ce = I.length;
    const me = ht(S.nodeName);
    for (; ce--; ) {
      const Oe = I[ce], nt = Oe.name, ot = Oe.namespaceURI, Pt = Oe.value, _t = ht(nt), mr = Pt;
      let wt = nt === "value" ? mr : xy(mr);
      if (W.attrName = _t, W.attrValue = wt, W.keepAttr = !0, W.forceKeepAttr = void 0, rn(xe.uponSanitizeAttribute, S, W), wt = W.attrValue, Fn && (_t === "id" || _t === "name") && bf(wt, pn) !== 0 && (An(nt, S, Oe), wt = pn + wt), ze && Ft(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, wt)) {
        An(nt, S, Oe);
        continue;
      }
      if (_t === "attributename" && mf(wt, "href")) {
        An(nt, S, Oe);
        continue;
      }
      if (!W.forceKeepAttr) {
        if (!W.keepAttr) {
          An(nt, S, Oe);
          continue;
        }
        if (!Ee && Ft(Wy, wt)) {
          An(nt, S, Oe);
          continue;
        }
        if (Ie && (wt = Pa(wt)), !vr(me, _t, wt)) {
          An(nt, S, Oe);
          continue;
        }
        wt = Mo(me, _t, ot, wt), wt !== mr && Jt(S, nt, ot, wt);
      }
    }
    rn(xe.afterSanitizeAttributes, S, null);
  }, Fa = function(S) {
    let I = null;
    const W = dr(S);
    for (rn(xe.beforeSanitizeShadowDOM, S, null); I = W.nextNode(); )
      if (rn(xe.uponSanitizeShadowNode, I, null), pr(I, S), zo(I), Zn(I.content) && Fa(I.content), X(I) === cn.element) {
        const ce = D(I);
        Zn(ce) && (gr(ce), Fa(ce));
      }
    rn(xe.afterSanitizeShadowDOM, S, null);
  }, gr = function(S) {
    const I = [{
      node: S,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const W = I.pop();
      if (W.shadow) {
        Fa(W.shadow);
        continue;
      }
      const ce = W.node, Oe = X(ce) === cn.element, nt = O(ce);
      if (nt)
        for (let ot = nt.length - 1; ot >= 0; --ot)
          I.push({
            node: nt[ot],
            shadow: null
          });
      if (Oe) {
        const ot = re ? re(ce) : null;
        if (typeof ot == "string" && ht(ot) === "template") {
          const Pt = ce.content;
          Zn(Pt) && I.push({
            node: Pt,
            shadow: null
          });
        }
      }
      if (Oe) {
        const ot = D(ce);
        Zn(ot) && I.push({
          node: null,
          shadow: ot
        }, {
          node: ot,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ee) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, W = null, ce = null, me = null;
    if (Ji = !ee, Ji && (ee = "<!-->"), typeof ee != "string" && !Kt(ee) && (ee = Iy(ee), typeof ee != "string"))
      throw pa("dirty is not a string, aborting");
    if (!t.isSupported)
      return ee;
    Ke ? (x = rt, R = vt) : or(S), (xe.uponSanitizeElement.length > 0 || xe.uponSanitizeAttribute.length > 0) && (x = un(x)), xe.uponSanitizeAttribute.length > 0 && (R = un(R)), t.removed = [];
    const Oe = yi && typeof ee != "string" && Kt(ee);
    if (Oe) {
      Wl(ee);
      const Pt = fe(ee);
      if (typeof Pt == "string") {
        const _t = ht(Pt);
        if (!x[_t] || K[_t])
          throw ki(ee), pa("root node is forbidden and cannot be sanitized in-place");
      }
      if (Oi(ee))
        throw ki(ee), pa("root node is clobbered and cannot be sanitized in-place");
      try {
        gr(ee);
      } catch (_t) {
        throw ki(ee), _t;
      }
    } else if (Kt(ee))
      I = ur("<!---->"), W = I.ownerDocument.importNode(ee, !0), W.nodeType === cn.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? I = W : I.appendChild(W), gr(W);
    else {
      if (!It && !Ie && !Fe && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return Y && tt ? z(ee) : ee;
      if (I = ur(ee), !I)
        return It ? null : tt ? se : "";
    }
    I && At && Mn(I.firstChild);
    const nt = Oe ? ee : I;
    try {
      const Pt = dr(nt);
      for (; ce = Pt.nextNode(); )
        pr(ce, nt), zo(ce), Zn(ce.content) && Fa(ce.content);
    } catch (Pt) {
      throw Oe && (ki(ee), ma(t.removed, (_t) => {
        _t.element && xi(_t.element);
      })), Pt;
    }
    if (Oe)
      return ma(t.removed, (Pt) => {
        Pt.element && xi(Pt.element);
      }), Ie && ta(ee), ee;
    if (It) {
      if (Ie && ta(I), En)
        for (me = be.call(I.ownerDocument); I.firstChild; )
          me.appendChild(I.firstChild);
      else
        me = I;
      return (R.shadowroot || R.shadowrootmode) && (me = Ve.call(i, me, !0)), me;
    }
    let ot = Fe ? I.outerHTML : I.innerHTML;
    return Fe && x["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Ft(Vy, I.ownerDocument.doctype.name) && (ot = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + ot), Ie && (ot = Pa(ot)), Y && tt ? z(ot) : ot;
  }, t.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    or(ee), Ke = !0, rt = x, vt = R;
  }, t.clearConfig = function() {
    Ai = null, Ke = !1, rt = null, vt = null, Y = ge, se = "";
  }, t.isValidAttribute = function(ee, S, I) {
    Ai || or({});
    const W = ht(ee), ce = ht(S);
    return vr(W, ce, I);
  }, t.addHook = function(ee, S) {
    typeof S == "function" && tn(xe, ee) && Rr(xe[ee], S);
  }, t.removeHook = function(ee, S) {
    if (tn(xe, ee)) {
      if (S !== void 0) {
        const I = Ay(xe[ee], S);
        return I === -1 ? void 0 : ky(xe[ee], I, 1)[0];
      }
      return gf(xe[ee]);
    }
  }, t.removeHooks = function(ee) {
    tn(xe, ee) && (xe[ee] = []);
  }, t.removeAllHooks = function() {
    xe = xf();
  }, t;
}
var Vp = Hp();
function Uu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Cc, Of;
function Jy() {
  if (Of) return Cc;
  Of = 1;
  var e = /["'&<>]/;
  Cc = t;
  function t(n) {
    var i = "" + n, a = e.exec(i);
    if (!a)
      return i;
    var r, o = "", c = 0, u = 0;
    for (c = a.index; c < i.length; c++) {
      switch (i.charCodeAt(c)) {
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
      u !== c && (o += i.substring(u, c)), u = c + 1, o += r;
    }
    return u !== c ? o + i.substring(u, c) : o;
  }
  return Cc;
}
var Qy = Jy();
const Ls = /* @__PURE__ */ Uu(Qy);
function e_() {
  return globalThis._nc_l10n_locale;
}
function t_() {
  return e_().replaceAll(/_/g, "-");
}
function Il() {
  return globalThis._nc_l10n_language;
}
function n_(e) {
  const t = Il();
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
function Kp(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function m(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, o = typeof i == "number" ? i : typeof n == "number" ? n : void 0, c = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, u = (k) => k, h = (c.sanitize ? Vp.sanitize : u) || u, f = c.escape ? Ls : u, b = (k) => typeof k == "string" || typeof k == "number", C = (k, O, F) => k.replace(/%n/g, "" + F).replace(/{([^{}]*)}/g, (D, M) => {
    if (O === void 0 || !(M in O))
      return f(D);
    const E = O[M];
    return b(E) ? f(`${E}`) : typeof E == "object" && b(E.value) ? (E.escape !== !1 ? Ls : u)(`${E.value}`) : f(D);
  });
  let N = (a?.bundle ?? Kp(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, h(typeof r == "object" || o !== void 0 ? C(
    N,
    r,
    o
  ) : N);
}
function mn(e, t, n, i, a, r) {
  const o = "_" + t + "_::_" + n + "_", c = r?.bundle ?? Kp(e), u = c.translations[o];
  if (typeof u < "u") {
    const h = u;
    if (Array.isArray(h)) {
      const f = c.pluralFunction(i);
      return m(e, h[f], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function i_(e, t = Il()) {
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
class Rs {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Rs.GLOBAL_SCOPE_PERSISTENT : Rs.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class a_ {
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
    return new Rs(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Gp(e) {
  return new a_(e);
}
function r_() {
  try {
    return zu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Tc, Nf;
function Wp() {
  if (Nf) return Tc;
  Nf = 1;
  var e = {};
  return Tc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Tc;
}
var Ec, Lf;
function qp() {
  if (Lf) return Ec;
  Lf = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return Ec = {
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
  }, Ec;
}
var as = { exports: {} }, Rf;
function o_() {
  return Rf || (Rf = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = qp(), r = Wp();
    t = e.exports = {};
    const o = t.re = [], c = t.safeRe = [], u = t.src = [], h = t.safeSrc = [], f = t.t = {};
    let b = 0;
    const C = "[a-zA-Z0-9-]", A = [
      ["\\s", 1],
      ["\\d", a],
      [C, i]
    ], N = (O) => {
      for (const [F, D] of A)
        O = O.split(`${F}*`).join(`${F}{0,${D}}`).split(`${F}+`).join(`${F}{1,${D}}`);
      return O;
    }, k = (O, F, D) => {
      const M = N(F), E = b++;
      r(O, E, F), f[O] = E, u[E] = F, h[E] = M, o[E] = new RegExp(F, D ? "g" : void 0), c[E] = new RegExp(M, D ? "g" : void 0);
    };
    k("NUMERICIDENTIFIER", "0|[1-9]\\d*"), k("NUMERICIDENTIFIERLOOSE", "\\d+"), k("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${C}*`), k("MAINVERSION", `(${u[f.NUMERICIDENTIFIER]})\\.(${u[f.NUMERICIDENTIFIER]})\\.(${u[f.NUMERICIDENTIFIER]})`), k("MAINVERSIONLOOSE", `(${u[f.NUMERICIDENTIFIERLOOSE]})\\.(${u[f.NUMERICIDENTIFIERLOOSE]})\\.(${u[f.NUMERICIDENTIFIERLOOSE]})`), k("PRERELEASEIDENTIFIER", `(?:${u[f.NONNUMERICIDENTIFIER]}|${u[f.NUMERICIDENTIFIER]})`), k("PRERELEASEIDENTIFIERLOOSE", `(?:${u[f.NONNUMERICIDENTIFIER]}|${u[f.NUMERICIDENTIFIERLOOSE]})`), k("PRERELEASE", `(?:-(${u[f.PRERELEASEIDENTIFIER]}(?:\\.${u[f.PRERELEASEIDENTIFIER]})*))`), k("PRERELEASELOOSE", `(?:-?(${u[f.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[f.PRERELEASEIDENTIFIERLOOSE]})*))`), k("BUILDIDENTIFIER", `${C}+`), k("BUILD", `(?:\\+(${u[f.BUILDIDENTIFIER]}(?:\\.${u[f.BUILDIDENTIFIER]})*))`), k("FULLPLAIN", `v?${u[f.MAINVERSION]}${u[f.PRERELEASE]}?${u[f.BUILD]}?`), k("FULL", `^${u[f.FULLPLAIN]}$`), k("LOOSEPLAIN", `[v=\\s]*${u[f.MAINVERSIONLOOSE]}${u[f.PRERELEASELOOSE]}?${u[f.BUILD]}?`), k("LOOSE", `^${u[f.LOOSEPLAIN]}$`), k("GTLT", "((?:<|>)?=?)"), k("XRANGEIDENTIFIERLOOSE", `${u[f.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), k("XRANGEIDENTIFIER", `${u[f.NUMERICIDENTIFIER]}|x|X|\\*`), k("XRANGEPLAIN", `[v=\\s]*(${u[f.XRANGEIDENTIFIER]})(?:\\.(${u[f.XRANGEIDENTIFIER]})(?:\\.(${u[f.XRANGEIDENTIFIER]})(?:${u[f.PRERELEASE]})?${u[f.BUILD]}?)?)?`), k("XRANGEPLAINLOOSE", `[v=\\s]*(${u[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[f.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[f.XRANGEIDENTIFIERLOOSE]})(?:${u[f.PRERELEASELOOSE]})?${u[f.BUILD]}?)?)?`), k("XRANGE", `^${u[f.GTLT]}\\s*${u[f.XRANGEPLAIN]}$`), k("XRANGELOOSE", `^${u[f.GTLT]}\\s*${u[f.XRANGEPLAINLOOSE]}$`), k("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), k("COERCE", `${u[f.COERCEPLAIN]}(?:$|[^\\d])`), k("COERCEFULL", u[f.COERCEPLAIN] + `(?:${u[f.PRERELEASE]})?(?:${u[f.BUILD]})?(?:$|[^\\d])`), k("COERCERTL", u[f.COERCE], !0), k("COERCERTLFULL", u[f.COERCEFULL], !0), k("LONETILDE", "(?:~>?)"), k("TILDETRIM", `(\\s*)${u[f.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", k("TILDE", `^${u[f.LONETILDE]}${u[f.XRANGEPLAIN]}$`), k("TILDELOOSE", `^${u[f.LONETILDE]}${u[f.XRANGEPLAINLOOSE]}$`), k("LONECARET", "(?:\\^)"), k("CARETTRIM", `(\\s*)${u[f.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", k("CARET", `^${u[f.LONECARET]}${u[f.XRANGEPLAIN]}$`), k("CARETLOOSE", `^${u[f.LONECARET]}${u[f.XRANGEPLAINLOOSE]}$`), k("COMPARATORLOOSE", `^${u[f.GTLT]}\\s*(${u[f.LOOSEPLAIN]})$|^$`), k("COMPARATOR", `^${u[f.GTLT]}\\s*(${u[f.FULLPLAIN]})$|^$`), k("COMPARATORTRIM", `(\\s*)${u[f.GTLT]}\\s*(${u[f.LOOSEPLAIN]}|${u[f.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", k("HYPHENRANGE", `^\\s*(${u[f.XRANGEPLAIN]})\\s+-\\s+(${u[f.XRANGEPLAIN]})\\s*$`), k("HYPHENRANGELOOSE", `^\\s*(${u[f.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[f.XRANGEPLAINLOOSE]})\\s*$`), k("STAR", "(<|>)?=?\\s*\\*"), k("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), k("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(as, as.exports)), as.exports;
}
var Ac, If;
function s_() {
  if (If) return Ac;
  If = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Ac = (i) => i ? typeof i != "object" ? e : i : t, Ac;
}
var kc, Pf;
function l_() {
  if (Pf) return kc;
  Pf = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), o = e.test(a);
    return r && o && (i = +i, a = +a), i === a ? 0 : r && !o ? -1 : o && !r ? 1 : i < a ? -1 : 1;
  };
  return kc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, kc;
}
var xc, $f;
function Yp() {
  if ($f) return xc;
  $f = 1;
  const e = Wp(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = qp(), { safeRe: i, t: a } = o_(), r = s_(), { compareIdentifiers: o } = l_(), c = (h, f) => {
    const b = f.split(".");
    if (b.length > h.length)
      return !1;
    for (let C = 0; C < b.length; C++)
      if (o(h[C], b[C]) !== 0)
        return !1;
    return !0;
  };
  class u {
    constructor(f, b) {
      if (b = r(b), f instanceof u) {
        if (f.loose === !!b.loose && f.includePrerelease === !!b.includePrerelease)
          return f;
        f = f.version;
      } else if (typeof f != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);
      if (f.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", f, b), this.options = b, this.loose = !!b.loose, this.includePrerelease = !!b.includePrerelease;
      const C = f.trim().match(b.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!C)
        throw new TypeError(`Invalid Version: ${f}`);
      if (this.raw = f, this.major = +C[1], this.minor = +C[2], this.patch = +C[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      C[4] ? this.prerelease = C[4].split(".").map((A) => {
        if (/^[0-9]+$/.test(A)) {
          const N = +A;
          if (N >= 0 && N < n)
            return N;
        }
        return A;
      }) : this.prerelease = [], this.build = C[5] ? C[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(f) {
      if (e("SemVer.compare", this.version, this.options, f), !(f instanceof u)) {
        if (typeof f == "string" && f === this.version)
          return 0;
        f = new u(f, this.options);
      }
      return f.version === this.version ? 0 : this.compareMain(f) || this.comparePre(f);
    }
    compareMain(f) {
      return f instanceof u || (f = new u(f, this.options)), this.major < f.major ? -1 : this.major > f.major ? 1 : this.minor < f.minor ? -1 : this.minor > f.minor ? 1 : this.patch < f.patch ? -1 : this.patch > f.patch ? 1 : 0;
    }
    comparePre(f) {
      if (f instanceof u || (f = new u(f, this.options)), this.prerelease.length && !f.prerelease.length)
        return -1;
      if (!this.prerelease.length && f.prerelease.length)
        return 1;
      if (!this.prerelease.length && !f.prerelease.length)
        return 0;
      let b = 0;
      do {
        const C = this.prerelease[b], A = f.prerelease[b];
        if (e("prerelease compare", b, C, A), C === void 0 && A === void 0)
          return 0;
        if (A === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === A)
          continue;
        return o(C, A);
      } while (++b);
    }
    compareBuild(f) {
      f instanceof u || (f = new u(f, this.options));
      let b = 0;
      do {
        const C = this.build[b], A = f.build[b];
        if (e("build compare", b, C, A), C === void 0 && A === void 0)
          return 0;
        if (A === void 0)
          return 1;
        if (C === void 0)
          return -1;
        if (C === A)
          continue;
        return o(C, A);
      } while (++b);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(f, b, C) {
      if (f.startsWith("pre")) {
        if (!b && C === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (b) {
          const A = `-${b}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!A || A[1] !== b)
            throw new Error(`invalid identifier: ${b}`);
        }
      }
      switch (f) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", b, C);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", b, C);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", b, C), this.inc("pre", b, C);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", b, C), this.inc("pre", b, C);
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
          const A = Number(C) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [A];
          else {
            let N = this.prerelease.length;
            for (; --N >= 0; )
              typeof this.prerelease[N] == "number" && (this.prerelease[N]++, N = -2);
            if (N === -1) {
              if (b === this.prerelease.join(".") && C === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(A);
            }
          }
          if (b) {
            let N = [b, A];
            if (C === !1 && (N = [b]), c(this.prerelease, b)) {
              const k = this.prerelease[b.split(".").length];
              isNaN(k) && (this.prerelease = N);
            } else
              this.prerelease = N;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${f}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return xc = u, xc;
}
var Oc, Ff;
function c_() {
  if (Ff) return Oc;
  Ff = 1;
  const e = Yp();
  return Oc = (n, i) => new e(n, i).major, Oc;
}
var u_ = c_();
const Df = /* @__PURE__ */ Uu(u_);
var Nc, Mf;
function d_() {
  if (Mf) return Nc;
  Mf = 1;
  const e = Yp();
  return Nc = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Nc;
}
var Lc, zf;
function f_() {
  if (zf) return Lc;
  zf = 1;
  const e = d_();
  return Lc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Lc;
}
var h_ = f_();
const p_ = /* @__PURE__ */ Uu(h_);
class v_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !p_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Df(t.getVersion()) !== Df(this.getVersion()) && console.warn(
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
class g_ {
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
let $r = null;
function Bu() {
  return $r !== null ? $r : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? $r = new v_(window._nc_event_bus) : $r = window._nc_event_bus = new g_(), $r);
}
function Xp(e, t) {
  Bu().subscribe(e, t);
}
function m_(e, t) {
  Bu().unsubscribe(e, t);
}
function fi(e, ...t) {
  Bu().emit(e, ...t);
}
const Zp = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const b_ = Object.prototype.toString, y_ = (e) => b_.call(e) === "[object Object]", Ba = () => {
}, __ = /* @__PURE__ */ w_();
function w_() {
  var e, t, n;
  return Zp && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function Rc(e) {
  return Array.isArray(e) ? e : [e];
}
function S_(e, t, n) {
  return qe(e, t, {
    ...n,
    immediate: !0
  });
}
const Jp = Zp ? window : void 0;
function jr(e) {
  var t;
  const n = ui(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function er(...e) {
  const t = (i, a, r, o) => (i.addEventListener(a, r, o), () => i.removeEventListener(a, r, o)), n = H(() => {
    const i = Rc(ui(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return S_(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => jr(r))) !== null && i !== void 0 ? i : [Jp].filter((r) => r != null),
      Rc(ui(n.value ? e[1] : e[0])),
      Rc(g(n.value ? e[2] : e[1])),
      ui(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, o], c, u) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const h = y_(o) ? { ...o } : o, f = i.flatMap((b) => a.flatMap((C) => r.map((A) => t(b, C, A, h))));
    u(() => {
      f.forEach((b) => b());
    });
  }, { flush: "post" });
}
let Uf = !1;
function Bf(e, t, n = {}) {
  const { window: i = Jp, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: c = !1 } = n;
  if (!i) return c ? {
    stop: Ba,
    cancel: Ba,
    trigger: Ba
  } : Ba;
  if (__ && !Uf) {
    Uf = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((F) => F.addEventListener("click", Ba, O)), i.document.documentElement.addEventListener("click", Ba, O);
  }
  let u = !0;
  const h = (O) => ui(a).some((F) => {
    if (typeof F == "string") return Array.from(i.document.querySelectorAll(F)).some((D) => D === O.target || O.composedPath().includes(D));
    {
      const D = jr(F);
      return D && (O.target === D || O.composedPath().includes(D));
    }
  });
  function f(O) {
    const F = ui(O);
    return F && F.$.subTree.shapeFlag === 16;
  }
  function b(O, F) {
    const D = ui(O), M = D.$.subTree && D.$.subTree.children;
    return M == null || !Array.isArray(M) ? !1 : M.some((E) => E.el === F.target || F.composedPath().includes(E.el));
  }
  const C = (O) => {
    const F = jr(e);
    if (O.target != null && !(!(F instanceof Element) && f(e) && b(e, O)) && !(!F || F === O.target || O.composedPath().includes(F))) {
      if ("detail" in O && O.detail === 0 && (u = !h(O)), !u) {
        u = !0;
        return;
      }
      t(O);
    }
  };
  let A = !1;
  const N = [
    er(i, "click", (O) => {
      A || (A = !0, setTimeout(() => {
        A = !1;
      }, 0), C(O));
    }, {
      passive: !0,
      capture: r
    }),
    er(i, "pointerdown", (O) => {
      const F = jr(e);
      u = !h(O) && !!(F && !O.composedPath().includes(F));
    }, { passive: !0 }),
    o && er(i, "blur", (O) => {
      setTimeout(() => {
        const F = jr(e);
        let D = i.document.activeElement;
        for (; D?.shadowRoot; ) D = D.shadowRoot.activeElement;
        D?.tagName === "IFRAME" && !F?.contains(i.document.activeElement) && t(O);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), k = () => N.forEach((O) => O());
  return c ? {
    stop: k,
    cancel: () => {
      u = !1;
    },
    trigger: (O) => {
      u = !0, C(O), u = !1;
    }
  } : k;
}
function C_(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, c = /* @__PURE__ */ Mt({
    x: 0,
    y: 0
  }), u = /* @__PURE__ */ Mt({
    x: 0,
    y: 0
  }), h = H(() => c.x - u.x), f = H(() => c.y - u.y), { max: b, abs: C } = Math, A = H(() => b(C(h.value), C(f.value)) >= n), N = /* @__PURE__ */ Vh(!1), k = H(() => A.value ? C(h.value) > C(f.value) ? h.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), O = (X) => [X.touches[0].clientX, X.touches[0].clientY], F = (X, fe) => {
    c.x = X, c.y = fe;
  }, D = (X, fe) => {
    u.x = X, u.y = fe;
  }, M = {
    passive: o,
    capture: !o
  }, E = (X) => {
    N.value && a?.(X, k.value), N.value = !1;
  }, re = [
    er(e, "touchstart", (X) => {
      if (X.touches.length !== 1) return;
      const [fe, Y] = O(X);
      F(fe, Y), D(fe, Y), r?.(X);
    }, M),
    er(e, "touchmove", (X) => {
      if (X.touches.length !== 1) return;
      const [fe, Y] = O(X);
      D(fe, Y), M.capture && !M.passive && Math.abs(h.value) > Math.abs(f.value) && X.preventDefault(), !N.value && A.value && (N.value = !0), N.value && i?.(X);
    }, M),
    er(e, ["touchend", "touchcancel"], E, M)
  ];
  return {
    isSwiping: N,
    direction: k,
    coordsStart: c,
    coordsEnd: u,
    lengthX: h,
    lengthY: f,
    stop: () => re.forEach((X) => X())
  };
}
var T_ = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = Jm(), r = Zm(), o = /* @__PURE__ */ we([]), c = H(() => o.value.reduce((j, _) => (j[~~_.id] = _) && j, {})), u = H(() => o.value.length), h = /* @__PURE__ */ we(null), f = /* @__PURE__ */ we(!1), b = /* @__PURE__ */ we({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), C = /* @__PURE__ */ we({
      splitter: null,
      timeoutId: null
    }), A = H(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": b.value.dragging,
      "splitpanes--ready": f.value
    })), N = () => {
      document.addEventListener("mousemove", F, { passive: !1 }), document.addEventListener("mouseup", D), "ontouchstart" in window && (document.addEventListener("touchmove", F, { passive: !1 }), document.addEventListener("touchend", D));
    }, k = () => {
      document.removeEventListener("mousemove", F, { passive: !1 }), document.removeEventListener("mouseup", D), "ontouchstart" in window && (document.removeEventListener("touchmove", F, { passive: !1 }), document.removeEventListener("touchend", D));
    }, O = (j, _) => {
      let T = j.target.closest(".splitpanes__splitter");
      if (T) {
        let { left: x, top: L } = T.getBoundingClientRect(), { clientX: R, clientY: U } = "ontouchstart" in window && j.touches ? j.touches[0] : j;
        b.value.cursorOffset = i.horizontal ? U - L : R - x;
      }
      N(), b.value.mouseDown = !0, b.value.activeSplitter = _, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, F = (j) => {
      b.value.mouseDown && (j.preventDefault(), b.value.dragging || (window.getSelection()?.removeAllRanges(), b.value.dragging = !0), requestAnimationFrame(() => {
        Y(X(j)), at("resize", { event: j }, !0);
      }));
    }, D = (j) => {
      b.value.dragging && (window.getSelection()?.removeAllRanges(), at("resized", { event: j }, !0)), b.value.mouseDown = !1, b.value.activeSplitter = null, setTimeout(() => {
        b.value.dragging = !1, k(), document.documentElement.style.cursor = "";
      }, 100);
    }, M = (j, _) => {
      "ontouchstart" in window && (j.preventDefault(), C.value.splitter === _ ? (clearTimeout(C.value.timeoutId), C.value.timeoutId = null, E(j, _), C.value.splitter = null) : (C.value.splitter = _, C.value.timeoutId = setTimeout(() => C.value.splitter = null, 500))), b.value.dragging || at("splitter-click", {
        event: j,
        index: _
      }, !0);
    }, E = (j, _) => {
      if (at("splitter-dblclick", {
        event: j,
        index: _
      }, !0), i.maximizePanes) {
        let T = 0;
        o.value = o.value.map((x, L) => (x.size = L === _ ? x.max : x.min, L !== _ && (T += x.min), x)), o.value[_].size -= T, at("pane-maximize", {
          event: j,
          index: _,
          pane: o.value[_]
        }), at("resized", {
          event: j,
          index: _
        }, !0);
      }
    }, re = (j, _) => {
      if (!i.keyboardStep) return;
      let T = i.horizontal ? j.key === "ArrowDown" : j.key === "ArrowRight", x = i.horizontal ? j.key === "ArrowUp" : j.key === "ArrowLeft";
      if (!T && !x) return;
      j.preventDefault(), b.value.activeSplitter = _;
      let L = (T ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), R = J(_) + o.value[_].size;
      se(Math.min(Math.max(R + L * i.keyboardStep, 0), 100)), at("resize", { event: j }, !0), at("resized", { event: j }, !0), b.value.activeSplitter = null;
    }, ue = (j, _) => {
      let T = c.value[_];
      T && at("pane-click", {
        event: j,
        index: T.index,
        pane: T
      });
    }, X = (j) => {
      let _ = h.value.getBoundingClientRect(), { clientX: T, clientY: x } = "ontouchstart" in window && j.touches ? j.touches[0] : j;
      return {
        x: T - (i.horizontal ? 0 : b.value.cursorOffset) - _.left,
        y: x - (i.horizontal ? b.value.cursorOffset : 0) - _.top
      };
    }, fe = (j) => {
      j = j[i.horizontal ? "y" : "x"];
      let _ = h.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (j = _ - j), j * 100 / _;
    }, Y = (j) => {
      se(fe(j));
    }, se = (j) => {
      let _ = b.value.activeSplitter;
      if (_ === null || _ >= o.value.length - 1) return;
      let T = {
        prevPanesSize: J(_),
        nextPanesSize: Q(_),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, x = 0 + (i.pushOtherPanes ? 0 : T.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : T.nextPanesSize);
      j = Math.max(Math.min(j, L), x);
      let R = [_, _ + 1], U = o.value[R[0]] || null, G = o.value[R[1]] || null, K = U !== null && U.max < 100 && j >= U.max + T.prevPanesSize, Z = G !== null && G.max < 100 && j <= 100 - (G.max + Q(_ + 1));
      if (K || Z) {
        K ? (U.size = U.max, G.size = Math.min(Math.max(100 - U.max - T.prevPanesSize - T.nextPanesSize, G.min), G.max)) : (U.size = Math.min(Math.max(100 - G.max - T.prevPanesSize - Q(_ + 1), U.min), U.max), G.size = G.max);
        return;
      }
      if (i.pushOtherPanes) {
        let V = ge(T, j);
        if (!V) return;
        ({ sums: T, panesToResize: R } = V), U = o.value[R[0]] || null, G = o.value[R[1]] || null;
      }
      U !== null && (U.size = Math.min(Math.max(j - T.prevPanesSize - T.prevReachedMinPanes, U.min), U.max)), G !== null && (G.size = Math.min(Math.max(100 - j - T.nextPanesSize - T.nextReachedMinPanes, G.min), G.max));
    }, ge = (j, _) => {
      let T = b.value.activeSplitter, x = [T, T + 1];
      if (_ < j.prevPanesSize + o.value[x[0]].min) {
        if (x[0] = $(T).index, j.prevReachedMinPanes = 0, x[0] < T && o.value.forEach((L, R) => {
          R > x[0] && R <= T && (L.size = L.min, j.prevReachedMinPanes += L.min);
        }), x[0] === void 0) return j.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((L, R) => {
          R > 0 && R <= T && (L.size = L.min, j.prevReachedMinPanes += L.min);
        }), o.value[x[1]].size = 100 - j.prevReachedMinPanes - o.value[0].min - j.prevPanesSize - j.nextPanesSize, null;
        j.prevPanesSize = J(x[0]);
      }
      return _ > 100 - j.nextPanesSize - o.value[x[1]].min && (x[1] = z(T).index, j.nextReachedMinPanes = 0, x[1] > T + 1 && o.value.forEach((L, R) => {
        R > T && R < x[1] && (L.size = L.min, j.nextReachedMinPanes += L.min);
      }), j.nextPanesSize = x[1] === void 0 ? 0 : Q(x[1] - 1), x[1] === void 0) ? (j.nextReachedMinPanes = 0, o.value.forEach((L, R) => {
        R >= T + 1 && (L.size = L.min, j.nextReachedMinPanes += L.min);
      }), x[0] !== void 0 && (o.value[x[0]].size = 100 - j.prevPanesSize - Q(x[0] - 1)), null) : {
        sums: j,
        panesToResize: x
      };
    }, J = (j) => o.value.reduce((_, T, x) => _ + (x < j ? T.size : 0), 0), Q = (j) => o.value.reduce((_, T, x) => _ + (x > j + 1 ? T.size : 0), 0), $ = (j) => [...o.value].reverse().find((_) => _.index < j && _.size > _.min) || {}, z = (j) => o.value.find((_) => _.index > j + 1 && _.size > _.min) || {}, q = () => {
      let j = Array.from(h.value?.children || []);
      for (let _ of j) {
        let T = _.classList.contains("splitpanes__pane"), x = _.classList.contains("splitpanes__splitter");
        !T && !x && (_.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, le = (j, _, T = !1) => {
      let x = j - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), T || (L.onmousedown = (R) => O(R, x), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (R) => O(R, x)), L.onclick = (R) => M(R, x + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (R) => re(R, x))), L.ondblclick = (R) => E(R, x + 1), _.parentNode.insertBefore(L, _);
    }, ne = (j) => {
      j.onmousedown = null, j.onclick = null, j.ondblclick = null, j.onkeydown = null, j.remove();
    }, ve = () => {
      let j = Array.from(h.value?.children || []);
      for (let T of j) T.className.includes("splitpanes__splitter") && ne(T);
      let _ = 0;
      for (let T of j) T.className.includes("splitpanes__pane") && (!_ && i.firstSplitter ? le(_, T, !0) : _ && le(_, T), _++);
    }, de = ({ uid: j, ..._ }) => {
      let T = c.value[j];
      for (let [x, L] of Object.entries(_)) T[x] = L;
    }, be = !1, _e = (j) => {
      let _ = -1;
      Array.from(h.value?.children || []).some((T) => (T.className.includes("splitpanes__pane") && _++, T.isSameNode(j.el))), o.value.splice(_, 0, {
        ...j,
        index: _
      }), o.value.forEach((T, x) => T.index = x), f.value && !be && (be = !0, nn(() => {
        ve(), xe({ addedPane: o.value[_] }), at("pane-add", { pane: o.value[_] }), be = !1;
      }));
    }, Ve = (j) => {
      let _ = o.value.findIndex((x) => x.id === j);
      o.value[_].el = null;
      let T = o.value.splice(_, 1)[0];
      o.value.forEach((x, L) => x.index = L), nn(() => {
        ve(), at("pane-remove", { pane: T }), xe({ removedPane: {
          ...T
        } });
      });
    }, xe = (j = {}) => {
      !j.addedPane && !j.removedPane ? pt() : o.value.some((_) => _.givenSize !== null || _.min || _.max < 100) ? it(j) : ct(), f.value && at("resized");
    }, ct = () => {
      let j = 100 / u.value, _ = 100, T = [], x = [];
      for (let L of o.value) L.size = Math.max(Math.min(j, L.max), L.min), _ -= L.size, L.size >= L.max && T.push(L.id), L.size <= L.min && x.push(L.id);
      Math.abs(_) > 0.1 && ut(_, T, x);
    }, pt = () => {
      let j = 100, _ = [], T = [], x = 0;
      for (let R of o.value) j -= R.size, R.givenSize !== null && x++, R.size >= R.max && _.push(R.id), R.size <= R.min && T.push(R.id);
      let L = 100;
      if (j > 0.1) {
        for (let R of o.value) R.givenSize === null && (R.size = Math.max(Math.min(j / (u.value - x), R.max), R.min)), L -= R.size;
        L > 0.1 && ut(L, _, T);
      }
    }, it = ({ addedPane: j, removedPane: _ } = {}) => {
      let T = o.value.reduce((K, Z) => K + (Z.givenSize === null ? 0 : Z.givenSize), 0), x = o.value.filter((K) => K.givenSize === null).length, L = x > 0 ? (100 - T) / x : 0, R = 0, U = [], G = [];
      for (let K of o.value) R -= K.size, K.size >= K.max && U.push(K.id), K.size <= K.min && G.push(K.id);
      if (!(Math.abs(R) < 0.1)) {
        R = 100;
        for (let K of o.value) K.givenSize === null && (K.size = Math.max(Math.min(L, K.max), K.min)), R -= K.size, K.size >= K.max && U.push(K.id), K.size <= K.min && G.push(K.id);
        Math.abs(R) > 0.1 && ut(R, U, G);
      }
    }, ut = (j, _, T) => {
      let x;
      x = j > 0 ? j / (u.value - _.length) : j / (u.value - T.length), o.value.forEach((L, R) => {
        if (j > 0 && !_.includes(L.id)) {
          let U = Math.max(Math.min(L.size + x, L.max), L.min), G = U - L.size;
          j -= G, L.size = U;
        } else if (!T.includes(L.id)) {
          let U = Math.max(Math.min(L.size + x, L.max), L.min), G = U - L.size;
          j -= G, L.size = U;
        }
      }), Math.abs(j) > 0.1 && f.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, at = (j, _ = void 0, T = !1) => {
      let x = _?.index ?? b.value.activeSplitter ?? null;
      n(j, {
        ..._,
        ...x !== null && { index: x },
        ...T && x !== null && {
          prevPane: o.value[x - +!!i.firstSplitter],
          nextPane: o.value[x + +!i.firstSplitter]
        },
        panes: o.value.map((L) => ({
          min: L.min,
          max: L.max,
          size: L.size
        }))
      });
    };
    qe(() => i.firstSplitter, () => ve()), qe(() => i.horizontal, (j) => nn(() => {
      n("direction-changed", {
        horizontal: j,
        panes: o.value.map((_) => ({
          min: _.min,
          max: _.max,
          size: _.size
        }))
      });
    })), qi(() => {
      q(), ve(), xe(), at("ready"), f.value = !0;
    }), ir(() => f.value = !1);
    let Rt = () => {
      let { class: j, ..._ } = a;
      return en("div", {
        ref: h,
        class: [A.value, j],
        ..._
      }, r.default?.());
    };
    return yn("panes", o), yn("indexedPanes", c), yn("horizontal", H(() => i.horizontal)), yn("requestUpdate", de), yn("onPaneAdd", _e), yn("onPaneRemove", Ve), yn("onPaneClick", ue), (j, _) => (y(), Be(Iu(Rt)));
  }
}), E_ = {
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
    let t = e, n = Ut("requestUpdate"), i = Ut("onPaneAdd"), a = Ut("horizontal"), r = Ut("onPaneRemove"), o = Ut("onPaneClick"), c = Na()?.uid, u = Ut("indexedPanes"), h = H(() => u.value[c]), f = /* @__PURE__ */ we(null), b = H(() => {
      let k = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(k, A.value), C.value);
    }), C = H(() => {
      let k = parseFloat(t.minSize);
      return isNaN(k) ? 0 : k;
    }), A = H(() => {
      let k = parseFloat(t.maxSize);
      return isNaN(k) ? 100 : k;
    }), N = H(() => {
      let k = h.value?.size ?? (t.size === void 0 ? void 0 : b.value);
      return k === void 0 ? "" : `${a.value ? "height" : "width"}: ${k}%`;
    });
    return qe(() => b.value, (k) => n({
      uid: c,
      size: k
    })), qe(() => C.value, (k) => n({
      uid: c,
      min: k
    })), qe(() => A.value, (k) => n({
      uid: c,
      max: k
    })), qi(() => {
      i({
        id: c,
        el: f.value,
        min: C.value,
        max: A.value,
        givenSize: t.size === void 0 ? null : b.value,
        size: b.value
      });
    }), ir(() => r(c)), (k, O) => (y(), w("div", {
      ref_key: "paneEl",
      ref: f,
      class: "splitpanes__pane",
      onClick: O[0] ||= (F) => g(o)(F, k._.uid),
      style: hn(N.value)
    }, [Me(k.$slots, "default")], 4));
  }
}, A_ = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", k_ = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", x_ = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", O_ = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const ju = 1024, Qp = ju / 2, Is = (e) => document.documentElement.clientWidth < e, ev = /* @__PURE__ */ we(Is(ju)), tv = /* @__PURE__ */ we(Is(Qp));
window.addEventListener("resize", () => {
  ev.value = Is(ju), tv.value = Is(Qp);
}, { passive: !0 });
function No() {
  return /* @__PURE__ */ lo(ev);
}
function N_() {
  return /* @__PURE__ */ lo(tv);
}
class L_ {
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
    return mn("", t, n, i, a, { bundle: this.bundle });
  }
}
class R_ {
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
    return this.setLanguage(Il().replace("-", "_"));
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
    const t = new L_((n) => i_(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function I_() {
  return new R_();
}
const nv = I_().detectLanguage().build(), Tt = (...e) => nv.gettext(...e);
function Yi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Il() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        nv.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const P_ = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], $_ = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], F_ = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], D_ = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], M_ = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], z_ = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], U_ = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], B_ = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], j_ = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const H_ = /* @__PURE__ */ Symbol(""), [V_] = window.OC?.config?.version?.split(".") ?? [], iv = Number.parseInt(V_ ?? "35"), K_ = iv < 32, Xi = iv < 34, G_ = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function W_() {
  return Ut(G_, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, q_ = { class: "button-vue__wrapper" }, Y_ = { class: "button-vue__icon" }, X_ = { class: "button-vue__text" }, Z_ = /* @__PURE__ */ Lt({
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
    const n = e, i = t, { formBoxItemClass: a } = W_(), r = Ut(H_, null) !== null, o = H(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), c = H(() => o.value === "button" && typeof n.pressed == "boolean"), u = H(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), h = H(() => u.value.startsWith("tertiary")), f = H(() => n.alignment.split("-")[0]), b = H(() => n.alignment.includes("-")), C = Ut("NcPopover:trigger:attrs", () => ({}), !1), A = H(() => C()), N = H(() => {
      if (o.value === "RouterLink")
        return {
          to: n.to,
          activeClass: "active"
        };
      if (o.value === "a")
        return {
          href: n.href || "#",
          target: n.target,
          rel: "nofollow noreferrer noopener",
          download: n.download || void 0
        };
      if (o.value === "button")
        return {
          ...A.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function k(O) {
      c.value && i("update:pressed", !n.pressed), i("click", O);
    }
    return (O, F) => (y(), Be(Iu(o.value), Vt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${u.value}`]: u.value,
          "button-vue--tertiary": h.value,
          "button-vue--wide": e.wide,
          [`button-vue--${f.value}`]: f.value !== "center",
          "button-vue--reverse": b.value,
          "button-vue--legacy": g(K_),
          "button-vue--legacy34": g(Xi)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: k }), {
      default: Le(() => [
        l("span", q_, [
          l("span", Y_, [
            Me(O.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", X_, [
            Me(O.$slots, "default", {}, () => [
              Te(p(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Wn = /* @__PURE__ */ et(Z_, [["__scopeId", "data-v-47ce59a3"]]), J_ = ["aria-hidden", "aria-label"], Q_ = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, e1 = ["d"], t1 = ["innerHTML"], n1 = /* @__PURE__ */ Lt({
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
    Gb((a) => ({
      fb515064: n.value
    }));
    const t = e, n = H(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = H(() => {
      if (!t.svg || t.path)
        return;
      const a = Vp.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (y(), w("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ae(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (y(), w("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, t1)) : (y(), w("svg", Q_, [
        l("path", { d: e.path }, null, 8, e1)
      ]))
    ], 10, J_));
  }
}), Pl = /* @__PURE__ */ et(n1, [["__scopeId", "data-v-aaedb1c3"]]);
a1();
function i1(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), fi("csrf-token-update", { token: e, _internal: !0 }));
}
function a1() {
  Xp("csrf-token-update", ({ token: e, _internal: t }) => {
    t || i1(e);
  });
}
Gp("public").persist().build();
let ja;
function jf(e, t) {
  return e ? e.getAttribute(t) : null;
}
function r1() {
  if (ja !== void 0)
    return ja;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = jf(e, "data-user");
  return t === null ? (ja = null, ja) : (ja = {
    uid: t,
    displayName: jf(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, ja);
}
var mt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(mt || {});
class o1 {
  context;
  constructor(t) {
    this.context = t || {};
  }
  formatMessage(t, n, i) {
    let a = "[" + mt[n].toUpperCase() + "] ";
    return i && i.app && (a += i.app + ": "), typeof t == "string" ? a + t : (a += `Unexpected ${t.name}`, t.message && (a += ` "${t.message}"`), n === mt.Debug && t.stack && (a += `

Stack trace:
${t.stack}`), a);
  }
  log(t, n, i) {
    if (!(typeof this.context?.level == "number" && t < this.context?.level))
      switch (typeof n == "object" && i?.error === void 0 && (i.error = n), t) {
        case mt.Debug:
          console.debug(this.formatMessage(n, mt.Debug, i), i);
          break;
        case mt.Info:
          console.info(this.formatMessage(n, mt.Info, i), i);
          break;
        case mt.Warn:
          console.warn(this.formatMessage(n, mt.Warn, i), i);
          break;
        case mt.Error:
          console.error(this.formatMessage(n, mt.Error, i), i);
          break;
        case mt.Fatal:
        default:
          console.error(this.formatMessage(n, mt.Fatal, i), i);
          break;
      }
  }
  debug(t, n) {
    this.log(mt.Debug, t, Object.assign({}, this.context, n));
  }
  info(t, n) {
    this.log(mt.Info, t, Object.assign({}, this.context, n));
  }
  warn(t, n) {
    this.log(mt.Warn, t, Object.assign({}, this.context, n));
  }
  error(t, n) {
    this.log(mt.Error, t, Object.assign({}, this.context, n));
  }
  fatal(t, n) {
    this.log(mt.Fatal, t, Object.assign({}, this.context, n));
  }
}
function s1(e) {
  return new o1(e);
}
class l1 {
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
    const t = r1();
    return t !== null && (this.context.uid = t.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const t = this, n = () => {
      document.readyState === "complete" || document.readyState === "interactive" ? (t.context.level = window._oc_config?.loglevel ?? mt.Warn, window._oc_debug && (t.context.level = mt.Debug), document.removeEventListener("readystatechange", n)) : document.addEventListener("readystatechange", n);
    };
    return n(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function c1() {
  return new l1(s1);
}
const ka = c1().detectUser().setApp("@nextcloud/vue").build();
function u1(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let av = "missing-app-name";
try {
  av = "library";
} catch {
  ka.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const d1 = av;
let f1 = "";
try {
  f1 = "0.1.0-alpha.171";
} catch {
  ka.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function rv() {
  return Ut("appName", d1);
}
const h1 = u1(() => {
  const e = zu("core", "apps", []), t = rv();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), au = n_();
Yi(U_);
const p1 = /* @__PURE__ */ Lt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = No();
    qe(t, n), qi(() => {
      n(t.value);
    }), ir(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && fi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (y(), Be(g(Wn), {
      "aria-label": g(Tt)("Go back to the list"),
      class: Ae(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(Tt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Le(() => [
        ye(g(Pl), {
          directional: "",
          path: g(A_)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), v1 = /* @__PURE__ */ et(p1, [["__scopeId", "data-v-a28923a1"]]), Hf = Gp("nextcloud").persist().build(), g1 = r_().theming?.name ?? "Nextcloud", m1 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: v1,
    Pane: E_,
    Splitpanes: T_
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
      appName: rv(),
      localizedAppName: h1(),
      isMobile: No(),
      isRtl: au
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
        return ka.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(g1), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = C_(this.$el, {
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
      Hf.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ka.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Hf.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return ka.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, b1 = {
  key: 0,
  class: "hidden-visually"
}, y1 = { class: "app-content-wrapper__list" }, _1 = {
  key: 1,
  class: "app-content-wrapper"
};
function w1(e, t, n, i, a, r) {
  const o = je("NcAppContentDetailsToggle"), c = je("Pane"), u = je("Splitpanes");
  return y(), w("main", {
    id: "app-content-vue",
    class: Ae(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (y(), w("h1", b1, p(n.pageHeading), 1)) : B("", !0),
    e.$slots.list ? (y(), w(ae, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (y(), w("div", {
        key: 0,
        class: Ae(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (y(), Be(o, {
          key: 0,
          onClick: Pe(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : B("", !0),
        Re(l("div", y1, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Ja, !n.showDetails]
        ]),
        n.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : B("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (y(), w("div", _1, [
        ye(u, {
          horizontal: n.layout === "horizontal-split",
          class: Ae(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Le(() => [
            ye(c, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Le(() => [
                Me(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            ye(c, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Le(() => [
                Me(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : B("", !0)
    ], 64)) : B("", !0),
    e.$slots.list ? B("", !0) : Me(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const S1 = /* @__PURE__ */ et(m1, [["render", w1], ["__scopeId", "data-v-51427d61"]]);
var ov = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], Ps = /* @__PURE__ */ ov.join(","), sv = typeof Element > "u", Oa = sv ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, $s = !sv && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Fs = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", o = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Fs(t.parentNode));
  return o;
}, C1 = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, lv = function(t, n, i) {
  if (Fs(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(Ps));
  return n && Oa.call(t, Ps) && a.unshift(t), a = a.filter(i), a;
}, Ds = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Fs(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), u = c.length ? c : o.children, h = Ds(u, !0, i);
        i.flatten ? a.push.apply(a, h) : a.push({
          scopeParent: o,
          candidates: h
        });
      } else {
        var f = Oa.call(o, Ps);
        f && i.filter(o) && (n || !t.includes(o)) && a.push(o);
        var b = o.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(o), C = !Fs(b, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (b && C) {
          var A = Ds(b === !0 ? o.children : b.children, !0, i);
          i.flatten ? a.push.apply(a, A) : a.push({
            scopeParent: o,
            candidates: A
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, cv = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, wa = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || C1(t)) && !cv(t) ? 0 : t.tabIndex;
}, T1 = function(t, n) {
  var i = wa(t);
  return i < 0 && n && !cv(t) ? 0 : i;
}, E1 = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, uv = function(t) {
  return t.tagName === "INPUT";
}, A1 = function(t) {
  return uv(t) && t.type === "hidden";
}, k1 = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, x1 = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, O1 = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || $s(t), i = function(c) {
    return n.querySelectorAll('input[type="radio"][name="' + c + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = i(window.CSS.escape(t.name));
  else
    try {
      a = i(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var r = x1(a, t.form);
  return !r || r === t;
}, N1 = function(t) {
  return uv(t) && t.type === "radio";
}, L1 = function(t) {
  return N1(t) && !O1(t);
}, R1 = function(t) {
  var n, i = t && $s(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var o, c, u;
    for (r = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !r && a; ) {
      var h, f, b;
      i = $s(a), a = (h = i) === null || h === void 0 ? void 0 : h.host, r = !!((f = a) !== null && f !== void 0 && (b = f.ownerDocument) !== null && b !== void 0 && b.contains(a));
    }
  }
  return r;
}, Vf = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, I1 = function(t, n) {
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
  var o = getComputedStyle(t), c = o.visibility;
  if (c === "hidden" || c === "collapse")
    return !0;
  var u = Oa.call(t, "details>summary:first-of-type"), h = u ? t.parentElement : t;
  if (Oa.call(h, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var f = t; t; ) {
        var b = t.parentElement, C = $s(t);
        if (b && !b.shadowRoot && a(b) === !0)
          return Vf(t);
        t.assignedSlot ? t = t.assignedSlot : !b && C !== t.ownerDocument ? t = C.host : t = b;
      }
      t = f;
    }
    if (R1(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Vf(t);
  return !1;
}, P1 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return Oa.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, Ms = function(t, n) {
  return !(n.disabled || A1(n) || I1(n, t) || // For a details element with a summary, the summary element gets the focus
  k1(n) || P1(n));
}, ru = function(t, n) {
  return !(L1(n) || wa(n) < 0 || !Ms(t, n));
}, $1 = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, dv = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, c = o ? a.scopeParent : a, u = T1(c, o), h = o ? dv(a.candidates) : c;
    u === 0 ? o ? n.push.apply(n, h) : n.push(c) : i.push({
      documentOrder: r,
      tabIndex: u,
      item: a,
      isScope: o,
      content: h
    });
  }), i.sort(E1).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, F1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Ds([t], n.includeContainer, {
    filter: ru.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: $1
  }) : i = lv(t, n.includeContainer, ru.bind(null, n)), dv(i);
}, D1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Ds([t], n.includeContainer, {
    filter: Ms.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = lv(t, n.includeContainer, Ms.bind(null, n)), i;
}, Ha = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Oa.call(t, Ps) === !1 ? !1 : ru(n, t);
}, M1 = /* @__PURE__ */ ov.concat("iframe:not([inert]):not([inert] *)").join(","), Ic = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Oa.call(t, M1) === !1 ? !1 : Ms(n, t);
};
function ou(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function z1(e) {
  if (Array.isArray(e)) return ou(e);
}
function Kf(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = fv(e)) || t) {
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
        e: function(u) {
          throw u;
        },
        f: a
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var r, o = !0, c = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var u = n.next();
      return o = u.done, u;
    },
    e: function(u) {
      c = !0, r = u;
    },
    f: function() {
      try {
        o || n.return == null || n.return();
      } finally {
        if (c) throw r;
      }
    }
  };
}
function U1(e, t, n) {
  return (t = K1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function B1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function j1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function Wf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gf(Object(n), !0).forEach(function(i) {
      U1(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gf(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function H1(e) {
  return z1(e) || B1(e) || fv(e) || j1();
}
function V1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function K1(e) {
  var t = V1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fv(e, t) {
  if (e) {
    if (typeof e == "string") return ou(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ou(e, t) : void 0;
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
}, G1 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, W1 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Yr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, q1 = function(t) {
  return Yr(t) && !t.shiftKey;
}, Y1 = function(t) {
  return Yr(t) && t.shiftKey;
}, qf = function(t) {
  return setTimeout(t, 0);
}, Fr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, rs = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, X1 = [], Hu = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || X1, r = Wf({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: q1,
    isKeyBackward: Y1
  }, n), o = {
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
  }, c, u = function($, z, q) {
    return $ && $[z] !== void 0 ? $[z] : r[q || z];
  }, h = function($, z) {
    var q = typeof z?.composedPath == "function" ? z.composedPath() : void 0;
    return o.containerGroups.findIndex(function(le) {
      var ne = le.container, ve = le.tabbableNodes;
      return ne.contains($) || q?.includes(ne) || ve.find(function(de) {
        return de === $;
      });
    });
  }, f = function($) {
    var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = z.hasFallback, le = q === void 0 ? !1 : q, ne = z.params, ve = ne === void 0 ? [] : ne, de = r[$];
    if (typeof de == "function" && (de = de.apply(void 0, H1(ve))), de === !0 && (de = void 0), !de) {
      if (de === void 0 || de === !1)
        return de;
      throw new Error("`".concat($, "` was specified but was not a node, or did not return a node"));
    }
    var be = de;
    if (typeof de == "string") {
      try {
        be = i.querySelector(de);
      } catch (_e) {
        throw new Error("`".concat($, '` appears to be an invalid selector; error="').concat(_e.message, '"'));
      }
      if (!be && !le)
        throw new Error("`".concat($, "` as selector refers to no known node"));
    }
    return be;
  }, b = function($) {
    var z = $.activeElement;
    return z ? z.shadowRoot && z.shadowRoot.activeElement !== null ? b(z.shadowRoot) : z : null;
  }, C = function() {
    var $ = f("initialFocus", {
      hasFallback: !0
    });
    if ($ === !1)
      return !1;
    if ($ === void 0 || $ && !Ic($, r.tabbableOptions)) {
      var z = b(i);
      if (h(z) >= 0)
        $ = z;
      else {
        var q = o.tabbableGroups[0], le = q && q.firstTabbableNode;
        $ = le || f("fallbackFocus");
      }
    } else $ === null && ($ = f("fallbackFocus"));
    if (!$)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return $;
  }, A = function() {
    if (o.containerGroups = o.containers.map(function($) {
      var z = F1($, r.tabbableOptions), q = D1($, r.tabbableOptions), le = z.length > 0 ? z[0] : void 0, ne = z.length > 0 ? z[z.length - 1] : void 0, ve = q.find(function(_e) {
        return Ha(_e);
      }), de = q.slice().reverse().find(function(_e) {
        return Ha(_e);
      }), be = !!z.find(function(_e) {
        return wa(_e) > 0;
      });
      return {
        container: $,
        tabbableNodes: z,
        focusableNodes: q,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: be,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: le,
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
        firstDomTabbableNode: ve,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: de,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Ve) {
          var xe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ct = z.indexOf(Ve);
          return ct < 0 ? xe ? q.slice(q.indexOf(Ve) + 1).find(function(pt) {
            return Ha(pt);
          }) : q.slice(0, q.indexOf(Ve)).reverse().find(function(pt) {
            return Ha(pt);
          }) : z[ct + (xe ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function($) {
      return $.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !f("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function($) {
      return $.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, N = function($) {
    if ($ !== !1 && $ !== b(document)) {
      if (!$ || !$.focus) {
        N(C());
        return;
      }
      $.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = $, G1($) && $.select();
    }
  }, k = function($) {
    var z = f("setReturnFocus", {
      params: [$]
    });
    return z || (z === !1 ? !1 : $);
  }, O = function($) {
    var z = $.target, q = $.event, le = $.isBackward, ne = le === void 0 ? !1 : le;
    z = z || rs(q), A();
    var ve = null;
    if (o.tabbableGroups.length > 0) {
      var de = h(z, q), be = de >= 0 ? o.containerGroups[de] : void 0;
      if (de < 0)
        ne ? ve = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : ve = o.tabbableGroups[0].firstTabbableNode;
      else if (ne) {
        var _e = o.tabbableGroups.findIndex(function(ut) {
          var at = ut.firstTabbableNode;
          return z === at;
        });
        if (_e < 0 && (be.container === z || Ic(z, r.tabbableOptions) && !Ha(z, r.tabbableOptions) && !be.nextTabbableNode(z, !1)) && (_e = de), _e >= 0) {
          var Ve = _e === 0 ? o.tabbableGroups.length - 1 : _e - 1, xe = o.tabbableGroups[Ve];
          ve = wa(z) >= 0 ? xe.lastTabbableNode : xe.lastDomTabbableNode;
        } else Yr(q) || (ve = be.nextTabbableNode(z, !1));
      } else {
        var ct = o.tabbableGroups.findIndex(function(ut) {
          var at = ut.lastTabbableNode;
          return z === at;
        });
        if (ct < 0 && (be.container === z || Ic(z, r.tabbableOptions) && !Ha(z, r.tabbableOptions) && !be.nextTabbableNode(z)) && (ct = de), ct >= 0) {
          var pt = ct === o.tabbableGroups.length - 1 ? 0 : ct + 1, it = o.tabbableGroups[pt];
          ve = wa(z) >= 0 ? it.firstTabbableNode : it.firstDomTabbableNode;
        } else Yr(q) || (ve = be.nextTabbableNode(z));
      }
    } else
      ve = f("fallbackFocus");
    return ve;
  }, F = function($) {
    var z = rs($);
    if (!(h(z, $) >= 0)) {
      if (Fr(r.clickOutsideDeactivates, $)) {
        c.deactivate({
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
      Fr(r.allowOutsideClick, $) || $.preventDefault();
    }
  }, D = function($) {
    var z = rs($), q = h(z, $) >= 0;
    if (q || z instanceof Document)
      q && (o.mostRecentlyFocusedNode = z);
    else {
      $.stopImmediatePropagation();
      var le, ne = !0;
      if (o.mostRecentlyFocusedNode)
        if (wa(o.mostRecentlyFocusedNode) > 0) {
          var ve = h(o.mostRecentlyFocusedNode), de = o.containerGroups[ve].tabbableNodes;
          if (de.length > 0) {
            var be = de.findIndex(function(_e) {
              return _e === o.mostRecentlyFocusedNode;
            });
            be >= 0 && (r.isKeyForward(o.recentNavEvent) ? be + 1 < de.length && (le = de[be + 1], ne = !1) : be - 1 >= 0 && (le = de[be - 1], ne = !1));
          }
        } else
          o.containerGroups.some(function(_e) {
            return _e.tabbableNodes.some(function(Ve) {
              return wa(Ve) > 0;
            });
          }) || (ne = !1);
      else
        ne = !1;
      ne && (le = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), N(le || o.mostRecentlyFocusedNode || C());
    }
    o.recentNavEvent = void 0;
  }, M = function($) {
    var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = $;
    var q = O({
      event: $,
      isBackward: z
    });
    q && (Yr($) && $.preventDefault(), N(q));
  }, E = function($) {
    (r.isKeyForward($) || r.isKeyBackward($)) && M($, r.isKeyBackward($));
  }, re = function($) {
    W1($) && Fr(r.escapeDeactivates, $) !== !1 && ($.preventDefault(), c.deactivate());
  }, ue = function($) {
    var z = rs($);
    h(z, $) >= 0 || Fr(r.clickOutsideDeactivates, $) || Fr(r.allowOutsideClick, $) || ($.preventDefault(), $.stopImmediatePropagation());
  }, X = function() {
    if (o.active) {
      li.activateTrap(a, c);
      var $;
      return r.delayInitialFocus ? $ = new Promise(function(z) {
        o.delayInitialFocusTimer = qf(function() {
          N(C()), z();
        });
      }) : N(C()), i.addEventListener("focusin", D, !0), i.addEventListener("mousedown", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", F, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", ue, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", E, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", re), $;
    }
  }, fe = function($) {
    o.active && !o.paused && c._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var z = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set(), le = Kf($), ne;
    try {
      for (le.s(); !(ne = le.n()).done; ) {
        var ve = ne.value;
        z.add(ve);
        for (var de = typeof ShadowRoot < "u" && ve.getRootNode() instanceof ShadowRoot, be = ve; be; ) {
          z.add(be);
          var _e = be.parentElement, Ve = [];
          _e ? Ve = _e.children : !_e && de && (Ve = be.getRootNode().children, _e = be.getRootNode().host, de = typeof ShadowRoot < "u" && _e.getRootNode() instanceof ShadowRoot);
          var xe = Kf(Ve), ct;
          try {
            for (xe.s(); !(ct = xe.n()).done; ) {
              var pt = ct.value;
              q.add(pt);
            }
          } catch (it) {
            xe.e(it);
          } finally {
            xe.f();
          }
          be = _e;
        }
      }
    } catch (it) {
      le.e(it);
    } finally {
      le.f();
    }
    z.forEach(function(it) {
      q.delete(it);
    }), o.adjacentElements = q;
  }, Y = function() {
    if (o.active)
      return i.removeEventListener("focusin", D, !0), i.removeEventListener("mousedown", F, !0), i.removeEventListener("touchstart", F, !0), i.removeEventListener("click", ue, !0), i.removeEventListener("keydown", E, !0), i.removeEventListener("keydown", re), c;
  }, se = function($) {
    var z = o.mostRecentlyFocusedNode;
    if (z) {
      var q = $.some(function(ne) {
        var ve = Array.from(ne.removedNodes);
        return ve.some(function(de) {
          return de === z || typeof de.contains == "function" && de.contains(z);
        });
      });
      if (q && o.containers.some(function(ne) {
        return ne?.isConnected;
      })) {
        A();
        var le = C();
        N(le);
      }
    }
  }, ge = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(se) : void 0, J = function() {
    ge && (ge.disconnect(), o.active && !o.paused && o.containers.map(function($) {
      ge.observe($, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return c = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function($) {
      if (o.active)
        return this;
      var z = u($, "onActivate"), q = u($, "onPostActivate"), le = u($, "checkCanFocusTrap"), ne = li.getActiveTrap(a), ve = !1;
      if (ne && !ne.paused) {
        var de;
        (de = ne._setSubtreeIsolation) === null || de === void 0 || de.call(ne, !1), ve = !0;
      }
      try {
        le || A(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = b(i), z?.({
          trap: c
        });
        var be = function() {
          le && A();
          var xe = function() {
            c._setSubtreeIsolation(!0), J(), q?.({
              trap: c
            });
          }, ct = X();
          ct ? ct.then(xe) : xe();
        };
        if (le)
          return le(o.containers.concat()).then(be, be), this;
        be();
      } catch (Ve) {
        if (ne === li.getActiveTrap(a) && ve) {
          var _e;
          (_e = ne._setSubtreeIsolation) === null || _e === void 0 || _e.call(ne, !0);
        }
        throw Ve;
      }
      return this;
    },
    deactivate: function($) {
      if (!o.active)
        return this;
      var z = Wf({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, $);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || c._setSubtreeIsolation(!1), o.alreadySilent.clear(), Y(), o.active = !1, o.paused = !1, J(), li.deactivateTrap(a, c);
      var q = u(z, "onDeactivate"), le = u(z, "onPostDeactivate"), ne = u(z, "checkCanReturnFocus"), ve = u(z, "delayReturnFocus"), de = u(z, "returnFocus", "returnFocusOnDeactivate");
      q?.({
        trap: c
      });
      var be = function() {
        de && N(k(o.nodeFocusedBeforeActivation)), le?.({
          trap: c
        });
      }, _e = function() {
        ve && de ? qf(be) : be();
      };
      return de && ne ? (ne(k(o.nodeFocusedBeforeActivation)).then(_e, _e), this) : (_e(), this);
    },
    pause: function($) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, $)) : this;
    },
    unpause: function($) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, $)) : this;
    },
    updateContainerElements: function($) {
      var z = [].concat($).filter(Boolean);
      return o.containers = z.map(function(q) {
        return typeof q == "string" ? i.querySelector(q) : q;
      }), r.isolateSubtrees && fe(o.containers), o.active && (A(), o.paused || c._setSubtreeIsolation(!0)), J(), this;
    }
  }, Object.defineProperties(c, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function($, z) {
        if (o.paused === $)
          return this;
        if (o.paused = $, $) {
          var q = u(z, "onPause"), le = u(z, "onPostPause");
          q?.({
            trap: c
          }), Y(), c._setSubtreeIsolation(!1), J(), le?.({
            trap: c
          });
        } else {
          var ne = u(z, "onUnpause"), ve = u(z, "onPostUnpause");
          ne?.({
            trap: c
          });
          var de = function() {
            A();
            var _e = function() {
              c._setSubtreeIsolation(!0), J(), ve?.({
                trap: c
              });
            }, Ve = X();
            Ve ? Ve.then(_e) : _e();
          };
          de();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function($) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(z) {
          var q;
          $ ? r.isolateSubtrees === "aria-hidden" ? ((z.ariaHidden === "true" || ((q = z.getAttribute("aria-hidden")) === null || q === void 0 ? void 0 : q.toLowerCase()) === "true") && o.alreadySilent.add(z), z.setAttribute("aria-hidden", "true")) : ((z.inert || z.hasAttribute("inert")) && o.alreadySilent.add(z), z.setAttribute("inert", !0)) : o.alreadySilent.has(z) || (r.isolateSubtrees === "aria-hidden" ? z.removeAttribute("aria-hidden") : z.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
const hv = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), Z1 = /* @__PURE__ */ Lt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [hv]: {
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
function J1(e, t, n, i, a, r) {
  return y(), w("ul", {
    ref: "list",
    class: Ae(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    l("div", {
      class: Ae(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: hn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Me(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const pv = /* @__PURE__ */ et(Z1, [["render", J1], ["__scopeId", "data-v-3e73e246"]]);
function bo() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function Q1() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...bo()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === bo().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const vv = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), gv = /* @__PURE__ */ Symbol.for("NcContent:selector");
Yi(D_);
const e0 = { class: "app-navigation-toggle-wrapper" }, t0 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = gp(e, "open"), n = H(() => t.value ? Tt("Close navigation") : Tt("Open navigation"));
    return (i, a) => (y(), w("div", e0, [
      ye(g(Wn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Le(() => [
          ye(Pl, {
            path: g(O_),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), n0 = /* @__PURE__ */ et(t0, [["__scopeId", "data-v-e8177cc7"]]), i0 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], a0 = { class: "app-navigation__search" }, r0 = /* @__PURE__ */ Lt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = Ut(
      vv,
      () => Pb(),
      !1
    ), a = Um("appNavigationContainer"), r = No(), o = /* @__PURE__ */ we(!r.value), c = H(() => r.value && o.value);
    Lm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), qe(r, () => {
      o.value = !r.value;
    }), qe(c, () => {
      f();
    }), qi(() => {
      i(!0), Xp("toggle-navigation", h), fi("navigation-toggled", {
        open: o.value
      }), n = Hu(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), u(!1)), !1),
        fallbackFocus: a.value,
        trapStack: bo(),
        escapeDeactivates: !1
      }), f();
    }), ko(() => {
      i(!1), m_("toggle-navigation", h), n.deactivate();
    });
    function u(C) {
      if (o.value === C) {
        fi("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = C === void 0 ? !o.value : C;
      const A = getComputedStyle(document.body), N = parseInt(A.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        fi("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * N);
    }
    function h({ open: C }) {
      return u(C);
    }
    function f() {
      c.value ? n.activate() : n.deactivate();
    }
    function b() {
      r.value && u(!1);
    }
    return (C, A) => (y(), w("div", {
      ref: "appNavigationContainer",
      class: Ae(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": g(Xi)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: Ze(b, ["esc"])
      }, [
        l("div", a0, [
          Me(C.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: Ae(["app-navigation__body", { "app-navigation__body--no-list": !C.$slots.list }])
        }, [
          Me(C.$slots, "default", {}, void 0, !0)
        ], 2),
        C.$slots.list ? (y(), Be(pv, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Le(() => [
            Me(C.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : B("", !0),
        Me(C.$slots, "footer", {}, void 0, !0)
      ], 40, i0),
      ye(n0, {
        open: o.value,
        "onUpdate:open": u
      }, null, 8, ["open"])
    ], 2));
  }
}), o0 = /* @__PURE__ */ et(r0, [["__scopeId", "data-v-37908cd4"]]), s0 = {
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
}, l0 = ["aria-hidden", "aria-label"], c0 = ["fill", "width", "height"], u0 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, d0 = { key: 0 };
function f0(e, t, n, i, a, r) {
  return y(), w("span", Vt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), w("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", u0, [
        n.title ? (y(), w("title", d0, p(n.title), 1)) : B("", !0)
      ])
    ], 8, c0))
  ], 16, l0);
}
const h0 = /* @__PURE__ */ et(s0, [["render", f0]]), p0 = {
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
}, v0 = ["aria-hidden", "aria-label"], g0 = ["fill", "width", "height"], m0 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, b0 = { key: 0 };
function y0(e, t, n, i, a, r) {
  return y(), w("span", Vt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), w("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", m0, [
        n.title ? (y(), w("title", b0, p(n.title), 1)) : B("", !0)
      ])
    ], 8, g0))
  ], 16, v0);
}
const _0 = /* @__PURE__ */ et(p0, [["render", y0]]), w0 = {
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
}, S0 = ["aria-hidden", "aria-label"], C0 = ["fill", "width", "height"], T0 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, E0 = { key: 0 };
function A0(e, t, n, i, a, r) {
  return y(), w("span", Vt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), w("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", T0, [
        n.title ? (y(), w("title", E0, p(n.title), 1)) : B("", !0)
      ])
    ], 8, C0))
  ], 16, S0);
}
const mv = /* @__PURE__ */ et(w0, [["render", A0]]), k0 = {
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
}, x0 = ["aria-hidden", "aria-label"], O0 = ["fill", "width", "height"], N0 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, L0 = { key: 0 };
function R0(e, t, n, i, a, r) {
  return y(), w("span", Vt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), w("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", N0, [
        n.title ? (y(), w("title", L0, p(n.title), 1)) : B("", !0)
      ])
    ], 8, O0))
  ], 16, x0);
}
const bv = /* @__PURE__ */ et(k0, [["render", R0]]);
Yi($_);
const I0 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: mv,
    IconClose: bv,
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
    return { isLegacy34: Xi };
  },
  data() {
    return {
      labelConfirm: Tt("Confirm changes"),
      labelCancel: Tt("Cancel changes")
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
}, P0 = ["placeholder"];
function $0(e, t, n, i, a, r) {
  const o = je("IconArrowRight"), c = je("NcButton"), u = je("IconClose");
  return y(), w("div", {
    class: Ae(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = Pe((...h) => r.confirm && r.confirm(...h), ["prevent"])),
      onKeydown: t[2] || (t[2] = Ze(Pe((...h) => r.cancel && r.cancel(...h), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Pe(() => {
      }, ["stop", "prevent"]))
    }, [
      Re(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (h) => r.valueModel = h),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, P0), [
        [ft, r.valueModel]
      ]),
      ye(c, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: Pe(r.confirm, ["stop", "prevent"])
      }, {
        icon: Le(() => [
          ye(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      ye(c, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: Pe(r.cancel, ["stop", "prevent"])
      }, {
        icon: Le(() => [
          ye(u, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const F0 = /* @__PURE__ */ et(I0, [["render", $0], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function $l() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Vu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), yv = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), D0 = {
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
}, _v = {
  mixins: [D0],
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
      from: yv
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
}, M0 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: Pl
  },
  mixins: [_v],
  inject: {
    isInSemanticMenu: {
      from: Vu,
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
      mdiCheck: k_,
      mdiChevronRight: x_
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
}, z0 = ["role"], U0 = ["aria-label", "disabled", "title", "type"], B0 = { class: "action-button__longtext-wrapper" }, j0 = {
  key: 0,
  class: "action-button__name"
}, H0 = ["textContent"], V0 = {
  key: 2,
  class: "action-button__text"
}, K0 = ["textContent"], G0 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function W0(e, t, n, i, a, r) {
  const o = je("NcIconSvgWrapper");
  return y(), w("li", {
    class: Ae(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", Vt({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: n.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...c) => r.handleClick && r.handleClick(...c))
    }), [
      Me(e.$slots, "icon", {}, () => [
        l("span", {
          class: Ae([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: hn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", B0, [
        e.name ? (y(), w("strong", j0, p(e.name), 1)) : B("", !0),
        e.isLongText ? (y(), w("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: p(e.text)
        }, null, 8, H0)) : (y(), w("span", V0, p(e.text), 1)),
        n.description ? (y(), w("span", {
          key: 3,
          class: "action-button__description",
          textContent: p(n.description)
        }, null, 8, K0)) : B("", !0)
      ]),
      n.isMenu ? (y(), Be(o, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (y(), Be(o, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (y(), w("span", G0)) : B("", !0),
      B("", !0)
    ], 16, U0)
  ], 10, z0);
}
const q0 = /* @__PURE__ */ et(M0, [["render", W0], ["__scopeId", "data-v-6c2daf4e"]]);
function Y0(e, t = {}) {
  const n = Q1();
  qe(e, () => {
    ui(t.disabled) || (ui(e) ? n.pause() : n.unpause());
  }), ko(() => {
    n.unpause();
  });
}
const X0 = ["top", "right", "bottom", "left"], Yf = ["start", "end"], Xf = /* @__PURE__ */ X0.reduce((e, t) => e.concat(t, t + "-" + Yf[0], t + "-" + Yf[1]), []), yo = Math.min, su = Math.max, Z0 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function wv(e, t, n) {
  return su(e, yo(t, n));
}
function La(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gi(e) {
  return e.split("-")[0];
}
function In(e) {
  return e.split("-")[1];
}
function Sv(e) {
  return e === "x" ? "y" : "x";
}
function Ku(e) {
  return e === "y" ? "height" : "width";
}
function ci(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Gu(e) {
  return Sv(ci(e));
}
function Cv(e, t, n) {
  n === void 0 && (n = !1);
  const i = In(e), a = Gu(e), r = Ku(a);
  let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Us(o)), [o, Us(o)];
}
function J0(e) {
  const t = Us(e);
  return [zs(e), t, zs(t)];
}
function zs(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Zf = ["left", "right"], Jf = ["right", "left"], Q0 = ["top", "bottom"], ew = ["bottom", "top"];
function tw(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Jf : Zf : t ? Zf : Jf;
    case "left":
    case "right":
      return t ? Q0 : ew;
    default:
      return [];
  }
}
function nw(e, t, n, i) {
  const a = In(e);
  let r = tw(gi(e), n === "start", i);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(zs)))), r;
}
function Us(e) {
  const t = gi(e);
  return Z0[t] + e.slice(t.length);
}
function iw(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Tv(e) {
  return typeof e != "number" ? iw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Xr(e) {
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
function Qf(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ci(t), o = Gu(t), c = Ku(o), u = gi(t), h = r === "y", f = i.x + i.width / 2 - a.width / 2, b = i.y + i.height / 2 - a.height / 2, C = i[c] / 2 - a[c] / 2;
  let A;
  switch (u) {
    case "top":
      A = {
        x: f,
        y: i.y - a.height
      };
      break;
    case "bottom":
      A = {
        x: f,
        y: i.y + i.height
      };
      break;
    case "right":
      A = {
        x: i.x + i.width,
        y: b
      };
      break;
    case "left":
      A = {
        x: i.x - a.width,
        y: b
      };
      break;
    default:
      A = {
        x: i.x,
        y: i.y
      };
  }
  const N = In(t);
  return N && (A[o] += C * (N === "end" ? 1 : -1) * (n && h ? -1 : 1)), A;
}
async function aw(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: i,
    y: a,
    platform: r,
    rects: o,
    elements: c,
    strategy: u
  } = e, {
    boundary: h = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: b = "floating",
    altBoundary: C = !1,
    padding: A = 0
  } = La(t, e), N = Tv(A), O = c[C ? b === "floating" ? "reference" : "floating" : b], F = Xr(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(O))) == null || n ? O : O.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
    boundary: h,
    rootBoundary: f,
    strategy: u
  })), D = b === "floating" ? {
    x: i,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, M = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating)), E = await (r.isElement == null ? void 0 : r.isElement(M)) && await (r.getScale == null ? void 0 : r.getScale(M)) || {
    x: 1,
    y: 1
  }, re = Xr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: D,
    offsetParent: M,
    strategy: u
  }) : D);
  return {
    top: (F.top - re.top + N.top) / E.y,
    bottom: (re.bottom - F.bottom + N.bottom) / E.y,
    left: (F.left - re.left + N.left) / E.x,
    right: (re.right - F.right + N.right) / E.x
  };
}
const rw = 50, ow = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = n, c = o.detectOverflow ? o : {
    ...o,
    detectOverflow: aw
  }, u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: f,
    y: b
  } = Qf(h, i, u), C = i, A = 0;
  const N = {};
  for (let k = 0; k < r.length; k++) {
    const O = r[k];
    if (!O)
      continue;
    const {
      name: F,
      fn: D
    } = O, {
      x: M,
      y: E,
      data: re,
      reset: ue
    } = await D({
      x: f,
      y: b,
      initialPlacement: i,
      placement: C,
      strategy: a,
      middlewareData: N,
      rects: h,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = M ?? f, b = E ?? b, N[F] = {
      ...N[F],
      ...re
    }, ue && A < rw && (A++, typeof ue == "object" && (ue.placement && (C = ue.placement), ue.rects && (h = ue.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ue.rects), {
      x: f,
      y: b
    } = Qf(h, C, u)), k = -1);
  }
  return {
    x: f,
    y: b,
    placement: C,
    strategy: a,
    middlewareData: N
  };
}, sw = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: i,
      placement: a,
      rects: r,
      platform: o,
      elements: c,
      middlewareData: u
    } = t, {
      element: h,
      padding: f = 0
    } = La(e, t) || {};
    if (h == null)
      return {};
    const b = Tv(f), C = {
      x: n,
      y: i
    }, A = Gu(a), N = Ku(A), k = await o.getDimensions(h), O = A === "y", F = O ? "top" : "left", D = O ? "bottom" : "right", M = O ? "clientHeight" : "clientWidth", E = r.reference[N] + r.reference[A] - C[A] - r.floating[N], re = C[A] - r.reference[A], ue = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(h));
    let X = ue ? ue[M] : 0;
    (!X || !await (o.isElement == null ? void 0 : o.isElement(ue))) && (X = c.floating[M] || r.floating[N]);
    const fe = E / 2 - re / 2, Y = X / 2 - k[N] / 2 - 1, se = yo(b[F], Y), ge = yo(b[D], Y), J = X - k[N] - ge, Q = X / 2 - k[N] / 2 + fe, $ = wv(se, Q, J), z = !u.arrow && In(a) != null && Q !== $ && r.reference[N] / 2 - (Q < se ? se : ge) - k[N] / 2 < 0, q = z ? Q < se ? Q - se : Q - J : 0;
    return {
      [A]: C[A] + q,
      data: {
        [A]: $,
        centerOffset: Q - $ - q,
        ...z && {
          alignmentOffset: q
        }
      },
      reset: z
    };
  }
});
function lw(e, t, n) {
  return (e ? [...n.filter((a) => In(a) === e), ...n.filter((a) => In(a) !== e)] : n.filter((a) => gi(a) === a)).filter((a) => e ? In(a) === e || (t ? zs(a) !== a : !1) : !0);
}
const cw = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, i, a;
      const {
        rects: r,
        middlewareData: o,
        placement: c,
        platform: u,
        elements: h
      } = t, {
        crossAxis: f = !1,
        alignment: b,
        allowedPlacements: C = Xf,
        autoAlignment: A = !0,
        ...N
      } = La(e, t), k = b !== void 0 || C === Xf ? lw(b || null, A, C) : C, O = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, F = k[O];
      if (F == null)
        return {};
      if (c !== F)
        return {
          reset: {
            placement: k[0]
          }
        };
      const D = await u.detectOverflow(t, N), M = Cv(F, r, await (u.isRTL == null ? void 0 : u.isRTL(h.floating))), E = [D[gi(F)], D[M[0]], D[M[1]]], re = [...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: F,
        overflows: E
      }], ue = k[O + 1];
      if (ue)
        return {
          data: {
            index: O + 1,
            overflows: re
          },
          reset: {
            placement: ue
          }
        };
      const X = re.map((se) => {
        const ge = In(se.placement);
        return [se.placement, ge && f ? (
          // Check along the mainAxis and main crossAxis side.
          se.overflows.slice(0, 2).reduce((J, Q) => J + Q, 0)
        ) : (
          // Check only the mainAxis.
          se.overflows[0]
        ), se.overflows];
      }).sort((se, ge) => se[1] - ge[1]), Y = ((a = X.filter((se) => se[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        In(se[0]) ? 2 : 3
      ).every((ge) => ge <= 0))[0]) == null ? void 0 : a[0]) || X[0][0];
      return Y !== c ? {
        data: {
          index: O + 1,
          overflows: re
        },
        reset: {
          placement: Y
        }
      } : {};
    }
  };
}, uw = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, i;
      const {
        placement: a,
        middlewareData: r,
        rects: o,
        initialPlacement: c,
        platform: u,
        elements: h
      } = t, {
        mainAxis: f = !0,
        crossAxis: b = !0,
        fallbackPlacements: C,
        fallbackStrategy: A = "bestFit",
        fallbackAxisSideDirection: N = "none",
        flipAlignment: k = !0,
        ...O
      } = La(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const F = gi(a), D = ci(c), M = gi(c) === c, E = await (u.isRTL == null ? void 0 : u.isRTL(h.floating)), re = C || (M || !k ? [Us(c)] : J0(c)), ue = N !== "none";
      !C && ue && re.push(...nw(c, k, N, E));
      const X = [c, ...re], fe = await u.detectOverflow(t, O), Y = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (f && Y.push(fe[F]), b) {
        const $ = Cv(a, o, E);
        Y.push(fe[$[0]], fe[$[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: Y
      }], !Y.every(($) => $ <= 0)) {
        var ge, J;
        const $ = (((ge = r.flip) == null ? void 0 : ge.index) || 0) + 1, z = X[$];
        if (z && (!(b === "alignment" ? D !== ci(z) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ne) => ci(ne.placement) === D ? ne.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: se
            },
            reset: {
              placement: z
            }
          };
        let q = (J = se.filter((le) => le.overflows[0] <= 0).sort((le, ne) => le.overflows[1] - ne.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!q)
          switch (A) {
            case "bestFit": {
              var Q;
              const le = (Q = se.filter((ne) => {
                if (ue) {
                  const ve = ci(ne.placement);
                  return ve === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ve === "y";
                }
                return !0;
              }).map((ne) => [ne.placement, ne.overflows.filter((ve) => ve > 0).reduce((ve, de) => ve + de, 0)]).sort((ne, ve) => ne[1] - ve[1])[0]) == null ? void 0 : Q[0];
              le && (q = le);
              break;
            }
            case "initialPlacement":
              q = c;
              break;
          }
        if (a !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
}, dw = /* @__PURE__ */ new Set(["left", "top"]);
async function fw(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = gi(n), c = In(n), u = ci(n) === "y", h = dw.has(o) ? -1 : 1, f = r && u ? -1 : 1, b = La(t, e);
  let {
    mainAxis: C,
    crossAxis: A,
    alignmentAxis: N
  } = typeof b == "number" ? {
    mainAxis: b,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: b.mainAxis || 0,
    crossAxis: b.crossAxis || 0,
    alignmentAxis: b.alignmentAxis
  };
  return c && typeof N == "number" && (A = c === "end" ? N * -1 : N), u ? {
    x: A * f,
    y: C * h
  } : {
    x: C * h,
    y: A * f
  };
}
const hw = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, i;
      const {
        x: a,
        y: r,
        placement: o,
        middlewareData: c
      } = t, u = await fw(t, e);
      return o === ((n = c.offset) == null ? void 0 : n.placement) && (i = c.arrow) != null && i.alignmentOffset ? {} : {
        x: a + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: o
        }
      };
    }
  };
}, pw = function(e) {
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
        mainAxis: o = !0,
        crossAxis: c = !1,
        limiter: u = {
          fn: (D) => {
            let {
              x: M,
              y: E
            } = D;
            return {
              x: M,
              y: E
            };
          }
        },
        ...h
      } = La(e, t), f = {
        x: n,
        y: i
      }, b = await r.detectOverflow(t, h), C = ci(a), A = Sv(C);
      let N = f[A], k = f[C];
      const O = (D, M) => wv(M + b[D === "y" ? "top" : "left"], M, M - b[D === "y" ? "bottom" : "right"]);
      o && (N = O(A, N)), c && (k = O(C, k));
      const F = u.fn({
        ...t,
        [A]: N,
        [C]: k
      });
      return {
        ...F,
        data: {
          x: F.x - n,
          y: F.y - i,
          enabled: {
            [A]: o,
            [C]: c
          }
        }
      };
    }
  };
}, vw = function(e) {
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
        apply: o = () => {
        },
        ...c
      } = La(e, t), u = await a.detectOverflow(t, c), h = gi(n), f = In(n), b = ci(n) === "y", {
        width: C,
        height: A
      } = i.floating;
      let N, k;
      h === "top" || h === "bottom" ? (N = h, k = f === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (k = h, N = f === "end" ? "top" : "bottom");
      const O = A - u.top - u.bottom, F = C - u.left - u.right, D = yo(A - u[N], O), M = yo(C - u[k], F), E = t.middlewareData.shift, re = !E;
      let ue = D, X = M;
      E != null && E.enabled.x && (X = F), E != null && E.enabled.y && (ue = O), re && !f && (b ? X = C - 2 * su(u.left, u.right) : ue = A - 2 * su(u.top, u.bottom)), await o({
        ...t,
        availableWidth: X,
        availableHeight: ue
      });
      const fe = await a.getDimensions(r.floating);
      return C !== fe.width || A !== fe.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function wn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qn(e) {
  return wn(e).getComputedStyle(e);
}
const eh = Math.min, Zr = Math.max, Bs = Math.round;
function Ev(e) {
  const t = qn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = Bs(n) !== a || Bs(i) !== r;
  return o && (n = a, i = r), { width: n, height: i, fallback: o };
}
function Wi(e) {
  return kv(e) ? (e.nodeName || "").toLowerCase() : "";
}
let os;
function Av() {
  if (os) return os;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (os = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), os) : navigator.userAgent;
}
function Yn(e) {
  return e instanceof wn(e).HTMLElement;
}
function ji(e) {
  return e instanceof wn(e).Element;
}
function kv(e) {
  return e instanceof wn(e).Node;
}
function th(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof wn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Fl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = qn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function gw(e) {
  return ["table", "td", "th"].includes(Wi(e));
}
function lu(e) {
  const t = /firefox/i.test(Av()), n = qn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function xv() {
  return !/^((?!chrome|android).)*safari/i.test(Av());
}
function Wu(e) {
  return ["html", "body", "#document"].includes(Wi(e));
}
function Ov(e) {
  return ji(e) ? e : e.contextElement;
}
const Nv = { x: 1, y: 1 };
function tr(e) {
  const t = Ov(e);
  if (!Yn(t)) return Nv;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Ev(t);
  let o = (r ? Bs(n.width) : n.width) / i, c = (r ? Bs(n.height) : n.height) / a;
  return o && Number.isFinite(o) || (o = 1), c && Number.isFinite(c) || (c = 1), { x: o, y: c };
}
function _o(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), c = Ov(e);
  let u = Nv;
  t && (i ? ji(i) && (u = tr(i)) : u = tr(e));
  const h = c ? wn(c) : window, f = !xv() && n;
  let b = (o.left + (f && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, C = (o.top + (f && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / u.y, A = o.width / u.x, N = o.height / u.y;
  if (c) {
    const k = wn(c), O = i && ji(i) ? wn(i) : i;
    let F = k.frameElement;
    for (; F && i && O !== k; ) {
      const D = tr(F), M = F.getBoundingClientRect(), E = getComputedStyle(F);
      M.x += (F.clientLeft + parseFloat(E.paddingLeft)) * D.x, M.y += (F.clientTop + parseFloat(E.paddingTop)) * D.y, b *= D.x, C *= D.y, A *= D.x, N *= D.y, b += M.x, C += M.y, F = wn(F).frameElement;
    }
  }
  return { width: A, height: N, top: C, right: b + A, bottom: C + N, left: b, x: b, y: C };
}
function Hi(e) {
  return ((kv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Dl(e) {
  return ji(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Lv(e) {
  return _o(Hi(e)).left + Dl(e).scrollLeft;
}
function wo(e) {
  if (Wi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || th(e) && e.host || Hi(e);
  return th(t) ? t.host : t;
}
function Rv(e) {
  const t = wo(e);
  return Wu(t) ? t.ownerDocument.body : Yn(t) && Fl(t) ? t : Rv(t);
}
function js(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = Rv(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = wn(i);
  return a ? t.concat(r, r.visualViewport || [], Fl(i) ? i : []) : t.concat(i, js(i));
}
function nh(e, t, n) {
  return t === "viewport" ? Xr((function(i, a) {
    const r = wn(i), o = Hi(i), c = r.visualViewport;
    let u = o.clientWidth, h = o.clientHeight, f = 0, b = 0;
    if (c) {
      u = c.width, h = c.height;
      const C = xv();
      (C || !C && a === "fixed") && (f = c.offsetLeft, b = c.offsetTop);
    }
    return { width: u, height: h, x: f, y: b };
  })(e, n)) : ji(t) ? Xr((function(i, a) {
    const r = _o(i, !0, a === "fixed"), o = r.top + i.clientTop, c = r.left + i.clientLeft, u = Yn(i) ? tr(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * u.x, height: i.clientHeight * u.y, x: c * u.x, y: o * u.y };
  })(t, n)) : Xr((function(i) {
    const a = Hi(i), r = Dl(i), o = i.ownerDocument.body, c = Zr(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), u = Zr(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let h = -r.scrollLeft + Lv(i);
    const f = -r.scrollTop;
    return qn(o).direction === "rtl" && (h += Zr(a.clientWidth, o.clientWidth) - c), { width: c, height: u, x: h, y: f };
  })(Hi(e)));
}
function ih(e) {
  return Yn(e) && qn(e).position !== "fixed" ? e.offsetParent : null;
}
function ah(e) {
  const t = wn(e);
  let n = ih(e);
  for (; n && gw(n) && qn(n).position === "static"; ) n = ih(n);
  return n && (Wi(n) === "html" || Wi(n) === "body" && qn(n).position === "static" && !lu(n)) ? t : n || (function(i) {
    let a = wo(i);
    for (; Yn(a) && !Wu(a); ) {
      if (lu(a)) return a;
      a = wo(a);
    }
    return null;
  })(e) || t;
}
function mw(e, t, n) {
  const i = Yn(t), a = Hi(t), r = _o(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Wi(t) !== "body" || Fl(a)) && (o = Dl(t)), Yn(t)) {
    const u = _o(t, !0);
    c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
  } else a && (c.x = Lv(a));
  return { x: r.left + o.scrollLeft - c.x, y: r.top + o.scrollTop - c.y, width: r.width, height: r.height };
}
const bw = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(h, f) {
    const b = f.get(h);
    if (b) return b;
    let C = js(h).filter(((O) => ji(O) && Wi(O) !== "body")), A = null;
    const N = qn(h).position === "fixed";
    let k = N ? wo(h) : h;
    for (; ji(k) && !Wu(k); ) {
      const O = qn(k), F = lu(k);
      (N ? F || A : F || O.position !== "static" || !A || !["absolute", "fixed"].includes(A.position)) ? A = O : C = C.filter(((D) => D !== k)), k = wo(k);
    }
    return f.set(h, C), C;
  })(t, this._c) : [].concat(n), o = [...r, i], c = o[0], u = o.reduce(((h, f) => {
    const b = nh(t, f, a);
    return h.top = Zr(b.top, h.top), h.right = eh(b.right, h.right), h.bottom = eh(b.bottom, h.bottom), h.left = Zr(b.left, h.left), h;
  }), nh(t, c, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Yn(n), r = Hi(n);
  if (n === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Wi(n) !== "body" || Fl(r)) && (o = Dl(n)), Yn(n))) {
    const h = _o(n);
    c = tr(n), u.x = h.x + n.clientLeft, u.y = h.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - o.scrollLeft * c.x + u.x, y: t.y * c.y - o.scrollTop * c.y + u.y };
}, isElement: ji, getDimensions: function(e) {
  return Yn(e) ? Ev(e) : e.getBoundingClientRect();
}, getOffsetParent: ah, getDocumentElement: Hi, getScale: tr, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || ah, r = this.getDimensions;
  return { reference: mw(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => qn(e).direction === "rtl" }, yw = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: bw, ...n }, r = { ...a.platform, _c: i };
  return ow(e, t, { ...a, platform: r });
}, Vi = {
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
function cu(e, t) {
  let n = Vi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Vi.themes[n.$extend] || {} : (n = null, i = Vi[t]) : n = null;
  while (n);
  return i;
}
function _w(e) {
  const t = [e];
  let n = Vi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Vi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function rh(e) {
  const t = [e];
  let n = Vi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Vi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let So = !1;
if (typeof window < "u") {
  So = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        So = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Iv = !1;
typeof window < "u" && typeof navigator < "u" && (Iv = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const ww = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), oh = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, sh = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function lh(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Pc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Ln = [];
let va = null;
const ch = {};
function uh(e) {
  let t = ch[e];
  return t || (t = ch[e] = []), t;
}
let uu = function() {
};
typeof window < "u" && (uu = window.Element);
function He(e) {
  return function(t) {
    return cu(t.theme, e);
  };
}
const $c = "__floating-vue__popper", Pv = () => /* @__PURE__ */ Lt({
  name: "VPopper",
  provide() {
    return {
      [$c]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [$c]: { default: null }
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
      default: He("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: He("positioningDisabled")
    },
    placement: {
      type: String,
      default: He("placement"),
      validator: (e) => ww.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: He("delay")
    },
    distance: {
      type: [Number, String],
      default: He("distance")
    },
    skidding: {
      type: [Number, String],
      default: He("skidding")
    },
    triggers: {
      type: Array,
      default: He("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: He("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: He("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: He("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: He("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: He("popperHideTriggers")
    },
    container: {
      type: [String, Object, uu, Boolean],
      default: He("container")
    },
    boundary: {
      type: [String, uu],
      default: He("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: He("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: He("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: He("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: He("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: He("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: He("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: He("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: He("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: He("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: He("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: He("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: He("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: He("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: He("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: He("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: He("flip")
    },
    shift: {
      type: Boolean,
      default: He("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: He("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: He("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: He("disposeTimeout")
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
      return (e = this[$c]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(hw({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(cw({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(pw({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(uw({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(sw({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: i, rects: a, middlewareData: r }) => {
          let o;
          const { centerOffset: c } = r.arrow;
          return i.startsWith("top") || i.startsWith("bottom") ? o = Math.abs(c) > a.reference.width / 2 : o = Math.abs(c) > a.reference.height / 2, {
            data: {
              overflow: o
            }
          };
        }
      }), this.autoMinSize || this.autoSize) {
        const i = this.autoSize ? this.autoSize : this.autoMinSize ? "min" : null;
        e.middleware.push({
          name: "autoSize",
          fn: ({ rects: a, placement: r, middlewareData: o }) => {
            var c;
            if ((c = o.autoSize) != null && c.skip)
              return {};
            let u, h;
            return r.startsWith("top") || r.startsWith("bottom") ? u = a.reference.width : h = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = u != null ? `${u}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = h != null ? `${h}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(vw({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await yw(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), va && this.instantMove && va.instantMove && va !== this.parentPopper) {
        va.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (va = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Pc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...js(this.$_referenceNode),
        ...js(this.$_popperNode)
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
        for (let n = 0; n < Ln.length; n++)
          t = Ln[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Ln.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of rh(this.theme))
        uh(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Pc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, lh(Ln, this), Ln.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of rh(this.theme)) {
        const i = uh(n);
        lh(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      va === this && (va = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Pc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, oh, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], oh, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, sh, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], sh, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, So ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, i, a) {
      let r = n;
      i != null && (r = typeof i == "function" ? i(r) : i), r.forEach((o) => {
        const c = t[o];
        c && this.$_registerEventListeners(e, c, a);
      });
    },
    $_removeEventListeners(e) {
      const t = [];
      this.$_events.forEach((n) => {
        const { targetNodes: i, eventType: a, handler: r } = n;
        !e || e === a ? i.forEach((o) => o.removeEventListener(a, r)) : t.push(n);
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
      if (Jr >= e.left && Jr <= e.right && Qr >= e.top && Qr <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Jr - Di, i = Qr - Mi, a = t.left + t.width / 2 - Di + (t.top + t.height / 2) - Mi + t.width + t.height, r = Di + n * a, o = Mi + i * a;
        return ss(Di, Mi, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        ss(Di, Mi, r, o, t.left, t.top, t.right, t.top) || // Top edge
        ss(Di, Mi, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        ss(Di, Mi, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Iv) {
    const e = So ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => dh(t), e), document.addEventListener("touchend", (t) => fh(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => dh(e), !0), window.addEventListener("click", (e) => fh(e, !1), !0);
  window.addEventListener("resize", Tw);
}
function dh(e, t) {
  for (let n = 0; n < Ln.length; n++) {
    const i = Ln[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function fh(e, t) {
  Sw(e, t);
}
function Sw(e, t) {
  const n = {};
  for (let i = Ln.length - 1; i >= 0; i--) {
    const a = Ln[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && hh(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = a.parentPopper;
            for (; c; )
              n[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && hh(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function hh(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Cw(e, n) && !t;
}
function Cw(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function Tw() {
  for (let e = 0; e < Ln.length; e++)
    Ln[e].$_computePosition();
}
let Di = 0, Mi = 0, Jr = 0, Qr = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Di = Jr, Mi = Qr, Jr = e.clientX, Qr = e.clientY;
}, So ? {
  passive: !0
} : void 0);
function ss(e, t, n, i, a, r, o, c) {
  const u = ((o - a) * (t - r) - (c - r) * (e - a)) / ((c - r) * (n - e) - (o - a) * (i - t)), h = ((n - e) * (t - r) - (i - t) * (e - a)) / ((c - r) * (n - e) - (o - a) * (i - t));
  return u >= 0 && u <= 1 && h >= 0 && h <= 1;
}
const Ew = {
  extends: Pv()
}, qu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function Aw(e, t, n, i, a, r) {
  return y(), w("div", {
    ref: "reference",
    class: Ae(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Me(e.$slots, "default", gs(po(e.slotData)))
  ], 2);
}
const kw = /* @__PURE__ */ qu(Ew, [["render", Aw]]);
function xw() {
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
let ps;
function du() {
  du.init || (du.init = !0, ps = xw() !== -1);
}
var Ml = {
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
    du(), nn(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", ps && this.$el.appendChild(e), e.data = "about:blank", ps || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!ps && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Ow = /* @__PURE__ */ xm();
Am("data-v-b329ee4c");
const Nw = {
  class: "resize-observer",
  tabindex: "-1"
};
km();
const Lw = /* @__PURE__ */ Ow((e, t, n, i, a, r) => (y(), Be("div", Nw)));
Ml.render = Lw;
Ml.__scopeId = "data-v-b329ee4c";
Ml.__file = "src/components/ResizeObserver.vue";
const $v = (e = "theme") => ({
  computed: {
    themeClass() {
      return _w(this[e]);
    }
  }
}), Rw = /* @__PURE__ */ Lt({
  name: "VPopperContent",
  components: {
    ResizeObserver: Ml
  },
  mixins: [
    $v()
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
}), Iw = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Pw = {
  ref: "inner",
  class: "v-popper__inner"
}, $w = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), Fw = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), Dw = [
  $w,
  Fw
];
function Mw(e, t, n, i, a, r) {
  const o = je("ResizeObserver");
  return y(), w("div", {
    id: e.popperId,
    ref: "popover",
    class: Ae(["v-popper__popper", [
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
    style: hn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = Ze((c) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    l("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (c) => e.autoHide && e.$emit("hide"))
    }),
    l("div", {
      class: "v-popper__wrapper",
      style: hn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", Pw, [
        e.mounted ? (y(), w(ae, { key: 0 }, [
          l("div", null, [
            Me(e.$slots, "default")
          ]),
          e.handleResize ? (y(), Be(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : B("", !0)
        ], 64)) : B("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: hn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Dw, 4)
    ], 4)
  ], 46, Iw);
}
const Fv = /* @__PURE__ */ qu(Rw, [["render", Mw]]), Dv = {
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
let fu = function() {
};
typeof window < "u" && (fu = window.Element);
const zw = /* @__PURE__ */ Lt({
  name: "VPopperWrapper",
  components: {
    Popper: kw,
    PopperContent: Fv
  },
  mixins: [
    Dv,
    $v("finalTheme")
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
      type: [String, Object, fu, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, fu],
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
function Uw(e, t, n, i, a, r) {
  const o = je("PopperContent"), c = je("Popper");
  return y(), Be(c, Vt({ ref: "popper" }, e.$props, {
    theme: e.finalTheme,
    "target-nodes": e.getTargetNodes,
    "popper-node": () => e.$refs.popperContent.$el,
    class: [
      e.themeClass
    ],
    onShow: t[0] || (t[0] = () => e.$emit("show")),
    onHide: t[1] || (t[1] = () => e.$emit("hide")),
    "onUpdate:shown": t[2] || (t[2] = (u) => e.$emit("update:shown", u)),
    onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
    onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
    onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
    onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
    onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
    onResize: t[8] || (t[8] = () => e.$emit("resize"))
  }), {
    default: Le(({
      popperId: u,
      isShown: h,
      shouldMountContent: f,
      skipTransition: b,
      autoHide: C,
      show: A,
      hide: N,
      handleResize: k,
      onResize: O,
      classes: F,
      result: D
    }) => [
      Me(e.$slots, "default", {
        shown: h,
        show: A,
        hide: N
      }),
      ye(o, {
        ref: "popperContent",
        "popper-id": u,
        theme: e.finalTheme,
        shown: h,
        mounted: f,
        "skip-transition": b,
        "auto-hide": C,
        "handle-resize": k,
        classes: F,
        result: D,
        onHide: N,
        onResize: O
      }, {
        default: Le(() => [
          Me(e.$slots, "popper", {
            shown: h,
            hide: N
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const Yu = /* @__PURE__ */ qu(zw, [["render", Uw]]), Bw = {
  ...Yu,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Yu
});
({
  ...Yu
});
Pv();
const ph = Vi, jw = Bw, Hw = /* @__PURE__ */ Lt({
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
}), Vw = "_ncPopover_qgtYg", Kw = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: Vw
}, Mv = "nc-popover-9";
ph.themes[Mv] = structuredClone(ph.themes.dropdown);
const Gw = {
  name: "NcPopover",
  components: {
    Dropdown: jw,
    NcPopoverTriggerProvider: Hw
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
      theme: Mv
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
      return this.placement === "start" ? au ? "right" : "left" : this.placement === "end" ? au ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Hu(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: bo(),
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
        ka.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function Ww(e, t, n, i, a, r) {
  const o = je("NcPopoverTriggerProvider"), c = je("Dropdown");
  return y(), Be(c, {
    ref: "popover",
    shown: a.internalShown,
    "onUpdate:shown": [
      t[0] || (t[0] = (u) => a.internalShown = u),
      t[1] || (t[1] = (u) => a.internalShown = u)
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
    popper: Le((u) => [
      Me(e.$slots, "default", gs(po(u)))
    ]),
    default: Le(() => [
      ye(o, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Le((u) => [
          Me(e.$slots, "trigger", gs(po(u)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const qw = {
  $style: Kw
}, vh = /* @__PURE__ */ et(Gw, [["render", Ww], ["__cssModules", qw]]), Yw = {
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
}, Xw = ["aria-hidden", "aria-label"], Zw = ["fill", "width", "height"], Jw = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, Qw = { key: 0 };
function eS(e, t, n, i, a, r) {
  return y(), w("span", Vt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), w("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", Jw, [
        n.title ? (y(), w("title", Qw, p(n.title), 1)) : B("", !0)
      ])
    ], 8, Zw))
  ], 16, Xw);
}
const tS = /* @__PURE__ */ et(Yw, [["render", eS]]);
Yi(P_);
function Xu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Ot)
        return !1;
      if (n.type === ae && !Xu(n.children))
        return !1;
      if (n.type === xo && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const nS = ".focusable", iS = {
  name: "NcActions",
  components: {
    NcButton: Wn,
    NcPopover: vh
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
      [Vu]: H(() => this.actionsMenuSemanticType === "menu"),
      [yv]: this.closeMenu
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
      default: Tt("Actions")
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
      randomId: $l()
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
    Y0(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(nS);
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
    const e = [], t = (A, N) => {
      A.forEach((k) => {
        if (this.isAction(k)) {
          N.push(k);
          return;
        }
        k.type === ae && t(k.children, N);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((A) => !i.includes(A)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], c = ["NcActionLink", "NcActionRouter"], u = a.some((A) => o.includes(this.getActionName(A))), h = a.some((A) => r.includes(this.getActionName(A))), f = a.some((A) => c.includes(this.getActionName(A)));
    u ? this.actionsMenuSemanticType = "dialog" : h ? this.actionsMenuSemanticType = "menu" : f ? this.actionsMenuSemanticType = "navigation" : e.filter((N) => this.getActionName(N).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const b = (A) => {
      const N = A?.props?.icon, k = A?.children?.icon?.()?.[0] ?? (this.isIconUrl(N) ? en("img", { class: "action-item__menutoggle__icon", src: N, alt: "" }) : en("span", { class: ["icon", N] })), O = A?.children?.default?.()?.[0]?.children?.trim(), F = this.forceName ? O : "";
      let D = A?.props?.title;
      this.forceName || D || (D = O);
      const M = { ...A?.props ?? {} }, E = ["submit", "reset"].includes(M.type) ? M.modelValue : "button";
      return delete M.modelValue, delete M.type, en(
        Wn,
        Vt(
          M,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": A?.props?.["aria-label"] || O,
            title: D,
            disabled: this.disabled || A?.props?.disabled,
            pressed: A?.props?.modelValue,
            size: this.size,
            type: E,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (F ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": A?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => F,
          icon: () => k
        }
      );
    }, C = (A) => {
      const N = Xu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? en("span", { class: ["icon", this.defaultIcon] }) : en(tS, { size: 20 }), k = `${this.randomId}-trigger`;
      return en(
        vh,
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
          trigger: () => en(Wn, {
            id: k,
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
          default: () => en("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            en("ul", {
              id: this.randomId,
              tabindex: "-1",
              ref: "menuList",
              role: this.config.popupRole,
              // For most roles a label is required (dialog, menu), but also in general nothing speaks against labelling a list.
              // It is even recommended to do so.
              "aria-labelledby": k,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              A
            ])
          ])
        }
      );
    };
    return e.length === 1 && n.length === 1 && !this.forceMenu ? b(e[0]) : (this.$nextTick(() => {
      this.opened && this.$refs.menu && (this.$refs.menu.querySelector("li.active") || []).length === 0 && this.focusFirstAction();
    }), i.length > 0 && this.inline > 0 ? en(
      "div",
      {
        class: [
          "action-items",
          `action-item--${this.triggerButtonVariant}`
        ]
      },
      [
        // Render inline actions
        ...i.map(b),
        // render the rest within the popover menu
        a.length > 0 ? en(
          "div",
          {
            class: [
              "action-item",
              {
                "action-item--open": this.opened
              }
            ]
          },
          [C(a)]
        ) : null
      ]
    ) : en(
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
        C(e)
      ]
    ));
  }
}, Hs = /* @__PURE__ */ et(iS, [["__scopeId", "data-v-7206c1f1"]]), aS = ["aria-label"], rS = ["width", "height"], oS = ["fill"], sS = ["fill"], lS = { key: 0 }, cS = /* @__PURE__ */ Lt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = H(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (y(), w("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (y(), w("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        l("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, oS),
        l("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (y(), w("title", lS, p(e.name), 1)) : B("", !0)
        ], 8, sS)
      ], 8, rS))
    ], 8, aS));
  }
}), zv = /* @__PURE__ */ et(cS, [["__scopeId", "data-v-cf399190"]]), hu = /* @__PURE__ */ Lt({
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
}), uS = {
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
}, dS = ["aria-hidden", "aria-label"], fS = ["fill", "width", "height"], hS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, pS = { key: 0 };
function vS(e, t, n, i, a, r) {
  return y(), w("span", Vt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), w("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", hS, [
        n.title ? (y(), w("title", pS, p(n.title), 1)) : B("", !0)
      ])
    ], 8, fS))
  ], 16, dS);
}
const gS = /* @__PURE__ */ et(uS, [["render", vS]]), mS = {
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
}, bS = ["aria-hidden", "aria-label"], yS = ["fill", "width", "height"], _S = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, wS = { key: 0 };
function SS(e, t, n, i, a, r) {
  return y(), w("span", Vt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), w("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", _S, [
        n.title ? (y(), w("title", wS, p(n.title), 1)) : B("", !0)
      ])
    ], 8, yS))
  ], 16, bS);
}
const CS = /* @__PURE__ */ et(mS, [["render", SS]]);
Yi(M_);
const TS = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Wn,
    ChevronDown: h0,
    ChevronUp: _0
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
    return { isLegacy34: Xi };
  },
  computed: {
    labelButton() {
      return this.open ? Tt("Collapse menu") : Tt("Open menu");
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
function ES(e, t, n, i, a, r) {
  const o = je("ChevronUp"), c = je("ChevronDown"), u = je("NcButton");
  return y(), Be(u, {
    class: Ae(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Le(() => [
      n.open ? (y(), Be(o, {
        key: 0,
        size: 20
      })) : (y(), Be(c, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const AS = /* @__PURE__ */ et(TS, [["render", ES], ["__scopeId", "data-v-cfbd3794"]]);
Yi(z_, j_);
const kS = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Hs,
    NcActionButton: q0,
    NcAppNavigationIconCollapsible: AS,
    NcInputConfirmCancel: F0,
    NcLoadingIcon: zv,
    NcVNodes: hu,
    Pencil: gS,
    Undo: CS
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: hv, default: null }
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
      default: () => $l(),
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
      isMobile: No(),
      isLegacy34: Xi
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
      return this.editLabel ? this.editLabel : Tt("Edit item");
    },
    undoButtonAriaLabel() {
      return Tt("Undo changes");
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
}, xS = ["id"], OS = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], NS = {
  key: 0,
  class: "editingContainer"
}, LS = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, RS = { class: "app-navigation-entry__deleted-description" }, IS = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, PS = {
  key: 0,
  class: "app-navigation-entry__children"
};
function $S(e, t, n, i, a, r) {
  const o = je("NcLoadingIcon"), c = je("NcInputConfirmCancel"), u = je("Pencil"), h = je("NcActionButton"), f = je("Undo"), b = je("NcActions"), C = je("NcAppNavigationIconCollapsible");
  return y(), w("li", {
    id: n.id,
    class: Ae([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (y(), Be(Iu(r.isRouterLink ? "router-link" : "NcVNodes"), gs(po({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Le(({ href: A, navigate: N, isActive: k }) => [
        l("div", {
          ref: "entry",
          class: Ae(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && k || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          n.undo ? B("", !0) : (y(), w("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && k ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || A || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...O) => r.handleBlur && r.handleBlur(...O)),
            onClick: (O) => r.onClick(O, N, A),
            onFocus: t[2] || (t[2] = (...O) => r.handleFocus && r.handleFocus(...O)),
            onKeydown: t[3] || (t[3] = Ze(Pe((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: Ae(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (y(), Be(o, { key: 0 })) : Me(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && k
              }, void 0, !0)
            ], 2),
            l("span", {
              class: Ae(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, p(n.name), 3),
            a.editingActive ? (y(), w("div", NS, [
              ye(c, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && k || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : B("", !0)
          ], 40, OS)),
          n.undo ? (y(), w("div", LS, [
            l("div", RS, p(n.name), 1)
          ])) : B("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (y(), w("div", {
            key: 2,
            class: Ae(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (y(), w("div", IS, [
              Me(e.$slots, "counter", {}, void 0, !0)
            ])) : B("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (y(), Be(b, {
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
              icon: Le(() => [
                Me(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Le(() => [
                n.editable && !a.editingActive ? (y(), Be(h, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Le(() => [
                    ye(u, { size: 20 })
                  ]),
                  default: Le(() => [
                    Te(" " + p(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : B("", !0),
                n.undo ? (y(), Be(h, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Le(() => [
                    ye(f, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : B("", !0),
                Me(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : B("", !0)
          ], 2)) : B("", !0),
          n.allowCollapse && e.$slots.default ? (y(), Be(C, {
            key: 3,
            active: n.to && k || n.active,
            open: a.opened,
            onClick: Pe(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : B("", !0),
          Me(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (y(), w("ul", PS, [
      Me(e.$slots, "default", {}, void 0, !0)
    ])) : B("", !0)
  ], 10, xS);
}
const gh = /* @__PURE__ */ et(kS, [["render", $S], ["__scopeId", "data-v-01bef41b"]]), Fc = /* @__PURE__ */ new WeakMap(), FS = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Bf(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Bf(e, a, Object.assign({ capture: n }, r));
    }
    Fc.set(e, i);
  },
  unmounted(e) {
    const t = Fc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Fc.delete(e);
  }
}, DS = {
  mounted(e) {
    e.focus();
  }
}, MS = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", zS = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", pu = "numeric", vu = "ascii", gu = "alpha", eo = "asciinumeric", Hr = "alphanumeric", mu = "domain", Uv = "emoji", US = "scheme", BS = "slashscheme", Dc = "whitespace";
function jS(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Ca(e, t, n) {
  t[pu] && (t[eo] = !0, t[Hr] = !0), t[vu] && (t[eo] = !0, t[gu] = !0), t[eo] && (t[Hr] = !0), t[gu] && (t[Hr] = !0), t[Hr] && (t[mu] = !0), t[Uv] && (t[mu] = !0);
  for (const i in t) {
    const a = jS(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function HS(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function dn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
dn.groups = {};
dn.prototype = {
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
    i = i || dn.groups;
    let a;
    return t && t.j ? a = t : (a = new dn(t), n && i && Ca(t, n, i)), this.jr.push([e, a]), a;
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
    for (let o = 0; o < r - 1; o++)
      a = a.tt(e[o]);
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
    i = i || dn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, c = a.go(e);
    if (c ? (o = new dn(), Object.assign(o.j, c.j), o.jr.push.apply(o.jr, c.jr), o.jd = c.jd, o.t = c.t) : o = new dn(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const u = Object.assign(HS(o.t, i), n);
          Ca(r, u, i);
        } else n && Ca(r, n, i);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, n, i, a) => e.ta(t, n, i, a), gt = (e, t, n, i, a) => e.tr(t, n, i, a), mh = (e, t, n, i, a) => e.ts(t, n, i, a), te = (e, t, n, i, a) => e.tt(t, n, i, a), ii = "WORD", bu = "UWORD", Bv = "ASCIINUMERICAL", jv = "ALPHANUMERICAL", Co = "LOCALHOST", yu = "TLD", _u = "UTLD", vs = "SCHEME", Wa = "SLASH_SCHEME", Zu = "NUM", wu = "WS", Ju = "NL", to = "OPENBRACE", no = "CLOSEBRACE", Vs = "OPENBRACKET", Ks = "CLOSEBRACKET", Gs = "OPENPAREN", Ws = "CLOSEPAREN", qs = "OPENANGLEBRACKET", Ys = "CLOSEANGLEBRACKET", Xs = "FULLWIDTHLEFTPAREN", Zs = "FULLWIDTHRIGHTPAREN", Js = "LEFTCORNERBRACKET", Qs = "RIGHTCORNERBRACKET", el = "LEFTWHITECORNERBRACKET", tl = "RIGHTWHITECORNERBRACKET", nl = "FULLWIDTHLESSTHAN", il = "FULLWIDTHGREATERTHAN", al = "AMPERSAND", rl = "APOSTROPHE", ol = "ASTERISK", Ui = "AT", sl = "BACKSLASH", ll = "BACKTICK", cl = "CARET", Ta = "COLON", Qu = "COMMA", ul = "DOLLAR", Hn = "DOT", dl = "EQUALS", ed = "EXCLAMATION", bn = "HYPHEN", io = "PERCENT", fl = "PIPE", hl = "PLUS", pl = "POUND", ao = "QUERY", td = "QUOTE", Hv = "FULLWIDTHMIDDLEDOT", nd = "SEMI", Vn = "SLASH", ro = "TILDE", vl = "UNDERSCORE", Vv = "EMOJI", gl = "SYM";
var Kv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: jv,
  AMPERSAND: al,
  APOSTROPHE: rl,
  ASCIINUMERICAL: Bv,
  ASTERISK: ol,
  AT: Ui,
  BACKSLASH: sl,
  BACKTICK: ll,
  CARET: cl,
  CLOSEANGLEBRACKET: Ys,
  CLOSEBRACE: no,
  CLOSEBRACKET: Ks,
  CLOSEPAREN: Ws,
  COLON: Ta,
  COMMA: Qu,
  DOLLAR: ul,
  DOT: Hn,
  EMOJI: Vv,
  EQUALS: dl,
  EXCLAMATION: ed,
  FULLWIDTHGREATERTHAN: il,
  FULLWIDTHLEFTPAREN: Xs,
  FULLWIDTHLESSTHAN: nl,
  FULLWIDTHMIDDLEDOT: Hv,
  FULLWIDTHRIGHTPAREN: Zs,
  HYPHEN: bn,
  LEFTCORNERBRACKET: Js,
  LEFTWHITECORNERBRACKET: el,
  LOCALHOST: Co,
  NL: Ju,
  NUM: Zu,
  OPENANGLEBRACKET: qs,
  OPENBRACE: to,
  OPENBRACKET: Vs,
  OPENPAREN: Gs,
  PERCENT: io,
  PIPE: fl,
  PLUS: hl,
  POUND: pl,
  QUERY: ao,
  QUOTE: td,
  RIGHTCORNERBRACKET: Qs,
  RIGHTWHITECORNERBRACKET: tl,
  SCHEME: vs,
  SEMI: nd,
  SLASH: Vn,
  SLASH_SCHEME: Wa,
  SYM: gl,
  TILDE: ro,
  TLD: yu,
  UNDERSCORE: vl,
  UTLD: _u,
  UWORD: bu,
  WORD: ii,
  WS: wu
});
const ti = /[a-z]/, Dr = new RegExp("\\p{L}", "u"), Mc = new RegExp("\\p{Emoji}", "u"), ni = /\d/, zc = /\s/, bh = "\r", Uc = `
`, VS = "️", KS = "‍", Bc = "￼";
let ls = null, cs = null;
function GS(e = []) {
  const t = {};
  dn.groups = t;
  const n = new dn();
  ls == null && (ls = yh(MS)), cs == null && (cs = yh(zS)), te(n, "'", rl), te(n, "{", to), te(n, "}", no), te(n, "[", Vs), te(n, "]", Ks), te(n, "(", Gs), te(n, ")", Ws), te(n, "<", qs), te(n, ">", Ys), te(n, "（", Xs), te(n, "）", Zs), te(n, "「", Js), te(n, "」", Qs), te(n, "『", el), te(n, "』", tl), te(n, "＜", nl), te(n, "＞", il), te(n, "&", al), te(n, "*", ol), te(n, "@", Ui), te(n, "`", ll), te(n, "^", cl), te(n, ":", Ta), te(n, ",", Qu), te(n, "$", ul), te(n, ".", Hn), te(n, "=", dl), te(n, "!", ed), te(n, "-", bn), te(n, "%", io), te(n, "|", fl), te(n, "+", hl), te(n, "#", pl), te(n, "?", ao), te(n, '"', td), te(n, "/", Vn), te(n, ";", nd), te(n, "~", ro), te(n, "_", vl), te(n, "\\", sl), te(n, "・", Hv);
  const i = gt(n, ni, Zu, {
    [pu]: !0
  });
  gt(i, ni, i);
  const a = gt(i, ti, Bv, {
    [eo]: !0
  }), r = gt(i, Dr, jv, {
    [Hr]: !0
  }), o = gt(n, ti, ii, {
    [vu]: !0
  });
  gt(o, ni, a), gt(o, ti, o), gt(a, ni, a), gt(a, ti, a);
  const c = gt(n, Dr, bu, {
    [gu]: !0
  });
  gt(c, ti), gt(c, ni, r), gt(c, Dr, c), gt(r, ni, r), gt(r, ti), gt(r, Dr, r);
  const u = te(n, Uc, Ju, {
    [Dc]: !0
  }), h = te(n, bh, wu, {
    [Dc]: !0
  }), f = gt(n, zc, wu, {
    [Dc]: !0
  });
  te(n, Bc, f), te(h, Uc, u), te(h, Bc, f), gt(h, zc, f), te(f, bh), te(f, Uc), gt(f, zc, f), te(f, Bc, f);
  const b = gt(n, Mc, Vv, {
    [Uv]: !0
  });
  te(b, "#"), gt(b, Mc, b), te(b, VS, b);
  const C = te(b, KS);
  te(C, "#"), gt(C, Mc, b);
  const A = [[ti, o], [ni, a]], N = [[ti, null], [Dr, c], [ni, r]];
  for (let k = 0; k < ls.length; k++)
    $i(n, ls[k], yu, ii, A);
  for (let k = 0; k < cs.length; k++)
    $i(n, cs[k], _u, bu, N);
  Ca(yu, {
    tld: !0,
    ascii: !0
  }, t), Ca(_u, {
    utld: !0,
    alpha: !0
  }, t), $i(n, "file", vs, ii, A), $i(n, "mailto", vs, ii, A), $i(n, "http", Wa, ii, A), $i(n, "https", Wa, ii, A), $i(n, "ftp", Wa, ii, A), $i(n, "ftps", Wa, ii, A), Ca(vs, {
    scheme: !0,
    ascii: !0
  }, t), Ca(Wa, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((k, O) => k[0] > O[0] ? 1 : -1);
  for (let k = 0; k < e.length; k++) {
    const O = e[k][0], D = e[k][1] ? {
      [US]: !0
    } : {
      [BS]: !0
    };
    O.indexOf("-") >= 0 ? D[mu] = !0 : ti.test(O) ? ni.test(O) ? D[eo] = !0 : D[vu] = !0 : D[pu] = !0, mh(n, O, O, D);
  }
  return mh(n, "localhost", Co, {
    ascii: !0
  }), n.jd = new dn(gl), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Kv)
  };
}
function Gv(e, t) {
  const n = WS(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), i = n.length, a = [];
  let r = 0, o = 0;
  for (; o < i; ) {
    let c = e, u = null, h = 0, f = null, b = -1, C = -1;
    for (; o < i && (u = c.go(n[o])); )
      c = u, c.accepts() ? (b = 0, C = 0, f = c) : b >= 0 && (b += n[o].length, C++), h += n[o].length, r += n[o].length, o++;
    r -= b, o -= C, h -= b, a.push({
      t: f.t,
      // token type/name
      v: t.slice(r - h, r),
      // string value
      s: r - h,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function WS(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, o = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(o), i += o.length;
  }
  return t;
}
function $i(e, t, n, i, a) {
  let r;
  const o = t.length;
  for (let c = 0; c < o - 1; c++) {
    const u = t[c];
    e.j[u] ? r = e.j[u] : (r = new dn(i), r.jr = a.slice(), e.j[u] = r), e = r;
  }
  return r = new dn(n), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function yh(e) {
  const t = [], n = [];
  let i = 0, a = "0123456789";
  for (; i < e.length; ) {
    let r = 0;
    for (; a.indexOf(e[i + r]) >= 0; )
      r++;
    if (r > 0) {
      t.push(n.join(""));
      for (let o = parseInt(e.substring(i, i + r), 10); o > 0; o--)
        n.pop();
      i += r;
    } else
      n.push(e[i]), i++;
  }
  return t;
}
const To = {
  defaultProtocol: "http",
  events: null,
  format: _h,
  formatHref: _h,
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
function id(e, t = null) {
  let n = Object.assign({}, To);
  e && (n = Object.assign(n, e instanceof id ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
id.prototype = {
  o: To,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : To[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function _h(e) {
  return e;
}
function Wv(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
Wv.prototype = {
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
  toObject(e = To.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), o = {}, c = e.get("className", n, t), u = e.get("target", n, t), h = e.get("rel", n, t), f = e.getObj("attributes", n, t), b = e.getObj("events", n, t);
    return o.href = i, c && (o.class = c), u && (o.target = u), h && (o.rel = h), f && Object.assign(o, f), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: b
    };
  }
};
function zl(e, t) {
  class n extends Wv {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const qS = zl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), wh = zl("text"), YS = zl("nl"), us = zl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = To.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== Co && e[1].t === Ta;
  }
}), gn = (e) => new dn(e);
function XS({
  groups: e
}) {
  const t = e.domain.concat([al, ol, Ui, sl, ll, cl, ul, dl, bn, Zu, io, fl, hl, pl, Vn, gl, ro, vl]), n = [rl, Ta, Qu, Hn, ed, io, ao, td, nd, qs, Ys, to, no, Ks, Vs, Gs, Ws, Xs, Zs, Js, Qs, el, tl, nl, il], i = [al, rl, ol, sl, ll, cl, ul, dl, bn, to, no, io, fl, hl, pl, ao, Vn, gl, ro, vl], a = gn(), r = te(a, ro);
  Ue(r, i, r), Ue(r, e.domain, r);
  const o = gn(), c = gn(), u = gn();
  Ue(a, e.domain, o), Ue(a, e.scheme, c), Ue(a, e.slashscheme, u), Ue(o, i, r), Ue(o, e.domain, o);
  const h = te(o, Ui);
  te(r, Ui, h), te(c, Ui, h), te(u, Ui, h);
  const f = te(r, Hn);
  Ue(f, i, r), Ue(f, e.domain, r);
  const b = gn();
  Ue(h, e.domain, b), Ue(b, e.domain, b);
  const C = te(b, Hn);
  Ue(C, e.domain, b);
  const A = gn(qS);
  Ue(C, e.tld, A), Ue(C, e.utld, A), te(h, Co, A);
  const N = te(b, bn);
  te(N, bn, N), Ue(N, e.domain, b), Ue(A, e.domain, b), te(A, Hn, C), te(A, bn, N);
  const k = te(o, bn), O = te(o, Hn);
  te(k, bn, k), Ue(k, e.domain, o), Ue(O, i, r), Ue(O, e.domain, o);
  const F = gn(us);
  Ue(O, e.tld, F), Ue(O, e.utld, F), Ue(F, e.domain, o), Ue(F, i, r), te(F, Hn, O), te(F, bn, k), te(F, Ui, h);
  const D = te(F, Ta), M = gn(us);
  Ue(D, e.numeric, M);
  const E = gn(us), re = gn();
  Ue(E, t, E), Ue(E, n, re), Ue(re, t, E), Ue(re, n, re), te(F, Vn, E), te(M, Vn, E);
  const ue = te(c, Ta), X = te(u, Ta), fe = te(X, Vn), Y = te(fe, Vn);
  Ue(c, e.domain, o), te(c, Hn, O), te(c, bn, k), Ue(u, e.domain, o), te(u, Hn, O), te(u, bn, k), Ue(ue, e.domain, E), te(ue, Vn, E), te(ue, ao, E), Ue(Y, e.domain, E), Ue(Y, t, E), te(Y, Vn, E);
  const se = [
    [to, no],
    // {}
    [Vs, Ks],
    // []
    [Gs, Ws],
    // ()
    [qs, Ys],
    // <>
    [Xs, Zs],
    // （）
    [Js, Qs],
    // 「」
    [el, tl],
    // 『』
    [nl, il]
    // ＜＞
  ];
  for (let ge = 0; ge < se.length; ge++) {
    const [J, Q] = se[ge], $ = te(E, J);
    te(re, J, $);
    const z = gn(us);
    Ue($, t, z);
    const q = gn();
    Ue($, n, q), te($, Q, E), Ue(z, t, z), Ue(z, n, q), Ue(q, t, z), Ue(q, n, q), te(z, Q, E), te(q, Q, E);
  }
  return te(a, Co, F), te(a, Ju, YS), {
    start: a,
    tokens: Kv
  };
}
function ZS(e, t, n) {
  let i = n.length, a = 0, r = [], o = [];
  for (; a < i; ) {
    let c = e, u = null, h = null, f = 0, b = null, C = -1;
    for (; a < i && !(u = c.go(n[a].t)); )
      o.push(n[a++]);
    for (; a < i && (h = u || c.go(n[a].t)); )
      u = null, c = h, c.accepts() ? (C = 0, b = c) : C >= 0 && C++, a++, f++;
    if (C < 0)
      a -= f, a < i && (o.push(n[a]), a++);
    else {
      o.length > 0 && (r.push(jc(wh, t, o)), o = []), a -= C, f -= C;
      const A = b.t, N = n.slice(a - f, a);
      r.push(jc(A, t, N));
    }
  }
  return o.length > 0 && r.push(jc(wh, t, o)), r;
}
function jc(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const Dt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function JS() {
  Dt.scanner = GS(Dt.customSchemes);
  for (let e = 0; e < Dt.tokenQueue.length; e++)
    Dt.tokenQueue[e][1]({
      scanner: Dt.scanner
    });
  Dt.parser = XS(Dt.scanner.tokens);
  for (let e = 0; e < Dt.pluginQueue.length; e++)
    Dt.pluginQueue[e][1]({
      scanner: Dt.scanner,
      parser: Dt.parser
    });
  return Dt.initialized = !0, Dt;
}
function qv(e) {
  return Dt.initialized || JS(), ZS(Dt.parser.start, e, Gv(Dt.scanner.start, e));
}
qv.scan = Gv;
function QS(e) {
  const t = new id({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, nC), n = qv(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Ls(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function eC(e) {
  return e.replace(/"/g, "&quot;");
}
function tC(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${eC(i)}"`);
  }
  return t.join(" ");
}
function nC({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${tC(t)}>${Ls(n)}</${e}>`;
}
const iC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = QS(t.text));
}, aC = ["title"], rC = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = Ut("NcAppSidebar:header:ref");
    return (n, i) => Re((y(), w("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Te(p(e.name), 1)
    ], 8, aC)), [
      [g(iC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), oC = ["aria-labelledby"], sC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, lC = ["id"], cC = {
  key: 2,
  class: "empty-content__description"
}, uC = {
  key: 3,
  class: "empty-content__action"
}, dC = /* @__PURE__ */ Lt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = $l();
    return (n, i) => (y(), w("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (y(), w("div", sC, [
        Me(n.$slots, "icon", {}, void 0, !0)
      ])) : B("", !0),
      e.name !== "" || n.$slots.name ? (y(), w("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Me(n.$slots, "name", {}, () => [
          Te(p(e.name), 1)
        ], !0)
      ], 8, lC)) : B("", !0),
      e.description !== "" || n.$slots.description ? (y(), w("p", cC, [
        Me(n.$slots, "description", {}, () => [
          Te(p(e.description), 1)
        ], !0)
      ])) : B("", !0),
      n.$slots.action ? (y(), w("div", uC, [
        Me(n.$slots, "action", {}, void 0, !0)
      ])) : B("", !0)
    ], 8, oC));
  }
}), fC = /* @__PURE__ */ et(dC, [["__scopeId", "data-v-8609a4c1"]]), hC = {
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
}, pC = ["aria-hidden", "aria-label"], vC = ["fill", "width", "height"], gC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, mC = { key: 0 };
function bC(e, t, n, i, a, r) {
  return y(), w("span", Vt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), w("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", gC, [
        n.title ? (y(), w("title", mC, p(n.title), 1)) : B("", !0)
      ])
    ], 8, vC))
  ], 16, pC);
}
const yC = /* @__PURE__ */ et(hC, [["render", bC]]), _C = {
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
}, wC = ["aria-hidden", "aria-label"], SC = ["fill", "width", "height"], CC = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, TC = { key: 0 };
function EC(e, t, n, i, a, r) {
  return y(), w("span", Vt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), w("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", CC, [
        n.title ? (y(), w("title", TC, p(n.title), 1)) : B("", !0)
      ])
    ], 8, SC))
  ], 16, wC);
}
const AC = /* @__PURE__ */ et(_C, [["render", EC]]), kC = {
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
}, xC = ["aria-hidden", "aria-label"], OC = ["fill", "width", "height"], NC = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, LC = { key: 0 };
function RC(e, t, n, i, a, r) {
  return y(), w("span", Vt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), w("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      l("path", NC, [
        n.title ? (y(), w("title", LC, p(n.title), 1)) : B("", !0)
      ])
    ], 8, OC))
  ], 16, xC);
}
const IC = /* @__PURE__ */ et(kC, [["render", RC]]), PC = ["aria-selected", "tabindex"], $C = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ Qm({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = gp(e, "selected"), n = /* @__PURE__ */ we(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (y(), w("button", {
      class: Ae(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Xi),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      l("span", {
        class: Ae([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (o) => n.value = !1)
      }, [
        l("span", {
          class: Ae([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          ye(hu, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Le(() => [
              l("span", {
                class: Ae([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: Ae([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          ye(hu, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Le(() => [
              l("span", {
                class: Ae([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: Ae(a.$style.sidebarTabsButton__name)
      }, p(e.tab.name), 3)
    ], 10, PC));
  }
}), FC = "_sidebarTabsButton_q3kBA", DC = "_sidebarTabsButton_legacy_KQ4d1", MC = "_sidebarTabsButton_selected_Pjayf", zC = "_sidebarTabsButton_animatedHighlight_uvp-0", UC = "_sidebarTabsButton__name_rlQsL", BC = "_sidebarTabsButton__icon_QzZg4", jC = "_sidebarTabsButton__iconLayer_ZkZan", HC = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", VC = "_sidebarTabsButton__icon_pop_IA0By", KC = "_sidebarTabsButton__legacyIcon_QhcNW", GC = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: FC,
  sidebarTabsButton_legacy: DC,
  sidebarTabsButton_selected: MC,
  sidebarTabsButton_animatedHighlight: zC,
  sidebarTabsButton__name: UC,
  sidebarTabsButton__icon: BC,
  sidebarTabsButton__iconLayer: jC,
  sidebarTabsButton__iconLayer_hidden: HC,
  sidebarTabsButton__icon_pop: VC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: KC
}, WC = {
  $style: GC
}, qC = /* @__PURE__ */ et($C, [["__cssModules", WC]]), YC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: qC
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
      isLegacy34: Xi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [t_()]) : t.order - n.order), this.updateActive();
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
}, XC = { class: "app-sidebar-tabs" };
function ZC(e, t, n, i, a, r) {
  const o = je("NcAppSidebarTabsButton");
  return y(), w("div", XC, [
    r.hasMultipleTabs || r.showForSingleTab ? (y(), w("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ae(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = Ze(Pe((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = Ze(Pe((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = Ze(Pe((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = Ze(Pe((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = Ze(Pe((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = Ze(Pe((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = Ze(Pe((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onPointerleave: t[8] || (t[8] = (...c) => r.hideHighlight && r.hideHighlight(...c)),
      onFocusin: t[9] || (t[9] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onFocusout: t[10] || (t[10] = (...c) => r.onHighlightFocusOut && r.onHighlightFocusOut(...c))
    }, [
      a.highlightEnabled ? (y(), w("div", {
        key: 0,
        class: Ae(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: hn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : B("", !0),
      (y(!0), w(ae, null, Ce(a.tabs, (c) => (y(), Be(o, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: a.activeTab === c.id,
        animatedHighlight: a.highlightEnabled,
        tab: c,
        "onUpdate:selected": (u) => r.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : B("", !0),
    l("div", {
      class: Ae(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Me(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const JC = /* @__PURE__ */ et(YC, [["render", ZC], ["__scopeId", "data-v-74190d2a"]]);
Yi(F_);
const QC = {
  name: "NcAppSidebar",
  components: {
    NcActions: Hs,
    NcAppSidebarHeader: rC,
    NcAppSidebarTabs: JC,
    NcButton: Wn,
    NcLoadingIcon: zv,
    NcEmptyContent: fC,
    IconArrowRight: mv,
    IconClose: bv,
    IconDockRight: yC,
    IconStar: AC,
    IconStarOutline: IC
  },
  directives: {
    Focus: DS,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: FS
  },
  inject: {
    ncContentSelector: {
      from: gv,
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
    const e = /* @__PURE__ */ we(null);
    return yn("NcAppSidebar:header:ref", e), {
      uid: $l(),
      isMobile: N_(),
      headerRef: e
    };
  },
  data() {
    return {
      changeNameTranslated: Tt("Change name"),
      closeTranslated: Tt("Close sidebar"),
      favoriteTranslated: Tt("Favorite"),
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
    isSlotPopulated: Xu,
    t: Tt,
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
      this.focusTrap || (this.focusTrap = Hu([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: bo(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && ka.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, eT = ["aria-labelledby"], tT = { class: "app-sidebar-header__info" }, nT = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, iT = { class: "app-sidebar-header__name-container" }, aT = { class: "app-sidebar-header__mainname-container" }, rT = ["placeholder", "value"], oT = ["title"], sT = {
  key: 2,
  class: "app-sidebar-header__description"
};
function lT(e, t, n, i, a, r) {
  const o = je("IconDockRight"), c = je("NcButton"), u = je("NcLoadingIcon"), h = je("IconStar"), f = je("IconStarOutline"), b = je("NcAppSidebarHeader"), C = je("IconArrowRight"), A = je("NcActions"), N = je("IconClose"), k = je("NcAppSidebarTabs"), O = je("NcEmptyContent"), F = zd("focus"), D = zd("click-outside");
  return y(), Be(Ub, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Le(() => [
      Re(l("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = Ze((...M) => r.onKeydownEsc && r.onKeydownEsc(...M), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (y(), Be(ep, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ye(c, Vt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (M) => e.$emit("update:open", !0))
          }), {
            icon: Le(() => [
              Me(e.$slots, "toggle-icon", {}, () => [
                ye(o, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : B("", !0),
        l("header", {
          class: Ae(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (y(), Be(b, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Me(e.$slots, "info", { key: 0 }, () => [
            l("div", tT, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (y(), w("div", {
                key: 0,
                class: Ae(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: hn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...M) => r.onFigureClick && r.onFigureClick(...M)),
                onKeydown: t[2] || (t[2] = Ze((...M) => r.onFigureClick && r.onFigureClick(...M), ["enter"]))
              }, [
                Me(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : B("", !0),
              l("div", {
                class: Ae(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (y(), w("div", nT, [
                  Me(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (y(), Be(c, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Pe(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Le(() => [
                        n.starLoading ? (y(), Be(u, { key: 0 })) : a.isStarred ? (y(), Be(h, {
                          key: 1,
                          size: 20
                        })) : (y(), Be(f, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : B("", !0)
                  ], !0)
                ])) : B("", !0),
                l("div", iT, [
                  l("div", aT, [
                    Re(ye(b, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Pe(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Ja, !n.nameEditable]
                    ]),
                    n.nameEditable ? Re((y(), w("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = Pe((...M) => r.onSubmitName && r.onSubmitName(...M), ["prevent"]))
                    }, [
                      Re(l("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = Ze(Pe((...M) => r.onDismissEditing && r.onDismissEditing(...M), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...M) => r.onNameInput && r.onNameInput(...M))
                      }, null, 40, rT), [
                        [F]
                      ]),
                      ye(c, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Le(() => [
                          ye(C, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [D, () => r.onSubmitName()]
                    ]) : B("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (y(), Be(A, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Le(() => [
                        Me(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : B("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (y(), w("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Me(e.$slots, "subname", {}, () => [
                      Te(p(n.subname), 1)
                    ], !0)
                  ], 8, oT)) : B("", !0)
                ])
              ], 2)
            ])
          ], !0),
          ye(c, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: Pe(r.closeSidebar, ["prevent"])
          }, {
            icon: Le(() => [
              ye(N, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (y(), w("div", sT, [
            Me(e.$slots, "description", {}, void 0, !0)
          ])) : B("", !0)
        ], 2),
        Re(ye(k, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Le(() => [
            Me(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Ja, !n.loading]
        ]),
        n.loading ? (y(), Be(O, { key: 1 }, {
          icon: Le(() => [
            ye(u, { size: 64 })
          ]),
          _: 1
        })) : B("", !0)
      ], 40, eT), [
        [Ja, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const cT = /* @__PURE__ */ et(QC, [["render", lT], ["__scopeId", "data-v-c2c6820b"]]), uT = {
  name: "NcActionLink",
  mixins: [_v],
  inject: {
    isInSemanticMenu: {
      from: Vu,
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
}, dT = ["role"], fT = ["download", "href", "aria-label", "target", "title", "role"], hT = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, pT = { class: "action-link__name" }, vT = ["textContent"], gT = ["textContent"], mT = {
  key: 2,
  class: "action-link__text"
};
function bT(e, t, n, i, a, r) {
  return y(), w("li", {
    class: "action",
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("a", {
      download: n.download,
      href: n.href,
      "aria-label": e.ariaLabel,
      target: n.target,
      title: n.title,
      class: "action-link focusable",
      rel: "nofollow noreferrer noopener",
      role: r.isInSemanticMenu && "menuitem",
      onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
    }, [
      Me(e.$slots, "icon", {}, () => [
        l("span", {
          "aria-hidden": "true",
          class: Ae(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: hn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (y(), w("span", hT, [
        l("strong", pT, p(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: p(e.text)
        }, null, 8, vT)
      ])) : e.isLongText ? (y(), w("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: p(e.text)
      }, null, 8, gT)) : (y(), w("span", mT, p(e.text), 1)),
      B("", !0)
    ], 8, fT)
  ], 8, dT);
}
const Va = /* @__PURE__ */ et(uT, [["render", bT], ["__scopeId", "data-v-32f01b7a"]]);
Yi(B_);
const yT = `<!--
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
`, _T = `<!--
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
`, wT = { class: "vue-skip-actions__container" }, ST = { class: "vue-skip-actions__headline" }, CT = { class: "vue-skip-actions__buttons" }, TT = /* @__PURE__ */ Lt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    yn(vv, c), yn(gv, "#content-vue"), yn("appName", H(() => t.appName));
    const n = No(), i = /* @__PURE__ */ we(!1), a = /* @__PURE__ */ we(), r = H(() => a.value === "navigation" ? _T : yT);
    lp(() => {
      const u = document.getElementById("skip-actions");
      u && (u.innerHTML = "", u.classList.add("vue-skip-actions"));
    });
    function o() {
      fi("toggle-navigation", { open: !0 }), nn(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(u) {
      i.value = u, a.value || (a.value = "navigation");
    }
    return (u, h) => (y(), w("div", {
      id: "content-vue",
      class: Ae(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Xi) }]])
    }, [
      (y(), Be(ep, { to: "#skip-actions" }, [
        l("div", wT, [
          l("div", ST, p(g(Tt)("Keyboard navigation help")), 1),
          l("div", CT, [
            Re(ye(Wn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Pe(o, ["prevent"]),
              onFocusin: h[0] || (h[0] = (f) => a.value = "navigation"),
              onMouseover: h[1] || (h[1] = (f) => a.value = "navigation")
            }, {
              default: Le(() => [
                Te(p(g(Tt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Ja, i.value]
            ]),
            ye(Wn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: h[2] || (h[2] = (f) => a.value = "content"),
              onMouseover: h[3] || (h[3] = (f) => a.value = "content")
            }, {
              default: Le(() => [
                Te(p(g(Tt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Re(ye(Pl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Ja, !g(n)]
          ])
        ])
      ])),
      Me(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), ET = /* @__PURE__ */ et(TT, [["__scopeId", "data-v-d13dcb98"]]), AT = { class: "library-shelf-tree-node" }, kT = ["aria-expanded", "aria-label"], xT = ["href"], OT = { class: "library-shelf-summary-title" }, NT = { dir: "auto" }, LT = { class: "library-muted" }, RT = { dir: "auto" }, IT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, PT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, $T = {
  key: 3,
  class: "library-shelf-tree"
}, FT = ["disabled"], DT = {
  __name: "ShelfTreeNode",
  props: { node: { type: Object, required: !0 }, childrenUrl: { type: String, required: !0 } },
  setup(e) {
    const t = e, n = /* @__PURE__ */ we(!1), i = /* @__PURE__ */ we(!1), a = /* @__PURE__ */ we(!1), r = /* @__PURE__ */ we(!1), o = /* @__PURE__ */ we([]), c = /* @__PURE__ */ we(!1), u = /* @__PURE__ */ we(0);
    async function h() {
      n.value = !n.value, !(!n.value || i.value || a.value) && await f();
    }
    async function f() {
      if (!a.value) {
        a.value = !0, r.value = !1;
        try {
          const b = new URLSearchParams({ rootId: String(t.node.rootId), parent: t.node.path, limit: "100", offset: String(u.value) }), C = await fetch(`${t.childrenUrl}?${b}`, { headers: { Accept: "application/json" }, credentials: "same-origin" });
          if (!C.ok) throw new Error("Shelf children request failed");
          const A = await C.json(), N = Array.isArray(A?.nodes) ? A.nodes : [];
          o.value.push(...N), c.value = A?.hasMore === !0, u.value = Number.isInteger(A?.nextOffset) ? A.nextOffset : o.value.length, i.value = !c.value;
        } catch {
          r.value = !0;
        } finally {
          a.value = !1;
        }
      }
    }
    return (b, C) => {
      const A = je("ShelfTreeNode", !0);
      return y(), w("li", AT, [
        e.node.hasChildren ? (y(), w("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(m)("library", "Collapse {folder}", { folder: e.node.label }) : g(m)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: h
        }, p(n.value ? "−" : "+"), 9, kT)) : B("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", OT, [
            l("strong", null, [
              l("bdi", NT, p(e.node.label), 1)
            ]),
            l("span", null, p(g(mn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", LT, [
            l("bdi", RT, p(e.node.path), 1)
          ])
        ], 8, xT),
        a.value ? (y(), w("small", IT, p(g(m)("library", "Loading folders…")), 1)) : r.value ? (y(), w("small", PT, p(g(m)("library", "Could not load folders.")), 1)) : B("", !0),
        n.value && o.value.length ? (y(), w("ul", $T, [
          (y(!0), w(ae, null, Ce(o.value, (N) => (y(), Be(A, {
            key: N.id,
            node: N,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : B("", !0),
        n.value && c.value ? (y(), w("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: f
        }, p(g(m)("library", "Load more folders")), 9, FT)) : B("", !0)
      ]);
    };
  }
}, MT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, zT = { id: "library-sidebar-filters-heading" }, UT = ["aria-label"], BT = ["value"], jT = ["name", "value"], HT = ["value"], VT = ["value"], KT = ["title"], GT = ["placeholder"], WT = { value: "" }, qT = ["value"], YT = { class: "library-publisher-filter" }, XT = { for: "library-publisher-search" }, ZT = ["placeholder", "title", "aria-expanded"], JT = ["value"], QT = {
  key: 0,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, eE = ["onClick"], tE = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, nE = { class: "library-publication-filter" }, iE = { for: "library-publication-search" }, aE = ["placeholder", "aria-expanded"], rE = ["value"], oE = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, sE = ["onClick"], lE = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, cE = { class: "library-year-filter" }, uE = { for: "library-year-search" }, dE = ["placeholder", "aria-expanded"], fE = ["value"], hE = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, pE = ["onClick"], vE = {
  type: "submit",
  class: "button secondary library-year-apply"
}, gE = { class: "library-creator-filter" }, mE = { for: "library-creator-search" }, bE = ["placeholder", "title", "aria-expanded"], yE = ["value"], _E = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, wE = ["onClick"], SE = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, CE = { class: "library-tag-filter" }, TE = { for: "library-tag-search" }, EE = ["placeholder", "aria-expanded"], AE = ["value"], kE = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, xE = ["onClick"], OE = {
  type: "submit",
  class: "button secondary library-tag-apply"
}, NE = { value: "" }, LE = ["value"], RE = { value: "" }, IE = ["value"], PE = { class: "library-folder-filter" }, $E = { for: "library-folder-search" }, FE = ["placeholder", "title", "aria-expanded"], DE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, ME = ["onClick"], zE = {
  type: "submit",
  class: "button secondary library-folder-apply"
}, UE = { value: "" }, BE = ["value"], jE = { value: "" }, HE = ["value"], VE = { class: "library-subject-filter" }, KE = { for: "library-subject-search" }, GE = ["placeholder", "title", "aria-expanded"], WE = ["value"], qE = {
  key: 0,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, YE = ["onClick"], XE = { class: "library-classification-filter" }, ZE = { for: "library-classification-search" }, JE = ["placeholder", "title", "aria-expanded"], QE = ["value"], eA = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, tA = ["onClick"], nA = {
  type: "submit",
  class: "button secondary library-classification-apply"
}, iA = { value: "" }, aA = { value: "1" }, rA = {
  type: "submit",
  class: "button primary"
}, oA = {
  href: "?",
  class: "button secondary"
}, sA = ["href"], lA = ["lang", "dir"], cA = ["aria-label"], uA = ["href", "aria-label", "title", "onClick"], dA = ["title"], fA = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, hA = { class: "library-review-header" }, pA = { class: "library-muted library-catalogue-eyebrow" }, vA = { id: "library-review-heading" }, gA = ["aria-label"], mA = ["href", "aria-current", "onClick"], bA = ["aria-label"], yA = ["name", "value"], _A = {
  type: "submit",
  class: "button secondary"
}, wA = ["aria-busy"], SA = { key: 0 }, CA = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, TA = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, EA = { class: "library-metadata-review-workbench-copy" }, AA = { class: "library-muted library-catalogue-eyebrow" }, kA = ["title"], xA = {
  key: 0,
  class: "library-metadata-review-card"
}, OA = {
  class: "library-bidi-human",
  dir: "auto"
}, NA = { class: "library-muted" }, LA = {
  class: "library-bidi-machine",
  dir: "ltr"
}, RA = { class: "library-metadata-review-fields" }, IA = {
  class: "library-bidi-human",
  dir: "auto"
}, PA = {
  class: "library-bidi-human",
  dir: "auto"
}, $A = {
  class: "library-bidi-human",
  dir: "auto"
}, FA = {
  class: "library-bidi-machine",
  dir: "ltr"
}, DA = {
  class: "library-bidi-human",
  dir: "auto"
}, MA = {
  class: "library-bidi-human",
  dir: "auto"
}, zA = ["action"], UA = ["value"], BA = ["value"], jA = {
  type: "submit",
  class: "button secondary"
}, HA = { class: "library-metadata-review-actions" }, VA = ["href"], KA = ["href"], GA = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, WA = ["href"], qA = ["aria-label"], YA = ["onClick"], XA = {
  class: "library-bidi-human",
  dir: "auto"
}, ZA = {
  key: 0,
  class: "library-muted"
}, JA = {
  class: "library-bidi-human",
  dir: "auto"
}, QA = {
  key: 1,
  class: "library-scan-error"
}, ek = {
  class: "library-bidi-human",
  dir: "auto"
}, tk = ["onClick"], nk = ["href"], ik = ["aria-label"], ak = ["href"], rk = {
  key: 1,
  class: "library-muted"
}, ok = { key: 0 }, sk = ["href"], lk = {
  key: 3,
  class: "library-muted"
}, ck = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, uk = { class: "library-home-header" }, dk = { class: "library-muted library-catalogue-eyebrow" }, fk = { id: "library-home-heading" }, hk = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, pk = { id: "library-continue-heading" }, vk = { class: "library-muted" }, gk = ["href"], mk = {
  key: 0,
  class: "library-home-card-row"
}, bk = ["onClick"], yk = { class: "library-cover-frame" }, _k = ["src"], wk = { class: "library-cover-summary" }, Sk = ["onClick"], Ck = { dir: "auto" }, Tk = {
  key: 0,
  class: "library-cover-creator"
}, Ek = { dir: "auto" }, Ak = ["href"], kk = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, xk = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, Ok = { id: "library-recent-heading" }, Nk = { class: "library-muted" }, Lk = ["href"], Rk = {
  key: 0,
  class: "library-home-card-row"
}, Ik = ["onClick"], Pk = { class: "library-cover-frame" }, $k = ["src"], Fk = { class: "library-cover-summary" }, Dk = ["onClick"], Mk = { dir: "auto" }, zk = {
  key: 0,
  class: "library-cover-creator"
}, Uk = { dir: "auto" }, Bk = ["href"], jk = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, Hk = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, Vk = { id: "library-home-shelves-heading" }, Kk = { class: "library-muted" }, Gk = ["href"], Wk = ["aria-label"], qk = ["href"], Yk = { dir: "auto" }, Xk = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, Zk = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, Jk = { id: "library-home-attention-heading" }, Qk = { class: "library-muted" }, e2 = ["href"], t2 = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, n2 = { class: "library-home-header" }, i2 = { class: "library-muted library-catalogue-eyebrow" }, a2 = { id: "library-shelves-landing-heading" }, r2 = { class: "library-muted" }, o2 = ["aria-label"], s2 = { class: "library-shelf-tree" }, l2 = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, c2 = { class: "library-muted" }, u2 = { class: "library-empty-actions" }, d2 = ["href"], f2 = ["href"], h2 = {
  key: 4,
  id: "library-catalogue",
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, p2 = { class: "library-catalogue-header" }, v2 = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, g2 = { id: "library-catalogue-heading" }, m2 = ["aria-label"], b2 = { class: "library-mobile-filter-count" }, y2 = ["aria-label"], _2 = ["value"], w2 = ["name", "value"], S2 = { class: "library-mobile-filter-group" }, C2 = { class: "library-quick-filter-search" }, T2 = ["placeholder"], E2 = { value: "" }, A2 = ["value"], k2 = { class: "library-publisher-filter" }, x2 = { for: "library-mobile-publisher-search" }, O2 = ["placeholder", "title", "aria-expanded"], N2 = ["value"], L2 = {
  key: 0,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, R2 = ["onClick"], I2 = { class: "library-publication-filter" }, P2 = { for: "library-mobile-publication-search" }, $2 = ["placeholder", "aria-expanded"], F2 = ["value"], D2 = {
  key: 0,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, M2 = ["onClick"], z2 = { class: "library-year-filter" }, U2 = { for: "library-mobile-year-search" }, B2 = ["placeholder", "aria-expanded"], j2 = ["value"], H2 = {
  key: 0,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, V2 = ["onClick"], K2 = { class: "library-creator-filter" }, G2 = { for: "library-mobile-creator-search" }, W2 = ["placeholder", "title", "aria-expanded"], q2 = ["value"], Y2 = {
  key: 0,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, X2 = ["onClick"], Z2 = { value: "" }, J2 = ["value"], Q2 = { class: "library-subject-filter" }, ex = { for: "library-mobile-subject-search" }, tx = ["placeholder", "title", "aria-expanded"], nx = ["value"], ix = {
  key: 0,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, ax = ["onClick"], rx = { class: "library-classification-filter" }, ox = { for: "library-mobile-classification-search" }, sx = ["placeholder", "title", "aria-expanded"], lx = ["value"], cx = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, ux = ["onClick"], dx = { class: "library-mobile-filter-group" }, fx = { value: "" }, hx = ["value"], px = { class: "library-folder-filter" }, vx = { for: "library-mobile-folder-search" }, gx = ["placeholder", "title", "aria-expanded"], mx = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, bx = ["onClick"], yx = { class: "library-mobile-filter-group" }, _x = { value: "" }, wx = ["value"], Sx = { value: "" }, Cx = ["value"], Tx = { value: "" }, Ex = { value: "1" }, Ax = { class: "library-mobile-filter-group" }, kx = { class: "library-tag-filter" }, xx = { for: "library-tag-search" }, Ox = ["placeholder", "aria-expanded"], Nx = ["value"], Lx = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, Rx = ["onClick"], Ix = {
  type: "submit",
  class: "button secondary library-tag-apply"
}, Px = { value: "title" }, $x = { value: "recent" }, Fx = { value: "publicationDate" }, Dx = { value: "publication" }, Mx = { value: "lastOpened" }, zx = { value: "format" }, Ux = { value: "compact" }, Bx = { value: "gallery" }, jx = { value: "list" }, Hx = { value: "shelf" }, Vx = { class: "library-mobile-filter-actions" }, Kx = {
  href: "?",
  class: "button secondary library-mobile-filter-clear"
}, Gx = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, Wx = ["aria-label"], qx = ["aria-label"], Yx = ["name", "value"], Xx = { "data-library-control": "sort" }, Zx = { value: "title" }, Jx = { value: "recent" }, Qx = { value: "publicationDate" }, eO = { value: "publication" }, tO = { value: "lastOpened" }, nO = { value: "format" }, iO = ["aria-label"], aO = ["aria-pressed"], rO = ["aria-pressed"], oO = ["aria-pressed"], sO = ["aria-pressed"], lO = {
  id: "library-collections",
  class: "library-saved-collections"
}, cO = ["title"], uO = ["action", "title"], dO = ["value"], fO = ["value"], hO = ["placeholder", "disabled"], pO = ["disabled", "title"], vO = ["aria-label"], gO = ["href"], mO = { class: "library-saved-collection-count" }, bO = ["action"], yO = ["value"], _O = {
  type: "submit",
  class: "button tertiary"
}, wO = ["aria-label"], SO = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, CO = ["title"], TO = { class: "library-workspace-panel-purpose" }, EO = { class: "library-workspace-scope-badge" }, AO = { "aria-live": "polite" }, kO = ["action"], xO = ["value"], OO = ["placeholder"], NO = ["title"], LO = ["action"], RO = ["value"], IO = ["placeholder"], PO = ["title"], $O = ["action"], FO = ["value"], DO = ["name", "value"], MO = ["title"], zO = ["action"], UO = ["value"], BO = ["name", "value"], jO = { name: "bulkEditField" }, HO = { value: "publicationType" }, VO = { value: "subtitle" }, KO = { value: "creators" }, GO = { value: "publication" }, WO = { value: "publicationDate" }, qO = { value: "language" }, YO = { value: "publisher" }, XO = { value: "subjects" }, ZO = { value: "classifications" }, JO = ["placeholder"], QO = ["title"], e3 = ["action"], t3 = ["value"], n3 = ["name", "value"], i3 = ["title"], a3 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, r3 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, o3 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, s3 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, l3 = { class: "library-muted library-catalogue-eyebrow" }, c3 = ["title"], u3 = ["aria-label"], d3 = { key: 0 }, f3 = { key: 1 }, h3 = { key: 2 }, p3 = ["aria-label"], v3 = { key: 0 }, g3 = { key: 1 }, m3 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, b3 = { class: "library-muted library-catalogue-eyebrow" }, y3 = ["title"], _3 = ["aria-label"], w3 = ["href"], S3 = {
  key: 0,
  class: "library-notice"
}, C3 = { class: "library-publication-issue-label" }, T3 = ["href"], E3 = { class: "library-muted" }, A3 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, k3 = ["title"], x3 = ["href"], O3 = { class: "library-catalogue-status-row" }, N3 = { class: "library-muted library-filter-result-summary" }, L3 = { key: 0 }, R3 = { href: "?" }, I3 = ["aria-label"], P3 = { class: "library-pagination-range" }, $3 = { key: 0 }, F3 = ["href"], D3 = {
  key: 1,
  class: "library-muted"
}, M3 = ["href"], z3 = {
  key: 3,
  class: "library-muted"
}, U3 = ["title"], B3 = { class: "library-empty-actions" }, j3 = ["href"], H3 = { class: "library-muted" }, V3 = ["title"], K3 = { class: "library-empty-actions" }, G3 = ["href"], W3 = ["title"], q3 = { class: "library-empty-actions" }, Y3 = ["href"], X3 = {
  href: "?",
  class: "button primary"
}, Z3 = ["title"], J3 = { class: "library-empty-actions" }, Q3 = ["href"], eN = {
  key: 5,
  class: "library-select-visible"
}, tN = ["checked"], nN = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, iN = { class: "library-item-selection" }, aN = ["checked", "aria-label", "onChange"], rN = { class: "library-catalogue-list-main" }, oN = ["onClick"], sN = {
  class: "library-bidi-human",
  dir: "auto"
}, lN = {
  key: 0,
  class: "library-muted"
}, cN = {
  class: "library-bidi-human",
  dir: "auto"
}, uN = { class: "library-catalogue-list-metadata" }, dN = { key: 0 }, fN = {
  class: "library-bidi-human",
  dir: "auto"
}, hN = { key: 1 }, pN = { key: 2 }, vN = ["dir"], gN = { key: 3 }, mN = {
  class: "library-bidi-human",
  dir: "auto"
}, bN = { class: "library-catalogue-list-actions" }, yN = ["href"], _N = ["onClick"], wN = { class: "library-item-selection" }, SN = ["checked", "aria-label", "onChange"], CN = ["aria-labelledby", "aria-expanded", "onClick"], TN = ["id"], EN = { class: "library-cover-frame" }, AN = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, kN = ["src", "onLoad", "onError"], xN = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, ON = ["action", "onSubmit"], NN = ["value"], LN = ["value"], RN = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], IN = ["data-library-star-error"], PN = { class: "library-cover-summary" }, $N = { class: "library-cover-primary" }, FN = ["id"], DN = ["onClick"], MN = {
  class: "library-bidi-human",
  dir: "auto"
}, zN = {
  key: 0,
  class: "library-cover-creator"
}, UN = {
  class: "library-bidi-human",
  dir: "auto"
}, BN = {
  key: 1,
  class: "library-cover-badges"
}, jN = {
  key: 0,
  class: "library-cover-badge"
}, HN = {
  class: "library-bidi-machine",
  dir: "ltr"
}, VN = {
  key: 1,
  class: "library-cover-context"
}, KN = {
  class: "library-bidi-human",
  dir: "auto"
}, GN = { class: "library-cover-primary-actions" }, WN = ["href"], qN = ["aria-label"], YN = { class: "library-pagination-range" }, XN = { key: 0 }, ZN = ["href"], JN = {
  key: 1,
  class: "library-muted"
}, QN = ["href"], eL = {
  key: 3,
  class: "library-muted"
}, tL = { class: "library-sidebar-content" }, nL = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, iL = ["role"], aL = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, rL = { class: "library-sidebar-publication-header" }, oL = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, sL = ["src"], lL = { class: "library-sidebar-publication-summary" }, cL = { class: "library-muted library-catalogue-eyebrow" }, uL = {
  class: "library-bidi-human",
  dir: "auto"
}, dL = { key: 0 }, fL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, hL = { class: "library-detail-drawer-actions" }, pL = ["href"], vL = ["aria-label"], gL = ["aria-current", "onClick"], mL = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, bL = { id: "library-sidebar-overview-heading" }, yL = {
  key: 0,
  class: "library-sidebar-description"
}, _L = {
  class: "library-bidi-human",
  dir: "auto"
}, wL = { class: "library-detail-drawer-facts" }, SL = { key: 0 }, CL = { key: 1 }, TL = { key: 2 }, EL = { key: 3 }, AL = { key: 4 }, kL = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, xL = { id: "library-sidebar-metadata-heading" }, OL = ["placeholder"], NL = ["onUpdate:modelValue", "aria-label", "placeholder"], LL = ["onUpdate:modelValue", "aria-label"], RL = ["onClick"], IL = { class: "library-muted" }, PL = {
  key: 0,
  role: "alert"
}, $L = {
  key: 1,
  role: "status"
}, FL = ["disabled"], DL = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, ML = { id: "library-sidebar-suggestions-heading" }, zL = { class: "library-muted" }, UL = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, BL = { id: "library-sidebar-activity-heading" }, jL = { class: "library-detail-drawer-facts" }, HL = { key: 0 }, VL = { key: 1 }, KL = { key: 2 }, GL = { class: "library-detail-drawer-file" }, WL = ["href"], qL = { dir: "ltr" }, YL = {
  key: 1,
  dir: "ltr"
}, XL = ["aria-label"], ZL = ["disabled"], JL = ["disabled"], QL = 20, eR = "/apps/library", tR = 2147483647, nR = {
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
    function r(v, d) {
      return Object.prototype.hasOwnProperty.call(a, v) && String(d ?? "").trim() === a[v];
    }
    function o(v) {
      const d = new URLSearchParams(v);
      for (const s of Object.keys(a)) {
        const P = [...new Set([...d.keys()].filter((Ne) => Ne === s || Ne.startsWith(`${s}[`)))], ie = P.reduce((Ne, De) => Ne + d.getAll(De).length, 0);
        if (ie > 1 || P.some((Ne) => Ne !== s)) {
          for (const Ne of P) d.delete(Ne);
          continue;
        }
        s !== "status" && ie === 1 && !r(s, d.get(s)) && d.delete(s);
      }
      return d;
    }
    function c(v) {
      return Object.keys(a).some((d) => v.getAll(d).length === 1 && r(d, v.get(d)));
    }
    function u(v) {
      return Object.fromEntries(Object.entries(v || {}).filter(([d, s]) => d === "status" || !Object.prototype.hasOwnProperty.call(a, d) || r(d, s)));
    }
    const h = /* @__PURE__ */ Mt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), f = /* @__PURE__ */ Mt((h.items || []).map((v) => ({ ...v }))), b = H(() => f), C = H(() => h.shelves || []), A = H(() => h.formats || []), N = H(() => h.publicationTypes?.length ? h.publicationTypes : n), k = H(() => h.publications || []), O = H(() => h.publicationIssueContext || null), F = H(() => h.scanStatuses || []), D = H(() => h.workflowStatuses || []), M = H(() => h.cataloguePagination || {
      page: 1,
      limit: 100,
      total: b.value.length,
      visible: b.value.length,
      from: b.value.length > 0 ? 1 : 0,
      to: b.value.length,
      previousUrl: "",
      nextUrl: ""
    }), E = /* @__PURE__ */ Mt({
      q: h.activeFilters?.q || "",
      view: h.activeFilters?.view || "compact",
      type: h.activeFilters?.type || "",
      publisher: h.activeFilters?.publisher || "",
      publication: h.activeFilters?.publication || "",
      year: h.activeFilters?.year || "",
      creator: h.activeFilters?.creator || "",
      format: h.activeFilters?.format || "",
      tag: h.activeFilters?.tag || "",
      shelf: h.activeFilters?.shelf || "",
      folder: h.activeFilters?.folder || "",
      status: h.activeFilters?.status || "",
      workflowStatus: h.activeFilters?.workflowStatus || "",
      subject: h.activeFilters?.subject || "",
      classification: h.activeFilters?.classification || "",
      scannerConflicts: h.activeFilters?.scannerConflicts || "",
      starred: h.activeFilters?.starred || "",
      needsMetadata: h.activeFilters?.needsMetadata || "",
      coverReview: h.activeFilters?.coverReview || "",
      noCreator: h.activeFilters?.noCreator || "",
      noPublication: h.activeFilters?.noPublication || "",
      noDate: h.activeFilters?.noDate || "",
      titleFromFilename: h.activeFilters?.titleFromFilename || "",
      noDescription: h.activeFilters?.noDescription || "",
      unsupportedContainer: h.activeFilters?.unsupportedContainer || "",
      weakMetadata: h.activeFilters?.weakMetadata || "",
      unreviewedImports: h.activeFilters?.unreviewedImports || "",
      sort: h.activeFilters?.sort || "title"
    });
    for (const v of Object.keys(a))
      v !== "status" && (r(v, E[v]) || (E[v] = ""));
    const re = /* @__PURE__ */ we(E.publication), ue = /* @__PURE__ */ we(E.q), X = /* @__PURE__ */ we(!1), fe = /* @__PURE__ */ we(null), Y = H(() => {
      const v = re.value.trim().toLocaleLowerCase();
      return (v !== "" && fe.value !== null ? fe.value : k.value).filter((s) => v === "" || s.toLocaleLowerCase().includes(v)).slice(0, QL);
    });
    qe(() => E.publication, (v) => {
      re.value = v || "";
    }), qe(() => E.q, (v) => {
      ue.value = v || "";
    });
    let se = null, ge = null, J = 0;
    qe(re, (v) => {
      window.clearTimeout(se), ge?.abort(), ge = null, fe.value = null;
      const d = String(v || "").trim();
      if (d.length < 3) return;
      const s = ++J;
      se = window.setTimeout(() => {
        hg(d, s);
      }, 200);
    });
    const Q = /* @__PURE__ */ we(E.publisher), $ = /* @__PURE__ */ we(!1), z = /* @__PURE__ */ we(null), q = H(() => z.value || []);
    qe(() => E.publisher, (v) => {
      Q.value = v || "";
    });
    let le = null, ne = null, ve = 0;
    qe(Q, (v) => {
      window.clearTimeout(le), ne?.abort(), ne = null, z.value = null;
      const d = String(v || "").trim();
      if (d.length < 3) return;
      const s = ++ve;
      le = window.setTimeout(() => {
        sg(d, s);
      }, 200);
    });
    const de = /* @__PURE__ */ we(E.creator), be = /* @__PURE__ */ we(!1), _e = /* @__PURE__ */ we(null), Ve = H(() => _e.value || []);
    qe(() => E.creator, (v) => {
      de.value = v || "";
    });
    let xe = null, ct = null, pt = 0;
    qe(de, (v) => {
      window.clearTimeout(xe), ct?.abort(), ct = null, _e.value = null;
      const d = String(v || "").trim();
      if (d.length < 3) return;
      const s = ++pt;
      xe = window.setTimeout(() => {
        og(d, s);
      }, 200);
    });
    const it = /* @__PURE__ */ we(E.folder), ut = /* @__PURE__ */ we(!1), at = /* @__PURE__ */ we(null), Rt = H(() => at.value || []);
    qe(() => E.folder, (v) => {
      it.value = v || "";
    });
    let j = null, _ = null, T = 0;
    qe(it, (v) => {
      window.clearTimeout(j), _?.abort(), _ = null, at.value = null;
      const d = String(v || "").trim();
      if (d.length < 3) return;
      const s = ++T;
      j = window.setTimeout(() => {
        dg(d, s);
      }, 200);
    });
    const x = /* @__PURE__ */ we(E.subject), L = /* @__PURE__ */ we(!1), R = /* @__PURE__ */ we(null), U = H(() => R.value || []);
    qe(() => E.subject, (v) => {
      x.value = v || "";
    });
    let G = null, K = null, Z = 0;
    qe(x, (v) => {
      window.clearTimeout(G), K?.abort(), K = null, R.value = null;
      const d = String(v || "").trim();
      if (d.length < 3) return;
      const s = ++Z;
      G = window.setTimeout(() => {
        lg(d, s);
      }, 200);
    });
    const V = /* @__PURE__ */ we(E.classification), pe = /* @__PURE__ */ we(!1), oe = /* @__PURE__ */ we(null), he = H(() => oe.value || []);
    qe(() => E.classification, (v) => {
      V.value = v || "";
    });
    let Ee = null, Ie = null, ze = 0;
    qe(V, (v) => {
      window.clearTimeout(Ee), Ie?.abort(), Ie = null, oe.value = null;
      const d = String(v || "").trim();
      if (d.length < 3) return;
      const s = ++ze;
      Ee = window.setTimeout(() => {
        cg(d, s);
      }, 200);
    });
    const Fe = /* @__PURE__ */ we(E.tag), Ke = /* @__PURE__ */ we(!1), rt = /* @__PURE__ */ we(null), vt = H(() => rt.value || []);
    qe(() => E.tag, (v) => {
      Fe.value = v || "";
    });
    let At = null, It = null, En = 0;
    qe(Fe, (v) => {
      window.clearTimeout(At), It?.abort(), It = null, rt.value = null;
      const d = String(v || "").trim();
      if (d.length < 2) return;
      const s = ++En;
      At = window.setTimeout(() => {
        ug(d, s);
      }, 200);
    });
    const tt = /* @__PURE__ */ we(E.year), dt = /* @__PURE__ */ we(!1), Fn = /* @__PURE__ */ we(null), pn = H(() => Fn.value || []);
    qe(() => E.year, (v) => {
      tt.value = v || "";
    });
    let Zi = null, yi = null, Dn = 0;
    qe(tt, (v) => {
      window.clearTimeout(Zi), yi?.abort(), yi = null, Fn.value = null;
      const d = String(v || "").trim();
      if (d.length < 2) return;
      const s = ++Dn;
      Zi = window.setTimeout(() => {
        fg(d, s);
      }, 200);
    });
    const _i = Object.fromEntries(Object.keys(E).map((v) => [v, v === "sort" ? "title" : v === "view" ? "compact" : ""])), ar = window.location.pathname.indexOf(eR), Xn = ar >= 0 ? window.location.pathname.slice(0, ar) : "", wi = {
      catalogue: `${Xn}/apps/library/`,
      review: `${Xn}/apps/library/?scannerConflicts=1`,
      settings: `${Xn}/settings/user/library`
    };
    function Si(v, d) {
      if (typeof v != "string" || v === "") return d;
      try {
        const s = Xn ? `${Xn}/` : "/";
        let P = v;
        for (let ie = 0; ie < 5; ie += 1) {
          if (!P.startsWith("/") || P.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(P)) return d;
          const Ne = new URL(P, window.location.origin);
          if (Ne.origin !== window.location.origin || !Ne.pathname.startsWith(s)) return d;
          const De = P.split(/[?#]/, 1)[0];
          for (const ln of De.split("/")) {
            let Ri = ln;
            for (let za = 0; za < 5; za += 1) {
              const Un = decodeURIComponent(Ri);
              if (/[\\/\u0000-\u001f\u007f]/.test(Un) || Un === "." || Un === "..") return d;
              if (Un === Ri) break;
              if (Ri = Un, za === 4) return d;
            }
          }
          const Xe = decodeURI(P);
          if (Xe === P) return v;
          P = Xe;
        }
        return d;
      } catch {
        return d;
      }
    }
    const Ci = H(() => Si(h.settingsUrl, wi.settings)), Ct = H(() => Si(h.catalogueRootUrl, wi.catalogue)), Ra = H(() => Si(h.homeUrl, `${wi.catalogue}?home=1`)), an = H(() => Si(h.shelvesUrl, `${wi.catalogue}?shelves=1`)), Ti = H(() => Si(h.reviewUrl || h.scannerConflictReviewUrl, wi.review)), Ji = H(() => Object.entries(a).some(([v, d]) => E[v] === d)), Ia = H(() => i.reduce((v, d) => v + Number(nc.value[d.countKey] || 0), 0)), Qi = H(() => h.surface === "home"), Ei = H(() => h.surface === "shelves"), rr = H(() => !Qi.value && !Ei.value && !Ji.value && !E.starred && E.sort !== "lastOpened" && !E.shelf), Lo = H(() => [
      { key: "home", name: m("library", "Home"), href: Ra.value, active: Qi.value },
      { key: "all", name: m("library", "All publications"), href: Ct.value, active: rr.value },
      { key: "starred", name: m("library", "Starred"), href: `${Ct.value}?starred=1`, active: E.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${Ct.value}?sort=lastOpened`, active: E.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: an.value, active: Ei.value || !!E.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${Ct.value}#library-collections`, active: !1 }
    ]), Zt = H(() => h.requestToken || ""), Ro = H(() => h.catalogueEndpointUrl || "/apps/library/catalogue"), ea = H(() => h.shelfChildrenUrl || "/apps/library/shelves/children"), Ul = H(() => h.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Bl = H(() => h.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), ht = H(() => h.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), Ai = H(() => h.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), jl = H(() => h.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), Io = H(() => h.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), or = H(() => h.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), Po = H(() => h.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), $o = H(() => h.itemSidebarUrlTemplate || `${Xn}/apps/library/items/__ITEM_ID__/sidebar`), Hl = H(() => h.batchTagUrl || "/apps/library/bulk/tags"), Vl = H(() => h.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Kl = H(() => h.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Gl = H(() => h.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Mn = H(() => h.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), sr = H(() => h.scannerConflictReviewUrl || "?scannerConflicts=1");
    h.importHealthSummary, h.importHealthSummary && Object.keys(h.importHealthSummary).length > 0;
    const ki = H(() => h.discoveryPage === "publication"), An = H(() => h.discoveryPage === "year"), lr = H(() => h.discoveryPage === "creator"), xi = H(() => ki.value || An.value || lr.value), cr = H(() => h.discoveryTitle || E.publication || E.year || E.creator || ""), Wl = H(() => xi.value ? cr.value : m("library", "Library")), ur = H(() => lr.value ? m("library", "Creator") : An.value ? m("library", "Publication year") : m("library", "Publication / series")), dr = H(() => Number(h.rootCount || 0)), Pa = H(() => Number(h.enabledRootCount || 0)), ta = H(() => dr.value === 0), Oi = H(() => dr.value > 0 && Pa.value === 0), Zn = H(() => S.value.length > 0), Kt = /* @__PURE__ */ we(!1), rn = /* @__PURE__ */ we(null), Fo = {
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
      weakMetadata: "Filename-derived metadata",
      unreviewedImports: "Unreviewed imports"
    }, $a = {
      scannerConflicts: "1",
      starred: "1",
      needsMetadata: "1",
      noCreator: "1",
      noPublication: "1",
      noDate: "1",
      titleFromFilename: "1",
      noDescription: "1",
      unsupportedContainer: "1",
      unreviewedImports: "1",
      weakMetadata: "filename",
      coverReview: "placeholder"
    }, ql = {
      sort: {
        title: "Title",
        recent: "Date added",
        publicationDate: "Publication date",
        publication: "Series",
        lastOpened: "Recently opened",
        format: "Format"
      },
      view: {
        compact: "Compact",
        gallery: "Gallery",
        list: "List",
        shelf: "Shelf"
      },
      status: {
        indexed: "Indexed",
        metadata_error: "Metadata error",
        missing: "Missing"
      },
      workflowStatus: {
        "to-read": "To read",
        reading: "Reading",
        finished: "Finished",
        reference: "Reference",
        paused: "Paused",
        abandoned: "Abandoned",
        "needs-action": "Needs action"
      }
    }, fr = H(() => {
      if (typeof window > "u") return "";
      const v = new URLSearchParams(window.location.search);
      if (v.get("batchMetadataApplyResult") !== "1") return "";
      const d = v.get("batchMetadataField") || "field", s = v.get("batchMetadataApplied") || "0", P = v.get("batchMetadataUnchanged") || "0", ie = v.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: d, unchanged: P, skipped: ie });
    }), hr = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), pr = H(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), vr = H(() => h.savedCollections || []), Yl = H(() => h.savedCollectionSaveUrl || "/apps/library/collections"), Do = H(() => h.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Mo = ["compact", "gallery", "list", "shelf"], Jt = H(() => Mo.includes(E.view) ? E.view : "compact"), zo = H(() => ({
      "library-cover-gallery--compact": Jt.value === "compact",
      "library-cover-gallery--gallery": Jt.value === "gallery",
      "library-cover-gallery--shelf": Jt.value === "shelf"
    }));
    function Fa(v) {
      const d = String(v || "").trim();
      if (d.length <= 32) return d;
      const s = d.split("/").filter(Boolean);
      return s.length > 0 ? `…/${s.at(-1)}` : d;
    }
    function gr(v, d) {
      const s = String(d || "").trim();
      if (s === "" || $a[v] === s) return "";
      if (v === "format") return s.toUpperCase();
      if (v === "folder") return Fa(s);
      const P = ql[v]?.[s];
      return P ? m("library", P) : s;
    }
    function ee(v, d) {
      const s = String(E[v] || "").trim(), P = gr(v, s), ie = m("library", d);
      return {
        key: v,
        label: ie,
        value: s,
        displayValue: P,
        title: P ? `${ie}: ${s}` : ie
      };
    }
    const S = H(() => Object.entries(Fo).map(([v, d]) => ee(v, d)).filter((v) => v.value !== "" && !(v.key === "sort" && v.value === "title") && !(v.key === "view" && v.value === "compact"))), I = H(() => S.value.length), W = H(() => I.value > 0 ? m("library", "Filters ({count})", { count: I.value }) : m("library", "Filters")), ce = H(() => I.value > 0 ? m("library", "Open filters panel; {count} active filters", { count: I.value }) : m("library", "Open filters panel")), me = H(() => mn("library", "Show %n item", "Show %n items", Number(M.value.total || 0)));
    function Oe(v) {
      Kt.value = v.currentTarget?.open === !0, Kt.value && nn(() => {
        rn.value?.focus?.();
      });
    }
    const nt = /* @__PURE__ */ new Set([
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
      "folder",
      "status",
      "workflowStatus",
      "subject",
      "classification",
      "scannerConflicts"
    ]), ot = H(() => Object.entries(u(E)).filter(([v, d]) => !nt.has(v) && String(d || "").trim() !== "").map(([v, d]) => ({ key: v, value: d }))), Pt = H(() => Object.entries(E).filter(([v, d]) => !["q", "sort", "starred"].includes(v) && String(d || "").trim() !== "").map(([v, d]) => ({ key: v, value: d }))), _t = H(() => Object.entries(u(E)).filter(([v, d]) => String(d || "").trim() !== "").map(([v, d]) => ({ key: v, value: d }))), mr = H(() => _t.value.filter(({ key: v, value: d }) => v !== "q" && !(v === "sort" && d === "title"))), wt = /* @__PURE__ */ Mt({}), Uo = H(() => h.homeRows || { continueReading: [], recentlyAdded: [] }), ad = H(() => h.homeShelves || []), rd = H(() => h.shelfTree || []), Xl = H(() => h.needsAttention || { count: 0, url: `${Ct.value}?needsMetadata=1` }), kn = /* @__PURE__ */ we([]), Bo = H(() => new Set(kn.value));
    function od(v, d) {
      const s = new Set(kn.value);
      d ? s.add(Number(v)) : s.delete(Number(v)), kn.value = [...s];
    }
    function Yv(v) {
      kn.value = v.currentTarget.checked ? b.value.map((d) => Number(d.id)) : [];
    }
    function Xv() {
      const v = new Set(b.value.map((d) => Number(d.id)));
      kn.value = kn.value.filter((d) => v.has(d));
    }
    function Zv(v) {
      const d = v.target;
      if (d instanceof HTMLFormElement) {
        d.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of kn.value) {
          const P = document.createElement("input");
          P.type = "hidden", P.name = "itemIds[]", P.value = String(s), P.dataset.librarySelectedId = "1", d.appendChild(P);
        }
      }
    }
    const ke = /* @__PURE__ */ we(null), na = /* @__PURE__ */ we(null), Gt = /* @__PURE__ */ Mt({ loading: !1, error: "", missing: !1 }), ia = /* @__PURE__ */ we("overview"), xn = /* @__PURE__ */ Mt({ saving: !1, saved: !1, error: "" }), $t = /* @__PURE__ */ Mt({ title: "", publicationDate: "", identifiers: [] }), sd = /* @__PURE__ */ we(null), aa = /* @__PURE__ */ we(null), ra = /* @__PURE__ */ we(!1);
    let Zl = null, Jn = null, jo = null, Jl = !1, br = null, Ql = 0;
    const Ni = H(() => na.value !== null), yr = H(() => ke.value ? b.value.findIndex((v) => v.id === ke.value.id) : -1), Ho = H(() => yr.value > 0 ? b.value[yr.value - 1] : null), Vo = H(() => yr.value >= 0 && yr.value < b.value.length - 1 ? b.value[yr.value + 1] : null), Jv = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], Qv = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Ko(v) {
      const d = String(v ?? "").trim(), s = d.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return s ? s[1] : d;
    }
    function ld(v) {
      return { ...v, publicationDate: Ko(v?.publicationDate) };
    }
    function cd(v) {
      $t.title = String(v?.title || ""), $t.publicationDate = Ko(v?.publicationDate), $t.identifiers = Array.isArray(v?.identifiers) ? v.identifiers.map((d) => ({ scheme: String(d?.scheme || ""), displayValue: String(d?.displayValue || d?.value || "") })) : [], Object.assign(xn, { saving: !1, saved: !1, error: "" });
    }
    function eg() {
      $t.identifiers.push({ scheme: "", displayValue: "" });
    }
    function tg(v) {
      $t.identifiers.splice(v, 1);
    }
    async function ng() {
      const v = ke.value;
      if (!v?.updateUrl || xn.saving) return;
      Object.assign(xn, { saving: !0, saved: !1, error: "" });
      const d = new FormData();
      d.set("requesttoken", Zt.value), d.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const P = v[s];
        d.set(s, Array.isArray(P) ? P.join(", ") : String(P ?? ""));
      }
      d.set("title", $t.title), d.set("publicationDate", Ko($t.publicationDate)), $t.identifiers.forEach((s, P) => {
        d.set(`identifiers[${P}][scheme]`, s.scheme), d.set(`identifiers[${P}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(v.updateUrl, { method: "POST", body: d, credentials: "same-origin", headers: { Accept: "application/json" } }), P = await s.json().catch(() => ({}));
        if (!s.ok || P.saved !== !0) throw new Error(P.error || m("library", "Metadata could not be saved."));
        v.title = $t.title.trim(), v.publicationDate = Ko($t.publicationDate), v.identifiers = $t.identifiers.filter((Ne) => Ne.scheme.trim() || Ne.displayValue.trim()).map((Ne) => ({ ...Ne }));
        const ie = b.value.find((Ne) => Number(Ne.id) === Number(v.id));
        ie && (ie.title = v.title, ie.publicationDate = v.publicationDate), xn.saved = !0;
      } catch (s) {
        xn.error = s?.message || m("library", "Metadata could not be saved.");
      } finally {
        xn.saving = !1;
      }
    }
    const Li = H(() => {
      const v = r("scannerConflicts", E.scannerConflicts) || r("weakMetadata", E.weakMetadata), d = v ? b.value.find((s) => Go(s).length > 0) : null;
      return {
        enabled: v,
        item: d,
        fields: d ? Go(d) : [],
        reviewNextUrl: sr.value,
        skipUrl: M.value.nextUrl || sr.value
      };
    }), ig = H(() => i.map((v) => ({
      ...v,
      label: m("library", v.label),
      href: `${Ct.value}?${encodeURIComponent(v.key)}=${encodeURIComponent(v.value)}`,
      active: String(E[v.key] || "") === v.value
    })));
    function ec(v) {
      return Array.isArray(v) ? JSON.stringify(v) : v == null ? "" : String(v);
    }
    function Go(v) {
      const d = v.fieldValues || {}, s = v.fieldSources || {};
      return Jv.filter((P) => Object.prototype.hasOwnProperty.call(d, P)).map((P) => {
        const ie = ec(v[P]), Ne = ec(d[P]), De = ec(s[P] || v.metadataSource || "scanner"), Xe = De.includes("filename") || De.includes("path") ? Ne : "", ln = De.includes("sidecar") ? Ne : "";
        return { field: P, currentValue: ie, scannerCandidate: Ne, pathTemplateCandidate: Xe, sidecarValue: ln, sourceProvenance: De, differs: ie !== Ne };
      }).filter((P) => P.differs);
    }
    let oa = 0, sa = null;
    function ud() {
      const v = new URLSearchParams(window.location.search).getAll("item");
      if (v.length !== 1 || !/^[1-9][0-9]*$/.test(v[0])) return null;
      const d = Number(v[0]);
      return Number.isSafeInteger(d) && d <= tR ? d : null;
    }
    function dd(v, d = "push") {
      const s = new URL(window.location.href);
      s.searchParams.delete("item"), v !== null && s.searchParams.set("item", String(v)), history[`${d}State`]({}, "", `${s.pathname}${s.search}${s.hash}`);
    }
    async function _r(v, { historyMode: d = "push", seed: s = null } = {}) {
      sa?.abort();
      const P = ++oa, ie = new AbortController();
      sa = ie, na.value = v, ia.value = "overview", ke.value = s && Number(s.id) === v ? ld(s) : null, ke.value && cd(ke.value), Object.assign(Gt, { loading: !0, error: "", missing: !1 }), d !== "none" && dd(v, d);
      try {
        const Ne = $o.value.replace("__ITEM_ID__", encodeURIComponent(String(v))), De = await fetch(Ne, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ie.signal });
        if (P !== oa) return;
        if (!De.ok) {
          ke.value = null, Gt.missing = De.status === 404, Gt.error = De.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const Xe = await De.json();
        if (P !== oa) return;
        if (typeof Xe?.item?.id != "number" || !Number.isSafeInteger(Xe.item.id) || Xe.item.id !== v) {
          ke.value = null, Gt.missing = !1, Gt.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        ke.value = ld(Xe.item), cd(ke.value), await nn();
      } catch (Ne) {
        P === oa && Ne?.name !== "AbortError" && (ke.value = null, Gt.missing = !1, Gt.error = m("library", "Could not load publication details. Try again."));
      } finally {
        P === oa && (Gt.loading = !1, sa = null);
      }
    }
    function zn(v, d) {
      tc(), Zl = d?.currentTarget instanceof HTMLElement ? d.currentTarget : null, _r(Number(v.id), { seed: v });
    }
    function Wo({ historyMode: v = "push", restoreFocus: d = !0 } = {}) {
      jo = d ? Zl : null, Zl = null, sa?.abort(), sa = null, oa += 1, na.value = null, ke.value = null, ia.value = "overview", Object.assign(Gt, { loading: !1, error: "", missing: !1 }), v !== "none" && dd(null, v);
    }
    function fd() {
      ra.value ? (aa.value?.$refs?.sidebar || aa.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : sd.value?.focus();
    }
    function ag() {
      const v = jo;
      if (jo = null, tc(), Jl || !v?.isConnected) return;
      const d = Ql;
      br = window.requestAnimationFrame(() => {
        br = null, !(d !== Ql || Jl || Ni.value || !v.isConnected) && v.focus();
      });
    }
    function tc() {
      Ql += 1, br !== null && (window.cancelAnimationFrame(br), br = null);
    }
    function wr(v = Jn) {
      ra.value = !!v?.matches, Ni.value && nn(fd);
    }
    function qo(v) {
      v && _r(Number(v.id), { seed: v });
    }
    const Sr = /* @__PURE__ */ we(null);
    let on = 0, Da = null, Yo = null, Cr = null;
    const On = /* @__PURE__ */ Mt({ loading: !1, error: "" });
    function rg(v) {
      const d = o(new FormData(v));
      d.delete("publicationSearch"), d.delete("creatorSearch"), d.delete("subjectSearch"), d.delete("publisherSearch"), d.delete("classificationSearch"), d.delete("tagSearch"), d.delete("folderSearch"), d.delete("yearSearch");
      for (const s of Array.from(d.keys()))
        String(d.get(s) || "").trim() === "" && d.delete(s);
      return d.delete("page"), d.get("view") === "compact" && d.delete("view"), d.get("sort") === "title" && d.delete("sort"), d;
    }
    async function la(v, d, s) {
      const P = new URLSearchParams();
      for (const [De, Xe] of Object.entries(E)) {
        const ln = String(Xe || "").trim();
        De !== v && ln !== "" && !(De === "sort" && ln === "title") && !(De === "view" && ln === "compact") && P.set(De, ln);
      }
      P.set(`${v}Search`, d);
      const ie = new AbortController();
      v === "creator" ? ct = ie : v === "publisher" ? ne = ie : v === "subject" ? K = ie : v === "classification" ? Ie = ie : v === "tag" ? It = ie : v === "folder" ? _ = ie : yi = ie;
      const Ne = v === "creator" ? Bl.value : v === "publisher" ? ht.value : v === "subject" ? Ai.value : v === "classification" ? jl.value : v === "tag" ? Io.value : v === "folder" ? or.value : Po.value;
      try {
        const De = await fetch(`${Ne}?${P}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: ie.signal });
        if (!De.ok) throw new Error(`${v} suggestions request failed: ${De.status}`);
        const Xe = await De.json(), ln = v === "creator" ? pt : v === "publisher" ? ve : v === "subject" ? Z : v === "classification" ? ze : v === "tag" ? En : v === "folder" ? T : Dn, Ri = v === "creator" ? de.value : v === "publisher" ? Q.value : v === "subject" ? x.value : v === "classification" ? V.value : v === "tag" ? Fe.value : v === "folder" ? it.value : tt.value;
        s === ln && Ri.trim() === d && (v === "creator" ? _e.value = Array.isArray(Xe.creators) ? Xe.creators : [] : v === "publisher" ? z.value = Array.isArray(Xe.publishers) ? Xe.publishers : [] : v === "subject" ? R.value = Array.isArray(Xe.subjects) ? Xe.subjects : [] : v === "classification" ? oe.value = Array.isArray(Xe.classifications) ? Xe.classifications : [] : v === "tag" ? rt.value = Array.isArray(Xe.tags) ? Xe.tags : [] : v === "folder" ? at.value = Array.isArray(Xe.folders) ? Xe.folders : [] : Fn.value = Array.isArray(Xe.years) ? Xe.years : []);
      } catch (De) {
        De?.name !== "AbortError" && (v === "creator" && s === pt && (_e.value = null), v === "publisher" && s === ve && (z.value = null), v === "subject" && s === Z && (R.value = null), v === "classification" && s === ze && (oe.value = null), v === "tag" && s === En && (rt.value = null), v === "folder" && s === T && (at.value = null), v === "year" && s === Dn && (Fn.value = null));
      }
    }
    function og(v, d) {
      return la("creator", v, d);
    }
    function sg(v, d) {
      return la("publisher", v, d);
    }
    function lg(v, d) {
      return la("subject", v, d);
    }
    function cg(v, d) {
      return la("classification", v, d);
    }
    function ug(v, d) {
      return la("tag", v, d);
    }
    function dg(v, d) {
      return la("folder", v, d);
    }
    function fg(v, d) {
      return la("year", v, d);
    }
    async function hg(v, d) {
      const s = new URLSearchParams();
      for (const [ie, Ne] of Object.entries(E)) {
        const De = String(Ne || "").trim();
        ie !== "publication" && De !== "" && !(ie === "sort" && De === "title") && !(ie === "view" && De === "compact") && s.set(ie, De);
      }
      s.set("publicationSearch", v);
      const P = new AbortController();
      ge = P;
      try {
        const ie = await fetch(`${Ul.value}?${s}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: P.signal
        });
        if (!ie.ok) throw new Error(`Publication suggestions request failed: ${ie.status}`);
        const Ne = await ie.json();
        d === J && re.value.trim() === v && (fe.value = Array.isArray(Ne.publications) ? Ne.publications : []);
      } catch (ie) {
        ie?.name !== "AbortError" && d === J && (fe.value = null);
      } finally {
        d === J && (ge = null);
      }
    }
    function pg(v) {
      f.splice(0, f.length, ...(v.items || []).map((s) => ({ ...s }))), Xv();
      const d = new Set(v.facetsDeferred ? [
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
      for (const s of ["shelves", "formats", "publicationTypes", "publishers", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "subjects", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "publicationSuggestionsUrl", "creatorSuggestionsUrl", "publisherSuggestionsUrl", "subjectSuggestionsUrl", "classificationSuggestionsUrl", "tagSuggestionsUrl", "folderSuggestionsUrl", "yearSuggestionsUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "smartViewCountsPending", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        !d.has(s) && Object.prototype.hasOwnProperty.call(v, s) && (h[s] = v[s]);
      Object.assign(E, _i, v.activeFilters || {});
    }
    async function vg() {
      if (h.surface !== "index") return;
      const v = on, d = JSON.stringify({ ...E }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [ie, Ne] of Object.entries(E)) {
        const De = String(Ne || "").trim();
        De !== "" && !(ie === "sort" && De === "title") && !(ie === "view" && De === "compact") && s.set(ie, De);
      }
      const P = new AbortController();
      Yo = P;
      try {
        const ie = await fetch(`${Ro.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: P.signal
        });
        if (!ie.ok) return;
        const Ne = await ie.json();
        if (v !== on || d !== JSON.stringify({ ...E })) return;
        for (const De of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(Ne, De) && (h[De] = Ne[De]);
      } catch (ie) {
        if (ie?.name !== "AbortError") return;
      } finally {
        Yo === P && (Yo = null);
      }
    }
    async function Qt(v, d = null) {
      const s = v?.currentTarget?.tagName === "FORM" ? v.currentTarget : v?.currentTarget?.form;
      if (!s && !d?.params) return;
      const P = o(d?.params ?? rg(s));
      if (Qi.value || Ei.value) {
        Tr(P, Ct.value);
        return;
      }
      const ie = P.toString(), Ne = ie ? `?${ie}` : "", De = d?.generation ?? ++on, Xe = c(P), ln = d?.historyMode ?? (Xe ? "push" : "replace"), Ri = d?.historyTraversal === !0;
      if (De !== on) return;
      d === null && Da?.abort();
      const za = new AbortController();
      Da = za, On.loading = !0, On.error = "";
      try {
        const Un = await fetch(Ro.value + Ne, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: za.signal
        });
        if (De !== on) return;
        if (!Un.ok) {
          Ri ? Tr(P) : Xe ? On.error = m("library", "Could not load this review queue. Try again.") : Tr(P);
          return;
        }
        const Pg = await Un.json();
        if (De !== on) return;
        pg(Pg), ln !== "none" && (history[ln === "push" ? "pushState" : "replaceState"]({}, "", ie ? `?${ie}` : window.location.pathname), Ni.value && Wo({ historyMode: "none" }));
      } catch (Un) {
        De === on && Un?.name !== "AbortError" && (Ri ? Tr(P) : Xe ? On.error = m("library", "Could not load this review queue. Try again.") : Tr(P));
      } finally {
        De === on && (Da = null, On.loading = !1);
      }
    }
    function hd() {
      Da?.abort();
      const v = new URLSearchParams(window.location.search), d = ud();
      v.has("item") && d === null && (v.delete("item"), history.replaceState({}, "", `${window.location.pathname}${v.toString() ? `?${v}` : ""}${window.location.hash}`)), d === null ? Wo({ historyMode: "none" }) : _r(d, { historyMode: "none", seed: b.value.find((s) => Number(s.id) === d) || null }), v.delete("item"), Qt(null, {
        params: o(v),
        generation: ++on,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Tr(v, d = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = d, s.hidden = !0;
      for (const [P, ie] of v.entries()) {
        const Ne = document.createElement("input");
        Ne.type = "hidden", Ne.name = P, Ne.value = ie, s.appendChild(Ne);
      }
      document.body.appendChild(s), s.submit(), s.remove();
    }
    function sn(v, d = null, s = null) {
      if (d === null) {
        Qt(v);
        return;
      }
      Qt({ currentTarget: v }, { params: d, generation: s });
    }
    async function gg(v, d = re.value) {
      E.publication = String(d || "").trim(), re.value = E.publication, X.value = !1, await nn(), Qt({ currentTarget: v });
    }
    function pd(v, d) {
      gg(d.currentTarget.form, v);
    }
    async function mg(v) {
      E.q = String(ue.value || "").trim(), E.publication = String(re.value || "").trim(), E.publisher = String(Q.value || "").trim(), E.creator = String(de.value || "").trim(), E.subject = String(x.value || "").trim(), E.folder = String(it.value || "").trim(), E.year = String(tt.value || "").trim(), X.value = !1, $.value = !1, be.value = !1, L.value = !1, ut.value = !1, dt.value = !1, await nn(), Qt({ currentTarget: v });
    }
    async function ca(v, d, s) {
      E[d] = String(s || "").trim(), d === "creator" ? (de.value = E.creator, be.value = !1) : d === "publisher" ? (Q.value = E.publisher, $.value = !1) : d === "subject" ? (x.value = E.subject, L.value = !1) : d === "folder" ? (it.value = E.folder, ut.value = !1) : (tt.value = E.year, dt.value = !1), await nn(), Qt({ currentTarget: v });
    }
    function vd(v) {
      mg(v.currentTarget);
    }
    function gd(v, d) {
      ca(d.currentTarget.form, "creator", v);
    }
    function md(v, d) {
      ca(d.currentTarget.form, "publisher", v);
    }
    function bd(v, d) {
      ca(d.currentTarget.form, "classification", v);
    }
    function yd(v, d) {
      ca(d.currentTarget.form, "tag", v);
    }
    function _d(v, d) {
      ca(d.currentTarget.form, "folder", v);
    }
    function wd(v, d = x.value) {
      window.clearTimeout(G), K?.abort(), K = null, ca(v, "subject", d);
    }
    function bg(v) {
      wd(v.currentTarget.form);
    }
    function Sd(v, d) {
      wd(d.currentTarget.form, v);
    }
    function Cd(v, d) {
      ca(d.currentTarget.form, "year", v);
    }
    function Td(v) {
      const d = new URLSearchParams();
      for (const [s, P] of Object.entries(E)) {
        const ie = String(P || "").trim();
        ie !== "" && s !== v && !(s === "sort" && ie === "title") && !(s === "view" && ie === "compact") && d.set(s, ie);
      }
      return d;
    }
    function Ed(v) {
      const d = Td(v).toString();
      return Qi.value || Ei.value ? `${Ct.value}${d ? `?${d}` : ""}` : d ? `?${d}` : "?";
    }
    function yg(v) {
      const d = Td(v);
      E[v] = v === "sort" ? "title" : v === "view" ? "compact" : "", Qt(null, {
        params: d,
        generation: ++on
      });
    }
    function _g(v) {
      const d = new URL(v.href, window.location.origin).searchParams;
      Qt(null, {
        params: d,
        generation: ++on
      });
    }
    function wg() {
      return Ed("q");
    }
    const nc = H(() => h.smartViewCounts || {}), Sg = H(() => new Set(h.smartViewCountsPending || []));
    function Cg(v) {
      return Sg.value.has(v) || !Object.prototype.hasOwnProperty.call(nc.value, v) ? "—" : Number(nc.value[v] || 0);
    }
    const Ad = H(() => {
      const v = {};
      for (const [d, s] of Object.entries(E)) {
        const P = String(s || "").trim();
        P !== "" && !(d === "sort" && P === "title") && (v[d] = P);
      }
      return v;
    }), Tg = H(() => JSON.stringify(Ad.value)), ic = H(() => Object.keys(Ad.value).length > 0);
    function Xo(v) {
      if (!Mo.includes(v)) return;
      E.view = v;
      const d = new URLSearchParams();
      for (const [s, P] of Object.entries(u(E))) {
        const ie = String(P || "").trim();
        ie !== "" && !(s === "sort" && ie === "title") && !(s === "view" && ie === "compact") && d.set(s, ie);
      }
      d.delete("page"), Qt(null, {
        params: d,
        generation: ++on
      });
    }
    function Eg(v) {
      const d = o(window.location.search);
      for (const P of Object.keys(Fo))
        d.delete(P);
      d.delete("page");
      for (const [P, ie] of Object.entries(v))
        String(ie || "").trim() !== "" && d.set(P, String(ie));
      const s = d.toString();
      return s ? `?${s}` : "?";
    }
    function Ag(v) {
      return Eg(v || {});
    }
    function kg(v) {
      return Do.value.replace("__COLLECTION_ID__", encodeURIComponent(String(v || "0")));
    }
    function Ma(v) {
      return String(v || "").toUpperCase();
    }
    function Er(v) {
      return wt[v.id] || "loading";
    }
    function xg(v) {
      wt[v.id] = "loaded";
    }
    function Og(v) {
      wt[v.id] = "error";
    }
    function ac(v) {
      const d = String(v?.publication || "").trim(), s = String(v?.publicationDate || "").trim();
      return d && s ? `${d} · ${s}` : d || s ? d || s : [v?.publicationType, Ma(v?.extension)].filter(Boolean).join(" · ");
    }
    function Ng(v) {
      const d = String(v?.tagName || "").toLowerCase();
      return v?.isContentEditable || ["input", "select", "textarea", "button"].includes(d);
    }
    function Lg(v) {
      v.key !== "/" || v.metaKey || v.ctrlKey || v.altKey || v.shiftKey || Ng(v.target) || (v.preventDefault(), Sr.value?.focus(), Sr.value?.select?.());
    }
    async function Rg(v) {
      v.key !== "Escape" || document.activeElement !== Sr.value || E.q === "" || (v.preventDefault(), ue.value = "", E.q = "", await nn(), sn({ currentTarget: Sr.value }));
    }
    function Ig(v) {
      if (!Ni.value || v.metaKey || v.ctrlKey || v.altKey)
        return !1;
      if (v.key === "Escape")
        return v.preventDefault(), Wo(), !0;
      if (v.key === "Tab" && ra.value) {
        if (aa.value?.focusTrap) return !1;
        const d = aa.value?.$refs?.sidebar || aa.value?.$el || aa.value, s = [...d?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ne) => !Ne.hidden && Ne.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const P = s[0], ie = s[s.length - 1];
        if (v.shiftKey && (document.activeElement === P || !d.contains(document.activeElement)))
          return v.preventDefault(), ie.focus(), !0;
        if (!v.shiftKey && (document.activeElement === ie || !d.contains(document.activeElement)))
          return v.preventDefault(), P.focus(), !0;
      }
      return v.key === "ArrowLeft" && Ho.value ? (v.preventDefault(), qo(Ho.value), !0) : v.key === "ArrowRight" && Vo.value ? (v.preventDefault(), qo(Vo.value), !0) : !1;
    }
    function kd(v) {
      Ig(v) || (Lg(v), Rg(v));
    }
    qi(() => {
      window.addEventListener("keydown", kd), window.addEventListener("popstate", hd), Jn = window.matchMedia?.("(max-width: 1023px)") || null, wr(), Jn?.addEventListener ? Jn.addEventListener("change", wr) : Jn?.addListener?.(wr);
      const v = new URLSearchParams(window.location.search), d = ud();
      v.has("item") && d === null ? (v.delete("item"), history.replaceState({}, "", `${window.location.pathname}${v.toString() ? `?${v}` : ""}${window.location.hash}`)) : d !== null && _r(d, { historyMode: "none", seed: b.value.find((s) => Number(s.id) === d) || null }), Cr = window.requestAnimationFrame(() => {
        Cr = null, vg();
      });
    }), ir(() => {
      Jl = !0, tc(), window.removeEventListener("keydown", kd), window.removeEventListener("popstate", hd), window.clearTimeout(se), window.clearTimeout(xe), window.clearTimeout(G), window.clearTimeout(Zi), ge?.abort(), ct?.abort(), K?.abort(), yi?.abort(), on += 1, Cr !== null && window.cancelAnimationFrame(Cr), Cr = null, Yo?.abort(), Da?.abort(), Da = null, oa += 1, sa?.abort(), sa = null, Jn?.removeEventListener ? Jn.removeEventListener("change", wr) : Jn?.removeListener?.(wr), Jn = null, jo = null;
    });
    const Ar = /* @__PURE__ */ Mt({}), kr = /* @__PURE__ */ Mt({});
    async function xd(v, d) {
      const s = d?.currentTarget?.closest?.("form") || d?.currentTarget;
      if (!s || !v?.starUrl || Ar[v.id]) return;
      const P = !!v.starred;
      Ar[v.id] = !0, kr[v.id] = "", v.starred = !P;
      try {
        (await fetch(v.starUrl, {
          method: "POST",
          body: new FormData(s),
          credentials: "same-origin"
        })).ok || (v.starred = P, kr[v.id] = m("library", "Could not update star. Try again."));
      } catch {
        v.starred = P, kr[v.id] = m("library", "Could not update star. Try again.");
      } finally {
        Ar[v.id] = !1;
      }
    }
    return (v, d) => (y(), Be(g(ET), { "app-name": "library" }, {
      default: Le(() => [
        ye(g(o0), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: Le(() => [
            ye(g(pv), null, {
              default: Le(() => [
                (y(!0), w(ae, null, Ce(Lo.value, (s) => (y(), Be(g(gh), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                ye(g(gh), {
                  active: Ji.value,
                  href: Ti.value,
                  name: Ia.value > 0 ? `${g(m)("library", "Review")} (${Ia.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Le(() => [
            l("section", MT, [
              l("h2", zT, p(g(m)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(m)("library", "Catalogue search and filters"),
                onSubmit: Pe(vd, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: E.folder
                }, null, 8, BT),
                (y(!0), w(ae, null, Ce(ot.value, (s) => (y(), w("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, jT))), 128)),
                E.sort && E.sort !== "title" ? (y(), w("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: E.sort
                }, null, 8, HT)) : B("", !0),
                E.view && E.view !== "compact" ? (y(), w("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: E.view
                }, null, 8, VT)) : B("", !0),
                l("label", {
                  class: "library-quick-filter-search",
                  title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  l("span", null, [
                    Te(p(g(m)("library", "Search")) + " ", 1),
                    d[103] || (d[103] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  Re(l("input", {
                    ref_key: "quickSearchInput",
                    ref: Sr,
                    "onUpdate:modelValue": d[0] || (d[0] = (s) => ue.value = s),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: g(m)("library", "Title, creator, description, filename or folder")
                  }, null, 8, GT), [
                    [ft, ue.value]
                  ])
                ], 8, KT),
                l("label", null, [
                  Te(p(g(m)("library", "Type")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[1] || (d[1] = (s) => E.type = s),
                    name: "type",
                    onChange: d[2] || (d[2] = (s) => sn(s))
                  }, [
                    l("option", WT, p(g(m)("library", "All types")), 1),
                    (y(!0), w(ae, null, Ce(N.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, p(s), 9, qT))), 128))
                  ], 544), [
                    [Wt, E.type]
                  ])
                ]),
                l("div", YT, [
                  l("label", XT, p(g(m)("library", "Publisher")), 1),
                  Re(l("input", {
                    id: "library-publisher-search",
                    "onUpdate:modelValue": d[3] || (d[3] = (s) => Q.value = s),
                    type: "search",
                    name: "publisherSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search publishers"),
                    title: g(m)("library", "Exact publisher matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publisher-suggestions",
                    "aria-expanded": $.value && q.value.length > 0 ? "true" : "false",
                    onFocus: d[4] || (d[4] = (s) => $.value = !0),
                    onKeydown: d[5] || (d[5] = Ze((s) => $.value = !1, ["escape"]))
                  }, null, 40, ZT), [
                    [ft, Q.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "publisher",
                    value: E.publisher
                  }, null, 8, JT),
                  $.value && q.value.length > 0 ? (y(), w("ul", QT, [
                    (y(!0), w(ae, null, Ce(q.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-publisher-suggestion",
                        onMousedown: d[6] || (d[6] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => md(s, P)
                      }, p(s), 41, eE)
                    ]))), 128))
                  ])) : B("", !0),
                  l("button", tE, p(g(m)("library", "Apply publisher")), 1)
                ]),
                l("div", nE, [
                  l("label", iE, p(g(m)("library", "Series / periodical")), 1),
                  Re(l("input", {
                    id: "library-publication-search",
                    "onUpdate:modelValue": d[7] || (d[7] = (s) => re.value = s),
                    type: "search",
                    name: "publicationSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search series and periodicals"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-publication-suggestions",
                    "aria-expanded": X.value && Y.value.length > 0 ? "true" : "false",
                    onFocus: d[8] || (d[8] = (s) => X.value = !0),
                    onKeydown: d[9] || (d[9] = Ze((s) => X.value = !1, ["escape"]))
                  }, null, 40, aE), [
                    [ft, re.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "publication",
                    value: E.publication
                  }, null, 8, rE),
                  X.value && Y.value.length > 0 ? (y(), w("ul", oE, [
                    (y(!0), w(ae, null, Ce(Y.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: d[10] || (d[10] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => pd(s, P)
                      }, p(s), 41, sE)
                    ]))), 128))
                  ])) : B("", !0),
                  l("button", lE, p(g(m)("library", "Apply series")), 1)
                ]),
                l("div", cE, [
                  l("label", uE, p(g(m)("library", "Publication year")), 1),
                  Re(l("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": d[11] || (d[11] = (s) => tt.value = s),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": dt.value && pn.value.length > 0 ? "true" : "false",
                    onFocus: d[12] || (d[12] = (s) => dt.value = !0),
                    onKeydown: d[13] || (d[13] = Ze((s) => dt.value = !1, ["escape"]))
                  }, null, 40, dE), [
                    [ft, tt.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "year",
                    value: E.year
                  }, null, 8, fE),
                  dt.value && pn.value.length > 0 ? (y(), w("ul", hE, [
                    (y(!0), w(ae, null, Ce(pn.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: d[14] || (d[14] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => Cd(s, P)
                      }, p(s), 41, pE)
                    ]))), 128))
                  ])) : B("", !0),
                  l("button", vE, p(g(m)("library", "Apply year")), 1)
                ]),
                l("div", gE, [
                  l("label", mE, p(g(m)("library", "Creator")), 1),
                  Re(l("input", {
                    id: "library-creator-search",
                    "onUpdate:modelValue": d[15] || (d[15] = (s) => de.value = s),
                    type: "search",
                    name: "creatorSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search creators"),
                    title: g(m)("library", "Exact full-field creator matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-creator-suggestions",
                    "aria-expanded": be.value && Ve.value.length > 0 ? "true" : "false",
                    onFocus: d[16] || (d[16] = (s) => be.value = !0),
                    onKeydown: d[17] || (d[17] = Ze((s) => be.value = !1, ["escape"]))
                  }, null, 40, bE), [
                    [ft, de.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "creator",
                    value: E.creator
                  }, null, 8, yE),
                  be.value && Ve.value.length > 0 ? (y(), w("ul", _E, [
                    (y(!0), w(ae, null, Ce(Ve.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: d[18] || (d[18] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => gd(s, P)
                      }, p(s), 41, wE)
                    ]))), 128))
                  ])) : B("", !0),
                  l("button", SE, p(g(m)("library", "Apply creator")), 1)
                ]),
                l("div", CE, [
                  l("label", TE, p(g(m)("library", "Nextcloud tag")), 1),
                  Re(l("input", {
                    id: "library-tag-search",
                    "onUpdate:modelValue": d[19] || (d[19] = (s) => Fe.value = s),
                    type: "search",
                    name: "tagSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search tags"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-tag-suggestions",
                    "aria-expanded": Ke.value && vt.value.length > 0 ? "true" : "false",
                    onFocus: d[20] || (d[20] = (s) => Ke.value = !0),
                    onKeydown: d[21] || (d[21] = Ze((s) => Ke.value = !1, ["escape"]))
                  }, null, 40, EE), [
                    [ft, Fe.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "tag",
                    value: E.tag
                  }, null, 8, AE),
                  Ke.value && vt.value.length > 0 ? (y(), w("ul", kE, [
                    (y(!0), w(ae, null, Ce(vt.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-tag-suggestion",
                        onMousedown: d[22] || (d[22] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => yd(s, P)
                      }, p(s), 41, xE)
                    ]))), 128))
                  ])) : B("", !0),
                  l("button", OE, p(g(m)("library", "Apply tag")), 1)
                ]),
                l("label", null, [
                  Te(p(g(m)("library", "Format")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[23] || (d[23] = (s) => E.format = s),
                    name: "format",
                    onChange: d[24] || (d[24] = (s) => sn(s))
                  }, [
                    l("option", NE, p(g(m)("library", "All formats")), 1),
                    (y(!0), w(ae, null, Ce(A.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, p(Ma(s)), 9, LE))), 128))
                  ], 544), [
                    [Wt, E.format]
                  ])
                ]),
                l("label", null, [
                  Te(p(g(m)("library", "Shelf")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[25] || (d[25] = (s) => E.shelf = s),
                    name: "shelf",
                    onChange: d[26] || (d[26] = (s) => sn(s))
                  }, [
                    l("option", RE, p(g(m)("library", "All shelves")), 1),
                    (y(!0), w(ae, null, Ce(C.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, p(s), 9, IE))), 128))
                  ], 544), [
                    [Wt, E.shelf]
                  ])
                ]),
                l("div", PE, [
                  l("label", $E, p(g(m)("library", "Folder")), 1),
                  Re(l("input", {
                    id: "library-folder-search",
                    "onUpdate:modelValue": d[27] || (d[27] = (s) => it.value = s),
                    type: "search",
                    name: "folderSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Type at least 3 path characters"),
                    title: g(m)("library", "Select an exact folder path"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-folder-suggestions",
                    "aria-expanded": ut.value && Rt.value.length > 0 ? "true" : "false",
                    onFocus: d[28] || (d[28] = (s) => ut.value = !0),
                    onKeydown: d[29] || (d[29] = Ze((s) => ut.value = !1, ["escape"]))
                  }, null, 40, FE), [
                    [ft, it.value]
                  ]),
                  ut.value && Rt.value.length > 0 ? (y(), w("ul", DE, [
                    (y(!0), w(ae, null, Ce(Rt.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-folder-suggestion",
                        onMousedown: d[30] || (d[30] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => _d(s, P)
                      }, p(s), 41, ME)
                    ]))), 128))
                  ])) : B("", !0),
                  l("button", zE, p(g(m)("library", "Apply folder")), 1)
                ]),
                l("label", null, [
                  Te(p(g(m)("library", "Scan status")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[31] || (d[31] = (s) => E.status = s),
                    name: "status",
                    onChange: d[32] || (d[32] = (s) => sn(s))
                  }, [
                    l("option", UE, p(g(m)("library", "All scan statuses")), 1),
                    (y(!0), w(ae, null, Ce(F.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, p(s), 9, BE))), 128))
                  ], 544), [
                    [Wt, E.status]
                  ])
                ]),
                l("label", null, [
                  Te(p(g(m)("library", "Workflow status")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[33] || (d[33] = (s) => E.workflowStatus = s),
                    name: "workflowStatus",
                    onChange: d[34] || (d[34] = (s) => sn(s))
                  }, [
                    l("option", jE, p(g(m)("library", "All workflow statuses")), 1),
                    (y(!0), w(ae, null, Ce(D.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, p(s), 9, HE))), 128))
                  ], 544), [
                    [Wt, E.workflowStatus]
                  ])
                ]),
                l("div", VE, [
                  l("label", KE, p(g(m)("library", "Subject")), 1),
                  Re(l("input", {
                    id: "library-subject-search",
                    "onUpdate:modelValue": d[35] || (d[35] = (s) => x.value = s),
                    type: "search",
                    name: "subjectSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search subjects"),
                    title: g(m)("library", "Exact subject matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-subject-suggestions",
                    "aria-expanded": L.value && U.value.length > 0 ? "true" : "false",
                    onFocus: d[36] || (d[36] = (s) => L.value = !0),
                    onKeydown: d[37] || (d[37] = Ze((s) => L.value = !1, ["escape"]))
                  }, null, 40, GE), [
                    [ft, x.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "subject",
                    value: E.subject
                  }, null, 8, WE),
                  L.value && U.value.length > 0 ? (y(), w("ul", qE, [
                    (y(!0), w(ae, null, Ce(U.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-subject-suggestion",
                        onMousedown: d[38] || (d[38] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => Sd(s, P)
                      }, p(s), 41, YE)
                    ]))), 128))
                  ])) : B("", !0),
                  l("button", {
                    type: "button",
                    class: "button secondary library-subject-apply",
                    onClick: bg
                  }, p(g(m)("library", "Apply subject")), 1)
                ]),
                l("div", XE, [
                  l("label", ZE, p(g(m)("library", "Classification")), 1),
                  Re(l("input", {
                    id: "library-classification-search",
                    "onUpdate:modelValue": d[39] || (d[39] = (s) => V.value = s),
                    type: "search",
                    name: "classificationSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search classifications"),
                    title: g(m)("library", "Exact classification matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-classification-suggestions",
                    "aria-expanded": pe.value && he.value.length > 0 ? "true" : "false",
                    onFocus: d[40] || (d[40] = (s) => pe.value = !0),
                    onKeydown: d[41] || (d[41] = Ze((s) => pe.value = !1, ["escape"]))
                  }, null, 40, JE), [
                    [ft, V.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "classification",
                    value: E.classification
                  }, null, 8, QE),
                  pe.value && he.value.length > 0 ? (y(), w("ul", eA, [
                    (y(!0), w(ae, null, Ce(he.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-classification-suggestion",
                        onMousedown: d[42] || (d[42] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => bd(s, P)
                      }, p(s), 41, tA)
                    ]))), 128))
                  ])) : B("", !0),
                  l("button", nA, p(g(m)("library", "Apply classification")), 1)
                ]),
                l("label", null, [
                  Te(p(g(m)("library", "Suggested updates")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[43] || (d[43] = (s) => E.scannerConflicts = s),
                    name: "scannerConflicts",
                    onChange: d[44] || (d[44] = (s) => sn(s))
                  }, [
                    l("option", iA, p(g(m)("library", "All metadata")), 1),
                    l("option", aA, p(g(m)("library", "Suggested updates")), 1)
                  ], 544), [
                    [Wt, E.scannerConflicts]
                  ])
                ]),
                l("button", rA, p(g(m)("library", "Apply filters")), 1),
                l("a", oA, p(g(m)("library", "Clear")), 1)
              ], 40, UT)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: Ci.value
            }, [
              d[104] || (d[104] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, p(g(m)("library", "Settings")), 1)
            ], 8, sA)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ye(g(S1), null, {
          default: Le(() => [
            l("div", {
              id: "library-app",
              class: "library-vue-catalogue library-app",
              lang: h.language || "en",
              dir: h.direction || "ltr",
              tabindex: "-1"
            }, [
              S.value.length > 0 ? (y(), w("nav", {
                key: 0,
                class: "library-active-filter-chips",
                "aria-label": g(m)("library", "Active filters")
              }, [
                l("span", null, p(g(m)("library", "Active filters")), 1),
                (y(!0), w(ae, null, Ce(S.value, (s) => (y(), w("a", {
                  key: s.key,
                  href: Ed(s.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(m)("library", "Remove filter")}: ${s.label}`,
                  title: s.title,
                  onClick: Pe((P) => yg(s.key), ["prevent"])
                }, [
                  l("strong", null, [
                    Te(p(s.label), 1),
                    s.displayValue ? (y(), w(ae, { key: 0 }, [
                      Te(":")
                    ], 64)) : B("", !0)
                  ]),
                  s.displayValue ? (y(), w(ae, { key: 0 }, [
                    d[105] || (d[105] = Te(p(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, p(s.displayValue), 9, dA)
                  ], 64)) : B("", !0),
                  d[106] || (d[106] = Te()),
                  d[107] || (d[107] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, uA))), 128))
              ], 8, cA)) : B("", !0),
              Ji.value ? (y(), w("section", fA, [
                l("header", hA, [
                  l("p", pA, p(g(m)("library", "Metadata cleanup")), 1),
                  l("h2", vA, p(g(m)("library", "Review")), 1),
                  l("p", null, p(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                l("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (y(!0), w(ae, null, Ce(ig.value, (s) => (y(), w("a", {
                    key: s.key,
                    class: Ae(["library-review-queue-link", { active: s.active }]),
                    href: s.href,
                    "aria-current": s.active ? "page" : void 0,
                    onClick: Pe((P) => _g(s), ["prevent"])
                  }, [
                    l("span", null, p(s.label), 1),
                    l("b", null, p(Cg(s.countKey)), 1)
                  ], 10, mA))), 128))
                ], 8, gA),
                l("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: Pe(Qt, ["prevent"])
                }, [
                  (y(!0), w(ae, null, Ce(mr.value, (s) => (y(), w("input", {
                    key: `review-${s.key}`,
                    type: "hidden",
                    name: s.key,
                    value: s.value
                  }, null, 8, yA))), 128)),
                  l("label", null, [
                    Te(p(g(m)("library", "Search within this queue")), 1),
                    Re(l("input", {
                      "onUpdate:modelValue": d[45] || (d[45] = (s) => E.q = s),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ft, E.q]
                    ])
                  ]),
                  l("button", _A, p(g(m)("library", "Apply")), 1)
                ], 40, bA),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": On.loading ? "true" : "false"
                }, [
                  On.loading ? (y(), w("span", SA, p(g(m)("library", "Loading review queue…")), 1)) : B("", !0)
                ], 8, wA),
                On.error ? (y(), w("p", CA, p(On.error), 1)) : B("", !0),
                Li.value.enabled ? (y(), w("section", TA, [
                  l("div", EA, [
                    l("p", AA, p(g(m)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, p(g(m)("library", "Review next suggestion")), 9, kA)
                  ]),
                  Li.value.item ? (y(), w("article", xA, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", OA, p(Li.value.item.title), 1)
                      ]),
                      l("span", NA, [
                        l("bdi", LA, p(Li.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", RA, [
                      (y(!0), w(ae, null, Ce(Li.value.fields, (s) => (y(), w("article", {
                        key: s.field,
                        class: "library-metadata-review-field"
                      }, [
                        l("h4", null, [
                          l("bdi", IA, p(s.field), 1)
                        ]),
                        l("dl", null, [
                          l("div", null, [
                            l("dt", null, p(g(m)("library", "Current value")), 1),
                            l("dd", null, [
                              l("bdi", PA, p(s.currentValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, p(g(m)("library", "Suggested value")), 1),
                            l("dd", null, [
                              l("bdi", $A, p(s.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, p(g(m)("library", "Path-based suggestion")), 1),
                            l("dd", null, [
                              l("bdi", FA, p(s.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, p(g(m)("library", "Sidecar value")), 1),
                            l("dd", null, [
                              l("bdi", DA, p(s.sidecarValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, p(g(m)("library", "Source")), 1),
                            l("dd", null, [
                              l("bdi", MA, p(s.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        l("form", {
                          method: "post",
                          action: Li.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Zt.value
                          }, null, 8, UA),
                          l("input", {
                            type: "hidden",
                            name: "field",
                            value: s.field
                          }, null, 8, BA),
                          d[108] || (d[108] = l("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          l("button", jA, p(g(m)("library", "Use suggested value")), 1)
                        ], 8, zA)
                      ]))), 128))
                    ]),
                    l("footer", HA, [
                      l("a", {
                        class: "button secondary",
                        href: Li.value.item.detailsUrl
                      }, p(g(m)("library", "Maintenance")), 9, VA),
                      l("a", {
                        class: "button secondary",
                        href: Li.value.skipUrl
                      }, p(g(m)("library", "Skip to next suggestion")), 9, KA)
                    ])
                  ])) : B("", !0)
                ])) : B("", !0),
                b.value.length === 0 && !On.loading && !On.error ? (y(), w("div", GA, [
                  l("h3", null, p(g(m)("library", "This review queue is clear")), 1),
                  l("p", null, p(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  l("a", {
                    class: "button primary",
                    href: Ct.value
                  }, p(g(m)("library", "Back to Library")), 9, WA)
                ])) : (y(), w("div", {
                  key: 3,
                  class: "library-review-results",
                  role: "region",
                  "aria-label": g(m)("library", "Review results")
                }, [
                  (y(!0), w(ae, null, Ce(b.value, (s) => (y(), w("article", {
                    key: s.id,
                    class: "library-review-result-card"
                  }, [
                    l("div", null, [
                      l("h3", null, [
                        l("button", {
                          type: "button",
                          class: "library-cover-title-button",
                          onClick: (P) => zn(s, P)
                        }, [
                          l("bdi", XA, p(s.title), 1)
                        ], 8, YA)
                      ]),
                      s.creators ? (y(), w("p", ZA, [
                        l("bdi", JA, p(s.creators), 1)
                      ])) : B("", !0),
                      s.scanError ? (y(), w("p", QA, [
                        l("bdi", ek, p(s.scanError), 1)
                      ])) : B("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (P) => zn(s, P)
                      }, p(g(m)("library", "Details")), 9, tk),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl
                      }, p(g(m)("library", "Open")), 9, nk)
                    ])
                  ]))), 128))
                ], 8, qA)),
                b.value.length > 0 ? (y(), w("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  M.value.previousUrl ? (y(), w("a", {
                    key: 0,
                    href: M.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, ak)) : (y(), w("span", rk, p(g(m)("library", "Previous")), 1)),
                  l("span", null, [
                    Te(p(g(m)("library", "Page")) + " " + p(M.value.page), 1),
                    M.value.total > 0 ? (y(), w("span", ok, " · " + p(M.value.from) + "–" + p(M.value.to), 1)) : B("", !0)
                  ]),
                  M.value.nextUrl ? (y(), w("a", {
                    key: 2,
                    href: M.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, sk)) : (y(), w("span", lk, p(g(m)("library", "Next")), 1))
                ], 8, ik)) : B("", !0)
              ])) : Qi.value ? (y(), w("main", ck, [
                l("header", uk, [
                  l("p", dk, p(g(m)("library", "Your library")), 1),
                  l("h2", fk, p(g(m)("library", "Home")), 1)
                ]),
                l("section", hk, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", pk, p(g(m)("library", "Continue reading")), 1),
                      l("p", vk, p(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    l("a", {
                      href: `${Ct.value}?sort=lastOpened`
                    }, p(g(m)("library", "View all")), 9, gk)
                  ]),
                  Uo.value.continueReading.length ? (y(), w("div", mk, [
                    (y(!0), w(ae, null, Ce(Uo.value.continueReading, (s) => (y(), w("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (P) => zn(s, P)
                      }, [
                        l("span", yk, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, _k)
                        ])
                      ], 8, bk),
                      l("div", wk, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (P) => zn(s, P)
                          }, [
                            l("bdi", Ck, p(s.title), 1)
                          ], 8, Sk)
                        ]),
                        s.creators ? (y(), w("p", Tk, [
                          l("bdi", Ek, p(s.creators), 1)
                        ])) : B("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl
                        }, p(g(m)("library", "Open")), 9, Ak)
                      ])
                    ]))), 128))
                  ])) : (y(), w("p", kk, p(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                l("section", xk, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", Ok, p(g(m)("library", "Recently added")), 1),
                      l("p", Nk, p(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    l("a", {
                      href: `${Ct.value}?sort=recent`
                    }, p(g(m)("library", "View all")), 9, Lk)
                  ]),
                  Uo.value.recentlyAdded.length ? (y(), w("div", Rk, [
                    (y(!0), w(ae, null, Ce(Uo.value.recentlyAdded, (s) => (y(), w("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        onClick: (P) => zn(s, P)
                      }, [
                        l("span", Pk, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, $k)
                        ])
                      ], 8, Ik),
                      l("div", Fk, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (P) => zn(s, P)
                          }, [
                            l("bdi", Mk, p(s.title), 1)
                          ], 8, Dk)
                        ]),
                        s.creators ? (y(), w("p", zk, [
                          l("bdi", Uk, p(s.creators), 1)
                        ])) : B("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl
                        }, p(g(m)("library", "Open")), 9, Bk)
                      ])
                    ]))), 128))
                  ])) : (y(), w("p", jk, p(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                l("section", Hk, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", Vk, p(g(m)("library", "Shelves")), 1),
                      l("p", Kk, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    l("a", { href: an.value }, p(g(m)("library", "View all")), 9, Gk)
                  ]),
                  ad.value.length ? (y(), w("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (y(!0), w(ae, null, Ce(ad.value, (s) => (y(), w("a", {
                      key: s.shelf,
                      href: s.url
                    }, [
                      l("strong", null, [
                        l("bdi", Yk, p(s.shelf), 1)
                      ]),
                      l("span", null, p(g(mn)("library", "%n item", "%n items", Number(s.itemCount || 0))), 1)
                    ], 8, qk))), 128))
                  ], 8, Wk)) : (y(), w("p", Xk, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(Xl.value.count || 0) > 0 ? (y(), w("aside", Zk, [
                  l("div", null, [
                    l("h3", Jk, p(g(m)("library", "Needs attention")), 1),
                    l("p", Qk, p(g(mn)("library", "%n publication needs better details.", "%n publications need better details.", Number(Xl.value.count || 0))), 1)
                  ]),
                  l("a", {
                    class: "button tertiary",
                    href: Xl.value.url
                  }, p(g(m)("library", "Review")), 9, e2)
                ])) : B("", !0)
              ])) : Ei.value ? (y(), w("main", t2, [
                l("header", n2, [
                  l("p", i2, p(g(m)("library", "Your library")), 1),
                  l("h2", a2, p(g(m)("library", "Shelves")), 1),
                  l("p", r2, p(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                rd.value.length ? (y(), w("nav", {
                  key: 0,
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  l("ul", s2, [
                    (y(!0), w(ae, null, Ce(rd.value, (s) => (y(), Be(DT, {
                      key: s.id,
                      node: s,
                      "children-url": ea.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, o2)) : (y(), w("section", l2, [
                  l("h3", null, p(g(m)("library", "Shelves")), 1),
                  l("p", c2, p(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", u2, [
                    l("a", {
                      class: "button primary",
                      href: Ci.value
                    }, p(g(m)("library", "Add a Library root")), 9, d2),
                    l("a", {
                      class: "button secondary",
                      href: Ct.value
                    }, p(g(m)("library", "All publications")), 9, f2)
                  ])
                ]))
              ])) : (y(), w("section", h2, [
                l("header", p2, [
                  xi.value ? (y(), w("p", v2, p(ur.value), 1)) : B("", !0),
                  l("h2", g2, p(Wl.value), 1)
                ]),
                l("details", {
                  class: "library-mobile-filter-panel",
                  "data-library-control": "filter",
                  onToggle: Oe
                }, [
                  l("summary", {
                    class: "library-mobile-filter-trigger",
                    "aria-label": ce.value
                  }, [
                    l("span", b2, p(g(mn)("library", "%n item", "%n items", Number(M.value.total || 0))), 1),
                    l("strong", null, p(W.value), 1)
                  ], 8, m2),
                  l("form", {
                    method: "get",
                    class: "library-mobile-filter-form",
                    "aria-label": g(m)("library", "Mobile catalogue filters"),
                    onSubmit: Pe(vd, ["prevent"])
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "folder",
                      value: E.folder
                    }, null, 8, _2),
                    (y(!0), w(ae, null, Ce(ot.value, (s) => (y(), w("input", {
                      key: `mobile-hidden-${s.key}`,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, w2))), 128)),
                    l("fieldset", S2, [
                      l("legend", null, p(g(m)("library", "Content")), 1),
                      l("label", C2, [
                        l("span", null, p(g(m)("library", "Search")), 1),
                        Re(l("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: rn,
                          "onUpdate:modelValue": d[46] || (d[46] = (s) => ue.value = s),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder")
                        }, null, 8, T2), [
                          [ft, ue.value]
                        ])
                      ]),
                      l("label", null, [
                        Te(p(g(m)("library", "Type")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[47] || (d[47] = (s) => E.type = s),
                          name: "type",
                          onChange: d[48] || (d[48] = (s) => sn(s))
                        }, [
                          l("option", E2, p(g(m)("library", "All types")), 1),
                          (y(!0), w(ae, null, Ce(N.value, (s) => (y(), w("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, p(s), 9, A2))), 128))
                        ], 544), [
                          [Wt, E.type]
                        ])
                      ]),
                      l("div", k2, [
                        l("label", x2, p(g(m)("library", "Publisher")), 1),
                        Re(l("input", {
                          id: "library-mobile-publisher-search",
                          "onUpdate:modelValue": d[49] || (d[49] = (s) => Q.value = s),
                          type: "search",
                          name: "publisherSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search publishers"),
                          title: g(m)("library", "Exact publisher matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publisher-suggestions",
                          "aria-expanded": $.value && q.value.length > 0 ? "true" : "false",
                          onFocus: d[50] || (d[50] = (s) => $.value = !0),
                          onKeydown: d[51] || (d[51] = Ze((s) => $.value = !1, ["escape"]))
                        }, null, 40, O2), [
                          [ft, Q.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: E.publisher
                        }, null, 8, N2),
                        Kt.value && $.value && q.value.length > 0 ? (y(), w("ul", L2, [
                          (y(!0), w(ae, null, Ce(q.value, (s) => (y(), w("li", {
                            key: `mobile-publisher-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: d[52] || (d[52] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => md(s, P)
                            }, p(s), 41, R2)
                          ]))), 128))
                        ])) : B("", !0)
                      ]),
                      l("div", I2, [
                        l("label", P2, p(g(m)("library", "Series / periodical")), 1),
                        Re(l("input", {
                          id: "library-mobile-publication-search",
                          "onUpdate:modelValue": d[53] || (d[53] = (s) => re.value = s),
                          type: "search",
                          name: "publicationSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search series and periodicals"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-publication-suggestions",
                          "aria-expanded": X.value && Y.value.length > 0 ? "true" : "false",
                          onFocus: d[54] || (d[54] = (s) => X.value = !0),
                          onKeydown: d[55] || (d[55] = Ze((s) => X.value = !1, ["escape"]))
                        }, null, 40, $2), [
                          [ft, re.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publication",
                          value: E.publication
                        }, null, 8, F2),
                        Kt.value && X.value && Y.value.length > 0 ? (y(), w("ul", D2, [
                          (y(!0), w(ae, null, Ce(Y.value, (s) => (y(), w("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: d[56] || (d[56] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => pd(s, P)
                            }, p(s), 41, M2)
                          ]))), 128))
                        ])) : B("", !0)
                      ]),
                      l("div", z2, [
                        l("label", U2, p(g(m)("library", "Publication year")), 1),
                        Re(l("input", {
                          id: "library-mobile-year-search",
                          "onUpdate:modelValue": d[57] || (d[57] = (s) => tt.value = s),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-year-suggestions",
                          "aria-expanded": dt.value && pn.value.length > 0 ? "true" : "false",
                          onFocus: d[58] || (d[58] = (s) => dt.value = !0),
                          onKeydown: d[59] || (d[59] = Ze((s) => dt.value = !1, ["escape"]))
                        }, null, 40, B2), [
                          [ft, tt.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "year",
                          value: E.year
                        }, null, 8, j2),
                        Kt.value && dt.value && pn.value.length > 0 ? (y(), w("ul", H2, [
                          (y(!0), w(ae, null, Ce(pn.value, (s) => (y(), w("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: d[60] || (d[60] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => Cd(s, P)
                            }, p(s), 41, V2)
                          ]))), 128))
                        ])) : B("", !0)
                      ]),
                      l("div", K2, [
                        l("label", G2, p(g(m)("library", "Creator")), 1),
                        Re(l("input", {
                          id: "library-mobile-creator-search",
                          "onUpdate:modelValue": d[61] || (d[61] = (s) => de.value = s),
                          type: "search",
                          name: "creatorSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search creators"),
                          title: g(m)("library", "Exact full-field creator matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-creator-suggestions",
                          "aria-expanded": be.value && Ve.value.length > 0 ? "true" : "false",
                          onFocus: d[62] || (d[62] = (s) => be.value = !0),
                          onKeydown: d[63] || (d[63] = Ze((s) => be.value = !1, ["escape"]))
                        }, null, 40, W2), [
                          [ft, de.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "creator",
                          value: E.creator
                        }, null, 8, q2),
                        Kt.value && be.value && Ve.value.length > 0 ? (y(), w("ul", Y2, [
                          (y(!0), w(ae, null, Ce(Ve.value, (s) => (y(), w("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: d[64] || (d[64] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => gd(s, P)
                            }, p(s), 41, X2)
                          ]))), 128))
                        ])) : B("", !0)
                      ]),
                      l("label", null, [
                        Te(p(g(m)("library", "Format")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[65] || (d[65] = (s) => E.format = s),
                          name: "format",
                          onChange: d[66] || (d[66] = (s) => sn(s))
                        }, [
                          l("option", Z2, p(g(m)("library", "All formats")), 1),
                          (y(!0), w(ae, null, Ce(A.value, (s) => (y(), w("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, p(Ma(s)), 9, J2))), 128))
                        ], 544), [
                          [Wt, E.format]
                        ])
                      ]),
                      l("div", Q2, [
                        l("label", ex, p(g(m)("library", "Subject")), 1),
                        Re(l("input", {
                          id: "library-mobile-subject-search",
                          "onUpdate:modelValue": d[67] || (d[67] = (s) => x.value = s),
                          type: "search",
                          name: "subjectSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search subjects"),
                          title: g(m)("library", "Exact subject matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-subject-suggestions",
                          "aria-expanded": L.value && U.value.length > 0 ? "true" : "false",
                          onFocus: d[68] || (d[68] = (s) => L.value = !0),
                          onKeydown: d[69] || (d[69] = Ze((s) => L.value = !1, ["escape"]))
                        }, null, 40, tx), [
                          [ft, x.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "subject",
                          value: E.subject
                        }, null, 8, nx),
                        Kt.value && L.value && U.value.length > 0 ? (y(), w("ul", ix, [
                          (y(!0), w(ae, null, Ce(U.value, (s) => (y(), w("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: d[70] || (d[70] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => Sd(s, P)
                            }, p(s), 41, ax)
                          ]))), 128))
                        ])) : B("", !0)
                      ]),
                      l("div", rx, [
                        l("label", ox, p(g(m)("library", "Classification")), 1),
                        Re(l("input", {
                          id: "library-mobile-classification-search",
                          "onUpdate:modelValue": d[71] || (d[71] = (s) => V.value = s),
                          type: "search",
                          name: "classificationSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search classifications"),
                          title: g(m)("library", "Exact classification matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-classification-suggestions",
                          "aria-expanded": pe.value && he.value.length > 0 ? "true" : "false",
                          onFocus: d[72] || (d[72] = (s) => pe.value = !0),
                          onKeydown: d[73] || (d[73] = Ze((s) => pe.value = !1, ["escape"]))
                        }, null, 40, sx), [
                          [ft, V.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "classification",
                          value: E.classification
                        }, null, 8, lx),
                        Kt.value && pe.value && he.value.length > 0 ? (y(), w("ul", cx, [
                          (y(!0), w(ae, null, Ce(he.value, (s) => (y(), w("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: d[74] || (d[74] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => bd(s, P)
                            }, p(s), 41, ux)
                          ]))), 128))
                        ])) : B("", !0)
                      ])
                    ]),
                    l("fieldset", dx, [
                      l("legend", null, p(g(m)("library", "Location")), 1),
                      l("label", null, [
                        Te(p(g(m)("library", "Shelf")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[75] || (d[75] = (s) => E.shelf = s),
                          name: "shelf",
                          onChange: d[76] || (d[76] = (s) => sn(s))
                        }, [
                          l("option", fx, p(g(m)("library", "All shelves")), 1),
                          (y(!0), w(ae, null, Ce(C.value, (s) => (y(), w("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, p(s), 9, hx))), 128))
                        ], 544), [
                          [Wt, E.shelf]
                        ])
                      ]),
                      l("div", px, [
                        l("label", vx, p(g(m)("library", "Folder")), 1),
                        Re(l("input", {
                          id: "library-mobile-folder-search",
                          "onUpdate:modelValue": d[77] || (d[77] = (s) => it.value = s),
                          type: "search",
                          name: "folderSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Type at least 3 path characters"),
                          title: g(m)("library", "Select an exact folder path"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-folder-suggestions",
                          "aria-expanded": ut.value && Rt.value.length > 0 ? "true" : "false",
                          onFocus: d[78] || (d[78] = (s) => ut.value = !0),
                          onKeydown: d[79] || (d[79] = Ze((s) => ut.value = !1, ["escape"]))
                        }, null, 40, gx), [
                          [ft, it.value]
                        ]),
                        Kt.value && ut.value && Rt.value.length > 0 ? (y(), w("ul", mx, [
                          (y(!0), w(ae, null, Ce(Rt.value, (s) => (y(), w("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: d[80] || (d[80] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => _d(s, P)
                            }, p(s), 41, bx)
                          ]))), 128))
                        ])) : B("", !0)
                      ])
                    ]),
                    l("fieldset", yx, [
                      l("legend", null, p(g(m)("library", "Review")), 1),
                      l("label", null, [
                        Te(p(g(m)("library", "Scan status")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[81] || (d[81] = (s) => E.status = s),
                          name: "status",
                          onChange: d[82] || (d[82] = (s) => sn(s))
                        }, [
                          l("option", _x, p(g(m)("library", "All scan statuses")), 1),
                          (y(!0), w(ae, null, Ce(F.value, (s) => (y(), w("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, p(s), 9, wx))), 128))
                        ], 544), [
                          [Wt, E.status]
                        ])
                      ]),
                      l("label", null, [
                        Te(p(g(m)("library", "Workflow status")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[83] || (d[83] = (s) => E.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: d[84] || (d[84] = (s) => sn(s))
                        }, [
                          l("option", Sx, p(g(m)("library", "All workflow statuses")), 1),
                          (y(!0), w(ae, null, Ce(D.value, (s) => (y(), w("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, p(s), 9, Cx))), 128))
                        ], 544), [
                          [Wt, E.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        Te(p(g(m)("library", "Suggested updates")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[85] || (d[85] = (s) => E.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: d[86] || (d[86] = (s) => sn(s))
                        }, [
                          l("option", Tx, p(g(m)("library", "All metadata")), 1),
                          l("option", Ex, p(g(m)("library", "Suggested updates")), 1)
                        ], 544), [
                          [Wt, E.scannerConflicts]
                        ])
                      ])
                    ]),
                    l("fieldset", Ax, [
                      l("legend", null, p(g(m)("library", "Personal / display")), 1),
                      l("div", kx, [
                        l("label", xx, p(g(m)("library", "Nextcloud tag")), 1),
                        Re(l("input", {
                          id: "library-tag-search",
                          "onUpdate:modelValue": d[87] || (d[87] = (s) => Fe.value = s),
                          type: "search",
                          name: "tagSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search tags"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-tag-suggestions",
                          "aria-expanded": Ke.value && vt.value.length > 0 ? "true" : "false",
                          onFocus: d[88] || (d[88] = (s) => Ke.value = !0),
                          onKeydown: d[89] || (d[89] = Ze((s) => Ke.value = !1, ["escape"]))
                        }, null, 40, Ox), [
                          [ft, Fe.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "tag",
                          value: E.tag
                        }, null, 8, Nx),
                        Ke.value && vt.value.length > 0 ? (y(), w("ul", Lx, [
                          (y(!0), w(ae, null, Ce(vt.value, (s) => (y(), w("li", {
                            key: s,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-tag-suggestion",
                              onMousedown: d[90] || (d[90] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => yd(s, P)
                            }, p(s), 41, Rx)
                          ]))), 128))
                        ])) : B("", !0),
                        l("button", Ix, p(g(m)("library", "Apply tag")), 1)
                      ]),
                      l("label", null, [
                        Te(p(g(m)("library", "Sort")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[91] || (d[91] = (s) => E.sort = s),
                          name: "sort",
                          onChange: Qt
                        }, [
                          l("option", Px, p(g(m)("library", "Title")), 1),
                          l("option", $x, p(g(m)("library", "Date added")), 1),
                          l("option", Fx, p(g(m)("library", "Publication date")), 1),
                          l("option", Dx, p(g(m)("library", "Series")), 1),
                          l("option", Mx, p(g(m)("library", "Recently opened")), 1),
                          l("option", zx, p(g(m)("library", "Format")), 1)
                        ], 544), [
                          [Wt, E.sort]
                        ])
                      ]),
                      l("label", null, [
                        Te(p(g(m)("library", "View")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[92] || (d[92] = (s) => E.view = s),
                          name: "view",
                          onChange: Qt
                        }, [
                          l("option", Ux, p(g(m)("library", "Compact")), 1),
                          l("option", Bx, p(g(m)("library", "Gallery")), 1),
                          l("option", jx, p(g(m)("library", "List")), 1),
                          l("option", Hx, p(g(m)("library", "Shelf")), 1)
                        ], 544), [
                          [Wt, E.view]
                        ])
                      ])
                    ]),
                    l("div", Vx, [
                      l("a", Kx, p(g(m)("library", "Clear all")), 1),
                      l("button", Gx, p(me.value), 1)
                    ])
                  ], 40, y2)
                ], 32),
                l("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  l("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: Pe(Qt, ["prevent"])
                  }, [
                    (y(!0), w(ae, null, Ce(Pt.value, (s) => (y(), w("input", {
                      key: s.key,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, Yx))), 128)),
                    l("label", Xx, [
                      Te(p(g(m)("library", "Sort")), 1),
                      Re(l("select", {
                        "onUpdate:modelValue": d[93] || (d[93] = (s) => E.sort = s),
                        name: "sort",
                        onChange: Qt
                      }, [
                        l("option", Zx, p(g(m)("library", "Title")), 1),
                        l("option", Jx, p(g(m)("library", "Date added")), 1),
                        l("option", Qx, p(g(m)("library", "Publication date")), 1),
                        l("option", eO, p(g(m)("library", "Series")), 1),
                        l("option", tO, p(g(m)("library", "Recently opened")), 1),
                        l("option", nO, p(g(m)("library", "Format")), 1)
                      ], 544), [
                        [Wt, E.sort]
                      ])
                    ]),
                    l("nav", {
                      class: "library-view-mode-toggle",
                      "data-library-control": "view",
                      "aria-label": g(m)("library", "View")
                    }, [
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "compact",
                        class: Ae({ active: Jt.value === "compact" }),
                        "aria-pressed": Jt.value === "compact" ? "true" : "false",
                        onClick: d[94] || (d[94] = (s) => Xo("compact"))
                      }, p(g(m)("library", "Compact")), 11, aO),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ae({ active: Jt.value === "gallery" }),
                        "aria-pressed": Jt.value === "gallery" ? "true" : "false",
                        onClick: d[95] || (d[95] = (s) => Xo("gallery"))
                      }, p(g(m)("library", "Gallery")), 11, rO),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ae({ active: Jt.value === "list" }),
                        "aria-pressed": Jt.value === "list" ? "true" : "false",
                        onClick: d[96] || (d[96] = (s) => Xo("list"))
                      }, p(g(m)("library", "List")), 11, oO),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ae({ active: Jt.value === "shelf" }),
                        "aria-pressed": Jt.value === "shelf" ? "true" : "false",
                        onClick: d[97] || (d[97] = (s) => Xo("shelf"))
                      }, p(g(m)("library", "Shelf")), 11, sO)
                    ], 8, iO)
                  ], 40, qx),
                  l("section", lO, [
                    l("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, p(g(m)("library", "Collections")), 9, cO),
                    l("form", {
                      method: "post",
                      action: Yl.value,
                      class: "library-saved-collection-save-form",
                      title: ic.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Zt.value
                      }, null, 8, dO),
                      l("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Tg.value
                      }, null, 8, fO),
                      l("label", null, [
                        Te(p(g(m)("library", "Collection name")), 1),
                        l("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !ic.value,
                          autocomplete: "off"
                        }, null, 8, hO)
                      ]),
                      l("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !ic.value,
                        title: g(m)("library", "Save current view")
                      }, p(g(m)("library", "Save")), 9, pO)
                    ], 8, uO),
                    vr.value.length > 0 ? (y(), w("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (y(!0), w(ae, null, Ce(vr.value, (s) => (y(), w("article", {
                        key: s.id,
                        class: "library-saved-collection-card"
                      }, [
                        l("a", {
                          class: "library-saved-collection-link",
                          href: Ag(s.filters)
                        }, [
                          l("strong", null, p(s.name), 1),
                          l("span", mO, p(s.countPending ? "—" : g(mn)("library", "%n item", "%n items", Number(s.count || 0))), 1)
                        ], 8, gO),
                        l("form", {
                          method: "post",
                          action: kg(s.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Zt.value
                          }, null, 8, yO),
                          l("button", _O, p(g(m)("library", "Delete")), 1)
                        ], 8, bO)
                      ]))), 128))
                    ], 8, vO)) : B("", !0)
                  ]),
                  kn.value.length > 0 ? (y(), w("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    l("summary", SO, [
                      d[109] || (d[109] = l("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      l("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, p(g(m)("library", "Batch actions")), 9, CO),
                      l("small", TO, p(g(m)("library", "Batch actions for selected publications")), 1),
                      l("b", EO, p(g(mn)("library", "%n publication selected", "%n publications selected", kn.value.length)), 1)
                    ]),
                    l("p", AO, p(g(mn)("library", "%n publication selected", "%n publications selected", kn.value.length)), 1),
                    l("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: Zv
                    }, [
                      l("form", {
                        method: "post",
                        action: Hl.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Zt.value
                        }, null, 8, xO),
                        l("label", null, [
                          l("span", null, p(g(m)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, OO)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, p(g(m)("library", "Apply")), 9, NO)
                      ], 8, kO),
                      l("form", {
                        method: "post",
                        action: Vl.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Zt.value
                        }, null, 8, RO),
                        l("label", null, [
                          l("span", null, p(g(m)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, IO)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, p(g(m)("library", "Remove")), 9, PO)
                      ], 8, LO),
                      l("form", {
                        method: "post",
                        action: Kl.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Zt.value
                        }, null, 8, FO),
                        (y(!0), w(ae, null, Ce(_t.value, (s) => (y(), w("input", {
                          key: `reset-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, DO))), 128)),
                        d[110] || (d[110] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Reset metadata")), 9, MO)
                      ], 8, $O),
                      l("form", {
                        method: "post",
                        action: Gl.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Zt.value
                        }, null, 8, UO),
                        (y(!0), w(ae, null, Ce(_t.value, (s) => (y(), w("input", {
                          key: `edit-preview-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, BO))), 128)),
                        l("label", null, [
                          l("span", null, p(g(m)("library", "Field")), 1),
                          l("select", jO, [
                            l("option", HO, p(g(m)("library", "Publication type")), 1),
                            l("option", VO, p(g(m)("library", "Subtitle")), 1),
                            l("option", KO, p(g(m)("library", "Creators")), 1),
                            l("option", GO, p(g(m)("library", "Series / periodical")), 1),
                            l("option", WO, p(g(m)("library", "Publication date")), 1),
                            l("option", qO, p(g(m)("library", "Language")), 1),
                            l("option", YO, p(g(m)("library", "Publisher")), 1),
                            l("option", XO, p(g(m)("library", "Subjects")), 1),
                            l("option", ZO, p(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, p(g(m)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, JO)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, p(g(m)("library", "Preview edit")), 9, QO)
                      ], 8, zO),
                      l("form", {
                        method: "post",
                        action: Mn.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Zt.value
                        }, null, 8, t3),
                        (y(!0), w(ae, null, Ce(_t.value, (s) => (y(), w("input", {
                          key: `cover-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, n3))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, p(g(m)("library", "Fresh covers")), 9, i3)
                      ], 8, e3)
                    ], 32)
                  ], 8, wO)) : B("", !0)
                ], 8, Wx),
                hr.value ? (y(), w("p", a3, p(hr.value), 1)) : B("", !0),
                pr.value ? (y(), w("p", r3, p(pr.value), 1)) : B("", !0),
                fr.value ? (y(), w("p", o3, p(fr.value), 1)) : B("", !0),
                xi.value ? (y(), w("section", s3, [
                  l("p", l3, p(ur.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: lr.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : An.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, p(cr.value), 9, c3),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    l("span", null, p(g(mn)("library", "%n item", "%n items", M.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (y(), w("span", d3, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : B("", !0),
                    O.value?.datedCount ? (y(), w("span", f3, p(O.value.datedCount) + " " + p(g(m)("library", "dated")), 1)) : B("", !0),
                    O.value?.undatedCount > 0 ? (y(), w("span", h3, p(O.value.undatedCount) + " " + p(g(m)("library", "undated")), 1)) : B("", !0)
                  ], 8, u3),
                  ki.value && O.value ? (y(), w("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, p(g(m)("library", "Publication contents")), 1),
                    l("span", null, p(g(mn)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (y(), w("span", v3, p(O.value.earliestYear) + "–" + p(O.value.latestYear), 1)) : B("", !0),
                    l("span", null, p(O.value.datedCount) + " " + p(g(m)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (y(), w("span", g3, p(O.value.undatedCount) + " " + p(g(m)("library", "without dates yet")), 1)) : B("", !0),
                    l("span", null, p(g(m)("library", "read-only grouping")), 1)
                  ], 8, p3)) : B("", !0),
                  ki.value && O.value?.issueGroups?.length ? (y(), w("section", m3, [
                    l("div", null, [
                      l("p", b3, p(g(m)("library", "Issue order")), 1),
                      l("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, p(g(m)("library", "Read-only issue/date grouping")), 9, y3)
                    ]),
                    l("div", {
                      class: "library-publication-issue-strip",
                      "aria-label": g(m)("library", "Visual issue strip")
                    }, [
                      (y(!0), w(ae, null, Ce(O.value.issueGroups, (s) => (y(), w("a", {
                        key: `strip-${s.label}`,
                        class: "library-issue-strip-card",
                        href: s.items?.[0]?.detailsUrl || "#"
                      }, [
                        l("span", null, p(s.label), 1),
                        l("strong", null, p(s.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        l("small", null, p(g(mn)("library", "%n item", "%n items", s.items?.length || 0)), 1)
                      ], 8, w3))), 128))
                    ], 8, _3),
                    O.value.gapRanges?.length ? (y(), w("p", S3, p(g(m)("library", "Gap")) + ": " + p(O.value.gapRanges.join(", ")), 1)) : B("", !0),
                    (y(!0), w(ae, null, Ce(O.value.issueGroups, (s) => (y(), w("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, p(s.label), 1),
                      l("ol", null, [
                        (y(!0), w(ae, null, Ce(s.items, (P, ie) => (y(), w("li", {
                          key: P.itemId
                        }, [
                          l("span", C3, p(P.issueLabel), 1),
                          l("a", {
                            href: P.detailsUrl || "#"
                          }, p(P.title), 9, T3),
                          l("small", null, [
                            Te(p(P.publicationType), 1),
                            P.publicationDate ? (y(), w(ae, { key: 0 }, [
                              Te(" · " + p(P.publicationDate), 1)
                            ], 64)) : B("", !0)
                          ]),
                          l("small", E3, [
                            ie > 0 ? (y(), w(ae, { key: 0 }, [
                              Te(p(g(m)("library", "Previous issue")), 1)
                            ], 64)) : B("", !0),
                            ie > 0 && ie < s.items.length - 1 ? (y(), w(ae, { key: 1 }, [
                              Te(" · ")
                            ], 64)) : B("", !0),
                            ie < s.items.length - 1 ? (y(), w(ae, { key: 2 }, [
                              Te(p(g(m)("library", "Next issue")), 1)
                            ], 64)) : B("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (y(), w("details", A3, [
                      l("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, p(g(m)("library", "Unknown issue/date")) + " · " + p(O.value.unknownIssueItems.length), 9, k3)
                    ])) : B("", !0)
                  ])) : B("", !0),
                  l("p", null, [
                    l("a", {
                      href: Ct.value,
                      class: "button secondary library-discovery-back-link"
                    }, p(g(m)("library", "Back to full catalogue")), 9, x3)
                  ])
                ])) : B("", !0),
                l("div", O3, [
                  l("p", N3, [
                    Te(p(g(m)("library", "Showing")) + " " + p(M.value.from) + "–" + p(M.value.to) + " " + p(g(m)("library", "of")) + " " + p(M.value.total) + " " + p(g(m)("library", "catalogue items")), 1),
                    S.value.length > 0 ? (y(), w("span", L3, [
                      d[111] || (d[111] = Te(" · ", -1)),
                      l("a", R3, p(g(m)("library", "Clear all filters")), 1)
                    ])) : B("", !0)
                  ]),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    l("span", P3, [
                      Te(p(g(m)("library", "Page")) + " " + p(M.value.page), 1),
                      M.value.total > 0 ? (y(), w("span", $3, " · " + p(M.value.from) + "–" + p(M.value.to), 1)) : B("", !0)
                    ]),
                    M.value.previousUrl ? (y(), w("a", {
                      key: 0,
                      href: M.value.previousUrl
                    }, p(g(m)("library", "Previous")), 9, F3)) : (y(), w("span", D3, p(g(m)("library", "Previous")), 1)),
                    M.value.nextUrl ? (y(), w("a", {
                      key: 2,
                      href: M.value.nextUrl
                    }, p(g(m)("library", "Next")), 9, M3)) : (y(), w("span", z3, p(g(m)("library", "Next")), 1))
                  ], 8, I3)
                ]),
                b.value.length === 0 ? (y(), w("div", {
                  key: 4,
                  class: Ae(["library-empty-content", { "library-first-run-guidance": ta.value || Oi.value, "library-filter-empty-state": Zn.value && !ta.value && !Oi.value }]),
                  role: "status"
                }, [
                  ta.value ? (y(), w(ae, { key: 0 }, [
                    l("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, p(g(m)("library", "Start with one Library root")), 9, U3),
                    l("p", B3, [
                      l("a", {
                        href: Ci.value,
                        class: "button primary"
                      }, p(g(m)("library", "Add a Library root")), 9, j3),
                      l("span", H3, p(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Oi.value ? (y(), w(ae, { key: 1 }, [
                    l("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, p(g(m)("library", "No enabled Library roots")), 9, V3),
                    l("p", K3, [
                      l("a", {
                        href: Ci.value,
                        class: "button primary"
                      }, p(g(m)("library", "Open Library settings")), 9, G3)
                    ])
                  ], 64)) : Zn.value ? (y(), w(ae, { key: 2 }, [
                    l("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, p(g(m)("library", "No matches for the current filters")), 9, W3),
                    l("p", q3, [
                      l("a", {
                        href: wg(),
                        class: "button secondary"
                      }, p(g(m)("library", "Clear search")), 9, Y3),
                      l("a", X3, p(g(m)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (y(), w(ae, { key: 3 }, [
                    l("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, p(g(m)("library", "No catalogue items yet")), 9, Z3),
                    l("p", J3, [
                      l("a", {
                        href: Ci.value,
                        class: "button primary"
                      }, p(g(m)("library", "Run a scan from settings")), 9, Q3)
                    ])
                  ], 64))
                ], 2)) : B("", !0),
                b.value.length > 0 ? (y(), w("label", eN, [
                  l("input", {
                    type: "checkbox",
                    checked: kn.value.length === b.value.length,
                    onChange: Yv
                  }, null, 40, tN),
                  Te(" " + p(g(m)("library", "Select all publications on this page")), 1)
                ])) : B("", !0),
                b.value.length > 0 && Jt.value === "list" ? (y(), w("ul", nN, [
                  (y(!0), w(ae, null, Ce(b.value, (s) => (y(), w("li", {
                    key: s.id,
                    class: Ae(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Bo.value.has(Number(s.id)), "library-catalogue-list-row--open": Ni.value && Number(na.value) === Number(s.id) }])
                  }, [
                    l("label", iN, [
                      l("input", {
                        type: "checkbox",
                        checked: Bo.value.has(Number(s.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${s.title}`,
                        onChange: (P) => od(s.id, P.currentTarget.checked)
                      }, null, 40, aN)
                    ]),
                    l("div", rN, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (P) => zn(s, P)
                      }, [
                        l("bdi", sN, p(s.title), 1)
                      ], 8, oN),
                      s.creators ? (y(), w("span", lN, [
                        l("bdi", cN, p(s.creators), 1)
                      ])) : B("", !0)
                    ]),
                    l("dl", uN, [
                      s.publication ? (y(), w("div", dN, [
                        l("dt", null, p(g(m)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", fN, p(s.publication), 1)
                        ])
                      ])) : B("", !0),
                      s.publicationDate ? (y(), w("div", hN, [
                        l("dt", null, p(g(m)("library", "Publication date")), 1),
                        l("dd", null, p(s.publicationDate), 1)
                      ])) : B("", !0),
                      s.extension || s.publicationType ? (y(), w("div", pN, [
                        l("dt", null, p(g(m)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: Ae(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, p(s.extension ? Ma(s.extension) : s.publicationType), 11, vN)
                        ])
                      ])) : B("", !0),
                      s.shelf ? (y(), w("div", gN, [
                        l("dt", null, p(g(m)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", mN, p(s.shelf), 1)
                        ])
                      ])) : B("", !0)
                    ]),
                    l("div", bN, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl
                      }, p(g(m)("library", "Open")), 9, yN),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (P) => zn(s, P)
                      }, p(g(m)("library", "Details")), 9, _N)
                    ])
                  ], 2))), 128))
                ])) : b.value.length > 0 ? (y(), w("div", {
                  key: 7,
                  class: Ae(["library-cover-gallery", zo.value])
                }, [
                  (y(!0), w(ae, null, Ce(b.value, (s) => (y(), w("article", {
                    key: s.id,
                    class: Ae(["library-cover-card", { "library-cover-card--cover-loaded": Er(s) === "loaded", "library-cover-card--cover-error": Er(s) === "error", "library-cover-card--selected": Bo.value.has(Number(s.id)), "library-cover-card--open": Ni.value && Number(na.value) === Number(s.id) }])
                  }, [
                    l("label", wN, [
                      l("input", {
                        type: "checkbox",
                        checked: Bo.value.has(Number(s.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${s.title}`,
                        onChange: (P) => od(s.id, P.currentTarget.checked)
                      }, null, 40, SN)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": Ni.value && Number(na.value) === Number(s.id) ? "true" : "false",
                      onClick: (P) => zn(s, P)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, p(g(m)("library", "Details")), 9, TN),
                      l("span", EN, [
                        Er(s) === "loading" ? (y(), w("span", AN)) : B("", !0),
                        l("img", {
                          class: Ae(["library-cover-image", { "library-cover-image--loaded": Er(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (P) => xg(s),
                          onError: (P) => Og(s)
                        }, null, 42, kN),
                        Er(s) === "error" ? (y(), w("span", xN, p(g(m)("library", "Cover unavailable")), 1)) : B("", !0)
                      ])
                    ], 8, CN),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Pe((P) => xd(s, P), ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Zt.value
                      }, null, 8, NN),
                      d[112] || (d[112] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("input", {
                        type: "hidden",
                        name: "starred",
                        value: s.starred ? "0" : "1"
                      }, null, 8, LN),
                      l("button", {
                        type: "submit",
                        class: Ae(["library-cover-star-button", { "library-cover-star-button--starred": s.starred }]),
                        "aria-pressed": s.starred ? "true" : "false",
                        title: s.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": s.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": Ar[s.id] ? "true" : void 0,
                        disabled: Ar[s.id],
                        onClick: Pe((P) => xd(s, P), ["prevent"])
                      }, p(s.starred ? "★" : "☆"), 11, RN),
                      kr[s.id] ? (y(), w("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, p(kr[s.id]), 9, IN)) : B("", !0)
                    ], 40, ON),
                    l("div", PN, [
                      l("div", $N, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (P) => zn(s, P)
                          }, [
                            l("bdi", MN, p(s.title), 1)
                          ], 8, DN)
                        ], 8, FN),
                        s.creators ? (y(), w("p", zN, [
                          l("bdi", UN, p(s.creators), 1)
                        ])) : B("", !0),
                        ac(s) || s.extension ? (y(), w("div", BN, [
                          s.extension ? (y(), w("span", jN, [
                            l("bdi", HN, p(Ma(s.extension)), 1)
                          ])) : B("", !0),
                          ac(s) ? (y(), w("p", VN, [
                            l("bdi", KN, p(ac(s)), 1)
                          ])) : B("", !0)
                        ])) : B("", !0),
                        l("div", GN, [
                          l("a", {
                            class: "library-cover-read",
                            href: s.openUrl
                          }, p(g(m)("library", "Open")), 9, WN),
                          ye(g(Hs), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: Le(() => [
                              ye(g(Va), {
                                href: s.filesUrl
                              }, {
                                default: Le(() => [
                                  Te(p(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(Va), {
                                href: s.downloadUrl
                              }, {
                                default: Le(() => [
                                  Te(p(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(Va), {
                                href: s.detailsUrl
                              }, {
                                default: Le(() => [
                                  Te(p(g(m)("library", "Maintenance")), 1)
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
                ], 2)) : B("", !0),
                b.value.length > 0 ? (y(), w("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  l("span", YN, [
                    Te(p(g(m)("library", "Page")) + " " + p(M.value.page), 1),
                    M.value.total > 0 ? (y(), w("span", XN, " · " + p(M.value.from) + "–" + p(M.value.to), 1)) : B("", !0)
                  ]),
                  M.value.previousUrl ? (y(), w("a", {
                    key: 0,
                    href: M.value.previousUrl
                  }, p(g(m)("library", "Previous")), 9, ZN)) : (y(), w("span", JN, p(g(m)("library", "Previous")), 1)),
                  M.value.nextUrl ? (y(), w("a", {
                    key: 2,
                    href: M.value.nextUrl
                  }, p(g(m)("library", "Next")), 9, QN)) : (y(), w("span", eL, p(g(m)("library", "Next")), 1))
                ], 8, qN)) : B("", !0)
              ]))
            ], 8, lA)
          ]),
          _: 1
        }),
        ye(g(cT), {
          ref_key: "sidebarComponent",
          ref: aa,
          class: "library-native-item-sidebar",
          open: Ni.value,
          "no-toggle": "",
          loading: Gt.loading,
          name: ke.value?.title || g(m)("library", "Publication details"),
          subname: ke.value?.creators || "",
          role: ra.value ? "dialog" : void 0,
          "aria-modal": ra.value ? "true" : void 0,
          "aria-labelledby": ra.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": ra.value && ke.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: fd,
          onClosed: ag,
          onClose: Wo
        }, {
          default: Le(() => [
            l("div", tL, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: sd,
                class: "hidden-visually",
                tabindex: "-1"
              }, p(ke.value?.title || g(m)("library", "Publication details")), 513),
              Gt.loading && !ke.value ? (y(), w("p", nL, p(g(m)("library", "Loading publication details…")), 1)) : Gt.error ? (y(), w("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Gt.missing ? "status" : "alert"
              }, [
                l("p", null, p(Gt.error), 1),
                Gt.missing ? B("", !0) : (y(), w("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: d[98] || (d[98] = (s) => _r(na.value, { historyMode: "none" }))
                }, p(g(m)("library", "Try again")), 1))
              ], 8, iL)) : ke.value ? (y(), w(ae, { key: 2 }, [
                l("p", aL, p(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", rL, [
                  l("span", oL, p(g(m)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: ke.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, sL),
                  l("div", lL, [
                    l("p", cL, [
                      l("bdi", uL, p(ke.value.publicationType || g(m)("library", "Publication")), 1),
                      ke.value.extension ? (y(), w("span", dL, [
                        d[113] || (d[113] = Te(" · ", -1)),
                        l("bdi", fL, p(Ma(ke.value.extension)), 1)
                      ])) : B("", !0)
                    ]),
                    l("div", hL, [
                      l("a", {
                        class: "button primary",
                        href: ke.value.openUrl
                      }, p(g(m)("library", "Open")), 9, pL),
                      ye(g(Hs), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: Le(() => [
                          ye(g(Va), {
                            href: ke.value.filesUrl
                          }, {
                            default: Le(() => [
                              Te(p(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(Va), {
                            href: ke.value.downloadUrl
                          }, {
                            default: Le(() => [
                              Te(p(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(Va), {
                            href: ke.value.detailsUrl
                          }, {
                            default: Le(() => [
                              Te(p(g(m)("library", "Maintenance (legacy)")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ])
                  ])
                ]),
                l("nav", {
                  class: "library-sidebar-sections",
                  "aria-label": g(m)("library", "Publication detail sections")
                }, [
                  (y(), w(ae, null, Ce(Qv, (s) => l("button", {
                    key: s.key,
                    type: "button",
                    class: Ae({ active: ia.value === s.key }),
                    "aria-current": ia.value === s.key ? "page" : void 0,
                    onClick: (P) => ia.value = s.key
                  }, p(g(m)("library", s.label)), 11, gL)), 64))
                ], 8, vL),
                ia.value === "overview" ? (y(), w("section", mL, [
                  l("h3", bL, p(g(m)("library", "Overview")), 1),
                  ke.value.description ? (y(), w("p", yL, [
                    l("bdi", _L, p(ke.value.description), 1)
                  ])) : B("", !0),
                  l("dl", wL, [
                    ke.value.publication ? (y(), w("div", SL, [
                      l("dt", null, p(g(m)("library", "Series")), 1),
                      l("dd", null, p(ke.value.publication), 1)
                    ])) : B("", !0),
                    ke.value.publicationDate ? (y(), w("div", CL, [
                      l("dt", null, p(g(m)("library", "Date")), 1),
                      l("dd", null, p(ke.value.publicationDate), 1)
                    ])) : B("", !0),
                    ke.value.publisher ? (y(), w("div", TL, [
                      l("dt", null, p(g(m)("library", "Publisher")), 1),
                      l("dd", null, p(ke.value.publisher), 1)
                    ])) : B("", !0),
                    ke.value.language ? (y(), w("div", EL, [
                      l("dt", null, p(g(m)("library", "Language")), 1),
                      l("dd", null, p(ke.value.language), 1)
                    ])) : B("", !0),
                    ke.value.shelf ? (y(), w("div", AL, [
                      l("dt", null, p(g(m)("library", "Shelf")), 1),
                      l("dd", null, p(ke.value.shelf), 1)
                    ])) : B("", !0)
                  ])
                ])) : ia.value === "metadata" ? (y(), w("section", kL, [
                  l("h3", xL, p(g(m)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Pe(ng, ["prevent"])
                  }, [
                    l("label", null, [
                      Te(p(g(m)("library", "Title")), 1),
                      Re(l("input", {
                        "onUpdate:modelValue": d[99] || (d[99] = (s) => $t.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ft, $t.title]
                      ])
                    ]),
                    l("label", null, [
                      Te(p(g(m)("library", "Publication date")), 1),
                      Re(l("input", {
                        "onUpdate:modelValue": d[100] || (d[100] = (s) => $t.publicationDate = s),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, OL), [
                        [ft, $t.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, p(g(m)("library", "Identifiers")), 1),
                      (y(!0), w(ae, null, Ce($t.identifiers, (s, P) => (y(), w("div", {
                        key: P,
                        class: "library-sidebar-identifier"
                      }, [
                        Re(l("input", {
                          "onUpdate:modelValue": (ie) => s.scheme = ie,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, NL), [
                          [ft, s.scheme]
                        ]),
                        Re(l("input", {
                          "onUpdate:modelValue": (ie) => s.displayValue = ie,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, LL), [
                          [ft, s.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (ie) => tg(P)
                        }, p(g(m)("library", "Remove")), 9, RL)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: eg
                      }, p(g(m)("library", "Add identifier")), 1)
                    ]),
                    l("p", IL, p(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    xn.error ? (y(), w("p", PL, p(xn.error), 1)) : xn.saved ? (y(), w("p", $L, p(g(m)("library", "Metadata saved.")), 1)) : B("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: xn.saving
                    }, p(xn.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, FL)
                  ], 32),
                  Go(ke.value).length ? (y(), w("section", DL, [
                    l("h4", ML, p(g(m)("library", "Scanner suggestions")), 1),
                    l("p", zL, p(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (y(!0), w(ae, null, Ce(Go(ke.value), (s) => (y(), w("div", {
                        key: s.field
                      }, [
                        l("dt", null, p(s.field) + " · " + p(s.sourceProvenance), 1),
                        l("dd", null, [
                          Te(p(g(m)("library", "Current")) + ": " + p(s.currentValue || "—"), 1),
                          d[114] || (d[114] = l("br", null, null, -1)),
                          Te(p(g(m)("library", "Suggestion")) + ": " + p(s.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : B("", !0)
                ])) : (y(), w("section", UL, [
                  l("h3", BL, p(g(m)("library", "Activity")), 1),
                  l("dl", jL, [
                    l("div", null, [
                      l("dt", null, p(g(m)("library", "Scan status")), 1),
                      l("dd", null, p(ke.value.scanStatus || "—"), 1)
                    ]),
                    ke.value.workflowStatus ? (y(), w("div", HL, [
                      l("dt", null, p(g(m)("library", "Workflow")), 1),
                      l("dd", null, p(ke.value.workflowStatus), 1)
                    ])) : B("", !0),
                    ke.value.metadataSource ? (y(), w("div", VL, [
                      l("dt", null, p(g(m)("library", "Metadata source")), 1),
                      l("dd", null, p(ke.value.metadataSource), 1)
                    ])) : B("", !0),
                    ke.value.cachedPath ? (y(), w("div", KL, [
                      l("dt", null, p(g(m)("library", "File")), 1),
                      l("dd", GL, [
                        ke.value.openUrl ? (y(), w("a", {
                          key: 0,
                          href: ke.value.openUrl
                        }, [
                          l("bdi", qL, p(ke.value.cachedPath), 1)
                        ], 8, WL)) : (y(), w("bdi", YL, p(ke.value.cachedPath), 1))
                      ])
                    ])) : B("", !0)
                  ])
                ])),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(m)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ho.value,
                    onClick: d[101] || (d[101] = (s) => qo(Ho.value))
                  }, p(g(m)("library", "Previous item")), 9, ZL),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Vo.value,
                    onClick: d[102] || (d[102] = (s) => qo(Vo.value))
                  }, p(g(m)("library", "Next item")), 9, JL)
                ], 8, XL)
              ], 64)) : B("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function iR() {
  window.LibraryStartupWatchdog?.fail();
}
function aR(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = zu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !aR(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  vy(nR, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  iR(), console.error("[library] Vue startup failed", e);
}
