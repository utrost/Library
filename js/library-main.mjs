// @__NO_SIDE_EFFECTS__
function Oc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const qe = {}, Ua = [], Tn = () => {
}, cf = () => !1, zs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Us = (e) => e.startsWith("onUpdate:"), vt = Object.assign, Rc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Gh = Object.prototype.hasOwnProperty, Xe = (e, t) => Gh.call(e, t), Se = Array.isArray, Fi = (e) => ao(e) === "[object Map]", ba = (e) => ao(e) === "[object Set]", pu = (e) => ao(e) === "[object Date]", Ie = (e) => typeof e == "function", ct = (e) => typeof e == "string", Fn = (e) => typeof e == "symbol", Je = (e) => e !== null && typeof e == "object", uf = (e) => (Je(e) || Ie(e)) && Ie(e.then) && Ie(e.catch), df = Object.prototype.toString, ao = (e) => df.call(e), qh = (e) => ao(e).slice(8, -1), ff = (e) => ao(e) === "[object Object]", Lc = (e) => ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Sr = /* @__PURE__ */ Oc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Bs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Wh = /-\w/g, Bt = Bs(
  (e) => e.replace(Wh, (t) => t.slice(1).toUpperCase())
), Yh = /\B([A-Z])/g, wi = Bs(
  (e) => e.replace(Yh, "-$1").toLowerCase()
), Hs = Bs((e) => e.charAt(0).toUpperCase() + e.slice(1)), dl = Bs(
  (e) => e ? `on${Hs(e)}` : ""
), Nt = (e, t) => !Object.is(e, t), Lo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, pf = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, js = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Zh = (e) => {
  const t = ct(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let hu;
const Vs = () => hu || (hu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kn(e) {
  if (Se(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = ct(i) ? em(i) : kn(i);
      if (a)
        for (const r in a)
          t[r] = a[r];
    }
    return t;
  } else if (ct(e) || Je(e))
    return e;
}
const Xh = /;(?![^(]*\))/g, Jh = /:([^]+)/, Qh = /\/\*[^]*?\*\//g;
function em(e) {
  const t = {};
  return e.replace(Qh, "").split(Xh).forEach((n) => {
    if (n) {
      const i = n.split(Jh);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function Re(e) {
  let t = "";
  if (ct(e))
    t = e;
  else if (Se(e))
    for (let n = 0; n < e.length; n++) {
      const i = Re(e[n]);
      i && (t += i + " ");
    }
  else if (Je(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function zo(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !ct(t) && (e.class = Re(t)), n && (e.style = kn(n)), e;
}
const tm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nm = /* @__PURE__ */ Oc(tm);
function hf(e) {
  return !!e || e === "";
}
function im(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Bi(e[i], t[i]);
  return n;
}
function mu(e, t) {
  if (e.size !== t.size) return !1;
  const n = Array.from(t), i = new Uint8Array(n.length);
  for (const a of e) {
    let r = -1;
    for (let o = 0; o < n.length; o++)
      if (!i[o] && Bi(a, n[o])) {
        r = o;
        break;
      }
    if (r < 0) return !1;
    i[r] = 1;
  }
  return !0;
}
function Bi(e, t) {
  if (e === t) return !0;
  let n = pu(e), i = pu(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Fn(e), i = Fn(t), n || i)
    return e === t;
  if (n = Se(e), i = Se(t), n || i)
    return n && i ? im(e, t) : !1;
  if (n = Je(e), i = Je(t), n || i) {
    if (!n || !i)
      return !1;
    if (n = Fi(e), i = Fi(t), n || i || (n = ba(e), i = ba(t), n || i))
      return n && i ? mu(e, t) : !1;
    const a = Object.keys(e).length, r = Object.keys(t).length;
    if (a !== r)
      return !1;
    for (const o in e) {
      const s = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
      if (s && !l || !s && l || !Bi(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function am(e, t) {
  return e.findIndex((n) => Bi(n, t));
}
const mf = (e) => !!(e && e.__v_isRef === !0), f = (e) => ct(e) ? e : e == null ? "" : Se(e) || Je(e) && (e.toString === df || !Ie(e.toString)) ? mf(e) ? f(e.value) : JSON.stringify(e, vf, 2) : String(e), vf = (e, t) => mf(t) ? vf(e, t.value) : Fi(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], r) => (n[fl(i, r) + " =>"] = a, n),
    {}
  )
} : ba(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => fl(n))
} : Fn(t) ? fl(t) : Je(t) && !Se(t) && !ff(t) ? String(t) : t, fl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function rm(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
let xt;
class om {
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
function sm() {
  return xt;
}
let st;
const pl = /* @__PURE__ */ new WeakSet();
class gf {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, xt && (xt.active ? xt.effects.push(this) : this.flags &= -2);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, vu(this), _f(this);
    const t = st, n = Mn;
    st = this, Mn = !0;
    try {
      return this.fn();
    } finally {
      wf(this), st = t, Mn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Mc(t);
      this.deps = this.depsTail = void 0, vu(this), this.onStop && this.onStop(), this.flags &= -2;
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
let bf = 0, Tr, kr;
function yf(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = kr, kr = e;
    return;
  }
  e.next = Tr, Tr = e;
}
function Ic() {
  bf++;
}
function Pc() {
  if (--bf > 0)
    return;
  if (kr) {
    let t = kr;
    for (kr = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Tr; ) {
    let t = Tr;
    for (Tr = void 0; t; ) {
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
function _f(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function wf(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Mc(i), lm(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Xl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Cf(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Cf(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ur) || (e.globalVersion = Ur, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = st, i = Mn;
  st = e, Mn = !0;
  try {
    _f(e);
    const a = e.fn(e._value);
    (t.version === 0 || Nt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    st = n, Mn = i, wf(e), e.flags &= -3;
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
function lm(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Mn = !0;
const Ef = [];
function gi() {
  Ef.push(Mn), Mn = !1;
}
function bi() {
  const e = Ef.pop();
  Mn = e === void 0 ? !0 : e;
}
function vu(e) {
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
let Ur = 0;
class cm {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ks {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!st || !Mn || st === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== st)
      n = this.activeLink = new cm(st, this), st.deps ? (n.prevDep = st.depsTail, st.depsTail.nextDep = n, st.depsTail = n) : st.deps = st.depsTail = n, Sf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = st.depsTail, n.nextDep = void 0, st.depsTail.nextDep = n, st.depsTail = n, st.deps === n && (st.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ur++, this.notify(t);
  }
  notify(t) {
    Ic();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Pc();
    }
  }
}
function Sf(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Sf(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Jl = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ Symbol(
  ""
), Ql = /* @__PURE__ */ Symbol(
  ""
), Br = /* @__PURE__ */ Symbol(
  ""
);
function $t(e, t, n) {
  if (Mn && st) {
    let i = Jl.get(e);
    i || Jl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Ks()), a.map = i, a.key = n), a.track();
  }
}
function ci(e, t, n, i, a, r) {
  const o = Jl.get(e);
  if (!o) {
    Ur++;
    return;
  }
  const s = (l) => {
    l && l.trigger();
  };
  if (Ic(), t === "clear")
    o.forEach(s);
  else {
    const l = Se(e), p = l && Lc(n);
    if (l && n === "length") {
      const c = Number(i);
      o.forEach((h, b) => {
        (b === "length" || b === Br || !Fn(b) && b >= c) && s(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), p && s(o.get(Br)), t) {
        case "add":
          l ? p && s(o.get("length")) : (s(o.get(ma)), Fi(e) && s(o.get(Ql)));
          break;
        case "delete":
          l || (s(o.get(ma)), Fi(e) && s(o.get(Ql)));
          break;
        case "set":
          Fi(e) && s(o.get(ma));
          break;
      }
  }
  Pc();
}
function Ra(e) {
  const t = /* @__PURE__ */ We(e);
  return t === e ? t : ($t(t, "iterate", Br), /* @__PURE__ */ An(e) ? t : t.map($n));
}
function Gs(e) {
  return $t(e = /* @__PURE__ */ We(e), "iterate", Br), e;
}
function Wn(e, t) {
  return /* @__PURE__ */ yi(e) ? Wa(/* @__PURE__ */ va(e) ? $n(t) : t) : $n(t);
}
const um = {
  __proto__: null,
  [Symbol.iterator]() {
    return hl(this, Symbol.iterator, (e) => Wn(this, e));
  },
  concat(...e) {
    return Ra(this).concat(
      ...e.map((t) => Se(t) ? Ra(t) : t)
    );
  },
  entries() {
    return hl(this, "entries", (e) => (e[1] = Wn(this, e[1]), e));
  },
  every(e, t) {
    return ni(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ni(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Wn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ni(
      this,
      "find",
      e,
      t,
      (n) => Wn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ni(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ni(
      this,
      "findLast",
      e,
      t,
      (n) => Wn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ni(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ni(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ml(this, "includes", e);
  },
  indexOf(...e) {
    return ml(this, "indexOf", e);
  },
  join(e) {
    return Ra(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ml(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ni(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return sr(this, "pop");
  },
  push(...e) {
    return sr(this, "push", e);
  },
  reduce(e, ...t) {
    return gu(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return gu(this, "reduceRight", e, t);
  },
  shift() {
    return sr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ni(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return sr(this, "splice", e);
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
    return sr(this, "unshift", e);
  },
  values() {
    return hl(this, "values", (e) => Wn(this, e));
  }
};
function hl(e, t, n) {
  const i = Gs(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ An(e) && (a._next = a.next, a.next = () => {
    const r = a._next();
    return r.done || (r.value = n(r.value)), r;
  }), a;
}
const dm = Array.prototype;
function ni(e, t, n, i, a, r) {
  const o = Gs(e), s = o !== e && !/* @__PURE__ */ An(e), l = o[t];
  if (l !== dm[t]) {
    const h = l.apply(e, r);
    return s ? $n(h) : h;
  }
  let p = n;
  o !== e && (s ? p = function(h, b) {
    return n.call(this, Wn(e, h), b, e);
  } : n.length > 2 && (p = function(h, b) {
    return n.call(this, h, b, e);
  }));
  const c = l.call(o, p, i);
  return s && a ? a(c) : c;
}
function gu(e, t, n, i) {
  const a = Gs(e), r = a !== e && !/* @__PURE__ */ An(e);
  let o = n, s = !1;
  a !== e && (r ? (s = i.length === 0, o = function(p, c, h) {
    return s && (s = !1, p = Wn(e, p)), n.call(this, p, Wn(e, c), h, e);
  }) : n.length > 3 && (o = function(p, c, h) {
    return n.call(this, p, c, h, e);
  }));
  const l = a[t](o, ...i);
  return s ? Wn(e, l) : l;
}
function ml(e, t, n) {
  const i = /* @__PURE__ */ We(e);
  $t(i, "iterate", Br);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ $c(n[0]) ? (n[0] = /* @__PURE__ */ We(n[0]), i[t](...n)) : a;
}
function sr(e, t, n = []) {
  gi(), Ic();
  const i = (/* @__PURE__ */ We(e))[t].apply(e, n);
  return Pc(), bi(), i;
}
const fm = /* @__PURE__ */ Oc("__proto__,__v_isRef,__isVue"), Tf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fn)
);
function pm(e) {
  Fn(e) || (e = String(e));
  const t = /* @__PURE__ */ We(this);
  return $t(t, "has", e), t.hasOwnProperty(e);
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
      return i === (a ? r ? Em : Of : r ? Nf : xf).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const o = Se(t);
    if (!a) {
      let l;
      if (o && (l = um[n]))
        return l;
      if (n === "hasOwnProperty")
        return pm;
    }
    const s = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ht(t) ? t : i
    );
    if ((Fn(n) ? Tf.has(n) : fm(n)) || (a || $t(t, "get", n), r))
      return s;
    if (/* @__PURE__ */ Ht(s)) {
      const l = o && Lc(n) ? s : s.value;
      return a && Je(l) ? /* @__PURE__ */ Hr(l) : l;
    }
    return Je(s) ? a ? /* @__PURE__ */ Hr(s) : /* @__PURE__ */ Yt(s) : s;
  }
}
class Af extends kf {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let r = t[n];
    const o = Se(t) && Lc(n);
    if (!this._isShallow) {
      const p = /* @__PURE__ */ yi(r);
      if (!/* @__PURE__ */ An(i) && !/* @__PURE__ */ yi(i) && (r = /* @__PURE__ */ We(r), i = /* @__PURE__ */ We(i)), !o && /* @__PURE__ */ Ht(r) && !/* @__PURE__ */ Ht(i))
        return p || (r.value = i), !0;
    }
    const s = o ? Number(n) < t.length : Xe(t, n), l = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Ht(t) ? t : a
    );
    return t === /* @__PURE__ */ We(a) && l && (s ? Nt(i, r) && ci(t, "set", n, i) : ci(t, "add", n, i)), l;
  }
  deleteProperty(t, n) {
    const i = Xe(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && ci(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Fn(n) || !Tf.has(n)) && $t(t, "has", n), i;
  }
  ownKeys(t) {
    return $t(
      t,
      "iterate",
      Se(t) ? "length" : ma
    ), Reflect.ownKeys(t);
  }
}
class hm extends kf {
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
const mm = /* @__PURE__ */ new Af(), vm = /* @__PURE__ */ new hm(), gm = /* @__PURE__ */ new Af(!0);
const ec = (e) => e, bo = (e) => Reflect.getPrototypeOf(e);
function bm(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, r = /* @__PURE__ */ We(a), o = Fi(r), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, p = a[e](...i), c = n ? ec : t ? Wa : $n;
    return !t && $t(
      r,
      "iterate",
      l ? Ql : ma
    ), vt(
      // inheriting all iterator properties
      Object.create(p),
      {
        // iterator protocol
        next() {
          const { value: h, done: b } = p.next();
          return b ? { value: h, done: b } : {
            value: s ? [c(h[0]), c(h[1])] : c(h),
            done: b
          };
        }
      }
    );
  };
}
function yo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ym(e, t) {
  const n = {
    get(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ We(r), s = /* @__PURE__ */ We(a);
      e || (Nt(a, s) && $t(o, "get", a), $t(o, "get", s));
      const { has: l } = bo(o), p = t ? ec : e ? Wa : $n;
      if (l.call(o, a))
        return p(r.get(a));
      if (l.call(o, s))
        return p(r.get(s));
      r !== o && r.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && $t(/* @__PURE__ */ We(a), "iterate", ma), a.size;
    },
    has(a) {
      const r = this.__v_raw, o = /* @__PURE__ */ We(r), s = /* @__PURE__ */ We(a);
      return e || (Nt(a, s) && $t(o, "has", a), $t(o, "has", s)), a === s ? r.has(a) : r.has(a) || r.has(s);
    },
    forEach(a, r) {
      const o = this, s = o.__v_raw, l = /* @__PURE__ */ We(s), p = t ? ec : e ? Wa : $n;
      return !e && $t(l, "iterate", ma), s.forEach((c, h) => a.call(r, p(c), p(h), o));
    }
  };
  return vt(
    n,
    e ? {
      add: yo("add"),
      set: yo("set"),
      delete: yo("delete"),
      clear: yo("clear")
    } : {
      add(a) {
        const r = /* @__PURE__ */ We(this), o = bo(r), s = /* @__PURE__ */ We(a), l = !t && !/* @__PURE__ */ An(a) && !/* @__PURE__ */ yi(a) ? s : a;
        return o.has.call(r, l) || Nt(a, l) && o.has.call(r, a) || Nt(s, l) && o.has.call(r, s) || (r.add(l), ci(r, "add", l, l)), this;
      },
      set(a, r) {
        !t && !/* @__PURE__ */ An(r) && !/* @__PURE__ */ yi(r) && (r = /* @__PURE__ */ We(r));
        const o = /* @__PURE__ */ We(this), { has: s, get: l } = bo(o);
        let p = s.call(o, a);
        p || (a = /* @__PURE__ */ We(a), p = s.call(o, a));
        const c = l.call(o, a);
        return o.set(a, r), p ? Nt(r, c) && ci(o, "set", a, r) : ci(o, "add", a, r), this;
      },
      delete(a) {
        const r = /* @__PURE__ */ We(this), { has: o, get: s } = bo(r);
        let l = o.call(r, a);
        l || (a = /* @__PURE__ */ We(a), l = o.call(r, a)), s && s.call(r, a);
        const p = r.delete(a);
        return l && ci(r, "delete", a, void 0), p;
      },
      clear() {
        const a = /* @__PURE__ */ We(this), r = a.size !== 0, o = a.clear();
        return r && ci(
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
    n[a] = bm(a, e, t);
  }), n;
}
function Dc(e, t) {
  const n = ym(e, t);
  return (i, a, r) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    Xe(n, a) && a in i ? n : i,
    a,
    r
  );
}
const _m = {
  get: /* @__PURE__ */ Dc(!1, !1)
}, wm = {
  get: /* @__PURE__ */ Dc(!1, !0)
}, Cm = {
  get: /* @__PURE__ */ Dc(!0, !1)
};
const xf = /* @__PURE__ */ new WeakMap(), Nf = /* @__PURE__ */ new WeakMap(), Of = /* @__PURE__ */ new WeakMap(), Em = /* @__PURE__ */ new WeakMap();
function Sm(e) {
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
function Yt(e) {
  return /* @__PURE__ */ yi(e) ? e : Fc(
    e,
    !1,
    mm,
    _m,
    xf
  );
}
// @__NO_SIDE_EFFECTS__
function Tm(e) {
  return Fc(
    e,
    !1,
    gm,
    wm,
    Nf
  );
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  return Fc(
    e,
    !0,
    vm,
    Cm,
    Of
  );
}
function Fc(e, t, n, i, a) {
  if (!Je(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = a.get(e);
  if (r)
    return r;
  const o = Sm(qh(e));
  if (o === 0)
    return e;
  const s = new Proxy(
    e,
    o === 2 ? i : n
  );
  return a.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  return /* @__PURE__ */ yi(e) ? /* @__PURE__ */ va(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function yi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function $c(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ We(t) : e;
}
function km(e) {
  return !Xe(e, "__v_skip") && Object.isExtensible(e) && pf(e, "__v_skip", !0), e;
}
const $n = (e) => Je(e) ? /* @__PURE__ */ Yt(e) : e, Wa = (e) => Je(e) ? /* @__PURE__ */ Hr(e) : e;
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  return Lf(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Rf(e) {
  return Lf(e, !0);
}
function Lf(e, t) {
  return /* @__PURE__ */ Ht(e) ? e : new Am(e, t);
}
class Am {
  constructor(t, n) {
    this.dep = new Ks(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ We(t), this._value = n ? t : $n(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ An(t) || /* @__PURE__ */ yi(t);
    t = i ? t : /* @__PURE__ */ We(t), Nt(t, n) && (this._rawValue = t, this._value = i ? t : $n(t), this.dep.trigger());
  }
}
function v(e) {
  return /* @__PURE__ */ Ht(e) ? e.value : e;
}
function pi(e) {
  return Ie(e) ? e() : v(e);
}
const xm = {
  get: (e, t, n) => t === "__v_raw" ? e : v(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Ht(a) && !/* @__PURE__ */ Ht(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function If(e) {
  return /* @__PURE__ */ va(e) ? e : new Proxy(e, xm);
}
class Nm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ks(), { get: i, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = i, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Om(e) {
  return new Nm(e);
}
class Rm {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ks(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ur - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return yf(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Cf(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Lm(e, t, n = !1) {
  let i, a;
  return Ie(e) ? i = e : (i = e.get, a = e.set), new Rm(i, a, n);
}
const _o = {}, Uo = /* @__PURE__ */ new WeakMap();
let oa;
function Im(e, t = !1, n = oa) {
  if (n) {
    let i = Uo.get(n);
    i || Uo.set(n, i = []), i.push(e);
  }
}
function Pm(e, t, n = qe) {
  const { immediate: i, deep: a, once: r, scheduler: o, augmentJob: s, call: l } = n, p = ($) => a ? $ : /* @__PURE__ */ An($) || a === !1 || a === 0 ? ui($, 1) : ui($);
  let c, h, b, C, N = !1, S = !1;
  if (/* @__PURE__ */ Ht(e) ? (h = () => e.value, N = /* @__PURE__ */ An(e)) : /* @__PURE__ */ va(e) ? (h = () => p(e), N = !0) : Se(e) ? (S = !0, N = e.some(($) => /* @__PURE__ */ va($) || /* @__PURE__ */ An($)), h = () => e.map(($) => {
    if (/* @__PURE__ */ Ht($))
      return $.value;
    if (/* @__PURE__ */ va($))
      return p($);
    if (Ie($))
      return l ? l($, 2) : $();
  })) : Ie(e) ? t ? h = l ? () => l(e, 2) : e : h = () => {
    if (b) {
      gi();
      try {
        b();
      } finally {
        bi();
      }
    }
    const $ = oa;
    oa = c;
    try {
      return l ? l(e, 3, [C]) : e(C);
    } finally {
      oa = $;
    }
  } : h = Tn, t && a) {
    const $ = h, ce = a === !0 ? 1 / 0 : a;
    h = () => ui($(), ce);
  }
  const R = sm(), L = () => {
    c.stop(), R && R.active && Rc(R.effects, c);
  };
  if (r && t) {
    const $ = t;
    t = (...ce) => {
      const pe = $(...ce);
      return L(), pe;
    };
  }
  let D = S ? new Array(e.length).fill(_o) : _o;
  const H = ($) => {
    if (!(!(c.flags & 1) || !c.dirty && !$))
      if (t) {
        const ce = c.run();
        if ($ || a || N || (S ? ce.some((pe, te) => Nt(pe, D[te])) : Nt(ce, D))) {
          b && b();
          const pe = oa;
          oa = c;
          try {
            const te = [
              ce,
              // pass undefined as the old value when it's changed for the first time
              D === _o ? void 0 : S && D[0] === _o ? [] : D,
              C
            ];
            D = ce, l ? l(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            oa = pe;
          }
        }
      } else
        c.run();
  };
  return s && s(H), c = new gf(h), c.scheduler = o ? () => o(H, !1) : H, C = ($) => Im($, !1, c), b = c.onStop = () => {
    const $ = Uo.get(c);
    if ($) {
      if (l)
        l($, 4);
      else
        for (const ce of $) ce();
      Uo.delete(c);
    }
  }, t ? i ? H(!0) : D = c.run() : o ? o(H.bind(null, !0), !0) : c.run(), L.pause = c.pause.bind(c), L.resume = c.resume.bind(c), L.stop = L, L;
}
function ui(e, t = 1 / 0, n) {
  if (t <= 0 || !Je(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ht(e))
    ui(e.value, t, n);
  else if (Se(e))
    for (let i = 0; i < e.length; i++)
      ui(e[i], t, n);
  else if (ba(e) || Fi(e))
    e.forEach((i) => {
      ui(i, t, n);
    });
  else if (ff(e)) {
    for (const i in e)
      ui(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ui(e[i], t, n);
  }
  return e;
}
function ro(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    qs(a, t, n);
  }
}
function xn(e, t, n, i) {
  if (Ie(e)) {
    const a = ro(e, t, n, i);
    return a && uf(a) && a.catch((r) => {
      qs(r, t, n);
    }), a;
  }
  if (Se(e)) {
    const a = [];
    for (let r = 0; r < e.length; r++)
      a.push(xn(e[r], t, n, i));
    return a;
  }
}
function qs(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || qe;
  if (t) {
    let s = t.parent;
    const l = t.proxy, p = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const c = s.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, l, p) === !1)
            return;
      }
      s = s.parent;
    }
    if (r) {
      gi(), ro(r, null, 10, [
        e,
        l,
        p
      ]), bi();
      return;
    }
  }
  Mm(e, n, a, i, o);
}
function Mm(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Zt = [];
let Kn = -1;
const Ba = [];
let Mi = null, Fa = 0;
const Pf = /* @__PURE__ */ Promise.resolve();
let Bo = null;
function hi(e) {
  const t = Bo || Pf;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dm(e) {
  let t = Kn + 1, n = Zt.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = Zt[i], r = jr(a);
    r < e || r === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function zc(e) {
  if (!(e.flags & 1)) {
    const t = jr(e), n = Zt[Zt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= jr(n) ? Zt.push(e) : Zt.splice(Dm(t), 0, e), e.flags |= 1, Mf();
  }
}
function Mf() {
  Bo || (Bo = Pf.then($f));
}
function Df(e) {
  if (!Se(e))
    Mi && e.id === -1 ? Mi.splice(Fa + 1, 0, e) : e.flags & 1 || (Ba.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      Ba.push(e[t]);
  Mf();
}
function bu(e, t, n = Kn + 1) {
  for (; n < Zt.length; n++) {
    const i = Zt[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      Zt.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Ff(e) {
  if (Ba.length) {
    const t = [...new Set(Ba)].sort(
      (n, i) => jr(n) - jr(i)
    );
    if (Ba.length = 0, Mi) {
      for (let n = 0; n < t.length; n++)
        Mi.push(t[n]);
      return;
    }
    for (Mi = t, Fa = 0; Fa < Mi.length; Fa++) {
      const n = Mi[Fa];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Mi = null, Fa = 0;
  }
}
const jr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $f(e) {
  try {
    for (Kn = 0; Kn < Zt.length; Kn++) {
      const t = Zt[Kn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), ro(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Kn < Zt.length; Kn++) {
      const t = Zt[Kn];
      t && (t.flags &= -2);
    }
    Kn = -1, Zt.length = 0, Ff(), Bo = null, (Zt.length || Ba.length) && $f();
  }
}
let Rt = null, Ws = null;
function Ho(e) {
  const t = Rt;
  return Rt = e, Ws = e && e.type.__scopeId || null, t;
}
function Fm(e) {
  Ws = e;
}
function $m() {
  Ws = null;
}
const zm = (e) => Me;
function Me(e, t = Rt, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && qo(-1);
    const r = Ho(t), o = mi.length;
    let s;
    try {
      s = e(...a);
    } finally {
      for (let l = mi.length; l > o; l--) Gc();
      Ho(r), i._d && qo(1);
    }
    return s;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function ot(e, t) {
  if (Rt === null)
    return e;
  const n = el(Rt), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [r, o, s, l = qe] = t[a];
    r && (Ie(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && ui(o), i.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function ea(e, t, n, i) {
  const a = e.dirs, r = t && t.dirs;
  for (let o = 0; o < a.length; o++) {
    const s = a[o];
    r && (s.oldValue = r[o].value);
    let l = s.dir[i];
    l && (gi(), xn(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), bi());
  }
}
function Cn(e, t) {
  if (Ut) {
    let n = Ut.provides;
    const i = Ut.parent && Ut.parent.provides;
    i === n && (n = Ut.provides = Object.create(i)), n[e] = t;
  }
}
function zt(e, t, n = !1) {
  const i = _a();
  if (i || ja) {
    let a = ja ? ja._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ie(t) ? t.call(i && i.proxy) : t;
  }
}
const Um = /* @__PURE__ */ Symbol.for("v-scx"), Bm = () => zt(Um);
function Hm(e, t) {
  return Ys(e, null, t);
}
function jm(e, t) {
  return Ys(
    e,
    null,
    { flush: "sync" }
  );
}
function an(e, t, n) {
  return Ys(e, t, n);
}
function Ys(e, t, n = qe) {
  const { immediate: i, deep: a, flush: r, once: o } = n, s = vt({}, n), l = t && i || !t && r !== "post";
  let p;
  if (Yr) {
    if (r === "sync") {
      const C = Bm();
      p = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!l) {
      const C = () => {
      };
      return C.stop = Tn, C.resume = Tn, C.pause = Tn, C;
    }
  }
  const c = Ut;
  s.call = (C, N, S) => xn(C, c, N, S);
  let h = !1;
  r === "post" ? s.scheduler = (C) => {
    Wt(C, c && c.suspense);
  } : r !== "sync" && (h = !0, s.scheduler = (C, N) => {
    N ? C() : zc(C);
  }), s.augmentJob = (C) => {
    t && (C.flags |= 4), h && (C.flags |= 2, c && (C.id = c.uid, C.i = c));
  };
  const b = Pm(e, t, s);
  return Yr && (p ? p.push(b) : l && b()), b;
}
function Vm(e, t, n) {
  const i = this.proxy, a = ct(e) ? e.includes(".") ? zf(i, e) : () => i[e] : e.bind(i, i);
  let r;
  Ie(t) ? r = t : (r = t.handler, n = t);
  const o = lo(this), s = Ys(a, r.bind(i), n);
  return o(), s;
}
function zf(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const Li = /* @__PURE__ */ new WeakMap(), Uf = /* @__PURE__ */ Symbol("_vte"), Zs = (e) => e.__isTeleport, la = (e) => e && (e.disabled || e.disabled === ""), Km = (e) => e && (e.defer || e.defer === ""), yu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, _u = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, tc = (e, t) => {
  const n = e && e.to;
  return ct(n) ? t ? t(n) : null : n;
}, Gm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, i, a, r, o, s, l, p) {
    const {
      mc: c,
      pc: h,
      pbc: b,
      o: { insert: C, querySelector: N, createText: S, createComment: R, parentNode: L }
    } = p, D = la(t.props);
    let { dynamicChildren: H } = t;
    const $ = (te, ne, P) => {
      te.shapeFlag & 16 && c(
        te.children,
        ne,
        P,
        a,
        r,
        o,
        s,
        l
      );
    }, ce = (te = t) => {
      const ne = la(te.props), P = te.target = tc(te.props, N), le = nc(P, te, S, C);
      P && (o !== "svg" && yu(P) ? o = "svg" : o !== "mathml" && _u(P) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(P), ne || ($(te, P, le), br(te, !1)));
    }, pe = (te) => {
      const ne = () => {
        if (Li.get(te) === ne) {
          if (Li.delete(te), la(te.props)) {
            const P = L(te.el) || n;
            $(te, P, te.anchor), br(te, !0);
          }
          ce(te);
        }
      };
      Li.set(te, ne), Wt(ne, r);
    };
    if (e == null) {
      const te = t.el = S(""), ne = t.anchor = S("");
      if (C(te, n, i), C(ne, n, i), Km(t.props) || r && r.pendingBranch) {
        pe(t);
        return;
      }
      D && ($(t, n, ne), br(t, !0)), ce();
    } else {
      t.el = e.el;
      const te = t.anchor = e.anchor, ne = Li.get(e);
      if (ne) {
        ne.flags |= 8, Li.delete(e), pe(t);
        return;
      }
      t.targetStart = e.targetStart;
      const P = t.target = e.target, le = t.targetAnchor = e.targetAnchor, ge = la(e.props), X = ge ? n : P, ie = ge ? te : le;
      if (o === "svg" || yu(P) ? o = "svg" : (o === "mathml" || _u(P)) && (o = "mathml"), H ? (b(
        e.dynamicChildren,
        H,
        X,
        a,
        r,
        o,
        s
      ), Kc(e, t, !0)) : l || h(
        e,
        t,
        X,
        ie,
        a,
        r,
        o,
        s,
        !1
      ), D)
        ge ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : wo(
          t,
          n,
          te,
          p,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const M = tc(t.props, N);
        M && (t.target = M, wo(
          t,
          M,
          null,
          p,
          0
        ));
      } else ge && wo(
        t,
        P,
        le,
        p,
        1
      );
      br(t, D);
    }
  },
  remove(e, t, n, { um: i, o: { remove: a } }, r) {
    const {
      shapeFlag: o,
      children: s,
      anchor: l,
      targetStart: p,
      targetAnchor: c,
      target: h,
      props: b
    } = e, C = la(b), N = r || !C, S = Li.get(e);
    if (S && (S.flags |= 8, Li.delete(e)), h && (a(p), a(c)), r && a(l), !S && (C || h) && o & 16)
      for (let R = 0; R < s.length; R++) {
        const L = s[R];
        i(
          L,
          t,
          n,
          N,
          !!L.dynamicChildren
        );
      }
  },
  move: wo,
  hydrate: qm
};
function wo(e, t, n, { o: { insert: i }, m: a }, r = 2) {
  r === 0 && i(e.targetAnchor, t, n);
  const { el: o, anchor: s, shapeFlag: l, children: p, props: c } = e, h = r === 2;
  if (h && i(o, t, n), !Li.has(e) && (!h || la(c)) && l & 16)
    for (let b = 0; b < p.length; b++)
      a(
        p[b],
        t,
        n,
        2
      );
  h && i(s, t, n);
}
function qm(e, t, n, i, a, r, {
  o: { nextSibling: o, parentNode: s, querySelector: l, insert: p, createText: c }
}, h) {
  function b(R, L) {
    let D = L;
    for (; D; ) {
      if (D && D.nodeType === 8) {
        if (D.data === "teleport start anchor")
          t.targetStart = D;
        else if (D.data === "teleport anchor") {
          t.targetAnchor = D, R._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      D = o(D);
    }
  }
  function C(R, L) {
    L.anchor = h(
      o(R),
      L,
      s(R),
      n,
      i,
      a,
      r
    );
  }
  const N = t.target = tc(
    t.props,
    l
  ), S = la(t.props);
  if (N) {
    const R = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (S ? (C(e, t), b(N, R), t.targetAnchor || nc(
      N,
      t,
      c,
      p,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      s(e) === N ? e : null
    )) : (t.anchor = o(e), b(N, R), t.targetAnchor || nc(N, t, c, p), h(
      R && o(R),
      t,
      N,
      n,
      i,
      a,
      r
    ))), br(t, S);
  } else S && t.shapeFlag & 16 && (C(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Bf = Gm;
function br(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let i, a;
    for (t ? (i = e.el, a = e.anchor) : (i = e.targetStart, a = e.targetAnchor); i && i !== a; )
      i.nodeType === 1 && i.setAttribute("data-v-owner", n.uid), i = i.nextSibling;
    n.ut();
  }
}
function nc(e, t, n, i, a = null) {
  const r = t.targetStart = n(""), o = t.targetAnchor = n("");
  return r[Uf] = o, e && (i(r, e, a), i(o, e, a)), o;
}
const En = /* @__PURE__ */ Symbol("_leaveCb"), lr = /* @__PURE__ */ Symbol("_enterCb");
function Wm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Vi(() => {
    e.isMounted = !0;
  }), Ya(() => {
    e.isUnmounting = !0;
  }), e;
}
const yn = [Function, Array], Hf = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: yn,
  onEnter: yn,
  onAfterEnter: yn,
  onEnterCancelled: yn,
  // leave
  onBeforeLeave: yn,
  onLeave: yn,
  onAfterLeave: yn,
  onLeaveCancelled: yn,
  // appear
  onBeforeAppear: yn,
  onAppear: yn,
  onAfterAppear: yn,
  onAppearCancelled: yn
}, jf = (e) => {
  const t = e.subTree;
  return t.component ? jf(t.component) : t;
}, Ym = {
  name: "BaseTransition",
  props: Hf,
  setup(e, { slots: t }) {
    const n = _a(), i = Wm();
    return () => {
      const a = t.default && Gf(t.default(), !0), r = a && a.length ? Vf(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? B() : void 0
      );
      if (!r)
        return;
      const o = /* @__PURE__ */ We(e), { mode: s } = o;
      if (i.isLeaving)
        return vl(r);
      const l = jo(r);
      if (!l)
        return vl(r);
      let p = ic(
        l,
        o,
        i,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => p = h
      );
      l.type !== Ot && Vr(l, p);
      let c = n.subTree && jo(n.subTree);
      if (c && c.type !== Ot && !ca(c, l) && jf(n).type !== Ot) {
        let h = ic(
          c,
          o,
          i,
          n
        );
        if (Vr(c, h), s === "out-in" && l.type !== Ot)
          return i.isLeaving = !0, h.afterLeave = () => {
            i.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, c = void 0;
          }, vl(r);
        s === "in-out" && l.type !== Ot ? h.delayLeave = (b, C, N) => {
          const S = Kf(
            i,
            c
          );
          S[String(c.key)] = c, b[En] = () => {
            C(), b[En] = void 0, delete p.delayedLeave, c = void 0;
          }, p.delayedLeave = () => {
            N(), delete p.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return r;
    };
  }
};
function Vf(e) {
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
const Zm = Ym;
function Kf(e, t) {
  const { leavingVNodes: n } = e;
  let i = n.get(t.type);
  return i || (i = /* @__PURE__ */ Object.create(null), n.set(t.type, i)), i;
}
function ic(e, t, n, i, a) {
  const {
    appear: r,
    mode: o,
    persisted: s = !1,
    onBeforeEnter: l,
    onEnter: p,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: b,
    onLeave: C,
    onAfterLeave: N,
    onLeaveCancelled: S,
    onBeforeAppear: R,
    onAppear: L,
    onAfterAppear: D,
    onAppearCancelled: H
  } = t, $ = String(e.key), ce = Kf(n, e), pe = (P, le) => {
    P && xn(
      P,
      i,
      9,
      le
    );
  }, te = (P, le) => {
    const ge = le[1];
    pe(P, le), Se(P) ? P.every((X) => X.length <= 1) && ge() : P.length <= 1 && ge();
  }, ne = {
    mode: o,
    persisted: s,
    beforeEnter(P) {
      let le = l;
      if (!n.isMounted)
        if (r)
          le = R || l;
        else
          return;
      P[En] && P[En](
        !0
        /* cancelled */
      );
      const ge = ce[$];
      ge && ca(e, ge) && ge.el[En] && ge.el[En](), pe(le, [P]);
    },
    enter(P) {
      if (ce[$] === e) return;
      let le = p, ge = c, X = h;
      if (!n.isMounted)
        if (r)
          le = L || p, ge = D || c, X = H || h;
        else
          return;
      let ie = !1;
      P[lr] = (F) => {
        ie || (ie = !0, F ? pe(X, [P]) : pe(ge, [P]), ne.delayedLeave && ne.delayedLeave(), P[lr] = void 0);
      };
      const M = P[lr].bind(null, !1);
      le ? te(le, [P, M]) : M();
    },
    leave(P, le) {
      const ge = String(e.key);
      if (P[lr] && P[lr](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return le();
      pe(b, [P]);
      let X = !1;
      P[En] = (M) => {
        X || (X = !0, le(), M ? pe(S, [P]) : pe(N, [P]), P[En] = void 0, ce[ge] === e && delete ce[ge]);
      };
      const ie = P[En].bind(null, !1);
      ce[ge] = e, C ? te(C, [P, ie]) : ie();
    },
    clone(P) {
      const le = ic(
        P,
        t,
        n,
        i,
        a
      );
      return a && a(le), le;
    }
  };
  return ne;
}
function vl(e) {
  if (Xs(e))
    return e = Hi(e), e.children = null, e;
}
function jo(e) {
  if (!Xs(e))
    return Zs(e.type) && e.children ? Vf(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Ie(n.default))
      return n.default();
  }
}
function Vr(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Vr(
      Zs(n.type) && jo(n) || n,
      t
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Gf(e, t = !1, n) {
  let i = [], a = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const s = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === he ? (o.patchFlag & 128 && a++, i = i.concat(
      Gf(o.children, t, s)
    )) : (t || o.type !== Ot) && i.push(s != null ? Hi(o, { key: s }) : o);
  }
  if (a > 1)
    for (let r = 0; r < i.length; r++)
      i[r].patchFlag = -2;
  return i;
}
// @__NO_SIDE_EFFECTS__
function Lt(e, t) {
  return Ie(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    vt({ name: e.name }, t, { setup: e })
  ) : e;
}
function qf(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Xm(e) {
  const t = _a(), n = /* @__PURE__ */ Rf(null);
  if (t) {
    const a = t.refs === qe ? t.refs = {} : t.refs;
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
const Vo = /* @__PURE__ */ new WeakMap();
function Ar(e, t, n, i, a = !1) {
  if (Se(e)) {
    e.forEach(
      (S, R) => Ar(
        S,
        t && (Se(t) ? t[R] : t),
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
  const r = i.shapeFlag & 4 ? el(i.component) : i.el, o = a ? null : r, { i: s, r: l } = e, p = t && t.r, c = s.refs === qe ? s.refs = {} : s.refs, h = s.setupState, b = /* @__PURE__ */ We(h), C = h === qe ? cf : (S) => wu(c, S) ? !1 : Xe(b, S), N = (S, R) => !(R && wu(c, R));
  if (p != null && p !== l) {
    if (Cu(t), ct(p))
      c[p] = null, C(p) && (h[p] = null);
    else if (/* @__PURE__ */ Ht(p)) {
      const S = t;
      N(p, S.k) && (p.value = null), S.k && (c[S.k] = null);
    }
  }
  if (Ie(l))
    ro(l, s, 12, [o, c]);
  else {
    const S = ct(l), R = /* @__PURE__ */ Ht(l);
    if (S || R) {
      const L = () => {
        if (e.f) {
          const D = S ? C(l) ? h[l] : c[l] : N() || !e.k ? l.value : c[e.k];
          if (a)
            Se(D) && Rc(D, r);
          else if (Se(D))
            D.includes(r) || D.push(r);
          else if (S)
            c[l] = [r], C(l) && (h[l] = c[l]);
          else {
            const H = [r];
            N(l, e.k) && (l.value = H), e.k && (c[e.k] = H);
          }
        } else S ? (c[l] = o, C(l) && (h[l] = o)) : R && (N(l, e.k) && (l.value = o), e.k && (c[e.k] = o));
      };
      if (o) {
        const D = () => {
          L(), Vo.delete(e);
        };
        D.id = -1, Vo.set(e, D), Wt(D, n);
      } else
        Cu(e), L();
    }
  }
}
function Cu(e) {
  const t = Vo.get(e);
  t && (t.flags |= 8, Vo.delete(e));
}
Vs().requestIdleCallback;
Vs().cancelIdleCallback;
const Ha = (e) => !!e.type.__asyncLoader, Xs = (e) => e.type.__isKeepAlive;
function Jm(e, t) {
  Wf(e, "a", t);
}
function Qm(e, t) {
  Wf(e, "da", t);
}
function Wf(e, t, n = Ut) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Js(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Xs(a.parent.vnode) && ev(i, t, n, a), a = a.parent;
  }
}
function ev(e, t, n, i) {
  const a = Js(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  oo(() => {
    Rc(i[t], a);
  }, n);
}
function Js(e, t, n = Ut, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      gi();
      const s = lo(n), l = xn(t, n, e, o);
      return s(), bi(), l;
    });
    return i ? a.unshift(r) : a.push(r), r;
  }
}
const Ci = (e) => (t, n = Ut) => {
  (!Yr || e === "sp") && Js(e, (...i) => t(...i), n);
}, Yf = Ci("bm"), Vi = Ci("m"), Zf = Ci(
  "bu"
), tv = Ci("u"), Ya = Ci(
  "bum"
), oo = Ci("um"), nv = Ci(
  "sp"
), iv = Ci("rtg"), av = Ci("rtc");
function rv(e, t = Ut) {
  Js("ec", e, t);
}
const Uc = "components", ov = "directives";
function je(e, t) {
  return Hc(Uc, e, !0, t) || e;
}
const Xf = /* @__PURE__ */ Symbol.for("v-ndc");
function Bc(e) {
  return ct(e) ? Hc(Uc, e, !1) || e : e || Xf;
}
function Eu(e) {
  return Hc(ov, e);
}
function Hc(e, t, n = !0, i = !1) {
  const a = Rt || Ut;
  if (a) {
    const r = a.type;
    if (e === Uc) {
      const s = Hv(
        r,
        !1
      );
      if (s && (s === t || s === Bt(t) || s === Hs(Bt(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Su(a[e] || r[e], t) || // global registration
      Su(a.appContext[e], t)
    );
    return !o && i ? r : o;
  }
}
function Su(e, t) {
  return e && (e[t] || e[Bt(t)] || e[Hs(Bt(t))]);
}
function ze(e, t, n, i) {
  let a;
  const r = n, o = Se(e);
  if (o || ct(e)) {
    const s = o && /* @__PURE__ */ va(e);
    let l = !1, p = !1;
    s && (l = !/* @__PURE__ */ An(e), p = /* @__PURE__ */ yi(e), e = Gs(e)), a = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      a[c] = t(
        l ? p ? Wa($n(e[c])) : $n(e[c]) : e[c],
        c,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let s = 0; s < e; s++)
      a[s] = t(s + 1, s, void 0, r);
  } else if (Je(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (s, l) => t(s, l, void 0, r)
      );
    else {
      const s = Object.keys(e);
      a = new Array(s.length);
      for (let l = 0, p = s.length; l < p; l++) {
        const c = s[l];
        a[l] = t(e[c], c, l, r);
      }
    }
  else
    a = [];
  return a;
}
function De(e, t, n, i, a, r) {
  if (n == null && (n = {}), Rt.ce || Rt.parent && Ha(Rt.parent) && Rt.parent.ce) {
    const p = n, c = Object.keys(p).length > 0;
    return t !== "default" && (p.name = t), y(), Be(
      he,
      null,
      [Ae("slot", p, i && i())],
      c ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const s = mi.length;
  y();
  let l;
  try {
    const p = o && Jf(o(n)), c = n.key || r || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    p && p.key;
    l = Be(
      he,
      {
        key: (c && !Fn(c) ? c : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!p && i ? "_fb" : "")
      },
      p || (i ? i() : []),
      p && e._ === 1 ? 64 : -2
    );
  } catch (p) {
    for (let c = mi.length; c > s; c--) Gc();
    throw p;
  } finally {
    o && o._c && (o._d = !0);
  }
  return !a && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Jf(e) {
  return e.some((t) => Gr(t) ? !(t.type === Ot || t.type === he && !Jf(t.children)) : !0) ? e : null;
}
const ac = (e) => e ? _p(e) ? el(e) : ac(e.parent) : null, xr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ vt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ac(e.parent),
    $root: (e) => ac(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => tp(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      zc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = hi.bind(e.proxy)),
    $watch: (e) => Vm.bind(e)
  })
), gl = (e, t) => e !== qe && !e.__isScriptSetup && Xe(e, t), sv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: r, accessCache: o, type: s, appContext: l } = e;
    if (t[0] !== "$") {
      const b = o[t];
      if (b !== void 0)
        switch (b) {
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
        if (gl(i, t))
          return o[t] = 1, i[t];
        if (a !== qe && Xe(a, t))
          return o[t] = 2, a[t];
        if (Xe(r, t))
          return o[t] = 3, r[t];
        if (n !== qe && Xe(n, t))
          return o[t] = 4, n[t];
        rc && (o[t] = 0);
      }
    }
    const p = xr[t];
    let c, h;
    if (p)
      return t === "$attrs" && $t(e.attrs, "get", ""), p(e);
    if (
      // css module (injected by vue-loader)
      (c = s.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== qe && Xe(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, Xe(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: r } = e;
    return gl(a, t) ? (a[t] = n, !0) : i !== qe && Xe(i, t) ? (i[t] = n, !0) : Xe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: r, type: o }
  }, s) {
    let l;
    return !!(n[s] || e !== qe && s[0] !== "$" && Xe(e, s) || gl(t, s) || Xe(r, s) || Xe(i, s) || Xe(xr, s) || Xe(a.config.globalProperties, s) || (l = o.__cssModules) && l[s]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function lv() {
  return Qf().slots;
}
function cv() {
  return Qf().attrs;
}
function Qf(e) {
  const t = _a();
  return t.setupContext || (t.setupContext = Cp(t));
}
function Ko(e) {
  return Se(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function uv(e, t) {
  return !e || !t ? e || t : Se(e) && Se(t) ? e.concat(t) : vt({}, Ko(e), Ko(t));
}
let rc = !0;
function dv(e) {
  const t = tp(e), n = e.proxy, i = e.ctx;
  rc = !1, t.beforeCreate && Tu(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: r,
    methods: o,
    watch: s,
    provide: l,
    inject: p,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: b,
    beforeUpdate: C,
    updated: N,
    activated: S,
    deactivated: R,
    beforeDestroy: L,
    beforeUnmount: D,
    destroyed: H,
    unmounted: $,
    render: ce,
    renderTracked: pe,
    renderTriggered: te,
    errorCaptured: ne,
    serverPrefetch: P,
    // public API
    expose: le,
    inheritAttrs: ge,
    // assets
    components: X,
    directives: ie,
    filters: M
  } = t;
  if (p && fv(p, i, null), o)
    for (const oe in o) {
      const Q = o[oe];
      Ie(Q) && (i[oe] = Q.bind(n));
    }
  if (a) {
    const oe = a.call(n, n);
    Je(oe) && (e.data = /* @__PURE__ */ Yt(oe));
  }
  if (rc = !0, r)
    for (const oe in r) {
      const Q = r[oe], de = Ie(Q) ? Q.bind(n, n) : Ie(Q.get) ? Q.get.bind(n, n) : Tn, ve = !Ie(Q) && Ie(Q.set) ? Q.set.bind(n) : Tn, we = q({
        get: de,
        set: ve
      });
      Object.defineProperty(i, oe, {
        enumerable: !0,
        configurable: !0,
        get: () => we.value,
        set: (Ce) => we.value = Ce
      });
    }
  if (s)
    for (const oe in s)
      ep(s[oe], i, n, oe);
  if (l) {
    const oe = Ie(l) ? l.call(n) : l;
    Reflect.ownKeys(oe).forEach((Q) => {
      Cn(Q, oe[Q]);
    });
  }
  c && Tu(c, e, "c");
  function W(oe, Q) {
    Se(Q) ? Q.forEach((de) => oe(de.bind(n))) : Q && oe(Q.bind(n));
  }
  if (W(Yf, h), W(Vi, b), W(Zf, C), W(tv, N), W(Jm, S), W(Qm, R), W(rv, ne), W(av, pe), W(iv, te), W(Ya, D), W(oo, $), W(nv, P), Se(le))
    if (le.length) {
      const oe = e.exposed || (e.exposed = {});
      le.forEach((Q) => {
        Object.defineProperty(oe, Q, {
          get: () => n[Q],
          set: (de) => n[Q] = de,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  ce && e.render === Tn && (e.render = ce), ge != null && (e.inheritAttrs = ge), X && (e.components = X), ie && (e.directives = ie), P && qf(e);
}
function fv(e, t, n = Tn) {
  Se(e) && (e = oc(e));
  for (const i in e) {
    const a = e[i];
    let r;
    Je(a) ? "default" in a ? r = zt(
      a.from || i,
      a.default,
      !0
    ) : r = zt(a.from || i) : r = zt(a), /* @__PURE__ */ Ht(r) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[i] = r;
  }
}
function Tu(e, t, n) {
  xn(
    Se(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ep(e, t, n, i) {
  let a = i.includes(".") ? zf(n, i) : () => n[i];
  if (ct(e)) {
    const r = t[e];
    Ie(r) && an(a, r);
  } else if (Ie(e))
    an(a, e.bind(n));
  else if (Je(e))
    if (Se(e))
      e.forEach((r) => ep(r, t, n, i));
    else {
      const r = Ie(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ie(r) && an(a, r, e);
    }
}
function tp(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, s = r.get(t);
  let l;
  return s ? l = s : !a.length && !n && !i ? l = t : (l = {}, a.length && a.forEach(
    (p) => Go(l, p, o, !0)
  ), Go(l, t, o)), Je(t) && r.set(t, l), l;
}
function Go(e, t, n, i = !1) {
  const { mixins: a, extends: r } = t;
  r && Go(e, r, n, !0), a && a.forEach(
    (o) => Go(e, o, n, !0)
  );
  for (const o in t)
    if (!(i && o === "expose")) {
      const s = pv[o] || n && n[o];
      e[o] = s ? s(e[o], t[o]) : t[o];
    }
  return e;
}
const pv = {
  data: ku,
  props: Au,
  emits: Au,
  // objects
  methods: yr,
  computed: yr,
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
  components: yr,
  directives: yr,
  // watch
  watch: mv,
  // provide / inject
  provide: ku,
  inject: hv
};
function ku(e, t) {
  return t ? e ? function() {
    return vt(
      Ie(e) ? e.call(this, this) : e,
      Ie(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hv(e, t) {
  return yr(oc(e), oc(t));
}
function oc(e) {
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
function yr(e, t) {
  return e ? vt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Au(e, t) {
  return e ? Se(e) && Se(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : vt(
    /* @__PURE__ */ Object.create(null),
    Ko(e),
    Ko(t ?? {})
  ) : t;
}
function mv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = vt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = qt(e[i], t[i]);
  return n;
}
function np() {
  return {
    app: null,
    config: {
      isNativeTag: cf,
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
let vv = 0;
function gv(e, t) {
  return function(i, a = null) {
    Ie(i) || (i = vt({}, i)), a != null && !Je(a) && (a = null);
    const r = np(), o = /* @__PURE__ */ new WeakSet(), s = [];
    let l = !1;
    const p = r.app = {
      _uid: vv++,
      _component: i,
      _props: a,
      _container: null,
      _context: r,
      _instance: null,
      version: Vv,
      get config() {
        return r.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return o.has(c) || (c && Ie(c.install) ? (o.add(c), c.install(p, ...h)) : Ie(c) && (o.add(c), c(p, ...h))), p;
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), p;
      },
      component(c, h) {
        return h ? (r.components[c] = h, p) : r.components[c];
      },
      directive(c, h) {
        return h ? (r.directives[c] = h, p) : r.directives[c];
      },
      mount(c, h, b) {
        if (!l) {
          const C = p._ceVNode || Ae(i, a);
          return C.appContext = r, b === !0 ? b = "svg" : b === !1 && (b = void 0), e(C, c, b), l = !0, p._container = c, c.__vue_app__ = p, el(C.component);
        }
      },
      onUnmount(c) {
        s.push(c);
      },
      unmount() {
        l && (xn(
          s,
          p._instance,
          16
        ), e(null, p._container), delete p._container.__vue_app__);
      },
      provide(c, h) {
        return r.provides[c] = h, p;
      },
      runWithContext(c) {
        const h = ja;
        ja = p;
        try {
          return c();
        } finally {
          ja = h;
        }
      }
    };
    return p;
  };
}
let ja = null;
function ip(e, t, n = qe) {
  const i = _a(), a = Bt(t), r = wi(t), o = ap(e, a), s = Om((l, p) => {
    let c, h = qe, b;
    return jm(() => {
      const C = e[a];
      Nt(c, C) && (c = C, p());
    }), {
      get() {
        return l(), n.get ? n.get(c) : c;
      },
      set(C) {
        const N = n.set ? n.set(C) : C;
        if (!Nt(N, c) && !(h !== qe && Nt(C, h)))
          return;
        const S = i.vnode.props, R = !!(S && // check if parent has passed v-model
        (t in S || a in S || r in S) && (`onUpdate:${t}` in S || `onUpdate:${a}` in S || `onUpdate:${r}` in S));
        R || (c = C, p()), i.emit(`update:${t}`, N), Nt(C, h) && (Nt(C, N) && !Nt(N, b) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        R && h !== qe && !Nt(N, c)) && p(), h = C, b = N;
      }
    };
  });
  return s[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? o || qe : s, done: !1 } : { done: !0 };
      }
    };
  }, s;
}
const ap = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Bt(t)}Modifiers`] || e[`${wi(t)}Modifiers`];
function bv(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || qe;
  let a = n;
  const r = t.startsWith("update:"), o = r && ap(i, t.slice(7));
  o && (o.trim && (a = n.map((c) => ct(c) ? c.trim() : c)), o.number && (a = a.map(js)));
  let s, l = i[s = dl(t)] || // also try camelCase event handler (#2249)
  i[s = dl(Bt(t))];
  !l && r && (l = i[s = dl(wi(t))]), l && xn(
    l,
    e,
    6,
    a
  );
  const p = i[s + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, xn(
      p,
      e,
      6,
      a
    );
  }
}
const yv = /* @__PURE__ */ new WeakMap();
function rp(e, t, n = !1) {
  const i = n ? yv : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const r = e.emits;
  let o = {}, s = !1;
  if (!Ie(e)) {
    const l = (p) => {
      const c = rp(p, t, !0);
      c && (s = !0, vt(o, c));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !r && !s ? (Je(e) && i.set(e, null), null) : (Se(r) ? r.forEach((l) => o[l] = null) : vt(o, r), Je(e) && i.set(e, o), o);
}
function Qs(e, t) {
  return !e || !zs(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Xe(e, t[0].toLowerCase() + t.slice(1)) || Xe(e, wi(t)) || Xe(e, t));
}
function xu(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [r],
    slots: o,
    attrs: s,
    emit: l,
    render: p,
    renderCache: c,
    props: h,
    data: b,
    setupState: C,
    ctx: N,
    inheritAttrs: S
  } = e, R = Ho(e);
  let L, D;
  try {
    if (n.shapeFlag & 4) {
      const $ = a || i, ce = $;
      L = Yn(
        p.call(
          ce,
          $,
          c,
          h,
          C,
          b,
          N
        )
      ), D = s;
    } else {
      const $ = t;
      L = Yn(
        $.length > 1 ? $(
          h,
          { attrs: s, slots: o, emit: l }
        ) : $(
          h,
          null
        )
      ), D = t.props ? s : _v(s);
    }
  } catch ($) {
    mi.length = 0, qs($, e, 1), L = Ae(Ot);
  }
  let H = L;
  if (D && S !== !1) {
    const $ = Object.keys(D), { shapeFlag: ce } = H;
    $.length && ce & 7 && (r && $.some(Us) && (D = wv(
      D,
      r
    )), H = Hi(H, D, !1, !0));
  }
  if (n.dirs && (H = Hi(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const $ = Zs(H.type) && jo(H) || H;
    Vr($, n.transition);
  }
  return L = H, Ho(R), L;
}
const _v = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || zs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, wv = (e, t) => {
  const n = {};
  for (const i in e)
    (!Us(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Cv(e, t, n) {
  const { props: i, children: a, component: r } = e, { props: o, children: s, patchFlag: l } = t, p = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return i ? Nu(i, o, p) : !!o;
    if (l & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const b = c[h];
        if (op(o, i, b) && !Qs(p, b))
          return !0;
      }
    }
  } else
    return (a || s) && (!s || !s.$stable) ? !0 : i === o ? !1 : i ? o ? Nu(i, o, p) : !0 : !!o;
  return !1;
}
function Nu(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const r = i[a];
    if (op(t, e, r) && !Qs(n, r))
      return !0;
  }
  return !1;
}
function op(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && Je(i) && Je(a) ? !Bi(i, a) : i !== a;
}
function Ev({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const sp = {}, lp = () => Object.create(sp), cp = (e) => Object.getPrototypeOf(e) === sp;
function Sv(e, t, n, i = !1) {
  const a = {}, r = lp();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), up(e, t, a, r);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ Tm(a) : e.type.props ? e.props = a : e.props = r, e.attrs = r;
}
function Tv(e, t, n, i) {
  const {
    props: a,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, s = /* @__PURE__ */ We(a), [l] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let b = c[h];
        if (Qs(e.emitsOptions, b))
          continue;
        const C = t[b];
        if (l)
          if (Xe(r, b))
            C !== r[b] && (r[b] = C, p = !0);
          else {
            const N = Bt(b);
            a[N] = sc(
              l,
              s,
              N,
              C,
              e,
              !1
            );
          }
        else
          C !== r[b] && (r[b] = C, p = !0);
      }
    }
  } else {
    up(e, t, a, r) && (p = !0);
    let c;
    for (const h in s)
      (!t || // for camelCase
      !Xe(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = wi(h)) === h || !Xe(t, c))) && (l ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[c] !== void 0) && (a[h] = sc(
        l,
        s,
        h,
        void 0,
        e,
        !0
      )) : delete a[h]);
    if (r !== s)
      for (const h in r)
        (!t || !Xe(t, h)) && (delete r[h], p = !0);
  }
  p && ci(e.attrs, "set", "");
}
function up(e, t, n, i) {
  const [a, r] = e.propsOptions;
  let o = !1, s;
  if (t)
    for (let l in t) {
      if (Sr(l))
        continue;
      const p = t[l];
      let c;
      a && Xe(a, c = Bt(l)) ? !r || !r.includes(c) ? n[c] = p : (s || (s = {}))[c] = p : Qs(e.emitsOptions, l) || (!(l in i) || p !== i[l]) && (i[l] = p, o = !0);
    }
  if (r) {
    const l = /* @__PURE__ */ We(n), p = s || qe;
    for (let c = 0; c < r.length; c++) {
      const h = r[c];
      n[h] = sc(
        a,
        l,
        h,
        p[h],
        e,
        !Xe(p, h)
      );
    }
  }
  return o;
}
function sc(e, t, n, i, a, r) {
  const o = e[n];
  if (o != null) {
    const s = Xe(o, "default");
    if (s && i === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && Ie(l)) {
        const { propsDefaults: p } = a;
        if (n in p)
          i = p[n];
        else {
          const c = lo(a);
          i = p[n] = l.call(
            null,
            t
          ), c();
        }
      } else
        i = l;
      a.ce && a.ce._setProp(n, i);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !s ? i = !1 : o[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === wi(n)) && (i = !0));
  }
  return i;
}
const kv = /* @__PURE__ */ new WeakMap();
function dp(e, t, n = !1) {
  const i = n ? kv : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const r = e.props, o = {}, s = [];
  let l = !1;
  if (!Ie(e)) {
    const c = (h) => {
      l = !0;
      const [b, C] = dp(h, t, !0);
      vt(o, b), C && s.push(...C);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!r && !l)
    return Je(e) && i.set(e, Ua), Ua;
  if (Se(r))
    for (let c = 0; c < r.length; c++) {
      const h = Bt(r[c]);
      Ou(h) && (o[h] = qe);
    }
  else if (r)
    for (const c in r) {
      const h = Bt(c);
      if (Ou(h)) {
        const b = r[c], C = o[h] = Se(b) || Ie(b) ? { type: b } : vt({}, b), N = C.type;
        let S = !1, R = !0;
        if (Se(N))
          for (let L = 0; L < N.length; ++L) {
            const D = N[L], H = Ie(D) && D.name;
            if (H === "Boolean") {
              S = !0;
              break;
            } else H === "String" && (R = !1);
          }
        else
          S = Ie(N) && N.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = S, C[
          1
          /* shouldCastTrue */
        ] = R, (S || Xe(C, "default")) && s.push(h);
      }
    }
  const p = [o, s];
  return Je(e) && i.set(e, p), p;
}
function Ou(e) {
  return e[0] !== "$" && !Sr(e);
}
const jc = (e) => e === "_" || e === "_ctx" || e === "$stable", Vc = (e) => Se(e) ? e.map(Yn) : [Yn(e)], Av = (e, t, n) => {
  if (t._n)
    return t;
  const i = Me((...a) => Vc(t(...a)), n);
  return i._c = !1, i;
}, fp = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (jc(a)) continue;
    const r = e[a];
    if (Ie(r))
      t[a] = Av(a, r, i);
    else if (r != null) {
      const o = Vc(r);
      t[a] = () => o;
    }
  }
}, pp = (e, t) => {
  const n = Vc(t);
  e.slots.default = () => n;
}, hp = (e, t, n) => {
  for (const i in t)
    (n || !jc(i)) && (e[i] = t[i]);
}, xv = (e, t, n) => {
  const i = e.slots = lp();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (hp(i, t, n), n && pf(i, "_", a, !0)) : fp(t, i);
  } else t && pp(e, t);
}, Nv = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let r = !0, o = qe;
  if (i.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? r = !1 : hp(a, t, n) : (r = !t.$stable, fp(t, a)), o = t;
  } else t && (pp(e, t), o = { default: 1 });
  if (r)
    for (const s in a)
      !jc(s) && o[s] == null && delete a[s];
}, Wt = Pv;
function Ov(e) {
  return Rv(e);
}
function Rv(e, t) {
  const n = Vs();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: r,
    createElement: o,
    createText: s,
    createComment: l,
    setText: p,
    setElementText: c,
    parentNode: h,
    nextSibling: b,
    setScopeId: C = Tn,
    insertStaticContent: N
  } = e, S = (m, w, A, x = null, O = null, z = null, V = void 0, K = null, J = !!w.dynamicChildren) => {
    if (m === w)
      return;
    m && !ca(m, w) && (x = ft(m), Ce(m, O, z, !0), m = null), w.patchFlag === -2 && (J = !1, w.dynamicChildren = null);
    const { type: j, ref: be, shapeFlag: se } = w;
    switch (j) {
      case so:
        R(m, w, A, x);
        break;
      case Ot:
        L(m, w, A, x);
        break;
      case Io:
        m == null && D(w, A, x, V);
        break;
      case he:
        X(
          m,
          w,
          A,
          x,
          O,
          z,
          V,
          K,
          J
        );
        break;
      default:
        se & 1 ? ce(
          m,
          w,
          A,
          x,
          O,
          z,
          V,
          K,
          J
        ) : se & 6 ? ie(
          m,
          w,
          A,
          x,
          O,
          z,
          V,
          K,
          J
        ) : (se & 64 || se & 128) && j.process(
          m,
          w,
          A,
          x,
          O,
          z,
          V,
          K,
          J,
          kt
        );
    }
    be != null && O ? Ar(be, m && m.ref, z, w || m, !w) : be == null && m && m.ref != null && Ar(m.ref, null, z, m, !0);
  }, R = (m, w, A, x) => {
    if (m == null)
      i(
        w.el = s(w.children),
        A,
        x
      );
    else {
      const O = w.el = m.el;
      w.children !== m.children && p(O, w.children);
    }
  }, L = (m, w, A, x) => {
    m == null ? i(
      w.el = l(w.children || ""),
      A,
      x
    ) : w.el = m.el;
  }, D = (m, w, A, x) => {
    [m.el, m.anchor] = N(
      m.children,
      w,
      A,
      x,
      m.el,
      m.anchor
    );
  }, H = ({ el: m, anchor: w }, A, x) => {
    let O;
    for (; m && m !== w; )
      O = b(m), i(m, A, x), m = O;
    i(w, A, x);
  }, $ = ({ el: m, anchor: w }) => {
    let A;
    for (; m && m !== w; )
      A = b(m), a(m), m = A;
    a(w);
  }, ce = (m, w, A, x, O, z, V, K, J) => {
    if (w.type === "svg" ? V = "svg" : w.type === "math" && (V = "mathml"), m == null)
      pe(
        w,
        A,
        x,
        O,
        z,
        V,
        K,
        J
      );
    else {
      const j = m.el && m.el._isVueCE ? m.el : null;
      try {
        j && j._beginPatch(), P(
          m,
          w,
          O,
          z,
          V,
          K,
          J
        );
      } finally {
        j && j._endPatch();
      }
    }
  }, pe = (m, w, A, x, O, z, V, K) => {
    let J, j;
    const { props: be, shapeFlag: se, transition: me, dirs: Ee } = m;
    if (J = m.el = o(
      m.type,
      z,
      be && be.is,
      be
    ), se & 8 ? c(J, m.children) : se & 16 && ne(
      m.children,
      J,
      null,
      x,
      O,
      bl(m, z),
      V,
      K
    ), Ee && ea(m, null, x, "created"), te(J, m, m.scopeId, V, x), be) {
      for (const Y in be)
        Y !== "value" && !Sr(Y) && r(J, Y, null, be[Y], z, x);
      "value" in be && r(J, "value", null, be.value, z), (j = be.onVnodeBeforeMount) && Vn(j, x, m);
    }
    Ee && ea(m, null, x, "beforeMount");
    const Oe = Lv(O, me);
    Oe && me.beforeEnter(J), i(J, w, A), ((j = be && be.onVnodeMounted) || Oe || Ee) && Wt(() => {
      j && Vn(j, x, m), Oe && me.enter(J), Ee && ea(m, null, x, "mounted");
    }, O);
  }, te = (m, w, A, x, O) => {
    if (A && C(m, A), x)
      for (let z = 0; z < x.length; z++)
        C(m, x[z]);
    if (O) {
      let z = O.subTree;
      if (w === z || gp(z.type) && (z.ssContent === w || z.ssFallback === w)) {
        const V = O.vnode;
        te(
          m,
          V,
          V.scopeId,
          V.slotScopeIds,
          O.parent
        );
      }
    }
  }, ne = (m, w, A, x, O, z, V, K, J = 0) => {
    for (let j = J; j < m.length; j++) {
      const be = m[j] = K ? li(m[j]) : Yn(m[j]);
      S(
        null,
        be,
        w,
        A,
        x,
        O,
        z,
        V,
        K
      );
    }
  }, P = (m, w, A, x, O, z, V) => {
    const K = w.el = m.el;
    let { patchFlag: J, dynamicChildren: j, dirs: be } = w;
    J |= m.patchFlag & 16;
    const se = m.props || qe, me = w.props || qe;
    let Ee;
    if (A && ta(A, !1), (Ee = me.onVnodeBeforeUpdate) && Vn(Ee, A, w, m), be && ea(w, m, A, "beforeUpdate"), A && ta(A, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    j && (!m.dynamicChildren || m.dynamicChildren.length !== j.length) && (J = 0, V = !1, j = null), (se.innerHTML && me.innerHTML == null || se.textContent && me.textContent == null) && c(K, ""), j ? le(
      m.dynamicChildren,
      j,
      K,
      A,
      x,
      bl(w, O),
      z
    ) : V || Q(
      m,
      w,
      K,
      null,
      A,
      x,
      bl(w, O),
      z,
      !1
    ), J > 0) {
      if (J & 16)
        ge(K, se, me, A, O);
      else if (J & 2 && se.class !== me.class && r(K, "class", null, me.class, O), J & 4 && r(K, "style", se.style, me.style, O), J & 8) {
        const Oe = w.dynamicProps;
        for (let Y = 0; Y < Oe.length; Y++) {
          const Z = Oe[Y], ue = se[Z], ke = me[Z];
          (ke !== ue || Z === "value") && r(K, Z, ue, ke, O, A);
        }
      }
      J & 1 && m.children !== w.children && c(K, w.children);
    } else !V && j == null && ge(K, se, me, A, O);
    ((Ee = me.onVnodeUpdated) || be) && Wt(() => {
      Ee && Vn(Ee, A, w, m), be && ea(w, m, A, "updated");
    }, x);
  }, le = (m, w, A, x, O, z, V) => {
    for (let K = 0; K < w.length; K++) {
      const J = m[K], j = w[K], be = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        J.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (J.type === he || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ca(J, j) || // - In the case of a component, it could contain anything.
        J.shapeFlag & 198) ? h(J.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          A
        )
      );
      S(
        J,
        j,
        be,
        null,
        x,
        O,
        z,
        V,
        !0
      );
    }
  }, ge = (m, w, A, x, O) => {
    if (w !== A) {
      if (w !== qe)
        for (const z in w)
          !Sr(z) && !(z in A) && r(
            m,
            z,
            w[z],
            null,
            O,
            x
          );
      for (const z in A) {
        if (Sr(z)) continue;
        const V = A[z], K = w[z];
        V !== K && z !== "value" && r(m, z, K, V, O, x);
      }
      "value" in A && r(m, "value", w.value, A.value, O);
    }
  }, X = (m, w, A, x, O, z, V, K, J) => {
    const j = w.el = m ? m.el : s(""), be = w.anchor = m ? m.anchor : s("");
    let { patchFlag: se, dynamicChildren: me, slotScopeIds: Ee } = w;
    Ee && (K = K ? K.concat(Ee) : Ee), m == null ? (i(j, A, x), i(be, A, x), ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      A,
      be,
      O,
      z,
      V,
      K,
      J
    )) : se > 0 && se & 64 && me && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    m.dynamicChildren && m.dynamicChildren.length === me.length ? (le(
      m.dynamicChildren,
      me,
      A,
      O,
      z,
      V,
      K
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || O && w === O.subTree) && Kc(
      m,
      w,
      !0
      /* shallow */
    )) : Q(
      m,
      w,
      A,
      be,
      O,
      z,
      V,
      K,
      J
    );
  }, ie = (m, w, A, x, O, z, V, K, J) => {
    w.slotScopeIds = K, m == null ? w.shapeFlag & 512 ? O.ctx.activate(
      w,
      A,
      x,
      V,
      J
    ) : M(
      w,
      A,
      x,
      O,
      z,
      V,
      J
    ) : F(m, w, J);
  }, M = (m, w, A, x, O, z, V) => {
    const K = m.component = $v(
      m,
      x,
      O
    );
    if (Xs(m) && (K.ctx.renderer = kt), zv(K, !1, V), K.asyncDep) {
      if (O && O.registerDep(K, W, V), !m.el) {
        const J = K.subTree = Ae(Ot);
        L(null, J, w, A), m.placeholder = J.el;
      }
    } else
      W(
        K,
        m,
        w,
        A,
        O,
        z,
        V
      );
  }, F = (m, w, A) => {
    const x = w.component = m.component;
    if (Cv(m, w, A))
      if (x.asyncDep && !x.asyncResolved) {
        oe(x, w, A);
        return;
      } else
        x.next = w, x.update();
    else
      w.el = m.el, x.vnode = w;
  }, W = (m, w, A, x, O, z, V) => {
    const K = () => {
      if (m.isMounted) {
        let { next: se, bu: me, u: Ee, parent: Oe, vnode: Y } = m;
        {
          const Ke = mp(m);
          if (Ke) {
            se && (se.el = Y.el, oe(m, se, V)), Ke.asyncDep.then(() => {
              Wt(() => {
                m.isUnmounted || j();
              }, O);
            });
            return;
          }
        }
        let Z = se, ue;
        ta(m, !1), se ? (se.el = Y.el, oe(m, se, V)) : se = Y, me && Lo(me), (ue = se.props && se.props.onVnodeBeforeUpdate) && Vn(ue, Oe, se, Y), ta(m, !0);
        const ke = xu(m), Le = m.subTree;
        m.subTree = ke, S(
          Le,
          ke,
          // parent may have changed if it's in a teleport
          h(Le.el),
          // anchor may have changed if it's in a fragment
          ft(Le),
          m,
          O,
          z
        ), se.el = ke.el, Z === null && Ev(m, ke.el), Ee && Wt(Ee, O), (ue = se.props && se.props.onVnodeUpdated) && Wt(
          () => Vn(ue, Oe, se, Y),
          O
        );
      } else {
        let se;
        const { el: me, props: Ee } = w, { bm: Oe, m: Y, parent: Z, root: ue, type: ke } = m, Le = Ha(w);
        ta(m, !1), Oe && Lo(Oe), !Le && (se = Ee && Ee.onVnodeBeforeMount) && Vn(se, Z, w), ta(m, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            ke,
            m.parent ? m.parent.type : void 0
          );
          const Ke = m.subTree = xu(m);
          S(
            null,
            Ke,
            A,
            x,
            m,
            O,
            z
          ), w.el = Ke.el;
        }
        if (Y && Wt(Y, O), !Le && (se = Ee && Ee.onVnodeMounted)) {
          const Ke = w;
          Wt(
            () => Vn(se, Z, Ke),
            O
          );
        }
        (w.shapeFlag & 256 || Z && Ha(Z.vnode) && Z.vnode.shapeFlag & 256) && m.a && Wt(m.a, O), m.isMounted = !0, w = A = x = null;
      }
    };
    m.scope.on();
    const J = m.effect = new gf(K);
    m.scope.off();
    const j = m.update = J.run.bind(J), be = m.job = J.runIfDirty.bind(J);
    be.i = m, be.id = m.uid, J.scheduler = () => zc(be), ta(m, !0), j();
  }, oe = (m, w, A) => {
    w.component = m;
    const x = m.vnode.props;
    m.vnode = w, m.next = null, Tv(m, w.props, x, A), Nv(m, w.children, A), gi(), bu(m), bi();
  }, Q = (m, w, A, x, O, z, V, K, J = !1) => {
    const j = m && m.children, be = m ? m.shapeFlag : 0, se = w.children, { patchFlag: me, shapeFlag: Ee } = w;
    if (me > 0) {
      if (me & 128) {
        ve(
          j,
          se,
          A,
          x,
          O,
          z,
          V,
          K,
          J
        );
        return;
      } else if (me & 256) {
        de(
          j,
          se,
          A,
          x,
          O,
          z,
          V,
          K,
          J
        );
        return;
      }
    }
    Ee & 8 ? (be & 16 && Qe(j, O, z), se !== j && c(A, se)) : be & 16 ? Ee & 16 ? ve(
      j,
      se,
      A,
      x,
      O,
      z,
      V,
      K,
      J
    ) : Qe(j, O, z, !0) : (be & 8 && c(A, ""), Ee & 16 && ne(
      se,
      A,
      x,
      O,
      z,
      V,
      K,
      J
    ));
  }, de = (m, w, A, x, O, z, V, K, J) => {
    m = m || Ua, w = w || Ua;
    const j = m.length, be = w.length, se = Math.min(j, be);
    let me;
    for (me = 0; me < se; me++) {
      const Ee = w[me] = J ? li(w[me]) : Yn(w[me]);
      S(
        m[me],
        Ee,
        A,
        null,
        O,
        z,
        V,
        K,
        J
      );
    }
    j > be ? Qe(
      m,
      O,
      z,
      !0,
      !1,
      se
    ) : ne(
      w,
      A,
      x,
      O,
      z,
      V,
      K,
      J,
      se
    );
  }, ve = (m, w, A, x, O, z, V, K, J) => {
    let j = 0;
    const be = w.length;
    let se = m.length - 1, me = be - 1;
    for (; j <= se && j <= me; ) {
      const Ee = m[j], Oe = w[j] = J ? li(w[j]) : Yn(w[j]);
      if (ca(Ee, Oe))
        S(
          Ee,
          Oe,
          A,
          null,
          O,
          z,
          V,
          K,
          J
        );
      else
        break;
      j++;
    }
    for (; j <= se && j <= me; ) {
      const Ee = m[se], Oe = w[me] = J ? li(w[me]) : Yn(w[me]);
      if (ca(Ee, Oe))
        S(
          Ee,
          Oe,
          A,
          null,
          O,
          z,
          V,
          K,
          J
        );
      else
        break;
      se--, me--;
    }
    if (j > se) {
      if (j <= me) {
        const Ee = me + 1, Oe = Ee < be ? w[Ee].el : x;
        for (; j <= me; )
          S(
            null,
            w[j] = J ? li(w[j]) : Yn(w[j]),
            A,
            Oe,
            O,
            z,
            V,
            K,
            J
          ), j++;
      }
    } else if (j > me)
      for (; j <= se; )
        Ce(m[j], O, z, !0), j++;
    else {
      const Ee = j, Oe = j, Y = /* @__PURE__ */ new Map();
      for (j = Oe; j <= me; j++) {
        const at = w[j] = J ? li(w[j]) : Yn(w[j]);
        at.key != null && Y.set(at.key, j);
      }
      let Z, ue = 0;
      const ke = me - Oe + 1;
      let Le = !1, Ke = 0;
      const Ue = new Array(ke);
      for (j = 0; j < ke; j++) Ue[j] = 0;
      for (j = Ee; j <= se; j++) {
        const at = m[j];
        if (ue >= ke) {
          Ce(at, O, z, !0);
          continue;
        }
        let ut;
        if (at.key != null)
          ut = Y.get(at.key);
        else
          for (Z = Oe; Z <= me; Z++)
            if (Ue[Z - Oe] === 0 && ca(at, w[Z])) {
              ut = Z;
              break;
            }
        ut === void 0 ? Ce(at, O, z, !0) : (Ue[ut - Oe] = j + 1, ut >= Ke ? Ke = ut : Le = !0, S(
          at,
          w[ut],
          A,
          null,
          O,
          z,
          V,
          K,
          J
        ), ue++);
      }
      const dt = Le ? Iv(Ue) : Ua;
      for (Z = dt.length - 1, j = ke - 1; j >= 0; j--) {
        const at = Oe + j, ut = w[at], Xt = w[at + 1], zn = at + 1 < be ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Xt.el || vp(Xt)
        ) : x;
        Ue[j] === 0 ? S(
          null,
          ut,
          A,
          zn,
          O,
          z,
          V,
          K,
          J
        ) : Le && (Z < 0 || j !== dt[Z] ? we(ut, A, zn, 2) : Z--);
      }
    }
  }, we = (m, w, A, x, O = null) => {
    const { el: z, type: V, transition: K, children: J, shapeFlag: j } = m;
    if (j & 6) {
      we(m.component.subTree, w, A, x);
      return;
    }
    if (j & 128) {
      m.suspense.move(w, A, x);
      return;
    }
    if (j & 64) {
      V.move(m, w, A, kt);
      return;
    }
    if (V === he) {
      i(z, w, A);
      for (let se = 0; se < J.length; se++)
        we(J[se], w, A, x);
      i(m.anchor, w, A);
      return;
    }
    if (V === Io) {
      H(m, w, A);
      return;
    }
    if (x !== 2 && j & 1 && K)
      if (x === 0)
        K.persisted && !z[En] ? i(z, w, A) : (K.beforeEnter(z), i(z, w, A), Wt(() => K.enter(z), O));
      else {
        const { leave: se, delayLeave: me, afterLeave: Ee } = K, Oe = () => {
          m.ctx.isUnmounted ? a(z) : i(z, w, A);
        }, Y = () => {
          const Z = z._isLeaving || !!z[En];
          z._isLeaving && z[En](
            !0
            /* cancelled */
          ), K.persisted && !Z ? Oe() : se(z, () => {
            Oe(), Ee && Ee();
          });
        };
        me ? me(z, Oe, Y) : Y();
      }
    else
      i(z, w, A);
  }, Ce = (m, w, A, x = !1, O = !1) => {
    const {
      type: z,
      props: V,
      ref: K,
      children: J,
      dynamicChildren: j,
      shapeFlag: be,
      patchFlag: se,
      dirs: me,
      cacheIndex: Ee,
      memo: Oe
    } = m;
    if (se === -2 && (O = !1), K != null && (gi(), Ar(K, null, A, m, !0), bi()), Ee != null && (w.renderCache[Ee] = void 0), be & 256) {
      w.ctx.deactivate(m);
      return;
    }
    const Y = be & 1 && me, Z = !Ha(m);
    let ue;
    if (Z && (ue = V && V.onVnodeBeforeUnmount) && Vn(ue, w, m), be & 6)
      tt(m.component, A, x);
    else {
      if (be & 128) {
        m.suspense.unmount(A, x);
        return;
      }
      Y && ea(m, null, w, "beforeUnmount"), be & 64 ? m.type.remove(
        m,
        w,
        A,
        kt,
        x
      ) : j && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !j.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== he || se > 0 && se & 64) ? Qe(
        j,
        w,
        A,
        !1,
        !0
      ) : (z === he && se & 384 || !O && be & 16) && Qe(J, w, A), x && Ve(m);
    }
    const ke = Oe != null && Ee == null;
    (Z && (ue = V && V.onVnodeUnmounted) || Y || ke) && Wt(() => {
      ue && Vn(ue, w, m), Y && ea(m, null, w, "unmounted"), ke && (m.el = null);
    }, A);
  }, Ve = (m) => {
    const { type: w, el: A, anchor: x, transition: O } = m;
    if (w === he) {
      Te(A, x);
      return;
    }
    if (w === Io) {
      $(m);
      return;
    }
    const z = () => {
      a(A), O && !O.persisted && O.afterLeave && O.afterLeave();
    };
    if (m.shapeFlag & 1 && O && !O.persisted) {
      const { leave: V, delayLeave: K } = O, J = () => V(A, z);
      K ? K(m.el, z, J) : J();
    } else
      z();
  }, Te = (m, w) => {
    let A;
    for (; m !== w; )
      A = b(m), a(m), m = A;
    a(w);
  }, tt = (m, w, A) => {
    const { bum: x, scope: O, job: z, subTree: V, um: K, m: J, a: j } = m;
    Ru(J), Ru(j), x && Lo(x), O.stop(), z && (z.flags |= 8, Ce(V, m, w, A)), K && Wt(K, w), Wt(() => {
      m.isUnmounted = !0;
    }, w);
  }, Qe = (m, w, A, x = !1, O = !1, z = 0) => {
    for (let V = z; V < m.length; V++)
      Ce(m[V], w, A, x, O);
  }, ft = (m) => {
    if (m.shapeFlag & 6)
      return ft(m.component.subTree);
    if (m.shapeFlag & 128)
      return m.suspense.next();
    const w = b(m.anchor || m.el), A = w && w[Uf];
    return A ? b(A) : w;
  };
  let bt = !1;
  const nt = (m, w, A) => {
    let x;
    m == null ? w._vnode && (Ce(w._vnode, null, null, !0), x = w._vnode.component) : S(
      w._vnode || null,
      m,
      w,
      null,
      null,
      null,
      A
    ), w._vnode = m, bt || (bt = !0, bu(x), Ff(), bt = !1);
  }, kt = {
    p: S,
    um: Ce,
    m: we,
    r: Ve,
    mt: M,
    mc: ne,
    pc: Q,
    pbc: le,
    n: ft,
    o: e
  };
  return {
    render: nt,
    hydrate: void 0,
    createApp: gv(nt)
  };
}
function bl({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ta({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Lv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Kc(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Se(i) && Se(a))
    for (let r = 0; r < i.length; r++) {
      const o = i[r];
      let s = a[r];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = a[r] = li(a[r]), s.el = o.el), !n && s.patchFlag !== -2 && Kc(o, s)), s.type === so && (s.patchFlag === -1 && (s = a[r] = li(s)), s.el = o.el), s.type === Ot && !s.el && (s.el = o.el);
    }
}
function Iv(e) {
  const t = e.slice(), n = [0];
  let i, a, r, o, s;
  const l = e.length;
  for (i = 0; i < l; i++) {
    const p = e[i];
    if (p !== 0) {
      if (a = n[n.length - 1], e[a] < p) {
        t[i] = a, n.push(i);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        s = r + o >> 1, e[n[s]] < p ? r = s + 1 : o = s;
      p < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), n[r] = i);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function mp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : mp(t);
}
function Ru(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function vp(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? vp(t.subTree) : null;
}
const gp = (e) => e.__isSuspense;
function Pv(e, t) {
  t && t.pendingBranch ? Se(e) ? t.effects.push(...e) : t.effects.push(e) : Df(e);
}
const he = /* @__PURE__ */ Symbol.for("v-fgt"), so = /* @__PURE__ */ Symbol.for("v-txt"), Ot = /* @__PURE__ */ Symbol.for("v-cmt"), Io = /* @__PURE__ */ Symbol.for("v-stc"), mi = [];
let mn = null;
function y(e = !1) {
  mi.push(mn = e ? null : []);
}
function Gc() {
  mi.pop(), mn = mi[mi.length - 1] || null;
}
let Kr = 1;
function qo(e, t = !1) {
  Kr += e, e < 0 && mn && t && (mn.hasOnce = !0);
}
function bp(e) {
  return e.dynamicChildren = Kr > 0 ? mn || Ua : null, Gc(), Kr > 0 && mn && mn.push(e), e;
}
function E(e, t, n, i, a, r) {
  return bp(
    u(
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
  return bp(
    Ae(
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
function ca(e, t) {
  return e.type === t.type && e.key === t.key;
}
const yp = ({ key: e }) => e ?? null, Po = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ct(e) || /* @__PURE__ */ Ht(e) || Ie(e) ? { i: Rt, r: e, k: t, f: !!n } : e : null);
function u(e, t = null, n = null, i = 0, a = null, r = e === he ? 0 : 1, o = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && yp(t),
    ref: t && Po(t),
    scopeId: Ws,
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
  return s ? (Wo(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= ct(n) ? 8 : 16), Kr > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  mn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && mn.push(l), l;
}
const Ae = Mv;
function Mv(e, t = null, n = null, i = 0, a = null, r = !1) {
  if ((!e || e === Xf) && (e = Ot), Gr(e)) {
    const s = Hi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Wo(s, n), Kr > 0 && !r && mn && (s.shapeFlag & 6 ? mn[mn.indexOf(e)] = s : mn.push(s)), s.patchFlag = -2, s;
  }
  if (jv(e) && (e = e.__vccOpts), t) {
    t = qr(t);
    let { class: s, style: l } = t;
    s && !ct(s) && (t.class = Re(s)), Je(l) && (/* @__PURE__ */ $c(l) && !Se(l) && (l = vt({}, l)), t.style = kn(l));
  }
  const o = ct(e) ? 1 : gp(e) ? 128 : Zs(e) ? 64 : Je(e) ? 4 : Ie(e) ? 2 : 0;
  return u(
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
function qr(e) {
  return e ? /* @__PURE__ */ $c(e) || cp(e) ? vt({}, e) : e : null;
}
function Hi(e, t, n = !1, i = !1) {
  const { props: a, ref: r, patchFlag: o, children: s, transition: l } = e, p = t ? jt(a || {}, t) : a, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && yp(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? Se(r) ? r.concat(Po(t)) : [r, Po(t)] : Po(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== he ? o === -1 ? 16 : o | 16 : o,
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
  return l && i && Vr(
    c,
    l.clone(c)
  ), c;
}
function Pe(e = " ", t = 0) {
  return Ae(so, null, e, t);
}
function B(e = "", t = !1) {
  return t ? (y(), Be(Ot, null, e)) : Ae(Ot, null, e);
}
function Yn(e) {
  return e == null || typeof e == "boolean" ? Ae(Ot) : Se(e) ? Ae(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Gr(e) ? li(e) : Ae(so, null, String(e));
}
function li(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Hi(e);
}
function Wo(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Se(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Wo(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !cp(t) ? t._ctx = Rt : a === 3 && Rt && (Rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (Ie(t)) {
    if (i & 65) {
      Wo(e, { default: t });
      return;
    }
    t = { default: t, _ctx: Rt }, n = 32;
  } else
    t = String(t), i & 64 ? (n = 16, t = [Pe(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function jt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = Re([t.class, i.class]));
      else if (a === "style")
        t.style = kn([t.style, i.style]);
      else if (zs(a)) {
        const r = t[a], o = i[a];
        o && r !== o && !(Se(r) && r.includes(o)) ? t[a] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Us(a) && (t[a] = o);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function Vn(e, t, n, i = null) {
  xn(e, t, 7, [
    n,
    i
  ]);
}
const Dv = np();
let Fv = 0;
function $v(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Dv, r = {
    uid: Fv++,
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
    scope: new om(
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
    propsOptions: dp(i, a),
    emitsOptions: rp(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: qe,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: qe,
    data: qe,
    props: qe,
    attrs: qe,
    slots: qe,
    refs: qe,
    setupState: qe,
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = bv.bind(null, r), e.ce && e.ce(r), r;
}
let Ut = null;
const _a = () => Ut || Rt;
let Yo, Wr;
{
  const e = Vs(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (r) => {
      a.length > 1 ? a.forEach((o) => o(r)) : a[0](r);
    };
  };
  Yo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ut = n
  ), Wr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yr = n
  );
}
const lo = (e) => {
  const t = Ut;
  return Yo(e), e.scope.on(), () => {
    e.scope.off(), Yo(t);
  };
}, Lu = () => {
  Ut && Ut.scope.off(), Yo(null);
};
function _p(e) {
  return e.vnode.shapeFlag & 4;
}
let Yr = !1;
function zv(e, t = !1, n = !1) {
  t && Wr(t);
  const { props: i, children: a } = e.vnode, r = _p(e);
  Sv(e, i, r, t), xv(e, a, n || t);
  const o = r ? Uv(e, t) : void 0;
  return t && Wr(!1), o;
}
function Uv(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, sv);
  const { setup: i } = n;
  if (i) {
    gi();
    const a = e.setupContext = i.length > 1 ? Cp(e) : null, r = lo(e), o = ro(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), s = uf(o);
    if (bi(), r(), (s || e.sp) && !Ha(e) && qf(e), s) {
      if (o.then(Lu, Lu), t)
        return o.then((l) => {
          Wr(!0);
          try {
            Iu(e, l, t);
          } finally {
            Wr(!1);
          }
        }).catch((l) => {
          qs(l, e, 0);
        });
      e.asyncDep = o;
    } else
      Iu(e, o);
  } else
    wp(e);
}
function Iu(e, t, n) {
  Ie(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Je(t) && (e.setupState = If(t)), wp(e);
}
function wp(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Tn);
  {
    const a = lo(e);
    gi();
    try {
      dv(e);
    } finally {
      bi(), a();
    }
  }
}
const Bv = {
  get(e, t) {
    return $t(e, "get", ""), e[t];
  }
};
function Cp(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Bv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function el(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(If(km(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in xr)
        return xr[n](e);
    },
    has(t, n) {
      return n in t || n in xr;
    }
  })) : e.proxy;
}
function Hv(e, t = !0) {
  return Ie(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function jv(e) {
  return Ie(e) && "__vccOpts" in e;
}
const q = (e, t) => /* @__PURE__ */ Lm(e, t, Yr);
function en(e, t, n) {
  try {
    qo(-1);
    const i = arguments.length;
    return i === 2 ? Je(t) && !Se(t) ? Gr(t) ? Ae(e, null, [t]) : Ae(e, t) : Ae(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Gr(n) && (n = [n]), Ae(e, t, n));
  } finally {
    qo(1);
  }
}
const Vv = "3.5.42", Kv = Tn;
let lc;
const Pu = typeof window < "u" && window.trustedTypes;
if (Pu)
  try {
    lc = /* @__PURE__ */ Pu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ep = lc ? (e) => lc.createHTML(e) : (e) => e, Gv = "http://www.w3.org/2000/svg", qv = "http://www.w3.org/1998/Math/MathML", si = typeof document < "u" ? document : null, Mu = si && /* @__PURE__ */ si.createElement("template"), Wv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? si.createElementNS(Gv, e) : t === "mathml" ? si.createElementNS(qv, e) : n ? si.createElement(e, { is: n }) : si.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => si.createTextNode(e),
  createComment: (e) => si.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => si.querySelector(e),
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
      Mu.innerHTML = Ep(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const s = Mu.content;
      if (i === "svg" || i === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ni = "transition", cr = "animation", Zr = /* @__PURE__ */ Symbol("_vtc"), Sp = {
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
}, Yv = /* @__PURE__ */ vt(
  {},
  Hf,
  Sp
), Zv = (e) => (e.displayName = "Transition", e.props = Yv, e), Xv = /* @__PURE__ */ Zv(
  (e, { slots: t }) => en(Zm, Jv(e), t)
), na = (e, t = []) => {
  Se(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Du = (e) => e ? Se(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Jv(e) {
  const t = {};
  for (const X in e)
    X in Sp || (t[X] = e[X]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: i,
    duration: a,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: s = `${n}-enter-to`,
    appearFromClass: l = r,
    appearActiveClass: p = o,
    appearToClass: c = s,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: b = `${n}-leave-active`,
    leaveToClass: C = `${n}-leave-to`
  } = e, N = Qv(a), S = N && N[0], R = N && N[1], {
    onBeforeEnter: L,
    onEnter: D,
    onEnterCancelled: H,
    onLeave: $,
    onLeaveCancelled: ce,
    onBeforeAppear: pe = L,
    onAppear: te = D,
    onAppearCancelled: ne = H
  } = t, P = (X, ie, M, F) => {
    X._enterCancelled = F, ia(X, ie ? c : s), ia(X, ie ? p : o), M && M();
  }, le = (X, ie) => {
    X._isLeaving = !1, ia(X, h), ia(X, C), ia(X, b), ie && ie();
  }, ge = (X) => (ie, M) => {
    const F = X ? te : D, W = () => P(ie, X, M);
    na(F, [ie, W]), Fu(() => {
      ia(ie, X ? l : r), ii(ie, X ? c : s), Du(F) || $u(ie, i, S, W);
    });
  };
  return vt(t, {
    onBeforeEnter(X) {
      na(L, [X]), ii(X, r), ii(X, o);
    },
    onBeforeAppear(X) {
      na(pe, [X]), ii(X, l), ii(X, p);
    },
    onEnter: ge(!1),
    onAppear: ge(!0),
    onLeave(X, ie) {
      X._isLeaving = !0;
      const M = () => le(X, ie);
      ii(X, h), X._enterCancelled ? (ii(X, b), Bu(X)) : (Bu(X), ii(X, b)), Fu(() => {
        X._isLeaving && (ia(X, h), ii(X, C), Du($) || $u(X, i, R, M));
      }), na($, [X, M]);
    },
    onEnterCancelled(X) {
      P(X, !1, void 0, !0), na(H, [X]);
    },
    onAppearCancelled(X) {
      P(X, !0, void 0, !0), na(ne, [X]);
    },
    onLeaveCancelled(X) {
      le(X), na(ce, [X]);
    }
  });
}
function Qv(e) {
  if (e == null)
    return null;
  if (Je(e))
    return [yl(e.enter), yl(e.leave)];
  {
    const t = yl(e);
    return [t, t];
  }
}
function yl(e) {
  return Zh(e);
}
function ii(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Zr] || (e[Zr] = /* @__PURE__ */ new Set())).add(t);
}
function ia(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.remove(i));
  const n = e[Zr];
  n && (n.delete(t), n.size || (e[Zr] = void 0));
}
function Fu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let eg = 0;
function $u(e, t, n, i) {
  const a = e._endId = ++eg, r = () => {
    a === e._endId && i();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: s, propCount: l } = tg(e, t);
  if (!o)
    return i();
  const p = o + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(p, b), r();
  }, b = (C) => {
    C.target === e && ++c >= l && h();
  };
  setTimeout(() => {
    c < l && h();
  }, s + 1), e.addEventListener(p, b);
}
function tg(e, t) {
  const n = window.getComputedStyle(e), i = (N) => (n[N] || "").split(", "), a = i(`${Ni}Delay`), r = i(`${Ni}Duration`), o = zu(a, r), s = i(`${cr}Delay`), l = i(`${cr}Duration`), p = zu(s, l);
  let c = null, h = 0, b = 0;
  t === Ni ? o > 0 && (c = Ni, h = o, b = r.length) : t === cr ? p > 0 && (c = cr, h = p, b = l.length) : (h = Math.max(o, p), c = h > 0 ? o > p ? Ni : cr : null, b = c ? c === Ni ? r.length : l.length : 0);
  const C = c === Ni && /\b(?:transform|all)(?:,|$)/.test(
    i(`${Ni}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: b,
    hasTransform: C
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
function ng(e, t, n) {
  const i = e[Zr];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zo = /* @__PURE__ */ Symbol("_vod"), Tp = /* @__PURE__ */ Symbol("_vsh"), Va = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Zo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ur(e, t);
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
  e.style.display = t ? e[Zo] : "none", e[Tp] = !t;
}
const kp = /* @__PURE__ */ Symbol("");
function ig(e) {
  const t = _a();
  if (!t)
    return;
  const n = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => Xo(r, a));
  }, i = () => {
    const a = e(t.proxy);
    t.ce ? Xo(t.ce, a) : cc(t.subTree, a), n(a);
  };
  Zf(() => {
    Df(i);
  }), Vi(() => {
    an(i, Tn, { flush: "post" });
    const a = new MutationObserver(i);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), oo(() => a.disconnect());
  });
}
function cc(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      cc(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Xo(e.el, t);
  else if (e.type === he)
    e.children.forEach((n) => cc(n, t));
  else if (e.type === Io) {
    let { el: n, anchor: i } = e;
    for (; n && (Xo(n, t), n !== i); )
      n = n.nextSibling;
  }
}
function Xo(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let i = "";
    for (const a in t) {
      const r = rm(t[a]);
      n.setProperty(`--${a}`, r), i += `--${a}: ${r};`;
    }
    n[kp] = i;
  }
}
const ag = /(?:^|;)\s*display\s*:/;
function rg(e, t, n) {
  const i = e.style, a = ct(n);
  let r = !1;
  if (n && !a) {
    if (t)
      if (ct(t))
        for (const o of t.split(";")) {
          const s = o.slice(0, o.indexOf(":")).trim();
          n[s] == null && _r(i, s, "");
        }
      else
        for (const o in t)
          n[o] == null && _r(i, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const s = n[o];
      s != null ? sg(
        e,
        o,
        !ct(t) && t ? t[o] : void 0,
        s
      ) || _r(i, o, s) : _r(i, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = i[kp];
      o && (n += ";" + o), i.cssText = n, r = ag.test(n);
    }
  } else t && e.removeAttribute("style");
  Zo in e && (e[Zo] = r ? i.display : "", e[Tp] && (i.display = "none"));
}
const Co = /\s*!important$/;
function _r(e, t, n) {
  if (Se(n))
    n.forEach((i) => _r(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    Co.test(n) ? e.setProperty(t, n.replace(Co, ""), "important") : e.setProperty(t, n);
  else {
    const i = og(e, t);
    Co.test(n) ? e.setProperty(
      wi(i),
      n.replace(Co, ""),
      "important"
    ) : e[i] = n;
  }
}
const Hu = ["Webkit", "Moz", "ms"], _l = {};
function og(e, t) {
  const n = _l[t];
  if (n)
    return n;
  let i = Bt(t);
  if (i !== "filter" && i in e)
    return _l[t] = i;
  i = Hs(i);
  for (let a = 0; a < Hu.length; a++) {
    const r = Hu[a] + i;
    if (r in e)
      return _l[t] = r;
  }
  return t;
}
function sg(e, t, n, i) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && ct(i) && n === i;
}
const ju = "http://www.w3.org/1999/xlink";
function Vu(e, t, n, i, a, r = nm(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ju, t.slice(6, t.length)) : e.setAttributeNS(ju, t, n) : n == null || r && !hf(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Fn(n) ? String(n) : n
  );
}
function Ku(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ep(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const s = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (s !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean" ? n = hf(n) : n == null && s === "string" ? (n = "", o = !0) : s === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function ua(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function lg(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Gu = /* @__PURE__ */ Symbol("_vei");
function cg(e, t, n, i, a = null) {
  const r = e[Gu] || (e[Gu] = {}), o = r[t];
  if (i && o)
    o.value = i;
  else {
    const [s, l] = fg(t);
    if (i) {
      const p = r[t] = mg(
        i,
        a
      );
      ua(e, s, p, l);
    } else o && (lg(e, s, o, l), r[t] = void 0);
  }
}
const ug = /(Once|Passive|Capture)$/, dg = /^on:?(?:Once|Passive|Capture)$/;
function fg(e) {
  let t, n;
  for (; (n = e.match(ug)) && !dg.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : wi(e.slice(2)), t];
}
let wl = 0;
const pg = /* @__PURE__ */ Promise.resolve(), hg = () => wl || (pg.then(() => wl = 0), wl = Date.now());
function mg(e, t) {
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
      const o = a.slice(), s = [i];
      for (let l = 0; l < o.length && !i._stopped; l++) {
        const p = o[l];
        p && xn(
          p,
          t,
          5,
          s
        );
      }
    } else
      xn(
        a,
        t,
        5,
        [i]
      );
  };
  return n.value = e, n.attached = hg(), n;
}
const qu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, vg = (e, t, n, i, a, r) => {
  const o = a === "svg";
  t === "class" ? ng(e, i, o) : t === "style" ? rg(e, n, i) : zs(t) ? Us(t) || cg(e, t, n, i, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : gg(e, t, i, o)) ? (Ku(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Vu(e, t, i, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (bg(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ct(i))) ? Ku(e, Bt(t), i, r, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Vu(e, t, i, o));
};
function gg(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && qu(t) && Ie(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return qu(t) && ct(n) ? !1 : t in e;
}
function bg(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = Bt(t);
  return Array.isArray(n) ? n.some((a) => Bt(a) === i) : Object.keys(n).some((a) => Bt(a) === i);
}
const Jo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Se(t) ? (n) => Lo(t, n) : t;
};
function yg(e) {
  e.target.composing = !0;
}
function Wu(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const fa = /* @__PURE__ */ Symbol("_assign"), Eo = /* @__PURE__ */ Symbol("_initialValue");
function Cl(e, t, n) {
  return t && (e = e.trim()), n && (e = js(e)), e;
}
const Mo = {
  created(e, { modifiers: { lazy: t, trim: n, number: i } }, a) {
    e.parentNode && (e.type === "text" ? e[Eo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Eo] = e.defaultValue.replace(/\r\n?/g, `
`))), e[fa] = Jo(a);
    const r = i || a.props && a.props.type === "number";
    ua(e, t ? "change" : "input", (o) => {
      o.target.composing || e[fa](Cl(e.value, n, r));
    }), (n || r) && ua(e, "change", () => {
      e.value = Cl(e.value, n, r);
    }), t || (ua(e, "compositionstart", yg), ua(e, "compositionend", Wu), ua(e, "change", Wu));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: i } }) {
    const a = t ?? "", r = e[Eo];
    delete e[Eo], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[fa](Cl(e.value, n, i)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: i, trim: a, number: r } }, o) {
    if (e[fa] = Jo(o), e.composing) return;
    const s = (r || e.type === "number") && !/^0\d/.test(e.value) ? js(e.value) : e.value, l = t ?? "";
    if (s === l)
      return;
    const p = e.getRootNode();
    (p instanceof Document || p instanceof ShadowRoot) && p.activeElement === e && e.type !== "range" && (i && t === n || a && e.value.trim() === l) || (e.value = l);
  }
}, dn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, i) {
    e._modelValue = t, ua(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (l) => l.selected).map(
        (l) => n ? js(Qo(l)) : Qo(l)
      ), r = e.multiple, o = r ? ba(e._modelValue) ? new Set(a) : a : a[0], s = e._pendingValue = [
        r,
        r ? Se(o) ? a.slice() : a : o
      ];
      try {
        e[fa](o);
      } finally {
        hi(() => {
          e._pendingValue === s && (e._pendingValue = void 0);
        });
      }
    }), e[fa] = Jo(i);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Yu(e, t);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[fa] = Jo(n);
  },
  updated(e, { value: t }) {
    const n = e._pendingValue;
    e._pendingValue = void 0, (!n || n[0] !== e.multiple || !_g(t, n[1], n[0])) && Yu(e, t);
  }
};
function _g(e, t, n) {
  if (!n || Se(e)) return Bi(e, t);
  if (ba(e)) {
    if (e.size !== t.length) return !1;
    for (const i of t)
      if (!e.has(i)) return !1;
    return !0;
  }
  return !1;
}
function Yu(e, t) {
  const n = e.multiple, i = Se(t);
  if (!(n && !i && !ba(t))) {
    for (let a = 0, r = e.options.length; a < r; a++) {
      const o = e.options[a], s = Qo(o);
      if (n)
        if (i) {
          const l = typeof s;
          l === "string" || l === "number" ? o.selected = t.some((p) => String(p) === String(s)) : o.selected = am(t, s) > -1;
        } else
          o.selected = t.has(s);
      else if (Bi(Qo(o), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Qo(e) {
  return "_value" in e ? e._value : e.value;
}
const wg = ["ctrl", "shift", "alt", "meta"], Cg = {
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
  exact: (e, t) => wg.some((n) => e[`${n}Key`] && !t.includes(n))
}, lt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const s = Cg[t[o]];
      if (s && s(a, t)) return;
    }
    return e(a, ...r);
  }));
}, Eg = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, nn = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), i = t.join(".");
  return n[i] || (n[i] = ((a) => {
    if (!("key" in a))
      return;
    const r = wi(a.key);
    if (t.some(
      (o) => o === r || Eg[o] === r
    ))
      return e(a);
  }));
}, Sg = /* @__PURE__ */ vt({ patchProp: vg }, Wv);
let Zu;
function Tg() {
  return Zu || (Zu = Ov(Sg));
}
const kg = ((...e) => {
  const t = Tg().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = xg(i);
    if (!a) return;
    const r = t._component;
    !Ie(r) && !r.render && !r.template && (r.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, Ag(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
});
function Ag(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function xg(e) {
  return ct(e) ? document.querySelector(e) : e;
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
function Xu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Ng(e) {
  if (Array.isArray(e)) return e;
}
function Og(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var i, a, r, o, s = [], l = !0, p = !1;
    try {
      if (r = (n = n.call(e)).next, t !== 0) for (; !(l = (i = r.call(n)).done) && (s.push(i.value), s.length !== t); l = !0) ;
    } catch (c) {
      p = !0, a = c;
    } finally {
      try {
        if (!l && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (p) throw a;
      }
    }
    return s;
  }
}
function Rg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lg(e, t) {
  return Ng(e) || Og(e, t) || Ig(e, t) || Rg();
}
function Ig(e, t) {
  if (e) {
    if (typeof e == "string") return Xu(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xu(e, t) : void 0;
  }
}
const Ap = Object.entries, Ju = Object.setPrototypeOf, Pg = Object.isFrozen, Mg = Object.getPrototypeOf, Dg = Object.getOwnPropertyDescriptor;
let Et = Object.freeze, Tt = Object.seal, $a = Object.create, xp = typeof Reflect < "u" && Reflect, uc = xp.apply, dc = xp.construct;
Et || (Et = function(t) {
  return t;
});
Tt || (Tt = function(t) {
  return t;
});
uc || (uc = function(t, n) {
  for (var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++)
    a[r - 2] = arguments[r];
  return t.apply(n, a);
});
dc || (dc = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return new t(...i);
});
const sa = gt(Array.prototype.forEach), Fg = gt(Array.prototype.lastIndexOf), Qu = gt(Array.prototype.pop), dr = gt(Array.prototype.push), $g = gt(Array.prototype.splice), Ka = Array.isArray, wr = gt(String.prototype.toLowerCase), El = gt(String.prototype.toString), ed = gt(String.prototype.match), fr = gt(String.prototype.replace), td = gt(String.prototype.indexOf), zg = gt(String.prototype.trim), Ug = gt(Number.prototype.toString), Bg = gt(Boolean.prototype.toString), nd = typeof BigInt > "u" ? null : gt(BigInt.prototype.toString), id = typeof Symbol > "u" ? null : gt(Symbol.prototype.toString), tn = gt(Object.prototype.hasOwnProperty), pr = gt(Object.prototype.toString), Dt = gt(RegExp.prototype.test), aa = Hg(TypeError);
function gt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      i[a - 1] = arguments[a];
    return uc(e, t, i);
  };
}
function Hg(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return dc(e, n);
  };
}
function Ge(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wr;
  if (Ju && Ju(e, null), !Ka(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let a = t[i];
    if (typeof a == "string") {
      const r = n(a);
      r !== a && (Pg(t) || (t[i] = r), a = r);
    }
    e[a] = !0;
  }
  return e;
}
function jg(e) {
  for (let t = 0; t < e.length; t++)
    tn(e, t) || (e[t] = null);
  return e;
}
function pn(e) {
  const t = $a(null);
  for (const i of Ap(e)) {
    var n = Lg(i, 2);
    const a = n[0], r = n[1];
    tn(e, a) && (Ka(r) ? t[a] = jg(r) : r && typeof r == "object" && r.constructor === Object ? t[a] = pn(r) : t[a] = r);
  }
  return t;
}
function Vg(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return Ug(e);
    case "boolean":
      return Bg(e);
    case "bigint":
      return nd ? nd(e) : "0";
    case "symbol":
      return id ? id(e) : "Symbol()";
    case "undefined":
      return pr(e);
    case "function":
    case "object": {
      if (e === null)
        return pr(e);
      const t = e, n = In(t, "toString");
      if (typeof n == "function") {
        const i = n(t);
        return typeof i == "string" ? i : pr(i);
      }
      return pr(e);
    }
    default:
      return pr(e);
  }
}
function In(e, t) {
  for (; e !== null; ) {
    const i = Dg(e, t);
    if (i) {
      if (i.get)
        return gt(i.get);
      if (typeof i.value == "function")
        return gt(i.value);
    }
    e = Mg(e);
  }
  function n() {
    return null;
  }
  return n;
}
function Kg(e) {
  try {
    return Dt(e, ""), !0;
  } catch {
    return !1;
  }
}
const ad = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Sl = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Tl = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Gg = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), kl = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), qg = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), rd = Et(["#text"]), od = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Al = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), sd = Et(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), So = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Wg = Tt(/{{[\w\W]*|^[\w\W]*}}/g), Yg = Tt(/<%[\w\W]*|^[\w\W]*%>/g), Zg = Tt(/\${[\w\W]*/g), Xg = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Jg = Tt(/^aria-[\-\w]+$/), ld = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Qg = Tt(/^(?:\w+script|data):/i), eb = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), tb = Tt(/^html$/i), nb = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), cd = Tt(/<[/\w!]/g), ud = Tt(/<[/\w]/g), ib = Tt(/<\/no(script|embed|frames)/i), ab = Tt(/\/>/i), fn = {
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
}, Np = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], rb = Et(Ge({}, Np)), ob = (function() {
  const e = {};
  return sa(Np, (t) => {
    e[t] = Tt(new RegExp("</" + t + "(?=[\\t\\n\\f\\r />])", "i"));
  }), Et(e);
})(), sb = function() {
  return typeof window > "u" ? null : window;
}, lb = function(t, n) {
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
}, Oi = function(t, n, i, a) {
  return tn(t, n) && Ka(t[n]) ? Ge(a.base ? pn(a.base) : {}, t[n], a.transform) : i;
}, xl = function(t, n, i) {
  const a = tn(t, n) ? t[n] : void 0;
  return a && typeof a == "object" ? pn(a) : i();
};
function Op() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : sb();
  const t = (ee) => Op(ee);
  if (t.version = "3.4.14", t.removed = [], !e || !e.document || e.document.nodeType !== fn.document || !e.Element)
    return t.isSupported = !1, t;
  let n = e.document;
  const i = n, a = i.currentScript;
  e.DocumentFragment;
  const r = e.HTMLTemplateElement, o = e.Node, s = e.Element, l = e.NodeFilter, p = e.NamedNodeMap;
  p === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const c = e.DOMParser, h = e.trustedTypes, b = s.prototype, C = In(b, "cloneNode"), N = In(b, "remove"), S = In(b, "nextSibling"), R = In(b, "childNodes"), L = In(b, "parentNode"), D = In(b, "shadowRoot"), H = In(b, "attributes"), $ = o && o.prototype ? In(o.prototype, "nodeType") : null, ce = o && o.prototype ? In(o.prototype, "nodeName") : null, pe = o && o.prototype ? In(o.prototype, "ownerDocument") : null, te = function(_) {
    return $ ? $(_) : _.nodeType;
  }, ne = function(_) {
    return ce ? ce(_) : _.nodeName;
  };
  if (typeof r == "function") {
    const ee = n.createElement("template");
    ee.content && ee.content.ownerDocument && (n = ee.content.ownerDocument);
  }
  let P, le = "", ge, X = !1, ie = 0;
  const M = function() {
    if (ie > 0)
      throw aa('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, F = function(_) {
    M(), ie++;
    try {
      return P.createHTML(_);
    } finally {
      ie--;
    }
  }, W = function(_) {
    M(), ie++;
    try {
      return P.createScriptURL(_);
    } finally {
      ie--;
    }
  }, oe = function() {
    return X || (ge = lb(h, a), X = !0), ge;
  }, Q = n, de = Q.implementation, ve = Q.createNodeIterator, we = Q.createDocumentFragment, Ce = Q.getElementsByTagName, Ve = i.importNode;
  let Te = dd();
  t.isSupported = typeof Ap == "function" && typeof L == "function" && de && de.createHTMLDocument !== void 0;
  const tt = Wg, Qe = Yg, ft = Zg, bt = Xg, nt = Jg, kt = Qg, U = eb, m = nb;
  let w = ld, A = null;
  const x = Ge({}, [...ad, ...Sl, ...Tl, ...kl, ...rd]);
  let O = null;
  const z = Ge({}, [...od, ...Al, ...sd, ...So]);
  let V = Object.seal($a(null, {
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
  })), K = null, J = null;
  const j = Object.seal($a(null, {
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
  let be = !0, se = !0, me = !1, Ee = !0, Oe = !1, Y = !0, Z = !1, ue = !1, ke = null, Le = null, Ke = !1, Ue = !1, dt = !1, at = !1, ut = !0, Xt = !1;
  const zn = "user-content-";
  let Un = !0, Vt = !1, Nn = {}, It = null;
  const Ei = Ge({}, [
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
  let rn = null;
  const Si = Ge({}, ["audio", "video", "img", "source", "image", "track"]);
  let on = null;
  const Ti = Ge({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), sn = "http://www.w3.org/1998/Math/MathML", Jt = "http://www.w3.org/2000/svg", Kt = "http://www.w3.org/1999/xhtml";
  let Ne = Kt, ki = !1, yt = null;
  const uo = Ge({}, [sn, Jt, Kt], El), Bn = Et(["mi", "mo", "mn", "ms", "mtext"]);
  let On = Ge({}, Bn);
  const Ca = Et(["annotation-xml"]);
  let ln = Ge({}, Ca);
  const Ea = Ge({}, ["title", "style", "font", "a", "script"]);
  let Qn = null;
  const qi = ["application/xhtml+xml", "text/html"], Za = "text/html";
  let it = null, vn = null;
  const Sa = n.createElement("form"), Wi = function(_) {
    return _ instanceof RegExp || _ instanceof Function;
  }, Xa = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (vn && vn === _)
      return;
    (!_ || typeof _ != "object") && (_ = {}), _ = pn(_), Qn = // eslint-disable-next-line unicorn/prefer-includes
    qi.indexOf(_.PARSER_MEDIA_TYPE) === -1 ? Za : _.PARSER_MEDIA_TYPE, it = Qn === "application/xhtml+xml" ? El : wr, A = Oi(_, "ALLOWED_TAGS", x, {
      transform: it
    }), O = Oi(_, "ALLOWED_ATTR", z, {
      transform: it
    }), yt = Oi(_, "ALLOWED_NAMESPACES", uo, {
      transform: El
    }), on = Oi(_, "ADD_URI_SAFE_ATTR", Ti, {
      transform: it,
      base: Ti
    }), rn = Oi(_, "ADD_DATA_URI_TAGS", Si, {
      transform: it,
      base: Si
    }), It = Oi(_, "FORBID_CONTENTS", Ei, {
      transform: it
    }), K = Oi(_, "FORBID_TAGS", pn({}), {
      transform: it
    }), J = Oi(_, "FORBID_ATTR", pn({}), {
      transform: it
    }), Nn = tn(_, "USE_PROFILES") ? _.USE_PROFILES && typeof _.USE_PROFILES == "object" ? pn(_.USE_PROFILES) : _.USE_PROFILES : !1, be = _.ALLOW_ARIA_ATTR !== !1, se = _.ALLOW_DATA_ATTR !== !1, me = _.ALLOW_UNKNOWN_PROTOCOLS || !1, Ee = _.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Oe = _.SAFE_FOR_TEMPLATES || !1, Y = _.SAFE_FOR_XML !== !1, Z = _.WHOLE_DOCUMENT || !1, Ue = _.RETURN_DOM || !1, dt = _.RETURN_DOM_FRAGMENT || !1, at = _.RETURN_TRUSTED_TYPE || !1, Ke = _.FORCE_BODY || !1, ut = _.SANITIZE_DOM !== !1, Xt = _.SANITIZE_NAMED_PROPS || !1, Un = _.KEEP_CONTENT !== !1, Vt = _.IN_PLACE || !1, w = Kg(_.ALLOWED_URI_REGEXP) ? _.ALLOWED_URI_REGEXP : ld, Ne = typeof _.NAMESPACE == "string" ? _.NAMESPACE : Kt, On = xl(
      _,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => Ge({}, Bn)
      // Default built-in map
    ), ln = xl(
      _,
      "HTML_INTEGRATION_POINTS",
      () => Ge({}, Ca)
      // Default built-in map
    );
    const I = xl(_, "CUSTOM_ELEMENT_HANDLING", () => $a(null));
    if (V = $a(null), tn(I, "tagNameCheck") && Wi(I.tagNameCheck) && (V.tagNameCheck = I.tagNameCheck), tn(I, "attributeNameCheck") && Wi(I.attributeNameCheck) && (V.attributeNameCheck = I.attributeNameCheck), tn(I, "allowCustomizedBuiltInElements") && typeof I.allowCustomizedBuiltInElements == "boolean" && (V.allowCustomizedBuiltInElements = I.allowCustomizedBuiltInElements), Tt(V), Oe && (se = !1), dt && (Ue = !0), Nn && (A = Ge({}, rd), O = $a(null), Nn.html === !0 && (Ge(A, ad), Ge(O, od)), Nn.svg === !0 && (Ge(A, Sl), Ge(O, Al), Ge(O, So)), Nn.svgFilters === !0 && (Ge(A, Tl), Ge(O, Al), Ge(O, So)), Nn.mathMl === !0 && (Ge(A, kl), Ge(O, sd), Ge(O, So))), j.tagCheck = null, j.attributeCheck = null, tn(_, "ADD_TAGS") && (typeof _.ADD_TAGS == "function" ? j.tagCheck = _.ADD_TAGS : Ka(_.ADD_TAGS) && (A === x && (A = pn(A)), Ge(A, _.ADD_TAGS, it))), tn(_, "ADD_ATTR") && (typeof _.ADD_ATTR == "function" ? j.attributeCheck = _.ADD_ATTR : Ka(_.ADD_ATTR) && (O === z && (O = pn(O)), Ge(O, _.ADD_ATTR, it))), tn(_, "ADD_FORBID_CONTENTS") && Ka(_.ADD_FORBID_CONTENTS) && (It === Ei && (It = pn(It)), Ge(It, _.ADD_FORBID_CONTENTS, it)), Un && (A["#text"] = !0), Z && Ge(A, ["html", "head", "body"]), A.table && (Ge(A, ["tbody"]), delete K.tbody), _.TRUSTED_TYPES_POLICY) {
      if (typeof _.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw aa('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof _.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw aa('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const G = P;
      P = _.TRUSTED_TYPES_POLICY;
      try {
        le = F("");
      } catch (fe) {
        throw P = G, fe;
      }
    } else _.TRUSTED_TYPES_POLICY === null ? (P = void 0, le = "") : (P === void 0 && (P = oe()), P && typeof le == "string" && (le = F("")));
    Et && Et(_), vn = _;
  }, ht = Ge({}, [...Sl, ...Tl, ...Gg]), fo = Ge({}, [...kl, ...qg]), Ja = function(_, I, G) {
    return I.namespaceURI === Kt ? _ === "svg" : I.namespaceURI === sn ? _ === "svg" && (G === "annotation-xml" || On[G]) : !!ht[_];
  }, Ta = function(_, I, G) {
    return I.namespaceURI === Kt ? _ === "math" : I.namespaceURI === Jt ? _ === "math" && ln[G] : !!fo[_];
  }, ei = function(_, I, G) {
    return I.namespaceURI === Jt && !ln[G] || I.namespaceURI === sn && !On[G] ? !1 : !fo[_] && (Ea[_] || !ht[_]);
  }, ti = function(_) {
    let I = L(_);
    (!I || !I.tagName) && (I = {
      namespaceURI: Ne,
      tagName: "template"
    });
    const G = wr(_.tagName), fe = wr(I.tagName);
    return yt[_.namespaceURI] ? _.namespaceURI === Jt ? Ja(G, I, fe) : _.namespaceURI === sn ? Ta(G, I, fe) : _.namespaceURI === Kt ? ei(G, I, fe) : !!(Qn === "application/xhtml+xml" && yt[_.namespaceURI]) : !1;
  }, Rn = function(_) {
    dr(t.removed, {
      element: _
    });
    try {
      L(_).removeChild(_);
    } catch {
      if (N(_), !L(_))
        throw aa("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Qa = function(_, I, G) {
    try {
      _.removeAttributeNode(I);
    } catch {
      try {
        _.removeAttribute(G);
      } catch {
      }
    }
  }, Hn = function(_) {
    Yi(_);
    const I = R(_);
    if (I) {
      const fe = [];
      sa(I, (ye) => {
        dr(fe, ye);
      }), sa(fe, (ye) => {
        try {
          N(ye);
        } catch {
        }
      });
    }
    const G = H(_);
    if (G)
      for (let fe = G.length - 1; fe >= 0; --fe) {
        const ye = G[fe], xe = ye && ye.name;
        typeof xe == "string" && Qa(_, ye, xe);
      }
  }, Ln = function(_, I, G) {
    if (!G)
      try {
        G = I.getAttributeNode(_);
      } catch {
        G = null;
      }
    dr(t.removed, {
      attribute: G || null,
      from: I
    });
    try {
      G ? I.removeAttributeNode(G) : I.removeAttribute(_);
    } catch {
      try {
        I.removeAttribute(_);
      } catch {
      }
    }
    if (_ === "is")
      if (Ue || dt)
        try {
          Rn(I);
        } catch {
        }
      else
        try {
          I.setAttribute(_, "");
        } catch {
        }
  }, ka = function(_) {
    const I = H(_);
    if (I)
      for (let G = I.length - 1; G >= 0; --G) {
        const fe = I[G], ye = fe && fe.name;
        typeof ye != "string" || O[it(ye)] || Qa(_, fe, ye);
      }
  }, Yi = function(_) {
    const I = [_];
    for (; I.length > 0; ) {
      const G = I.pop();
      te(G) === fn.element && ka(G);
      const ye = R(G);
      if (ye)
        for (let xe = ye.length - 1; xe >= 0; --xe)
          I.push(ye[xe]);
    }
  }, po = function(_, I) {
    return Y ? _ === "patchsrc" ? !0 : _ === "for" && I !== "label" && I !== "output" : !1;
  }, er = function(_) {
    if (!Y)
      return;
    const I = [_];
    for (; I.length > 0; ) {
      const G = I.pop(), fe = te(G);
      if (fe === fn.processingInstruction || fe === fn.comment && Dt(ud, G.data)) {
        try {
          N(G);
        } catch {
        }
        continue;
      }
      if (fe === fn.element) {
        const xe = G, Ye = it(ne(G));
        try {
          xe.hasAttribute && xe.hasAttribute("patchsrc") && xe.removeAttribute("patchsrc"), xe.hasAttribute && xe.hasAttribute("for") && po("for", Ye) && xe.removeAttribute("for");
        } catch {
        }
      }
      const ye = R(G);
      if (ye)
        for (let xe = ye.length - 1; xe >= 0; --xe)
          I.push(ye[xe]);
    }
  }, Ai = function(_) {
    let I = null, G = null;
    if (Ke)
      _ = "<remove></remove>" + _;
    else {
      const xe = ed(_, /^[\r\n\t ]+/);
      G = xe && xe[0];
    }
    Qn === "application/xhtml+xml" && Ne === Kt && (_ = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + _ + "</body></html>");
    const fe = P ? F(_) : _;
    if (Ne === Kt)
      try {
        I = new c().parseFromString(fe, Qn);
      } catch {
      }
    if (!I || !I.documentElement) {
      I = de.createDocument(Ne, "template", null);
      try {
        I.documentElement.innerHTML = ki ? le : fe;
      } catch {
      }
    }
    const ye = I.body || I.documentElement;
    return _ && G && ye.insertBefore(n.createTextNode(G), ye.childNodes[0] || null), Ne === Kt ? Ce.call(I, Z ? "html" : "body")[0] : Z ? I.documentElement : ye;
  }, Zi = function(_) {
    const I = pe ? pe(_) : _.ownerDocument;
    return ve.call(
      I || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, gn = function(_) {
    return _ = fr(_, tt, " "), _ = fr(_, Qe, " "), _ = fr(_, ft, " "), _;
  }, xi = function(_) {
    var I;
    _.normalize();
    const G = pe ? pe(_) : _.ownerDocument, fe = ve.call(
      G || _,
      _,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let ye = fe.nextNode();
    for (; ye; )
      ye.data = gn(ye.data), ye = fe.nextNode();
    const xe = (I = _.querySelectorAll) === null || I === void 0 ? void 0 : I.call(_, "template");
    xe && sa(xe, (Ye) => {
      Gt(Ye.content) && xi(Ye.content);
    });
  }, Qt = function(_) {
    const I = ce ? ce(_) : null;
    return typeof I != "string" || it(I) !== "form" ? !1 : typeof _.nodeName != "string" || typeof _.textContent != "string" || typeof _.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    _.attributes !== H(_) || typeof _.removeAttribute != "function" || typeof _.setAttribute != "function" || typeof _.namespaceURI != "string" || typeof _.insertBefore != "function" || typeof _.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    _.nodeType !== $(_) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    _.childNodes !== R(_);
  }, Gt = function(_) {
    if (!$ || typeof _ != "object" || _ === null)
      return !1;
    try {
      return $(_) === fn.documentFragment;
    } catch {
      return !1;
    }
  }, At = function(_) {
    if (!$ || typeof _ != "object" || _ === null)
      return !1;
    try {
      return typeof $(_) == "number";
    } catch {
      return !1;
    }
  };
  function cn(ee, _, I) {
    ee.length !== 0 && sa(ee, (G) => {
      G.call(t, _, I, vn);
    });
  }
  const ll = function(_, I) {
    return !!(Y && _.hasChildNodes() && !At(_.firstElementChild) && Dt(cd, _.textContent) && Dt(cd, _.innerHTML) || Y && _.namespaceURI === Kt && rb[I] && (At(_.firstElementChild) || typeof _.textContent == "string" && Dt(ob[I], _.textContent)) || _.nodeType === fn.processingInstruction || Y && _.nodeType === fn.comment && Dt(ud, _.data));
  }, Xi = function(_, I) {
    if (_ instanceof RegExp)
      return Dt(_, I);
    if (_ instanceof Function) {
      for (var G = arguments.length, fe = new Array(G > 2 ? G - 2 : 0), ye = 2; ye < G; ye++)
        fe[ye - 2] = arguments[ye];
      return !!_(I, ...fe);
    }
    return !1;
  }, cl = function(_, I, G) {
    if (!K[I] && vo(I) && Xi(V.tagNameCheck, I))
      return !1;
    if (Un && !It[I]) {
      const fe = L(_), ye = R(_);
      if (ye && fe) {
        const xe = ye.length;
        for (let Ye = xe - 1; Ye >= 0; --Ye) {
          const rt = _ === G ? C(ye[Ye], !0) : ye[Ye];
          fe.insertBefore(rt, S(_));
        }
      }
    }
    return Rn(_), !0;
  }, ho = function(_, I, G, fe) {
    return _.length === 0 ? I : I === G || I === fe ? pn(I) : I;
  }, bn = function(_, I) {
    return _ === I || L(_) !== null ? !1 : (Vt && Yi(_), !0);
  }, tr = function(_, I) {
    if (cn(Te.beforeSanitizeElements, _, null), bn(_, I))
      return !0;
    if (Qt(_))
      return Rn(_), !0;
    const G = it(ne(_));
    if (A = ho(Te.uponSanitizeElement, A, x, ke), cn(Te.uponSanitizeElement, _, {
      tagName: G,
      allowedTags: A
    }), bn(_, I))
      return !0;
    if (ll(_, G))
      return Rn(_), !0;
    if (K[G] || !(j.tagCheck instanceof Function && j.tagCheck(G)) && !A[G]) {
      const ye = cl(_, G, I);
      return ye === !1 && cn(Te.afterSanitizeElements, _, null), ye;
    }
    if (te(_) === fn.element && !ti(_) || (G === "noscript" || G === "noembed" || G === "noframes") && Dt(ib, _.innerHTML))
      return Rn(_), !0;
    if (Oe && _.nodeType === fn.text) {
      const ye = gn(_.textContent);
      _.textContent !== ye && (dr(t.removed, {
        element: _.cloneNode()
      }), _.textContent = ye);
    }
    return cn(Te.afterSanitizeElements, _, null), !1;
  }, Ji = function(_, I, G) {
    if (J[I] || po(I, _) || ut && (I === "id" || I === "name") && (G in n || G in Sa))
      return !1;
    const fe = O[I] || j.attributeCheck instanceof Function && j.attributeCheck(I, _);
    return se && Dt(bt, I) || be && Dt(nt, I) ? !0 : fe ? on[I] || Dt(w, fr(G, U, "")) || (I === "src" || I === "xlink:href" || I === "href") && _ !== "script" && td(G, "data:") === 0 && rn[_] || me && !Dt(kt, fr(G, U, "")) ? !0 : !G : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      vo(_) && Xi(V.tagNameCheck, _) && Xi(V.attributeNameCheck, I, _) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      I === "is" && V.allowCustomizedBuiltInElements && Xi(V.tagNameCheck, G)
    );
  }, mo = Ge({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), vo = function(_) {
    return !mo[wr(_)] && Dt(m, _);
  }, go = function(_, I, G, fe) {
    if (P && typeof h == "object" && typeof h.getAttributeType == "function" && !G)
      switch (h.getAttributeType(_, I)) {
        case "TrustedHTML":
          return F(fe);
        case "TrustedScriptURL":
          return W(fe);
      }
    return fe;
  }, ul = function(_, I, G, fe) {
    try {
      G ? _.setAttributeNS(G, I, fe) : _.setAttribute(I, fe), Qt(_) ? Rn(_) : Qu(t.removed);
    } catch {
      Ln(I, _);
    }
  }, Aa = function(_) {
    cn(Te.beforeSanitizeAttributes, _, null);
    const I = _.attributes;
    if (!I || Qt(_))
      return;
    O = ho(Te.uponSanitizeAttribute, O, z, Le);
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: O,
      forceKeepAttr: void 0
    };
    let fe = I.length;
    const ye = it(_.nodeName);
    for (; fe--; ) {
      const xe = I[fe], Ye = xe.name, rt = xe.namespaceURI, Pt = xe.value, Mt = it(Ye), ir = Pt;
      let _t = Ye === "value" ? ir : zg(ir);
      if (G.attrName = Mt, G.attrValue = _t, G.keepAttr = !0, G.forceKeepAttr = void 0, cn(Te.uponSanitizeAttribute, _, G), _t = G.attrValue, Xt && (Mt === "id" || Mt === "name") && td(_t, zn) !== 0 && (Ln(Ye, _, xe), _t = zn + _t), Y && Dt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, _t)) {
        Ln(Ye, _, xe);
        continue;
      }
      if (Mt === "attributename" && ed(_t, "href")) {
        Ln(Ye, _, xe);
        continue;
      }
      if (!G.forceKeepAttr) {
        if (!G.keepAttr) {
          Ln(Ye, _, xe);
          continue;
        }
        if (!Ee && Dt(ab, _t)) {
          Ln(Ye, _, xe);
          continue;
        }
        if (Oe && (_t = gn(_t)), !Ji(ye, Mt, _t)) {
          Ln(Ye, _, xe);
          continue;
        }
        _t = go(ye, Mt, rt, _t), _t !== ir && ul(_, Ye, rt, _t);
      }
    }
    cn(Te.afterSanitizeAttributes, _, null);
  }, Qi = function(_) {
    let I = null;
    const G = Zi(_);
    for (cn(Te.beforeSanitizeShadowDOM, _, null); I = G.nextNode(); )
      if (cn(Te.uponSanitizeShadowNode, I, null), tr(I, _), Aa(I), Gt(I.content) && Qi(I.content), te(I) === fn.element) {
        const fe = D(I);
        Gt(fe) && (nr(fe), Qi(fe));
      }
    cn(Te.afterSanitizeShadowDOM, _, null);
  }, nr = function(_) {
    const I = [{
      node: _,
      shadow: null
    }];
    for (; I.length > 0; ) {
      const G = I.pop();
      if (G.shadow) {
        Qi(G.shadow);
        continue;
      }
      const fe = G.node, xe = te(fe) === fn.element, Ye = R(fe);
      if (Ye)
        for (let rt = Ye.length - 1; rt >= 0; --rt)
          I.push({
            node: Ye[rt],
            shadow: null
          });
      if (xe) {
        const rt = ce ? ce(fe) : null;
        if (typeof rt == "string" && it(rt) === "template") {
          const Pt = fe.content;
          Gt(Pt) && I.push({
            node: Pt,
            shadow: null
          });
        }
      }
      if (xe) {
        const rt = D(fe);
        Gt(rt) && I.push({
          node: null,
          shadow: rt
        }, {
          node: rt,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(ee) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, I = null, G = null, fe = null, ye = null;
    if (ki = !ee, ki && (ee = "<!-->"), typeof ee != "string" && !At(ee) && (ee = Vg(ee), typeof ee != "string"))
      throw aa("dirty is not a string, aborting");
    if (!t.isSupported)
      return ee;
    ue ? (A = ke, O = Le) : Xa(_), (Te.uponSanitizeElement.length > 0 || Te.uponSanitizeAttribute.length > 0) && (A = pn(A)), Te.uponSanitizeAttribute.length > 0 && (O = pn(O)), t.removed = [];
    const xe = Vt && typeof ee != "string" && At(ee);
    if (xe) {
      er(ee);
      const Pt = ne(ee);
      if (typeof Pt == "string") {
        const Mt = it(Pt);
        if (!A[Mt] || K[Mt])
          throw Hn(ee), aa("root node is forbidden and cannot be sanitized in-place");
      }
      if (Qt(ee))
        throw Hn(ee), aa("root node is clobbered and cannot be sanitized in-place");
      try {
        nr(ee);
      } catch (Mt) {
        throw Hn(ee), Mt;
      }
    } else if (At(ee))
      I = Ai("<!---->"), G = I.ownerDocument.importNode(ee, !0), G.nodeType === fn.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? I = G : I.appendChild(G), nr(G);
    else {
      if (!Ue && !Oe && !Z && // eslint-disable-next-line unicorn/prefer-includes
      ee.indexOf("<") === -1)
        return P && at ? F(ee) : ee;
      if (I = Ai(ee), !I)
        return Ue ? null : at ? le : "";
    }
    I && Ke && Rn(I.firstChild);
    const Ye = xe ? ee : I;
    try {
      const Pt = Zi(Ye);
      for (; fe = Pt.nextNode(); )
        tr(fe, Ye), Aa(fe), Gt(fe.content) && Qi(fe.content);
    } catch (Pt) {
      throw xe && (Hn(ee), sa(t.removed, (Mt) => {
        Mt.element && Yi(Mt.element);
      })), Pt;
    }
    if (xe)
      return sa(t.removed, (Pt) => {
        Pt.element && Yi(Pt.element);
      }), Oe && xi(ee), ee;
    if (Ue) {
      if (Oe && xi(I), dt)
        for (ye = we.call(I.ownerDocument); I.firstChild; )
          ye.appendChild(I.firstChild);
      else
        ye = I;
      return (O.shadowroot || O.shadowrootmode) && (ye = Ve.call(i, ye, !0)), ye;
    }
    let rt = Z ? I.outerHTML : I.innerHTML;
    return Z && A["!doctype"] && I.ownerDocument && I.ownerDocument.doctype && I.ownerDocument.doctype.name && Dt(tb, I.ownerDocument.doctype.name) && (rt = "<!DOCTYPE " + I.ownerDocument.doctype.name + `>
` + rt), Oe && (rt = gn(rt)), P && at ? F(rt) : rt;
  }, t.setConfig = function() {
    let ee = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Xa(ee), ue = !0, ke = A, Le = O;
  }, t.clearConfig = function() {
    vn = null, ue = !1, ke = null, Le = null, P = ge, le = "";
  }, t.isValidAttribute = function(ee, _, I) {
    vn || Xa({});
    const G = it(ee), fe = it(_);
    return Ji(G, fe, I);
  }, t.addHook = function(ee, _) {
    typeof _ == "function" && tn(Te, ee) && dr(Te[ee], _);
  }, t.removeHook = function(ee, _) {
    if (tn(Te, ee)) {
      if (_ !== void 0) {
        const I = Fg(Te[ee], _);
        return I === -1 ? void 0 : $g(Te[ee], I, 1)[0];
      }
      return Qu(Te[ee]);
    }
  }, t.removeHooks = function(ee) {
    tn(Te, ee) && (Te[ee] = []);
  }, t.removeAllHooks = function() {
    Te = dd();
  }, t;
}
var Rp = Op();
function Wc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nl, fd;
function cb() {
  if (fd) return Nl;
  fd = 1;
  var e = /["'&<>]/;
  Nl = t;
  function t(n) {
    var i = "" + n, a = e.exec(i);
    if (!a)
      return i;
    var r, o = "", s = 0, l = 0;
    for (s = a.index; s < i.length; s++) {
      switch (i.charCodeAt(s)) {
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
      l !== s && (o += i.substring(l, s)), l = s + 1, o += r;
    }
    return l !== s ? o + i.substring(l, s) : o;
  }
  return Nl;
}
var ub = cb();
const es = /* @__PURE__ */ Wc(ub);
function db() {
  return globalThis._nc_l10n_locale;
}
function fb() {
  return db().replaceAll(/_/g, "-");
}
function tl() {
  return globalThis._nc_l10n_language;
}
function pb(e) {
  const t = tl();
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
function Lp(e) {
  return {
    translations: globalThis._oc_l10n_registry_translations[e] ?? {},
    pluralFunction: globalThis._oc_l10n_registry_plural_functions[e] ?? ((t) => t)
  };
}
globalThis._oc_l10n_registry_translations ??= {};
globalThis._oc_l10n_registry_plural_functions ??= {};
function d(e, t, n, i, a) {
  const r = typeof n == "object" ? n : void 0, o = typeof i == "number" ? i : typeof n == "number" ? n : void 0, s = {
    // defaults
    escape: !0,
    sanitize: !0,
    // overwrite with user config
    ...typeof a == "object" ? a : typeof i == "object" ? i : {}
  }, l = (S) => S, p = (s.sanitize ? Rp.sanitize : l) || l, c = s.escape ? es : l, h = (S) => typeof S == "string" || typeof S == "number", b = (S, R, L) => S.replace(/%n/g, "" + L).replace(/{([^{}]*)}/g, (D, H) => {
    if (R === void 0 || !(H in R))
      return c(D);
    const $ = R[H];
    return h($) ? c(`${$}`) : typeof $ == "object" && h($.value) ? ($.escape !== !1 ? es : l)(`${$.value}`) : c(D);
  });
  let N = (a?.bundle ?? Lp(e)).translations[t] || t;
  return N = Array.isArray(N) ? N[0] : N, p(typeof r == "object" || o !== void 0 ? b(
    N,
    r,
    o
  ) : N);
}
function hb(e, t, n, i, a, r) {
  const o = "_" + t + "_::_" + n + "_", s = r?.bundle ?? Lp(e), l = s.translations[o];
  if (typeof l < "u") {
    const p = l;
    if (Array.isArray(p)) {
      const c = s.pluralFunction(i);
      return d(e, p[c], a, i, r);
    }
  }
  return i === 1 ? d(e, t, a, i, r) : d(e, n, a, i, r);
}
function mb(e, t = tl()) {
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
class ts {
  static GLOBAL_SCOPE_VOLATILE = "nextcloud_vol";
  static GLOBAL_SCOPE_PERSISTENT = "nextcloud_per";
  scope;
  wrapped;
  constructor(t, n, i) {
    this.scope = `${i ? ts.GLOBAL_SCOPE_PERSISTENT : ts.GLOBAL_SCOPE_VOLATILE}_${btoa(t)}_`, this.wrapped = n;
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
class vb {
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
    return new ts(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
function Ip(e) {
  return new vb(e);
}
function gb() {
  try {
    return qc("core", "capabilities");
  } catch {
    return console.debug("Could not find capabilities initial state fall back to _oc_capabilities"), "_oc_capabilities" in window ? window._oc_capabilities : {};
  }
}
var Ol, pd;
function Pp() {
  if (pd) return Ol;
  pd = 1;
  var e = {};
  return Ol = typeof process == "object" && e && e.NODE_DEBUG && /\bsemver\b/i.test(e.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
  }, Ol;
}
var Rl, hd;
function Mp() {
  if (hd) return Rl;
  hd = 1;
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
var To = { exports: {} }, md;
function bb() {
  return md || (md = 1, (function(e, t) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: n,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: a
    } = Mp(), r = Pp();
    t = e.exports = {};
    const o = t.re = [], s = t.safeRe = [], l = t.src = [], p = t.safeSrc = [], c = t.t = {};
    let h = 0;
    const b = "[a-zA-Z0-9-]", C = [
      ["\\s", 1],
      ["\\d", a],
      [b, i]
    ], N = (R) => {
      for (const [L, D] of C)
        R = R.split(`${L}*`).join(`${L}{0,${D}}`).split(`${L}+`).join(`${L}{1,${D}}`);
      return R;
    }, S = (R, L, D) => {
      const H = N(L), $ = h++;
      r(R, $, L), c[R] = $, l[$] = L, p[$] = H, o[$] = new RegExp(L, D ? "g" : void 0), s[$] = new RegExp(H, D ? "g" : void 0);
    };
    S("NUMERICIDENTIFIER", "0|[1-9]\\d*"), S("NUMERICIDENTIFIERLOOSE", "\\d+"), S("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${b}*`), S("MAINVERSION", `(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})\\.(${l[c.NUMERICIDENTIFIER]})`), S("MAINVERSIONLOOSE", `(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})\\.(${l[c.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASEIDENTIFIER", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIER]})`), S("PRERELEASEIDENTIFIERLOOSE", `(?:${l[c.NONNUMERICIDENTIFIER]}|${l[c.NUMERICIDENTIFIERLOOSE]})`), S("PRERELEASE", `(?:-(${l[c.PRERELEASEIDENTIFIER]}(?:\\.${l[c.PRERELEASEIDENTIFIER]})*))`), S("PRERELEASELOOSE", `(?:-?(${l[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[c.PRERELEASEIDENTIFIERLOOSE]})*))`), S("BUILDIDENTIFIER", `${b}+`), S("BUILD", `(?:\\+(${l[c.BUILDIDENTIFIER]}(?:\\.${l[c.BUILDIDENTIFIER]})*))`), S("FULLPLAIN", `v?${l[c.MAINVERSION]}${l[c.PRERELEASE]}?${l[c.BUILD]}?`), S("FULL", `^${l[c.FULLPLAIN]}$`), S("LOOSEPLAIN", `[v=\\s]*${l[c.MAINVERSIONLOOSE]}${l[c.PRERELEASELOOSE]}?${l[c.BUILD]}?`), S("LOOSE", `^${l[c.LOOSEPLAIN]}$`), S("GTLT", "((?:<|>)?=?)"), S("XRANGEIDENTIFIERLOOSE", `${l[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), S("XRANGEIDENTIFIER", `${l[c.NUMERICIDENTIFIER]}|x|X|\\*`), S("XRANGEPLAIN", `[v=\\s]*(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:\\.(${l[c.XRANGEIDENTIFIER]})(?:${l[c.PRERELEASE]})?${l[c.BUILD]}?)?)?`), S("XRANGEPLAINLOOSE", `[v=\\s]*(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[c.XRANGEIDENTIFIERLOOSE]})(?:${l[c.PRERELEASELOOSE]})?${l[c.BUILD]}?)?)?`), S("XRANGE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAIN]}$`), S("XRANGELOOSE", `^${l[c.GTLT]}\\s*${l[c.XRANGEPLAINLOOSE]}$`), S("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), S("COERCE", `${l[c.COERCEPLAIN]}(?:$|[^\\d])`), S("COERCEFULL", l[c.COERCEPLAIN] + `(?:${l[c.PRERELEASE]})?(?:${l[c.BUILD]})?(?:$|[^\\d])`), S("COERCERTL", l[c.COERCE], !0), S("COERCERTLFULL", l[c.COERCEFULL], !0), S("LONETILDE", "(?:~>?)"), S("TILDETRIM", `(\\s*)${l[c.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", S("TILDE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAIN]}$`), S("TILDELOOSE", `^${l[c.LONETILDE]}${l[c.XRANGEPLAINLOOSE]}$`), S("LONECARET", "(?:\\^)"), S("CARETTRIM", `(\\s*)${l[c.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", S("CARET", `^${l[c.LONECARET]}${l[c.XRANGEPLAIN]}$`), S("CARETLOOSE", `^${l[c.LONECARET]}${l[c.XRANGEPLAINLOOSE]}$`), S("COMPARATORLOOSE", `^${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]})$|^$`), S("COMPARATOR", `^${l[c.GTLT]}\\s*(${l[c.FULLPLAIN]})$|^$`), S("COMPARATORTRIM", `(\\s*)${l[c.GTLT]}\\s*(${l[c.LOOSEPLAIN]}|${l[c.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", S("HYPHENRANGE", `^\\s*(${l[c.XRANGEPLAIN]})\\s+-\\s+(${l[c.XRANGEPLAIN]})\\s*$`), S("HYPHENRANGELOOSE", `^\\s*(${l[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[c.XRANGEPLAINLOOSE]})\\s*$`), S("STAR", "(<|>)?=?\\s*\\*"), S("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), S("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(To, To.exports)), To.exports;
}
var Ll, vd;
function yb() {
  if (vd) return Ll;
  vd = 1;
  const e = Object.freeze({ loose: !0 }), t = Object.freeze({});
  return Ll = (i) => i ? typeof i != "object" ? e : i : t, Ll;
}
var Il, gd;
function _b() {
  if (gd) return Il;
  gd = 1;
  const e = /^[0-9]+$/, t = (i, a) => {
    if (typeof i == "number" && typeof a == "number")
      return i === a ? 0 : i < a ? -1 : 1;
    const r = e.test(i), o = e.test(a);
    return r && o && (i = +i, a = +a), i === a ? 0 : r && !o ? -1 : o && !r ? 1 : i < a ? -1 : 1;
  };
  return Il = {
    compareIdentifiers: t,
    rcompareIdentifiers: (i, a) => t(a, i)
  }, Il;
}
var Pl, bd;
function Dp() {
  if (bd) return Pl;
  bd = 1;
  const e = Pp(), { MAX_LENGTH: t, MAX_SAFE_INTEGER: n } = Mp(), { safeRe: i, t: a } = bb(), r = yb(), { compareIdentifiers: o } = _b(), s = (p, c) => {
    const h = c.split(".");
    if (h.length > p.length)
      return !1;
    for (let b = 0; b < h.length; b++)
      if (o(p[b], h[b]) !== 0)
        return !1;
    return !0;
  };
  class l {
    constructor(c, h) {
      if (h = r(h), c instanceof l) {
        if (c.loose === !!h.loose && c.includePrerelease === !!h.includePrerelease)
          return c;
        c = c.version;
      } else if (typeof c != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof c}".`);
      if (c.length > t)
        throw new TypeError(
          `version is longer than ${t} characters`
        );
      e("SemVer", c, h), this.options = h, this.loose = !!h.loose, this.includePrerelease = !!h.includePrerelease;
      const b = c.trim().match(h.loose ? i[a.LOOSE] : i[a.FULL]);
      if (!b)
        throw new TypeError(`Invalid Version: ${c}`);
      if (this.raw = c, this.major = +b[1], this.minor = +b[2], this.patch = +b[3], this.major > n || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > n || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > n || this.patch < 0)
        throw new TypeError("Invalid patch version");
      b[4] ? this.prerelease = b[4].split(".").map((C) => {
        if (/^[0-9]+$/.test(C)) {
          const N = +C;
          if (N >= 0 && N < n)
            return N;
        }
        return C;
      }) : this.prerelease = [], this.build = b[5] ? b[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(c) {
      if (e("SemVer.compare", this.version, this.options, c), !(c instanceof l)) {
        if (typeof c == "string" && c === this.version)
          return 0;
        c = new l(c, this.options);
      }
      return c.version === this.version ? 0 : this.compareMain(c) || this.comparePre(c);
    }
    compareMain(c) {
      return c instanceof l || (c = new l(c, this.options)), this.major < c.major ? -1 : this.major > c.major ? 1 : this.minor < c.minor ? -1 : this.minor > c.minor ? 1 : this.patch < c.patch ? -1 : this.patch > c.patch ? 1 : 0;
    }
    comparePre(c) {
      if (c instanceof l || (c = new l(c, this.options)), this.prerelease.length && !c.prerelease.length)
        return -1;
      if (!this.prerelease.length && c.prerelease.length)
        return 1;
      if (!this.prerelease.length && !c.prerelease.length)
        return 0;
      let h = 0;
      do {
        const b = this.prerelease[h], C = c.prerelease[h];
        if (e("prerelease compare", h, b, C), b === void 0 && C === void 0)
          return 0;
        if (C === void 0)
          return 1;
        if (b === void 0)
          return -1;
        if (b === C)
          continue;
        return o(b, C);
      } while (++h);
    }
    compareBuild(c) {
      c instanceof l || (c = new l(c, this.options));
      let h = 0;
      do {
        const b = this.build[h], C = c.build[h];
        if (e("build compare", h, b, C), b === void 0 && C === void 0)
          return 0;
        if (C === void 0)
          return 1;
        if (b === void 0)
          return -1;
        if (b === C)
          continue;
        return o(b, C);
      } while (++h);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(c, h, b) {
      if (c.startsWith("pre")) {
        if (!h && b === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (h) {
          const C = `-${h}`.match(this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]);
          if (!C || C[1] !== h)
            throw new Error(`invalid identifier: ${h}`);
        }
      }
      switch (c) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", h, b);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", h, b);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", h, b), this.inc("pre", h, b);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", h, b), this.inc("pre", h, b);
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
          const C = Number(b) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [C];
          else {
            let N = this.prerelease.length;
            for (; --N >= 0; )
              typeof this.prerelease[N] == "number" && (this.prerelease[N]++, N = -2);
            if (N === -1) {
              if (h === this.prerelease.join(".") && b === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(C);
            }
          }
          if (h) {
            let N = [h, C];
            if (b === !1 && (N = [h]), s(this.prerelease, h)) {
              const S = this.prerelease[h.split(".").length];
              isNaN(S) && (this.prerelease = N);
            } else
              this.prerelease = N;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${c}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Pl = l, Pl;
}
var Ml, yd;
function wb() {
  if (yd) return Ml;
  yd = 1;
  const e = Dp();
  return Ml = (n, i) => new e(n, i).major, Ml;
}
var Cb = wb();
const _d = /* @__PURE__ */ Wc(Cb);
var Dl, wd;
function Eb() {
  if (wd) return Dl;
  wd = 1;
  const e = Dp();
  return Dl = (n, i, a = !1) => {
    if (n instanceof e)
      return n;
    try {
      return new e(n, i);
    } catch (r) {
      if (!a)
        return null;
      throw r;
    }
  }, Dl;
}
var Fl, Cd;
function Sb() {
  if (Cd) return Fl;
  Cd = 1;
  const e = Eb();
  return Fl = (n, i) => {
    const a = e(n, i);
    return a ? a.version : null;
  }, Fl;
}
var Tb = Sb();
const kb = /* @__PURE__ */ Wc(Tb);
class Ab {
  bus;
  constructor(t) {
    typeof t.getVersion != "function" || !kb(t.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : _d(t.getVersion()) !== _d(this.getVersion()) && console.warn(
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
class xb {
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
let hr = null;
function Yc() {
  return hr !== null ? hr : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : (window.OC?._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof window?._nc_event_bus < "u" ? hr = new Ab(window._nc_event_bus) : hr = window._nc_event_bus = new xb(), hr);
}
function Fp(e, t) {
  Yc().subscribe(e, t);
}
function Nb(e, t) {
  Yc().unsubscribe(e, t);
}
function vi(e, ...t) {
  Yc().emit(e, ...t);
}
const $p = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ob = Object.prototype.toString, Rb = (e) => Ob.call(e) === "[object Object]", La = () => {
}, Lb = /* @__PURE__ */ Ib();
function Ib() {
  var e, t, n;
  return $p && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) === null || n === void 0 ? void 0 : n.navigator.userAgent));
}
function $l(e) {
  return Array.isArray(e) ? e : [e];
}
function Pb(e, t, n) {
  return an(e, t, {
    ...n,
    immediate: !0
  });
}
const zp = $p ? window : void 0;
function Cr(e) {
  var t;
  const n = pi(e);
  return (t = n?.$el) !== null && t !== void 0 ? t : n;
}
function Ga(...e) {
  const t = (i, a, r, o) => (i.addEventListener(a, r, o), () => i.removeEventListener(a, r, o)), n = q(() => {
    const i = $l(pi(e[0])).filter((a) => a != null);
    return i.every((a) => typeof a != "string") ? i : void 0;
  });
  return Pb(() => {
    var i, a;
    return [
      (i = (a = n.value) === null || a === void 0 ? void 0 : a.map((r) => Cr(r))) !== null && i !== void 0 ? i : [zp].filter((r) => r != null),
      $l(pi(n.value ? e[1] : e[0])),
      $l(v(n.value ? e[2] : e[1])),
      pi(n.value ? e[3] : e[2])
    ];
  }, ([i, a, r, o], s, l) => {
    if (!i?.length || !a?.length || !r?.length) return;
    const p = Rb(o) ? { ...o } : o, c = i.flatMap((h) => a.flatMap((b) => r.map((C) => t(h, b, C, p))));
    l(() => {
      c.forEach((h) => h());
    });
  }, { flush: "post" });
}
let Ed = !1;
function Sd(e, t, n = {}) {
  const { window: i = zp, ignore: a = [], capture: r = !0, detectIframe: o = !1, controls: s = !1 } = n;
  if (!i) return s ? {
    stop: La,
    cancel: La,
    trigger: La
  } : La;
  if (Lb && !Ed) {
    Ed = !0;
    const R = { passive: !0 };
    Array.from(i.document.body.children).forEach((L) => L.addEventListener("click", La, R)), i.document.documentElement.addEventListener("click", La, R);
  }
  let l = !0;
  const p = (R) => pi(a).some((L) => {
    if (typeof L == "string") return Array.from(i.document.querySelectorAll(L)).some((D) => D === R.target || R.composedPath().includes(D));
    {
      const D = Cr(L);
      return D && (R.target === D || R.composedPath().includes(D));
    }
  });
  function c(R) {
    const L = pi(R);
    return L && L.$.subTree.shapeFlag === 16;
  }
  function h(R, L) {
    const D = pi(R), H = D.$.subTree && D.$.subTree.children;
    return H == null || !Array.isArray(H) ? !1 : H.some(($) => $.el === L.target || L.composedPath().includes($.el));
  }
  const b = (R) => {
    const L = Cr(e);
    if (R.target != null && !(!(L instanceof Element) && c(e) && h(e, R)) && !(!L || L === R.target || R.composedPath().includes(L))) {
      if ("detail" in R && R.detail === 0 && (l = !p(R)), !l) {
        l = !0;
        return;
      }
      t(R);
    }
  };
  let C = !1;
  const N = [
    Ga(i, "click", (R) => {
      C || (C = !0, setTimeout(() => {
        C = !1;
      }, 0), b(R));
    }, {
      passive: !0,
      capture: r
    }),
    Ga(i, "pointerdown", (R) => {
      const L = Cr(e);
      l = !p(R) && !!(L && !R.composedPath().includes(L));
    }, { passive: !0 }),
    o && Ga(i, "blur", (R) => {
      setTimeout(() => {
        const L = Cr(e);
        let D = i.document.activeElement;
        for (; D?.shadowRoot; ) D = D.shadowRoot.activeElement;
        D?.tagName === "IFRAME" && !L?.contains(i.document.activeElement) && t(R);
      }, 0);
    }, { passive: !0 })
  ].filter(Boolean), S = () => N.forEach((R) => R());
  return s ? {
    stop: S,
    cancel: () => {
      l = !1;
    },
    trigger: (R) => {
      l = !0, b(R), l = !1;
    }
  } : S;
}
function Mb(e, t = {}) {
  const { threshold: n = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: r, passive: o = !0 } = t, s = /* @__PURE__ */ Yt({
    x: 0,
    y: 0
  }), l = /* @__PURE__ */ Yt({
    x: 0,
    y: 0
  }), p = q(() => s.x - l.x), c = q(() => s.y - l.y), { max: h, abs: b } = Math, C = q(() => h(b(p.value), b(c.value)) >= n), N = /* @__PURE__ */ Rf(!1), S = q(() => C.value ? b(p.value) > b(c.value) ? p.value > 0 ? "left" : "right" : c.value > 0 ? "up" : "down" : "none"), R = (te) => [te.touches[0].clientX, te.touches[0].clientY], L = (te, ne) => {
    s.x = te, s.y = ne;
  }, D = (te, ne) => {
    l.x = te, l.y = ne;
  }, H = {
    passive: o,
    capture: !o
  }, $ = (te) => {
    N.value && a?.(te, S.value), N.value = !1;
  }, ce = [
    Ga(e, "touchstart", (te) => {
      if (te.touches.length !== 1) return;
      const [ne, P] = R(te);
      L(ne, P), D(ne, P), r?.(te);
    }, H),
    Ga(e, "touchmove", (te) => {
      if (te.touches.length !== 1) return;
      const [ne, P] = R(te);
      D(ne, P), H.capture && !H.passive && Math.abs(p.value) > Math.abs(c.value) && te.preventDefault(), !N.value && C.value && (N.value = !0), N.value && i?.(te);
    }, H),
    Ga(e, ["touchend", "touchcancel"], $, H)
  ];
  return {
    isSwiping: N,
    direction: S,
    coordsStart: s,
    coordsEnd: l,
    lengthX: p,
    lengthY: c,
    stop: () => ce.forEach((te) => te())
  };
}
var Db = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
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
    let n = t, i = e, a = cv(), r = lv(), o = /* @__PURE__ */ Ct([]), s = q(() => o.value.reduce((U, m) => (U[~~m.id] = m) && U, {})), l = q(() => o.value.length), p = /* @__PURE__ */ Ct(null), c = /* @__PURE__ */ Ct(!1), h = /* @__PURE__ */ Ct({
      mouseDown: !1,
      dragging: !1,
      activeSplitter: null,
      cursorOffset: 0
    }), b = /* @__PURE__ */ Ct({
      splitter: null,
      timeoutId: null
    }), C = q(() => ({
      [`splitpanes splitpanes--${i.horizontal ? "horizontal" : "vertical"}`]: !0,
      "splitpanes--dragging": h.value.dragging,
      "splitpanes--ready": c.value
    })), N = () => {
      document.addEventListener("mousemove", L, { passive: !1 }), document.addEventListener("mouseup", D), "ontouchstart" in window && (document.addEventListener("touchmove", L, { passive: !1 }), document.addEventListener("touchend", D));
    }, S = () => {
      document.removeEventListener("mousemove", L, { passive: !1 }), document.removeEventListener("mouseup", D), "ontouchstart" in window && (document.removeEventListener("touchmove", L, { passive: !1 }), document.removeEventListener("touchend", D));
    }, R = (U, m) => {
      let w = U.target.closest(".splitpanes__splitter");
      if (w) {
        let { left: A, top: x } = w.getBoundingClientRect(), { clientX: O, clientY: z } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
        h.value.cursorOffset = i.horizontal ? z - x : O - A;
      }
      N(), h.value.mouseDown = !0, h.value.activeSplitter = m, document.documentElement.style.cursor = i.horizontal ? "row-resize" : "col-resize";
    }, L = (U) => {
      h.value.mouseDown && (U.preventDefault(), h.value.dragging || (window.getSelection()?.removeAllRanges(), h.value.dragging = !0), requestAnimationFrame(() => {
        P(te(U)), nt("resize", { event: U }, !0);
      }));
    }, D = (U) => {
      h.value.dragging && (window.getSelection()?.removeAllRanges(), nt("resized", { event: U }, !0)), h.value.mouseDown = !1, h.value.activeSplitter = null, setTimeout(() => {
        h.value.dragging = !1, S(), document.documentElement.style.cursor = "";
      }, 100);
    }, H = (U, m) => {
      "ontouchstart" in window && (U.preventDefault(), b.value.splitter === m ? (clearTimeout(b.value.timeoutId), b.value.timeoutId = null, $(U, m), b.value.splitter = null) : (b.value.splitter = m, b.value.timeoutId = setTimeout(() => b.value.splitter = null, 500))), h.value.dragging || nt("splitter-click", {
        event: U,
        index: m
      }, !0);
    }, $ = (U, m) => {
      if (nt("splitter-dblclick", {
        event: U,
        index: m
      }, !0), i.maximizePanes) {
        let w = 0;
        o.value = o.value.map((A, x) => (A.size = x === m ? A.max : A.min, x !== m && (w += A.min), A)), o.value[m].size -= w, nt("pane-maximize", {
          event: U,
          index: m,
          pane: o.value[m]
        }), nt("resized", {
          event: U,
          index: m
        }, !0);
      }
    }, ce = (U, m) => {
      if (!i.keyboardStep) return;
      let w = i.horizontal ? U.key === "ArrowDown" : U.key === "ArrowRight", A = i.horizontal ? U.key === "ArrowUp" : U.key === "ArrowLeft";
      if (!w && !A) return;
      U.preventDefault(), h.value.activeSplitter = m;
      let x = (w ? 1 : -1) * (i.rtl && !i.horizontal ? -1 : 1), O = X(m) + o.value[m].size;
      le(Math.min(Math.max(O + x * i.keyboardStep, 0), 100)), nt("resize", { event: U }, !0), nt("resized", { event: U }, !0), h.value.activeSplitter = null;
    }, pe = (U, m) => {
      let w = s.value[m];
      w && nt("pane-click", {
        event: U,
        index: w.index,
        pane: w
      });
    }, te = (U) => {
      let m = p.value.getBoundingClientRect(), { clientX: w, clientY: A } = "ontouchstart" in window && U.touches ? U.touches[0] : U;
      return {
        x: w - (i.horizontal ? 0 : h.value.cursorOffset) - m.left,
        y: A - (i.horizontal ? h.value.cursorOffset : 0) - m.top
      };
    }, ne = (U) => {
      U = U[i.horizontal ? "y" : "x"];
      let m = p.value[i.horizontal ? "clientHeight" : "clientWidth"];
      return i.rtl && !i.horizontal && (U = m - U), U * 100 / m;
    }, P = (U) => {
      le(ne(U));
    }, le = (U) => {
      let m = h.value.activeSplitter;
      if (m === null || m >= o.value.length - 1) return;
      let w = {
        prevPanesSize: X(m),
        nextPanesSize: ie(m),
        prevReachedMinPanes: 0,
        nextReachedMinPanes: 0
      }, A = 0 + (i.pushOtherPanes ? 0 : w.prevPanesSize), x = 100 - (i.pushOtherPanes ? 0 : w.nextPanesSize);
      U = Math.max(Math.min(U, x), A);
      let O = [m, m + 1], z = o.value[O[0]] || null, V = o.value[O[1]] || null, K = z !== null && z.max < 100 && U >= z.max + w.prevPanesSize, J = V !== null && V.max < 100 && U <= 100 - (V.max + ie(m + 1));
      if (K || J) {
        K ? (z.size = z.max, V.size = Math.min(Math.max(100 - z.max - w.prevPanesSize - w.nextPanesSize, V.min), V.max)) : (z.size = Math.min(Math.max(100 - V.max - w.prevPanesSize - ie(m + 1), z.min), z.max), V.size = V.max);
        return;
      }
      if (i.pushOtherPanes) {
        let j = ge(w, U);
        if (!j) return;
        ({ sums: w, panesToResize: O } = j), z = o.value[O[0]] || null, V = o.value[O[1]] || null;
      }
      z !== null && (z.size = Math.min(Math.max(U - w.prevPanesSize - w.prevReachedMinPanes, z.min), z.max)), V !== null && (V.size = Math.min(Math.max(100 - U - w.nextPanesSize - w.nextReachedMinPanes, V.min), V.max));
    }, ge = (U, m) => {
      let w = h.value.activeSplitter, A = [w, w + 1];
      if (m < U.prevPanesSize + o.value[A[0]].min) {
        if (A[0] = M(w).index, U.prevReachedMinPanes = 0, A[0] < w && o.value.forEach((x, O) => {
          O > A[0] && O <= w && (x.size = x.min, U.prevReachedMinPanes += x.min);
        }), A[0] === void 0) return U.prevReachedMinPanes = 0, o.value[0].size = o.value[0].min, o.value.forEach((x, O) => {
          O > 0 && O <= w && (x.size = x.min, U.prevReachedMinPanes += x.min);
        }), o.value[A[1]].size = 100 - U.prevReachedMinPanes - o.value[0].min - U.prevPanesSize - U.nextPanesSize, null;
        U.prevPanesSize = X(A[0]);
      }
      return m > 100 - U.nextPanesSize - o.value[A[1]].min && (A[1] = F(w).index, U.nextReachedMinPanes = 0, A[1] > w + 1 && o.value.forEach((x, O) => {
        O > w && O < A[1] && (x.size = x.min, U.nextReachedMinPanes += x.min);
      }), U.nextPanesSize = A[1] === void 0 ? 0 : ie(A[1] - 1), A[1] === void 0) ? (U.nextReachedMinPanes = 0, o.value.forEach((x, O) => {
        O >= w + 1 && (x.size = x.min, U.nextReachedMinPanes += x.min);
      }), A[0] !== void 0 && (o.value[A[0]].size = 100 - U.prevPanesSize - ie(A[0] - 1)), null) : {
        sums: U,
        panesToResize: A
      };
    }, X = (U) => o.value.reduce((m, w, A) => m + (A < U ? w.size : 0), 0), ie = (U) => o.value.reduce((m, w, A) => m + (A > U + 1 ? w.size : 0), 0), M = (U) => [...o.value].reverse().find((m) => m.index < U && m.size > m.min) || {}, F = (U) => o.value.find((m) => m.index > U + 1 && m.size > m.min) || {}, W = () => {
      let U = Array.from(p.value?.children || []);
      for (let m of U) {
        let w = m.classList.contains("splitpanes__pane"), A = m.classList.contains("splitpanes__splitter");
        !w && !A && (m.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
      }
    }, oe = (U, m, w = !1) => {
      let A = U - 1, x = document.createElement("div");
      x.classList.add("splitpanes__splitter"), w || (x.onmousedown = (O) => R(O, A), typeof window < "u" && "ontouchstart" in window && (x.ontouchstart = (O) => R(O, A)), x.onclick = (O) => H(O, A + 1), i.keyboardStep && (x.setAttribute("tabindex", "0"), x.setAttribute("role", "separator"), x.setAttribute("aria-orientation", i.horizontal ? "horizontal" : "vertical"), x.onkeydown = (O) => ce(O, A))), x.ondblclick = (O) => $(O, A + 1), m.parentNode.insertBefore(x, m);
    }, Q = (U) => {
      U.onmousedown = null, U.onclick = null, U.ondblclick = null, U.onkeydown = null, U.remove();
    }, de = () => {
      let U = Array.from(p.value?.children || []);
      for (let w of U) w.className.includes("splitpanes__splitter") && Q(w);
      let m = 0;
      for (let w of U) w.className.includes("splitpanes__pane") && (!m && i.firstSplitter ? oe(m, w, !0) : m && oe(m, w), m++);
    }, ve = ({ uid: U, ...m }) => {
      let w = s.value[U];
      for (let [A, x] of Object.entries(m)) w[A] = x;
    }, we = !1, Ce = (U) => {
      let m = -1;
      Array.from(p.value?.children || []).some((w) => (w.className.includes("splitpanes__pane") && m++, w.isSameNode(U.el))), o.value.splice(m, 0, {
        ...U,
        index: m
      }), o.value.forEach((w, A) => w.index = A), c.value && !we && (we = !0, hi(() => {
        de(), Te({ addedPane: o.value[m] }), nt("pane-add", { pane: o.value[m] }), we = !1;
      }));
    }, Ve = (U) => {
      let m = o.value.findIndex((A) => A.id === U);
      o.value[m].el = null;
      let w = o.value.splice(m, 1)[0];
      o.value.forEach((A, x) => A.index = x), hi(() => {
        de(), nt("pane-remove", { pane: w }), Te({ removedPane: {
          ...w
        } });
      });
    }, Te = (U = {}) => {
      !U.addedPane && !U.removedPane ? Qe() : o.value.some((m) => m.givenSize !== null || m.min || m.max < 100) ? ft(U) : tt(), c.value && nt("resized");
    }, tt = () => {
      let U = 100 / l.value, m = 100, w = [], A = [];
      for (let x of o.value) x.size = Math.max(Math.min(U, x.max), x.min), m -= x.size, x.size >= x.max && w.push(x.id), x.size <= x.min && A.push(x.id);
      Math.abs(m) > 0.1 && bt(m, w, A);
    }, Qe = () => {
      let U = 100, m = [], w = [], A = 0;
      for (let O of o.value) U -= O.size, O.givenSize !== null && A++, O.size >= O.max && m.push(O.id), O.size <= O.min && w.push(O.id);
      let x = 100;
      if (U > 0.1) {
        for (let O of o.value) O.givenSize === null && (O.size = Math.max(Math.min(U / (l.value - A), O.max), O.min)), x -= O.size;
        x > 0.1 && bt(x, m, w);
      }
    }, ft = ({ addedPane: U, removedPane: m } = {}) => {
      let w = o.value.reduce((K, J) => K + (J.givenSize === null ? 0 : J.givenSize), 0), A = o.value.filter((K) => K.givenSize === null).length, x = A > 0 ? (100 - w) / A : 0, O = 0, z = [], V = [];
      for (let K of o.value) O -= K.size, K.size >= K.max && z.push(K.id), K.size <= K.min && V.push(K.id);
      if (!(Math.abs(O) < 0.1)) {
        O = 100;
        for (let K of o.value) K.givenSize === null && (K.size = Math.max(Math.min(x, K.max), K.min)), O -= K.size, K.size >= K.max && z.push(K.id), K.size <= K.min && V.push(K.id);
        Math.abs(O) > 0.1 && bt(O, z, V);
      }
    }, bt = (U, m, w) => {
      let A;
      A = U > 0 ? U / (l.value - m.length) : U / (l.value - w.length), o.value.forEach((x, O) => {
        if (U > 0 && !m.includes(x.id)) {
          let z = Math.max(Math.min(x.size + A, x.max), x.min), V = z - x.size;
          U -= V, x.size = z;
        } else if (!w.includes(x.id)) {
          let z = Math.max(Math.min(x.size + A, x.max), x.min), V = z - x.size;
          U -= V, x.size = z;
        }
      }), Math.abs(U) > 0.1 && c.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
    }, nt = (U, m = void 0, w = !1) => {
      let A = m?.index ?? h.value.activeSplitter ?? null;
      n(U, {
        ...m,
        ...A !== null && { index: A },
        ...w && A !== null && {
          prevPane: o.value[A - +!!i.firstSplitter],
          nextPane: o.value[A + +!i.firstSplitter]
        },
        panes: o.value.map((x) => ({
          min: x.min,
          max: x.max,
          size: x.size
        }))
      });
    };
    an(() => i.firstSplitter, () => de()), an(() => i.horizontal, (U) => hi(() => {
      n("direction-changed", {
        horizontal: U,
        panes: o.value.map((m) => ({
          min: m.min,
          max: m.max,
          size: m.size
        }))
      });
    })), Vi(() => {
      W(), de(), Te(), nt("ready"), c.value = !0;
    }), Ya(() => c.value = !1);
    let kt = () => {
      let { class: U, ...m } = a;
      return en("div", {
        ref: p,
        class: [C.value, U],
        ...m
      }, r.default?.());
    };
    return Cn("panes", o), Cn("indexedPanes", s), Cn("horizontal", q(() => i.horizontal)), Cn("requestUpdate", ve), Cn("onPaneAdd", Ce), Cn("onPaneRemove", Ve), Cn("onPaneClick", pe), (U, m) => (y(), Be(Bc(kt)));
  }
}), Fb = {
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
    let t = e, n = zt("requestUpdate"), i = zt("onPaneAdd"), a = zt("horizontal"), r = zt("onPaneRemove"), o = zt("onPaneClick"), s = _a()?.uid, l = zt("indexedPanes"), p = q(() => l.value[s]), c = /* @__PURE__ */ Ct(null), h = q(() => {
      let S = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
      return Math.max(Math.min(S, C.value), b.value);
    }), b = q(() => {
      let S = parseFloat(t.minSize);
      return isNaN(S) ? 0 : S;
    }), C = q(() => {
      let S = parseFloat(t.maxSize);
      return isNaN(S) ? 100 : S;
    }), N = q(() => {
      let S = p.value?.size ?? (t.size === void 0 ? void 0 : h.value);
      return S === void 0 ? "" : `${a.value ? "height" : "width"}: ${S}%`;
    });
    return an(() => h.value, (S) => n({
      uid: s,
      size: S
    })), an(() => b.value, (S) => n({
      uid: s,
      min: S
    })), an(() => C.value, (S) => n({
      uid: s,
      max: S
    })), Vi(() => {
      i({
        id: s,
        el: c.value,
        min: b.value,
        max: C.value,
        givenSize: t.size === void 0 ? null : h.value,
        size: h.value
      });
    }), Ya(() => r(s)), (S, R) => (y(), E("div", {
      ref_key: "paneEl",
      ref: c,
      class: "splitpanes__pane",
      onClick: R[0] ||= (L) => v(o)(L, S._.uid),
      style: kn(N.value)
    }, [De(S.$slots, "default")], 4));
  }
}, $b = "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z", zb = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", Ub = "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z", Bb = "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 18H9V6H20Z";
const Zc = 1024, Up = Zc / 2, ns = (e) => document.documentElement.clientWidth < e, Bp = /* @__PURE__ */ Ct(ns(Zc)), Hp = /* @__PURE__ */ Ct(ns(Up));
window.addEventListener("resize", () => {
  Bp.value = ns(Zc), Hp.value = ns(Up);
}, { passive: !0 });
function co() {
  return /* @__PURE__ */ Hr(Bp);
}
function Hb() {
  return /* @__PURE__ */ Hr(Hp);
}
class jb {
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
    return d("", t, n, void 0, { bundle: this.bundle });
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
    return hb("", t, n, i, a, { bundle: this.bundle });
  }
}
class Vb {
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
    return this.setLanguage(tl().replace("-", "_"));
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
    const t = new jb((n) => mb(n, this.language));
    return this.language in this.translations && t.addTranslations(this.translations[this.language]), t;
  }
}
function Kb() {
  return new Vb();
}
const jp = Kb().detectLanguage().build(), St = (...e) => jp.gettext(...e);
function Ki(...e) {
  for (const t of e)
    if (!t.registered) {
      for (const { l: n, t: i } of t) {
        if (n !== tl() || !i)
          continue;
        const a = Object.fromEntries(Object.entries(i).map(([r, o]) => [
          r,
          {
            msgid: r,
            msgid_plural: o.p,
            msgstr: o.v
          }
        ]));
        jp.addTranslations({
          translations: {
            "": a
          }
        });
      }
      t.registered = !0;
    }
}
const Gb = [{ l: "ar", t: { Actions: { v: ["إجراءات"] } } }, { l: "ast", t: { Actions: { v: ["Aiciones"] } } }, { l: "br", t: { Actions: { v: ["Oberioù"] } } }, { l: "ca", t: { Actions: { v: ["Accions"] } } }, { l: "cs", t: { Actions: { v: ["Akce"] } } }, { l: "cs-CZ", t: { Actions: { v: ["Akce"] } } }, { l: "da", t: { Actions: { v: ["Handlinger"] } } }, { l: "de", t: { Actions: { v: ["Aktionen"] } } }, { l: "de-DE", t: { Actions: { v: ["Aktionen"] } } }, { l: "el", t: { Actions: { v: ["Ενέργειες"] } } }, { l: "en-GB", t: { Actions: { v: ["Actions"] } } }, { l: "eo", t: { Actions: { v: ["Agoj"] } } }, { l: "es", t: { Actions: { v: ["Acciones"] } } }, { l: "es-AR", t: { Actions: { v: ["Acciones"] } } }, { l: "es-EC", t: { Actions: { v: ["Acciones"] } } }, { l: "es-MX", t: { Actions: { v: ["Acciones"] } } }, { l: "et-EE", t: { Actions: { v: ["Tegevus"] } } }, { l: "eu", t: { Actions: { v: ["Ekintzak"] } } }, { l: "fa", t: { Actions: { v: ["کنش‌ها"] } } }, { l: "fi", t: { Actions: { v: ["Toiminnot"] } } }, { l: "fr", t: { Actions: { v: ["Actions"] } } }, { l: "ga", t: { Actions: { v: ["Gníomhartha"] } } }, { l: "gl", t: { Actions: { v: ["Accións"] } } }, { l: "he", t: { Actions: { v: ["פעולות"] } } }, { l: "hr", t: { Actions: { v: ["Radnje"] } } }, { l: "hu", t: { Actions: { v: ["Műveletek"] } } }, { l: "id", t: { Actions: { v: ["Tindakan"] } } }, { l: "is", t: { Actions: { v: ["Aðgerðir"] } } }, { l: "it", t: { Actions: { v: ["Azioni"] } } }, { l: "ja", t: { Actions: { v: ["操作"] } } }, { l: "ja-JP", t: { Actions: { v: ["操作"] } } }, { l: "ko", t: { Actions: { v: ["동작"] } } }, { l: "lo", t: { Actions: { v: ["ການກະທຳ"] } } }, { l: "lt-LT", t: { Actions: { v: ["Veiksmai"] } } }, { l: "lv", t: {} }, { l: "mk", t: { Actions: { v: ["Акции"] } } }, { l: "mn", t: { Actions: { v: ["Үйлдлүүд"] } } }, { l: "my", t: { Actions: { v: ["လုပ်ဆောင်ချက်များ"] } } }, { l: "nb", t: { Actions: { v: ["Handlinger"] } } }, { l: "nl", t: { Actions: { v: ["Acties"] } } }, { l: "oc", t: { Actions: { v: ["Accions"] } } }, { l: "pl", t: { Actions: { v: ["Działania"] } } }, { l: "pt-BR", t: { Actions: { v: ["Ações"] } } }, { l: "pt-PT", t: { Actions: { v: ["Ações"] } } }, { l: "ro", t: { Actions: { v: ["Acțiuni"] } } }, { l: "ru", t: { Actions: { v: ["Действия "] } } }, { l: "sk", t: { Actions: { v: ["Akcie"] } } }, { l: "sl", t: { Actions: { v: ["Dejanja"] } } }, { l: "sr", t: { Actions: { v: ["Радње"] } } }, { l: "sv", t: { Actions: { v: ["Åtgärder"] } } }, { l: "tr", t: { Actions: { v: ["İşlemler"] } } }, { l: "uk", t: { Actions: { v: ["Дії"] } } }, { l: "uz", t: { Actions: { v: ["Harakatlar"] } } }, { l: "zh-CN", t: { Actions: { v: ["行为"] } } }, { l: "zh-HK", t: { Actions: { v: ["動作"] } } }, { l: "zh-TW", t: { Actions: { v: ["動作"] } } }], qb = [{ l: "ar", t: { "Cancel changes": { v: ["إلغاء التغييرات"] }, "Confirm changes": { v: ["تأكيد التغييرات"] } } }, { l: "ast", t: { "Cancel changes": { v: ["Encaboxar los cambeos"] }, "Confirm changes": { v: ["Confirmar los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Cancel changes": { v: ["Cancel·la els canvis"] }, "Confirm changes": { v: ["Confirmeu els canvis"] } } }, { l: "cs", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "cs-CZ", t: { "Cancel changes": { v: ["Zrušit změny"] }, "Confirm changes": { v: ["Potvrdit změny"] } } }, { l: "da", t: { "Cancel changes": { v: ["Annuller ændringer"] }, "Confirm changes": { v: ["Bekræft ændringer"] } } }, { l: "de", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "de-DE", t: { "Cancel changes": { v: ["Änderungen verwerfen"] }, "Confirm changes": { v: ["Änderungen bestätigen"] } } }, { l: "el", t: { "Cancel changes": { v: ["Ακύρωση αλλαγών"] }, "Confirm changes": { v: ["Επιβεβαίωση αλλαγών"] } } }, { l: "en-GB", t: { "Cancel changes": { v: ["Cancel changes"] }, "Confirm changes": { v: ["Confirm changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-AR", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-EC", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "es-MX", t: { "Cancel changes": { v: ["Cancelar cambios"] }, "Confirm changes": { v: ["Confirmar cambios"] } } }, { l: "et-EE", t: { "Cancel changes": { v: ["Tühista muudatused"] }, "Confirm changes": { v: ["Kinnita muudatused"] } } }, { l: "eu", t: { "Cancel changes": { v: ["Ezeztatu aldaketak"] }, "Confirm changes": { v: ["Baieztatu aldaketak"] } } }, { l: "fa", t: { "Cancel changes": { v: ["لغو تغییرات"] }, "Confirm changes": { v: ["تایید تغییرات"] } } }, { l: "fi", t: { "Cancel changes": { v: ["Peruuta muutokset"] }, "Confirm changes": { v: ["Vahvista muutokset"] } } }, { l: "fr", t: { "Cancel changes": { v: ["Annuler les modifications"] }, "Confirm changes": { v: ["Confirmer les modifications"] } } }, { l: "ga", t: { "Cancel changes": { v: ["Cealaigh athruithe"] }, "Confirm changes": { v: ["Deimhnigh na hathruithe"] } } }, { l: "gl", t: { "Cancel changes": { v: ["Cancelar os cambios"] }, "Confirm changes": { v: ["Confirma os cambios"] } } }, { l: "he", t: { "Cancel changes": { v: ["ביטול שינויים"] }, "Confirm changes": { v: ["אישור השינויים"] } } }, { l: "hr", t: { "Cancel changes": { v: ["Otkaži promjene"] }, "Confirm changes": { v: ["Potvrdi promjene"] } } }, { l: "hu", t: { "Cancel changes": { v: ["Változtatások elvetése"] }, "Confirm changes": { v: ["Változtatások megerősítése"] } } }, { l: "id", t: { "Cancel changes": { v: ["Batalkan perubahan"] }, "Confirm changes": { v: ["Konfirmasikan perubahan"] } } }, { l: "is", t: { "Cancel changes": { v: ["Hætta við breytingar"] }, "Confirm changes": { v: ["Staðfesta breytingar"] } } }, { l: "it", t: { "Cancel changes": { v: ["Annulla modifiche"] }, "Confirm changes": { v: ["Conferma modifiche"] } } }, { l: "ja", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ja-JP", t: { "Cancel changes": { v: ["変更をキャンセル"] }, "Confirm changes": { v: ["変更を承認"] } } }, { l: "ko", t: { "Cancel changes": { v: ["변경 취소"] }, "Confirm changes": { v: ["변경 사항 확인"] } } }, { l: "lo", t: { "Cancel changes": { v: ["ຍົກເລີກການປ່ຽນແປງ"] }, "Confirm changes": { v: ["ຢືນຢັນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Cancel changes": { v: ["Atsisakyti pakeitimų"] }, "Confirm changes": { v: ["Patvirtinti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Cancel changes": { v: ["Откажи ги промените"] }, "Confirm changes": { v: ["Потврди ги промените"] } } }, { l: "mn", t: { "Cancel changes": { v: ["Өөрчлөлтийг цуцлах"] }, "Confirm changes": { v: ["Өөрчлөлтийг баталгаажуулах"] } } }, { l: "my", t: { "Cancel changes": { v: ["ပြောင်းလဲမှုများ ပယ်ဖျက်ရန်"] }, "Confirm changes": { v: ["ပြောင်းလဲမှုများ အတည်ပြုရန်"] } } }, { l: "nb", t: { "Cancel changes": { v: ["Avbryt endringer"] }, "Confirm changes": { v: ["Bekreft endringer"] } } }, { l: "nl", t: { "Cancel changes": { v: ["Wijzigingen annuleren"] }, "Confirm changes": { v: ["Wijzigingen bevestigen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Cancel changes": { v: ["Anuluj zmiany"] }, "Confirm changes": { v: ["Potwierdź zmiany"] } } }, { l: "pt-BR", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "pt-PT", t: { "Cancel changes": { v: ["Cancelar alterações"] }, "Confirm changes": { v: ["Confirmar alterações"] } } }, { l: "ro", t: { "Cancel changes": { v: ["Anulează modificările"] }, "Confirm changes": { v: ["Confirmați modificările"] } } }, { l: "ru", t: { "Cancel changes": { v: ["Отменить изменения"] }, "Confirm changes": { v: ["Подтвердить изменения"] } } }, { l: "sk", t: { "Cancel changes": { v: ["Zrušiť zmeny"] }, "Confirm changes": { v: ["Potvrdiť zmeny"] } } }, { l: "sl", t: { "Cancel changes": { v: ["Prekliči spremembe"] }, "Confirm changes": { v: ["Potrdi spremembe"] } } }, { l: "sr", t: { "Cancel changes": { v: ["Откажи измене"] }, "Confirm changes": { v: ["Потврдите измене"] } } }, { l: "sv", t: { "Cancel changes": { v: ["Avbryt ändringar"] }, "Confirm changes": { v: ["Bekräfta ändringar"] } } }, { l: "tr", t: { "Cancel changes": { v: ["Değişiklikleri iptal et"] }, "Confirm changes": { v: ["Değişiklikleri onayla"] } } }, { l: "uk", t: { "Cancel changes": { v: ["Скасувати зміни"] }, "Confirm changes": { v: ["Підтвердити зміни"] } } }, { l: "uz", t: { "Cancel changes": { v: ["O'zgarishlarni bekor qilish"] }, "Confirm changes": { v: ["O'zgarishlarni tasdiqlang"] } } }, { l: "zh-CN", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["确认更改"] } } }, { l: "zh-HK", t: { "Cancel changes": { v: ["取消更改"] }, "Confirm changes": { v: ["確認更改"] } } }, { l: "zh-TW", t: { "Cancel changes": { v: ["取消變更"] }, "Confirm changes": { v: ["確認變更"] } } }], Wb = [{ l: "ar", t: { "Change name": { v: ["تغيير الاسم"] }, "Close sidebar": { v: ["قفل الشريط الجانبي"] }, Favorite: { v: ["المفضلة"] }, "Open sidebar": { v: ["إفتَح الشريط الجانبي"] } } }, { l: "ast", t: { "Change name": { v: ["Camudar el nome"] }, "Close sidebar": { v: ["Zarrar la barra llateral"] }, Favorite: { v: ["Favoritu"] }, "Open sidebar": { v: ["Abrir la barra llateral"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close sidebar": { v: ["Tancar la barra lateral"] }, Favorite: { v: ["Preferit"] } } }, { l: "cs", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] }, "Open sidebar": { v: ["Otevřít postranní panel"] } } }, { l: "cs-CZ", t: { "Change name": { v: ["Změnit název"] }, "Close sidebar": { v: ["Zavřít postranní panel"] }, Favorite: { v: ["Oblíbené"] } } }, { l: "da", t: { "Change name": { v: ["Ændre navn"] }, "Close sidebar": { v: ["Luk sidepanel"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Åbn sidepanel"] } } }, { l: "de", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "de-DE", t: { "Change name": { v: ["Namen ändern"] }, "Close sidebar": { v: ["Seitenleiste schließen"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Seitenleiste öffnen"] } } }, { l: "el", t: { "Change name": { v: ["Αλλαγή ονόματος"] }, "Close sidebar": { v: ["Κλείσιμο πλευρικής μπάρας"] }, Favorite: { v: ["Αγαπημένα"] }, "Open sidebar": { v: ["Άνοιγμα πλευρικής μπάρας"] } } }, { l: "en-GB", t: { "Change name": { v: ["Change name"] }, "Close sidebar": { v: ["Close sidebar"] }, Favorite: { v: ["Favourite"] }, "Open sidebar": { v: ["Open sidebar"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-AR", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "es-EC", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] } } }, { l: "es-MX", t: { "Change name": { v: ["Cambiar nombre"] }, "Close sidebar": { v: ["Cerrar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "et-EE", t: { "Change name": { v: ["Muuda nime"] }, "Close sidebar": { v: ["Sulge külgriba"] }, Favorite: { v: ["Lemmik"] }, "Open sidebar": { v: ["Ava külgriba"] } } }, { l: "eu", t: { "Change name": { v: ["Aldatu izena"] }, "Close sidebar": { v: ["Itxi albo-barra"] }, Favorite: { v: ["Gogokoa"] } } }, { l: "fa", t: { "Change name": { v: ["تغییر نام"] }, "Close sidebar": { v: ["بستن نوار کناری"] }, Favorite: { v: ["مورد علاقه"] }, "Open sidebar": { v: ["باز کردن نوار کنار"] } } }, { l: "fi", t: { "Change name": { v: ["Vaihda nimi"] }, "Close sidebar": { v: ["Sulje sivupalkki"] }, Favorite: { v: ["Suosikki"] }, "Open sidebar": { v: ["Avaa sivupalkki"] } } }, { l: "fr", t: { "Change name": { v: ["Modifier le nom"] }, "Close sidebar": { v: ["Fermer la barre latérale"] }, Favorite: { v: ["Favori"] }, "Open sidebar": { v: ["Ouvrir la barre latérale"] } } }, { l: "ga", t: { "Change name": { v: ["Athrú ainm"] }, "Close sidebar": { v: ["Dún barra taoibh"] }, Favorite: { v: ["is fearr leat"] }, "Open sidebar": { v: ["Oscail barra taoibh"] } } }, { l: "gl", t: { "Change name": { v: ["Cambiar o nome"] }, "Close sidebar": { v: ["Pechar a barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir a barra lateral"] } } }, { l: "he", t: { "Change name": { v: ["החלפת שם"] }, "Close sidebar": { v: ["סגירת סרגל הצד"] }, Favorite: { v: ["למועדפים"] } } }, { l: "hr", t: { "Change name": { v: ["Promjeni naziv"] }, "Close sidebar": { v: ["Zatvori bočnu traku"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Otvori bočnu traku"] } } }, { l: "hu", t: { "Change name": { v: ["Név módosítása"] }, "Close sidebar": { v: ["Oldalsáv bezárása"] }, Favorite: { v: ["Kedvenc"] }, "Open sidebar": { v: ["Oldalsáv megnyitása"] } } }, { l: "id", t: { "Change name": { v: ["Ubah nama"] }, "Close sidebar": { v: ["Tutup bilah sisi"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Buka bilah sisi"] } } }, { l: "is", t: { "Change name": { v: ["Breyta nafni"] }, "Close sidebar": { v: ["Loka hliðarstiku"] }, Favorite: { v: ["Eftirlæti"] }, "Open sidebar": { v: ["Opna hliðarspjald"] } } }, { l: "it", t: { "Change name": { v: ["Cambia nome"] }, "Close sidebar": { v: ["Chiudi la barra laterale"] }, Favorite: { v: ["Preferito"] } } }, { l: "ja", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ja-JP", t: { "Change name": { v: ["名前の変更"] }, "Close sidebar": { v: ["サイドバーを閉じる"] }, Favorite: { v: ["お気に入り"] }, "Open sidebar": { v: ["サイドバーを開く"] } } }, { l: "ko", t: { "Change name": { v: ["이름 변경"] }, "Close sidebar": { v: ["사이드바 닫기"] }, Favorite: { v: ["즐겨찾기"] }, "Open sidebar": { v: ["사이드바 열기"] } } }, { l: "lo", t: { "Change name": { v: ["ປ່ຽນຊື່"] }, "Close sidebar": { v: ["ປິດແຖບດ້ານຂ້າງ"] }, Favorite: { v: ["ລາຍການທີ່ມັກ"] }, "Open sidebar": { v: ["ເປີດແຖບດ້ານຂ້າງ"] } } }, { l: "lt-LT", t: { "Change name": { v: ["Pakeisti vardą"] }, "Close sidebar": { v: ["Užverti šoninę juostą"] }, Favorite: { v: ["Mėgstamiausias"] }, "Open sidebar": { v: ["Atverti šoninę juostą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Change name": { v: ["Промени име"] }, "Close sidebar": { v: ["Затвори странична лента"] }, Favorite: { v: ["Фаворити"] }, "Open sidebar": { v: ["Отвори странична лента"] } } }, { l: "mn", t: { "Change name": { v: ["Нэр солих"] }, "Close sidebar": { v: ["Хажуугийн самбарыг хаах"] }, Favorite: { v: ["Дуртай"] }, "Open sidebar": { v: ["Хажуугийн самбарыг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Change name": { v: ["Endre navn"] }, "Close sidebar": { v: ["Lukk sidepanel"] }, Favorite: { v: ["Favoritt"] }, "Open sidebar": { v: ["Åpne sidefelt"] } } }, { l: "nl", t: { "Change name": { v: ["Naam wijzigen"] }, "Close sidebar": { v: ["Zijbalk sluiten"] }, Favorite: { v: ["Favoriet"] }, "Open sidebar": { v: ["Zijbalk openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Change name": { v: ["Zmień nazwę"] }, "Close sidebar": { v: ["Zamknij pasek boczny"] }, Favorite: { v: ["Ulubiony"] }, "Open sidebar": { v: ["Otwórz pasek boczny"] } } }, { l: "pt-BR", t: { "Change name": { v: ["Mudar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "pt-PT", t: { "Change name": { v: ["Alterar nome"] }, "Close sidebar": { v: ["Fechar barra lateral"] }, Favorite: { v: ["Favorito"] }, "Open sidebar": { v: ["Abrir barra lateral"] } } }, { l: "ro", t: { "Change name": { v: ["Modifică numele"] }, "Close sidebar": { v: ["Închide bara laterală"] }, Favorite: { v: ["Favorit"] } } }, { l: "ru", t: { "Change name": { v: ["Изменить имя"] }, "Close sidebar": { v: ["Закрыть сайдбар"] }, Favorite: { v: ["Избранное"] }, "Open sidebar": { v: ["Открыть боковую панель"] } } }, { l: "sk", t: { "Change name": { v: ["Zmeniť názov"] }, "Close sidebar": { v: ["Zavrieť bočný panel"] }, Favorite: { v: ["Obľúbené"] }, "Open sidebar": { v: ["Otvoriť bočný panel"] } } }, { l: "sl", t: { "Close sidebar": { v: ["Zapri stransko vrstico"] }, Favorite: { v: ["Priljubljeno"] } } }, { l: "sr", t: { "Change name": { v: ["Измени назив"] }, "Close sidebar": { v: ["Затвори бочну траку"] }, Favorite: { v: ["Омиљени"] }, "Open sidebar": { v: ["Отвори бочну траку"] } } }, { l: "sv", t: { "Change name": { v: ["Ändra namn"] }, "Close sidebar": { v: ["Stäng sidofältet"] }, Favorite: { v: ["Favorit"] }, "Open sidebar": { v: ["Öppna sidofältet"] } } }, { l: "tr", t: { "Change name": { v: ["Adı değiştir"] }, "Close sidebar": { v: ["Yan çubuğu kapat"] }, Favorite: { v: ["Sık kullanılanlara ekle"] }, "Open sidebar": { v: ["Yan çubuğu aç"] } } }, { l: "uk", t: { "Change name": { v: ["Змінити назву"] }, "Close sidebar": { v: ["Закрити бічну панель"] }, Favorite: { v: ["Із зірочкою"] }, "Open sidebar": { v: ["Бокове меню"] } } }, { l: "uz", t: { "Change name": { v: ["Ismni o'zgartirish"] }, "Close sidebar": { v: ["Yon panelni yoping"] }, Favorite: { v: ["Tanlangan"] }, "Open sidebar": { v: ["Yon panelni oching"] } } }, { l: "zh-CN", t: { "Change name": { v: ["修改名称"] }, "Close sidebar": { v: ["关闭侧边栏"] }, Favorite: { v: ["喜爱"] }, "Open sidebar": { v: ["打开侧边栏"] } } }, { l: "zh-HK", t: { "Change name": { v: ["更改名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["喜愛"] }, "Open sidebar": { v: ["打開側邊欄"] } } }, { l: "zh-TW", t: { "Change name": { v: ["變更名稱"] }, "Close sidebar": { v: ["關閉側邊欄"] }, Favorite: { v: ["最愛"] }, "Open sidebar": { v: ["開啟側邊欄"] } } }], Yb = [{ l: "ar", t: { "Close navigation": { v: ["إغلاق التصفح"] }, "Open navigation": { v: ["فتح التنقُّل"] } } }, { l: "ast", t: { "Close navigation": { v: ["Zarrar la navegación"] }, "Open navigation": { v: ["Abrir la navegación"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Close navigation": { v: ["Tanca la navegació"] }, "Open navigation": { v: ["Obre la navegació"] } } }, { l: "cs", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "cs-CZ", t: { "Close navigation": { v: ["Zavřít navigaci"] }, "Open navigation": { v: ["Otevřít navigaci"] } } }, { l: "da", t: { "Close navigation": { v: ["Luk navigation"] }, "Open navigation": { v: ["Åben navigation"] } } }, { l: "de", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "de-DE", t: { "Close navigation": { v: ["Navigation schließen"] }, "Open navigation": { v: ["Navigation öffnen"] } } }, { l: "el", t: { "Close navigation": { v: ["Κλείσιμο πλοήγησης"] }, "Open navigation": { v: ["Άνοιγμα πλοήγησης"] } } }, { l: "en-GB", t: { "Close navigation": { v: ["Close navigation"] }, "Open navigation": { v: ["Open navigation"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-AR", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-EC", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "es-MX", t: { "Close navigation": { v: ["Cerrar navegación"] }, "Open navigation": { v: ["Abrir navegación"] } } }, { l: "et-EE", t: { "Close navigation": { v: ["Sulge navigatsioon"] }, "Open navigation": { v: ["Ava liikumisvaade"] } } }, { l: "eu", t: { "Close navigation": { v: ["Itxi nabigazioa"] }, "Open navigation": { v: ["Ireki nabigazioa"] } } }, { l: "fa", t: { "Close navigation": { v: ["بستن بخش ناوبری"] }, "Open navigation": { v: ["باز کردن بخش ناوبری"] } } }, { l: "fi", t: { "Close navigation": { v: ["Sulje navigaatio"] } } }, { l: "fr", t: { "Close navigation": { v: ["Fermer la navigation"] }, "Open navigation": { v: ["Ouvrir la navigation"] } } }, { l: "ga", t: { "Close navigation": { v: ["Dún nascleanúint"] }, "Open navigation": { v: ["Oscail nascleanúint"] } } }, { l: "gl", t: { "Close navigation": { v: ["Pechar a navegación"] }, "Open navigation": { v: ["Abrir a navegación"] } } }, { l: "he", t: { "Close navigation": { v: ["סגירת הניווט"] }, "Open navigation": { v: ["פתיחת ניווט"] } } }, { l: "hr", t: { "Close navigation": { v: ["Zatvori navigaciju"] }, "Open navigation": { v: ["Otvori navigaciju"] } } }, { l: "hu", t: { "Close navigation": { v: ["Navigáció bezárása"] }, "Open navigation": { v: ["Navigáció megnyitása"] } } }, { l: "id", t: { "Close navigation": { v: ["Tutup navigasi"] }, "Open navigation": { v: ["Buka navigasi"] } } }, { l: "is", t: { "Close navigation": { v: ["Loka leiðsagnarsleða"] } } }, { l: "it", t: { "Close navigation": { v: ["Chiudi la navigazione"] }, "Open navigation": { v: ["Apri la navigazione"] } } }, { l: "ja", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ja-JP", t: { "Close navigation": { v: ["ナビゲーションを閉じる"] }, "Open navigation": { v: ["ナビゲーションを開く"] } } }, { l: "ko", t: { "Close navigation": { v: ["탐색 닫기"] }, "Open navigation": { v: ["탐색 열기"] } } }, { l: "lo", t: { "Close navigation": { v: ["ປິດການນຳທາງ"] }, "Open navigation": { v: ["ເປີດການນຳທາງ"] } } }, { l: "lt-LT", t: { "Close navigation": { v: ["Užverti naršymą"] }, "Open navigation": { v: ["Atverti naršymą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Close navigation": { v: ["Затвори навигација"] }, "Open navigation": { v: ["Отвори навигација"] } } }, { l: "mn", t: { "Close navigation": { v: ["Навигацийг хаах"] }, "Open navigation": { v: ["Навигацийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Close navigation": { v: ["Lukk navigasjon"] }, "Open navigation": { v: ["Åpne navigasjon"] } } }, { l: "nl", t: { "Close navigation": { v: ["Navigatie sluiten"] }, "Open navigation": { v: ["Navigatie openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Close navigation": { v: ["Zamknij nawigację"] } } }, { l: "pt-BR", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "pt-PT", t: { "Close navigation": { v: ["Fechar navegação"] }, "Open navigation": { v: ["Abrir navegação"] } } }, { l: "ro", t: { "Close navigation": { v: ["Închideți navigarea"] }, "Open navigation": { v: ["Deschideți navigația"] } } }, { l: "ru", t: { "Close navigation": { v: ["Закрыть навигацию"] }, "Open navigation": { v: ["Открыть навигацию"] } } }, { l: "sk", t: { "Close navigation": { v: ["Zavrieť navigáciu"] } } }, { l: "sl", t: { "Close navigation": { v: ["Zapri krmarjenje"] }, "Open navigation": { v: ["Odpri krmarjenje"] } } }, { l: "sr", t: { "Close navigation": { v: ["Затвори навигацију"] }, "Open navigation": { v: ["Отвори навигацију"] } } }, { l: "sv", t: { "Close navigation": { v: ["Stäng navigeringen"] }, "Open navigation": { v: ["Öppna navigeringen"] } } }, { l: "tr", t: { "Close navigation": { v: ["Gezinmeyi kapat"] }, "Open navigation": { v: ["Gezinmeyi aç"] } } }, { l: "uk", t: { "Close navigation": { v: ["Закрити навігацію"] }, "Open navigation": { v: ["Перейти до навігації"] } } }, { l: "uz", t: { "Close navigation": { v: ["Navigatsiyani yopish"] }, "Open navigation": { v: ["Navigatsiyani oching"] } } }, { l: "zh-CN", t: { "Close navigation": { v: ["关闭导航"] } } }, { l: "zh-HK", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }, { l: "zh-TW", t: { "Close navigation": { v: ["關閉導航"] }, "Open navigation": { v: ["開啟導航"] } } }], Zb = [{ l: "ar", t: { "Collapse menu": { v: ["طي القائمة"] }, "Open menu": { v: ["إفتَح القائمة"] } } }, { l: "ast", t: { "Collapse menu": { v: ["Recoyer el menú"] }, "Open menu": { v: ["Abrir le menú"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "cs-CZ", t: { "Collapse menu": { v: ["Sbalit nabídku"] }, "Open menu": { v: ["Otevřít nabídku"] } } }, { l: "da", t: { "Collapse menu": { v: ["Skjul menuen"] }, "Open menu": { v: ["Åben menu"] } } }, { l: "de", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "de-DE", t: { "Collapse menu": { v: ["Menü einklappen"] }, "Open menu": { v: ["Menü öffnen"] } } }, { l: "el", t: { "Collapse menu": { v: ["Σύμπτυξη μενού"] }, "Open menu": { v: ["Άνοιγμα μενού"] } } }, { l: "en-GB", t: { "Collapse menu": { v: ["Collapse menu"] }, "Open menu": { v: ["Open menu"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-AR", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-EC", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "es-MX", t: { "Collapse menu": { v: ["Ocultar menú"] }, "Open menu": { v: ["Abrir menú"] } } }, { l: "et-EE", t: { "Collapse menu": { v: ["Ahenda menüü"] }, "Open menu": { v: ["Ava menüü"] } } }, { l: "eu", t: { "Collapse menu": { v: ["Tolestu menua"] }, "Open menu": { v: ["Ireki menua"] } } }, { l: "fa", t: { "Collapse menu": { v: ["بستن فهرست"] }, "Open menu": { v: ["باز کردن فهرست"] } } }, { l: "fi", t: { "Collapse menu": { v: ["Supista valikko"] }, "Open menu": { v: ["Avaa valikko"] } } }, { l: "fr", t: { "Collapse menu": { v: ["Réduire le menu"] }, "Open menu": { v: ["Ouvrir le menu"] } } }, { l: "ga", t: { "Collapse menu": { v: ["Roghchlár Laghdaigh"] }, "Open menu": { v: ["Roghchlár a oscailt"] } } }, { l: "gl", t: { "Collapse menu": { v: ["Contraer o menú"] }, "Open menu": { v: ["Abrir o menú"] } } }, { l: "he", t: { "Collapse menu": { v: ["צמצום התפריט"] }, "Open menu": { v: ["פתיחת תפריט"] } } }, { l: "hr", t: { "Collapse menu": { v: ["Sakrij izbornik"] }, "Open menu": { v: ["Otvori izbornik"] } } }, { l: "hu", t: { "Collapse menu": { v: ["Menü összecsukása"] }, "Open menu": { v: ["Menü megnyitása"] } } }, { l: "id", t: { "Collapse menu": { v: ["Ciutkan menu"] }, "Open menu": { v: ["Buka menu"] } } }, { l: "is", t: { "Collapse menu": { v: ["Fella valmynd saman"] }, "Open menu": { v: ["Opna valmynd"] } } }, { l: "it", t: { "Collapse menu": { v: ["Chiudi Menu"] }, "Open menu": { v: ["Apri il menu"] } } }, { l: "ja", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ja-JP", t: { "Collapse menu": { v: ["メニューの折りたたみ"] }, "Open menu": { v: ["メニューを開く"] } } }, { l: "ko", t: { "Collapse menu": { v: ["메뉴 접기"] }, "Open menu": { v: ["메뉴 열기"] } } }, { l: "lo", t: { "Collapse menu": { v: ["ຫຍໍ້ເມນູ"] }, "Open menu": { v: ["ເປີດເມນູ"] } } }, { l: "lt-LT", t: { "Collapse menu": { v: ["Suskleisti meniu"] }, "Open menu": { v: ["Atverti meniu"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Collapse menu": { v: ["Скриј мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "mn", t: { "Collapse menu": { v: ["Цэсийг хураах"] }, "Open menu": { v: ["Цэсийг нээх"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Collapse menu": { v: ["Skjul meny"] }, "Open menu": { v: ["Åpne meny"] } } }, { l: "nl", t: { "Collapse menu": { v: ["Menu inklappen"] }, "Open menu": { v: ["Menu openen"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Collapse menu": { v: ["Zwiń menu"] }, "Open menu": { v: ["Otwórz menu"] } } }, { l: "pt-BR", t: { "Collapse menu": { v: ["Recolher menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "pt-PT", t: { "Collapse menu": { v: ["Ocultar menu"] }, "Open menu": { v: ["Abrir menu"] } } }, { l: "ro", t: { "Collapse menu": { v: ["Restrânge meniul"] }, "Open menu": { v: ["Deschide meniul"] } } }, { l: "ru", t: { "Collapse menu": { v: ["Свернуть меню"] }, "Open menu": { v: ["Открыть меню"] } } }, { l: "sk", t: { "Collapse menu": { v: ["Zbaliť menu"] }, "Open menu": { v: ["Otvoriť menu"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Collapse menu": { v: ["Сажми мени"] }, "Open menu": { v: ["Отвори мени"] } } }, { l: "sv", t: { "Collapse menu": { v: ["Fäll ihop menyn"] }, "Open menu": { v: ["Öppna menyn"] } } }, { l: "tr", t: { "Collapse menu": { v: ["Menüyü daralt"] }, "Open menu": { v: ["Menüyü aç"] } } }, { l: "uk", t: { "Collapse menu": { v: ["Згорнути меню"] }, "Open menu": { v: ["Відкрити меню"] } } }, { l: "uz", t: { "Collapse menu": { v: ["Menyuni yig‘ish"] }, "Open menu": { v: ["Menyuni oching"] } } }, { l: "zh-CN", t: { "Collapse menu": { v: ["收起菜单"] }, "Open menu": { v: ["打开菜单"] } } }, { l: "zh-HK", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }, { l: "zh-TW", t: { "Collapse menu": { v: ["折疊選單"] }, "Open menu": { v: ["開啟選單"] } } }], Xb = [{ l: "ar", t: { "Edit item": { v: ["تعديل عنصر"] } } }, { l: "ast", t: { "Edit item": { v: ["Editar l'elementu"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Edit item": { v: ["Edita l'element"] } } }, { l: "cs", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "cs-CZ", t: { "Edit item": { v: ["Upravit položku"] } } }, { l: "da", t: { "Edit item": { v: ["Rediger emne"] } } }, { l: "de", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "de-DE", t: { "Edit item": { v: ["Element bearbeiten"] } } }, { l: "el", t: { "Edit item": { v: ["Επεξεργασία αντικειμένου"] } } }, { l: "en-GB", t: { "Edit item": { v: ["Edit item"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-AR", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-EC", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "es-MX", t: { "Edit item": { v: ["Editar elemento"] } } }, { l: "et-EE", t: { "Edit item": { v: ["Muuda objekti"] } } }, { l: "eu", t: { "Edit item": { v: ["Editatu elementua"] } } }, { l: "fa", t: { "Edit item": { v: ["ویرایش مورد"] } } }, { l: "fi", t: { "Edit item": { v: ["Muokkaa kohdetta"] } } }, { l: "fr", t: { "Edit item": { v: ["Éditer l'élément"] } } }, { l: "ga", t: { "Edit item": { v: ["Cuir mír in eagar"] } } }, { l: "gl", t: { "Edit item": { v: ["Editar o elemento"] } } }, { l: "he", t: { "Edit item": { v: ["עריכת פריט"] } } }, { l: "hr", t: { "Edit item": { v: ["Uredi stavku"] } } }, { l: "hu", t: { "Edit item": { v: ["Elem szerkesztése"] } } }, { l: "id", t: { "Edit item": { v: ["Edit item"] } } }, { l: "is", t: { "Edit item": { v: ["Breyta atriði"] } } }, { l: "it", t: { "Edit item": { v: ["Modifica l'elemento"] } } }, { l: "ja", t: { "Edit item": { v: ["編集"] } } }, { l: "ja-JP", t: { "Edit item": { v: ["編集"] } } }, { l: "ko", t: { "Edit item": { v: ["항목 수정"] } } }, { l: "lo", t: { "Edit item": { v: ["ແກ້ໄຂລາຍການ"] } } }, { l: "lt-LT", t: { "Edit item": { v: ["Taisyti elementą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Edit item": { v: ["Уреди"] } } }, { l: "mn", t: { "Edit item": { v: ["Зүйлийг засварлах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Edit item": { v: ["Rediger"] } } }, { l: "nl", t: { "Edit item": { v: ["Item bewerken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Edit item": { v: ["Edytuj element"] } } }, { l: "pt-BR", t: { "Edit item": { v: ["Editar item"] } } }, { l: "pt-PT", t: { "Edit item": { v: ["Editar item"] } } }, { l: "ro", t: { "Edit item": { v: ["Editați elementul"] } } }, { l: "ru", t: { "Edit item": { v: ["Изменить элемент"] } } }, { l: "sk", t: { "Edit item": { v: ["Upraviť položku"] } } }, { l: "sl", t: { "Edit item": { v: ["Uredi predmet"] } } }, { l: "sr", t: { "Edit item": { v: ["Уреди ставку"] } } }, { l: "sv", t: { "Edit item": { v: ["Redigera objektet"] } } }, { l: "tr", t: { "Edit item": { v: ["Ögeyi düzenle"] } } }, { l: "uk", t: { "Edit item": { v: ["Редагувати елемент"] } } }, { l: "uz", t: { "Edit item": { v: ["Elementni tahrirlash"] } } }, { l: "zh-CN", t: { "Edit item": { v: ["编辑项目"] } } }, { l: "zh-HK", t: { "Edit item": { v: ["編輯項目"] } } }, { l: "zh-TW", t: { "Edit item": { v: ["編輯項目"] } } }], Jb = [{ l: "ar", t: { "Go back to the list": { v: ["عودة إلى القائمة"] } } }, { l: "ast", t: { "Go back to the list": { v: ["Volver a la llista"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Go back to the list": { v: ["Torna a la llista"] } } }, { l: "cs", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "cs-CZ", t: { "Go back to the list": { v: ["Jít zpět na seznam"] } } }, { l: "da", t: { "Go back to the list": { v: ["Tilbage til listen"] } } }, { l: "de", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "de-DE", t: { "Go back to the list": { v: ["Zurück zur Liste"] } } }, { l: "el", t: { "Go back to the list": { v: ["Επιστροφή στην αρχική λίστα"] } } }, { l: "en-GB", t: { "Go back to the list": { v: ["Go back to the list"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-AR", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-EC", t: { "Go back to the list": { v: ["Volver a la lista"] } } }, { l: "es-MX", t: { "Go back to the list": { v: ["Regresar a la lista"] } } }, { l: "et-EE", t: { "Go back to the list": { v: ["Tagasi nimekirja juurde"] } } }, { l: "eu", t: { "Go back to the list": { v: ["Bueltatu zerrendara"] } } }, { l: "fa", t: { "Go back to the list": { v: ["برگشت به لیست"] } } }, { l: "fi", t: { "Go back to the list": { v: ["Takaisin listaan"] } } }, { l: "fr", t: { "Go back to the list": { v: ["Retourner à la liste"] } } }, { l: "ga", t: { "Go back to the list": { v: ["Téigh ar ais go dtí an liosta"] } } }, { l: "gl", t: { "Go back to the list": { v: ["Volver á lista"] } } }, { l: "he", t: { "Go back to the list": { v: ["חזרה לרשימה"] } } }, { l: "hr", t: { "Go back to the list": { v: ["Vrati se na popis"] } } }, { l: "hu", t: { "Go back to the list": { v: ["Ugrás vissza a listához"] } } }, { l: "id", t: { "Go back to the list": { v: ["Kembali ke daftar"] } } }, { l: "is", t: { "Go back to the list": { v: ["Fara til baka í listann"] } } }, { l: "it", t: { "Go back to the list": { v: ["Torna all'elenco"] } } }, { l: "ja", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ja-JP", t: { "Go back to the list": { v: ["リストに戻る"] } } }, { l: "ko", t: { "Go back to the list": { v: ["목록으로 돌아가기"] } } }, { l: "lo", t: { "Go back to the list": { v: ["ກັບໄປທີ່ລາຍການ"] } } }, { l: "lt-LT", t: { "Go back to the list": { v: ["Grįžti į sąrašą"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Go back to the list": { v: ["Врати се на листата"] } } }, { l: "mn", t: { "Go back to the list": { v: ["Жагсаалт руу буцах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Go back to the list": { v: ["Gå tilbake til listen"] } } }, { l: "nl", t: { "Go back to the list": { v: ["Ga terug naar de lijst"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Go back to the list": { v: ["Powrót do listy"] } } }, { l: "pt-BR", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "pt-PT", t: { "Go back to the list": { v: ["Voltar para a lista"] } } }, { l: "ro", t: { "Go back to the list": { v: ["Întoarceți-vă la listă"] } } }, { l: "ru", t: { "Go back to the list": { v: ["Вернуться к списку"] } } }, { l: "sk", t: { "Go back to the list": { v: ["Späť na zoznam"] } } }, { l: "sl", t: { "Go back to the list": { v: ["Vrni se na seznam"] } } }, { l: "sr", t: { "Go back to the list": { v: ["Назад на листу"] } } }, { l: "sv", t: { "Go back to the list": { v: ["Gå tillbaka till listan"] } } }, { l: "tr", t: { "Go back to the list": { v: ["Listeye dön"] } } }, { l: "uk", t: { "Go back to the list": { v: ["Повернутися до списку"] } } }, { l: "uz", t: { "Go back to the list": { v: ["Ro'yxatga qayting"] } } }, { l: "zh-CN", t: { "Go back to the list": { v: ["返回至列表"] } } }, { l: "zh-HK", t: { "Go back to the list": { v: ["返回清單"] } } }, { l: "zh-TW", t: { "Go back to the list": { v: ["回到清單"] } } }], Qb = [{ l: "ar", t: { "Keyboard navigation help": { v: ["مساعدة في التنقل باستعمال لوحة المفاتيح"] }, "Skip to app navigation": { v: ["تجاوَز إلى التنقل في التطبيق"] }, "Skip to main content": { v: ["تجاوَز إلى المحتوى الرئيسي"] } } }, { l: "ast", t: { "Keyboard navigation help": { v: ["Ayuda de la navegación pente'l tecláu"] }, "Skip to app navigation": { v: ["Dir a la navegación d'aplicaciones"] }, "Skip to main content": { v: ["Dir al conteníu principal"] } } }, { l: "br", t: {} }, { l: "ca", t: {} }, { l: "cs", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "cs-CZ", t: { "Keyboard navigation help": { v: ["Nápověda pro pohyb pomocí klávesnice"] }, "Skip to app navigation": { v: ["Přeskočit na navigaci aplikace"] }, "Skip to main content": { v: ["Přeskočit na hlavní obsah"] } } }, { l: "da", t: { "Keyboard navigation help": { v: ["Hjælp til tastaturnavigation"] }, "Skip to app navigation": { v: ["Spring til app navigation"] }, "Skip to main content": { v: ["Spring til hovedindhold"] } } }, { l: "de", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "de-DE", t: { "Keyboard navigation help": { v: ["Tastatur-Navigationshilfe"] }, "Skip to app navigation": { v: ["Zur App-Navigation springen"] }, "Skip to main content": { v: ["Zum Hauptinhalt springen"] } } }, { l: "el", t: { "Keyboard navigation help": { v: ["Βοήθεια πλοήγησης με πληκτρολόγιο"] }, "Skip to app navigation": { v: ["Μετάβαση στην πλοήγηση της εφαρμογής"] }, "Skip to main content": { v: ["Μετάβαση στο κύριο περιεχόμενο"] } } }, { l: "en-GB", t: { "Keyboard navigation help": { v: ["Keyboard navigation help"] }, "Skip to app navigation": { v: ["Skip to app navigation"] }, "Skip to main content": { v: ["Skip to main content"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de apps"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-AR", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "es-EC", t: {} }, { l: "es-MX", t: { "Keyboard navigation help": { v: ["Ayuda de navegación del teclado"] }, "Skip to app navigation": { v: ["Saltar a la navegación de app"] }, "Skip to main content": { v: ["Saltar al contenido principal"] } } }, { l: "et-EE", t: { "Keyboard navigation help": { v: ["Klahvistiku kasutuse abiteave"] }, "Skip to app navigation": { v: ["Suundu rakenduses liikumise valikute juurde"] }, "Skip to main content": { v: ["Suundu põhisisu juurde"] } } }, { l: "eu", t: {} }, { l: "fa", t: { "Keyboard navigation help": { v: ["راهنمای ناوبری صفحه کلید"] }, "Skip to app navigation": { v: ["رفتن به پیمایش برنامه"] }, "Skip to main content": { v: ["رفتن به محتوای اصلی"] } } }, { l: "fi", t: { "Keyboard navigation help": { v: ["Näppäimistönavigoinnin ohje"] }, "Skip to app navigation": { v: ["Siirry sovelluksen navigaatioon"] }, "Skip to main content": { v: ["Siirry pääsisältöön"] } } }, { l: "fr", t: { "Keyboard navigation help": { v: ["Aide à la navigation du clavier"] }, "Skip to app navigation": { v: ["Passer à l'app navigation"] }, "Skip to main content": { v: ["Passer au contenu principal"] } } }, { l: "ga", t: { "Keyboard navigation help": { v: ["Cabhair le nascleanúint méarchláir"] }, "Skip to app navigation": { v: ["Téigh ar aghaidh chuig nascleanúint aip"] }, "Skip to main content": { v: ["Téigh ar aghaidh chuig an bpríomhábhar"] } } }, { l: "gl", t: { "Keyboard navigation help": { v: ["Axuda á navegación co teclado"] }, "Skip to app navigation": { v: ["Ir á navegación da aplicación"] }, "Skip to main content": { v: ["Ir ao contido principal"] } } }, { l: "he", t: {} }, { l: "hr", t: { "Keyboard navigation help": { v: ["Pomoć za navigaciju tipkovnicom"] }, "Skip to app navigation": { v: ["Preskoči na navigaciju aplikacije"] }, "Skip to main content": { v: ["Preskoči na glavni sadržaj"] } } }, { l: "hu", t: { "Keyboard navigation help": { v: ["Billentyűzetes navigáció súgója"] }, "Skip to app navigation": { v: ["Ugrás az alkalmazásnavigációhoz"] }, "Skip to main content": { v: ["Ugrás a fő tartalomhoz"] } } }, { l: "id", t: { "Keyboard navigation help": { v: ["Bantuan navigasi keyboard"] }, "Skip to app navigation": { v: ["Lewati ke navigasi aplikasi"] }, "Skip to main content": { v: ["Lewati ke konten utama"] } } }, { l: "is", t: { "Keyboard navigation help": { v: ["Aðstoð við rötun á lyklaborði"] }, "Skip to app navigation": { v: ["Sleppa og fara í flakk innan forrits"] }, "Skip to main content": { v: ["Sleppa og fara í meginefni"] } } }, { l: "it", t: {} }, { l: "ja", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ja-JP", t: { "Keyboard navigation help": { v: ["キーボード・ナビゲーション・ヘルプ"] }, "Skip to app navigation": { v: ["アプリのナビゲーションへ移動"] }, "Skip to main content": { v: ["メインコンテンツへ移動"] } } }, { l: "ko", t: { "Keyboard navigation help": { v: ["키보드 탐색 도움말"] }, "Skip to app navigation": { v: ["앱 탐색으로 건너뛰기"] }, "Skip to main content": { v: ["본 내용으로 건너뛰기"] } } }, { l: "lo", t: { "Keyboard navigation help": { v: ["ການຊ່ວຍເຫຼືອການນຳທາງດ້ວຍຄີບອດ"] }, "Skip to app navigation": { v: ["ຂ້າມໄປທີ່ການນຳທາງຂອງແອັບ"] }, "Skip to main content": { v: ["ຂ້າມໄປທີ່ເນື້ອຫາຫຼັກ"] } } }, { l: "lt-LT", t: { "Keyboard navigation help": { v: ["Klaviatūros navigacijos pagalba"] }, "Skip to app navigation": { v: ["Pereiti prie programėlės naršymo"] }, "Skip to main content": { v: ["Pereiti prie pagrindinio turinio"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Keyboard navigation help": { v: ["Навигација со тастатура"] }, "Skip to app navigation": { v: ["Прескокни на навигација на апликацијата"] }, "Skip to main content": { v: ["Прескокни на главна содржина"] } } }, { l: "mn", t: { "Keyboard navigation help": { v: ["Гарын навигацийн тусламж"] }, "Skip to app navigation": { v: ["Аппын навигаци руу алгасах"] }, "Skip to main content": { v: ["Үндсэн агуулга руу алгасах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Keyboard navigation help": { v: ["Hjelp for tastaturnavigering"] }, "Skip to app navigation": { v: ["Hopp til appnavigering"] }, "Skip to main content": { v: ["Hopp til hovedinnhold"] } } }, { l: "nl", t: { "Keyboard navigation help": { v: ["Hulp voor toetsenbordnavigatie"] }, "Skip to app navigation": { v: ["Doorgaan naar app-navigatie"] }, "Skip to main content": { v: ["Naar hoofdinhoud gaan"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Keyboard navigation help": { v: ["Pomoc w nawigacji za pomocą klawiatury"] }, "Skip to app navigation": { v: ["Przewiń do nawigacji"] }, "Skip to main content": { v: ["Przewiń do głównych treści"] } } }, { l: "pt-BR", t: { "Keyboard navigation help": { v: ["Ajuda para navegação pelo teclado"] }, "Skip to app navigation": { v: ["Ir para navegação de aplicativo"] }, "Skip to main content": { v: ["Ir para conteúdo principal"] } } }, { l: "pt-PT", t: { "Keyboard navigation help": { v: ["Ajuda à navegação no teclado"] }, "Skip to app navigation": { v: ["Saltar para navegação da app"] }, "Skip to main content": { v: ["Saltar para conteúdo principal"] } } }, { l: "ro", t: {} }, { l: "ru", t: { "Keyboard navigation help": { v: ["Справка по навигации с помощью клавиатуры"] }, "Skip to app navigation": { v: ["Перейти к навигации по приложению"] }, "Skip to main content": { v: ["Перейти к основному содержанию"] } } }, { l: "sk", t: { "Keyboard navigation help": { v: ["Pomoc pri navigácii pomocou klávesnice"] }, "Skip to app navigation": { v: ["Preskočiť na navigáciu v aplikácii"] }, "Skip to main content": { v: ["Preskočiť na hlavný obsah"] } } }, { l: "sl", t: {} }, { l: "sr", t: { "Keyboard navigation help": { v: ["Помоћ за навигацију тастатуром"] }, "Skip to app navigation": { v: ["Прескочи на навигацију апликацијом"] }, "Skip to main content": { v: ["Прескочи на главни садржај"] } } }, { l: "sv", t: { "Keyboard navigation help": { v: ["Hjälp för tangentbordsnavigering"] }, "Skip to app navigation": { v: ["Hoppa till appnavigeringen"] }, "Skip to main content": { v: ["Hoppa till huvudinnehåll"] } } }, { l: "tr", t: { "Keyboard navigation help": { v: ["Klavye ile gezinme yardımı"] }, "Skip to app navigation": { v: ["Uygulama gezinmesine git"] }, "Skip to main content": { v: ["Ana içeriğe git"] } } }, { l: "uk", t: { "Keyboard navigation help": { v: ["Допомога з навігацією клавішами"] }, "Skip to app navigation": { v: ["Пропустити навігацію по застосунках"] }, "Skip to main content": { v: ["Перейти одразу до головного вмісту"] } } }, { l: "uz", t: { "Keyboard navigation help": { v: ["Klaviatura navigatsiyasi yordami"] }, "Skip to app navigation": { v: ["Ilova navigatsiyasiga oʻtish"] }, "Skip to main content": { v: ["Asosiy tarkibga o'tish"] } } }, { l: "zh-CN", t: { "Keyboard navigation help": { v: ["键盘导航栏帮助"] }, "Skip to app navigation": { v: ["跳转至应用程序导航页"] }, "Skip to main content": { v: ["跳转至主要内容"] } } }, { l: "zh-HK", t: { "Keyboard navigation help": { v: ["鍵盤導航幫助"] }, "Skip to app navigation": { v: ["跳至應用程式導航"] }, "Skip to main content": { v: ["跳至主要內容"] } } }, { l: "zh-TW", t: { "Keyboard navigation help": { v: ["鍵盤導航說明"] }, "Skip to app navigation": { v: ["略過應用程式導覽"] }, "Skip to main content": { v: ["跳至主要內容"] } } }], ey = [{ l: "ar", t: { "Undo changes": { v: ["تراجَع عن التغييرات"] } } }, { l: "ast", t: { "Undo changes": { v: ["Desfacer los cambeos"] } } }, { l: "br", t: {} }, { l: "ca", t: { "Undo changes": { v: ["Desfés els canvis"] } } }, { l: "cs", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "cs-CZ", t: { "Undo changes": { v: ["Vzít změny zpět"] } } }, { l: "da", t: { "Undo changes": { v: ["Fortryd ændringer"] } } }, { l: "de", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "de-DE", t: { "Undo changes": { v: ["Änderungen rückgängig machen"] } } }, { l: "el", t: { "Undo changes": { v: ["Αναίρεση Αλλαγών"] } } }, { l: "en-GB", t: { "Undo changes": { v: ["Undo changes"] } } }, { l: "eo", t: {} }, { l: "es", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-AR", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-EC", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "es-MX", t: { "Undo changes": { v: ["Deshacer cambios"] } } }, { l: "et-EE", t: { "Undo changes": { v: ["Pööra muudatused tagasi"] } } }, { l: "eu", t: { "Undo changes": { v: ["Aldaketak desegin"] } } }, { l: "fa", t: { "Undo changes": { v: ["لغو تغییرات"] } } }, { l: "fi", t: { "Undo changes": { v: ["Kumoa muutokset"] } } }, { l: "fr", t: { "Undo changes": { v: ["Annuler les changements"] } } }, { l: "ga", t: { "Undo changes": { v: ["Cealaigh athruithe"] } } }, { l: "gl", t: { "Undo changes": { v: ["Desfacer os cambios"] } } }, { l: "he", t: { "Undo changes": { v: ["ביטול שינויים"] } } }, { l: "hr", t: { "Undo changes": { v: ["Poništi promjene"] } } }, { l: "hu", t: { "Undo changes": { v: ["Változtatások visszavonása"] } } }, { l: "id", t: { "Undo changes": { v: ["Urungkan perubahan"] } } }, { l: "is", t: { "Undo changes": { v: ["Afturkalla breytingar"] } } }, { l: "it", t: { "Undo changes": { v: ["Cancella i cambiamenti"] } } }, { l: "ja", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ja-JP", t: { "Undo changes": { v: ["変更を取り消し"] } } }, { l: "ko", t: { "Undo changes": { v: ["변경 되돌리기"] } } }, { l: "lo", t: { "Undo changes": { v: ["ຍ້ອນຄືນການປ່ຽນແປງ"] } } }, { l: "lt-LT", t: { "Undo changes": { v: ["Atšaukti pakeitimus"] } } }, { l: "lv", t: {} }, { l: "mk", t: { "Undo changes": { v: ["Врати ги промените"] } } }, { l: "mn", t: { "Undo changes": { v: ["Өөрчлөлтийг буцаах"] } } }, { l: "my", t: {} }, { l: "nb", t: { "Undo changes": { v: ["Tilbakestill endringer"] } } }, { l: "nl", t: { "Undo changes": { v: ["Wijzigingen ongedaan maken"] } } }, { l: "oc", t: {} }, { l: "pl", t: { "Undo changes": { v: ["Cofnij zmiany"] } } }, { l: "pt-BR", t: { "Undo changes": { v: ["Desfazer modificações"] } } }, { l: "pt-PT", t: { "Undo changes": { v: ["Anular alterações"] } } }, { l: "ro", t: { "Undo changes": { v: ["Anularea modificărilor"] } } }, { l: "ru", t: { "Undo changes": { v: ["Отменить изменения"] } } }, { l: "sk", t: { "Undo changes": { v: ["Vrátiť zmeny"] } } }, { l: "sl", t: { "Undo changes": { v: ["Razveljavi spremembe"] } } }, { l: "sr", t: { "Undo changes": { v: ["Поништи измене"] } } }, { l: "sv", t: { "Undo changes": { v: ["Ångra ändringar"] } } }, { l: "tr", t: { "Undo changes": { v: ["Değişiklikleri geri al"] } } }, { l: "uk", t: { "Undo changes": { v: ["Скасувати зміни"] } } }, { l: "uz", t: { "Undo changes": { v: ["O'zgarishlarni bekor qilish"] } } }, { l: "zh-CN", t: { "Undo changes": { v: ["撤销更改"] } } }, { l: "zh-HK", t: { "Undo changes": { v: ["取消更改"] } } }, { l: "zh-TW", t: { "Undo changes": { v: ["還原變更"] } } }];
const ty = /* @__PURE__ */ Symbol(""), [ny] = window.OC?.config?.version?.split(".") ?? [], Vp = Number.parseInt(ny ?? "35"), iy = Vp < 32, Gi = Vp < 34, ay = /* @__PURE__ */ Symbol.for("NcFormBox:context");
function ry() {
  return zt(ay, {
    isInFormBox: !1,
    formBoxItemClass: void 0
  });
}
const et = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
}, oy = { class: "button-vue__wrapper" }, sy = { class: "button-vue__icon" }, ly = { class: "button-vue__text" }, cy = /* @__PURE__ */ Lt({
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
    const n = e, i = t, { formBoxItemClass: a } = ry(), r = zt(ty, null) !== null, o = q(() => r && n.to ? "RouterLink" : n.href ? "a" : "button"), s = q(() => o.value === "button" && typeof n.pressed == "boolean"), l = q(() => n.pressed ? "primary" : n.pressed === !1 && n.variant === "primary" ? "secondary" : n.variant), p = q(() => l.value.startsWith("tertiary")), c = q(() => n.alignment.split("-")[0]), h = q(() => n.alignment.includes("-")), b = zt("NcPopover:trigger:attrs", () => ({}), !1), C = q(() => b()), N = q(() => {
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
          ...C.value,
          "aria-pressed": n.pressed,
          type: n.type,
          disabled: n.disabled
        };
    });
    function S(R) {
      s.value && i("update:pressed", !n.pressed), i("click", R);
    }
    return (R, L) => (y(), Be(Bc(o.value), jt({
      class: ["button-vue", [
        `button-vue--size-${e.size}`,
        {
          [`button-vue--${l.value}`]: l.value,
          "button-vue--tertiary": p.value,
          "button-vue--wide": e.wide,
          [`button-vue--${c.value}`]: c.value !== "center",
          "button-vue--reverse": h.value,
          "button-vue--legacy": v(iy),
          "button-vue--legacy34": v(Gi)
        },
        v(a)
      ]],
      "aria-label": e.ariaLabel
    }, N.value, { onClick: S }), {
      default: Me(() => [
        u("span", oy, [
          u("span", sy, [
            De(R.$slots, "icon", {}, void 0, !0)
          ]),
          u("span", ly, [
            De(R.$slots, "default", {}, () => [
              Pe(f(e.text), 1)
            ], !0)
          ])
        ])
      ]),
      _: 3
    }, 16, ["class", "aria-label"]));
  }
}), Zn = /* @__PURE__ */ et(cy, [["__scopeId", "data-v-47ce59a3"]]), uy = ["aria-hidden", "aria-label"], dy = {
  key: 0,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, fy = ["d"], py = ["innerHTML"], hy = /* @__PURE__ */ Lt({
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
    ig((a) => ({
      fb515064: n.value
    }));
    const t = e, n = q(() => typeof t.size == "number" ? `${t.size}px` : t.size), i = q(() => {
      if (!t.svg || t.path)
        return;
      const a = Rp.sanitize(t.svg), r = new DOMParser().parseFromString(a, "image/svg+xml");
      return r.querySelector("parsererror") ? "" : (r.documentElement.id && r.documentElement.removeAttribute("id"), r.documentElement.outerHTML);
    });
    return (a, r) => (y(), E("span", {
      "aria-hidden": e.name ? void 0 : "true",
      "aria-label": e.name || void 0,
      class: Re(["icon-vue", {
        "icon-vue--directional": e.directional,
        "icon-vue--inline": e.inline
      }]),
      role: "img"
    }, [
      i.value ? (y(), E("span", {
        key: 1,
        innerHTML: i.value
      }, null, 8, py)) : (y(), E("svg", dy, [
        u("path", { d: e.path }, null, 8, fy)
      ]))
    ], 10, uy));
  }
}), nl = /* @__PURE__ */ et(hy, [["__scopeId", "data-v-aaedb1c3"]]);
vy();
function my(e) {
  if (!e || typeof e != "string")
    throw new Error("Invalid CSRF token given", { cause: { token: e } });
  globalThis._nc_auth_requestToken !== e && (globalThis._nc_auth_requestToken = e, globalThis.document && (document.head.dataset.requesttoken = e), vi("csrf-token-update", { token: e, _internal: !0 }));
}
function vy() {
  Fp("csrf-token-update", ({ token: e, _internal: t }) => {
    t || my(e);
  });
}
Ip("public").persist().build();
let Ia;
function Td(e, t) {
  return e ? e.getAttribute(t) : null;
}
function gy() {
  if (Ia !== void 0)
    return Ia;
  const e = document?.getElementsByTagName("head")[0];
  if (!e)
    return null;
  const t = Td(e, "data-user");
  return t === null ? (Ia = null, Ia) : (Ia = {
    uid: t,
    displayName: Td(e, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ia);
}
var mt = /* @__PURE__ */ ((e) => (e[e.Debug = 0] = "Debug", e[e.Info = 1] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 3] = "Error", e[e.Fatal = 4] = "Fatal", e))(mt || {});
class by {
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
function yy(e) {
  return new by(e);
}
class _y {
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
    const t = gy();
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
function wy() {
  return new _y(yy);
}
const ga = wy().detectUser().setApp("@nextcloud/vue").build();
function Cy(e) {
  let t = !1, n;
  return (...i) => (t || (t = !0, n = e(...i)), n);
}
let Kp = "missing-app-name";
try {
  Kp = "library";
} catch {
  ga.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
const Ey = Kp;
let Sy = "";
try {
  Sy = "0.1.0-alpha.162";
} catch {
  ga.error("The `@nextcloud/vue` library was used without setting / replacing the `appVersion`.");
}
function Gp() {
  return zt("appName", Ey);
}
const Ty = Cy(() => {
  const e = qc("core", "apps", []), t = Gp();
  return e.find(({ id: n }) => n === t)?.name ?? t;
}), fc = pb();
Ki(Jb);
const ky = /* @__PURE__ */ Lt({
  __name: "NcAppContentDetailsToggle",
  setup(e) {
    const t = co();
    an(t, n), Vi(() => {
      n(t.value);
    }), Ya(() => {
      t.value && n(!1);
    });
    function n(i = !0) {
      const a = document.querySelector(".app-navigation .app-navigation-toggle");
      a && (a.style.display = i ? "none" : "", i === !0 && vi("toggle-navigation", { open: !1 }));
    }
    return (i, a) => (y(), Be(v(Zn), {
      "aria-label": v(St)("Go back to the list"),
      class: Re(["app-details-toggle", { "app-details-toggle--mobile": v(t) }]),
      title: v(St)("Go back to the list"),
      variant: "tertiary"
    }, {
      icon: Me(() => [
        Ae(v(nl), {
          directional: "",
          path: v($b)
        }, null, 8, ["path"])
      ]),
      _: 1
    }, 8, ["aria-label", "class", "title"]));
  }
}), Ay = /* @__PURE__ */ et(ky, [["__scopeId", "data-v-a28923a1"]]), kd = Ip("nextcloud").persist().build(), xy = gb().theming?.name ?? "Nextcloud", Ny = {
  name: "NcAppContent",
  components: {
    NcAppContentDetailsToggle: Ay,
    Pane: Fb,
    Splitpanes: Db
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
      appName: Gp(),
      localizedAppName: Ty(),
      isMobile: co(),
      isRtl: fc
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
      return e.add(xy), [...e.values()].join(" - ");
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
    this.disableSwipe || (this.swiping = Mb(this.$el, {
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
      Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 300 / 2 && t === "right" ? vi("toggle-navigation", {
        open: !0
      }) : this.swiping.coordsStart.x < 300 * 1.5 && t === "left" && vi("toggle-navigation", {
        open: !1
      }));
    },
    handlePaneResize(e) {
      const t = parseInt(e.panes[0].size, 10);
      kd.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), ga.debug("[NcAppContent] pane config", { listPaneSize: t });
    },
    // browserStorage is not reactive, we need to update this manually
    restorePaneConfig() {
      const e = parseInt(kd.getItem(this.paneConfigID), 10);
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
}, Oy = {
  key: 0,
  class: "hidden-visually"
}, Ry = { class: "app-content-wrapper__list" }, Ly = {
  key: 1,
  class: "app-content-wrapper"
};
function Iy(e, t, n, i, a, r) {
  const o = je("NcAppContentDetailsToggle"), s = je("Pane"), l = je("Splitpanes");
  return y(), E("main", {
    id: "app-content-vue",
    class: Re(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
  }, [
    n.pageHeading ? (y(), E("h1", Oy, f(n.pageHeading), 1)) : B("", !0),
    e.$slots.list ? (y(), E(he, { key: 1 }, [
      i.isMobile || n.layout === "no-split" ? (y(), E("div", {
        key: 0,
        class: Re(["app-content-wrapper app-content-wrapper--no-split", {
          "app-content-wrapper--show-details": n.showDetails,
          "app-content-wrapper--show-list": !n.showDetails,
          "app-content-wrapper--mobile": i.isMobile
        }])
      }, [
        n.showDetails ? (y(), Be(o, {
          key: 0,
          onClick: lt(r.hideDetails, ["stop", "prevent"])
        }, null, 8, ["onClick"])) : B("", !0),
        ot(u("div", Ry, [
          De(e.$slots, "list", {}, void 0, !0)
        ], 512), [
          [Va, !n.showDetails]
        ]),
        n.showDetails ? De(e.$slots, "default", { key: 1 }, void 0, !0) : B("", !0)
      ], 2)) : n.layout === "vertical-split" || n.layout === "horizontal-split" ? (y(), E("div", Ly, [
        Ae(l, {
          horizontal: n.layout === "horizontal-split",
          class: Re(["default-theme", {
            "splitpanes--horizontal": n.layout === "horizontal-split",
            "splitpanes--vertical": n.layout === "vertical-split"
          }]),
          rtl: i.isRtl,
          onResized: r.handlePaneResize
        }, {
          default: Me(() => [
            Ae(s, {
              class: "splitpanes__pane-list",
              size: a.listPaneSize || r.paneDefaults.list.size,
              minSize: r.paneDefaults.list.min,
              maxSize: r.paneDefaults.list.max
            }, {
              default: Me(() => [
                De(e.$slots, "list", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"]),
            Ae(s, {
              class: "splitpanes__pane-details",
              size: r.detailsPaneSize,
              minSize: r.paneDefaults.details.min,
              maxSize: r.paneDefaults.details.max
            }, {
              default: Me(() => [
                De(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["size", "minSize", "maxSize"])
          ]),
          _: 3
        }, 8, ["horizontal", "class", "rtl", "onResized"])
      ])) : B("", !0)
    ], 64)) : B("", !0),
    e.$slots.list ? B("", !0) : De(e.$slots, "default", { key: 2 }, void 0, !0)
  ], 2);
}
const Py = /* @__PURE__ */ et(Ny, [["render", Iy], ["__scopeId", "data-v-51427d61"]]);
var qp = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "area[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"], is = /* @__PURE__ */ qp.join(","), Wp = typeof Element > "u", ya = Wp ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, as = !Wp && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, rs = function(t, n) {
  var i;
  n === void 0 && (n = !0);
  var a = t == null || (i = t.getAttribute) === null || i === void 0 ? void 0 : i.call(t, "inert"), r = a === "" || a === "true", o = r || n && t && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof t.closest == "function" ? t.closest("[inert]") : rs(t.parentNode));
  return o;
}, My = function(t) {
  var n, i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return i === "" || i === "true";
}, Yp = function(t, n, i) {
  if (rs(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(is));
  return n && ya.call(t, is) && a.unshift(t), a = a.filter(i), a;
}, os = function(t, n, i) {
  for (var a = [], r = Array.from(t); r.length; ) {
    var o = r.shift();
    if (!rs(o, !1))
      if (o.tagName === "SLOT") {
        var s = o.assignedElements(), l = s.length ? s : o.children, p = os(l, !0, i);
        i.flatten ? a.push.apply(a, p) : a.push({
          scopeParent: o,
          candidates: p
        });
      } else {
        var c = ya.call(o, is);
        c && i.filter(o) && (n || !t.includes(o)) && a.push(o);
        var h = o.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(o), b = !rs(h, !1) && (!i.shadowRootFilter || i.shadowRootFilter(o));
        if (h && b) {
          var C = os(h === !0 ? o.children : h.children, !0, i);
          i.flatten ? a.push.apply(a, C) : a.push({
            scopeParent: o,
            candidates: C
          });
        } else
          r.unshift.apply(r, o.children);
      }
  }
  return a;
}, Zp = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, da = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || My(t)) && !Zp(t) ? 0 : t.tabIndex;
}, Dy = function(t, n) {
  var i = da(t);
  return i < 0 && n && !Zp(t) ? 0 : i;
}, Fy = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, Xp = function(t) {
  return t.tagName === "INPUT";
}, $y = function(t) {
  return Xp(t) && t.type === "hidden";
}, zy = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return n;
}, Uy = function(t, n) {
  for (var i = 0; i < t.length; i++)
    if (t[i].checked && t[i].form === n)
      return t[i];
}, By = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || as(t), i = function(s) {
    return n.querySelectorAll('input[type="radio"][name="' + s + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = i(window.CSS.escape(t.name));
  else
    try {
      a = i(t.name);
    } catch (o) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message), !1;
    }
  var r = Uy(a, t.form);
  return !r || r === t;
}, Hy = function(t) {
  return Xp(t) && t.type === "radio";
}, jy = function(t) {
  return Hy(t) && !By(t);
}, Vy = function(t) {
  var n, i = t && as(t), a = (n = i) === null || n === void 0 ? void 0 : n.host, r = !1;
  if (i && i !== t) {
    var o, s, l;
    for (r = !!((o = a) !== null && o !== void 0 && (s = o.ownerDocument) !== null && s !== void 0 && s.contains(a) || t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t)); !r && a; ) {
      var p, c, h;
      i = as(a), a = (p = i) === null || p === void 0 ? void 0 : p.host, r = !!((c = a) !== null && c !== void 0 && (h = c.ownerDocument) !== null && h !== void 0 && h.contains(a));
    }
  }
  return r;
}, Ad = function(t) {
  var n = t.getBoundingClientRect(), i = n.width, a = n.height;
  return i === 0 && a === 0;
}, Ky = function(t, n) {
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
  var o = getComputedStyle(t), s = o.visibility;
  if (s === "hidden" || s === "collapse")
    return !0;
  var l = ya.call(t, "details>summary:first-of-type"), p = l ? t.parentElement : t;
  if (ya.call(p, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  i === "full-native" || i === "legacy-full") {
    if (typeof a == "function") {
      for (var c = t; t; ) {
        var h = t.parentElement, b = as(t);
        if (h && !h.shadowRoot && a(h) === !0)
          return Ad(t);
        t.assignedSlot ? t = t.assignedSlot : !h && b !== t.ownerDocument ? t = b.host : t = h;
      }
      t = c;
    }
    if (Vy(t))
      return !t.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return Ad(t);
  return !1;
}, Gy = function(t) {
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
}, ss = function(t, n) {
  return !(n.disabled || $y(n) || Ky(n, t) || // For a details element with a summary, the summary element gets the focus
  zy(n) || Gy(n));
}, pc = function(t, n) {
  return !(jy(n) || da(n) < 0 || !ss(t, n));
}, qy = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Jp = function(t) {
  var n = [], i = [];
  return t.forEach(function(a, r) {
    var o = !!a.scopeParent, s = o ? a.scopeParent : a, l = Dy(s, o), p = o ? Jp(a.candidates) : s;
    l === 0 ? o ? n.push.apply(n, p) : n.push(s) : i.push({
      documentOrder: r,
      tabIndex: l,
      item: a,
      isScope: o,
      content: p
    });
  }), i.sort(Fy).reduce(function(a, r) {
    return r.isScope ? a.push.apply(a, r.content) : a.push(r.content), a;
  }, []).concat(n);
}, Wy = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = os([t], n.includeContainer, {
    filter: pc.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: qy
  }) : i = Yp(t, n.includeContainer, pc.bind(null, n)), Jp(i);
}, Yy = function(t, n) {
  n = n || {};
  var i;
  return n.getShadowRoot ? i = os([t], n.includeContainer, {
    filter: ss.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : i = Yp(t, n.includeContainer, ss.bind(null, n)), i;
}, Pa = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ya.call(t, is) === !1 ? !1 : pc(n, t);
}, Zy = /* @__PURE__ */ qp.concat("iframe:not([inert]):not([inert] *)").join(","), zl = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return ya.call(t, Zy) === !1 ? !1 : ss(n, t);
};
function hc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
  return i;
}
function Xy(e) {
  if (Array.isArray(e)) return hc(e);
}
function xd(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Qp(e)) || t) {
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
  var r, o = !0, s = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var l = n.next();
      return o = l.done, l;
    },
    e: function(l) {
      s = !0, r = l;
    },
    f: function() {
      try {
        o || n.return == null || n.return();
      } finally {
        if (s) throw r;
      }
    }
  };
}
function Jy(e, t, n) {
  return (t = i_(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Qy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function e_() {
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
function Od(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nd(Object(n), !0).forEach(function(i) {
      Jy(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nd(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function t_(e) {
  return Xy(e) || Qy(e) || Qp(e) || e_();
}
function n_(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function i_(e) {
  var t = n_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Qp(e, t) {
  if (e) {
    if (typeof e == "string") return hc(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? hc(e, t) : void 0;
  }
}
var di = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function(t) {
    return t?.length > 0 ? t[t.length - 1] : null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function(t, n) {
    var i = di.getActiveTrap(t);
    n !== i && di.pauseTrap(t);
    var a = t.indexOf(n);
    a === -1 || t.splice(a, 1), t.push(n);
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function(t, n) {
    var i = t.indexOf(n);
    i !== -1 && t.splice(i, 1), di.unpauseTrap(t);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function(t) {
    var n = di.getActiveTrap(t);
    n?._setPausedState(!0);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function(t) {
    var n = di.getActiveTrap(t);
    n && !n._isManuallyPaused() && n._setPausedState(!1);
  }
}, a_ = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, r_ = function(t) {
  return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27;
}, Nr = function(t) {
  return t?.key === "Tab" || t?.keyCode === 9;
}, o_ = function(t) {
  return Nr(t) && !t.shiftKey;
}, s_ = function(t) {
  return Nr(t) && t.shiftKey;
}, Rd = function(t) {
  return setTimeout(t, 0);
}, mr = function(t) {
  for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    i[a - 1] = arguments[a];
  return typeof t == "function" ? t.apply(void 0, i) : t;
}, ko = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, l_ = [], Xc = function(t, n) {
  var i = n?.document || document, a = n?.trapStack || l_, r = Od({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    delayReturnFocus: !0,
    isolateSubtrees: !1,
    isKeyForward: o_,
    isKeyBackward: s_
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
  }, s, l = function(M, F, W) {
    return M && M[F] !== void 0 ? M[F] : r[W || F];
  }, p = function(M, F) {
    var W = typeof F?.composedPath == "function" ? F.composedPath() : void 0;
    return o.containerGroups.findIndex(function(oe) {
      var Q = oe.container, de = oe.tabbableNodes;
      return Q.contains(M) || W?.includes(Q) || de.find(function(ve) {
        return ve === M;
      });
    });
  }, c = function(M) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = F.hasFallback, oe = W === void 0 ? !1 : W, Q = F.params, de = Q === void 0 ? [] : Q, ve = r[M];
    if (typeof ve == "function" && (ve = ve.apply(void 0, t_(de))), ve === !0 && (ve = void 0), !ve) {
      if (ve === void 0 || ve === !1)
        return ve;
      throw new Error("`".concat(M, "` was specified but was not a node, or did not return a node"));
    }
    var we = ve;
    if (typeof ve == "string") {
      try {
        we = i.querySelector(ve);
      } catch (Ce) {
        throw new Error("`".concat(M, '` appears to be an invalid selector; error="').concat(Ce.message, '"'));
      }
      if (!we && !oe)
        throw new Error("`".concat(M, "` as selector refers to no known node"));
    }
    return we;
  }, h = function(M) {
    var F = M.activeElement;
    return F ? F.shadowRoot && F.shadowRoot.activeElement !== null ? h(F.shadowRoot) : F : null;
  }, b = function() {
    var M = c("initialFocus", {
      hasFallback: !0
    });
    if (M === !1)
      return !1;
    if (M === void 0 || M && !zl(M, r.tabbableOptions)) {
      var F = h(i);
      if (p(F) >= 0)
        M = F;
      else {
        var W = o.tabbableGroups[0], oe = W && W.firstTabbableNode;
        M = oe || c("fallbackFocus");
      }
    } else M === null && (M = c("fallbackFocus"));
    if (!M)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return M;
  }, C = function() {
    if (o.containerGroups = o.containers.map(function(M) {
      var F = Wy(M, r.tabbableOptions), W = Yy(M, r.tabbableOptions), oe = F.length > 0 ? F[0] : void 0, Q = F.length > 0 ? F[F.length - 1] : void 0, de = W.find(function(Ce) {
        return Pa(Ce);
      }), ve = W.slice().reverse().find(function(Ce) {
        return Pa(Ce);
      }), we = !!F.find(function(Ce) {
        return da(Ce) > 0;
      });
      return {
        container: M,
        tabbableNodes: F,
        focusableNodes: W,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: we,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: oe,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: Q,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: de,
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
        nextTabbableNode: function(Ve) {
          var Te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, tt = F.indexOf(Ve);
          return tt < 0 ? Te ? W.slice(W.indexOf(Ve) + 1).find(function(Qe) {
            return Pa(Qe);
          }) : W.slice(0, W.indexOf(Ve)).reverse().find(function(Qe) {
            return Pa(Qe);
          }) : F[tt + (Te ? 1 : -1)];
        }
      };
    }), o.tabbableGroups = o.containerGroups.filter(function(M) {
      return M.tabbableNodes.length > 0;
    }), o.tabbableGroups.length <= 0 && !c("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (o.containerGroups.find(function(M) {
      return M.posTabIndexesFound;
    }) && o.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, N = function(M) {
    if (M !== !1 && M !== h(document)) {
      if (!M || !M.focus) {
        N(b());
        return;
      }
      M.focus({
        preventScroll: !!r.preventScroll
      }), o.mostRecentlyFocusedNode = M, a_(M) && M.select();
    }
  }, S = function(M) {
    var F = c("setReturnFocus", {
      params: [M]
    });
    return F || (F === !1 ? !1 : M);
  }, R = function(M) {
    var F = M.target, W = M.event, oe = M.isBackward, Q = oe === void 0 ? !1 : oe;
    F = F || ko(W), C();
    var de = null;
    if (o.tabbableGroups.length > 0) {
      var ve = p(F, W), we = ve >= 0 ? o.containerGroups[ve] : void 0;
      if (ve < 0)
        Q ? de = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : de = o.tabbableGroups[0].firstTabbableNode;
      else if (Q) {
        var Ce = o.tabbableGroups.findIndex(function(bt) {
          var nt = bt.firstTabbableNode;
          return F === nt;
        });
        if (Ce < 0 && (we.container === F || zl(F, r.tabbableOptions) && !Pa(F, r.tabbableOptions) && !we.nextTabbableNode(F, !1)) && (Ce = ve), Ce >= 0) {
          var Ve = Ce === 0 ? o.tabbableGroups.length - 1 : Ce - 1, Te = o.tabbableGroups[Ve];
          de = da(F) >= 0 ? Te.lastTabbableNode : Te.lastDomTabbableNode;
        } else Nr(W) || (de = we.nextTabbableNode(F, !1));
      } else {
        var tt = o.tabbableGroups.findIndex(function(bt) {
          var nt = bt.lastTabbableNode;
          return F === nt;
        });
        if (tt < 0 && (we.container === F || zl(F, r.tabbableOptions) && !Pa(F, r.tabbableOptions) && !we.nextTabbableNode(F)) && (tt = ve), tt >= 0) {
          var Qe = tt === o.tabbableGroups.length - 1 ? 0 : tt + 1, ft = o.tabbableGroups[Qe];
          de = da(F) >= 0 ? ft.firstTabbableNode : ft.firstDomTabbableNode;
        } else Nr(W) || (de = we.nextTabbableNode(F));
      }
    } else
      de = c("fallbackFocus");
    return de;
  }, L = function(M) {
    var F = ko(M);
    if (!(p(F, M) >= 0)) {
      if (mr(r.clickOutsideDeactivates, M)) {
        s.deactivate({
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
      mr(r.allowOutsideClick, M) || M.preventDefault();
    }
  }, D = function(M) {
    var F = ko(M), W = p(F, M) >= 0;
    if (W || F instanceof Document)
      W && (o.mostRecentlyFocusedNode = F);
    else {
      M.stopImmediatePropagation();
      var oe, Q = !0;
      if (o.mostRecentlyFocusedNode)
        if (da(o.mostRecentlyFocusedNode) > 0) {
          var de = p(o.mostRecentlyFocusedNode), ve = o.containerGroups[de].tabbableNodes;
          if (ve.length > 0) {
            var we = ve.findIndex(function(Ce) {
              return Ce === o.mostRecentlyFocusedNode;
            });
            we >= 0 && (r.isKeyForward(o.recentNavEvent) ? we + 1 < ve.length && (oe = ve[we + 1], Q = !1) : we - 1 >= 0 && (oe = ve[we - 1], Q = !1));
          }
        } else
          o.containerGroups.some(function(Ce) {
            return Ce.tabbableNodes.some(function(Ve) {
              return da(Ve) > 0;
            });
          }) || (Q = !1);
      else
        Q = !1;
      Q && (oe = R({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: o.mostRecentlyFocusedNode,
        isBackward: r.isKeyBackward(o.recentNavEvent)
      })), N(oe || o.mostRecentlyFocusedNode || b());
    }
    o.recentNavEvent = void 0;
  }, H = function(M) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    o.recentNavEvent = M;
    var W = R({
      event: M,
      isBackward: F
    });
    W && (Nr(M) && M.preventDefault(), N(W));
  }, $ = function(M) {
    (r.isKeyForward(M) || r.isKeyBackward(M)) && H(M, r.isKeyBackward(M));
  }, ce = function(M) {
    r_(M) && mr(r.escapeDeactivates, M) !== !1 && (M.preventDefault(), s.deactivate());
  }, pe = function(M) {
    var F = ko(M);
    p(F, M) >= 0 || mr(r.clickOutsideDeactivates, M) || mr(r.allowOutsideClick, M) || (M.preventDefault(), M.stopImmediatePropagation());
  }, te = function() {
    if (o.active) {
      di.activateTrap(a, s);
      var M;
      return r.delayInitialFocus ? M = new Promise(function(F) {
        o.delayInitialFocusTimer = Rd(function() {
          N(b()), F();
        });
      }) : N(b()), i.addEventListener("focusin", D, !0), i.addEventListener("mousedown", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", pe, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", $, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", ce), M;
    }
  }, ne = function(M) {
    o.active && !o.paused && s._setSubtreeIsolation(!1), o.adjacentElements.clear(), o.alreadySilent.clear();
    var F = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set(), oe = xd(M), Q;
    try {
      for (oe.s(); !(Q = oe.n()).done; ) {
        var de = Q.value;
        F.add(de);
        for (var ve = typeof ShadowRoot < "u" && de.getRootNode() instanceof ShadowRoot, we = de; we; ) {
          F.add(we);
          var Ce = we.parentElement, Ve = [];
          Ce ? Ve = Ce.children : !Ce && ve && (Ve = we.getRootNode().children, Ce = we.getRootNode().host, ve = typeof ShadowRoot < "u" && Ce.getRootNode() instanceof ShadowRoot);
          var Te = xd(Ve), tt;
          try {
            for (Te.s(); !(tt = Te.n()).done; ) {
              var Qe = tt.value;
              W.add(Qe);
            }
          } catch (ft) {
            Te.e(ft);
          } finally {
            Te.f();
          }
          we = Ce;
        }
      }
    } catch (ft) {
      oe.e(ft);
    } finally {
      oe.f();
    }
    F.forEach(function(ft) {
      W.delete(ft);
    }), o.adjacentElements = W;
  }, P = function() {
    if (o.active)
      return i.removeEventListener("focusin", D, !0), i.removeEventListener("mousedown", L, !0), i.removeEventListener("touchstart", L, !0), i.removeEventListener("click", pe, !0), i.removeEventListener("keydown", $, !0), i.removeEventListener("keydown", ce), s;
  }, le = function(M) {
    var F = o.mostRecentlyFocusedNode;
    if (F) {
      var W = M.some(function(Q) {
        var de = Array.from(Q.removedNodes);
        return de.some(function(ve) {
          return ve === F || typeof ve.contains == "function" && ve.contains(F);
        });
      });
      if (W && o.containers.some(function(Q) {
        return Q?.isConnected;
      })) {
        C();
        var oe = b();
        N(oe);
      }
    }
  }, ge = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(le) : void 0, X = function() {
    ge && (ge.disconnect(), o.active && !o.paused && o.containers.map(function(M) {
      ge.observe(M, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return s = {
    get active() {
      return o.active;
    },
    get paused() {
      return o.paused;
    },
    activate: function(M) {
      if (o.active)
        return this;
      var F = l(M, "onActivate"), W = l(M, "onPostActivate"), oe = l(M, "checkCanFocusTrap"), Q = di.getActiveTrap(a), de = !1;
      if (Q && !Q.paused) {
        var ve;
        (ve = Q._setSubtreeIsolation) === null || ve === void 0 || ve.call(Q, !1), de = !0;
      }
      try {
        oe || C(), o.active = !0, o.paused = !1, o.nodeFocusedBeforeActivation = h(i), F?.({
          trap: s
        });
        var we = function() {
          oe && C();
          var Te = function() {
            s._setSubtreeIsolation(!0), X(), W?.({
              trap: s
            });
          }, tt = te();
          tt ? tt.then(Te) : Te();
        };
        if (oe)
          return oe(o.containers.concat()).then(we, we), this;
        we();
      } catch (Ve) {
        if (Q === di.getActiveTrap(a) && de) {
          var Ce;
          (Ce = Q._setSubtreeIsolation) === null || Ce === void 0 || Ce.call(Q, !0);
        }
        throw Ve;
      }
      return this;
    },
    deactivate: function(M) {
      if (!o.active)
        return this;
      var F = Od({
        onDeactivate: r.onDeactivate,
        onPostDeactivate: r.onPostDeactivate,
        checkCanReturnFocus: r.checkCanReturnFocus
      }, M);
      clearTimeout(o.delayInitialFocusTimer), o.delayInitialFocusTimer = void 0, o.paused || s._setSubtreeIsolation(!1), o.alreadySilent.clear(), P(), o.active = !1, o.paused = !1, X(), di.deactivateTrap(a, s);
      var W = l(F, "onDeactivate"), oe = l(F, "onPostDeactivate"), Q = l(F, "checkCanReturnFocus"), de = l(F, "delayReturnFocus"), ve = l(F, "returnFocus", "returnFocusOnDeactivate");
      W?.({
        trap: s
      });
      var we = function() {
        ve && N(S(o.nodeFocusedBeforeActivation)), oe?.({
          trap: s
        });
      }, Ce = function() {
        de && ve ? Rd(we) : we();
      };
      return ve && Q ? (Q(S(o.nodeFocusedBeforeActivation)).then(Ce, Ce), this) : (Ce(), this);
    },
    pause: function(M) {
      return o.active ? (o.manuallyPaused = !0, this._setPausedState(!0, M)) : this;
    },
    unpause: function(M) {
      return o.active ? (o.manuallyPaused = !1, a[a.length - 1] !== this ? this : this._setPausedState(!1, M)) : this;
    },
    updateContainerElements: function(M) {
      var F = [].concat(M).filter(Boolean);
      return o.containers = F.map(function(W) {
        return typeof W == "string" ? i.querySelector(W) : W;
      }), r.isolateSubtrees && ne(o.containers), o.active && (C(), o.paused || s._setSubtreeIsolation(!0)), X(), this;
    }
  }, Object.defineProperties(s, {
    _isManuallyPaused: {
      value: function() {
        return o.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function(M, F) {
        if (o.paused === M)
          return this;
        if (o.paused = M, M) {
          var W = l(F, "onPause"), oe = l(F, "onPostPause");
          W?.({
            trap: s
          }), P(), s._setSubtreeIsolation(!1), X(), oe?.({
            trap: s
          });
        } else {
          var Q = l(F, "onUnpause"), de = l(F, "onPostUnpause");
          Q?.({
            trap: s
          });
          var ve = function() {
            C();
            var Ce = function() {
              s._setSubtreeIsolation(!0), X(), de?.({
                trap: s
              });
            }, Ve = te();
            Ve ? Ve.then(Ce) : Ce();
          };
          ve();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function(M) {
        r.isolateSubtrees && o.adjacentElements.forEach(function(F) {
          var W;
          M ? r.isolateSubtrees === "aria-hidden" ? ((F.ariaHidden === "true" || ((W = F.getAttribute("aria-hidden")) === null || W === void 0 ? void 0 : W.toLowerCase()) === "true") && o.alreadySilent.add(F), F.setAttribute("aria-hidden", "true")) : ((F.inert || F.hasAttribute("inert")) && o.alreadySilent.add(F), F.setAttribute("inert", !0)) : o.alreadySilent.has(F) || (r.isolateSubtrees === "aria-hidden" ? F.removeAttribute("aria-hidden") : F.removeAttribute("inert"));
        });
      }
    }
  }), s.updateContainerElements(t), s;
};
const eh = /* @__PURE__ */ Symbol("nc:app-navigation-highlight"), c_ = /* @__PURE__ */ Lt({
  name: "NcAppNavigationList",
  provide() {
    return {
      [eh]: {
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
function u_(e, t, n, i, a, r) {
  return y(), E("ul", {
    ref: "list",
    class: Re(["app-navigation-list", { "app-navigation-list--animated-highlight": e.visible }]),
    onPointerleave: t[0] || (t[0] = (...o) => e.hideNow && e.hideNow(...o)),
    onFocusout: t[1] || (t[1] = (...o) => e.onFocusOut && e.onFocusOut(...o)),
    onScrollPassive: t[2] || (t[2] = (...o) => e.onScroll && e.onScroll(...o))
  }, [
    u("div", {
      class: Re(["app-navigation-list__highlight", {
        "app-navigation-list__highlight--visible": e.visible,
        "app-navigation-list__highlight--animated": e.animated,
        "app-navigation-list__highlight--over-active": e.overActive
      }]),
      style: kn(e.highlightStyle),
      "aria-hidden": "true"
    }, null, 6),
    De(e.$slots, "default", {}, void 0, !0)
  ], 34);
}
const th = /* @__PURE__ */ et(c_, [["render", u_], ["__scopeId", "data-v-3e73e246"]]);
function Xr() {
  return window._nc_focus_trap ??= [], window._nc_focus_trap;
}
function d_() {
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
const nh = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), ih = /* @__PURE__ */ Symbol.for("NcContent:selector");
Ki(Yb);
const f_ = { class: "app-navigation-toggle-wrapper" }, p_ = /* @__PURE__ */ Lt({
  __name: "NcAppNavigationToggle",
  props: {
    open: { type: Boolean, required: !0 },
    openModifiers: {}
  },
  emits: ["update:open"],
  setup(e) {
    const t = ip(e, "open"), n = q(() => t.value ? St("Close navigation") : St("Open navigation"));
    return (i, a) => (y(), E("div", f_, [
      Ae(v(Zn), {
        class: "app-navigation-toggle",
        "aria-controls": "app-navigation-vue",
        "aria-expanded": t.value ? "true" : "false",
        "aria-label": n.value,
        title: n.value,
        variant: "tertiary",
        onClick: a[0] || (a[0] = (r) => t.value = !t.value)
      }, {
        icon: Me(() => [
          Ae(nl, {
            path: v(Bb),
            directional: ""
          }, null, 8, ["path"])
        ]),
        _: 1
      }, 8, ["aria-expanded", "aria-label", "title"])
    ]));
  }
}), h_ = /* @__PURE__ */ et(p_, [["__scopeId", "data-v-e8177cc7"]]), m_ = ["aria-hidden", "aria-label", "aria-labelledby", "inert"], v_ = { class: "app-navigation__search" }, g_ = /* @__PURE__ */ Lt({
  __name: "NcAppNavigation",
  props: {
    ariaLabel: {},
    ariaLabelledby: {}
  },
  setup(e) {
    const t = e;
    let n;
    const i = zt(
      nh,
      () => Kv(),
      !1
    ), a = Xm("appNavigationContainer"), r = co(), o = /* @__PURE__ */ Ct(!r.value), s = q(() => r.value && o.value);
    Hm(() => {
      !t.ariaLabel && t.ariaLabelledby;
    }), an(r, () => {
      o.value = !r.value;
    }), an(s, () => {
      c();
    }), Vi(() => {
      i(!0), Fp("toggle-navigation", p), vi("navigation-toggled", {
        open: o.value
      }), n = Xc(a.value, {
        allowOutsideClick: !0,
        clickOutsideDeactivates: () => (r.value && (n.deactivate({ returnFocus: !1 }), l(!1)), !1),
        fallbackFocus: a.value,
        trapStack: Xr(),
        escapeDeactivates: !1
      }), c();
    }), oo(() => {
      i(!1), Nb("toggle-navigation", p), n.deactivate();
    });
    function l(b) {
      if (o.value === b) {
        vi("navigation-toggled", {
          open: o.value
        });
        return;
      }
      o.value = b === void 0 ? !o.value : b;
      const C = getComputedStyle(document.body), N = parseInt(C.getPropertyValue("--animation-slow")) || 200;
      setTimeout(() => {
        vi("navigation-toggled", {
          open: o.value
        });
      }, 1.5 * N);
    }
    function p({ open: b }) {
      return l(b);
    }
    function c() {
      s.value ? n.activate() : n.deactivate();
    }
    function h() {
      r.value && l(!1);
    }
    return (b, C) => (y(), E("div", {
      ref: "appNavigationContainer",
      class: Re(["app-navigation", {
        "app-navigation--closed": !o.value,
        "app-navigation--legacy": v(Gi)
      }])
    }, [
      u("nav", {
        id: "app-navigation-vue",
        "aria-hidden": o.value ? "false" : "true",
        "aria-label": e.ariaLabel || void 0,
        "aria-labelledby": e.ariaLabelledby || void 0,
        class: "app-navigation__content",
        inert: !o.value || void 0,
        onKeydown: nn(h, ["esc"])
      }, [
        u("div", v_, [
          De(b.$slots, "search", {}, void 0, !0)
        ]),
        u("div", {
          class: Re(["app-navigation__body", { "app-navigation__body--no-list": !b.$slots.list }])
        }, [
          De(b.$slots, "default", {}, void 0, !0)
        ], 2),
        b.$slots.list ? (y(), Be(th, {
          key: 0,
          class: "app-navigation__list"
        }, {
          default: Me(() => [
            De(b.$slots, "list", {}, void 0, !0)
          ]),
          _: 3
        })) : B("", !0),
        De(b.$slots, "footer", {}, void 0, !0)
      ], 40, m_),
      Ae(h_, {
        open: o.value,
        "onUpdate:open": l
      }, null, 8, ["open"])
    ], 2));
  }
}), b_ = /* @__PURE__ */ et(g_, [["__scopeId", "data-v-37908cd4"]]), y_ = {
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
}, __ = ["aria-hidden", "aria-label"], w_ = ["fill", "width", "height"], C_ = { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, E_ = { key: 0 };
function S_(e, t, n, i, a, r) {
  return y(), E("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-down-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", C_, [
        n.title ? (y(), E("title", E_, f(n.title), 1)) : B("", !0)
      ])
    ], 8, w_))
  ], 16, __);
}
const T_ = /* @__PURE__ */ et(y_, [["render", S_]]), k_ = {
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
}, A_ = ["aria-hidden", "aria-label"], x_ = ["fill", "width", "height"], N_ = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, O_ = { key: 0 };
function R_(e, t, n, i, a, r) {
  return y(), E("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon chevron-up-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", N_, [
        n.title ? (y(), E("title", O_, f(n.title), 1)) : B("", !0)
      ])
    ], 8, x_))
  ], 16, A_);
}
const L_ = /* @__PURE__ */ et(k_, [["render", R_]]), I_ = {
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
}, P_ = ["aria-hidden", "aria-label"], M_ = ["fill", "width", "height"], D_ = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, F_ = { key: 0 };
function $_(e, t, n, i, a, r) {
  return y(), E("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon arrow-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", D_, [
        n.title ? (y(), E("title", F_, f(n.title), 1)) : B("", !0)
      ])
    ], 8, M_))
  ], 16, P_);
}
const ah = /* @__PURE__ */ et(I_, [["render", $_]]), z_ = {
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
}, U_ = ["aria-hidden", "aria-label"], B_ = ["fill", "width", "height"], H_ = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, j_ = { key: 0 };
function V_(e, t, n, i, a, r) {
  return y(), E("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon close-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", H_, [
        n.title ? (y(), E("title", j_, f(n.title), 1)) : B("", !0)
      ])
    ], 8, B_))
  ], 16, U_);
}
const rh = /* @__PURE__ */ et(z_, [["render", V_]]);
Ki(qb);
const K_ = {
  name: "NcInputConfirmCancel",
  components: {
    IconArrowRight: ah,
    IconClose: rh,
    NcButton: Zn
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
    return { isLegacy34: Gi };
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
}, G_ = ["placeholder"];
function q_(e, t, n, i, a, r) {
  const o = je("IconArrowRight"), s = je("NcButton"), l = je("IconClose");
  return y(), E("div", {
    class: Re(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": i.isLegacy34 }])
  }, [
    u("form", {
      onSubmit: t[1] || (t[1] = lt((...p) => r.confirm && r.confirm(...p), ["prevent"])),
      onKeydown: t[2] || (t[2] = nn(lt((...p) => r.cancel && r.cancel(...p), ["exact", "stop", "prevent"]), ["esc"])),
      onClick: t[3] || (t[3] = lt(() => {
      }, ["stop", "prevent"]))
    }, [
      ot(u("input", {
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (p) => r.valueModel = p),
        type: "text",
        class: "app-navigation-input-confirm__input",
        placeholder: n.placeholder
      }, null, 8, G_), [
        [Mo, r.valueModel]
      ]),
      Ae(s, {
        "aria-label": a.labelConfirm,
        type: "submit",
        variant: "primary",
        onClick: lt(r.confirm, ["stop", "prevent"])
      }, {
        icon: Me(() => [
          Ae(o, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "onClick"]),
      Ae(s, {
        "aria-label": a.labelCancel,
        type: "reset",
        variant: n.primary ? "primary" : "tertiary",
        onClick: lt(r.cancel, ["stop", "prevent"])
      }, {
        icon: Me(() => [
          Ae(l, { size: 20 })
        ]),
        _: 1
      }, 8, ["aria-label", "variant", "onClick"])
    ], 32)
  ], 2);
}
const W_ = /* @__PURE__ */ et(K_, [["render", q_], ["__scopeId", "data-v-6926a0b8"]]);
window._nc_vue_element_id = window._nc_vue_element_id ?? 0;
function il() {
  return `nc-vue-${window._nc_vue_element_id++}`;
}
const oh = /* @__PURE__ */ Symbol.for("NcActions:isSemanticMenu"), sh = /* @__PURE__ */ Symbol.for("NcActions:closeMenu"), Y_ = {
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
}, Z_ = {
  mixins: [Y_],
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
      from: sh
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
}, X_ = {
  name: "NcActionButton",
  components: {
    NcIconSvgWrapper: nl
  },
  mixins: [Z_],
  inject: {
    isInSemanticMenu: {
      from: oh,
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
      mdiCheck: zb,
      mdiChevronRight: Ub
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
}, J_ = ["role"], Q_ = ["aria-label", "disabled", "title", "type"], e1 = { class: "action-button__longtext-wrapper" }, t1 = {
  key: 0,
  class: "action-button__name"
}, n1 = ["textContent"], i1 = {
  key: 2,
  class: "action-button__text"
}, a1 = ["textContent"], r1 = {
  key: 2,
  class: "action-button__pressed-icon material-design-icon"
};
function o1(e, t, n, i, a, r) {
  const o = je("NcIconSvgWrapper");
  return y(), E("li", {
    class: Re(["action", { "action--disabled": n.disabled }]),
    role: r.isInSemanticMenu && "presentation"
  }, [
    u("button", jt({
      "aria-label": e.ariaLabel,
      class: ["action-button button-vue", {
        "action-button--active": r.isChecked,
        focusable: r.isFocusable
      }],
      disabled: n.disabled,
      title: e.title,
      type: r.nativeType
    }, r.buttonAttributes, {
      onClick: t[0] || (t[0] = (...s) => r.handleClick && r.handleClick(...s))
    }), [
      De(e.$slots, "icon", {}, () => [
        u("span", {
          class: Re([[e.isIconUrl ? "action-button__icon--url" : e.icon], "action-button__icon"]),
          style: kn({ backgroundImage: e.isIconUrl ? `url(${e.icon})` : null }),
          "aria-hidden": "true"
        }, null, 6)
      ], !0),
      u("span", e1, [
        e.name ? (y(), E("strong", t1, f(e.name), 1)) : B("", !0),
        e.isLongText ? (y(), E("span", {
          key: 1,
          class: "action-button__longtext",
          textContent: f(e.text)
        }, null, 8, n1)) : (y(), E("span", i1, f(e.text), 1)),
        n.description ? (y(), E("span", {
          key: 3,
          class: "action-button__description",
          textContent: f(n.description)
        }, null, 8, a1)) : B("", !0)
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
      }, null, 8, ["path"])) : r.isChecked === !1 ? (y(), E("span", r1)) : B("", !0),
      B("", !0)
    ], 16, Q_)
  ], 10, J_);
}
const s1 = /* @__PURE__ */ et(X_, [["render", o1], ["__scopeId", "data-v-6c2daf4e"]]);
function l1(e, t = {}) {
  const n = d_();
  an(e, () => {
    pi(t.disabled) || (pi(e) ? n.pause() : n.unpause());
  }), oo(() => {
    n.unpause();
  });
}
const c1 = ["top", "right", "bottom", "left"], Ld = ["start", "end"], Id = /* @__PURE__ */ c1.reduce((e, t) => e.concat(t, t + "-" + Ld[0], t + "-" + Ld[1]), []), Jr = Math.min, mc = Math.max, u1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function lh(e, t, n) {
  return mc(e, Jr(t, n));
}
function wa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function _i(e) {
  return e.split("-")[0];
}
function Dn(e) {
  return e.split("-")[1];
}
function ch(e) {
  return e === "x" ? "y" : "x";
}
function Jc(e) {
  return e === "y" ? "height" : "width";
}
function fi(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Qc(e) {
  return ch(fi(e));
}
function uh(e, t, n) {
  n === void 0 && (n = !1);
  const i = Dn(e), a = Qc(e), r = Jc(a);
  let o = a === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = cs(o)), [o, cs(o)];
}
function d1(e) {
  const t = cs(e);
  return [ls(e), t, ls(t)];
}
function ls(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Pd = ["left", "right"], Md = ["right", "left"], f1 = ["top", "bottom"], p1 = ["bottom", "top"];
function h1(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Md : Pd : t ? Pd : Md;
    case "left":
    case "right":
      return t ? f1 : p1;
    default:
      return [];
  }
}
function m1(e, t, n, i) {
  const a = Dn(e);
  let r = h1(_i(e), n === "start", i);
  return a && (r = r.map((o) => o + "-" + a), t && (r = r.concat(r.map(ls)))), r;
}
function cs(e) {
  const t = _i(e);
  return u1[t] + e.slice(t.length);
}
function v1(e) {
  var t, n, i, a;
  return {
    top: (t = e.top) != null ? t : 0,
    right: (n = e.right) != null ? n : 0,
    bottom: (i = e.bottom) != null ? i : 0,
    left: (a = e.left) != null ? a : 0
  };
}
function dh(e) {
  return typeof e != "number" ? v1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Or(e) {
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
function Dd(e, t, n) {
  let {
    reference: i,
    floating: a
  } = e;
  const r = fi(t), o = Qc(t), s = Jc(o), l = _i(t), p = r === "y", c = i.x + i.width / 2 - a.width / 2, h = i.y + i.height / 2 - a.height / 2, b = i[s] / 2 - a[s] / 2;
  let C;
  switch (l) {
    case "top":
      C = {
        x: c,
        y: i.y - a.height
      };
      break;
    case "bottom":
      C = {
        x: c,
        y: i.y + i.height
      };
      break;
    case "right":
      C = {
        x: i.x + i.width,
        y: h
      };
      break;
    case "left":
      C = {
        x: i.x - a.width,
        y: h
      };
      break;
    default:
      C = {
        x: i.x,
        y: i.y
      };
  }
  const N = Dn(t);
  return N && (C[o] += b * (N === "end" ? 1 : -1) * (n && p ? -1 : 1)), C;
}
async function g1(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: i,
    y: a,
    platform: r,
    rects: o,
    elements: s,
    strategy: l
  } = e, {
    boundary: p = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: h = "floating",
    altBoundary: b = !1,
    padding: C = 0
  } = wa(t, e), N = dh(C), R = s[b ? h === "floating" ? "reference" : "floating" : h], L = Or(await r.getClippingRect({
    element: (n = await (r.isElement == null ? void 0 : r.isElement(R))) == null || n ? R : R.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: p,
    rootBoundary: c,
    strategy: l
  })), D = h === "floating" ? {
    x: i,
    y: a,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, H = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(H)) && await (r.getScale == null ? void 0 : r.getScale(H)) || {
    x: 1,
    y: 1
  }, ce = Or(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: D,
    offsetParent: H,
    strategy: l
  }) : D);
  return {
    top: (L.top - ce.top + N.top) / $.y,
    bottom: (ce.bottom - L.bottom + N.bottom) / $.y,
    left: (L.left - ce.left + N.left) / $.x,
    right: (ce.right - L.right + N.right) / $.x
  };
}
const b1 = 50, y1 = async (e, t, n) => {
  const {
    placement: i = "bottom",
    strategy: a = "absolute",
    middleware: r = [],
    platform: o
  } = n, s = o.detectOverflow ? o : {
    ...o,
    detectOverflow: g1
  }, l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let p = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: h
  } = Dd(p, i, l), b = i, C = 0;
  const N = {};
  for (let S = 0; S < r.length; S++) {
    const R = r[S];
    if (!R)
      continue;
    const {
      name: L,
      fn: D
    } = R, {
      x: H,
      y: $,
      data: ce,
      reset: pe
    } = await D({
      x: c,
      y: h,
      initialPlacement: i,
      placement: b,
      strategy: a,
      middlewareData: N,
      rects: p,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = H ?? c, h = $ ?? h, N[L] = {
      ...N[L],
      ...ce
    }, pe && C < b1 && (C++, typeof pe == "object" && (pe.placement && (b = pe.placement), pe.rects && (p = pe.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : pe.rects), {
      x: c,
      y: h
    } = Dd(p, b, l)), S = -1);
  }
  return {
    x: c,
    y: h,
    placement: b,
    strategy: a,
    middlewareData: N
  };
}, _1 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: i,
      placement: a,
      rects: r,
      platform: o,
      elements: s,
      middlewareData: l
    } = t, {
      element: p,
      padding: c = 0
    } = wa(e, t) || {};
    if (p == null)
      return {};
    const h = dh(c), b = {
      x: n,
      y: i
    }, C = Qc(a), N = Jc(C), S = await o.getDimensions(p), R = C === "y", L = R ? "top" : "left", D = R ? "bottom" : "right", H = R ? "clientHeight" : "clientWidth", $ = r.reference[N] + r.reference[C] - b[C] - r.floating[N], ce = b[C] - r.reference[C], pe = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(p));
    let te = pe ? pe[H] : 0;
    (!te || !await (o.isElement == null ? void 0 : o.isElement(pe))) && (te = s.floating[H] || r.floating[N]);
    const ne = $ / 2 - ce / 2, P = te / 2 - S[N] / 2 - 1, le = Jr(h[L], P), ge = Jr(h[D], P), X = te - S[N] - ge, ie = te / 2 - S[N] / 2 + ne, M = lh(le, ie, X), F = !l.arrow && Dn(a) != null && ie !== M && r.reference[N] / 2 - (ie < le ? le : ge) - S[N] / 2 < 0, W = F ? ie < le ? ie - le : ie - X : 0;
    return {
      [C]: b[C] + W,
      data: {
        [C]: M,
        centerOffset: ie - M - W,
        ...F && {
          alignmentOffset: W
        }
      },
      reset: F
    };
  }
});
function w1(e, t, n) {
  return (e ? [...n.filter((a) => Dn(a) === e), ...n.filter((a) => Dn(a) !== e)] : n.filter((a) => _i(a) === a)).filter((a) => e ? Dn(a) === e || (t ? ls(a) !== a : !1) : !0);
}
const C1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "autoPlacement",
    options: e,
    async fn(t) {
      var n, i, a;
      const {
        rects: r,
        middlewareData: o,
        placement: s,
        platform: l,
        elements: p
      } = t, {
        crossAxis: c = !1,
        alignment: h,
        allowedPlacements: b = Id,
        autoAlignment: C = !0,
        ...N
      } = wa(e, t), S = h !== void 0 || b === Id ? w1(h || null, C, b) : b, R = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, L = S[R];
      if (L == null)
        return {};
      if (s !== L)
        return {
          reset: {
            placement: S[0]
          }
        };
      const D = await l.detectOverflow(t, N), H = uh(L, r, await (l.isRTL == null ? void 0 : l.isRTL(p.floating))), $ = [D[_i(L)], D[H[0]], D[H[1]]], ce = [...((i = o.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: L,
        overflows: $
      }], pe = S[R + 1];
      if (pe)
        return {
          data: {
            index: R + 1,
            overflows: ce
          },
          reset: {
            placement: pe
          }
        };
      const te = ce.map((le) => {
        const ge = Dn(le.placement);
        return [le.placement, ge && c ? (
          // Check along the mainAxis and main crossAxis side.
          le.overflows.slice(0, 2).reduce((X, ie) => X + ie, 0)
        ) : (
          // Check only the mainAxis.
          le.overflows[0]
        ), le.overflows];
      }).sort((le, ge) => le[1] - ge[1]), P = ((a = te.filter((le) => le[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        Dn(le[0]) ? 2 : 3
      ).every((ge) => ge <= 0))[0]) == null ? void 0 : a[0]) || te[0][0];
      return P !== s ? {
        data: {
          index: R + 1,
          overflows: ce
        },
        reset: {
          placement: P
        }
      } : {};
    }
  };
}, E1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, i;
      const {
        placement: a,
        middlewareData: r,
        rects: o,
        initialPlacement: s,
        platform: l,
        elements: p
      } = t, {
        mainAxis: c = !0,
        crossAxis: h = !0,
        fallbackPlacements: b,
        fallbackStrategy: C = "bestFit",
        fallbackAxisSideDirection: N = "none",
        flipAlignment: S = !0,
        ...R
      } = wa(e, t);
      if ((n = r.arrow) != null && n.alignmentOffset)
        return {};
      const L = _i(a), D = fi(s), H = _i(s) === s, $ = await (l.isRTL == null ? void 0 : l.isRTL(p.floating)), ce = b || (H || !S ? [cs(s)] : d1(s)), pe = N !== "none";
      !b && pe && ce.push(...m1(s, S, N, $));
      const te = [s, ...ce], ne = await l.detectOverflow(t, R), P = [];
      let le = ((i = r.flip) == null ? void 0 : i.overflows) || [];
      if (c && P.push(ne[L]), h) {
        const M = uh(a, o, $);
        P.push(ne[M[0]], ne[M[1]]);
      }
      if (le = [...le, {
        placement: a,
        overflows: P
      }], !P.every((M) => M <= 0)) {
        var ge, X;
        const M = (((ge = r.flip) == null ? void 0 : ge.index) || 0) + 1, F = te[M];
        if (F && (!(h === "alignment" ? D !== fi(F) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        le.every((Q) => fi(Q.placement) === D ? Q.overflows[0] > 0 : !0)))
          return {
            data: {
              index: M,
              overflows: le
            },
            reset: {
              placement: F
            }
          };
        let W = (X = le.filter((oe) => oe.overflows[0] <= 0).sort((oe, Q) => oe.overflows[1] - Q.overflows[1])[0]) == null ? void 0 : X.placement;
        if (!W)
          switch (C) {
            case "bestFit": {
              var ie;
              const oe = (ie = le.filter((Q) => {
                if (pe) {
                  const de = fi(Q.placement);
                  return de === D || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  de === "y";
                }
                return !0;
              }).map((Q) => [Q.placement, Q.overflows.filter((de) => de > 0).reduce((de, ve) => de + ve, 0)]).sort((Q, de) => Q[1] - de[1])[0]) == null ? void 0 : ie[0];
              oe && (W = oe);
              break;
            }
            case "initialPlacement":
              W = s;
              break;
          }
        if (a !== W)
          return {
            reset: {
              placement: W
            }
          };
      }
      return {};
    }
  };
}, S1 = /* @__PURE__ */ new Set(["left", "top"]);
async function T1(e, t) {
  const {
    placement: n,
    platform: i,
    elements: a
  } = e, r = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)), o = _i(n), s = Dn(n), l = fi(n) === "y", p = S1.has(o) ? -1 : 1, c = r && l ? -1 : 1, h = wa(t, e);
  let {
    mainAxis: b,
    crossAxis: C,
    alignmentAxis: N
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return s && typeof N == "number" && (C = s === "end" ? N * -1 : N), l ? {
    x: C * c,
    y: b * p
  } : {
    x: b * p,
    y: C * c
  };
}
const k1 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, i;
      const {
        x: a,
        y: r,
        placement: o,
        middlewareData: s
      } = t, l = await T1(t, e);
      return o === ((n = s.offset) == null ? void 0 : n.placement) && (i = s.arrow) != null && i.alignmentOffset ? {} : {
        x: a + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, A1 = function(e) {
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
        crossAxis: s = !1,
        limiter: l = {
          fn: (D) => {
            let {
              x: H,
              y: $
            } = D;
            return {
              x: H,
              y: $
            };
          }
        },
        ...p
      } = wa(e, t), c = {
        x: n,
        y: i
      }, h = await r.detectOverflow(t, p), b = fi(a), C = ch(b);
      let N = c[C], S = c[b];
      const R = (D, H) => lh(H + h[D === "y" ? "top" : "left"], H, H - h[D === "y" ? "bottom" : "right"]);
      o && (N = R(C, N)), s && (S = R(b, S));
      const L = l.fn({
        ...t,
        [C]: N,
        [b]: S
      });
      return {
        ...L,
        data: {
          x: L.x - n,
          y: L.y - i,
          enabled: {
            [C]: o,
            [b]: s
          }
        }
      };
    }
  };
}, x1 = function(e) {
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
        ...s
      } = wa(e, t), l = await a.detectOverflow(t, s), p = _i(n), c = Dn(n), h = fi(n) === "y", {
        width: b,
        height: C
      } = i.floating;
      let N, S;
      p === "top" || p === "bottom" ? (N = p, S = c === (await (a.isRTL == null ? void 0 : a.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (S = p, N = c === "end" ? "top" : "bottom");
      const R = C - l.top - l.bottom, L = b - l.left - l.right, D = Jr(C - l[N], R), H = Jr(b - l[S], L), $ = t.middlewareData.shift, ce = !$;
      let pe = D, te = H;
      $ != null && $.enabled.x && (te = L), $ != null && $.enabled.y && (pe = R), ce && !c && (h ? te = b - 2 * mc(l.left, l.right) : pe = C - 2 * mc(l.top, l.bottom)), await o({
        ...t,
        availableWidth: te,
        availableHeight: pe
      });
      const ne = await a.getDimensions(r.floating);
      return b !== ne.width || C !== ne.height ? {
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
function Xn(e) {
  return Sn(e).getComputedStyle(e);
}
const Fd = Math.min, Rr = Math.max, us = Math.round;
function fh(e) {
  const t = Xn(e);
  let n = parseFloat(t.width), i = parseFloat(t.height);
  const a = e.offsetWidth, r = e.offsetHeight, o = us(n) !== a || us(i) !== r;
  return o && (n = a, i = r), { width: n, height: i, fallback: o };
}
function ji(e) {
  return hh(e) ? (e.nodeName || "").toLowerCase() : "";
}
let Ao;
function ph() {
  if (Ao) return Ao;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (Ao = e.brands.map(((t) => t.brand + "/" + t.version)).join(" "), Ao) : navigator.userAgent;
}
function Jn(e) {
  return e instanceof Sn(e).HTMLElement;
}
function $i(e) {
  return e instanceof Sn(e).Element;
}
function hh(e) {
  return e instanceof Sn(e).Node;
}
function $d(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof Sn(e).ShadowRoot || e instanceof ShadowRoot;
}
function al(e) {
  const { overflow: t, overflowX: n, overflowY: i, display: a } = Xn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + n) && !["inline", "contents"].includes(a);
}
function N1(e) {
  return ["table", "td", "th"].includes(ji(e));
}
function vc(e) {
  const t = /firefox/i.test(ph()), n = Xn(e), i = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!i && i !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((a) => n.willChange.includes(a))) || ["paint", "layout", "strict", "content"].some(((a) => {
    const r = n.contain;
    return r != null && r.includes(a);
  }));
}
function mh() {
  return !/^((?!chrome|android).)*safari/i.test(ph());
}
function eu(e) {
  return ["html", "body", "#document"].includes(ji(e));
}
function vh(e) {
  return $i(e) ? e : e.contextElement;
}
const gh = { x: 1, y: 1 };
function qa(e) {
  const t = vh(e);
  if (!Jn(t)) return gh;
  const n = t.getBoundingClientRect(), { width: i, height: a, fallback: r } = fh(t);
  let o = (r ? us(n.width) : n.width) / i, s = (r ? us(n.height) : n.height) / a;
  return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), { x: o, y: s };
}
function Qr(e, t, n, i) {
  var a, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = vh(e);
  let l = gh;
  t && (i ? $i(i) && (l = qa(i)) : l = qa(e));
  const p = s ? Sn(s) : window, c = !mh() && n;
  let h = (o.left + (c && ((a = p.visualViewport) == null ? void 0 : a.offsetLeft) || 0)) / l.x, b = (o.top + (c && ((r = p.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, C = o.width / l.x, N = o.height / l.y;
  if (s) {
    const S = Sn(s), R = i && $i(i) ? Sn(i) : i;
    let L = S.frameElement;
    for (; L && i && R !== S; ) {
      const D = qa(L), H = L.getBoundingClientRect(), $ = getComputedStyle(L);
      H.x += (L.clientLeft + parseFloat($.paddingLeft)) * D.x, H.y += (L.clientTop + parseFloat($.paddingTop)) * D.y, h *= D.x, b *= D.y, C *= D.x, N *= D.y, h += H.x, b += H.y, L = Sn(L).frameElement;
    }
  }
  return { width: C, height: N, top: b, right: h + C, bottom: b + N, left: h, x: h, y: b };
}
function zi(e) {
  return ((hh(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function rl(e) {
  return $i(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function bh(e) {
  return Qr(zi(e)).left + rl(e).scrollLeft;
}
function eo(e) {
  if (ji(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || $d(e) && e.host || zi(e);
  return $d(t) ? t.host : t;
}
function yh(e) {
  const t = eo(e);
  return eu(t) ? t.ownerDocument.body : Jn(t) && al(t) ? t : yh(t);
}
function ds(e, t) {
  var n;
  t === void 0 && (t = []);
  const i = yh(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), r = Sn(i);
  return a ? t.concat(r, r.visualViewport || [], al(i) ? i : []) : t.concat(i, ds(i));
}
function zd(e, t, n) {
  return t === "viewport" ? Or((function(i, a) {
    const r = Sn(i), o = zi(i), s = r.visualViewport;
    let l = o.clientWidth, p = o.clientHeight, c = 0, h = 0;
    if (s) {
      l = s.width, p = s.height;
      const b = mh();
      (b || !b && a === "fixed") && (c = s.offsetLeft, h = s.offsetTop);
    }
    return { width: l, height: p, x: c, y: h };
  })(e, n)) : $i(t) ? Or((function(i, a) {
    const r = Qr(i, !0, a === "fixed"), o = r.top + i.clientTop, s = r.left + i.clientLeft, l = Jn(i) ? qa(i) : { x: 1, y: 1 };
    return { width: i.clientWidth * l.x, height: i.clientHeight * l.y, x: s * l.x, y: o * l.y };
  })(t, n)) : Or((function(i) {
    const a = zi(i), r = rl(i), o = i.ownerDocument.body, s = Rr(a.scrollWidth, a.clientWidth, o.scrollWidth, o.clientWidth), l = Rr(a.scrollHeight, a.clientHeight, o.scrollHeight, o.clientHeight);
    let p = -r.scrollLeft + bh(i);
    const c = -r.scrollTop;
    return Xn(o).direction === "rtl" && (p += Rr(a.clientWidth, o.clientWidth) - s), { width: s, height: l, x: p, y: c };
  })(zi(e)));
}
function Ud(e) {
  return Jn(e) && Xn(e).position !== "fixed" ? e.offsetParent : null;
}
function Bd(e) {
  const t = Sn(e);
  let n = Ud(e);
  for (; n && N1(n) && Xn(n).position === "static"; ) n = Ud(n);
  return n && (ji(n) === "html" || ji(n) === "body" && Xn(n).position === "static" && !vc(n)) ? t : n || (function(i) {
    let a = eo(i);
    for (; Jn(a) && !eu(a); ) {
      if (vc(a)) return a;
      a = eo(a);
    }
    return null;
  })(e) || t;
}
function O1(e, t, n) {
  const i = Jn(t), a = zi(t), r = Qr(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const s = { x: 0, y: 0 };
  if (i || !i && n !== "fixed") if ((ji(t) !== "body" || al(a)) && (o = rl(t)), Jn(t)) {
    const l = Qr(t, !0);
    s.x = l.x + t.clientLeft, s.y = l.y + t.clientTop;
  } else a && (s.x = bh(a));
  return { x: r.left + o.scrollLeft - s.x, y: r.top + o.scrollTop - s.y, width: r.width, height: r.height };
}
const R1 = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: i, strategy: a } = e;
  const r = n === "clippingAncestors" ? (function(p, c) {
    const h = c.get(p);
    if (h) return h;
    let b = ds(p).filter(((R) => $i(R) && ji(R) !== "body")), C = null;
    const N = Xn(p).position === "fixed";
    let S = N ? eo(p) : p;
    for (; $i(S) && !eu(S); ) {
      const R = Xn(S), L = vc(S);
      (N ? L || C : L || R.position !== "static" || !C || !["absolute", "fixed"].includes(C.position)) ? C = R : b = b.filter(((D) => D !== S)), S = eo(S);
    }
    return c.set(p, b), b;
  })(t, this._c) : [].concat(n), o = [...r, i], s = o[0], l = o.reduce(((p, c) => {
    const h = zd(t, c, a);
    return p.top = Rr(h.top, p.top), p.right = Fd(h.right, p.right), p.bottom = Fd(h.bottom, p.bottom), p.left = Rr(h.left, p.left), p;
  }), zd(t, s, a));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: i } = e;
  const a = Jn(n), r = zi(n);
  if (n === r) return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, s = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((a || !a && i !== "fixed") && ((ji(n) !== "body" || al(r)) && (o = rl(n)), Jn(n))) {
    const p = Qr(n);
    s = qa(n), l.x = p.x + n.clientLeft, l.y = p.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - o.scrollLeft * s.x + l.x, y: t.y * s.y - o.scrollTop * s.y + l.y };
}, isElement: $i, getDimensions: function(e) {
  return Jn(e) ? fh(e) : e.getBoundingClientRect();
}, getOffsetParent: Bd, getDocumentElement: zi, getScale: qa, async getElementRects(e) {
  let { reference: t, floating: n, strategy: i } = e;
  const a = this.getOffsetParent || Bd, r = this.getDimensions;
  return { reference: O1(t, await a(n), i), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => Xn(e).direction === "rtl" }, L1 = (e, t, n) => {
  const i = /* @__PURE__ */ new Map(), a = { platform: R1, ...n }, r = { ...a.platform, _c: i };
  return y1(e, t, { ...a, platform: r });
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
function I1(e) {
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
let to = !1;
if (typeof window < "u") {
  to = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get() {
        to = !0;
      }
    });
    window.addEventListener("test", null, e);
  } catch {
  }
}
let _h = !1;
typeof window < "u" && typeof navigator < "u" && (_h = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
const P1 = ["auto", "top", "bottom", "left", "right"].reduce((e, t) => e.concat([
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
function Kd(e, t) {
  const n = e.indexOf(t);
  n !== -1 && e.splice(n, 1);
}
function Ul() {
  return new Promise((e) => requestAnimationFrame(() => {
    requestAnimationFrame(e);
  }));
}
const Pn = [];
let ra = null;
const Gd = {};
function qd(e) {
  let t = Gd[e];
  return t || (t = Gd[e] = []), t;
}
let bc = function() {
};
typeof window < "u" && (bc = window.Element);
function He(e) {
  return function(t) {
    return gc(t.theme, e);
  };
}
const Bl = "__floating-vue__popper", wh = () => /* @__PURE__ */ Lt({
  name: "VPopper",
  provide() {
    return {
      [Bl]: {
        parentPopper: this
      }
    };
  },
  inject: {
    [Bl]: { default: null }
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
      validator: (e) => P1.includes(e)
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
      type: [String, Object, bc, Boolean],
      default: He("container")
    },
    boundary: {
      type: [String, bc],
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
      return (e = this[Bl]) == null ? void 0 : e.parentPopper;
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
      (this.distance || this.skidding) && e.middleware.push(k1({
        mainAxis: this.distance,
        crossAxis: this.skidding
      }));
      const t = this.placement.startsWith("auto");
      if (t ? e.middleware.push(C1({
        alignment: this.placement.split("-")[1] ?? ""
      })) : e.placement = this.placement, this.preventOverflow && (this.shift && e.middleware.push(A1({
        padding: this.overflowPadding,
        boundary: this.boundary,
        crossAxis: this.shiftCrossAxis
      })), !t && this.flip && e.middleware.push(E1({
        padding: this.overflowPadding,
        boundary: this.boundary
      }))), e.middleware.push(_1({
        element: this.$_arrowNode,
        padding: this.arrowPadding
      })), this.arrowOverflow && e.middleware.push({
        name: "arrowOverflow",
        fn: ({ placement: i, rects: a, middlewareData: r }) => {
          let o;
          const { centerOffset: s } = r.arrow;
          return i.startsWith("top") || i.startsWith("bottom") ? o = Math.abs(s) > a.reference.width / 2 : o = Math.abs(s) > a.reference.height / 2, {
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
            var s;
            if ((s = o.autoSize) != null && s.skip)
              return {};
            let l, p;
            return r.startsWith("top") || r.startsWith("bottom") ? l = a.reference.width : p = a.reference.height, this.$_innerNode.style[i === "min" ? "minWidth" : i === "max" ? "maxWidth" : "width"] = l != null ? `${l}px` : null, this.$_innerNode.style[i === "min" ? "minHeight" : i === "max" ? "maxHeight" : "height"] = p != null ? `${p}px` : null, {
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
      (this.autoMaxSize || this.autoBoundaryMaxSize) && (this.$_innerNode.style.maxWidth = null, this.$_innerNode.style.maxHeight = null, e.middleware.push(x1({
        boundary: this.boundary,
        padding: this.overflowPadding,
        apply: ({ availableWidth: i, availableHeight: a }) => {
          this.$_innerNode.style.maxWidth = i != null ? `${i}px` : null, this.$_innerNode.style.maxHeight = a != null ? `${a}px` : null;
        }
      })));
      const n = await L1(this.$_referenceNode, this.$_popperNode, e);
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
      clearTimeout(this.$_disposeTimer), clearTimeout(this.$_scheduleTimer), this.skipTransition = e, !this.isShown && (this.$_ensureTeleport(), await Ul(), await this.$_computePosition(), await this.$_applyShowEffect(), this.positioningDisabled || this.$_registerEventListeners([
        ...ds(this.$_referenceNode),
        ...ds(this.$_popperNode)
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
        for (let n = 0; n < Pn.length; n++)
          t = Pn[n], t.showGroup !== e && (t.hide(), t.$emit("close-group"));
      }
      Pn.push(this), document.body.classList.add("v-popper--some-open");
      for (const t of Hd(this.theme))
        qd(t).push(this), document.body.classList.add(`v-popper--some-open--${t}`);
      this.$emit("apply-show"), this.classes.showFrom = !0, this.classes.showTo = !1, this.classes.hideFrom = !1, this.classes.hideTo = !1, await Ul(), this.classes.showFrom = !1, this.classes.showTo = !0, this.noAutoFocus || this.$_popperNode.focus();
    },
    async $_applyHide(e = !1) {
      if (this.shownChildren.size > 0) {
        this.pendingHide = !0, this.$_hideInProgress = !1;
        return;
      }
      if (clearTimeout(this.$_scheduleTimer), !this.isShown)
        return;
      this.skipTransition = e, Kd(Pn, this), Pn.length === 0 && document.body.classList.remove("v-popper--some-open");
      for (const n of Hd(this.theme)) {
        const i = qd(n);
        Kd(i, this), i.length === 0 && document.body.classList.remove(`v-popper--some-open--${n}`);
      }
      ra === this && (ra = null), this.isShown = !1, this.$_applyAttrsToTarget({
        "aria-describedby": void 0,
        "data-popper-shown": void 0
      }), clearTimeout(this.$_disposeTimer);
      const t = this.disposeTimeout;
      t !== null && (this.$_disposeTimer = setTimeout(() => {
        this.$_popperNode && (this.$_detachPopperNode(), this.isMounted = !1);
      }, t)), this.$_removeEventListeners("scroll"), this.$emit("apply-hide"), this.classes.showFrom = !1, this.classes.showTo = !1, this.classes.hideFrom = !0, this.classes.hideTo = !1, await Ul(), this.classes.hideFrom = !1, this.classes.hideTo = !0;
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
      this.$_events.push({ targetNodes: e, eventType: t, handler: n }), e.forEach((i) => i.addEventListener(t, n, to ? {
        passive: !0
      } : void 0));
    },
    $_registerTriggerListeners(e, t, n, i, a) {
      let r = n;
      i != null && (r = typeof i == "function" ? i(r) : i), r.forEach((o) => {
        const s = t[o];
        s && this.$_registerEventListeners(e, s, a);
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
      if (Lr >= e.left && Lr <= e.right && Ir >= e.top && Ir <= e.bottom) {
        const t = this.$_popperNode.getBoundingClientRect(), n = Lr - Ii, i = Ir - Pi, a = t.left + t.width / 2 - Ii + (t.top + t.height / 2) - Pi + t.width + t.height, r = Ii + n * a, o = Pi + i * a;
        return xo(Ii, Pi, r, o, t.left, t.top, t.left, t.bottom) || // Left edge
        xo(Ii, Pi, r, o, t.left, t.top, t.right, t.top) || // Top edge
        xo(Ii, Pi, r, o, t.right, t.top, t.right, t.bottom) || // Right edge
        xo(Ii, Pi, r, o, t.left, t.bottom, t.right, t.bottom);
      }
      return !1;
    }
  },
  render() {
    return this.$slots.default(this.slotData);
  }
});
if (typeof document < "u" && typeof window < "u") {
  if (_h) {
    const e = to ? {
      passive: !0,
      capture: !0
    } : !0;
    document.addEventListener("touchstart", (t) => Wd(t), e), document.addEventListener("touchend", (t) => Yd(t, !0), e);
  } else
    window.addEventListener("mousedown", (e) => Wd(e), !0), window.addEventListener("click", (e) => Yd(e, !1), !0);
  window.addEventListener("resize", F1);
}
function Wd(e, t) {
  for (let n = 0; n < Pn.length; n++) {
    const i = Pn[n];
    try {
      i.mouseDownContains = i.popperNode().contains(e.target);
    } catch {
    }
  }
}
function Yd(e, t) {
  M1(e, t);
}
function M1(e, t) {
  const n = {};
  for (let i = Pn.length - 1; i >= 0; i--) {
    const a = Pn[i];
    try {
      const r = a.containsGlobalTarget = a.mouseDownContains || a.popperNode().contains(e.target);
      a.pendingHide = !1, requestAnimationFrame(() => {
        if (a.pendingHide = !1, !n[a.randomId] && Zd(a, r, e)) {
          if (a.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
            let s = a.parentPopper;
            for (; s; )
              n[s.randomId] = !0, s = s.parentPopper;
            return;
          }
          let o = a.parentPopper;
          for (; o && Zd(o, o.containsGlobalTarget, e); )
            o.$_handleGlobalClose(e, t), o = o.parentPopper;
        }
      });
    } catch {
    }
  }
}
function Zd(e, t, n) {
  return n.closeAllPopover || n.closePopover && t || D1(e, n) && !t;
}
function D1(e, t) {
  if (typeof e.autoHide == "function") {
    const n = e.autoHide(t);
    return e.lastAutoHide = n, n;
  }
  return e.autoHide;
}
function F1() {
  for (let e = 0; e < Pn.length; e++)
    Pn[e].$_computePosition();
}
let Ii = 0, Pi = 0, Lr = 0, Ir = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
  Ii = Lr, Pi = Ir, Lr = e.clientX, Ir = e.clientY;
}, to ? {
  passive: !0
} : void 0);
function xo(e, t, n, i, a, r, o, s) {
  const l = ((o - a) * (t - r) - (s - r) * (e - a)) / ((s - r) * (n - e) - (o - a) * (i - t)), p = ((n - e) * (t - r) - (i - t) * (e - a)) / ((s - r) * (n - e) - (o - a) * (i - t));
  return l >= 0 && l <= 1 && p >= 0 && p <= 1;
}
const $1 = {
  extends: wh()
}, tu = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [i, a] of t)
    n[i] = a;
  return n;
};
function z1(e, t, n, i, a, r) {
  return y(), E("div", {
    ref: "reference",
    class: Re(["v-popper", {
      "v-popper--shown": e.slotData.isShown
    }])
  }, [
    De(e.$slots, "default", zo(qr(e.slotData)))
  ], 2);
}
const U1 = /* @__PURE__ */ tu($1, [["render", z1]]);
function B1() {
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
let Do;
function yc() {
  yc.init || (yc.init = !0, Do = B1() !== -1);
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
    yc(), hi(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Do && this.$el.appendChild(e), e.data = "about:blank", Do || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Do && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const H1 = /* @__PURE__ */ zm();
Fm("data-v-b329ee4c");
const j1 = {
  class: "resize-observer",
  tabindex: "-1"
};
$m();
const V1 = /* @__PURE__ */ H1((e, t, n, i, a, r) => (y(), Be("div", j1)));
ol.render = V1;
ol.__scopeId = "data-v-b329ee4c";
ol.__file = "src/components/ResizeObserver.vue";
const Ch = (e = "theme") => ({
  computed: {
    themeClass() {
      return I1(this[e]);
    }
  }
}), K1 = /* @__PURE__ */ Lt({
  name: "VPopperContent",
  components: {
    ResizeObserver: ol
  },
  mixins: [
    Ch()
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
}), G1 = ["id", "aria-hidden", "tabindex", "data-popper-placement"], q1 = {
  ref: "inner",
  class: "v-popper__inner"
}, W1 = /* @__PURE__ */ u("div", { class: "v-popper__arrow-outer" }, null, -1), Y1 = /* @__PURE__ */ u("div", { class: "v-popper__arrow-inner" }, null, -1), Z1 = [
  W1,
  Y1
];
function X1(e, t, n, i, a, r) {
  const o = je("ResizeObserver");
  return y(), E("div", {
    id: e.popperId,
    ref: "popover",
    class: Re(["v-popper__popper", [
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
    style: kn(e.result ? {
      position: e.result.strategy,
      transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
    } : void 0),
    "aria-hidden": e.shown ? "false" : "true",
    tabindex: e.autoHide ? 0 : void 0,
    "data-popper-placement": e.result ? e.result.placement : void 0,
    onKeyup: t[2] || (t[2] = nn((s) => e.autoHide && e.$emit("hide"), ["esc"]))
  }, [
    u("div", {
      class: "v-popper__backdrop",
      onClick: t[0] || (t[0] = (s) => e.autoHide && e.$emit("hide"))
    }),
    u("div", {
      class: "v-popper__wrapper",
      style: kn(e.result ? {
        transformOrigin: e.result.transformOrigin
      } : void 0)
    }, [
      u("div", q1, [
        e.mounted ? (y(), E(he, { key: 0 }, [
          u("div", null, [
            De(e.$slots, "default")
          ]),
          e.handleResize ? (y(), Be(o, {
            key: 0,
            onNotify: t[1] || (t[1] = (s) => e.$emit("resize", s))
          })) : B("", !0)
        ], 64)) : B("", !0)
      ], 512),
      u("div", {
        ref: "arrow",
        class: "v-popper__arrow-container",
        style: kn(e.result ? {
          left: e.toPx(e.result.arrow.x),
          top: e.toPx(e.result.arrow.y)
        } : void 0)
      }, Z1, 4)
    ], 4)
  ], 46, G1);
}
const Eh = /* @__PURE__ */ tu(K1, [["render", X1]]), Sh = {
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
let _c = function() {
};
typeof window < "u" && (_c = window.Element);
const J1 = /* @__PURE__ */ Lt({
  name: "VPopperWrapper",
  components: {
    Popper: U1,
    PopperContent: Eh
  },
  mixins: [
    Sh,
    Ch("finalTheme")
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
      type: [String, Object, _c, Boolean],
      default: void 0
    },
    boundary: {
      type: [String, _c],
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
function Q1(e, t, n, i, a, r) {
  const o = je("PopperContent"), s = je("Popper");
  return y(), Be(s, jt({ ref: "popper" }, e.$props, {
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
    default: Me(({
      popperId: l,
      isShown: p,
      shouldMountContent: c,
      skipTransition: h,
      autoHide: b,
      show: C,
      hide: N,
      handleResize: S,
      onResize: R,
      classes: L,
      result: D
    }) => [
      De(e.$slots, "default", {
        shown: p,
        show: C,
        hide: N
      }),
      Ae(o, {
        ref: "popperContent",
        "popper-id": l,
        theme: e.finalTheme,
        shown: p,
        mounted: c,
        "skip-transition": h,
        "auto-hide": b,
        "handle-resize": S,
        classes: L,
        result: D,
        onHide: N,
        onResize: R
      }, {
        default: Me(() => [
          De(e.$slots, "popper", {
            shown: p,
            hide: N
          })
        ]),
        _: 2
      }, 1032, ["popper-id", "theme", "shown", "mounted", "skip-transition", "auto-hide", "handle-resize", "classes", "result", "onHide", "onResize"])
    ]),
    _: 3
  }, 16, ["theme", "target-nodes", "popper-node", "class"]);
}
const nu = /* @__PURE__ */ tu(J1, [["render", Q1]]), e0 = {
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
wh();
const Xd = Ui, t0 = e0, n0 = /* @__PURE__ */ Lt({
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
}), i0 = "_ncPopover_qgtYg", a0 = {
  "material-design-icon": "_material-design-icon_NkIOG",
  ncPopover: i0
}, Th = "nc-popover-9";
Xd.themes[Th] = structuredClone(Xd.themes.dropdown);
const r0 = {
  name: "NcPopover",
  components: {
    Dropdown: t0,
    NcPopoverTriggerProvider: n0
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
      theme: Th
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
      return this.placement === "start" ? fc ? "right" : "left" : this.placement === "end" ? fc ? "left" : "right" : this.placement;
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
function o0(e, t, n, i, a, r) {
  const o = je("NcPopoverTriggerProvider"), s = je("Dropdown");
  return y(), Be(s, {
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
    popper: Me((l) => [
      De(e.$slots, "default", zo(qr(l)))
    ]),
    default: Me(() => [
      Ae(o, {
        shown: a.internalShown,
        popupRole: n.popupRole
      }, {
        default: Me((l) => [
          De(e.$slots, "trigger", zo(qr(l)))
        ]),
        _: 3
      }, 8, ["shown", "popupRole"])
    ]),
    _: 3
  }, 8, ["shown", "autoHide", "boundary", "container", "delay", "placement", "popperClass", "popperTriggers", "popperHideTriggers", "popperShowTriggers", "theme", "triggers", "hideTriggers", "showTriggers", "onApplyShow", "onApplyHide"]);
}
const s0 = {
  $style: a0
}, Jd = /* @__PURE__ */ et(r0, [["render", o0], ["__cssModules", s0]]), l0 = {
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
}, c0 = ["aria-hidden", "aria-label"], u0 = ["fill", "width", "height"], d0 = { d: "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" }, f0 = { key: 0 };
function p0(e, t, n, i, a, r) {
  return y(), E("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dots-horizontal-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", d0, [
        n.title ? (y(), E("title", f0, f(n.title), 1)) : B("", !0)
      ])
    ], 8, u0))
  ], 16, c0);
}
const h0 = /* @__PURE__ */ et(l0, [["render", p0]]);
Ki(Gb);
function iu(e) {
  return Array.isArray(e) && e.some((t) => {
    if (t === null)
      return !1;
    if (typeof t == "object") {
      const n = t;
      if (n.type === Ot)
        return !1;
      if (n.type === he && !iu(n.children))
        return !1;
      if (n.type === so && !n.children.trim())
        return !1;
    }
    return !0;
  });
}
const m0 = ".focusable", v0 = {
  name: "NcActions",
  components: {
    NcButton: Zn,
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
      [oh]: q(() => this.actionsMenuSemanticType === "menu"),
      [sh]: this.closeMenu
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
      randomId: il()
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
    l1(() => this.opened, {
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
      return this.$refs.menu.querySelectorAll(m0);
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
    const e = [], t = (C, N) => {
      C.forEach((S) => {
        if (this.isAction(S)) {
          N.push(S);
          return;
        }
        S.type === he && t(S.children, N);
      });
    };
    if (t(this.$slots.default?.(), e), e.length === 0)
      return;
    let n = e.filter(this.isValidSingleAction);
    this.forceMenu && n.length > 0 && this.inline > 0 && (n = []);
    const i = n.slice(0, this.inline), a = e.filter((C) => !i.includes(C)), r = ["NcActionButton", "NcActionButtonGroup", "NcActionCheckbox", "NcActionRadio"], o = ["NcActionInput", "NcActionTextEditable"], s = ["NcActionLink", "NcActionRouter"], l = a.some((C) => o.includes(this.getActionName(C))), p = a.some((C) => r.includes(this.getActionName(C))), c = a.some((C) => s.includes(this.getActionName(C)));
    l ? this.actionsMenuSemanticType = "dialog" : p ? this.actionsMenuSemanticType = "menu" : c ? this.actionsMenuSemanticType = "navigation" : e.filter((N) => this.getActionName(N).startsWith("NcAction")).length === e.length ? this.actionsMenuSemanticType = "tooltip" : this.actionsMenuSemanticType = "unknown";
    const h = (C) => {
      const N = C?.props?.icon, S = C?.children?.icon?.()?.[0] ?? (this.isIconUrl(N) ? en("img", { class: "action-item__menutoggle__icon", src: N, alt: "" }) : en("span", { class: ["icon", N] })), R = C?.children?.default?.()?.[0]?.children?.trim(), L = this.forceName ? R : "";
      let D = C?.props?.title;
      this.forceName || D || (D = R);
      const H = { ...C?.props ?? {} }, $ = ["submit", "reset"].includes(H.type) ? H.modelValue : "button";
      return delete H.modelValue, delete H.type, en(
        Zn,
        jt(
          H,
          {
            class: [
              "action-item action-item--single",
              {
                "action-item--wide": this.wide
              }
            ],
            "aria-label": C?.props?.["aria-label"] || R,
            title: D,
            disabled: this.disabled || C?.props?.disabled,
            pressed: C?.props?.modelValue,
            size: this.size,
            type: $,
            wide: this.wide,
            // If it has a menuName, we use a secondary button
            variant: this.variant || (L ? "secondary" : "tertiary"),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            // forward any pressed state from NcButton just like NcActionButton does
            "onUpdate:pressed": C?.props?.["onUpdate:modelValue"] ?? (() => {
            })
          }
        ),
        {
          default: () => L,
          icon: () => S
        }
      );
    }, b = (C) => {
      const N = iu(this.$slots.icon?.()) ? this.$slots.icon?.() : this.defaultIcon ? en("span", { class: ["icon", this.defaultIcon] }) : en(h0, { size: 20 }), S = `${this.randomId}-trigger`;
      return en(
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
          trigger: () => en(Zn, {
            id: S,
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
              "aria-labelledby": S,
              "aria-modal": this.actionsMenuSemanticType === "dialog" ? "true" : void 0
            }, [
              C
            ])
          ])
        }
      );
    };
    return e.length === 1 && n.length === 1 && !this.forceMenu ? h(e[0]) : (this.$nextTick(() => {
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
        ...i.map(h),
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
          [b(a)]
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
        b(e)
      ]
    ));
  }
}, kh = /* @__PURE__ */ et(v0, [["__scopeId", "data-v-7206c1f1"]]), g0 = ["aria-label"], b0 = ["width", "height"], y0 = ["fill"], _0 = ["fill"], w0 = { key: 0 }, C0 = /* @__PURE__ */ Lt({
  __name: "NcLoadingIcon",
  props: {
    appearance: { default: "auto" },
    name: { default: "" },
    size: { default: 20 }
  },
  setup(e) {
    const t = e, n = q(() => {
      const i = ["#777", "#CCC"];
      return t.appearance === "light" ? i : t.appearance === "dark" ? i.reverse() : ["var(--color-loading-light)", "var(--color-loading-dark)"];
    });
    return (i, a) => (y(), E("span", {
      "aria-label": e.name,
      role: "img",
      class: "material-design-icon loading-icon"
    }, [
      (y(), E("svg", {
        width: e.size,
        height: e.size,
        viewBox: "0 0 24 24"
      }, [
        u("path", {
          fill: n.value[0],
          d: "M12,4V2A10,10 0 1,0 22,12H20A8,8 0 1,1 12,4Z"
        }, null, 8, y0),
        u("path", {
          fill: n.value[1],
          d: "M12,4V2A10,10 0 0,1 22,12H20A8,8 0 0,0 12,4Z"
        }, [
          e.name ? (y(), E("title", w0, f(e.name), 1)) : B("", !0)
        ], 8, _0)
      ], 8, b0))
    ], 8, g0));
  }
}), Ah = /* @__PURE__ */ et(C0, [["__scopeId", "data-v-cf399190"]]), wc = /* @__PURE__ */ Lt({
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
}), E0 = {
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
}, S0 = ["aria-hidden", "aria-label"], T0 = ["fill", "width", "height"], k0 = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, A0 = { key: 0 };
function x0(e, t, n, i, a, r) {
  return y(), E("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon pencil-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", k0, [
        n.title ? (y(), E("title", A0, f(n.title), 1)) : B("", !0)
      ])
    ], 8, T0))
  ], 16, S0);
}
const N0 = /* @__PURE__ */ et(E0, [["render", x0]]), O0 = {
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
}, R0 = ["aria-hidden", "aria-label"], L0 = ["fill", "width", "height"], I0 = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, P0 = { key: 0 };
function M0(e, t, n, i, a, r) {
  return y(), E("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon undo-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", I0, [
        n.title ? (y(), E("title", P0, f(n.title), 1)) : B("", !0)
      ])
    ], 8, L0))
  ], 16, R0);
}
const D0 = /* @__PURE__ */ et(O0, [["render", M0]]);
Ki(Zb);
const F0 = {
  name: "NcAppNavigationIconCollapsible",
  components: {
    NcButton: Zn,
    ChevronDown: T_,
    ChevronUp: L_
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
    return { isLegacy34: Gi };
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
function $0(e, t, n, i, a, r) {
  const o = je("ChevronUp"), s = je("ChevronDown"), l = je("NcButton");
  return y(), Be(l, {
    class: Re(["icon-collapse", {
      "icon-collapse--active": n.active,
      "icon-collapse--open": n.open
    }]),
    "aria-label": r.labelButton,
    variant: n.active && i.isLegacy34 ? "tertiary-on-primary" : "tertiary",
    onClick: r.onClick
  }, {
    icon: Me(() => [
      n.open ? (y(), Be(o, {
        key: 0,
        size: 20
      })) : (y(), Be(s, {
        key: 1,
        size: 20
      }))
    ]),
    _: 1
  }, 8, ["class", "aria-label", "variant", "onClick"]);
}
const z0 = /* @__PURE__ */ et(F0, [["render", $0], ["__scopeId", "data-v-cfbd3794"]]);
Ki(Xb, ey);
const U0 = {
  name: "NcAppNavigationItem",
  components: {
    NcActions: kh,
    NcActionButton: s1,
    NcAppNavigationIconCollapsible: z0,
    NcInputConfirmCancel: W_,
    NcLoadingIcon: Ah,
    NcVNodes: wc,
    Pencil: N0,
    Undo: D0
  },
  inject: {
    // Provided by NcAppNavigationList, absent when used outside of one
    highlight: { from: eh, default: null }
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
      default: () => il(),
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
      isMobile: co(),
      isLegacy34: Gi
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
      this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault(), this.isMobile && vi("toggle-navigation", { open: !1 }));
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
}, B0 = ["id"], H0 = ["aria-current", "aria-description", "aria-expanded", "href", "target", "title", "onClick"], j0 = {
  key: 0,
  class: "editingContainer"
}, V0 = {
  key: 1,
  class: "app-navigation-entry__deleted"
}, K0 = { class: "app-navigation-entry__deleted-description" }, G0 = {
  key: 0,
  class: "app-navigation-entry__counter-wrapper"
}, q0 = {
  key: 0,
  class: "app-navigation-entry__children"
};
function W0(e, t, n, i, a, r) {
  const o = je("NcLoadingIcon"), s = je("NcInputConfirmCancel"), l = je("Pencil"), p = je("NcActionButton"), c = je("Undo"), h = je("NcActions"), b = je("NcAppNavigationIconCollapsible");
  return y(), E("li", {
    id: n.id,
    class: Re([{
      "app-navigation-entry--opened": a.opened,
      "app-navigation-entry--pinned": n.pinned,
      "app-navigation-entry--collapsible": n.allowCollapse && !!e.$slots.default
    }, "app-navigation-entry-wrapper"])
  }, [
    (y(), Be(Bc(r.isRouterLink ? "router-link" : "NcVNodes"), zo(qr({ ...r.isRouterLink && { custom: !0, to: n.to } })), {
      default: Me(({ href: C, navigate: N, isActive: S }) => [
        u("div", {
          ref: "entry",
          class: Re(["app-navigation-entry", {
            "app-navigation-entry--editing": a.editingActive,
            "app-navigation-entry--deleted": n.undo,
            "app-navigation-entry--legacy": i.isLegacy34,
            active: n.to && S || n.active
          }]),
          onPointerenter: t[4] || (t[4] = (...R) => r.requestHighlight && r.requestHighlight(...R)),
          onFocusin: t[5] || (t[5] = (...R) => r.requestHighlight && r.requestHighlight(...R))
        }, [
          n.undo ? B("", !0) : (y(), E("a", {
            key: 0,
            class: "app-navigation-entry-link",
            "aria-current": n.active || n.to && S ? "page" : void 0,
            "aria-description": n.ariaDescription,
            "aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
            href: n.href || C || "#",
            target: r.isExternal(n.href) ? "_blank" : void 0,
            title: n.title || n.name,
            onBlur: t[1] || (t[1] = (...R) => r.handleBlur && r.handleBlur(...R)),
            onClick: (R) => r.onClick(R, N, C),
            onFocus: t[2] || (t[2] = (...R) => r.handleFocus && r.handleFocus(...R)),
            onKeydown: t[3] || (t[3] = nn(lt((...R) => r.handleTab && r.handleTab(...R), ["exact"]), ["tab"]))
          }, [
            u("div", {
              class: Re(["app-navigation-entry-icon", { [n.icon]: n.icon }])
            }, [
              n.loading ? (y(), Be(o, { key: 0 })) : De(e.$slots, "icon", {
                key: 1,
                active: n.active || n.to && S
              }, void 0, !0)
            ], 2),
            u("span", {
              class: Re(["app-navigation-entry__name", { "hidden-visually": a.editingActive }])
            }, f(n.name), 3),
            a.editingActive ? (y(), E("div", j0, [
              Ae(s, {
                ref: "editingInput",
                modelValue: a.editingValue,
                "onUpdate:modelValue": t[0] || (t[0] = (R) => a.editingValue = R),
                placeholder: n.editPlaceholder !== "" ? n.editPlaceholder : n.name,
                primary: n.to && S || n.active,
                onCancel: r.cancelEditing,
                onConfirm: r.handleEditingDone
              }, null, 8, ["modelValue", "placeholder", "primary", "onCancel", "onConfirm"])
            ])) : B("", !0)
          ], 40, H0)),
          n.undo ? (y(), E("div", V0, [
            u("div", K0, f(n.name), 1)
          ])) : B("", !0),
          (e.$slots.actions || e.$slots.counter || n.editable || n.undo) && !a.editingActive ? (y(), E("div", {
            key: 2,
            class: Re(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": n.forceDisplayActions || a.menuOpenLocalValue || n.menuOpen }])
          }, [
            e.$slots.counter ? (y(), E("div", G0, [
              De(e.$slots, "counter", {}, void 0, !0)
            ])) : B("", !0),
            e.$slots.actions || n.editable && !a.editingActive || n.undo ? (y(), Be(h, {
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
              icon: Me(() => [
                De(e.$slots, "menu-icon", {}, void 0, !0)
              ]),
              default: Me(() => [
                n.editable && !a.editingActive ? (y(), Be(p, {
                  key: 0,
                  "aria-label": r.editButtonAriaLabel,
                  onClick: r.handleEdit
                }, {
                  icon: Me(() => [
                    Ae(l, { size: 20 })
                  ]),
                  default: Me(() => [
                    Pe(" " + f(n.editLabel), 1)
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : B("", !0),
                n.undo ? (y(), Be(p, {
                  key: 1,
                  "aria-label": r.undoButtonAriaLabel,
                  onClick: r.handleUndo
                }, {
                  icon: Me(() => [
                    Ae(c, { size: 20 })
                  ]),
                  _: 1
                }, 8, ["aria-label", "onClick"])) : B("", !0),
                De(e.$slots, "actions", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["boundariesElement", "inline", "placement", "open", "forceMenu", "defaultIcon", "onUpdate:open"])) : B("", !0)
          ], 2)) : B("", !0),
          n.allowCollapse && e.$slots.default ? (y(), Be(b, {
            key: 3,
            active: n.to && S || n.active,
            open: a.opened,
            onClick: lt(r.toggleCollapse, ["prevent", "stop"])
          }, null, 8, ["active", "open", "onClick"])) : B("", !0),
          De(e.$slots, "extra", {}, void 0, !0)
        ], 34)
      ]),
      _: 3
    }, 16)),
    r.canHaveChildren && e.$slots.default ? (y(), E("ul", q0, [
      De(e.$slots, "default", {}, void 0, !0)
    ])) : B("", !0)
  ], 10, B0);
}
const Qd = /* @__PURE__ */ et(U0, [["render", W0], ["__scopeId", "data-v-01bef41b"]]), Hl = /* @__PURE__ */ new WeakMap(), Y0 = {
  mounted(e, t) {
    const n = !t.modifiers.bubble;
    let i;
    if (typeof t.value == "function") i = Sd(e, t.value, { capture: n });
    else {
      const [a, r] = t.value;
      i = Sd(e, a, Object.assign({ capture: n }, r));
    }
    Hl.set(e, i);
  },
  unmounted(e) {
    const t = Hl.get(e);
    t && typeof t == "function" ? t() : t?.stop(), Hl.delete(e);
  }
}, Z0 = {
  mounted(e) {
    e.focus();
  }
}, X0 = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", J0 = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Cc = "numeric", Ec = "ascii", Sc = "alpha", Pr = "asciinumeric", Er = "alphanumeric", Tc = "domain", xh = "emoji", Q0 = "scheme", ew = "slashscheme", jl = "whitespace";
function tw(e, t) {
  return e in t || (t[e] = []), t[e];
}
function pa(e, t, n) {
  t[Cc] && (t[Pr] = !0, t[Er] = !0), t[Ec] && (t[Pr] = !0, t[Sc] = !0), t[Pr] && (t[Er] = !0), t[Sc] && (t[Er] = !0), t[Er] && (t[Tc] = !0), t[xh] && (t[Tc] = !0);
  for (const i in t) {
    const a = tw(i, n);
    a.indexOf(e) < 0 && a.push(e);
  }
}
function nw(e, t) {
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
    return t && t.j ? a = t : (a = new hn(t), n && i && pa(t, n, i)), this.jr.push([e, a]), a;
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
    let o, s = a.go(e);
    if (s ? (o = new hn(), Object.assign(o.j, s.j), o.jr.push.apply(o.jr, s.jr), o.jd = s.jd, o.t = s.t) : o = new hn(), r) {
      if (i)
        if (o.t && typeof o.t == "string") {
          const l = Object.assign(nw(o.t, i), n);
          pa(r, l, i);
        } else n && pa(r, n, i);
      o.t = r;
    }
    return a.j[e] = o, o;
  }
};
const Fe = (e, t, n, i, a) => e.ta(t, n, i, a), pt = (e, t, n, i, a) => e.tr(t, n, i, a), ef = (e, t, n, i, a) => e.ts(t, n, i, a), ae = (e, t, n, i, a) => e.tt(t, n, i, a), oi = "WORD", kc = "UWORD", Nh = "ASCIINUMERICAL", Oh = "ALPHANUMERICAL", no = "LOCALHOST", Ac = "TLD", xc = "UTLD", Fo = "SCHEME", za = "SLASH_SCHEME", au = "NUM", Nc = "WS", ru = "NL", Mr = "OPENBRACE", Dr = "CLOSEBRACE", fs = "OPENBRACKET", ps = "CLOSEBRACKET", hs = "OPENPAREN", ms = "CLOSEPAREN", vs = "OPENANGLEBRACKET", gs = "CLOSEANGLEBRACKET", bs = "FULLWIDTHLEFTPAREN", ys = "FULLWIDTHRIGHTPAREN", _s = "LEFTCORNERBRACKET", ws = "RIGHTCORNERBRACKET", Cs = "LEFTWHITECORNERBRACKET", Es = "RIGHTWHITECORNERBRACKET", Ss = "FULLWIDTHLESSTHAN", Ts = "FULLWIDTHGREATERTHAN", ks = "AMPERSAND", As = "APOSTROPHE", xs = "ASTERISK", Di = "AT", Ns = "BACKSLASH", Os = "BACKTICK", Rs = "CARET", ha = "COLON", ou = "COMMA", Ls = "DOLLAR", Gn = "DOT", Is = "EQUALS", su = "EXCLAMATION", wn = "HYPHEN", Fr = "PERCENT", Ps = "PIPE", Ms = "PLUS", Ds = "POUND", $r = "QUERY", lu = "QUOTE", Rh = "FULLWIDTHMIDDLEDOT", cu = "SEMI", qn = "SLASH", zr = "TILDE", Fs = "UNDERSCORE", Lh = "EMOJI", $s = "SYM";
var Ih = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Oh,
  AMPERSAND: ks,
  APOSTROPHE: As,
  ASCIINUMERICAL: Nh,
  ASTERISK: xs,
  AT: Di,
  BACKSLASH: Ns,
  BACKTICK: Os,
  CARET: Rs,
  CLOSEANGLEBRACKET: gs,
  CLOSEBRACE: Dr,
  CLOSEBRACKET: ps,
  CLOSEPAREN: ms,
  COLON: ha,
  COMMA: ou,
  DOLLAR: Ls,
  DOT: Gn,
  EMOJI: Lh,
  EQUALS: Is,
  EXCLAMATION: su,
  FULLWIDTHGREATERTHAN: Ts,
  FULLWIDTHLEFTPAREN: bs,
  FULLWIDTHLESSTHAN: Ss,
  FULLWIDTHMIDDLEDOT: Rh,
  FULLWIDTHRIGHTPAREN: ys,
  HYPHEN: wn,
  LEFTCORNERBRACKET: _s,
  LEFTWHITECORNERBRACKET: Cs,
  LOCALHOST: no,
  NL: ru,
  NUM: au,
  OPENANGLEBRACKET: vs,
  OPENBRACE: Mr,
  OPENBRACKET: fs,
  OPENPAREN: hs,
  PERCENT: Fr,
  PIPE: Ps,
  PLUS: Ms,
  POUND: Ds,
  QUERY: $r,
  QUOTE: lu,
  RIGHTCORNERBRACKET: ws,
  RIGHTWHITECORNERBRACKET: Es,
  SCHEME: Fo,
  SEMI: cu,
  SLASH: qn,
  SLASH_SCHEME: za,
  SYM: $s,
  TILDE: zr,
  TLD: Ac,
  UNDERSCORE: Fs,
  UTLD: xc,
  UWORD: kc,
  WORD: oi,
  WS: Nc
});
const ai = /[a-z]/, vr = new RegExp("\\p{L}", "u"), Vl = new RegExp("\\p{Emoji}", "u"), ri = /\d/, Kl = /\s/, tf = "\r", Gl = `
`, iw = "️", aw = "‍", ql = "￼";
let No = null, Oo = null;
function rw(e = []) {
  const t = {};
  hn.groups = t;
  const n = new hn();
  No == null && (No = nf(X0)), Oo == null && (Oo = nf(J0)), ae(n, "'", As), ae(n, "{", Mr), ae(n, "}", Dr), ae(n, "[", fs), ae(n, "]", ps), ae(n, "(", hs), ae(n, ")", ms), ae(n, "<", vs), ae(n, ">", gs), ae(n, "（", bs), ae(n, "）", ys), ae(n, "「", _s), ae(n, "」", ws), ae(n, "『", Cs), ae(n, "』", Es), ae(n, "＜", Ss), ae(n, "＞", Ts), ae(n, "&", ks), ae(n, "*", xs), ae(n, "@", Di), ae(n, "`", Os), ae(n, "^", Rs), ae(n, ":", ha), ae(n, ",", ou), ae(n, "$", Ls), ae(n, ".", Gn), ae(n, "=", Is), ae(n, "!", su), ae(n, "-", wn), ae(n, "%", Fr), ae(n, "|", Ps), ae(n, "+", Ms), ae(n, "#", Ds), ae(n, "?", $r), ae(n, '"', lu), ae(n, "/", qn), ae(n, ";", cu), ae(n, "~", zr), ae(n, "_", Fs), ae(n, "\\", Ns), ae(n, "・", Rh);
  const i = pt(n, ri, au, {
    [Cc]: !0
  });
  pt(i, ri, i);
  const a = pt(i, ai, Nh, {
    [Pr]: !0
  }), r = pt(i, vr, Oh, {
    [Er]: !0
  }), o = pt(n, ai, oi, {
    [Ec]: !0
  });
  pt(o, ri, a), pt(o, ai, o), pt(a, ri, a), pt(a, ai, a);
  const s = pt(n, vr, kc, {
    [Sc]: !0
  });
  pt(s, ai), pt(s, ri, r), pt(s, vr, s), pt(r, ri, r), pt(r, ai), pt(r, vr, r);
  const l = ae(n, Gl, ru, {
    [jl]: !0
  }), p = ae(n, tf, Nc, {
    [jl]: !0
  }), c = pt(n, Kl, Nc, {
    [jl]: !0
  });
  ae(n, ql, c), ae(p, Gl, l), ae(p, ql, c), pt(p, Kl, c), ae(c, tf), ae(c, Gl), pt(c, Kl, c), ae(c, ql, c);
  const h = pt(n, Vl, Lh, {
    [xh]: !0
  });
  ae(h, "#"), pt(h, Vl, h), ae(h, iw, h);
  const b = ae(h, aw);
  ae(b, "#"), pt(b, Vl, h);
  const C = [[ai, o], [ri, a]], N = [[ai, null], [vr, s], [ri, r]];
  for (let S = 0; S < No.length; S++)
    Ri(n, No[S], Ac, oi, C);
  for (let S = 0; S < Oo.length; S++)
    Ri(n, Oo[S], xc, kc, N);
  pa(Ac, {
    tld: !0,
    ascii: !0
  }, t), pa(xc, {
    utld: !0,
    alpha: !0
  }, t), Ri(n, "file", Fo, oi, C), Ri(n, "mailto", Fo, oi, C), Ri(n, "http", za, oi, C), Ri(n, "https", za, oi, C), Ri(n, "ftp", za, oi, C), Ri(n, "ftps", za, oi, C), pa(Fo, {
    scheme: !0,
    ascii: !0
  }, t), pa(za, {
    slashscheme: !0,
    ascii: !0
  }, t), e = e.sort((S, R) => S[0] > R[0] ? 1 : -1);
  for (let S = 0; S < e.length; S++) {
    const R = e[S][0], D = e[S][1] ? {
      [Q0]: !0
    } : {
      [ew]: !0
    };
    R.indexOf("-") >= 0 ? D[Tc] = !0 : ai.test(R) ? ri.test(R) ? D[Pr] = !0 : D[Ec] = !0 : D[Cc] = !0, ef(n, R, R, D);
  }
  return ef(n, "localhost", no, {
    ascii: !0
  }), n.jd = new hn($s), {
    start: n,
    tokens: Object.assign({
      groups: t
    }, Ih)
  };
}
function Ph(e, t) {
  const n = ow(t.replace(/[A-Z]/g, (s) => s.toLowerCase())), i = n.length, a = [];
  let r = 0, o = 0;
  for (; o < i; ) {
    let s = e, l = null, p = 0, c = null, h = -1, b = -1;
    for (; o < i && (l = s.go(n[o])); )
      s = l, s.accepts() ? (h = 0, b = 0, c = s) : h >= 0 && (h += n[o].length, b++), p += n[o].length, r += n[o].length, o++;
    r -= h, o -= b, p -= h, a.push({
      t: c.t,
      // token type/name
      v: t.slice(r - p, r),
      // string value
      s: r - p,
      // start index
      e: r
      // end index (excluding)
    });
  }
  return a;
}
function ow(e) {
  const t = [], n = e.length;
  let i = 0;
  for (; i < n; ) {
    let a = e.charCodeAt(i), r, o = a < 55296 || a > 56319 || i + 1 === n || (r = e.charCodeAt(i + 1)) < 56320 || r > 57343 ? e[i] : e.slice(i, i + 2);
    t.push(o), i += o.length;
  }
  return t;
}
function Ri(e, t, n, i, a) {
  let r;
  const o = t.length;
  for (let s = 0; s < o - 1; s++) {
    const l = t[s];
    e.j[l] ? r = e.j[l] : (r = new hn(i), r.jr = a.slice(), e.j[l] = r), e = r;
  }
  return r = new hn(n), r.jr = a.slice(), e.j[t[o - 1]] = r, r;
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
      for (let o = parseInt(e.substring(i, i + r), 10); o > 0; o--)
        n.pop();
      i += r;
    } else
      n.push(e[i]), i++;
  }
  return t;
}
const io = {
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
  let n = Object.assign({}, io);
  e && (n = Object.assign(n, e instanceof uu ? e.o : e));
  const i = n.ignoreTags, a = [];
  for (let r = 0; r < i.length; r++)
    a.push(i[r].toUpperCase());
  this.o = n, t && (this.defaultRender = t), this.ignoreTags = a;
}
uu.prototype = {
  o: io,
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
    return a && (typeof a == "object" ? (a = n.t in a ? a[n.t] : io[e], typeof a == "function" && i && (a = a(t, n))) : typeof a == "function" && i && (a = a(t, n.t, n)), a);
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
function Mh(e, t) {
  this.t = "token", this.v = e, this.tk = t;
}
Mh.prototype = {
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
  toObject(e = io.defaultProtocol) {
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
    const t = this, n = this.toHref(e.get("defaultProtocol")), i = e.get("formatHref", n, this), a = e.get("tagName", n, t), r = this.toFormattedString(e), o = {}, s = e.get("className", n, t), l = e.get("target", n, t), p = e.get("rel", n, t), c = e.getObj("attributes", n, t), h = e.getObj("events", n, t);
    return o.href = i, s && (o.class = s), l && (o.target = l), p && (o.rel = p), c && Object.assign(o, c), {
      tagName: a,
      attributes: o,
      content: r,
      eventListeners: h
    };
  }
};
function sl(e, t) {
  class n extends Mh {
    constructor(a, r) {
      super(a, r), this.t = e;
    }
  }
  for (const i in t)
    n.prototype[i] = t[i];
  return n.t = e, n;
}
const sw = sl("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), rf = sl("text"), lw = sl("nl"), Ro = sl("url", {
  isLink: !0,
  /**
	Lowercases relevant parts of the domain and adds the protocol if
	required. Note that this will not escape unsafe HTML characters in the
	URL.
		@param {string} [scheme] default scheme (e.g., 'https')
	@return {string} the full href
  */
  toHref(e = io.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${e}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const e = this.tk;
    return e.length >= 2 && e[0].t !== no && e[1].t === ha;
  }
}), _n = (e) => new hn(e);
function cw({
  groups: e
}) {
  const t = e.domain.concat([ks, xs, Di, Ns, Os, Rs, Ls, Is, wn, au, Fr, Ps, Ms, Ds, qn, $s, zr, Fs]), n = [As, ha, ou, Gn, su, Fr, $r, lu, cu, vs, gs, Mr, Dr, ps, fs, hs, ms, bs, ys, _s, ws, Cs, Es, Ss, Ts], i = [ks, As, xs, Ns, Os, Rs, Ls, Is, wn, Mr, Dr, Fr, Ps, Ms, Ds, $r, qn, $s, zr, Fs], a = _n(), r = ae(a, zr);
  Fe(r, i, r), Fe(r, e.domain, r);
  const o = _n(), s = _n(), l = _n();
  Fe(a, e.domain, o), Fe(a, e.scheme, s), Fe(a, e.slashscheme, l), Fe(o, i, r), Fe(o, e.domain, o);
  const p = ae(o, Di);
  ae(r, Di, p), ae(s, Di, p), ae(l, Di, p);
  const c = ae(r, Gn);
  Fe(c, i, r), Fe(c, e.domain, r);
  const h = _n();
  Fe(p, e.domain, h), Fe(h, e.domain, h);
  const b = ae(h, Gn);
  Fe(b, e.domain, h);
  const C = _n(sw);
  Fe(b, e.tld, C), Fe(b, e.utld, C), ae(p, no, C);
  const N = ae(h, wn);
  ae(N, wn, N), Fe(N, e.domain, h), Fe(C, e.domain, h), ae(C, Gn, b), ae(C, wn, N);
  const S = ae(o, wn), R = ae(o, Gn);
  ae(S, wn, S), Fe(S, e.domain, o), Fe(R, i, r), Fe(R, e.domain, o);
  const L = _n(Ro);
  Fe(R, e.tld, L), Fe(R, e.utld, L), Fe(L, e.domain, o), Fe(L, i, r), ae(L, Gn, R), ae(L, wn, S), ae(L, Di, p);
  const D = ae(L, ha), H = _n(Ro);
  Fe(D, e.numeric, H);
  const $ = _n(Ro), ce = _n();
  Fe($, t, $), Fe($, n, ce), Fe(ce, t, $), Fe(ce, n, ce), ae(L, qn, $), ae(H, qn, $);
  const pe = ae(s, ha), te = ae(l, ha), ne = ae(te, qn), P = ae(ne, qn);
  Fe(s, e.domain, o), ae(s, Gn, R), ae(s, wn, S), Fe(l, e.domain, o), ae(l, Gn, R), ae(l, wn, S), Fe(pe, e.domain, $), ae(pe, qn, $), ae(pe, $r, $), Fe(P, e.domain, $), Fe(P, t, $), ae(P, qn, $);
  const le = [
    [Mr, Dr],
    // {}
    [fs, ps],
    // []
    [hs, ms],
    // ()
    [vs, gs],
    // <>
    [bs, ys],
    // （）
    [_s, ws],
    // 「」
    [Cs, Es],
    // 『』
    [Ss, Ts]
    // ＜＞
  ];
  for (let ge = 0; ge < le.length; ge++) {
    const [X, ie] = le[ge], M = ae($, X);
    ae(ce, X, M);
    const F = _n(Ro);
    Fe(M, t, F);
    const W = _n();
    Fe(M, n, W), ae(M, ie, $), Fe(F, t, F), Fe(F, n, W), Fe(W, t, F), Fe(W, n, W), ae(F, ie, $), ae(W, ie, $);
  }
  return ae(a, no, L), ae(a, ru, lw), {
    start: a,
    tokens: Ih
  };
}
function uw(e, t, n) {
  let i = n.length, a = 0, r = [], o = [];
  for (; a < i; ) {
    let s = e, l = null, p = null, c = 0, h = null, b = -1;
    for (; a < i && !(l = s.go(n[a].t)); )
      o.push(n[a++]);
    for (; a < i && (p = l || s.go(n[a].t)); )
      l = null, s = p, s.accepts() ? (b = 0, h = s) : b >= 0 && b++, a++, c++;
    if (b < 0)
      a -= c, a < i && (o.push(n[a]), a++);
    else {
      o.length > 0 && (r.push(Wl(rf, t, o)), o = []), a -= b, c -= b;
      const C = h.t, N = n.slice(a - c, a);
      r.push(Wl(C, t, N));
    }
  }
  return o.length > 0 && r.push(Wl(rf, t, o)), r;
}
function Wl(e, t, n) {
  const i = n[0].s, a = n[n.length - 1].e, r = t.slice(i, a);
  return new e(r, n);
}
const Ft = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function dw() {
  Ft.scanner = rw(Ft.customSchemes);
  for (let e = 0; e < Ft.tokenQueue.length; e++)
    Ft.tokenQueue[e][1]({
      scanner: Ft.scanner
    });
  Ft.parser = cw(Ft.scanner.tokens);
  for (let e = 0; e < Ft.pluginQueue.length; e++)
    Ft.pluginQueue[e][1]({
      scanner: Ft.scanner,
      parser: Ft.parser
    });
  return Ft.initialized = !0, Ft;
}
function Dh(e) {
  return Ft.initialized || dw(), uw(Ft.parser.start, e, Ph(Ft.scanner.start, e));
}
Dh.scan = Ph;
function fw(e) {
  const t = new uu({
    defaultProtocol: "https",
    target: "_blank",
    className: "external linkified",
    attributes: {
      rel: "nofollow noopener noreferrer"
    }
  }, mw), n = Dh(e), i = [];
  for (const a of n)
    a.t === "nl" && t.get("nl2br") ? i.push(`<br>
`) : !a.isLink || !t.check(a) ? i.push(es(a.toString())) : i.push(t.render(a));
  return i.join("");
}
function pw(e) {
  return e.replace(/"/g, "&quot;");
}
function hw(e) {
  const t = [];
  for (const n in e) {
    const i = e[n] + "";
    t.push(`${n}="${pw(i)}"`);
  }
  return t.join(" ");
}
function mw({ tagName: e, attributes: t, content: n }) {
  return `<${e} ${hw(t)}>${es(n)}</${e}>`;
}
const vw = function(e, { value: t }) {
  t?.linkify === !0 && (e.innerHTML = fw(t.text));
}, gw = ["title"], bw = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarHeader",
  props: {
    name: {},
    title: {},
    linkify: { type: Boolean }
  },
  setup(e) {
    const t = zt("NcAppSidebar:header:ref");
    return (n, i) => ot((y(), E("h2", {
      ref_key: "headerRef",
      ref: t,
      tabindex: "-1",
      title: e.title
    }, [
      Pe(f(e.name), 1)
    ], 8, gw)), [
      [v(vw), { text: e.name, linkify: e.linkify }]
    ]);
  }
}), yw = ["aria-labelledby"], _w = {
  key: 0,
  class: "empty-content__icon",
  "aria-hidden": "true"
}, ww = ["id"], Cw = {
  key: 2,
  class: "empty-content__description"
}, Ew = {
  key: 3,
  class: "empty-content__action"
}, Sw = /* @__PURE__ */ Lt({
  __name: "NcEmptyContent",
  props: {
    description: { default: "" },
    name: { default: "" }
  },
  setup(e) {
    const t = il();
    return (n, i) => (y(), E("div", {
      "aria-labelledby": v(t),
      class: "empty-content",
      role: "note"
    }, [
      n.$slots.icon ? (y(), E("div", _w, [
        De(n.$slots, "icon", {}, void 0, !0)
      ])) : B("", !0),
      e.name !== "" || n.$slots.name ? (y(), E("div", {
        key: 1,
        id: v(t),
        class: "empty-content__name"
      }, [
        De(n.$slots, "name", {}, () => [
          Pe(f(e.name), 1)
        ], !0)
      ], 8, ww)) : B("", !0),
      e.description !== "" || n.$slots.description ? (y(), E("p", Cw, [
        De(n.$slots, "description", {}, () => [
          Pe(f(e.description), 1)
        ], !0)
      ])) : B("", !0),
      n.$slots.action ? (y(), E("div", Ew, [
        De(n.$slots, "action", {}, void 0, !0)
      ])) : B("", !0)
    ], 8, yw));
  }
}), Tw = /* @__PURE__ */ et(Sw, [["__scopeId", "data-v-8609a4c1"]]), kw = {
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
}, Aw = ["aria-hidden", "aria-label"], xw = ["fill", "width", "height"], Nw = { d: "M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M15 18H4V6H15Z" }, Ow = { key: 0 };
function Rw(e, t, n, i, a, r) {
  return y(), E("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon dock-right-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", Nw, [
        n.title ? (y(), E("title", Ow, f(n.title), 1)) : B("", !0)
      ])
    ], 8, xw))
  ], 16, Aw);
}
const Lw = /* @__PURE__ */ et(kw, [["render", Rw]]), Iw = {
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
}, Pw = ["aria-hidden", "aria-label"], Mw = ["fill", "width", "height"], Dw = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, Fw = { key: 0 };
function $w(e, t, n, i, a, r) {
  return y(), E("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", Dw, [
        n.title ? (y(), E("title", Fw, f(n.title), 1)) : B("", !0)
      ])
    ], 8, Mw))
  ], 16, Pw);
}
const zw = /* @__PURE__ */ et(Iw, [["render", $w]]), Uw = {
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
}, Bw = ["aria-hidden", "aria-label"], Hw = ["fill", "width", "height"], jw = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, Vw = { key: 0 };
function Kw(e, t, n, i, a, r) {
  return y(), E("span", jt(e.$attrs, {
    "aria-hidden": n.title ? null : "true",
    "aria-label": n.title,
    class: "material-design-icon star-outline-icon",
    role: "img",
    onClick: t[0] || (t[0] = (o) => e.$emit("click", o))
  }), [
    (y(), E("svg", {
      fill: n.fillColor,
      class: "material-design-icon__svg",
      width: n.size,
      height: n.size,
      viewBox: "0 0 24 24"
    }, [
      u("path", jw, [
        n.title ? (y(), E("title", Vw, f(n.title), 1)) : B("", !0)
      ])
    ], 8, Hw))
  ], 16, Bw);
}
const Gw = /* @__PURE__ */ et(Uw, [["render", Kw]]), qw = ["aria-selected", "tabindex"], Ww = /* @__PURE__ */ Lt({
  __name: "NcAppSidebarTabsButton",
  props: /* @__PURE__ */ uv({
    tab: {},
    animatedHighlight: { type: Boolean }
  }, {
    selected: { type: Boolean, required: !0 },
    selectedModifiers: {}
  }),
  emits: ["update:selected"],
  setup(e) {
    const t = ip(e, "selected"), n = /* @__PURE__ */ Ct(!1);
    function i() {
      t.value = !0, n.value = !1, requestAnimationFrame(() => {
        n.value = !0;
      });
    }
    return (a, r) => (y(), E("button", {
      class: Re(["button-vue", [a.$style.sidebarTabsButton, {
        [a.$style.sidebarTabsButton_selected]: t.value,
        [a.$style.sidebarTabsButton_legacy]: v(Gi),
        [a.$style.sidebarTabsButton_animatedHighlight]: e.animatedHighlight
      }]]),
      role: "tab",
      "aria-selected": t.value,
      tabindex: t.value ? 0 : -1,
      onClick: i
    }, [
      u("span", {
        class: Re([a.$style.sidebarTabsButton__icon, { [a.$style.sidebarTabsButton__icon_pop]: n.value }]),
        onAnimationend: r[0] || (r[0] = (o) => n.value = !1)
      }, [
        u("span", {
          class: Re([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: t.value }])
        }, [
          Ae(wc, {
            vnodes: e.tab.renderIcon(!1)
          }, {
            default: Me(() => [
              u("span", {
                class: Re([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2),
        u("span", {
          class: Re([a.$style.sidebarTabsButton__iconLayer, { [a.$style.sidebarTabsButton__iconLayer_hidden]: !t.value }])
        }, [
          Ae(wc, {
            vnodes: e.tab.renderIcon(!0)
          }, {
            default: Me(() => [
              u("span", {
                class: Re([a.$style.sidebarTabsButton__legacyIcon, e.tab.icon])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["vnodes"])
        ], 2)
      ], 34),
      u("span", {
        class: Re(a.$style.sidebarTabsButton__name)
      }, f(e.tab.name), 3)
    ], 10, qw));
  }
}), Yw = "_sidebarTabsButton_q3kBA", Zw = "_sidebarTabsButton_legacy_KQ4d1", Xw = "_sidebarTabsButton_selected_Pjayf", Jw = "_sidebarTabsButton_animatedHighlight_uvp-0", Qw = "_sidebarTabsButton__name_rlQsL", eC = "_sidebarTabsButton__icon_QzZg4", tC = "_sidebarTabsButton__iconLayer_ZkZan", nC = "_sidebarTabsButton__iconLayer_hidden_c7Cpv", iC = "_sidebarTabsButton__icon_pop_IA0By", aC = "_sidebarTabsButton__legacyIcon_QhcNW", rC = {
  "material-design-icon": "_material-design-icon_GQ9O0",
  sidebarTabsButton: Yw,
  sidebarTabsButton_legacy: Zw,
  sidebarTabsButton_selected: Xw,
  sidebarTabsButton_animatedHighlight: Jw,
  sidebarTabsButton__name: Qw,
  sidebarTabsButton__icon: eC,
  sidebarTabsButton__iconLayer: tC,
  sidebarTabsButton__iconLayer_hidden: nC,
  sidebarTabsButton__icon_pop: iC,
  "sidebar-tab-icon-pop": "_sidebar-tab-icon-pop_mqaHb",
  sidebarTabsButton__legacyIcon: aC
}, oC = {
  $style: rC
}, sC = /* @__PURE__ */ et(Ww, [["__cssModules", oC]]), lC = {
  name: "NcAppSidebarTabs",
  components: {
    NcAppSidebarTabsButton: sC
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
      isLegacy34: Gi,
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
      this.tabs.push(e), this.tabs.sort((t, n) => t.order === n.order ? t.name.localeCompare(n.name, [fb()]) : t.order - n.order), this.updateActive();
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
  const o = je("NcAppSidebarTabsButton");
  return y(), E("div", cC, [
    r.hasMultipleTabs || r.showForSingleTab ? (y(), E("div", {
      key: 0,
      ref: "nav",
      role: "tablist",
      class: Re(["app-sidebar-tabs__nav", { "app-sidebar-tabs__nav--legacy": a.isLegacy34 }]),
      onKeydown: [
        t[0] || (t[0] = nn(lt((...s) => r.focusPreviousTab && r.focusPreviousTab(...s), ["exact", "prevent", "stop"]), ["left"])),
        t[1] || (t[1] = nn(lt((...s) => r.focusNextTab && r.focusNextTab(...s), ["exact", "prevent", "stop"]), ["right"])),
        t[2] || (t[2] = nn(lt((...s) => r.focusActiveTabContent && r.focusActiveTabContent(...s), ["exact", "prevent", "stop"]), ["tab"])),
        t[3] || (t[3] = nn(lt((...s) => r.focusFirstTab && r.focusFirstTab(...s), ["exact", "prevent", "stop"]), ["home"])),
        t[4] || (t[4] = nn(lt((...s) => r.focusLastTab && r.focusLastTab(...s), ["exact", "prevent", "stop"]), ["end"])),
        t[5] || (t[5] = nn(lt((...s) => r.focusFirstTab && r.focusFirstTab(...s), ["exact", "prevent", "stop"]), ["page-up"])),
        t[6] || (t[6] = nn(lt((...s) => r.focusLastTab && r.focusLastTab(...s), ["exact", "prevent", "stop"]), ["page-down"]))
      ],
      onPointerover: t[7] || (t[7] = (...s) => r.handleHighlight && r.handleHighlight(...s)),
      onPointerleave: t[8] || (t[8] = (...s) => r.hideHighlight && r.hideHighlight(...s)),
      onFocusin: t[9] || (t[9] = (...s) => r.handleHighlight && r.handleHighlight(...s)),
      onFocusout: t[10] || (t[10] = (...s) => r.onHighlightFocusOut && r.onHighlightFocusOut(...s))
    }, [
      a.highlightEnabled ? (y(), E("div", {
        key: 0,
        class: Re(["app-sidebar-tabs__highlight", {
          "app-sidebar-tabs__highlight--visible": a.highlightVisible,
          "app-sidebar-tabs__highlight--animated": a.highlightAnimated,
          "app-sidebar-tabs__highlight--over-active": a.highlightOverActive
        }]),
        style: kn(r.highlightStyle),
        "aria-hidden": "true"
      }, null, 6)) : B("", !0),
      (y(!0), E(he, null, ze(a.tabs, (s) => (y(), Be(o, {
        id: `tab-button-${s.id}`,
        key: s.id,
        class: "app-sidebar-tabs__tab",
        "aria-controls": `tab-${s.id}`,
        selected: a.activeTab === s.id,
        animatedHighlight: a.highlightEnabled,
        tab: s,
        "onUpdate:selected": (l) => r.setActive(s.id)
      }, null, 8, ["id", "aria-controls", "selected", "animatedHighlight", "tab", "onUpdate:selected"]))), 128))
    ], 34)) : B("", !0),
    u("div", {
      class: Re(["app-sidebar-tabs__content", { "app-sidebar-tabs__content--multiple": r.hasMultipleTabs }])
    }, [
      De(e.$slots, "default", {}, void 0, !0)
    ], 2)
  ]);
}
const dC = /* @__PURE__ */ et(lC, [["render", uC], ["__scopeId", "data-v-74190d2a"]]);
Ki(Wb);
const fC = {
  name: "NcAppSidebar",
  components: {
    NcActions: kh,
    NcAppSidebarHeader: bw,
    NcAppSidebarTabs: dC,
    NcButton: Zn,
    NcLoadingIcon: Ah,
    NcEmptyContent: Tw,
    IconArrowRight: ah,
    IconClose: rh,
    IconDockRight: Lw,
    IconStar: zw,
    IconStarOutline: Gw
  },
  directives: {
    Focus: Z0,
    /** @type {import('vue').ObjectDirective} */
    ClickOutside: Y0
  },
  inject: {
    ncContentSelector: {
      from: ih,
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
    const e = /* @__PURE__ */ Ct(null);
    return Cn("NcAppSidebar:header:ref", e), {
      uid: il(),
      isMobile: Hb(),
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
    isSlotPopulated: iu,
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
      this.focusTrap || (this.focusTrap = Xc([
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
}, pC = ["aria-labelledby"], hC = { class: "app-sidebar-header__info" }, mC = {
  key: 0,
  class: "app-sidebar-header__tertiary-actions"
}, vC = { class: "app-sidebar-header__name-container" }, gC = { class: "app-sidebar-header__mainname-container" }, bC = ["placeholder", "value"], yC = ["title"], _C = {
  key: 2,
  class: "app-sidebar-header__description"
};
function wC(e, t, n, i, a, r) {
  const o = je("IconDockRight"), s = je("NcButton"), l = je("NcLoadingIcon"), p = je("IconStar"), c = je("IconStarOutline"), h = je("NcAppSidebarHeader"), b = je("IconArrowRight"), C = je("NcActions"), N = je("IconClose"), S = je("NcAppSidebarTabs"), R = je("NcEmptyContent"), L = Eu("focus"), D = Eu("click-outside");
  return y(), Be(Xv, {
    appear: "",
    name: "slide-right",
    onAfterEnter: r.onAfterEnter,
    onAfterLeave: r.onAfterLeave
  }, {
    default: Me(() => [
      ot(u("aside", {
        id: "app-sidebar-vue",
        ref: "sidebar",
        class: "app-sidebar",
        "aria-labelledby": `app-sidebar-vue-${i.uid}__header`,
        onKeydown: t[6] || (t[6] = nn((...H) => r.onKeydownEsc && r.onKeydownEsc(...H), ["esc"]))
      }, [
        r.ncContentSelector && !n.open && !n.noToggle ? (y(), Be(Bf, {
          key: 0,
          to: r.ncContentSelector
        }, [
          Ae(s, jt({
            ref: "toggle",
            "aria-label": r.t("Open sidebar"),
            class: ["app-sidebar__toggle", n.toggleClasses],
            variant: "tertiary"
          }, n.toggleAttrs, {
            onClick: t[0] || (t[0] = (H) => e.$emit("update:open", !0))
          }), {
            icon: Me(() => [
              De(e.$slots, "toggle-icon", {}, () => [
                Ae(o, { size: 20 })
              ], !0)
            ]),
            _: 3
          }, 16, ["aria-label", "class"])
        ], 8, ["to"])) : B("", !0),
        u("header", {
          class: Re(["app-sidebar-header", {
            "app-sidebar-header--with-figure": r.isSlotPopulated(e.$slots.header?.()) || n.background,
            "app-sidebar-header--compact": n.compact
          }])
        }, [
          n.empty ? (y(), Be(h, {
            key: 1,
            class: "app-sidebar-header__mainname--hidden",
            name: n.name,
            tabindex: "-1"
          }, null, 8, ["name"])) : De(e.$slots, "info", { key: 0 }, () => [
            u("div", hC, [
              r.isSlotPopulated(e.$slots.header?.()) || n.background ? (y(), E("div", {
                key: 0,
                class: Re(["app-sidebar-header__figure", {
                  "app-sidebar-header__figure--with-action": r.hasFigureClickListener
                }]),
                style: kn({
                  backgroundImage: `url(${n.background})`
                }),
                tabindex: "0",
                onClick: t[1] || (t[1] = (...H) => r.onFigureClick && r.onFigureClick(...H)),
                onKeydown: t[2] || (t[2] = nn((...H) => r.onFigureClick && r.onFigureClick(...H), ["enter"]))
              }, [
                De(e.$slots, "header", { class: "app-sidebar-header__background" }, void 0, !0)
              ], 38)) : B("", !0),
              u("div", {
                class: Re(["app-sidebar-header__desc", {
                  "app-sidebar-header__desc--with-tertiary-action": r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()),
                  "app-sidebar-header__desc--editable": n.nameEditable && !n.subname,
                  "app-sidebar-header__desc--with-subname--editable": n.nameEditable && n.subname,
                  "app-sidebar-header__desc--without-actions": !r.isSlotPopulated(e.$slots["secondary-actions"]?.())
                }])
              }, [
                r.canStar || r.isSlotPopulated(e.$slots["tertiary-actions"]?.()) ? (y(), E("div", mC, [
                  De(e.$slots, "tertiary-actions", {}, () => [
                    r.canStar ? (y(), Be(s, {
                      key: 0,
                      "aria-label": a.favoriteTranslated,
                      pressed: a.isStarred,
                      class: "app-sidebar-header__star",
                      variant: "secondary",
                      onClick: lt(r.toggleStarred, ["prevent"])
                    }, {
                      icon: Me(() => [
                        n.starLoading ? (y(), Be(l, { key: 0 })) : a.isStarred ? (y(), Be(p, {
                          key: 1,
                          size: 20
                        })) : (y(), Be(c, {
                          key: 2,
                          size: 20
                        }))
                      ]),
                      _: 1
                    }, 8, ["aria-label", "pressed", "onClick"])) : B("", !0)
                  ], !0)
                ])) : B("", !0),
                u("div", vC, [
                  u("div", gC, [
                    ot(Ae(h, {
                      class: "app-sidebar-header__mainname",
                      name: n.name,
                      linkify: n.linkifyName,
                      title: n.title,
                      tabindex: n.nameEditable ? 0 : -1,
                      onClick: lt(r.editName, ["self"])
                    }, null, 8, ["name", "linkify", "title", "tabindex", "onClick"]), [
                      [Va, !n.nameEditable]
                    ]),
                    n.nameEditable ? ot((y(), E("form", {
                      key: 0,
                      class: "app-sidebar-header__mainname-form",
                      onSubmit: t[5] || (t[5] = lt((...H) => r.onSubmitName && r.onSubmitName(...H), ["prevent"]))
                    }, [
                      ot(u("input", {
                        ref: "nameInput",
                        class: "app-sidebar-header__mainname-input",
                        type: "text",
                        placeholder: n.namePlaceholder,
                        value: n.name,
                        onKeydown: t[3] || (t[3] = nn(lt((...H) => r.onDismissEditing && r.onDismissEditing(...H), ["stop"]), ["esc"])),
                        onInput: t[4] || (t[4] = (...H) => r.onNameInput && r.onNameInput(...H))
                      }, null, 40, bC), [
                        [L]
                      ]),
                      Ae(s, {
                        "aria-label": a.changeNameTranslated,
                        type: "submit",
                        variant: "tertiary-no-background"
                      }, {
                        icon: Me(() => [
                          Ae(b, { size: 20 })
                        ]),
                        _: 1
                      }, 8, ["aria-label"])
                    ], 32)), [
                      [D, () => r.onSubmitName()]
                    ]) : B("", !0),
                    r.isSlotPopulated(e.$slots["secondary-actions"]?.()) ? (y(), Be(C, {
                      key: 1,
                      class: "app-sidebar-header__menu",
                      forceMenu: n.forceMenu
                    }, {
                      default: Me(() => [
                        De(e.$slots, "secondary-actions", {}, void 0, !0)
                      ]),
                      _: 3
                    }, 8, ["forceMenu"])) : B("", !0)
                  ]),
                  n.subname.trim() !== "" || e.$slots.subname ? (y(), E("p", {
                    key: 0,
                    title: n.subtitle || void 0,
                    class: "app-sidebar-header__subname"
                  }, [
                    De(e.$slots, "subname", {}, () => [
                      Pe(f(n.subname), 1)
                    ], !0)
                  ], 8, yC)) : B("", !0)
                ])
              ], 2)
            ])
          ], !0),
          Ae(s, {
            ref: "closeButton",
            "aria-label": a.closeTranslated,
            title: a.closeTranslated,
            class: "app-sidebar__close",
            variant: "tertiary",
            onClick: lt(r.closeSidebar, ["prevent"])
          }, {
            icon: Me(() => [
              Ae(N, { size: 20 })
            ]),
            _: 1
          }, 8, ["aria-label", "title", "onClick"]),
          r.isSlotPopulated(e.$slots.description?.()) && !n.empty ? (y(), E("div", _C, [
            De(e.$slots, "description", {}, void 0, !0)
          ])) : B("", !0)
        ], 2),
        ot(Ae(S, {
          ref: "tabs",
          active: n.active,
          forceTabs: n.forceTabs,
          "onUpdate:active": r.onUpdateActive
        }, {
          default: Me(() => [
            De(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["active", "forceTabs", "onUpdate:active"]), [
          [Va, !n.loading]
        ]),
        n.loading ? (y(), Be(R, { key: 1 }, {
          icon: Me(() => [
            Ae(l, { size: 64 })
          ]),
          _: 1
        })) : B("", !0)
      ], 40, pC), [
        [Va, n.open]
      ])
    ]),
    _: 3
  }, 8, ["onAfterEnter", "onAfterLeave"]);
}
const CC = /* @__PURE__ */ et(fC, [["render", wC], ["__scopeId", "data-v-c2c6820b"]]);
Ki(Qb);
const EC = `<!--
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
`, SC = `<!--
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
`, TC = { class: "vue-skip-actions__container" }, kC = { class: "vue-skip-actions__headline" }, AC = { class: "vue-skip-actions__buttons" }, xC = /* @__PURE__ */ Lt({
  __name: "NcContent",
  props: {
    appName: {}
  },
  setup(e) {
    const t = e;
    Cn(nh, s), Cn(ih, "#content-vue"), Cn("appName", q(() => t.appName));
    const n = co(), i = /* @__PURE__ */ Ct(!1), a = /* @__PURE__ */ Ct(), r = q(() => a.value === "navigation" ? SC : EC);
    Yf(() => {
      const l = document.getElementById("skip-actions");
      l && (l.innerHTML = "", l.classList.add("vue-skip-actions"));
    });
    function o() {
      vi("toggle-navigation", { open: !0 }), hi(() => {
        window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
      });
    }
    function s(l) {
      i.value = l, a.value || (a.value = "navigation");
    }
    return (l, p) => (y(), E("div", {
      id: "content-vue",
      class: Re(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": v(Gi) }]])
    }, [
      (y(), Be(Bf, { to: "#skip-actions" }, [
        u("div", TC, [
          u("div", kC, f(v(St)("Keyboard navigation help")), 1),
          u("div", AC, [
            ot(Ae(Zn, {
              href: "#app-navigation-vue",
              variant: "tertiary",
              onClick: lt(o, ["prevent"]),
              onFocusin: p[0] || (p[0] = (c) => a.value = "navigation"),
              onMouseover: p[1] || (p[1] = (c) => a.value = "navigation")
            }, {
              default: Me(() => [
                Pe(f(v(St)("Skip to app navigation")), 1)
              ]),
              _: 1
            }, 512), [
              [Va, i.value]
            ]),
            Ae(Zn, {
              href: "#app-content-vue",
              variant: "tertiary",
              onFocusin: p[2] || (p[2] = (c) => a.value = "content"),
              onMouseover: p[3] || (p[3] = (c) => a.value = "content")
            }, {
              default: Me(() => [
                Pe(f(v(St)("Skip to main content")), 1)
              ]),
              _: 1
            })
          ]),
          ot(Ae(nl, {
            class: "vue-skip-actions__image",
            svg: r.value,
            size: "auto"
          }, null, 8, ["svg"]), [
            [Va, !v(n)]
          ])
        ])
      ])),
      De(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
}), NC = /* @__PURE__ */ et(xC, [["__scopeId", "data-v-d13dcb98"]]), OC = ["href"], RC = {
  id: "library-app",
  class: "library-vue-catalogue library-app",
  tabindex: "-1"
}, LC = {
  key: 0,
  class: "library-panel library-review-destination",
  "aria-labelledby": "library-review-heading"
}, IC = { class: "library-review-header" }, PC = { class: "library-muted library-catalogue-eyebrow" }, MC = { id: "library-review-heading" }, DC = ["aria-label"], FC = ["href", "aria-current"], $C = ["aria-label"], zC = ["name", "value"], UC = {
  type: "submit",
  class: "button secondary"
}, BC = ["aria-busy"], HC = { key: 0 }, jC = {
  key: 0,
  class: "library-notice library-review-request-error",
  role: "alert"
}, VC = {
  key: 1,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, KC = { class: "library-metadata-review-workbench-copy" }, GC = { class: "library-muted library-catalogue-eyebrow" }, qC = ["title"], WC = {
  key: 0,
  class: "library-metadata-review-card"
}, YC = { class: "library-muted" }, ZC = { class: "library-metadata-review-fields" }, XC = ["action"], JC = ["value"], QC = ["value"], eE = {
  type: "submit",
  class: "button secondary"
}, tE = { class: "library-metadata-review-actions" }, nE = ["href"], iE = ["href"], aE = {
  key: 2,
  class: "library-review-empty",
  role: "status"
}, rE = ["href"], oE = ["aria-label"], sE = {
  key: 0,
  class: "library-muted"
}, lE = {
  key: 1,
  class: "library-scan-error"
}, cE = ["href"], uE = ["href"], dE = ["aria-label"], fE = ["href"], pE = {
  key: 1,
  class: "library-muted"
}, hE = { key: 0 }, mE = ["href"], vE = {
  key: 3,
  class: "library-muted"
}, gE = {
  key: 1,
  class: "library-panel library-mobile-compact-chrome",
  "aria-labelledby": "library-catalogue-heading"
}, bE = ["aria-label"], yE = {
  class: "library-workspace-panel library-workspace-panel--refine library-filter-panel",
  "data-workspace-panel": "refine"
}, _E = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished library-filter-panel-summary" }, wE = ["title"], CE = { class: "library-workspace-panel-purpose" }, EE = { class: "library-workspace-scope-badge" }, SE = ["aria-label"], TE = ["name", "value"], kE = { class: "library-quick-search-row" }, AE = ["title"], xE = ["aria-label"], NE = { class: "library-quick-filter-options" }, OE = { class: "library-quick-filter-option-grid" }, RE = { value: "title" }, LE = { value: "recent" }, IE = { value: "publicationDate" }, PE = { value: "publication" }, ME = { value: "lastOpened" }, DE = { value: "format" }, FE = { value: "" }, $E = { value: "1" }, zE = ["value"], UE = ["value"], BE = ["aria-label"], HE = ["aria-label"], jE = ["aria-label"], VE = { value: "" }, KE = ["value"], GE = { value: "" }, qE = ["value"], WE = { value: "" }, YE = ["value"], ZE = { value: "" }, XE = ["value"], JE = { value: "" }, QE = ["value"], eS = { value: "" }, tS = ["value"], nS = { value: "" }, iS = ["value"], aS = { value: "" }, rS = ["value"], oS = { value: "" }, sS = ["value"], lS = { value: "" }, cS = ["value"], uS = { value: "" }, dS = { value: "1" }, fS = {
  type: "submit",
  class: "button primary"
}, pS = {
  href: "?",
  class: "button secondary"
}, hS = {
  class: "library-workspace-panel library-workspace-panel--browse library-discovery-shortcuts library-home-dashboard",
  "data-workspace-panel": "browse"
}, mS = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, vS = ["title"], gS = { class: "library-workspace-panel-purpose" }, bS = { class: "library-workspace-scope-badge" }, yS = {
  key: 0,
  class: "library-home-hero-card"
}, _S = ["title"], wS = { class: "library-home-hero-actions" }, CS = ["href"], ES = {
  key: 1,
  class: "library-home-rediscover"
}, SS = { class: "library-muted library-catalogue-eyebrow" }, TS = { class: "library-muted" }, kS = ["aria-label"], AS = ["href", "title"], xS = { class: "library-useful-view-count" }, NS = { class: "library-shortcut-selectors" }, OS = ["title"], RS = { value: "" }, LS = ["value"], IS = {
  key: 1,
  class: "library-shortcut-select-card library-year-groups"
}, PS = { value: "" }, MS = ["value"], DS = {
  key: 2,
  class: "library-shortcut-select-card library-creator-groups"
}, FS = { value: "" }, $S = ["value"], zS = { class: "library-saved-collections" }, US = ["title"], BS = ["action", "title"], HS = ["value"], jS = ["value"], VS = ["placeholder", "disabled"], KS = ["disabled", "title"], GS = ["aria-label"], qS = ["href"], WS = ["action"], YS = ["value"], ZS = {
  type: "submit",
  class: "button tertiary"
}, XS = ["aria-label"], JS = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, QS = ["title"], eT = { class: "library-workspace-panel-purpose" }, tT = { class: "library-workspace-scope-badge" }, nT = { class: "library-batch-action-grid" }, iT = ["action"], aT = ["value"], rT = ["name", "value"], oT = ["placeholder"], sT = ["title"], lT = ["action"], cT = ["value"], uT = ["name", "value"], dT = ["placeholder"], fT = ["title"], pT = ["action"], hT = ["value"], mT = ["name", "value"], vT = ["title"], gT = ["action"], bT = ["value"], yT = ["name", "value"], _T = { name: "bulkEditField" }, wT = { value: "publicationType" }, CT = { value: "subtitle" }, ET = { value: "creators" }, ST = { value: "publication" }, TT = { value: "publicationDate" }, kT = { value: "language" }, AT = { value: "publisher" }, xT = { value: "genres" }, NT = { value: "classifications" }, OT = ["title"], RT = ["action"], LT = ["value"], IT = ["name", "value"], PT = ["title"], MT = {
  class: "library-workspace-panel library-workspace-panel--review library-weak-metadata-dashboard",
  "data-workspace-panel": "review"
}, DT = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, FT = ["title"], $T = { class: "library-workspace-panel-purpose" }, zT = { class: "library-workspace-scope-badge" }, UT = ["aria-label"], BT = ["href", "title"], HT = {
  class: "library-review-queue-actions",
  "aria-label": "Review queue shortcuts"
}, jT = ["title"], VT = ["href"], KT = ["href"], GT = ["action"], qT = ["value"], WT = {
  type: "submit",
  class: "button secondary"
}, YT = ["title"], ZT = ["href"], XT = ["action"], JT = ["value"], QT = {
  type: "submit",
  class: "button secondary"
}, ek = {
  key: 0,
  class: "library-metadata-review-workbench",
  "aria-labelledby": "library-metadata-review-workbench-heading"
}, tk = { class: "library-metadata-review-workbench-copy" }, nk = { class: "library-muted library-catalogue-eyebrow" }, ik = ["title"], ak = {
  key: 0,
  class: "library-metadata-review-card"
}, rk = { class: "library-muted" }, ok = { class: "library-metadata-review-fields" }, sk = ["action"], lk = ["value"], ck = ["value"], uk = {
  type: "submit",
  class: "button secondary"
}, dk = { class: "library-metadata-review-actions" }, fk = ["href"], pk = ["href"], hk = {
  key: 1,
  class: "library-muted"
}, mk = ["href"], vk = { class: "library-workspace-panel-summary library-workspace-panel-summary--polished" }, gk = ["title"], bk = { class: "library-workspace-panel-purpose" }, yk = { class: "library-workspace-scope-badge" }, _k = { class: "library-catalogue-actions-list" }, wk = ["href"], Ck = ["href"], Ek = ["href"], Sk = ["href"], Tk = { class: "library-actions-health-overview" }, kk = { class: "library-muted library-catalogue-eyebrow" }, Ak = ["title"], xk = {
  key: 0,
  class: "library-muted"
}, Nk = {
  key: 1,
  class: "library-notice"
}, Ok = {
  key: 2,
  class: "library-muted"
}, Rk = {
  key: 0,
  class: "library-muted"
}, Lk = {
  key: 1,
  class: "library-muted"
}, Ik = {
  key: 2,
  class: "library-muted"
}, Pk = ["disabled"], Mk = { class: "library-actions-health-links" }, Dk = ["href"], Fk = ["href"], $k = ["href"], zk = ["href"], Uk = { class: "library-actions-health-grid" }, Bk = { class: "library-import-health-number" }, Hk = { class: "library-import-health-number" }, jk = { class: "library-muted" }, Vk = { class: "library-muted" }, Kk = {
  key: 0,
  class: "library-import-health-examples"
}, Gk = { class: "library-catalogue-header" }, qk = {
  key: 0,
  class: "library-muted library-catalogue-eyebrow"
}, Wk = { id: "library-catalogue-heading" }, Yk = {
  key: 0,
  class: "library-warning library-batch-limit-error"
}, Zk = {
  key: 1,
  class: "library-notice library-batch-metadata-apply-result"
}, Xk = {
  key: 2,
  class: "library-discovery-hero",
  "aria-labelledby": "library-discovery-heading"
}, Jk = { class: "library-muted library-catalogue-eyebrow" }, Qk = ["title"], eA = {
  class: "library-discovery-hero-metrics",
  "aria-label": "Discovery summary"
}, tA = { key: 0 }, nA = { key: 1 }, iA = { key: 2 }, aA = {
  key: 0,
  class: "library-publication-issue-context",
  "aria-label": "Publication issue/date context"
}, rA = { key: 0 }, oA = { key: 1 }, sA = {
  key: 1,
  class: "library-publication-issue-groups",
  "aria-labelledby": "library-publication-issue-groups-heading"
}, lA = { class: "library-muted library-catalogue-eyebrow" }, cA = ["title"], uA = {
  class: "library-publication-issue-strip",
  "aria-label": "Visual issue strip"
}, dA = ["href"], fA = {
  key: 0,
  class: "library-notice"
}, pA = { class: "library-publication-issue-label" }, hA = ["href"], mA = { class: "library-muted" }, vA = {
  key: 1,
  class: "library-publication-unknown-issues"
}, gA = ["title"], bA = ["href"], yA = {
  class: "library-view-mode-toggle",
  "aria-label": "Cover view mode"
}, _A = ["aria-pressed"], wA = ["aria-pressed"], CA = ["aria-pressed"], EA = { class: "library-catalogue-status-row" }, SA = { class: "library-muted library-filter-result-summary" }, TA = { key: 0 }, kA = { href: "?" }, AA = ["aria-label"], xA = { class: "library-pagination-range" }, NA = { key: 0 }, OA = ["href"], RA = {
  key: 1,
  class: "library-muted"
}, LA = ["href"], IA = {
  key: 3,
  class: "library-muted"
}, PA = ["aria-label"], MA = ["href", "aria-label"], DA = ["title"], FA = { class: "library-empty-actions" }, $A = ["href"], zA = { class: "library-muted" }, UA = ["title"], BA = { class: "library-empty-actions" }, HA = ["href"], jA = ["title"], VA = { class: "library-empty-actions" }, KA = ["href"], GA = {
  href: "?",
  class: "button primary"
}, qA = ["title"], WA = { class: "library-empty-actions" }, YA = ["href"], ZA = ["href", "aria-label"], XA = { class: "library-cover-frame" }, JA = {
  key: 0,
  class: "library-cover-loading-shimmer",
  "aria-hidden": "true"
}, QA = ["src", "alt", "onLoad", "onError"], e2 = {
  key: 1,
  class: "library-cover-fallback",
  role: "status"
}, t2 = ["action", "onSubmit"], n2 = ["value"], i2 = ["value"], a2 = ["aria-pressed", "title", "aria-label", "aria-busy", "disabled", "onClick"], r2 = ["data-library-star-error"], o2 = { class: "library-cover-summary" }, s2 = { class: "library-cover-primary" }, l2 = ["aria-label"], c2 = ["href"], u2 = ["onToggle"], d2 = ["aria-label"], f2 = { class: "library-cover-meta" }, p2 = {
  key: 0,
  class: "library-creator"
}, h2 = { class: "library-cover-detail-list" }, m2 = { class: "library-cover-detail-chip" }, v2 = {
  key: 0,
  class: "library-cover-detail-chip"
}, g2 = {
  key: 1,
  class: "library-cover-detail-chip"
}, b2 = {
  key: 2,
  class: "library-cover-detail-chip"
}, y2 = {
  key: 3,
  class: "library-cover-detail-chip"
}, _2 = {
  key: 4,
  class: "library-cover-detail-chip"
}, w2 = {
  key: 5,
  class: "library-cover-detail-chip"
}, C2 = {
  key: 6,
  class: "library-cover-detail-chip"
}, E2 = {
  key: 1,
  class: "library-muted library-cover-description"
}, S2 = {
  key: 2,
  class: "library-item-scan-status library-scan-error"
}, T2 = { key: 0 }, k2 = {
  class: "library-nextcloud-tags library-cover-tags",
  "aria-label": "nextcloudTags"
}, A2 = {
  key: 0,
  class: "library-muted"
}, x2 = { class: "library-cover-actions" }, N2 = ["href"], O2 = ["href"], R2 = ["onClick"], L2 = ["href"], I2 = ["aria-label"], P2 = { class: "library-pagination-range" }, M2 = { key: 0 }, D2 = ["href"], F2 = {
  key: 1,
  class: "library-muted"
}, $2 = ["href"], z2 = {
  key: 3,
  class: "library-muted"
}, U2 = {
  class: "library-sidebar-content",
  "aria-live": "polite"
}, B2 = {
  key: 0,
  class: "library-muted",
  role: "status"
}, H2 = ["role"], j2 = {
  id: "library-detail-drawer-keyboard-hint",
  class: "library-muted"
}, V2 = ["src", "alt"], K2 = { class: "library-muted library-catalogue-eyebrow" }, G2 = { key: 0 }, q2 = {
  key: 0,
  class: "library-sidebar-description"
}, W2 = { class: "library-detail-drawer-facts" }, Y2 = { key: 0 }, Z2 = { key: 1 }, X2 = { key: 2 }, J2 = { key: 3 }, Q2 = { key: 4 }, ex = { key: 5 }, tx = {
  key: 1,
  class: "library-sidebar-provenance",
  "aria-labelledby": "library-sidebar-provenance-heading"
}, nx = { id: "library-sidebar-provenance-heading" }, ix = {
  key: 0,
  class: "library-muted"
}, ax = {
  key: 2,
  class: "library-sidebar-review",
  "aria-labelledby": "library-sidebar-review-heading"
}, rx = { id: "library-sidebar-review-heading" }, ox = { class: "library-detail-drawer-actions" }, sx = ["href"], lx = ["href"], cx = ["aria-label"], ux = ["disabled"], dx = ["disabled"], fx = "/apps/library", px = 2147483647, hx = {
  __name: "App",
  props: {
    state: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = e, n = ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"], i = [25, 50, 100, 250, 500], a = Object.freeze([
      { key: "needsMetadata", value: "1", countKey: "needs-metadata", label: "Needs metadata" },
      { key: "scannerConflicts", value: "1", countKey: "scanner-conflicts", label: "Scanner conflicts" },
      { key: "status", value: "metadata_error", countKey: "metadata-errors", label: "Metadata errors" },
      { key: "coverReview", value: "placeholder", countKey: "placeholder-covers", label: "Placeholder covers" },
      { key: "noCreator", value: "1", countKey: "no-creator", label: "Missing creator" },
      { key: "noPublication", value: "1", countKey: "no-publication", label: "Missing publication/series" },
      { key: "noDate", value: "1", countKey: "missing-date", label: "Missing date" },
      { key: "titleFromFilename", value: "1", countKey: "title-from-filename", label: "Filename-derived title" },
      { key: "weakMetadata", value: "filename", countKey: "weak-filename-metadata", label: "Weak filename metadata" },
      { key: "noDescription", value: "1", countKey: "no-description", label: "No description" },
      { key: "unsupportedContainer", value: "1", countKey: "unsupported-containers", label: "Unsupported container" },
      { key: "unreviewedImports", value: "1", countKey: "unreviewed-imports", label: "Unreviewed imports" }
    ]), r = Object.freeze(Object.fromEntries(a.map(({ key: k, value: T }) => [k, T])));
    function o(k, T) {
      return Object.prototype.hasOwnProperty.call(r, k) && String(T ?? "").trim() === r[k];
    }
    function s(k) {
      const T = new URLSearchParams(k);
      for (const g of Object.keys(r)) {
        const re = [...new Set([...T.keys()].filter((Ze) => Ze === g || Ze.startsWith(`${g}[`)))], $e = re.reduce((Ze, wt) => Ze + T.getAll(wt).length, 0);
        if ($e > 1 || re.some((Ze) => Ze !== g)) {
          for (const Ze of re) T.delete(Ze);
          continue;
        }
        g !== "status" && $e === 1 && !o(g, T.get(g)) && T.delete(g);
      }
      return T;
    }
    function l(k) {
      return Object.keys(r).some((T) => k.getAll(T).length === 1 && o(T, k.get(T)));
    }
    function p(k) {
      return Object.fromEntries(Object.entries(k || {}).filter(([T, g]) => T === "status" || !Object.prototype.hasOwnProperty.call(r, T) || o(T, g)));
    }
    const c = /* @__PURE__ */ Yt({
      ...t.state,
      items: t.state.items || [],
      activeFilters: t.state.activeFilters || {},
      cataloguePagination: t.state.cataloguePagination || {}
    }), h = /* @__PURE__ */ Yt((c.items || []).map((k) => ({ ...k }))), b = q(() => h), C = q(() => c.shelves || []), N = q(() => c.formats || []), S = q(() => c.publications || []), R = q(() => c.publicationSummaries || []), L = q(() => c.publicationIssueContext || null), D = q(() => c.publicationYears || []), H = q(() => c.creators || []), $ = q(() => c.scanStatuses || []), ce = q(() => c.workflowStatuses || []), pe = q(() => c.genres || []), te = q(() => c.classifications || []), ne = q(() => c.cataloguePagination || {
      page: 1,
      limit: 100,
      total: b.value.length,
      visible: b.value.length,
      from: b.value.length > 0 ? 1 : 0,
      to: b.value.length,
      previousUrl: "",
      nextUrl: ""
    }), P = /* @__PURE__ */ Yt({
      q: c.activeFilters?.q || "",
      view: c.activeFilters?.view || "compact",
      type: c.activeFilters?.type || "",
      publication: c.activeFilters?.publication || "",
      year: c.activeFilters?.year || "",
      creator: c.activeFilters?.creator || "",
      format: c.activeFilters?.format || "",
      tag: c.activeFilters?.tag || "",
      shelf: c.activeFilters?.shelf || "",
      status: c.activeFilters?.status || "",
      workflowStatus: c.activeFilters?.workflowStatus || "",
      genre: c.activeFilters?.genre || "",
      classification: c.activeFilters?.classification || "",
      scannerConflicts: c.activeFilters?.scannerConflicts || "",
      starred: c.activeFilters?.starred || "",
      needsMetadata: c.activeFilters?.needsMetadata || "",
      coverReview: c.activeFilters?.coverReview || "",
      noCreator: c.activeFilters?.noCreator || "",
      noPublication: c.activeFilters?.noPublication || "",
      noDate: c.activeFilters?.noDate || "",
      titleFromFilename: c.activeFilters?.titleFromFilename || "",
      noDescription: c.activeFilters?.noDescription || "",
      unsupportedContainer: c.activeFilters?.unsupportedContainer || "",
      weakMetadata: c.activeFilters?.weakMetadata || "",
      unreviewedImports: c.activeFilters?.unreviewedImports || "",
      sort: c.activeFilters?.sort || "title"
    });
    for (const k of Object.keys(r))
      k !== "status" && (o(k, P[k]) || (P[k] = ""));
    const le = Object.fromEntries(Object.keys(P).map((k) => [k, k === "sort" ? "title" : k === "view" ? "compact" : ""])), ge = window.location.pathname.indexOf(fx), X = ge >= 0 ? window.location.pathname.slice(0, ge) : "", ie = {
      catalogue: `${X}/apps/library/`,
      review: `${X}/apps/library/?scannerConflicts=1`,
      settings: `${X}/settings/user/library`
    };
    function M(k, T) {
      if (typeof k != "string" || k === "") return T;
      try {
        const g = X ? `${X}/` : "/";
        let re = k;
        for (let $e = 0; $e < 5; $e += 1) {
          if (!re.startsWith("/") || re.startsWith("//") || /[\\\u0000-\u001f\u007f]/.test(re)) return T;
          const Ze = new URL(re, window.location.origin);
          if (Ze.origin !== window.location.origin || !Ze.pathname.startsWith(g)) return T;
          const wt = re.split(/[?#]/, 1)[0];
          for (const xa of wt.split("/")) {
            let Na = xa;
            for (let Oa = 0; Oa < 5; Oa += 1) {
              const jn = decodeURIComponent(Na);
              if (/[\\/\u0000-\u001f\u007f]/.test(jn) || jn === "." || jn === "..") return T;
              if (jn === Na) break;
              if (Na = jn, Oa === 4) return T;
            }
          }
          const un = decodeURI(re);
          if (un === re) return k;
          re = un;
        }
        return T;
      } catch {
        return T;
      }
    }
    const F = q(() => M(c.settingsUrl, ie.settings)), W = q(() => M(c.catalogueRootUrl, ie.catalogue)), oe = q(() => M(c.reviewUrl || c.scannerConflictReviewUrl, ie.review)), Q = q(() => Object.entries(r).some(([k, T]) => P[k] === T)), de = q(() => c.requestToken || ""), ve = q(() => c.metadataExportUrl || ""), we = q(() => c.metadataSidecarManifestUrl || ""), Ce = q(() => c.metadataSidecarBundleUrl || ""), Ve = q(() => c.catalogueEndpointUrl || "/apps/library/catalogue"), Te = q(() => c.itemSidebarUrlTemplate || `${X}/apps/library/items/__ITEM_ID__/sidebar`), tt = q(() => c.batchTagUrl || "/apps/library/bulk/tags"), Qe = q(() => c.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), ft = q(() => c.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), bt = q(() => c.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), nt = q(() => c.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), kt = q(() => c.scannerConflictReviewUrl || "?scannerConflicts=1"), U = q(() => c.metadataErrorsUrl || "/apps/library/health/metadata-errors"), m = q(() => c.metadataErrorsTsvUrl || "/apps/library/health/metadata-errors.tsv"), w = q(() => c.coverProbeUrl || "/apps/library/health/covers/probe"), A = q(() => c.importHealthSummaryUrl || "/apps/library/health/import-summary"), x = /* @__PURE__ */ Yt({
      summary: c.importHealthSummary || {},
      loaded: !!(c.importHealthSummary && Object.keys(c.importHealthSummary).length > 0),
      loading: !1,
      refreshing: !1,
      error: ""
    }), O = q(() => x.summary || {}), z = q(() => {
      const k = Number(O.value.generatedAt || 0);
      return k > 0 ? new Date(k * 1e3).toLocaleString() : "";
    }), V = q(() => O.value.metadataErrorReview || { total: 0, byExtension: [], byError: [], examples: [], reviewUrl: "?status=metadata_error" }), K = q(() => O.value.archiveMagicSummary || { totalChecked: 0, mismatches: 0, byExtensionAndContainer: [], examples: [] }), J = q(() => O.value.coverHealthSummary || { totalChecked: 0, byFormat: [], examples: [], note: "" }), j = q(() => c.discoveryPage === "publication"), be = q(() => c.discoveryPage === "year"), se = q(() => c.discoveryPage === "creator"), me = q(() => j.value || be.value || se.value), Ee = q(() => c.discoveryTitle || P.publication || P.year || P.creator || ""), Oe = q(() => me.value ? Ee.value : d("library", "Library")), Y = q(() => se.value ? d("library", "Creator") : be.value ? d("library", "Publication year") : d("library", "Publication / series")), Z = q(() => Number(c.rootCount || 0)), ue = q(() => Number(c.enabledRootCount || 0)), ke = q(() => Z.value === 0), Le = q(() => Z.value > 0 && ue.value === 0), Ke = q(() => It.value.length > 0), Ue = {
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
    }, dt = q(() => {
      if (typeof window > "u") return "";
      const k = new URLSearchParams(window.location.search);
      if (k.get("batchMetadataApplyResult") !== "1") return "";
      const T = k.get("batchMetadataField") || "field", g = k.get("batchMetadataApplied") || "0", re = k.get("batchMetadataUnchanged") || "0", $e = k.get("batchMetadataSkipped") || "0";
      return d("library", "Batch metadata apply updated {applied} {field} values; {unchanged} already matched, {skipped} skipped.", { applied: g, field: T, unchanged: re, skipped: $e });
    }), at = q(() => typeof window > "u" ? "" : new URLSearchParams(window.location.search).get("batchLimitError") === "1" ? d("library", "This batch matches more than 5,000 items. Narrow the selection and try again.") : ""), ut = q(() => c.savedCollections || []), Xt = q(() => c.savedCollectionSaveUrl || "/apps/library/collections"), zn = q(() => c.savedCollectionDeleteBaseUrl || "/apps/library/collections/__COLLECTION_ID__/delete"), Un = ["compact", "gallery", "shelf"], Vt = q(() => Un.includes(P.view) ? P.view : "compact"), Nn = q(() => ({
      "library-cover-gallery--compact": Vt.value === "compact",
      "library-cover-gallery--gallery": Vt.value === "gallery",
      "library-cover-gallery--shelf": Vt.value === "shelf"
    })), It = q(() => Object.entries(Ue).map(([k, T]) => ({ key: k, label: T, value: P[k] || "" })).filter((k) => String(k.value).trim() !== "")), Ei = q(() => Object.entries(P).filter(([k, T]) => !["q", "sort", "starred"].includes(k) && String(T || "").trim() !== "").map(([k, T]) => ({ key: k, value: T }))), rn = q(() => Object.entries(p(P)).filter(([k, T]) => String(T || "").trim() !== "").map(([k, T]) => ({ key: k, value: T }))), Si = q(() => rn.value.filter(({ key: k, value: T }) => k !== "q" && !(k === "sort" && T === "title"))), on = /* @__PURE__ */ Yt({}), Ti = /* @__PURE__ */ Yt({}), sn = q(() => b.value.filter((k) => k.starred || k.workflowStatus === "reading" || k.lastOpenedAt).slice(0, 5)), Jt = q(() => b.value.find((k) => k.description || k.publication || k.creators) || b.value[0] || null), Kt = q(() => !me.value && b.value.length > 0), Ne = /* @__PURE__ */ Ct(null), ki = /* @__PURE__ */ Ct(null), yt = /* @__PURE__ */ Yt({ loading: !1, error: "", missing: !1 }), uo = /* @__PURE__ */ Ct(null), Bn = /* @__PURE__ */ Ct(null), On = /* @__PURE__ */ Ct(!1);
    let Ca = null, ln = null, Ea = null, Qn = !1, qi = null, Za = 0;
    const it = q(() => ki.value !== null), vn = q(() => Ne.value ? b.value.findIndex((k) => k.id === Ne.value.id) : -1), Sa = q(() => vn.value > 0 ? b.value[vn.value - 1] : null), Wi = q(() => vn.value >= 0 && vn.value < b.value.length - 1 ? b.value[vn.value + 1] : null), Xa = ["publicationType", "title", "subtitle", "creators", "publication", "publicationDate", "language", "publisher", "description", "genres", "classifications"], ht = q(() => {
      const k = o("scannerConflicts", P.scannerConflicts) || o("weakMetadata", P.weakMetadata), T = k ? b.value.find((g) => Ta(g).length > 0) : null;
      return {
        enabled: k,
        item: T,
        fields: T ? Ta(T) : [],
        reviewNextUrl: kt.value,
        skipUrl: ne.value.nextUrl || kt.value
      };
    }), fo = q(() => a.map((k) => ({
      ...k,
      href: `${W.value}?${encodeURIComponent(k.key)}=${encodeURIComponent(k.value)}`,
      active: String(P[k.key] || "") === k.value
    })));
    function Ja(k) {
      return Array.isArray(k) ? JSON.stringify(k) : k == null ? "" : String(k);
    }
    function Ta(k) {
      const T = k.fieldValues || {}, g = k.fieldSources || {};
      return Xa.filter((re) => Object.prototype.hasOwnProperty.call(T, re)).map((re) => {
        const $e = Ja(k[re]), Ze = Ja(T[re]), wt = Ja(g[re] || k.metadataSource || "scanner"), un = wt.includes("filename") || wt.includes("path") ? Ze : "", xa = wt.includes("sidecar") ? Ze : "";
        return { field: re, currentValue: $e, scannerCandidate: Ze, pathTemplateCandidate: un, sidecarValue: xa, sourceProvenance: wt, differs: $e !== Ze };
      }).filter((re) => re.differs);
    }
    let ei = 0, ti = null;
    function Rn() {
      const k = new URLSearchParams(window.location.search).getAll("item");
      if (k.length !== 1 || !/^[1-9][0-9]*$/.test(k[0])) return null;
      const T = Number(k[0]);
      return Number.isSafeInteger(T) && T <= px ? T : null;
    }
    function Qa(k, T = "push") {
      const g = new URL(window.location.href);
      g.searchParams.delete("item"), k !== null && g.searchParams.set("item", String(k)), history[`${T}State`]({}, "", `${g.pathname}${g.search}${g.hash}`);
    }
    async function Hn(k, { historyMode: T = "push", seed: g = null } = {}) {
      ti?.abort();
      const re = ++ei, $e = new AbortController();
      ti = $e, ki.value = k, Ne.value = g && Number(g.id) === k ? g : null, Object.assign(yt, { loading: !0, error: "", missing: !1 }), T !== "none" && Qa(k, T);
      try {
        const Ze = Te.value.replace("__ITEM_ID__", encodeURIComponent(String(k))), wt = await fetch(Ze, { headers: { Accept: "application/json" }, credentials: "same-origin", signal: $e.signal });
        if (re !== ei) return;
        if (!wt.ok) {
          Ne.value = null, yt.missing = wt.status === 404, yt.error = wt.status === 404 ? d("library", "This publication is unavailable or you do not have access.") : d("library", "Could not load publication details. Try again.");
          return;
        }
        const un = await wt.json();
        if (re !== ei) return;
        if (typeof un?.item?.id != "number" || !Number.isSafeInteger(un.item.id) || un.item.id !== k) {
          Ne.value = null, yt.missing = !1, yt.error = d("library", "Could not load publication details. Try again.");
          return;
        }
        Ne.value = un.item, await hi();
      } catch (Ze) {
        re === ei && Ze?.name !== "AbortError" && (Ne.value = null, yt.missing = !1, yt.error = d("library", "Could not load publication details. Try again."));
      } finally {
        re === ei && (yt.loading = !1, ti = null);
      }
    }
    function Ln(k, T) {
      er(), Ca = T?.currentTarget instanceof HTMLElement ? T.currentTarget : null, Hn(Number(k.id), { seed: k });
    }
    function ka({ historyMode: k = "push", restoreFocus: T = !0 } = {}) {
      Ea = T ? Ca : null, Ca = null, ti?.abort(), ti = null, ei += 1, ki.value = null, Ne.value = null, Object.assign(yt, { loading: !1, error: "", missing: !1 }), k !== "none" && Qa(null, k);
    }
    function Yi() {
      On.value ? (Bn.value?.$refs?.sidebar || Bn.value?.$el)?.querySelector?.(".app-sidebar__close")?.focus() : uo.value?.focus();
    }
    function po() {
      const k = Ea;
      if (Ea = null, er(), Qn || !k?.isConnected) return;
      const T = Za;
      qi = window.requestAnimationFrame(() => {
        qi = null, !(T !== Za || Qn || it.value || !k.isConnected) && k.focus();
      });
    }
    function er() {
      Za += 1, qi !== null && (window.cancelAnimationFrame(qi), qi = null);
    }
    function Ai(k = ln) {
      On.value = !!k?.matches, it.value && hi(Yi);
    }
    function Zi(k) {
      k && Hn(Number(k.id), { seed: k });
    }
    const gn = /* @__PURE__ */ Ct(null);
    let xi = null, Qt = 0, Gt = null;
    const At = /* @__PURE__ */ Yt({ loading: !1, error: "" });
    function cn(k) {
      const T = s(new FormData(k));
      for (const g of Array.from(T.keys()))
        String(T.get(g) || "").trim() === "" && T.delete(g);
      return T.delete("page"), T.get("view") === "compact" && T.delete("view"), T;
    }
    function ll(k) {
      h.splice(0, h.length, ...(k.items || []).map((T) => ({ ...T })));
      for (const T of ["shelves", "formats", "publications", "publicationSummaries", "publicationIssueContext", "publicationYears", "publicationYearLandingUrls", "creators", "creatorLandingUrls", "scanStatuses", "workflowStatuses", "genres", "classifications", "cataloguePagination", "catalogueRootUrl", "reviewUrl", "settingsUrl", "metadataExportUrl", "metadataSidecarManifestUrl", "metadataSidecarBundleUrl", "catalogueEndpointUrl", "itemSidebarUrlTemplate", "batchTagUrl", "batchTagRemoveUrl", "batchMetadataResetUrl", "batchMetadataEditPreviewUrl", "batchCoverRefreshUrl", "scannerConflictReviewUrl", "metadataErrorsUrl", "metadataErrorsTsvUrl", "coverProbeUrl", "importHealthSummaryUrl", "smartViewCounts", "savedCollections", "savedCollectionSaveUrl", "savedCollectionDeleteBaseUrl"])
        Object.prototype.hasOwnProperty.call(k, T) && (c[T] = k[T]);
      Object.assign(P, le, k.activeFilters || {});
    }
    async function Xi(k = !1) {
      if (!(x.loading || x.refreshing)) {
        k ? x.refreshing = !0 : x.loading = !0, x.error = "";
        try {
          const T = await fetch(`${A.value}${k ? "?refresh=1" : ""}`, {
            headers: { Accept: "application/json" },
            credentials: "same-origin"
          });
          if (!T.ok)
            throw new Error(`Import health request failed: ${T.status}`);
          x.summary = await T.json(), x.loaded = !0;
        } catch (T) {
          x.error = T?.message || String(T);
        } finally {
          x.loading = !1, x.refreshing = !1;
        }
      }
    }
    async function cl(k) {
      k && k.currentTarget && k.currentTarget.open !== !0 || x.loaded || x.loading || await Xi(!1);
    }
    async function ho() {
      await Xi(!0);
    }
    async function bn(k, T = null) {
      const g = k?.currentTarget?.tagName === "FORM" ? k.currentTarget : k?.currentTarget?.form;
      if (!g && !T?.params) return;
      const re = s(T?.params ?? cn(g)), $e = re.toString(), Ze = $e ? `?${$e}` : "", wt = T?.generation ?? ++Qt, un = l(re), xa = T?.historyMode ?? (un ? "push" : "replace"), Na = T?.historyTraversal === !0;
      if (wt !== Qt) return;
      T === null && Gt?.abort();
      const Oa = new AbortController();
      Gt = Oa, At.loading = !0, At.error = "";
      try {
        const jn = await fetch(Ve.value + Ze, {
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: Oa.signal
        });
        if (wt !== Qt) return;
        if (!jn.ok) {
          Na ? Ji(re) : un ? At.error = d("library", "Could not load this review queue. Try again.") : Ji(re);
          return;
        }
        const Kh = await jn.json();
        if (wt !== Qt) return;
        ll(Kh), xa !== "none" && (history[xa === "push" ? "pushState" : "replaceState"]({}, "", $e ? `?${$e}` : window.location.pathname), it.value && ka({ historyMode: "none" }));
      } catch (jn) {
        wt === Qt && jn?.name !== "AbortError" && (Na ? Ji(re) : un ? At.error = d("library", "Could not load this review queue. Try again.") : Ji(re));
      } finally {
        wt === Qt && (Gt = null, At.loading = !1);
      }
    }
    function tr() {
      Gt?.abort();
      const k = new URLSearchParams(window.location.search), T = Rn();
      k.has("item") && T === null && (k.delete("item"), history.replaceState({}, "", `${window.location.pathname}${k.toString() ? `?${k}` : ""}${window.location.hash}`)), T === null ? ka({ historyMode: "none" }) : Hn(T, { historyMode: "none", seed: b.value.find((g) => Number(g.id) === T) || null }), k.delete("item"), bn(null, {
        params: s(k),
        generation: ++Qt,
        historyMode: "none",
        historyTraversal: !0
      });
    }
    function Ji(k) {
      const T = document.createElement("form");
      T.method = "get", T.action = window.location.pathname, T.hidden = !0;
      for (const [g, re] of k.entries()) {
        const $e = document.createElement("input");
        $e.type = "hidden", $e.name = g, $e.value = re, T.appendChild($e);
      }
      document.body.appendChild(T), T.submit(), T.remove();
    }
    function mo(k, T = null, g = null) {
      if (T === null) {
        bn(k);
        return;
      }
      bn({ currentTarget: k }, { params: T, generation: g });
    }
    function vo(k) {
      const T = k?.currentTarget?.form;
      if (!T) return;
      window.clearTimeout(xi);
      const g = ++Qt, re = cn(T);
      Gt?.abort(), Gt = null, xi = window.setTimeout(() => mo(T, re, g), 350);
    }
    function go(k) {
      const T = new URLSearchParams();
      for (const [re, $e] of Object.entries(P)) {
        const Ze = String($e || "").trim();
        Ze !== "" && re !== k && !(re === "sort" && Ze === "title") && !(re === "view" && Ze === "compact") && T.set(re, Ze);
      }
      const g = T.toString();
      return g ? `?${g}` : "?";
    }
    function ul() {
      return go("q");
    }
    const Aa = q(() => c.smartViewCounts || {}), Qi = q(() => {
      const k = {};
      for (const [T, g] of Object.entries(P)) {
        const re = String(g || "").trim();
        re !== "" && !(T === "sort" && re === "title") && (k[T] = re);
      }
      return k;
    }), nr = q(() => JSON.stringify(Qi.value)), ee = q(() => Object.keys(Qi.value).length > 0), _ = q(() => [
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
    ]), I = q(() => [
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
    function G(k) {
      if (!Un.includes(k)) return;
      P.view = k;
      const T = s(window.location.search);
      k === "compact" ? T.delete("view") : T.set("view", k), T.delete("page"), history.replaceState({}, "", T.toString() ? `?${T.toString()}` : window.location.pathname);
    }
    function fe(k) {
      const T = s(window.location.search);
      for (const re of Object.keys(Ue))
        T.delete(re);
      T.delete("page");
      for (const [re, $e] of Object.entries(k))
        String($e || "").trim() !== "" && T.set(re, String($e));
      const g = T.toString();
      return g ? `?${g}` : "?";
    }
    function ye(k) {
      return fe(k || {});
    }
    function xe(k) {
      return zn.value.replace("__COLLECTION_ID__", encodeURIComponent(String(k || "0")));
    }
    function Ye(k) {
      return String(k || "").toUpperCase();
    }
    function rt(k) {
      return k.nextcloudTags || [];
    }
    function Pt(k) {
      return R.value.find((g) => g.publication === k)?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(k)}`;
    }
    function Mt(k) {
      return c.publicationYearLandingUrls?.[k] || `/apps/library/years/${encodeURIComponent(k)}`;
    }
    function ir(k) {
      return c.creatorLandingUrls?.[k] || `/apps/library/creators/${encodeURIComponent(k)}`;
    }
    function _t(k) {
      const T = k?.target?.value || "";
      T && (window.location.href = T);
    }
    function ar(k) {
      return Ti[k.id] || "loading";
    }
    function $h(k) {
      Ti[k.id] = "loaded";
    }
    function zh(k) {
      Ti[k.id] = "error";
    }
    function Uh(k, T) {
      on[k] = !!T?.currentTarget?.open;
    }
    function Bh(k) {
      const T = String(k?.tagName || "").toLowerCase();
      return k?.isContentEditable || ["input", "select", "textarea", "button"].includes(T);
    }
    function Hh(k) {
      if (k.key !== "/" || k.metaKey || k.ctrlKey || k.altKey || k.shiftKey || Bh(k.target))
        return;
      k.preventDefault();
      const T = gn.value?.closest?.(".library-workspace-panel--refine");
      T && (T.open = !0), gn.value?.focus(), gn.value?.select?.();
    }
    function jh(k) {
      k.key !== "Escape" || document.activeElement !== gn.value || P.q === "" || (k.preventDefault(), P.q = "", gn.value.value = "", window.clearTimeout(xi), mo({ currentTarget: gn.value }));
    }
    function Vh(k) {
      if (!it.value || k.metaKey || k.ctrlKey || k.altKey)
        return !1;
      if (k.key === "Escape")
        return k.preventDefault(), ka(), !0;
      if (k.key === "Tab" && On.value) {
        if (Bn.value?.focusTrap) return !1;
        const T = Bn.value?.$refs?.sidebar || Bn.value?.$el || Bn.value, g = [...T?.querySelectorAll?.('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])') || []].filter((Ze) => !Ze.hidden && Ze.getAttribute("aria-hidden") !== "true");
        if (g.length === 0) return !1;
        const re = g[0], $e = g[g.length - 1];
        if (k.shiftKey && (document.activeElement === re || !T.contains(document.activeElement)))
          return k.preventDefault(), $e.focus(), !0;
        if (!k.shiftKey && (document.activeElement === $e || !T.contains(document.activeElement)))
          return k.preventDefault(), re.focus(), !0;
      }
      return k.key === "ArrowLeft" && Sa.value ? (k.preventDefault(), Zi(Sa.value), !0) : k.key === "ArrowRight" && Wi.value ? (k.preventDefault(), Zi(Wi.value), !0) : !1;
    }
    function du(k) {
      Vh(k) || (Hh(k), jh(k));
    }
    Vi(() => {
      window.addEventListener("keydown", du), window.addEventListener("popstate", tr), ln = window.matchMedia?.("(max-width: 1023px)") || null, Ai(), ln?.addEventListener ? ln.addEventListener("change", Ai) : ln?.addListener?.(Ai);
      const k = new URLSearchParams(window.location.search), T = Rn();
      k.has("item") && T === null ? (k.delete("item"), history.replaceState({}, "", `${window.location.pathname}${k.toString() ? `?${k}` : ""}${window.location.hash}`)) : T !== null && Hn(T, { historyMode: "none", seed: b.value.find((g) => Number(g.id) === T) || null });
    }), Ya(() => {
      Qn = !0, er(), window.removeEventListener("keydown", du), window.removeEventListener("popstate", tr), window.clearTimeout(xi), Qt += 1, Gt?.abort(), Gt = null, ei += 1, ti?.abort(), ti = null, ln?.removeEventListener ? ln.removeEventListener("change", Ai) : ln?.removeListener?.(Ai), ln = null, Ea = null;
    });
    const rr = /* @__PURE__ */ Yt({}), or = /* @__PURE__ */ Yt({});
    async function fu(k, T) {
      const g = T?.currentTarget?.closest?.("form") || T?.currentTarget;
      if (!g || !k?.starUrl || rr[k.id]) return;
      const re = !!k.starred;
      rr[k.id] = !0, or[k.id] = "", k.starred = !re;
      try {
        (await fetch(k.starUrl, {
          method: "POST",
          body: new FormData(g),
          credentials: "same-origin"
        })).ok || (k.starred = re, or[k.id] = d("library", "Could not update star. Try again."));
      } catch {
        k.starred = re, or[k.id] = d("library", "Could not update star. Try again.");
      } finally {
        rr[k.id] = !1;
      }
    }
    return (k, T) => (y(), Be(v(NC), { "app-name": "library" }, {
      default: Me(() => [
        Ae(v(b_), {
          "aria-label": v(d)("library", "Library navigation")
        }, {
          list: Me(() => [
            Ae(v(th), null, {
              default: Me(() => [
                Ae(v(Qd), {
                  active: !Q.value,
                  href: W.value,
                  name: v(d)("library", "Library")
                }, null, 8, ["active", "href", "name"]),
                Ae(v(Qd), {
                  active: Q.value,
                  href: oe.value,
                  name: v(d)("library", "Review")
                }, null, 8, ["active", "href", "name"])
              ]),
              _: 1
            })
          ]),
          footer: Me(() => [
            u("a", {
              class: "library-navigation-settings-link",
              href: F.value
            }, [
              T[24] || (T[24] = u("span", {
                class: "library-navigation-settings-icon",
                "aria-hidden": "true"
              }, "⚙", -1)),
              u("span", null, f(v(d)("library", "Settings")), 1)
            ], 8, OC)
          ]),
          _: 1
        }, 8, ["aria-label"]),
        Ae(v(Py), null, {
          default: Me(() => [
            u("div", RC, [
              Q.value ? (y(), E("section", LC, [
                u("header", IC, [
                  u("p", PC, f(v(d)("library", "Metadata cleanup")), 1),
                  u("h2", MC, f(v(d)("library", "Review")), 1),
                  u("p", null, f(v(d)("library", "Work through catalogue items that need a metadata decision. Source files remain in Nextcloud Files.")), 1)
                ]),
                u("nav", {
                  class: "library-review-queues",
                  "aria-label": v(d)("library", "Review queues")
                }, [
                  (y(!0), E(he, null, ze(fo.value, (g) => (y(), E("a", {
                    key: g.key,
                    class: Re(["library-review-queue-link", { active: g.active }]),
                    href: g.href,
                    "aria-current": g.active ? "page" : void 0
                  }, [
                    u("span", null, f(v(d)("library", g.label)), 1),
                    u("b", null, f(Number(Aa.value[g.countKey] || 0)), 1)
                  ], 10, FC))), 128))
                ], 8, DC),
                u("form", {
                  method: "get",
                  class: "library-review-filter-form",
                  "aria-label": v(d)("library", "Filter current review queue"),
                  onSubmit: lt(bn, ["prevent"])
                }, [
                  (y(!0), E(he, null, ze(Si.value, (g) => (y(), E("input", {
                    key: `review-${g.key}`,
                    type: "hidden",
                    name: g.key,
                    value: g.value
                  }, null, 8, zC))), 128)),
                  u("label", null, [
                    Pe(f(v(d)("library", "Search within this queue")), 1),
                    ot(u("input", {
                      "onUpdate:modelValue": T[0] || (T[0] = (g) => P.q = g),
                      type: "search",
                      name: "q"
                    }, null, 512), [
                      [Mo, P.q]
                    ])
                  ]),
                  u("button", UC, f(v(d)("library", "Apply")), 1)
                ], 40, $C),
                u("div", {
                  class: "library-review-request-status",
                  role: "status",
                  "aria-live": "polite",
                  "aria-busy": At.loading ? "true" : "false"
                }, [
                  At.loading ? (y(), E("span", HC, f(v(d)("library", "Loading review queue…")), 1)) : B("", !0)
                ], 8, BC),
                At.error ? (y(), E("p", jC, f(At.error), 1)) : B("", !0),
                ht.value.enabled ? (y(), E("section", VC, [
                  u("div", KC, [
                    u("p", GC, f(v(d)("library", "Metadata review workbench")), 1),
                    u("h3", {
                      id: "library-metadata-review-workbench-heading",
                      title: v(d)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                    }, f(v(d)("library", "Review next conflict")), 9, qC)
                  ]),
                  ht.value.item ? (y(), E("article", WC, [
                    u("header", null, [
                      u("strong", null, f(ht.value.item.title), 1),
                      u("span", YC, f(ht.value.item.cachedPath), 1)
                    ]),
                    u("div", ZC, [
                      (y(!0), E(he, null, ze(ht.value.fields, (g) => (y(), E("article", {
                        key: g.field,
                        class: "library-metadata-review-field"
                      }, [
                        u("h4", null, f(g.field), 1),
                        u("dl", null, [
                          u("div", null, [
                            u("dt", null, f(v(d)("library", "Current value")), 1),
                            u("dd", null, f(g.currentValue || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, f(v(d)("library", "scanner candidate")), 1),
                            u("dd", null, f(g.scannerCandidate || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, f(v(d)("library", "path-template candidate")), 1),
                            u("dd", null, f(g.pathTemplateCandidate || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, f(v(d)("library", "sidecar value")), 1),
                            u("dd", null, f(g.sidecarValue || "—"), 1)
                          ]),
                          u("div", null, [
                            u("dt", null, f(v(d)("library", "source provenance")), 1),
                            u("dd", null, f(g.sourceProvenance || "—"), 1)
                          ])
                        ]),
                        u("form", {
                          method: "post",
                          action: ht.value.item.resetFieldUrl,
                          class: "library-metadata-review-accept-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: de.value
                          }, null, 8, JC),
                          u("input", {
                            type: "hidden",
                            name: "field",
                            value: g.field
                          }, null, 8, QC),
                          T[25] || (T[25] = u("input", {
                            type: "hidden",
                            name: "returnTo",
                            value: "catalogue"
                          }, null, -1)),
                          u("button", eE, f(v(d)("library", "accept scanner candidate")), 1)
                        ], 8, XC)
                      ]))), 128))
                    ]),
                    u("footer", tE, [
                      u("a", {
                        class: "button secondary",
                        href: ht.value.item.detailsUrl
                      }, f(v(d)("library", "Open full details")), 9, nE),
                      u("a", {
                        class: "button secondary",
                        href: ht.value.skipUrl
                      }, f(v(d)("library", "Skip to next conflict")), 9, iE)
                    ])
                  ])) : B("", !0)
                ])) : B("", !0),
                b.value.length === 0 && !At.loading && !At.error ? (y(), E("div", aE, [
                  u("h3", null, f(v(d)("library", "This review queue is clear")), 1),
                  u("p", null, f(v(d)("library", "Choose another queue or return to the catalogue.")), 1),
                  u("a", {
                    class: "button primary",
                    href: W.value
                  }, f(v(d)("library", "Back to Library")), 9, rE)
                ])) : (y(), E("div", {
                  key: 3,
                  class: "library-review-results",
                  "aria-label": v(d)("library", "Review results")
                }, [
                  (y(!0), E(he, null, ze(b.value, (g) => (y(), E("article", {
                    key: g.id,
                    class: "library-review-result-card"
                  }, [
                    u("div", null, [
                      u("h3", null, f(g.title), 1),
                      g.creators ? (y(), E("p", sE, f(g.creators), 1)) : B("", !0),
                      g.scanError ? (y(), E("p", lE, f(g.scanError), 1)) : B("", !0)
                    ]),
                    u("p", null, [
                      u("a", {
                        class: "button secondary",
                        href: g.detailsUrl
                      }, f(v(d)("library", "Open full details")), 9, cE),
                      u("a", {
                        class: "button primary",
                        href: g.openUrl
                      }, f(v(d)("library", "Read")), 9, uE)
                    ])
                  ]))), 128))
                ], 8, oE)),
                b.value.length > 0 ? (y(), E("nav", {
                  key: 4,
                  class: "library-pagination",
                  "aria-label": v(d)("library", "Review pagination")
                }, [
                  ne.value.previousUrl ? (y(), E("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, f(v(d)("library", "Previous")), 9, fE)) : (y(), E("span", pE, f(v(d)("library", "Previous")), 1)),
                  u("span", null, [
                    Pe(f(v(d)("library", "Page")) + " " + f(ne.value.page), 1),
                    ne.value.total > 0 ? (y(), E("span", hE, " · " + f(ne.value.from) + "–" + f(ne.value.to), 1)) : B("", !0)
                  ]),
                  ne.value.nextUrl ? (y(), E("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, f(v(d)("library", "Next")), 9, mE)) : (y(), E("span", vE, f(v(d)("library", "Next")), 1))
                ], 8, dE)) : B("", !0)
              ])) : (y(), E("section", gE, [
                u("nav", {
                  class: "library-catalogue-workspace library-workspace-menubar",
                  "aria-label": v(d)("library", "One catalogue workspace")
                }, [
                  u("details", yE, [
                    u("summary", _E, [
                      T[26] || (T[26] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "⌕", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: v(d)("library", "Search, sort and filters narrow the current result set. Active chips explain every constraint and can be removed one at a time.")
                      }, f(v(d)("library", "Refine results")), 9, wE),
                      u("small", CE, f(v(d)("library", "Filters, facets and saved filter shortcuts")), 1),
                      u("b", EE, f(P.shelf ? v(d)("library", "this shelf") : It.value.length > 0 ? v(d)("library", "current results") : v(d)("library", "whole catalogue")), 1)
                    ]),
                    u("form", {
                      method: "get",
                      class: "library-quick-filter-bar",
                      "aria-label": v(d)("library", "Quick catalogue filters"),
                      onSubmit: lt(bn, ["prevent"])
                    }, [
                      (y(!0), E(he, null, ze(Ei.value, (g) => (y(), E("input", {
                        key: g.key,
                        type: "hidden",
                        name: g.key,
                        value: g.value
                      }, null, 8, TE))), 128)),
                      u("div", kE, [
                        u("label", {
                          class: "library-quick-filter-search",
                          title: v(d)("library", "Search also checks descriptions. Descriptions, filename and folder names are searchable, which helps sparse PDFs and comics whose useful metadata only lives in their path or notes.")
                        }, [
                          u("span", null, [
                            Pe(f(v(d)("library", "Search title, creator, description, filename or folder")) + " ", 1),
                            T[27] || (T[27] = u("kbd", { class: "library-keyboard-hint" }, "/", -1))
                          ]),
                          ot(u("input", {
                            ref_key: "quickSearchInput",
                            ref: gn,
                            "onUpdate:modelValue": T[1] || (T[1] = (g) => P.q = g),
                            "data-library-quick-search": "",
                            type: "search",
                            name: "q",
                            placeholder: "Camera, Eco, Rolleiflex, description or folder...",
                            onInput: vo
                          }, null, 544), [
                            [Mo, P.q]
                          ])
                        ], 8, AE),
                        u("button", {
                          type: "submit",
                          class: "button primary",
                          "aria-label": v(d)("library", "Search catalogue")
                        }, f(v(d)("library", "Search")), 9, xE)
                      ]),
                      u("details", NE, [
                        u("summary", null, f(v(d)("library", "Filter & sort")), 1),
                        u("div", OE, [
                          u("label", null, [
                            Pe(f(v(d)("library", "Sort")), 1),
                            ot(u("select", {
                              "onUpdate:modelValue": T[2] || (T[2] = (g) => P.sort = g),
                              name: "sort",
                              onChange: bn
                            }, [
                              u("option", RE, f(v(d)("library", "Title")), 1),
                              u("option", LE, f(v(d)("library", "Recently added")), 1),
                              u("option", IE, f(v(d)("library", "Publication date")), 1),
                              u("option", PE, f(v(d)("library", "Series")), 1),
                              u("option", ME, f(v(d)("library", "Recently opened")), 1),
                              u("option", DE, f(v(d)("library", "Format")), 1)
                            ], 544), [
                              [dn, P.sort]
                            ])
                          ]),
                          u("label", null, [
                            Pe(f(v(d)("library", "Starred")), 1),
                            ot(u("select", {
                              "onUpdate:modelValue": T[3] || (T[3] = (g) => P.starred = g),
                              name: "starred",
                              onChange: bn
                            }, [
                              u("option", FE, f(v(d)("library", "All")), 1),
                              u("option", $E, f(v(d)("library", "Starred")), 1)
                            ], 544), [
                              [dn, P.starred]
                            ])
                          ]),
                          u("label", null, [
                            Pe(f(v(d)("library", "Size")), 1),
                            u("select", {
                              value: ne.value.limit,
                              name: "limit",
                              onChange: bn
                            }, [
                              (y(), E(he, null, ze(i, (g) => u("option", {
                                key: g,
                                value: g
                              }, f(g), 9, UE)), 64))
                            ], 40, zE)
                          ]),
                          u("button", {
                            type: "submit",
                            class: "button secondary",
                            "aria-label": v(d)("library", "Apply catalogue filters")
                          }, f(v(d)("library", "Apply filters")), 9, BE),
                          u("a", {
                            href: "?",
                            class: "button secondary",
                            "aria-label": v(d)("library", "Clear catalogue filters")
                          }, f(v(d)("library", "Clear all")), 9, HE)
                        ])
                      ])
                    ], 40, SE),
                    u("form", {
                      method: "get",
                      class: "library-filter-bar",
                      "aria-label": v(d)("library", "Catalogue search and filters"),
                      onSubmit: lt(bn, ["prevent"])
                    }, [
                      u("label", null, [
                        Pe(f(v(d)("library", "Type")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[4] || (T[4] = (g) => P.type = g),
                          name: "type"
                        }, [
                          u("option", VE, f(v(d)("library", "All types")), 1),
                          (y(), E(he, null, ze(n, (g) => u("option", {
                            key: g,
                            value: g
                          }, f(g), 9, KE)), 64))
                        ], 512), [
                          [dn, P.type]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Series / periodical")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[5] || (T[5] = (g) => P.publication = g),
                          name: "publication"
                        }, [
                          u("option", GE, f(v(d)("library", "All series and periodicals")), 1),
                          (y(!0), E(he, null, ze(S.value, (g) => (y(), E("option", {
                            key: g,
                            value: g
                          }, f(g), 9, qE))), 128))
                        ], 512), [
                          [dn, P.publication]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Publication year")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[6] || (T[6] = (g) => P.year = g),
                          name: "year"
                        }, [
                          u("option", WE, f(v(d)("library", "All years")), 1),
                          (y(!0), E(he, null, ze(D.value, (g) => (y(), E("option", {
                            key: g,
                            value: g
                          }, f(g), 9, YE))), 128))
                        ], 512), [
                          [dn, P.year]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Creator")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[7] || (T[7] = (g) => P.creator = g),
                          name: "creator",
                          title: "Exact full-field creator matches only"
                        }, [
                          u("option", ZE, f(v(d)("library", "All creators")), 1),
                          (y(!0), E(he, null, ze(H.value, (g) => (y(), E("option", {
                            key: g,
                            value: g
                          }, f(g), 9, XE))), 128))
                        ], 512), [
                          [dn, P.creator]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Nextcloud tag")), 1),
                        ot(u("input", {
                          "onUpdate:modelValue": T[8] || (T[8] = (g) => P.tag = g),
                          type: "text",
                          name: "tag",
                          placeholder: "photography"
                        }, null, 512), [
                          [Mo, P.tag]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Format")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[9] || (T[9] = (g) => P.format = g),
                          name: "format"
                        }, [
                          u("option", JE, f(v(d)("library", "All formats")), 1),
                          (y(!0), E(he, null, ze(N.value, (g) => (y(), E("option", {
                            key: g,
                            value: g
                          }, f(Ye(g)), 9, QE))), 128))
                        ], 512), [
                          [dn, P.format]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Shelf")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[10] || (T[10] = (g) => P.shelf = g),
                          name: "shelf"
                        }, [
                          u("option", eS, f(v(d)("library", "All shelves")), 1),
                          (y(!0), E(he, null, ze(C.value, (g) => (y(), E("option", {
                            key: g,
                            value: g
                          }, f(g), 9, tS))), 128))
                        ], 512), [
                          [dn, P.shelf]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Scan status")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[11] || (T[11] = (g) => P.status = g),
                          name: "status"
                        }, [
                          u("option", nS, f(v(d)("library", "All scan statuses")), 1),
                          (y(!0), E(he, null, ze($.value, (g) => (y(), E("option", {
                            key: g,
                            value: g
                          }, f(g), 9, iS))), 128))
                        ], 512), [
                          [dn, P.status]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Workflow status")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[12] || (T[12] = (g) => P.workflowStatus = g),
                          name: "workflowStatus"
                        }, [
                          u("option", aS, f(v(d)("library", "All workflow statuses")), 1),
                          (y(!0), E(he, null, ze(ce.value, (g) => (y(), E("option", {
                            key: g,
                            value: g
                          }, f(g), 9, rS))), 128))
                        ], 512), [
                          [dn, P.workflowStatus]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Genre")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[13] || (T[13] = (g) => P.genre = g),
                          name: "genre"
                        }, [
                          u("option", oS, f(v(d)("library", "All genres")), 1),
                          (y(!0), E(he, null, ze(pe.value, (g) => (y(), E("option", {
                            key: g,
                            value: g
                          }, f(g), 9, sS))), 128))
                        ], 512), [
                          [dn, P.genre]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Classification")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[14] || (T[14] = (g) => P.classification = g),
                          name: "classification"
                        }, [
                          u("option", lS, f(v(d)("library", "All classifications")), 1),
                          (y(!0), E(he, null, ze(te.value, (g) => (y(), E("option", {
                            key: g,
                            value: g
                          }, f(g), 9, cS))), 128))
                        ], 512), [
                          [dn, P.classification]
                        ])
                      ]),
                      u("label", null, [
                        Pe(f(v(d)("library", "Scanner conflicts")), 1),
                        ot(u("select", {
                          "onUpdate:modelValue": T[15] || (T[15] = (g) => P.scannerConflicts = g),
                          name: "scannerConflicts"
                        }, [
                          u("option", uS, f(v(d)("library", "All metadata")), 1),
                          u("option", dS, f(v(d)("library", "Needs review")), 1)
                        ], 512), [
                          [dn, P.scannerConflicts]
                        ])
                      ]),
                      u("button", fS, f(v(d)("library", "Apply filters")), 1),
                      u("a", pS, f(v(d)("library", "Clear")), 1)
                    ], 40, jE)
                  ]),
                  u("details", hS, [
                    u("summary", mS, [
                      T[28] || (T[28] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "↗", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: v(d)("library", "Shortcuts reopen ordinary catalogue views, so filters, chips and pagination stay consistent.")
                      }, f(v(d)("library", "Browse shortcuts")), 9, vS),
                      u("small", gS, f(v(d)("library", "Continue reading, recently added, rediscover and useful views")), 1),
                      u("b", bS, f(v(d)("library", "whole catalogue")), 1)
                    ]),
                    Kt.value ? (y(), E("article", yS, [
                      u("h3", {
                        title: v(d)("library", "Fast entry points keep browsing visual: continue, revisit recent additions, or rediscover one shelf item.")
                      }, f(v(d)("library", "Continue reading")), 9, _S),
                      u("div", wS, [
                        sn.value[0] ? (y(), E("a", {
                          key: 0,
                          class: "button primary",
                          href: sn.value[0].openUrl
                        }, f(v(d)("library", "Read now")), 9, CS)) : B("", !0),
                        sn.value[0] ? (y(), E("button", {
                          key: 1,
                          type: "button",
                          class: "button secondary",
                          onClick: T[16] || (T[16] = (g) => Ln(sn.value[0], g))
                        }, f(v(d)("library", "Details")), 1)) : B("", !0)
                      ])
                    ])) : B("", !0),
                    Jt.value ? (y(), E("article", ES, [
                      u("p", SS, f(v(d)("library", "Rediscover")), 1),
                      u("strong", null, f(Jt.value.title), 1),
                      u("span", TS, f(Jt.value.creators || Jt.value.publication || Jt.value.cachedPath), 1),
                      u("button", {
                        type: "button",
                        class: "button secondary",
                        onClick: T[17] || (T[17] = (g) => Ln(Jt.value, g))
                      }, f(v(d)("library", "Peek")), 1)
                    ])) : B("", !0),
                    u("nav", {
                      class: "library-useful-view-links",
                      "aria-label": v(d)("library", "Useful views")
                    }, [
                      (y(!0), E(he, null, ze(_.value, (g) => (y(), E("a", {
                        key: g.key,
                        class: "library-useful-view-chip",
                        href: fe(g.filters),
                        title: v(d)("library", g.description)
                      }, [
                        u("strong", null, f(v(d)("library", g.label)), 1),
                        u("small", xS, f(Number(Aa.value[g.key] || 0)), 1)
                      ], 8, AS))), 128))
                    ], 8, kS),
                    u("div", NS, [
                      R.value.length > 0 ? (y(), E("label", {
                        key: 0,
                        class: "library-shortcut-select-card library-periodical-groups",
                        title: v(d)("library", "Jump into recurring publications with one click.")
                      }, [
                        u("span", null, f(v(d)("library", "Series / periodicals")), 1),
                        u("select", { onChange: _t }, [
                          u("option", RS, f(v(d)("library", "Choose series")), 1),
                          (y(!0), E(he, null, ze(R.value, (g) => (y(), E("option", {
                            key: g.publication,
                            value: Pt(g.publication)
                          }, f(g.publication) + " · " + f(g.itemCount), 9, LS))), 128))
                        ], 32)
                      ], 8, OS)) : B("", !0),
                      D.value.length > 0 ? (y(), E("label", IS, [
                        u("span", null, f(v(d)("library", "Publication year")), 1),
                        u("select", { onChange: _t }, [
                          u("option", PS, f(v(d)("library", "Choose year")), 1),
                          (y(!0), E(he, null, ze(D.value, (g) => (y(), E("option", {
                            key: g,
                            value: Mt(g)
                          }, f(g), 9, MS))), 128))
                        ], 32)
                      ])) : B("", !0),
                      H.value.length > 0 ? (y(), E("label", DS, [
                        u("span", null, f(v(d)("library", "Creator")), 1),
                        u("select", { onChange: _t }, [
                          u("option", FS, f(v(d)("library", "Choose creator")), 1),
                          (y(!0), E(he, null, ze(H.value, (g) => (y(), E("option", {
                            key: g,
                            value: ir(g)
                          }, f(g), 9, $S))), 128))
                        ], 32)
                      ])) : B("", !0)
                    ]),
                    u("section", zS, [
                      u("h3", {
                        title: v(d)("library", "Save the current in-app filter setup as a named collection, then reopen it without leaving Library.")
                      }, f(v(d)("library", "Custom collections")), 9, US),
                      u("form", {
                        method: "post",
                        action: Xt.value,
                        class: "library-saved-collection-save-form",
                        title: ee.value ? "" : v(d)("library", "Choose search terms or filters first, then save them as a custom collection.")
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: de.value
                        }, null, 8, HS),
                        u("input", {
                          type: "hidden",
                          name: "savedCollectionFilters",
                          value: nr.value
                        }, null, 8, jS),
                        u("label", null, [
                          Pe(f(v(d)("library", "Collection name")), 1),
                          u("input", {
                            type: "text",
                            name: "savedCollectionName",
                            placeholder: v(d)("library", "e.g. Bremen photo books"),
                            disabled: !ee.value,
                            autocomplete: "off"
                          }, null, 8, VS)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          disabled: !ee.value,
                          title: v(d)("library", "Save current view")
                        }, f(v(d)("library", "Save")), 9, KS)
                      ], 8, BS),
                      ut.value.length > 0 ? (y(), E("nav", {
                        key: 0,
                        class: "library-saved-collection-links",
                        "aria-label": v(d)("library", "Saved custom collections")
                      }, [
                        (y(!0), E(he, null, ze(ut.value, (g) => (y(), E("article", {
                          key: g.id,
                          class: "library-saved-collection-card"
                        }, [
                          u("a", {
                            class: "library-saved-collection-link",
                            href: ye(g.filters)
                          }, [
                            u("strong", null, f(g.name), 1),
                            u("span", null, f(Number(g.count || 0)) + " " + f(v(d)("library", "items")), 1)
                          ], 8, qS),
                          u("form", {
                            method: "post",
                            action: xe(g.id),
                            class: "library-saved-collection-delete-form"
                          }, [
                            u("input", {
                              type: "hidden",
                              name: "requesttoken",
                              value: de.value
                            }, null, 8, YS),
                            u("button", ZS, f(v(d)("library", "Delete")), 1)
                          ], 8, WS)
                        ]))), 128))
                      ], 8, GS)) : B("", !0)
                    ])
                  ]),
                  u("details", {
                    class: "library-workspace-panel library-workspace-panel--batch library-batch-actions",
                    "data-workspace-panel": "batch",
                    "aria-label": v(d)("library", "Batch actions for current results")
                  }, [
                    u("summary", JS, [
                      T[29] || (T[29] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "✓", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: v(d)("library", "Every batch action uses the current filters, names its scope, and returns changed / unchanged / skipped / error feedback.")
                      }, f(v(d)("library", "Batch actions")), 9, QS),
                      u("small", eT, f(v(d)("library", "Preview and apply changes to current results")), 1),
                      u("b", tT, f(ne.value.total) + " " + f(v(d)("library", "Current filter result")), 1)
                    ]),
                    u("div", nT, [
                      u("form", {
                        method: "post",
                        action: tt.value,
                        class: "library-batch-action-card library-batch-tag-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: de.value
                        }, null, 8, aT),
                        (y(!0), E(he, null, ze(rn.value, (g) => (y(), E("input", {
                          key: g.key,
                          type: "hidden",
                          name: g.key,
                          value: g.value
                        }, null, 8, rT))), 128)),
                        u("label", null, [
                          u("span", null, f(v(d)("library", "Add tag")), 1),
                          u("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: v(d)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, oT)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button primary",
                          title: v(d)("library", "Uses the current filters, not just this page. Limit: 5,000 matched items.")
                        }, f(v(d)("library", "Apply")), 9, sT)
                      ], 8, iT),
                      u("form", {
                        method: "post",
                        action: Qe.value,
                        class: "library-batch-action-card library-batch-tag-remove-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: de.value
                        }, null, 8, cT),
                        (y(!0), E(he, null, ze(rn.value, (g) => (y(), E("input", {
                          key: `remove-tag-${g.key}`,
                          type: "hidden",
                          name: g.key,
                          value: g.value
                        }, null, 8, uT))), 128)),
                        u("label", null, [
                          u("span", null, f(v(d)("library", "Remove tag")), 1),
                          u("input", {
                            type: "text",
                            name: "nextcloudTagName",
                            list: "library-nextcloud-tag-suggestions",
                            placeholder: v(d)("library", "e.g. Review"),
                            autocomplete: "off"
                          }, null, 8, dT)
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(d)("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed.")
                        }, f(v(d)("library", "Remove")), 9, fT)
                      ], 8, lT),
                      u("form", {
                        method: "post",
                        action: ft.value,
                        class: "library-batch-action-card library-batch-metadata-reset-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: de.value
                        }, null, 8, hT),
                        (y(!0), E(he, null, ze(rn.value, (g) => (y(), E("input", {
                          key: `reset-${g.key}`,
                          type: "hidden",
                          name: g.key,
                          value: g.value
                        }, null, 8, mT))), 128)),
                        T[30] || (T[30] = u("input", {
                          type: "hidden",
                          name: "scannerConflicts",
                          value: "1"
                        }, null, -1)),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(d)("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates.")
                        }, f(v(d)("library", "Reset metadata")), 9, vT)
                      ], 8, pT),
                      u("form", {
                        method: "post",
                        action: bt.value,
                        class: "library-batch-action-card library-batch-action-card--wide library-batch-metadata-edit-preview-form",
                        target: "_blank"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: de.value
                        }, null, 8, bT),
                        (y(!0), E(he, null, ze(rn.value, (g) => (y(), E("input", {
                          key: `edit-preview-${g.key}`,
                          type: "hidden",
                          name: g.key,
                          value: g.value
                        }, null, 8, yT))), 128)),
                        u("label", null, [
                          u("span", null, f(v(d)("library", "Field")), 1),
                          u("select", _T, [
                            u("option", wT, f(v(d)("library", "Publication type")), 1),
                            u("option", CT, f(v(d)("library", "Subtitle")), 1),
                            u("option", ET, f(v(d)("library", "Creators")), 1),
                            u("option", ST, f(v(d)("library", "Series / periodical")), 1),
                            u("option", TT, f(v(d)("library", "Publication date")), 1),
                            u("option", kT, f(v(d)("library", "Language")), 1),
                            u("option", AT, f(v(d)("library", "Publisher")), 1),
                            u("option", xT, f(v(d)("library", "Genres")), 1),
                            u("option", NT, f(v(d)("library", "Classifications")), 1)
                          ])
                        ]),
                        u("label", null, [
                          u("span", null, f(v(d)("library", "Value")), 1),
                          T[31] || (T[31] = u("input", {
                            type: "text",
                            name: "bulkEditValue",
                            placeholder: "magazine, de, photography...",
                            autocomplete: "off"
                          }, null, -1))
                        ]),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(d)("library", "Preview first, then apply from the review page.")
                        }, f(v(d)("library", "Preview edit")), 9, OT)
                      ], 8, gT),
                      u("form", {
                        method: "post",
                        action: nt.value,
                        class: "library-batch-action-card library-batch-cover-refresh-form"
                      }, [
                        u("input", {
                          type: "hidden",
                          name: "requesttoken",
                          value: de.value
                        }, null, 8, LT),
                        (y(!0), E(he, null, ze(rn.value, (g) => (y(), E("input", {
                          key: `cover-${g.key}`,
                          type: "hidden",
                          name: g.key,
                          value: g.value
                        }, null, 8, IT))), 128)),
                        u("button", {
                          type: "submit",
                          class: "button secondary",
                          title: v(d)("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed.")
                        }, f(v(d)("library", "Fresh covers")), 9, PT)
                      ], 8, RT)
                    ])
                  ], 8, XS),
                  u("details", MT, [
                    u("summary", DT, [
                      T[32] || (T[32] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "!", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: v(d)("library", "Review cards compare current values, proposed values, source and consequence before anything changes. Source files stay in Nextcloud Files; compact cards stay browse-first while Details carries repair actions.")
                      }, f(v(d)("library", "Review queue")), 9, FT),
                      u("small", $T, f(v(d)("library", "Weak metadata, conflicts, missing files and extraction errors")), 1),
                      u("b", zT, f(v(d)("library", "current results")), 1)
                    ]),
                    u("nav", {
                      class: "library-weak-metadata-links",
                      "aria-label": v(d)("library", "Weak metadata catalogue views")
                    }, [
                      (y(!0), E(he, null, ze(I.value, (g) => (y(), E("a", {
                        key: g.key,
                        class: "library-weak-metadata-card",
                        href: fe(g.filters),
                        title: v(d)("library", g.description)
                      }, [
                        u("span", null, [
                          u("strong", null, f(v(d)("library", g.label)), 1)
                        ]),
                        u("b", null, f(Number(Aa.value[g.key] || 0)), 1)
                      ], 8, BT))), 128))
                    ], 8, UT),
                    u("div", HT, [
                      u("article", {
                        title: v(d)("library", "Open, export or tag the current metadata-error rows. Uses the existing batch tag route, so source files and Library metadata are not changed.")
                      }, [
                        u("h4", null, f(v(d)("library", "Metadata-error queue")), 1),
                        u("a", {
                          class: "button secondary",
                          href: V.value.reviewUrl || "?status=metadata_error"
                        }, f(v(d)("library", "Open metadata-error rows")), 9, VT),
                        u("a", {
                          class: "button secondary",
                          href: m.value
                        }, f(v(d)("library", "Export metadata-error rows")), 9, KT),
                        u("form", {
                          method: "post",
                          action: tt.value,
                          class: "library-review-queue-tag-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: de.value
                          }, null, 8, qT),
                          T[33] || (T[33] = u("input", {
                            type: "hidden",
                            name: "status",
                            value: "metadata_error"
                          }, null, -1)),
                          T[34] || (T[34] = u("input", {
                            type: "hidden",
                            name: "nextcloudTagName",
                            value: "library-metadata-error"
                          }, null, -1)),
                          u("button", WT, f(v(d)("library", "Tag metadata-error rows")), 1)
                        ], 8, GT)
                      ], 8, jT),
                      u("article", {
                        title: v(d)("library", "Open or tag items where user metadata differs from stored scanner candidates. Library metadata is not changed.")
                      }, [
                        u("h4", null, f(v(d)("library", "Scanner-conflict queue")), 1),
                        u("a", {
                          class: "button secondary",
                          href: kt.value
                        }, f(v(d)("library", "Review scanner conflicts")), 9, ZT),
                        u("form", {
                          method: "post",
                          action: tt.value,
                          class: "library-review-queue-tag-form"
                        }, [
                          u("input", {
                            type: "hidden",
                            name: "requesttoken",
                            value: de.value
                          }, null, 8, JT),
                          T[35] || (T[35] = u("input", {
                            type: "hidden",
                            name: "scannerConflicts",
                            value: "1"
                          }, null, -1)),
                          T[36] || (T[36] = u("input", {
                            type: "hidden",
                            name: "nextcloudTagName",
                            value: "library-scanner-conflict"
                          }, null, -1)),
                          u("button", QT, f(v(d)("library", "Tag scanner-conflict rows")), 1)
                        ], 8, XT)
                      ], 8, YT)
                    ]),
                    ht.value.enabled ? (y(), E("section", ek, [
                      u("div", tk, [
                        u("p", nk, f(v(d)("library", "Metadata review workbench")), 1),
                        u("h3", {
                          id: "library-metadata-review-workbench-heading",
                          title: v(d)("library", "Shows current value, scanner candidate, path-template candidate, sidecar value and source provenance together. No source files are changed; user-edited values are never silently overwritten.")
                        }, f(v(d)("library", "Review next conflict")), 9, ik)
                      ]),
                      ht.value.item ? (y(), E("article", ak, [
                        u("header", null, [
                          u("strong", null, f(ht.value.item.title), 1),
                          u("span", rk, f(ht.value.item.cachedPath), 1)
                        ]),
                        u("div", ok, [
                          (y(!0), E(he, null, ze(ht.value.fields, (g) => (y(), E("article", {
                            key: g.field,
                            class: "library-metadata-review-field"
                          }, [
                            u("h4", null, f(g.field), 1),
                            u("dl", null, [
                              u("div", null, [
                                u("dt", null, f(v(d)("library", "Current value")), 1),
                                u("dd", null, f(g.currentValue || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, f(v(d)("library", "scanner candidate")), 1),
                                u("dd", null, f(g.scannerCandidate || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, f(v(d)("library", "path-template candidate")), 1),
                                u("dd", null, f(g.pathTemplateCandidate || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, f(v(d)("library", "sidecar value")), 1),
                                u("dd", null, f(g.sidecarValue || "—"), 1)
                              ]),
                              u("div", null, [
                                u("dt", null, f(v(d)("library", "source provenance")), 1),
                                u("dd", null, f(g.sourceProvenance || "—"), 1)
                              ])
                            ]),
                            u("form", {
                              method: "post",
                              action: ht.value.item.resetFieldUrl,
                              class: "library-metadata-review-accept-form"
                            }, [
                              u("input", {
                                type: "hidden",
                                name: "requesttoken",
                                value: de.value
                              }, null, 8, lk),
                              u("input", {
                                type: "hidden",
                                name: "field",
                                value: g.field
                              }, null, 8, ck),
                              T[37] || (T[37] = u("input", {
                                type: "hidden",
                                name: "returnTo",
                                value: "catalogue"
                              }, null, -1)),
                              u("button", uk, f(v(d)("library", "accept scanner candidate")), 1)
                            ], 8, sk)
                          ]))), 128))
                        ]),
                        u("footer", dk, [
                          u("a", {
                            class: "button secondary",
                            href: ht.value.item.detailsUrl
                          }, f(v(d)("library", "Open full details")), 9, fk),
                          u("a", {
                            class: "button secondary",
                            href: ht.value.skipUrl
                          }, f(v(d)("library", "Skip to next conflict")), 9, pk)
                        ])
                      ])) : (y(), E("p", hk, f(v(d)("library", "No reviewable conflict is visible on this page. Open scanner conflicts to review the next matching item.")), 1)),
                      u("a", {
                        class: "button secondary",
                        href: ht.value.reviewNextUrl
                      }, f(v(d)("library", "Review next conflict")), 9, mk)
                    ])) : B("", !0)
                  ]),
                  u("details", {
                    class: "library-workspace-panel library-workspace-panel--admin",
                    "data-workspace-panel": "admin",
                    onToggle: cl
                  }, [
                    u("summary", vk, [
                      T[38] || (T[38] = u("span", {
                        class: "library-workspace-panel-icon",
                        "aria-hidden": "true"
                      }, "⚙", -1)),
                      u("span", {
                        class: "library-workspace-panel-title",
                        title: v(d)("library", "Maintain roots, scans, exports and repair operations away from the browse cards.")
                      }, f(v(d)("library", "Admin tools")), 9, gk),
                      u("small", bk, f(v(d)("library", "Roots, scans, exports and repair operations")), 1),
                      u("b", yk, f(v(d)("library", "all enabled roots")), 1)
                    ]),
                    u("div", _k, [
                      u("a", {
                        href: F.value,
                        class: "button secondary",
                        "aria-label": "Open Library settings"
                      }, f(v(d)("library", "Settings")), 9, wk),
                      ve.value ? (y(), E("a", {
                        key: 0,
                        href: ve.value,
                        class: "button secondary",
                        "aria-label": "Export corrected metadata"
                      }, f(v(d)("library", "Export corrected metadata")), 9, Ck)) : B("", !0),
                      we.value ? (y(), E("a", {
                        key: 1,
                        href: we.value,
                        class: "button secondary",
                        "aria-label": "Export sidecar manifest"
                      }, f(v(d)("library", "Sidecar manifest")), 9, Ek)) : B("", !0),
                      Ce.value ? (y(), E("a", {
                        key: 2,
                        href: Ce.value,
                        class: "button secondary",
                        "aria-label": "Export sidecar ZIP"
                      }, f(v(d)("library", "Sidecar ZIP")), 9, Sk)) : B("", !0)
                    ]),
                    u("div", Tk, [
                      u("p", kk, f(v(d)("library", "Import health")), 1),
                      u("h3", {
                        title: v(d)("library", "Cached metadata overview loads quickly. Refresh only when you want to recompute heavier archive and cover diagnostics. Files are left as-is; diagnostics separate Library extraction from Nextcloud/plugin preview.")
                      }, f(v(d)("library", "Metadata overview")), 9, Ak),
                      x.loading ? (y(), E("p", xk, f(v(d)("library", "Loading cached metadata overview…")), 1)) : x.error ? (y(), E("p", Nk, f(x.error), 1)) : x.loaded ? B("", !0) : (y(), E("p", Ok, f(v(d)("library", "Open Admin tools to load the cached metadata and cover overview.")), 1)),
                      x.loaded ? (y(), E(he, { key: 3 }, [
                        O.value.message ? (y(), E("p", Rk, f(O.value.message), 1)) : O.value.cacheStatus === "missing" ? (y(), E("p", Lk, f(v(d)("library", "No cached metadata overview exists yet")), 1)) : B("", !0),
                        z.value ? (y(), E("p", Ik, f(v(d)("library", "Last generated")) + ": " + f(z.value), 1)) : B("", !0),
                        u("button", {
                          type: "button",
                          class: "button secondary library-import-health-refresh",
                          disabled: x.refreshing,
                          onClick: ho
                        }, f(x.refreshing ? v(d)("library", "Refreshing metadata overview…") : v(d)("library", "Refresh metadata overview")), 9, Pk),
                        u("div", Mk, [
                          u("a", {
                            class: "button secondary",
                            href: V.value.reviewUrl || "?status=metadata_error"
                          }, f(v(d)("library", "Review metadata errors")), 9, Dk),
                          u("a", {
                            class: "button secondary",
                            href: U.value
                          }, f(v(d)("library", "Full review")), 9, Fk),
                          u("a", {
                            class: "button secondary",
                            href: m.value
                          }, f(v(d)("library", "Export TSV")), 9, $k),
                          u("a", {
                            class: "button secondary",
                            href: w.value
                          }, f(v(d)("library", "Probe covers")), 9, zk)
                        ]),
                        u("div", Uk, [
                          u("article", null, [
                            u("h4", null, f(v(d)("library", "Metadata errors")), 1),
                            u("p", Bk, f(V.value.total || 0), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, f(v(d)("library", "Archive/container check")), 1),
                            u("p", Hk, f(K.value.mismatches || 0), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, f(v(d)("library", "Cover health")), 1),
                            u("p", jk, f(J.value.note), 1)
                          ]),
                          u("article", null, [
                            u("h4", null, f(v(d)("library", "Cover support matrix")), 1),
                            u("p", Vk, f(v(d)("library", "Nextcloud/plugin preview and Library extraction are separate actors. 7z/RAR files stay left as-is; optional read-only archive tools only inspect copies.")), 1)
                          ]),
                          V.value.examples?.length ? (y(), E("details", Kk, [
                            u("summary", null, f(v(d)("library", "Example files and suggested actions")), 1),
                            u("ul", null, [
                              (y(!0), E(he, null, ze(V.value.examples, (g) => (y(), E("li", {
                                key: `${g.fileId}-${g.path}`
                              }, [
                                u("code", null, f(g.path), 1),
                                u("span", null, f(g.scanStatus) + " · " + f(g.scanError) + " · " + f(g.actualContainerType), 1),
                                u("strong", null, f(g.suggestedRepairAction), 1)
                              ]))), 128))
                            ])
                          ])) : B("", !0)
                        ])
                      ], 64)) : B("", !0)
                    ])
                  ], 32)
                ], 8, bE),
                u("div", Gk, [
                  u("div", null, [
                    me.value ? (y(), E("p", qk, f(Y.value), 1)) : B("", !0),
                    u("h2", Wk, f(Oe.value), 1)
                  ])
                ]),
                at.value ? (y(), E("p", Yk, f(at.value), 1)) : B("", !0),
                dt.value ? (y(), E("p", Zk, f(dt.value), 1)) : B("", !0),
                me.value ? (y(), E("section", Xk, [
                  u("p", Jk, f(Y.value), 1),
                  u("h3", {
                    id: "library-discovery-heading",
                    title: se.value ? v(d)("library", "Items by this creator, sorted by publication context when available.") : be.value ? v(d)("library", "Items from this publication year, sorted by publication date when available.") : v(d)("library", "Items in this publication, sorted by issue/date context when available.")
                  }, f(Ee.value), 9, Qk),
                  u("div", eA, [
                    u("span", null, f(ne.value.total) + " " + f(v(d)("library", "items")), 1),
                    L.value?.earliestYear && L.value?.latestYear ? (y(), E("span", tA, f(L.value.earliestYear) + "–" + f(L.value.latestYear), 1)) : B("", !0),
                    L.value?.datedCount ? (y(), E("span", nA, f(L.value.datedCount) + " " + f(v(d)("library", "dated")), 1)) : B("", !0),
                    L.value?.undatedCount > 0 ? (y(), E("span", iA, f(L.value.undatedCount) + " " + f(v(d)("library", "undated")), 1)) : B("", !0)
                  ]),
                  j.value && L.value ? (y(), E("aside", aA, [
                    u("strong", null, f(v(d)("library", "Publication contents")), 1),
                    u("span", null, f(L.value.itemCount) + " " + f(v(d)("library", "items")), 1),
                    L.value.earliestYear && L.value.latestYear ? (y(), E("span", rA, f(L.value.earliestYear) + "–" + f(L.value.latestYear), 1)) : B("", !0),
                    u("span", null, f(L.value.datedCount) + " " + f(v(d)("library", "with issue/date coverage")), 1),
                    L.value.undatedCount > 0 ? (y(), E("span", oA, f(L.value.undatedCount) + " " + f(v(d)("library", "without dates yet")), 1)) : B("", !0),
                    u("span", null, f(v(d)("library", "read-only grouping")), 1)
                  ])) : B("", !0),
                  j.value && L.value?.issueGroups?.length ? (y(), E("section", sA, [
                    u("div", null, [
                      u("p", lA, f(v(d)("library", "Issue order")), 1),
                      u("h4", {
                        id: "library-publication-issue-groups-heading",
                        title: v(d)("library", "Comics, magazines and periodicals stay visible here even when Library only has dates or filename/path issue candidates. Use item details before editing metadata.")
                      }, f(v(d)("library", "Read-only issue/date grouping")), 9, cA)
                    ]),
                    u("div", uA, [
                      (y(!0), E(he, null, ze(L.value.issueGroups, (g) => (y(), E("a", {
                        key: `strip-${g.label}`,
                        class: "library-issue-strip-card",
                        href: g.items?.[0]?.detailsUrl || "#"
                      }, [
                        u("span", null, f(g.label), 1),
                        u("strong", null, f(g.items?.[0]?.issueLabel || v(d)("library", "Issue")), 1),
                        u("small", null, f(g.items?.length || 0) + " " + f(v(d)("library", "items")), 1)
                      ], 8, dA))), 128))
                    ]),
                    L.value.gapRanges?.length ? (y(), E("p", fA, f(v(d)("library", "Gap")) + ": " + f(L.value.gapRanges.join(", ")), 1)) : B("", !0),
                    (y(!0), E(he, null, ze(L.value.issueGroups, (g) => (y(), E("div", {
                      key: g.label,
                      class: "library-publication-issue-group"
                    }, [
                      u("h5", null, f(g.label), 1),
                      u("ol", null, [
                        (y(!0), E(he, null, ze(g.items, (re, $e) => (y(), E("li", {
                          key: re.itemId
                        }, [
                          u("span", pA, f(re.issueLabel), 1),
                          u("a", {
                            href: re.detailsUrl || "#"
                          }, f(re.title), 9, hA),
                          u("small", null, [
                            Pe(f(re.publicationType), 1),
                            re.publicationDate ? (y(), E(he, { key: 0 }, [
                              Pe(" · " + f(re.publicationDate), 1)
                            ], 64)) : B("", !0)
                          ]),
                          u("small", mA, [
                            $e > 0 ? (y(), E(he, { key: 0 }, [
                              Pe(f(v(d)("library", "Previous issue")), 1)
                            ], 64)) : B("", !0),
                            $e > 0 && $e < g.items.length - 1 ? (y(), E(he, { key: 1 }, [
                              Pe(" · ")
                            ], 64)) : B("", !0),
                            $e < g.items.length - 1 ? (y(), E(he, { key: 2 }, [
                              Pe(f(v(d)("library", "Next issue")), 1)
                            ], 64)) : B("", !0)
                          ])
                        ]))), 128))
                      ])
                    ]))), 128)),
                    L.value.unknownIssueItems?.length ? (y(), E("details", vA, [
                      u("summary", {
                        title: v(d)("library", "Unknown issue/date rows remain visible instead of disappearing from the publication page.")
                      }, f(v(d)("library", "Unknown issue/date")) + " · " + f(L.value.unknownIssueItems.length), 9, gA)
                    ])) : B("", !0)
                  ])) : B("", !0),
                  u("p", null, [
                    u("a", {
                      href: W.value,
                      class: "button secondary library-discovery-back-link"
                    }, f(v(d)("library", "Back to full catalogue")), 9, bA)
                  ])
                ])) : B("", !0),
                u("nav", yA, [
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "compact",
                    class: Re({ active: Vt.value === "compact" }),
                    "aria-pressed": Vt.value === "compact" ? "true" : "false",
                    onClick: T[18] || (T[18] = (g) => G("compact"))
                  }, f(v(d)("library", "Compact")), 11, _A),
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "gallery",
                    class: Re({ active: Vt.value === "gallery" }),
                    "aria-pressed": Vt.value === "gallery" ? "true" : "false",
                    onClick: T[19] || (T[19] = (g) => G("gallery"))
                  }, f(v(d)("library", "Gallery")), 11, wA),
                  u("button", {
                    type: "button",
                    "data-library-view-mode": "shelf",
                    class: Re({ active: Vt.value === "shelf" }),
                    "aria-pressed": Vt.value === "shelf" ? "true" : "false",
                    onClick: T[20] || (T[20] = (g) => G("shelf"))
                  }, f(v(d)("library", "Shelf")), 11, CA)
                ]),
                u("div", EA, [
                  u("p", SA, [
                    Pe(f(v(d)("library", "Showing")) + " " + f(ne.value.from) + "–" + f(ne.value.to) + " " + f(v(d)("library", "of")) + " " + f(ne.value.total) + " " + f(v(d)("library", "catalogue items")), 1),
                    It.value.length > 0 ? (y(), E("span", TA, [
                      T[39] || (T[39] = Pe(" · ", -1)),
                      u("a", kA, f(v(d)("library", "Clear all filters")), 1)
                    ])) : B("", !0)
                  ]),
                  u("nav", {
                    class: "library-pagination library-pagination--top",
                    "aria-label": v(d)("library", "Catalogue pagination")
                  }, [
                    u("span", xA, [
                      Pe(f(v(d)("library", "Page")) + " " + f(ne.value.page), 1),
                      ne.value.total > 0 ? (y(), E("span", NA, " · " + f(ne.value.from) + "–" + f(ne.value.to), 1)) : B("", !0)
                    ]),
                    ne.value.previousUrl ? (y(), E("a", {
                      key: 0,
                      href: ne.value.previousUrl
                    }, f(v(d)("library", "Previous")), 9, OA)) : (y(), E("span", RA, f(v(d)("library", "Previous")), 1)),
                    ne.value.nextUrl ? (y(), E("a", {
                      key: 2,
                      href: ne.value.nextUrl
                    }, f(v(d)("library", "Next")), 9, LA)) : (y(), E("span", IA, f(v(d)("library", "Next")), 1))
                  ], 8, AA)
                ]),
                It.value.length > 0 ? (y(), E("nav", {
                  key: 3,
                  class: "library-active-filter-chips",
                  "aria-label": v(d)("library", "Active filters")
                }, [
                  u("span", null, f(v(d)("library", "Active filters")), 1),
                  (y(!0), E(he, null, ze(It.value, (g) => (y(), E("a", {
                    key: g.key,
                    href: go(g.key),
                    class: "library-filter-chip",
                    "aria-label": `${v(d)("library", "Remove filter")}: ${g.label}`
                  }, [
                    u("strong", null, f(g.label) + ":", 1),
                    Pe(" " + f(g.value) + " ", 1),
                    T[40] || (T[40] = u("span", { "aria-hidden": "true" }, "×", -1))
                  ], 8, MA))), 128))
                ], 8, PA)) : B("", !0),
                b.value.length === 0 ? (y(), E("div", {
                  key: 4,
                  class: Re(["library-empty-content", { "library-first-run-guidance": ke.value || Le.value, "library-filter-empty-state": Ke.value && !ke.value && !Le.value }]),
                  role: "status"
                }, [
                  ke.value ? (y(), E(he, { key: 0 }, [
                    u("h3", {
                      title: v(d)("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue.")
                    }, f(v(d)("library", "Start with one Library root")), 9, DA),
                    u("p", FA, [
                      u("a", {
                        href: F.value,
                        class: "button primary"
                      }, f(v(d)("library", "Add a Library root")), 9, $A),
                      u("span", zA, f(v(d)("library", "Run a scan after saving a root")), 1)
                    ])
                  ], 64)) : Le.value ? (y(), E(he, { key: 1 }, [
                    u("h3", {
                      title: v(d)("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue.")
                    }, f(v(d)("library", "No enabled Library roots")), 9, UA),
                    u("p", BA, [
                      u("a", {
                        href: F.value,
                        class: "button primary"
                      }, f(v(d)("library", "Open Library settings")), 9, HA)
                    ])
                  ], 64)) : Ke.value ? (y(), E(he, { key: 2 }, [
                    u("h3", {
                      title: v(d)("library", "Try a broader search, remove one active chip, or clear every catalogue filter.")
                    }, f(v(d)("library", "No matches for the current filters")), 9, jA),
                    u("p", VA, [
                      u("a", {
                        href: ul(),
                        class: "button secondary"
                      }, f(v(d)("library", "Clear search")), 9, KA),
                      u("a", GA, f(v(d)("library", "Clear all filters")), 1)
                    ])
                  ], 64)) : (y(), E(he, { key: 3 }, [
                    u("h3", {
                      title: v(d)("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files.")
                    }, f(v(d)("library", "No catalogue items yet")), 9, qA),
                    u("p", WA, [
                      u("a", {
                        href: F.value,
                        class: "button primary"
                      }, f(v(d)("library", "Run a scan from settings")), 9, YA)
                    ])
                  ], 64))
                ], 2)) : (y(), E("div", {
                  key: 5,
                  class: Re(["library-cover-gallery", Nn.value])
                }, [
                  (y(!0), E(he, null, ze(b.value, (g) => (y(), E("article", {
                    key: g.id,
                    class: Re(["library-cover-card", { "library-cover-card--open": on[g.id], "library-cover-card--cover-loaded": ar(g) === "loaded", "library-cover-card--cover-error": ar(g) === "error" }])
                  }, [
                    u("a", {
                      class: "library-cover-link",
                      href: g.openUrl,
                      "aria-label": `Read ${g.title}`
                    }, [
                      u("span", XA, [
                        ar(g) === "loading" ? (y(), E("span", JA)) : B("", !0),
                        u("img", {
                          class: Re(["library-cover-image", { "library-cover-image--loaded": ar(g) === "loaded" }]),
                          src: g.coverUrl,
                          alt: `Cover for ${g.title}`,
                          loading: "lazy",
                          onLoad: (re) => $h(g),
                          onError: (re) => zh(g)
                        }, null, 42, QA),
                        ar(g) === "error" ? (y(), E("span", e2, f(v(d)("library", "Cover unavailable")), 1)) : B("", !0)
                      ])
                    ], 8, ZA),
                    u("form", {
                      method: "post",
                      action: g.starUrl,
                      class: "library-cover-star-form",
                      onSubmit: lt((re) => fu(g, re), ["prevent"])
                    }, [
                      u("input", {
                        type: "hidden",
                        name: "requesttoken",
                        value: de.value
                      }, null, 8, n2),
                      T[41] || (T[41] = u("input", {
                        type: "hidden",
                        name: "returnTo",
                        value: "catalogue"
                      }, null, -1)),
                      u("input", {
                        type: "hidden",
                        name: "starred",
                        value: g.starred ? "0" : "1"
                      }, null, 8, i2),
                      u("button", {
                        type: "submit",
                        class: Re(["library-cover-star-button", { "library-cover-star-button--starred": g.starred }]),
                        "aria-pressed": g.starred ? "true" : "false",
                        title: g.starred ? v(d)("library", "Unstar this publication") : v(d)("library", "Star this publication"),
                        "aria-label": g.starred ? v(d)("library", "Unstar this publication") : v(d)("library", "Star this publication"),
                        "aria-busy": rr[g.id] ? "true" : void 0,
                        disabled: rr[g.id],
                        onClick: lt((re) => fu(g, re), ["prevent"])
                      }, f(g.starred ? "★" : "☆"), 11, a2),
                      or[g.id] ? (y(), E("span", {
                        key: 0,
                        "data-library-star-error": g.id,
                        class: "library-star-feedback",
                        role: "alert"
                      }, f(or[g.id]), 9, r2)) : B("", !0)
                    ], 40, t2),
                    u("div", o2, [
                      u("div", s2, [
                        u("h3", null, [
                          g.starred ? (y(), E("span", {
                            key: 0,
                            class: "library-star-marker",
                            "aria-label": v(d)("library", "Starred")
                          }, "★", 8, l2)) : B("", !0),
                          Pe(f(g.title), 1)
                        ]),
                        u("a", {
                          class: "library-cover-read",
                          href: g.openUrl
                        }, f(v(d)("library", "Read")), 9, c2)
                      ]),
                      u("details", {
                        class: "library-cover-details",
                        onToggle: (re) => Uh(g.id, re)
                      }, [
                        u("summary", {
                          class: "library-cover-details-summary",
                          "aria-label": `${v(d)("library", "Show details and actions")}: ${g.title}`
                        }, f(v(d)("library", "Details")), 9, d2),
                        u("div", f2, [
                          g.creators ? (y(), E("p", p2, f(g.creators), 1)) : B("", !0),
                          u("dl", h2, [
                            u("div", m2, [
                              u("dt", null, f(v(d)("library", "Type")), 1),
                              u("dd", null, f(g.publicationType), 1)
                            ]),
                            g.publication ? (y(), E("div", v2, [
                              u("dt", null, f(v(d)("library", "Series")), 1),
                              u("dd", null, f(g.publication), 1)
                            ])) : B("", !0),
                            g.publicationDate ? (y(), E("div", g2, [
                              u("dt", null, f(v(d)("library", "Date")), 1),
                              u("dd", null, f(g.publicationDate), 1)
                            ])) : B("", !0),
                            g.workflowStatus ? (y(), E("div", b2, [
                              u("dt", null, f(v(d)("library", "Status")), 1),
                              u("dd", null, f(g.workflowStatus), 1)
                            ])) : B("", !0),
                            g.hasScannerConflict ? (y(), E("div", y2, [
                              u("dt", null, f(v(d)("library", "Review")), 1),
                              u("dd", null, f(g.scannerConflictCount) + " fields", 1)
                            ])) : B("", !0),
                            g.lastOpenedAt ? (y(), E("div", _2, [
                              u("dt", null, f(v(d)("library", "Last opened")), 1),
                              u("dd", null, f(g.lastOpenedAt), 1)
                            ])) : B("", !0),
                            g.extension ? (y(), E("div", w2, [
                              u("dt", null, f(v(d)("library", "Format")) + ":", 1),
                              u("dd", null, f(Ye(g.extension)), 1)
                            ])) : B("", !0),
                            g.shelf ? (y(), E("div", C2, [
                              u("dt", null, f(v(d)("library", "Shelf")), 1),
                              u("dd", null, f(g.shelf), 1)
                            ])) : B("", !0)
                          ]),
                          g.description ? (y(), E("p", E2, f(g.description), 1)) : B("", !0),
                          g.scanStatus !== "indexed" || g.scanError ? (y(), E("p", S2, [
                            Pe(" scanStatus: " + f(g.scanStatus || "unknown"), 1),
                            g.scanError ? (y(), E("span", T2, " · scanError: " + f(g.scanError), 1)) : B("", !0)
                          ])) : B("", !0),
                          u("div", k2, [
                            rt(g).length === 0 ? (y(), E("span", A2, "No Nextcloud tags")) : (y(!0), E(he, { key: 1 }, ze(rt(g), (re) => (y(), E("span", {
                              key: re.id,
                              class: "library-tag"
                            }, f(re.name), 1))), 128))
                          ]),
                          u("p", x2, [
                            u("a", {
                              href: g.filesUrl
                            }, f(v(d)("library", "Show in Files")), 9, N2),
                            T[42] || (T[42] = Pe(" · ", -1)),
                            u("a", {
                              href: g.downloadUrl
                            }, f(v(d)("library", "Download source")), 9, O2),
                            T[43] || (T[43] = Pe(" · ", -1)),
                            u("button", {
                              type: "button",
                              class: "library-link-button library-cover-details-drawer-button",
                              onClick: (re) => Ln(g, re)
                            }, f(v(d)("library", "Quick details")), 9, R2),
                            T[44] || (T[44] = Pe(" · ", -1)),
                            u("a", {
                              href: g.detailsUrl
                            }, f(v(d)("library", "Open full details")), 9, L2)
                          ])
                        ])
                      ], 40, u2)
                    ])
                  ], 2))), 128))
                ], 2)),
                b.value.length > 0 ? (y(), E("nav", {
                  key: 6,
                  class: "library-pagination library-pagination--bottom",
                  "aria-label": v(d)("library", "Catalogue pagination")
                }, [
                  u("span", P2, [
                    Pe(f(v(d)("library", "Page")) + " " + f(ne.value.page), 1),
                    ne.value.total > 0 ? (y(), E("span", M2, " · " + f(ne.value.from) + "–" + f(ne.value.to), 1)) : B("", !0)
                  ]),
                  ne.value.previousUrl ? (y(), E("a", {
                    key: 0,
                    href: ne.value.previousUrl
                  }, f(v(d)("library", "Previous")), 9, D2)) : (y(), E("span", F2, f(v(d)("library", "Previous")), 1)),
                  ne.value.nextUrl ? (y(), E("a", {
                    key: 2,
                    href: ne.value.nextUrl
                  }, f(v(d)("library", "Next")), 9, $2)) : (y(), E("span", z2, f(v(d)("library", "Next")), 1))
                ], 8, I2)) : B("", !0)
              ]))
            ])
          ]),
          _: 1
        }),
        Ae(v(CC), {
          ref_key: "sidebarComponent",
          ref: Bn,
          class: "library-native-item-sidebar",
          open: it.value,
          "no-toggle": "",
          loading: yt.loading,
          name: Ne.value?.title || v(d)("library", "Publication details"),
          subname: Ne.value?.creators || "",
          role: On.value ? "dialog" : void 0,
          "aria-modal": On.value ? "true" : void 0,
          "aria-labelledby": On.value ? "library-detail-drawer-heading" : void 0,
          "aria-describedby": On.value ? "library-detail-drawer-keyboard-hint" : void 0,
          onOpened: Yi,
          onClosed: po,
          onClose: ka
        }, {
          default: Me(() => [
            u("div", U2, [
              u("h2", {
                id: "library-detail-drawer-heading",
                ref_key: "sidebarHeading",
                ref: uo,
                class: "hidden-visually",
                tabindex: "-1"
              }, f(Ne.value?.title || v(d)("library", "Publication details")), 513),
              yt.loading && !Ne.value ? (y(), E("p", B2, f(v(d)("library", "Loading publication details…")), 1)) : yt.error ? (y(), E("div", {
                key: 1,
                class: "library-sidebar-state",
                role: yt.missing ? "status" : "alert"
              }, [
                u("p", null, f(yt.error), 1),
                yt.missing ? B("", !0) : (y(), E("button", {
                  key: 0,
                  type: "button",
                  class: "button secondary",
                  onClick: T[21] || (T[21] = (g) => Hn(ki.value, { historyMode: "none" }))
                }, f(v(d)("library", "Try again")), 1))
              ], 8, H2)) : Ne.value ? (y(), E(he, { key: 2 }, [
                u("p", j2, f(v(d)("library", "Escape closes; arrow keys browse neighbouring visible items.")), 1),
                u("img", {
                  class: "library-detail-drawer-cover",
                  src: Ne.value.coverUrl,
                  alt: `${v(d)("library", "Cover for")} ${Ne.value.title}`,
                  loading: "lazy"
                }, null, 8, V2),
                u("p", K2, [
                  Pe(f(Ne.value.publicationType || v(d)("library", "Publication")), 1),
                  Ne.value.extension ? (y(), E("span", G2, " · " + f(Ye(Ne.value.extension)), 1)) : B("", !0)
                ]),
                Ne.value.description ? (y(), E("p", q2, f(Ne.value.description), 1)) : B("", !0),
                u("dl", W2, [
                  Ne.value.publication ? (y(), E("div", Y2, [
                    u("dt", null, f(v(d)("library", "Series")), 1),
                    u("dd", null, f(Ne.value.publication), 1)
                  ])) : B("", !0),
                  Ne.value.publicationDate ? (y(), E("div", Z2, [
                    u("dt", null, f(v(d)("library", "Date")), 1),
                    u("dd", null, f(Ne.value.publicationDate), 1)
                  ])) : B("", !0),
                  Ne.value.publisher ? (y(), E("div", X2, [
                    u("dt", null, f(v(d)("library", "Publisher")), 1),
                    u("dd", null, f(Ne.value.publisher), 1)
                  ])) : B("", !0),
                  Ne.value.language ? (y(), E("div", J2, [
                    u("dt", null, f(v(d)("library", "Language")), 1),
                    u("dd", null, f(Ne.value.language), 1)
                  ])) : B("", !0),
                  Ne.value.shelf ? (y(), E("div", Q2, [
                    u("dt", null, f(v(d)("library", "Shelf")), 1),
                    u("dd", null, f(Ne.value.shelf), 1)
                  ])) : B("", !0),
                  Ne.value.cachedPath ? (y(), E("div", ex, [
                    u("dt", null, f(v(d)("library", "File")), 1),
                    u("dd", null, f(Ne.value.cachedPath), 1)
                  ])) : B("", !0)
                ]),
                Ne.value.metadataSource || Object.keys(Ne.value.fieldSources || {}).length ? (y(), E("section", tx, [
                  u("h3", nx, f(v(d)("library", "Metadata provenance")), 1),
                  Ne.value.metadataSource ? (y(), E("p", ix, f(v(d)("library", "Primary source")) + ": " + f(Ne.value.metadataSource), 1)) : B("", !0),
                  u("dl", null, [
                    (y(!0), E(he, null, ze(Ne.value.fieldSources, (g, re) => (y(), E("div", { key: re }, [
                      u("dt", null, f(re), 1),
                      u("dd", null, f(g), 1)
                    ]))), 128))
                  ])
                ])) : B("", !0),
                Ta(Ne.value).length ? (y(), E("section", ax, [
                  u("h3", rx, f(v(d)("library", "Review context")), 1),
                  u("dl", null, [
                    (y(!0), E(he, null, ze(Ta(Ne.value), (g) => (y(), E("div", {
                      key: g.field
                    }, [
                      u("dt", null, f(g.field) + " · " + f(g.sourceProvenance), 1),
                      u("dd", null, f(g.currentValue || "—") + " → " + f(g.scannerCandidate || "—"), 1)
                    ]))), 128))
                  ])
                ])) : B("", !0),
                u("p", ox, [
                  u("a", {
                    class: "button primary",
                    href: Ne.value.openUrl
                  }, f(v(d)("library", "Read")), 9, sx),
                  u("a", {
                    class: "button secondary",
                    href: Ne.value.detailsUrl
                  }, f(v(d)("library", "Open full details")), 9, lx)
                ]),
                u("nav", {
                  class: "library-detail-drawer-stepper",
                  "aria-label": v(d)("library", "Browse neighbouring items")
                }, [
                  u("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Sa.value,
                    onClick: T[22] || (T[22] = (g) => Zi(Sa.value))
                  }, f(v(d)("library", "Previous item")), 9, ux),
                  u("button", {
                    type: "button",
                    class: "button secondary",
                    disabled: !Wi.value,
                    onClick: T[23] || (T[23] = (g) => Zi(Wi.value))
                  }, f(v(d)("library", "Next item")), 9, dx)
                ], 8, cx)
              ], 64)) : B("", !0)
            ])
          ]),
          _: 1
        }, 8, ["open", "loading", "name", "subname", "role", "aria-modal", "aria-labelledby", "aria-describedby"])
      ]),
      _: 1
    }));
  }
}, of = qc("library", "catalogue", {}), $o = document.querySelector("#library-vue-root"), sf = {
  ...of,
  requestToken: $o?.dataset.requestToken || of.requestToken || ""
};
function _e(e) {
  return String(e ?? "");
}
function Fh(e) {
  return _e(e).toUpperCase();
}
function mx(e, t, n, i = _e) {
  for (const a of t) {
    const r = document.createElement("option");
    r.value = _e(a), r.textContent = i(a), _e(a) === _e(n) && (r.selected = !0), e.appendChild(r);
  }
}
function lf(e, t, n, i, a = "") {
  const r = document.createElement("label");
  r.textContent = t;
  const o = document.createElement("input");
  o.type = n === "q" ? "search" : "text", o.name = n, o.value = _e(i), o.placeholder = a, r.appendChild(o), e.appendChild(r);
}
function Ma(e, t, n, i, a, r, o = _e) {
  const s = document.createElement("label");
  s.textContent = t;
  const l = document.createElement("select");
  l.name = n;
  const p = document.createElement("option");
  p.value = "", p.textContent = a, l.appendChild(p), mx(l, r, i, o), s.appendChild(l), e.appendChild(s);
}
function Da(e) {
  const t = _e(e.requestToken || "");
  if (t === "") return null;
  const n = document.createElement("input");
  return n.type = "hidden", n.name = "requesttoken", n.value = t, n;
}
function vx(e, t = {}) {
  return _e(t?.publicationLandingUrl || `/apps/library/publications/${encodeURIComponent(_e(e || t?.publication || ""))}`);
}
function gx(e) {
  return _e(e.discoveryPage) === "publication";
}
function bx(e, t = {}) {
  return _e(t?.publicationYearLandingUrls?.[e] || `/apps/library/years/${encodeURIComponent(_e(e))}`);
}
function Yl(e) {
  return _e(e.discoveryPage) === "year";
}
function yx(e, t = {}) {
  return _e(t?.creatorLandingUrls?.[e] || `/apps/library/creators/${encodeURIComponent(_e(e))}`);
}
function Zl(e) {
  return _e(e.discoveryPage) === "creator";
}
function _x(e) {
  const t = e.activeFilters || {};
  return Object.entries(t).some(([n, i]) => n !== "sort" && _e(i).trim() !== "");
}
function wx() {
  const e = new URLSearchParams(window.location.search);
  e.delete("q"), e.delete("page");
  const t = e.toString();
  return t ? `?${t}` : "?";
}
function gr(e, t, n, i) {
  const a = document.createElement("a");
  return a.href = t, a.className = n, a.textContent = i, e.appendChild(a), a;
}
function Cx(e, t) {
  const n = document.createElement("span");
  return n.className = "library-muted", n.textContent = t, e.appendChild(n), n;
}
function Ex(e, t) {
  const n = e.activeFilters || {}, i = document.createElement("form");
  i.method = "get", i.className = "library-filter-bar", i.setAttribute("aria-label", d("library", "Catalogue search and filters")), lf(i, d("library", "Search title / author"), "q", n.q, "Camera, Eco, Rolleiflex..."), Ma(i, d("library", "Type"), "type", n.type, d("library", "All types"), ["book", "comic", "magazine", "journal", "manual", "catalogue", "other"]), lf(i, d("library", "Nextcloud tag"), "tag", n.tag, "photography"), Ma(i, d("library", "Format"), "format", n.format, d("library", "All formats"), e.formats || [], Fh), Ma(i, d("library", "Shelf"), "shelf", n.shelf, d("library", "All shelves"), e.shelves || []), Ma(i, d("library", "Scan status"), "status", n.status, d("library", "All scan statuses"), e.scanStatuses || []), Ma(i, d("library", "Sort"), "sort", n.sort || "title", d("library", "Sort by"), ["title", "recent", "publicationDate", "format"]), Ma(i, d("library", "Page size"), "limit", t.limit || 100, d("library", "Page size"), [25, 50, 100, 250, 500]);
  const a = document.createElement("button");
  a.type = "submit", a.className = "button primary", a.setAttribute("aria-label", d("library", "Apply catalogue filters")), a.textContent = d("library", "Apply filters");
  const r = document.createElement("a");
  return r.href = "?", r.className = "button secondary", r.setAttribute("aria-label", d("library", "Clear catalogue filters")), r.textContent = d("library", "Clear"), i.append(a, r), i;
}
function Sx() {
  const e = new URLSearchParams(window.location.search);
  if (e.get("batchMetadataApplyResult") !== "1") return null;
  const t = e.get("batchMetadataField") || "field", n = e.get("batchMetadataApplied") || "0", i = e.get("batchMetadataUnchanged") || "0", a = e.get("batchMetadataSkipped") || "0", r = document.createElement("p");
  return r.className = "library-notice library-batch-metadata-apply-result", r.textContent = d("library", `Batch metadata apply updated ${n} ${t} values; ${i} already matched, ${a} skipped.`), r;
}
function Tx(e, t) {
  const n = e.activeFilters || {}, i = document.createElement("form");
  i.method = "get", i.className = "library-quick-filter-bar", i.setAttribute("aria-label", d("library", "Quick catalogue filters"));
  let a = null;
  const r = () => {
    window.clearTimeout(a), a = window.setTimeout(() => i.requestSubmit(), 350);
  };
  for (const [h, b] of Object.entries(n)) {
    if (["q", "sort", "starred"].includes(h) || _e(b).trim() === "") continue;
    const C = document.createElement("input");
    C.type = "hidden", C.name = h, C.value = _e(b), i.appendChild(C);
  }
  const o = document.createElement("label");
  o.className = "library-quick-filter-search", o.textContent = d("library", "Search");
  const s = document.createElement("input");
  s.type = "search", s.name = "q", s.value = _e(n.q), s.placeholder = "Camera, Eco, Rolleiflex...", s.addEventListener("input", r), o.appendChild(s), i.appendChild(o);
  const l = [
    [d("library", "Sort"), "sort", n.sort || "title", [["title", d("library", "Title")], ["recent", d("library", "Recently added")], ["publicationDate", d("library", "Publication date")], ["publication", d("library", "Series")], ["lastOpened", d("library", "Recently opened")], ["format", d("library", "Format")]]],
    [d("library", "Starred"), "starred", n.starred || "", [["", d("library", "All")], ["1", d("library", "Starred")]]],
    [d("library", "Size"), "limit", t.limit || 100, [[25, "25"], [50, "50"], [100, "100"], [250, "250"], [500, "500"]]]
  ];
  for (const [h, b, C, N] of l) {
    const S = document.createElement("label");
    S.textContent = h;
    const R = document.createElement("select");
    R.name = b;
    for (const [L, D] of N) {
      const H = document.createElement("option");
      H.value = _e(L), H.textContent = _e(D), _e(L) === _e(C) && (H.selected = !0), R.appendChild(H);
    }
    R.addEventListener("change", () => i.requestSubmit()), S.appendChild(R), i.appendChild(S);
  }
  const p = document.createElement("button");
  p.type = "submit", p.className = "button primary", p.setAttribute("aria-label", d("library", "Apply catalogue filters")), p.textContent = d("library", "Apply filters");
  const c = document.createElement("a");
  return c.href = "?", c.className = "button secondary", c.setAttribute("aria-label", d("library", "Clear catalogue filters")), c.textContent = d("library", "Clear all"), i.append(p, c), i;
}
function kx(e, t) {
  const n = Array.isArray(e.items) ? e.items : [], i = e.cataloguePagination || {
    from: n.length > 0 ? 1 : 0,
    to: n.length,
    total: n.length
  }, a = _e(e.settingsUrl || ""), r = _e(e.metadataExportUrl || ""), o = _e(e.batchTagUrl || "/apps/library/bulk/tags"), s = _e(e.batchTagRemoveUrl || "/apps/library/bulk/tags/remove"), l = _e(e.batchMetadataResetUrl || "/apps/library/bulk/items/reset-filtered-fields"), p = _e(e.batchMetadataEditPreviewUrl || "/apps/library/bulk/items/edit-preview"), c = _e(e.batchCoverRefreshUrl || "/apps/library/bulk/covers/refresh"), h = document.createElement("div");
  h.className = "library-vue-catalogue library-vue-fallback", h.dataset.vueFallback = "true";
  const b = document.createElement("section");
  b.className = "library-panel", b.setAttribute("aria-labelledby", "library-catalogue-heading");
  const C = document.createElement("div");
  C.className = "library-catalogue-header";
  const N = document.createElement("div"), S = document.createElement("h2");
  S.id = "library-catalogue-heading", S.textContent = d("library", "Library");
  const R = document.createElement("p");
  R.className = "library-muted", R.textContent = d("library", "Browse as a shelf/gallery first; open the details panel when metadata matters."), N.append(S, R);
  const L = document.createElement("nav");
  if (L.className = "library-catalogue-toolbar", L.setAttribute("aria-label", d("library", "Library actions")), a) {
    const Y = document.createElement("a");
    Y.href = a, Y.className = "button secondary", Y.setAttribute("aria-label", "Open Library settings"), Y.textContent = d("library", "Settings"), L.appendChild(Y);
  }
  if (r) {
    const Y = document.createElement("a");
    Y.href = r, Y.className = "button secondary", Y.setAttribute("aria-label", "Export corrected metadata"), Y.textContent = d("library", "Export corrected metadata"), L.appendChild(Y);
  }
  if (e.metadataSidecarManifestUrl) {
    const Y = document.createElement("a");
    Y.href = e.metadataSidecarManifestUrl, Y.className = "button secondary", Y.setAttribute("aria-label", "Export sidecar manifest"), Y.textContent = d("library", "Sidecar manifest"), L.appendChild(Y);
  }
  if (e.metadataSidecarBundleUrl) {
    const Y = document.createElement("a");
    Y.href = e.metadataSidecarBundleUrl, Y.className = "button secondary", Y.setAttribute("aria-label", "Export sidecar ZIP"), Y.textContent = d("library", "Sidecar ZIP"), L.appendChild(Y);
  }
  C.append(N, L), b.appendChild(C);
  const D = Sx();
  D && b.appendChild(D), b.appendChild(Tx(e, i));
  const H = document.createElement("details");
  H.className = "library-filter-panel";
  const $ = document.createElement("summary");
  if ($.className = "library-filter-panel-summary", $.textContent = d("library", "Show catalogue filters"), H.append($, Ex(e, i)), b.appendChild(H), gx(e) || Yl(e) || Zl(e)) {
    const Y = document.createElement("section");
    Y.className = "library-discovery-header", Y.setAttribute("aria-labelledby", "library-discovery-heading");
    const Z = document.createElement("p");
    Z.className = "library-muted", Z.textContent = Zl(e) ? d("library", "Creator") : Yl(e) ? d("library", "Publication year") : d("library", "Publication / series");
    const ue = document.createElement("h3");
    ue.id = "library-discovery-heading", ue.textContent = _e(e.discoveryTitle || e.activeFilters?.publication || e.activeFilters?.year || e.activeFilters?.creator || "");
    const ke = document.createElement("p");
    ke.className = "library-muted", ke.textContent = `${i.total ?? n.length} ${Zl(e) ? d("library", "items by this creator. Sorted by publication context when available.") : Yl(e) ? d("library", "items from this publication year. Sorted by publication date when available.") : d("library", "items in this publication. Sorted by issue/date context when available.")}`;
    const Le = document.createElement("a");
    Le.href = "/apps/library/", Le.className = "button secondary", Le.textContent = d("library", "Back to full catalogue"), Y.append(Z, ue, ke, Le), b.appendChild(Y);
  }
  const ce = document.createElement("p");
  ce.className = "library-muted library-filter-result-summary", ce.textContent = `Showing ${i.from ?? 0}–${i.to ?? n.length} of ${i.total ?? n.length} catalogue items`;
  const pe = document.createElement("a");
  pe.href = "?", pe.textContent = ` ${d("library", "Clear all filters")}`, ce.appendChild(pe), b.appendChild(ce);
  const te = document.createElement("details");
  te.className = "library-batch-actions";
  const ne = document.createElement("summary");
  ne.textContent = `${d("library", "Batch actions for current results")} (${i.total ?? n.length} ${d("library", "Current filter result")})`;
  const P = document.createElement("form");
  P.method = "post", P.action = o, P.className = "library-batch-tag-form";
  const le = Da(e);
  le && P.appendChild(le);
  for (const [Y, Z] of Object.entries(e.activeFilters || {})) {
    if (_e(Z).trim() === "") continue;
    const ue = document.createElement("input");
    ue.type = "hidden", ue.name = Y, ue.value = _e(Z), P.appendChild(ue);
  }
  const ge = document.createElement("label");
  ge.textContent = d("library", "Apply Nextcloud tag to current results");
  const X = document.createElement("input");
  X.type = "text", X.name = "nextcloudTagName", X.placeholder = "batch-review", ge.appendChild(X);
  const ie = document.createElement("button");
  ie.type = "submit", ie.className = "button secondary", ie.textContent = d("library", "Apply Nextcloud tag to current results");
  const M = document.createElement("p");
  M.className = "library-muted", M.textContent = d("library", "Applies to every item matching the current filters, up to the safety cap. Nextcloud tags stay separate from Library metadata."), P.append(ge, ie, M);
  const F = document.createElement("form");
  F.method = "post", F.action = s, F.className = "library-batch-tag-remove-form";
  const W = Da(e);
  W && F.appendChild(W);
  for (const [Y, Z] of Object.entries(e.activeFilters || {})) {
    if (_e(Z).trim() === "") continue;
    const ue = document.createElement("input");
    ue.type = "hidden", ue.name = Y, ue.value = _e(Z), F.appendChild(ue);
  }
  const oe = document.createElement("label");
  oe.textContent = d("library", "Nextcloud tag");
  const Q = document.createElement("input");
  Q.type = "text", Q.name = "nextcloudTagName", Q.setAttribute("list", "library-nextcloud-tag-suggestions"), Q.placeholder = d("library", "e.g. Review"), Q.autocomplete = "off", oe.appendChild(Q);
  const de = document.createElement("button");
  de.type = "submit", de.className = "button secondary", de.textContent = d("library", "Remove tag from current results");
  const ve = document.createElement("p");
  ve.className = "library-muted", ve.textContent = d("library", "Removes an existing Nextcloud tag from every item matching the current filters. Library metadata is not changed."), F.append(oe, de, ve);
  const we = document.createElement("form");
  we.method = "post", we.action = l, we.className = "library-batch-metadata-reset-form";
  const Ce = Da(e);
  Ce && we.appendChild(Ce);
  for (const [Y, Z] of Object.entries(e.activeFilters || {})) {
    if (_e(Z).trim() === "") continue;
    const ue = document.createElement("input");
    ue.type = "hidden", ue.name = Y, ue.value = _e(Z), we.appendChild(ue);
  }
  const Ve = document.createElement("input");
  Ve.type = "hidden", Ve.name = "scannerConflicts", Ve.value = "1";
  const Te = document.createElement("button");
  Te.type = "submit", Te.className = "button secondary", Te.textContent = d("library", "Reset filtered metadata");
  const tt = document.createElement("p");
  tt.className = "library-muted", tt.textContent = d("library", "Reset current scanner-conflict results to scanner metadata. This only touches items whose current fields differ from stored scanner candidates."), we.append(Ve, Te, tt);
  const Qe = document.createElement("form");
  Qe.method = "post", Qe.action = p, Qe.className = "library-batch-metadata-edit-preview-form", Qe.target = "_blank";
  const ft = Da(e);
  ft && Qe.appendChild(ft);
  for (const [Y, Z] of Object.entries(e.activeFilters || {})) {
    if (_e(Z).trim() === "") continue;
    const ue = document.createElement("input");
    ue.type = "hidden", ue.name = Y, ue.value = _e(Z), Qe.appendChild(ue);
  }
  const bt = document.createElement("label");
  bt.textContent = d("library", "Metadata field");
  const nt = document.createElement("select");
  nt.name = "bulkEditField";
  for (const [Y, Z] of [["publicationType", "Publication type"], ["subtitle", "Subtitle"], ["creators", "Creators"], ["publication", "Series / periodical"], ["publicationDate", "Publication date"], ["language", "Language"], ["publisher", "Publisher"], ["genres", "Genres"], ["classifications", "Classifications"]]) {
    const ue = document.createElement("option");
    ue.value = Y, ue.textContent = d("library", Z), nt.appendChild(ue);
  }
  bt.appendChild(nt);
  const kt = document.createElement("label");
  kt.textContent = d("library", "Preview value");
  const U = document.createElement("input");
  U.type = "text", U.name = "bulkEditValue", U.placeholder = "magazine, de, photography...", U.autocomplete = "off", kt.appendChild(U);
  const m = document.createElement("button");
  m.type = "submit", m.className = "button secondary", m.textContent = d("library", "Preview & apply metadata edit");
  const w = document.createElement("p");
  w.className = "library-muted", w.textContent = d("library", "Preview first, then apply from the review page."), Qe.append(bt, kt, m, w);
  const A = document.createElement("form");
  A.method = "post", A.action = c, A.className = "library-batch-cover-refresh-form";
  const x = Da(e);
  x && A.appendChild(x);
  for (const [Y, Z] of Object.entries(e.activeFilters || {})) {
    if (_e(Z).trim() === "") continue;
    const ue = document.createElement("input");
    ue.type = "hidden", ue.name = Y, ue.value = _e(Z), A.appendChild(ue);
  }
  const O = document.createElement("button");
  O.type = "submit", O.className = "button secondary", O.textContent = d("library", "Request fresh cover previews");
  const z = document.createElement("p");
  z.className = "library-muted", z.textContent = d("library", "Refresh cover previews for current results by reloading this filtered view with no-store cover URLs. Source files and metadata are not changed."), A.append(O, z), te.append(ne, P, F, we, Qe, A), b.appendChild(te);
  const V = document.createElement("nav");
  V.className = "library-pagination", V.setAttribute("aria-label", d("library", "Catalogue pagination"));
  const K = document.createElement("span");
  K.className = "library-pagination-range", K.textContent = `Page ${i.page ?? 1} · ${i.from ?? 0}–${i.to ?? n.length}`, V.appendChild(K), b.appendChild(V);
  const J = Array.isArray(e.publicationSummaries) ? e.publicationSummaries : [], j = document.createElement("details");
  j.className = J.length > 0 ? "library-periodical-groups" : "library-periodical-groups library-periodical-groups-empty";
  const be = document.createElement("summary");
  be.className = "library-periodical-groups-summary", be.textContent = d("library", "Show top series and periodicals"), j.appendChild(be);
  const se = document.createElement("h3");
  se.textContent = J.length > 0 ? d("library", "Top series and periodicals") : d("library", "No series or periodicals found yet");
  const me = document.createElement("p");
  if (me.className = "library-muted", me.textContent = J.length > 0 ? d("library", "Jump into recurring publications with one click.") : d("library", "Add publication or series names in item details to build this shortcut panel."), j.append(se, me), J.length > 0) {
    const Y = document.createElement("ul");
    for (const Z of J) {
      const ue = document.createElement("li"), ke = document.createElement("a");
      ke.href = vx(Z.publication, Z), ke.textContent = _e(Z.publication);
      const Le = document.createElement("span");
      Le.className = "library-muted", Le.textContent = `${Z.itemCount} items`, ue.append(ke, Le), Y.appendChild(ue);
    }
    j.appendChild(Y);
  }
  b.appendChild(j);
  const Ee = Array.isArray(e.publicationYears) ? e.publicationYears : [];
  if (Ee.length > 0) {
    const Y = document.createElement("details");
    Y.className = "library-year-groups";
    const Z = document.createElement("summary");
    Z.className = "library-periodical-groups-summary", Z.textContent = d("library", "Show publication years");
    const ue = document.createElement("h3");
    ue.textContent = d("library", "Top publication years");
    const ke = document.createElement("p");
    ke.className = "library-muted", ke.textContent = d("library", "Jump into dated books, magazines, journals and comics by year.");
    const Le = document.createElement("ul");
    for (const Ke of Ee) {
      const Ue = document.createElement("li"), dt = document.createElement("a");
      dt.href = bx(Ke, e), dt.textContent = _e(Ke), Ue.appendChild(dt), Le.appendChild(Ue);
    }
    Y.append(Z, ue, ke, Le), b.appendChild(Y);
  }
  const Oe = Array.isArray(e.creators) ? e.creators : [];
  if (Oe.length > 0) {
    const Y = document.createElement("details");
    Y.className = "library-creator-groups";
    const Z = document.createElement("summary");
    Z.className = "library-periodical-groups-summary", Z.textContent = d("library", "Show creators");
    const ue = document.createElement("h3");
    ue.textContent = d("library", "Top creators");
    const ke = document.createElement("p");
    ke.className = "library-muted", ke.textContent = d("library", "Jump to a dedicated creator discovery page with exact full-field matching.");
    const Le = document.createElement("ul");
    for (const Ke of Oe) {
      const Ue = document.createElement("li"), dt = document.createElement("a");
      dt.href = yx(Ke, e), dt.textContent = _e(Ke), Ue.appendChild(dt), Le.appendChild(Ue);
    }
    Y.append(Z, ue, ke, Le), b.appendChild(Y);
  }
  if (n.length === 0) {
    const Y = document.createElement("div"), Z = Number(e.rootCount || 0), ue = Number(e.enabledRootCount || 0), ke = _x(e);
    Y.className = "library-empty-content", (Z === 0 || ue === 0) && Y.classList.add("library-first-run-guidance"), ke && Z > 0 && ue > 0 && Y.classList.add("library-filter-empty-state"), Y.setAttribute("role", "status");
    const Le = document.createElement("h3"), Ke = document.createElement("p");
    Ke.className = "library-muted";
    const Ue = document.createElement("p");
    Ue.className = "library-empty-actions", Z === 0 ? (Le.textContent = d("library", "Start with one Library root"), Ke.textContent = d("library", "Add one folder path that already exists in Nextcloud Files, then run a scan to build the catalogue."), gr(Ue, a, "button primary", d("library", "Add a Library root")), Cx(Ue, d("library", "Run a scan after saving a root"))) : ue === 0 ? (Le.textContent = d("library", "No enabled Library roots"), Ke.textContent = d("library", "Enable a saved root in settings, then scan enabled roots to refresh the catalogue."), gr(Ue, a, "button primary", d("library", "Open Library settings"))) : ke ? (Le.textContent = d("library", "No matches for the current filters"), Ke.textContent = d("library", "Try a broader search, remove one active chip, or clear every catalogue filter."), gr(Ue, wx(), "button secondary", d("library", "Clear search")), gr(Ue, "?", "button primary", d("library", "Clear all filters"))) : (Le.textContent = d("library", "No catalogue items yet"), Ke.textContent = d("library", "Run a scan from settings to index enabled roots. Source files stay in Nextcloud Files."), gr(Ue, a, "button primary", d("library", "Run a scan from settings"))), Y.append(Le, Ke, Ue), b.appendChild(Y);
  } else {
    const Y = document.createElement("div");
    Y.className = "library-cover-gallery";
    for (const Z of n) {
      const ue = document.createElement("article");
      ue.className = "library-cover-card";
      const ke = document.createElement("a");
      ke.className = "library-cover-link", ke.href = _e(Z.openUrl || "#"), ke.setAttribute("aria-label", `Read ${_e(Z.title || "publication")}`);
      const Le = document.createElement("img");
      Le.className = "library-cover-image", Le.src = _e(Z.coverUrl || ""), Le.alt = `Cover for ${_e(Z.title || "publication")}`, Le.loading = "lazy", ke.appendChild(Le);
      const Ke = Da(e), Ue = document.createElement("form");
      Ue.method = "post", Ue.action = _e(Z.starUrl || ""), Ue.className = "library-cover-star-form", Ke && Ue.appendChild(Ke);
      const dt = document.createElement("input");
      dt.type = "hidden", dt.name = "returnTo", dt.value = "catalogue";
      const at = document.createElement("input");
      at.type = "hidden", at.name = "starred", at.value = Z.starred ? "0" : "1";
      const ut = document.createElement("button");
      ut.type = "submit", ut.className = Z.starred ? "library-cover-star-button library-cover-star-button--starred" : "library-cover-star-button", ut.setAttribute("aria-pressed", Z.starred ? "true" : "false"), ut.setAttribute("aria-label", Z.starred ? d("library", "Unstar this publication") : d("library", "Star this publication")), ut.title = Z.starred ? d("library", "Unstar this publication") : d("library", "Star this publication"), ut.textContent = Z.starred ? "★" : "☆", Ue.append(dt, at, ut);
      const Xt = document.createElement("div");
      Xt.className = "library-cover-summary";
      const zn = document.createElement("h3");
      if (zn.textContent = _e(Z.title || "Untitled publication"), Xt.appendChild(zn), Z.creators) {
        const on = document.createElement("p");
        on.className = "library-creator", on.textContent = _e(Z.creators), Xt.appendChild(on);
      }
      const Un = document.createElement("dl");
      Un.className = "library-cover-detail-list";
      const Vt = [
        ["Type", _e(Z.publicationType || "other")],
        ["Format", Z.extension ? Fh(Z.extension) : ""],
        ["Shelf", Z.shelf ? _e(Z.shelf) : ""]
      ].filter(([, on]) => on !== "");
      for (const [on, Ti] of Vt) {
        const sn = document.createElement("div");
        sn.className = "library-cover-detail-chip";
        const Jt = document.createElement("dt");
        Jt.textContent = on;
        const Kt = document.createElement("dd");
        Kt.textContent = Ti, sn.append(Jt, Kt), Un.appendChild(sn);
      }
      Xt.appendChild(Un);
      const Nn = document.createElement("p"), It = document.createElement("a");
      It.href = _e(Z.openUrl || "#"), It.textContent = d("library", "Read");
      const Ei = document.createElement("a");
      Ei.href = _e(Z.filesUrl || "#"), Ei.textContent = d("library", "Show in Files");
      const rn = document.createElement("a");
      rn.href = _e(Z.downloadUrl || "#"), rn.textContent = d("library", "Download source");
      const Si = document.createElement("a");
      Si.href = _e(Z.detailsUrl || "#"), Si.textContent = d("library", "Details"), Nn.append(It, document.createTextNode(" · "), Ei, document.createTextNode(" · "), rn, document.createTextNode(" · "), Si), Xt.appendChild(Nn), ue.append(ke, Ue, Xt), Y.appendChild(ue);
    }
    b.appendChild(Y);
  }
  return h.appendChild(b), h;
}
if ($o)
  try {
    kg(hx, { state: sf }).mount($o);
  } catch (e) {
    console.error("[library] Vue mount failed; rendering fallback catalogue", e), $o.replaceChildren(kx(sf));
  }
