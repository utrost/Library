// @__NO_SIDE_EFFECTS__
function Eu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const We = {}, Ya = [], Cn = () => {
}, Oh = () => !1, bl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), yl = (e) => e.startsWith("onUpdate:"), bt = Object.assign, Au = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hg = Object.prototype.hasOwnProperty, Ze = (e, t) => Hg.call(e, t), Se = Array.isArray, Hi = (e) => Ao(e) === "[object Map]", Oa = (e) => Ao(e) === "[object Set]", Fd = (e) => Ao(e) === "[object Date]", Fe = (e) => typeof e == "function", lt = (e) => typeof e == "string", Pn = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", Nh = (e) => (Je(e) || Fe(e)) && Fe(e.then) && Fe(e.catch), Lh = Object.prototype.toString, Ao = (e) => Lh.call(e), Vg = (e) => Ao(e).slice(8, -1), Rh = (e) => Ao(e) === "[object Object]", ku = (e) => lt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Kr = /* @__PURE__ */ Eu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), _l = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Kg = /-\w/g, Ht = _l(
  (e) => e.replace(Kg, (t) => t.slice(1).toUpperCase())
), Gg = /\B([A-Z])/g, bi = _l(
  (e) => e.replace(Gg, "-$1").toLowerCase()
), wl = _l((e) => e.charAt(0).toUpperCase() + e.slice(1)), lc = _l(
  (e) => e ? `on${wl(e)}` : ""
), Nt = (e, t) => !Object.is(e, t), fs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ih = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, Sl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Wg = (e) => {
  const t = lt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Dd;
const Cl = () => Dd || (Dd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vn(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = lt(i) ? Zg(i) : vn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (lt(e) || Je(e))
    return e;
}
const qg = /;(?![^(]*\))/g, Yg = /:([^]+)/, Xg = /\/\*[^]*?\*\//g;
function Zg(e) {
  const t = {};
  return e.replace(Xg, "").split(qg).forEach((n) => {
    if (n) {
      const i = n.split(Yg);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Ee(e) {
  let t = "";
  if (lt(e))
    t = e;
  else if (Se(e))
    for (let n = 0; n < e.length; n++) {
      const i = Ee(e[n]);
      i && (t += i + " ");
    }
  else if (Je(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ms(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !lt(t) && (e.class = Ee(t)), n && (e.style = vn(n)), e;
}
const Jg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qg = /* @__PURE__ */ Eu(Jg);
function Ph(e) {
  return !!e || e === "";
}
function em(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Wi(e[i], t[i]);
  return n;
}
function Md(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (!i[o] && Wi(a, n[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Wi(e, t) {
  if (e === t) return !0;
  let n = Fd(e), i = Fd(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Pn(e), i = Pn(t), n || i)
    return e === t;
  if (n = Se(e), i = Se(t), n || i)
    return n && i ? em(e, t) : !1;
  if (n = Je(e), i = Je(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Hi(e), i = Hi(t), n || i || (n = Oa(e), i = Oa(t), n || i))
      return n && i ? Md(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const c = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
      if (c && !u || !c && u || !Wi(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function tm(e, t) {
  return e.findIndex((n) => Wi(n, t));
}
const $h = (e) => !!(e && e.__v_isRef === !0), v = (e) => lt(e) ? e : e == null ? "" : Se(e) || Je(e) && (e.toString === Lh || !Fe(e.toString)) ? $h(e) ? v(e.value) : JSON.stringify(e, Fh, 2) : String(e), Fh = (e, t) => $h(t) ? Fh(e, t.value) : Hi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[cc(i, r) + " =>"] = a, n),
    {}
  )
} : Oa(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => cc(n))
} : Pn(t) ? cc(t) : Je(t) && !Se(t) && !Rh(t) ? String(t) : t, cc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function nm(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let xt;
class im {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && xt && (xt.active ? (this.parent = xt, this.index = (xt.scopes || (xt.scopes = [])).push(
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
      const n = xt;
      try {
        return xt = this, t();
      } finally {
        xt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = xt, xt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (xt === this)
        xt = this.prevScope;
      else {
        let t = xt;
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
function am() {
  return xt;
}
let st;
const uc = /* @__PURE__ */ new WeakSet();
class Dh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xt && (xt.active ? xt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, uc.has(this) && (uc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, zd(this), Uh(this);
    const t = st, n = Rn;
    st = this, Rn = !0;
    try {
      return this.fn();
    } finally {
      jh(this), st = t, Rn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Nu(t);
      this.deps = this.depsTail = void 0, zd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? uc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Gc(this) && this.run();
  }
  get dirty() {
    return Gc(this);
  }
}
let Mh = 0, Gr, Wr;
function zh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wr, Wr = e;
    return;
  }
  e.next = Gr, Gr = e;
}
function xu() {
  Mh++;
}
function Ou() {
  if (--Mh > 0)
    return;
  if (Wr) {
    let t = Wr;
    for (Wr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Gr; ) {
    let t = Gr;
    for (Gr = void 0; t; ) {
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
function Uh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function jh(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Nu(i), rm(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Gc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Bh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Bh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === so) || (e.globalVersion = so, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Gc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = st, i = Rn;
  st = e, Rn = !0;
  try {
    Uh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Nt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    st = n, Rn = i, jh(e), e.flags &= -3;
  }
}
function Nu(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Nu(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function rm(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Rn = !0;
const Hh = [];
function pi() {
  Hh.push(Rn), Rn = !1;
}
function vi() {
  const e = Hh.pop();
  Rn = e === void 0 ? !0 : e;
}
function zd(e) {
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
let so = 0;
class om {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Tl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!st || !Rn || st === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== st)
      n = this.activeLink = new om(st, this), st.deps ? (n.prevDep = st.depsTail, st.depsTail.nextDep = n, st.depsTail = n) : st.deps = st.depsTail = n, Vh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = st.depsTail, n.nextDep = void 0, st.depsTail.nextDep = n, st.depsTail = n, st.deps === n && (st.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, so++, this.notify(t);
  }
  notify(t) {
    xu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ou();
    }
  }
}
function Vh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Vh(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Wc = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ Symbol(
  ""
), qc = /* @__PURE__ */ Symbol(
  ""
), lo = /* @__PURE__ */ Symbol(
  ""
);
function Ut(e, t, n) {
  if (Rn && st) {
    let i = Wc.get(e);
    i || Wc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Tl()), a.map = i, a.key = n), a.track();
  }
}
function si(e, t, n, i, a, r) {
  const o = Wc.get(e);
  if (!o) {
    so++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (xu(), t === "clear")
    o.forEach(c);
  else {
    const u = Se(e), h = u && ku(n);
    if (u && n === "length") {
      const f = Number(i);
      o.forEach((b, C) => {
        (C === "length" || C === lo || !Pn(C) && C >= f) && c(b);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), h && c(o.get(lo)), t) {
        case "add":
          u ? h && c(o.get("length")) : (c(o.get(Aa)), Hi(e) && c(o.get(qc)));
          break;
        case "delete":
          u || (c(o.get(Aa)), Hi(e) && c(o.get(qc)));
          break;
        case "set":
          Hi(e) && c(o.get(Aa));
          break;
      }
  }
  Ou();
}
function ja(e) {
  const t = /* @__PURE__ */ Ye(e);
  return t === e ? t : (Ut(t, "iterate", lo), /* @__PURE__ */ Tn(e) ? t : t.map($n));
}
function El(e) {
  return Ut(e = /* @__PURE__ */ Ye(e), "iterate", lo), e;
}
function Kn(e, t) {
  return /* @__PURE__ */ gi(e) ? ir(/* @__PURE__ */ ka(e) ? $n(t) : t) : $n(t);
}
const sm = {
  __proto__: null,
  [Symbol.iterator]() {
    return dc(this, Symbol.iterator, (e) => Kn(this, e));
  },
  concat(...e) {
    return ja(this).concat(
      ...e.map((t) => Se(t) ? ja(t) : t)
    );
  },
  entries() {
    return dc(this, "entries", (e) => (e[1] = Kn(this, e[1]), e));
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
      (n) => n.map((i) => Kn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ei(
      this,
      "find",
      e,
      t,
      (n) => Kn(this, n),
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
      (n) => Kn(this, n),
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
    return fc(this, "includes", e);
  },
  indexOf(...e) {
    return fc(this, "indexOf", e);
  },
  join(e) {
    return ja(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return fc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ei(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Or(this, "pop");
  },
  push(...e) {
    return Or(this, "push", e);
  },
  reduce(e, ...t) {
    return Ud(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ud(this, "reduceRight", e, t);
  },
  shift() {
    return Or(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ei(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Or(this, "splice", e);
  },
  toReversed() {
    return ja(this).toReversed();
  },
  toSorted(e) {
    return ja(this).toSorted(e);
  },
  toSpliced(...e) {
    return ja(this).toSpliced(...e);
  },
  unshift(...e) {
    return Or(this, "unshift", e);
  },
  values() {
    return dc(this, "values", (e) => Kn(this, e));
  }
};
function dc(e, t, n) {
  const i = El(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ Tn(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const lm = Array.prototype;
function ei(e, t, n, i, a, r) {
  const o = El(e), c = o !== e && !/* @__PURE__ */ Tn(e), u = o[t];
  if (u !== lm[t]) {
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
function Ud(e, t, n, i) {
  const a = El(e), r = a !== e && !/* @__PURE__ */ Tn(e);
  let o = n, c = !1;
  a !== e && (r ? (c = i.length === 0, o = function(h, f, b) {
    return c && (c = !1, h = Kn(e, h)), n.call(this, h, Kn(e, f), b, e);
  }) : n.length > 3 && (o = function(h, f, b) {
    return n.call(this, h, f, b, e);
  }));
  const u = a[t](o, ...i);
  return c ? Kn(e, u) : u;
}
function fc(e, t, n) {
  const i = /* @__PURE__ */ Ye(e);
  Ut(i, "iterate", lo);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Iu(n[0]) ? (n[0] = /* @__PURE__ */ Ye(n[0]), i[t](...n)) : a;
}
function Or(e, t, n = []) {
  pi(), xu();
  const i = (/* @__PURE__ */ Ye(e))[t].apply(e, n);
  return Ou(), vi(), i;
}
const cm = /* @__PURE__ */ Eu("__proto__,__v_isRef,__isVue"), Kh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pn)
);
function um(e) {
  Pn(e) || (e = String(e));
  const t = /* @__PURE__ */ Ye(this);
  return Ut(t, "has", e), t.hasOwnProperty(e);
}
class Gh {
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
      return i === (a ? r ? _m : Xh : r ? Yh : qh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Se(t);
    if (!a) {
      let u;
      if (o && (u = sm[n]))
        return u;
      if (n === "hasOwnProperty")
        return um;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Vt(t) ? t : i
    );
    if ((Pn(n) ? Kh.has(n) : cm(n)) || (a || Ut(t, "get", n), r))
      return c;
    if (/* @__PURE__ */ Vt(c)) {
      const u = o && ku(n) ? c : c.value;
      return a && Je(u) ? /* @__PURE__ */ co(u) : u;
    }
    return Je(c) ? a ? /* @__PURE__ */ co(c) : /* @__PURE__ */ Ot(c) : c;
  }
}
class Wh extends Gh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const o = Se(t) && ku(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ gi(r);
      if (!/* @__PURE__ */ Tn(i) && !/* @__PURE__ */ gi(i) && (r = /* @__PURE__ */ Ye(r), i = /* @__PURE__ */ Ye(i)), !o && /* @__PURE__ */ Vt(r) && !/* @__PURE__ */ Vt(i))
        return h || (r.value = i), !0;
    }
    const c = o ? Number(n) < t.length : Ze(t, n), u = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Vt(t) ? t : a
    );
    return t === /* @__PURE__ */ Ye(a) && u && (c ? Nt(i, r) && si(t, "set", n, i) : si(t, "add", n, i)), u;
  }
  deleteProperty(t, n) {
    const i = Ze(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && si(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Pn(n) || !Kh.has(n)) && Ut(t, "has", n), i;
  }
  ownKeys(t) {
    return Ut(
      t,
      "iterate",
      Se(t) ? "length" : Aa
    ), Reflect.ownKeys(t);
  }
}
class dm extends Gh {
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
const fm = /* @__PURE__ */ new Wh(), hm = /* @__PURE__ */ new dm(), pm = /* @__PURE__ */ new Wh(!0);
const Yc = (e) => e, Jo = (e) => Reflect.getPrototypeOf(e);
function vm(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ Ye(a), o = Hi(r), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = a[e](...i), f = n ? Yc : t ? ir : $n;
    return !t && Ut(
      r,
      "iterate",
      u ? qc : Aa
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
function Qo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function gm(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      e || (Nt(a, c) && Ut(o, "get", a), Ut(o, "get", c));
      const { has: u } = Jo(o), h = t ? Yc : e ? ir : $n;
      if (u.call(o, a))
        return h(r.get(a));
      if (u.call(o, c))
        return h(r.get(c));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Ut(/* @__PURE__ */ Ye(a), "iterate", Aa), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ Ye(r), c = /* @__PURE__ */ Ye(a);
      return e || (Nt(a, c) && Ut(o, "has", a), Ut(o, "has", c)), a === c ? r.has(a) : r.has(a) || r.has(c);
    },
    forEach(a, r) {
      const o = this, c = o.__v_raw, u = /* @__PURE__ */ Ye(c), h = t ? Yc : e ? ir : $n;
      return !e && Ut(u, "iterate", Aa), c.forEach((f, b) => a.call(r, h(f), h(b), o));
    }
  };
  return bt(
    n,
    e ? {
      add: Qo("add"),
      set: Qo("set"),
      delete: Qo("delete"),
      clear: Qo("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ Ye(this), o = Jo(r), c = /* @__PURE__ */ Ye(a), u = !t && !/* @__PURE__ */ Tn(a) && !/* @__PURE__ */ gi(a) ? c : a;
        return o.has.call(r, u) || Nt(a, u) && o.has.call(r, a) || Nt(c, u) && o.has.call(r, c) || (r.add(u), si(r, "add", u, u)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ Tn(r) && !/* @__PURE__ */ gi(r) && (r = /* @__PURE__ */ Ye(r));
        const o = /* @__PURE__ */ Ye(this), { has: c, get: u } = Jo(o);
        let h = c.call(o, a);
        h || (a = /* @__PURE__ */ Ye(a), h = c.call(o, a));
        const f = u.call(o, a);
        return o.set(a, r), h ? Nt(r, f) && si(o, "set", a, r) : si(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ Ye(this), { has: o, get: c } = Jo(r);
        let u = o.call(r, a);
        u || (a = /* @__PURE__ */ Ye(a), u = o.call(r, a)), c && c.call(r, a);
        const h = r.delete(a);
        return u && si(r, "delete", a, void 0), h;
      },
      clear() {
        const a = /* @__PURE__ */ Ye(this), r = a.size !== 0, o = a.clear();
        return r && si(
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
    n[a] = vm(a, e, t);
  }), n;
}
function Lu(e, t) {
  const n = gm(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Ze(n, a) && a in i ? n : i,
    a,
    r
  );
}
const mm = {
  get: /* @__PURE__ */ Lu(!1, !1)
}, bm = {
  get: /* @__PURE__ */ Lu(!1, !0)
}, ym = {
  get: /* @__PURE__ */ Lu(!0, !1)
};
const qh = /* @__PURE__ */ new WeakMap(), Yh = /* @__PURE__ */ new WeakMap(), Xh = /* @__PURE__ */ new WeakMap(), _m = /* @__PURE__ */ new WeakMap();
function wm(e) {
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
function Ot(e) {
  return /* @__PURE__ */ gi(e) ? e : Ru(
    e,
    !1,
    fm,
    mm,
    qh
  );
}
// @__NO_SIDE_EFFECTS__
function Sm(e) {
  return Ru(
    e,
    !1,
    pm,
    bm,
    Yh
  );
}
// @__NO_SIDE_EFFECTS__
function co(e) {
  return Ru(
    e,
    !0,
    hm,
    ym,
    Xh
  );
}
function Ru(e, t, n, i, a) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = wm(Vg(e));
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? i : n
  );
  return a.set(e, c), c;
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
  return /* @__PURE__ */ gi(e) ? /* @__PURE__ */ ka(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function gi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Iu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Ye(t) : e;
}
function Cm(e) {
  return !Ze(e, "__v_skip") && Object.isExtensible(e) && Ih(e, "__v_skip", !0), e;
}
const $n = (e) => Je(e) ? /* @__PURE__ */ Ot(e) : e, ir = (e) => Je(e) ? /* @__PURE__ */ co(e) : e;
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function we(e) {
  return Jh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Zh(e) {
  return Jh(e, !0);
}
function Jh(e, t) {
  return /* @__PURE__ */ Vt(e) ? e : new Tm(e, t);
}
class Tm {
  constructor(t, n) {
    this.dep = new Tl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Ye(t), this._value = n ? t : $n(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ Tn(t) || /* @__PURE__ */ gi(t);
    t = i ? t : /* @__PURE__ */ Ye(t), Nt(t, n) && (this._rawValue = t, this._value = i ? t : $n(t), this.dep.trigger());
  }
}
function g(e) {
  return /* @__PURE__ */ Vt(e) ? e.value : e;
}
function di(e) {
  return Fe(e) ? e() : g(e);
}
const Em = {
  get: (e, t, n) => t === "__v_raw" ? e : g(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Vt(a) && !/* @__PURE__ */ Vt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function Qh(e) {
  return /* @__PURE__ */ ka(e) ? e : new Proxy(e, Em);
}
class Am {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Tl(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function km(e) {
  return new Am(e);
}
class xm {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Tl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = so - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return zh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Bh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Om(e, t, n = !1) {
  let i, a;
  return Fe(e) ? i = e : (i = e.get, a = e.set), new xm(i, a, n);
}
const es = {}, bs = /* @__PURE__ */ new WeakMap();
let ma;
function Nm(e, t = !1, n = ma) {
  if (n) {
    let i = bs.get(n);
    i || bs.set(n, i = []), i.push(e);
  }
}
function Lm(e, t, n = We) {
  const { immediate: i, deep: a, once: r, scheduler: o, augmentJob: c, call: u } = n, h = (E) => a ? E : /* @__PURE__ */ Tn(E) || a === !1 || a === 0 ? li(E, 1) : li(E);
  let f, b, C, A, N = !1, k = !1;
  if (/* @__PURE__ */ Vt(e) ? (b = () => e.value, N = /* @__PURE__ */ Tn(e)) : /* @__PURE__ */ ka(e) ? (b = () => h(e), N = !0) : Se(e) ? (k = !0, N = e.some((E) => /* @__PURE__ */ ka(E) || /* @__PURE__ */ Tn(E)), b = () => e.map((E) => {
    if (/* @__PURE__ */ Vt(E))
      return E.value;
    if (/* @__PURE__ */ ka(E))
      return h(E);
    if (Fe(E))
      return u ? u(E, 2) : E();
  })) : Fe(e) ? t ? b = u ? () => u(e, 2) : e : b = () => {
    if (C) {
      pi();
      try {
        C();
      } finally {
        vi();
      }
    }
    const E = ma;
    ma = f;
    try {
      return u ? u(e, 3, [A]) : e(A);
    } finally {
      ma = E;
    }
  } : b = Cn, t && a) {
    const E = b, re = a === !0 ? 1 / 0 : a;
    b = () => li(E(), re);
  }
  const O = am(), F = () => {
    f.stop(), O && O.active && Au(O.effects, f);
  };
  if (r && t) {
    const E = t;
    t = (...re) => {
      const ue = E(...re);
      return F(), ue;
    };
  }
  let D = k ? new Array(e.length).fill(es) : es;
  const M = (E) => {
    if (!(!(f.flags & 1) || !f.dirty && !E))
      if (t) {
        const re = f.run();
        if (E || a || N || (k ? re.some((ue, X) => Nt(ue, D[X])) : Nt(re, D))) {
          C && C();
          const ue = ma;
          ma = f;
          try {
            const X = [
              re,
              // pass undefined as the old value when it's changed for the first time
              D === es ? void 0 : k && D[0] === es ? [] : D,
              A
            ];
            D = re, u ? u(t, 3, X) : (
              // @ts-expect-error
              t(...X)
            );
          } finally {
            ma = ue;
          }
        }
      } else
        f.run();
  };
  return c && c(M), f = new Dh(b), f.scheduler = o ? () => o(M, !1) : M, A = (E) => Nm(E, !1, f), C = f.onStop = () => {
    const E = bs.get(f);
    if (E) {
      if (u)
        u(E, 4);
      else
        for (const re of E) re();
      bs.delete(f);
    }
  }, t ? i ? M(!0) : D = f.run() : o ? o(M.bind(null, !0), !0) : f.run(), F.pause = f.pause.bind(f), F.resume = f.resume.bind(f), F.stop = F, F;
}
function li(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Vt(e))
    li(e.value, t, n);
  else if (Se(e))
    for (let i = 0; i < e.length; i++)
      li(e[i], t, n);
  else if (Oa(e) || Hi(e))
    e.forEach((i) => {
      li(i, t, n);
    });
  else if (Rh(e)) {
    for (const i in e)
      li(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && li(e[i], t, n);
  }
  return e;
}
function ko(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Al(a, t, n);
  }
}
function En(e, t, n, i) {
  if (Fe(e)) {
    const a = ko(e, t, n, i);
    return a && Nh(a) && a.catch((r) => {
      Al(r, t, n);
    }), a;
  }
  if (Se(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(En(e[r], t, n, i));
    return a;
  }
}
function Al(e, t, n, i = !0) {
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
      pi(), ko(r, null, 10, [
        e,
        u,
        h
      ]), vi();
      return;
    }
  }
  Rm(e, n, a, i, o);
}
function Rm(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Zt = [];
let Bn = -1;
const Xa = [];
let ji = null, Ga = 0;
const ep = /* @__PURE__ */ Promise.resolve();
let ys = null;
function an(e) {
  const t = ys || ep;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Im(e) {
  let t = Bn + 1, n = Zt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Zt[i], r = uo(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Pu(e) {
  if (!(e.flags & 1)) {
    const t = uo(e), n = Zt[Zt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= uo(n) ? Zt.push(e) : Zt.splice(Im(t), 0, e), e.flags |= 1, tp();
  }
}
function tp() {
  ys || (ys = ep.then(ap));
}
function np(e) {
  if (!Se(e))
    ji && e.id === -1 ? ji.splice(Ga + 1, 0, e) : e.flags & 1 || (Xa.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Xa.push(e[t]);
  tp();
}
function jd(e, t, n = Bn + 1) {
  for (; n < Zt.length; n++) {
    const i = Zt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Zt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function ip(e) {
  if (Xa.length) {
    const t = [...new Set(Xa)].sort(
      (n, i) => uo(n) - uo(i)
    );
    if (Xa.length = 0, ji) {
      for (let n = 0; n < t.length; n++)
        ji.push(t[n]);
      return;
    }
    for (ji = t, Ga = 0; Ga < ji.length; Ga++) {
      const n = ji[Ga];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ji = null, Ga = 0;
  }
}
const uo = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ap(e) {
  try {
    for (Bn = 0; Bn < Zt.length; Bn++) {
      const t = Zt[Bn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ko(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Bn < Zt.length; Bn++) {
      const t = Zt[Bn];
      t && (t.flags &= -2);
    }
    Bn = -1, Zt.length = 0, ip(), ys = null, (Zt.length || Xa.length) && ap();
  }
}
let Rt = null, kl = null;
function _s(e) {
  const t = Rt;
  return Rt = e, kl = e && e.type.__scopeId || null, t;
}
function Pm(e) {
  kl = e;
}
function $m() {
  kl = null;
}
const Fm = (e) => Le;
function Le(e, t = Rt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && Es(-1);
    const r = _s(t), o = fi.length;
    let c;
    try {
      c = e(...a);
    } finally {
      for (let u = fi.length; u > o; u--) ju();
      _s(r), i._d && Es(1);
    }
    return c;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Re(e, t) {
  if (Rt === null)
    return e;
  const n = Il(Rt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, c, u = We] = t[a];
    r && (Fe(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && li(o), i.push({
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
function da(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const c = a[o];
    r && (c.oldValue = r[o].value);
    let u = c.dir[i];
    u && (pi(), En(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), vi());
  }
}
function _n(e, t) {
  if (Bt) {
    let n = Bt.provides;
    const i = Bt.parent && Bt.parent.provides;
    i === n && (n = Bt.provides = Object.create(i)), n[e] = t;
  }
}
function jt(e, t, n = !1) {
  const i = La();
  if (i || Ja) {
    let a = Ja ? Ja._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Fe(t) ? t.call(i && i.proxy) : t;
  }
}
const Dm = /* @__PURE__ */ Symbol.for("v-scx"), Mm = () => jt(Dm);
function zm(e, t) {
  return xl(e, null, t);
}
function Um(e, t) {
  return xl(
    e,
    null,
    { flush: "sync" }
  );
}
function qe(e, t, n) {
  return xl(e, t, n);
}
function xl(e, t, n = We) {
  const { immediate: i, deep: a, flush: r, once: o } = n, c = bt({}, n), u = t && i || !t && r !== "post";
  let h;
  if (mo) {
    if (r === "sync") {
      const A = Mm();
      h = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!u) {
      const A = () => {
      };
      return A.stop = Cn, A.resume = Cn, A.pause = Cn, A;
    }
  }
  const f = Bt;
  c.call = (A, N, k) => En(A, f, N, k);
  let b = !1;
  r === "post" ? c.scheduler = (A) => {
    Xt(A, f && f.suspense);
  } : r !== "sync" && (b = !0, c.scheduler = (A, N) => {
    N ? A() : Pu(A);
  }), c.augmentJob = (A) => {
    t && (A.flags |= 4), b && (A.flags |= 2, f && (A.id = f.uid, A.i = f));
  };
  const C = Lm(e, t, c);
  return mo && (h ? h.push(C) : u && C()), C;
}
function jm(e, t, n) {
  const i = this.proxy, a = lt(e) ? e.includes(".") ? rp(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Fe(t) ? r = t : (r = t.handler, n = t);
  const o = No(this), c = xl(a, r.bind(i), n);
  return o(), c;
}
function rp(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Mi = /* @__PURE__ */ new WeakMap(), op = /* @__PURE__ */ Symbol("_vte"), Ol = (e) => e.__isTeleport, ya = (e) => e && (e.disabled || e.disabled === ""), Bm = (e) => e && (e.defer || e.defer === ""), Bd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Hd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Xc = (e, t) => {
  const n = e && e.to;
  return lt(n) ? t ? t(n) : null : n;
}, Hm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, o, c, u, h) {
    const {
      mc: f,
      pc: b,
      pbc: C,
      o: { insert: A, querySelector: N, createText: k, createComment: O, parentNode: F }
    } = h, D = ya(t.props);
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
      const fe = ya(X.props), Y = X.target = Xc(X.props, N), se = Zc(Y, X, k, A);
      Y && (o !== "svg" && Bd(Y) ? o = "svg" : o !== "mathml" && Hd(Y) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(Y), fe || (E(X, Y, se), zr(X, !1)));
    }, ue = (X) => {
      const fe = () => {
        if (Mi.get(X) === fe) {
          if (Mi.delete(X), ya(X.props)) {
            const Y = F(X.el) || n;
            E(X, Y, X.anchor), zr(X, !0);
          }
          re(X);
        }
      };
      Mi.set(X, fe), Xt(fe, r);
    };
    if (e == null) {
      const X = t.el = k(""), fe = t.anchor = k("");
      if (A(X, n, i), A(fe, n, i), Bm(t.props) || r && r.pendingBranch) {
        ue(t);
        return;
      }
      D && (E(t, n, fe), zr(t, !0)), re();
    } else {
      t.el = e.el;
      const X = t.anchor = e.anchor, fe = Mi.get(e);
      if (fe) {
        fe.flags |= 8, Mi.delete(e), ue(t);
        return;
      }
      t.targetStart = e.targetStart;
      const Y = t.target = e.target, se = t.targetAnchor = e.targetAnchor, ge = ya(e.props), J = ge ? n : Y, Q = ge ? X : se;
      if (o === "svg" || Bd(Y) ? o = "svg" : (o === "mathml" || Hd(Y)) && (o = "mathml"), M ? (C(
        e.dynamicChildren,
        M,
        J,
        a,
        r,
        o,
        c
      ), Uu(e, t, !0)) : u || b(
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
        ge ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ts(
          t,
          n,
          X,
          h,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const $ = Xc(t.props, N);
        $ && (t.target = $, ts(
          t,
          $,
          null,
          h,
          0
        ));
      } else ge && ts(
        t,
        Y,
        se,
        h,
        1
      );
      zr(t, D);
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
    } = e, A = ya(C), N = r || !A, k = Mi.get(e);
    if (k && (k.flags |= 8, Mi.delete(e)), b && (a(h), a(f)), r && a(u), !k && (A || b) && o & 16)
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
  move: ts,
  hydrate: Vm
};
function ts(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: c, shapeFlag: u, children: h, props: f } = e, b = r === 2;
  if (b && i(o, t, n), !Mi.has(e) && (!b || ya(f)) && u & 16)
    for (let C = 0; C < h.length; C++)
      a(
        h[C],
        t,
        n,
        2
      );
  b && i(c, t, n);
}
function Vm(e, t, n, i, a, r, {
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
  const N = t.target = Xc(
    t.props,
    u
  ), k = ya(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (k ? (A(e, t), C(N, O), t.targetAnchor || Zc(
      N,
      t,
      f,
      h,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      c(e) === N ? e : null
    )) : (t.anchor = o(e), C(N, O), t.targetAnchor || Zc(N, t, f, h), b(
      O && o(O),
      t,
      N,
      n,
      i,
      a,
      r
    ))), zr(t, k);
  } else k && t.shapeFlag & 16 && (A(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const sp = Hm;
function zr(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function Zc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[op] = o, e && (i(r, e, a), i(o, e, a)), o;
}
const wn = /* @__PURE__ */ Symbol("_leaveCb"), Nr = /* @__PURE__ */ Symbol("_enterCb");
function Km() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Xi(() => {
    e.isMounted = !0;
  }), ar(() => {
    e.isUnmounting = !0;
  }), e;
}
const mn = [Function, Array], lp = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: mn,
  onEnter: mn,
  onAfterEnter: mn,
  onEnterCancelled: mn,
  // leave
  onBeforeLeave: mn,
  onLeave: mn,
  onAfterLeave: mn,
  onLeaveCancelled: mn,
  // appear
  onBeforeAppear: mn,
  onAppear: mn,
  onAfterAppear: mn,
  onAppearCancelled: mn
}, cp = (e) => {
  const t = e.subTree;
  return t.component ? cp(t.component) : t;
}, Gm = {
  name: "BaseTransition",
  props: lp,
  setup(e, { slots: t }) {
    const n = La(), i = Km();
    return () => {
      const a = t.default && fp(t.default(), !0), r = a && a.length ? up(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? z() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ Ye(e), { mode: c } = o;
      if (i.isLeaving)
        return hc(r);
      const u = ws(r);
      if (!u)
        return hc(r);
      let h = Jc(
        u,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (b) => h = b
      );
      u.type !== Lt && fo(u, h);
      let f = n.subTree && ws(n.subTree);
      if (f && f.type !== Lt && !_a(f, u) && cp(n).type !== Lt) {
        let b = Jc(
          f,
          o,
          i,
          n
        );
        if (fo(f, b), c === "out-in" && u.type !== Lt)
          return i.isLeaving = !0, b.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete b.afterLeave, f = void 0;
          }, hc(r);
        c === "in-out" && u.type !== Lt ? b.delayLeave = (C, A, N) => {
          const k = dp(
            i,
            f
          );
          k[String(f.key)] = f, C[wn] = () => {
            A(), C[wn] = void 0, delete h.delayedLeave, f = void 0;
          }, h.delayedLeave = () => {
            N(), delete h.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function up(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Lt) {
        t = n;
        break;
      }
  }
  return t;
}
const Wm = Gm;
function dp(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function Jc(e, t, n, i, a) {
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
  } = t, E = String(e.key), re = dp(n, e), ue = (Y, se) => {
    Y && En(
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
      Y[wn] && Y[wn](
        !0
        /* cancelled */
      );
      const ge = re[E];
      ge && _a(e, ge) && ge.el[wn] && ge.el[wn](), ue(se, [Y]);
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
      Y[Nr] = (U) => {
        Q || (Q = !0, U ? ue(J, [Y]) : ue(ge, [Y]), fe.delayedLeave && fe.delayedLeave(), Y[Nr] = void 0);
      };
      const $ = Y[Nr].bind(null, !1);
      se ? X(se, [Y, $]) : $();
    },
    leave(Y, se) {
      const ge = String(e.key);
      if (Y[Nr] && Y[Nr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return se();
      ue(C, [Y]);
      let J = !1;
      Y[wn] = ($) => {
        J || (J = !0, se(), $ ? ue(k, [Y]) : ue(N, [Y]), Y[wn] = void 0, re[ge] === e && delete re[ge]);
      };
      const Q = Y[wn].bind(null, !1);
      re[ge] = e, A ? X(A, [Y, Q]) : Q();
    },
    clone(Y) {
      const se = Jc(
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
function hc(e) {
  if (Nl(e))
    return e = qi(e), e.children = null, e;
}
function ws(e) {
  if (!Nl(e))
    return Ol(e.type) && e.children ? up(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Fe(n.default))
      return n.default();
  }
}
function fo(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    fo(
      Ol(n.type) && ws(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function fp(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const c = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === ae ? (o.patchFlag & 128 && a++, i = i.concat(
      fp(o.children, t, c)
    )) : (t || o.type !== Lt) && i.push(c != null ? qi(o, { key: c }) : o);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function It(e, t) {
  return Fe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    bt({ name: e.name }, t, { setup: e })
  ) : e;
}
function hp(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function qm(e) {
  const t = La(), n = /* @__PURE__ */ Zh(null);
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
function Vd(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Ss = /* @__PURE__ */ new WeakMap();
function qr(e, t, n, i, a = !1) {
  if (Se(e)) {
    e.forEach(
      (k, O) => qr(
        k,
        t && (Se(t) ? t[O] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Za(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && qr(e, t, n, i.component.subTree);
    return;
  }
  const r = i.shapeFlag & 4 ? Il(i.component) : i.el, o = a ? null : r, { i: c, r: u } = e, h = t && t.r, f = c.refs === We ? c.refs = {} : c.refs, b = c.setupState, C = /* @__PURE__ */ Ye(b), A = b === We ? Oh : (k) => Vd(f, k) ? !1 : Ze(C, k), N = (k, O) => !(O && Vd(f, O));
  if (h != null && h !== u) {
    if (Kd(t), lt(h))
      f[h] = null, A(h) && (b[h] = null);
    else if (/* @__PURE__ */ Vt(h)) {
      const k = t;
      N(h, k.k) && (h.value = null), k.k && (f[k.k] = null);
    }
  }
  if (Fe(u))
    ko(u, c, 12, [o, f]);
  else {
    const k = lt(u), O = /* @__PURE__ */ Vt(u);
    if (k || O) {
      const F = () => {
        if (e.f) {
          const D = k ? A(u) ? b[u] : f[u] : N() || !e.k ? u.value : f[e.k];
          if (a)
            Se(D) && Au(D, r);
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
          F(), Ss.delete(e);
        };
        D.id = -1, Ss.set(e, D), Xt(D, n);
      } else
        Kd(e), F();
    }
  }
}
function Kd(e) {
  const t = Ss.get(e);
  t && (t.flags |= 8, Ss.delete(e));
}
Cl().requestIdleCallback;
Cl().cancelIdleCallback;
const Za = (e) => !!e.type.__asyncLoader, Nl = (e) => e.type.__isKeepAlive;
function Ym(e, t) {
  pp(e, "a", t);
}
function Xm(e, t) {
  pp(e, "da", t);
}
function pp(e, t, n = Bt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Ll(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Nl(a.parent.vnode) && Zm(i, t, n, a), a = a.parent;
  }
}
function Zm(e, t, n, i) {
  const a = Ll(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  xo(() => {
    Au(i[t], a);
  }, n);
}
function Ll(e, t, n = Bt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      pi();
      const c = No(n), u = En(t, n, e, o);
      return c(), vi(), u;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const yi = (e) => (t, n = Bt) => {
  (!mo || e === "sp") && Ll(e, (...i) => t(...i), n);
}, vp = yi("bm"), Xi = yi("m"), gp = yi(
  "bu"
), Jm = yi("u"), ar = yi(
  "bum"
), xo = yi("um"), Qm = yi(
  "sp"
), eb = yi("rtg"), tb = yi("rtc");
function nb(e, t = Bt) {
  Ll("ec", e, t);
}
const $u = "components", ib = "directives";
function Be(e, t) {
  return Du($u, e, !0, t) || e;
}
const mp = /* @__PURE__ */ Symbol.for("v-ndc");
function Fu(e) {
  return lt(e) ? Du($u, e, !1) || e : e || mp;
}
function Gd(e) {
  return Du(ib, e);
}
function Du(e, t, n = !0, i = !1) {
  const a = Rt || Bt;
  if (a) {
    const r = a.type;
    if (e === $u) {
      const c = zb(
        r,
        !1
      );
      if (c && (c === t || c === Ht(t) || c === wl(Ht(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Wd(a[e] || r[e], t) || // global registration
      Wd(a.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function Wd(e, t) {
  return e && (e[t] || e[Ht(t)] || e[wl(Ht(t))]);
}
function Ce(e, t, n, i) {
  let a;
  const r = n, o = Se(e);
  if (o || lt(e)) {
    const c = o && /* @__PURE__ */ ka(e);
    let u = !1, h = !1;
    c && (u = !/* @__PURE__ */ Tn(e), h = /* @__PURE__ */ gi(e), e = El(e)), a = new Array(e.length);
    for (let f = 0, b = e.length; f < b; f++)
      a[f] = t(
        u ? h ? ir($n(e[f])) : $n(e[f]) : e[f],
        f,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let c = 0; c < e; c++)
      a[c] = t(c + 1, c, void 0, r);
  } else if (Je(e))
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
  if (n == null && (n = {}), Rt.ce || Rt.parent && Za(Rt.parent) && Rt.parent.ce) {
    const h = n, f = Object.keys(h).length > 0;
    return t !== "default" && (h.name = t), y(), je(
      ae,
      null,
      [ye("slot", h, i && i())],
      f ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const c = fi.length;
  y();
  let u;
  try {
    const h = o && bp(o(n)), f = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    h && h.key;
    u = je(
      ae,
      {
        key: (f && !Pn(f) ? f : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!h && i ? "_fb" : "")
      },
      h || (i ? i() : []),
      h && e._ === 1 ? 64 : -2
    );
  } catch (h) {
    for (let f = fi.length; f > c; f--) ju();
    throw h;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), u;
}
function bp(e) {
  return e.some((t) => po(t) ? !(t.type === Lt || t.type === ae && !bp(t.children)) : !0) ? e : null;
}
const Qc = (e) => e ? Up(e) ? Il(e) : Qc(e.parent) : null, Yr = (
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
    $parent: (e) => Qc(e.parent),
    $root: (e) => Qc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => wp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Pu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = an.bind(e.proxy)),
    $watch: (e) => jm.bind(e)
  })
), pc = (e, t) => e !== We && !e.__isScriptSetup && Ze(e, t), ab = {
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
        if (pc(i, t))
          return o[t] = 1, i[t];
        if (a !== We && Ze(a, t))
          return o[t] = 2, a[t];
        if (Ze(r, t))
          return o[t] = 3, r[t];
        if (n !== We && Ze(n, t))
          return o[t] = 4, n[t];
        eu && (o[t] = 0);
      }
    }
    const h = Yr[t];
    let f, b;
    if (h)
      return t === "$attrs" && Ut(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (f = c.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== We && Ze(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      b = u.config.globalProperties, Ze(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return pc(a, t) ? (a[t] = n, !0) : i !== We && Ze(i, t) ? (i[t] = n, !0) : Ze(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: o }
  }, c) {
    let u;
    return !!(n[c] || e !== We && c[0] !== "$" && Ze(e, c) || pc(t, c) || Ze(r, c) || Ze(i, c) || Ze(Yr, c) || Ze(a.config.globalProperties, c) || (u = o.__cssModules) && u[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ze(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function rb() {
  return yp().slots;
}
function ob() {
  return yp().attrs;
}
function yp(e) {
  const t = La();
  return t.setupContext || (t.setupContext = Bp(t));
}
function Cs(e) {
  return Se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function sb(e, t) {
  return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : bt({}, Cs(e), Cs(t));
}
let eu = !0;
function lb(e) {
  const t = wp(e), n = e.proxy, i = e.ctx;
  eu = !1, t.beforeCreate && qd(t.beforeCreate, e, "bc");
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
  if (h && cb(h, i, null), o)
    for (const le in o) {
      const ie = o[le];
      Fe(ie) && (i[le] = ie.bind(n));
    }
  if (a) {
    const le = a.call(n, n);
    Je(le) && (e.data = /* @__PURE__ */ Ot(le));
  }
  if (eu = !0, r)
    for (const le in r) {
      const ie = r[le], ve = Fe(ie) ? ie.bind(n, n) : Fe(ie.get) ? ie.get.bind(n, n) : Cn, de = !Fe(ie) && Fe(ie.set) ? ie.set.bind(n) : Cn, be = V({
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
      _p(c[le], i, n, le);
  if (u) {
    const le = Fe(u) ? u.call(n) : u;
    Reflect.ownKeys(le).forEach((ie) => {
      _n(ie, le[ie]);
    });
  }
  f && qd(f, e, "c");
  function q(le, ie) {
    Se(ie) ? ie.forEach((ve) => le(ve.bind(n))) : ie && le(ie.bind(n));
  }
  if (q(vp, b), q(Xi, C), q(gp, A), q(Jm, N), q(Ym, k), q(Xm, O), q(nb, fe), q(tb, ue), q(eb, X), q(ar, D), q(xo, E), q(Qm, Y), Se(se))
    if (se.length) {
      const le = e.exposed || (e.exposed = {});
      se.forEach((ie) => {
        Object.defineProperty(le, ie, {
          get: () => n[ie],
          set: (ve) => n[ie] = ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  re && e.render === Cn && (e.render = re), ge != null && (e.inheritAttrs = ge), J && (e.components = J), Q && (e.directives = Q), Y && hp(e);
}
function cb(e, t, n = Cn) {
  Se(e) && (e = tu(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Je(a) ? "default" in a ? r = jt(
      a.from || i,
      a.default,
      !0
    ) : r = jt(a.from || i) : r = jt(a), /* @__PURE__ */ Vt(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function qd(e, t, n) {
  En(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function _p(e, t, n, i) {
  let a = i.includes(".") ? rp(n, i) : () => n[i];
  if (lt(e)) {
    const r = t[e];
    Fe(r) && qe(a, r);
  } else if (Fe(e))
    qe(a, e.bind(n));
  else if (Je(e))
    if (Se(e))
      e.forEach((r) => _p(r, t, n, i));
    else {
      const r = Fe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Fe(r) && qe(a, r, e);
    }
}
function wp(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !a.length && !n && !i ? u = t : (u = {}, a.length && a.forEach(
    (h) => Ts(u, h, o, !0)
  ), Ts(u, t, o)), Je(t) && r.set(t, u), u;
}
function Ts(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Ts(e, r, n, !0), a && a.forEach(
    (o) => Ts(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const c = ub[o] || n && n[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const ub = {
  data: Yd,
  props: Xd,
  emits: Xd,
  // objects
  methods: Ur,
  computed: Ur,
  // lifecycle
  beforeCreate: Yt,
  created: Yt,
  beforeMount: Yt,
  mounted: Yt,
  beforeUpdate: Yt,
  updated: Yt,
  beforeDestroy: Yt,
  beforeUnmount: Yt,
  destroyed: Yt,
  unmounted: Yt,
  activated: Yt,
  deactivated: Yt,
  errorCaptured: Yt,
  serverPrefetch: Yt,
  // assets
  components: Ur,
  directives: Ur,
  // watch
  watch: fb,
  // provide / inject
  provide: Yd,
  inject: db
};
function Yd(e, t) {
  return t ? e ? function() {
    return bt(
      Fe(e) ? e.call(this, this) : e,
      Fe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function db(e, t) {
  return Ur(tu(e), tu(t));
}
function tu(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Yt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ur(e, t) {
  return e ? bt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xd(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : bt(
    /* @__PURE__ */ Object.create(null),
    Cs(e),
    Cs(t ?? {})
  ) : t;
}
function fb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = bt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = Yt(e[i], t[i]);
  return n;
}
function Sp() {
  return {
    app: null,
    config: {
      isNativeTag: Oh,
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
let hb = 0;
function pb(e, t) {
  return function(i, a = null) {
    Fe(i) || (i = bt({}, i)), a != null && !Je(a) && (a = null);
    const r = Sp(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const h = r.app = {
      _uid: hb++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: jb,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...b) {
        return o.has(f) || (f && Fe(f.install) ? (o.add(f), f.install(h, ...b)) : Fe(f) && (o.add(f), f(h, ...b))), h;
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
          return A.appContext = r, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(A, f, C), u = !0, h._container = f, f.__vue_app__ = h, Il(A.component);
        }
      },
      onUnmount(f) {
        c.push(f);
      },
      unmount() {
        u && (En(
          c,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(f, b) {
        return r.provides[f] = b, h;
      },
      runWithContext(f) {
        const b = Ja;
        Ja = h;
        try {
          return f();
        } finally {
          Ja = b;
        }
      }
    };
    return h;
  };
}
let Ja = null;
function Cp(e, t, n = We) {
  const i = La(), a = Ht(t), r = bi(t), o = Tp(e, a), c = km((u, h) => {
    let f, b = We, C;
    return Um(() => {
      const A = e[a];
      Nt(f, A) && (f = A, h());
    }), {
      get() {
        return u(), n.get ? n.get(f) : f;
      },
      set(A) {
        const N = n.set ? n.set(A) : A;
        if (!Nt(N, f) && !(b !== We && Nt(A, b)))
          return;
        const k = i.vnode.props, O = !!(k && // check if parent has passed v-model
        (t in k || a in k || r in k) && (`onUpdate:${t}` in k || `onUpdate:${a}` in k || `onUpdate:${r}` in k));
        O || (f = A, h()), i.emit(`update:${t}`, N), Nt(A, b) && (Nt(A, N) && !Nt(N, C) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        O && b !== We && !Nt(N, f)) && h(), b = A, C = N;
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
const Tp = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ht(t)}Modifiers`] || e[`${bi(t)}Modifiers`];
function vb(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || We;
  let a = n;
  const r = t.startsWith("update:"), o = r && Tp(i, t.slice(7));
  o && (o.trim && (a = n.map((f) => lt(f) ? f.trim() : f)), o.number && (a = a.map(Sl)));
  let c, u = i[c = lc(t)] || // also try camelCase event handler (#2249)
  i[c = lc(Ht(t))];
  !u && r && (u = i[c = lc(bi(t))]), u && En(
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
    e.emitted[c] = !0, En(
      h,
      e,
      6,
      a
    );
  }
}
const gb = /* @__PURE__ */ new WeakMap();
function Ep(e, t, n = !1) {
  const i = n ? gb : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, c = !1;
  if (!Fe(e)) {
    const u = (h) => {
      const f = Ep(h, t, !0);
      f && (c = !0, bt(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (Je(e) && i.set(e, null), null) : (Se(r) ? r.forEach((u) => o[u] = null) : bt(o, r), Je(e) && i.set(e, o), o);
}
function Rl(e, t) {
  return !e || !bl(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Ze(e, t[0].toLowerCase() + t.slice(1)) || Ze(e, bi(t)) || Ze(e, t));
}
function Zd(e) {
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
  } = e, O = _s(e);
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
      ), D = t.props ? c : mb(c);
    }
  } catch (E) {
    fi.length = 0, Al(E, e, 1), F = ye(Lt);
  }
  let M = F;
  if (D && k !== !1) {
    const E = Object.keys(D), { shapeFlag: re } = M;
    E.length && re & 7 && (r && E.some(yl) && (D = bb(
      D,
      r
    )), M = qi(M, D, !1, !0));
  }
  if (n.dirs && (M = qi(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const E = Ol(M.type) && ws(M) || M;
    fo(E, n.transition);
  }
  return F = M, _s(O), F;
}
const mb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || bl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, bb = (e, t) => {
  const n = {};
  for (const i in e)
    (!yl(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function yb(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: o, children: c, patchFlag: u } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return i ? Jd(i, o, h) : !!o;
    if (u & 8) {
      const f = t.dynamicProps;
      for (let b = 0; b < f.length; b++) {
        const C = f[b];
        if (Ap(o, i, C) && !Rl(h, C))
          return !0;
      }
    }
  } else
    return (a || c) && (!c || !c.$stable) ? !0 : i === o ? !1 : i ? o ? Jd(i, o, h) : !0 : !!o;
  return !1;
}
function Jd(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (Ap(t, e, r) && !Rl(n, r))
      return !0;
  }
  return !1;
}
function Ap(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Je(i) && Je(a) ? !Wi(i, a) : i !== a;
}
function _b({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const kp = {}, xp = () => Object.create(kp), Op = (e) => Object.getPrototypeOf(e) === kp;
function wb(e, t, n, i = !1) {
  const a = {}, r = xp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Np(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Sm(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Sb(e, t, n, i) {
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
        if (Rl(e.emitsOptions, C))
          continue;
        const A = t[C];
        if (u)
          if (Ze(r, C))
            A !== r[C] && (r[C] = A, h = !0);
          else {
            const N = Ht(C);
            a[N] = nu(
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
    Np(e, t, a, r) && (h = !0);
    let f;
    for (const b in c)
      (!t || // for camelCase
      !Ze(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = bi(b)) === b || !Ze(t, f))) && (u ? n && // for camelCase
      (n[b] !== void 0 || // for kebab-case
      n[f] !== void 0) && (a[b] = nu(
        u,
        c,
        b,
        void 0,
        e,
        !0
      )) : delete a[b]);
    if (r !== c)
      for (const b in r)
        (!t || !Ze(t, b)) && (delete r[b], h = !0);
  }
  h && si(e.attrs, "set", "");
}
function Np(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (Kr(u))
        continue;
      const h = t[u];
      let f;
      a && Ze(a, f = Ht(u)) ? !r || !r.includes(f) ? n[f] = h : (c || (c = {}))[f] = h : Rl(e.emitsOptions, u) || (!(u in i) || h !== i[u]) && (i[u] = h, o = !0);
    }
  if (r) {
    const u = /* @__PURE__ */ Ye(n), h = c || We;
    for (let f = 0; f < r.length; f++) {
      const b = r[f];
      n[b] = nu(
        a,
        u,
        b,
        h[b],
        e,
        !Ze(h, b)
      );
    }
  }
  return o;
}
function nu(e, t, n, i, a, r) {
  const o = e[n];
  if (o != null) {
    const c = Ze(o, "default");
    if (c && i === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && Fe(u)) {
        const { propsDefaults: h } = a;
        if (n in h)
          i = h[n];
        else {
          const f = No(a);
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
    ] && (i === "" || i === bi(n)) && (i = !0));
  }
  return i;
}
const Cb = /* @__PURE__ */ new WeakMap();
function Lp(e, t, n = !1) {
  const i = n ? Cb : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, c = [];
  let u = !1;
  if (!Fe(e)) {
    const f = (b) => {
      u = !0;
      const [C, A] = Lp(b, t, !0);
      bt(o, C), A && c.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !u)
    return Je(e) && i.set(e, Ya), Ya;
  if (Se(r))
    for (let f = 0; f < r.length; f++) {
      const b = Ht(r[f]);
      Qd(b) && (o[b] = We);
    }
  else if (r)
    for (const f in r) {
      const b = Ht(f);
      if (Qd(b)) {
        const C = r[f], A = o[b] = Se(C) || Fe(C) ? { type: C } : bt({}, C), N = A.type;
        let k = !1, O = !0;
        if (Se(N))
          for (let F = 0; F < N.length; ++F) {
            const D = N[F], M = Fe(D) && D.name;
            if (M === "Boolean") {
              k = !0;
              break;
            } else M === "String" && (O = !1);
          }
        else
          k = Fe(N) && N.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = k, A[
          1
          /* shouldCastTrue */
        ] = O, (k || Ze(A, "default")) && c.push(b);
      }
    }
  const h = [o, c];
  return Je(e) && i.set(e, h), h;
}
function Qd(e) {
  return e[0] !== "$" && !Kr(e);
}
const Mu = (e) => e === "_" || e === "_ctx" || e === "$stable", zu = (e) => Se(e) ? e.map(Gn) : [Gn(e)], Tb = (e, t, n) => {
  if (t._n)
    return t;
  const i = Le((...a) => zu(t(...a)), n);
  return i._c = !1, i;
}, Rp = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Mu(a)) continue;
    const r = e[a];
    if (Fe(r))
      t[a] = Tb(a, r, i);
    else if (r != null) {
      const o = zu(r);
      t[a] = () => o;
    }
  }
}, Ip = (e, t) => {
  const n = zu(t);
  e.slots.default = () => n;
}, Pp = (e, t, n) => {
  for (const i in t)
    (n || !Mu(i)) && (e[i] = t[i]);
}, Eb = (e, t, n) => {
  const i = e.slots = xp();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Pp(i, t, n), n && Ih(i, "_", a, !0)) : Rp(t, i);
  } else t && Ip(e, t);
}, Ab = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, o = We;
  if (i.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? r = !1 : Pp(a, t, n) : (r = !t.$stable, Rp(t, a)), o = t;
  } else t && (Ip(e, t), o = { default: 1 });
  if (r)
    for (const c in a)
      !Mu(c) && o[c] == null && delete a[c];
}, Xt = Lb;
function kb(e) {
  return xb(e);
}
function xb(e, t) {
  const n = Cl();
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
    setScopeId: A = Cn,
    insertStaticContent: N
  } = e, k = (_, T, x, L = null, R = null, j = null, G = void 0, K = null, Z = !!T.dynamicChildren) => {
    if (_ === T)
      return;
    _ && !_a(_, T) && (L = it(_), _e(_, R, j, !0), _ = null), T.patchFlag === -2 && (Z = !1, T.dynamicChildren = null);
    const { type: H, ref: he, shapeFlag: oe } = T;
    switch (H) {
      case Oo:
        O(_, T, x, L);
        break;
      case Lt:
        F(_, T, x, L);
        break;
      case hs:
        _ == null && D(T, x, L, G);
        break;
      case ae:
        J(
          _,
          T,
          x,
          L,
          R,
          j,
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
          j,
          G,
          K,
          Z
        ) : oe & 6 ? Q(
          _,
          T,
          x,
          L,
          R,
          j,
          G,
          K,
          Z
        ) : (oe & 64 || oe & 128) && H.process(
          _,
          T,
          x,
          L,
          R,
          j,
          G,
          K,
          Z,
          Pt
        );
    }
    he != null && R ? qr(he, _ && _.ref, j, T || _, !T) : he == null && _ && _.ref != null && qr(_.ref, null, j, _, !0);
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
  }, re = (_, T, x, L, R, j, G, K, Z) => {
    if (T.type === "svg" ? G = "svg" : T.type === "math" && (G = "mathml"), _ == null)
      ue(
        T,
        x,
        L,
        R,
        j,
        G,
        K,
        Z
      );
    else {
      const H = _.el && _.el._isVueCE ? _.el : null;
      try {
        H && H._beginPatch(), Y(
          _,
          T,
          R,
          j,
          G,
          K,
          Z
        );
      } finally {
        H && H._endPatch();
      }
    }
  }, ue = (_, T, x, L, R, j, G, K) => {
    let Z, H;
    const { props: he, shapeFlag: oe, transition: pe, dirs: Ae } = _;
    if (Z = _.el = o(
      _.type,
      j,
      he && he.is,
      he
    ), oe & 8 ? f(Z, _.children) : oe & 16 && fe(
      _.children,
      Z,
      null,
      L,
      R,
      vc(_, j),
      G,
      K
    ), Ae && da(_, null, L, "created"), X(Z, _, _.scopeId, G, L), he) {
      for (const ze in he)
        ze !== "value" && !Kr(ze) && r(Z, ze, null, he[ze], j, L);
      "value" in he && r(Z, "value", null, he.value, j), (H = he.onVnodeBeforeMount) && jn(H, L, _);
    }
    Ae && da(_, null, L, "beforeMount");
    const Ie = Ob(R, pe);
    Ie && pe.beforeEnter(Z), i(Z, T, x), ((H = he && he.onVnodeMounted) || Ie || Ae) && Xt(() => {
      H && jn(H, L, _), Ie && pe.enter(Z), Ae && da(_, null, L, "mounted");
    }, R);
  }, X = (_, T, x, L, R) => {
    if (x && A(_, x), L)
      for (let j = 0; j < L.length; j++)
        A(_, L[j]);
    if (R) {
      let j = R.subTree;
      if (T === j || Dp(j.type) && (j.ssContent === T || j.ssFallback === T)) {
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
  }, fe = (_, T, x, L, R, j, G, K, Z = 0) => {
    for (let H = Z; H < _.length; H++) {
      const he = _[H] = K ? oi(_[H]) : Gn(_[H]);
      k(
        null,
        he,
        T,
        x,
        L,
        R,
        j,
        G,
        K
      );
    }
  }, Y = (_, T, x, L, R, j, G) => {
    const K = T.el = _.el;
    let { patchFlag: Z, dynamicChildren: H, dirs: he } = T;
    Z |= _.patchFlag & 16;
    const oe = _.props || We, pe = T.props || We;
    let Ae;
    if (x && fa(x, !1), (Ae = pe.onVnodeBeforeUpdate) && jn(Ae, x, T, _), he && da(T, _, x, "beforeUpdate"), x && fa(x, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    H && (!_.dynamicChildren || _.dynamicChildren.length !== H.length) && (Z = 0, G = !1, H = null), (oe.innerHTML && pe.innerHTML == null || oe.textContent && pe.textContent == null) && f(K, ""), H ? se(
      _.dynamicChildren,
      H,
      K,
      x,
      L,
      vc(T, R),
      j
    ) : G || ie(
      _,
      T,
      K,
      null,
      x,
      L,
      vc(T, R),
      j,
      !1
    ), Z > 0) {
      if (Z & 16)
        ge(K, oe, pe, x, R);
      else if (Z & 2 && oe.class !== pe.class && r(K, "class", null, pe.class, R), Z & 4 && r(K, "style", oe.style, pe.style, R), Z & 8) {
        const Ie = T.dynamicProps;
        for (let ze = 0; ze < Ie.length; ze++) {
          const $e = Ie[ze], He = oe[$e], rt = pe[$e];
          (rt !== He || $e === "value") && r(K, $e, He, rt, R, x);
        }
      }
      Z & 1 && _.children !== T.children && f(K, T.children);
    } else !G && H == null && ge(K, oe, pe, x, R);
    ((Ae = pe.onVnodeUpdated) || he) && Xt(() => {
      Ae && jn(Ae, x, T, _), he && da(T, _, x, "updated");
    }, L);
  }, se = (_, T, x, L, R, j, G) => {
    for (let K = 0; K < T.length; K++) {
      const Z = _[K], H = T[K], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Z.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Z.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_a(Z, H) || // - In the case of a component, it could contain anything.
        Z.shapeFlag & 198) ? b(Z.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          x
        )
      );
      k(
        Z,
        H,
        he,
        null,
        L,
        R,
        j,
        G,
        !0
      );
    }
  }, ge = (_, T, x, L, R) => {
    if (T !== x) {
      if (T !== We)
        for (const j in T)
          !Kr(j) && !(j in x) && r(
            _,
            j,
            T[j],
            null,
            R,
            L
          );
      for (const j in x) {
        if (Kr(j)) continue;
        const G = x[j], K = T[j];
        G !== K && j !== "value" && r(_, j, K, G, R, L);
      }
      "value" in x && r(_, "value", T.value, x.value, R);
    }
  }, J = (_, T, x, L, R, j, G, K, Z) => {
    const H = T.el = _ ? _.el : c(""), he = T.anchor = _ ? _.anchor : c("");
    let { patchFlag: oe, dynamicChildren: pe, slotScopeIds: Ae } = T;
    Ae && (K = K ? K.concat(Ae) : Ae), _ == null ? (i(H, x, L), i(he, x, L), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      T.children || [],
      x,
      he,
      R,
      j,
      G,
      K,
      Z
    )) : oe > 0 && oe & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    _.dynamicChildren && _.dynamicChildren.length === pe.length ? (se(
      _.dynamicChildren,
      pe,
      x,
      R,
      j,
      G,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (T.key != null || R && T === R.subTree) && Uu(
      _,
      T,
      !0
      /* shallow */
    )) : ie(
      _,
      T,
      x,
      he,
      R,
      j,
      G,
      K,
      Z
    );
  }, Q = (_, T, x, L, R, j, G, K, Z) => {
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
      j,
      G,
      Z
    ) : U(_, T, Z);
  }, $ = (_, T, x, L, R, j, G) => {
    const K = _.component = $b(
      _,
      L,
      R
    );
    if (Nl(_) && (K.ctx.renderer = Pt), Fb(K, !1, G), K.asyncDep) {
      if (R && R.registerDep(K, q, G), !_.el) {
        const Z = K.subTree = ye(Lt);
        F(null, Z, T, x), _.placeholder = Z.el;
      }
    } else
      q(
        K,
        _,
        T,
        x,
        R,
        j,
        G
      );
  }, U = (_, T, x) => {
    const L = T.component = _.component;
    if (yb(_, T, x))
      if (L.asyncDep && !L.asyncResolved) {
        le(L, T, x);
        return;
      } else
        L.next = T, L.update();
    else
      T.el = _.el, L.vnode = T;
  }, q = (_, T, x, L, R, j, G) => {
    const K = () => {
      if (_.isMounted) {
        let { next: oe, bu: pe, u: Ae, parent: Ie, vnode: ze } = _;
        {
          const At = $p(_);
          if (At) {
            oe && (oe.el = ze.el, le(_, oe, G)), At.asyncDep.then(() => {
              Xt(() => {
                _.isUnmounted || H();
              }, R);
            });
            return;
          }
        }
        let $e = oe, He;
        fa(_, !1), oe ? (oe.el = ze.el, le(_, oe, G)) : oe = ze, pe && fs(pe), (He = oe.props && oe.props.onVnodeBeforeUpdate) && jn(He, Ie, oe, ze), fa(_, !0);
        const rt = Zd(_), vt = _.subTree;
        _.subTree = rt, k(
          vt,
          rt,
          // parent may have changed if it's in a teleport
          b(vt.el),
          // anchor may have changed if it's in a fragment
          it(vt),
          _,
          R,
          j
        ), oe.el = rt.el, $e === null && _b(_, rt.el), Ae && Xt(Ae, R), (He = oe.props && oe.props.onVnodeUpdated) && Xt(
          () => jn(He, Ie, oe, ze),
          R
        );
      } else {
        let oe;
        const { el: pe, props: Ae } = T, { bm: Ie, m: ze, parent: $e, root: He, type: rt } = _, vt = Za(T);
        fa(_, !1), Ie && fs(Ie), !vt && (oe = Ae && Ae.onVnodeBeforeMount) && jn(oe, $e, T), fa(_, !0);
        {
          He.ce && He.ce._hasShadowRoot() && He.ce._injectChildStyle(
            rt,
            _.parent ? _.parent.type : void 0
          );
          const At = _.subTree = Zd(_);
          k(
            null,
            At,
            x,
            L,
            _,
            R,
            j
          ), T.el = At.el;
        }
        if (ze && Xt(ze, R), !vt && (oe = Ae && Ae.onVnodeMounted)) {
          const At = T;
          Xt(
            () => jn(oe, $e, At),
            R
          );
        }
        (T.shapeFlag & 256 || $e && Za($e.vnode) && $e.vnode.shapeFlag & 256) && _.a && Xt(_.a, R), _.isMounted = !0, T = x = L = null;
      }
    };
    _.scope.on();
    const Z = _.effect = new Dh(K);
    _.scope.off();
    const H = _.update = Z.run.bind(Z), he = _.job = Z.runIfDirty.bind(Z);
    he.i = _, he.id = _.uid, Z.scheduler = () => Pu(he), fa(_, !0), H();
  }, le = (_, T, x) => {
    T.component = _;
    const L = _.vnode.props;
    _.vnode = T, _.next = null, Sb(_, T.props, L, x), Ab(_, T.children, x), pi(), jd(_), vi();
  }, ie = (_, T, x, L, R, j, G, K, Z = !1) => {
    const H = _ && _.children, he = _ ? _.shapeFlag : 0, oe = T.children, { patchFlag: pe, shapeFlag: Ae } = T;
    if (pe > 0) {
      if (pe & 128) {
        de(
          H,
          oe,
          x,
          L,
          R,
          j,
          G,
          K,
          Z
        );
        return;
      } else if (pe & 256) {
        ve(
          H,
          oe,
          x,
          L,
          R,
          j,
          G,
          K,
          Z
        );
        return;
      }
    }
    Ae & 8 ? (he & 16 && pt(H, R, j), oe !== H && f(x, oe)) : he & 16 ? Ae & 16 ? de(
      H,
      oe,
      x,
      L,
      R,
      j,
      G,
      K,
      Z
    ) : pt(H, R, j, !0) : (he & 8 && f(x, ""), Ae & 16 && fe(
      oe,
      x,
      L,
      R,
      j,
      G,
      K,
      Z
    ));
  }, ve = (_, T, x, L, R, j, G, K, Z) => {
    _ = _ || Ya, T = T || Ya;
    const H = _.length, he = T.length, oe = Math.min(H, he);
    let pe;
    for (pe = 0; pe < oe; pe++) {
      const Ae = T[pe] = Z ? oi(T[pe]) : Gn(T[pe]);
      k(
        _[pe],
        Ae,
        x,
        null,
        R,
        j,
        G,
        K,
        Z
      );
    }
    H > he ? pt(
      _,
      R,
      j,
      !0,
      !1,
      oe
    ) : fe(
      T,
      x,
      L,
      R,
      j,
      G,
      K,
      Z,
      oe
    );
  }, de = (_, T, x, L, R, j, G, K, Z) => {
    let H = 0;
    const he = T.length;
    let oe = _.length - 1, pe = he - 1;
    for (; H <= oe && H <= pe; ) {
      const Ae = _[H], Ie = T[H] = Z ? oi(T[H]) : Gn(T[H]);
      if (_a(Ae, Ie))
        k(
          Ae,
          Ie,
          x,
          null,
          R,
          j,
          G,
          K,
          Z
        );
      else
        break;
      H++;
    }
    for (; H <= oe && H <= pe; ) {
      const Ae = _[oe], Ie = T[pe] = Z ? oi(T[pe]) : Gn(T[pe]);
      if (_a(Ae, Ie))
        k(
          Ae,
          Ie,
          x,
          null,
          R,
          j,
          G,
          K,
          Z
        );
      else
        break;
      oe--, pe--;
    }
    if (H > oe) {
      if (H <= pe) {
        const Ae = pe + 1, Ie = Ae < he ? T[Ae].el : L;
        for (; H <= pe; )
          k(
            null,
            T[H] = Z ? oi(T[H]) : Gn(T[H]),
            x,
            Ie,
            R,
            j,
            G,
            K,
            Z
          ), H++;
      }
    } else if (H > pe)
      for (; H <= oe; )
        _e(_[H], R, j, !0), H++;
    else {
      const Ae = H, Ie = H, ze = /* @__PURE__ */ new Map();
      for (H = Ie; H <= pe; H++) {
        const et = T[H] = Z ? oi(T[H]) : Gn(T[H]);
        et.key != null && ze.set(et.key, H);
      }
      let $e, He = 0;
      const rt = pe - Ie + 1;
      let vt = !1, At = 0;
      const $t = new Array(rt);
      for (H = 0; H < rt; H++) $t[H] = 0;
      for (H = Ae; H <= oe; H++) {
        const et = _[H];
        if (He >= rt) {
          _e(et, R, j, !0);
          continue;
        }
        let dt;
        if (et.key != null)
          dt = ze.get(et.key);
        else
          for ($e = Ie; $e <= pe; $e++)
            if ($t[$e - Ie] === 0 && _a(et, T[$e])) {
              dt = $e;
              break;
            }
        dt === void 0 ? _e(et, R, j, !0) : ($t[dt - Ie] = H + 1, dt >= At ? At = dt : vt = !0, k(
          et,
          T[dt],
          x,
          null,
          R,
          j,
          G,
          K,
          Z
        ), He++);
      }
      const An = vt ? Nb($t) : Ya;
      for ($e = An.length - 1, H = rt - 1; H >= 0; H--) {
        const et = Ie + H, dt = T[et], Fn = T[et + 1], gn = et + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Fn.el || Fp(Fn)
        ) : L;
        $t[H] === 0 ? k(
          null,
          dt,
          x,
          gn,
          R,
          j,
          G,
          K,
          Z
        ) : vt && ($e < 0 || H !== An[$e] ? be(dt, x, gn, 2) : $e--);
      }
    }
  }, be = (_, T, x, L, R = null) => {
    const { el: j, type: G, transition: K, children: Z, shapeFlag: H } = _;
    if (H & 6) {
      be(_.component.subTree, T, x, L);
      return;
    }
    if (H & 128) {
      _.suspense.move(T, x, L);
      return;
    }
    if (H & 64) {
      G.move(_, T, x, Pt);
      return;
    }
    if (G === ae) {
      i(j, T, x);
      for (let oe = 0; oe < Z.length; oe++)
        be(Z[oe], T, x, L);
      i(_.anchor, T, x);
      return;
    }
    if (G === hs) {
      M(_, T, x);
      return;
    }
    if (L !== 2 && H & 1 && K)
      if (L === 0)
        K.persisted && !j[wn] ? i(j, T, x) : (K.beforeEnter(j), i(j, T, x), Xt(() => K.enter(j), R));
      else {
        const { leave: oe, delayLeave: pe, afterLeave: Ae } = K, Ie = () => {
          _.ctx.isUnmounted ? a(j) : i(j, T, x);
        }, ze = () => {
          const $e = j._isLeaving || !!j[wn];
          j._isLeaving && j[wn](
            !0
            /* cancelled */
          ), K.persisted && !$e ? Ie() : oe(j, () => {
            Ie(), Ae && Ae();
          });
        };
        pe ? pe(j, Ie, ze) : ze();
      }
    else
      i(j, T, x);
  }, _e = (_, T, x, L = !1, R = !1) => {
    const {
      type: j,
      props: G,
      ref: K,
      children: Z,
      dynamicChildren: H,
      shapeFlag: he,
      patchFlag: oe,
      dirs: pe,
      cacheIndex: Ae,
      memo: Ie
    } = _;
    if (oe === -2 && (R = !1), K != null && (pi(), qr(K, null, x, _, !0), vi()), Ae != null && (T.renderCache[Ae] = void 0), he & 256) {
      T.ctx.deactivate(_);
      return;
    }
    const ze = he & 1 && pe, $e = !Za(_);
    let He;
    if ($e && (He = G && G.onVnodeBeforeUnmount) && jn(He, T, _), he & 6)
      ct(_.component, x, L);
    else {
      if (he & 128) {
        _.suspense.unmount(x, L);
        return;
      }
      ze && da(_, null, T, "beforeUnmount"), he & 64 ? _.type.remove(
        _,
        T,
        x,
        Pt,
        L
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (j !== ae || oe > 0 && oe & 64) ? pt(
        H,
        T,
        x,
        !1,
        !0
      ) : (j === ae && oe & 384 || !R && he & 16) && pt(Z, T, x), L && Ke(_);
    }
    const rt = Ie != null && Ae == null;
    ($e && (He = G && G.onVnodeUnmounted) || ze || rt) && Xt(() => {
      He && jn(He, T, _), ze && da(_, null, T, "unmounted"), rt && (_.el = null);
    }, x);
  }, Ke = (_) => {
    const { type: T, el: x, anchor: L, transition: R } = _;
    if (T === ae) {
      Oe(x, L);
      return;
    }
    if (T === hs) {
      E(_);
      return;
    }
    const j = () => {
      a(x), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (_.shapeFlag & 1 && R && !R.persisted) {
      const { leave: G, delayLeave: K } = R, Z = () => G(x, j);
      K ? K(_.el, j, Z) : Z();
    } else
      j();
  }, Oe = (_, T) => {
    let x;
    for (; _ !== T; )
      x = C(_), a(_), _ = x;
    a(T);
  }, ct = (_, T, x) => {
    const { bum: L, scope: R, job: j, subTree: G, um: K, m: Z, a: H } = _;
    ef(Z), ef(H), L && fs(L), R.stop(), j && (j.flags |= 8, _e(G, _, T, x)), K && Xt(K, T), Xt(() => {
      _.isUnmounted = !0;
    }, T);
  }, pt = (_, T, x, L = !1, R = !1, j = 0) => {
    for (let G = j; G < _.length; G++)
      _e(_[G], T, x, L, R);
  }, it = (_) => {
    if (_.shapeFlag & 6)
      return it(_.component.subTree);
    if (_.shapeFlag & 128)
      return _.suspense.next();
    const T = C(_.anchor || _.el), x = T && T[op];
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
    ), T._vnode = _, ut || (ut = !0, jd(L), ip(), ut = !1);
  }, Pt = {
    p: k,
    um: _e,
    m: be,
    r: Ke,
    mt: $,
    mc: fe,
    pc: ie,
    pbc: se,
    n: it,
    o: e
  };
  return {
    render: at,
    hydrate: void 0,
    createApp: pb(at)
  };
}
function vc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function fa({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ob(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Uu(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Se(i) && Se(a))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let c = a[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = a[r] = oi(a[r]), c.el = o.el), !n && c.patchFlag !== -2 && Uu(o, c)), c.type === Oo && (c.patchFlag === -1 && (c = a[r] = oi(c)), c.el = o.el), c.type === Lt && !c.el && (c.el = o.el);
    }
}
function Nb(e) {
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
function $p(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : $p(t);
}
function ef(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fp(t.subTree) : null;
}
const Dp = (e) => e.__isSuspense;
function Lb(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : np(e);
}
const ae = /* @__PURE__ */ Symbol.for("v-fgt"), Oo = /* @__PURE__ */ Symbol.for("v-txt"), Lt = /* @__PURE__ */ Symbol.for("v-cmt"), hs = /* @__PURE__ */ Symbol.for("v-stc"), fi = [];
let pn = null;
function y(e = !1) {
  fi.push(pn = e ? null : []);
}
function ju() {
  fi.pop(), pn = fi[fi.length - 1] || null;
}
let ho = 1;
function Es(e, t = !1) {
  ho += e, e < 0 && pn && t && (pn.hasOnce = !0);
}
function Mp(e) {
  return e.dynamicChildren = ho > 0 ? pn || Ya : null, ju(), ho > 0 && pn && pn.push(e), e;
}
function w(e, t, n, i, a, r) {
  return Mp(
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
function je(e, t, n, i, a) {
  return Mp(
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
function po(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function _a(e, t) {
  return e.type === t.type && e.key === t.key;
}
const zp = ({ key: e }) => e ?? null, ps = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? lt(e) || /* @__PURE__ */ Vt(e) || Fe(e) ? { i: Rt, r: e, k: t, f: !!n } : e : null);
function l(e, t = null, n = null, i = 0, a = null, r = e === ae ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && zp(t),
    ref: t && ps(t),
    scopeId: kl,
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
    ctx: Rt
  };
  return c ? (As(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= lt(n) ? 8 : 16), ho > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  pn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && pn.push(u), u;
}
const ye = Rb;
function Rb(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === mp) && (e = Lt), po(e)) {
    const c = qi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && As(c, n), ho > 0 && !r && pn && (c.shapeFlag & 6 ? pn[pn.indexOf(e)] = c : pn.push(c)), c.patchFlag = -2, c;
  }
  if (Ub(e) && (e = e.__vccOpts), t) {
    t = vo(t);
    let { class: c, style: u } = t;
    c && !lt(c) && (t.class = Ee(c)), Je(u) && (/* @__PURE__ */ Iu(u) && !Se(u) && (u = bt({}, u)), t.style = vn(u));
  }
  const o = lt(e) ? 1 : Dp(e) ? 128 : Ol(e) ? 64 : Je(e) ? 4 : Fe(e) ? 2 : 0;
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
function vo(e) {
  return e ? /* @__PURE__ */ Iu(e) || Op(e) ? bt({}, e) : e : null;
}
function qi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: o, children: c, transition: u } = e, h = t ? Kt(a || {}, t) : a, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && zp(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Se(r) ? r.concat(ps(t)) : [r, ps(t)] : ps(t)
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
    ssContent: e.ssContent && qi(e.ssContent),
    ssFallback: e.ssFallback && qi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && i && fo(
    f,
    u.clone(f)
  ), f;
}
function Te(e = " ", t = 0) {
  return ye(Oo, null, e, t);
}
function z(e = "", t = !1) {
  return t ? (y(), je(Lt, null, e)) : ye(Lt, null, e);
}
function Gn(e) {
  return e == null || typeof e == "boolean" ? ye(Lt) : Se(e) ? ye(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : po(e) ? oi(e) : ye(Oo, null, String(e));
}
function oi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : qi(e);
}
function As(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), As(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Op(t) ? t._ctx = Rt : a === 3 && Rt && (Rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Fe(t)) {
    if (i & 65) {
      As(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Rt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Te(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Kt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Ee([t.class, i.class]));
      else if (a === "style")
        t.style = vn([t.style, i.style]);
      else if (bl(a)) {
        const r = t[a], o = i[a];
        o && r !== o && !(Se(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !yl(a) && (t[a] = o);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function jn(e, t, n, i = null) {
  En(e, t, 7, [
    n,
    i
  ]);
}
const Ib = Sp();
let Pb = 0;
function $b(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Ib, r = {
    uid: Pb++,
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
    scope: new im(
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
    propsOptions: Lp(i, a),
    emitsOptions: Ep(i, a),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = vb.bind(null, r), e.ce && e.ce(r), r;
}
let Bt = null;
const La = () => Bt || Rt;
let ks, go;
{
  const e = Cl(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  ks = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Bt = n
  ), go = t(
    "__VUE_SSR_SETTERS__",
    (n) => mo = n
  );
}
const No = (e) => {
  const t = Bt;
  return ks(e), e.scope.on(), () => {
    e.scope.off(), ks(t);
  };
}, tf = () => {
  Bt && Bt.scope.off(), ks(null);
};
function Up(e) {
  return e.vnode.shapeFlag & 4;
}
let mo = !1;
function Fb(e, t = !1, n = !1) {
  t && go(t);
  const { props: i, children: a } = e.vnode, r = Up(e);
  wb(e, i, r, t), Eb(e, a, n || t);
  const o = r ? Db(e, t) : void 0;
  return t && go(!1), o;
}
function Db(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ab);
  const { setup: i } = n;
  if (i) {
    pi();
    const a = e.setupContext = i.length > 1 ? Bp(e) : null, r = No(e), o = ko(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), c = Nh(o);
    if (vi(), r(), (c || e.sp) && !Za(e) && hp(e), c) {
      if (o.then(tf, tf), t)
        return o.then((u) => {
          go(!0);
          try {
            nf(e, u, t);
          } finally {
            go(!1);
          }
        }).catch((u) => {
          Al(u, e, 0);
        });
      e.asyncDep = o;
    } else
      nf(e, o);
  } else
    jp(e);
}
function nf(e, t, n) {
  Fe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = Qh(t)), jp(e);
}
function jp(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Cn);
  {
    const a = No(e);
    pi();
    try {
      lb(e);
    } finally {
      vi(), a();
    }
  }
}
const Mb = {
  get(e, t) {
    return Ut(e, "get", ""), e[t];
  }
};
function Bp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Mb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Il(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Qh(Cm(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Yr)
        return Yr[n](e);
    },
    has(t, n) {
      return n in t || n in Yr;
    }
  })) : e.proxy;
}
function zb(e, t = !0) {
  return Fe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ub(e) {
  return Fe(e) && "__vccOpts" in e;
}
const V = (e, t) => /* @__PURE__ */ Om(e, t, mo);
function tn(e, t, n) {
  try {
    Es(-1);
    const i = arguments.length;
    return i === 2 ? Je(t) && !Se(t) ? po(t) ? ye(e, null, [t]) : ye(e, t) : ye(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && po(n) && (n = [n]), ye(e, t, n));
  } finally {
    Es(1);
  }
}
const jb = "3.5.42", Bb = Cn;
let iu;
const af = typeof window < "u" && window.trustedTypes;
if (af)
  try {
    iu = /* @__PURE__ */ af.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Hp = iu ? (e) => iu.createHTML(e) : (e) => e, Hb = "http://www.w3.org/2000/svg", Vb = "http://www.w3.org/1998/Math/MathML", ri = typeof document < "u" ? document : null, rf = ri && /* @__PURE__ */ ri.createElement("template"), Kb = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? ri.createElementNS(Hb, e) : t === "mathml" ? ri.createElementNS(Vb, e) : n ? ri.createElement(e, { is: n }) : ri.createElement(e);
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
    const o = n ? n.previousSibling : t.lastChild;
    if (a && (a === r || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === r || !(a = a.nextSibling)); )
        ;
    else {
      rf.innerHTML = Hp(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const c = rf.content;
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
}, $i = "transition", Lr = "animation", bo = /* @__PURE__ */ Symbol("_vtc"), Vp = {
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
}, Gb = /* @__PURE__ */ bt(
  {},
  lp,
  Vp
), Wb = (e) => (e.displayName = "Transition", e.props = Gb, e), qb = /* @__PURE__ */ Wb(
  (e, { slots: t }) => tn(Wm, Yb(e), t)
), ha = (e, t = []) => {
  Se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, of = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Yb(e) {
  const t = {};
  for (const J in e)
    J in Vp || (t[J] = e[J]);
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
  } = e, N = Xb(a), k = N && N[0], O = N && N[1], {
    onBeforeEnter: F,
    onEnter: D,
    onEnterCancelled: M,
    onLeave: E,
    onLeaveCancelled: re,
    onBeforeAppear: ue = F,
    onAppear: X = D,
    onAppearCancelled: fe = M
  } = t, Y = (J, Q, $, U) => {
    J._enterCancelled = U, pa(J, Q ? f : c), pa(J, Q ? h : o), $ && $();
  }, se = (J, Q) => {
    J._isLeaving = !1, pa(J, b), pa(J, A), pa(J, C), Q && Q();
  }, ge = (J) => (Q, $) => {
    const U = J ? X : D, q = () => Y(Q, J, $);
    ha(U, [Q, q]), sf(() => {
      pa(Q, J ? u : r), ti(Q, J ? f : c), of(U) || lf(Q, i, k, q);
    });
  };
  return bt(t, {
    onBeforeEnter(J) {
      ha(F, [J]), ti(J, r), ti(J, o);
    },
    onBeforeAppear(J) {
      ha(ue, [J]), ti(J, u), ti(J, h);
    },
    onEnter: ge(!1),
    onAppear: ge(!0),
    onLeave(J, Q) {
      J._isLeaving = !0;
      const $ = () => se(J, Q);
      ti(J, b), J._enterCancelled ? (ti(J, C), df(J)) : (df(J), ti(J, C)), sf(() => {
        J._isLeaving && (pa(J, b), ti(J, A), of(E) || lf(J, i, O, $));
      }), ha(E, [J, $]);
    },
    onEnterCancelled(J) {
      Y(J, !1, void 0, !0), ha(M, [J]);
    },
    onAppearCancelled(J) {
      Y(J, !0, void 0, !0), ha(fe, [J]);
    },
    onLeaveCancelled(J) {
      se(J), ha(re, [J]);
    }
  });
}
function Xb(e) {
  if (e == null)
    return null;
  if (Je(e))
    return [gc(e.enter), gc(e.leave)];
  {
    const t = gc(e);
    return [t, t];
  }
}
function gc(e) {
  return Wg(e);
}
function ti(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[bo] || (e[bo] = /* @__PURE__ */ new Set())).add(t);
}
function pa(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[bo];
  n && (n.delete(t), n.size || (e[bo] = void 0));
}
function sf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Zb = 0;
function lf(e, t, n, i) {
  const a = e._endId = ++Zb, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: c, propCount: u } = Jb(e, t);
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
function Jb(e, t) {
  const n = window.getComputedStyle(e), i = (N) => (n[N] || "").split(", "), a = i(`${$i}Delay`), r = i(`${$i}Duration`), o = cf(a, r), c = i(`${Lr}Delay`), u = i(`${Lr}Duration`), h = cf(c, u);
  let f = null, b = 0, C = 0;
  t === $i ? o > 0 && (f = $i, b = o, C = r.length) : t === Lr ? h > 0 && (f = Lr, b = h, C = u.length) : (b = Math.max(o, h), f = b > 0 ? o > h ? $i : Lr : null, C = f ? f === $i ? r.length : u.length : 0);
  const A = f === $i && /\b(?:transform|all)(?:,|$)/.test(
    i(`${$i}Property`).toString()
  );
  return {
    type: f,
    timeout: b,
    propCount: C,
    hasTransform: A
  };
}
function cf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, i) => uf(n) + uf(e[i])));
}
function uf(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function df(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Qb(e, t, n) {
  const i = e[bo];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const xs = /* @__PURE__ */ Symbol("_vod"), Kp = /* @__PURE__ */ Symbol("_vsh"), Qa = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[xs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Rr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), Rr(e, !0), i.enter(e)) : i.leave(e, () => {
      Rr(e, !1);
    }) : Rr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Rr(e, t);
  }
};
function Rr(e, t) {
  e.style.display = t ? e[xs] : "none", e[Kp] = !t;
}
const Gp = /* @__PURE__ */ Symbol("");
function ey(e) {
  const t = La();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Os(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Os(t.ce, a) : au(t.subTree, a), n(a);
  };
  gp(() => {
    np(i);
  }), Xi(() => {
    qe(i, Cn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), xo(() => a.disconnect());
  });
}
function au(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      au(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Os(e.el, t);
  else if (e.type === ae)
    e.children.forEach((n) => au(n, t));
  else if (e.type === hs) {
    let { el: n, anchor: i } = e;
    for (; n && (Os(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Os(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = nm(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[Gp] = i;
  }
}
const ty = /(?:^|;)\s*display\s*:/;
function ny(e, t, n) {
  const i = e.style, a = lt(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (lt(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          n[c] == null && jr(i, c, "");
        }
      else
        for (const o in t)
          n[o] == null && jr(i, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const c = n[o];
      c != null ? ay(
        e,
        o,
        !lt(t) && t ? t[o] : void 0,
        c
      ) || jr(i, o, c) : jr(i, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = i[Gp];
      o && (n += ";" + o), i.cssText = n, r = ty.test(n);
    }
  } else t && e.removeAttribute("style");
  xs in e && (e[xs] = r ? i.display : "", e[Kp] && (i.display = "none"));
}
const ns = /\s*!important$/;
function jr(e, t, n) {
  if (Se(n))
    n.forEach((i) => jr(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    ns.test(n) ? e.setProperty(t, n.replace(ns, ""), "important") : e.setProperty(t, n);
  else {
    const i = iy(e, t);
    ns.test(n) ? e.setProperty(
      bi(i),
      n.replace(ns, ""),
      "important"
    ) : e[i] = n;
  }
}
const ff = ["Webkit", "Moz", "ms"], mc = {};
function iy(e, t) {
  const n = mc[t];
  if (n)
    return n;
  let i = Ht(t);
  if (i !== "filter" && i in e)
    return mc[t] = i;
  i = wl(i);
  for (let a = 0; a < ff.length; a++) {
    const r = ff[a] + i;
    if (r in e)
      return mc[t] = r;
  }
  return t;
}
function ay(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && lt(i) && n === i;
}
const hf = "http://www.w3.org/1999/xlink";
function pf(e, t, n, i, a, r = Qg(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(hf, t.slice(6, t.length)) : e.setAttributeNS(hf, t, n) : n == null || r && !Ph(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Pn(n) ? String(n) : n
  );
}
function vf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Hp(n) : n);
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
    c === "boolean" ? n = Ph(n) : n == null && c === "string" ? (n = "", o = !0) : c === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function wa(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function ry(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const gf = /* @__PURE__ */ Symbol("_vei");
function oy(e, t, n, i, a = null) {
  const r = e[gf] || (e[gf] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [c, u] = cy(t);
    if (i) {
      const h = r[t] = fy(
        i,
        a
      );
      wa(e, c, h, u);
    } else o && (ry(e, c, o, u), r[t] = void 0);
  }
}
const sy = /(Once|Passive|Capture)$/, ly = /^on:?(?:Once|Passive|Capture)$/;
function cy(e) {
  let t, n;
  for (; (n = e.match(sy)) && !ly.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : bi(e.slice(2)), t];
}
let bc = 0;
const uy = /* @__PURE__ */ Promise.resolve(), dy = () => bc || (uy.then(() => bc = 0), bc = Date.now());
function fy(e, t) {
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
        h && En(
          h,
          t,
          5,
          c
        );
      }
    } else
      En(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = dy(), n;
}
const mf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hy = (e, t, n, i, a, r) => {
  const o = a === "svg";
  t === "class" ? Qb(e, i, o) : t === "style" ? ny(e, n, i) : bl(t) ? yl(t) || oy(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : py(e, t, i, o)) ? (vf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pf(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (vy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !lt(i))) ? vf(e, Ht(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), pf(e, t, i, o));
};
function py(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mf(t) && Fe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return mf(t) && lt(n) ? !1 : t in e;
}
function vy(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Ht(t);
  return Array.isArray(n) ? n.some((a) => Ht(a) === i) : Object.keys(n).some((a) => Ht(a) === i);
}
const Ns = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (n) => fs(t, n) : t;
};
function gy(e) {
  e.target.composing = !0;
}
function bf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ca = /* @__PURE__ */ Symbol("_assign"), is = /* @__PURE__ */ Symbol("_initialValue");
function yc(e, t, n) {
  return t && (e = e.trim()), n && (e = Sl(e)), e;
}
const ft = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[is] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[is] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Ca] = Ns(a);
    const r = i || a.props && a.props.type === "number";
    wa(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Ca](yc(e.value, n, r));
    }), (n || r) && wa(e, "change", () => {
      e.value = yc(e.value, n, r);
    }), t || (wa(e, "compositionstart", gy), wa(e, "compositionend", bf), wa(e, "change", bf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[is];
    delete e[is], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[Ca](yc(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, o) {
    if (e[Ca] = Ns(o), e.composing) return;
    const c = (r || e.type === "number") && !/^0\d/.test(e.value) ? Sl(e.value) : e.value, u = t ?? "";
    if (c === u)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === u) || (e.value = u);
  }
}, qt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, wa(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (u) => u.selected).map(
        (u) => n ? Sl(Ls(u)) : Ls(u)
      ), r = e.multiple, o = r ? Oa(e._modelValue) ? new Set(a) : a : a[0], c = e._pendingValue = [
        r,
        r ? Se(o) ? a.slice() : a : o
      ];
      try {
        e[Ca](o);
      } finally {
        an(() => {
          e._pendingValue === c && (e._pendingValue = void 0);
        });
      }
    }), e[Ca] = Ns(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    yf(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Ca] = Ns(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !my(t, n[1], n[0])) && yf(e, t);
  }
};
function my(e, t, n) {
  if (!n || Se(e)) return Wi(e, t);
  if (Oa(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function yf(e, t) {
  const n = e.multiple, i = Se(t);
  if (!(n && !i && !Oa(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], c = Ls(o);
      if (n)
        if (i) {
          const u = typeof c;
          u === "string" || u === "number" ? o.selected = t.some((h) => String(h) === String(c)) : o.selected = tm(t, c) > -1;
        } else
          o.selected = t.has(c);
      else if (Wi(Ls(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Ls(e) {
  return "_value" in e ? e._value : e.value;
}
const by = ["ctrl", "shift", "alt", "meta"], yy = {
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
  exact: (e, t) => by.some((n) => e[`${n}Key`] && !t.includes(n))
}, Pe = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const c = yy[t[o]];
      if (c && c(a, t)) return;
    }
    return e(a, ...r);
  }));
}, _y = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, nt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = bi(a.key);
    if (t.some(
      (o) => o === r || _y[o] === r
    ))
      return e(a);
  }));
}, wy = /* @__PURE__ */ bt({ patchProp: hy }, Kb);
let _f;
function Sy() {
  return _f || (_f = kb(wy));
}
const Cy = ((...e) => {
  const t = Sy().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Ey(i);
    if (!a) return;
    const r = t._component;
    !Fe(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, Ty(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function Ty(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ey(e) {
  return lt(e) ? document.querySelector(e) : e;
}
function Bu(e, t, n) {
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
function wf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Ay(e) {
  if (Array.isArray(e)) return e;
}
function ky(e, t) {
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
function xy() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Oy(e, t) {
  return Ay(e) || ky(e, t) || Ny(e, t) || xy();
}
function Ny(e, t) {
  if (e) {
    if (typeof e == "string") return wf(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? wf(e, t) : void 0;
  }
}
const Wp = Object.entries, Sf = Object.setPrototypeOf, Ly = Object.isFrozen, Ry = Object.getPrototypeOf, Iy = Object.getOwnPropertyDescriptor;
let St = Object.freeze, Et = Object.seal, Wa = Object.create, qp = typeof Reflect < "u" && Reflect, ru = qp.apply, ou = qp.construct;
St || (St = function(t) {
  return t;
});
Et || (Et = function(t) {
  return t;
});
ru || (ru = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
ou || (ou = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const ba = yt(Array.prototype.forEach), Py = yt(Array.prototype.lastIndexOf), Cf = yt(Array.prototype.pop), Ir = yt(Array.prototype.push), $y = yt(Array.prototype.splice), er = Array.isArray, Br = yt(String.prototype.toLowerCase), _c = yt(String.prototype.toString), Tf = yt(String.prototype.match), Pr = yt(String.prototype.replace), Ef = yt(String.prototype.indexOf), Fy = yt(String.prototype.trim), Dy = yt(Number.prototype.toString), My = yt(Boolean.prototype.toString), Af = typeof BigInt > "u" ? null : yt(BigInt.prototype.toString), kf = typeof Symbol > "u" ? null : yt(Symbol.prototype.toString), nn = yt(Object.prototype.hasOwnProperty), $r = yt(Object.prototype.toString), Mt = yt(RegExp.prototype.test), va = zy(TypeError);
function yt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return ru(e, t, i);
  };
}
function zy(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return ou(e, n);
  };
}
function Ge(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Br;
  if (Sf && Sf(e, null), !er(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Ly(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function Uy(e) {
  for (let t = 0; t < e.length; t++)
    nn(e, t) || (e[t] = null);
  return e;
}
function fn(e) {
  const t = Wa(null);
  for (const i of Wp(e)) {
    var n = Oy(i, 2);
    const a = n[0], r = n[1];
    nn(e, a) && (er(r) ? t[a] = Uy(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = fn(r) : t[a] = r);
  }
  return t;
}
function jy(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Dy(e);
    case "boolean":
      return My(e);
    case "bigint":
      return Af ? Af(e) : "0";
    case "symbol":
      return kf ? kf(e) : "Symbol()";
    case "undefined":
      return $r(e);
    case "function":
    case "object": {
      if (e === null)
        return $r(e);
      const t = e, n = Nn(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : $r(i);
      }
      return $r(e);
    }
    default:
      return $r(e);
  }
}
function Nn(e, t) {
  for (; e !== null; ) {
    const i = Iy(e, t);
    if (i) {
      if (i.get)
        return yt(i.get);
      if (typeof i.value == "function")
        return yt(i.value);
    }
    e = Ry(e);
  }
  function n() {
    return null;
  }
  return n;
}
function By(e) {
  try {
    return Mt(e, ""), !0;
  } catch {
    return !1;
  }
}
const xf = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), wc = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Sc = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Hy = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Cc = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Vy = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Of = St(["#text"]), Nf = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Tc = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Lf = St(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), as = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ky = Et(/{{[\w\W]*|^[\w\W]*}}/g), Gy = Et(/<%[\w\W]*|^[\w\W]*%>/g), Wy = Et(/\${[\w\W]*/g), qy = Et(/^data-[\-\w.\u00B7-\uFFFF]+$/), Yy = Et(/^aria-[\-\w]+$/), Rf = Et(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Xy = Et(/^(?:\w+script|data):/i), Zy = Et(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Jy = Et(/^html$/i), Qy = Et(/^[a-z][.\w]*(-[.\w]+)+$/i), If = Et(/<[/\w!]/g), Pf = Et(/<[/\w]/g), e_ = Et(/<\/no(script|embed|frames)/i), t_ = Et(/\/>/i), un = {
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
}, Yp = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], n_ = St(Ge({}, Yp)), i_ = (function() {
  const e = {};
  return ba(Yp, (t) => {
    e[t] = Et(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), St(e);
})(), a_ = function() {
  return typeof window > "u" ? null : window;
}, r_ = function(t, n) {
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
}, $f = function() {
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
}, Fi = function(t, n, i, a) {
  return nn(t, n) && er(t[n]) ? Ge(a.base ? fn(a.base) : {}, t[n], a.transform) : i;
}, Ec = function(t, n, i) {
  const a = nn(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? fn(a) : i();
};
function Xp() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a_();
  const t = (ee) => Xp(ee);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== un.document || !e.Element)
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
      throw va('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(S) {
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
    return J || (ge = r_(b, a), J = !0), ge;
  }, ie = n, ve = ie.implementation, de = ie.createNodeIterator, be = ie.createDocumentFragment, _e = ie.getElementsByTagName, Ke = i.importNode;
  let Oe = $f();
  t.isSupported = typeof Wp == "function" && typeof F == "function" && ve && ve.createHTMLDocument !== void 0;
  const ct = Ky, pt = Gy, it = Wy, ut = qy, at = Yy, Pt = Xy, B = Zy, _ = Qy;
  let T = Rf, x = null;
  const L = Ge({}, [...xf, ...wc, ...Sc, ...Cc, ...Of]);
  let R = null;
  const j = Ge({}, [...Nf, ...Tc, ...Lf, ...as]);
  let G = Object.seal(Wa(null, {
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
  const H = Object.seal(Wa(null, {
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
  let he = !0, oe = !0, pe = !1, Ae = !0, Ie = !1, ze = !0, $e = !1, He = !1, rt = null, vt = null, At = !1, $t = !1, An = !1, et = !1, dt = !0, Fn = !1;
  const gn = "user-content-";
  let Qi = !0, _i = !1, Dn = {}, wi = null;
  const rr = Ge({}, [
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
  const Si = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ci = null;
  const Ti = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ct = "http://www.w3.org/1998/Math/MathML", Ia = "http://www.w3.org/2000/svg", rn = "http://www.w3.org/1999/xhtml";
  let Ei = rn, ea = !1, Pa = null;
  const ta = Ge({}, [Ct, Ia, rn], _c), Ai = St(["mi", "mo", "mn", "ms", "mtext"]);
  let or = Ge({}, Ai);
  const Ro = St(["annotation-xml"]);
  let Jt = Ge({}, Ro);
  const Io = Ge({}, ["title", "style", "font", "a", "script"]);
  let na = null;
  const jl = ["application/xhtml+xml", "text/html"], Bl = "text/html";
  let ht = null, ki = null;
  const Hl = n.createElement("form"), Po = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, sr = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ki && ki === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = fn(S), na = // eslint-disable-next-line unicorn/prefer-includes
    jl.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? Bl : S.PARSER_MEDIA_TYPE, ht = na === "application/xhtml+xml" ? _c : Br, x = Fi(S, "ALLOWED_TAGS", L, {
      transform: ht
    }), R = Fi(S, "ALLOWED_ATTR", j, {
      transform: ht
    }), Pa = Fi(S, "ALLOWED_NAMESPACES", ta, {
      transform: _c
    }), Ci = Fi(S, "ADD_URI_SAFE_ATTR", Ti, {
      transform: ht,
      base: Ti
    }), Xn = Fi(S, "ADD_DATA_URI_TAGS", Si, {
      transform: ht,
      base: Si
    }), wi = Fi(S, "FORBID_CONTENTS", rr, {
      transform: ht
    }), K = Fi(S, "FORBID_TAGS", fn({}), {
      transform: ht
    }), Z = Fi(S, "FORBID_ATTR", fn({}), {
      transform: ht
    }), Dn = nn(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? fn(S.USE_PROFILES) : S.USE_PROFILES : !1, he = S.ALLOW_ARIA_ATTR !== !1, oe = S.ALLOW_DATA_ATTR !== !1, pe = S.ALLOW_UNKNOWN_PROTOCOLS || !1, Ae = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ie = S.SAFE_FOR_TEMPLATES || !1, ze = S.SAFE_FOR_XML !== !1, $e = S.WHOLE_DOCUMENT || !1, $t = S.RETURN_DOM || !1, An = S.RETURN_DOM_FRAGMENT || !1, et = S.RETURN_TRUSTED_TYPE || !1, At = S.FORCE_BODY || !1, dt = S.SANITIZE_DOM !== !1, Fn = S.SANITIZE_NAMED_PROPS || !1, Qi = S.KEEP_CONTENT !== !1, _i = S.IN_PLACE || !1, T = By(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : Rf, Ei = typeof S.NAMESPACE == "string" ? S.NAMESPACE : rn, or = Ec(
      S,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, Ai)
      // Default built-in map
    ), Jt = Ec(
      S,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Ro)
      // Default built-in map
    );
    const I = Ec(S, "CUSTOM_ELEMENT_HANDLING", () => Wa(null));
    if (G = Wa(null), nn(I, "tagNameCheck") && Po(I.tagNameCheck) && (G.tagNameCheck = I.tagNameCheck), nn(I, "attributeNameCheck") && Po(I.attributeNameCheck) && (G.attributeNameCheck = I.attributeNameCheck), nn(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), Et(G), Ie && (oe = !1), An && ($t = !0), Dn && (x = Ge({}, Of), R = Wa(null), Dn.html === !0 && (Ge(x, xf), Ge(R, Nf)), Dn.svg === !0 && (Ge(x, wc), Ge(R, Tc), Ge(R, as)), Dn.svgFilters === !0 && (Ge(x, Sc), Ge(R, Tc), Ge(R, as)), Dn.mathMl === !0 && (Ge(x, Cc), Ge(R, Lf), Ge(R, as))), H.tagCheck = null, H.attributeCheck = null, nn(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? H.tagCheck = S.ADD_TAGS : er(S.ADD_TAGS) && (x === L && (x = fn(x)), Ge(x, S.ADD_TAGS, ht))), nn(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? H.attributeCheck = S.ADD_ATTR : er(S.ADD_ATTR) && (R === j && (R = fn(R)), Ge(R, S.ADD_ATTR, ht))), nn(S, "ADD_FORBID_CONTENTS") && er(S.ADD_FORBID_CONTENTS) && (wi === rr && (wi = fn(wi)), Ge(wi, S.ADD_FORBID_CONTENTS, ht)), Qi && (x["#text"] = !0), $e && Ge(x, ["html", "head", "body"]), x.table && (Ge(x, ["tbody"]), delete K.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw va('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw va('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const W = Y;
      Y = S.TRUSTED_TYPES_POLICY;
      try {
        se = U("");
      } catch (ce) {
        throw Y = W, ce;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (Y = void 0, se = "") : (Y === void 0 && (Y = le()), Y && typeof se == "string" && (se = U("")));
    St && St(S), ki = S;
  }, $o = Ge({}, [...wc, ...Sc, ...Hy]), Fo = Ge({}, [...Cc, ...Vy]), Vl = function(S, I, W) {
    return I.namespaceURI === rn ? S === "svg" : I.namespaceURI === Ct ? S === "svg" && (W === "annotation-xml" || or[W]) : !!$o[S];
  }, Kl = function(S, I, W) {
    return I.namespaceURI === rn ? S === "math" : I.namespaceURI === Ia ? S === "math" && Jt[W] : !!Fo[S];
  }, Gl = function(S, I, W) {
    return I.namespaceURI === Ia && !Jt[W] || I.namespaceURI === Ct && !or[W] ? !1 : !Fo[S] && (Io[S] || !$o[S]);
  }, Wl = function(S) {
    let I = F(S);
    (!I || !I.tagName) && (I = {
      namespaceURI: Ei,
      tagName: "template"
    });
    const W = Br(S.tagName), ce = Br(I.tagName);
    return Pa[S.namespaceURI] ? S.namespaceURI === Ia ? Vl(W, I, ce) : S.namespaceURI === Ct ? Kl(W, I, ce) : S.namespaceURI === rn ? Gl(W, I, ce) : !!(na === "application/xhtml+xml" && Pa[S.namespaceURI]) : !1;
  }, Mn = function(S) {
    Ir(t.removed, {
      element: S
    });
    try {
      F(S).removeChild(S);
    } catch {
      if (N(S), !F(S))
        throw va("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, lr = function(S, I, W) {
    try {
      S.removeAttributeNode(I);
    } catch {
      try {
        S.removeAttribute(W);
      } catch {
      }
    }
  }, xi = function(S) {
    Oi(S);
    const I = O(S);
    if (I) {
      const ce = [];
      ba(I, (me) => {
        Ir(ce, me);
      }), ba(ce, (me) => {
        try {
          N(me);
        } catch {
        }
      });
    }
    const W = M(S);
    if (W)
      for (let ce = W.length - 1; ce >= 0; --ce) {
        const me = W[ce], Ne = me && me.name;
        typeof Ne == "string" && lr(S, me, Ne);
      }
  }, kn = function(S, I, W) {
    if (!W)
      try {
        W = I.getAttributeNode(S);
      } catch {
        W = null;
      }
    Ir(t.removed, {
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
      if ($t || An)
        try {
          Mn(I);
        } catch {
        }
      else
        try {
          I.setAttribute(S, "");
        } catch {
        }
  }, cr = function(S) {
    const I = M(S);
    if (I)
      for (let W = I.length - 1; W >= 0; --W) {
        const ce = I[W], me = ce && ce.name;
        typeof me != "string" || R[ht(me)] || lr(S, ce, me);
      }
  }, Oi = function(S) {
    const I = [S];
    for (; I.length > 0; ) {
      const W = I.pop();
      X(W) === un.element && cr(W);
      const me = O(W);
      if (me)
        for (let Ne = me.length - 1; Ne >= 0; --Ne)
          I.push(me[Ne]);
    }
  }, ur = function(S, I) {
    return ze ? S === "patchsrc" ? !0 : S === "for" && I !== "label" && I !== "output" : !1;
  }, ql = function(S) {
    if (!ze)
      return;
    const I = [S];
    for (; I.length > 0; ) {
      const W = I.pop(), ce = X(W);
      if (ce === un.processingInstruction || ce === un.comment && Mt(Pf, W.data)) {
        try {
          N(W);
        } catch {
        }
        continue;
      }
      if (ce === un.element) {
        const Ne = W, tt = ht(fe(W));
        try {
          Ne.hasAttribute && Ne.hasAttribute("patchsrc") && Ne.removeAttribute("patchsrc"), Ne.hasAttribute && Ne.hasAttribute("for") && ur("for", tt) && Ne.removeAttribute("for");
        } catch {
        }
      }
      const me = O(W);
      if (me)
        for (let Ne = me.length - 1; Ne >= 0; --Ne)
          I.push(me[Ne]);
    }
  }, dr = function(S) {
    let I = null, W = null;
    if (At)
      S = "<remove></remove>" + S;
    else {
      const Ne = Tf(S, /^[\r\n\t ]+/);
      W = Ne && Ne[0];
    }
    na === "application/xhtml+xml" && Ei === rn && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const ce = Y ? U(S) : S;
    if (Ei === rn)
      try {
        I = new f().parseFromString(ce, na);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = ve.createDocument(Ei, "template", null);
      try {
        I.documentElement.innerHTML = ea ? se : ce;
      } catch {
      }
    }
    const me = I.body || I.documentElement;
    return S && W && me.insertBefore(n.createTextNode(W), me.childNodes[0] || null), Ei === rn ? _e.call(I, $e ? "html" : "body")[0] : $e ? I.documentElement : me;
  }, fr = function(S) {
    const I = ue ? ue(S) : S.ownerDocument;
    return de.call(
      I || S,
      S,
      // eslint-disable-next-line no-bitwise
      u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT | u.SHOW_PROCESSING_INSTRUCTION | u.SHOW_CDATA_SECTION,
      null
    );
  }, $a = function(S) {
    return S = Pr(S, ct, " "), S = Pr(S, pt, " "), S = Pr(S, it, " "), S;
  }, ia = function(S) {
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
      me.data = $a(me.data), me = ce.nextNode();
    const Ne = (I = S.querySelectorAll) === null || I === void 0 ? void 0 : I.call(S, "template");
    Ne && ba(Ne, (tt) => {
      Zn(tt.content) && ia(tt.content);
    });
  }, Ni = function(S) {
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
      return E(S) === un.documentFragment;
    } catch {
      return !1;
    }
  }, Gt = function(S) {
    if (!E || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof E(S) == "number";
    } catch {
      return !1;
    }
  };
  function on(ee, S, I) {
    ee.length !== 0 && ba(ee, (W) => {
      W.call(t, S, I, ki);
    });
  }
  const Do = function(S, I) {
    return !!(ze && S.hasChildNodes() && !Gt(S.firstElementChild) && Mt(If, S.textContent) && Mt(If, S.innerHTML) || ze && S.namespaceURI === rn && n_[I] && (Gt(S.firstElementChild) || typeof S.textContent == "string" && Mt(i_[I], S.textContent)) || S.nodeType === un.processingInstruction || ze && S.nodeType === un.comment && Mt(Pf, S.data));
  }, Fa = function(S, I) {
    if (S instanceof RegExp)
      return Mt(S, I);
    if (S instanceof Function) {
      for (var W = arguments.length, ce = new Array(W > 2 ? W - 2 : 0), me = 2; me < W; me++)
        ce[me - 2] = arguments[me];
      return !!S(I, ...ce);
    }
    return !1;
  }, Yl = function(S, I, W) {
    if (!K[I] && Mo(I) && Fa(G.tagNameCheck, I))
      return !1;
    if (Qi && !wi[I]) {
      const ce = F(S), me = O(S);
      if (me && ce) {
        const Ne = me.length;
        for (let tt = Ne - 1; tt >= 0; --tt) {
          const ot = S === W ? A(me[tt], !0) : me[tt];
          ce.insertBefore(ot, k(S));
        }
      }
    }
    return Mn(S), !0;
  }, hr = function(S, I, W, ce) {
    return S.length === 0 ? I : I === W || I === ce ? fn(I) : I;
  }, pr = function(S, I) {
    return S === I || F(S) !== null ? !1 : (_i && Oi(S), !0);
  }, vr = function(S, I) {
    if (on(Oe.beforeSanitizeElements, S, null), pr(S, I))
      return !0;
    if (Ni(S))
      return Mn(S), !0;
    const W = ht(fe(S));
    if (x = hr(Oe.uponSanitizeElement, x, L, rt), on(Oe.uponSanitizeElement, S, {
      tagName: W,
      allowedTags: x
    }), pr(S, I))
      return !0;
    if (Do(S, W))
      return Mn(S), !0;
    if (K[W] || !(H.tagCheck instanceof Function && H.tagCheck(W)) && !x[W]) {
      const me = Yl(S, W, I);
      return me === !1 && on(Oe.afterSanitizeElements, S, null), me;
    }
    if (X(S) === un.element && !Wl(S) || (W === "noscript" || W === "noembed" || W === "noframes") && Mt(e_, S.innerHTML))
      return Mn(S), !0;
    if (Ie && S.nodeType === un.text) {
      const me = $a(S.textContent);
      S.textContent !== me && (Ir(t.removed, {
        element: S.cloneNode()
      }), S.textContent = me);
    }
    return on(Oe.afterSanitizeElements, S, null), !1;
  }, gr = function(S, I, W) {
    if (Z[I] || ur(I, S) || dt && (I === "id" || I === "name") && (W in n || W in Hl))
      return !1;
    const ce = R[I] || H.attributeCheck instanceof Function && H.attributeCheck(I, S);
    return oe && Mt(ut, I) || he && Mt(at, I) ? !0 : ce ? Ci[I] || Mt(T, Pr(W, B, "")) || (I === "src" || I === "xlink:href" || I === "href") && S !== "script" && Ef(W, "data:") === 0 && Xn[S] || pe && !Mt(Pt, Pr(W, B, "")) ? !0 : !W : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Mo(S) && Fa(G.tagNameCheck, S) && Fa(G.attributeNameCheck, I, S) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      I === "is" && G.allowCustomizedBuiltInElements && Fa(G.tagNameCheck, W)
    );
  }, Xl = Ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Mo = function(S) {
    return !Xl[Br(S)] && Mt(_, S);
  }, zo = function(S, I, W, ce) {
    if (Y && typeof b == "object" && typeof b.getAttributeType == "function" && !W)
      switch (b.getAttributeType(S, I)) {
        case "TrustedHTML":
          return U(ce);
        case "TrustedScriptURL":
          return q(ce);
      }
    return ce;
  }, Qt = function(S, I, W, ce) {
    try {
      W ? S.setAttributeNS(W, I, ce) : S.setAttribute(I, ce), Ni(S) ? Mn(S) : Cf(t.removed);
    } catch {
      kn(I, S);
    }
  }, Uo = function(S) {
    on(Oe.beforeSanitizeAttributes, S, null);
    const I = S.attributes;
    if (!I || Ni(S))
      return;
    R = hr(Oe.uponSanitizeAttribute, R, j, vt);
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
      const Ne = I[ce], tt = Ne.name, ot = Ne.namespaceURI, Ft = Ne.value, _t = ht(tt), br = Ft;
      let wt = tt === "value" ? br : Fy(br);
      if (W.attrName = _t, W.attrValue = wt, W.keepAttr = !0, W.forceKeepAttr = void 0, on(Oe.uponSanitizeAttribute, S, W), wt = W.attrValue, Fn && (_t === "id" || _t === "name") && Ef(wt, gn) !== 0 && (kn(tt, S, Ne), wt = gn + wt), ze && Mt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, wt)) {
        kn(tt, S, Ne);
        continue;
      }
      if (_t === "attributename" && Tf(wt, "href")) {
        kn(tt, S, Ne);
        continue;
      }
      if (!W.forceKeepAttr) {
        if (!W.keepAttr) {
          kn(tt, S, Ne);
          continue;
        }
        if (!Ae && Mt(t_, wt)) {
          kn(tt, S, Ne);
          continue;
        }
        if (Ie && (wt = $a(wt)), !gr(me, _t, wt)) {
          kn(tt, S, Ne);
          continue;
        }
        wt = zo(me, _t, ot, wt), wt !== br && Qt(S, tt, ot, wt);
      }
    }
    on(Oe.afterSanitizeAttributes, S, null);
  }, Da = function(S) {
    let I = null;
    const W = fr(S);
    for (on(Oe.beforeSanitizeShadowDOM, S, null); I = W.nextNode(); )
      if (on(Oe.uponSanitizeShadowNode, I, null), vr(I, S), Uo(I), Zn(I.content) && Da(I.content), X(I) === un.element) {
        const ce = D(I);
        Zn(ce) && (mr(ce), Da(ce));
      }
    on(Oe.afterSanitizeShadowDOM, S, null);
  }, mr = function(S) {
    const I = [{
      node: S,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const W = I.pop();
      if (W.shadow) {
        Da(W.shadow);
        continue;
      }
      const ce = W.node, Ne = X(ce) === un.element, tt = O(ce);
      if (tt)
        for (let ot = tt.length - 1; ot >= 0; --ot)
          I.push({
            node: tt[ot],
            shadow: null
          });
      if (Ne) {
        const ot = re ? re(ce) : null;
        if (typeof ot == "string" && ht(ot) === "template") {
          const Ft = ce.content;
          Zn(Ft) && I.push({
            node: Ft,
            shadow: null
          });
        }
      }
      if (Ne) {
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
    if (ea = !ee, ea && (ee = "<!-->"), typeof ee != "string" && !Gt(ee) && (ee = jy(ee), typeof ee != "string"))
      throw va("dirty is not a string, aborting");
    if (!t.isSupported)
      return ee;
    He ? (x = rt, R = vt) : sr(S), (Oe.uponSanitizeElement.length > 0 || Oe.uponSanitizeAttribute.length > 0) && (x = fn(x)), Oe.uponSanitizeAttribute.length > 0 && (R = fn(R)), t.removed = [];
    const Ne = _i && typeof ee != "string" && Gt(ee);
    if (Ne) {
      ql(ee);
      const Ft = fe(ee);
      if (typeof Ft == "string") {
        const _t = ht(Ft);
        if (!x[_t] || K[_t])
          throw xi(ee), va("root node is forbidden and cannot be sanitized in-place");
      }
      if (Ni(ee))
        throw xi(ee), va("root node is clobbered and cannot be sanitized in-place");
      try {
        mr(ee);
      } catch (_t) {
        throw xi(ee), _t;
      }
    } else if (Gt(ee))
      I = dr("<!---->"), W = I.ownerDocument.importNode(ee, !0), W.nodeType === un.element && W.nodeName === "BODY" || W.nodeName === "HTML" ? I = W : I.appendChild(W), mr(W);
    else {
      if (!$t && !Ie && !$e && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return Y && et ? U(ee) : ee;
      if (I = dr(ee), !I)
        return $t ? null : et ? se : "";
    }
    I && At && Mn(I.firstChild);
    const tt = Ne ? ee : I;
    try {
      const Ft = fr(tt);
      for (; ce = Ft.nextNode(); )
        vr(ce, tt), Uo(ce), Zn(ce.content) && Da(ce.content);
    } catch (Ft) {
      throw Ne && (xi(ee), ba(t.removed, (_t) => {
        _t.element && Oi(_t.element);
      })), Ft;
    }
    if (Ne)
      return ba(t.removed, (Ft) => {
        Ft.element && Oi(Ft.element);
      }), Ie && ia(ee), ee;
    if ($t) {
      if (Ie && ia(I), An)
        for (me = be.call(I.ownerDocument); I.firstChild; )
          me.appendChild(I.firstChild);
      else
        me = I;
      return (R.shadowroot || R.shadowrootmode) && (me = Ke.call(i, me, !0)), me;
    }
    let ot = $e ? I.outerHTML : I.innerHTML;
    return $e && x["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Mt(Jy, I.ownerDocument.doctype.name) && (ot = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + ot), Ie && (ot = $a(ot)), Y && et ? U(ot) : ot;
  }, t.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    sr(ee), He = !0, rt = x, vt = R;
  }, t.clearConfig = function() {
    ki = null, He = !1, rt = null, vt = null, Y = ge, se = "";
  }, t.isValidAttribute = function(ee, S, I) {
    ki || sr({});
    const W = ht(ee), ce = ht(S);
    return gr(W, ce, I);
  }, t.addHook = function(ee, S) {
    typeof S == "function" && nn(Oe, ee) && Ir(Oe[ee], S);
  }, t.removeHook = function(ee, S) {
    if (nn(Oe, ee)) {
      if (S !== void 0) {
        const I = Py(Oe[ee], S);
        return I === -1 ? void 0 : $y(Oe[ee], I, 1)[0];
      }
      return Cf(Oe[ee]);
    }
  }, t.removeHooks = function(ee) {
    nn(Oe, ee) && (Oe[ee] = []);
  }, t.removeAllHooks = function() {
    Oe = $f();
  }, t;
}
var Zp = Xp();
function Hu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ac, Ff;
function o_() {
  if (Ff) return Ac;
  Ff = 1;
  var e = /["'&<>]/;
  Ac = t;
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
  return Ac;
}
var s_ = o_();
const Rs = /* @__PURE__ */ Hu(s_);
function l_() {
  return globalThis._nc_l10n_locale;
}
function c_() {
  return l_().replaceAll(/_/g, "-");
}
function Pl() {
  return globalThis._nc_l10n_language;
}
function u_(e) {
  const t = Pl();
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
function Jp(e) {
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
  }, u = (k) => k, h = (c.sanitize ? Zp.sanitize : u) || u, f = c.escape ? Rs : u, b = (k) => typeof k == "string" || typeof k == "number", C = (k, O, F) => k.replace(/%n/g, "" + F).replace(/{([^{}]*)}/g, (D, M) => {
    if (O === void 0 || !(M in O))
      return f(D);
    const E = O[M];
    return b(E) ? f(`${E}`) : typeof E == "object" && b(E.value) ? (E.escape !== !1 ? Rs : u)(`${E.value}`) : f(D);
  });
  let N = (a?.bundle ?? Jp(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, h(typeof r == "object" || o !== void 0 ? C(
    N,
    r,
    o
  ) : N);
}
function dn(e, t, n, i, a, r) {
  const o = "_" + t + "_::_" + n + "_", c = r?.bundle ?? Jp(e), u = c.translations[o];
  if (typeof u < "u") {
    const h = u;
    if (Array.isArray(h)) {
      const f = c.pluralFunction(i);
      return m(e, h[f], a, i, r);
    }
  }
  return i === 1 ? m(e, t, a, i, r) : m(e, n, a, i, r);
}
function d_(e, t = Pl()) {
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
class Is {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? Is.GLOBAL_SCOPE_PERSISTENT : Is.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class f_ {
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
    return new Is(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Qp(e) {
  return new f_(e);
}
function h_() {
  try {
    return Bu("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var kc, Df;
function ev() {
  if (Df) return kc;
  Df = 1;
  var e = {};
  return kc = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, kc;
}
var xc, Mf;
function tv() {
  if (Mf) return xc;
  Mf = 1;
  const e = "2.0.0", t = 256, n = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, a = t - 6;
  return xc = {
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
  }, xc;
}
var rs = { exports: {} }, zf;
function p_() {
  return zf || (zf = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = tv(), r = ev();
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
  })(rs, rs.exports)), rs.exports;
}
var Oc, Uf;
function v_() {
  if (Uf) return Oc;
  Uf = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Oc = (i) => i ? typeof i != "object" ? e : i : t, Oc;
}
var Nc, jf;
function g_() {
  if (jf) return Nc;
  jf = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), o = e.test(a);
    return r && o && (i = +i, a = +a), i === a ? 0 : r && !o ? -1 : o && !r ? 1 : i < a ? -1 : 1;
  };
  return Nc = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Nc;
}
var Lc, Bf;
function nv() {
  if (Bf) return Lc;
  Bf = 1;
  const e = ev(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = tv(), { safeRe: i, t: a } = p_(), r = v_(), { compareIdentifiers: o } = g_(), c = (h, f) => {
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
  return Lc = u, Lc;
}
var Rc, Hf;
function m_() {
  if (Hf) return Rc;
  Hf = 1;
  const e = nv();
  return Rc = (n, i) => new e(n, i).major, Rc;
}
var b_ = m_();
const Vf = /* @__PURE__ */ Hu(b_);
var Ic, Kf;
function y_() {
  if (Kf) return Ic;
  Kf = 1;
  const e = nv();
  return Ic = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Ic;
}
var Pc, Gf;
function __() {
  if (Gf) return Pc;
  Gf = 1;
  const e = y_();
  return Pc = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Pc;
}
var w_ = __();
const S_ = /* @__PURE__ */ Hu(w_);
class C_ {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !S_(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Vf(t.getVersion()) !== Vf(this.getVersion()) && console.warn(
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
class T_ {
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
let Fr = null;
function Vu() {
  return Fr !== null ? Fr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? Fr = new C_(window._nc_event_bus) : Fr = window._nc_event_bus = new T_(), Fr);
}
function iv(e, t) {
  Vu().subscribe(e, t);
}
function E_(e, t) {
  Vu().unsubscribe(e, t);
}
function hi(e, ...t) {
  Vu().emit(e, ...t);
}
const av = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const A_ = Object.prototype.toString, k_ = (e) => A_.call(e) === "[object Object]", Ba = () => {
}, x_ = /* @__PURE__ */ O_();
function O_() {
  var e, t, n;
  return av && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function $c(e) {
  return Array.isArray(e) ? e : [e];
}
function N_(e, t, n) {
  return qe(e, t, {
    ...n,
    immediate: !0
  });
}
const rv = av ? window : void 0;
function Hr(e) {
  var t;
  const n = di(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function tr(...e) {
  const t = (i, a, r, o) => (i.addEventListener(a, r, o), () => i.removeEventListener(a, r, o)), n = V(() => {
    const i = $c(di(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return N_(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Hr(r))) !== null && i !== void 0 ? i : [rv].filter((r) => r != null),
      $c(di(n.value ? e[1] : e[0])),
      $c(g(n.value ? e[2] : e[1])),
      di(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, o], c, u) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const h = k_(o) ? { ...o } : o, f = i.flatMap((b) => a.flatMap((C) => r.map((A) => t(b, C, A, h))));
    u(() => {
      f.forEach((b) => b());
    });
  }, { flush: "post" });
}
let Wf = !1;
function qf(e, t, n = {}) {
  const { window: i = rv, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: c = !1 } = n;
  if (!i) return c ? {
    stop: Ba,
    cancel: Ba,
    trigger: Ba
  } : Ba;
  if (x_ && !Wf) {
    Wf = !0;
    const O = { passive: !0 };
    Array.from(i.document.body.children).forEach((F) => F.addEventListener("click", Ba, O)), i.document.documentElement.addEventListener("click", Ba, O);
  }
  let u = !0;
  const h = (O) => di(a).some((F) => {
    if (typeof F == "string") return Array.from(i.document.querySelectorAll(F)).some((D) => D === O.target || O.composedPath().includes(D));
    {
      const D = Hr(F);
      return D && (O.target === D || O.composedPath().includes(D));
    }
  });
  function f(O) {
    const F = di(O);
    return F && F.$.subTree.shapeFlag === 16;
  }
  function b(O, F) {
    const D = di(O), M = D.$.subTree && D.$.subTree.children;
    return M == null || !Array.isArray(M) ? !1 : M.some((E) => E.el === F.target || F.composedPath().includes(E.el));
  }
  const C = (O) => {
    const F = Hr(e);
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
    tr(i, "click", (O) => {
      A || (A = !0, setTimeout(() => {
        A = !1;
      }, 0), C(O));
    }, {
      passive: !0,
      capture: r
    }),
    tr(i, "pointerdown", (O) => {
      const F = Hr(e);
      u = !h(O) && !!(F && !O.composedPath().includes(F));
    }, { passive: !0 }),
    o && tr(i, "blur", (O) => {
      setTimeout(() => {
        const F = Hr(e);
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
function L_(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, c = /* @__PURE__ */ Ot({
    x: 0,
    y: 0
  }), u = /* @__PURE__ */ Ot({
    x: 0,
    y: 0
  }), h = V(() => c.x - u.x), f = V(() => c.y - u.y), { max: b, abs: C } = Math, A = V(() => b(C(h.value), C(f.value)) >= n), N = /* @__PURE__ */ Zh(!1), k = V(() => A.value ? C(h.value) > C(f.value) ? h.value > 0 ? "left" : "right" : f.value > 0 ? "up" : "down" : "none"), O = (X) => [X.touches[0].clientX, X.touches[0].clientY], F = (X, fe) => {
    c.x = X, c.y = fe;
  }, D = (X, fe) => {
    u.x = X, u.y = fe;
  }, M = {
    passive: o,
    capture: !o
  }, E = (X) => {
    N.value && a?.(X, k.value), N.value = !1;
  }, re = [
    tr(e, "touchstart", (X) => {
      if (X.touches.length !== 1) return;
      const [fe, Y] = O(X);
      F(fe, Y), D(fe, Y), r?.(X);
    }, M),
    tr(e, "touchmove", (X) => {
      if (X.touches.length !== 1) return;
      const [fe, Y] = O(X);
      D(fe, Y), M.capture && !M.passive && Math.abs(h.value) > Math.abs(f.value) && X.preventDefault(), !N.value && A.value && (N.value = !0), N.value && i?.(X);
    }, M),
    tr(e, ["touchend", "touchcancel"], E, M)
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
var R_ = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = ob(), r = rb(), o = /* @__PURE__ */ we([]), c = V(() => o.value.reduce((B, _) => (B[~~_.id] = _) && B, {})), u = V(() => o.value.length), h = /* @__PURE__ */ we(null), f = /* @__PURE__ */ we(!1), b = /* @__PURE__ */ we({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), C = /* @__PURE__ */ we({
      splitter: null,
      timeoutId: null
    }), A = V(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": b.value.dragging,
      "splitpanes--ready": f.value
    })), N = () => {
      document.addEventListener("mousemove", F, { passive: !1 }), document.addEventListener("mouseup", D), "ontouchstart" in window && (document.addEventListener("touchmove", F, { passive: !1 }), document.addEventListener("touchend", D));
    }, k = () => {
      document.removeEventListener("mousemove", F, { passive: !1 }), document.removeEventListener("mouseup", D), "ontouchstart" in window && (document.removeEventListener("touchmove", F, { passive: !1 }), document.removeEventListener("touchend", D));
    }, O = (B, _) => {
      let T = B.target.closest(".splitpanes__splitter");
      if (T) {
        let { left: x, top: L } = T.getBoundingClientRect(), { clientX: R, clientY: j } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
        b.value.cursorOffset = i.horizontal ? j - L : R - x;
      }
      N(), b.value.mouseDown = !0, b.value.activeSplitter = _, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, F = (B) => {
      b.value.mouseDown && (B.preventDefault(), b.value.dragging || (window.getSelection()?.removeAllRanges(), b.value.dragging = !0), requestAnimationFrame(() => {
        Y(X(B)), at("resize", { event: B }, !0);
      }));
    }, D = (B) => {
      b.value.dragging && (window.getSelection()?.removeAllRanges(), at("resized", { event: B }, !0)), b.value.mouseDown = !1, b.value.activeSplitter = null, setTimeout(() => {
        b.value.dragging = !1, k(), document.documentElement.style.cursor = "";
      }, 100);
    }, M = (B, _) => {
      "ontouchstart" in window && (B.preventDefault(), C.value.splitter === _ ? (clearTimeout(C.value.timeoutId), C.value.timeoutId = null, E(B, _), C.value.splitter = null) : (C.value.splitter = _, C.value.timeoutId = setTimeout(() => C.value.splitter = null, 500))), b.value.dragging || at("splitter-click", {
        event: B,
        index: _
      }, !0);
    }, E = (B, _) => {
      if (at("splitter-dblclick", {
        event: B,
        index: _
      }, !0), i.maximizePanes) {
        let T = 0;
        o.value = o.value.map((x, L) => (x.size = L === _ ? x.max : x.min, L !== _ && (T += x.min), x)), o.value[_].size -= T, at("pane-maximize", {
          event: B,
          index: _,
          pane: o.value[_]
        }), at("resized", {
          event: B,
          index: _
        }, !0);
      }
    }, re = (B, _) => {
      if (!i.keyboardStep) return;
      let T = i.horizontal ? B.key === "ArrowDown" : B.key === "ArrowRight", x = i.horizontal ? B.key === "ArrowUp" : B.key === "ArrowLeft";
      if (!T && !x) return;
      B.preventDefault(), b.value.activeSplitter = _;
      let L = (T ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), R = J(_) + o.value[_].size;
      se(Math.min(Math.max(R + L * i.keyboardStep, 0), 100)), at("resize", { event: B }, !0), at("resized", { event: B }, !0), b.value.activeSplitter = null;
    }, ue = (B, _) => {
      let T = c.value[_];
      T && at("pane-click", {
        event: B,
        index: T.index,
        pane: T
      });
    }, X = (B) => {
      let _ = h.value.getBoundingClientRect(), { clientX: T, clientY: x } = "ontouchstart" in window && B.touches ? B.touches[0] : B;
      return {
        x: T - (i.horizontal ? 0 : b.value.cursorOffset) - _.left,
        y: x - (i.horizontal ? b.value.cursorOffset : 0) - _.top
      };
    }, fe = (B) => {
      B = B[i.horizontal ? "y" : "x"];
      let _ = h.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (B = _ - B), B * 100 / _;
    }, Y = (B) => {
      se(fe(B));
    }, se = (B) => {
      let _ = b.value.activeSplitter;
      if (_ === null || _ >= o.value.length - 1) return;
      let T = {
        prevPanesSize: J(_),
        nextPanesSize: Q(_),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, x = 0 + (i.pushOtherPanes ? 0 : T.prevPanesSize), L = 100 - (i.pushOtherPanes ? 0 : T.nextPanesSize);
      B = Math.max(Math.min(B, L), x);
      let R = [_, _ + 1], j = o.value[R[0]] || null, G = o.value[R[1]] || null, K = j !== null && j.max < 100 && B >= j.max + T.prevPanesSize, Z = G !== null && G.max < 100 && B <= 100 - (G.max + Q(_ + 1));
      if (K || Z) {
        K ? (j.size = j.max, G.size = Math.min(Math.max(100 - j.max - T.prevPanesSize - T.nextPanesSize, G.min), G.max)) : (j.size = Math.min(Math.max(100 - G.max - T.prevPanesSize - Q(_ + 1), j.min), j.max), G.size = G.max);
        return;
      }
      if (i.pushOtherPanes) {
        let H = ge(T, B);
        if (!H) return;
        ({ sums: T, panesToResize: R } = H), j = o.value[R[0]] || null, G = o.value[R[1]] || null;
      }
      j !== null && (j.size = Math.min(Math.max(B - T.prevPanesSize - T.prevReachedMinPanes, j.min), j.max)), G !== null && (G.size = Math.min(Math.max(100 - B - T.nextPanesSize - T.nextReachedMinPanes, G.min), G.max));
    }, ge = (B, _) => {
      let T = b.value.activeSplitter, x = [T, T + 1];
      if (_ < B.prevPanesSize + o.value[x[0]].min) {
        if (x[0] = $(T).index, B.prevReachedMinPanes = 0, x[0] < T && o.value.forEach((L, R) => {
          R > x[0] && R <= T && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), x[0] === void 0) return B.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((L, R) => {
          R > 0 && R <= T && (L.size = L.min, B.prevReachedMinPanes += L.min);
        }), o.value[x[1]].size = 100 - B.prevReachedMinPanes - o.value[0].min - B.prevPanesSize - B.nextPanesSize, null;
        B.prevPanesSize = J(x[0]);
      }
      return _ > 100 - B.nextPanesSize - o.value[x[1]].min && (x[1] = U(T).index, B.nextReachedMinPanes = 0, x[1] > T + 1 && o.value.forEach((L, R) => {
        R > T && R < x[1] && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), B.nextPanesSize = x[1] === void 0 ? 0 : Q(x[1] - 1), x[1] === void 0) ? (B.nextReachedMinPanes = 0, o.value.forEach((L, R) => {
        R >= T + 1 && (L.size = L.min, B.nextReachedMinPanes += L.min);
      }), x[0] !== void 0 && (o.value[x[0]].size = 100 - B.prevPanesSize - Q(x[0] - 1)), null) : {
        sums: B,
        panesToResize: x
      };
    }, J = (B) => o.value.reduce((_, T, x) => _ + (x < B ? T.size : 0), 0), Q = (B) => o.value.reduce((_, T, x) => _ + (x > B + 1 ? T.size : 0), 0), $ = (B) => [...o.value].reverse().find((_) => _.index < B && _.size > _.min) || {}, U = (B) => o.value.find((_) => _.index > B + 1 && _.size > _.min) || {}, q = () => {
      let B = Array.from(h.value?.children || []);
      for (let _ of B) {
        let T = _.classList.contains("splitpanes__pane"), x = _.classList.contains("splitpanes__splitter");
        !T && !x && (_.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, le = (B, _, T = !1) => {
      let x = B - 1, L = document.createElement("div");
      L.classList.add("splitpanes__splitter"), T || (L.onmousedown = (R) => O(R, x), typeof window < "u" && "ontouchstart" in window && (L.ontouchstart = (R) => O(R, x)), L.onclick = (R) => M(R, x + 1), i.keyboardStep && (L.setAttribute("tabindex", "0"), L.setAttribute("role", "separator"), L.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), L.onkeydown = (R) => re(R, x))), L.ondblclick = (R) => E(R, x + 1), _.parentNode.insertBefore(L, _);
    }, ie = (B) => {
      B.onmousedown = null, B.onclick = null, B.ondblclick = null, B.onkeydown = null, B.remove();
    }, ve = () => {
      let B = Array.from(h.value?.children || []);
      for (let T of B) T.className.includes("splitpanes__splitter") && ie(T);
      let _ = 0;
      for (let T of B) T.className.includes("splitpanes__pane") && (!_ && i.firstSplitter ? le(_, T, !0) : _ && le(_, T), _++);
    }, de = ({ uid: B, ..._ }) => {
      let T = c.value[B];
      for (let [x, L] of Object.entries(_)) T[x] = L;
    }, be = !1, _e = (B) => {
      let _ = -1;
      Array.from(h.value?.children || []).some((T) => (T.className.includes("splitpanes__pane") && _++, T.isSameNode(B.el))), o.value.splice(_, 0, {
        ...B,
        index: _
      }), o.value.forEach((T, x) => T.index = x), f.value && !be && (be = !0, an(() => {
        ve(), Oe({ addedPane: o.value[_] }), at("pane-add", { pane: o.value[_] }), be = !1;
      }));
    }, Ke = (B) => {
      let _ = o.value.findIndex((x) => x.id === B);
      o.value[_].el = null;
      let T = o.value.splice(_, 1)[0];
      o.value.forEach((x, L) => x.index = L), an(() => {
        ve(), at("pane-remove", { pane: T }), Oe({ removedPane: {
          ...T
        } });
      });
    }, Oe = (B = {}) => {
      !B.addedPane && !B.removedPane ? pt() : o.value.some((_) => _.givenSize !== null || _.min || _.max < 100) ? it(B) : ct(), f.value && at("resized");
    }, ct = () => {
      let B = 100 / u.value, _ = 100, T = [], x = [];
      for (let L of o.value) L.size = Math.max(Math.min(B, L.max), L.min), _ -= L.size, L.size >= L.max && T.push(L.id), L.size <= L.min && x.push(L.id);
      Math.abs(_) > 0.1 && ut(_, T, x);
    }, pt = () => {
      let B = 100, _ = [], T = [], x = 0;
      for (let R of o.value) B -= R.size, R.givenSize !== null && x++, R.size >= R.max && _.push(R.id), R.size <= R.min && T.push(R.id);
      let L = 100;
      if (B > 0.1) {
        for (let R of o.value) R.givenSize === null && (R.size = Math.max(Math.min(B / (u.value - x), R.max), R.min)), L -= R.size;
        L > 0.1 && ut(L, _, T);
      }
    }, it = ({ addedPane: B, removedPane: _ } = {}) => {
      let T = o.value.reduce((K, Z) => K + (Z.givenSize === null ? 0 : Z.givenSize), 0), x = o.value.filter((K) => K.givenSize === null).length, L = x > 0 ? (100 - T) / x : 0, R = 0, j = [], G = [];
      for (let K of o.value) R -= K.size, K.size >= K.max && j.push(K.id), K.size <= K.min && G.push(K.id);
      if (!(Math.abs(R) < 0.1)) {
        R = 100;
        for (let K of o.value) K.givenSize === null && (K.size = Math.max(Math.min(L, K.max), K.min)), R -= K.size, K.size >= K.max && j.push(K.id), K.size <= K.min && G.push(K.id);
        Math.abs(R) > 0.1 && ut(R, j, G);
      }
    }, ut = (B, _, T) => {
      let x;
      x = B > 0 ? B / (u.value - _.length) : B / (u.value - T.length), o.value.forEach((L, R) => {
        if (B > 0 && !_.includes(L.id)) {
          let j = Math.max(Math.min(L.size + x, L.max), L.min), G = j - L.size;
          B -= G, L.size = j;
        } else if (!T.includes(L.id)) {
          let j = Math.max(Math.min(L.size + x, L.max), L.min), G = j - L.size;
          B -= G, L.size = j;
        }
      }), Math.abs(B) > 0.1 && f.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, at = (B, _ = void 0, T = !1) => {
      let x = _?.index ?? b.value.activeSplitter ?? null;
      n(B, {
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
    qe(() => i.firstSplitter, () => ve()), qe(() => i.horizontal, (B) => an(() => {
      n("direction-changed", {
        horizontal: B,
        panes: o.value.map((_) => ({
          min: _.min,
          max: _.max,
          size: _.size
        }))
      });
    })), Xi(() => {
      q(), ve(), Oe(), at("ready"), f.value = !0;
    }), ar(() => f.value = !1);
    let Pt = () => {
      let { class: B, ..._ } = a;
      return tn("div", {
        ref: h,
        class: [A.value, B],
        ..._
      }, r.default?.());
    };
    return _n("panes", o), _n("indexedPanes", c), _n("horizontal", V(() => i.horizontal)), _n("requestUpdate", de), _n("onPaneAdd", _e), _n("onPaneRemove", Ke), _n("onPaneClick", ue), (B, _) => (y(), je(Fu(Pt)));
  }
}), I_ = {
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
    let t = e, n = jt("requestUpdate"), i = jt("onPaneAdd"), a = jt("horizontal"), r = jt("onPaneRemove"), o = jt("onPaneClick"), c = La()?.uid, u = jt("indexedPanes"), h = V(() => u.value[c]), f = /* @__PURE__ */ we(null), b = V(() => {
      let k = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(k, A.value), C.value);
    }), C = V(() => {
      let k = parseFloat(t.minSize);
      return isNaN(k) ? 0 : k;
    }), A = V(() => {
      let k = parseFloat(t.maxSize);
      return isNaN(k) ? 100 : k;
    }), N = V(() => {
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
    })), Xi(() => {
      i({
        id: c,
        el: f.value,
        min: C.value,
        max: A.value,
        givenSize: t.size === void 0 ? null : b.value,
        size: b.value
      });
    }), ar(() => r(c)), (k, O) => (y(), w("div", {
      ref_key: "paneEl",
      ref: f,
      class: "splitpanes__pane",
      onClick: O[0] ||= (F) => g(o)(F, k._.uid),
      style: vn(N.value)
    }, [Me(k.$slots, "default")], 4));
  }
}, P_ = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", $_ = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", F_ = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", D_ = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Ku = 1024, ov = Ku / 2, Ps = (e) => document.documentElement.clientWidth < e, sv = /* @__PURE__ */ we(Ps(Ku)), lv = /* @__PURE__ */ we(Ps(ov));
window.addEventListener("resize", () => {
  sv.value = Ps(Ku), lv.value = Ps(ov);
}, { passive: !0 });
function Lo() {
  return /* @__PURE__ */ co(sv);
}
function M_() {
  return /* @__PURE__ */ co(lv);
}
class z_ {
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
    return dn("", t, n, i, a, { bundle: this.bundle });
  }
}
class U_ {
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
    return this.setLanguage(Pl().replace("-", "_"));
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
    const t = new z_((n) => d_(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function j_() {
  return new U_();
}
const cv = j_().detectLanguage().build(), Tt = (...e) => cv.gettext(...e);
function Zi(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== Pl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        cv.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const B_ = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], H_ = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], V_ = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], K_ = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], G_ = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], W_ = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], q_ = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Y_ = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], X_ = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const Z_ = /* @__PURE__ */ Symbol(""), [J_] = window.OC?.config?.version?.split(".") ?? [], uv = Number.parseInt(J_ ?? "35"), Q_ = uv < 32, Ji = uv < 34, e1 = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function t1() {
  return jt(e1, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const Qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, n1 = { class: "button-vue__wrapper" }, i1 = { class: "button-vue__icon" }, a1 = { class: "button-vue__text" }, r1 = /* @__PURE__ */ It({
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
    const n = e, i = t, { formBoxItemClass: a } = t1(), r = jt(Z_, null) !== null, o = V(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), c = V(() => o.value === "button" && typeof n.pressed == "boolean"), u = V(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), h = V(() => u.value.startsWith("tertiary")), f = V(() => n.alignment.split("-")[0]), b = V(() => n.alignment.includes("-")), C = jt("NcPopover:trigger:attrs", () => ({}), !1), A = V(() => C()), N = V(() => {
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
    return (O, F) => (y(), je(Fu(o.value), Kt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${u.value}`]: u.value,
          "button-vue--tertiary": h.value,
          "button-vue--wide": e.wide,
          [`button-vue--${f.value}`]: f.value !== "center",
          "button-vue--reverse": b.value,
          "button-vue--legacy": g(Q_),
          "button-vue--legacy34": g(Ji)
        },
        g(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: k }), {
      default: Le(() => [
        l("span", n1, [
          l("span", i1, [
            Me(O.$slots, "icon", {}, void 0, !0)
          ]),
          l("span", a1, [
            Me(O.$slots, "default", {}, () => [
              Te(v(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Wn = /* @__PURE__ */ Qe(r1, [["__scopeId", "data-v-47ce59a3"]]), o1 = ["aria-hidden", "aria-label"], s1 = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, l1 = ["d"], c1 = ["innerHTML"], u1 = /* @__PURE__ */ It({
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
    ey((a) => ({
      fb515064: n.value
    }));
    const t = e, n = V(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = V(() => {
      if (!t.svg || t.path)
        return;
      const a = Zp.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (y(), w("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Ee(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (y(), w("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, c1)) : (y(), w("svg", s1, [
        l("path", { d: e.path }, null, 8, l1)
      ]))
    ], 10, o1));
  }
}), $l = /* @__PURE__ */ Qe(u1, [["__scopeId", "data-v-aaedb1c3"]]);
f1();
function d1(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), hi("csrf-token-update", { token: e, _internal: !0 }));
}
function f1() {
  iv("csrf-token-update", ({ token: e, _internal: t }) => {
    t || d1(e);
  });
}
Qp("public").persist().build();
let Ha;
function Yf(e, t) {
  return e ? e.getAttribute(t) : null;
}
function h1() {
  if (Ha !== void 0)
    return Ha;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Yf(e, "data-user");
  return t === null ? (Ha = null, Ha) : (Ha = {
    uid: t,
    displayName: Yf(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ha);
}
var mt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(mt || {});
class p1 {
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
function v1(e) {
  return new p1(e);
}
class g1 {
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
    const t = h1();
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
function m1() {
  return new g1(v1);
}
const xa = m1().detectUser().setApp("@nextcloud/vue").build();
function b1(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let dv = "missing-app-name";
try {
  dv = "library";
} catch {
  xa.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const y1 = dv;
let _1 = "";
try {
  _1 = "0.1.0-alpha.171";
} catch {
  xa.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function fv() {
  return jt("appName", y1);
}
const w1 = b1(() => {
  const e = Bu("core", "apps", []), t = fv();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), su = u_();
Zi(q_);
const S1 = /* @__PURE__ */ It({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = Lo();
    qe(t, n), Xi(() => {
      n(t.value);
    }), ar(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && hi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (y(), je(g(Wn), {
      "aria-label": g(Tt)("Go back to the list"),
      class: Ee(["app-details-toggle", { "app-details-toggle--mobile": g(t) }]),
      title: g(Tt)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Le(() => [
        ye(g($l), {
          directional: "",
          path: g(P_)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), C1 = /* @__PURE__ */ Qe(S1, [["__scopeId", "data-v-a28923a1"]]), Xf = Qp("nextcloud").persist().build(), T1 = h_().theming?.name ?? "Nextcloud", E1 = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: C1,
    Pane: I_,
    Splitpanes: R_
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
      appName: fv(),
      localizedAppName: w1(),
      isMobile: Lo(),
      isRtl: su
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
        return xa.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
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
      return e.add(T1), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = L_(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? hi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && hi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      Xf.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), xa.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(Xf.getItem(this.paneConfigID), 10);
      if (!isNaN(e) && e !== this.listPaneSize)
        return xa.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
    },
    /**
     * The user clicked the back arrow from the details view
     */
    hideDetails() {
      this.$emit("update:showDetails", !1);
    }
  }
}, A1 = {
  key: 0,
  class: "hidden-visually"
}, k1 = { class: "app-content-wrapper__list" }, x1 = {
  key: 1,
  class: "app-content-wrapper"
};
function O1(e, t, n, i, a, r) {
  const o = Be("NcAppContentDetailsToggle"), c = Be("Pane"), u = Be("Splitpanes");
  return y(), w("main", {
    id: "app-content-vue",
    class: Ee(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (y(), w("h1", A1, v(n.pageHeading), 1)) : z("", !0),
    e.$slots.list ? (y(), w(ae, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (y(), w("div", {
        key: 0,
        class: Ee(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (y(), je(o, {
          key: 0,
          onClick: Pe(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : z("", !0),
        Re(l("div", k1, [
          Me(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Qa, !n.showDetails]
        ]),
        n.showDetails ? Me(e.$slots, "default", { key: 1 }, void 0, !0) : z("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (y(), w("div", x1, [
        ye(u, {
          horizontal: n.layout === "horizontal-split",
          class: Ee(["default-theme", {
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
      ])) : z("", !0)
    ], 64)) : z("", !0),
    e.$slots.list ? z("", !0) : Me(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const N1 = /* @__PURE__ */ Qe(E1, [["render", O1], ["__scopeId", "data-v-51427d61"]]);
var hv = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], $s = /* @__PURE__ */ hv.join(","), pv = typeof Element > "u", Na = pv ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Fs = !pv && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, Ds = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", o = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : Ds(t.parentNode));
  return o;
}, L1 = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, vv = function(t, n, i) {
  if (Ds(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll($s));
  return n && Na.call(t, $s) && a.unshift(t), a = a.filter(i), a;
}, Ms = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!Ds(o, !1))
      if (o.tagName === "SLOT") {
        var c = o.assignedElements(), u = c.length ? c : o.children, h = Ms(u, !0, i);
        i.flatten ? a.push.apply(a, h) : a.push({
          scopeParent: o,
          candidates: h
        });
      } else {
        var f = Na.call(o, $s);
        f && i.filter(o) && (n || !t.includes(o)) && a.push(o);
        var b = o.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(o), C = !Ds(b, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (b && C) {
          var A = Ms(b === !0 ? o.children : b.children, !0, i);
          i.flatten ? a.push.apply(a, A) : a.push({
            scopeParent: o,
            candidates: A
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, gv = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Sa = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || L1(t)) && !gv(t) ? 0 : t.tabIndex;
}, R1 = function(t, n) {
  var i = Sa(t);
  return i < 0 && n && !gv(t) ? 0 : i;
}, I1 = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, mv = function(t) {
  return t.tagName === "INPUT";
}, P1 = function(t) {
  return mv(t) && t.type === "hidden";
}, $1 = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, F1 = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, D1 = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || Fs(t), i = function(c) {
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
  var r = F1(a, t.form);
  return !r || r === t;
}, M1 = function(t) {
  return mv(t) && t.type === "radio";
}, z1 = function(t) {
  return M1(t) && !D1(t);
}, U1 = function(t) {
  var n, i = t && Fs(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var o, c, u;
    for (r = !!((o = a) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(a) || t != null && (u = t.ownerDocument) !== null && u !== void 0 && u.contains(t)); !r && a; ) {
      var h, f, b;
      i = Fs(a), a = (h = i) === null || h === void 0 ? void 0 : h.host, r = !!((f = a) !== null && f !== void 0 && (b = f.ownerDocument) !== null && b !== void 0 && b.contains(a));
    }
  }
  return r;
}, Zf = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, j1 = function(t, n) {
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
  var u = Na.call(t, "details>summary:first-of-type"), h = u ? t.parentElement : t;
  if (Na.call(h, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var f = t; t; ) {
        var b = t.parentElement, C = Fs(t);
        if (b && !b.shadowRoot && a(b) === !0)
          return Zf(t);
        t.assignedSlot ? t = t.assignedSlot : !b && C !== t.ownerDocument ? t = C.host : t = b;
      }
      t = f;
    }
    if (U1(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Zf(t);
  return !1;
}, B1 = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var i = 0; i < n.children.length; i++) {
          var a = n.children.item(i);
          if (a.tagName === "LEGEND")
            return Na.call(n, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, zs = function(t, n) {
  return !(n.disabled || P1(n) || j1(n, t) || // For a details element with a summary, the summary element gets the focus
  $1(n) || B1(n));
}, lu = function(t, n) {
  return !(z1(n) || Sa(n) < 0 || !zs(t, n));
}, H1 = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, bv = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, c = o ? a.scopeParent : a, u = R1(c, o), h = o ? bv(a.candidates) : c;
    u === 0 ? o ? n.push.apply(n, h) : n.push(c) : i.push({
      documentOrder: r,
      tabIndex: u,
      item: a,
      isScope: o,
      content: h
    });
  }), i.sort(I1).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, V1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Ms([t], n.includeContainer, {
    filter: lu.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: H1
  }) : i = vv(t, n.includeContainer, lu.bind(null, n)), bv(i);
}, K1 = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = Ms([t], n.includeContainer, {
    filter: zs.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = vv(t, n.includeContainer, zs.bind(null, n)), i;
}, Va = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Na.call(t, $s) === !1 ? !1 : lu(n, t);
}, G1 = /* @__PURE__ */ hv.concat("iframe:not([inert]):not([inert] *)").join(","), Fc = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return Na.call(t, G1) === !1 ? !1 : zs(n, t);
};
function cu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function W1(e) {
  if (Array.isArray(e)) return cu(e);
}
function Jf(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = yv(e)) || t) {
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
function q1(e, t, n) {
  return (t = Q1(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Y1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function X1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qf(Object(n), !0).forEach(function(i) {
      q1(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qf(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Z1(e) {
  return W1(e) || Y1(e) || yv(e) || X1();
}
function J1(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Q1(e) {
  var t = J1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function yv(e, t) {
  if (e) {
    if (typeof e == "string") return cu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? cu(e, t) : void 0;
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
}, e0 = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, t0 = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Xr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, n0 = function(t) {
  return Xr(t) && !t.shiftKey;
}, i0 = function(t) {
  return Xr(t) && t.shiftKey;
}, th = function(t) {
  return setTimeout(t, 0);
}, Dr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, os = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, a0 = [], Gu = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || a0, r = eh({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: n0,
    isKeyBackward: i0
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
  }, c, u = function($, U, q) {
    return $ && $[U] !== void 0 ? $[U] : r[q || U];
  }, h = function($, U) {
    var q = typeof U?.composedPath == "function" ? U.composedPath() : void 0;
    return o.containerGroups.findIndex(function(le) {
      var ie = le.container, ve = le.tabbableNodes;
      return ie.contains($) || q?.includes(ie) || ve.find(function(de) {
        return de === $;
      });
    });
  }, f = function($) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = U.hasFallback, le = q === void 0 ? !1 : q, ie = U.params, ve = ie === void 0 ? [] : ie, de = r[$];
    if (typeof de == "function" && (de = de.apply(void 0, Z1(ve))), de === !0 && (de = void 0), !de) {
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
    var U = $.activeElement;
    return U ? U.shadowRoot && U.shadowRoot.activeElement !== null ? b(U.shadowRoot) : U : null;
  }, C = function() {
    var $ = f("initialFocus", {
      hasFallback: !0
    });
    if ($ === !1)
      return !1;
    if ($ === void 0 || $ && !Fc($, r.tabbableOptions)) {
      var U = b(i);
      if (h(U) >= 0)
        $ = U;
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
      var U = V1($, r.tabbableOptions), q = K1($, r.tabbableOptions), le = U.length > 0 ? U[0] : void 0, ie = U.length > 0 ? U[U.length - 1] : void 0, ve = q.find(function(_e) {
        return Va(_e);
      }), de = q.slice().reverse().find(function(_e) {
        return Va(_e);
      }), be = !!U.find(function(_e) {
        return Sa(_e) > 0;
      });
      return {
        container: $,
        tabbableNodes: U,
        focusableNodes: q,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: be,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: le,
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
        nextTabbableNode: function(Ke) {
          var Oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, ct = U.indexOf(Ke);
          return ct < 0 ? Oe ? q.slice(q.indexOf(Ke) + 1).find(function(pt) {
            return Va(pt);
          }) : q.slice(0, q.indexOf(Ke)).reverse().find(function(pt) {
            return Va(pt);
          }) : U[ct + (Oe ? 1 : -1)];
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
      }), o.mostRecentlyFocusedNode = $, e0($) && $.select();
    }
  }, k = function($) {
    var U = f("setReturnFocus", {
      params: [$]
    });
    return U || (U === !1 ? !1 : $);
  }, O = function($) {
    var U = $.target, q = $.event, le = $.isBackward, ie = le === void 0 ? !1 : le;
    U = U || os(q), A();
    var ve = null;
    if (o.tabbableGroups.length > 0) {
      var de = h(U, q), be = de >= 0 ? o.containerGroups[de] : void 0;
      if (de < 0)
        ie ? ve = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : ve = o.tabbableGroups[0].firstTabbableNode;
      else if (ie) {
        var _e = o.tabbableGroups.findIndex(function(ut) {
          var at = ut.firstTabbableNode;
          return U === at;
        });
        if (_e < 0 && (be.container === U || Fc(U, r.tabbableOptions) && !Va(U, r.tabbableOptions) && !be.nextTabbableNode(U, !1)) && (_e = de), _e >= 0) {
          var Ke = _e === 0 ? o.tabbableGroups.length - 1 : _e - 1, Oe = o.tabbableGroups[Ke];
          ve = Sa(U) >= 0 ? Oe.lastTabbableNode : Oe.lastDomTabbableNode;
        } else Xr(q) || (ve = be.nextTabbableNode(U, !1));
      } else {
        var ct = o.tabbableGroups.findIndex(function(ut) {
          var at = ut.lastTabbableNode;
          return U === at;
        });
        if (ct < 0 && (be.container === U || Fc(U, r.tabbableOptions) && !Va(U, r.tabbableOptions) && !be.nextTabbableNode(U)) && (ct = de), ct >= 0) {
          var pt = ct === o.tabbableGroups.length - 1 ? 0 : ct + 1, it = o.tabbableGroups[pt];
          ve = Sa(U) >= 0 ? it.firstTabbableNode : it.firstDomTabbableNode;
        } else Xr(q) || (ve = be.nextTabbableNode(U));
      }
    } else
      ve = f("fallbackFocus");
    return ve;
  }, F = function($) {
    var U = os($);
    if (!(h(U, $) >= 0)) {
      if (Dr(r.clickOutsideDeactivates, $)) {
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
      Dr(r.allowOutsideClick, $) || $.preventDefault();
    }
  }, D = function($) {
    var U = os($), q = h(U, $) >= 0;
    if (q || U instanceof Document)
      q && (o.mostRecentlyFocusedNode = U);
    else {
      $.stopImmediatePropagation();
      var le, ie = !0;
      if (o.mostRecentlyFocusedNode)
        if (Sa(o.mostRecentlyFocusedNode) > 0) {
          var ve = h(o.mostRecentlyFocusedNode), de = o.containerGroups[ve].tabbableNodes;
          if (de.length > 0) {
            var be = de.findIndex(function(_e) {
              return _e === o.mostRecentlyFocusedNode;
            });
            be >= 0 && (r.isKeyForward(o.recentNavEvent) ? be + 1 < de.length && (le = de[be + 1], ie = !1) : be - 1 >= 0 && (le = de[be - 1], ie = !1));
          }
        } else
          o.containerGroups.some(function(_e) {
            return _e.tabbableNodes.some(function(Ke) {
              return Sa(Ke) > 0;
            });
          }) || (ie = !1);
      else
        ie = !1;
      ie && (le = O({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), N(le || o.mostRecentlyFocusedNode || C());
    }
    o.recentNavEvent = void 0;
  }, M = function($) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = $;
    var q = O({
      event: $,
      isBackward: U
    });
    q && (Xr($) && $.preventDefault(), N(q));
  }, E = function($) {
    (r.isKeyForward($) || r.isKeyBackward($)) && M($, r.isKeyBackward($));
  }, re = function($) {
    t0($) && Dr(r.escapeDeactivates, $) !== !1 && ($.preventDefault(), c.deactivate());
  }, ue = function($) {
    var U = os($);
    h(U, $) >= 0 || Dr(r.clickOutsideDeactivates, $) || Dr(r.allowOutsideClick, $) || ($.preventDefault(), $.stopImmediatePropagation());
  }, X = function() {
    if (o.active) {
      ci.activateTrap(a, c);
      var $;
      return r.delayInitialFocus ? $ = new Promise(function(U) {
        o.delayInitialFocusTimer = th(function() {
          N(C()), U();
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
    var U = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set(), le = Jf($), ie;
    try {
      for (le.s(); !(ie = le.n()).done; ) {
        var ve = ie.value;
        U.add(ve);
        for (var de = typeof ShadowRoot < "u" && ve.getRootNode() instanceof ShadowRoot, be = ve; be; ) {
          U.add(be);
          var _e = be.parentElement, Ke = [];
          _e ? Ke = _e.children : !_e && de && (Ke = be.getRootNode().children, _e = be.getRootNode().host, de = typeof ShadowRoot < "u" && _e.getRootNode() instanceof ShadowRoot);
          var Oe = Jf(Ke), ct;
          try {
            for (Oe.s(); !(ct = Oe.n()).done; ) {
              var pt = ct.value;
              q.add(pt);
            }
          } catch (it) {
            Oe.e(it);
          } finally {
            Oe.f();
          }
          be = _e;
        }
      }
    } catch (it) {
      le.e(it);
    } finally {
      le.f();
    }
    U.forEach(function(it) {
      q.delete(it);
    }), o.adjacentElements = q;
  }, Y = function() {
    if (o.active)
      return i.removeEventListener("focusin", D, !0), i.removeEventListener("mousedown", F, !0), i.removeEventListener("touchstart", F, !0), i.removeEventListener("click", ue, !0), i.removeEventListener("keydown", E, !0), i.removeEventListener("keydown", re), c;
  }, se = function($) {
    var U = o.mostRecentlyFocusedNode;
    if (U) {
      var q = $.some(function(ie) {
        var ve = Array.from(ie.removedNodes);
        return ve.some(function(de) {
          return de === U || typeof de.contains == "function" && de.contains(U);
        });
      });
      if (q && o.containers.some(function(ie) {
        return ie?.isConnected;
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
      var U = u($, "onActivate"), q = u($, "onPostActivate"), le = u($, "checkCanFocusTrap"), ie = ci.getActiveTrap(a), ve = !1;
      if (ie && !ie.paused) {
        var de;
        (de = ie._setSubtreeIsolation) === null || de === void 0 || de.call(ie, !1), ve = !0;
      }
      try {
        le || A(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = b(i), U?.({
          trap: c
        });
        var be = function() {
          le && A();
          var Oe = function() {
            c._setSubtreeIsolation(!0), J(), q?.({
              trap: c
            });
          }, ct = X();
          ct ? ct.then(Oe) : Oe();
        };
        if (le)
          return le(o.containers.concat()).then(be, be), this;
        be();
      } catch (Ke) {
        if (ie === ci.getActiveTrap(a) && ve) {
          var _e;
          (_e = ie._setSubtreeIsolation) === null || _e === void 0 || _e.call(ie, !0);
        }
        throw Ke;
      }
      return this;
    },
    deactivate: function($) {
      if (!o.active)
        return this;
      var U = eh({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, $);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || c._setSubtreeIsolation(!1), o.alreadySilent.clear(), Y(), o.active = !1, o.paused = !1, J(), ci.deactivateTrap(a, c);
      var q = u(U, "onDeactivate"), le = u(U, "onPostDeactivate"), ie = u(U, "checkCanReturnFocus"), ve = u(U, "delayReturnFocus"), de = u(U, "returnFocus", "returnFocusOnDeactivate");
      q?.({
        trap: c
      });
      var be = function() {
        de && N(k(o.nodeFocusedBeforeActivation)), le?.({
          trap: c
        });
      }, _e = function() {
        ve && de ? th(be) : be();
      };
      return de && ie ? (ie(k(o.nodeFocusedBeforeActivation)).then(_e, _e), this) : (_e(), this);
    },
    pause: function($) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, $)) : this;
    },
    unpause: function($) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, $)) : this;
    },
    updateContainerElements: function($) {
      var U = [].concat($).filter(Boolean);
      return o.containers = U.map(function(q) {
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
      value: function($, U) {
        if (o.paused === $)
          return this;
        if (o.paused = $, $) {
          var q = u(U, "onPause"), le = u(U, "onPostPause");
          q?.({
            trap: c
          }), Y(), c._setSubtreeIsolation(!1), J(), le?.({
            trap: c
          });
        } else {
          var ie = u(U, "onUnpause"), ve = u(U, "onPostUnpause");
          ie?.({
            trap: c
          });
          var de = function() {
            A();
            var _e = function() {
              c._setSubtreeIsolation(!0), J(), ve?.({
                trap: c
              });
            }, Ke = X();
            Ke ? Ke.then(_e) : _e();
          };
          de();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function($) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(U) {
          var q;
          $ ? r.isolateSubtrees === "aria-hidden" ? ((U.ariaHidden === "true" || ((q = U.getAttribute("aria-hidden")) === null || q === void 0 ? void 0 : q.toLowerCase()) === "true") && o.alreadySilent.add(U), U.setAttribute("aria-hidden", "true")) : ((U.inert || U.hasAttribute("inert")) && o.alreadySilent.add(U), U.setAttribute("inert", !0)) : o.alreadySilent.has(U) || (r.isolateSubtrees === "aria-hidden" ? U.removeAttribute("aria-hidden") : U.removeAttribute("inert"));
        });
      }
    }
  }), c.updateContainerElements(t), c;
};
const _v = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), r0 = /* @__PURE__ */ It({
  name: "NcAppNavigationList",
  provide() {
    return {
      [_v]: {
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
function o0(e, t, n, i, a, r) {
  return y(), w("ul", {
    ref: "list",
    class: Ee(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    l("div", {
      class: Ee(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: vn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    Me(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const wv = /* @__PURE__ */ Qe(r0, [["render", o0], ["__scopeId", "data-v-3e73e246"]]);
function yo() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function s0() {
  let e = [];
  return {
    /**
     * Pause the current focus-trap stack
     */
    pause() {
      e = [...yo()];
      for (const t of e)
        t.pause();
    },
    /**
     * Unpause the paused focus trap stack
     * If the actual stack is different from the paused one, ignore unpause.
     */
    unpause() {
      if (e.length === yo().length)
        for (const t of e)
          t.unpause();
      e = [];
    }
  };
}
const Sv = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Cv = /* @__PURE__ */ Symbol.for("NcContent:selector");
Zi(K_);
const l0 = { class: "app-navigation-toggle-wrapper" }, c0 = /* @__PURE__ */ It({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = Cp(e, "open"), n = V(() => t.value ? Tt("Close navigation") : Tt("Open navigation"));
    return (i, a) => (y(), w("div", l0, [
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
          ye($l, {
            path: g(D_),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), u0 = /* @__PURE__ */ Qe(c0, [["__scopeId", "data-v-e8177cc7"]]), d0 = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], f0 = { class: "app-navigation__search" }, h0 = /* @__PURE__ */ It({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = jt(
      Sv,
      () => Bb(),
      !1
    ), a = qm("appNavigationContainer"), r = Lo(), o = /* @__PURE__ */ we(!r.value), c = V(() => r.value && o.value);
    zm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), qe(r, () => {
      o.value = !r.value;
    }), qe(c, () => {
      f();
    }), Xi(() => {
      i(!0), iv("toggle-navigation", h), hi("navigation-toggled", {
        open: o.value
      }), n = Gu(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), u(!1)), !1),
        fallbackFocus: a.value,
        trapStack: yo(),
        escapeDeactivates: !1
      }), f();
    }), xo(() => {
      i(!1), E_("toggle-navigation", h), n.deactivate();
    });
    function u(C) {
      if (o.value === C) {
        hi("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = C === void 0 ? !o.value : C;
      const A = getComputedStyle(document.body), N = parseInt(A.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        hi("navigation-toggled", {
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
      class: Ee(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": g(Ji)
      }])
    }, [
      l("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: nt(b, ["esc"])
      }, [
        l("div", f0, [
          Me(C.$slots, "search", {}, void 0, !0)
        ]),
        l("div", {
          class: Ee(["app-navigation__body", { "app-navigation__body--no-list": !C.$slots.list }])
        }, [
          Me(C.$slots, "default", {}, void 0, !0)
        ], 2),
        C.$slots.list ? (y(), je(wv, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Le(() => [
            Me(C.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : z("", !0),
        Me(C.$slots, "footer", {}, void 0, !0)
      ], 40, d0),
      ye(u0, {
        open: o.value,
        "onUpdate:open": u
      }, null, 8, ["open"])
    ], 2));
  }
}), p0 = /* @__PURE__ */ Qe(h0, [["__scopeId", "data-v-37908cd4"]]), v0 = {
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
}, g0 = ["aria-hidden", "aria-label"], m0 = ["fill", "width", "height"], b0 = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, y0 = { key: 0 };
function _0(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", b0, [
        n.title ? (y(), w("title", y0, v(n.title), 1)) : z("", !0)
      ])
    ], 8, m0))
  ], 16, g0);
}
const w0 = /* @__PURE__ */ Qe(v0, [["render", _0]]), S0 = {
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
}, C0 = ["aria-hidden", "aria-label"], T0 = ["fill", "width", "height"], E0 = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, A0 = { key: 0 };
function k0(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", E0, [
        n.title ? (y(), w("title", A0, v(n.title), 1)) : z("", !0)
      ])
    ], 8, T0))
  ], 16, C0);
}
const x0 = /* @__PURE__ */ Qe(S0, [["render", k0]]), O0 = {
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
}, N0 = ["aria-hidden", "aria-label"], L0 = ["fill", "width", "height"], R0 = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, I0 = { key: 0 };
function P0(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", R0, [
        n.title ? (y(), w("title", I0, v(n.title), 1)) : z("", !0)
      ])
    ], 8, L0))
  ], 16, N0);
}
const Tv = /* @__PURE__ */ Qe(O0, [["render", P0]]), $0 = {
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
}, F0 = ["aria-hidden", "aria-label"], D0 = ["fill", "width", "height"], M0 = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, z0 = { key: 0 };
function U0(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", M0, [
        n.title ? (y(), w("title", z0, v(n.title), 1)) : z("", !0)
      ])
    ], 8, D0))
  ], 16, F0);
}
const Ev = /* @__PURE__ */ Qe($0, [["render", U0]]);
Zi(H_);
const j0 = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: Tv,
    IconClose: Ev,
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
    return { isLegacy34: Ji };
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
}, B0 = ["placeholder"];
function H0(e, t, n, i, a, r) {
  const o = Be("IconArrowRight"), c = Be("NcButton"), u = Be("IconClose");
  return y(), w("div", {
    class: Ee(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    l("form", {
      onSubmit: t[1] || (t[1] = Pe((...h) => r.confirm && r.confirm(...h), ["prevent"])),
      onKeydown: t[2] || (t[2] = nt(Pe((...h) => r.cancel && r.cancel(...h), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = Pe(() => {
      }, ["stop", "prevent"]))
    }, [
      Re(l("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (h) => r.valueModel = h),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, B0), [
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
const V0 = /* @__PURE__ */ Qe(j0, [["render", H0], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function Fl() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const Wu = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), Av = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), K0 = {
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
}, kv = {
  mixins: [K0],
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
      from: Av
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
}, G0 = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: $l
  },
  mixins: [kv],
  inject: {
    isInSemanticMenu: {
      from: Wu,
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
      mdiCheck: $_,
      mdiChevronRight: F_
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
}, W0 = ["role"], q0 = ["aria-label", "disabled", "title", "type"], Y0 = { class: "action-button__longtext-wrapper" }, X0 = {
  key: 0,
  class: "action-button__name"
}, Z0 = ["textContent"], J0 = {
  key: 2,
  class: "action-button__text"
}, Q0 = ["textContent"], ew = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function tw(e, t, n, i, a, r) {
  const o = Be("NcIconSvgWrapper");
  return y(), w("li", {
    class: Ee(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    l("button", Kt({
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
          class: Ee([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: vn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      l("span", Y0, [
        e.name ? (y(), w("strong", X0, v(e.name), 1)) : z("", !0),
        e.isLongText ? (y(), w("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: v(e.text)
        }, null, 8, Z0)) : (y(), w("span", J0, v(e.text), 1)),
        n.description ? (y(), w("span", {
          key: 3,
          class: "action-button__description",
          textContent: v(n.description)
        }, null, 8, Q0)) : z("", !0)
      ]),
      n.isMenu ? (y(), je(o, {
        key: 0,
        class: "action-button__menu-icon",
        directional: "",
        path: i.mdiChevronRight
      }, null, 8, ["path"])) : r.isChecked ? (y(), je(o, {
        key: 1,
        path: i.mdiCheck,
        class: "action-button__pressed-icon"
      }, null, 8, ["path"])) : r.isChecked === !1 ? (y(), w("span", ew)) : z("", !0),
      z("", !0)
    ], 16, q0)
  ], 10, W0);
}
const nw = /* @__PURE__ */ Qe(G0, [["render", tw], ["__scopeId", "data-v-6c2daf4e"]]);
function iw(e, t = {}) {
  const n = s0();
  qe(e, () => {
    di(t.disabled) || (di(e) ? n.pause() : n.unpause());
  }), xo(() => {
    n.unpause();
  });
}
const aw = ["top", "right", "bottom", "left"], nh = ["start", "end"], ih = /* @__PURE__ */ aw.reduce((e, t) => e.concat(t, t + "-" + nh[0], t + "-" + nh[1]), []), _o = Math.min, uu = Math.max, rw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xv(e, t, n) {
  return uu(e, _o(t, n));
}
function Ra(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mi(e) {
  return e.split("-")[0];
}
function In(e) {
  return e.split("-")[1];
}
function Ov(e) {
  return e === "x" ? "y" : "x";
}
function qu(e) {
  return e === "y" ? "height" : "width";
}
function ui(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Yu(e) {
  return Ov(ui(e));
}
function Nv(e, t, n) {
  n === void 0 && (n = !1);
  const i = In(e), a = Yu(e), r = qu(a);
  let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = js(o)), [o, js(o)];
}
function ow(e) {
  const t = js(e);
  return [Us(e), t, Us(t)];
}
function Us(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const ah = ["left", "right"], rh = ["right", "left"], sw = ["top", "bottom"], lw = ["bottom", "top"];
function cw(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? rh : ah : t ? ah : rh;
    case "left":
    case "right":
      return t ? sw : lw;
    default:
      return [];
  }
}
function uw(e, t, n, i) {
  const a = In(e);
  let r = cw(mi(e), n === "start", i);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(Us)))), r;
}
function js(e) {
  const t = mi(e);
  return rw[t] + e.slice(t.length);
}
function dw(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function Lv(e) {
  return typeof e != "number" ? dw(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Zr(e) {
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
function oh(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = ui(t), o = Yu(t), c = qu(o), u = mi(t), h = r === "y", f = i.x + i.width / 2 - a.width / 2, b = i.y + i.height / 2 - a.height / 2, C = i[c] / 2 - a[c] / 2;
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
async function fw(e, t) {
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
  } = Ra(t, e), N = Lv(A), O = c[C ? b === "floating" ? "reference" : "floating" : b], F = Zr(await r.getClippingRect({
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
  }, re = Zr(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const hw = 50, pw = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = n, c = o.detectOverflow ? o : {
    ...o,
    detectOverflow: fw
  }, u = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: f,
    y: b
  } = oh(h, i, u), C = i, A = 0;
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
    }, ue && A < hw && (A++, typeof ue == "object" && (ue.placement && (C = ue.placement), ue.rects && (h = ue.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : ue.rects), {
      x: f,
      y: b
    } = oh(h, C, u)), k = -1);
  }
  return {
    x: f,
    y: b,
    placement: C,
    strategy: a,
    middlewareData: N
  };
}, vw = (e) => ({
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
    } = Ra(e, t) || {};
    if (h == null)
      return {};
    const b = Lv(f), C = {
      x: n,
      y: i
    }, A = Yu(a), N = qu(A), k = await o.getDimensions(h), O = A === "y", F = O ? "top" : "left", D = O ? "bottom" : "right", M = O ? "clientHeight" : "clientWidth", E = r.reference[N] + r.reference[A] - C[A] - r.floating[N], re = C[A] - r.reference[A], ue = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(h));
    let X = ue ? ue[M] : 0;
    (!X || !await (o.isElement == null ? void 0 : o.isElement(ue))) && (X = c.floating[M] || r.floating[N]);
    const fe = E / 2 - re / 2, Y = X / 2 - k[N] / 2 - 1, se = _o(b[F], Y), ge = _o(b[D], Y), J = X - k[N] - ge, Q = X / 2 - k[N] / 2 + fe, $ = xv(se, Q, J), U = !u.arrow && In(a) != null && Q !== $ && r.reference[N] / 2 - (Q < se ? se : ge) - k[N] / 2 < 0, q = U ? Q < se ? Q - se : Q - J : 0;
    return {
      [A]: C[A] + q,
      data: {
        [A]: $,
        centerOffset: Q - $ - q,
        ...U && {
          alignmentOffset: q
        }
      },
      reset: U
    };
  }
});
function gw(e, t, n) {
  return (e ? [...n.filter((a) => In(a) === e), ...n.filter((a) => In(a) !== e)] : n.filter((a) => mi(a) === a)).filter((a) => e ? In(a) === e || (t ? Us(a) !== a : !1) : !0);
}
const mw = function(e) {
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
        allowedPlacements: C = ih,
        autoAlignment: A = !0,
        ...N
      } = Ra(e, t), k = b !== void 0 || C === ih ? gw(b || null, A, C) : C, O = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, F = k[O];
      if (F == null)
        return {};
      if (c !== F)
        return {
          reset: {
            placement: k[0]
          }
        };
      const D = await u.detectOverflow(t, N), M = Nv(F, r, await (u.isRTL == null ? void 0 : u.isRTL(h.floating))), E = [D[mi(F)], D[M[0]], D[M[1]]], re = [...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [], {
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
}, bw = function(e) {
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
      } = Ra(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const F = mi(a), D = ui(c), M = mi(c) === c, E = await (u.isRTL == null ? void 0 : u.isRTL(h.floating)), re = C || (M || !k ? [js(c)] : ow(c)), ue = N !== "none";
      !C && ue && re.push(...uw(c, k, N, E));
      const X = [c, ...re], fe = await u.detectOverflow(t, O), Y = [];
      let se = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (f && Y.push(fe[F]), b) {
        const $ = Nv(a, o, E);
        Y.push(fe[$[0]], fe[$[1]]);
      }
      if (se = [...se, {
        placement: a,
        overflows: Y
      }], !Y.every(($) => $ <= 0)) {
        var ge, J;
        const $ = (((ge = r.flip) == null ? void 0 : ge.index) || 0) + 1, U = X[$];
        if (U && (!(b === "alignment" ? D !== ui(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        se.every((ie) => ui(ie.placement) === D ? ie.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: se
            },
            reset: {
              placement: U
            }
          };
        let q = (J = se.filter((le) => le.overflows[0] <= 0).sort((le, ie) => le.overflows[1] - ie.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!q)
          switch (A) {
            case "bestFit": {
              var Q;
              const le = (Q = se.filter((ie) => {
                if (ue) {
                  const ve = ui(ie.placement);
                  return ve === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ve === "y";
                }
                return !0;
              }).map((ie) => [ie.placement, ie.overflows.filter((ve) => ve > 0).reduce((ve, de) => ve + de, 0)]).sort((ie, ve) => ie[1] - ve[1])[0]) == null ? void 0 : Q[0];
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
}, yw = /* @__PURE__ */ new Set(["left", "top"]);
async function _w(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = mi(n), c = In(n), u = ui(n) === "y", h = yw.has(o) ? -1 : 1, f = r && u ? -1 : 1, b = Ra(t, e);
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
const ww = function(e) {
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
      } = t, u = await _w(t, e);
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
}, Sw = function(e) {
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
      } = Ra(e, t), f = {
        x: n,
        y: i
      }, b = await r.detectOverflow(t, h), C = ui(a), A = Ov(C);
      let N = f[A], k = f[C];
      const O = (D, M) => xv(M + b[D === "y" ? "top" : "left"], M, M - b[D === "y" ? "bottom" : "right"]);
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
}, Cw = function(e) {
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
      } = Ra(e, t), u = await a.detectOverflow(t, c), h = mi(n), f = In(n), b = ui(n) === "y", {
        width: C,
        height: A
      } = i.floating;
      let N, k;
      h === "top" || h === "bottom" ? (N = h, k = f === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (k = h, N = f === "end" ? "top" : "bottom");
      const O = A - u.top - u.bottom, F = C - u.left - u.right, D = _o(A - u[N], O), M = _o(C - u[k], F), E = t.middlewareData.shift, re = !E;
      let ue = D, X = M;
      E != null && E.enabled.x && (X = F), E != null && E.enabled.y && (ue = O), re && !f && (b ? X = C - 2 * uu(u.left, u.right) : ue = A - 2 * uu(u.top, u.bottom)), await o({
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
function Sn(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function qn(e) {
  return Sn(e).getComputedStyle(e);
}
const sh = Math.min, Jr = Math.max, Bs = Math.round;
function Rv(e) {
  const t = qn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = Bs(n) !== a || Bs(i) !== r;
  return o && (n = a, i = r), { width: n, height: i, fallback: o };
}
function Yi(e) {
  return Pv(e) ? (e.nodeName || "").toLowerCase() : "";
}
let ss;
function Iv() {
  if (ss) return ss;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (ss = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), ss) : navigator.userAgent;
}
function Yn(e) {
  return e instanceof Sn(e).HTMLElement;
}
function Vi(e) {
  return e instanceof Sn(e).Element;
}
function Pv(e) {
  return e instanceof Sn(e).Node;
}
function lh(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Sn(e).ShadowRoot || e instanceof ShadowRoot;
}
function Dl(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = qn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function Tw(e) {
  return ["table", "td", "th"].includes(Yi(e));
}
function du(e) {
  const t = /firefox/i.test(Iv()), n = qn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function $v() {
  return !/^((?!chrome|android).)*safari/i.test(Iv());
}
function Xu(e) {
  return ["html", "body", "#document"].includes(Yi(e));
}
function Fv(e) {
  return Vi(e) ? e : e.contextElement;
}
const Dv = { x: 1, y: 1 };
function nr(e) {
  const t = Fv(e);
  if (!Yn(t)) return Dv;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = Rv(t);
  let o = (r ? Bs(n.width) : n.width) / i, c = (r ? Bs(n.height) : n.height) / a;
  return o && Number.isFinite(o) || (o = 1), c && Number.isFinite(c) || (c = 1), { x: o, y: c };
}
function wo(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), c = Fv(e);
  let u = Dv;
  t && (i ? Vi(i) && (u = nr(i)) : u = nr(e));
  const h = c ? Sn(c) : window, f = !$v() && n;
  let b = (o.left + (f && ((a = h.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / u.x, C = (o.top + (f && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / u.y, A = o.width / u.x, N = o.height / u.y;
  if (c) {
    const k = Sn(c), O = i && Vi(i) ? Sn(i) : i;
    let F = k.frameElement;
    for (; F && i && O !== k; ) {
      const D = nr(F), M = F.getBoundingClientRect(), E = getComputedStyle(F);
      M.x += (F.clientLeft + parseFloat(E.paddingLeft)) * D.x, M.y += (F.clientTop + parseFloat(E.paddingTop)) * D.y, b *= D.x, C *= D.y, A *= D.x, N *= D.y, b += M.x, C += M.y, F = Sn(F).frameElement;
    }
  }
  return { width: A, height: N, top: C, right: b + A, bottom: C + N, left: b, x: b, y: C };
}
function Ki(e) {
  return ((Pv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ml(e) {
  return Vi(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Mv(e) {
  return wo(Ki(e)).left + Ml(e).scrollLeft;
}
function So(e) {
  if (Yi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || lh(e) && e.host || Ki(e);
  return lh(t) ? t.host : t;
}
function zv(e) {
  const t = So(e);
  return Xu(t) ? t.ownerDocument.body : Yn(t) && Dl(t) ? t : zv(t);
}
function Hs(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = zv(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Sn(i);
  return a ? t.concat(r, r.visualViewport || [], Dl(i) ? i : []) : t.concat(i, Hs(i));
}
function ch(e, t, n) {
  return t === "viewport" ? Zr((function(i, a) {
    const r = Sn(i), o = Ki(i), c = r.visualViewport;
    let u = o.clientWidth, h = o.clientHeight, f = 0, b = 0;
    if (c) {
      u = c.width, h = c.height;
      const C = $v();
      (C || !C && a === "fixed") && (f = c.offsetLeft, b = c.offsetTop);
    }
    return { width: u, height: h, x: f, y: b };
  })(e, n)) : Vi(t) ? Zr((function(i, a) {
    const r = wo(i, !0, a === "fixed"), o = r.top + i.clientTop, c = r.left + i.clientLeft, u = Yn(i) ? nr(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * u.x, height: i.clientHeight * u.y, x: c * u.x, y: o * u.y };
  })(t, n)) : Zr((function(i) {
    const a = Ki(i), r = Ml(i), o = i.ownerDocument.body, c = Jr(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), u = Jr(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let h = -r.scrollLeft + Mv(i);
    const f = -r.scrollTop;
    return qn(o).direction === "rtl" && (h += Jr(a.clientWidth, o.clientWidth) - c), { width: c, height: u, x: h, y: f };
  })(Ki(e)));
}
function uh(e) {
  return Yn(e) && qn(e).position !== "fixed" ? e.offsetParent : null;
}
function dh(e) {
  const t = Sn(e);
  let n = uh(e);
  for (; n && Tw(n) && qn(n).position === "static"; ) n = uh(n);
  return n && (Yi(n) === "html" || Yi(n) === "body" && qn(n).position === "static" && !du(n)) ? t : n || (function(i) {
    let a = So(i);
    for (; Yn(a) && !Xu(a); ) {
      if (du(a)) return a;
      a = So(a);
    }
    return null;
  })(e) || t;
}
function Ew(e, t, n) {
  const i = Yn(t), a = Ki(t), r = wo(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const c = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((Yi(t) !== "body" || Dl(a)) && (o = Ml(t)), Yn(t)) {
    const u = wo(t, !0);
    c.x = u.x + t.clientLeft, c.y = u.y + t.clientTop;
  } else a && (c.x = Mv(a));
  return { x: r.left + o.scrollLeft - c.x, y: r.top + o.scrollTop - c.y, width: r.width, height: r.height };
}
const Aw = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(h, f) {
    const b = f.get(h);
    if (b) return b;
    let C = Hs(h).filter(((O) => Vi(O) && Yi(O) !== "body")), A = null;
    const N = qn(h).position === "fixed";
    let k = N ? So(h) : h;
    for (; Vi(k) && !Xu(k); ) {
      const O = qn(k), F = du(k);
      (N ? F || A : F || O.position !== "static" || !A || !["absolute", "fixed"].includes(A.position)) ? A = O : C = C.filter(((D) => D !== k)), k = So(k);
    }
    return f.set(h, C), C;
  })(t, this._c) : [].concat(n), o = [...r, i], c = o[0], u = o.reduce(((h, f) => {
    const b = ch(t, f, a);
    return h.top = Jr(b.top, h.top), h.right = sh(b.right, h.right), h.bottom = sh(b.bottom, h.bottom), h.left = Jr(b.left, h.left), h;
  }), ch(t, c, a));
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Yn(n), r = Ki(n);
  if (n === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, c = { x: 1, y: 1 };
  const u = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((Yi(n) !== "body" || Dl(r)) && (o = Ml(n)), Yn(n))) {
    const h = wo(n);
    c = nr(n), u.x = h.x + n.clientLeft, u.y = h.y + n.clientTop;
  }
  return { width: t.width * c.x, height: t.height * c.y, x: t.x * c.x - o.scrollLeft * c.x + u.x, y: t.y * c.y - o.scrollTop * c.y + u.y };
}, isElement: Vi, getDimensions: function(e) {
  return Yn(e) ? Rv(e) : e.getBoundingClientRect();
}, getOffsetParent: dh, getDocumentElement: Ki, getScale: nr, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || dh, r = this.getDimensions;
  return { reference: Ew(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => qn(e).direction === "rtl" }, kw = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: Aw, ...n }, r = { ...a.platform, _c: i };
  return pw(e, t, { ...a, platform: r });
}, Gi = {
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
function fu(e, t) {
  let n = Gi.themes[e] || {}, i;
  do
    i = n[t], typeof i > "u" ? n.$extend ? n = Gi.themes[n.$extend] || {} : (n = null, i = Gi[t]) : n = null;
  while (n);
  return i;
}
function xw(e) {
  const t = [e];
  let n = Gi.themes[e] || {};
  do
    n.$extend && !n.$resetCss ? (t.push(n.$extend), n = Gi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t.map((i) => `v-popper--theme-${i}`);
}
function fh(e) {
  const t = [e];
  let n = Gi.themes[e] || {};
  do
    n.$extend ? (t.push(n.$extend), n = Gi.themes[n.$extend] || {}) : n = null;
  while (n);
  return t;
}
let Co = !1;
if (typeof window < "u") {
  Co = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        Co = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let Uv = !1;
typeof window < "u" && typeof navigator < "u" && (Uv = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const Ow = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
  t,
  `${t}-start`,
  `${t}-end`
]), []), hh = {
  hover: "mouseenter",
  focus: "focus",
  click: "click",
  touch: "touchstart",
  pointer: "pointerdown"
}, ph = {
  hover: "mouseleave",
  focus: "blur",
  click: "click",
  touch: "touchend",
  pointer: "pointerup"
};
function vh(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Dc() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Ln = [];
let ga = null;
const gh = {};
function mh(e) {
  let t = gh[e];
  return t || (t = gh[e] = []), t;
}
let hu = function() {
};
typeof window < "u" && (hu = window.Element);
function Ve(e) {
  return function(t) {
    return fu(t.theme, e);
  };
}
const Mc = "__floating-vue__popper", jv = () => /* @__PURE__ */ It({
  name: "VPopper",
  provide() {
    return {
      [Mc]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Mc]: { default: null }
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
      default: Ve("disabled")
    },
    positioningDisabled: {
      type: Boolean,
      default: Ve("positioningDisabled")
    },
    placement: {
      type: String,
      default: Ve("placement"),
      validator: (e) => Ow.includes(e)
    },
    delay: {
      type: [String, Number, Object],
      default: Ve("delay")
    },
    distance: {
      type: [Number, String],
      default: Ve("distance")
    },
    skidding: {
      type: [Number, String],
      default: Ve("skidding")
    },
    triggers: {
      type: Array,
      default: Ve("triggers")
    },
    showTriggers: {
      type: [Array, Function],
      default: Ve("showTriggers")
    },
    hideTriggers: {
      type: [Array, Function],
      default: Ve("hideTriggers")
    },
    popperTriggers: {
      type: Array,
      default: Ve("popperTriggers")
    },
    popperShowTriggers: {
      type: [Array, Function],
      default: Ve("popperShowTriggers")
    },
    popperHideTriggers: {
      type: [Array, Function],
      default: Ve("popperHideTriggers")
    },
    container: {
      type: [String, Object, hu, Boolean],
      default: Ve("container")
    },
    boundary: {
      type: [String, hu],
      default: Ve("boundary")
    },
    strategy: {
      type: String,
      validator: (e) => ["absolute", "fixed"].includes(e),
      default: Ve("strategy")
    },
    autoHide: {
      type: [Boolean, Function],
      default: Ve("autoHide")
    },
    handleResize: {
      type: Boolean,
      default: Ve("handleResize")
    },
    instantMove: {
      type: Boolean,
      default: Ve("instantMove")
    },
    eagerMount: {
      type: Boolean,
      default: Ve("eagerMount")
    },
    popperClass: {
      type: [String, Array, Object],
      default: Ve("popperClass")
    },
    computeTransformOrigin: {
      type: Boolean,
      default: Ve("computeTransformOrigin")
    },
    /**
     * @deprecated
     */
    autoMinSize: {
      type: Boolean,
      default: Ve("autoMinSize")
    },
    autoSize: {
      type: [Boolean, String],
      default: Ve("autoSize")
    },
    /**
     * @deprecated
     */
    autoMaxSize: {
      type: Boolean,
      default: Ve("autoMaxSize")
    },
    autoBoundaryMaxSize: {
      type: Boolean,
      default: Ve("autoBoundaryMaxSize")
    },
    preventOverflow: {
      type: Boolean,
      default: Ve("preventOverflow")
    },
    overflowPadding: {
      type: [Number, String],
      default: Ve("overflowPadding")
    },
    arrowPadding: {
      type: [Number, String],
      default: Ve("arrowPadding")
    },
    arrowOverflow: {
      type: Boolean,
      default: Ve("arrowOverflow")
    },
    flip: {
      type: Boolean,
      default: Ve("flip")
    },
    shift: {
      type: Boolean,
      default: Ve("shift")
    },
    shiftCrossAxis: {
      type: Boolean,
      default: Ve("shiftCrossAxis")
    },
    noAutoFocus: {
      type: Boolean,
      default: Ve("noAutoFocus")
    },
    disposeTimeout: {
      type: Number,
      default: Ve("disposeTimeout")
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
      return (e = this[Mc]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(ww({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(mw({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(Sw({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(bw({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(vw({
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(Cw({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await kw(this.$_referenceNode, this.$_popperNode, e);
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
      if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), ga && this.instantMove && ga.instantMove && ga !== this.parentPopper) {
        ga.$_applyHide(!0), this.$_applyShow(!0);
        return;
      }
      t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
    },
    $_scheduleHide(e, t = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0;
        return;
      }
      this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (ga = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
    },
    $_computeDelay(e) {
      const t = this.delay;
      return parseInt(t && t[e] || t || 0);
    },
    async $_applyShow(e = !1) {
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Dc(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...Hs(this.$_referenceNode),
        ...Hs(this.$_popperNode)
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
      for (const t of fh(this.theme))
        mh(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Dc(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, vh(Ln, this), Ln.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of fh(this.theme)) {
        const i = mh(n);
        vh(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      ga === this && (ga = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Dc(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_registerTriggerListeners(this.$_targetNodes, hh, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], hh, this.popperTriggers, this.popperShowTriggers, e);
      const t = (n) => {
        n.usedByTooltip || this.hide({ event: n });
      };
      this.$_registerTriggerListeners(this.$_targetNodes, ph, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], ph, this.popperTriggers, this.popperHideTriggers, t);
    },
    $_registerEventListeners(e, t, n) {
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, Co ? {
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
      if (Qr >= e.left && Qr <= e.right && eo >= e.top && eo <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Qr - zi, i = eo - Ui, a = t.left + t.width / 2 - zi + (t.top + t.height / 2) - Ui + t.width + t.height, r = zi + n * a, o = Ui + i * a;
        return ls(zi, Ui, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        ls(zi, Ui, r, o, t.left, t.top, t.right, t.top) || // Top edge
        ls(zi, Ui, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        ls(zi, Ui, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (Uv) {
    const e = Co ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => bh(t), e), document.addEventListener("touchend", (t) => yh(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => bh(e), !0), window.addEventListener("click", (e) => yh(e, !1), !0);
  window.addEventListener("resize", Rw);
}
function bh(e, t) {
  for (let n = 0; n < Ln.length; n++) {
    const i = Ln[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function yh(e, t) {
  Nw(e, t);
}
function Nw(e, t) {
  const n = {};
  for (let i = Ln.length - 1; i >= 0; i--) {
    const a = Ln[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && _h(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let c = a.parentPopper;
            for (; c; )
              n[c.randomId] = !0, c = c.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && _h(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function _h(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || Lw(e, n) && !t;
}
function Lw(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function Rw() {
  for (let e = 0; e < Ln.length; e++)
    Ln[e].$_computePosition();
}
let zi = 0, Ui = 0, Qr = 0, eo = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  zi = Qr, Ui = eo, Qr = e.clientX, eo = e.clientY;
}, Co ? {
  passive: !0
} : void 0);
function ls(e, t, n, i, a, r, o, c) {
  const u = ((o - a) * (t - r) - (c - r) * (e - a)) / ((c - r) * (n - e) - (o - a) * (i - t)), h = ((n - e) * (t - r) - (i - t) * (e - a)) / ((c - r) * (n - e) - (o - a) * (i - t));
  return u >= 0 && u <= 1 && h >= 0 && h <= 1;
}
const Iw = {
  extends: jv()
}, Zu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function Pw(e, t, n, i, a, r) {
  return y(), w("div", {
    ref: "reference",
    class: Ee(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    Me(e.$slots, "default", ms(vo(e.slotData)))
  ], 2);
}
const $w = /* @__PURE__ */ Zu(Iw, [["render", Pw]]);
function Fw() {
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
let vs;
function pu() {
  pu.init || (pu.init = !0, vs = Fw() !== -1);
}
var zl = {
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
    pu(), an(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", vs && this.$el.appendChild(e), e.data = "about:blank", vs || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!vs && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Dw = /* @__PURE__ */ Fm();
Pm("data-v-b329ee4c");
const Mw = {
  class: "resize-observer",
  tabindex: "-1"
};
$m();
const zw = /* @__PURE__ */ Dw((e, t, n, i, a, r) => (y(), je("div", Mw)));
zl.render = zw;
zl.__scopeId = "data-v-b329ee4c";
zl.__file = "src/components/ResizeObserver.vue";
const Bv = (e = "theme") => ({
  computed: {
    themeClass() {
      return xw(this[e]);
    }
  }
}), Uw = /* @__PURE__ */ It({
  name: "VPopperContent",
  components: {
    ResizeObserver: zl
  },
  mixins: [
    Bv()
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
}), jw = ["id", "aria-hidden", "tabindex", "data-popper-placement"], Bw = {
  ref: "inner",
  class: "v-popper__inner"
}, Hw = /* @__PURE__ */ l("div", { class: "v-popper__arrow-outer" }, null, -1), Vw = /* @__PURE__ */ l("div", { class: "v-popper__arrow-inner" }, null, -1), Kw = [
  Hw,
  Vw
];
function Gw(e, t, n, i, a, r) {
  const o = Be("ResizeObserver");
  return y(), w("div", {
    id: e.popperId,
    ref: "popover",
    class: Ee(["v-popper__popper", [
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
    style: vn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = nt((c) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    l("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (c) => e.autoHide && e.$emit("hide"))
    }),
    l("div", {
      class: "v-popper__wrapper",
      style: vn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      l("div", Bw, [
        e.mounted ? (y(), w(ae, { key: 0 }, [
          l("div", null, [
            Me(e.$slots, "default")
          ]),
          e.handleResize ? (y(), je(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (c) => e.$emit("resize", c))
          })) : z("", !0)
        ], 64)) : z("", !0)
      ], 512),
      l("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: vn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Kw, 4)
    ], 4)
  ], 46, jw);
}
const Hv = /* @__PURE__ */ Zu(Uw, [["render", Gw]]), Vv = {
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
let vu = function() {
};
typeof window < "u" && (vu = window.Element);
const Ww = /* @__PURE__ */ It({
  name: "VPopperWrapper",
  components: {
    Popper: $w,
    PopperContent: Hv
  },
  mixins: [
    Vv,
    Bv("finalTheme")
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
      type: [String, Object, vu, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, vu],
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
function qw(e, t, n, i, a, r) {
  const o = Be("PopperContent"), c = Be("Popper");
  return y(), je(c, Kt({ ref: "popper" }, e.$props, {
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
const Ju = /* @__PURE__ */ Zu(Ww, [["render", qw]]), Yw = {
  ...Ju,
  name: "VDropdown",
  vPopperTheme: "dropdown"
};
({
  ...Ju
});
({
  ...Ju
});
jv();
const wh = Gi, Xw = Yw, Zw = /* @__PURE__ */ It({
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
}), Jw = "_ncPopover_qgtYg", Qw = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: Jw
}, Kv = "nc-popover-9";
wh.themes[Kv] = structuredClone(wh.themes.dropdown);
const eS = {
  name: "NcPopover",
  components: {
    Dropdown: Xw,
    NcPopoverTriggerProvider: Zw
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
      theme: Kv
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
      return this.placement === "start" ? su ? "right" : "left" : this.placement === "end" ? su ? "left" : "right" : this.placement;
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
      e.tabIndex = -1, e && (this.$focusTrap = Gu(e, {
        // Prevents to lose focus using esc key
        // Focus will be release when popover be hide
        escapeDeactivates: !1,
        allowOutsideClick: !0,
        setReturnFocus: this.setReturnFocus,
        trapStack: yo(),
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
        xa.warn("[NcPopover] Failed to clear focus trap", { error: t });
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
function tS(e, t, n, i, a, r) {
  const o = Be("NcPopoverTriggerProvider"), c = Be("Dropdown");
  return y(), je(c, {
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
      Me(e.$slots, "default", ms(vo(u)))
    ]),
    default: Le(() => [
      ye(o, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Le((u) => [
          Me(e.$slots, "trigger", ms(vo(u)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const nS = {
  $style: Qw
}, Sh = /* @__PURE__ */ Qe(eS, [["render", tS], ["__cssModules", nS]]), iS = {
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
}, aS = ["aria-hidden", "aria-label"], rS = ["fill", "width", "height"], oS = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, sS = { key: 0 };
function lS(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", oS, [
        n.title ? (y(), w("title", sS, v(n.title), 1)) : z("", !0)
      ])
    ], 8, rS))
  ], 16, aS);
}
const cS = /* @__PURE__ */ Qe(iS, [["render", lS]]);
Zi(B_);
function Qu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Lt)
        return !1;
      if (n.type === ae && !Qu(n.children))
        return !1;
      if (n.type === Oo && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const uS = ".focusable", dS = {
  name: "NcActions",
  components: {
    NcButton: Wn,
    NcPopover: Sh
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
      [Wu]: V(() => this.actionsMenuSemanticType === "menu"),
      [Av]: this.closeMenu
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
      randomId: Fl()
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
    iw(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(uS);
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
      const N = A?.props?.icon, k = A?.children?.icon?.()?.[0] ?? (this.isIconUrl(N) ? tn("img", { class: "action-item__menutoggle__icon", src: N, alt: "" }) : tn("span", { class: ["icon", N] })), O = A?.children?.default?.()?.[0]?.children?.trim(), F = this.forceName ? O : "";
      let D = A?.props?.title;
      this.forceName || D || (D = O);
      const M = { ...A?.props ?? {} }, E = ["submit", "reset"].includes(M.type) ? M.modelValue : "button";
      return delete M.modelValue, delete M.type, tn(
        Wn,
        Kt(
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
      const N = Qu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? tn("span", { class: ["icon", this.defaultIcon] }) : tn(cS, { size: 20 }), k = `${this.randomId}-trigger`;
      return tn(
        Sh,
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
          trigger: () => tn(Wn, {
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
          default: () => tn("div", {
            class: {
              open: this.opened
            },
            tabindex: "-1",
            onKeydown: this.onKeydown,
            ref: "menu"
          }, [
            tn("ul", {
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
    }), i.length > 0 && this.inline > 0 ? tn(
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
        a.length > 0 ? tn(
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
    ) : tn(
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
}, Vs = /* @__PURE__ */ Qe(dS, [["__scopeId", "data-v-7206c1f1"]]), fS = ["aria-label"], hS = ["width", "height"], pS = ["fill"], vS = ["fill"], gS = { key: 0 }, mS = /* @__PURE__ */ It({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = V(() => {
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
        }, null, 8, pS),
        l("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (y(), w("title", gS, v(e.name), 1)) : z("", !0)
        ], 8, vS)
      ], 8, hS))
    ], 8, fS));
  }
}), Gv = /* @__PURE__ */ Qe(mS, [["__scopeId", "data-v-cf399190"]]), gu = /* @__PURE__ */ It({
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
}), bS = {
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
}, yS = ["aria-hidden", "aria-label"], _S = ["fill", "width", "height"], wS = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, SS = { key: 0 };
function CS(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", wS, [
        n.title ? (y(), w("title", SS, v(n.title), 1)) : z("", !0)
      ])
    ], 8, _S))
  ], 16, yS);
}
const TS = /* @__PURE__ */ Qe(bS, [["render", CS]]), ES = {
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
}, AS = ["aria-hidden", "aria-label"], kS = ["fill", "width", "height"], xS = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, OS = { key: 0 };
function NS(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", xS, [
        n.title ? (y(), w("title", OS, v(n.title), 1)) : z("", !0)
      ])
    ], 8, kS))
  ], 16, AS);
}
const LS = /* @__PURE__ */ Qe(ES, [["render", NS]]);
Zi(G_);
const RS = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Wn,
    ChevronDown: w0,
    ChevronUp: x0
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
    return { isLegacy34: Ji };
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
function IS(e, t, n, i, a, r) {
  const o = Be("ChevronUp"), c = Be("ChevronDown"), u = Be("NcButton");
  return y(), je(u, {
    class: Ee(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Le(() => [
      n.open ? (y(), je(o, {
        key: 0,
        size: 20
      })) : (y(), je(c, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const PS = /* @__PURE__ */ Qe(RS, [["render", IS], ["__scopeId", "data-v-cfbd3794"]]);
Zi(W_, X_);
const $S = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: Vs,
    NcActionButton: nw,
    NcAppNavigationIconCollapsible: PS,
    NcInputConfirmCancel: V0,
    NcLoadingIcon: Gv,
    NcVNodes: gu,
    Pencil: TS,
    Undo: LS
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: _v, default: null }
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
      default: () => Fl(),
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
      isMobile: Lo(),
      isLegacy34: Ji
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && hi("toggle-navigation", { open: !1 }));
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
}, FS = ["id"], DS = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], MS = {
  key: 0,
  class: "editingContainer"
}, zS = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, US = { class: "app-navigation-entry__deleted-description" }, jS = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, BS = {
  key: 0,
  class: "app-navigation-entry__children"
};
function HS(e, t, n, i, a, r) {
  const o = Be("NcLoadingIcon"), c = Be("NcInputConfirmCancel"), u = Be("Pencil"), h = Be("NcActionButton"), f = Be("Undo"), b = Be("NcActions"), C = Be("NcAppNavigationIconCollapsible");
  return y(), w("li", {
    id: n.id,
    class: Ee([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (y(), je(Fu(r.isRouterLink ? "router-link" : "NcVNodes"), ms(vo({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Le(({ href: A, navigate: N, isActive: k }) => [
        l("div", {
          ref: "entry",
          class: Ee(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && k || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...O) => r.requestHighlight && r.requestHighlight(...O)),
          onFocusin: t[5] || (t[5] = (...O) => r.requestHighlight && r.requestHighlight(...O))
        }, [
          n.undo ? z("", !0) : (y(), w("a", {
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
            onKeydown: t[3] || (t[3] = nt(Pe((...O) => r.handleTab && r.handleTab(...O), ["exact"]), ["tab"]))
          }, [
            l("div", {
              class: Ee(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (y(), je(o, { key: 0 })) : Me(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && k
              }, void 0, !0)
            ], 2),
            l("span", {
              class: Ee(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, v(n.name), 3),
            a.editingActive ? (y(), w("div", MS, [
              ye(c, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (O) => a.editingValue = O),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && k || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : z("", !0)
          ], 40, DS)),
          n.undo ? (y(), w("div", zS, [
            l("div", US, v(n.name), 1)
          ])) : z("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (y(), w("div", {
            key: 2,
            class: Ee(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (y(), w("div", jS, [
              Me(e.$slots, "counter", {}, void 0, !0)
            ])) : z("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (y(), je(b, {
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
                n.editable && !a.editingActive ? (y(), je(h, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Le(() => [
                    ye(u, { size: 20 })
                  ]),
                  default: Le(() => [
                    Te(" " + v(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : z("", !0),
                n.undo ? (y(), je(h, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Le(() => [
                    ye(f, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : z("", !0),
                Me(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : z("", !0)
          ], 2)) : z("", !0),
          n.allowCollapse && e.$slots.default ? (y(), je(C, {
            key: 3,
            active: n.to && k || n.active,
            open: a.opened,
            onClick: Pe(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : z("", !0),
          Me(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (y(), w("ul", BS, [
      Me(e.$slots, "default", {}, void 0, !0)
    ])) : z("", !0)
  ], 10, FS);
}
const Ch = /* @__PURE__ */ Qe($S, [["render", HS], ["__scopeId", "data-v-01bef41b"]]), zc = /* @__PURE__ */ new WeakMap(), VS = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = qf(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = qf(e, a, Object.assign({ capture: n }, r));
    }
    zc.set(e, i);
  },
  unmounted(e) {
    const t = zc.get(e);
    t && typeof t == "function" ? t() : t?.stop(), zc.delete(e);
  }
}, KS = {
  mounted(e) {
    e.focus();
  }
}, GS = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", WS = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", mu = "numeric", bu = "ascii", yu = "alpha", to = "asciinumeric", Vr = "alphanumeric", _u = "domain", Wv = "emoji", qS = "scheme", YS = "slashscheme", Uc = "whitespace";
function XS(e, t) {
  return e in t || (t[e] = []), t[e];
}
function Ta(e, t, n) {
  t[mu] && (t[to] = !0, t[Vr] = !0), t[bu] && (t[to] = !0, t[yu] = !0), t[to] && (t[Vr] = !0), t[yu] && (t[Vr] = !0), t[Vr] && (t[_u] = !0), t[Wv] && (t[_u] = !0);
  for (const i in t) {
    const a = XS(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function ZS(e, t) {
  const n = {};
  for (const i in t)
    t[i].indexOf(e) >= 0 && (n[i] = !0);
  return n;
}
function hn(e = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = e;
}
hn.groups = {};
hn.prototype = {
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
    i = i || hn.groups;
    let a;
    return t && t.j ? a = t : (a = new hn(t), n && i && Ta(t, n, i)), this.jr.push([e, a]), a;
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
    i = i || hn.groups;
    const a = this;
    if (t && t.j)
      return a.j[e] = t, t;
    const r = t;
    let o, c = a.go(e);
    if (c ? (o = new hn(), Object.assign(o.j, c.j), o.jr.push.apply(o.jr, c.jr), o.jd = c.jd, o.t = c.t) : o = new hn(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const u = Object.assign(ZS(o.t, i), n);
          Ta(r, u, i);
        } else n && Ta(r, n, i);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Ue = (e, t, n, i, a) => e.ta(t, n, i, a), gt = (e, t, n, i, a) => e.tr(t, n, i, a), Th = (e, t, n, i, a) => e.ts(t, n, i, a), ne = (e, t, n, i, a) => e.tt(t, n, i, a), ai = "WORD", wu = "UWORD", qv = "ASCIINUMERICAL", Yv = "ALPHANUMERICAL", To = "LOCALHOST", Su = "TLD", Cu = "UTLD", gs = "SCHEME", qa = "SLASH_SCHEME", ed = "NUM", Tu = "WS", td = "NL", no = "OPENBRACE", io = "CLOSEBRACE", Ks = "OPENBRACKET", Gs = "CLOSEBRACKET", Ws = "OPENPAREN", qs = "CLOSEPAREN", Ys = "OPENANGLEBRACKET", Xs = "CLOSEANGLEBRACKET", Zs = "FULLWIDTHLEFTPAREN", Js = "FULLWIDTHRIGHTPAREN", Qs = "LEFTCORNERBRACKET", el = "RIGHTCORNERBRACKET", tl = "LEFTWHITECORNERBRACKET", nl = "RIGHTWHITECORNERBRACKET", il = "FULLWIDTHLESSTHAN", al = "FULLWIDTHGREATERTHAN", rl = "AMPERSAND", ol = "APOSTROPHE", sl = "ASTERISK", Bi = "AT", ll = "BACKSLASH", cl = "BACKTICK", ul = "CARET", Ea = "COLON", nd = "COMMA", dl = "DOLLAR", Hn = "DOT", fl = "EQUALS", id = "EXCLAMATION", yn = "HYPHEN", ao = "PERCENT", hl = "PIPE", pl = "PLUS", vl = "POUND", ro = "QUERY", ad = "QUOTE", Xv = "FULLWIDTHMIDDLEDOT", rd = "SEMI", Vn = "SLASH", oo = "TILDE", gl = "UNDERSCORE", Zv = "EMOJI", ml = "SYM";
var Jv = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Yv,
  AMPERSAND: rl,
  APOSTROPHE: ol,
  ASCIINUMERICAL: qv,
  ASTERISK: sl,
  AT: Bi,
  BACKSLASH: ll,
  BACKTICK: cl,
  CARET: ul,
  CLOSEANGLEBRACKET: Xs,
  CLOSEBRACE: io,
  CLOSEBRACKET: Gs,
  CLOSEPAREN: qs,
  COLON: Ea,
  COMMA: nd,
  DOLLAR: dl,
  DOT: Hn,
  EMOJI: Zv,
  EQUALS: fl,
  EXCLAMATION: id,
  FULLWIDTHGREATERTHAN: al,
  FULLWIDTHLEFTPAREN: Zs,
  FULLWIDTHLESSTHAN: il,
  FULLWIDTHMIDDLEDOT: Xv,
  FULLWIDTHRIGHTPAREN: Js,
  HYPHEN: yn,
  LEFTCORNERBRACKET: Qs,
  LEFTWHITECORNERBRACKET: tl,
  LOCALHOST: To,
  NL: td,
  NUM: ed,
  OPENANGLEBRACKET: Ys,
  OPENBRACE: no,
  OPENBRACKET: Ks,
  OPENPAREN: Ws,
  PERCENT: ao,
  PIPE: hl,
  PLUS: pl,
  POUND: vl,
  QUERY: ro,
  QUOTE: ad,
  RIGHTCORNERBRACKET: el,
  RIGHTWHITECORNERBRACKET: nl,
  SCHEME: gs,
  SEMI: rd,
  SLASH: Vn,
  SLASH_SCHEME: qa,
  SYM: ml,
  TILDE: oo,
  TLD: Su,
  UNDERSCORE: gl,
  UTLD: Cu,
  UWORD: wu,
  WORD: ai,
  WS: Tu
});
const ni = /[a-z]/, Mr = new RegExp("\\p{L}", "u"), jc = new RegExp("\\p{Emoji}", "u"), ii = /\d/, Bc = /\s/, Eh = "\r", Hc = `
`, JS = "️", QS = "‍", Vc = "￼";
let cs = null, us = null;
function eC(e = []) {
  const t = {};
  hn.groups = t;
  const n = new hn();
  cs == null && (cs = Ah(GS)), us == null && (us = Ah(WS)), ne(n, "'", ol), ne(n, "{", no), ne(n, "}", io), ne(n, "[", Ks), ne(n, "]", Gs), ne(n, "(", Ws), ne(n, ")", qs), ne(n, "<", Ys), ne(n, ">", Xs), ne(n, "（", Zs), ne(n, "）", Js), ne(n, "「", Qs), ne(n, "」", el), ne(n, "『", tl), ne(n, "』", nl), ne(n, "＜", il), ne(n, "＞", al), ne(n, "&", rl), ne(n, "*", sl), ne(n, "@", Bi), ne(n, "`", cl), ne(n, "^", ul), ne(n, ":", Ea), ne(n, ",", nd), ne(n, "$", dl), ne(n, ".", Hn), ne(n, "=", fl), ne(n, "!", id), ne(n, "-", yn), ne(n, "%", ao), ne(n, "|", hl), ne(n, "+", pl), ne(n, "#", vl), ne(n, "?", ro), ne(n, '"', ad), ne(n, "/", Vn), ne(n, ";", rd), ne(n, "~", oo), ne(n, "_", gl), ne(n, "\\", ll), ne(n, "・", Xv);
  const i = gt(n, ii, ed, {
    [mu]: !0
  });
  gt(i, ii, i);
  const a = gt(i, ni, qv, {
    [to]: !0
  }), r = gt(i, Mr, Yv, {
    [Vr]: !0
  }), o = gt(n, ni, ai, {
    [bu]: !0
  });
  gt(o, ii, a), gt(o, ni, o), gt(a, ii, a), gt(a, ni, a);
  const c = gt(n, Mr, wu, {
    [yu]: !0
  });
  gt(c, ni), gt(c, ii, r), gt(c, Mr, c), gt(r, ii, r), gt(r, ni), gt(r, Mr, r);
  const u = ne(n, Hc, td, {
    [Uc]: !0
  }), h = ne(n, Eh, Tu, {
    [Uc]: !0
  }), f = gt(n, Bc, Tu, {
    [Uc]: !0
  });
  ne(n, Vc, f), ne(h, Hc, u), ne(h, Vc, f), gt(h, Bc, f), ne(f, Eh), ne(f, Hc), gt(f, Bc, f), ne(f, Vc, f);
  const b = gt(n, jc, Zv, {
    [Wv]: !0
  });
  ne(b, "#"), gt(b, jc, b), ne(b, JS, b);
  const C = ne(b, QS);
  ne(C, "#"), gt(C, jc, b);
  const A = [[ni, o], [ii, a]], N = [[ni, null], [Mr, c], [ii, r]];
  for (let k = 0; k < cs.length; k++)
    Di(n, cs[k], Su, ai, A);
  for (let k = 0; k < us.length; k++)
    Di(n, us[k], Cu, wu, N);
  Ta(Su, {
    tld: !0,
    ascii: !0
  }, t), Ta(Cu, {
    utld: !0,
    alpha: !0
  }, t), Di(n, "file", gs, ai, A), Di(n, "mailto", gs, ai, A), Di(n, "http", qa, ai, A), Di(n, "https", qa, ai, A), Di(n, "ftp", qa, ai, A), Di(n, "ftps", qa, ai, A), Ta(gs, {
    scheme: !0,
    ascii: !0
  }, t), Ta(qa, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((k, O) => k[0] > O[0] ? 1 : -1);
  for (let k = 0; k < e.length; k++) {
    const O = e[k][0], D = e[k][1] ? {
      [qS]: !0
    } : {
      [YS]: !0
    };
    O.indexOf("-") >= 0 ? D[_u] = !0 : ni.test(O) ? ii.test(O) ? D[to] = !0 : D[bu] = !0 : D[mu] = !0, Th(n, O, O, D);
  }
  return Th(n, "localhost", To, {
    ascii: !0
  }), n.jd = new hn(ml), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Jv)
  };
}
function Qv(e, t) {
  const n = tC(t.replace(/[A-Z]/g, (c) => c.toLowerCase())), i = n.length, a = [];
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
function tC(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, o = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(o), i += o.length;
  }
  return t;
}
function Di(e, t, n, i, a) {
  let r;
  const o = t.length;
  for (let c = 0; c < o - 1; c++) {
    const u = t[c];
    e.j[u] ? r = e.j[u] : (r = new hn(i), r.jr = a.slice(), e.j[u] = r), e = r;
  }
  return r = new hn(n), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
}
function Ah(e) {
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
const Eo = {
  defaultProtocol: "http",
  events: null,
  format: kh,
  formatHref: kh,
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
function od(e, t = null) {
  let n = Object.assign({}, Eo);
  e && (n = Object.assign(n, e instanceof od ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
od.prototype = {
  o: Eo,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : Eo[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function kh(e) {
  return e;
}
function eg(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
eg.prototype = {
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
  toObject(e = Eo.defaultProtocol) {
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
function Ul(e, t) {
  class n extends eg {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const nC = Ul("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), xh = Ul("text"), iC = Ul("nl"), ds = Ul("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = Eo.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== To && e[1].t === Ea;
  }
}), bn = (e) => new hn(e);
function aC({
  groups: e
}) {
  const t = e.domain.concat([rl, sl, Bi, ll, cl, ul, dl, fl, yn, ed, ao, hl, pl, vl, Vn, ml, oo, gl]), n = [ol, Ea, nd, Hn, id, ao, ro, ad, rd, Ys, Xs, no, io, Gs, Ks, Ws, qs, Zs, Js, Qs, el, tl, nl, il, al], i = [rl, ol, sl, ll, cl, ul, dl, fl, yn, no, io, ao, hl, pl, vl, ro, Vn, ml, oo, gl], a = bn(), r = ne(a, oo);
  Ue(r, i, r), Ue(r, e.domain, r);
  const o = bn(), c = bn(), u = bn();
  Ue(a, e.domain, o), Ue(a, e.scheme, c), Ue(a, e.slashscheme, u), Ue(o, i, r), Ue(o, e.domain, o);
  const h = ne(o, Bi);
  ne(r, Bi, h), ne(c, Bi, h), ne(u, Bi, h);
  const f = ne(r, Hn);
  Ue(f, i, r), Ue(f, e.domain, r);
  const b = bn();
  Ue(h, e.domain, b), Ue(b, e.domain, b);
  const C = ne(b, Hn);
  Ue(C, e.domain, b);
  const A = bn(nC);
  Ue(C, e.tld, A), Ue(C, e.utld, A), ne(h, To, A);
  const N = ne(b, yn);
  ne(N, yn, N), Ue(N, e.domain, b), Ue(A, e.domain, b), ne(A, Hn, C), ne(A, yn, N);
  const k = ne(o, yn), O = ne(o, Hn);
  ne(k, yn, k), Ue(k, e.domain, o), Ue(O, i, r), Ue(O, e.domain, o);
  const F = bn(ds);
  Ue(O, e.tld, F), Ue(O, e.utld, F), Ue(F, e.domain, o), Ue(F, i, r), ne(F, Hn, O), ne(F, yn, k), ne(F, Bi, h);
  const D = ne(F, Ea), M = bn(ds);
  Ue(D, e.numeric, M);
  const E = bn(ds), re = bn();
  Ue(E, t, E), Ue(E, n, re), Ue(re, t, E), Ue(re, n, re), ne(F, Vn, E), ne(M, Vn, E);
  const ue = ne(c, Ea), X = ne(u, Ea), fe = ne(X, Vn), Y = ne(fe, Vn);
  Ue(c, e.domain, o), ne(c, Hn, O), ne(c, yn, k), Ue(u, e.domain, o), ne(u, Hn, O), ne(u, yn, k), Ue(ue, e.domain, E), ne(ue, Vn, E), ne(ue, ro, E), Ue(Y, e.domain, E), Ue(Y, t, E), ne(Y, Vn, E);
  const se = [
    [no, io],
    // {}
    [Ks, Gs],
    // []
    [Ws, qs],
    // ()
    [Ys, Xs],
    // <>
    [Zs, Js],
    // （）
    [Qs, el],
    // 「」
    [tl, nl],
    // 『』
    [il, al]
    // ＜＞
  ];
  for (let ge = 0; ge < se.length; ge++) {
    const [J, Q] = se[ge], $ = ne(E, J);
    ne(re, J, $);
    const U = bn(ds);
    Ue($, t, U);
    const q = bn();
    Ue($, n, q), ne($, Q, E), Ue(U, t, U), Ue(U, n, q), Ue(q, t, U), Ue(q, n, q), ne(U, Q, E), ne(q, Q, E);
  }
  return ne(a, To, F), ne(a, td, iC), {
    start: a,
    tokens: Jv
  };
}
function rC(e, t, n) {
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
      o.length > 0 && (r.push(Kc(xh, t, o)), o = []), a -= C, f -= C;
      const A = b.t, N = n.slice(a - f, a);
      r.push(Kc(A, t, N));
    }
  }
  return o.length > 0 && r.push(Kc(xh, t, o)), r;
}
function Kc(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const zt = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function oC() {
  zt.scanner = eC(zt.customSchemes);
  for (let e = 0; e < zt.tokenQueue.length; e++)
    zt.tokenQueue[e][1]({
      scanner: zt.scanner
    });
  zt.parser = aC(zt.scanner.tokens);
  for (let e = 0; e < zt.pluginQueue.length; e++)
    zt.pluginQueue[e][1]({
      scanner: zt.scanner,
      parser: zt.parser
    });
  return zt.initialized = !0, zt;
}
function tg(e) {
  return zt.initialized || oC(), rC(zt.parser.start, e, Qv(zt.scanner.start, e));
}
tg.scan = Qv;
function sC(e) {
  const t = new od({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, uC), n = tg(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(Rs(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function lC(e) {
  return e.replace(/"/g, "&quot;");
}
function cC(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${lC(i)}"`);
  }
  return t.join(" ");
}
function uC({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${cC(t)}>${Rs(n)}</${e}>`;
}
const dC = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = sC(t.text));
}, fC = ["title"], hC = /* @__PURE__ */ It({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = jt("NcAppSidebar:header:ref");
    return (n, i) => Re((y(), w("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Te(v(e.name), 1)
    ], 8, fC)), [
      [g(dC), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), pC = ["aria-labelledby"], vC = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, gC = ["id"], mC = {
  key: 2,
  class: "empty-content__description"
}, bC = {
  key: 3,
  class: "empty-content__action"
}, yC = /* @__PURE__ */ It({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = Fl();
    return (n, i) => (y(), w("div", {
      "aria-labelledby": g(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (y(), w("div", vC, [
        Me(n.$slots, "icon", {}, void 0, !0)
      ])) : z("", !0),
      e.name !== "" || n.$slots.name ? (y(), w("div", {
        key: 1,
        id: g(t),
        class: "empty-content__name"
      }, [
        Me(n.$slots, "name", {}, () => [
          Te(v(e.name), 1)
        ], !0)
      ], 8, gC)) : z("", !0),
      e.description !== "" || n.$slots.description ? (y(), w("p", mC, [
        Me(n.$slots, "description", {}, () => [
          Te(v(e.description), 1)
        ], !0)
      ])) : z("", !0),
      n.$slots.action ? (y(), w("div", bC, [
        Me(n.$slots, "action", {}, void 0, !0)
      ])) : z("", !0)
    ], 8, pC));
  }
}), _C = /* @__PURE__ */ Qe(yC, [["__scopeId", "data-v-8609a4c1"]]), wC = {
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
}, SC = ["aria-hidden", "aria-label"], CC = ["fill", "width", "height"], TC = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, EC = { key: 0 };
function AC(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", TC, [
        n.title ? (y(), w("title", EC, v(n.title), 1)) : z("", !0)
      ])
    ], 8, CC))
  ], 16, SC);
}
const kC = /* @__PURE__ */ Qe(wC, [["render", AC]]), xC = {
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
}, OC = ["aria-hidden", "aria-label"], NC = ["fill", "width", "height"], LC = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, RC = { key: 0 };
function IC(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", LC, [
        n.title ? (y(), w("title", RC, v(n.title), 1)) : z("", !0)
      ])
    ], 8, NC))
  ], 16, OC);
}
const PC = /* @__PURE__ */ Qe(xC, [["render", IC]]), $C = {
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
}, FC = ["aria-hidden", "aria-label"], DC = ["fill", "width", "height"], MC = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, zC = { key: 0 };
function UC(e, t, n, i, a, r) {
  return y(), w("span", Kt(e.$attrs, {
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
      l("path", MC, [
        n.title ? (y(), w("title", zC, v(n.title), 1)) : z("", !0)
      ])
    ], 8, DC))
  ], 16, FC);
}
const jC = /* @__PURE__ */ Qe($C, [["render", UC]]), BC = ["aria-selected", "tabindex"], HC = /* @__PURE__ */ It({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ sb({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = Cp(e, "selected"), n = /* @__PURE__ */ we(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (y(), w("button", {
      class: Ee(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: g(Ji),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      l("span", {
        class: Ee([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (o) => n.value = !1)
      }, [
        l("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          ye(gu, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Le(() => [
              l("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        l("span", {
          class: Ee([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          ye(gu, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Le(() => [
              l("span", {
                class: Ee([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      l("span", {
        class: Ee(a.$style.sidebarTabsButton__name)
      }, v(e.tab.name), 3)
    ], 10, BC));
  }
}), VC = "_sidebarTabsButton_q3kBA", KC = "_sidebarTabsButton_legacy_KQ4d1", GC = "_sidebarTabsButton_selected_Pjayf", WC = "_sidebarTabsButton_animatedHighlight_uvp-0", qC = "_sidebarTabsButton__name_rlQsL", YC = "_sidebarTabsButton__icon_QzZg4", XC = "_sidebarTabsButton__iconLayer_ZkZan", ZC = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", JC = "_sidebarTabsButton__icon_pop_IA0By", QC = "_sidebarTabsButton__legacyIcon_QhcNW", eT = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: VC,
  sidebarTabsButton_legacy: KC,
  sidebarTabsButton_selected: GC,
  sidebarTabsButton_animatedHighlight: WC,
  sidebarTabsButton__name: qC,
  sidebarTabsButton__icon: YC,
  sidebarTabsButton__iconLayer: XC,
  sidebarTabsButton__iconLayer_hidden: ZC,
  sidebarTabsButton__icon_pop: JC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: QC
}, tT = {
  $style: eT
}, nT = /* @__PURE__ */ Qe(HC, [["__cssModules", tT]]), iT = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: nT
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
      isLegacy34: Ji,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [c_()]) : t.order - n.order), this.updateActive();
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
}, aT = { class: "app-sidebar-tabs" };
function rT(e, t, n, i, a, r) {
  const o = Be("NcAppSidebarTabsButton");
  return y(), w("div", aT, [
    r.hasMultipleTabs || r.showForSingleTab ? (y(), w("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Ee(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = nt(Pe((...c) => r.focusPreviousTab && r.focusPreviousTab(...c), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = nt(Pe((...c) => r.focusNextTab && r.focusNextTab(...c), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = nt(Pe((...c) => r.focusActiveTabContent && r.focusActiveTabContent(...c), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = nt(Pe((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = nt(Pe((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = nt(Pe((...c) => r.focusFirstTab && r.focusFirstTab(...c), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = nt(Pe((...c) => r.focusLastTab && r.focusLastTab(...c), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onPointerleave: t[8] || (t[8] = (...c) => r.hideHighlight && r.hideHighlight(...c)),
      onFocusin: t[9] || (t[9] = (...c) => r.handleHighlight && r.handleHighlight(...c)),
      onFocusout: t[10] || (t[10] = (...c) => r.onHighlightFocusOut && r.onHighlightFocusOut(...c))
    }, [
      a.highlightEnabled ? (y(), w("div", {
        key: 0,
        class: Ee(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: vn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : z("", !0),
      (y(!0), w(ae, null, Ce(a.tabs, (c) => (y(), je(o, {
        id: `tab-button-${c.id}`,
        key: c.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${c.id}`,
        selected: a.activeTab === c.id,
        animatedHighlight: a.highlightEnabled,
        tab: c,
        "onUpdate:selected": (u) => r.setActive(c.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : z("", !0),
    l("div", {
      class: Ee(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      Me(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const oT = /* @__PURE__ */ Qe(iT, [["render", rT], ["__scopeId", "data-v-74190d2a"]]);
Zi(V_);
const sT = {
  name: "NcAppSidebar",
  components: {
    NcActions: Vs,
    NcAppSidebarHeader: hC,
    NcAppSidebarTabs: oT,
    NcButton: Wn,
    NcLoadingIcon: Gv,
    NcEmptyContent: _C,
    IconArrowRight: Tv,
    IconClose: Ev,
    IconDockRight: kC,
    IconStar: PC,
    IconStarOutline: jC
  },
  directives: {
    Focus: KS,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: VS
  },
  inject: {
    ncContentSelector: {
      from: Cv,
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
    return _n("NcAppSidebar:header:ref", e), {
      uid: Fl(),
      isMobile: M_(),
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
    isSlotPopulated: Qu,
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
      this.focusTrap || (this.focusTrap = Gu([
        // The sidebar itself
        this.$refs.sidebar,
        // Nextcloud Server header navigation
        document.querySelector("#header")
      ], {
        allowOutsideClick: !0,
        fallbackFocus: this.$refs.closeButton.$el,
        trapStack: yo(),
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
      this.open === !1 && !this.noToggle && !this.ncContentSelector && xa.warn("[NcAppSidebar] It looks like you want to use NcAppSidebar with the built-in toggle button. This feature is only available when NcAppSidebar is used in NcContent.");
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
}, lT = ["aria-labelledby"], cT = { class: "app-sidebar-header__info" }, uT = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, dT = { class: "app-sidebar-header__name-container" }, fT = { class: "app-sidebar-header__mainname-container" }, hT = ["placeholder", "value"], pT = ["title"], vT = {
  key: 2,
  class: "app-sidebar-header__description"
};
function gT(e, t, n, i, a, r) {
  const o = Be("IconDockRight"), c = Be("NcButton"), u = Be("NcLoadingIcon"), h = Be("IconStar"), f = Be("IconStarOutline"), b = Be("NcAppSidebarHeader"), C = Be("IconArrowRight"), A = Be("NcActions"), N = Be("IconClose"), k = Be("NcAppSidebarTabs"), O = Be("NcEmptyContent"), F = Gd("focus"), D = Gd("click-outside");
  return y(), je(qb, {
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
        onKeydown: t[6] || (t[6] = nt((...M) => r.onKeydownEsc && r.onKeydownEsc(...M), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (y(), je(sp, {
          key: 0,
          to: r.ncContentSelector
        }, [
          ye(c, Kt({
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
        ], 8, ["to"])) : z("", !0),
        l("header", {
          class: Ee(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (y(), je(b, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : Me(e.$slots, "info", { key: 0 }, () => [
            l("div", cT, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (y(), w("div", {
                key: 0,
                class: Ee(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: vn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...M) => r.onFigureClick && r.onFigureClick(...M)),
                onKeydown: t[2] || (t[2] = nt((...M) => r.onFigureClick && r.onFigureClick(...M), ["enter"]))
              }, [
                Me(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : z("", !0),
              l("div", {
                class: Ee(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (y(), w("div", uT, [
                  Me(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (y(), je(c, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: Pe(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Le(() => [
                        n.starLoading ? (y(), je(u, { key: 0 })) : a.isStarred ? (y(), je(h, {
                          key: 1,
                          size: 20
                        })) : (y(), je(f, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : z("", !0)
                  ], !0)
                ])) : z("", !0),
                l("div", dT, [
                  l("div", fT, [
                    Re(ye(b, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: Pe(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Qa, !n.nameEditable]
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
                        onKeydown: t[3] || (t[3] = nt(Pe((...M) => r.onDismissEditing && r.onDismissEditing(...M), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...M) => r.onNameInput && r.onNameInput(...M))
                      }, null, 40, hT), [
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
                    ]) : z("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (y(), je(A, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Le(() => [
                        Me(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : z("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (y(), w("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    Me(e.$slots, "subname", {}, () => [
                      Te(v(n.subname), 1)
                    ], !0)
                  ], 8, pT)) : z("", !0)
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
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (y(), w("div", vT, [
            Me(e.$slots, "description", {}, void 0, !0)
          ])) : z("", !0)
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
          [Qa, !n.loading]
        ]),
        n.loading ? (y(), je(O, { key: 1 }, {
          icon: Le(() => [
            ye(u, { size: 64 })
          ]),
          _: 1
        })) : z("", !0)
      ], 40, lT), [
        [Qa, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const mT = /* @__PURE__ */ Qe(sT, [["render", gT], ["__scopeId", "data-v-c2c6820b"]]), bT = {
  name: "NcActionLink",
  mixins: [kv],
  inject: {
    isInSemanticMenu: {
      from: Wu,
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
}, yT = ["role"], _T = ["download", "href", "aria-label", "target", "title", "role"], wT = {
  key: 0,
  class: "action-link__longtext-wrapper"
}, ST = { class: "action-link__name" }, CT = ["textContent"], TT = ["textContent"], ET = {
  key: 2,
  class: "action-link__text"
};
function AT(e, t, n, i, a, r) {
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
          class: Ee(["action-link__icon", [e.isIconUrl ? "action-link__icon--url" : e.icon]]),
          style: vn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null })
        }, null, 6)
      ], !0),
      e.name ? (y(), w("span", wT, [
        l("strong", ST, v(e.name), 1),
        t[1] || (t[1] = l("br", null, null, -1)),
        l("span", {
          class: "action-link__longtext",
          textContent: v(e.text)
        }, null, 8, CT)
      ])) : e.isLongText ? (y(), w("span", {
        key: 1,
        class: "action-link__longtext",
        textContent: v(e.text)
      }, null, 8, TT)) : (y(), w("span", ET, v(e.text), 1)),
      z("", !0)
    ], 8, _T)
  ], 8, yT);
}
const Ka = /* @__PURE__ */ Qe(bT, [["render", AT], ["__scopeId", "data-v-32f01b7a"]]);
Zi(Y_);
const kT = `<!--
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
`, xT = `<!--
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
`, OT = { class: "vue-skip-actions__container" }, NT = { class: "vue-skip-actions__headline" }, LT = { class: "vue-skip-actions__buttons" }, RT = /* @__PURE__ */ It({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    _n(Sv, c), _n(Cv, "#content-vue"), _n("appName", V(() => t.appName));
    const n = Lo(), i = /* @__PURE__ */ we(!1), a = /* @__PURE__ */ we(), r = V(() => a.value === "navigation" ? xT : kT);
    vp(() => {
      const u = document.getElementById("skip-actions");
      u && (u.innerHTML = "", u.classList.add("vue-skip-actions"));
    });
    function o() {
      hi("toggle-navigation", { open: !0 }), an(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function c(u) {
      i.value = u, a.value || (a.value = "navigation");
    }
    return (u, h) => (y(), w("div", {
      id: "content-vue",
      class: Ee(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": g(Ji) }]])
    }, [
      (y(), je(sp, { to: "#skip-actions" }, [
        l("div", OT, [
          l("div", NT, v(g(Tt)("Keyboard navigation help")), 1),
          l("div", LT, [
            Re(ye(Wn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: Pe(o, ["prevent"]),
              onFocusin: h[0] || (h[0] = (f) => a.value = "navigation"),
              onMouseover: h[1] || (h[1] = (f) => a.value = "navigation")
            }, {
              default: Le(() => [
                Te(v(g(Tt)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Qa, i.value]
            ]),
            ye(Wn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: h[2] || (h[2] = (f) => a.value = "content"),
              onMouseover: h[3] || (h[3] = (f) => a.value = "content")
            }, {
              default: Le(() => [
                Te(v(g(Tt)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          Re(ye($l, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Qa, !g(n)]
          ])
        ])
      ])),
      Me(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), IT = /* @__PURE__ */ Qe(RT, [["__scopeId", "data-v-d13dcb98"]]), PT = { class: "library-shelf-tree-node" }, $T = ["aria-expanded", "aria-label"], FT = ["href"], DT = { class: "library-shelf-summary-title" }, MT = { dir: "auto" }, zT = { class: "library-muted" }, UT = { dir: "auto" }, jT = {
  key: 1,
  role: "status",
  class: "library-muted"
}, BT = {
  key: 2,
  role: "status",
  class: "library-muted"
}, HT = {
  key: 3,
  class: "library-shelf-tree"
}, VT = ["disabled"], KT = {
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
      const A = Be("ShelfTreeNode", !0);
      return y(), w("li", PT, [
        e.node.hasChildren ? (y(), w("button", {
          key: 0,
          type: "button",
          class: "library-shelf-tree-toggle",
          "aria-expanded": String(n.value),
          "aria-label": n.value ? g(m)("library", "Collapse {folder}", { folder: e.node.label }) : g(m)("library", "Expand {folder}", { folder: e.node.label }),
          onClick: h
        }, v(n.value ? "−" : "+"), 9, $T)) : z("", !0),
        l("a", {
          class: "library-shelf-summary-card",
          href: e.node.url
        }, [
          l("span", DT, [
            l("strong", null, [
              l("bdi", MT, v(e.node.label), 1)
            ]),
            l("span", null, v(g(dn)("library", "%n item", "%n items", Number(e.node.itemCount || 0))), 1)
          ]),
          l("small", zT, [
            l("bdi", UT, v(e.node.path), 1)
          ])
        ], 8, FT),
        a.value ? (y(), w("small", jT, v(g(m)("library", "Loading folders…")), 1)) : r.value ? (y(), w("small", BT, v(g(m)("library", "Could not load folders.")), 1)) : z("", !0),
        n.value && o.value.length ? (y(), w("ul", HT, [
          (y(!0), w(ae, null, Ce(o.value, (N) => (y(), je(A, {
            key: N.id,
            node: N,
            "children-url": e.childrenUrl
          }, null, 8, ["node", "children-url"]))), 128))
        ])) : z("", !0),
        n.value && c.value ? (y(), w("button", {
          key: 4,
          type: "button",
          class: "library-shelf-tree-load-more",
          disabled: a.value,
          onClick: f
        }, v(g(m)("library", "Load more folders")), 9, VT)) : z("", !0)
      ]);
    };
  }
}, GT = {
  class: "library-sidebar-filter-section",
  "aria-labelledby": "library-sidebar-filters-heading"
}, WT = { id: "library-sidebar-filters-heading" }, qT = ["aria-label"], YT = ["value"], XT = ["name", "value"], ZT = ["value"], JT = ["value"], QT = ["title"], eE = ["placeholder"], tE = { value: "" }, nE = ["value"], iE = { class: "library-publisher-filter" }, aE = { for: "library-publisher-search" }, rE = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], oE = ["value"], sE = {
  key: 0,
  id: "library-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, lE = ["id", "aria-selected"], cE = ["onClick"], uE = {
  type: "submit",
  class: "button secondary library-publisher-apply"
}, dE = { class: "library-publication-filter" }, fE = { for: "library-publication-search" }, hE = ["placeholder", "aria-expanded"], pE = ["value"], vE = {
  key: 0,
  id: "library-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, gE = ["onClick"], mE = {
  type: "submit",
  class: "button secondary library-publication-apply"
}, bE = { class: "library-year-filter" }, yE = { for: "library-year-search" }, _E = ["placeholder", "aria-expanded"], wE = ["value"], SE = {
  key: 0,
  id: "library-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, CE = ["onClick"], TE = {
  type: "submit",
  class: "button secondary library-year-apply"
}, EE = { class: "library-creator-filter" }, AE = { for: "library-creator-search" }, kE = ["placeholder", "title", "aria-expanded"], xE = ["value"], OE = {
  key: 0,
  id: "library-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, NE = ["onClick"], LE = {
  type: "submit",
  class: "button secondary library-creator-apply"
}, RE = { class: "library-tag-filter" }, IE = { for: "library-tag-search" }, PE = ["placeholder", "aria-expanded"], $E = ["value"], FE = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, DE = ["onClick"], ME = {
  type: "submit",
  class: "button secondary library-tag-apply"
}, zE = { value: "" }, UE = ["value"], jE = { value: "" }, BE = ["value"], HE = { class: "library-folder-filter" }, VE = { for: "library-folder-search" }, KE = ["placeholder", "title", "aria-expanded"], GE = {
  key: 0,
  id: "library-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, WE = ["onClick"], qE = {
  type: "submit",
  class: "button secondary library-folder-apply"
}, YE = { value: "" }, XE = ["value"], ZE = { value: "" }, JE = ["value"], QE = { class: "library-subject-filter" }, eA = { for: "library-subject-search" }, tA = ["placeholder", "title", "aria-expanded"], nA = ["value"], iA = {
  key: 0,
  id: "library-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, aA = ["onClick"], rA = { class: "library-classification-filter" }, oA = { for: "library-classification-search" }, sA = ["placeholder", "title", "aria-expanded"], lA = ["value"], cA = {
  key: 0,
  id: "library-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, uA = ["onClick"], dA = {
  type: "submit",
  class: "button secondary library-classification-apply"
}, fA = { value: "" }, hA = { value: "1" }, pA = {
  type: "submit",
  class: "button primary"
}, vA = {
  href: "?",
  class: "button secondary"
}, gA = ["href"], mA = ["lang", "dir"], bA = ["aria-label"], yA = ["href", "aria-label", "title", "onClick"], _A = ["title"], wA = {
  key: 1,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, SA = { class: "library-review-header" }, CA = { class: "library-muted library-catalogue-eyebrow" }, TA = { id: "library-review-heading" }, EA = ["aria-label"], AA = ["href", "aria-current", "onClick"], kA = ["aria-label"], xA = ["name", "value"], OA = {
  type: "submit",
  class: "button secondary"
}, NA = ["aria-busy"], LA = { key: 0 }, RA = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, IA = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, PA = { class: "library-metadata-review-workbench-copy" }, $A = { class: "library-muted library-catalogue-eyebrow" }, FA = ["title"], DA = {
  key: 0,
  class: "library-metadata-review-card"
}, MA = {
  class: "library-bidi-human",
  dir: "auto"
}, zA = { class: "library-muted" }, UA = {
  class: "library-bidi-machine",
  dir: "ltr"
}, jA = { class: "library-metadata-review-fields" }, BA = {
  class: "library-bidi-human",
  dir: "auto"
}, HA = {
  class: "library-bidi-human",
  dir: "auto"
}, VA = {
  class: "library-bidi-human",
  dir: "auto"
}, KA = {
  class: "library-bidi-machine",
  dir: "ltr"
}, GA = {
  class: "library-bidi-human",
  dir: "auto"
}, WA = {
  class: "library-bidi-human",
  dir: "auto"
}, qA = ["action"], YA = ["value"], XA = ["value"], ZA = {
  type: "submit",
  class: "button secondary"
}, JA = { class: "library-metadata-review-actions" }, QA = ["href"], ek = ["href"], tk = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, nk = ["href"], ik = ["aria-label"], ak = ["onClick"], rk = {
  class: "library-bidi-human",
  dir: "auto"
}, ok = {
  key: 0,
  class: "library-muted"
}, sk = {
  class: "library-bidi-human",
  dir: "auto"
}, lk = {
  key: 1,
  class: "library-scan-error"
}, ck = {
  class: "library-bidi-human",
  dir: "auto"
}, uk = ["onClick"], dk = ["href"], fk = ["aria-label"], hk = ["href"], pk = {
  key: 1,
  class: "library-muted"
}, vk = { key: 0 }, gk = ["href"], mk = {
  key: 3,
  class: "library-muted"
}, bk = {
  key: 2,
  id: "library-home",
  class: "library-panel library-home",
  "aria-labelledby": "library-home-heading"
}, yk = { class: "library-home-header" }, _k = { class: "library-muted library-catalogue-eyebrow" }, wk = { id: "library-home-heading" }, Sk = {
  class: "library-home-row",
  "aria-labelledby": "library-continue-heading"
}, Ck = { id: "library-continue-heading" }, Tk = { class: "library-muted" }, Ek = ["href"], Ak = {
  key: 0,
  class: "library-home-card-row"
}, kk = ["aria-label", "onClick"], xk = { class: "library-cover-frame" }, Ok = ["src"], Nk = { class: "library-cover-summary" }, Lk = ["onClick"], Rk = { dir: "auto" }, Ik = {
  key: 0,
  class: "library-cover-creator"
}, Pk = { dir: "auto" }, $k = ["href"], Fk = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, Dk = {
  class: "library-home-row",
  "aria-labelledby": "library-recent-heading"
}, Mk = { id: "library-recent-heading" }, zk = { class: "library-muted" }, Uk = ["href"], jk = {
  key: 0,
  class: "library-home-card-row"
}, Bk = ["aria-label", "onClick"], Hk = { class: "library-cover-frame" }, Vk = ["src"], Kk = { class: "library-cover-summary" }, Gk = ["onClick"], Wk = { dir: "auto" }, qk = {
  key: 0,
  class: "library-cover-creator"
}, Yk = { dir: "auto" }, Xk = ["href"], Zk = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, Jk = {
  class: "library-home-row",
  "aria-labelledby": "library-home-shelves-heading"
}, Qk = { id: "library-home-shelves-heading" }, e2 = { class: "library-muted" }, t2 = ["href"], n2 = ["aria-label"], i2 = ["href"], a2 = { dir: "auto" }, r2 = {
  key: 1,
  class: "library-muted library-home-row-empty"
}, o2 = {
  key: 0,
  class: "library-home-attention",
  "aria-labelledby": "library-home-attention-heading"
}, s2 = { id: "library-home-attention-heading" }, l2 = { class: "library-muted" }, c2 = ["href"], u2 = {
  key: 3,
  id: "library-shelves-landing",
  class: "library-panel library-shelves-landing",
  "aria-labelledby": "library-shelves-landing-heading"
}, d2 = { class: "library-home-header" }, f2 = { class: "library-muted library-catalogue-eyebrow" }, h2 = { id: "library-shelves-landing-heading" }, p2 = { class: "library-muted" }, v2 = ["aria-label"], g2 = { class: "library-shelf-tree" }, m2 = {
  key: 1,
  class: "library-shelves-empty",
  role: "status"
}, b2 = { class: "library-muted" }, y2 = { class: "library-empty-actions" }, _2 = ["href"], w2 = ["href"], S2 = ["aria-busy"], C2 = { class: "library-catalogue-header" }, T2 = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, E2 = { id: "library-catalogue-heading" }, A2 = ["aria-label"], k2 = { class: "library-mobile-filter-count" }, x2 = ["aria-label"], O2 = ["value"], N2 = ["name", "value"], L2 = { class: "library-mobile-filter-group" }, R2 = { class: "library-quick-filter-search" }, I2 = ["placeholder"], P2 = { value: "" }, $2 = ["value"], F2 = { class: "library-publisher-filter" }, D2 = { for: "library-mobile-publisher-search" }, M2 = ["placeholder", "title", "aria-activedescendant", "aria-expanded"], z2 = ["value"], U2 = {
  key: 0,
  id: "library-mobile-publisher-suggestions",
  class: "library-publisher-suggestions",
  role: "listbox"
}, j2 = ["id", "aria-selected"], B2 = ["onClick"], H2 = { class: "library-publication-filter" }, V2 = { for: "library-mobile-publication-search" }, K2 = ["placeholder", "aria-expanded"], G2 = ["value"], W2 = {
  key: 0,
  id: "library-mobile-publication-suggestions",
  class: "library-publication-suggestions",
  role: "listbox"
}, q2 = ["onClick"], Y2 = { class: "library-year-filter" }, X2 = { for: "library-mobile-year-search" }, Z2 = ["placeholder", "aria-expanded"], J2 = ["value"], Q2 = {
  key: 0,
  id: "library-mobile-year-suggestions",
  class: "library-year-suggestions",
  role: "listbox"
}, ex = ["onClick"], tx = { class: "library-creator-filter" }, nx = { for: "library-mobile-creator-search" }, ix = ["placeholder", "title", "aria-expanded"], ax = ["value"], rx = {
  key: 0,
  id: "library-mobile-creator-suggestions",
  class: "library-creator-suggestions",
  role: "listbox"
}, ox = ["onClick"], sx = { value: "" }, lx = ["value"], cx = { class: "library-subject-filter" }, ux = { for: "library-mobile-subject-search" }, dx = ["placeholder", "title", "aria-expanded"], fx = ["value"], hx = {
  key: 0,
  id: "library-mobile-subject-suggestions",
  class: "library-subject-suggestions",
  role: "listbox"
}, px = ["onClick"], vx = { class: "library-classification-filter" }, gx = { for: "library-mobile-classification-search" }, mx = ["placeholder", "title", "aria-expanded"], bx = ["value"], yx = {
  key: 0,
  id: "library-mobile-classification-suggestions",
  class: "library-classification-suggestions",
  role: "listbox"
}, _x = ["onClick"], wx = { class: "library-mobile-filter-group" }, Sx = { value: "" }, Cx = ["value"], Tx = { class: "library-folder-filter" }, Ex = { for: "library-mobile-folder-search" }, Ax = ["placeholder", "title", "aria-expanded"], kx = {
  key: 0,
  id: "library-mobile-folder-suggestions",
  class: "library-folder-suggestions",
  role: "listbox"
}, xx = ["onClick"], Ox = { class: "library-mobile-filter-group" }, Nx = { value: "" }, Lx = ["value"], Rx = { value: "" }, Ix = ["value"], Px = { value: "" }, $x = { value: "1" }, Fx = { class: "library-mobile-filter-group" }, Dx = { class: "library-tag-filter" }, Mx = { for: "library-tag-search" }, zx = ["placeholder", "aria-expanded"], Ux = ["value"], jx = {
  key: 0,
  id: "library-tag-suggestions",
  class: "library-tag-suggestions",
  role: "listbox"
}, Bx = ["onClick"], Hx = {
  type: "submit",
  class: "button secondary library-tag-apply"
}, Vx = { value: "title" }, Kx = { value: "recent" }, Gx = { value: "publicationDate" }, Wx = { value: "publication" }, qx = { value: "lastOpened" }, Yx = { value: "format" }, Xx = { value: "compact" }, Zx = { value: "gallery" }, Jx = { value: "list" }, Qx = { value: "shelf" }, eO = { class: "library-mobile-filter-actions" }, tO = {
  href: "?",
  class: "button secondary library-mobile-filter-clear"
}, nO = {
  type: "submit",
  class: "button primary library-mobile-filter-primary"
}, iO = ["aria-label"], aO = ["aria-label"], rO = ["name", "value"], oO = { "data-library-control": "sort" }, sO = { value: "title" }, lO = { value: "recent" }, cO = { value: "publicationDate" }, uO = { value: "publication" }, dO = { value: "lastOpened" }, fO = { value: "format" }, hO = ["aria-label"], pO = ["aria-pressed"], vO = ["aria-pressed"], gO = ["aria-pressed"], mO = ["aria-pressed"], bO = {
  id: "library-collections",
  class: "library-saved-collections"
}, yO = ["title"], _O = ["action", "title"], wO = ["value"], SO = ["value"], CO = ["placeholder", "disabled"], TO = ["disabled", "title"], EO = ["aria-label"], AO = ["href"], kO = { class: "library-saved-collection-count" }, xO = ["action"], OO = ["value"], NO = {
  type: "submit",
  class: "button tertiary"
}, LO = ["aria-label"], RO = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, IO = ["title"], PO = { class: "library-workspace-panel-purpose" }, $O = { class: "library-workspace-scope-badge" }, FO = { "aria-live": "polite" }, DO = ["action"], MO = ["value"], zO = ["placeholder"], UO = ["title"], jO = ["action"], BO = ["value"], HO = ["placeholder"], VO = ["title"], KO = ["action"], GO = ["value"], WO = ["name", "value"], qO = ["title"], YO = ["action"], XO = ["value"], ZO = ["name", "value"], JO = { name: "bulkEditField" }, QO = { value: "publicationType" }, e3 = { value: "subtitle" }, t3 = { value: "creators" }, n3 = { value: "publication" }, i3 = { value: "publicationDate" }, a3 = { value: "language" }, r3 = { value: "publisher" }, o3 = { value: "subjects" }, s3 = { value: "classifications" }, l3 = ["placeholder"], c3 = ["title"], u3 = ["action"], d3 = ["value"], f3 = ["name", "value"], h3 = ["title"], p3 = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, v3 = {
  key: 1,
  class: "library-warning library-batch-selection-error"
}, g3 = {
  key: 2,
  class: "library-notice library-batch-metadata-apply-result"
}, m3 = {
  class: "library-catalogue-request-status",
  role: "status",
  "aria-live": "polite"
}, b3 = { key: 0 }, y3 = { key: 1 }, _3 = {
  key: 3,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, w3 = { class: "library-muted library-catalogue-eyebrow" }, S3 = ["title"], C3 = ["aria-label"], T3 = { key: 0 }, E3 = { key: 1 }, A3 = { key: 2 }, k3 = ["aria-label"], x3 = { key: 0 }, O3 = { key: 1 }, N3 = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, L3 = { class: "library-muted library-catalogue-eyebrow" }, R3 = ["title"], I3 = ["aria-label"], P3 = ["href"], $3 = {
  key: 0,
  class: "library-notice"
}, F3 = { class: "library-publication-issue-label" }, D3 = ["href"], M3 = { class: "library-muted" }, z3 = {
  key: 1,
  class: "library-publication-unknown-issues"
}, U3 = ["title"], j3 = ["href"], B3 = { class: "library-catalogue-status-row" }, H3 = { class: "library-muted library-filter-result-summary" }, V3 = { key: 0 }, K3 = { href: "?" }, G3 = ["aria-label"], W3 = { class: "library-pagination-range" }, q3 = { key: 0 }, Y3 = ["href"], X3 = {
  key: 1,
  class: "library-muted"
}, Z3 = ["href"], J3 = {
  key: 3,
  class: "library-muted"
}, Q3 = ["title"], eN = { class: "library-empty-actions" }, tN = ["href"], nN = { class: "library-muted" }, iN = ["title"], aN = { class: "library-empty-actions" }, rN = ["href"], oN = ["title"], sN = { class: "library-empty-actions" }, lN = ["href"], cN = {
  href: "?",
  class: "button primary"
}, uN = ["title"], dN = { class: "library-empty-actions" }, fN = ["href"], hN = {
  key: 5,
  class: "library-select-visible"
}, pN = ["checked"], vN = {
  key: 6,
  class: "library-catalogue-list",
  "data-library-catalogue-list": ""
}, gN = { class: "library-item-selection" }, mN = ["checked", "aria-label", "onChange"], bN = { class: "library-catalogue-list-main" }, yN = ["onClick"], _N = {
  class: "library-bidi-human",
  dir: "auto"
}, wN = {
  key: 0,
  class: "library-muted"
}, SN = {
  class: "library-bidi-human",
  dir: "auto"
}, CN = { class: "library-catalogue-list-metadata" }, TN = { key: 0 }, EN = {
  class: "library-bidi-human",
  dir: "auto"
}, AN = { key: 1 }, kN = { key: 2 }, xN = ["dir"], ON = { key: 3 }, NN = {
  class: "library-bidi-human",
  dir: "auto"
}, LN = { class: "library-catalogue-list-actions" }, RN = ["href"], IN = ["onClick"], PN = { class: "library-item-selection" }, $N = ["checked", "aria-label", "onChange"], FN = ["aria-labelledby", "aria-expanded", "onClick"], DN = ["id"], MN = { class: "library-cover-frame" }, zN = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, UN = ["src", "onLoad", "onError"], jN = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, BN = ["action", "onSubmit"], HN = ["value"], VN = ["value"], KN = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], GN = ["data-library-star-error"], WN = { class: "library-cover-summary" }, qN = { class: "library-cover-primary" }, YN = ["id"], XN = ["onClick"], ZN = {
  class: "library-bidi-human",
  dir: "auto"
}, JN = {
  key: 0,
  class: "library-cover-creator"
}, QN = {
  class: "library-bidi-human",
  dir: "auto"
}, eL = {
  key: 1,
  class: "library-cover-badges"
}, tL = {
  key: 0,
  class: "library-cover-badge"
}, nL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, iL = {
  key: 1,
  class: "library-cover-context"
}, aL = {
  class: "library-bidi-human",
  dir: "auto"
}, rL = { class: "library-cover-primary-actions" }, oL = ["href"], sL = ["aria-label"], lL = { class: "library-pagination-range" }, cL = { key: 0 }, uL = ["href"], dL = {
  key: 1,
  class: "library-muted"
}, fL = ["href"], hL = {
  key: 3,
  class: "library-muted"
}, pL = { class: "library-sidebar-content" }, vL = {
  key: 0,
  class: "library-muted",
  role: "status",
  "aria-live": "polite"
}, gL = ["role"], mL = {
  id: "library-detail-drawer-keyboard-hint",
  class: "hidden-visually"
}, bL = { class: "library-sidebar-publication-header" }, yL = {
  id: "library-detail-drawer-cover-label",
  class: "hidden-visually"
}, _L = ["src"], wL = { class: "library-sidebar-publication-summary" }, SL = { class: "library-muted library-catalogue-eyebrow" }, CL = {
  class: "library-bidi-human",
  dir: "auto"
}, TL = { key: 0 }, EL = {
  class: "library-bidi-machine",
  dir: "ltr"
}, AL = { class: "library-detail-drawer-actions" }, kL = ["href"], xL = ["aria-label"], OL = ["aria-current", "onClick"], NL = {
  key: 0,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-overview-heading"
}, LL = { id: "library-sidebar-overview-heading" }, RL = {
  key: 0,
  class: "library-sidebar-description"
}, IL = {
  class: "library-bidi-human",
  dir: "auto"
}, PL = { class: "library-detail-drawer-facts" }, $L = { key: 0 }, FL = { key: 1 }, DL = { key: 2 }, ML = { key: 3 }, zL = { key: 4 }, UL = {
  key: 1,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-metadata-heading"
}, jL = { id: "library-sidebar-metadata-heading" }, BL = ["placeholder"], HL = ["onUpdate:modelValue", "aria-label", "placeholder"], VL = ["onUpdate:modelValue", "aria-label"], KL = ["onClick"], GL = { class: "library-muted" }, WL = {
  key: 0,
  role: "alert"
}, qL = {
  key: 1,
  role: "status"
}, YL = ["disabled"], XL = {
  key: 0,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-suggestions-heading"
}, ZL = { id: "library-sidebar-suggestions-heading" }, JL = { class: "library-muted" }, QL = {
  key: 2,
  class: "library-sidebar-section",
  "aria-labelledby": "library-sidebar-activity-heading"
}, eR = { id: "library-sidebar-activity-heading" }, tR = { class: "library-detail-drawer-facts" }, nR = { key: 0 }, iR = { key: 1 }, aR = { key: 2 }, rR = { class: "library-detail-drawer-file" }, oR = ["href"], sR = { dir: "ltr" }, lR = {
  key: 1,
  dir: "ltr"
}, cR = ["aria-label"], uR = ["disabled"], dR = ["disabled"], fR = 20, hR = "/apps/library", pR = 2147483647, vR = {
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
    function r(p, d) {
      return Object.prototype.hasOwnProperty.call(a, p) && String(d ?? "").trim() === a[p];
    }
    function o(p) {
      const d = new URLSearchParams(p);
      for (const s of Object.keys(a)) {
        const P = [...new Set([...d.keys()].filter((ke) => ke === s || ke.startsWith(`${s}[`)))], te = P.reduce((ke, De) => ke + d.getAll(De).length, 0);
        if (te > 1 || P.some((ke) => ke !== s)) {
          for (const ke of P) d.delete(ke);
          continue;
        }
        s !== "status" && te === 1 && !r(s, d.get(s)) && d.delete(s);
      }
      return d;
    }
    function c(p) {
      return Object.keys(a).some((d) => p.getAll(d).length === 1 && r(d, p.get(d)));
    }
    function u(p) {
      return Object.fromEntries(Object.entries(p || {}).filter(([d, s]) => d === "status" || !Object.prototype.hasOwnProperty.call(a, d) || r(d, s)));
    }
    const h = /* @__PURE__ */ Ot({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), f = /* @__PURE__ */ Ot((h.items || []).map((p) => ({ ...p }))), b = V(() => f), C = V(() => h.shelves || []), A = V(() => h.formats || []), N = V(() => h.publicationTypes?.length ? h.publicationTypes : n), k = V(() => h.publications || []), O = V(() => h.publicationIssueContext || null), F = V(() => h.scanStatuses || []), D = V(() => h.workflowStatuses || []), M = V(() => h.cataloguePagination || {
      page: 1,
      limit: 100,
      total: b.value.length,
      visible: b.value.length,
      from: b.value.length > 0 ? 1 : 0,
      to: b.value.length,
      previousUrl: "",
      nextUrl: ""
    }), E = /* @__PURE__ */ Ot({
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
    for (const p of Object.keys(a))
      p !== "status" && (r(p, E[p]) || (E[p] = ""));
    const re = /* @__PURE__ */ we(E.publication), ue = /* @__PURE__ */ we(E.q), X = /* @__PURE__ */ we(!1), fe = /* @__PURE__ */ we(null), Y = V(() => {
      const p = re.value.trim().toLocaleLowerCase();
      return (p !== "" && fe.value !== null ? fe.value : k.value).filter((s) => p === "" || s.toLocaleLowerCase().includes(p)).slice(0, fR);
    });
    qe(() => E.publication, (p) => {
      re.value = p || "";
    }), qe(() => E.q, (p) => {
      ue.value = p || "";
    });
    let se = null, ge = null, J = 0;
    qe(re, (p) => {
      window.clearTimeout(se), ge?.abort(), ge = null, fe.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++J;
      se = window.setTimeout(() => {
        _g(d, s);
      }, 200);
    });
    const Q = /* @__PURE__ */ we(E.publisher), $ = /* @__PURE__ */ we(!1), U = /* @__PURE__ */ we(null), q = V(() => U.value || []);
    qe(() => E.publisher, (p) => {
      Q.value = p || "";
    });
    let le = null, ie = null, ve = 0;
    qe(Q, (p) => {
      window.clearTimeout(le), ie?.abort(), ie = null, U.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++ve;
      le = window.setTimeout(() => {
        pg(d, s);
      }, 200);
    });
    const de = /* @__PURE__ */ we(E.creator), be = /* @__PURE__ */ we(!1), _e = /* @__PURE__ */ we(null), Ke = V(() => _e.value || []);
    qe(() => E.creator, (p) => {
      de.value = p || "";
    });
    let Oe = null, ct = null, pt = 0;
    qe(de, (p) => {
      window.clearTimeout(Oe), ct?.abort(), ct = null, _e.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++pt;
      Oe = window.setTimeout(() => {
        hg(d, s);
      }, 200);
    });
    const it = /* @__PURE__ */ we(E.folder), ut = /* @__PURE__ */ we(!1), at = /* @__PURE__ */ we(null), Pt = V(() => at.value || []);
    qe(() => E.folder, (p) => {
      it.value = p || "";
    });
    let B = null, _ = null, T = 0;
    qe(it, (p) => {
      window.clearTimeout(B), _?.abort(), _ = null, at.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++T;
      B = window.setTimeout(() => {
        bg(d, s);
      }, 200);
    });
    const x = /* @__PURE__ */ we(E.subject), L = /* @__PURE__ */ we(!1), R = /* @__PURE__ */ we(null), j = V(() => R.value || []);
    qe(() => E.subject, (p) => {
      x.value = p || "";
    });
    let G = null, K = null, Z = 0;
    qe(x, (p) => {
      window.clearTimeout(G), K?.abort(), K = null, R.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++Z;
      G = window.setTimeout(() => {
        vg(d, s);
      }, 200);
    });
    const H = /* @__PURE__ */ we(E.classification), he = /* @__PURE__ */ we(!1), oe = /* @__PURE__ */ we(null), pe = V(() => oe.value || []);
    qe(() => E.classification, (p) => {
      H.value = p || "";
    });
    let Ae = null, Ie = null, ze = 0;
    qe(H, (p) => {
      window.clearTimeout(Ae), Ie?.abort(), Ie = null, oe.value = null;
      const d = String(p || "").trim();
      if (d.length < 3) return;
      const s = ++ze;
      Ae = window.setTimeout(() => {
        gg(d, s);
      }, 200);
    });
    const $e = /* @__PURE__ */ we(E.tag), He = /* @__PURE__ */ we(!1), rt = /* @__PURE__ */ we(null), vt = V(() => rt.value || []);
    qe(() => E.tag, (p) => {
      $e.value = p || "";
    });
    let At = null, $t = null, An = 0;
    qe($e, (p) => {
      window.clearTimeout(At), $t?.abort(), $t = null, rt.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++An;
      At = window.setTimeout(() => {
        mg(d, s);
      }, 200);
    });
    const et = /* @__PURE__ */ we(E.year), dt = /* @__PURE__ */ we(!1), Fn = /* @__PURE__ */ we(null), gn = V(() => Fn.value || []);
    qe(() => E.year, (p) => {
      et.value = p || "";
    });
    let Qi = null, _i = null, Dn = 0;
    qe(et, (p) => {
      window.clearTimeout(Qi), _i?.abort(), _i = null, Fn.value = null;
      const d = String(p || "").trim();
      if (d.length < 2) return;
      const s = ++Dn;
      Qi = window.setTimeout(() => {
        yg(d, s);
      }, 200);
    });
    const wi = Object.fromEntries(Object.keys(E).map((p) => [p, p === "sort" ? "title" : p === "view" ? "compact" : ""])), rr = window.location.pathname.indexOf(hR), Xn = rr >= 0 ? window.location.pathname.slice(0, rr) : "", Si = {
      catalogue: `${Xn}/apps/library/`,
      review: `${Xn}/apps/library/?scannerConflicts=1`,
      settings: `${Xn}/settings/user/library`
    };
    function Ci(p, d) {
      if (typeof p != "string" || p === "") return d;
      try {
        const s = Xn ? `${Xn}/` : "/";
        let P = p;
        for (let te = 0; te < 5; te += 1) {
          if (!P.startsWith("/") || P.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(P)) return d;
          const ke = new URL(P, window.location.origin);
          if (ke.origin !== window.location.origin || !ke.pathname.startsWith(s)) return d;
          const De = P.split(/[?#]/, 1)[0];
          for (const cn of De.split("/")) {
            let Pi = cn;
            for (let Ua = 0; Ua < 5; Ua += 1) {
              const Un = decodeURIComponent(Pi);
              if (/[\\/\u0000-\u001f\u007f]/.test(Un) || Un === "." || Un === "..") return d;
              if (Un === Pi) break;
              if (Pi = Un, Ua === 4) return d;
            }
          }
          const Xe = decodeURI(P);
          if (Xe === P) return p;
          P = Xe;
        }
        return d;
      } catch {
        return d;
      }
    }
    const Ti = V(() => Ci(h.settingsUrl, Si.settings)), Ct = V(() => Ci(h.catalogueRootUrl, Si.catalogue)), Ia = V(() => Ci(h.homeUrl, `${Si.catalogue}?home=1`)), rn = V(() => Ci(h.shelvesUrl, `${Si.catalogue}?shelves=1`)), Ei = V(() => Ci(h.reviewUrl || h.scannerConflictReviewUrl, Si.review)), ea = V(() => Object.entries(a).some(([p, d]) => E[p] === d)), Pa = V(() => i.reduce((p, d) => p + Number(rc.value[d.countKey] || 0), 0)), ta = V(() => h.surface === "home"), Ai = V(() => h.surface === "shelves"), or = V(() => !ta.value && !Ai.value && !ea.value && !E.starred && E.sort !== "lastOpened" && !E.shelf), Ro = V(() => [
      { key: "home", name: m("library", "Home"), href: Ia.value, active: ta.value },
      { key: "all", name: m("library", "All publications"), href: Ct.value, active: or.value },
      { key: "starred", name: m("library", "Starred"), href: `${Ct.value}?starred=1`, active: E.starred === "1" },
      { key: "continue", name: m("library", "Continue reading"), href: `${Ct.value}?sort=lastOpened`, active: E.sort === "lastOpened" },
      { key: "shelves", name: m("library", "Shelves"), href: rn.value, active: Ai.value || !!E.shelf },
      { key: "collections", name: m("library", "Collections"), href: `${Ct.value}#library-collections`, active: !1 }
    ]), Jt = V(() => h.requestToken || ""), Io = V(() => h.catalogueEndpointUrl || "/apps/library/catalogue"), na = V(() => h.shelfChildrenUrl || "/apps/library/shelves/children"), jl = V(() => h.publicationSuggestionsUrl || "/apps/library/catalogue/publication-suggestions"), Bl = V(() => h.creatorSuggestionsUrl || "/apps/library/catalogue/creator-suggestions"), ht = V(() => h.publisherSuggestionsUrl || "/apps/library/catalogue/publisher-suggestions"), ki = V(() => h.subjectSuggestionsUrl || "/apps/library/catalogue/subject-suggestions"), Hl = V(() => h.classificationSuggestionsUrl || "/apps/library/catalogue/classification-suggestions"), Po = V(() => h.tagSuggestionsUrl || "/apps/library/catalogue/tag-suggestions"), sr = V(() => h.folderSuggestionsUrl || "/apps/library/catalogue/folder-suggestions"), $o = V(() => h.yearSuggestionsUrl || "/apps/library/catalogue/year-suggestions"), Fo = V(() => h.itemSidebarUrlTemplate || `${Xn}/apps/library/items/__ITEM_ID__/sidebar`), Vl = V(() => h.batchTagUrl || "/apps/library/bulk/tags"), Kl = V(() => h.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), Gl = V(() => h.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), Wl = V(() => h.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), Mn = V(() => h.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), lr = V(() => h.scannerConflictReviewUrl || "?scannerConflicts=1");
    h.importHealthSummary, h.importHealthSummary && Object.keys(h.importHealthSummary).length > 0;
    const xi = V(() => h.discoveryPage === "publication"), kn = V(() => h.discoveryPage === "year"), cr = V(() => h.discoveryPage === "creator"), Oi = V(() => xi.value || kn.value || cr.value), ur = V(() => h.discoveryTitle || E.publication || E.year || E.creator || ""), ql = V(() => Oi.value ? ur.value : m("library", "Library")), dr = V(() => cr.value ? m("library", "Creator") : kn.value ? m("library", "Publication year") : m("library", "Publication / series")), fr = V(() => Number(h.rootCount || 0)), $a = V(() => Number(h.enabledRootCount || 0)), ia = V(() => fr.value === 0), Ni = V(() => fr.value > 0 && $a.value === 0), Zn = V(() => S.value.length > 0), Gt = /* @__PURE__ */ we(!1), on = /* @__PURE__ */ we(null), Do = {
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
    }, Fa = {
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
    }, Yl = {
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
    }, hr = V(() => {
      if (typeof window > "u") return "";
      const p = new URLSearchParams(window.location.search);
      if (p.get("batchMetadataApplyResult") !== "1") return "";
      const d = p.get("batchMetadataField") || "field", s = p.get("batchMetadataApplied") || "0", P = p.get("batchMetadataUnchanged") || "0", te = p.get("batchMetadataSkipped") || "0";
      return m("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: s, field: d, unchanged: P, skipped: te });
    }), pr = V(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? m("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), vr = V(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchSelectionError") === "1" ? m("library", "The selected items were invalid. Select items in the catalogue and try again.") : ""), gr = V(() => h.savedCollections || []), Xl = V(() => h.savedCollectionSaveUrl || "/apps/library/collections"), Mo = V(() => h.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), zo = ["compact", "gallery", "list", "shelf"], Qt = V(() => zo.includes(E.view) ? E.view : "compact"), Uo = V(() => ({
      "library-cover-gallery--compact": Qt.value === "compact",
      "library-cover-gallery--gallery": Qt.value === "gallery",
      "library-cover-gallery--shelf": Qt.value === "shelf"
    }));
    function Da(p) {
      const d = String(p || "").trim();
      if (d.length <= 32) return d;
      const s = d.split("/").filter(Boolean);
      return s.length > 0 ? `…/${s.at(-1)}` : d;
    }
    function mr(p, d) {
      const s = String(d || "").trim();
      if (s === "" || Fa[p] === s) return "";
      if (p === "format") return s.toUpperCase();
      if (p === "folder") return Da(s);
      const P = Yl[p]?.[s];
      return P ? m("library", P) : s;
    }
    function ee(p, d) {
      const s = String(E[p] || "").trim(), P = mr(p, s), te = m("library", d);
      return {
        key: p,
        label: te,
        value: s,
        displayValue: P,
        title: P ? `${te}: ${s}` : te
      };
    }
    const S = V(() => Object.entries(Do).map(([p, d]) => ee(p, d)).filter((p) => p.value !== "" && !(p.key === "sort" && p.value === "title") && !(p.key === "view" && p.value === "compact"))), I = V(() => S.value.length), W = V(() => I.value > 0 ? m("library", "Filters ({count})", { count: I.value }) : m("library", "Filters")), ce = V(() => I.value > 0 ? m("library", "Open filters panel; {count} active filters", { count: I.value }) : m("library", "Open filters panel")), me = V(() => dn("library", "Show %n item", "Show %n items", Number(M.value.total || 0)));
    function Ne(p) {
      Gt.value = p.currentTarget?.open === !0, Gt.value && an(() => {
        on.value?.focus?.();
      });
    }
    const tt = /* @__PURE__ */ new Set([
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
    ]), ot = V(() => Object.entries(u(E)).filter(([p, d]) => !tt.has(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), Ft = V(() => Object.entries(E).filter(([p, d]) => !["q", "sort", "starred"].includes(p) && String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), _t = V(() => Object.entries(u(E)).filter(([p, d]) => String(d || "").trim() !== "").map(([p, d]) => ({ key: p, value: d }))), br = V(() => _t.value.filter(({ key: p, value: d }) => p !== "q" && !(p === "sort" && d === "title"))), wt = /* @__PURE__ */ Ot({}), jo = V(() => h.homeRows || { continueReading: [], recentlyAdded: [] }), sd = V(() => h.homeShelves || []), ld = V(() => h.shelfTree || []), Zl = V(() => h.needsAttention || { count: 0, url: `${Ct.value}?needsMetadata=1` }), xn = /* @__PURE__ */ we([]), Bo = V(() => new Set(xn.value));
    function cd(p, d) {
      const s = new Set(xn.value);
      d ? s.add(Number(p)) : s.delete(Number(p)), xn.value = [...s];
    }
    function ng(p) {
      xn.value = p.currentTarget.checked ? b.value.map((d) => Number(d.id)) : [];
    }
    function ig() {
      const p = new Set(b.value.map((d) => Number(d.id)));
      xn.value = xn.value.filter((d) => p.has(d));
    }
    function ag(p) {
      const d = p.target;
      if (d instanceof HTMLFormElement) {
        d.querySelectorAll("input[data-library-selected-id]").forEach((s) => s.remove());
        for (const s of xn.value) {
          const P = document.createElement("input");
          P.type = "hidden", P.name = "itemIds[]", P.value = String(s), P.dataset.librarySelectedId = "1", d.appendChild(P);
        }
      }
    }
    const xe = /* @__PURE__ */ we(null), aa = /* @__PURE__ */ we(null), Wt = /* @__PURE__ */ Ot({ loading: !1, error: "", missing: !1 }), ra = /* @__PURE__ */ we("overview"), On = /* @__PURE__ */ Ot({ saving: !1, saved: !1, error: "" }), Dt = /* @__PURE__ */ Ot({ title: "", publicationDate: "", identifiers: [] }), ud = /* @__PURE__ */ we(null), oa = /* @__PURE__ */ we(null), sa = /* @__PURE__ */ we(!1);
    let Jl = null, Jn = null, Ho = null, Ql = !1, yr = null, ec = 0;
    const Li = V(() => aa.value !== null), _r = V(() => xe.value ? b.value.findIndex((p) => p.id === xe.value.id) : -1), Vo = V(() => _r.value > 0 ? b.value[_r.value - 1] : null), Ko = V(() => _r.value >= 0 && _r.value < b.value.length - 1 ? b.value[_r.value + 1] : null), rg = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "subjects", "classifications"], og = [
      { key: "overview", label: "Overview" },
      { key: "metadata", label: "Metadata" },
      { key: "activity", label: "Activity" }
    ];
    function Go(p) {
      const d = String(p ?? "").trim(), s = d.match(/^(\d{4}-\d{2}-\d{2})[T ]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/);
      return s ? s[1] : d;
    }
    function dd(p) {
      return { ...p, publicationDate: Go(p?.publicationDate) };
    }
    function fd(p) {
      Dt.title = String(p?.title || ""), Dt.publicationDate = Go(p?.publicationDate), Dt.identifiers = Array.isArray(p?.identifiers) ? p.identifiers.map((d) => ({ scheme: String(d?.scheme || ""), displayValue: String(d?.displayValue || d?.value || "") })) : [], Object.assign(On, { saving: !1, saved: !1, error: "" });
    }
    function sg() {
      Dt.identifiers.push({ scheme: "", displayValue: "" });
    }
    function lg(p) {
      Dt.identifiers.splice(p, 1);
    }
    async function cg() {
      const p = xe.value;
      if (!p?.updateUrl || On.saving) return;
      Object.assign(On, { saving: !0, saved: !1, error: "" });
      const d = new FormData();
      d.set("requesttoken", Jt.value), d.set("metadataAutosave", "1");
      for (const s of ["publicationType", "subtitle", "creators", "publication", "language", "publisher", "description", "subjects", "classifications", "personalRating"]) {
        const P = p[s];
        d.set(s, Array.isArray(P) ? P.join(", ") : String(P ?? ""));
      }
      d.set("title", Dt.title), d.set("publicationDate", Go(Dt.publicationDate)), Dt.identifiers.forEach((s, P) => {
        d.set(`identifiers[${P}][scheme]`, s.scheme), d.set(`identifiers[${P}][displayValue]`, s.displayValue);
      });
      try {
        const s = await fetch(p.updateUrl, { method: "POST", body: d, credentials: "same-origin", headers: { Accept: "application/json" } }), P = await s.json().catch(() => ({}));
        if (!s.ok || P.saved !== !0) throw new Error(P.error || m("library", "Metadata could not be saved."));
        p.title = Dt.title.trim(), p.publicationDate = Go(Dt.publicationDate), p.identifiers = Dt.identifiers.filter((ke) => ke.scheme.trim() || ke.displayValue.trim()).map((ke) => ({ ...ke }));
        const te = b.value.find((ke) => Number(ke.id) === Number(p.id));
        te && (te.title = p.title, te.publicationDate = p.publicationDate), On.saved = !0;
      } catch (s) {
        On.error = s?.message || m("library", "Metadata could not be saved.");
      } finally {
        On.saving = !1;
      }
    }
    const Ri = V(() => {
      const p = r("scannerConflicts", E.scannerConflicts) || r("weakMetadata", E.weakMetadata), d = p ? b.value.find((s) => Wo(s).length > 0) : null;
      return {
        enabled: p,
        item: d,
        fields: d ? Wo(d) : [],
        reviewNextUrl: lr.value,
        skipUrl: M.value.nextUrl || lr.value
      };
    }), ug = V(() => i.map((p) => ({
      ...p,
      label: m("library", p.label),
      href: `${Ct.value}?${encodeURIComponent(p.key)}=${encodeURIComponent(p.value)}`,
      active: String(E[p.key] || "") === p.value
    })));
    function tc(p) {
      return Array.isArray(p) ? JSON.stringify(p) : p == null ? "" : String(p);
    }
    function Wo(p) {
      const d = p.fieldValues || {}, s = p.fieldSources || {};
      return rg.filter((P) => Object.prototype.hasOwnProperty.call(d, P)).map((P) => {
        const te = tc(p[P]), ke = tc(d[P]), De = tc(s[P] || p.metadataSource || "scanner"), Xe = De.includes("filename") || De.includes("path") ? ke : "", cn = De.includes("sidecar") ? ke : "";
        return { field: P, currentValue: te, scannerCandidate: ke, pathTemplateCandidate: Xe, sidecarValue: cn, sourceProvenance: De, differs: te !== ke };
      }).filter((P) => P.differs);
    }
    let la = 0, ca = null;
    function hd() {
      const p = new URLSearchParams(window.location.search).getAll("item");
      if (p.length !== 1 || !/^[1-9][0-9]*$/.test(p[0])) return null;
      const d = Number(p[0]);
      return Number.isSafeInteger(d) && d <= pR ? d : null;
    }
    function pd(p, d = "push") {
      const s = new URL(window.location.href);
      s.searchParams.delete("item"), p !== null && s.searchParams.set("item", String(p)), history[`${d}State`]({}, "", `${s.pathname}${s.search}${s.hash}`);
    }
    async function wr(p, { historyMode: d = "push", seed: s = null } = {}) {
      ca?.abort();
      const P = ++la, te = new AbortController();
      ca = te, aa.value = p, ra.value = "overview", xe.value = s && Number(s.id) === p ? dd(s) : null, xe.value && fd(xe.value), Object.assign(Wt, { loading: !0, error: "", missing: !1 }), d !== "none" && pd(p, d);
      try {
        const ke = Fo.value.replace("__ITEM_ID__", encodeURIComponent(String(p))), De = await fetch(ke, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: te.signal });
        if (P !== la) return;
        if (!De.ok) {
          xe.value = null, Wt.missing = De.status === 404, Wt.error = De.status === 404 ? m("library", "This publication is unavailable or you do not have access.") : m("library", "Could not load publication details. Try again.");
          return;
        }
        const Xe = await De.json();
        if (P !== la) return;
        if (typeof Xe?.item?.id != "number" || !Number.isSafeInteger(Xe.item.id) || Xe.item.id !== p) {
          xe.value = null, Wt.missing = !1, Wt.error = m("library", "Could not load publication details. Try again.");
          return;
        }
        xe.value = dd(Xe.item), fd(xe.value), await an();
      } catch (ke) {
        P === la && ke?.name !== "AbortError" && (xe.value = null, Wt.missing = !1, Wt.error = m("library", "Could not load publication details. Try again."));
      } finally {
        P === la && (Wt.loading = !1, ca = null);
      }
    }
    function zn(p, d) {
      nc(), Jl = d?.currentTarget instanceof HTMLElement ? d.currentTarget : null, wr(Number(p.id), { seed: p });
    }
    function qo({ historyMode: p = "push", restoreFocus: d = !0 } = {}) {
      Ho = d ? Jl : null, Jl = null, ca?.abort(), ca = null, la += 1, aa.value = null, xe.value = null, ra.value = "overview", Object.assign(Wt, { loading: !1, error: "", missing: !1 }), p !== "none" && pd(null, p);
    }
    function vd() {
      sa.value ? (oa.value?.$refs?.sidebar || oa.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : ud.value?.focus();
    }
    function dg() {
      const p = Ho;
      if (Ho = null, nc(), Ql || !p?.isConnected) return;
      const d = ec;
      yr = window.requestAnimationFrame(() => {
        yr = null, !(d !== ec || Ql || Li.value || !p.isConnected) && p.focus();
      });
    }
    function nc() {
      ec += 1, yr !== null && (window.cancelAnimationFrame(yr), yr = null);
    }
    function Sr(p = Jn) {
      sa.value = !!p?.matches, Li.value && an(vd);
    }
    function Yo(p) {
      p && wr(Number(p.id), { seed: p });
    }
    const Cr = /* @__PURE__ */ we(null);
    let sn = 0, Ma = null, Xo = null, Tr = null;
    const kt = /* @__PURE__ */ Ot({ loading: !1, error: "", completed: !1 });
    function fg(p) {
      const d = o(new FormData(p));
      d.delete("publicationSearch"), d.delete("creatorSearch"), d.delete("subjectSearch"), d.delete("publisherSearch"), d.delete("classificationSearch"), d.delete("tagSearch"), d.delete("folderSearch"), d.delete("yearSearch");
      for (const s of Array.from(d.keys()))
        String(d.get(s) || "").trim() === "" && d.delete(s);
      return d.delete("page"), d.get("view") === "compact" && d.delete("view"), d.get("sort") === "title" && d.delete("sort"), d;
    }
    async function ua(p, d, s) {
      const P = new URLSearchParams();
      for (const [De, Xe] of Object.entries(E)) {
        const cn = String(Xe || "").trim();
        De !== p && cn !== "" && !(De === "sort" && cn === "title") && !(De === "view" && cn === "compact") && P.set(De, cn);
      }
      P.set(`${p}Search`, d);
      const te = new AbortController();
      p === "creator" ? ct = te : p === "publisher" ? ie = te : p === "subject" ? K = te : p === "classification" ? Ie = te : p === "tag" ? $t = te : p === "folder" ? _ = te : _i = te;
      const ke = p === "creator" ? Bl.value : p === "publisher" ? ht.value : p === "subject" ? ki.value : p === "classification" ? Hl.value : p === "tag" ? Po.value : p === "folder" ? sr.value : $o.value;
      try {
        const De = await fetch(`${ke}?${P}`, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: te.signal });
        if (!De.ok) throw new Error(`${p} suggestions request failed: ${De.status}`);
        const Xe = await De.json(), cn = p === "creator" ? pt : p === "publisher" ? ve : p === "subject" ? Z : p === "classification" ? ze : p === "tag" ? An : p === "folder" ? T : Dn, Pi = p === "creator" ? de.value : p === "publisher" ? Q.value : p === "subject" ? x.value : p === "classification" ? H.value : p === "tag" ? $e.value : p === "folder" ? it.value : et.value;
        s === cn && Pi.trim() === d && (p === "creator" ? _e.value = Array.isArray(Xe.creators) ? Xe.creators : [] : p === "publisher" ? U.value = Array.isArray(Xe.publishers) ? Xe.publishers : [] : p === "subject" ? R.value = Array.isArray(Xe.subjects) ? Xe.subjects : [] : p === "classification" ? oe.value = Array.isArray(Xe.classifications) ? Xe.classifications : [] : p === "tag" ? rt.value = Array.isArray(Xe.tags) ? Xe.tags : [] : p === "folder" ? at.value = Array.isArray(Xe.folders) ? Xe.folders : [] : Fn.value = Array.isArray(Xe.years) ? Xe.years : []);
      } catch (De) {
        De?.name !== "AbortError" && (p === "creator" && s === pt && (_e.value = null), p === "publisher" && s === ve && (U.value = null), p === "subject" && s === Z && (R.value = null), p === "classification" && s === ze && (oe.value = null), p === "tag" && s === An && (rt.value = null), p === "folder" && s === T && (at.value = null), p === "year" && s === Dn && (Fn.value = null));
      }
    }
    function hg(p, d) {
      return ua("creator", p, d);
    }
    function pg(p, d) {
      return ua("publisher", p, d);
    }
    function vg(p, d) {
      return ua("subject", p, d);
    }
    function gg(p, d) {
      return ua("classification", p, d);
    }
    function mg(p, d) {
      return ua("tag", p, d);
    }
    function bg(p, d) {
      return ua("folder", p, d);
    }
    function yg(p, d) {
      return ua("year", p, d);
    }
    async function _g(p, d) {
      const s = new URLSearchParams();
      for (const [te, ke] of Object.entries(E)) {
        const De = String(ke || "").trim();
        te !== "publication" && De !== "" && !(te === "sort" && De === "title") && !(te === "view" && De === "compact") && s.set(te, De);
      }
      s.set("publicationSearch", p);
      const P = new AbortController();
      ge = P;
      try {
        const te = await fetch(`${jl.value}?${s}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: P.signal
        });
        if (!te.ok) throw new Error(`Publication suggestions request failed: ${te.status}`);
        const ke = await te.json();
        d === J && re.value.trim() === p && (fe.value = Array.isArray(ke.publications) ? ke.publications : []);
      } catch (te) {
        te?.name !== "AbortError" && d === J && (fe.value = null);
      } finally {
        d === J && (ge = null);
      }
    }
    function wg(p) {
      f.splice(0, f.length, ...(p.items || []).map((s) => ({ ...s }))), ig();
      const d = new Set(p.facetsDeferred ? [
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
        !d.has(s) && Object.prototype.hasOwnProperty.call(p, s) && (h[s] = p[s]);
      Object.assign(E, wi, p.activeFilters || {});
    }
    async function Sg() {
      if (h.surface !== "index") return;
      const p = sn, d = JSON.stringify({ ...E }), s = new URLSearchParams();
      s.set("hydrate", "1");
      for (const [te, ke] of Object.entries(E)) {
        const De = String(ke || "").trim();
        De !== "" && !(te === "sort" && De === "title") && !(te === "view" && De === "compact") && s.set(te, De);
      }
      const P = new AbortController();
      Xo = P;
      try {
        const te = await fetch(`${Io.value}${s.size ? `?${s}` : ""}`, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: P.signal
        });
        if (!te.ok) return;
        const ke = await te.json();
        if (p !== sn || d !== JSON.stringify({ ...E })) return;
        for (const De of ["shelves", "formats", "publicationTypes", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "scanStatuses", "workflowStatuses", "classifications", "smartViewCounts", "smartViewCountsPending", "savedCollections"])
          Object.prototype.hasOwnProperty.call(ke, De) && (h[De] = ke[De]);
      } catch (te) {
        if (te?.name !== "AbortError") return;
      } finally {
        Xo === P && (Xo = null);
      }
    }
    async function en(p, d = null) {
      const s = p?.currentTarget?.tagName === "FORM" ? p.currentTarget : p?.currentTarget?.form;
      if (!s && !d?.params) return;
      const P = o(d?.params ?? fg(s));
      if (ta.value || Ai.value) {
        Er(P, Ct.value);
        return;
      }
      const te = P.toString(), ke = te ? `?${te}` : "", De = d?.generation ?? ++sn, Xe = c(P), cn = d?.historyMode ?? (Xe ? "push" : "replace"), Pi = d?.historyTraversal === !0;
      if (De !== sn) return;
      d === null && Ma?.abort();
      const Ua = new AbortController();
      Ma = Ua, kt.loading = !0, kt.error = "", kt.completed = !1;
      try {
        const Un = await fetch(Io.value + ke, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Ua.signal
        });
        if (De !== sn) return;
        if (!Un.ok) {
          Pi ? Er(P) : Xe ? kt.error = m("library", "Could not load this review queue. Try again.") : Er(P);
          return;
        }
        const Bg = await Un.json();
        if (De !== sn) return;
        wg(Bg), kt.completed = !0, cn !== "none" && (history[cn === "push" ? "pushState" : "replaceState"]({}, "", te ? `?${te}` : window.location.pathname), Li.value && qo({ historyMode: "none" }));
      } catch (Un) {
        De === sn && Un?.name !== "AbortError" && (Pi ? Er(P) : Xe ? kt.error = m("library", "Could not load this review queue. Try again.") : Er(P));
      } finally {
        De === sn && (Ma = null, kt.loading = !1);
      }
    }
    function gd() {
      Ma?.abort();
      const p = new URLSearchParams(window.location.search), d = hd();
      p.has("item") && d === null && (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)), d === null ? qo({ historyMode: "none" }) : wr(d, { historyMode: "none", seed: b.value.find((s) => Number(s.id) === d) || null }), p.delete("item"), en(null, {
        params: o(p),
        generation: ++sn,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Er(p, d = window.location.pathname) {
      const s = document.createElement("form");
      s.method = "get", s.action = d, s.hidden = !0;
      for (const [P, te] of p.entries()) {
        const ke = document.createElement("input");
        ke.type = "hidden", ke.name = P, ke.value = te, s.appendChild(ke);
      }
      document.body.appendChild(s), s.submit(), s.remove();
    }
    function ln(p, d = null, s = null) {
      if (d === null) {
        en(p);
        return;
      }
      en({ currentTarget: p }, { params: d, generation: s });
    }
    async function Cg(p, d = re.value) {
      E.publication = String(d || "").trim(), re.value = E.publication, X.value = !1, await an(), en({ currentTarget: p });
    }
    function md(p, d) {
      Cg(d.currentTarget.form, p);
    }
    async function Tg(p) {
      E.q = String(ue.value || "").trim(), E.publication = String(re.value || "").trim(), E.publisher = String(Q.value || "").trim(), E.creator = String(de.value || "").trim(), E.subject = String(x.value || "").trim(), E.folder = String(it.value || "").trim(), E.year = String(et.value || "").trim(), X.value = !1, $.value = !1, be.value = !1, L.value = !1, ut.value = !1, dt.value = !1, await an(), en({ currentTarget: p });
    }
    async function Ii(p, d, s) {
      E[d] = String(s || "").trim(), d === "creator" ? (de.value = E.creator, be.value = !1) : d === "publisher" ? (Q.value = E.publisher, $.value = !1) : d === "subject" ? (x.value = E.subject, L.value = !1) : d === "folder" ? (it.value = E.folder, ut.value = !1) : d === "classification" ? (H.value = E.classification, he.value = !1) : d === "tag" ? ($e.value = E.tag, He.value = !1) : (et.value = E.year, dt.value = !1), Qn[d] = -1, await an(), en({ currentTarget: p });
    }
    function bd(p) {
      Tg(p.currentTarget);
    }
    function yd(p, d) {
      Ii(d.currentTarget.form, "creator", p);
    }
    function _d(p, d) {
      Ii(d.currentTarget.form, "publisher", p);
    }
    function wd(p, d) {
      Ii(d.currentTarget.form, "classification", p);
    }
    function Sd(p, d) {
      Ii(d.currentTarget.form, "tag", p);
    }
    function Cd(p, d) {
      Ii(d.currentTarget.form, "folder", p);
    }
    function Td(p, d = x.value) {
      window.clearTimeout(G), K?.abort(), K = null, Ii(p, "subject", d);
    }
    function Eg(p) {
      Td(p.currentTarget.form);
    }
    function Ed(p, d) {
      Td(d.currentTarget.form, p);
    }
    function Ad(p, d) {
      Ii(d.currentTarget.form, "year", p);
    }
    const Qn = /* @__PURE__ */ Ot({
      publisher: -1,
      publication: -1,
      year: -1,
      creator: -1,
      tag: -1,
      folder: -1,
      subject: -1,
      classification: -1
    });
    function Ag(p) {
      return q.value;
    }
    function ic(p, d, s) {
      return `library-${p}-${d}-suggestion-${s}`;
    }
    function kd(p, d) {
      const s = Qn[d];
      return s >= 0 ? ic(p, d, s) : void 0;
    }
    function ac(p, d) {
      $.value = d, d || (Qn[p] = -1);
    }
    function xd(p) {
      Qn[p] = -1, ac(p, !0);
    }
    function kg(p, d, s) {
      Ii(s, p, d);
    }
    function Od(p, d) {
      const s = Ag();
      if (p.key === "Escape") {
        ac(d, !1);
        return;
      }
      if (!["ArrowDown", "ArrowUp", "Enter"].includes(p.key) || s.length === 0) return;
      if (p.key === "Enter") {
        const ke = Qn[d];
        if (ke < 0) return;
        p.preventDefault(), kg(d, s[ke], p.currentTarget.form);
        return;
      }
      p.preventDefault(), ac(d, !0);
      const P = Qn[d], te = p.key === "ArrowDown" ? 1 : -1;
      Qn[d] = P < 0 ? te > 0 ? 0 : s.length - 1 : (P + te + s.length) % s.length;
    }
    function Nd(p) {
      const d = new URLSearchParams();
      for (const [s, P] of Object.entries(E)) {
        const te = String(P || "").trim();
        te !== "" && s !== p && !(s === "sort" && te === "title") && !(s === "view" && te === "compact") && d.set(s, te);
      }
      return d;
    }
    function Ld(p) {
      const d = Nd(p).toString();
      return ta.value || Ai.value ? `${Ct.value}${d ? `?${d}` : ""}` : d ? `?${d}` : "?";
    }
    function xg(p) {
      const d = Nd(p);
      E[p] = p === "sort" ? "title" : p === "view" ? "compact" : "", en(null, {
        params: d,
        generation: ++sn
      });
    }
    function Og(p) {
      const d = new URL(p.href, window.location.origin).searchParams;
      en(null, {
        params: d,
        generation: ++sn
      });
    }
    function Ng() {
      return Ld("q");
    }
    const rc = V(() => h.smartViewCounts || {}), Lg = V(() => new Set(h.smartViewCountsPending || []));
    function Rg(p) {
      return Lg.value.has(p) || !Object.prototype.hasOwnProperty.call(rc.value, p) ? "—" : Number(rc.value[p] || 0);
    }
    const Rd = V(() => {
      const p = {};
      for (const [d, s] of Object.entries(E)) {
        const P = String(s || "").trim();
        P !== "" && !(d === "sort" && P === "title") && (p[d] = P);
      }
      return p;
    }), Ig = V(() => JSON.stringify(Rd.value)), oc = V(() => Object.keys(Rd.value).length > 0);
    function Zo(p) {
      if (!zo.includes(p)) return;
      E.view = p;
      const d = new URLSearchParams();
      for (const [s, P] of Object.entries(u(E))) {
        const te = String(P || "").trim();
        te !== "" && !(s === "sort" && te === "title") && !(s === "view" && te === "compact") && d.set(s, te);
      }
      d.delete("page"), en(null, {
        params: d,
        generation: ++sn
      });
    }
    function Pg(p) {
      const d = o(window.location.search);
      for (const P of Object.keys(Do))
        d.delete(P);
      d.delete("page");
      for (const [P, te] of Object.entries(p))
        String(te || "").trim() !== "" && d.set(P, String(te));
      const s = d.toString();
      return s ? `?${s}` : "?";
    }
    function $g(p) {
      return Pg(p || {});
    }
    function Fg(p) {
      return Mo.value.replace("__COLLECTION_ID__", encodeURIComponent(String(p || "0")));
    }
    function za(p) {
      return String(p || "").toUpperCase();
    }
    function Ar(p) {
      return wt[p.id] || "loading";
    }
    function Dg(p) {
      wt[p.id] = "loaded";
    }
    function Mg(p) {
      wt[p.id] = "error";
    }
    function sc(p) {
      const d = String(p?.publication || "").trim(), s = String(p?.publicationDate || "").trim();
      return d && s ? `${d} · ${s}` : d || s ? d || s : [p?.publicationType, za(p?.extension)].filter(Boolean).join(" · ");
    }
    function Id(p) {
      const d = String(p?.tagName || "").toLowerCase();
      return p?.isContentEditable || ["input", "select", "textarea", "button"].includes(d);
    }
    function zg(p) {
      p.key !== "/" || p.metaKey || p.ctrlKey || p.altKey || p.shiftKey || Id(p.target) || (p.preventDefault(), Cr.value?.focus(), Cr.value?.select?.());
    }
    async function Ug(p) {
      p.key !== "Escape" || document.activeElement !== Cr.value || E.q === "" || (p.preventDefault(), ue.value = "", E.q = "", await an(), ln({ currentTarget: Cr.value }));
    }
    function jg(p) {
      if (!Li.value || p.metaKey || p.ctrlKey || p.altKey)
        return !1;
      if (p.key === "Escape")
        return p.preventDefault(), qo(), !0;
      if (p.key === "Tab" && sa.value) {
        if (oa.value?.focusTrap) return !1;
        const d = oa.value?.$refs?.sidebar || oa.value?.$el || oa.value, s = [...d?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((ke) => !ke.hidden && ke.getAttribute("aria-hidden") !== "true");
        if (s.length === 0) return !1;
        const P = s[0], te = s[s.length - 1];
        if (p.shiftKey && (document.activeElement === P || !d.contains(document.activeElement)))
          return p.preventDefault(), te.focus(), !0;
        if (!p.shiftKey && (document.activeElement === te || !d.contains(document.activeElement)))
          return p.preventDefault(), P.focus(), !0;
      }
      return Id(p.target) ? !1 : p.key === "ArrowLeft" && Vo.value ? (p.preventDefault(), Yo(Vo.value), !0) : p.key === "ArrowRight" && Ko.value ? (p.preventDefault(), Yo(Ko.value), !0) : !1;
    }
    function Pd(p) {
      jg(p) || (zg(p), Ug(p));
    }
    Xi(() => {
      window.addEventListener("keydown", Pd), window.addEventListener("popstate", gd), Jn = window.matchMedia?.("(max-width: 1023px)") || null, Sr(), Jn?.addEventListener ? Jn.addEventListener("change", Sr) : Jn?.addListener?.(Sr);
      const p = new URLSearchParams(window.location.search), d = hd();
      p.has("item") && d === null ? (p.delete("item"), history.replaceState({}, "", `${window.location.pathname}${p.toString() ? `?${p}` : ""}${window.location.hash}`)) : d !== null && wr(d, { historyMode: "none", seed: b.value.find((s) => Number(s.id) === d) || null }), Tr = window.requestAnimationFrame(() => {
        Tr = null, Sg();
      });
    }), ar(() => {
      Ql = !0, nc(), window.removeEventListener("keydown", Pd), window.removeEventListener("popstate", gd), window.clearTimeout(se), window.clearTimeout(Oe), window.clearTimeout(G), window.clearTimeout(Qi), ge?.abort(), ct?.abort(), K?.abort(), _i?.abort(), sn += 1, Tr !== null && window.cancelAnimationFrame(Tr), Tr = null, Xo?.abort(), Ma?.abort(), Ma = null, la += 1, ca?.abort(), ca = null, Jn?.removeEventListener ? Jn.removeEventListener("change", Sr) : Jn?.removeListener?.(Sr), Jn = null, Ho = null;
    });
    const kr = /* @__PURE__ */ Ot({}), xr = /* @__PURE__ */ Ot({});
    async function $d(p, d) {
      const s = d?.currentTarget?.closest?.("form") || d?.currentTarget;
      if (!s || !p?.starUrl || kr[p.id]) return;
      const P = !!p.starred;
      kr[p.id] = !0, xr[p.id] = "", p.starred = !P;
      try {
        (await fetch(p.starUrl, {
          method: "POST",
          body: new FormData(s),
          credentials: "same-origin"
        })).ok || (p.starred = P, xr[p.id] = m("library", "Could not update star. Try again."));
      } catch {
        p.starred = P, xr[p.id] = m("library", "Could not update star. Try again.");
      } finally {
        kr[p.id] = !1;
      }
    }
    return (p, d) => (y(), je(g(IT), { "app-name": "library" }, {
      default: Le(() => [
        ye(g(p0), {
          "aria-label": g(m)("library", "Library navigation")
        }, {
          list: Le(() => [
            ye(g(wv), null, {
              default: Le(() => [
                (y(!0), w(ae, null, Ce(Ro.value, (s) => (y(), je(g(Ch), {
                  key: s.key,
                  active: s.active,
                  href: s.href,
                  name: s.name
                }, null, 8, ["active", "href", "name"]))), 128)),
                ye(g(Ch), {
                  active: ea.value,
                  href: Ei.value,
                  name: Pa.value > 0 ? `${g(m)("library", "Review")} (${Pa.value})` : g(m)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Le(() => [
            l("section", GT, [
              l("h2", WT, v(g(m)("library", "Filters")), 1),
              l("form", {
                method: "get",
                class: "library-filter-bar library-sidebar-filters",
                "aria-label": g(m)("library", "Catalogue search and filters"),
                onSubmit: Pe(bd, ["prevent"])
              }, [
                l("input", {
                  type: "hidden",
                  name: "folder",
                  value: E.folder
                }, null, 8, YT),
                (y(!0), w(ae, null, Ce(ot.value, (s) => (y(), w("input", {
                  key: `sidebar-${s.key}`,
                  type: "hidden",
                  name: s.key,
                  value: s.value
                }, null, 8, XT))), 128)),
                E.sort && E.sort !== "title" ? (y(), w("input", {
                  key: 0,
                  type: "hidden",
                  name: "sort",
                  value: E.sort
                }, null, 8, ZT)) : z("", !0),
                E.view && E.view !== "compact" ? (y(), w("input", {
                  key: 1,
                  type: "hidden",
                  name: "view",
                  value: E.view
                }, null, 8, JT)) : z("", !0),
                l("label", {
                  class: "library-quick-filter-search",
                  title: g(m)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                }, [
                  l("span", null, [
                    Te(v(g(m)("library", "Search")) + " ", 1),
                    d[103] || (d[103] = l("kbd", { class: "library-keyboard-hint" }, "/", -1))
                  ]),
                  Re(l("input", {
                    ref_key: "quickSearchInput",
                    ref: Cr,
                    "onUpdate:modelValue": d[0] || (d[0] = (s) => ue.value = s),
                    "data-library-quick-search": "",
                    type: "search",
                    name: "q",
                    placeholder: g(m)("library", "Title, creator, description, filename or folder")
                  }, null, 8, eE), [
                    [ft, ue.value]
                  ])
                ], 8, QT),
                l("label", null, [
                  Te(v(g(m)("library", "Type")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[1] || (d[1] = (s) => E.type = s),
                    name: "type",
                    onChange: d[2] || (d[2] = (s) => ln(s))
                  }, [
                    l("option", tE, v(g(m)("library", "All types")), 1),
                    (y(!0), w(ae, null, Ce(N.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, nE))), 128))
                  ], 544), [
                    [qt, E.type]
                  ])
                ]),
                l("div", iE, [
                  l("label", aE, v(g(m)("library", "Publisher")), 1),
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
                    "aria-activedescendant": kd("desktop", "publisher"),
                    "aria-expanded": $.value && q.value.length > 0 ? "true" : "false",
                    onFocus: d[4] || (d[4] = (s) => xd("publisher")),
                    onKeydown: d[5] || (d[5] = (s) => Od(s, "publisher"))
                  }, null, 40, rE), [
                    [ft, Q.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "publisher",
                    value: E.publisher
                  }, null, 8, oE),
                  $.value && q.value.length > 0 ? (y(), w("ul", sE, [
                    (y(!0), w(ae, null, Ce(q.value, (s, P) => (y(), w("li", {
                      id: ic("desktop", "publisher", P),
                      key: s,
                      role: "option",
                      "aria-selected": Qn.publisher === P ? "true" : "false"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-publisher-suggestion",
                        onMousedown: d[6] || (d[6] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (te) => _d(s, te)
                      }, v(s), 41, cE)
                    ], 8, lE))), 128))
                  ])) : z("", !0),
                  l("button", uE, v(g(m)("library", "Apply publisher")), 1)
                ]),
                l("div", dE, [
                  l("label", fE, v(g(m)("library", "Series / periodical")), 1),
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
                    onKeydown: d[9] || (d[9] = nt((s) => X.value = !1, ["escape"]))
                  }, null, 40, hE), [
                    [ft, re.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "publication",
                    value: E.publication
                  }, null, 8, pE),
                  X.value && Y.value.length > 0 ? (y(), w("ul", vE, [
                    (y(!0), w(ae, null, Ce(Y.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-publication-suggestion",
                        onMousedown: d[10] || (d[10] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => md(s, P)
                      }, v(s), 41, gE)
                    ]))), 128))
                  ])) : z("", !0),
                  l("button", mE, v(g(m)("library", "Apply series")), 1)
                ]),
                l("div", bE, [
                  l("label", yE, v(g(m)("library", "Publication year")), 1),
                  Re(l("input", {
                    id: "library-year-search",
                    "onUpdate:modelValue": d[11] || (d[11] = (s) => et.value = s),
                    type: "search",
                    name: "yearSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search publication years"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-year-suggestions",
                    "aria-expanded": dt.value && gn.value.length > 0 ? "true" : "false",
                    onFocus: d[12] || (d[12] = (s) => dt.value = !0),
                    onKeydown: d[13] || (d[13] = nt((s) => dt.value = !1, ["escape"]))
                  }, null, 40, _E), [
                    [ft, et.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "year",
                    value: E.year
                  }, null, 8, wE),
                  dt.value && gn.value.length > 0 ? (y(), w("ul", SE, [
                    (y(!0), w(ae, null, Ce(gn.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-year-suggestion",
                        onMousedown: d[14] || (d[14] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => Ad(s, P)
                      }, v(s), 41, CE)
                    ]))), 128))
                  ])) : z("", !0),
                  l("button", TE, v(g(m)("library", "Apply year")), 1)
                ]),
                l("div", EE, [
                  l("label", AE, v(g(m)("library", "Creator")), 1),
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
                    "aria-expanded": be.value && Ke.value.length > 0 ? "true" : "false",
                    onFocus: d[16] || (d[16] = (s) => be.value = !0),
                    onKeydown: d[17] || (d[17] = nt((s) => be.value = !1, ["escape"]))
                  }, null, 40, kE), [
                    [ft, de.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "creator",
                    value: E.creator
                  }, null, 8, xE),
                  be.value && Ke.value.length > 0 ? (y(), w("ul", OE, [
                    (y(!0), w(ae, null, Ce(Ke.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-creator-suggestion",
                        onMousedown: d[18] || (d[18] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => yd(s, P)
                      }, v(s), 41, NE)
                    ]))), 128))
                  ])) : z("", !0),
                  l("button", LE, v(g(m)("library", "Apply creator")), 1)
                ]),
                l("div", RE, [
                  l("label", IE, v(g(m)("library", "Nextcloud tag")), 1),
                  Re(l("input", {
                    id: "library-tag-search",
                    "onUpdate:modelValue": d[19] || (d[19] = (s) => $e.value = s),
                    type: "search",
                    name: "tagSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search tags"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-tag-suggestions",
                    "aria-expanded": He.value && vt.value.length > 0 ? "true" : "false",
                    onFocus: d[20] || (d[20] = (s) => He.value = !0),
                    onKeydown: d[21] || (d[21] = nt((s) => He.value = !1, ["escape"]))
                  }, null, 40, PE), [
                    [ft, $e.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "tag",
                    value: E.tag
                  }, null, 8, $E),
                  He.value && vt.value.length > 0 ? (y(), w("ul", FE, [
                    (y(!0), w(ae, null, Ce(vt.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-tag-suggestion",
                        onMousedown: d[22] || (d[22] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => Sd(s, P)
                      }, v(s), 41, DE)
                    ]))), 128))
                  ])) : z("", !0),
                  l("button", ME, v(g(m)("library", "Apply tag")), 1)
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Format")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[23] || (d[23] = (s) => E.format = s),
                    name: "format",
                    onChange: d[24] || (d[24] = (s) => ln(s))
                  }, [
                    l("option", zE, v(g(m)("library", "All formats")), 1),
                    (y(!0), w(ae, null, Ce(A.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(za(s)), 9, UE))), 128))
                  ], 544), [
                    [qt, E.format]
                  ])
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Shelf")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[25] || (d[25] = (s) => E.shelf = s),
                    name: "shelf",
                    onChange: d[26] || (d[26] = (s) => ln(s))
                  }, [
                    l("option", jE, v(g(m)("library", "All shelves")), 1),
                    (y(!0), w(ae, null, Ce(C.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, BE))), 128))
                  ], 544), [
                    [qt, E.shelf]
                  ])
                ]),
                l("div", HE, [
                  l("label", VE, v(g(m)("library", "Folder")), 1),
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
                    "aria-expanded": ut.value && Pt.value.length > 0 ? "true" : "false",
                    onFocus: d[28] || (d[28] = (s) => ut.value = !0),
                    onKeydown: d[29] || (d[29] = nt((s) => ut.value = !1, ["escape"]))
                  }, null, 40, KE), [
                    [ft, it.value]
                  ]),
                  ut.value && Pt.value.length > 0 ? (y(), w("ul", GE, [
                    (y(!0), w(ae, null, Ce(Pt.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-folder-suggestion",
                        onMousedown: d[30] || (d[30] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => Cd(s, P)
                      }, v(s), 41, WE)
                    ]))), 128))
                  ])) : z("", !0),
                  l("button", qE, v(g(m)("library", "Apply folder")), 1)
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Scan status")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[31] || (d[31] = (s) => E.status = s),
                    name: "status",
                    onChange: d[32] || (d[32] = (s) => ln(s))
                  }, [
                    l("option", YE, v(g(m)("library", "All scan statuses")), 1),
                    (y(!0), w(ae, null, Ce(F.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, XE))), 128))
                  ], 544), [
                    [qt, E.status]
                  ])
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Workflow status")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[33] || (d[33] = (s) => E.workflowStatus = s),
                    name: "workflowStatus",
                    onChange: d[34] || (d[34] = (s) => ln(s))
                  }, [
                    l("option", ZE, v(g(m)("library", "All workflow statuses")), 1),
                    (y(!0), w(ae, null, Ce(D.value, (s) => (y(), w("option", {
                      key: s,
                      value: s
                    }, v(s), 9, JE))), 128))
                  ], 544), [
                    [qt, E.workflowStatus]
                  ])
                ]),
                l("div", QE, [
                  l("label", eA, v(g(m)("library", "Subject")), 1),
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
                    "aria-expanded": L.value && j.value.length > 0 ? "true" : "false",
                    onFocus: d[36] || (d[36] = (s) => L.value = !0),
                    onKeydown: d[37] || (d[37] = nt((s) => L.value = !1, ["escape"]))
                  }, null, 40, tA), [
                    [ft, x.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "subject",
                    value: E.subject
                  }, null, 8, nA),
                  L.value && j.value.length > 0 ? (y(), w("ul", iA, [
                    (y(!0), w(ae, null, Ce(j.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-subject-suggestion",
                        onMousedown: d[38] || (d[38] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => Ed(s, P)
                      }, v(s), 41, aA)
                    ]))), 128))
                  ])) : z("", !0),
                  l("button", {
                    type: "button",
                    class: "button secondary library-subject-apply",
                    onClick: Eg
                  }, v(g(m)("library", "Apply subject")), 1)
                ]),
                l("div", rA, [
                  l("label", oA, v(g(m)("library", "Classification")), 1),
                  Re(l("input", {
                    id: "library-classification-search",
                    "onUpdate:modelValue": d[39] || (d[39] = (s) => H.value = s),
                    type: "search",
                    name: "classificationSearch",
                    autocomplete: "off",
                    placeholder: g(m)("library", "Search classifications"),
                    title: g(m)("library", "Exact classification matches only"),
                    role: "combobox",
                    "aria-autocomplete": "list",
                    "aria-controls": "library-classification-suggestions",
                    "aria-expanded": he.value && pe.value.length > 0 ? "true" : "false",
                    onFocus: d[40] || (d[40] = (s) => he.value = !0),
                    onKeydown: d[41] || (d[41] = nt((s) => he.value = !1, ["escape"]))
                  }, null, 40, sA), [
                    [ft, H.value]
                  ]),
                  l("input", {
                    type: "hidden",
                    name: "classification",
                    value: E.classification
                  }, null, 8, lA),
                  he.value && pe.value.length > 0 ? (y(), w("ul", cA, [
                    (y(!0), w(ae, null, Ce(pe.value, (s) => (y(), w("li", {
                      key: s,
                      role: "option"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-classification-suggestion",
                        onMousedown: d[42] || (d[42] = Pe(() => {
                        }, ["prevent"])),
                        onClick: (P) => wd(s, P)
                      }, v(s), 41, uA)
                    ]))), 128))
                  ])) : z("", !0),
                  l("button", dA, v(g(m)("library", "Apply classification")), 1)
                ]),
                l("label", null, [
                  Te(v(g(m)("library", "Suggested updates")), 1),
                  Re(l("select", {
                    "onUpdate:modelValue": d[43] || (d[43] = (s) => E.scannerConflicts = s),
                    name: "scannerConflicts",
                    onChange: d[44] || (d[44] = (s) => ln(s))
                  }, [
                    l("option", fA, v(g(m)("library", "All metadata")), 1),
                    l("option", hA, v(g(m)("library", "Suggested updates")), 1)
                  ], 544), [
                    [qt, E.scannerConflicts]
                  ])
                ]),
                l("button", pA, v(g(m)("library", "Apply filters")), 1),
                l("a", vA, v(g(m)("library", "Clear")), 1)
              ], 40, qT)
            ]),
            l("a", {
              class: "library-navigation-settings-link",
              href: Ti.value
            }, [
              d[104] || (d[104] = l("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              l("span", null, v(g(m)("library", "Settings")), 1)
            ], 8, gA)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        ye(g(N1), null, {
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
                l("span", null, v(g(m)("library", "Active filters")), 1),
                (y(!0), w(ae, null, Ce(S.value, (s) => (y(), w("a", {
                  key: s.key,
                  href: Ld(s.key),
                  class: "library-filter-chip",
                  "aria-label": `${g(m)("library", "Remove filter")}: ${s.label}`,
                  title: s.title,
                  onClick: Pe((P) => xg(s.key), ["prevent"])
                }, [
                  l("strong", null, [
                    Te(v(s.label), 1),
                    s.displayValue ? (y(), w(ae, { key: 0 }, [
                      Te(":")
                    ], 64)) : z("", !0)
                  ]),
                  s.displayValue ? (y(), w(ae, { key: 0 }, [
                    d[105] || (d[105] = Te(v(" "), -1)),
                    l("span", {
                      class: "library-filter-chip-value",
                      title: s.value
                    }, v(s.displayValue), 9, _A)
                  ], 64)) : z("", !0),
                  d[106] || (d[106] = Te()),
                  d[107] || (d[107] = l("span", { "aria-hidden": "true" }, "×", -1))
                ], 8, yA))), 128))
              ], 8, bA)) : z("", !0),
              ea.value ? (y(), w("section", wA, [
                l("header", SA, [
                  l("p", CA, v(g(m)("library", "Metadata cleanup")), 1),
                  l("h2", TA, v(g(m)("library", "Review")), 1),
                  l("p", null, v(g(m)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                l("nav", {
                  class: "library-review-queues",
                  "aria-label": g(m)("library", "Review queues")
                }, [
                  (y(!0), w(ae, null, Ce(ug.value, (s) => (y(), w("a", {
                    key: s.key,
                    class: Ee(["library-review-queue-link", { active: s.active }]),
                    href: s.href,
                    "aria-current": s.active ? "page" : void 0,
                    onClick: Pe((P) => Og(s), ["prevent"])
                  }, [
                    l("span", null, v(s.label), 1),
                    l("b", null, v(Rg(s.countKey)), 1)
                  ], 10, AA))), 128))
                ], 8, EA),
                l("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": g(m)("library", "Filter current review queue"),
                  onSubmit: Pe(en, ["prevent"])
                }, [
                  (y(!0), w(ae, null, Ce(br.value, (s) => (y(), w("input", {
                    key: `review-${s.key}`,
                    type: "hidden",
                    name: s.key,
                    value: s.value
                  }, null, 8, xA))), 128)),
                  l("label", null, [
                    Te(v(g(m)("library", "Search within this queue")), 1),
                    Re(l("input", {
                      "onUpdate:modelValue": d[45] || (d[45] = (s) => E.q = s),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [ft, E.q]
                    ])
                  ]),
                  l("button", OA, v(g(m)("library", "Apply")), 1)
                ], 40, kA),
                l("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": kt.loading ? "true" : "false"
                }, [
                  kt.loading ? (y(), w("span", LA, v(g(m)("library", "Loading review queue…")), 1)) : z("", !0)
                ], 8, NA),
                kt.error ? (y(), w("p", RA, v(kt.error), 1)) : z("", !0),
                Ri.value.enabled ? (y(), w("section", IA, [
                  l("div", PA, [
                    l("p", $A, v(g(m)("library", "Metadata review workbench")), 1),
                    l("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: g(m)("library", "Shows current and suggested values with source provenance. No source files are changed; user-edited values are never silently overwritten.")
                    }, v(g(m)("library", "Review next suggestion")), 9, FA)
                  ]),
                  Ri.value.item ? (y(), w("article", DA, [
                    l("header", null, [
                      l("strong", null, [
                        l("bdi", MA, v(Ri.value.item.title), 1)
                      ]),
                      l("span", zA, [
                        l("bdi", UA, v(Ri.value.item.cachedPath), 1)
                      ])
                    ]),
                    l("div", jA, [
                      (y(!0), w(ae, null, Ce(Ri.value.fields, (s) => (y(), w("article", {
                        key: s.field,
                        class: "library-metadata-review-field"
                      }, [
                        l("h4", null, [
                          l("bdi", BA, v(s.field), 1)
                        ]),
                        l("dl", null, [
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Current value")), 1),
                            l("dd", null, [
                              l("bdi", HA, v(s.currentValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Suggested value")), 1),
                            l("dd", null, [
                              l("bdi", VA, v(s.scannerCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Path-based suggestion")), 1),
                            l("dd", null, [
                              l("bdi", KA, v(s.pathTemplateCandidate || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Sidecar value")), 1),
                            l("dd", null, [
                              l("bdi", GA, v(s.sidecarValue || "—"), 1)
                            ])
                          ]),
                          l("div", null, [
                            l("dt", null, v(g(m)("library", "Source")), 1),
                            l("dd", null, [
                              l("bdi", WA, v(s.sourceProvenance || "—"), 1)
                            ])
                          ])
                        ]),
                        l("form", {
                          method: "post",
                          action: Ri.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Jt.value
                          }, null, 8, YA),
                          l("input", {
                            type: "hidden",
                            name: "field",
                            value: s.field
                          }, null, 8, XA),
                          d[108] || (d[108] = l("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          l("button", ZA, v(g(m)("library", "Use suggested value")), 1)
                        ], 8, qA)
                      ]))), 128))
                    ]),
                    l("footer", JA, [
                      l("a", {
                        class: "button secondary",
                        href: Ri.value.item.detailsUrl
                      }, v(g(m)("library", "Maintenance")), 9, QA),
                      l("a", {
                        class: "button secondary",
                        href: Ri.value.skipUrl
                      }, v(g(m)("library", "Skip to next suggestion")), 9, ek)
                    ])
                  ])) : z("", !0)
                ])) : z("", !0),
                b.value.length === 0 && !kt.loading && !kt.error ? (y(), w("div", tk, [
                  l("h3", null, v(g(m)("library", "This review queue is clear")), 1),
                  l("p", null, v(g(m)("library", "Choose another queue or return to the catalogue.")), 1),
                  l("a", {
                    class: "button primary",
                    href: Ct.value
                  }, v(g(m)("library", "Back to Library")), 9, nk)
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
                          l("bdi", rk, v(s.title), 1)
                        ], 8, ak)
                      ]),
                      s.creators ? (y(), w("p", ok, [
                        l("bdi", sk, v(s.creators), 1)
                      ])) : z("", !0),
                      s.scanError ? (y(), w("p", lk, [
                        l("bdi", ck, v(s.scanError), 1)
                      ])) : z("", !0)
                    ]),
                    l("p", null, [
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (P) => zn(s, P)
                      }, v(g(m)("library", "Details")), 9, uk),
                      l("a", {
                        class: "button primary",
                        href: s.openUrl
                      }, v(g(m)("library", "Open")), 9, dk)
                    ])
                  ]))), 128))
                ], 8, ik)),
                b.value.length > 0 ? (y(), w("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": g(m)("library", "Review pagination")
                }, [
                  M.value.previousUrl ? (y(), w("a", {
                    key: 0,
                    href: M.value.previousUrl
                  }, v(g(m)("library", "Previous")), 9, hk)) : (y(), w("span", pk, v(g(m)("library", "Previous")), 1)),
                  l("span", null, [
                    Te(v(g(m)("library", "Page")) + " " + v(M.value.page), 1),
                    M.value.total > 0 ? (y(), w("span", vk, " · " + v(M.value.from) + "–" + v(M.value.to), 1)) : z("", !0)
                  ]),
                  M.value.nextUrl ? (y(), w("a", {
                    key: 2,
                    href: M.value.nextUrl
                  }, v(g(m)("library", "Next")), 9, gk)) : (y(), w("span", mk, v(g(m)("library", "Next")), 1))
                ], 8, fk)) : z("", !0)
              ])) : ta.value ? (y(), w("main", bk, [
                l("header", yk, [
                  l("p", _k, v(g(m)("library", "Your library")), 1),
                  l("h2", wk, v(g(m)("library", "Home")), 1)
                ]),
                l("section", Sk, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", Ck, v(g(m)("library", "Continue reading")), 1),
                      l("p", Tk, v(g(m)("library", "Pick up publications you opened recently.")), 1)
                    ]),
                    l("a", {
                      href: `${Ct.value}?sort=lastOpened`
                    }, v(g(m)("library", "View all")), 9, Ek)
                  ]),
                  jo.value.continueReading.length ? (y(), w("div", Ak, [
                    (y(!0), w(ae, null, Ce(jo.value.continueReading, (s) => (y(), w("article", {
                      key: `continue-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(m)("library", "Details")}: ${s.title}`,
                        onClick: (P) => zn(s, P)
                      }, [
                        l("span", xk, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, Ok)
                        ])
                      ], 8, kk),
                      l("div", Nk, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (P) => zn(s, P)
                          }, [
                            l("bdi", Rk, v(s.title), 1)
                          ], 8, Lk)
                        ]),
                        s.creators ? (y(), w("p", Ik, [
                          l("bdi", Pk, v(s.creators), 1)
                        ])) : z("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl
                        }, v(g(m)("library", "Open")), 9, $k)
                      ])
                    ]))), 128))
                  ])) : (y(), w("p", Fk, v(g(m)("library", "Publications you open will appear here.")), 1))
                ]),
                l("section", Dk, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", Mk, v(g(m)("library", "Recently added")), 1),
                      l("p", zk, v(g(m)("library", "The latest publications indexed from your Library roots.")), 1)
                    ]),
                    l("a", {
                      href: `${Ct.value}?sort=recent`
                    }, v(g(m)("library", "View all")), 9, Uk)
                  ]),
                  jo.value.recentlyAdded.length ? (y(), w("div", jk, [
                    (y(!0), w(ae, null, Ce(jo.value.recentlyAdded, (s) => (y(), w("article", {
                      key: `recent-${s.id}`,
                      class: "library-cover-card library-home-card"
                    }, [
                      l("button", {
                        type: "button",
                        class: "library-cover-link",
                        "aria-label": `${g(m)("library", "Details")}: ${s.title}`,
                        onClick: (P) => zn(s, P)
                      }, [
                        l("span", Hk, [
                          l("img", {
                            class: "library-cover-image",
                            src: s.coverUrl,
                            alt: "",
                            loading: "lazy"
                          }, null, 8, Vk)
                        ])
                      ], 8, Bk),
                      l("div", Kk, [
                        l("h4", null, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (P) => zn(s, P)
                          }, [
                            l("bdi", Wk, v(s.title), 1)
                          ], 8, Gk)
                        ]),
                        s.creators ? (y(), w("p", qk, [
                          l("bdi", Yk, v(s.creators), 1)
                        ])) : z("", !0),
                        l("a", {
                          class: "library-cover-read",
                          href: s.openUrl
                        }, v(g(m)("library", "Open")), 9, Xk)
                      ])
                    ]))), 128))
                  ])) : (y(), w("p", Zk, v(g(m)("library", "Recently indexed publications will appear here.")), 1))
                ]),
                l("section", Jk, [
                  l("header", null, [
                    l("div", null, [
                      l("h3", Qk, v(g(m)("library", "Shelves")), 1),
                      l("p", e2, v(g(m)("library", "Browse the folders that organize your publications.")), 1)
                    ]),
                    l("a", { href: rn.value }, v(g(m)("library", "View all")), 9, t2)
                  ]),
                  sd.value.length ? (y(), w("nav", {
                    key: 0,
                    class: "library-home-shelves",
                    "aria-label": g(m)("library", "Shelves")
                  }, [
                    (y(!0), w(ae, null, Ce(sd.value, (s) => (y(), w("a", {
                      key: s.shelf,
                      href: s.url
                    }, [
                      l("strong", null, [
                        l("bdi", a2, v(s.shelf), 1)
                      ]),
                      l("span", null, v(g(dn)("library", "%n item", "%n items", Number(s.itemCount || 0))), 1)
                    ], 8, i2))), 128))
                  ], 8, n2)) : (y(), w("p", r2, v(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1))
                ]),
                Number(Zl.value.count || 0) > 0 ? (y(), w("aside", o2, [
                  l("div", null, [
                    l("h3", s2, v(g(m)("library", "Needs attention")), 1),
                    l("p", l2, v(g(dn)("library", "%n publication needs better details.", "%n publications need better details.", Number(Zl.value.count || 0))), 1)
                  ]),
                  l("a", {
                    class: "button tertiary",
                    href: Zl.value.url
                  }, v(g(m)("library", "Review")), 9, c2)
                ])) : z("", !0)
              ])) : Ai.value ? (y(), w("main", u2, [
                l("header", d2, [
                  l("p", f2, v(g(m)("library", "Your library")), 1),
                  l("h2", h2, v(g(m)("library", "Shelves")), 1),
                  l("p", p2, v(g(m)("library", "Browse the folders that organize your publications.")), 1)
                ]),
                ld.value.length ? (y(), w("nav", {
                  key: 0,
                  "aria-label": g(m)("library", "Shelves")
                }, [
                  l("ul", g2, [
                    (y(!0), w(ae, null, Ce(ld.value, (s) => (y(), je(KT, {
                      key: s.id,
                      node: s,
                      "children-url": na.value
                    }, null, 8, ["node", "children-url"]))), 128))
                  ])
                ], 8, v2)) : (y(), w("section", m2, [
                  l("h3", null, v(g(m)("library", "Shelves")), 1),
                  l("p", b2, v(g(m)("library", "Your enabled Library roots will appear as shelves.")), 1),
                  l("p", y2, [
                    l("a", {
                      class: "button primary",
                      href: Ti.value
                    }, v(g(m)("library", "Add a Library root")), 9, _2),
                    l("a", {
                      class: "button secondary",
                      href: Ct.value
                    }, v(g(m)("library", "All publications")), 9, w2)
                  ])
                ]))
              ])) : (y(), w("section", {
                key: 4,
                id: "library-catalogue",
                class: Ee(["library-panel library-mobile-compact-chrome", { "library-catalogue--loading": kt.loading }]),
                "aria-labelledby": "library-catalogue-heading",
                "aria-busy": kt.loading ? "true" : "false"
              }, [
                l("header", C2, [
                  Oi.value ? (y(), w("p", T2, v(dr.value), 1)) : z("", !0),
                  l("h2", E2, v(ql.value), 1)
                ]),
                l("details", {
                  class: "library-mobile-filter-panel",
                  "data-library-control": "filter",
                  onToggle: Ne
                }, [
                  l("summary", {
                    class: "library-mobile-filter-trigger",
                    "aria-label": ce.value
                  }, [
                    l("span", k2, v(g(dn)("library", "%n item", "%n items", Number(M.value.total || 0))), 1),
                    l("strong", null, v(W.value), 1)
                  ], 8, A2),
                  l("form", {
                    method: "get",
                    class: "library-mobile-filter-form",
                    "aria-label": g(m)("library", "Mobile catalogue filters"),
                    onSubmit: Pe(bd, ["prevent"])
                  }, [
                    l("input", {
                      type: "hidden",
                      name: "folder",
                      value: E.folder
                    }, null, 8, O2),
                    (y(!0), w(ae, null, Ce(ot.value, (s) => (y(), w("input", {
                      key: `mobile-hidden-${s.key}`,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, N2))), 128)),
                    l("fieldset", L2, [
                      l("legend", null, v(g(m)("library", "Content")), 1),
                      l("label", R2, [
                        l("span", null, v(g(m)("library", "Search")), 1),
                        Re(l("input", {
                          ref_key: "mobileFilterSearchInput",
                          ref: on,
                          "onUpdate:modelValue": d[46] || (d[46] = (s) => ue.value = s),
                          "data-library-mobile-filter-search": "",
                          type: "search",
                          name: "q",
                          placeholder: g(m)("library", "Title, creator, description, filename or folder")
                        }, null, 8, I2), [
                          [ft, ue.value]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Type")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[47] || (d[47] = (s) => E.type = s),
                          name: "type",
                          onChange: d[48] || (d[48] = (s) => ln(s))
                        }, [
                          l("option", P2, v(g(m)("library", "All types")), 1),
                          (y(!0), w(ae, null, Ce(N.value, (s) => (y(), w("option", {
                            key: `mobile-type-${s}`,
                            value: s
                          }, v(s), 9, $2))), 128))
                        ], 544), [
                          [qt, E.type]
                        ])
                      ]),
                      l("div", F2, [
                        l("label", D2, v(g(m)("library", "Publisher")), 1),
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
                          "aria-activedescendant": kd("mobile", "publisher"),
                          "aria-expanded": $.value && q.value.length > 0 ? "true" : "false",
                          onFocus: d[50] || (d[50] = (s) => xd("publisher")),
                          onKeydown: d[51] || (d[51] = (s) => Od(s, "publisher"))
                        }, null, 40, M2), [
                          [ft, Q.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publisher",
                          value: E.publisher
                        }, null, 8, z2),
                        Gt.value && $.value && q.value.length > 0 ? (y(), w("ul", U2, [
                          (y(!0), w(ae, null, Ce(q.value, (s, P) => (y(), w("li", {
                            id: ic("mobile", "publisher", P),
                            key: `mobile-publisher-${s}`,
                            role: "option",
                            "aria-selected": Qn.publisher === P ? "true" : "false"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publisher-suggestion",
                              onMousedown: d[52] || (d[52] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (te) => _d(s, te)
                            }, v(s), 41, B2)
                          ], 8, j2))), 128))
                        ])) : z("", !0)
                      ]),
                      l("div", H2, [
                        l("label", V2, v(g(m)("library", "Series / periodical")), 1),
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
                          onKeydown: d[55] || (d[55] = nt((s) => X.value = !1, ["escape"]))
                        }, null, 40, K2), [
                          [ft, re.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "publication",
                          value: E.publication
                        }, null, 8, G2),
                        Gt.value && X.value && Y.value.length > 0 ? (y(), w("ul", W2, [
                          (y(!0), w(ae, null, Ce(Y.value, (s) => (y(), w("li", {
                            key: `mobile-publication-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-publication-suggestion",
                              onMousedown: d[56] || (d[56] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => md(s, P)
                            }, v(s), 41, q2)
                          ]))), 128))
                        ])) : z("", !0)
                      ]),
                      l("div", Y2, [
                        l("label", X2, v(g(m)("library", "Publication year")), 1),
                        Re(l("input", {
                          id: "library-mobile-year-search",
                          "onUpdate:modelValue": d[57] || (d[57] = (s) => et.value = s),
                          type: "search",
                          name: "yearSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search publication years"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-year-suggestions",
                          "aria-expanded": dt.value && gn.value.length > 0 ? "true" : "false",
                          onFocus: d[58] || (d[58] = (s) => dt.value = !0),
                          onKeydown: d[59] || (d[59] = nt((s) => dt.value = !1, ["escape"]))
                        }, null, 40, Z2), [
                          [ft, et.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "year",
                          value: E.year
                        }, null, 8, J2),
                        Gt.value && dt.value && gn.value.length > 0 ? (y(), w("ul", Q2, [
                          (y(!0), w(ae, null, Ce(gn.value, (s) => (y(), w("li", {
                            key: `mobile-year-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-year-suggestion",
                              onMousedown: d[60] || (d[60] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => Ad(s, P)
                            }, v(s), 41, ex)
                          ]))), 128))
                        ])) : z("", !0)
                      ]),
                      l("div", tx, [
                        l("label", nx, v(g(m)("library", "Creator")), 1),
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
                          "aria-expanded": be.value && Ke.value.length > 0 ? "true" : "false",
                          onFocus: d[62] || (d[62] = (s) => be.value = !0),
                          onKeydown: d[63] || (d[63] = nt((s) => be.value = !1, ["escape"]))
                        }, null, 40, ix), [
                          [ft, de.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "creator",
                          value: E.creator
                        }, null, 8, ax),
                        Gt.value && be.value && Ke.value.length > 0 ? (y(), w("ul", rx, [
                          (y(!0), w(ae, null, Ce(Ke.value, (s) => (y(), w("li", {
                            key: `mobile-creator-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-creator-suggestion",
                              onMousedown: d[64] || (d[64] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => yd(s, P)
                            }, v(s), 41, ox)
                          ]))), 128))
                        ])) : z("", !0)
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Format")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[65] || (d[65] = (s) => E.format = s),
                          name: "format",
                          onChange: d[66] || (d[66] = (s) => ln(s))
                        }, [
                          l("option", sx, v(g(m)("library", "All formats")), 1),
                          (y(!0), w(ae, null, Ce(A.value, (s) => (y(), w("option", {
                            key: `mobile-format-${s}`,
                            value: s
                          }, v(za(s)), 9, lx))), 128))
                        ], 544), [
                          [qt, E.format]
                        ])
                      ]),
                      l("div", cx, [
                        l("label", ux, v(g(m)("library", "Subject")), 1),
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
                          "aria-expanded": L.value && j.value.length > 0 ? "true" : "false",
                          onFocus: d[68] || (d[68] = (s) => L.value = !0),
                          onKeydown: d[69] || (d[69] = nt((s) => L.value = !1, ["escape"]))
                        }, null, 40, dx), [
                          [ft, x.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "subject",
                          value: E.subject
                        }, null, 8, fx),
                        Gt.value && L.value && j.value.length > 0 ? (y(), w("ul", hx, [
                          (y(!0), w(ae, null, Ce(j.value, (s) => (y(), w("li", {
                            key: `mobile-subject-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-subject-suggestion",
                              onMousedown: d[70] || (d[70] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => Ed(s, P)
                            }, v(s), 41, px)
                          ]))), 128))
                        ])) : z("", !0)
                      ]),
                      l("div", vx, [
                        l("label", gx, v(g(m)("library", "Classification")), 1),
                        Re(l("input", {
                          id: "library-mobile-classification-search",
                          "onUpdate:modelValue": d[71] || (d[71] = (s) => H.value = s),
                          type: "search",
                          name: "classificationSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search classifications"),
                          title: g(m)("library", "Exact classification matches only"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-mobile-classification-suggestions",
                          "aria-expanded": he.value && pe.value.length > 0 ? "true" : "false",
                          onFocus: d[72] || (d[72] = (s) => he.value = !0),
                          onKeydown: d[73] || (d[73] = nt((s) => he.value = !1, ["escape"]))
                        }, null, 40, mx), [
                          [ft, H.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "classification",
                          value: E.classification
                        }, null, 8, bx),
                        Gt.value && he.value && pe.value.length > 0 ? (y(), w("ul", yx, [
                          (y(!0), w(ae, null, Ce(pe.value, (s) => (y(), w("li", {
                            key: `mobile-classification-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-classification-suggestion",
                              onMousedown: d[74] || (d[74] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => wd(s, P)
                            }, v(s), 41, _x)
                          ]))), 128))
                        ])) : z("", !0)
                      ])
                    ]),
                    l("fieldset", wx, [
                      l("legend", null, v(g(m)("library", "Location")), 1),
                      l("label", null, [
                        Te(v(g(m)("library", "Shelf")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[75] || (d[75] = (s) => E.shelf = s),
                          name: "shelf",
                          onChange: d[76] || (d[76] = (s) => ln(s))
                        }, [
                          l("option", Sx, v(g(m)("library", "All shelves")), 1),
                          (y(!0), w(ae, null, Ce(C.value, (s) => (y(), w("option", {
                            key: `mobile-shelf-${s}`,
                            value: s
                          }, v(s), 9, Cx))), 128))
                        ], 544), [
                          [qt, E.shelf]
                        ])
                      ]),
                      l("div", Tx, [
                        l("label", Ex, v(g(m)("library", "Folder")), 1),
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
                          "aria-expanded": ut.value && Pt.value.length > 0 ? "true" : "false",
                          onFocus: d[78] || (d[78] = (s) => ut.value = !0),
                          onKeydown: d[79] || (d[79] = nt((s) => ut.value = !1, ["escape"]))
                        }, null, 40, Ax), [
                          [ft, it.value]
                        ]),
                        Gt.value && ut.value && Pt.value.length > 0 ? (y(), w("ul", kx, [
                          (y(!0), w(ae, null, Ce(Pt.value, (s) => (y(), w("li", {
                            key: `mobile-folder-${s}`,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-folder-suggestion",
                              onMousedown: d[80] || (d[80] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => Cd(s, P)
                            }, v(s), 41, xx)
                          ]))), 128))
                        ])) : z("", !0)
                      ])
                    ]),
                    l("fieldset", Ox, [
                      l("legend", null, v(g(m)("library", "Review")), 1),
                      l("label", null, [
                        Te(v(g(m)("library", "Scan status")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[81] || (d[81] = (s) => E.status = s),
                          name: "status",
                          onChange: d[82] || (d[82] = (s) => ln(s))
                        }, [
                          l("option", Nx, v(g(m)("library", "All scan statuses")), 1),
                          (y(!0), w(ae, null, Ce(F.value, (s) => (y(), w("option", {
                            key: `mobile-scan-${s}`,
                            value: s
                          }, v(s), 9, Lx))), 128))
                        ], 544), [
                          [qt, E.status]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Workflow status")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[83] || (d[83] = (s) => E.workflowStatus = s),
                          name: "workflowStatus",
                          onChange: d[84] || (d[84] = (s) => ln(s))
                        }, [
                          l("option", Rx, v(g(m)("library", "All workflow statuses")), 1),
                          (y(!0), w(ae, null, Ce(D.value, (s) => (y(), w("option", {
                            key: `mobile-workflow-${s}`,
                            value: s
                          }, v(s), 9, Ix))), 128))
                        ], 544), [
                          [qt, E.workflowStatus]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Suggested updates")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[85] || (d[85] = (s) => E.scannerConflicts = s),
                          name: "scannerConflicts",
                          onChange: d[86] || (d[86] = (s) => ln(s))
                        }, [
                          l("option", Px, v(g(m)("library", "All metadata")), 1),
                          l("option", $x, v(g(m)("library", "Suggested updates")), 1)
                        ], 544), [
                          [qt, E.scannerConflicts]
                        ])
                      ])
                    ]),
                    l("fieldset", Fx, [
                      l("legend", null, v(g(m)("library", "Personal / display")), 1),
                      l("div", Dx, [
                        l("label", Mx, v(g(m)("library", "Nextcloud tag")), 1),
                        Re(l("input", {
                          id: "library-tag-search",
                          "onUpdate:modelValue": d[87] || (d[87] = (s) => $e.value = s),
                          type: "search",
                          name: "tagSearch",
                          autocomplete: "off",
                          placeholder: g(m)("library", "Search tags"),
                          role: "combobox",
                          "aria-autocomplete": "list",
                          "aria-controls": "library-tag-suggestions",
                          "aria-expanded": He.value && vt.value.length > 0 ? "true" : "false",
                          onFocus: d[88] || (d[88] = (s) => He.value = !0),
                          onKeydown: d[89] || (d[89] = nt((s) => He.value = !1, ["escape"]))
                        }, null, 40, zx), [
                          [ft, $e.value]
                        ]),
                        l("input", {
                          type: "hidden",
                          name: "tag",
                          value: E.tag
                        }, null, 8, Ux),
                        He.value && vt.value.length > 0 ? (y(), w("ul", jx, [
                          (y(!0), w(ae, null, Ce(vt.value, (s) => (y(), w("li", {
                            key: s,
                            role: "option"
                          }, [
                            l("button", {
                              type: "button",
                              class: "library-tag-suggestion",
                              onMousedown: d[90] || (d[90] = Pe(() => {
                              }, ["prevent"])),
                              onClick: (P) => Sd(s, P)
                            }, v(s), 41, Bx)
                          ]))), 128))
                        ])) : z("", !0),
                        l("button", Hx, v(g(m)("library", "Apply tag")), 1)
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "Sort")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[91] || (d[91] = (s) => E.sort = s),
                          name: "sort",
                          onChange: en
                        }, [
                          l("option", Vx, v(g(m)("library", "Title")), 1),
                          l("option", Kx, v(g(m)("library", "Date added")), 1),
                          l("option", Gx, v(g(m)("library", "Publication date")), 1),
                          l("option", Wx, v(g(m)("library", "Series")), 1),
                          l("option", qx, v(g(m)("library", "Recently opened")), 1),
                          l("option", Yx, v(g(m)("library", "Format")), 1)
                        ], 544), [
                          [qt, E.sort]
                        ])
                      ]),
                      l("label", null, [
                        Te(v(g(m)("library", "View")), 1),
                        Re(l("select", {
                          "onUpdate:modelValue": d[92] || (d[92] = (s) => E.view = s),
                          name: "view",
                          onChange: en
                        }, [
                          l("option", Xx, v(g(m)("library", "Compact")), 1),
                          l("option", Zx, v(g(m)("library", "Gallery")), 1),
                          l("option", Jx, v(g(m)("library", "List")), 1),
                          l("option", Qx, v(g(m)("library", "Shelf")), 1)
                        ], 544), [
                          [qt, E.view]
                        ])
                      ])
                    ]),
                    l("div", eO, [
                      l("a", tO, v(g(m)("library", "Clear all")), 1),
                      l("button", nO, v(me.value), 1)
                    ])
                  ], 40, x2)
                ], 32),
                l("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": g(m)("library", "One catalogue workspace")
                }, [
                  l("form", {
                    method: "get",
                    class: "library-quick-filter-bar library-catalogue-toolbar",
                    "aria-label": g(m)("library", "Catalogue toolbar"),
                    onSubmit: Pe(en, ["prevent"])
                  }, [
                    (y(!0), w(ae, null, Ce(Ft.value, (s) => (y(), w("input", {
                      key: s.key,
                      type: "hidden",
                      name: s.key,
                      value: s.value
                    }, null, 8, rO))), 128)),
                    l("label", oO, [
                      Te(v(g(m)("library", "Sort")), 1),
                      Re(l("select", {
                        "onUpdate:modelValue": d[93] || (d[93] = (s) => E.sort = s),
                        name: "sort",
                        onChange: en
                      }, [
                        l("option", sO, v(g(m)("library", "Title")), 1),
                        l("option", lO, v(g(m)("library", "Date added")), 1),
                        l("option", cO, v(g(m)("library", "Publication date")), 1),
                        l("option", uO, v(g(m)("library", "Series")), 1),
                        l("option", dO, v(g(m)("library", "Recently opened")), 1),
                        l("option", fO, v(g(m)("library", "Format")), 1)
                      ], 544), [
                        [qt, E.sort]
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
                        class: Ee({ active: Qt.value === "compact" }),
                        "aria-pressed": Qt.value === "compact" ? "true" : "false",
                        onClick: d[94] || (d[94] = (s) => Zo("compact"))
                      }, v(g(m)("library", "Compact")), 11, pO),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "gallery",
                        class: Ee({ active: Qt.value === "gallery" }),
                        "aria-pressed": Qt.value === "gallery" ? "true" : "false",
                        onClick: d[95] || (d[95] = (s) => Zo("gallery"))
                      }, v(g(m)("library", "Gallery")), 11, vO),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "list",
                        class: Ee({ active: Qt.value === "list" }),
                        "aria-pressed": Qt.value === "list" ? "true" : "false",
                        onClick: d[96] || (d[96] = (s) => Zo("list"))
                      }, v(g(m)("library", "List")), 11, gO),
                      l("button", {
                        type: "button",
                        "data-library-view-mode": "shelf",
                        class: Ee({ active: Qt.value === "shelf" }),
                        "aria-pressed": Qt.value === "shelf" ? "true" : "false",
                        onClick: d[97] || (d[97] = (s) => Zo("shelf"))
                      }, v(g(m)("library", "Shelf")), 11, mO)
                    ], 8, hO)
                  ], 40, aO),
                  l("section", bO, [
                    l("h3", {
                      title: g(m)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                    }, v(g(m)("library", "Collections")), 9, yO),
                    l("form", {
                      method: "post",
                      action: Xl.value,
                      class: "library-saved-collection-save-form",
                      title: oc.value ? "" : g(m)("library", "Choose search terms or filters first, then save them as a custom collection.")
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Jt.value
                      }, null, 8, wO),
                      l("input", {
                        type: "hidden",
                        name: "savedCollectionFilters",
                        value: Ig.value
                      }, null, 8, SO),
                      l("label", null, [
                        Te(v(g(m)("library", "Collection name")), 1),
                        l("input", {
                          type: "text",
                          name: "savedCollectionName",
                          placeholder: g(m)("library", "e.g. Bremen photo books"),
                          disabled: !oc.value,
                          autocomplete: "off"
                        }, null, 8, CO)
                      ]),
                      l("button", {
                        type: "submit",
                        class: "button secondary",
                        disabled: !oc.value,
                        title: g(m)("library", "Save current view")
                      }, v(g(m)("library", "Save")), 9, TO)
                    ], 8, _O),
                    gr.value.length > 0 ? (y(), w("nav", {
                      key: 0,
                      class: "library-saved-collection-links",
                      "aria-label": g(m)("library", "Saved custom collections")
                    }, [
                      (y(!0), w(ae, null, Ce(gr.value, (s) => (y(), w("article", {
                        key: s.id,
                        class: "library-saved-collection-card"
                      }, [
                        l("a", {
                          class: "library-saved-collection-link",
                          href: $g(s.filters)
                        }, [
                          l("strong", null, v(s.name), 1),
                          l("span", kO, v(s.countPending ? "—" : g(dn)("library", "%n item", "%n items", Number(s.count || 0))), 1)
                        ], 8, AO),
                        l("form", {
                          method: "post",
                          action: Fg(s.id),
                          class: "library-saved-collection-delete-form"
                        }, [
                          l("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: Jt.value
                          }, null, 8, OO),
                          l("button", NO, v(g(m)("library", "Delete")), 1)
                        ], 8, xO)
                      ]))), 128))
                    ], 8, EO)) : z("", !0)
                  ]),
                  xn.value.length > 0 ? (y(), w("details", {
                    key: 0,
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": g(m)("library", "Batch actions for selected publications")
                  }, [
                    l("summary", RO, [
                      d[109] || (d[109] = l("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      l("span", {
                        class: "library-workspace-panel-title",
                        title: g(m)("library", "Batch actions for selected publications")
                      }, v(g(m)("library", "Batch actions")), 9, IO),
                      l("small", PO, v(g(m)("library", "Batch actions for selected publications")), 1),
                      l("b", $O, v(g(dn)("library", "%n publication selected", "%n publications selected", xn.value.length)), 1)
                    ]),
                    l("p", FO, v(g(dn)("library", "%n publication selected", "%n publications selected", xn.value.length)), 1),
                    l("div", {
                      class: "library-batch-action-grid",
                      onSubmitCapture: ag
                    }, [
                      l("form", {
                        method: "post",
                        action: Vl.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Jt.value
                        }, null, 8, MO),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Add tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, zO)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button primary",
                          title: g(m)("library", "Applies only to the selected publications.")
                        }, v(g(m)("library", "Apply")), 9, UO)
                      ], 8, DO),
                      l("form", {
                        method: "post",
                        action: Kl.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Jt.value
                        }, null, 8, BO),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Remove tag")), 1),
                          l("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: g(m)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, HO)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Removes the tag only from the selected publications.")
                        }, v(g(m)("library", "Remove")), 9, VO)
                      ], 8, jO),
                      l("form", {
                        method: "post",
                        action: Gl.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Jt.value
                        }, null, 8, GO),
                        (y(!0), w(ae, null, Ce(_t.value, (s) => (y(), w("input", {
                          key: `reset-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, WO))), 128)),
                        d[110] || (d[110] = l("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, v(g(m)("library", "Reset metadata")), 9, qO)
                      ], 8, KO),
                      l("form", {
                        method: "post",
                        action: Wl.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Jt.value
                        }, null, 8, XO),
                        (y(!0), w(ae, null, Ce(_t.value, (s) => (y(), w("input", {
                          key: `edit-preview-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, ZO))), 128)),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Field")), 1),
                          l("select", JO, [
                            l("option", QO, v(g(m)("library", "Publication type")), 1),
                            l("option", e3, v(g(m)("library", "Subtitle")), 1),
                            l("option", t3, v(g(m)("library", "Creators")), 1),
                            l("option", n3, v(g(m)("library", "Series / periodical")), 1),
                            l("option", i3, v(g(m)("library", "Publication date")), 1),
                            l("option", a3, v(g(m)("library", "Language")), 1),
                            l("option", r3, v(g(m)("library", "Publisher")), 1),
                            l("option", o3, v(g(m)("library", "Subjects")), 1),
                            l("option", s3, v(g(m)("library", "Classifications")), 1)
                          ])
                        ]),
                        l("label", null, [
                          l("span", null, v(g(m)("library", "Value")), 1),
                          l("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: g(m)("library", "magazine, de, photography…"),
                            autocomplete: "off"
                          }, null, 8, l3)
                        ]),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Preview first, then apply from the review page.")
                        }, v(g(m)("library", "Preview edit")), 9, c3)
                      ], 8, YO),
                      l("form", {
                        method: "post",
                        action: Mn.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        l("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: Jt.value
                        }, null, 8, d3),
                        (y(!0), w(ae, null, Ce(_t.value, (s) => (y(), w("input", {
                          key: `cover-${s.key}`,
                          type: "hidden",
                          name: s.key,
                          value: s.value
                        }, null, 8, f3))), 128)),
                        l("button", {
                          type: "submit",
                          class: "button secondary",
                          title: g(m)("library", "Batch actions for selected publications")
                        }, v(g(m)("library", "Fresh covers")), 9, h3)
                      ], 8, u3)
                    ], 32)
                  ], 8, LO)) : z("", !0)
                ], 8, iO),
                pr.value ? (y(), w("p", p3, v(pr.value), 1)) : z("", !0),
                vr.value ? (y(), w("p", v3, v(vr.value), 1)) : z("", !0),
                hr.value ? (y(), w("p", g3, v(hr.value), 1)) : z("", !0),
                l("div", m3, [
                  kt.loading ? (y(), w("span", b3, v(g(m)("library", "Updating catalogue…")), 1)) : kt.completed ? (y(), w("span", y3, v(g(dn)("library", "Catalogue updated. %n item.", "Catalogue updated. %n items.", Number(M.value.total || 0))), 1)) : z("", !0)
                ]),
                Oi.value ? (y(), w("section", _3, [
                  l("p", w3, v(dr.value), 1),
                  l("h3", {
                    id: "library-discovery-heading",
                    title: cr.value ? g(m)("library", "Items by this creator, sorted by publication context when available.") : kn.value ? g(m)("library", "Items from this publication year, sorted by publication date when available.") : g(m)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, v(ur.value), 9, S3),
                  l("div", {
                    class: "library-discovery-hero-metrics",
                    "aria-label": g(m)("library", "Discovery summary")
                  }, [
                    l("span", null, v(g(dn)("library", "%n item", "%n items", M.value.total)), 1),
                    O.value?.earliestYear && O.value?.latestYear ? (y(), w("span", T3, v(O.value.earliestYear) + "–" + v(O.value.latestYear), 1)) : z("", !0),
                    O.value?.datedCount ? (y(), w("span", E3, v(O.value.datedCount) + " " + v(g(m)("library", "dated")), 1)) : z("", !0),
                    O.value?.undatedCount > 0 ? (y(), w("span", A3, v(O.value.undatedCount) + " " + v(g(m)("library", "undated")), 1)) : z("", !0)
                  ], 8, C3),
                  xi.value && O.value ? (y(), w("aside", {
                    key: 0,
                    class: "library-publication-issue-context",
                    "aria-label": g(m)("library", "Publication issue/date context")
                  }, [
                    l("strong", null, v(g(m)("library", "Publication contents")), 1),
                    l("span", null, v(g(dn)("library", "%n item", "%n items", O.value.itemCount)), 1),
                    O.value.earliestYear && O.value.latestYear ? (y(), w("span", x3, v(O.value.earliestYear) + "–" + v(O.value.latestYear), 1)) : z("", !0),
                    l("span", null, v(O.value.datedCount) + " " + v(g(m)("library", "with issue/date coverage")), 1),
                    O.value.undatedCount > 0 ? (y(), w("span", O3, v(O.value.undatedCount) + " " + v(g(m)("library", "without dates yet")), 1)) : z("", !0),
                    l("span", null, v(g(m)("library", "read-only grouping")), 1)
                  ], 8, k3)) : z("", !0),
                  xi.value && O.value?.issueGroups?.length ? (y(), w("section", N3, [
                    l("div", null, [
                      l("p", L3, v(g(m)("library", "Issue order")), 1),
                      l("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: g(m)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, v(g(m)("library", "Read-only issue/date grouping")), 9, R3)
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
                        l("span", null, v(s.label), 1),
                        l("strong", null, v(s.items?.[0]?.issueLabel || g(m)("library", "Issue")), 1),
                        l("small", null, v(g(dn)("library", "%n item", "%n items", s.items?.length || 0)), 1)
                      ], 8, P3))), 128))
                    ], 8, I3),
                    O.value.gapRanges?.length ? (y(), w("p", $3, v(g(m)("library", "Gap")) + ": " + v(O.value.gapRanges.join(", ")), 1)) : z("", !0),
                    (y(!0), w(ae, null, Ce(O.value.issueGroups, (s) => (y(), w("div", {
                      key: s.label,
                      class: "library-publication-issue-group"
                    }, [
                      l("h5", null, v(s.label), 1),
                      l("ol", null, [
                        (y(!0), w(ae, null, Ce(s.items, (P, te) => (y(), w("li", {
                          key: P.itemId
                        }, [
                          l("span", F3, v(P.issueLabel), 1),
                          l("a", {
                            href: P.detailsUrl || "#"
                          }, v(P.title), 9, D3),
                          l("small", null, [
                            Te(v(P.publicationType), 1),
                            P.publicationDate ? (y(), w(ae, { key: 0 }, [
                              Te(" · " + v(P.publicationDate), 1)
                            ], 64)) : z("", !0)
                          ]),
                          l("small", M3, [
                            te > 0 ? (y(), w(ae, { key: 0 }, [
                              Te(v(g(m)("library", "Previous issue")), 1)
                            ], 64)) : z("", !0),
                            te > 0 && te < s.items.length - 1 ? (y(), w(ae, { key: 1 }, [
                              Te(" · ")
                            ], 64)) : z("", !0),
                            te < s.items.length - 1 ? (y(), w(ae, { key: 2 }, [
                              Te(v(g(m)("library", "Next issue")), 1)
                            ], 64)) : z("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    O.value.unknownIssueItems?.length ? (y(), w("details", z3, [
                      l("summary", {
                        title: g(m)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, v(g(m)("library", "Unknown issue/date")) + " · " + v(O.value.unknownIssueItems.length), 9, U3)
                    ])) : z("", !0)
                  ])) : z("", !0),
                  l("p", null, [
                    l("a", {
                      href: Ct.value,
                      class: "button secondary library-discovery-back-link"
                    }, v(g(m)("library", "Back to full catalogue")), 9, j3)
                  ])
                ])) : z("", !0),
                l("div", B3, [
                  l("p", H3, [
                    Te(v(g(m)("library", "Showing")) + " " + v(M.value.from) + "–" + v(M.value.to) + " " + v(g(m)("library", "of")) + " " + v(M.value.total) + " " + v(g(m)("library", "catalogue items")), 1),
                    S.value.length > 0 ? (y(), w("span", V3, [
                      d[111] || (d[111] = Te(" · ", -1)),
                      l("a", K3, v(g(m)("library", "Clear all filters")), 1)
                    ])) : z("", !0)
                  ]),
                  l("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": g(m)("library", "Catalogue pagination")
                  }, [
                    l("span", W3, [
                      Te(v(g(m)("library", "Page")) + " " + v(M.value.page), 1),
                      M.value.total > 0 ? (y(), w("span", q3, " · " + v(M.value.from) + "–" + v(M.value.to), 1)) : z("", !0)
                    ]),
                    M.value.previousUrl ? (y(), w("a", {
                      key: 0,
                      href: M.value.previousUrl
                    }, v(g(m)("library", "Previous")), 9, Y3)) : (y(), w("span", X3, v(g(m)("library", "Previous")), 1)),
                    M.value.nextUrl ? (y(), w("a", {
                      key: 2,
                      href: M.value.nextUrl
                    }, v(g(m)("library", "Next")), 9, Z3)) : (y(), w("span", J3, v(g(m)("library", "Next")), 1))
                  ], 8, G3)
                ]),
                b.value.length === 0 ? (y(), w("div", {
                  key: 4,
                  class: Ee(["library-empty-content", { "library-first-run-guidance": ia.value || Ni.value, "library-filter-empty-state": Zn.value && !ia.value && !Ni.value }]),
                  role: "status"
                }, [
                  ia.value ? (y(), w(ae, { key: 0 }, [
                    l("h3", {
                      title: g(m)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, v(g(m)("library", "Start with one Library root")), 9, Q3),
                    l("p", eN, [
                      l("a", {
                        href: Ti.value,
                        class: "button primary"
                      }, v(g(m)("library", "Add a Library root")), 9, tN),
                      l("span", nN, v(g(m)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Ni.value ? (y(), w(ae, { key: 1 }, [
                    l("h3", {
                      title: g(m)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, v(g(m)("library", "No enabled Library roots")), 9, iN),
                    l("p", aN, [
                      l("a", {
                        href: Ti.value,
                        class: "button primary"
                      }, v(g(m)("library", "Open Library settings")), 9, rN)
                    ])
                  ], 64)) : Zn.value ? (y(), w(ae, { key: 2 }, [
                    l("h3", {
                      title: g(m)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, v(g(m)("library", "No matches for the current filters")), 9, oN),
                    l("p", sN, [
                      l("a", {
                        href: Ng(),
                        class: "button secondary"
                      }, v(g(m)("library", "Clear search")), 9, lN),
                      l("a", cN, v(g(m)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (y(), w(ae, { key: 3 }, [
                    l("h3", {
                      title: g(m)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, v(g(m)("library", "No catalogue items yet")), 9, uN),
                    l("p", dN, [
                      l("a", {
                        href: Ti.value,
                        class: "button primary"
                      }, v(g(m)("library", "Run a scan from settings")), 9, fN)
                    ])
                  ], 64))
                ], 2)) : z("", !0),
                b.value.length > 0 ? (y(), w("label", hN, [
                  l("input", {
                    type: "checkbox",
                    checked: xn.value.length === b.value.length,
                    onChange: ng
                  }, null, 40, pN),
                  Te(" " + v(g(m)("library", "Select all publications on this page")), 1)
                ])) : z("", !0),
                b.value.length > 0 && Qt.value === "list" ? (y(), w("ul", vN, [
                  (y(!0), w(ae, null, Ce(b.value, (s) => (y(), w("li", {
                    key: s.id,
                    class: Ee(["library-catalogue-list-row", { "library-catalogue-list-row--selected": Bo.value.has(Number(s.id)), "library-catalogue-list-row--open": Li.value && Number(aa.value) === Number(s.id) }])
                  }, [
                    l("label", gN, [
                      l("input", {
                        type: "checkbox",
                        checked: Bo.value.has(Number(s.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${s.title}`,
                        onChange: (P) => cd(s.id, P.currentTarget.checked)
                      }, null, 40, mN)
                    ]),
                    l("div", bN, [
                      l("button", {
                        type: "button",
                        class: "library-cover-title-button library-catalogue-list-title",
                        onClick: (P) => zn(s, P)
                      }, [
                        l("bdi", _N, v(s.title), 1)
                      ], 8, yN),
                      s.creators ? (y(), w("span", wN, [
                        l("bdi", SN, v(s.creators), 1)
                      ])) : z("", !0)
                    ]),
                    l("dl", CN, [
                      s.publication ? (y(), w("div", TN, [
                        l("dt", null, v(g(m)("library", "Series")), 1),
                        l("dd", null, [
                          l("bdi", EN, v(s.publication), 1)
                        ])
                      ])) : z("", !0),
                      s.publicationDate ? (y(), w("div", AN, [
                        l("dt", null, v(g(m)("library", "Publication date")), 1),
                        l("dd", null, v(s.publicationDate), 1)
                      ])) : z("", !0),
                      s.extension || s.publicationType ? (y(), w("div", kN, [
                        l("dt", null, v(g(m)("library", "Format")), 1),
                        l("dd", null, [
                          l("bdi", {
                            class: Ee(s.extension ? "library-bidi-machine" : "library-bidi-human"),
                            dir: s.extension ? "ltr" : "auto"
                          }, v(s.extension ? za(s.extension) : s.publicationType), 11, xN)
                        ])
                      ])) : z("", !0),
                      s.shelf ? (y(), w("div", ON, [
                        l("dt", null, v(g(m)("library", "Shelf")), 1),
                        l("dd", null, [
                          l("bdi", NN, v(s.shelf), 1)
                        ])
                      ])) : z("", !0)
                    ]),
                    l("div", LN, [
                      l("a", {
                        class: "button primary",
                        href: s.openUrl
                      }, v(g(m)("library", "Open")), 9, RN),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: (P) => zn(s, P)
                      }, v(g(m)("library", "Details")), 9, IN)
                    ])
                  ], 2))), 128))
                ])) : b.value.length > 0 ? (y(), w("div", {
                  key: 7,
                  class: Ee(["library-cover-gallery", Uo.value])
                }, [
                  (y(!0), w(ae, null, Ce(b.value, (s) => (y(), w("article", {
                    key: s.id,
                    class: Ee(["library-cover-card", { "library-cover-card--cover-loaded": Ar(s) === "loaded", "library-cover-card--cover-error": Ar(s) === "error", "library-cover-card--selected": Bo.value.has(Number(s.id)), "library-cover-card--open": Li.value && Number(aa.value) === Number(s.id) }])
                  }, [
                    l("label", PN, [
                      l("input", {
                        type: "checkbox",
                        checked: Bo.value.has(Number(s.id)),
                        "aria-label": `${g(m)("library", "Select publication")}: ${s.title}`,
                        onChange: (P) => cd(s.id, P.currentTarget.checked)
                      }, null, 40, $N)
                    ]),
                    l("button", {
                      type: "button",
                      class: "library-cover-link",
                      "aria-labelledby": `library-details-action-${s.id} library-card-title-${s.id}`,
                      "aria-expanded": Li.value && Number(aa.value) === Number(s.id) ? "true" : "false",
                      onClick: (P) => zn(s, P)
                    }, [
                      l("span", {
                        id: `library-details-action-${s.id}`,
                        class: "hidden-visually"
                      }, v(g(m)("library", "Details")), 9, DN),
                      l("span", MN, [
                        Ar(s) === "loading" ? (y(), w("span", zN)) : z("", !0),
                        l("img", {
                          class: Ee(["library-cover-image", { "library-cover-image--loaded": Ar(s) === "loaded" }]),
                          src: s.coverUrl,
                          alt: "",
                          loading: "lazy",
                          onLoad: (P) => Dg(s),
                          onError: (P) => Mg(s)
                        }, null, 42, UN),
                        Ar(s) === "error" ? (y(), w("span", jN, v(g(m)("library", "Cover unavailable")), 1)) : z("", !0)
                      ])
                    ], 8, FN),
                    l("form", {
                      method: "post",
                      action: s.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: Pe((P) => $d(s, P), ["prevent"])
                    }, [
                      l("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: Jt.value
                      }, null, 8, HN),
                      d[112] || (d[112] = l("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      l("input", {
                        type: "hidden",
                        name: "starred",
                        value: s.starred ? "0" : "1"
                      }, null, 8, VN),
                      l("button", {
                        type: "submit",
                        class: Ee(["library-cover-star-button", { "library-cover-star-button--starred": s.starred }]),
                        "aria-pressed": s.starred ? "true" : "false",
                        title: s.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-label": s.starred ? g(m)("library", "Unstar this publication") : g(m)("library", "Star this publication"),
                        "aria-busy": kr[s.id] ? "true" : void 0,
                        disabled: kr[s.id],
                        onClick: Pe((P) => $d(s, P), ["prevent"])
                      }, v(s.starred ? "★" : "☆"), 11, KN),
                      xr[s.id] ? (y(), w("span", {
                        key: 0,
                        "data-library-star-error": s.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, v(xr[s.id]), 9, GN)) : z("", !0)
                    ], 40, BN),
                    l("div", WN, [
                      l("div", qN, [
                        l("h3", {
                          id: `library-card-title-${s.id}`
                        }, [
                          l("button", {
                            type: "button",
                            class: "library-cover-title-button",
                            onClick: (P) => zn(s, P)
                          }, [
                            l("bdi", ZN, v(s.title), 1)
                          ], 8, XN)
                        ], 8, YN),
                        s.creators ? (y(), w("p", JN, [
                          l("bdi", QN, v(s.creators), 1)
                        ])) : z("", !0),
                        sc(s) || s.extension ? (y(), w("div", eL, [
                          s.extension ? (y(), w("span", tL, [
                            l("bdi", nL, v(za(s.extension)), 1)
                          ])) : z("", !0),
                          sc(s) ? (y(), w("p", iL, [
                            l("bdi", aL, v(sc(s)), 1)
                          ])) : z("", !0)
                        ])) : z("", !0),
                        l("div", rL, [
                          l("a", {
                            class: "library-cover-read",
                            href: s.openUrl
                          }, v(g(m)("library", "Open")), 9, oL),
                          ye(g(Vs), {
                            "aria-label": g(m)("library", "More actions")
                          }, {
                            default: Le(() => [
                              ye(g(Ka), {
                                href: s.filesUrl
                              }, {
                                default: Le(() => [
                                  Te(v(g(m)("library", "Show in Files")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(Ka), {
                                href: s.downloadUrl
                              }, {
                                default: Le(() => [
                                  Te(v(g(m)("library", "Download")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"]),
                              ye(g(Ka), {
                                href: s.detailsUrl
                              }, {
                                default: Le(() => [
                                  Te(v(g(m)("library", "Maintenance")), 1)
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
                ], 2)) : z("", !0),
                b.value.length > 0 ? (y(), w("nav", {
                  key: 8,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": g(m)("library", "Catalogue pagination")
                }, [
                  l("span", lL, [
                    Te(v(g(m)("library", "Page")) + " " + v(M.value.page), 1),
                    M.value.total > 0 ? (y(), w("span", cL, " · " + v(M.value.from) + "–" + v(M.value.to), 1)) : z("", !0)
                  ]),
                  M.value.previousUrl ? (y(), w("a", {
                    key: 0,
                    href: M.value.previousUrl
                  }, v(g(m)("library", "Previous")), 9, uL)) : (y(), w("span", dL, v(g(m)("library", "Previous")), 1)),
                  M.value.nextUrl ? (y(), w("a", {
                    key: 2,
                    href: M.value.nextUrl
                  }, v(g(m)("library", "Next")), 9, fL)) : (y(), w("span", hL, v(g(m)("library", "Next")), 1))
                ], 8, sL)) : z("", !0)
              ], 10, S2))
            ], 8, mA)
          ]),
          _: 1
        }),
        ye(g(mT), {
          ref_key: "sidebarComponent",
          ref: oa,
          class: "library-native-item-sidebar",
          open: Li.value,
          "no-toggle": "",
          loading: Wt.loading,
          name: xe.value?.title || g(m)("library", "Publication details"),
          subname: xe.value?.creators || "",
          role: sa.value ? "dialog" : void 0,
          "aria-modal": sa.value ? "true" : void 0,
          "aria-labelledby": sa.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": sa.value && xe.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: vd,
          onClosed: dg,
          onClose: qo
        }, {
          default: Le(() => [
            l("div", pL, [
              l("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: ud,
                class: "hidden-visually",
                tabindex: "-1"
              }, v(xe.value?.title || g(m)("library", "Publication details")), 513),
              Wt.loading && !xe.value ? (y(), w("p", vL, v(g(m)("library", "Loading publication details…")), 1)) : Wt.error ? (y(), w("div", {
                key: 1,
                class: "library-sidebar-state",
                role: Wt.missing ? "status" : "alert"
              }, [
                l("p", null, v(Wt.error), 1),
                Wt.missing ? z("", !0) : (y(), w("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: d[98] || (d[98] = (s) => wr(aa.value, { historyMode: "none" }))
                }, v(g(m)("library", "Try again")), 1))
              ], 8, gL)) : xe.value ? (y(), w(ae, { key: 2 }, [
                l("p", mL, v(g(m)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                l("div", bL, [
                  l("span", yL, v(g(m)("library", "Cover for")), 1),
                  l("img", {
                    class: "library-detail-drawer-cover",
                    src: xe.value.coverUrl,
                    alt: "",
                    "aria-labelledby": "library-detail-drawer-cover-label library-detail-drawer-heading",
                    loading: "lazy"
                  }, null, 8, _L),
                  l("div", wL, [
                    l("p", SL, [
                      l("bdi", CL, v(xe.value.publicationType || g(m)("library", "Publication")), 1),
                      xe.value.extension ? (y(), w("span", TL, [
                        d[113] || (d[113] = Te(" · ", -1)),
                        l("bdi", EL, v(za(xe.value.extension)), 1)
                      ])) : z("", !0)
                    ]),
                    l("div", AL, [
                      l("a", {
                        class: "button primary",
                        href: xe.value.openUrl
                      }, v(g(m)("library", "Open")), 9, kL),
                      ye(g(Vs), {
                        "aria-label": g(m)("library", "File and maintenance actions")
                      }, {
                        default: Le(() => [
                          ye(g(Ka), {
                            href: xe.value.filesUrl
                          }, {
                            default: Le(() => [
                              Te(v(g(m)("library", "Show in Files")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(Ka), {
                            href: xe.value.downloadUrl
                          }, {
                            default: Le(() => [
                              Te(v(g(m)("library", "Download")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          ye(g(Ka), {
                            href: xe.value.detailsUrl
                          }, {
                            default: Le(() => [
                              Te(v(g(m)("library", "Maintenance (legacy)")), 1)
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
                  (y(), w(ae, null, Ce(og, (s) => l("button", {
                    key: s.key,
                    type: "button",
                    class: Ee({ active: ra.value === s.key }),
                    "aria-current": ra.value === s.key ? "page" : void 0,
                    onClick: (P) => ra.value = s.key
                  }, v(g(m)("library", s.label)), 11, OL)), 64))
                ], 8, xL),
                ra.value === "overview" ? (y(), w("section", NL, [
                  l("h3", LL, v(g(m)("library", "Overview")), 1),
                  xe.value.description ? (y(), w("p", RL, [
                    l("bdi", IL, v(xe.value.description), 1)
                  ])) : z("", !0),
                  l("dl", PL, [
                    xe.value.publication ? (y(), w("div", $L, [
                      l("dt", null, v(g(m)("library", "Series")), 1),
                      l("dd", null, v(xe.value.publication), 1)
                    ])) : z("", !0),
                    xe.value.publicationDate ? (y(), w("div", FL, [
                      l("dt", null, v(g(m)("library", "Date")), 1),
                      l("dd", null, v(xe.value.publicationDate), 1)
                    ])) : z("", !0),
                    xe.value.publisher ? (y(), w("div", DL, [
                      l("dt", null, v(g(m)("library", "Publisher")), 1),
                      l("dd", null, v(xe.value.publisher), 1)
                    ])) : z("", !0),
                    xe.value.language ? (y(), w("div", ML, [
                      l("dt", null, v(g(m)("library", "Language")), 1),
                      l("dd", null, v(xe.value.language), 1)
                    ])) : z("", !0),
                    xe.value.shelf ? (y(), w("div", zL, [
                      l("dt", null, v(g(m)("library", "Shelf")), 1),
                      l("dd", null, v(xe.value.shelf), 1)
                    ])) : z("", !0)
                  ])
                ])) : ra.value === "metadata" ? (y(), w("section", UL, [
                  l("h3", jL, v(g(m)("library", "Metadata")), 1),
                  l("form", {
                    class: "library-sidebar-metadata-form",
                    onSubmit: Pe(cg, ["prevent"])
                  }, [
                    l("label", null, [
                      Te(v(g(m)("library", "Title")), 1),
                      Re(l("input", {
                        "onUpdate:modelValue": d[99] || (d[99] = (s) => Dt.title = s),
                        name: "title",
                        required: ""
                      }, null, 512), [
                        [ft, Dt.title]
                      ])
                    ]),
                    l("label", null, [
                      Te(v(g(m)("library", "Publication date")), 1),
                      Re(l("input", {
                        "onUpdate:modelValue": d[100] || (d[100] = (s) => Dt.publicationDate = s),
                        name: "publicationDate",
                        inputmode: "numeric",
                        placeholder: g(m)("library", "e.g. 2026")
                      }, null, 8, BL), [
                        [ft, Dt.publicationDate]
                      ])
                    ]),
                    l("fieldset", null, [
                      l("legend", null, v(g(m)("library", "Identifiers")), 1),
                      (y(!0), w(ae, null, Ce(Dt.identifiers, (s, P) => (y(), w("div", {
                        key: P,
                        class: "library-sidebar-identifier"
                      }, [
                        Re(l("input", {
                          "onUpdate:modelValue": (te) => s.scheme = te,
                          "aria-label": g(m)("library", "Identifier type"),
                          placeholder: g(m)("library", "Identifier type")
                        }, null, 8, HL), [
                          [ft, s.scheme]
                        ]),
                        Re(l("input", {
                          "onUpdate:modelValue": (te) => s.displayValue = te,
                          "aria-label": g(m)("library", "Identifier value")
                        }, null, 8, VL), [
                          [ft, s.displayValue]
                        ]),
                        l("button", {
                          type: "button",
                          class: "button secondary",
                          onClick: (te) => lg(P)
                        }, v(g(m)("library", "Remove")), 9, KL)
                      ]))), 128)),
                      l("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: sg
                      }, v(g(m)("library", "Add identifier")), 1)
                    ]),
                    l("p", GL, v(g(m)("library", "Creator, publisher, language, and other fields remain available in Maintenance while sidebar editing expands.")), 1),
                    On.error ? (y(), w("p", WL, v(On.error), 1)) : On.saved ? (y(), w("p", qL, v(g(m)("library", "Metadata saved.")), 1)) : z("", !0),
                    l("button", {
                      type: "submit",
                      class: "button primary",
                      disabled: On.saving
                    }, v(On.saving ? g(m)("library", "Saving…") : g(m)("library", "Save metadata")), 9, YL)
                  ], 32),
                  Wo(xe.value).length ? (y(), w("section", XL, [
                    l("h4", ZL, v(g(m)("library", "Scanner suggestions")), 1),
                    l("p", JL, v(g(m)("library", "Suggestions are optional and never replace your edits automatically.")), 1),
                    l("dl", null, [
                      (y(!0), w(ae, null, Ce(Wo(xe.value), (s) => (y(), w("div", {
                        key: s.field
                      }, [
                        l("dt", null, v(s.field) + " · " + v(s.sourceProvenance), 1),
                        l("dd", null, [
                          Te(v(g(m)("library", "Current")) + ": " + v(s.currentValue || "—"), 1),
                          d[114] || (d[114] = l("br", null, null, -1)),
                          Te(v(g(m)("library", "Suggestion")) + ": " + v(s.scannerCandidate || "—"), 1)
                        ])
                      ]))), 128))
                    ])
                  ])) : z("", !0)
                ])) : (y(), w("section", QL, [
                  l("h3", eR, v(g(m)("library", "Activity")), 1),
                  l("dl", tR, [
                    l("div", null, [
                      l("dt", null, v(g(m)("library", "Scan status")), 1),
                      l("dd", null, v(xe.value.scanStatus || "—"), 1)
                    ]),
                    xe.value.workflowStatus ? (y(), w("div", nR, [
                      l("dt", null, v(g(m)("library", "Workflow")), 1),
                      l("dd", null, v(xe.value.workflowStatus), 1)
                    ])) : z("", !0),
                    xe.value.metadataSource ? (y(), w("div", iR, [
                      l("dt", null, v(g(m)("library", "Metadata source")), 1),
                      l("dd", null, v(xe.value.metadataSource), 1)
                    ])) : z("", !0),
                    xe.value.cachedPath ? (y(), w("div", aR, [
                      l("dt", null, v(g(m)("library", "File")), 1),
                      l("dd", rR, [
                        xe.value.openUrl ? (y(), w("a", {
                          key: 0,
                          href: xe.value.openUrl
                        }, [
                          l("bdi", sR, v(xe.value.cachedPath), 1)
                        ], 8, oR)) : (y(), w("bdi", lR, v(xe.value.cachedPath), 1))
                      ])
                    ])) : z("", !0)
                  ])
                ])),
                l("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": g(m)("library", "Browse neighbouring items")
                }, [
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Vo.value,
                    onClick: d[101] || (d[101] = (s) => Yo(Vo.value))
                  }, v(g(m)("library", "Previous item")), 9, uR),
                  l("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Ko.value,
                    onClick: d[102] || (d[102] = (s) => Yo(Ko.value))
                  }, v(g(m)("library", "Next item")), 9, dR)
                ], 8, cR)
              ], 64)) : z("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
};
function gR() {
  window.LibraryStartupWatchdog?.fail();
}
function mR(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && Array.isArray(e.items) && e.activeFilters !== null && typeof e.activeFilters == "object" && !Array.isArray(e.activeFilters) && e.cataloguePagination !== null && typeof e.cataloguePagination == "object" && !Array.isArray(e.cataloguePagination);
}
try {
  const e = Bu("library", "catalogue", null), t = document.querySelector("#library-vue-root");
  if (!t || !mR(e))
    throw new Error("Library startup prerequisites are unavailable");
  const n = {
    ...e,
    requestToken: t.dataset.requestToken || e.requestToken || ""
  };
  Cy(vR, { state: n }).mount(t), window.LibraryStartupWatchdog?.mounted();
} catch (e) {
  gR(), console.error("[library] Vue startup failed", e);
}
